import { useState } from 'react'
import type { SimProps } from './types'

// Kit Builder: pack items under a weight budget; score = weighted coverage of the environment’s
// needs + diverse redundancy for critical functions − overweight penalty.

type Fn = 'shelter' | 'insulation' | 'fire' | 'waterCarry' | 'waterTreat' | 'melt' | 'navigation' | 'light' | 'comms' | 'signalV' | 'signalA' | 'firstAid' | 'cutting' | 'repair' | 'food' | 'sun' | 'bugs' | 'docs'

const FN_LABEL: Record<Fn, string> = {
  shelter: 'Shelter', insulation: 'Insulation', fire: 'Fire', waterCarry: 'Water carrying (L)', waterTreat: 'Water treatment', melt: 'Melting snow',
  navigation: 'Navigation', light: 'Light', comms: 'Call for help', signalV: 'Visual signal', signalA: 'Audible signal', firstAid: 'First aid',
  cutting: 'Cutting', repair: 'Cord & repair', food: 'Food reserve', sun: 'Sun & shade', bugs: 'Insect protection', docs: 'Cash, ID, documents',
}

interface Item { id: string; name: string; g: number; fns: Partial<Record<Fn, number>>; note?: string }

const ITEMS: Item[] = [
  { id: 'lighter', name: 'Butane lighter', g: 25, fns: { fire: 1 }, note: 'Fails when cold or wet' },
  { id: 'ferro', name: 'Ferro rod + striker', g: 40, fns: { fire: 1 }, note: 'Works wet and cold' },
  { id: 'matches', name: 'Stormproof matches', g: 30, fns: { fire: 0.8 } },
  { id: 'bivy', name: 'Emergency bivy bag', g: 120, fns: { shelter: 1, insulation: 0.5 } },
  { id: 'blanket', name: 'Foil space blanket', g: 60, fns: { shelter: 0.4, insulation: 0.3, signalV: 0.4 } },
  { id: 'tarp', name: 'Tarp 2×3 m + cord', g: 450, fns: { shelter: 1.5, sun: 1, repair: 0.3 } },
  { id: 'binbags', name: '2 orange bin bags', g: 80, fns: { shelter: 0.5, signalV: 0.5, waterCarry: 0.5 } },
  { id: 'jacket', name: 'Insulated jacket', g: 350, fns: { insulation: 1.5 } },
  { id: 'hatgloves', name: 'Warm hat + gloves', g: 120, fns: { insulation: 0.5 } },
  { id: 'pad', name: 'Closed-cell sit pad', g: 60, fns: { insulation: 0.5 } },
  { id: 'sunkit', name: 'Sun hat, sunglasses, sunscreen', g: 150, fns: { sun: 1 } },
  { id: 'bottle1', name: '1 L bottle', g: 100, fns: { waterCarry: 1 } },
  { id: 'bladder2', name: '2 L bladder', g: 150, fns: { waterCarry: 2 } },
  { id: 'bottles3', name: '3 × 1 L soft flasks', g: 90, fns: { waterCarry: 3 } },
  { id: 'filter', name: 'Squeeze filter (0.1 µm)', g: 80, fns: { waterTreat: 1 } },
  { id: 'tabs', name: 'Chlorine-dioxide tablets', g: 10, fns: { waterTreat: 1 } },
  { id: 'stove', name: 'Stove, fuel and pot', g: 600, fns: { waterTreat: 1, melt: 1, fire: 0.3, food: 0.2 } },
  { id: 'phone', name: 'Phone + power bank', g: 350, fns: { comms: 1, navigation: 1, light: 0.5 }, note: 'Needs coverage for calls' },
  { id: 'plb', name: 'PLB / satellite messenger', g: 150, fns: { comms: 1.5 }, note: 'Works without coverage' },
  { id: 'whistle', name: 'Whistle', g: 10, fns: { signalA: 1 } },
  { id: 'mirror', name: 'Signal mirror', g: 30, fns: { signalV: 1 } },
  { id: 'headlamp', name: 'Headlamp + spare batteries', g: 110, fns: { light: 1 } },
  { id: 'microlight', name: 'Tiny backup LED', g: 15, fns: { light: 0.5 } },
  { id: 'mapcompass', name: 'Map + compass', g: 100, fns: { navigation: 1 } },
  { id: 'firstaid', name: 'First-aid kit', g: 250, fns: { firstAid: 1 } },
  { id: 'knife', name: 'Knife / multitool', g: 120, fns: { cutting: 1, repair: 0.4 } },
  { id: 'cord', name: '15 m cord + repair tape', g: 80, fns: { repair: 1 } },
  { id: 'food', name: 'Energy bars (1 day)', g: 400, fns: { food: 1 } },
  { id: 'bugs', name: 'Head net + repellent', g: 60, fns: { bugs: 1 } },
  { id: 'docs', name: 'Cash, ID, contact card', g: 30, fns: { docs: 1 } },
  { id: 'hammock', name: 'Hammock with bug net', g: 700, fns: { shelter: 1, bugs: 0.5 } },
  { id: 'axe', name: 'Hatchet', g: 700, fns: { cutting: 1 }, note: 'Heavy; knife + saw often better' },
]

interface Env { id: string; name: string; budget: number; needs: Partial<Record<Fn, [number, number]>>; remote: boolean; note: string }

// needs: fn -> [amount needed, importance 1-4]
const ENVS: Env[] = [
  { id: 'forest', name: '🌲 Temperate forest day hike, autumn', budget: 3000, remote: true, note: 'Rain, cool nights, patchy coverage.', needs: { shelter: [1, 3], insulation: [1.5, 3], fire: [2, 2], waterCarry: [1, 2], waterTreat: [1, 2], navigation: [1, 2], light: [1, 2], comms: [1, 3], signalA: [1, 1], signalV: [0.5, 1], firstAid: [1, 2], cutting: [1, 1], repair: [1, 1], food: [1, 1] } },
  { id: 'desert', name: '🏜️ Desert canyon, summer', budget: 4000, remote: true, note: 'Heat, no water sources, no coverage, cold nights.', needs: { waterCarry: [4, 4], sun: [2, 4], comms: [1.5, 3], signalV: [1, 2], waterTreat: [0.5, 1], navigation: [1, 2], firstAid: [1, 2], insulation: [0.5, 1], light: [1, 1], fire: [1, 1], food: [0.5, 1] } },
  { id: 'winter', name: '❄️ Winter ski tour, subarctic', budget: 5000, remote: true, note: '−15 °C, short days, water only as snow.', needs: { insulation: [3, 4], shelter: [1.5, 3], fire: [2, 2], melt: [1, 3], comms: [1.5, 3], light: [1.5, 2], navigation: [1, 2], firstAid: [1, 1], food: [1, 2], signalV: [0.5, 1], repair: [1, 1] } },
  { id: 'tropical', name: '🌴 Tropical forest trek', budget: 3500, remote: true, note: 'Constant wet, insects, contaminated water.', needs: { waterTreat: [2, 3], bugs: [1, 3], shelter: [1, 2], firstAid: [1, 2], cutting: [1, 2], navigation: [1, 1], comms: [1, 2], light: [1, 1], fire: [1, 1], waterCarry: [1, 1], repair: [1, 1] } },
  { id: 'urban', name: '🏙️ Urban everyday carry', budget: 1500, remote: false, note: 'Commuting; disaster could strand you away from home.', needs: { comms: [1, 3], light: [1, 2], waterCarry: [1, 2], firstAid: [0.5, 1], docs: [1, 2], insulation: [0.5, 1], food: [0.5, 1], signalA: [1, 1] } },
]

const CRITICAL: Fn[] = ['fire', 'light', 'comms', 'navigation']

export function evaluate(env: Env, chosen: string[]) {
  const items = ITEMS.filter((i) => chosen.includes(i.id))
  const weight = items.reduce((a, i) => a + i.g, 0)
  const have: Partial<Record<Fn, number>> = {}
  const sources: Partial<Record<Fn, number>> = {}
  for (const it of items)
    for (const [f, v] of Object.entries(it.fns) as [Fn, number][]) {
      have[f] = (have[f] ?? 0) + v
      if (v >= 0.5) sources[f] = (sources[f] ?? 0) + 1
    }
  let num = 0
  let den = 0
  const rows = (Object.entries(env.needs) as [Fn, [number, number]][]).map(([f, [need, imp]]) => {
    const cov = Math.min(1, (have[f] ?? 0) / need)
    num += cov * imp
    den += imp
    return { f, need, have: have[f] ?? 0, cov, imp }
  })
  const coverage = num / den
  const critNeeded = CRITICAL.filter((f) => env.needs[f])
  const redundancy = critNeeded.length ? critNeeded.filter((f) => (sources[f] ?? 0) >= 2).length / critNeeded.length : 1
  const over = Math.max(0, weight - env.budget)
  const penalty = Math.min(1, over / env.budget) * 1.5
  const score = Math.max(0, Math.round((coverage * 80 + redundancy * 20) * (1 - penalty)))
  const tips: string[] = []
  if (env.remote && !chosen.includes('plb')) tips.push('Remote trip with no guaranteed coverage: only a PLB or satellite messenger can call for help reliably.')
  if (env.needs.fire && chosen.includes('lighter') && !chosen.includes('ferro') && !chosen.includes('matches')) tips.push('Fire relies on a single lighter — add a different method (ferro rod).')
  if (env.id === 'desert' && (have.waterCarry ?? 0) < 4) tips.push('Desert: water capacity is life. Plan ~1 L per hour of activity in heat.')
  if (env.id === 'winter' && !chosen.includes('stove')) tips.push('Winter: without a stove you cannot melt snow efficiently — eating snow costs body heat.')
  if (chosen.includes('axe')) tips.push('A hatchet is heavy for its benefit on most trips; a knife and small saw usually do the job.')
  if (over > 0) tips.push(`Over budget by ${over} g — heavy packs tempt people to leave kit behind and cost energy.`)
  return { weight, rows, coverage, redundancy, score, tips }
}

export function KitBuilder({ onScore }: SimProps) {
  const [envId, setEnvId] = useState('forest')
  const [chosen, setChosen] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const env = ENVS.find((e) => e.id === envId)!
  const r = evaluate(env, chosen)
  const toggle = (id: string) => {
    setSubmitted(false)
    setChosen((cur) => (cur.includes(id) ? cur.filter((c) => c !== id) : [...cur, id]))
  }

  return (
    <div>
      <div className="control">
        <label>Environment</label>
        <select value={envId} onChange={(e) => { setEnvId(e.target.value); setSubmitted(false) }}>
          {ENVS.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)}
        </select>
        <p className="muted small">{env.note} Weight budget: {env.budget} g (excluding the water itself).</p>
      </div>
      <div className="stack-bar" title="Weight">
        <div style={{ width: `${Math.min(100, (r.weight / env.budget) * 100)}%`, background: r.weight > env.budget ? 'var(--bad)' : 'var(--accent)' }}>{r.weight} g</div>
      </div>
      <div className="kit-grid">
        {ITEMS.map((it) => (
          <button key={it.id} className={`kit-item ${chosen.includes(it.id) ? 'on' : ''}`} onClick={() => toggle(it.id)}>
            {chosen.includes(it.id) ? '✓ ' : ''}{it.name}
            <small>{it.g} g · {Object.keys(it.fns).map((f) => FN_LABEL[f as Fn]).join(', ')}{it.note ? ` · ${it.note}` : ''}</small>
          </button>
        ))}
      </div>
      <h4>Coverage of this environment’s needs</h4>
      <div className="fn-grid">
        {r.rows.map((row) => (
          <div key={row.f} className={`fn ${row.cov >= 1 ? 'ok' : row.cov > 0 ? 'partial' : ''}`}>
            {FN_LABEL[row.f]} {'★'.repeat(row.imp)}<br />
            <small>{row.have.toFixed(1)} / {row.need}</small>
          </div>
        ))}
      </div>
      <button className="btn primary" onClick={() => { setSubmitted(true); onScore(r.score) }}>Evaluate kit</button>
      {submitted && (
        <div className="sim-result">
          <div className="score">{r.score}%</div>
          <div>Coverage {Math.round(r.coverage * 100)}% · diverse redundancy for critical functions {Math.round(r.redundancy * 100)}%</div>
          {r.tips.length > 0 && <ul>{r.tips.map((t) => <li key={t}>{t}</li>)}</ul>}
          <p className="muted small">Try the same budget in another environment: the “best” kit changes with the threats.</p>
        </div>
      )}
    </div>
  )
}
