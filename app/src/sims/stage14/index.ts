import type { SimDef } from '../types'
import { SearchSim } from './SearchSim'
import { SignalMirror } from './SignalMirror'

export const sims: SimDef[] = [
  { id: 'search-sim', title: 'Search Planner', stage: 14, description: 'Allocate searcher-hours across segments with probability of area (POA) and probability of detection (POD); watch Bayesian POA updates after each unsuccessful period, and see what happens when the subject keeps moving.', concepts: ['poa-pod', 'bayesian-search', 'sweep-width', 'stay-or-move'], component: SearchSim },
  { id: 'signal-mirror', title: 'Signal Mirror', stage: 14, description: 'Choose a reflector, aiming method and position for four real-world situations; see how aim, Sun angle, distance and haze decide whether a flash is seen.', concepts: ['signal-mirror', 'visibility'], component: SignalMirror },
]
