import { useState } from 'react'
import type { SimProps } from '../types'
import { BUDGETS, ITEMS, NEED_LABEL, PRESETS, SPACES, evaluateKit, persons, type Climate, type Constraints, type Counts, type Household } from './homeKitModel'

// Home Kit Builder: choose a household, then stock a kit under a budget and a storage-space limit.
// Score = importance-weighted coverage of the household's needs, minus safety penalties
// (candles, generator without CO alarm, generator in a flat), reduced for overspending space or money.

type NumKey = 'adults' | 'children' | 'infants' | 'elderly' | 'pets' | 'days'
const STEPPERS: { k: NumKey; label: string; min: number; max: number }[] = [
  { k: 'adults', label: 'Adults', min: 0, max: 6 },
  { k: 'children', label: 'Children', min: 0, max: 5 },
  { k: 'infants', label: 'Infants', min: 0, max: 2 },
  { k: 'elderly', label: 'Older adults', min: 0, max: 3 },
  { k: 'pets', label: 'Pets', min: 0, max: 3 },
  { k: 'days', label: 'Days to cover', min: 3, max: 14 },
]

export function HomeKit({ onScore }: SimProps) {
  const [h, setH] = useState<Household>(PRESETS[1].h)
  const [c, setC] = useState<Constraints>(PRESETS[1].c)
  const [counts, setCounts] = useState<Counts>({})
  const [submitted, setSubmitted] = useState(false)
  const r = evaluateKit(h, counts, c)

  const change = (fn: () => void) => { setSubmitted(false); fn() }
  const setN = (k: NumKey, v: number) => change(() => setH((x) => ({ ...x, [k]: v })))
  const bump = (id: string, d: number) => change(() => setCounts((x) => ({ ...x, [id]: Math.max(0, (x[id] ?? 0) + d) })))
  const loadPreset = (id: string) => {
    const p = PRESETS.find((x) => x.id === id)!
    change(() => { setH(p.h); setC(p.c); setCounts({}) })
  }

  return (
    <div>
      <div className="chip-group">
        {PRESETS.map((p) => <button key={p.id} className="chip" onClick={() => loadPreset(p.id)}>{p.name}</button>)}
      </div>
      <div className="controls">
        {STEPPERS.map((s) => (
          <div className="control" key={s.k}>
            <label>{s.label} <span className="val">{h[s.k]}</span></label>
            <input type="range" min={s.min} max={s.max} value={h[s.k]} onChange={(e) => setN(s.k, Number(e.target.value))} />
          </div>
        ))}
        <div className="control">
          <label>Climate</label>
          <select value={h.climate} onChange={(e) => change(() => setH((x) => ({ ...x, climate: e.target.value as Climate })))}>
            <option value="temperate">Temperate</option>
            <option value="hot">Hot summers (heatwaves)</option>
            <option value="cold">Cold winters</option>
          </select>
        </div>
        <div className="control">
          <label>
            <input type="checkbox" checked={h.medications} onChange={(e) => change(() => setH((x) => ({ ...x, medications: e.target.checked })))} /> Someone takes daily prescription medication
          </label>
        </div>
        <div className="control">
          <label>Budget</label>
          <select value={c.budget} onChange={(e) => change(() => setC((x) => ({ ...x, budget: Number(e.target.value) })))}>
            <option value={BUDGETS.tight}>Tight ({BUDGETS.tight})</option>
            <option value={BUDGETS.moderate}>Moderate ({BUDGETS.moderate})</option>
            <option value={BUDGETS.generous}>Generous ({BUDGETS.generous})</option>
          </select>
        </div>
        <div className="control">
          <label>Home</label>
          <select value={c.dwelling} onChange={(e) => change(() => setC((x) => ({ ...x, dwelling: e.target.value as Constraints['dwelling'], space: e.target.value === 'flat' ? SPACES.flat : SPACES.house })))}>
            <option value="flat">Flat — about {SPACES.flat} L of storage</option>
            <option value="house">House — about {SPACES.house} L of storage</option>
          </select>
        </div>
      </div>
      <p className="muted small">{persons(h)} people · {h.pets} pets · {h.days} days. Costs are in arbitrary units; storage in litres of cupboard space.</p>

      <div className="small">Budget</div>
      <div className="stack-bar"><div style={{ width: `${Math.min(100, (r.cost / c.budget) * 100)}%`, background: r.cost > c.budget ? 'var(--bad)' : 'var(--accent)' }}>{r.cost} / {c.budget}</div></div>
      <div className="small">Storage space</div>
      <div className="stack-bar"><div style={{ width: `${Math.min(100, (r.vol / c.space) * 100)}%`, background: r.vol > c.space ? 'var(--bad)' : 'var(--info)' }}>{r.vol} / {c.space} L</div></div>

      <div className="kit-grid">
        {ITEMS.map((it) => {
          const n = counts[it.id] ?? 0
          return (
            <div key={it.id} className={`kit-item ${n ? 'on' : ''}`}>
              <strong>{n ? `${n} × ` : ''}{it.name}</strong>
              <small>cost {it.cost} · {it.vol} L{it.note ? ` · ${it.note}` : ''}</small>
              <span className="row-btns">
                <button className="btn" aria-label={`Remove one ${it.name}`} onClick={() => bump(it.id, -1)} disabled={!n}>−</button>
                <button className="btn" aria-label={`Add one ${it.name}`} onClick={() => bump(it.id, 1)}>+</button>
              </span>
            </div>
          )
        })}
      </div>

      <h4>Coverage of this household’s needs</h4>
      <div className="fn-grid">
        {r.rows.map((row) => (
          <div key={row.need} className={`fn ${row.cov >= 1 ? 'ok' : row.cov > 0 ? 'partial' : ''}`}>
            {NEED_LABEL[row.need]} {'★'.repeat(row.importance)}<br />
            <small>{Math.round(row.have * 10) / 10} / {row.amount}</small>
          </div>
        ))}
      </div>
      <button className="btn primary" onClick={() => { setSubmitted(true); onScore(r.score) }}>Evaluate kit</button>
      {submitted && (
        <div className="sim-result">
          <div className="score">{r.score}%</div>
          <div>Weighted coverage {Math.round(r.coverage * 100)}%{r.safetyPenalty ? ` · safety penalty −${r.safetyPenalty}` : ''}{r.overFactor < 1 ? ` · over-limit factor ×${r.overFactor.toFixed(2)}` : ''}</div>
          {r.gaps.length > 0 && (<><strong>Biggest gaps (most important first)</strong><ul>{r.gaps.slice(0, 6).map((g) => <li key={g}>{g}</li>)}</ul></>)}
          {r.tips.length > 0 && <ul>{r.tips.map((t) => <li key={t}>{t}</li>)}</ul>}
          <p className="muted small">Change the household — add an infant, an older relative on medication, a pet, or a hot climate — and see how the “right” kit changes.</p>
        </div>
      )}
    </div>
  )
}
