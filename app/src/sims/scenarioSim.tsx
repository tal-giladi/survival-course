import type { ComponentType } from 'react'
import type { SimProps } from './types'
import { ScenarioPlayer } from '../components/ScenarioPlayer'
import { scenarioById } from '../content/scenarios'

/** Wraps a branching scenario (by id) as a simulation, so any stage can register one. */
export const scenarioSim = (id: string): ComponentType<SimProps> =>
  function ScenarioSim() {
    const s = scenarioById(id)
    return s ? <ScenarioPlayer scenario={s} /> : null
  }
