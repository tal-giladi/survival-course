import { Link } from 'react-router-dom'
import { useProgress } from '../progress/store'
import { conceptMastery, courseCompletion, dueQuestions, exerciseCompletion, nextLesson, quizAverage, skillSummary, weakConcepts } from '../progress/analytics'
import { stages } from '../content/curriculum'
import { lessonById, lessonTitle } from '../content/lessons'
import { sims } from '../sims/registry'
import { conceptLabel, skillStateLabel } from '../content/labels'
import type { SkillState } from '../content/types'

function Ring({ value, label }: { value: number; label: string }) {
  const r = 34
  const c = 2 * Math.PI * r
  return (
    <div className="ring">
      <svg viewBox="0 0 80 80" width="96" height="96" role="img" aria-label={`${label} ${Math.round(value * 100)}%`}>
        <circle cx="40" cy="40" r={r} className="ring-bg" />
        <circle cx="40" cy="40" r={r} className="ring-fg" strokeDasharray={`${c * value} ${c}`} transform="rotate(-90 40 40)" />
        <text x="40" y="45" textAnchor="middle">{Math.round(value * 100)}%</text>
      </svg>
      <div className="ring-label">{label}</div>
    </div>
  )
}

export function Dashboard() {
  const p = useProgress()
  const comp = courseCompletion(p)
  const ex = exerciseCompletion(p)
  const due = dueQuestions(p)
  const weak = weakConcepts(p)
  const mastery = conceptMastery(p)
  const sk = skillSummary(p)
  const avg = quizAverage(p)
  const nl = nextLesson(p)
  const current = p.lastLesson ? lessonById(p.lastLesson) : undefined
  const started = Object.keys(p.lessons).length > 0 || Object.keys(p.questions).length > 0

  return (
    <div className="page dashboard">
      <section className="hero">
        <h1>Think like a survivor.</h1>
        <p className="lead">
          A self-study course in wilderness survival, bushcraft, wilderness first aid and emergency preparedness — built around one
          decision system: <strong>Observe → Assess → Prioritize → Plan → Act → Reassess</strong>.
        </p>
        <div className="hero-actions">
          {nl ? (
            <Link className="btn primary big" to={`/lesson/${nl.id}`}>{started ? 'Continue' : 'Start'}: {nl.title}</Link>
          ) : (
            <Link className="btn primary big" to="/review">All written lessons complete — review</Link>
          )}
          <Link className="btn" to="/map">Course map</Link>
          <Link className="btn" to="/safety">How to use this course safely</Link>
        </div>
      </section>

      <section className="grid-4">
        <div className="card stat">
          <Ring value={comp.written ? comp.done / comp.written : 0} label="Available lessons done" />
          <div className="muted small">{comp.done} of {comp.written} written · {comp.total} planned in total</div>
        </div>
        <div className="card stat">
          <Ring value={ex.total ? ex.done / ex.total : 0} label="Exercises done" />
          <div className="muted small">{ex.done} of {ex.total}</div>
        </div>
        <div className="card stat">
          <Ring value={avg ?? 0} label="Average best quiz score" />
          <div className="muted small">{Object.keys(p.quizzes).length} quiz(zes) taken</div>
        </div>
        <div className="card stat">
          <div className="big-num">{due.length}</div>
          <div className="ring-label">Reviews due</div>
          <Link className="btn small" to="/review">Review now</Link>
        </div>
      </section>

      <section className="grid-2">
        <div className="card">
          <h2>Current module</h2>
          {current ? (
            <p>Last opened: <Link to={`/lesson/${current.id}`}>{current.title}</Link> (Stage {current.stage})</p>
          ) : (
            <p className="muted">You have not opened a lesson yet.</p>
          )}
          <h3>Stage progress</h3>
          <ul className="stage-bars">
            {stages.filter((s) => s.status === 'available').map((s) => {
              const written = s.outline.filter((o) => lessonById(o.id))
              const done = written.filter((o) => p.lessons[o.id]).length
              return (
                <li key={s.n}>
                  <Link to={`/stage/${s.n}`}>{s.n}. {s.title}</Link>
                  <div className="bar"><div style={{ width: `${(done / Math.max(1, written.length)) * 100}%` }} /></div>
                  <span className="muted small">{done}/{written.length}</span>
                </li>
              )
            })}
          </ul>
          <p className="muted small">Stages 2–18 and the capstones are designed and mapped; their lessons are being written.</p>
        </div>

        <div className="card">
          <h2>Skills</h2>
          <ul className="skill-counts">
            {(Object.keys(sk.counts) as SkillState[]).map((k) => (
              <li key={k}><span className={`dot st-${k}`} /> {skillStateLabel[k]}: <strong>{sk.counts[k]}</strong></li>
            ))}
          </ul>
          {sk.stale.length > 0 && <p className="callout callout-warning">{sk.stale.length} skill(s) marked Competent more than 6 months ago — re-confirm them.</p>}
          <Link className="btn small" to="/skills">Update skills</Link>
        </div>
      </section>

      <section className="grid-2">
        <div className="card">
          <h2>Skills requiring review</h2>
          {weak.length === 0 ? (
            <p className="muted">No weak areas detected yet. Weak areas appear after you answer at least two questions on a concept with under 70% accuracy.</p>
          ) : (
            <ul className="weak">
              {weak.map((c) => (
                <li key={c.concept}>{conceptLabel[c.concept] ?? c.concept} <span className="muted">— {Math.round(c.accuracy * 100)}% of {c.total}</span></li>
              ))}
            </ul>
          )}
          {mastery.length > 0 && (
            <details>
              <summary>All concepts ({mastery.length})</summary>
              <ul className="mastery">
                {mastery.map((c) => (
                  <li key={c.concept}>
                    <span>{conceptLabel[c.concept] ?? c.concept}</span>
                    <div className="bar"><div style={{ width: `${c.accuracy * 100}%` }} /></div>
                    <span className="muted small">{c.right}/{c.total}</span>
                  </li>
                ))}
              </ul>
            </details>
          )}
        </div>

        <div className="card">
          <h2>Quiz and scenario performance</h2>
          {Object.keys(p.quizzes).length === 0 && Object.keys(p.sims).length === 0 ? (
            <p className="muted">Take a quiz or run a simulation to see results here.</p>
          ) : (
            <table className="perf">
              <tbody>
                {Object.entries(p.quizzes).map(([id, r]) => (
                  <tr key={id}><td>📝 {lessonTitle(id)}</td><td>{Math.round(r.best * 100)}%</td></tr>
                ))}
                {sims.filter((s) => p.sims[s.id]).map((s) => (
                  <tr key={s.id}><td>🎮 {s.title}</td><td>{p.sims[s.id].best}%</td></tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>
    </div>
  )
}
