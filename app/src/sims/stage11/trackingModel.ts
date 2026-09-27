// Pure model for the Tracking Scene simulation: drawn trails in different substrates.
// The learner identifies the track family, the gait, the direction of travel and brackets the
// age of the trail from dated events (rain, wind, tide, frost, vehicles) — the same reasoning a
// tracker uses: every event that left its mark *under* the print or *over* the print narrows the window.

export type Family = 'canid' | 'felid' | 'mustelid' | 'ungulate' | 'lagomorph' | 'bird' | 'human' | 'bear'
export type Gait = 'walk' | 'trot' | 'lope' | 'bound'
export type Dir = 'up' | 'down' | 'left' | 'right'
export type Substrate = 'mud' | 'sand' | 'snow' | 'wet-sand' | 'dust'

export const FAMILIES: { id: Family; name: string; key: string }[] = [
  { id: 'canid', name: 'Dog family (fox, coyote, wolf, jackal, dog)', key: '4 toes front and hind; oval, symmetrical; claws usually show; an X of open ground between toes and heel pad.' },
  { id: 'felid', name: 'Cat family (lynx, bobcat, cougar, wildcat)', key: '4 toes; round; asymmetric with a “leading” toe; claws retracted (rarely show); large heel pad with three lobes at the rear.' },
  { id: 'mustelid', name: 'Weasel family (weasel, mink, otter, marten, badger)', key: '5 toes, often in a fan; C-shaped palm pad; bounds in pairs of prints.' },
  { id: 'ungulate', name: 'Hoofed animals (deer, sheep, goat, pig)', key: 'Two halves of a cloven hoof pointing forward; dewclaws may print in soft ground or at speed.' },
  { id: 'lagomorph', name: 'Rabbits and hares', key: 'Furry feet — few crisp pad marks; long hind prints land side by side ahead of the small front prints.' },
  { id: 'bird', name: 'Birds', key: 'Thin toe lines: usually three forward, one back; webbing between the toes in waterbirds.' },
  { id: 'human', name: 'Human (boot or bare foot)', key: 'Heel and ball, sole outline and tread pattern; long regular steps.' },
  { id: 'bear', name: 'Bears', key: '5 toes in a gentle arc; very wide palm pad; hind print like a human foot but wider, often with claw marks.' },
]

export const GAITS: { id: Gait; name: string; key: string }[] = [
  { id: 'walk', name: 'Walk', key: 'Prints alternate left–right in a zig-zag; hind often lands on or near the front print.' },
  { id: 'trot', name: 'Trot', key: 'Diagonal pairs move together: a straighter, narrower line of evenly spaced prints, longer steps than a walk.' },
  { id: 'lope', name: 'Lope / gallop', key: 'Groups of three or four prints in a diagonal line, separated by long gaps.' },
  { id: 'bound', name: 'Bound / hop', key: 'Groups of prints side by side (pairs or fours); in rabbits and hares the long hind prints land ahead of the front prints.' },
]

export const DIRS: { id: Dir; name: string }[] = [
  { id: 'up', name: '↑ Toward the top' },
  { id: 'down', name: '↓ Toward the bottom' },
  { id: 'left', name: '← To the left' },
  { id: 'right', name: '→ To the right' },
]

/** A dated event and whether the trail was made after it (print on top) or before it (event marks on top of the print). */
export interface Marker {
  event: string
  /** Clock time in hours on a two-day clock: 0–24 is yesterday, 24–48 today. */
  at: number
  relation: 'after' | 'before'
}

export interface AgeChoice {
  id: string
  /** Hours ago (inclusive bounds); hi null = open-ended. */
  lo: number
  hi: number | null
  text: string
}

export interface TrackScene {
  id: string
  place: string
  env: string
  substrate: Substrate
  family: Family
  gait: Gait
  dir: Dir
  /** Current time on the two-day clock. */
  now: number
  observations: string[]
  markers: Marker[]
  ageChoices: AgeChoice[]
  /** Visual cue for raindrop pits: none, only around the prints, or also inside them. */
  pits: 'none' | 'around' | 'inside'
  debrief: string
}

/** 'today 09:00' / 'yesterday 22:00' for a two-day clock time. */
export function clock(t: number): string {
  const day = t >= 24 ? 'today' : 'yesterday'
  const h = ((t % 24) + 24) % 24
  const hh = String(Math.floor(h)).padStart(2, '0')
  const mm = String(Math.round((h - Math.floor(h)) * 60)).padStart(2, '0')
  return `${day} ${hh}:${mm}`
}

/**
 * Age window in hours from dated markers. A print made AFTER an event at time t is at most now − t old;
 * a print made BEFORE an event at time t is at least now − t old. The window is the intersection.
 */
export function bracket(now: number, markers: Marker[]): { lo: number; hi: number | null } {
  let lo = 0
  let hi: number | null = null
  for (const m of markers) {
    const ago = now - m.at
    if (m.relation === 'after') hi = hi === null ? ago : Math.min(hi, ago)
    else lo = Math.max(lo, ago)
  }
  return { lo, hi }
}

export function correctAge(s: TrackScene): string | undefined {
  const b = bracket(s.now, s.markers)
  return s.ageChoices.find((c) => c.lo === b.lo && c.hi === b.hi)?.id
}

export interface Answer {
  family: Family | null
  gait: Gait | null
  dir: Dir | null
  age: string | null
}

export function scoreScene(s: TrackScene, a: Answer): { points: number; family: boolean; gait: boolean; dir: boolean; age: boolean } {
  const family = a.family === s.family
  const gait = a.gait === s.gait
  const dir = a.dir === s.dir
  const age = a.age !== null && a.age === correctAge(s)
  return { points: [family, gait, dir, age].filter(Boolean).length, family, gait, dir, age }
}

export const POINTS_PER_SCENE = 4

export function totalPercent(points: number[]): number {
  if (points.length === 0) return 0
  return Math.round((100 * points.reduce((a, b) => a + b, 0)) / (points.length * POINTS_PER_SCENE))
}

// ---------- Trail geometry ----------

export const CANVAS = { w: 300, h: 260 }

export interface PrintPos {
  x: number
  y: number
  /** Rotation in degrees; 0 = print pointing to the top of the screen. */
  rot: number
  side: 'L' | 'R'
  foot: 'front' | 'hind'
}

interface Local { u: number; v: number; side: 'L' | 'R'; foot: 'front' | 'hind' }

/** Positions along the direction of travel (u) and across it (v), before mapping onto the screen. */
export function localTrail(family: Family, gait: Gait, length: number): Local[] {
  const out: Local[] = []
  const start = 24
  if (gait === 'bound') {
    // Rabbit/hare pattern: two front prints one behind the other, then two hind prints side by side ahead.
    for (let u0 = start; u0 + 34 < length; u0 += 74) {
      out.push({ u: u0, v: -2, side: 'L', foot: 'front' })
      out.push({ u: u0 + 10, v: 3, side: 'R', foot: 'front' })
      out.push({ u: u0 + 30, v: -9, side: 'L', foot: 'hind' })
      out.push({ u: u0 + 30, v: 9, side: 'R', foot: 'hind' })
    }
    return out
  }
  if (gait === 'lope') {
    for (let u0 = start; u0 + 40 < length; u0 += 92) {
      const seq: ['L' | 'R', 'front' | 'hind'][] = [['L', 'front'], ['R', 'front'], ['L', 'hind'], ['R', 'hind']]
      seq.forEach(([side, foot], k) => out.push({ u: u0 + k * 13, v: -9 + k * 6, side, foot }))
    }
    return out
  }
  const step = family === 'human' ? 38 : family === 'bird' ? 20 : gait === 'trot' ? 34 : 28
  const lateral = family === 'human' ? 10 : family === 'bird' ? 5 : gait === 'trot' ? 3 : 9
  let k = 0
  for (let u = start; u < length - 12; u += step, k++) {
    const side = k % 2 === 0 ? 'L' : 'R'
    out.push({ u, v: side === 'L' ? -lateral : lateral, side, foot: 'hind' })
  }
  return out
}

/** Map a trail onto the canvas for the given direction of travel. */
export function trail(family: Family, gait: Gait, dir: Dir): PrintPos[] {
  const { w, h } = CANVAS
  const horizontal = dir === 'left' || dir === 'right'
  const length = horizontal ? w : h
  return localTrail(family, gait, length).map(({ u, v, side, foot }) => {
    switch (dir) {
      case 'right': return { x: u, y: h / 2 + v, rot: 90, side, foot }
      case 'left': return { x: w - u, y: h / 2 - v, rot: -90, side, foot }
      case 'up': return { x: w / 2 + v, y: h - u, rot: 0, side, foot }
      case 'down': return { x: w / 2 - v, y: u, rot: 180, side, foot }
    }
  })
}

/** Deterministic pseudo-random points (for raindrop pits and texture). */
export function scatter(seed: number, n: number, w: number, h: number): { x: number; y: number }[] {
  let s = seed >>> 0 || 1
  const rnd = () => {
    s = (s * 1664525 + 1013904223) >>> 0
    return s / 4294967296
  }
  return Array.from({ length: n }, () => ({ x: rnd() * w, y: rnd() * h }))
}

// ---------- Scenes ----------

export const SCENES: TrackScene[] = [
  {
    id: 'fox-mud',
    place: 'Temperate forest, muddy track after overnight rain',
    env: 'forest',
    substrate: 'mud',
    family: 'canid',
    gait: 'trot',
    dir: 'right',
    now: 33,
    pits: 'around',
    observations: [
      'Prints about 5 cm long, oval and symmetrical; four toes with small claw marks; an X-shaped ridge of mud between toes and heel pad.',
      'The trail is a nearly straight line; each hind print sits in or just ahead of the front print; steps are longer than in a walk.',
      'Raindrop pits pock the mud around the prints, but the floors of the prints are smooth. Your log: rain stopped at 03:00; it is now 09:00.',
      'Each print is a little deeper at the toe end than at the heel pad.',
    ],
    markers: [{ event: 'rain stopped', at: 27, relation: 'after' }],
    ageChoices: [
      { id: 'a', lo: 0, hi: 6, text: 'Less than 6 h — made after the rain stopped' },
      { id: 'b', lo: 6, hi: 24, text: '6–24 h — made during or before the rain' },
      { id: 'c', lo: 24, hi: null, text: 'More than 24 h' },
    ],
    debrief: 'A red fox (or similar small canid) trotting — the classic straight, narrow, direct-register line. The pits are around, not inside, the prints: the fox passed after the rain stopped, so the trail is less than 6 hours old. The deeper toe ends point the way it went.',
  },
  {
    id: 'hare-desert',
    place: 'Desert sand flat between dunes, calm morning',
    env: 'desert',
    substrate: 'sand',
    family: 'lagomorph',
    gait: 'bound',
    dir: 'up',
    now: 31,
    pits: 'none',
    observations: [
      'Groups of four prints repeating every ~1 m; in each group two long prints side by side lead, two small prints trail behind, one behind the other.',
      'No crisp pads or toe marks — the prints look blurred and furry.',
      'A strong wind blew sand across the flat until 20:00 last night; the prints have sharp rims and no drifted sand in them. It is now 07:00.',
    ],
    markers: [{ event: 'wind dropped', at: 20, relation: 'after' }],
    ageChoices: [
      { id: 'a', lo: 0, hi: 11, text: 'Less than 11 h — made after the wind dropped' },
      { id: 'b', lo: 11, hi: 24, text: '11–24 h' },
      { id: 'c', lo: 24, hi: null, text: 'More than a day' },
    ],
    debrief: 'A hare bounding: the long hind feet swing past the front feet and land ahead of them, so the paired long prints point the way the animal went. Wind erases sand tracks within hours; crisp rims tell you the hare crossed after the wind dropped at 20:00 — a night-time animal, as most desert mammals are.',
  },
  {
    id: 'lynx-snow',
    place: 'Subarctic spruce forest, fresh snow',
    env: 'arctic',
    substrate: 'snow',
    family: 'felid',
    gait: 'walk',
    dir: 'left',
    now: 34,
    pits: 'none',
    observations: [
      'Large round prints (about 9–10 cm), no claw marks, fur-blurred edges; a zig-zag walking trail with hind prints placed in the front prints.',
      'The prints are cut cleanly into the main snowfall that ended at 22:00 last night.',
      'A thin dusting of new snow lies inside the prints — from the brief shower between 01:00 and 02:00. It is now 10:00.',
    ],
    markers: [
      { event: 'main snowfall ended', at: 22, relation: 'after' },
      { event: 'snow shower ended', at: 26, relation: 'before' },
    ],
    ageChoices: [
      { id: 'a', lo: 0, hi: 8, text: 'Less than 8 h — this morning' },
      { id: 'b', lo: 8, hi: 12, text: '8–12 h — between 22:00 and 02:00' },
      { id: 'c', lo: 12, hi: 24, text: '12–24 h' },
      { id: 'd', lo: 24, hi: null, text: 'More than a day' },
    ],
    debrief: 'A lynx walking with direct register: round, clawless, big feet for snow. Two events bracket the trail: it is on top of the main snowfall (made after 22:00) and under the dusting from the 01:00–02:00 shower (made before 02:00). Age: 8–12 hours. Two brackets beat any guess from how the edges look.',
  },
  {
    id: 'gull-beach',
    place: 'Coastal beach below the high-tide wrack line',
    env: 'coastal',
    substrate: 'wet-sand',
    family: 'bird',
    gait: 'walk',
    dir: 'down',
    now: 37,
    pits: 'none',
    observations: [
      'Prints about 6 cm long: three thin forward toes joined by webbing, a short hind toe barely showing; toes slightly turned in.',
      'Prints alternate left–right with short steps.',
      'The prints are on smooth, water-washed sand below the line of seaweed left by today’s high tide at 11:00. It is now 13:00.',
    ],
    markers: [{ event: 'high tide', at: 35, relation: 'after' }],
    ageChoices: [
      { id: 'a', lo: 0, hi: 2, text: 'Less than 2 h — since the tide started falling' },
      { id: 'b', lo: 2, hi: 6, text: '2–6 h' },
      { id: 'c', lo: 6, hi: null, text: 'More than 6 h' },
    ],
    debrief: 'A gull walking. Below the high-water mark the sea wipes the slate twice a day, so any print there is younger than the last high tide. The three toes point the way the bird walked. The same logic tells you when the beach was last covered — and, with a tide table, when it will be covered again.',
  },
  {
    id: 'deer-frost',
    place: 'Mixed woodland path on a clear, frosty night',
    env: 'forest',
    substrate: 'mud',
    family: 'ungulate',
    gait: 'walk',
    dir: 'left',
    now: 32,
    pits: 'none',
    observations: [
      'Heart-shaped prints about 6 cm long made by two hoof halves; the pointed end faces one way; no dewclaws.',
      'A zig-zag trail; hind prints land on or just ahead of the front prints.',
      'Leaves blown down by the strong wind that ended at 20:00 are pressed into the prints (none lie loose on top).',
      'Frost crystals lie inside the prints as thickly as outside; the thermometer says frost formed after 01:00. It is now 08:00.',
    ],
    markers: [
      { event: 'wind dropped (leaf fall)', at: 20, relation: 'after' },
      { event: 'frost formed', at: 25, relation: 'before' },
    ],
    ageChoices: [
      { id: 'a', lo: 0, hi: 7, text: 'Less than 7 h — after the frost' },
      { id: 'b', lo: 7, hi: 12, text: '7–12 h — between 20:00 and 01:00' },
      { id: 'c', lo: 12, hi: null, text: 'More than 12 h' },
    ],
    debrief: 'A deer walking — the pointed tips of the cloven hoof point the way it went. Pressed-in leaves put the trail after the leaf fall (20:00); frost inside the prints puts it before 01:00. A deer moving in the evening between bedding and feeding areas.',
  },
  {
    id: 'dog-road',
    place: 'Rural dirt road, dry dusty surface',
    env: 'rural',
    substrate: 'dust',
    family: 'canid',
    gait: 'lope',
    dir: 'left',
    now: 39,
    pits: 'none',
    observations: [
      'Oval, symmetrical four-toed prints with claws, about 8 cm long.',
      'Prints in groups of four in a slanting line, with long gaps between groups; each print is deepest at the toes, with a small ridge of dust shoved up behind the toe pads.',
      'The prints lie on top of the tyre track the farmer made driving out at 07:00, and are cut through by the tyre track of her return at 12:00. It is now 15:00.',
    ],
    markers: [
      { event: 'tractor out', at: 31, relation: 'after' },
      { event: 'tractor back', at: 36, relation: 'before' },
    ],
    ageChoices: [
      { id: 'a', lo: 0, hi: 3, text: 'Less than 3 h' },
      { id: 'b', lo: 3, hi: 8, text: '3–8 h — between 07:00 and 12:00' },
      { id: 'c', lo: 8, hi: null, text: 'More than 8 h' },
    ],
    debrief: 'A dog (or coyote-sized canid) loping. The principle is superposition, as in geology: what lies on top is younger. Two tyre tracks with known times bracket the trail to 3–8 hours. Deep toe ends and the ridge shoved back behind the toes — and the lead of each group — show the direction when outlines blur in dust.',
  },
  {
    id: 'boot-sar',
    place: 'Forest path, 3 km from the trailhead where a walker was last seen today at 11:00',
    env: 'forest',
    substrate: 'mud',
    family: 'human',
    gait: 'walk',
    dir: 'up',
    now: 40,
    pits: 'inside',
    observations: [
      'A single line of boot prints (about 28 cm) with a lug tread, alternating left–right, regular steps.',
      'Raindrop pits cover the ground and are also inside the prints; the edges of the prints are rounded.',
      'Rain stopped yesterday at 17:00 and has not fallen since. It is now 16:00.',
    ],
    markers: [{ event: 'rain stopped', at: 17, relation: 'before' }],
    ageChoices: [
      { id: 'a', lo: 0, hi: 5, text: 'Less than 5 h — could be the missing walker' },
      { id: 'b', lo: 5, hi: 23, text: '5–23 h' },
      { id: 'c', lo: 23, hi: null, text: 'More than 23 h — made before the rain stopped' },
    ],
    debrief: 'Raindrop pits inside the prints mean the walker passed before or during yesterday’s rain: at least 23 hours ago, so these cannot be from the person last seen today at 11:00. Report the finding anyway — with photos, a scale and the location — because ruling out a trail saves search effort, and let trained trackers and the search manager decide.',
  },
]
