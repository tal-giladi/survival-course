import { describe, expect, it } from 'vitest'
import { dryToWetBasis, fireAdvanced, netHeat } from '../sims/stage3/fireAdvancedModel'
import type { FireInput } from '../sims/stage3/fireAdvancedModel'
import { bowDrill, bowSpeed, frictionPower } from '../sims/stage3/frictionModel'
import type { BowInput } from '../sims/stage3/frictionModel'
import { stage3 } from '../content/stages/stage3'
import { stages } from '../content/curriculum'

describe('fire-advanced model', () => {
  const base: FireInput = { weather: 'damp', tinder: 'birch', kindling: 'standingTwigs', fuel: 'hardSplit', lay: 'teepee', placement: 'ring', purpose: 'heat', reflector: false, stockKg: 15 }

  it('net heat falls with moisture and matches the worked example', () => {
    expect(netHeat(0)).toBeCloseTo(18.5, 1)
    // 20 % wet basis: 18.5·0.8 − 2.44·0.2 = 14.31 MJ/kg
    expect(netHeat(0.2)).toBeCloseTo(14.31, 2)
    expect(netHeat(0.5)).toBeLessThan(netHeat(0.2) / 1.5)
  })
  it('converts dry-basis to wet-basis moisture', () => {
    expect(dryToWetBasis(1)).toBeCloseTo(0.5)
    expect(dryToWetBasis(0.25)).toBeCloseTo(0.2)
  })
  it('wet ground fuel in rain rarely lights; prepared fuel on a platform does', () => {
    const bad = fireAdvanced({ ...base, weather: 'rain', fuel: 'groundLogs', kindling: 'groundTwigs', placement: 'wetGround' })
    const good = fireAdvanced({ ...base, weather: 'rain', fuel: 'hardSplit', kindling: 'featherSticks', placement: 'platform', tinder: 'cottonPJ', lay: 'leanTo' })
    expect(bad.success).toBeLessThan(0.1)
    expect(good.success).toBeGreaterThan(0.5)
    expect(bad.smoke).toBeGreaterThan(good.smoke)
  })
  it('a long-log fire with a reflector puts more heat on a person than a teepee', () => {
    const tp = fireAdvanced(base)
    const ll = fireAdvanced({ ...base, lay: 'longLog', reflector: true })
    expect(ll.usefulW).toBeGreaterThan(tp.usefulW * 2)
    expect(ll.suitability).toBeGreaterThan(tp.suitability)
  })
  it('log cabin beats teepee for cooking; star outlasts teepee overnight', () => {
    expect(fireAdvanced({ ...base, purpose: 'cook', lay: 'logCabin' }).score).toBeGreaterThan(fireAdvanced({ ...base, purpose: 'cook' }).score)
    const star = fireAdvanced({ ...base, purpose: 'overnight', lay: 'star' })
    const tp = fireAdvanced({ ...base, purpose: 'overnight' })
    expect(star.durationH).toBeGreaterThan(tp.durationH * 2)
    expect(star.score).toBeGreaterThan(tp.score)
  })
  it('unsafe placement is penalised', () => {
    const litter = fireAdvanced({ ...base, placement: 'litter' })
    expect(litter.risk).toBeGreaterThan(0.5)
    expect(litter.score).toBeLessThan(fireAdvanced(base).score)
  })
  it('heat curve rises, plateaus and decays after the stock is gone', () => {
    const r = fireAdvanced({ ...base, stockKg: 5 })
    expect(r.curve[0]).toBe(0)
    expect(Math.max(...r.curve)).toBeGreaterThan(r.peakKW * 0.8)
    expect(r.curve[r.curve.length - 1]).toBeLessThan(r.peakKW * 0.1)
  })
})

describe('friction-fire model', () => {
  const good: BowInput = { wood: 'cedar', dryness: 'air', diameter: 20, stroke: 60, rate: 1.5, force: 80, notch: 'good' }

  it('computes bow speed and friction power from P = μ·N·v', () => {
    expect(bowSpeed(60, 1.5)).toBeCloseTo(1.8)
    expect(frictionPower(0.4, 80, 1.2)).toBeCloseTo(38.4)
    const r = bowDrill(good)
    expect(r.vRub).toBeCloseTo((2 / 3) * 1.8)
    expect(r.frictionW).toBeGreaterThan(30)
    expect(r.frictionW).toBeLessThan(60)
  })
  it('a good set makes an ember within about a minute', () => {
    const r = bowDrill(good)
    expect(r.emberTime).not.toBeNull()
    expect(r.emberTime!).toBeLessThan(90)
    expect(r.probability).toBeGreaterThan(0.8)
  })
  it('green wood stalls near boiling and fails', () => {
    const r = bowDrill({ ...good, dryness: 'green' })
    expect(r.emberTime).toBeNull()
    expect(r.maxT).toBeLessThan(300)
  })
  it('oak and resinous pine glaze instead of making hot dust', () => {
    expect(bowDrill({ ...good, wood: 'oak' }).emberTime).toBeNull()
    expect(bowDrill({ ...good, wood: 'pine' }).emberTime).toBeNull()
  })
  it('without a notch the dust does not collect', () => {
    const r = bowDrill({ ...good, notch: 'none' })
    expect(r.emberTime).toBeNull()
    expect(r.probability).toBeLessThan(0.1)
  })
  it('a thick spindle runs cooler than a thin one at the same effort', () => {
    expect(bowDrill({ ...good, diameter: 30 }).maxT).toBeLessThan(bowDrill(good).maxT)
  })
  it('very hard, fast bowing exhausts the arm before long', () => {
    const r = bowDrill({ ...good, force: 170, rate: 3, stroke: 70 })
    expect(r.humanW).toBeGreaterThan(100)
    expect(r.timeToExhaustion).toBeLessThan(60)
  })
})

describe('stage 3 content', () => {
  it('matches the curriculum outline', () => {
    const outline = stages.find((s) => s.n === 3)!.outline
    expect(stage3.lessons.map((l) => l.id)).toEqual(outline.map((o) => o.id))
    stage3.lessons.forEach((l, k) => {
      expect(l.title).toBe(outline[k].title)
      expect(l.level).toBe(outline[k].level)
      expect(l.prerequisites).toEqual(outline[k].prerequisites)
      expect(l.stage).toBe(3)
    })
  })
  it('has 8–12 review questions and a law callout in every lesson', () => {
    expect(stage3.review.length).toBeGreaterThanOrEqual(8)
    expect(stage3.review.length).toBeLessThanOrEqual(12)
    for (const l of stage3.lessons) {
      expect(l.explanation.some((b) => b.type === 'callout' && b.tone === 'law'), l.id).toBe(true)
      expect(l.quiz.length).toBeGreaterThanOrEqual(4)
      expect(l.quiz.length).toBeLessThanOrEqual(7)
    }
  })
})
