import type { SimDef } from '../types'
import { HomeKit } from './HomeKit'
import { Outage72h } from './Outage72h'

export const sims: SimDef[] = [
  { id: 'home-kit', title: 'Home Kit Builder', stage: 16, description: 'Stock a household emergency kit for a chosen household and climate under budget and storage limits; see coverage and gaps.', concepts: ['home-kit', 'emergency-water-food', 'battery-capacity', 'generator-safety'], component: HomeKit },
  { id: 'outage-72h', title: '72-Hour Outage', stage: 16, description: 'Live through a 72-hour power and water outage in winter or summer, hour by hour: heat or cool, eat, drink, conserve batteries, avoid CO, check the neighbour, decide on the shelter.', concepts: ['power-outage', 'water-outage', 'carbon-monoxide', 'vulnerable-neighbours', 'temporary-shelter'], component: Outage72h },
]
