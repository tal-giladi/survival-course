import type { ComponentType } from 'react'

// Stage 10 SVG diagrams (field improvisation). Colors only via CSS variables (light/dark aware).

const A = 'var(--accent)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUTED = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'

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

/** The improvisation cycle: function → properties → candidates → build → test → use and monitor. */
export function MethodCycle() {
  const steps: [string, string][] = [
    ['1 · Define the function', 'what must it DO? (not what is it)'],
    ['2 · List the properties', 'waterproof, rigid, strong, soft…'],
    ['3 · Inventory candidates', 'kit, clothing, nature, rubbish'],
    ['4 · Build simply', 'reversible, least critical gear'],
    ['5 · Test before trusting', 'at ground level, over-load it'],
    ['6 · Use and monitor', 'inspect often, carry a plan B'],
  ]
  const cx = 320
  const cy = 175
  const R = 125
  return (
    <svg className="diagram" viewBox="0 0 640 350" role="img" aria-label="The improvisation cycle: define the function, list the properties it needs, inventory candidate objects, build simply, test before trusting, use and monitor; a failed test loops back to the candidates">
      <defs><Arrow id="mc-a" color={A} /><Arrow id="mc-b" color={BAD} /></defs>
      <ellipse cx={cx} cy={cy} rx={R + 40} ry={R - 10} fill="none" stroke={LINE} strokeDasharray="4 5" />
      {steps.map(([t, s], i) => {
        const ang = -Math.PI / 2 + (i * 2 * Math.PI) / steps.length
        const x = cx + (R + 60) * Math.cos(ang) - 95
        const y = cy + (R - 25) * Math.sin(ang) - 22
        return <Box key={t} x={x} y={y} w={190} h={44} title={t} sub={s} fill={i === 4 ? OK : P2} />
      })}
      <text x={cx} y={cy - 6} textAnchor="middle" fontSize="15" fontWeight="800">Function</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize="15" fontWeight="800">over form</text>
      <path d={`M ${cx - 62} ${cy + 12} Q ${cx} ${cy + 60} ${cx + 62} ${cy + 12}`} fill="none" stroke={BAD} strokeWidth="1.8" strokeDasharray="5 4" markerEnd="url(#mc-b)" />
      <text x={cx} y={cy + 58} textAnchor="middle" fontSize="10" style={{ fill: BAD }}>test fails → try the next candidate</text>
      <text x={20} y={340} fontSize="11" className="muted-fill">Arrows run clockwise. Most failures come from skipping step 1 (solving the wrong problem) or step 5 (trusting an untested build).</text>
    </svg>
  )
}

/** Property matrix: ordinary objects against the properties that matter. */
export function PropertyMatrix() {
  const props = ['Waterproof', 'Food-safe', 'Rigid', 'Tension', 'Binds', 'Padding', 'Abrasion']
  const rows: [string, number[]][] = [
    ['Bin bag', [3, 1, 0, 1, 0, 0, 0]],
    ['Drinks bottle', [3, 3, 1, 0, 0, 0, 0]],
    ['Fuel bottle (used)', [3, 0, 2, 0, 0, 0, 0]],
    ['Foam pad', [2, 0, 2, 0, 0, 3, 1]],
    ['Paracord', [0, 0, 0, 3, 3, 0, 2]],
    ['Duct tape', [2, 0, 0, 1, 3, 0, 1]],
    ['Cable ties', [0, 0, 0, 2, 2, 0, 2]],
    ['Rain jacket', [3, 0, 0, 2, 0, 1, 1]],
    ['Dead branch', [0, 0, 2, 0, 0, 0, 2]],
  ]
  const x0 = 170
  const cw = 64
  const rh = 26
  const fill = (v: number) => (v === 0 ? P2 : v === 1 ? SKY : v === 2 ? INFO : A)
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Property matrix rating nine ordinary objects from 0 to 3 on waterproofness, food safety, rigidity, strength in tension, binding, padding and abrasion resistance. A used fuel bottle is waterproof but scores zero for food safety.">
      {props.map((p, j) => <text key={p} x={x0 + j * cw + cw / 2} y={24} textAnchor="middle" fontSize="11" fontWeight="700">{p}</text>)}
      {rows.map(([name, vals], i) => (
        <g key={name}>
          <text x={x0 - 10} y={40 + i * rh + 17} textAnchor="end" fontSize="12">{name}</text>
          {vals.map((v, j) => (
            <g key={j}>
              <rect x={x0 + j * cw + 4} y={40 + i * rh} width={cw - 8} height={rh - 4} rx="4" fill={fill(v)} stroke={LINE} opacity={v === 0 ? 0.6 : 0.9} />
              <text x={x0 + j * cw + cw / 2} y={40 + i * rh + 16} textAnchor="middle" fontSize="11" fontWeight="700">{v}</text>
            </g>
          ))}
        </g>
      ))}
      <rect x={x0 + cw + 2} y={40 + 2 * rh - 2} width={cw - 4} height={rh} rx="4" fill="none" stroke={BAD} strokeWidth="2.5" />
      <text x={20} y={300} fontSize="11">0 = none · 3 = excellent. Read a <tspan fontWeight="700">column</tspan> when you know the function you need; read a <tspan fontWeight="700">row</tspan> to see what else an object could do.</text>
      <text x={20} y={318} fontSize="11" style={{ fill: BAD }}>A container that held fuel or chemicals is never food-safe, however well it seals.</text>
    </svg>
  )
}

/** Carrying water: bag-in-pack, weights, and safe/unsafe containers. */
export function WaterCarry() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Carrying water: a bin bag liner inside a rucksack separates the waterproof function from the load-carrying function; water weighs 1 kilogram per litre; use food-safe containers, never ones that held fuel or chemicals">
      <text x={20} y={24} fontSize="14" fontWeight="700">Separate the jobs: the liner holds water, the pack carries it</text>
      {/* rucksack */}
      <rect x={60} y={60} width={130} height={170} rx="24" fill={GROUND} opacity="0.55" stroke={LINE} />
      <rect x={72} y={80} width={106} height={140} rx="18" fill={INFO} opacity="0.55" stroke={INFO} strokeDasharray="4 3" />
      <path d="M 100 80 q 25 -26 50 0" fill="none" stroke={TXT} strokeWidth="2" />
      <text x={125} y={150} textAnchor="middle" fontSize="12" fontWeight="700">8 L = 8 kg</text>
      <text x={125} y={166} textAnchor="middle" fontSize="10" className="muted-fill">liner twisted,</text>
      <text x={125} y={178} textAnchor="middle" fontSize="10" className="muted-fill">folded, tied</text>
      <text x={125} y={250} textAnchor="middle" fontSize="11">pack = support + straps</text>
      <text x={125} y={264} textAnchor="middle" fontSize="11">bag = waterproof liner</text>
      {/* table of containers */}
      <text x={250} y={62} fontSize="12" fontWeight="700" style={{ fill: OK }}>Good</text>
      {['Drinks bottles, bladders (food-grade)', 'New, unscented bag inside a pack or hole', 'Dry bag or stuff sack with liner', 'Cooking pot with lid (short distances)'].map((t, i) => (
        <text key={t} x={250} y={82 + i * 18} fontSize="11">✓ {t}</text>
      ))}
      <text x={250} y={170} fontSize="12" fontWeight="700" style={{ fill: BAD }}>Never</text>
      {['Anything that held fuel, oil, pesticide or chemicals', 'Scented or treated bin bags', 'Containers you cannot close in a pack'].map((t, i) => (
        <text key={t} x={250} y={190 + i * 18} fontSize="11">✗ {t}</text>
      ))}
      <text x={250} y={264} fontSize="11" className="muted-fill">Improvised containers are not treatment: treat the water (Stages 1 and 4).</text>
    </svg>
  )
}

/** Tripod forces: leg compression and foot thrust vs splay angle. */
export function TripodForces() {
  const angles = [10, 20, 30, 45]
  const W = 196
  const rows = angles.map((a) => {
    const t = (a * Math.PI) / 180
    return { a, leg: W / (3 * Math.cos(t)), thrust: (W * Math.tan(t)) / 3 }
  })
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Tripod forces for a 20 kilogram load: each leg carries W divided by three times the cosine of the splay angle, and each foot pushes outward with W times the tangent of the angle divided by three. At 20 degrees each leg carries about 70 newtons and each foot pushes out about 24 newtons; at 45 degrees about 92 and 65 newtons.">
      <defs><Arrow id="tf-a" color={BAD} /><Arrow id="tf-w" color={A} /></defs>
      <line x1={40} y1={250} x2={280} y2={250} stroke={GROUND} strokeWidth="4" />
      <line x1={160} y1={50} x2={90} y2={250} stroke={TXT} strokeWidth="5" strokeLinecap="round" />
      <line x1={160} y1={50} x2={230} y2={250} stroke={TXT} strokeWidth="5" strokeLinecap="round" />
      <line x1={160} y1={50} x2={170} y2={255} stroke={MUTED} strokeWidth="5" strokeLinecap="round" />
      <line x1={160} y1={50} x2={160} y2={150} stroke={A} strokeWidth="2" markerEnd="url(#tf-w)" />
      <text x={166} y={130} fontSize="12" fontWeight="700" style={{ fill: A }}>W</text>
      <line x1={160} y1={50} x2={160} y2={250} stroke={LINE} strokeDasharray="3 4" />
      <path d="M 160 90 A 40 40 0 0 1 146 88" fill="none" stroke={TXT} />
      <text x={130} y={86} fontSize="12">θ</text>
      <line x1={230} y1={250} x2={270} y2={250} stroke={BAD} strokeWidth="2.5" markerEnd="url(#tf-a)" />
      <text x={236} y={272} fontSize="11" style={{ fill: BAD }}>foot thrust</text>
      <text x={40} y={290} fontSize="11" className="muted-fill">Tie or stake the feet (or dig them in) when the legs splay wide.</text>
      <text x={320} y={40} fontSize="13" fontWeight="700">20 kg load (W ≈ 196 N)</text>
      <text x={320} y={62} fontSize="12">Leg force = W / (3 cos θ) · Foot thrust = W tan θ / 3</text>
      <text x={330} y={92} fontSize="11" fontWeight="700">θ</text>
      <text x={400} y={92} fontSize="11" fontWeight="700">each leg</text>
      <text x={500} y={92} fontSize="11" fontWeight="700">each foot outward</text>
      {rows.map((r, i) => (
        <g key={r.a}>
          <text x={330} y={118 + i * 30} fontSize="12">{r.a}°</text>
          <rect x={400} y={106 + i * 30} width={r.leg * 0.6} height={16} rx="4" fill={INFO} opacity="0.8" />
          <text x={404 + r.leg * 0.6} y={119 + i * 30} fontSize="11">{Math.round(r.leg)} N</text>
          <rect x={500} y={106 + i * 30} width={r.thrust * 0.6} height={16} rx="4" fill={BAD} opacity="0.7" />
          <text x={504 + r.thrust * 0.6} y={119 + i * 30} fontSize="11">{Math.round(r.thrust)} N</text>
        </g>
      ))}
      <text x={320} y={250} fontSize="11">Leg force rises slowly with splay; thrust rises fast.</text>
      <text x={320} y={266} fontSize="11">Most tripods fail by feet sliding or the lashing</text>
      <text x={320} y={282} fontSize="11">slipping — not by legs breaking.</text>
    </svg>
  )
}

/** Improvised pack frame and load placement. */
export function PackFrame() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Improvised pack frame: a ladder or A-frame of lashed poles with padded shoulder straps and a hip strap; keeping the load's centre of mass close to the spine reduces the turning moment on the back. A 12 kilogram load 25 centimetres out produces about 29 newton-metres; 10 centimetres out about 12.">
      <defs><Arrow id="pf-a" color={A} /></defs>
      <text x={20} y={24} fontSize="14" fontWeight="700">Ladder frame</text>
      <line x1={60} y1={40} x2={60} y2={250} stroke={GROUND} strokeWidth="7" strokeLinecap="round" />
      <line x1={150} y1={40} x2={150} y2={250} stroke={GROUND} strokeWidth="7" strokeLinecap="round" />
      {[70, 140, 220].map((y) => <line key={y} x1={50} y1={y} x2={160} y2={y} stroke={GROUND} strokeWidth="6" strokeLinecap="round" />)}
      {[70, 140, 220].flatMap((y) => [60, 150].map((x) => <rect key={`${x}-${y}`} x={x - 7} y={y - 7} width={14} height={14} fill="none" stroke={A} strokeWidth="2" />))}
      <path d="M 80 70 q -20 70 0 150" fill="none" stroke={INFO} strokeWidth="5" />
      <path d="M 130 70 q 20 70 0 150" fill="none" stroke={INFO} strokeWidth="5" />
      <text x={105} y={272} textAnchor="middle" fontSize="11">square lashings (Stage 7) at each joint</text>
      <text x={105} y={288} textAnchor="middle" fontSize="11" className="muted-fill">padded straps; hip strap on bottom rung</text>
      {/* side view */}
      <text x={260} y={24} fontSize="14" fontWeight="700">Side view: keep it close</text>
      {[{ x: 300, d: 25, l1: '25 cm out', l2: '≈ 29 N·m', c: BAD }, { x: 470, d: 10, l1: '10 cm out', l2: '≈ 12 N·m', c: OK }].map((s) => (
        <g key={s.x}>
          <circle cx={s.x} cy={60} r={14} fill={P2} stroke={TXT} />
          <line x1={s.x} y1={74} x2={s.x} y2={190} stroke={TXT} strokeWidth="4" />
          <line x1={s.x} y1={190} x2={s.x - 15} y2={260} stroke={TXT} strokeWidth="4" />
          <line x1={s.x} y1={190} x2={s.x + 15} y2={260} stroke={TXT} strokeWidth="4" />
          <rect x={s.x - 10 - s.d * 2.4} y={85} width={s.d * 2.4} height={90} rx="6" fill={GROUND} opacity="0.7" stroke={LINE} />
          <circle cx={s.x - 10 - s.d * 1.2} cy={130} r={5} fill={s.c} />
          <line x1={s.x - 10 - s.d * 1.2} y1={130} x2={s.x - 10 - s.d * 1.2} y2={170} stroke={A} strokeWidth="2" markerEnd="url(#pf-a)" />
          <text x={s.x + 30} y={120} fontSize="11" style={{ fill: s.c }}>{s.l1}</text>
          <text x={s.x + 30} y={135} fontSize="11" fontWeight="700" style={{ fill: s.c }}>{s.l2}</text>
        </g>
      ))}
      <text x={260} y={272} fontSize="11">M = m·g·d: 12 kg × 9.81 × 0.25 m ≈ 29 N·m</text>
      <text x={260} y={288} fontSize="11">Heavy items high and close to the spine; light, bulky items outward and low.</text>
    </svg>
  )
}

/** Three repair wraps: boot sole, pole splint sleeve, fabric patch with rounded corners. */
export function RepairWraps() {
  return (
    <svg className="diagram" viewBox="0 0 660 270" role="img" aria-label="Three field repairs: a boot sole bound with cord through the lace eyelets and under the arch, with tape over it; a broken tent pole bridged with a splint sleeve or tent stake and taped at both ends; a torn fabric patched on both sides with round-cornered tape extending at least 2 to 3 centimetres beyond the tear">
      {/* boot */}
      <text x={20} y={24} fontSize="13" fontWeight="700">Boot sole</text>
      <path d="M 30 160 L 30 90 Q 60 70 100 90 L 150 120 Q 190 130 190 160 Z" fill={GROUND} opacity="0.6" stroke={TXT} />
      <path d="M 30 165 L 190 165 Q 196 160 190 158" fill="none" stroke={TXT} strokeWidth="6" />
      <path d="M 150 165 L 200 178" stroke={BAD} strokeWidth="6" />
      {[120, 145, 170].map((x) => <path key={x} d={`M ${x} 120 L ${x - 6} 175`} stroke={A} strokeWidth="3" />)}
      <text x={20} y={205} fontSize="11">Tough binding (cord, ties) takes</text>
      <text x={20} y={220} fontSize="11">the load; tape covers it. Avoid</text>
      <text x={20} y={235} fontSize="11">wraps under the ball of the foot.</text>
      {/* pole */}
      <text x={240} y={24} fontSize="13" fontWeight="700">Broken tent pole</text>
      <line x1={240} y1={110} x2={330} y2={110} stroke={MUTED} strokeWidth="8" strokeLinecap="round" />
      <line x1={336} y1={112} x2={430} y2={112} stroke={MUTED} strokeWidth="8" strokeLinecap="round" />
      <rect x={295} y={100} width={80} height={22} rx="6" fill={INFO} opacity="0.55" stroke={INFO} />
      <rect x={290} y={98} width={14} height={26} fill={A} opacity="0.8" />
      <rect x={366} y={98} width={14} height={26} fill={A} opacity="0.8" />
      <text x={240} y={160} fontSize="11">Splint sleeve (or a tent stake)</text>
      <text x={240} y={175} fontSize="11">centred on the break, taped at</text>
      <text x={240} y={190} fontSize="11">both ends. Sharp ends taped over</text>
      <text x={240} y={205} fontSize="11">so they cannot cut the fly.</text>
      {/* patch */}
      <text x={470} y={24} fontSize="13" fontWeight="700">Fabric tear</text>
      <rect x={470} y={50} width={170} height={120} fill={SKY} opacity="0.4" stroke={LINE} />
      <rect x={500} y={85} width={110} height={50} rx="14" fill={A} opacity="0.55" />
      <path d="M 520 110 L 560 104 L 592 112" stroke={TXT} strokeWidth="2" fill="none" />
      <text x={470} y={195} fontSize="11">Clean and dry; round corners;</text>
      <text x={470} y={210} fontSize="11">2–3 cm beyond the tear; both</text>
      <text x={470} y={225} fontSize="11">sides if you can; warm the tape.</text>
      <text x={20} y={260} fontSize="11" className="muted-fill">Each repair separates the load path (tough material) from the cover (smooth, sealing material).</text>
    </svg>
  )
}

/** Cathole: depth and distances. */
export function Cathole() {
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-label="Cathole: dug 15 to 20 centimetres deep into dark organic topsoil, 10 to 15 centimetres across, at least 60 metres (200 feet, about 70 adult steps) from water, camp and trails; covered and disguised afterwards; toilet paper packed out">
      <defs><Arrow id="ch-a" color={MUTED} /></defs>
      <rect x={0} y={120} width={640} height={170} fill={GROUND} opacity="0.35" />
      <rect x={0} y={120} width={640} height={40} fill={GROUND} opacity="0.55" />
      <text x={12} y={146} fontSize="11">organic topsoil: most decomposers</text>
      <text x={12} y={200} fontSize="11" className="muted-fill">mineral soil / sand: slow decay</text>
      <path d="M 140 120 L 150 170 Q 170 180 190 170 L 200 120 Z" fill={P2} stroke={TXT} />
      <line x1={220} y1={120} x2={220} y2={172} stroke={A} strokeWidth="2" markerStart="url(#ch-a)" markerEnd="url(#ch-a)" />
      <text x={228} y={150} fontSize="12" fontWeight="700" style={{ fill: A }}>15–20 cm deep</text>
      <text x={130} y={110} fontSize="11">10–15 cm wide</text>
      <line x1={260} y1={80} x2={560} y2={80} stroke={MUTED} strokeWidth="1.5" markerStart="url(#ch-a)" markerEnd="url(#ch-a)" />
      <text x={410} y={70} textAnchor="middle" fontSize="13" fontWeight="700">≥ 60 m (200 ft) ≈ 70 adult steps</text>
      <path d="M 560 120 Q 590 100 620 120" fill={INFO} opacity="0.7" />
      <text x={590} y={96} textAnchor="middle" fontSize="11">water, camp, trail</text>
      <text x={20} y={240} fontSize="12">Dig → use → stir in a little soil with a stick → fill → tamp → disguise with leaves.</text>
      <text x={20} y={260} fontSize="12">Pack out toilet paper and hygiene products in a sealed bag. Spread catholes out; don’t reuse sites.</text>
      <text x={20} y={280} fontSize="11" className="muted-fill">Where soil is thin, frozen, sandy or heavily used, or where rules say so, pack out waste instead.</text>
    </svg>
  )
}

/** Camp layout: separate sleeping, kitchen, water and toilet, with the hand-wash station between. */
export function CampLayout() {
  return (
    <svg className="diagram" viewBox="0 0 640 320" role="img" aria-label="Camp layout: the water source at one edge, kitchen and food storage downwind of tents, the toilet area at least 60 metres from water and camp and downhill of the water supply's catchment where possible, and a hand-washing station on the path from toilet to kitchen">
      <defs><Arrow id="cl-a" color={A} /><Arrow id="cl-w" color={SKY} /></defs>
      <rect x={0} y={0} width={640} height={320} fill={GROUND} opacity="0.12" />
      <path d="M 0 40 Q 160 20 300 50 T 640 40" fill="none" stroke={INFO} strokeWidth="10" opacity="0.7" />
      <text x={20} y={30} fontSize="12" fontWeight="700" style={{ fill: INFO }}>Stream (collect upstream of everything)</text>
      <Box x={50} y={120} w={130} h={50} title="Sleeping" sub="tents, upwind" />
      <Box x={250} y={120} w={130} h={50} title="Kitchen" sub="cook, wash up here" />
      <Box x={250} y={200} w={130} h={40} title="Food store" sub="wildlife-proof" />
      <Box x={460} y={235} w={150} h={50} title="Toilet area" sub="≥ 60 m from water & camp" fill={P2} />
      <Box x={430} y={140} w={120} h={42} title="Hand-wash" sub="soap + tippy tap" fill={OK} />
      <path d="M 520 235 Q 520 205 500 185" fill="none" stroke={A} strokeWidth="2" markerEnd="url(#cl-a)" />
      <path d="M 430 160 L 385 150" fill="none" stroke={A} strokeWidth="2" markerEnd="url(#cl-a)" />
      <text x={440} y={215} fontSize="10" className="muted-fill">path back passes the wash</text>
      <line x1={60} y1={290} x2={180} y2={290} stroke={SKY} strokeWidth="2" markerEnd="url(#cl-w)" />
      <text x={60} y={310} fontSize="11">prevailing wind: smoke and smells away from tents</text>
      <text x={200} y={100} fontSize="10" className="muted-fill">grey water strained, scattered ≥ 60 m from water</text>
    </svg>
  )
}

/** The F-diagram: routes of faecal–oral transmission and the barriers that block them. */
export function FDiagram() {
  const routes = ['Fluids (water)', 'Fingers', 'Flies', 'Fields (soil)', 'Food']
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="The F-diagram: pathogens in faeces reach a new host's mouth through fluids, fingers, flies, fields and food. Safe toilets block the routes at the source; hand-washing, water treatment and food hygiene block them later.">
      <defs><Arrow id="fd-a" color={MUTED} /></defs>
      <Box x={20} y={120} w={100} h={50} title="Faeces" fill={GROUND} />
      <Box x={520} y={120} w={100} h={50} title="Mouth" sub="new host" />
      {routes.map((r, i) => {
        const y = 40 + i * 50
        return (
          <g key={r}>
            <line x1={120} y1={145} x2={250} y2={y + 15} stroke={MUTED} markerEnd="url(#fd-a)" />
            <Box x={250} y={y} w={130} h={30} title={r} />
            <line x1={380} y1={y + 15} x2={520} y2={145} stroke={MUTED} markerEnd="url(#fd-a)" />
          </g>
        )
      })}
      <rect x={180} y={30} width={14} height={240} fill={OK} opacity="0.8" />
      <text x={187} y={290} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: OK }}>1 · Safe toilet / cathole</text>
      <rect x={440} y={30} width={14} height={240} fill={A} opacity="0.8" />
      <text x={447} y={20} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: A }}>2 · Hand-washing · water treatment · food hygiene</text>
    </svg>
  )
}

/** A tippy tap from a drinks bottle. */
export function TippyTap() {
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="A tippy tap: a drinks bottle hung from a cord between two sticks with a small hole in the cap; a foot loop or hand tilts it to pour a thin stream; soap on a string; a gravel soak-away catches the water">
      <line x1={80} y1={40} x2={80} y2={250} stroke={GROUND} strokeWidth="7" />
      <line x1={300} y1={40} x2={300} y2={250} stroke={GROUND} strokeWidth="7" />
      <line x1={70} y1={45} x2={310} y2={45} stroke={GROUND} strokeWidth="6" />
      <line x1={190} y1={45} x2={190} y2={80} stroke={A} strokeWidth="2" />
      <g transform="rotate(35 190 110)">
        <rect x={172} y={80} width={36} height={70} rx="10" fill={INFO} opacity="0.55" stroke={TXT} />
        <rect x={182} y={150} width={16} height={10} fill={TXT} />
      </g>
      <path d="M 158 150 Q 150 180 152 210" fill="none" stroke={SKY} strokeWidth="2" strokeDasharray="3 3" />
      <line x1={120} y1={45} x2={120} y2={120} stroke={A} strokeWidth="1.5" />
      <ellipse cx={120} cy={128} rx={12} ry={8} fill={OK} />
      <text x={100} y={150} fontSize="10">soap</text>
      <ellipse cx={160} cy={250} rx={70} ry={10} fill={MUTED} opacity="0.4" />
      <text x={100} y={272} fontSize="10" className="muted-fill">gravel soak-away</text>
      <text x={340} y={60} fontSize="13" fontWeight="700">Tippy tap</text>
      {[
        '1. Small hole in the cap (hot nail or knife point).',
        '2. Hang the bottle so a tilt pours a thin stream.',
        '3. Wet · soap · scrub ≥ 20 s (backs, thumbs, nails).',
        '4. Rinse in the stream · shake or air dry.',
        '5. Refill from the reserve; no hands inside it.',
        'Uses a fraction of a litre per wash.',
      ].map((t, i) => <text key={t} x={340} y={90 + i * 22} fontSize="12">{t}</text>)}
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's10-method-cycle': MethodCycle,
  's10-property-matrix': PropertyMatrix,
  's10-water-carry': WaterCarry,
  's10-tripod-forces': TripodForces,
  's10-pack-frame': PackFrame,
  's10-repair-wraps': RepairWraps,
  's10-cathole': Cathole,
  's10-camp-layout': CampLayout,
  's10-f-diagram': FDiagram,
  's10-tippy-tap': TippyTap,
}
