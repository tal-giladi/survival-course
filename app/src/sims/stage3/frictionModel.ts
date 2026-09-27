// Bow-drill model — pure functions so the physics can be unit-tested.
//
// Mechanics:
//  - Bow string speed (average) v_bow = 2·L·f   (L = stroke length in m, f = full back-and-forth strokes per s)
//  - The spindle tip is a flat-ish disc rubbing on the hearth. For a uniformly loaded disc the average
//    rubbing speed is 2/3 of the rim speed, and the rim speed equals the string speed (no slip), so
//        v_rub = (2/3)·v_bow·s      (s = slip factor, < 1 for very thin spindles)
//  - Friction power P = μ·N·v_rub   (μ friction coefficient, N downward force in newtons). This is also
//    the mechanical power the bow arm must supply (plus arm-movement overhead).
//  - A share of P heats the contact zone / dust (the rest heats the spindle and is carried away).
//  - Contact-zone temperature T (lumped): C·dT/dt = q_in − G·(T − T_a) − radiation − evaporation
//    C (J/K) and G (W/K) grow with tip area (∝ d² and ∝ d), so thicker spindles heat more slowly and
//    lose more. Moisture adds heat capacity and pins T near 100 °C until it has boiled off.
//  - Dust production follows Archard-style wear: rate ∝ N·v_rub·k_wear (soft woods shed more dust).
//  - Fatigue: critical-power model. Sustainable arm power CP; above CP the reserve W′ drains at (P_h − CP).
//  - An ember forms when enough dust (≥ 0.3 g, retained by the notch) stays above ~400 °C for ~4 s.
// Coefficients are calibrated so that a good set (dry cedar, 20 mm spindle, 60 cm strokes at ~1.5/s,
// ~80 N) makes an ember in roughly 30–60 s, matching instructor experience. Intuition, not engineering.

export type WoodPair = 'cedar' | 'basswood' | 'willow' | 'yucca' | 'pine' | 'oak' | 'punky'
export type Dryness = 'bone' | 'air' | 'damp' | 'green'
export type Notch = 'none' | 'shallow' | 'good' | 'wide'

export interface BowInput {
  wood: WoodPair
  dryness: Dryness
  /** Spindle diameter, mm. */
  diameter: number
  /** Stroke length, cm. */
  stroke: number
  /** Full strokes (back + forth) per second. */
  rate: number
  /** Downward force on the spindle, N (~10 N ≈ 1 kg). */
  force: number
  notch: Notch
}

/** μ friction coefficient · wear: dust production factor · glaze: tendency to polish/glaze · k: conductivity factor · density kg/m³ */
export const WOOD: Record<WoodPair, { name: string; mu: number; wear: number; glaze: number; k: number; density: number; note: string }> = {
  cedar: { name: 'Western red cedar on cedar', mu: 0.45, wear: 1, glaze: 0.05, k: 0.9, density: 370, note: 'Classic beginner pair: soft, dry, makes fine dark dust.' },
  basswood: { name: 'Basswood (lime/linden) on basswood', mu: 0.45, wear: 1.1, glaze: 0.05, k: 0.9, density: 420, note: 'Excellent, forgiving pair.' },
  willow: { name: 'Willow on willow', mu: 0.42, wear: 1, glaze: 0.1, k: 0.95, density: 420, note: 'Good when fully dry; common near water.' },
  yucca: { name: 'Yucca/sotol stalk spindle on cottonwood root', mu: 0.45, wear: 1.15, glaze: 0.05, k: 0.85, density: 350, note: 'Classic dry-country pair (often used for hand drill too).' },
  pine: { name: 'Resinous pine on pine', mu: 0.35, wear: 0.8, glaze: 0.6, k: 1, density: 480, note: 'Resin melts and glazes the contact — the dust stays pale and slick.' },
  oak: { name: 'Oak on oak', mu: 0.3, wear: 0.35, glaze: 0.4, k: 1.4, density: 700, note: 'Too hard and dense: polishes instead of shedding dust, and conducts heat away.' },
  punky: { name: 'Punky, half-rotten wood', mu: 0.25, wear: 2, glaze: 0, k: 0.8, density: 250, note: 'Crumbles into coarse, damp dust that will not hold heat; the spindle drills straight through.' },
}

/** Moisture content, wet basis. */
export const DRYNESS: Record<Dryness, { name: string; mc: number }> = {
  bone: { name: 'Bone-dry (stored indoors for weeks)', mc: 0.08 },
  air: { name: 'Air-dry dead standing wood', mc: 0.13 },
  damp: { name: 'Damp (after rain / off the ground)', mc: 0.25 },
  green: { name: 'Green (freshly cut, living)', mc: 0.45 },
}

export const NOTCH: Record<Notch, { name: string; capture: number; air: number }> = {
  none: { name: 'No notch (just a burned-in socket)', capture: 0.1, air: 0.2 },
  shallow: { name: 'Shallow notch — stops short of the centre', capture: 0.5, air: 0.6 },
  good: { name: 'Good notch: ~1/8 of the circle, to the centre', capture: 1, air: 1 },
  wide: { name: 'Over-wide notch (~1/4 of the circle)', capture: 0.7, air: 1 },
}

export const CP = 45 // W — sustainable arm power for an average adult (upper-body work is far below leg power)
export const W_PRIME = 4500 // J — anaerobic reserve above CP
export const T_EMBER = 400 // °C — char dust must reach roughly 350–450 °C to self-sustain; model uses 400
export const DUST_MIN = 0.3 // g of hot dust needed in the notch
export const T_AMBIENT = 15

const clamp = (x: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x))

export interface BowStep {
  t: number // s
  T: number // °C contact / dust temperature
  dust: number // g retained in the notch
  reserve: number // 0–1 remaining anaerobic reserve
}

export interface BowResult {
  vBow: number // m/s
  vRub: number // m/s
  rpm: number
  mu0: number
  frictionW: number // initial friction power, W
  humanW: number // arm power required, W
  pressureKPa: number // mean contact pressure
  timeToExhaustion: number // s (Infinity if sustainable)
  emberTime: number | null // s at which the ember formed
  maxT: number
  probability: number // 0–1 ember probability (accounts for real-world variability)
  steps: BowStep[]
  notes: string[]
  score: number
}

/** Average string speed, m/s. */
export function bowSpeed(strokeCm: number, rate: number): number {
  return 2 * (strokeCm / 100) * rate
}

/** Friction power in watts, μ·N·v. */
export function frictionPower(mu: number, forceN: number, vRub: number): number {
  return mu * forceN * vRub
}

export function bowDrill(i: BowInput, maxSeconds = 150): BowResult {
  const w = WOOD[i.wood]
  const mc = DRYNESS[i.dryness].mc
  const nt = NOTCH[i.notch]
  const d = i.diameter / 1000 // m
  const dRel = i.diameter / 20
  const notes: string[] = []

  // Slip: very thin spindles let the string slip and the spindle whip; very thick ones are hard to hold.
  const slip = i.diameter < 16 ? clamp(1 - (16 - i.diameter) * 0.1, 0.4, 1) : 1
  if (i.diameter < 16) notes.push('A spindle this thin slips in the string, whips, and drills through the hearth before an ember forms.')
  if (i.diameter > 26) notes.push('A thick spindle spreads your effort over a big contact area — lots of work, not much temperature.')

  const vBow = bowSpeed(i.stroke, i.rate)
  const vRub = (2 / 3) * vBow * slip
  const rpm = (vBow * slip * 60) / (Math.PI * d)
  // Water lubricates wood: μ falls with moisture.
  const mu0 = w.mu * (1 - clamp((mc - 0.1) * 1.2, 0, 0.6))
  // Too little pressure: the spindle skates and polishes; too much: the spindle stalls/chatters and you tire.
  const pressureKPa = i.force / (Math.PI * (d / 2) ** 2) / 1000
  if (i.force < 40) notes.push('Light pressure with fast strokes polishes the surfaces — shiny, squeaky, and little dust.')
  if (i.force > 140) notes.push('Very heavy pressure stalls the spindle and exhausts you; the string starts to slip.')
  const stall = i.force > 140 ? clamp(1 - (i.force - 140) / 120, 0.5, 1) : 1

  // Arm power: friction work plus the cost of throwing the arm back and forth (∝ L·f²).
  const armOverhead = 8 * (i.stroke / 60) * (i.rate / 1.5) ** 2
  const pressHold = i.force > 100 ? (i.force - 100) * 0.15 : 0 // extra isometric effort beyond leaning your weight

  // Thermal parameters of the contact zone.
  const C0 = 1.1 * dRel ** 1.5 * (w.density / 400) // J/K dry
  const G = 0.05 * dRel ** 0.7 * w.k // W/K conduction into hearth and spindle
  const A = Math.PI * (d / 2) ** 2
  // Latent heat needed to boil the water out of the hot zone (J), scaled to the lumped zone's size.
  let latentLeft = 2000 * mc * dRel ** 2 * (w.density / 400)
  const heatShare = 0.6

  const steps: BowStep[] = []
  let T = T_AMBIENT
  let dust = 0
  let reserve = W_PRIME
  let emberTime: number | null = null
  let aboveFor = 0
  let maxT = T
  const dt = 0.5
  const firstFriction = frictionPower(mu0, i.force, vRub) * stall
  let humanW = firstFriction + armOverhead + pressHold
  const timeToExhaustion = humanW > CP ? W_PRIME / (humanW - CP) : Infinity
  let exhaustedAt: number | null = null

  for (let t = 0; t <= maxSeconds; t += dt) {
    // Glazing: resin and hard woods polish over time, cutting μ and dust.
    const glaze = 1 - w.glaze * (1 - Math.exp(-t / 20))
    const mu = mu0 * glaze
    const P = frictionPower(mu, i.force, vRub) * stall
    humanW = P + armOverhead + pressHold
    reserve -= Math.max(0, humanW - CP) * dt
    if (reserve <= 0) {
      exhaustedAt = t
      steps.push({ t, T, dust, reserve: 0 })
      break
    }
    const qIn = P * heatShare
    const Tk = T + 273.15
    const rad = 0.9 * 5.67e-8 * A * (Tk ** 4 - (T_AMBIENT + 273.15) ** 4)
    const moistC = C0 * (1 + 2.8 * mc) // water raises heat capacity
    let net = qIn - G * (T - T_AMBIENT) - rad
    if (T >= 100 && latentLeft > 0 && net > 0) {
      // Boiling plateau: surplus heat drives off water instead of raising temperature ("steam, not smoke").
      const used = Math.min(latentLeft, net * dt)
      latentLeft -= used
      net -= used / dt
    }
    T = Math.max(T_AMBIENT, T + (net / moistC) * dt)
    maxT = Math.max(maxT, T)
    // Dust: Archard-style wear, retained by the notch. Pale dust below ~250 °C still counts but only hot dust makes an ember.
    const wear = 0.00009 * w.wear * glaze * i.force * vRub * stall // g/s
    dust += wear * nt.capture * dt
    if (T >= T_EMBER && dust >= DUST_MIN) aboveFor += dt
    else aboveFor = Math.max(0, aboveFor - dt)
    if (t % 1 === 0) steps.push({ t, T, dust, reserve: reserve / W_PRIME })
    if (emberTime === null && aboveFor >= 4) {
      emberTime = t
      steps.push({ t, T, dust, reserve: reserve / W_PRIME })
      break
    }
  }

  if (mc > 0.2) notes.push('Wet wood: heat is spent boiling water — you see steam, the temperature stalls near 100 °C.')
  if (w.glaze > 0.3) notes.push(w.note)
  if (i.notch !== 'good') notes.push(i.notch === 'none' ? 'Without a notch the hot dust has nowhere to gather and no air — it scatters and cools.' : i.notch === 'shallow' ? 'A notch that stops short of the centre spills the hottest dust and starves it of air.' : 'An over-wide notch weakens the socket: the spindle hops out and pressure is lost.')
  if (exhaustedAt !== null) notes.push(`Your bow arm gave out at ${Math.round(exhaustedAt)} s (power demand ${Math.round(humanW)} W vs ~${CP} W sustainable).`)
  if (i.rate > 2.2) notes.push('Very fast short strokes waste energy throwing your arm around; long, smooth, full-length strokes are more efficient.')

  // Ember probability: the deterministic run says whether conditions were met; real attempts vary, so we
  // turn the margins (temperature, dust, spare stamina, notch air supply) into a probability.
  let probability: number
  if (emberTime !== null) {
    const spare = clamp(reserve / W_PRIME + 0.3)
    probability = clamp(0.55 + 0.25 * spare + 0.2 * nt.air) * (w.wear > 1.5 ? 0.3 : 1) * slip ** 2
  } else {
    const tempMargin = clamp((maxT - 250) / (T_EMBER - 250))
    const dustMargin = clamp(dust / DUST_MIN)
    probability = clamp(0.35 * tempMargin * dustMargin * nt.air)
  }
  // Efficiency bonus: earlier embers with stamina left score higher.
  const score = Math.round(100 * probability * (emberTime !== null ? clamp(1.05 - emberTime / 300) : 1))
  return { vBow, vRub, rpm, mu0, frictionW: firstFriction, humanW, pressureKPa, timeToExhaustion, emberTime, maxT, probability, steps, notes, score }
}
