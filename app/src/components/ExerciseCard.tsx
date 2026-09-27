import type { Exercise, SafetyClass } from '../content/types'
import { actions, useProgress } from '../progress/store'
import { skillById } from '../content/skills'
import { Markdown } from './Markdown'

export const safetyInfo: Record<SafetyClass, { icon: string; label: string; text: string }> = {
  home: { icon: '🏠', label: 'Home', text: 'Safe to do at home or at a desk.' },
  outdoor: { icon: '🌲', label: 'Outdoor', text: 'Outdoors with ordinary care. A partner is recommended.' },
  supervised: { icon: '👥', label: 'Supervised', text: 'Only with a competent person present.' },
  'formal-training': { icon: '🎓', label: 'Formal training', text: 'Requires a certified course or instructor.' },
  'special-equipment': { icon: '🧰', label: 'Special equipment', text: 'Requires specialized equipment and training.' },
  'virtual-only': { icon: '🖥️', label: 'Virtual only', text: 'Simulate only. Do not attempt physically.' },
}

export const levelNames = ['', 'Knowledge', 'Simulation', 'Safe physical', 'Integrated']

export function SafetyBadge({ s }: { s: SafetyClass }) {
  const x = safetyInfo[s]
  return (
    <span className={`badge safety-${s}`} title={x.text}>
      {x.icon} {x.label}
    </span>
  )
}

export function ExerciseCard({ ex }: { ex: Exercise }) {
  const p = useProgress()
  const done = !!p.exercises[ex.id]
  const skill = ex.skill ? skillById(ex.skill) : undefined
  return (
    <div className={`exercise ${done ? 'done' : ''}`}>
      <div className="exercise-head">
        <h4>{ex.title}</h4>
        <div className="badges">
          <span className={`badge level-${ex.level}`}>
            L{ex.level} · {levelNames[ex.level]}
          </span>
          <SafetyBadge s={ex.safety} />
          <span className="badge">⏱ {ex.minutes} min</span>
        </div>
      </div>
      {ex.safetyNote && (
        <div className="callout callout-warning">
          <Markdown md={ex.safetyNote} />
        </div>
      )}
      {ex.materials && ex.materials.length > 0 && (
        <p className="muted">
          <strong>Materials:</strong> {ex.materials.join(', ')}
        </p>
      )}
      <ol className="steps">
        {ex.steps.map((s, i) => (
          <li key={i}>
            <Markdown md={s} inline />
          </li>
        ))}
      </ol>
      <div className="success">
        <strong>Done when:</strong>
        <ul>
          {ex.success.map((s, i) => (
            <li key={i}>
              <Markdown md={s} inline />
            </li>
          ))}
        </ul>
      </div>
      <div className="exercise-foot">
        <label className="toggle">
          <input type="checkbox" checked={done} onChange={() => actions.toggleExercise(ex.id)} /> I completed this exercise
        </label>
        {skill && (
          <span className="muted">
            Builds skill: <a href={`#/skills`}>{skill.name}</a>
          </span>
        )}
      </div>
    </div>
  )
}
