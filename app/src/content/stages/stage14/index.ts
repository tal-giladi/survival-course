import type { StageContent } from '../../types'
import { l01 } from './l01-visual-audible'
import { l02 } from './l02-radio-beacons'
import { l03 } from './l03-how-searches-work'
import { l04 } from './l04-stay-or-move'
import { stage14Review } from './review'

export const stage14: StageContent = {
  n: 14,
  lessons: [l01, l02, l03, l04],
  review: stage14Review,
  concepts: {
    'signal-mirror': 'Signal mirror aiming and range',
    'night-signals': 'Signals at night (lights, fire)',
    'smoke-signals': 'Smoke signals and contrast',
    'ground-air-signals': 'Ground-to-air and body signals',
    'audible-signals': 'Audible signals (whistle, sound)',
    'distress-beacons': 'Distress beacons (PLB, EPIRB, ELT) and Cospas-Sarsat',
    'beacon-registration': 'Beacon registration and testing',
    'false-alerts': 'False alerts and responsible activation',
    'satellite-messengers': 'Satellite messengers and satellite SOS',
    'radio-licensing': 'Radio services and licensing',
    'radio-range': 'Radio range and line of sight',
    'distress-procedure': 'Distress messages (Mayday; who, where, what)',
    'sar-system': 'How search and rescue is organised',
    'poa-pod': 'Probability of area, detection and success',
    'bayesian-search': 'Bayesian updating of search probabilities',
    'sweep-width': 'Sweep width and coverage',
    'search-tactics': 'Search tactics (hasty, efficient, thorough)',
    'clue-awareness': 'Clues and clue awareness',
    'responsive-subject': 'Being a responsive, findable subject',
    'leave-signs': 'Leaving signs for rescuers',
    'rescue-timeline': 'Survival window vs time to rescue',
  },
  skills: [
    { id: 'beacon-readiness', name: 'Beacon and messenger readiness', stage: 14, physical: false, safety: 'home', description: 'Keep a PLB or satellite messenger registered, tested (self-test only) and in date, deploy it correctly, and know how to cancel an accidental alert.' },
  ],
  references: [
    { id: 's14-iamsar', kind: 'guideline', title: 'IAMSAR Manual — International Aeronautical and Maritime Search and Rescue Manual (Volumes I–III)', org: 'International Maritime Organization (IMO) and International Civil Aviation Organization (ICAO)', subjects: ['signaling'], note: 'The international SAR manual. Volume II (mission co-ordination) covers search planning: POA, POD, POS, sweep width and search patterns; Volume III covers distress signals and procedures for mobile facilities. Updated regularly; available from IMO and ICAO.' },
    { id: 's14-koopman-search', kind: 'book', title: 'Search and Screening: General Principles with Historical Applications', author: 'Bernard O. Koopman', year: '1980', org: 'Pergamon Press', subjects: ['signaling'], note: 'Foundational search theory, including the exponential (random-search) detection function POD = 1 − e^(−C).' },
    { id: 's14-stone-optimal-search', kind: 'book', title: 'Theory of Optimal Search', author: 'Lawrence D. Stone', year: '1975', org: 'Academic Press', subjects: ['signaling'], note: 'Mathematical theory of allocating search effort, including Bayesian updating and optimal allocation for exponential detection.' },
    { id: 's14-cooper-frost-robe', kind: 'paper', title: 'Compatibility of Land SAR Procedures with Search Theory', author: 'Donald C. Cooper, J. R. Frost, R. Quincy Robe', year: '2003', org: 'US Department of Homeland Security / US Coast Guard', subjects: ['signaling'], note: 'Report reconciling land SAR practice (POA, POD, segments, consensus) with search theory; introduced effective sweep width and detection experiments to land search planning.' },
    { id: 's14-nasar-funsar', kind: 'book', title: 'Fundamentals of Search and Rescue', org: 'National Association for Search and Rescue (NASAR)', year: '2005', subjects: ['signaling'], note: 'Textbook for NASAR’s FUNSAR course and SARTECH II: SAR system, search tactics, clue awareness, lost-person behaviour.' },
    { id: 's14-fcc-part97', kind: 'regulation', title: '47 CFR Part 97 — Amateur Radio Service', org: 'US Federal Communications Commission', subjects: ['signaling', 'law'], note: 'US amateur radio rules: licences by examination; includes provisions on communications in emergencies involving the immediate safety of human life. Find it on ecfr.gov. Other countries have their own amateur licensing (e.g., Ofcom in the UK).' },
    { id: 's14-fcc-part95', kind: 'regulation', title: '47 CFR Part 95 — Personal Radio Services (FRS, GMRS, CB, PLBs)', org: 'US Federal Communications Commission', subjects: ['signaling', 'law'], note: 'Licence-free FRS and CB, licensed GMRS, and rules for 406 MHz personal locator beacons in the US. Find it on ecfr.gov.' },
    { id: 's14-uk-beacon-registry', kind: 'government', title: 'UK Beacon Registry (406 MHz EPIRB, PLB and ELT registration)', org: 'Maritime and Coastguard Agency (UK)', subjects: ['signaling'], note: 'Free registration of UK-coded beacons. Find it via gov.uk.' },
    { id: 's14-mrew', kind: 'organization', title: 'Mountain Rescue England and Wales', url: 'https://www.mountainrescue.org.uk/', subjects: ['signaling'], note: 'Volunteer mountain and lowland search and rescue teams; advice on calling for help and on joining a team.' },
  ],
}
