import type { SimDef } from '../types'
import { MultiDay } from './MultiDay'

export const sims: SimDef[] = [
  { id: 'multi-day', title: 'Multi-Day Camp', stage: 18, description: 'Run up to six days at one camp in forest, rainforest, subarctic or coast: assign work blocks and set food, water, treatment, night and routine — energy, water, warmth, sleep, morale and gear all trade off.', concepts: ['energy-budget', 'water-budget', 's18-resource-ledger', 's18-work-rest', 's18-sleep-system', 's18-morale', 's18-preventive-maintenance', 's18-rolling-plan'], component: MultiDay },
]
