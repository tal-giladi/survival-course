import { useState } from 'react'
import { skills } from '../content/skills'
import { stages } from '../content/curriculum'
import { skillStateLabel } from '../content/labels'
import type { Skill, SkillState } from '../content/types'
import { actions, useProgress } from '../progress/store'
import { SafetyBadge } from '../components/ExerciseCard'

const order: SkillState[] = ['not-learned', 'studied', 'practiced', 'competent', 'needs-practice']

function SkillRow({ s }: { s: Skill }) {
  const p = useProgress()
  const rec = p.skills[s.id]
  const state = rec?.state ?? 'not-learned'
  const [confirming, setConfirming] = useState(false)

  const set = (next: SkillState) => {
    if (next === 'competent' && s.physical) {
      setConfirming(true)
      return
    }
    actions.setSkill(s.id, next)
  }

  return (
    <li className="skill-row" id={s.id}>
      <div className="skill-info">
        <strong>{s.name}</strong> {s.physical && <span className="badge tiny">physical</span>} <SafetyBadge s={s.safety} />
        <div className="muted small">{s.description}</div>
        {rec && <div className="muted tiny">Updated {new Date(rec.updated).toLocaleDateString()}</div>}
      </div>
      <div className="skill-states" role="radiogroup" aria-label={`State of ${s.name}`}>
        {order.map((o) => (
          <button key={o} role="radio" aria-checked={state === o} className={`chip st-${o} ${state === o ? 'on' : ''}`} onClick={() => set(o)}>
            {skillStateLabel[o]}
          </button>
        ))}
      </div>
      {confirming && (
        <div className="callout callout-warning confirm">
          <p>
            <strong>Competent</strong> means you have performed this skill unaided, in realistic conditions (cold, wet, tired, dark
            where relevant), successfully, more than once. An online lesson cannot confirm this. Is that true?
          </p>
          <button className="btn primary small" onClick={() => { actions.setSkill(s.id, 'competent', true); setConfirming(false) }}>Yes, I have</button>{' '}
          <button className="btn small" onClick={() => { actions.setSkill(s.id, 'practiced'); setConfirming(false) }}>Not yet — mark Practiced</button>
        </div>
      )}
    </li>
  )
}

export function SkillsPage() {
  return (
    <div className="page">
      <h1>Real-world skills</h1>
      <p className="lead">
        Your honest self-assessment. Lessons can only move a skill to <em>Studied</em>. <em>Practiced</em> and <em>Competent</em>
        are yours to claim — after doing the skill for real. Competent skills older than 6 months are flagged for re-confirmation.
      </p>
      {stages.map((st) => {
        const list = skills.filter((s) => s.stage === st.n)
        if (!list.length) return null
        return (
          <section key={st.n}>
            <h2>Stage {st.n}: {st.title} {st.status === 'planned' && <span className="badge">planned</span>}</h2>
            <ul className="skills">{list.map((s) => <SkillRow key={s.id} s={s} />)}</ul>
          </section>
        )
      })}
    </div>
  )
}
