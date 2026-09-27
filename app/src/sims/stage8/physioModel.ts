// Physiology time-course model for the Stage 8 "Physiology Lab" simulation.
//
// It wraps the Stage 1 steady-state heat-exchange model (../heatModel) and integrates it over time,
// adding the body's own responses and the resources it spends:
//  - Core temperature: net heat storage / body heat capacity (mass × 3.5 kJ/(kg·°C)).
//  - Cold defence: vasoconstriction lowers dry heat loss (the Stage 1 model holds skin at 33 °C, which
//    overstates losses in the cold), and shivering adds heat when the core falls — fuelled by glycogen
//    and fading below ~33 °C core.
//  - Heat: sweating comes from the Stage 1 model; dehydration beyond ~2 % body mass reduces it, and the
//    lost cooling is stored as heat.
//  - Water: sweat + respiratory loss (+ more at altitude) + a small urine output, minus drinking
//    (limited by water carried).
//  - Energy: metabolic rate → kcal; a carbohydrate fraction that rises with intensity and shivering
//    draws on a ~2,000 kcal glycogen store; food refills it at a limited absorption rate.
//  - Sweat soaking into clothing in the cold turns dry clothing damp.
// Numbers are chosen to be directionally right and roughly the right size, for building intuition.
// They are not predictions for any individual and never a basis for medical decisions.

import { ACT, model } from '../heatModel'
import type { HBInput, Wet } from '../heatModel'

export type Food = 'none' | 'snacks' | 'meals'

export interface Phase {
  act: string
  hours: number
  /** Clothing insulation during this phase (clo); defaults to the input's clo. */
  clo?: number
}

export interface PhysioInput extends Omit<HBInput, 'act'> {
  phases: Phase[]
  /** Planned drinking rate, L/h (limited by waterL). */
  drinkLph: number
  /** Water carried at the start, L. */
  waterL: number
  food: Food
  /** Metres above sea level. */
  altitude: number
  mass?: number
  /** Glycogen at the start, % of a full store (default 90). */
  glycogenStart?: number
}

export const FOOD: Record<Food, { label: string; kcalph: number }> = {
  none: { label: 'Nothing', kcalph: 0 },
  snacks: { label: 'Snacks (~150 kcal/h)', kcalph: 150 },
  meals: { label: 'Regular eating (~300 kcal/h)', kcalph: 300 },
}

/** Full-store muscle + liver glycogen, kcal (~500 g × 4 kcal/g). */
export const GLYCOGEN_FULL = 2000

const CHO_FRACTION: Record<string, number> = { rest: 0.35, camp: 0.45, walk: 0.55, hard: 0.75 }
const SHIVER_MAX_W = 220
const DT_H = 1 / 12 // 5-minute steps

export interface Step {
  t: number // hours
  core: number
  conv: number
  rad: number
  cond: number
  evap: number
  sweat: number
  shiver: number
  metab: number
  dehydration: number // % body mass
  glycogen: number // % of full store
  kcal: number // cumulative
  waterLeft: number
  wet: Wet
  act: string
}

export interface Warning {
  t: number
  level: 'info' | 'warn' | 'danger'
  text: string
}

export interface PhysioResult {
  steps: Step[]
  warnings: Warning[]
  minCore: number
  maxCore: number
  final: Step
  drankL: number
  kcal: number
}

const clamp = (x: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, x))

export function totalHours(phases: Phase[]) {
  return phases.reduce((a, p) => a + p.hours, 0)
}

export function simulate(inp: PhysioInput): PhysioResult {
  const mass = inp.mass ?? 70
  const C = mass * 3500 // J per °C
  const hours = totalHours(inp.phases)
  const nSteps = Math.round(hours / DT_H)
  let core = 37
  let deficitL = 0
  let gly = GLYCOGEN_FULL * ((inp.glycogenStart ?? 90) / 100)
  let wet: Wet = inp.wet
  let sweatInClothes = 0
  let waterLeft = inp.waterL
  let kcal = 0
  let drank = 0
  let overdrinkH = 0
  const steps: Step[] = []
  const warnings: Warning[] = []
  const fired = new Set<string>()
  const warn = (key: string, t: number, level: Warning['level'], text: string) => {
    if (fired.has(key)) return
    fired.add(key)
    warnings.push({ t, level, text })
  }
  if (inp.altitude >= 2500) warn('alt', 0, 'warn', `Sleeping or resting at ${inp.altitude} m: hypoxia raises breathing water loss, cuts work capacity, and brings a risk of AMS after fast ascent (Lesson 8).`)

  const phaseAt = (t: number) => {
    let acc = 0
    for (const p of inp.phases) {
      acc += p.hours
      if (t < acc - 1e-9) return p
    }
    return inp.phases[inp.phases.length - 1]
  }

  const record = (t: number, s: Omit<Step, 't' | 'core' | 'dehydration' | 'glycogen' | 'kcal' | 'waterLeft' | 'wet'>) => {
    steps.push({ ...s, t, core, dehydration: (deficitL / mass) * 100, glycogen: (gly / GLYCOGEN_FULL) * 100, kcal, waterLeft, wet })
  }

  for (let i = 0; i <= nSteps; i++) {
    const t = i * DT_H
    const phase = phaseAt(Math.min(t, hours - 1e-6))
    const hb = model({ ...inp, clo: phase.clo ?? inp.clo, act: phase.act, wet })
    const met = ACT.find((a) => a.id === phase.act)?.met ?? 1
    const dh = (deficitL / mass) * 100
    const glyFrac = gly / GLYCOGEN_FULL

    // Low glycogen ("bonking") cuts the pace you can hold, so heat production from work falls.
    const bonk = glyFrac < 0.12 && met >= 3
    const M = hb.M * (bonk ? 0.75 : 1)

    // Dehydration beyond ~2 % reduces sweating; the cooling that is lost is stored as heat.
    const sweatFactor = dh > 2 ? Math.max(0.45, 1 - 0.09 * (dh - 2)) : 1
    const baseSweat = hb.sweat * sweatFactor

    // Breathing loss rises with altitude (more, drier air moved per minute).
    const altFactor = 1 + Math.max(0, inp.altitude) / 4000
    const eres = hb.eres * altFactor

    // Cold defence. The Stage 1 model holds skin at 33 °C; in reality skin and limbs cool as losses grow
    // (vasoconstriction), so the heat actually drawn from the body saturates: f shrinks large losses.
    const coldSide = hb.S < 0
    const grossLoss = hb.conv + hb.rad + hb.cond + eres + hb.wetEvap
    const f = coldSide ? 1 / (1 + Math.max(0, grossLoss - 150) / 600) : 1

    // Heat defence: as the core rises, skin blood flow (dry loss — only when air is cooler than skin)
    // and extra sweating (limited by humidity and hydration) remove more heat.
    const hot = Math.max(0, core - 37)
    const vasodil = hot * 60 * clamp((35 - inp.ta) / 20, 0, 1)
    const extraSweat = hot * 200 * clamp((1 - inp.rh / 100) * 1.2, 0.1, 1) * sweatFactor
    const sweat = baseSweat + extraSweat

    const dryShare = hb.conv + hb.rad > 1 ? hb.conv / (hb.conv + hb.rad) : 0.8
    const conv = hb.conv * f + vasodil * dryShare
    const rad = hb.rad * f + vasodil * (1 - dryShare)
    const cond = hb.cond * f
    const evap = (eres + hb.wetEvap) * f

    const foodKcalph = FOOD[inp.food].kcalph
    const foodHeat = (foodKcalph * 4184) / 3600 * 0.1 // thermic effect of food ≈ 10 %

    const netNoShiver = M + hb.solar + foodHeat - conv - rad - cond - evap - sweat

    // Shivering: driven by a falling core, limited by glycogen, fading in moderate hypothermia.
    let shiver = 0
    if (netNoShiver < 0 && core < 36.9) {
      const drive = clamp((36.9 - core) / 1.0, 0, 1)
      const fuel = clamp(glyFrac / 0.3, 0.15, 1)
      const fade = core < 33 ? clamp((core - 31) / 2, 0, 1) : 1
      const busy = met >= 3 ? 0.4 : 1
      shiver = Math.min(drive * SHIVER_MAX_W * fuel * fade * busy, -netNoShiver)
    }
    const net = netNoShiver + shiver

    record(t, { conv, rad, cond, evap, sweat, shiver, metab: M + shiver, act: phase.act })
    if (i === nSteps) break

    // --- integrate ---
    core = clamp(core + (net * DT_H * 3600) / C, 24, 43.5)

    const totalW = M + shiver
    const kcalStep = ((totalW * 3600) / 4184) * DT_H
    kcal += kcalStep
    const choFrac = shiver > 0 ? (CHO_FRACTION[phase.act] * M + 0.5 * shiver) / totalW : CHO_FRACTION[phase.act] ?? 0.4
    const glyGain = Math.min(foodKcalph * 0.6, 240) * DT_H
    gly = clamp(gly - kcalStep * choFrac + glyGain, 0, GLYCOGEN_FULL)

    const urineLph = dh > 2 ? 0.02 : 0.05
    const lossLph = ((sweat + eres) * 3600) / 2.4e6 + urineLph
    const wantDrink = inp.drinkLph * DT_H
    const drink = Math.min(wantDrink, waterLeft)
    waterLeft -= drink
    drank += drink
    deficitL += lossLph * DT_H - drink
    if (deficitL < 0) deficitL = 0 // surplus is excreted (if sodium balance allows — see hyponatremia warning)
    if (inp.drinkLph > lossLph + 0.5 && drink > 0) overdrinkH += DT_H
    else overdrinkH = Math.max(0, overdrinkH - DT_H)
    if (wantDrink > 0 && waterLeft <= 1e-9 && inp.waterL > 0) warn('water-out', t, 'warn', 'Water carried has run out.')

    // Sweat soaking into clothing in the cold.
    if (inp.ta < 12 && sweat > 50 && inp.clo >= 1) {
      sweatInClothes += ((sweat * 3600) / 2.4e6) * DT_H * (inp.shell ? 0.6 : 0.4)
      if (wet === 'dry' && sweatInClothes > 0.2) {
        wet = 'damp'
        warn('sweat-wet', t, 'warn', 'Sweat has soaked your layers — clothing is now damp. When you stop, that moisture evaporates using your heat.')
      }
    }

    // --- warnings (first crossing only) ---
    const tn = t + DT_H
    const d2 = (deficitL / mass) * 100
    if (core < 36) warn('c36', tn, 'info', 'Core below 36 °C: cold stress — shivering, clumsy hands. Act now: insulate, shelter, eat.')
    if (core < 35) warn('c35', tn, 'warn', 'Core below 35 °C: mild hypothermia (WMS: 35–32 °C). Judgment and coordination are impaired.')
    if (core < 32) warn('c32', tn, 'danger', 'Core below 32 °C: moderate hypothermia — shivering may stop, consciousness falls. Handle gently; evacuate.')
    if (core < 28) warn('c28', tn, 'danger', 'Core below 28 °C: severe hypothermia — unconscious, high risk of cardiac arrest.')
    if (core > 38.5) warn('h385', tn, 'info', 'Core above 38.5 °C: significant heat strain. Slow down, seek shade, cool the skin.')
    if (core > 39.5) warn('h395', tn, 'warn', 'Core above 39.5 °C: heat exhaustion likely; heat-stroke risk climbing. Stop and cool.')
    if (core > 40) warn('h40', tn, 'danger', 'Core above 40 °C: heat-stroke range. Any confusion = heat stroke until proven otherwise — cool first (immersion), then evacuate.')
    if (d2 > 2) warn('d2', tn, 'info', 'Dehydration above 2 % of body mass: endurance and thinking measurably worse.')
    if (d2 > 4) warn('d4', tn, 'warn', 'Dehydration above 4 %: heat tolerance falls, sweating is reduced, heat illness more likely.')
    if (d2 > 6) warn('d6', tn, 'danger', 'Dehydration above 6 %: dangerous — collapse and heat stroke risk high.')
    if (gly / GLYCOGEN_FULL < 0.25) warn('g25', tn, 'warn', 'Glycogen below 25 %: pace and shivering capacity will start to fade. Eat carbohydrate.')
    if (gly / GLYCOGEN_FULL < 0.12) warn('g12', tn, 'danger', 'Glycogen nearly empty: "bonking" — you slow down and shivering weakens, so you cool faster.')
    if (overdrinkH >= 2 && inp.food === 'none') warn('hypoNa', tn, 'warn', 'You have been drinking far more than you lose, without food or salt, for hours — the pattern behind exercise-associated hyponatremia. Drink to thirst.')
  }

  const cores = steps.map((s) => s.core)
  return { steps, warnings, minCore: Math.min(...cores), maxCore: Math.max(...cores), final: steps[steps.length - 1], drankL: drank, kcal }
}

export interface PhysioChallenge {
  id: string
  title: string
  goal: string
  start: PhysioInput
  /** Inputs the learner may not change. */
  lock: (keyof PhysioInput | 'act1' | 'act2' | 'hours1' | 'hours2')[]
  check: (r: PhysioResult, i: PhysioInput) => boolean
}

export const PHYSIO_CHALLENGES: PhysioChallenge[] = [
  {
    id: 'moor',
    title: 'Challenge 1 — Soaked on the moor, waiting 6 h for rescue',
    goal: 'You are **resting** (injured ankle) at 5 °C in rain and a 30 km/h wind, soaked, in cotton. Keep your core **at or above 35.5 °C** for all 6 hours. Your pack has dry synthetic layers, a shell, a tarp and food. The weather and the activity are fixed.',
    start: { ta: 5, wind: 30, rh: 90, wet: 'soaked', fibre: 'cotton', clo: 1.0, shell: false, shelter: 'none', sky: 'overcast', phases: [{ act: 'rest', hours: 6 }], drinkLph: 0.1, waterL: 1, food: 'none', altitude: 300 },
    lock: ['ta', 'wind', 'rh', 'sky', 'altitude', 'act1', 'hours1', 'act2', 'hours2'],
    check: (r) => r.minCore >= 35.5,
  },
  {
    id: 'desert',
    title: 'Challenge 2 — Desert day with 5 L of water',
    goal: '42 °C, full sun, 15 % humidity, 10 hours until the cool of evening. You carry **5 L**. Finish with **dehydration under 3 %** and a **core that never exceeds 39 °C**. You choose activity, clothing, shade and drinking. Weather and water carried are fixed.',
    start: { ta: 42, wind: 10, rh: 15, wet: 'dry', fibre: 'cotton', clo: 0.4, shell: false, shelter: 'none', sky: 'sun', phases: [{ act: 'walk', hours: 10 }], drinkLph: 0.3, waterL: 5, food: 'snacks', altitude: 400 },
    lock: ['ta', 'wind', 'rh', 'sky', 'altitude', 'waterL', 'hours1', 'act2', 'hours2'],
    check: (r) => r.final.dehydration < 3 && r.maxCore <= 39,
  },
  {
    id: 'sweat-freeze',
    title: 'Challenge 3 — Climb, then wait, at −5 °C',
    goal: 'A 2-hour climb to a pass, then a 4-hour wait at the top for your partner. −5 °C, 20 km/h wind. Arrive at the end with a core **≥ 36.5 °C** and **glycogen ≥ 40 %**. Pace, layers, shell, shelter and food are yours; weather and phase durations are fixed.',
    start: { ta: -5, wind: 20, rh: 60, wet: 'dry', fibre: 'synthetic', clo: 2.8, shell: true, shelter: 'none', sky: 'overcast', phases: [{ act: 'hard', hours: 2 }, { act: 'rest', hours: 4 }], drinkLph: 0.25, waterL: 2, food: 'none', altitude: 1800 },
    lock: ['ta', 'wind', 'rh', 'sky', 'altitude', 'hours1', 'hours2'],
    check: (r) => r.final.core >= 36.5 && r.final.glycogen >= 40,
  },
  {
    id: 'arctic-night',
    title: 'Challenge 4 — Twelve-hour subarctic night',
    goal: '−20 °C, light wind, clear sky, 12 hours of darkness at rest. Keep the core **≥ 36 °C** all night and end with **glycogen ≥ 25 %**. You have winter clothing, a tarp, material for a bed, and food. Weather and activity are fixed.',
    start: { ta: -20, wind: 8, rh: 60, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: true, shelter: 'none', sky: 'night-clear', phases: [{ act: 'rest', hours: 12 }], drinkLph: 0.1, waterL: 2, food: 'none', altitude: 300, glycogenStart: 50 },
    lock: ['ta', 'wind', 'rh', 'sky', 'altitude', 'act1', 'hours1', 'act2', 'hours2'],
    check: (r) => r.minCore >= 36 && r.final.glycogen >= 25,
  },
]
