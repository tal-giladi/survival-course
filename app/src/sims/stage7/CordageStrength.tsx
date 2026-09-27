import { useState } from 'react'
import type { SimProps } from '../types'
import { FIBERS, KNOTS, LOADS, defaultInput, evaluate, kgf, twistEfficiency } from './cordageModel'
import type { CordInput, FiberId, KnotId, LoadId } from './cordageModel'

// Cordage Strength Lab. Choose how the cord is made and which knot terminates it, then load it.
// The model (./cordageModel.ts, tested in src/test/stage7.test.ts) finds the weakest point and scores
// strength margin, effort and suitability.

function Helix({ twist, plies }: { twist: number; plies: number }) {
  // Side view of a cord: stripes at the surface twist angle.
  const w = 300, h = 60, y0 = 12, y1 = 48
  const slope = Math.tan((twist * Math.PI) / 180)
  const pitch = (y1 - y0) / Math.max(0.05, slope) // horizontal distance a stripe advances across the cord
  const stripes: string[] = []
  const step = Math.max(8, pitch / Math.max(1, plies) + 6)
  for (let x = -pitch; x < w; x += step) stripes.push(`M${x},${y1} L${x + pitch},${y0}`)
  return (
    <svg className="diagram" viewBox={`0 0 ${w} ${h + 16}`} role="img" aria-label={`Cord with a ${twist} degree surface twist`}>
      <defs><clipPath id="cs-clip"><rect x="0" y={y0} width={w} height={y1 - y0} rx="18" /></clipPath></defs>
      <rect x="0" y={y0} width={w} height={y1 - y0} rx="18" fill="var(--accent-2)" opacity="0.35" stroke="var(--line)" />
      <g clipPath="url(#cs-clip)">{stripes.map((d) => <path key={d} d={d} stroke="var(--ground)" strokeWidth="3" />)}</g>
      <text x="4" y={h + 12} fontSize="11" className="muted-fill">surface twist {twist}° · grip × obliquity efficiency {Math.round(twistEfficiency(twist) * 100)} %</text>
    </svg>
  )
}

export function CordageStrength({ onScore }: SimProps) {
  const [load, setLoad] = useState<LoadId>('foodbag')
  const [c, setC] = useState<CordInput>(defaultInput)
  const [best, setBest] = useState<Partial<Record<LoadId, number>>>({})
  const [shown, setShown] = useState(false)
  const r = evaluate(c, load)
  const L = LOADS[load]
  const set = (p: Partial<CordInput>) => { setC({ ...c, ...p }); setShown(false) }
  const test = () => {
    setShown(true)
    setBest({ ...best, [load]: Math.max(best[load] ?? 0, r.score) })
    onScore(r.score)
  }
  const maxDemand = Math.max(r.straight, ...r.points.map((p) => p.demand))

  return (
    <div>
      <div className="callout callout-info">Model, not a spec. Never trust hand-made cordage — or any improvised line — with a person’s weight. Life-safety rope is Stage 13 and formal training.</div>
      <div className="chip-group">
        {(Object.keys(LOADS) as LoadId[]).map((id) => (
          <button key={id} className={`chip ${id === load ? 'on' : ''}`} onClick={() => { setLoad(id); setShown(false) }}>
            {(best[id] ?? 0) >= 80 ? '✓ ' : ''}{LOADS[id].name}{best[id] !== undefined ? ` · ${best[id]}` : ''}
          </button>
        ))}
      </div>
      <p className="small"><strong>{L.name}:</strong> {L.brief} Needed margin: ×{L.sf}. Time budget: {Math.round(L.budgetMin / 60 * 10) / 10} h. Goal: 80+ on every job.</p>

      <div className="controls">
        <div className="control">
          <label>Fiber</label>
          <select value={c.fiber} onChange={(e) => set({ fiber: e.target.value as FiberId })}>
            {(Object.keys(FIBERS) as FiberId[]).map((k) => <option key={k} value={k}>{FIBERS[k].name}</option>)}
          </select>
          <span className="muted small">{FIBERS[c.fiber].where}</span>
        </div>
        <div className="control">
          <label>Plies</label>
          <div>{([1, 2, 3] as const).map((n) => <button key={n} className={`chip ${c.plies === n ? 'on' : ''}`} onClick={() => set({ plies: n })}>{n === 1 ? '1 (single strand)' : `${n}-ply`}</button>)}</div>
        </div>
        <div className="control">
          <label>Construction</label>
          <select value={c.build} disabled={c.plies === 1} onChange={(e) => set({ build: e.target.value as CordInput['build'] })}>
            <option value="reverse-wrap">Reverse wrap (plies counter-twisted)</option>
            <option value="single-twist">Twisted all one way (no counter-twist)</option>
          </select>
        </div>
        <div className="control">
          <label>Surface twist angle <span className="val">{c.twist}°</span></label>
          <input type="range" min={5} max={45} value={c.twist} onChange={(e) => set({ twist: +e.target.value })} />
        </div>
        <div className="control">
          <label>Diameter <span className="val">{c.diameter.toFixed(1)} mm</span></label>
          <input type="range" min={1.5} max={10} step={0.5} value={c.diameter} onChange={(e) => set({ diameter: +e.target.value })} />
        </div>
        <div className="control">
          <label>Knot at the critical termination</label>
          <select value={c.knot} onChange={(e) => set({ knot: e.target.value as KnotId })}>
            {(Object.keys(KNOTS) as KnotId[]).map((k) => <option key={k} value={k}>{KNOTS[k].name}</option>)}
          </select>
          <span className="muted small">{KNOTS[c.knot].note}</span>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={c.wet} onChange={(e) => set({ wet: e.target.checked })} /> Cord is wet (soaked before use / in rain)</label>
        </div>
      </div>
      <Helix twist={c.twist} plies={c.plies} />
      <p className="small">Straight breaking strength ≈ <strong>{Math.round(r.straight)} N</strong> (≈ {kgf(r.straight).toFixed(0)} kg) · making {L.metres} m takes ≈ <strong>{Math.round(r.minutes)} min</strong></p>

      <button className="btn primary" onClick={test}>Load it</button>

      {shown && (
        <div className="sim-result">
          <div className="grid-2">
            <div>
              <div className="score" style={{ color: r.score >= 80 ? 'var(--ok)' : r.score >= 50 ? 'var(--text)' : 'var(--bad)' }}>{r.score}</div>
              <div><strong>{r.outcome === 'breaks' ? 'It breaks.' : r.outcome === 'marginal' ? 'It holds — just. No margin for a gust, a jerk or a thin spot.' : 'It holds with margin.'}</strong> Margin at the weakest point: ×{r.margin.toFixed(2)} (need ×{L.sf}).</div>
              <div className="small muted">Strength {Math.round(r.parts.strength)}/60 · effort {Math.round(r.parts.economy)}/25 · suitability {Math.round(r.parts.suitability)}/15</div>
            </div>
            <div className="meters" style={{ gridTemplateColumns: '1fr' }}>
              {r.points.map((p) => (
                <div key={p.label} className={`meter ${p.demand > r.straight ? 'danger' : ''}`} title={`tension ${Math.round(p.tension)} N ÷ efficiency ${Math.round(p.eff * 100)} %`}>
                  <span>{p.label}</span>
                  <div className="meter-bar invert"><div style={{ width: `${(p.demand / maxDemand) * 100}%` }} /></div>
                  <span className="meter-val">{Math.round(p.demand)} N</span>
                </div>
              ))}
              <div className="meter">
                <span>Cord strength</span>
                <div className="meter-bar"><div style={{ width: `${(r.straight / maxDemand) * 100}%` }} /></div>
                <span className="meter-val">{Math.round(r.straight)} N</span>
              </div>
            </div>
          </div>
          <p className="small muted">Each bar is the straight-cord strength that point needs (its tension ÷ the fraction of strength a knot or bend keeps). The cord fails where the bar is longest.</p>
          {r.modes.length > 0 ? <ul>{r.modes.map((m) => <li key={m}>{m}</li>)}</ul> : <p>No weak points flagged. Test it gently before trusting it, and inspect it every day.</p>}
        </div>
      )}
    </div>
  )
}
