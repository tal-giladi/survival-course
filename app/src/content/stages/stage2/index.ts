import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-maps'
import { l02 } from './l02-topography'
import { l03 } from './l03-compass'
import { l04 } from './l04-bearings'
import { l05 } from './l05-pacing'
import { l06 } from './l06-terrain'
import { l07 } from './l07-relocation'
import { l08 } from './l08-sun'
import { l09 } from './l09-stars'
import { l10 } from './l10-natural'
import { l11 } from './l11-gps'
import { l12 } from './l12-nav-fails'
import { stage2Review } from './review'
import { navRelocation } from './scenario-relocation'

export const stage2Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08, l09, l10, l11, l12]

// New references for Stage 2 (URLs checked 2026-09-27; existing ids in references.ts are reused freely).
const references: Reference[] = [
  { id: 'noaa-wmm', kind: 'government', title: 'World Magnetic Model (WMM2025)', org: 'NOAA NCEI / British Geological Survey', year: '2025', url: 'https://www.ncei.noaa.gov/products/world-magnetic-model', subjects: ['navigation'], note: 'The standard model of Earth’s magnetic field behind declination values on maps, phones and GPS units; valid to late 2029.' },
  { id: 'usgs-topo', kind: 'government', title: 'Topographic Maps (US Topo, historical topos, topoBuilder)', org: 'USGS National Geospatial Program', url: 'https://www.usgs.gov/programs/national-geospatial-program/topographic-maps', subjects: ['navigation'] },
  { id: 'orienteering-usa', kind: 'organization', title: 'Orienteering USA — find a club and practice courses', url: 'https://orienteeringusa.org/', subjects: ['navigation'] },
  { id: 'british-orienteering', kind: 'organization', title: 'British Orienteering — clubs, permanent courses and coaching', url: 'https://www.britishorienteering.org.uk/', subjects: ['navigation'] },
  { id: 'tc-3-25-26', kind: 'government', title: 'TC 3-25.26 Map Reading and Land Navigation', org: 'US Army', year: '2013', subjects: ['navigation'], note: 'Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.' },
  { id: 'langmuir-mountaincraft', kind: 'book', title: 'Mountaincraft and Leadership', author: 'Eric Langmuir', org: 'Mountain Training', year: '4th ed., 2013', subjects: ['navigation', 'foundations'], note: 'The UK leader-training text; source of the common Naismith/Langmuir timing corrections.' },
  { id: 'naismith-1892', kind: 'paper', title: 'Cruach Ardran, Stobinian, and Ben More', author: 'William W. Naismith', year: '1892', subjects: ['navigation'], note: 'Scottish Mountaineering Club Journal 2(3):136. A one-paragraph note that became “Naismith’s rule”.' },
  { id: 'natural-navigator', kind: 'organization', title: 'The Natural Navigator', author: 'Tristan Gooley', url: 'https://www.naturalnavigator.com/', subjects: ['navigation'], note: 'Popular (not peer-reviewed) but careful modern writing on sun, star, plant and weather clues, including their limits.' },
  { id: 'noaa-solcalc', kind: 'tool', title: 'NOAA Solar Calculator', org: 'NOAA Global Monitoring Laboratory', url: 'https://gml.noaa.gov/grad/solcalc/', subjects: ['navigation'], note: 'Sunrise, sunset, solar noon and solar azimuth/elevation for any place and date. No longer actively maintained, but still accurate for learning.' },
  { id: 'noaa-solar-eqns', kind: 'government', title: 'General Solar Position Calculations', org: 'NOAA Global Monitoring Laboratory', url: 'https://gml.noaa.gov/grad/solcalc/solareqns.PDF', subjects: ['navigation'], note: 'Two-page summary of the declination, equation-of-time and hour-angle formulas used in this stage’s celestial simulator.' },
  { id: 'meeus-algorithms', kind: 'book', title: 'Astronomical Algorithms (2nd ed.)', author: 'Jean Meeus', year: '1998', subjects: ['navigation'], note: 'The standard reference for computing Sun, Moon and star positions.' },
  { id: 'nasa-moon-phases', kind: 'government', title: 'Moon Phases', org: 'NASA Science', url: 'https://science.nasa.gov/moon/moon-phases/', subjects: ['navigation'] },
  { id: 'gps-gov', kind: 'government', title: 'GPS.gov — official US government information about GPS', url: 'https://www.gps.gov/', subjects: ['navigation', 'signaling'] },
  { id: 'adventuresmart', kind: 'government', title: 'AdventureSmart — trip planning and “if lost” guidance', org: 'Canada’s national SAR prevention program', url: 'https://www.adventuresmart.ca/', subjects: ['navigation', 'signaling', 'foundations'] },
  { id: 'souman-circles-2009', kind: 'paper', title: 'Walking straight into circles', author: 'Souman JL, Frissen I, Sreenivasa MN, Ernst MO', year: '2009', url: 'https://doi.org/10.1016/j.cub.2009.07.053', subjects: ['navigation', 'psychology'], note: 'Current Biology 19(18):1538–1542. GPS-tracked walkers without sun or landmarks repeatedly walked in circles.' },
]

const concepts: Record<string, string> = {
  'map-scale': 'Map scale and distance',
  'grid-reference': 'Grid references and coordinates',
  'map-symbols': 'Map symbols and datums',
  contours: 'Contour interpretation',
  slope: 'Slope from contour spacing',
  landforms: 'Ridges, valleys, spurs and saddles',
  compass: 'Compass anatomy and use',
  declination: 'Magnetic declination',
  bearings: 'Taking and following bearings',
  'back-bearing': 'Back bearings',
  'angular-error': 'Angular error (1-in-60 rule)',
  pacing: 'Pace counting',
  timing: 'Travel-time estimation (Naismith)',
  'dead-reckoning': 'Dead reckoning and cumulative error',
  handrails: 'Handrails, catching features and attack points',
  'aiming-off': 'Aiming off',
  'terrain-association': 'Terrain association',
  resection: 'Resection and the cocked hat',
  relocation: 'Relocation procedures',
  'solar-direction': 'Direction from the sun',
  'shadow-stick': 'Shadow-stick method',
  'watch-method': 'Watch method and its error',
  polaris: 'Polaris and latitude',
  'southern-cross': 'Southern Cross and pointers',
  'star-navigation': 'Star navigation (Orion, rising and setting)',
  'moon-navigation': 'Direction from the Moon',
  'natural-navigation': 'Natural navigation signs',
  'nav-myths': 'Navigation myths',
  gnss: 'How GNSS positioning works',
  'coordinate-formats': 'Coordinate formats',
  'battery-strategy': 'Device battery strategy',
  'offline-maps': 'Offline maps',
  'lost-recognition': 'Recognising you are lost',
  'lost-person-behavior': 'Lost-person behavior',
  'no-equipment-nav': 'Navigating without equipment',
}

const skills: Skill[] = [
  { id: 'pace-count', name: 'Calibrated pace count', stage: 2, physical: true, safety: 'outdoor', description: 'Know your pace count per 100 m on flat, uphill, downhill and rough ground, and keep count reliably over 1 km.' },
  { id: 'terrain-association', name: 'Terrain association', stage: 2, physical: true, safety: 'outdoor', description: 'Keep the map oriented and tick off handrails, catching features and landforms as you move.' },
  { id: 'gps-offline', name: 'GPS and offline-map use', stage: 2, physical: false, safety: 'home', description: 'Download offline maps, read and report coordinates in several formats, and run a battery plan.' },
  { id: 'night-sky-direction', name: 'Direction from the night sky', stage: 2, physical: true, safety: 'outdoor', description: 'Find north or south from Polaris or the Southern Cross, and east/west from Orion, within about 5°.' },
]

export const stage2: StageContent = {
  n: 2,
  lessons: stage2Lessons,
  review: stage2Review,
  references,
  concepts,
  skills,
  scenarios: [navRelocation],
}
