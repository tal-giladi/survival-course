import { describe, expect, it } from 'vitest'
import { PHYSIO_CHALLENGES, simulate } from '../sims/stage8/physioModel'
import type { PhysioInput } from '../sims/stage8/physioModel'
import { COLD_WATER_SCENARIOS, coldWater, outcome, scoreChoice } from '../sims/stage8/coldWaterModel'
import type { ColdWaterInput } from '../sims/stage8/coldWaterModel'
import { altitudePressure, inspiredPO2, radiativeFlux, wbgt, windChill } from '../sims/stage8/physioMath'

const [moor, desert, climb, night] = PHYSIO_CHALLENGES.map((c) => c.start)

describe('physiology time-course model', () => {
  it('soaked cotton at 5 °C in wind reaches mild hypothermia within 3 h', () => {
    const r = simulate(moor)
    const t35 = r.steps.find((s) => s.core < 35)?.t
    expect(t35).toBeDefined()
    expect(t35!).toBeLessThan(3)
    expect(t35!).toBeGreaterThan(0.25)
  })
  it('dry synthetic layers + shell keep the core above 36 °C over 6 h', () => {
    expect(simulate({ ...moor, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: true }).minCore).toBeGreaterThan(36)
  })
  it('shivering draws down glycogen faster than a warm, sheltered rest', () => {
    const cold = simulate({ ...moor, wet: 'dry', fibre: 'synthetic', clo: 1.0 })
    const warm = simulate({ ...moor, wet: 'dry', fibre: 'synthetic', clo: 2.8, shell: true, shelter: 'tarp-bed' })
    expect(cold.final.glycogen).toBeLessThan(warm.final.glycogen - 5)
    expect(cold.steps.some((s) => s.shiver > 50)).toBe(true)
  })
  it('walking in desert sun dehydrates far more than resting in shade', () => {
    const walk = simulate({ ...desert, drinkLph: 0.5 })
    const rest = simulate({ ...desert, phases: [{ act: 'rest', hours: 10 }], shelter: 'tarp', clo: 1.0, drinkLph: 0.5 })
    expect(walk.final.dehydration).toBeGreaterThan(rest.final.dehydration + 3)
    expect(walk.maxCore).toBeGreaterThan(rest.maxCore + 1)
  })
  it('the heat-defence feedback keeps a well-watered person in shade near 37 °C', () => {
    const r = simulate({ ...desert, phases: [{ act: 'rest', hours: 10 }], shelter: 'tarp', clo: 1.0, drinkLph: 0.5 })
    expect(r.maxCore).toBeLessThan(37.6)
  })
  it('hard work in cold soaks layers with sweat', () => {
    const r = simulate(climb)
    expect(r.final.wet).not.toBe('dry')
  })
  it('food keeps glycogen higher', () => {
    expect(simulate({ ...night, clo: 4, shelter: 'tarp-bed', food: 'snacks' }).final.glycogen).toBeGreaterThan(simulate({ ...night, clo: 4, shelter: 'tarp-bed' }).final.glycogen + 20)
  })
  it('altitude increases water loss', () => {
    const base: PhysioInput = { ...moor, ta: 0, wind: 10, rh: 40, wet: 'dry', fibre: 'synthetic', clo: 2.8, shell: true, phases: [{ act: 'walk', hours: 6 }], food: 'snacks', drinkLph: 0, waterL: 0, altitude: 0 }
    expect(simulate({ ...base, altitude: 4500 }).final.dehydration).toBeGreaterThan(simulate(base).final.dehydration)
  })
  it('warns about overdrinking without food or salt', () => {
    const r = simulate({ ...moor, ta: 20, wind: 5, rh: 50, wet: 'dry', fibre: 'synthetic', clo: 0.4, shell: false, phases: [{ act: 'walk', hours: 6 }], drinkLph: 1.5, waterL: 99, food: 'none' })
    expect(r.warnings.some((w) => w.text.includes('hyponatremia'))).toBe(true)
  })
  it('every challenge starts unsolved and has a known solution', () => {
    const solutions: PhysioInput[] = [
      { ...moor, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: true, shelter: 'tarp-bed', food: 'snacks' },
      { ...desert, phases: [{ act: 'rest', hours: 10 }], shelter: 'tarp', clo: 1.0, drinkLph: 0.5 },
      { ...climb, phases: [{ act: 'walk', hours: 2, clo: 1.8 }, { act: 'rest', hours: 4, clo: 4 }], food: 'snacks', shelter: 'tarp-bed' },
      { ...night, clo: 4, shelter: 'tarp-bed', food: 'snacks' },
    ]
    PHYSIO_CHALLENGES.forEach((c, k) => {
      expect(c.check(simulate(c.start), c.start), `${c.id} start`).toBe(false)
      expect(c.check(simulate(solutions[k]), solutions[k]), `${c.id} solution`).toBe(true)
    })
  })
})

describe('cold-water model', () => {
  const base: ColdWaterInput = { waterC: 10, airC: 8, wind: 10, clothing: 'light', pfd: true, build: 'average', behavior: 'help', shoreM: 200 }
  it('colder water shortens swim failure and time to unconsciousness', () => {
    const cold = coldWater({ ...base, waterC: 2 })
    const mild = coldWater({ ...base, waterC: 15 })
    expect(cold.swimFailure.mid).toBeLessThan(mild.swimFailure.mid)
    expect(cold.t30.mid).toBeLessThan(mild.t30.mid)
    expect(cold.shockSeverity).toBeGreaterThan(mild.shockSeverity)
  })
  it('HELP cools more slowly than swimming; climbing out slower still', () => {
    const help = coldWater(base).coolRate.mid
    expect(help).toBeLessThan(coldWater({ ...base, behavior: 'swim' }).coolRate.mid)
    expect(coldWater({ ...base, behavior: 'climb' }).coolRate.mid).toBeLessThan(help)
  })
  it('protective suits extend every window', () => {
    const light = coldWater(base)
    const dry = coldWater({ ...base, clothing: 'drysuit' })
    expect(dry.t30.mid).toBeGreaterThan(light.t30.mid * 2)
    expect(dry.swimFailure.mid).toBeGreaterThan(light.swimFailure.mid)
  })
  it('HELP without a PFD falls back to treading water', () => {
    const r = coldWater({ ...base, pfd: false })
    expect(r.incapacitation.mid).toBeCloseTo(r.swimFailure.mid)
  })
  it('uncertainty bands are ordered', () => {
    const r = coldWater(base)
    for (const b of [r.swimFailure, r.coolRate, r.t35, r.t30]) {
      expect(b.lo).toBeLessThanOrEqual(b.mid)
      expect(b.mid).toBeLessThanOrEqual(b.hi)
    }
  })
  it('in every scenario the best behaviour has the best outcome and full score', () => {
    for (const s of COLD_WATER_SCENARIOS) {
      const best = outcome(coldWater({ ...s.base, behavior: s.best }), s.rescueMin)
      expect(scoreChoice(s, s.best)).toBe(1)
      for (const b of s.options) {
        expect(outcome(coldWater({ ...s.base, behavior: b }), s.rescueMin), `${s.id} ${b}`).toBeLessThanOrEqual(best)
        if (b !== s.best) expect(scoreChoice(s, b)).toBeLessThan(1)
      }
      expect(best).toBeGreaterThan(0)
    }
  })
})

describe('stage 8 diagram maths', () => {
  it('NWS wind chill matches the published chart', () => {
    // NWS chart: 0 °F air, 15 mph wind → −19 °F.
    const f = (c: number) => (c * 9) / 5 + 32
    const c = (fv: number) => ((fv - 32) * 5) / 9
    expect(f(windChill(c(0), 15 * 1.609344))).toBeCloseTo(-19, 0)
  })
  it('pressure and inspired oxygen fall with altitude', () => {
    expect(altitudePressure(0)).toBeCloseTo(101.3, 0)
    expect(altitudePressure(5500) / altitudePressure(0)).toBeCloseTo(0.5, 1)
    expect(inspiredPO2(0)).toBeCloseTo(19.9, 0)
  })
  it('radiation from 33 °C skin to a −20 °C clear sky is roughly 300 W/m²', () => {
    expect(radiativeFlux(33, -20)).toBeGreaterThan(250)
    expect(radiativeFlux(33, -20)).toBeLessThan(330)
  })
  it('outdoor WBGT weights the wet bulb most', () => {
    expect(wbgt(25, 45, 35)).toBeCloseTo(0.7 * 25 + 0.2 * 45 + 0.1 * 35)
  })
})
