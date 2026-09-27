import type { SimDef } from '../types'
import { ImproviseChallenge } from './ImproviseChallenge'

export const sims: SimDef[] = [
  { id: 'improvise-challenge', title: 'Improvise Challenge', stage: 10, description: 'Break a field problem into functions, match ordinary objects to each by their properties, load-test the build and fix weak links — without spending gear you still need.', concepts: ['improvisation-method', 'material-properties', 'load-testing', 'critical-gear-tradeoff'], component: ImproviseChallenge },
]
