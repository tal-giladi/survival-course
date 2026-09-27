import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage16'
import { sims } from '../sims/stage16'
import {
  runPolicy, scoreOutage, initialState, runBlock, availableActions, climateOptions, foodOptions, outdoorTemp,
  type Action, type Decisions, type Kit, type OutageState, type Season,
} from '../sims/stage16/outageModel'
import { evaluateKit, needs, countFor, ITEMS, PRESETS, type Counts, type Household, type Constraints } from '../sims/stage16/homeKitModel'

const fullKit: Kit = { coAlarm: true, generator: false, stove: true, radio: true }

function best(season: Season) {
  return (s: OutageState): { d: Decisions; actions: Action[] } => {
    const fridgeLeft = s.fridgeKcal > 0 && (s.coolbox || s.fridgeAbove4 <= 2)
    const food = fridgeLeft ? 'fridge' : s.freezerKcal > 0 && s.hour < 42 ? 'freezer-out' : 'pantry'
    const actions: Action[] = ['fill', 'neighbour', 'radio', 'text', 'unplug', 'coolbox']
    if (s.hour >= 24) actions.push('collect')
    if (season === 'winter' && s.felt < 13 && s.informed) actions.push('shelter')
    return { d: { climate: season === 'winter' ? 'one-room' : 'passive', food, water: 'plan', power: 'conserve' }, actions }
  }
}

const careless = (climate: Decisions['climate']) => (): { d: Decisions; actions: Action[] } => ({
  d: { climate, food: 'pantry', water: 'careless', power: 'normal' }, actions: [],
})

describe('outage model', () => {
  it('outdoor temperatures follow a daily cycle', () => {
    expect(outdoorTemp('winter', 21)).toBeCloseTo(0, 1) // 15:00
    expect(outdoorTemp('summer', 21)).toBeCloseTo(37, 1)
    expect(outdoorTemp('winter', 9)).toBeCloseTo(-8, 1) // 03:00
  })
  it('offers season- and kit-appropriate options', () => {
    expect(climateOptions('summer', fullKit)).not.toContain('gas-oven')
    expect(climateOptions('winter', { ...fullKit, generator: true })).toContain('gen-outside')
    expect(foodOptions({ ...fullKit, stove: false })).toEqual(['fridge', 'pantry'])
  })
  it('filling containers is only possible before the water fails', () => {
    const s0 = initialState('winter', fullKit)
    expect(availableActions(s0)).toContain('fill')
    const s1 = runBlock(s0, { climate: 'one-room', food: 'fridge', water: 'plan', power: 'conserve' }, [])
    expect(availableActions(s1)).not.toContain('fill')
    const s2 = runBlock(s0, { climate: 'one-room', food: 'fridge', water: 'plan', power: 'conserve' }, ['fill'])
    expect(s2.bath).toBeGreaterThan(100)
  })
  it('a good winter plan scores well; doing nothing scores badly', () => {
    const good = runPolicy('winter', fullKit, best('winter'))
    const bad = runPolicy('winter', fullKit, careless('none'))
    expect(good.outcome).toBe('sheltered')
    expect(scoreOutage(good).score).toBeGreaterThanOrEqual(80)
    expect(scoreOutage(bad).score).toBeLessThan(45)
    // Staying home in one warm room without ever going to the warming centre is acceptable, not ideal.
    const stay = runPolicy('winter', fullKit, (s) => ({ ...best('winter')(s), actions: best('winter')(s).actions.filter((a) => a !== 'shelter') }))
    expect(scoreOutage(stay).score).toBeGreaterThan(scoreOutage(bad).score)
    expect(bad.maxStrain).toBeGreaterThan(good.maxStrain + 30)
  })
  it('a good summer plan scores well', () => {
    const good = runPolicy('summer', fullKit, best('summer'))
    expect(scoreOutage(good).score).toBeGreaterThanOrEqual(80)
    const bad = runPolicy('summer', fullKit, careless('none'))
    expect(bad.potable).toBe(0)
    expect(scoreOutage(bad).score).toBeLessThan(45)
  })
  it('a generator in the garage without a CO alarm is critical', () => {
    const kit = { ...fullKit, generator: true, coAlarm: false }
    const s = runPolicy('winter', kit, () => ({ d: { climate: 'gen-garage', food: 'pantry', water: 'plan', power: 'conserve' }, actions: [] }))
    expect(s.outcome).toBe('co-critical')
    expect(scoreOutage(s).score).toBeLessThanOrEqual(5)
  })
  it('a CO alarm interrupts an indoor charcoal fire', () => {
    const s = runPolicy('winter', fullKit, () => ({ d: { climate: 'charcoal-indoors', food: 'pantry', water: 'plan', power: 'conserve' }, actions: [] }))
    expect(s.outcome).not.toBe('co-critical')
    expect(s.alarmEvents).toBeGreaterThan(0)
  })
  it('a generator outdoors is safe and keeps the lights on', () => {
    const kit = { ...fullKit, generator: true }
    const s = runPolicy('winter', kit, () => ({ d: { climate: 'gen-outside', food: 'fridge', water: 'plan', power: 'normal' }, actions: ['fill', 'radio', 'text', 'unplug', 'neighbour'] }))
    expect(s.outcome).toBe('endured')
    expect(s.coDose).toBe(0)
    expect(s.darkHours).toBe(0)
  })
  it('eating the pantry first wastes the perishables', () => {
    const pantryFirst = runPolicy('summer', fullKit, (s) => ({ ...best('summer')(s), d: { ...best('summer')(s).d, food: 'pantry' } }))
    const fridgeFirst = runPolicy('summer', fullKit, best('summer'))
    expect(pantryFirst.wasted).toBeGreaterThan(fridgeFirst.wasted)
  })
  it('eating warm fridge food causes illness', () => {
    const s = runPolicy('summer', fullKit, (st) => ({ d: { climate: 'passive', food: st.hour >= 12 ? 'fridge' : 'pantry', water: 'plan', power: 'conserve' }, actions: ['fill'] }))
    expect(s.ill).toBe(true)
  })
  it('going to the shelter ends the household exposure but the neighbour left alone still suffers', () => {
    const s = runPolicy('winter', fullKit, (st) => ({ d: { climate: 'none', food: 'pantry', water: 'plan', power: 'conserve' }, actions: st.hour >= 12 ? ['shelter'] : ['radio'] }))
    expect(s.outcome).toBe('sheltered')
    expect(s.maxNeighbour).toBeGreaterThan(50)
  })
})

describe('home kit model', () => {
  const fam = PRESETS.find((p) => p.id === 'family')!
  it('water need follows ~4 L per person per day, more in heat', () => {
    const h: Household = { adults: 2, children: 2, infants: 0, elderly: 0, pets: 0, medications: false, climate: 'temperate', days: 3 }
    expect(needs(h).find((r) => r.need === 'water')!.amount).toBe(48)
    expect(needs({ ...h, climate: 'hot' }).find((r) => r.need === 'water')!.amount).toBe(72)
  })
  it('special needs appear only when relevant', () => {
    const ids = needs(fam.h).map((r) => r.need)
    expect(ids).toContain('pet')
    expect(ids).not.toContain('infant')
    expect(ids).not.toContain('meds')
    expect(ids).toContain('warmth')
    expect(ids).not.toContain('cooling')
  })
  it('an empty kit scores 0; a complete kit scores highly within constraints', () => {
    expect(evaluateKit(fam.h, {}, fam.c).score).toBe(0)
    const counts: Counts = {}
    for (const r of needs(fam.h)) {
      const it = ITEMS.find((i) => (i.provides[r.need] ?? 0) > 0 && !i.flag && i.id !== 'filter' && i.id !== 'stove')!
      counts[it.id] = Math.max(counts[it.id] ?? 0, countFor(fam.h, it.id, r.need))
    }
    const r = evaluateKit(fam.h, counts, { ...fam.c, budget: 2000 })
    expect(r.coverage).toBeCloseTo(1, 5)
    expect(r.score).toBe(100)
    expect(r.gaps).toEqual([])
  })
  it('penalises candles and a generator without a CO alarm, and overspending', () => {
    const c: Constraints = { budget: 500, space: 500, dwelling: 'house' }
    const base = evaluateKit(fam.h, { water20: 3 }, c).score
    expect(evaluateKit(fam.h, { water20: 3, candles: 1 }, c).safetyPenalty).toBe(8)
    expect(evaluateKit(fam.h, { water20: 3, generator: 1 }, c).tips.join(' ')).toMatch(/CO alarm/)
    expect(evaluateKit(fam.h, { water20: 3, generator: 1, coalarm: 1 }, { ...c, dwelling: 'flat' }).safetyPenalty).toBe(10)
    expect(evaluateKit(fam.h, { water20: 60 }, c).overFactor).toBeLessThan(1)
    expect(base).toBeGreaterThan(0)
  })
})

describe('stage 16 components render', () => {
  for (const [id, C] of Object.entries(diagrams)) {
    it(`diagram ${id} renders an accessible SVG`, () => {
      const html = renderToString(createElement(C))
      expect(html).toMatch(/^<svg[^>]*role="img"/)
      expect(html).toMatch(/aria-label="[^"]+"/)
    })
  }
  for (const s of sims) {
    it(`sim ${s.id} renders`, () => {
      expect(renderToString(createElement(s.component, { onScore: () => {} })).length).toBeGreaterThan(100)
    })
  }
})
