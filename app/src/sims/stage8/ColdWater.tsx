import { useState } from 'react'
import type { SimProps } from '../types'
import { BEHAVIOR, BUILD, CLOTHING, COLD_WATER_SCENARIOS, coldWater, outcome, scoreChoice } from './coldWaterModel'
import type { Behavior, Build, Clothing, ColdWaterInput, ColdWaterResult } from './coldWaterModel'
import { LineChart } from './charts'

// Cold Water: immersion timeline with uncertainty bands. Model in ./coldWaterModel.ts.

const SHOCK = ['none', 'mild', 'strong', 'severe']
const OUT_LABEL = ['Unlikely to survive until rescue', 'Uncertain', 'Likely to hold out until rescue / reach safety']
const OUT_COLOR = ['var(--bad)', 'var(--warn)', 'var(--ok)']

function Timeline({ r, rescueMin }: { r: ColdWaterResult; rescueMin?: number }) {
  const tMax = Math.min(600, Math.max(60, Math.ceil((Math.max(r.t30.hi, rescueMin ?? 0, r.swimMin ?? 0) * 1.05) / 30) * 30))
  const W = 640
  const L = 150
  const sx = (m: number) => L + (Math.min(m, tMax) / tMax) * (W - L - 16)
  const rows: { label: string; lo: number; mid: number; hi: number; color: string; from?: number }[] = [
    { label: 'Cold shock', lo: 0, mid: r.shockMin, hi: r.shockMin, color: 'var(--bad)', from: 0 },
    { label: 'Useful arm/hand function', lo: r.swimFailure.lo, mid: r.swimFailure.mid, hi: r.swimFailure.hi, color: 'var(--accent)', from: 0 },
    { label: 'Core reaches 35 °C', lo: r.t35.lo, mid: r.t35.mid, hi: r.t35.hi, color: 'var(--info)' },
    { label: 'Unconscious (~30 °C)', lo: r.t30.lo, mid: r.t30.mid, hi: r.t30.hi, color: 'var(--bad)' },
  ]
  const ticks = Array.from({ length: 7 }, (_, i) => Math.round((tMax / 6) * i))
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${rows.length * 40 + 60}`} role="img" aria-label="Immersion timeline with uncertainty ranges">
      {ticks.map((t) => (
        <g key={t}>
          <line x1={sx(t)} x2={sx(t)} y1={10} y2={rows.length * 40 + 20} stroke="var(--line)" strokeWidth="0.6" />
          <text x={sx(t)} y={rows.length * 40 + 36} fontSize="10" textAnchor="middle" className="muted-fill">{t} min</text>
        </g>
      ))}
      {rows.map((row, k) => {
        const y = 20 + k * 40
        return (
          <g key={row.label}>
            <text x={8} y={y + 12} fontSize="12" fontWeight="600">{row.label}</text>
            {row.from !== undefined ? (
              <>
                <rect x={sx(0)} y={y} width={Math.max(2, sx(row.lo) - sx(0))} height="16" rx="4" fill={row.color} opacity="0.85" />
                <rect x={sx(row.lo)} y={y} width={Math.max(0, sx(row.hi) - sx(row.lo))} height="16" rx="4" fill={row.color} opacity="0.3" />
              </>
            ) : (
              <>
                <rect x={sx(row.lo)} y={y} width={Math.max(2, sx(row.hi) - sx(row.lo))} height="16" rx="4" fill={row.color} opacity="0.3" />
                <line x1={sx(row.mid)} x2={sx(row.mid)} y1={y - 2} y2={y + 18} stroke={row.color} strokeWidth="3" />
              </>
            )}
          </g>
        )
      })}
      {rescueMin !== undefined && (
        <g>
          <line x1={sx(rescueMin)} x2={sx(rescueMin)} y1={4} y2={rows.length * 40 + 22} stroke="var(--ok)" strokeWidth="2" strokeDasharray="6 4" />
          <text x={sx(rescueMin) + 4} y={12} fontSize="11" style={{ fill: 'var(--ok)' }}>rescue ETA</text>
        </g>
      )}
      {r.swimMin !== undefined && (
        <g>
          <line x1={sx(r.swimMin)} x2={sx(r.swimMin)} y1={4} y2={rows.length * 40 + 22} stroke="var(--accent-2)" strokeWidth="2" />
          <text x={sx(r.swimMin) + 4} y={rows.length * 40 + 48} fontSize="11" style={{ fill: 'var(--accent-2)' }}>reach safety by swimming</text>
        </g>
      )}
    </svg>
  )
}

function CoreChart({ r }: { r: ColdWaterResult }) {
  const tMax = Math.min(600, Math.max(60, Math.ceil(r.t30.hi / 30) * 30))
  const x = Array.from({ length: 61 }, (_, i) => (tMax / 60) * i)
  const core = (t: number, rate: number) => (t < 10 ? 37 : Math.max(24, 37 - (rate * (t - 10)) / 60))
  return (
    <LineChart
      x={x}
      xLabel="minutes"
      yMin={26}
      yMax={38}
      yLabel="core °C"
      ariaLabel="Core temperature during immersion with uncertainty band"
      series={[{ label: 'Core (central estimate)', color: 'var(--bad)', values: x.map((t) => core(t, r.coolRate.mid)) }]}
      band={{ lo: x.map((t) => core(t, r.coolRate.hi)), hi: x.map((t) => core(t, r.coolRate.lo)), color: 'var(--bad)' }}
      lines={[{ y: 35, label: '35 °C', color: 'var(--info)' }, { y: 30, label: '~30 °C unconscious', color: 'var(--bad)' }]}
    />
  )
}

function Result({ r, rescueMin }: { r: ColdWaterResult; rescueMin?: number }) {
  return (
    <div className="sim-result">
      <div className="small">
        Cold shock: <strong>{SHOCK[r.shockSeverity]}</strong>
        {r.shockMin > 0 && <> (≈ {r.shockMin.toFixed(1)} min)</>} · useful movement ≈ <strong>{Math.round(r.swimFailure.lo)}–{Math.round(r.swimFailure.hi)} min</strong> · cooling ≈{' '}
        <strong>{r.coolRate.lo.toFixed(1)}–{r.coolRate.hi.toFixed(1)} °C/h</strong>
        {r.swimMin !== undefined && <> · swim time ≈ <strong>{Math.round(r.swimMin)} min</strong></>}
      </div>
      <Timeline r={r} rescueMin={rescueMin} />
      <CoreChart r={r} />
      <ul className="small">{r.notes.map((n) => <li key={n}>{n}</li>)}</ul>
    </div>
  )
}

export function ColdWater({ onScore }: SimProps) {
  const [mode, setMode] = useState<'free' | number>(0)
  const [free, setFree] = useState<ColdWaterInput>({ waterC: 10, airC: 8, wind: 15, clothing: 'light', pfd: true, build: 'average', behavior: 'help', shoreM: 200 })
  const [answers, setAnswers] = useState<(Behavior | undefined)[]>(COLD_WATER_SCENARIOS.map(() => undefined))
  const [compare, setCompare] = useState<Behavior | undefined>(undefined)

  const choose = (k: number, b: Behavior) => {
    if (answers[k]) return
    const next = answers.map((a, i) => (i === k ? b : a))
    setAnswers(next)
    setCompare(b)
    const total = next.reduce((acc, a, i) => acc + (a ? scoreChoice(COLD_WATER_SCENARIOS[i], a) : 0), 0)
    onScore(Math.round((total / COLD_WATER_SCENARIOS.length) * 100))
  }

  const setF = <K extends keyof ColdWaterInput>(k: K, v: ColdWaterInput[K]) => setFree({ ...free, [k]: v })

  return (
    <div>
      <div className="chip-group">
        {COLD_WATER_SCENARIOS.map((s, i) => (
          <button key={s.id} className={`chip ${mode === i ? 'on' : ''}`} onClick={() => { setMode(i); setCompare(answers[i]) }}>
            {answers[i] ? (answers[i] === s.best ? '✓ ' : '• ') : ''}Scenario {i + 1}
          </button>
        ))}
        <button className={`chip ${mode === 'free' ? 'on' : ''}`} onClick={() => setMode('free')}>Free play</button>
      </div>

      {typeof mode === 'number' && (() => {
        const s = COLD_WATER_SCENARIOS[mode]
        const a = answers[mode]
        const shown = compare ?? a
        return (
          <div>
            <h4>{s.title}</h4>
            <p>{s.story}</p>
            <p className="small muted">Water {s.base.waterC} °C · air {s.base.airC} °C · {CLOTHING[s.base.clothing].label} · {s.base.pfd ? 'PFD on' : 'no PFD'} · safety {s.base.shoreM} m away · rescue ≈ {s.rescueMin} min</p>
            <p><strong>After the first minute of floating and controlling your breathing, what do you do?</strong></p>
            <div className="chip-group">
              {s.options.map((b) => (
                <button key={b} className={`chip ${shown === b ? 'on' : ''}`} onClick={() => (a ? setCompare(b) : choose(mode, b))}>
                  {BEHAVIOR[b].label}
                </button>
              ))}
            </div>
            {a && shown && (() => {
              const r = coldWater({ ...s.base, behavior: shown })
              const o = outcome(r, s.rescueMin)
              return (
                <>
                  <div className={`callout ${a === s.best ? 'callout-tip' : 'callout-warning'}`}>
                    <div className="callout-title">{a === s.best ? 'Best choice.' : `You chose: ${BEHAVIOR[a].label}. Best: ${BEHAVIOR[s.best].label}.`}</div>
                    {s.debrief}
                    <div className="small">Tap the other options to compare their timelines.</div>
                  </div>
                  <p>Showing <strong>{BEHAVIOR[shown].label}</strong>: <span style={{ color: OUT_COLOR[o], fontWeight: 700 }}>{OUT_LABEL[o]}</span></p>
                  <Result r={r} rescueMin={s.rescueMin} />
                </>
              )
            })()}
          </div>
        )
      })()}

      {mode === 'free' && (() => {
        const r = coldWater(free)
        return (
          <div>
            <div className="controls">
              <div className="control">
                <label>Water temperature <span className="val">{free.waterC} °C</span></label>
                <input type="range" min={0} max={25} value={free.waterC} onChange={(e) => setF('waterC', +e.target.value)} />
              </div>
              <div className="control">
                <label>Air temperature <span className="val">{free.airC} °C</span></label>
                <input type="range" min={-20} max={25} value={free.airC} onChange={(e) => setF('airC', +e.target.value)} />
              </div>
              <div className="control">
                <label>Wind <span className="val">{free.wind} km/h</span></label>
                <input type="range" min={0} max={60} value={free.wind} onChange={(e) => setF('wind', +e.target.value)} />
              </div>
              <div className="control">
                <label>Clothing</label>
                <select value={free.clothing} onChange={(e) => setF('clothing', e.target.value as Clothing)}>
                  {(Object.keys(CLOTHING) as Clothing[]).map((k) => <option key={k} value={k}>{CLOTHING[k].label}</option>)}
                </select>
              </div>
              <div className="control">
                <label>Body build</label>
                <select value={free.build} onChange={(e) => setF('build', e.target.value as Build)}>
                  {(Object.keys(BUILD) as Build[]).map((k) => <option key={k} value={k}>{BUILD[k].label}</option>)}
                </select>
              </div>
              <div className="control">
                <label>Behaviour</label>
                <select value={free.behavior} onChange={(e) => setF('behavior', e.target.value as Behavior)}>
                  {(Object.keys(BEHAVIOR) as Behavior[]).map((k) => <option key={k} value={k}>{BEHAVIOR[k].label}</option>)}
                </select>
              </div>
              <div className="control">
                <label>Distance to safety <span className="val">{free.shoreM} m</span></label>
                <input type="range" min={10} max={3000} step={10} value={free.shoreM} onChange={(e) => setF('shoreM', +e.target.value)} />
              </div>
              <div className="control">
                <label><input type="checkbox" checked={free.pfd} onChange={(e) => setF('pfd', e.target.checked)} /> Wearing a PFD / lifejacket</label>
              </div>
            </div>
            <Result r={r} />
          </div>
        )
      })()}
      <p className="muted small">Bands show how much people differ (body size and fat, fitness, sea state, clothing fit). Central values follow published immersion research only roughly; treat every number as illustrative, never as a promise of time. Never practise cold-water immersion without a professionally supervised course.</p>
    </div>
  )
}
