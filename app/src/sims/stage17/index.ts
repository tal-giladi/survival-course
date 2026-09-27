import type { SimDef } from '../types'
import { StrandedVehicle } from './StrandedVehicle'

export const sims: SimDef[] = [
  {
    id: 'stranded-vehicle',
    title: 'Stranded Vehicle',
    stage: 17,
    description: 'Stranded alone in desert heat or a blizzard: decide hour by hour on shade, water, engine runs with a clear or buried exhaust, fuel, signals, a beacon — and whether to stay or walk.',
    concepts: ['stay-with-vehicle', 'water-budget', 'vehicle-exhaust-co', 'vehicle-fuel-budget', 'vehicle-signaling', 'hot-car-cabin', 'vehicle-insulation'],
    component: StrandedVehicle,
  },
]
