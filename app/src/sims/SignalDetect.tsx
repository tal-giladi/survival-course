import { useMemo, useState } from 'react'
import type { SimProps } from './registry'

// Be Seen, Be Heard: choose up to three signals for a situation. Each signal has a detection
// probability that depends on light, searcher type, distance and your position (canopy vs open).
// Combined P(detect) = 1 − Π(1 − p_i).

type Light = 'sun' | 'overcast' | 'night'
type Searcher = 'heli' | 'ground' | 'far-air' | 'none'
type Pos = 'canopy' | 'clearing'

interface Situation { id: string; text: string; light: Light; searcher: Searcher; pos: Pos; coverage: boolean; fireOk: boolean }

const SITUATIONS: Situation[] = [
  { id: 'a', text: 'Sunny afternoon. A helicopter is searching ~2 km away. You are in a clearing.', light: 'sun', searcher: 'heli', pos: 'clearing', coverage: false, fireOk: true },
  { id: 'b', text: 'Overcast morning. A ground team is calling out ~400 m away in dense forest. You are under canopy.', light: 'overcast', searcher: 'ground', pos: 'canopy', coverage: false, fireOk: true },
  { id: 'c', text: 'Night. A search aircraft is expected overhead. You are on an open ridge.', light: 'night', searcher: 'far-air', pos: 'clearing', coverage: false, fireOk: true },
  { id: 'd', text: 'Day 1, nobody knows you are missing yet. Intermittent one-bar phone coverage on the ridge above you.', light: 'overcast', searcher: 'none', pos: 'canopy', coverage: true, fireOk: false },
  { id: 'e', text: 'Sunny, dry, windy summer day in a pine forest (high fire danger). A plane is sweeping ~5 km away. You are at a forest edge.', light: 'sun', searcher: 'far-air', pos: 'clearing', coverage: false, fireOk: false },
]

interface Sig { id: string; name: string }
const SIGNALS: Sig[] = [
  { id: 'whistle', name: 'Whistle in threes' },
  { id: 'shout', name: 'Shouting' },
  { id: 'mirror', name: 'Signal mirror' },
  { id: 'tarp', name: 'Bright tarp laid out as a big shape' },
  { id: 'wave', name: 'Waving a bright jacket' },
  { id: 'smoke', name: 'Smoke from a signal fire' },
  { id: 'fire', name: 'Fire (for light at night)' },
  { id: 'strobe', name: 'Headlamp / strobe flashes' },
  { id: 'sms', name: 'SMS with coordinates from the ridge' },
  { id: 'plb', name: 'Activate PLB' },
]

export function pDetect(sig: string, s: Situation): { p: number; note?: string } {
  const open = s.pos === 'clearing'
  const air = s.searcher === 'heli' || s.searcher === 'far-air'
  switch (sig) {
    case 'whistle':
      return s.searcher === 'ground' ? { p: 0.7 } : air ? { p: 0.02, note: 'Inaudible over engines.' } : { p: 0.05 }
    case 'shout':
      return s.searcher === 'ground' ? { p: 0.3, note: 'Tiring; carries far less than a whistle.' } : { p: 0.01 }
    case 'mirror':
      return s.light === 'sun' && air ? { p: open ? 0.75 : 0.2 } : s.light === 'sun' ? { p: 0.1 } : { p: 0, note: 'Needs sunshine.' }
    case 'tarp':
      return air && s.light !== 'night' ? { p: open ? 0.45 : 0.05 } : s.searcher === 'ground' ? { p: 0.15 } : { p: 0.02 }
    case 'wave':
      return s.light === 'night' ? { p: 0.02 } : air ? { p: open ? 0.35 : 0.05 } : s.searcher === 'ground' ? { p: 0.2 } : { p: 0.02 }
    case 'smoke':
      if (!s.fireOk) return { p: 0.3, note: '⚠️ Very high wildfire risk — a signal fire here could start a catastrophe.' }
      return s.light === 'night' ? { p: 0.05 } : air ? { p: open ? 0.55 : 0.25 } : s.searcher === 'ground' ? { p: 0.3 } : { p: 0.1 }
    case 'fire':
      if (!s.fireOk) return { p: 0.2, note: '⚠️ Fire risk too high here.' }
      return s.light === 'night' ? { p: open ? 0.7 : 0.3 } : { p: 0.05 }
    case 'strobe':
      return s.light === 'night' ? { p: air ? 0.6 : 0.5 } : { p: 0.03 }
    case 'sms':
      return s.coverage ? { p: s.searcher === 'none' ? 0.8 : 0.6, note: 'Starts or focuses the search.' } : { p: 0, note: 'No coverage.' }
    case 'plb':
      return { p: 0.95, note: 'Reaches rescue coordination via satellite (Cospas-Sarsat).' }
  }
  return { p: 0 }
}

export function SignalDetect({ onScore }: SimProps) {
  const [hasPlb, setHasPlb] = useState(false)
  const order = useMemo(() => [...SITUATIONS].sort(() => Math.random() - 0.5), [])
  const [i, setI] = useState(0)
  const [chosen, setChosen] = useState<string[]>([])
  const [shown, setShown] = useState(false)
  const [scores, setScores] = useState<number[]>([])
  const s = order[i]
  const available = SIGNALS.filter((x) => x.id !== 'plb' || hasPlb)

  const results = chosen.map((c) => ({ id: c, ...pDetect(c, s) }))
  const risky = results.some((r) => (r.id === 'smoke' || r.id === 'fire') && !s.fireOk)
  const combined = 1 - results.reduce((a, r) => a * (1 - r.p), 1)
  const roundScore = Math.round(combined * 100 * (risky ? 0.4 : 1))

  const submit = () => {
    setShown(true)
    const next = [...scores, roundScore]
    setScores(next)
    if (i === order.length - 1) onScore(Math.round(next.reduce((a, b) => a + b, 0) / next.length))
  }

  return (
    <div>
      <label className="small"><input type="checkbox" checked={hasPlb} onChange={(e) => { setHasPlb(e.target.checked); setChosen([]); setShown(false) }} /> I carry a PLB (try both ways)</label>
      <p className="muted small">Situation {i + 1} of {order.length}. Pick up to <strong>3</strong> signals — time, energy and materials are limited.</p>
      <div className="callout callout-info">{s.text}</div>
      <div className="chip-group">
        {available.map((x) => (
          <button key={x.id} disabled={shown} className={`chip ${chosen.includes(x.id) ? 'on' : ''}`} onClick={() => setChosen(chosen.includes(x.id) ? chosen.filter((c) => c !== x.id) : chosen.length < 3 ? [...chosen, x.id] : chosen)}>
            {x.name}
          </button>
        ))}
      </div>
      {!shown ? (
        <button className="btn primary" disabled={chosen.length === 0} onClick={submit}>Signal!</button>
      ) : (
        <div className="sim-result">
          {results.map((r) => (
            <div key={r.id} className="small">
              {SIGNALS.find((x) => x.id === r.id)!.name}: {Math.round(r.p * 100)}% {r.note && <span className="muted">— {r.note}</span>}
              <div className="bar"><div style={{ width: `${r.p * 100}%` }} /></div>
            </div>
          ))}
          <p>Combined chance of being detected / alerting help: <strong>{Math.round(combined * 100)}%</strong>{risky && ' — score reduced for creating a wildfire hazard'}.</p>
          {i < order.length - 1 ? (
            <button className="btn primary" onClick={() => { setI(i + 1); setChosen([]); setShown(false) }}>Next situation</button>
          ) : (
            <p><strong>Average: {Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)}%</strong>. Notice how the best signal depends on light, searcher and position — and how much a PLB changes everything.</p>
          )}
        </div>
      )}
    </div>
  )
}
