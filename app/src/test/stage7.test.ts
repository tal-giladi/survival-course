import { describe, expect, it } from 'vitest'
import { FIBERS, KNOTS, LOADS, bendEfficiency, capstan, defaultInput, evaluate, knotEfficiency, ridgeTension, straightStrength, twistEfficiency } from '../sims/stage7/cordageModel'
import type { CordInput, FiberId, KnotId, LoadId } from '../sims/stage7/cordageModel'
import { stage7 } from '../content/stages/stage7'

const cord = (p: Partial<CordInput>): CordInput => ({ ...defaultInput, ...p })

function* grid(): Generator<CordInput> {
  for (const fiber of Object.keys(FIBERS) as FiberId[])
    for (const plies of [1, 2, 3] as const)
      for (const build of ['reverse-wrap', 'single-twist'] as const)
        for (const twist of [5, 12, 20, 28, 45])
          for (const diameter of [1.5, 2.5, 3, 3.5, 4, 5, 6, 8, 10])
            for (const wet of [false, true])
              for (const knot of Object.keys(KNOTS) as KnotId[]) yield { fiber, plies, build, twist, diameter, wet, knot }
}

describe('cordage model: mechanics', () => {
  it('twist efficiency peaks near 20° and falls off at both ends', () => {
    expect(twistEfficiency(20)).toBeGreaterThan(0.98)
    expect(twistEfficiency(5)).toBeLessThan(0.6)
    expect(twistEfficiency(45)).toBeLessThan(0.7)
    expect(twistEfficiency(12)).toBeLessThan(twistEfficiency(20))
    expect(twistEfficiency(35)).toBeLessThan(twistEfficiency(25))
  })
  it('strength scales roughly with cross-section (d²), slightly less for thick hand-made cord', () => {
    const r = straightStrength(cord({ diameter: 6 })) / straightStrength(cord({ diameter: 3 }))
    expect(r).toBeGreaterThan(3.5)
    expect(r).toBeLessThan(4)
  })
  it('a 3 mm two-ply nettle cord breaks at roughly 25–45 kg', () => {
    const kg = straightStrength(defaultInput) / 9.81
    expect(kg).toBeGreaterThan(25)
    expect(kg).toBeLessThan(45)
  })
  it('reverse wrap beats a single strand and beats plies twisted all one way', () => {
    const rw = straightStrength(cord({ plies: 2, build: 'reverse-wrap' }))
    expect(rw).toBeGreaterThan(straightStrength(cord({ plies: 1 })))
    expect(rw).toBeGreaterThan(straightStrength(cord({ plies: 2, build: 'single-twist' })))
  })
  it('capstan: half a wrap at μ = 0.3 multiplies tension by ≈ 2.57; two full turns by ≈ 43', () => {
    expect(capstan(0.3, Math.PI)).toBeCloseTo(2.566, 2)
    expect(capstan(0.3, 4 * Math.PI)).toBeCloseTo(43.4, 0)
  })
  it('bend efficiency: 50 % over a pin of its own diameter, 75 % at D/d = 4', () => {
    expect(bendEfficiency(3, 3)).toBeCloseTo(0.5, 5)
    expect(bendEfficiency(12, 3)).toBeCloseTo(0.75, 5)
  })
  it('brittle bark cord loses more at the knot when dry than when soaked', () => {
    expect(knotEfficiency(cord({ fiber: 'basswood', wet: true }))).toBeGreaterThan(knotEfficiency(cord({ fiber: 'basswood', wet: false })))
  })
  it('bast fiber is a little stronger wet', () => {
    expect(straightStrength(cord({ wet: true }))).toBeGreaterThan(straightStrength(cord({ wet: false })))
  })
  it('ridgeline: a 20 cm sag turns ~100 N of wind into several hundred newtons of tension', () => {
    const r = ridgeTension()
    expect(r.F).toBeLessThan(150)
    expect(r.peak).toBeGreaterThan(300)
  })
  it('food bag: with a good knot, the branch while hauling governs, not the knot', () => {
    const r = evaluate(cord({ knot: 'figure8' }), 'foodbag')
    expect(r.governing.label).toMatch(/branch/)
  })
})

describe('cordage model: scoring', () => {
  it('scores stay in 0–100 and are finite for every combination', () => {
    for (const load of Object.keys(LOADS) as LoadId[])
      for (const c of grid()) {
        const r = evaluate(c, load)
        expect(r.score).toBeGreaterThanOrEqual(0)
        expect(r.score).toBeLessThanOrEqual(100)
        expect(Number.isFinite(r.margin)).toBe(true)
      }
  })
  it('every job has a configuration scoring 80+', () => {
    for (const load of Object.keys(LOADS) as LoadId[]) {
      let best = 0
      for (const c of grid()) best = Math.max(best, evaluate(c, load).score)
      expect(best, load).toBeGreaterThanOrEqual(80)
    }
  })
  it('the default 3 mm nettle cord with a bowline does not pass the windy ridgeline', () => {
    expect(evaluate(defaultInput, 'ridgeline').outcome).not.toBe('holds')
  })
  it('an insecure knot on a cyclic load is flagged and capped', () => {
    const r = evaluate(cord({ fiber: 'yucca', diameter: 6, knot: 'square' }), 'ridgeline')
    expect(r.slips).toBe(true)
    expect(r.score).toBeLessThan(50)
  })
  it('thin grass cord wears through on a pack frame', () => {
    expect(evaluate(cord({ fiber: 'cattail', diameter: 3 }), 'packframe').wornThrough).toBe(true)
  })
})

describe('stage 7 content', () => {
  it('has six lessons matching the outline ids and 8–12 review questions', () => {
    expect(stage7.lessons.map((l) => l.id)).toEqual(['s7-l1', 's7-l2', 's7-l3', 's7-l4', 's7-l5', 's7-l6'])
    expect(stage7.review.length).toBeGreaterThanOrEqual(8)
    expect(stage7.review.length).toBeLessThanOrEqual(12)
  })
  it('every exercise is safety-classified and every lesson has a law callout or none is needed', () => {
    for (const l of stage7.lessons) {
      for (const e of l.exercises) expect(e.safety).toBeTruthy()
      expect(l.explanation.some((b) => b.type === 'callout' && b.tone === 'law'), l.id).toBe(true)
    }
  })
})
