import { useMemo, useState } from 'react'
import type { SimProps } from '../types'
import { BEDS, DESIGNS, ENVIRONMENTS, buildTime, defaultChoice, dirName, simulate } from './shelterModel'
import type { BedMat, Choice, Dir, EnvId, HeatSource, SimResult } from './shelterModel'
import { MECH, PRODUCED } from './chartColors'
import { Meter, NightChart, ShelterGlyph, Terrain, WindArrow } from './ShelterViews'

// Shelter Builder: terrain, weather, kit and a time budget → the learner picks a site on the map,
// a design, orientation, insulation and pace, then lives through the night. The model and its
// assumptions are in ./shelterModel.ts (unit-tested in src/test/stage5.test.ts).

export function ShelterBuilder({ onScore }: SimProps) {
  const [envId, setEnvId] = useState<EnvId>('forest')
  const env = ENVIRONMENTS.find((e) => e.id === envId)!
  const [choice, setChoice] = useState<Choice>(() => defaultChoice(env))
  const [result, setResult] = useState<SimResult | null>(null)
  const [best, setBest] = useState<Partial<Record<EnvId, number>>>({})
  const d = DESIGNS[choice.design]
  const bed = BEDS[choice.bed]
  const site = env.sites.find((s) => s.id === choice.site)
  const est = useMemo(() => buildTime(env, choice.site ? choice : { ...choice, site: env.sites[0].id }), [env, choice])

  const set = <K extends keyof Choice>(k: K, v: Choice[K]) => { setChoice({ ...choice, [k]: v }); setResult(null) }
  const switchEnv = (id: EnvId) => {
    const e = ENVIRONMENTS.find((x) => x.id === id)!
    setEnvId(id)
    setChoice(defaultChoice(e))
    setResult(null)
  }
  const run = () => {
    const r = simulate(env, choice)
    setResult(r)
    setBest({ ...best, [envId]: Math.max(best[envId] ?? 0, r.score) })
    onScore(r.score)
  }
  const wallRange = d.walls === 'snow' ? [10, 60] : [30, 120]

  return (
    <div>
      <div className="chip-group">
        {ENVIRONMENTS.map((e) => (
          <button key={e.id} className={`chip ${e.id === envId ? 'on' : ''}`} onClick={() => switchEnv(e.id)}>
            {(best[e.id] ?? 0) >= 75 ? '✓ ' : ''}{e.name.split(' — ')[0]}{best[e.id] !== undefined ? ` · ${best[e.id]}%` : ''}
          </button>
        ))}
      </div>
      <div className="callout callout-info">
        <div className="callout-title">{env.name}</div>
        {env.briefing}
        <div className="small" style={{ marginTop: 6 }}><strong>Kit:</strong> {env.kit.join(' · ')}</div>
      </div>
      <p className="muted small">Goal: score 75+ in every environment. Click a site on the map, then design, orient and insulate your shelter. Watch the build-time bar — light is your scarcest resource.</p>

      <svg className="site-map" viewBox="0 0 640 360" role="img" aria-label={`Plan view of the ${env.name} terrain with candidate shelter sites`}>
        <defs>
          <marker id="sb-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--info)" /></marker>
          <marker id="sb-open" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--accent-2)" /></marker>
        </defs>
        <Terrain env={env} />
        <WindArrow from={env.windFrom} />
        {env.sites.map((s, i) => (
          <g key={s.id} className="site" onClick={() => set('site', s.id)}>
            {choice.site === s.id ? <ShelterGlyph x={s.x} y={s.y} c={choice} /> : null}
            <circle cx={s.x} cy={s.y - (choice.site === s.id ? 26 : 0)} r="12" fill={choice.site === s.id ? 'var(--accent-2)' : 'var(--panel)'} stroke="var(--accent-2)" strokeWidth="2.5" />
            <text x={s.x} y={s.y + 5 - (choice.site === s.id ? 26 : 0)} textAnchor="middle" fontSize="13" fontWeight="700">{i + 1}</text>
          </g>
        ))}
      </svg>
      {site ? <p><strong>{env.sites.indexOf(site) + 1}. {site.name}:</strong> {site.desc}</p> : <p className="muted">No site chosen yet.</p>}

      <div className="controls">
        <div className="control">
          <label>Design</label>
          <select value={choice.design} onChange={(e) => set('design', e.target.value as Choice['design'])}>
            {env.designs.map((id) => <option key={id} value={id}>{DESIGNS[id].name}</option>)}
          </select>
          <span className="muted small">{d.blurb}</span>
        </div>
        {choice.design !== 'none' && (
          <div className="control">
            <label>Open side / entrance faces <span className="val">{dirName[choice.opening]}</span></label>
            <div>
              {(['N', 'E', 'S', 'W'] as Dir[]).map((o) => <button key={o} className={`chip ${choice.opening === o ? 'on' : ''}`} onClick={() => set('opening', o)}>{o}</button>)}
            </div>
          </div>
        )}
        {d.tarpLike && (
          <div className="control">
            <label>Pitch</label>
            <select value={choice.pitch} onChange={(e) => set('pitch', e.target.value as Choice['pitch'])}>
              <option value="low">Low and taut (warmer, sheds wind)</option>
              <option value="high">High and roomy (airier, catches wind)</option>
            </select>
          </div>
        )}
        {(d.walls === 'debris' || choice.design === 'quinzhee') && (
          <div className="control">
            <label>{d.walls === 'snow' ? 'Quinzhee wall thickness' : 'Debris pile thickness'} <span className="val">{choice.wallCm} cm</span></label>
            <input type="range" min={wallRange[0]} max={wallRange[1]} step={5} value={choice.wallCm} onChange={(e) => set('wallCm', +e.target.value)} />
          </div>
        )}
        <div className="control">
          <label>Bed material</label>
          <select value={choice.bed} onChange={(e) => set('bed', e.target.value as BedMat)}>
            {env.beds.map((b) => <option key={b} value={b}>{BEDS[b].name}</option>)}
          </select>
        </div>
        <div className="control">
          <label>Bed thickness (loose) <span className="val">{bed.fixedR !== undefined ? '—' : `${choice.bedCm} cm → ~${Math.round(choice.bedCm * bed.comp)} cm compressed`}</span></label>
          <input type="range" min={0} max={40} step={5} value={choice.bedCm} disabled={bed.fixedR !== undefined} onChange={(e) => set('bedCm', +e.target.value)} />
        </div>
        {env.pad > 0 && <div className="control"><label><input type="checkbox" checked={choice.pad} onChange={(e) => set('pad', e.target.checked)} /> Foam pad under {env.pad < 0.5 ? 'hips' : 'torso and hips'}</label></div>}
        {env.bivy && <div className="control"><label><input type="checkbox" checked={choice.bivy} onChange={(e) => set('bivy', e.target.checked)} /> Get into the bivy bag</label></div>}
        {env.net && <div className="control"><label><input type="checkbox" checked={choice.net} onChange={(e) => set('net', e.target.checked)} /> Rig the mosquito net</label></div>}
        {d.walls === 'snow' && (
          <>
            <div className="control"><label><input type="checkbox" checked={choice.vent} onChange={(e) => set('vent', e.target.checked)} /> Poke a ventilation hole</label></div>
            {choice.design === 'quinzhee' && <div className="control"><label><input type="checkbox" checked={choice.sinter} onChange={(e) => set('sinter', e.target.checked)} /> Wait ~90 min for the pile to sinter before hollowing</label></div>}
          </>
        )}
        {env.stove && d.walls === 'snow' && (
          <div className="control">
            <label>Flame inside for warmth</label>
            <select value={choice.heat} onChange={(e) => set('heat', e.target.value as HeatSource)}>
              <option value="none">None</option>
              <option value="candle">Candle all night</option>
              <option value="stove">Stove for the first 2 hours</option>
            </select>
          </div>
        )}
        {d.fire && env.fireAllowed && (
          <div className="control">
            <label>Firewood gathered <span className="val">{choice.fuelHours} h of burning</span></label>
            <input type="range" min={0} max={12} value={choice.fuelHours} onChange={(e) => set('fuelHours', +e.target.value)} />
          </div>
        )}
        <div className="control">
          <label>Work pace</label>
          <select value={choice.pace} onChange={(e) => set('pace', e.target.value as Choice['pace'])}>
            <option value="steady">Steady — vent layers, avoid sweating</option>
            <option value="hard">Hard — faster, but you will sweat</option>
          </select>
        </div>
      </div>

      <div className="small">
        <strong>Build estimate:</strong> {est.effort} min of work{est.wait ? ` + ${est.wait} min waiting` : ''} · ~{est.sweat.toFixed(1)} L sweat · {est.kcal} kcal
        <div className="stack-bar" title="Build time vs usable light">
          <div style={{ width: `${Math.min(100, (Math.min(est.total, env.budget) / Math.max(env.budget, est.total)) * 100)}%`, background: 'var(--accent)' }}>{est.total <= env.budget ? `${env.budget - est.total} min spare` : ''}</div>
          {est.overflow > 0 && <div style={{ width: `${(est.overflow / Math.max(env.budget, est.total)) * 100}%`, background: 'var(--bad)' }}>{est.overflow} min in the dark</div>}
        </div>
      </div>

      <button className="btn primary" disabled={!choice.site} onClick={run}>{env.hot && env.id === 'desert' ? 'Live through the afternoon and night' : 'Spend the night'}</button>

      {result && (
        <div className="sim-result">
          <div className="grid-2">
            <div>
              <div className="score" style={{ color: result.score >= 75 ? 'var(--ok)' : result.score >= 50 ? 'var(--text)' : 'var(--bad)' }}>{result.score}%</div>
              <div>{result.verdict}</div>
            </div>
            <div className="meters" style={{ gridTemplateColumns: '1fr' }}>
              <Meter label="Thermal" v={result.scores.thermal} max={45} />
              <Meter label="Dryness" v={result.scores.dryness} max={15} />
              <Meter label="Hazards" v={result.scores.hazards} max={25} />
              <Meter label="Effort & time" v={result.scores.effort} max={15} />
            </div>
          </div>
          <NightChart r={result} env={env} />
          <div className="legend">
            {MECH.map((m) => <span key={m.k} style={{ ['--c' as string]: m.color }}>{m.label}</span>)}
            <span style={{ ['--c' as string]: PRODUCED }}>Heat produced</span>
          </div>
          <p className="small">
            Worst heat debt: <strong>{result.coldDebt} kJ</strong> (≈ {(result.coldDebt / 245).toFixed(1)} °C of core-equivalent heat, before the body’s defences)
            {env.hot && <> · Worst heat build-up: <strong>{result.heatLoad} kJ</strong> · Water lost: <strong>{result.water.toFixed(1)} L</strong> of {env.water} L carried</>}
            {' '}· Hours shivering: <strong>{result.shiverHours}</strong>
          </p>
          {result.hazards.length > 0 && (
            <>
              <strong>Risks at this site and design</strong>
              <div className="meters">
                {result.hazards.map((h) => (
                  <div key={h.id} className={`meter ${h.happened ? 'danger' : ''}`}>
                    <span>{h.label}</span>
                    <div className="meter-bar invert"><div style={{ width: `${h.risk * 100}%` }} /></div>
                    <span className="meter-val">{Math.round(h.risk * 100)}%</span>
                  </div>
                ))}
              </div>
            </>
          )}
          <ul>{result.log.map((l) => <li key={l}>{l}</li>)}</ul>
          <p className="muted small">Model simplifications: one person lying still, fixed clothing, hour-by-hour steady states, deterministic hazards (risk ≥ 50 % = it happens). Numbers build intuition about which controls matter most — they are not a prediction for a real night.</p>
        </div>
      )}
    </div>
  )
}
