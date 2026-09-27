// Small, pure physiology formulas used by Stage 8 diagrams and lessons.

/** NWS/MSC 2001 wind chill in °C, for air temperature °C and wind km/h (valid ≤ 10 °C, wind > 4.8 km/h). */
export function windChill(ta: number, windKmh: number) {
  if (ta > 10 || windKmh <= 4.8) return ta
  const v = Math.pow(windKmh, 0.16)
  return 13.12 + 0.6215 * ta - 11.37 * v + 0.3965 * ta * v
}

/** Barometric pressure (kPa) at altitude h (m), ICAO standard atmosphere. */
export function altitudePressure(h: number) {
  return 101.325 * Math.pow(1 - 2.25577e-5 * h, 5.25588)
}

/** Inspired oxygen partial pressure (kPa): 20.95 % of (barometric pressure − water vapour 6.3 kPa at 37 °C). */
export function inspiredPO2(h: number) {
  return 0.2095 * (altitudePressure(h) - 6.3)
}

/** Stefan–Boltzmann net radiative flux (W/m²) from a surface at ts °C to surroundings at tr °C. */
export function radiativeFlux(ts: number, tr: number, emissivity = 0.95) {
  const s = 5.67e-8
  return emissivity * s * (Math.pow(ts + 273.15, 4) - Math.pow(tr + 273.15, 4))
}

/** Outdoor WBGT (°C) from natural wet-bulb, black-globe and dry-bulb temperatures. */
export function wbgt(tnwb: number, tg: number, tdb: number) {
  return 0.7 * tnwb + 0.2 * tg + 0.1 * tdb
}
