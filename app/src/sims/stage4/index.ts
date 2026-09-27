import type { SimDef } from '../types'
import { WaterAdvanced } from './WaterAdvanced'
import { SolarStill } from './SolarStill'

export const sims: SimDef[] = [
  {
    id: 'water-advanced',
    title: 'Water Planner: Source to Cup',
    stage: 4,
    description: 'Plan several days of water for four environments: choose source, collection, clarification, filter, disinfection dose and contact time, storage and routine. See risk per hazard class, time, fuel and your water balance.',
    concepts: ['log-reduction', 'ct-disinfection', 'turbidity', 'water-budget', 'safe-storage'],
    component: WaterAdvanced,
  },
  {
    id: 'solar-still',
    title: 'Is a Solar Still Worth It?',
    stage: 4,
    description: 'Model a pit still’s yield from sunlight, soil moisture, pit size, timing and season — then weigh it against the sweat cost of digging and decide whether to build.',
    concepts: ['solar-still', 'water-budget'],
    component: SolarStill,
  },
]
