// Pure model for the Stage 2 navigation simulator (nav-map).
// Coordinates are grid metres, origin at the south-west corner, y pointing north (grid north).
// Bearings are degrees clockwise from grid north unless stated otherwise.

export type Pt = { x: number; y: number }

export const MAP_W = 3000
export const MAP_H = 2000
/** Magnetic declination printed in the map margin: 8° W, so magnetic bearing = grid bearing + 8°. */
export const DECLINATION_W = 8

export const START: Pt = { x: 300, y: 300 }
export const WAYPOINTS: { id: string; name: string; p: Pt; hint: string }[] = [
  { id: 'junction', name: 'Stream junction', p: { x: 1800, y: 1400 }, hint: 'Where the side stream from the lake meets the river.' },
  { id: 'cairn', name: 'Summit cairn (620 m)', p: { x: 2500, y: 1500 }, hint: 'The top of the big hill east of the river. Crags guard its western side.' },
  { id: 'hut', name: 'Mountain hut', p: { x: 2700, y: 850 }, hint: 'A small hut beside the footpath, south-east of the summit.' },
]

export const RIVER: Pt[] = [
  { x: 1650, y: 2000 }, { x: 1750, y: 1700 }, { x: 1800, y: 1400 }, { x: 1900, y: 1100 }, { x: 1880, y: 950 }, { x: 1850, y: 800 }, { x: 1950, y: 500 }, { x: 2000, y: 0 },
]
/** Side stream flowing east out of the lake into the river at the junction. */
export const STREAM: Pt[] = [{ x: 880, y: 1320 }, { x: 1100, y: 1420 }, { x: 1400, y: 1360 }, { x: 1600, y: 1420 }, { x: 1800, y: 1400 }]
export const TRAIL: Pt[] = [
  { x: 300, y: 300 }, { x: 800, y: 380 }, { x: 1300, y: 520 }, { x: 1880, y: 950 }, { x: 2300, y: 1000 }, { x: 2700, y: 850 }, { x: 3000, y: 700 },
]
export const ROAD: Pt[] = [{ x: 0, y: 160 }, { x: 1500, y: 200 }, { x: 3000, y: 120 }]
export const BRIDGE: Pt = { x: 1880, y: 950 }
export const CLIFF: Pt[] = [{ x: 2150, y: 1230 }, { x: 2210, y: 1400 }, { x: 2220, y: 1560 }, { x: 2180, y: 1780 }]
export const LAKE = { c: { x: 700, y: 1300 }, rx: 180, ry: 110 }
export const FOREST: Pt[] = [
  { x: 420, y: 700 }, { x: 1200, y: 640 }, { x: 1650, y: 900 }, { x: 1700, y: 1250 }, { x: 1550, y: 1850 }, { x: 900, y: 1900 }, { x: 350, y: 1600 },
]

// ---------- geometry helpers ----------

export const rad = (d: number) => (d * Math.PI) / 180
export const deg = (r: number) => (r * 180) / Math.PI
export const norm360 = (a: number) => ((a % 360) + 360) % 360
/** Signed smallest difference a − b in degrees, in (−180, 180]. */
export const angDiff = (a: number, b: number) => {
  const d = norm360(a - b)
  return d > 180 ? d - 360 : d
}
export const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y)
/** Grid bearing from a to b. */
export const bearing = (a: Pt, b: Pt) => norm360(deg(Math.atan2(b.x - a.x, b.y - a.y)))
export const move = (p: Pt, brg: number, d: number): Pt => ({ x: p.x + d * Math.sin(rad(brg)), y: p.y + d * Math.cos(rad(brg)) })

export const gridToMagnetic = (grid: number, declW = DECLINATION_W) => norm360(grid + declW)
export const magneticToGrid = (mag: number, declW = DECLINATION_W) => norm360(mag - declW)

/** 1-in-60 rule: lateral miss (m) for a heading error (deg) over a distance (m). Exact form uses tan. */
export const lateralError = (distance: number, errDeg: number, exact = true) => (exact ? distance * Math.tan(rad(errDeg)) : (distance * errDeg) / 60)

function closestOnSeg(p: Pt, a: Pt, b: Pt) {
  const dx = b.x - a.x, dy = b.y - a.y
  const t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / (dx * dx + dy * dy || 1)))
  const q = { x: a.x + t * dx, y: a.y + t * dy }
  return { q, t, d: dist(p, q) }
}

/** Closest point on a polyline: distance, segment index and position along the line (m). */
export function closestOnLine(p: Pt, line: Pt[]) {
  let best = { d: Infinity, q: line[0], i: 0, along: 0 }
  let acc = 0
  for (let i = 0; i < line.length - 1; i++) {
    const c = closestOnSeg(p, line[i], line[i + 1])
    const L = dist(line[i], line[i + 1])
    if (c.d < best.d) best = { d: c.d, q: c.q, i, along: acc + c.t * L }
    acc += L
  }
  return best
}

export function lineLength(line: Pt[]) {
  let L = 0
  for (let i = 0; i < line.length - 1; i++) L += dist(line[i], line[i + 1])
  return L
}

export function pointAlong(line: Pt[], s: number): Pt {
  let acc = 0
  for (let i = 0; i < line.length - 1; i++) {
    const L = dist(line[i], line[i + 1])
    if (s <= acc + L) {
      const t = (s - acc) / L
      return { x: line[i].x + t * (line[i + 1].x - line[i].x), y: line[i].y + t * (line[i + 1].y - line[i].y) }
    }
    acc += L
  }
  return line[line.length - 1]
}

function segIntersect(p1: Pt, p2: Pt, p3: Pt, p4: Pt) {
  const d = (p2.x - p1.x) * (p4.y - p3.y) - (p2.y - p1.y) * (p4.x - p3.x)
  if (Math.abs(d) < 1e-9) return false
  const t = ((p3.x - p1.x) * (p4.y - p3.y) - (p3.y - p1.y) * (p4.x - p3.x)) / d
  const u = ((p3.x - p1.x) * (p2.y - p1.y) - (p3.y - p1.y) * (p2.x - p1.x)) / d
  return t >= 0 && t <= 1 && u >= 0 && u <= 1
}
const crossesLine = (a: Pt, b: Pt, line: Pt[]) => line.slice(0, -1).some((q, i) => segIntersect(a, b, q, line[i + 1]))

export function inPolygon(p: Pt, poly: Pt[]) {
  let inside = false
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j]
    if (a.y > p.y !== b.y > p.y && p.x < ((b.x - a.x) * (p.y - a.y)) / (b.y - a.y) + a.x) inside = !inside
  }
  return inside
}
export const inLake = (p: Pt) => ((p.x - LAKE.c.x) / LAKE.rx) ** 2 + ((p.y - LAKE.c.y) / LAKE.ry) ** 2 <= 1
export const inForest = (p: Pt) => inPolygon(p, FOREST) && !inLake(p)
export const inMap = (p: Pt) => p.x >= 0 && p.x <= MAP_W && p.y >= 0 && p.y <= MAP_H

// ---------- terrain ----------

const gauss = (p: Pt, cx: number, cy: number, s: number) => Math.exp(-((p.x - cx) ** 2 + (p.y - cy) ** 2) / (2 * s * s))
function cliffX(y: number) {
  const c = CLIFF
  for (let i = 0; i < c.length - 1; i++) if (y >= c[i].y && y <= c[i + 1].y) return c[i].x + ((y - c[i].y) / (c[i + 1].y - c[i].y)) * (c[i + 1].x - c[i].x)
  return null
}

/** Elevation (m). A smooth hand-built landscape: big hill east of the river with a crag band on its west flank. */
export function elevation(p: Pt): number {
  let e = 300 + 250 * gauss(p, 2500, 1500, 430) + 170 * gauss(p, 900, 620, 380) + 120 * gauss(p, 1250, 1850, 380) + 0.02 * p.y
  const r = closestOnLine(p, RIVER).d
  e -= 45 * Math.exp(-r / 180)
  // Crag band: a sharp 60 m step across the cliff line, fading beyond its ends.
  const cx = cliffX(Math.max(CLIFF[0].y, Math.min(CLIFF[CLIFF.length - 1].y, p.y)))
  if (cx !== null) {
    const yFade = p.y < CLIFF[0].y ? Math.exp(-(((CLIFF[0].y - p.y) / 80) ** 2)) : p.y > CLIFF[CLIFF.length - 1].y ? Math.exp(-(((p.y - CLIFF[CLIFF.length - 1].y) / 80) ** 2)) : 1
    e += 60 * yFade * (1 / (1 + Math.exp(-(p.x - cx) / 12)) - 0.5)
  }
  return e
}

/** Slope angle (deg) and downhill aspect (grid bearing the ground falls toward). */
export function slopeAt(p: Pt) {
  const h = 20
  const dx = (elevation({ x: p.x + h, y: p.y }) - elevation({ x: p.x - h, y: p.y })) / (2 * h)
  const dy = (elevation({ x: p.x, y: p.y + h }) - elevation({ x: p.x, y: p.y - h })) / (2 * h)
  const g = Math.hypot(dx, dy)
  return { angle: deg(Math.atan(g)), aspect: norm360(deg(Math.atan2(-dx, -dy))) }
}

/** Contour segments via marching squares (for drawing). */
export function contours(step = 40, interval = 20) {
  const nx = Math.floor(MAP_W / step) + 1, ny = Math.floor(MAP_H / step) + 1
  const z: number[][] = []
  for (let j = 0; j < ny; j++) {
    z.push([])
    for (let i = 0; i < nx; i++) z[j].push(elevation({ x: i * step, y: j * step }))
  }
  const out: { level: number; segs: [Pt, Pt][] }[] = []
  let min = Infinity, max = -Infinity
  for (const row of z) for (const v of row) { min = Math.min(min, v); max = Math.max(max, v) }
  for (let level = Math.ceil(min / interval) * interval; level <= max; level += interval) {
    const segs: [Pt, Pt][] = []
    for (let j = 0; j < ny - 1; j++)
      for (let i = 0; i < nx - 1; i++) {
        const c = [
          { p: { x: i * step, y: j * step }, v: z[j][i] },
          { p: { x: (i + 1) * step, y: j * step }, v: z[j][i + 1] },
          { p: { x: (i + 1) * step, y: (j + 1) * step }, v: z[j + 1][i + 1] },
          { p: { x: i * step, y: (j + 1) * step }, v: z[j + 1][i] },
        ]
        const pts: Pt[] = []
        for (let k = 0; k < 4; k++) {
          const a = c[k], b = c[(k + 1) % 4]
          if ((a.v < level) !== (b.v < level)) {
            const t = (level - a.v) / (b.v - a.v)
            pts.push({ x: a.p.x + t * (b.p.x - a.p.x), y: a.p.y + t * (b.p.y - a.p.y) })
          }
        }
        if (pts.length === 2) segs.push([pts[0], pts[1]])
        else if (pts.length === 4) segs.push([pts[0], pts[1]], [pts[2], pts[3]])
      }
    out.push({ level, segs })
  }
  return out
}

// ---------- random numbers ----------

export function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}
/** Standard normal deviate (Box–Muller). */
export function gaussian(r: () => number) {
  const u = Math.max(1e-12, r()), v = r()
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v)
}

// ---------- walking ----------

export type Mode = 'compass' | 'sun' | 'none'
export const MODES: Record<Mode, { label: string; headingSd: number; paceSd: number; note: string }> = {
  compass: { label: 'Map + compass', headingSd: 2, paceSd: 0.04, note: 'Enter a MAGNETIC bearing (declination 8° W: magnetic = grid + 8°). Holding a bearing through terrain gives about ±2°; pacing about ±4% per leg.' },
  sun: { label: 'No compass — sun only', headingSd: 12, paceSd: 0.06, note: 'You estimate direction from the sun (true ≈ grid here, so enter a GRID bearing). Expect about ±12° per leg.' },
  none: { label: 'No compass, overcast', headingSd: 22, paceSd: 0.1, note: 'Overcast, no sun, no compass. You hold direction only by landmarks. Expect ±20°+ and a steady drift to one side.' },
}

export interface LegResult {
  path: Pt[]
  end: Pt
  walked: number
  ascent: number
  minutes: number
  stopped?: 'cliff' | 'lake' | 'edge'
  headingErr: number
  distFactor: number
}

/**
 * Walk one leg. The walker intends grid bearing `gridBrg` for `dist` metres (by pace count).
 * Actual heading = intended + a per-leg random error (+ systematic drift with no aids);
 * actual distance = intended × (1 + terrain bias + random pace error). Terrain bias models the fact
 * that paces shorten in forest and uphill: unless the pace count was corrected, you cover less ground than you think.
 */
export function walkLeg(o: { from: Pt; gridBrg: number; dist: number; mode: Mode; paceCorrected: boolean; drift: number; r: () => number }): LegResult {
  const m = MODES[o.mode]
  const headingErr = gaussian(o.r) * m.headingSd + (o.mode === 'none' ? o.drift : 0)
  const brg = o.gridBrg + headingErr
  const noise = gaussian(o.r) * m.paceSd
  const stepLen = 10
  let p = o.from
  const path: Pt[] = [p]
  let walked = 0, ascent = 0, minutes = 0, counted = 0
  let stopped: LegResult['stopped']
  while (counted < o.dist) {
    const forest = inForest(p)
    const e0 = elevation(p)
    const probe = move(p, brg, stepLen)
    const up = (elevation(probe) - e0) / stepLen
    // Paces shorten in forest and on climbs: 1 m walked "counts" as more than 1 m.
    const bias = o.paceCorrected ? 0 : (forest ? 0.1 : 0) + Math.max(0, up) * 1.2
    const countPerM = (1 + bias) * (1 + noise)
    const q = probe
    if (!inMap(q)) { stopped = 'edge'; break }
    if (inLake(q)) { stopped = 'lake'; break }
    if (crossesLine(p, q, CLIFF)) { stopped = 'cliff'; break }
    const dz = elevation(q) - e0
    if (dz > 0) ascent += dz
    walked += stepLen
    counted += stepLen * countPerM
    // Naismith: 5 km/h on open ground (3 km/h in forest) + 1 min per 10 m of ascent.
    minutes += (stepLen / 1000) * (60 / (forest ? 3 : 5)) + Math.max(0, dz) / 10
    p = q
    path.push(p)
  }
  return { path, end: p, walked, ascent, minutes, stopped, headingErr, distFactor: o.dist > 0 ? walked / o.dist : 1 }
}

/** Follow a linear feature (river or trail) from the nearest point, in a given direction, for a distance. No heading error. */
export function followFeature(from: Pt, line: Pt[], forward: boolean, d: number) {
  const c = closestOnLine(from, line)
  const L = lineLength(line)
  const s1 = Math.max(0, Math.min(L, c.along + (forward ? d : -d)))
  const path: Pt[] = [from, c.q]
  const n = Math.max(1, Math.ceil(Math.abs(s1 - c.along) / 20))
  let ascent = 0, prev = c.q, minutes = (c.d / 1000) * 12
  for (let k = 1; k <= n; k++) {
    const q = pointAlong(line, c.along + ((s1 - c.along) * k) / n)
    const dz = elevation(q) - elevation(prev)
    if (dz > 0) ascent += dz
    minutes += (dist(prev, q) / 1000) * (60 / (line === TRAIL ? 5 : 3.5)) + Math.max(0, dz) / 10
    path.push(q)
    prev = q
  }
  return { path, end: prev, ascent, minutes, walked: c.d + Math.abs(s1 - c.along) }
}

// ---------- what the walker sees ----------

const COMPASS_WORDS = ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west']
export const dirWord = (brg: number) => COMPASS_WORDS[Math.round(norm360(brg) / 45) % 8]

/** Terrain-association observations at the walker's TRUE position (what you would see on the ground). */
export function describe(p: Pt, mode: Mode): string[] {
  const out: string[] = []
  const vis = inForest(p) ? 60 : 150
  const riv = closestOnLine(p, RIVER)
  if (riv.d < vis) {
    const a = RIVER[riv.i], b = RIVER[riv.i + 1]
    out.push(`A river ${riv.d < 20 ? 'right beside you' : `about ${Math.round(riv.d / 10) * 10} m to the ${dirWord(bearing(p, riv.q))}`}, flowing ${dirWord(bearing(a, b))}.`)
  }
  const st = closestOnLine(p, STREAM)
  if (st.d < vis && dist(p, STREAM[STREAM.length - 1]) > 60) {
    const a = STREAM[st.i], b = STREAM[st.i + 1]
    out.push(`A small stream ${st.d < 20 ? 'at your feet' : `${Math.round(st.d / 10) * 10} m to the ${dirWord(bearing(p, st.q))}`}, flowing ${dirWord(bearing(a, b))}.`)
  }
  const tr = closestOnLine(p, TRAIL)
  if (tr.d < Math.min(vis, 80)) {
    const a = TRAIL[tr.i], b = TRAIL[tr.i + 1]
    const brg = bearing(a, b)
    out.push(`A footpath ${tr.d < 15 ? 'under your feet' : `${Math.round(tr.d / 10) * 10} m to the ${dirWord(bearing(p, tr.q))}`}, running ${dirWord(brg)}–${dirWord(brg + 180)}.`)
  }
  if (dist(p, BRIDGE) < 80) out.push('A wooden footbridge crosses the river here.')
  const rd = closestOnLine(p, ROAD)
  if (rd.d < 120) out.push(`A road ${rd.d < 20 ? 'right here' : `to the ${dirWord(bearing(p, rd.q))}`}.`)
  const lakeD = dist(p, LAKE.c) - (LAKE.rx + LAKE.ry) / 2
  if (lakeD < 250) out.push(`A lake to the ${dirWord(bearing(p, LAKE.c))}.`)
  const cl = closestOnLine(p, CLIFF)
  if (cl.d < 150) out.push(`Crags — a line of small cliffs — ${cl.d < 30 ? 'right in front of you' : `to the ${dirWord(bearing(p, cl.q))}`}. ${p.x < cl.q.x ? 'They rise above you.' : 'They drop away below you — do not try to descend them.'}`)
  for (const w of WAYPOINTS) if (dist(p, w.p) < (w.id === 'hut' ? 90 : 70)) out.push(`★ You can see the ${w.name.toLowerCase()}!`)
  const s = slopeAt(p)
  if (dist(p, WAYPOINTS[1].p) < 120) out.push('You are on a broad summit: the ground falls away on every side.')
  else if (s.angle < 2) out.push('The ground here is almost flat.')
  else out.push(`The ground slopes ${s.angle < 6 ? 'gently' : s.angle < 15 ? 'moderately' : 'steeply'} (about ${Math.round(s.angle)}°) down toward the ${dirWord(s.aspect)}.`)
  out.push(inForest(p) ? 'You are in dense conifer forest; you can see perhaps 50 m.' : 'Open moorland and scattered trees; good visibility.')
  out.push(`Your altimeter watch reads about ${Math.round(elevation(p) / 10) * 10} m.`)
  if (mode === 'none') out.push('No compass and no sun — directions above are only your best guess from the lie of the land.')
  return out
}

/** Which waypoint (if any) is visible from p. */
export function reached(p: Pt, idx: number) {
  const w = WAYPOINTS[idx]
  return dist(p, w.p) < (w.id === 'hut' ? 90 : 70)
}

/** Final score from the run. */
export function scoreRun(o: { reached: number; walked: number; gpsChecks: number; cliffStops: number; dark: boolean; gaveUp: boolean }) {
  let optimal = 0
  let prev = START
  for (const w of WAYPOINTS) { optimal += dist(prev, w.p); prev = w.p }
  const base = (o.reached / WAYPOINTS.length) * 70
  const eff = o.reached === WAYPOINTS.length ? Math.max(0, 30 - Math.max(0, o.walked / (optimal * 1.25) - 1) * 60) : 0
  const pen = o.gpsChecks * 8 + o.cliffStops * 10 + (o.dark ? 25 : 0)
  return Math.round(Math.max(0, Math.min(100, base + eff - pen)))
}
