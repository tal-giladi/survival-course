import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage18'
import { sims } from '../sims/stage18'
import {
  ENVS, HEAVY, aircraftDay, energyIndex, forecast, initialState, performance, runDay, runPolicy, scoreMultiDay,
  treatmentOptions, waterNeed, type DayPlan, type EnvId, type MDState, type Task,
} from '../sims/stage18/multiDayModel'

const ENV_IDS = Object.keys(ENVS) as EnvId[]

/** A sensible adaptive policy: water to need, signals before the aircraft, fuel before storms, shelter, maintenance. */
function good(s: MDState): DayPlan {
  const e = ENVS[s.env]
  const hot = e.heat > 0
  const p = performance(s)
  const out: Task[] = []
  const stormTomorrow = e.stormDay === s.day + 1
  const night = s.env === 'arctic' && s.shelter < 70 ? 'watch' : 'banked'
  const needFuel = (night === 'watch' ? 10 : 5) + 4 * (e.boilFuel + e.meltFuel) + (stormTomorrow ? 6 : 0)
  const nw = Math.max(0, Math.min(3, Math.ceil((2.5 + e.heatWater + 2.2 - s.water) / (e.waterYield * p))))
  for (let i = 0; i < nw; i++) out.push('water')
  if (s.env === 'arctic' && s.shelter < 70) out.push('shelter')
  if (s.env === 'arctic') {
    let f = s.fuel - nw * e.waterYield * p * (e.meltFuel + e.boilFuel)
    while (f < needFuel && out.length < 3) { out.push('wood'); f += e.fuelYield * p }
    if (s.shelter < 80) out.push('shelter')
  }
  const sig = s.day < aircraftDay(s.env) && s.signal < 70 ? 2 : s.signal < 65 && s.day <= aircraftDay(s.env) ? 1 : 0
  for (let i = 0; i < sig; i++) out.push('signal')
  let fuel = s.fuel
  while (fuel < needFuel && out.length < 4) { out.push('wood'); fuel += e.fuelYield * p }
  if (s.shelter < 70) out.push('shelter')
  if (s.gear < 60 || (e.filterWorks && s.filter < 50)) out.push('repair')
  while (out.length < 4) out.push(hot ? 'rest' : s.shelter < 85 ? 'shelter' : 'rest')
  let blocks = out.slice(0, 4)
  if (hot) blocks = [...blocks.filter((b) => HEAVY.includes(b)), ...blocks.filter((b) => !HEAVY.includes(b))]
  return {
    blocks: blocks as DayPlan['blocks'],
    ration: s.day >= 5 && s.food >= 1000 ? 'half' : 'low',
    drinking: 'need',
    treatment: e.filterWorks && s.filter > 30 ? 'filter' : 'boil',
    night,
    routine: true,
  }
}
const careless = (): DayPlan => ({ blocks: ['food', 'food', 'wood', 'rest'], ration: 'full', drinking: 'need', treatment: 'none', night: 'none', routine: false })
const forager = (s: MDState): DayPlan => ({ ...good(s), blocks: ['food', 'food', 'food', good(s).blocks[0]] })
const noSignal = (s: MDState): DayPlan => { const g = good(s); return { ...g, blocks: g.blocks.map((b) => (b === 'signal' ? 'rest' : b)) as DayPlan['blocks'] } }
const plan = (over: Partial<DayPlan> = {}): DayPlan => ({ blocks: ['water', 'wood', 'shelter', 'signal'], ration: 'low', drinking: 'need', treatment: 'boil', night: 'banked', routine: true, ...over })

describe('multi-day model: building blocks', () => {
  it('energy index falls fast over the glycogen range, slowly after, and on no-food days', () => {
    expect(energyIndex(0, 500, false)).toBe(100)
    expect(energyIndex(2000, 500, false)).toBe(75)
    expect(energyIndex(4000, 500, false)).toBe(69)
    expect(energyIndex(4000, 0, false)).toBe(61)
    expect(energyIndex(4000, 500, true)).toBe(59)
  })
  it('performance falls with sleep debt, low energy and low morale', () => {
    const base = { energy: 100, sleepDebt: 0, morale: 100 }
    expect(performance(base)).toBe(1)
    expect(performance({ ...base, sleepDebt: 10 })).toBeLessThan(0.75)
    expect(performance({ ...base, energy: 30 })).toBeLessThan(0.6)
    expect(performance({ energy: 0, sleepDebt: 30, morale: 0 })).toBeGreaterThanOrEqual(0.2)
  })
  it('water need rises with heat, afternoon heavy work and illness', () => {
    const am: Task[] = ['water', 'wood', 'rest', 'rest']
    const pm: Task[] = ['rest', 'rest', 'water', 'wood']
    expect(waterNeed('forest', am, false)).toBeCloseTo(waterNeed('forest', pm, false), 5)
    expect(waterNeed('tropical', pm, false)).toBeCloseTo(waterNeed('tropical', am, false) + 1, 5)
    expect(waterNeed('forest', am, true)).toBeCloseTo(waterNeed('forest', am, false) + 1.5, 5)
  })
  it('no filter in the subarctic; the aircraft does not fly on a storm day', () => {
    expect(treatmentOptions('arctic')).not.toContain('filter')
    expect(treatmentOptions('forest')).toContain('filter')
    for (const env of ENV_IDS) expect(aircraftDay(env)).not.toBe(ENVS[env].stormDay)
    expect(forecast('forest', ENVS.forest.stormDay)).toMatch(/storm/)
  })
  it('runDay is pure', () => {
    const s0 = initialState('forest')
    const copy = JSON.stringify(s0)
    runDay(s0, plan())
    expect(JSON.stringify(s0)).toBe(copy)
  })
})

describe('multi-day model: consequences', () => {
  it('untreated water brings illness the next day', () => {
    const s1 = runDay(initialState('forest'), plan({ treatment: 'none' }))
    expect(s1.everIll).toBe(true)
    expect(s1.illDays).toBe(2)
    const t1 = runDay(initialState('forest'), plan({ treatment: 'filter' }))
    expect(t1.everIll).toBe(false)
  })
  it('boiling uses fuel; a filter does not', () => {
    const boil = runDay(initialState('forest'), plan({ treatment: 'boil' }))
    const filt = runDay(initialState('forest'), plan({ treatment: 'filter' }))
    expect(boil.fuel).toBeLessThan(filt.fuel)
    expect(filt.filter).toBeLessThan(100)
  })
  it('tending the fire all night costs sleep compared with a banked fire and a good bed', () => {
    const watch = runDay(initialState('forest'), plan({ night: 'watch', blocks: ['wood', 'wood', 'shelter', 'water'] }))
    const banked = runDay(initialState('forest'), plan({ night: 'banked', blocks: ['wood', 'wood', 'shelter', 'water'] }))
    expect(watch.sleepDebt).toBeGreaterThan(banked.sleepDebt + 1.5)
  })
  it('a storm halves outdoor work', () => {
    let s = initialState('forest')
    s = { ...s, day: ENVS.forest.stormDay }
    const calm = runDay({ ...s, day: 1 }, plan({ blocks: ['signal', 'signal', 'rest', 'rest'] }))
    const storm = runDay(s, plan({ blocks: ['signal', 'signal', 'rest', 'rest'] }))
    expect(storm.signal).toBeLessThan(calm.signal)
  })
  it('very low morale costs a work block to apathy', () => {
    const s = { ...initialState('forest'), morale: 10 }
    const next = runDay(s, plan())
    expect(next.log.some((l) => /Morale is very low/.test(l.text))).toBe(true)
  })
  it('ready signals on the aircraft day mean rescue', () => {
    const s = { ...initialState('tropical'), day: aircraftDay('tropical'), signal: 90 }
    const next = runDay(s, plan({ blocks: ['water', 'rest', 'rest', 'rest'] }))
    expect(next.outcome).toBe('rescued')
    const s2 = { ...s, signal: 20 }
    const next2 = runDay(s2, plan({ blocks: ['water', 'rest', 'rest', 'rest'] }))
    expect(next2.aircraftSeen).toBe(false)
    expect(next2.done).toBe(false)
  })
})

describe('multi-day model: whole runs', () => {
  for (const env of ENV_IDS) {
    it(`${env}: a sensible plan scores well; careless and foraging plans score badly`, () => {
      const g = runPolicy(env, good)
      const gs = scoreMultiDay(g).score
      expect(g.outcome).not.toBe('critical')
      expect(gs).toBeGreaterThanOrEqual(80)
      const c = runPolicy(env, careless)
      expect(c.outcome).toBe('critical')
      expect(scoreMultiDay(c).score).toBeLessThanOrEqual(15)
      expect(scoreMultiDay(runPolicy(env, forager)).score).toBeLessThan(gs - 25)
    })
    it(`${env}: rationing drinking water and skipping treatment are both worse than the sensible plan`, () => {
      const gs = scoreMultiDay(runPolicy(env, good)).score
      const save = runPolicy(env, (s) => ({ ...good(s), drinking: 'save' }))
      expect(save.minHydration).toBeLessThan(40)
      expect(scoreMultiDay(save).score).toBeLessThan(gs - 30)
      const raw = runPolicy(env, (s) => ({ ...good(s), treatment: 'none' }))
      expect(raw.everIll).toBe(true)
      expect(scoreMultiDay(raw).score).toBeLessThan(gs)
    })
  }
  it('without the aircraft, feasting early leaves you weaker and lower in morale by day 6', () => {
    const steady = runPolicy('forest', noSignal)
    const feast = runPolicy('forest', (s) => ({ ...noSignal(s), ration: 'full' }))
    expect(steady.outcome).toBe('found')
    expect(feast.energy).toBeLessThan(steady.energy)
    expect(feast.morale).toBeLessThan(steady.morale)
  })
  it('a routine keeps morale and gear higher', () => {
    const r = runPolicy('forest', noSignal)
    const n = runPolicy('forest', (s) => ({ ...noSignal(s), routine: false }))
    expect(n.minMorale).toBeLessThan(r.minMorale)
    expect(n.gear).toBeLessThan(r.gear)
  })
  it('scoring explains the lessons', () => {
    const r = scoreMultiDay(runPolicy('forest', forager))
    expect(r.lessons.join(' ')).toMatch(/Food-getting/)
    expect(r.breakdown.length).toBeGreaterThan(0)
  })
})

describe('stage 18 components render', () => {
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
