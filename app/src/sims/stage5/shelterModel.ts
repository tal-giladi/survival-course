// Shelter Builder model — a deliberately simple, directionally correct model of one person spending a
// night (or a desert afternoon and night) in a shelter they chose and built.
//
// Assumptions (documented so learners can critique them):
//  - One 70 kg adult lying still: metabolic heat 85 W, heat capacity ≈ 245 kJ per °C of core-equivalent heat.
//  - Skin 33 °C in the cold, 35 °C in heat. Vasoconstriction adds tissue insulation when losing heat.
//  - Lying: 0.5 m² in contact with the ground, 1.3 m² exposed to air and surroundings.
//  - Conduction through the bed: R = compressed thickness / k (m²·K/W). Beds compress to 25–35 % of their
//    loose height. Wet beds conduct about four times better. A closed-cell foam pad adds R ≈ 0.3.
//  - Convection: h_c ≈ 3 + 8.3·√v (v in m/s inside the shelter). Radiation: h_r ≈ 4.7 W/(m²·K) against a
//    mean radiant temperature that mixes the shelter surface with the (cold) clear night sky.
//  - Shelter air is warmed by the heat you lose into it and cooled by its conductance UA (W/K):
//    walls plus air leakage. Snow shelters cannot rise much above 0 °C inside (the walls would melt).
//  - Shivering can make up at most ~70 % of a deficit (max 150 W); what remains accumulates as a heat debt.
//  - Hazards are deterministic risk values (0–1), not dice: a bad site "got lucky" is not a lesson worth
//    teaching. Risk ≥ 0.5 means the event happens in the story.
// Numbers are for building intuition about which controls matter most — not for real-world decisions.

export type EnvId = 'forest' | 'snow' | 'desert' | 'tropical'
export type DesignId = 'none' | 'aframe' | 'leanto' | 'diamond' | 'wedge' | 'debris' | 'reflector' | 'trench' | 'quinzhee' | 'shade1' | 'shade2' | 'dugout' | 'platform'
export type Dir = 'N' | 'E' | 'S' | 'W'
export type BedMat = 'none' | 'leaves' | 'boughs' | 'grass' | 'fronds' | 'clothing'
export type HeatSource = 'none' | 'candle' | 'stove'
export type Material = 'debris' | 'boughs' | 'wood' | 'poles' | 'snow' | 'sand' | 'grass' | 'fronds'
export type Pitch = 'low' | 'high'
export type Pace = 'steady' | 'hard'

export interface Hour {
  clock: string
  t: number // air temperature °C
  wind: number // km/h in the open
  rain: number // 0 none … 1 heavy
  sun: number // 0 night … 1 full overhead sun
  clear: number // 0 overcast … 1 clear sky (radiation to the sky at night)
  rh: number // relative humidity 0–1
}

export interface Site {
  id: string
  name: string
  x: number
  y: number
  desc: string
  wind: number // exposure 0 sheltered … 1 fully exposed
  coldPool: number // 0 … 1 (hollows and valley floors on calm clear nights)
  flood: number
  overhead: number // dead trees / branches / fronds
  rockfall: number
  avalanche: number
  insects: number
  critters: number // snakes, scorpions, ants under rocks
  lightning: number
  canopy: number // 0 open sky … 1 dense canopy
  shade: number // natural daytime shade 0 … 1
  drainage: number // 1 well drained … 0 waterlogged when it rains
  mat: Partial<Record<Material, number>> // availability 0 … 1 within easy reach
}

export interface Env {
  id: EnvId
  name: string
  blurb: string
  briefing: string
  windFrom: Dir
  budget: number // minutes of usable light (or cool morning) for building
  hot: boolean
  clo: number // clothing insulation worn at rest (clo)
  cloNight?: number // extra layer put on after dark (desert fleece)
  pad: number // fraction of the body a foam pad covers (0 = no pad in the kit)
  bivy: boolean
  net: boolean
  stove: boolean
  water: number // litres carried
  waterOk: number // litres a well-sheltered, resting person would lose over the period
  kit: string[]
  designs: DesignId[]
  beds: BedMat[]
  fireAllowed: boolean
  ground: 'soil' | 'snow' | 'sand' | 'tropical'
  trig: { flood: number; wind: number; rockfall: number; avalanche: number; lightning: number; insects: number; critters: number }
  hours: Hour[]
  sites: Site[]
}

export interface Design {
  id: DesignId
  name: string
  blurb: string
  base: number // minutes of work at a site with ideal materials
  mat?: Material // what the structure is built from (tarp designs need poles/cord only)
  windBlock: number
  rainBlock: number
  sky: number // fraction of the sky still "seen" from the bed
  ua: number // shelter conductance at a low pitch, W/K (walls + leakage)
  sunBlock: number
  roofRad: number // 1 = a single thin sheet that gets hot in the sun, lower = cooler roof
  directional: number // how much the opening direction matters (0 … 1)
  tarpLike: boolean // can flog or blow down in strong wind
  enclosed: boolean
  raised: boolean
  walls?: 'debris' | 'snow'
  fire?: number // radiant share of a fire reaching you (reflector designs)
  needsTarp?: boolean
  needsShovel?: boolean
}

export interface Choice {
  site: string
  design: DesignId
  opening: Dir
  pitch: Pitch
  bed: BedMat
  bedCm: number
  pad: boolean
  bivy: boolean
  wallCm: number
  vent: boolean
  heat: HeatSource
  sinter: boolean
  net: boolean
  fuelHours: number
  pace: Pace
}

export interface HourResult {
  clock: string
  tOut: number
  tIn: number
  conv: number
  rad: number
  cond: number
  evap: number
  gain: number // sun + fire + stove reaching the body (W)
  shiver: number
  sweat: number
  S: number // net storage after shivering/sweating (W)
  bank: number // cumulative stored heat (kJ, negative = debt)
  wet: number
}

export type Severity = 'minor' | 'serious' | 'lethal'

export interface Hazard {
  id: string
  label: string
  risk: number
  severity: Severity
  happened: boolean
  text: string
}

export interface BuildTime {
  effort: number // minutes of physical work
  wait: number // minutes of waiting (sintering)
  total: number
  overflow: number // minutes past the budget
  completion: number // 0 … 1 fraction of the structure finished
  sweat: number // litres of sweat while building
  kcal: number
}

export interface SimResult {
  hours: HourResult[]
  build: BuildTime
  hazards: Hazard[]
  critical: boolean
  coldDebt: number // kJ, worst point of the night
  heatLoad: number // kJ, worst stored heat
  water: number // litres lost (building sweat + resting sweat + breath)
  shiverHours: number
  meanWet: number
  structuralFailure: string | null
  scores: { thermal: number; dryness: number; hazards: number; effort: number }
  score: number
  verdict: string
  log: string[]
}

const DIRS: Dir[] = ['N', 'E', 'S', 'W']
const DEG: Record<Dir, number> = { N: 0, E: 90, S: 180, W: 270 }
export const dirName: Record<Dir, string> = { N: 'north', E: 'east', S: 'south', W: 'west' }

export const clamp = (x: number, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, x))

// ---------------------------------------------------------------- designs

export const DESIGNS: Record<DesignId, Design> = {
  none: { id: 'none', name: 'No structure — bed (and bivy) only', blurb: 'Fastest. Only your bed, clothing and any bivy bag protect you.', base: 5, windBlock: 0, rainBlock: 0, sky: 1, ua: 999, sunBlock: 0, roofRad: 0, directional: 0, tarpLike: false, enclosed: false, raised: false },
  aframe: { id: 'aframe', name: 'Tarp A-frame', blurb: 'Ridgeline, both sides staked low. Good all-round rain and wind cover; ends stay open.', base: 20, windBlock: 0.75, rainBlock: 0.9, sky: 0.12, ua: 25, sunBlock: 0.7, roofRad: 1, directional: 0.5, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  leanto: { id: 'leanto', name: 'Tarp lean-to', blurb: 'One edge high, one on the ground. Fast, great with a fire in front — weak if the wind swings.', base: 15, windBlock: 0.7, rainBlock: 0.7, sky: 0.45, ua: 40, sunBlock: 0.6, roofRad: 1, directional: 1, tarpLike: true, enclosed: false, raised: false, fire: 0.6, needsTarp: true },
  diamond: { id: 'diamond', name: 'Tarp diamond (flying diamond)', blurb: 'One corner staked into the wind, the opposite corner high. Quick, sheds wind well, less floor.', base: 15, windBlock: 0.65, rainBlock: 0.75, sky: 0.3, ua: 30, sunBlock: 0.6, roofRad: 1, directional: 0.8, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  wedge: { id: 'wedge', name: 'Tarp wedge (closed low end)', blurb: 'Low closed end into the wind, higher open end downwind. Very storm-worthy, less room.', base: 25, windBlock: 0.85, rainBlock: 0.9, sky: 0.12, ua: 18, sunBlock: 0.7, roofRad: 1, directional: 0.9, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  debris: { id: 'debris', name: 'Debris hut', blurb: 'Ridgepole frame buried under a thick pile of leaves. Warm without a tarp — if the pile is deep. Slow.', base: 45, mat: 'debris', windBlock: 0.95, rainBlock: 0.9, sky: 0, ua: 0, sunBlock: 0.95, roofRad: 0.3, directional: 0.2, tarpLike: false, enclosed: true, raised: false, walls: 'debris' },
  reflector: { id: 'reflector', name: 'Natural lean-to + fire and reflector', blurb: 'Pole frame thatched with boughs, a long fire in front and a log reflector behind it. Warm while the fire burns; fuel-hungry.', base: 60, mat: 'poles', windBlock: 0.7, rainBlock: 0.7, sky: 0.35, ua: 40, sunBlock: 0.6, roofRad: 0.4, directional: 1, tarpLike: false, enclosed: false, raised: false, fire: 1 },
  trench: { id: 'trench', name: 'Snow trench (tarp roof)', blurb: 'Body-sized trench dug into firm snow, roofed with the tarp or blocks. About an hour of digging.', base: 60, mat: 'snow', windBlock: 0.95, rainBlock: 0.9, sky: 0.03, ua: 5, sunBlock: 0.9, roofRad: 0.3, directional: 0.2, tarpLike: false, enclosed: true, raised: false, walls: 'snow', needsShovel: true },
  quinzhee: { id: 'quinzhee', name: 'Quinzhee (piled and hollowed snow)', blurb: 'Pile snow, let it sinter, hollow it out to an even wall. Warmest snow option — and the slowest.', base: 80, mat: 'snow', windBlock: 1, rainBlock: 1, sky: 0, ua: 0, sunBlock: 1, roofRad: 0.1, directional: 0.15, tarpLike: false, enclosed: true, raised: false, walls: 'snow', needsShovel: true },
  shade1: { id: 'shade1', name: 'Single-layer shade tarp', blurb: 'One tarp raised on poles or rocks for shade, sides open for air flow.', base: 20, windBlock: 0.2, rainBlock: 0.6, sky: 0.25, ua: 60, sunBlock: 0.65, roofRad: 1, directional: 0.3, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  shade2: { id: 'shade2', name: 'Double-roof shade (two layers, air gap)', blurb: 'Two sheets 20–30 cm apart: the top one takes the sun, the gap vents the heat, the lower one stays cool.', base: 40, windBlock: 0.2, rainBlock: 0.7, sky: 0.2, ua: 60, sunBlock: 0.9, roofRad: 0.3, directional: 0.3, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  dugout: { id: 'dugout', name: 'Dug-down double-roof shade', blurb: 'Scrape a trench 40–50 cm into the sand to cooler layers, then a double roof over it. Heavy digging.', base: 80, mat: 'sand', windBlock: 0.5, rainBlock: 0.6, sky: 0.15, ua: 45, sunBlock: 0.92, roofRad: 0.3, directional: 0.3, tarpLike: true, enclosed: false, raised: false, needsTarp: true },
  platform: { id: 'platform', name: 'Raised platform bed + A-frame roof', blurb: 'Poles lashed into a bed 50 cm off the ground, tarp A-frame above. Off the wet, the ants and the run-off.', base: 75, mat: 'poles', windBlock: 0.6, rainBlock: 0.9, sky: 0.12, ua: 40, sunBlock: 0.7, roofRad: 1, directional: 0.5, tarpLike: true, enclosed: false, raised: true, needsTarp: true },
}

export const BEDS: Record<BedMat, { name: string; k: number; comp: number; mat?: Material; fixedR?: number }> = {
  none: { name: 'Nothing — lie on the ground', k: 1, comp: 1, fixedR: 0 },
  leaves: { name: 'Dry leaves / needles', k: 0.05, comp: 0.25, mat: 'debris' },
  boughs: { name: 'Conifer boughs', k: 0.06, comp: 0.35, mat: 'boughs' },
  grass: { name: 'Dry grass', k: 0.05, comp: 0.25, mat: 'grass' },
  fronds: { name: 'Palm fronds / big leaves (damp)', k: 0.09, comp: 0.35, mat: 'fronds' },
  clothing: { name: 'Pack, rope and spare clothes', k: 0.06, comp: 1, fixedR: 0.12 },
}

// ---------------------------------------------------------------- environments

const hrs = (start: number, t: number[], wind: number[], rain: number[], sun: number[], clear: number[], rh: number[]): Hour[] =>
  t.map((tt, i) => ({
    clock: `${String((start + i) % 24).padStart(2, '0')}:00`,
    t: tt,
    wind: wind[i] ?? wind[wind.length - 1],
    rain: rain[i] ?? 0,
    sun: sun[i] ?? 0,
    clear: clear[i] ?? clear[clear.length - 1],
    rh: rh[i] ?? rh[rh.length - 1],
  }))

const site = (s: Partial<Site> & Pick<Site, 'id' | 'name' | 'x' | 'y' | 'desc'>): Site => ({
  wind: 0.5, coldPool: 0, flood: 0, overhead: 0, rockfall: 0, avalanche: 0, insects: 0, critters: 0, lightning: 0, canopy: 0, shade: 0, drainage: 0.8, mat: {}, ...s,
})

export const ENVIRONMENTS: Env[] = [
  {
    id: 'forest',
    name: 'Temperate forest — autumn storm',
    blurb: '7 °C falling to 0 °C. Rain and a westerly gale until about 01:00, then clearing and calm.',
    briefing: 'Your day hike went wrong and you will be out tonight. It is 15:30; usable light ends at 18:00 (150 minutes). A westerly storm will bring rain and 40–45 km/h wind until around 01:00, then the sky clears, the wind dies and it drops to about 0 °C by dawn.',
    windFrom: 'W',
    budget: 150,
    hot: false,
    clo: 1.5,
    pad: 0.3,
    bivy: false,
    net: false,
    stove: false,
    water: 1.5,
    waterOk: 1.5,
    kit: ['3 × 3 m tarp', '15 m cord', 'Knife', 'Foam sit-pad (covers hips)', 'Lighter', 'Fleece + waterproof shell (≈1.5 clo)'],
    designs: ['none', 'aframe', 'leanto', 'diamond', 'wedge', 'debris', 'reflector'],
    beds: ['none', 'clothing', 'leaves', 'boughs'],
    fireAllowed: true,
    ground: 'soil',
    trig: { flood: 0.8, wind: 0.9, rockfall: 0.7, avalanche: 0, lightning: 0.1, insects: 0.1, critters: 0 },
    hours: hrs(18,
      [7, 6, 6, 5, 5, 4, 4, 3, 2, 1, 1, 0, 1],
      [35, 40, 45, 45, 40, 30, 20, 10, 5, 3, 3, 3, 5],
      [0.6, 0.8, 1, 1, 0.8, 0.5, 0.2, 0, 0, 0, 0, 0, 0],
      [],
      [0, 0, 0, 0, 0, 0, 0.3, 0.8, 1, 1, 1, 1, 1],
      [0.95, 0.95, 0.95, 0.95, 0.95, 0.95, 0.9, 0.85, 0.85, 0.9, 0.9, 0.95, 0.95]),
    sites: [
      site({ id: 'ridge', name: 'Open ridge crest', x: 90, y: 90, desc: 'Flat, dry, rocky — and in the full force of the westerly.', wind: 1, canopy: 0.1, drainage: 1, mat: { debris: 0.2, boughs: 0.2, wood: 0.3, poles: 0.3 }, lightning: 0.5 }),
      site({ id: 'bench', name: 'Mid-slope bench, living beech', x: 250, y: 150, desc: 'A level shelf on the east (lee) side of the ridge, thick leaf litter, sound living trees.', wind: 0.35, coldPool: 0.1, canopy: 0.6, overhead: 0.05, drainage: 0.85, mat: { debris: 1, boughs: 0.4, wood: 0.8, poles: 0.9 } }),
      site({ id: 'snag', name: 'Beside a huge dead snag', x: 380, y: 100, desc: 'A flat spot with endless dry wood — under a dead tree with hanging broken limbs.', wind: 0.45, coldPool: 0.1, canopy: 0.3, overhead: 0.9, drainage: 0.8, mat: { debris: 0.8, boughs: 0.3, wood: 1, poles: 1 } }),
      site({ id: 'hollow', name: 'Leafy hollow by the stream', x: 470, y: 280, desc: 'Deep, dry-looking leaves, totally still air, water a few steps away.', wind: 0.15, coldPool: 1, flood: 0.75, canopy: 0.4, drainage: 0.2, insects: 0.2, mat: { debris: 1, boughs: 0.3, wood: 0.7, poles: 0.8 } }),
      site({ id: 'thicket', name: 'Lee of a dense spruce thicket', x: 300, y: 250, desc: 'Needle duff, boughs everywhere, the thicket breaks the west wind. A little lower on the slope.', wind: 0.2, coldPool: 0.35, canopy: 0.8, overhead: 0.1, drainage: 0.6, mat: { debris: 0.6, boughs: 1, wood: 0.7, poles: 0.8 } }),
      site({ id: 'crag', name: 'Under a crag, fresh rock chips', x: 540, y: 120, desc: 'Perfect windbreak and a dry overhang. Fresh angular rock fragments lie on the ground.', wind: 0.2, coldPool: 0.1, canopy: 0.2, rockfall: 0.8, drainage: 0.9, mat: { debris: 0.4, boughs: 0.3, wood: 0.5, poles: 0.5 } }),
    ],
  },
  {
    id: 'snow',
    name: 'Subarctic snow — clear and still',
    blurb: '−12 °C at dusk falling to −24 °C. Clear sky, northerly breeze, 1–1.5 m of snow.',
    briefing: 'Your snowmobile has failed; help is sent for (satellite messenger) but will not reach you before morning. It is 13:00; light fails at 16:00 (180 minutes). Clear, calm-ish and very cold: −12 °C at dusk, −24 °C by dawn, 10–20 km/h from the north.',
    windFrom: 'N',
    budget: 180,
    hot: false,
    clo: 3.2,
    pad: 0.8,
    bivy: true,
    net: false,
    stove: true,
    water: 2,
    waterOk: 1.5,
    kit: ['Avalanche shovel', 'Emergency bivy bag', 'Thin full-length foam pad', 'Tarp', 'Cord', 'Small stove + fuel', 'Candle', 'Full winter clothing (≈3.2 clo)'],
    designs: ['none', 'aframe', 'wedge', 'leanto', 'trench', 'quinzhee'],
    beds: ['none', 'clothing', 'boughs'],
    fireAllowed: false,
    ground: 'snow',
    trig: { flood: 0.7, wind: 0.4, rockfall: 0.1, avalanche: 0.8, lightning: 0, insects: 0, critters: 0 },
    hours: hrs(16,
      [-12, -13, -15, -16, -17, -18, -19, -20, -21, -22, -22, -23, -23, -24, -24, -23],
      [20, 18, 15, 15, 12, 12, 10, 10, 10, 10, 10, 10, 10, 12, 12, 15],
      [],
      [],
      [1],
      [0.7]),
    sites: [
      site({ id: 'lake', name: 'Open frozen lake', x: 110, y: 250, desc: 'Flat, wind-packed snow, visible from the air — no shelter from the north wind at all.', wind: 1, drainage: 1, mat: { snow: 0.6, boughs: 0 } }),
      site({ id: 'edge', name: 'Spruce forest edge, south side', x: 300, y: 170, desc: 'In the lee of the trees, 1.3 m of settled snow, spruce boughs within reach.', wind: 0.3, coldPool: 0.15, canopy: 0.5, overhead: 0.05, mat: { snow: 0.8, boughs: 1, wood: 0.6, poles: 0.6 } }),
      site({ id: 'drift', name: 'Deep drift below a corniced slope', x: 470, y: 90, desc: 'A 3 m wind-drifted bank — dig-ready snow — on a steep lee slope under a cornice.', wind: 0.2, avalanche: 0.9, mat: { snow: 1, boughs: 0.2 } }),
      site({ id: 'creek', name: 'Snowed-over creek bottom', x: 330, y: 300, desc: 'Sheltered willow flat, soft snow. Slushy patches where you broke through earlier.', wind: 0.25, coldPool: 1, flood: 0.7, canopy: 0.2, drainage: 0.3, mat: { snow: 0.7, boughs: 0.3, wood: 0.4, poles: 0.4 } }),
      site({ id: 'knoll', name: 'Low wooded knoll', x: 540, y: 250, desc: 'Gentle rise with scattered spruce; moderate snow and some wind.', wind: 0.5, coldPool: 0, canopy: 0.3, mat: { snow: 0.6, boughs: 0.8, wood: 0.5, poles: 0.5 } }),
    ],
  },
  {
    id: 'desert',
    name: 'Hot desert — stranded at 10:00',
    blurb: '44 °C by mid-afternoon, 9 °C before dawn. Clear, dry, 3 L of water.',
    briefing: 'Your vehicle is disabled on a desert track and you have walked a short way to find shelter options; you will wait for the search. It is 10:00 and already 36 °C — build before it peaks around 12:00 (120 minutes). The afternoon reaches 44 °C in full sun; after dark it falls to about 9 °C. You have 3 L of water and a fleece for the night.',
    windFrom: 'N',
    budget: 120,
    hot: true,
    clo: 0.6,
    cloNight: 1.2,
    pad: 0,
    bivy: false,
    net: false,
    stove: false,
    water: 3,
    waterOk: 2.5,
    kit: ['Tarp', 'Emergency blanket (second sheet)', 'Cord', '3 L water', 'Light long-sleeved clothing (≈0.6 clo)', 'Fleece for the night (+0.6 clo)'],
    designs: ['none', 'shade1', 'shade2', 'dugout', 'leanto'],
    beds: ['none', 'clothing', 'grass'],
    fireAllowed: false,
    ground: 'sand',
    trig: { flood: 0.5, wind: 0.4, rockfall: 0.3, avalanche: 0, lightning: 0.4, insects: 0.1, critters: 1 },
    hours: hrs(12,
      [40, 42, 44, 44, 43, 41, 37, 32, 28, 24, 21, 18, 16, 14, 12, 11, 10, 9],
      [15, 20, 20, 20, 20, 15, 10, 8, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
      [],
      [0.95, 1, 0.9, 0.75, 0.55, 0.3, 0.05, 0],
      [1],
      [0.15, 0.12, 0.1, 0.1, 0.1, 0.12, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.5, 0.55, 0.55, 0.6]),
    sites: [
      site({ id: 'wadi', name: 'Sandy wash (wadi) floor', x: 300, y: 280, desc: 'Soft sand, the bank gives an hour or two of shade. Storm clouds sit over the distant mountains.', wind: 0.4, coldPool: 0.8, flood: 0.9, shade: 0.2, drainage: 0.4, critters: 0.3, mat: { sand: 1, grass: 0.4, poles: 0.4 } }),
      site({ id: 'flat', name: 'Open gravel flat by the track', x: 140, y: 140, desc: 'Close to your vehicle, easy to see from the air, no shade of any kind.', wind: 0.9, shade: 0, drainage: 1, mat: { sand: 0.5, grass: 0.1, poles: 0.2 } }),
      site({ id: 'overhang', name: 'Rock overhang', x: 500, y: 110, desc: 'Deep natural shade all afternoon. Rock slabs and crevices all around.', wind: 0.4, shade: 0.9, rockfall: 0.4, critters: 0.9, drainage: 1, mat: { sand: 0.3, grass: 0.2, poles: 0.2 } }),
      site({ id: 'acacia', name: 'Lone acacia on a low rise', x: 430, y: 220, desc: 'Dappled shade, a breeze, slightly raised above the wash.', wind: 0.7, shade: 0.45, drainage: 0.9, critters: 0.2, insects: 0.2, mat: { sand: 0.8, grass: 0.5, poles: 0.6 } }),
      site({ id: 'hill', name: 'Rocky hilltop', x: 560, y: 290, desc: 'Breezy and very visible to searchers, bare rock, exposed.', wind: 1, shade: 0, lightning: 0.9, drainage: 1, critters: 0.3, mat: { sand: 0.1, grass: 0.1, poles: 0.1 } }),
    ],
  },
  {
    id: 'tropical',
    name: 'Tropical rainforest — wet season',
    blurb: '27 °C falling to 22 °C, 95 % humidity. Torrential rain 20:00–23:00, a river nearby.',
    briefing: 'You are separated from your group in lowland rainforest. It is 16:30 and dark comes fast at about 18:00 (90 minutes). Heavy rain is almost certain in the evening; the river is already brown. Temperatures stay 22–27 °C but everything will be soaked.',
    windFrom: 'E',
    budget: 90,
    hot: true,
    clo: 0.5,
    pad: 0,
    bivy: false,
    net: true,
    stove: false,
    water: 2,
    waterOk: 1.5,
    kit: ['Tarp', 'Cord', 'Machete', 'Mosquito net', 'Light long clothing (≈0.5 clo)'],
    designs: ['none', 'aframe', 'leanto', 'diamond', 'platform'],
    beds: ['none', 'clothing', 'fronds'],
    fireAllowed: false,
    ground: 'tropical',
    trig: { flood: 0.95, wind: 0.6, rockfall: 0, avalanche: 0, lightning: 0.5, insects: 1, critters: 0.5 },
    hours: hrs(18,
      [27, 26, 25, 25, 24, 24, 23, 23, 23, 22, 22, 22],
      [5, 10, 25, 25, 20, 10, 5, 5, 5, 5, 5, 5],
      [0, 0.3, 1, 1, 1, 0.6, 0.2, 0, 0, 0.3, 0, 0],
      [],
      [0],
      [0.95]),
    sites: [
      site({ id: 'bank', name: 'Sandy river bank', x: 140, y: 280, desc: 'The only open, flat, bare ground around. Easy water, clouds of mosquitoes at dusk.', wind: 0.5, flood: 0.95, canopy: 0.2, drainage: 0.5, insects: 0.9, critters: 0.3, mat: { poles: 0.6, fronds: 0.5 } }),
      site({ id: 'rise', name: 'Gentle rise 10 m above the river', x: 330, y: 140, desc: 'Sloping just enough to drain, sound young trees for poles, a few fallen fronds.', wind: 0.4, canopy: 0.7, overhead: 0.15, drainage: 0.9, insects: 0.5, critters: 0.3, mat: { poles: 1, fronds: 0.8 } }),
      site({ id: 'giant', name: 'Under a giant emergent tree', x: 480, y: 110, desc: 'Buttress roots make natural walls — and dead limbs hang in the crown far above.', wind: 0.3, canopy: 0.8, overhead: 0.8, drainage: 0.7, insects: 0.5, critters: 0.5, mat: { poles: 0.8, fronds: 0.7 } }),
      site({ id: 'ants', name: 'Flat ground with busy trails', x: 520, y: 260, desc: 'Flat and open under the canopy. Lines of ants cross it; there is a mound nearby.', wind: 0.35, canopy: 0.7, overhead: 0.1, drainage: 0.6, insects: 1, critters: 0.6, mat: { poles: 0.9, fronds: 0.8 } }),
      site({ id: 'hollowT', name: 'Leafy hollow at the stream mouth', x: 290, y: 300, desc: 'Sheltered, soft and low, where a side stream meets the river.', wind: 0.2, flood: 0.8, canopy: 0.6, drainage: 0.1, insects: 0.9, critters: 0.4, mat: { poles: 0.8, fronds: 1 } }),
    ],
  },
]

export const envById = (id: EnvId) => ENVIRONMENTS.find((e) => e.id === id)!

// ---------------------------------------------------------------- helpers

/** 1 when the opening faces downwind (back to the wind), 0.7 side-on, 0.3 facing into the wind. */
export function orientFactor(opening: Dir, windFrom: Dir): number {
  const d = Math.abs(DEG[opening] - DEG[windFrom]) % 360
  const diff = d > 180 ? 360 - d : d
  return diff === 0 ? 0.3 : diff === 90 ? 0.7 : 1
}

/** Minutes multiplier from material availability: plenty nearby ×1, none nearby ×4. */
export function matFactor(s: Site, m?: Material): number {
  if (!m) return 1
  return 1 / (0.25 + 0.75 * (s.mat[m] ?? 0))
}

export function defaultChoice(env: Env): Choice {
  return {
    site: '',
    design: env.designs.includes('aframe') ? 'aframe' : env.designs[1],
    opening: DIRS[(DIRS.indexOf(env.windFrom) + 2) % 4],
    pitch: 'low',
    bed: env.beds.includes('leaves') ? 'leaves' : env.beds[1],
    bedCm: env.hot ? 10 : 20,
    pad: env.pad > 0,
    bivy: env.bivy,
    wallCm: env.id === 'snow' ? 30 : 60,
    vent: true,
    heat: 'none',
    sinter: true,
    net: env.net,
    fuelHours: 0,
    pace: 'steady',
  }
}

/** Snow shelter wall conductance: ~6 m² of snow wall with k ≈ 0.1 W/(m·K) (settled snow). */
export const SNOW_K = 0.1
const DEBRIS_K = 0.06

export function buildTime(env: Env, c: Choice): BuildTime {
  const s = env.sites.find((x) => x.id === c.site) ?? env.sites[0]
  const d = DESIGNS[c.design]
  const bed = BEDS[c.bed]
  let effort = d.base * matFactor(s, d.mat)
  if (d.walls === 'debris') effort += c.wallCm * 1.2 * matFactor(s, 'debris')
  if (d.id === 'quinzhee') effort += Math.max(0, 40 - c.wallCm) * 0.8 // thinner walls = more hollowing
  if (!bed.fixedR && c.bed !== 'none') effort += c.bedCm * 1.0 * matFactor(s, bed.mat)
  if (c.bed === 'clothing') effort += 5
  if (d.fire && env.fireAllowed) effort += c.fuelHours * 12 * matFactor(s, 'wood')
  if (d.id === 'platform') effort += 0
  if (c.pace === 'hard') effort *= 0.75
  effort = Math.round(effort)
  const wait = d.id === 'quinzhee' && c.sinter ? 90 : 0
  const total = effort + wait
  const overflow = Math.max(0, total - env.budget)
  // Work after dark goes at 1.5× the time; beyond ~2 h of dark work the structure stays unfinished.
  const darkWork = overflow * 1.5
  const completion = darkWork > 120 ? clamp((env.budget + 120 / 1.5) / total) : 1
  const tBuild = env.hot ? (env.id === 'desert' ? 38 : 27) : env.hours[0].t
  const heatMult = 1 + Math.max(0, tBuild - 15) / 12
  const cloMult = 1 + Math.max(0, env.clo - 1) * 0.1 // you vent layers while working
  const sweat = (effort / 60) * (c.pace === 'hard' ? 0.8 : 0.25) * heatMult * (env.hot ? 1 : cloMult)
  const kcal = effort * (c.pace === 'hard' ? 9 : 6)
  return { effort, wait, total, overflow, completion, sweat: +sweat.toFixed(2), kcal: Math.round(kcal) }
}

function groundTemp(env: Env, h: Hour, d: Design, shade: number): number {
  switch (env.ground) {
    case 'soil': return h.t + 3
    case 'snow': return d.enclosed ? Math.max(h.t, -6) : Math.min(-2, h.t + 4)
    case 'tropical': return 25
    case 'sand': {
      const surface = h.t + 25 * h.sun * (1 - shade) + (h.sun === 0 ? 4 : 0)
      return d.id === 'dugout' ? Math.min(surface, 30) : surface
    }
  }
}

// ---------------------------------------------------------------- the night

export function simulate(env: Env, c: Choice): SimResult {
  const s = env.sites.find((x) => x.id === c.site) ?? env.sites[0]
  const d = DESIGNS[c.design]
  const bed = BEDS[c.bed]
  const build = buildTime(env, c)
  const log: string[] = []
  const of = orientFactor(c.opening, env.windFrom)
  const orientWind = 1 - d.directional * (1 - of)
  const pitchUA = c.pitch === 'low' ? 1 : 1.4
  const pitchWind = c.pitch === 'low' ? 1 : 0.9

  // ---------- hazards (deterministic)
  const hazards: Hazard[] = []
  const add = (id: string, label: string, risk: number, severity: Severity, text: string) => {
    const r = clamp(risk)
    if (r >= 0.05) hazards.push({ id, label, risk: +r.toFixed(2), severity, happened: r >= 0.5, text })
  }
  const maxWindIdx = env.hours.reduce((bi, h, i, a) => (h.wind > a[bi].wind ? i : bi), 0)
  add('flood', 'Flooding / rising water', s.flood * env.trig.flood * (d.raised ? 0.85 : 1), 'lethal',
    env.id === 'snow' ? 'Overflow water welled up through the snow in the creek bottom and soaked you from below — at −20 °C.'
      : env.id === 'desert' ? 'A flash flood from the storm over the mountains came down the wash after dark. Wadis flood from rain you never see.'
        : 'The water rose in the night and swept through your site. Low ground by rivers is where people drown.')
  add('overhead', 'Falling dead wood', s.overhead * env.trig.wind, 'lethal', 'A heavy dead limb came down in the wind next to your shelter. Dead wood overhead is a lottery ticket you do not want.')
  add('rockfall', 'Rockfall', s.rockfall * env.trig.rockfall, 'serious', 'Rocks loosened by rain and freeze-thaw came down from the crag during the night. Fresh chips on the ground were the warning.')
  add('avalanche', 'Avalanche', s.avalanche * env.trig.avalanche, 'lethal', 'The loaded slope above you released. Deep, easy-digging drifts often sit exactly in avalanche terrain.')
  add('lightning', 'Lightning', s.lightning * env.trig.lightning, 'serious', 'Storm cells passed overhead; you were on the highest, most exposed point around.')
  add('insects', 'Insects and disease vectors', s.insects * env.trig.insects * (d.raised ? 0.6 : 1) * (c.net && env.net ? 0.15 : 1), 'serious', 'Hundreds of bites overnight — misery, no sleep, and a real risk of mosquito-borne disease.')
  add('critters', 'Snakes, scorpions, ants', s.critters * env.trig.critters * (d.raised ? 0.3 : 1), 'serious', 'Something that lives in the crevices or trails visited you in the dark. Rocks, crevices and ant trails are their homes.')
  if (d.tarpLike) {
    const load = env.trig.wind * s.wind * (c.pitch === 'high' ? 1.3 : 0.8) * (of === 0.3 ? 1.6 : of === 0.7 ? 1.1 : 0.8) * (c.design === 'wedge' ? 0.6 : 1)
    add('structure', 'Tarp blown out / collapse', load, 'serious', `At ${env.hours[maxWindIdx].clock} the gusts tore out your stakes and the tarp flogged itself flat. High, open-to-the-wind pitches catch the wind like a sail.`)
  }
  if (d.id === 'quinzhee') {
    const thin = c.wallCm < 20 ? 0.7 : c.wallCm < 25 ? 0.35 : 0
    add('collapse', 'Snow shelter collapse', thin + (c.sinter ? 0 : 0.5), 'lethal', 'The roof sagged and fell in. Walls too thin, or snow that had not been left to sinter (bond) before hollowing, cannot carry the load.')
  }
  if (d.enclosed && d.walls === 'snow') {
    const coRisk = c.heat === 'stove' ? (c.vent ? 0.5 : 0.95) : c.heat === 'candle' ? (c.vent ? 0.1 : 0.5) : (c.vent ? 0 : 0.3)
    const sev: Severity = c.heat === 'none' ? 'serious' : 'lethal'
    add('co', c.heat === 'none' ? 'Stale air (CO₂) and iced walls' : 'Carbon monoxide', coRisk, sev,
      c.heat === 'none' ? 'With no vent the air grew stale and your breath glazed the walls with ice, sealing them further. You woke with a headache.'
        : 'Headache, nausea, then drowsiness: carbon monoxide from the flame built up in the sealed shelter. CO is invisible and odourless — it kills people in snow shelters, tents and cars.')
  }
  if (env.hot) add('heat-build', 'Heat illness while building', build.effort / (c.pace === 'hard' ? 110 : 220) * (env.id === 'desert' ? 1 : 0.6), 'serious', 'Heavy work in the heat pushed your core temperature up: headache, cramps, nausea. Work in the cool hours, rest in the heat.')
  if (build.overflow > 0) add('dark', 'Working in the dark', build.overflow / 120, 'minor', 'You were still building in the dark: slower, clumsier and more tiring. Finished and simple beats perfect and unfinished.')

  let structuralFailure: string | null = null
  const structural = hazards.find((h) => h.id === 'structure' && h.happened)
  if (structural) structuralFailure = env.hours[maxWindIdx].clock
  const collapsed = hazards.some((h) => h.id === 'collapse' && h.happened)
  const floodHour = hazards.some((h) => h.id === 'flood' && h.happened) ? Math.min(env.hours.length - 1, Math.floor(env.hours.length / 2)) : -1

  // ---------- conduction path (bed)
  const bedR = (wetBed: boolean) => {
    if (bed.fixedR !== undefined) return bed.fixedR * (wetBed ? 0.5 : 1)
    const k = bed.k * (wetBed ? 4 : 1)
    return ((c.bedCm / 100) * bed.comp) / k
  }

  // ---------- hourly loop
  const out: HourResult[] = []
  let bank = 0
  let minBank = 0
  let maxBank = 0
  let water = build.sweat
  let shiverHours = 0
  let wet = env.hot ? 0.05 : clamp(build.sweat * 0.4, 0, 0.5)
  let wetSum = 0
  const buildCompletion = build.completion
  let cumRain = 0
  const coldWords: string[] = []

  env.hours.forEach((h, i) => {
    let comp = buildCompletion
    if (structuralFailure && i >= maxWindIdx) comp = Math.min(comp, 0.3)
    if (collapsed && i >= 2) comp = 0
    if (floodHour >= 0 && i >= floodHour) comp = Math.min(comp, 0.2)
    const calm = h.wind < 12 ? 1 : 0.3
    const tOut = h.t - s.coldPool * h.clear * calm * 5
    const windMs = (h.wind / 3.6) * s.wind
    const wb = d.windBlock * orientWind * comp * pitchWind
    const bivyWind = c.bivy && env.bivy ? 0.5 : 0
    const vIn = Math.max(0.1, windMs * (1 - wb) * (1 - bivyWind))
    // rain getting to you
    const baseRain = d.walls === 'debris' ? clamp(0.55 + c.wallCm / 200, 0, 0.97) : d.rainBlock
    const rainBlock = baseRain * comp * (1 - 0.5 * d.directional * (1 - of) * (h.wind > 15 ? 1 : 0.3))
    const leak = h.rain * (1 - rainBlock) * (1 - s.canopy * 0.3) * (c.bivy && env.bivy ? 0.3 : 1)
    cumRain += h.rain
    const groundWet = !d.raised && s.drainage < 0.5 && cumRain > 1.5 && h.rain + (i > 0 ? env.hours[i - 1].rain : 0) > 0
    if (groundWet && c.bed !== 'none') wet = clamp(wet + 0.1)
    if (floodHour >= 0 && i >= floodHour) wet = clamp(wet + 0.4)
    wet = clamp(wet + leak * 0.25)
    if (!groundWet) wet = clamp(wet - (env.hot ? 0.03 : 0.05) * clamp(1 - leak * 10))
    wetSum += wet

    const clo = (env.cloNight && h.sun === 0 ? env.cloNight : env.clo) * (1 - 0.6 * wet) + (c.bivy && env.bivy ? 0.4 : 0)
    const Rcl = 0.155 * clo
    const hot = h.t > 28
    const Tsk = hot ? 35 : 33
    const hc = 3 + 8.3 * Math.sqrt(vIn)
    const hr = 4.7
    const A = 1.3
    // shade and solar gain
    const shade = 1 - (1 - s.shade) * (1 - d.sunBlock * comp) * (1 - s.canopy * 0.8)
    const solar = 300 * h.sun * (1 - shade) * (1 - Math.min(0.4, clo * 0.4))
    // mean radiant temperature: sky portion vs shelter surface
    const skyView = clamp(1 - (1 - d.sky) * comp) * (1 - s.canopy * 0.7)
    const tSky = h.sun > 0 ? h.t : h.t - 20 * h.clear
    // fire / stove
    const fireOn = d.fire && env.fireAllowed && i < c.fuelHours && h.rain < 0.95 && comp > 0.3
    const fireGain = fireOn ? 110 * (d.fire ?? 0) * (1 - 0.3 * h.rain) : 0
    const stoveW = d.enclosed ? (c.heat === 'stove' ? (i < 2 ? 600 : 0) : c.heat === 'candle' ? 60 : 0) : 0
    // shelter conductance (W/K)
    let UA: number
    if (d.walls === 'snow' && d.id === 'quinzhee') UA = (6 * SNOW_K) / Math.max(0.1, c.wallCm / 100) + (c.vent ? 1 : 0.3) + 0.3
    else if (d.walls === 'snow') UA = d.ua + (c.vent ? 1 : 0)
    else if (d.walls === 'debris') UA = (7 * DEBRIS_K) / Math.max(0.1, c.wallCm / 100) + 3 + 1.5 * windMs * (1 - wb)
    else UA = d.ua * pitchUA + 3 * windMs * (1 - wb)
    UA = UA / Math.max(0.05, comp) // an unfinished shelter leaks
    const Rtis = 0.08
    // iterate inside temperature
    let tIn = tOut
    let conv = 0, rad = 0, cond = 0, evap = 0, tMrt = tOut
    for (let it = 0; it < 8; it++) {
      const roofT = h.sun > 0 ? tIn + 15 * h.sun * d.roofRad * comp * (1 - s.shade) : tIn
      tMrt = skyView * tSky + (1 - skyView) * (d.walls === 'snow' ? Math.min(0, roofT) : roofT)
      if (h.sun > 0 && d.id === 'none') tMrt = h.t
      const k = 1 + (hc + hr) * (Rcl + (hot ? 0.03 : Rtis))
      conv = (A * hc * (Tsk - tIn)) / k
      rad = (A * hr * (Tsk - tMrt)) / k
      const tg = groundTemp(env, h, d, shade)
      const Rb = d.raised ? 0.15 + bedR(false) : bedR(groundWet)
      const Rsoil = env.ground === 'snow' ? 0.15 : 0.1
      const base = 0.02 + Rsoil + (hot ? 0.03 : Rtis)
      const padOn = c.pad && env.pad > 0
      const G = padOn ? env.pad / (base + Rb + 0.3) + (1 - env.pad) / (base + Rb) : 1 / (base + Rb)
      cond = 0.5 * (Tsk - (d.raised ? tIn : tg)) * G
      const resp = 0.12 * 85 * (1 - h.rh * 0.5) + (tIn < 0 ? 3 : 0)
      const wetEvap = 100 * wet * (1 + 0.1 * vIn) * (1 - h.rh * 0.7) * (tIn < -5 ? 0.6 : 1)
      evap = resp + wetEvap
      if (d.ua >= 999) { tIn = tOut; break }
      const toAir = conv + (1 - skyView) * rad * 0.5 + evap * 0.5 + stoveW
      let next = tOut + toAir / UA
      if (d.walls === 'snow') next = Math.min(next, stoveW > 0 ? 3 : 0)
      tIn = 0.5 * tIn + 0.5 * next
    }
    const M = 85
    const S0 = M + solar + fireGain - conv - rad - cond - evap
    let shiver = 0
    let sweat = 0
    let S = S0
    if (S0 < -10) {
      shiver = Math.min(150, 0.7 * (-S0 - 10))
      S = S0 + shiver
      if (shiver > 25) shiverHours++
    } else if (S0 > 0) {
      const Emax = 350 * (1 - h.rh) * (0.4 + 0.6 * Math.min(1, vIn / 1.5)) + 40
      sweat = Math.min(S0, Emax)
      S = S0 - sweat
      water += sweat / 667
    }
    water += (0.035 * (1 - h.rh * 0.6))
    // Body releases stored heat or recovers a debt gradually when conditions allow.
    bank += (S * 3600) / 1000
    if (bank > 0 && S <= 0) bank = Math.max(0, bank - 150)
    minBank = Math.min(minBank, bank)
    maxBank = Math.max(maxBank, bank)
    if (tOut <= h.t - 3 && i > 0 && coldWords.length === 0) coldWords.push(h.clock)
    out.push({ clock: h.clock, tOut: +tOut.toFixed(1), tIn: +tIn.toFixed(1), conv: Math.round(conv), rad: Math.round(rad), cond: Math.round(cond), evap: Math.round(evap), gain: Math.round(solar + fireGain), shiver: Math.round(shiver), sweat: Math.round(sweat), S: Math.round(S), bank: Math.round(bank), wet: +wet.toFixed(2) })
  })

  // ---------- narrative
  const coldDebt = Math.round(-minBank)
  const heatLoad = Math.round(maxBank)
  const meanWet = wetSum / env.hours.length
  const totals = out.reduce((a, h) => ({ conv: a.conv + Math.max(0, h.conv), rad: a.rad + Math.max(0, h.rad), cond: a.cond + Math.max(0, h.cond), evap: a.evap + h.evap }), { conv: 0, rad: 0, cond: 0, evap: 0 })
  const biggest = (Object.entries(totals) as [keyof typeof totals, number][]).sort((a, b) => b[1] - a[1])[0][0]
  const mechName = { conv: 'convection (wind and moving air)', rad: 'radiation (to the sky and cold surfaces)', cond: 'conduction into the ground', evap: 'evaporation (wet clothing and breath)' }

  log.push(`Building took ${build.effort} min of work${build.wait ? ` + ${build.wait} min waiting for the snow to sinter` : ''} against ${env.budget} min of light. ${build.overflow > 0 ? `You worked ${build.overflow} min past dark${build.completion < 1 ? ` and finished only ${Math.round(build.completion * 100)} %` : ''}.` : 'Finished with light to spare.'}`)
  if (build.sweat > 0.6) log.push(`You sweated about ${build.sweat.toFixed(1)} L while building${env.hot ? ' — water you cannot spare.' : ' — much of it soaked into your clothing before the night even began.'}`)
  if (!env.hot || env.id === 'desert') log.push(`Largest heat drain overnight: ${mechName[biggest]}.`)
  if (!env.hot && s.coldPool > 0.5 && coldWords.length) log.push(`From about ${coldWords[0]}, with the sky clear and the wind gone, cold air drained into your low spot — several degrees colder than the slopes above.`)
  if (c.bed === 'none' && !d.raised) log.push('No bed: the ground took heat from you all night.')
  else if (!d.raised && bed.fixedR === undefined && c.bedCm < 15 && !env.hot) log.push(`Your ${c.bedCm} cm of ${bed.name.toLowerCase()} compressed to about ${Math.round(c.bedCm * bed.comp)} cm under you — cold spots at hips and shoulders.`)
  if (env.hours.some((h) => h.rain > 0)) log.push(meanWet < 0.15 ? 'You stayed essentially dry.' : meanWet < 0.4 ? 'Drips, splash and damp edges: your clothing got damp.' : 'Water got in — wet clothing lost much of its insulation and kept evaporating heat away.')
  if (d.directional > 0.4 && of === 0.3 && env.hours.some((h) => h.wind > 15)) log.push('The open side faced straight into the wind: wind and rain were driven in.')
  if (structuralFailure) log.push(`⚠️ ${hazards.find((h) => h.id === 'structure')!.text}`)
  if (d.walls === 'snow' && out.length) log.push(`Inside the shelter it held around ${Math.round(out[Math.floor(out.length / 2)].tIn)} °C while it was ${Math.round(out[Math.floor(out.length / 2)].tOut)} °C outside.`)
  if (env.id === 'desert') log.push(`Water lost: about ${water.toFixed(1)} L of your ${env.water} L${water > env.water ? ' — more than you carried.' : '.'}`)
  if (d.fire && env.fireAllowed && c.fuelHours > 0) log.push(`The fire burned for about ${c.fuelHours} h; the reflector bounced its heat into the shelter. Once the fuel ran out, the open front was cold.`)
  hazards.filter((h) => h.happened && h.id !== 'structure').forEach((h) => log.push(`⚠️ ${h.text}`))
  hazards.filter((h) => !h.happened && h.risk >= 0.25).forEach((h) => log.push(`Risk you carried: ${h.label.toLowerCase()} (${Math.round(h.risk * 100)} %). It did not happen tonight — would you bet on it every night?`))

  // ---------- scoring
  const coldPen = clamp((coldDebt - 250) / 900)
  const heatPen = clamp((heatLoad - 150) / 600)
  const waterPen = env.hot ? clamp((water - env.waterOk) / env.waterOk) : 0
  const thermal = 45 * (1 - Math.max(coldPen, heatPen)) * (1 - 0.8 * waterPen)
  const dryness = 15 * (1 - meanWet)
  const hazardPen = hazards.reduce((a, h) => a + h.risk * { minor: 6, serious: 14, lethal: 30 }[h.severity], 0)
  const hazardScore = clamp(25 - hazardPen, 0, 25)
  const effort = 10 * clamp(1 - build.overflow / 120) + 5 * clamp(1 - (build.sweat - 0.3) / 1.2)
  const critical = hazards.some((h) => h.happened && h.severity === 'lethal')
  let score = thermal + dryness + hazardScore + effort
  score = Math.min(score, 30 + 1.5 * thermal) // a dangerous thermal night cannot be rescued by points elsewhere
  if (critical) score = Math.min(score, 25)
  score = Math.round(clamp(score, 0, 100))

  const verdict = critical ? 'A hazard you chose to sleep next to decided the night. Site selection comes first.'
    : coldDebt > 900 ? 'Dangerously cold: a hypothermia night. Look at the biggest drain in the chart and fix that first.'
      : heatLoad > 600 || waterPen > 0.6 ? 'Dangerous heat and water loss. Shade, rest in the heat, and build in the cool hours.'
        : coldDebt > 350 ? 'You survived a cold, miserable, sleepless night. One or two changes would have made it comfortable.'
          : score >= 80 ? 'A good night: warm enough, dry enough, and nothing overhead or upstream waiting for you.'
            : 'Survivable — but check the effort, dryness and risk scores for cheap wins.'

  return {
    hours: out,
    build,
    hazards,
    critical,
    coldDebt,
    heatLoad,
    water: +water.toFixed(2),
    shiverHours,
    meanWet: +meanWet.toFixed(2),
    structuralFailure,
    scores: { thermal: Math.round(thermal), dryness: Math.round(dryness), hazards: Math.round(hazardScore), effort: Math.round(effort) },
    score,
    verdict,
    log,
  }
}
