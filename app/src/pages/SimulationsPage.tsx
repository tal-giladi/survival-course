import { stages } from '../content/curriculum'
import { sims } from '../sims/registry'
import { SimHost } from '../sims/SimHost'

export function SimulationsPage() {
  const planned = stages.flatMap((s) => s.simulations.filter((id) => !sims.some((x) => x.id === id)).map((id) => ({ id, stage: s })))
  return (
    <div className="page">
      <h1>Simulations</h1>
      <p className="lead">
        The models are deliberately simple but directionally correct. They exist to build intuition for trade-offs — and to let you
        make dangerous mistakes safely. Use them to explore, then check your understanding in the lessons.
      </p>
      {sims.map((s) => <SimHost key={s.id} id={s.id} />)}
      <h2>Planned simulations</h2>
      <ul className="planned-sims">
        {planned.map(({ id, stage }) => <li key={id}><code>{id}</code> — Stage {stage.n}: {stage.title}</li>)}
      </ul>
    </div>
  )
}
