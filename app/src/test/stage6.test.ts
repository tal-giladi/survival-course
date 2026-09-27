import { describe, expect, it } from 'vitest'
import { ACQUISITIONS, SCENARIOS, acquisitionDay, defaultPlan, mifflinStJeor, simulate } from '../sims/stage6/energyModel'
import type { Plan, Profile } from '../sims/stage6/energyModel'
import { FEATURES, SPECIMENS, candidates, evaluateRound, sessionScore } from '../sims/stage6/plantModel'
import type { FeatureId } from '../sims/stage6/plantModel'

const P: Profile = { sex: 'male', massKg: 70, heightCm: 175, age: 30, bodyFatPct: 20 }
const sc = (id: string) => SCENARIOS.find((s) => s.id === id)!

describe('energy model', () => {
  it('Mifflin–St Jeor matches the published worked values', () => {
    expect(mifflinStJeor(P)).toBeCloseTo(1648.75, 2)
    expect(mifflinStJeor({ ...P, sex: 'female' })).toBeCloseTo(1482.75, 2)
  })
  it('eating nothing drains glycogen, then body mass, and performance falls', () => {
    const s = sc('boreal')
    const fast: Plan = { ...defaultPlan(s, P), days: s.defaultActivities.map((a) => ({ activity: a, ration: 0 })) }
    const r = simulate(s, fast)
    expect(r.days[0].glycogenPct).toBeGreaterThan(r.days[2].glycogenPct)
    expect(r.days[3].massLossPct).toBeGreaterThan(r.days[0].massLossPct)
    expect(r.days[3].performance).toBeLessThan(r.days[0].performance)
    expect(r.foodLeft).toBe(s.carriedKcal)
  })
  it('cold raises daily expenditure for the same activity', () => {
    const cold = simulate(sc('subarctic'), defaultPlan(sc('subarctic'), P))
    const warm = simulate({ ...sc('subarctic'), env: 'temperate' }, defaultPlan(sc('subarctic'), P))
    expect(cold.days[0].tdee).toBeGreaterThan(warm.days[0].tdee)
  })
  it('passive set-lines return more per unit effort than stalking, and yield nothing on day 1', () => {
    const lines = ACQUISITIONS.find((a) => a.id === 'setLines')!
    const stalk = ACQUISITIONS.find((a) => a.id === 'stalking')!
    const l2 = acquisitionDay(lines, 2, 1, 2)
    const s2 = acquisitionDay(stalk, 2, 1, 2)
    expect(l2.yield / l2.cost).toBeGreaterThan(1)
    expect(s2.yield / s2.cost).toBeLessThan(0.5)
    expect(acquisitionDay(lines, 2, 1, 1).yield).toBe(0)
  })
  it('stalking in the desert with limited water scores worse than resting', () => {
    const s = sc('desert')
    const rest = simulate(s, defaultPlan(s, P))
    const hunt = simulate(s, { ...defaultPlan(s, P), acqHours: { stalking: 4 } })
    expect(hunt.score).toBeLessThan(rest.score)
  })
  it('saving food for the hard day beats eating it all on day 1', () => {
    const s = sc('boreal')
    const acts = s.defaultActivities
    const early = simulate(s, { ...defaultPlan(s, P), days: acts.map((a, i) => ({ activity: a, ration: i === 0 ? 3000 : 0 })) })
    const saved = simulate(s, { ...defaultPlan(s, P), days: acts.map((a, i) => ({ activity: a, ration: i === 3 ? 1500 : 450 })) })
    expect(saved.days[3].performance).toBeGreaterThan(early.days[3].performance)
    expect(saved.score).toBeGreaterThan(early.score)
  })
  it('scores stay within 0–100 for every scenario', () => {
    for (const s of SCENARIOS) {
      const r = simulate(s, { ...defaultPlan(s, P), acqHours: { stalking: 6, fishActive: 6 } })
      expect(r.score).toBeGreaterThanOrEqual(0)
      expect(r.score).toBeLessThanOrEqual(100)
    }
  })
})

describe('plant-id model', () => {
  const all = FEATURES.map((f) => f.id)
  const byId = (id: string) => SPECIMENS.find((s) => s.id === id)!
  it('with all features checked, only specimens with a unique edible match are safe', () => {
    const safe = SPECIMENS.filter((s) => evaluateRound(s, all, 'refuse').safe).map((s) => s.id)
    expect(safe.sort()).toEqual(['r1', 'r3', 'r7'])
  })
  it('refusing is always rewarded when identification is not safe', () => {
    for (const s of SPECIMENS) {
      const r = evaluateRound(s, ['leafShape'], 'refuse')
      if (!r.safe) expect(r.score).toBe(100)
    }
  })
  it('eating an unsafe specimen poisons and caps the session', () => {
    const bad = evaluateRound(byId('r2'), all, 'eat')
    expect(bad.poisoned).toBe(true)
    expect(bad.score).toBe(0)
    const good = SPECIMENS.map((s) => evaluateRound(s, all, 'refuse'))
    expect(sessionScore([...good.slice(1), bad])).toBeLessThanOrEqual(40)
  })
  it('a look-alike differing only in smell is not excluded without checking smell', () => {
    const seen: FeatureId[] = ['leafShape', 'arrangement', 'stem', 'flowers', 'sap', 'root']
    expect(candidates(byId('r1'), seen).map((k) => k.id).sort()).toEqual(['chivegrass', 'starlily'])
    expect(evaluateRound(byId('r1'), seen, 'expert').score).toBeLessThan(50)
    expect(evaluateRound(byId('r1'), [...seen, 'smell'], 'expert').score).toBe(100)
  })
  it('out-of-season specimen can never be confirmed', () => {
    const r = evaluateRound(byId('r5'), all, 'expert')
    expect(r.safe).toBe(false)
    expect(r.remaining.length).toBe(2)
  })
  it('stopping at a partial match on an unknown plant is punished', () => {
    const r = evaluateRound(byId('r6'), ['leafShape', 'stem', 'flowers', 'root'], 'expert')
    expect(r.justified).toBe(true)
    expect(r.safe).toBe(false)
    expect(r.score).toBeLessThan(20)
  })
  it('even a complete ID never makes eating the best choice', () => {
    const s = byId('r7')
    expect(evaluateRound(s, all, 'eat').score).toBeLessThan(evaluateRound(s, all, 'refuse').score)
    expect(evaluateRound(s, all, 'eat').score).toBeLessThan(evaluateRound(s, all, 'expert').score)
  })
})
