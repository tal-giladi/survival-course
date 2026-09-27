import type { ComponentType } from 'react'

// Stage 14 SVG diagrams (signaling and rescue). Colors only via CSS variables (light/dark aware).

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'
const MUTED = 'var(--muted)'

function Arrow({ id, color = MUTED }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Box({ x, y, w, h, title, sub, fill = P2 }: { x: number; y: number; w: number; h: number; title: string; sub?: string; fill?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={LINE} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="700">{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
}

/** Signal-mirror geometry: the normal bisects Sun and target; V-finger aiming; beam footprint. */
export function MirrorAim() {
  return (
    <svg className="diagram" viewBox="0 0 700 300" role="img" aria-label="Signal mirror aiming: the mirror's normal bisects the angle between the Sun and the target. With the V-finger method, you put the target between two extended fingers and tilt the mirror until the sun spot falls on the fingers, then rock it slightly. The flash is a narrow cone about half a degree wide, roughly 90 metres wide at 10 kilometres.">
      <defs><Arrow id="ma-a" color={A2} /><Arrow id="ma-b" color={A} /></defs>
      <rect x="0" y="0" width="700" height="210" fill={SKY} opacity="0.25" rx="10" />
      <circle cx="90" cy="45" r="22" fill={A2} />
      <text x="90" y="85" textAnchor="middle" fontSize="12" fontWeight="700">Sun</text>
      <line x1="110" y1="60" x2="222" y2="148" stroke={A2} strokeWidth="2.5" markerEnd="url(#ma-a)" />
      <line x1="220" y1="130" x2="258" y2="178" stroke={TXT} strokeWidth="6" />
      <line x1="239" y1="154" x2="286" y2="118" stroke={MUTED} strokeDasharray="3 3" />
      <text x="292" y="114" fontSize="10" className="muted-fill">mirror normal (bisects the angle)</text>
      <line x1="250" y1="160" x2="610" y2="100" stroke={A} strokeWidth="2.5" markerEnd="url(#ma-b)" />
      <polygon points="250,160 640,86 640,122" fill={A} opacity="0.12" />
      <text x="590" y="75" fontSize="12" fontWeight="700">aircraft</text>
      <path d="M600 92 l24 -4 l-6 8 z M612 88 l-2 -10 l6 0 z" fill={TXT} />
      <text x="430" y="170" fontSize="11">flash cone ≈ 0.5° wide (the Sun’s disc)</text>
      <text x="430" y="186" fontSize="11">≈ 90 m wide at 10 km — easy to miss</text>
      <line x1="0" y1="210" x2="700" y2="210" stroke={LINE} />
      <text x="20" y="236" fontSize="13" fontWeight="700">V-finger method</text>
      <text x="20" y="256" fontSize="11">1 · Extend one arm; frame the target in a V between two fingers.</text>
      <text x="20" y="272" fontSize="11">2 · Hold the mirror under your eye; tilt until the sun spot lands on the V.</text>
      <text x="20" y="288" fontSize="11">3 · Rock the mirror slightly so the spot flicks on and off the fingers — the target gets repeated flashes.</text>
      <text x="470" y="236" fontSize="13" fontWeight="700">Sighting mirror</text>
      <text x="470" y="256" fontSize="11">Look through the hole at the target;</text>
      <text x="470" y="272" fontSize="11">move the mirror until the aim spot</text>
      <text x="470" y="288" fontSize="11">sits on the target. Sweep gently.</text>
    </svg>
  )
}

/** Smoke colour against background, and wind flattening a smoke column. */
function Puff({ x, y, fill }: { x: number; y: number; fill: string }) {
  return (
    <g>
      {[0, 1, 2, 3].map((k) => <circle key={k} cx={x + k * 4} cy={y - k * 22} r={12 + k * 5} fill={fill} opacity={0.85 - k * 0.12} />)}
    </g>
  )
}

export function SmokeContrast() {
  return (
    <svg className="diagram" viewBox="0 0 700 250" role="img" aria-label="Smoke must contrast with its background: pale smoke from green or damp fuel shows against dark forest; dark smoke from rubber or oil shows against snow or a pale sky. Wind flattens a smoke column so it hugs the ground; smoke signals work best in calm air in the morning.">
      <rect x="10" y="20" width="210" height="190" rx="10" fill={GROUND} opacity="0.7" />
      <Puff x={100} y={170} fill="var(--panel)" />
      <text x="115" y="232" textAnchor="middle" fontSize="12" fontWeight="700">Pale smoke vs dark forest ✓</text>
      <rect x="245" y="20" width="210" height="190" rx="10" fill={P2} stroke={LINE} />
      <Puff x={335} y={170} fill={TXT} />
      <text x="350" y="232" textAnchor="middle" fontSize="12" fontWeight="700">Dark smoke vs snow or haze ✓</text>
      <rect x="480" y="20" width="210" height="190" rx="10" fill={SKY} opacity="0.35" />
      {[0, 1, 2, 3, 4].map((k) => <ellipse key={k} cx={530 + k * 30} cy={175 - k * 6} rx={18 + k * 4} ry={8} fill={MUTED} opacity={0.7 - k * 0.1} />)}
      <text x="600" y="60" textAnchor="middle" fontSize="12">wind →</text>
      <text x="585" y="232" textAnchor="middle" fontSize="12" fontWeight="700">Wind flattens the column ✗</text>
      <text x="350" y="248" textAnchor="middle" fontSize="10" className="muted-fill">Only where fire is legal and safe — never in high fire danger. Prepare the fire in advance; light it when you hear or see searchers.</text>
    </svg>
  )
}

/** Which signal works when: day, night, sound, electronic. */
export function SignalToolbox() {
  const rows: [string, string, string, string][] = [
    ['Sunny day', 'Mirror flash', 'Bright shapes, movement', 'Smoke (legal & safe)'],
    ['Overcast day', 'Bright panels, movement', 'Smoke (legal & safe)', 'Strobe (weak by day)'],
    ['Night', 'Strobe / torch in threes', 'Fire (legal & safe)', 'Chemlight swung on a cord'],
    ['Ground team near', 'Whistle in threes', 'Torch / mirror', 'Answer every call'],
    ['Anywhere, anytime', 'PLB / satellite SOS', 'Phone call / SMS', 'Radio (licensed or distress)'],
  ]
  const colW = [150, 170, 170, 190]
  const colX = [10, 160, 330, 500]
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="Signal toolbox by conditions. Sunny day: mirror, bright shapes and movement, smoke where legal. Overcast: bright panels, movement, smoke. Night: strobe or torch in threes, fire where legal, chemlight on a cord. Ground team near: whistle in threes, torch or mirror, answer every call. Anywhere: PLB or satellite SOS, phone call or SMS, radio.">
      {['Condition', 'Best', 'Next', 'Also'].map((h, i) => (
        <text key={h} x={colX[i] + 8} y="22" fontSize="12" fontWeight="700">{h}</text>
      ))}
      {rows.map((r, k) => (
        <g key={r[0]}>
          {r.map((cell, i) => (
            <g key={i}>
              <rect x={colX[i]} y={32 + k * 44} width={colW[i] - 6} height="38" rx="6" fill={i === 0 ? P2 : i === 1 ? A : P2} opacity={i === 1 ? 0.25 : 1} stroke={LINE} />
              <text x={colX[i] + 8} y={56 + k * 44} fontSize="11.5" fontWeight={i < 2 ? 700 : 400}>{cell}</text>
            </g>
          ))}
        </g>
      ))}
    </svg>
  )
}

/** Body signals to aircraft and the aircraft's acknowledgement. */
function Person({ x, up }: { x: number; up: 'both' | 'one' }) {
  return (
    <g stroke={TXT} strokeWidth="4" strokeLinecap="round" fill="none">
      <circle cx={x} cy={70} r="11" fill={A2} stroke="none" />
      <line x1={x} y1={82} x2={x} y2={135} />
      <line x1={x} y1={135} x2={x - 16} y2={180} />
      <line x1={x} y1={135} x2={x + 16} y2={180} />
      {up === 'both' ? (
        <>
          <line x1={x} y1={92} x2={x - 30} y2={50} />
          <line x1={x} y1={92} x2={x + 30} y2={50} />
        </>
      ) : (
        <>
          <line x1={x} y1={92} x2={x + 26} y2={48} />
          <line x1={x} y1={92} x2={x - 24} y2={132} />
        </>
      )}
    </g>
  )
}

export function BodySignals() {
  return (
    <svg className="diagram" viewBox="0 0 700 250" role="img" aria-label="Body signals: both arms raised in a Y means we need help, pick us up. One arm raised and one arm down in an N-like shape means we do not need help. An aircraft that has understood a ground signal rocks its wings by day or flashes its landing or navigation lights twice at night.">
      <Person x={110} up="both" />
      <text x="110" y="210" textAnchor="middle" fontSize="13" fontWeight="700">Y — “Need help”</text>
      <text x="110" y="228" textAnchor="middle" fontSize="11" className="muted-fill">both arms up, still or slowly moved</text>
      <Person x={310} up="one" />
      <text x="310" y="210" textAnchor="middle" fontSize="13" fontWeight="700">N — “No help needed”</text>
      <text x="310" y="228" textAnchor="middle" fontSize="11" className="muted-fill">one arm up, one down</text>
      <rect x="440" y="30" width="250" height="170" rx="10" fill={P2} stroke={LINE} />
      <text x="565" y="55" textAnchor="middle" fontSize="13" fontWeight="700">Aircraft reply</text>
      <path d="M520 100 l90 0 M565 88 l0 30 M545 118 l40 0" stroke={TXT} strokeWidth="5" strokeLinecap="round" transform="rotate(-12 565 100)" />
      <text x="565" y="150" textAnchor="middle" fontSize="11.5">Day: rocking the wings</text>
      <text x="565" y="167" textAnchor="middle" fontSize="11.5">Night: landing/nav lights flashed twice</text>
      <text x="565" y="184" textAnchor="middle" fontSize="11" className="muted-fill">= message received and understood</text>
      <text x="350" y="246" textAnchor="middle" fontSize="10" className="muted-fill">A cheerful one-armed wave can look like “all is well”. If you need help, use the Y.</text>
    </svg>
  )
}

/** Cospas-Sarsat chain: beacon → satellites → ground station → mission control → rescue coordination. */
export function CospasSarsat() {
  return (
    <svg className="diagram" viewBox="0 0 700 300" role="img" aria-label="How a 406 megahertz distress beacon alert travels: the beacon transmits a digital message with its unique ID and GNSS position to Cospas-Sarsat satellites in low, medium and geostationary orbits; ground stations called LUTs receive the relay; a mission control centre checks it and passes it to the rescue coordination centre responsible for that area, which uses the registration details to call your contacts and launches searchers, who home in on the beacon's 121.5 megahertz signal.">
      <defs><Arrow id="cs-a" color={A} /><Arrow id="cs-b" color={INFO} /></defs>
      <rect x="0" y="0" width="700" height="150" fill={SKY} opacity="0.2" rx="10" />
      <rect x="0" y="230" width="700" height="70" fill={GROUND} opacity="0.3" rx="10" />
      {[['LEO', 120], ['MEO (GNSS)', 330], ['GEO', 560]].map(([t, x]) => (
        <g key={t as string}>
          <rect x={(x as number) - 22} y="28" width="44" height="18" rx="3" fill={P2} stroke={TXT} />
          <line x1={(x as number) - 40} y1="37" x2={(x as number) + 40} y2="37" stroke={INFO} strokeWidth="4" />
          <text x={x as number} y="66" textAnchor="middle" fontSize="11" fontWeight="700">{t}</text>
        </g>
      ))}
      <text x="350" y="18" textAnchor="middle" fontSize="11" className="muted-fill">Cospas-Sarsat satellites (low, medium and geostationary orbits)</text>
      <rect x="70" y="248" width="16" height="30" rx="3" fill={A2} />
      <line x1="78" y1="248" x2="78" y2="226" stroke={TXT} strokeWidth="2" />
      <text x="78" y="294" textAnchor="middle" fontSize="11" fontWeight="700">PLB</text>
      <line x1="84" y1="232" x2="320" y2="72" stroke={A} strokeWidth="2" markerEnd="url(#cs-a)" />
      <text x="150" y="170" fontSize="11" fontWeight="700">406 MHz digital burst:</text>
      <text x="150" y="185" fontSize="11">unique ID (15-hex) + GNSS position</text>
      <line x1="340" y1="72" x2="410" y2="222" stroke={A} strokeWidth="2" markerEnd="url(#cs-a)" />
      <Box x={370} y={228} w={90} h={44} title="LUT" sub="ground station" />
      <Box x={475} y={228} w={100} h={44} title="MCC" sub="mission control" />
      <Box x={590} y={228} w={100} h={44} title="RCC" sub="rescue coordination" fill={OK} />
      <line x1="460" y1="250" x2="473" y2="250" stroke={TXT} markerEnd="url(#cs-b)" />
      <line x1="575" y1="250" x2="588" y2="250" stroke={TXT} markerEnd="url(#cs-b)" />
      <text x="640" y="200" textAnchor="middle" fontSize="11">registration → calls</text>
      <text x="640" y="214" textAnchor="middle" fontSize="11">your contacts; tasks SAR</text>
      <path d="M95 262 q40 -30 80 0" stroke={INFO} strokeWidth="2" fill="none" strokeDasharray="4 3" />
      <text x="190" y="270" fontSize="11">121.5 MHz homing signal for the final approach</text>
    </svg>
  )
}

/** Line-of-sight radio: height matters more than power. */
export function RadioHorizon() {
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="VHF and UHF radio travels roughly line of sight. From a valley floor the ridge blocks the signal; from the ridge top the radio horizon is much larger. Radio horizon in kilometres is about 4.1 times the square root of antenna height in metres, for each end of the link.">
      <path d="M0 230 L120 230 L200 120 L260 90 L330 150 L400 215 L470 225 L700 225 L700 260 L0 260 Z" fill={GROUND} opacity="0.7" />
      <circle cx="420" cy="208" r="7" fill={BAD} />
      <text x="420" y="196" textAnchor="middle" fontSize="11" fontWeight="700">valley</text>
      <line x1="420" y1="208" x2="120" y2="160" stroke={BAD} strokeDasharray="5 4" />
      <text x="275" y="170" fontSize="10.5" fill={BAD} style={{ fill: 'var(--bad)' }}>blocked</text>
      <circle cx="260" cy="84" r="7" fill={OK} />
      <text x="260" y="70" textAnchor="middle" fontSize="11" fontWeight="700">ridge top</text>
      <line x1="260" y1="84" x2="660" y2="160" stroke={OK} strokeWidth="2" />
      <line x1="260" y1="84" x2="20" y2="170" stroke={OK} strokeWidth="2" />
      <rect x="640" y="130" width="12" height="30" fill={INFO} />
      <text x="646" y="122" textAnchor="middle" fontSize="11">repeater / team</text>
      <text x="20" y="28" fontSize="13" fontWeight="700">Radio horizon (km) ≈ 4.1 × (√h₁ + √h₂), heights in m</text>
      <text x="20" y="48" fontSize="11">Hand-held at 1.5 m to another at 1.5 m on flat ground: ≈ 10 km at best — much less in forest or hills.</text>
      <text x="20" y="64" fontSize="11">Climb: 1.5 m on a hill 300 m above the plain to a team at 1.5 m: ≈ 4.1 × (17.4 + 1.2) ≈ 76 km line of sight.</text>
    </svg>
  )
}

/** Beacon deployment: antenna up, clear sky, keep it on. */
export function BeaconDeploy() {
  return (
    <svg className="diagram" viewBox="0 0 700 240" role="img" aria-label="Deploying a personal locator beacon: fully extend the antenna and hold it vertical, give it a clear view of the sky away from rock walls and dense canopy, do not shield it with your body, and leave it on until rescuers reach you or tell you otherwise.">
      <rect x="0" y="0" width="700" height="170" fill={SKY} opacity="0.2" rx="10" />
      <rect x="0" y="170" width="700" height="70" fill={GROUND} opacity="0.35" rx="10" />
      <g>
        <rect x="100" y="120" width="26" height="46" rx="5" fill={A2} />
        <line x1="113" y1="120" x2="113" y2="40" stroke={TXT} strokeWidth="3" />
        <text x="113" y="200" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: 'var(--ok)' }}>✓ antenna vertical, open sky</text>
        <path d="M60 40 q53 -40 106 0" stroke={OK} fill="none" strokeWidth="2" />
      </g>
      <g>
        <rect x="320" y="150" width="46" height="20" rx="5" fill={A2} />
        <line x1="366" y1="160" x2="420" y2="160" stroke={TXT} strokeWidth="3" />
        <path d="M290 20 L300 170 L270 170 Z M420 30 q40 60 20 140" fill={GROUND} opacity="0.8" />
        <text x="350" y="200" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: 'var(--bad)' }}>✗ lying flat, in a gully</text>
      </g>
      <g>
        <rect x="560" y="120" width="26" height="46" rx="5" fill={A2} />
        <circle cx="560" cy="110" r="40" fill={GROUND} opacity="0.9" />
        <text x="570" y="200" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: 'var(--bad)' }}>✗ under dense canopy / your body</text>
      </g>
      <text x="350" y="228" textAnchor="middle" fontSize="11" className="muted-fill">Leave it switched on until rescuers reach you or an RCC tells you to switch off. Keep it warm and dry if you can.</text>
    </svg>
  )
}

/** Segmented search area: POA, POD and POS, and the Bayes update. */
export function PoaSegments() {
  const segs = [
    { n: 'A trail', poa: 0.4, pod: 0.8, x: 30, y: 40, w: 170, h: 90 },
    { n: 'B drainage', poa: 0.3, pod: 0, x: 210, y: 40, w: 200, h: 90 },
    { n: 'C forest', poa: 0.2, pod: 0, x: 30, y: 140, w: 380, h: 70 },
  ]
  const miss = 1 - 0.4 * 0.8
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="A search area divided into segments A, B and C plus rest of world. Before: A 40 percent, B 30, C 20, rest of world 10. Segment A is searched with POD 80 percent, giving POS 32 percent. After the unsuccessful search, Bayes' rule gives A 12 percent, B 44, C 29, rest of world 15.">
      <text x="30" y="26" fontSize="13" fontWeight="700">Before</text>
      {segs.map((s) => (
        <g key={s.n}>
          <rect x={s.x} y={s.y} width={s.w} height={s.h} rx="6" fill={A} opacity={0.15 + s.poa} stroke={LINE} />
          <text x={s.x + 10} y={s.y + 22} fontSize="12" fontWeight="700">{s.n}</text>
          <text x={s.x + 10} y={s.y + 40} fontSize="11">POA {Math.round(s.poa * 100)}%{s.pod ? ` · POD ${Math.round(s.pod * 100)}%` : ''}</text>
          {s.pod > 0 && <text x={s.x + 10} y={s.y + 56} fontSize="11" fontWeight="700">POS = {Math.round(s.poa * s.pod * 100)}%</text>}
        </g>
      ))}
      <text x="30" y="232" fontSize="11">Rest of world (ROW) 10%</text>
      <text x="440" y="26" fontSize="13" fontWeight="700">After A searched, not found</text>
      {segs.map((s, i) => {
        const after = (s.poa * (1 - s.pod)) / miss
        return (
          <g key={s.n}>
            <text x="440" y={60 + i * 34} fontSize="12" fontWeight="700">{s.n}</text>
            <rect x="540" y={48 + i * 34} width={after * 300} height="16" rx="3" fill={A} />
            <text x={546 + after * 300} y={61 + i * 34} fontSize="11">{Math.round(after * 100)}%</text>
          </g>
        )
      })}
      <text x="440" y="162" fontSize="12" fontWeight="700">ROW</text>
      <rect x="540" y="150" width={(0.1 / miss) * 300} height="16" rx="3" fill={MUTED} />
      <text x={546 + (0.1 / miss) * 300} y="163" fontSize="11">{Math.round((0.1 / miss) * 100)}%</text>
      <text x="440" y="200" fontSize="11">POA′ = POA × (1 − POD) ÷ (1 − POS)</text>
      <text x="440" y="218" fontSize="11">1 − POS = 1 − 0.32 = 0.68</text>
      <text x="440" y="236" fontSize="10.5" className="muted-fill">A drops; every other area — including ROW — rises.</text>
    </svg>
  )
}

/** POD versus coverage: POD = 1 − e^(−C). */
export function PodCurve() {
  const pts = Array.from({ length: 61 }, (_, i) => {
    const c = i * 0.05
    return `${60 + c * 180},${210 - (1 - Math.exp(-c)) * 170}`
  }).join(' ')
  const marks = [0.5, 1, 2]
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="Probability of detection against coverage. POD equals one minus e to the minus coverage. Coverage 0.5 gives 39 percent, coverage 1 gives 63 percent, coverage 2 gives 86 percent: doubling effort gives diminishing returns.">
      <line x1="60" y1="210" x2="640" y2="210" stroke={LINE} />
      <line x1="60" y1="210" x2="60" y2="30" stroke={LINE} />
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      {marks.map((c) => {
        const x = 60 + c * 180
        const y = 210 - (1 - Math.exp(-c)) * 170
        return (
          <g key={c}>
            <line x1={x} y1={210} x2={x} y2={y} stroke={MUTED} strokeDasharray="3 3" />
            <circle cx={x} cy={y} r="4" fill={A2} />
            <text x={x + 6} y={y - 8} fontSize="11" fontWeight="700">C = {c} → {Math.round((1 - Math.exp(-c)) * 100)}%</text>
          </g>
        )
      })}
      <text x="350" y="240" textAnchor="middle" fontSize="12">coverage C = sweep width × track length ÷ area</text>
      <text x="30" y="120" fontSize="12" transform="rotate(-90 30 120)" textAnchor="middle">POD</text>
      <text x="80" y="40" fontSize="12" fontWeight="700">POD = 1 − e^(−C)</text>
      <text x="80" y="58" fontSize="11" className="muted-fill">diminishing returns: the second pass finds less than the first</text>
    </svg>
  )
}

/** Search tactics: hasty, efficient, thorough; plus confinement and attraction. */
function Lane({ x, n, gap, title, sub }: { x: number; n: number; gap: number; title: string; sub: string }) {
  return (
    <g>
      <rect x={x} y={40} width="200" height="150" rx="8" fill={GROUND} opacity="0.35" stroke={LINE} />
      {Array.from({ length: n }, (_, k) => (
        <g key={k}>
          <line x1={x + 20 + k * gap} y1={180} x2={x + 20 + k * gap} y2={55} stroke={A} strokeWidth="2" strokeDasharray={n === 1 ? '0' : '4 3'} />
          <circle cx={x + 20 + k * gap} cy={180} r="5" fill={A2} />
        </g>
      ))}
      <text x={x + 100} y={212} textAnchor="middle" fontSize="12.5" fontWeight="700">{title}</text>
      <text x={x + 100} y={230} textAnchor="middle" fontSize="10.5" className="muted-fill">{sub}</text>
    </g>
  )
}

export function SearchTactics() {
  return (
    <svg className="diagram" viewBox="0 0 700 270" role="img" aria-label="Three search tactics. Hasty (Type I): a few fast, trained searchers check trails, the point last seen and likely spots, calling and listening. Efficient (Type II): widely spaced searchers sweep a segment, high POD per hour. Thorough (Type III): closely spaced searchers in a line, high POD but slow and destroys clues. Confinement and attraction run alongside.">
      <Lane x={10} n={1} gap={0} title="Hasty (Type I)" sub="fast; trails, LKP, hazards, likely spots" />
      <Lane x={250} n={4} gap={52} title="Efficient (Type II)" sub="wide spacing; best POD per hour" />
      <Lane x={490} n={9} gap={20} title="Thorough (Type III)" sub="close spacing; slow, disturbs clues" />
      <text x="350" y="24" textAnchor="middle" fontSize="12" fontWeight="700">Alongside: confinement (trail blocks, track traps) · attraction (sirens, lights, calling — then silence to listen)</text>
      <text x="350" y="258" textAnchor="middle" fontSize="10.5" className="muted-fill">Sweep width falls in dense vegetation and for a small, silent or hidden subject — which is why a visible, responsive subject is found faster.</text>
    </svg>
  )
}

/** Stay-or-move decision flow. */
export function StayMoveFlow() {
  return (
    <svg className="diagram" viewBox="0 0 700 340" role="img" aria-label="Stay or move decision. First: is where you are immediately dangerous? If yes, move the shortest distance to safety. If no: does someone know your route and when to raise the alarm, or have you sent an alert? If yes, stay, improve shelter and signals. If no: can you reach a known, certain safe point within your daylight and energy budget without major hazards? If yes, move deliberately and leave signs. If not, stay, signal and conserve.">
      <defs><Arrow id="sm-a" /></defs>
      <Box x={220} y={10} w={260} h={46} title="Immediate danger here?" sub="rockfall, flood, fire, avalanche, tide, exposure" />
      <line x1="480" y1="33" x2="540" y2="33" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="510" y="26" textAnchor="middle" fontSize="11" fontWeight="700">yes</text>
      <Box x={545} y={10} w={150} h={46} title="Move — shortest" sub="distance to safety" fill={BAD} />
      <line x1="350" y1="56" x2="350" y2="88" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="360" y="76" fontSize="11" fontWeight="700">no</text>
      <Box x={200} y={90} w={300} h={50} title="Will someone raise the alarm and look here?" sub="trip plan, overdue time, or alert already sent (PLB, call)" />
      <line x1="500" y1="115" x2="540" y2="115" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="520" y="108" textAnchor="middle" fontSize="11" fontWeight="700">yes</text>
      <Box x={545} y={90} w={150} h={50} title="STAY" sub="shelter, signals, water" fill={OK} />
      <line x1="350" y1="140" x2="350" y2="172" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="360" y="160" fontSize="11" fontWeight="700">no / unsure</text>
      <Box x={170} y={174} w={360} h={56} title="Known, certain safe point within budget?" sub="daylight, water, energy, injuries — and no major hazards on the way" />
      <line x1="530" y1="202" x2="540" y2="202" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="535" y="190" textAnchor="middle" fontSize="11" fontWeight="700">yes</text>
      <Box x={545} y={176} w={150} h={52} title="MOVE deliberately" sub="leave signs; set a turn-back time" fill={INFO} />
      <line x1="350" y1="230" x2="350" y2="262" stroke={MUTED} markerEnd="url(#sm-a)" />
      <text x="360" y="250" fontSize="11" fontWeight="700">no</text>
      <Box x={200} y={264} w={300} h={50} title="STAY and make yourself findable" sub="short moves only (to open ground), then signal" fill={OK} />
      <text x="10" y="334" fontSize="10.5" className="muted-fill">Re-run the decision when conditions change: new injury, weather, water running out, days passing with no sign of search.</text>
    </svg>
  )
}

/** Leaving signs for rescuers. */
export function LeaveSigns() {
  return (
    <svg className="diagram" viewBox="0 0 700 250" role="img" aria-label="Leaving signs for rescuers: a dated note at the vehicle or last known point stating time, direction, plan and condition; arrows made of sticks or stones at every junction pointing the way you went; a bright item or marker at each turn; and a large arrow in the open for aircraft.">
      <rect x="0" y="0" width="700" height="250" rx="10" fill={GROUND} opacity="0.25" />
      <rect x="20" y="30" width="170" height="120" rx="6" fill="var(--panel)" stroke={LINE} />
      <text x="30" y="52" fontSize="12" fontWeight="700">NOTE at car / LKP</text>
      {['Sat 14:30 — Dana, Ari (2)', 'Ari: sprained ankle', 'Going N on stream to road', 'Back here by 17:00 if blocked', 'Have water, whistle, torch'].map((t, i) => (
        <text key={t} x="30" y={72 + i * 16} fontSize="10.5">{t}</text>
      ))}
      <path d="M220 200 L330 200 L420 110 L560 110" stroke={MUTED} strokeWidth="10" fill="none" opacity="0.5" />
      <path d="M330 200 L380 240" stroke={MUTED} strokeWidth="10" opacity="0.5" />
      <g stroke={A2} strokeWidth="5" strokeLinecap="round">
        <line x1="300" y1="180" x2="345" y2="180" />
        <line x1="345" y1="180" x2="333" y2="170" />
        <line x1="345" y1="180" x2="333" y2="190" />
      </g>
      <text x="300" y="165" fontSize="11" fontWeight="700">arrow at every junction</text>
      <rect x="425" y="92" width="10" height="16" fill={BAD} />
      <text x="440" y="90" fontSize="11">bright marker at turns</text>
      <g stroke={A} strokeWidth="8" strokeLinecap="round">
        <line x1="560" y1="200" x2="660" y2="200" />
        <line x1="660" y1="200" x2="630" y2="180" />
        <line x1="660" y1="200" x2="630" y2="220" />
      </g>
      <text x="610" y="170" textAnchor="middle" fontSize="11" fontWeight="700">big arrow in the open</text>
      <text x="610" y="236" textAnchor="middle" fontSize="10" className="muted-fill">ground-to-air: “going this way”</text>
      <text x="20" y="175" fontSize="10.5" className="muted-fill">Use loose sticks, stones or tape —</text>
      <text x="20" y="190" fontSize="10.5" className="muted-fill">not blazes cut into trees — and</text>
      <text x="20" y="205" fontSize="10.5" className="muted-fill">remove non-emergency markers later.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's14-mirror-aim': MirrorAim,
  's14-smoke-contrast': SmokeContrast,
  's14-signal-toolbox': SignalToolbox,
  's14-body-signals': BodySignals,
  's14-cospas-sarsat': CospasSarsat,
  's14-radio-horizon': RadioHorizon,
  's14-beacon-deploy': BeaconDeploy,
  's14-poa-segments': PoaSegments,
  's14-pod-curve': PodCurve,
  's14-search-tactics': SearchTactics,
  's14-stay-move': StayMoveFlow,
  's14-leave-signs': LeaveSigns,
}
