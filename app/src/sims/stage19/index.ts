import type { SimDef } from '../types'
import { scenarioSim } from '../scenarioSim'
import { FinalAssessment } from './FinalAssessment'

const caps: [string, string][] = [
  ['cap-1', 'Lost in a forest'],
  ['cap-2', 'Desert survival'],
  ['cap-3', 'Cold-weather survival'],
  ['cap-4', 'Tropical environment'],
  ['cap-5', 'Mountain environment'],
  ['cap-6', 'Injured while hiking'],
  ['cap-7', 'Lost at night'],
  ['cap-8', 'Unexpected overnight stay'],
  ['cap-9', 'Navigation failure'],
  ['cap-10', 'Multi-day survival'],
  ['cap-11', 'Group survival'],
  ['cap-12', 'Disaster / urban emergency'],
]

// Each capstone scenario has id `<cap-id>-scenario` in content/stages/stage19 and sim id `scenario-<cap-id>`.
export const sims: SimDef[] = [
  ...caps.map(([id, title]) => ({ id: `scenario-${id}`, title: `Capstone: ${title}`, stage: 19, description: 'Integrated branching scenario combining skills from across the course.', concepts: ['integration'], component: scenarioSim(`${id}-scenario`) })),
  { id: 'final-assessment', title: 'Final assessment', stage: 19, description: 'Judgment and prioritization across every domain of the course.', concepts: ['integration'], component: FinalAssessment },
]
