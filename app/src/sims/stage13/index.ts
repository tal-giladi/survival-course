import type { SimDef } from '../types'
import { MechanicalAdvantage } from './MechanicalAdvantage'

export const sims: SimDef[] = [
  { id: 'mechanical-advantage', title: 'Mechanical Advantage Lab (virtual only)', stage: 13, description: 'Build hauling systems from 1:1 to 9:1 on screen: see ideal vs actual advantage after pulley and edge friction, rope travel, haulers needed, and how anchor-leg angles and redirects multiply anchor forces.', concepts: ['mechanical-advantage', 'friction-losses', 'vector-angles', 'anchor-principles', 'capstan-friction'], component: MechanicalAdvantage },
]
