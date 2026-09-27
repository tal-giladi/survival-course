import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '../content/types'
import { Blocks } from './Blocks'
import { Markdown } from './Markdown'
import { ExerciseCard } from './ExerciseCard'
import { Quiz } from './Quiz'
import { ScenarioQuestionView } from './ScenarioQuestionView'
import { ReferenceList } from './ReferenceList'
import { SimHost } from '../sims/SimHost'
import { actions, useProgress } from '../progress/store'
import { lessonTitle, neighbours } from '../content/lessons'
import { levelLabel } from '../content/labels'

const sections = [
  ['objectives', 'Objectives'],
  ['explanation', 'Explanation'],
  ['why', 'Why it matters'],
  ['science', 'Science'],
  ['examples', 'Examples'],
  ['mistakes', 'Common mistakes'],
  ['exercises', 'Practice'],
  ['simulations', 'Simulation'],
  ['quiz', 'Quiz'],
  ['scenario', 'Scenario'],
  ['summary', 'Summary'],
  ['reading', 'Further reading'],
  ['references', 'References'],
] as const

export function LessonView({ lesson }: { lesson: Lesson }) {
  const p = useProgress()
  const done = !!p.lessons[lesson.id]
  const missing = lesson.prerequisites.filter((id) => !p.lessons[id])
  const { prev, next } = neighbours(lesson.id)
  const skillIds = [...new Set(lesson.exercises.map((e) => e.skill).filter((s): s is string => !!s))]

  useEffect(() => {
    actions.visitLesson(lesson.id)
    window.scrollTo(0, 0)
  }, [lesson.id])

  const present = sections.filter(([k]) => (k === 'science' ? !!lesson.science?.length : k === 'simulations' ? !!lesson.simulations?.length : k === 'reading' ? lesson.furtherReading.length > 0 : true))

  return (
    <article className="lesson">
      <header className="lesson-head">
        <div className="crumbs">
          <Link to={`/stage/${lesson.stage}`}>Stage {lesson.stage}</Link> · Lesson {lesson.order}
        </div>
        <h1>{lesson.title}</h1>
        <div className="badges">
          <span className={`badge lvl-${lesson.level}`}>{levelLabel[lesson.level]}</span>
          <span className="badge">⏱ ~{lesson.minutes} min</span>
          {done && <span className="badge ok">✓ Completed</span>}
        </div>
        {missing.length > 0 && (
          <div className="callout callout-info">
            <div className="callout-title">Prerequisites not yet completed</div>
            <p>This lesson builds on: {missing.map((id, i) => <span key={id}>{i > 0 && ', '}<Link to={`/lesson/${id}`}>{lessonTitle(id)}</Link></span>)}. You can continue, but some ideas will be assumed.</p>
          </div>
        )}
        <nav className="section-nav" aria-label="Lesson sections">
          {present.map(([k, label]) => (
            <a key={k} href={`#${k}`} onClick={(e) => { e.preventDefault(); document.getElementById(k)?.scrollIntoView({ behavior: 'smooth' }) }}>{label}</a>
          ))}
        </nav>
      </header>

      <section id="objectives">
        <h2>Learning objectives</h2>
        <p className="muted">After this lesson you should be able to:</p>
        <ul className="objectives">{lesson.objectives.map((o, i) => <li key={i}><Markdown md={o} inline /></li>)}</ul>
      </section>

      <section id="explanation">
        <h2>Explanation</h2>
        <Blocks blocks={lesson.explanation} />
      </section>

      <section id="why">
        <h2>Why it matters</h2>
        <Markdown md={lesson.whyItMatters} />
      </section>

      {lesson.science && lesson.science.length > 0 && (
        <section id="science">
          <h2>Scientific and technical background</h2>
          <Blocks blocks={lesson.science} />
        </section>
      )}

      <section id="examples">
        <h2>Examples</h2>
        <Blocks blocks={lesson.examples} />
      </section>

      <section id="mistakes">
        <h2>Common mistakes</h2>
        <ul className="mistakes">{lesson.mistakes.map((m, i) => <li key={i}><Markdown md={m} inline /></li>)}</ul>
      </section>

      <section id="exercises">
        <h2>Practical exercises</h2>
        {lesson.exercises.map((e) => <ExerciseCard key={e.id} ex={e} />)}
      </section>

      {lesson.simulations && lesson.simulations.length > 0 && (
        <section id="simulations">
          <h2>Interactive simulation</h2>
          {lesson.simulations.map((id) => <SimHost key={id} id={id} />)}
        </section>
      )}

      <section id="quiz">
        <Quiz id={lesson.id} questions={lesson.quiz} title="Quiz" />
      </section>

      <section id="scenario">
        <h2>Scenario question</h2>
        <ScenarioQuestionView sq={lesson.scenario} />
      </section>

      <section id="summary">
        <h2>Summary</h2>
        <ul className="summary">{lesson.summary.map((s, i) => <li key={i}><Markdown md={s} inline /></li>)}</ul>
      </section>

      {lesson.furtherReading.length > 0 && (
        <section id="reading">
          <h2>Further reading</h2>
          <ReferenceList ids={lesson.furtherReading} />
        </section>
      )}

      <section id="references">
        <h2>References</h2>
        <ReferenceList ids={lesson.references} />
      </section>

      <footer className="lesson-foot">
        {done ? (
          <button className="btn" onClick={() => actions.uncompleteLesson(lesson.id)}>Mark as not completed</button>
        ) : (
          <button className="btn primary" onClick={() => actions.completeLesson(lesson.id, skillIds)}>Mark lesson complete</button>
        )}
        <p className="muted small">Completing a lesson marks its skills as <em>Studied</em>. Only you can mark a skill <em>Practiced</em> or <em>Competent</em>, after doing it for real.</p>
        <div className="prev-next">
          {prev ? <Link className="btn" to={`/lesson/${prev}`}>← {lessonTitle(prev)}</Link> : <span />}
          {next ? <Link className="btn primary" to={`/lesson/${next}`}>{lessonTitle(next)} →</Link> : <Link className="btn" to={`/stage/${lesson.stage}`}>Back to stage</Link>}
        </div>
      </footer>
    </article>
  )
}
