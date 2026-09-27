// Advanced Fire Builder model — pure functions so the physics can be unit-tested.
//
// What it models (deliberately simple, directionally correct):
//  1. Ignition chain: tinder catches → kindling takes over → fuel sustains (as in the Stage 1 model),
//     now depending on weather, placement, lay and fuel moisture.
//  2. Fuel energy: net heat per kg of wood falls with moisture content (wet basis m):
//        H_net = H_dry·(1 − m) − L·m        H_dry ≈ 18.5 MJ/kg, L ≈ 2.44 MJ/kg (evaporation + heating)
//  3. Burn rate (kg/h) by lay, sped up by wind and slowed by moisture and density.
//     Heat output P = burn rate × H_net (kW). The prepared stock (kg) runs out after stock / rate.
//  4. Useful heat to a person ~1.5 m away = radiant fraction × P × geometry (lay shape, reflector, wind).
//  5. Smoke index from moisture, incomplete combustion (smouldering) and resin/green material.
//  6. Suitability for the chosen purpose (cook / heat / signal / overnight) and a safety-risk index.
// Numbers are for building intuition, not engineering. Every coefficient is documented where it is set.

export type Weather = 'dry' | 'damp' | 'rain' | 'windy' | 'snow'
export type Tinder = 'cottonPJ' | 'birch' | 'fatwood' | 'grass' | 'groundLeaves'
export type Kindling = 'standingTwigs' | 'featherSticks' | 'groundTwigs' | 'green' | 'thumbOnly'
export type Fuel = 'hardSplit' | 'softSplit' | 'groundLogs' | 'green' | 'punky' | 'driftwood'
export type Lay = 'teepee' | 'logCabin' | 'leanTo' | 'star' | 'longLog' | 'dakota'
export type Placement = 'ring' | 'platform' | 'exposed' | 'wetGround' | 'litter' | 'overhang'
export type Purpose = 'cook' | 'heat' | 'signal' | 'overnight'

export interface FireInput {
  weather: Weather
  tinder: Tinder
  kindling: Kindling
  fuel: Fuel
  lay: Lay
  placement: Placement
  purpose: Purpose
  reflector: boolean
  /** Prepared fuel stock in kg (an armful of wrist-thick wood is ~5 kg). */
  stockKg: number
}

export const WEATHER: Record<Weather, { name: string; wet: number; wind: number; ambient: number }> = {
  dry: { name: 'Dry and calm, 15 °C', wet: 0, wind: 0.1, ambient: 15 },
  damp: { name: 'Damp and overcast, 8 °C', wet: 0.4, wind: 0.2, ambient: 8 },
  rain: { name: 'Steady rain, 5 °C', wet: 0.9, wind: 0.3, ambient: 5 },
  windy: { name: 'Dry and very windy, 20 °C', wet: 0, wind: 1, ambient: 20 },
  snow: { name: 'Snow on the ground, −10 °C', wet: 0.5, wind: 0.2, ambient: -10 },
}

export const TINDER: Record<Tinder, { name: string; ignite: number; burn: number; wetResist: number }> = {
  cottonPJ: { name: 'Cotton wool + petroleum jelly (carried)', ignite: 0.97, burn: 1, wetResist: 0.9 },
  birch: { name: 'Birch-bark shavings', ignite: 0.9, burn: 0.8, wetResist: 0.75 },
  fatwood: { name: 'Fatwood (resin-soaked pine) scrapings', ignite: 0.88, burn: 0.9, wetResist: 0.85 },
  grass: { name: 'Dry grass nest', ignite: 0.9, burn: 0.4, wetResist: 0.1 },
  groundLeaves: { name: 'Leaves from the ground', ignite: 0.5, burn: 0.3, wetResist: 0 },
}

export const KINDLING: Record<Kindling, { name: string; dry: number; fine: number }> = {
  standingTwigs: { name: 'Dead twigs snapped off trees (pencil-lead → pencil)', dry: 0.9, fine: 1 },
  featherSticks: { name: 'Feather sticks + splits from dead standing wood', dry: 1, fine: 0.95 },
  groundTwigs: { name: 'Twigs picked up off the ground', dry: 0.4, fine: 0.9 },
  green: { name: 'Live green twigs', dry: 0.1, fine: 0.7 },
  thumbOnly: { name: 'Only thumb-thick sticks', dry: 0.8, fine: 0.2 },
}

/** mc = typical moisture content, wet basis (fraction of total mass that is water). density in kg/m³ (dry). */
export const FUEL: Record<Fuel, { name: string; mc: number; density: number; resin: number; coals: number; wetGain: number }> = {
  hardSplit: { name: 'Dead standing hardwood (oak, birch, acacia), split', mc: 0.15, density: 650, resin: 0, coals: 1, wetGain: 0.08 },
  softSplit: { name: 'Dead standing softwood (pine, spruce), split', mc: 0.15, density: 420, resin: 0.5, coals: 0.5, wetGain: 0.08 },
  groundLogs: { name: 'Logs lying on wet ground', mc: 0.4, density: 500, resin: 0, coals: 0.6, wetGain: 0.15 },
  green: { name: 'Green, freshly cut wood', mc: 0.5, density: 550, resin: 0.2, coals: 0.5, wetGain: 0.02 },
  punky: { name: 'Punky, half-rotten wood', mc: 0.45, density: 250, resin: 0, coals: 0.2, wetGain: 0.2 },
  driftwood: { name: 'Bleached driftwood above the tide line', mc: 0.18, density: 450, resin: 0, coals: 0.6, wetGain: 0.1 },
}

/**
 * Lay properties (0–1 unless noted).
 * start: ease of getting going · windResist · rate: base burn rate kg/h at 15 % moisture
 * radiant: share of heat radiated sideways toward a seated person · platform: pot stability / coal bed
 * flame: flame height for visibility · tend: how often it needs attention (1 = constantly)
 * sparks: spark/ember throw
 */
export const LAY: Record<Lay, { name: string; start: number; windResist: number; rate: number; radiant: number; platform: number; flame: number; tend: number; sparks: number }> = {
  teepee: { name: 'Teepee (cone)', start: 1, windResist: 0.55, rate: 3.5, radiant: 0.25, platform: 0.2, flame: 1, tend: 0.9, sparks: 0.8 },
  logCabin: { name: 'Log cabin (crib)', start: 0.8, windResist: 0.7, rate: 3.2, radiant: 0.3, platform: 0.9, flame: 0.8, tend: 0.6, sparks: 0.6 },
  leanTo: { name: 'Lean-to against a backlog', start: 0.9, windResist: 1, rate: 2.5, radiant: 0.4, platform: 0.5, flame: 0.6, tend: 0.6, sparks: 0.5 },
  star: { name: 'Star (logs pushed in like spokes)', start: 0.7, windResist: 0.7, rate: 1.2, radiant: 0.35, platform: 0.8, flame: 0.3, tend: 0.3, sparks: 0.3 },
  longLog: { name: 'Long-log fire (parallel logs, lying beside you)', start: 0.65, windResist: 0.8, rate: 2.4, radiant: 0.6, platform: 0.5, flame: 0.4, tend: 0.25, sparks: 0.4 },
  dakota: { name: 'Dakota hole (pit + air tunnel)', start: 0.75, windResist: 1, rate: 1.4, radiant: 0.05, platform: 1, flame: 0.1, tend: 0.5, sparks: 0.1 },
}

export const PLACEMENT: Record<Placement, { name: string; risk: number; wetGround: number; shelter: number; note: string }> = {
  ring: { name: 'Existing fire ring / bare mineral soil, sheltered', risk: 0, wetGround: 0.1, shelter: 0.6, note: '' },
  platform: { name: 'Platform of dry sticks over wet ground or snow', risk: 0.05, wetGround: 0, shelter: 0.3, note: '' },
  exposed: { name: 'Open, exposed ridge or clearing', risk: 0.25, wetGround: 0.3, shelter: 0, note: 'Wind throws sparks downwind and strips heat away.' },
  wetGround: { name: 'Directly on wet ground or snow', risk: 0, wetGround: 0.9, shelter: 0.3, note: '' },
  litter: { name: 'On deep leaf litter, duff or peat', risk: 0.8, wetGround: 0.4, shelter: 0.4, note: 'Fire can creep into the duff or peat and smoulder underground for days.' },
  overhang: { name: 'Under low overhanging branches', risk: 0.7, wetGround: 0.2, shelter: 0.8, note: 'Flames and rising heat can ignite the canopy.' },
}

export const PURPOSE: Record<Purpose, string> = {
  cook: 'Cooking (boil water, cook food)',
  heat: 'Heating a person sitting by it',
  signal: 'Signal to searchers',
  overnight: 'Long-duration / overnight warmth',
}

export const H_DRY = 18.5 // MJ/kg, typical dry wood (softwoods slightly higher, hardwoods slightly lower per kg)
export const L_EVAP = 2.44 // MJ per kg of water, evaporation at ~25 °C (heating the water adds a little more)

/** Net usable heat per kg of wood at wet-basis moisture m (MJ/kg). */
export function netHeat(m: number): number {
  return Math.max(0, H_DRY * (1 - m) - L_EVAP * m)
}

/** Converts dry-basis moisture (water/dry wood) to wet basis (water/total). */
export function dryToWetBasis(md: number): number {
  return md / (1 + md)
}

const clamp = (x: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x))

export interface FireResult {
  ignition: number
  takeover: number
  sustain: number
  success: number
  moisture: number // effective wet-basis fuel moisture
  hNet: number // MJ/kg
  burnRate: number // kg/h
  peakKW: number
  usefulW: number // radiant heat absorbed by a seated person at ~1.5 m (W)
  durationH: number // hours until the prepared stock is gone at the peak burn rate
  smoke: number // 0–1
  risk: number // 0–1
  riskNotes: string[]
  suitability: number // 0–1 for the chosen purpose
  suitNotes: string[]
  score: number // 0–100
  /** Heat output (kW) every 5 minutes for 4 hours, assuming it lit. */
  curve: number[]
}

export function fireAdvanced(i: FireInput): FireResult {
  const W = WEATHER[i.weather]
  const P = PLACEMENT[i.placement]
  const Ly = LAY[i.lay]
  const T = TINDER[i.tinder]
  const K = KINDLING[i.kindling]
  const F = FUEL[i.fuel]

  // Wind felt at the fire: sheltered placements and wind-resistant lays cut it.
  const wind = W.wind * (1 - P.shelter * 0.7) * (1 - (Ly.windResist - 0.5) * 0.8)
  const dakotaDrain = i.lay === 'dakota' && (i.weather === 'rain' || i.placement === 'wetGround') ? 0.6 : 1 // pit floods / wet soil

  // 1) Tinder catches.
  const wetOnTinder = W.wet * (1 - T.wetResist) * (1 - P.shelter * 0.5)
  const ignition = clamp(T.ignite * (1 - wetOnTinder * 0.8) * (1 - Math.max(0, wind - 0.3) * 0.5))

  // 2) Kindling takes over.
  const kinDry = K.dry * (1 - W.wet * 0.35) * (1 - P.wetGround * 0.3)
  let takeover = clamp(0.15 + T.burn * 0.35 + K.fine * 0.25 + kinDry * 0.35) * Ly.start * (1 - Math.max(0, wind - 0.4) * 0.5)
  if (kinDry < 0.3) takeover *= 0.4
  takeover = clamp(takeover * dakotaDrain)

  // 3) Fuel sustains. Effective moisture rises with weather and ground contact.
  const moisture = clamp(F.mc + F.wetGain * W.wet + P.wetGround * 0.1 * (i.fuel === 'green' ? 0 : 1), 0, 0.65)
  const hNet = netHeat(moisture)
  const sustain = clamp((1.15 - moisture * 1.7) * (0.75 + 0.25 * Ly.start) * dakotaDrain * (P.wetGround > 0.8 ? 0.6 : 1))

  const success = ignition * takeover * sustain

  // Burn rate: moisture slows it (heat goes into boiling water), dense wood burns more slowly per kg of stock,
  // wind speeds it up (more oxygen, more heat blown away).
  const densityFactor = Math.sqrt(500 / F.density)
  const burnRate = Ly.rate * (1 - (moisture - 0.15) * 1.2) * densityFactor * (1 + wind * 0.6)
  const peakKW = (Math.max(0.2, burnRate) * hNet) / 3.6 // (kg/h × MJ/kg) / 3.6 = kW
  // Point-source geometry at 1.5 m with ~0.5 m² of body facing the fire: 0.5 / (4π·1.5²) ≈ 0.0177.
  // A long-log fire is a line source along the body (≈2× at this distance). Real reflectors return a modest share.
  const reflect = i.reflector ? (Ly.radiant > 0.2 ? 1.3 : 1.05) : 1
  const lineSource = i.lay === 'longLog' ? 2 : 1
  const usefulW = peakKW * 1000 * Ly.radiant * 0.0177 * lineSource * reflect * (1 - wind * 0.3)
  const durationH = i.stockKg / Math.max(0.2, burnRate)

  // Smoke: water vapour + incomplete combustion. Wet and punky fuel smoulder; resin makes dark smoke;
  // Dakota holes burn hot with a strong draught and make little smoke.
  const smoke = clamp(moisture * 1.3 + F.resin * 0.15 + (i.fuel === 'punky' ? 0.25 : 0) + (i.kindling === 'green' ? 0.1 : 0) - (i.lay === 'dakota' ? 0.25 : 0) - 0.1)

  // Heat-output curve: 15-min growth, plateau while stock lasts (minus the tending penalty if the lay
  // needs frequent attention and the purpose is overnight), then coals decaying over ~40 min.
  const curve: number[] = []
  const growMin = 15 / Math.max(0.3, Ly.start)
  const burnMin = durationH * 60
  const coalKW = peakKW * 0.35 * (0.5 + F.coals * 0.5)
  for (let t = 0; t <= 240; t += 5) {
    let kw: number
    if (t < growMin) kw = peakKW * (t / growMin)
    else if (t < burnMin) kw = peakKW * (1 - 0.1 * Math.sin(t / 7) * Ly.tend) // tending sawtooth
    else kw = coalKW * Math.exp(-(t - burnMin) / (25 + F.coals * 30))
    curve.push(Math.max(0, kw))
  }

  // Safety risk.
  const riskNotes: string[] = []
  let risk = P.risk
  if (P.note) riskNotes.push(P.note)
  if (i.weather === 'windy') {
    risk += 0.2 + Ly.sparks * 0.2 * (1 - P.shelter)
    riskNotes.push('High wind carries embers far downwind; in real life, strong wind on dry fuel is a reason not to light at all.')
  }
  if (i.weather === 'dry' && i.placement !== 'ring') risk += 0.05
  if (i.lay === 'dakota' && (i.placement === 'litter' || i.placement === 'overhang')) {
    risk += 0.2
    riskNotes.push('A Dakota hole dug into duff or a root mat can ignite roots that smoulder underground and surface later.')
  }
  if (Ly.flame > 0.8 && i.placement === 'overhang') risk += 0.1
  risk = clamp(risk)

  // Suitability for purpose.
  const suitNotes: string[] = []
  let suit: number
  switch (i.purpose) {
    case 'cook': {
      const steady = 1 - Math.abs(peakKW - 8) / 12 // a small steady fire (~5–10 kW) cooks best
      suit = 0.45 * Ly.platform + 0.25 * clamp(steady) + 0.2 * F.coals + 0.1 * (1 - smoke)
      if (Ly.platform < 0.4) suitNotes.push('A teepee is a poor pot support — the cone collapses and the flame tip, not the hot base, reaches the pot.')
      if (F.coals < 0.5) suitNotes.push('Softwood and punky wood give few lasting coals; hardwood coals give even, controllable heat.')
      if (i.lay === 'dakota') suitNotes.push('Dakota hole: pot sits right over a hot, draught-driven flame — efficient on fuel and low-profile.')
      break
    }
    case 'heat': {
      suit = clamp(usefulW / 150) * 0.7 + clamp(durationH / 2) * 0.2 + (1 - smoke) * 0.1
      if (Ly.radiant < 0.2) suitNotes.push('Most of this fire’s heat goes straight up (or stays in the pit) — little reaches you sideways.')
      if (!i.reflector) suitNotes.push('A reflector (rock face, log wall, space blanket at a safe distance) behind the fire returns radiant heat that would otherwise escape.')
      break
    }
    case 'signal': {
      const day = 0.5 * Ly.flame + 0.5 * smoke // flame for night, smoke contrast for day
      suit = clamp(day * 0.8 + (i.placement === 'exposed' ? 0.2 : i.placement === 'overhang' ? -0.2 : 0.05))
      if (Ly.flame < 0.4) suitNotes.push('A low fire with little flame or smoke is hard to see from the air.')
      if (smoke < 0.3) suitNotes.push('By day, searchers see smoke, not flame: keep green boughs ready to throw on once the base is hot.')
      break
    }
    case 'overnight': {
      suit = clamp(durationH / 6) * 0.45 + (1 - Ly.tend) * 0.3 + F.coals * 0.15 + clamp(usefulW / 120) * 0.1
      if (Ly.tend > 0.6) suitNotes.push('This lay needs feeding every few minutes — you will not sleep.')
      if (durationH < 3) suitNotes.push(`At ${burnRate.toFixed(1)} kg/h your ${i.stockKg} kg stock lasts only ${durationH.toFixed(1)} h. Gather more, burn denser wood, or use a star or long-log lay.`)
      break
    }
  }
  const suitability = clamp(suit)
  // Score rewards good decisions: likely to light (square root softens the dice), fit for purpose, and safe.
  const score = Math.round(100 * Math.sqrt(success) * suitability * (1 - risk * 0.7))
  return { ignition, takeover, sustain, success, moisture, hNet, burnRate, peakKW, usefulW, durationH, smoke, risk, riskNotes, suitability, suitNotes, score, curve }
}
