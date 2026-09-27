import type { SimDef } from '../types'
import { CordageStrength } from './CordageStrength'

export const sims: SimDef[] = [
  { id: 'cordage-strength', title: 'Cordage Strength Lab', stage: 7, description: 'Choose fiber, plies, twist, thickness, construction, wetness and knot; see where the cord fails under a food bag, a ridgeline in wind, a pack frame and a pot hanger.', concepts: ['cordage-twist', 'reverse-wrap', 'cordage-strength', 'knot-efficiency', 'capstan-friction'], component: CordageStrength },
]
