import type { ComponentType } from 'react'

// Stage 17 SVG diagrams (vehicle and travel survival). Colors only via CSS variables (light/dark aware).

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
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

function Box({ x, y, w, h, title, sub, fill = P2, stroke = LINE }: { x: number; y: number; w: number; h: number; title: string; sub?: string; fill?: string; stroke?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke} strokeWidth={stroke === LINE ? 1 : 2} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="700" fill={TXT}>{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
}

/** Simple side-view car. */
function Car({ x, y, scale = 1, hoodUp = false }: { x: number; y: number; scale?: number; hoodUp?: boolean }) {
  return (
    <g transform={`translate(${x},${y}) scale(${scale})`}>
      <path d="M0,40 L10,20 L40,18 L60,0 L120,0 L145,20 L180,24 L185,40 Z" fill={P2} stroke={TXT} strokeWidth="1.5" />
      <path d="M64,5 L90,5 L90,20 L48,20 Z M95,5 L118,5 L138,20 L95,20 Z" fill={SKY} opacity="0.6" stroke={LINE} />
      <circle cx="40" cy="42" r="12" fill={TXT} />
      <circle cx="148" cy="42" r="12" fill={TXT} />
      {hoodUp && <path d="M145,20 L165,-6 L180,-2 L180,24" fill="none" stroke={TXT} strokeWidth="2" />}
    </g>
  )
}

/** What goes in a vehicle kit, by function, with climate add-ons. */
export function VehicleKit() {
  const groups: [string, string[]][] = [
    ['Water & food', ['4+ L water / person / day of wait', 'non-perishable snacks']],
    ['Warmth & shelter', ['blankets / sleeping bag', 'hat, gloves, spare dry layers', 'tarp or sheet + cord (shade)']],
    ['Be seen & call', ['charged phone + cable + power bank', 'PLB / satellite messenger (remote)', 'torch, whistle, signal mirror', 'hi-vis vest, warning triangle']],
    ['Car & recovery', ['jumper cables / jump pack', 'spare tyre, jack, tyre inflator', 'shovel; traction boards (sand/snow)', 'tow strap, fuel and coolant checked']],
    ['Care & navigation', ['first-aid kit + your medicines', 'paper map, route plan', 'multi-tool, duct tape, gloves']],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 330" role="img" aria-label="Vehicle emergency kit grouped by function: water and food; warmth and shelter; being seen and calling for help; car repair and recovery; first aid and navigation; with climate add-ons for heat and cold">
      <text x={20} y={24} fontSize="14" fontWeight="700" fill={TXT}>A vehicle kit, by function</text>
      {groups.map(([title, items], i) => {
        const x = 20 + (i % 3) * 213
        const y = 40 + Math.floor(i / 3) * 128
        return (
          <g key={title}>
            <rect x={x} y={y} width={200} height={116} rx="8" fill={P2} stroke={LINE} />
            <text x={x + 10} y={y + 20} fontSize="12.5" fontWeight="700" fill={A}>{title}</text>
            {items.map((it, j) => <text key={it} x={x + 12} y={y + 40 + j * 18} fontSize="10.5" fill={TXT}>• {it}</text>)}
          </g>
        )
      })}
      <rect x={446} y={168} width={200} height={116} rx="8" fill="none" stroke={A2} strokeDasharray="5 3" />
      <text x={456} y={188} fontSize="12.5" fontWeight="700" fill={A2}>Climate add-ons</text>
      <text x={458} y={208} fontSize="10.5" fill={TXT}>Heat: far more water, shade</text>
      <text x={458} y={224} fontSize="10.5" fill={TXT}>cloth, hats, sun-shade</text>
      <text x={458} y={244} fontSize="10.5" fill={TXT}>Cold: sleeping bag, boots,</text>
      <text x={458} y={260} fontSize="10.5" fill={TXT}>snow brush, ice scraper, sand/grit,</text>
      <text x={458} y={276} fontSize="10.5" fill={TXT}>tank kept at least half full</text>
      <text x={20} y={316} fontSize="11" className="muted-fill">Lists after Ready.gov and national road-safety agencies. Scale water and warmth to the longest wait your route could produce.</text>
    </svg>
  )
}

/** Trip plan timeline: departure, check-in, expected arrival, alarm time. */
export function TripPlanTimeline() {
  const pts: [number, string, string][] = [[60, '07:00', 'Depart; plan left'], [230, '11:00', 'Fuel + check-in text'], [400, '15:00', 'Expected arrival'], [560, '18:00', 'Alarm time']]
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Trip plan timeline: depart at 07:00 with a plan left with a contact, check in at the fuel stop at 11:00, expected arrival 15:00, and an agreed alarm time of 18:00 when the contact calls the police with the route, vehicle and people">
      <defs><Arrow id="tp-a" color={A} /></defs>
      <line x1={40} y1={90} x2={610} y2={90} stroke={LINE} strokeWidth="3" markerEnd="url(#tp-a)" />
      {pts.map(([x, t, label], i) => (
        <g key={t}>
          <circle cx={x} cy={90} r={9} fill={i === 3 ? BAD : i === 2 ? OK : A} />
          <text x={x} y={70} textAnchor="middle" fontSize="13" fontWeight="700" fill={TXT}>{t}</text>
          <text x={x} y={118} textAnchor="middle" fontSize="11" fill={TXT}>{label}</text>
        </g>
      ))}
      <rect x={400} y={80} width={160} height={20} fill={A2} opacity="0.18" />
      <text x={480} y={140} textAnchor="middle" fontSize="10" className="muted-fill">grace period</text>
      <Box x={40} y={160} w={270} h={70} title="The plan says" sub="route + alternatives · vehicle, colour, plate · people · kit" />
      <Box x={330} y={160} w={280} h={70} title="At the alarm time, the contact…" sub="calls police/SAR with the plan — does not wait" fill={P2} stroke={BAD} />
    </svg>
  )
}

/** A closed car in the sun: cabin vs outside air; and where to wait instead. */
export function HotCar() {
  const yOf = (t: number) => 210 - (t - 20) * 3.2
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Chart: a closed car in the sun heats tens of degrees above the outside air within half an hour; with 40 degrees outside the cabin can exceed 60 degrees. Better: rest in raised shade beside the car where the air is near outdoor temperature">
      <line x1={60} y1={210} x2={380} y2={210} stroke={LINE} />
      <line x1={60} y1={30} x2={60} y2={210} stroke={LINE} />
      {[20, 30, 40, 50, 60, 70].map((t) => (
        <g key={t}><line x1={56} y1={yOf(t)} x2={380} y2={yOf(t)} stroke={LINE} opacity="0.3" /><text x={52} y={yOf(t) + 4} textAnchor="end" fontSize="10" className="muted-fill">{t} °C</text></g>
      ))}
      {[0, 15, 30, 45, 60].map((m) => <text key={m} x={60 + m * 5} y={226} textAnchor="middle" fontSize="10" className="muted-fill">{m} min</text>)}
      <line x1={60} y1={yOf(40)} x2={360} y2={yOf(40)} stroke={INFO} strokeWidth="2" strokeDasharray="6 3" />
      <text x={365} y={yOf(40) + 4} fontSize="10" fill={INFO}>air 40 °C</text>
      <path d={`M60,${yOf(40)} C110,${yOf(54)} 160,${yOf(58)} 210,${yOf(59)} S330,${yOf(62)} 360,${yOf(62)}`} fill="none" stroke={BAD} strokeWidth="2.5" />
      <text x={300} y={yOf(65)} fontSize="11" fontWeight="700" fill={BAD}>closed cabin</text>
      <text x={60} y={20} fontSize="12" fontWeight="700" fill={TXT}>Illustrative: most of the rise comes in the first 30 minutes</text>
      <g>
        <Car x={420} y={150} scale={1} />
        <path d="M430,110 L620,110 L620,190" fill="none" stroke={A} strokeWidth="3" />
        <path d="M432,120 L612,120" stroke={A2} strokeWidth="2" strokeDasharray="4 3" />
        <rect x={400} y={194} width={230} height={10} fill={GROUND} opacity="0.7" />
        <text x={520} y={100} textAnchor="middle" fontSize="11" fontWeight="700" fill={OK}>Wait in raised double shade, not inside</text>
        <text x={520} y={226} textAnchor="middle" fontSize="10" className="muted-fill">Doors open for airflow; sit on a seat</text>
        <text x={520} y={240} textAnchor="middle" fontSize="10" className="muted-fill">or cushion, off the hot ground</text>
      </g>
    </svg>
  )
}

/** Stay or walk decision for a stranded vehicle. */
export function StayOrWalk() {
  return (
    <svg className="diagram" viewBox="0 0 660 330" role="img" aria-label="Decision chart: stay with the vehicle if anyone knows your route or you have sent an alert, if help or traffic will come, or in extreme heat or a storm. Consider walking only if nobody will look, help is close, certain and reachable in the cool with enough water, and the route is known. Leave a note with direction and time">
      <defs><Arrow id="sw-a" /></defs>
      <Box x={220} y={10} w={220} h={46} title="Stranded. Is life at immediate risk here?" sub="fire, flood water, avalanche path, traffic" />
      <Box x={470} y={10} w={180} h={46} title="Move to safety nearby" sub="then reassess" fill={P2} stroke={BAD} />
      <line x1={440} y1={33} x2={468} y2={33} stroke={MUTED} markerEnd="url(#sw-a)" />
      <text x={452} y={27} fontSize="10" textAnchor="middle" className="muted-fill">yes</text>
      <line x1={330} y1={56} x2={330} y2={84} stroke={MUTED} markerEnd="url(#sw-a)" />
      <text x={340} y={76} fontSize="10" className="muted-fill">no</text>
      <Box x={170} y={86} w={320} h={50} title="Does anyone know where you are — or can you tell them?" sub="trip plan · PLB/satellite SOS · a call or text gets through" />
      <line x1={250} y1={136} x2={150} y2={172} stroke={MUTED} markerEnd="url(#sw-a)" />
      <text x={185} y={150} fontSize="10" className="muted-fill">yes</text>
      <line x1={410} y1={136} x2={500} y2={172} stroke={MUTED} markerEnd="url(#sw-a)" />
      <text x={470} y={150} fontSize="10" className="muted-fill">no</text>
      <rect x={20} y={174} width={260} height={96} rx="8" fill={P2} stroke={OK} strokeWidth="2" />
      <text x={150} y={194} textAnchor="middle" fontSize="12" fontWeight="700" fill={TXT}>STAY with the vehicle</text>
      <text x={34} y={214} fontSize="10.5" fill={TXT}>• shelter, supplies and the biggest signal</text>
      <text x={34} y={230} fontSize="10.5" fill={TXT}>• searchers follow your route</text>
      <text x={34} y={246} fontSize="10.5" fill={TXT}>• rest in the heat, insulate in the cold</text>
      <text x={34} y={262} fontSize="10.5" fill={TXT}>• signals ready; engine only if exhaust clear</text>
      <rect x={330} y={174} width={310} height={96} rx="8" fill={P2} stroke={A2} strokeWidth="2" />
      <text x={485} y={194} textAnchor="middle" fontSize="12" fontWeight="700" fill={TXT}>Walking is worth considering only if ALL:</text>
      <text x={344} y={214} fontSize="10.5" fill={TXT}>• help is close, certain and on a known route</text>
      <text x={344} y={230} fontSize="10.5" fill={TXT}>• you can travel in the cool / after the storm</text>
      <text x={344} y={246} fontSize="10.5" fill={TXT}>• water, clothing and fitness for the whole way</text>
      <text x={344} y={262} fontSize="10.5" fill={TXT}>• waiting would clearly be worse</text>
      <text x={330} y={296} textAnchor="middle" fontSize="11" fontWeight="700" fill={TXT}>If you do leave: note on the dashboard (time, direction, people), mark the route, never split a group without a plan.</text>
      <text x={330} y={316} textAnchor="middle" fontSize="10" className="muted-fill">Road-safety and SAR guidance: in winter storms and desert heat, staying with the vehicle is the default.</text>
    </svg>
  )
}

/** Snow-blocked exhaust versus a cleared tailpipe. */
export function ExhaustCO() {
  return (
    <svg className="diagram" viewBox="0 0 660 290" role="img" aria-label="Two cars in snow. Left: the tailpipe is buried by drifted snow, so exhaust is forced under the car and seeps into the cabin, carbon monoxide builds up. Right: tailpipe dug clear, a downwind window cracked, engine run about 10 minutes per hour, CO alarm; exhaust disperses">
      <defs><Arrow id="co-bad" color={BAD} /><Arrow id="co-ok" color={OK} /></defs>
      <text x={165} y={22} textAnchor="middle" fontSize="13" fontWeight="700" fill={BAD}>Tailpipe buried</text>
      <text x={495} y={22} textAnchor="middle" fontSize="13" fontWeight="700" fill={OK}>Tailpipe cleared</text>
      <line x1={330} y1={30} x2={330} y2={270} stroke={LINE} strokeDasharray="4 4" />
      {/* Left car */}
      <Car x={70} y={120} scale={1} />
      <path d="M20,175 Q60,140 120,165 L300,168 L300,200 L20,200 Z" fill={SKY} opacity="0.35" stroke={LINE} />
      <text x={40} y={196} fontSize="10" className="muted-fill">drifted snow</text>
      <path d="M72,160 C110,178 160,178 190,150" fill="none" stroke={BAD} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#co-bad)" />
      <path d="M150,150 C150,135 160,130 165,128" fill="none" stroke={BAD} strokeWidth="2" strokeDasharray="4 3" markerEnd="url(#co-bad)" />
      <text x={170} y={96} textAnchor="middle" fontSize="11" fill={BAD}>exhaust forced under the car</text>
      <text x={170} y={110} textAnchor="middle" fontSize="11" fill={BAD}>and into the cabin</text>
      <text x={165} y={228} textAnchor="middle" fontSize="11" fill={TXT}>CO: no colour, no smell. Headache,</text>
      <text x={165} y={244} textAnchor="middle" fontSize="11" fill={TXT}>nausea, sleepiness — then unconsciousness.</text>
      <text x={165} y={262} textAnchor="middle" fontSize="11" fontWeight="700" fill={BAD}>Sleeping occupants may never wake.</text>
      {/* Right car */}
      <Car x={400} y={120} scale={1} hoodUp />
      <path d="M350,190 L640,190 L640,200 L350,200 Z" fill={SKY} opacity="0.35" stroke={LINE} />
      <path d="M396,158 C380,150 365,140 352,128" fill="none" stroke={OK} strokeWidth="2" markerEnd="url(#co-ok)" />
      <text x={352} y={118} fontSize="10" fill={OK}>disperses</text>
      <rect x={390} y={150} width={24} height={40} fill="none" stroke={OK} strokeDasharray="3 2" />
      <text x={402} y={210} textAnchor="middle" fontSize="9.5" fill={OK}>dug clear</text>
      <path d="M548,112 L560,104" stroke={INFO} strokeWidth="3" />
      <text x={575} y={100} fontSize="10" fill={INFO}>window cracked</text>
      <path d="M600,95 L612,90" stroke={A2} strokeWidth="2" />
      <text x={440} y={72} fontSize="10" fill={A2}>bright cloth on the antenna</text>
      <text x={495} y={228} textAnchor="middle" fontSize="11" fill={TXT}>Clear the tailpipe before every run and</text>
      <text x={495} y={244} textAnchor="middle" fontSize="11" fill={TXT}>after drifting; run ~10 min per hour;</text>
      <text x={495} y={262} textAnchor="middle" fontSize="11" fontWeight="700" fill={OK}>a battery CO alarm if you have one.</text>
    </svg>
  )
}

/** Fuel budget: continuous idling vs short runs. */
export function FuelBudget() {
  const rows: [string, number, string][] = [['Continuous idling ≈ 1 L/h', 25, BAD], ['10 min per hour ≈ 0.2 L/h', 125, OK]]
  const max = 125
  return (
    <svg className="diagram" viewBox="0 0 640 210" role="img" aria-label="Fuel budget for 25 litres: continuous idling at about 1 litre per hour lasts about 25 hours; running 10 minutes each hour at about 0.2 litres per hour lasts about 125 hours">
      <text x={20} y={24} fontSize="14" fontWeight="700" fill={TXT}>How long does 25 L (half a tank) keep you warm?</text>
      {rows.map(([label, h, color], i) => {
        const w = (h / max) * 380
        const y = 50 + i * 60
        return (
          <g key={label}>
            <text x={20} y={y + 22} fontSize="12" fontWeight="700" fill={TXT}>{label}</text>
            <rect x={200} y={y + 4} width={w} height={28} rx="5" fill={color} opacity="0.8" />
            <text x={206 + w} y={y + 23} fontSize="12" fontWeight="700" fill={TXT}>{h} h</text>
          </g>
        )
      })}
      <text x={20} y={180} fontSize="11" className="muted-fill">Idle consumption varies widely with engine size and heater use — measure your own car (fuel gauge over an hour of idling).</text>
      <text x={20} y={198} fontSize="11" className="muted-fill">Short runs also keep the battery charged for lights and restarting.</text>
    </svg>
  )
}

/** Winter cabin: where heat goes and how to hold it. */
export function WinterCabin() {
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="Keeping warm in a stranded car: windows lose heat fastest, cover them; insulate from the seat and floor; wear hat and all layers; use a sleeping bag or blankets; share body heat; keep moving gently without sweating; eat and drink">
      <path d="M60,200 L90,120 L200,110 L260,50 L430,50 L500,110 L590,120 L600,200 Z" fill={P2} stroke={TXT} strokeWidth="1.5" />
      <path d="M270,60 L340,60 L340,110 L215,110 Z M350,60 L420,60 L480,110 L350,110 Z" fill={SKY} opacity="0.5" stroke={LINE} />
      <circle cx="160" cy="210" r="26" fill={TXT} /><circle cx="500" cy="210" r="26" fill={TXT} />
      {[[290, 85], [400, 85]].map(([x, y]) => (
        <g key={x}>
          <path d={`M${x},${y} l0,-40`} stroke={BAD} strokeWidth="2" markerEnd="url(#wc-a)" />
        </g>
      ))}
      <defs><Arrow id="wc-a" color={BAD} /></defs>
      <text x={345} y={24} textAnchor="middle" fontSize="11" fill={BAD}>Glass loses heat fastest → cover windows (sun-shade, maps, clothing)</text>
      <ellipse cx="330" cy="150" rx="46" ry="28" fill={A2} opacity="0.35" stroke={A2} />
      <text x={330} y={146} textAnchor="middle" fontSize="11" fontWeight="700" fill={TXT}>you, in a bag</text>
      <text x={330} y={160} textAnchor="middle" fontSize="10" fill={TXT}>hat on, all layers</text>
      <rect x={270} y={182} width={120} height={8} fill={A} />
      <text x={330} y={204} textAnchor="middle" fontSize="10" fill={A}>blanket or mat under you</text>
      <text x={20} y={240} fontSize="11" fill={TXT}>• Loosen tight boots, wiggle toes; small movements, not sweat-making exercise.</text>
      <text x={20} y={256} fontSize="11" fill={TXT}>• Eat and drink: shivering burns energy; melt snow in a bottle inside your jacket, don’t eat it.</text>
      <text x={20} y={272} fontSize="11" fill={TXT}>• Several people: huddle in one part of the car; one stays awake to watch for help and the exhaust.</text>
    </svg>
  )
}

/** Roadside breakdown: where to stop and stand. */
export function RoadsideBreakdown() {
  return (
    <svg className="diagram" viewBox="0 0 660 260" role="img" aria-label="Roadside breakdown: pull off as far as possible, hazards on, hi-vis vest on before getting out, exit on the side away from traffic, place the warning triangle well behind the car where legal and safe, and wait behind the barrier or away from the road, upstream of the car">
      <defs><Arrow id="rb-a" color={MUTED} /></defs>
      <rect x={0} y={60} width={660} height={120} fill={GROUND} opacity="0.35" />
      <line x1={0} y1={120} x2={660} y2={120} stroke={TXT} strokeDasharray="20 14" />
      <line x1={0} y1={180} x2={660} y2={180} stroke={TXT} strokeWidth="2" />
      <text x={20} y={100} fontSize="11" className="muted-fill">traffic →</text>
      <text x={20} y={160} fontSize="11" className="muted-fill">traffic →</text>
      <rect x={0} y={180} width={660} height={34} fill={GROUND} opacity="0.2" />
      <text x={600} y={200} fontSize="10" className="muted-fill">shoulder</text>
      <line x1={0} y1={222} x2={660} y2={222} stroke={MUTED} strokeWidth="4" />
      <text x={20} y={240} fontSize="10" className="muted-fill">barrier / verge</text>
      <rect x={470} y={184} width={80} height={26} rx="6" fill={P2} stroke={TXT} />
      <text x={510} y={201} textAnchor="middle" fontSize="10" fontWeight="700" fill={TXT}>your car</text>
      <circle cx="476" cy="186" r="4" fill={A2} /><circle cx="476" cy="208" r="4" fill={A2} />
      <path d="M300,208 l10,-18 l10,18 z" fill="none" stroke={BAD} strokeWidth="2.5" />
      <text x={310} y={176} textAnchor="middle" fontSize="10" fill={BAD}>warning triangle</text>
      <line x1={330} y1={200} x2={466} y2={200} stroke={MUTED} markerEnd="url(#rb-a)" markerStart="url(#rb-a)" />
      <text x={400} y={216} textAnchor="middle" fontSize="9.5" className="muted-fill">distance set by local law; farther on fast roads</text>
      <circle cx="330" cy="244" r="7" fill={OK} />
      <text x={344} y={248} fontSize="10.5" fontWeight="700" fill={OK}>wait here: behind the barrier, upstream of the car</text>
      <text x={20} y={24} fontSize="11" fontWeight="700" fill={TXT}>Hazards on · hi-vis on before you get out · exit away from traffic · never stand between cars or in front of your car</text>
      <text x={20} y={42} fontSize="11" className="muted-fill">If you cannot get off a fast road safely: stay belted in with hazards on and call for help.</text>
    </svg>
  )
}

/** Making a stranded vehicle visible to searchers. */
export function VehicleSignals() {
  return (
    <svg className="diagram" viewBox="0 0 660 280" role="img" aria-label="Making a stranded vehicle visible: hood up, bright cloth on the antenna, a large ground signal such as a V or SOS in contrasting materials, signal mirror flashes toward aircraft or vehicles, headlights or hazards flashed at night in groups of three, whistle blasts in threes; a PLB or satellite messenger sends an alert directly">
      <rect x={0} y={170} width={660} height={110} fill={GROUND} opacity="0.35" />
      <Car x={60} y={120} scale={1} hoodUp />
      <line x1={200} y1={120} x2={200} y2={80} stroke={TXT} strokeWidth="1.5" />
      <path d="M200,80 l24,6 l-24,8 z" fill={A2} />
      <text x={230} y={80} fontSize="10.5" fill={A2}>bright cloth</text>
      <text x={120} y={110} fontSize="10.5" textAnchor="middle" fill={TXT}>hood up = “need help”</text>
      <g transform="translate(330,176)">
        <path d="M0,0 L40,60 L80,0" fill="none" stroke={A} strokeWidth="8" strokeLinecap="round" />
        <text x={40} y={82} textAnchor="middle" fontSize="10.5" fill={TXT}>V = “require assistance”</text>
      </g>
      <text x={470} y={210} fontSize="10.5" fill={TXT}>Ground signals: large (several m),</text>
      <text x={470} y={226} fontSize="10.5" fill={TXT}>contrasting, on open ground,</text>
      <text x={470} y={242} fontSize="10.5" fill={TXT}>straight lines — rare in nature</text>
      <circle cx="560" cy="60" r="10" fill={A2} />
      <path d="M260,160 L548,66" stroke={A2} strokeWidth="1.5" strokeDasharray="6 4" />
      <text x={440} y={96} fontSize="10.5" fill={A2}>mirror flash — visible for kilometres in sun</text>
      <path d="M520,52 l40,-8 l6,10 l-40,8 z" fill={MUTED} />
      <text x={20} y={24} fontSize="12" fontWeight="700" fill={TXT}>By day: hood up, cloth, ground signal, mirror · By night: lights and whistle in threes</text>
      <text x={20} y={42} fontSize="12" fontWeight="700" fill={TXT}>Always: PLB / satellite SOS if you carry one</text>
      <text x={20} y={272} fontSize="10" className="muted-fill">Signals only work when someone is looking — which is why the trip plan comes first.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's17-vehicle-kit': VehicleKit,
  's17-trip-plan': TripPlanTimeline,
  's17-hot-car': HotCar,
  's17-stay-or-walk': StayOrWalk,
  's17-exhaust-co': ExhaustCO,
  's17-fuel-budget': FuelBudget,
  's17-winter-cabin': WinterCabin,
  's17-roadside': RoadsideBreakdown,
  's17-vehicle-signals': VehicleSignals,
}
