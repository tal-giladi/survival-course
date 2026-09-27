import { Link } from 'react-router-dom'
import { stages } from '../content/curriculum'
import { levelLabel } from '../content/labels'
import { useProgress } from '../progress/store'
import { stageCompletion } from '../progress/analytics'
import { Diagram } from '../diagrams/registry'

export function CourseMap() {
  const p = useProgress()
  return (
    <div className="page">
      <h1>Course map</h1>
      <p className="lead">
        18 stages and 12 capstone scenarios, from beginner fundamentals to expert-level integrated judgment. Stage numbers group
        topics; the recommended path below respects prerequisites.
      </p>

      <div className="card">
        <h2>How the stages depend on each other</h2>
        <Diagram id="stage-graph" />
        <p className="muted small">
          Recommended path: 1 → 2 (core) + 8 (thermoregulation) → 3, 4, 5 → 16 → 6, 7, 10 → 9 (then a hands-on WFA course) → 11, 12, 14 → 13, 15, 17, 18 → capstones.
        </p>
      </div>

      <div className="stage-grid">
        {stages.map((s) => {
          const c = stageCompletion(p, s.n)
          return (
            <Link key={s.n} to={`/stage/${s.n}`} className={`card stage-card ${s.status}`}>
              <div className="stage-num">{s.n === 19 ? '★' : s.n}</div>
              <div>
                <h3>{s.title}</h3>
                <div className="badges">
                  <span className={`badge lvl-${s.level}`}>{levelLabel[s.level]}</span>
                  <span className="badge">{s.outline.length} {s.n === 19 ? 'scenarios' : 'lessons'}</span>
                  {s.status === 'available' ? <span className="badge ok">Available · {c.done}/{c.total}</span> : <span className="badge">Planned</span>}
                </div>
                <p className="muted small">{s.summary}</p>
                {s.requires.length > 0 && s.n !== 19 && <p className="small">Requires: {s.requires.map((r) => `Stage ${r}`).join(', ')}</p>}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
