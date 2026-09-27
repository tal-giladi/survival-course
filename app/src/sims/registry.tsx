import type { SimDef } from './types'
import { PriorityTriage } from './PriorityTriage'
import { HeatBalance } from './HeatBalance'
import { KitBuilder } from './KitBuilder'
import { ShelterSite } from './ShelterSite'
import { FireBasic } from './FireBasic'
import { WaterTreatment } from './WaterTreatment'
import { SignalDetect } from './SignalDetect'
import { scenarioSim } from './scenarioSim'
import { sims as s2 } from './stage2'
import { sims as s3 } from './stage3'
import { sims as s4 } from './stage4'
import { sims as s5 } from './stage5'
import { sims as s6 } from './stage6'
import { sims as s7 } from './stage7'
import { sims as s8 } from './stage8'
import { sims as s9 } from './stage9'
import { sims as s10 } from './stage10'
import { sims as s11 } from './stage11'
import { sims as s12 } from './stage12'
import { sims as s13 } from './stage13'
import { sims as s14 } from './stage14'
import { sims as s15 } from './stage15'
import { sims as s16 } from './stage16'
import { sims as s17 } from './stage17'
import { sims as s18 } from './stage18'
import { sims as s19 } from './stage19'

export type { SimProps, SimDef } from './types'

// Every simulation is registered here by id; lessons embed them with { type: 'sim', id }.
const stage1Sims: SimDef[] = [
  { id: 'priority-triage', title: 'Priority Triage', stage: 1, description: 'Pick the next highest-value action in rapidly changing situations.', concepts: ['priorities', 'twelve-questions'], component: PriorityTriage },
  { id: 'heat-balance', title: 'Heat Balance Lab', stage: 1, description: 'Change weather, clothing, wetness and activity; watch where your body heat goes.', concepts: ['heat-balance', 'heat-loss', 'wet-wind'], component: HeatBalance },
  { id: 'kit-builder', title: 'Kit Builder', stage: 1, description: 'Pack a survival kit under a weight limit for a chosen environment.', concepts: ['kit', 'redundancy'], component: KitBuilder },
  { id: 'shelter-site', title: 'Shelter Site Simulator', stage: 1, description: 'Choose a site, shelter, orientation and bedding — then live through the night.', concepts: ['site-selection', 'ground-insulation', 'shelter-types'], component: ShelterSite },
  { id: 'fire-basic', title: 'Fire Builder', stage: 1, description: 'Choose tinder, kindling, fuel, lay and placement in different weather.', concepts: ['fire-triangle', 'fire-structure', 'fire-safety'], component: FireBasic },
  { id: 'water-treatment', title: 'Water Safety Simulator', stage: 1, description: 'Pick a source and a treatment chain; see the remaining risk.', concepts: ['water-treatment'], component: WaterTreatment },
  { id: 'signal-detect', title: 'Be Seen, Be Heard', stage: 1, description: 'Choose signals for the searcher and conditions; see detection chances.', concepts: ['signaling', 'visibility'], component: SignalDetect },
  { id: 'scenario-lost-1400', title: 'Scenario: Day 1, 14:00 — You Realise You Are Lost', stage: 1, description: 'A branching scenario where every decision changes time, weather, resources and rescue probability.', concepts: ['integration', 'stay-or-move'], component: scenarioSim('lost-1400') },
]

// Later stages register their simulations in ./stageN/index.ts.
export const sims: SimDef[] = [...stage1Sims, ...s2, ...s3, ...s4, ...s5, ...s6, ...s7, ...s8, ...s9, ...s10, ...s11, ...s12, ...s13, ...s14, ...s15, ...s16, ...s17, ...s18, ...s19]

export const simById = (id: string) => sims.find((s) => s.id === id)
