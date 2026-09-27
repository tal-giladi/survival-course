import { useState } from 'react'
import type { SimProps } from '../types'
import {
  ACTIONS,
  CASES,
  actionById,
  applyAction,
  initialState,
  scoreRun,
  soapNote,
  status,
  vitals,
  type ActionId,
  type CaseDef,
  type LogEntry,
  type PatientState,
  type Vitals,
} from './patientModel'

// Patient Assessment simulator: the learner works a mock patient in real (simulated) minutes.
// All physiology lives in patientModel.ts; this component is presentation only.

const GROUPS: { id: string; label: string }[] = [
  { id: 'scene', label: 'Scene' },
  { id: 'primary', label: 'Primary survey — life threats' },
  { id: 'treat', label: 'Treatment and protection' },
  { id: 'assess', label: 'Assessment' },
  { id: 'other', label: 'Communication and time' },
]

const MAX_MIN = 60

function trend(a?: number, b?: number) {
  if (a === undefined || b === undefined) return ''
  return b > a + 1 ? ' ↑' : b < a - 1 ? ' ↓' : ' →'
}

function HrChart({ vl }: { vl: Vitals[] }) {
  if (vl.length < 2) return null
  const W = 320, H = 120
  const tMax = Math.max(10, ...vl.map((v) => v.t))
  const x = (t: number) => 30 + (t / tMax) * (W - 40)
  const y = (hr: number) => H - 20 - ((Math.min(180, hr) - 40) / 140) * (H - 30)
  const pts = vl.map((v) => `${x(v.t)},${y(v.hr)}`).join(' ')
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Heart rate trend over time">
      <rect x={30} y={y(100)} width={W - 40} height={y(60) - y(100)} fill="var(--ok)" opacity="0.12" />
      <text x={W - 12} y={y(80)} textAnchor="end" fontSize="9" className="muted-fill">normal 60–100</text>
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2" />
      {vl.map((v) => <circle key={v.t} cx={x(v.t)} cy={y(v.hr)} r="3" fill="var(--accent)" />)}
      <line x1={30} x2={W - 10} y1={H - 20} y2={H - 20} stroke="var(--line)" />
      <text x={30} y={H - 6} fontSize="9" className="muted-fill">0</text>
      <text x={W - 10} y={H - 6} fontSize="9" textAnchor="end" className="muted-fill">{tMax} min</text>
      <text x={4} y={14} fontSize="9" className="muted-fill">HR</text>
    </svg>
  )
}

export function PatientAssessment({ onScore }: SimProps) {
  const [c, setC] = useState<CaseDef | null>(null)
  const [s, setS] = useState<PatientState | null>(null)
  const [log, setLog] = useState<LogEntry[]>([])
  const [vl, setVl] = useState<Vitals[]>([])
  const [done, setDone] = useState(false)

  const start = (k: CaseDef) => {
    setC(k)
    setS(initialState(k))
    setLog([])
    setVl([])
    setDone(false)
  }

  const finish = (cc: CaseDef, fl: LogEntry[], fv: Vitals[], fs: PatientState) => {
    setDone(true)
    onScore(scoreRun(cc, fl, fv, fs).score)
  }

  const act = (a: ActionId) => {
    if (!c || !s || done) return
    const r = applyAction(c, s, a)
    const nl = [...log, { t: s.t, action: a, note: r.note }]
    const nv = a === 'vitals' ? [...vl, vitals(r.state)] : vl
    setS(r.state)
    setLog(nl)
    setVl(nv)
    if (status(c, r.state) === 'critical' || r.state.t >= MAX_MIN) finish(c, nl, nv, r.state)
  }

  if (!c || !s) {
    return (
      <div>
        <div className="callout callout-warning">Virtual practice only. A simulator teaches the <em>sequence</em>; hands-on skills need a WFA/WAFA/WFR course with an instructor.</div>
        <p>Choose a patient. Every action costs simulated minutes, and the patient’s body keeps changing while you work. Take vital signs repeatedly to see trends. When you are ready to hand over (or at {MAX_MIN} min), you get a score and a SOAP note.</p>
        <div className="options">
          {CASES.map((k) => (
            <button key={k.id} className="option" onClick={() => start(k)}>
              <strong>{k.title}</strong>
              <div className="why">{k.env}</div>
            </button>
          ))}
        </div>
      </div>
    )
  }

  const st = status(c, s)
  const lastNote = log[log.length - 1]?.note

  if (done) {
    const r = scoreRun(c, log, vl, s)
    const n = soapNote(c, log, vl, s)
    return (
      <div>
        <div className="sim-result">
          <div className="score">{r.score}/100</div>
          <p>Patient status at hand-over: <strong>{st}</strong> (T+{s.t} min).</p>
          <ul>
            {r.parts.map((p) => (
              <li key={p.label}><strong>{p.label}</strong>: {p.got}/{p.max} — {p.note}</li>
            ))}
          </ul>
          {r.harms.length > 0 && (
            <>
              <div><strong>Actions that hurt this patient (−8 each):</strong></div>
              <ul>{r.harms.map((h) => <li key={h}>{h}</li>)}</ul>
            </>
          )}
          <div><strong>What mattered most here:</strong></div>
          <ul>{c.critical.map((k) => <li key={k.action}>{actionById(k.action).label} (by ~{k.by} min): {k.why}</li>)}</ul>
        </div>
        <h4>Your SOAP note (generated)</h4>
        <div className="card small">
          <p><strong>S — Subjective:</strong> {n.s}</p>
          <p><strong>O — Objective:</strong></p>
          <ul>{n.o.map((x) => <li key={x}>{x}</li>)}</ul>
          <p><strong>A — Assessment (problem list):</strong></p>
          <ul>{n.a.map((x) => <li key={x}>{x}</li>)}</ul>
          <p><strong>P — Plan (and what was done):</strong></p>
          <ul>{n.p.map((x) => <li key={x}>{x}</li>)}</ul>
        </div>
        <HrChart vl={vl} />
        <button className="btn primary" onClick={() => start(c)}>Try this patient again</button>
        <button className="btn" onClick={() => { setC(null); setS(null) }}>Choose another patient</button>
      </div>
    )
  }

  return (
    <div>
      <div className="muted small">{c.env} · T+{s.t} min</div>
      <p>{c.intro}</p>
      {lastNote && <div className="feedback ok small">{lastNote}</div>}
      {GROUPS.map((g) => (
        <div key={g.id}>
          <div className="small"><strong>{g.label}</strong></div>
          <div className="chip-group">
            {ACTIONS.filter((a) => a.group === g.id).map((a) => (
              <button key={a.id} className="chip" onClick={() => act(a.id)} title={`${a.minutes} min`}>
                {a.label} <span className="muted">· {a.minutes}′</span>
              </button>
            ))}
          </div>
        </div>
      ))}
      <div className="grid-2">
        <div>
          <div className="small"><strong>Vital signs</strong> {vl.length === 0 && <span className="muted">— none taken yet</span>}</div>
          {vl.length > 0 && (
            <div className="table-wrap">
              <table className="small">
                <thead><tr><th>T+</th><th>HR</th><th>RR</th><th>Radial</th><th>LOR</th><th>Skin</th><th>Core °C</th></tr></thead>
                <tbody>
                  {vl.map((v, i) => (
                    <tr key={v.t + '-' + i}>
                      <td>{v.t}</td>
                      <td>{v.hr}{trend(vl[i - 1]?.hr, v.hr)}</td>
                      <td>{v.rr}{trend(vl[i - 1]?.rr, v.rr)}</td>
                      <td>{v.radial}</td>
                      <td>{v.lor}</td>
                      <td>{v.skin}</td>
                      <td>{v.core}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="tiny muted">Core temperature is shown for teaching; in the field you usually infer it from behaviour, shivering and skin.</div>
          <HrChart vl={vl} />
        </div>
        <div>
          <div className="small"><strong>Your actions</strong></div>
          <ol className="small">{log.map((l, i) => <li key={i}>T+{l.t}: {actionById(l.action).label}</li>)}</ol>
          <button className="btn primary" onClick={() => finish(c, log, vl, s)}>Hand over / end and debrief</button>
        </div>
      </div>
    </div>
  )
}
