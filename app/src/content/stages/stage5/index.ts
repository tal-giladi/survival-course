import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-design'
import { l02 } from './l02-site'
import { l03 } from './l03-tarps'
import { l04 } from './l04-natural'
import { l05 } from './l05-snow'
import { l06 } from './l06-hot-tropical'
import { l07 } from './l07-failure'
import { stage5Review } from './review'

export const stage5Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07]

const references: Reference[] = [
  { id: 'cdc-co', kind: 'government', title: 'Carbon Monoxide Poisoning Basics', org: 'US Centers for Disease Control and Prevention', subjects: ['shelter', 'physiology', 'urban'], url: 'https://www.cdc.gov/carbon-monoxide/about/index.html', note: 'Symptoms (headache, dizziness, weakness, nausea, confusion) and prevention.' },
  { id: 'cdc-mosquito', kind: 'government', title: 'Preventing Mosquito Bites', org: 'US Centers for Disease Control and Prevention', subjects: ['shelter', 'first-aid'], url: 'https://www.cdc.gov/mosquitoes/prevention/index.html', note: 'EPA-registered repellents (DEET, picaridin, OLE), permethrin-treated clothing, nets and screens.' },
  { id: 'ready-heat', kind: 'government', title: 'Extreme Heat', org: 'Ready.gov (FEMA)', subjects: ['urban', 'physiology'], url: 'https://www.ready.gov/heat' },
  { id: 'ready-winter', kind: 'government', title: 'Winter Weather', org: 'Ready.gov (FEMA)', subjects: ['urban', 'physiology'], url: 'https://www.ready.gov/winter-weather', note: 'Includes carbon-monoxide and generator safety.' },
  { id: 'avalanche-canada', kind: 'organization', title: 'Avalanche Canada', url: 'https://www.avalanche.ca/', subjects: ['hazards'], note: 'National avalanche forecasts and training information.' },
  { id: 'nps-camping', kind: 'government', title: 'Camping', org: 'US National Park Service', subjects: ['shelter', 'law'], url: 'https://www.nps.gov/subjects/camping/index.htm', note: 'Backcountry permits and park-specific camping rules.' },
  { id: 'sturm-snow-1997', kind: 'paper', title: 'The thermal conductivity of seasonal snow', author: 'Sturm M, Holmgren J, König M, Morris K', year: '1997', subjects: ['shelter', 'physiology'], note: 'Journal of Glaciology 43(143):26–41. Field measurements and the density–conductivity regression used in Lesson 5.' },
]

const concepts: Record<string, string> = {
  'r-value': 'R-values and insulation layers',
  'shelter-volume': 'Shelter volume and air exchange',
  'effort-budget': 'Build time, effort and sweat budget',
  'cold-air-pooling': 'Cold-air drainage and pooling',
  'site-hazards': 'Site hazards (flood, overhead, rockfall, avalanche)',
  drainage: 'Drainage and flood paths',
  'tarp-configs': 'Tarp configurations',
  'wind-loading': 'Wind loading and line tension',
  'natural-shelter': 'Natural and debris shelters',
  'reflector-fire': 'Fire reflectors and lean-tos',
  'snow-insulation': 'Snow as insulation',
  'snow-shelter': 'Snow shelters',
  'carbon-monoxide': 'Carbon monoxide and ventilation',
  'hot-shelter': 'Shade and hot-climate shelter',
  'tropical-shelter': 'Tropical shelter and raised beds',
  'insect-protection': 'Insect protection',
  'shelter-failure': 'Shelter failure analysis',
}

const skills: Skill[] = [
  { id: 'snow-shelter', name: 'Snow shelter construction (trench, quinzhee)', stage: 5, physical: true, safety: 'formal-training', description: 'Build a snow trench or quinzhee under instruction, with correct siting, wall thickness, cold sink, ventilation and buddy protocol.' },
  { id: 'shelter-overnight', name: 'Overnight in a self-pitched shelter', stage: 5, physical: true, safety: 'outdoor', description: 'Choose a site, pitch for the forecast, run a pre-mortem and night checks, and review what failed in the morning.' },
]

export const stage5: StageContent = { n: 5, lessons: stage5Lessons, review: stage5Review, references, concepts, skills }
