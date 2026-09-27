import { useState } from 'react'
import type { SimProps } from './registry'

// Shelter Site Simulator: pick a site on a terrain cross-section, a shelter, orientation and bedding,
// then "live through" the night under one of several weather patterns.

interface Site {
  id: string
  name: string
  x: number
  y: number
  wind: number // 0 sheltered … 1 fully exposed
  coldPool: number // 0 … 1 (valley bottoms on calm clear nights)
  flood: number // 0 … 1
  overhead: number // dead trees / branches
  rockfall: number
  canopy: number // 0 open sky … 1 dense canopy
  materials: number // 0 … 1 insulation/fuel nearby
  visibility: number // to searchers next morning
  desc: string
}

const SITES: Site[] = [
  { id: 'ridge', name: 'Open ridge top', x: 95, y: 58, wind: 1, coldPool: 0, flood: 0, overhead: 0, rockfall: 0, canopy: 0, materials: 0.2, visibility: 1, desc: 'Great views, great visibility, nowhere to hide from wind.' },
  { id: 'bench', name: 'Mid-slope bench, living conifers', x: 230, y: 118, wind: 0.3, coldPool: 0.1, flood: 0, overhead: 0.05, rockfall: 0, canopy: 0.8, materials: 1, visibility: 0.4, desc: 'Flat shelf, needles and dead twigs everywhere, a clearing 80 m away.' },
  { id: 'deadtree', name: 'Flat spot under a large dead pine', x: 330, y: 175, wind: 0.4, coldPool: 0.2, flood: 0, overhead: 0.9, rockfall: 0, canopy: 0.3, materials: 0.8, visibility: 0.4, desc: 'Convenient, lots of fuel — and a huge dead tree overhead.' },
  { id: 'gully', name: 'Sandy dry gully', x: 420, y: 250, wind: 0.2, coldPool: 0.8, flood: 1, overhead: 0, rockfall: 0.2, canopy: 0.2, materials: 0.3, visibility: 0.1, desc: 'Soft sand, out of the wind, walls either side.' },
  { id: 'meadow', name: 'Meadow by the stream', x: 520, y: 238, wind: 0.5, coldPool: 1, flood: 0.4, overhead: 0, rockfall: 0, canopy: 0, materials: 0.5, visibility: 0.9, desc: 'Flat grass, water on hand, open sky.' },
  { id: 'boulder', name: 'Lee of a big boulder below the cliff', x: 650, y: 150, wind: 0.2, coldPool: 0.2, flood: 0, overhead: 0, rockfall: 0.8, canopy: 0.1, materials: 0.4, visibility: 0.5, desc: 'Perfect windbreak. Fresh rock fragments scattered on the ground.' },
]

const WEATHER = [
  { id: 'clear', name: 'Clear, calm, −2 °C', rain: 0, wind: 0.2, calmClear: 1, storm: 0 },
  { id: 'rain', name: 'Rain and strong wind, 5 °C', rain: 1, wind: 1, calmClear: 0, storm: 0 },
  { id: 'storm', name: 'Thunderstorms upstream, heavy rain later, 12 °C', rain: 1, wind: 0.6, calmClear: 0, storm: 1 },
]

type ShelterType = 'bag' | 'aframe' | 'leanto' | 'debris'
type Orient = 'back' | 'face' | 'side'
type Bed = 'none' | 'pack' | 'thin' | 'thick'

export function ShelterSite({ onScore }: SimProps) {
  const [wi, setWi] = useState(() => Math.floor(Math.random() * WEATHER.length))
  const [site, setSite] = useState<string | null>(null)
  const [type, setType] = useState<ShelterType>('aframe')
  const [orient, setOrient] = useState<Orient>('back')
  const [bed, setBed] = useState<Bed>('pack')
  const [result, setResult] = useState<null | { score: number; log: string[]; warmth: number; dry: number; hazard: string | null }>(null)
  const w = WEATHER[wi]

  const run = () => {
    const s = SITES.find((x) => x.id === site)!
    const log: string[] = []
    // Wind protection
    const shelterWindBlock = { bag: 0.5, aframe: 0.75, leanto: orient === 'back' ? 0.7 : orient === 'side' ? 0.4 : 0.1, debris: 0.9 }[type]
    const windExposure = s.wind * w.wind * (1 - shelterWindBlock)
    // Rain protection
    const rainBlock = { bag: 0.7, aframe: 0.95, leanto: orient === 'face' ? 0.4 : 0.75, debris: 0.8 }[type]
    const wetness = w.rain * (1 - rainBlock) * (1 - s.canopy * 0.4)
    // Ground and sky
    const bedValue = { none: 0, pack: 0.35, thin: 0.55, thick: 0.9 }[bed] * (bed === 'thick' || bed === 'thin' ? 0.5 + 0.5 * s.materials : 1)
    const skyLoss = w.calmClear * (1 - s.canopy) * (type === 'bag' ? 0.8 : type === 'leanto' ? 0.5 : 0.2)
    const coldPool = w.calmClear * s.coldPool
    let warmth = 100 - windExposure * 45 - wetness * 40 - (1 - bedValue) * 35 - skyLoss * 15 - coldPool * 20
    if (type === 'debris' && s.materials < 0.5) {
      warmth -= 15
      log.push('Too little debris nearby: your debris hut ended up thin and took 3 hours to build.')
    }
    warmth = Math.max(0, Math.min(100, warmth))
    const dry = Math.round(100 - wetness * 100)
    log.push(`Wind: ${windExposure < 0.15 ? 'barely felt' : windExposure < 0.4 ? 'noticeable drafts' : 'wind cut through the shelter all night'}.`)
    if (w.rain) log.push(`Rain: ${wetness < 0.15 ? 'you stayed essentially dry' : wetness < 0.4 ? 'some drips and a damp edge' : 'water got in — your insulation got wet'}.`)
    log.push(`Ground: ${bedValue > 0.7 ? 'thick bed, little heat lost downward' : bedValue > 0.3 ? 'some insulation, cold spots at hips and shoulders' : 'the ground drained your heat all night'}.`)
    if (coldPool > 0.5) log.push('Cold air drained into your low spot; frost formed around you by 03:00.')
    if (skyLoss > 0.4) log.push('Open to a clear sky: you radiated heat upward all night.')

    // Hazards
    let hazard: string | null = null
    const rnd = Math.random()
    if (w.storm && s.flood > 0.7) hazard = 'At 02:40 a flash flood came down the gully from rain you never saw. You escaped, soaked, losing your pack. This is how dry channels kill.'
    else if (w.storm && s.flood > 0.3 && rnd < 0.6) hazard = 'The stream rose over its banks by 03:00 and flooded your site. You moved in the dark, wet and cold.'
    else if (w.wind > 0.5 && s.overhead > 0.5 && rnd < 0.5) hazard = 'A large dead limb crashed down a metre from your head in the wind. Pure luck it missed.'
    else if (s.rockfall > 0.5 && (w.rain || rnd < 0.3)) hazard = 'Rocks loosened by the freeze/rain clattered down from the cliff overnight, one hitting your tarp.'
    if (!hazard && s.overhead > 0.5) log.push('The dead tree held tonight. Would you bet on it every night?')
    if (hazard) log.push(`⚠️ ${hazard}`)
    log.push(`Morning: searchers would find you ${s.visibility > 0.7 ? 'easily' : s.visibility > 0.35 ? 'if you move to the nearby clearing to signal' : 'with difficulty — you are hidden'}.`)

    const hazardPenalty = hazard ? (w.storm && s.flood > 0.7 ? 70 : 40) : s.overhead > 0.5 || s.rockfall > 0.5 || s.flood > 0.7 ? 15 : 0
    const score = Math.max(0, Math.round(warmth * 0.55 + dry * 0.25 + s.visibility * 10 + 10 - hazardPenalty))
    setResult({ score: Math.min(100, score), log, warmth: Math.round(warmth), dry, hazard })
    onScore(Math.min(100, score))
  }

  return (
    <div>
      <p><strong>Tonight’s forecast:</strong> {w.name}. <button className="btn small" onClick={() => { setWi((wi + 1) % WEATHER.length); setResult(null) }}>Change weather</button></p>
      <p className="muted small">Click a site on the terrain, then choose how to shelter.</p>
      <svg className="site-map" viewBox="0 0 760 300" role="img" aria-label="Terrain cross-section with candidate shelter sites">
        <rect width="760" height="300" fill="var(--sky)" opacity="0.6" />
        <path d="M0,70 L120,60 L260,130 L360,190 L400,255 L440,262 L480,250 L560,245 L620,170 L660,90 L700,40 L760,30 L760,300 L0,300 Z" fill="var(--ground)" opacity="0.8" />
        <path d="M660,90 L700,40 L705,160 L660,165 Z" fill="var(--muted)" opacity="0.5" />
        <path d="M480,252 Q520,262 560,248" fill="none" stroke="var(--info)" strokeWidth="5" />
        {[200, 215, 245, 262].map((x, k) => <path key={k} d={`M${x},${118 + (x - 200) * 0.5} l8,-26 l8,26 z`} fill="var(--ok)" opacity="0.8" />)}
        <line x1="332" y1="170" x2="336" y2="100" stroke="var(--text)" strokeWidth="4" />
        <line x1="334" y1="118" x2="356" y2="102" stroke="var(--text)" strokeWidth="3" />
        <circle cx="640" cy="160" r="16" fill="var(--muted)" />
        {w.storm ? <text x="600" y="22" fontSize="22">⛈️</text> : w.rain ? <text x="600" y="22" fontSize="22">🌧️</text> : <text x="600" y="22" fontSize="22">🌙</text>}
        {SITES.map((s) => (
          <g key={s.id} className="site" onClick={() => { setSite(s.id); setResult(null) }}>
            <circle cx={s.x} cy={s.y - 14} r="12" fill={site === s.id ? 'var(--accent-2)' : 'var(--panel)'} stroke="var(--accent-2)" strokeWidth="2.5" />
            <text x={s.x} y={s.y - 9} textAnchor="middle" fontSize="13" fontWeight="700">{SITES.indexOf(s) + 1}</text>
          </g>
        ))}
      </svg>
      {site && <p><strong>{SITES.find((s) => s.id === site)!.name}:</strong> {SITES.find((s) => s.id === site)!.desc}</p>}
      <div className="controls">
        <div className="control">
          <label>Shelter</label>
          <select value={type} onChange={(e) => { setType(e.target.value as ShelterType); setResult(null) }}>
            <option value="bag">Emergency bag only</option>
            <option value="aframe">Tarp A-frame</option>
            <option value="leanto">Tarp lean-to</option>
            <option value="debris">Debris hut (slow to build)</option>
          </select>
        </div>
        <div className="control">
          <label>Orientation (open side)</label>
          <select value={orient} onChange={(e) => { setOrient(e.target.value as Orient); setResult(null) }}>
            <option value="back">Back to the wind</option>
            <option value="side">Side-on to the wind</option>
            <option value="face">Facing into the wind</option>
          </select>
        </div>
        <div className="control">
          <label>Ground insulation</label>
          <select value={bed} onChange={(e) => { setBed(e.target.value as Bed); setResult(null) }}>
            <option value="none">None</option>
            <option value="pack">Pack and spare clothes</option>
            <option value="thin">10 cm of leaves/needles</option>
            <option value="thick">30 cm of leaves/needles</option>
          </select>
        </div>
      </div>
      <button className="btn primary" disabled={!site} onClick={run}>Spend the night</button>
      {result && (
        <div className="sim-result">
          <div className="score">{result.score}%</div>
          <div>Warmth {result.warmth}/100 · Dryness {result.dry}/100</div>
          <ul>{result.log.map((l) => <li key={l}>{l}</li>)}</ul>
          <p className="muted small">Hazards are probabilistic: a bad site can get lucky once. Good judgment is choosing sites that don’t need luck.</p>
        </div>
      )}
    </div>
  )
}
