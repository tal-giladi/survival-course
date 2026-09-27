// Cordage strength model — pure functions so the mechanics can be unit-tested.
//
// Breaking strength of a straight length of hand-made cord:
//     F = σ · A · η_twist(α) · k_ply · k_build · k_wet · k_size
//  - σ     effective strength of the fiber *as hand-made cord* (MPa = N/mm², on the whole cord
//          cross-section including air gaps). Calibrated so that machine-made sisal/manila rope
//          (~75–85 MPa nominal) sits above hand-made yucca/agave (~60 MPa), and a well-made 3 mm
//          two-ply nettle cord breaks at ~35 kg — the range practitioners report. Intuition, not a spec.
//  - A     cross-section π·d²/4 (mm²): strength scales with the square of diameter.
//  - η_twist(α) = cos²α · (1 − e^(−α/9°)), normalised to 1 at its peak (~20°):
//          the second factor is grip (twist squeezes fibers together so friction can transfer load;
//          no twist = fibers slide past each other), the first is obliquity (fibers at angle α to the
//          cord axis only carry cos α of their strength along it, and are pre-strained by the twist).
//  - k_ply / k_build: a single twisted strand is torque-unbalanced — under load it untwists, loses grip
//          and kinks. Reverse-wrap plying (plies twisted one way, plied the other) locks the twist in.
//  - k_wet: cellulose bast fibers get ~10 % stronger wet; brittle leaf and bark fibers crack at knots when dry.
//  - k_size: hand-made cord gets less even as it gets thicker (weakest-link effect), (3/d)^0.1.
// Weak points: knots keep only a fraction of the straight strength (knot efficiency), and running over
// a thin branch costs strength too: η_bend ≈ 1 − 0.5/√(D/d) (D = branch diameter, d = cord diameter).

export type FiberId = 'dogbane' | 'nettle' | 'yucca' | 'basswood' | 'coir' | 'cattail'
export type KnotId = 'overhand' | 'square' | 'clove' | 'bowline' | 'timber' | 'figure8' | 'roundturn'
export type LoadId = 'foodbag' | 'ridgeline' | 'packframe' | 'pothanger'
export type Build = 'reverse-wrap' | 'single-twist'

export interface Fiber {
  name: string
  /** Effective strength of well-made dry cord at optimum twist, MPa (N/mm²). */
  sigma: number
  /** Multiplier on strength when wet. */
  wet: number
  /** 0–1: how much a dry fiber cracks where it bends sharply (knots, thin branches). */
  brittle: number
  /** 0–1 abrasion resistance. */
  abrasion: number
  /** Minutes to process fiber and make 1 m of 3 mm two-ply cord (practised maker). */
  minPerM: number
  where: string
}

export const FIBERS: Record<FiberId, Fiber> = {
  dogbane: { name: 'Dogbane / milkweed stem fiber (bast)', sigma: 55, wet: 1.1, brittle: 0.1, abrasion: 0.6, minPerM: 15, where: 'Temperate North America: dead stalks in autumn and winter.' },
  nettle: { name: 'Stinging nettle stem fiber (bast)', sigma: 50, wet: 1.1, brittle: 0.1, abrasion: 0.6, minPerM: 15, where: 'Temperate Europe, Asia and North America: damp, nitrogen-rich ground.' },
  yucca: { name: 'Yucca / agave leaf fiber', sigma: 60, wet: 1.0, brittle: 0.35, abrasion: 0.7, minPerM: 12, where: 'Deserts and dry scrub; sisal and henequen are agave fibers.' },
  basswood: { name: 'Retted inner bark (basswood/lime, willow)', sigma: 25, wet: 1.0, brittle: 0.5, abrasion: 0.4, minPerM: 6, where: 'Temperate forest; retted in water for weeks. Fast, bulky, weak.' },
  coir: { name: 'Coconut husk fiber (coir)', sigma: 25, wet: 1.0, brittle: 0.2, abrasion: 0.8, minPerM: 12, where: 'Tropical coasts; resists salt water and rot.' },
  cattail: { name: 'Cattail / grass leaves', sigma: 10, wet: 1.0, brittle: 0.4, abrasion: 0.2, minPerM: 3, where: 'Almost anywhere wet. Quick, but better for mats and weaving than load.' },
}

export interface Knot {
  name: string
  /** Fraction of straight-cord strength kept, in pliable cord. */
  eff: number
  /** 0–1 resistance to slipping or capsizing under repeated (cyclic) load. */
  secure: number
  note: string
}

export const KNOTS: Record<KnotId, Knot> = {
  overhand: { name: 'Overhand loop', eff: 0.5, secure: 0.9, note: 'Tight bend radius; jams; weakest common loop.' },
  square: { name: 'Reef (square) knot as a tie-off', eff: 0.45, secure: 0.4, note: 'A binding knot, not a load-bearing one: it capsizes.' },
  clove: { name: 'Clove hitch', eff: 0.6, secure: 0.55, note: 'Quick and adjustable, but rolls loose under shaking in stiff cord.' },
  bowline: { name: 'Bowline', eff: 0.65, secure: 0.75, note: 'Fixed loop that unties after loading.' },
  timber: { name: 'Timber hitch', eff: 0.7, secure: 0.6, note: 'Grips a log by wraps; secure only while loaded.' },
  figure8: { name: 'Figure-eight loop', eff: 0.75, secure: 0.95, note: 'Gentle curves; strong and very secure.' },
  roundturn: { name: 'Round turn and two half hitches', eff: 0.75, secure: 0.9, note: 'The turn takes most of the load by friction before the hitches see it.' },
}

export interface CordInput {
  fiber: FiberId
  /** 1 = a single twisted strand; 2 or 3 = plied. */
  plies: 1 | 2 | 3
  /** Surface twist angle of the plies, degrees (5–45). */
  twist: number
  /** Finished cord diameter, mm. */
  diameter: number
  build: Build
  wet: boolean
  knot: KnotId
}

const clamp = (x: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x))
const rad = (deg: number) => (deg * Math.PI) / 180

function rawTwist(deg: number) {
  const a = rad(deg)
  return Math.cos(a) ** 2 * (1 - Math.exp(-deg / 9))
}
let peak = 0
for (let d = 1; d <= 60; d += 0.5) peak = Math.max(peak, rawTwist(d))

/** Fraction of fiber strength the twisted structure can use, 1 at the optimum (~20°). */
export function twistEfficiency(deg: number) {
  return rawTwist(clamp(deg, 0, 80)) / peak
}

/** Capstan (belt-friction) ratio T2/T1 = e^(μθ), θ in radians. */
export const capstan = (mu: number, thetaRad: number) => Math.exp(mu * thetaRad)

/** Strength kept where cord bends round a pin/branch of diameter D (same units as d). */
export function bendEfficiency(D: number, d: number) {
  const r = Math.max(1, D / d)
  return clamp(1 - 0.5 / Math.sqrt(r))
}

/** Brittle fibers lose more at sharp bends when dry: scale the loss. */
function brittleScale(input: CordInput) {
  const f = FIBERS[input.fiber]
  return 1 + f.brittle * (input.wet ? 0.4 : 1)
}

export function knotEfficiency(input: CordInput) {
  const k = KNOTS[input.knot]
  return clamp(1 - (1 - k.eff) * brittleScale(input), 0.05)
}

export function effectiveBendEfficiency(input: CordInput, D: number) {
  return clamp(1 - (1 - bendEfficiency(D, input.diameter)) * brittleScale(input), 0.05)
}

export function plyFactor(input: CordInput) {
  if (input.plies === 1) return 0.6
  const base = input.plies === 3 ? 1.08 : 1
  return input.build === 'reverse-wrap' ? base : base * 0.55
}

/** Straight breaking strength, newtons. */
export function straightStrength(input: CordInput) {
  const f = FIBERS[input.fiber]
  const area = (Math.PI * input.diameter ** 2) / 4
  const size = Math.pow(3 / input.diameter, 0.1)
  return f.sigma * area * twistEfficiency(input.twist) * plyFactor(input) * (input.wet ? f.wet : 1) * size
}

/** Abrasion/durability index; loads need a minimum. */
export function durability(input: CordInput) {
  const f = FIBERS[input.fiber]
  return f.abrasion * (input.diameter / 3) * (input.plies === 3 ? 1.1 : 1) * (input.plies > 1 && input.build === 'reverse-wrap' ? 1 : 0.7)
}

/** Minutes to make the cord a load needs. Time grows with fiber volume (d²). */
export function makeMinutes(input: CordInput, metres: number) {
  return FIBERS[input.fiber].minPerM * metres * (input.diameter / 3) ** 2 * (input.plies === 3 ? 1.2 : 1)
}

export const G = 9.81

export interface Point {
  label: string
  /** Tension at this point, N. */
  tension: number
  /** Strength kept at this point (knot, bend or 1 for a straight run). */
  eff: number
  kind: 'knot' | 'bend' | 'span'
}

export interface Load {
  name: string
  brief: string
  /** Required margin (safety factor) for a gear load made of hand-made cord. */
  sf: number
  metres: number
  budgetMin: number
  cyclic: boolean
  minDurability: number
  points: (input: CordInput) => Point[]
}

// Food bag: 5 kg bag hoisted over a 50 mm branch (bark μ ≈ 0.3, half a wrap θ = π).
export const FOODBAG = { kg: 5, branchMm: 50, mu: 0.3, theta: Math.PI, jerk: 1.3 }
// Ridgeline: 3 × 3 m tarp, wind 30 km/h, 35 % of the wind force on a 4 m ridgeline with 20 cm sag, gusts × 1.5.
export const RIDGE = { windKmh: 30, area: 9, cd: 0.8, share: 0.35, span: 4, sag: 0.2, gust: 1.5 }

export function ridgeTension() {
  const v = RIDGE.windKmh / 3.6
  const q = 0.5 * 1.2 * v * v // Pa
  const F = q * RIDGE.area * RIDGE.cd * RIDGE.share
  const w = F / RIDGE.span // N/m
  const H = (w * RIDGE.span ** 2) / (8 * RIDGE.sag)
  const T = Math.sqrt(H * H + ((w * RIDGE.span) / 2) ** 2)
  return { q, F, w, H, T, peak: T * RIDGE.gust }
}

export const LOADS: Record<LoadId, Load> = {
  foodbag: {
    name: 'Hang a food bag',
    brief: `Hoist a ${FOODBAG.kg} kg bag over a ${FOODBAG.branchMm} mm branch, then tie off to the trunk (12 m of line). Friction over the bark makes the hauling side carry e^(μθ) ≈ ${capstan(FOODBAG.mu, FOODBAG.theta).toFixed(2)}× the bag's weight.`,
    sf: 2,
    metres: 12,
    budgetMin: 360,
    cyclic: false,
    minDurability: 0.3,
    points: (i) => {
      const W = FOODBAG.kg * G
      const c = capstan(FOODBAG.mu, FOODBAG.theta)
      return [
        { label: 'Knot at the bag', tension: W * FOODBAG.jerk, eff: knotEfficiency(i), kind: 'knot' },
        { label: 'Over the branch while hauling', tension: W * c * FOODBAG.jerk, eff: effectiveBendEfficiency(i, FOODBAG.branchMm), kind: 'bend' },
        { label: 'Tie-off at the trunk (friction helps)', tension: (W / c) * FOODBAG.jerk, eff: knotEfficiency(i), kind: 'knot' },
      ]
    },
  },
  ridgeline: {
    name: 'Tarp ridgeline in wind',
    brief: `A 4 m ridgeline under a 3 × 3 m tarp in ${RIDGE.windKmh} km/h wind with gusts. A tight line with only 20 cm of sag multiplies the wind force: H = wL²/(8s).`,
    sf: 2,
    metres: 6,
    budgetMin: 300,
    cyclic: true,
    minDurability: 0.3,
    points: (i) => {
      const { peak: T } = ridgeTension()
      return [
        { label: 'Knot at the anchor tree', tension: T, eff: knotEfficiency(i), kind: 'knot' },
        { label: 'Mid-span', tension: T, eff: 1, kind: 'span' },
      ]
    },
  },
  packframe: {
    name: 'Pack-frame lashing',
    brief: 'Lash the cross-bars of a pack frame carrying 15 kg. Eight strands share the load, so each sees little — but lashings are hauled tight (~120 N) and rub and shake for hours (6 m of cord).',
    sf: 2,
    metres: 6,
    budgetMin: 180,
    cyclic: true,
    minDurability: 0.75,
    points: (i) => {
      const perStrand = (15 * G * 2) / 8 // walking bounce ×2 shared by 8 strands
      return [
        { label: 'Starting hitch while tightening', tension: 120, eff: knotEfficiency(i), kind: 'knot' },
        { label: 'Each wrap under a bouncing load', tension: perStrand, eff: effectiveBendEfficiency(i, 30), kind: 'bend' },
      ]
    },
  },
  pothanger: {
    name: 'Tripod pot hanger',
    brief: 'Hang a 2.5 kg pot of water from a tripod over a small fire (3 m for the lashing and hanger). Loads are small; heat and bumping are the enemies.',
    sf: 3,
    metres: 3,
    budgetMin: 90,
    cyclic: false,
    minDurability: 0.2,
    points: (i) => [
      { label: 'Knot at the pot hook', tension: 2.5 * G * 1.5, eff: knotEfficiency(i) * 0.85, kind: 'knot' },
      { label: 'Tripod-head lashing', tension: 60, eff: effectiveBendEfficiency(i, 40), kind: 'bend' },
    ],
  },
}

export interface CordResult {
  straight: number
  points: (Point & { demand: number })[]
  governing: Point & { demand: number }
  /** capacity / actual load at the weakest point. */
  margin: number
  outcome: 'breaks' | 'marginal' | 'holds'
  minutes: number
  durability: number
  slips: boolean
  wornThrough: boolean
  modes: string[]
  score: number
  parts: { strength: number; economy: number; suitability: number }
}

export function evaluate(input: CordInput, loadId: LoadId): CordResult {
  const load = LOADS[loadId]
  const straight = straightStrength(input)
  // demand = the straight-cord strength needed so that this point just holds
  const points = load.points(input).map((p) => ({ ...p, demand: p.tension / p.eff }))
  const governing = points.reduce((a, b) => (b.demand > a.demand ? b : a))
  const margin = straight / governing.demand
  const outcome: CordResult['outcome'] = margin < 1 ? 'breaks' : margin < load.sf ? 'marginal' : 'holds'
  const minutes = makeMinutes(input, load.metres)
  const dur = durability(input)
  const knot = KNOTS[input.knot]
  const stiff = FIBERS[input.fiber].brittle * (input.wet ? 0.4 : 1)
  const slips = load.cyclic && knot.secure - stiff * 0.3 < 0.6
  const wornThrough = dur < load.minDurability

  const modes: string[] = []
  if (outcome !== 'holds') modes.push(`${outcome === 'breaks' ? 'Breaks' : 'Holds with too little margin'} at: ${governing.label.toLowerCase()} (${governing.kind === 'knot' ? `the knot keeps only ${Math.round(governing.eff * 100)} % of the cord's strength` : governing.kind === 'bend' ? `bending round the branch keeps ${Math.round(governing.eff * 100)} %` : 'the full span tension'}).`)
  if (input.twist < 12) modes.push('Too little twist: fibers are barely squeezed together, so they slide apart instead of sharing the load.')
  if (input.twist > 35) modes.push('Over-twisted: fibers run at a steep angle, carry load obliquely and kink.')
  if (input.plies === 1) modes.push('Single strand: its twist is unbalanced, so under load it spins, untwists and kinks.')
  else if (input.build === 'single-twist') modes.push('Plies twisted the same way as the strands: nothing balances the torque, so the cord unlays under load.')
  if (!input.wet && FIBERS[input.fiber].brittle >= 0.35) modes.push('Dry, stiff fiber cracks at the tight bend of the knot — soak it before tying.')
  if (slips) modes.push(`The ${knot.name.toLowerCase()} shakes loose under repeated loading.`)
  if (wornThrough) modes.push('Too thin or too soft for the rubbing it will get: expect it to wear through.')

  let strength = 0
  if (outcome === 'marginal') strength = 30 * clamp((margin - 1) / (load.sf - 1))
  if (outcome === 'holds') strength = 60
  if (slips) strength = Math.min(strength, 15)
  const overbuilt = margin > load.sf * 2.5
  const economy = margin < 1 ? 0 : 25 * clamp(load.budgetMin / Math.max(1, minutes)) * (overbuilt ? 0.6 : 1)
  const suitability = 15 * (wornThrough ? 0 : 1) * (slips ? 0 : 1) * (input.plies > 1 && input.build === 'reverse-wrap' ? 1 : 0.5)
  const score = Math.round(clamp(strength + economy + suitability, 0, 100))
  return { straight, points, governing, margin, outcome, minutes, durability: dur, slips, wornThrough, modes, score, parts: { strength, economy, suitability } }
}

export const defaultInput: CordInput = { fiber: 'nettle', plies: 2, twist: 20, diameter: 3, build: 'reverse-wrap', wet: false, knot: 'bowline' }

/** Kilograms-force for display. */
export const kgf = (n: number) => n / G
