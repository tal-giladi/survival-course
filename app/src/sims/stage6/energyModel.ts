// Energy Budget model — a deliberately simple, directionally correct multi-day energy ledger.
// Assumptions (documented so learners can critique them):
//  - Resting energy from Mifflin–St Jeor (1990): 10·kg + 6.25·cm − 5·age + 5 (men) / − 161 (women).
//  - Daily expenditure = BMR × physical-activity level (PAL) × environment factor + extra cost of food-getting.
//    PAL already includes the thermic effect of food. The environment factor lumps together shivering,
//    heavy clothing, snow travel and heat strain; real values depend strongly on clothing and shelter.
//  - Glycogen store ≈ 2,000 kcal for a 70 kg adult (≈500 g × 4 kcal/g), scaled by body mass.
//    On a deficit day about a third of the shortfall is drawn from glycogen until it is empty; the rest from fat
//    (≈7,700 kcal per kg of adipose tissue) and lean tissue (≈1,000 kcal per kg, mostly water) — 15 % lean
//    while glycogen lasts, 25 % once it is gone (the body makes glucose from protein).
//  - Food-getting yields are *expected values*: hours × catch probability per hour × kcal per catch ×
//    local richness, falling 8 % per day as nearby resources are depleted. Real days are lumpy: the
//    model also reports the chance of getting nothing at all.
//  - Performance (0–100) is an index, not a measurement: it falls with low glycogen, cumulative mass
//    loss and — in the cold — the loss of fuel for shivering.

export type Sex = 'male' | 'female'

export interface Profile {
  sex: Sex
  massKg: number
  heightCm: number
  age: number
  bodyFatPct: number
}

/** Mifflin–St Jeor resting energy expenditure, kcal/day. */
export function mifflinStJeor(p: Pick<Profile, 'sex' | 'massKg' | 'heightCm' | 'age'>): number {
  return 10 * p.massKg + 6.25 * p.heightCm - 5 * p.age + (p.sex === 'male' ? 5 : -161)
}

export const ACTIVITIES = {
  rest: { label: 'Rest in shelter, minimal work', pal: 1.3 },
  camp: { label: 'Camp work (fire, water, shelter upkeep)', pal: 1.55 },
  walk4: { label: 'Walk with pack ~4 h', pal: 1.85 },
  walk8: { label: 'Walk / ski out with pack ~8 h', pal: 2.3 },
} as const
export type ActivityId = keyof typeof ACTIVITIES

export const ENVIRONMENTS = {
  hot: { label: 'Hot (> 32 °C)', factor: 1.05 },
  temperate: { label: 'Temperate (10–25 °C)', factor: 1.0 },
  cool: { label: 'Cool (0–10 °C)', factor: 1.05 },
  cold: { label: 'Cold (−10–0 °C)', factor: 1.15 },
  severe: { label: 'Severe cold (< −15 °C)', factor: 1.25 },
} as const
export type EnvId = keyof typeof ENVIRONMENTS

/** Carried food type: how well it refills glycogen, and how much extra water digesting it needs. */
export const FOOD_TYPES = {
  mixed: { label: 'Mixed (bars, nuts, dried fruit)', glycogenRefill: 0.8, protein: false },
  carb: { label: 'Carbohydrate-rich (crackers, sweets, oats)', glycogenRefill: 1.0, protein: false },
  protein: { label: 'Protein-heavy (jerky, tinned meat)', glycogenRefill: 0.4, protein: true },
} as const
export type FoodType = keyof typeof FOOD_TYPES

export interface Acquisition {
  id: AcqId
  label: string
  /** Extra kcal per hour above the day's activity baseline. */
  costPerHour: number
  /** Probability per hour of a success. */
  pPerHour: number
  kcalPerSuccess: number
  maxHours: number
  /** No yield on the first day (gear must be placed and left). */
  delayed?: boolean
  note: string
}

export type AcqId = 'fishActive' | 'setLines' | 'insects' | 'knownPlants' | 'trapping' | 'stalking'

export const ACQUISITIONS: Acquisition[] = [
  { id: 'fishActive', label: 'Hook-and-line fishing (licensed water, kit hooks)', costPerHour: 80, pPerHour: 0.3, kcalPerSuccess: 160, maxHours: 6, note: 'Active fishing: you pay for every hour whether fish bite or not.' },
  { id: 'setLines', label: 'Tend passive set-lines (only where legal)', costPerHour: 40, pPerHour: 0.6, kcalPerSuccess: 200, maxHours: 2, delayed: true, note: 'Passive gear fishes while you rest; you pay only for tending. Illegal in many jurisdictions.' },
  { id: 'insects', label: 'Collect insects / grubs (legal, cooked)', costPerHour: 120, pPerHour: 0.9, kcalPerSuccess: 90, maxHours: 4, note: 'Reliable but small; depends heavily on season and warmth.' },
  { id: 'knownPlants', label: 'Gather wild food you already know expertly', costPerHour: 150, pPerHour: 0.8, kcalPerSuccess: 150, maxHours: 4, note: 'Only species you could already identify with certainty before this course — never from a course or app.' },
  { id: 'trapping', label: 'Small-game trapping (licensed & trained only — concept)', costPerHour: 100, pPerHour: 0.06, kcalPerSuccess: 700, maxHours: 3, delayed: true, note: 'Legal only in specific places and seasons with a licence; low success rates; lean meat.' },
  { id: 'stalking', label: 'Stalking game (licensed hunters only — concept)', costPerHour: 300, pPerHour: 0.02, kcalPerSuccess: 2000, maxHours: 6, note: 'High cost, rare success, and field-dressing and carrying cost more energy still.' },
]

export interface Scenario {
  id: string
  title: string
  brief: string
  env: EnvId
  days: number
  waterLimited: boolean
  carriedKcal: number
  /** Days (1-based) on which the plan demands a hard effort — performance on them matters most. */
  demandDays: number[]
  /** Local richness multiplier for each acquisition (0 = not available here). */
  richness: Record<AcqId, number>
  defaultActivities: ActivityId[]
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'boreal',
    title: 'Boreal lake, autumn — walk out on day 4',
    brief: 'Float-plane pickup failed. Nights near 0 °C, days 8 °C. You have a tarp, stove, 3,000 kcal of mixed food, a small fishing kit, and a lake beside camp. You will walk 20 km to a road on day 4.',
    env: 'cool',
    days: 4,
    waterLimited: false,
    carriedKcal: 3000,
    demandDays: [4],
    richness: { fishActive: 1, setLines: 1, insects: 0.3, knownPlants: 0.5, trapping: 1, stalking: 1 },
    defaultActivities: ['camp', 'camp', 'camp', 'walk8'],
  },
  {
    id: 'subarctic',
    title: 'Subarctic winter, −20 °C — ski out on day 3',
    brief: 'Snowmobile failure. Good clothing, a bivy, a stove with fuel for snow melting, 4,000 kcal of food. You must ski 25 km out on day 3. A frozen lake is nearby.',
    env: 'severe',
    days: 3,
    waterLimited: false,
    carriedKcal: 4000,
    demandDays: [3],
    richness: { fishActive: 0.4, setLines: 0.4, insects: 0, knownPlants: 0, trapping: 0.6, stalking: 0.6 },
    defaultActivities: ['camp', 'rest', 'walk8'],
  },
  {
    id: 'desert',
    title: 'Desert breakdown, 41 °C — wait with the vehicle',
    brief: 'Vehicle broken down on a remote track. 12 L of water for 3 days, 2,000 kcal of food (some jerky). A message is out; rescue is expected within 3 days. Water — not food — is the limiting resource.',
    env: 'hot',
    days: 3,
    waterLimited: true,
    carriedKcal: 2000,
    demandDays: [],
    richness: { fishActive: 0, setLines: 0, insects: 0.4, knownPlants: 0.2, trapping: 0.3, stalking: 0.3 },
    defaultActivities: ['rest', 'rest', 'rest'],
  },
  {
    id: 'coast',
    title: 'Tropical coast — 7 days to a supply boat',
    brief: 'A boat will call in 7 days. Rain water is plentiful. You have 2,500 kcal of food, fishing line and hooks, a machete and a tarp. Warm nights; reef fishing is good (and regulated).',
    env: 'hot',
    days: 7,
    waterLimited: false,
    carriedKcal: 2500,
    demandDays: [],
    richness: { fishActive: 1.4, setLines: 1.3, insects: 1, knownPlants: 0.8, trapping: 0.6, stalking: 0.4 },
    defaultActivities: ['camp', 'camp', 'camp', 'camp', 'camp', 'camp', 'camp'],
  },
]

export interface DayPlan {
  activity: ActivityId
  /** Planned kcal eaten from carried food that day. */
  ration: number
}

export interface Plan {
  profile: Profile
  foodType: FoodType
  days: DayPlan[]
  /** Hours per day spent on each acquisition, applied every day. */
  acqHours: Partial<Record<AcqId, number>>
}

export interface DayResult {
  day: number
  tdee: number
  acqCost: number
  acqYield: number
  eaten: number
  shortRation: boolean
  net: number
  glycogenPct: number
  fatKg: number
  leanLostKg: number
  massLossPct: number
  performance: number
  pNothing: number
  effects: string[]
}

export interface Result {
  bmr: number
  days: DayResult[]
  foodLeft: number
  totalAcqCost: number
  totalAcqYield: number
  score: number
  tips: string[]
}

const clamp = (x: number, a: number, b: number) => Math.max(a, Math.min(b, x))

/** Expected yield (kcal) of one acquisition on a given day (1-based), plus probability of getting nothing. */
export function acquisitionDay(a: Acquisition, hours: number, richness: number, day: number) {
  if (hours <= 0 || richness <= 0) return { cost: hours > 0 ? hours * a.costPerHour : 0, yield: 0, pNothing: 1 }
  const depletion = Math.pow(0.92, day - 1)
  const p = clamp(a.pPerHour * Math.min(1, richness), 0, 0.99)
  const active = a.delayed && day === 1 ? 0 : hours
  const expected = active * a.pPerHour * a.kcalPerSuccess * richness * depletion
  const pNothing = active === 0 ? 1 : Math.pow(1 - p, active)
  return { cost: hours * a.costPerHour, yield: expected, pNothing }
}

export function simulate(sc: Scenario, plan: Plan): Result {
  const bmr = mifflinStJeor(plan.profile)
  const envF = ENVIRONMENTS[sc.env].factor
  const food = FOOD_TYPES[plan.foodType]
  const gMax = 2000 * (plan.profile.massKg / 70)
  let g = gMax
  let fat = plan.profile.massKg * (plan.profile.bodyFatPct / 100)
  let lean = 0
  let foodLeft = sc.carriedKcal
  let lowGlyStreak = 0
  const days: DayResult[] = []
  let totalAcqCost = 0
  let totalAcqYield = 0

  for (let d = 1; d <= sc.days; d++) {
    const dp = plan.days[d - 1] ?? { activity: 'rest', ration: 0 }
    const base = bmr * ACTIVITIES[dp.activity].pal * envF
    let acqCost = 0
    let acqYield = 0
    let pNothing = 1
    let anyAcq = false
    for (const a of ACQUISITIONS) {
      const h = plan.acqHours[a.id] ?? 0
      if (h <= 0) continue
      const r = acquisitionDay(a, h, sc.richness[a.id], d)
      acqCost += r.cost
      acqYield += r.yield
      if (sc.richness[a.id] > 0) { pNothing *= r.pNothing; anyAcq = true }
    }
    if (!anyAcq) pNothing = 1
    totalAcqCost += acqCost
    totalAcqYield += acqYield
    const want = Math.max(0, dp.ration)
    const eaten = Math.min(want, foodLeft)
    foodLeft -= eaten
    const tdee = base + acqCost
    const net = eaten + acqYield - tdee

    if (net >= 0) {
      g = Math.min(gMax, g + net * food.glycogenRefill)
    } else {
      const deficit = -net
      // Food eaten today refills glycogen partly even on a deficit day (carbohydrate-rich food more).
      g = Math.min(gMax, g + eaten * 0.6 * food.glycogenRefill)
      const fromG = Math.min(g, deficit * 0.35)
      g -= fromG
      const rest = deficit - fromG
      const leanShare = g < gMax * 0.1 ? 0.25 : 0.15
      fat = Math.max(0, fat - (rest * (1 - leanShare)) / 7700)
      lean += (rest * leanShare) / 1000
    }

    const glyPct = g / gMax
    const massLost = plan.profile.massKg * (plan.profile.bodyFatPct / 100) - fat + lean
    const massLossPct = (massLost / plan.profile.massKg) * 100
    lowGlyStreak = glyPct < 0.2 ? lowGlyStreak + 1 : 0

    let perf = 100
    const effects: string[] = []
    if (glyPct < 0.5) {
      perf -= ((0.5 - glyPct) / 0.5) * 35
      if (glyPct < 0.2) effects.push('Glycogen nearly empty: heavy legs, “hitting the wall” on climbs, slower thinking.')
      else effects.push('Glycogen falling: endurance and pace are dropping.')
    }
    perf -= Math.min(35, massLossPct * 5)
    if (massLossPct > 3) effects.push(`About ${massLossPct.toFixed(1)} % of body mass lost: irritability, cold sensitivity, poorer judgment.`)
    if (lowGlyStreak >= 2) {
      perf -= 10
      effects.push('Several days without glycogen: fatigue compounds; accident risk rises.')
    }
    if ((sc.env === 'cold' || sc.env === 'severe' || sc.env === 'cool') && glyPct < 0.3) {
      perf -= sc.env === 'severe' ? 12 : 8
      effects.push('Low fuel in the cold: shivering is weaker and short-lived — hypothermia risk rises.')
    }
    if (dp.activity === 'walk8' && (plan.acqHours.stalking ?? 0) + (plan.acqHours.insects ?? 0) + (plan.acqHours.knownPlants ?? 0) + (plan.acqHours.fishActive ?? 0) > 3)
      effects.push('Long travel day plus food-getting: daylight and energy are over-committed.')
    if (want > eaten) effects.push('Carried food ran out — the planned ration could not be eaten.')
    perf = clamp(Math.round(perf), 0, 100)
    if (!effects.length) effects.push(net >= -300 ? 'Energy roughly balanced.' : 'Deficit covered from body stores — sustainable for a few days.')

    days.push({ day: d, tdee: Math.round(tdee), acqCost: Math.round(acqCost), acqYield: Math.round(acqYield), eaten: Math.round(eaten), shortRation: want > eaten, net: Math.round(net), glycogenPct: Math.round(glyPct * 100), fatKg: Math.round(fat * 10) / 10, leanLostKg: Math.round(lean * 100) / 100, massLossPct: Math.round(massLossPct * 10) / 10, performance: perf, pNothing: Math.round(pNothing * 100) / 100, effects })
  }

  // ---------- Score ----------
  const demand = sc.demandDays.length ? sc.demandDays : [sc.days]
  const demandPerf = Math.min(...demand.map((d) => days[d - 1].performance))
  const avgPerf = days.reduce((a, d) => a + d.performance, 0) / days.length
  let score = 40 * (demandPerf / 100) + 20 * (avgPerf / 100)
  const tips: string[] = []

  // Acquisition efficiency: effort that returns less than it costs is a loss, not a hedge.
  let effPts = 12
  if (totalAcqCost > 0) {
    const ratio = totalAcqYield / totalAcqCost
    effPts = 20 * clamp((ratio - 0.7) / 0.8, 0, 1)
    if (ratio < 1) tips.push(`Food-getting returned ${Math.round(totalAcqYield)} kcal for ${Math.round(totalAcqCost)} kcal spent — a net loss. Cut the low-return activities.`)
    else tips.push(`Food-getting returned ${Math.round(totalAcqYield)} kcal for ${Math.round(totalAcqCost)} kcal spent (×${ratio.toFixed(1)}). Expected values hide bad days — keep the reserve.`)
  }
  for (const a of ACQUISITIONS) if ((plan.acqHours[a.id] ?? 0) > 0 && sc.richness[a.id] === 0) tips.push(`${a.label}: not possible here — pure cost.`)
  score += effPts

  // Ration discipline.
  let ratPts = 20
  const ranOut = days.some((d) => d.shortRation)
  if (ranOut) { ratPts -= 10; tips.push('Food ran out before the end of the plan. Spread the ration and keep a small reserve for delays.') }
  const leftFrac = foodLeft / Math.max(1, sc.carriedKcal)
  if (leftFrac > 0.5 && demandPerf < 70) { ratPts -= 10; tips.push('You finished with most of your food while performance suffered on the day that mattered — food in the pack does no work.') }
  const d1 = plan.days[0]?.ration ?? 0
  if (sc.days >= 3 && d1 >= sc.carriedKcal * 0.6) { ratPts -= 5; tips.push('Most of the food eaten on day 1 leaves nothing for the hard day.') }
  score += Math.max(0, ratPts)

  // Water before food.
  if (sc.waterLimited) {
    const acqH = Object.values(plan.acqHours).reduce((a, h) => a + (h ?? 0), 0)
    if (acqH > 1) { score -= 10; tips.push('Water-limited heat: every hour of food-getting costs sweat you cannot replace. Rest in shade; food is not the priority.') }
    if (plan.foodType === 'protein') { score -= 5; tips.push('Protein-heavy food raises water needs (urea must be excreted). With little water, eat little and prefer carbohydrate.') }
  }
  if (sc.env === 'severe' || sc.env === 'cold') {
    const eatenNightBefore = sc.demandDays.map((d) => days[d - 2]?.eaten ?? 0)
    if (eatenNightBefore.some((k) => k < 800)) tips.push('Cold: eat a solid ration the day before the hard effort — fuel for shivering and for the skis.')
  }

  return { bmr: Math.round(bmr), days, foodLeft: Math.round(foodLeft), totalAcqCost: Math.round(totalAcqCost), totalAcqYield: Math.round(totalAcqYield), score: clamp(Math.round(score), 0, 100), tips }
}

/** Even ration: split the carried food across the days, holding back a reserve fraction. */
export function evenRation(sc: Scenario, reserve = 0.15): number {
  return Math.floor((sc.carriedKcal * (1 - reserve)) / sc.days / 50) * 50
}

export function defaultPlan(sc: Scenario, profile: Profile): Plan {
  const r = evenRation(sc)
  return { profile, foodType: 'mixed', days: sc.defaultActivities.map((a) => ({ activity: a, ration: r })), acqHours: {} }
}
