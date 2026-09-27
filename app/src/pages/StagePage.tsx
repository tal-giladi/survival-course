import { Link, useParams } from 'react-router-dom'
import { stageByN } from '../content/curriculum'
import { lessonById, lessonTitle } from '../content/lessons'
import { levelLabel } from '../content/labels'
import { useProgress } from '../progress/store'
import { simById } from '../sims/registry'
import { SimHost } from '../sims/SimHost'
import { Quiz } from '../components/Quiz'
import { stageReviews } from '../content/reviews'

export function StagePage() {
  const { n } = useParams()
  const stage = stageByN(Number(n))
  const p = useProgress()
  if (!stage) return <div className="page"><h1>Stage not found</h1></div>
  const review = stageReviews[stage.n] ?? []

  return (
    <div className="page">
      <div className="crumbs"><Link to="/map">Course map</Link></div>
      <h1>{stage.n === 19 ? '' : `Stage ${stage.n} — `}{stage.title}</h1>
      <div className="badges">
        <span className={`badge lvl-${stage.level}`}>{levelLabel[stage.level]}</span>
        <span className="badge">{stage.status === 'available' ? 'Available' : 'Planned — outline only'}</span>
        <span className="badge">Environments: {stage.environments.join(', ')}</span>
      </div>
      <p className="lead">{stage.summary}</p>
      {stage.requires.length > 0 && stage.n !== 19 && (
        <p>Builds on: {stage.requires.map((r, i) => <span key={r}>{i > 0 && ', '}<Link to={`/stage/${r}`}>Stage {r}</Link></span>)}</p>
      )}

      <h2>{stage.n === 19 ? 'Scenarios' : 'Lessons'}</h2>
      <ol className="lesson-list">
        {stage.outline.map((o) => {
          const written = lessonById(o.id)
          const done = !!p.lessons[o.id]
          return (
            <li key={o.id} className={written ? 'written' : 'planned'}>
              <div className="lesson-row">
                {written ? <Link to={`/lesson/${o.id}`}>{o.title}</Link> : <span>{o.title}</span>}
                <span className={`badge lvl-${o.level}`}>{levelLabel[o.level]}</span>
                {done && <span className="badge ok">✓</span>}
                {!written && <span className="badge">planned</span>}
              </div>
              <div className="muted small">
                {o.topics.join(' · ')}
                {o.prerequisites.length > 0 && <> — after: {o.prerequisites.map((id) => lessonTitle(id)).join(', ')}</>}
              </div>
            </li>
          )
        })}
      </ol>

      <h2>Simulations in this stage</h2>
      {stage.simulations.map((id) => (simById(id) ? <SimHost key={id} id={id} /> : <div key={id} className="card muted">🗺️ {id} — planned</div>))}

      {review.length > 0 && (
        <>
          <h2>Stage review</h2>
          <p className="muted">Interleaved questions across the whole stage. Take it after finishing the lessons.</p>
          <Quiz id={`stage-${stage.n}-review`} questions={review} title={`Stage ${stage.n} review`} />
        </>
      )}
    </div>
  )
}
