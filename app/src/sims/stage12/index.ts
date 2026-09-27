import type { SimDef } from '../types'
import { CloudId } from './CloudId'
import { LightningRisk } from './LightningRisk'

export const sims: SimDef[] = [
  { id: 'cloud-id', title: 'Cloud ID and Forecast', stage: 12, description: 'Read drawn skies over time: identify the WMO cloud genus and forecast the next hours.', concepts: ['cloud-id', 'weather-fronts', 'convection-storms'], component: CloudId },
  { id: 'lightning-risk', title: 'Lightning Risk', stage: 12, description: 'Flashes and thunder arrive in real time: estimate distance, decide when and where to retreat, and when to resume.', concepts: ['lightning', 'flash-to-bang', 'go-no-go'], component: LightningRisk },
]
