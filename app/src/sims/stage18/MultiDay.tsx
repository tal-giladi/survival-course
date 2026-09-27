import { useState } from 'react'
import type { SimProps } from '../types'
import {
  DAYS, DRINKING_LABEL, ENVS, NIGHT_LABEL, RATION_LABEL, SIGNAL_NEEDED, TASK_LABEL, TREATMENT_LABEL, WATER_CAP,
  aircraftDay, forecast, initialState, isStorm, performance, runDay, scoreMultiDay, treatmentOptions, waterNeed,
  type DayPlan, type Drinking, type EnvId, type MDState, type Night, type Ration, type Task, type Treatment,
} from './multiDayModel'

// Several days at one camp: assign four work blocks a day and set food, water, treatment, night and routine.

const SLOT = ['Morning 1', 'Morning 2', 'Afternoon 1', 'Afternoon 2']
const SERIES: { key: 'energy' | 'hydration' | 'warmth' | 'morale' | 'gear'; label: string; color: string; dash?: string }[] = [
  { key: 'energy', label: 'energy', color: 'var(--accent)' },
  { key: 'hydration', label: 'hydration', color: 'var(--info)', dash: '5 3' },
  { key: 'warmth', label: 'warmth', color: 'var(--accent-2)' },
  { key: 'morale', label: 'morale', color: 'var(--ok)', dash: '2 3' },
  { key: 'gear', label: 'gear', color: 'var(--muted)', dash: '8 3' },
]

function Chart({ s }: { s: MDState }) {
  const W = 480, H = 160, L = 30, R = 10, T = 22, B = 22
  const x = (d: number) => L + (d / DAYS) * (W - L - R)
  const y = (v: number) => T + (1 - v / 100) * (H - T - B)
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of energy, hydration, warmth, morale and gear condition at the end of each day so far">
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="var(--line)" />
      <line x1={L} y1={y(30)} x2={W - R} y2={y(30)} stroke="var(--bad)" strokeDasharray="3 3" opacity="0.6" />
      {Array.from({ length: DAYS + 1 }, (_, d) => <text key={d} x={x(d)} y={H - 6} fontSize="9" textAnchor="middle" className="muted-fill">{d === 0 ? 'start' : `day ${d}`}</text>)}
      {[0, 50, 100].map((v) => <text key={v} x={L - 4} y={y(v) + 3} fontSize="9" textAnchor="end" className="muted-fill">{v}</text>)}
      {SERIES.map((k) => (
        <polyline key={k.key} points={s.history.map((h) => `${x(h.day)},${y(h[k.key])}`).join(' ')} fill="none" stroke={k.color} strokeWidth="2" strokeDasharray={k.dash} />
      ))}
      {SERIES.map((k, i) => <text key={k.key} x={L + 4 + i * 80} y={12} fontSize="10" fill={k.color}>{k.label}</text>)}
    </svg>
  )
}

function Meter({ label, value, max, unit, danger, invert }: { label: string; value: number; max: number; unit?: string; danger: boolean; invert?: boolean }) {
  return (
    <div className={`meter ${danger ? 'danger' : ''}`}>
      <span className="meter-label">{label}</span>
      <div className={`meter-bar ${invert ? 'invert' : ''}`}><div style={{ width: `${Math.max(0, Math.min(100, (value / max) * 100))}%` }} /></div>
      <span className="meter-val">{Math.round(value * 10) / 10}{unit ?? ''}</span>
    </div>
  )
}

const defaultPlan = (env: EnvId): DayPlan => ({
  blocks: ['water', 'shelter', 'wood', 'signal'],
  ration: 'low',
  drinking: 'need',
  treatment: ENVS[env].filterWorks ? 'filter' : 'boil',
  night: 'banked',
  routine: true,
})

export function MultiDay({ onScore }: SimProps) {
  const [env, setEnv] = useState<EnvId>('forest')
  const [s, setS] = useState<MDState | null>(null)
  const [plan, setPlan] = useState<DayPlan>(defaultPlan('forest'))

  if (!s) {
    return (
      <div>
        <p>You have sprained an ankle badly at a remote camp and cannot safely walk out. Your trip plan is with a friend, so searchers know roughly where you are: a search aircraft will overfly the area once, and a ground team will reach you by the evening of day {DAYS}. You have a tarp, a sleeping bag, a knife, a lighter, a pot, two bottles ({WATER_CAP} L of containers in all), a water filter, {10} purification tablets and 4,000 kcal of food.</p>
        <p>Each day you assign <strong>four work blocks</strong> and set the policy for food, water, treatment, the night and your routine. The model then runs the day and reports what happened.</p>
        <div className="controls">
          <div className="control">
            <label>Environment</label>
            <select value={env} onChange={(e) => setEnv(e.target.value as EnvId)}>
              {(Object.keys(ENVS) as EnvId[]).map((k) => <option key={k} value={k}>{ENVS[k].label}</option>)}
            </select>
          </div>
        </div>
        <p className="muted small">The model is deliberately simple and directionally correct; its assumptions are written at the top of its source file. Food-getting is modelled as passive fishing or similar where it is legal — check the rules where you travel.</p>
        <button className="btn primary" onClick={() => { setS(initialState(env)); setPlan(defaultPlan(env)) }}>Start day 1</button>
      </div>
    )
  }

  const e = ENVS[s.env]
  const result = s.done ? scoreMultiDay(s) : null
  const tOpts = treatmentOptions(s.env)
  const safePlan: DayPlan = { ...plan, treatment: tOpts.includes(plan.treatment) ? plan.treatment : 'boil' }
  const need = waterNeed(s.env, safePlan.blocks, s.illDays > 0)
  const setBlock = (i: number, t: Task) => { const b = [...plan.blocks] as DayPlan['blocks']; b[i] = t; setPlan({ ...plan, blocks: b }) }
  const live = () => {
    const next = runDay(s, safePlan)
    setS(next)
    if (next.done) onScore(scoreMultiDay(next).score)
  }
  const recent = [...s.log].reverse().slice(0, 12)

  return (
    <div>
      <h4>{s.done ? 'The wait is over' : `Day ${s.day} of ${DAYS}`} · {e.label}{!s.done && isStorm(s) ? ' · STORM' : ''}</h4>
      <div className="meters">
        <Meter label="Energy" value={s.energy} max={100} danger={s.energy < 40} />
        <Meter label="Hydration" value={s.hydration} max={100} danger={s.hydration < 60} />
        <Meter label="Warmth" value={s.warmth} max={100} danger={s.warmth < 50} />
        <Meter label="Sleep debt" value={s.sleepDebt} max={20} unit=" h" danger={s.sleepDebt > 8} invert />
        <Meter label="Morale" value={s.morale} max={100} danger={s.morale < 35} />
        <Meter label="Gear condition" value={s.gear} max={100} danger={s.gear < 45} />
        <Meter label="Shelter" value={s.shelter} max={100} danger={s.shelter < 40} />
        <Meter label="Signals ready" value={s.signal} max={100} danger={s.signal < SIGNAL_NEEDED && s.day <= aircraftDay(s.env)} />
        <Meter label="Firewood" value={s.fuel} max={30} unit=" units" danger={s.fuel < 5} />
        <Meter label="Treated water" value={s.water} max={WATER_CAP} unit=" L" danger={s.water < 1} />
        <Meter label="Food" value={s.food} max={4000} unit=" kcal" danger={s.food < 500} />
        {e.filterWorks && <Meter label="Filter" value={s.filter} max={100} danger={s.filter < 30} />}
        <Meter label="Tablets" value={s.tablets} max={10} danger={s.tablets < 3} />
      </div>
      <Chart s={s} />

      {!s.done && (
        <>
          <p className="small"><strong>Outlook:</strong> Today — {forecast(s.env, s.day)} Tomorrow — {s.day < DAYS ? forecast(s.env, s.day + 1) : 'the ground team is due.'} Work performance today ≈ {Math.round(performance(s) * 100)} %. Water you will need today with this plan ≈ {Math.round(need * 10) / 10} L.{s.illDays > 0 ? ' You are ill (diarrhoea): drink more.' : ''}</p>
          <div className="controls">
            {SLOT.map((label, i) => (
              <div className="control" key={label}>
                <label>{label}</label>
                <select value={plan.blocks[i]} onChange={(ev) => setBlock(i, ev.target.value as Task)}>
                  {(Object.keys(TASK_LABEL) as Task[]).map((t) => <option key={t} value={t}>{TASK_LABEL[t]}</option>)}
                </select>
              </div>
            ))}
          </div>
          <div className="controls">
            <div className="control">
              <label>Food</label>
              <select value={plan.ration} onChange={(ev) => setPlan({ ...plan, ration: ev.target.value as Ration })}>
                {(Object.keys(RATION_LABEL) as Ration[]).map((o) => <option key={o} value={o}>{RATION_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Drinking</label>
              <select value={plan.drinking} onChange={(ev) => setPlan({ ...plan, drinking: ev.target.value as Drinking })}>
                {(Object.keys(DRINKING_LABEL) as Drinking[]).map((o) => <option key={o} value={o}>{DRINKING_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Water treatment</label>
              <select value={safePlan.treatment} onChange={(ev) => setPlan({ ...plan, treatment: ev.target.value as Treatment })}>
                {tOpts.map((o) => <option key={o} value={o}>{TREATMENT_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Night</label>
              <select value={plan.night} onChange={(ev) => setPlan({ ...plan, night: ev.target.value as Night })}>
                {(Object.keys(NIGHT_LABEL) as Night[]).map((o) => <option key={o} value={o}>{NIGHT_LABEL[o]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Routine</label>
              <label style={{ fontWeight: 400 }}>
                <input type="checkbox" checked={plan.routine} onChange={(ev) => setPlan({ ...plan, routine: ev.target.checked })} />{' '}
                Fixed daily routine: morning checks, small goals, evening plan and log
              </label>
            </div>
          </div>
          <button className="btn primary" onClick={live}>Live day {s.day}</button>
        </>
      )}

      <h4>Log</h4>
      <ul className="small">
        {recent.map((l, i) => <li key={`${l.day}-${i}`} style={{ color: l.tone === 'bad' ? 'var(--bad)' : l.tone === 'good' ? 'var(--ok)' : undefined }}><strong>Day {l.day}:</strong> {l.text}</li>)}
      </ul>

      {result && (
        <div className="sim-result">
          <div className="score">{result.score}%</div>
          <div>Outcome: {s.outcome === 'rescued' ? 'spotted by the aircraft and lifted out' : s.outcome === 'found' ? 'found by the ground team on day 6' : 'found in a critical condition'}</div>
          {result.breakdown.length > 0 && <ul>{result.breakdown.map((b) => <li key={b.label}>{b.label}: {b.points}</li>)}</ul>}
          {result.lessons.length > 0 && (<><strong>What to take away</strong><ul>{result.lessons.map((t) => <li key={t}>{t}</li>)}</ul></>)}
          <button className="btn" onClick={() => setS(null)}>Try again (another environment or plan)</button>
        </div>
      )}
    </div>
  )
}
