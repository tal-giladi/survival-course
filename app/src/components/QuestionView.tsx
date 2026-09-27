import { useMemo, useState } from 'react'
import type { Question } from '../content/types'
import { Markdown } from './Markdown'
import { Diagram } from '../diagrams/registry'

/** Deterministic shuffle that never returns the original order (for ordering questions). */
function scramble<T>(items: T[], seed: string): T[] {
  let h = 0
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) >>> 0
  const out = [...items]
  for (let i = out.length - 1; i > 0; i--) {
    h = (h * 1103515245 + 12345) >>> 0
    const j = h % (i + 1)
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  if (out.length > 1 && out.every((x, i) => x === items[i])) out.push(out.shift()!)
  return out
}

export function isCorrect(q: Question, value: unknown): boolean {
  switch (q.kind) {
    case 'single':
      return value === q.answer
    case 'multi': {
      const v = new Set(value as string[])
      return v.size === q.answer.length && q.answer.every((a) => v.has(a))
    }
    case 'truefalse':
      return value === q.answer
    case 'order':
      return (value as string[]).every((id, i) => id === q.answer[i])
    case 'numeric':
      return Math.abs(Number(value) - q.answer) <= q.tolerance
  }
}

export function QuestionView({
  q,
  index,
  onAnswered,
}: {
  q: Question
  index?: number
  onAnswered: (correct: boolean) => void
}) {
  const initialOrder = useMemo(() => (q.kind === 'order' ? scramble(q.items, q.id).map((i) => i.id) : []), [q])
  const [single, setSingle] = useState<string | boolean | null>(null)
  const [multi, setMulti] = useState<string[]>([])
  const [order, setOrder] = useState<string[]>(initialOrder)
  const [num, setNum] = useState('')
  const [done, setDone] = useState<null | boolean>(null)

  const value = q.kind === 'multi' ? multi : q.kind === 'order' ? order : q.kind === 'numeric' ? num : single
  const ready = q.kind === 'multi' ? multi.length > 0 : q.kind === 'order' ? true : q.kind === 'numeric' ? num.trim() !== '' && !isNaN(Number(num)) : single !== null

  const check = () => {
    const ok = isCorrect(q, value)
    setDone(ok)
    onAnswered(ok)
  }

  const move = (i: number, d: -1 | 1) => {
    const j = i + d
    if (j < 0 || j >= order.length) return
    const next = [...order]
    ;[next[i], next[j]] = [next[j], next[i]]
    setOrder(next)
  }

  const optionClass = (id: string, chosen: boolean, correct: boolean) =>
    'option' + (chosen ? ' chosen' : '') + (done !== null ? (correct ? ' right' : chosen ? ' wrong' : '') : '')

  return (
    <div className="question">
      <div className="q-kind">
        {index !== undefined && <span className="q-num">Q{index + 1}</span>}
        {{ single: 'Choose one', multi: 'Choose all that apply', truefalse: 'True or false', order: 'Put in order (top = first)', numeric: 'Calculate' }[q.kind]}
      </div>
      <Markdown md={q.prompt} />
      {q.diagram && <div className="figure"><Diagram id={q.diagram} /></div>}

      {q.kind === 'single' && (
        <div className="options">
          {q.choices.map((c) => (
            <button key={c.id} disabled={done !== null} className={optionClass(c.id, single === c.id, c.id === q.answer)} onClick={() => setSingle(c.id)}>
              <Markdown md={c.text} inline />
              {done !== null && <div className="why"><Markdown md={c.why} inline /></div>}
            </button>
          ))}
        </div>
      )}

      {q.kind === 'multi' && (
        <div className="options">
          {q.choices.map((c) => {
            const on = multi.includes(c.id)
            return (
              <button key={c.id} disabled={done !== null} className={optionClass(c.id, on, q.answer.includes(c.id))} onClick={() => setMulti(on ? multi.filter((x) => x !== c.id) : [...multi, c.id])}>
                <span className="check">{on ? '☑' : '☐'}</span> <Markdown md={c.text} inline />
                {done !== null && <div className="why"><Markdown md={c.why} inline /></div>}
              </button>
            )
          })}
        </div>
      )}

      {q.kind === 'truefalse' && (
        <div className="options row">
          {[true, false].map((v) => (
            <button key={String(v)} disabled={done !== null} className={optionClass(String(v), single === v, v === q.answer)} onClick={() => setSingle(v)}>
              {v ? 'True' : 'False'}
            </button>
          ))}
        </div>
      )}

      {q.kind === 'order' && (
        <ol className="order-list">
          {order.map((id, i) => {
            const item = q.items.find((x) => x.id === id)!
            const right = done !== null && q.answer[i] === id
            return (
              <li key={id} className={done === null ? '' : right ? 'right' : 'wrong'}>
                <span className="order-text"><Markdown md={item.text} inline /></span>
                {done === null && (
                  <span className="order-btns">
                    <button aria-label="Move up" onClick={() => move(i, -1)} disabled={i === 0}>▲</button>
                    <button aria-label="Move down" onClick={() => move(i, 1)} disabled={i === order.length - 1}>▼</button>
                  </span>
                )}
              </li>
            )
          })}
        </ol>
      )}

      {q.kind === 'numeric' && (
        <div className="numeric">
          <input type="number" inputMode="decimal" value={num} disabled={done !== null} onChange={(e) => setNum(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && ready && done === null && check()} />
          <span className="unit">{q.unit}</span>
        </div>
      )}

      {done === null ? (
        <button className="btn primary" disabled={!ready} onClick={check}>Check answer</button>
      ) : (
        <div className={`feedback ${done ? 'ok' : 'bad'}`}>
          <strong>{done ? 'Correct.' : 'Not quite.'}</strong>
          {q.kind === 'order' && !done && (
            <div className="correct-order">Correct order: {q.answer.map((id) => q.items.find((x) => x.id === id)!.text).join(' → ')}</div>
          )}
          {q.kind === 'numeric' && !done && <div>Answer: {q.answer} {q.unit} (±{q.tolerance})</div>}
          {q.kind === 'truefalse' && !done && <div>The statement is {q.answer ? 'true' : 'false'}.</div>}
          <Markdown md={q.explanation} />
        </div>
      )}
    </div>
  )
}
