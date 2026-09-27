import { describe, expect, it } from 'vitest'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { diagrams } from '../diagrams/stage13'
import { sims } from '../sims/stage13'
import {
  CHALLENGES, EDGES, G, PULLEYS, SYSTEMS, actualMA, evaluateRig, idealMA, legFactor, legForce, loadPull,
  pulleyCount, redirectForce, scoreRig, simpleMA, strandTensions, type Rig,
} from '../sims/stage13/haulModel'

const sys = (id: string) => SYSTEMS.find((s) => s.id === id)!
const ch = (id: string) => CHALLENGES.find((c) => c.id === id)!.situation
const rig = (p: Partial<Rig>): Rig => ({ system: '3:1', pulley: 'efficient', edge: 'roller', redirect: false, redirectAngle: 30, anchorAngle: 60, ...p })

describe('mechanical advantage', () => {
  it('ideal MA counts rope parts and multiplies for compound systems', () => {
    expect(idealMA(sys('1:1'))).toBe(1)
    expect(idealMA(sys('3:1'))).toBe(3)
    expect(idealMA(sys('6:1c'))).toBe(6)
    expect(idealMA(sys('9:1c'))).toBe(9)
    expect(pulleyCount(sys('9:1c'))).toBe(4)
    expect(pulleyCount(sys('5:1'))).toBe(4)
  })
  it('frictionless pulleys give the ideal MA', () => {
    for (const s of SYSTEMS) expect(actualMA(s, 1)).toBeCloseTo(idealMA(s), 10)
  })
  it('friction compounds at every pulley', () => {
    expect(simpleMA(3, 0.9)).toBeCloseTo(2.71, 10)
    expect(simpleMA(2, 0.9)).toBeCloseTo(1.9, 10)
    expect(actualMA(sys('9:1c'), 0.9)).toBeCloseTo(2.71 * 2.71, 6)
    // Carabiner "pulleys" (capstan μ≈0.2 over 180°) lose about half at each turn.
    expect(PULLEYS.carabiner.eff).toBeCloseTo(0.534, 2)
    expect(actualMA(sys('3:1'), PULLEYS.carabiner.eff)).toBeLessThan(1.9)
    // Efficiency (actual / ideal) falls as the system grows.
    const effOf = (id: string) => actualMA(sys(id), 0.85) / idealMA(sys(id))
    expect(effOf('2:1')).toBeGreaterThan(effOf('3:1'))
    expect(effOf('3:1')).toBeGreaterThan(effOf('5:1'))
  })
  it('rope-part tensions fall geometrically from the haul strand', () => {
    const t = strandTensions(3, 0.9, 100)
    expect(t).toHaveLength(3)
    expect(t[0]).toBe(100)
    expect(t[2]).toBeCloseTo(81, 10)
  })
})

describe('loads, edges and anchors', () => {
  it('load pull: weight when hanging, friction only on the flat', () => {
    expect(loadPull(100, 90, 0.3)).toBeCloseTo(100 * G, 6)
    expect(loadPull(100, 0, 0.3)).toBeCloseTo(0.3 * 100 * G, 6)
    expect(loadPull(100, 30, 0)).toBeCloseTo(50 * G, 6)
  })
  it('edge friction follows the capstan model', () => {
    expect(EDGES.free.eff).toBe(1)
    expect(EDGES.padded.eff).toBeCloseTo(Math.exp(-0.3 * Math.PI / 2), 10)
    expect(EDGES.bare.eff).toBeLessThan(EDGES.padded.eff)
  })
  it('two-leg anchor forces grow with the included angle', () => {
    expect(legForce(1000, 0)).toBeCloseTo(500, 6)
    expect(legForce(1000, 60)).toBeCloseTo(577.4, 1)
    expect(legForce(1000, 90)).toBeCloseTo(707.1, 1)
    expect(legForce(1000, 120)).toBeCloseTo(1000, 6)
    expect(legFactor(150)).toBeCloseTo(1.93, 2)
    expect(legFactor(170)).toBeGreaterThan(5.7)
    expect(legForce(1000, 180)).toBe(Infinity)
  })
  it('a redirect pulley carries the vector sum of its two strands', () => {
    expect(redirectForce(1, 1, 0)).toBeCloseTo(2, 10)
    expect(redirectForce(1, 1, 90)).toBeCloseTo(Math.SQRT2, 10)
    expect(redirectForce(1, 1, 120)).toBeCloseTo(1, 10)
    expect(redirectForce(1, 1, 180)).toBeCloseTo(0, 6)
  })
  it('anchor force = load-line tension minus haul input, plus any redirect', () => {
    const s = ch('vertical')
    const r = evaluateRig(rig({}), s)
    expect(r.anchorForce).toBeCloseTo(r.lineTension - r.haulForce, 6)
    expect(r.haulForce * r.actual).toBeCloseTo(r.lineTension, 6)
    const rr = evaluateRig(rig({ redirect: true, redirectAngle: 0 }), s)
    expect(rr.actual).toBeCloseTo(r.actual * PULLEYS.efficient.eff, 10)
    expect(rr.anchorForce).toBeGreaterThan(r.anchorForce)
    expect(rr.redirectLoad).toBeCloseTo(rr.haulForce * (1 + PULLEYS.efficient.eff), 6)
    expect(rr.ropeTravel).toBe(3)
  })
})

describe('challenges', () => {
  it('free-hanging raise: 3:1 with good pulleys and a roller works with two haulers', () => {
    const sc = scoreRig(rig({}), ch('vertical'))
    expect(sc.result.feasible).toBe(true)
    expect(sc.score).toBeGreaterThanOrEqual(90)
  })
  it('the same 3:1 with carabiners, or over a padded edge, needs more people than there are', () => {
    expect(scoreRig(rig({ pulley: 'carabiner' }), ch('vertical')).result.feasible).toBe(false)
    expect(scoreRig(rig({ pulley: 'carabiner' }), ch('vertical')).score).toBeLessThanOrEqual(30)
    expect(scoreRig(rig({ edge: 'padded' }), ch('vertical')).result.feasible).toBe(false)
    expect(scoreRig(rig({ edge: 'padded', system: '6:1c' }), ch('vertical')).result.feasible).toBe(true)
  })
  it('over-building, bare edges and wide anchor angles all cost points', () => {
    const s = ch('pack')
    const simple = scoreRig(rig({ system: '1:1' }), s).score
    expect(simple).toBeGreaterThanOrEqual(90)
    expect(scoreRig(rig({ system: '9:1c' }), s).score).toBeLessThan(simple)
    expect(scoreRig(rig({ system: '1:1', edge: 'bare' }), s).score).toBeLessThanOrEqual(70)
    expect(scoreRig(rig({ system: '1:1', anchorAngle: 150 }), s).score).toBeLessThan(scoreRig(rig({ system: '1:1', anchorAngle: 100 }), s).score)
  })
  it('low-angle litter: a 2:1 is the right size of system', () => {
    const s = ch('litter')
    expect(scoreRig(rig({ system: '2:1' }), s).score).toBeGreaterThanOrEqual(90)
    expect(evaluateRig(rig({ system: '1:1' }), s).feasible).toBe(false)
  })
})

describe('stage 13 components render', () => {
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
