import type { StageContent } from '../../types'
import { l01 } from './l01-method'
import { l02 } from './l02-containers'
import { l03 } from './l03-frames'
import { l04 } from './l04-repair'
import { l05 } from './l05-sanitation'
import { stage10Review } from './review'

export const stage10: StageContent = {
  n: 10,
  lessons: [l01, l02, l03, l04, l05],
  review: stage10Review,
  concepts: {
    'improvisation-method': 'The improvisation method (function → properties → test)',
    'functional-fixedness': 'Functional fixedness',
    'material-properties': 'Material properties for improvising',
    'load-testing': 'Test before trusting (load tests and safety factor)',
    'critical-gear-tradeoff': 'Opportunity cost of using critical gear',
    'improvised-containers': 'Improvised water containers and food safety',
    'water-transport': 'Carrying and moving water',
    tripods: 'Tripods, bipods and frames',
    'load-carriage': 'Carrying loads and improvised pack frames',
    'field-repair': 'Field repair techniques',
    'repair-kit': 'Repair kit contents',
    'footwear-repair': 'Footwear and clothing repair',
    'fecal-oral-route': 'Faecal–oral transmission (F-diagram)',
    catholes: 'Catholes and human-waste disposal',
    'hand-hygiene': 'Hand hygiene in the field',
    'camp-layout': 'Camp layout for hygiene',
  },
  skills: [
    { id: 's10-field-repair', name: 'Field repair kit and repairs', stage: 10, physical: true, safety: 'home', description: 'Carry a practised repair kit and fix footwear, fabric, tent poles and straps in under 10 minutes each, knowing what must never be field-repaired.' },
    { id: 's10-camp-sanitation', name: 'Camp sanitation and hygiene', stage: 10, physical: true, safety: 'outdoor', description: 'Lay out a camp with separate water, kitchen and toilet areas, site catholes or pack out waste as rules require, and run a hand-washing station.' },
  ],
  references: [
    { id: 's10-duncker-1945', kind: 'paper', title: 'On problem-solving', author: 'Karl Duncker', year: '1945', subjects: ['psychology', 'improvisation'], note: 'Psychological Monographs 58(5). Origin of the “candle problem” and the idea of functional fixedness.' },
    { id: 's10-inglis-1913', kind: 'paper', title: 'Stresses in a plate due to the presence of cracks and sharp corners', author: 'C. E. Inglis', year: '1913', subjects: ['improvisation'], note: 'Transactions of the Institution of Naval Architects 55. The classic stress-concentration result for an elliptical hole, 1 + 2a/b.' },
    { id: 's10-wagner-lanoix-1958', kind: 'book', title: 'Excreta Disposal for Rural Areas and Small Communities', author: 'E. G. Wagner, J. N. Lanoix', org: 'World Health Organization', year: '1958', subjects: ['water', 'first-aid'], note: 'WHO Monograph Series No. 39. Source of the faecal–oral transmission diagram later known as the F-diagram.' },
    { id: 's10-welch-giardia-2000', kind: 'paper', title: 'Risk of giardiasis from consumption of wilderness water in North America: a systematic review of epidemiologic data', author: 'Timothy P. Welch', year: '2000', subjects: ['water', 'first-aid'], note: 'International Journal of Infectious Diseases. Argues that hand-to-mouth transmission deserves more attention than it gets relative to untreated water.' },
    { id: 's10-cdc-handwashing', kind: 'government', title: 'Clean Hands: handwashing and hand sanitizer guidance', org: 'US Centers for Disease Control and Prevention', subjects: ['first-aid', 'water'], note: 'Wet, lather, scrub at least 20 seconds, rinse, dry; sanitiser with at least 60 % alcohol when soap and water are unavailable; sanitiser works less well on visibly dirty or greasy hands and against some germs such as norovirus and Cryptosporidium. Find it on cdc.gov.' },
  ],
}
