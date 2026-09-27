// Low-precision astronomy for the celestial navigation simulator.
// Sun: the standard low-precision solar coordinates (Astronomical Almanac / NOAA summary), good to ~0.01°–0.1°.
// Moon: principal periodic terms only (Meeus ch. 47 truncated), good to ~1° — plenty for direction finding.
// Stars: J2000 positions, precession ignored (≈0.35° error by 2025, invisible at this scale).
// Angles in degrees. Azimuth is measured clockwise from TRUE north (0 = N, 90 = E, 180 = S, 270 = W).

const D2R = Math.PI / 180
const sin = (d: number) => Math.sin(d * D2R)
const cos = (d: number) => Math.cos(d * D2R)
const asin = (x: number) => Math.asin(Math.max(-1, Math.min(1, x))) / D2R
const atan2 = (y: number, x: number) => Math.atan2(y, x) / D2R
export const norm360 = (a: number) => ((a % 360) + 360) % 360

/** Julian Day from a JS Date (UTC). */
export const julianDay = (d: Date) => d.getTime() / 86400000 + 2440587.5
/** Days since J2000.0 (2000-01-01 12:00 TT ≈ UTC here). */
export const daysJ2000 = (d: Date) => julianDay(d) - 2451545.0

export interface Eq { ra: number; dec: number }
export interface HorizonPos { alt: number; az: number }

/** Obliquity of the ecliptic (deg). */
const obliquity = (n: number) => 23.439 - 0.0000004 * n

function eclipticToEq(lambda: number, beta: number, n: number): Eq {
  const e = obliquity(n)
  const ra = norm360(atan2(sin(lambda) * cos(e) - Math.tan(beta * D2R) * sin(e), cos(lambda)))
  const dec = asin(sin(beta) * cos(e) + cos(beta) * sin(e) * sin(lambda))
  return { ra, dec }
}

/** Sun's apparent ecliptic longitude (deg) and equatorial coordinates. */
export function sunEq(d: Date): Eq & { lambda: number } {
  const n = daysJ2000(d)
  const L = norm360(280.46 + 0.9856474 * n) // mean longitude
  const g = norm360(357.528 + 0.9856003 * n) // mean anomaly
  const lambda = norm360(L + 1.915 * sin(g) + 0.02 * sin(2 * g))
  return { ...eclipticToEq(lambda, 0, n), lambda }
}

/** Moon's ecliptic longitude/latitude (deg) and equatorial coordinates (geocentric, low precision). */
export function moonEq(d: Date): Eq & { lambda: number; beta: number } {
  const n = daysJ2000(d)
  const Lp = norm360(218.316 + 13.176396 * n) // mean longitude
  const M = norm360(134.963 + 13.064993 * n) // Moon's mean anomaly
  const Ms = norm360(357.529 + 0.98560028 * n) // Sun's mean anomaly
  const D = norm360(297.85 + 12.190749 * n) // mean elongation
  const F = norm360(93.272 + 13.22935 * n) // argument of latitude
  const lambda = norm360(Lp + 6.289 * sin(M) + 1.274 * sin(2 * D - M) + 0.658 * sin(2 * D) + 0.214 * sin(2 * M) - 0.186 * sin(Ms) - 0.114 * sin(2 * F))
  const beta = 5.128 * sin(F) + 0.281 * sin(M + F) + 0.278 * sin(M - F)
  return { ...eclipticToEq(lambda, beta, n), lambda, beta }
}

/** Moon phase: elongation from the Sun (0 new → 180 full → 360), illuminated fraction 0–1, waxing flag. */
export function moonPhase(d: Date) {
  const elong = norm360(moonEq(d).lambda - sunEq(d).lambda)
  const illum = (1 - cos(elong)) / 2
  const waxing = elong < 180
  const name =
    elong < 12 || elong > 348 ? 'New Moon'
    : elong < 78 ? 'Waxing crescent'
    : elong < 102 ? 'First quarter'
    : elong < 168 ? 'Waxing gibbous'
    : elong < 192 ? 'Full Moon'
    : elong < 258 ? 'Waning gibbous'
    : elong < 282 ? 'Last quarter'
    : 'Waning crescent'
  return { elong, illum, waxing, name }
}

/** Greenwich mean sidereal time (deg). */
export const gmst = (d: Date) => norm360(280.46061837 + 360.98564736629 * daysJ2000(d))

/** Convert equatorial coordinates to altitude/azimuth for an observer at latitude `lat`, longitude `lon` (east +). */
export function toHorizon(eq: Eq, d: Date, lat: number, lon: number): HorizonPos {
  const H = norm360(gmst(d) + lon - eq.ra) // local hour angle, + to the west
  const alt = asin(sin(lat) * sin(eq.dec) + cos(lat) * cos(eq.dec) * cos(H))
  const az = norm360(atan2(-cos(eq.dec) * sin(H), sin(eq.dec) * cos(lat) - cos(eq.dec) * sin(lat) * cos(H)))
  return { alt, az }
}

export const sunPosition = (d: Date, lat: number, lon: number) => toHorizon(sunEq(d), d, lat, lon)
export const moonPosition = (d: Date, lat: number, lon: number) => toHorizon(moonEq(d), d, lat, lon)

/**
 * Azimuth of sunrise (deg from true north) for a body of declination `dec` at latitude `lat`,
 * geometric horizon, no refraction: cos A = sin δ / cos φ. Returns null if it never rises or sets.
 */
export function riseAzimuth(dec: number, lat: number) {
  const c = sin(dec) / cos(lat)
  if (c > 1 || c < -1) return null
  return Math.acos(c) / D2R
}

/** Noon altitude of the sun: 90° − |φ − δ|. */
export const noonAltitude = (dec: number, lat: number) => 90 - Math.abs(lat - dec)

/** Equation of time (minutes): apparent solar time − mean solar time. */
export function equationOfTime(d: Date) {
  const n = daysJ2000(d)
  const L = norm360(280.46 + 0.9856474 * n)
  const s = sunEq(d)
  let e = L - 0.0057183 - s.ra
  e = ((e + 180) % 360 + 360) % 360 - 180
  return e * 4
}

// ---------- star catalogue (J2000; RA and Dec in degrees; visual magnitude) ----------

export interface Star { id: string; name: string; ra: number; dec: number; mag: number }

export const STARS: Star[] = [
  { id: 'polaris', name: 'Polaris', ra: 37.95, dec: 89.26, mag: 2.0 },
  // Big Dipper (Ursa Major)
  { id: 'dubhe', name: 'Dubhe', ra: 165.93, dec: 61.75, mag: 1.8 },
  { id: 'merak', name: 'Merak', ra: 165.46, dec: 56.38, mag: 2.4 },
  { id: 'phecda', name: 'Phecda', ra: 178.46, dec: 53.69, mag: 2.4 },
  { id: 'megrez', name: 'Megrez', ra: 183.86, dec: 57.03, mag: 3.3 },
  { id: 'alioth', name: 'Alioth', ra: 193.51, dec: 55.96, mag: 1.8 },
  { id: 'mizar', name: 'Mizar', ra: 200.98, dec: 54.93, mag: 2.2 },
  { id: 'alkaid', name: 'Alkaid', ra: 206.89, dec: 49.31, mag: 1.9 },
  // Cassiopeia
  { id: 'caph', name: 'Caph', ra: 2.29, dec: 59.15, mag: 2.3 },
  { id: 'schedar', name: 'Schedar', ra: 10.13, dec: 56.54, mag: 2.2 },
  { id: 'gcas', name: 'γ Cas', ra: 14.18, dec: 60.72, mag: 2.2 },
  { id: 'ruchbah', name: 'Ruchbah', ra: 21.45, dec: 60.24, mag: 2.7 },
  { id: 'segin', name: 'Segin', ra: 28.6, dec: 63.67, mag: 3.4 },
  // Crux and the Pointers
  { id: 'acrux', name: 'Acrux', ra: 186.65, dec: -63.1, mag: 0.8 },
  { id: 'mimosa', name: 'Mimosa', ra: 191.93, dec: -59.69, mag: 1.3 },
  { id: 'gacrux', name: 'Gacrux', ra: 187.79, dec: -57.11, mag: 1.6 },
  { id: 'dcru', name: 'δ Cru', ra: 183.79, dec: -58.75, mag: 2.8 },
  { id: 'acen', name: 'α Centauri', ra: 219.9, dec: -60.83, mag: -0.3 },
  { id: 'hadar', name: 'Hadar (β Cen)', ra: 210.96, dec: -60.37, mag: 0.6 },
  // Orion
  { id: 'betelgeuse', name: 'Betelgeuse', ra: 88.79, dec: 7.41, mag: 0.5 },
  { id: 'rigel', name: 'Rigel', ra: 78.63, dec: -8.2, mag: 0.1 },
  { id: 'bellatrix', name: 'Bellatrix', ra: 81.28, dec: 6.35, mag: 1.6 },
  { id: 'saiph', name: 'Saiph', ra: 86.94, dec: -9.67, mag: 2.1 },
  { id: 'alnitak', name: 'Alnitak', ra: 85.19, dec: -1.94, mag: 1.8 },
  { id: 'alnilam', name: 'Alnilam', ra: 84.05, dec: -1.2, mag: 1.7 },
  { id: 'mintaka', name: 'Mintaka', ra: 83.0, dec: -0.3, mag: 2.2 },
  // A few bright extras for context
  { id: 'sirius', name: 'Sirius', ra: 101.29, dec: -16.72, mag: -1.5 },
  { id: 'vega', name: 'Vega', ra: 279.23, dec: 38.78, mag: 0.0 },
  { id: 'arcturus', name: 'Arcturus', ra: 213.92, dec: 19.18, mag: -0.05 },
  { id: 'canopus', name: 'Canopus', ra: 95.99, dec: -52.7, mag: -0.7 },
  { id: 'achernar', name: 'Achernar', ra: 24.43, dec: -57.24, mag: 0.5 },
]

export const CONSTELLATION_LINES: { name: string; pairs: [string, string][] }[] = [
  { name: 'Big Dipper', pairs: [['dubhe', 'merak'], ['merak', 'phecda'], ['phecda', 'megrez'], ['megrez', 'dubhe'], ['megrez', 'alioth'], ['alioth', 'mizar'], ['mizar', 'alkaid']] },
  { name: 'Cassiopeia', pairs: [['caph', 'schedar'], ['schedar', 'gcas'], ['gcas', 'ruchbah'], ['ruchbah', 'segin']] },
  { name: 'Southern Cross', pairs: [['acrux', 'gacrux'], ['mimosa', 'dcru']] },
  { name: 'Pointers', pairs: [['acen', 'hadar']] },
  { name: 'Orion', pairs: [['betelgeuse', 'bellatrix'], ['betelgeuse', 'alnitak'], ['bellatrix', 'mintaka'], ['alnitak', 'alnilam'], ['alnilam', 'mintaka'], ['alnitak', 'saiph'], ['mintaka', 'rigel'], ['saiph', 'rigel']] },
]

export const starById = (id: string) => STARS.find((s) => s.id === id)!

/** Sky brightness class from the Sun's altitude. */
export function skyState(sunAlt: number): 'day' | 'civil' | 'nautical' | 'night' {
  if (sunAlt > -0.833) return 'day'
  if (sunAlt > -6) return 'civil'
  if (sunAlt > -12) return 'nautical'
  return 'night'
}

/** Build a UTC date for local MEAN solar time at longitude `lon` (clock = mean solar time, no time zones). */
export function dateFromLocal(year: number, dayOfYear: number, localHours: number, lon: number) {
  const utcHours = localHours - lon / 15
  return new Date(Date.UTC(year, 0, 1) + ((dayOfYear - 1) * 24 + utcHours) * 3600000)
}
