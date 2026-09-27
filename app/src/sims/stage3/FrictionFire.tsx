import { useEffect, useState } from 'react'
import type { SimProps } from '../types'
import { CP, DRYNESS, NOTCH, T_EMBER, WOOD, bowDrill } from './frictionModel'
import type { BowInput, Dryness, Notch, WoodPair } from './frictionModel'

// Bow-drill lab. The model (./frictionModel.ts) turns your technique into friction power, contact-zone
// temperature, dust production and fatigue. Replay shows the attempt at about 8× speed.

function BowScene({ stroke, rate, playing, T, ember }: { stroke: number; rate: number; playing: boolean; T: number; ember: boolean }) {
  const travel = Math.min(90, stroke * 1.1)
  const smoke = T > 200 ? Math.min(1, (T - 200) / 250) : 0
  const glow = ember ? 1 : T > 300 ? (T - 300) / 200 : 0
  return (
    <svg className="diagram" viewBox="0 0 400 240" role="img" aria-label="Bow drill in action: bow, spindle, handhold, hearth board and notch">
      <rect x="0" y="200" width="400" height="40" fill="var(--ground)" opacity="0.35" />
      {/* hearth board */}
      <rect x="120" y="186" width="200" height="14" rx="2" fill="#b98b55" stroke="var(--ground)" />
      <path d="M196,186 L204,186 L212,200 L188,200 Z" fill="var(--panel-2)" />
      {/* ember pan */}
      <rect x="170" y="200" width="60" height="4" fill="var(--muted)" />
      <circle cx="200" cy="198" r={4 + glow * 4} fill={ember ? '#ff5a1f' : '#6b4a2b'} opacity={0.4 + glow * 0.6}>
        {ember && <animate attributeName="opacity" values="0.6;1;0.6" dur="0.8s" repeatCount="indefinite" />}
      </circle>
      {/* spindle */}
      <rect x="194" y="70" width="12" height="118" rx="4" fill="#d9b27c" stroke="var(--ground)" />
      {/* handhold */}
      <rect x="175" y="58" width="50" height="14" rx="6" fill="var(--ground)" />
      <text x="235" y="68" fontSize="10" className="muted-fill">handhold (lubricated socket)</text>
      {/* bow */}
      <g>
        {playing && <animateTransform attributeName="transform" type="translate" values={`${-travel / 2} 0;${travel / 2} 0;${-travel / 2} 0`} dur={`${1 / Math.max(0.3, rate)}s`} repeatCount="indefinite" />}
        <path d="M60,125 Q200,95 340,125" fill="none" stroke="var(--ground)" strokeWidth="6" strokeLinecap="round" />
        <path d="M60,125 L194,128 M206,128 L340,125" stroke="var(--text)" strokeWidth="1.2" />
      </g>
      {/* smoke */}
      {smoke > 0 && [0, 1, 2].map((k) => (
        <circle key={k} cx={210 + k * 6} cy="180" r={5 + k * 3} fill="var(--muted)" opacity={smoke * 0.6}>
          <animate attributeName="cy" values="182;120" dur={`${1.6 + k * 0.5}s`} repeatCount="indefinite" />
        </circle>
      ))}
      <text x="120" y="224" fontSize="10" className="muted-fill">hearth board + notch</text>
      <text x="245" y="224" fontSize="10" className="muted-fill">{ember ? 'EMBER! transfer it to the tinder bundle' : T > 100 ? `${Math.round(T)} °C at the tip` : ''}</text>
    </svg>
  )
}

function TempChart({ steps, upto, maxT }: { steps: { t: number; T: number; reserve: number }[]; upto: number; maxT: number }) {
  const W = 400, H = 170, x0 = 38, y0 = 145
  const tMax = Math.max(60, steps[steps.length - 1]?.t ?? 60)
  const yMax = Math.max(500, maxT + 50)
  const X = (t: number) => x0 + (t / tMax) * (W - x0 - 10)
  const Y = (T: number) => y0 - (T / yMax) * (y0 - 10)
  const shown = steps.slice(0, upto + 1)
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Dust temperature and stamina over time">
      <line x1={x0} y1={y0} x2={W - 10} y2={y0} stroke="var(--line)" />
      <line x1={x0} y1="10" x2={x0} y2={y0} stroke="var(--line)" />
      <line x1={x0} x2={W - 10} y1={Y(T_EMBER)} y2={Y(T_EMBER)} stroke="var(--bad)" strokeDasharray="4 3" />
      <text x={W - 12} y={Y(T_EMBER) - 3} fontSize="9" textAnchor="end" style={{ fill: 'var(--bad)' }}>ember ≈ {T_EMBER} °C</text>
      <line x1={x0} x2={W - 10} y1={Y(100)} y2={Y(100)} stroke="var(--info)" strokeDasharray="2 3" />
      <text x={W - 12} y={Y(100) - 3} fontSize="9" textAnchor="end" style={{ fill: 'var(--info)' }}>100 °C: water boils off</text>
      <text x="4" y="14" fontSize="9" className="muted-fill">{Math.round(yMax)} °C</text>
      <text x={W - 10} y={y0 + 14} fontSize="9" textAnchor="end" className="muted-fill">{Math.round(tMax)} s</text>
      <polyline points={shown.map((s) => `${X(s.t)},${Y(s.T)}`).join(' ')} fill="none" stroke="var(--accent)" strokeWidth="2.5" />
      <polyline points={shown.map((s) => `${X(s.t)},${y0 - s.reserve * (y0 - 10)}`).join(' ')} fill="none" stroke="var(--ok)" strokeWidth="1.5" strokeDasharray="5 3" />
      <text x={x0 + 4} y={y0 - 4} fontSize="9" style={{ fill: 'var(--ok)' }}>- - stamina reserve</text>
    </svg>
  )
}

export function FrictionFire({ onScore }: SimProps) {
  const [inp, setInp] = useState<BowInput>({ wood: 'cedar', dryness: 'air', diameter: 22, stroke: 50, rate: 1.2, force: 60, notch: 'good' })
  const [playing, setPlaying] = useState(false)
  const [upto, setUpto] = useState(0)
  const r = bowDrill(inp)
  const last = r.steps.length - 1

  useEffect(() => {
    if (!playing || upto >= last) return
    const id = setTimeout(() => setUpto((k) => k + 1), 120)
    return () => clearTimeout(id)
  }, [playing, upto, last])
  const running = playing && upto < last

  const set = (patch: Partial<BowInput>) => {
    setInp({ ...inp, ...patch })
    setPlaying(false)
    setUpto(0)
  }
  const start = () => {
    setUpto(0)
    setPlaying(true)
    onScore(r.score)
  }
  const done = playing && upto >= last
  const cur = r.steps[Math.min(upto, last)]
  const ember = done && r.emberTime !== null

  const range = (label: string, key: 'diameter' | 'stroke' | 'rate' | 'force', min: number, max: number, step: number, unit: string, extra = '') => (
    <div className="control">
      <label>{label} <span className="val">{inp[key]} {unit}{extra}</span></label>
      <input type="range" min={min} max={max} step={step} value={inp[key]} onChange={(e) => set({ [key]: +e.target.value })} />
    </div>
  )

  return (
    <div>
      <div className="callout callout-law">Practise real friction fire only in a legal fire setting, with water ready — ideally with an instructor. The hot dust is an ember: treat it as fire.</div>
      <div className="controls">
        <div className="control">
          <label>Wood pair (spindle / hearth)</label>
          <select value={inp.wood} onChange={(e) => set({ wood: e.target.value as WoodPair })}>
            {(Object.keys(WOOD) as WoodPair[]).map((k) => <option key={k} value={k}>{WOOD[k].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Dryness</label>
          <select value={inp.dryness} onChange={(e) => set({ dryness: e.target.value as Dryness })}>
            {(Object.keys(DRYNESS) as Dryness[]).map((k) => <option key={k} value={k}>{DRYNESS[k].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Notch</label>
          <select value={inp.notch} onChange={(e) => set({ notch: e.target.value as Notch })}>
            {(Object.keys(NOTCH) as Notch[]).map((k) => <option key={k} value={k}>{NOTCH[k].name}</option>)}
          </select>
        </div>
        {range('Spindle diameter', 'diameter', 10, 32, 1, 'mm')}
        {range('Stroke length', 'stroke', 20, 80, 5, 'cm')}
        {range('Stroke rate', 'rate', 0.5, 3, 0.1, 'full strokes/s')}
        {range('Downward force', 'force', 20, 180, 5, 'N', ` (≈ ${(inp.force / 9.81).toFixed(1)} kg)`)}
      </div>
      <button className="btn primary" onClick={start} disabled={running}>🏹 Start bowing</button>
      <div className="grid-2">
        <div>
          <BowScene stroke={inp.stroke} rate={inp.rate} playing={running} T={upto > 0 ? cur.T : 15} ember={ember} />
          {upto > 0 && <TempChart steps={r.steps} upto={upto} maxT={r.maxT} />}
        </div>
        <div className="sim-result">
          <div><strong>Mechanics of your technique</strong></div>
          <div className="small">String speed: <strong>{r.vBow.toFixed(2)} m/s</strong> · spindle ≈ <strong>{Math.round(r.rpm)} rpm</strong></div>
          <div className="small">Mean rubbing speed at the tip: <strong>{r.vRub.toFixed(2)} m/s</strong> · friction μ ≈ <strong>{r.mu0.toFixed(2)}</strong></div>
          <div className="small">Friction power P = μ·N·v = <strong>{r.frictionW.toFixed(0)} W</strong> · contact pressure <strong>{Math.round(r.pressureKPa)} kPa</strong></div>
          <div className="small">Arm power needed: <strong style={{ color: r.humanW > CP ? 'var(--bad)' : undefined }}>{r.humanW.toFixed(0)} W</strong> (sustainable ≈ {CP} W) · time to exhaustion: <strong>{Number.isFinite(r.timeToExhaustion) ? `${Math.round(r.timeToExhaustion)} s` : 'sustainable'}</strong></div>
          <hr />
          {done ? (
            <>
              <div className="score">{r.score}</div>
              <div>{r.emberTime !== null ? <>Ember after <strong>{Math.round(r.emberTime)} s</strong>.</> : <>No ember. Peak tip temperature {Math.round(r.maxT)} °C.</>} Ember probability for this technique: <strong>{Math.round(r.probability * 100)}%</strong></div>
              {r.notes.length > 0 && <ul className="small">{r.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
            </>
          ) : (
            <div className="muted small">{running ? `Bowing… ${cur.t} s · ${Math.round(cur.T)} °C · dust ${cur.dust.toFixed(2)} g` : 'Set your technique and start bowing. Aim for a steady rhythm you can hold for a minute.'}</div>
          )}
        </div>
      </div>
      <p className="muted small">Model simplifications: one lumped hot zone, constant technique, average adult arm. Real bow drill also depends on the tinder bundle, string tension and form — practise with an instructor.</p>
    </div>
  )
}
