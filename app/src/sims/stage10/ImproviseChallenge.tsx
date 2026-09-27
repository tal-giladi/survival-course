import { useState } from 'react'
import type { SimProps } from '../types'
import { CHALLENGES, ITEMS, PROP_LABEL, evaluate, type Assignment, type Prop } from './improviseModel'

// Improvise Challenge: split a problem into functions, assign an ordinary object to each function,
// load-test the build (which reveals weak links), fix it, then commit. Committing an untested build
// counts every weak link as a failure found the hard way.

const propText = (props: Partial<Record<Prop, number>>) =>
  (Object.entries(props) as [Prop, number][])
    .map(([p, v]) => (p === 'capacity' ? `${v} L` : `${PROP_LABEL[p]} ${'●'.repeat(v)}${'○'.repeat(3 - v)}`))
    .join(' · ')

export function ImproviseChallenge({ onScore }: SimProps) {
  const [chId, setChId] = useState(CHALLENGES[0].id)
  const [a, setA] = useState<Assignment>({})
  const [testedKey, setTestedKey] = useState<string | null>(null)
  const [shown, setShown] = useState<'none' | 'test' | 'commit'>('none')
  const ch = CHALLENGES.find((c) => c.id === chId)!
  const key = JSON.stringify(ch.roles.map((r) => a[r.id] ?? ''))
  const tested = testedKey === key
  const r = evaluate(ch, a, tested)

  const pick = (id: string) => { setChId(id); setA({}); setTestedKey(null); setShown('none') }
  const assign = (role: string, item: string) => { setA((x) => ({ ...x, [role]: item || undefined })); setShown('none') }

  return (
    <div>
      <div className="chip-group">
        {CHALLENGES.map((c) => (
          <button key={c.id} className={`chip ${c.id === chId ? 'on' : ''}`} onClick={() => pick(c.id)}>{c.title}</button>
        ))}
      </div>
      <p><strong>{ch.title}.</strong> {ch.brief}</p>
      <p className="muted small">Each job below is a <em>function</em>. Give each one an object. Cord and tape can be cut for two jobs; most things can only be in one place.{ch.cold ? ' It is cold and wet: gear that keeps you warm and dry is needed for that.' : ''}</p>

      <div className="controls">
        {ch.roles.map((role) => (
          <div className="control" key={role.id}>
            <label>{role.label}</label>
            <select value={a[role.id] ?? ''} onChange={(e) => assign(role.id, e.target.value)}>
              <option value="">— choose an object —</option>
              {ITEMS.map((it) => <option key={it.id} value={it.id}>{it.name}</option>)}
            </select>
            <small className="muted">needs: {propText(role.need)}</small>
          </div>
        ))}
      </div>

      <details>
        <summary className="small">What the objects are like</summary>
        <ul className="small">
          {ITEMS.map((it) => <li key={it.id}><strong>{it.name}</strong>{it.critical ? ' (warmth/rain gear)' : ''}: {propText(it.props)}. {it.note}</li>)}
        </ul>
      </details>

      <div className="row-btns">
        <button className="btn" disabled={!r.complete} onClick={() => { setTestedKey(key); setShown('test') }}>Load-test at camp</button>
        <button className="btn primary" disabled={!r.complete} onClick={() => { setShown('commit'); onScore(r.score) }}>Commit and go</button>
      </div>

      {shown !== 'none' && (
        <div className="sim-result">
          {shown === 'commit' && <div className="score">{r.score}%</div>}
          <strong>{shown === 'test' ? 'Load test (safe, at ground level)' : tested ? 'In use — you tested this build first' : 'In use — untested'}</strong>
          <div className="fn-grid">
            {r.rows.map((row) => (
              <div key={row.role.id} className={`fn ${row.fit >= 1 ? 'ok' : row.fit >= 0.6 ? 'partial' : ''}`}>
                {row.role.label}<br />
                <small>{row.item?.name ?? '—'} · {Math.round(row.fit * 100)}%</small><br />
                <small>{row.note}</small>
              </div>
            ))}
          </div>
          {r.hazards.length > 0 && <p><strong>Hazard:</strong> {r.hazards.join('; ')}.</p>}
          {r.criticalUsed.length > 0 && <p><strong>Opportunity cost:</strong> you are now without your {r.criticalUsed.join(' and ')} in cold, wet weather.</p>}
          {shown === 'commit' && (
            <>
              <div className="small">Function coverage {r.base}%{r.untestedPenalty ? ` · untested failures −${r.untestedPenalty}` : ''}{r.hazardPenalty ? ` · hazards −${r.hazardPenalty}` : ''}{r.criticalPenalty ? ` · critical gear −${r.criticalPenalty}` : ''}</div>
              <p>{ch.debrief}</p>
            </>
          )}
          {shown === 'test' && <p className="muted small">Swap any weak link, test again, then commit. A weakness found at camp costs minutes; found on the trail it costs much more.</p>}
        </div>
      )}
    </div>
  )
}
