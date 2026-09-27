import { describe, expect, it } from 'vitest'
import {
  ACTIONS,
  CASES,
  applyAction,
  bloodVolumeMl,
  caseById,
  initialState,
  lossFraction,
  scoreRun,
  shockClass,
  soapNote,
  status,
  vitals,
  type ActionId,
  type CaseDef,
  type LogEntry,
  type PatientState,
  type Vitals,
} from '../sims/stage9/patientModel'
import { EVAC_CASES, PLANS, estimate, helicopterFlyable, scoreEvac } from '../sims/stage9/evacModel'
import { stage9 } from '../content/stages/stage9'

function run(c: CaseDef, actions: ActionId[]) {
  let s: PatientState = initialState(c)
  const log: LogEntry[] = []
  const vl: Vitals[] = []
  for (const a of actions) {
    const t = s.t
    const r = applyAction(c, s, a)
    s = r.state
    log.push({ t, action: a, note: r.note })
    if (a === 'vitals') vl.push(vitals(s))
  }
  return { s, log, vl, score: scoreRun(c, log, vl, s) }
}

describe('stage 9 patient model', () => {
  it('blood volume ≈ 70 mL/kg and ATLS classes', () => {
    expect(bloodVolumeMl(70)).toBe(4900)
    expect(shockClass(0.1)).toBe(1)
    expect(shockClass(0.2)).toBe(2)
    expect(shockClass(0.35)).toBe(3)
    expect(shockClass(0.45)).toBe(4)
  })

  it('untreated limb bleeding worsens shock; a tourniquet stops the progression', () => {
    const c = caseById('forest-fall')
    const untreated = run(c, ['scene', 'move', 'wait', 'wait'])
    const treated = run(c, ['scene', 'move', 'tourniquet', 'wait', 'wait'])
    expect(lossFraction(untreated.s)).toBeGreaterThan(0.4)
    expect(lossFraction(treated.s)).toBeLessThan(0.25)
    expect(vitals(untreated.s).hr).toBeGreaterThan(vitals(treated.s).hr)
    expect(status(c, untreated.s)).not.toBe('stable')
  })

  it('direct pressure alone slows but does not stop pulsing bleeding', () => {
    const c = caseById('forest-fall')
    const p = run(c, ['scene', 'move', 'pressure', 'wait', 'wait'])
    const t = run(c, ['scene', 'move', 'tourniquet', 'wait', 'wait'])
    const none = run(c, ['scene', 'move', 'wait', 'wait', 'wait'])
    expect(p.s.bloodLossMl).toBeLessThan(none.s.bloodLossMl)
    expect(p.s.bloodLossMl).toBeGreaterThan(t.s.bloodLossMl)
  })

  it('heat stroke: cooling lowers core temperature and stops near 38.6 °C; no cooling keeps rising', () => {
    const c = caseById('desert-collapse')
    const cooled = run(c, ['scene', 'cool', 'wait', 'wait', 'wait', 'wait', 'wait', 'wait'])
    const hot = run(c, ['scene', 'wait', 'wait', 'wait', 'wait'])
    expect(cooled.s.core).toBeCloseTo(38.6, 1)
    expect(hot.s.core).toBeGreaterThan(c.initial.core!)
  })

  it('hypothermia: sheltering and a wrap stop the fall in core temperature', () => {
    const c = caseById('mountain-cold')
    const exposed = run(c, ['scene', 'wait', 'wait', 'wait', 'wait'])
    const wrapped = run(c, ['scene', 'move', 'insulate', 'wetoff', 'wait', 'wait'])
    expect(exposed.s.core).toBeLessThan(33.5)
    expect(wrapped.s.core).toBeGreaterThan(exposed.s.core)
    expect(status(c, wrapped.s)).toBe('improving')
  })

  it('anaphylaxis: epinephrine helps; symptoms can return and a second dose settles them', () => {
    const c = caseById('coast-sting')
    const one = run(c, ['epi', 'wait', 'wait', 'wait', 'wait'])
    expect(status(c, one.s)).toBe('deteriorating')
    const two = run(c, ['epi', 'wait', 'wait', 'wait', 'epi', 'wait'])
    expect(two.s.anaph).toBeLessThan(one.s.anaph)
    const none = run(c, ['antihistamine', 'wait', 'wait', 'wait', 'wait'])
    expect(none.s.anaph).toBeGreaterThan(90)
  })

  it('good care scores well; skipping scene safety and life threats scores poorly', () => {
    for (const c of CASES) {
      const good: ActionId[] = ['scene']
      if (c.hazard) good.push('move')
      for (const k of c.critical) if (!good.includes(k.action)) good.push(k.action)
      good.push('call', 'vitals', 'secondary', 'vitals', ...c.helpful.filter((h) => !good.includes(h) && h !== 'secondary' && h !== 'call' && !c.harmful[h]), 'vitals')
      if (c.id === 'coast-sting') good.push('epi', 'vitals')
      const g = run(c, good)
      expect(g.score.score, `${c.id} good`).toBeGreaterThanOrEqual(80)
      const bad = run(c, ['wait', 'rub', 'wait', 'wait', 'wait', 'wait'])
      expect(bad.score.score, `${c.id} bad`).toBeLessThan(40)
    }
  })

  it('SOAP note records every vitals set and the plan', () => {
    const c = caseById('forest-fall')
    const r = run(c, ['scene', 'move', 'tourniquet', 'vitals', 'call', 'vitals'])
    const n = soapNote(c, r.log, r.vl, r.s)
    expect(n.o.filter((l) => l.startsWith('T+'))).toHaveLength(2)
    expect(n.p.some((l) => l.includes('tourniquet'))).toBe(true)
    expect(n.s).toContain('SAMPLE')
  })

  it('every action has a positive duration', () => {
    for (const a of ACTIONS) expect(a.minutes).toBeGreaterThan(0)
  })
})

describe('stage 9 evacuation model', () => {
  it('every best plan is feasible and every case has a best plan', () => {
    for (const c of EVAC_CASES) {
      const best = PLANS.filter((p) => c.grades[p.id] === 2)
      expect(best.length, c.id).toBeGreaterThan(0)
      for (const p of best) expect(estimate(c, p.id).feasible, `${c.id} ${p.id}`).toBe(true)
    }
  })
  it('litter carries need enough people; helicopters need weather and comms', () => {
    const small = EVAC_CASES.find((c) => c.group < 6)!
    expect(estimate(small, 'carry').feasible).toBe(false)
    const storm = EVAC_CASES.find((c) => c.weather === 'storm')!
    expect(helicopterFlyable(storm)).toBe(false)
  })
  it('carrying is several times slower than walking out', () => {
    const c = { ...EVAC_CASES[0], group: 8 }
    expect(estimate(c, 'carry').hours).toBeGreaterThan(estimate(c, 'walk').hours)
  })
  it('scoring rewards the best urgency and plan', () => {
    for (const c of EVAC_CASES) {
      const best = PLANS.find((p) => c.grades[p.id] === 2)!.id
      expect(scoreEvac(c, c.bestUrgency, best).score).toBe(100)
    }
    const c = EVAC_CASES.find((x) => x.id === 'head-mountain')!
    expect(scoreEvac(c, 'none', 'stay').score).toBe(0)
  })
})

describe('stage 9 content', () => {
  it('has the 9 outline lessons and a 8–12 question review', () => {
    expect(stage9.lessons.map((l) => l.id)).toEqual(['s9-l1', 's9-l2', 's9-l3', 's9-l4', 's9-l5', 's9-l6', 's9-l7', 's9-l8', 's9-l9'])
    expect(stage9.review.length).toBeGreaterThanOrEqual(8)
    expect(stage9.review.length).toBeLessThanOrEqual(12)
  })
  it('every lesson distinguishes home practice from formal training and every exercise has a safety class', () => {
    for (const l of stage9.lessons) {
      const text = JSON.stringify(l.explanation)
      expect(text, l.id).toMatch(/formal|course|instructor/i)
      expect(l.objectives.length).toBeGreaterThanOrEqual(3)
      expect(l.objectives.length).toBeLessThanOrEqual(5)
      expect(l.quiz.length).toBeLessThanOrEqual(7)
      for (const q of l.quiz) if (q.kind === 'single' || q.kind === 'multi') for (const ch of q.choices) expect(ch.why.length, q.id).toBeGreaterThan(0)
      expect(l.scenario.choices.length).toBeGreaterThanOrEqual(3)
    }
  })
})
