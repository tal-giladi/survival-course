import type { ScenarioQuestion } from '../content/types'
import { actions, useProgress } from '../progress/store'
import { Markdown } from './Markdown'

/** One committed decision: the debrief stays hidden until the learner chooses. */
export function ScenarioQuestionView({ sq }: { sq: ScenarioQuestion }) {
  const p = useProgress()
  const chosen = p.scenarioAnswers[sq.id]
  return (
    <div className="scenario-q">
      <div className="scenario-setup">
        <Markdown md={sq.setup} />
      </div>
      <p className="scenario-question">
        <strong>{sq.question}</strong>
      </p>
      <div className="options">
        {sq.choices.map((c) => (
          <button
            key={c.id}
            disabled={!!chosen}
            className={'option' + (chosen === c.id ? ' chosen' : '') + (chosen ? (c.id === sq.best ? ' right' : chosen === c.id ? ' wrong' : '') : '')}
            onClick={() => actions.answerScenarioQuestion(sq.id, c.id, sq.concepts, c.id === sq.best)}
          >
            <Markdown md={c.text} inline />
            {chosen && (
              <div className="why">
                <Markdown md={c.why} inline />
              </div>
            )}
          </button>
        ))}
      </div>
      {chosen && (
        <div className={`feedback ${chosen === sq.best ? 'ok' : 'bad'}`}>
          <strong>Debrief</strong>
          <Markdown md={sq.debrief} />
          <button className="btn small" onClick={() => actions.resetScenarioQuestion(sq.id)}>
            Try again
          </button>
        </div>
      )}
    </div>
  )
}
