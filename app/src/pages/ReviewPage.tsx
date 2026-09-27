import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useProgress, getProgress, BOX_DAYS } from '../progress/store'
import { dueQuestions, unseenFromCompleted } from '../progress/analytics'
import { Quiz } from '../components/Quiz'
import { lessonTitle } from '../content/lessons'

export function ReviewPage() {
  const p = useProgress()
  const [session, setSession] = useState(0)
  // Freeze the queue when a session starts so answering doesn't reshuffle it underneath the learner.
  const queue = useMemo(() => {
    const snap = getProgress()
    const due = dueQuestions(snap)
    const extra = due.length < 8 ? unseenFromCompleted(snap).slice(0, 8 - due.length) : []
    return [...due, ...extra].slice(0, 12)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session])

  const boxes = [1, 2, 3, 4, 5].map((b) => Object.values(p.questions).filter((q) => q.box === b).length)

  return (
    <div className="page">
      <h1>Spaced review</h1>
      <p className="lead">
        Missed questions come back straight away; each correct answer pushes a question further out — {BOX_DAYS.slice(2).join(', ')} days. Review mixes topics on purpose: fire, water, heat and decisions keep returning in new contexts.
      </p>
      <div className="card">
        <h3>Your review boxes</h3>
        <div className="boxes">
          {boxes.map((c, i) => (
            <div key={i} className="box"><div className="box-n">{c}</div><div className="muted small">Box {i + 1} · {i === 0 ? 'now' : `${BOX_DAYS[i + 1]}d`}</div></div>
          ))}
        </div>
      </div>
      {queue.length === 0 ? (
        <div className="card">
          <p>Nothing due. Complete a lesson or take a quiz to seed your review queue. <Link to="/">Back to dashboard</Link></p>
        </div>
      ) : (
        <>
          <p className="muted small">This session: {queue.length} question(s) from {[...new Set(queue.map((x) => lessonTitle(x.lessonId)))].join(', ')}.</p>
          <Quiz key={session} id="review-session" title="Review session" questions={queue.map((x) => x.q)} onFinish={() => undefined} />
          <button className="btn" onClick={() => setSession(session + 1)}>Start a new session</button>
        </>
      )}
    </div>
  )
}
