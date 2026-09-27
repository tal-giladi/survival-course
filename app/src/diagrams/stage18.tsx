import type { ComponentType } from 'react'

// Stage 18 SVG diagrams (long-duration survival). Colors only via CSS variables (light/dark aware).

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
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

function Box({ x, y, w, h, title, sub, fill = P2, color }: { x: number; y: number; w: number; h: number; title: string; sub?: string; fill?: string; color?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={LINE} />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="700" style={color ? { fill: color } : undefined}>{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
}

/** Daily resource ledger: stock, income and use for four resources, and days of reserve. */
export function ResourceLedger() {
  // Worked example from Lesson 1 (forest camp, one person).
  const rows: { name: string; unit: string; stock: number; income: number; use: number; color: string }[] = [
    { name: 'Water', unit: 'L', stock: 4, income: 3, use: 3.5, color: INFO },
    { name: 'Food', unit: 'kcal ×100', stock: 30, income: 0, use: 6, color: A2 },
    { name: 'Fuel', unit: 'armfuls', stock: 6, income: 4, use: 5, color: A },
    { name: 'Phone', unit: '% battery', stock: 60, income: 0, use: 8, color: SKY },
  ]
  const x0 = 150
  const scale = (v: number, max: number) => (v / max) * 150
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Daily resource ledger for four resources. Water: stock 4 litres, income 3, use 3.5, net minus 0.5 a day, 8 days of reserve. Food: stock 3,000 kcal, no income, use 600 a day, 5 days. Fuel: stock 6 armfuls, income 4, use 5, 6 days. Phone: 60 percent, use 8 percent a day, 7.5 days. Food is the limiting resource.">
      <text x={20} y={24} fontSize="14" fontWeight="700">One line per resource: stock · income − use = net · days of reserve</text>
      {['Stock', 'Income / day', 'Use / day'].map((h, i) => <text key={h} x={x0 + i * 130 + 4} y={50} fontSize="11" fontWeight="700" className="muted-fill">{h}</text>)}
      <text x={x0 + 405} y={50} fontSize="11" fontWeight="700" className="muted-fill">Days</text>
      {rows.map((r, i) => {
        const y = 62 + i * 52
        const max = Math.max(r.stock, r.income, r.use) * 1.1
        const net = r.income - r.use
        const days = net >= 0 ? Infinity : r.stock / -net
        const limiting = r.name === 'Food'
        return (
          <g key={r.name}>
            <text x={20} y={y + 20} fontSize="13" fontWeight="700">{r.name}</text>
            <text x={20} y={y + 34} fontSize="10" className="muted-fill">{r.unit}</text>
            {[r.stock, r.income, r.use].map((v, j) => (
              <g key={j}>
                <rect x={x0 + j * 130} y={y + 8} width={Math.max(2, scale(v, max) * 0.6)} height={22} rx="4" fill={r.color} opacity={j === 2 ? 0.55 : 0.9} />
                <text x={x0 + j * 130 + Math.max(2, scale(v, max) * 0.6) + 4} y={y + 24} fontSize="11">{v}</text>
              </g>
            ))}
            <rect x={x0 + 398} y={y + 6} width={46} height={26} rx="6" fill={limiting ? BAD : P2} stroke={LINE} />
            <text x={x0 + 421} y={y + 24} fontSize="12" fontWeight="700" textAnchor="middle" style={limiting ? { fill: '#fff' } : undefined}>{days === Infinity ? '∞' : days.toFixed(1)}</text>
          </g>
        )
      })}
      <text x={20} y={284} fontSize="11" className="muted-fill">Days of reserve = stock ÷ (use − income). The smallest number is your limiting resource — plan today around it.</text>
    </svg>
  )
}

/** Task value: energy cost of a work block versus what it returns (illustrative, forest camp). */
export function TaskValue() {
  const tasks: [string, number, string, boolean][] = [
    ['Collect + treat water', 350, '≈ 5 L safe water — covers a day', true],
    ['Firewood', 350, 'a night of fire + boiling', true],
    ['Improve shelter / bed', 350, 'warmer, better sleep every night', true],
    ['Signals', 150, 'the fastest way home', true],
    ['Repair / maintain', 150, 'prevents bigger failures', true],
    ['Food-getting', 350, '≈ 0–250 kcal, highly variable', false],
    ['Rest / nap', 0, 'repays sleep debt, saves water', true],
  ]
  return (
    <svg className="diagram" viewBox="0 0 740 330" role="img" aria-label="Energy cost of a half-day work block versus what it returns. Water, firewood and shelter cost about 350 kcal and return essentials; signals and repair cost about 150 kcal; food-getting costs about 350 kcal and returns 0 to 250 kcal on average, so it usually loses energy in a short wait; rest costs nothing.">
      <text x={20} y={24} fontSize="14" fontWeight="700">What a work block costs — and what it buys (illustrative)</text>
      <text x={20} y={44} fontSize="11" className="muted-fill">Cost in extra kcal above camp life, for about 2–3 hours of work</text>
      {tasks.map(([name, cost, ret, worth], i) => {
        const y = 60 + i * 36
        return (
          <g key={name}>
            <text x={20} y={y + 17} fontSize="12" fontWeight="700">{name}</text>
            <rect x={180} y={y + 4} width={cost * 0.4} height={18} rx="4" fill={worth ? A : BAD} opacity="0.85" />
            <text x={186 + cost * 0.4} y={y + 17} fontSize="11">{cost} kcal</text>
            <text x={395} y={y + 17} fontSize="11" style={{ fill: worth ? 'var(--text)' : BAD }}>{worth ? '→ ' : '✗ '}{ret}</text>
          </g>
        )
      })}
      <text x={20} y={318} fontSize="11" className="muted-fill">In a wait of days, food-getting rarely repays its energy and water cost. Where legal, passive methods that work while you do other tasks cost least.</text>
    </svg>
  )
}

/** Camp layout: zones, wind, distances from water. */
export function CampLayout() {
  return (
    <svg className="diagram" viewBox="0 0 640 380" role="img" aria-label="Plan view of a multi-day camp. Prevailing wind blows from the left. The sleeping shelter sits on a slight rise with the fire and kitchen a few metres downwind of it. The woodpile is under cover beside the fire. The water source, a stream, is at the bottom; the collection point is upstream of camp. The latrine or cathole area is downwind and at least 60 metres (about 70 steps) from water, trail and camp. Washing and grey-water disposal are at least 60 metres from the stream. The signal site is in the open clearing. Food storage is away from the sleeping area where wildlife is a concern.">
      <defs><Arrow id="cl-w" color={INFO} /><Arrow id="cl-d" color={MUTED} /></defs>
      <rect x={10} y={10} width={620} height={360} rx="10" fill={P2} stroke={LINE} />
      <path d="M10,330 C160,300 300,350 460,320 S600,300 630,315 L630,370 L10,370 Z" fill={INFO} opacity="0.35" />
      <text x={330} y={355} fontSize="12" fontWeight="700" textAnchor="middle">Stream → (flows to the right)</text>
      <line x1={30} y1={40} x2={100} y2={40} stroke={INFO} strokeWidth="2.5" markerEnd="url(#cl-w)" />
      <text x={30} y={32} fontSize="11" style={{ fill: INFO }}>prevailing wind</text>
      <Box x={170} y={120} w={120} h={50} title="Sleep shelter" sub="slight rise, drains" fill={OK} />
      <circle cx={345} cy={145} r={16} fill={A} />
      <text x={345} y={180} fontSize="11" textAnchor="middle" fontWeight="700">Fire / kitchen</text>
      <text x={345} y={193} fontSize="10" textAnchor="middle" className="muted-fill">3–5 m downwind</text>
      <Box x={330} y={70} w={100} h={34} title="Woodpile" sub="under cover" />
      <Box x={120} y={215} w={130} h={36} title="Tools / repair" sub="a place for everything" />
      <Box x={60} y={270} w={120} h={34} title="Water collection" sub="upstream of camp" fill={SKY} />
      <Box x={470} y={60} w={140} h={44} title="Signal site" sub="open ground, visible" fill={A2} color="#fff" />
      <Box x={500} y={200} w={120} h={46} title="Latrine / catholes" sub="downwind, ≥ 60 m" fill={GROUND} />
      <Box x={330} y={230} w={120} h={40} title="Wash + grey water" sub="≥ 60 m from stream" />
      <Box x={20} y={110} w={120} h={40} title="Food storage" sub="away from beds" />
      <line x1={560} y1={246} x2={560} y2={318} stroke={MUTED} strokeDasharray="4 3" markerEnd="url(#cl-d)" markerStart="url(#cl-d)" />
      <text x={566} y={290} fontSize="10" className="muted-fill">≥ 60 m</text>
      <text x={566} y={302} fontSize="10" className="muted-fill">(~70 steps)</text>
      <line x1={500} y1={222} x2={295} y2={148} stroke={MUTED} strokeDasharray="4 3" markerEnd="url(#cl-d)" markerStart="url(#cl-d)" />
      <text x={420} y={196} fontSize="10" className="muted-fill">≥ 60 m</text>
      <text x={20} y={60} fontSize="10" className="muted-fill">Not to scale. Check local rules: fires, camping, food storage</text>
      <text x={20} y={72} fontSize="10" className="muted-fill">and human-waste disposal differ by land manager.</text>
    </svg>
  )
}

/** The F-diagram: faecal–oral routes and the barriers that block them. */
export function FDiagram() {
  const routes: [string, number][] = [['Fluids (water)', 60], ['Fingers', 115], ['Flies', 170], ['Fields (soil)', 225], ['Floors / surfaces', 280]]
  return (
    <svg className="diagram" viewBox="0 0 640 340" role="img" aria-label="The F-diagram: faeces reach a new host's mouth through fluids, fingers, flies, fields and surfaces, usually via food. Barriers: a latrine far from water blocks the routes at the source; water treatment blocks fluids; hand washing blocks fingers; covering food and waste blocks flies; clean food handling blocks the final step.">
      <defs><Arrow id="fd-a" color={MUTED} /></defs>
      <Box x={20} y={140} w={110} h={60} title="Faeces" sub="the source" fill={GROUND} />
      {routes.map(([r, y]) => (
        <g key={r}>
          <line x1={130} y1={170} x2={250} y2={y + 14} stroke={MUTED} strokeWidth="1.5" markerEnd="url(#fd-a)" />
          <Box x={252} y={y} w={130} h={30} title={r} />
          <line x1={382} y1={y + 15} x2={455} y2={170} stroke={MUTED} strokeWidth="1.5" markerEnd="url(#fd-a)" />
        </g>
      ))}
      <Box x={458} y={145} w={70} h={50} title="Food" />
      <line x1={528} y1={170} x2={548} y2={170} stroke={MUTED} strokeWidth="1.5" markerEnd="url(#fd-a)" />
      <Box x={550} y={140} w={80} h={60} title="New host" sub="mouth" fill={BAD} color="#fff" />
      <rect x={180} y={40} width={10} height={280} rx="4" fill={OK} />
      <text x={185} y={32} fontSize="11" fontWeight="700" textAnchor="middle" style={{ fill: OK }}>Sanitation</text>
      <rect x={410} y={40} width={10} height={280} rx="4" fill={INFO} />
      <text x={415} y={32} fontSize="11" fontWeight="700" textAnchor="middle" style={{ fill: INFO }}>Treatment · hand washing · cover</text>
      <rect x={535} y={210} width={10} height={100} rx="4" fill={A} />
      <text x={540} y={326} fontSize="11" fontWeight="700" textAnchor="middle" style={{ fill: A }}>Food hygiene</text>
      <text x={20} y={330} fontSize="10" className="muted-fill">After Wagner &amp; Lanoix (WHO, 1958).</text>
    </svg>
  )
}

/** Probability that at least one of several items fails over a trip. */
export function FailureOdds() {
  const W = 640, H = 300, L = 60, R = 150, T = 40, B = 40
  const days = 14
  const x = (d: number) => L + (d / days) * (W - L - R)
  const y = (p: number) => T + (1 - p) * (H - T - B)
  const curves: [number, string, string][] = [[0.02, OK, '2 % a day'], [0.05, A, '5 % a day'], [0.1, BAD, '10 % a day']]
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Chance that an item fails at least once over 14 days, for daily failure chances of 2, 5 and 10 percent. At 5 percent a day it reaches about 30 percent after one week and about 51 percent after two weeks; at 10 percent a day, about 52 percent after one week and 77 percent after two.">
      <text x={20} y={22} fontSize="14" fontWeight="700">P(at least one failure) = 1 − (1 − p)ⁿ</text>
      <line x1={L} y1={H - B} x2={W - R} y2={H - B} stroke={LINE} />
      <line x1={L} y1={T} x2={L} y2={H - B} stroke={LINE} />
      {[0, 7, 14].map((d) => <text key={d} x={x(d)} y={H - B + 16} fontSize="10" textAnchor="middle" className="muted-fill">{d} days</text>)}
      {[0, 0.5, 1].map((p) => <text key={p} x={L - 6} y={y(p) + 4} fontSize="10" textAnchor="end" className="muted-fill">{p * 100} %</text>)}
      <line x1={x(7)} y1={T} x2={x(7)} y2={H - B} stroke={LINE} strokeDasharray="3 3" />
      {curves.map(([p, c, label]) => {
        const pts = Array.from({ length: days + 1 }, (_, d) => `${x(d)},${y(1 - (1 - p) ** d)}`).join(' ')
        const end = 1 - (1 - p) ** days
        return (
          <g key={label}>
            <polyline points={pts} fill="none" stroke={c} strokeWidth="2.5" />
            <text x={x(days) + 6} y={y(end) + 4} fontSize="11" style={{ fill: c }}>{label}: {Math.round(end * 100)} %</text>
          </g>
        )
      })}
      <text x={20} y={H - 8} fontSize="10" className="muted-fill">Small daily risks add up over many days — which is why multi-day kits carry redundancy and a repair kit.</text>
    </svg>
  )
}

/** Daily maintenance round. */
export function MaintenanceRound() {
  const items: [string, string][] = [
    ['Feet', 'dry, inspect, air'],
    ['Body', 'hands, cuts, sun, bites'],
    ['Clothing', 'dry, mend small tears'],
    ['Sleep system', 'air, dry, loft'],
    ['Shelter', 'lines, pegs, drips'],
    ['Water system', 'backflush, clean/dirty'],
    ['Fire kit', 'dry tinder, next fuel'],
    ['Tools', 'clean, dry, sharpen'],
    ['Signals', 'refresh, ready'],
  ]
  const cx = 320, cy = 175, r = 125
  return (
    <svg className="diagram" viewBox="0 0 640 350" role="img" aria-label="A daily maintenance round of nine checks arranged in a circle: feet, body, clothing, sleep system, shelter, water system, fire kit, tools and signals. Morning round before work, evening round before dark.">
      <defs><Arrow id="mr-a" color={A} /></defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={A} strokeWidth="2" strokeDasharray="6 5" />
      <Box x={cx - 80} y={cy - 32} w={160} h={64} title="Daily round" sub="morning + evening, ~15 min" fill={A} color="#fff" />
      {items.map(([t, s], i) => {
        const a = (i / items.length) * 2 * Math.PI - Math.PI / 2
        const x = cx + r * Math.cos(a)
        const y = cy + r * Math.sin(a)
        return <Box key={t} x={x - 62} y={y - 20} w={124} h={40} title={t} sub={s} />
      })}
      <path d={`M ${cx + r + 8} ${cy - 20} A ${r + 8} ${r + 8} 0 0 1 ${cx + r + 8} ${cy + 20}`} fill="none" stroke={A} strokeWidth="2" markerEnd="url(#mr-a)" />
      <text x={20} y={340} fontSize="10" className="muted-fill">Fix it while it is small, dry it while the sun is out, and put every item back in its place.</text>
    </svg>
  )
}

/** Sleep and morale feedback loops. */
export function MoraleLoops() {
  const vicious: [string, number, number][] = [['Poor sleep', 90, 70], ['Irritable, slow', 210, 140], ['Mistakes, extra work', 90, 210], ['Cold, hungry, late to bed', -30, 140]]
  const virtuous: [string, number, number][] = [['Routine + small goals', 520, 70], ['Visible progress', 640, 140], ['Morale, energy to work', 520, 210], ['Warm bed, early night', 400, 140]]
  const loop = (nodes: [string, number, number][], color: string, id: string) => (
    <g>
      {nodes.map(([t, x, y], i) => {
        const [, nx, ny] = nodes[(i + 1) % nodes.length]
        return (
          <g key={t}>
            <line x1={x + 60} y1={y + 18} x2={nx + 60} y2={ny + 18} stroke={color} strokeWidth="2" markerEnd={`url(#${id})`} opacity="0.8" />
          </g>
        )
      })}
      {nodes.map(([t, x, y]) => <Box key={t} x={x - 25} y={y} w={170} h={36} title={t} />)}
    </g>
  )
  return (
    <svg className="diagram" viewBox="0 0 850 300" role="img" aria-label="Two feedback loops. Vicious loop: poor sleep leads to irritability and slow thinking, which causes mistakes and extra work, which leaves you cold, hungry and late to bed, which means poor sleep again. Virtuous loop: routine and small goals give visible progress, which lifts morale and energy to work, which gets you a warm bed and an early night, which supports the routine.">
      <defs><Arrow id="ml-bad" color={BAD} /><Arrow id="ml-ok" color={OK} /></defs>
      <g transform="translate(60,0)">
        {loop(vicious, BAD, 'ml-bad')}
        {loop(virtuous, OK, 'ml-ok')}
      </g>
      <text x={210} y={40} fontSize="13" fontWeight="700" textAnchor="middle" style={{ fill: BAD }}>Downward spiral</text>
      <text x={640} y={40} fontSize="13" fontWeight="700" textAnchor="middle" style={{ fill: OK }}>Upward spiral</text>
      <text x={20} y={285} fontSize="11" className="muted-fill">Both loops feed themselves. The cheapest place to break the bad one is usually the evening: eat, prepare the bed, plan tomorrow, sleep.</text>
    </svg>
  )
}

/** Rolling several-day plan: horizons and triggers. */
export function RollingPlan() {
  return (
    <svg className="diagram" viewBox="0 0 640 320" role="img" aria-label="A rolling plan with three horizons. Today: detailed tasks by block. Tomorrow: main tasks and what must be ready tonight. Three to five days: resource reserves, weather, rescue windows and stay-or-move. Triggers that force a re-plan: water under one day of reserve, a storm forecast, illness or injury, gear failure, a change in rescue expectations. Each evening, review and roll the plan forward one day.">
      <defs><Arrow id="rp-a" color={A} /></defs>
      <Box x={20} y={50} w={180} h={110} title="Today" sub="tasks by block, who/what" fill={A} color="#fff" />
      <Box x={230} y={50} w={180} h={110} title="Tomorrow" sub="main jobs; ready by tonight" />
      <Box x={440} y={50} w={180} h={110} title="Next 3–5 days" sub="reserves · weather · rescue · stay/move" />
      <text x={110} y={140} fontSize="10" textAnchor="middle" style={{ fill: '#fff' }}>detailed</text>
      <text x={320} y={140} fontSize="10" textAnchor="middle" className="muted-fill">outline</text>
      <text x={530} y={140} fontSize="10" textAnchor="middle" className="muted-fill">options + reserves</text>
      <text x={20} y={32} fontSize="13" fontWeight="700">Plan in three horizons — detail where it pays</text>
      <path d="M 530 170 C 530 215, 110 215, 110 170" fill="none" stroke={A} strokeWidth="2" markerEnd="url(#rp-a)" />
      <text x={320} y={228} fontSize="11" textAnchor="middle" fontWeight="700" style={{ fill: A }}>Every evening: review, update the ledger, roll forward one day</text>
      <text x={20} y={262} fontSize="12" fontWeight="700">Re-plan at once when a trigger fires:</text>
      {['water < 1 day of reserve', 'storm forecast', 'illness or injury', 'key gear fails', 'rescue expectation changes'].map((t, i) => (
        <g key={t}>
          <rect x={20 + i * 122} y={272} width={116} height={30} rx="6" fill={P2} stroke={BAD} />
          <text x={78 + i * 122} y={291} fontSize="10" textAnchor="middle">{t}</text>
        </g>
      ))}
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's18-ledger': ResourceLedger,
  's18-task-value': TaskValue,
  's18-camp-layout': CampLayout,
  's18-f-diagram': FDiagram,
  's18-failure-odds': FailureOdds,
  's18-maintenance-round': MaintenanceRound,
  's18-morale-loops': MoraleLoops,
  's18-rolling-plan': RollingPlan,
}
