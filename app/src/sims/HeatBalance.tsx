import { useState } from 'react'
import type { SimProps } from './types'
import { ACT, model } from './heatModel'
import type { Fibre, HBInput, Shelter, Sky, Wet } from './heatModel'

// Model and its assumptions live in ./heatModel.ts so they can be tested.

const CLO = [
  { v: 0.4, label: 'Summer (0.4 clo)' },
  { v: 1.0, label: 'Base + light layer (1 clo)' },
  { v: 1.8, label: 'Hiking layers (1.8 clo)' },
  { v: 2.8, label: '+ insulated jacket (2.8 clo)' },
  { v: 4.0, label: 'Winter parka system (4 clo)' },
]

const CHALLENGES: { title: string; start: HBInput; goal: string; check: (r: ReturnType<typeof model>, i: HBInput) => boolean; lock: (keyof HBInput)[] }[] = [
  {
    title: 'Challenge 1 — Wet hiker at a rest stop',
    start: { ta: 5, wind: 30, rh: 85, wet: 'soaked', fibre: 'cotton', clo: 1.8, shell: false, act: 'rest', shelter: 'none', sky: 'overcast' },
    goal: 'While **resting**, get the net balance to at least −40 W (close to neutral). You may change fibre, wetness (e.g., change into dry clothes), clothing, shell and shelter — not the weather.',
    check: (r, i) => i.act === 'rest' && r.S >= -40,
    lock: ['ta', 'wind', 'rh', 'sky', 'act'],
  },
  {
    title: 'Challenge 2 — Desert noon',
    start: { ta: 42, wind: 10, rh: 15, wet: 'dry', fibre: 'cotton', clo: 0.4, shell: false, act: 'walk', shelter: 'none', sky: 'sun' },
    goal: 'Reduce water loss below **0.5 L/h** without overheating (net ≤ +20 W). Change activity, shelter and clothing — not the weather.',
    check: (r) => r.waterLph < 0.5 && r.S <= 20,
    lock: ['ta', 'wind', 'rh', 'sky'],
  },
  {
    title: 'Challenge 3 — Clear, calm night at −5 °C',
    start: { ta: -5, wind: 5, rh: 60, wet: 'damp', fibre: 'synthetic', clo: 1.8, shell: true, act: 'rest', shelter: 'none', sky: 'night-clear' },
    goal: 'While **resting**, reach a net balance of at least −30 W. Watch what the tarp and the bed do to radiation and conduction.',
    check: (r, i) => i.act === 'rest' && r.S >= -30,
    lock: ['ta', 'wind', 'rh', 'sky', 'act'],
  },
]

const COLORS = { conv: '#4a86c5', rad: '#c2682b', cond: '#8b7d5a', evap: '#2f9b8f', sweat: '#6fb3d9' }

export function HeatBalance({ onScore }: SimProps) {
  const [mode, setMode] = useState<'free' | number>('free')
  const [inp, setInp] = useState<HBInput>({ ta: 5, wind: 20, rh: 70, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: true, act: 'walk', shelter: 'none', sky: 'overcast' })
  const [solved, setSolved] = useState<boolean[]>([false, false, false])
  const r = model(inp)
  const locked = typeof mode === 'number' ? CHALLENGES[mode].lock : []
  const update = (next: HBInput, m = mode) => {
    setInp(next)
    if (typeof m === 'number' && !solved[m] && CHALLENGES[m].check(model(next), next)) {
      const done = solved.map((s, i) => (i === m ? true : s))
      setSolved(done)
      onScore((done.filter(Boolean).length / CHALLENGES.length) * 100)
    }
  }
  const set = <K extends keyof HBInput>(k: K, v: HBInput[K]) => update({ ...inp, [k]: v })



  const losses = [
    { k: 'conv', label: 'Convection', v: Math.max(0, r.conv) },
    { k: 'rad', label: 'Radiation', v: Math.max(0, r.rad) },
    { k: 'cond', label: 'Conduction', v: Math.max(0, r.cond) },
    { k: 'evap', label: 'Evaporation (breath + wet clothes)', v: r.eres + r.wetEvap },
    { k: 'sweat', label: 'Sweating', v: r.sweat },
  ]
  const totalOut = losses.reduce((a, l) => a + l.v, 0)
  const totalIn = r.M + r.solar
  const scale = Math.max(totalOut, totalIn, 200)
  const status = r.S < -150 ? 'Cooling fast — hypothermia risk' : r.S < -40 ? 'Slowly cooling' : r.S <= 40 ? 'Roughly in balance' : r.S < 150 ? 'Slowly heating' : 'Heating fast — heat-illness risk'

  return (
    <div>
      <div className="chip-group">
        <button className={`chip ${mode === 'free' ? 'on' : ''}`} onClick={() => setMode('free')}>Free play</button>
        {CHALLENGES.map((c, i) => (
          <button key={i} className={`chip ${mode === i ? 'on' : ''}`} onClick={() => { setMode(i); update(c.start, i) }}>
            {solved[i] ? '✓ ' : ''}Challenge {i + 1}
          </button>
        ))}
      </div>
      {typeof mode === 'number' && (
        <div className={`callout ${solved[mode] ? 'callout-tip' : 'callout-info'}`}>
          <div className="callout-title">{CHALLENGES[mode].title} {solved[mode] && '— solved!'}</div>
          <span dangerouslySetInnerHTML={{ __html: CHALLENGES[mode].goal.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      )}

      <div className="controls">
        <div className="control">
          <label>Air temperature <span className="val">{inp.ta} °C</span></label>
          <input type="range" min={-30} max={45} value={inp.ta} disabled={locked.includes('ta')} onChange={(e) => set('ta', +e.target.value)} />
        </div>
        <div className="control">
          <label>Wind <span className="val">{inp.wind} km/h</span></label>
          <input type="range" min={0} max={60} value={inp.wind} disabled={locked.includes('wind')} onChange={(e) => set('wind', +e.target.value)} />
        </div>
        <div className="control">
          <label>Relative humidity <span className="val">{inp.rh} %</span></label>
          <input type="range" min={10} max={95} value={inp.rh} disabled={locked.includes('rh')} onChange={(e) => set('rh', +e.target.value)} />
        </div>
        <div className="control">
          <label>Sky</label>
          <select value={inp.sky} disabled={locked.includes('sky')} onChange={(e) => set('sky', e.target.value as Sky)}>
            <option value="overcast">Overcast / day shade</option>
            <option value="night-clear">Clear night</option>
            <option value="sun">Full sun</option>
          </select>
        </div>
        <div className="control">
          <label>Clothing insulation</label>
          <select value={inp.clo} onChange={(e) => set('clo', +e.target.value)}>
            {CLO.map((c) => <option key={c.v} value={c.v}>{c.label}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Main fibre</label>
          <select value={inp.fibre} onChange={(e) => set('fibre', e.target.value as Fibre)}>
            <option value="cotton">Cotton</option>
            <option value="wool">Wool</option>
            <option value="synthetic">Synthetic</option>
            <option value="down">Down</option>
          </select>
        </div>
        <div className="control">
          <label>Clothing wetness</label>
          <select value={inp.wet} onChange={(e) => set('wet', e.target.value as Wet)}>
            <option value="dry">Dry</option>
            <option value="damp">Damp (sweat / drizzle)</option>
            <option value="soaked">Soaked</option>
          </select>
        </div>
        <div className="control">
          <label>Activity</label>
          <select value={inp.act} disabled={locked.includes('act')} onChange={(e) => set('act', e.target.value)}>
            {ACT.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Shelter</label>
          <select value={inp.shelter} onChange={(e) => set('shelter', e.target.value as Shelter)}>
            <option value="none">None</option>
            <option value="windbreak">Behind a windbreak</option>
            <option value="tarp">Under a tarp</option>
            <option value="tarp-bed">Tarp + thick ground bed</option>
          </select>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={inp.shell} onChange={(e) => set('shell', e.target.checked)} /> Windproof shell on</label>
        </div>
      </div>

      <div className="sim-result">
        <div><strong>Heat produced:</strong> {Math.round(r.M)} W metabolism{r.solar > 0 && <> + {Math.round(r.solar)} W sun</>}</div>
        <div className="stack-bar"><div style={{ width: `${(totalIn / scale) * 100}%`, background: '#2f6b4f' }}>{Math.round(totalIn)} W</div></div>
        <div><strong>Heat lost:</strong> {Math.round(totalOut)} W</div>
        <div className="stack-bar">
          {losses.map((l) => l.v > 0.5 && <div key={l.k} title={`${l.label}: ${Math.round(l.v)} W`} style={{ width: `${(l.v / scale) * 100}%`, background: COLORS[l.k as keyof typeof COLORS] }}>{l.v > 40 ? Math.round(l.v) : ''}</div>)}
        </div>
        <div className="legend">
          {losses.map((l) => <span key={l.k} style={{ ['--c' as string]: COLORS[l.k as keyof typeof COLORS] }}>{l.label}: {Math.round(l.v)} W</span>)}
        </div>
        <hr />
        <div className="grid-2">
          <div>
            <div className="score" style={{ color: Math.abs(r.S) <= 40 ? 'var(--ok)' : 'var(--bad)' }}>{r.S > 0 ? '+' : ''}{Math.round(r.S)} W</div>
            <div>{status}{r.shivering && ' · shivering likely'}</div>
            {Math.abs(r.S) > 40 && <div className="muted small">≈ {r.hoursTo2C < 0.5 ? "under 30 min" : `${r.hoursTo2C.toFixed(1)} h`} to a 2 °C core change if nothing changes (the body defends its core, so treat this as a warning, not a clock).</div>}
          </div>
          <div className="small">
            <div>Effective clothing: <strong>{r.cloEff.toFixed(2)} clo</strong> (of {inp.clo})</div>
            <div>Water loss: <strong>{r.waterLph.toFixed(2)} L/h</strong></div>
            <div>Energy use: <strong>{Math.round(r.kcalph)} kcal/h</strong></div>
            {inp.ta <= 10 && inp.wind > 5 && <div>Wind chill (NWS 2001): <strong>{Math.round(r.wct)} °C</strong></div>}
          </div>
        </div>
      </div>
      <p className="muted small">Model simplifications: fixed skin temperature, uniform clothing, no acclimatisation. Numbers are for building intuition about which controls matter most — not for medical decisions.</p>
    </div>
  )
}
