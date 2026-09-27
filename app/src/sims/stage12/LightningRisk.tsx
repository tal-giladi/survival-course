import { useEffect, useRef, useState } from 'react'
import type { SimProps } from '../types'
import {
  BUCKETS, MAPS, STEP_MIN, WAIT_MIN, baselineDose, bucketFor, initialState, resume, retreat, riskBand, score, step, type Bucket, type LightningMap, type SimState,
} from './lightningModel'

// Lightning Risk: a timed decision sim. Flashes and thunder delays arrive in (accelerated) real time.
// Estimate distance with flash-to-bang, decide when to stop and where to go, and when it is safe to resume.

const START_CLOCK: Record<string, number> = { mountain: 13 * 60, lake: 15 * 60 + 30, field: 14 * 60 }
const clock = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(m % 60).padStart(2, '0')}`

function MapView({ map, s }: { map: LightningMap; s: SimState }) {
  const L = map.layout
  const px = (id: string): [number, number] => [(L[id]?.[0] ?? 50) * 4.8, (L[id]?.[1] ?? 50) * 2.6]
  const alongKm = map.storm.d0 - (map.storm.speed * s.t) / 60
  const stormX = Math.max(-20, Math.min(500, 240 - alongKm * 18))
  const stormOpacity = Math.max(0.15, Math.min(0.9, 1 - Math.abs(alongKm) / 20))
  const here = s.travelling ? null : s.loc
  return (
    <svg className="diagram" viewBox="0 0 480 260" role="img" aria-label={`Map: ${map.name} with refuge options and the approaching storm`}>
      <rect x="0" y="0" width="480" height="260" fill="var(--panel-2)" />
      {map.terrain === 'mountain' && (
        <g>
          {[70, 52, 34, 18].map((r, i) => <ellipse key={r} cx="240" cy="47" rx={r * 2.4} ry={r} fill="none" stroke="var(--ground)" strokeWidth="1.2" opacity={0.4 + i * 0.12} />)}
          <path d="M40,120 Q120,110 200,150 Q170,200 60,210 Z" fill="var(--ok)" opacity="0.3" />
          <ellipse cx="300" cy="215" rx="70" ry="22" fill="var(--info)" opacity="0.35" />
          <text x="95" y="175" fontSize="10" className="muted-fill">dense forest (treeline)</text>
          <text x="275" y="219" fontSize="10" className="muted-fill">lake</text>
        </g>
      )}
      {map.terrain === 'lake' && (
        <g>
          <ellipse cx="250" cy="130" rx="200" ry="105" fill="var(--info)" opacity="0.35" />
          <path d="M0,120 Q60,130 60,200 Q30,250 0,260 Z" fill="var(--ok)" opacity="0.35" />
          <ellipse cx="317" cy="99" rx="14" ry="8" fill="var(--ground)" opacity="0.6" />
          <path d="M120,60 Q150,70 170,95" stroke="var(--warn)" strokeWidth="8" opacity="0.5" fill="none" />
        </g>
      )}
      {map.terrain === 'field' && (
        <g>
          <rect x="0" y="0" width="480" height="260" fill="var(--ok)" opacity="0.12" />
          <path d="M0,150 Q70,160 110,210 Q90,260 0,260 Z" fill="var(--ok)" opacity="0.4" />
          <text x="10" y="248" fontSize="10" className="muted-fill">forest</text>
        </g>
      )}
      {map.refuges.filter((r) => r.travelMin > 0).map((r) => {
        const [x1, y1] = px('start'), [x2, y2] = px(r.id)
        return <line key={`l${r.id}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="var(--line)" strokeWidth="1.5" strokeDasharray="4 4" />
      })}
      {map.refuges.filter((r) => r.id !== 'crouch').map((r) => {
        const [x, y] = px(r.id)
        return (
          <g key={r.id}>
            <circle cx={x} cy={y} r="6" fill={here === r.id ? 'var(--accent)' : 'var(--panel)'} stroke="var(--text)" />
            <text x={x > 300 ? x - 9 : x + 9} y={y + 4} fontSize="10" textAnchor={x > 300 ? 'end' : 'start'}>{r.name.split('(')[0].trim()}</text>
          </g>
        )
      })}
      {(() => {
        const [x, y] = px('start')
        return (
          <g>
            <polygon points={`${x},${y - 9} ${x - 8},${y + 6} ${x + 8},${y + 6}`} fill={here === 'start' || here === 'crouch' ? 'var(--accent-2)' : 'var(--panel)'} stroke="var(--text)" />
            <text x={x + 11} y={y - 2} fontSize="10" fontWeight="700">{map.start.name}</text>
          </g>
        )
      })()}
      {s.travelling && <text x="240" y="252" textAnchor="middle" fontSize="11" fontWeight="700">On the move → {map.refuges.find((r) => r.id === s.travelling!.to)!.name.split('(')[0]} ({s.travelling.remaining} min left)</text>}
      <g opacity={stormOpacity}>
        <ellipse cx={stormX} cy="30" rx="60" ry="22" fill="var(--muted)" />
        <ellipse cx={stormX + 30} cy="22" rx="40" ry="16" fill="var(--muted)" />
        <path d={`M${stormX},46 l-8,16 h8 l-10,20`} stroke="var(--warn)" strokeWidth="2.5" fill="none" />
      </g>
      <text x="470" y="14" textAnchor="end" fontSize="10" className="muted-fill">storm moving west → east</text>
    </svg>
  )
}

export function LightningRisk({ onScore }: SimProps) {
  const [mapId, setMapId] = useState(MAPS[0].id)
  const map = MAPS.find((m) => m.id === mapId)!
  const [s, setS] = useState<SimState>(initialState)
  const [running, setRunning] = useState(false)
  const [started, setStarted] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [est, setEst] = useState<Record<number, Bucket>>({})

  useEffect(() => {
    if (!running || s.done) return
    const id = setInterval(() => setS((x) => step(map, x)), 2500 / speed)
    return () => clearInterval(id)
  }, [running, speed, map, s.done])

  const flashes = s.events.filter((e) => e.delay !== null)
  const lastFlash = flashes[flashes.length - 1]
  const estimates = { correct: Object.entries(est).filter(([t, b]) => { const e = s.events.find((x) => x.t === Number(t)); return e?.delay != null && bucketFor(e.delay) === b }).length, total: Object.keys(est).length }
  const finalScore = s.done ? score(map, s, estimates) : 0

  // Report the score once per run (a ref, so no state update inside the effect).
  const reported = useRef(false)
  useEffect(() => {
    if (s.done && !reported.current) {
      reported.current = true
      onScore(finalScore)
    }
  }, [s.done, finalScore, onScore])

  const reset = (id = mapId) => {
    setMapId(id)
    setS(initialState())
    setRunning(false)
    setStarted(false)
    setEst({})
    reported.current = false
  }

  const refuge = map.refuges.find((r) => r.id === (s.travelling?.to ?? s.loc))
  const base = baselineDose(map)

  return (
    <div>
      <div className="chip-group">
        {MAPS.map((m) => <button key={m.id} className={`chip ${m.id === mapId ? 'on' : ''}`} disabled={started && !s.done} onClick={() => reset(m.id)}>{m.name}</button>)}
      </div>
      <div className="callout callout-info">{map.intro}</div>
      <MapView map={map} s={s} />
      <div className="grid-2">
        <div>
          <div className="clock"><strong>{clock(START_CLOCK[map.id] + s.t)}</strong> · {s.travelling ? 'moving' : s.loc === 'start' ? map.start.name : refuge?.name.split('(')[0]}</div>
          {lastFlash ? (
            <p>⚡ Flash at {clock(START_CLOCK[map.id] + lastFlash.t)} — thunder after <strong>{lastFlash.delay} s</strong>.</p>
          ) : (
            <p className="muted">No thunder heard yet{s.t === 0 ? '. The clock starts when you press Start.' : '.'}</p>
          )}
          {lastFlash && !s.done && (
            <div>
              <span className="small">How far is it (km)? </span>
              <span className="chip-group">
                {BUCKETS.map((b) => <button key={b} className={`chip ${est[lastFlash.t] === b ? 'on' : ''}`} disabled={est[lastFlash.t] !== undefined} onClick={() => setEst({ ...est, [lastFlash.t]: b })}>{b}</button>)}
              </span>
              {est[lastFlash.t] !== undefined && <span className="small muted"> {bucketFor(lastFlash.delay!) === est[lastFlash.t] ? '✓' : `✗ (${lastFlash.delay} s × 0.343 ≈ ${(lastFlash.delay! * 0.343).toFixed(1)} km)`}</span>}
            </div>
          )}
        </div>
        <div>
          {!started ? (
            <button className="btn primary" onClick={() => { setStarted(true); setRunning(true) }}>Start</button>
          ) : !s.done ? (
            <div className="row-btns">
              <button className="btn" onClick={() => setRunning(!running)}>{running ? 'Pause' : 'Continue'}</button>
              <button className="btn" onClick={() => setSpeed(speed === 1 ? 3 : 1)}>Speed ×{speed === 1 ? 3 : 1}</button>
            </div>
          ) : null}
          {started && !s.done && s.loc === 'start' && !s.travelling && (
            <div>
              <p className="small"><strong>Stop and go to:</strong></p>
              <div className="chip-group">
                {map.refuges.map((r) => <button key={r.id} className="chip" onClick={() => setS(retreat(map, s, r.id))}>{r.name}</button>)}
              </div>
            </div>
          )}
          {started && !s.done && s.loc !== 'start' && !s.travelling && (
            <p><button className="btn" onClick={() => setS(resume(map, s))}>Storm seems over — resume the activity</button></p>
          )}
        </div>
      </div>
      {flashes.length > 0 && (
        <details>
          <summary className="small">Thunder log ({flashes.length})</summary>
          <p className="small muted">{flashes.map((e) => `${clock(START_CLOCK[map.id] + e.t)} ${e.delay}s`).join(' · ')}</p>
        </details>
      )}
      {s.done && (
        <div className="sim-result">
          <p>All clear at {clock(START_CLOCK[map.id] + s.t)} — {WAIT_MIN} min after the last thunder.</p>
          <p>Your exposure: <strong>{riskBand(s.dose)}</strong> ({s.dose.toFixed(1)} units) vs <strong>{riskBand(base)}</strong> ({base.toFixed(1)}) if you had stayed at “{map.start.name}”.</p>
          {s.retreatedAt === null ? (
            <p>You never moved. Thunder you can hear means you are within striking distance.</p>
          ) : (
            <p>You decided to move at {clock(START_CLOCK[map.id] + s.retreatedAt)}{flashes.length && s.retreatedAt < flashes[0].t ? ' — before the first thunder. Excellent anticipation.' : '.'} {refuge?.feedback ?? map.refuges.find((r) => r.id === s.loc)?.feedback}</p>
          )}
          <p>{s.resumedEarly ? `✗ You resumed before ${WAIT_MIN} minutes had passed since the last thunder — many strikes happen at the back edge of a storm.` : s.sheltered ? `✓ You waited ${WAIT_MIN} minutes after the last thunder.` : ''}</p>
          <p>Distance estimates: {estimates.correct}/{estimates.total} correct.</p>
          <p><strong>Score: {finalScore}</strong> (70 exposure reduction · 15 thirty-minute rule · 15 distance estimates)</p>
          <button className="btn primary" onClick={() => reset()}>Try again</button>
        </div>
      )}
      <p className="muted small">Each tick = {STEP_MIN} simulated minutes. Exposure numbers are a relative model for comparing choices, not a probability of being struck. There is no safe place outdoors in a thunderstorm.</p>
    </div>
  )
}
