import { describe, expect, it } from 'vitest'
import { GENERA, SCENES, FORECASTS, scoreAnswer, totalPercent } from '../sims/stage12/cloudModel'
import {
  MAPS, delayToKm, kmToDelay, stormDistance, hazard, initialState, step, retreat, resume, baselineDose, score, bucketFor, riskBand, type LightningMap, type SimState,
} from '../sims/stage12/lightningModel'

describe('cloud model', () => {
  it('has the ten WMO genera', () => {
    expect(GENERA.map((g) => g.id).sort()).toEqual(['Ac', 'As', 'Cb', 'Cc', 'Ci', 'Cs', 'Cu', 'Ns', 'Sc', 'St'])
  })
  it('every scene uses known genera and forecasts', () => {
    const f = FORECASTS.map((x) => x.id)
    for (const s of SCENES) {
      expect(s.frames.length).toBeGreaterThan(0)
      expect(f).toContain(s.forecast)
      for (const p of s.partial) expect(f).toContain(p)
      expect(s.partial).not.toContain(s.forecast)
    }
  })
  it('scores genus and forecast with partial credit', () => {
    const wf = SCENES.find((s) => s.id === 'warm-front')!
    expect(scoreAnswer(wf, 'As', 'front-rain')).toBe(2)
    expect(scoreAnswer(wf, 'Ac', 'prolonged-rain')).toBe(0.75) // same level + partial forecast
    expect(scoreAnswer(wf, 'Cu', 'fair')).toBe(0)
    expect(totalPercent([2, 1])).toBe(75)
  })
})

function run(map: LightningMap, plan: { at: number; refuge?: string; resumeAt?: number }): SimState {
  let s = initialState()
  while (!s.done && s.t < 400) {
    if (plan.refuge && s.t === plan.at && s.retreatedAt === null) s = retreat(map, s, plan.refuge)
    if (plan.resumeAt !== undefined && s.t === plan.resumeAt && s.loc !== 'start') s = resume(map, s)
    s = step(map, s)
  }
  return s
}

describe('lightning model', () => {
  const mtn = MAPS.find((m) => m.id === 'mountain')!
  it('flash-to-bang uses 343 m/s', () => {
    expect(delayToKm(3)).toBeCloseTo(1.029, 3)
    expect(kmToDelay(10)).toBeCloseTo(29.15, 1)
    expect(bucketFor(12)).toBe('3-6') // 4.1 km
    expect(bucketFor(40)).toBe('10-16')
  })
  it('storm geometry and hazard are sensible', () => {
    expect(stormDistance({ d0: 10, speed: 30, miss: 0 }, 20)).toBeCloseTo(0, 5)
    expect(hazard(20)).toBe(0)
    expect(hazard(1)).toBeGreaterThan(hazard(5))
  })
  it('an early retreat to forest beats a late one, and both beat staying on the summit', () => {
    const early = run(mtn, { at: 0, refuge: 'forest' })
    const late = run(mtn, { at: 30, refuge: 'forest' })
    expect(early.dose).toBeLessThan(late.dose)
    expect(late.dose).toBeLessThan(baselineDose(mtn))
  })
  it('an isolated tree is worse than staying put', () => {
    expect(run(mtn, { at: 0, refuge: 'tree' }).dose).toBeGreaterThan(baselineDose(mtn))
  })
  it('the distant car is worse than nearby forest on the mountain', () => {
    expect(run(mtn, { at: 0, refuge: 'car' }).dose).toBeGreaterThan(run(mtn, { at: 0, refuge: 'forest' }).dose)
  })
  it('on the lake, leaving early for the car is the best plan', () => {
    const lake = MAPS.find((m) => m.id === 'lake')!
    const car = run(lake, { at: 0, refuge: 'car' })
    for (const r of lake.refuges.filter((x) => x.id !== 'car')) expect(car.dose).toBeLessThan(run(lake, { at: 0, refuge: r.id }).dose)
    expect(riskBand(car.dose)).toBe('Low')
  })
  it('resuming before 30 minutes after the last thunder is flagged and costs points', () => {
    const ok = run(mtn, { at: 0, refuge: 'forest' })
    const early = run(mtn, { at: 0, refuge: 'forest', resumeAt: 70 })
    expect(early.resumedEarly).toBe(true)
    expect(ok.resumedEarly).toBe(false)
    const est = { correct: 0, total: 0 }
    expect(score(mtn, ok, est)).toBeGreaterThan(score(mtn, early, est))
  })
  it('the sim ends once the storm is out of range and 30 minutes have passed', () => {
    const s = run(MAPS[2], { at: 0, refuge: 'car' })
    expect(s.done).toBe(true)
    expect(s.t - (s.lastThunder ?? 0)).toBeGreaterThanOrEqual(30)
  })
})
