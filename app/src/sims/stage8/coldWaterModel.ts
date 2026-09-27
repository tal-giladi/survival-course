// Cold-water immersion timeline model for the Stage 8 "Cold Water" simulation.
//
// Phases (after Golden & Tipton, and Giesbrecht's 1-10-1):
//  1. Cold shock (first ~1–3 min): gasp, hyperventilation, surging heart rate and blood pressure.
//     Most dangerous without flotation — an inhaled gasp under water is drowning.
//  2. Loss of muscle function / swim failure (roughly 10–30+ min): arms and hands cool first.
//     After this you cannot swim, grip or climb, and without flotation you cannot stay up.
//  3. Immersion hypothermia (30 min to hours): core cooling; consciousness is usually lost
//     somewhere around 30 °C core.
// Central estimates are multiplied by a factor band (0.6–1.6 on cooling rate, ±40 % on swim-failure
// time) because body size, fat, fitness, sea state and clothing vary enormously. These numbers are
// illustrative, not survival predictions — see the National Center for Cold Water Safety counterpoint.

export type Clothing = 'light' | 'heavy' | 'wetsuit' | 'drysuit'
export type Build = 'lean' | 'average' | 'heavy'
export type Behavior = 'swim' | 'tread' | 'help' | 'huddle' | 'climb'

export interface ColdWaterInput {
  waterC: number
  airC: number
  wind: number // km/h, only matters out of the water
  clothing: Clothing
  pfd: boolean
  build: Build
  behavior: Behavior
  /** Distance to safety if swimming, m. */
  shoreM: number
}

export const CLOTHING: Record<Clothing, { label: string; cool: number; muscle: number; shock: number }> = {
  light: { label: 'Light clothing', cool: 1, muscle: 1, shock: 1 },
  heavy: { label: 'Heavy clothing / jacket', cool: 0.8, muscle: 1.1, shock: 0.85 },
  wetsuit: { label: 'Wetsuit (5 mm)', cool: 0.45, muscle: 1.8, shock: 0.5 },
  drysuit: { label: 'Drysuit with insulation', cool: 0.25, muscle: 2.2, shock: 0.3 },
}

export const BUILD: Record<Build, { label: string; cool: number; muscle: number }> = {
  lean: { label: 'Lean / small', cool: 1.3, muscle: 0.85 },
  average: { label: 'Average', cool: 1, muscle: 1 },
  heavy: { label: 'Larger / more body fat', cool: 0.75, muscle: 1.15 },
}

export const BEHAVIOR: Record<Behavior, { label: string; cool: number }> = {
  swim: { label: 'Swim for safety', cool: 1.4 },
  tread: { label: 'Tread water / thrash to stay up', cool: 1.35 },
  help: { label: 'HELP posture (still, knees to chest, in PFD)', cool: 0.7 },
  huddle: { label: 'Huddle with others (in PFDs)', cool: 0.75 },
  climb: { label: 'Climb onto the upturned boat / debris', cool: 1 },
}

export interface Band {
  lo: number
  mid: number
  hi: number
}

export interface ColdWaterResult {
  /** 0 none … 3 severe. */
  shockSeverity: number
  shockMin: number
  /** Minutes of useful arm/hand function (swim failure). */
  swimFailure: Band
  /** Core cooling rate, °C per hour (in water, or out of it if climbed out). */
  coolRate: Band
  /** Minutes to 35 °C (mild hypothermia) and to ~30 °C (consciousness likely lost). */
  t35: Band
  t30: Band
  /** Time to reach safety by swimming (min), if swimming. */
  swimMin?: number
  reachesSafety?: 'likely' | 'uncertain' | 'unlikely'
  /** Minutes until the person can no longer help themselves or keep the airway clear. */
  incapacitation: Band
  notes: string[]
}

const PLATEAU_MIN = 10 // early minutes when the core barely changes (it may even rise slightly)

function band(mid: number, lo: number, hi: number): Band {
  return { lo, mid, hi }
}

export function coldWater(i: ColdWaterInput): ColdWaterResult {
  const c = CLOTHING[i.clothing]
  const b = BUILD[i.build]
  const notes: string[] = []
  const behavior: Behavior = !i.pfd && (i.behavior === 'help' || i.behavior === 'huddle') ? 'tread' : i.behavior
  if (behavior !== i.behavior) notes.push('HELP and huddle need flotation. Without a PFD you must tread water or hang on to something, which cools you faster.')

  // Cold shock: strongest below ~15 °C; reduced by protective suits.
  const raw = i.waterC >= 20 ? 0 : i.waterC >= 15 ? 1 : i.waterC >= 10 ? 2 : 3
  const shockSeverity = Math.round(raw * c.shock)
  const shockMin = shockSeverity === 0 ? 0 : 1 + shockSeverity * 0.5
  if (shockSeverity >= 2 && !i.pfd) notes.push('Without a PFD, the first minute is the most likely time to drown: the gasp reflex and hyperventilation make it hard to keep water out of the airway. Float first; get breathing under control.')
  if (shockSeverity >= 2 && i.pfd) notes.push('The PFD keeps your airway up through the gasp and hyperventilation. Float, calm your breathing, then decide.')

  // Swim failure / loss of useful muscle function.
  const sfMid = Math.max(5, (8 + 2.2 * Math.max(0, i.waterC)) * c.muscle * b.muscle * (behavior === 'swim' || behavior === 'tread' ? 0.8 : 1))
  const swimFailure = band(sfMid, sfMid * 0.6, sfMid * 1.4)

  // Core cooling rate.
  let rateMid: number
  if (behavior === 'climb') {
    // Out of the water but wet, in air and wind.
    rateMid = 0.025 * Math.max(0, 37 - i.airC) * (1 + i.wind / 40) * (0.4 + 0.6 * c.cool) * b.cool
    notes.push('Getting most of your body out of the water cuts heat loss sharply — water conducts heat about 25× faster than air. Do it early, while your arms still work.')
  } else {
    rateMid = 0.14 * Math.max(0, 37 - i.waterC) * c.cool * b.cool * BEHAVIOR[behavior].cool
  }
  rateMid = Math.max(0.05, rateMid)
  const coolRate = band(rateMid, rateMid * 0.6, rateMid * 1.6)
  const tTo = (drop: number, rate: number) => PLATEAU_MIN + (drop / rate) * 60
  // Faster cooling → earlier times, so lo time uses the high rate.
  const t35 = band(tTo(2, rateMid), tTo(2, coolRate.hi), tTo(2, coolRate.lo))
  const t30 = band(tTo(7, rateMid), tTo(7, coolRate.hi), tTo(7, coolRate.lo))

  let swimMin: number | undefined
  let reachesSafety: ColdWaterResult['reachesSafety']
  let incapacitation: Band
  if (behavior === 'swim') {
    const speed = i.pfd ? 0.25 : 0.4 // m/s, clothed, cold water (a PFD adds drag)
    swimMin = i.shoreM / speed / 60 + shockMin * 0.5
    reachesSafety = swimMin < swimFailure.lo ? 'likely' : swimMin < swimFailure.hi ? 'uncertain' : 'unlikely'
    if (reachesSafety === 'likely') notes.push('Safety is close enough to reach well inside the swim-failure window. Short, deliberate swims to a nearby exit can be the right call.')
    else notes.push('Swim failure is likely before you get there. Swimming also pumps cold water through your clothing and cools you faster.')
    // With a PFD you keep floating after swim failure, but you have cooled faster on the way.
    incapacitation = reachesSafety === 'likely' || i.pfd ? t30 : swimFailure
  } else if (i.pfd || behavior === 'climb') {
    incapacitation = t30
  } else {
    incapacitation = swimFailure
    notes.push('Without flotation, the end of useful muscle function is the end of staying afloat.')
  }
  if (behavior === 'help') notes.push('HELP protects the high-heat-loss areas (armpits, chest sides, groin) and keeps you still. Hayward’s studies estimated roughly 50 % longer predicted survival than treading water.')
  if (behavior === 'huddle') notes.push('A huddle shares warmth, keeps people together, makes a bigger target for rescuers and supports morale.')
  if (i.waterC <= 10 && i.clothing === 'light') notes.push('The 1-10-1 idea: about 1 minute of cold shock, about 10 minutes of meaningful movement, and up to about 1 hour before unconsciousness from hypothermia. Treat these as teaching anchors, not guarantees.')

  return { shockSeverity, shockMin, swimFailure, coolRate, t35, t30, swimMin, reachesSafety, incapacitation, notes }
}

/** Outcome of a behaviour against a rescue time: 2 = likely OK, 1 = uncertain, 0 = unlikely. */
export function outcome(r: ColdWaterResult, rescueMin: number): 0 | 1 | 2 {
  if (r.reachesSafety === 'likely') return 2
  // A long swim that may fail is a gamble even when a PFD keeps you afloat afterwards.
  const cap = r.reachesSafety ? 1 : 2
  if (r.incapacitation.lo > rescueMin) return Math.min(2, cap) as 1 | 2
  if (r.incapacitation.mid > rescueMin) return 1
  return 0
}

/** Score a scenario choice: 1 for the best behaviour, 0.5 for one with an equally good outcome, else 0. */
export function scoreChoice(s: ColdWaterScenario, b: Behavior): number {
  if (b === s.best) return 1
  const o = outcome(coldWater({ ...s.base, behavior: b }), s.rescueMin)
  const ob = outcome(coldWater({ ...s.base, behavior: s.best }), s.rescueMin)
  return o >= ob && o > 0 ? 0.5 : 0
}

export interface ColdWaterScenario {
  id: string
  title: string
  story: string
  base: Omit<ColdWaterInput, 'behavior'>
  rescueMin: number
  options: Behavior[]
  best: Behavior
  debrief: string
}

export const COLD_WATER_SCENARIOS: ColdWaterScenario[] = [
  {
    id: 'kayak',
    title: 'Capsized kayak on a spring lake',
    story: 'Your kayak flips 400 m from shore on an 8 °C lake. You wear a PFD and light clothing. The hull floats and you can drag your upper body onto it. Your friend on shore has called for help; a boat should reach you in about 45 minutes.',
    base: { waterC: 8, airC: 10, wind: 10, clothing: 'light', pfd: true, build: 'average', shoreM: 400 },
    rescueMin: 45,
    options: ['swim', 'help', 'climb'],
    best: 'climb',
    debrief: 'At 8 °C a 400 m swim in a PFD takes around 25–30 minutes — longer than the likely swim-failure window, and it speeds cooling. Getting as much of your body as possible onto the hull, early, while your arms still work, cuts heat loss the most and keeps you visible. HELP in the water is a reasonable second choice.',
  },
  {
    id: 'fishing',
    title: 'Fishing boat sinks offshore',
    story: 'A small fishing boat sinks 3 km offshore in 12 °C sea. The three of you wear PFDs and heavy clothing. A mayday went out; the lifeboat’s estimated arrival is 90 minutes.',
    base: { waterC: 12, airC: 12, wind: 20, clothing: 'heavy', pfd: true, build: 'average', shoreM: 3000 },
    rescueMin: 90,
    options: ['swim', 'help', 'huddle'],
    best: 'huddle',
    debrief: 'Three kilometres is far beyond anyone’s cold-water swim. Stay together and still: a huddle cuts heat loss like HELP and adds visibility and morale. Swimming for shore spends your muscle-function window and speeds cooling.',
  },
  {
    id: 'harbour',
    title: 'Slipped off a harbour wall',
    story: 'You slip off a harbour wall into 10 °C water. No PFD, light clothing. A ladder is 30 m away. Someone saw you fall and is calling for help; they estimate 20 minutes for a rescue boat.',
    base: { waterC: 10, airC: 12, wind: 10, clothing: 'light', pfd: false, build: 'average', shoreM: 30 },
    rescueMin: 20,
    options: ['swim', 'tread'],
    best: 'swim',
    debrief: 'First, float and get your breathing under control through the cold shock — do not thrash. Then a short, steady swim to a ladder 30 m away is well inside the swim-failure window. Without a PFD, waiting 20 minutes by treading water spends the same muscle function you would need to get out.',
  },
  {
    id: 'lake-night',
    title: 'Overboard at dusk, far from shore',
    story: 'You fall from a sailing dinghy 1.5 km from shore in 18 °C water, wearing a PFD and light clothing. The boat has drifted away. Your crew has called the coastguard; it may take 3 hours to find you in the dark.',
    base: { waterC: 18, airC: 16, wind: 15, clothing: 'light', pfd: true, build: 'average', shoreM: 1500 },
    rescueMin: 180,
    options: ['swim', 'help', 'tread'],
    best: 'help',
    debrief: 'Even “mild” 18 °C water cools you over hours. A 1.5 km swim in a PFD would take well over an hour and spend your energy and heat. Keep still in HELP, conserve heat, and use a whistle or light when you hear or see searchers.',
  },
]
