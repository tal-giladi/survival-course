import { useState } from 'react'
import type { SimProps } from '../types'
import { CLARIFY, COLLECT, DEFAULT_PLAN, DISINFECT, FILTERS, MICROBES, SCENARIOS, STORAGE, evaluate } from './waterAdvancedModel'
import type { ClarifyId, CollectId, DisinfectId, FilterId, KitId, Plan, StorageId } from './waterAdvancedModel'

// Model and assumptions live in ./waterAdvancedModel.ts (unit-tested in src/test/stage4.test.ts).

const KIT_LABEL: Record<KitId, string> = {
  micro: 'hollow-fibre filter', ceramic: 'ceramic filter', ultra: 'ultrafilter', stove: 'stove / pot', chlorine: 'bleach / chlorine tablets',
  clo2: 'chlorine dioxide tablets', uv: 'UV pen', bottles: 'clear PET bottles', alum: 'alum', carbon: 'activated-carbon cartridge',
}

const pct = (p: number) => (p < 0.001 ? '<0.1 %' : p > 0.995 ? '>99 %' : `${(p * 100).toFixed(p < 0.1 ? 1 : 0)} %`)
const level = (x: number) => (x >= 1 ? { t: 'Unsafe', c: 'var(--bad)' } : x >= 0.3 ? { t: 'Caution', c: 'var(--warn)' } : { t: 'Low', c: 'var(--ok)' })

export function WaterAdvanced({ onScore }: SimProps) {
  const [scId, setScId] = useState(SCENARIOS[0].id)
  const sc = SCENARIOS.find((s) => s.id === scId)!
  const [plan, setPlan] = useState<Plan>({ ...DEFAULT_PLAN, source: sc.sources[0].id, collect: sc.sources[0].collect[0] })
  const [shown, setShown] = useState(false)
  const r = evaluate(sc, plan)
  const set = <K extends keyof Plan>(k: K, v: Plan[K]) => { setPlan((p) => ({ ...p, [k]: v })); setShown(false) }
  const has = (k?: KitId) => !k || sc.kit.includes(k)
  const src = r.src

  const pickScenario = (id: string) => {
    const s = SCENARIOS.find((x) => x.id === id)!
    setScId(id)
    setPlan({ ...DEFAULT_PLAN, source: s.sources[0].id, collect: s.sources[0].collect[0] })
    setShown(false)
  }
  const pickSource = (id: string) => {
    const s = sc.sources.find((x) => x.id === id)!
    setPlan((p) => ({ ...p, source: id, collect: s.collect.includes(p.collect) ? p.collect : s.collect[0] }))
    setShown(false)
  }

  return (
    <div>
      <div className="chip-group">
        {SCENARIOS.map((s) => <button key={s.id} className={`chip ${s.id === scId ? 'on' : ''}`} onClick={() => pickScenario(s.id)}>{s.title}</button>)}
      </div>
      <div className="callout callout-info">
        <div className="callout-title">{sc.title} — {sc.people} {sc.people === 1 ? 'person' : 'people'}, {sc.days} days, {sc.airC} °C, {sc.altitudeM} m</div>
        {sc.brief}
        <div className="small muted">Kit: {sc.kit.map((k) => KIT_LABEL[k]).join(', ')}{sc.fuel ? (sc.fuel.kind === 'gas' ? `; ${sc.fuel.grams} g gas` : '; wood fire (gathering takes time)') : '; no stove'}.</div>
      </div>

      <div className="controls">
        <div className="control">
          <label>1 · Source</label>
          <select value={plan.source || src.id} onChange={(e) => pickSource(e.target.value)}>
            {sc.sources.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <p className="muted small">{src.note} Up to ~{src.yieldLpd} L/day.</p>
        </div>
        <div className="control">
          <label>2 · Collection</label>
          <select value={r.collect} onChange={(e) => set('collect', e.target.value as CollectId)}>
            {src.collect.map((c) => <option key={c} value={c}>{COLLECT[c].name}</option>)}
          </select>
          {COLLECT[r.collect].note && <p className="muted small">{COLLECT[r.collect].note}</p>}
        </div>
        <div className="control">
          <label>3 · Clarification</label>
          <select value={plan.clarify} onChange={(e) => set('clarify', e.target.value as ClarifyId)}>
            {(Object.keys(CLARIFY) as ClarifyId[]).map((k) => <option key={k} value={k} disabled={!has(CLARIFY[k].needs)}>{CLARIFY[k].name}{has(CLARIFY[k].needs) ? '' : ' (not in kit)'}</option>)}
          </select>
        </div>
        <div className="control">
          <label>4 · Filtration</label>
          <select value={plan.filter} onChange={(e) => set('filter', e.target.value as FilterId)}>
            {(Object.keys(FILTERS) as FilterId[]).map((k) => <option key={k} value={k} disabled={!has(FILTERS[k].needs)}>{FILTERS[k].name}{has(FILTERS[k].needs) ? '' : ' (not in kit)'}</option>)}
          </select>
          {sc.kit.includes('carbon') && (
            <label className="small"><input type="checkbox" checked={plan.carbon} onChange={(e) => set('carbon', e.target.checked)} /> Also pass through activated carbon</label>
          )}
        </div>
        <div className="control">
          <label>5 · Disinfection</label>
          <select value={plan.disinfect} onChange={(e) => set('disinfect', e.target.value as DisinfectId)}>
            {(Object.keys(DISINFECT) as DisinfectId[]).map((k) => <option key={k} value={k} disabled={!has(DISINFECT[k].needs)}>{DISINFECT[k].name}{has(DISINFECT[k].needs) ? '' : ' (not in kit)'}</option>)}
          </select>
          {plan.disinfect === 'boil' && (
            <>
              <label className="small">Rolling boil for <span className="val">{plan.boilMin} min</span></label>
              <input type="range" min={0} max={10} value={plan.boilMin} onChange={(e) => set('boilMin', +e.target.value)} />
            </>
          )}
          {(plan.disinfect === 'chlorine' || plan.disinfect === 'clo2') && (
            <>
              <label className="small">Dose <span className="val">{plan.dose} mg/L</span></label>
              <input type="range" min={1} max={8} value={plan.dose} onChange={(e) => set('dose', +e.target.value)} />
              <label className="small">Contact time <span className="val">{plan.contactMin} min</span></label>
              <input type="range" min={15} max={240} step={15} value={plan.contactMin} onChange={(e) => set('contactMin', +e.target.value)} />
              <p className="muted small">Water temperature: {src.melt ? 5 : src.tempC} °C</p>
            </>
          )}
          {plan.disinfect === 'uv' && (
            <>
              <label className="small">UV cycles per litre <span className="val">{plan.uvCycles}</span></label>
              <input type="range" min={1} max={2} value={plan.uvCycles} onChange={(e) => set('uvCycles', +e.target.value)} />
            </>
          )}
          {plan.disinfect === 'sodis' && (
            <select value={plan.sodisDays} onChange={(e) => set('sodisDays', +e.target.value as 1 | 2)}>
              <option value={1}>6 hours of exposure</option>
              <option value={2}>2 consecutive days</option>
            </select>
          )}
        </div>
        <div className="control">
          <label>6 · Storage and drinking</label>
          <select value={plan.storage} onChange={(e) => set('storage', e.target.value as StorageId)}>
            {(Object.keys(STORAGE) as StorageId[]).map((k) => <option key={k} value={k}>{STORAGE[k].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>7 · Daily routine</label>
          <select value={plan.schedule} onChange={(e) => set('schedule', e.target.value as Plan['schedule'])}>
            <option value="heat">Work and move through the day</option>
            <option value="cool">Work in cool hours, rest in shade at midday</option>
          </select>
        </div>
        <div className="control">
          <label>8 · Water to process <span className="val">{plan.targetLpp} L per person per day</span></label>
          <input type="range" min={1} max={8} step={0.5} value={plan.targetLpp} onChange={(e) => set('targetLpp', +e.target.value)} />
        </div>
      </div>

      <button className="btn primary" onClick={() => { setShown(true); onScore(r.score) }}>Run the {sc.days}-day plan</button>

      {shown && (
        <div className="sim-result">
          <div className="score">{r.score}%</div>
          <div className="small muted">Safety {Math.round(r.parts.safety)}/55 · Enough water {Math.round(r.parts.sufficiency)}/30 · Effort and guidance {Math.round(r.parts.efficiency)}/15</div>
          <table>
            <thead><tr><th>Hazard</th><th>Start (log)</th><th>Remaining (log)</th><th>Daily risk</th><th /></tr></thead>
            <tbody>
              {MICROBES.map((h) => (
                <tr key={h.k}>
                  <td>{h.label}</td>
                  <td>{src.load[h.k].toFixed(1)}</td>
                  <td>{r.residual[h.k] <= -3 ? '≤ −3' : r.residual[h.k].toFixed(1)}</td>
                  <td style={{ color: r.pDay[h.k] > 0.01 ? 'var(--bad)' : 'var(--ok)', fontWeight: 700 }}>{pct(r.pDay[h.k])}</td>
                  <td style={{ width: '30%' }}><div className="bar"><div style={{ width: `${Math.min(100, r.pDay[h.k] * 100)}%`, background: 'var(--bad)' }} /></div></td>
                </tr>
              ))}
              <tr><td>Chemicals</td><td>{src.chem.toFixed(1)}</td><td>{r.chem.toFixed(1)}</td><td style={{ color: level(r.chem).c, fontWeight: 700 }}>{level(r.chem).t}</td><td /></tr>
              <tr><td>Cyanotoxins</td><td>{src.cyano.toFixed(1)}</td><td>{r.cyano.toFixed(1)}</td><td style={{ color: level(r.cyano).c, fontWeight: 700 }}>{level(r.cyano).t}</td><td /></tr>
            </tbody>
          </table>
          <p className="small">
            Chance at least one of you gets a waterborne infection over {sc.days} days: <strong>{pct(1 - Math.pow(1 - r.pDayAll, sc.days * sc.people))}</strong>
            {' '}· Turbidity {Math.round(r.ntuRaw)} → {r.ntuClar.toFixed(1)} NTU after clarification{plan.filter !== 'none' ? ' → <1 NTU after the filter' : ''}.
          </p>
          <div className="grid-2">
            <div className="small">
              <div><strong>Need:</strong> {r.needPP.toFixed(1)} L per person per day (incl. sweat from water chores)</div>
              <div><strong>Processed:</strong> {r.availPP.toFixed(1)} L per person per day{r.limitedBy && <> — limited by <strong>{r.limitedBy}</strong></>}</div>
              <div><strong>Labour:</strong> ~{Math.round(r.labourMin)} min/day{r.waitMin > 0 && <>; plus {r.waitMin >= 120 ? `${(r.waitMin / 60).toFixed(r.waitMin % 60 ? 1 : 0)} h` : `${r.waitMin} min`} waiting per batch</>}</div>
              {r.resourceNote && <div><strong>Supplies:</strong> {r.resourceNote}{r.fuelUsed > 0 && <> — {Math.round(r.fuelUsed)} of {sc.fuel?.grams} g gas used</>}</div>}
            </div>
            <div className="small">
              <strong>Water deficit (% of body mass)</strong>
              {r.days.map((d) => (
                <div key={d.day} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ width: 44 }}>Day {d.day}</span>
                  <div className="bar"><div style={{ width: `${Math.min(100, (d.deficitPct / 8) * 100)}%`, background: d.deficitPct >= 4 ? 'var(--bad)' : d.deficitPct >= 2 ? 'var(--warn)' : 'var(--ok)' }} /></div>
                  <span style={{ width: 48, textAlign: 'right' }}>{d.deficitPct.toFixed(1)} %</span>
                </div>
              ))}
              <div className="muted">≥2 % impairs work and thinking; ≥4–5 % is serious.</div>
            </div>
          </div>
          {r.clogged && <p className="small" style={{ color: 'var(--bad)' }}>Your filter clogged in the cloudy water — flow collapsed. Clarify first.</p>}
          {r.warnings.length > 0 && <ul className="small">{r.warnings.map((w) => <li key={w}>{w}</li>)}</ul>}
          <p className="muted small">“Log” = powers of ten. Risk figures use an illustrative dose–response curve to show direction and scale, not to predict any real outbreak.</p>
        </div>
      )}
    </div>
  )
}
