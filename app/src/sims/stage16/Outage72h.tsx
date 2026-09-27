import { useState } from 'react'
import type { SimProps } from '../types'
import {
  ACTION_LABEL, BATTERY_MAX, CLIMATE_LABEL, END_HOUR, FOOD_LABEL, POWER_LABEL, WATER_LABEL,
  availableActions, climateOptions, clockLabel, foodOptions, initialState, runBlock, scoreOutage,
  type Action, type Decisions, type Kit, type OutageState, type Season,
} from './outageModel'

// 72-hour outage: set a policy every 6 hours, then watch the household run hour by hour.

function Chart({ s }: { s: OutageState }) {
  const W = 480, H = 150, L = 34, R = 34, T = 10, B = 22
  const x = (h: number) => L + (h / END_HOUR) * (W - L - R)
  const tMin = s.season === 'winter' ? -5 : 15
  const tMax = s.season === 'winter' ? 30 : 40
  const yT = (t: number) => T + (1 - (t - tMin) / (tMax - tMin)) * (H - T - B)
  const wMax = Math.max(50, ...s.history.map((p) => p.potable))
  const yW = (w: number) => T + (1 - w / wMax) * (H - T - B)
  const band = s.season === 'winter' ? [16, 22] : [20, 30]
  const pts = (f: (p: OutageState['history'][number]) => number) => s.history.map((p) => `${x(p.hour)},${f(p)}`).join(' ')
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of felt temperature and drinking water over the 72 hours so far">
      <rect x={L} y={yT(band[1])} width={W - L - R} height={yT(band[0]) - yT(band[1])} fill="var(--ok)" opacity="0.15" />
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="var(--line)" />
      {[0, 12, 24, 36, 48, 60, 72].map((h) => <text key={h} x={x(h)} y={H - 6} fontSize="9" textAnchor="middle" className="muted-fill">{h} h</text>)}
      {[tMin, (tMin + tMax) / 2, tMax].map((t) => <text key={t} x={L - 4} y={yT(t) + 3} fontSize="9" textAnchor="end" className="muted-fill">{Math.round(t)}°</text>)}
      <text x={W - R + 4} y={yW(wMax) + 8} fontSize="9" className="muted-fill">{Math.round(wMax)} L</text>
      <text x={W - R + 4} y={yW(0)} fontSize="9" className="muted-fill">0 L</text>
      <polyline points={pts((p) => yT(Math.max(tMin, Math.min(tMax, p.felt))))} fill="none" stroke="var(--accent-2)" strokeWidth="2" />
      <polyline points={pts((p) => yW(p.potable))} fill="none" stroke="var(--info)" strokeWidth="2" strokeDasharray="5 3" />
      <text x={L + 4} y={T + 10} fontSize="10" fill="var(--accent-2)">felt temperature</text>
      <text x={L + 110} y={T + 10} fontSize="10" fill="var(--info)">drinking water</text>
      <text x={L + 200} y={T + 10} fontSize="10" className="muted-fill">green band = comfortable</text>
    </svg>
  )
}

function Meter({ label, value, max, unit, danger, invert }: { label: string; value: number; max: number; unit?: string; danger: boolean; invert?: boolean }) {
  return (
    <div className={`meter ${danger ? 'danger' : ''}`}>
      <span className="meter-label">{label}</span>
      <div className={`meter-bar ${invert ? 'invert' : ''}`}><div style={{ width: `${Math.max(0, Math.min(100, (value / max) * 100))}%` }} /></div>
      <span className="meter-val">{Math.round(value)}{unit ?? ''}</span>
    </div>
  )
}

export function Outage72h({ onScore }: SimProps) {
  const [season, setSeason] = useState<Season>('winter')
  const [kit, setKit] = useState<Kit>({ coAlarm: true, generator: false, stove: true, radio: true })
  const [s, setS] = useState<OutageState | null>(null)
  const [d, setD] = useState<Decisions>({ climate: 'none', food: 'pantry', water: 'careless', power: 'normal' })
  const [acts, setActs] = useState<Action[]>([])

  if (!s) {
    return (
      <div>
        <p>A winter storm or a summer heatwave has brought down the grid. You, your partner and your 7-year-old live in a ground-floor flat; next door, Mrs Varga (84) lives alone. The outage starts at 18:00 and lasts 72 hours. Water pressure fails about six hours in. Every 6 hours you set the household’s policy and pick one-off actions; the model runs hour by hour.</p>
        <div className="controls">
          <div className="control">
            <label>Season</label>
            <select value={season} onChange={(e) => setSeason(e.target.value as Season)}>
              <option value="winter">Winter storm (−8 to 0 °C outside)</option>
              <option value="summer">Summer heatwave (23 to 37 °C outside)</option>
            </select>
          </div>
          <div className="control">
            <label>What is in your kit?</label>
            {(['coAlarm', 'radio', 'stove', 'generator'] as (keyof Kit)[]).map((k) => (
              <label key={k} style={{ fontWeight: 400 }}>
                <input type="checkbox" checked={kit[k]} onChange={(e) => setKit({ ...kit, [k]: e.target.checked })} />{' '}
                {{ coAlarm: 'Battery CO alarm', radio: 'Wind-up radio', stove: 'Camping stove', generator: 'Portable generator (a small back yard)' }[k]}
              </label>
            ))}
          </div>
        </div>
        <p className="muted small">Start: 12 L of bottled water, a fridge (≈ 1,800 kcal of perishables), a full freezer (≈ 6,000 kcal), a pantry (≈ 9,000 kcal), 60 Wh in phones and a power bank.</p>
        <button className="btn primary" onClick={() => { setS(initialState(season, kit)); setD({ climate: 'none', food: 'pantry', water: 'careless', power: 'normal' }); setActs([]) }}>Start the outage</button>
      </div>
    )
  }

  const avail = availableActions(s)
  const result = s.done ? scoreOutage(s) : null
  const cOpts = climateOptions(s.season, s.kit)
  const fOpts = foodOptions(s.kit)
  const run = () => {
    const next = runBlock(s, { ...d, climate: cOpts.includes(d.climate) ? d.climate : 'none', food: fOpts.includes(d.food) ? d.food : 'pantry' }, acts)
    setS(next)
    setActs([])
    if (next.done) onScore(scoreOutage(next).score)
  }
  const toggle = (a: Action) => setActs((x) => (x.includes(a) ? x.filter((y) => y !== a) : [...x, a]))
  const recent = [...s.log].reverse().slice(0, 10)

  return (
    <div>
      <h4>{s.done ? 'Power restored' : clockLabel(s.hour)} · hour {s.hour} of {END_HOUR} · outside {Math.round(s.outdoor)} °C · indoors {Math.round(s.indoor)} °C</h4>
      <div className="meters">
        <Meter label="Felt temp" value={s.felt} max={s.season === 'winter' ? 25 : 40} unit=" °C" danger={s.season === 'winter' ? s.felt < 14 : s.felt > 31} />
        <Meter label="Drinking water" value={s.potable} max={50} unit=" L" danger={s.potable < 6} />
        <Meter label="Bath/grey water" value={s.bath} max={150} unit=" L" danger={false} />
        <Meter label="Battery" value={s.battery} max={BATTERY_MAX} unit=" Wh" danger={s.battery < 10} />
        <Meter label="Food left" value={(s.fridgeKcal + s.freezerKcal + s.pantryKcal) / 1000} max={17} unit="k kcal" danger={s.pantryKcal < 2000} />
        <Meter label="Cold/heat strain" value={s.strain} max={100} danger={s.strain > 40} invert />
        <Meter label="Neighbour strain" value={s.neighbour} max={100} danger={s.neighbour > 40} invert />
        <Meter label="Dehydration" value={s.dehydration} max={100} danger={s.dehydration > 30} invert />
        <Meter label="CO dose" value={s.coDose} max={12} danger={s.coDose > 2} invert />
      </div>
      <Chart s={s} />

      {!s.done && (
        <>
          <div className="controls">
            <div className="control">
              <label>{s.season === 'winter' ? 'Keeping warm' : 'Keeping cool'}</label>
              <select value={cOpts.includes(d.climate) ? d.climate : 'none'} onChange={(e) => setD({ ...d, climate: e.target.value as Decisions['climate'] })}>
                {cOpts.map((o) => <option key={o} value={o}>{CLIMATE_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Food</label>
              <select value={fOpts.includes(d.food) ? d.food : 'pantry'} onChange={(e) => setD({ ...d, food: e.target.value as Decisions['food'] })}>
                {fOpts.map((o) => <option key={o} value={o}>{FOOD_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Water use</label>
              <select value={d.water} onChange={(e) => setD({ ...d, water: e.target.value as Decisions['water'] })}>
                {(Object.keys(WATER_LABEL) as Decisions['water'][]).map((o) => <option key={o} value={o}>{WATER_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Phones and lights</label>
              <select value={d.power} onChange={(e) => setD({ ...d, power: e.target.value as Decisions['power'] })}>
                {(Object.keys(POWER_LABEL) as Decisions['power'][]).map((o) => <option key={o} value={o}>{POWER_LABEL[o]}</option>)}
              </select>
            </div>
          </div>
          <p className="small"><strong>One-off actions this block</strong> (tick any):</p>
          <div className="chip-group">
            {avail.map((a) => <button key={a} className={`chip ${acts.includes(a) ? 'on' : ''}`} onClick={() => toggle(a)}>{ACTION_LABEL[a]}</button>)}
          </div>
          <button className="btn primary" onClick={run}>{acts.includes('shelter') ? 'Go to the shelter' : 'Run the next 6 hours'}</button>
        </>
      )}

      <h4>Log</h4>
      <ul className="small">
        {recent.map((l, i) => <li key={`${l.hour}-${i}`} style={{ color: l.tone === 'bad' ? 'var(--bad)' : l.tone === 'good' ? 'var(--ok)' : undefined }}><strong>{clockLabel(Math.min(l.hour, END_HOUR))}:</strong> {l.text}</li>)}
      </ul>

      {result && (
        <div className="sim-result">
          <div className="score">{result.score}%</div>
          <div>Outcome: {s.outcome === 'co-critical' ? 'carbon-monoxide poisoning' : s.outcome === 'sheltered' ? 'moved to the community shelter' : 'got through 72 hours at home'}</div>
          {result.breakdown.length > 0 && <ul>{result.breakdown.map((b) => <li key={b.label}>{b.label}: {b.points}</li>)}</ul>}
          {result.lessons.length > 0 && (<><strong>What to take away</strong><ul>{result.lessons.map((t) => <li key={t}>{t}</li>)}</ul></>)}
          <button className="btn" onClick={() => setS(null)}>Try again (switch season or kit)</button>
        </div>
      )}
    </div>
  )
}
