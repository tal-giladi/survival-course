// Stage 2 SVG diagrams (navigation and terrain). Colors only via CSS variables so they work in light and dark mode.
import type { ComponentType, ReactNode } from 'react'
import { STARS } from '../sims/stage2/astro'

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const PANEL = 'var(--panel)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'
const WARN = 'var(--warn)'

const D2R = Math.PI / 180

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Svg({ w, h, label, children }: { w: number; h: number; label: string; children: ReactNode }) {
  return (
    <svg className="diagram" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label}>
      {children}
    </svg>
  )
}

const T = ({ x, y, children, size = 12, anchor = 'start', weight, muted, fill }: { x: number; y: number; children: ReactNode; size?: number; anchor?: 'start' | 'middle' | 'end'; weight?: number; muted?: boolean; fill?: string }) => (
  <text x={x} y={y} fontSize={size} textAnchor={anchor} fontWeight={weight} className={muted ? 'muted-fill' : undefined} style={fill ? { fill } : undefined}>{children}</text>
)

// ---------------------------------------------------------------- L1 maps

export function MapScale() {
  const bar = (y: number, pxPerKm: number, kms: number, label: string, note: string) => (
    <g>
      <T x={20} y={y - 14} weight={700}>{label}</T>
      {[...Array(10)].map((_, i) => (
        <rect key={i} x={20 + (i * pxPerKm) / 10} y={y} width={pxPerKm / 10} height={10} fill={i % 2 ? PANEL : TXT} stroke={TXT} strokeWidth="0.8" />
      ))}
      {kms > 1 && <rect x={20 + pxPerKm} y={y} width={pxPerKm} height={10} fill={PANEL} stroke={TXT} strokeWidth="0.8" />}
      {[0, 0.5, 1, 2].filter((k) => k <= kms).map((k) => <T key={k} x={20 + k * pxPerKm} y={y + 26} size={11} anchor="middle">{k} km</T>)}
      <T x={440} y={y + 10} size={11} muted>{note}</T>
    </g>
  )
  return (
    <Svg w={700} h={250} label="Scale bars for 1:25,000 and 1:50,000 compared with a centimetre ruler">
      {bar(40, 400, 1, '1:25,000 — 1 km = 4 cm', '1 mm = 25 m · 1 cm = 250 m')}
      {bar(120, 200, 2, '1:50,000 — 1 km = 2 cm', '1 mm = 50 m · 1 cm = 500 m')}
      <g transform="translate(20,180)">
        <rect width="400" height="34" fill={P2} stroke={LINE} rx="4" />
        {[...Array(41)].map((_, i) => <line key={i} x1={i * 10} x2={i * 10} y1={0} y2={i % 10 === 0 ? 16 : i % 5 === 0 ? 11 : 7} stroke={TXT} strokeWidth="0.8" />)}
        {[0, 1, 2, 3, 4].map((c) => <T key={c} x={c * 100 + 3} y={28} size={10}>{c} cm</T>)}
      </g>
      <T x={460} y={200} size={11} muted>Ruler shown at 1 cm = 100 px:</T>
      <T x={460} y={216} size={11} muted>at 1:25,000, 4 cm = 1 km.</T>
    </Svg>
  )
}

export function GridRef() {
  const x0 = 70, y0 = 330, s = 130 // one grid square = 130 px
  const px = x0 + s * 1.4, py = y0 - s * 1.7
  return (
    <Svg w={720} h={380} label="Working out a six-figure grid reference 344 577 inside a one-kilometre grid square">
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <line x1={x0 + i * s} x2={x0 + i * s} y1={y0 - 3 * s} y2={y0} stroke={INFO} strokeWidth="1.5" />
          <line y1={y0 - i * s} y2={y0 - i * s} x1={x0} x2={x0 + 3 * s} stroke={INFO} strokeWidth="1.5" />
          <T x={x0 + i * s} y={y0 + 18} anchor="middle" weight={700} fill={INFO}>{33 + i}</T>
          <T x={x0 - 10} y={y0 - i * s + 4} anchor="end" weight={700} fill={INFO}>{56 + i}</T>
        </g>
      ))}
      {[...Array(10)].map((_, k) => (
        <g key={k}>
          <line x1={x0 + s + (k * s) / 10} x2={x0 + s + (k * s) / 10} y1={y0 - s} y2={y0 - s + 6} stroke={MUT} />
          <line x1={x0 + s} x2={x0 + s + 6} y1={y0 - s - (k * s) / 10} y2={y0 - s - (k * s) / 10} stroke={MUT} />
        </g>
      ))}
      <rect x={x0 + s} y={y0 - 2 * s} width={s} height={s} fill={A} opacity="0.08" />
      <line x1={x0 + s} y1={y0 - s} x2={px} y2={y0 - s} stroke={A2} strokeWidth="3" />
      <line x1={px} y1={y0 - s} x2={px} y2={py} stroke={A2} strokeWidth="3" strokeDasharray="6 4" />
      <circle cx={px} cy={py} r="6" fill={BAD} />
      <T x={px + 10} y={py - 6} weight={700}>Spring</T>
      <T x={x0 + 3 * s + 16} y={70} weight={700}>1. Along the corridor (eastings)</T>
      <T x={x0 + 3 * s + 16} y={88} size={11}>line 34, then 4 tenths east → 344</T>
      <T x={x0 + 3 * s + 16} y={122} weight={700}>2. Up the stairs (northings)</T>
      <T x={x0 + 3 * s + 16} y={140} size={11}>line 57, then 7 tenths north → 577</T>
      <T x={x0 + 3 * s + 16} y={180} size={15} weight={800} fill={A}>GR 344 577</T>
      <T x={x0 + 3 * s + 16} y={200} size={11} muted>= a 100 m square</T>
      <T x={x0 + 3 * s + 16} y={228} size={11} muted>4 figures (34 57): 1 km square</T>
      <T x={x0 + 3 * s + 16} y={246} size={11} muted>8 figures: 10 m square</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L2 topography

const hillH = (x: number, y: number) => {
  const cx = 300, cy = 115, sxW = 110, sxE = 55, sy = 42
  const sx = x < cx ? sxW : sxE
  return 520 * Math.exp(-(((x - cx) / sx) ** 2 + ((y - cy) / sy) ** 2) / 2)
}

export function ContoursProfile() {
  const cx = 300, cy = 115
  const levels = [100, 200, 300, 400, 500]
  const ring = (L: number) => {
    const k = Math.sqrt(2 * Math.log(520 / L))
    const rw = 110 * k, re = 55 * k, ry = 42 * k
    return `M${cx},${cy - ry} A${re},${ry} 0 0 1 ${cx},${cy + ry} A${rw},${ry} 0 0 1 ${cx},${cy - ry} Z`
  }
  const px = (x: number) => x
  const pyProf = (h: number) => 390 - h * 0.28
  const prof = Array.from({ length: 121 }, (_, i) => {
    const x = 20 + i * 4.5
    return `${i ? 'L' : 'M'}${px(x).toFixed(1)},${pyProf(hillH(x, cy)).toFixed(1)}`
  }).join('')
  const crossings = levels.flatMap((L) => {
    const k = Math.sqrt(2 * Math.log(520 / L))
    return [cx - 110 * k, cx + 55 * k].map((x) => ({ x, L }))
  })
  return (
    <Svg w={600} h={420} label="A hill shown as contour lines above and as a cross-section profile below">
      <rect x="10" y="10" width="580" height="210" fill={P2} rx="6" />
      {levels.map((L) => <path key={L} d={ring(L)} fill="none" stroke={GROUND} strokeWidth={L % 500 === 0 ? 2.4 : 1.3} />)}
      {levels.map((L) => <T key={L} x={cx - 110 * Math.sqrt(2 * Math.log(520 / L)) + 3} y={cy - 3} size={9} fill={GROUND}>{L}</T>)}
      <T x={cx + 4} y={cy + 4} size={10} weight={700}>▲ 520</T>
      <line x1="20" y1={cy} x2="560" y2={cy} stroke={A2} strokeWidth="1.5" strokeDasharray="6 4" />
      <T x={22} y={cy - 6} weight={700} fill={A2}>A</T>
      <T x={552} y={cy - 6} weight={700} fill={A2}>B</T>
      <T x={370} y={40} size={11} muted>East side: contours crowd = steep</T>
      <T x={30} y={40} size={11} muted>West side: wider spacing = gentler</T>
      {crossings.map((c, i) => <line key={i} x1={c.x} x2={c.x} y1={cy} y2={pyProf(c.L)} stroke={LINE} strokeDasharray="2 3" />)}
      {levels.map((L) => (
        <g key={L}>
          <line x1="20" x2="560" y1={pyProf(L)} y2={pyProf(L)} stroke={LINE} />
          <T x={565} y={pyProf(L) + 4} size={9} muted>{L}</T>
        </g>
      ))}
      <path d={`${prof}L560,390L20,390Z`} fill={GROUND} opacity="0.35" />
      <path d={prof} fill="none" stroke={GROUND} strokeWidth="2.5" />
      <T x={20} y={410} size={11} muted>Profile A–B (vertical scale exaggerated)</T>
    </Svg>
  )
}

export function Landforms() {
  const panel = (x: number, title: string, body: ReactNode, note: string) => (
    <g transform={`translate(${x},0)`}>
      <rect x="4" y="4" width="132" height="200" rx="6" fill={P2} />
      <T x={70} y={24} anchor="middle" weight={700}>{title}</T>
      {body}
      <T x={70} y={196} anchor="middle" size={10} muted>{note}</T>
    </g>
  )
  const C = { fill: 'none', stroke: GROUND, strokeWidth: 1.6 }
  return (
    <Svg w={710} h={210} label="Contour patterns of a summit, spur, re-entrant, saddle and cliff">
      {panel(0, 'Summit', <g>{[50, 36, 22, 9].map((r) => <ellipse key={r} cx="70" cy="105" rx={r} ry={r * 0.8} {...C} />)}<text x="70" y="109" fontSize="10" textAnchor="middle">▲</text></g>, 'closed rings, highest inside')}
      {panel(140, 'Spur', <g>{[0, 1, 2, 3].map((i) => <path key={i} d={`M20,${50 + i * 28} Q70,${95 + i * 28} 120,${50 + i * 28}`} {...C} />)}<path d="M70,70 L70,170" stroke={A2} strokeWidth="1.5" markerEnd="url(#lf)" /><T x={76} y={165} size={9} fill={A2}>downhill</T></g>, 'V/U points DOWNHILL')}
      {panel(280, 'Re-entrant', <g>{[0, 1, 2, 3].map((i) => <path key={i} d={`M20,${95 + i * 28} L70,${50 + i * 28} L120,${95 + i * 28}`} {...C} />)}<path d="M70,40 L70,175" stroke={INFO} strokeWidth="2" /><T x={76} y={170} size={9} fill={INFO}>stream</T></g>, 'V points UPHILL (upstream)')}
      {panel(420, 'Saddle', <g><ellipse cx="38" cy="105" rx="22" ry="30" {...C} /><ellipse cx="102" cy="105" rx="22" ry="30" {...C} /><path d="M70,58 C20,40 5,80 10,105 C5,130 20,170 70,152 C120,170 135,130 130,105 C135,80 120,40 70,58 Z" {...C} /><T x={70} y={109} anchor="middle" size={9}>✕</T></g>, 'low point between two tops')}
      {panel(560, 'Cliff', <g>{[0, 1, 2, 3].map((i) => <path key={i} d={`M15,${60 + i * 10} C50,${60 + i * 10} 60,100 70,100 C80,100 90,${140 - i * 10} 125,${140 - i * 10}`} {...C} />)}<line x1="58" y1="92" x2="82" y2="108" stroke={TXT} strokeWidth="4" />{[0, 1, 2, 3].map((i) => <line key={i} x1={60 + i * 7} y1={94 + i * 4.5} x2={66 + i * 7} y2={86 + i * 4.5} stroke={TXT} strokeWidth="1.5" />)}</g>, 'contours merge: vertical')}
      <defs><Arrow id="lf" color={A2} /></defs>
    </Svg>
  )
}

export function SlopeSpacing() {
  const cols = [
    { mm: 8, m: 200 },
    { mm: 4, m: 100 },
    { mm: 2, m: 50 },
    { mm: 1, m: 25 },
  ]
  return (
    <Svg w={660} h={280} label="Contour spacing on a 1:25,000 map with 10 m interval and the resulting slope angles">
      <T x={10} y={20} weight={700}>10 m contour interval, 1:25,000 map (1 mm = 25 m)</T>
      {cols.map((c, i) => {
        const x = 20 + i * 160
        const gap = c.mm * 4
        const angle = Math.atan(10 / c.m) / D2R
        const run = 110, rise = run * Math.tan(angle * D2R)
        return (
          <g key={c.mm}>
            {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={x} x2={x + 120} y1={45 + k * gap} y2={45 + k * gap} stroke={GROUND} strokeWidth="1.5" />)}
            <T x={x} y={45 + 4 * gap + 20} size={11}>{c.mm} mm apart = {c.m} m</T>
            <path d={`M${x},250 L${x + run},250 L${x + run},${250 - rise} Z`} fill={GROUND} opacity="0.35" stroke={GROUND} />
            <T x={x} y={272} size={12} weight={700}>{angle.toFixed(1)}° ({Math.round((10 / c.m) * 100)}%)</T>
          </g>
        )
      })}
    </Svg>
  )
}

// ---------------------------------------------------------------- L3 compass

export function CompassAnatomy() {
  const cx = 330, cy = 250, R = 95
  const label = (x1: number, y1: number, x2: number, y2: number, text: string) => (
    <g>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUT} strokeWidth="1" />
      <circle cx={x1} cy={y1} r="2.5" fill={MUT} />
      <T x={x2 + (x2 > cx ? 4 : -4)} y={y2 + 4} anchor={x2 > cx ? 'start' : 'end'} size={12}>{text}</T>
    </g>
  )
  return (
    <Svg w={720} h={440} label="Labelled baseplate compass">
      <rect x={cx - 110} y={30} width="220" height="390" rx="16" fill={P2} stroke={LINE} strokeWidth="2" />
      <path d={`M${cx},40 L${cx - 16},80 L${cx + 16},80 Z`} fill={A2} />
      <line x1={cx} y1={80} x2={cx} y2={cy - R - 6} stroke={A2} strokeWidth="3" />
      {[...Array(21)].map((_, i) => <line key={i} x1={cx - 110} x2={cx - 110 + (i % 5 === 0 ? 14 : 8)} y1={60 + i * 9} y2={60 + i * 9} stroke={TXT} strokeWidth="0.8" />)}
      <circle cx={cx} cy={cy} r={R + 12} fill={PANEL} stroke={TXT} strokeWidth="2" />
      {[...Array(36)].map((_, i) => {
        const a = i * 10 * D2R
        return <line key={i} x1={cx + (R + 12) * Math.sin(a)} y1={cy - (R + 12) * Math.cos(a)} x2={cx + (R + (i % 9 === 0 ? 0 : 5)) * Math.sin(a)} y2={cy - (R + (i % 9 === 0 ? 0 : 5)) * Math.cos(a)} stroke={TXT} />
      })}
      {['N', 'E', 'S', 'W'].map((d, i) => <T key={d} x={cx + (R - 12) * Math.sin(i * 90 * D2R)} y={cy - (R - 12) * Math.cos(i * 90 * D2R) + 5} anchor="middle" weight={800}>{d}</T>)}
      <circle cx={cx} cy={cy} r={R - 24} fill={SKY} opacity="0.4" />
      {[-40, -20, 20, 40].map((o) => <line key={o} x1={cx + o} x2={cx + o} y1={cy - Math.sqrt((R - 24) ** 2 - o * o)} y2={cy + Math.sqrt((R - 24) ** 2 - o * o)} stroke={BAD} strokeWidth="1" opacity="0.6" />)}
      <path d={`M${cx - 14},${cy - 20} L${cx},${cy - 62} L${cx + 14},${cy - 20}`} fill="none" stroke={BAD} strokeWidth="2.5" />
      <g transform={`rotate(-14 ${cx} ${cy})`}>
        <path d={`M${cx},${cy - 60} L${cx + 7},${cy} L${cx - 7},${cy} Z`} fill={BAD} />
        <path d={`M${cx},${cy + 60} L${cx + 7},${cy} L${cx - 7},${cy} Z`} fill={MUT} />
      </g>
      <line x1={cx} y1={cy - R - 12} x2={cx} y2={cy - R - 26} stroke={TXT} strokeWidth="3" />
      <circle cx={cx + 40} cy={375} r="22" fill={SKY} opacity="0.5" stroke={LINE} />
      {label(cx, 60, 520, 50, 'Direction-of-travel arrow')}
      {label(cx, cy - R - 20, 520, 110, 'Index line (read the bearing here)')}
      {label(cx + (R + 8) * Math.sin(60 * D2R), cy - (R + 8) * Math.cos(60 * D2R), 520, 160, 'Rotating bezel, degrees 0–360')}
      {label(cx, cy - 55, 520, 215, 'Orienting arrow (“the shed”)')}
      {label(cx + 40, cy + 30, 520, 270, 'Orienting lines')}
      {label(cx - 10, cy - 40, 205, 200, 'Magnetic needle — red end north')}
      {label(cx - 106, 100, 150, 100, 'Ruler / romer scales')}
      {label(cx + 40, 375, 520, 380, 'Magnifier')}
      {label(cx - 100, 410, 150, 410, 'Baseplate edge')}
    </Svg>
  )
}

export function ThreeNorths() {
  const ox = 220, oy = 300, L = 230
  const ray = (deg: number) => ({ x: ox + L * Math.sin(deg * D2R), y: oy - L * Math.cos(deg * D2R) })
  const tn = ray(0), gn = ray(6), mn = ray(-14)
  const arc = (a: number, b: number, r: number) => `M${ox + r * Math.sin(a * D2R)},${oy - r * Math.cos(a * D2R)} A${r},${r} 0 0 1 ${ox + r * Math.sin(b * D2R)},${oy - r * Math.cos(b * D2R)}`
  return (
    <Svg w={480} h={330} label="True north, grid north and magnetic north with declination and convergence angles">
      <line x1={ox} y1={oy} x2={tn.x} y2={tn.y} stroke={TXT} strokeWidth="2.5" />
      <T x={tn.x} y={tn.y - 8} anchor="middle" weight={700}>★ True N</T>
      <line x1={ox} y1={oy} x2={gn.x} y2={gn.y} stroke={INFO} strokeWidth="2.5" />
      <T x={gn.x + 6} y={gn.y + 16} weight={700} fill={INFO}>GN (grid lines)</T>
      <line x1={ox} y1={oy} x2={mn.x} y2={mn.y} stroke={BAD} strokeWidth="2.5" />
      <path d={`M${mn.x},${mn.y} l-6,14 l12,0 z`} fill={BAD} />
      <T x={mn.x - 8} y={mn.y + 4} anchor="end" weight={700} fill={BAD}>MN</T>
      <path d={arc(-14, 0, 150)} fill="none" stroke={BAD} />
      <T x={ox - 110} y={oy - 150} size={11} fill={BAD}>declination (true → magnetic)</T>
      <path d={arc(0, 6, 120)} fill="none" stroke={INFO} />
      <T x={ox + 30} y={oy - 110} size={11} fill={INFO}>convergence (true → grid)</T>
      <path d={arc(-14, 6, 80)} fill="none" stroke={A2} strokeWidth="2" />
      <T x={ox + 18} y={oy - 58} size={11} fill={A2}>grid–magnetic angle</T>
      <T x={10} y={322} size={10} muted>Angles exaggerated. Declination varies with place and year (WMM).</T>
    </Svg>
  )
}

export function Declination() {
  const panel = (x: number, title: string, decl: number, grid: number, rule: string) => {
    const ox = x + 170, oy = 250, L = 170
    const ray = (d: number, l = L) => ({ x: ox + l * Math.sin(d * D2R), y: oy - l * Math.cos(d * D2R) })
    const g = ray(0), m = ray(decl), t = ray(grid, 150)
    const mag = (((grid - decl) % 360) + 360) % 360
    return (
      <g>
        <rect x={x + 6} y={6} width={340} height={300} rx="8" fill={P2} />
        <T x={x + 20} y={28} weight={700}>{title}</T>
        <line x1={ox} y1={oy} x2={g.x} y2={g.y} stroke={INFO} strokeWidth="2.5" />
        <T x={g.x} y={g.y - 6} anchor="middle" fill={INFO} weight={700}>GN</T>
        <line x1={ox} y1={oy} x2={m.x} y2={m.y} stroke={BAD} strokeWidth="2.5" />
        <T x={m.x + (decl < 0 ? -8 : 8)} y={m.y + 4} anchor={decl < 0 ? 'end' : 'start'} fill={BAD} weight={700}>MN</T>
        <line x1={ox} y1={oy} x2={t.x} y2={t.y} stroke={A2} strokeWidth="2.5" markerEnd="url(#dcl)" />
        <T x={t.x + 6} y={t.y + 14} fill={A2} weight={700}>target</T>
        <T x={x + 20} y={276} size={12}>Grid {String(grid).padStart(3, '0')}° → magnetic <tspan fontWeight={800}>{String(Math.round(mag)).padStart(3, '0')}°</tspan></T>
        <T x={x + 20} y={296} size={11} muted>{rule}</T>
      </g>
    )
  }
  return (
    <Svg w={700} h={312} label="Converting grid bearings to magnetic for west and east declination">
      <defs><Arrow id="dcl" color={A2} /></defs>
      {panel(0, '8° WEST declination', -8, 60, 'MN is west of GN: magnetic = grid + 8°')}
      {panel(350, '12° EAST declination', 12, 60, 'MN is east of GN: magnetic = grid − 12°')}
    </Svg>
  )
}

// ---------------------------------------------------------------- L4 bearings

export function BearingSteps() {
  const map = (x: number, content: ReactNode, title: string, note: string) => (
    <g transform={`translate(${x},0)`}>
      <rect x="6" y="30" width="220" height="200" rx="6" fill={P2} stroke={LINE} />
      {[0, 1, 2, 3].map((i) => <line key={i} x1={6 + 20 + i * 60} x2={6 + 20 + i * 60} y1="30" y2="230" stroke={INFO} strokeWidth="1" opacity="0.6" />)}
      <T x={116} y={20} anchor="middle" weight={700}>{title}</T>
      {content}
      <T x={116} y={250} anchor="middle" size={11} muted>{note}</T>
    </g>
  )
  const A0 = { x: 60, y: 190 }, B0 = { x: 170, y: 70 }
  const ang = Math.atan2(B0.x - A0.x, A0.y - B0.y) / D2R
  const compass = (withLines: boolean, needle: boolean) => (
    <g transform={`translate(${A0.x},${A0.y}) rotate(${ang})`}>
      <rect x="-18" y="-120" width="36" height="140" rx="5" fill={PANEL} stroke={TXT} opacity="0.9" />
      <path d="M0,-118 l-6,12 l12,0 z" fill={A2} />
      <g transform={`rotate(${-ang})`}>
        <circle r="16" fill={SKY} stroke={TXT} />
        {withLines && [-8, 0, 8].map((o) => <line key={o} x1={o} x2={o} y1={-14} y2={14} stroke={BAD} strokeWidth="1" />)}
        {needle && <path d="M0,-14 L4,0 L-4,0 Z" fill={BAD} />}
      </g>
    </g>
  )
  return (
    <Svg w={720} h={260} label="Three steps to take a bearing from the map and follow it">
      {map(0, <g><line x1={A0.x} y1={A0.y} x2={B0.x} y2={B0.y} stroke={A2} strokeWidth="2" strokeDasharray="5 4" /><circle cx={A0.x} cy={A0.y} r="5" fill={A} /><circle cx={B0.x} cy={B0.y} r="8" fill="none" stroke={A2} strokeWidth="2" />{compass(false, false)}</g>, '1. Edge on the route', 'arrow points from you to the target')}
      {map(240, <g><line x1={A0.x} y1={A0.y} x2={B0.x} y2={B0.y} stroke={A2} strokeWidth="2" strokeDasharray="5 4" />{compass(true, false)}</g>, '2. Turn the housing', 'orienting lines ∥ grid lines, N to map top')}
      <g transform="translate(480,0)">
        <rect x="6" y="30" width="220" height="200" rx="6" fill={P2} stroke={LINE} />
        <T x={116} y={20} anchor="middle" weight={700}>3. Declination, then turn</T>
        <circle cx="116" cy="190" r="14" fill={MUT} />
        <path d="M116,176 L116,60" stroke={A2} strokeWidth="2.5" markerEnd="url(#bs)" />
        <circle cx="116" cy="150" r="22" fill={SKY} stroke={TXT} />
        <path d="M108,142 L116,128 L124,142" fill="none" stroke={BAD} strokeWidth="2" />
        <path d="M116,130 L120,150 L112,150 Z" fill={BAD} />
        <T x={116} y={50} anchor="middle" size={11}>walk toward a landmark on this line</T>
        <T x={140} y={146} size={11} fill={BAD}>“red in the shed”</T>
        <T x={116} y={250} anchor="middle" size={11} muted>adjust for declination; turn your body</T>
        <defs><Arrow id="bs" color={A2} /></defs>
      </g>
    </Svg>
  )
}

export function BackBearing() {
  const a = { x: 110, y: 220 }, fwd = 65, d = 300
  const b = { x: a.x + d * Math.sin(fwd * D2R), y: a.y - d * Math.cos(fwd * D2R) }
  const north = (p: { x: number; y: number }) => (
    <g><line x1={p.x} y1={p.y} x2={p.x} y2={p.y - 70} stroke={INFO} strokeWidth="1.5" markerEnd="url(#bbn)" /><T x={p.x} y={p.y - 76} anchor="middle" size={11} fill={INFO}>N</T></g>
  )
  return (
    <Svg w={560} h={280} label="Forward bearing 065 degrees and back bearing 245 degrees">
      <defs><Arrow id="bbf" color={A2} /><Arrow id="bbb" color={A} /><Arrow id="bbn" color={INFO} /></defs>
      {north(a)}{north(b)}
      <line x1={a.x} y1={a.y} x2={b.x - 8} y2={b.y + 4} stroke={A2} strokeWidth="3" markerEnd="url(#bbf)" />
      <line x1={b.x} y1={b.y + 14} x2={a.x + 12} y2={a.y + 10} stroke={A} strokeWidth="2.5" strokeDasharray="7 5" markerEnd="url(#bbb)" />
      <circle cx={a.x} cy={a.y} r="6" fill={TXT} /><T x={a.x - 10} y={a.y + 20} anchor="end" weight={700}>Start</T>
      <circle cx={b.x} cy={b.y} r="6" fill={TXT} /><T x={b.x + 10} y={b.y - 6} weight={700}>Target</T>
      <T x={250} y={120} weight={700} fill={A2}>forward 065°</T>
      <T x={260} y={200} weight={700} fill={A}>back 245°</T>
      <T x={20} y={266} size={12}>Back bearing = forward ± 180°. Sighting back at the start shows whether you have drifted sideways.</T>
    </Svg>
  )
}

export function OneInSixty() {
  const ox = 60, oy = 250, kx = 170, ky = 0.4 // 1 km = 170 px; 1 m lateral = 0.4 px
  const errs = [
    { d: 1, c: OK },
    { d: 5, c: WARN },
    { d: 10, c: BAD },
  ]
  return (
    <Svg w={640} h={300} label="Lateral error from a heading error of 1, 5 and 10 degrees over 1 to 3 kilometres">
      <line x1={ox} y1={oy} x2={ox + 3 * kx + 20} y2={oy} stroke={TXT} strokeWidth="2" />
      <T x={ox + 3 * kx + 24} y={oy + 4} size={11}>intended</T>
      {[1, 2, 3].map((k) => (
        <g key={k}>
          <line x1={ox + k * kx} x2={ox + k * kx} y1={oy + 5} y2={30} stroke={LINE} strokeDasharray="3 4" />
          <T x={ox + k * kx} y={oy + 20} anchor="middle" size={11}>{k} km</T>
        </g>
      ))}
      {errs.map((e) => {
        const end = 3 * 1000 * Math.tan(e.d * D2R)
        return (
          <g key={e.d}>
            <line x1={ox} y1={oy} x2={ox + 3 * kx} y2={oy - end * ky} stroke={e.c} strokeWidth="2.5" />
            {[1, 2, 3].map((k) => {
              const lat = Math.round(k * 1000 * Math.tan(e.d * D2R))
              return <T key={k} x={ox + k * kx - 4} y={oy - lat * ky - 5} anchor="end" size={10} fill={e.c}>{lat} m</T>
            })}
            <T x={ox + 3 * kx + 8} y={oy - end * ky + 4} weight={700} fill={e.c}>{e.d}°</T>
          </g>
        )
      })}
      <T x={20} y={290} size={11} muted>Lateral error ≈ distance × degrees ÷ 60 (exact: distance × tan θ). Sideways scale exaggerated.</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L5 pacing

export function PaceError() {
  const x0 = 60, legPx = 120
  const pts = [0, 1, 2, 3, 4].map((i) => x0 + i * legPx)
  return (
    <Svg w={640} h={300} label="Random errors grow with the square root of the number of legs; systematic bias grows linearly">
      <T x={20} y={22} weight={700}>Four 500 m legs, pace error ±5 % (±25 m) each</T>
      <line x1={x0} x2={pts[4]} y1={110} y2={110} stroke={TXT} strokeWidth="2" />
      {pts.map((x, i) => <g key={i}><circle cx={x} cy={110} r="4" fill={TXT} /><T x={x} y={96} anchor="middle" size={10}>{i === 0 ? 'start' : `leg ${i}`}</T></g>)}
      {pts.slice(1).map((x, i) => {
        const r = 25 * Math.sqrt(i + 1) * 0.9
        return <g key={i}><circle cx={x} cy={110} r={r} fill={INFO} opacity="0.12" stroke={INFO} /><T x={x} y={110 + r + 14} anchor="middle" size={10} fill={INFO}>±{Math.round(25 * Math.sqrt(i + 1))} m</T></g>
      })}
      <T x={20} y={60} size={11} fill={INFO}>Random errors partly cancel: σ_total = σ_leg × √n</T>
      <line x1={x0} x2={pts[4]} y1={230} y2={230} stroke={TXT} strokeWidth="2" />
      {pts.map((x, i) => <circle key={i} cx={x} cy={230} r="4" fill={TXT} />)}
      {pts.slice(1).map((x, i) => (
        <g key={i}>
          <line x1={x} x2={x - (i + 1) * 25 * 0.9} y1={230} y2={230} stroke={BAD} strokeWidth="5" opacity="0.7" />
          <T x={x} y={252} anchor="middle" size={10} fill={BAD}>{(i + 1) * 25} m short</T>
        </g>
      ))}
      <T x={20} y={200} size={11} fill={BAD}>A systematic bias (e.g. shorter paces uphill, uncorrected) adds every leg: n × b</T>
      <T x={20} y={286} size={11} muted>After 4 legs: random ≈ ±50 m, systematic = 100 m. Calibrate out the bias; re-fix position often.</T>
    </Svg>
  )
}

export function NaismithSlope() {
  const x0 = 70, y0 = 270, kx = 6.5, ky = 3.8 // x: gradient % (−40..40); y: minutes per horizontal km
  const X = (g: number) => x0 + (g + 40) * kx
  const Y = (m: number) => y0 - m * ky
  const naismith = (g: number) => 12 + Math.max(0, g) // g% over 1 km = 10·g m of climb → 1 min per 10 m
  const lang = (g: number) => {
    if (g >= 0) return naismith(g)
    const deg = Math.atan(-g / 100) / D2R
    const drop = -g * 10 // metres per km
    if (deg < 5) return 12
    if (deg <= 12) return 12 - (drop / 300) * 10
    return 12 + (drop / 300) * 10
  }
  const path = (f: (g: number) => number) => Array.from({ length: 81 }, (_, i) => `${i ? 'L' : 'M'}${X(i - 40)},${Y(f(i - 40))}`).join('')
  return (
    <Svg w={640} h={340} label="Minutes per horizontal kilometre against gradient under Naismith's rule with Langmuir's descent corrections">
      {[0, 10, 20, 30, 40, 50, 60].map((m) => <g key={m}><line x1={x0} x2={X(40)} y1={Y(m)} y2={Y(m)} stroke={LINE} /><T x={x0 - 6} y={Y(m) + 4} anchor="end" size={10}>{m}</T></g>)}
      {[-40, -20, 0, 20, 40].map((g) => <T key={g} x={X(g)} y={y0 + 46} anchor="middle" size={10}>{g}%</T>)}
      <path d={path(naismith)} fill="none" stroke={MUT} strokeWidth="2" strokeDasharray="6 4" />
      <path d={path(lang)} fill="none" stroke={A} strokeWidth="3" />
      <T x={X(-2)} y={Y(50)} size={11} weight={700} fill={A}>climb: +1 min per 10 m of ascent</T>
      <T x={X(-39)} y={Y(33)} size={11} fill={A}>steep descent (&gt;12°): +10 min / 300 m</T>
      <T x={X(-34)} y={Y(0) + 30} size={11} fill={A}>gentle (5–12°): −10 min / 300 m</T>
      <T x={X(1)} y={Y(12) + 16} size={10} muted>flat: 12 min/km (5 km/h)</T>
      <T x={x0} y={20} weight={700}>Minutes per horizontal km</T>
      <T x={X(40)} y={y0 + 62} anchor="end" size={11} muted>gradient (rise ÷ run)</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L6 terrain association

export function Handrails() {
  return (
    <Svg w={640} h={360} label="Handrail stream leading to an attack point, a short compass leg to the target, and a road beyond as a catching feature">
      <defs><Arrow id="hr" color={A2} /></defs>
      <rect x="10" y="10" width="620" height="340" rx="8" fill={P2} />
      <path d="M200,60 C250,110 300,120 340,160 C380,200 400,240 470,262 C520,275 560,300 620,330" fill="none" stroke={OK} strokeWidth="60" opacity="0.18" />
      <line x1="10" y1="70" x2="630" y2="50" stroke={TXT} strokeWidth="6" opacity="0.6" />
      <T x={20} y={46} weight={700}>Road = catching feature (backstop)</T>
      <path d="M40,340 C80,300 120,260 170,230 C220,200 260,190 300,170" fill="none" stroke={INFO} strokeWidth="4" />
      <path d="M300,170 C330,150 360,120 380,70" fill="none" stroke={INFO} strokeWidth="3" />
      <path d="M300,170 C340,180 380,170 440,190" fill="none" stroke={INFO} strokeWidth="3" />
      <T x={120} y={300} weight={700} fill={INFO}>Stream = handrail</T>
      <circle cx="300" cy="170" r="9" fill="none" stroke={A} strokeWidth="3" />
      <T x={240} y={215} weight={700} fill={A}>Attack point (junction)</T>
      <line x1="308" y1="163" x2="420" y2="110" stroke={A2} strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#hr)" />
      <T x={345} y={128} size={11} fill={A2}>short compass leg</T>
      <circle cx="430" cy="104" r="14" fill="none" stroke={A2} strokeWidth="3" />
      <T x={450} y={108} weight={700} fill={A2}>Target (small pond)</T>
      <T x={30} y={336} size={11} muted>Start</T>
      <T x={330} y={335} size={11} muted>Collecting features on the way: forest edge, path crossing</T>
    </Svg>
  )
}

export function AimingOff() {
  const panel = (x: number, off: boolean) => {
    const jx = x + 160, ry = 70, sx = x + 160, sy = 280
    const aimX = off ? jx - 70 : jx
    return (
      <g>
        <rect x={x + 6} y="6" width="308" height="300" rx="8" fill={P2} />
        <T x={x + 20} y={28} weight={700}>{off ? 'Aim off to the left' : 'Aim straight at the junction'}</T>
        <line x1={x + 10} x2={x + 310} y1={ry} y2={ry} stroke={INFO} strokeWidth="5" />
        <line x1={jx} x2={jx + 20} y1={ry} y2={40} stroke={INFO} strokeWidth="3" />
        <circle cx={jx} cy={ry} r="8" fill="none" stroke={A2} strokeWidth="3" />
        <T x={jx + 26} y={ry - 10} size={11} fill={A2}>junction</T>
        <path d={`M${sx},${sy} L${aimX - 35},${ry + 2} L${aimX + 35},${ry + 2} Z`} fill={off ? OK : BAD} opacity="0.15" />
        <line x1={sx} y1={sy} x2={aimX} y2={ry + 4} stroke={TXT} strokeWidth="2" strokeDasharray="6 4" />
        <circle cx={sx} cy={sy} r="6" fill={TXT} />
        {off ? (
          <g>
            <path d={`M${aimX + 4},${ry + 12} L${jx - 14},${ry + 12}`} stroke={OK} strokeWidth="3" markerEnd="url(#ao)" />
            <T x={x + 20} y={ry + 50} size={12} fill={OK} weight={700}>Hit the river → turn RIGHT</T>
            <T x={x + 20} y={ry + 66} size={11} muted>error cone lies wholly left of the junction</T>
          </g>
        ) : (
          <g>
            <T x={jx - 60} y={ry + 34} size={22} weight={800} fill={BAD}>? ←  → ?</T>
            <T x={x + 20} y={ry + 66} size={11} muted>error cone straddles the junction</T>
          </g>
        )}
      </g>
    )
  }
  return (
    <Svg w={640} h={312} label="Aiming directly at a river junction versus aiming off to one side">
      <defs><Arrow id="ao" color={OK} /></defs>
      {panel(0, false)}
      {panel(320, true)}
    </Svg>
  )
}

// ---------------------------------------------------------------- L7 relocation

export function Resection() {
  const me = { x: 270, y: 230 }
  const feats = [
    { x: 80, y: 60, name: 'Summit ▲', brg: 0 },
    { x: 470, y: 80, name: 'Mast', brg: 0 },
    { x: 330, y: 330, name: 'Lake outflow', brg: 0 },
  ]
  // Lines drawn from each feature through a slightly offset point, so they form a small triangle.
  const offs = [{ x: -8, y: 6 }, { x: 10, y: 4 }, { x: 2, y: -10 }]
  const tp = offs.map((o) => ({ x: me.x + o.x, y: me.y + o.y }))
  const cross = (i: number, j: number) => {
    const p = feats[i], r = { x: tp[i].x - p.x, y: tp[i].y - p.y }, q = feats[j], sv = { x: tp[j].x - q.x, y: tp[j].y - q.y }
    const t = ((q.x - p.x) * sv.y - (q.y - p.y) * sv.x) / (r.x * sv.y - r.y * sv.x)
    return { x: p.x + t * r.x, y: p.y + t * r.y }
  }
  const hat = [cross(0, 1), cross(1, 2), cross(2, 0)]
  return (
    <Svg w={600} h={390} label="Resection: back-bearing lines from three features forming a cocked hat">
      <rect x="10" y="10" width="580" height="370" rx="8" fill={P2} />
      {feats.map((f, i) => {
        const t = { x: me.x + offs[i].x, y: me.y + offs[i].y }
        const dx = t.x - f.x, dy = t.y - f.y
        const L = Math.hypot(dx, dy)
        const e = { x: t.x + (dx / L) * 90, y: t.y + (dy / L) * 90 }
        const brg = Math.round(((Math.atan2(f.x - me.x, me.y - f.y) / D2R) + 360) % 360)
        return (
          <g key={f.name}>
            <line x1={f.x} y1={f.y} x2={e.x} y2={e.y} stroke={A2} strokeWidth="2" />
            <circle cx={f.x} cy={f.y} r="7" fill={TXT} />
            <T x={f.x + (f.x > 400 ? -10 : 10)} y={f.y - 8} anchor={f.x > 400 ? 'end' : 'start'} weight={700}>{f.name}</T>
            <T x={f.x + (f.x > 400 ? -10 : 10)} y={f.y + (f.x > 400 ? -22 : 8)} anchor={f.x > 400 ? 'end' : 'start'} size={10} muted>bearing to it {String(brg).padStart(3, '0')}° → back {String((brg + 180) % 360).padStart(3, '0')}°</T>
          </g>
        )
      })}
      <path d={`M${hat.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L")} Z`} fill={BAD} opacity="0.45" stroke={BAD} />
      <T x={me.x + 22} y={me.y + 24} weight={700} fill={BAD}>cocked hat — you are in or near it</T>
      <T x={20} y={372} size={11} muted>Best: features 60–120° apart. A big triangle = a bearing or identification error — re-check.</T>
    </Svg>
  )
}

export function RelocationFlow() {
  const box = (x: number, y: number, w: number, text: string, sub: string, fill = PANEL) => (
    <g>
      <rect x={x} y={y} width={w} height="54" rx="8" fill={fill} stroke={LINE} strokeWidth="1.5" />
      <T x={x + w / 2} y={y + 22} anchor="middle" weight={700}>{text}</T>
      <T x={x + w / 2} y={y + 40} anchor="middle" size={10} muted>{sub}</T>
    </g>
  )
  const arr = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUT} strokeWidth="2" markerEnd="url(#rf)" />
  return (
    <Svg w={740} h={300} label="Relocation procedure flowchart">
      <defs><Arrow id="rf" /></defs>
      {box(10, 20, 130, '1. STOP', 'shelter, eat, calm', P2)}
      {box(160, 20, 130, '2. Last known point', 'where + when?')}
      {box(310, 20, 130, '3. Estimate circle', 'radius ≈ speed × time')}
      {box(460, 20, 130, '4. Test the ground', 'features, altitude, aspect')}
      {box(610, 20, 120, '5. Located?', 'match 2+ clues')}
      {arr(140, 47, 158, 47)}{arr(290, 47, 308, 47)}{arr(440, 47, 458, 47)}{arr(590, 47, 608, 47)}
      {arr(670, 74, 670, 120)}{arr(640, 74, 460, 190)}
      <T x={676} y={100} size={10} weight={700} fill={OK}>yes</T>
      <T x={520} y={130} size={10} weight={700} fill={BAD}>no</T>
      {box(560, 122, 170, 'Navigate out', 'handrail + catching feature')}
      {box(250, 190, 300, 'Short, reversible search', 'backtrack, or go to a big catching feature; set a time trigger')}
      {arr(400, 244, 400, 262)}
      <rect x="150" y="264" width="500" height="30" rx="8" fill={BAD} opacity="0.12" />
      <T x={400} y={284} anchor="middle" weight={700}>Light or energy running low? → STAY: shelter, message your position, signal</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L8 sun

function sunTrack(lat: number, dec: number) {
  const pts: { az: number; alt: number }[] = []
  for (let H = -180; H <= 180; H += 2) {
    const s = (d: number) => Math.sin(d * D2R), c = (d: number) => Math.cos(d * D2R)
    const alt = Math.asin(s(lat) * s(dec) + c(lat) * c(dec) * c(H)) / D2R
    const az = ((Math.atan2(-c(dec) * s(H), s(dec) * c(lat) - c(dec) * s(lat) * c(H)) / D2R) + 360) % 360
    pts.push({ az, alt })
  }
  return pts
}

export function SunPath() {
  const W = 620, rowH = 118
  const lats = [
    { lat: 0, name: 'Equator (0°)' },
    { lat: 40, name: '40° N' },
    { lat: 60, name: '60° N' },
  ]
  const decs = [
    { dec: 23.44, name: 'June solstice', c: A2 },
    { dec: 0, name: 'equinox', c: OK },
    { dec: -23.44, name: 'December solstice', c: INFO },
  ]
  const X = (az: number) => 70 + ((az + 360) % 360) / 360 * (W - 90)
  return (
    <Svg w={W} h={rowH * 3 + 40} label="Sun paths across the sky at the equator, 40 degrees north and 60 degrees north for solstices and equinox">
      {lats.map((L, r) => {
        const y0 = 20 + r * rowH + 95
        const Y = (alt: number) => y0 - alt * 0.8
        return (
          <g key={L.lat}>
            <T x={4} y={y0 - 70} weight={700} size={11}>{L.name}</T>
            <line x1={X(0)} x2={X(359.9)} y1={y0} y2={y0} stroke={GROUND} strokeWidth="2" />
            {[0, 90, 180, 270].map((a) => <T key={a} x={X(a)} y={y0 + 13} anchor="middle" size={10} muted>{['N', 'E', 'S', 'W'][a / 90]}</T>)}
            <T x={X(359.9)} y={y0 + 13} anchor="middle" size={10} muted>N</T>
            {decs.map((d) => {
              const pts = sunTrack(L.lat, d.dec).filter((p) => p.alt >= 0 && p.alt < 88)
              if (!pts.length) return null
              const segs: string[] = []
              let prev: { az: number; alt: number } | null = null
              for (const p of pts) {
                const jump = prev && Math.abs(p.az - prev.az) > 60
                segs.push(`${!prev || jump ? 'M' : 'L'}${X(p.az).toFixed(1)},${Y(p.alt).toFixed(1)}`)
                prev = p
              }
              const c = Math.sin(d.dec * D2R) / Math.cos(L.lat * D2R)
              const rise = Math.abs(c) <= 1 ? Math.round(Math.acos(c) / D2R) : null
              return (
                <g key={d.dec}>
                  <path d={segs.join('')} fill="none" stroke={d.c} strokeWidth="2.2" />
                  {rise !== null && <T x={X(rise)} y={y0 - 3 - (decs.indexOf(d) * 11)} anchor="middle" size={9} fill={d.c}>{rise}°</T>}
                </g>
              )
            })}
          </g>
        )
      })}
      {decs.map((d, i) => <T key={d.name} x={70 + i * 180} y={rowH * 3 + 32} size={11} weight={700} fill={d.c}>— {d.name}</T>)}
      <T x={4} y={rowH * 3 + 32} size={10} muted>rise az:</T>
    </Svg>
  )
}

export function ShadowStick() {
  const st = { x: 260, y: 250 }
  const m1 = { x: 150, y: 150 }, m2 = { x: 235, y: 128 }
  return (
    <Svg w={560} h={340} label="Shadow-stick method: two marks of the shadow tip give a west to east line">
      <defs><Arrow id="ss" color={A2} /><Arrow id="ssn" color={INFO} /></defs>
      <rect x="10" y="10" width="540" height="320" rx="8" fill={GROUND} opacity="0.18" />
      <circle cx={st.x} cy={st.y} r="6" fill={TXT} />
      <T x={st.x + 10} y={st.y + 18} weight={700}>stick (vertical)</T>
      <line x1={st.x} y1={st.y} x2={m1.x} y2={m1.y} stroke={MUT} strokeWidth="5" opacity="0.5" />
      <line x1={st.x} y1={st.y} x2={m2.x} y2={m2.y} stroke={MUT} strokeWidth="5" opacity="0.8" />
      <circle cx={m1.x} cy={m1.y} r="7" fill={BAD} /><T x={m1.x - 12} y={m1.y - 10} anchor="end" weight={700}>1st mark</T>
      <circle cx={m2.x} cy={m2.y} r="7" fill={BAD} /><T x={m2.x - 20} y={m2.y + 30} weight={700}>2nd mark (15–30 min later)</T>
      <line x1={m1.x - 60} y1={m1.y + 15.5} x2={m2.x + 150} y2={m2.y - 39} stroke={A2} strokeWidth="3" markerEnd="url(#ss)" />
      <T x={m1.x - 70} y={m1.y + 40} weight={800} fill={A2}>W</T>
      <T x={m2.x + 150} y={m2.y - 48} weight={800} fill={A2}>E</T>
      <line x1={470} y1={250} x2={435} y2={115} stroke={INFO} strokeWidth="2.5" markerEnd="url(#ssn)" />
      <T x={430} y={106} weight={800} fill={INFO}>N</T>
      <T x={476} y={250} size={11} fill={INFO}>⊥ = N–S</T>
      <T x={430} y={300} size={11} muted>sun ☀ (low, to the SE)</T>
      <T x={20} y={322} size={11} muted>Shadow tips move W → E. Most accurate near midday at mid-latitudes; poorer early/late and near solstices.</T>
    </Svg>
  )
}

export function WatchMethod() {
  const face = (cx: number, north: boolean) => {
    const R = 95
    const hourAngle = 120 // hour hand at 4 o'clock (16:00)
    const pt = (a: number, r: number) => ({ x: cx + r * Math.sin(a * D2R), y: 160 - r * Math.cos(a * D2R) })
    const hh = pt(hourAngle, 60)
    const bis = pt(hourAngle / 2, R + 18)
    const sun = north ? pt(hourAngle, R + 34) : pt(0, R + 34)
    return (
      <g>
        <circle cx={cx} cy={160} r={R} fill={PANEL} stroke={TXT} strokeWidth="2" />
        {[...Array(12)].map((_, i) => {
          const p = pt(i * 30, R - 12)
          return <T key={i} x={p.x} y={p.y + 4} anchor="middle" size={11}>{i === 0 ? 12 : i}</T>
        })}
        <line x1={cx} y1={160} x2={hh.x} y2={hh.y} stroke={TXT} strokeWidth="5" strokeLinecap="round" />
        <line x1={cx} y1={160} x2={cx} y2={80} stroke={MUT} strokeWidth="2" strokeDasharray="4 4" />
        <line x1={cx} y1={160} x2={bis.x} y2={bis.y} stroke={A2} strokeWidth="3" markerEnd="url(#wm)" />
        <T x={bis.x - 30} y={bis.y - 12} weight={800} fill={A2}>{north ? 'SOUTH' : 'NORTH'}</T>
        <T x={sun.x} y={sun.y + 5} anchor="middle" size={20} fill={WARN}>☀</T>
        <T x={cx} y={296} anchor="middle" weight={700}>{north ? 'Northern hemisphere' : 'Southern hemisphere'}</T>
        <T x={cx} y={314} anchor="middle" size={10} muted>{north ? 'hour hand at the sun; bisect to 12' : '12 at the sun; bisect to the hour hand'}</T>
      </g>
    )
  }
  return (
    <Svg w={640} h={344} label="Watch method for northern and southern hemispheres at 16:00 solar time">
      <defs><Arrow id="wm" color={A2} /></defs>
      {face(160, true)}
      {face(480, false)}
      <T x={320} y={336} anchor="middle" size={11} muted>Use SOLAR time (remove daylight saving). Errors of 20–30°+ are common; useless in the tropics.</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L9 stars and moon

export function PolarisLatitude() {
  const cx = 180, cy = 190, R = 110, lat = 40
  const obs = { x: cx + R * Math.cos(lat * D2R), y: cy - R * Math.sin(lat * D2R) }
  const tx = -Math.sin(lat * D2R), ty = -Math.cos(lat * D2R) // horizon tangent pointing "north" along surface
  return (
    <Svg w={560} h={380} label="Polaris altitude above the horizon equals the observer's latitude">
      <defs><Arrow id="pl" color={WARN} /></defs>
      <circle cx={cx} cy={cy} r={R} fill={SKY} stroke={INFO} strokeWidth="2" />
      <line x1={cx - R - 20} x2={cx + R + 20} y1={cy} y2={cy} stroke={INFO} strokeDasharray="5 4" />
      <T x={cx - R - 18} y={cy - 6} size={10} fill={INFO}>equator</T>
      <line x1={cx} y1={cy + R + 20} x2={cx} y2={cy - R - 60} stroke={TXT} strokeWidth="1.5" />
      <T x={cx + 6} y={cy - R - 48} size={10}>Earth’s axis</T>
      <line x1={cx} y1={cy} x2={obs.x} y2={obs.y} stroke={MUT} />
      <path d={`M${cx + 40},${cy} A40,40 0 0 0 ${cx + 40 * Math.cos(lat * D2R)},${cy - 40 * Math.sin(lat * D2R)}`} fill="none" stroke={A2} strokeWidth="2" />
      <T x={cx + 46} y={cy - 10} weight={700} fill={A2}>φ</T>
      <line x1={obs.x - tx * 120} y1={obs.y - ty * 120} x2={obs.x + tx * 140} y2={obs.y + ty * 140} stroke={GROUND} strokeWidth="3" />
      <T x={obs.x + tx * 140 - 4} y={obs.y + ty * 140 - 6} anchor="end" size={10} fill={GROUND}>horizon (to the north)</T>
      <circle cx={obs.x} cy={obs.y} r="5" fill={TXT} />
      <T x={obs.x + 8} y={obs.y + 16} weight={700}>you, latitude φ</T>
      <line x1={obs.x} y1={obs.y} x2={obs.x} y2={obs.y - 150} stroke={WARN} strokeWidth="2.5" markerEnd="url(#pl)" />
      <T x={obs.x + 8} y={obs.y - 150} weight={700} fill={WARN}>to Polaris (parallel to the axis)</T>
      <path d={`M${obs.x},${obs.y - 50} A50,50 0 0 0 ${obs.x + tx * 50},${obs.y + ty * 50}`} fill="none" stroke={A2} strokeWidth="2" />
      <T x={obs.x - 44} y={obs.y - 40} weight={700} fill={A2}>φ</T>
      <T x={20} y={370} size={11} muted>Polaris’s light arrives parallel to Earth’s axis: its altitude above your horizon ≈ your latitude.</T>
    </Svg>
  )
}

/** Polar projection helper: RA/Dec → x, y around a celestial pole. */
function polarProj(ra: number, dec: number, south: boolean, cx: number, cy: number, k: number, rot: number) {
  const r = (90 - (south ? -dec : dec)) * k
  const a = ((south ? ra : -ra) + rot) * D2R
  return { x: cx + r * Math.sin(a), y: cy - r * Math.cos(a) }
}
const star = (id: string) => STARS.find((s) => s.id === id)!

export function NorthernSky() {
  const cx = 300, cy = 150, k = 4.2, rot = 76
  const P = (id: string) => { const s = star(id); return polarProj(s.ra, s.dec, false, cx, cy, k, rot) }
  const dipper = ['alkaid', 'mizar', 'alioth', 'megrez', 'phecda', 'merak', 'dubhe', 'megrez']
  const cas = ['caph', 'schedar', 'gcas', 'ruchbah', 'segin']
  const line = (ids: string[]) => ids.map((id, i) => `${i ? 'L' : 'M'}${P(id).x.toFixed(1)},${P(id).y.toFixed(1)}`).join('')
  const m = P('merak'), d = P('dubhe'), pol = P('polaris')
  return (
    <Svg w={600} h={380} label="Finding Polaris from the Big Dipper pointers and Cassiopeia">
      <rect x="10" y="10" width="580" height="300" rx="8" fill={P2} />
      <path d={line(dipper)} fill="none" stroke={INFO} strokeWidth="1.5" />
      <path d={line(cas)} fill="none" stroke={INFO} strokeWidth="1.5" />
      <line x1={m.x} y1={m.y} x2={pol.x} y2={pol.y} stroke={A2} strokeWidth="1.5" strokeDasharray="5 4" />
      {[...dipper, ...cas].map((id) => <circle key={id} cx={P(id).x} cy={P(id).y} r={Math.max(2, 4.5 - star(id).mag)} fill={TXT} />)}
      <circle cx={pol.x} cy={pol.y} r="5" fill={WARN} />
      <T x={pol.x + 8} y={pol.y - 6} weight={800}>Polaris</T>
      <T x={d.x - 8} y={d.y - 8} anchor="end" size={11}>Dubhe</T>
      <T x={m.x - 8} y={m.y + 14} anchor="end" size={11}>Merak</T>
      <T x={(m.x + pol.x) / 2 - 10} y={(m.y + pol.y) / 2 - 10} size={10} fill={A2}>≈5× the pointer gap</T>
      <T x={P('alkaid').x} y={P('alkaid').y + 20} anchor="middle" size={11} weight={700}>Big Dipper</T>
      <T x={P('gcas').x} y={P('gcas').y - 14} anchor="middle" size={11} weight={700}>Cassiopeia (W)</T>
      <line x1={pol.x} y1={pol.y} x2={pol.x} y2={330} stroke={WARN} strokeWidth="2" strokeDasharray="3 5" />
      <rect x="10" y="330" width="580" height="40" fill={GROUND} opacity="0.5" />
      <T x={pol.x} y={352} anchor="middle" weight={800}>▲ TRUE NORTH</T>
      <T x={20} y={322} size={10} muted>The Dipper and Cassiopeia wheel around Polaris every 23 h 56 min, on opposite sides.</T>
    </Svg>
  )
}

export function SouthernSky() {
  const cx = 300, cy = 235, k = 6.5, rot = 150
  const P = (id: string) => { const s = star(id); return polarProj(s.ra, s.dec, true, cx, cy, k, rot) }
  const g = P('gacrux'), a = P('acrux'), ac = P('acen'), h = P('hadar')
  const ext = { x: g.x + (a.x - g.x) * 5.5, y: g.y + (a.y - g.y) * 5.5 }
  const mid = { x: (ac.x + h.x) / 2, y: (ac.y + h.y) / 2 }
  const perp = { x: -(ac.y - h.y), y: ac.x - h.x }
  const pl = Math.hypot(perp.x, perp.y)
  const sg = Math.sign(perp.x * (cx - mid.x) + perp.y * (cy - mid.y)) || 1
  const pEnd = { x: mid.x + (perp.x / pl) * 200 * sg, y: mid.y + (perp.y / pl) * 200 * sg }
  return (
    <Svg w={600} h={400} label="Finding south from the Southern Cross and the Pointers">
      <rect x="10" y="10" width="580" height="320" rx="8" fill={P2} />
      <line x1={g.x} y1={g.y} x2={ext.x} y2={ext.y} stroke={A2} strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1={mid.x} y1={mid.y} x2={pEnd.x} y2={pEnd.y} stroke={INFO} strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1={g.x} y1={g.y} x2={a.x} y2={a.y} stroke={INFO} strokeWidth="1.5" />
      <line x1={P('mimosa').x} y1={P('mimosa').y} x2={P('dcru').x} y2={P('dcru').y} stroke={INFO} strokeWidth="1.5" />
      <line x1={ac.x} y1={ac.y} x2={h.x} y2={h.y} stroke={INFO} strokeWidth="1" />
      {['acrux', 'mimosa', 'gacrux', 'dcru', 'acen', 'hadar'].map((id) => <circle key={id} cx={P(id).x} cy={P(id).y} r={Math.max(2.2, 4.8 - star(id).mag)} fill={TXT} />)}
      <T x={a.x + 8} y={a.y + 4} size={11}>Acrux</T>
      <T x={g.x - 8} y={g.y} anchor="end" size={11}>Gacrux</T>
      <T x={ac.x + 8} y={ac.y + 14} size={11}>α Cen</T>
      <T x={h.x - 8} y={h.y + 14} anchor="end" size={11}>β Cen</T>
      <T x={Math.min(g.x, a.x) - 20} y={(g.y + a.y) / 2 + 30} anchor="end" size={11} weight={700}>Southern Cross</T>
      <T x={mid.x + 10} y={mid.y - 10} size={11} weight={700}>Pointers</T>
      <circle cx={cx} cy={cy} r="7" fill="none" stroke={WARN} strokeWidth="2.5" />
      <T x={cx + 12} y={cy + 4} weight={800}>south celestial pole (no bright star)</T>
      <T x={ext.x - 8} y={ext.y + 16} anchor="end" size={10} fill={A2}>long axis × ~4.5</T>
      <line x1={cx} y1={cy} x2={cx} y2={350} stroke={WARN} strokeWidth="2" strokeDasharray="3 5" />
      <rect x="10" y="350" width="580" height="40" fill={GROUND} opacity="0.5" />
      <T x={cx} y={374} anchor="middle" weight={800}>▲ TRUE SOUTH</T>
      <T x={20} y={322} size={10} muted>Beware the dimmer, larger “False Cross” nearby — it has no Pointers.</T>
    </Svg>
  )
}

export function Orion() {
  const E = { x: 300, y: 330 }, lat = 40
  const eqDir = { x: Math.cos((90 - lat) * D2R), y: -Math.sin((90 - lat) * D2R) } // up and to the right (south) when facing east
  const nDir = { x: -eqDir.y * -1, y: eqDir.x * -1 } // perpendicular, toward north (left/up)
  const k = 8.5
  const P = (id: string) => {
    const s = star(id)
    const u = (83 - s.ra) * k + 16 * k, v = s.dec * k
    return { x: E.x + eqDir.x * u + nDir.x * v, y: E.y + eqDir.y * u + nDir.y * v }
  }
  const lines: [string, string][] = [['betelgeuse', 'bellatrix'], ['betelgeuse', 'alnitak'], ['bellatrix', 'mintaka'], ['alnitak', 'alnilam'], ['alnilam', 'mintaka'], ['alnitak', 'saiph'], ['mintaka', 'rigel'], ['saiph', 'rigel']]
  return (
    <Svg w={600} h={380} label="Orion rising in the east with Mintaka on the celestial equator">
      <rect x="10" y="10" width="580" height="320" rx="8" fill={P2} />
      <line x1={E.x} y1={E.y} x2={E.x + eqDir.x * 330} y2={E.y + eqDir.y * 330} stroke={A2} strokeWidth="1.5" strokeDasharray="6 4" />
      <T x={E.x + eqDir.x * 300 - 12} y={E.y + eqDir.y * 300} anchor="end" size={11} fill={A2}>celestial equator (rises from due E)</T>
      {lines.map(([a, b]) => <line key={a + b} x1={P(a).x} y1={P(a).y} x2={P(b).x} y2={P(b).y} stroke={INFO} strokeWidth="1.3" />)}
      {['betelgeuse', 'bellatrix', 'alnitak', 'alnilam', 'mintaka', 'saiph', 'rigel'].map((id) => <circle key={id} cx={P(id).x} cy={P(id).y} r={Math.max(2.2, 4.6 - star(id).mag)} fill={TXT} />)}
      <T x={P('mintaka').x + 8} y={P('mintaka').y + 4} weight={800}>Mintaka</T>
      <T x={P('betelgeuse').x - 8} y={P('betelgeuse').y} anchor="end" size={11}>Betelgeuse</T>
      <T x={P('rigel').x + 8} y={P('rigel').y + 4} size={11}>Rigel</T>
      <rect x="10" y="330" width="580" height="40" fill={GROUND} opacity="0.5" />
      <T x={E.x} y={356} anchor="middle" weight={800}>▲ DUE EAST</T>
      <T x={40} y={356} size={11}>← north</T>
      <T x={520} y={356} size={11}>south →</T>
      <T x={20} y={30} size={10} muted>Facing east at about 40° N. The equator leans toward the south at (90° − latitude).</T>
    </Svg>
  )
}

export function MoonPhase() {
  const mx = 300, my = 130, r = 38
  const sun = { x: 520, y: 300 }
  const ang = Math.atan2(sun.y - my, sun.x - mx)
  const lit = { x: Math.cos(ang), y: Math.sin(ang) }
  const horn1 = { x: mx - lit.y * r, y: my + lit.x * r }, horn2 = { x: mx + lit.y * r, y: my - lit.x * r }
  const dx = horn1.x - horn2.x, dy = horn1.y - horn2.y
  const t = (300 - horn2.y) / dy
  const hit = { x: horn2.x + dx * t, y: 300 }
  const rot = (ang * 180) / Math.PI
  return (
    <Svg w={600} h={360} label="Crescent Moon: lit side faces the Sun; the line through the horns extended to the horizon gives rough south">
      <rect x="10" y="10" width="580" height="290" rx="8" fill={P2} />
      <g transform={`translate(${mx},${my}) rotate(${rot})`}>
        <circle r={r} fill={MUT} opacity="0.35" />
        <path d={`M0,${-r} A${r},${r} 0 0 1 0,${r} A${r * 0.55},${r} 0 0 0 0,${-r} Z`} fill={WARN} />
      </g>
      <line x1={horn2.x} y1={horn2.y} x2={hit.x} y2={hit.y} stroke={A2} strokeWidth="2" strokeDasharray="6 4" />
      <line x1={mx} y1={my} x2={sun.x - 20} y2={sun.y - 12} stroke={WARN} strokeWidth="1.2" strokeDasharray="2 5" />
      <T x={sun.x} y={sun.y - 8} anchor="middle" size={22} fill={WARN}>☀</T>
      <T x={sun.x} y={sun.y - 34} anchor="middle" size={10} muted>Sun (below horizon)</T>
      <rect x="10" y="300" width="580" height="50" fill={GROUND} opacity="0.5" />
      <T x={hit.x} y={326} anchor="middle" weight={800}>▲ roughly SOUTH</T>
      <T x={mx + 50} y={my - 30} size={11}>lit side faces the Sun</T>
      <T x={20} y={344} size={10} muted>Northern Hemisphere, mid-latitudes. A rough guide only (±15–30°); poor with a near-full or near-new Moon.</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L10 natural navigation

export function NaturalSigns() {
  const wind = (x: number, y: number, id: string) => (
    <g><line x1={x} y1={y} x2={x + 60} y2={y} stroke={INFO} strokeWidth="2.5" markerEnd={`url(#${id})`} /><T x={x} y={y - 6} size={10} fill={INFO}>wind</T></g>
  )
  return (
    <Svg w={720} h={250} label="Wind-flagged tree, cornice with snow drift, and barchan dune, each with the prevailing wind direction">
      <defs><Arrow id="ns1" color={INFO} /><Arrow id="ns2" color={INFO} /><Arrow id="ns3" color={INFO} /></defs>
      <rect x="6" y="6" width="228" height="238" rx="8" fill={P2} />
      <T x={20} y={26} weight={700}>Flagged tree</T>
      {wind(20, 50, 'ns1')}
      <line x1="110" y1="220" x2="110" y2="80" stroke={GROUND} strokeWidth="6" />
      {[0, 1, 2, 3, 4].map((i) => <path key={i} d={`M110,${100 + i * 22} q40,-6 ${80 - i * 6},${4 + i}`} stroke={OK} strokeWidth="7" fill="none" strokeLinecap="round" />)}
      <line x1="30" y1="220" x2="210" y2="220" stroke={GROUND} strokeWidth="2" />
      <T x={20} y={238} size={10} muted>branches stream downwind</T>

      <rect x="246" y="6" width="228" height="238" rx="8" fill={P2} />
      <T x={260} y={26} weight={700}>Cornice and drift</T>
      {wind(260, 50, 'ns2')}
      <path d="M256,220 L360,110 C380,98 410,96 425,104 C410,112 396,114 386,120 L470,220 Z" fill={PANEL} stroke={MUT} strokeWidth="1.5" />
      <path d="M360,110 C380,98 410,96 425,104 C410,112 396,114 386,120" fill="none" stroke={BAD} strokeWidth="2" />
      <T x={400} y={140} size={10} fill={BAD}>overhang on</T>
      <T x={400} y={152} size={10} fill={BAD}>the LEE side:</T>
      <T x={400} y={164} size={10} fill={BAD}>keep well back</T>
      <T x={260} y={238} size={10} muted>snow drifts and tails form downwind</T>

      <rect x="486" y="6" width="228" height="238" rx="8" fill={P2} />
      <T x={500} y={26} weight={700}>Barchan dune (from above)</T>
      {wind(500, 50, 'ns3')}
      <path d="M660,80 C580,90 560,130 570,145 C560,160 580,200 660,210 C615,180 605,160 615,145 C605,130 615,110 660,80 Z" fill={WARN} opacity="0.35" stroke={WARN} />
      <path d="M615,145 C605,130 615,110 660,80 M615,145 C605,160 615,180 660,210" fill="none" stroke={TXT} strokeWidth="1.5" strokeDasharray="4 3" />
      <T x={500} y={226} size={10}>horns point downwind →</T>
      <T x={500} y={238} size={10} muted>dashed = steep slip face (lee side)</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L11 GNSS

export function GnssTrilateration() {
  const rx = 300, ry = 230
  const sats = [{ x: 90, y: 60 }, { x: 330, y: 30 }, { x: 540, y: 90 }]
  return (
    <Svg w={620} h={360} label="GNSS positioning: range circles from satellites intersecting at the receiver, with clock error blurring every range">
      {sats.map((s, i) => {
        const R = Math.hypot(rx - s.x, ry - s.y)
        return (
          <g key={i}>
            <circle cx={s.x} cy={s.y} r={R + 14} fill="none" stroke={INFO} strokeWidth="10" opacity="0.12" />
            <circle cx={s.x} cy={s.y} r={R} fill="none" stroke={INFO} strokeWidth="1.5" />
            <rect x={s.x - 14} y={s.y - 8} width="28" height="16" fill={A} rx="3" />
            <line x1={s.x - 26} x2={s.x + 26} y1={s.y} y2={s.y} stroke={A} strokeWidth="3" />
            <T x={s.x} y={s.y - 14} anchor="middle" size={11} weight={700}>sat {i + 1}</T>
          </g>
        )
      })}
      <circle cx={rx} cy={ry} r="7" fill={BAD} />
      <T x={rx + 12} y={ry + 20} weight={700}>receiver</T>
      <rect x="0" y="300" width="620" height="60" fill={GROUND} opacity="0.3" />
      <T x={12} y={322} size={11}>range = c × travel time. The receiver’s cheap clock is off by an unknown amount — 1 µs ≈ 300 m on EVERY range.</T>
      <T x={12} y={342} size={11}>Unknowns: x, y, z and clock offset → at least 4 satellites. Blurred bands show the clock error before it is solved.</T>
    </Svg>
  )
}

// ---------------------------------------------------------------- L12 when navigation fails

export function LostStrategies() {
  const c = { x: 320, y: 200 }
  const item = (x: number, y: number, text: string, color: string) => <T x={x} y={y} size={11} weight={700} fill={color}>{text}</T>
  return (
    <Svg w={640} h={400} label="Lost-person strategies around the initial planning point">
      <defs><Arrow id="ls" color={A2} /><Arrow id="ls2" color={INFO} /><Arrow id="ls3" color={BAD} /></defs>
      {[60, 120, 180].map((r) => <circle key={r} cx={c.x} cy={c.y} r={r} fill="none" stroke={LINE} strokeDasharray="4 5" />)}
      <circle cx={c.x} cy={c.y} r="8" fill={A} />
      <T x={c.x + 12} y={c.y + 4} weight={800}>IPP / last known point</T>
      {item(c.x + 14, c.y + 24, 'Staying put — the search stops growing', OK)}
      <path d={`M${c.x - 180},${c.y + 150} C${c.x - 120},${c.y + 100} ${c.x - 60},${c.y + 60} ${c.x - 10},${c.y + 10}`} fill="none" stroke={A2} strokeWidth="2" markerEnd="url(#ls)" />
      {item(c.x - 300, c.y + 170, 'Backtracking to a known point', A2)}
      <path d={`M${c.x},${c.y} L${c.x + 60},${c.y - 90} L${c.x + 130},${c.y - 140} L${c.x + 230},${c.y - 160}`} fill="none" stroke={INFO} strokeWidth="2" markerEnd="url(#ls2)" />
      {item(c.x + 120, c.y - 170, 'Route / direction travel', INFO)}
      {[200, 240, 280, 320].map((a) => {
        const e = { x: c.x + 70 * Math.sin(a * D2R), y: c.y - 70 * Math.cos(a * D2R) }
        return <path key={a} d={`M${c.x},${c.y} L${e.x},${e.y}`} stroke={A} strokeWidth="1.8" strokeDasharray="3 3" />
      })}
      {item(c.x - 300, c.y - 40, 'Direction sampling: short out-and-backs', A)}
      {item(c.x - 300, c.y - 25, 'from a fixed anchor', A)}
      <path d={`M${c.x},${c.y} L${c.x + 150},${c.y + 60}`} stroke={MUT} strokeWidth="2" />
      <path d={`M${c.x + 150},${c.y + 80} l20,-40 l20,40 z`} fill={GROUND} opacity="0.7" />
      {item(c.x + 110, c.y + 115, 'View enhancing (safe high ground)', MUT)}
      <path d={`M${c.x},${c.y} q-20,-40 20,-60 q40,-20 10,-60 q-30,-40 -70,-10 q-40,30 -80,-10`} fill="none" stroke={WARN} strokeWidth="1.8" />
      {item(c.x - 230, c.y - 150, 'Random traversing — most costly', WARN)}
      <path d={`M${c.x + 10},${c.y + 10} C${c.x + 40},${c.y + 80} ${c.x + 20},${c.y + 140} ${c.x + 60},${c.y + 185}`} fill="none" stroke={BAD} strokeWidth="2" markerEnd="url(#ls3)" />
      {item(c.x + 70, c.y + 185, 'Following drainages downhill — gorge risk', BAD)}
    </Svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'map-scale': MapScale,
  'grid-ref': GridRef,
  'contours-profile': ContoursProfile,
  landforms: Landforms,
  'slope-spacing': SlopeSpacing,
  'compass-anatomy': CompassAnatomy,
  'three-norths': ThreeNorths,
  declination: Declination,
  'bearing-steps': BearingSteps,
  'back-bearing': BackBearing,
  'one-in-sixty': OneInSixty,
  'pace-error': PaceError,
  'naismith-slope': NaismithSlope,
  handrails: Handrails,
  'aiming-off': AimingOff,
  resection: Resection,
  'relocation-flow': RelocationFlow,
  'sun-path': SunPath,
  'shadow-stick': ShadowStick,
  'watch-method': WatchMethod,
  'polaris-latitude': PolarisLatitude,
  'northern-sky': NorthernSky,
  'southern-sky': SouthernSky,
  orion: Orion,
  'moon-phase': MoonPhase,
  'natural-signs': NaturalSigns,
  'gnss-trilateration': GnssTrilateration,
  'lost-strategies': LostStrategies,
}
