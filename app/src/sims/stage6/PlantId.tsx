import { useState } from 'react'
import type { ReactNode } from 'react'
import type { SimProps } from '../types'
import { DECISIONS, FEATURES, KEY, SPECIMENS, UNKNOWN, evaluateRound, sessionScore } from './plantModel'
import type { Decision, FeatureId, RoundResult, Specimen } from './plantModel'

// Drawn, fictional plant features. Nothing here depicts a real species as edible.

const INK = 'var(--text)'
const LEAF = 'var(--ok)'
const MUT = 'var(--muted)'

function Unknown({ label }: { label: string }) {
  return (
    <g>
      <rect x="6" y="6" width="108" height="108" rx="10" fill="var(--panel-2)" stroke="var(--line)" strokeDasharray="4 4" />
      <text x="60" y="66" textAnchor="middle" fontSize="30" className="muted-fill">?</text>
      <text x="60" y="104" textAnchor="middle" fontSize="10" className="muted-fill">{label}</text>
    </g>
  )
}

function LeafArt({ v }: { v: string }) {
  if (v.startsWith('grass')) return <g>{[40, 55, 70, 85].map((x, i) => <path key={x} d={`M${x},110 Q${x + (i % 2 ? 8 : -8)},60 ${x + (i % 2 ? 14 : -10)},14`} stroke={LEAF} strokeWidth="5" fill="none" strokeLinecap="round" />)}</g>
  if (v.startsWith('fern')) return (
    <g>
      <line x1="60" y1="112" x2="60" y2="10" stroke={LEAF} strokeWidth="2" />
      {[20, 34, 48, 62, 76, 90].map((y, i) => (
        <g key={y}>
          <ellipse cx={60 - 16 + i * 1.5} cy={y} rx={14 - i} ry="4" fill={LEAF} transform={`rotate(-25 ${60 - 16 + i * 1.5} ${y})`} />
          <ellipse cx={60 + 16 - i * 1.5} cy={y} rx={14 - i} ry="4" fill={LEAF} transform={`rotate(25 ${60 + 16 - i * 1.5} ${y})`} />
        </g>
      ))}
    </g>
  )
  if (v.startsWith('heart')) return <path d="M60,108 C20,70 10,40 30,24 C44,14 56,22 60,34 C64,22 76,14 90,24 C110,40 100,70 60,108 Z" fill={LEAF} stroke={INK} strokeWidth="1" />
  return <g><path d="M60,112 Q20,60 60,8 Q100,60 60,112 Z" fill={LEAF} stroke={INK} strokeWidth="1" /><line x1="60" y1="112" x2="60" y2="12" stroke={INK} strokeWidth="1" opacity="0.5" /></g>
}

function StemArt({ stem, arr }: { stem?: string; arr?: string }) {
  const col = stem?.includes('purple') ? 'var(--accent-2)' : LEAF
  return (
    <g>
      {stem === undefined ? <rect x="54" y="10" width="12" height="100" fill="var(--panel-2)" stroke="var(--line)" strokeDasharray="3 3" /> : stem.startsWith('none') ? <line x1="20" y1="104" x2="100" y2="104" stroke={MUT} strokeWidth="2" /> : <rect x="54" y="10" width="12" height="100" rx={stem === 'square' ? 0 : 6} fill={col} stroke={INK} strokeWidth="1" />}
      {stem?.includes('blotched') && [24, 44, 70, 90].map((y) => <ellipse key={y} cx="60" cy={y} rx="4" ry="6" fill="var(--bad)" opacity="0.8" />)}
      {stem?.includes('hairy') && Array.from({ length: 12 }, (_, i) => <line key={i} x1={i % 2 ? 66 : 54} y1={14 + i * 8} x2={i % 2 ? 72 : 48} y2={10 + i * 8} stroke={INK} strokeWidth="1" />)}
      {arr === 'opposite' && [30, 70].map((y) => <g key={y}><ellipse cx="38" cy={y} rx="16" ry="5" fill={LEAF} /><ellipse cx="82" cy={y} rx="16" ry="5" fill={LEAF} /></g>)}
      {arr === 'alternate' && [26, 52, 78].map((y, i) => <ellipse key={y} cx={i % 2 ? 82 : 38} cy={y} rx="16" ry="5" fill={LEAF} />)}
      {arr === 'basal only' && [30, 50, 70, 90].map((x) => <ellipse key={x} cx={x} cy="98" rx="6" ry="16" fill={LEAF} transform={`rotate(${(x - 60) / 2} ${x} 98)`} />)}
      {stem === 'square' && <text x="60" y="118" textAnchor="middle" fontSize="9" className="muted-fill">□ section</text>}
    </g>
  )
}

function FlowerArt({ v }: { v: string }) {
  if (v === UNKNOWN) return <Unknown label="no flowers today" />
  if (v.startsWith('white umbrella')) return (
    <g>
      {[-40, -20, 0, 20, 40].map((dx) => <line key={dx} x1="60" y1="100" x2={60 + dx} y2="40" stroke={LEAF} strokeWidth="2" />)}
      {[-40, -20, 0, 20, 40].map((dx) => <circle key={dx} cx={60 + dx} cy="36" r="9" fill="#fff" stroke={INK} strokeWidth="1" />)}
    </g>
  )
  if (v.startsWith('white stars')) return (
    <g>
      <line x1="60" y1="112" x2="60" y2="50" stroke={LEAF} strokeWidth="3" />
      {[[-20, 30], [0, 22], [20, 30], [-10, 44], [10, 44]].map(([dx, y]) => <text key={`${dx}${y}`} x={60 + dx} y={y + 6} textAnchor="middle" fontSize="20" style={{ fill: 'var(--panel)', stroke: INK, strokeWidth: 0.6 }}>✶</text>)}
    </g>
  )
  if (v.startsWith('purple')) return <g><line x1="30" y1="20" x2="90" y2="20" stroke={LEAF} strokeWidth="2" />{[38, 60, 82].map((x) => <path key={x} d={`M${x - 10},30 Q${x},20 ${x + 10},30 L${x + 12},60 Q${x},66 ${x - 12},60 Z`} fill="var(--accent-2)" stroke={INK} strokeWidth="1" transform={`translate(0 ${x === 60 ? 10 : 0})`} />)}</g>
  return <g>{[0, 90, 180, 270].map((a) => <ellipse key={a} cx="60" cy="40" rx="12" ry="22" fill="var(--warn)" stroke={INK} strokeWidth="1" transform={`rotate(${a} 60 62)`} />)}<circle cx="60" cy="62" r="7" fill="var(--accent)" /></g>
}

function RootArt({ v }: { v: string }) {
  const ground = <line x1="6" y1="16" x2="114" y2="16" stroke="var(--ground)" strokeWidth="3" />
  if (v === 'bulb') return <g>{ground}<ellipse cx="60" cy="54" rx="22" ry="26" fill="var(--panel)" stroke={INK} />{[44, 52, 60, 68, 76].map((x) => <line key={x} x1={x} y1="78" x2={x + (x - 60) / 2} y2="104" stroke={INK} />)}</g>
  if (v === 'taproot') return <g>{ground}<path d="M48,18 L72,18 L62,110 Z" fill="var(--accent)" opacity="0.8" stroke={INK} /></g>
  if (v.startsWith('chambered')) return <g>{ground}<rect x="40" y="20" width="40" height="60" rx="10" fill="var(--panel)" stroke={INK} />{[34, 48, 62].map((y) => <line key={y} x1="42" y1={y} x2="78" y2={y} stroke={INK} />)}<text x="60" y="98" textAnchor="middle" fontSize="9" className="muted-fill">cut open: chambers</text></g>
  return <g>{ground}{Array.from({ length: 9 }, (_, i) => <path key={i} d={`M60,18 Q${30 + i * 8},60 ${20 + i * 10},${80 + (i % 3) * 10}`} stroke={INK} fill="none" />)}</g>
}

function Sheet({ sp, seen }: { sp: Specimen; seen: FeatureId[] }) {
  const has = (f: FeatureId) => seen.includes(f)
  const panel = (title: string, body: ReactNode) => (
    <svg className="diagram" viewBox="0 0 120 130" role="img" aria-label={title} style={{ maxWidth: 150 }}>
      {body}
      <text x="60" y="127" textAnchor="middle" fontSize="10" fontWeight="600">{title}</text>
    </svg>
  )
  return (
    <div className="grid-4">
      {panel('Leaf', has('leafShape') ? <LeafArt v={sp.traits.leafShape} /> : <Unknown label="not checked" />)}
      {panel('Stem & arrangement', has('stem') || has('arrangement') ? <StemArt stem={has('stem') ? sp.traits.stem : undefined} arr={has('arrangement') ? sp.traits.arrangement : undefined} /> : <Unknown label="not checked" />)}
      {panel('Flowers', has('flowers') ? <FlowerArt v={sp.traits.flowers} /> : <Unknown label="not checked" />)}
      {panel('Root', has('root') ? <RootArt v={sp.traits.root} /> : <Unknown label="not checked" />)}
    </div>
  )
}

export function PlantId({ onScore }: SimProps) {
  const [round, setRound] = useState(0)
  const [seen, setSeen] = useState<FeatureId[]>([])
  const [results, setResults] = useState<RoundResult[]>([])
  const [last, setLast] = useState<RoundResult | null>(null)
  const done = round >= SPECIMENS.length
  const sp = SPECIMENS[Math.min(round, SPECIMENS.length - 1)]

  const decide = (d: Decision) => {
    const r = evaluateRound(sp, seen, d)
    const all = [...results, r]
    setResults(all)
    setLast(r)
    if (round === SPECIMENS.length - 1) onScore(sessionScore(all))
  }
  const next = () => { setRound(round + 1); setSeen([]); setLast(null) }
  const restart = () => { setRound(0); setSeen([]); setResults([]); setLast(null) }

  return (
    <div>
      <div className="callout callout-danger">
        <div className="callout-title">⛔ Discipline trainer — not permission to forage</div>
        Every species here is invented. The trainer teaches the habit of checking every feature and refusing when any doubt remains.
        Never eat a wild plant or fungus identified from this course, an app or a photo.
      </div>

      <details>
        <summary><b>The key (fictional species)</b></summary>
        <div className="table-wrap">
          <table>
            <thead><tr><th>Species</th><th>Status</th>{FEATURES.map((f) => <th key={f.id}>{f.label}</th>)}</tr></thead>
            <tbody>
              {KEY.map((k) => (
                <tr key={k.id}>
                  <td>{k.name}</td>
                  <td style={{ color: k.status === 'edible-in-key' ? 'var(--ok)' : 'var(--bad)' }}>{k.status}</td>
                  {FEATURES.map((f) => <td key={f.id}>{k.traits[f.id]}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </details>

      {done ? (
        <div className="sim-result">
          <div className="score">{sessionScore(results)}%</div>
          <div>{results.filter((r) => r.poisoned).length} poisoning(s) · {results.filter((r) => !r.safe).length} of {results.length} specimens could not be safely identified by anyone.</div>
          <p className="muted small">Most specimens should have been refused. In real foraging the proportion is similar for a beginner: the skill is saying no.</p>
          <button className="btn primary" onClick={restart}>Start again</button>
        </div>
      ) : (
        <>
          <h4>Specimen {round + 1} of {SPECIMENS.length}</h4>
          <p>{sp.context}</p>
          <Sheet sp={sp} seen={seen} />
          <div className="row-btns">
            {FEATURES.map((f) => (
              <button key={f.id} className="btn small" disabled={seen.includes(f.id) || !!last} title={f.how} onClick={() => setSeen([...seen, f.id])}>
                {seen.includes(f.id) ? '✓ ' : 'Check '}{f.label}
              </button>
            ))}
          </div>
          {seen.length > 0 && (
            <ul className="small">
              {seen.map((f) => <li key={f}><b>{FEATURES.find((x) => x.id === f)!.label}:</b> {sp.traits[f]}</li>)}
            </ul>
          )}
          {!last ? (
            <div className="options">
              {DECISIONS.map((d) => <button key={d.id} className={`btn ${d.id === 'eat' ? 'danger' : ''}`} onClick={() => decide(d.id)}>{d.label}</button>)}
            </div>
          ) : (
            <div className="sim-result">
              <div><b>{last.score} pts.</b> {last.message}</div>
              <div className="small">Candidates left by your checks: {last.remaining.length ? last.remaining.map((k) => `${k.name} (${k.status})`).join(', ') : 'none — not in the key'}.</div>
              <div className="small">{sp.debrief}</div>
              <button className="btn primary" onClick={next}>{round === SPECIMENS.length - 1 ? 'See result' : 'Next specimen'}</button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
