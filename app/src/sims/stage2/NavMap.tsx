import { useMemo, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { SimProps } from '../types'
import {
  BRIDGE, CLIFF, DECLINATION_W, FOREST, LAKE, MAP_H, MAP_W, MODES, RIVER, ROAD, START, STREAM, TRAIL, WAYPOINTS,
  bearing, closestOnLine, contours, describe, dist, followFeature, gridToMagnetic, magneticToGrid, move, norm360, reached, rng, scoreRun, walkLeg,
} from './navModel'
import type { Mode, Pt } from './navModel'

// Navigation simulator. The learner only ever sees their DEAD-RECKONED position (where they think they are);
// the true position is hidden until they see a waypoint, check GPS, or reveal the track at the end.

const PACES_PER_100 = 64
const START_MIN = 12 * 60 // 12:00
const DARK_MIN = 18 * 60 + 40 // usable light ends 18:40 (sunset 18:10)
const sy = (y: number) => MAP_H - y
const poly = (pts: Pt[]) => pts.map((p) => `${p.x},${sy(p.y)}`).join(' ')
const hhmm = (m: number) => `${String(Math.floor(m / 60) % 24).padStart(2, '0')}:${String(Math.round(m % 60)).padStart(2, '0')}`

interface State {
  truePos: Pt
  est: Pt
  trueTrack: Pt[][]
  estTrack: Pt[][]
  target: number
  minutes: number
  walked: number
  gps: number
  cliffStops: number
  log: { t: string; lines: string[] }[]
  done: null | 'finished' | 'dark' | 'ended'
  seed: number
}

function fresh(mode: Mode): State {
  const seed = Math.floor(Math.random() * 1e9)
  return {
    truePos: START, est: START, trueTrack: [], estTrack: [], target: 0, minutes: START_MIN, walked: 0, gps: 0, cliffStops: 0,
    log: [{ t: hhmm(START_MIN), lines: [`You are at the car park beside the road. ${MODES[mode].note}`, ...describe(START, mode)] }],
    done: null, seed,
  }
}

export function NavMap({ onScore }: SimProps) {
  const [mode, setMode] = useState<Mode>('compass')
  const [s, setS] = useState<State>(() => fresh('compass'))
  const [brgIn, setBrgIn] = useState('')
  const [distIn, setDistIn] = useState('')
  const [paceCorr, setPaceCorr] = useState(false)
  const [measure, setMeasure] = useState<Pt | null>(null)
  const [feature, setFeature] = useState<'river' | 'trail'>('river')
  const [forward, setForward] = useState(true)
  const svgRef = useRef<SVGSVGElement>(null)
  const r = useMemo(() => rng(s.seed), [s.seed])
  const drift = useMemo(() => (rng(s.seed + 1)() < 0.5 ? -1 : 1) * 9, [s.seed])
  const cont = useMemo(() => contours(), [])

  const restart = (m: Mode) => {
    setMode(m)
    setS(fresh(m))
    setMeasure(null)
  }

  const finish = (st: State, why: State['done']) => {
    const score = scoreRun({ reached: st.target, walked: st.walked, gpsChecks: st.gps, cliffStops: st.cliffStops, dark: why === 'dark', gaveUp: why === 'ended' })
    onScore(score)
    return { ...st, done: why }
  }

  const after = (st: State, extra: string[]): State => {
    let next = st
    const lines = [...extra]
    while (next.target < WAYPOINTS.length && reached(next.truePos, next.target)) {
      lines.push(`✅ Waypoint reached: ${WAYPOINTS[next.target].name}. You now know exactly where you are.`)
      next = { ...next, est: WAYPOINTS[next.target].p, target: next.target + 1 }
    }
    lines.push(...describe(next.truePos, mode))
    next = { ...next, log: [{ t: hhmm(next.minutes), lines }, ...next.log] }
    if (next.target >= WAYPOINTS.length) return finish({ ...next, log: [{ t: hhmm(next.minutes), lines: ['🏁 All waypoints reached.'] }, ...next.log] }, 'finished')
    if (next.minutes >= DARK_MIN) return finish({ ...next, log: [{ t: hhmm(next.minutes), lines: ['🌒 Usable light is gone. Moving on in the dark is how injuries happen — you stop and prepare for the night. (Stage 1: budget daylight backwards from sunset.)'] }, ...next.log] }, 'dark')
    return next
  }

  const entered = Number(brgIn)
  const gridIntended = mode === 'compass' ? magneticToGrid(entered) : norm360(entered)
  const distM = Number(distIn)
  const validLeg = brgIn !== '' && distIn !== '' && Number.isFinite(entered) && distM > 0 && distM <= 3000

  const walk = () => {
    if (!validLeg || s.done) return
    const leg = walkLeg({ from: s.truePos, gridBrg: gridIntended, dist: distM, mode, paceCorrected: paceCorr, drift, r })
    // Where you THINK you are: the full intended leg — unless something stopped you early (then roughly the distance paced so far).
    const estFrac = leg.stopped ? Math.min(1, leg.walked / Math.max(1, distM)) : 1
    const estEnd = move(s.est, gridIntended, distM * estFrac)
    const lines = [`Walked on ${mode === 'compass' ? `magnetic ${Math.round(entered)}° (grid ${Math.round(gridIntended)}°)` : `an estimated ${Math.round(gridIntended)}°`} for ${Math.round(distM)} m by pace count (${Math.round((distM / 100) * PACES_PER_100)} paces).`]
    if (leg.stopped === 'cliff') lines.push('⚠️ You reach the edge of crags. You stop — descending cliffs without training and equipment is not an option. Pick a way round.')
    if (leg.stopped === 'lake') lines.push('You reach the lake shore and stop.')
    if (leg.stopped === 'edge') lines.push('You reach the edge of the map area and stop.')
    if (leg.ascent > 30) lines.push(`That leg climbed about ${Math.round(leg.ascent)} m.`)
    setS(after({
      ...s, truePos: leg.end, est: estEnd, trueTrack: [...s.trueTrack, leg.path], estTrack: [...s.estTrack, [s.est, estEnd]],
      minutes: s.minutes + leg.minutes, walked: s.walked + leg.walked, cliffStops: s.cliffStops + (leg.stopped === 'cliff' ? 1 : 0),
    }, lines))
  }

  const line = feature === 'river' ? RIVER : TRAIL
  const near = closestOnLine(s.truePos, line).d < 60
  const follow = () => {
    if (!near || !(distM > 0) || s.done) return
    const f = followFeature(s.truePos, line, forward, distM)
    const d = { x: f.end.x - s.truePos.x, y: f.end.y - s.truePos.y }
    const estEnd = { x: s.est.x + d.x, y: s.est.y + d.y }
    const label = feature === 'river' ? (forward ? 'downstream' : 'upstream') : forward ? 'toward the hut' : 'toward the car park'
    setS(after({
      ...s, truePos: f.end, est: estEnd, trueTrack: [...s.trueTrack, f.path], estTrack: [...s.estTrack, [s.est, estEnd]],
      minutes: s.minutes + f.minutes, walked: s.walked + f.walked,
    }, [`Followed the ${feature} ${label} for about ${Math.round(distM)} m — a handrail, so no compass error.`]))
  }

  const gps = () => {
    if (s.done) return
    setS(after({ ...s, est: s.truePos, gps: s.gps + 1, minutes: s.minutes + 3 }, ['📱 Phone GPS fix (−8 points): your plotted position is now your true position. In real life that costs battery you may need for a call.']))
  }

  const click = (e: MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current
    const ctm = svg?.getScreenCTM()
    if (!svg || !ctm) return
    const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse())
    setMeasure({ x: q.x, y: MAP_H - q.y })
  }
  const mBrg = measure ? bearing(s.est, measure) : 0
  const mDist = measure ? dist(s.est, measure) : 0
  const reveal = !!s.done
  const tgt = WAYPOINTS[Math.min(s.target, WAYPOINTS.length - 1)]
  const offBy = dist(s.est, s.truePos)

  return (
    <div>
      <div className="chip-group">
        {(Object.keys(MODES) as Mode[]).map((m) => (
          <button key={m} className={`chip ${mode === m ? 'on' : ''}`} onClick={() => restart(m)}>{MODES[m].label}</button>
        ))}
      </div>
      <p className="small muted">{MODES[mode].note} Map: 1 grid square = 1 km (thin lines every 500 m). Contours every 20 m. Your pace count: {PACES_PER_100} paces per 100 m on flat, open ground. Start 12:00, sunset 18:10.</p>
      <div className="sim-result">
        {s.done ? (
          <div><strong>{s.done === 'finished' ? '🏁 Course complete.' : s.done === 'dark' ? '🌒 Stopped by darkness.' : 'Run ended.'}</strong> Waypoints: {s.target}/{WAYPOINTS.length} · walked {(s.walked / 1000).toFixed(1)} km · GPS checks {s.gps} · crag stops {s.cliffStops} · score <strong>{scoreRun({ reached: s.target, walked: s.walked, gpsChecks: s.gps, cliffStops: s.cliffStops, dark: s.done === 'dark', gaveUp: s.done === 'ended' })}%</strong>. The true track (red) is now shown against your plotted track (dashed). Final plot error: {Math.round(offBy)} m.</div>
        ) : (
          <div>Next waypoint <strong>{s.target + 1}/{WAYPOINTS.length}: {tgt.name}</strong> — {tgt.hint} · Time <strong>{hhmm(s.minutes)}</strong> · Walked {(s.walked / 1000).toFixed(1)} km</div>
        )}
      </div>

      <svg ref={svgRef} className="site-map" viewBox={`0 0 ${MAP_W} ${MAP_H}`} onClick={click} role="img" aria-label="Topographic map of the navigation exercise area">
        <rect width={MAP_W} height={MAP_H} fill="var(--panel)" />
        <polygon points={poly(FOREST)} fill="var(--ok)" opacity="0.16" />
        {cont.map((c) => (
          <path key={c.level} d={c.segs.map(([a, b]) => `M${a.x.toFixed(0)},${sy(a.y).toFixed(0)}L${b.x.toFixed(0)},${sy(b.y).toFixed(0)}`).join('')} stroke="var(--ground)" strokeWidth={c.level % 100 === 0 ? 5 : 2.2} fill="none" opacity="0.8" />
        ))}
        {[...Array(7)].map((_, i) => <line key={`gx${i}`} x1={i * 500} x2={i * 500} y1={0} y2={MAP_H} stroke="var(--info)" strokeWidth={i % 2 ? 1.5 : 3} opacity="0.35" />)}
        {[...Array(5)].map((_, i) => <line key={`gy${i}`} y1={i * 500} y2={i * 500} x1={0} x2={MAP_W} stroke="var(--info)" strokeWidth={i % 2 ? 1.5 : 3} opacity="0.35" />)}
        {[0, 1, 2].map((i) => <text key={`ex${i}`} x={i * 1000 + 20} y={MAP_H - 20} fontSize="48" fill="var(--info)">{41 + i}</text>)}
        {[1, 2].map((i) => <text key={`ny${i}`} x={20} y={sy(i * 1000) + 55} fontSize="48" fill="var(--info)">{17 + i}</text>)}
        <ellipse cx={LAKE.c.x} cy={sy(LAKE.c.y)} rx={LAKE.rx} ry={LAKE.ry} fill="var(--sky)" stroke="var(--info)" strokeWidth="6" />
        <polyline points={poly(RIVER)} fill="none" stroke="var(--info)" strokeWidth="14" strokeLinejoin="round" />
        <polyline points={poly(STREAM)} fill="none" stroke="var(--info)" strokeWidth="6" strokeLinejoin="round" />
        <polyline points={poly(ROAD)} fill="none" stroke="var(--text)" strokeWidth="12" opacity="0.7" />
        <polyline points={poly(TRAIL)} fill="none" stroke="var(--accent-2)" strokeWidth="7" strokeDasharray="30 18" />
        <rect x={BRIDGE.x - 30} y={sy(BRIDGE.y) - 12} width="60" height="24" fill="var(--text)" opacity="0.7" />
        <polyline points={poly(CLIFF)} fill="none" stroke="var(--text)" strokeWidth="9" />
        {CLIFF.slice(0, -1).flatMap((a, i) => {
          const b = CLIFF[i + 1]
          return [0.15, 0.35, 0.55, 0.75, 0.95].map((t) => {
            const p = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t }
            return <line key={`${i}-${t}`} x1={p.x} y1={sy(p.y)} x2={p.x - 40} y2={sy(p.y)} stroke="var(--text)" strokeWidth="6" />
          })
        })}
        <rect x={2700 - 25} y={sy(850) - 25} width="50" height="50" fill="var(--bad)" />
        <path d={`M${START.x - 45},${sy(START.y) + 35} L${START.x},${sy(START.y) - 45} L${START.x + 45},${sy(START.y) + 35} Z`} fill="none" stroke="var(--accent-2)" strokeWidth="9" />
        {WAYPOINTS.map((w, i) => (
          <g key={w.id} opacity={i < s.target ? 0.45 : 1}>
            <circle cx={w.p.x} cy={sy(w.p.y)} r="55" fill="none" stroke="var(--accent-2)" strokeWidth="9" />
            <text x={w.p.x + 65} y={sy(w.p.y) - 40} fontSize="56" fontWeight="700" fill="var(--accent-2)">{i + 1}</text>
          </g>
        ))}
        <text x={2520} y={sy(1500) + 90} fontSize="40" fill="var(--text)">620</text>
        {/* Declination diagram in the margin */}
        <g transform={`translate(2850, 1760)`}>
          <line x1="0" y1="0" x2="0" y2="-200" stroke="var(--text)" strokeWidth="6" />
          <text x="-14" y="-215" fontSize="44" fill="var(--text)">GN</text>
          <line x1="0" y1="0" x2={-200 * Math.sin((DECLINATION_W * Math.PI) / 180)} y2={-200 * Math.cos((DECLINATION_W * Math.PI) / 180)} stroke="var(--bad)" strokeWidth="6" />
          <text x="-140" y="-150" fontSize="40" fill="var(--bad)">MN</text>
          <text x="-120" y="50" fontSize="36" fill="var(--text)">{DECLINATION_W}° W</text>
        </g>
        {/* Plotted (dead-reckoned) track */}
        {s.estTrack.map((l, i) => <polyline key={`e${i}`} points={poly(l)} fill="none" stroke="var(--accent)" strokeWidth="10" strokeDasharray="24 16" />)}
        {reveal && s.trueTrack.map((l, i) => <polyline key={`t${i}`} points={poly(l)} fill="none" stroke="var(--bad)" strokeWidth="9" />)}
        {reveal && <circle cx={s.truePos.x} cy={sy(s.truePos.y)} r="30" fill="var(--bad)" />}
        <circle cx={s.est.x} cy={sy(s.est.y)} r="34" fill="var(--accent)" stroke="var(--panel)" strokeWidth="8" />
        {measure && (
          <g>
            <line x1={s.est.x} y1={sy(s.est.y)} x2={measure.x} y2={sy(measure.y)} stroke="var(--info)" strokeWidth="8" strokeDasharray="8 10" />
            <circle cx={measure.x} cy={sy(measure.y)} r="20" fill="var(--info)" />
          </g>
        )}
        {!s.done && validLeg && (
          <line x1={s.est.x} y1={sy(s.est.y)} x2={move(s.est, gridIntended, distM).x} y2={sy(move(s.est, gridIntended, distM).y)} stroke="var(--accent)" strokeWidth="5" opacity="0.6" />
        )}
      </svg>
      <p className="small muted">
        Key: blue line/ellipse = river, stream, lake · dashed orange = footpath · grey band = road · black ticked line = crags · green = forest · △ start · ○ numbered waypoints · red square = hut.{' '}
        Click the map to measure from your plotted position (green dot).
        {measure && <> Grid bearing <strong>{Math.round(mBrg)}°</strong> → magnetic <strong>{Math.round(gridToMagnetic(mBrg))}°</strong> · distance <strong>{Math.round(mDist)} m</strong> ≈ {Math.round((mDist / 100) * PACES_PER_100)} paces on the flat.</>}
      </p>

      {!s.done && (
        <div className="controls">
          <div className="control">
            <label>{mode === 'compass' ? 'Magnetic bearing to walk (°)' : 'Estimated grid bearing to walk (°)'}</label>
            <input type="number" min={0} max={359} value={brgIn} onChange={(e) => setBrgIn(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div className="control">
            <label>Distance (m, by pace count)</label>
            <input type="number" min={10} max={3000} step={10} value={distIn} onChange={(e) => setDistIn(e.target.value)} style={{ width: '100%' }} />
          </div>
          <div className="control">
            <label><input type="checkbox" checked={paceCorr} onChange={(e) => setPaceCorr(e.target.checked)} /> I add paces for forest and uphill ground</label>
            <button className="btn primary" disabled={!validLeg} onClick={walk}>🥾 Walk leg</button>
          </div>
          <div className="control">
            <label>Handrail: follow a linear feature you are standing on</label>
            <select value={`${feature}-${forward}`} onChange={(e) => { const [f, d] = e.target.value.split('-'); setFeature(f as 'river' | 'trail'); setForward(d === 'true') }}>
              <option value="river-true">River, downstream</option>
              <option value="river-false">River, upstream</option>
              <option value="trail-true">Footpath, toward the hut (east)</option>
              <option value="trail-false">Footpath, toward the car park (west)</option>
            </select>
            <button className="btn" disabled={!near || !(distM > 0)} onClick={follow} title={near ? '' : 'You must be on (within ~60 m of) that feature'}>Follow for the distance above</button>
          </div>
        </div>
      )}
      <div className="row-btns">
        {!s.done && <button className="btn" onClick={gps}>📱 Check phone GPS (−8)</button>}
        {!s.done && <button className="btn danger" onClick={() => setS(finish(s, 'ended'))}>End and reveal true track</button>}
        <button className="btn" onClick={() => restart(mode)}>↺ New attempt</button>
      </div>
      <div className="sim-result" style={{ maxHeight: 260, overflowY: 'auto' }}>
        {s.log.map((e, i) => (
          <div key={s.log.length - i} className="small" style={{ marginBottom: 6 }}>
            <strong>{e.t}</strong>
            <ul style={{ margin: '2px 0' }}>{e.lines.map((l, k) => <li key={k}>{l}</li>)}</ul>
          </div>
        ))}
      </div>
      <p className="muted small">Model: per-leg heading error (±2° compass, ±12° sun, ±22° plus steady drift with no aids), pace error per leg, and shorter paces in forest and uphill unless you correct for them. Travel time follows Naismith (5 km/h open, 3 km/h forest, +1 min per 10 m climb). Tips: aim off when heading for a point on a river; use the river and the footpath as handrails; route around crags.</p>
    </div>
  )
}
