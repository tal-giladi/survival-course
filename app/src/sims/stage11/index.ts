import type { SimDef } from '../types'
import { TrackingScene } from './TrackingScene'

export const sims: SimDef[] = [
  { id: 'tracking-scene', title: 'Tracking Scene', stage: 11, description: 'Read drawn trails in mud, sand, snow, beach and dust: identify the track family, gait and direction of travel, and bracket the age of the trail from dated events.', concepts: ['track-families', 'gait-patterns', 'direction-of-travel', 'age-bracketing'], component: TrackingScene },
]
