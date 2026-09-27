import type { SimDef } from '../types'
import { PhysiologyLab } from './PhysiologyLab'
import { ColdWater } from './ColdWater'

export const sims: SimDef[] = [
  {
    id: 'heat-balance-advanced',
    title: 'Physiology Lab',
    stage: 8,
    description: 'Run hours of exposure: set weather, clothing, wetness, activity, shelter, water, food and altitude, and watch core temperature, heat loss by mechanism, dehydration and glycogen change.',
    concepts: ['heat-balance', 'thermoregulation', 'shivering', 'dehydration', 'glycogen', 'heat-illness', 'hypothermia'],
    component: PhysiologyLab,
  },
  {
    id: 'cold-water',
    title: 'Cold Water Timeline',
    stage: 8,
    description: 'Fall into cold water and choose what to do: see cold shock, loss of muscle function and hypothermia unfold, with uncertainty bands.',
    concepts: ['cold-shock', 'swim-failure', 'immersion-hypothermia', 'help-huddle'],
    component: ColdWater,
  },
]
