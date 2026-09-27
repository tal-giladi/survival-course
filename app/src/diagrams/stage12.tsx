import type { ComponentType } from 'react'

// Stage 12 SVG diagrams — weather and environmental hazards. Colors only via CSS variables.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const MUT = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'
const WARN = 'var(--warn)'
const SKY = 'var(--sky)'
const GROUND = 'var(--ground)'

function Arrow({ id, color = MUT }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Puff({ x, y, w, h, fill = 'var(--panel)', stroke = MUT }: { x: number; y: number; w: number; h: number; fill?: string; stroke?: string }) {
  return <path d={`M${x},${y} q${w * 0.05},${-h} ${w * 0.3},${-h * 0.8} q${w * 0.15},${-h * 0.5} ${w * 0.4},${-h * 0.1} q${w * 0.25},${-h * 0.2} ${w * 0.3},${h * 0.9} z`} fill={fill} stroke={stroke} />
}

// 1. Cloud genera by altitude
export function CloudAltitudes() {
  const y = (km: number) => 350 - km * 25
  const bands = [
    { name: 'High (cirro-)', lo: 5, hi: 13, fill: INFO },
    { name: 'Middle (alto-)', lo: 2, hi: 7, fill: A },
    { name: 'Low', lo: 0, hi: 2, fill: GROUND },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 390" role="img" aria-label="The ten WMO cloud genera arranged by typical altitude in mid-latitudes">
      <rect x="60" y={y(13)} width="690" height={y(0) - y(13)} fill={SKY} />
      {bands.map((b, i) => (
        <g key={b.name}>
          <rect x={60 + i * 4} y={y(b.hi)} width="8" height={y(b.lo) - y(b.hi)} fill={b.fill} opacity="0.7" />
          <text x={78 + i * 4} y={y(b.hi) + 14} fontSize="11" fontWeight="700">{b.name}</text>
        </g>
      ))}
      {[0, 2, 4, 6, 8, 10, 12].map((k) => (
        <g key={k}>
          <line x1="52" x2="60" y1={y(k)} y2={y(k)} stroke={MUT} />
          <text x="48" y={y(k) + 4} textAnchor="end" fontSize="11" className="muted-fill">{k} km</text>
        </g>
      ))}
      {/* High */}
      <path d={`M190,${y(10)} q30,-6 55,-18 q8,-4 14,-2 M200,${y(9.4)} q30,-4 50,-14`} stroke={MUT} strokeWidth="2" fill="none" />
      <text x="225" y={y(8.4)} textAnchor="middle" fontSize="12" fontWeight="600">Cirrus (Ci)</text>
      {Array.from({ length: 18 }, (_, i) => <circle key={i} cx={320 + (i % 9) * 9 + (Math.floor(i / 9) % 2) * 4} cy={y(9.8) + Math.floor(i / 9) * 8} r="2.5" fill={MUT} />)}
      <text x="360" y={y(8.4)} textAnchor="middle" fontSize="12" fontWeight="600">Cirrocumulus (Cc)</text>
      <rect x="440" y={y(10.3)} width="140" height="22" rx="10" fill={MUT} opacity="0.35" />
      <circle cx="560" cy={y(9.9)} r="18" fill="none" stroke={MUT} strokeDasharray="3 3" />
      <text x="510" y={y(8.4)} textAnchor="middle" fontSize="12" fontWeight="600">Cirrostratus (Cs) — halo</text>
      {/* Middle */}
      {[0, 1, 2, 3, 4].map((i) => <ellipse key={i} cx={130 + i * 26} cy={y(4.6) + (i % 2) * 6} rx="11" ry="6" fill="var(--panel)" stroke={MUT} />)}
      <text x="182" y={y(3.7)} textAnchor="middle" fontSize="12" fontWeight="600">Altocumulus (Ac)</text>
      <rect x="260" y={y(5)} width="120" height="24" fill={MUT} opacity="0.55" />
      <text x="320" y={y(3.7)} textAnchor="middle" fontSize="12" fontWeight="600">Altostratus (As)</text>
      <text x="320" y={y(3.7) + 13} textAnchor="middle" fontSize="10.5" className="muted-fill">“frosted-glass” sun</text>
      {/* Low */}
      <rect x="110" y={y(1.6)} width="120" height="18" fill={MUT} opacity="0.7" />
      <text x="170" y={y(0.35)} textAnchor="middle" fontSize="12" fontWeight="600">Stratus (St)</text>
      {[0, 1, 2, 3].map((i) => <ellipse key={i} cx={265 + i * 30} cy={y(1.3)} rx="15" ry="8" fill="var(--panel)" stroke={MUT} />)}
      <text x="310" y={y(0.35)} textAnchor="middle" fontSize="12" fontWeight="600">Stratocumulus (Sc)</text>
      <rect x="380" y={y(4)} width="110" height={y(0.6) - y(4)} fill={MUT} opacity="0.75" />
      {[0, 1, 2, 3, 4, 5].map((i) => <line key={i} x1={388 + i * 18} y1={y(0.6)} x2={383 + i * 18} y2={y(0)} stroke={INFO} />)}
      <text x="435" y={y(2.3)} textAnchor="middle" fontSize="12" fontWeight="600" style={{ fill: '#fff' }}>Nimbostratus</text>
      <text x="435" y={y(2.3) + 14} textAnchor="middle" fontSize="11" style={{ fill: '#fff' }}>(Ns) steady rain</text>
      {/* Vertical */}
      <Puff x={520} y={y(0.8)} w={60} h={26} />
      <text x="550" y={y(0.35)} textAnchor="middle" fontSize="12" fontWeight="600">Cumulus (Cu)</text>
      <path d={`M620,${y(0.8)} Q612,${y(5)} 630,${y(9)} Q640,${y(11.3)} 600,${y(11.8)} L740,${y(11.8)} Q690,${y(11.3)} 700,${y(9)} Q716,${y(5)} 708,${y(0.8)} Z`} fill="var(--panel)" stroke={MUT} />
      {[0, 1, 2, 3].map((i) => <line key={i} x1={630 + i * 20} y1={y(0.8)} x2={624 + i * 20} y2={y(0)} stroke={INFO} strokeWidth="2" />)}
      <path d={`M668,${y(3)} l-8,14 h8 l-10,18`} stroke={WARN} strokeWidth="2.5" fill="none" />
      <text x="664" y={y(12.4)} textAnchor="middle" fontSize="12" fontWeight="600">Cumulonimbus (Cb)</text>
      <rect x="60" y={y(0)} width="690" height="8" fill={GROUND} />
      <text x="405" y="385" textAnchor="middle" fontSize="10.5" className="muted-fill">Heights are typical for mid-latitudes; cloud levels are lower near the poles and higher in the tropics.</text>
    </svg>
  )
}

// 2. Front cross-sections
export function FrontCrossSection() {
  return (
    <svg className="diagram" viewBox="0 0 760 420" role="img" aria-label="Cross-sections of a warm front and a cold front, showing cloud sequences and rain bands">
      <defs><Arrow id="fc-a" color={A2} /><Arrow id="fc-b" color={INFO} /></defs>
      <text x="10" y="20" fontSize="14" fontWeight="700">Warm front — shallow slope (~1:150), wide cloud shield</text>
      <rect x="10" y="30" width="740" height="160" fill={SKY} />
      <path d="M40,180 L740,40 L740,180 Z" fill={INFO} opacity="0.18" />
      <text x="600" y="165" fontSize="12" fontWeight="600">cold air</text>
      <text x="120" y="80" fontSize="12" fontWeight="600">warm air rides up over the cold</text>
      <line x1="80" y1="150" x2="300" y2="110" stroke={A2} strokeWidth="2.5" markerEnd="url(#fc-a)" />
      <path d="M720,48 q-20,-4 -40,-4 M700,56 q-20,-3 -38,-2" stroke={MUT} strokeWidth="2" fill="none" />
      <text x="690" y="75" textAnchor="middle" fontSize="11">Ci</text>
      <rect x="520" y="72" width="120" height="12" fill={MUT} opacity="0.35" />
      <text x="580" y="100" textAnchor="middle" fontSize="11">Cs (halo)</text>
      <rect x="330" y="100" width="170" height="30" fill={MUT} opacity="0.55" />
      <text x="415" y="120" textAnchor="middle" fontSize="11">As</text>
      <rect x="140" y="130" width="190" height="34" fill={MUT} opacity="0.85" />
      <text x="235" y="152" textAnchor="middle" fontSize="11" style={{ fill: '#fff' }}>Ns</text>
      {Array.from({ length: 10 }, (_, i) => <line key={i} x1={150 + i * 18} y1="166" x2={146 + i * 18} y2="186" stroke={INFO} />)}
      <text x="235" y="205" textAnchor="middle" fontSize="11" className="muted-fill">steady rain, hours</text>
      <text x="745" y="205" textAnchor="end" fontSize="11" className="muted-fill">first cirrus ~12–24 h (≈ 500–1000 km) ahead</text>
      <text x="10" y="232" fontSize="14" fontWeight="700">Cold front — steep slope, narrow band of intense weather</text>
      <rect x="10" y="242" width="740" height="160" fill={SKY} />
      <path d="M10,392 L10,300 Q200,300 330,392 Z" fill={INFO} opacity="0.25" />
      <text x="60" y="380" fontSize="12" fontWeight="600">cold air pushes in underneath</text>
      <line x1="60" y1="345" x2="220" y2="345" stroke={INFO} strokeWidth="2.5" markerEnd="url(#fc-b)" />
      <text x="745" y="300" textAnchor="end" fontSize="12" fontWeight="600">warm, moist air forced up quickly</text>
      <path d="M280,392 Q270,330 300,290 Q310,262 350,258 L420,258 Q380,266 390,290 Q410,330 400,392 Z" fill="var(--panel)" stroke={MUT} />
      <path d="M335,320 l-8,14 h8 l-10,18" stroke={WARN} strokeWidth="2.5" fill="none" />
      {Array.from({ length: 5 }, (_, i) => <line key={i} x1={300 + i * 18} y1="376" x2={296 + i * 18} y2="400" stroke={INFO} strokeWidth="2" />)}
      <text x="340" y="252" textAnchor="middle" fontSize="11">Cb line</text>
      {[0, 1, 2].map((i) => <ellipse key={i} cx={110 + i * 60} cy="275" rx="22" ry="9" fill="var(--panel)" stroke={MUT} />)}
      <text x="170" y="262" textAnchor="middle" fontSize="11">behind: Sc / Cu, clearing</text>
      <text x="745" y="330" textAnchor="end" fontSize="11" className="muted-fill">Ahead: wind backing, pressure falling</text>
      <text x="745" y="348" textAnchor="end" fontSize="11" className="muted-fill">At the front: gusts, heavy showers, thunder</text>
      <text x="745" y="366" textAnchor="end" fontSize="11" className="muted-fill">Behind: wind veers, temp drops, pressure rises</text>
      <text x="745" y="384" textAnchor="end" fontSize="10" className="muted-fill">(backing/veering as seen in the N. Hemisphere)</text>
    </svg>
  )
}

// 3. Pressure tendency
export function PressureTendency() {
  const x = (h: number) => 70 + h * 50
  const y = (p: number) => 40 + (1024 - p) * 12
  const lines = [
    { name: 'Steady / rising: settled', pts: [[0, 1021], [12, 1022]], color: OK },
    { name: 'Slow fall ~1 hPa/3 h: change within a day', pts: [[0, 1021], [12, 1017]], color: WARN },
    { name: 'Rapid fall ~6 hPa/3 h: gales / storm soon', pts: [[0, 1021], [3, 1015], [6, 1009], [8, 1006]], color: BAD },
  ]
  return (
    <svg className="diagram" viewBox="0 0 700 330" role="img" aria-label="Pressure tendency: steady, slowly falling and rapidly falling barometer traces over 12 hours">
      <defs><Arrow id="pt" /></defs>
      <line x1="70" y1="270" x2="680" y2="270" stroke={MUT} markerEnd="url(#pt)" />
      <line x1="70" y1="270" x2="70" y2="30" stroke={MUT} markerEnd="url(#pt)" />
      {[0, 3, 6, 9, 12].map((h) => <text key={h} x={x(h)} y="288" textAnchor="middle" fontSize="11" className="muted-fill">{h} h</text>)}
      {[1024, 1020, 1016, 1012, 1008].map((p) => (
        <g key={p}>
          <line x1="70" x2="680" y1={y(p)} y2={y(p)} stroke={LINE} strokeDasharray="3 4" />
          <text x="64" y={y(p) + 4} textAnchor="end" fontSize="11" className="muted-fill">{p}</text>
        </g>
      ))}
      {lines.map((l, i) => (
        <g key={l.name}>
          <polyline points={l.pts.map(([h, p]) => `${x(h)},${y(p)}`).join(' ')} fill="none" stroke={l.color} strokeWidth="3" />
          <text x={i === 2 ? x(8) + 8 : x(12) - 4} y={i === 2 ? y(1006) + 4 : i === 1 ? y(1017) + 20 : y(1022) - 8} textAnchor={i === 2 ? 'start' : 'end'} fontSize="11.5" fontWeight="600">{l.name}</text>
        </g>
      ))}
      <text x="20" y="160" fontSize="12" transform="rotate(-90 20 160)">pressure (hPa)</text>
      <text x="375" y="312" textAnchor="middle" fontSize="11" className="muted-fill">The trend matters more than the number. An altimeter that “climbs” ~8 m while you sit still means pressure fell ~1 hPa.</text>
    </svg>
  )
}

// 4. Dew point and cloud base
export function DewPointCloudBase() {
  const x = (t: number) => 80 + t * 18
  const y = (km: number) => 290 - km * 110
  const T0 = 26, Td0 = 14
  const lcl = (T0 - Td0) * 0.125
  return (
    <svg className="diagram" viewBox="0 0 700 330" role="img" aria-label="Rising air cools at about 10 °C per km while its dew point falls about 2 °C per km; they meet at the cloud base">
      <defs><Arrow id="dp" /></defs>
      <line x1="80" y1="290" x2="680" y2="290" stroke={MUT} markerEnd="url(#dp)" />
      <line x1="80" y1="290" x2="80" y2="20" stroke={MUT} markerEnd="url(#dp)" />
      {[0, 5, 10, 15, 20, 25, 30].map((t) => <text key={t} x={x(t)} y="306" textAnchor="middle" fontSize="11" className="muted-fill">{t} °C</text>)}
      {[0, 1, 2].map((k) => <text key={k} x="72" y={y(k) + 4} textAnchor="end" fontSize="11" className="muted-fill">{k} km</text>)}
      <rect x="80" y={y(2.3)} width="600" height={y(lcl) - y(2.3)} fill={MUT} opacity="0.15" />
      <line x1={x(T0)} y1={y(0)} x2={x(T0 - 9.8 * lcl)} y2={y(lcl)} stroke={BAD} strokeWidth="3" />
      <line x1={x(T0 - 9.8 * lcl)} y1={y(lcl)} x2={x(T0 - 9.8 * lcl - 6 * 0.8)} y2={y(lcl + 0.8)} stroke={BAD} strokeWidth="3" strokeDasharray="6 4" />
      <line x1={x(Td0)} y1={y(0)} x2={x(Td0 - 2 * lcl)} y2={y(lcl)} stroke={INFO} strokeWidth="3" />
      <line x1="80" x2="680" y1={y(lcl)} y2={y(lcl)} stroke={A2} strokeDasharray="5 4" />
      <text x={x(T0) + 6} y={y(0.15)} fontSize="12" fontWeight="600">air {T0} °C: −9.8 °C/km</text>
      <text x={x(Td0) - 6} y={y(0.15)} textAnchor="end" fontSize="12" fontWeight="600">dew point {Td0} °C: −2 °C/km</text>
      <text x="670" y={y(lcl) - 8} textAnchor="end" fontSize="12" fontWeight="700">cloud base ≈ 125 m × ({T0} − {Td0}) = {Math.round(lcl * 1000)} m</text>
      <text x={x(T0 - 9.8 * lcl) + 8} y={y(lcl + 0.5)} fontSize="11" className="muted-fill">inside cloud: cools only ~6 °C/km (latent heat)</text>
    </svg>
  )
}

// 5. Thunderstorm lifecycle
export function ThunderstormLifecycle() {
  const stages = [
    { title: 'Cumulus stage', sub: 'updrafts only; towers grow', x: 20 },
    { title: 'Mature stage', sub: 'updraft + downdraft; lightning, hail, gusts', x: 270 },
    { title: 'Dissipating stage', sub: 'downdraft chokes the updraft; lightning can continue', x: 520 },
  ]
  return (
    <svg className="diagram" viewBox="0 0 760 340" role="img" aria-label="The three stages of a single-cell thunderstorm: cumulus, mature, dissipating">
      <defs><Arrow id="tl-u" color={BAD} /><Arrow id="tl-d" color={INFO} /></defs>
      {stages.map((s) => <rect key={s.title} x={s.x} y="20" width="220" height="270" rx="8" fill={SKY} />)}
      {/* cumulus */}
      <path d="M70,270 Q60,200 90,170 Q100,120 130,125 Q170,130 170,180 Q190,220 180,270 Z" fill="var(--panel)" stroke={MUT} />
      {[95, 130, 160].map((x) => <line key={x} x1={x} y1="285" x2={x} y2="160" stroke={BAD} strokeWidth="2.5" markerEnd="url(#tl-u)" />)}
      {/* mature */}
      <path d="M300,40 L500,40 L470,58 Q420,60 430,90 Q450,180 440,270 L330,270 Q320,180 350,90 Q360,60 320,58 Z" fill="var(--panel)" stroke={MUT} />
      <line x1="360" y1="285" x2="360" y2="70" stroke={BAD} strokeWidth="2.5" markerEnd="url(#tl-u)" />
      <line x1="410" y1="120" x2="410" y2="282" stroke={INFO} strokeWidth="2.5" markerEnd="url(#tl-d)" />
      <path d="M410,282 L470,284" stroke={INFO} strokeWidth="2" markerEnd="url(#tl-d)" />
      <text x="475" y="276" fontSize="10">gust front</text>
      {[0, 1, 2, 3].map((i) => <line key={i} x1={395 + i * 12} y1="272" x2={390 + i * 12} y2="288" stroke={INFO} />)}
      <path d="M380,150 l-10,20 h10 l-12,24" stroke={WARN} strokeWidth="3" fill="none" />
      {/* dissipating */}
      <path d="M550,50 L740,50 L720,70 Q670,80 660,110 Q650,170 640,230 L600,230 Q600,150 590,110 Q580,80 560,70 Z" fill="var(--panel)" stroke={MUT} opacity="0.8" />
      {[590, 620, 650].map((x) => <line key={x} x1={x} y1="130" x2={x} y2="282" stroke={INFO} strokeWidth="2" markerEnd="url(#tl-d)" />)}
      <path d="M700,70 l-6,12 h6 l-8,14" stroke={WARN} strokeWidth="2" fill="none" />
      <text x="700" y="110" textAnchor="middle" fontSize="10">anvil strikes</text>
      {stages.map((s) => (
        <g key={s.title + 't'}>
          <text x={s.x + 110} y="308" textAnchor="middle" fontSize="13" fontWeight="700">{s.title}</text>
          <text x={s.x + 110} y="325" textAnchor="middle" fontSize="10.5" className="muted-fill">{s.sub}</text>
        </g>
      ))}
      <text x="380" y="14" textAnchor="middle" fontSize="11" className="muted-fill">A single cell lives roughly 30–60 minutes; multicell lines and supercells last hours.</text>
    </svg>
  )
}

// 6. Flash-to-bang
export function FlashToBang() {
  const x = (km: number) => 60 + km * 40
  return (
    <svg className="diagram" viewBox="0 0 760 250" role="img" aria-label="Flash-to-bang: seconds between lightning and thunder times 343 metres per second gives distance; about 3 seconds per kilometre">
      <rect x={x(0)} y="40" width={x(16) - x(0)} height="90" fill={BAD} opacity="0.1" />
      <rect x={x(0)} y="40" width={x(10) - x(0)} height="90" fill={BAD} opacity="0.12" />
      <path d={`M${x(0) - 30},70 q10,-30 40,-20 q20,-20 40,0 q20,0 10,20 z`} fill={MUT} />
      <path d={`M${x(0)},72 l-6,14 h6 l-8,18`} stroke={WARN} strokeWidth="3" fill="none" />
      <line x1={x(0)} y1="140" x2={x(17)} y2="140" stroke={MUT} />
      {[0, 1, 2, 3, 5, 8, 10, 12, 16].map((k) => (
        <g key={k}>
          <line x1={x(k)} x2={x(k)} y1="136" y2="146" stroke={MUT} />
          <text x={x(k)} y="162" textAnchor="middle" fontSize="11">{k} km</text>
          <text x={x(k)} y="180" textAnchor="middle" fontSize="11" className="muted-fill">{Math.round((k * 1000) / 343)} s</text>
        </g>
      ))}
      <circle cx={x(4.1)} cy="118" r="6" fill={A} />
      <line x1={x(4.1)} y1="124" x2={x(4.1)} y2="134" stroke={A} strokeWidth="2" />
      <text x={x(4.1)} y="104" textAnchor="middle" fontSize="11" fontWeight="700">you: 12 s → 12 × 343 m ≈ 4.1 km</text>
      <text x={x(10) - 6} y="60" textAnchor="end" fontSize="11.5" fontWeight="700">≈ 10 km: “30-second” mark (old 30-30 rule)</text>
      <text x={x(13)} y="85" textAnchor="middle" fontSize="11.5" fontWeight="700">lightning can strike ~16 km (10 mi) from the storm</text>
      <text x="380" y="208" textAnchor="middle" fontSize="12" fontWeight="600">distance (m) = 343 × seconds · ≈ 3 s per km · ≈ 5 s per mile</text>
      <text x="380" y="230" textAnchor="middle" fontSize="11" className="muted-fill">If you can hear thunder, you are within striking distance. Wait 30 minutes after the last thunder before going back out.</text>
    </svg>
  )
}

// 7. Lightning injury mechanisms
export function LightningPaths() {
  const panels = ['Direct strike', 'Side flash', 'Ground current', 'Contact', 'Upward streamer']
  const person = (cx: number, base: number) => (
    <g>
      <circle cx={cx} cy={base - 44} r="6" fill={A} />
      <line x1={cx} y1={base - 38} x2={cx} y2={base - 16} stroke={A} strokeWidth="3" />
      <line x1={cx} y1={base - 16} x2={cx - 6} y2={base} stroke={A} strokeWidth="3" />
      <line x1={cx} y1={base - 16} x2={cx + 6} y2={base} stroke={A} strokeWidth="3" />
    </g>
  )
  return (
    <svg className="diagram" viewBox="0 0 760 240" role="img" aria-label="Five ways lightning injures people: direct strike, side flash, ground current, contact and upward streamers">
      {panels.map((p, i) => <g key={p}><rect x={10 + i * 150} y="10" width="140" height="190" rx="6" fill={SKY} /><rect x={10 + i * 150} y="170" width="140" height="30" fill={GROUND} opacity="0.6" /><text x={80 + i * 150} y="222" textAnchor="middle" fontSize="12" fontWeight="700">{p}</text></g>)}
      {/* direct */}
      <path d="M80,15 l-8,40 l10,0 l-8,65" stroke={WARN} strokeWidth="3" fill="none" />
      {person(76, 170)}
      {/* side flash */}
      <rect x="190" y="60" width="8" height="110" fill={GROUND} />
      <circle cx="194" cy="60" r="28" fill={OK} opacity="0.6" />
      <path d="M194,15 l-4,30" stroke={WARN} strokeWidth="3" />
      <path d="M198,100 l14,10 l-6,4 l14,10" stroke={WARN} strokeWidth="2.5" fill="none" />
      {person(232, 170)}
      {/* ground current */}
      <path d="M352,15 l-6,40 l8,0 l-6,115" stroke={WARN} strokeWidth="3" fill="none" />
      {[0, 1, 2].map((r) => <ellipse key={r} cx="348" cy="180" rx={14 + r * 14} ry={5 + r * 4} fill="none" stroke={WARN} strokeDasharray="3 3" />)}
      {person(398, 170)}
      <text x="380" y="195" textAnchor="middle" fontSize="9">step voltage</text>
      {/* contact */}
      <line x1="470" y1="110" x2="580" y2="110" stroke={MUT} strokeWidth="2" />
      {[470, 510, 550, 580].map((x) => <line key={x} x1={x} y1="110" x2={x} y2="170" stroke={GROUND} strokeWidth="3" />)}
      <path d="M475,15 l-6,40 l8,0 l-6,55" stroke={WARN} strokeWidth="3" fill="none" />
      {person(560, 170)}
      <text x="520" y="100" textAnchor="middle" fontSize="9">wire fence</text>
      {/* streamer */}
      <path d="M680,15 l-8,30 l8,0 l-6,30" stroke={WARN} strokeWidth="3" fill="none" />
      <path d="M676,120 l4,-14 l-4,-6 l6,-16" stroke={WARN} strokeWidth="1.5" fill="none" strokeDasharray="2 2" />
      {person(676, 170)}
    </svg>
  )
}

// 8. Catchment and flash flood
export function CatchmentFlashFlood() {
  return (
    <svg className="diagram" viewBox="0 0 760 360" role="img" aria-label="A storm over the upper catchment sends a flash flood down a canyon where the sky is clear; inset hydrograph shows the delayed sharp rise">
      <path d="M40,60 Q200,10 380,40 Q520,70 480,190 Q440,300 330,330 Q260,300 200,240 Q60,190 40,60 Z" fill={OK} opacity="0.15" stroke={OK} strokeDasharray="6 4" strokeWidth="2" />
      <text x="60" y="235" fontSize="12" fontWeight="700">catchment: bounded by ridgelines</text>
      {[
        'M90,90 Q180,140 250,180', 'M200,50 Q240,120 260,180', 'M360,60 Q320,120 270,185', 'M440,120 Q360,170 280,200',
      ].map((d) => <path key={d} d={d} stroke={INFO} strokeWidth="2" fill="none" />)}
      <path d="M265,190 Q300,250 330,330 L352,350" stroke={INFO} strokeWidth="5" fill="none" /><path d="M344,352 L362,358 L356,340 Z" fill={INFO} />
      <path d="M130,30 q20,-30 60,-15 q30,-25 60,0 q30,5 15,30 z" fill={MUT} />
      {Array.from({ length: 8 }, (_, i) => <line key={i} x1={150 + i * 12} y1="48" x2={144 + i * 12} y2="80" stroke={INFO} strokeWidth="2" />)}
      <text x="190" y="100" textAnchor="middle" fontSize="11" fontWeight="600">storm 15 km away</text>
      <circle cx="560" cy="60" r="16" fill={WARN} opacity="0.8" />
      <text x="560" y="96" textAnchor="middle" fontSize="11">sunny here</text>
      <circle cx="322" cy="300" r="5" fill={A2} />
      <circle cx="334" cy="306" r="5" fill={A2} />
      <text x="345" y="290" fontSize="11" fontWeight="700">hikers in a slot canyon</text>
      <text x="360" y="215" fontSize="10.5" className="muted-fill">steep bare rock, thin soil,</text>
      <text x="360" y="229" fontSize="10.5" className="muted-fill">burn scars → fast runoff</text>
      {/* hydrograph */}
      <g transform="translate(520,160)">
        <rect x="0" y="0" width="230" height="170" rx="6" fill={P2} stroke={LINE} />
        <text x="115" y="18" textAnchor="middle" fontSize="11" fontWeight="700">flow at the canyon</text>
        <line x1="25" y1="140" x2="220" y2="140" stroke={MUT} />
        <line x1="25" y1="140" x2="25" y2="30" stroke={MUT} />
        <rect x="35" y="30" width="30" height="20" fill={INFO} opacity="0.5" />
        <text x="50" y="62" textAnchor="middle" fontSize="9">rain</text>
        <path d="M25,135 L110,134 L125,45 Q140,60 160,100 Q190,128 220,132" fill="none" stroke={BAD} strokeWidth="2.5" />
        <text x="130" y="40" fontSize="9">wall of water</text>
        <text x="120" y="158" textAnchor="middle" fontSize="9">time → (minutes to hours of lag)</text>
      </g>
    </svg>
  )
}

// 9. Force of moving water vs velocity
export function WaterForceChart() {
  const A_ = 0.15, Cd = 1, rho = 1000
  const F = (v: number) => 0.5 * rho * Cd * A_ * v * v
  const x = (v: number) => 70 + v * 150
  const y = (f: number) => 280 - f * 0.3
  const pts = Array.from({ length: 41 }, (_, i) => { const v = i * 0.1; return `${x(v)},${y(F(v))}` }).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 720 330" role="img" aria-label="Drag force on a wader's legs grows with the square of water velocity; above about 2 metres per second it exceeds the grip of feet on a slippery bed">
      <defs><Arrow id="wf" /></defs>
      <rect x="70" y={y(300)} width="600" height={y(150) - y(300)} fill={WARN} opacity="0.15" />
      <text x="690" y={y(225) + 4} textAnchor="end" fontSize="11" fontWeight="600">foot grip on slippery rock ≈ 150–300 N</text>
      <line x1="70" y1="280" x2="690" y2="280" stroke={MUT} markerEnd="url(#wf)" />
      <line x1="70" y1="280" x2="70" y2="20" stroke={MUT} markerEnd="url(#wf)" />
      {[0, 1, 2, 3, 4].map((v) => <text key={v} x={x(v)} y="298" textAnchor="middle" fontSize="11" className="muted-fill">{v} m/s</text>)}
      {[0, 200, 400, 600, 800].map((f) => <text key={f} x="62" y={y(f) + 4} textAnchor="end" fontSize="11" className="muted-fill">{f} N</text>)}
      <polyline points={pts} fill="none" stroke={BAD} strokeWidth="3" />
      {[1, 2, 3].map((v) => (
        <g key={v}>
          <circle cx={x(v)} cy={y(F(v))} r="5" fill={BAD} />
          <text x={x(v) - 8} y={y(F(v)) - 10} textAnchor="end" fontSize="11.5" fontWeight="700">{v} m/s → {Math.round(F(v))} N</text>
        </g>
      ))}
      <text x="380" y="40" textAnchor="middle" fontSize="12" fontWeight="600">F = ½ ρ C_d A v² · knee-deep, both legs: A ≈ 0.15 m², C_d ≈ 1</text>
      <text x="380" y="320" textAnchor="middle" fontSize="11" className="muted-fill">Double the speed → four times the force. Deeper water adds area and buoyancy, so it gets worse faster still.</text>
    </svg>
  )
}

// 10. Wildfire escape planning
export function WildfireEscape() {
  return (
    <svg className="diagram" viewBox="0 0 760 360" role="img" aria-label="Wildfire on a slope runs uphill; plan escape routes across or down to a safety zone and avoid chimneys and saddles">
      <defs><Arrow id="we" color={BAD} /><Arrow id="we2" color={OK} /></defs>
      <rect x="0" y="0" width="760" height="360" fill={SKY} />
      <path d="M0,330 L300,120 L380,160 L470,70 L760,300 L760,360 L0,360 Z" fill={GROUND} opacity="0.55" />
      <path d="M370,158 L385,150 L400,340 L360,340 Z" fill={GROUND} opacity="0.4" />
      <text x="395" y="210" fontSize="11" fontWeight="600">chimney / gully</text>
      <text x="380" y="150" textAnchor="middle" fontSize="11" fontWeight="600">saddle</text>
      {[0, 1, 2, 3, 4, 5].map((i) => <path key={i} d={`M${60 + i * 28},${320 - i * 18} q6,-22 12,-4 q4,-16 10,4 z`} fill={BAD} opacity="0.85" />)}
      <line x1="120" y1="270" x2="260" y2="160" stroke={BAD} strokeWidth="4" markerEnd="url(#we)" />
      <text x="150" y="250" fontSize="12" fontWeight="700" transform="rotate(-36 150 250)">fire runs uphill</text>
      <text x="20" y="352" fontSize="11" fontWeight="600">fastest in the afternoon, and through chimneys and saddles</text>
      <circle cx="300" cy="126" r="7" fill={A} />
      <text x="318" y="108" fontSize="11" fontWeight="700">you</text>
      <path d="M300,130 Q420,120 560,200 L640,250" stroke={OK} strokeWidth="3" strokeDasharray="8 5" fill="none" markerEnd="url(#we2)" />
      <text x="520" y="185" fontSize="11.5" fontWeight="700">escape route (pre-scouted, timed)</text>
      <ellipse cx="660" cy="270" rx="70" ry="22" fill={OK} opacity="0.35" stroke={OK} />
      <text x="660" y="275" textAnchor="middle" fontSize="11" fontWeight="700">safety zone</text>
      <text x="660" y="310" textAnchor="middle" fontSize="10.5" className="muted-fill">already burned, rock, water, bare ground;</text>
      <text x="660" y="324" textAnchor="middle" fontSize="10.5" className="muted-fill">radius ≥ 4 × flame height (NWCG)</text>
      <g transform="translate(20,20)">
        <rect x="0" y="0" width="210" height="96" rx="6" fill="var(--panel)" stroke={LINE} />
        <text x="10" y="20" fontSize="12" fontWeight="700">LCES</text>
        <text x="10" y="38" fontSize="11">Lookouts — someone watches the fire</text>
        <text x="10" y="54" fontSize="11">Communications — everyone warned</text>
        <text x="10" y="70" fontSize="11">Escape routes — two, known, timed</text>
        <text x="10" y="86" fontSize="11">Safety zones — big enough, reachable</text>
      </g>
    </svg>
  )
}

// 11. Slope angle and avalanches
export function SlopeAngleChart() {
  const x = (deg: number) => 60 + (deg - 15) * 11
  const f = (deg: number) => Math.exp(-Math.pow((deg - 38) / 5.5, 2))
  const pts = Array.from({ length: 46 }, (_, i) => { const d = 15 + i; return `${x(d)},${260 - f(d) * 190}` }).join(' ')
  return (
    <svg className="diagram" viewBox="0 0 760 340" role="img" aria-label="Schematic of slab avalanche starting-zone frequency by slope angle, peaking near 38 degrees within the 30 to 45 degree band">
      <defs><Arrow id="sa" /></defs>
      <rect x={x(30)} y="40" width={x(45) - x(30)} height="220" fill={BAD} opacity="0.12" />
      <text x={(x(30) + x(45)) / 2} y="56" textAnchor="middle" fontSize="12" fontWeight="700">30°–45°: most slab avalanches start here</text>
      <line x1="60" y1="260" x2="580" y2="260" stroke={MUT} markerEnd="url(#sa)" />
      <line x1="60" y1="260" x2="60" y2="30" stroke={MUT} markerEnd="url(#sa)" />
      {[20, 25, 30, 35, 40, 45, 50, 55].map((d) => <text key={d} x={x(d)} y="278" textAnchor="middle" fontSize="11" className="muted-fill">{d}°</text>)}
      <polyline points={pts} fill="none" stroke={BAD} strokeWidth="3" />
      <text x={x(41)} y="96" fontSize="11">peak ≈ 35–40°</text>
      <text x="20" y="150" fontSize="11" transform="rotate(-90 20 150)">starting zones (schematic)</text>
      <text x="320" y="300" textAnchor="middle" fontSize="11" className="muted-fill">Below ~30° slabs rarely release — but you can still be hit by avalanches from steeper slopes above (runout zones).</text>
      <g transform="translate(600,40)">
        <rect x="0" y="0" width="150" height="220" rx="6" fill={P2} stroke={LINE} />
        <text x="75" y="18" textAnchor="middle" fontSize="11" fontWeight="700">slope from a map</text>
        <path d="M20,190 L130,190 L130,80 Z" fill={GROUND} opacity="0.5" />
        <text x="75" y="206" textAnchor="middle" fontSize="10">run (horizontal)</text>
        <text x="138" y="140" fontSize="10" transform="rotate(90 138 140)">rise</text>
        <text x="50" y="178" fontSize="11">θ</text>
        <text x="75" y="48" textAnchor="middle" fontSize="10.5">tan θ = rise ÷ run</text>
        <text x="75" y="64" textAnchor="middle" fontSize="10">0.58 → 30° · 1.0 → 45°</text>
      </g>
    </svg>
  )
}

// 12. Wind chill curves (NWS/ECCC 2001 index)
export function WindChillCurve() {
  const wc = (t: number, v: number) => 13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)
  const x = (v: number) => 70 + (v - 5) * 10
  const y = (c: number) => 40 + (5 - c) * 5.5
  const temps = [0, -10, -20]
  return (
    <svg className="diagram" viewBox="0 0 700 360" role="img" aria-label="Wind chill temperature versus wind speed for air temperatures of 0, minus 10 and minus 20 degrees Celsius">
      <defs><Arrow id="wc" /></defs>
      <rect x="70" y={y(-28)} width="560" height={y(-45) - y(-28)} fill={BAD} opacity="0.13" />
      <text x="620" y={y(-30)} textAnchor="end" fontSize="11" fontWeight="600">≤ −28 °C: exposed skin can freeze in ~30 min or less</text>
      <line x1="70" y1={y(-45)} x2="640" y2={y(-45)} stroke={MUT} markerEnd="url(#wc)" />
      <line x1="70" y1={y(-45)} x2="70" y2="30" stroke={MUT} markerEnd="url(#wc)" />
      {[10, 20, 30, 40, 50, 60].map((v) => <text key={v} x={x(v)} y={y(-45) + 16} textAnchor="middle" fontSize="11" className="muted-fill">{v} km/h</text>)}
      {[0, -10, -20, -30, -40].map((c) => <g key={c}><line x1="70" x2="630" y1={y(c)} y2={y(c)} stroke={LINE} strokeDasharray="3 4" /><text x="62" y={y(c) + 4} textAnchor="end" fontSize="11" className="muted-fill">{c} °C</text></g>)}
      {temps.map((t, i) => {
        const pts = Array.from({ length: 56 }, (_, k) => { const v = 5 + k; return `${x(v)},${y(wc(t, v))}` }).join(' ')
        return (
          <g key={t}>
            <polyline points={pts} fill="none" stroke={[INFO, A, BAD][i]} strokeWidth="3" />
            <text x={x(60) + 4} y={y(wc(t, 60)) + 4} fontSize="11" fontWeight="700">air {t} °C</text>
          </g>
        )
      })}
      <circle cx={x(30)} cy={y(wc(-10, 30))} r="5" fill={A} />
      <text x={x(30) + 8} y={y(wc(-10, 30)) - 8} fontSize="11">−10 °C, 30 km/h → {Math.round(wc(-10, 30))} °C</text>
      <text x="350" y="352" textAnchor="middle" fontSize="11" className="muted-fill">Wind chill describes heat loss from exposed skin; it does not make objects colder than the air.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'cloud-altitudes': CloudAltitudes,
  'front-cross-section': FrontCrossSection,
  'pressure-tendency': PressureTendency,
  'dew-point-cloud-base': DewPointCloudBase,
  'thunderstorm-lifecycle': ThunderstormLifecycle,
  'flash-to-bang': FlashToBang,
  'lightning-injury-paths': LightningPaths,
  'catchment-flash-flood': CatchmentFlashFlood,
  'water-force-chart': WaterForceChart,
  'wildfire-escape': WildfireEscape,
  'slope-angle-chart': SlopeAngleChart,
  'wind-chill-curve': WindChillCurve,
}
