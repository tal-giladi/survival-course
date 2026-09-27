import { useMemo, useState } from 'react'
import type { SimProps } from '../types'
import { ACT } from '../heatModel'
import type { Fibre, Shelter, Sky, Wet } from '../heatModel'
import { FOOD, PHYSIO_CHALLENGES, simulate } from './physioModel'
import type { Food, PhysioInput } from './physioModel'
import { Legend, LineChart, StackedArea } from './charts'

// Physiology Lab: the Stage 1 heat-balance model integrated over hours, with shivering, sweating,
// dehydration, glycogen and warnings. The model and its assumptions live in ./physioModel.ts.

const CLO = [
  { v: 0.4, label: 'Summer (0.4 clo)' },
  { v: 1.0, label: 'Base + light layer (1 clo)' },
  { v: 1.8, label: 'Hiking layers (1.8 clo)' },
  { v: 2.8, label: '+ insulated jacket (2.8 clo)' },
  { v: 4.0, label: 'Winter parka system (4 clo)' },
]

const C = {
  conv: 'var(--info)',
  rad: 'var(--accent-2)',
  cond: 'var(--ground)',
  evap: 'var(--sky)',
  sweat: 'var(--ok)',
  core: 'var(--bad)',
  prod: 'var(--text)',
  gly: 'var(--warn)',
  water: 'var(--info)',
}

type LockKey = keyof PhysioInput | 'act1' | 'act2' | 'hours1' | 'hours2'

const FREE: PhysioInput = { ta: 5, wind: 20, rh: 70, wet: 'dry', fibre: 'synthetic', clo: 1.8, shell: true, shelter: 'none', sky: 'overcast', phases: [{ act: 'walk', hours: 3 }, { act: 'rest', hours: 3 }], drinkLph: 0.25, waterL: 2, food: 'snacks', altitude: 500 }

const fmtH = (h: number) => `${Math.floor(h)}:${String(Math.round((h % 1) * 60)).padStart(2, '0')}`
const fmtCore = (c: number) => (c < 28 ? '< 28 °C' : `${c.toFixed(1)} °C`)

export function PhysiologyLab({ onScore }: SimProps) {
  const [mode, setMode] = useState<'free' | number>('free')
  const [inp, setInp] = useState<PhysioInput>(FREE)
  const [solved, setSolved] = useState<boolean[]>(PHYSIO_CHALLENGES.map(() => false))
  const r = useMemo(() => simulate(inp), [inp])
  const locked: LockKey[] = typeof mode === 'number' ? PHYSIO_CHALLENGES[mode].lock : []
  const isLocked = (k: LockKey) => locked.includes(k)
  const ch = typeof mode === 'number' ? PHYSIO_CHALLENGES[mode] : undefined
  const pass = ch ? ch.check(r, inp) : false

  const update = (next: PhysioInput, m = mode) => {
    setInp(next)
    if (typeof m === 'number' && !solved[m] && PHYSIO_CHALLENGES[m].check(simulate(next), next)) {
      const done = solved.map((s, i) => (i === m ? true : s))
      setSolved(done)
      onScore(Math.round((done.filter(Boolean).length / PHYSIO_CHALLENGES.length) * 100))
    }
  }
  const set = <K extends keyof PhysioInput>(k: K, v: PhysioInput[K]) => update({ ...inp, [k]: v })
  const p1 = inp.phases[0]
  const p2 = inp.phases[1] as PhysioInput['phases'][number] | undefined
  const setPhase = (idx: 0 | 1, patch: Partial<PhysioInput['phases'][number]>) => {
    const phases = [...inp.phases]
    if (idx === 1 && !phases[1]) phases[1] = { act: 'rest', hours: 0 }
    phases[idx] = { ...phases[idx], ...patch }
    update({ ...inp, phases: phases.filter((p, i) => i === 0 || p.hours > 0) })
  }

  const x = r.steps.map((s) => s.t)
  const maxLoss = Math.max(200, ...r.steps.map((s) => s.conv + s.rad + s.cond + s.evap + s.sweat), ...r.steps.map((s) => s.metab))
  const yMaxLoss = Math.ceil(maxLoss / 100) * 100
  const coreMin = Math.min(34, Math.floor(r.minCore))
  const coreMax = Math.max(39, Math.ceil(r.maxCore))
  const f = r.final

  return (
    <div>
      <div className="chip-group">
        <button className={`chip ${mode === 'free' ? 'on' : ''}`} onClick={() => setMode('free')}>Free play</button>
        {PHYSIO_CHALLENGES.map((c, i) => (
          <button key={c.id} className={`chip ${mode === i ? 'on' : ''}`} onClick={() => { setMode(i); update(c.start, i) }}>
            {solved[i] ? '✓ ' : ''}Challenge {i + 1}
          </button>
        ))}
      </div>
      {ch && (
        <div className={`callout ${pass ? 'callout-tip' : 'callout-info'}`}>
          <div className="callout-title">{ch.title} {pass ? '— goal met!' : ''}</div>
          <span dangerouslySetInnerHTML={{ __html: ch.goal.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
        </div>
      )}

      <div className="controls">
        <div className="control">
          <label>Air temperature <span className="val">{inp.ta} °C</span></label>
          <input type="range" min={-30} max={45} value={inp.ta} disabled={isLocked('ta')} onChange={(e) => set('ta', +e.target.value)} />
        </div>
        <div className="control">
          <label>Wind <span className="val">{inp.wind} km/h</span></label>
          <input type="range" min={0} max={60} value={inp.wind} disabled={isLocked('wind')} onChange={(e) => set('wind', +e.target.value)} />
        </div>
        <div className="control">
          <label>Relative humidity <span className="val">{inp.rh} %</span></label>
          <input type="range" min={10} max={95} value={inp.rh} disabled={isLocked('rh')} onChange={(e) => set('rh', +e.target.value)} />
        </div>
        <div className="control">
          <label>Sky</label>
          <select value={inp.sky} disabled={isLocked('sky')} onChange={(e) => set('sky', e.target.value as Sky)}>
            <option value="overcast">Overcast / day shade</option>
            <option value="night-clear">Clear night</option>
            <option value="sun">Full sun</option>
          </select>
        </div>
        <div className="control">
          <label>Altitude <span className="val">{inp.altitude} m</span></label>
          <input type="range" min={0} max={5500} step={100} value={inp.altitude} disabled={isLocked('altitude')} onChange={(e) => set('altitude', +e.target.value)} />
        </div>
        <div className="control">
          <label>Shelter</label>
          <select value={inp.shelter} disabled={isLocked('shelter')} onChange={(e) => set('shelter', e.target.value as Shelter)}>
            <option value="none">None</option>
            <option value="windbreak">Behind a windbreak</option>
            <option value="tarp">Under a tarp (shade / roof)</option>
            <option value="tarp-bed">Tarp + thick ground bed</option>
          </select>
        </div>
        <div className="control">
          <label>Main fibre</label>
          <select value={inp.fibre} disabled={isLocked('fibre')} onChange={(e) => set('fibre', e.target.value as Fibre)}>
            <option value="cotton">Cotton</option>
            <option value="wool">Wool</option>
            <option value="synthetic">Synthetic</option>
            <option value="down">Down</option>
          </select>
        </div>
        <div className="control">
          <label>Clothing wetness at start</label>
          <select value={inp.wet} disabled={isLocked('wet')} onChange={(e) => set('wet', e.target.value as Wet)}>
            <option value="dry">Dry</option>
            <option value="damp">Damp</option>
            <option value="soaked">Soaked</option>
          </select>
        </div>
        <div className="control">
          <label><input type="checkbox" checked={inp.shell} disabled={isLocked('shell')} onChange={(e) => set('shell', e.target.checked)} /> Windproof shell on</label>
        </div>
        <div className="control">
          <label>Phase 1: activity · clothing · hours</label>
          <select value={p1.act} disabled={isLocked('act1')} onChange={(e) => setPhase(0, { act: e.target.value })}>
            {ACT.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>
          <select value={p1.clo ?? inp.clo} disabled={isLocked('clo')} onChange={(e) => setPhase(0, { clo: +e.target.value })}>
            {CLO.map((c) => <option key={c.v} value={c.v}>{c.label}</option>)}
          </select>
          <input type="range" min={1} max={12} value={p1.hours} disabled={isLocked('hours1')} onChange={(e) => setPhase(0, { hours: +e.target.value })} />
          <span className="small muted">{p1.hours} h</span>
        </div>
        <div className="control">
          <label>Phase 2 (optional): activity · clothing · hours</label>
          <select value={p2?.act ?? 'rest'} disabled={isLocked('act2')} onChange={(e) => setPhase(1, { act: e.target.value, hours: p2?.hours || 2 })}>
            {ACT.map((a) => <option key={a.id} value={a.id}>{a.label}</option>)}
          </select>
          <select value={p2?.clo ?? inp.clo} disabled={isLocked('clo') || !p2} onChange={(e) => setPhase(1, { clo: +e.target.value })}>
            {CLO.map((c) => <option key={c.v} value={c.v}>{c.label}</option>)}
          </select>
          <input type="range" min={0} max={12} value={p2?.hours ?? 0} disabled={isLocked('hours2')} onChange={(e) => setPhase(1, { hours: +e.target.value })} />
          <span className="small muted">{p2?.hours ?? 0} h</span>
        </div>
        <div className="control">
          <label>Drinking <span className="val">{inp.drinkLph.toFixed(2)} L/h</span></label>
          <input type="range" min={0} max={1.5} step={0.05} value={inp.drinkLph} disabled={isLocked('drinkLph')} onChange={(e) => set('drinkLph', +e.target.value)} />
        </div>
        <div className="control">
          <label>Water carried <span className="val">{inp.waterL >= 20 ? 'unlimited' : `${inp.waterL} L`}</span></label>
          <input type="range" min={0} max={20} step={0.5} value={Math.min(20, inp.waterL)} disabled={isLocked('waterL')} onChange={(e) => set('waterL', +e.target.value >= 20 ? 99 : +e.target.value)} />
        </div>
        <div className="control">
          <label>Food</label>
          <select value={inp.food} disabled={isLocked('food')} onChange={(e) => set('food', e.target.value as Food)}>
            {(Object.keys(FOOD) as Food[]).map((k) => <option key={k} value={k}>{FOOD[k].label}</option>)}
          </select>
        </div>
      </div>

      <div className="sim-result">
        <div className="grid-2">
          <div>
            <div className="score" style={{ color: f.core < 35 || f.core > 39.5 ? 'var(--bad)' : f.core < 36 || f.core > 38.5 ? 'var(--warn)' : 'var(--ok)' }}>{fmtCore(f.core)}</div>
            <div className="small">core after {fmtH(f.t)} h (lowest {fmtCore(r.minCore)}, highest {fmtCore(r.maxCore)}){r.minCore < 28 && ' — the model stops tracking below 28 °C; in reality this is severe hypothermia with a high risk of death'}</div>
          </div>
          <div className="small">
            <div>Dehydration: <strong>{f.dehydration.toFixed(1)} %</strong> of body mass · drank {r.drankL.toFixed(1)} L</div>
            <div>Energy used: <strong>{Math.round(r.kcal)} kcal</strong> · glycogen left <strong>{Math.round(f.glycogen)} %</strong></div>
            <div>Clothing at end: <strong>{f.wet}</strong></div>
          </div>
        </div>
        <h4>Core temperature</h4>
        <LineChart
          x={x}
          yMin={coreMin}
          yMax={coreMax}
          yLabel="°C"
          ariaLabel="Core temperature over time"
          series={[{ label: 'Core', color: C.core, values: r.steps.map((s) => s.core) }]}
          lines={[
            { y: 35, label: '35 °C mild hypothermia', color: 'var(--info)' },
            { y: 32, label: '32 °C moderate', color: 'var(--bad)' },
            { y: 39.5, label: '39.5 °C heat illness', color: 'var(--warn)' },
            { y: 40, label: '40 °C heat stroke range', color: 'var(--bad)' },
          ].filter((l) => l.y >= coreMin && l.y <= coreMax)}
        />
        <h4>Heat loss by mechanism (W) vs heat produced</h4>
        <StackedArea
          x={x}
          yMax={yMaxLoss}
          yLabel="W"
          ariaLabel="Stacked heat loss by mechanism with heat production line"
          series={[
            { label: 'Convection', color: C.conv, values: r.steps.map((s) => s.conv) },
            { label: 'Radiation', color: C.rad, values: r.steps.map((s) => s.rad) },
            { label: 'Conduction', color: C.cond, values: r.steps.map((s) => s.cond) },
            { label: 'Evaporation (breath + wet clothing)', color: C.evap, values: r.steps.map((s) => s.evap) },
            { label: 'Sweating', color: C.sweat, values: r.steps.map((s) => s.sweat) },
          ]}
          overlay={{ label: 'Heat produced (metabolism + shivering)', color: C.prod, values: r.steps.map((s) => s.metab) }}
        />
        <Legend items={[
          { label: 'Convection', color: C.conv },
          { label: 'Radiation', color: C.rad },
          { label: 'Conduction', color: C.cond },
          { label: 'Evaporation', color: C.evap },
          { label: 'Sweating', color: C.sweat },
          { label: 'Produced (dashed)', color: C.prod },
        ]} />
        <p className="small muted">Negative values (heat gained from hot air, ground or sun) are not stacked; in heat the dashed line can sit above the losses because the environment is adding heat.</p>
        <h4>Water and fuel</h4>
        <LineChart
          x={x}
          yMin={0}
          yMax={100}
          yLabel="%"
          ariaLabel="Glycogen remaining and dehydration over time"
          series={[
            { label: 'Glycogen left (% of full)', color: C.gly, values: r.steps.map((s) => s.glycogen) },
            { label: 'Dehydration (% body mass × 10)', color: C.water, values: r.steps.map((s) => s.dehydration * 10), dashed: true },
          ]}
          lines={[{ y: 20, label: '2 % dehydration', color: 'var(--warn)' }, { y: 40, label: '4 %', color: 'var(--bad)' }]}
        />
        <Legend items={[{ label: 'Glycogen left (%)', color: C.gly }, { label: 'Dehydration (% body mass, ×10 scale; dashed)', color: C.water }]} />
        <h4>Warnings</h4>
        {r.warnings.length === 0 ? <p className="small">No warnings — this plan keeps you within safe limits in the model.</p> : (
          <ul className="small">
            {r.warnings.map((w) => (
              <li key={w.text} style={{ color: w.level === 'danger' ? 'var(--bad)' : w.level === 'warn' ? 'var(--warn)' : undefined }}>
                <strong>{fmtH(w.t)}</strong> — {w.text}
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="muted small">Model: Stage 1 heat-exchange physics integrated in 5-minute steps, with simple vasoconstriction, shivering (fuelled by glycogen), heat-driven sweating limited by humidity and hydration, and sweat soaking into clothing in the cold. A 70 kg adult; no acclimatisation; clothing does not dry. It shows which controls matter and roughly how fast things change — it cannot predict any real person, and it is not a basis for medical decisions.</p>
    </div>
  )
}
