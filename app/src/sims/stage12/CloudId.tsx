import { useState, type ReactNode } from 'react'
import type { SimProps } from '../types'
import { FORECASTS, GENERA, SCENES, genusById, scoreAnswer, totalPercent, type Forecast, type Frame, type Genus } from './cloudModel'

// Cloud ID: drawn sky scenes over time. Identify the cloud genus in the latest frame and forecast
// the next hours. Scored 1 point for the genus (¼ if right altitude level), 1 for the forecast (½ partial).

const W = 240
const H = 170
const WHITE = '#fff'
const GREY = 'var(--muted)'

function puff(cx: number, base: number, w: number, h: number, fill: string, key: string) {
  // A cumulus-like heap: stacked rounded "cauliflower" lobes, clipped to a flat base.
  const r = w / 4
  const id = `cu-${Math.round(cx)}-${base}-${Math.round(w)}-${Math.round(h)}`
  const lobes: ReactNode[] = []
  for (let i = 0; i < 3; i++) {
    const x = cx - w / 3 + (i * w) / 3
    const top = base - h * (i === 1 ? 1 : 0.8) + r
    for (let y = base - r * 0.4, k = 0; y >= top - 0.01 || k === 0; y -= r * 1.1, k++) lobes.push(<circle key={`${i}-${k}`} cx={x} cy={y} r={r} />)
  }
  return (
    <g key={key}>
      <clipPath id={id}><rect x={cx - w} y="0" width={2 * w} height={base} /></clipPath>
      <g clipPath={`url(#${id})`} fill={fill} opacity="0.95">{lobes}</g>
    </g>
  )
}

function Clouds({ f }: { f: Frame }) {
  const n = Math.max(1, Math.round(f.cover * 6))
  const els: ReactNode[] = []
  switch (f.g) {
    case 'Ci':
      for (let i = 0; i < n + 1; i++) {
        const x = 20 + ((i * 53) % 200), y = 18 + ((i * 17) % 36)
        els.push(<path key={i} d={`M${x},${y + 10} q20,-4 34,-12 q6,-4 10,-2`} fill="none" stroke={WHITE} strokeWidth="1.6" opacity="0.9" strokeLinecap="round" />)
      }
      break
    case 'Cc':
      for (let r = 0; r < 3; r++) for (let c = 0; c < n * 3; c++) els.push(<circle key={`${r}-${c}`} cx={30 + c * 10 + (r % 2) * 5} cy={26 + r * 8} r="2.6" fill={WHITE} opacity="0.85" />)
      break
    case 'Cs':
      els.push(<rect key="veil" x="0" y="0" width={W} height="95" fill={WHITE} opacity={0.2 + f.cover * 0.2} />)
      if (f.variant === 'halo') els.push(<circle key="halo" cx="170" cy="45" r="30" fill="none" stroke={WHITE} strokeWidth="2" opacity="0.8" />)
      break
    case 'Ac':
      for (let r = 0; r < 2; r++)
        for (let c = 0; c < n + 1; c++) {
          const x = 22 + c * 36 + r * 16, y = 70 + r * 16
          els.push(<ellipse key={`s${r}-${c}`} cx={x} cy={y + 3} rx="14" ry="7" fill={GREY} opacity="0.7" />)
          els.push(<ellipse key={`${r}-${c}`} cx={x} cy={y} rx="14" ry="7" fill={WHITE} opacity="0.95" />)
          if (f.variant === 'castellanus') els.push(<rect key={`t${r}-${c}`} x={x - 5} y={y - 17} width="10" height="14" rx="5" fill={WHITE} opacity="0.95" />)
        }
      break
    case 'As':
      els.push(<rect key="sheet" x="0" y="0" width={W} height="115" fill={GREY} opacity="0.75" />)
      els.push(<circle key="sun" cx="170" cy="45" r="11" fill={WHITE} opacity="0.35" />)
      break
    case 'Ns':
      els.push(<rect key="sheet" x="0" y="0" width={W} height="112" fill={GREY} />)
      els.push(<rect key="dark" x="0" y="0" width={W} height="112" fill="#000" opacity="0.35" />)
      els.push(<path key="rag" d={`M0,112 ${Array.from({ length: 13 }, (_, i) => `L${i * 20},${112 + (i % 2 ? 8 : 0)}`).join(' ')} L${W},112 Z`} fill={GREY} />)
      for (let i = 0; i < 26; i++) els.push(<line key={`r${i}`} x1={i * 10} y1="118" x2={i * 10 - 6} y2={H} stroke={GREY} strokeWidth="1" opacity="0.8" />)
      break
    case 'Sc':
      for (let c = 0; c < n + 1; c++) {
        const x = 10 + c * 42
        els.push(<ellipse key={`s${c}`} cx={x + 18} cy="110" rx="26" ry="13" fill={GREY} opacity="0.85" />)
        els.push(<ellipse key={c} cx={x + 18} cy="104" rx="24" ry="10" fill={WHITE} opacity="0.85" />)
      }
      break
    case 'St':
      els.push(<rect key="layer" x="0" y="80" width={W} height="52" fill={GREY} opacity="0.92" />)
      els.push(<rect key="top" x="0" y="0" width={W} height="80" fill={GREY} opacity="0.6" />)
      break
    case 'Cu': {
      const tall = f.variant === 'congestus'
      for (let i = 0; i < n; i++) {
        const cx = 35 + ((i * 71) % 180), w = tall ? 46 : 36, h = tall ? 62 + (i % 2) * 16 : 20
        els.push(<rect key={`b${i}`} x={cx - w / 2} y={112} width={w} height="3" fill={GREY} opacity="0.7" />)
        els.push(puff(cx, 112, w, h, WHITE, `p${i}`))
      }
      break
    }
    case 'Cb':
      els.push(<path key="anvil" d="M40,24 Q120,6 220,22 L200,34 Q140,30 150,40 L96,40 Q100,30 60,34 Z" fill={WHITE} opacity="0.95" />)
      els.push(<path key="tower" d="M88,112 Q80,80 94,56 Q98,40 110,38 Q138,36 142,56 Q156,80 150,112 Z" fill={WHITE} opacity="0.95" />)
      els.push(<rect key="base" x="80" y="102" width="80" height="14" fill={GREY} />)
      els.push(<rect key="dark" x="80" y="102" width="80" height="14" fill="#000" opacity="0.3" />)
      for (let i = 0; i < 9; i++) els.push(<line key={`r${i}`} x1={88 + i * 8} y1="118" x2={82 + i * 8} y2={H} stroke={GREY} strokeWidth="1.5" />)
      els.push(<path key="bolt" d="M126,117 l-6,12 l6,0 l-8,16" fill="none" stroke="var(--warn)" strokeWidth="2" />)
      break
  }
  return <>{els}</>
}

export function SkyFrame({ f, label }: { f: Frame; label?: string }) {
  const sunny = ['Ci', 'Cc', 'Cu', 'Ac'].includes(f.g)
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label ?? 'Drawn sky scene'} style={{ maxWidth: 260, borderRadius: 8, border: '1px solid var(--line)' }}>
      <rect x="0" y="0" width={W} height={H} fill="var(--sky)" />
      {sunny && <circle cx="170" cy="45" r="11" fill="var(--warn)" opacity="0.8" />}
      {f.g === 'Cs' && <circle cx="170" cy="45" r="10" fill="var(--warn)" opacity="0.45" />}
      <Clouds f={f} />
      <path d={`M0,${H} L0,150 L40,138 L70,146 L110,130 L150,146 L190,136 L${W},148 L${W},${H} Z`} fill="var(--ground)" />
      {f.g === 'St' && <rect x="0" y="118" width={W} height="30" fill={GREY} opacity="0.7" />}
    </svg>
  )
}

export function CloudId({ onScore }: SimProps) {
  const [order] = useState(() => [...SCENES].sort(() => Math.random() - 0.5).slice(0, 6))
  const [i, setI] = useState(0)
  const [genus, setGenus] = useState<Genus | null>(null)
  const [fc, setFc] = useState<Forecast | null>(null)
  const [shown, setShown] = useState(false)
  const [points, setPoints] = useState<number[]>([])
  const [guide, setGuide] = useState(false)
  const s = order[i]
  const last = s.frames[s.frames.length - 1]
  const pts = scoreAnswer(s, genus, fc)

  const submit = () => {
    setShown(true)
    const next = [...points, pts]
    setPoints(next)
    if (i === order.length - 1) onScore(totalPercent(next))
  }

  return (
    <div>
      <p className="muted small">Sky {i + 1} of {order.length} · {s.place}. The frames show the same sky over time. Identify the cloud in the <strong>latest</strong> frame, then forecast the next few hours.</p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {s.frames.map((f, k) => (
          <figure key={k} style={{ margin: 0 }}>
            <SkyFrame f={f} label={`Sky at ${f.time}`} />
            <figcaption className="small muted" style={{ textAlign: 'center' }}>{f.time}{k === s.frames.length - 1 ? ' (latest)' : ''}</figcaption>
          </figure>
        ))}
      </div>
      <div className="callout callout-info">{s.clues}</div>
      <p className="small"><strong>1. Cloud genus in the latest frame</strong></p>
      <div className="chip-group">
        {GENERA.map((g) => (
          <button key={g.id} disabled={shown} className={`chip ${genus === g.id ? 'on' : ''}`} onClick={() => setGenus(g.id)}>{g.name}</button>
        ))}
      </div>
      <p className="small"><strong>2. Forecast for the next few hours</strong></p>
      <div className="chip-group">
        {FORECASTS.map((f) => (
          <button key={f.id} disabled={shown} className={`chip ${fc === f.id ? 'on' : ''}`} onClick={() => setFc(f.id)}>{f.text}</button>
        ))}
      </div>
      {!shown ? (
        <button className="btn primary" disabled={!genus || !fc} onClick={submit}>Check</button>
      ) : (
        <div className="sim-result">
          <p>
            Cloud: <strong>{genusById(last.g).name}</strong>{last.variant && last.variant !== 'halo' ? ` (${last.variant})` : ''} — {genus === last.g ? 'correct' : `you chose ${genus ? genusById(genus).name : '—'}`}. <span className="muted">{genusById(last.g).looks}</span>
          </p>
          <p>Forecast: <strong>{FORECASTS.find((f) => f.id === s.forecast)!.text}</strong> — {fc === s.forecast ? 'correct' : s.partial.includes(fc!) ? 'partly right' : 'not the best reading'}.</p>
          <p className="small">{s.debrief}</p>
          <p><strong>{pts} / 2 points</strong></p>
          {i < order.length - 1 ? (
            <button className="btn primary" onClick={() => { setI(i + 1); setGenus(null); setFc(null); setShown(false) }}>Next sky</button>
          ) : (
            <p><strong>Score: {totalPercent(points)}%</strong>. The trend across frames — and pressure and wind — tells you more than any single cloud.</p>
          )}
        </div>
      )}
      <p><button className="btn" onClick={() => setGuide(!guide)}>{guide ? 'Hide' : 'Show'} field guide</button></p>
      {guide && (
        <div className="table-wrap">
          <table>
            <thead><tr><th>Genus</th><th>Level</th><th>Looks like</th><th>Suggests</th></tr></thead>
            <tbody>{GENERA.map((g) => <tr key={g.id}><td>{g.name}</td><td>{g.level}</td><td>{g.looks}</td><td>{g.predicts}</td></tr>)}</tbody>
          </table>
        </div>
      )}
      <p className="muted small">Drawings are schematic. Real skies mix several genera at once — practise outdoors with the Met Office or WMO Cloud Atlas photos.</p>
    </div>
  )
}
