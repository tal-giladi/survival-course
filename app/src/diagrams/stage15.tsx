import type { ComponentType } from 'react'

// Stage 15 SVG diagrams (survival psychology). Colors only via CSS variables (light/dark aware).

const A = 'var(--accent)'
const P2 = 'var(--panel-2)'
const LINE = 'var(--line)'
const MUTED = 'var(--muted)'
const BAD = 'var(--bad)'
const OK = 'var(--ok)'
const INFO = 'var(--info)'

function Arrow({ id, color = MUTED }: { id: string; color?: string }) {
  return (
    <marker id={id} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
      <path d="M0,0 L10,5 L0,10 z" fill={color} />
    </marker>
  )
}

function Box({ x, y, w, h, title, sub, stroke = LINE, fill = P2 }: { x: number; y: number; w: number; h: number; title: string; sub?: string; stroke?: string; fill?: string }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill={fill} stroke={stroke} strokeWidth="1.5" />
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 4)} textAnchor="middle" fontSize="12" fontWeight="700">{title}</text>
      {sub && <text x={x + w / 2} y={y + h / 2 + 13} textAnchor="middle" fontSize="10" className="muted-fill">{sub}</text>}
    </g>
  )
}

/** Fast and slow threat pathways, and how stress switches the prefrontal cortex off-line. */
export function ThreatCircuit() {
  return (
    <svg className="diagram" viewBox="0 0 640 330" role="img" aria-label="Threat processing: senses feed a fast route through the amygdala that triggers body responses within a fraction of a second, and a slower route through the cortex and prefrontal cortex that appraises and plans. High stress chemistry weakens the prefrontal cortex and strengthens habits and reflexes.">
      <defs><Arrow id="tc-a" color={BAD} /><Arrow id="tc-b" color={INFO} /><Arrow id="tc-m" /></defs>
      <Box x={20} y={130} w={110} h={54} title="Senses" sub="sight, sound, pain" />
      <Box x={180} y={40} w={150} h={54} title="Amygdala" sub="fast threat detector" stroke={BAD} />
      <Box x={180} y={226} w={150} h={54} title="Sensory cortex" sub="detailed picture" stroke={INFO} />
      <Box x={400} y={40} w={220} h={54} title="Hypothalamus + brainstem" sub="adrenaline, heart rate, freeze circuits" stroke={BAD} />
      <Box x={400} y={226} w={220} h={54} title="Prefrontal cortex" sub="appraise, plan, inhibit, remember" stroke={INFO} />
      <line x1={130} y1={148} x2={180} y2={80} stroke={BAD} strokeWidth="2" markerEnd="url(#tc-a)" />
      <line x1={330} y1={67} x2={400} y2={67} stroke={BAD} strokeWidth="2" markerEnd="url(#tc-a)" />
      <line x1={130} y1={168} x2={180} y2={240} stroke={INFO} strokeWidth="2" markerEnd="url(#tc-b)" />
      <line x1={330} y1={253} x2={400} y2={253} stroke={INFO} strokeWidth="2" markerEnd="url(#tc-b)" />
      <line x1={480} y1={226} x2={480} y2={98} stroke={INFO} strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#tc-b)" />
      <text x={474} y={170} fontSize="10" textAnchor="end" fill={INFO}>calms / overrides</text>
      <line x1={560} y1={98} x2={560} y2={222} stroke={BAD} strokeWidth="1.8" strokeDasharray="5 3" markerEnd="url(#tc-a)" />
      <text x={566} y={150} fontSize="10" fill={BAD}>high stress</text>
      <text x={566} y={163} fontSize="10" fill={BAD}>chemistry</text>
      <text x={566} y={176} fontSize="10" fill={BAD}>weakens PFC</text>
      <text x={255} y={120} textAnchor="middle" fontSize="11" fill={BAD} fontWeight="700">fast route · before you know it</text>
      <text x={255} y={210} textAnchor="middle" fontSize="11" fill={INFO} fontWeight="700">slow route · deliberate, slower</text>
      <text x={320} y={318} textAnchor="middle" fontSize="11" className="muted-fill">Simplified: real circuits overlap. The body reacts before you think; strong stress favours habits.</text>
    </svg>
  )
}

/** The defence cascade: responses change as a threat gets closer and escape seems less possible. */
export function DefenceCascade() {
  const steps: [string, string, string][] = [
    ['Arousal', 'orient, “what was that?”', INFO],
    ['Attentive freeze', 'still, watching, heart slows', A],
    ['Flight / fight', 'adrenaline, heart races', BAD],
    ['Tonic immobility', 'frozen stiff, cannot move', BAD],
    ['Collapse', 'faint, shut down', MUTED],
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 260" role="img" aria-label="The defence cascade: as a threat comes closer and escape seems less possible, responses move from arousal and orienting, to attentive freezing, to flight or fight, to tonic immobility and finally collapse. Rehearsed plans keep people at the useful, action end.">
      <defs><Arrow id="dc-a" /></defs>
      <line x1={30} y1={40} x2={610} y2={40} stroke={MUTED} strokeWidth="1.5" markerEnd="url(#dc-a)" />
      <text x={30} y={28} fontSize="11" className="muted-fill">threat far · escape possible</text>
      <text x={610} y={28} fontSize="11" textAnchor="end" className="muted-fill">threat close · escape seems impossible</text>
      {steps.map(([t, s, c], i) => {
        const x = 20 + i * 122
        const y = 60 + i * 22
        return (
          <g key={t}>
            <rect x={x} y={y} width={112} height={58} rx="8" fill={P2} stroke={c} strokeWidth="2" />
            <text x={x + 56} y={y + 24} textAnchor="middle" fontSize="12" fontWeight="700">{t}</text>
            <text x={x + 56} y={y + 42} textAnchor="middle" fontSize="9" className="muted-fill">{s}</text>
          </g>
        )
      })}
      <text x={320} y={232} textAnchor="middle" fontSize="11">A rehearsed response lets you move straight from freeze to purposeful action.</text>
      <text x={320} y={250} textAnchor="middle" fontSize="10" className="muted-fill">After Roelofs (2017) and Kozlowska et al. (2015); stages overlap and are not strictly sequential.</text>
    </svg>
  )
}

/** Leach's description of disaster behaviour, with the evidence caveat. */
export function ResponseSplit() {
  const segs: [string, number, string, string][] = [
    ['calm, effective', 12.5, OK, '~10–15 %'],
    ['stunned, slowed, but able to follow instructions', 75, INFO, '~75 %'],
    ['counter-productive', 12.5, BAD, '~10–15 %'],
  ]
  let x = 40
  return (
    <svg className="diagram" viewBox="0 0 640 230" role="img" aria-label="Leach's commonly quoted split of disaster behaviour: about 10 to 15 percent calm and effective, about 75 percent stunned but able to follow instructions, about 10 to 15 percent counter-productive. A caveat notes that these figures are illustrative, come from case reports rather than systematic counts, and that disaster research finds most people act cooperatively.">
      <text x={320} y={24} textAnchor="middle" fontSize="13" fontWeight="700">The “10–80–10” pattern (Leach) — a teaching heuristic, not a measurement</text>
      {segs.map(([label, pct, c, v]) => {
        const w = (pct / 100) * 560
        const g = (
          <g key={label}>
            <rect x={x} y={50} width={w} height={46} fill={c} opacity="0.75" stroke={LINE} />
            <text x={x + w / 2} y={78} textAnchor="middle" fontSize="12" fontWeight="700">{v}</text>
            <text x={x + w / 2} y={116} textAnchor="middle" fontSize="10" className="muted-fill">{pct > 20 ? label : label.split(',')[0]}</text>
          </g>
        )
        x += w
        return g
      })}
      <rect x={40} y={140} width={560} height={72} rx="8" fill={P2} stroke={A} strokeDasharray="5 3" />
      <text x={56} y={160} fontSize="11" fontWeight="700" fill={A}>Evidence caveat</text>
      <text x={56} y={178} fontSize="10">The figures come from case descriptions, not systematic counts; other authors quote other splits.</text>
      <text x={56} y={194} fontSize="10">Disaster sociology finds mass panic rare and cooperation common. The robust lesson is the middle group:</text>
      <text x={56} y={208} fontSize="10">most people slow down and wait for a lead — so a calm, simple instruction is powerful.</text>
    </svg>
  )
}

/** Plan continuation: commitment rises with time invested while evidence against the plan grows. */
export function PlanContinuation() {
  const W = 640, L = 60, R = 30, T = 30, B = 50, H = 280
  const x = (t: number) => L + t * (W - L - R)
  const y = (v: number) => T + (1 - v) * (H - T - B)
  const commit = Array.from({ length: 21 }, (_, i) => i / 20).map((t) => `${x(t)},${y(0.25 + 0.65 * Math.sqrt(t))}`).join(' ')
  const evidence = Array.from({ length: 21 }, (_, i) => i / 20).map((t) => `${x(t)},${y(0.05 + 0.8 * t * t)}`).join(' ')
  const trig = 0.55
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Plan continuation: the feeling of commitment to a plan rises quickly with time and effort invested, while evidence that the plan no longer fits rises later. People tend to switch only when evidence overwhelms commitment, far too late. A pre-set trigger such as a turnaround time forces the switch earlier.">
      <defs><Arrow id="pc-a" /></defs>
      <line x1={L} y1={y(0)} x2={W - R} y2={y(0)} stroke={LINE} markerEnd="url(#pc-a)" />
      <line x1={L} y1={y(0)} x2={L} y2={T - 10} stroke={LINE} markerEnd="url(#pc-a)" />
      <text x={W - R} y={H - 22} textAnchor="end" fontSize="11" className="muted-fill">time and effort invested →</text>
      <text x={L - 8} y={T - 14} fontSize="11" className="muted-fill">strength</text>
      <polyline points={commit} fill="none" stroke={A} strokeWidth="2.5" />
      <polyline points={evidence} fill="none" stroke={BAD} strokeWidth="2.5" strokeDasharray="6 3" />
      <text x={x(0.12)} y={y(0.55)} fontSize="11" fill={A} fontWeight="700">commitment to the plan</text>
      <text x={x(0.28)} y={y(0.06)} fontSize="11" fill={BAD} fontWeight="700">evidence against it</text>
      <line x1={x(trig)} y1={y(0)} x2={x(trig)} y2={y(1)} stroke={OK} strokeWidth="2" />
      <text x={x(trig) + 6} y={y(0.97)} fontSize="11" fill={OK} fontWeight="700">pre-set trigger (turnaround time)</text>
      <text x={x(trig) + 6} y={y(0.9)} fontSize="10" className="muted-fill">decided in advance, when calm</text>
      <line x1={x(0.93)} y1={y(0)} x2={x(0.93)} y2={y(1)} stroke={BAD} strokeWidth="1.5" strokeDasharray="3 3" />
      <text x={x(0.93) - 6} y={y(0.14)} fontSize="11" fill={BAD} textAnchor="end">typical switch</text>
      <text x={x(0.93) - 6} y={y(0.07)} fontSize="11" fill={BAD} textAnchor="end">without a trigger</text>
      <text x={W / 2} y={H - 6} textAnchor="middle" fontSize="10" className="muted-fill">Illustrative shapes, not measured data.</text>
    </svg>
  )
}

/** Normalization of deviance: the operating point drifts towards the edge as near-misses pass without harm. */
export function DevianceDrift() {
  const pts: [number, number][] = [[80, 200], [150, 185], [220, 175], [280, 150], [340, 140], [400, 115], [460, 100], [520, 80]]
  return (
    <svg className="diagram" viewBox="0 0 640 290" role="img" aria-label="Normalization of deviance: a group starts well inside the safe zone. Each time a small deviation passes without harm it becomes the new normal, and the operating point drifts step by step towards the boundary of acceptable risk, while the perceived margin stays the same.">
      <defs><Arrow id="dd-a" color={BAD} /></defs>
      <rect x={30} y={30} width={580} height={40} fill={BAD} opacity="0.18" />
      <line x1={30} y1={70} x2={610} y2={70} stroke={BAD} strokeWidth="2" />
      <text x={40} y={55} fontSize="12" fontWeight="700" fill={BAD}>Boundary of acceptable risk — accidents happen here</text>
      <rect x={30} y={170} width={580} height={70} fill={OK} opacity="0.12" />
      <text x={40} y={232} fontSize="11" fill={OK} fontWeight="700">Original margin: rules, turnaround times, forecasts respected</text>
      {pts.slice(1).map(([x2, y2], i) => {
        const [x1, y1] = pts[i]
        return <line key={x2} x1={x1} y1={y1} x2={x2} y2={y2} stroke={BAD} strokeWidth="2" markerEnd="url(#dd-a)" />
      })}
      {pts.map(([x, y], i) => <circle key={x} cx={x} cy={y} r={i === 0 ? 7 : 4} fill={i === 0 ? OK : BAD} />)}
      {[['“late start, but fine”', 150, 205], ['“rumbles, never struck”', 280, 172], ['“skipped the check again”', 400, 138], ['“no one got hurt”', 520, 104]].map(([t, x, y]) => (
        <text key={t as string} x={x as number} y={y as number} fontSize="10" textAnchor="middle" className="muted-fill">{t}</text>
      ))}
      <text x={320} y={264} textAnchor="middle" fontSize="11">Each near-miss that ends well feels like proof of safety — so the next deviation feels normal.</text>
      <text x={320} y={280} textAnchor="middle" fontSize="10" className="muted-fill">After Vaughan (1996) and Rasmussen (1997). Countermeasure: fixed standards, and reviewing near-misses as if they were accidents.</text>
    </svg>
  )
}

/** Emotion regulation in the field, organised by Gross's process model. */
export function RegulationLadder() {
  const steps: [string, string, string][] = [
    ['Situation selection', 'avoid or leave the trigger', 'turn back early; do not camp by the roaring river'],
    ['Situation modification', 'change the situation', 'light, warmth, food, tidy camp'],
    ['Attention', 'where you point your mind', 'one small task; count breaths'],
    ['Reappraisal', 'change the meaning', '“this is a hard night, not the end”'],
    ['Response', 'act on the body', 'slow breathing; name the feeling'],
  ]
  return (
    <svg className="diagram" viewBox="0 0 640 300" role="img" aria-label="Emotion regulation strategies arranged from early to late in the emotional process: situation selection, situation modification, attention, reappraisal and response modulation, each with a field example. Earlier strategies usually cost less effort.">
      <defs><Arrow id="rl-a" /></defs>
      <line x1={30} y1={272} x2={610} y2={272} stroke={MUTED} markerEnd="url(#rl-a)" />
      <text x={30} y={290} fontSize="10" className="muted-fill">early: before the emotion builds (usually cheaper)</text>
      <text x={610} y={290} fontSize="10" textAnchor="end" className="muted-fill">late: once it has built</text>
      {steps.map(([t, s, ex], i) => {
        const x = 20 + i * 122
        const y = 20 + i * 30
        return (
          <g key={t}>
            <rect x={x} y={y} width={114} height={120} rx="8" fill={P2} stroke={i === 3 ? OK : LINE} strokeWidth="1.5" />
            <text x={x + 57} y={y + 20} textAnchor="middle" fontSize="11" fontWeight="700">{t.split(' ')[0]}</text>
            <text x={x + 57} y={y + 34} textAnchor="middle" fontSize="11" fontWeight="700">{t.split(' ')[1] ?? ''}</text>
            <text x={x + 57} y={y + 54} textAnchor="middle" fontSize="9" className="muted-fill">{s}</text>
            {ex.match(/.{1,20}(\s|$)/g)!.map((line, j) => (
              <text key={j} x={x + 57} y={y + 76 + j * 12} textAnchor="middle" fontSize="9" fill={INFO}>{line.trim()}</text>
            ))}
          </g>
        )
      })}
    </svg>
  )
}

/** Group roles around a leader in a survival situation. */
export function GroupRoles() {
  const roles: [string, string][] = [
    ['Navigator', 'map, position, route'],
    ['Medic', 'injuries, warmth checks'],
    ['Shelter / fire', 'build, maintain'],
    ['Water / food', 'collect, treat, ration'],
    ['Signals / comms', 'phone, beacon, signal fire'],
    ['Devil’s advocate', 'asks “what if we’re wrong?”'],
  ]
  const cx = 320, cy = 160, r = 120
  return (
    <svg className="diagram" viewBox="0 0 640 320" role="img" aria-label="A leader at the centre coordinates six roles: navigator, medic, shelter and fire, water and food, signals and communications, and a devil's advocate. Every role reports back at fixed check-ins; roles rotate so everyone rests.">
      {roles.map(([t, s], i) => {
        const a = (-90 + i * 60) * (Math.PI / 180)
        const x = cx + Math.cos(a) * r * 1.9
        const y = cy + Math.sin(a) * r
        return (
          <g key={t}>
            <line x1={cx} y1={cy} x2={x} y2={y} stroke={LINE} strokeWidth="1.5" />
            <rect x={x - 70} y={y - 22} width={140} height={44} rx="8" fill={P2} stroke={i === 5 ? A : LINE} strokeWidth="1.5" />
            <text x={x} y={y - 3} textAnchor="middle" fontSize="12" fontWeight="700">{t}</text>
            <text x={x} y={y + 12} textAnchor="middle" fontSize="9" className="muted-fill">{s}</text>
          </g>
        )
      })}
      <circle cx={cx} cy={cy} r={46} fill={A} opacity="0.9" />
      <text x={cx} y={cy - 4} textAnchor="middle" fontSize="12" fontWeight="700" style={{ fill: '#fff' }}>Leader</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fontSize="9" style={{ fill: '#fff' }}>plan · check-ins · morale</text>
      <text x={320} y={314} textAnchor="middle" fontSize="10" className="muted-fill">Small groups combine roles. Fixed check-ins; rotate hard jobs; the devil’s advocate role protects against groupthink.</text>
    </svg>
  )
}

export const diagrams: Record<string, ComponentType> = {
  's15-threat-circuit': ThreatCircuit,
  's15-defence-cascade': DefenceCascade,
  's15-response-split': ResponseSplit,
  's15-plan-continuation': PlanContinuation,
  's15-deviance-drift': DevianceDrift,
  's15-regulation': RegulationLadder,
  's15-group-roles': GroupRoles,
}
