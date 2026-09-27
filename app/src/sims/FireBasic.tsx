import { useState } from 'react'
import type { SimProps } from './registry'

// Fire Builder: three-stage ignition model — tinder catches → kindling takes over → fuel sustains.
// Each stage has a probability built from material dryness, fineness, lay, weather and preparation.
// Score is based on the probability (good decisions), not on the dice roll (luck).

const WEATHER = {
  dry: { name: 'Dry and calm', wet: 0, wind: 0.1 },
  damp: { name: 'Damp, overcast', wet: 0.4, wind: 0.2 },
  rain: { name: 'Steady rain', wet: 0.9, wind: 0.3 },
  windy: { name: 'Dry and very windy', wet: 0, wind: 1 },
}
type W = keyof typeof WEATHER

const TINDER = {
  cottonPJ: { name: 'Cotton wool + petroleum jelly (carried)', ignite: { lighter: 0.97, ferro: 0.93, matches: 0.95 }, burn: 1, wetResist: 0.9 },
  birch: { name: 'Birch bark shavings', ignite: { lighter: 0.9, ferro: 0.7, matches: 0.85 }, burn: 0.8, wetResist: 0.7 },
  grass: { name: 'Dry grass nest', ignite: { lighter: 0.9, ferro: 0.75, matches: 0.85 }, burn: 0.4, wetResist: 0.1 },
  groundLeaves: { name: 'Leaves from the ground', ignite: { lighter: 0.5, ferro: 0.2, matches: 0.4 }, burn: 0.3, wetResist: 0 },
  none: { name: 'No tinder — straight onto twigs', ignite: { lighter: 0.25, ferro: 0.02, matches: 0.15 }, burn: 0.2, wetResist: 0 },
}
type T = keyof typeof TINDER

const KINDLING = {
  standingTwigs: { name: 'Dead twigs snapped from trees (pencil-lead → pencil)', dry: 0.9, fine: 1 },
  featherSticks: { name: 'Feather sticks from split dead wood', dry: 1, fine: 0.9 },
  groundTwigs: { name: 'Twigs picked up off the ground', dry: 0.4, fine: 0.9 },
  green: { name: 'Live green branches', dry: 0.1, fine: 0.7 },
  thumb: { name: 'Only thumb-thick sticks', dry: 0.8, fine: 0.2 },
}
type K = keyof typeof KINDLING

const FUEL = {
  standing: { name: 'Dead standing wood, wrist-thick, some split', dry: 0.9 },
  groundLogs: { name: 'Logs from the wet ground', dry: 0.35 },
  green: { name: 'Green, freshly cut wood', dry: 0.15 },
  big: { name: 'Big dry logs, nothing in between', dry: 0.8 },
}
type F = keyof typeof FUEL

const LAY = {
  teepee: { name: 'Teepee', start: 1, wind: 0.6, sustain: 0.85 },
  leanto: { name: 'Lean-to against a log', start: 0.9, wind: 1, sustain: 0.85 },
  logcabin: { name: 'Log cabin', start: 0.75, wind: 0.7, sustain: 1 },
  pile: { name: 'Random pile', start: 0.55, wind: 0.5, sustain: 0.6 },
}
type L = keyof typeof LAY

const PLACE = {
  soil: { name: 'Bare mineral soil / existing fire ring, sheltered', risk: 0, wetGround: 0.1, shelter: 0.6, note: '' },
  platform: { name: 'On a platform of dry sticks over wet ground', risk: 0.05, wetGround: 0, shelter: 0.3, note: '' },
  open: { name: 'Open, exposed spot', risk: 0.2, wetGround: 0.3, shelter: 0, note: 'Sparks may be blown downwind.' },
  wetground: { name: 'Directly on wet ground', risk: 0, wetGround: 0.8, shelter: 0.3, note: '' },
  litter: { name: 'On deep leaf litter / peat', risk: 0.8, wetGround: 0.4, shelter: 0.4, note: 'Fire can creep and smoulder underground for days.' },
  branches: { name: 'Under low overhanging branches', risk: 0.7, wetGround: 0.2, shelter: 0.8, note: 'Flames and heat can ignite the canopy.' },
}
type P = keyof typeof PLACE

type Ign = 'lighter' | 'ferro' | 'matches'

export function fireModel(o: { w: W; t: T; k: K; f: F; l: L; p: P; ign: Ign; prep: boolean }) {
  const W_ = WEATHER[o.w]
  const place = PLACE[o.p]
  const lay = LAY[o.l]
  const wind = W_.wind * (1 - place.shelter) * (1 - (lay.wind - 0.5))
  const wetOnTinder = W_.wet * (1 - TINDER[o.t].wetResist) * (1 - place.shelter * 0.5)
  let ignition = TINDER[o.t].ignite[o.ign] * (1 - wetOnTinder * 0.8) * (1 - Math.max(0, wind - 0.3) * (o.ign === 'ferro' ? 0.2 : 0.6))
  if (o.ign === 'lighter' && W_.wet > 0.5) ignition *= 0.85 // cold wet fingers, wet lighter
  const kin = KINDLING[o.k]
  const kinDry = kin.dry * (1 - W_.wet * 0.35) * (1 - place.wetGround * 0.3)
  let takeover = Math.min(1, 0.15 + TINDER[o.t].burn * 0.35 + kin.fine * 0.25 + kinDry * 0.35) * lay.start * (1 - Math.max(0, wind - 0.4) * 0.5)
  takeover *= kinDry < 0.3 ? 0.4 : 1
  const fuelDry = FUEL[o.f].dry * (1 - W_.wet * 0.25) * (1 - place.wetGround * 0.4)
  let sustain = Math.min(1, 0.2 + fuelDry * 0.8) * lay.sustain * (o.f === 'big' ? 0.55 : 1)
  if (!o.prep) {
    takeover *= 0.7
    sustain *= 0.75
  }
  ignition = Math.max(0, Math.min(1, ignition))
  takeover = Math.max(0, Math.min(1, takeover))
  sustain = Math.max(0, Math.min(1, sustain))
  const success = ignition * takeover * sustain
  const risk = Math.min(1, place.risk + (o.w === 'windy' && o.p !== 'soil' ? 0.3 : 0))
  return { ignition, takeover, sustain, success, risk, riskNote: place.note }
}

function Flame({ stage }: { stage: number }) {
  // stage: 0 nothing, 1 tinder flame, 2 kindling burning, 3 established fire
  const h = [0, 20, 50, 90][stage]
  return (
    <svg viewBox="0 0 200 140" width="220" height="150" role="img" aria-label="Fire state">
      <rect y="120" width="200" height="20" fill="var(--ground)" opacity="0.6" />
      <path d="M60,120 L100,60 L140,120" fill="none" stroke="var(--ground)" strokeWidth="5" />
      <path d="M75,120 L100,75 L125,120" fill="none" stroke="var(--ground)" strokeWidth="3" />
      {stage > 0 && (
        <g className="flame">
          <path d={`M${100 - h / 3},120 Q${100 - h / 2},${120 - h * 0.6} 100,${120 - h} Q${100 + h / 2},${120 - h * 0.6} ${100 + h / 3},120 Z`} fill="#f39c33" opacity="0.9">
            <animate attributeName="opacity" values="0.75;1;0.8" dur="0.6s" repeatCount="indefinite" />
          </path>
          <path d={`M${100 - h / 6},120 Q${100 - h / 4},${120 - h * 0.35} 100,${120 - h * 0.6} Q${100 + h / 4},${120 - h * 0.35} ${100 + h / 6},120 Z`} fill="#ffd966" />
        </g>
      )}
      {stage === 0 && <text x="100" y="100" textAnchor="middle" fontSize="12" className="muted-fill">cold</text>}
    </svg>
  )
}

export function FireBasic({ onScore }: SimProps) {
  const [o, setO] = useState({ w: 'damp' as W, t: 'birch' as T, k: 'standingTwigs' as K, f: 'standing' as F, l: 'teepee' as L, p: 'soil' as P, ign: 'lighter' as Ign, prep: true })
  const [out, setOut] = useState<null | { stage: number; msg: string[] }>(null)
  const m = fireModel(o)
  const set = (patch: Partial<typeof o>) => {
    setO({ ...o, ...patch })
    setOut(null)
  }

  const strike = () => {
    const msg: string[] = []
    let stage = 0
    if (Math.random() < m.ignition) {
      stage = 1
      msg.push('The tinder caught.')
      if (Math.random() < m.takeover) {
        stage = 2
        msg.push('Flames climbed into the kindling.')
        if (Math.random() < m.sustain) {
          stage = 3
          msg.push('The fuel caught — the fire is self-sustaining.')
        } else msg.push('The kindling burned out before the fuel caught. Too wet, too big a jump in size, or not enough material ready?')
      } else msg.push('The tinder flared and died. The kindling was too wet, too thick, or the wind stole the heat.')
    } else msg.push('No ignition. Check tinder quality, dryness, wind and your ignition method.')
    if (m.risk > 0.5) msg.push(`⚠️ Unsafe placement: ${m.riskNote}`)
    const score = Math.round(m.success * 100 * (1 - m.risk * 0.6))
    onScore(score)
    setOut({ stage, msg })
  }

  const sel = <X extends string>(label: string, value: X, opts: Record<X, { name: string }>, key: keyof typeof o) => (
    <div className="control">
      <label>{label}</label>
      <select value={value} onChange={(e) => set({ [key]: e.target.value } as Partial<typeof o>)}>
        {(Object.keys(opts) as X[]).map((k) => <option key={k} value={k}>{opts[k].name}</option>)}
      </select>
    </div>
  )

  return (
    <div>
      <div className="callout callout-law">Virtual practice only. For real fires, follow the legal and safety rules in lesson 11.</div>
      <div className="controls">
        {sel('Weather', o.w, WEATHER, 'w')}
        {sel('Tinder', o.t, TINDER, 't')}
        {sel('Kindling', o.k, KINDLING, 'k')}
        {sel('Fuel', o.f, FUEL, 'f')}
        {sel('Fire lay', o.l, LAY, 'l')}
        {sel('Placement', o.p, PLACE, 'p')}
        <div className="control">
          <label>Ignition</label>
          <select value={o.ign} onChange={(e) => set({ ign: e.target.value as Ign })}>
            <option value="lighter">Lighter</option>
            <option value="ferro">Ferro rod</option>
            <option value="matches">Stormproof matches</option>
          </select>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={o.prep} onChange={(e) => set({ prep: e.target.checked })} /> Full fuel ladder gathered before striking</label>
        </div>
      </div>
      <button className="btn primary" onClick={strike}>🔥 Strike</button>
      <div className="grid-2">
        <div>{out && <Flame stage={out.stage} />}</div>
        <div className="sim-result">
          <div><strong>Stage probabilities (from your choices):</strong></div>
          {[['Tinder catches', m.ignition], ['Kindling takes over', m.takeover], ['Fuel sustains', m.sustain]].map(([l, v]) => (
            <div key={l as string} className="small">
              {l}: {Math.round((v as number) * 100)}%
              <div className="bar"><div style={{ width: `${(v as number) * 100}%` }} /></div>
            </div>
          ))}
          <div>Overall: <strong>{Math.round(m.success * 100)}%</strong> · Safety risk: <strong style={{ color: m.risk > 0.5 ? 'var(--bad)' : undefined }}>{m.risk > 0.5 ? 'high' : m.risk > 0.1 ? 'moderate' : 'low'}</strong></div>
          {out && <ul>{out.msg.map((x) => <li key={x}>{x}</li>)}</ul>}
        </div>
      </div>
    </div>
  )
}
