import { describe, expect, it } from 'vitest'
import { DESIGNS, ENVIRONMENTS, buildTime, defaultChoice, envById, orientFactor, simulate } from '../sims/stage5/shelterModel'
import type { Choice, EnvId } from '../sims/stage5/shelterModel'
import { stage5 } from '../content/stages/stage5'

const run = (env: EnvId, ch: Partial<Choice>) => {
  const e = envById(env)
  return simulate(e, { ...defaultChoice(e), ...ch })
}

describe('shelter-builder model: data integrity', () => {
  it('every environment offers only defined designs, has sites and one hour per step', () => {
    for (const e of ENVIRONMENTS) {
      expect(e.sites.length).toBeGreaterThanOrEqual(4)
      for (const d of e.designs) expect(DESIGNS).toHaveProperty(d)
      expect(e.hours.length).toBeGreaterThanOrEqual(10)
      expect(new Set(e.sites.map((s) => s.id)).size).toBe(e.sites.length)
    }
  })
  it('scores stay within 0–100 for every site × design combination', () => {
    for (const e of ENVIRONMENTS)
      for (const s of e.sites)
        for (const d of e.designs) {
          const r = simulate(e, { ...defaultChoice(e), site: s.id, design: d })
          expect(r.score).toBeGreaterThanOrEqual(0)
          expect(r.score).toBeLessThanOrEqual(100)
          expect(Number.isFinite(r.coldDebt)).toBe(true)
        }
  })
})

describe('shelter-builder model: physics directions', () => {
  it('orientation: back to the wind beats side-on beats facing into it', () => {
    expect(orientFactor('E', 'W')).toBe(1)
    expect(orientFactor('N', 'W')).toBe(0.7)
    expect(orientFactor('W', 'W')).toBe(0.3)
  })
  it('a thick leaf bed cuts conduction to the ground several-fold', () => {
    const none = run('forest', { site: 'bench', bed: 'none', bedCm: 0, pad: false })
    const thick = run('forest', { site: 'bench', bed: 'leaves', bedCm: 30, pad: false })
    const cond = (r: typeof none) => r.hours.reduce((a, h) => a + h.cond, 0)
    expect(cond(thick)).toBeLessThan(cond(none) / 4)
    expect(thick.coldDebt).toBeLessThan(none.coldDebt)
  })
  it('an open side facing into the storm is colder and wetter than one facing downwind', () => {
    const good = run('forest', { site: 'bench', design: 'leanto', opening: 'E', bed: 'leaves', bedCm: 30 })
    const bad = run('forest', { site: 'bench', design: 'leanto', opening: 'W', bed: 'leaves', bedCm: 30 })
    expect(bad.coldDebt).toBeGreaterThan(good.coldDebt)
    expect(bad.meanWet).toBeGreaterThan(good.meanWet)
  })
  it('a hollow on a clearing night is colder than the mid-slope bench (cold-air pooling)', () => {
    const hollow = run('forest', { site: 'hollow', bed: 'leaves', bedCm: 30 })
    const bench = run('forest', { site: 'bench', bed: 'leaves', bedCm: 30 })
    const last = (r: typeof hollow) => r.hours[r.hours.length - 1].tOut
    expect(last(hollow)).toBeLessThan(last(bench) - 3)
  })
  it('a quinzhee with 30 cm walls stays far warmer inside than the outside air, and near or below 0 °C', () => {
    const r = run('snow', { site: 'edge', design: 'quinzhee', bed: 'boughs', bedCm: 20, wallCm: 30 })
    for (const h of r.hours) {
      expect(h.tIn).toBeLessThanOrEqual(0.01)
      expect(h.tIn - h.tOut).toBeGreaterThan(8)
    }
  })
  it('in the snow, a quinzhee beats a tarp A-frame, which beats lying in the open', () => {
    const q = run('snow', { site: 'edge', design: 'quinzhee', bed: 'boughs', bedCm: 20, wallCm: 30 })
    const a = run('snow', { site: 'edge', design: 'aframe', bed: 'boughs', bedCm: 20 })
    const n = run('snow', { site: 'lake', design: 'none', bed: 'none', bedCm: 0 })
    expect(q.coldDebt).toBeLessThan(a.coldDebt)
    expect(a.coldDebt).toBeLessThan(n.coldDebt)
  })
  it('a double roof reduces afternoon sweat compared with a single sheet on the open flat', () => {
    const one = run('desert', { site: 'flat', design: 'shade1', bed: 'clothing' })
    const two = run('desert', { site: 'flat', design: 'shade2', bed: 'clothing' })
    const daySweat = (r: typeof one) => r.hours.slice(0, 6).reduce((a, h) => a + h.sweat, 0)
    expect(daySweat(two)).toBeLessThan(daySweat(one))
  })
  it('no shade in the desert afternoon means a large heat load and more water lost', () => {
    const open = run('desert', { site: 'flat', design: 'none', bed: 'none', bedCm: 0 })
    const shade = run('desert', { site: 'acacia', design: 'shade2', bed: 'clothing' })
    expect(open.heatLoad).toBeGreaterThan(shade.heatLoad + 300)
    expect(open.water).toBeGreaterThan(shade.water)
  })
  it('working hard in the heat costs litres of sweat', () => {
    const e = envById('desert')
    const hard = buildTime(e, { ...defaultChoice(e), site: 'acacia', design: 'dugout', pace: 'hard' })
    const steady = buildTime(e, { ...defaultChoice(e), site: 'acacia', design: 'dugout', pace: 'steady' })
    expect(hard.effort).toBeLessThan(steady.effort)
    expect(hard.sweat).toBeGreaterThan(steady.sweat * 2)
  })
})

describe('shelter-builder model: time, hazards and scoring', () => {
  it('scarce materials make the same structure take longer', () => {
    const e = envById('forest')
    const bench = buildTime(e, { ...defaultChoice(e), site: 'bench', design: 'debris', wallCm: 60 })
    const ridge = buildTime(e, { ...defaultChoice(e), site: 'ridge', design: 'debris', wallCm: 60 })
    expect(ridge.effort).toBeGreaterThan(bench.effort * 1.5)
    expect(ridge.overflow).toBeGreaterThan(0)
  })
  it('a huge build overruns the light and leaves the structure unfinished', () => {
    const e = envById('forest')
    const b = buildTime(e, { ...defaultChoice(e), site: 'ridge', design: 'debris', wallCm: 120, bedCm: 40 })
    expect(b.completion).toBeLessThan(1)
  })
  it('sleeping in a flood path, under a dead snag or in avalanche terrain is critical', () => {
    expect(run('forest', { site: 'hollow' }).critical).toBe(true)
    expect(run('forest', { site: 'snag' }).critical).toBe(true)
    expect(run('snow', { site: 'drift', design: 'quinzhee' }).critical).toBe(true)
    expect(run('tropical', { site: 'bank' }).critical).toBe(true)
    expect(run('forest', { site: 'bench' }).critical).toBe(false)
  })
  it('a flame in an unvented snow shelter is a lethal carbon-monoxide risk; a vent and no flame removes it', () => {
    const bad = run('snow', { site: 'edge', design: 'quinzhee', vent: false, heat: 'stove' })
    const good = run('snow', { site: 'edge', design: 'quinzhee', vent: true, heat: 'none' })
    expect(bad.hazards.find((h) => h.id === 'co')?.happened).toBe(true)
    expect(bad.critical).toBe(true)
    expect(good.hazards.find((h) => h.id === 'co')).toBeUndefined()
  })
  it('thin or unsintered quinzhee walls collapse', () => {
    expect(run('snow', { site: 'edge', design: 'quinzhee', wallCm: 15 }).hazards.find((h) => h.id === 'collapse')?.happened).toBe(true)
    expect(run('snow', { site: 'edge', design: 'quinzhee', sinter: false }).hazards.find((h) => h.id === 'collapse')?.happened).toBe(true)
    expect(run('snow', { site: 'edge', design: 'quinzhee', wallCm: 30, sinter: true }).hazards.find((h) => h.id === 'collapse')).toBeUndefined()
  })
  it('a high tarp pitched open to a gale on the ridge blows out', () => {
    const r = run('forest', { site: 'ridge', design: 'leanto', opening: 'W', pitch: 'high' })
    expect(r.structuralFailure).not.toBeNull()
  })
  it('a mosquito net and a raised bed cut the insect risk in the tropics', () => {
    const open = run('tropical', { site: 'ants', design: 'aframe', net: false })
    const netted = run('tropical', { site: 'ants', design: 'platform', net: true })
    const risk = (r: typeof open) => r.hazards.find((h) => h.id === 'insects')?.risk ?? 0
    expect(risk(netted)).toBeLessThan(risk(open) / 4)
  })
  it('good choices score well in every environment; poor ones score badly', () => {
    const good: [EnvId, Partial<Choice>][] = [
      ['forest', { site: 'bench', design: 'debris', bed: 'leaves', bedCm: 30, wallCm: 60 }],
      ['snow', { site: 'edge', design: 'quinzhee', bed: 'boughs', bedCm: 20, wallCm: 30 }],
      ['desert', { site: 'acacia', design: 'shade2', bed: 'clothing' }],
      ['tropical', { site: 'rise', design: 'platform', bed: 'fronds', bedCm: 10 }],
    ]
    const bad: [EnvId, Partial<Choice>][] = [
      ['forest', { site: 'ridge', design: 'none', bed: 'none', bedCm: 0, pad: false }],
      ['snow', { site: 'lake', design: 'none', bed: 'none', bedCm: 0 }],
      ['desert', { site: 'flat', design: 'none', bed: 'none', bedCm: 0 }],
      ['tropical', { site: 'bank', design: 'none', bed: 'none', bedCm: 0, net: false }],
    ]
    for (const [e, c] of good) expect(run(e, c).score, e).toBeGreaterThanOrEqual(75)
    for (const [e, c] of bad) expect(run(e, c).score, e).toBeLessThanOrEqual(35)
  })
})

describe('stage 5 content', () => {
  it('has 7 lessons in outline order and a 8–12 question review', () => {
    expect(stage5.lessons.map((l) => l.id)).toEqual(['s5-l1', 's5-l2', 's5-l3', 's5-l4', 's5-l5', 's5-l6', 's5-l7'])
    expect(stage5.review.length).toBeGreaterThanOrEqual(8)
    expect(stage5.review.length).toBeLessThanOrEqual(12)
  })
  it('every lesson meets the authoring contract', () => {
    for (const l of stage5.lessons) {
      expect(l.objectives.length, l.id).toBeGreaterThanOrEqual(3)
      expect(l.objectives.length, l.id).toBeLessThanOrEqual(5)
      expect(l.quiz.length, l.id).toBeGreaterThanOrEqual(4)
      expect(l.quiz.length, l.id).toBeLessThanOrEqual(7)
      expect(l.exercises.length, l.id).toBeGreaterThanOrEqual(1)
      expect(l.scenario.choices.length, l.id).toBeGreaterThanOrEqual(3)
      for (const q of l.quiz) {
        expect(q.id.startsWith(`${l.id}-q`), q.id).toBe(true)
        if (q.kind === 'single' || q.kind === 'multi') for (const c of q.choices) expect(c.why.length, `${q.id}/${c.id}`).toBeGreaterThan(0)
      }
      for (const e of l.exercises) expect(e.id.startsWith(`${l.id}-e`), e.id).toBe(true)
      expect(l.scenario.id).toBe(`${l.id}-sc`)
    }
  })
})
