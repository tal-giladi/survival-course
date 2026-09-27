import { describe, expect, it } from 'vitest'
import { capLessonsA, capScenariosA } from '../content/stages/stage19/capstonesA'
import { stages } from '../content/curriculum'
import type { Scenario, ScenarioOption, ScenarioState, ScenarioVar } from '../content/types'

// Capstones 1–6: flag-aware path exploration. Mirrors the ScenarioPlayer's effect semantics
// (set, then add, then flags, then clearFlags) so the clock shown on screen matches node titles.

const clamp = (k: ScenarioVar, v: number) => (k === 'minutes' ? Math.max(0, v) : k === 'water' ? Math.max(0, Math.min(5000, v)) : Math.max(0, Math.min(100, v)))

function apply(s: ScenarioState, o: ScenarioOption): ScenarioState {
  const next: ScenarioState = { ...s, flags: [...s.flags] }
  for (const [k, v] of Object.entries(o.effect.set ?? {})) next[k as ScenarioVar] = clamp(k as ScenarioVar, v as number)
  for (const [k, v] of Object.entries(o.effect.add ?? {})) next[k as ScenarioVar] = clamp(k as ScenarioVar, next[k as ScenarioVar] + (v as number))
  for (const f of o.effect.flags ?? []) if (!next.flags.includes(f)) next.flags.push(f)
  next.flags = next.flags.filter((f) => !(o.effect.clearFlags ?? []).includes(f))
  return next
}

const visible = (s: ScenarioState, opts: ScenarioOption[]) => opts.filter((o) => (!o.requiresFlag || s.flags.includes(o.requiresFlag)) && (!o.hiddenIfFlag || !s.flags.includes(o.hiddenIfFlag)))

function titleMinuteOfDay(title: string): number | null {
  const m = /^(?:Day \d+, )?(\d\d):(\d\d)\b/.exec(title)
  return m ? Number(m[1]) * 60 + Number(m[2]) : null
}

function explore(s: Scenario) {
  const [h, m] = s.startClock.split(':').map(Number)
  const start = h * 60 + m
  const reached = new Set<string>()
  const problems: string[] = []
  const seen = new Set<string>()
  let paths = 0
  const walk = (nodeId: string, st: ScenarioState, prevMinutes: number, trail: string[]) => {
    const key = `${nodeId}|${[...st.flags].sort().join(',')}|${st.minutes}`
    if (seen.has(key)) return
    seen.add(key)
    reached.add(nodeId)
    const node = s.nodes.find((n) => n.id === nodeId)!
    if (st.minutes < prevMinutes) problems.push(`clock went backwards at ${nodeId} via ${trail.join(' > ')}`)
    const tod = titleMinuteOfDay(node.title)
    if (tod !== null && (start + st.minutes) % 1440 !== tod) problems.push(`${nodeId} title "${node.title}" but clock is ${Math.floor(((start + st.minutes) % 1440) / 60)}:${(start + st.minutes) % 60} via ${trail.join(' > ')}`)
    if (node.end) {
      paths++
      return
    }
    const opts = visible(st, node.options)
    if (opts.length < 2 || opts.length > 4) problems.push(`${nodeId} shows ${opts.length} options via ${trail.join(' > ')}`)
    for (const o of opts) walk(o.next, apply(st, o), st.minutes, [...trail, `${nodeId}.${o.id}`])
  }
  walk(s.start, s.initial, 0, [])
  return { reached, problems, paths }
}

describe('capstones A (cap-1 … cap-6)', () => {
  it('exports six scenarios and six lessons with the expected ids', () => {
    expect(capScenariosA.map((s) => s.id)).toEqual([1, 2, 3, 4, 5, 6].map((n) => `cap-${n}-scenario`))
    expect(capLessonsA.map((l) => l.id)).toEqual([1, 2, 3, 4, 5, 6].map((n) => `cap-${n}`))
  })

  it('lessons match the Stage 19 outline', () => {
    const outline = stages.find((s) => s.n === 19)!.outline
    capLessonsA.forEach((l, i) => {
      const o = outline.find((x) => x.id === l.id)!
      expect(l.title).toBe(o.title)
      expect(l.level).toBe(o.level)
      expect(l.prerequisites).toEqual(o.prerequisites)
      expect(l.stage).toBe(19)
      expect(l.order).toBe(i + 1)
      expect(l.quiz.length).toBeGreaterThanOrEqual(5)
      expect(l.quiz.length).toBeLessThanOrEqual(6)
      expect(l.simulations).toEqual([`scenario-${l.id}`])
      expect(l.explanation.some((b) => b.type === 'sim' && b.id === `scenario-${l.id}`)).toBe(true)
      expect(l.scenario.id).toBe(`${l.id}-sc`)
      l.quiz.forEach((q, k) => expect(q.id).toBe(`${l.id}-q${k + 1}`))
      l.exercises.forEach((e, k) => {
        expect(e.id).toBe(`${l.id}-e${k + 1}`)
        expect(e.level).toBe(4)
      })
      expect(l.exercises[0].safety).toBe('virtual-only')
    })
  })

  for (const s of capScenariosA) {
    it(`${s.id}: size, endings, clock consistency and every path ending`, () => {
      expect(s.stage).toBe(19)
      expect(s.nodes.length).toBeGreaterThanOrEqual(10)
      expect(s.nodes.length).toBeLessThanOrEqual(16)
      const ends = s.nodes.filter((n) => n.end)
      expect(ends.length).toBeGreaterThanOrEqual(3)
      expect(ends.length).toBeLessThanOrEqual(5)
      expect(new Set(s.nodes.map((n) => n.id)).size).toBe(s.nodes.length)
      for (const n of s.nodes) expect(new Set(n.options.map((o) => o.id)).size, n.id).toBe(n.options.length)
      const { reached, problems, paths } = explore(s)
      expect(problems).toEqual([])
      expect(paths).toBeGreaterThan(0)
      expect(s.nodes.map((n) => n.id).filter((id) => !reached.has(id))).toEqual([])
    })
  }
})
