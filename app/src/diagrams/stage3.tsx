import type { ComponentType, ReactNode } from 'react'
import { netHeat } from '../sims/stage3/fireAdvancedModel'

// Stage 3 SVG diagrams (Fire and Heat). Colors only via CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const GROUND = 'var(--ground)'
const SKY = 'var(--sky)'

export function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

/** Stages of wood combustion along a burning stick. */
export function CombustionStages() {
  const zones = [
    { x: 30, w: 140, label: 'Heating & drying', t: '< 100–150 °C', d: ['water boils off', '(steam)'], c: INFO },
    { x: 170, w: 150, label: 'Pyrolysis', t: '~200–500 °C', d: ['wood breaks down', 'into gases + tar'], c: A2 },
    { x: 320, w: 140, label: 'Flaming', t: 'flame ~800–1100 °C', d: ['the GASES burn,', 'above the wood'], c: BAD },
    { x: 460, w: 140, label: 'Glowing char', t: '~600–900 °C', d: ['carbon burns at', 'the surface: coals'], c: A },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 270" role="img" aria-label="Wood combustion stages: drying, pyrolysis, flaming combustion of gases, glowing char">
      <defs><Arrow id="cs-a" color={MUT} /></defs>
      {zones.map((z) => (
        <g key={z.label}>
          <rect x={z.x} y="140" width={z.w} height="34" fill={z.c} opacity="0.35" stroke={z.c} />
          <text x={z.x + z.w / 2} y="194" textAnchor="middle" fontSize="13" fontWeight="700">{z.label}</text>
          <text x={z.x + z.w / 2} y="210" textAnchor="middle" fontSize="11" className="muted-fill">{z.t}</text>
          <text x={z.x + z.w / 2} y="226" textAnchor="middle" fontSize="10.5" className="muted-fill">{z.d[0]}</text>
          <text x={z.x + z.w / 2} y="240" textAnchor="middle" fontSize="10.5" className="muted-fill">{z.d[1]}</text>
        </g>
      ))}
      <path d="M345,140 Q360,70 390,30 Q410,80 440,140 Z" fill={BAD} opacity="0.35" />
      <path d="M365,140 Q380,95 390,70 Q400,100 420,140 Z" fill={A2} opacity="0.5" />
      <text x="250" y="110" textAnchor="middle" fontSize="11" className="muted-fill">volatile gases rise and mix with air</text>
      <line x1="250" y1="130" x2="360" y2="80" stroke={MUT} strokeDasharray="4 3" markerEnd="url(#cs-a)" />
      <text x="100" y="110" textAnchor="middle" fontSize="11" className="muted-fill">heat flows in ←</text>
      <text x="320" y="264" textAnchor="middle" fontSize="10" className="muted-fill">wood never “burns” directly: heat turns it into gas, the gas burns, and what is left (char) glows</text>
    </svg>
  )
}

/** A/V = 4/d for sticks of different diameters. */
export function SurfaceVolume() {
  const ds = [1, 3, 6, 12, 25, 50]
  const max = 4 / 1
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="Surface-to-volume ratio of sticks falls as four divided by diameter">
      <text x="320" y="22" textAnchor="middle" fontSize="13" fontWeight="700">Surface area per unit volume, A/V = 4/d</text>
      {ds.map((d, k) => {
        const av = 4 / d
        const h = (av / max) * 170
        const x = 60 + k * 95
        return (
          <g key={d}>
            <rect x={x} y={220 - h} width="56" height={Math.max(1.5, h)} fill={k < 2 ? A2 : k < 4 ? A : GROUND} opacity="0.85" />
            <text x={x + 28} y={214 - h} textAnchor="middle" fontSize="11">{av >= 1 ? av.toFixed(1) : av.toFixed(2)} mm⁻¹</text>
            <circle cx={x + 28} cy="244" r={Math.min(14, Math.max(1, d / 3.6))} fill={GROUND} />
            <text x={x + 28} y="272" textAnchor="middle" fontSize="11" className="muted-fill">{d} mm</text>
          </g>
        )
      })}
      <line x1="40" y1="220" x2="620" y2="220" stroke={LINE} />
      <text x="600" y="120" textAnchor="end" fontSize="11" className="muted-fill">halve the diameter → double the</text>
      <text x="600" y="136" textAnchor="end" fontSize="11" className="muted-fill">surface each gram of wood exposes to heat</text>
    </svg>
  )
}

/** Net energy per kg vs moisture content, from netHeat(). */
export function MoistureEnergy() {
  const pts = Array.from({ length: 13 }, (_, k) => k * 0.05)
  const X = (m: number) => 60 + (m / 0.6) * 520
  const Y = (h: number) => 220 - (h / 20) * 190
  const line = pts.map((m) => `${X(m)},${Y(netHeat(m))}`).join(' ')
  const marks = [
    { m: 0.15, l: 'seasoned / dead standing ≈ 15–20 %' },
    { m: 0.35, l: 'lying on wet ground ≈ 30–40 %' },
    { m: 0.5, l: 'green ≈ 45–55 %' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 270" role="img" aria-label="Net usable heat per kilogram of wood falls steeply as moisture content rises">
      <line x1="60" y1="220" x2="590" y2="220" stroke={LINE} />
      <line x1="60" y1="25" x2="60" y2="220" stroke={LINE} />
      {[0, 5, 10, 15, 20].map((h) => <text key={h} x="54" y={Y(h) + 4} textAnchor="end" fontSize="10" className="muted-fill">{h}</text>)}
      {[0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6].map((m) => <text key={m} x={X(m)} y="236" textAnchor="middle" fontSize="10" className="muted-fill">{Math.round(m * 100)} %</text>)}
      <text x="18" y="120" fontSize="11" className="muted-fill" transform="rotate(-90 18 120)">MJ per kg of wood</text>
      <text x="325" y="256" textAnchor="middle" fontSize="11" className="muted-fill">moisture content (wet basis: water ÷ total mass)</text>
      <polyline points={line} fill="none" stroke={A} strokeWidth="3" />
      {marks.map((k) => (
        <g key={k.m}>
          <circle cx={X(k.m)} cy={Y(netHeat(k.m))} r="5" fill={A2} />
          <text x={X(k.m) + 8} y={Y(netHeat(k.m)) - 8} fontSize="10.5">{k.l}: {netHeat(k.m).toFixed(1)} MJ/kg</text>
        </g>
      ))}
      <text x="330" y="40" fontSize="11" className="muted-fill">H_net = 18.5·(1 − m) − 2.44·m</text>
    </svg>
  )
}

/** Six fire lays, small multiples. */
export function FireLays() {
  const cell = (x: number, y: number, title: string, use: string, body: ReactNode) => (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width="200" height="150" rx="8" fill={P2} stroke={LINE} />
      <text x="100" y="18" textAnchor="middle" fontSize="12.5" fontWeight="700">{title}</text>
      <line x1="10" y1="118" x2="190" y2="118" stroke={GROUND} strokeWidth="2" />
      {body}
      <text x="100" y="138" textAnchor="middle" fontSize="10" className="muted-fill">{use}</text>
    </g>
  )
  const st = { stroke: GROUND, strokeLinecap: 'round' as const }
  const flame = (cx: number, cy: number, s = 1) => <path d={`M${cx - 10 * s},${cy} Q${cx - 8 * s},${cy - 20 * s} ${cx},${cy - 32 * s} Q${cx + 8 * s},${cy - 20 * s} ${cx + 10 * s},${cy} Z`} fill={A2} opacity="0.8" />
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Six fire lays: teepee, log cabin, lean-to, star, long log, Dakota hole">
      {cell(10, 5, 'Teepee', 'fast start · tall flame · signal', <g {...st} strokeWidth="4">{flame(100, 116)}<line x1="70" y1="117" x2="100" y2="50" /><line x1="130" y1="117" x2="100" y2="50" /><line x1="88" y1="117" x2="100" y2="52" /><line x1="112" y1="117" x2="100" y2="52" /></g>)}
      {cell(220, 5, 'Log cabin', 'stable pot platform · coal bed', <g {...st} strokeWidth="7">{flame(100, 112, 0.8)}<line x1="55" y1="112" x2="145" y2="112" /><line x1="60" y1="98" x2="140" y2="98" /><line x1="55" y1="84" x2="145" y2="84" /><line x1="60" y1="70" x2="140" y2="70" /></g>)}
      {cell(430, 5, 'Lean-to', 'wind shield · quick', <g {...st}><line x1="40" y1="108" x2="160" y2="108" strokeWidth="14" />{flame(95, 116)}<line x1="70" y1="117" x2="120" y2="72" strokeWidth="4" /><line x1="95" y1="117" x2="140" y2="78" strokeWidth="4" /></g>)}
      {cell(10, 170, 'Star', 'slow, fuel-thrifty · cooking', <g {...st} strokeWidth="8">{flame(100, 110, 0.6)}<line x1="20" y1="113" x2="88" y2="108" /><line x1="180" y1="113" x2="112" y2="108" /><line x1="50" y1="100" x2="92" y2="104" strokeWidth="6" /><line x1="150" y1="100" x2="108" y2="104" strokeWidth="6" /></g>)}
      {cell(220, 170, 'Long log', 'overnight warmth along your body', <g {...st}><line x1="20" y1="110" x2="180" y2="110" strokeWidth="14" /><line x1="20" y1="94" x2="180" y2="94" strokeWidth="14" /><path d="M30,88 Q60,60 90,85 Q120,58 150,85 Q165,70 175,88 Z" fill={A2} opacity="0.7" stroke="none" /></g>)}
      {cell(430, 170, 'Dakota hole', 'low light, low smoke, fuel-efficient', <g><rect x="10" y="80" width="180" height="38" fill={GROUND} opacity="0.3" /><path d="M68,80 L73,116 L107,116 L112,80 Z" fill={P2} stroke={GROUND} strokeWidth="2" /><path d="M80,114 Q88,92 90,70 Q96,92 100,114 Z" fill={A2} opacity="0.85" /><line x1="150" y1="80" x2="108" y2="112" stroke={P2} strokeWidth="7" /><text x="150" y="74" fontSize="9" className="muted-fill">air tunnel</text></g>)}
    </svg>
  )
}

/** Wet-weather fire kit: platform, split wood dry core, feather stick, tarp. */
export function WetFire() {
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="Wet-weather fire: split wood to reach the dry core, feather sticks, a platform off wet ground and overhead cover">
      <defs><Arrow id="wf-a" color={MUT} /></defs>
      {/* split log cross-section */}
      <g transform="translate(90,120)">
        <circle r="60" fill={GROUND} opacity="0.9" />
        <circle r="52" fill="#c9a06a" />
        <circle r="52" fill="none" stroke={INFO} strokeWidth="8" opacity="0.6" />
        <line x1="0" y1="-62" x2="0" y2="62" stroke={P2} strokeWidth="4" />
        <text y="85" textAnchor="middle" fontSize="12" fontWeight="700">Split it</text>
        <text y="101" textAnchor="middle" fontSize="10.5" className="muted-fill">wet shell (blue), dry core</text>
      </g>
      {/* feather stick */}
      <g transform="translate(230,40)">
        <rect x="0" y="0" width="16" height="150" rx="3" fill="#c9a06a" stroke={GROUND} />
        {Array.from({ length: 8 }, (_, k) => <path key={k} d={`M16,${40 + k * 12} q14,6 18,22`} fill="none" stroke="#c9a06a" strokeWidth="3" />)}
        <text x="8" y="175" textAnchor="middle" fontSize="12" fontWeight="700">Feather stick</text>
        <text x="8" y="191" textAnchor="middle" fontSize="10.5" className="muted-fill">curls stay attached</text>
      </g>
      {/* platform + tarp */}
      <g transform="translate(340,0)">
        <path d="M20,60 L270,30" stroke={A} strokeWidth="4" />
        <text x="150" y="30" textAnchor="middle" fontSize="11" className="muted-fill">tarp high above (heat & sparks!)</text>
        {[0, 1, 2, 3].map((k) => <line key={k} x1="160" y1={60 + k * 25} x2="150" y2={70 + k * 25} stroke={INFO} strokeWidth="1.5" />)}
        <rect x="0" y="212" width="290" height="40" fill={GROUND} opacity="0.4" />
        <text x="145" y="266" textAnchor="middle" fontSize="10.5" className="muted-fill">wet ground / snow</text>
        {Array.from({ length: 10 }, (_, k) => <circle key={k} cx={60 + k * 17} cy="205" r="7" fill="#b98b55" stroke={GROUND} />)}
        <text x="145" y="190" textAnchor="middle" fontSize="12" fontWeight="700">Platform of dry sticks</text>
        <path d="M110,196 Q125,150 145,120 Q165,150 180,196 Z" fill={A2} opacity="0.75" />
        <text x="190" y="150" fontSize="10.5" className="muted-fill">resin/fatwood,</text>
        <text x="190" y="164" fontSize="10.5" className="muted-fill">birch bark</text>
      </g>
    </svg>
  )
}

/** Ferro rod technique and spark/ignition temperatures. */
export function SparkIgnition() {
  const bars = [
    { l: 'Ferro-rod sparks (burning metal particles)', v: 3000, c: BAD, note: '~3,000 °C, but tiny and short-lived' },
    { l: 'Flint-and-steel sparks (burning iron)', v: 1000, c: A2, note: '~800–1,100 °C, much less energy' },
    { l: 'Char cloth catches a spark', v: 350, c: A, note: 'char ignites at a few hundred °C' },
    { l: 'Wood / tinder ignition from a small source', v: 300, c: GROUND, note: 'piloted ignition roughly 250–350 °C' },
  ]
  const X = (v: number) => (v / 3000) * 330
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Spark temperatures of ferrocerium and flint and steel, and the pull-back ferro technique">
      <text x="10" y="20" fontSize="13" fontWeight="700">Temperature is not the whole story — spark energy and tinder fineness decide</text>
      {bars.map((b, k) => (
        <g key={b.l} transform={`translate(10,${40 + k * 40})`}>
          <text x="0" y="12" fontSize="11">{b.l}</text>
          <rect x="0" y="16" width={X(b.v)} height="12" rx="6" fill={b.c} opacity="0.85" />
          <text x={X(b.v) + 6} y="27" fontSize="10" className="muted-fill">{b.note}</text>
        </g>
      ))}
      <g transform="translate(40,210)">
        <ellipse cx="80" cy="60" rx="70" ry="16" fill={A2} opacity="0.4" />
        <text x="80" y="88" textAnchor="middle" fontSize="10.5" className="muted-fill">tinder</text>
        <line x1="75" y1="52" x2="250" y2="-10" stroke={MUT} strokeWidth="8" strokeLinecap="round" />
        <rect x="140" y="10" width="40" height="10" fill={GROUND} transform="rotate(-20 160 15)" />
        <text x="260" y="0" fontSize="11">rod tip IN the tinder; hold the striker still</text>
        <text x="260" y="16" fontSize="11">and pull the ROD back — sparks land where the tinder is</text>
      </g>
    </svg>
  )
}

/** Labelled bow-drill set. */
export function BowDrillSet() {
  return (
    <svg className="diagram" viewBox="0 0 780 300" role="img" aria-label="Bow drill set: bow, string, spindle, handhold, hearth board with notch, ember pan, foot and body position">
      <defs><Arrow id="bd-a" color={MUT} /></defs>
      <rect x="0" y="250" width="780" height="50" fill={GROUND} opacity="0.3" />
      <rect x="200" y="232" width="240" height="18" rx="2" fill="#b98b55" stroke={GROUND} />
      <path d="M312,232 L328,232 L338,250 L302,250 Z" fill={P2} />
      <rect x="290" y="250" width="60" height="5" fill={MUT} />
      <rect x="312" y="85" width="16" height="147" rx="5" fill="#d9b27c" stroke={GROUND} />
      <rect x="290" y="70" width="60" height="16" rx="7" fill={GROUND} />
      <path d="M140,160 Q320,120 500,160" fill="none" stroke={GROUND} strokeWidth="7" strokeLinecap="round" />
      <path d="M140,160 L312,164 M328,164 L500,160" stroke="var(--text)" strokeWidth="1.3" />
      <rect x="400" y="218" width="70" height="14" rx="6" fill={MUT} opacity="0.6" />
      <text x="435" y="212" textAnchor="middle" fontSize="10" className="muted-fill">your foot</text>
      {[
        { x: 360, y: 60, tx: 460, ty: 40, t: 'Handhold: smooth, lubricated socket' },
        { x: 480, y: 157, tx: 520, ty: 120, t: 'Bow: arm-length, flexible, taut cord' },
        { x: 328, y: 150, tx: 520, ty: 190, t: 'Spindle: straight, ~2 cm × 20 cm' },
        { x: 320, y: 242, tx: 150, ty: 290, t: 'Notch: ~1/8 of the circle, cut to the centre of the socket' },
        { x: 350, y: 253, tx: 460, ty: 285, t: 'Ember pan (leaf/bark) under the notch' },
        { x: 220, y: 240, tx: 30, ty: 215, t: 'Hearth board: ~1.5 cm thick, same or softer wood' },
      ].map((a) => (
        <g key={a.t}>
          <line x1={a.tx < a.x ? a.tx + 150 : a.tx - 4} y1={a.ty - 4} x2={a.x} y2={a.y} stroke={MUT} strokeWidth="1" markerEnd="url(#bd-a)" />
          <text x={a.tx} y={a.ty} fontSize="10.5">{a.t}</text>
        </g>
      ))}
      <text x="20" y="30" fontSize="11" className="muted-fill">Wrist locked against the shin,</text>
      <text x="20" y="44" fontSize="11" className="muted-fill">spindle vertical, long full strokes.</text>
    </svg>
  )
}

/** Power budget of a bow drill: input vs losses, and temperature race. */
export function FrictionBalance() {
  const X = (t: number) => 60 + (t / 80) * 520
  const Y = (T: number) => 230 - (T / 500) * 200
  const curve = (tau: number, Tss: number, plateau: number) =>
    Array.from({ length: 81 }, (_, t) => {
      let T = 15 + (Tss - 15) * (1 - Math.exp(-t / tau))
      if (T > 100 && plateau > 0) {
        const t100 = -tau * Math.log(1 - 85 / (Tss - 15))
        T = t < t100 + plateau ? 100 : 15 + (Tss - 15) * (1 - Math.exp(-(t - plateau) / tau))
      }
      return `${X(t)},${Y(Math.min(T, 490))}`
    }).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="Bow drill temperature race: good technique crosses the ember threshold, weak or damp technique stalls">
      <line x1="60" y1="230" x2="590" y2="230" stroke={LINE} />
      <line x1="60" y1="25" x2="60" y2="230" stroke={LINE} />
      <line x1="60" x2="590" y1={Y(400)} y2={Y(400)} stroke={BAD} strokeDasharray="5 4" />
      <text x="585" y={Y(400) - 4} textAnchor="end" fontSize="10.5" style={{ fill: 'var(--bad)' }}>ember threshold ≈ 350–450 °C</text>
      <line x1="60" x2="590" y1={Y(100)} y2={Y(100)} stroke={INFO} strokeDasharray="3 3" />
      <text x="585" y={Y(100) - 4} textAnchor="end" fontSize="10.5" style={{ fill: 'var(--info)' }}>100 °C — moisture boils off</text>
      <polyline points={curve(22, 520, 5)} fill="none" stroke={OK} strokeWidth="3" />
      <polyline points={curve(22, 330, 5)} fill="none" stroke={A2} strokeWidth="3" />
      <polyline points={curve(25, 400, 35)} fill="none" stroke={INFO} strokeWidth="3" />
      <text x={X(52)} y={Y(470)} fontSize="11" style={{ fill: 'var(--ok)' }}>dry wood, ~45 W, good form</text>
      <text x={X(46)} y={Y(345)} fontSize="11" style={{ fill: 'var(--accent-2)' }}>too little pressure or thick spindle</text>
      <text x={X(8)} y={Y(130)} fontSize="11" style={{ fill: 'var(--info)' }}>damp wood: stuck at 100 °C</text>
      {[0, 20, 40, 60, 80].map((t) => <text key={t} x={X(t)} y="246" textAnchor="middle" fontSize="10" className="muted-fill">{t} s</text>)}
      <text x="325" y="268" textAnchor="middle" fontSize="11" className="muted-fill">T rises until heat in (μ·N·v) = heat lost (conduction + radiation + evaporation)</text>
    </svg>
  )
}

/** Radiant heat geometry: inverse square, view factor, reflector. */
export function RadiantGeometry() {
  const ds = [0.5, 1, 1.5, 2, 3]
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Radiant heat from a fire falls roughly with the square of distance; a reflector returns heat that would escape">
      <defs><Arrow id="rg-a" color={A2} /></defs>
      <rect x="0" y="0" width="640" height="200" fill={SKY} opacity="0.15" />
      <rect x="0" y="200" width="640" height="16" fill={GROUND} opacity="0.4" />
      <rect x="40" y="110" width="18" height="90" fill={GROUND} />
      <rect x="58" y="110" width="18" height="90" fill={GROUND} opacity="0.8" />
      <text x="58" y="100" textAnchor="middle" fontSize="11">reflector</text>
      <path d="M140,200 Q150,150 170,120 Q190,150 200,200 Z" fill={A2} opacity="0.8" />
      {[-40, -20, 0, 20].map((a) => (
        <line key={a} x1="200" y1="165" x2={200 + 110 * Math.cos((a * Math.PI) / 180)} y2={165 + 110 * Math.sin((a * Math.PI) / 180)} stroke={A2} strokeWidth="2" markerEnd="url(#rg-a)" />
      ))}
      {[200, 180, 160].map((a) => (
        <line key={a} x1="140" y1="165" x2={140 + 55 * Math.cos((a * Math.PI) / 180)} y2={165 + 55 * Math.sin((a * Math.PI) / 180)} stroke={A2} strokeWidth="2" strokeDasharray="3 3" markerEnd="url(#rg-a)" />
      ))}
      <path d="M80,150 Q200,110 330,150" fill="none" stroke={A2} strokeWidth="1.5" strokeDasharray="4 4" markerEnd="url(#rg-a)" />
      <text x="205" y="122" textAnchor="middle" fontSize="10.5" className="muted-fill">heat returned by the reflector</text>
      <circle cx="400" cy="140" r="12" fill="var(--text)" opacity="0.6" />
      <rect x="390" y="152" width="20" height="46" rx="6" fill="var(--text)" opacity="0.6" />
      <circle cx="560" cy="140" r="8" fill="var(--text)" opacity="0.4" />
      <rect x="553" y="148" width="14" height="30" rx="4" fill="var(--text)" opacity="0.4" />
      <text x="560" y="212" textAnchor="middle" fontSize="10" className="muted-fill">2× the distance</text>
      <text x="400" y="212" textAnchor="middle" fontSize="10" className="muted-fill">≈ 1.2 m from fire</text>
      <text x="20" y="240" fontSize="12" fontWeight="700">Relative radiant heat (point-source approximation, 1 m = 100 %)</text>
      {ds.map((d, k) => {
        const rel = 1 / (d * d)
        return (
          <g key={d} transform={`translate(${20 + k * 122},250)`}>
            <rect x="0" y="0" width={Math.min(110, rel * 27.5)} height="14" rx="4" fill={A} />
            <text x="0" y="32" fontSize="10.5">{d} m: {Math.round(rel * 100)} %</text>
          </g>
        )
      })}
    </svg>
  )
}

/** Fire site safety and carbon monoxide. */
export function FireSiteSafety() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Safe fire site: 3 m cleared circle, no overhanging branches, not on roots or peat, downwind clearance, water ready; carbon monoxide in enclosed spaces">
      <rect x="0" y="210" width="400" height="90" fill={GROUND} opacity="0.35" />
      <ellipse cx="200" cy="225" rx="150" ry="30" fill="none" stroke={OK} strokeWidth="2.5" strokeDasharray="6 4" />
      <text x="200" y="272" textAnchor="middle" fontSize="11">≥ 3 m cleared to mineral soil, no roots / duff / peat</text>
      <path d="M185,222 Q195,190 200,175 Q205,190 215,222 Z" fill={A2} opacity="0.85" />
      {[160, 175, 225, 240].map((x) => <ellipse key={x} cx={x} cy="226" rx="9" ry="5" fill={MUT} />)}
      <rect x="300" y="200" width="18" height="22" rx="3" fill={INFO} />
      <text x="309" y="195" textAnchor="middle" fontSize="10">water</text>
      <path d="M30,40 Q110,60 190,90" stroke={BAD} strokeWidth="6" fill="none" />
      <text x="40" y="30" fontSize="10.5" style={{ fill: 'var(--bad)' }}>no overhanging branches</text>
      <text x="300" y="60" fontSize="10.5" className="muted-fill">wind →</text>
      <text x="300" y="76" fontSize="10.5" className="muted-fill">sparks travel far downwind:</text>
      <text x="300" y="92" fontSize="10.5" className="muted-fill">strong wind + dry fuel = don’t light</text>
      <g transform="translate(430,60)">
        <path d="M0,150 L90,20 L180,150 Z" fill={P2} stroke={LINE} strokeWidth="2" />
        <rect x="70" y="120" width="40" height="30" fill={MUT} />
        <text x="90" y="140" textAnchor="middle" fontSize="10" style={{ fill: '#fff' }}>stove</text>
        <text x="90" y="100" textAnchor="middle" fontSize="16" fontWeight="700" style={{ fill: 'var(--bad)' }}>CO</text>
        <line x1="10" y1="30" x2="170" y2="150" stroke={BAD} strokeWidth="4" />
        <text x="90" y="175" textAnchor="middle" fontSize="11" fontWeight="700">No fires, stoves or charcoal</text>
        <text x="90" y="191" textAnchor="middle" fontSize="11">in tents, snow caves or cars</text>
        <text x="90" y="207" textAnchor="middle" fontSize="10" className="muted-fill">CO is odourless and invisible</text>
      </g>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'combustion-stages': CombustionStages,
  'surface-volume': SurfaceVolume,
  'moisture-energy': MoistureEnergy,
  'fire-lays': FireLays,
  'wet-fire': WetFire,
  'spark-ignition': SparkIgnition,
  'bow-drill-set': BowDrillSet,
  'friction-balance': FrictionBalance,
  'radiant-geometry': RadiantGeometry,
  'fire-site-safety': FireSiteSafety,
}
