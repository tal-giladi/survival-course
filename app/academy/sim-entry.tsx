// Standalone page for one simulation (simulations/<id>/index.html sets <body data-sim="id">), embedded
// by Tal's Academy in a sandboxed iframe. Built into simulations/common/ by vite.sims.config.ts.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'katex/dist/katex.min.css'
import '../src/index.css'
import { simById } from '../src/sims/registry'

const id = document.body.dataset.sim ?? ''
const def = simById(id)
const C = def?.component

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="sim-page">
      {def && C ? (
        <div className="sim">
          <div className="sim-head">
            <div>
              <h3>{def.title}</h3>
              <p className="muted">{def.description} Educational model: simplified, not a prediction.</p>
            </div>
          </div>
          <div className="sim-body">
            <C onScore={() => {}} />
          </div>
        </div>
      ) : (
        <p>Simulation “{id}” not found.</p>
      )}
    </main>
  </StrictMode>,
)
