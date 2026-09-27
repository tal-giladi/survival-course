import { useState } from 'react'
import type { SimProps } from '../types'
import { CHALLENGES, CLIMATES, DIAMETERS, GROUNDS, STARTS, TOOLS, inputFor, scoreDecision, simulateStill } from './solarStillModel'
import type { ClimateId, GroundId, StartId, StillChoice, StillInput, ToolId } from './solarStillModel'

// Model and assumptions live in ./solarStillModel.ts (unit-tested in src/test/stage4.test.ts).

function StillPicture({ d, yieldL, liquid }: { d: number; yieldL: number; liquid: boolean }) {
  const w = 120 + d * 220
  const cx = 300
  const depth = 40 + d * 60
  const drops = Math.min(12, Math.round(yieldL * 4))
  return (
    <svg className="diagram" viewBox="0 0 600 230" role="img" aria-label="Cross-section of the pit still you are building">
      <rect x="0" y="0" width="600" height="80" fill="var(--sky)" />
      <circle cx="540" cy="36" r="20" fill="var(--accent-2)" opacity="0.85" />
      <rect x="0" y="80" width="600" height="150" fill="var(--ground)" opacity="0.45" />
      <path d={`M${cx - w / 2},80 Q${cx},${80 + depth * 2} ${cx + w / 2},80 Z`} fill="var(--panel-2)" />
      {liquid && <path d={`M${cx - w / 4},${80 + depth * 0.7} Q${cx},${80 + depth * 1.1} ${cx + w / 4},${80 + depth * 0.7} Z`} fill="var(--info)" opacity="0.35" />}
      <path d={`M${cx - w / 2 - 10},80 L${cx},${80 + depth * 0.75} L${cx + w / 2 + 10},80`} fill="none" stroke="var(--info)" strokeWidth="3" />
      <circle cx={cx} cy={78 + depth * 0.75 - 10} r="7" fill="var(--muted)" />
      <rect x={cx - 14} y={80 + depth * 0.75 + 6} width="28" height="22" rx="3" fill="none" stroke="var(--text)" strokeWidth="2" />
      {Array.from({ length: drops }).map((_, i) => (
        <circle key={i} cx={cx - w / 3 + (i * (2 * w) / 3) / Math.max(1, drops - 1)} cy={80 + depth * 0.75 * (1 - Math.abs(i / Math.max(1, drops - 1) - 0.5) * 2) + 6} r="3" fill="var(--info)" />
      ))}
      <text x="20" y="104" fontSize="12">Pit Ø {d.toFixed(1)} m</text>
      <text x="20" y="220" fontSize="11" className="muted-fill">Sun heats the pit → soil water evaporates → condenses under the cooler sheet → runs to the low point → drips into the cup.</text>
    </svg>
  )
}

export function SolarStill({ onScore }: SimProps) {
  const [mode, setMode] = useState<'free' | number>(0)
  const [choice, setChoice] = useState<StillChoice>({ diameterM: 0.9, start: 'noon', days: 1, plants: false, pourLiquid: false })
  const [free, setFree] = useState<StillInput>({ climate: 'desert-summer', ground: 'damp-sand', tool: 'stick', diameterM: 0.9, start: 'dawn', days: 3, plants: false, liquidLpd: 0 })
  const [decided, setDecided] = useState<null | 'build' | 'skip'>(null)
  const [scores, setScores] = useState<number[]>(CHALLENGES.map(() => -1))

  const ch = typeof mode === 'number' ? CHALLENGES[mode] : null
  const input = ch ? inputFor(ch, choice) : free
  const r = simulateStill(input)
  const setC = <K extends keyof StillChoice>(k: K, v: StillChoice[K]) => { setChoice((c) => ({ ...c, [k]: v })); setDecided(null) }
  const setF = <K extends keyof StillInput>(k: K, v: StillInput[K]) => setFree((f) => ({ ...f, [k]: v }))

  const decide = (d: 'build' | 'skip') => {
    if (!ch || typeof mode !== 'number') return
    const s = scoreDecision(ch, d, choice).score
    const next = scores.map((x, i) => (i === mode ? Math.max(x, s) : x))
    setScores(next)
    setDecided(d)
    onScore(Math.round(next.reduce((a, x) => a + Math.max(0, x), 0) / CHALLENGES.length))
  }
  const verdict = ch && decided ? scoreDecision(ch, decided, choice) : null

  return (
    <div>
      <div className="chip-group">
        {CHALLENGES.map((c, i) => (
          <button key={c.id} className={`chip ${mode === i ? 'on' : ''}`} onClick={() => { setMode(i); setDecided(null); setChoice({ diameterM: 0.9, start: c.starts[0], days: 1, plants: false, pourLiquid: false }) }}>
            {scores[i] >= 0 ? `${scores[i]}% · ` : ''}{c.title}
          </button>
        ))}
        <button className={`chip ${mode === 'free' ? 'on' : ''}`} onClick={() => { setMode('free'); setDecided(null) }}>Free play</button>
      </div>

      {ch && (
        <div className="callout callout-info">
          <div className="callout-title">{ch.title}</div>
          {ch.brief}
          <div className="small muted">{CLIMATES[ch.fixed.climate].name} · {GROUNDS[ch.fixed.ground].name} · {TOOLS[ch.fixed.tool].name} · Alternative: {ch.alternative.label}</div>
        </div>
      )}

      <div className="controls">
        {!ch && (
          <>
            <div className="control">
              <label>Climate and season</label>
              <select value={free.climate} onChange={(e) => setF('climate', e.target.value as ClimateId)}>
                {(Object.keys(CLIMATES) as ClimateId[]).map((k) => <option key={k} value={k}>{CLIMATES[k].name}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Ground</label>
              <select value={free.ground} onChange={(e) => setF('ground', e.target.value as GroundId)}>
                {(Object.keys(GROUNDS) as GroundId[]).map((k) => <option key={k} value={k}>{GROUNDS[k].name}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Digging tool</label>
              <select value={free.tool} onChange={(e) => setF('tool', e.target.value as ToolId)}>
                {(Object.keys(TOOLS) as ToolId[]).map((k) => <option key={k} value={k}>{TOOLS[k].name}</option>)}
              </select>
            </div>
            <div className="control">
              <label>Non-potable liquid poured in <span className="val">{free.liquidLpd} L/day</span></label>
              <input type="range" min={0} max={5} step={0.5} value={free.liquidLpd} onChange={(e) => setF('liquidLpd', +e.target.value)} />
            </div>
          </>
        )}
        <div className="control">
          <label>Pit diameter</label>
          <select value={input.diameterM} onChange={(e) => (ch ? setC('diameterM', +e.target.value) : setF('diameterM', +e.target.value))}>
            {DIAMETERS.map((d) => <option key={d} value={d}>{d.toFixed(1)} m (≈{Math.round((Math.PI * d * d) / 4 * 100) / 100} m² opening)</option>)}
          </select>
        </div>
        <div className="control">
          <label>When you build</label>
          <select value={input.start} onChange={(e) => (ch ? setC('start', e.target.value as StartId) : setF('start', e.target.value as StartId))}>
            {(ch ? ch.starts : (Object.keys(STARTS) as StartId[])).map((k) => <option key={k} value={k}>{STARTS[k].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Days you will run it <span className="val">{input.days}</span></label>
          <input type="range" min={1} max={ch ? ch.maxDays : 3} value={input.days} onChange={(e) => (ch ? setC('days', +e.target.value) : setF('days', +e.target.value))} />
        </div>
        {(!ch || ch.plantsAvailable) && (
          <div className="control">
            <label><input type="checkbox" checked={input.plants} onChange={(e) => (ch ? setC('plants', e.target.checked) : setF('plants', e.target.checked))} /> Add cut green vegetation (only plants you know are non-toxic)</label>
          </div>
        )}
        {ch && ch.liquidLpd > 0 && (
          <div className="control">
            <label><input type="checkbox" checked={choice.pourLiquid} onChange={(e) => setC('pourLiquid', e.target.checked)} /> Pour {ch.liquidLpd} L/day of {ch.liquidName} into the pit</label>
          </div>
        )}
      </div>

      <StillPicture d={input.diameterM} yieldL={r.totalYield / Math.max(1, input.days)} liquid={input.liquidLpd > 0} />

      {ch && (
        <div>
          <button className="btn primary" onClick={() => decide('build')}>Build this still</button>{' '}
          <button className="btn" onClick={() => decide('skip')}>Don’t build — {ch.alternative.label.toLowerCase()}</button>
        </div>
      )}

      {(!ch || decided) && (
        <div className="sim-result">
          {verdict && (
            <>
              <div className="score">{verdict.score}%</div>
              <p>
                {verdict.shouldBuild
                  ? `Building was worth it here: the best still nets about ${verdict.best.net.toFixed(1)} L over the stay (Ø ${verdict.best.choice.diameterM} m, ${STARTS[verdict.best.choice.start].name.toLowerCase()}, ${verdict.best.choice.days} day${verdict.best.choice.days > 1 ? 's' : ''}${verdict.best.choice.pourLiquid ? ', with liquid poured in' : ''}${verdict.best.choice.plants ? ', with vegetation' : ''}).`
                  : `Not building was the better call: the best still possible here nets ${verdict.best.net.toFixed(1)} L, versus “${ch?.alternative.label}” (${ch?.alternative.netL} L).`}
              </p>
            </>
          )}
          <table>
            <thead><tr><th>Day</th><th>Sunlight limit</th><th>Water in pit</th><th>Yield</th></tr></thead>
            <tbody>
              {r.perDay.map((d) => (
                <tr key={d.day}><td>{d.day}</td><td>{d.energy.toFixed(2)} L</td><td>{d.supply.toFixed(2)} L</td><td><strong>{d.yieldL.toFixed(2)} L</strong></td></tr>
              ))}
            </tbody>
          </table>
          <div className="small">
            Dig {Math.round(r.volumeL)} L of soil ≈ {Math.round(r.digMin)} min, total build ≈ {Math.round(r.buildMin)} min →
            {' '}extra sweat ≈ <strong>{r.sweatCost.toFixed(2)} L</strong>. Yield {r.totalYield.toFixed(2)} L. Net{' '}
            <strong style={{ color: r.net > 0 ? 'var(--ok)' : 'var(--bad)' }}>{r.net > 0 ? '+' : ''}{r.net.toFixed(2)} L</strong>. Limited by {r.limitedBy}.
          </div>
          <p className="muted small">Best-case efficiency 15 % of sunlight into collected water (Jackson &amp; van Bavel’s 1965 field stills); real stills often do worse — leaks, sagging plastic, drips falling back, and soil that dries out.</p>
        </div>
      )}
    </div>
  )
}
