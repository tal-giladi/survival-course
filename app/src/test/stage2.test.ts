import { describe, expect, it } from 'vitest'
import {
  STARS, dateFromLocal, equationOfTime, moonPhase, noonAltitude, riseAzimuth, sunEq, sunPosition, toHorizon, starById,
} from '../sims/stage2/astro'
import {
  CLIFF, START, WAYPOINTS, angDiff, bearing, contours, describe as look, dist, elevation, gaussian, gridToMagnetic, lateralError,
  magneticToGrid, rng, scoreRun, walkLeg,
} from '../sims/stage2/navModel'

const utc = (s: string) => new Date(s)

describe('astro: sun', () => {
  it('declination is about +23.44° at the June solstice and about 0° at the March equinox', () => {
    expect(sunEq(utc('2025-06-21T03:00:00Z')).dec).toBeCloseTo(23.44, 1)
    expect(Math.abs(sunEq(utc('2025-03-20T09:00:00Z')).dec)).toBeLessThan(0.1)
    expect(sunEq(utc('2025-12-21T15:00:00Z')).dec).toBeCloseTo(-23.44, 1)
  })
  it('at equinox solar noon on the equator the sun is nearly overhead', () => {
    const d = utc('2025-03-20T12:07:00Z') // solar noon at lon 0 (equation of time ≈ −7 min)
    expect(sunPosition(d, 0, 0).alt).toBeGreaterThan(88)
  })
  it('at 40° N the noon sun is due south at ≈50° on the equinox; at 35° S it is due north', () => {
    const d = utc('2025-09-22T11:52:30Z') // solar noon at lon 0 (EoT ≈ +7.5 min)
    const n = sunPosition(d, 40, 0)
    expect(n.alt).toBeCloseTo(50, 0)
    expect(Math.abs(angDiff(n.az, 180))).toBeLessThan(2)
    const s = sunPosition(d, -35, 0)
    expect(Math.abs(angDiff(s.az, 0))).toBeLessThan(2)
  })
  it('noon altitude formula and sunrise azimuth at 40° N midsummer (≈ 58.7°)', () => {
    expect(noonAltitude(23.44, 40)).toBeCloseTo(73.44, 2)
    expect(riseAzimuth(23.44, 40)).toBeCloseTo(58.7, 0)
    expect(riseAzimuth(0, 55)).toBeCloseTo(90, 5)
    expect(riseAzimuth(23.44, 70)).toBeNull() // midnight sun
  })
  it('morning sun is in the eastern half of the sky, afternoon in the western', () => {
    expect(sunPosition(dateFromLocal(2025, 172, 9, 0), 45, 0).az).toBeLessThan(180)
    expect(sunPosition(dateFromLocal(2025, 172, 15, 0), 45, 0).az).toBeGreaterThan(180)
  })
  it('equation of time: ≈ +16 min early November, ≈ −14 min mid-February', () => {
    expect(equationOfTime(utc('2025-11-03T12:00:00Z'))).toBeCloseTo(16.4, 0)
    expect(equationOfTime(utc('2025-02-11T12:00:00Z'))).toBeCloseTo(-14.2, 0)
  })
})

describe('astro: stars and moon', () => {
  it('Polaris altitude ≈ latitude (within ~1°) in the northern hemisphere', () => {
    const p = starById('polaris')
    for (const lat of [10, 35, 52, 70]) {
      for (const h of [0, 6, 12, 18]) {
        const pos = toHorizon(p, dateFromLocal(2025, 40, h, 0), lat, 0)
        expect(Math.abs(pos.alt - lat)).toBeLessThan(1)
        expect(Math.abs(angDiff(pos.az, 0))).toBeLessThan(2.5)
      }
    }
  })
  it('Mintaka rises within ~1° of due east', () => {
    const m = starById('mintaka')
    expect(Math.abs(riseAzimuth(m.dec, 50)! - 90)).toBeLessThan(1)
    expect(Math.abs(riseAzimuth(m.dec, -30)! - 90)).toBeLessThan(1)
  })
  it('the Southern Cross is circumpolar at 40° S but never rises at 40° N', () => {
    const acrux = starById('acrux')
    for (let h = 0; h < 24; h += 2) {
      expect(toHorizon(acrux, dateFromLocal(2025, 100, h, 0), -40, 0).alt).toBeGreaterThan(0)
      expect(toHorizon(acrux, dateFromLocal(2025, 100, h, 0), 40, 0).alt).toBeLessThan(0)
    }
  })
  it('star catalogue has unique ids', () => {
    expect(new Set(STARS.map((s) => s.id)).size).toBe(STARS.length)
  })
  it('moon phase: full on 2024-09-18 (lunar eclipse), new on 2024-04-08 (solar eclipse)', () => {
    expect(moonPhase(utc('2024-09-18T02:34:00Z')).illum).toBeGreaterThan(0.97)
    expect(moonPhase(utc('2024-04-08T18:21:00Z')).illum).toBeLessThan(0.03)
    const fq = moonPhase(utc('2024-09-11T06:06:00Z')) // first quarter
    expect(fq.waxing).toBe(true)
    expect(fq.illum).toBeGreaterThan(0.4)
    expect(fq.illum).toBeLessThan(0.6)
  })
})

describe('navigation model', () => {
  it('declination 8° W: magnetic = grid + 8°, with wrap-around', () => {
    expect(gridToMagnetic(45)).toBe(53)
    expect(magneticToGrid(3)).toBe(355)
    expect(gridToMagnetic(356)).toBe(4)
  })
  it('1-in-60 rule approximates the exact lateral error for small angles', () => {
    expect(lateralError(1000, 1, false)).toBeCloseTo(16.7, 1)
    expect(lateralError(1000, 1)).toBeCloseTo(17.5, 1)
    expect(Math.abs(lateralError(2000, 5, false) - lateralError(2000, 5))).toBeLessThan(10)
  })
  it('bearing() uses grid north and clockwise angles', () => {
    expect(bearing({ x: 0, y: 0 }, { x: 0, y: 100 })).toBeCloseTo(0)
    expect(bearing({ x: 0, y: 0 }, { x: 100, y: 0 })).toBeCloseTo(90)
    expect(bearing({ x: 0, y: 0 }, { x: -100, y: 0 })).toBeCloseTo(270)
  })
  it('the summit is the highest waypoint and the crag band makes a steep step', () => {
    const s = elevation(WAYPOINTS[1].p)
    expect(s).toBeGreaterThan(elevation(WAYPOINTS[0].p) + 150)
    const c = CLIFF[1]
    expect(elevation({ x: c.x + 30, y: c.y }) - elevation({ x: c.x - 30, y: c.y })).toBeGreaterThan(40)
    expect(contours().length).toBeGreaterThan(8)
  })
  it('the direct line from the junction to the summit is blocked by crags', () => {
    const j = WAYPOINTS[0].p
    const leg = walkLeg({ from: j, gridBrg: bearing(j, WAYPOINTS[1].p), dist: dist(j, WAYPOINTS[1].p), mode: 'compass', paceCorrected: true, drift: 0, r: rng(1) })
    expect(leg.stopped).toBe('cliff')
  })
  it('random heading errors average out; the no-aid mode adds a systematic drift', () => {
    const r = rng(42)
    let sum = 0
    for (let i = 0; i < 2000; i++) sum += gaussian(r)
    expect(Math.abs(sum / 2000)).toBeLessThan(0.1)
    let drift = 0
    for (let i = 0; i < 200; i++) drift += walkLeg({ from: START, gridBrg: 0, dist: 20, mode: 'none', paceCorrected: true, drift: 9, r }).headingErr
    expect(drift / 200).toBeGreaterThan(5)
  })
  it('uncorrected pacing in forest and uphill covers less ground than counted', () => {
    const from = { x: 600, y: 850 }
    const a = walkLeg({ from, gridBrg: 70, dist: 400, mode: 'compass', paceCorrected: false, drift: 0, r: rng(3) })
    const b = walkLeg({ from, gridBrg: 70, dist: 400, mode: 'compass', paceCorrected: true, drift: 0, r: rng(3) })
    expect(a.walked).toBeLessThan(b.walked)
  })
  it('observations mention the river when standing next to it', () => {
    expect(look({ x: 1830, y: 1250 }, 'compass').some((l) => l.includes('river'))).toBe(true)
  })
  it('scores reward reaching waypoints and penalise GPS checks and darkness', () => {
    const perfect = scoreRun({ reached: 3, walked: 3800, gpsChecks: 0, cliffStops: 0, dark: false, gaveUp: false })
    expect(perfect).toBeGreaterThan(90)
    expect(scoreRun({ reached: 3, walked: 3800, gpsChecks: 2, cliffStops: 0, dark: false, gaveUp: false })).toBeLessThan(perfect)
    expect(scoreRun({ reached: 1, walked: 3000, gpsChecks: 0, cliffStops: 0, dark: true, gaveUp: false })).toBeLessThan(20)
  })
})
