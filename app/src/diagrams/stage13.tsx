import type { ComponentType } from 'react'
import { legFactor, simpleMA } from '../sims/stage13/haulModel'

// Stage 13 SVG diagrams (rope and terrain). Colors only via CSS variables (light/dark aware).
// Principle diagrams only: none of these is a rigging instruction.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUTED = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const GROUND = 'var(--ground)'

function Arrow({ id, color = MUTED }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Box({ x, y, w, h, title, sub, fill = P2, color }: { x: number; y: number; w: number; h: number; title: string; sub?: string; fill?: string; color?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={LINE} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="700" style={color ? { fill: color } : undefined}>{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
}

/** Rope constructions and the static vs dynamic stretch contrast. */
export function RopeConstruction() {
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Rope constructions: kernmantle with a load-bearing core inside a protective sheath, three-strand laid rope, and braided rope; and a comparison of stretch: dynamic rope stretches a lot to absorb a fall, low-stretch rope very little">
      <text x={20} y={22} fontSize="13" fontWeight="700">Construction (cross-sections)</text>
      {/* Kernmantle */}
      <circle cx={80} cy={90} r={44} fill={A} opacity="0.85" />
      <circle cx={80} cy={90} r={32} fill={P2} stroke={LINE} />
      {[[-12, -12], [12, -12], [-12, 12], [12, 12], [0, 0], [0, -20], [0, 20], [-20, 0], [20, 0]].map(([dx, dy], i) => <circle key={i} cx={80 + dx} cy={90 + dy} r={6} fill={INFO} />)}
      <text x={80} y={155} textAnchor="middle" fontSize="12" fontWeight="700">Kernmantle</text>
      <text x={80} y={170} textAnchor="middle" fontSize="10" className="muted-fill">core carries most load;</text>
      <text x={80} y={183} textAnchor="middle" fontSize="10" className="muted-fill">sheath protects it</text>
      {/* Laid */}
      {[0, 1, 2].map((k) => { const a = (k * 2 * Math.PI) / 3 - Math.PI / 2; return <circle key={k} cx={225 + 20 * Math.cos(a)} cy={90 + 20 * Math.sin(a)} r={22} fill={GROUND} stroke={LINE} /> })}
      <text x={225} y={155} textAnchor="middle" fontSize="12" fontWeight="700">Three-strand laid</text>
      <text x={225} y={170} textAnchor="middle" fontSize="10" className="muted-fill">easy to inspect and splice;</text>
      <text x={225} y={183} textAnchor="middle" fontSize="10" className="muted-fill">no protective sheath</text>
      {/* Braided */}
      <circle cx={370} cy={90} r={44} fill={A2} opacity="0.8" />
      {Array.from({ length: 16 }, (_, i) => { const a = (i * 2 * Math.PI) / 16; return <circle key={i} cx={370 + 36 * Math.cos(a)} cy={90 + 36 * Math.sin(a)} r={6} fill={P2} stroke={LINE} /> })}
      <circle cx={370} cy={90} r={22} fill={P2} stroke={LINE} strokeDasharray="3 3" />
      <text x={370} y={155} textAnchor="middle" fontSize="12" fontWeight="700">Braided (e.g., paracord)</text>
      <text x={370} y={170} textAnchor="middle" fontSize="10" className="muted-fill">utility cord — not rated</text>
      <text x={370} y={183} textAnchor="middle" fontSize="10" className="muted-fill">for life-safety use</text>
      {/* Stretch */}
      <text x={470} y={22} fontSize="13" fontWeight="700">Stretch under load</text>
      <line x1={470} y1={40} x2={640} y2={40} stroke={LINE} strokeWidth="3" />
      <line x1={510} y1={40} x2={510} y2={170} stroke={A} strokeWidth="5" />
      <rect x={496} y={170} width={28} height={24} rx="4" fill={A} />
      <line x1={600} y1={40} x2={600} y2={128} stroke={INFO} strokeWidth="5" />
      <rect x={586} y={128} width={28} height={24} rx="4" fill={INFO} />
      <line x1={490} y1={128} x2={625} y2={128} stroke={MUTED} strokeDasharray="4 4" />
      <text x={510} y={212} textAnchor="middle" fontSize="11" fontWeight="700">Dynamic</text>
      <text x={510} y={226} textAnchor="middle" fontSize="10" className="muted-fill">stretches to absorb</text>
      <text x={510} y={239} textAnchor="middle" fontSize="10" className="muted-fill">fall energy</text>
      <text x={600} y={172} textAnchor="middle" fontSize="11" fontWeight="700">Low-stretch</text>
      <text x={600} y={186} textAnchor="middle" fontSize="10" className="muted-fill">(“static”)</text>
      <text x={20} y={258} fontSize="11">Dynamic ropes are for catching falls. Low-stretch ropes are for lowering, hauling and fixed lines —</text>
      <text x={20} y={274} fontSize="11">a fall onto low-stretch rope sends a far higher force through the person and the anchor.</text>
      <text x={20} y={292} fontSize="10" className="muted-fill">Schematic; real proportions vary by maker and standard.</text>
    </svg>
  )
}

/** Fall factor: the same rope stretches over the length out, so the ratio governs peak force. */
export function FallFactor() {
  const cases: [string, number, number, string][] = [['Fall 2 m on 4 m of rope', 2, 4, '0.5'], ['Fall 4 m on 4 m', 4, 4, '1'], ['Fall 4 m on 2 m (below anchor)', 4, 2, '2']]
  return (
    <svg className="diagram" viewBox="0 0 660 290" role="img" aria-label="Fall factor equals fall distance divided by rope length available to absorb it: 0.5, 1 and 2. A higher fall factor means a higher peak force, even for a shorter fall">
      <defs><Arrow id="ff-a" color={BAD} /></defs>
      <text x={20} y={22} fontSize="13" fontWeight="700">Fall factor = fall distance ÷ rope length absorbing it</text>
      {cases.map(([t, fall, rope, ff], i) => {
        const x = 110 + i * 210
        const s = 26
        return (
          <g key={t}>
            <rect x={x - 70} y={40} width={140} height={10} fill={GROUND} />
            <circle cx={x} cy={56} r={6} fill={TXT} />
            <line x1={x} y1={56} x2={x} y2={56 + rope * s} stroke={A} strokeWidth="4" />
            <line x1={x + 30} y1={60} x2={x + 30} y2={60 + fall * s} stroke={BAD} strokeWidth="2.5" markerEnd="url(#ff-a)" />
            <text x={x + 36} y={64 + (fall * s) / 2} fontSize="10" className="muted-fill">{fall} m</text>
            <text x={x - 8} y={60 + (rope * s) / 2} textAnchor="end" fontSize="10" className="muted-fill">{rope} m rope</text>
            <text x={x} y={250} textAnchor="middle" fontSize="11">{t}</text>
            <text x={x} y={272} textAnchor="middle" fontSize="15" fontWeight="800" style={{ fill: ff === '2' ? BAD : ff === '1' ? A2 : OK }}>FF {ff}</text>
          </g>
        )
      })}
    </svg>
  )
}

/** What to look and feel for along the whole rope. */
export function RopeInspection() {
  const faults: [string, string, string][] = [
    ['Core shot', 'white core visible through sheath', BAD],
    ['Flat or soft spot', 'core damaged or broken inside', BAD],
    ['Stiff or lumpy spot', 'heat, chemicals or crushing', A2],
    ['Glazed / shiny', 'friction heat has melted fibres', A2],
    ['Heavy fuzz, cuts', 'abrasion; sheath thinning', A2],
    ['Stains, odd colour', 'possible chemical contamination', BAD],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Rope inspection: run the whole rope through your hands, looking and feeling for core shots, flat or soft spots, stiff spots, glazing, heavy fuzz or cuts, and stains; when in doubt, retire it">
      <text x={20} y={22} fontSize="13" fontWeight="700">Inspect: every metre, through your hands, eyes on the sheath</text>
      <path d="M20 70 C 140 40, 220 100, 330 70 S 520 40, 640 70" fill="none" stroke={A} strokeWidth="14" strokeLinecap="round" />
      {[80, 180, 280, 380, 480, 580].map((x, i) => <circle key={x} cx={x} cy={i % 2 ? 62 : 72} r={9} fill="none" stroke={faults[i][2]} strokeWidth="3" />)}
      {faults.map(([t, s, c], i) => {
        const col = i % 3, row = Math.floor(i / 3)
        return (
          <g key={t}>
            <rect x={20 + col * 210} y={110 + row * 62} width={200} height={52} rx="8" fill={P2} stroke={c} />
            <text x={30 + col * 210} y={131 + row * 62} fontSize="12" fontWeight="700">{i + 1}. {t}</text>
            <text x={30 + col * 210} y={148 + row * 62} fontSize="10" className="muted-fill">{s}</text>
          </g>
        )
      })}
      <text x={20} y={246} fontSize="11">Also check the history: shock loads, contact with acids (e.g., battery acid),</text>
      <text x={20} y={262} fontSize="11">long UV exposure, age beyond the maker’s limit, unknown use.</text>
      <text x={20} y={280} fontSize="12" fontWeight="700" style={{ fill: BAD }}>Doubts about a life-safety rope? Retire it. It cannot be “partly trusted”.</text>
    </svg>
  )
}

/** Knot families and the dress–set–tail–check routine. */
export function KnotFamilies() {
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Knot families: stopper and loop knots are tied in the rope itself, hitches tie a rope to an object, bends join two ropes. Every knot is dressed, set, left with an adequate tail and checked">
      <text x={20} y={22} fontSize="13" fontWeight="700">Three families</text>
      {/* Stopper / loop */}
      <rect x={20} y={36} width={200} height={150} rx="10" fill={P2} stroke={LINE} />
      <path d="M40 120 C 80 60, 150 60, 150 110 C 150 150, 90 150, 100 110 C 110 80, 170 90, 200 120" fill="none" stroke={A} strokeWidth="6" />
      <text x={120} y={168} textAnchor="middle" fontSize="12" fontWeight="700">Knot (stopper, loop)</text>
      <text x={120} y={181} textAnchor="middle" fontSize="10" className="muted-fill">in the rope itself</text>
      {/* Hitch */}
      <rect x={230} y={36} width={200} height={150} rx="10" fill={P2} stroke={LINE} />
      <rect x={322} y={46} width={16} height={100} rx="4" fill={GROUND} />
      <path d="M250 70 L 322 80 M338 84 C 360 90, 360 104, 338 108 L322 110 M338 116 C 360 122, 360 132, 338 134 L 250 128" fill="none" stroke={A} strokeWidth="6" />
      <text x={330} y={168} textAnchor="middle" fontSize="12" fontWeight="700">Hitch</text>
      <text x={330} y={181} textAnchor="middle" fontSize="10" className="muted-fill">rope to an object (or another rope)</text>
      {/* Bend */}
      <rect x={440} y={36} width={200} height={150} rx="10" fill={P2} stroke={LINE} />
      <path d="M455 100 L 535 100 C 560 100, 560 80, 540 82" fill="none" stroke={A} strokeWidth="6" />
      <path d="M625 110 L 545 110 C 520 110, 520 128, 542 126" fill="none" stroke={INFO} strokeWidth="6" />
      <text x={540} y={168} textAnchor="middle" fontSize="12" fontWeight="700">Bend</text>
      <text x={540} y={181} textAnchor="middle" fontSize="10" className="muted-fill">joins two rope ends</text>
      {/* Routine */}
      <text x={20} y={214} fontSize="13" fontWeight="700">Every time:</text>
      {[['Dress', 'strands parallel'], ['Set', 'pull every strand'], ['Tail', 'long enough'], ['Check', 'name it + partner']].map(([t, s], i) => (
        <Box key={t} x={20 + i * 160} y={226} w={150} h={50} title={`${i + 1}. ${t}`} sub={s} fill={i === 3 ? OK : P2} />
      ))}
      <text x={20} y={294} fontSize="10" className="muted-fill">Stylised shapes — learn the actual knots from an instructor or a reputable visual reference.</text>
    </svg>
  )
}

/** Knot efficiency applied to a rated rope, with worked numbers. */
export function KnotStrength() {
  const rope = 22
  const knots: [string, number][] = [['No knot (rope rating)', 1], ['Figure-eight loop', 0.75], ['Double fisherman’s bend', 0.7], ['Bowline', 0.65], ['Clove hitch', 0.6], ['Overhand loop', 0.55]]
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Approximate strength kept by common knots in a rope rated 22 kilonewtons: figure-eight about 75 percent or 16.5 kilonewtons, bowline about 65 percent, clove hitch about 60 percent">
      <text x={20} y={22} fontSize="13" fontWeight="700">Illustrative: a rope rated {rope} kN, and what typical knots leave</text>
      {knots.map(([n, e], i) => {
        const y = 40 + i * 34
        const w = e * 300
        return (
          <g key={n}>
            <text x={20} y={y + 17} fontSize="12">{n}</text>
            <rect x={220} y={y + 3} width={w} height={20} rx="4" fill={e === 1 ? INFO : e >= 0.7 ? OK : A2} />
            <text x={226 + w} y={y + 18} fontSize="11" fontWeight="700">≈ {Math.round(e * 100)} % · {(rope * e).toFixed(1)} kN</text>
          </g>
        )
      })}
      <text x={20} y={252} fontSize="11">Typical values from pull tests; they vary with rope, knot dressing and test method.</text>
      <text x={20} y={268} fontSize="11">The knot, not the rope, is usually the weak point.</text>
      <text x={20} y={290} fontSize="11" className="muted-fill">Ratings are breaking strengths, not working loads: systems for people keep forces far below them.</text>
    </svg>
  )
}

/** Anchor-leg force multiplier against included angle. */
export function VectorAngles() {
  const x0 = 60, y0 = 240, w = 330, h = 190
  const X = (deg: number) => x0 + (deg / 170) * w
  const Y = (m: number) => y0 - (Math.min(m, 3) / 3) * h
  const pts = Array.from({ length: 171 }, (_, d) => `${X(d)},${Y(legFactor(d))}`).join(' ')
  const marks = [0, 60, 90, 120, 150]
  return (
    <svg className="diagram" viewBox="0 0 660 290" role="img" aria-label="Force in each anchor leg as a multiple of the load, against the angle between the legs: 0.5 at 0 degrees, 0.58 at 60, 0.71 at 90, 1.0 at 120, 1.93 at 150, rising steeply toward infinity at 180">
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={LINE} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={LINE} />
      <rect x={X(120)} y={y0 - h} width={X(170) - X(120)} height={h} fill={BAD} opacity="0.12" />
      <rect x={X(90)} y={y0 - h} width={X(120) - X(90)} height={h} fill={A2} opacity="0.12" />
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      {[0.5, 1, 2, 3].map((m) => <text key={m} x={x0 - 6} y={Y(m) + 4} textAnchor="end" fontSize="10" className="muted-fill">{m}×</text>)}
      {marks.map((d) => (
        <g key={d}>
          <text x={X(d)} y={y0 + 14} textAnchor="middle" fontSize="10" className="muted-fill">{d}°</text>
          <circle cx={X(d)} cy={Y(legFactor(d))} r={4} fill={TXT} />
          <text x={X(d) + 6} y={Y(legFactor(d)) - 6} fontSize="10" fontWeight="700">{legFactor(d).toFixed(2)}</text>
        </g>
      ))}
      <text x={x0 + w / 2} y={y0 + 32} textAnchor="middle" fontSize="11">angle between the two legs</text>
      <text x={20} y={24} fontSize="13" fontWeight="700">Each leg carries: load ÷ (2 · cos(angle ÷ 2))</text>
      {/* Mini V drawings */}
      {[[60, OK], [120, A2], [160, BAD]].map(([deg, c], i) => {
        const d = deg as number
        const cx = 450 + i * 75, my = 150, len = 55
        const hh = (d * Math.PI) / 360
        return (
          <g key={d}>
            <line x1={cx - len * Math.sin(hh)} y1={my - len * Math.cos(hh)} x2={cx} y2={my} stroke={c as string} strokeWidth="4" />
            <line x1={cx + len * Math.sin(hh)} y1={my - len * Math.cos(hh)} x2={cx} y2={my} stroke={c as string} strokeWidth="4" />
            <line x1={cx} y1={my} x2={cx} y2={my + 35} stroke={TXT} strokeWidth="3" />
            <text x={cx} y={my + 52} textAnchor="middle" fontSize="11" fontWeight="700">{d}°</text>
            <text x={cx} y={my + 66} textAnchor="middle" fontSize="10" className="muted-fill">{legFactor(d).toFixed(2)}×</text>
          </g>
        )
      })}
      <text x={430} y={260} fontSize="11">Narrow is kind to anchors;</text>
      <text x={430} y={276} fontSize="11">a tight “flat” line is brutal.</text>
    </svg>
  )
}

/** Force on a redirect pulley against the angle between its strands. */
export function RedirectForce() {
  const cases: [number, string][] = [[0, '2.00 T'], [90, '1.41 T'], [120, '1.00 T'], [180, '≈ 0']]
  return (
    <svg className="diagram" viewBox="0 0 660 250" role="img" aria-label="Force on a redirect pulley: 2 times the rope tension when the rope makes a U-turn, 1.41 times at 90 degrees between strands, equal to the tension at 120 degrees, and nearly zero when the rope runs straight past">
      <defs><Arrow id="rd-a" color={BAD} /></defs>
      <text x={20} y={22} fontSize="13" fontWeight="700">A redirect pulley’s anchor feels the vector sum of both strands</text>
      {cases.map(([deg, lab], i) => {
        const cx = 90 + i * 160, cy = 100
        const h = (deg * Math.PI) / 360
        const L = 60
        const lx = cx - L * Math.sin(h), rx = cx + L * Math.sin(h), yy = cy + L * Math.cos(h)
        const f = 2 * Math.cos(h)
        return (
          <g key={deg}>
            <line x1={lx} y1={yy} x2={cx} y2={cy} stroke={A} strokeWidth="4" />
            <line x1={rx} y1={yy} x2={cx} y2={cy} stroke={A} strokeWidth="4" />
            <circle cx={cx} cy={cy} r={10} fill={P2} stroke={TXT} strokeWidth="2" />
            {f > 0.05 && <line x1={cx} y1={cy - 12} x2={cx} y2={cy - 12 - f * 25} stroke={BAD} strokeWidth="3" markerEnd="url(#rd-a)" />}
            <text x={cx} y={200} textAnchor="middle" fontSize="12">{deg}° between strands</text>
            <text x={cx} y={220} textAnchor="middle" fontSize="14" fontWeight="800">{lab}</text>
          </g>
        )
      })}
      <text x={20} y={244} fontSize="11" className="muted-fill">T = rope tension. Force = 2·T·cos(angle ÷ 2), friction ignored.</text>
    </svg>
  )
}

/** Anchor principles (SERENE / ERNEST) around a two-point anchor. */
export function AnchorPrinciples() {
  const items: [string, string][] = [
    ['Strong / Solid', 'each component far stronger than any expected load'],
    ['Redundant', 'no single point of failure'],
    ['Equalised (shared)', 'load spread between points — imperfect in practice'],
    ['No Extension', 'if one point fails, little or no drop and shock'],
    ['Efficient / Timely', 'simple enough to build and check correctly'],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 290" role="img" aria-label="Anchor principles often taught as SERENE or ERNEST: strong, redundant, equalised, no extension, efficient or timely, shown around a two-point anchor with a master point and a narrow angle">
      <rect x={20} y={40} width={250} height={24} fill={GROUND} />
      <circle cx={80} cy={70} r={9} fill={TXT} />
      <circle cx={210} cy={70} r={9} fill={TXT} />
      <line x1={80} y1={70} x2={145} y2={170} stroke={A} strokeWidth="5" />
      <line x1={210} y1={70} x2={145} y2={170} stroke={A} strokeWidth="5" />
      <circle cx={145} cy={170} r={8} fill={INFO} />
      <line x1={145} y1={178} x2={145} y2={250} stroke={TXT} strokeWidth="3" strokeDasharray="6 4" />
      <text x={160} y={176} fontSize="11">master point</text>
      <text x={145} y={128} textAnchor="middle" fontSize="11" className="muted-fill">narrow angle</text>
      <text x={145} y={270} textAnchor="middle" fontSize="11" className="muted-fill">load direction</text>
      <text x={300} y={24} fontSize="13" fontWeight="700">What instructors check (SERENE / ERNEST)</text>
      {items.map(([t, s], i) => (
        <g key={t}>
          <rect x={300} y={38 + i * 46} width={340} height={40} rx="8" fill={P2} stroke={LINE} />
          <text x={312} y={55 + i * 46} fontSize="12" fontWeight="700">{t}</text>
          <text x={312} y={70 + i * 46} fontSize="10" className="muted-fill">{s}</text>
        </g>
      ))}
      <text x={20} y={24} fontSize="12" fontWeight="700" style={{ fill: BAD }}>Principles, not a build guide</text>
    </svg>
  )
}

/** 1:1, 2:1 and 3:1 (“Z”) schematics with ideal tensions. */
export function MASystems() {
  const R = 13
  return (
    <svg className="diagram" viewBox="0 0 660 330" role="img" aria-label="Schematics of 1:1, 2:1 and 3:1 hauling systems. In the 2:1 the load hangs on two rope parts each carrying the haul force; in the 3:1 Z system an anchor pulley and a travelling pulley on the load line give three parts. Ideal advantage is the number of rope parts pulling on the load">
      <defs><Arrow id="ma-a" color={A} /></defs>
      {/* 1:1 */}
      <text x={20} y={22} fontSize="12" fontWeight="700">1:1 — direct</text>
      <line x1={80} y1={50} x2={560} y2={50} stroke={A} strokeWidth="3" />
      <line x1={80} y1={50} x2={30} y2={50} stroke={A} strokeWidth="3" markerEnd="url(#ma-a)" />
      <rect x={560} y={36} width={60} height={28} rx="4" fill={GROUND} /><text x={590} y={55} textAnchor="middle" fontSize="11" fontWeight="700">load</text>
      <text x={300} y={42} textAnchor="middle" fontSize="11">T = F</text>
      <text x={20} y={75} fontSize="10" className="muted-fill">haulers pull F · load gets F · 1 m pulled = 1 m moved</text>

      {/* 2:1 */}
      <text x={20} y={110} fontSize="12" fontWeight="700">2:1 — rope end anchored, pulley on the load</text>
      <rect x={70} y={122} width={12} height={20} fill={TXT} />
      <line x1={82} y1={130} x2={545} y2={130} stroke={A} strokeWidth="3" />
      <circle cx={545} cy={130 + R} r={R} fill={P2} stroke={TXT} strokeWidth="2" />
      <line x1={545} y1={130 + 2 * R} x2={40} y2={130 + 2 * R} stroke={A} strokeWidth="3" markerEnd="url(#ma-a)" />
      <rect x={570} y={130} width={60} height={28} rx="4" fill={GROUND} /><text x={600} y={149} textAnchor="middle" fontSize="11" fontWeight="700">load</text>
      <text x={300} y={124} textAnchor="middle" fontSize="11">F</text>
      <text x={300} y={172} textAnchor="middle" fontSize="11">F (haul)</text>
      <text x={20} y={190} fontSize="10" className="muted-fill">load gets 2F · 2 m pulled = 1 m moved</text>

      {/* 3:1 */}
      <text x={20} y={222} fontSize="12" fontWeight="700">3:1 “Z” — anchor pulley A + travelling pulley B on the load line</text>
      <rect x={82} y={238} width={12} height={32} fill={TXT} />
      <circle cx={110} cy={240 + R} r={R} fill={P2} stroke={TXT} strokeWidth="2" /><text x={110} y={244 + R} textAnchor="middle" fontSize="10" fontWeight="700">A</text>
      <line x1={110} y1={240} x2={560} y2={240} stroke={A} strokeWidth="3" />
      <line x1={110} y1={240 + 2 * R} x2={400} y2={240 + 2 * R} stroke={A} strokeWidth="3" />
      <circle cx={400} cy={240 + 3 * R} r={R} fill={P2} stroke={TXT} strokeWidth="2" /><text x={400} y={244 + 3 * R} textAnchor="middle" fontSize="10" fontWeight="700">B</text>
      <line x1={400} y1={240 + 4 * R} x2={40} y2={240 + 4 * R} stroke={A} strokeWidth="3" markerEnd="url(#ma-a)" />
      <line x1={414} y1={240 + 3 * R} x2={430} y2={240} stroke={INFO} strokeWidth="3" strokeDasharray="4 3" />
      <text x={440} y={262} fontSize="10" className="muted-fill">rope grab</text>
      <rect x={560} y={226} width={60} height={28} rx="4" fill={GROUND} /><text x={590} y={245} textAnchor="middle" fontSize="11" fontWeight="700">load</text>
      <text x={250} y={234} textAnchor="middle" fontSize="11">F</text>
      <text x={250} y={262} textAnchor="middle" fontSize="11">F</text>
      <text x={250} y={308} textAnchor="middle" fontSize="11">F (haul)</text>
      <text x={430} y={290} fontSize="11">load gets 2F (via B) + F = 3F</text>
      <text x={20} y={326} fontSize="10" className="muted-fill">Ideal (frictionless) values. Friction at each pulley reduces them — see the next figure. Schematic only.</text>
    </svg>
  )
}

/** Actual vs ideal MA for different per-pulley efficiencies. */
export function FrictionMA() {
  const systems: [string, number[]][] = [['2:1', [2]], ['3:1', [3]], ['5:1', [5]], ['6:1 (2 on 3)', [3, 2]], ['9:1 (3 on 3)', [3, 3]]]
  const effs: [string, number, string][] = [['ideal', 1, LINE], ['0.95', 0.95, OK], ['0.85', 0.85, INFO], ['carabiners ≈ 0.53', Math.exp(-0.2 * Math.PI), BAD]]
  const bw = 22, gx = 120
  const Y = (v: number) => 230 - v * 20
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Actual mechanical advantage compared with ideal for 2:1, 3:1, 5:1, 6:1 and 9:1 systems at pulley efficiencies of 1, 0.95, 0.85 and about 0.53 for carabiners. A 9:1 built with carabiners gives only about 3.3:1">
      <text x={20} y={22} fontSize="13" fontWeight="700">Actual MA = 1 + η + η² + … (× for compound systems)</text>
      <line x1={50} y1={230} x2={640} y2={230} stroke={LINE} />
      {[0, 3, 6, 9].map((v) => <text key={v} x={44} y={Y(v) + 4} textAnchor="end" fontSize="10" className="muted-fill">{v}</text>)}
      {systems.map(([name, parts], i) => {
        const x = 70 + i * gx
        return (
          <g key={name}>
            {effs.map(([lab, e, c], j) => {
              const v = parts.reduce((a, n) => a * simpleMA(n, e), 1)
              return (
                <g key={lab}>
                  <rect x={x + j * bw} y={Y(v)} width={bw - 3} height={230 - Y(v)} fill={c} stroke={j === 0 ? MUTED : 'none'} />
                  <text x={x + j * bw + (bw - 3) / 2} y={Y(v) - 4} textAnchor="middle" fontSize="9">{v.toFixed(1)}</text>
                </g>
              )
            })}
            <text x={x + 2 * bw} y={248} textAnchor="middle" fontSize="11" fontWeight="700">{name}</text>
          </g>
        )
      })}
      {effs.map(([lab, , c], j) => (
        <g key={lab}>
          <rect x={60 + j * 140} y={266} width={12} height={12} fill={c} stroke={j === 0 ? MUTED : 'none'} />
          <text x={78 + j * 140} y={276} fontSize="11">{j === 0 ? 'ideal (no friction)' : j === 3 ? 'carabiner η ≈ 0.53' : `η = ${lab}`}</text>
        </g>
      ))}
      <text x={20} y={296} fontSize="10" className="muted-fill">Model efficiencies for illustration; real pulleys, ropes and loads differ.</text>
    </svg>
  )
}

/** Terrain classes: when a slip becomes a fall, and where rope skills begin. */
export function TerrainClasses() {
  const bands: [string, number, string[], string[], string][] = [
    ['Walking', 8, ['hands not needed;', 'a slip = a stumble'], ['you, with judgement'], OK],
    ['Steep ground', 25, ['hands for balance;', 'a slip may slide'], ['you — turn back', 'early if unsure'], INFO],
    ['Exposed scramble', 45, ['hands needed; a slip', 'can become a fall'], ['training and', 'experience'], A2],
    ['Climbing', 70, ['the rope or your', 'grip holds you'], ['formal training', 'only'], BAD],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 290" role="img" aria-label="Terrain classes from walking to steep ground, exposed scrambling and climbing. The key question is whether a slip becomes a fall; once it can, rope work and formal training are needed, and the untrained answer is to turn back or call for help">
      <text x={20} y={24} fontSize="13" fontWeight="700">Ask: “If I slip here, do I stop — or fall?”</text>
      {bands.map(([t, deg, s, who, c], i) => {
        const x = 20 + i * 158
        const r = (deg * Math.PI) / 180
        return (
          <g key={t}>
            <rect x={x} y={40} width={150} height={150} rx="8" fill={P2} stroke={c} strokeWidth="2" />
            <text x={x + 10} y={60} fontSize="12" fontWeight="700">{t}</text>
            <line x1={x + 20} y1={110} x2={x + 20 + 60 * Math.cos(r)} y2={110 - 60 * Math.sin(r)} stroke={GROUND} strokeWidth="6" strokeLinecap="round" />
            <line x1={x + 20} y1={110} x2={x + 90} y2={110} stroke={LINE} strokeDasharray="3 3" />
            <text x={x + 95} y={108} fontSize="10" className="muted-fill">~{deg}°</text>
            {s.map((line, k) => <text key={line} x={x + 10} y={134 + k * 13} fontSize="10">{line}</text>)}
            {who.map((line, k) => <text key={line} x={x + 10} y={164 + k * 13} fontSize="10" className="muted-fill">{k === 0 ? 'Who: ' : ''}{line}</text>)}
          </g>
        )
      })}
      <text x={20} y={214} fontSize="11">Low-angle: the ground carries most of the load; a rope only helps.</text>
      <text x={20} y={232} fontSize="11">High-angle: the rope carries the load — a life-safety system.</text>
      <text x={20} y={262} fontSize="11" className="muted-fill">Angles are rough guides: rock quality, wetness, snow, ice and what lies below matter more.</text>
      <text x={20} y={280} fontSize="11" className="muted-fill">Going down is harder than going up — do not climb what you cannot reverse.</text>
    </svg>
  )
}

/** The rescue response ladder: safest options first; rope rescue is for trained teams. */
export function RescueLadder() {
  const steps: [string, string, string][] = [
    ['1 · Don’t become the second casualty', 'scene safety; stay back from edges and water', OK],
    ['2 · Call for help early', 'emergency number, PLB / satellite messenger, precise location', OK],
    ['3 · Talk, reach, throw — from a safe place', 'voice, pole, rope thrown to someone who can hold it', INFO],
    ['4 · Care without rope', 'shelter, warmth, first aid, signalling — keep them safe where they are', INFO],
    ['5 · Rope rescue, raising, lowering', 'trained & equipped teams only (mountain / fire / SAR)', BAD],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 300" role="img" aria-label="Rescue response ladder: first do not become a second casualty, call for help early, talk reach or throw from a safe place, care for the person without rope, and leave rope rescue, raising and lowering to trained teams">
      <text x={20} y={22} fontSize="13" fontWeight="700">Work down the ladder — most lives are saved in the top four rungs</text>
      {steps.map(([t, s, c], i) => (
        <g key={t}>
          <rect x={20 + i * 20} y={36 + i * 50} width={600 - i * 20} height={42} rx="8" fill={P2} stroke={c} strokeWidth="2" />
          <text x={32 + i * 20} y={54 + i * 50} fontSize="12" fontWeight="700">{t}</text>
          <text x={32 + i * 20} y={70 + i * 50} fontSize="10" className="muted-fill">{s}</text>
        </g>
      ))}
      <text x={20} y={296} fontSize="11" style={{ fill: BAD }} fontWeight="700">Untrained improvised rope rescue kills rescuers. Learn it on a course, not in an emergency.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's13-rope-construction': RopeConstruction,
  's13-fall-factor': FallFactor,
  's13-rope-inspection': RopeInspection,
  's13-knot-families': KnotFamilies,
  's13-knot-strength': KnotStrength,
  's13-vector-angles': VectorAngles,
  's13-redirect-force': RedirectForce,
  's13-anchor-principles': AnchorPrinciples,
  's13-ma-systems': MASystems,
  's13-friction-ma': FrictionMA,
  's13-terrain-classes': TerrainClasses,
  's13-rescue-ladder': RescueLadder,
}
