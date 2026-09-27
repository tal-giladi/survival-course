// Pure model for the Lightning Risk simulation.
//
// A storm cell moves along a straight track past the learner. Each simulated step we compute the
// distance to the cell, a flash-to-bang delay (sound at 343 m/s), and a relative strike hazard that
// falls off with distance and is zero beyond ~16 km (NWS: lightning can strike ~10 miles from a storm).
// Exposure "dose" = Σ hazard(d) × exposure(location) × Δt. Numbers are an intuition model, not a
// probability of being struck.

export const SOUND_MS = 343 // speed of sound in air at ~20 °C, m/s
export const STRIKE_RANGE_KM = 16
export const WAIT_MIN = 30 // wait 30 minutes after the last thunder
export const STEP_MIN = 2

export const delayToKm = (s: number) => (s * SOUND_MS) / 1000
export const kmToDelay = (km: number) => (km * 1000) / SOUND_MS

export interface Storm {
  /** Along-track distance at t = 0, km (positive = approaching). */
  d0: number
  /** Speed of the cell, km/h. */
  speed: number
  /** Closest approach, km (0 = passes straight overhead). */
  miss: number
}

export function stormDistance(s: Storm, tMin: number): number {
  const x = s.d0 - (s.speed * tMin) / 60
  return Math.sqrt(x * x + s.miss * s.miss)
}

export const approaching = (s: Storm, tMin: number) => s.d0 - (s.speed * tMin) / 60 > 0

/** Relative strike hazard per minute at distance d (km). */
export function hazard(dKm: number): number {
  return dKm > STRIKE_RANGE_KM ? 0 : Math.exp(-dKm / 2)
}

export interface Refuge {
  id: string
  name: string
  travelMin: number
  /** Exposure while getting there. */
  routeExposure: number
  /** Exposure once there. 1 ≈ standing in the open on high ground. */
  exposure: number
  feedback: string
}

export interface LightningMap {
  id: string
  name: string
  intro: string
  start: { name: string; exposure: number }
  refuges: Refuge[]
  storm: Storm
  /** Positions for the SVG map (0–100 grid). */
  layout: Record<string, [number, number]>
  terrain: 'mountain' | 'lake' | 'field'
}

export const MAPS: LightningMap[] = [
  {
    id: 'mountain',
    name: 'Summit ridge',
    terrain: 'mountain',
    intro: '13:00 on a 2,900 m summit ridge. Cumulus to the west have been towering since 11:00 and one now has an anvil. The trailhead car is ~2 h away; dense forest starts below treeline, 35 min down.',
    start: { name: 'Summit ridge', exposure: 1 },
    storm: { d0: 20, speed: 24, miss: 1 },
    refuges: [
      { id: 'tree', name: 'Lone pine on the shoulder (5 min)', travelMin: 5, routeExposure: 1, exposure: 1.3, feedback: 'An isolated tree is a lightning target: side flashes and ground current injure people sheltering under it. Worse than staying in the open.' },
      { id: 'crouch', name: 'Stay on the ridge in the lightning position', travelMin: 0, routeExposure: 1, exposure: 0.8, feedback: 'The crouch reduces risk only slightly and you stay on the most exposed ground for the whole storm. Last resort only — descending is far better.' },
      { id: 'forest', name: 'Descend to dense forest below treeline (35 min)', travelMin: 35, routeExposure: 0.8, exposure: 0.2, feedback: 'Best available: off the summit and ridge quickly, into a stand of similar-height trees in lower ground. Not "safe", but much less exposed.' },
      { id: 'valley', name: 'Valley meadow beside the lake (70 min)', travelMin: 70, routeExposure: 0.7, exposure: 0.6, feedback: 'Low ground helps, but open meadows and lakeshores are exposed, and the long descent is timed right through the storm.' },
      { id: 'car', name: 'Hard-topped car at trailhead (120 min)', travelMin: 120, routeExposure: 0.7, exposure: 0.02, feedback: 'A hard-topped vehicle is a good refuge — but 2 h away you cannot reach it before the storm. You spend the whole storm on the trail.' },
    ],
    layout: { start: [50, 18], tree: [66, 30], crouch: [44, 16], forest: [34, 56], valley: [60, 78], car: [86, 88] },
  },
  {
    id: 'lake',
    name: 'Canoe on a lake',
    terrain: 'lake',
    intro: '15:30, paddling in the middle of a 3 km lake. The sky to the south-west is dark and you see a flicker. The launch (and your car) is 30 min away; a forested shore is 20 min; an open beach 8 min.',
    start: { name: 'Middle of the lake', exposure: 1.2 },
    storm: { d0: 18, speed: 20, miss: 3 },
    refuges: [
      { id: 'island', name: 'Tiny island with one tall tree (6 min)', travelMin: 6, routeExposure: 1.2, exposure: 1.3, feedback: 'An isolated tree on an island surrounded by water is about the worst refuge there is.' },
      { id: 'crouch', name: 'Stay put and lie low in the canoe', travelMin: 0, routeExposure: 1.2, exposure: 1.1, feedback: 'On open water you are the tallest thing around. Get off the water.' },
      { id: 'beach', name: 'Nearest shore: open sandy beach (8 min)', travelMin: 8, routeExposure: 1.2, exposure: 0.8, feedback: 'Off the water fast — good — but an open beach is still exposed. Move inland away from the shoreline if you can.' },
      { id: 'forest', name: 'Forested shore, then 100 m inland (20 min)', travelMin: 20, routeExposure: 1.2, exposure: 0.2, feedback: 'Good: off the water and away from the shore into dense forest.' },
      { id: 'car', name: 'Car at the launch (30 min paddle + 5 min walk)', travelMin: 35, routeExposure: 1.15, exposure: 0.02, feedback: 'Excellent refuge if you start early enough — at the first sign, not the first close strike.' },
    ],
    layout: { start: [50, 50], island: [66, 38], beach: [30, 30], forest: [18, 62], car: [84, 84], crouch: [54, 52] },
  },
  {
    id: 'field',
    name: 'Open plateau with a group',
    terrain: 'field',
    intro: '14:00, crossing an open grassy plateau with three friends. Thunder already rumbles to the west. A picnic shelter is 6 min away, forest 12 min, your car 25 min.',
    start: { name: 'Open plateau', exposure: 0.8 },
    storm: { d0: 16, speed: 30, miss: 0.5 },
    refuges: [
      { id: 'tree', name: 'Lone oak in the middle of the field (3 min)', travelMin: 3, routeExposure: 0.8, exposure: 1.3, feedback: 'Never shelter under an isolated tree: side flash and ground current.' },
      { id: 'crouch', name: 'Spread out and crouch where you are', travelMin: 0, routeExposure: 0.8, exposure: 0.65, feedback: 'Spreading the group out is right (one strike should not injure everyone), but crouching in the open is a last resort when nothing better is reachable. Here, forest is 12 min away.' },
      { id: 'pavilion', name: 'Open-sided picnic shelter (6 min)', travelMin: 6, routeExposure: 0.8, exposure: 0.75, feedback: 'Open-sided shelters, pavilions and tents give almost no lightning protection.' },
      { id: 'forest', name: 'Dense forest, 50 m inside the edge (12 min)', travelMin: 12, routeExposure: 0.8, exposure: 0.2, feedback: 'Good choice when a building or car is not reachable in time. Spread out inside the forest.' },
      { id: 'car', name: 'Hard-topped car at the parking area (25 min)', travelMin: 25, routeExposure: 0.8, exposure: 0.02, feedback: 'Best refuge; whether it beats the forest depends on how early you set off.' },
    ],
    layout: { start: [50, 50], tree: [62, 42], crouch: [46, 54], pavilion: [30, 38], forest: [16, 70], car: [86, 80] },
  },
]

export interface SimState {
  t: number
  loc: string // 'start' or a refuge id
  travelling: { to: string; remaining: number } | null
  dose: number
  lastThunder: number | null
  retreatedAt: number | null
  resumedEarly: boolean
  sheltered: boolean
  done: boolean
  events: { t: number; delay: number | null; dKm: number }[]
}

export const initialState = (): SimState => ({
  t: 0,
  loc: 'start',
  travelling: null,
  dose: 0,
  lastThunder: null,
  retreatedAt: null,
  resumedEarly: false,
  sheltered: false,
  done: false,
  events: [],
})

function exposureNow(map: LightningMap, s: SimState): number {
  if (s.travelling) return map.refuges.find((r) => r.id === s.travelling!.to)!.routeExposure
  if (s.loc === 'start') return map.start.exposure
  return map.refuges.find((r) => r.id === s.loc)!.exposure
}

/** Start moving to a refuge (or stay in place for travelMin 0). */
export function retreat(map: LightningMap, s: SimState, refugeId: string): SimState {
  const r = map.refuges.find((x) => x.id === refugeId)!
  const next = { ...s, retreatedAt: s.retreatedAt ?? s.t }
  if (r.travelMin <= 0) return { ...next, loc: r.id, travelling: null, sheltered: true }
  return { ...next, travelling: { to: r.id, remaining: r.travelMin } }
}

/** Go back to the original activity. Early if < 30 min since the last thunder (or storm still in range). */
export function resume(map: LightningMap, s: SimState): SimState {
  const d = stormDistance(map.storm, s.t)
  const early = s.lastThunder === null ? d <= STRIKE_RANGE_KM : s.t - s.lastThunder < WAIT_MIN || d <= STRIKE_RANGE_KM
  return { ...s, loc: 'start', travelling: null, resumedEarly: s.resumedEarly || early }
}

/** Advance one step of STEP_MIN minutes. */
export function step(map: LightningMap, s: SimState): SimState {
  if (s.done) return s
  const tMid = s.t + STEP_MIN / 2
  const dMid = stormDistance(map.storm, tMid)
  const dose = s.dose + hazard(dMid) * exposureNow(map, s) * STEP_MIN
  let { loc, travelling, sheltered } = s
  if (travelling) {
    const remaining = travelling.remaining - STEP_MIN
    if (remaining <= 0) {
      loc = travelling.to
      travelling = null
      sheltered = true
    } else travelling = { ...travelling, remaining }
  }
  const t = s.t + STEP_MIN
  const d = stormDistance(map.storm, t)
  const audible = d <= STRIKE_RANGE_KM
  const delay = audible ? Math.round(kmToDelay(d)) : null
  const lastThunder = audible ? t : s.lastThunder
  const done = !approaching(map.storm, t) && d > STRIKE_RANGE_KM && lastThunder !== null && t - lastThunder >= WAIT_MIN
  return { ...s, t, loc, travelling, sheltered, dose, lastThunder, done, events: [...s.events, { t, delay, dKm: d }] }
}

/** Dose if you stay at the start for the whole storm (the baseline). */
export function baselineDose(map: LightningMap): number {
  let s = initialState()
  while (!s.done && s.t < 400) s = step(map, s)
  return s.dose
}

/** Qualitative band for a relative risk index. */
export function riskIndex(dose: number): number {
  return 1 - Math.exp(-dose * 0.2)
}

export function riskBand(dose: number): string {
  const r = riskIndex(dose)
  return r < 0.15 ? 'Low' : r < 0.4 ? 'Moderate' : r < 0.7 ? 'High' : 'Extreme'
}

export type Bucket = '<3' | '3-6' | '6-10' | '10-16'
export const BUCKETS: Bucket[] = ['<3', '3-6', '6-10', '10-16']

export function bucketFor(delaySec: number): Bucket {
  const km = delayToKm(delaySec)
  return km < 3 ? '<3' : km < 6 ? '3-6' : km < 10 ? '6-10' : '10-16'
}

/**
 * Score out of 100: 70 for exposure reduced relative to staying put, 15 for respecting the
 * 30-minute rule (only if you actually took shelter), 15 for flash-to-bang estimates.
 */
export function score(map: LightningMap, s: SimState, estimates: { correct: number; total: number }): number {
  const base = baselineDose(map)
  const safety = base > 0 ? Math.max(0, 1 - s.dose / base) : 1
  const rule = s.sheltered && !s.resumedEarly ? 1 : 0
  const est = estimates.total > 0 ? estimates.correct / estimates.total : 0
  return Math.round(70 * safety + 15 * rule + 15 * est)
}
