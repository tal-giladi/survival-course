import { useState } from 'react'
import type { SimProps } from '../types'
import {
  ACTIVITY_LABEL, DRINK_LABEL, END_HOUR, HELP_KM, TAILPIPE_BLOCKED_CM,
  availableActivities, clockLabel, coreTemp, dehydrationPct, initialState, scoreStranded, stepHour,
  type Activity, type Choice, type Kit, type Scenario, type StrandedState,
} from './strandedModel'

// Stranded vehicle: choose what to do each hour in desert heat or a blizzard; the model runs the hour.

const KIT_LABEL: Record<Scenario, Record<keyof Kit, string>> = {
  desert: {
    tripPlan: 'Left a trip plan (route + “raise the alarm at 18:00”)',
    plb: 'Personal locator beacon / satellite messenger',
    water: 'Plenty of water (20 L) — otherwise 3 L',
    gear: 'Tarp, cord, hat, long sleeves',
    tools: 'Shovel and traction boards',
    coAlarm: 'Portable CO alarm',
    fuel: 'Tank at least half full — otherwise 5 L',
  },
  winter: {
    tripPlan: 'Left a trip plan (route + expected arrival)',
    plb: 'Personal locator beacon / satellite messenger',
    water: 'Water and snacks (4 L) — otherwise 0.5 L',
    gear: 'Sleeping bag, blankets, boots, hat, gloves',
    tools: 'Snow shovel and brush',
    coAlarm: 'Portable CO alarm',
    fuel: 'Tank at least half full — otherwise 5 L',
  },
}

function Chart({ s }: { s: StrandedState }) {
  const W = 480, H = 150, L = 34, R = 40, T = 12, B = 22
  const x = (h: number) => L + (h / END_HOUR) * (W - L - R)
  const cMin = s.scenario === 'desert' ? 36.5 : 31, cMax = s.scenario === 'desert' ? 41 : 38
  const yC = (c: number) => T + (1 - (Math.max(cMin, Math.min(cMax, c)) - cMin) / (cMax - cMin)) * (H - T - B)
  const wMax = s.history[0].water || 1
  const yW = (w: number) => T + (1 - w / wMax) * (H - T - B)
  const band = s.scenario === 'desert' ? [36.5, 38] : [36, 38]
  const pts = (f: (p: StrandedState['history'][number]) => number) => s.history.map((p) => `${x(p.hour)},${f(p)}`).join(' ')
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chart of core body temperature and water carried over the hours so far">
      <rect x={L} y={yC(band[1])} width={W - L - R} height={yC(band[0]) - yC(band[1])} fill="var(--ok)" opacity="0.15" />
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke="var(--line)" />
      {[0, 6, 12, 18, 24, 30, 36].map((h) => <text key={h} x={x(h)} y={H - 6} fontSize="9" textAnchor="middle" className="muted-fill">{h} h</text>)}
      {[cMin, cMax].map((c) => <text key={c} x={L - 4} y={yC(c) + 3} fontSize="9" textAnchor="end" className="muted-fill">{c}°</text>)}
      <text x={W - R + 4} y={yW(wMax) + 8} fontSize="9" className="muted-fill">{wMax} L</text>
      <text x={W - R + 4} y={yW(0)} fontSize="9" className="muted-fill">0 L</text>
      <polyline points={pts((p) => yC(p.core))} fill="none" stroke="var(--accent-2)" strokeWidth="2" />
      <polyline points={pts((p) => yW(p.water))} fill="none" stroke="var(--info)" strokeWidth="2" strokeDasharray="5 3" />
      <text x={L + 4} y={T + 8} fontSize="10" fill="var(--accent-2)">core temperature</text>
      <text x={L + 110} y={T + 8} fontSize="10" fill="var(--info)">water carried</text>
      <text x={L + 190} y={T + 8} fontSize="10" className="muted-fill">green band = normal core</text>
    </svg>
  )
}

function Meter({ label, value, max, unit, danger, invert, digits = 0 }: { label: string; value: number; max: number; unit?: string; danger: boolean; invert?: boolean; digits?: number }) {
  return (
    <div className={`meter ${danger ? 'danger' : ''}`}>
      <span className="meter-label">{label}</span>
      <div className={`meter-bar ${invert ? 'invert' : ''}`}><div style={{ width: `${Math.max(0, Math.min(100, (value / max) * 100))}%` }} /></div>
      <span className="meter-val">{value.toFixed(digits)}{unit ?? ''}</span>
    </div>
  )
}

const defaultKit: Kit = { tripPlan: true, plb: false, water: true, gear: true, tools: false, coAlarm: false, fuel: true }

export function StrandedVehicle({ onScore }: SimProps) {
  const [scenario, setScenario] = useState<Scenario>('desert')
  const [kit, setKit] = useState<Kit>(defaultKit)
  const [s, setS] = useState<StrandedState | null>(null)
  const [choice, setChoice] = useState<Choice>({ activity: 'rest-shade', drink: 'need', windowCracked: false })

  if (!s) {
    const keys: (keyof Kit)[] = scenario === 'desert' ? ['tripPlan', 'plb', 'water', 'gear', 'tools', 'fuel'] : ['tripPlan', 'plb', 'water', 'gear', 'tools', 'coAlarm', 'fuel']
    return (
      <div>
        <p>You are driving alone on a remote road. Choose the situation and what was in the car, then decide what to do <strong>hour by hour</strong> until help arrives, you get yourself out — or things go wrong. There is no phone signal where you are stuck.</p>
        <div className="controls">
          <div className="control">
            <label>Situation</label>
            <select value={scenario} onChange={(e) => setScenario(e.target.value as Scenario)}>
              <option value="desert">Desert: bogged in soft sand at 10:00, 38 → 43 °C, {HELP_KM.desert} km from the highway</option>
              <option value="winter">Winter: in a ditch in a blizzard at 17:00, −10 → −17 °C, {HELP_KM.winter} km from town</option>
            </select>
          </div>
          <div className="control">
            <label>What did you prepare?</label>
            {keys.map((k) => (
              <label key={k} style={{ fontWeight: 400 }}>
                <input type="checkbox" checked={kit[k]} onChange={(e) => setKit({ ...kit, [k]: e.target.checked })} /> {KIT_LABEL[scenario][k]}
              </label>
            ))}
          </div>
        </div>
        <p className="muted small">The model is deliberately simple (heat balance from the Heat Balance Lab, a leaky cabin, a CO build-up rule, deterministic search progress). It shows directions and trade-offs, not exact survival times.</p>
        <button className="btn primary" onClick={() => {
          setS(initialState(scenario, kit))
          setChoice({ activity: scenario === 'desert' ? 'rest-shade' : 'rest-huddle', drink: 'need', windowCracked: false })
        }}>Start</button>
      </div>
    )
  }

  const desert = s.scenario === 'desert'
  const avail = availableActivities(s)
  const activity: Activity = avail.includes(choice.activity) ? choice.activity : avail[0]
  const result = s.done ? scoreStranded(s) : null
  const run = (hours: number) => {
    let next = s
    for (let i = 0; i < hours && !next.done; i++) {
      const a = availableActivities(next).includes(activity) ? activity : desert ? 'rest-shade' : 'rest-huddle'
      next = stepHour(next, { ...choice, activity: a })
      // One-off jobs are done once; later hours fall back to resting.
      if (['rig-shade', 'insulate', 'plb', 'signal', 'clear-exhaust'].includes(a)) break
    }
    setS(next)
    if (next.done) onScore(scoreStranded(next).score)
  }
  const recent = [...s.log].reverse().slice(0, 10)
  const core = coreTemp(s)
  const dehy = dehydrationPct(s)

  return (
    <div>
      <h4>{clockLabel(s.scenario, s.hour)} · hour {s.hour} · outside {Math.round(s.outdoor)} °C · {s.walking ? `walking, ${s.walkedKm.toFixed(0)} of ${HELP_KM[s.scenario]} km` : `cabin ${Math.round(s.cabin)} °C`}</h4>
      <div className="meters">
        <Meter label="Core temp" value={core} max={desert ? 42 : 38} unit=" °C" digits={1} danger={core >= 38.5 || core <= 35.5} />
        <Meter label="Water carried" value={s.water} max={s.history[0].water || 1} unit=" L" digits={1} danger={s.water < 1} />
        <Meter label="Dehydration" value={dehy} max={12} unit=" %" digits={1} danger={dehy >= 4} invert />
        <Meter label="Fuel" value={s.fuel} max={25} unit=" L" digits={1} danger={s.fuel < 3} />
        <Meter label="Car battery" value={s.carBattery} max={100} unit=" %" danger={s.carBattery < 30} />
        {!desert && <Meter label="Snow at tailpipe" value={s.tailpipeSnow} max={40} unit=" cm" danger={s.tailpipeSnow >= TAILPIPE_BLOCKED_CM} invert />}
        {!desert && <Meter label="CO dose" value={s.coDose} max={12} danger={s.coDose > 2} invert digits={1} />}
        <Meter label="Search progress" value={s.search} max={100} unit=" %" danger={false} />
      </div>
      <Chart s={s} />

      {!s.done && (
        <>
          <div className="controls">
            <div className="control">
              <label>This hour</label>
              <select value={activity} onChange={(e) => setChoice({ ...choice, activity: e.target.value as Activity })}>
                {avail.map((a) => <option key={a} value={a}>{ACTIVITY_LABEL[a]}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Drinking</label>
              <select value={choice.drink} onChange={(e) => setChoice({ ...choice, drink: e.target.value as Choice['drink'] })}>
                {(Object.keys(DRINK_LABEL) as Choice['drink'][]).map((d) => <option key={d} value={d}>{DRINK_LABEL[d]}</option>)}
              </select>
            </div>
            {!desert && (
              <div className="control">
                <label style={{ fontWeight: 400 }}>
                  <input type="checkbox" checked={choice.windowCracked} onChange={(e) => setChoice({ ...choice, windowCracked: e.target.checked })} /> Keep a downwind window cracked open
                </label>
              </div>
            )}
          </div>
          <button className="btn primary" onClick={() => run(1)}>Run 1 hour</button>{' '}
          <button className="btn" onClick={() => run(3)}>Run 3 hours</button>
        </>
      )}

      <h4>Log</h4>
      <ul className="small">
        {recent.map((l, i) => <li key={`${l.hour}-${i}`} style={{ color: l.tone === 'bad' ? 'var(--bad)' : l.tone === 'good' ? 'var(--ok)' : undefined }}><strong>{clockLabel(s.scenario, l.hour)}:</strong> {l.text}</li>)}
      </ul>

      {result && (
        <div className="sim-result">
          <div className="score">{result.score}%</div>
          <div>Outcome: {{ rescued: 'found and rescued', 'self-rescued': 'got yourself out', waiting: 'still waiting after 36 hours', critical: s.cause === 'co' ? 'carbon-monoxide poisoning' : s.cause === 'cold' ? 'severe hypothermia' : s.cause === 'dehydration' ? 'severe dehydration' : 'heat stroke' }[s.outcome ?? 'waiting']} after {s.hour} h</div>
          {result.breakdown.length > 0 && <ul>{result.breakdown.map((b) => <li key={b.label}>{b.label}: {b.points}</li>)}</ul>}
          {result.lessons.length > 0 && (<><strong>What to take away</strong><ul>{result.lessons.map((t) => <li key={t}>{t}</li>)}</ul></>)}
          <button className="btn" onClick={() => setS(null)}>Try again (switch situation or kit)</button>
        </div>
      )}
    </div>
  )
}
