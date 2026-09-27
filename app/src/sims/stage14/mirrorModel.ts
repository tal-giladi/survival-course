// Signal-mirror aiming and visibility model for the "signal-mirror" simulation (Stage 14).
//
// Physics used (all simplified for teaching):
// - A flat mirror reflects the Sun's disc, so the flash is a cone with the Sun's angular radius
//   (≈ 0.27°). Its footprint at distance d is about d · 0.0093 wide — ~93 m at 10 km.
// - To send the flash to a target, the mirror's normal must bisect the angle θ between the directions
//   to the Sun and to the target. The mirror then presents an effective area A · cos(θ/2).
// - Flash intensity I = L_sun · A_eff · R (candela), with L_sun ≈ 1.6×10⁹ cd/m² for a clear midday Sun.
// - Illuminance at the observer E = I · T / d², with atmospheric transmission T = e^(−3.912·d/V)
//   (Koschmieder: V is the meteorological visibility).
// - Whether the observer notices it is compared with a model threshold for a point flash against a
//   bright daytime sky. The threshold is a teaching assumption; real thresholds depend on background,
//   attention and whether anyone is looking your way.

export const SUN_LUMINANCE = 1.6e9 // cd/m², order of magnitude for a clear, high Sun
export const SUN_HALF_ANGLE_DEG = 0.267
export const DAY_THRESHOLD_LUX = 1e-3 // model assumption

export type Sky = 'clear' | 'thin-cloud' | 'overcast'
export type AimMethod = 'none' | 'v-finger' | 'sighting'

export interface Reflector {
  id: string
  name: string
  /** Reflecting area, cm². */
  area: number
  /** Specular reflectance, 0–1 (model values). */
  reflectance: number
  /** Has a hole or aperture you can sight through. */
  sighting: boolean
  note: string
}

export const REFLECTORS: Reflector[] = [
  { id: 'signal', name: 'Signal mirror 7.6 × 12.7 cm (3 × 5 in) with sighting hole', area: 97, reflectance: 0.85, sighting: true, note: 'Purpose-made: large, flat, with an aiming aperture.' },
  { id: 'compact', name: 'Small compact mirror, 5 cm', area: 20, reflectance: 0.85, sighting: false, note: 'Good reflector, small area.' },
  { id: 'cd', name: 'CD / DVD', area: 110, reflectance: 0.5, sighting: true, note: 'Centre hole works as a sight; the surface scatters some light (model value).' },
  { id: 'phone', name: 'Phone screen (switched off)', area: 90, reflectance: 0.05, sighting: false, note: 'Only the glass surface reflects — a few per cent.' },
  { id: 'foil', name: 'Crumpled foil on card', area: 150, reflectance: 0.1, sighting: false, note: 'Wrinkles scatter the beam; smooth it as flat as you can.' },
]

/** Typical pointing error (1 σ, degrees) for each aiming method — teaching values. */
export const AIM_SIGMA: Record<AimMethod, number> = { none: 8, 'v-finger': 1.5, sighting: 0.6 }

export const SKY_FACTOR: Record<Sky, number> = { clear: 1, 'thin-cloud': 0.3, overcast: 0 }

const rad = (deg: number) => (deg * Math.PI) / 180

/** Effective mirror area (m²) for a Sun–target angle θ (degrees, 0–180) measured at the mirror. */
export function effectiveArea(areaCm2: number, sunTargetDeg: number): number {
  const t = Math.min(180, Math.max(0, sunTargetDeg))
  return areaCm2 * 1e-4 * Math.max(0, Math.cos(rad(t / 2)))
}

/** Width of the flash footprint at distance d (km), in metres. */
export function footprintWidth(distanceKm: number): number {
  return 2 * distanceKm * 1000 * Math.tan(rad(SUN_HALF_ANGLE_DEG))
}

/** Atmospheric transmission over d km with meteorological visibility V km. */
export function transmission(distanceKm: number, visibilityKm: number): number {
  return Math.exp((-3.912 * distanceKm) / Math.max(0.1, visibilityKm))
}

export interface FlashInput {
  reflector: Reflector
  sunTargetDeg: number
  distanceKm: number
  visibilityKm: number
  sky: Sky
}

/** Illuminance (lux) of the flash at the observer's eye, if it is aimed perfectly. */
export function flashIlluminance(x: FlashInput): number {
  const i = SUN_LUMINANCE * SKY_FACTOR[x.sky] * effectiveArea(x.reflector.area, x.sunTargetDeg) * x.reflector.reflectance
  const d = Math.max(0.05, x.distanceKm) * 1000
  return (i * transmission(x.distanceKm, x.visibilityKm)) / (d * d)
}

/** Probability the flash is bright enough to be noticed (smooth step around the threshold). */
export function brightEnough(lux: number): number {
  if (lux <= 0) return 0
  const r = lux / DAY_THRESHOLD_LUX
  return (r * r) / (1 + r * r)
}

/** Range (km) at which a perfectly aimed flash falls to the model threshold (bisection). */
export function maxRangeKm(x: Omit<FlashInput, 'distanceKm'>): number {
  if (flashIlluminance({ ...x, distanceKm: 0.05 }) < DAY_THRESHOLD_LUX) return 0
  let lo = 0.05
  let hi = 200
  if (flashIlluminance({ ...x, distanceKm: hi }) >= DAY_THRESHOLD_LUX) return hi
  for (let k = 0; k < 60; k++) {
    const mid = (lo + hi) / 2
    if (flashIlluminance({ ...x, distanceKm: mid }) >= DAY_THRESHOLD_LUX) lo = mid
    else hi = mid
  }
  return lo
}

/**
 * Probability that the beam actually reaches the target during a short signalling attempt.
 * Static aim: the pointing error (2-D normal, σ) must be within the beam's half-angle.
 * Sweeping ±3° across the target: the beam crosses the target whenever the aim error is within the
 * sweep amplitude, giving repeated flashes.
 */
export function aimProbability(method: AimMethod, sweep: boolean, sighting: boolean): number {
  const sigma = AIM_SIGMA[method === 'sighting' && !sighting ? 'v-finger' : method]
  const reach = sweep ? 3 : SUN_HALF_ANGLE_DEG
  return 1 - Math.exp(-(reach * reach) / (2 * sigma * sigma))
}

export interface MirrorSetup extends FlashInput {
  method: AimMethod
  sweep: boolean
}

export interface MirrorResult {
  aEff: number
  footprint: number
  lux: number
  bright: number
  aim: number
  detect: number
  range: number
  notes: string[]
}

export function evaluateMirror(x: MirrorSetup): MirrorResult {
  const lux = flashIlluminance(x)
  const bright = brightEnough(lux)
  const aim = aimProbability(x.method, x.sweep, x.reflector.sighting)
  const notes: string[] = []
  if (x.sky === 'overcast') notes.push('No direct sunlight: a mirror cannot flash. Switch to other signals.')
  if (x.sunTargetDeg > 150) notes.push('The Sun is almost behind you: the mirror is nearly edge-on. Turn or move so the Sun is more to your side.')
  if (x.method === 'sighting' && !x.reflector.sighting) notes.push('This reflector has no sighting hole — you are effectively using the V-finger method.')
  if (x.method === 'none') notes.push('Without an aiming method the flash wanders several degrees — it rarely touches the target.')
  if (!x.sweep && x.method !== 'none') notes.push('A slow sweep of a few degrees across the target gives repeated flashes and tolerates aiming error.')
  if (x.reflector.reflectance < 0.2) notes.push('A poor reflector: brightness falls with reflectance.')
  return {
    aEff: effectiveArea(x.reflector.area, x.sunTargetDeg),
    footprint: footprintWidth(x.distanceKm),
    lux,
    bright,
    aim,
    detect: bright * aim,
    range: maxRangeKm(x),
    notes,
  }
}

export interface MirrorChallenge {
  id: string
  text: string
  distanceKm: number
  visibilityKm: number
  sky: Sky
  /** Sun–target angle if you stay where you are. */
  sunTargetDeg: number
  /** Sun–target angle if you move a few metres / turn to a better position (if possible). */
  betterDeg?: number
  /** Reflectors available in this challenge. */
  kit: string[]
}

export const CHALLENGES: MirrorChallenge[] = [
  { id: 'heli', text: 'A helicopter is working a valley about 8 km away. Light haze. The Sun is high and to your left.', distanceKm: 8, visibilityKm: 25, sky: 'clear', sunTargetDeg: 90, kit: ['compact', 'phone'] },
  { id: 'boat', text: 'From a headland you see a fishing boat about 15 km offshore. Clear, dry air. The Sun is behind you and slightly right.', distanceKm: 15, visibilityKm: 50, sky: 'clear', sunTargetDeg: 160, betterDeg: 110, kit: ['signal', 'foil'] },
  { id: 'plane', text: 'A search aircraft is flying a track about 25 km away over the desert. Very clear air; the Sun is ahead of you.', distanceKm: 25, visibilityKm: 60, sky: 'clear', sunTargetDeg: 40, kit: ['cd', 'phone'] },
  { id: 'team', text: 'A ground team is on the opposite side of a valley, 3 km away. Thin high cloud dims the Sun.', distanceKm: 3, visibilityKm: 20, sky: 'thin-cloud', sunTargetDeg: 100, kit: ['phone', 'foil'] },
]
