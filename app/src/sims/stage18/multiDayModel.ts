// Multi-day survival model. You are alone, with a sprained ankle, at a camp you cannot safely walk out
// from; searchers know your planned route. A search aircraft will overfly the area once; a ground team
// reaches you at the end of day 6 if nobody spots you first. Each day the learner assigns four work
// blocks and sets food, water, treatment, night and routine policy; the model then runs the day.
//
// Deliberately simple, directionally correct and documented so learners can critique it:
// - Energy (0–100) is an index of physical capacity, not a measurement. The first ~2,000 kcal of
//   cumulative deficit (roughly the glycogen stores, Stage 8) cost 25 points; every further 1,000 kcal
//   (mostly fat) costs 3. A day with under 300 kcal eaten costs a further 8 (low blood glucose), and
//   illness costs 10. Expenditure = 1,800 kcal (camp life) + 350 per heavy block + 150 per light block
//   + 15 kcal per point of night cold load (shivering).
// - Water: need = 2.5 L + environment heat + 0.3 L per heavy block (+0.5 L per heavy block in the
//   afternoon heat) + 1.5 L when ill. Drinking less than need costs 10 hydration points per litre short.
// - Warmth (0–100) is thermal status. Night cold load = environment cold (+ storm) − shelter × 0.4 −
//   gear × 0.15 − fire − 5 if you ate ≥ 500 kcal. A positive load lowers warmth; a negative one restores it.
//   In hot environments, heavy work in the afternoon adds heat strain.
// - Sleep hours depend on the night plan, the cold load, storms and illness; debt accrues above 7.5 h need.
// - Performance p (0.2–1) scales every task's output: energy, sleep debt and morale all feed it.
// - Morale moves with routine, food, sleep, warmth, illness and visible progress. Below 25 you lose one
//   work block a day to apathy.
// - Untreated water (no boiling, filter or tablets) makes you ill the next day for two days; only rain
//   caught directly on a clean tarp counts as safe. In the subarctic every litre must first be melted
//   (fuel), and hollow-fibre filters are damaged by freezing, so no filter is available there.
// - The aircraft spots you only if signal readiness is ≥ 60 on its day (no flying in a storm).

export type EnvId = 'forest' | 'tropical' | 'arctic' | 'coastal'
export type Task = 'water' | 'wood' | 'shelter' | 'repair' | 'signal' | 'food' | 'rest'
export type Ration = 'none' | 'low' | 'half' | 'full'
export type Drinking = 'need' | 'save'
export type Treatment = 'boil' | 'filter' | 'tablets' | 'none'
export type Night = 'watch' | 'banked' | 'none'

export interface DayPlan {
  /** Morning 1, morning 2, afternoon 1, afternoon 2. */
  blocks: [Task, Task, Task, Task]
  ration: Ration
  drinking: Drinking
  treatment: Treatment
  night: Night
  routine: boolean
}

export interface Env {
  label: string
  /** Night cold load before shelter, gear and fire (≈ how hard the night is). */
  cold: number
  /** Extra cold load on the storm day. */
  stormCold: number
  /** Extra litres a day needed just from climate. */
  heatWater: number
  /** Heat strain per heavy afternoon block (0 = not hot). */
  heat: number
  /** Wetness 0–1: gear wear per day = wet × 6. */
  wet: number
  /** Litres of raw water one water block yields at full performance. */
  waterYield: number
  /** Fuel units (≈ hours of fire) one wood block yields at full performance. */
  fuelYield: number
  /** Fuel units needed per litre to boil (or melt) water. */
  boilFuel: number
  /** Extra fuel per litre just to melt snow, whatever the treatment (subarctic). */
  meltFuel: number
  /** Shelter points one shelter block adds at full performance (snow is abundant insulation). */
  shelterGain: number
  /** Litres caught free from rain on the tarp on rainy days. */
  rainCatch: number
  rainDays: number[]
  stormDay: number
  /** Expected kcal one food-getting block yields at full performance (legal passive fishing etc.). */
  foodYield: number
  /** Untreated water here makes you ill. */
  dirtyWater: boolean
  filterWorks: boolean
  startWarmth: number
  startShelter: number
}

export const ENVS: Record<EnvId, Env> = {
  forest: {
    label: 'Temperate forest in autumn (2–12 °C, frequent rain)',
    cold: 40, stormCold: 25, heatWater: 0, heat: 0, wet: 0.5, waterYield: 6, fuelYield: 6, boilFuel: 0.4, meltFuel: 0,
    shelterGain: 20, rainCatch: 2, rainDays: [2, 3], stormDay: 3, foodYield: 250, dirtyWater: true, filterWorks: true, startWarmth: 80, startShelter: 40,
  },
  tropical: {
    label: 'Tropical rainforest (24–32 °C, humid, daily downpours)',
    cold: 8, stormCold: 12, heatWater: 1.5, heat: 8, wet: 0.9, waterYield: 6, fuelYield: 4, boilFuel: 0.4, meltFuel: 0,
    shelterGain: 20, rainCatch: 3, rainDays: [1, 2, 3, 4, 5, 6], stormDay: 4, foodYield: 200, dirtyWater: true, filterWorks: true, startWarmth: 85, startShelter: 35,
  },
  arctic: {
    label: 'Subarctic winter (−25 to −10 °C, snow, short days)',
    cold: 55, stormCold: 20, heatWater: 0, heat: 0, wet: 0.15, waterYield: 5, fuelYield: 8, boilFuel: 0.2, meltFuel: 0.3,
    shelterGain: 30, rainCatch: 0, rainDays: [], stormDay: 3, foodYield: 100, dirtyWater: true, filterWorks: false, startWarmth: 75, startShelter: 45,
  },
  coastal: {
    label: 'Windy temperate coast (8–16 °C, sun and spray, little fresh water)',
    cold: 30, stormCold: 25, heatWater: 0.3, heat: 4, wet: 0.4, waterYield: 3, fuelYield: 5, boilFuel: 0.4, meltFuel: 0,
    shelterGain: 20, rainCatch: 5, rainDays: [4], stormDay: 4, foodYield: 400, dirtyWater: true, filterWorks: true, startWarmth: 80, startShelter: 35,
  },
}

export const TASK_LABEL: Record<Task, string> = {
  water: 'Collect and treat water',
  wood: 'Gather and process firewood',
  shelter: 'Improve shelter and bedding',
  repair: 'Maintain and repair gear (incl. filter backflush)',
  signal: 'Build and maintain signals',
  food: 'Food-getting (e.g., passive fishing where legal)',
  rest: 'Rest / nap in shelter',
}
export const HEAVY: Task[] = ['water', 'wood', 'shelter', 'food']
export const LIGHT: Task[] = ['repair', 'signal']
/** Tasks done outside and halved in a storm. */
const OUTSIDE: Task[] = ['water', 'wood', 'shelter', 'signal', 'food']

export const RATION_KCAL: Record<Ration, number> = { none: 0, low: 500, half: 1000, full: 2000 }
export const RATION_LABEL: Record<Ration, string> = {
  none: 'Eat nothing today',
  low: 'Low ration (~500 kcal)',
  half: 'Half ration (~1,000 kcal)',
  full: 'Full meals (~2,000 kcal)',
}
export const DRINKING_LABEL: Record<Drinking, string> = {
  need: 'Drink to need (ration sweat, not water)',
  save: 'Save water: sips only (≤ 1.5 L)',
}
export const TREATMENT_LABEL: Record<Treatment, string> = {
  boil: 'Boil (uses fuel)',
  filter: 'Filter (wears and clogs the filter)',
  tablets: 'Chemical tablets (1 per litre)',
  none: 'Drink it untreated',
}
export const NIGHT_LABEL: Record<Night, string> = {
  watch: 'Tend the fire all night (10 fuel, broken sleep)',
  banked: 'Insulated bed, fire banked at bedtime (5 fuel)',
  none: 'No fire tonight',
}

export const DAYS = 6
export const START_FOOD = 4000
export const WATER_CAP = 6
export const START_TABLETS = 10
export const SIGNAL_NEEDED = 60

export interface LogEntry { day: number; text: string; tone: 'info' | 'good' | 'warn' | 'bad' }
export interface DaySnapshot { day: number; energy: number; hydration: number; warmth: number; sleepDebt: number; morale: number; gear: number }

export interface MDState {
  env: EnvId
  day: number
  energy: number
  hydration: number
  warmth: number
  sleepDebt: number
  morale: number
  gear: number
  shelter: number
  signal: number
  fuel: number
  water: number
  food: number
  tablets: number
  filter: number
  cumDeficit: number
  illDays: number
  everIll: boolean
  minHydration: number
  minWarmth: number
  minMorale: number
  maxSleepDebt: number
  foodBlocks: number
  foodGot: number
  aircraftSeen: boolean | null
  log: LogEntry[]
  history: DaySnapshot[]
  done: boolean
  outcome: null | 'rescued' | 'found' | 'critical'
}

export const clamp = (x: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, x))
const r1 = (x: number) => Math.round(x * 10) / 10

export const aircraftDay = (env: EnvId) => (ENVS[env].stormDay === 3 ? 4 : 3)

export function initialState(env: EnvId): MDState {
  const e = ENVS[env]
  const s: MDState = {
    env, day: 1, energy: 100, hydration: 90, warmth: e.startWarmth, sleepDebt: 2, morale: 60, gear: 80,
    shelter: e.startShelter, signal: 10, fuel: 2, water: 2, food: START_FOOD, tablets: START_TABLETS, filter: e.filterWorks ? 100 : 0,
    cumDeficit: 0, illDays: 0, everIll: false, minHydration: 90, minWarmth: e.startWarmth, minMorale: 60, maxSleepDebt: 2,
    foodBlocks: 0, foodGot: 0, aircraftSeen: null, log: [], history: [], done: false, outcome: null,
  }
  s.history.push(snap(s, 0))
  return s
}

function snap(s: MDState, day: number): DaySnapshot {
  return { day, energy: Math.round(s.energy), hydration: Math.round(s.hydration), warmth: Math.round(s.warmth), sleepDebt: r1(s.sleepDebt), morale: Math.round(s.morale), gear: Math.round(s.gear) }
}

/** Performance multiplier for today's work. */
export function performance(s: Pick<MDState, 'energy' | 'sleepDebt' | 'morale'>): number {
  const p = (0.4 + 0.6 * s.energy / 100) * (1 - Math.min(0.4, s.sleepDebt * 0.03)) * (0.75 + 0.25 * s.morale / 100)
  return clamp(p, 0.2, 1)
}

/** Energy index from cumulative deficit, today's intake and illness. */
export function energyIndex(cumDeficit: number, intakeToday: number, ill: boolean): number {
  const glycogen = 25 * Math.min(cumDeficit, 2000) / 2000
  const fat = 3 * Math.max(0, cumDeficit - 2000) / 1000
  return clamp(100 - glycogen - fat - (intakeToday < 300 ? 8 : 0) - (ill ? 10 : 0))
}

/** Water need for the day in litres. */
export function waterNeed(env: EnvId, blocks: Task[], ill: boolean): number {
  const e = ENVS[env]
  const heavy = blocks.filter((b) => HEAVY.includes(b)).length
  const heavyPm = blocks.slice(2).filter((b) => HEAVY.includes(b)).length
  return 2.5 + e.heatWater + 0.3 * heavy + (e.heat > 0 ? 0.5 * heavyPm : 0) + (ill ? 1.5 : 0)
}

export const isStorm = (s: Pick<MDState, 'env' | 'day'>) => ENVS[s.env].stormDay === s.day
export const isRainy = (s: Pick<MDState, 'env' | 'day'>) => ENVS[s.env].rainDays.includes(s.day)

export function treatmentOptions(env: EnvId): Treatment[] {
  return ENVS[env].filterWorks ? ['boil', 'filter', 'tablets', 'none'] : ['boil', 'tablets', 'none']
}

/** What the sky and the radio say about a given day (told the evening before; weather lore from Stage 12). */
export function forecast(env: EnvId, day: number): string {
  const e = ENVS[env]
  if (e.stormDay === day) return `Day ${day}: high cloud thickening from the west and the wind backing — expect a storm. Stock fuel and secure the shelter before it arrives.`
  if (aircraftDay(env) === day) return `Day ${day} looks flyable: a search aircraft may overfly. Signals must be ready before it comes.`
  return `Day ${day}: no big change in the weather expected.`
}

function note(s: MDState, text: string, tone: LogEntry['tone'] = 'info') { s.log.push({ day: s.day, text, tone }) }

/** Live one day under a plan. Pure: returns a new state. */
export function runDay(prev: MDState, plan: DayPlan): MDState {
  if (prev.done) return prev
  const s: MDState = { ...prev, log: [...prev.log], history: [...prev.history] }
  const e = ENVS[s.env]
  const storm = isStorm(s)
  const ill = s.illDays > 0
  const blocks = [...plan.blocks] as Task[]

  // Apathy: very low morale costs the last block of the day.
  if (s.morale < 25) {
    blocks[3] = 'rest'
    note(s, 'Morale is very low: by mid-afternoon you cannot make yourself do anything but lie in the shelter.', 'bad')
  }

  const p = performance(s)
  let raw = 0
  let heavy = 0
  let light = 0
  let heatStrain = 0
  let progress = false
  blocks.forEach((b, i) => {
    const f = p * (storm && OUTSIDE.includes(b) ? 0.5 : 1)
    if (HEAVY.includes(b)) heavy += 1
    if (LIGHT.includes(b)) light += 1
    if (i >= 2 && HEAVY.includes(b) && e.heat > 0) heatStrain += e.heat
    switch (b) {
      case 'water': raw += e.waterYield * f; break
      case 'wood': s.fuel += e.fuelYield * f; break
      case 'shelter': s.shelter = clamp(s.shelter + e.shelterGain * f); progress = true; break
      case 'repair': s.gear = clamp(s.gear + 20 * p); if (e.filterWorks) s.filter = clamp(s.filter + 25); progress = true; break
      case 'signal': s.signal = clamp(s.signal + 25 * f); progress = true; break
      case 'food': { const got = e.foodYield * f; s.food += got; s.foodGot += got; s.foodBlocks += 1; break }
      case 'rest': s.sleepDebt = Math.max(0, s.sleepDebt - 1); s.morale = clamp(s.morale + 1); break
    }
  })
  if (storm) note(s, 'Storm day: wind and rain halve everything you try to do outside.', 'warn')

  // Water treatment.
  let treated = 0
  let untreated = false
  if (raw > 0) {
    if (e.meltFuel > 0) {
      const melt = Math.min(raw, s.fuel / e.meltFuel)
      if (melt < raw) note(s, 'Not enough fuel to melt all the snow you gathered.', 'warn')
      raw = melt
      s.fuel -= melt * e.meltFuel
    }
    switch (plan.treatment) {
      case 'boil': {
        const can = Math.min(raw, s.fuel / e.boilFuel)
        if (can < raw) note(s, 'The fuel ran out before all the water was boiled.', 'warn')
        treated = can
        s.fuel -= can * e.boilFuel
        break
      }
      case 'filter':
        if (!e.filterWorks || s.filter <= 0) { note(s, e.filterWorks ? 'The filter is clogged solid — no treated water from it today.' : 'The filter froze and cracked: hollow-fibre filters fail in freezing temperatures.', 'bad'); treated = 0 }
        else { treated = raw * (s.filter >= 30 ? 1 : 0.5); s.filter = clamp(s.filter - raw * 2.5); if (s.filter < 30) note(s, 'The filter is clogging; flow is slow. Backflush it (maintenance block).', 'warn') }
        break
      case 'tablets':
        treated = Math.min(raw, s.tablets)
        s.tablets -= Math.ceil(treated)
        s.tablets = Math.max(0, s.tablets)
        if (treated < raw) note(s, 'Out of tablets for part of the water.', 'warn')
        break
      case 'none':
        treated = raw
        untreated = e.dirtyWater
        break
    }
  }
  const rain = isRainy(s) ? e.rainCatch : 0
  if (rain > 0) note(s, `Rain caught on the tarp: +${rain} L of clean water.`, 'good')
  s.water = Math.min(WATER_CAP, s.water + treated + rain)

  // Drinking.
  const need = waterNeed(s.env, blocks, ill)
  const drink = plan.drinking === 'need' ? Math.min(need, s.water) : Math.min(1.5, need, s.water)
  s.water -= drink
  if (drink >= need - 0.05) s.hydration = clamp(s.hydration + 10)
  else {
    s.hydration = clamp(s.hydration - (need - drink) * 10)
    note(s, `You drank ${r1(drink)} L of the ${r1(need)} L you needed.`, drink < need - 1 ? 'bad' : 'warn')
  }

  // Food.
  const intake = Math.min(RATION_KCAL[plan.ration], s.food)
  s.food -= intake

  // Night: fire, cold, sleep.
  const fuelNeed = plan.night === 'watch' ? 10 : plan.night === 'banked' ? 5 : 0
  const fireFrac = fuelNeed ? Math.min(1, s.fuel / fuelNeed) : 0
  s.fuel = Math.max(0, s.fuel - fuelNeed * fireFrac)
  if (fuelNeed && fireFrac < 1) note(s, 'The woodpile ran out in the night and the fire died.', 'warn')
  const fireHeat = plan.night === 'watch' ? 35 * fireFrac : plan.night === 'banked' ? 20 * fireFrac : 0
  const coldLoad = e.cold + (storm ? e.stormCold : 0) - s.shelter * 0.4 - s.gear * 0.15 - fireHeat - (intake >= 500 ? 5 : 0)
  if (coldLoad > 0) s.warmth = clamp(s.warmth - coldLoad * 0.6)
  else s.warmth = clamp(s.warmth + Math.min(15, -coldLoad * 0.5))
  if (heatStrain > 0) {
    s.warmth = clamp(s.warmth - heatStrain)
    note(s, 'Heavy work in the afternoon heat left you overheated and soaked in sweat.', 'warn')
  }
  if (coldLoad > 10) note(s, 'A cold night: long spells of shivering.', coldLoad > 25 ? 'bad' : 'warn')
  let sleep = (plan.night === 'watch' ? 5 : 7) - Math.max(0, coldLoad) / 10 - (ill ? 1 : 0) - (storm && s.shelter < 60 ? 1.5 : 0)
  sleep = clamp(sleep, 2, 8)
  s.sleepDebt = Math.max(0, s.sleepDebt + 7.5 - sleep)

  // Energy ledger.
  const spent = 1800 + heavy * 350 + light * 150 + Math.max(0, coldLoad) * 15
  s.cumDeficit = Math.max(0, s.cumDeficit + spent - intake)

  // Gear and shelter wear.
  const wear = (e.wet * 6 + heavy * 1.5 + (storm ? 8 : 0)) * (plan.routine ? 0.8 : 1)
  s.gear = clamp(s.gear - wear)
  s.shelter = clamp(s.shelter - 4 - (storm ? (s.shelter < 60 ? 20 : 8) : 0) - (s.gear < 40 ? 4 : 0))
  s.signal = clamp(s.signal - 5)

  // Morale.
  const hot = fireFrac > 0 || (plan.treatment === 'boil' && treated > 0)
  let dm = plan.routine ? 4 : -3
  dm += intake >= 800 ? 2 : intake < 300 ? -5 : 0
  dm += hot ? 2 : 0
  dm -= s.sleepDebt * 0.8
  dm -= s.warmth < 50 ? 6 : 0
  dm -= ill ? 8 : 0
  dm -= s.hydration < 60 ? 4 : 0
  dm += progress ? 2 : 0
  s.morale = clamp(s.morale + dm)

  // Illness from untreated water starts tomorrow.
  if (s.illDays > 0) s.illDays -= 1
  if (untreated) {
    s.illDays = 2
    s.everIll = true
    note(s, 'You drank untreated water. Tomorrow brings cramps and diarrhoea.', 'bad')
  }

  s.energy = energyIndex(s.cumDeficit, intake, s.illDays > 0)

  s.minHydration = Math.min(s.minHydration, s.hydration)
  s.minWarmth = Math.min(s.minWarmth, s.warmth)
  s.minMorale = Math.min(s.minMorale, s.morale)
  s.maxSleepDebt = Math.max(s.maxSleepDebt, s.sleepDebt)
  s.history.push(snap(s, s.day))

  if (s.hydration <= 20 || s.warmth <= 20) {
    s.done = true
    s.outcome = 'critical'
    note(s, s.hydration <= 20 ? 'Severe dehydration: confused and dizzy, you can no longer look after yourself. The searchers find you in a critical state.' : (e.heat > 0 && heatStrain > 0 ? 'Heat illness: confused and vomiting, you can no longer look after yourself.' : 'Moderate hypothermia: you stop shivering effectively and become confused. The searchers find you in a critical state.'), 'bad')
    return s
  }

  if (s.day === aircraftDay(s.env)) {
    s.aircraftSeen = s.signal >= SIGNAL_NEEDED
    if (s.aircraftSeen) {
      s.done = true
      s.outcome = 'rescued'
      note(s, 'The aircraft banks, circles and rocks its wings — you have been seen. A helicopter lifts you out the next morning.', 'good')
      return s
    }
    note(s, 'An aircraft passes over the valley and flies on. Your signals were not ready.', 'bad')
  }

  if (s.day >= DAYS) {
    s.done = true
    s.outcome = 'found'
    note(s, 'Evening of day 6: the ground team walks into your camp.', 'good')
    return s
  }
  const f = forecast(s.env, s.day + 1)
  note(s, `Evening outlook — ${f}`, f.includes('no big change') ? 'info' : 'warn')
  s.day += 1
  return s
}

export interface Breakdown { label: string; points: number }

export function scoreMultiDay(s: MDState): { score: number; breakdown: Breakdown[]; lessons: string[] } {
  const b: Breakdown[] = []
  const add = (label: string, points: number) => { if (points > 0.5) b.push({ label, points: -Math.round(points) }) }
  add('Dehydration', Math.max(0, 80 - s.minHydration) * 0.4)
  add('Cold or heat strain', Math.max(0, 70 - s.minWarmth) * 0.45)
  add('Sleep debt', Math.min(15, Math.max(0, s.maxSleepDebt - 4) * 1.5))
  add('Low morale', Math.max(0, 60 - s.minMorale) * 0.3)
  add('Worn-out gear', Math.max(0, 60 - s.gear) * 0.25)
  add('Low energy', Math.max(0, 40 - s.energy) * 0.3)
  add('Waterborne illness', s.everIll ? 10 : 0)
  add('Missed the search aircraft', s.aircraftSeen === false ? 8 : 0)
  let score = 100 + b.reduce((a, x) => a + x.points, 0)
  if (s.outcome === 'critical') score = Math.min(score, 15)
  score = Math.round(clamp(score))

  const lessons: string[] = []
  const e = ENVS[s.env]
  if (s.minHydration < 60) lessons.push(e.heatWater > 0 ? 'In heat, water is the binding budget: drink to need, work in the cool morning and rest in the afternoon — ration sweat, not water.' : 'Drink to need. Rationing drinking water only moves the deficit into your body; ration effort and sweat instead.')
  if (s.minWarmth < 50) lessons.push(e.heat > 0 ? 'Heavy afternoon work in the heat stacks strain; move heavy tasks to the morning.' : 'Nights decide warmth: shelter and insulation first, a stocked woodpile before dark, and a meal before bed.')
  if (s.maxSleepDebt > 8) lessons.push('Sleep debt compounds: a better bed and a banked fire usually beat sitting up all night.')
  if (s.minMorale < 35) lessons.push('Morale is a resource: a fixed routine, visible progress, a hot drink and enough food keep it up; apathy costs whole work blocks.')
  if (s.gear < 50) lessons.push('Small daily maintenance is cheap; letting clothing, shelter and the filter wear out is expensive.')
  if (s.everIll) lessons.push('Untreated water turned a hard week into a sick one. Treat every litre; keep a backup method.')
  if (s.aircraftSeen === false) lessons.push('Signals take days to build and must be ready before the aircraft comes: plan several days ahead.')
  if (s.foodBlocks >= 3) lessons.push(`Food-getting returned ≈ ${Math.round(s.foodGot)} kcal for ${s.foodBlocks} heavy blocks (≈ ${s.foodBlocks * 350} kcal of effort). In a short wait, food-getting rarely pays.`)
  if (s.energy < 40) lessons.push('Pace the food: a steady small ration with a reserve beats feasting early and starving later.')
  return { score, breakdown: b, lessons }
}

/** Run a whole policy (used by tests and the auto-play comparison). */
export function runPolicy(env: EnvId, policy: (s: MDState) => DayPlan): MDState {
  let s = initialState(env)
  while (!s.done) s = runDay(s, policy(s))
  return s
}
