import type { StageContent } from '../../types'
import { l01 } from './l01-budgeting'
import { l02 } from './l02-camp-systems'
import { l03 } from './l03-maintenance'
import { l04 } from './l04-sleep-morale-planning'
import { stage18Review } from './review'

export const stage18: StageContent = {
  n: 18,
  lessons: [l01, l02, l03, l04],
  review: stage18Review,
  concepts: {
    's18-resource-ledger': 'Daily resource ledger (stock, income, use)',
    's18-limiting-resource': 'Limiting resource and days of reserve',
    's18-work-rest': 'Work–rest scheduling and the value of a work block',
    's18-camp-zones': 'Camp zoning and layout',
    's18-faecal-oral': 'Faecal–oral transmission and its barriers (F-diagram)',
    's18-clean-dirty': 'Clean/dirty separation in water and food systems',
    's18-camp-routine': 'Daily camp routine',
    's18-preventive-maintenance': 'Preventive maintenance and the daily round',
    's18-moisture-management': 'Moisture management in clothing and sleeping bags',
    's18-foot-care': 'Foot care and immersion (trench) foot',
    's18-sleep-system': 'Sleep systems for multi-day survival',
    's18-morale': 'Morale as a managed resource',
    's18-apathy': 'Withdrawal, apathy and “give-up-itis”',
    's18-rolling-plan': 'Rolling several-day plans and re-plan triggers',
  },
  skills: [
    { id: 's18-field-maintenance', name: 'Field maintenance and repair routine', stage: 18, physical: true, safety: 'outdoor', description: 'Run a daily maintenance round on a multi-night trip and carry out tape, stitch and splint repairs with a compact repair kit.' },
    { id: 's18-camp-hygiene', name: 'Multi-day camp layout and hygiene system', stage: 18, physical: true, safety: 'outdoor', description: 'Lay out a camp in zones, site a latrine correctly, run a hand-washing station and a clean/dirty water system for several days.' },
  ],
  references: [
    { id: 's18-wagner-lanoix-1958', kind: 'guideline', title: 'Excreta Disposal for Rural Areas and Small Communities (WHO Monograph Series No. 39)', author: 'Wagner EG, Lanoix JN', org: 'World Health Organization', year: '1958', subjects: ['water', 'long-duration'], note: 'Source of the classic diagram of faecal–oral transmission routes, later popularised as the “F-diagram”.' },
    { id: 's18-who-sanitation-2018', kind: 'guideline', title: 'Guidelines on Sanitation and Health', org: 'World Health Organization', year: '2018', subjects: ['water', 'long-duration'], note: 'Evidence-based recommendations on safe sanitation systems, safe handling of excreta and hand hygiene.' },
    { id: 's18-cdc-handwashing', kind: 'government', title: 'Clean Hands: handwashing and hand sanitizer guidance', org: 'US Centers for Disease Control and Prevention', subjects: ['water', 'first-aid', 'long-duration'], note: 'Wash with soap and water, scrubbing at least 20 seconds; use sanitizer with at least 60 % alcohol when soap and water are not available. Sanitizer works poorly on visibly dirty or greasy hands and does not remove all germs. Find it on cdc.gov.' },
    { id: 's18-leach-giveupitis-2018', kind: 'paper', title: '“Give-up-itis” revisited: neuropathology of extremis', author: 'Leach J', year: '2018', subjects: ['psychology', 'long-duration'], note: 'Medical Hypotheses 120:14–21. Describes a progression from withdrawal and apathy to loss of will, and argues it can be reversed by purposeful activity and regaining a sense of control.' },
  ],
}
