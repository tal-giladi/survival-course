import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-cordage'
import { l02 } from './l02-knots-lashings'
import { l03 } from './l03-containers'
import { l04 } from './l04-knife-wood'
import { l05 } from './l05-stone-bone'
import { l06 } from './l06-adhesives-charcoal'
import { stage7Review } from './review'

export const stage7Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06]

// New references only. URLs checked 2026-09-27; works without a verified URL are cited by title.
const references: Reference[] = [
  { id: 'wescott-primitive-tech', kind: 'book', title: 'Primitive Technology: A Book of Earth Skills', author: 'David Wescott (ed.)', org: 'Society of Primitive Technology / Gibbs Smith', year: '1999', subjects: ['bushcraft'], note: 'Practitioner articles on cordage, containers, knapping, adhesives, pigments and fire, from the Bulletin of Primitive Technology.' },
  { id: 'hearle-yarn-mechanics', kind: 'book', title: 'Structural Mechanics of Fibers, Yarns, and Fabrics', author: 'J. W. S. Hearle, P. Grosberg, S. Backer', year: '1969', subjects: ['bushcraft', 'rope'], note: 'The classic analysis of twist, helix angle, fiber migration and yarn strength.' },
  { id: 'mckenna-rope-tech', kind: 'book', title: 'Handbook of Fibre Rope Technology', author: 'H. A. McKenna, J. W. S. Hearle, N. O’Hear', org: 'Woodhead Publishing', year: '2004', subjects: ['rope', 'bushcraft'], note: 'Rope structures, natural and synthetic fibers, knot and bend efficiency.' },
  { id: 'cordage-institute', kind: 'organization', title: 'Cordage Institute (rope and cordage standards)', url: 'https://www.ropecord.com/', subjects: ['rope'], note: 'Industry standards for rope testing, safety factors and D/d bend ratios.' },
  { id: 'ashley-knots', kind: 'book', title: 'The Ashley Book of Knots', author: 'Clifford W. Ashley', year: '1944', subjects: ['rope', 'bushcraft'], note: 'The standard encyclopedia of knots, bends, hitches and lashings.' },
  { id: 'hibbeler-statics', kind: 'book', title: 'Engineering Mechanics: Statics', author: 'R. C. Hibbeler', subjects: ['rope', 'bushcraft'], note: 'Standard textbook treatment of belt (capstan) friction, wedges and cables.' },
  { id: 'whittaker-flintknapping', kind: 'book', title: 'Flintknapping: Making and Understanding Stone Tools', author: 'John C. Whittaker', org: 'University of Texas Press', year: '1994', subjects: ['bushcraft'], note: 'Fracture mechanics, techniques and safety, by an archaeologist-knapper.' },
  { id: 'osha-silica', kind: 'government', title: 'Silica, Crystalline', org: 'US Occupational Safety and Health Administration', url: 'https://www.osha.gov/silica-crystalline', subjects: ['bushcraft', 'first-aid'], note: 'Health effects of respirable crystalline silica (silicosis) and dust controls.' },
  { id: 'niosh-silica', kind: 'government', title: 'Silica and Worker Health', org: 'US NIOSH / CDC', url: 'https://www.cdc.gov/niosh/silica/about/index.html', subjects: ['bushcraft', 'first-aid'] },
  { id: 'kozowyk-birch-tar-2017', kind: 'paper', title: 'Experimental methods for the Palaeolithic dry distillation of birch bark: implications for the origin and development of Neandertal adhesive technology', author: 'Kozowyk PRB, Soressi M, Pomstra D, Langejans GHJ', year: '2017', url: 'https://doi.org/10.1038/s41598-017-08106-7', subjects: ['bushcraft'], note: 'Scientific Reports 7:8033.' },
  { id: 'wadley-adhesives-2009', kind: 'paper', title: 'Implications for complex cognition from the hafting of tools with compound adhesives in the Middle Stone Age, South Africa', author: 'Wadley L, Hodgskiss T, Grant M', year: '2009', url: 'https://doi.org/10.1073/pnas.0900957106', subjects: ['bushcraft'], note: 'PNAS 106(24):9590–9594. Plant gum + ochre compound adhesives.' },
  { id: 'fao-charcoal-1987', kind: 'guideline', title: 'Simple technologies for charcoal making (FAO Forestry Paper 41)', org: 'Food and Agriculture Organization of the United Nations', year: '1987', url: 'https://www.fao.org/4/x5328e/x5328e00.htm', subjects: ['bushcraft', 'fire'], note: 'Carbonisation stages, kiln types and yields.' },
  { id: 'uk-felling-licence', kind: 'regulation', title: 'When a felling licence is needed', org: 'Forestry Commission (GOV.UK)', url: 'https://www.gov.uk/guidance/tree-felling-licence-when-you-need-to-apply', subjects: ['law', 'bushcraft'], note: 'Example of tree-felling control: in England a licence is generally needed above 5 m³ per calendar quarter.' },
  { id: 'uk-knife-law', kind: 'regulation', title: 'Selling, buying and carrying knives and weapons', org: 'GOV.UK', url: 'https://www.gov.uk/buying-carrying-knives', subjects: ['law', 'bushcraft'], note: 'Example of knife-carry law: non-locking folders with blades up to 3 inches.' },
  { id: 'cfr-36-2-1', kind: 'regulation', title: '36 CFR §2.1 — Preservation of natural, cultural and archeological resources', org: 'US National Park Service (Code of Federal Regulations)', subjects: ['law'], note: 'Prohibits removing or disturbing plants, rocks, minerals and cultural resources in US national parks, except as permitted.' },
  { id: 'uk-wca-1981', kind: 'regulation', title: 'Wildlife and Countryside Act 1981, section 13 (protection of wild plants)', org: 'UK Parliament', subjects: ['law', 'food'], note: 'Uprooting any wild plant without the landowner’s authorisation is an offence; listed species are fully protected.' },
  { id: 'arpa-1979', kind: 'regulation', title: 'Archaeological Resources Protection Act of 1979 (16 U.S.C. 470aa–mm)', org: 'US Congress', subjects: ['law'], note: 'Prohibits excavating or removing archaeological resources from US federal and tribal lands without a permit.' },
]

const concepts: Record<string, string> = {
  'natural-fibers': 'Natural fiber sources and processing',
  'cordage-twist': 'Why twist makes fibers into cordage',
  'reverse-wrap': 'Reverse-wrap plying and torque balance',
  'cordage-strength': 'Cordage strength, loads and safety factors',
  'capstan-friction': 'Capstan friction (T₂ = T₁·e^(μθ))',
  'knot-efficiency': 'Knot efficiency and bend radius',
  lashings: 'Square, diagonal and tripod lashings',
  'bark-containers': 'Bark containers',
  weaving: 'Basketry and weaving structures',
  'stone-boiling': 'Stone boiling and heat transfer',
  'knife-safety': 'Safe knife work and the blood circle',
  batoning: 'Batoning and the wedge',
  'wood-tools': 'Wooden tools and wood as a material',
  'improvised-tools': 'Improvised tools',
  'conchoidal-fracture': 'Conchoidal fracture',
  'knapping-safety': 'Flintknapping safety (eyes, lungs, cuts)',
  'bone-tools': 'Bone and antler tools',
  'pitch-glue': 'Pine pitch glue',
  charcoal: 'Charcoal and pyrolysis',
  pigments: 'Natural pigments',
  'smoke-production': 'Smoke production and uses',
  'harvest-law': 'Harvesting and collecting law (bark, wood, plants, stone)',
}

const skills: Skill[] = [
  { id: 'knife-safety', name: 'Safe knife work and carving', stage: 7, physical: true, safety: 'supervised', description: 'Keep the blood circle, carve seated outside the knee with braced grips, pass and sheath safely, and carve pegs, pot hooks and feather sticks.' },
  { id: 'bark-container', name: 'Bark or woven container', stage: 7, physical: true, safety: 'outdoor', description: 'Fold a leak-free bark container with the grain around it, or weave a small basket, from legally sourced material.' },
  { id: 'flintknapping', name: 'Flintknapping basics (with PPE)', stage: 7, physical: true, safety: 'supervised', description: 'Read platform angles and remove predictable flakes with full eye, lung and hand protection, and dispose of debitage safely.' },
  { id: 'pitch-glue', name: 'Pine pitch glue and hafting', stage: 7, physical: true, safety: 'supervised', description: 'Mix resin, charcoal and temper to a tough glue without overheating, and haft a blade with glue and lashing.' },
]

export const stage7: StageContent = { n: 7, lessons: stage7Lessons, review: stage7Review, references, concepts, skills }
