import type { StageContent } from '../../types'
import { l01 } from './l01-track-id'
import { l02 } from './l02-gaits'
import { l03 } from './l03-aging'
import { l04 } from './l04-sign'
import { l05 } from './l05-landscape'
import { l06 } from './l06-sar'
import { stage11Review } from './review'

export const stage11: StageContent = {
  n: 11,
  lessons: [l01, l02, l03, l04, l05, l06],
  review: stage11Review,
  concepts: {
    'track-anatomy': 'Track anatomy (toes, claws, pads, negative space)',
    'track-families': 'Major track families',
    'track-measurement': 'Measuring prints and trails',
    'track-substrate': 'Substrate and how it changes prints',
    'gait-patterns': 'Gaits and trail patterns',
    'direction-of-travel': 'Direction of travel from tracks and sign',
    'pressure-releases': 'Pressure releases and their limits',
    'track-aging': 'Aging tracks and sign',
    'age-bracketing': 'Bracketing age with dated events',
    'reference-tracks': 'Reference tracks and aging stands',
    'disturbed-vegetation': 'Disturbed vegetation and ground sign',
    'beds-trails-runs': 'Trails, runs, beds and marking sign',
    'feeding-sign': 'Feeding sign',
    'scat-id': 'Scat and droppings',
    'scat-hygiene': 'Hygiene around scat, droppings and carcasses',
    'water-sign': 'Animal and plant clues to water',
    'game-trails': 'Game trails as handrails (and their traps)',
    'bird-language': 'Bird and animal alarm behaviour',
    'trk-wildlife-distance': 'Keeping distance from wildlife',
    'trk-lkp': 'Point last seen / last known point (IPP)',
    'trk-sign-cutting': 'Sign cutting along track traps',
    'trk-step-by-step': 'Step-by-step tracking and the tracking stick',
    'trk-scene-protection': 'Protecting the IPP and clues',
    'trk-clue-awareness': 'Clue awareness and reporting',
    'trk-search-area': 'Search area growth with time',
  },
  skills: [
    { id: 'trk-aging-reference', name: 'Age sign with reference tracks and event brackets', stage: 11, physical: true, safety: 'home', description: 'Keep an aging stand in local substrates and bracket the age of real trails with dated events, reporting ranges with reasons.' },
    { id: 'trk-sign-cutting', name: 'Sign cutting and step-by-step tracking (training level)', stage: 11, physical: true, safety: 'outdoor', description: 'Protect an IPP, identify a prime print, follow a partner’s trail with a tracking stick and recover it when lost — as preparation for formal SAR training.' },
  ],
  references: [
    { id: 'trk-elbroch-mammal-tracks', kind: 'book', title: 'Mammal Tracks & Sign: A Guide to North American Species (2nd ed.)', author: 'Mark Elbroch and Casey McFarland', org: 'Stackpole Books', year: '2019', subjects: ['tracking'], note: 'The standard detailed reference for mammal tracks, gaits, feeding sign and scat, with measurements and photographs.' },
    { id: 'trk-liebenberg-art', kind: 'book', title: 'The Art of Tracking: The Origin of Science', author: 'Louis Liebenberg', org: 'David Philip Publishers', year: '1990', subjects: ['tracking'], note: 'Tracking as hypothesis-testing, drawn from San trackers of the Kalahari; by the founder of CyberTracker.' },
    { id: 'trk-cybertracker-cert', kind: 'guideline', title: 'CyberTracker Tracker Certification (2018)', org: 'CyberTracker Conservation', year: '2018', url: 'https://www.cybertracker.org/downloads/tracking/CyberTracker-Tracker-Certification-2018.pdf', subjects: ['tracking'], note: 'The international track-and-sign and trailing evaluation standard (Levels 1–3, Professional, Specialist).' },
    { id: 'trk-tracker-cert-na', kind: 'training', title: 'Track and Sign Certifications', org: 'Tracker Certification North America', url: 'https://trackercertification.com/track-and-sign-certifications/', subjects: ['tracking'], note: 'Runs CyberTracker field evaluations in North America.' },
    { id: 'trk-young-robin', kind: 'book', title: 'What the Robin Knows: How Birds Reveal the Secrets of the Natural World', author: 'Jon Young', year: '2012', subjects: ['tracking'], note: 'Bird language: baseline behaviour and alarm, and the sit-spot routine.' },
    { id: 'trk-alexander-1976', kind: 'paper', title: 'Estimates of speeds of dinosaurs', author: 'R. McNeill Alexander', year: '1976', subjects: ['tracking'], note: 'Nature 261:129–130. Empirical formula relating speed to stride length and hip height.' },
    { id: 'trk-taylor-cooper-mantracking', kind: 'book', title: 'Fundamentals of Mantracking: The Step-by-Step Method', author: 'Albert “Ab” Taylor and Donald C. Cooper', org: 'National Association for Search and Rescue (NASAR)', subjects: ['tracking', 'signaling'], note: 'The classic SAR text on step-by-step human tracking, prime prints and the tracking stick.' },
    { id: 'trk-cdc-hantavirus', kind: 'government', title: 'Hantavirus: prevention and cleaning up after rodents', org: 'US Centers for Disease Control and Prevention', subjects: ['first-aid', 'tracking'], note: 'Do not sweep or vacuum rodent droppings; ventilate, wear gloves, wet with disinfectant, then wipe up. Find it on cdc.gov.' },
    { id: 'trk-cdc-baylisascaris', kind: 'government', title: 'Baylisascaris (raccoon roundworm)', org: 'US Centers for Disease Control and Prevention', subjects: ['first-aid', 'tracking'], note: 'Eggs in raccoon feces and latrines; avoid contact and wash hands. Find it on cdc.gov.' },
    { id: 'trk-cdc-echinococcosis', kind: 'government', title: 'Echinococcosis', org: 'US Centers for Disease Control and Prevention', subjects: ['first-aid', 'tracking'], note: 'Tapeworm infection acquired from eggs in the feces of infected dogs, foxes and other canids. Find it on cdc.gov.' },
    { id: 'trk-nps-wildlife-distance', kind: 'government', title: 'Wildlife viewing safety and distances', org: 'US National Park Service', subjects: ['tracking', 'law'], note: 'Several parks (e.g. Yellowstone) require staying at least 100 yards (91 m) from bears and wolves and 25 yards (23 m) from other wildlife. Check the rules of the park you visit on nps.gov.' },
  ],
}
