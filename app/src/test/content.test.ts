import { describe, expect, it } from 'vitest'
import { lessons } from '../content/lessons'
import { stages } from '../content/curriculum'
import { references } from '../content/references'
import { skills } from '../content/skills'
import { scenarios } from '../content/scenarios'
import { stageReviews } from '../content/reviews'
import { conceptLabel } from '../content/labels'
import { model } from '../sims/heatModel'

// Content integrity: every id a lesson points at must exist, so broken links are caught at build time.
const DIAGRAMS = ['decision-loop', 'stage-graph', 'rule-of-threes', 'risk-matrix', 'stress-curve', 'heat-loss', 'layering', 'kit-tiers', 'shelter-sites', 'tarp-configs', 'fire-triangle', 'fire-ladder', 'water-methods', 'ground-to-air', 'first-hour']
const SIMS = ['priority-triage', 'heat-balance', 'kit-builder', 'shelter-site', 'fire-basic', 'water-treatment', 'signal-detect', 'scenario-lost-1400']
const refIds = new Set(references.map((r) => r.id))
const outlineIds = new Set(stages.flatMap((s) => s.outline.map((o) => o.id)))

describe('curriculum', () => {
  it('has 19 stages with unique lesson ids and valid prerequisites', () => {
    expect(stages).toHaveLength(19)
    const all = stages.flatMap((s) => s.outline.map((o) => o.id))
    expect(new Set(all).size).toBe(all.length)
    for (const s of stages) for (const o of s.outline) for (const p of o.prerequisites) expect(outlineIds, `${o.id} → ${p}`).toContain(p)
  })
  it('every written lesson is in the outline of its stage', () => {
    for (const l of lessons) expect(stages.find((s) => s.n === l.stage)!.outline.map((o) => o.id)).toContain(l.id)
  })
  it('reference ids are unique', () => {
    expect(refIds.size).toBe(references.length)
  })
})

describe('lessons', () => {
  const qids = new Set<string>()
  for (const l of lessons) {
    it(`${l.id} is complete and consistent`, () => {
      expect(l.objectives.length).toBeGreaterThan(0)
      expect(l.explanation.length).toBeGreaterThan(0)
      expect(l.examples.length).toBeGreaterThan(0)
      expect(l.mistakes.length).toBeGreaterThan(0)
      expect(l.exercises.length).toBeGreaterThan(0)
      expect(l.quiz.length).toBeGreaterThanOrEqual(4)
      expect(l.summary.length).toBeGreaterThan(0)
      expect(l.references.length).toBeGreaterThan(0)
      for (const r of [...l.references, ...l.furtherReading]) expect(refIds, `${l.id} ref ${r}`).toContain(r)
      for (const p of l.prerequisites) expect(outlineIds).toContain(p)
      for (const b of [...l.explanation, ...(l.science ?? []), ...l.examples]) {
        if (b.type === 'diagram') expect(DIAGRAMS).toContain(b.id)
        if (b.type === 'sim') expect(SIMS).toContain(b.id)
      }
      for (const s of l.simulations ?? []) expect(SIMS).toContain(s)
      for (const e of l.exercises) if (e.skill) expect(skills.map((s) => s.id)).toContain(e.skill)
      for (const q of l.quiz) {
        expect(qids.has(q.id), `duplicate ${q.id}`).toBe(false)
        qids.add(q.id)
        if (q.diagram) expect(DIAGRAMS).toContain(q.diagram)
        for (const c of q.concepts) expect(conceptLabel, `concept ${c}`).toHaveProperty(c)
        if (q.kind === 'single') expect(q.choices.map((c) => c.id)).toContain(q.answer)
        if (q.kind === 'multi') for (const a of q.answer) expect(q.choices.map((c) => c.id)).toContain(a)
        if (q.kind === 'order') expect([...q.answer].sort()).toEqual(q.items.map((i) => i.id).sort())
      }
      expect(l.scenario.choices.map((c) => c.id)).toContain(l.scenario.best)
      for (const c of l.scenario.concepts) expect(conceptLabel).toHaveProperty(c)
    })
  }
  it('stage reviews reference known concepts', () => {
    for (const qs of Object.values(stageReviews)) for (const q of qs) for (const c of q.concepts) expect(conceptLabel).toHaveProperty(c)
  })
})

describe('scenarios', () => {
  for (const s of scenarios) {
    it(`${s.id} graph is closed and every path ends`, () => {
      const ids = new Set(s.nodes.map((n) => n.id))
      expect(ids).toContain(s.start)
      for (const n of s.nodes) {
        if (n.end) expect(n.options).toHaveLength(0)
        else expect(n.options.length).toBeGreaterThan(0)
        for (const o of n.options) expect(ids, `${n.id} → ${o.next}`).toContain(o.next)
      }
      // Every node reachable from start.
      const seen = new Set<string>([s.start])
      const stack = [s.start]
      while (stack.length) {
        const id = stack.pop()
        const n = s.nodes.find((x) => x.id === id)!
        for (const o of n.options) if (!seen.has(o.next)) { seen.add(o.next); stack.push(o.next) }
      }
      expect([...ids].filter((i) => !seen.has(i))).toEqual([])
    })
  }
})

describe('heat model', () => {
  const base = { ta: 5, wind: 20, rh: 70, wet: 'dry' as const, fibre: 'synthetic' as const, clo: 1.8, shell: true, act: 'rest', shelter: 'none' as const, sky: 'overcast' as const }
  it('wet cotton in wind loses far more heat than dry synthetic', () => {
    expect(model({ ...base, wet: 'soaked', fibre: 'cotton', shell: false }).S).toBeLessThan(model(base).S - 200)
  })
  it('a thick bed reduces conduction', () => {
    expect(model({ ...base, shelter: 'tarp-bed' }).cond).toBeLessThan(model(base).cond / 3)
  })
  it('resting in shade in the desert uses less water than walking in sun', () => {
    const d = { ...base, ta: 42, rh: 15, fibre: 'cotton' as const, clo: 1, shell: false }
    expect(model({ ...d, act: 'rest', shelter: 'tarp', sky: 'sun' }).waterLph).toBeLessThan(model({ ...d, act: 'walk', sky: 'sun' }).waterLph)
  })
})
