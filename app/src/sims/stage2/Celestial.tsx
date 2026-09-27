import { useMemo, useRef, useState } from 'react'
import type { MouseEvent } from 'react'
import type { SimProps } from '../types'
import {
  CONSTELLATION_LINES, STARS, dateFromLocal, equationOfTime, moonEq, moonPhase, riseAzimuth, skyState, sunEq, toHorizon,
} from './astro'
import type { HorizonPos } from './astro'

// Celestial navigation simulator: a 360° horizon panorama for any date, time and latitude.
// Clock = local mean solar time at the observer's longitude (no time zones or daylight saving).

const W = 960
const H = 330
const HORIZON = 300
const YEAR = 2026
const altY = (alt: number) => HORIZON - (alt / 90) * (HORIZON - 20)
const angDiff = (a: number, b: number) => {
  const d = (((a - b) % 360) + 360) % 360
  return d > 180 ? d - 360 : d
}
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const dayLabel = (doy: number) => {
  const d = new Date(Date.UTC(YEAR, 0, doy))
  return `${d.getUTCDate()} ${MONTHS[d.getUTCMonth()]}`
}
const hm = (h: number) => `${String(Math.floor(h)).padStart(2, '0')}:${String(Math.round((h % 1) * 60) % 60).padStart(2, '0')}`
const dirName = (az: number) => ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'][Math.round((((az % 360) + 360) % 360) / 45) % 8]

interface Sky { lat: number; doy: number; hour: number }
type Target = 'north' | 'south' | 'east' | 'west'
const TARGET_AZ: Record<Target, number> = { north: 0, east: 90, south: 180, west: 270 }

function compute(s: Sky) {
  const d = dateFromLocal(YEAR, s.doy, s.hour, 0)
  const sunE = sunEq(d)
  const sun = toHorizon(sunE, d, s.lat, 0)
  const moon = toHorizon(moonEq(d), d, s.lat, 0)
  const phase = moonPhase(d)
  const stars = STARS.map((st) => ({ st, pos: toHorizon(st, d, s.lat, 0) }))
  return { d, sun, sunDec: sunE.dec, moon, phase, stars, sky: skyState(sun.alt), eot: equationOfTime(d) }
}

function MoonGlyph({ x, y, r, elong, rot }: { x: number; y: number; r: number; elong: number; rot: number }) {
  // Lit limb drawn on +x, then rotated so it faces the Sun.
  const c = Math.cos((elong * Math.PI) / 180)
  const rx = Math.abs(c) * r
  const crescent = c > 0 // elongation < 90° or > 270°
  const d = `M0,${-r} A${r},${r} 0 0 1 0,${r} A${rx},${r} 0 0 ${crescent ? 0 : 1} 0,${-r} Z`
  return (
    <g transform={`translate(${x},${y}) rotate(${rot})`}>
      <circle r={r} fill="#3a4250" />
      <path d={d} fill="#f2efe2" />
    </g>
  )
}

function randomChallenge(): Sky & { target: Target; center: number } {
  const lats = [52, 38, 60, 23, -34, -41, -27, 10, -12, 45]
  for (let tries = 0; tries < 200; tries++) {
    const lat = lats[Math.floor(Math.random() * lats.length)] + Math.round(Math.random() * 6 - 3)
    const doy = 1 + Math.floor(Math.random() * 365)
    const night = Math.random() < 0.55
    const hour = night ? (20 + Math.random() * 8) % 24 : 7 + Math.random() * 10
    const c = compute({ lat, doy, hour })
    const targets: Target[] = ['north', 'south', 'east', 'west']
    const target = targets[Math.floor(Math.random() * 4)]
    const center = Math.floor(Math.random() * 360)
    if (night) {
      if (c.sky !== 'night') continue
      const pol = c.stars.find((x) => x.st.id === 'polaris')!.pos.alt > 8
      const crux = c.stars.find((x) => x.st.id === 'acrux')!.pos.alt > 8
      const orion = c.stars.find((x) => x.st.id === 'alnilam')!.pos.alt > 5
      if (pol || crux || orion) return { lat, doy, hour, target, center }
    } else if (c.sun.alt > 8 && Math.abs(c.sun.alt) < 80) return { lat, doy, hour, target, center }
  }
  return { lat: 50, doy: 80, hour: 22, target: 'north', center: 200 }
}

const ROUNDS = 5

export function Celestial({ onScore }: SimProps) {
  const [mode, setMode] = useState<'explore' | 'challenge'>('explore')
  const [sky, setSky] = useState<Sky>({ lat: 51, doy: 355, hour: 21 })
  const [facing, setFacing] = useState(180)
  const [labels, setLabels] = useState(true)
  const [ch, setCh] = useState(() => randomChallenge())
  const [round, setRound] = useState(0)
  const [guess, setGuess] = useState<number | null>(null)
  const [scores, setScores] = useState<number[]>([])
  const svgRef = useRef<SVGSVGElement>(null)

  const cur: Sky = mode === 'explore' ? sky : ch
  const center = mode === 'explore' ? facing : ch.center
  const c = useMemo(() => compute(cur), [cur])
  const reveal = mode === 'explore' || guess !== null
  const azX = (az: number) => W / 2 + angDiff(az, center) * (W / 360)
  const starOpacity = c.sun.alt < -12 ? 1 : c.sun.alt < -4 ? (-4 - c.sun.alt) / 8 : 0
  const nightBg = c.sky === 'night' ? '#0b1422' : c.sky === 'nautical' ? '#1b2a44' : c.sky === 'civil' ? '#46628a' : 'var(--sky)'

  const pos = (id: string) => c.stars.find((x) => x.st.id === id)!.pos
  const visible = (p: HorizonPos) => p.alt > 0

  const click = (e: MouseEvent<SVGSVGElement>) => {
    if (mode !== 'challenge' || guess !== null) return
    const svg = svgRef.current
    const ctm = svg?.getScreenCTM()
    if (!svg || !ctm) return
    const q = new DOMPoint(e.clientX, e.clientY).matrixTransform(ctm.inverse())
    const az = (((center + ((q.x - W / 2) * 360) / W) % 360) + 360) % 360
    setGuess(az)
    const err = Math.abs(angDiff(az, TARGET_AZ[ch.target]))
    const sc = Math.max(0, Math.round(100 - err * 2.5))
    const all = [...scores, sc]
    setScores(all)
    if (all.length === ROUNDS) onScore(Math.round(all.reduce((a, b) => a + b, 0) / ROUNDS))
  }
  const nextRound = () => {
    if (scores.length >= ROUNDS) {
      setScores([])
      setRound(0)
    } else setRound(round + 1)
    setCh(randomChallenge())
    setGuess(null)
  }

  // Explanation of what could be used in the current sky.
  const clues: string[] = []
  if (c.sun.alt > 0) clues.push(`Sun at azimuth ${Math.round(c.sun.az)}° (${dirName(c.sun.az)}), altitude ${Math.round(c.sun.alt)}°. At local solar noon it would be due ${c.sunDec < cur.lat ? 'south' : 'north'} (sun declination ${c.sunDec.toFixed(1)}°, latitude ${cur.lat}°).`)
  if (visible(pos('polaris')) && starOpacity > 0.3) clues.push(`Polaris at altitude ${Math.round(pos('polaris').alt)}° — almost your latitude — and within about 1° of true north.`)
  if (visible(pos('acrux')) && starOpacity > 0.3) clues.push(`Southern Cross up (Acrux at ${Math.round(pos('acrux').alt)}°). Extend the long axis ≈4.5× and meet the Pointers’ bisector: the south celestial pole is at altitude ${Math.abs(cur.lat)}° above due south.`)
  if (visible(pos('mintaka')) && starOpacity > 0.3) clues.push(`Orion visible: Mintaka (west end of the belt) sits on the celestial equator — it rose due east and will set due west. It is at azimuth ${Math.round(pos('mintaka').az)}° now.`)
  if (c.moon.alt > 0) clues.push(`Moon: ${c.phase.name} (${Math.round(c.phase.illum * 100)}% lit) at azimuth ${Math.round(c.moon.az)}°. Its lit side faces the Sun.`)

  const sunRise = riseAzimuth(c.sunDec, cur.lat)

  return (
    <div>
      <div className="chip-group">
        <button className={`chip ${mode === 'explore' ? 'on' : ''}`} onClick={() => setMode('explore')}>Explore the sky</button>
        <button className={`chip ${mode === 'challenge' ? 'on' : ''}`} onClick={() => { setMode('challenge'); setGuess(null) }}>Challenge: find the direction ({ROUNDS} rounds)</button>
      </div>

      {mode === 'explore' ? (
        <div className="controls">
          <div className="control">
            <label>Date <span className="val">{dayLabel(sky.doy)}</span></label>
            <input type="range" min={1} max={365} value={sky.doy} onChange={(e) => setSky({ ...sky, doy: +e.target.value })} />
          </div>
          <div className="control">
            <label>Local solar time <span className="val">{hm(sky.hour)}</span></label>
            <input type="range" min={0} max={23.75} step={0.25} value={sky.hour} onChange={(e) => setSky({ ...sky, hour: +e.target.value })} />
          </div>
          <div className="control">
            <label>Latitude <span className="val">{Math.abs(sky.lat)}° {sky.lat >= 0 ? 'N' : 'S'}</span></label>
            <input type="range" min={0} max={70} value={Math.abs(sky.lat)} onChange={(e) => setSky({ ...sky, lat: (sky.lat < 0 ? -1 : 1) * +e.target.value })} />
          </div>
          <div className="control">
            <label>Hemisphere</label>
            <div className="chip-group">
              <button className={`chip ${sky.lat >= 0 ? 'on' : ''}`} onClick={() => setSky({ ...sky, lat: Math.abs(sky.lat) })}>Northern</button>
              <button className={`chip ${sky.lat < 0 ? 'on' : ''}`} onClick={() => setSky({ ...sky, lat: -Math.abs(sky.lat) })}>Southern</button>
            </div>
          </div>
          <div className="control">
            <label>Face toward</label>
            <div className="chip-group">
              {[['N', 0], ['E', 90], ['S', 180], ['W', 270]].map(([l, a]) => (
                <button key={l} className={`chip ${facing === a ? 'on' : ''}`} onClick={() => setFacing(a as number)}>{l}</button>
              ))}
            </div>
          </div>
          <div className="control">
            <label><input type="checkbox" checked={labels} onChange={(e) => setLabels(e.target.checked)} /> Star names and constellation lines</label>
          </div>
        </div>
      ) : (
        <div className="callout callout-info">
          <div className="callout-title">Round {Math.min(round + 1, ROUNDS)} of {ROUNDS}: latitude {Math.abs(ch.lat)}° {ch.lat >= 0 ? 'N' : 'S'}, {dayLabel(ch.doy)}, {hm(ch.hour)} local solar time</div>
          You have no compass and the panorama is rotated at random. <strong>Click the horizon where you think {ch.target.toUpperCase()} is.</strong> Use the Sun, Moon or stars.
        </div>
      )}

      <svg ref={svgRef} className="site-map" viewBox={`0 0 ${W} ${H}`} onClick={click} role="img" aria-label="Panorama of the sky around the full horizon" style={{ cursor: mode === 'challenge' && guess === null ? 'crosshair' : 'default' }}>
        <rect width={W} height={HORIZON} fill={nightBg} />
        {/* altitude rings */}
        {[30, 60].map((a) => <line key={a} x1={0} x2={W} y1={altY(a)} y2={altY(a)} stroke="#ffffff" strokeOpacity="0.12" strokeDasharray="4 6" />)}
        {starOpacity > 0 && labels && CONSTELLATION_LINES.flatMap((cl) => cl.pairs.map(([a, b]) => {
          const pa = pos(a), pb = pos(b)
          if (pa.alt < -2 || pb.alt < -2 || Math.abs(angDiff(pa.az, pb.az)) > 90) return null
          return <line key={`${cl.name}-${a}-${b}`} x1={azX(pa.az)} y1={altY(pa.alt)} x2={azX(pb.az)} y2={altY(pb.alt)} stroke="#9fc3ff" strokeOpacity={0.45 * starOpacity} />
        }))}
        {starOpacity > 0 && c.stars.filter((x) => x.pos.alt > 0).map(({ st, pos: p }) => (
          <g key={st.id} opacity={starOpacity}>
            <circle cx={azX(p.az)} cy={altY(p.alt)} r={Math.max(1.2, 3.6 - st.mag * 0.9)} fill="#fffbe8" />
            {labels && reveal && ['polaris', 'dubhe', 'acrux', 'acen', 'mintaka', 'betelgeuse', 'rigel', 'schedar', 'sirius', 'canopus'].includes(st.id) && (
              <text x={azX(p.az) + 6} y={altY(p.alt) - 5} fontSize="10" fill="#cfe0ff">{st.name}</text>
            )}
          </g>
        ))}
        {c.moon.alt > -1 && (
          <MoonGlyph x={azX(c.moon.az)} y={altY(c.moon.alt)} r={11} elong={c.phase.elong}
            rot={(Math.atan2(-(c.sun.alt - c.moon.alt), angDiff(c.sun.az, c.moon.az)) * 180) / Math.PI} />
        )}
        {c.sun.alt > -1 && (
          <g>
            <circle cx={azX(c.sun.az)} cy={altY(c.sun.alt)} r={22} fill="#ffd54a" opacity="0.25" />
            <circle cx={azX(c.sun.az)} cy={altY(c.sun.alt)} r={12} fill="#ffc21a" />
          </g>
        )}
        <rect y={HORIZON} width={W} height={H - HORIZON} fill="var(--ground)" />
        {reveal && [0, 45, 90, 135, 180, 225, 270, 315].map((a) => (
          <g key={a}>
            <line x1={azX(a)} x2={azX(a)} y1={HORIZON} y2={HORIZON + 8} stroke="#fff" />
            <text x={azX(a)} y={HORIZON + 22} fontSize="13" fontWeight="700" textAnchor="middle" fill="#fff">{dirName(a)}</text>
          </g>
        ))}
        {mode === 'challenge' && guess !== null && (
          <g>
            <line x1={azX(guess)} x2={azX(guess)} y1={20} y2={HORIZON} stroke="#ff8a5c" strokeWidth="2" strokeDasharray="5 4" />
            <line x1={azX(TARGET_AZ[ch.target])} x2={azX(TARGET_AZ[ch.target])} y1={20} y2={HORIZON} stroke="#6fcf97" strokeWidth="2" />
          </g>
        )}
      </svg>

      <div className="sim-result small">
        {mode === 'challenge' && guess !== null && (
          <div>
            <strong>You were {Math.round(Math.abs(angDiff(guess, TARGET_AZ[ch.target])))}° off</strong> (orange = your guess, green = true {ch.target}). Round score {scores[scores.length - 1]}%.
            {scores.length === ROUNDS && <> <strong>Final: {Math.round(scores.reduce((a, b) => a + b, 0) / ROUNDS)}%</strong></>}
            <button className="btn small" onClick={nextRound}>{scores.length >= ROUNDS ? 'Play again' : 'Next round'}</button>
          </div>
        )}
        {reveal && (
          <>
            <div><strong>Sky:</strong> {c.sky === 'day' ? 'daylight' : c.sky === 'civil' ? 'civil twilight' : c.sky === 'nautical' ? 'nautical twilight' : 'night'}. {mode === 'explore' && sunRise !== null && <>Today the Sun rises at azimuth ≈{Math.round(sunRise)}° and sets at ≈{Math.round(360 - sunRise)}° (geometric horizon).</>}{mode === 'explore' && sunRise === null && <>{(c.sunDec > 0) === (cur.lat > 0) ? 'Midnight sun: the Sun never sets today.' : 'Polar night: the Sun never rises today.'}</>}</div>
            <ul>{clues.map((x) => <li key={x}>{x}</li>)}</ul>
            {mode === 'explore' && <div className="muted">Equation of time today: {c.eot > 0 ? '+' : ''}{c.eot.toFixed(1)} min — solar noon on a clock set to mean time comes at {hm(12 - c.eot / 60)}. Real clocks also add time-zone offsets and daylight saving.</div>}
          </>
        )}
      </div>
      <p className="muted small">Model: standard low-precision Sun and Moon formulas (NOAA / Meeus), J2000 star positions, no atmospheric refraction; the panorama maps azimuth left–right and altitude up–down, so shapes near the zenith are stretched. Never look directly at the Sun.</p>
    </div>
  )
}
