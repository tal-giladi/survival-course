import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage17'
import { sims } from '../sims/stage17'
import {
  availableActivities, coreTemp, initialState, isDay, outdoorTemp, runPolicy, scoreStranded, stepHour,
  type Choice, type Kit, type StrandedState,
} from '../sims/stage17/strandedModel'

const full: Kit = { tripPlan: true, plb: false, water: true, gear: true, tools: true, coAlarm: false, fuel: true }
const act = (activity: Choice['activity'], extra: Partial<Choice> = {}): Choice => ({ activity, drink: 'need', windowCracked: false, ...extra })

const goodDesert = (s: StrandedState): Choice =>
  act(!s.shade ? 'rig-shade' : !s.signals && isDay('desert', s.hour) ? 'signal' : 'rest-shade')
const goodWinter = (s: StrandedState): Choice =>
  act(!s.insulated ? 'insulate' : s.tailpipeSnow >= 9 ? 'clear-exhaust' : !s.signals && isDay('winter', s.hour) ? 'signal' : s.cabin < 2 ? 'engine-burst' : 'rest-huddle', { windowCracked: true })

describe('stranded-vehicle model: environment', () => {
  it('desert and winter temperatures follow a daily cycle', () => {
    expect(outdoorTemp('desert', 5)).toBeCloseTo(43, 1) // 15:00
    expect(outdoorTemp('desert', 17)).toBeCloseTo(25, 1) // 03:00
    expect(outdoorTemp('winter', 10)).toBeCloseTo(-17, 1) // 03:00
  })
  it('offers scenario-appropriate activities', () => {
    const d = availableActivities(initialState('desert', full))
    expect(d).toContain('rig-shade')
    expect(d).not.toContain('engine-burst')
    const w = availableActivities(initialState('winter', { ...full, plb: true }))
    expect(w).toContain('clear-exhaust')
    expect(w).toContain('plb')
    expect(w).not.toContain('dig')
  })
  it('a closed car in the desert sun heats far above the air', () => {
    const s = stepHour(stepHour(initialState('desert', full), act('rest-cabin')), act('rest-cabin'))
    expect(s.cabin).toBeGreaterThan(s.outdoor + 15)
  })
})

describe('stranded-vehicle model: desert', () => {
  it('shade, signals and drinking to need, with a trip plan, get you found by the morning search', () => {
    const s = runPolicy('desert', full, goodDesert)
    expect(s.outcome).toBe('rescued')
    expect(s.hour).toBeLessThanOrEqual(24)
    expect(s.maxCore).toBeLessThan(38)
    expect(scoreStranded(s).score).toBeGreaterThanOrEqual(90)
  })
  it('sitting in the closed car in the sun leads to heat stroke', () => {
    const s = runPolicy('desert', full, () => act('rest-cabin'))
    expect(s.outcome).toBe('critical')
    expect(s.cause).toBe('heat')
    expect(scoreStranded(s).score).toBeLessThanOrEqual(5)
  })
  it('rationing water leaves water in the bottle and a dehydrated, hotter body', () => {
    const need = runPolicy('desert', full, goodDesert)
    const ration = runPolicy('desert', full, (s) => ({ ...goodDesert(s), drink: 'ration' }))
    expect(ration.water).toBeGreaterThan(need.water)
    expect(ration.maxDehydration).toBeGreaterThan(need.maxDehydration + 3)
    expect(ration.maxCore).toBeGreaterThan(need.maxCore)
    expect(scoreStranded(ration).score).toBeLessThan(scoreStranded(need).score)
  })
  it('dehydration raises core temperature', () => {
    const s = { ...initialState('desert', full), lost: 3.5, drunk: 0 }
    expect(coreTemp(s)).toBeCloseTo(37 + 0.15 * 5, 5)
  })
  it('walking out at midday is far worse than staying', () => {
    const walk = runPolicy('desert', full, () => act('walk-out'))
    expect(walk.outcome).toBe('critical')
    expect(scoreStranded(walk).lessons.join(' ')).toMatch(/vehicle/)
  })
  it('digging out in the midday sun costs far more heat than digging at dawn', () => {
    const noon = runPolicy('desert', { ...full, tripPlan: false }, () => act('dig'))
    const dawn = runPolicy('desert', { ...full, tripPlan: false }, (s) => (s.hour < 18 ? act(s.shade ? 'rest-shade' : 'rig-shade') : act('dig')))
    expect(noon.outcome).toBe('self-rescued')
    expect(dawn.outcome).toBe('self-rescued')
    expect(noon.maxCore).toBeGreaterThan(dawn.maxCore + 1.5)
    expect(scoreStranded(dawn).score).toBeGreaterThan(scoreStranded(noon).score + 20)
  })
  it('a freed car without fuel cannot drive out', () => {
    const s = runPolicy('desert', { ...full, fuel: false, tripPlan: false }, (st) => (st.hour < 6 ? act('engine-ac') : st.hour < 18 ? act(st.shade ? 'rest-shade' : 'rig-shade') : act('dig')))
    expect(s.flags).toContain('free-no-fuel')
    expect(s.outcome).not.toBe('self-rescued')
  })
  it('without a trip plan nobody comes in time; a beacon brings help', () => {
    const noPlan = runPolicy('desert', { ...full, tripPlan: false }, goodDesert)
    expect(noPlan.outcome).toBe('waiting')
    const plb = runPolicy('desert', { ...full, tripPlan: false, plb: true }, (s) => (s.hour === 0 ? act('plb') : goodDesert(s)))
    expect(plb.outcome).toBe('rescued')
    expect(plb.hour).toBeLessThanOrEqual(8)
  })
  it('little water and no plan ends badly dehydrated', () => {
    const s = runPolicy('desert', { ...full, tripPlan: false, water: false }, goodDesert)
    expect(s.water).toBe(0)
    expect(s.maxDehydration).toBeGreaterThan(8)
    expect(scoreStranded(s).score).toBeLessThan(50)
  })
})

describe('stranded-vehicle model: winter', () => {
  it('insulating, clearing the tailpipe, short engine runs and signals score well', () => {
    const s = runPolicy('winter', full, goodWinter)
    expect(s.outcome).toBe('rescued')
    expect(s.coDose).toBe(0)
    expect(s.minCore).toBeGreaterThan(36)
    expect(scoreStranded(s).score).toBeGreaterThanOrEqual(90)
  })
  it('snow builds up at the tailpipe during the storm', () => {
    let s = initialState('winter', full)
    for (let i = 0; i < 7; i++) s = stepHour(s, act('rest-huddle'))
    expect(s.tailpipeSnow).toBeGreaterThanOrEqual(20)
    expect(stepHour(s, act('clear-exhaust')).tailpipeSnow).toBeLessThan(5)
  })
  it('running the engine with a buried tailpipe is fatal without an alarm', () => {
    const cont = runPolicy('winter', full, () => act('engine-continuous'))
    expect(cont.outcome).toBe('critical')
    expect(cont.cause).toBe('co')
    const bursts = runPolicy('winter', full, () => act('engine-burst'))
    expect(bursts.cause).toBe('co')
  })
  it('a CO alarm interrupts the exposure', () => {
    const s = runPolicy('winter', { ...full, coAlarm: true }, () => act('engine-continuous'))
    expect(s.outcome).not.toBe('critical')
    expect(s.alarmEvents).toBeGreaterThan(0)
  })
  it('engine runs with a cleared tailpipe and cracked window stay safe', () => {
    const s = runPolicy('winter', full, (st) => act(st.tailpipeSnow >= 9 ? 'clear-exhaust' : 'engine-continuous', { windowCracked: true }))
    expect(s.coDose).toBe(0)
    expect(s.outcome).toBe('rescued')
  })
  it('without warm gear and heat, the driver becomes hypothermic', () => {
    const s = runPolicy('winter', { ...full, gear: false }, () => act('rest-huddle'))
    expect(s.outcome).toBe('critical')
    expect(s.cause).toBe('cold')
    const gear = runPolicy('winter', full, () => act('rest-huddle'))
    expect(gear.minCore).toBeGreaterThan(s.minCore + 2)
  })
  it('walking into the blizzard ends in hypothermia', () => {
    const s = runPolicy('winter', full, () => act('walk-out'))
    expect(s.outcome).toBe('critical')
    expect(s.cause).toBe('cold')
  })
  it('an empty tank runs out of heat', () => {
    const s = runPolicy('winter', { ...full, fuel: false }, (st) => act(st.tailpipeSnow >= 9 ? 'clear-exhaust' : 'engine-continuous', { windowCracked: true }))
    expect(s.fuel).toBe(0)
    expect(scoreStranded(s).lessons.join(' ')).toMatch(/half full/)
  })
})

describe('stage 17 components render', () => {
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
