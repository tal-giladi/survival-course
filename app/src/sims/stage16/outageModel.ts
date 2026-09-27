// 72-hour outage model. A household of three (two adults, a 7-year-old) loses power at 18:00; the
// water pressure fails six hours later. An 84-year-old neighbour lives alone next door. The learner
// sets a policy every 6 hours; the model then runs hour by hour.
//
// Deliberately simple, directionally correct physics:
// - Indoor temperature relaxes toward (outdoor + gains) with a building time constant (Newton cooling).
// - Carbon monoxide: each hour the indoor CO level keeps half of itself (air exchange) plus the source.
//   A dose accumulates above 35 ppm and doubles while people sleep (no one notices symptoms).
// - Fridge warms toward room temperature; food is unsafe after more than 2 h above 4 °C.
//   A full freezer holds ~48 h if kept shut. (Agency figures: fridge ~4 h, full freezer ~48 h.)
// - Water: drinking + hygiene per person per day; toilets flush only with stored water.
// - Battery in Wh; lights and phones draw from it.

export type Season = 'winter' | 'summer'
export type ClimateChoice = 'none' | 'one-room' | 'passive' | 'gas-oven' | 'charcoal-indoors' | 'gen-garage' | 'gen-outside'
export type FoodChoice = 'fridge' | 'freezer-out' | 'freezer-in' | 'pantry'
export type WaterChoice = 'plan' | 'ration' | 'careless'
export type PowerChoice = 'conserve' | 'normal'
export type Action = 'fill' | 'neighbour' | 'radio' | 'text' | 'unplug' | 'coolbox' | 'collect' | 'shelter'

export interface Kit { coAlarm: boolean; generator: boolean; stove: boolean; radio: boolean }
export interface Decisions { climate: ClimateChoice; food: FoodChoice; water: WaterChoice; power: PowerChoice }

export interface LogEntry { hour: number; text: string; tone: 'info' | 'good' | 'warn' | 'bad' }

export interface OutageState {
  season: Season
  kit: Kit
  hour: number
  indoor: number
  felt: number
  outdoor: number
  potable: number
  bath: number
  fridgeKcal: number
  freezerKcal: number
  pantryKcal: number
  fridgeTemp: number
  fridgeAbove4: number
  freezerOpenings: number
  eaten: number
  wasted: number
  battery: number
  co: number
  coDose: number
  strain: number
  maxStrain: number
  neighbour: number
  maxNeighbour: number
  neighbourWithUs: boolean
  dehydration: number
  maxDehydration: number
  ill: boolean
  informed: boolean
  texted: boolean
  unplugged: boolean
  coolbox: boolean
  filled: boolean
  collected: boolean
  sheltered: boolean
  alarmEvents: number
  darkHours: number
  poorHygieneHours: number
  flags: string[]
  log: LogEntry[]
  history: { hour: number; felt: number; potable: number; co: number }[]
  done: boolean
  outcome: null | 'endured' | 'sheltered' | 'co-critical'
}

export const START_CLOCK = 18
export const END_HOUR = 72
export const BLOCK = 6
export const WATER_FAILS_AT = 6
export const SHELTER_OPENS_AT = 12
export const DISTRIBUTION_OPENS_AT = 24
export const PEOPLE = 3
export const KCAL_PER_PERSON_DAY = 1900
export const BATTERY_MAX = 60

export const clockOf = (hour: number) => (START_CLOCK + hour) % 24
export const clockLabel = (hour: number) => `Day ${Math.floor((START_CLOCK + hour) / 24) + 1}, ${String(clockOf(hour)).padStart(2, '0')}:00`

export function outdoorTemp(season: Season, hour: number): number {
  const c = clockOf(hour)
  const wave = Math.cos((2 * Math.PI * (c - 15)) / 24)
  return season === 'winter' ? -4 + 4 * wave : 30 + 7 * wave
}

export const isDark = (season: Season, hour: number) => {
  const c = clockOf(hour)
  return season === 'winter' ? c >= 17 || c < 7 : c >= 21 || c < 5
}
const isNight = (hour: number) => { const c = clockOf(hour); return c >= 23 || c < 7 }

export const CLIMATE_LABEL: Record<ClimateChoice, string> = {
  none: 'Carry on as normal — no special measures',
  'one-room': 'Everyone in one small room: doors shut, windows covered, layers, hats, sleeping bags',
  passive: 'Passive cooling: shade and shut windows by day, cross-ventilate at night, wet cloths, coolest room',
  'gas-oven': 'Heat the flat with the gas oven, door open',
  'charcoal-indoors': 'Bring the charcoal barbecue inside for heat',
  'gen-garage': 'Run the generator in the garage (door open) to power a heater/fan',
  'gen-outside': 'Run the generator outdoors, ≥ 6 m from doors and windows, cable to a heater/fan and the fridge',
}

export function climateOptions(season: Season, kit: Kit): ClimateChoice[] {
  const base: ClimateChoice[] = season === 'winter' ? ['none', 'one-room', 'gas-oven', 'charcoal-indoors'] : ['none', 'passive']
  return kit.generator ? [...base, 'gen-garage', 'gen-outside'] : base
}

export const FOOD_LABEL: Record<FoodChoice, string> = {
  fridge: 'Eat fridge perishables (door open as briefly as possible)',
  'freezer-out': 'Cook freezer food on the camping stove outdoors',
  'freezer-in': 'Cook freezer food on the camping stove in the kitchen',
  pantry: 'Eat shelf-stable pantry food',
}
export function foodOptions(kit: Kit): FoodChoice[] {
  return kit.stove ? ['fridge', 'freezer-out', 'freezer-in', 'pantry'] : ['fridge', 'pantry']
}

export const WATER_LABEL: Record<WaterChoice, string> = {
  plan: 'Planned: full drinking ration, minimal hygiene, flush only with bath/grey water or use a bucket toilet',
  ration: 'Ration hard: sips only, no washing',
  careless: 'As usual: wash, flush with whatever water is to hand',
}
export const POWER_LABEL: Record<PowerChoice, string> = {
  conserve: 'Conserve: phones on low-power/airplane, check news at set times, one light only when needed',
  normal: 'As usual: phones on, browsing, lights on in every room',
}

export const ACTION_LABEL: Record<Action, string> = {
  fill: 'Fill the bath and every clean container while the taps still run',
  neighbour: 'Check on the neighbour and bring her in with you',
  radio: 'Listen to the radio / official alerts',
  text: 'Text the out-of-area contact: “All OK, at home, next update 08:00”',
  unplug: 'Unplug appliances; leave one lamp switched on to show when power returns',
  coolbox: 'Move fridge and freezer food into a cool box outside (shaded, animal-proof)',
  collect: 'Collect water from the distribution point',
  shelter: 'Go to the warming/cooling centre (with kit, medicines, neighbour)',
}

export function availableActions(s: OutageState): Action[] {
  if (s.done) return []
  const out: Action[] = []
  if (!s.filled && s.hour < WATER_FAILS_AT) out.push('fill')
  if (!s.neighbourWithUs) out.push('neighbour')
  if (!s.informed) out.push('radio')
  if (!s.texted) out.push('text')
  if (!s.unplugged) out.push('unplug')
  if (s.season === 'winter' && !s.coolbox) out.push('coolbox')
  if (s.informed && s.hour >= DISTRIBUTION_OPENS_AT && !s.collected) out.push('collect')
  if (s.informed && s.hour >= SHELTER_OPENS_AT) out.push('shelter')
  return out
}

export function initialState(season: Season, kit: Kit): OutageState {
  const indoor = season === 'winter' ? 20 : 27
  return {
    season, kit, hour: 0, indoor, felt: indoor, outdoor: outdoorTemp(season, 0),
    potable: 12, bath: 0,
    fridgeKcal: 1800, freezerKcal: 6000, pantryKcal: 9000, fridgeTemp: 3, fridgeAbove4: 0, freezerOpenings: 0, eaten: 0, wasted: 0,
    battery: BATTERY_MAX, co: 0, coDose: 0,
    strain: 0, maxStrain: 0, neighbour: 0, maxNeighbour: 0, neighbourWithUs: false,
    dehydration: 0, maxDehydration: 0, ill: false, informed: false, texted: false, unplugged: false, coolbox: false,
    filled: false, collected: false, sheltered: false, alarmEvents: 0, darkHours: 0, poorHygieneHours: 0,
    flags: [], log: [{ hour: 0, text: 'The power goes out across the district. The radio later says repairs may take up to three days.', tone: 'info' }],
    history: [{ hour: 0, felt: indoor, potable: 12, co: 0 }],
    done: false, outcome: null,
  }
}

const clamp = (x: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, x))
const once = (s: OutageState, flag: string) => { if (s.flags.includes(flag)) return false; s.flags.push(flag); return true }
const note = (s: OutageState, text: string, tone: LogEntry['tone']) => { s.log.push({ hour: s.hour, text, tone }) }

function applyAction(s: OutageState, a: Action) {
  switch (a) {
    case 'fill':
      if (s.hour < WATER_FAILS_AT && !s.filled) {
        s.filled = true
        s.potable += 30
        s.bath += 150
        note(s, 'You fill pots, bottles and the bath: +30 L drinking water, +150 L for flushing and washing.', 'good')
      }
      break
    case 'neighbour':
      s.neighbourWithUs = true
      note(s, s.neighbour > 40
        ? 'Mrs Varga is confused and very ' + (s.season === 'winter' ? 'cold' : 'hot') + '. You bring her, her medicines and her glasses into your flat.'
        : 'Mrs Varga is glad of the knock. She joins you with her medicines, glasses and a blanket.', 'good')
      break
    case 'radio':
      if (s.kit.radio || s.battery > 0) {
        s.informed = true
        if (!s.kit.radio) s.battery = Math.max(0, s.battery - 1)
        note(s, `Radio: repairs may take up to 72 h. A warming/cooling centre opens at the community hall at hour ${SHELTER_OPENS_AT}; water distribution from hour ${DISTRIBUTION_OPENS_AT}.`, 'info')
      } else note(s, 'No radio and no battery: you cannot get official information.', 'warn')
      break
    case 'text':
      if (s.battery > 0) {
        s.texted = true
        s.battery = Math.max(0, s.battery - 0.3)
        note(s, 'Text sent to your out-of-area contact; she passes it on to the rest of the family.', 'good')
      } else note(s, 'Phones are flat. The message cannot be sent.', 'warn')
      break
    case 'unplug':
      s.unplugged = true
      note(s, 'Appliances unplugged; one lamp left on as a “power is back” signal.', 'good')
      break
    case 'coolbox':
      s.coolbox = true
      note(s, 'Food moved into cool boxes on the shaded, closed balcony. At −4 °C outside, it stays cold.', 'good')
      break
    case 'collect':
      s.collected = true
      s.potable += 20
      note(s, 'Two hours in the queue at the distribution point: +20 L of drinking water.', 'good')
      break
    case 'shelter':
      s.sheltered = true
      note(s, s.neighbourWithUs
        ? 'You go to the community hall with your kit, medicines and Mrs Varga, and register all four of you.'
        : 'You go to the community hall with your kit and medicines, and register.', 'good')
      break
  }
}

const HEAT_GAIN: Record<ClimateChoice, number> = { none: 0, 'one-room': 0, passive: 0, 'gas-oven': 14, 'charcoal-indoors': 10, 'gen-garage': 16, 'gen-outside': 16 }
const FELT_BONUS_WINTER: Record<ClimateChoice, number> = { none: 0, 'one-room': 8, passive: 0, 'gas-oven': 2, 'charcoal-indoors': 2, 'gen-garage': 2, 'gen-outside': 2 }
const CO_SOURCE: Record<ClimateChoice, number> = { none: 0, 'one-room': 0, passive: 0, 'gas-oven': 25, 'charcoal-indoors': 400, 'gen-garage': 300, 'gen-outside': 2 }

/** Advance one hour. Pure: returns a new state. */
export function stepHour(prev: OutageState, d: Decisions, cookedThisBlock: boolean): OutageState {
  const s: OutageState = { ...prev, flags: [...prev.flags], log: [...prev.log], history: [...prev.history] }
  if (s.done) return s
  const h = s.hour
  const winter = s.season === 'winter'
  const away = s.sheltered
  let climate: ClimateChoice = away ? 'none' : d.climate
  // After a CO alarm the fuel-burning source stays off for the rest of the block.
  if (s.flags.includes('co-lockout') && CO_SOURCE[climate] > 10) climate = winter ? 'one-room' : 'passive'
  s.outdoor = outdoorTemp(s.season, h)

  // --- House temperature (Newton cooling toward outdoor + gains).
  if (winter) {
    const gain = 2 + HEAT_GAIN[climate]
    s.indoor += (s.outdoor + gain - s.indoor) / 40
  } else {
    const c = clockOf(h)
    const day = c >= 9 && c < 19
    const passive = climate === 'passive'
    const solar = day ? (passive ? 1 : 6) : 0
    const tau = !day && passive ? 4 : 12
    s.indoor += (s.outdoor + solar - s.indoor) / tau
  }

  // --- Carbon monoxide.
  let source = CO_SOURCE[climate]
  if (cookedThisBlock && d.food === 'freezer-in' && !away) source += 60
  s.co = s.co * 0.5 + source
  if (!away && s.kit.coAlarm && s.co >= 70) {
    s.alarmEvents += 1
    note(s, `CO ALARM (${Math.round(s.co)} ppm)! Everyone out into fresh air; the source is switched off and windows opened.`, 'bad')
    s.co = 5
    climate = winter ? 'one-room' : 'passive'
    if (!s.flags.includes('co-lockout')) s.flags.push('co-lockout')
  }
  if (!away) {
    const excess = Math.max(0, s.co - 35) / 100
    s.coDose += excess * (isNight(h) ? 2 : 1)
    if (s.coDose >= 3 && once(s, 'co-symptoms')) note(s, 'Everyone has a headache and feels sick and sleepy. It could be flu — or carbon monoxide.', 'bad')
    if (s.coDose >= 12) {
      note(s, 'Carbon-monoxide poisoning: a neighbour finds the family unconscious and calls an ambulance.', 'bad')
      s.done = true
      s.outcome = 'co-critical'
    }
  }

  // --- Felt temperature and thermal strain.
  const hot = !winter
  let felt = s.indoor
  if (winter) felt += FELT_BONUS_WINTER[climate]
  else felt += climate === 'passive' ? -1 : climate === 'gen-outside' || climate === 'gen-garage' ? -3 : 0
  s.felt = away ? (winter ? 20 : 25) : felt
  if (!away) {
    if (!hot) s.strain = clamp(s.strain + (felt < 16 ? (16 - felt) * 0.25 : felt >= 18 ? -1 : 0))
    else s.strain = clamp(s.strain + (felt > 30 ? (felt - 30) * 0.35 : felt < 27 ? -1 : 0))
    if (s.ill) s.strain = clamp(s.strain + 0.3)
  }
  // Neighbour: alone she has only her own flat (same house temperature, a blanket).
  const nFelt = s.neighbourWithUs ? (away ? (winter ? 20 : 24) : felt) : s.indoor + (winter ? 3 : 0)
  const nThreshold = s.neighbourWithUs ? 15 : 18
  if (!hot) s.neighbour = clamp(s.neighbour + (nFelt < nThreshold ? (nThreshold - nFelt) * 0.4 : -1))
  else s.neighbour = clamp(s.neighbour + (nFelt > 29 ? (nFelt - 29) * 0.5 : -1))
  s.maxStrain = Math.max(s.maxStrain, s.strain)
  s.maxNeighbour = Math.max(s.maxNeighbour, s.neighbour)
  if (s.neighbour >= 100 && once(s, 'neighbour-critical')) note(s, `Mrs Varga collapses alone in her flat with ${winter ? 'hypothermia' : 'heat stroke'}. Another neighbour finds her hours later.`, 'bad')

  if (!away) {
    // --- Water.
    const n = PEOPLE + (s.neighbourWithUs ? 1 : 0)
    const tapOn = h < WATER_FAILS_AT
    const drinkPD = (hot ? 4 : 2.5) + (s.ill ? 1 : 0)
    const drinkNeed = (n * drinkPD) / 24
    let drinkGot = drinkNeed
    let hygiene = 0
    let flush = 0
    if (d.water === 'ration') { drinkGot = (n * 1.2) / 24 }
    if (d.water === 'plan') { hygiene = (n * 1) / 24 }
    if (d.water === 'careless') { hygiene = (n * 2) / 24; flush = (n * 3 * 6) / 24 }
    if (!tapOn) {
      // Flushing and part of hygiene come from the bath when possible.
      const fromBath = Math.min(s.bath, flush + hygiene / 2)
      s.bath -= fromBath
      let potableNeed = drinkGot + hygiene / 2 + (flush + hygiene / 2 - fromBath)
      if (s.potable < potableNeed && d.water !== 'careless' && s.bath > 0) {
        const move = Math.min(s.bath, 10)
        s.bath -= move
        s.potable += move
        if (once(s, 'bath-disinfect')) note(s, 'Bottled water gone: you disinfect bath water for drinking (unscented bleach, 30 min contact).', 'info')
      }
      if (s.potable >= potableNeed) s.potable -= potableNeed
      else {
        const frac = s.potable / potableNeed
        drinkGot *= frac
        potableNeed = s.potable
        s.potable = 0
        if (once(s, 'water-out')) note(s, 'The drinking water has run out.', 'bad')
      }
    }
    if (d.water === 'ration' || (hygiene === 0 && !tapOn) || (s.potable === 0 && !tapOn)) s.poorHygieneHours += 1
    const met = drinkNeed > 0 ? drinkGot / drinkNeed : 1
    s.dehydration = clamp(s.dehydration + (met < 0.99 ? (1 - met) * 1.5 : -0.5))
    s.maxDehydration = Math.max(s.maxDehydration, s.dehydration)
    if (s.dehydration >= 40 && once(s, 'dehydrated')) note(s, 'Dark urine, headaches and a listless child: the household is getting dehydrated.', 'bad')

    // --- Food.
    const needK = ((PEOPLE + (s.neighbourWithUs ? 0.8 : 0)) * KCAL_PER_PERSON_DAY) / 24
    const fridgeSafe = s.coolbox || s.fridgeAbove4 <= 2 || climate === 'gen-outside' || climate === 'gen-garage'
    const freezerSafe = s.coolbox || h < 48 - 2 * s.freezerOpenings + 6 || climate === 'gen-outside' || climate === 'gen-garage'
    const order: FoodChoice[] = [d.food, 'pantry', 'fridge', 'freezer-out']
    let got = 0
    for (const src of order) {
      if (got >= needK) break
      const take = needK - got
      if (src === 'fridge' && s.fridgeKcal > 0) {
        if (!fridgeSafe && d.food === 'fridge' && s.flags.includes('fridge-warm-at-block')) {
          const t = Math.min(take, s.fridgeKcal)
          s.fridgeKcal -= t
          got += t
          if (!s.ill) { s.ill = true; note(s, 'You ate fridge food that had been above 4 °C for hours. Vomiting and diarrhoea follow — and use extra water.', 'bad') }
        } else if (fridgeSafe) {
          const t = Math.min(take, s.fridgeKcal)
          s.fridgeKcal -= t
          got += t
        }
      } else if ((src === 'freezer-out' || src === 'freezer-in') && s.freezerKcal > 0 && s.kit.stove && freezerSafe) {
        const t = Math.min(take, s.freezerKcal)
        s.freezerKcal -= t
        got += t
      } else if (src === 'pantry' && s.pantryKcal > 0) {
        const t = Math.min(take, s.pantryKcal)
        s.pantryKcal -= t
        got += t
      }
    }
    s.eaten += got
  } else s.eaten += (PEOPLE * KCAL_PER_PERSON_DAY) / 24 // the shelter feeds you

  // Fridge and freezer physics continue whether or not anyone is home.
  if (!(climate === 'gen-outside' || climate === 'gen-garage') || away) {
    const room = s.coolbox ? Math.min(s.outdoor, 4) : s.indoor
    s.fridgeTemp += (room - s.fridgeTemp) / 60
    if (s.fridgeTemp > 4) s.fridgeAbove4 += 1
  }
  if (s.fridgeKcal > 0 && s.fridgeAbove4 > 2 && !s.coolbox && once(s, 'fridge-unsafe')) note(s, 'The fridge has been above 4 °C for more than 2 hours: what is left in it is no longer safe.', 'warn')
  if (s.freezerKcal > 0 && !s.coolbox && h >= 48 - 2 * s.freezerOpenings + 6 && once(s, 'freezer-thawed')) note(s, 'The freezer has thawed and warmed: remaining freezer food must be discarded.', 'warn')

  // --- Battery and light.
  if (!away) {
    const dark = isDark(s.season, h)
    const draw = d.power === 'conserve' ? 0.3 + (dark ? 0.6 : 0) : 2 + (dark ? 2.5 : 0)
    const charge = climate === 'gen-outside' || climate === 'gen-garage' ? 10 : 0
    s.battery = clamp(s.battery - draw + charge, 0, BATTERY_MAX)
    if (s.battery === 0 && dark) {
      s.darkHours += 1
      if (once(s, 'dark')) {
        note(s, 'Batteries are flat. In the dark, your child trips over a chair and cuts a knee.', 'bad')
        s.strain = clamp(s.strain + 5)
      }
    }
  }

  s.hour = h + 1
  s.history.push({ hour: s.hour, felt: Math.round(s.felt * 10) / 10, potable: Math.round(s.potable * 10) / 10, co: Math.round(s.co) })
  if (s.hour >= END_HOUR && !s.done) finish(s)
  return s
}

function finish(s: OutageState) {
  s.done = true
  s.outcome = s.outcome ?? (s.sheltered ? 'sheltered' : 'endured')
  const fridgeLeft = s.coolbox || s.fridgeAbove4 <= 2 ? 0 : s.fridgeKcal
  const freezerLeft = s.coolbox || s.hour < 48 - 2 * s.freezerOpenings + 6 ? 0 : s.freezerKcal
  s.wasted = Math.round(fridgeLeft + freezerLeft)
  note(s, s.unplugged ? 'Power returns. The lamp you left on tells you at once; appliances go back on one at a time.' : 'Power returns with a surge; the fridge’s electronics are damaged because everything was left plugged in.', s.unplugged ? 'good' : 'warn')
}

/** Run one 6-hour block: one-off actions first, then six hourly steps. */
export function runBlock(prev: OutageState, d: Decisions, actions: Action[]): OutageState {
  if (prev.done) return prev
  let s: OutageState = { ...prev, flags: prev.flags.filter((f) => f !== 'co-lockout'), log: [...prev.log], history: [...prev.history] }
  const allowed = availableActions(s)
  for (const a of actions) if (allowed.includes(a)) applyAction(s, a)
  s.flags = s.flags.filter((f) => f !== 'fridge-warm-at-block')
  if (!(s.coolbox || s.fridgeAbove4 <= 2)) s.flags.push('fridge-warm-at-block')
  if (d.food === 'fridge' && !s.coolbox) s.fridgeTemp += 0.3
  const cooks = d.food === 'freezer-in' || d.food === 'freezer-out'
  if (cooks && !s.coolbox) s.freezerOpenings += 1
  if (s.sheltered) {
    while (!s.done) s = stepHour(s, d, false)
    return s
  }
  for (let i = 0; i < BLOCK && !s.done; i++) s = stepHour(s, d, i === 0 && cooks)
  return s
}

export interface Breakdown { label: string; points: number }

export function scoreOutage(s: OutageState): { score: number; breakdown: Breakdown[]; lessons: string[] } {
  const b: Breakdown[] = []
  const lessons: string[] = []
  const add = (label: string, points: number) => { if (points > 0.5) b.push({ label, points: -Math.round(points) }) }
  add('Household cold/heat strain', s.maxStrain * 0.25)
  add('Neighbour cold/heat strain', s.maxNeighbour * 0.2 + (s.maxNeighbour >= 100 ? 10 : 0))
  add('Dehydration', s.maxDehydration * 0.2)
  add('Food poisoning', s.ill ? 12 : 0)
  const need = END_HOUR * (PEOPLE * KCAL_PER_PERSON_DAY) / 24
  add('Hunger (energy deficit)', Math.max(0, 1 - s.eaten / need) * 10)
  add('Food wasted', (s.wasted / 16800) * 5)
  add('Carbon-monoxide exposure', Math.min(25, s.coDose * 3) + s.alarmEvents * 5)
  add('Hours in the dark with no light', Math.min(8, s.darkHours * 0.5))
  add('Family not told you are safe', s.texted ? 0 : 4)
  add('No official information', s.informed ? 0 : 6)
  add('Appliances left plugged in', s.unplugged ? 0 : 3)
  let score = 100 + b.reduce((a, x) => a + x.points, 0)
  if (s.outcome === 'co-critical') score = Math.min(score, 5)
  score = Math.round(clamp(score))

  if (s.outcome === 'co-critical' || s.coDose >= 3) lessons.push('Fuel-burning heat indoors, a generator in a garage or a stove in the kitchen fills a home with odourless carbon monoxide. Generators only outdoors, at least 6 m (20 ft) from openings; battery CO alarms on every level.')
  if (s.alarmEvents > 0) lessons.push('The CO alarm saved you — but the right plan never sets it off.')
  if (s.maxStrain >= 30) lessons.push(s.season === 'winter' ? 'Concentrate people and heat: one small room, doors shut, windows covered, layers and sleeping bags — or go to a warming centre early.' : 'Keep heat out by day (shade, shut windows) and flush it out at night; above ~35 °C, fans alone are not enough — use a cooling centre.')
  if (s.maxNeighbour >= 50) lessons.push('Older people living alone are the most likely to die in outages and heatwaves. A knock on the door early is one of the highest-value actions there is.')
  if (!s.filled) lessons.push('When the power fails, water pressure often follows. Fill the bath and containers in the first hours.')
  if (s.maxDehydration >= 20) lessons.push('Do not ration drinking water below need; ration everything else (washing, flushing) instead.')
  if (s.ill) lessons.push('Eat fridge perishables first, keep the doors shut, and discard anything that has been above 4 °C for more than 2 hours.')
  if (s.wasted > 2000) lessons.push('Eat in order: fridge, then freezer, then pantry — pantry food keeps; perishables do not.')
  if (s.darkHours > 0) lessons.push('Conserve batteries from hour one: low-power mode, set check-in times, one light at a time.')
  if (!s.informed) lessons.push('A battery or wind-up radio is how you learn where shelters and water points are.')
  if (!s.texted) lessons.push('One short text to an out-of-area contact tells the whole family you are safe and costs almost no battery.')
  return { score, breakdown: b, lessons }
}

/** Convenience for tests and the "auto-run" of a fixed policy. */
export function runPolicy(season: Season, kit: Kit, policy: (s: OutageState) => { d: Decisions; actions: Action[] }): OutageState {
  let s = initialState(season, kit)
  while (!s.done) {
    const { d, actions } = policy(s)
    s = runBlock(s, d, actions)
  }
  return s
}
