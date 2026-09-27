import type { ComponentType, ReactNode } from 'react'

// Stage 16 SVG diagrams (urban and disaster). Colors only via CSS variables (light/dark aware).

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

function Arrow({ id, color = 'var(--muted)' }: { id: string; color?: string }) {
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

/** Family communication plan: everyone reports to one out-of-area contact; three meeting places. */
export function FamilyPlan() {
  const members = [['Parent A', 'at work'], ['Parent B', 'commuting'], ['Child', 'at school'], ['Grandparent', 'at home']]
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Family communication plan: each family member texts one out-of-area contact, who relays news; three pre-agreed meeting places near home, in the neighbourhood and out of town">
      <defs><Arrow id="fp-a" color={A} /></defs>
      <Box x={230} y={20} w={180} h={56} title="Out-of-area contact" sub="one person, another region" fill={A} color="#fff" />
      {members.map(([n, where], i) => {
        const x = 20 + i * 158
        return (
          <g key={n}>
            <Box x={x} y={130} w={140} h={46} title={n} sub={where} />
            <line x1={x + 70} y1={130} x2={320} y2={80} stroke={A} strokeWidth="1.8" markerEnd="url(#fp-a)" />
          </g>
        )
      })}
      <text x={320} y={112} textAnchor="middle" fontSize="11" className="muted-fill">short texts: “OK, at X, next update 20:00”</text>
      {[['1 · Near home', 'outside, clear of buildings'], ['2 · Neighbourhood', 'school, park, library'], ['3 · Out of town', 'relative / friend']].map(([t, s], i) => (
        <Box key={t} x={40 + i * 195} y={230} w={170} h={50} title={t} sub={s} fill={i === 0 ? OK : P2} />
      ))}
      <text x={320} y={215} textAnchor="middle" fontSize="12" fontWeight="700">Meeting places (if you cannot go home or cannot communicate)</text>
      <text x={320} y={310} textAnchor="middle" fontSize="11" className="muted-fill">Everyone carries the plan on paper: numbers, meeting places, school/work pick-up rules, medical needs.</text>
    </svg>
  )
}

/** Stored water and food for a household, worked numbers. */
export function WaterFoodStack() {
  const days = [3, 7, 14]
  const litres = days.map((d) => 4 * 4 * d)
  const maxL = 224
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Water for a family of four at 4 litres per person per day: 48 litres for 3 days, 112 litres for 7 days, 224 litres for 14 days; food at about 7,000 kcal per day">
      <text x={20} y={24} fontSize="14" fontWeight="700">Family of 4 · 4 L per person per day (≈ 1 US gal)</text>
      {days.map((d, i) => {
        const w = (litres[i] / maxL) * 340
        const y = 50 + i * 60
        return (
          <g key={d}>
            <text x={20} y={y + 25} fontSize="13" fontWeight="700">{d} days</text>
            <rect x={90} y={y} width={w} height={36} rx="6" fill={INFO} opacity="0.8" />
            <text x={96 + w} y={y + 23} fontSize="12" fontWeight="700">{litres[i]} L</text>
            <text x={170 + w} y={y + 23} fontSize="11" className="muted-fill">≈ {Math.round(litres[i] / 20)} × 20 L containers</text>
          </g>
        )
      })}
      <line x1={20} y1={235} x2={620} y2={235} stroke={LINE} />
      <text x={20} y={258} fontSize="12">Per person per day: <tspan fontWeight="700">~2–3 L drinking</tspan> + ~1 L food preparation and hygiene. Heat, illness, pregnancy, infants: more.</text>
      <text x={20} y={280} fontSize="12">Food: 2 adults × 2,000 + 2 children × 1,500 ≈ <tspan fontWeight="700">7,000 kcal/day</tspan> → 49,000 kcal for a week.</text>
    </svg>
  )
}

/** Battery arithmetic: mAh at 3.7 V → Wh → phone charges and lamp hours. */
export function BatteryBudget() {
  const rows: [string, number, string][] = [
    ['Power bank 20,000 mAh × 3.7 V', 74, 'nominal energy'],
    ['… after ~75 % conversion', 55, 'usable at the USB port'],
    ['Phone battery (≈ 4,500 mAh)', 17, '→ about 3 full charges'],
    ['3 W LED lantern, 1 night (6 h)', 18, '→ about 3 nights'],
    ['12 V × 50 Ah car battery, ≤ 50 %', 300, 'only if it can still start the car'],
  ]
  const scale = (wh: number) => Math.min(300, (wh / 300) * 300)
  return (
    <svg className="diagram" viewBox="0 0 660 270" role="img" aria-label="Battery budget: a 20,000 mAh power bank at 3.7 volts holds about 74 watt-hours, about 55 usable, enough for about three phone charges or three nights of a 3-watt lantern">
      <text x={20} y={24} fontSize="14" fontWeight="700">Energy (Wh) = capacity (Ah) × voltage (V)</text>
      {rows.map(([label, wh, note], i) => {
        const y = 44 + i * 42
        return (
          <g key={label}>
            <text x={20} y={y + 17} fontSize="12">{label}</text>
            <rect x={250} y={y + 2} width={scale(wh)} height={22} rx="5" fill={i === 1 ? OK : i === 4 ? GROUND : A} opacity="0.85" />
            <text x={256 + scale(wh)} y={y + 18} fontSize="12" fontWeight="700">{wh} Wh</text>
            <text x={250} y={y + 36} fontSize="10" className="muted-fill">{note}</text>
          </g>
        )
      })}
    </svg>
  )
}

/** Drop, Cover, Hold On — three simple pictograms. */
export function DropCoverHold() {
  const panel = (x: number, title: string, children: ReactNode, sub: string) => (
    <g>
      <rect x={x} y={20} width={190} height={200} rx="10" fill={P2} stroke={LINE} />
      <text x={x + 95} y={44} textAnchor="middle" fontSize="16" fontWeight="800">{title}</text>
      {children}
      <text x={x + 95} y={210} textAnchor="middle" fontSize="11" className="muted-fill">{sub}</text>
    </g>
  )
  const stroke = { stroke: TXT, strokeWidth: 4, strokeLinecap: 'round' as const, fill: 'none' }
  return (
    <svg className="diagram" viewBox="0 0 620 240" role="img" aria-label="Drop onto hands and knees; Cover head and neck under a sturdy table; Hold On to the table leg until the shaking stops">
      {panel(15, 'DROP', (
        <g>
          <circle cx={75} cy={120} r="11" fill={TXT} />
          <path d="M86,126 L140,130 M100,128 L96,168 M136,130 L150,168 M96,168 L80,168 M150,168 L166,168" {...stroke} />
          <line x1={40} y1={172} x2={185} y2={172} stroke={GROUND} strokeWidth="3" />
        </g>
      ), 'onto hands and knees')}
      {panel(215, 'COVER', (
        <g>
          <rect x={235} y={92} width={150} height={10} fill={GROUND} />
          <line x1={245} y1={102} x2={245} y2={172} stroke={GROUND} strokeWidth="5" />
          <line x1={375} y1={102} x2={375} y2={172} stroke={GROUND} strokeWidth="5" />
          <circle cx={282} cy={140} r="10" fill={TXT} />
          <path d="M272,132 Q282,120 296,134 M292,146 L340,150 M300,148 L298,170 M336,150 L346,170" {...stroke} />
          <line x1={225} y1={172} x2={395} y2={172} stroke={GROUND} strokeWidth="3" />
        </g>
      ), 'head and neck, under a sturdy table')}
      {panel(415, 'HOLD ON', (
        <g>
          <rect x={435} y={92} width={150} height={10} fill={GROUND} />
          <line x1={445} y1={102} x2={445} y2={172} stroke={A2} strokeWidth="6" />
          <line x1={575} y1={102} x2={575} y2={172} stroke={GROUND} strokeWidth="5" />
          <circle cx={482} cy={140} r="10" fill={TXT} />
          <path d="M470,138 L447,128 M492,146 L540,150 M500,148 L498,170 M536,150 L546,170" {...stroke} />
          <line x1={425} y1={172} x2={595} y2={172} stroke={GROUND} strokeWidth="3" />
        </g>
      ), 'until the shaking stops')}
    </svg>
  )
}

/** Aftershock rate decays roughly as 1/t (Omori) — but big ones can still come days later. */
export function AftershockCurve() {
  const W = 620, H = 260, L = 60, R = 20, T = 30, B = 40
  const days = 10
  const x = (d: number) => L + (d / days) * (W - L - R)
  const rate = (d: number) => 100 / (d + 0.1)
  const y = (r: number) => T + (1 - Math.min(1, r / 1000)) * (H - T - B)
  const pts = Array.from({ length: 101 }, (_, i) => { const d = (i / 100) * days; return `${x(d)},${y(rate(d))}` }).join(' ')
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Aftershock rate falls roughly in proportion to one over time: very frequent in the first hours, much less frequent after a week, but a large aftershock can still occur">
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke={LINE} />
      <line x1={L} y1={T} x2={L} y2={H - B} stroke={LINE} />
      <polyline points={pts} fill="none" stroke={A} strokeWidth="2.5" />
      {[0, 1, 2, 5, 10].map((d) => <text key={d} x={x(d)} y={H - B + 16} fontSize="10" textAnchor="middle" className="muted-fill">{d} d</text>)}
      <text x={L - 8} y={T + 10} fontSize="10" textAnchor="end" className="muted-fill">many</text>
      <text x={L - 8} y={H - B} fontSize="10" textAnchor="end" className="muted-fill">few</text>
      <text x={(W + L) / 2} y={H - 6} textAnchor="middle" fontSize="11" className="muted-fill">time since the main shock</text>
      <text x={L + 60} y={T + 12} fontSize="12" fontWeight="700">rate ∝ 1 / (t + c)</text>
      <line x1={x(4)} y1={y(rate(4))} x2={x(4)} y2={y(rate(4)) - 90} stroke={BAD} strokeWidth="3" />
      <text x={x(4) + 8} y={y(rate(4)) - 76} fontSize="11" fill={BAD}>a strong aftershock can still come days later</text>
      <text x={x(4) + 8} y={y(rate(4)) - 60} fontSize="11" fill={BAD}>— stay out of damaged buildings</text>
    </svg>
  )
}

/** Shelter in place vs evacuate: decision flow by hazard. */
export function EvacDecision() {
  return (
    <svg className="diagram" viewBox="0 0 680 340" role="img" aria-label="Decision flow: if an official evacuation order applies, go. If the hazard comes to you and outside air is dangerous (chemical plume, tornado, smoke), shelter in place. If your location will be overrun (flood, wildfire, tsunami zone, damaged building), leave early by a planned route.">
      <defs><Arrow id="ed-a" /></defs>
      <Box x={230} y={10} w={220} h={46} title="Official order for your zone?" sub="alerts, radio, local authority" />
      <Box x={500} y={10} w={160} h={46} title="EVACUATE" sub="now, by the planned route" fill={A2} color="#fff" />
      <line x1={450} y1={33} x2={498} y2={33} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={474} y={27} fontSize="10" textAnchor="middle">yes</text>
      <line x1={340} y1={56} x2={340} y2={96} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={352} y={80} fontSize="10">no / not yet</text>
      <Box x={200} y={98} w={280} h={50} title="Will this place be overrun or unsafe?" sub="rising water, fire front, tsunami zone, damage, gas" />
      <line x1={480} y1={123} x2={570} y2={123} stroke="var(--muted)" strokeWidth="1.5" />
      <line x1={570} y1={123} x2={570} y2={58} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={522} y={116} fontSize="10" textAnchor="middle">yes → leave early</text>
      <line x1={340} y1={148} x2={340} y2={188} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={352} y={172} fontSize="10">no</text>
      <Box x={200} y={190} w={280} h={50} title="Is the outside air or sky the danger?" sub="chemical plume, heavy smoke, tornado, blizzard" />
      <line x1={200} y1={215} x2={120} y2={215} stroke="var(--muted)" strokeWidth="1.5" />
      <line x1={120} y1={215} x2={120} y2={268} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={160} y={208} fontSize="10" textAnchor="middle">yes</text>
      <Box x={20} y={270} w={200} h={56} title="SHELTER IN PLACE" sub="interior room, close up, listen" fill={INFO} color="#fff" />
      <line x1={340} y1={240} x2={340} y2={268} stroke="var(--muted)" strokeWidth="1.5" markerEnd="url(#ed-a)" />
      <text x={352} y={258} fontSize="10">no</text>
      <Box x={240} y={270} w={200} h={56} title="STAY, PREPARE" sub="go-bag by the door, set triggers" />
      <text x={460} y={290} fontSize="11" className="muted-fill">Reassess on every new alert.</text>
      <text x={460} y={306} fontSize="11" className="muted-fill">Leaving early is almost never wrong;</text>
      <text x={460} y={322} fontSize="11" className="muted-fill">leaving late often is.</text>
    </svg>
  )
}

/** Generator placement: outdoors, ≥ 6 m (20 ft), exhaust away from openings. */
export function GeneratorPlacement() {
  return (
    <svg className="diagram" viewBox="0 0 660 280" role="img" aria-label="Generator placement: never inside the home, garage, basement or shed, even with doors open; outdoors at least 6 metres or 20 feet from doors, windows and vents, exhaust pointing away; CO alarms inside on every level">
      <rect x={0} y={0} width={660} height={230} fill={SKY} opacity="0.25" />
      <rect x={0} y={230} width={660} height={50} fill={GROUND} opacity="0.35" />
      <rect x={40} y={110} width={180} height={120} fill={P2} stroke={LINE} />
      <polygon points="30,110 130,50 230,110" fill={P2} stroke={LINE} />
      <rect x={70} y={140} width={40} height={40} fill={SKY} stroke={LINE} />
      <rect x={150} y={170} width={36} height={60} fill={GROUND} stroke={LINE} />
      <rect x={220} y={150} width={90} height={80} fill={P2} stroke={LINE} />
      <text x={265} y={166} textAnchor="middle" fontSize="11">garage</text>
      <rect x={245} y={200} width={40} height={26} rx="4" fill={BAD} />
      <line x1={238} y1={176} x2={292} y2={226} stroke={BAD} strokeWidth="4" />
      <line x1={292} y1={176} x2={238} y2={226} stroke={BAD} strokeWidth="4" />
      <text x={130} y={100} textAnchor="middle" fontSize="11" fontWeight="700">CO alarm on every level</text>
      <circle cx={130} cy={125} r="7" fill={OK} />
      <rect x={520} y={200} width={50} height={30} rx="5" fill={OK} />
      <text x={545} y={219} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: '#fff' }}>GEN</text>
      <path d="M570,205 q18,-10 30,-30 q10,-18 30,-22" fill="none" stroke="var(--muted)" strokeWidth="2" strokeDasharray="4 3" />
      <text x={600} y={140} fontSize="10" textAnchor="middle" className="muted-fill">exhaust away</text>
      <line x1={310} y1={250} x2={520} y2={250} stroke={A} strokeWidth="2" markerStart="url(#gp-a)" markerEnd="url(#gp-a)" />
      <defs><Arrow id="gp-a" color={A} /></defs>
      <text x={415} y={268} textAnchor="middle" fontSize="12" fontWeight="700">≥ 6 m (20 ft) from doors, windows, vents</text>
      <text x={450} y={30} textAnchor="middle" fontSize="13" fontWeight="700" fill={BAD}>Never indoors: not in a garage, basement or shed,</text>
      <text x={450} y={48} textAnchor="middle" fontSize="13" fontWeight="700" fill={BAD}>nor by a window — even with doors open.</text>
      <text x={450} y={68} textAnchor="middle" fontSize="11" className="muted-fill">Never plug it into a wall socket: “backfeeding”</text>
      <text x={450} y={84} textAnchor="middle" fontSize="11" className="muted-fill">can electrocute line workers and neighbours.</text>
    </svg>
  )
}

/** Bucket toilet: lined bucket, absorbent, lid; sealed bags stored away from living areas. */
export function BucketToilet() {
  return (
    <svg className="diagram" viewBox="0 0 640 270" role="img" aria-label="Emergency bucket toilet: a sturdy bucket lined with two heavy bags, a handful of absorbent such as sawdust or cat litter after each use, a tight lid; separate urine where possible; tie off bags and store in a lidded bin outside living space; wash hands with soap every time">
      <path d="M80,90 L100,220 L200,220 L220,90 Z" fill={P2} stroke={TXT} strokeWidth="2" />
      <rect x={70} y={78} width={160} height={14} rx="4" fill={GROUND} />
      <path d="M86,92 Q150,140 214,92" fill="none" stroke={INFO} strokeWidth="2" strokeDasharray="4 3" />
      <rect x={100} y={180} width={100} height={30} fill={GROUND} opacity="0.6" />
      <text x={150} y={70} textAnchor="middle" fontSize="11" fontWeight="700">tight lid</text>
      <text x={150} y={200} textAnchor="middle" fontSize="10">absorbent layer</text>
      <text x={150} y={245} textAnchor="middle" fontSize="12" fontWeight="700">1. Bucket + 2 heavy bags</text>
      {[
        ['2. After each use', 'a cup of sawdust, cat litter, soil or shredded paper; lid back on'],
        ['3. Separate urine if you can', 'a second container: lighter, less smelly bags'],
        ['4. Bag full → tie, double-bag', 'lidded bin outside living space until collection'],
        ['5. Hands, every time', 'soap + a little water, or sanitiser; a separate “wash station”'],
      ].map(([t, s], i) => (
        <g key={t}>
          <text x={270} y={70 + i * 46} fontSize="13" fontWeight="700">{t}</text>
          <text x={270} y={88 + i * 46} fontSize="11" className="muted-fill">{s}</text>
        </g>
      ))}
    </svg>
  )
}

/** Cascading infrastructure failure after a power cut. */
export function InfrastructureCascade() {
  const nodes: [string, string, number, number][] = [
    ['Mobile network', 'backup batteries: hours', 20, 110],
    ['Water pumping', 'pressure drops in hours', 180, 110],
    ['Sewage pumping', 'backups, overflows', 340, 110],
    ['Fuel pumps & card payments', 'no fuel, cash only', 500, 110],
    ['Traffic lights, lifts', 'jams, people trapped', 20, 210],
    ['Refrigeration', 'food & medicine spoil', 180, 210],
    ['Heating & cooling', 'even gas boilers need power', 340, 210],
    ['Hospitals', 'on generators, stretched', 500, 210],
  ]
  return (
    <svg className="diagram" viewBox="0 0 660 270" role="img" aria-label="Cascading failure: a power cut takes down mobile networks after their backup batteries run out, water and sewage pumping, fuel pumps and card payments, traffic lights and lifts, refrigeration, heating and cooling, and strains hospitals">
      <defs><Arrow id="ic-a" color={BAD} /></defs>
      <Box x={230} y={14} w={200} h={46} title="POWER FAILS" sub="storm, heat, quake, grid fault" fill={BAD} color="#fff" />
      {nodes.map(([t, s, x, y]) => (
        <g key={t}>
          <line x1={330} y1={60} x2={x + 70} y2={y} stroke={BAD} strokeWidth="1.3" opacity="0.7" markerEnd="url(#ic-a)" />
          <Box x={x} y={y} w={140} h={46} title={t} sub={s} />
        </g>
      ))}
      <text x={330} y={262} textAnchor="middle" fontSize="11" className="muted-fill">Plan for the second-order failures: water, communication, cash, fuel, medicines.</text>
    </svg>
  )
}

/** Home ignition zone (wildfire): immediate, intermediate, extended. */
export function HomeIgnitionZone() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Home ignition zone: 0 to 1.5 metres non-combustible, no mulch or stored wood; 1.5 to 9 metres lean, clean and green, spaced plants, trimmed trees; 9 to 30 metres reduced fuel; embers travel far ahead of the fire front and ignite most homes">
      <circle cx={200} cy={160} r={140} fill={OK} opacity="0.12" stroke={OK} />
      <circle cx={200} cy={160} r={95} fill={OK} opacity="0.2" stroke={OK} />
      <circle cx={200} cy={160} r={50} fill={GROUND} opacity="0.35" stroke={GROUND} />
      <rect x={172} y={135} width={56} height={50} fill={P2} stroke={TXT} />
      <polygon points="166,135 200,110 234,135" fill={P2} stroke={TXT} />
      {[[330, 60], [360, 90], [345, 40], [380, 70]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill={A2} />)}
      <text x={390} y={55} fontSize="11" fill={A2}>embers — often km ahead of the flames</text>
      {[
        ['0–1.5 m (0–5 ft) · immediate', 'gravel, no mulch or woodpile; clear gutters', 120],
        ['1.5–9 m (5–30 ft) · intermediate', 'spaced plants, mowed grass, trimmed limbs', 175],
        ['9–30 m (30–100 ft) · extended', 'thin fuel; remove ladder fuels', 230],
      ].map(([t, s, y]) => (
        <g key={t as string}>
          <text x={360} y={y as number} fontSize="12" fontWeight="700">{t}</text>
          <text x={360} y={(y as number) + 16} fontSize="10" className="muted-fill">{s}</text>
        </g>
      ))}
      <text x={20} y={290} fontSize="11" className="muted-fill">Zone distances follow NFPA Firewise guidance; check your local fire service’s rules.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's16-family-plan': FamilyPlan,
  's16-water-food': WaterFoodStack,
  's16-battery-budget': BatteryBudget,
  's16-drop-cover-hold': DropCoverHold,
  's16-aftershocks': AftershockCurve,
  's16-evac-decision': EvacDecision,
  's16-generator': GeneratorPlacement,
  's16-bucket-toilet': BucketToilet,
  's16-cascade': InfrastructureCascade,
  's16-ignition-zone': HomeIgnitionZone,
}
