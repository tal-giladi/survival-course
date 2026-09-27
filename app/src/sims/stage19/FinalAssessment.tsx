import { useState } from 'react'
import type { SimProps } from '../types'
import { finalAssessment } from '../../content/reviews'
import { QuestionView } from '../../components/QuestionView'
import { actions } from '../../progress/store'

// Final assessment: runs the whole bank in order and reports a score per domain.
// Question ids follow `fa-<domain>-<n>`; the domain drives the breakdown.

export const DOMAINS: Record<string, string> = {
  know: 'Core knowledge',
  nav: 'Navigation',
  phys: 'Physiology',
  aid: 'First aid',
  fire: 'Fire',
  water: 'Water',
  shelter: 'Shelter',
  food: 'Food',
  track: 'Tracking',
  psych: 'Psychology',
  risk: 'Risk management',
  scen: 'Scenario decisions',
}

export const domainOf = (id: string) => id.split('-')[1] ?? 'know'

export function FinalAssessment({ onScore }: SimProps) {
  const [i, setI] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [started, setStarted] = useState(false)
  const qs = finalAssessment

  if (qs.length === 0) return <p className="muted">The final assessment question bank is not available yet.</p>

  if (!started)
    return (
      <div>
        <p>
          {qs.length} questions across {Object.keys(DOMAINS).length} domains. Most are judgment and prioritization problems. There is no
          time limit; don’t look things up — the point is to find your gaps.
        </p>
        <button className="btn primary" onClick={() => setStarted(true)}>Begin final assessment</button>
      </div>
    )

  const finish = (res: Record<string, boolean>) => {
    const score = Math.round((Object.values(res).filter(Boolean).length / qs.length) * 100)
    onScore(score)
  }

  if (i >= qs.length) {
    const byDomain: Record<string, { r: number; n: number }> = {}
    for (const q of qs) {
      const d = domainOf(q.id)
      byDomain[d] ??= { r: 0, n: 0 }
      byDomain[d].n++
      if (results[q.id]) byDomain[d].r++
    }
    const total = Object.values(results).filter(Boolean).length
    return (
      <div className="sim-result">
        <div className="score">{Math.round((total / qs.length) * 100)}%</div>
        <p>{total} of {qs.length} correct.</p>
        <table>
          <tbody>
            {Object.entries(byDomain).map(([d, v]) => (
              <tr key={d}>
                <td>{DOMAINS[d] ?? d}</td>
                <td style={{ width: '45%' }}><div className="bar"><div style={{ width: `${(v.r / v.n) * 100}%`, background: v.r / v.n >= 0.8 ? 'var(--ok)' : v.r / v.n >= 0.6 ? 'var(--warn)' : 'var(--bad)' }} /></div></td>
                <td>{v.r}/{v.n}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="muted small">Domains under 80% point to the stages to revisit. Missed questions are now in your review queue. Passing an online assessment does not make you field-competent — practise the physical skills and take hands-on courses.</p>
        <button className="btn" onClick={() => { setI(0); setResults({}); setAnswered(false); setStarted(false) }}>Retake</button>
      </div>
    )
  }

  const q = qs[i]
  return (
    <div>
      <div className="muted small">Question {i + 1} of {qs.length} · {DOMAINS[domainOf(q.id)] ?? ''}</div>
      <div className="quiz-progress"><div style={{ width: `${(i / qs.length) * 100}%` }} /></div>
      <QuestionView
        key={q.id}
        q={q}
        index={i}
        onAnswered={(ok) => {
          actions.recordAnswer(q.id, q.concepts, ok)
          setResults((r) => ({ ...r, [q.id]: ok }))
          setAnswered(true)
        }}
      />
      {answered && (
        <button
          className="btn primary"
          onClick={() => {
            if (i + 1 === qs.length) finish(results)
            setI(i + 1)
            setAnswered(false)
          }}
        >
          {i + 1 < qs.length ? 'Next question' : 'See results'}
        </button>
      )}
    </div>
  )
}
