import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-requirements'
import { l02 } from './l02-finding'
import { l03 } from './l03-collecting'
import { l04 } from './l04-contamination'
import { l05 } from './l05-treatment-science'
import { l06 } from './l06-improvised-storage'
import { stage4Review } from './review'

export const stage4Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06]

// New references only (existing ids from references.ts are reused freely).
const references: Reference[] = [
  { id: 'cdc-yellowbook-water', kind: 'government', title: 'Water Disinfection for Travelers (CDC Yellow Book)', author: 'Backer HD, Hill VR', org: 'US Centers for Disease Control and Prevention', subjects: ['water'], url: 'https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/water-disinfection-for-travelers.html', note: 'Organism sizes vs filter pores, heat (60 °C × 30 min; seconds at 100 °C), chemical and UV methods, EPA purifier benchmark (6/4/3 log), SODIS conditions, alum clarification.' },
  { id: 'cdc-water-storage', kind: 'government', title: 'Creating and Storing an Emergency Water Supply', org: 'US Centers for Disease Control and Prevention', subjects: ['water', 'urban'], url: 'https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html', note: '1 gallon per person per day for at least 3 days, 2 weeks if possible; container sanitising; replace every 6 months.' },
  { id: 'cdc-hwt', kind: 'government', title: 'Household Water Treatment (Global WASH)', org: 'US Centers for Disease Control and Prevention', subjects: ['water'], url: 'https://www.cdc.gov/global-water-sanitation-hygiene/about/about-household-water-treatment.html', note: 'SODIS: 6–8 h of strong sun, or 2 days if cloudy; safe storage; none of these methods remove chemicals.' },
  { id: 'cdc-habs', kind: 'government', title: 'Harmful Algal Blooms and Your Health', org: 'US Centers for Disease Control and Prevention', subjects: ['water'], url: 'https://www.cdc.gov/harmful-algal-blooms/about/index.html' },
  { id: 'epa-habs', kind: 'government', title: 'Harmful Algal Blooms (HABs) in Water Bodies', org: 'US Environmental Protection Agency', subjects: ['water'], url: 'https://www.epa.gov/cyanohabs' },
  { id: 'who-cyanobacteria-2021', kind: 'guideline', title: 'Toxic Cyanobacteria in Water (2nd ed.)', author: 'Chorus I, Welker M (eds.)', org: 'World Health Organization', year: '2021', subjects: ['water'], url: 'https://www.who.int/publications/m/item/toxic-cyanobacteria-in-water---second-edition' },
  { id: 'who-hwts-round1', kind: 'guideline', title: 'Results of Round I of the WHO International Scheme to Evaluate Household Water Treatment Technologies', org: 'World Health Organization', year: '2016', subjects: ['water'], url: 'https://www.who.int/publications/i/item/9789241509947', note: 'Independent laboratory testing of filters, chlorine, UV and solar methods against WHO performance targets.' },
  { id: 'usgs-groundwater', kind: 'government', title: 'Groundwater: What Is Groundwater?', org: 'US Geological Survey, Water Science School', subjects: ['water', 'navigation'], url: 'https://www.usgs.gov/special-topics/water-science-school/science/groundwater-what-groundwater' },
  { id: 'sodis-eawag', kind: 'organization', title: 'SODIS — Solar Water Disinfection (method, manual and training materials)', org: 'Eawag, Swiss Federal Institute of Aquatic Science and Technology', subjects: ['water'], url: 'https://www.sodis.ch' },
  { id: 'cheuvront-dehydration-2014', kind: 'paper', title: 'Dehydration: Physiology, Assessment, and Performance Effects', author: 'Cheuvront SN, Kenefick RW', year: '2014', subjects: ['physiology', 'water'], url: 'https://onlinelibrary.wiley.com/doi/10.1002/cphy.c130017', note: 'Comprehensive Physiology 4(1). Review of body-water physiology and the performance effects of dehydration.' },
  { id: 'adolph-desert-1947', kind: 'book', title: 'Physiology of Man in the Desert', author: 'Adolph EF and associates', year: '1947', subjects: ['physiology', 'water'], note: 'Classic field studies of desert sweat rates, "voluntary dehydration" and survival without water.' },
  { id: 'jackson-vanbavel-1965', kind: 'paper', title: 'Solar Distillation of Water from Soil and Plant Materials: A Simple Desert Survival Technique', author: 'Jackson RD, van Bavel CHM', year: '1965', subjects: ['water'], url: 'https://pubmed.ncbi.nlm.nih.gov/5826532/', note: 'Science 149:1377–1379. The original pit still; ~1.5 L/day best case.' },
  { id: 'colwell-sari-2003', kind: 'paper', title: 'Reduction of Cholera in Bangladeshi Villages by Simple Filtration', author: 'Colwell RR, Huq A, Islam MS, et al.', year: '2003', subjects: ['water'], url: 'https://pubmed.ncbi.nlm.nih.gov/12529505/', note: 'PNAS 100(3):1051–1055. Folded sari cloth (~20 µm) cut cholera by ~48 %.' },
  { id: 'epa-swtr-ct', kind: 'government', title: 'Guidance Manual for Compliance with the Filtration and Disinfection Requirements for Public Water Systems Using Surface Water Sources (Surface Water Treatment Rule), CT tables', org: 'US Environmental Protection Agency', year: '1991', subjects: ['water'], note: 'Source of the CT values for Giardia and viruses by disinfectant, temperature and pH.' },
  { id: 'epa-uvdgm-2006', kind: 'government', title: 'Ultraviolet Disinfection Guidance Manual for the Final Long Term 2 Enhanced Surface Water Treatment Rule', org: 'US Environmental Protection Agency', year: '2006', subjects: ['water'], note: 'UV dose requirements (mJ/cm²) for Cryptosporidium, Giardia and viruses.' },
]

const concepts: Record<string, string> = {
  'body-water': 'Body water and daily water balance',
  'sweat-rate': 'Measuring sweat rate',
  'water-budget': 'Water budgets (daily and multi-day)',
  'water-finding': 'Finding water: terrain, vegetation and animal clues',
  groundwater: 'Groundwater, springs, seeps and dune lenses',
  'water-collection': 'Collecting rain, dew, fog and transpiration',
  snowmelt: 'Melting snow and ice: the fuel cost',
  'solar-still': 'Solar still yield vs sweat cost',
  'pathogen-classes': 'Waterborne pathogen classes and sizes',
  'infective-dose': 'Infective dose and dose–response',
  'chemical-contamination': 'Chemical contamination of water',
  cyanotoxins: 'Cyanobacterial (blue-green algae) toxins',
  'log-reduction': 'Log reductions and multi-barrier treatment',
  'ct-disinfection': 'CT: concentration × contact time',
  filtration: 'Filter pore sizes vs organism sizes',
  'uv-dose': 'UV dose and water clarity',
  'boiling-altitude': 'Boiling, pasteurisation and altitude',
  turbidity: 'Turbidity and clarification',
  'improvised-treatment': 'Improvised treatment and its limits',
  sodis: 'Solar water disinfection (SODIS)',
  'safe-storage': 'Safe water storage',
}

const skills: Skill[] = [
  { id: 'water-budget', name: 'Plan a water budget from measured sweat rates', stage: 4, physical: false, safety: 'home', description: 'Measure your sweat rate and build daily and multi-day water budgets for a group, including timing, margin and sources.' },
  { id: 'water-multibarrier', name: 'Treat turbid field water with a multi-barrier chain', stage: 4, physical: true, safety: 'outdoor', description: 'Clarify, filter and disinfect with correct dose, contact time or SODIS conditions, matched to the hazards upstream.' },
  { id: 'water-storage', name: 'Household emergency water store', stage: 4, physical: true, safety: 'home', description: 'Store and rotate at least 3 days (ideally 2 weeks) of safe water in sanitised, labelled containers; know your heater drain.' },
]

export const stage4: StageContent = { n: 4, lessons: stage4Lessons, review: stage4Review, references, concepts, skills }
