import { useState } from 'react'
import type { SimProps } from './registry'

// Water Safety Simulator. Each source starts with a hazard load per class in rough "log units"
// (1 unit ≈ a 10× reduction needed). Each treatment removes some log units per class, and turbidity
// weakens chemical and UV treatments. Residual load > 0 means residual risk.

type H = 'bacteria' | 'viruses' | 'protozoa' | 'crypto' | 'chemicals'
const HAZ: { k: H; label: string }[] = [
  { k: 'bacteria', label: 'Bacteria' },
  { k: 'viruses', label: 'Viruses' },
  { k: 'protozoa', label: 'Giardia' },
  { k: 'crypto', label: 'Cryptosporidium' },
  { k: 'chemicals', label: 'Chemicals / toxins' },
]

const SOURCES: { id: string; name: string; load: Record<H, number>; turbid: number; note: string }[] = [
  { id: 'rain', name: 'Rain collected on a clean tarp', load: { bacteria: 0.5, viruses: 0.2, protozoa: 0, crypto: 0, chemicals: 0 }, turbid: 0, note: 'Usually the cleanest wild source; the collecting surface matters.' },
  { id: 'spring', name: 'Spring emerging from rock', load: { bacteria: 1, viruses: 0.5, protozoa: 0.5, crypto: 0.5, chemicals: 0 }, turbid: 0.1, note: 'Often good, never guaranteed.' },
  { id: 'highstream', name: 'Fast stream high in a wild catchment', load: { bacteria: 2, viruses: 1, protozoa: 2, crypto: 2, chemicals: 0 }, turbid: 0.2, note: 'Wildlife still carries Giardia and Crypto.' },
  { id: 'villagestream', name: 'Clear stream 2 km below a village', load: { bacteria: 4, viruses: 4, protozoa: 3, crypto: 3, chemicals: 0.5 }, turbid: 0.3, note: 'Human sewage means viruses.' },
  { id: 'pasture', name: 'Muddy river below cattle pasture', load: { bacteria: 4, viruses: 2, protozoa: 3, crypto: 4, chemicals: 1 }, turbid: 0.9, note: 'Livestock are a major Crypto source; runoff carries agrochemicals.' },
  { id: 'pond', name: 'Stagnant pond with green scum', load: { bacteria: 4, viruses: 2, protozoa: 3, crypto: 3, chemicals: 3 }, turbid: 0.7, note: 'Scum can mean algal (cyanobacterial) toxins — not removed by boiling.' },
  { id: 'mine', name: 'Clear pool below an old mine', load: { bacteria: 1, viruses: 0.5, protozoa: 0.5, crypto: 0.5, chemicals: 4 }, turbid: 0.1, note: 'Heavy metals. Clear ≠ safe.' },
]

interface Treat { id: string; name: string; red: Record<H, number>; turbidSensitive: number; minutes: number; note: string }
const TREATMENTS: Treat[] = [
  { id: 'boil', name: 'Boil (rolling, 1 min)', red: { bacteria: 6, viruses: 6, protozoa: 6, crypto: 6, chemicals: 0 }, turbidSensitive: 0, minutes: 15, note: 'Fuel + cooling time' },
  { id: 'chlorine', name: 'Chlorine (bleach/tablets), 30 min', red: { bacteria: 4, viruses: 4, protozoa: 1.5, crypto: 0, chemicals: 0 }, turbidSensitive: 0.6, minutes: 30, note: 'Double dose if cloudy or cold' },
  { id: 'clo2', name: 'Chlorine dioxide, 30 min', red: { bacteria: 4, viruses: 4, protozoa: 3, crypto: 1, chemicals: 0 }, turbidSensitive: 0.5, minutes: 30, note: '' },
  { id: 'clo2long', name: 'Chlorine dioxide, 4 h', red: { bacteria: 5, viruses: 5, protozoa: 4, crypto: 3, chemicals: 0 }, turbidSensitive: 0.4, minutes: 240, note: 'For Crypto, per product instructions' },
  { id: 'filter', name: 'Hollow-fibre filter (0.1 µm)', red: { bacteria: 6, viruses: 0.5, protozoa: 6, crypto: 6, chemicals: 0 }, turbidSensitive: 0.1, minutes: 3, note: 'Clogs in muddy water' },
  { id: 'uv', name: 'UV pen', red: { bacteria: 4, viruses: 4, protozoa: 3, crypto: 3, chemicals: 0 }, turbidSensitive: 0.9, minutes: 2, note: 'Needs clear water' },
  { id: 'carbon', name: 'Activated-carbon stage', red: { bacteria: 0, viruses: 0, protozoa: 0, crypto: 0, chemicals: 1.5 }, turbidSensitive: 0.2, minutes: 2, note: 'Reduces some chemicals/taste; not a disinfectant' },
]

const PRE = { none: { name: 'None', clear: 0, minutes: 0 }, settle: { name: 'Let it settle, pour off', clear: 0.4, minutes: 30 }, cloth: { name: 'Pour through a cloth', clear: 0.3, minutes: 2 }, both: { name: 'Settle, then cloth', clear: 0.65, minutes: 32 } }
type Pre = keyof typeof PRE
const STORE = { clean: { name: 'Clean capped bottle, pour to drink', recon: 0 }, dip: { name: 'Dip a cup into the container', recon: 1 }, threads: { name: 'Same bottle, untreated drips on threads', recon: 1.5 } }
type Store = keyof typeof STORE

export function waterModel(sourceId: string, pre: Pre, treats: string[], store: Store) {
  const src = SOURCES.find((s) => s.id === sourceId)!
  const turbid = src.turbid * (1 - PRE[pre].clear)
  const residual = {} as Record<H, number>
  for (const { k } of HAZ) {
    let load = src.load[k]
    for (const t of TREATMENTS.filter((x) => treats.includes(x.id))) load -= t.red[k] * (1 - t.turbidSensitive * turbid)
    // Recontamination during storage adds back microbes.
    if (k !== 'chemicals') load = Math.max(load, 0) + (STORE[store].recon > 0 ? Math.min(src.load[k], STORE[store].recon) * 0.5 : 0)
    residual[k] = Math.max(0, load)
  }
  const minutes = PRE[pre].minutes + TREATMENTS.filter((x) => treats.includes(x.id)).reduce((a, t) => a + t.minutes, 0)
  const clogged = treats.includes('filter') && turbid > 0.5
  const totalRisk = HAZ.reduce((a, h) => a + residual[h.k] * (h.k === 'chemicals' ? 1.2 : 1), 0)
  const score = Math.max(0, Math.round(100 - totalRisk * 18 - Math.max(0, minutes - 60) / 10 - (clogged ? 10 : 0)))
  return { residual, minutes, turbid, clogged, score, src }
}

export function WaterTreatment({ onScore }: SimProps) {
  const [source, setSource] = useState('villagestream')
  const [pre, setPre] = useState<Pre>('none')
  const [treats, setTreats] = useState<string[]>([])
  const [store, setStore] = useState<Store>('clean')
  const [shown, setShown] = useState(false)
  const r = waterModel(source, pre, treats, store)
  const reset = () => setShown(false)

  return (
    <div>
      <div className="controls">
        <div className="control">
          <label>Source</label>
          <select value={source} onChange={(e) => { setSource(e.target.value); reset() }}>
            {SOURCES.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
          <p className="muted small">{r.src.note}</p>
        </div>
        <div className="control">
          <label>Pre-treatment (clarify)</label>
          <select value={pre} onChange={(e) => { setPre(e.target.value as Pre); reset() }}>
            {(Object.keys(PRE) as Pre[]).map((k) => <option key={k} value={k}>{PRE[k].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Storage and drinking</label>
          <select value={store} onChange={(e) => { setStore(e.target.value as Store); reset() }}>
            {(Object.keys(STORE) as Store[]).map((k) => <option key={k} value={k}>{STORE[k].name}</option>)}
          </select>
        </div>
      </div>
      <label className="control"><strong>Treatment (combine as you like)</strong></label>
      <div className="chip-group">
        {TREATMENTS.map((t) => (
          <button key={t.id} className={`chip ${treats.includes(t.id) ? 'on' : ''}`} title={t.note} onClick={() => { setTreats(treats.includes(t.id) ? treats.filter((x) => x !== t.id) : [...treats, t.id]); reset() }}>
            {t.name}
          </button>
        ))}
      </div>
      <button className="btn primary" onClick={() => { setShown(true); onScore(r.score) }}>Drink it (virtually)</button>
      {shown && (
        <div className="sim-result">
          <div className="score">{r.score}%</div>
          <table>
            <thead><tr><th>Hazard</th><th>Start</th><th>Remaining</th><th /></tr></thead>
            <tbody>
              {HAZ.map((h) => (
                <tr key={h.k}>
                  <td>{h.label}</td>
                  <td>{r.src.load[h.k].toFixed(1)}</td>
                  <td style={{ color: r.residual[h.k] > 0.05 ? 'var(--bad)' : 'var(--ok)', fontWeight: 700 }}>{r.residual[h.k] > 0.05 ? r.residual[h.k].toFixed(1) : '✓ 0'}</td>
                  <td style={{ width: '40%' }}><div className="bar"><div style={{ width: `${Math.min(100, (r.residual[h.k] / 5) * 100)}%`, background: 'var(--bad)' }} /></div></td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="small">Time to drinkable water: ~{r.minutes} min. {r.turbid > 0.4 && 'Cloudy water shielded microbes from UV/chemicals. '}{r.clogged && 'Your filter clogged quickly in the muddy water. '}{STORE[store].recon > 0 && 'Storage habits re-contaminated treated water. '}</p>
          <p className="muted small">“Log units”: each unit ≈ a 10× reduction. Remaining load above zero means a real chance of illness — often days later, when you can least afford it.</p>
        </div>
      )}
    </div>
  )
}
