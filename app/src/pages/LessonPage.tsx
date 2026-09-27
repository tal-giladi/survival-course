import { Link, useParams } from 'react-router-dom'
import { lessonById, lessonTitle } from '../content/lessons'
import { stages } from '../content/curriculum'
import { LessonView } from '../components/LessonView'
import { levelLabel } from '../content/labels'

export function LessonPage() {
  const { id = '' } = useParams()
  const lesson = lessonById(id)
  if (lesson) return <LessonView lesson={lesson} />

  const stage = stages.find((s) => s.outline.some((o) => o.id === id))
  const outline = stage?.outline.find((o) => o.id === id)
  if (!stage || !outline) return <div className="page"><h1>Lesson not found</h1><Link to="/map">Course map</Link></div>
  return (
    <div className="page">
      <div className="crumbs"><Link to={`/stage/${stage.n}`}>Stage {stage.n}: {stage.title}</Link></div>
      <h1>{outline.title}</h1>
      <span className={`badge lvl-${outline.level}`}>{levelLabel[outline.level]}</span>
      <div className="callout callout-info">
        <div className="callout-title">Planned lesson</div>
        This lesson is designed and placed in the curriculum but not yet written.
      </div>
      <h2>Topics</h2>
      <ul>{outline.topics.map((t) => <li key={t}>{t}</li>)}</ul>
      {outline.prerequisites.length > 0 && (
        <>
          <h2>Prerequisites</h2>
          <ul>{outline.prerequisites.map((p) => <li key={p}><Link to={`/lesson/${p}`}>{lessonTitle(p)}</Link></li>)}</ul>
        </>
      )}
    </div>
  )
}
