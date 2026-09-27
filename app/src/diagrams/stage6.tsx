import type { ComponentType } from 'react'

// Stage 6 SVG diagrams (food and nutrition). Colors only via CSS variables so they work in light and dark mode.
// Plant drawings are generic/fictional — no diagram presents a real species as edible.

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

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

/** Daily expenditure built from BMR × activity × environment for a 70 kg, 175 cm, 30-year-old man. */
export function EnergyStack() {
  const rows = [
    { label: 'Camp work, 18 °C', bmr: 1650, act: 910, env: 0 },
    { label: 'Hiking 8 h with pack, 5 °C', bmr: 1650, act: 2145, env: 190 },
    { label: 'Skiing out 8 h, −20 °C', bmr: 1650, act: 2145, env: 950 },
  ]
  const sx = (k: number) => (k / 5000) * 440
  return (
    <svg className="diagram" viewBox="0 0 760 250" role="img" aria-label="Stacked bars: basal metabolic rate, activity and environment add up to daily energy expenditure in three situations">
      {[0, 1000, 2000, 3000, 4000, 5000].map((k) => (
        <g key={k}>
          <line x1={210 + sx(k)} x2={210 + sx(k)} y1={20} y2={190} stroke={LINE} strokeDasharray="3 4" />
          <text x={210 + sx(k)} y={206} fontSize="11" textAnchor="middle" className="muted-fill">{k}</text>
        </g>
      ))}
      {rows.map((r, i) => {
        const y = 34 + i * 54
        const total = r.bmr + r.act + r.env
        return (
          <g key={r.label}>
            <text x={200} y={y + 18} fontSize="12.5" textAnchor="end">{r.label}</text>
            <rect x={210} y={y} width={sx(r.bmr)} height="28" fill={INFO} />
            <rect x={210 + sx(r.bmr)} y={y} width={sx(r.act)} height="28" fill={A} />
            {r.env > 0 && <rect x={210 + sx(r.bmr + r.act)} y={y} width={sx(r.env)} height="28" fill={A2} />}
            <text x={216 + sx(total)} y={y + 19} fontSize="12.5" fontWeight="700">≈ {total} kcal</text>
          </g>
        )
      })}
      <g fontSize="11.5">
        <rect x={210} y={222} width="14" height="12" fill={INFO} /><text x={230} y={232}>BMR (Mifflin–St Jeor)</text>
        <rect x={380} y={222} width="14" height="12" fill={A} /><text x={400} y={232}>Activity + digestion</text>
        <rect x={540} y={222} width="14" height="12" fill={A2} /><text x={560} y={232}>Cold / heat strain</text>
      </g>
      <text x={380} y={248} fontSize="10" textAnchor="middle" className="muted-fill">kcal per day · illustrative, 70 kg man, 175 cm, 30 y (BMR ≈ 1,650 kcal)</text>
    </svg>
  )
}

/** Body fuel stores and what happens over a fast. */
export function FuelStores() {
  const phases = [
    { d0: 0, d1: 1.5, label: 'Glycogen', note: 'first 1–2 days of hard work', color: INFO },
    { d0: 1, d1: 4, label: 'Shift to fat, ketones rise', note: 'hunger peaks, then eases', color: A },
    { d0: 4, d1: 21, label: 'Fat-adapted', note: 'cold tolerance, mood, strength fall', color: A2 },
    { d0: 21, d1: 42, label: 'Serious lean-tissue loss', note: 'weeks; illness and injury risk', color: BAD },
  ]
  const x = (d: number) => 60 + (Math.log10(d + 1) / Math.log10(43)) * 660
  return (
    <svg className="diagram" viewBox="0 0 760 330" role="img" aria-label="Energy stores: glycogen about 2,000 kcal, fat about 100,000 kcal; timeline of a fast from glycogen use to fat adaptation to lean tissue loss">
      <text x={20} y={24} fontSize="13" fontWeight="700">Stores in a 70 kg adult with 20 % body fat (areas to scale)</text>
      <rect x={30} y={40} width={16} height={16} fill={INFO} />
      <text x={52} y={52} fontSize="12">Glycogen ≈ 500 g ≈ 2,000 kcal</text>
      <rect x={260} y={40} width={150} height={96} fill={A} opacity="0.85" />
      <text x={418} y={60} fontSize="12">Fat ≈ 14 kg × 7,700 kcal/kg</text>
      <text x={418} y={76} fontSize="12">≈ 108,000 kcal</text>
      <text x={418} y={100} fontSize="11" className="muted-fill">Protein (muscle, organs) is structure,</text>
      <text x={418} y={115} fontSize="11" className="muted-fill">not a store — but it is spent too.</text>
      <text x={20} y={170} fontSize="13" fontWeight="700">A fast, day by day (log scale)</text>
      {phases.map((p, i) => (
        <g key={p.label}>
          <rect x={x(p.d0)} y={184 + i * 26} width={Math.max(10, x(p.d1) - x(p.d0))} height="18" rx="9" fill={p.color} opacity="0.85" />
          <text x={x(p.d1) + 6 > 600 ? x(p.d0) - 6 : x(p.d1) + 6} y={197 + i * 26} fontSize="11.5" textAnchor={x(p.d1) + 6 > 600 ? 'end' : 'start'}>{p.label} — {p.note}</text>
        </g>
      ))}
      {[0, 1, 3, 7, 14, 28, 42].map((d) => (
        <g key={d}>
          <line x1={x(d)} x2={x(d)} y1={180} y2={292} stroke={LINE} strokeDasharray="3 4" />
          <text x={x(d)} y={306} fontSize="10.5" textAnchor="middle" className="muted-fill">{d === 0 ? 'day 0' : `${d} d`}</text>
        </g>
      ))}
      <text x={380} y={324} fontSize="10" textAnchor="middle" className="muted-fill">Timings vary with body fat, activity and cold. Water shortage kills far sooner.</text>
    </svg>
  )
}

/** Where food sits in the priorities: after water, warmth and being found. */
export function FoodPriority() {
  const steps = [
    { t: 'Immediate danger, injuries', c: BAD },
    { t: 'Temperature: shelter, clothing, fire', c: A2 },
    { t: 'Water: find, treat, conserve sweat', c: INFO },
    { t: 'Communication: be findable', c: A },
    { t: 'Food: rationing first, acquisition last', c: OK },
  ]
  return (
    <svg className="diagram" viewBox="0 0 820 250" role="img" aria-label="Priority ladder: danger, temperature, water, communication, then food">
      {steps.map((s, i) => (
        <g key={s.t}>
          <rect x={40 + i * 40} y={20 + i * 42} width={420} height="34" rx="8" fill={s.c} opacity="0.9" />
          <text x={56 + i * 40} y={42 + i * 42} fontSize="14" fontWeight="700" style={{ fill: 'var(--panel)' }}>{i + 1}. {s.t}</text>
        </g>
      ))}
      <text x={640} y={180} fontSize="12">Food matters for warmth,</text>
      <text x={640} y={196} fontSize="12">morale and judgment —</text>
      <text x={640} y={212} fontSize="12">but it rarely kills first.</text>
      <text x={640} y={234} fontSize="11" className="muted-fill">Little water → eat little.</text>
    </svg>
  )
}

/** Three ration strategies: food left over the days. */
export function RationCurves() {
  const days = 6
  const W = 620, L = 60, T = 20, H = 200
  const x = (d: number) => L + (d / days) * (W - L - 40)
  const y = (f: number) => T + (1 - f) * (H - T - 30)
  const series = [
    { name: 'Eat freely until gone', color: BAD, pts: [1, 0.55, 0.1, 0, 0, 0, 0] },
    { name: 'Even ration + 15 % reserve', color: OK, pts: [1, 0.86, 0.72, 0.58, 0.44, 0.3, 0.15] },
    { name: 'Starve now, “save it for later”', color: WARN, pts: [1, 0.97, 0.94, 0.91, 0.88, 0.85, 0.8] },
  ]
  return (
    <svg className="diagram" viewBox={`0 0 ${W + 180} 250`} role="img" aria-label="Food remaining over six days for three strategies: eat freely, even ration with reserve, and starving while saving food">
      {[0, 0.5, 1].map((f) => (
        <g key={f}>
          <line x1={L} x2={W - 40} y1={y(f)} y2={y(f)} stroke={LINE} strokeDasharray="3 4" />
          <text x={L - 8} y={y(f) + 4} fontSize="11" textAnchor="end" className="muted-fill">{f * 100}%</text>
        </g>
      ))}
      {Array.from({ length: days + 1 }, (_, d) => <text key={d} x={x(d)} y={H + 6} fontSize="11" textAnchor="middle" className="muted-fill">day {d}</text>)}
      {series.map((s, i) => (
        <g key={s.name}>
          <path d={s.pts.map((p, d) => `${d ? 'L' : 'M'}${x(d)},${y(p)}`).join(' ')} fill="none" stroke={s.color} strokeWidth="3" />
          <rect x={W - 20} y={40 + i * 26} width="14" height="4" fill={s.color} />
          <text x={W} y={46 + i * 26} fontSize="11.5">{s.name}</text>
        </g>
      ))}
      <text x={L} y={240} fontSize="11" className="muted-fill">Food left in the pack. Food in the pack does no work — but food eaten on day 1 is gone when the hard day comes.</text>
    </svg>
  )
}

/** Preservation as stacked “hurdles” against microbial growth. */
export function PreservationHurdles() {
  const h = [
    { t: 'Cold', d: '< 4 °C slows growth; freezing stops it', c: INFO },
    { t: 'Dry', d: 'low water activity: jerky, dried fruit, flour', c: A2 },
    { t: 'Acid', d: 'pH ≤ 4.6: pickles, fermented foods', c: A },
    { t: 'Salt / sugar', d: 'binds water: salt fish, jams', c: WARN },
    { t: 'Heat + seal', d: 'canning: kill, then keep out', c: OK },
    { t: 'Smoke', d: 'surface drying + antimicrobials', c: MUT },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 240" role="img" aria-label="Preservation hurdles: cold, drying, acid, salt or sugar, heat and seal, smoke — each blocks microbial growth">
      <defs><Arrow id="ph" color={BAD} /></defs>
      <text x={20} y={120} fontSize="13" fontWeight="700">Microbes</text>
      <line x1={90} y1={116} x2={740} y2={116} stroke={BAD} strokeWidth="2.5" strokeDasharray="6 5" markerEnd="url(#ph)" />
      {h.map((x, i) => (
        <g key={x.t}>
          <rect x={110 + i * 105} y={70} width="18" height="92" rx="4" fill={x.c} />
          <text x={119 + i * 105} y={60} fontSize="12.5" fontWeight="700" textAnchor="middle">{x.t}</text>
          <foreignObject x={70 + i * 105} y={170} width="100" height="60">
            <div style={{ fontSize: 10.5, lineHeight: 1.25, textAlign: 'center', color: 'var(--muted)' }}>{x.d}</div>
          </foreignObject>
        </g>
      ))}
      <text x={380} y={24} fontSize="12" textAnchor="middle" className="muted-fill">Each hurdle slows or stops growth. Combining them (dry + salt + smoke) is how traditional foods keep for months.</text>
    </svg>
  )
}

/** The danger zone thermometer with key temperatures. */
export function DangerZone() {
  const y = (c: number) => 250 - ((c + 20) / 100) * 230
  const marks = [
    { c: 74, t: '74 °C / 165 °F — poultry, leftovers, wild game (CDC for Trichinella)', col: OK },
    { c: 71, t: '71 °C / 160 °F — minced meat', col: OK },
    { c: 63, t: '63 °C / 145 °F — whole cuts of beef/pork/lamb (+3 min rest), fish', col: OK },
    { c: 60, t: '60 °C / 140 °F — top of the danger zone: keep hot food above', col: A2 },
    { c: 4, t: '4 °C / 40 °F — bottom of the danger zone: keep cold food below', col: INFO },
    { c: -18, t: '−18 °C / 0 °F — freezer: growth stops (microbes survive)', col: INFO },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 280" role="img" aria-label="Thermometer showing the food danger zone from 4 to 60 degrees Celsius and safe cooking temperatures">
      <rect x={60} y={y(60)} width={40} height={y(4) - y(60)} fill={BAD} opacity="0.3" />
      <rect x={70} y={y(80)} width={20} height={y(-20) - y(80)} rx="10" fill="none" stroke={TXT} strokeWidth="2" />
      <circle cx={80} cy={y(-20) + 8} r="16" fill={BAD} />
      <rect x={75} y={y(40)} width={10} height={y(-20) - y(40)} fill={BAD} />
      <text x={30} y={(y(60) + y(4)) / 2} fontSize="12" fontWeight="700" transform={`rotate(-90 30 ${(y(60) + y(4)) / 2})`} textAnchor="middle" style={{ fill: 'var(--bad)' }}>DANGER ZONE</text>
      {marks.map((m, i) => {
        const ty = [26, 50, 74, 110, 196, 238][i]
        return (
          <g key={m.c}>
            <line x1={92} x2={120} y1={y(m.c)} y2={y(m.c)} stroke={m.col} strokeWidth="2" />
            <line x1={120} x2={150} y1={y(m.c)} y2={ty} stroke={LINE} />
            <text x={156} y={ty + 4} fontSize="12">{m.t}</text>
          </g>
        )
      })}
      <text x={156} y={150} fontSize="12" fontWeight="700">In the danger zone, bacteria can double every ~20 minutes.</text>
      <text x={156} y={168} fontSize="11.5" className="muted-fill">Discard perishables left out &gt; 2 h (&gt; 1 h above 32 °C / 90 °F). Use a thermometer — colour lies.</text>
    </svg>
  )
}

/** Exponential growth of bacteria at room temperature. */
export function BacterialGrowth() {
  const W = 620, L = 70, T = 20, H = 210
  const hours = 5
  const x = (h: number) => L + (h / hours) * (W - L - 30)
  const y = (log2: number) => T + (1 - log2 / 15) * (H - T - 30)
  const pts = Array.from({ length: 51 }, (_, i) => i / 10).map((h) => `${x(h)},${y(Math.min(15, h * 3))}`)
  return (
    <svg className="diagram" viewBox={`0 0 ${W + 110} 250`} role="img" aria-label="Bacterial count doubling every 20 minutes: one cell becomes about four thousand in four hours">
      {[0, 1, 2, 3, 4, 5].map((h) => (
        <g key={h}>
          <line x1={x(h)} x2={x(h)} y1={T} y2={H - 30} stroke={LINE} strokeDasharray="3 4" />
          <text x={x(h)} y={H - 14} fontSize="11" textAnchor="middle" className="muted-fill">{h} h</text>
        </g>
      ))}
      {[0, 6, 12].map((l) => <text key={l} x={L - 8} y={y(l) + 4} fontSize="11" textAnchor="end" className="muted-fill">{2 ** l}</text>)}
      <polyline points={pts.join(' ')} fill="none" stroke={BAD} strokeWidth="3" />
      <line x1={x(2)} x2={x(2)} y1={T} y2={H - 30} stroke={A2} strokeWidth="2" />
      <text x={x(2) + 4} y={T + 12} fontSize="11.5">2 h rule: 2⁶ = 64×</text>
      <line x1={x(4)} x2={x(4)} y1={T} y2={H - 30} stroke={BAD} strokeWidth="2" />
      <text x={x(4) - 4} y={T + 40} fontSize="11.5" textAnchor="end">4 h: 2¹² ≈ 4,000×</text>
      <text x={W - 10} y={y(15) + 30} fontSize="11" className="muted-fill">(log scale)</text>
      <text x={L} y={H + 20} fontSize="11" className="muted-fill">Cells per starting cell at a 20-minute doubling time. Some bacteria also make heat-stable toxins that cooking does not destroy.</text>
    </svg>
  )
}

/** The identification funnel — every gate must pass; any doubt means no. */
export function IdFunnel() {
  const gates = [
    'Legal to pick here? Protected species? Permission?',
    'Every key feature checked, on a mature plant, in season',
    'Every look-alike in the region positively excluded',
    'Confirmed in person by a local expert',
    'Right part, stage and preparation; small amount',
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 300" role="img" aria-label="Identification funnel: legality, full key features, look-alike exclusion, expert confirmation, correct preparation; any doubt exits to do not eat">
      <defs><Arrow id="idf" color={BAD} /></defs>
      {gates.map((g, i) => {
        const w = 540 - i * 45
        const x0 = 30 + i * 22
        return (
          <g key={g}>
            <rect x={x0} y={20 + i * 52} width={w} height="38" rx="8" fill={P2} stroke={A} strokeWidth="1.5" />
            <text x={x0 + w / 2} y={44 + i * 52} fontSize="12.5" textAnchor="middle">{i + 1}. {g}</text>
            <line x1={x0 + w} y1={39 + i * 52} x2={620} y2={39 + i * 52} stroke={BAD} strokeWidth="1.5" markerEnd="url(#idf)" />
          </g>
        )
      })}
      <rect x={624} y={20} width={120} height={246} rx="10" fill={BAD} opacity="0.15" stroke={BAD} />
      <text x={684} y={130} fontSize="14" fontWeight="700" textAnchor="middle" style={{ fill: 'var(--bad)' }}>Any doubt</text>
      <text x={684} y={150} fontSize="14" fontWeight="700" textAnchor="middle" style={{ fill: 'var(--bad)' }}>→ do not eat</text>
      <text x={20} y={292} fontSize="11" className="muted-fill">No “universal edibility test”, app or photo substitutes for any gate. This course never passes gate 4 — so you never eat what you identified here.</text>
    </svg>
  )
}

/** Two fictional umbel plants that differ in few features. */
export function LookalikePair() {
  const plant = (cx: number, blotch: boolean, hairy: boolean, root: 'tap' | 'chamber') => (
    <g>
      <line x1={cx - 90} x2={cx + 90} y1={220} y2={220} stroke="var(--ground)" strokeWidth="3" />
      <rect x={cx - 5} y={70} width="10" height="150" rx="5" fill={OK} />
      {blotch && [90, 120, 150, 185].map((y) => <ellipse key={y} cx={cx} cy={y} rx="4" ry="6" fill={BAD} />)}
      {hairy && Array.from({ length: 14 }, (_, i) => <line key={i} x1={i % 2 ? cx + 5 : cx - 5} y1={78 + i * 10} x2={i % 2 ? cx + 11 : cx - 11} y2={74 + i * 10} stroke={TXT} />)}
      {[-50, -25, 0, 25, 50].map((dx) => <line key={dx} x1={cx} y1={74} x2={cx + dx} y2={36} stroke={OK} strokeWidth="2" />)}
      {[-50, -25, 0, 25, 50].map((dx) => <circle key={dx} cx={cx + dx} cy={32} r="9" fill="var(--panel)" stroke={TXT} />)}
      {[110, 150].map((y, i) => (
        <g key={y}>
          {[0, 1, 2, 3].map((k) => <ellipse key={k} cx={(i ? cx + 22 : cx - 22) + (i ? k * 9 : -k * 9)} cy={y - k * 4} rx="7" ry="3" fill={OK} />)}
        </g>
      ))}
      {root === 'tap' ? <path d={`M${cx - 10},222 L${cx + 10},222 L${cx + 2},280 Z`} fill={A2} /> : <g><rect x={cx - 18} y={222} width="36" height="46" rx="8" fill="var(--panel)" stroke={TXT} />{[236, 248, 260].map((y) => <line key={y} x1={cx - 16} x2={cx + 16} y1={y} y2={y} stroke={TXT} />)}</g>}
    </g>
  )
  return (
    <svg className="diagram" viewBox="0 0 760 330" role="img" aria-label="Two fictional plants with white umbrella flowers and feathery leaves; one has a hairy green stem and taproot, the other a smooth blotched stem and chambered rootstock">
      {plant(190, false, true, 'tap')}
      {plant(570, true, false, 'chamber')}
      <text x={190} y={304} fontSize="13" fontWeight="700" textAnchor="middle">Fictional “edible-in-key”</text>
      <text x={190} y={320} fontSize="11" textAnchor="middle" className="muted-fill">hairy green stem · taproot · carrot smell</text>
      <text x={570} y={304} fontSize="13" fontWeight="700" textAnchor="middle" style={{ fill: 'var(--bad)' }}>Fictional deadly look-alike</text>
      <text x={570} y={320} fontSize="11" textAnchor="middle" className="muted-fill">smooth blotched stem · chambered root · may ALSO smell of carrot</text>
      <text x={380} y={150} fontSize="12" textAnchor="middle">Same flowers,</text>
      <text x={380} y={166} fontSize="12" textAnchor="middle">same leaves,</text>
      <text x={380} y={182} fontSize="12" textAnchor="middle" fontWeight="700">different fate</text>
    </svg>
  )
}

/** Amatoxin poisoning timeline. */
export function AmatoxinTimeline() {
  const x = (h: number) => 40 + (h / 144) * 680
  const phases = [
    { h0: 0, h1: 12, t: 'Latent: no symptoms (6–24 h)', c: MUT },
    { h0: 12, h1: 40, t: 'Violent GI phase: vomiting, watery diarrhoea', c: A2 },
    { h0: 40, h1: 72, t: '“False recovery” — liver damage continues', c: WARN },
    { h0: 72, h1: 144, t: 'Liver (± kidney) failure; transplant or death', c: BAD },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 220" role="img" aria-label="Amatoxin poisoning timeline: latent period, gastrointestinal phase, false recovery, then liver failure over three to six days">
      {phases.map((p, i) => (
        <g key={p.t}>
          <rect x={x(p.h0)} y={40 + i * 30} width={x(p.h1) - x(p.h0)} height="22" rx="6" fill={p.c} opacity="0.85" />
          <text x={i === 0 ? x(p.h1) + 6 : x(p.h0) + 6} y={56 + i * 30} fontSize="11.5">{p.t}</text>
        </g>
      ))}
      {[0, 24, 48, 72, 96, 120, 144].map((h) => (
        <g key={h}>
          <line x1={x(h)} x2={x(h)} y1={30} y2={166} stroke={LINE} strokeDasharray="3 4" />
          <text x={x(h)} y={180} fontSize="11" textAnchor="middle" className="muted-fill">{h / 24} d</text>
        </g>
      ))}
      <text x={20} y={200} fontSize="11" className="muted-fill">The delay is the trap: by the time anyone connects the illness to the meal, the toxin has done its work.</text>
      <text x={20} y={215} fontSize="11" className="muted-fill">Suspected ingestion → emergency care and a poison centre immediately, even without symptoms.</text>
    </svg>
  )
}

/** Energy return: kcal gained vs spent per hour for food-getting methods (model values). */
export function EnergyReturn() {
  const rows = [
    { t: 'Passive set-lines (where legal)', gain: 120, cost: 40 },
    { t: 'Hook-and-line fishing, good water', gain: 67, cost: 80 },
    { t: 'Insects in warm season', gain: 80, cost: 120 },
    { t: 'Small-game trapping (licensed)', gain: 42, cost: 100 },
    { t: 'Stalking game (licensed)', gain: 40, cost: 300 },
  ]
  const sx = (k: number) => (k / 320) * 380
  return (
    <svg className="diagram" viewBox="0 0 760 270" role="img" aria-label="Bar chart of expected kilocalories gained versus spent per hour for five food-getting methods; only passive methods return more than they cost">
      {rows.map((r, i) => {
        const y = 30 + i * 42
        return (
          <g key={r.t}>
            <text x={250} y={y + 14} fontSize="12" textAnchor="end">{r.t}</text>
            <rect x={260} y={y} width={sx(r.gain)} height="14" fill={OK} />
            <rect x={260} y={y + 16} width={sx(r.cost)} height="14" fill={BAD} opacity="0.7" />
            <text x={266 + Math.max(sx(r.gain), sx(r.cost))} y={y + 20} fontSize="11.5" fontWeight="700" style={{ fill: r.gain > r.cost ? 'var(--ok)' : 'var(--bad)' }}>
              {r.gain > r.cost ? '+' : ''}{r.gain - r.cost} kcal/h
            </text>
          </g>
        )
      })}
      <rect x={260} y={244} width="14" height="10" fill={OK} /><text x={280} y={253} fontSize="11">expected gain / h</text>
      <rect x={400} y={244} width="14" height="10" fill={BAD} opacity="0.7" /><text x={420} y={253} fontSize="11">energy cost / h</text>
      <text x={20} y={268} fontSize="10" className="muted-fill">Illustrative model values (the Energy Budget sim). Real returns vary hugely with place, season, skill — and the law.</text>
    </svg>
  )
}

/** Insect eating decision gates. */
export function InsectGates() {
  const g = [
    { t: 'Legal and allowed here?', n: 'parks, reserves, protected species' },
    { t: 'Known-safe kind, from a clean place?', n: 'no pesticide, roadside or polluted sites' },
    { t: 'Avoid: bright colours, hairs, stings, bad smell', n: 'many warn predators honestly' },
    { t: 'Cook thoroughly', n: 'parasites and bacteria; remove legs/wings' },
    { t: 'Shellfish or dust-mite allergy?', n: 'cross-reactive proteins (tropomyosin)' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 250" role="img" aria-label="Five gates before eating insects: legality, safe kind and clean source, avoid warning colours and hairs, cook thoroughly, check shellfish allergy">
      <defs><Arrow id="ig" color={A} /></defs>
      {g.map((x, i) => (
        <g key={x.t}>
          <rect x={10 + i * 150} y={40} width="136" height="120" rx="10" fill={P2} stroke={A} />
          <text x={78 + i * 150} y={30} fontSize="18" fontWeight="700" textAnchor="middle" style={{ fill: 'var(--accent)' }}>{i + 1}</text>
          <foreignObject x={16 + i * 150} y={48} width="124" height="108">
            <div style={{ fontSize: 12, lineHeight: 1.3, color: 'var(--text)' }}><b>{x.t}</b><div style={{ color: 'var(--muted)', fontSize: 11, marginTop: 4 }}>{x.n}</div></div>
          </foreignObject>
          {i < g.length - 1 && <line x1={146 + i * 150} y1={100} x2={158 + i * 150} y2={100} stroke={A} strokeWidth="2" markerEnd="url(#ig)" />}
        </g>
      ))}
      <text x={380} y={196} fontSize="12" textAnchor="middle">Any “no” → leave it. Insects are small calories: they help a food store, rarely an energy budget.</text>
      <text x={380} y={220} fontSize="11" textAnchor="middle" className="muted-fill">For practice, use food-grade insects from a legal commercial source — not wild-caught.</text>
    </svg>
  )
}

/** Gates every harvest of wild animals must pass. */
export function HarvestGates() {
  const g = [
    ['Legal?', 'licence, season, species, method, place'],
    ['Trained?', 'hunter education, supervised practice'],
    ['Ethical?', 'humane, no non-target catches, fair chase'],
    ['Safe?', 'firearms, knives, zoonoses, terrain'],
    ['Worth it?', 'energy, time and water vs. return'],
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 210" role="img" aria-label="Five gates for any wild animal harvest: legal, trained, ethical, safe, energetically worth it">
      <defs><Arrow id="hg" color={A} /></defs>
      {g.map(([t, n], i) => (
        <g key={t}>
          <rect x={14 + i * 148} y={30} width="128" height="92" rx="10" fill={P2} stroke={A} />
          <text x={78 + i * 148} y={62} fontSize="15" fontWeight="700" textAnchor="middle">{t}</text>
          <foreignObject x={20 + i * 148} y={70} width="116" height="50">
            <div style={{ fontSize: 11, lineHeight: 1.25, textAlign: 'center', color: 'var(--muted)' }}>{n}</div>
          </foreignObject>
          {i < g.length - 1 && <line x1={142 + i * 148} y1={76} x2={160 + i * 148} y2={76} stroke={A} strokeWidth="2" markerEnd="url(#hg)" />}
        </g>
      ))}
      <text x={380} y={160} fontSize="12.5" textAnchor="middle" fontWeight="700">Fail any gate → don’t. In a short emergency, the answer is almost always “ration and get rescued”.</text>
      <text x={380} y={184} fontSize="11" textAnchor="middle" className="muted-fill">This course teaches concepts only — no trap, snare or weapon methods. Learn those, where legal, from licensed instructors.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'energy-stack': EnergyStack,
  'fuel-stores': FuelStores,
  'food-priority': FoodPriority,
  'ration-curves': RationCurves,
  'preservation-hurdles': PreservationHurdles,
  'danger-zone': DangerZone,
  'bacterial-growth': BacterialGrowth,
  'id-funnel': IdFunnel,
  'lookalike-pair': LookalikePair,
  'amatoxin-timeline': AmatoxinTimeline,
  'energy-return': EnergyReturn,
  'insect-gates': InsectGates,
  'harvest-gates': HarvestGates,
}
