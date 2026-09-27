import { describe, expect, it } from 'vitest'
import {
  DEFAULT_PLAN, SCENARIOS, boilKJPerL, boilingPointC, chemicalLogs, dailyInfectionP, evaluate, gasGrams, shieldCap, sodisLogs, tempFactor, uvLogs,
} from '../sims/stage4/waterAdvancedModel'
import type { Plan } from '../sims/stage4/waterAdvancedModel'
import { CHALLENGES, bestStill, openingArea, scoreDecision, simulateStill } from '../sims/stage4/solarStillModel'
import type { StillInput } from '../sims/stage4/solarStillModel'
import { stage4 } from '../content/stages/stage4'

const sc = (id: string) => SCENARIOS.find((s) => s.id === id)!
const plan = (p: Partial<Plan>): Plan => ({ ...DEFAULT_PLAN, ...p })

describe('water-advanced: physics and chemistry helpers', () => {
  it('boiling point falls with altitude (~83 °C at 4,900 m)', () => {
    expect(boilingPointC(0)).toBe(100)
    expect(boilingPointC(4900)).toBeGreaterThan(82)
    expect(boilingPointC(4900)).toBeLessThan(85)
  })
  it('CT needed doubles for every 10 °C colder', () => {
    expect(tempFactor(20)).toBe(1)
    expect(tempFactor(10)).toBeCloseTo(2)
    expect(tempFactor(0)).toBeCloseTo(4)
  })
  it('chlorine: viruses and bacteria easy, Giardia slower in cold water, Crypto essentially untouched', () => {
    const warm = chemicalLogs('chlorine', 4, 30, 20, 0.5)
    const cold = chemicalLogs('chlorine', 4, 30, 5, 0.5)
    expect(warm.viruses).toBeGreaterThanOrEqual(4)
    expect(warm.giardia).toBeGreaterThan(cold.giardia)
    expect(cold.giardia).toBeLessThan(3)
    expect(warm.crypto).toBeLessThan(0.1)
  })
  it('chlorine dioxide with 4 h contact reaches meaningful Crypto reduction in warm water', () => {
    expect(chemicalLogs('clo2', 4, 240, 20, 0.5).crypto).toBeGreaterThan(2)
    expect(chemicalLogs('clo2', 4, 30, 20, 0.5).crypto).toBeLessThan(1)
  })
  it('turbidity weakens chemical and UV treatment', () => {
    expect(chemicalLogs('chlorine', 2, 30, 20, 30).viruses).toBeLessThan(chemicalLogs('chlorine', 2, 30, 20, 1).viruses)
    expect(uvLogs(1, 20).viruses).toBeLessThan(uvLogs(1, 0.5).viruses)
    expect(shieldCap(100)).toBeLessThan(shieldCap(1))
  })
  it('SODIS needs sun and clear water', () => {
    expect(sodisLogs(true, 1, 5).bacteria).toBeGreaterThan(sodisLogs(false, 1, 5).bacteria)
    expect(sodisLogs(false, 2, 5).bacteria).toBeCloseTo(sodisLogs(true, 1, 5).bacteria)
    expect(sodisLogs(true, 1, 50).bacteria).toBeLessThan(sodisLogs(true, 1, 5).bacteria)
  })
  it('melting snow roughly doubles the heat needed per litre of boiled water', () => {
    const liquid = boilKJPerL(5, 300, 1)
    const snow = boilKJPerL(-15, 300, 1, true)
    expect(snow / liquid).toBeGreaterThan(1.6)
    expect(gasGrams(liquid)).toBeGreaterThan(10)
    expect(gasGrams(liquid)).toBeLessThan(30)
  })
  it('daily infection probability rises steeply with residual log load', () => {
    expect(dailyInfectionP(0)).toBeCloseTo(0.00995, 4)
    expect(dailyInfectionP(2)).toBeGreaterThan(0.6)
    expect(dailyInfectionP(-2)).toBeLessThan(0.001)
  })
})

describe('water-advanced: plans', () => {
  it('filter alone below a village leaves viral risk; filter + chlorine removes it', () => {
    const s = sc('tropical')
    const f = evaluate(s, plan({ source: 'river', clarify: 'alum', filter: 'ceramic' }))
    const fc = evaluate(s, plan({ source: 'river', clarify: 'alum', filter: 'ceramic', disinfect: 'chlorine', dose: 2, contactMin: 30 }))
    expect(f.residual.viruses).toBeGreaterThan(1)
    expect(fc.residual.viruses).toBeLessThan(0)
    expect(fc.pTrip).toBeLessThan(f.pTrip)
  })
  it('a muddy source clogs a hollow-fibre filter unless clarified', () => {
    const s = sc('canyon')
    expect(evaluate(s, plan({ source: 'tinaja', collect: 'scoop', filter: 'micro' })).clogged).toBe(true)
    expect(evaluate(s, plan({ source: 'tinaja', collect: 'careful', clarify: 'settle-cloth', filter: 'micro' })).clogged).toBe(false)
  })
  it('no treatment removes floodwater chemicals: score stays low even when boiled', () => {
    const r = evaluate(sc('flood'), plan({ source: 'floodwater', clarify: 'settle-cloth', disinfect: 'boil', carbon: true, targetLpp: 3 }))
    expect(r.chem).toBeGreaterThanOrEqual(1)
    expect(r.score).toBeLessThan(50)
  })
  it('boiling tap water under a boil-water notice is safe, but a family runs short of stove fuel', () => {
    const r = evaluate(sc('flood'), plan({ source: 'tap', disinfect: 'boil', boilMin: 1, schedule: 'cool', targetLpp: 3.5 }))
    expect(r.pTrip).toBeLessThan(0.05)
    expect(r.limitedBy).toBe('treatment supplies')
  })
  it('limited fuel caps how much snow you can melt and boil', () => {
    const r = evaluate(sc('subarctic'), plan({ source: 'snow', collect: 'melt', disinfect: 'boil', targetLpp: 5, schedule: 'cool' }))
    expect(r.limitedBy).toBe('treatment supplies')
    expect(r.maxDehydPct).toBeGreaterThan(0)
  })
  it('working through the desert heat raises the water need', () => {
    const s = sc('canyon')
    const cool = evaluate(s, plan({ source: 'seep', filter: 'micro', schedule: 'cool' }))
    const heat = evaluate(s, plan({ source: 'seep', filter: 'micro', schedule: 'heat' }))
    expect(heat.needPP).toBeGreaterThan(cool.needPP + 1)
  })
  it('dipping a cup into an open bucket re-contaminates treated water', () => {
    const s = sc('flood')
    const clean = evaluate(s, plan({ source: 'tap', disinfect: 'boil', storage: 'narrow' }))
    const dip = evaluate(s, plan({ source: 'tap', disinfect: 'boil', storage: 'bucket' }))
    expect(dip.pTrip).toBeGreaterThan(clean.pTrip)
  })
  it('processing less than you need accumulates dehydration day by day', () => {
    const r = evaluate(sc('canyon'), plan({ source: 'seep', filter: 'micro', targetLpp: 2, schedule: 'heat' }))
    expect(r.days).toHaveLength(3)
    expect(r.days[2].deficitPct).toBeGreaterThan(r.days[0].deficitPct)
  })
  it('every scenario has a plan scoring ≥ 80', () => {
    const good: Record<string, Partial<Plan>> = {
      canyon: { source: 'tinaja', collect: 'careful', clarify: 'settle-cloth', filter: 'micro', disinfect: 'chlorine', dose: 2, contactMin: 30, schedule: 'cool', targetLpp: 5.5 },
      flood: { source: 'heater', collect: 'tap', disinfect: 'chlorine', dose: 2, contactMin: 30, schedule: 'cool', targetLpp: 3.5 },
      subarctic: { source: 'icehole', filter: 'micro', disinfect: 'clo2', dose: 4, contactMin: 30, schedule: 'cool', targetLpp: 4.5 },
      tropical: { source: 'river', collect: 'careful', clarify: 'alum', filter: 'ceramic', disinfect: 'chlorine', dose: 2, contactMin: 30, schedule: 'cool', targetLpp: 5 },
    }
    for (const s of SCENARIOS) expect(evaluate(s, plan(good[s.id])).score, s.id).toBeGreaterThanOrEqual(80)
  })
})

describe('solar-still model', () => {
  const base: StillInput = { climate: 'desert-summer', ground: 'damp-sand', tool: 'stick', diameterM: 0.9, start: 'dawn', days: 3, plants: false, liquidLpd: 0 }
  it('best case is about 1–1.5 L/day from a ~1 m pit in desert summer sun', () => {
    const r = simulateStill({ ...base, liquidLpd: 5 })
    expect(r.energyPerDay).toBeGreaterThan(0.9)
    expect(r.energyPerDay).toBeLessThan(1.6)
    expect(openingArea(1)).toBeCloseTo(0.785, 2)
  })
  it('dry sand yields a trickle that costs more sweat to dig than it returns', () => {
    const r = simulateStill({ ...base, ground: 'dry-sand', tool: 'hands', start: 'noon', days: 1 })
    expect(r.totalYield).toBeLessThan(0.15)
    expect(r.net).toBeLessThan(0)
  })
  it('soil moisture dries out day by day', () => {
    const r = simulateStill({ ...base, climate: 'desert-winter', ground: 'dry-sand' })
    expect(r.perDay[2].supply).toBeLessThan(r.perDay[0].supply)
  })
  it('digging at dawn costs less sweat than at noon', () => {
    expect(simulateStill({ ...base, start: 'dawn' }).sweatCost).toBeLessThan(simulateStill({ ...base, start: 'noon' }).sweatCost)
  })
  it('pouring seawater in makes the still energy-limited (a desalinator)', () => {
    const r = simulateStill({ ...base, liquidLpd: 3 })
    expect(r.limitedBy).toBe('sunlight')
    expect(r.net).toBeGreaterThan(2)
  })
  it('challenge verdicts: skip on the noon plain and in the forest, build on the wash and the beach', () => {
    const verdict = Object.fromEntries(CHALLENGES.map((c) => [c.id, scoreDecision(c, 'build', bestStill(c).choice).shouldBuild]))
    expect(verdict).toEqual({ 'noon-plain': false, 'wash-bend': true, beach: true, forest: false })
  })
  it('scores reward the right decision', () => {
    const plain = CHALLENGES.find((c) => c.id === 'noon-plain')!
    const choice = { diameterM: 0.9, start: 'noon' as const, days: 1, plants: false, pourLiquid: false }
    expect(scoreDecision(plain, 'skip', choice).score).toBe(100)
    expect(scoreDecision(plain, 'build', choice).score).toBeLessThan(50)
    const beach = CHALLENGES.find((c) => c.id === 'beach')!
    expect(scoreDecision(beach, 'build', bestStill(beach).choice).score).toBe(100)
    expect(scoreDecision(beach, 'skip', choice).score).toBe(0)
  })
})

describe('stage 4 content', () => {
  it('has the six outline lessons in order', () => {
    expect(stage4.lessons.map((l) => l.id)).toEqual(['s4-l1', 's4-l2', 's4-l3', 's4-l4', 's4-l5', 's4-l6'])
  })
  it('review has 8–12 questions', () => {
    expect(stage4.review.length).toBeGreaterThanOrEqual(8)
    expect(stage4.review.length).toBeLessThanOrEqual(12)
  })
  it('lessons meet the authoring contract', () => {
    for (const l of stage4.lessons) {
      expect(l.objectives.length, l.id).toBeGreaterThanOrEqual(3)
      expect(l.objectives.length, l.id).toBeLessThanOrEqual(5)
      expect(l.quiz.length, l.id).toBeGreaterThanOrEqual(4)
      expect(l.quiz.length, l.id).toBeLessThanOrEqual(7)
      expect(l.exercises.length, l.id).toBeGreaterThanOrEqual(1)
      expect(l.exercises.length, l.id).toBeLessThanOrEqual(3)
      expect(l.scenario.choices.length, l.id).toBeGreaterThanOrEqual(3)
      for (const q of l.quiz) if (q.kind === 'single' || q.kind === 'multi') for (const c of q.choices) expect(c.why.length, q.id).toBeGreaterThan(0)
    }
  })
})
