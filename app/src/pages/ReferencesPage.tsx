import { useState } from 'react'
import { references, subjects } from '../content/references'
import { lawPortals } from '../content/lawPortals'
import { RefItem } from '../components/ReferenceList'

export function ReferencesPage() {
  const [q, setQ] = useState('')
  const match = (s: string) => s.toLowerCase().includes(q.toLowerCase())
  const regions = [...new Set(lawPortals.map((p) => p.region))]
  return (
    <div className="page">
      <h1>References</h1>
      <p className="lead">
        Sources are ranked: clinical guidelines and government agencies first, then professional training bodies, then textbooks,
        then practitioner books (with caveats). Replace outdated sources rather than keeping them.
      </p>
      <input className="search" placeholder="Filter references…" value={q} onChange={(e) => setQ(e.target.value)} />
      {Object.entries(subjects).map(([key, label]) => {
        const items = references.filter((r) => r.subjects.includes(key) && (!q || match(r.title + (r.author ?? '') + (r.org ?? '') + (r.note ?? ''))))
        if (!items.length) return null
        return (
          <section key={key}>
            <h2>{label}</h2>
            <ul className="refs">{items.map((r) => <RefItem key={r.id} r={r} />)}</ul>
          </section>
        )
      })}

      <section id="law">
        <h2>⚖️ Law varies by jurisdiction</h2>
        <p>
          Rules on fires, foraging, fishing, hunting, trapping, camping, protected species and protected land differ by country,
          region, land manager and season — fire bans can start the same day. Before every trip, check the agency that manages the
          specific land. Examples of authoritative portals:
        </p>
        {regions.map((region) => (
          <div key={region} className="law-region">
            <h3>{region}</h3>
            <ul className="refs">
              {lawPortals.filter((p) => p.region === region).map((p) => (
                <li key={p.name} className="ref">
                  <span className="muted">{p.topic}: </span>
                  {p.url ? <a href={p.url} target="_blank" rel="noreferrer">{p.name}</a> : p.name}
                  {p.note && <div className="muted small">{p.note}</div>}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </div>
  )
}
