import { useState } from 'react'
import type { SimProps } from '../types'
import {
  CHALLENGES, EDGES, PULLEYS, SYSTEMS, evaluateRig, scoreRig,
  type EdgeId, type PulleyId, type Rig, type Situation, type SystemId,
} from './haulModel'

// Mechanical Advantage Lab (virtual only): pick a hauling system, pulleys, edge treatment, a haul-line
// redirect and the anchor-leg angle; see actual vs ideal advantage, the haul force, rope travel and
// the forces on the anchor legs. Three challenges are scored; free play is not.

const FREE: Situation = { massKg: 80, slopeDeg: 90, groundMu: 0.3, haulers: 3, perHauler: 250 }
const START: Rig = { system: '3:1', pulley: 'efficient', edge: 'roller', redirect: false, redirectAngle: 30, anchorAngle: 60 }

const kN = (n: number) => (n >= 1000 ? `${(n / 1000).toFixed(2)} kN` : `${Math.round(n)} N`)

function AnchorView({ angle, leg, total }: { angle: number; leg: number; total: number }) {
  // Two bolts/trees at the top, legs meeting at a master point, load pulling down.
  const cx = 160, my = 150, len = 110
  const h = (angle * Math.PI) / 360
  const ax = cx - len * Math.sin(h), ay = my - len * Math.cos(h)
  const bx = cx + len * Math.sin(h)
  const hot = angle > 120 ? 'var(--bad)' : angle > 90 ? 'var(--accent-2)' : 'var(--ok)'
  return (
    <svg className="diagram" viewBox="0 0 320 230" role="img" aria-label={`Two-leg anchor with ${angle} degree included angle: each leg carries ${kN(leg)} for a total of ${kN(total)}`}>
      <line x1={ax} y1={ay} x2={cx} y2={my} stroke={hot} strokeWidth="5" strokeLinecap="round" />
      <line x1={bx} y1={ay} x2={cx} y2={my} stroke={hot} strokeWidth="5" strokeLinecap="round" />
      <circle cx={ax} cy={ay} r="8" fill="var(--ground)" />
      <circle cx={bx} cy={ay} r="8" fill="var(--ground)" />
      <circle cx={cx} cy={my} r="6" fill="var(--text)" />
      <line x1={cx} y1={my} x2={cx} y2={my + 55} stroke="var(--accent)" strokeWidth="4" />
      <text x={cx} y={my + 72} textAnchor="middle" fontSize="12" fontWeight="700">{kN(total)} to the system</text>
      <text x={cx} y={my - 22} textAnchor="middle" fontSize="12">{angle}°</text>
      <text x={(ax + cx) / 2 - 8} y={(ay + my) / 2} textAnchor="end" fontSize="12" fontWeight="700">{kN(leg)}</text>
      <text x={(bx + cx) / 2 + 8} y={(ay + my) / 2} fontSize="12" fontWeight="700">{kN(leg)}</text>
      <text x={160} y={18} textAnchor="middle" fontSize="11" className="muted-fill">each leg = total ÷ (2·cos(angle/2))</text>
    </svg>
  )
}

function StrandView({ strands, haul }: { strands: number[]; haul: number }) {
  const max = Math.max(...strands, 1)
  const w = 300
  return (
    <svg className="diagram" viewBox={`0 0 ${w + 120} ${30 + strands.length * 26}`} role="img" aria-label={`Rope-part tensions in the system on the load, falling at each pulley because of friction: ${strands.map((t) => kN(t)).join(', ')}`}>
      <text x="0" y="14" fontSize="11" className="muted-fill">Rope parts of the system on the load (haul side first)</text>
      {strands.map((t, i) => (
        <g key={i}>
          <text x="0" y={38 + i * 26} fontSize="11">part {i + 1}</text>
          <rect x="50" y={26 + i * 26} width={Math.max(2, (t / max) * w)} height="16" rx="3" fill={i === 0 ? 'var(--accent)' : 'var(--info)'} />
          <text x={56 + (t / max) * w} y={38 + i * 26} fontSize="11" fontWeight="700">{kN(t)}</text>
        </g>
      ))}
      {haul > 0 && strands.length === 1 && <text x="50" y={70} fontSize="10" className="muted-fill">A 1:1 pull: the haulers carry the whole load-line tension.</text>}
    </svg>
  )
}

export function MechanicalAdvantage({ onScore }: SimProps) {
  const [mode, setMode] = useState<string>(CHALLENGES[2].id)
  const [free, setFree] = useState<Situation>(FREE)
  const [rig, setRig] = useState<Rig>(START)
  const [checked, setChecked] = useState<ReturnType<typeof scoreRig> | null>(null)

  const challenge = CHALLENGES.find((c) => c.id === mode)
  const s = challenge ? challenge.situation : free
  const r = evaluateRig(rig, s)
  const edges = (challenge ? challenge.edges : (Object.keys(EDGES) as EdgeId[]))
  const set = (patch: Partial<Rig>) => { setChecked(null); setRig((x) => ({ ...x, ...patch })) }
  const setS = (patch: Partial<Situation>) => { setChecked(null); setFree((x) => ({ ...x, ...patch })) }

  return (
    <div>
      <p className="small"><strong>Virtual only.</strong> A physics model for understanding, not a rigging guide. Never build a system that holds a person without qualified instruction.</p>
      <div className="chip-group">
        {CHALLENGES.map((c) => (
          <button key={c.id} className={`chip ${mode === c.id ? 'on' : ''}`} onClick={() => { setChecked(null); setMode(c.id); if (!c.edges.includes(rig.edge)) set({ edge: 'roller' }) }}>{c.name}</button>
        ))}
        <button className={`chip ${mode === 'free' ? 'on' : ''}`} onClick={() => { setChecked(null); setMode('free') }}>Free play</button>
      </div>
      {challenge && <p className="small">{challenge.brief} <span className="muted">(Model assumption: each hauler pulls a steady {s.perHauler} N.)</span></p>}

      {!challenge && (
        <div className="controls">
          <div className="control"><label>Load mass <span className="val">{free.massKg} kg</span></label><input type="range" min={10} max={200} step={5} value={free.massKg} onChange={(e) => setS({ massKg: Number(e.target.value) })} /></div>
          <div className="control"><label>Slope angle <span className="val">{free.slopeDeg}°{free.slopeDeg === 90 ? ' (hanging)' : ''}</span></label><input type="range" min={0} max={90} step={5} value={free.slopeDeg} onChange={(e) => setS({ slopeDeg: Number(e.target.value) })} /></div>
          <div className="control"><label>Ground friction μ <span className="val">{free.groundMu.toFixed(2)}</span></label><input type="range" min={0} max={0.6} step={0.05} value={free.groundMu} onChange={(e) => setS({ groundMu: Number(e.target.value) })} /></div>
          <div className="control"><label>Haulers <span className="val">{free.haulers}</span></label><input type="range" min={1} max={8} value={free.haulers} onChange={(e) => setS({ haulers: Number(e.target.value) })} /></div>
          <div className="control"><label>Assumed pull per hauler <span className="val">{free.perHauler} N</span></label><input type="range" min={100} max={400} step={25} value={free.perHauler} onChange={(e) => setS({ perHauler: Number(e.target.value) })} /></div>
        </div>
      )}

      <div className="controls">
        <div className="control">
          <label>System</label>
          <select value={rig.system} onChange={(e) => set({ system: e.target.value as SystemId })}>
            {SYSTEMS.map((x) => <option key={x.id} value={x.id}>{x.name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Pulleys</label>
          <select value={rig.pulley} onChange={(e) => set({ pulley: e.target.value as PulleyId })}>
            {(Object.keys(PULLEYS) as PulleyId[]).map((p) => <option key={p} value={p}>{PULLEYS[p].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Edge</label>
          <select value={rig.edge} onChange={(e) => set({ edge: e.target.value as EdgeId })}>
            {edges.map((x) => <option key={x} value={x}>{EDGES[x].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={rig.redirect} onChange={(e) => set({ redirect: e.target.checked })} /> Redirect the haul line at the anchor</label>
          {rig.redirect && (<><label>Angle between redirect strands <span className="val">{rig.redirectAngle}°</span></label><input type="range" min={0} max={150} step={10} value={rig.redirectAngle} onChange={(e) => set({ redirectAngle: Number(e.target.value) })} /></>)}
        </div>
        <div className="control"><label>Anchor-leg angle <span className="val">{rig.anchorAngle}°</span></label><input type="range" min={0} max={170} step={10} value={rig.anchorAngle} onChange={(e) => set({ anchorAngle: Number(e.target.value) })} /></div>
      </div>
      <p className="muted small">{r.sys.note} {PULLEYS[rig.pulley].note} {EDGES[rig.edge].note}</p>

      <div className="controls">
        <div>
          <div className="small">Ideal MA <strong>{r.ideal}:1</strong> · actual MA <strong>{r.actual.toFixed(2)}:1</strong> ({Math.round(r.efficiency * 100)} % of ideal) · {r.pulleys} pulley{r.pulleys === 1 ? '' : 's'}</div>
          <div className="small">Pull needed at the load: <strong>{kN(r.pull)}</strong> → load-line tension after the edge: <strong>{kN(r.lineTension)}</strong></div>
          <div className="small">Haul force: <strong>{kN(r.haulForce)}</strong> → <strong style={{ color: r.feasible ? 'var(--ok)' : 'var(--bad)' }}>{r.haulersNeeded} hauler{r.haulersNeeded === 1 ? '' : 's'}</strong> needed ({s.haulers} available)</div>
          <div className="small">Rope pulled per metre of load movement: <strong>{r.ropeTravel} m</strong></div>
          <div className="small">Anchor force: <strong>{kN(r.anchorForce)}</strong>{rig.redirect ? ` (incl. redirect ${kN(r.redirectLoad)})` : ''} · each leg <strong>{kN(r.legLoad)}</strong> (×{r.legMultiplier.toFixed(2)})</div>
          <div className="small">If the load snags and the whole team keeps pulling: up to <strong style={{ color: r.snagForce > 4000 ? 'var(--bad)' : undefined }}>{kN(r.snagForce)}</strong> on the load line.</div>
          <StrandView strands={r.strands} haul={r.haulForce} />
        </div>
        <AnchorView angle={rig.anchorAngle} leg={r.legLoad} total={r.anchorForce} />
      </div>

      {challenge && <button className="btn primary" onClick={() => { const sc = scoreRig(rig, s); setChecked(sc); onScore(sc.score) }}>Check my rig</button>}
      {checked && (
        <div className="sim-result">
          <div className="score">{checked.score}%</div>
          <ul>{checked.notes.map((n) => <li key={n}>{n}</li>)}</ul>
          <p className="muted small">Try: carabiners instead of pulleys, a bare edge instead of a roller, or 150° anchor legs — and watch what friction and angles cost. Real systems also lose force to rope stretch, progress-capture devices and resets, which this model leaves out.</p>
        </div>
      )}
    </div>
  )
}
