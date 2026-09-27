import type { ComponentType } from 'react'
import { PriorityTriage } from './PriorityTriage'
import { HeatBalance } from './HeatBalance'
import { KitBuilder } from './KitBuilder'
import { ShelterSite } from './ShelterSite'
import { FireBasic } from './FireBasic'
import { WaterTreatment } from './WaterTreatment'
import { SignalDetect } from './SignalDetect'
import { ScenarioPlayer } from '../components/ScenarioPlayer'
import { scenarioById } from '../content/scenarios'

export interface SimProps {
  onScore: (score: number) => void
}

export interface SimDef {
  id: string
  title: string
  stage: number
  description: string
  concepts: string[]
  component: ComponentType<SimProps>
}

const scenarioSim = (id: string): ComponentType<SimProps> =>
  function ScenarioSim() {
    const s = scenarioById(id)
    return s ? <ScenarioPlayer scenario={s} /> : null
  }

// Every simulation is registered here by id; lessons embed them with { type: 'sim', id }.
export const sims: SimDef[] = [
  { id: 'priority-triage', title: 'Priority Triage', stage: 1, description: 'Pick the next highest-value action in rapidly changing situations.', concepts: ['priorities', 'twelve-questions'], component: PriorityTriage },
  { id: 'heat-balance', title: 'Heat Balance Lab', stage: 1, description: 'Change weather, clothing, wetness and activity; watch where your body heat goes.', concepts: ['heat-balance', 'heat-loss', 'wet-wind'], component: HeatBalance },
  { id: 'kit-builder', title: 'Kit Builder', stage: 1, description: 'Pack a survival kit under a weight limit for a chosen environment.', concepts: ['kit', 'redundancy'], component: KitBuilder },
  { id: 'shelter-site', title: 'Shelter Site Simulator', stage: 1, description: 'Choose a site, shelter, orientation and bedding — then live through the night.', concepts: ['site-selection', 'ground-insulation', 'shelter-types'], component: ShelterSite },
  { id: 'fire-basic', title: 'Fire Builder', stage: 1, description: 'Choose tinder, kindling, fuel, lay and placement in different weather.', concepts: ['fire-triangle', 'fire-structure', 'fire-safety'], component: FireBasic },
  { id: 'water-treatment', title: 'Water Safety Simulator', stage: 1, description: 'Pick a source and a treatment chain; see the remaining risk.', concepts: ['water-treatment'], component: WaterTreatment },
  { id: 'signal-detect', title: 'Be Seen, Be Heard', stage: 1, description: 'Choose signals for the searcher and conditions; see detection chances.', concepts: ['signaling', 'visibility'], component: SignalDetect },
  { id: 'scenario-lost-1400', title: 'Scenario: Day 1, 14:00 — You Realise You Are Lost', stage: 1, description: 'A branching scenario where every decision changes time, weather, resources and rescue probability.', concepts: ['integration', 'stay-or-move'], component: scenarioSim('lost-1400') },
]

export const simById = (id: string) => sims.find((s) => s.id === id)
