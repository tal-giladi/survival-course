import type { ComponentType } from 'react'

// Stage 4 (Water) SVG diagrams. Colors only via CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const WARN = 'var(--warn)'
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

/** Performance and symptoms versus % body-mass loss. */
export function DehydrationPerformance() {
  const x = (pct: number) => 70 + pct * 55
  const bands = [
    { a: 0, b: 1, c: OK, t: 'Thirst' },
    { a: 1, b: 2, c: OK, t: 'Mild' },
    { a: 2, b: 4, c: WARN, t: 'Endurance, heat tolerance and thinking impaired' },
    { a: 4, b: 6, c: A2, t: 'Headache, nausea, big drop in work capacity' },
    { a: 6, b: 10, c: BAD, t: 'Dizziness, confusion, collapse risk' },
  ]
  // Illustrative performance curve (% of normal endurance capacity).
  const perf = [[0, 100], [1, 99], [2, 94], [3, 86], [4, 77], [5, 68], [6, 58], [8, 40], [10, 25]]
  const y = (v: number) => 230 - v * 1.7
  return (
    <svg className="diagram" viewBox="0 0 700 300" role="img" aria-label="Endurance performance falls as body-mass loss from dehydration rises past about 2 percent">
      {bands.map((b) => (
        <g key={b.a}>
          <rect x={x(b.a)} y="40" width={x(b.b) - x(b.a)} height="190" fill={b.c} opacity="0.13" />
        </g>
      ))}
      <line x1="70" y1="230" x2={x(10)} y2="230" stroke={LINE} strokeWidth="2" />
      <line x1="70" y1="40" x2="70" y2="230" stroke={LINE} strokeWidth="2" />
      {[0, 2, 4, 6, 8, 10].map((p) => <text key={p} x={x(p)} y="250" textAnchor="middle" fontSize="12">{p} %</text>)}
      {[25, 50, 75, 100].map((v) => <text key={v} x="62" y={y(v) + 4} textAnchor="end" fontSize="11">{v}</text>)}
      <polyline points={perf.map(([p, v]) => `${x(p)},${y(v)}`).join(' ')} fill="none" stroke={A} strokeWidth="3.5" />
      <line x1={x(2)} y1="40" x2={x(2)} y2="230" stroke={A2} strokeDasharray="5 5" strokeWidth="2" />
      <text x={x(2) + 6} y="54" fontSize="12" fontWeight="700" style={{ fill: A2 }}>~2 %: measurable loss</text>
      <text x={x(4) + 6} y="130" fontSize="11">Headache, nausea,</text>
      <text x={x(4) + 6} y="144" fontSize="11">big drop in work</text>
      <text x={x(6) + 10} y="176" fontSize="11">Dizziness, confusion,</text>
      <text x={x(6) + 10} y="190" fontSize="11">collapse risk ↑</text>
      <text x={x(10) / 2 + 35} y="272" textAnchor="middle" fontSize="12" fontWeight="700">Body-mass loss from dehydration</text>
      <text x="20" y="30" fontSize="12" fontWeight="700">Endurance capacity (% of normal, illustrative)</text>
      <text x="350" y="292" textAnchor="middle" fontSize="10.5" className="muted-fill">Shape illustrative; the ~2 % threshold is from ACSM. Heat makes every band worse. For 70 kg, 2 % = 1.4 L.</text>
    </svg>
  )
}

/** Daily water in versus water out. */
export function WaterBudgetFlows() {
  const ins = [
    { t: 'Drinks', v: 2.2, c: INFO },
    { t: 'Water in food', v: 0.7, c: A },
    { t: 'Metabolic water', v: 0.3, c: OK },
  ]
  const outs = [
    { t: 'Urine', v: 1.4, c: WARN },
    { t: 'Skin (insensible)', v: 0.5, c: A2 },
    { t: 'Breath', v: 0.35, c: INFO },
    { t: 'Faeces', v: 0.15, c: GROUND },
    { t: 'Sweat (resting, mild)', v: 0.8, c: BAD },
  ]
  const scale = 120
  const stack = (arr: typeof ins, x0: number) => {
    let y = 60
    return arr.map((s) => {
      const h = s.v * scale * 0.52
      const el = (
        <g key={s.t}>
          <rect x={x0} y={y} width="120" height={h} fill={s.c} opacity="0.75" stroke="var(--panel)" />
          <text x={x0 + 130} y={y + h / 2 + 4} fontSize="12">{s.t} {s.v.toFixed(2)} L</text>
        </g>
      )
      y += h
      return el
    })
  }
  return (
    <svg className="diagram" viewBox="0 0 700 330" role="img" aria-label="Daily water balance for a resting adult: inputs from drink, food and metabolism equal outputs from urine, skin, breath, faeces and sweat">
      <text x="120" y="40" textAnchor="middle" fontSize="14" fontWeight="700">IN ≈ 3.2 L</text>
      <text x="440" y="40" textAnchor="middle" fontSize="14" fontWeight="700">OUT ≈ 3.2 L</text>
      {stack(ins, 60)}
      {stack(outs, 380)}
      <text x="350" y="290" textAnchor="middle" fontSize="12">Hiking in heat adds 0.5–1.5 L of sweat per hour to the OUT column — it dwarfs everything else.</text>
      <text x="350" y="318" textAnchor="middle" fontSize="10.5" className="muted-fill">Typical temperate values for a ~70 kg adult at light activity; rounded. Urine cannot fall much below ~0.5 L/day without kidney strain.</text>
    </svg>
  )
}

/** Landscape cross-section with the places water collects. */
export function WaterTerrainClues() {
  return (
    <svg className="diagram" viewBox="0 0 720 330" role="img" aria-label="Landscape cross-section showing where to look for water: valley bottoms, outer bends of dry washes, bases of cliffs, green vegetation lines, converging animal trails and bird flight lines">
      <defs><Arrow id="wt-a" color={INFO} /><Arrow id="wt-b" color={A2} /></defs>
      <rect width="720" height="330" fill={SKY} opacity="0.5" />
      <path d="M0,120 L120,80 L200,110 L250,100 L260,200 L330,240 L420,250 L520,230 L600,160 L720,140 L720,330 L0,330 Z" fill={GROUND} opacity="0.55" />
      <path d="M250,100 L262,200" stroke={TXT} strokeWidth="3" />
      <text x="140" y="70" fontSize="12" fontWeight="700">Cliff</text>
      <circle cx="268" cy="206" r="7" fill={INFO} />
      <text x="190" y="228" fontSize="11.5">Seep at cliff base</text>
      <path d="M340,245 Q380,262 420,250" stroke={INFO} strokeWidth="6" fill="none" opacity="0.8" />
      <text x="330" y="282" fontSize="11.5">Lowest point / outer bend of a dry wash:</text>
      <text x="330" y="297" fontSize="11.5">dig in damp sand</text>
      {[300, 322, 470, 492, 514].map((cx, i) => (
        <g key={cx}>
          <line x1={cx} y1={i < 2 ? 228 : 240} x2={cx} y2={i < 2 ? 200 : 210} stroke={A} strokeWidth="3" />
          <circle cx={cx} cy={i < 2 ? 196 : 205} r="12" fill={A} />
        </g>
      ))}
      <text x="455" y="185" fontSize="11.5">Green line of willows, reeds,</text>
      <text x="455" y="199" fontSize="11.5">cottonwoods or palms</text>
      <path d="M600,165 Q540,190 505,232" stroke={A2} strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#wt-b)" />
      <path d="M690,150 Q600,200 520,238" stroke={A2} strokeWidth="2" strokeDasharray="6 4" fill="none" markerEnd="url(#wt-b)" />
      <text x="540" y="140" fontSize="11.5">Game trails converge downhill</text>
      <path d="M40,40 Q200,20 300,170" stroke={INFO} strokeWidth="1.8" fill="none" markerEnd="url(#wt-a)" />
      <text x="40" y="30" fontSize="11.5">Seed-eating birds fly low &amp; direct at dawn/dusk</text>
      <text x="360" y="320" textAnchor="middle" fontSize="10.5" className="muted-fill">Each clue raises the probability of water; none guarantees it. Weigh the sweat cost of checking.</text>
    </svg>
  )
}

/** Groundwater cross-section: water table, perched aquifer, spring, seep hole. */
export function GroundwaterSection() {
  return (
    <svg className="diagram" viewBox="0 0 720 320" role="img" aria-label="Groundwater cross-section: unsaturated zone, water table, saturated zone, a perched water table above a clay layer feeding a spring, and a seep hole dug beside a stream">
      <rect width="720" height="60" fill={SKY} opacity="0.5" />
      <path d="M0,60 L200,60 Q260,62 300,100 L420,100 Q460,70 720,60 L720,320 L0,320 Z" fill={GROUND} opacity="0.35" />
      <path d="M0,170 Q200,160 330,110 L400,110 Q520,150 720,170 L720,320 L0,320 Z" fill={INFO} opacity="0.3" />
      <path d="M0,170 Q200,160 330,110 L400,110 Q520,150 720,170" stroke={INFO} strokeWidth="2.5" strokeDasharray="8 5" fill="none" />
      <text x="20" y="160" fontSize="12" fontWeight="700" style={{ fill: INFO }}>Water table</text>
      <text x="40" y="250" fontSize="12">Saturated zone (aquifer): every pore is full</text>
      <text x="40" y="95" fontSize="12">Unsaturated zone: damp, not full</text>
      <rect x="300" y="100" width="120" height="14" fill={INFO} opacity="0.8" />
      <text x="360" y="92" textAnchor="middle" fontSize="12" fontWeight="700">Stream</text>
      <circle cx="455" cy="96" r="12" fill={P2} stroke={TXT} />
      <text x="470" y="85" fontSize="11">Seep hole 1–2 m from the bank:</text>
      <text x="470" y="99" fontSize="11">fills with bank-filtered water</text>
      <rect x="560" y="80" width="160" height="10" fill={A2} opacity="0.8" />
      <path d="M560,76 L720,70 L720,80 L560,80 Z" fill={INFO} opacity="0.5" />
      <text x="580" y="116" fontSize="11">Clay layer → perched water</text>
      <circle cx="560" cy="80" r="6" fill={INFO} />
      <text x="508" y="62" fontSize="11" fontWeight="700">Spring</text>
      <text x="360" y="310" textAnchor="middle" fontSize="10.5" className="muted-fill">Springs appear where a water-bearing layer meets a less permeable one and daylights on a slope. (After USGS Water Science School.)</text>
    </svg>
  )
}

/** Rain catchment: horizontal projected area × rainfall × efficiency. */
export function RainCatchment() {
  return (
    <svg className="diagram" viewBox="0 0 700 300" role="img" aria-label="Rain catchment: a tilted tarp catches rain over its horizontal footprint; 1 millimetre on 1 square metre equals 1 litre">
      <defs><Arrow id="rc-a" color={INFO} /></defs>
      {Array.from({ length: 14 }).map((_, i) => <line key={i} x1={120 + i * 30} y1="20" x2={112 + i * 30} y2="60" stroke={INFO} strokeWidth="2" />)}
      <line x1="140" y1="150" x2="440" y2="100" stroke={A} strokeWidth="6" />
      <line x1="140" y1="150" x2="140" y2="230" stroke={TXT} strokeWidth="3" />
      <line x1="440" y1="100" x2="440" y2="230" stroke={TXT} strokeWidth="3" />
      <path d="M140,150 Q130,170 150,190" stroke={INFO} strokeWidth="3" fill="none" markerEnd="url(#rc-a)" />
      <rect x="130" y="192" width="44" height="38" rx="4" fill={INFO} opacity="0.35" stroke={TXT} />
      <text x="126" y="248" fontSize="11">Container</text>
      <line x1="140" y1="270" x2="440" y2="270" stroke={A2} strokeWidth="2" />
      <line x1="140" y1="262" x2="140" y2="278" stroke={A2} strokeWidth="2" />
      <line x1="440" y1="262" x2="440" y2="278" stroke={A2} strokeWidth="2" />
      <text x="290" y="292" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: A2 }}>Horizontal footprint counts, not fabric area</text>
      <text x="300" y="98" textAnchor="middle" fontSize="12" fontWeight="700" transform="rotate(-9 300 98)">Tarp</text>
      <g transform="translate(470,80)">
        <rect width="215" height="150" rx="10" fill={P2} stroke={LINE} />
        <text x="12" y="26" fontSize="13" fontWeight="700">V = A × R × η</text>
        <text x="12" y="50" fontSize="12">A = footprint (m²)</text>
        <text x="12" y="70" fontSize="12">R = rainfall (mm)</text>
        <text x="12" y="90" fontSize="12">η = capture efficiency (0.6–0.9)</text>
        <text x="12" y="116" fontSize="12" fontWeight="700">1 mm on 1 m² = 1 L</text>
        <text x="12" y="138" fontSize="11">6 m² × 10 mm × 0.8 = 48 L</text>
      </g>
    </svg>
  )
}

/** Solar still cross-section with the energy flows. */
export function SolarStillSection() {
  return (
    <svg className="diagram" viewBox="0 0 700 320" role="img" aria-label="Solar still cross-section: sunlight enters through the plastic sheet, heats moist soil, water evaporates, condenses on the underside of the sheet, runs to the low point under the rock and drips into a cup; losses shown">
      <defs><Arrow id="ss-a" color={A2} /><Arrow id="ss-b" color={INFO} /></defs>
      <rect width="700" height="100" fill={SKY} opacity="0.5" />
      <rect y="100" width="700" height="220" fill={GROUND} opacity="0.4" />
      <path d="M170,100 Q350,330 530,100 Z" fill={P2} />
      <path d="M150,100 L350,210 L550,100" fill="none" stroke={INFO} strokeWidth="3" />
      <circle cx="350" cy="195" r="10" fill={MUT} />
      <rect x="330" y="220" width="40" height="34" rx="4" fill="none" stroke={TXT} strokeWidth="2" />
      <rect x="332" y="238" width="36" height="14" fill={INFO} opacity="0.6" />
      <line x1="370" y1="240" x2="470" y2="100" stroke={TXT} strokeWidth="2" strokeDasharray="4 3" />
      <text x="480" y="95" fontSize="11">Drinking tube (optional)</text>
      <path d="M90,20 L220,150" stroke={A2} strokeWidth="3" markerEnd="url(#ss-a)" />
      <text x="20" y="18" fontSize="12" fontWeight="700" style={{ fill: A2 }}>Sunlight ~15–30 MJ/m²/day</text>
      <path d="M260,230 L260,170" stroke={INFO} strokeWidth="2" markerEnd="url(#ss-b)" />
      <path d="M440,230 L440,170" stroke={INFO} strokeWidth="2" markerEnd="url(#ss-b)" />
      <text x="190" y="250" fontSize="11">Moist soil / plants /</text>
      <text x="190" y="264" fontSize="11">poured seawater or urine</text>
      <text x="240" y="130" fontSize="11">Vapour condenses under sheet,</text>
      <text x="240" y="144" fontSize="11">runs down to the low point</text>
      <g transform="translate(560,150)">
        <text fontSize="12" fontWeight="700">Where energy goes</text>
        <text y="18" fontSize="11">Reflected by plastic</text>
        <text y="34" fontSize="11">Conducted into ground</text>
        <text y="50" fontSize="11">Drips fall back, leaks</text>
        <text y="66" fontSize="11" fontWeight="700" style={{ fill: OK }}>≤ ~15 % → your cup</text>
      </g>
      <text x="350" y="305" textAnchor="middle" fontSize="11">Best case ≈ 1–1.5 L/day from a ~1 m pit in desert summer (Jackson &amp; van Bavel 1965). Often far less.</text>
    </svg>
  )
}

/** Log-scale sizes of pathogens vs filter pore sizes. */
export function PathogenSizeScale() {
  // log10(µm) from -2 (0.01) to 2 (100)
  const x = (um: number) => 80 + (Math.log10(um) + 2) * 140
  const orgs = [
    { t: 'Viruses', a: 0.02, b: 0.1, c: BAD, y: 70 },
    { t: 'Bacteria', a: 0.5, b: 5, c: A2, y: 100 },
    { t: 'Cryptosporidium oocysts', a: 4, b: 6, c: WARN, y: 130 },
    { t: 'Giardia cysts', a: 8, b: 19, c: A, y: 160 },
    { t: 'Helminth eggs', a: 30, b: 80, c: GROUND, y: 190 },
  ]
  const pores = [
    { t: 'Ultrafilter ~0.01–0.02 µm', v: 0.02 },
    { t: 'Hollow-fibre 0.1 µm', v: 0.1 },
    { t: 'Ceramic 0.2 µm', v: 0.2 },
    { t: 'Folded cloth ~20 µm', v: 20 },
  ]
  return (
    <svg className="diagram" viewBox="0 0 720 348" role="img" aria-label="Logarithmic size scale: viruses 0.02 to 0.1 micrometres, bacteria 0.5 to 5, Cryptosporidium 4 to 6, Giardia 8 to 19, helminth eggs 30 to 80, compared with filter pore sizes">
      <line x1="80" y1="230" x2={x(100)} y2="230" stroke={LINE} strokeWidth="2" />
      {[0.01, 0.1, 1, 10, 100].map((v) => (
        <g key={v}>
          <line x1={x(v)} y1="225" x2={x(v)} y2="235" stroke={TXT} />
          <text x={x(v)} y="250" textAnchor="middle" fontSize="12">{v} µm</text>
        </g>
      ))}
      {orgs.map((o) => (
        <g key={o.t}>
          <rect x={x(o.a)} y={o.y - 10} width={Math.max(8, x(o.b) - x(o.a))} height="18" rx="9" fill={o.c} opacity="0.8" />
          <text x={x(o.b) + 10} y={o.y + 4} fontSize="12">{o.t}</text>
        </g>
      ))}
      {pores.map((p, i) => (
        <g key={p.t}>
          <line x1={x(p.v)} y1="40" x2={x(p.v)} y2="230" stroke={INFO} strokeDasharray="4 4" strokeWidth="1.8" />
          <text x={x(p.v)} y={272 + i * 14} textAnchor="middle" fontSize="11" style={{ fill: INFO }}>{p.t}</text>
        </g>
      ))}
      <text x="80" y="30" fontSize="12" fontWeight="700">Anything larger than the pore (right of a line) is strained out.</text>
      <text x="360" y="340" textAnchor="middle" fontSize="10.5" className="muted-fill">Sizes after CDC Yellow Book. Each gridline is ×10. Viruses slip through microfilters; cloth only stops the largest particles.</text>
    </svg>
  )
}

/** Log-reduction ladder. */
export function LogReductionLadder() {
  const rows = [
    { l: 0, p: '0 %', n: '1,000,000' },
    { l: 1, p: '90 %', n: '100,000' },
    { l: 2, p: '99 %', n: '10,000' },
    { l: 3, p: '99.9 %', n: '1,000' },
    { l: 4, p: '99.99 %', n: '100' },
    { l: 5, p: '99.999 %', n: '10' },
    { l: 6, p: '99.9999 %', n: '1' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 700 320" role="img" aria-label="Log reduction ladder: each log is a tenfold reduction, from one million organisms at zero log to one at six log; EPA purifier standard marked">
      <text x="40" y="26" fontSize="12" fontWeight="700">Log reduction</text>
      <text x="170" y="26" fontSize="12" fontWeight="700">% removed</text>
      <text x="300" y="26" fontSize="12" fontWeight="700">Left of 1,000,000</text>
      {rows.map((r, i) => {
        const w = 360 * (1 - i / 7)
        return (
          <g key={r.l}>
            <text x="70" y={56 + i * 36} textAnchor="middle" fontSize="15" fontWeight="700">{r.l}</text>
            <text x="170" y={56 + i * 36} fontSize="12">{r.p}</text>
            <rect x="300" y={40 + i * 36} width={w} height="24" rx="4" fill={i >= 4 ? OK : i >= 2 ? WARN : BAD} opacity="0.7" />
            <text x={306} y={57 + i * 36} fontSize="12" fontWeight="700" style={{ fill: '#fff' }}>{r.n}</text>
          </g>
        )
      })}
      <g transform="translate(470,120)">
        <rect width="220" height="96" rx="8" fill={P2} stroke={LINE} />
        <text x="10" y="22" fontSize="12" fontWeight="700">US EPA "purifier" standard</text>
        <text x="10" y="44" fontSize="12">Bacteria 6 log (99.9999 %)</text>
        <text x="10" y="64" fontSize="12">Viruses 4 log (99.99 %)</text>
        <text x="10" y="84" fontSize="12">Protozoan cysts 3 log (99.9 %)</text>
      </g>
      <text x="350" y="310" textAnchor="middle" fontSize="10.5" className="muted-fill">Bar lengths are not to scale (a log scale would make them vanish). Barriers in series add logs: 3 + 2 = 5 log.</text>
    </svg>
  )
}

/** CT needed versus temperature for chlorine (Giardia 3-log and viruses 4-log). */
export function CtTemperature() {
  const temps = [0.5, 5, 10, 15, 20, 25]
  const giardia = [200, 139, 104, 70, 52, 35] // ≈ values, rounded
  const viruses = [12, 8, 6, 4, 3, 2]
  const x = (t: number) => 90 + t * 20
  const y = (v: number) => 250 - v * 0.9
  return (
    <svg className="diagram" viewBox="0 0 700 310" role="img" aria-label="Chart: chlorine CT needed for 3-log Giardia falls from about 200 at near freezing to about 35 at 25 degrees; viruses need far less">
      <line x1="90" y1="250" x2={x(26)} y2="250" stroke={LINE} strokeWidth="2" />
      <line x1="90" y1="40" x2="90" y2="250" stroke={LINE} strokeWidth="2" />
      {[0, 50, 100, 150, 200].map((v) => <text key={v} x="82" y={y(v) + 4} textAnchor="end" fontSize="11">{v}</text>)}
      {temps.map((t) => <text key={t} x={x(t)} y="268" textAnchor="middle" fontSize="11">{t === 0.5 ? '0.5' : t} °C</text>)}
      <polyline points={temps.map((t, i) => `${x(t)},${y(giardia[i])}`).join(' ')} fill="none" stroke={A2} strokeWidth="3.5" />
      <polyline points={temps.map((t, i) => `${x(t)},${y(viruses[i])}`).join(' ')} fill="none" stroke={INFO} strokeWidth="3.5" />
      {temps.map((t, i) => <circle key={t} cx={x(t)} cy={y(giardia[i])} r="4" fill={A2} />)}
      <text x={x(7)} y={y(150)} fontSize="12" fontWeight="700" style={{ fill: A2 }}>Giardia, 3-log</text>
      <text x={x(14)} y={y(22)} fontSize="12" fontWeight="700" style={{ fill: INFO }}>Viruses, 4-log</text>
      <text x="20" y="28" fontSize="12" fontWeight="700">CT needed (mg·min/L), free chlorine, pH ≈ 7</text>
      <g transform="translate(470,60)">
        <rect width="215" height="110" rx="8" fill={P2} stroke={LINE} />
        <text x="10" y="22" fontSize="12" fontWeight="700">Worked example</text>
        <text x="10" y="42" fontSize="11.5">2 mg/L residual at 5 °C:</text>
        <text x="10" y="60" fontSize="11.5">Giardia: 139 ÷ 2 ≈ 70 min</text>
        <text x="10" y="78" fontSize="11.5">Viruses: 8 ÷ 2 = 4 min</text>
        <text x="10" y="98" fontSize="11.5" fontWeight="700" style={{ fill: BAD }}>Crypto: thousands → forget it</text>
      </g>
      <text x="350" y="300" textAnchor="middle" fontSize="10.5" className="muted-fill">Rounded from US EPA Surface Water Treatment Rule CT tables (~1 mg/L, pH 7). Colder water or higher pH → longer.</text>
    </svg>
  )
}

/** Boiling point vs altitude vs pasteurization temperatures. */
export function BoilingAltitude() {
  const x = (m: number) => 80 + m * 0.09
  const y = (c: number) => 260 - (c - 50) * 4
  return (
    <svg className="diagram" viewBox="0 0 700 310" role="img" aria-label="Boiling point of water falls from 100 degrees at sea level to about 83 degrees at 4,900 metres, still well above the 60 to 70 degree range where pathogens are rapidly killed">
      <rect x="80" y={y(70)} width={x(6000) - 80} height={y(60) - y(70)} fill={OK} opacity="0.18" />
      <text x={x(3100)} y={y(64) + 4} fontSize="12" style={{ fill: OK }} fontWeight="700">Pasteurisation zone: 60 °C for 30 min, or ~70 °C in minutes</text>
      <line x1="80" y1="260" x2={x(6000)} y2="260" stroke={LINE} strokeWidth="2" />
      <line x1="80" y1="30" x2="80" y2="260" stroke={LINE} strokeWidth="2" />
      {[0, 1000, 2000, 3000, 4000, 5000, 6000].map((m) => <text key={m} x={x(m)} y="278" textAnchor="middle" fontSize="11">{m} m</text>)}
      {[60, 70, 80, 90, 100].map((c) => <text key={c} x="72" y={y(c) + 4} textAnchor="end" fontSize="11">{c} °C</text>)}
      <line x1={x(0)} y1={y(100)} x2={x(6000)} y2={y(80)} stroke={A2} strokeWidth="3.5" />
      <circle cx={x(4900)} cy={y(83.7)} r="5" fill={A2} />
      <text x={x(4900) - 10} y={y(83.7) - 12} textAnchor="end" fontSize="12">≈ 83 °C at 4,900 m</text>
      <line x1={x(2000)} y1="30" x2={x(2000)} y2="260" stroke={INFO} strokeDasharray="5 4" strokeWidth="2" />
      <text x={x(2000) + 6} y="46" fontSize="12" fontWeight="700" style={{ fill: INFO }}>Above ~2,000 m: CDC says boil 3 min</text>
      <text x={x(2000) + 6} y="62" fontSize="12" style={{ fill: INFO }}>(below: 1 min rolling boil)</text>
      <text x="350" y="302" textAnchor="middle" fontSize="10.5" className="muted-fill">Boiling point falls ~1 °C per ~300 m. Heating up to the boil already does most of the killing; the extra minutes are a safety margin.</text>
    </svg>
  )
}

/** Multi-barrier chain with example log reductions. */
export function MultiBarrier() {
  const steps = [
    { t: 'Choose source', s: 'above people & stock', c: A },
    { t: 'Settle / cloth / alum', s: 'NTU ↓; 0–1.5 log', c: GROUND },
    { t: 'Microfilter 0.1 µm', s: 'bacteria & protozoa 6 log', c: INFO },
    { t: 'Chlorine / ClO₂ / UV / boil', s: 'viruses 4+ log', c: A2 },
    { t: 'Safe storage', s: 'pour; residual; clean hands', c: OK },
  ]
  return (
    <svg className="diagram" viewBox="0 0 720 200" role="img" aria-label="Multi-barrier water treatment chain: choose the source, clarify, filter, disinfect, store safely">
      <defs><Arrow id="mb-a" color={MUT} /></defs>
      {steps.map((st, i) => (
        <g key={st.t}>
          <rect x={10 + i * 142} y="40" width="126" height="90" rx="10" fill={st.c} opacity="0.85" />
          <text x={73 + i * 142} y="76" textAnchor="middle" fontSize="12.5" fontWeight="700" style={{ fill: '#fff' }}>{st.t.split(' / ')[0]}</text>
          {st.t.includes(' / ') && <text x={73 + i * 142} y="92" textAnchor="middle" fontSize="10.5" style={{ fill: '#fff' }}>{st.t.split(' / ').slice(1).join(' / ')}</text>}
          <text x={73 + i * 142} y="150" textAnchor="middle" fontSize="11">{st.s}</text>
          {i < steps.length - 1 && <line x1={138 + i * 142} y1="85" x2={150 + i * 142} y2="85" stroke={MUT} strokeWidth="2.5" markerEnd="url(#mb-a)" />}
        </g>
      ))}
      <text x="360" y="24" textAnchor="middle" fontSize="12.5" fontWeight="700">Each barrier covers another’s gap. Log reductions add.</text>
      <text x="360" y="186" textAnchor="middle" fontSize="10.5" className="muted-fill">None of these steps removes dissolved chemicals, salt or cyanotoxins (carbon helps partly; distillation removes salts and metals).</text>
    </svg>
  )
}

/** SODIS procedure. */
export function SodisSteps() {
  const steps = [
    { t: '1. Clear PET bottle', d: '≤ 2 L, unscratched, labels off' },
    { t: '2. Clear water', d: 'Settle/cloth if cloudy (< ~30 NTU)' },
    { t: '3. Lay flat in full sun', d: 'On a roof or dark/reflective surface' },
    { t: '4. Wait', d: '≥ 6 h sunny; 2 days if cloudy' },
    { t: '5. Drink from the bottle', d: 'Don’t pour into dirty cups' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 720 230" role="img" aria-label="SODIS steps: clear PET bottle up to 2 litres, clear water, lay flat in full sun, wait at least 6 hours or 2 days if cloudy, drink directly from the bottle">
      <circle cx="660" cy="36" r="22" fill={A2} opacity="0.9" />
      {steps.map((s, i) => (
        <g key={s.t}>
          <rect x={10 + i * 140} y="70" width="128" height="80" rx="10" fill={P2} stroke={LINE} />
          <text x={74 + i * 140} y="100" textAnchor="middle" fontSize="12" fontWeight="700">{s.t}</text>
          <foreignObject x={16 + i * 140} y="106" width="116" height="44">
            <div style={{ fontSize: 10.5, textAlign: 'center', color: TXT, lineHeight: 1.25 }}>{s.d}</div>
          </foreignObject>
        </g>
      ))}
      <rect x="300" y="170" width="120" height="30" rx="14" fill={INFO} opacity="0.5" stroke={TXT} />
      <text x="360" y="190" textAnchor="middle" fontSize="11">bottle lying flat</text>
      <text x="360" y="222" textAnchor="middle" fontSize="10.5" className="muted-fill">UV-A + heat inactivate microbes. Does nothing for chemicals. Not for continuous rain — collect the rain instead. (CDC; WHO; Eawag SODIS manual.)</text>
    </svg>
  )
}

/** Safe versus unsafe storage. */
export function SafeStorage() {
  return (
    <svg className="diagram" viewBox="0 0 700 268" role="img" aria-label="Safe storage: narrow-mouth covered container with a tap versus an open bucket where hands and cups re-contaminate the water">
      <g transform="translate(40,30)">
        <text x="120" y="0" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: OK }}>✓ Safer</text>
        <rect x="60" y="30" width="120" height="150" rx="16" fill={INFO} opacity="0.3" stroke={TXT} strokeWidth="2" />
        <rect x="100" y="14" width="40" height="18" rx="4" fill={TXT} />
        <rect x="180" y="150" width="26" height="10" fill={TXT} />
        <path d="M206,160 L206,178" stroke={INFO} strokeWidth="3" />
        <text x="120" y="205" textAnchor="middle" fontSize="11.5">Narrow neck, lid, tap or pour</text>
        <text x="120" y="221" textAnchor="middle" fontSize="11.5">Labelled "treated"; residual chlorine</text>
      </g>
      <g transform="translate(380,30)">
        <text x="140" y="0" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: BAD }}>✗ Riskier</text>
        <path d="M60,50 L80,180 L200,180 L220,50 Z" fill={INFO} opacity="0.3" stroke={TXT} strokeWidth="2" />
        <path d="M150,20 Q140,60 150,90" stroke={A2} strokeWidth="10" strokeLinecap="round" fill="none" />
        <rect x="130" y="86" width="40" height="26" rx="4" fill="none" stroke={TXT} strokeWidth="2" />
        <text x="235" y="80" fontSize="11">hand + cup</text>
        <text x="140" y="205" textAnchor="middle" fontSize="11.5">Open bucket, dipping cups and hands</text>
        <text x="140" y="221" textAnchor="middle" fontSize="11.5">Re-contaminates treated water</text>
      </g>
    </svg>
  )
}

/** Improvised sediment filter: clarifies, does not purify. */
export function SedimentFilter() {
  const layers = [
    { t: 'Cloth (pre-filter)', h: 18, c: A2 },
    { t: 'Fine sand', h: 60, c: 'var(--warn-soft)' },
    { t: 'Charcoal (not activated)', h: 34, c: TXT },
    { t: 'Fine sand', h: 40, c: 'var(--warn-soft)' },
    { t: 'Gravel', h: 36, c: GROUND },
  ]
  let y = 50
  return (
    <svg className="diagram" viewBox="0 0 700 310" role="img" aria-label="Improvised layered sediment filter in a cut bottle: cloth, sand, charcoal, sand, gravel; it clarifies water but does not make it safe to drink">
      <path d="M200,40 L200,238 Q200,256 218,256 L302,256 Q320,256 320,238 L320,40" fill="none" stroke={TXT} strokeWidth="2.5" />
      {layers.map((l) => {
        const el = (
          <g key={`${l.t}${y}`}>
            <rect x="202" y={y} width="116" height={l.h} fill={l.c} opacity="0.7" />
            <text x="335" y={y + l.h / 2 + 4} fontSize="12">{l.t}</text>
          </g>
        )
        y += l.h
        return el
      })}
      <path d="M260,256 L260,284" stroke={INFO} strokeWidth="4" strokeDasharray="4 4" />
      <text x="40" y="70" fontSize="12">Muddy water in</text>
      <text x="200" y="298" fontSize="12">Clearer water out</text>
      <g transform="translate(488,90)">
        <rect width="206" height="118" rx="8" fill="var(--bad-soft)" stroke={BAD} />
        <text x="10" y="24" fontSize="13" fontWeight="700" style={{ fill: BAD }}>Clarifies — does NOT purify</text>
        <text x="10" y="46" fontSize="11.5">Removes silt and some cysts;</text>
        <text x="10" y="64" fontSize="11.5">viruses and most bacteria pass.</text>
        <text x="10" y="86" fontSize="11.5">Always follow with boiling,</text>
        <text x="10" y="104" fontSize="11.5">chemical, UV or SODIS.</text>
      </g>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'dehydration-performance': DehydrationPerformance,
  'water-budget-flows': WaterBudgetFlows,
  'water-terrain-clues': WaterTerrainClues,
  'groundwater-section': GroundwaterSection,
  'rain-catchment': RainCatchment,
  'solar-still-section': SolarStillSection,
  'pathogen-size-scale': PathogenSizeScale,
  'log-reduction-ladder': LogReductionLadder,
  'ct-temperature': CtTemperature,
  'boiling-altitude': BoilingAltitude,
  'multi-barrier': MultiBarrier,
  'sodis-steps': SodisSteps,
  'safe-storage': SafeStorage,
  'sediment-filter': SedimentFilter,
}
