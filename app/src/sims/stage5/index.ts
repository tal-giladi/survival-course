import type { SimDef } from '../types'
import { ShelterBuilder } from './ShelterBuilder'

export const sims: SimDef[] = [
  {
    id: 'shelter-builder',
    title: 'Shelter Builder',
    stage: 5,
    description: 'Four environments, a time budget and a kit: choose a site, design, orientation and insulation, then see every watt, drip and hazard through the night.',
    concepts: ['r-value', 'site-selection', 'tarp-configs', 'snow-shelter', 'hot-shelter', 'shelter-failure', 'effort-budget'],
    component: ShelterBuilder,
  },
]
