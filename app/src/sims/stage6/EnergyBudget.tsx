import { useState } from 'react'
import type { SimProps } from '../types'
import { ACQUISITIONS, ACTIVITIES, ENVIRONMENTS, FOOD_TYPES, SCENARIOS, defaultPlan, evenRation, mifflinStJeor, simulate } from './energyModel'
import type { ActivityId, AcqId, FoodType, Plan, Profile, Result, Sex } from './energyModel'

const DEFAULT_PROFILE: Profile = { sex: 'male', massKg: 75, heightCm: 178, age: 35, bodyFatPct: 20 }

function Chart({ r }: { r: Result }) {
  const W = 560, H = 240, L = 40, R = 16, T = 36, B = 34
  const n = r.days.length
  const x = (i: number) => L + ((i + 0.5) / n) * (W - L - R)
  const y = (pct: number) => T + (1 - pct / 100) * (H - T - B)
  const maxDef = Math.max(1000, ...r.days.map((d) => Math.abs(d.net)))
  const bw = Math.min(40, ((W - L - R) / n) * 0.5)
  const line = (k: 'glycogenPct' | 'performance') => r.days.map((d, i) => `${i ? 'L' : 'M'}${x(i)},${y(d[k])}`).join(' ')
  const zero = y(50)
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Daily energy balance, glycogen and performance over the plan">
      {[0, 50, 100].map((p) => (
        <g key={p}>
          <line x1={L} x2={W - R} y1={y(p)} y2={y(p)} stroke="var(--line)" strokeDasharray="3 4" />
          <text x={L - 6} y={y(p) + 4} fontSize="10" textAnchor="end" className="muted-fill">{p}%</text>
        </g>
      ))}
      {r.days.map((d, i) => {
        const h = (Math.abs(d.net) / maxDef) * (H - T - B) * 0.5
        return (
          <g key={d.day}>
            <rect x={x(i) - bw / 2} y={d.net < 0 ? zero : zero - h} width={bw} height={h} fill={d.net < 0 ? 'var(--bad)' : 'var(--ok)'} opacity="0.35" />
            <text x={x(i)} y={H - 16} fontSize="11" textAnchor="middle">Day {d.day}</text>
            <text x={x(i)} y={H - 4} fontSize="9.5" textAnchor="middle" className="muted-fill">{d.net > 0 ? '+' : ''}{d.net} kcal</text>
          </g>
        )
      })}
      <path d={line('glycogenPct')} fill="none" stroke="var(--info)" strokeWidth="2.5" />
      <path d={line('performance')} fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="6 3" />
      {r.days.map((d, i) => (
        <g key={`p${d.day}`}>
          <circle cx={x(i)} cy={y(d.glycogenPct)} r="3.5" fill="var(--info)" />
          <circle cx={x(i)} cy={y(d.performance)} r="3.5" fill="var(--accent)" />
        </g>
      ))}
      <g fontSize="10.5">
        <line x1={L + 4} x2={L + 24} y1={12} y2={12} stroke="var(--info)" strokeWidth="2.5" />
        <text x={L + 28} y={16}>Glycogen</text>
        <line x1={L + 94} x2={L + 114} y1={12} y2={12} stroke="var(--accent)" strokeWidth="2.5" strokeDasharray="6 3" />
        <text x={L + 118} y={16}>Performance</text>
        <rect x={L + 200} y={7} width="14" height="10" fill="var(--bad)" opacity="0.35" />
        <text x={L + 218} y={16}>Daily balance (bars)</text>
      </g>
    </svg>
  )
}

export function EnergyBudget({ onScore }: SimProps) {
  const [scId, setScId] = useState(SCENARIOS[0].id)
  const sc = SCENARIOS.find((s) => s.id === scId)!
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE)
  const [plan, setPlan] = useState<Plan>(() => defaultPlan(SCENARIOS[0], DEFAULT_PROFILE))
  const [submitted, setSubmitted] = useState(false)
  const r = simulate(sc, { ...plan, profile })
  const planned = plan.days.reduce((a, d) => a + d.ration, 0)

  const change = (p: Plan) => { setPlan(p); setSubmitted(false) }
  const setDay = (i: number, patch: Partial<{ activity: ActivityId; ration: number }>) =>
    change({ ...plan, days: plan.days.map((d, j) => (j === i ? { ...d, ...patch } : d)) })
  const setProf = (patch: Partial<Profile>) => { setProfile({ ...profile, ...patch }); setSubmitted(false) }

  return (
    <div>
      <div className="callout callout-info">
        <div className="callout-title">ℹ️ A planning model, not a prediction</div>
        Yields are expected values from illustrative rates; real days are lumpy. Trapping and hunting appear only as energy-economics concepts —
        they are legal only with licences, seasons and training, and this course teaches no methods.
      </div>
      <div className="control">
        <label>Scenario</label>
        <select value={scId} onChange={(e) => { const s = SCENARIOS.find((x) => x.id === e.target.value)!; setScId(s.id); setPlan(defaultPlan(s, profile)); setSubmitted(false) }}>
          {SCENARIOS.map((s) => <option key={s.id} value={s.id}>{s.title}</option>)}
        </select>
        <p className="muted small">{sc.brief} Environment: {ENVIRONMENTS[sc.env].label}. Carried food: {sc.carriedKcal} kcal.{sc.waterLimited ? ' Water is limited.' : ''}</p>
      </div>

      <h4>You</h4>
      <div className="controls">
        <div className="control">
          <label>Sex (for the BMR equation)</label>
          <select value={profile.sex} onChange={(e) => setProf({ sex: e.target.value as Sex })}>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="control"><label>Body mass <span className="val">{profile.massKg} kg</span></label><input type="range" min={45} max={120} value={profile.massKg} onChange={(e) => setProf({ massKg: +e.target.value })} /></div>
        <div className="control"><label>Height <span className="val">{profile.heightCm} cm</span></label><input type="range" min={150} max={200} value={profile.heightCm} onChange={(e) => setProf({ heightCm: +e.target.value })} /></div>
        <div className="control"><label>Age <span className="val">{profile.age}</span></label><input type="range" min={18} max={75} value={profile.age} onChange={(e) => setProf({ age: +e.target.value })} /></div>
        <div className="control"><label>Body fat <span className="val">{profile.bodyFatPct}%</span></label><input type="range" min={8} max={40} value={profile.bodyFatPct} onChange={(e) => setProf({ bodyFatPct: +e.target.value })} /></div>
      </div>
      <p className="small">BMR (Mifflin–St Jeor) = 10 × {profile.massKg} + 6.25 × {profile.heightCm} − 5 × {profile.age} {profile.sex === 'male' ? '+ 5' : '− 161'} = <b>{Math.round(mifflinStJeor(profile))} kcal/day</b></p>

      <h4>Food and daily plan</h4>
      <div className="controls">
        <div className="control">
          <label>Carried food type</label>
          <select value={plan.foodType} onChange={(e) => change({ ...plan, foodType: e.target.value as FoodType })}>
            {(Object.keys(FOOD_TYPES) as FoodType[]).map((k) => <option key={k} value={k}>{FOOD_TYPES[k].label}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Planned from the pack <span className="val">{planned} / {sc.carriedKcal} kcal</span></label>
          <button className="btn small" onClick={() => change({ ...plan, days: plan.days.map((d) => ({ ...d, ration: evenRation(sc) })) })}>Spread evenly, keep 15 % reserve</button>
        </div>
      </div>
      <div className="table-wrap">
        <table>
          <thead><tr><th>Day</th><th>Activity</th><th>Ration (kcal)</th><th>Spend</th><th>Food-getting</th><th>Balance</th><th>Glycogen</th><th>Fat left</th><th>Perf.</th></tr></thead>
          <tbody>
            {plan.days.map((d, i) => {
              const dr = r.days[i]
              return (
                <tr key={i}>
                  <td>{i + 1}{sc.demandDays.includes(i + 1) ? ' ★' : ''}</td>
                  <td>
                    <select value={d.activity} onChange={(e) => setDay(i, { activity: e.target.value as ActivityId })}>
                      {(Object.keys(ACTIVITIES) as ActivityId[]).map((k) => <option key={k} value={k}>{ACTIVITIES[k].label}</option>)}
                    </select>
                  </td>
                  <td><input type="number" min={0} step={100} value={d.ration} style={{ width: '6em' }} onChange={(e) => setDay(i, { ration: Math.max(0, +e.target.value) })} />{dr.shortRation ? ' ⚠️' : ''}</td>
                  <td>{dr.tdee}</td>
                  <td>{dr.acqYield ? `+${dr.acqYield}` : '—'}{dr.acqYield ? <span className="muted small"> ({Math.round(dr.pNothing * 100)}% nothing)</span> : null}</td>
                  <td style={{ color: dr.net < 0 ? 'var(--bad)' : 'var(--ok)' }}>{dr.net}</td>
                  <td>{dr.glycogenPct}%</td>
                  <td>{dr.fatKg} kg</td>
                  <td>{dr.performance}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div className="caption">★ = a day that demands a hard effort. “Spend” includes the energy cost of food-getting.</div>
      </div>

      <h4>Food-getting (hours per day, every day)</h4>
      <div className="controls">
        {ACQUISITIONS.map((a) => {
          const rich = sc.richness[a.id]
          const h = plan.acqHours[a.id] ?? 0
          return (
            <div key={a.id} className="control">
              <label>{a.label} <span className="val">{h} h</span></label>
              <input type="range" min={0} max={a.maxHours} step={0.5} value={h} onChange={(e) => change({ ...plan, acqHours: { ...plan.acqHours, [a.id as AcqId]: +e.target.value } })} />
              <div className="muted small">
                {rich === 0 ? 'Not available here. ' : `Expected ≈ ${Math.round(a.pPerHour * a.kcalPerSuccess * rich)} kcal/h for ${a.costPerHour} kcal/h. `}
                {a.note}
              </div>
            </div>
          )
        })}
      </div>

      <Chart r={r} />
      <ul className="small">
        {r.days.map((d) => <li key={d.day}><b>Day {d.day}:</b> {d.effects.join(' ')}</li>)}
      </ul>

      <button className="btn primary" onClick={() => { setSubmitted(true); onScore(r.score) }}>Evaluate plan</button>
      {submitted && (
        <div className="sim-result">
          <div className="score">{r.score}%</div>
          <div>Food left at the end: {r.foodLeft} kcal · food-getting: +{r.totalAcqYield} kcal for {r.totalAcqCost} kcal spent</div>
          {r.tips.length > 0 && <ul>{r.tips.map((t) => <li key={t}>{t}</li>)}</ul>}
          <p className="muted small">Try: the same scenario with zero food-getting; then with only passive methods; then with stalking. Compare the hard day’s performance.</p>
        </div>
      )}
    </div>
  )
}
