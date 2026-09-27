// Hauling-system model — pure functions so the mechanics can be unit-tested.
//
// VIRTUAL ONLY. This is a teaching model of the physics. It is not a rigging calculator and must
// never be used to design a system that holds a person. Life-safety rope work needs qualified instruction.
//
// 1. Load pull. A load of mass m on a slope of angle θ (90° = free-hanging), sliding on the ground with
//    friction coefficient μg, needs a pull along the slope of
//        P = m·g·(sin θ + μg·cos θ)           (at 90° this is just the weight, m·g)
// 2. Edge friction. Rope running over an edge on its way to the system behaves like the capstan
//    (Stage 7): tension grows by e^(μθ) across the edge. We use an edge efficiency ηe = e^(−μθ), so the
//    system must pull T = P / ηe.
// 3. Mechanical advantage (MA). A simple system with n rope parts pulling on the load, where every
//    pulley passes on a fraction η of the tension it receives (friction), has an actual MA of
//        MA = 1 + η + η² + … + η^(n−1)
//    (ideal MA = n when η = 1). A compound system (one simple system pulling on the haul strand of
//    another) multiplies: MA = MA₁ · MA₂. A redirect of the haul strand at the anchor adds no
//    advantage and costs another factor η.
// 4. Anchor forces. With haulers pulling straight away from the load, the whole system's anchor holds
//    T − F_in (load-line tension minus the haulers' pull entering the system). A redirect pulley adds the
//    vector sum of its two strands, |T₁ + T₂| = √(T₁² + T₂² + 2·T₁·T₂·cos α), where α is the angle
//    between the strands (0° = a U-turn, nearly 2× the tension; 180° = straight through, zero).
//    A two-leg anchor sharing a force A equally with an included angle β loads each leg with
//        L = A / (2·cos(β/2))                 (60° → 0.58 A, 90° → 0.71 A, 120° → 1.00 A, 150° → 1.93 A)
//
// Efficiencies and friction coefficients below are illustrative round numbers chosen to show the
// trends; real values depend on the rope, sheave diameter, bearings, load, wetness and wear.

export const G = 9.81

export type SystemId = '1:1' | '2:1' | '3:1' | '4:1c' | '5:1' | '6:1c' | '9:1c'
export type PulleyId = 'efficient' | 'basic' | 'carabiner'
export type EdgeId = 'free' | 'roller' | 'padded' | 'bare'

export interface SystemDef {
  id: SystemId
  name: string
  /** Rope parts of each simple system, from the one on the load outward. [3, 3] = 3:1 on 3:1. */
  parts: number[]
  note: string
}

export const SYSTEMS: SystemDef[] = [
  { id: '1:1', name: '1:1 direct pull', parts: [1], note: 'No advantage. Every metre pulled lifts the load a metre.' },
  { id: '2:1', name: '2:1 simple', parts: [2], note: 'One travelling pulley on the load; the rope end is anchored.' },
  { id: '3:1', name: '3:1 simple (“Z”)', parts: [3], note: 'Anchor pulley plus a travelling pulley gripping the load line.' },
  { id: '4:1c', name: '4:1 compound (2:1 on 2:1)', parts: [2, 2], note: 'A 2:1 pulling on the haul strand of a 2:1.' },
  { id: '5:1', name: '5:1 simple', parts: [5], note: 'Four pulleys; lots of rope travel and friction.' },
  { id: '6:1c', name: '6:1 compound (2:1 on 3:1)', parts: [3, 2], note: 'A 2:1 pulling on the haul strand of a 3:1.' },
  { id: '9:1c', name: '9:1 compound (3:1 on 3:1)', parts: [3, 3], note: 'Very powerful — and very able to destroy an anchor if something snags.' },
]

export const PULLEYS: Record<PulleyId, { name: string; eff: number; note: string }> = {
  efficient: { name: 'Efficient pulley (large sheave, bearing)', eff: 0.95, note: 'Model value 0.95 per pulley.' },
  basic: { name: 'Basic pulley (small sheave, bushing)', eff: 0.85, note: 'Model value 0.85 per pulley.' },
  carabiner: { name: 'Carabiner used as a pulley', eff: Math.exp(-0.2 * Math.PI), note: 'Capstan model: μ ≈ 0.2 over 180° → about 0.53.' },
}

export const EDGES: Record<EdgeId, { name: string; eff: number; abrasion: boolean; note: string }> = {
  free: { name: 'Free-hanging / no edge contact', eff: 1, abrasion: false, note: 'Rope clears the edge (e.g., a high directional).' },
  roller: { name: 'Edge roller', eff: 0.95, abrasion: false, note: 'Model value 0.95.' },
  padded: { name: 'Padded edge, 90° bend', eff: Math.exp(-0.3 * (Math.PI / 2)), abrasion: false, note: 'Capstan model: μ ≈ 0.3 over 90° → about 0.62.' },
  bare: { name: 'Bare rock edge, 90° bend', eff: Math.exp(-0.5 * (Math.PI / 2)), abrasion: true, note: 'Capstan model: μ ≈ 0.5 over 90° → about 0.46 — and a loaded, moving rope can be cut.' },
}

const rad = (deg: number) => (deg * Math.PI) / 180

/** Actual MA of a simple system with n rope parts on the load and per-pulley efficiency eff. */
export function simpleMA(parts: number, eff: number): number {
  let s = 0
  for (let k = 0; k < parts; k++) s += Math.pow(eff, k)
  return s
}

/** Ideal (frictionless) MA: product of rope parts. */
export const idealMA = (sys: SystemDef) => sys.parts.reduce((a, b) => a * b, 1)

/** Actual MA of a (possibly compound) system. */
export const actualMA = (sys: SystemDef, eff: number) => sys.parts.reduce((a, n) => a * simpleMA(n, eff), 1)

/** Pulley count (a 1:1 direct pull has none). */
export const pulleyCount = (sys: SystemDef) => sys.parts.reduce((a, n) => a + (n - 1), 0)

/** Force along the slope needed to move a load of mass m (kg) up a slope of angle deg (90 = hanging). */
export function loadPull(massKg: number, slopeDeg: number, groundMu: number): number {
  const t = rad(Math.max(0, Math.min(90, slopeDeg)))
  return massKg * G * (Math.sin(t) + groundMu * Math.cos(t))
}

/** Force on a pulley whose two strands carry t1 and t2 with angle alphaDeg between them. */
export function redirectForce(t1: number, t2: number, alphaDeg: number): number {
  return Math.sqrt(Math.max(0, t1 * t1 + t2 * t2 + 2 * t1 * t2 * Math.cos(rad(alphaDeg))))
}

/** Force in each leg of an equally shared two-leg anchor with included angle betaDeg. */
export function legForce(total: number, betaDeg: number): number {
  const c = Math.cos(rad(betaDeg) / 2)
  return c <= 1e-6 ? Infinity : total / (2 * c)
}

/** Leg-force multiplier (leg force ÷ total force) for an included angle. */
export const legFactor = (betaDeg: number) => legForce(1, betaDeg)

/** Tension in each rope part of one simple system, from the haul strand (index 0) toward the load side. */
export function strandTensions(parts: number, eff: number, haulForce: number): number[] {
  return Array.from({ length: parts }, (_, k) => haulForce * Math.pow(eff, k))
}

export interface Rig {
  system: SystemId
  pulley: PulleyId
  edge: EdgeId
  /** Haul strand redirected at the anchor so haulers can pull toward the edge / in a better line. */
  redirect: boolean
  /** Angle between the two strands at the redirect pulley, degrees (0 = U-turn). */
  redirectAngle: number
  /** Included angle between the two anchor legs, degrees. */
  anchorAngle: number
}

export interface Situation {
  massKg: number
  slopeDeg: number
  groundMu: number
  haulers: number
  /** Assumed steady pull per hauler, N (a model input, not a physiological norm). */
  perHauler: number
}

export interface RigResult {
  sys: SystemDef
  ideal: number
  actual: number
  efficiency: number
  /** Pull needed along the slope at the load, N. */
  pull: number
  /** Tension in the load line at the system (after edge friction), N. */
  lineTension: number
  /** Total pull the haul team must supply, N. */
  haulForce: number
  haulersNeeded: number
  feasible: boolean
  /** Metres of rope the haulers pull per metre the load moves. */
  ropeTravel: number
  /** Force on the main system anchor, N. */
  anchorForce: number
  /** Extra force on the redirect pulley's anchor, N. */
  redirectLoad: number
  /** Force in each of two anchor legs (main anchor + redirect share the same two-leg anchor), N. */
  legLoad: number
  legMultiplier: number
  /** Maximum force the whole team could put on the load line if it snagged, N. */
  snagForce: number
  /** Tension in each rope part of the innermost simple system at the required haul force. */
  strands: number[]
  pulleys: number
}

export function evaluateRig(rig: Rig, s: Situation): RigResult {
  const sys = SYSTEMS.find((x) => x.id === rig.system)!
  const eff = PULLEYS[rig.pulley].eff
  const redirectEff = rig.redirect ? eff : 1
  const ideal = idealMA(sys)
  const actual = actualMA(sys, eff) * redirectEff
  const pull = loadPull(s.massKg, s.slopeDeg, s.groundMu)
  const lineTension = pull / EDGES[rig.edge].eff
  const haulForce = lineTension / actual
  const haulersNeeded = Math.max(1, Math.ceil(haulForce / s.perHauler - 1e-9))
  const intoSystem = haulForce * redirectEff
  const redirectLoad = rig.redirect ? redirectForce(haulForce, intoSystem, rig.redirectAngle) : 0
  const anchorForce = Math.max(0, lineTension - intoSystem) + redirectLoad
  const legMultiplier = legFactor(rig.anchorAngle)
  // Innermost simple system (the one on the load): its haul strand carries the output of the outer ones.
  const outer = sys.parts.slice(1).reduce((a, n) => a * simpleMA(n, eff), 1)
  const strands = strandTensions(sys.parts[0], eff, intoSystem * outer)
  return {
    sys, ideal, actual, efficiency: actual / ideal, pull, lineTension, haulForce, haulersNeeded,
    feasible: haulersNeeded <= s.haulers,
    ropeTravel: ideal,
    anchorForce, redirectLoad, legLoad: anchorForce * legMultiplier, legMultiplier,
    snagForce: s.haulers * s.perHauler * actual * EDGES[rig.edge].eff,
    strands, pulleys: pulleyCount(sys) + (rig.redirect ? 1 : 0),
  }
}

// ---------- Challenges ----------

export interface Challenge {
  id: string
  name: string
  brief: string
  situation: Situation
  /** Edges available at this site (the learner picks one). */
  edges: EdgeId[]
  pulleys: PulleyId[]
}

export const CHALLENGES: Challenge[] = [
  {
    id: 'pack',
    name: 'Haul a pack up a slab',
    brief: 'A 30 kg pack must come up a 60° slab to a ledge. Two people can haul. A roller and padding are available.',
    situation: { massKg: 30, slopeDeg: 60, groundMu: 0.3, haulers: 2, perHauler: 250 },
    edges: ['roller', 'padded', 'bare'],
    pulleys: ['efficient', 'basic', 'carabiner'],
  },
  {
    id: 'litter',
    name: 'Low-angle litter raise',
    brief: 'A 100 kg litter (patient + litter) on a 40° slope, with attendants guiding it. Three people can haul.',
    situation: { massKg: 100, slopeDeg: 40, groundMu: 0.3, haulers: 3, perHauler: 250 },
    edges: ['roller', 'padded', 'bare'],
    pulleys: ['efficient', 'basic', 'carabiner'],
  },
  {
    id: 'vertical',
    name: 'Free-hanging 100 kg raise',
    brief: 'A 100 kg load hangs free below a cliff-top edge. Only two people can haul. You have pulleys and carabiners.',
    situation: { massKg: 100, slopeDeg: 90, groundMu: 0, haulers: 2, perHauler: 250 },
    edges: ['roller', 'padded', 'bare'],
    pulleys: ['efficient', 'basic', 'carabiner'],
  },
]

export interface RigScore {
  score: number
  notes: string[]
  result: RigResult
}

/** Ideal MA order used to find "the simplest system that would have worked". */
const BY_IDEAL = [...SYSTEMS].sort((a, b) => idealMA(a) - idealMA(b) || a.parts.length - b.parts.length)

/**
 * Score a rig for a challenge (0–100). Rewards: it works with the team available; it is the simplest
 * system that works (less rope travel, fewer resets, less force if the load snags); the edge is
 * protected; anchor legs are at a narrow angle.
 */
export function scoreRig(rig: Rig, s: Situation): RigScore {
  const r = evaluateRig(rig, s)
  const notes: string[] = []
  let score = 100
  if (!r.feasible) {
    notes.push(`Not enough people: the haul needs about ${Math.round(r.haulForce)} N — ${r.haulersNeeded} haulers at ${s.perHauler} N each — but only ${s.haulers} are available. Reduce friction (edge, pulleys) or add advantage.`)
    score = Math.min(score, 30)
  } else {
    const simplest = BY_IDEAL.find((sys) => evaluateRig({ ...rig, system: sys.id }, s).feasible)
    if (simplest && idealMA(simplest) < r.ideal) {
      const extra = Math.log2(r.ideal / idealMA(simplest))
      const d = Math.min(35, Math.round(12 * extra + 5))
      score -= d
      notes.push(`Over-built: a ${simplest.name} would already work here. Every extra ratio means more rope to pull, more resets and more force on the anchor and the load if something snags (up to ${(r.snagForce / 1000).toFixed(1)} kN with the whole team pulling).`)
    }
  }
  if (rig.edge === 'bare') {
    score -= 30
    notes.push('A loaded, moving rope over a bare rock edge can be cut or melted through its sheath. Edge protection is not optional.')
  } else if (rig.edge === 'padded') {
    notes.push('Padding protects the rope but still wastes a lot of force in friction (capstan effect); a roller or a high directional wastes much less.')
  }
  if (rig.anchorAngle > 120) {
    score -= 25
    notes.push(`Anchor legs at ${rig.anchorAngle}°: each leg carries ${r.legMultiplier.toFixed(2)}× the anchor force. Keep the angle narrow — ideally under about 60°, never over 120°.`)
  } else if (rig.anchorAngle > 90) {
    score -= 10
    notes.push(`Anchor legs at ${rig.anchorAngle}° put ${r.legMultiplier.toFixed(2)}× the anchor force on each leg. Narrower is better.`)
  }
  if (rig.pulley === 'carabiner' && r.feasible) notes.push('Carabiners as pulleys work, but waste roughly half the force at each turn in this model — and the rope wears faster.')
  if (rig.redirect && rig.redirectAngle < 60) notes.push(`The redirect is a near U-turn: its anchor sees about ${(r.redirectLoad / Math.max(1, r.haulForce)).toFixed(1)}× the haul force on top of the system load.`)
  score = Math.max(0, Math.min(100, Math.round(score)))
  if (score >= 90 && notes.length === 0) notes.push('A clean, simple, efficient rig for this job.')
  return { score, notes, result: r }
}
