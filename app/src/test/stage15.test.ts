import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage15'
import { sims } from '../sims/stage15'
import {
  DILEMMAS, BIASES, choose, current, debrief, enter, initialState, narrowed, runPolicy, takeStop, canStop, timeLimit, visibleCues,
  MIN_SECONDS, BASE_SECONDS, type PDState,
} from '../sims/stage15/dilemmaModel'

const best = (_s: PDState, d: (typeof DILEMMAS)[number]) => d.options.find((o) => o.quality === 2)!.id
const worst = (bias?: string) => (_s: PDState, d: (typeof DILEMMAS)[number]) =>
  (d.options.find((o) => o.quality === 0 && (!bias || o.biases?.includes(bias as never))) ?? d.options.find((o) => o.quality === 0)!).id

describe('priority dilemmas model', () => {
  it('every dilemma has four options, a valid default and exactly one best option', () => {
    for (const d of DILEMMAS) {
      expect(d.options).toHaveLength(4)
      expect(d.options.map((o) => o.id)).toContain(d.defaultOption)
      expect(d.options.filter((o) => o.quality === 2)).toHaveLength(1)
      expect(d.cues.length).toBeGreaterThan(0)
    }
  })
  it('every bias the debrief teaches can actually be triggered', () => {
    const tagged = new Set(DILEMMAS.flatMap((d) => d.options.flatMap((o) => o.biases ?? [])))
    for (const b of BIASES) expect(tagged).toContain(b)
  })
  it('time available shrinks with stress and fatigue, with a floor', () => {
    const s = initialState()
    const calm = timeLimit({ ...s, stress: 0, fatigue: 0 })
    expect(calm).toBe(BASE_SECONDS)
    expect(timeLimit({ ...s, stress: 70, fatigue: 0 })).toBeLessThan(calm)
    expect(timeLimit({ ...s, stress: 70, fatigue: 80 })).toBeLessThan(timeLimit({ ...s, stress: 70, fatigue: 0 }))
    expect(timeLimit({ ...s, stress: 100, fatigue: 100 })).toBeGreaterThanOrEqual(MIN_SECONDS)
  })
  it('narrowed attention hides subtle cues; a STOP can bring them back', () => {
    const s = enter({ ...initialState(), stress: 65 })
    const d = current(s)!
    expect(narrowed(s)).toBe(true)
    expect(visibleCues(s, d).length).toBeLessThan(d.cues.length)
    const after = takeStop(s)
    expect(after.stress).toBe(45)
    expect(after.clock).toBe(s.clock + 5)
    expect(visibleCues(after, d)).toHaveLength(d.cues.length)
    expect(canStop(after)).toBe(false)
    expect(timeLimit(after)).toBeGreaterThan(timeLimit(s))
  })
  it('the best line gets home safe, early, with no biases', () => {
    const s = runPolicy(best)
    const r = debrief(s)
    expect(s.done).toBe(true)
    expect(r.outcome).toBe('home')
    expect(r.score).toBe(100)
    expect(BIASES.every((b) => r.biasCounts[b] === 0)).toBe(true)
    // Turning back at the col skips the storm scene and the race against the dark.
    expect(s.log.map((x) => x.dilemma)).not.toContain('storm')
    expect(s.log.map((x) => x.dilemma)).not.toContain('dusk')
  })
  it('the sunk-cost line meets the storm and the dark and ends in an incident', () => {
    const s = runPolicy(worst('sunk-cost'))
    const r = debrief(s)
    const seen = s.log.map((x) => x.dilemma)
    expect(seen).toContain('storm')
    expect(seen).toContain('dusk')
    expect(r.outcome).toBe('incident')
    expect(r.score).toBeLessThanOrEqual(40)
    expect(r.biasCounts['sunk-cost']).toBeGreaterThanOrEqual(2)
  })
  it('choices surface each named bias in the debrief', () => {
    const picks: Record<string, string> = { forecast: 'vote', blister: 'push', col: 'usual', storm: 'overhang', shortcut: 'follow', dusk: 'rush', car: 'lucky' }
    const r = debrief(runPolicy((_s, d) => picks[d.id]))
    expect(r.biasCounts.groupthink).toBe(2)
    expect(r.biasCounts['normalization-of-deviance']).toBe(2)
    expect(r.biasCounts['plan-continuation']).toBeGreaterThanOrEqual(2)
    expect(r.biasCounts['tunnel-vision']).toBe(1)
  })
  it('running out of time applies the default, adds stress and is reported', () => {
    const s0 = enter(initialState())
    const s1 = choose(s0, null)
    expect(s1.log[0].option).toBe(DILEMMAS[0].defaultOption)
    expect(s1.log[0].timedOut).toBe(true)
    const all = runPolicy(() => null)
    const r = debrief(all)
    expect(r.timeouts).toBe(all.log.length)
    expect(r.notes.join(' ')).toMatch(/Not deciding is a decision/)
    expect(r.score).toBeLessThan(debrief(runPolicy(best)).score)
  })
  it('taking a STOP before every decision still allows a perfect day', () => {
    const s = runPolicy((st, d) => (canStop(st) ? 'stop' : best(st, d)))
    expect(s.stops).toBe(s.log.length)
    expect(debrief(s).outcome).toBe('home')
  })
  it('a middling line ends as a close call', () => {
    const mid = (_s: PDState, d: (typeof DILEMMAS)[number]) => d.options.find((o) => o.quality === 1)!.id
    expect(debrief(runPolicy(mid)).outcome).toBe('close-call')
  })
})

describe('stage 15 components render', () => {
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
