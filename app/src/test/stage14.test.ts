import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage14'
import { sims } from '../sims/stage14'
import {
  SCENARIOS, bayesUpdate, completeWithOptimal, coverage, drift, initialBelief, optimalAllocation, optimalPlan,
  podForHours, podFromCoverage, posOf, runPlan, scorePlan, uniformPlan,
} from '../sims/stage14/searchModel'
import {
  CHALLENGES, REFLECTORS, aimProbability, brightEnough, effectiveArea, evaluateMirror, flashIlluminance, footprintWidth,
  maxRangeKm, transmission,
} from '../sims/stage14/mirrorModel'

const sum = (xs: number[]) => xs.reduce((a, b) => a + b, 0)

describe('search model: coverage and POD', () => {
  it('computes coverage and the exponential detection function', () => {
    expect(coverage(40, 10, 2)).toBeCloseTo(0.2, 10)
    expect(podFromCoverage(0)).toBe(0)
    expect(podFromCoverage(1)).toBeCloseTo(1 - Math.exp(-1), 10)
    expect(podFromCoverage(0.5)).toBeCloseTo(0.393, 3)
  })
  it('two passes combine as 1 − (1 − p)², not 2p', () => {
    const p = podFromCoverage(Math.log(2)) // 50 %
    expect(p).toBeCloseTo(0.5, 10)
    expect(podFromCoverage(2 * Math.log(2))).toBeCloseTo(0.75, 10)
  })
  it('POD has diminishing returns in searcher-hours', () => {
    const g = SCENARIOS[0].segments[0]
    const gain1 = podForHours(g, 2) - podForHours(g, 0)
    const gain2 = podForHours(g, 4) - podForHours(g, 2)
    expect(gain2).toBeLessThan(gain1)
  })
})

describe('search model: Bayesian update', () => {
  it('matches the lesson worked example', () => {
    const b = { poa: [0.4, 0.3, 0.2], row: 0.1 }
    const after = bayesUpdate(b, [0.8, 0, 0])
    expect(posOf(b, [0.8, 0, 0])).toBeCloseTo(0.32, 10)
    expect(after.poa[0]).toBeCloseTo(0.08 / 0.68, 10)
    expect(after.poa[1]).toBeCloseTo(0.3 / 0.68, 10)
    expect(after.row).toBeCloseTo(0.1 / 0.68, 10)
  })
  it('keeps probabilities summing to 1; searched segments fall, others and ROW rise', () => {
    for (const s of SCENARIOS) {
      const b = initialBelief(s)
      expect(sum(b.poa) + b.row).toBeCloseTo(1, 10)
      const pods = s.segments.map((_, i) => (i === 0 ? 0.7 : 0))
      const a = bayesUpdate(b, pods)
      expect(sum(a.poa) + a.row).toBeCloseTo(1, 10)
      expect(a.poa[0]).toBeLessThan(b.poa[0])
      for (let i = 1; i < s.segments.length; i++) expect(a.poa[i]).toBeGreaterThan(b.poa[i])
      expect(a.row).toBeGreaterThan(b.row)
    }
  })
  it('matches the quiz: B becomes 43 % after A (50 %) is searched at POD 60 %', () => {
    const a = bayesUpdate({ poa: [0.5, 0.3, 0.1], row: 0.1 }, [0.6, 0, 0])
    expect(Math.round(a.poa[1] * 100)).toBe(43)
  })
  it('drift of a moving subject conserves probability and raises ROW', () => {
    const s = SCENARIOS[0]
    const b = initialBelief(s)
    const d = drift(b, s, 0.3)
    expect(sum(d.poa) + d.row).toBeCloseTo(1, 10)
    expect(d.row).toBeGreaterThan(b.row)
    expect(drift(b, s, 0)).toEqual(b)
  })
})

describe('search model: plans and scoring', () => {
  it('optimal allocation uses exactly the available hours', () => {
    for (const s of SCENARIOS) expect(sum(optimalAllocation(initialBelief(s), s, s.hoursPerPeriod))).toBeCloseTo(s.hoursPerPeriod, 10)
  })
  it('cumulative POS from sequential updates equals Σ POA₀·(1 − e^(−C_total)) for a stationary subject', () => {
    const s = SCENARIOS[0]
    const plan = optimalPlan(s)
    const totals = s.segments.map((_, i) => sum(plan.periods.map((p) => p.alloc[i])))
    const direct = sum(s.segments.map((g, i) => g.poa * podForHours(g, totals[i])))
    expect(plan.cumPos).toBeCloseTo(direct, 10)
  })
  it('the optimal plan beats an even split by area and scores 100', () => {
    for (const s of SCENARIOS) {
      const opt = optimalPlan(s)
      expect(opt.cumPos).toBeGreaterThan(uniformPlan(s).cumPos + 0.05)
      expect(scorePlan(s, opt.periods.map((p) => p.alloc)).score).toBe(100)
    }
  })
  it('putting everything in the largest, low-POA segment scores poorly', () => {
    const s = SCENARIOS[0]
    const forest = s.segments.findIndex((g) => g.id === 'forest')
    const bad = Array.from({ length: s.periods }, () => s.segments.map((_, i) => (i === forest ? s.hoursPerPeriod : 0)))
    expect(scorePlan(s, bad).score).toBeLessThan(40)
  })
  it('a moving subject lowers the achievable probability of success', () => {
    for (const s of SCENARIOS) expect(optimalPlan(s, 0.3).cumPos).toBeLessThan(optimalPlan(s, 0).cumPos)
  })
  it('an early find is scored by filling remaining periods optimally', () => {
    const s = SCENARIOS[1]
    const first = optimalAllocation(initialBelief(s), s, s.hoursPerPeriod)
    const full = completeWithOptimal(s, [first])
    expect(full).toHaveLength(s.periods)
    expect(scorePlan(s, full).score).toBe(100)
    expect(runPlan(s, full).periods).toHaveLength(s.periods)
  })
})

describe('mirror model', () => {
  const signal = REFLECTORS.find((r) => r.id === 'signal')!
  const phone = REFLECTORS.find((r) => r.id === 'phone')!
  it('effective area follows cos(θ/2)', () => {
    expect(effectiveArea(100, 0)).toBeCloseTo(0.01, 10)
    expect(effectiveArea(100, 90)).toBeCloseTo(0.01 * Math.cos(Math.PI / 4), 10)
    expect(effectiveArea(100, 180)).toBeCloseTo(0, 10)
  })
  it('the beam footprint is about 0.0093 × distance', () => {
    expect(footprintWidth(10)).toBeGreaterThan(90)
    expect(footprintWidth(10)).toBeLessThan(96)
    expect(footprintWidth(20)).toBeCloseTo(2 * footprintWidth(10), 6)
  })
  it('brightness falls with distance, haze and cloud; overcast gives no flash', () => {
    const base = { reflector: signal, sunTargetDeg: 60, distanceKm: 10, visibilityKm: 40, sky: 'clear' as const }
    expect(flashIlluminance({ ...base, distanceKm: 20 })).toBeLessThan(flashIlluminance(base) / 4)
    expect(flashIlluminance({ ...base, visibilityKm: 10 })).toBeLessThan(flashIlluminance(base))
    expect(flashIlluminance({ ...base, sky: 'overcast' })).toBe(0)
    expect(transmission(0, 10)).toBe(1)
    expect(brightEnough(0)).toBe(0)
  })
  it('a glass signal mirror outranges a phone screen, and clear air outranges haze', () => {
    const x = { sunTargetDeg: 90, visibilityKm: 40, sky: 'clear' as const }
    expect(maxRangeKm({ ...x, reflector: signal })).toBeGreaterThan(maxRangeKm({ ...x, reflector: phone }) * 1.5)
    expect(maxRangeKm({ ...x, reflector: signal, visibilityKm: 80 })).toBeGreaterThan(maxRangeKm({ ...x, reflector: signal }))
  })
  it('aiming technique and sweeping raise the chance of reaching the target', () => {
    expect(aimProbability('v-finger', false, true)).toBeGreaterThan(aimProbability('none', false, true))
    expect(aimProbability('sighting', false, true)).toBeGreaterThan(aimProbability('v-finger', false, true))
    expect(aimProbability('v-finger', true, true)).toBeGreaterThan(aimProbability('v-finger', false, true))
    // No sighting hole: the sighting method falls back to V-finger accuracy.
    expect(aimProbability('sighting', true, false)).toBeCloseTo(aimProbability('v-finger', true, false), 10)
  })
  it('every challenge has a good option (≥ 80 %) and aiming badly always scores low', () => {
    for (const c of CHALLENGES) {
      let best = 0
      for (const id of c.kit) {
        const reflector = REFLECTORS.find((r) => r.id === id)!
        for (const deg of [c.sunTargetDeg, c.betterDeg ?? c.sunTargetDeg]) {
          const good = evaluateMirror({ reflector, sunTargetDeg: deg, distanceKm: c.distanceKm, visibilityKm: c.visibilityKm, sky: c.sky, method: 'sighting', sweep: true })
          best = Math.max(best, good.detect)
          const poor = evaluateMirror({ reflector, sunTargetDeg: deg, distanceKm: c.distanceKm, visibilityKm: c.visibilityKm, sky: c.sky, method: 'none', sweep: false })
          expect(poor.detect).toBeLessThan(0.1)
        }
      }
      expect(best, c.id).toBeGreaterThanOrEqual(0.8)
    }
  })
  it('moving so the Sun is to the side helps when it was nearly behind', () => {
    const c = CHALLENGES.find((x) => x.betterDeg !== undefined)!
    const reflector = REFLECTORS.find((r) => r.id === c.kit[0])!
    const stay = evaluateMirror({ reflector, sunTargetDeg: c.sunTargetDeg, distanceKm: c.distanceKm, visibilityKm: c.visibilityKm, sky: c.sky, method: 'v-finger', sweep: true })
    const moved = evaluateMirror({ reflector, sunTargetDeg: c.betterDeg!, distanceKm: c.distanceKm, visibilityKm: c.visibilityKm, sky: c.sky, method: 'v-finger', sweep: true })
    expect(moved.lux).toBeGreaterThan(stay.lux * 2)
    expect(stay.notes.some((n) => n.includes('behind'))).toBe(true)
  })
})

describe('stage 14 registries', () => {
  it('registers both outline simulations', () => {
    expect(sims.map((s) => s.id).sort()).toEqual(['search-sim', 'signal-mirror'])
  })
  it('diagrams and sims render without crashing', () => {
    for (const [id, C] of Object.entries(diagrams)) expect(renderToString(createElement(C)), id).toContain('<svg')
    for (const s of sims) expect(renderToString(createElement(s.component, { onScore: () => {} })).length).toBeGreaterThan(100)
  })
})
