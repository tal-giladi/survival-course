import { useState } from 'react'
import type { SimProps } from '../types'
import { Print } from './Prints'
import {
  CANVAS, DIRS, FAMILIES, GAITS, SCENES, clock, correctAge, scatter, scoreScene, totalPercent, trail,
  type Answer, type Family, type Substrate, type TrackScene,
} from './trackingModel'

// Tracking Scene: read a drawn trail and a tracker's field notes. Identify the family, the gait
// and the direction of travel, then bracket the age of the trail from dated events. 4 points per scene.

const SIZE: Record<Family, number> = { canid: 16, felid: 20, mustelid: 14, ungulate: 16, lagomorph: 22, bird: 16, human: 28, bear: 26 }

const GROUND: Record<Substrate, { fill: string; opacity: number }> = {
  mud: { fill: 'var(--ground)', opacity: 0.55 },
  sand: { fill: 'var(--accent-2)', opacity: 0.22 },
  snow: { fill: 'var(--sky)', opacity: 0.35 },
  'wet-sand': { fill: 'var(--ground)', opacity: 0.32 },
  dust: { fill: 'var(--ground)', opacity: 0.22 },
}

function SceneView({ s }: { s: TrackScene }) {
  const { w, h } = CANVAS
  const prints = trail(s.family, s.gait, s.dir)
  const g = GROUND[s.substrate]
  const pits = s.pits === 'none' ? [] : scatter(s.id.length * 7919, 140, w, h).filter((p) =>
    s.pits === 'inside' || prints.every((q) => Math.hypot(q.x - p.x, q.y - p.y) > SIZE[s.family] * 0.6))
  const printOpacity = s.id === 'lynx-snow' ? 0.35 : 0.55
  return (
    <svg className="diagram" viewBox={`0 0 ${w} ${h}`} role="img" aria-label={`Drawn trail: ${s.place}`} style={{ maxWidth: 360, borderRadius: 8, border: '1px solid var(--line)' }}>
      <rect x="0" y="0" width={w} height={h} fill="var(--panel)" />
      <rect x="0" y="0" width={w} height={h} fill={g.fill} opacity={g.opacity} />
      {s.id === 'gull-beach' && (
        <g>
          <path d={`M0,12 ${Array.from({ length: 16 }, (_, i) => `Q${i * 20 + 10},${i % 2 ? 4 : 20} ${(i + 1) * 20},12`).join(' ')}`} fill="none" stroke="var(--ok)" strokeWidth="4" opacity="0.7" />
          <text x={w - 6} y={32} textAnchor="end" fontSize="10" className="muted-fill">high-tide wrack line</text>
        </g>
      )}
      {s.id === 'dog-road' && <rect x="140" y="0" width="22" height={h} fill="var(--text)" opacity="0.12" />}
      {s.id === 'deer-frost' && scatter(4242, 26, w, h).map((p, i) => <ellipse key={i} cx={p.x} cy={p.y} rx="5" ry="2.5" transform={`rotate(${(i * 37) % 180} ${p.x} ${p.y})`} fill="var(--accent-2)" opacity="0.45" />)}
      {prints.map((p, i) => <Print key={i} family={s.family} foot={p.foot} side={p.side} size={s.family === 'lagomorph' && p.foot === 'front' ? 12 : SIZE[s.family]} x={p.x} y={p.y} rot={p.rot} opacity={printOpacity} />)}
      {s.id === 'dog-road' && <rect x="232" y="0" width="22" height={h} fill="var(--text)" opacity="0.18" />}
      {pits.map((p, i) => <circle key={i} cx={p.x} cy={p.y} r="1.3" fill="var(--text)" opacity="0.35" />)}
      {s.id === 'dog-road' && (
        <g>
          <text x="151" y={h - 6} textAnchor="middle" fontSize="9" className="muted-fill">07:00</text>
          <text x="243" y={h - 6} textAnchor="middle" fontSize="9" className="muted-fill">12:00</text>
        </g>
      )}
    </svg>
  )
}

function CloseUp({ s }: { s: TrackScene }) {
  const foot = s.family === 'lagomorph' ? 'hind' : 'front'
  return (
    <svg className="diagram" viewBox="0 0 120 120" role="img" aria-label="Close-up of one print" style={{ maxWidth: 150, borderRadius: 8, border: '1px solid var(--line)' }}>
      <rect x="0" y="0" width="120" height="120" fill="var(--panel-2)" />
      <Print family={s.family} foot={foot} side="L" size={84} x={60} y={58} opacity={0.6} />
      <text x="60" y="114" textAnchor="middle" fontSize="9" className="muted-fill">close-up (toes up)</text>
    </svg>
  )
}

const empty: Answer = { family: null, gait: null, dir: null, age: null }

export function TrackingScene({ onScore }: SimProps) {
  const [order] = useState(() => [...SCENES].sort(() => Math.random() - 0.5).slice(0, 5))
  const [i, setI] = useState(0)
  const [a, setA] = useState<Answer>(empty)
  const [shown, setShown] = useState(false)
  const [points, setPoints] = useState<number[]>([])
  const [guide, setGuide] = useState(false)
  const s = order[i]
  const result = scoreScene(s, a)
  const ready = a.family && a.gait && a.dir && a.age

  const submit = () => {
    setShown(true)
    const next = [...points, result.points]
    setPoints(next)
    if (i === order.length - 1) onScore(totalPercent(next))
  }
  const mark = (ok: boolean) => (ok ? '✓' : '✗')

  return (
    <div>
      <p className="muted small">Scene {i + 1} of {order.length} · {s.place}. Read the trail and the notes, then answer all four questions.</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <SceneView s={s} />
        <CloseUp s={s} />
      </div>
      <div className="callout callout-info">
        <ul style={{ margin: 0, paddingLeft: 18 }}>{s.observations.map((o) => <li key={o}>{o}</li>)}</ul>
      </div>
      <p className="small"><strong>1. Track family</strong></p>
      <div className="chip-group">
        {FAMILIES.map((f) => <button key={f.id} disabled={shown} className={`chip ${a.family === f.id ? 'on' : ''}`} onClick={() => setA({ ...a, family: f.id })}>{f.name.split(' (')[0]}</button>)}
      </div>
      <p className="small"><strong>2. Gait</strong></p>
      <div className="chip-group">
        {GAITS.map((g) => <button key={g.id} disabled={shown} className={`chip ${a.gait === g.id ? 'on' : ''}`} onClick={() => setA({ ...a, gait: g.id })}>{g.name}</button>)}
      </div>
      <p className="small"><strong>3. Direction of travel (on the drawing)</strong></p>
      <div className="chip-group">
        {DIRS.map((d) => <button key={d.id} disabled={shown} className={`chip ${a.dir === d.id ? 'on' : ''}`} onClick={() => setA({ ...a, dir: d.id })}>{d.name}</button>)}
      </div>
      <p className="small"><strong>4. Age of the trail</strong></p>
      <div className="chip-group">
        {s.ageChoices.map((c) => <button key={c.id} disabled={shown} className={`chip ${a.age === c.id ? 'on' : ''}`} onClick={() => setA({ ...a, age: c.id })}>{c.text}</button>)}
      </div>
      {!shown ? (
        <button className="btn primary" disabled={!ready} onClick={submit}>Check</button>
      ) : (
        <div className="sim-result">
          <p>
            {mark(result.family)} Family: <strong>{FAMILIES.find((f) => f.id === s.family)!.name}</strong> ·{' '}
            {mark(result.gait)} Gait: <strong>{GAITS.find((g) => g.id === s.gait)!.name}</strong> ·{' '}
            {mark(result.dir)} Direction: <strong>{DIRS.find((d) => d.id === s.dir)!.name}</strong> ·{' '}
            {mark(result.age)} Age: <strong>{s.ageChoices.find((c) => c.id === correctAge(s))!.text}</strong>
          </p>
          <p className="small">Events used: {s.markers.map((m) => `${m.event} at ${clock(m.at)} → print made ${m.relation}`).join('; ')}. Now: {clock(s.now)}.</p>
          <p className="small">{s.debrief}</p>
          <p><strong>{result.points} / 4 points</strong></p>
          {i < order.length - 1 ? (
            <button className="btn primary" onClick={() => { setI(i + 1); setA(empty); setShown(false) }}>Next scene</button>
          ) : (
            <p><strong>Score: {totalPercent(points)}%</strong>. Real tracking is slower and humbler than this: several prints, several clues, and ranges rather than points.</p>
          )}
        </div>
      )}
      <p><button className="btn" onClick={() => setGuide(!guide)}>{guide ? 'Hide' : 'Show'} field key</button></p>
      {guide && (
        <div className="table-wrap">
          <table>
            <thead><tr><th>Family</th><th>Key features</th></tr></thead>
            <tbody>{FAMILIES.map((f) => <tr key={f.id}><td>{f.name}</td><td>{f.key}</td></tr>)}</tbody>
          </table>
          <table>
            <thead><tr><th>Gait</th><th>Trail pattern</th></tr></thead>
            <tbody>{GAITS.map((g) => <tr key={g.id}><td>{g.name}</td><td>{g.key}</td></tr>)}</tbody>
          </table>
          <p className="small muted">Aging: anything that lies <em>on top of</em> a print (rain pits, frost, drifted sand, a later tyre track) happened after it; anything the print <em>cuts into</em> happened before it.</p>
        </div>
      )}
      <p className="muted small">Drawings are schematic and not to scale — measurements are in the notes. Watch wildlife from a distance and never follow fresh sign of a large predator.</p>
    </div>
  )
}
