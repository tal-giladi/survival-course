import { useState } from 'react'
import type { SimProps } from '../types'
import { CHALLENGES, REFLECTORS, evaluateMirror, type AimMethod } from './mirrorModel'

// Signal Mirror: for each situation choose a reflector from what you have, an aiming method,
// whether to sweep, and where to stand. The model combines aiming probability with flash brightness
// (area × cos(θ/2) × reflectance, 1/d² and haze). Score = average detection probability.

const METHODS: { id: AimMethod; name: string }[] = [
  { id: 'none', name: 'Just point it roughly' },
  { id: 'v-finger', name: 'V-finger (or fist) aiming' },
  { id: 'sighting', name: 'Sight through the aiming hole' },
]

function Geometry({ deg }: { deg: number }) {
  // Mirror at centre; target to the right; Sun at angle deg from the target direction.
  const cx = 160
  const cy = 90
  const r = 70
  const a = (deg * Math.PI) / 180
  const sx = cx + r * Math.cos(-a)
  const sy = cy + r * Math.sin(-a)
  const nAng = -a / 2
  return (
    <svg className="diagram" viewBox="0 0 320 170" role="img" aria-label={`Sun–target angle ${deg} degrees; the mirror normal bisects the angle, effective area falls as the angle grows`}>
      <line x1={cx} y1={cy} x2={cx + r + 60} y2={cy} stroke="var(--accent)" strokeWidth="2" />
      <text x={cx + r + 40} y={cy - 6} fontSize="11" fontWeight="700">target</text>
      <line x1={cx} y1={cy} x2={sx} y2={sy} stroke="var(--accent-2)" strokeWidth="2" strokeDasharray="5 3" />
      <circle cx={sx} cy={sy} r="9" fill="var(--accent-2)" />
      <text x={sx} y={sy - 13} fontSize="11" textAnchor="middle">Sun</text>
      <line x1={cx} y1={cy} x2={cx + 40 * Math.cos(nAng)} y2={cy + 40 * Math.sin(nAng)} stroke="var(--muted)" strokeDasharray="2 3" />
      <line
        x1={cx - 18 * Math.cos(nAng + Math.PI / 2)} y1={cy - 18 * Math.sin(nAng + Math.PI / 2)}
        x2={cx + 18 * Math.cos(nAng + Math.PI / 2)} y2={cy + 18 * Math.sin(nAng + Math.PI / 2)}
        stroke="var(--text)" strokeWidth="5"
      />
      <text x={10} y={160} fontSize="11" className="muted-fill">θ = {deg}° · effective area × cos(θ/2) = {Math.cos(a / 2).toFixed(2)}</text>
    </svg>
  )
}

export function SignalMirror({ onScore }: SimProps) {
  const [i, setI] = useState(0)
  const c = CHALLENGES[i]
  const [refl, setRefl] = useState(c.kit[0])
  const [method, setMethod] = useState<AimMethod>('none')
  const [sweep, setSweep] = useState(false)
  const [moved, setMoved] = useState(false)
  const [shown, setShown] = useState(false)
  const [scores, setScores] = useState<number[]>([])

  const reflector = REFLECTORS.find((r) => r.id === refl)!
  const deg = moved && c.betterDeg ? c.betterDeg : c.sunTargetDeg
  const r = evaluateMirror({ reflector, sunTargetDeg: deg, distanceKm: c.distanceKm, visibilityKm: c.visibilityKm, sky: c.sky, method, sweep })
  const finished = scores.length === CHALLENGES.length

  const flash = () => {
    setShown(true)
    const next = [...scores, Math.round(r.detect * 100)]
    setScores(next)
    if (next.length === CHALLENGES.length) onScore(Math.round(next.reduce((a, b) => a + b, 0) / next.length))
  }
  const nextChallenge = () => {
    const n = CHALLENGES[i + 1]
    setI(i + 1)
    setRefl(n.kit[0])
    setMethod('none')
    setSweep(false)
    setMoved(false)
    setShown(false)
  }
  const restart = () => {
    setI(0)
    setRefl(CHALLENGES[0].kit[0])
    setMethod('none')
    setSweep(false)
    setMoved(false)
    setShown(false)
    setScores([])
  }

  return (
    <div>
      <p className="muted small">Situation {i + 1} of {CHALLENGES.length}. Distance {c.distanceKm} km · visibility {c.visibilityKm} km · {c.sky === 'clear' ? 'full sun' : c.sky === 'thin-cloud' ? 'sun dimmed by thin cloud' : 'overcast'}.</p>
      <div className="callout callout-info">{c.text}</div>

      <div className="controls">
        <div className="control">
          <label>What you have</label>
          <div className="chip-group">
            {c.kit.map((id) => {
              const x = REFLECTORS.find((q) => q.id === id)!
              return <button key={id} disabled={shown} className={`chip ${refl === id ? 'on' : ''}`} onClick={() => setRefl(id)}>{x.name}</button>
            })}
          </div>
          <span className="muted small">{reflector.note}</span>
        </div>
        <div className="control">
          <label>Aiming</label>
          <select value={method} disabled={shown} onChange={(e) => setMethod(e.target.value as AimMethod)}>
            {METHODS.map((mm) => <option key={mm.id} value={mm.id}>{mm.name}</option>)}
          </select>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={sweep} disabled={shown} onChange={(e) => setSweep(e.target.checked)} /> Sweep the flash slowly a few degrees back and forth across the target</label>
        </div>
        {c.betterDeg !== undefined && (
          <div className="control">
            <label><input type="checkbox" checked={moved} disabled={shown} onChange={(e) => setMoved(e.target.checked)} /> Move a few metres along the headland so the Sun is more to your side</label>
          </div>
        )}
      </div>

      <Geometry deg={deg} />

      {!shown ? (
        <button className="btn primary" onClick={flash}>Flash!</button>
      ) : (
        <div className="sim-result">
          <div className="score">{Math.round(r.detect * 100)}%</div>
          <div className="small">Chance the target notices your flash during this attempt.</div>
          <div className="small">Beam reaches the target: {Math.round(r.aim * 100)}%<div className="bar"><div style={{ width: `${r.aim * 100}%` }} /></div></div>
          <div className="small">Bright enough at {c.distanceKm} km: {Math.round(r.bright * 100)}%<div className="bar"><div style={{ width: `${r.bright * 100}%` }} /></div></div>
          <p className="small">
            Effective area {(r.aEff * 1e4).toFixed(0)} cm² · flash footprint at the target ≈ {Math.round(r.footprint)} m wide ·
            illuminance {r.lux.toExponential(1)} lux · model range with this reflector and position ≈ {r.range.toFixed(0)} km.
          </p>
          {r.notes.length > 0 && <ul className="small">{r.notes.map((n) => <li key={n}>{n}</li>)}</ul>}
          {!finished ? (
            <button className="btn primary" onClick={nextChallenge}>Next situation</button>
          ) : (
            <>
              <p><strong>Average: {Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)}%.</strong> Aiming technique and a slow sweep matter more than the reflector at short range; area, reflectance and Sun position decide the long-range cases.</p>
              <button className="btn" onClick={restart}>Try again</button>
            </>
          )}
        </div>
      )}
      <p className="muted small">Model, not a guarantee: brightness uses a clear-sky Sun, a simple haze law and an assumed noticing threshold. Never flash aircraft, vehicles or people except in a real emergency.</p>
    </div>
  )
}
