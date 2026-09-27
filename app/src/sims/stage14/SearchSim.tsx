import { useMemo, useState } from 'react'
import type { SimProps } from '../types'
import {
  SCENARIOS, bayesUpdate, completeWithOptimal, drift, initialBelief, optimalAllocation, optimalPlan, podForHours, posOf, scorePlan, uniformPlan,
  type Belief, type SearchScenario,
} from './searchModel'

// Search Planner: allocate searcher-hours to segments each operational period. POD comes from
// coverage (POD = 1 − e^(−C)); after each unsuccessful period the POAs are updated with Bayes' rule.
// Score = your cumulative probability of success as a share of the optimal plan's.

const MOVING_M = 0.3
const pct = (x: number) => `${Math.round(x * 100)}%`

const chance = (p: number) => Math.random() < p

function sampleIndex(weights: number[]): number {
  const total = weights.reduce((a, w) => a + w, 0)
  let r = Math.random() * total
  for (let i = 0; i < weights.length; i++) {
    r -= weights[i]
    if (r <= 0) return i
  }
  return weights.length - 1
}

interface Run {
  belief: Belief
  period: number
  allocs: number[][]
  /** Hidden true location: segment index, or -1 for rest of world. */
  truth: number
  found: string | null
  log: string[]
}

function freshRun(s: SearchScenario): Run {
  const w = [...s.segments.map((g) => g.poa), s.row]
  const i = sampleIndex(w)
  return { belief: initialBelief(s), period: 0, allocs: [], truth: i === s.segments.length ? -1 : i, found: null, log: [] }
}

export function SearchSim({ onScore }: SimProps) {
  const [sid, setSid] = useState(SCENARIOS[0].id)
  const [moving, setMoving] = useState(false)
  const s = SCENARIOS.find((x) => x.id === sid)!
  const [run, setRun] = useState<Run>(() => freshRun(s))
  const [alloc, setAlloc] = useState<number[]>(() => s.segments.map(() => 0))
  const [hint, setHint] = useState(false)
  const m = moving ? MOVING_M : 0

  const reset = (next: SearchScenario, mv = moving) => {
    setRun(freshRun(next))
    setAlloc(next.segments.map(() => 0))
    setHint(false)
    setMoving(mv)
  }

  const used = alloc.reduce((a, h) => a + h, 0)
  const left = s.hoursPerPeriod - used
  const pods = s.segments.map((g, i) => podForHours(g, alloc[i]))
  const pos = posOf(run.belief, pods)
  const done = run.period >= s.periods || run.found !== null
  const best = useMemo(() => optimalAllocation(run.belief, s, s.hoursPerPeriod), [run.belief, s])

  const setHours = (i: number, h: number) => {
    const others = alloc.reduce((a, x, j) => (j === i ? a : a + x), 0)
    const v = Math.max(0, Math.min(h, s.hoursPerPeriod - others))
    setAlloc(alloc.map((x, j) => (j === i ? v : x)))
  }

  const runPeriod = () => {
    const allocs = [...run.allocs, alloc]
    let truth = run.truth
    let found: string | null = null
    if (truth >= 0 && chance(pods[truth])) found = s.segments[truth].name
    let belief = bayesUpdate(run.belief, pods)
    const log = [...run.log, `Period ${run.period + 1}: POS ${pct(pos)}${found ? ` — subject FOUND in ${found}` : ' — not found'}`]
    const period = run.period + 1
    if (!found && m > 0 && period < s.periods) {
      belief = drift(belief, s, m)
      if (truth >= 0 && chance(m)) {
        const w = [...s.segments.map((g) => g.area), s.rowDriftWeight]
        const j = sampleIndex(w)
        truth = j === s.segments.length ? -1 : j
      }
    }
    setRun({ belief, period, allocs, truth, found, log })
    setAlloc(s.segments.map(() => 0))
    setHint(false)
    // A search that ends early (subject found) is scored with the remaining periods filled optimally.
    if (found || period >= s.periods) onScore(scorePlan(s, completeWithOptimal(s, allocs, m), m).score)
  }

  const finalScore = done ? scorePlan(s, completeWithOptimal(s, run.allocs, m), m) : null
  const optimalCum = optimalPlan(s, m).cumPos
  const uniformCum = uniformPlan(s, m).cumPos

  return (
    <div>
      <div className="chip-group">
        {SCENARIOS.map((x) => (
          <button key={x.id} className={`chip ${x.id === sid ? 'on' : ''}`} onClick={() => { setSid(x.id); reset(x) }}>{x.title}</button>
        ))}
      </div>
      <div className="callout callout-info">{s.text}</div>
      <label className="small">
        <input type="checkbox" checked={moving} onChange={(e) => reset(s, e.target.checked)} /> The subject keeps moving between periods (instead of staying put)
      </label>

      <p className="muted small">
        Period {Math.min(run.period + 1, s.periods)} of {s.periods}. Rest of world (outside all segments): <strong>{pct(run.belief.row)}</strong>.
        POD = 1 − e<sup>−C</sup>, coverage C = W·L/A with track length L = hours × speed.
      </p>

      <div className="table-wrap">
        <table>
          <thead>
            <tr><th>Segment</th><th>Area</th><th>W</th><th>POA</th><th>Hours</th><th>POD</th><th>POS</th></tr>
          </thead>
          <tbody>
            {s.segments.map((g, i) => (
              <tr key={g.id}>
                <td><strong>{g.name}</strong><br /><span className="muted small">{g.terrain}</span></td>
                <td>{g.area} km²</td>
                <td>{g.sweepWidth} m</td>
                <td>
                  {pct(run.belief.poa[i])}
                  <div className="bar"><div style={{ width: `${run.belief.poa[i] * 100}%` }} /></div>
                </td>
                <td>
                  <input
                    type="range" min={0} max={s.hoursPerPeriod} step={1} value={alloc[i]} disabled={done}
                    aria-label={`Searcher-hours for ${g.name}`}
                    onChange={(e) => setHours(i, Number(e.target.value))}
                  />
                  <span className="val"> {alloc[i]} h</span>
                  {hint && <div className="muted small">optimal ≈ {best[i]} h</div>}
                </td>
                <td>{pct(pods[i])}</td>
                <td>{pct(run.belief.poa[i] * pods[i])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="small">Searcher-hours used this period</div>
      <div className="stack-bar"><div style={{ width: `${(used / s.hoursPerPeriod) * 100}%`, background: 'var(--accent)' }}>{used} / {s.hoursPerPeriod} h</div></div>
      <p>This period’s probability of success: <strong>{pct(pos)}</strong>{left > 0 && !done ? <span className="muted"> · {left} h unassigned</span> : null}</p>

      {!done && (
        <div className="row-btns">
          <button className="btn primary" disabled={used === 0} onClick={runPeriod}>Send the teams</button>
          <button className="btn" onClick={() => setHint(!hint)}>{hint ? 'Hide' : 'Show'} optimal allocation</button>
        </div>
      )}

      {run.log.length > 0 && <ul className="small">{run.log.map((l) => <li key={l}>{l}</li>)}</ul>}

      {done && finalScore && (
        <div className="sim-result">
          <div className="score">{finalScore.score}%</div>
          <div>
            {run.found ? `Found in ${run.found}. ` : run.truth === -1 ? 'Not found — the subject was outside every segment (rest of world). ' : `Not found — the subject was in ${s.segments[run.truth].name}. `}
            Your plan’s cumulative probability of success{run.allocs.length < s.periods ? ' (unused periods filled optimally)' : ''}:<strong>{pct(finalScore.cumPos)}</strong>; the optimal plan: {pct(optimalCum)}; searching every segment evenly by area: {pct(uniformCum)}.
          </div>
          <p className="muted small">
            Luck decides a single search; the score judges the plan. Notice how effort flows to small, high-POA segments with wide sweep widths first, then — as unsuccessful searches lower their POA — to the next best segments.
            {moving ? ' With a moving subject, searched segments refill and ROW grows: this is why searchers ask lost people to stay put.' : ' Now tick “keeps moving” and compare.'}
          </p>
          <button className="btn" onClick={() => reset(s)}>Search again</button>
        </div>
      )}
    </div>
  )
}
