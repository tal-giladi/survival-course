import { useState } from 'react'
import type { Question } from '../content/types'
import { QuestionView } from './QuestionView'
import { actions, useProgress } from '../progress/store'

/** Runs a list of questions one at a time, records each answer for spaced review, and the final score. */
export function Quiz({ id, questions, title = 'Quiz', onFinish }: { id: string; questions: Question[]; title?: string; onFinish?: (score: number) => void }) {
  const progress = useProgress()
  const [i, setI] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [right, setRight] = useState(0)
  const [finished, setFinished] = useState(false)
  const [run, setRun] = useState(0)
  const rec = progress.quizzes[id]

  if (questions.length === 0) return null

  const answer = (q: Question, ok: boolean) => {
    actions.recordAnswer(q.id, q.concepts, ok)
    if (ok) setRight((r) => r + 1)
    setAnswered(true)
  }
  const next = () => {
    if (i + 1 < questions.length) {
      setI(i + 1)
      setAnswered(false)
    } else {
      const score = right / questions.length
      actions.recordQuiz(id, score)
      setFinished(true)
      onFinish?.(score)
    }
  }
  const restart = () => {
    setI(0)
    setAnswered(false)
    setRight(0)
    setFinished(false)
    setRun(run + 1)
  }

  return (
    <div className="quiz">
      <div className="quiz-head">
        <h3>{title}</h3>
        {rec && (
          <span className="muted">
            Best {Math.round(rec.best * 100)}% · {rec.attempts} attempt{rec.attempts > 1 ? 's' : ''}
          </span>
        )}
      </div>
      {finished ? (
        <div className="quiz-result">
          <div className="big">
            {right} / {questions.length}
          </div>
          <p>
            {right / questions.length >= 0.8
              ? 'Strong result. Every question now enters your spaced-review schedule.'
              : 'Read the explanations, then try again. Missed questions will come back in Review.'}
          </p>
          <button className="btn" onClick={restart}>Retake</button>
        </div>
      ) : (
        <>
          <div className="quiz-progress">
            <div style={{ width: `${(i / questions.length) * 100}%` }} />
          </div>
          <QuestionView key={`${run}-${questions[i].id}`} q={questions[i]} index={i} onAnswered={(ok) => answer(questions[i], ok)} />
          {answered && (
            <button className="btn primary" onClick={next}>
              {i + 1 < questions.length ? 'Next question' : 'See result'}
            </button>
          )}
        </>
      )}
    </div>
  )
}
