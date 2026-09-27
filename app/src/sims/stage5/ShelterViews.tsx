import type { Choice, Dir, Env, SimResult } from './shelterModel'
import { DESIGNS } from './shelterModel'
import { MECH, PRODUCED } from './chartColors'

// Presentational pieces of the Shelter Builder: terrain maps, glyphs and the night chart.

const DEG: Record<Dir, number> = { N: 0, E: 90, S: 180, W: 270 }
const WIND_VEC: Record<Dir, [number, number]> = { N: [0, 1], S: [0, -1], E: [-1, 0], W: [1, 0] } // direction the wind blows toward

export function Terrain({ env }: { env: Env }) {
  switch (env.id) {
    case 'forest':
      return (
        <g>
          <rect width="640" height="360" fill="var(--ground)" opacity="0.28" />
          {[0, 1, 2, 3].map((k) => <path key={k} d={`M${70 + k * 70},0 C${60 + k * 80},120 ${90 + k * 85},240 ${60 + k * 90},360`} fill="none" stroke="var(--line)" strokeWidth="1.5" />)}
          <path d="M60,0 C50,120 80,240 50,360" fill="none" stroke="var(--muted)" strokeWidth="3" strokeDasharray="10 6" />
          <text x="20" y="352" fontSize="11" className="muted-fill">ridge crest</text>
          <path d="M360,360 C420,300 470,300 520,290 S620,250 640,240" fill="none" stroke="var(--info)" strokeWidth="6" />
          <text x="560" y="276" fontSize="11" className="muted-fill">stream</text>
          {[[220, 130], [240, 170], [275, 140], [200, 190], [150, 230], [400, 180], [430, 220], [350, 60]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="11" fill="var(--ok)" opacity="0.55" />)}
          {[[285, 240], [300, 262], [318, 238], [330, 262], [292, 280]].map(([x, y], i) => <path key={i} d={`M${x},${y - 12} l9,20 h-18 z`} fill="var(--ok)" opacity="0.85" />)}
          <path d="M372,110 l16,-16 M372,94 l16,16" stroke="var(--text)" strokeWidth="3" />
          <path d="M520,90 L570,80 L585,120 L550,140 L515,125 Z" fill="var(--muted)" opacity="0.6" />
        </g>
      )
    case 'snow':
      return (
        <g>
          <rect width="640" height="360" fill="var(--panel)" />
          <rect width="640" height="360" fill="var(--sky)" opacity="0.25" />
          <ellipse cx="110" cy="250" rx="100" ry="70" fill="var(--sky)" opacity="0.9" stroke="var(--info)" />
          <text x="70" y="330" fontSize="11" className="muted-fill">frozen lake</text>
          {Array.from({ length: 14 }, (_, i) => [200 + i * 16, 120 + ((i * 37) % 30)]).map(([x, y], i) => <path key={i} d={`M${x},${y - 14} l8,22 h-16 z`} fill="var(--ok)" opacity="0.8" />)}
          <path d="M400,40 Q470,20 560,50" fill="none" stroke="var(--text)" strokeWidth="4" />
          {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={410 + k * 30} y1={50} x2={420 + k * 30} y2={110} stroke="var(--muted)" strokeWidth="1" />)}
          <text x="470" y="28" fontSize="11" className="muted-fill">cornice / steep lee slope</text>
          <path d="M180,320 C260,300 360,310 420,330 S560,350 640,340" fill="none" stroke="var(--info)" strokeWidth="3" strokeDasharray="6 5" />
          <text x="380" y="352" fontSize="11" className="muted-fill">snow-covered creek</text>
          {[40, 28, 16].map((r, i) => <circle key={i} cx="540" cy="250" r={r + 12} fill="none" stroke="var(--line)" />)}
        </g>
      )
    case 'desert':
      return (
        <g>
          <rect width="640" height="360" fill="var(--accent-2)" opacity="0.14" />
          <path d="M0,300 C120,260 220,300 300,285 S460,330 640,320" fill="none" stroke="var(--ground)" strokeWidth="26" opacity="0.45" />
          <text x="20" y="335" fontSize="11" className="muted-fill">dry wash (wadi)</text>
          <path d="M0,160 L640,120" stroke="var(--muted)" strokeWidth="2" strokeDasharray="12 6" />
          <rect x="100" y="140" width="28" height="14" rx="3" fill="var(--text)" opacity="0.7" transform="rotate(-4 114 147)" />
          <text x="60" y="130" fontSize="11" className="muted-fill">track + your vehicle</text>
          <path d="M470,80 L540,70 L560,110 L520,130 L470,120 Z" fill="var(--ground)" opacity="0.8" />
          <circle cx="430" cy="212" r="18" fill="var(--ok)" opacity="0.5" />
          {[44, 30, 16].map((r, i) => <circle key={i} cx="560" cy="290" r={r + 10} fill="none" stroke="var(--line)" />)}
          <path d="M560,20 q20,-15 40,0 q15,-5 25,8 h-70 z" fill="var(--muted)" opacity="0.7" />
          <text x="505" y="45" fontSize="11" className="muted-fill">storms over the mountains</text>
        </g>
      )
    case 'tropical':
      return (
        <g>
          <rect width="640" height="360" fill="var(--ok)" opacity="0.18" />
          {Array.from({ length: 40 }, (_, i) => [(i * 97) % 640, 30 + ((i * 53) % 230)]).map(([x, y], i) => <circle key={i} cx={x} cy={y} r="14" fill="var(--ok)" opacity="0.18" />)}
          <path d="M0,300 C80,290 160,320 260,315 S460,345 640,350" fill="none" stroke="var(--info)" strokeWidth="18" opacity="0.7" />
          <path d="M290,300 C300,260 280,230 300,200" fill="none" stroke="var(--info)" strokeWidth="4" />
          <text x="20" y="340" fontSize="11" className="muted-fill">brown, rising river</text>
          {[34, 22].map((r, i) => <ellipse key={i} cx="330" cy="140" rx={r + 30} ry={r + 10} fill="none" stroke="var(--line)" />)}
          <circle cx="480" cy="110" r="34" fill="var(--ok)" opacity="0.45" />
          {[0, 1, 2].map((k) => <path key={k} d={`M${470 + k * 12},230 q20,20 10,40 t15,40`} fill="none" stroke="var(--text)" strokeDasharray="1 5" strokeWidth="2" />)}
        </g>
      )
  }
}

export function WindArrow({ from }: { from: Dir }) {
  const [dx, dy] = WIND_VEC[from]
  const cx = 600, cy = 60
  return (
    <g>
      <circle cx={cx} cy={cy} r="30" fill="var(--panel)" opacity="0.85" stroke="var(--line)" />
      <text x={cx} y={cy - 18} textAnchor="middle" fontSize="10" fontWeight="700">N</text>
      <line x1={cx - dx * 22} y1={cy - dy * 22} x2={cx + dx * 18} y2={cy + dy * 18} stroke="var(--info)" strokeWidth="3" markerEnd="url(#sb-arrow)" />
      <text x={cx} y={cy + 44} textAnchor="middle" fontSize="10">wind from {from}</text>
    </g>
  )
}

export function ShelterGlyph({ x, y, c }: { x: number; y: number; c: Choice }) {
  const d = DESIGNS[c.design]
  const rot = DEG[c.opening] - 90
  if (c.design === 'none') return <rect x={x - 10} y={y - 4} width="20" height="8" rx="3" fill="var(--accent-2)" />
  if (d.walls === 'snow' && c.design === 'quinzhee') return <g><circle cx={x} cy={y} r="13" fill="var(--panel)" stroke="var(--accent-2)" strokeWidth="3" /><g transform={`rotate(${rot} ${x} ${y})`}><rect x={x + 10} y={y - 4} width="10" height="8" fill="var(--accent-2)" /></g></g>
  return (
    <g transform={`rotate(${rot} ${x} ${y})`}>
      <path d={`M${x + 12},${y - 11} L${x - 12},${y - 11} L${x - 12},${y + 11} L${x + 12},${y + 11}`} fill="var(--accent-2)" fillOpacity="0.25" stroke="var(--accent-2)" strokeWidth="3.5" />
      <path d={`M${x + 16},${y} l8,0`} stroke="var(--accent-2)" strokeWidth="2" markerEnd="url(#sb-open)" />
    </g>
  )
}

export function NightChart({ r, env }: { r: SimResult; env: Env }) {
  const n = r.hours.length
  const W = 640, top = 20, h1 = 170, gap = 58, h2 = 110
  const bw = (W - 60) / n
  const maxW = Math.max(160, ...r.hours.map((h) => MECH.reduce((a, m) => a + Math.max(0, h[m.k]), 0)), ...r.hours.map((h) => 85 + h.gain + h.shiver))
  const minW = Math.min(0, ...r.hours.map((h) => MECH.reduce((a, m) => a + Math.min(0, h[m.k]), 0)))
  const span = maxW - minW
  const yW = (v: number) => top + ((maxW - v) / span) * h1
  const bankMin = Math.min(-1000, ...r.hours.map((h) => h.bank))
  const bankMax = Math.max(700, ...r.hours.map((h) => h.bank))
  const y2 = (v: number) => top + h1 + gap + ((bankMax - v) / (bankMax - bankMin)) * h2
  const xAt = (i: number) => 50 + i * bw
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${top + h1 + gap + h2 + 34}`} role="img" aria-label="Hour-by-hour heat loss by mechanism and cumulative heat balance through the night">
      <text x="50" y="12" fontSize="11" fontWeight="700">Heat lost per hour by mechanism (W) — line: heat you produced (metabolism + sun/fire + shivering)</text>
      <line x1="48" x2={W - 8} y1={yW(0)} y2={yW(0)} stroke="var(--line)" />
      {[0, 50, 100, 150, 200, 250, 300, 350].filter((v) => v <= maxW).map((v) => <text key={v} x="44" y={yW(v) + 4} fontSize="9" textAnchor="end" className="muted-fill">{v}</text>)}
      {minW < 0 && <text x="44" y={yW(minW) + 4} fontSize="9" textAnchor="end" className="muted-fill">{Math.round(minW)}</text>}
      {minW < 0 && <text x={W - 10} y={yW(minW) - 4} fontSize="9" textAnchor="end" className="muted-fill">faded bars below 0 = heat gained from hot air, ground and roof</text>}
      {r.hours.map((h, i) => {
        let acc = 0
        let neg = 0
        return (
          <g key={h.clock}>
            {MECH.map((m) => {
              const v = h[m.k]
              if (v >= 0) {
                const y = yW(acc + v)
                const hh = yW(acc) - y
                acc += v
                return <rect key={m.k} x={xAt(i) + 2} y={y} width={bw - 4} height={Math.max(0, hh)} fill={m.color}><title>{`${h.clock} ${m.label}: ${v} W`}</title></rect>
              }
              const y = yW(neg)
              const hh = yW(neg + v) - y
              neg += v
              return <rect key={m.k} x={xAt(i) + 2} y={y} width={bw - 4} height={Math.max(0, hh)} fill={m.color} opacity="0.45"><title>{`${h.clock} ${m.label}: gained ${-v} W from hot surroundings`}</title></rect>
            })}
            <rect x={xAt(i) + 2} y={top + h1 + 4} width={bw - 4} height="8" fill="var(--info)" opacity={0.1 + h.wet * 0.9}><title>{`Clothing wetness ${Math.round(h.wet * 100)} %`}</title></rect>
            {i % 2 === 0 && <text x={xAt(i) + bw / 2} y={top + h1 + 26} fontSize="9" textAnchor="middle" className="muted-fill">{h.clock}</text>}
          </g>
        )
      })}
      <polyline fill="none" stroke={PRODUCED} strokeWidth="2.5" points={r.hours.map((h, i) => `${xAt(i) + bw / 2},${yW(85 + h.gain + h.shiver)}`).join(' ')} />
      <text x={W - 10} y={top + h1 + 12} fontSize="9" textAnchor="end" className="muted-fill">blue strip = clothing wetness</text>
      <text x="50" y={top + h1 + gap - 4} fontSize="11" fontWeight="700">Stored heat (kJ): below 0 = heat debt, above 0 = heat build-up</text>
      {[{ v: -350, t: 'cold, poor sleep' }, { v: -900, t: 'hypothermia risk' }, ...(env.hot ? [{ v: 600, t: 'heat-illness risk' }] : [])].map((g) => (
        <g key={g.v}>
          <line x1="48" x2={W - 8} y1={y2(g.v)} y2={y2(g.v)} stroke="var(--bad)" strokeDasharray="4 4" opacity="0.7" />
          <text x={W - 10} y={y2(g.v) - 3} fontSize="9" textAnchor="end" style={{ fill: 'var(--bad)' }}>{g.t}</text>
        </g>
      ))}
      <line x1="48" x2={W - 8} y1={y2(0)} y2={y2(0)} stroke="var(--line)" />
      <text x="44" y={y2(0) + 4} fontSize="9" textAnchor="end" className="muted-fill">0</text>
      <polyline fill="none" stroke="var(--accent)" strokeWidth="3" points={r.hours.map((h, i) => `${xAt(i) + bw / 2},${y2(h.bank)}`).join(' ')} />
      {r.hours.map((h, i) => <circle key={h.clock} cx={xAt(i) + bw / 2} cy={y2(h.bank)} r="3" fill="var(--accent)"><title>{`${h.clock}: ${h.bank} kJ · inside ${h.tIn} °C, outside ${h.tOut} °C`}</title></circle>)}
    </svg>
  )
}

export function Meter({ label, v, max }: { label: string; v: number; max: number }) {
  return (
    <div className={`meter ${v / max < 0.35 ? 'danger' : ''}`}>
      <span>{label}</span>
      <div className="meter-bar"><div style={{ width: `${(v / max) * 100}%` }} /></div>
      <span className="meter-val">{v}/{max}</span>
    </div>
  )
}
