import { refById } from '../content/references'
import type { Reference } from '../content/types'

export function RefItem({ r }: { r: Reference }) {
  const who = [r.author, r.org, r.year].filter(Boolean).join(', ')
  return (
    <li className="ref">
      {r.url ? (
        <a href={r.url} target="_blank" rel="noreferrer">
          {r.title}
        </a>
      ) : (
        <em>{r.title}</em>
      )}
      {who && <span className="muted"> — {who}</span>} <span className="badge tiny">{r.kind}</span>
      {r.note && <div className="muted small">{r.note}</div>}
    </li>
  )
}

export function ReferenceList({ ids }: { ids: string[] }) {
  const refs = ids.map(refById).filter((r): r is Reference => !!r)
  return (
    <ul className="refs">
      {refs.map((r) => (
        <RefItem key={r.id} r={r} />
      ))}
    </ul>
  )
}
