import { useState } from 'react'
import type { SimProps } from '../types'
import { EVAC_CASES, PLANS, URGENCIES, estimate, fmtHours, scoreEvac, type Plan, type Urgency } from './evacModel'
import { Markdown } from '../../components/Markdown'

// Evacuation Decision simulator: go/no-go, urgency and plan for a series of patients.
// Model and grading live in evacModel.ts.

const COMMS = { satellite: 'Satellite messenger', phone: 'Phone with signal', none: 'No communication' }

export function EvacDecision({ onScore }: SimProps) {
  const [i, setI] = useState(0)
  const [u, setU] = useState<Urgency | null>(null)
  const [p, setP] = useState<Plan | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [scores, setScores] = useState<number[]>([])
  const c = EVAC_CASES[i]
  const finished = scores.length === EVAC_CASES.length && !revealed

  const submit = () => {
    if (!u || !p) return
    setRevealed(true)
    const ns = [...scores, scoreEvac(c, u, p).score]
    setScores(ns)
    if (ns.length === EVAC_CASES.length) onScore(Math.round(ns.reduce((a, b) => a + b, 0) / ns.length))
  }
  const next = () => {
    setRevealed(false)
    setU(null)
    setP(null)
    if (i + 1 < EVAC_CASES.length) setI(i + 1)
  }
  const restart = () => {
    setI(0)
    setU(null)
    setP(null)
    setRevealed(false)
    setScores([])
  }

  if (finished) {
    const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
    return (
      <div className="sim-result">
        <div className="score">{avg}/100</div>
        <p>{avg >= 85 ? 'Sound evacuation judgment: you matched urgency to the patient’s trend and the plan to the terrain, weather and people you had.' : avg >= 60 ? 'Reasonable. Look again at the cases where you over- or under-called urgency — the trend is usually the deciding clue.' : 'Revisit lesson 9: urgency comes from the patient (and trend); the plan comes from the resources, terrain, weather and daylight.'}</p>
        <button className="btn primary" onClick={restart}>Start again</button>
      </div>
    )
  }

  const r = u && p ? scoreEvac(c, u, p) : null
  return (
    <div>
      <div className="muted small">Case {i + 1} of {EVAC_CASES.length}</div>
      <h4>{c.env}</h4>
      <div className="table-wrap">
        <table className="small">
          <tbody>
            <tr><th>Patient</th><td>{c.patient}</td></tr>
            <tr><th>Trend</th><td>{c.trend}</td></tr>
            <tr><th>To road-head</th><td>{c.distanceKm} km, {c.terrain}</td></tr>
            <tr><th>Weather / light</th><td>{c.weather}; about {c.daylightH} h of daylight left</td></tr>
            <tr><th>Group</th><td>{c.group} able people besides the patient</td></tr>
            <tr><th>Comms</th><td>{COMMS[c.comms]}{c.comms === 'none' ? ` — someone will raise the alarm in about ${c.overdueH} h` : ''}</td></tr>
            <tr><th>Can walk?</th><td>{c.canWalk ? 'Yes' : 'No'}</td></tr>
          </tbody>
        </table>
      </div>
      <p><strong>1. How urgent is evacuation?</strong></p>
      <div className="chip-group">
        {URGENCIES.map((x) => (
          <button key={x.id} className={'chip' + (u === x.id ? ' on' : '')} disabled={revealed} onClick={() => setU(x.id)} title={x.desc}>{x.label}</button>
        ))}
      </div>
      <p><strong>2. What is your plan?</strong></p>
      <div className="options">
        {PLANS.map((x) => {
          const g = c.grades[x.id]
          const cls = revealed ? (g === 2 ? ' right' : p === x.id && g === 0 ? ' wrong' : p === x.id ? ' chosen' : '') : p === x.id ? ' chosen' : ''
          return (
            <button key={x.id} className={'option' + cls} disabled={revealed} onClick={() => setP(x.id)}>
              {x.label}
              {revealed && <div className="why">{['Poor', 'Acceptable', 'Best'][g]} — {c.why[x.id]}</div>}
            </button>
          )
        })}
      </div>
      {!revealed && <button className="btn primary" disabled={!u || !p} onClick={submit}>Decide</button>}
      {revealed && r && (
        <div className="sim-result">
          <div>Urgency: you chose <strong>{u}</strong>, best is <strong>{c.bestUrgency}</strong> ({r.urgencyPts}/40). Plan: {r.planPts}/60.</div>
          <Markdown md={c.debrief} />
          <div className="small"><strong>Rough time to hand-over at the road-head (planning estimates):</strong></div>
          <div className="table-wrap">
            <table className="small">
              <thead><tr><th>Plan</th><th>Feasible?</th><th>Time</th><th>How it adds up</th></tr></thead>
              <tbody>
                {PLANS.map((x) => {
                  const e = estimate(c, x.id)
                  return (
                    <tr key={x.id}>
                      <td>{x.label.split(':')[0]}</td>
                      <td>{e.feasible ? 'yes' : 'no'}</td>
                      <td>{fmtHours(e.hours)}</td>
                      <td>{e.note}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <button className="btn primary" onClick={next}>{i + 1 < EVAC_CASES.length ? 'Next case' : 'See score'}</button>
        </div>
      )}
    </div>
  )
}
