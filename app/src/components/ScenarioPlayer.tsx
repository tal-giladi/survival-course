import { useState } from 'react'
import type { Scenario, ScenarioOption, ScenarioState, ScenarioVar } from '../content/types'
import { actions, useProgress } from '../progress/store'
import { Markdown } from './Markdown'

// Generic branching-scenario engine. A scenario is pure data: nodes, options, and effects on a
// shared state model. Decision quality is hidden until the debrief so the learner reasons, not guesses.

const meters: { key: ScenarioVar; label: string; max: number; unit?: string; danger: (v: number) => boolean; invert?: boolean }[] = [
  { key: 'warmth', label: 'Warmth', max: 100, danger: (v) => v < 35 },
  { key: 'energy', label: 'Energy', max: 100, danger: (v) => v < 25 },
  { key: 'morale', label: 'Morale', max: 100, danger: (v) => v < 30 },
  { key: 'water', label: 'Water', max: 3000, unit: 'ml', danger: (v) => v < 250 },
  { key: 'battery', label: 'Phone', max: 100, unit: '%', danger: (v) => v < 10 },
  { key: 'injury', label: 'Injury', max: 100, danger: (v) => v > 50, invert: true },
  { key: 'lost', label: 'Disorientation', max: 100, danger: (v) => v > 60, invert: true },
  { key: 'rescue', label: 'Chance of being found soon', max: 100, unit: '%', danger: (v) => v < 20 },
]

const clamp = (k: ScenarioVar, v: number) => (k === 'minutes' ? Math.max(0, v) : k === 'water' ? Math.max(0, Math.min(5000, v)) : Math.max(0, Math.min(100, v)))

function apply(s: ScenarioState, o: ScenarioOption): ScenarioState {
  const next: ScenarioState = { ...s, flags: [...s.flags] }
  for (const [k, v] of Object.entries(o.effect.set ?? {})) next[k as ScenarioVar] = clamp(k as ScenarioVar, v as number)
  for (const [k, v] of Object.entries(o.effect.add ?? {})) next[k as ScenarioVar] = clamp(k as ScenarioVar, next[k as ScenarioVar] + (v as number))
  for (const f of o.effect.flags ?? []) if (!next.flags.includes(f)) next.flags.push(f)
  next.flags = next.flags.filter((f) => !(o.effect.clearFlags ?? []).includes(f))
  return next
}

export function clock(start: string, minutes: number) {
  const [h, m] = start.split(':').map(Number)
  const total = h * 60 + m + minutes
  const day = Math.floor(total / 1440) + 1
  const hh = Math.floor((total % 1440) / 60)
  const mm = total % 60
  return `Day ${day}, ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`
}

interface Step {
  node: string
  option: ScenarioOption
}

export function ScenarioPlayer({ scenario }: { scenario: Scenario }) {
  const progress = useProgress()
  const [state, setState] = useState<ScenarioState>(scenario.initial)
  const [nodeId, setNodeId] = useState(scenario.start)
  const [history, setHistory] = useState<Step[]>([])
  const [pending, setPending] = useState<ScenarioOption | null>(null)
  const [started, setStarted] = useState(false)
  const node = scenario.nodes.find((n) => n.id === nodeId)!
  const rec = progress.scenarios[scenario.id]

  const choose = (o: ScenarioOption) => {
    const nextState = apply(state, o)
    const steps = [...history, { node: nodeId, option: o }]
    setState(nextState)
    setHistory(steps)
    setPending(o)
    const nextNode = scenario.nodes.find((n) => n.id === o.next)
    if (nextNode?.end) {
      const quality = (steps.reduce((a, s) => a + s.option.quality, 0) / (steps.length * 2)) * 100
      actions.recordScenario(scenario.id, quality, nextNode.end.outcome)
      actions.recordSim(scenario.id, quality)
    }
  }
  const proceed = () => {
    if (pending) setNodeId(pending.next)
    setPending(null)
  }
  const restart = () => {
    setState(scenario.initial)
    setNodeId(scenario.start)
    setHistory([])
    setPending(null)
  }

  if (!started) {
    return (
      <div className="scenario-player">
        <h3>{scenario.title}</h3>
        <Markdown md={scenario.intro} />
        {rec && <p className="muted">Best decision quality: {rec.best}% · {rec.runs} run(s)</p>}
        <button className="btn primary" onClick={() => setStarted(true)}>Start scenario</button>
      </div>
    )
  }

  const options = node.options.filter((o) => (!o.requiresFlag || state.flags.includes(o.requiresFlag)) && (!o.hiddenIfFlag || !state.flags.includes(o.hiddenIfFlag)))
  const quality = history.length ? Math.round((history.reduce((a, s) => a + s.option.quality, 0) / (history.length * 2)) * 100) : 0

  return (
    <div className="scenario-player">
      <div className="scenario-status">
        <div className="clock">🕑 {clock(scenario.startClock, state.minutes)}</div>
        <div className="meters">
          {meters.map((m) => {
            const v = state[m.key]
            const pct = Math.min(100, (v / m.max) * 100)
            return (
              <div key={m.key} className={`meter ${m.danger(v) ? 'danger' : ''}`} title={m.label}>
                <span className="meter-label">{m.label}</span>
                <div className={`meter-bar ${m.invert ? 'invert' : ''}`}><div style={{ width: `${pct}%` }} /></div>
                <span className="meter-val">{Math.round(v)}{m.unit ?? ''}</span>
              </div>
            )
          })}
        </div>
      </div>

      {pending ? (
        <div className="scenario-node">
          <h4>You chose: {pending.text}</h4>
          <Markdown md={pending.feedback} />
          <button className="btn primary" onClick={proceed}>Continue</button>
        </div>
      ) : node.end ? (
        <div className="scenario-node">
          <h4>{node.title}</h4>
          <Markdown md={node.text} />
          <div className={`outcome outcome-${node.end.outcome}`}>
            <strong>Outcome: {node.end.outcome.replace('-', ' ')}</strong>
            <Markdown md={node.end.summary} />
          </div>
          <h4>Debrief — decision quality {quality}%</h4>
          <ol className="debrief">
            {history.map((s, i) => (
              <li key={i} className={`q${s.option.quality}`}>
                <span className="dq">{['Poor', 'Acceptable', 'Good'][s.option.quality]}</span> <strong>{scenario.nodes.find((n) => n.id === s.node)?.title}:</strong> {s.option.text}
              </li>
            ))}
          </ol>
          <button className="btn" onClick={restart}>Play again with different choices</button>
        </div>
      ) : (
        <div className="scenario-node">
          <h4>{node.title}</h4>
          <Markdown md={node.text} />
          <div className="options">
            {options.map((o) => (
              <button key={o.id} className="option" onClick={() => choose(o)}>
                <Markdown md={o.text} inline />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
