// Heat Balance Lab model — deliberately simple, directionally correct human heat exchange.
// Assumptions (documented so learners can critique them):
//  - Body surface area 1.8 m², mass 70 kg, heat capacity 3.5 kJ/(kg·°C) → 245 kJ per °C.
//  - Mean skin temperature fixed at 33 °C (real skin cools in the cold, which reduces losses somewhat).
//  - Convective coefficient h_c ≈ 3 + 8.3·√v (v in m/s), radiative h_r ≈ 4.7 W/(m²·K).
//  - Clothing insulation in clo (1 clo = 0.155 m²·K/W), reduced by wetness (by fibre) and wind penetration.
//  - Clear night sky adds an extra radiative sink; a roof removes it. Sun adds up to ~200 W unless shaded.
//  - Evaporation: respiration (Fanger), evaporation from wet clothing, and sweating limited by humidity and wind.

export type Fibre = 'cotton' | 'wool' | 'synthetic' | 'down'
export type Wet = 'dry' | 'damp' | 'soaked'
export type Shelter = 'none' | 'windbreak' | 'tarp' | 'tarp-bed'
export type Sky = 'night-clear' | 'overcast' | 'sun'

const WET: Record<Fibre, Record<Wet, number>> = {
  cotton: { dry: 1, damp: 0.55, soaked: 0.25 },
  wool: { dry: 1, damp: 0.8, soaked: 0.5 },
  synthetic: { dry: 1, damp: 0.85, soaked: 0.6 },
  down: { dry: 1, damp: 0.6, soaked: 0.2 },
}

export const ACT = [
  { id: 'rest', label: 'Resting / sitting', met: 1.0 },
  { id: 'camp', label: 'Light camp tasks', met: 2.0 },
  { id: 'walk', label: 'Walking with pack', met: 3.5 },
  { id: 'hard', label: 'Hard work / uphill', met: 6.0 },
]

export interface HBInput {
  ta: number
  wind: number
  rh: number
  wet: Wet
  fibre: Fibre
  clo: number
  shell: boolean
  act: string
  shelter: Shelter
  sky: Sky
}

export function model(i: HBInput) {
  const A = 1.8
  const tsk = 33
  const met = ACT.find((a) => a.id === i.act)!.met
  const M = met * 58 * A
  const shelterWind = i.shelter === 'none' ? 1 : i.shelter === 'windbreak' ? 0.35 : 0.3
  const v = (i.wind / 3.6) * shelterWind + (met > 2 ? 1 : 0.2) // m/s, including own movement
  const hc = 3 + 8.3 * Math.sqrt(v)
  const hr = 4.7
  const penetration = i.shell ? 1 / (1 + 0.004 * i.wind * shelterWind) : 1 / (1 + 0.025 * i.wind * shelterWind)
  const cloEff = i.clo * WET[i.fibre][i.wet] * penetration
  const Rcl = 0.155 * cloEff
  const Ra = 1 / (hc + hr)
  const sitting = i.act === 'rest' || i.act === 'camp'
  const contact = sitting ? 0.35 : 0.02
  const Aair = A - contact

  // Dry heat loss through clothing (convection + radiation), split by coefficient ratio.
  const roof = i.shelter === 'tarp' || i.shelter === 'tarp-bed'
  const skyExtra = i.sky === 'night-clear' && !roof ? 12 : 0
  const dryAir = (Aair * (tsk - i.ta)) / (Rcl + Ra)
  const conv = (dryAir * hc) / (hc + hr)
  const rad = (dryAir * hr) / (hc + hr) + ((Aair * skyExtra) / (Rcl + 1 / hr)) * 0.5
  // Conduction to the ground (only significant when sitting or lying).
  const Rground = !sitting ? 0.5 : i.shelter === 'tarp-bed' ? 0.45 : 0.06 + 0.155 * cloEff * 0.3
  const cond = (contact * (tsk - (i.ta + 1))) / Rground
  // Solar gain, reduced by shade and covering clothing.
  const shade = roof ? 0.2 : 1
  const solar = i.sky === 'sun' ? 200 * shade * (1 - Math.min(0.5, i.clo * 0.25)) : 0
  // Evaporation.
  const Pa = (i.rh / 100) * 0.6108 * Math.exp((17.27 * i.ta) / (i.ta + 237.3))
  const eres = Math.max(0, 0.0173 * M * (5.87 - Pa) + 0.0014 * M * (34 - i.ta))
  const wetEvap = i.wet === 'dry' ? 0 : (i.wet === 'damp' ? 45 : 110) * (1 + 0.04 * i.wind * shelterWind) * (i.shell ? 0.45 : 1) * (i.ta < 35 ? 1 : 0.5)
  const Ereq = M + solar - conv - rad - cond - eres - wetEvap
  const Emax = (700 * (1 - i.rh / 100) * (0.5 + 0.5 * Math.min(1, v / 3))) / (1 + 0.3 * i.clo)
  let sweat = 0
  let S = Ereq
  if (Ereq > 0) {
    sweat = Math.min(Ereq, Math.max(0, Emax))
    S = Ereq - sweat
  }
  const shivering = S < -40 && met < 3
  const waterLph = ((sweat + eres) * 3600) / 2.4e6
  const kcalph = (M * 3600) / 4184
  const hoursTo2C = S !== 0 ? (2 * 245000) / Math.abs(S) / 3600 : Infinity
  const wct = i.ta <= 10 && i.wind > 4.8 ? 13.12 + 0.6215 * i.ta - 11.37 * Math.pow(i.wind, 0.16) + 0.3965 * i.ta * Math.pow(i.wind, 0.16) : i.ta
  return { M, solar, conv, rad, cond, eres, wetEvap, sweat, S, shivering, waterLph, kcalph, hoursTo2C, wct, cloEff }
}
