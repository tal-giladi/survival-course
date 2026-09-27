import { describe, expect, it } from 'vitest'
import { capLessonsB, capScenariosB } from '../content/stages/stage19/capstonesB'
import { stages } from '../content/curriculum'
import type { Scenario, ScenarioOption, ScenarioState, ScenarioVar } from '../content/types'

// Walks every playable path of the capstone 7–12 scenarios with the same effect rules as the
// ScenarioPlayer, so flag-gated options, clock-stamped titles and endings are checked end to end.

const clampV = (k: ScenarioVar, v: number) => (k === 'minutes' ? Math.max(0, v) : k === 'water' ? Math.max(0, Math.min(5000, v)) : Math.max(0, Math.min(100, v)))

function apply(s: ScenarioState, o: ScenarioOption): ScenarioState {
  const next: ScenarioState = { ...s, flags: [...s.flags] }
  for (const [k, v] of Object.entries(o.effect.set ?? {})) next[k as ScenarioVar] = clampV(k as ScenarioVar, v as number)
  for (const [k, v] of Object.entries(o.effect.add ?? {})) next[k as ScenarioVar] = clampV(k as ScenarioVar, next[k as ScenarioVar] + (v as number))
  for (const f of o.effect.flags ?? []) if (!next.flags.includes(f)) next.flags.push(f)
  next.flags = next.flags.filter((f) => !(o.effect.clearFlags ?? []).includes(f))
  return next
}

function clockOf(start: string, minutes: number) {
  const [h, m] = start.split(':').map(Number)
  const total = h * 60 + m + minutes
  return { day: Math.floor(total / 1440) + 1, hhmm: `${String(Math.floor((total % 1440) / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}` }
}

const visible = (s: ScenarioState, o: ScenarioOption) => (!o.requiresFlag || s.flags.includes(o.requiresFlag)) && (!o.hiddenIfFlag || !s.flags.includes(o.hiddenIfFlag))

function walk(sc: Scenario) {
  const problems: string[] = []
  const endsReached = new Set<string>()
  const nodesVisited = new Set<string>()
  let paths = 0
  const check = (nodeId: string, state: ScenarioState, prevMinutes: number, trail: string[]) => {
    const node = sc.nodes.find((n) => n.id === nodeId)!
    nodesVisited.add(nodeId)
    if (trail.length > 40) { problems.push(`loop? ${trail.join('>')}`); return }
    if (state.minutes < prevMinutes) problems.push(`clock runs backwards into ${nodeId} via ${trail.join('>')}`)
    const m = node.title.match(/(?:Day (\d+), )?(\d{2}:\d{2})/)
    if (m) {
      const c = clockOf(sc.startClock, state.minutes)
      if (c.hhmm !== m[2] || (m[1] && Number(m[1]) !== c.day)) problems.push(`${nodeId} titled ${m[0]} reached at Day ${c.day} ${c.hhmm} via ${trail.join('>')}`)
    }
    if (node.end) { endsReached.add(nodeId); paths++; return }
    const opts = node.options.filter((o) => visible(state, o))
    if (opts.length > 4) problems.push(`${nodeId} shows ${opts.length} options with flags [${state.flags}]`)
    if (opts.length < 2) problems.push(`${nodeId} shows ${opts.length} option(s) with flags [${state.flags}] via ${trail.join('>')}`)
    for (const o of opts) check(o.next, apply(state, o), state.minutes, [...trail, `${nodeId}:${o.id}`])
  }
  check(sc.start, sc.initial, 0, [])
  return { problems, endsReached, nodesVisited, paths }
}

describe('capstones 7–12 scenarios', () => {
  it('has the six scenario ids', () => {
    expect(capScenariosB.map((s) => s.id)).toEqual([7, 8, 9, 10, 11, 12].map((n) => `cap-${n}-scenario`))
  })
  for (const sc of capScenariosB) {
    it(`${sc.id}: shape, clock, flags and endings`, () => {
      expect(sc.nodes.length).toBeGreaterThanOrEqual(10)
      expect(sc.nodes.length).toBeLessThanOrEqual(16)
      const ends = sc.nodes.filter((n) => n.end)
      expect(ends.length).toBeGreaterThanOrEqual(3)
      expect(ends.length).toBeLessThanOrEqual(5)
      expect(new Set(ends.map((n) => n.end!.outcome)).size).toBeGreaterThanOrEqual(3)
      for (const n of sc.nodes) {
        if (!n.end) expect(n.options.length, n.id).toBeGreaterThanOrEqual(2)
        if (!n.end) expect(n.options.length, n.id).toBeLessThanOrEqual(6)
        expect(new Set(n.options.map((o) => o.id)).size, n.id).toBe(n.options.length)
        for (const o of n.options) expect(o.feedback.length, `${n.id}:${o.id}`).toBeGreaterThan(40)
      }
      const { problems, endsReached, nodesVisited, paths } = walk(sc)
      expect(problems).toEqual([])
      expect(paths).toBeGreaterThan(10)
      expect(sc.nodes.filter((n) => !nodesVisited.has(n.id)).map((n) => n.id)).toEqual([])
      expect(ends.filter((n) => !endsReached.has(n.id)).map((n) => n.id)).toEqual([])
    })
  }
})

describe('capstones 7–12 lessons', () => {
  const outline = stages.find((s) => s.n === 19)!.outline
  it('match the Stage 19 outline', () => {
    expect(capLessonsB.map((l) => l.id)).toEqual([7, 8, 9, 10, 11, 12].map((n) => `cap-${n}`))
    for (const l of capLessonsB) {
      const o = outline.find((x) => x.id === l.id)!
      expect(l.title).toBe(o.title)
      expect(l.level).toBe(o.level)
      expect(l.prerequisites).toEqual(o.prerequisites)
      expect(l.stage).toBe(19)
      expect(l.order).toBe(Number(l.id.slice(4)))
      expect(l.simulations).toEqual([`scenario-${l.id}`])
      expect(l.explanation.some((b) => b.type === 'sim' && b.id === `scenario-${l.id}`)).toBe(true)
      expect(l.quiz.length).toBeGreaterThanOrEqual(5)
      expect(l.quiz.length).toBeLessThanOrEqual(6)
      l.quiz.forEach((q) => expect(q.id).toMatch(new RegExp(`^${l.id}-q\\d+$`)))
      l.exercises.forEach((e) => {
        expect(e.id).toMatch(new RegExp(`^${l.id}-e\\d+$`))
        expect(e.level).toBe(4)
      })
      expect(l.exercises.some((e) => e.safety === 'virtual-only')).toBe(true)
      expect(l.scenario.id).toBe(`${l.id}-sc`)
      expect(l.scenario.choices.length).toBeGreaterThanOrEqual(3)
    }
  })
})
