import type { ComponentType, ReactNode } from 'react'

// Stage 5 (Shelter) SVG diagrams. Colors only via CSS variables so they work in light and dark mode.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const TXT = 'var(--text)'
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

function Person({ x, y, w = 90 }: { x: number; y: number; w?: number }) {
  // A person lying on their side, seen from the end/side: a simple rounded body and head.
  return (
    <g>
      <rect x={x} y={y - 14} width={w} height="18" rx="9" fill={A2} opacity="0.85" />
      <circle cx={x + w + 10} cy={y - 7} r="10" fill={A2} opacity="0.85" />
    </g>
  )
}

export function ShelterHeatPaths() {
  return (
    <svg className="diagram" viewBox="0 0 720 330" role="img" aria-label="Cross-section of a person in a tarp shelter with the four heat-loss paths and the shelter control for each">
      <defs>
        <Arrow id="hp-r" color={A2} />
        <Arrow id="hp-c" color={INFO} />
        <Arrow id="hp-k" color={GROUND} />
        <Arrow id="hp-e" color={OK} />
      </defs>
      <rect width="720" height="250" fill={SKY} opacity="0.4" />
      <rect y="250" width="720" height="80" fill={GROUND} opacity="0.55" />
      <path d="M160,250 L360,70 L560,250" fill="none" stroke={A} strokeWidth="5" />
      <path d="M160,250 L360,70 L560,250 Z" fill={A} opacity="0.08" />
      <rect x="250" y="232" width="220" height="18" fill={A2} opacity="0.35" />
      <text x="360" y="245" textAnchor="middle" fontSize="11">bed: 20–30 cm loose → 5–8 cm compressed</text>
      <Person x={290} y={226} w={120} />
      {/* radiation */}
      <path d="M330,200 L300,40" stroke={A2} strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#hp-r)" />
      <text x="190" y="30" fontSize="12" fontWeight="700" style={{ fill: 'var(--accent-2)' }}>Radiation → cold clear sky</text>
      <text x="190" y="46" fontSize="11" className="muted-fill">control: roof or canopy overhead</text>
      {/* convection */}
      {[0, 1, 2].map((k) => <path key={k} d={`M20,${150 + k * 22} L150,${170 + k * 22}`} stroke={INFO} strokeWidth="2.5" strokeDasharray="8 4" markerEnd="url(#hp-c)" />)}
      <text x="12" y="130" fontSize="12" fontWeight="700" style={{ fill: 'var(--info)' }}>Convection: wind</text>
      <text x="12" y="144" fontSize="11" className="muted-fill">control: walls, lee site, low pitch</text>
      {/* conduction */}
      <path d="M360,258 L360,305" stroke={GROUND} strokeWidth="4" markerEnd="url(#hp-k)" />
      <text x="372" y="300" fontSize="12" fontWeight="700">Conduction → ground (often the biggest drain)</text>
      <text x="372" y="316" fontSize="11" className="muted-fill">control: thick, dry bed; pad; raised bed in the tropics</text>
      {/* evaporation */}
      <path d="M420,205 C470,170 500,160 540,120" stroke={OK} strokeWidth="2.5" fill="none" markerEnd="url(#hp-e)" />
      <text x="548" y="110" fontSize="12" fontWeight="700" style={{ fill: 'var(--ok)' }}>Evaporation</text>
      <text x="548" y="126" fontSize="11" className="muted-fill">wet clothes, sweat, breath</text>
      <text x="548" y="140" fontSize="11" className="muted-fill">control: roof, drainage, don’t sweat</text>
      {/* rain */}
      {[0, 1, 2, 3, 4, 5].map((k) => <line key={k} x1={400 + k * 30} y1={20 + (k % 2) * 10} x2={392 + k * 30} y2={44 + (k % 2) * 10} stroke={INFO} strokeWidth="2" />)}
    </svg>
  )
}

export function BedRValues() {
  const rows = [
    { t: 'Bare damp soil (contact only)', r: 0.1, note: 'clothing compressed flat' },
    { t: 'Pack + rope + spare clothes', r: 0.12, note: 'covers part of the body' },
    { t: '1 cm closed-cell foam pad', r: 0.29, note: 'k ≈ 0.035' },
    { t: '10 cm dry leaves (→ 2.5 cm)', r: 0.5, note: 'k ≈ 0.05' },
    { t: '30 cm dry leaves (→ 7.5 cm)', r: 1.5, note: 'k ≈ 0.05' },
    { t: '30 cm leaves, soaked', r: 0.38, note: 'k ×4' },
    { t: '20 cm conifer boughs (→ 7 cm)', r: 1.17, note: 'k ≈ 0.06' },
    { t: '30 cm settled snow', r: 2.5, note: 'k ≈ 0.12 — but it is at ≤ 0 °C' },
  ]
  const max = 2.6
  return (
    <svg className="diagram" viewBox="0 0 720 330" role="img" aria-label="Bar chart of thermal resistance of common ground insulation layers">
      <text x="10" y="20" fontSize="14" fontWeight="700">Thermal resistance R = d / k of what you lie on (m²·K/W)</text>
      <text x="10" y="38" fontSize="11" className="muted-fill">Heat flow through the bed ∝ 1/R. Thickness is what is left after your body compresses it.</text>
      {rows.map((row, i) => {
        const y = 58 + i * 33
        const w = (row.r / max) * 380
        const col = row.r < 0.3 ? BAD : row.r < 1 ? A2 : OK
        return (
          <g key={row.t}>
            <text x="10" y={y + 15} fontSize="12">{row.t}</text>
            <rect x="240" y={y} width={w} height="22" rx="4" fill={col} opacity="0.8" />
            <text x={248 + w} y={y + 15} fontSize="12" fontWeight="700">{row.r.toFixed(2)}</text>
            <text x="690" y={y + 15} fontSize="10" textAnchor="end" className="muted-fill">{row.note}</text>
          </g>
        )
      })}
    </svg>
  )
}

export function VolumeWarmth() {
  return (
    <svg className="diagram" viewBox="0 0 720 280" role="img" aria-label="Small enclosed shelter versus large open shelter: the same body heat warms the small one many degrees and the large one barely at all">
      <text x="180" y="24" textAnchor="middle" fontSize="14" fontWeight="700">Small, enclosed: UA ≈ 3–5 W/K</text>
      <text x="540" y="24" textAnchor="middle" fontSize="14" fontWeight="700">Big, open-ended: UA ≈ 25–60 W/K</text>
      <rect y="210" width="720" height="70" fill={GROUND} opacity="0.5" />
      <path d="M70,210 Q180,70 290,210 Z" fill={A} opacity="0.25" stroke={A} strokeWidth="4" />
      <Person x={130} y={204} w={80} />
      <text x="180" y="250" textAnchor="middle" fontSize="12">60 W into the air ÷ 4 W/K</text>
      <text x="180" y="268" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: 'var(--ok)' }}>ΔT ≈ +15 °C</text>
      <path d="M400,210 L540,60 L680,210" fill="none" stroke={A} strokeWidth="4" />
      <Person x={500} y={204} w={80} />
      {[0, 1, 2].map((k) => <path key={k} d={`M370,${120 + k * 30} C470,${110 + k * 30} 600,${130 + k * 30} 710,${120 + k * 30}`} fill="none" stroke={INFO} strokeWidth="2" strokeDasharray="7 5" />)}
      <text x="540" y="250" textAnchor="middle" fontSize="12">60 W ÷ 40 W/K (air blows through)</text>
      <text x="540" y="268" textAnchor="middle" fontSize="13" fontWeight="700" style={{ fill: 'var(--bad)' }}>ΔT ≈ +1.5 °C</text>
    </svg>
  )
}

export function ColdAirDrainage() {
  return (
    <svg className="diagram" viewBox="0 0 720 300" role="img" aria-label="Valley cross-section on a calm clear night: cold air drains downslope and pools in the valley floor, leaving a warmer belt part-way up the slopes">
      <defs><Arrow id="ca" color={INFO} /></defs>
      <rect width="720" height="300" fill={SKY} opacity="0.35" />
      <path d="M0,40 L200,150 L320,250 L400,255 L520,160 L720,50 L720,300 L0,300 Z" fill={GROUND} opacity="0.7" />
      <path d="M250,200 L320,248 L400,252 L470,200 Q360,215 250,200 Z" fill={INFO} opacity="0.35" />
      {[[40, 70, 170, 138], [640, 80, 540, 150], [150, 125, 250, 185], [600, 105, 500, 170]].map(([x1, y1, x2, y2], i) => <path key={i} d={`M${x1},${y1} L${x2},${y2}`} stroke={INFO} strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#ca)" />)}
      <text x="360" y="238" textAnchor="middle" fontSize="12" fontWeight="700">cold pool: −4 °C, frost, fog</text>
      <rect x="150" y="100" width="120" height="16" fill={OK} opacity="0.25" />
      <text x="120" y="96" fontSize="12" fontWeight="700" style={{ fill: 'var(--ok)' }}>thermal belt: +1 °C</text>
      <text x="20" y="30" fontSize="12">ridge: +0 °C but windy</text>
      <text x="710" y="30" fontSize="12" textAnchor="end">clear sky → strong radiative cooling of the ground</text>
      <text x="560" y="140" fontSize="11" className="muted-fill">dense cold air flows downhill</text>
      <text x="360" y="292" textAnchor="middle" fontSize="11" className="muted-fill">Illustrative values for a calm, clear night. Wind or cloud mixes the air and removes most of the difference.</text>
    </svg>
  )
}

export function SiteHazards() {
  return (
    <svg className="diagram" viewBox="0 0 720 320" role="img" aria-label="Terrain hazards that rule out a shelter site: rockfall runout, avalanche slopes, flood zones, widowmakers and insect nests">
      <rect width="720" height="320" fill={SKY} opacity="0.35" />
      <path d="M0,30 L90,40 L110,160 L260,230 L420,260 L520,262 L600,240 L720,200 L720,320 L0,320 Z" fill={GROUND} opacity="0.7" />
      <path d="M90,40 L110,160" stroke={TXT} strokeWidth="3" />
      <path d="M110,160 L230,222 L110,222 Z" fill={BAD} opacity="0.2" />
      {[[130, 190], [160, 205], [190, 214], [145, 210]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r="4" fill={MUT} />)}
      <text x="120" y="150" fontSize="12" fontWeight="700" style={{ fill: 'var(--bad)' }}>rockfall runout: fresh chips, no lichen</text>
      <path d="M430,262 Q470,272 520,264" fill="none" stroke={INFO} strokeWidth="6" />
      <path d="M380,248 L600,248" stroke={INFO} strokeDasharray="5 4" />
      <text x="400" y="284" fontSize="11" fontWeight="700" style={{ fill: 'var(--info)' }}>high-water line: debris in branches, silt</text>
      <line x1="660" y1="215" x2="666" y2="120" stroke={TXT} strokeWidth="5" />
      <line x1="664" y1="150" x2="690" y2="130" stroke={TXT} strokeWidth="3" />
      <text x="712" y="110" fontSize="12" fontWeight="700" textAnchor="end" style={{ fill: 'var(--bad)' }}>widowmaker: dead tree/limbs</text>
      <ellipse cx="320" cy="244" rx="14" ry="7" fill={A2} />
      <text x="275" y="285" fontSize="12">ant / wasp nest, game trail</text>
      <circle cx="600" cy="224" r="11" fill={OK} />
      <text x="600" y="228" textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: '#fff' }}>✓</text>
      <text x="712" y="300" fontSize="12" fontWeight="700" textAnchor="end" style={{ fill: 'var(--ok)' }}>above flood line, living trees, no slope above</text>
      <text x="10" y="20" fontSize="12">Look UP (limbs, cliffs, cornices), UPSTREAM (flood), DOWN (nests, drainage), and AROUND (wind).</text>
    </svg>
  )
}

export function TarpPitches() {
  const panel = (x: number, title: string, sub: string, body: ReactNode) => (
    <g>
      <rect x={x} y="10" width="170" height="220" rx="8" fill={P2} />
      <text x={x + 85} y="32" textAnchor="middle" fontSize="13" fontWeight="700">{title}</text>
      <text x={x + 85} y="214" textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>
      {body}
    </g>
  )
  const wind = (x: number, y: number) => [0, 1].map((k) => <path key={k} d={`M${x},${y + k * 14} l30,0`} stroke={INFO} strokeWidth="2" strokeDasharray="6 3" markerEnd="url(#tp-w)" />)
  return (
    <svg className="diagram" viewBox="0 0 720 240" role="img" aria-label="Four tarp pitches: A-frame, lean-to, diamond and wedge, each shown relative to the wind">
      <defs><Arrow id="tp-w" color={INFO} /></defs>
      {panel(5, 'A-frame', 'rain from both sides; ends open', <g>
        <line x1="30" y1="80" x2="150" y2="80" stroke={MUT} />
        <path d="M90,80 L40,180 L140,180 Z" fill={A} opacity="0.25" stroke={A} strokeWidth="3" />
        {wind(20, 120)}
      </g>)}
      {panel(185, 'Lean-to', 'back to wind; open to a fire', <g>
        <line x1="230" y1="80" x2="330" y2="80" stroke={MUT} />
        <path d="M300,80 L220,180" stroke={A} strokeWidth="4" />
        {wind(195, 130)}
        <path d="M320,175 q6,-18 12,0 q-6,-8 -12,0" fill={A2} />
      </g>)}
      {panel(365, 'Diamond', 'one corner staked into the wind', <g>
        <path d="M400,180 L450,70 L520,120 L470,190 Z" fill={A} opacity="0.25" stroke={A} strokeWidth="3" />
        <line x1="450" y1="70" x2="450" y2="180" stroke={TXT} strokeWidth="2" />
        {wind(372, 160)}
      </g>)}
      {panel(545, 'Wedge', 'low closed end into the wind', <g>
        <path d="M570,180 L690,100 L690,180 Z" fill={A} opacity="0.25" stroke={A} strokeWidth="3" />
        <line x1="690" y1="100" x2="690" y2="180" stroke={TXT} strokeWidth="2" />
        {wind(548, 150)}
      </g>)}
    </svg>
  )
}

export function RidgelineTension() {
  return (
    <svg className="diagram" viewBox="0 0 720 260" role="img" aria-label="Ridgeline geometry: a load P at the middle of a span L with sag s creates tension of about P times L over 4 s">
      <defs><Arrow id="rt" color={BAD} /><Arrow id="rt2" color={MUT} /></defs>
      <rect x="40" y="40" width="20" height="200" fill={GROUND} />
      <rect x="660" y="40" width="20" height="200" fill={GROUND} />
      <path d="M60,70 L360,120 L660,70" fill="none" stroke={A} strokeWidth="3" />
      <line x1="60" y1="70" x2="660" y2="70" stroke={LINE} strokeDasharray="5 5" />
      <path d="M360,120 L360,190" stroke={BAD} strokeWidth="3" markerEnd="url(#rt)" />
      <text x="370" y="180" fontSize="13" fontWeight="700" style={{ fill: 'var(--bad)' }}>P (load: tarp, wind, snow, rain)</text>
      <path d="M360,70 L360,118" stroke={MUT} markerStart="url(#rt2)" markerEnd="url(#rt2)" />
      <text x="330" y="100" fontSize="12" textAnchor="end">sag s</text>
      <path d="M150,85 L90,75" stroke={BAD} strokeWidth="3" markerEnd="url(#rt)" />
      <text x="110" y="110" fontSize="13" fontWeight="700" style={{ fill: 'var(--bad)' }}>T</text>
      <path d="M60,225 L660,225" stroke={MUT} markerStart="url(#rt2)" markerEnd="url(#rt2)" />
      <text x="360" y="245" textAnchor="middle" fontSize="12">span L</text>
      <text x="470" y="30" fontSize="14" fontWeight="700">T ≈ P·L / (4·s)</text>
      <text x="470" y="48" fontSize="11" className="muted-fill">halve the sag → double the tension</text>
    </svg>
  )
}

export function DebrisHut() {
  return (
    <svg className="diagram" viewBox="0 0 720 280" role="img" aria-label="Debris hut: ridgepole on a support, ribs, a thick pile of leaves over the frame, an insulated bed inside and a door plug">
      <rect y="230" width="720" height="50" fill={GROUND} opacity="0.55" />
      <path d="M90,230 Q240,-10 520,230 Z" fill={A2} opacity="0.25" stroke={A2} strokeWidth="2" strokeDasharray="4 3" />
      <path d="M160,230 Q260,70 450,230 Z" fill={P2} stroke={TXT} strokeWidth="1" />
      <line x1="170" y1="120" x2="560" y2="228" stroke={TXT} strokeWidth="6" />
      <line x1="170" y1="120" x2="160" y2="230" stroke={TXT} strokeWidth="5" />
      {[220, 280, 340, 400].map((x) => <line key={x} x1={x} y1={120 + (x - 170) * 0.28} x2={x - 30} y2="230" stroke={MUT} strokeWidth="2" />)}
      <rect x="185" y="212" width="250" height="18" fill={A2} opacity="0.5" />
      <Person x={215} y={206} w={170} />
      <text x="240" y="40" fontSize="12" fontWeight="700">60–90 cm of leaves over the frame (arm-deep)</text>
      <text x="240" y="56" fontSize="11" className="muted-fill">a layer of sticks on top stops wind scattering it</text>
      <text x="470" y="160" fontSize="12">ridgepole (sound, dead-and-down)</text>
      <text x="200" y="258" fontSize="12">bed: 30 cm+ of dry debris inside</text>
      <rect x="120" y="190" width="30" height="40" fill={A2} opacity="0.6" />
      <text x="20" y="180" fontSize="12">door plug</text>
      <text x="20" y="196" fontSize="11" className="muted-fill">(pack or a</text>
      <text x="20" y="210" fontSize="11" className="muted-fill">leaf bundle)</text>
      <text x="480" y="260" fontSize="11" className="muted-fill">inside only just wider than your body</text>
    </svg>
  )
}

export function ReflectorLeanTo() {
  return (
    <svg className="diagram" viewBox="0 0 720 260" role="img" aria-label="Lean-to with a long fire in front and a log reflector wall behind the fire, sending radiant heat into the shelter">
      <defs><Arrow id="rf" color={A2} /></defs>
      <rect y="210" width="720" height="50" fill={GROUND} opacity="0.55" />
      <path d="M80,210 L230,70" stroke={A} strokeWidth="8" />
      <line x1="230" y1="70" x2="230" y2="210" stroke={TXT} strokeWidth="4" />
      <Person x={110} y={204} w={90} />
      <path d="M330,210 q10,-45 20,-10 q10,-40 20,0 q10,-30 20,5 q6,-20 10,5" fill={A2} opacity="0.85" />
      <text x="320" y="232" fontSize="12">long fire, parallel to the shelter</text>
      {[0, 1, 2, 3].map((k) => <rect key={k} x="480" y={130 + k * 20} width="16" height="20" fill={GROUND} stroke={TXT} />)}
      <text x="505" y="130" fontSize="12">log reflector wall</text>
      {[[340, 170, 230, 170], [360, 160, 240, 130], [470, 160, 400, 150], [470, 190, 400, 190]].map(([x1, y1, x2, y2], i) => <path key={i} d={`M${x1},${y1} L${x2},${y2}`} stroke={A2} strokeWidth="2" strokeDasharray="6 4" markerEnd="url(#rf)" />)}
      <text x="40" y="40" fontSize="12" fontWeight="700">Radiant heat comes from both the fire and the reflector.</text>
      <text x="40" y="58" fontSize="11" className="muted-fill">About 1 m between fire and bed; clear flammables; check fire rules first.</text>
    </svg>
  )
}

export function QuinzheeSection() {
  return (
    <svg className="diagram" viewBox="0 0 720 300" role="img" aria-label="Quinzhee cross-section: even 30 cm walls marked by depth sticks, a sleeping platform above the entrance level, a cold sink, and a ventilation hole">
      <defs><Arrow id="qz" color={INFO} /></defs>
      <rect width="720" height="300" fill={SKY} opacity="0.3" />
      <rect y="230" width="720" height="70" fill="var(--panel)" stroke={LINE} />
      <path d="M150,230 Q360,-20 570,230 Z" fill="var(--panel)" stroke={TXT} strokeWidth="2" />
      <path d="M200,230 Q360,40 520,230 Z" fill={P2} stroke={MUT} />
      {[[250, 110, 268, 130], [360, 50, 360, 76], [470, 110, 452, 130], [200, 180, 226, 186]].map(([x1, y1, x2, y2], i) => <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={A2} strokeWidth="4" />)}
      <text x="540" y="96" fontSize="12" style={{ fill: 'var(--accent-2)' }}>30 cm depth sticks:</text>
      <text x="540" y="112" fontSize="12" style={{ fill: 'var(--accent-2)' }}>stop when you reach one</text>
      <rect x="290" y="170" width="200" height="30" fill={A2} opacity="0.35" />
      <Person x={310} y={168} w={140} />
      <text x="300" y="215" fontSize="11">sleeping bench, raised above the entrance</text>
      <path d="M150,262 L240,262 L240,230" fill="none" stroke={TXT} strokeWidth="2" />
      <text x="40" y="258" fontSize="12">entrance low:</text>
      <text x="40" y="274" fontSize="12">cold air sinks out</text>
      <line x1="420" y1="72" x2="432" y2="40" stroke={INFO} strokeWidth="6" />
      <path d="M440,70 L452,38" stroke={INFO} strokeWidth="2" markerEnd="url(#qz)" />
      <text x="462" y="50" fontSize="12" fontWeight="700" style={{ fill: 'var(--info)' }}>vent hole (keep it clear)</text>
      <text x="20" y="24" fontSize="12" fontWeight="700">Pile → wait 1–2 h to sinter → hollow to an even wall</text>
      <text x="20" y="215" fontSize="11" className="muted-fill">Inside air: near 0 °C</text>
      <text x="20" y="229" fontSize="11" className="muted-fill">or a few degrees below.</text>
      <text x="20" y="292" fontSize="11" style={{ fill: 'var(--bad)' }}>No flame without a working vent. Keep the shovel inside. Never alone and never in avalanche terrain.</text>
    </svg>
  )
}

export function SnowTrench() {
  return (
    <svg className="diagram" viewBox="0 0 720 240" role="img" aria-label="Snow trench cross-section: a body-width trench in firm snow, roofed with a tarp or snow blocks, bed of boughs and pad">
      <rect width="720" height="240" fill={SKY} opacity="0.3" />
      <rect y="80" width="720" height="160" fill="var(--panel)" stroke={LINE} />
      <path d="M250,80 L250,190 L470,190 L470,80" fill={P2} stroke={TXT} strokeWidth="2" />
      <path d="M220,80 L360,55 L500,80" fill="none" stroke={A} strokeWidth="5" />
      <text x="712" y="50" fontSize="12" textAnchor="end">tarp or snow blocks,</text>
      <text x="712" y="66" fontSize="12" textAnchor="end">A-shaped to shed load</text>
      <rect x="260" y="172" width="200" height="18" fill={A2} opacity="0.4" />
      <Person x={280} y={168} w={140} />
      <text x="260" y="215" fontSize="12">boughs + pad: never lie on snow directly</text>
      <text x="40" y="110" fontSize="12">~1 m deep,</text>
      <text x="40" y="126" fontSize="12">body length,</text>
      <text x="40" y="142" fontSize="12">shoulder wide</text>
      <text x="20" y="30" fontSize="12" fontWeight="700">Snow trench: about an hour of digging in firm snow — the quick snow shelter.</text>
    </svg>
  )
}

export function DoubleRoof() {
  return (
    <svg className="diagram" viewBox="0 0 720 280" role="img" aria-label="Desert double-roof shade: two sheets with a 20 to 30 centimetre air gap, raised so air flows underneath, over a shallow scrape down to cooler sand">
      <defs><Arrow id="dr" color={A2} /><Arrow id="dr2" color={INFO} /></defs>
      <rect width="720" height="210" fill={SKY} opacity="0.35" />
      <rect y="210" width="720" height="70" fill={GROUND} opacity="0.5" />
      <circle cx="660" cy="40" r="22" fill={A2} />
      {[0, 1, 2].map((k) => <path key={k} d={`M${630 - k * 40},${55 + k * 8} L${480 - k * 60},100`} stroke={A2} strokeWidth="2" markerEnd="url(#dr)" />)}
      <path d="M150,100 L570,100" stroke={A2} strokeWidth="5" />
      <path d="M150,130 L570,130" stroke={A} strokeWidth="5" />
      <text x="580" y="104" fontSize="12">top sheet: hot</text>
      <text x="580" y="134" fontSize="12">lower: cooler</text>
      <text x="40" y="118" fontSize="12">20–30 cm air gap</text>
      {[0, 1].map((k) => <path key={k} d={`M40,${160 + k * 20} L680,${160 + k * 20}`} stroke={INFO} strokeDasharray="8 5" strokeWidth="2" markerEnd="url(#dr2)" />)}
      <text x="40" y="200" fontSize="12" style={{ fill: 'var(--info)' }}>breeze under the roof (raise it 40–60 cm or leave sides open)</text>
      {[160, 560].map((x) => <line key={x} x1={x} y1="100" x2={x} y2="230" stroke={TXT} strokeWidth="4" />)}
      <path d="M220,210 L240,240 L480,240 L500,210" fill={P2} stroke={TXT} />
      <Person x={270} y={236} w={150} />
      <text x="230" y="270" fontSize="12">scrape down 30–50 cm: sand below the surface is far cooler</text>
      <text x="20" y="30" fontSize="12" fontWeight="700">Build in the cool morning or evening — never at the peak of the day.</text>
    </svg>
  )
}

export function RaisedPlatform() {
  return (
    <svg className="diagram" viewBox="0 0 720 280" role="img" aria-label="Tropical raised platform bed with a steep tarp roof, mosquito net, run-off channels and a site above flood level">
      <rect width="720" height="230" fill={OK} opacity="0.12" />
      <rect y="230" width="720" height="50" fill={GROUND} opacity="0.55" />
      <path d="M225,165 L360,38 L495,165" fill="none" stroke={A} strokeWidth="5" />
      <text x="712" y="56" fontSize="12" textAnchor="end">steep roof (≈ 45°) sheds downpours</text>
      <path d="M255,175 L255,120 Q360,80 465,120 L465,175 Z" fill="none" stroke={INFO} strokeDasharray="3 3" strokeWidth="2" />
      <text x="505" y="130" fontSize="12" style={{ fill: 'var(--info)' }}>mosquito net tucked under the bed</text>
      <rect x="250" y="175" width="220" height="10" fill={GROUND} stroke={TXT} />
      {[260, 460].map((x) => <line key={x} x1={x} y1="185" x2={x} y2="232" stroke={TXT} strokeWidth="6" />)}
      <Person x={278} y={172} w={140} />
      <text x="40" y="200" fontSize="12">bed 45–60 cm up:</text>
      <text x="40" y="216" fontSize="12">air flows under,</text>
      <text x="40" y="232" fontSize="12">run-off passes under</text>
      {[0, 1, 2].map((k) => <path key={k} d={`M${560 + k * 30},240 q10,6 20,0`} fill="none" stroke={INFO} strokeWidth="2" />)}
      <text x="560" y="268" fontSize="12">run-off, ants, leeches</text>
      <text x="20" y="22" fontSize="12" fontWeight="700">Off the ground, under a steep roof, inside a net — well above the river.</text>
    </svg>
  )
}

export function FailureTree() {
  const box = (x: number, y: number, w: number, t: string, sub?: string, tone = P2) => (
    <g>
      <rect x={x} y={y} width={w} height={sub ? 44 : 32} rx="6" fill={tone} stroke={LINE} />
      <text x={x + w / 2} y={y + 20} textAnchor="middle" fontSize="12" fontWeight="700">{t}</text>
      {sub && <text x={x + w / 2} y={y + 36} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
  const l = (x1: number, y1: number, x2: number, y2: number) => <line key={`${x1}-${y1}-${x2}-${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUT} strokeWidth="1.5" />
  const cols = [
    { x: 20, w: 150, items: [['No / thin bed', 'conduction'], ['Open to wind', 'orientation'], ['Cold hollow', 'site']] },
    { x: 200, w: 146, items: [['Pooling roof', 'slack pitch'], ['Ground run-off', 'drainage'], ['Sweat', 'pace']] },
    { x: 380, w: 136, items: [['Late start', 'no decision time'], ['Scarce material', 'wrong site'], ['Too ambitious', 'design']] },
    { x: 550, w: 146, items: [['Dead tree over', 'didn’t look up'], ['Flood path', 'didn’t look upstream'], ['CO / collapse', 'no vent / thin wall']] },
  ]
  return (
    <svg className="diagram" viewBox="0 0 720 300" role="img" aria-label="Fault tree for a failed shelter night: cold and wet broken down into ground, wind, water, time and hazard causes">
      {box(250, 10, 220, 'A dangerous night', 'shivering, wet, or hurt', 'var(--bad-soft)')}
      {l(360, 54, 100, 90)}{l(360, 54, 280, 90)}{l(360, 54, 450, 90)}{l(360, 54, 620, 90)}
      {box(20, 90, 160, 'Heat drained', 'which path?')}
      {box(200, 90, 160, 'Water got in', 'from where?')}
      {box(380, 90, 150, 'Ran out of time', 'why so slow?')}
      {box(550, 90, 160, 'Hazard struck', 'why this site?')}
      {cols.map((c) => <g key={c.x}>{l(c.x + 6, 134, c.x + 6, 272)}{c.items.map((_, i) => l(c.x + 6, 172 + i * 48, c.x + 14, 172 + i * 48))}</g>)}
      {cols.map((c) => c.items.map(([a, b], i) => <g key={a}>{box(c.x + 14, 150 + i * 48, c.w, a, b)}</g>))}
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  'shelter-heat-paths': ShelterHeatPaths,
  'bed-r-values': BedRValues,
  'volume-warmth': VolumeWarmth,
  'cold-air-drainage': ColdAirDrainage,
  'site-hazards': SiteHazards,
  'tarp-pitches': TarpPitches,
  'ridgeline-tension': RidgelineTension,
  'debris-hut': DebrisHut,
  'reflector-leanto': ReflectorLeanTo,
  'quinzhee-section': QuinzheeSection,
  'snow-trench': SnowTrench,
  'double-roof': DoubleRoof,
  'raised-platform': RaisedPlatform,
  'failure-tree': FailureTree,
}
