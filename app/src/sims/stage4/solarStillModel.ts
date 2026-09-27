// Solar still — pure model (no React) so it can be unit-tested.
//
// A pit still produces water two ways at once and is limited by whichever runs out first:
//  1. ENERGY: evaporating water takes ~2.4 MJ per litre. A still converts only a small fraction of the
//     sunlight falling on its opening into condensed, collected water (reflection off the plastic, heat
//     conducted into the ground, drips that fall back, leaks). We use a best-case efficiency of 15 %,
//     roughly what Jackson & van Bavel's 1965 field stills achieved (≈1.5 L/day from a ~1 m pit, with
//     plant material, in Arizona summer sun).
//        Y_energy (L/day) = 0.15 × H (MJ/m²/day) × A (m²) / 2.4 (MJ/L)
//  2. SUPPLY: the water must come from somewhere — soil moisture (which the still dries out day by day),
//     plant material, or non-potable liquid you pour in (urine, seawater, brackish or algae-laden water).
//
// Against that we set the COST: extra sweat while digging (above resting in shade), which depends on
// time of day and climate, and on how much soil you move (pit volume ÷ digging rate for tool and soil).

export type ClimateId = 'desert-summer' | 'desert-winter' | 'temperate-summer' | 'overcast'
export const CLIMATES: Record<ClimateId, { name: string; H: number; sweat: Record<StartId, number> }> = {
  // H: daily solar radiation on a horizontal surface (MJ/m²/day), typical clear-sky orders of magnitude.
  // sweat: extra sweat rate while digging (L/h above resting in shade) by start time.
  'desert-summer': { name: 'Hot desert, summer (clear, ~40 °C)', H: 28, sweat: { dawn: 0.7, noon: 1.5, evening: 0.9 } },
  'desert-winter': { name: 'Desert, winter (clear, ~20 °C)', H: 15, sweat: { dawn: 0.35, noon: 0.7, evening: 0.4 } },
  'temperate-summer': { name: 'Temperate summer (fair, ~25 °C)', H: 22, sweat: { dawn: 0.4, noon: 0.8, evening: 0.45 } },
  overcast: { name: 'Overcast, mild (~18 °C)', H: 8, sweat: { dawn: 0.3, noon: 0.5, evening: 0.3 } },
}

export type GroundId = 'dry-sand' | 'damp-sand' | 'moist-soil' | 'rocky'
export const GROUNDS: Record<GroundId, { name: string; supply: number; decay: number; dig: number }> = {
  // supply: L per m² of pit opening on day 1; decay: fraction remaining each following day; dig: rate multiplier.
  'dry-sand': { name: 'Dry sand / gravel plain', supply: 0.15, decay: 0.5, dig: 1 },
  'damp-sand': { name: 'Damp sand (outer bend of a wash, behind dunes)', supply: 1.2, decay: 0.75, dig: 0.9 },
  'moist-soil': { name: 'Moist clay-loam soil', supply: 1.8, decay: 0.8, dig: 0.45 },
  rocky: { name: 'Rocky, hard-packed ground', supply: 0.1, decay: 0.5, dig: 0.2 },
}

export type ToolId = 'hands' | 'stick' | 'trowel' | 'shovel'
export const TOOLS: Record<ToolId, { name: string; lpm: number }> = {
  // litres of loose sand moved per minute of hard work
  hands: { name: 'Hands only', lpm: 6 },
  stick: { name: 'Digging stick + hands', lpm: 8 },
  trowel: { name: 'Trowel / cooking pot', lpm: 12 },
  shovel: { name: 'Folding shovel', lpm: 25 },
}

export type StartId = 'dawn' | 'noon' | 'evening'
export const STARTS: Record<StartId, { name: string; day1: number }> = {
  // day1: fraction of the first day's sun the still receives after it is built
  dawn: { name: 'Build at dawn (06:00)', day1: 0.85 },
  noon: { name: 'Build at noon (12:00)', day1: 0.45 },
  evening: { name: 'Build in the evening (18:00)', day1: 0 },
}

export const DIAMETERS = [0.6, 0.9, 1.2]

export interface StillInput {
  climate: ClimateId
  ground: GroundId
  tool: ToolId
  diameterM: number
  start: StartId
  days: number // days you will stay and operate the still (1–3)
  plants: boolean // cut non-toxic green vegetation placed in the pit
  liquidLpd: number // non-potable liquid poured into the pit each day (urine, seawater…)
}

export const EFFICIENCY = 0.15
export const LATENT_MJ_PER_L = 2.4

export const openingArea = (d: number) => (Math.PI * d * d) / 4
/** Bowl-shaped pit: depth ≈ half the diameter (max 0.6 m); volume ≈ ½ π r² h (paraboloid). */
export function pitVolumeL(d: number) {
  const h = Math.min(0.6, d / 2)
  return 0.5 * Math.PI * (d / 2) ** 2 * h * 1000
}

export function simulateStill(i: StillInput) {
  const c = CLIMATES[i.climate]
  const g = GROUNDS[i.ground]
  const A = openingArea(i.diameterM)
  const energyPerDay = (EFFICIENCY * c.H * A) / LATENT_MJ_PER_L
  const perDay: { day: number; energy: number; supply: number; yieldL: number }[] = []
  let soil = g.supply * A
  let plant = i.plants ? 0.35 * A / 0.64 : 0
  for (let d = 1; d <= i.days; d++) {
    const sunFrac = d === 1 ? STARTS[i.start].day1 : 1
    const energy = energyPerDay * sunFrac
    const supply = soil + plant + i.liquidLpd
    perDay.push({ day: d, energy, supply, yieldL: Math.min(energy, supply) })
    soil *= g.decay
    plant *= 0.5
  }
  const volumeL = pitVolumeL(i.diameterM)
  const digMin = volumeL / (TOOLS[i.tool].lpm * g.dig)
  const buildMin = digMin + 15 + (i.plants ? 15 : 0) // setting the sheet, rock, cup, tube; gathering plants
  const sweatCost = (buildMin / 60) * c.sweat[i.start]
  const totalYield = perDay.reduce((a, d) => a + d.yieldL, 0)
  const net = totalYield - sweatCost
  const limitedBy = perDay.length && perDay.every((d) => d.energy <= d.supply) ? 'sunlight' : 'water supply in the pit'
  return { A, energyPerDay, perDay, volumeL, digMin, buildMin, sweatCost, totalYield, net, limitedBy }
}

export type StillResult = ReturnType<typeof simulateStill>

// ---------- decision challenges ----------

export interface StillChallenge {
  id: string
  title: string
  brief: string
  fixed: Pick<StillInput, 'climate' | 'ground' | 'tool'>
  maxDays: number
  starts: StartId[]
  plantsAvailable: boolean
  liquidLpd: number // non-potable liquid available per day (0 = none)
  liquidName?: string
  alternative: { label: string; netL: number } // the best thing to do instead of building
}

export const CHALLENGES: StillChallenge[] = [
  {
    id: 'noon-plain',
    title: 'Noon on a gravel plain',
    brief: 'Hot desert, midsummer, 12:00. Your vehicle broke down on a gravel plain; a search plane is expected tomorrow morning. You have a plastic sheet and a cup but no tool. The ground is dry sand and gravel.',
    fixed: { climate: 'desert-summer', ground: 'dry-sand', tool: 'hands' },
    maxDays: 1,
    starts: ['noon', 'evening'],
    plantsAvailable: false,
    liquidLpd: 0,
    alternative: { label: 'Rest in the vehicle’s shade, ration sweat, signal', netL: 0 },
  },
  {
    id: 'wash-bend',
    title: 'Outer bend of a dry wash, 3 days',
    brief: 'Desert, midsummer. Rescue is unlikely for 3 days. Damp sand at the outer bend of a wash; a digging stick; known non-toxic green shrubs nearby. You can also pour your own urine into the pit (about 0.8 L/day).',
    fixed: { climate: 'desert-summer', ground: 'damp-sand', tool: 'stick' },
    maxDays: 3,
    starts: ['dawn', 'noon', 'evening'],
    plantsAvailable: true,
    liquidLpd: 0.8,
    liquidName: 'urine',
    alternative: { label: 'Rest in shade and wait', netL: 0 },
  },
  {
    id: 'beach',
    title: 'Coastal desert with seawater, 3 days',
    brief: 'A dry coast (think Namib or Baja) with no fresh water. You have a trowel, a plastic sheet and seawater in unlimited supply — you can carry ~3 L/day into the pit.',
    fixed: { climate: 'desert-summer', ground: 'damp-sand', tool: 'trowel' },
    maxDays: 3,
    starts: ['dawn', 'noon', 'evening'],
    plantsAvailable: false,
    liquidLpd: 3,
    liquidName: 'seawater',
    alternative: { label: 'Rest in shade and wait', netL: 0 },
  },
  {
    id: 'forest',
    title: 'Overcast forest with a stream 1 km away',
    brief: 'Temperate forest, overcast. Stranded for 3 days with a filter and chlorine tablets. A stream is 1 km away (about 6 L/day net after walking and treating). Moist soil, bare hands.',
    fixed: { climate: 'overcast', ground: 'moist-soil', tool: 'hands' },
    maxDays: 3,
    starts: ['dawn', 'noon', 'evening'],
    plantsAvailable: false,
    liquidLpd: 0,
    alternative: { label: 'Walk to the stream, collect and treat', netL: 6 },
  },
]

export interface StillChoice {
  diameterM: number
  start: StartId
  days: number
  plants: boolean
  pourLiquid: boolean
}

export const inputFor = (ch: StillChallenge, c: StillChoice): StillInput => ({
  ...ch.fixed,
  diameterM: c.diameterM,
  start: ch.starts.includes(c.start) ? c.start : ch.starts[0],
  days: Math.min(ch.maxDays, Math.max(1, c.days)),
  plants: ch.plantsAvailable && c.plants,
  liquidLpd: c.pourLiquid ? ch.liquidLpd : 0,
})

/** Best still anyone could build in this challenge (brute force over the learner's controls). */
export function bestStill(ch: StillChallenge) {
  let best: { choice: StillChoice; net: number } | null = null
  for (const diameterM of DIAMETERS)
    for (const start of ch.starts)
      for (let days = 1; days <= ch.maxDays; days++)
        for (const plants of ch.plantsAvailable ? [false, true] : [false])
          for (const pourLiquid of ch.liquidLpd > 0 ? [false, true] : [false]) {
            const choice = { diameterM, start, days, plants, pourLiquid }
            const net = simulateStill(inputFor(ch, choice)).net
            if (!best || net > best.net) best = { choice, net }
          }
  return best!
}

/** Score a decision: value of what you chose ÷ value of the best available option (build or alternative). */
export function scoreDecision(ch: StillChallenge, decision: 'build' | 'skip', c: StillChoice) {
  const best = bestStill(ch)
  const chosenNet = simulateStill(inputFor(ch, c)).net
  const bestValue = Math.max(best.net, ch.alternative.netL, 0)
  const value = decision === 'build' ? chosenNet : Math.max(0, ch.alternative.netL)
  let score: number
  if (bestValue <= 0.05) score = decision === 'skip' ? 100 : Math.max(0, Math.round(40 + 40 * chosenNet))
  else {
    const ratio = Math.max(0, Math.min(1, value / bestValue))
    // A right decision with a positive (if sub-optimal) still earns 40 plus credit for how close it got to the best.
    score = Math.round(decision === 'build' && chosenNet > 0 && best.net >= ch.alternative.netL ? 40 + 60 * ratio : 100 * ratio)
  }
  const shouldBuild = best.net > Math.max(0.05, ch.alternative.netL)
  return { score: Math.max(0, Math.min(100, score)), best, chosenNet, bestValue, shouldBuild }
}
