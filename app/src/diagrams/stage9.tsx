import type { ComponentType } from 'react'

// Stage 9 (Wilderness First Aid) SVG diagrams. Colors only via CSS variables (light/dark safe).

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Box({ x, y, w, h, title, lines = [], fill = P2, strong = false }: { x: number; y: number; w: number; h: number; title: string; lines?: string[]; fill?: string; strong?: boolean }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={strong ? A : LINE} strokeWidth={strong ? 2 : 1} />
      <text x={x + w / 2} y={y + 20} textAnchor="middle" fontSize="13" fontWeight="700">{title}</text>
      {lines.map((l, i) => (
        <text key={l} x={x + w / 2} y={y + 38 + i * 15} textAnchor="middle" fontSize="11" className="muted-fill">{l}</text>
      ))}
    </g>
  )
}

export function PasFlow() {
  return (
    <svg className="diagram" viewBox="0 0 760 330" role="img" aria-label="Patient assessment system: scene size-up, primary survey, secondary survey, SOAP note and monitoring, looping back to reassess">
      <defs><Arrow id="pf" color={A} /></defs>
      <Box x={10} y={20} w={170} h={120} title="1. Scene size-up" lines={['Hazards to you, bystanders', 'and patient', 'Mechanism · how many', 'Gloves · resources']} strong />
      <Box x={200} y={20} w={170} h={120} title="2. Primary survey" lines={['Responsive? (AVPU)', 'Massive bleeding', 'Airway · Breathing', 'Circulation · Disability', 'Environment (protect)']} fill="var(--bad-soft)" />
      <Box x={390} y={20} w={170} h={120} title="3. Secondary survey" lines={['Head-to-toe exam', 'Vital signs (baseline)', 'SAMPLE history', 'OPQRST for pain']} />
      <Box x={580} y={20} w={170} h={120} title="4. SOAP + plan" lines={['Problem list', 'Treatment', 'Evacuation urgency', 'Written record']} />
      {[180, 370, 560].map((x) => <line key={x} x1={x + 2} y1={80} x2={x + 18} y2={80} stroke={A} strokeWidth="2.5" markerEnd="url(#pf)" />)}
      <Box x={200} y={190} w={360} h={70} title="5. Monitor and reassess" lines={['Vitals every 5–15 min if unstable, hourly if stable', 'Trends beat single numbers']} strong />
      <path d="M665,140 L665,225 L562,225" fill="none" stroke={A} strokeWidth="2.5" markerEnd="url(#pf)" />
      <path d="M198,225 L95,225 L95,142" fill="none" stroke={A} strokeWidth="2.5" markerEnd="url(#pf)" strokeDasharray="6 4" />
      <text x={100} y={290} fontSize="11" className="muted-fill">Any change (worse or new hazard) → go back to the start of the loop.</text>
      <text x={100} y={308} fontSize="11" className="muted-fill">Fix life threats in the primary survey as you find them — don’t finish the list first.</text>
    </svg>
  )
}

export function VitalsRanges() {
  const rows: [string, string, string, string][] = [
    ['LOR (AVPU)', 'A+Ox4', 'confused, V, P', 'U'],
    ['Heart rate', '60–100 /min', '> 100 or < 60', '> 130, or slow + altered'],
    ['Resp. rate', '12–20 /min', '> 20 or < 12', '> 30 or < 8'],
    ['Radial pulse', 'strong, regular', 'weak, rapid', 'absent'],
    ['Skin (SCTM)', 'pink, warm, dry', 'pale, cool, moist', 'grey, cold, clammy'],
    ['Core temp', '36.5–37.5 °C', '< 35 or > 38.5', '< 32 or > 40 + altered'],
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 290" role="img" aria-label="Adult resting vital signs: normal, concerning and critical ranges">
      {['Vital sign', 'Normal (adult, rest)', 'Concerning', 'Critical'].map((h, i) => (
        <text key={h} x={[10, 200, 390, 580][i]} y={24} fontSize="13" fontWeight="700">{h}</text>
      ))}
      {rows.map((r, j) => (
        <g key={r[0]}>
          <rect x={4} y={36 + j * 40} width={752} height={34} rx="6" fill={j % 2 ? 'transparent' : P2} />
          <text x={10} y={58 + j * 40} fontSize="12" fontWeight="600">{r[0]}</text>
          <rect x={196} y={42 + j * 40} width={176} height={22} rx="11" fill={OK} opacity="0.2" />
          <text x={204} y={58 + j * 40} fontSize="12">{r[1]}</text>
          <rect x={386} y={42 + j * 40} width={176} height={22} rx="11" fill="var(--warn)" opacity="0.2" />
          <text x={394} y={58 + j * 40} fontSize="12">{r[2]}</text>
          <rect x={576} y={42 + j * 40} width={176} height={22} rx="11" fill={BAD} opacity="0.2" />
          <text x={584} y={58 + j * 40} fontSize="12">{r[3]}</text>
        </g>
      ))}
      <text x={10} y={282} fontSize="10.5" className="muted-fill">Teaching ranges for adults; age, fitness and medication shift them — the patient’s own trend matters most.</text>
    </svg>
  )
}

export function SoapLayout() {
  const secs: [string, string, string[]][] = [
    ['S', 'Subjective — what they tell you', ['Age, sex, chief complaint', 'SAMPLE: Symptoms, Allergies, Medications,', 'Past history, Last in/out, Events', 'OPQRST for pain']],
    ['O', 'Objective — what you find', ['Scene and mechanism', 'Head-to-toe findings', 'Vital signs with times (table)']],
    ['A', 'Assessment — problem list', ['Each problem, most serious first', 'Anticipated problems (e.g. shock, infection)']],
    ['P', 'Plan — for each problem', ['Treatment given and planned', 'Monitoring interval', 'Evacuation: none / non-urgent / urgent / emergent']],
  ]
  return (
    <svg className="diagram" viewBox="0 0 700 390" role="img" aria-label="SOAP note layout: Subjective, Objective, Assessment, Plan">
      <rect x={10} y={10} width={680} height={370} rx="10" fill={P2} stroke={LINE} />
      <text x={30} y={36} fontSize="12" className="muted-fill">Patient · date · time · location (grid ref) · responder name</text>
      {secs.map(([k, t, ls], i) => (
        <g key={k}>
          <rect x={24} y={50 + i * 82} width={46} height={62} rx="8" fill={[A, INFO, A2, OK][i]} />
          <text x={47} y={90 + i * 82} textAnchor="middle" fontSize="26" fontWeight="800" style={{ fill: '#fff' }}>{k}</text>
          <text x={84} y={68 + i * 82} fontSize="13" fontWeight="700">{t}</text>
          {ls.map((l, j) => <text key={l} x={84} y={86 + i * 82 + j * 14} fontSize="11" className="muted-fill">{l}</text>)}
        </g>
      ))}
    </svg>
  )
}

export function RecoveryPosition() {
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="Recovery position: patient on side, upper knee bent to stop rolling, head tilted so the mouth drains downward">
      <rect x={0} y={200} width={700} height={60} fill={GROUND} opacity="0.35" />
      <rect x={60} y={196} width={560} height={8} rx="4" fill={INFO} opacity="0.6" />
      <text x={340} y={230} textAnchor="middle" fontSize="11" className="muted-fill">insulating pad under the whole body (cold ground steals heat)</text>
      {/* head */}
      <circle cx={130} cy={160} r={26} fill={P2} stroke={A} strokeWidth="2" />
      <path d="M112,176 L100,190" stroke={A} strokeWidth="2" />
      <text x={20} y={100} fontSize="11">mouth angled down</text>
      <text x={20} y={114} fontSize="11">— fluid drains out</text>
      {/* torso */}
      <path d="M150,170 Q250,140 360,170 L360,192 Q250,196 150,192 Z" fill={P2} stroke={A} strokeWidth="2" />
      {/* upper arm under cheek */}
      <path d="M170,150 Q150,120 128,134" fill="none" stroke={A} strokeWidth="9" strokeLinecap="round" />
      <text x={175} y={116} fontSize="11">top hand under cheek</text>
      {/* lower arm forward */}
      <path d="M180,192 L110,194" stroke={A} strokeWidth="9" strokeLinecap="round" />
      {/* legs: lower straight, upper bent */}
      <path d="M360,186 L560,188" stroke={A} strokeWidth="12" strokeLinecap="round" />
      <path d="M360,172 L450,120 L470,192" fill="none" stroke={A2} strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
      <text x={470} y={110} fontSize="11">upper knee bent at ~90° —</text>
      <text x={470} y={124} fontSize="11">stops the body rolling forward</text>
      <text x={20} y={24} fontSize="13" fontWeight="700">For: unresponsive (or vomiting, drowsy) and breathing normally</text>
      <text x={20} y={42} fontSize="11" className="muted-fill">Check breathing continuously. Not breathing normally → CPR (learn it on a hands-on course).</text>
      <text x={20} y={58} fontSize="11" className="muted-fill">Suspected spine injury: airway still comes first; log-roll with helpers, keep head in line.</text>
    </svg>
  )
}

export function TourniquetPlacement() {
  return (
    <svg className="diagram" viewBox="0 0 740 300" role="img" aria-label="Tourniquet placement: 5 to 8 centimetres above the wound on the limb, never over a joint; high and tight if the wound cannot be seen">
      {/* leg */}
      <path d="M60,120 L560,110 Q600,108 610,140 L620,190 L580,196 L560,150 L60,170 Z" fill={P2} stroke={LINE} strokeWidth="2" />
      <text x={70} y={100} fontSize="12" className="muted-fill">hip / groin</text>
      <circle cx={330} cy={143} r={20} fill="none" stroke={MUT} strokeDasharray="3 3" />
      <text x={330} y={100} textAnchor="middle" fontSize="12" className="muted-fill">knee (joint)</text>
      {/* wound */}
      <ellipse cx={470} cy={140} rx={16} ry={7} fill={BAD} />
      <text x={470} y={220} textAnchor="middle" fontSize="12" fill={BAD}>wound</text>
      <line x1={470} y1={150} x2={470} y2={206} stroke={BAD} />
      {/* correct tourniquet */}
      <rect x={400} y={108} width={20} height={70} rx="4" fill={A} />
      <text x={410} y={248} textAnchor="middle" fontSize="12" fontWeight="700">5–8 cm above</text>
      <text x={410} y={264} textAnchor="middle" fontSize="11" className="muted-fill">tighten until bleeding stops</text>
      <line x1={410} y1={182} x2={410} y2={234} stroke={A} />
      {/* high and tight */}
      <rect x={110} y={112} width={20} height={64} rx="4" fill={A2} />
      <text x={120} y={210} textAnchor="middle" fontSize="12" fontWeight="700">“high and tight”</text>
      <text x={120} y={226} textAnchor="middle" fontSize="11" className="muted-fill">when you can’t see or</text>
      <text x={120} y={240} textAnchor="middle" fontSize="11" className="muted-fill">find the wound quickly</text>
      {/* no over joint */}
      <line x1={312} y1={120} x2={348} y2={166} stroke={BAD} strokeWidth="3" />
      <line x1={348} y1={120} x2={312} y2={166} stroke={BAD} strokeWidth="3" />
      <text x={330} y={196} textAnchor="middle" fontSize="11" fill={BAD}>not over a joint</text>
      <text x={20} y={28} fontSize="13" fontWeight="700">Life-threatening limb bleeding → tourniquet early; note the time; never loosen it.</text>
      <text x={20} y={48} fontSize="11" className="muted-fill">Still bleeding? Add a second tourniquet just above the first.</text>
      <text x={20} y={64} fontSize="11" className="muted-fill">Groin, armpit and neck (junctional) wounds can’t take one — pack and press.</text>
    </svg>
  )
}

export function ShockClasses() {
  const W = 700, H = 300
  const x = (f: number) => 70 + (f / 0.5) * 580
  const yHr = (hr: number) => 250 - ((hr - 60) / 100) * 200
  const hr: [number, number][] = [[0, 78], [0.15, 98], [0.3, 122], [0.4, 140], [0.5, 155]]
  const sbp: [number, number][] = [[0, 122], [0.15, 120], [0.3, 110], [0.4, 88], [0.5, 66]]
  const bands = [[0, 0.15, 'I'], [0.15, 0.3, 'II'], [0.3, 0.4, 'III'], [0.4, 0.5, 'IV']] as const
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Haemorrhage classes: heart rate climbs early; blood pressure holds until about 30 percent of blood volume is lost, then falls">
      {bands.map(([a, b, l], i) => (
        <g key={l}>
          <rect x={x(a)} y={40} width={x(b) - x(a)} height={210} fill={[OK, 'var(--warn)', A2, BAD][i]} opacity="0.12" />
          <text x={(x(a) + x(b)) / 2} y={58} textAnchor="middle" fontSize="13" fontWeight="700">Class {l}</text>
          <text x={(x(a) + x(b)) / 2} y={74} textAnchor="middle" fontSize="10.5" className="muted-fill">{['< 15 %', '15–30 %', '30–40 %', '> 40 %'][i]}</text>
        </g>
      ))}
      <polyline points={hr.map(([f, v]) => `${x(f)},${yHr(v)}`).join(' ')} fill="none" stroke={BAD} strokeWidth="3" />
      <polyline points={sbp.map(([f, v]) => `${x(f)},${yHr(v)}`).join(' ')} fill="none" stroke={INFO} strokeWidth="3" strokeDasharray="7 4" />
      <text x={x(0.03)} y={yHr(98)} fontSize="12" fill={BAD} fontWeight="700">heart rate</text>
      <text x={x(0.41)} y={yHr(74)} fontSize="12" fill={INFO} fontWeight="700">systolic BP</text>
      <line x1={70} x2={650} y1={250} y2={250} stroke={LINE} />
      {[0, 0.1, 0.2, 0.3, 0.4, 0.5].map((f) => <text key={f} x={x(f)} y={268} textAnchor="middle" fontSize="11" className="muted-fill">{f * 100}%</text>)}
      <text x={360} y={290} textAnchor="middle" fontSize="11" className="muted-fill">fraction of blood volume lost (70 kg adult ≈ 4.9 L)</text>
      <text x={20} y={24} fontSize="12" fontWeight="700">Compensation hides blood loss: pulse rises early; falling BP and confusion come late.</text>
    </svg>
  )
}

export function SplintPrinciples() {
  return (
    <svg className="diagram" viewBox="0 0 740 280" role="img" aria-label="Splinting principles: immobilise the joint above and below a fracture, pad well, check circulation sensation and movement before and after">
      <text x={20} y={26} fontSize="13" fontWeight="700">Forearm fracture: the splint spans the joint below (wrist) and the joint above (elbow)</text>
      {/* arm */}
      <path d="M80,130 L640,130 L640,170 L80,170 Z" fill={P2} stroke={LINE} strokeWidth="2" />
      <circle cx={200} cy={150} r={22} fill="none" stroke={MUT} strokeDasharray="3 3" />
      <text x={200} y={206} textAnchor="middle" fontSize="11" className="muted-fill">elbow (joint above)</text>
      <circle cx={560} cy={150} r={22} fill="none" stroke={MUT} strokeDasharray="3 3" />
      <text x={560} y={206} textAnchor="middle" fontSize="11" className="muted-fill">wrist (joint below)</text>
      <path d="M370,126 L385,150 L372,174" fill="none" stroke={BAD} strokeWidth="3" />
      <text x={378} y={120} textAnchor="middle" fontSize="11" fill={BAD}>fracture</text>
      {/* padding and rigid splint */}
      <rect x={140} y={112} width={480} height={12} rx="4" fill={SKY} opacity="0.6" />
      <rect x={140} y={96} width={480} height={14} rx="3" fill={GROUND} />
      <text x={132} y={104} textAnchor="end" fontSize="11">rigid support</text>
      <text x={132} y={122} textAnchor="end" fontSize="11">padding</text>
      {[180, 280, 470, 590].map((x) => <rect key={x} x={x} y={92} width={10} height={82} rx="3" fill={A} opacity="0.8" />)}
      <text x={380} y={82} textAnchor="middle" fontSize="11">ties/tape away from the fracture site</text>
      <g transform="translate(20,222)">
        <rect width={700} height={48} rx="8" fill="var(--ok-soft)" />
        <text x={12} y={20} fontSize="12" fontWeight="700">CSM before and after: Circulation, Sensation, Movement beyond the injury.</text>
        <text x={12} y={38} fontSize="11" className="muted-fill">Position of function (hand around a roll, ankle at 90°). Worse CSM → loosen and re-check.</text>
      </g>
    </svg>
  )
}

export function BurnDepth() {
  const cols = [
    { t: 'Superficial', sub: 'epidermis only', look: 'red, dry, painful, no blisters', d: 1 },
    { t: 'Partial thickness', sub: 'into dermis', look: 'blisters, wet, very painful', d: 2 },
    { t: 'Full thickness', sub: 'through dermis', look: 'white/leathery/charred, less pain', d: 3 },
  ]
  const layers = [
    { n: 'epidermis', h: 20, c: 'var(--warn)' },
    { n: 'dermis', h: 60, c: A2 },
    { n: 'fat', h: 50, c: 'var(--warn-soft)' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 740 300" role="img" aria-label="Burn depth: superficial, partial thickness and full thickness burns shown on skin layers">
      {cols.map((c, i) => {
        const x0 = 20 + i * 240
        let y = 60
        return (
          <g key={c.t}>
            <text x={x0 + 105} y={28} textAnchor="middle" fontSize="13" fontWeight="700">{c.t}</text>
            <text x={x0 + 105} y={46} textAnchor="middle" fontSize="11" className="muted-fill">{c.sub}</text>
            {layers.map((l) => {
              const r = <rect key={l.n} x={x0} y={y} width={210} height={l.h} fill={l.c} opacity="0.5" stroke={LINE} />
              y += l.h
              return r
            })}
            <rect x={x0 + 60} y={60} width={90} height={[20, 70, 130][c.d - 1]} fill={BAD} opacity="0.55" />
            <text x={x0 + 105} y={220} textAnchor="middle" fontSize="11">{c.look}</text>
          </g>
        )
      })}
      <g transform="translate(20,240)">
        <rect width={700} height={50} rx="8" fill="var(--info-soft)" />
        <text x={12} y={20} fontSize="12" fontWeight="700">Cool with clean, cool running water ~20 min — never ice, butter or toothpaste.</text>
        <text x={12} y={38} fontSize="11" className="muted-fill">Keep the patient warm. Cover loosely with cling film; don’t pop blisters.</text>
      </g>
    </svg>
  )
}

export function RuleOfNines() {
  const cx = 180
  return (
    <svg className="diagram" viewBox="0 0 700 380" role="img" aria-label="Rule of nines for adults: head 9 percent, each arm 9, front of trunk 18, back of trunk 18, each leg 18, genitals 1; the patient’s palm with fingers is about 1 percent">
      {/* front figure */}
      <circle cx={cx} cy={50} r={28} fill={A} opacity="0.75" />
      <text x={cx} y={55} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>9</text>
      <rect x={cx - 45} y={82} width={90} height={130} rx="10" fill={A2} opacity="0.7" />
      <text x={cx} y={150} textAnchor="middle" fontSize="15" fontWeight="700" style={{ fill: '#fff' }}>18</text>
      <text x={cx} y={168} textAnchor="middle" fontSize="10" style={{ fill: '#fff' }}>front</text>
      <rect x={cx - 80} y={86} width={30} height={130} rx="12" fill={INFO} opacity="0.7" />
      <text x={cx - 65} y={155} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>9</text>
      <rect x={cx + 50} y={86} width={30} height={130} rx="12" fill={INFO} opacity="0.7" />
      <text x={cx + 65} y={155} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>9</text>
      <rect x={cx - 43} y={216} width={40} height={150} rx="14" fill={OK} opacity="0.7" />
      <text x={cx - 23} y={295} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>18</text>
      <rect x={cx + 3} y={216} width={40} height={150} rx="14" fill={OK} opacity="0.7" />
      <text x={cx + 23} y={295} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>18</text>
      <circle cx={cx} cy={214} r={7} fill={BAD} />
      <text x={cx + 60} y={236} fontSize="11">1 (genitals)</text>
      <text x={cx} y={20} textAnchor="middle" fontSize="12" className="muted-fill">adult, front view</text>
      {/* back trunk note */}
      <rect x={330} y={82} width={90} height={130} rx="10" fill={A2} opacity="0.4" stroke={A2} strokeDasharray="5 3" />
      <text x={375} y={150} textAnchor="middle" fontSize="15" fontWeight="700">18</text>
      <text x={375} y={168} textAnchor="middle" fontSize="10">back of trunk</text>
      <text x={330} y={330} fontSize="11">Total: 9 + 9 + 9 + 18 + 18 + 18 + 18 + 1 = 100 %</text>
      {/* palm */}
      <g transform="translate(470,60)">
        <rect width={210} height={140} rx="10" fill={P2} stroke={LINE} />
        <path d="M60,120 L60,70 Q60,58 70,58 L70,40 Q76,30 82,40 L82,58 L88,30 Q94,22 100,30 L98,58 L108,34 Q114,26 120,34 L114,62 L126,48 Q134,44 136,54 L120,92 Q112,120 90,120 Z" fill={A} opacity="0.6" />
        <text x={150} y={80} fontSize="13" fontWeight="700">≈ 1 %</text>
        <text x={105} y={136} textAnchor="middle" fontSize="10.5" className="muted-fill">patient’s palm + fingers</text>
      </g>
      <text x={470} y={230} fontSize="11" className="muted-fill">Use the palm for small or scattered burns.</text>
      <text x={470} y={246} fontSize="11" className="muted-fill">Count partial + full thickness only.</text>
      <text x={470} y={262} fontSize="11" className="muted-fill">Children: bigger head, smaller legs —</text>
      <text x={470} y={278} fontSize="11" className="muted-fill">adult nines under-count the head.</text>
    </svg>
  )
}

export function WoundIrrigation() {
  return (
    <svg className="diagram" viewBox="0 0 720 260" role="img" aria-label="Wound irrigation: a jet of clean water from a syringe or pierced bag, held a few centimetres away and angled so debris washes out and away">
      <rect x={60} y={170} width={600} height={50} rx="12" fill={P2} stroke={LINE} />
      <path d="M300,170 Q340,195 380,170" fill={BAD} opacity="0.6" />
      {[320, 340, 356].map((x) => <circle key={x} cx={x} cy={180} r={3} fill={GROUND} />)}
      {/* syringe */}
      <g transform="translate(40,50) rotate(35 250 90)">
        <rect x={150} y={80} width={110} height={24} rx="4" fill={SKY} opacity="0.5" stroke={LINE} />
        <rect x={120} y={86} width={34} height={12} fill={MUT} />
        <rect x={260} y={88} width={24} height={8} fill={MUT} />
      </g>
      <path d="M320,164 L336,176" fill="none" stroke={INFO} strokeWidth="4" strokeDasharray="4 3" />
      <path d="M380,178 Q440,190 480,200" fill="none" stroke={INFO} strokeWidth="3" markerEnd="url(#wi)" />
      <defs><Arrow id="wi" color={INFO} /></defs>
      <text x={490} y={204} fontSize="11">debris flushed out and away</text>
      <text x={60} y={30} fontSize="13" fontWeight="700">Irrigate: lots of clean (drinkable) water, under pressure</text>
      <text x={60} y={48} fontSize="11" className="muted-fill">Syringe or a pinhole in a clean bag · a few cm away · angled · a litre or more if dirty</text>
      <text x={60} y={244} fontSize="11" className="muted-fill">Bleeding first, cleaning second. Leave dirty wounds and bites open — closing traps bacteria.</text>
    </svg>
  )
}

export function HypothermiaWrap() {
  const layers = [
    { t: 'Ground insulation (pads, packs, branches)', c: GROUND },
    { t: 'Sleeping bag / dry insulation all around', c: A2 },
    { t: 'Vapour barrier (plastic, bivy, foil)', c: SKY },
    { t: 'Wind/rain shell (tarp, tent)', c: INFO },
  ]
  return (
    <svg className="diagram" viewBox="0 0 820 280" role="img" aria-label="Hypothermia wrap: ground insulation, dry insulation, vapour barrier and outer wind shell, with warm bottles at chest and armpits">
      {layers.map((l, i) => (
        <rect key={l.t} x={60 + i * 18} y={70 + i * 14} width={440 - i * 36} height={150 - i * 28} rx={60 - i * 10} fill="none" stroke={l.c} strokeWidth="8" opacity="0.8" />
      ))}
      <ellipse cx={280} cy={144} rx={130} ry={24} fill={P2} stroke={LINE} />
      <circle cx={160} cy={144} r={18} fill={P2} stroke={LINE} />
      {[[240, 132], [300, 132], [270, 160]].map(([x, y]) => <rect key={`${x}${y}`} x={x - 10} y={y - 7} width={20} height={14} rx="4" fill={BAD} opacity="0.8" />)}
      <text x={280} y={240} textAnchor="middle" fontSize="10.5">red: warm bottles at chest, armpits, back</text>
      {layers.map((l, i) => (
        <g key={l.t}>
          <rect x={530} y={70 + i * 34} width={14} height={14} fill={l.c} />
          <text x={552} y={82 + i * 34} fontSize="11">{l.t}</text>
        </g>
      ))}
      <text x={20} y={28} fontSize="13" fontWeight="700">Stop heat loss first: out of wind and wet, horizontal, handled gently</text>
      <text x={20} y={46} fontSize="11" className="muted-fill">Warm, sweet drinks only if alert and able to swallow. No rubbing, no alcohol. Covering the head matters.</text>
      <text x={20} y={260} fontSize="11" className="muted-fill">Moderate/severe hypothermia (drowsy, not shivering, unresponsive) → emergent evacuation, handle like glass.</text>
    </svg>
  )
}

export function HeatSpectrum() {
  const items = [
    { t: 'Cramps / fainting', d: 'mind normal; rest, shade; fluids + salt', c: OK },
    { t: 'Heat exhaustion', d: 'weak, dizzy, headache; mind normal; rest, cool, drink; better in ~30 min', c: 'var(--warn)' },
    { t: 'Heat stroke', d: 'hot + ALTERED MIND; COOL FIRST; (immersion best); transport second', c: BAD },
    { t: 'Hyponatraemia', d: 'altered mind; normal temperature; drank lots of water; no more water; evacuate', c: INFO },
  ]
  return (
    <svg className="diagram" viewBox="0 0 740 250" role="img" aria-label="Heat illness spectrum: cramps and syncope, heat exhaustion, heat stroke; and exercise-associated hyponatraemia as a look-alike">
      <defs><linearGradient id="hs-g" x1="0" x2="1"><stop offset="0" stopColor="var(--ok)" /><stop offset="1" stopColor="var(--bad)" /></linearGradient></defs>
      <rect x={20} y={40} width={540} height={14} rx="7" fill="url(#hs-g)" opacity="0.7" />
      <text x={20} y={30} fontSize="12" fontWeight="700">Mental status is the dividing line</text>
      {items.map((it, i) => (
        <g key={it.t}>
          <rect x={i < 3 ? 20 + i * 180 : 580} y={70} width={i < 3 ? 170 : 150} height={130} rx="8" fill={P2} stroke={it.c} strokeWidth="2" />
          <text x={(i < 3 ? 20 + i * 180 : 580) + 10} y={92} fontSize="12" fontWeight="700">{it.t}</text>
          {it.d.split('; ').map((l, j) => (
            <text key={l} x={(i < 3 ? 20 + i * 180 : 580) + 10} y={112 + j * 16} fontSize="10.5" className="muted-fill">{l}</text>
          ))}
        </g>
      ))}
      <text x={580} y={60} fontSize="11" className="muted-fill">look-alike</text>
      <text x={20} y={232} fontSize="11" className="muted-fill">Heat stroke: cold-water immersion is best; otherwise soak and fan continuously; stop at ~38.5 °C (WMS 2024).</text>
    </svg>
  )
}

export function SnakebiteDos() {
  const dos = ['Move away; don’t catch or kill the snake', 'Keep the patient calm, still, lying down', 'Remove rings, watches, tight boots', 'Splint; mark swelling edge and time', 'Evacuate to a hospital with antivenom', 'Australia: pressure immobilisation bandage']
  const donts = ['Cut or incise the bite', 'Suck (mouth or suction pump)', 'Tight tourniquet', 'Ice or cold packs', 'Electric shock, alcohol, herbal pastes', 'Waste time on snake identification']
  return (
    <svg className="diagram" viewBox="0 0 720 280" role="img" aria-label="Snakebite first aid: do and do not lists">
      <rect x={10} y={10} width={340} height={260} rx="10" fill="var(--ok-soft)" />
      <rect x={370} y={10} width={340} height={260} rx="10" fill="var(--bad-soft)" />
      <text x={24} y={36} fontSize="14" fontWeight="800" fill={OK}>DO</text>
      <text x={384} y={36} fontSize="14" fontWeight="800" fill={BAD}>DON’T (myths)</text>
      {dos.map((d, i) => <text key={d} x={24} y={66 + i * 32} fontSize="12">✓ {d}</text>)}
      {donts.map((d, i) => <text key={d} x={384} y={66 + i * 32} fontSize="12">✗ {d}</text>)}
    </svg>
  )
}

export function SpineSmr() {
  return (
    <svg className="diagram" viewBox="0 0 740 330" role="img" aria-label="Selective spinal motion restriction: after a significant mechanism, check reliability, spine pain or tenderness and neurological signs; if any is present, restrict motion">
      <defs><Arrow id="sp" color={A} /></defs>
      <Box x={210} y={10} w={320} h={50} title="Mechanism that could hurt the spine?" strong />
      <Box x={20} y={100} w={200} h={60} title="No" lines={['Treat other injuries normally']} fill="var(--ok-soft)" />
      <Box x={270} y={90} w={200} h={130} title="Yes → check (trained)" lines={['Reliable? (alert, sober,', 'no distracting injury)', 'Spine pain / tenderness?', 'Numbness, tingling,', 'weakness?']} />
      <Box x={520} y={100} w={200} h={100} title="Any problem" lines={['Spinal motion restriction:', 'still, supported, neutral,', 'padded — evacuate']} fill="var(--bad-soft)" />
      <Box x={250} y={250} w={240} h={60} title="All normal" lines={['Spine cleared (by trained responder)']} fill="var(--ok-soft)" />
      <line x1={330} y1={60} x2={160} y2={98} stroke={A} strokeWidth="2" markerEnd="url(#sp)" />
      <line x1={370} y1={60} x2={370} y2={88} stroke={A} strokeWidth="2" markerEnd="url(#sp)" />
      <line x1={470} y1={150} x2={518} y2={150} stroke={A} strokeWidth="2" markerEnd="url(#sp)" />
      <line x1={370} y1={220} x2={370} y2={248} stroke={A} strokeWidth="2" markerEnd="url(#sp)" />
      <text x={20} y={200} fontSize="11" className="muted-fill">Lay first aiders: ask the person</text>
      <text x={20} y={214} fontSize="11" className="muted-fill">to keep still; don’t apply collars.</text>
      <text x={20} y={228} fontSize="11" className="muted-fill">Airway always wins over the spine.</text>
      <text x={520} y={230} fontSize="11" className="muted-fill">Rigid boards: not for long carries —</text>
      <text x={520} y={244} fontSize="11" className="muted-fill">padded litter / vacuum mattress instead.</text>
    </svg>
  )
}

export function EvacTree() {
  return (
    <svg className="diagram" viewBox="0 0 760 360" role="img" aria-label="Evacuation decision tree: from the patient's condition and trend choose none, non-urgent, urgent or emergent; then choose a plan from resources, terrain, weather and daylight">
      <defs><Arrow id="et" color={A} /></defs>
      <Box x={260} y={10} w={240} h={48} title="Patient + TREND (SOAP)" strong />
      {[
        ['None', 'minor, field-treatable', OK],
        ['Non-urgent', 'stable; can walk out', 'var(--warn)'],
        ['Urgent', 'needs hospital within hours', A2],
        ['Emergent', 'life/limb threat now', BAD],
      ].map(([t, d, c], i) => (
        <g key={t}>
          <rect x={10 + i * 190} y={100} width={170} height={60} rx="8" fill={P2} stroke={c} strokeWidth="2.5" />
          <text x={95 + i * 190} y={124} textAnchor="middle" fontSize="13" fontWeight="700">{t}</text>
          <text x={95 + i * 190} y={144} textAnchor="middle" fontSize="11" className="muted-fill">{d}</text>
          <line x1={380} y1={58} x2={95 + i * 190} y2={98} stroke={A} strokeWidth="1.8" markerEnd="url(#et)" />
          <line x1={95 + i * 190} y1={160} x2={95 + i * 190} y2={196} stroke={A} strokeWidth="1.8" markerEnd="url(#et)" />
          <rect x={10 + i * 190} y={198} width={170} height={70} rx="8" fill={P2} stroke={LINE} />
          {[
            ['Treat, continue', 'or modify the trip'],
            ['Walk out, assisted', 'lighten pack, go by day'],
            ['Call early; walk if able,', 'else rescue team / air'],
            ['Call now; fastest', 'safe asset; move toward it'],
          ][i].map((l, j) => <text key={l} x={95 + i * 190} y={224 + j * 16} textAnchor="middle" fontSize="11">{l}</text>)}
        </g>
      ))}
      <text x={10} y={300} fontSize="12" fontWeight="700">Plan filters:</text>
      <text x={10} y={318} fontSize="11" className="muted-fill">Walks? · distance + terrain · daylight · weather (can aircraft fly?) · people (litter 6+) · comms · risk</text>
      <text x={10} y={336} fontSize="11" className="muted-fill">Re-decide whenever the trend changes. A patient who was “non-urgent” can become emergent.</text>
    </svg>
  )
}

export function VitalsTrend() {
  const data = [
    { t: 0, hr: 92, rr: 18 },
    { t: 15, hr: 100, rr: 20 },
    { t: 30, hr: 110, rr: 22 },
    { t: 45, hr: 118, rr: 24 },
    { t: 60, hr: 126, rr: 26 },
  ]
  const x = (t: number) => 70 + (t / 60) * 560
  const y = (v: number) => 230 - ((v - 10) / 130) * 190
  return (
    <svg className="diagram" viewBox="0 0 700 280" role="img" aria-label="Vital sign trend: heart rate and breathing rate rising steadily over an hour, a warning of worsening shock even though each value alone looks only moderately abnormal">
      <rect x={70} y={y(100)} width={560} height={y(60) - y(100)} fill={OK} opacity="0.12" />
      <polyline points={data.map((d) => `${x(d.t)},${y(d.hr)}`).join(' ')} fill="none" stroke={BAD} strokeWidth="3" />
      <polyline points={data.map((d) => `${x(d.t)},${y(d.rr)}`).join(' ')} fill="none" stroke={INFO} strokeWidth="3" strokeDasharray="6 4" />
      {data.map((d) => (
        <g key={d.t}>
          <circle cx={x(d.t)} cy={y(d.hr)} r="4" fill={BAD} />
          <text x={x(d.t)} y={y(d.hr) - 10} textAnchor="middle" fontSize="11">{d.hr}</text>
          <circle cx={x(d.t)} cy={y(d.rr)} r="4" fill={INFO} />
          <text x={x(d.t)} y={y(d.rr) - 10} textAnchor="middle" fontSize="11">{d.rr}</text>
          <text x={x(d.t)} y={252} textAnchor="middle" fontSize="11" className="muted-fill">{d.t} min</text>
        </g>
      ))}
      <line x1={70} x2={630} y1={236} y2={236} stroke={LINE} />
      <text x={640} y={y(126) + 4} fontSize="11" fill={BAD}>HR</text>
      <text x={640} y={y(26) + 4} fontSize="11" fill={INFO}>RR</text>
      <text x={20} y={24} fontSize="12" fontWeight="700">Each reading is “a bit high”; the trend says worse every 15 min → upgrade urgency.</text>
    </svg>
  )
}

export function ImprovisedLitter() {
  return (
    <svg className="diagram" viewBox="0 0 740 280" role="img" aria-label="Improvised litter: two poles through jackets or a folded tarp, padding on top, patient packaged in a sleeping bag, six to eight carriers rotating">
      <text x={20} y={26} fontSize="13" fontWeight="700">Pole-and-tarp (or pole-and-jackets) litter</text>
      <line x1={80} y1={110} x2={660} y2={110} stroke={GROUND} strokeWidth="10" strokeLinecap="round" />
      <line x1={80} y1={190} x2={660} y2={190} stroke={GROUND} strokeWidth="10" strokeLinecap="round" />
      <path d="M130,104 L610,104 L610,196 L130,196 Z" fill={SKY} opacity="0.35" stroke={INFO} strokeDasharray="6 4" />
      <text x={370} y={98} textAnchor="middle" fontSize="11">tarp folded around the poles in thirds — friction holds it</text>
      <rect x={170} y={122} width={400} height={56} rx="26" fill={A2} opacity="0.55" />
      <text x={370} y={156} textAnchor="middle" fontSize="12" style={{ fill: '#fff' }}>patient in sleeping bag on a pad</text>
      {[100, 370, 640].flatMap((x) => [66, 220].map((y) => (
        <circle key={`${x}-${y}`} cx={x} cy={y} r={12} fill={A} opacity="0.8" />
      )))}
      <text x={370} y={246} textAnchor="middle" fontSize="11" className="muted-fill">6 carriers + relief team; swap every few minutes; one leader calls lifts and steps</text>
      <text x={370} y={264} textAnchor="middle" fontSize="11" className="muted-fill">Test with a sandbag or rucksack at ground level first — never carry a real person over hazards to practise.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'pas-flow': PasFlow,
  'vitals-ranges': VitalsRanges,
  'soap-layout': SoapLayout,
  'recovery-position': RecoveryPosition,
  'tourniquet-placement': TourniquetPlacement,
  'shock-classes': ShockClasses,
  'splint-principles': SplintPrinciples,
  'burn-depth': BurnDepth,
  'rule-of-nines': RuleOfNines,
  'wound-irrigation': WoundIrrigation,
  'hypothermia-wrap': HypothermiaWrap,
  'heat-spectrum': HeatSpectrum,
  'snakebite-dos': SnakebiteDos,
  'spine-smr': SpineSmr,
  'evac-tree': EvacTree,
  'vitals-trend': VitalsTrend,
  'improvised-litter': ImprovisedLitter,
}
