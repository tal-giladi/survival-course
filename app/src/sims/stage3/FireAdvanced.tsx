import { useEffect, useState } from 'react'
import type { SimProps } from '../types'
import { FUEL, KINDLING, LAY, PLACEMENT, PURPOSE, TINDER, WEATHER, fireAdvanced } from './fireAdvancedModel'
import type { FireInput, Fuel, Kindling, Lay, Placement, Purpose, Tinder, Weather } from './fireAdvancedModel'

// Advanced Fire Builder. The model (./fireAdvancedModel.ts) predicts ignition, heat output over time,
// fuel use, smoke, safety and suitability for a purpose. The score reflects the decisions, not the dice.

const FLAME1 = '#f39c33'
const FLAME2 = '#ffd966'

function LaySticks({ lay }: { lay: Lay }) {
  const s = { stroke: 'var(--ground)', strokeLinecap: 'round' as const }
  switch (lay) {
    case 'teepee':
      return (
        <g {...s} strokeWidth="5">
          <line x1="150" y1="190" x2="200" y2="110" /><line x1="250" y1="190" x2="200" y2="110" />
          <line x1="175" y1="192" x2="200" y2="112" /><line x1="225" y1="192" x2="200" y2="112" />
        </g>
      )
    case 'logCabin':
      return (
        <g {...s} strokeWidth="8">
          <line x1="150" y1="188" x2="250" y2="188" />
          <line x1="155" y1="172" x2="245" y2="172" /><line x1="150" y1="156" x2="250" y2="156" /><line x1="158" y1="140" x2="242" y2="140" />
        </g>
      )
    case 'leanTo':
      return (
        <g {...s}>
          <line x1="140" y1="182" x2="260" y2="182" strokeWidth="16" />
          <line x1="170" y1="192" x2="215" y2="150" strokeWidth="5" /><line x1="195" y1="192" x2="235" y2="155" strokeWidth="5" /><line x1="220" y1="192" x2="250" y2="165" strokeWidth="5" />
        </g>
      )
    case 'star':
      return (
        <g {...s} strokeWidth="10">
          <line x1="90" y1="196" x2="185" y2="186" /><line x1="310" y1="196" x2="215" y2="186" /><line x1="130" y1="206" x2="190" y2="190" /><line x1="270" y1="206" x2="210" y2="190" />
        </g>
      )
    case 'longLog':
      return (
        <g {...s}>
          <line x1="70" y1="190" x2="330" y2="190" strokeWidth="16" /><line x1="70" y1="172" x2="330" y2="172" strokeWidth="16" />
          <line x1="70" y1="156" x2="330" y2="156" strokeWidth="6" opacity="0.7" />
        </g>
      )
    case 'dakota':
      return (
        <g>
          <path d="M165,195 L170,240 L230,240 L235,195 Z" fill="var(--panel-2)" stroke="var(--ground)" strokeWidth="2" />
          <path d="M290,195 L270,240" stroke="var(--ground)" strokeWidth="10" opacity="0.5" />
          <line x1="232" y1="236" x2="272" y2="236" stroke="var(--ground)" strokeWidth="6" opacity="0.5" />
          <text x="300" y="232" fontSize="10" className="muted-fill">air tunnel</text>
        </g>
      )
  }
}

function Scene({ inp, level, smoke, lit }: { inp: FireInput; level: number; smoke: number; lit: boolean }) {
  const h = lit ? 20 + level * 100 : 0
  const base = inp.lay === 'dakota' ? 196 : 190
  const wide = inp.lay === 'longLog' ? 110 : inp.lay === 'star' ? 30 : 45
  const rain = inp.weather === 'rain'
  const snow = inp.weather === 'snow'
  const wind = inp.weather === 'windy' ? 30 : 0
  return (
    <svg className="diagram" viewBox="0 0 400 260" role="img" aria-label={`Animated fire: ${LAY[inp.lay].name}, ${lit ? 'burning' : 'not burning'}`}>
      <rect x="0" y="0" width="400" height="195" fill="var(--sky)" opacity="0.35" />
      <rect x="0" y="195" width="400" height="65" fill="var(--ground)" opacity={snow ? 0.15 : 0.45} />
      {snow && <rect x="0" y="193" width="400" height="8" fill="#fff" opacity="0.8" />}
      {inp.placement === 'overhang' && <path d="M0,20 Q120,40 260,70 L260,78 Q120,52 0,32 Z" fill="var(--ok)" opacity="0.7" />}
      {inp.placement === 'litter' && <rect x="0" y="195" width="400" height="12" fill="#8b6b3a" opacity="0.7" />}
      {inp.placement === 'platform' && <g stroke="var(--ground)" strokeWidth="5">{[150, 165, 180, 195, 210, 225, 240].map((x) => <line key={x} x1={x} y1="196" x2={x + 8} y2="196" />)}</g>}
      {inp.placement === 'ring' && <g fill="var(--muted)">{[130, 150, 250, 270].map((x) => <ellipse key={x} cx={x} cy="198" rx="12" ry="7" />)}</g>}
      {inp.reflector && <g><rect x="30" y="110" width="14" height="88" fill="var(--ground)" /><rect x="44" y="110" width="14" height="88" fill="var(--ground)" opacity="0.8" /><text x="44" y="104" fontSize="10" textAnchor="middle" className="muted-fill">reflector</text></g>}
      <LaySticks lay={inp.lay} />
      {lit && h > 0 && (
        <g>
          <path d={`M${200 - wide},${base} Q${200 - wide * 0.6 + wind / 2},${base - h * 0.6} ${200 + wind},${base - h} Q${200 + wide * 0.6 + wind / 2},${base - h * 0.6} ${200 + wide},${base} Z`} fill={FLAME1} opacity="0.9">
            <animate attributeName="opacity" values="0.7;1;0.8" dur="0.5s" repeatCount="indefinite" />
          </path>
          <path d={`M${200 - wide / 2},${base} Q${200 - wide / 3},${base - h * 0.35} ${200 + wind / 2},${base - h * 0.6} Q${200 + wide / 3},${base - h * 0.35} ${200 + wide / 2},${base} Z`} fill={FLAME2} />
          {[0, 1, 2].map((k) => (
            <circle key={k} cx={200 + wind} cy={base - h - 10} r={10 + k * 6} fill="var(--muted)" opacity={0.15 + smoke * 0.5}>
              <animate attributeName="cy" values={`${base - h};${10}`} dur={`${2.5 + k}s`} begin={`${k * 0.8}s`} repeatCount="indefinite" />
              <animate attributeName="cx" values={`${200};${200 + wind * 4 + 20}`} dur={`${2.5 + k}s`} begin={`${k * 0.8}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>
      )}
      {!lit && <text x="200" y="150" textAnchor="middle" fontSize="13" className="muted-fill">not lit</text>}
      {(rain || snow) && (
        <g stroke={snow ? '#fff' : 'var(--info)'} strokeWidth="1.5" opacity="0.7">
          {Array.from({ length: 24 }, (_, k) => (
            <line key={k} x1={(k * 37) % 400} y1={(k * 23) % 150} x2={(k * 37) % 400 - 4} y2={((k * 23) % 150) + (snow ? 3 : 12)}>
              <animateTransform attributeName="transform" type="translate" values="0 0;0 60" dur={snow ? '3s' : '0.7s'} repeatCount="indefinite" />
            </line>
          ))}
        </g>
      )}
      <circle cx="350" cy="175" r="9" fill="var(--text)" opacity="0.6" />
      <rect x="343" y="184" width="14" height="14" rx="4" fill="var(--text)" opacity="0.6" />
      <text x="350" y="214" textAnchor="middle" fontSize="10" className="muted-fill">you, ~1.5 m</text>
    </svg>
  )
}

function HeatChart({ curve, cursor, peak }: { curve: number[]; cursor: number; peak: number }) {
  const W = 400, H = 150, x0 = 36, y0 = 125
  const max = Math.max(peak, 5) * 1.1
  const pts = curve.map((kw, k) => `${x0 + (k / (curve.length - 1)) * (W - x0 - 10)},${y0 - (kw / max) * (y0 - 12)}`).join(' ')
  const cx = x0 + (cursor / (curve.length - 1)) * (W - x0 - 10)
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Heat output in kilowatts over four hours">
      <line x1={x0} y1={y0} x2={W - 10} y2={y0} stroke="var(--line)" />
      <line x1={x0} y1="10" x2={x0} y2={y0} stroke="var(--line)" />
      {[0, 60, 120, 180, 240].map((m) => (
        <text key={m} x={x0 + (m / 240) * (W - x0 - 10)} y={y0 + 14} fontSize="9" textAnchor="middle" className="muted-fill">{m / 60} h</text>
      ))}
      <text x="4" y="14" fontSize="9" className="muted-fill">{Math.round(max)} kW</text>
      <text x="4" y={y0} fontSize="9" className="muted-fill">0</text>
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <line x1={cx} x2={cx} y1="10" y2={y0} stroke="var(--bad)" strokeDasharray="3 3" />
    </svg>
  )
}

const pct = (x: number) => `${Math.round(x * 100)}%`

export function FireAdvanced({ onScore }: SimProps) {
  const [inp, setInp] = useState<FireInput>({ weather: 'damp', tinder: 'birch', kindling: 'standingTwigs', fuel: 'hardSplit', lay: 'teepee', placement: 'ring', purpose: 'heat', reflector: false, stockKg: 15 })
  const [run, setRun] = useState<null | { lit: boolean; msg: string[] }>(null)
  const [tIdx, setTIdx] = useState(0)
  const r = fireAdvanced(inp)
  const peak = Math.max(...r.curve)

  useEffect(() => {
    if (!run?.lit) return
    const id = setInterval(() => setTIdx((k) => (k >= r.curve.length - 1 ? k : k + 1)), 160)
    return () => clearInterval(id)
  }, [run, r.curve.length])

  const set = (patch: Partial<FireInput>) => {
    setInp({ ...inp, ...patch })
    setRun(null)
    setTIdx(0)
  }

  const light = () => {
    const msg: string[] = []
    let lit = false
    if (Math.random() < r.ignition) {
      if (Math.random() < r.takeover) {
        if (Math.random() < r.sustain) {
          lit = true
          msg.push('The fuel caught — the fire is self-sustaining. Watch the heat curve play out over four hours.')
        } else msg.push('Kindling burned out before the fuel caught — fuel too wet or too big a jump in size.')
      } else msg.push('The tinder flared and died: kindling too wet or thick, or the wind stole the heat.')
    } else msg.push('No ignition: tinder quality, wetness or wind.')
    onScore(r.score)
    setTIdx(0)
    setRun({ lit, msg })
  }

  const sel = <X extends string>(label: string, value: X, opts: Record<X, { name: string }>, key: keyof FireInput) => (
    <div className="control">
      <label>{label}</label>
      <select value={value} onChange={(e) => set({ [key]: e.target.value } as Partial<FireInput>)}>
        {(Object.keys(opts) as X[]).map((k) => <option key={k} value={k}>{opts[k].name}</option>)}
      </select>
    </div>
  )

  const level = run?.lit ? r.curve[tIdx] / Math.max(peak, 1) : 0
  const minutes = tIdx * 5

  return (
    <div>
      <div className="callout callout-law">Virtual practice only. Real fires only where they are legal and safe — see lesson 8 of this stage.</div>
      <div className="controls">
        <div className="control">
          <label>Purpose</label>
          <select value={inp.purpose} onChange={(e) => set({ purpose: e.target.value as Purpose })}>
            {(Object.keys(PURPOSE) as Purpose[]).map((k) => <option key={k} value={k}>{PURPOSE[k]}</option>)}
          </select>
        </div>
        {sel<Weather>('Weather', inp.weather, WEATHER, 'weather')}
        {sel<Tinder>('Tinder', inp.tinder, TINDER, 'tinder')}
        {sel<Kindling>('Kindling', inp.kindling, KINDLING, 'kindling')}
        {sel<Fuel>('Fuel', inp.fuel, FUEL, 'fuel')}
        {sel<Lay>('Fire lay', inp.lay, LAY, 'lay')}
        {sel<Placement>('Placement', inp.placement, PLACEMENT, 'placement')}
        <div className="control">
          <label>Prepared fuel stock <span className="val">{inp.stockKg} kg (~{Math.round(inp.stockKg / 5)} armfuls)</span></label>
          <input type="range" min={5} max={40} step={5} value={inp.stockKg} onChange={(e) => set({ stockKg: +e.target.value })} />
        </div>
        <div className="control">
          <label><input type="checkbox" checked={inp.reflector} onChange={(e) => set({ reflector: e.target.checked })} /> Reflector wall behind the fire</label>
        </div>
      </div>
      <button className="btn primary" onClick={light}>🔥 Light it</button>
      <div className="grid-2">
        <div>
          <Scene inp={inp} level={level} smoke={r.smoke} lit={!!run?.lit} />
          {run?.lit && <HeatChart curve={r.curve} cursor={tIdx} peak={peak} />}
          {run?.lit && <div className="small muted">t = {Math.floor(minutes / 60)} h {minutes % 60} min · output {r.curve[tIdx].toFixed(1)} kW</div>}
        </div>
        <div className="sim-result">
          <div><strong>Prediction from your choices</strong></div>
          {([['Tinder catches', r.ignition], ['Kindling takes over', r.takeover], ['Fuel sustains', r.sustain]] as const).map(([l, v]) => (
            <div key={l} className="small">
              {l}: {pct(v)}
              <div className="bar"><div style={{ width: pct(v) }} /></div>
            </div>
          ))}
          <div>Chance of a going fire: <strong>{pct(r.success)}</strong></div>
          <hr />
          <div className="small">Fuel moisture (wet basis): <strong>{pct(r.moisture)}</strong> → net heat <strong>{r.hNet.toFixed(1)} MJ/kg</strong> (dry wood ≈ 18.5)</div>
          <div className="small">Burn rate: <strong>{r.burnRate.toFixed(1)} kg/h</strong> · peak output <strong>{r.peakKW.toFixed(1)} kW</strong></div>
          <div className="small">Stock lasts: <strong>{r.durationH.toFixed(1)} h</strong> · radiant heat absorbed by you at 1.5 m: <strong>≈ {Math.round(r.usefulW)} W</strong> (you lose ~100 W on a cold night)</div>
          <div className="small">Smoke: <strong>{r.smoke > 0.55 ? 'heavy' : r.smoke > 0.25 ? 'moderate' : 'light'}</strong> · Safety risk: <strong style={{ color: r.risk > 0.4 ? 'var(--bad)' : undefined }}>{r.risk > 0.4 ? 'high' : r.risk > 0.1 ? 'moderate' : 'low'}</strong></div>
          <div className="small">Suitability for {PURPOSE[inp.purpose].toLowerCase()}: <strong>{pct(r.suitability)}</strong></div>
          <div className="bar"><div style={{ width: pct(r.suitability), background: 'var(--ok)' }} /></div>
          <div className="score">{r.score}</div>
          <div className="small muted">Score = √(chance of lighting) × suitability × safety.</div>
          {[...r.suitNotes, ...r.riskNotes].length > 0 && <ul className="small">{[...r.suitNotes, ...r.riskNotes].map((n) => <li key={n}>{n}</li>)}</ul>}
          {run && <ul>{run.msg.map((m) => <li key={m}>{m}</li>)}</ul>}
        </div>
      </div>
      <p className="muted small">Model simplifications: one fuel type at a time, fixed 1.5 m seating distance, steady weather. Use it to compare choices, not to predict a real fire.</p>
    </div>
  )
}
