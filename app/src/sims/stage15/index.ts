import type { SimDef } from '../types'
import { PriorityDilemmas } from './PriorityDilemmas'

export const sims: SimDef[] = [
  {
    id: 'priority-dilemmas',
    title: 'Priority Dilemmas',
    stage: 15,
    description: 'Lead a group through a ridge day that goes wrong: timed decisions that shrink with stress and fatigue, with the biases behind your choices — plan continuation, sunk cost, normalization of deviance, groupthink, tunnel vision — revealed in the debrief.',
    concepts: ['plan-continuation', 'sunk-cost', 'normalization-of-deviance', 'groupthink', 'tunnel-vision', 'stress-control'],
    component: PriorityDilemmas,
  },
]
