import type { SimDef } from '../types'
import { EnergyBudget } from './EnergyBudget'
import { PlantId } from './PlantId'

export const sims: SimDef[] = [
  { id: 'energy-budget', title: 'Energy Budget Planner', stage: 6, description: 'Plan several days of food and effort: rations, activity, and whether food-getting is worth its energy cost.', concepts: ['energy-needs', 'rationing', 'energy-return', 'energy-stores'], component: EnergyBudget },
  { id: 'plant-id', title: 'Identification Discipline Trainer', stage: 6, description: 'Check drawn features of fictional plants against a key — and learn when the only right answer is to refuse.', concepts: ['plant-id-discipline', 'toxic-lookalikes'], component: PlantId },
]
