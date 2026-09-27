import { useEffect, useRef, useState } from 'react'
import type { SimProps } from '../types'
import { Markdown } from '../../components/Markdown'
import {
  BIASES, BIAS_EXPLAIN, BIAS_LABEL, DILEMMAS, OUTCOME_LABEL, SUNSET,
  canStop, choose, clockLabel, current, debrief, enter, initialState, narrowed, takeStop, timeLimit, visibleCues,
  type PDState,
} from './dilemmaModel'

// Timed leadership dilemmas on a ridge day. The timer shrinks with stress and fatigue; when it runs out,
// the default ("carry on") happens. Biases are revealed only in the debrief.

function Meter({ label, value, danger }: { label: string; value: number; danger: boolean }) {
  return (
    <div className={`meter ${danger ? 'danger' : ''}`}>
      <span className="meter-label">{label}</span>
      <div className="meter-bar invert"><div style={{ width: `${Math.max(0, Math.min(100, value))}%` }} /></div>
      <span className="meter-val">{Math.round(value)}</span>
    </div>
  )
}

export function PriorityDilemmas({ onScore }: SimProps) {
  const [s, setS] = useState<PDState | null>(null)
  const [timed, setTimed] = useState(true)
  const [left, setLeft] = useState(0)
  const stateRef = useRef<PDState | null>(null)
  useEffect(() => { stateRef.current = s }, [s])

  const d = s ? current(s) : undefined
  // Restart the countdown whenever a new scene appears or a STOP is taken.
  const sceneKey = s && !s.done ? `${s.step}-${s.stops}` : ''

  useEffect(() => {
    if (!sceneKey || !timed || !stateRef.current) return
    const total = timeLimit(stateRef.current)
    const started = Date.now()
    setLeft(total)
    const t = window.setInterval(() => {
      const remaining = Math.max(0, total - (Date.now() - started) / 1000)
      setLeft(remaining)
      if (remaining <= 0) {
        window.clearInterval(t)
        const cur = stateRef.current
        if (cur && !cur.done) finish(choose(cur, null))
      }
    }, 200)
    return () => window.clearInterval(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sceneKey, timed])

  function finish(next: PDState) {
    setS(next)
    if (next.done) onScore(debrief(next).score)
  }

  if (!s) {
    return (
      <div>
        <p>You lead three friends on a 16 km autumn ridge loop in the mountains. Decisions come one after another, each with a countdown. <strong>Stress and fatigue shorten the countdown</strong> and can hide details from you. If time runs out, the default happens — usually “carry on as we were”. Once per scene you may take a <strong>STOP</strong>: a minute of slow breathing that lowers stress and restarts a longer countdown, at the cost of 5 minutes of daylight.</p>
        <p className="muted small">There are no right answers shown along the way; the debrief reveals which choices were driven by plan continuation, sunk cost, normalization of deviance, groupthink or tunnel vision.</p>
        <label className="small"><input type="checkbox" checked={timed} onChange={(e) => setTimed(e.target.checked)} /> Timed decisions (untick for a first, untimed run)</label>
        <div><button className="btn primary" onClick={() => setS(enter(initialState()))}>Start at the trailhead</button></div>
      </div>
    )
  }

  const result = s.done ? debrief(s) : null
  const pct = timed && s && !s.done ? Math.max(0, Math.min(100, (left / timeLimit(s)) * 100)) : 0

  return (
    <div>
      <h4>{clockLabel(s.clock)} · sunset {clockLabel(SUNSET)}{s.done ? ' · day over' : ''}</h4>
      <div className="meters">
        <Meter label="Stress" value={s.stress} danger={s.stress >= 60} />
        <Meter label="Fatigue" value={s.fatigue} danger={s.fatigue >= 70} />
      </div>

      {d && !s.done && (
        <div>
          <h4>{d.title}</h4>
          <Markdown md={d.text} />
          <p className="small"><strong>What you notice:</strong></p>
          <ul className="small">{visibleCues(s, d).map((c) => <li key={c.text}>{c.text}</li>)}</ul>
          {narrowed(s) && <p className="small muted">Your attention feels narrow — you may be missing something.</p>}
          {timed && (
            <div className="meter" aria-live="polite">
              <span className="meter-label">Time</span>
              <div className="meter-bar"><div style={{ width: `${pct}%` }} /></div>
              <span className="meter-val">{Math.ceil(left)} s</span>
            </div>
          )}
          <div className="options">
            {d.options.map((o) => (
              <button key={o.id} className="option" onClick={() => finish(choose(s, o.id))}>
                <Markdown md={o.text} inline />
              </button>
            ))}
          </div>
          <button className="btn" disabled={!canStop(s)} onClick={() => setS(takeStop(s))}>STOP — breathe, look around (−5 min)</button>
        </div>
      )}

      {result && (
        <div className="sim-result">
          <div className="score">{result.score}%</div>
          <div><strong>Outcome:</strong> {OUTCOME_LABEL[result.outcome]}</div>
          <p className="small">Timeouts: {result.timeouts} · STOPs taken: {result.stops}</p>
          <strong>Your decisions</strong>
          <ol className="debrief">
            {s.log.map((r) => {
              const dl = DILEMMAS.find((x) => x.id === r.dilemma)!
              const o = dl.options.find((x) => x.id === r.option)!
              const best = dl.options.find((x) => x.quality === 2)
              return (
                <li key={r.dilemma} className={`q${r.quality}`}>
                  <span className="dq">{['Poor', 'Acceptable', 'Good'][r.quality]}</span> <strong>{dl.title}</strong> ({clockLabel(r.clock)}, stress {r.stress}, fatigue {r.fatigue}, {r.limit} s){r.timedOut ? ' — time ran out, the default happened' : ''}: {o.text}
                  <div className="small">{o.feedback}{r.biases.length > 0 && <> <em>Trap: {r.biases.map((b) => BIAS_LABEL[b]).join(', ')}.</em></>}</div>
                  {r.quality < 2 && best && <div className="small muted">Better: {best.text}</div>}
                </li>
              )
            })}
          </ol>
          <strong>Biases that drove your day</strong>
          <ul className="small">
            {BIASES.filter((b) => result.biasCounts[b] > 0).map((b) => <li key={b}><strong>{BIAS_LABEL[b]} ×{result.biasCounts[b]}:</strong> {BIAS_EXPLAIN[b]}</li>)}
            {BIASES.every((b) => result.biasCounts[b] === 0) && <li>None of the five traps showed up in your choices.</li>}
          </ul>
          {result.missedCues.length > 0 && (<><strong>Cues you missed</strong><ul className="small">{result.missedCues.map((c) => <li key={c}>{c}</li>)}</ul></>)}
          <strong>What to take away</strong>
          <ul className="small">{result.notes.map((n) => <li key={n}>{n}</li>)}</ul>
          <button className="btn" onClick={() => setS(null)}>Play again</button>
        </div>
      )}
    </div>
  )
}
