// Stranded-vehicle model. A solo driver is stranded far from help, either bogged in soft sand on a
// remote desert track (10:00, hot day) or slid into a ditch on a rural road in a blizzard (17:00).
// The learner chooses one activity per hour plus a drinking policy; the model runs the hour.
//
// Deliberately simple, directionally correct physics (assumptions stated so learners can critique them):
// - Body heat exchange reuses the Heat Balance Lab model (../heatModel): its storage term S (W) moves a
//   70 kg body's core temperature (245 kJ per °C), damped by half for vasomotor/behavioural adjustment.
//   In the cold, shivering adds up to 150 W of heat. Dehydration adds 0.15 °C to core per 1 % of body
//   mass lost (physiology texts give roughly 0.1–0.2 °C per %).
// - Water loss per hour is the heat model's sweat + respiratory water, plus a small urine/insensible loss.
// - A closed car in the sun heats well above the air: the cabin relaxes toward outdoor + 22 °C with a
//   30-minute time constant (field measurements show most of a ~22 °C / 40 °F rise within the first half hour).
// - A car in the cold loses heat fast: cabin temperature relaxes toward (outdoor + body heat + heater)
//   with a 2-hour time constant (3.5 h once windows and gaps are covered).
// - Carbon monoxide: each hour the cabin keeps a fraction of its CO (more with the window closed) and adds
//   the engine's leak. A snow-blocked tailpipe multiplies the source. Dose accumulates above 35 ppm and
//   doubles while asleep. Snow builds up at the tailpipe during the storm unless cleared.
// - Idle fuel use ≈ 1 L/h continuous, 0.2 L/h for 10-minute bursts (order-of-magnitude; varies by engine).
// - Being found is deterministic "search progress": 100 points = found. Rates depend on whether anyone
//   knows your route, daylight, whether you are at the vehicle, and signals.

import { model, type HBInput } from '../heatModel'

export type Scenario = 'desert' | 'winter'
export type Activity =
  | 'rest-shade' // desert: rest in shade beside the vehicle
  | 'rest-cabin' // desert: sit inside the closed car
  | 'rig-shade' // desert: rig a raised double-layer shade from the vehicle
  | 'dig' // desert: dig out / use traction boards
  | 'engine-ac' // desert: idle with air-conditioning
  | 'rest-huddle' // winter: stay inside, layers, blankets
  | 'insulate' // winter: cover windows and gaps, get sleeping gear out
  | 'clear-exhaust' // winter: go out and clear snow from the tailpipe (and roof)
  | 'engine-burst' // winter: run engine ~10 min this hour for heat
  | 'engine-continuous' // winter: keep the engine running all hour
  | 'signal' // both: set out signals (by day) or flash lights (at night)
  | 'plb' // both: activate a personal locator beacon / satellite messenger SOS
  | 'walk-out' // both: leave the vehicle and walk for help
export type Drink = 'need' | 'ration' | 'none'

export interface Kit {
  tripPlan: boolean // someone knows the route and when to raise the alarm
  plb: boolean // personal locator beacon or satellite messenger
  water: boolean // plenty of water (desert 20 L / winter 4 L) vs little (desert 3 L / winter 0.5 L)
  gear: boolean // desert: tarp/sheet + cord + hat; winter: sleeping bag, blankets, boots, hat, gloves
  tools: boolean // desert: shovel + traction boards; winter: snow shovel + brush
  coAlarm: boolean // portable battery CO alarm (winter)
  fuel: boolean // tank at least half full (25 L) vs near-empty (5 L)
}

export interface Choice { activity: Activity; drink: Drink; windowCracked: boolean }
export interface LogEntry { hour: number; text: string; tone: 'info' | 'good' | 'warn' | 'bad' }

export interface StrandedState {
  scenario: Scenario
  kit: Kit
  hour: number
  outdoor: number
  cabin: number
  core: number // thermal core temperature (°C), before the dehydration offset
  water: number // L carried
  drunk: number
  lost: number // cumulative body-water loss (L)
  fuel: number // L
  carBattery: number // %
  co: number // ppm in cabin
  coDose: number
  tailpipeSnow: number // cm
  damp: number // hours of damp clothing left (winter)
  shade: boolean
  insulated: boolean
  signals: boolean
  dig: number // 0-100
  plbAt: number | null
  walking: boolean
  walkedKm: number
  walkedHours: number
  search: number // 0-100
  minCore: number
  maxCore: number
  maxDehydration: number
  alarmEvents: number
  flags: string[]
  log: LogEntry[]
  history: { hour: number; core: number; water: number; cabin: number }[]
  done: boolean
  outcome: null | 'rescued' | 'self-rescued' | 'waiting' | 'critical'
  cause: null | 'heat' | 'cold' | 'co' | 'dehydration'
}

export const END_HOUR = 36
export const BODY_KG = 70
export const START_CLOCK: Record<Scenario, number> = { desert: 10, winter: 17 }
export const HELP_KM: Record<Scenario, number> = { desert: 35, winter: 15 }
/** Hour at which a search starts if someone holds your trip plan. */
export const SEARCH_START: Record<Scenario, number> = { desert: 12, winter: 12 }
export const SNOW_STOPS_AT = 12
export const TAILPIPE_BLOCKED_CM = 20
export const PLB_DELAY: Record<Scenario, number> = { desert: 6, winter: 7 }

export const clockOf = (s: Scenario, hour: number) => (START_CLOCK[s] + hour) % 24
export const clockLabel = (s: Scenario, hour: number) => `Day ${Math.floor((START_CLOCK[s] + hour) / 24) + 1}, ${String(clockOf(s, hour)).padStart(2, '0')}:00`
export const isDay = (s: Scenario, hour: number) => {
  const c = clockOf(s, hour)
  return s === 'desert' ? c >= 6 && c < 19 : c >= 8 && c < 16
}
const isSleepHour = (s: Scenario, hour: number) => { const c = clockOf(s, hour); return c >= 23 || c < 6 }

export function outdoorTemp(s: Scenario, hour: number): number {
  const c = clockOf(s, hour)
  const wave = Math.cos((2 * Math.PI * (c - 15)) / 24)
  return s === 'desert' ? 34 + 9 * wave : -13 + 4 * wave
}
export const windKmh = (s: Scenario, hour: number) => (s === 'desert' ? 10 : hour < SNOW_STOPS_AT ? 35 : 15)

export const ACTIVITY_LABEL: Record<Activity, string> = {
  'rest-shade': 'Rest in the shade beside the vehicle (raised off the ground if you can)',
  'rest-cabin': 'Sit inside the car with the windows up',
  'rig-shade': 'Rig a raised, double-layer shade off the vehicle (1 hour of work)',
  dig: 'Dig out: lower tyre pressure, dig in front of the wheels, place traction boards',
  'engine-ac': 'Idle the engine with the air-conditioning on',
  'rest-huddle': 'Stay inside: all layers on, hat, blankets, feet off the floor',
  insulate: 'Insulate the car: cover windows, stuff gaps, get the sleeping bag out (1 hour)',
  'clear-exhaust': 'Go out and clear snow from the tailpipe and roof',
  'engine-burst': 'Run the engine ~10 minutes for heat, then off',
  'engine-continuous': 'Keep the engine running for heat all hour',
  signal: 'Signal: hood up, bright cloth, ground signal/mirror by day; flash lights at night',
  plb: 'Activate the personal locator beacon / satellite SOS',
  'walk-out': 'Leave the vehicle and walk for help',
}

export const DRINK_LABEL: Record<Drink, string> = {
  need: 'Drink to need — replace what you sweat (ration sweat, not water)',
  ration: 'Ration: small sips only, to make it last',
  none: 'Do not drink — save it for later',
}

export function availableActivities(s: StrandedState): Activity[] {
  if (s.done) return []
  if (s.walking) return ['walk-out']
  const out: Activity[] = s.scenario === 'desert'
    ? ['rest-shade', 'rest-cabin', 'dig', 'engine-ac', 'signal']
    : ['rest-huddle', 'clear-exhaust', 'engine-burst', 'engine-continuous', 'signal']
  if (s.scenario === 'desert' && !s.shade) out.splice(2, 0, 'rig-shade')
  if (s.scenario === 'winter' && !s.insulated) out.splice(1, 0, 'insulate')
  if (s.kit.plb && s.plbAt === null) out.push('plb')
  out.push('walk-out')
  return out
}

export function initialState(scenario: Scenario, kit: Kit): StrandedState {
  const outdoor = outdoorTemp(scenario, 0)
  const cabin = scenario === 'desert' ? outdoor + 5 : 12
  return {
    scenario, kit, hour: 0, outdoor, cabin, core: 37,
    water: scenario === 'desert' ? (kit.water ? 20 : 3) : (kit.water ? 4 : 0.5),
    drunk: 0, lost: 0,
    fuel: kit.fuel ? 25 : 5, carBattery: 100, co: 0, coDose: 0, tailpipeSnow: 0, damp: 0,
    shade: false, insulated: false, signals: false, dig: 0, plbAt: null, walking: false, walkedKm: 0, walkedHours: 0,
    search: 0, minCore: 37, maxCore: 37, maxDehydration: 0, alarmEvents: 0, flags: [],
    log: [{
      hour: 0,
      text: scenario === 'desert'
        ? `10:00. Your car is bogged to the axles in soft sand on a remote track, ${HELP_KM.desert} km from the sealed highway. No phone signal. It is ${Math.round(outdoor)} °C and climbing.`
        : `17:00. In a whiteout your car slides into a ditch on a rural road, ${HELP_KM.winter} km from town. It will not drive out. No phone signal; −${Math.round(-outdoor)} °C, wind 35 km/h, heavy snow.`,
      tone: 'info',
    }],
    history: [{ hour: 0, core: 37, water: scenario === 'desert' ? (kit.water ? 20 : 3) : (kit.water ? 4 : 0.5), cabin }],
    done: false, outcome: null, cause: null,
  }
}

export const clamp = (x: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, x))
const once = (s: StrandedState, flag: string) => { if (s.flags.includes(flag)) return false; s.flags.push(flag); return true }
const note = (s: StrandedState, text: string, tone: LogEntry['tone']) => { s.log.push({ hour: s.hour, text, tone }) }

export const dehydrationPct = (s: StrandedState) => Math.max(0, s.lost - s.drunk) / BODY_KG * 100
/** Core temperature including the dehydration offset (heat only). */
export const coreTemp = (s: StrandedState) => s.core + (s.scenario === 'desert' ? 0.15 * dehydrationPct(s) : 0)

/** Heat-model inputs for one exposure context. */
function hb(s: StrandedState, where: 'shade' | 'sun' | 'cabin' | 'outside' | 'walk', act: string): HBInput {
  const desert = s.scenario === 'desert'
  const day = isDay(s.scenario, s.hour)
  const gearClo = desert ? (s.kit.gear ? 0.7 : 0.5) : 1.4 + (s.kit.gear ? 1.6 : 0) + (s.insulated ? 0.5 : 0)
  const base: HBInput = {
    ta: s.outdoor, wind: windKmh(s.scenario, s.hour), rh: desert ? 15 : 80, wet: s.damp > 0 ? 'damp' : 'dry',
    fibre: desert ? 'cotton' : 'synthetic', clo: gearClo, shell: !desert, act, shelter: 'none', sky: 'overcast',
  }
  if (where === 'cabin') return { ...base, ta: s.cabin, wind: 0, shelter: desert ? 'tarp' : 'tarp-bed', sky: 'overcast', rh: desert ? 10 : 60 }
  if (where === 'shade') return { ...base, shelter: 'tarp', sky: day ? 'sun' : 'night-clear' }
  if (where === 'sun') return { ...base, sky: day ? 'sun' : 'night-clear' }
  if (where === 'walk') return { ...base, act: 'walk', clo: desert ? gearClo : Math.min(gearClo, 2.2), sky: desert ? (day ? 'sun' : 'night-clear') : 'overcast', wet: desert ? 'dry' : 'damp' }
  return { ...base, clo: Math.min(gearClo, 2.2) } // outside in winter: sleeping bag stays in the car
}

function exposure(s: StrandedState, a: Activity): { S: number; water: number } {
  const desert = s.scenario === 'desert'
  const mix = (parts: [number, HBInput][]) => {
    let S = 0, water = 0
    for (const [w, i] of parts) { const r = model(i); S += w * r.S; water += w * r.waterLph }
    return { S, water }
  }
  if (s.walking || a === 'walk-out') {
    if (desert) return mix([[1, hb(s, 'walk', 'walk')]])
    // Deep snow is exhausting: after ~4 h the walker stops more and more often, soaked with sweat and snow.
    const tired = s.walkedHours >= 4
    const w: HBInput = { ...hb(s, 'walk', 'walk'), wet: s.walkedHours >= 3 ? 'soaked' : 'damp' }
    return tired ? mix([[0.5, w], [0.5, { ...w, act: 'rest' }]]) : mix([[1, w]])
  }
  if (desert) {
    const day = isDay(s.scenario, s.hour)
    switch (a) {
      case 'rest-shade':
        // A rigged double shade gives full shade; the car's own shadow moves and the ground radiates.
        return s.shade || !day ? mix([[1, hb(s, 'shade', 'rest')]]) : mix([[0.5, hb(s, 'shade', 'rest')], [0.5, hb(s, 'sun', 'rest')]])
      case 'rest-cabin':
      case 'plb':
        return mix([[1, hb(s, 'cabin', 'rest')]])
      case 'engine-ac':
        return mix([[1, { ...hb(s, 'cabin', 'rest'), ta: 26 }]])
      case 'dig':
        // Digging sand is hard work; in the sun the solar load comes on top.
        return mix([[1, hb(s, 'sun', 'hard')]])
      default: // rig-shade, signal
        return mix([[1, hb(s, 'sun', 'camp')]])
    }
  }
  switch (a) {
    case 'clear-exhaust':
      return mix([[s.kit.tools ? 0.25 : 0.4, hb(s, 'outside', 'camp')], [s.kit.tools ? 0.75 : 0.6, hb(s, 'cabin', 'rest')]])
    case 'signal':
      return isDay(s.scenario, s.hour) ? mix([[0.25, hb(s, 'outside', 'camp')], [0.75, hb(s, 'cabin', 'rest')]]) : mix([[1, hb(s, 'cabin', 'rest')]])
    case 'insulate':
      return mix([[1, hb(s, 'cabin', 'camp')]])
    default:
      return mix([[1, hb(s, 'cabin', 'rest')]])
  }
}

function applyOneOff(s: StrandedState, a: Activity) {
  const desert = s.scenario === 'desert'
  switch (a) {
    case 'rig-shade':
      if (s.kit.gear) { s.shade = true; note(s, 'You rig the tarp from the roof rack to the ground with a second sheet above it, and a seat cushion to sit on off the hot sand. Full shade from now on.', 'good') }
      else { s.shade = true; note(s, 'No tarp: you rig floor mats and a sun-shade against the car. Better than nothing — shade from now on, though it is patchy.', 'info') }
      break
    case 'insulate':
      s.insulated = true
      note(s, s.kit.gear ? 'Windows covered with the sun-shade and spare clothes, the sleeping bag out, a blanket under you. The cabin holds heat longer.' : 'You cover the windows with maps and floor mats and stuff clothes into the gaps. The cabin holds heat a little longer.', 'good')
      break
    case 'clear-exhaust':
      s.tailpipeSnow = 0
      if (!s.kit.tools) s.damp = 3
      if (once(s, 'cleared-roof')) s.flags.push('car-visible')
      note(s, s.kit.tools ? 'With the shovel you clear the tailpipe, around the car and the roof in a few minutes, then get back in.' : 'Clearing the tailpipe by hand takes longer; your gloves and sleeves are soaked with snow.', s.kit.tools ? 'good' : 'warn')
      break
    case 'signal':
      if (isDay(s.scenario, s.hour)) {
        s.signals = true
        note(s, desert ? 'Hood up, a large “V” of stones and the spare tyre’s cover laid out on open ground, the signal mirror ready.' : 'Hood up, a bright cloth tied to the antenna, snow cleared from the roof.', 'good')
      } else if (s.carBattery > 25) {
        s.carBattery -= 8
        s.flags.push('lights-this-hour')
        note(s, 'You flash the hazards and headlights at intervals and watch for lights.', 'info')
      } else note(s, 'The car battery is too low to spare for lights.', 'warn')
      break
    case 'plb':
      s.plbAt = s.hour
      note(s, `Beacon activated. The distress alert and position go to a rescue coordination centre; help can take hours to arrive (here about ${PLB_DELAY[s.scenario]} h). Stay put.`, 'good')
      break
    case 'walk-out':
      if (!s.walking) {
        s.walking = true
        note(s, `You leave the car and set off for help ${HELP_KM[s.scenario]} km away, carrying ${s.water.toFixed(1)} L of water.`, 'warn')
      }
      break
  }
}

/** Advance one hour with the given choice. Pure: returns a new state. */
export function stepHour(prev: StrandedState, c: Choice): StrandedState {
  const s: StrandedState = { ...prev, flags: prev.flags.filter((f) => f !== 'lights-this-hour'), log: [...prev.log], history: [...prev.history] }
  if (s.done) return s
  const desert = s.scenario === 'desert'
  const allowed = availableActivities(s)
  const a: Activity = allowed.includes(c.activity) ? c.activity : desert ? 'rest-shade' : 'rest-huddle'
  s.outdoor = outdoorTemp(s.scenario, s.hour)
  const day = isDay(s.scenario, s.hour)

  applyOneOff(s, a)

  // --- Engine and fuel.
  let engine: 'off' | 'burst' | 'on' = 'off'
  if (!s.walking && (a === 'engine-ac' || a === 'engine-continuous' || a === 'engine-burst')) {
    if (s.carBattery < 25 && s.fuel > 0) note(s, 'The engine will not turn over: the battery is too flat.', 'bad')
    else if (s.fuel <= 0) { if (once(s, 'no-fuel')) note(s, 'The tank is empty. No more heat or cooling from the engine.', 'bad') }
    else engine = a === 'engine-burst' ? 'burst' : 'on'
  }
  const burn = engine === 'on' ? 1 : engine === 'burst' ? 0.2 : 0
  s.fuel = Math.max(0, s.fuel - burn)
  if (engine !== 'off') s.carBattery = clamp(s.carBattery + (engine === 'on' ? 20 : 6))

  // --- Cabin temperature.
  if (desert) {
    const target = engine === 'on' ? 26 : day ? s.outdoor + 22 : s.outdoor
    s.cabin += (target - s.cabin) * (engine === 'on' ? 1 : 0.85)
  } else {
    const body = s.walking ? 0 : 4
    const heater = engine === 'on' ? 32 : engine === 'burst' ? 14 : 0
    const tau = engine === 'on' ? 1 : s.insulated ? 3.5 : 2
    s.cabin += (s.outdoor + body + heater - s.cabin) / tau
  }

  // --- Snow at the tailpipe, and carbon monoxide.
  if (!desert && s.hour < SNOW_STOPS_AT) s.tailpipeSnow += 3
  if (!desert && !s.walking) {
    const blocked = s.tailpipeSnow >= TAILPIPE_BLOCKED_CM
    const source = engine === 'on' ? (blocked ? 400 : 12) : engine === 'burst' ? (blocked ? 90 : 3) : 0
    const keep = c.windowCracked ? 0.3 : 0.6
    s.co = s.co * keep + source
    if (blocked && engine !== 'off' && once(s, 'blocked-warning')) note(s, 'Snow has drifted over the tailpipe. Exhaust is now forced under the car and into the cabin.', 'bad')
    if (s.kit.coAlarm && s.co >= 70) {
      s.alarmEvents += 1
      note(s, `CO ALARM (${Math.round(s.co)} ppm)! You switch off, open the doors, and clear the tailpipe.`, 'bad')
      s.co = 5
      s.tailpipeSnow = 0
    }
    const asleep = isSleepHour(s.scenario, s.hour) && (a === 'rest-huddle' || a === 'engine-continuous' || a === 'engine-burst')
    s.coDose += (Math.max(0, s.co - 35) / 100) * (asleep ? 2 : 1)
    if (s.coDose >= 3 && once(s, 'co-symptoms')) note(s, 'A pounding headache, nausea and sleepiness. Cold — or carbon monoxide?', 'bad')
    if (s.coDose >= 12) {
      note(s, 'Carbon-monoxide poisoning: you lose consciousness in the car.', 'bad')
      s.done = true; s.outcome = 'critical'; s.cause = 'co'
    }
  }
  // --- Body heat balance and water.
  const ex = exposure(s, a)
  let S = ex.S
  if (!desert && S < 0) S += Math.min(-S * 0.6, 150) // shivering
  const dCore = Math.max(-1.5, Math.min(1.5, (S * 3600) / 245000 * 0.5))
  s.core += dCore
  if (Math.abs(S) < 25) s.core += (37 - s.core) * 0.3
  if (s.damp > 0) s.damp -= 1
  const loss = ex.water + (desert ? 0.04 : 0.1)
  s.lost += loss
  const deficit = Math.max(0, s.lost - s.drunk)
  const want = c.drink === 'need' ? Math.min(deficit, loss + deficit * 0.3) : c.drink === 'ration' ? 0.1 : 0
  const drink = Math.min(s.water, want)
  s.water -= drink
  s.drunk += drink
  if (s.water <= 0.001 && once(s, 'water-out')) note(s, 'Your water has run out.', 'bad')
  const pct = dehydrationPct(s)
  s.maxDehydration = Math.max(s.maxDehydration, pct)
  const core = coreTemp(s)
  s.maxCore = Math.max(s.maxCore, core)
  s.minCore = Math.min(s.minCore, core)
  if (!s.done) {
    if (core >= 39 && once(s, 'heat-exhaustion')) note(s, 'Headache, dizziness, nausea, heavy sweating: heat exhaustion. Stop all work, get into the best shade, drink.', 'bad')
    if (core >= 40.5) { note(s, 'Confusion, then collapse: heat stroke.', 'bad'); s.done = true; s.outcome = 'critical'; s.cause = 'heat' }
    else if (pct >= 12) { note(s, 'Severe dehydration: you can no longer stand.', 'bad'); s.done = true; s.outcome = 'critical'; s.cause = 'dehydration' }
    if (!s.done && core <= 35.5 && once(s, 'cold-warning')) note(s, 'Violent shivering, clumsy fingers, slurred thoughts: you are becoming hypothermic.', 'bad')
    if (!s.done && core <= 32) { note(s, 'Shivering has stopped and you can no longer think clearly: severe hypothermia.', 'bad'); s.done = true; s.outcome = 'critical'; s.cause = 'cold' }
    if (pct >= 5 && once(s, 'dehydrated')) note(s, 'Dark urine, dry mouth, headache: you have lost about 5 % of your body weight in water.', 'warn')
  }

  // --- Self-rescue: digging out (desert) or walking.
  if (!s.done && desert && a === 'dig' && !s.walking) {
    s.dig = Math.min(100, s.dig + (s.kit.tools ? 50 : 20))
    if (s.dig >= 100 && s.fuel >= 4) {
      note(s, 'The car climbs out onto firmer ground. You drive slowly back along your own tracks to the highway.', 'good')
      s.done = true; s.outcome = 'self-rescued'
    } else if (s.dig >= 100) {
      if (once(s, 'free-no-fuel')) note(s, 'The car is free — but there is not enough fuel left to reach the highway. You stay with it.', 'bad')
    } else note(s, `Digging: about ${Math.round(s.dig)} % of the way to getting the car out.`, 'info')
  }
  if (!s.done && s.walking) {
    // Desert: rough track, slower in the dark. Winter: drifts and whiteout during the storm.
    const speed = desert ? 3 : s.hour < SNOW_STOPS_AT ? 1.2 : s.walkedHours >= 4 ? 1 : 2
    s.walkedKm += speed
    s.walkedHours += 1
    if (s.walkedKm >= HELP_KM[s.scenario]) {
      note(s, desert ? 'You reach the highway and flag down a truck.' : 'You stagger into the edge of town.', 'good')
      s.done = true; s.outcome = 'self-rescued'
    }
  }

  // --- Being found.
  if (!s.done) {
    const lights = s.flags.includes('lights-this-hour')
    const visibleCar = !desert ? s.hour >= SNOW_STOPS_AT || s.signals : true
    let rate = 0
    const searching = s.kit.tripPlan && s.hour >= SEARCH_START[s.scenario]
    if (s.walking) rate = searching ? (day ? 5 : 2) : day ? 1 : 0
    else if (searching) {
      if (day) rate = s.signals ? 50 : visibleCar ? 22 : 8
      else rate = lights ? 25 : 8
      if (!desert && !s.signals && !s.flags.includes('car-visible') && s.hour >= SNOW_STOPS_AT) rate *= 0.5 // a snow-covered car looks like a drift
    } else {
      // Nobody is looking: only passing traffic (and the plough after the storm).
      if (day) rate = desert ? (s.signals ? 3 : 1.5) : s.hour >= SNOW_STOPS_AT ? (s.signals ? 25 : 10) : 0
      else rate = lights ? 3 : 0
    }
    s.search = clamp(s.search + rate)
    if (s.plbAt !== null && s.hour + 1 - s.plbAt >= PLB_DELAY[s.scenario]) s.search = 100
    if (s.search >= 100) {
      note(s, s.walking ? 'A search team finds you on foot, far from your car.' : s.plbAt !== null ? 'A rescue team homes in on your beacon and reaches the car.' : desert ? 'A search aircraft circles, and a ground team reaches your car.' : 'Flashing orange lights: the plough and a police car stop at your car.', 'good')
      s.done = true; s.outcome = 'rescued'
    }
  }

  s.hour += 1
  s.history.push({ hour: s.hour, core: Math.round(coreTemp(s) * 100) / 100, water: Math.round(s.water * 10) / 10, cabin: Math.round(s.cabin * 10) / 10 })
  if (!s.done && s.hour >= END_HOUR) {
    s.done = true
    s.outcome = 'waiting'
    note(s, 'Thirty-six hours on, nobody has come yet.', 'warn')
  }
  return s
}

export interface Breakdown { label: string; points: number }

export function scoreStranded(s: StrandedState): { score: number; breakdown: Breakdown[]; lessons: string[] } {
  const b: Breakdown[] = []
  const lessons: string[] = []
  const add = (label: string, points: number) => { if (points > 0.5) b.push({ label, points: -Math.round(points) }) }
  const desert = s.scenario === 'desert'
  add('Heat strain', Math.max(0, s.maxCore - 37.8) * 18)
  add('Cold strain', Math.max(0, 36.2 - s.minCore) * 15)
  add('Dehydration', Math.max(0, s.maxDehydration - 2) * 5)
  add('Carbon-monoxide exposure', Math.min(25, s.coDose * 3) + s.alarmEvents * 5)
  if (s.walking && (s.kit.tripPlan || s.kit.plb)) add('Left the vehicle when help was coming to it', 15)
  else if (s.walking) add('Walked away from the vehicle', 5)
  if (s.plbAt === null && s.kit.plb) add('Carried a beacon but did not use it', 8)
  if (s.outcome === 'waiting') add('Still not found after 36 hours', 10)
  let score = 100 + b.reduce((x, y) => x + y.points, 0)
  if (s.outcome === 'critical') score = Math.min(score, 5)
  score = Math.round(clamp(score))

  if (s.cause === 'co' || s.coDose >= 3) lessons.push('A snow-blocked tailpipe sends exhaust into the cabin. Clear it before every engine run, run the engine only in short bursts, and crack a downwind window.')
  if (s.alarmEvents > 0) lessons.push('The CO alarm saved you — but clearing the tailpipe first means it never needs to.')
  if (s.maxCore >= 39 || s.cause === 'heat') lessons.push('In desert heat, rest in the shade through the middle of the day and save work for dawn, dusk and night. A closed car in the sun becomes an oven.')
  if (s.minCore <= 35.5 || s.cause === 'cold') lessons.push('Insulate yourself and the cabin: all layers, hat, feet off the floor, windows covered, a sleeping bag. Short, safe engine runs top up the heat.')
  if (s.maxDehydration >= 4 || s.cause === 'dehydration') lessons.push(desert ? 'Rationing water in the heat does not save you — the water in the bottle is useless if you collapse. Ration sweat (rest in shade), drink what you need.' : 'Cold air and shivering dry you out too; keep drinking.')
  if (s.walking) lessons.push(s.kit.tripPlan || s.kit.plb ? 'Searchers look for the vehicle on your planned route. It is shelter and a large signal; a walker is a tiny, moving target.' : 'Walking can be right when nobody knows where you are and help is reachable — but it is the highest-risk option. Travel only in the cool, with water, on a known route.')
  if (!s.kit.tripPlan) lessons.push('No trip plan: nobody raised the alarm. Leaving a route and return time with someone is what starts the search.')
  if (!s.signals && s.outcome !== 'self-rescued') lessons.push('Make the car visible: hood up, bright cloth, ground signals and a mirror by day, lights at night — searchers must notice you.')
  if (s.kit.plb && s.plbAt === null) lessons.push('A beacon is for exactly this: life at risk and no other way to call. Activate it early rather than late.')
  if (s.flags.includes('no-fuel') || s.flags.includes('free-no-fuel')) lessons.push(desert ? 'Fuel is your way out. Idling for air-conditioning burns about a litre an hour; once the car is free you need enough left to drive to help.' : 'Fuel is heat. Keep the tank at least half full in winter and budget engine time in short bursts.')
  return { score, breakdown: b, lessons }
}

/** Run a fixed policy to the end (tests and demos). */
export function runPolicy(scenario: Scenario, kit: Kit, policy: (s: StrandedState) => Choice): StrandedState {
  let s = initialState(scenario, kit)
  while (!s.done) s = stepHour(s, policy(s))
  return s
}
