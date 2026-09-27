import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-thermoregulation'
import { l02 } from './l02-heat-loss'
import { l03 } from './l03-hypothermia'
import { l04 } from './l04-heat-stress'
import { l05 } from './l05-hydration'
import { l06 } from './l06-energy'
import { l07 } from './l07-sleep'
import { l08 } from './l08-altitude'
import { l09 } from './l09-cold-water'
import { stage8Review } from './review'

export const stage8Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08, l09]

// New references only (URLs checked 2026-09-27; works without a verified URL are cited by title).
const references: Reference[] = [
  { id: 'wms-altitude-2024', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Prevention, Diagnosis, and Treatment of Acute Altitude Illness: 2024 Update', author: 'Luks AM, Beidleman BA, Freer L, et al.', year: '2024', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid'], url: 'https://journals.sagepub.com/doi/10.1016/j.wem.2023.05.013', note: 'Wilderness & Environmental Medicine 35(1S):2S–19S. Ascent rates, AMS/HACE/HAPE prevention and treatment.' },
  { id: 'wms-eah-2019', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Management of Exercise-Associated Hyponatremia: 2019 Update', author: 'Bennett BL, Hew-Butler T, Rosner MH, Myers T, Lipman GS', year: '2020', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid', 'water'], url: 'https://journals.sagepub.com/doi/10.1016/j.wem.2019.11.003', note: 'Drink to thirst; EAH mimics heat illness.' },
  { id: 'wms-drowning-2024', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Treatment and Prevention of Drowning: 2024 Update', author: 'Davis CA, Schmidt AC, Sempsrott JR, et al.', year: '2024', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid'], url: 'https://journals.sagepub.com/doi/10.1177/10806032241227460' },
  { id: 'cdc-yellowbook-altitude', kind: 'government', title: 'High-Altitude Travel and Altitude Illness (CDC Yellow Book)', org: 'US Centers for Disease Control and Prevention', subjects: ['physiology'], url: 'https://www.cdc.gov/yellow-book/hcp/environmental-hazards-risks/high-altitude-travel-and-altitude-illness.html', note: 'Above 3,000 m: ≤ 500 m/night sleeping-altitude gain; extra night per 1,000 m.' },
  { id: 'tipton-cwi-2017', kind: 'paper', title: 'Cold water immersion: kill or cure?', author: 'Tipton MJ, Collier N, Massey H, Corbett J, Harper M', year: '2017', subjects: ['physiology'], url: 'https://pubmed.ncbi.nlm.nih.gov/28833689/', note: 'Experimental Physiology 102(11):1335–1355. Review of cold shock, swim failure and immersion hypothermia.' },
  { id: 'rnli-float', kind: 'organization', title: 'Float to Live — what to do if you fall in water', org: 'RNLI (Royal National Lifeboat Institution)', subjects: ['physiology'], url: 'https://rnli.org/water-safety/float' },
  { id: 'williamson-feyer-2000', kind: 'paper', title: 'Moderate sleep deprivation produces impairments in cognitive and motor performance equivalent to legally prescribed levels of alcohol intoxication', author: 'Williamson AM, Feyer AM', year: '2000', subjects: ['physiology', 'psychology'], url: 'https://pubmed.ncbi.nlm.nih.gov/10984335/', note: 'Occupational and Environmental Medicine 57(10):649–655.' },
  { id: 'webvision-dark-adaptation', kind: 'book', title: 'Light and Dark Adaptation (Webvision: The Organization of the Retina and Visual System)', author: 'Kalloniatis M, Luu C', subjects: ['physiology'], url: 'https://www.ncbi.nlm.nih.gov/books/NBK11525/' },
  { id: 'niosh-heat', kind: 'government', title: 'Heat Stress and Workers', org: 'US NIOSH / CDC', subjects: ['physiology'], url: 'https://www.cdc.gov/niosh/heat-stress/about/index.html' },
  { id: 'who-ors-2006', kind: 'guideline', title: 'Oral Rehydration Salts: Production of the New ORS', org: 'World Health Organization / UNICEF', year: '2006', subjects: ['physiology', 'water', 'first-aid'], note: 'WHO/FCH/CAH/06.1. Reduced-osmolarity ORS: 75 mmol/L sodium, 75 mmol/L glucose, 245 mOsm/L.' },
  { id: 'keys-starvation', kind: 'book', title: 'The Biology of Human Starvation', author: 'Keys A, Brožek J, Henschel A, Mickelsen O, Taylor HL', year: '1950', subjects: ['physiology', 'food', 'long-duration'], note: 'The Minnesota Starvation Experiment: physical and psychological effects of prolonged semi-starvation.' },
  { id: 'hayward-1975', kind: 'paper', title: 'Thermal balance and survival time prediction of man in cold water', author: 'Hayward JS, Eckerson JD, Collis ML', year: '1975', subjects: ['physiology'], note: 'Canadian Journal of Physiology and Pharmacology 53(1):21–32. Origin of the HELP and huddle recommendations.' },
  { id: 'golden-tipton-sea-survival', kind: 'book', title: 'Essentials of Sea Survival', author: 'Frank Golden, Michael Tipton', year: '2002', subjects: ['physiology'], note: 'Human Kinetics. The four stages of immersion and the physiology behind sea-survival advice.' },
  { id: 'tbmed-505', kind: 'government', title: 'TB MED 505: Altitude Acclimatization and Illness Management', org: 'US Army', subjects: ['physiology'], note: 'Military doctrine on staged ascent, acclimatisation and altitude illness.' },
]

const concepts: Record<string, string> = {
  thermoregulation: 'Thermoregulation',
  'core-shell': 'Core vs shell temperature',
  shivering: 'Shivering thermogenesis',
  'radiative-loss': 'Radiative heat loss',
  'wind-chill': 'Wind chill',
  'evaporative-loss': 'Evaporation and wet clothing',
  hypothermia: 'Hypothermia staging and care',
  afterdrop: 'Afterdrop and gentle handling',
  'heat-illness': 'Heat exhaustion vs heat stroke',
  'heat-acclimatisation': 'Heat acclimatisation',
  wbgt: 'WBGT and heat-stress indices',
  electrolytes: 'Sodium and electrolytes',
  hyponatremia: 'Hyponatremia',
  ors: 'Oral rehydration',
  glycogen: 'Glycogen',
  'fat-oxidation': 'Fat oxidation',
  starvation: 'Starvation physiology',
  'energy-budget': 'Energy budgets',
  'sleep-deprivation': 'Sleep deprivation',
  'night-vision': 'Night vision and dark adaptation',
  'cognitive-degradation': 'Cognitive degradation under physical stress',
  hypoxia: 'Hypoxia at altitude',
  'altitude-illness': 'AMS, HAPE and HACE',
  'ascent-rate': 'Ascent rate and acclimatisation',
  'cold-shock': 'Cold shock response',
  'swim-failure': 'Swim failure',
  'immersion-hypothermia': 'Immersion hypothermia',
  'help-huddle': 'HELP and huddle',
}

const skills: Skill[] = [
  { id: 'fluid-electrolyte-plan', name: 'Personal fluid and electrolyte plan', stage: 8, physical: true, safety: 'home', description: 'Measure your own sweat rate in different conditions and plan water and salty food for a long hot day.' },
  { id: 'cold-energy-budget', name: 'Cold-weather energy budget', stage: 8, physical: false, safety: 'home', description: 'Plan food by energy density and schedule for multi-day cold trips, including a pre-sleep snack.' },
  { id: 'night-vision-discipline', name: 'Night-vision discipline', stage: 8, physical: true, safety: 'outdoor', description: 'Protect dark adaptation with red light and one-eye technique, and use averted vision and scanning.' },
  { id: 'cold-water-readiness', name: 'Cold-water readiness', stage: 8, physical: true, safety: 'supervised', description: 'Fit and wear a PFD correctly; float, hold HELP and huddle under supervision; know the four stages of immersion.' },
]

export const stage8: StageContent = { n: 8, lessons: stage8Lessons, review: stage8Review, references, concepts, skills }
