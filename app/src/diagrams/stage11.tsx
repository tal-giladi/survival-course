import type { ComponentType } from 'react'
import { Print } from '../sims/stage11/Prints'
import { localTrail, type Family, type Gait } from '../sims/stage11/trackingModel'

// Stage 11 SVG diagrams (tracking and environmental interpretation). Colors only via CSS variables.

const A = 'var(--accent)'
const A2 = 'var(--accent-2)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
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

function Label({ x, y, text, anchor = 'start', size = 11, bold = false, muted = false }: { x: number; y: number; text: string; anchor?: 'start' | 'middle' | 'end'; size?: number; bold?: boolean; muted?: boolean }) {
  return <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={bold ? 700 : 400} className={muted ? 'muted-fill' : undefined}>{text}</text>
}

function Leader({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={MUTED} strokeWidth="1" />
}

/** Dog-family vs cat-family print anatomy. */
export function TrackAnatomy() {
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Anatomy of a dog-family print and a cat-family print. Dog: four toes, claw marks, oval symmetrical outline, small triangular heel pad and an X-shaped negative space. Cat: four toes with one leading toe, no claws, round asymmetrical outline, large heel pad with three lobes at the rear.">
      <rect x="10" y="10" width="300" height="290" rx="10" fill={P2} stroke={LINE} />
      <rect x="330" y="10" width="300" height="290" rx="10" fill={P2} stroke={LINE} />
      <Label x={160} y={34} text="Dog family (canid)" anchor="middle" bold size={14} />
      <Label x={480} y={34} text="Cat family (felid)" anchor="middle" bold size={14} />
      <Print family="canid" size={170} x={150} y={170} opacity={0.6} />
      <path d="M118,166 L182,214 M182,166 L118,214" stroke={A} strokeWidth="2.5" strokeDasharray="5 4" fill="none" />
      <ellipse cx="150" cy="170" rx="62" ry="100" fill="none" stroke={MUTED} strokeDasharray="3 4" />
      <Print family="felid" size={170} x={470} y={170} opacity={0.6} />
      <circle cx="470" cy="170" r="86" fill="none" stroke={MUTED} strokeDasharray="3 4" />
      <Leader x1={196} y1={98} x2={250} y2={70} /><Label x={252} y={68} text="claw marks" />
      <Leader x1={196} y1={150} x2={250} y2={120} /><Label x={252} y={118} text="4 toes" />
      <Leader x1={182} y1={214} x2={240} y2={200} /><Label x={242} y={198} text="X-shaped" /><Label x={242} y={211} text="open ground" />
      <Leader x1={170} y1={232} x2={230} y2={262} /><Label x={200} y={276} text="small heel pad" />
      <Label x={30} y={292} text="Oval, symmetrical, claws usually show" muted />
      <Leader x1={486} y1={110} x2={560} y2={64} /><Label x={562} y={62} text="leading" /><Label x={562} y={75} text="toe" />
      <Leader x1={530} y1={150} x2={580} y2={132} /><Label x={560} y={128} text="no claws" />
      <Leader x1={500} y1={240} x2={560} y2={262} /><Label x={500} y={278} text="3-lobed rear edge" />
      <Leader x1={440} y1={205} x2={372} y2={236} /><Label x={338} y={250} text="large heel pad" />
      <Label x={350} y={292} text="Round, asymmetrical, claws retracted" muted />
      <Label x={320} y={322} text="Front prints, toes up. Measure without claws; note only the features you can actually see." anchor="middle" size={11} muted />
    </svg>
  )
}

const FAMILY_CELLS: [Family, string, string, 'front' | 'hind'][] = [
  ['canid', 'Dog family', '4 toes · claws · oval', 'front'],
  ['felid', 'Cat family', '4 toes · no claws · round', 'front'],
  ['mustelid', 'Weasel family', '5 toes · C-shaped pad', 'front'],
  ['bear', 'Bears', '5 toes · very wide pad', 'hind'],
  ['ungulate', 'Hoofed animals', '2 hoof halves', 'front'],
  ['lagomorph', 'Rabbits and hares', 'furry · long hind feet', 'hind'],
  ['bird', 'Birds', '3 forward toes (+1 back)', 'front'],
  ['human', 'Humans', 'heel, ball, tread', 'front'],
]

/** Eight major track families at a glance. */
export function TrackFamilies() {
  return (
    <svg className="diagram" viewBox="0 0 640 320" role="img" aria-label="Eight major track families: dog family with four toes and claws; cat family with four toes and no claws; weasel family with five toes and a C-shaped pad; bears with five toes and a very wide pad; hoofed animals with two hoof halves; rabbits and hares with furry prints and long hind feet; birds with three forward toes; humans with heel, ball and tread.">
      {FAMILY_CELLS.map(([f, name, key, foot], i) => {
        const x = 10 + (i % 4) * 157
        const y = 10 + Math.floor(i / 4) * 152
        return (
          <g key={f}>
            <rect x={x} y={y} width={148} height={142} rx="8" fill={P2} stroke={LINE} />
            <Print family={f} foot={foot} side="L" size={f === 'lagomorph' ? 66 : 60} x={x + 74} y={y + 58} opacity={0.6} />
            <Label x={x + 74} y={y + 114} text={name} anchor="middle" bold size={12} />
            <Label x={x + 74} y={y + 130} text={key} anchor="middle" size={10} muted />
          </g>
        )
      })}
    </svg>
  )
}

/** Measuring a trail: print length and width, step, stride, trail width. */
export function TrackMeasure() {
  const prints = [[70, 150, 'L'], [140, 190, 'R'], [210, 150, 'L'], [280, 190, 'R'], [350, 150, 'L'], [420, 190, 'R']] as const
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="How to measure a trail: print length and width on one print; step from one print to the next opposite print; stride from a print to the next print of the same foot; trail width across the outer edges of left and right prints.">
      <defs><Arrow id="tm-a" color={A} /></defs>
      <rect x="20" y="110" width="425" height="120" rx="8" fill={GROUND} opacity="0.25" />
      {prints.map(([x, y, side], i) => <Print key={i} family="canid" side={side} size={30} x={x} y={y} rot={90} />)}
      <line x1={70} y1={250} x2={140} y2={250} stroke={A} strokeWidth="1.8" markerStart="url(#tm-a)" markerEnd="url(#tm-a)" />
      <Label x={105} y={268} text="step" anchor="middle" bold />
      <line x1={70} y1={96} x2={210} y2={96} stroke={A} strokeWidth="1.8" markerStart="url(#tm-a)" markerEnd="url(#tm-a)" />
      <Label x={140} y={88} text="stride (same foot to same foot)" anchor="middle" bold />
      <line x1={462} y1={133} x2={462} y2={207} stroke={A} strokeWidth="1.8" markerStart="url(#tm-a)" markerEnd="url(#tm-a)" />
      <Label x={462} y={226} text="trail width" anchor="middle" bold />
      <line x1={350} y1={96} x2={420} y2={96} stroke={LINE} />
      <Label x={385} y={88} text="travel →" anchor="middle" muted />
      <rect x="500" y="40" width="130" height="200" rx="8" fill={P2} stroke={LINE} />
      <Print family="canid" size={100} x={565} y={140} />
      <line x1={610} y1={96} x2={610} y2={182} stroke={A} strokeWidth="1.5" markerStart="url(#tm-a)" markerEnd="url(#tm-a)" />
      <Label x={614} y={144} text="L" bold />
      <line x1={530} y1={200} x2={600} y2={200} stroke={A} strokeWidth="1.5" markerStart="url(#tm-a)" markerEnd="url(#tm-a)" />
      <Label x={565} y={218} text="W (widest)" anchor="middle" bold />
      <Label x={565} y={58} text="one clear print" anchor="middle" muted size={10} />
      <Label x={20} y={292} text="Measure several prints and use the range; note substrate. Length excludes claws unless you say so." muted />
    </svg>
  )
}

const GAIT_ROWS: [Gait, Family, string, string][] = [
  ['walk', 'felid', 'Walk', 'zig-zag; hind lands in or near front print (direct register)'],
  ['trot', 'canid', 'Trot', 'straight, narrow line; longer, even steps'],
  ['lope', 'canid', 'Lope / gallop', 'groups of 3–4 prints in a slant, long gaps'],
  ['bound', 'lagomorph', 'Bound (hare)', 'groups of 4: long hind prints land ahead of front prints'],
]

/** Trail patterns for the four gait families. */
export function GaitPatterns() {
  return (
    <svg className="diagram" viewBox="0 0 640 350" role="img" aria-label="Trail patterns of four gaits, travelling left to right: walk as a zig-zag of single prints; trot as a straight narrow line; lope as groups of three or four prints in a slanting line with gaps; hare bound as groups of four with the two long hind prints ahead of the two front prints.">
      <defs><Arrow id="gp-a" color={A} /></defs>
      {GAIT_ROWS.map(([gait, fam, name, desc], r) => {
        const y = 50 + r * 76
        const pts = localTrail(fam, gait, 470)
        return (
          <g key={gait}>
            <rect x="140" y={y - 30} width="490" height="62" rx="6" fill={GROUND} opacity="0.18" />
            <Label x={12} y={y - 4} text={name} bold size={13} />
            <Label x={150} y={y + 43} text={desc} muted size={10} />
            {pts.map((p, i) => <Print key={i} family={fam} foot={p.foot} side={p.side} size={fam === 'lagomorph' && p.foot === 'front' ? 10 : 18} x={150 + p.u} y={y + p.v} rot={90} />)}
          </g>
        )
      })}
      <line x1={150} y1={340} x2={620} y2={340} stroke={A} strokeWidth="2" markerEnd="url(#gp-a)" />
      <Label x={100} y={344} text="direction of travel" anchor="middle" muted />
    </svg>
  )
}

/** Direction-of-travel cues: cross-section of a print and plan view of vegetation. */
export function DirectionCues() {
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Direction of travel cues. Cross-section of a footprint: heel strike at the rear, weight rolls forward, the toe end is dug deepest and a ridge of soil is shoved up behind the toes at push-off. Plan view: grass stems bent and pressed in the direction of travel, and a dark dew-free line through wet grass.">
      <defs><Arrow id="dc-a" color={A} /></defs>
      <Label x={20} y={26} text="Cross-section of a print in soft soil" bold size={13} />
      <path d="M20,120 L110,120 Q120,121 126,138 L150,142 L230,146 Q250,150 262,164 Q272,168 280,150 L292,122 L340,120" fill="none" stroke={GROUND} strokeWidth="3" />
      <path d="M20,120 L110,120 Q120,121 126,138 L150,142 L230,146 Q250,150 262,164 Q272,168 280,150 L292,122 L340,120 L340,190 L20,190 Z" fill={GROUND} opacity="0.3" />
      <path d="M236,146 q8,-12 16,0" fill={GROUND} opacity="0.8" />
      <Leader x1={128} y1={136} x2={100} y2={70} /><Label x={60} y={64} text="heel strike" />
      <Leader x1={266} y1={164} x2={300} y2={214} /><Label x={250} y={228} text="toe dig (deepest)" />
      <Leader x1={244} y1={142} x2={220} y2={70} /><Label x={176} y={64} text="ridge shoved back at push-off" />
      <line x1={120} y1={100} x2={290} y2={100} stroke={A} strokeWidth="2" markerEnd="url(#dc-a)" />
      <Label x={205} y={94} text="travel" anchor="middle" muted />
      <Label x={20} y={260} text="Pressure moves from heel to toes; the front of the print" size={11} />
      <Label x={20} y={276} text="is usually deeper and its rim steeper." size={11} />
      <Label x={380} y={26} text="Plan view: vegetation" bold size={13} />
      <rect x="380" y="40" width="250" height="170" rx="8" fill={OK} opacity="0.12" />
      {Array.from({ length: 36 }, (_, i) => {
        const x = 392 + (i % 9) * 27, y = 60 + Math.floor(i / 9) * 38
        const inPath = y > 90 && y < 170
        return inPath
          ? <path key={i} d={`M${x},${y + 12} q10,-2 18,-8`} stroke={OK} strokeWidth="2" fill="none" />
          : <path key={i} d={`M${x},${y + 12} q2,-10 0,-18`} stroke={OK} strokeWidth="2" fill="none" />
      })}
      <rect x="380" y="100" width="250" height="60" fill={INFO} opacity="0.08" />
      <line x1={400} y1={186} x2={610} y2={186} stroke={A} strokeWidth="2" markerEnd="url(#dc-a)" />
      <Label x={505} y={204} text="stems bent and pressed the way the animal went" anchor="middle" size={10} muted />
      <Label x={380} y={236} text="At dawn, a dark line through dewy grass" size={11} />
      <Label x={380} y={252} text="shows where dew was knocked off." size={11} />
      <Label x={380} y={276} text="Stems spring back over hours; the lean fades." size={11} muted />
    </svg>
  )
}

/** Bracketing the age of a trail with dated events. */
export function AgingBracket() {
  const x0 = 60, x1 = 600, t0 = 18, t1 = 36
  const X = (t: number) => x0 + ((t - t0) / (t1 - t0)) * (x1 - x0)
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Timeline from 18:00 yesterday to 12:00 today. The main snowfall ended at 22:00 and the prints are cut into it, so they were made after 22:00. A snow shower from 01:00 to 02:00 left a dusting inside the prints, so they were made before 02:00. At 10:00 the prints are therefore 8 to 12 hours old.">
      <line x1={x0} y1={120} x2={x1} y2={120} stroke={LINE} strokeWidth="2" />
      {[18, 20, 22, 24, 26, 28, 30, 32, 34, 36].map((t) => (
        <g key={t}>
          <line x1={X(t)} y1={114} x2={X(t)} y2={126} stroke={LINE} />
          <Label x={X(t)} y={142} text={`${String(t % 24).padStart(2, '0')}:00`} anchor="middle" size={10} muted />
        </g>
      ))}
      <rect x={X(18)} y={70} width={X(22) - X(18)} height={22} fill={SKY} stroke={LINE} />
      <Label x={(X(18) + X(22)) / 2} y={85} text="snowfall" anchor="middle" size={11} />
      <rect x={X(25)} y={70} width={X(26) - X(25)} height={22} fill={SKY} stroke={LINE} />
      <Label x={X(25.5)} y={62} text="shower" anchor="middle" size={11} />
      <rect x={X(22)} y={160} width={X(26) - X(22)} height={26} rx="4" fill={A} opacity="0.85" />
      <text x={(X(22) + X(26)) / 2} y={178} textAnchor="middle" fontSize="11" fontWeight="700" style={{ fill: '#fff' }}>prints made here</text>
      <line x1={X(34)} y1={40} x2={X(34)} y2={200} stroke={BAD} strokeWidth="2" strokeDasharray="4 3" />
      <Label x={X(34)} y={34} text="now 10:00" anchor="middle" bold />
      <Label x={X(22)} y={210} text="AFTER 22:00 — prints cut into the snowfall" anchor="middle" size={10} />
      <Label x={X(26) + 40} y={228} text="BEFORE 02:00 — shower dusting lies inside them" anchor="middle" size={10} />
      <Label x={320} y={252} text="Age = now − event:  10:00 − 02:00 = 8 h (minimum) … 10:00 − 22:00 = 12 h (maximum)" anchor="middle" bold size={12} />
    </svg>
  )
}

/** Reference prints aging in the same substrate. */
export function AgingStand() {
  const stages: [string, string, number, number, boolean, boolean][] = [
    ['0 h', 'crisp walls, dark moist floor', 0.7, 0, false, false],
    ['~6 h', 'surface drying, fine edge crumbs', 0.55, 1, false, false],
    ['~1 day', 'rim rounded, lighter, first debris', 0.42, 2, true, false],
    ['several days', 'faint, pitted, debris, insect trails', 0.25, 3, true, true],
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 280" role="img" aria-label="Reference prints in the same substrate at 0 hours, about 6 hours, about a day and several days: walls go from crisp and dark to crumbled, rounded and lighter, then collect debris, rain pits and insect trails. Illustrative only — rates depend on substrate and weather.">
      {stages.map(([t, desc, op, crumbs, debris, pits], i) => {
        const x = 10 + i * 157
        return (
          <g key={t}>
            <rect x={x} y={20} width={148} height={170} rx="8" fill={GROUND} opacity="0.3" stroke={LINE} />
            <Print family="canid" size={90} x={x + 74} y={100} opacity={op} />
            {Array.from({ length: crumbs * 6 }, (_, k) => <circle key={k} cx={x + 40 + ((k * 23) % 70)} cy={52 + ((k * 37) % 100)} r="1.8" fill={GROUND} />)}
            {debris && <path d={`M${x + 50},${80} l14,6 M${x + 92},${130} l-10,8`} stroke={A2} strokeWidth="3" />}
            {pits && Array.from({ length: 22 }, (_, k) => <circle key={`p${k}`} cx={x + 20 + ((k * 29) % 110)} cy={34 + ((k * 43) % 140)} r="1.4" fill="var(--text)" opacity="0.4" />)}
            {pits && <path d={`M${x + 20},${170} q30,-20 60,-4 t50,-14`} stroke="var(--text)" strokeWidth="1" fill="none" opacity="0.5" strokeDasharray="1 3" />}
            <Label x={x + 74} y={210} text={t} anchor="middle" bold size={13} />
            <Label x={x + 74} y={226} text={desc.split(',')[0]} anchor="middle" size={10} muted />
            <Label x={x + 74} y={240} text={desc.split(',').slice(1).join(',').trim()} anchor="middle" size={10} muted />
          </g>
        )
      })}
      <Label x={320} y={272} text="Illustrative. Make your own reference prints beside the unknown one and compare in the same light." anchor="middle" size={10} muted />
    </svg>
  )
}

/** Browse sign: clean-cut vs torn twig ends; gnawed nuts. */
export function BrowseSign() {
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="Browse sign. A twig clipped by a rabbit, hare or rodent has a clean, angled cut about 45 degrees. A twig browsed by a deer is torn, ragged and often crushed, because deer have no upper front teeth.">
      <rect x="10" y="10" width="300" height="200" rx="8" fill={P2} stroke={LINE} />
      <rect x="330" y="10" width="300" height="200" rx="8" fill={P2} stroke={LINE} />
      <Label x={160} y={34} text="Rabbit / hare / rodent" anchor="middle" bold size={13} />
      <Label x={480} y={34} text="Deer and other ruminants" anchor="middle" bold size={13} />
      <path d="M60,190 L180,80 L196,74 L182,96 Z" fill={A2} opacity="0.8" />
      <line x1={196} y1={74} x2={182} y2={96} stroke={A} strokeWidth="3" />
      <Leader x1={190} y1={86} x2={236} y2={96} /><Label x={238} y={100} text="clean ~45° cut" />
      <Label x={40} y={204} text="Sharp upper and lower incisors snip like shears." size={10} muted />
      <path d="M380,190 L500,80 L506,72 L512,80 L516,70 L520,84 L512,92 L506,90 Z" fill={A2} opacity="0.8" />
      <path d="M500,80 l4,-10 M508,84 l8,-6 M512,92 l10,0" stroke={A2} strokeWidth="1.5" />
      <Leader x1={516} y1={82} x2={556} y2={96} /><Label x={558} y={100} text="torn, ragged," /><Label x={558} y={113} text="fibres pulled" />
      <Label x={346} y={204} text="No upper incisors: they grip against a pad and tear." size={10} muted />
      <Label x={320} y={236} text="Height matters too: browse far above the snow line or ground points to a taller animal (or deep snow earlier)." anchor="middle" size={11} />
      <Label x={320} y={252} text="Freshly cut wood is pale and moist; it darkens and dries over days." anchor="middle" size={11} muted />
    </svg>
  )
}

/** Schematic scat shapes and the hygiene rule. */
export function ScatShapes() {
  return (
    <svg className="diagram" viewBox="0 0 640 270" role="img" aria-label="Schematic scat shapes: pellets from deer and rabbits; a tubular, twisted scat with tapered ends containing hair and bone from the dog family; a segmented scat often scraped over from the cat family; bird droppings with a white uric-acid cap; an owl pellet, which is regurgitated fur and bone, not scat. Look, photograph with a scale, never touch with bare hands.">
      {[
        ['Pellets', 'deer, rabbits, hares', 0],
        ['Twisted, tapered', 'dog family: hair, bone', 1],
        ['Segmented, blunt', 'cat family, often covered', 2],
        ['White cap', 'birds (uric acid)', 3],
        ['Owl pellet', 'regurgitated — not scat', 4],
      ].map(([name, sub, i]) => {
        const x = 10 + (i as number) * 126
        return (
          <g key={name as string}>
            <rect x={x} y={20} width={118} height={170} rx="8" fill={P2} stroke={LINE} />
            {i === 0 && [0, 1, 2, 3, 4, 5].map((k) => <ellipse key={k} cx={x + 34 + (k % 3) * 24} cy={80 + Math.floor(k / 3) * 30} rx="9" ry="7" fill={GROUND} />)}
            {i === 1 && <path d={`M${x + 22},${104} q18,-22 36,-4 q18,18 38,-12`} fill="none" stroke={GROUND} strokeWidth="13" strokeLinecap="round" />}
            {i === 1 && <path d={`M${x + 34},${98} l8,2 M${x + 70},${104} l8,-4`} stroke={P2} strokeWidth="1.5" />}
            {i === 2 && [0, 1, 2, 3].map((k) => <rect key={k} x={x + 18 + k * 21} y={92} width={19} height={18} rx="7" fill={GROUND} />)}
            {i === 3 && (
              <g>
                <ellipse cx={x + 59} cy={104} rx="26" ry="14" fill={GROUND} />
                <ellipse cx={x + 62} cy={96} rx="18" ry="9" fill="var(--panel)" stroke={LINE} />
              </g>
            )}
            {i === 4 && (
              <g>
                <ellipse cx={x + 59} cy={100} rx="34" ry="16" fill={MUTED} opacity="0.6" />
                <path d={`M${x + 40},${98} l14,4 M${x + 64},${94} l12,8`} stroke="var(--panel)" strokeWidth="2.5" />
              </g>
            )}
            <Label x={x + 59} y={164} text={name as string} anchor="middle" bold size={10} />
            <Label x={x + 59} y={178} text={sub as string} anchor="middle" size={9} muted />
          </g>
        )
      })}
      <rect x="10" y="204" width="620" height="54" rx="8" fill={BAD} opacity="0.12" />
      <Label x={320} y={226} text="Look and photograph with a scale — never touch or sniff scat with bare hands; use a stick." anchor="middle" bold size={12} />
      <Label x={320} y={244} text="Scat and droppings can carry parasite eggs and viruses. Wash hands; keep dogs and children away." anchor="middle" size={11} />
    </svg>
  )
}

/** Landscape clues to water and game trails as handrails. */
export function WaterSign() {
  return (
    <svg className="diagram" viewBox="0 0 640 320" role="img" aria-label="Landscape clues to water. Game trails converge and run downhill into a dry wash. A line of greener, taller vegetation follows the wash. Birds fly low and direct toward water at dawn and dusk. Dig at the outside of a bend in the wash, at the lowest point. All are clues, not proof, and any water found must be treated.">
      <defs><Arrow id="ws-a" color={A} /></defs>
      <rect x="0" y="0" width="640" height="320" fill={SKY} opacity="0.35" />
      <path d="M0,120 L90,60 L180,110 L260,70 L360,130 L460,80 L560,120 L640,90 L640,320 L0,320 Z" fill={GROUND} opacity="0.45" />
      <path d="M40,300 C160,250 200,230 260,240 C330,252 380,210 460,200 C520,192 580,220 640,210" fill="none" stroke={A2} strokeWidth="18" opacity="0.35" />
      <Label x={560} y={236} text="dry wash" size={11} bold />
      {Array.from({ length: 14 }, (_, i) => {
        const x = 70 + i * 40
        const y = 258 - Math.sin(i / 2) * 20 - i * 3
        return <path key={i} d={`M${x},${y} l-4,-16 l4,-4 l4,4 z`} fill={OK} opacity="0.85" />
      })}
      <Label x={120} y={222} text="green line of trees / reeds" size={10} />
      <path d="M90,70 C110,140 170,180 250,236" fill="none" stroke="var(--text)" strokeWidth="1.8" strokeDasharray="4 4" />
      <path d="M260,80 C265,150 262,200 262,236" fill="none" stroke="var(--text)" strokeWidth="1.8" strokeDasharray="4 4" />
      <path d="M455,90 C420,150 360,190 300,232" fill="none" stroke="var(--text)" strokeWidth="1.8" strokeDasharray="4 4" />
      <Label x={300} y={120} text="game trails converge downhill" size={11} bold />
      <circle cx={252} cy={244} r="12" fill={INFO} opacity="0.7" />
      <Label x={228} y={276} text="dig: outside of bend, lowest point" size={10} bold />
      {[[430, 30], [460, 42], [490, 34]].map(([x, y], i) => <path key={i} d={`M${x},${y} q6,-6 12,0 q6,-6 12,0`} fill="none" stroke="var(--text)" strokeWidth="1.5" />)}
      <line x1={500} y1={46} x2={290} y2={210} stroke={A} strokeWidth="1.5" strokeDasharray="6 4" markerEnd="url(#ws-a)" />
      <Label x={630} y={62} text="birds flying low and direct" anchor="end" size={10} />
      <Label x={630} y={75} text="at dawn/dusk (a clue, not proof)" anchor="end" size={10} muted />
      <rect x="10" y="10" width="250" height="40" rx="6" fill="var(--panel)" opacity="0.85" stroke={LINE} />
      <Label x={20} y={27} text="Several clues together beat one." size={11} bold />
      <Label x={20} y={42} text="Treat all water; watch for flash floods." size={11} />
    </svg>
  )
}

/** Search support: last known point, travel radius and sign cutting along track traps. */
export function SarSignCut() {
  const cx = 250, cy = 170
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Search support. Around the last known point (LKP), the area a person could have reached grows with the square of time. Searchers cut for sign along natural track traps — trails, stream banks, roads and soft ground — around the LKP. One confirmed print with a direction of travel narrows the search to a sector.">
      <defs><Arrow id="sc-a" color={A} /></defs>
      <rect x="0" y="0" width="640" height="330" fill={GROUND} opacity="0.12" />
      <circle cx={cx} cy={cy} r="70" fill="none" stroke={LINE} strokeDasharray="4 4" />
      <circle cx={cx} cy={cy} r="140" fill="none" stroke={LINE} strokeDasharray="4 4" />
      <Label x={cx + 52} y={cy - 56} text="1 h" size={10} muted />
      <Label x={cx + 102} y={cy - 104} text="2 h" size={10} muted />
      <path d={`M${cx},${cy} L${cx + 140 * Math.cos(-1.05)},${cy + 140 * Math.sin(-1.05)} A140,140 0 0 1 ${cx + 140 * Math.cos(-0.35)},${cy + 140 * Math.sin(-0.35)} Z`} fill={A} opacity="0.18" />
      <path d="M40,300 C120,240 180,200 240,176 C300,150 380,120 460,40" fill="none" stroke={A2} strokeWidth="4" opacity="0.7" />
      <Label x={60} y={290} text="trail" size={11} />
      <path d="M30,80 C120,100 200,70 300,90 C380,105 440,150 470,320" fill="none" stroke={INFO} strokeWidth="4" opacity="0.7" />
      <Label x={40} y={72} text="stream" size={11} />
      {[[140, 90], [300, 92], [148, 225], [360, 118]].map(([x, y], i) => <rect key={i} x={x - 16} y={y - 6} width="32" height="12" rx="3" fill="none" stroke={BAD} strokeWidth="2" />)}
      <rect x={430} y={186} width="32" height="12" rx="3" fill="none" stroke={BAD} strokeWidth="2" />
      <Label x={468} y={196} text="= sign-cut segment" size={10} bold />
      <Label x={468} y={209} text="(along track traps)" size={10} muted />
      <circle cx={cx} cy={cy} r="7" fill={BAD} />
      <Label x={cx - 10} y={cy + 24} text="LKP" anchor="end" bold />
      <circle cx={344} cy={130} r="5" fill={OK} />
      <line x1={344} y1={130} x2={372} y2={108} stroke={OK} strokeWidth="2" markerEnd="url(#sc-a)" />
      <Label x={380} y={148} text="confirmed print + direction" size={10} bold />
      <rect x="478" y="230" width="152" height="90" rx="6" fill="var(--panel)" stroke={LINE} />
      <Label x={486} y={248} text="Area ≈ π r², r = v·t" size={11} bold />
      <Label x={486} y={264} text="2 km/h × 2 h → r = 4 km" size={10} />
      <Label x={486} y={278} text="area ≈ 50 km²" size={10} />
      <Label x={486} y={294} text="a 60° sector: ≈ 8 km²" size={10} />
      <Label x={486} y={310} text="(illustrative numbers)" size={9} muted />
    </svg>
  )
}

/** Step-by-step tracking with a tracking stick. */
export function TrackingStick() {
  return (
    <svg className="diagram" viewBox="0 0 640 250" role="img" aria-label="Step-by-step tracking with a tracking stick. The stick is marked with the length of the subject's step. Place the mark at the heel of the last confirmed print; the next print should lie near the tip, within a small arc. Search that arc slowly, low-angle light behind the sign, before moving on. Never step on the sign — walk beside the trail.">
      <rect x="0" y="0" width="640" height="200" fill={GROUND} opacity="0.2" />
      <Print family="human" side="L" size={50} x={80} y={120} rot={90} />
      <Print family="human" side="R" size={50} x={200} y={90} rot={90} />
      <Print family="human" side="L" size={50} x={320} y={120} rot={90} opacity={0.25} />
      <line x1={58} y1={140} x2={340} y2={140} stroke={A2} strokeWidth="6" strokeLinecap="round" />
      {[58, 178, 298].map((x) => <line key={x} x1={x} y1={132} x2={x} y2={148} stroke="var(--panel)" strokeWidth="3" />)}
      <ellipse cx={320} cy={120} rx={36} ry={30} fill="none" stroke={BAD} strokeWidth="2" strokeDasharray="4 3" />
      <Label x={60} y={170} text="stick: heel-to-heel step length marked" size={11} />
      <Label x={362} y={100} text="next print expected here —" size={11} bold />
      <Label x={362} y={114} text="search this zone" size={11} bold />
      <path d="M40,40 L620,40" stroke="var(--text)" strokeWidth="1" strokeDasharray="2 4" opacity="0.5" />
      <Label x={620} y={34} text="trackers walk to the side of the trail, never on it" anchor="end" size={10} muted />
      <Label x={20} y={222} text="1. Confirm the last print (sole pattern, size). 2. Place the stick. 3. Search the zone with low-angle light." size={11} />
      <Label x={20} y={240} text="4. Mark each confirmed print. Do not move ahead of the last known print." size={11} />
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's11-track-anatomy': TrackAnatomy,
  's11-track-families': TrackFamilies,
  's11-track-measure': TrackMeasure,
  's11-gaits': GaitPatterns,
  's11-direction': DirectionCues,
  's11-aging-bracket': AgingBracket,
  's11-aging-stand': AgingStand,
  's11-browse': BrowseSign,
  's11-scat': ScatShapes,
  's11-water-sign': WaterSign,
  's11-sar-cut': SarSignCut,
  's11-tracking-stick': TrackingStick,
}
