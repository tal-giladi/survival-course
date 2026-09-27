import type { ComponentType } from 'react'
import { model } from '../sims/heatModel'
import type { HBInput } from '../sims/heatModel'
import { inspiredPO2, windChill } from '../sims/stage8/physioMath'

// Stage 8 SVG diagrams (physiology). Colors only via CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const WARN = 'var(--warn)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

/** Axes helper for small line plots. */
function Axes({ x0, y0, w, h, xl, yl }: { x0: number; y0: number; w: number; h: number; xl: string; yl: string }) {
  return (
    <g>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={MUT} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={MUT} />
      <text x={x0 + w / 2} y={y0 + 29} fontSize="11" textAnchor="middle" className="muted-fill">{xl}</text>
      <text x={x0 - 6} y={y0 - h - 12} fontSize="11" className="muted-fill">{yl}</text>
    </g>
  )
}

// ---------- Lesson 1: thermoregulation ----------

function Person({ cx, core, shell }: { cx: number; core: number; shell: string }) {
  // core region size shrinks in the cold (shell widens)
  return (
    <g>
      <circle cx={cx} cy={60} r={24} fill={shell} stroke={TXT} strokeWidth="1.5" />
      <path d={`M${cx - 40},95 Q${cx},80 ${cx + 40},95 L${cx + 48},200 L${cx + 30},200 L${cx + 26},300 L${cx - 26},300 L${cx - 30},200 L${cx - 48},200 Z`} fill={shell} stroke={TXT} strokeWidth="1.5" />
      <path d={`M${cx - 40},100 L${cx - 70},200 M${cx + 40},100 L${cx + 70},200`} stroke={shell} strokeWidth="16" strokeLinecap="round" />
      <path d={`M${cx - 40},100 L${cx - 70},200 M${cx + 40},100 L${cx + 70},200`} stroke={TXT} strokeWidth="1" fill="none" />
      <ellipse cx={cx} cy={150} rx={30 * core} ry={55 * core} fill={BAD} opacity="0.85" />
      <circle cx={cx} cy={60} r={14 * Math.max(0.8, core)} fill={BAD} opacity="0.85" />
    </g>
  )
}

export function CoreShell() {
  return (
    <svg className="diagram" viewBox="0 0 640 360" role="img" aria-label="Core and shell: in warm conditions the warm core extends to the limbs; in the cold the shell cools and the core shrinks to the trunk and head">
      <Person cx={170} core={1} shell="var(--warn-soft)" />
      <Person cx={470} core={0.65} shell="var(--info-soft)" />
      <text x={170} y={330} textAnchor="middle" fontSize="14" fontWeight="700">Warm environment</text>
      <text x={170} y={348} textAnchor="middle" fontSize="11" className="muted-fill">skin blood flow high · shell thin · hands warm</text>
      <text x={470} y={330} textAnchor="middle" fontSize="14" fontWeight="700">Cold environment</text>
      <text x={470} y={348} textAnchor="middle" fontSize="11" className="muted-fill">vasoconstriction · thick cool shell · core defended</text>
      <rect x={265} y={20} width={110} height={70} rx={8} fill={P2} stroke={LINE} />
      <circle cx={282} cy={40} r={7} fill={BAD} opacity="0.85" />
      <text x={295} y={44} fontSize="11">core ≈ 37 °C</text>
      <circle cx={282} cy={66} r={7} fill="var(--info-soft)" stroke={TXT} />
      <text x={295} y={70} fontSize="11">shell 20–35 °C</text>
    </svg>
  )
}

export function ThermoControl() {
  const box = (x: number, y: number, w: number, t: string, s: string, fill = P2) => (
    <g>
      <rect x={x} y={y} width={w} height={52} rx={10} fill={fill} stroke={LINE} />
      <text x={x + w / 2} y={y + 22} textAnchor="middle" fontSize="13" fontWeight="700">{t}</text>
      <text x={x + w / 2} y={y + 40} textAnchor="middle" fontSize="10.5" className="muted-fill">{s}</text>
    </g>
  )
  return (
    <svg className="diagram" viewBox="0 0 680 345" role="img" aria-label="Thermoregulation as a control loop: skin and core sensors feed the hypothalamus, which drives vasomotor tone, shivering, sweating and behaviour">
      <defs><Arrow id="tc" color={A} /></defs>
      {box(20, 20, 170, 'Skin sensors', 'early warning: skin cooling')}
      {box(20, 110, 170, 'Core sensors', 'blood temperature, spinal cord')}
      {box(250, 65, 180, 'Hypothalamus', 'compares with set point ≈ 37 °C', 'var(--accent-soft)')}
      {box(490, 10, 170, 'Vasomotor tone', 'constrict ↔ dilate skin vessels')}
      {box(490, 80, 170, 'Shivering', 'heat ×2–5, burns glycogen')}
      {box(490, 150, 170, 'Sweating', 'up to 1–2 L/h; needs water')}
      {box(490, 220, 170, 'Behaviour', 'layers, shelter, pace — strongest!', 'var(--ok-soft)')}
      {[45, 135].map((y) => <line key={y} x1={190} y1={y + 1} x2={248} y2={91} stroke={A} strokeWidth="2" markerEnd="url(#tc)" />)}
      {[36, 106, 176, 246].map((y) => <line key={y} x1={430} y1={91} x2={488} y2={y} stroke={A} strokeWidth="2" markerEnd="url(#tc)" />)}
      <path d="M575,275 Q575,315 340,315 Q100,315 105,165" fill="none" stroke={MUT} strokeWidth="1.5" strokeDasharray="5 4" markerEnd="url(#tc)" />
      <text x={340} y={338} textAnchor="middle" fontSize="11" className="muted-fill">feedback: effectors change heat flow → temperatures change → sensors</text>
    </svg>
  )
}

// ---------- Lesson 2: heat-loss mechanisms quantified ----------

const PARTITION_CASES: { label: string; i: HBInput }[] = [
  { label: 'Dry, calm, 10 °C, walking', i: { ta: 10, wind: 5, rh: 60, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: false, act: 'walk', shelter: 'none', sky: 'overcast' } },
  { label: 'Clear night, −5 °C, resting on ground', i: { ta: -5, wind: 5, rh: 60, wet: 'dry', fibre: 'synthetic', clo: 2.8, shell: true, act: 'rest', shelter: 'none', sky: 'night-clear' } },
  { label: 'Wet cotton, 5 °C, 30 km/h, resting', i: { ta: 5, wind: 30, rh: 90, wet: 'soaked', fibre: 'cotton', clo: 1.0, shell: false, act: 'rest', shelter: 'none', sky: 'overcast' } },
  { label: 'Desert, 40 °C, sun, walking', i: { ta: 40, wind: 10, rh: 15, wet: 'dry', fibre: 'cotton', clo: 0.4, shell: false, act: 'walk', shelter: 'none', sky: 'sun' } },
]

export function HeatPartition() {
  const cols = [
    { k: 'conv', label: 'Convection', c: INFO },
    { k: 'rad', label: 'Radiation', c: A2 },
    { k: 'cond', label: 'Conduction', c: GROUND },
    { k: 'evap', label: 'Breath + wet clothing', c: SKY },
    { k: 'sweat', label: 'Sweat', c: OK },
  ] as const
  const rows = PARTITION_CASES.map((p) => {
    const r = model(p.i)
    return { label: p.label, v: { conv: Math.max(0, r.conv), rad: Math.max(0, r.rad), cond: Math.max(0, r.cond), evap: r.eres + r.wetEvap, sweat: r.sweat } }
  })
  const max = Math.max(...rows.map((r) => Object.values(r.v).reduce((a, b) => a + b, 0)))
  const sx = (w: number) => (w / max) * 400
  return (
    <svg className="diagram" viewBox="0 0 680 300" role="img" aria-label="Stacked bars of heat loss by mechanism in four conditions, computed with the course heat model">
      {rows.map((r, k) => {
        let x = 220
        const y = 20 + k * 60
        return (
          <g key={r.label}>
            <text x={210} y={y + 16} textAnchor="end" fontSize="11.5" fontWeight="600">{r.label}</text>
            {cols.map((c) => {
              const w = sx(r.v[c.k])
              const el = <rect key={c.k} x={x} y={y} width={Math.max(0, w)} height={24} fill={c.c} opacity="0.85" />
              const lbl = w > 34 ? <text key={`${c.k}t`} x={x + w / 2} y={y + 16} fontSize="10" textAnchor="middle" style={{ fill: '#fff' }}>{Math.round(r.v[c.k])}</text> : null
              x += w
              return [el, lbl]
            })}
            <text x={x + 6} y={y + 16} fontSize="11" className="muted-fill">{Math.round(Object.values(r.v).reduce((a, b) => a + b, 0))} W</text>
          </g>
        )
      })}
      {cols.map((c, i) => (
        <g key={c.k}>
          <rect x={20 + i * 130} y={264} width={12} height={12} fill={c.c} />
          <text x={36 + i * 130} y={275} fontSize="11">{c.label}</text>
        </g>
      ))}
      <text x={340} y={296} textAnchor="middle" fontSize="10" className="muted-fill">Heat lost (W), from the course’s simplified model. In the desert, air, ground and sun add heat; sweat must remove it all.</text>
    </svg>
  )
}

export function WindChillChart() {
  const temps = [5, 0, -10, -20, -30]
  const winds = Array.from({ length: 13 }, (_, i) => 5 + i * 5)
  const x0 = 60, y0 = 280, w = 540, h = 250
  const sx = (v: number) => x0 + ((v - 5) / 60) * w
  const sy = (t: number) => y0 - ((t + 50) / 60) * h
  const colors = [OK, INFO, A, A2, BAD]
  return (
    <svg className="diagram" viewBox="0 0 640 334" role="img" aria-label="Wind chill temperature versus wind speed for five air temperatures, using the 2001 NWS formula">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="wind at 10 m (km/h)" yl="wind chill (°C)" />
      {[-50, -40, -30, -20, -10, 0, 10].map((t) => (
        <g key={t}>
          <line x1={x0} x2={x0 + w} y1={sy(t)} y2={sy(t)} stroke={LINE} strokeWidth="0.6" />
          <text x={x0 - 6} y={sy(t) + 4} fontSize="10" textAnchor="end" className="muted-fill">{t}</text>
        </g>
      ))}
      {[5, 20, 35, 50].map((v) => <text key={v} x={sx(v)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{v}</text>)}
      <rect x={x0} y={sy(-50)} width={w} height={sy(-28) - sy(-50)} fill={BAD} opacity="0.08" />
      <text x={x0 + w - 4} y={sy(-47)} fontSize="10" textAnchor="end" style={{ fill: BAD }}>−28 °C and below: exposed skin can freeze within 10–30 min, faster as it falls</text>
      {temps.map((t, k) => (
        <g key={t}>
          <path d={winds.map((v, i) => `${i ? 'L' : 'M'}${sx(v)},${sy(windChill(t, v))}`).join(' ')} fill="none" stroke={colors[k]} strokeWidth="2.4" />
          <text x={sx(65) + 4} y={sy(windChill(t, 65)) + 4} fontSize="11" style={{ fill: colors[k] }}>{t} °C</text>
        </g>
      ))}
      <text x={320} y={328} textAnchor="middle" fontSize="10" className="muted-fill">Wind chill describes bare-skin cooling. It cannot drop a wet object below the air temperature.</text>
    </svg>
  )
}

export function WetClothing() {
  const rows = [
    { f: 'Cotton', d: 1, m: 0.55, s: 0.25 },
    { f: 'Wool', d: 1, m: 0.8, s: 0.5 },
    { f: 'Synthetic', d: 1, m: 0.85, s: 0.6 },
    { f: 'Down', d: 1, m: 0.6, s: 0.2 },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Fraction of dry insulation retained by cotton, wool, synthetic and down when damp and soaked">
      {['Dry', 'Damp', 'Soaked'].map((h, j) => <text key={h} x={230 + j * 140} y={24} fontSize="12" fontWeight="700" textAnchor="middle">{h}</text>)}
      {rows.map((r, i) => (
        <g key={r.f}>
          <text x={120} y={62 + i * 50} textAnchor="end" fontSize="13" fontWeight="600">{r.f}</text>
          {[r.d, r.m, r.s].map((v, j) => (
            <g key={j}>
              <rect x={170 + j * 140} y={44 + i * 50} width={120} height={26} rx={5} fill={P2} stroke={LINE} />
              <rect x={170 + j * 140} y={44 + i * 50} width={120 * v} height={26} rx={5} fill={v > 0.7 ? OK : v > 0.45 ? WARN : BAD} opacity="0.85" />
              <text x={230 + j * 140} y={62 + i * 50} textAnchor="middle" fontSize="11" fontWeight="700">{Math.round(v * 100)} %</text>
            </g>
          ))}
        </g>
      ))}
      <text x={320} y={250} textAnchor="middle" fontSize="10" className="muted-fill">Insulation retained (illustrative values used in the course model). Evaporating the water costs a further ≈2.4 MJ per litre.</text>
    </svg>
  )
}

// ---------- Lesson 3: hypothermia ----------

export function HypothermiaStages() {
  const stages = [
    { t0: 37, t1: 35, c: OK, name: 'Cold stressed', sign: 'Shivering, normal mental status, can care for self. Not hypothermic.' },
    { t0: 35, t1: 32, c: WARN, name: 'Mild (35–32 °C)', sign: 'Shivering, "umbles": stumbles, mumbles, fumbles, grumbles; judgment impaired.' },
    { t0: 32, t1: 28, c: A2, name: 'Moderate (32–28 °C)', sign: 'Consciousness falls; shivering may stop; arrhythmia risk rises.' },
    { t0: 28, t1: 24, c: BAD, name: 'Severe (< 28 °C)', sign: 'Unconscious; vital signs faint or absent; high risk of cardiac arrest.' },
  ]
  const y = (t: number) => 30 + (37 - t) * 22
  return (
    <svg className="diagram" viewBox="0 0 660 346" role="img" aria-label="Hypothermia stages by core temperature following the WMS 2019 guideline: cold stressed, mild, moderate, severe">
      <rect x={60} y={y(37)} width={30} height={y(24) - y(37)} rx={15} fill={P2} stroke={LINE} />
      {stages.map((s) => (
        <g key={s.name}>
          <rect x={60} y={y(s.t0)} width={30} height={y(s.t1) - y(s.t0)} fill={s.c} opacity="0.85" />
          <line x1={92} x2={120} y1={(y(s.t0) + y(s.t1)) / 2} y2={(y(s.t0) + y(s.t1)) / 2} stroke={s.c} strokeWidth="2" />
          <text x={126} y={(y(s.t0) + y(s.t1)) / 2 - 3} fontSize="13" fontWeight="700">{s.name}</text>
          <text x={126} y={(y(s.t0) + y(s.t1)) / 2 + 13} fontSize="11" className="muted-fill">{s.sign}</text>
        </g>
      ))}
      {[37, 35, 32, 28, 24].map((t) => <text key={t} x={54} y={y(t) + 4} fontSize="11" textAnchor="end">{t} °C</text>)}
      <text x={330} y={340} textAnchor="middle" fontSize="10" className="muted-fill">In the field you rarely have a core thermometer: classify by mental status and shivering, and treat the worst case you cannot rule out.</text>
    </svg>
  )
}

export function Afterdrop() {
  const x0 = 60, y0 = 260, w = 540, h = 220
  const sx = (m: number) => x0 + (m / 180) * w
  const sy = (t: number) => y0 - ((t - 30) / 8) * h
  const pts = (f: (m: number) => number) => Array.from({ length: 91 }, (_, i) => i * 2).map((m, i) => `${i ? 'L' : 'M'}${sx(m)},${sy(f(m))}`).join(' ')
  const gentle = (m: number) => (m < 60 ? 37 - m * 0.05 : m < 75 ? 34 - (m - 60) * 0.02 : 33.7 + (m - 75) * 0.012)
  const rough = (m: number) => (m < 60 ? 37 - m * 0.05 : m < 85 ? 34 - (m - 60) * 0.045 : 32.9 + (m - 85) * 0.012)
  return (
    <svg className="diagram" viewBox="0 0 640 310" role="img" aria-label="Afterdrop: core temperature keeps falling after rescue from the cold, more when the patient is handled roughly or made to exercise">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="minutes" yl="core °C" />
      {[30, 32, 34, 36, 38].map((t) => <text key={t} x={x0 - 6} y={sy(t) + 4} fontSize="10" textAnchor="end" className="muted-fill">{t}</text>)}
      {[0, 60, 120, 180].map((m) => <text key={m} x={sx(m)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{m}</text>)}
      <line x1={sx(60)} x2={sx(60)} y1={y0} y2={y0 - h} stroke={MUT} strokeDasharray="4 4" />
      <text x={sx(60) + 4} y={y0 - h + 12} fontSize="11" fontWeight="700">rescued, insulated</text>
      <path d={pts(gentle)} fill="none" stroke={OK} strokeWidth="2.5" />
      <path d={pts(rough)} fill="none" stroke={BAD} strokeWidth="2.5" strokeDasharray="6 4" />
      <text x={sx(125)} y={sy(35.2)} fontSize="11" style={{ fill: OK }}>gentle, horizontal, wrapped, heat to trunk</text>
      <text x={sx(95)} y={sy(32.2)} fontSize="11" style={{ fill: BAD }}>rough handling / walking / limbs rubbed: bigger afterdrop</text>
      <text x={320} y={305} textAnchor="middle" fontSize="10" className="muted-fill">Illustrative shape only. Core cooling continues for a while after rescue while cold shell tissue exchanges heat with the core.</text>
    </svg>
  )
}

export function HypothermiaWrap() {
  const layers = [
    { t: 'Waterproof / windproof outer (tarp, bivy, plastic)', c: INFO },
    { t: 'Insulation: sleeping bags, jackets — especially underneath', c: A2 },
    { t: 'Vapour barrier (plastic sheet or foil) if clothes are wet', c: MUT },
    { t: 'Heat packs / warm bottles on chest, armpits, back — not on bare skin', c: BAD },
  ]
  return (
    <svg className="diagram" viewBox="0 0 740 260" role="img" aria-label="Hypothermia wrap from outside in: waterproof outer, insulation including underneath, vapour barrier, heat sources on the trunk">
      {layers.map((l, i) => (
        <g key={l.t}>
          <rect x={30 + i * 18} y={40 + i * 18} width={300 - i * 36} height={140 - i * 36} rx={60 - i * 10} fill={l.c} opacity={0.15 + i * 0.1} stroke={l.c} />
          <line x1={330 - i * 18} y1={55 + i * 30} x2={370} y2={55 + i * 30} stroke={LINE} />
          <text x={376} y={59 + i * 30} fontSize="11.5">{l.t}</text>
        </g>
      ))}
      <rect x={30} y={190} width={300} height={16} rx={4} fill={GROUND} opacity="0.7" />
      <text x={180} y={228} fontSize="11" textAnchor="middle" className="muted-fill">thick insulation from the ground — conduction is often the biggest loss</text>
      <text x={330} y={252} textAnchor="middle" fontSize="11" fontWeight="700">Keep horizontal · handle gently · cover the head · evacuate moderate/severe</text>
    </svg>
  )
}

// ---------- Lesson 4: heat stress ----------

export function HeatSpectrum() {
  const items = [
    { t: 'Heat cramps / heat oedema / heat syncope', s: 'minor; rest, shade, fluids + salt', c: OK },
    { t: 'Heat exhaustion', s: 'fatigue, headache, nausea, dizziness; mental status normal', c: WARN },
    { t: 'Heat stroke', s: 'CNS dysfunction (confusion, collapse, seizure) + usually > 40 °C', c: BAD },
  ]
  return (
    <svg className="diagram" viewBox="0 0 680 250" role="img" aria-label="Heat illness spectrum from minor illness to heat exhaustion to heat stroke; the dividing line is central nervous system dysfunction">
      <defs>
        <linearGradient id="s8hs" x1="0" x2="1">
          <stop offset="0" stopColor="var(--ok)" />
          <stop offset="0.55" stopColor="var(--warn)" />
          <stop offset="1" stopColor="var(--bad)" />
        </linearGradient>
      </defs>
      <rect x={20} y={40} width={640} height={24} rx={12} fill="url(#s8hs)" opacity="0.85" />
      <text x={20} y={30} fontSize="11" className="muted-fill">heat strain rising →</text>
      {items.map((it, i) => (
        <g key={it.t}>
          <rect x={20 + i * 215} y={90} width={205} height={90} rx={10} fill={P2} stroke={it.c} strokeWidth="2" />
          <text x={122 + i * 215} y={115} fontSize="12.5" fontWeight="700" textAnchor="middle">{it.t.length > 30 ? 'Minor heat illness' : it.t}</text>
          <foreignObject x={28 + i * 215} y={122} width={190} height={56}>
            <div style={{ fontSize: 11, color: 'var(--muted)', textAlign: 'center' }}>{i === 0 ? it.t + ' — ' + it.s : it.s}</div>
          </foreignObject>
        </g>
      ))}
      <line x1={450} x2={450} y1={30} y2={200} stroke={BAD} strokeWidth="2.5" strokeDasharray="6 4" />
      <text x={664} y={214} fontSize="12" fontWeight="700" textAnchor="end" style={{ fill: BAD }}>Confusion = heat stroke until proven otherwise</text>
      <text x={664} y={232} fontSize="11" textAnchor="end" className="muted-fill">cool first (cold-water immersion), transport second</text>
    </svg>
  )
}

export function WbgtFlags() {
  const cats = [
    { lo: 0, hi: 25.6, c: OK, t: '< 25.6 °C', a: 'normal precautions' },
    { lo: 25.6, hi: 27.8, c: 'var(--info)', t: '25.6–27.7', a: 'Cat 1: watch the unacclimatised' },
    { lo: 27.8, hi: 29.4, c: WARN, t: '27.8–29.4', a: 'Cat 2: more rest, more shade' },
    { lo: 29.4, hi: 31.1, c: A2, t: '29.4–31.0', a: 'Cat 3: limit hard work' },
    { lo: 31.1, hi: 32.2, c: BAD, t: '31.1–32.1', a: 'Cat 4: short work, long rest' },
    { lo: 32.2, hi: 35, c: 'var(--text)', t: '≥ 32.2', a: 'Cat 5: stop non-essential exertion' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 680 270" role="img" aria-label="WBGT formula and US Army heat categories">
      <text x={340} y={26} textAnchor="middle" fontSize="15" fontWeight="700">WBGT = 0.7 × natural wet bulb + 0.2 × black globe + 0.1 × dry bulb</text>
      <text x={340} y={46} textAnchor="middle" fontSize="11" className="muted-fill">humidity (can sweat evaporate?) dominates · sun and radiant heat next · air temperature least</text>
      {[['Wet bulb', 0.7, INFO], ['Globe (sun)', 0.2, A2], ['Dry bulb', 0.1, MUT]].map(([l, v, c], i) => (
        <g key={String(l)}>
          <rect x={120 + (i === 0 ? 0 : i === 1 ? 308 : 396)} y={60} width={440 * Number(v)} height={22} fill={String(c)} opacity="0.85" />
          <text x={120 + (i === 0 ? 154 : i === 1 ? 352 : 418)} y={76} textAnchor="middle" fontSize="11" style={{ fill: '#fff' }}>{String(l)}</text>
        </g>
      ))}
      {cats.map((c, i) => (
        <g key={c.t}>
          <rect x={20 + i * 108} y={110} width={104} height={40} rx={6} fill={c.c} opacity="0.85" />
          <text x={72 + i * 108} y={135} textAnchor="middle" fontSize="11.5" fontWeight="700" style={{ fill: i === 5 ? 'var(--bg)' : '#fff' }}>{c.t}</text>
          <foreignObject x={20 + i * 108} y={156} width={104} height={60}>
            <div style={{ fontSize: 10.5, textAlign: 'center', color: 'var(--text)' }}>{c.a}</div>
          </foreignObject>
        </g>
      ))}
      <text x={340} y={250} textAnchor="middle" fontSize="10" className="muted-fill">Categories after US Army TB MED 507 (WBGT °C, rounded). Exact work/rest tables depend on workload, clothing and acclimatisation.</text>
    </svg>
  )
}

export function Acclimatisation() {
  const x0 = 60, y0 = 240, w = 540, h = 190
  const sx = (d: number) => x0 + (d / 14) * w
  const sy = (p: number) => y0 - (p / 100) * h
  const curve = (tau: number) => Array.from({ length: 57 }, (_, i) => i / 4).map((d, i) => `${i ? 'L' : 'M'}${sx(d)},${sy(100 * (1 - Math.exp(-d / tau)))}`).join(' ')
  const lines = [
    { tau: 1.8, c: BAD, t: 'heart rate falls' },
    { tau: 2.5, c: INFO, t: 'plasma volume expands' },
    { tau: 3.5, c: A2, t: 'core temperature during work falls' },
    { tau: 5, c: OK, t: 'sweat earlier, more, less salty' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-label="Heat acclimatisation: most adaptations develop over about 7 to 14 days of daily heat exposure with exercise">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="days of daily heat exposure with exercise" yl="% of full adaptation" />
      {[0, 50, 100].map((p) => <text key={p} x={x0 - 6} y={sy(p) + 4} fontSize="10" textAnchor="end" className="muted-fill">{p}</text>)}
      {[0, 7, 14].map((d) => <text key={d} x={sx(d)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{d}</text>)}
      {lines.map((l, i) => (
        <g key={l.t}>
          <path d={curve(l.tau)} fill="none" stroke={l.c} strokeWidth="2.3" />
          <text x={sx(14) - 4} y={sy(100 * (1 - Math.exp(-14 / l.tau))) + 14 + i * 13} fontSize="11" textAnchor="end" style={{ fill: l.c }}>{l.t}</text>
        </g>
      ))}
      <text x={320} y={282} textAnchor="middle" fontSize="10" className="muted-fill">Illustrative time courses. Adaptations fade over a few weeks without heat exposure.</text>
    </svg>
  )
}

// ---------- Lesson 5: hydration and electrolytes ----------

export function SodiumBalance() {
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Water and sodium balance: losing water faster than sodium concentrates the blood; replacing sweat with plain water in large excess dilutes it to hyponatremia">
      <defs><Arrow id="sb" color={A} /></defs>
      <rect x={250} y={120} width={140} height={90} rx={12} fill={OK} opacity="0.2" stroke={OK} />
      <text x={320} y={158} textAnchor="middle" fontSize="13" fontWeight="700">Normal</text>
      <text x={320} y={176} textAnchor="middle" fontSize="11">Na⁺ 135–145 mmol/L</text>
      <rect x={20} y={20} width={200} height={80} rx={12} fill={A2} opacity="0.18" stroke={A2} />
      <text x={120} y={50} textAnchor="middle" fontSize="12.5" fontWeight="700">Dehydration</text>
      <text x={120} y={68} textAnchor="middle" fontSize="11">sweat not replaced</text>
      <text x={120} y={84} textAnchor="middle" fontSize="11">blood concentrated, Na⁺ ↑</text>
      <rect x={420} y={20} width={200} height={80} rx={12} fill={BAD} opacity="0.18" stroke={BAD} />
      <text x={520} y={50} textAnchor="middle" fontSize="12.5" fontWeight="700">Hyponatremia</text>
      <text x={520} y={68} textAnchor="middle" fontSize="11">drinking far beyond losses</text>
      <text x={520} y={84} textAnchor="middle" fontSize="11">blood diluted, Na⁺ &lt; 135</text>
      <line x1={260} y1={125} x2={210} y2={100} stroke={A} strokeWidth="2" markerEnd="url(#sb)" />
      <line x1={380} y1={125} x2={430} y2={100} stroke={A} strokeWidth="2" markerEnd="url(#sb)" />
      <rect x={20} y={240} width={600} height={70} rx={12} fill={P2} stroke={LINE} />
      <text x={320} y={264} textAnchor="middle" fontSize="12.5" fontWeight="700">Aim: replace most of what you lose, not more — drink to thirst, eat salty food</text>
      <text x={320} y={284} textAnchor="middle" fontSize="11" className="muted-fill">Sweat carries roughly 0.5–2 g sodium per litre (varies widely). ORS: glucose + sodium are absorbed together.</text>
      <text x={320} y={300} textAnchor="middle" fontSize="11" className="muted-fill">Headache, nausea and confusion can come from either — weight change and drinking history tell them apart.</text>
    </svg>
  )
}

export function DehydrationEffects() {
  const x0 = 60, y0 = 240, w = 540
  const sx = (p: number) => x0 + (p / 10) * w
  const marks = [
    { p: 1, t: 'thirst' },
    { p: 2, t: 'endurance & thinking measurably worse' },
    { p: 4, t: 'heat tolerance falls; core runs ~0.1–0.2 °C higher per %' },
    { p: 6, t: 'tingling, headache, collapse risk' },
    { p: 10, t: 'life-threatening' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-label="Effects of dehydration by percentage of body mass lost">
      <defs>
        <linearGradient id="s8dh" x1="0" x2="1">
          <stop offset="0" stopColor="var(--ok)" />
          <stop offset="0.4" stopColor="var(--warn)" />
          <stop offset="1" stopColor="var(--bad)" />
        </linearGradient>
      </defs>
      <rect x={x0} y={y0 - 30} width={w} height={26} rx={8} fill="url(#s8dh)" opacity="0.85" />
      {Array.from({ length: 11 }, (_, i) => <text key={i} x={sx(i)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{i}%</text>)}
      {marks.map((m, i) => (
        <g key={m.t}>
          <line x1={sx(m.p)} x2={sx(m.p)} y1={y0 - 34} y2={y0 - 50 - i * 30} stroke={TXT} />
          <text x={sx(m.p) + (m.p > 7 ? -4 : 4)} y={y0 - 52 - i * 30} fontSize="11" textAnchor={m.p > 7 ? 'end' : 'start'}>{m.t}</text>
        </g>
      ))}
      <text x={320} y={282} textAnchor="middle" fontSize="10" className="muted-fill">Water lost as % of body mass (70 kg: 1 % = 0.7 L). Approximate; heat and exertion make each step worse.</text>
    </svg>
  )
}

// ---------- Lesson 6: energy metabolism ----------

export function FuelCurves() {
  const x0 = 60, y0 = 250, w = 540, h = 210
  const sx = (m: number) => x0 + (m / 240) * w
  const sy = (p: number) => y0 - (p / 100) * h
  const fat = (m: number) => 30 + 35 * (1 - Math.exp(-m / 90))
  const gly = (m: number) => Math.max(0, 100 - m * 0.42)
  const pts = (f: (m: number) => number) => Array.from({ length: 49 }, (_, i) => i * 5).map((m, i) => `${i ? 'L' : 'M'}${sx(m)},${sy(f(m))}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="During steady moderate exercise, muscle glycogen falls while the share of energy from fat rises">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="minutes of steady, moderate exercise" yl="%" />
      {[0, 50, 100].map((p) => <text key={p} x={x0 - 6} y={sy(p) + 4} fontSize="10" textAnchor="end" className="muted-fill">{p}</text>)}
      {[0, 60, 120, 180, 240].map((m) => <text key={m} x={sx(m)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{m}</text>)}
      <path d={pts(gly)} fill="none" stroke={WARN} strokeWidth="2.6" />
      <path d={pts(fat)} fill="none" stroke={INFO} strokeWidth="2.6" />
      <text x={sx(150)} y={sy(gly(150)) - 8} fontSize="11.5" style={{ fill: WARN }}>muscle glycogen remaining</text>
      <text x={sx(150)} y={sy(fat(150)) - 8} fontSize="11.5" style={{ fill: INFO }}>share of energy from fat</text>
      <line x1={sx(200)} x2={sx(200)} y1={y0} y2={y0 - h} stroke={BAD} strokeDasharray="4 4" />
      <text x={sx(200) - 4} y={y0 - h + 12} fontSize="11" textAnchor="end" style={{ fill: BAD }}>“the wall”: pace must drop</text>
      <text x={320} y={292} textAnchor="middle" fontSize="10" className="muted-fill">Illustrative. Harder work burns glycogen faster; eating carbohydrate on the move slows the fall.</text>
    </svg>
  )
}

export function StarvationTimeline() {
  const ph = [
    { d0: 0, d1: 1, c: WARN, t: 'Day 0–1', s: 'liver glycogen used up; hunger, irritability' },
    { d0: 1, d1: 3, c: A2, t: 'Days 1–3', s: 'gluconeogenesis from protein; ketones rising' },
    { d0: 3, d1: 21, c: INFO, t: 'Weeks 1–3', s: 'ketosis: brain runs largely on ketones; protein spared' },
    { d0: 21, d1: 50, c: BAD, t: 'Weeks 3+', s: 'fat stores deplete; muscle and organ protein lost; danger' },
  ]
  const sx = (d: number) => 40 + (Math.log10(d + 1) / Math.log10(51)) * 580
  return (
    <svg className="diagram" viewBox="0 0 660 230" role="img" aria-label="Starvation timeline: glycogen, then gluconeogenesis, then ketosis, then protein loss">
      {ph.map((p, i) => (
        <g key={p.t}>
          <rect x={sx(p.d0)} y={50} width={sx(p.d1) - sx(p.d0) - 2} height={34} rx={6} fill={p.c} opacity="0.85" />
          <text x={(sx(p.d0) + sx(p.d1)) / 2} y={72} textAnchor="middle" fontSize="11.5" fontWeight="700" style={{ fill: '#fff' }}>{p.t}</text>
          <foreignObject x={sx(p.d0)} y={92 + (i % 2) * 44} width={Math.max(150, sx(p.d1) - sx(p.d0))} height={44}>
            <div style={{ fontSize: 11, color: 'var(--text)' }}>{p.s}</div>
          </foreignObject>
        </g>
      ))}
      <text x={330} y={30} textAnchor="middle" fontSize="12" fontWeight="700">Without food (with water, at rest): what the body burns</text>
      <text x={330} y={220} textAnchor="middle" fontSize="10" className="muted-fill">Log time axis. Performance and mood decline within days — long before life is threatened. Water and warmth come first.</text>
    </svg>
  )
}

export function EnergyBudget() {
  const rows = [
    { t: 'Resting, 24 h (temperate)', k: 1700 },
    { t: 'Hiking day, temperate', k: 3200 },
    { t: 'Cold-weather travel, hauling', k: 4500 },
    { t: 'Heavy sledge hauling, polar', k: 6000 },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 230" role="img" aria-label="Approximate daily energy expenditure for rest, hiking, cold-weather travel and polar sledge hauling">
      {rows.map((r, i) => (
        <g key={r.t}>
          <text x={220} y={44 + i * 44} textAnchor="end" fontSize="12">{r.t}</text>
          <rect x={230} y={28 + i * 44} width={(r.k / 6500) * 320} height={24} rx={5} fill={[OK, INFO, A2, BAD][i]} opacity="0.85" />
          <text x={236 + (r.k / 6500) * 320} y={45 + i * 44} fontSize="11.5" fontWeight="700">≈ {r.k.toLocaleString('en-US')} kcal</text>
        </g>
      ))}
      <text x={320} y={216} textAnchor="middle" fontSize="10" className="muted-fill">Approximate values for a 70 kg adult. Cold adds cost through heavy clothing, snow travel and shivering.</text>
    </svg>
  )
}

// ---------- Lesson 7: sleep, fatigue, night vision ----------

export function DarkAdaptation() {
  const x0 = 70, y0 = 250, w = 520, h = 210
  const sx = (m: number) => x0 + (m / 40) * w
  const sy = (s: number) => y0 - (s / 6) * h
  const cone = (m: number) => 2 * (1 - Math.exp(-m / 2))
  const rod = (m: number) => (m < 7 ? 0 : 5.6 * (1 - Math.exp(-(m - 7) / 9)))
  const both = (m: number) => Math.max(cone(m), rod(m))
  const pts = (f: (m: number) => number) => Array.from({ length: 81 }, (_, i) => i / 2).map((m, i) => `${i ? 'L' : 'M'}${sx(m)},${sy(f(m))}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Dark adaptation curve: cones adapt within about 5 to 10 minutes, rods continue for 20 to 40 minutes">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="minutes in the dark" yl="sensitivity (log units, illustrative)" />
      {[0, 10, 20, 30, 40].map((m) => <text key={m} x={sx(m)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{m}</text>)}
      <path d={pts(cone)} fill="none" stroke={A2} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d={pts(rod)} fill="none" stroke={INFO} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d={pts(both)} fill="none" stroke={TXT} strokeWidth="2.6" />
      <text x={sx(2)} y={sy(2.3)} fontSize="11" style={{ fill: A2 }}>cones</text>
      <text x={sx(26)} y={sy(5.2)} fontSize="11" style={{ fill: INFO }}>rods</text>
      <line x1={sx(8)} x2={sx(8)} y1={y0} y2={y0 - h} stroke={MUT} strokeDasharray="3 4" />
      <text x={sx(8) + 4} y={y0 - h + 12} fontSize="10.5">rod–cone break ≈ 5–10 min</text>
      <text x={320} y={292} textAnchor="middle" fontSize="10" className="muted-fill">One glance at a bright white light resets much of it. Red, dim light preserves rod adaptation best.</text>
    </svg>
  )
}

export function SleepPerformance() {
  const x0 = 60, y0 = 240, w = 540, h = 190
  const sx = (hr: number) => x0 + ((hr - 8) / 24) * w
  const sy = (p: number) => y0 - ((p - 40) / 60) * h
  const perf = (hr: number) => {
    const clock = 7 + hr
    const circ = -8 * Math.cos(((clock - 5) / 24) * 2 * Math.PI) // circadian trough near 05:00
    return Math.min(100, Math.max(40, 92 - Math.max(0, hr - 16) * 1.6 + circ))
  }
  const pts = Array.from({ length: 97 }, (_, i) => 8 + i / 4).map((hr, i) => `${i ? 'L' : 'M'}${sx(hr)},${sy(perf(hr))}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-label="Performance falls with hours awake and dips in the early-morning circadian trough">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="hours awake (woke at 07:00)" yl="alertness / performance (illustrative)" />
      {[8, 16, 24, 32].map((hr) => <text key={hr} x={sx(hr)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{hr}</text>)}
      <path d={pts} fill="none" stroke={A} strokeWidth="2.6" />
      <line x1={sx(18)} x2={sx(18)} y1={y0} y2={y0 - h} stroke={WARN} strokeDasharray="4 4" />
      <text x={sx(18) + 4} y={y0 - h + 12} fontSize="10.5" style={{ fill: WARN }}>17–19 h awake ≈ BAC 0.05 %</text>
      <line x1={sx(22)} x2={sx(22)} y1={y0} y2={y0 - h} stroke={BAD} strokeDasharray="4 4" />
      <text x={sx(22) + 4} y={y0 - h + 28} fontSize="10.5" style={{ fill: BAD }}>circadian low 03:00–06:00</text>
      <text x={320} y={282} textAnchor="middle" fontSize="10" className="muted-fill">Shape after Williamson &amp; Feyer (2000) and circadian research; individual curves vary.</text>
    </svg>
  )
}

// ---------- Lesson 8: altitude ----------

export function AltitudeOxygen() {
  const x0 = 60, y0 = 260, w = 540, h = 220
  const sx = (m: number) => x0 + (m / 9000) * w
  const sy = (kpa: number) => y0 - (kpa / 22) * h
  const pts = Array.from({ length: 91 }, (_, i) => i * 100).map((m, i) => `${i ? 'L' : 'M'}${sx(m)},${sy(inspiredPO2(m))}`).join(' ')
  const zones = [
    { a: 1500, b: 3500, c: WARN, t: 'high' },
    { a: 3500, b: 5500, c: A2, t: 'very high' },
    { a: 5500, b: 9000, c: BAD, t: 'extreme' },
  ]
  const marks = [
    { m: 0, t: 'sea level' },
    { m: 2500, t: 'AMS common above ~2,500 m' },
    { m: 5500, t: '≈ half sea-level O₂' },
    { m: 8849, t: 'Everest' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 310" role="img" aria-label="Inspired oxygen partial pressure falls with altitude: roughly half of the sea-level value at 5,500 metres">
      {zones.map((z) => (
        <g key={z.t}>
          <rect x={sx(z.a)} y={y0 - h} width={sx(z.b) - sx(z.a)} height={h} fill={z.c} opacity="0.1" />
          <text x={(sx(z.a) + sx(z.b)) / 2} y={y0 - h + 12} fontSize="10.5" textAnchor="middle" style={{ fill: z.c }}>{z.t}</text>
        </g>
      ))}
      <Axes x0={x0} y0={y0} w={w} h={h} xl="altitude (m)" yl="inspired PO₂ (kPa)" />
      {[0, 5, 10, 15, 20].map((k) => <text key={k} x={x0 - 6} y={sy(k) + 4} fontSize="10" textAnchor="end" className="muted-fill">{k}</text>)}
      {[0, 3000, 6000, 9000].map((m) => <text key={m} x={sx(m)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{m}</text>)}
      <path d={pts} fill="none" stroke={A} strokeWidth="2.6" />
      {marks.map((mk) => (
        <g key={mk.t}>
          <circle cx={sx(mk.m)} cy={sy(inspiredPO2(mk.m))} r={4} fill={A} />
          <text x={mk.m > 8000 ? sx(mk.m) - 6 : sx(mk.m) + 6} y={sy(inspiredPO2(mk.m)) - 6} fontSize="10.5" textAnchor={mk.m > 8000 ? "end" : "start"}>{mk.t} ({inspiredPO2(mk.m).toFixed(1)} kPa)</text>
        </g>
      ))}
      <text x={320} y={302} textAnchor="middle" fontSize="10" className="muted-fill">Standard atmosphere; real pressure is a little higher near the equator and in summer. The oxygen fraction stays 20.9 %.</text>
    </svg>
  )
}

export function AscentProfile() {
  const x0 = 60, y0 = 250, w = 540, h = 210
  const sx = (d: number) => x0 + (d / 10) * w
  const sy = (m: number) => y0 - ((m - 1000) / 4000) * h
  const good = [2800, 3000, 3500, 3900, 3900, 4300, 4700, 4700, 5000, 5000]
  const bad = [3800, 4800, 4800, 4800, 4800, 4800, 4800, 4800, 4800, 4800]
  const step = (arr: number[]) => arr.map((m, d) => `${d ? 'L' : 'M'}${sx(d)},${sy(m)} L${sx(d + 1)},${sy(m)}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Sleeping-altitude profiles: a staged ascent with rest days versus a rapid ascent">
      <Axes x0={x0} y0={y0} w={w} h={h} xl="day" yl="sleeping altitude (m)" />
      {[1000, 2000, 3000, 4000, 5000].map((m) => <text key={m} x={x0 - 6} y={sy(m) + 4} fontSize="10" textAnchor="end" className="muted-fill">{m}</text>)}
      {Array.from({ length: 11 }, (_, d) => <text key={d} x={sx(d)} y={y0 + 14} fontSize="10" textAnchor="middle" className="muted-fill">{d}</text>)}
      <line x1={x0} x2={x0 + w} y1={sy(3000)} y2={sy(3000)} stroke={MUT} strokeDasharray="4 4" />
      <text x={x0 + 4} y={sy(3000) - 4} fontSize="10" className="muted-fill">above 3,000 m: ≤ 500 m/day gain in sleeping altitude, rest day every 3–4 days</text>
      <path d={step(good)} fill="none" stroke={OK} strokeWidth="2.6" />
      <path d={step(bad)} fill="none" stroke={BAD} strokeWidth="2.6" strokeDasharray="6 4" />
      <text x={sx(6.2)} y={sy(4450)} fontSize="11" style={{ fill: OK }}>staged ascent</text>
      <text x={sx(2.2)} y={sy(4950)} fontSize="11" style={{ fill: BAD }}>fly/drive in, sleep high: high AMS risk</text>
    </svg>
  )
}

// ---------- Lesson 9: cold water ----------

export function ColdWaterTimeline() {
  const ph = [
    { t: 'Cold shock', s: '0–3 min: gasp, hyperventilation, heart rate and blood pressure surge', a: 0, b: 1, c: BAD },
    { t: 'Swim failure', s: '~10–30 min: arms and hands stop working', a: 1, b: 2, c: A2 },
    { t: 'Hypothermia', s: '30 min+: core cools; unconscious around 30 °C', a: 2, b: 3, c: INFO },
    { t: 'Circum-rescue collapse', s: 'during and after rescue: blood pressure falls, afterdrop', a: 3, b: 4, c: MUT },
  ]
  return (
    <svg className="diagram" viewBox="0 0 680 230" role="img" aria-label="Four stages of cold-water immersion: cold shock, swim failure, hypothermia, circum-rescue collapse">
      {ph.map((p) => (
        <g key={p.t}>
          <path d={`M${20 + p.a * 160},40 L${160 + p.a * 160},40 L${178 + p.a * 160},70 L${160 + p.a * 160},100 L${20 + p.a * 160},100 L${38 + p.a * 160},70 Z`} fill={p.c} opacity="0.85" />
          <text x={98 + p.a * 160} y={75} textAnchor="middle" fontSize="12.5" fontWeight="700" style={{ fill: '#fff' }}>{p.t}</text>
          <foreignObject x={24 + p.a * 160} y={110} width={150} height={70}>
            <div style={{ fontSize: 11, color: 'var(--text)', textAlign: 'center' }}>{p.s}</div>
          </foreignObject>
        </g>
      ))}
      <text x={340} y={24} textAnchor="middle" fontSize="12" fontWeight="700">Most cold-water deaths happen in the first two stages — before hypothermia</text>
      <text x={340} y={210} textAnchor="middle" fontSize="11" className="muted-fill">1-10-1 (Giesbrecht): ~1 min to control breathing · ~10 min of useful movement · up to ~1 h before unconsciousness</text>
    </svg>
  )
}

export function HelpHuddle() {
  const pfd = 'var(--warn)'
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="HELP posture for one person in a lifejacket and huddle posture for a group">
      <rect x={0} y={120} width={640} height={140} fill={SKY} opacity="0.15" />
      <path d="M0,120 q20,-8 40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0 t40,0" fill="none" stroke={SKY} strokeWidth="2" />
      {/* HELP */}
      <circle cx={160} cy={100} r={16} fill={P2} stroke={TXT} />
      <rect x={138} y={116} width={44} height={46} rx={10} fill={pfd} opacity="0.9" />
      <path d="M142,130 L160,150 L178,130" stroke={TXT} strokeWidth="5" fill="none" strokeLinecap="round" />
      <path d="M150,162 Q140,190 165,195 Q185,196 175,170" stroke={TXT} strokeWidth="7" fill="none" strokeLinecap="round" />
      <text x={160} y={222} textAnchor="middle" fontSize="13" fontWeight="700">HELP</text>
      <text x={160} y={240} textAnchor="middle" fontSize="11" className="muted-fill">arms across chest, knees up, legs crossed, still</text>
      {/* huddle */}
      {[0, 1, 2, 3].map((k) => {
        const a = (k / 4) * Math.PI * 2
        const x = 460 + Math.cos(a) * 34
        const y = 110 + Math.sin(a) * 12
        return (
          <g key={k}>
            <circle cx={x} cy={y - 12} r={13} fill={P2} stroke={TXT} />
            <rect x={x - 15} y={y} width={30} height={34} rx={8} fill={pfd} opacity="0.9" />
          </g>
        )
      })}
      <text x={460} y={222} textAnchor="middle" fontSize="13" fontWeight="700">Huddle</text>
      <text x={460} y={240} textAnchor="middle" fontSize="11" className="muted-fill">chests together, arms linked, children in the middle</text>
      <text x={320} y={24} textAnchor="middle" fontSize="12" fontWeight="700">Both need flotation. Both reduce heat loss from the chest sides, armpits and groin.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's8-core-shell': CoreShell,
  's8-thermo-control': ThermoControl,
  's8-heat-partition': HeatPartition,
  's8-wind-chill': WindChillChart,
  's8-wet-clothing': WetClothing,
  's8-hypothermia-stages': HypothermiaStages,
  's8-afterdrop': Afterdrop,
  's8-hypothermia-wrap': HypothermiaWrap,
  's8-heat-spectrum': HeatSpectrum,
  's8-wbgt': WbgtFlags,
  's8-acclimatisation': Acclimatisation,
  's8-sodium-balance': SodiumBalance,
  's8-dehydration-effects': DehydrationEffects,
  's8-fuel-curves': FuelCurves,
  's8-starvation': StarvationTimeline,
  's8-energy-budget': EnergyBudget,
  's8-dark-adaptation': DarkAdaptation,
  's8-sleep-performance': SleepPerformance,
  's8-altitude-oxygen': AltitudeOxygen,
  's8-ascent-profile': AscentProfile,
  's8-cold-water-timeline': ColdWaterTimeline,
  's8-help-huddle': HelpHuddle,
}
