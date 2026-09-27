import { useState } from 'react'
import { simById } from './registry'
import { actions, useProgress } from '../progress/store'

/** Frame around any simulation: title, description, best score, and score reporting. */
export function SimHost({ id, caption }: { id: string; caption?: string }) {
  const def = simById(id)
  const p = useProgress()
  const [open, setOpen] = useState(false)
  if (!def) return <div className="callout callout-info">Simulation “{id}” is planned for a later stage.</div>
  const best = p.sims[id]?.best
  const C = def.component
  return (
    <div className="sim">
      <div className="sim-head">
        <div>
          <h3>🎮 {def.title}</h3>
          <p className="muted">{caption ?? def.description}</p>
        </div>
        <div className="sim-meta">
          {best !== undefined && <span className="badge ok">Best {best}%</span>}
          <button className="btn primary" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Launch'}</button>
        </div>
      </div>
      {open && (
        <div className="sim-body">
          <C onScore={(s) => actions.recordSim(id, s)} />
        </div>
      )}
    </div>
  )
}
