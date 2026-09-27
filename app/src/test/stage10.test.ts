import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage10'
import { sims } from '../sims/stage10'
import { CHALLENGES, ITEMS, bestAssignment, evaluate, roleFit, type Challenge } from '../sims/stage10/improviseModel'
import { stage10 } from '../content/stages/stage10'

const ch = (id: string) => CHALLENGES.find((c) => c.id === id) as Challenge

describe('improvise challenge model', () => {
  it('has unique ids and overrides that point at real roles and items', () => {
    expect(new Set(CHALLENGES.map((c) => c.id)).size).toBe(CHALLENGES.length)
    expect(new Set(ITEMS.map((i) => i.id)).size).toBe(ITEMS.length)
    for (const c of CHALLENGES) {
      for (const k of Object.keys(c.overrides ?? {})) {
        const [role, item] = k.split(':')
        expect(c.roles.map((r) => r.id), `${c.id} ${k}`).toContain(role)
        expect(ITEMS.map((i) => i.id), `${c.id} ${k}`).toContain(item)
      }
    }
  })
  it('fit is the weakest link of the required properties', () => {
    const water = ch('water-carry')
    const vessel = water.roles.find((r) => r.id === 'vessel')!
    const bottle = ITEMS.find((i) => i.id === 'pet-bottle')!
    expect(roleFit(water, vessel, bottle).fit).toBeCloseTo(1.5 / 8, 5)
    expect(roleFit(water, vessel, bottle).limiting).toBe('capacity')
  })
  it('every challenge has a tested solution that scores 100', () => {
    for (const c of CHALLENGES) expect(bestAssignment(c).score, c.id).toBe(100)
  })
  it('a sensible water carry scores full marks; a fuel bottle is a hazard', () => {
    const good = evaluate(ch('water-carry'), { vessel: 'bin-bag', carrier: 'rucksack', closure: 'cord' }, true)
    expect(good.score).toBe(100)
    const bad = evaluate(ch('water-carry'), { vessel: 'fuel-bottle', carrier: 'rucksack', closure: 'cord' }, true)
    expect(bad.hazards.length).toBe(1)
    expect(bad.score).toBeLessThan(50)
  })
  it('wire or cable ties round a swelling limb are hazards', () => {
    const r = evaluate(ch('splint'), { support: 'pad', padding: 'socks', secure: 'wire', sling: 'bandana' }, true)
    expect(r.hazards).toContain('Wire around a swelling limb')
    expect(r.score).toBeLessThan(60)
  })
  it('using critical gear in cold, wet weather costs points', () => {
    const t = ch('tent-repair')
    const good = evaluate(t, { cover: 'tarp', fix: 'tape', relief: 'cord' }, true)
    const jacket = evaluate(t, { cover: 'jacket', fix: 'tape', relief: 'cord' }, true)
    expect(good.score).toBe(100)
    expect(jacket.criticalUsed).toEqual(['Rain jacket'])
    expect(jacket.score).toBe(100 - 15)
    // The same item in a mild-weather challenge carries no penalty.
    expect(evaluate(ch('splint'), { support: 'pad', padding: 'socks', secure: 'tape', sling: 'jacket' }, true).criticalPenalty).toBe(0)
  })
  it('committing an untested build with weak links scores lower than testing it', () => {
    const c = ch('boot-repair')
    const a = { bind: 'tape', seal: 'tape', foot: 'socks' }
    const untested = evaluate(c, a, false)
    const tested = evaluate(c, a, true)
    expect(untested.score).toBeLessThan(tested.score)
    expect(untested.untestedPenalty).toBeGreaterThan(0)
  })
  it('items cannot be used for more jobs than they allow', () => {
    const r = evaluate(ch('litter'), { rails: 'deadfall', bed: 'tarp', pad: 'pad', strap: 'belt' }, true)
    expect(r.score).toBe(100)
    const twice = evaluate(ch('water-carry'), { vessel: 'bin-bag', carrier: 'rucksack', closure: 'bin-bag' }, true)
    expect(twice.rows[2].overused).toBe(true)
    expect(twice.rows[2].fit).toBe(0)
  })
})

describe('stage 10 registry', () => {
  it('registers the improvise-challenge sim', () => {
    expect(sims.map((s) => s.id)).toEqual(['improvise-challenge'])
  })
  it('every diagram renders an accessible svg', () => {
    for (const [id, C] of Object.entries(diagrams)) {
      const html = renderToString(createElement(C))
      expect(html, id).toContain('role="img"')
      expect(html, id).toContain('aria-label')
    }
  })
  it('every stage-10 diagram id is used by a lesson', () => {
    const used = new Set(stage10.lessons.flatMap((l) => [...l.explanation, ...(l.science ?? []), ...l.examples]).filter((b) => b.type === 'diagram').map((b) => (b as { id: string }).id))
    for (const id of Object.keys(diagrams)) expect(used, id).toContain(id)
  })
  it('lessons match the outline and have ids in the right form', () => {
    expect(stage10.lessons.map((l) => l.id)).toEqual(['s10-l1', 's10-l2', 's10-l3', 's10-l4', 's10-l5'])
    for (const l of stage10.lessons) {
      const k = l.id.split('-l')[1]
      for (const q of l.quiz) expect(q.id).toMatch(new RegExp(`^s10-l${k}-q\\d+$`))
      for (const e of l.exercises) expect(e.id).toMatch(new RegExp(`^s10-l${k}-e\\d+$`))
      expect(l.scenario.id).toBe(`s10-l${k}-sc`)
    }
    expect(stage10.review.length).toBeGreaterThanOrEqual(8)
  })
})
