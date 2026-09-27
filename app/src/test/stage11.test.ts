import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage11'
import { sims } from '../sims/stage11'
import {
  CANVAS, SCENES, bracket, clock, correctAge, localTrail, scoreScene, totalPercent, trail, type Marker,
} from '../sims/stage11/trackingModel'
import { stage11 } from '../content/stages/stage11'

describe('tracking model: age brackets', () => {
  it('an event under the print sets the maximum age, an event on top sets the minimum', () => {
    const m: Marker[] = [{ event: 'rain stopped', at: 27, relation: 'after' }]
    expect(bracket(33, m)).toEqual({ lo: 0, hi: 6 })
    const two: Marker[] = [
      { event: 'tractor out', at: 31, relation: 'after' },
      { event: 'tractor back', at: 36, relation: 'before' },
    ]
    expect(bracket(39, two)).toEqual({ lo: 3, hi: 8 })
    expect(bracket(40, [{ event: 'rain', at: 17, relation: 'before' }])).toEqual({ lo: 23, hi: null })
  })
  it('more events can only narrow the window', () => {
    const base: Marker[] = [{ event: 'a', at: 20, relation: 'after' }]
    const more: Marker[] = [...base, { event: 'b', at: 22, relation: 'after' }, { event: 'c', at: 26, relation: 'before' }]
    const b0 = bracket(34, base), b1 = bracket(34, more)
    expect(b1.lo).toBeGreaterThanOrEqual(b0.lo)
    expect(b1.hi!).toBeLessThanOrEqual(b0.hi!)
  })
  it('formats the two-day clock', () => {
    expect(clock(22)).toBe('yesterday 22:00')
    expect(clock(33)).toBe('today 09:00')
  })
})

describe('tracking model: scenes', () => {
  it('every scene has exactly one age choice matching its bracket', () => {
    for (const s of SCENES) {
      const b = bracket(s.now, s.markers)
      expect(s.ageChoices.filter((c) => c.lo === b.lo && c.hi === b.hi), s.id).toHaveLength(1)
      expect(correctAge(s), s.id).toBeDefined()
      expect(new Set(s.ageChoices.map((c) => c.id)).size).toBe(s.ageChoices.length)
    }
  })
  it('scene ids are unique and there are at least five scenes', () => {
    expect(new Set(SCENES.map((s) => s.id)).size).toBe(SCENES.length)
    expect(SCENES.length).toBeGreaterThanOrEqual(5)
  })
  it('scores four points for a perfect answer and zero for a blank one', () => {
    for (const s of SCENES) {
      expect(scoreScene(s, { family: s.family, gait: s.gait, dir: s.dir, age: correctAge(s)! }).points).toBe(4)
      expect(scoreScene(s, { family: null, gait: null, dir: null, age: null }).points).toBe(0)
    }
    expect(totalPercent([4, 4, 2, 0])).toBe(63)
    expect(totalPercent([])).toBe(0)
  })
})

describe('tracking model: trail geometry', () => {
  it('prints stay on the canvas and progress in the direction of travel', () => {
    for (const s of SCENES) {
      const ps = trail(s.family, s.gait, s.dir)
      expect(ps.length, s.id).toBeGreaterThanOrEqual(4)
      for (const p of ps) {
        expect(p.x).toBeGreaterThanOrEqual(0)
        expect(p.x).toBeLessThanOrEqual(CANVAS.w)
        expect(p.y).toBeGreaterThanOrEqual(0)
        expect(p.y).toBeLessThanOrEqual(CANVAS.h)
      }
      const first = ps[0], last = ps[ps.length - 1]
      if (s.dir === 'right') expect(last.x).toBeGreaterThan(first.x)
      if (s.dir === 'left') expect(last.x).toBeLessThan(first.x)
      if (s.dir === 'up') expect(last.y).toBeLessThan(first.y)
      if (s.dir === 'down') expect(last.y).toBeGreaterThan(first.y)
    }
  })
  it('a hare bound puts the hind prints ahead of the front prints', () => {
    const group = localTrail('lagomorph', 'bound', 300).slice(0, 4)
    const front = group.filter((p) => p.foot === 'front').map((p) => p.u)
    const hind = group.filter((p) => p.foot === 'hind').map((p) => p.u)
    expect(Math.min(...hind)).toBeGreaterThan(Math.max(...front))
  })
  it('a trot is narrower than a walk', () => {
    const width = (g: 'walk' | 'trot') => { const vs = localTrail('canid', g, 300).map((p) => p.v); return Math.max(...vs) - Math.min(...vs) }
    expect(width('trot')).toBeLessThan(width('walk'))
  })
})

describe('stage 11 rendering and wiring', () => {
  it('every diagram renders an accessible SVG', () => {
    for (const [id, C] of Object.entries(diagrams)) {
      const html = renderToString(createElement(C))
      expect(html, id).toContain('role="img"')
      expect(html, id).toContain('aria-label=')
    }
  })
  it('the simulation renders', () => {
    for (const s of sims) expect(renderToString(createElement(s.component, { onScore: () => {} })).length).toBeGreaterThan(100)
  })
  it('lessons follow the id conventions and have exercises with safety classes', () => {
    stage11.lessons.forEach((l, i) => {
      expect(l.id).toBe(`s11-l${i + 1}`)
      expect(l.objectives.length).toBeGreaterThanOrEqual(3)
      expect(l.quiz.length).toBeGreaterThanOrEqual(4)
      expect(l.quiz.length).toBeLessThanOrEqual(7)
      for (const q of l.quiz) expect(q.id.startsWith(`s11-l${i + 1}-q`)).toBe(true)
      for (const e of l.exercises) expect(e.id.startsWith(`s11-l${i + 1}-e`)).toBe(true)
      expect(l.scenario.id).toBe(`s11-l${i + 1}-sc`)
      expect(l.scenario.choices.length).toBeGreaterThanOrEqual(3)
    })
    expect(stage11.review.length).toBeGreaterThanOrEqual(8)
    expect(stage11.review.length).toBeLessThanOrEqual(12)
  })
})
