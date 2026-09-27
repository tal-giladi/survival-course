// Stage 1 SVG diagrams. All colors come from CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'

function Arrow({ id = 'arr', color = MUT }: { id?: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

export function DecisionLoop() {
  const steps = ['Observe', 'Assess', 'Prioritize', 'Plan', 'Act', 'Reassess']
  const cx = 300, cy = 170, r = 120
  return (
    <svg className="diagram" viewBox="0 0 600 340" role="img" aria-label="Decision loop: Observe, Assess, Prioritize, Plan, Act, Reassess, repeating">
      <defs><Arrow id="dl" color={A} /></defs>
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={LINE} strokeWidth="2" strokeDasharray="4 6" />
      {steps.map((s, i) => {
        const a = (i / steps.length) * 2 * Math.PI - Math.PI / 2
        const a2 = ((i + 1) / steps.length) * 2 * Math.PI - Math.PI / 2
        const x = cx + r * Math.cos(a), y = cy + r * Math.sin(a)
        const mx = cx + r * Math.cos((a + a2) / 2), my = cy + r * Math.sin((a + a2) / 2)
        const x2 = cx + r * Math.cos(a2 - 0.33), y2 = cy + r * Math.sin(a2 - 0.33)
        const x1 = cx + r * Math.cos(a + 0.33), y1 = cy + r * Math.sin(a + 0.33)
        return (
          <g key={s}>
            <path d={`M${x1},${y1} Q${cx + (r + 18) * Math.cos((a + a2) / 2)},${cy + (r + 18) * Math.sin((a + a2) / 2)} ${x2},${y2}`} fill="none" stroke={A} strokeWidth="2.5" markerEnd="url(#dl)" />
            <rect x={x - 52} y={y - 17} width="104" height="34" rx="17" fill={i === 2 ? A2 : A} />
            <text x={x} y={y + 5} textAnchor="middle" fontSize="15" fontWeight="700" style={{ fill: '#fff' }}>{s}</text>
            <circle cx={mx} cy={my} r="0" />
          </g>
        )
      })}
      <text x={cx} y={cy - 8} textAnchor="middle" fontSize="15" fontWeight="700">The 12 questions</text>
      <text x={cx} y={cy + 14} textAnchor="middle" fontSize="12" className="muted-fill">→ next highest-value action</text>
    </svg>
  )
}

export function StageGraph() {
  // Layered layout of the stage dependency graph.
  const layers: number[][] = [[1], [2, 8, 16, 15, 4], [3, 5, 9, 11, 12, 14, 17, 6], [7, 10, 13, 18], [19]]
  const names: Record<number, string> = { 1: 'Foundations', 2: 'Navigation', 3: 'Fire', 4: 'Water', 5: 'Shelter', 6: 'Food', 7: 'Bushcraft', 8: 'Physiology', 9: 'First aid', 10: 'Improvisation', 11: 'Tracking', 12: 'Weather/hazards', 13: 'Rope', 14: 'Signaling', 15: 'Psychology', 16: 'Urban/disaster', 17: 'Vehicle', 18: 'Long-duration', 19: 'Capstones' }
  const edges: [number, number][] = [[1, 2], [1, 8], [1, 16], [1, 15], [1, 4], [1, 3], [1, 5], [8, 9], [2, 11], [2, 12], [2, 14], [2, 17], [4, 6], [3, 7], [7, 10], [7, 13], [3, 18], [4, 18], [5, 18], [6, 18], [8, 18], [8, 5], [18, 19], [13, 19], [10, 19], [9, 19], [14, 19], [12, 19], [15, 19], [16, 19], [17, 19], [11, 19]]
  const W = 820, H = 430
  const pos: Record<number, [number, number]> = {}
  layers.forEach((layer, li) => layer.forEach((n, i) => { pos[n] = [((i + 0.5) / layer.length) * W, 40 + li * 88] }))
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Stage dependency graph">
      <defs><Arrow id="sg" /></defs>
      {edges.map(([a, b]) => (
        <line key={`${a}-${b}`} x1={pos[a][0]} y1={pos[a][1] + 14} x2={pos[b][0]} y2={pos[b][1] - 16} stroke={LINE} strokeWidth="1.4" markerEnd="url(#sg)" />
      ))}
      {Object.entries(pos).map(([n, [x, y]]) => (
        <g key={n}>
          <rect x={x - 48} y={y - 15} width="96" height="30" rx="8" fill={Number(n) === 1 ? A : Number(n) === 19 ? A2 : P2} stroke={LINE} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize="11" fontWeight="600" style={Number(n) === 1 || Number(n) === 19 ? { fill: '#fff' } : undefined}>
            {n === '19' ? '★' : n}. {names[Number(n)]}
          </text>
        </g>
      ))}
    </svg>
  )
}

export function RuleOfThrees() {
  // Log-scale timeline showing typical ranges, not fixed numbers.
  const rows = [
    { label: 'Air / airway', lo: 3, hi: 6, unit: 'min', note: 'blocked airway, drowning, avalanche burial' },
    { label: 'Severe exposure', lo: 60, hi: 60 * 24, unit: 'h', note: 'cold-wet-wind or extreme heat without protection' },
    { label: 'Water', lo: 60 * 24, hi: 60 * 24 * 7, unit: 'd', note: 'hours in desert heat; ~3 days typical; a week in cool rest' },
    { label: 'Food', lo: 60 * 24 * 21, hi: 60 * 24 * 60, unit: 'wk', note: 'weeks; energy and mood fall long before' },
  ]
  const x = (m: number) => 150 + (Math.log10(m) / Math.log10(60 * 24 * 90)) * 600
  const ticks = [[1, '1 min'], [60, '1 h'], [60 * 24, '1 day'], [60 * 24 * 7, '1 wk'], [60 * 24 * 30, '1 mo']] as const
  return (
    <svg className="diagram" viewBox="0 0 780 250" role="img" aria-label="Rule of threes as ranges on a logarithmic time axis">
      {ticks.map(([m, l]) => (
        <g key={l}>
          <line x1={x(m)} x2={x(m)} y1={20} y2={210} stroke={LINE} strokeDasharray="3 4" />
          <text x={x(m)} y={230} textAnchor="middle" fontSize="11" className="muted-fill">{l}</text>
        </g>
      ))}
      {rows.map((r, i) => (
        <g key={r.label}>
          <text x={10} y={50 + i * 45} fontSize="13" fontWeight="600">{r.label}</text>
          <rect x={x(r.lo)} y={36 + i * 45} width={Math.max(8, x(r.hi) - x(r.lo))} height="18" rx="9" fill={[BAD, A2, INFO, OK][i]} opacity="0.85" />
          <text x={Math.min(x(r.hi) + 8, 600)} y={50 + i * 45} fontSize="10.5" className="muted-fill">{r.note}</text>
        </g>
      ))}
      <text x={390} y={248} textAnchor="middle" fontSize="10" className="muted-fill">time to serious harm (log scale) — ranges, not guarantees</text>
    </svg>
  )
}

export function RiskMatrix() {
  const lik = ['Rare', 'Unlikely', 'Possible', 'Likely', 'Almost certain']
  const con = ['Minor', 'Moderate', 'Serious', 'Critical', 'Catastrophic']
  const color = (s: number) => (s >= 15 ? BAD : s >= 8 ? A2 : s >= 4 ? 'var(--warn)' : OK)
  return (
    <svg className="diagram" viewBox="0 0 560 400" role="img" aria-label="Five by five risk matrix of likelihood versus consequence">
      {lik.map((l, i) => (
        <text key={l} x={105} y={320 - i * 60 + 5} textAnchor="end" fontSize="12">{l}</text>
      ))}
      {con.map((c, j) => (
        <text key={c} x={140 + j * 80} y={360} textAnchor="middle" fontSize="12">{c}</text>
      ))}
      {lik.map((_, i) =>
        con.map((_, j) => {
          const s = (i + 1) * (j + 1)
          return (
            <g key={`${i}-${j}`}>
              <rect x={102 + j * 80} y={292 - i * 60} width="76" height="56" rx="6" fill={color(s)} opacity="0.8" />
              <text x={140 + j * 80} y={325 - i * 60} textAnchor="middle" fontSize="14" fontWeight="700" style={{ fill: '#fff' }}>{s}</text>
            </g>
          )
        }),
      )}
      <text x={20} y={40} fontSize="13" fontWeight="700" transform="rotate(-90 20 180)">LIKELIHOOD →</text>
      <text x={340} y={390} textAnchor="middle" fontSize="13" fontWeight="700">CONSEQUENCE →</text>
      <text x={330} y={20} textAnchor="middle" fontSize="12" className="muted-fill">Risk score = likelihood × consequence (1–25)</text>
    </svg>
  )
}

export function StressCurve() {
  const pts = Array.from({ length: 61 }, (_, i) => {
    const x = i / 60
    const y = Math.exp(-Math.pow((x - 0.45) / 0.22, 2))
    return `${60 + x * 480},${250 - y * 190}`
  }).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 600 300" role="img" aria-label="Performance rises with arousal to an optimum, then collapses">
      <defs><Arrow id="sc" /></defs>
      <line x1="60" y1="260" x2="560" y2="260" stroke={MUT} markerEnd="url(#sc)" />
      <line x1="60" y1="260" x2="60" y2="30" stroke={MUT} markerEnd="url(#sc)" />
      <rect x={60 + 0.3 * 480} y="40" width={0.3 * 480} height="220" fill={OK} opacity="0.12" />
      <polyline points={pts} fill="none" stroke={A} strokeWidth="3" />
      <text x="310" y="285" textAnchor="middle" fontSize="12">Arousal / stress →</text>
      <text x="30" y="150" fontSize="12" transform="rotate(-90 30 150)" textAnchor="middle">Performance →</text>
      <text x="110" y="235" fontSize="11" className="muted-fill">Too relaxed:</text>
      <text x="110" y="249" fontSize="11" className="muted-fill">complacent</text>
      <text x="276" y="55" fontSize="12" fontWeight="700" style={{ fill: 'var(--ok)' }}>Focused zone</text>
      <text x="440" y="200" fontSize="11" className="muted-fill">Overwhelmed:</text>
      <text x="440" y="214" fontSize="11" className="muted-fill">tunnel vision, freezing,</text>
      <text x="440" y="228" fontSize="11" className="muted-fill">poor fine motor skill</text>
    </svg>
  )
}

export function HeatLoss() {
  return (
    <svg className="diagram" viewBox="0 0 640 360" role="img" aria-label="Four heat-loss mechanisms from a person: radiation, convection, conduction, evaporation, plus respiration">
      <defs><Arrow id="hl" color={A2} /></defs>
      <rect x="0" y="300" width="640" height="60" fill="var(--ground)" opacity="0.5" />
      {/* person sitting on ground */}
      <circle cx="320" cy="120" r="26" fill={P2} stroke={TXT} strokeWidth="2" />
      <path d="M290,150 Q320,140 350,150 L360,250 L280,250 Z" fill={P2} stroke={TXT} strokeWidth="2" />
      <path d="M280,250 L250,300 M360,250 L390,300" stroke={TXT} strokeWidth="6" strokeLinecap="round" />
      <text x="320" y="210" textAnchor="middle" fontSize="12" fontWeight="700">37 °C core</text>
      {/* radiation */}
      {[-1, 0, 1].map((k) => <path key={k} d={`M${370},${170 + k * 25} q15,-8 30,0 t30,0`} fill="none" stroke={A2} strokeWidth="2.5" markerEnd="url(#hl)" />)}
      <text x="470" y="160" fontSize="14" fontWeight="700">Radiation</text>
      <text x="470" y="177" fontSize="11" className="muted-fill">infrared to cold sky/surroundings</text>
      {/* convection */}
      {[0, 1, 2].map((k) => <path key={k} d={`M${60},${110 + k * 30} L${250},${110 + k * 30}`} stroke={INFO} strokeWidth="2.5" markerEnd="url(#hl)" strokeDasharray="10 6" />)}
      <text x="40" y="95" fontSize="14" fontWeight="700">Convection (wind)</text>
      <text x="40" y="215" fontSize="11" className="muted-fill">moving air strips the warm boundary layer</text>
      {/* conduction */}
      <path d="M320,262 L320,320" stroke={A2} strokeWidth="3" markerEnd="url(#hl)" />
      <text x="335" y="330" fontSize="14" fontWeight="700">Conduction</text>
      <text x="335" y="347" fontSize="11">into cold ground, snow, water, metal</text>
      {/* evaporation */}
      {[0, 1, 2].map((k) => <path key={k} d={`M${300 + k * 20},${95} q-6,-15 0,-30 q6,-15 0,-30`} fill="none" stroke={A} strokeWidth="2" markerEnd="url(#hl)" />)}
      <text x="360" y="45" fontSize="14" fontWeight="700">Evaporation + respiration</text>
      <text x="360" y="62" fontSize="11" className="muted-fill">sweat, wet clothing, breathing cold dry air</text>
    </svg>
  )
}

export function Layering() {
  const layers = [
    { name: 'Shell', job: 'blocks wind & rain', c: INFO },
    { name: 'Insulation', job: 'traps still air (fleece, down, synthetic, wool)', c: A2 },
    { name: 'Mid layer', job: 'adjustable warmth while moving', c: 'var(--warn)' },
    { name: 'Base layer', job: 'moves moisture off skin (wool, synthetic — not cotton)', c: A },
    { name: 'Skin', job: 'keep it dry', c: MUT },
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Clothing layers from skin outward: base, mid, insulation, shell">
      {layers.map((l, i) => (
        <g key={l.name}>
          <rect x={30 + i * 22} y={20 + i * 22} width={260 - i * 44} height={220 - i * 44} rx="18" fill={l.c} opacity={0.18 + i * 0.1} stroke={l.c} />
          <text x="340" y={50 + i * 44} fontSize="14" fontWeight="700">{l.name}</text>
          <text x="340" y={66 + i * 44} fontSize="11.5" className="muted-fill">{l.job}</text>
          <line x1={30 + i * 22 + (260 - i * 44)} y1={45 + i * 44} x2="335" y2={45 + i * 44} stroke={LINE} />
        </g>
      ))}
    </svg>
  )
}

export function KitTiers() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Three kit tiers: on body, pocket kit, pack">
      <circle cx="170" cy="150" r="135" fill={A} opacity="0.12" stroke={A} />
      <circle cx="170" cy="150" r="88" fill={A} opacity="0.18" stroke={A} />
      <circle cx="170" cy="150" r="44" fill={A} opacity="0.3" stroke={A} />
      <text x="170" y="146" textAnchor="middle" fontSize="12" fontWeight="700">Tier 1</text>
      <text x="170" y="161" textAnchor="middle" fontSize="11">on body</text>
      <text x="170" y="92" textAnchor="middle" fontSize="12" fontWeight="700">Tier 2 · pocket kit</text>
      <text x="170" y="40" textAnchor="middle" fontSize="12" fontWeight="700">Tier 3 · pack</text>
      <text x="330" y="60" fontSize="13" fontWeight="700">Tier 1 — always on you</text>
      <text x="330" y="78" fontSize="11.5" className="muted-fill">phone, lighter, knife/multitool, whistle, headlamp, clothing</text>
      <text x="330" y="130" fontSize="13" fontWeight="700">Tier 2 — survives losing the pack</text>
      <text x="330" y="148" fontSize="11.5" className="muted-fill">ferro rod, tinder, emergency bag, purification tabs,</text>
      <text x="330" y="164" fontSize="11.5" className="muted-fill">cord, mirror, compass, small first-aid, snack</text>
      <text x="330" y="215" fontSize="13" fontWeight="700">Tier 3 — the Ten Essentials</text>
      <text x="330" y="233" fontSize="11.5" className="muted-fill">navigation, light, sun, first aid, knife, fire,</text>
      <text x="330" y="249" fontSize="11.5" className="muted-fill">shelter, extra food, extra water, extra clothes</text>
    </svg>
  )
}

export function ShelterSites() {
  return (
    <svg className="diagram" viewBox="0 0 760 300" role="img" aria-label="Terrain cross-section showing good and bad shelter sites">
      <rect width="760" height="300" fill="var(--sky)" opacity="0.5" />
      <path d="M0,70 L120,60 L260,140 L360,230 L420,245 L480,230 L600,150 L760,120 L760,300 L0,300 Z" fill="var(--ground)" opacity="0.75" />
      <path d="M360,245 Q420,262 480,245" fill="none" stroke={INFO} strokeWidth="6" />
      {/* wind */}
      {[0, 1].map((k) => <path key={k} d={`M10,${30 + k * 14} L110,${36 + k * 14}`} stroke={INFO} strokeWidth="2" strokeDasharray="8 5" />)}
      <text x="20" y="20" fontSize="11">wind on the exposed ridge</text>
      {/* cold air */}
      <path d="M300,190 Q380,230 420,236" fill="none" stroke={INFO} strokeWidth="2" strokeDasharray="3 4" />
      <text x="330" y="280" fontSize="11">cold air pools + flood risk at the bottom</text>
      {/* dead tree */}
      <line x1="640" y1="145" x2="648" y2="80" stroke={TXT} strokeWidth="4" />
      <line x1="646" y1="95" x2="670" y2="80" stroke={TXT} strokeWidth="3" />
      <text x="600" y="70" fontSize="11">dead tree (“widowmaker”)</text>
      {/* marks */}
      {[
        { x: 90, y: 60, ok: false, t: 'ridge' },
        { x: 215, y: 112, ok: true, t: 'mid-slope bench, sheltered' },
        { x: 420, y: 240, ok: false, t: 'valley floor' },
        { x: 650, y: 140, ok: false, t: '' },
      ].map((m, i) => (
        <g key={i}>
          <circle cx={m.x} cy={m.y - 12} r="11" fill={m.ok ? OK : BAD} />
          <text x={m.x} y={m.y - 8} textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: '#fff' }}>{m.ok ? '✓' : '✗'}</text>
          {m.t && <text x={m.x + 16} y={m.y - 22} fontSize="11" fontWeight="600">{m.t}</text>}
        </g>
      ))}
    </svg>
  )
}

export function TarpConfigs() {
  return (
    <svg className="diagram" viewBox="0 0 700 250" role="img" aria-label="A-frame and lean-to tarp configurations">
      <rect y="200" width="700" height="50" fill="var(--ground)" opacity="0.5" />
      {/* A-frame */}
      <line x1="60" y1="200" x2="60" y2="80" stroke={TXT} strokeWidth="3" />
      <line x1="280" y1="200" x2="280" y2="80" stroke={TXT} strokeWidth="3" />
      <line x1="30" y1="80" x2="310" y2="80" stroke={MUT} strokeWidth="1.5" />
      <path d="M70,82 L140,200 L200,200 L270,82 Z" fill={A} opacity="0.2" />
      <path d="M170,82 L100,200 M170,82 L240,200" stroke={A} strokeWidth="4" />
      <text x="170" y="40" textAnchor="middle" fontSize="15" fontWeight="700">A-frame</text>
      <text x="170" y="58" textAnchor="middle" fontSize="11" className="muted-fill">rain and wind from either side; low & narrow = warmer</text>
      <rect x="120" y="190" width="100" height="8" fill={A2} />
      <text x="170" y="228" textAnchor="middle" fontSize="11">insulated bed</text>
      {/* lean-to */}
      <line x1="420" y1="200" x2="420" y2="90" stroke={TXT} strokeWidth="3" />
      <line x1="620" y1="200" x2="620" y2="90" stroke={TXT} strokeWidth="3" />
      <line x1="400" y1="90" x2="640" y2="90" stroke={MUT} strokeWidth="1.5" />
      <path d="M520,92 L440,200" stroke={A} strokeWidth="4" />
      <text x="520" y="40" textAnchor="middle" fontSize="15" fontWeight="700">Lean-to</text>
      <text x="520" y="58" textAnchor="middle" fontSize="11" className="muted-fill">back to the wind; open side can face a fire</text>
      {[0, 1, 2].map((k) => <path key={k} d={`M370,${130 + k * 18} L420,${140 + k * 18}`} stroke={INFO} strokeWidth="2" strokeDasharray="7 4" />)}
      <text x="340" y="120" fontSize="11">wind</text>
    </svg>
  )
}

export function FireTriangle() {
  return (
    <svg className="diagram" viewBox="0 0 520 300" role="img" aria-label="Fire triangle: heat, fuel, oxygen">
      <polygon points="260,30 460,270 60,270" fill={A2} opacity="0.15" stroke={A2} strokeWidth="3" />
      <text x="260" y="170" textAnchor="middle" fontSize="16" fontWeight="700">combustion</text>
      <text x="260" y="190" textAnchor="middle" fontSize="11" className="muted-fill">remove any side → fire dies</text>
      <text x="120" y="130" textAnchor="middle" fontSize="15" fontWeight="700">HEAT</text>
      <text x="120" y="148" textAnchor="middle" fontSize="11" className="muted-fill">ignition, then the fire’s own</text>
      <text x="120" y="162" textAnchor="middle" fontSize="11" className="muted-fill">heat drying & pyrolysing fuel</text>
      <text x="400" y="130" textAnchor="middle" fontSize="15" fontWeight="700">OXYGEN</text>
      <text x="400" y="148" textAnchor="middle" fontSize="11" className="muted-fill">gaps between sticks,</text>
      <text x="400" y="162" textAnchor="middle" fontSize="11" className="muted-fill">gentle airflow</text>
      <text x="260" y="292" textAnchor="middle" fontSize="15" fontWeight="700">FUEL — dry, fine first, then larger</text>
    </svg>
  )
}

export function FireLadder() {
  const steps = [
    { n: 'Tinder', d: 'hair-fine', w: 1, count: '2 fistfuls' },
    { n: 'Small kindling', d: 'matchstick / pencil lead', w: 3, count: '2 big handfuls' },
    { n: 'Kindling', d: 'pencil', w: 7, count: 'an armful' },
    { n: 'Small fuel', d: 'thumb', w: 16, count: 'an armful' },
    { n: 'Fuel', d: 'wrist', w: 34, count: 'a pile knee-high' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 680 260" role="img" aria-label="Fuel size ladder from tinder to wrist-thick fuel">
      {steps.map((s, i) => (
        <g key={s.n}>
          <rect x={20 + i * 132} y={140 - s.w / 2} width="110" height={Math.max(2, s.w)} rx={Math.min(8, s.w / 2)} fill={i === 0 ? A2 : 'var(--ground)'} />
          <text x={75 + i * 132} y="40" textAnchor="middle" fontSize="13" fontWeight="700">{s.n}</text>
          <text x={75 + i * 132} y="58" textAnchor="middle" fontSize="11" className="muted-fill">{s.d}</text>
          <text x={75 + i * 132} y="215" textAnchor="middle" fontSize="11">{s.count}</text>
          {i < steps.length - 1 && <text x={140 + i * 132} y="145" fontSize="16" className="muted-fill">→</text>}
        </g>
      ))}
      <text x="340" y="245" textAnchor="middle" fontSize="11" className="muted-fill">each step roughly 2–3× thicker than the last · gather ALL of it before you strike</text>
    </svg>
  )
}

export function WaterMethods() {
  const methods = ['Boil (rolling, 1 min)', 'Filter 0.1–0.2 µm', 'Chlorine (bleach/tabs)', 'Chlorine dioxide', 'UV pen (clear water)']
  const classes = ['Bacteria', 'Protozoa (Giardia)', 'Cryptosporidium', 'Viruses', 'Chemicals']
  // 2 = effective, 1 = partial / conditions, 0 = not effective
  const m = [
    [2, 2, 2, 2, 0],
    [2, 2, 2, 0, 0],
    [2, 1, 0, 2, 0],
    [2, 2, 1, 2, 0],
    [2, 2, 2, 2, 0],
  ]
  const col = ['var(--bad)', 'var(--warn)', 'var(--ok)']
  const lab = ['✗', '~', '✓']
  return (
    <svg className="diagram" viewBox="0 0 700 260" role="img" aria-label="Water treatment methods versus pathogen classes">
      {classes.map((c, j) => <text key={c} x={250 + j * 92} y="30" textAnchor="middle" fontSize="11" fontWeight="700">{c}</text>)}
      {methods.map((me, i) => (
        <g key={me}>
          <text x="230" y={64 + i * 40} textAnchor="end" fontSize="12">{me}</text>
          {m[i].map((v, j) => (
            <g key={j}>
              <rect x={210 + j * 92} y={44 + i * 40} width="80" height="30" rx="6" fill={col[v]} opacity="0.8" />
              <text x={250 + j * 92} y={64 + i * 40} textAnchor="middle" fontSize="14" fontWeight="700" style={{ fill: '#fff' }}>{lab[v]}</text>
            </g>
          ))}
        </g>
      ))}
      <text x="350" y="252" textAnchor="middle" fontSize="10.5" className="muted-fill">~ = needs long contact time, warm water or clear water. None of these remove chemical pollution (activated carbon helps some).</text>
    </svg>
  )
}

export function GroundToAir() {
  const sym = [
    { s: 'V', t: 'Require assistance' },
    { s: 'X', t: 'Require medical assistance' },
    { s: 'N', t: 'No / negative' },
    { s: 'Y', t: 'Yes / affirmative' },
    { s: '→', t: 'Proceeding in this direction' },
  ]
  return (
    <svg className="diagram" viewBox="0 0 700 200" role="img" aria-label="Ground-to-air emergency code symbols">
      <rect width="700" height="140" rx="10" fill="var(--ground)" opacity="0.35" />
      {sym.map((x, i) => (
        <g key={x.s}>
          <text x={70 + i * 140} y="100" textAnchor="middle" fontSize="72" fontWeight="900" style={{ fill: 'var(--accent-2)' }}>{x.s}</text>
          <text x={70 + i * 140} y="165" textAnchor="middle" fontSize="11.5" fontWeight="600">{x.t}</text>
        </g>
      ))}
      <text x="350" y="192" textAnchor="middle" fontSize="10.5" className="muted-fill">Make symbols ≥3 m tall, high-contrast with the ground, with straight lines (nature rarely makes them).</text>
    </svg>
  )
}

export function FirstHour() {
  const blocks = [
    { t: '0–5 min', d: 'STOP. Immediate danger? Injuries?', c: BAD },
    { t: '5–15', d: 'Inventory. Call / message if signal. Mark position.', c: A2 },
    { t: '15–30', d: 'Decide stay/move. Protect from wet & wind now.', c: 'var(--warn)' },
    { t: '30–60', d: 'Shelter & insulation, fire prep, water plan, signals ready.', c: A },
    { t: '60+', d: 'Reassess. Plan for dark. Rest. Keep signaling.', c: INFO },
  ]
  return (
    <svg className="diagram" viewBox="0 0 740 160" role="img" aria-label="First hour timeline">
      {blocks.map((b, i) => (
        <g key={b.t}>
          <rect x={10 + i * 145} y="20" width="140" height="120" rx="10" fill={b.c} opacity="0.18" stroke={b.c} />
          <text x={80 + i * 145} y="45" textAnchor="middle" fontSize="14" fontWeight="800">{b.t}</text>
          {b.d.match(/.{1,22}(\s|$)/g)!.map((line, k) => (
            <text key={k} x={80 + i * 145} y={68 + k * 16} textAnchor="middle" fontSize="11">{line.trim()}</text>
          ))}
        </g>
      ))}
    </svg>
  )
}
