import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-combustion'
import { l02 } from './l02-fuel'
import { l03 } from './l03-lays'
import { l04 } from './l04-wet-fire'
import { l05 } from './l05-sparks'
import { l06 } from './l06-friction'
import { l07 } from './l07-heating'
import { l08 } from './l08-safety'
import { stage3Review } from './review'

export const stage3Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08]

// New references only. URLs checked 2026-09-27; books without a stable URL are cited by title.
const stage3References: Reference[] = [
  { id: 'drysdale-fire-dynamics', kind: 'book', title: 'An Introduction to Fire Dynamics (3rd ed.)', author: 'Dougal Drysdale', year: '2011', subjects: ['fire'], note: 'Standard fire-science text: pyrolysis, ignition, flame spread, heat transfer.' },
  { id: 'babrauskas-ignition', kind: 'book', title: 'Ignition Handbook', author: 'Vytenis Babrauskas', year: '2003', org: 'Fire Science Publishers / SFPE', subjects: ['fire'], note: 'Reference for ignition temperatures of wood and other materials, and why they vary with heating time.' },
  { id: 'fpl-wood-handbook', kind: 'government', title: 'Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)', author: 'Robert J. Ross (ed.)', org: 'USDA Forest Service, Forest Products Laboratory', year: '2021', url: 'https://research.fs.usda.gov/treesearch/62200', subjects: ['fire', 'bushcraft'], note: 'Moisture content definitions, density, thermal properties and fire performance of wood.' },
  { id: 'nps-fire', kind: 'government', title: 'Fire', org: 'US National Park Service', url: 'https://www.nps.gov/subjects/fire/index.htm', subjects: ['fire', 'law'], note: 'Each park’s Superintendent’s Compendium lists local fire rules.' },
  { id: 'ready-wildfires', kind: 'government', title: 'Wildfires', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/wildfires', subjects: ['fire', 'hazards', 'urban'] },
  { id: 'cwfis', kind: 'government', title: 'Canadian Wildland Fire Information System', org: 'Natural Resources Canada', url: 'https://cwfis.cfs.nrcan.gc.ca/home', subjects: ['fire', 'hazards'], note: 'National fire-danger and fire-weather maps.' },
  { id: 'effis', kind: 'government', title: 'European Forest Fire Information System (EFFIS)', org: 'Copernicus Emergency Management Service / European Commission JRC', url: 'https://forest-fire.emergency.copernicus.eu/', subjects: ['fire', 'hazards'], note: 'Fire-danger forecasts and current fires across Europe, the Middle East and North Africa.' },
  { id: 'scottish-access-code', kind: 'regulation', title: 'Scottish Outdoor Access Code', org: 'NatureScot', url: 'https://www.outdooraccess-scotland.scot/', subjects: ['law', 'fire'], note: 'Statutory guidance on responsible access, wild camping and fires in Scotland.' },
  { id: 'cdc-co', kind: 'government', title: 'Carbon Monoxide Poisoning Basics', org: 'US Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/carbon-monoxide/about/index.html', subjects: ['fire', 'urban', 'first-aid'], note: 'Sources, symptoms and prevention, including camp stoves and generators.' },
  { id: 'cpsc-co', kind: 'government', title: 'Carbon Monoxide Information Center', org: 'US Consumer Product Safety Commission', url: 'https://www.cpsc.gov/Safety-Education/Safety-Education-Centers/Carbon-Monoxide-Information-Center', subjects: ['fire', 'urban'], note: 'Generators, CO alarms and symptoms.' },
  { id: 'epa-burnwise', kind: 'government', title: 'Burn Wise', org: 'US Environmental Protection Agency', url: 'https://www.epa.gov/burnwise', subjects: ['fire'], note: 'Wood smoke, health, and burning dry wood cleanly.' },
  { id: 'iol-bushcraft-cert', kind: 'training', title: 'IOL Bushcraft Competency Certificate (includes a bow-drill unit)', org: 'Institute for Outdoor Learning (UK)', url: 'https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft/bushcraft-competency-certificate.html', subjects: ['bushcraft', 'fire'] },
]

const stage3Concepts: Record<string, string> = {
  combustion: 'Combustion and pyrolysis',
  'surface-to-volume': 'Surface-to-volume ratio',
  'moisture-content': 'Fuel moisture and energy',
  'fuel-selection': 'Tinder, kindling and fuel selection',
  'fire-lays': 'Fire lays',
  'fire-purpose': 'Matching a fire to its purpose',
  'long-duration-fire': 'Long-duration fires and fuel budgets',
  'wet-weather-fire': 'Wet-weather fire',
  'spark-ignition': 'Ferrocerium and flint-and-steel',
  'ember-to-flame': 'Ember to flame',
  'friction-fire': 'Friction fire',
  'friction-power': 'Friction power and heat losses',
  'radiant-heat': 'Radiant heat geometry',
  reflectors: 'Fire reflectors',
  'fire-law': 'Fire law and restrictions',
  'wildfire-risk': 'Fire weather and wildfire risk',
  extinguishing: 'Extinguishing a fire',
  'carbon-monoxide': 'Carbon monoxide',
  'leave-no-trace': 'Leave No Trace fire practice',
}

const stage3Skills: Skill[] = [
  { id: 'spark-ignition', name: 'Ferro rod and flint-and-steel on natural tinder', stage: 3, physical: true, safety: 'outdoor', description: 'Light natural tinder with a ferro rod, and char cloth with flint and steel, then blow an ember to flame — in a legal fire setting.' },
  { id: 'fire-reflector', name: 'Warming fire with reflector', stage: 3, physical: true, safety: 'outdoor', description: 'Build a long, low warming fire with a reflector and windbreak, budget its fuel, and keep it safe overnight where legal.' },
]

export const stage3: StageContent = {
  n: 3,
  lessons: stage3Lessons,
  review: stage3Review,
  references: stage3References,
  concepts: stage3Concepts,
  skills: stage3Skills,
}
