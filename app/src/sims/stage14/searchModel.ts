// Search-planning model for the "search-sim" simulation (Stage 14).
//
// Classic search theory (Koopman; used in IAMSAR and land-SAR planning):
//   coverage     C   = W · L / A        (sweep width W, total track length L, segment area A)
//   detection    POD = 1 − e^(−C)        (exponential detection function / "random search")
//   success      POS = POA · POD
// After an unsuccessful search the probabilities of area are updated with Bayes' rule:
//   POA'_i = POA_i · (1 − POD_i) / (1 − Σ_j POA_j · POD_j)
// "Rest of world" (ROW) is the probability that the subject is outside every segment; it is never
// searched, so it grows after every unsuccessful period.
//
// All numbers in the scenarios below are illustrative teaching values, not operational data.

export interface Segment {
  id: string
  name: string
  /** Segment area, km². */
  area: number
  /** Initial probability of area (consensus / lost-person-behaviour estimate), 0–1. */
  poa: number
  /** Effective sweep width for one ground searcher in this terrain, metres. */
  sweepWidth: number
  /** Searching speed in this terrain, km/h. */
  speed: number
  terrain: string
}

export interface SearchScenario {
  id: string
  title: string
  text: string
  segments: Segment[]
  /** Initial rest-of-world probability. Segment POAs + row must sum to 1. */
  row: number
  /** Searcher-hours available in each operational period. */
  hoursPerPeriod: number
  periods: number
  /** Relative weight of ROW when a moving subject drifts (how much open country lies outside the segments). */
  rowDriftWeight: number
}

export interface Belief {
  poa: number[]
  row: number
}

/** Coverage C = W·L/A, with W in metres, L in km and A in km². Dimensionless. */
export function coverage(sweepWidthM: number, trackKm: number, areaKm2: number): number {
  if (areaKm2 <= 0) return 0
  return ((sweepWidthM / 1000) * trackKm) / areaKm2
}

/** Exponential detection function: POD = 1 − e^(−C). */
export function podFromCoverage(c: number): number {
  return 1 - Math.exp(-Math.max(0, c))
}

/** POD achieved in a segment by a given number of searcher-hours. */
export function podForHours(seg: Segment, hours: number): number {
  return podFromCoverage(coverage(seg.sweepWidth, Math.max(0, hours) * seg.speed, seg.area))
}

export function initialBelief(s: SearchScenario): Belief {
  return { poa: s.segments.map((g) => g.poa), row: s.row }
}

/** Probability of success of one period: Σ POA_i · POD_i. */
export function posOf(b: Belief, pods: number[]): number {
  return b.poa.reduce((a, p, i) => a + p * (pods[i] ?? 0), 0)
}

/** Bayesian update after an unsuccessful search with the given PODs. */
export function bayesUpdate(b: Belief, pods: number[]): Belief {
  const miss = 1 - posOf(b, pods)
  if (miss <= 1e-12) return { poa: b.poa.map(() => 0), row: 1 }
  return {
    poa: b.poa.map((p, i) => (p * (1 - (pods[i] ?? 0))) / miss),
    row: b.row / miss,
  }
}

/**
 * A moving subject: a fraction m of the probability in each segment leaves it and is spread over
 * all segments (by area) and the rest of the world (by `rowWeight`). Staying put means m = 0.
 */
export function drift(b: Belief, s: SearchScenario, m: number): Belief {
  if (m <= 0) return b
  const moving = b.poa.reduce((a, p) => a + p * m, 0)
  const weights = [...s.segments.map((g) => g.area), s.rowDriftWeight]
  const total = weights.reduce((a, w) => a + w, 0)
  return {
    poa: b.poa.map((p, i) => p * (1 - m) + (moving * weights[i]) / total),
    row: b.row + (moving * weights[weights.length - 1]) / total,
  }
}

/**
 * Optimal allocation of a block of searcher-hours for one period (greedy in small steps).
 * With the exponential detection function the marginal gain in each segment falls as effort grows,
 * so allocating each increment to the segment with the highest marginal gain is optimal.
 */
export function optimalAllocation(b: Belief, s: SearchScenario, hours: number, step = 0.5): number[] {
  const alloc = s.segments.map(() => 0)
  const steps = Math.round(hours / step)
  for (let k = 0; k < steps; k++) {
    let best = 0
    let bestGain = -1
    s.segments.forEach((g, i) => {
      const gain = b.poa[i] * (podForHours(g, alloc[i] + step) - podForHours(g, alloc[i]))
      if (gain > bestGain) { bestGain = gain; best = i }
    })
    alloc[best] += step
  }
  return alloc
}

export interface PeriodResult {
  before: Belief
  alloc: number[]
  pods: number[]
  pos: number
  after: Belief
}

export interface PlanResult {
  periods: PeriodResult[]
  /** Probability the subject has been found by the end (cumulative POS). */
  cumPos: number
}

/**
 * Run a sequence of per-period allocations. Between periods a moving subject drifts (m per period).
 * Cumulative POS = Σ_k POS_k · Π_{j<k} (1 − POS_j).
 */
export function runPlan(s: SearchScenario, allocations: number[][], m = 0): PlanResult {
  let b = initialBelief(s)
  let notFound = 1
  const periods: PeriodResult[] = []
  allocations.forEach((alloc, k) => {
    if (k > 0) b = drift(b, s, m)
    const pods = s.segments.map((g, i) => podForHours(g, alloc[i] ?? 0))
    const pos = posOf(b, pods)
    const after = bayesUpdate(b, pods)
    periods.push({ before: b, alloc, pods, pos, after })
    notFound *= 1 - pos
    b = after
  })
  return { periods, cumPos: 1 - notFound }
}

/** Plan in which every period uses the optimal allocation given the updated belief. */
export function optimalPlan(s: SearchScenario, m = 0): PlanResult {
  let b = initialBelief(s)
  const allocs: number[][] = []
  for (let k = 0; k < s.periods; k++) {
    if (k > 0) b = drift(b, s, m)
    const a = optimalAllocation(b, s, s.hoursPerPeriod)
    allocs.push(a)
    const pods = s.segments.map((g, i) => podForHours(g, a[i]))
    b = bayesUpdate(b, pods)
  }
  return runPlan(s, allocs, m)
}

/** Even split of effort by area (a "search everywhere equally" plan). */
export function uniformPlan(s: SearchScenario, m = 0): PlanResult {
  const totalArea = s.segments.reduce((a, g) => a + g.area, 0)
  const alloc = s.segments.map((g) => (s.hoursPerPeriod * g.area) / totalArea)
  return runPlan(s, Array.from({ length: s.periods }, () => alloc), m)
}

/** Score 0–100: your cumulative POS as a share of the optimal cumulative POS. */
export function scorePlan(s: SearchScenario, allocations: number[][], m = 0): { cumPos: number; optimal: number; score: number } {
  const mine = runPlan(s, allocations, m).cumPos
  const optimal = optimalPlan(s, m).cumPos
  return { cumPos: mine, optimal, score: Math.max(0, Math.min(100, Math.round((100 * mine) / optimal))) }
}

/**
 * Fill the remaining periods of a plan with the optimal allocation, continuing from the belief the
 * given allocations leave behind. Used to score a search that ended early because the subject was found.
 */
export function completeWithOptimal(s: SearchScenario, allocations: number[][], m = 0): number[][] {
  const out = allocations.map((a) => [...a])
  const r = runPlan(s, out, m)
  let b = r.periods.length ? r.periods[r.periods.length - 1].after : initialBelief(s)
  while (out.length < s.periods) {
    if (out.length > 0) b = drift(b, s, m)
    const a = optimalAllocation(b, s, s.hoursPerPeriod)
    out.push(a)
    b = bayesUpdate(b, s.segments.map((g, i) => podForHours(g, a[i])))
  }
  return out
}

export const SCENARIOS: SearchScenario[] = [
  {
    id: 'hiker',
    title: 'Overdue day hiker, forested ridge',
    text: 'A 45-year-old hiker did not return from a ridge loop. Her car is at the trailhead; she texted a photo from the ridge-top clearing at 14:00. Night fell 2 hours ago. You have 6 two-person teams (24 searcher-hours) per operational period and three periods before the weather closes in.',
    segments: [
      { id: 'trail', name: 'Trail corridor', area: 0.6, poa: 0.3, sweepWidth: 40, speed: 2.5, terrain: 'Path and 50 m either side' },
      { id: 'ridge', name: 'Ridge-top clearing', area: 1, poa: 0.12, sweepWidth: 80, speed: 3, terrain: 'Open rock and grass' },
      { id: 'drain', name: 'West drainage', area: 2, poa: 0.25, sweepWidth: 20, speed: 1.5, terrain: 'Steep creek, brush' },
      { id: 'forest', name: 'North forest', area: 4, poa: 0.18, sweepWidth: 15, speed: 1.5, terrain: 'Dense conifer' },
      { id: 'lake', name: 'Lake shore', area: 1.2, poa: 0.07, sweepWidth: 60, speed: 3, terrain: 'Open shore, rocks' },
    ],
    row: 0.08,
    hoursPerPeriod: 24,
    periods: 3,
    rowDriftWeight: 6,
  },
  {
    id: 'child',
    title: 'Missing child near a campground',
    text: 'A 6-year-old wandered off from a lakeside campground an hour ago. Young children often hide or shelter, may not answer their name and rarely go far. You have 20 searcher-hours per period (volunteers and park staff) and three short periods.',
    segments: [
      { id: 'camp', name: 'Campground and toilets', area: 0.3, poa: 0.25, sweepWidth: 25, speed: 2, terrain: 'Tents, vehicles, buildings' },
      { id: 'shore', name: 'Lake shore', area: 0.5, poa: 0.2, sweepWidth: 50, speed: 3, terrain: 'Open beach, reeds' },
      { id: 'woods', name: 'Near woods (< 500 m)', area: 0.8, poa: 0.3, sweepWidth: 12, speed: 1.5, terrain: 'Thick undergrowth' },
      { id: 'road', name: 'Access road', area: 0.4, poa: 0.1, sweepWidth: 60, speed: 4, terrain: 'Road and verges' },
      { id: 'far', name: 'Far woods (> 500 m)', area: 3, poa: 0.1, sweepWidth: 12, speed: 1.5, terrain: 'Thick undergrowth' },
    ],
    row: 0.05,
    hoursPerPeriod: 20,
    periods: 3,
    rowDriftWeight: 3,
  },
]
