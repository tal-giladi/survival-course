import type { ComponentType } from 'react'
import { bendEfficiency, capstan, twistEfficiency } from '../sims/stage7/cordageModel'

// Stage 7 SVG diagrams (bushcraft). Colors only via CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const GROUND = 'var(--ground)'

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

/** Simple line chart frame. */
function Axes({ x0, y0, w, h, xLabel, yLabel }: { x0: number; y0: number; w: number; h: number; xLabel: string; yLabel: string }) {
  return (
    <g>
      <line x1={x0} y1={y0} x2={x0 + w} y2={y0} stroke={LINE} />
      <line x1={x0} y1={y0} x2={x0} y2={y0 - h} stroke={LINE} />
      <text x={x0 + w / 2} y={y0 + 30} textAnchor="middle" fontSize="11" className="muted-fill">{xLabel}</text>
      <text x={x0 - 34} y={y0 - h / 2} textAnchor="middle" fontSize="11" className="muted-fill" transform={`rotate(-90 ${x0 - 34} ${y0 - h / 2})`}>{yLabel}</text>
    </g>
  )
}

// ---------- Lesson 1: cordage ----------

export function TwistHelix() {
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Why twist adds strength: twisted fibers are squeezed together by their own tension, and each fiber runs at the helix angle alpha to the cord axis">
      <defs><Arrow id="s7th" color={A} /><Arrow id="s7th2" color={INFO} /></defs>
      {/* untwisted bundle */}
      <text x="20" y="24" fontSize="13" fontWeight="700">No twist</text>
      {[0, 1, 2, 3, 4].map((k) => <line key={k} x1={20 + (k % 2) * 30} y1={50 + k * 9} x2={230 - (k % 3) * 25} y2={50 + k * 9} stroke={GROUND} strokeWidth="3" />)}
      <line x1="235" y1="68" x2="280" y2="68" stroke={A} strokeWidth="2" markerEnd="url(#s7th)" />
      <text x="20" y="116" fontSize="11" className="muted-fill">Fibers are shorter than the cord and only</text>
      <text x="20" y="130" fontSize="11" className="muted-fill">touch lightly: pull and they slide apart.</text>
      {/* twisted */}
      <text x="330" y="24" fontSize="13" fontWeight="700">Twisted</text>
      <rect x="330" y="46" width="240" height="44" rx="22" fill={A2} opacity="0.25" stroke={LINE} />
      {Array.from({ length: 9 }, (_, i) => <path key={i} d={`M${320 + i * 30},90 L${350 + i * 30},46`} stroke={GROUND} strokeWidth="3" />)}
      <line x1="575" y1="68" x2="620" y2="68" stroke={A} strokeWidth="2" markerEnd="url(#s7th)" />
      {/* angle */}
      <line x1="440" y1="90" x2="500" y2="90" stroke={INFO} strokeDasharray="4 3" />
      <path d="M470,90 A30,30 0 0,0 461,72" fill="none" stroke={INFO} />
      <text x="474" y="80" fontSize="12" style={{ fill: INFO }}>α</text>
      {[0, 1, 2].map((k) => <line key={k} x1={380 + k * 70} y1="112" x2={380 + k * 70} y2="94" stroke={INFO} strokeWidth="2" markerEnd="url(#s7th2)" />)}
      <text x="330" y="130" fontSize="11" className="muted-fill">Tension in each helical fiber presses it inward</text>
      <text x="330" y="144" fontSize="11" className="muted-fill">(blue): friction now grips every fiber.</text>
      {/* summary boxes */}
      <rect x="20" y="170" width="290" height="74" rx="8" fill={P2} stroke={LINE} />
      <text x="32" y="192" fontSize="12" fontWeight="700">Grip grows with twist</text>
      <text x="32" y="212" fontSize="11">More twist → more inward pressure → more</text>
      <text x="32" y="228" fontSize="11">friction → fibers share load instead of slipping.</text>
      <rect x="330" y="170" width="290" height="74" rx="8" fill={P2} stroke={LINE} />
      <text x="342" y="192" fontSize="12" fontWeight="700">Obliquity costs strength</text>
      <text x="342" y="212" fontSize="11">A fiber at angle α carries only ≈ cos α of its</text>
      <text x="342" y="228" fontSize="11">strength along the cord: too much twist is weak.</text>
    </svg>
  )
}

export function TwistCurve() {
  const x0 = 60, y0 = 210, w = 520, h = 170
  const X = (d: number) => x0 + (d / 50) * w
  const Y = (e: number) => y0 - e * h
  const pts = Array.from({ length: 99 }, (_, i) => 1 + i * 0.5).map((d) => `${X(d)},${Y(twistEfficiency(d))}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Relative cord strength against surface twist angle: rises steeply from zero, peaks near 20 degrees, then falls">
      <Axes x0={x0} y0={y0} w={w} h={h} xLabel="surface twist angle α (degrees)" yLabel="relative strength" />
      {[0, 10, 20, 30, 40, 50].map((d) => <text key={d} x={X(d)} y={y0 + 14} textAnchor="middle" fontSize="10" className="muted-fill">{d}</text>)}
      {[0.5, 1].map((e) => <text key={e} x={x0 - 6} y={Y(e) + 4} textAnchor="end" fontSize="10" className="muted-fill">{e * 100}%</text>)}
      <rect x={X(15)} y={y0 - h} width={X(28) - X(15)} height={h} fill={OK} opacity="0.12" />
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      <text x={X(21.5)} y={y0 - h + 14} textAnchor="middle" fontSize="11" style={{ fill: OK }}>sweet spot ~15–28°</text>
      <text x={X(3)} y={Y(0.25)} fontSize="11" className="muted-fill">fibers slip</text>
      <text x={X(40)} y={Y(0.72)} fontSize="11" className="muted-fill">fibers oblique,</text>
      <text x={X(40)} y={Y(0.72) + 14} fontSize="11" className="muted-fill">kinks</text>
    </svg>
  )
}

export function ReverseWrap() {
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Reverse wrap: each ply is twisted one way, the plies are wrapped around each other the opposite way, so their torques cancel and the cord stays locked">
      <defs><Arrow id="s7rw" color={A} /><Arrow id="s7rw2" color={BAD} /></defs>
      {/* two plies */}
      {[0, 1].map((k) => (
        <g key={k}>
          {Array.from({ length: 10 }, (_, i) => {
            const x = 60 + i * 50
            const top = k === 0 ? i % 2 === 0 : i % 2 === 1
            return <path key={i} d={`M${x},${top ? 60 : 120} C${x + 20},${top ? 60 : 120} ${x + 30},${top ? 120 : 60} ${x + 50},${top ? 120 : 60}`} fill="none" stroke={k === 0 ? A2 : INFO} strokeWidth="18" strokeLinecap="round" opacity="0.85" />
          })}
        </g>
      ))}
      <text x="60" y="30" fontSize="12" fontWeight="700">Each ply: twisted clockwise (Z) — plies wrapped round each other anticlockwise (S)</text>
      <path d="M40,150 A20,12 0 1,0 80,150" fill="none" stroke={A} strokeWidth="2" markerEnd="url(#s7rw)" />
      <text x="90" y="162" fontSize="11">ply twist wants to unwind one way…</text>
      <path d="M340,150 A20,12 0 1,1 380,150" fill="none" stroke={A} strokeWidth="2" markerEnd="url(#s7rw)" />
      <text x="390" y="162" fontSize="11">…the ply wrap pushes back the other way</text>
      <rect x="40" y="182" width="560" height="54" rx="8" fill={P2} stroke={LINE} />
      <text x="54" y="204" fontSize="12" fontWeight="700">Balanced torque = the cord does not unwind or kink when you let go or load it.</text>
      <text x="54" y="222" fontSize="11" className="muted-fill">A single twisted strand (or plies twisted the same way) stores unbalanced torque: under load it spins, untwists and fails.</text>
    </svg>
  )
}

// ---------- Lesson 2: knots and lashings ----------

export function Capstan() {
  const x0 = 360, y0 = 210, w = 250, h = 160
  const X = (turns: number) => x0 + (turns / 3) * w
  const maxR = capstan(0.3, 3 * 2 * Math.PI)
  const Y = (r: number) => y0 - (Math.log10(r) / Math.log10(maxR)) * h
  const pts = Array.from({ length: 61 }, (_, i) => i * 0.05).map((t) => `${X(t)},${Y(capstan(0.3, t * 2 * Math.PI))}`).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Capstan equation: a rope wrapped around a post holds a large load with a small pull because friction grows exponentially with the angle of wrap">
      <defs><Arrow id="s7cp" color={A} /><Arrow id="s7cp2" color={BAD} /></defs>
      <circle cx="150" cy="120" r="50" fill={GROUND} opacity="0.55" stroke={LINE} />
      <path d="M100,120 A50,50 0 1,1 200,120" fill="none" stroke={A2} strokeWidth="6" />
      <line x1="100" y1="120" x2="100" y2="220" stroke={A2} strokeWidth="6" />
      <line x1="200" y1="120" x2="200" y2="220" stroke={A2} strokeWidth="6" />
      <line x1="100" y1="200" x2="100" y2="240" stroke={BAD} strokeWidth="2" markerEnd="url(#s7cp2)" />
      <text x="40" y="236" fontSize="12" fontWeight="700" style={{ fill: BAD }}>T₂ (load)</text>
      <line x1="200" y1="200" x2="200" y2="225" stroke={A} strokeWidth="2" markerEnd="url(#s7cp)" />
      <text x="210" y="236" fontSize="12" fontWeight="700" style={{ fill: A }}>T₁ (hold)</text>
      <text x="150" y="40" textAnchor="middle" fontSize="12">wrap angle θ = π (half a turn)</text>
      <text x="150" y="124" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>μ</text>
      <text x="150" y="20" textAnchor="middle" fontSize="14" fontWeight="700">T₂ = T₁ · e^(μθ)</text>
      <Axes x0={x0} y0={y0} w={w} h={h} xLabel="turns around the post (μ = 0.3)" yLabel="T₂ / T₁ (log)" />
      {[0, 1, 2, 3].map((t) => <text key={t} x={X(t)} y={y0 + 14} textAnchor="middle" fontSize="10" className="muted-fill">{t}</text>)}
      {[1, 10, 100, 1000].map((r) => r <= maxR && <text key={r} x={x0 - 6} y={Y(r) + 4} textAnchor="end" fontSize="10" className="muted-fill">{r}×</text>)}
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      <circle cx={X(0.5)} cy={Y(capstan(0.3, Math.PI))} r="4" fill={BAD} />
      <text x={X(0.5) + 6} y={Y(capstan(0.3, Math.PI)) - 6} fontSize="10">½ turn ≈ 2.6×</text>
      <circle cx={X(2)} cy={Y(capstan(0.3, 4 * Math.PI))} r="4" fill={BAD} />
      <text x={X(2) - 6} y={Y(capstan(0.3, 4 * Math.PI)) - 8} textAnchor="end" fontSize="10">2 turns ≈ 43×</text>
    </svg>
  )
}

export function BendKnotEfficiency() {
  const x0 = 60, y0 = 210, w = 250, h = 160
  const X = (r: number) => x0 + (Math.log2(r) / 5) * w
  const Y = (e: number) => y0 - e * h
  const pts = Array.from({ length: 51 }, (_, i) => Math.pow(2, i / 10)).map((r) => `${X(r)},${Y(bendEfficiency(r, 1))}`).join(' ')
  const knots: [string, number][] = [['Straight cord', 1], ['Lashing wraps', 0.85], ['Figure-eight loop', 0.75], ['Round turn + 2 half hitches', 0.75], ['Bowline', 0.65], ['Clove hitch', 0.6], ['Overhand loop', 0.5], ['Reef knot (as a bend)', 0.45]]
  return (
    <svg className="diagram" viewBox="0 0 660 260" role="img" aria-label="Strength kept when cord bends around a pin of diameter D, and typical knot efficiencies">
      <Axes x0={x0} y0={y0} w={w} h={h} xLabel="bend ratio D/d (pin ÷ cord diameter)" yLabel="strength kept" />
      {[1, 2, 4, 8, 16, 32].map((r) => <text key={r} x={X(r)} y={y0 + 14} textAnchor="middle" fontSize="10" className="muted-fill">{r}</text>)}
      {[0.5, 0.75, 1].map((e) => <text key={e} x={x0 - 6} y={Y(e) + 4} textAnchor="end" fontSize="10" className="muted-fill">{e * 100}%</text>)}
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      <text x={X(8)} y={Y(0.95)} fontSize="10" className="muted-fill">≈ 1 − 0.5/√(D/d)</text>
      <text x="380" y="30" fontSize="12" fontWeight="700">Typical knot efficiency (pliable cord)</text>
      {knots.map(([n, e], i) => (
        <g key={n}>
          <text x="380" y={54 + i * 24} fontSize="11">{n}</text>
          <rect x="540" y={44 + i * 24} width={100 * e} height="12" rx="3" fill={e >= 0.75 ? OK : e >= 0.6 ? A2 : BAD} />
          <text x={544 + 100 * e} y={54 + i * 24} fontSize="10" className="muted-fill">{Math.round(e * 100)}%</text>
        </g>
      ))}
    </svg>
  )
}

export function Lashings() {
  const pole = (x1: number, y1: number, x2: number, y2: number) => <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={GROUND} strokeWidth="14" strokeLinecap="round" />
  return (
    <svg className="diagram" viewBox="0 0 660 270" role="img" aria-label="Square lashing for poles crossing at right angles, diagonal lashing for poles that tend to spring apart, and tripod lashing for three poles">
      {/* square */}
      <text x="110" y="22" textAnchor="middle" fontSize="13" fontWeight="700">Square</text>
      {pole(110, 40, 110, 210)}{pole(30, 120, 190, 120)}
      {[-1, 0, 1].map((k) => <rect key={k} x={96 + k * 3} y={106 + k * 3} width="28" height="28" fill="none" stroke={A2} strokeWidth="2.5" />)}
      <path d="M96,106 L124,134 M124,106 L96,134" stroke={INFO} strokeWidth="2" />
      <text x="110" y="232" textAnchor="middle" fontSize="11">3–4 wraps, then 2–3 frapping turns</text>
      <text x="110" y="248" textAnchor="middle" fontSize="11" className="muted-fill">poles cross and touch at 90°</text>
      {/* diagonal */}
      <text x="330" y="22" textAnchor="middle" fontSize="13" fontWeight="700">Diagonal</text>
      {pole(270, 50, 390, 200)}{pole(390, 50, 270, 200)}
      <path d="M318,113 L342,137 M320,111 L344,135 M316,115 L340,139" stroke={A2} strokeWidth="2.5" />
      <path d="M342,113 L318,137 M344,115 L320,139" stroke={A2} strokeWidth="2.5" />
      <text x="330" y="232" textAnchor="middle" fontSize="11">starts with a timber hitch that pulls</text>
      <text x="330" y="248" textAnchor="middle" fontSize="11" className="muted-fill">springy poles together, then wraps both ways</text>
      {/* tripod */}
      <text x="550" y="22" textAnchor="middle" fontSize="13" fontWeight="700">Tripod</text>
      {pole(500, 210, 552, 70)}{pole(550, 215, 550, 60)}{pole(600, 210, 548, 70)}
      {[0, 1, 2, 3].map((k) => <path key={k} d={`M534,${84 + k * 5} Q550,${80 + k * 5} 566,${84 + k * 5}`} fill="none" stroke={A2} strokeWidth="2.5" />)}
      <text x="550" y="232" textAnchor="middle" fontSize="11">loose figure-eight weave round 3 legs,</text>
      <text x="550" y="248" textAnchor="middle" fontSize="11" className="muted-fill">then spread the legs to lock it</text>
    </svg>
  )
}

// ---------- Lesson 3: containers ----------

export function BarkContainer() {
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Folded bark container: an ellipse is scored across the grain, the ends fold up along the score and are pinned; the grain must run around the container, not up it">
      <defs><Arrow id="s7bc" color={INFO} /></defs>
      <text x="20" y="22" fontSize="13" fontWeight="700">1. Cut a rectangle, grain running lengthwise</text>
      <rect x="30" y="40" width="260" height="120" rx="6" fill={A2} opacity="0.3" stroke={LINE} />
      {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1="40" y1={52 + k * 19} x2="280" y2={52 + k * 19} stroke={GROUND} strokeWidth="1" opacity="0.6" />)}
      <ellipse cx="160" cy="100" rx="40" ry="55" fill="none" stroke={A} strokeWidth="2.5" strokeDasharray="6 4" />
      <line x1="40" y1="175" x2="280" y2="175" stroke={INFO} strokeWidth="2" markerEnd="url(#s7bc)" />
      <text x="160" y="195" textAnchor="middle" fontSize="11" style={{ fill: INFO }}>grain (fibers) — bark bends easily across it, splits along it</text>
      <text x="160" y="214" textAnchor="middle" fontSize="11">score the lens shape on the inner face only</text>
      <text x="360" y="22" fontSize="13" fontWeight="700">2. Fold the ends up along the score</text>
      <path d="M380,190 Q470,210 560,190 L600,90 Q470,120 340,90 Z" fill={A2} opacity="0.35" stroke={LINE} />
      <path d="M340,90 Q470,120 600,90" fill="none" stroke={A} strokeWidth="2.5" strokeDasharray="6 4" />
      <path d="M340,90 L330,60 M600,90 L610,60" stroke={GROUND} strokeWidth="3" />
      <rect x="315" y="55" width="30" height="45" rx="4" fill="none" stroke={TXT} strokeWidth="1.5" />
      <rect x="595" y="55" width="30" height="45" rx="4" fill="none" stroke={TXT} strokeWidth="1.5" />
      <text x="470" y="236" textAnchor="middle" fontSize="11">pin the folded ends with split sticks; add a rim hoop for stiffness</text>
      <text x="470" y="216" textAnchor="middle" fontSize="11" className="muted-fill">the lens score lets the base stay flat as the sides rise</text>
    </svg>
  )
}

export function Weave() {
  return (
    <svg className="diagram" viewBox="0 0 640 230" role="img" aria-label="Plain weave: weavers go over and under stiff stakes, alternating each row; twining: two weavers twist around each stake">
      <text x="20" y="22" fontSize="13" fontWeight="700">Plain (over-under) weave</text>
      {[0, 1, 2, 3, 4, 5, 6].map((k) => <line key={k} x1={50 + k * 36} y1="36" x2={50 + k * 36} y2="200" stroke={GROUND} strokeWidth="7" strokeLinecap="round" />)}
      {[0, 1, 2, 3].map((row) => {
        const y = 60 + row * 36
        let d = `M30,${y}`
        for (let k = 0; k < 7; k++) {
          const over = (k + row) % 2 === 0
          d += ` Q${50 + k * 36},${y + (over ? -9 : 9)} ${68 + k * 36},${y}`
        }
        return <path key={row} d={d} fill="none" stroke={A2} strokeWidth="5" />
      })}
      <text x="160" y="222" textAnchor="middle" fontSize="11" className="muted-fill">stakes (stiff, odd number for a round basket) · weavers (pliable)</text>
      <text x="360" y="22" fontSize="13" fontWeight="700">Twining (two weavers)</text>
      {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1={380 + k * 42} y1="36" x2={380 + k * 42} y2="200" stroke={GROUND} strokeWidth="7" strokeLinecap="round" />)}
      {[0, 1, 2].map((row) => {
        const y = 70 + row * 46
        let d1 = `M362,${y}`, d2 = `M362,${y}`
        for (let k = 0; k < 6; k++) {
          d1 += ` Q${380 + k * 42},${y - 12} ${401 + k * 42},${y}`
          d2 += ` Q${380 + k * 42},${y + 12} ${401 + k * 42},${y}`
        }
        return <g key={row}><path d={d1} fill="none" stroke={A2} strokeWidth="4" /><path d={d2} fill="none" stroke={INFO} strokeWidth="4" /></g>
      })}
      <text x="490" y="222" textAnchor="middle" fontSize="11" className="muted-fill">a twist between stakes locks each one: tight, watertight-able</text>
    </svg>
  )
}

export function StoneBoiling() {
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Stone boiling energy balance: hot stones give up heat to the water; about 3 kilograms of stones at 500 degrees are needed to bring 2 litres of water from 15 degrees to boiling, allowing for losses">
      <defs><Arrow id="s7sb" color={BAD} /></defs>
      {/* fire */}
      <path d="M40,200 Q70,120 100,200 Q120,140 150,200 Z" fill={A2} opacity="0.8" />
      {[60, 90, 120].map((x) => <circle key={x} cx={x} cy="190" r="14" fill={MUT} stroke={LINE} />)}
      <text x="95" y="228" textAnchor="middle" fontSize="11">stones heated ~30 min</text>
      <text x="95" y="244" textAnchor="middle" fontSize="11" className="muted-fill">dry, non-layered rock (not from a river bed)</text>
      <path d="M170,170 Q230,110 290,160" fill="none" stroke={BAD} strokeWidth="2.5" markerEnd="url(#s7sb)" />
      <text x="230" y="112" textAnchor="middle" fontSize="11">tongs, shake off ash</text>
      {/* container */}
      <path d="M300,110 L320,210 L440,210 L460,110 Z" fill={INFO} opacity="0.3" stroke={LINE} strokeWidth="2" />
      <line x1="305" y1="130" x2="455" y2="130" stroke={INFO} strokeWidth="2" />
      {[350, 395].map((x) => <circle key={x} cx={x} cy="195" r="12" fill={MUT} />)}
      {[340, 370, 400, 420].map((x, i) => <circle key={x} cx={x} cy={170 - i * 8} r="3" fill="none" stroke={INFO} />)}
      <text x="380" y="236" textAnchor="middle" fontSize="11">bark, wood, hide or a lined pit</text>
      {/* balance */}
      <rect x="480" y="30" width="150" height="190" rx="8" fill={P2} stroke={LINE} />
      <text x="492" y="52" fontSize="12" fontWeight="700">2 L, 15 → 100 °C</text>
      <text x="492" y="72" fontSize="11">water: 2 × 4.18 × 85</text>
      <text x="492" y="88" fontSize="11">≈ 710 kJ</text>
      <text x="492" y="112" fontSize="11">stone: c ≈ 0.8 kJ/(kg·°C)</text>
      <text x="492" y="128" fontSize="11">500 → 100 °C: 320 kJ/kg</text>
      <text x="492" y="152" fontSize="11">ideal: 710/320 ≈ 2.2 kg</text>
      <text x="492" y="168" fontSize="11">with ~30 % losses:</text>
      <text x="492" y="190" fontSize="13" fontWeight="700" style={{ fill: A }}>≈ 3 kg of stones</text>
      <text x="492" y="208" fontSize="10" className="muted-fill">in 4–6 batches</text>
    </svg>
  )
}

// ---------- Lesson 4: knife and wood tools ----------

export function BloodCircle() {
  return (
    <svg className="diagram" viewBox="0 0 640 270" role="img" aria-label="The blood circle: anyone within arm's length plus blade length of a knife user is in danger; the femoral artery zone on the inner thigh must never be in the blade's path">
      <circle cx="170" cy="140" r="115" fill={BAD} opacity="0.08" stroke={BAD} strokeWidth="2" strokeDasharray="8 5" />
      <circle cx="170" cy="140" r="26" fill={P2} stroke={LINE} />
      <text x="170" y="145" textAnchor="middle" fontSize="11">you</text>
      <line x1="196" y1="140" x2="285" y2="140" stroke={TXT} strokeWidth="2" />
      <text x="240" y="132" textAnchor="middle" fontSize="10">arm + blade</text>
      <circle cx="330" cy="60" r="12" fill={OK} /><text x="348" y="64" fontSize="11">outside: safe to talk</text>
      <circle cx="235" cy="220" r="12" fill={BAD} /><text x="253" y="224" fontSize="11">inside: stop cutting</text>
      <text x="170" y="22" textAnchor="middle" fontSize="13" fontWeight="700">The blood circle</text>
      {/* seated posture */}
      <text x="490" y="22" textAnchor="middle" fontSize="13" fontWeight="700">Seated carving</text>
      <circle cx="470" cy="60" r="16" fill={P2} stroke={LINE} />
      <line x1="470" y1="76" x2="470" y2="150" stroke={TXT} strokeWidth="4" />
      <path d="M470,150 L540,150 L540,220" fill="none" stroke={TXT} strokeWidth="4" />
      <path d="M470,150 L520,160 L520,220" fill="none" stroke={TXT} strokeWidth="4" opacity="0.5" />
      <rect x="490" y="142" width="44" height="14" fill={BAD} opacity="0.45" />
      <text x="585" y="140" fontSize="10" style={{ fill: BAD }}>inner thigh:</text>
      <text x="585" y="153" fontSize="10" style={{ fill: BAD }}>femoral artery</text>
      <line x1="560" y1="118" x2="610" y2="100" stroke={A} strokeWidth="3" />
      <text x="560" y="92" fontSize="10">work outside the knee,</text>
      <text x="560" y="104" fontSize="10">cut away from the body</text>
      <text x="490" y="250" textAnchor="middle" fontSize="11" className="muted-fill">elbows on knees · blade stroke ends in air, never at a body part</text>
    </svg>
  )
}

export function Batoning() {
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Batoning: the knife acts as a wedge driven by a wooden baton; the tip must protrude beyond the log so the baton strikes it, and the wedge force splits along the grain">
      <defs><Arrow id="s7bt" color={BAD} /><Arrow id="s7bt2" color={INFO} /></defs>
      <rect x="120" y="120" width="200" height="100" rx="8" fill={GROUND} opacity="0.5" stroke={LINE} />
      <ellipse cx="220" cy="120" rx="100" ry="18" fill={A2} opacity="0.4" stroke={LINE} />
      <rect x="60" y="220" width="520" height="16" fill={GROUND} opacity="0.35" />
      <text x="330" y="232" fontSize="10" className="muted-fill">solid chopping block — never your leg or bare ground with rocks</text>
      {/* knife */}
      <rect x="80" y="108" width="300" height="10" fill={MUT} stroke={LINE} />
      <rect x="30" y="104" width="52" height="18" rx="4" fill={TXT} />
      <text x="400" y="116" fontSize="11">tip protrudes ≥ 5 cm</text>
      {/* baton */}
      <rect x="330" y="46" width="90" height="22" rx="10" fill={GROUND} transform="rotate(-10 375 57)" />
      <line x1="355" y1="80" x2="355" y2="104" stroke={BAD} strokeWidth="2.5" markerEnd="url(#s7bt)" />
      <text x="430" y="60" fontSize="11">baton strikes the spine over the log, then the tip</text>
      <line x1="200" y1="160" x2="160" y2="160" stroke={INFO} strokeWidth="2" markerEnd="url(#s7bt2)" />
      <line x1="240" y1="160" x2="280" y2="160" stroke={INFO} strokeWidth="2" markerEnd="url(#s7bt2)" />
      <text x="220" y="190" textAnchor="middle" fontSize="11" style={{ fill: INFO }}>wedge: small down-force → large sideways force</text>
      <text x="20" y="24" fontSize="12" fontWeight="700">Wedge advantage ≈ blade height ÷ blade thickness: a 25 mm blade, 4 mm thick ≈ 6×</text>
      <text x="20" y="42" fontSize="11" className="muted-fill">Only full-tang fixed blades. Wrist-thick, knot-free rounds. Kneel or stand to the side, other hand clear.</text>
    </svg>
  )
}

// ---------- Lesson 5: stone ----------

export function Conchoidal() {
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Conchoidal fracture: a blow near the edge of a platform at less than 90 degrees starts a Hertzian cone; the crack turns and runs parallel to the face, detaching a flake with a bulb of percussion and ripples">
      <defs><Arrow id="s7cf" color={BAD} /></defs>
      <path d="M60,200 L60,70 L300,70 L340,200 Z" fill={MUT} opacity="0.4" stroke={LINE} strokeWidth="2" />
      <text x="70" y="62" fontSize="11">striking platform</text>
      <path d="M72,70 A12,12 0 0,1 60,82" fill="none" stroke={A} />
      <text x="78" y="92" fontSize="11" style={{ fill: A }}>edge angle &lt; 90°</text>
      <line x1="30" y1="30" x2="72" y2="68" stroke={BAD} strokeWidth="3" markerEnd="url(#s7cf)" />
      <text x="20" y="22" fontSize="11" style={{ fill: BAD }}>blow a few mm in from the edge</text>
      <path d="M74,72 Q70,110 62,120" fill="none" stroke={A2} strokeWidth="2.5" />
      <path d="M74,72 Q100,100 90,140 Q80,175 64,200" fill="none" stroke={A2} strokeWidth="3" />
      <text x="110" y="130" fontSize="11">Hertzian cone starts,</text>
      <text x="110" y="144" fontSize="11">then the crack turns and runs</text>
      <text x="110" y="158" fontSize="11">down the face → a flake</text>
      {/* flake */}
      <path d="M420,70 Q480,60 520,120 Q540,170 500,210 Q450,215 430,170 Q410,120 420,70 Z" fill={MUT} opacity="0.45" stroke={LINE} strokeWidth="2" />
      <ellipse cx="455" cy="92" rx="18" ry="12" fill={A2} opacity="0.6" />
      <text x="540" y="92" fontSize="11">bulb of percussion</text>
      {[0, 1, 2, 3].map((k) => <path key={k} d={`M${430 + k * 4},${120 + k * 22} Q${470},${112 + k * 22} ${515 - k * 4},${128 + k * 22}`} fill="none" stroke={TXT} strokeWidth="1" opacity="0.6" />)}
      <text x="540" y="160" fontSize="11">ripples (like glass)</text>
      <text x="470" y="240" textAnchor="middle" fontSize="11" className="muted-fill">edges thinner than a razor — and the same physics throws sharp spalls</text>
      <text x="200" y="240" textAnchor="middle" fontSize="11" className="muted-fill">works only in fine, uniform, glassy stone (flint, chert, obsidian)</text>
    </svg>
  )
}

export function KnappingPpe() {
  const items: [string, string, string][] = [
    ['Eyes', 'Impact-rated safety glasses (Z87.1 / EN 166)', 'flakes leave the core at speed'],
    ['Lungs', 'Work outdoors, upwind; wet-sweep; P2/N95 or better for long sessions', 'fine crystalline silica dust → silicosis'],
    ['Hands', 'Thick leather pad on the leg and palm; leather gloves', 'lacerations to fingers, palm, thigh'],
    ['Legs / feet', 'Heavy trousers, closed shoes, tarp to catch debris', 'flakes on the ground cut feet and pets'],
    ['Others', 'Onlookers outside a 2–3 m circle with glasses', 'flying spalls'],
    ['Waste', 'Collect and bury debitage away from paths', 'razor shards stay sharp for millennia'],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 250" role="img" aria-label="Flintknapping safety: eyes, lungs, hands, legs, bystanders and waste, with the hazard and control for each">
      <text x="10" y="22" fontSize="13" fontWeight="700">Hazard → control (supervised practice only)</text>
      {items.map(([k, ctrl, why], i) => (
        <g key={k}>
          <rect x="10" y={34 + i * 35} width="90" height="28" rx="6" fill={i < 2 ? BAD : A2} opacity="0.85" />
          <text x="55" y={53 + i * 35} textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: '#fff' }}>{k}</text>
          <text x="110" y={46 + i * 35} fontSize="11">{ctrl}</text>
          <text x="110" y={60 + i * 35} fontSize="10" className="muted-fill">{why}</text>
        </g>
      ))}
    </svg>
  )
}

// ---------- Lesson 6: adhesives, charcoal, pigments, smoke ----------

export function PitchGlue() {
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Pine pitch glue: resin gives stickiness, charcoal powder gives stiffness and filler, a little fat or dung fiber gives toughness; heat gently, never boil or flame">
      {[['Resin (sap)', 'the adhesive: sticky when warm,', 'glassy and brittle when cold', A2, 70], ['Charcoal powder', 'filler: stiffens, cuts brittleness,', 'soaks up solvent-like oils', TXT, 290], ['Temper (fat, beeswax,', 'dung/plant fiber)', 'toughness: stops shattering', INFO, 510]].map(([a, b, c, col, x]) => (
        <g key={a as string}>
          <circle cx={x as number} cy="80" r="52" fill={col as string} opacity="0.2" stroke={col as string} strokeWidth="2" />
          <text x={x as number} y="72" textAnchor="middle" fontSize="12" fontWeight="700">{a}</text>
          <text x={x as number} y="88" textAnchor="middle" fontSize="10">{b}</text>
          <text x={x as number} y="102" textAnchor="middle" fontSize="10">{c}</text>
        </g>
      ))}
      <text x="180" y="84" textAnchor="middle" fontSize="20">+</text>
      <text x="400" y="84" textAnchor="middle" fontSize="20">+</text>
      <text x="290" y="160" textAnchor="middle" fontSize="12">Common start: ~3–5 parts resin : 1 part charcoal : a little temper (by volume) — then test and adjust</text>
      <rect x="40" y="180" width="560" height="54" rx="8" fill={P2} stroke={LINE} />
      <text x="54" y="202" fontSize="12" fontWeight="700" style={{ fill: BAD }}>Heat low and slow, next to (not over) the flame.</text>
      <text x="54" y="220" fontSize="11">Resin’s volatile terpenes (turpentine) catch fire and stick to skin as a burn. Smoking = too hot.</text>
    </svg>
  )
}

export function CharcoalRetort() {
  const stages: [string, string, string][] = [['< 200 °C', 'drying', 'steam'], ['200–280 °C', 'torrefaction', 'acids, CO₂'], ['280–400 °C', 'pyrolysis (exothermic)', 'tar, CO, CH₄ — flammable'], ['400–600 °C', 'carbonisation', 'charcoal ≈ 75–90 % C']]
  return (
    <svg className="diagram" viewBox="0 0 660 260" role="img" aria-label="Charcoal retort: wood sealed in a tin with a small vent is heated in a fire; without oxygen it pyrolyses, and the escaping wood gas burns at the vent; stages from drying to carbonisation">
      <path d="M40,230 Q80,120 120,230 Q150,140 190,230 Q220,150 250,230 Z" fill={A2} opacity="0.75" />
      <rect x="80" y="130" width="130" height="80" rx="6" fill={MUT} stroke={LINE} strokeWidth="2" />
      {[0, 1, 2].map((k) => <rect key={k} x={92 + k * 38} y="146" width="30" height="50" rx="3" fill={GROUND} />)}
      <circle cx="145" cy="130" r="4" fill={TXT} />
      <path d="M145,126 Q135,100 150,80 Q160,100 145,126" fill={A2} />
      <text x="170" y="92" fontSize="11">wood gas burns at the vent</text>
      <text x="170" y="106" fontSize="11" className="muted-fill">stop when the jet dies; seal the vent; cool</text>
      <text x="145" y="250" textAnchor="middle" fontSize="11">sealed tin, one small hole: no air in</text>
      <text x="300" y="22" fontSize="13" fontWeight="700">Stages as the wood heats</text>
      {stages.map(([t, n, out], i) => (
        <g key={t}>
          <rect x="300" y={36 + i * 50} width="100" height="36" rx="6" fill={[INFO, A, A2, TXT][i]} opacity="0.85" />
          <text x="350" y={58 + i * 50} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: i === 3 ? 'var(--panel)' : '#fff' }}>{t}</text>
          <text x="412" y={52 + i * 50} fontSize="12" fontWeight="700">{n}</text>
          <text x="412" y={67 + i * 50} fontSize="11" className="muted-fill">gives off: {out}</text>
        </g>
      ))}
      <text x="300" y="248" fontSize="11">Yield: ~25–30 % of dry wood mass as charcoal, but ~50–60 % of its energy is lost as gas and heat.</text>
    </svg>
  )
}

export function SmokeUses() {
  const rows: [string, string, string, string][] = [
    ['Signal (day)', 'green leaves, damp moss on a hot fire', 'white smoke against dark forest', INFO],
    ['Signal (snow / sky)', 'rubber, oil-soaked rag (sparingly)', 'black smoke against snow or cloud', TXT],
    ['Insect deterrent', 'punky wood, green leaves, smoulder', 'thin, steady smoke — never in a closed shelter', A2],
    ['Drying / smoking food', 'hardwood, low heat, long time', 'drying + surface antimicrobials; not a cook step', A],
    ['Hide tanning', 'punky wood smoulder', 'aldehydes cross-link collagen', OK],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 230" role="img" aria-label="Uses of smoke: signaling with white or black smoke, insect deterrent, drying and smoking food, and hide tanning, with the material and why it works">
      <text x="10" y="22" fontSize="13" fontWeight="700">Smoke = incomplete combustion on purpose</text>
      {rows.map(([u, m, w, c], i) => (
        <g key={u}>
          <rect x="10" y={34 + i * 38} width="140" height="30" rx="6" fill={c} opacity="0.8" />
          <text x="80" y={54 + i * 38} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: c === TXT ? 'var(--panel)' : '#fff' }}>{u}</text>
          <text x="162" y={47 + i * 38} fontSize="11">{m}</text>
          <text x="162" y={61 + i * 38} fontSize="10" className="muted-fill">{w}</text>
        </g>
      ))}
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's7-twist-helix': TwistHelix,
  's7-twist-curve': TwistCurve,
  's7-reverse-wrap': ReverseWrap,
  's7-capstan': Capstan,
  's7-bend-knot': BendKnotEfficiency,
  's7-lashings': Lashings,
  's7-bark-container': BarkContainer,
  's7-weave': Weave,
  's7-stone-boiling': StoneBoiling,
  's7-blood-circle': BloodCircle,
  's7-batoning': Batoning,
  's7-conchoidal': Conchoidal,
  's7-knapping-ppe': KnappingPpe,
  's7-pitch-glue': PitchGlue,
  's7-charcoal-retort': CharcoalRetort,
  's7-smoke': SmokeUses,
}
