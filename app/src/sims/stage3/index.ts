import type { SimDef } from '../types'
import { FireAdvanced } from './FireAdvanced'
import { FrictionFire } from './FrictionFire'

export const sims: SimDef[] = [
  { id: 'fire-advanced', title: 'Advanced Fire Builder', stage: 3, description: 'Choose materials, lay, placement, weather and purpose; see ignition odds, heat output over time, fuel use, smoke and suitability.', concepts: ['fire-lays', 'fire-purpose', 'moisture-content', 'fire-safety'], component: FireAdvanced },
  { id: 'friction-fire', title: 'Bow-Drill Lab', stage: 3, description: 'Tune wood pair, dryness, spindle, stroke and pressure; watch friction heat race losses and fatigue to make an ember.', concepts: ['friction-fire', 'friction-power'], component: FrictionFire },
]
