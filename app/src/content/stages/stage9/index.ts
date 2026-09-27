import type { Lesson, Reference, Skill, StageContent } from '../../types'
import { l01 } from './l01-assessment'
import { l02 } from './l02-abc'
import { l03 } from './l03-shock'
import { l04 } from './l04-musculoskeletal'
import { l05 } from './l05-wounds-burns'
import { l06 } from './l06-environmental'
import { l07 } from './l07-bites-allergy'
import { l08 } from './l08-head-spine-chest'
import { l09 } from './l09-monitoring-evac'
import { stage9Review } from './review'

export const stage9Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08, l09]

// New references for Stage 9 (URLs checked 2026-09-27). Existing ids (wms-*, nols-*, solo, redcross-wrfa, auerbach…) are reused.
const references: Reference[] = [
  { id: 'fa-aha-arc-2024', kind: 'guideline', title: '2024 American Heart Association and American Red Cross Guidelines for First Aid', org: 'American Heart Association & American Red Cross', year: '2024', url: 'https://doi.org/10.1161/CIR.0000000000001281', subjects: ['first-aid'], note: 'Circulation 2024. Built on ILCOR evidence reviews; covers bleeding control, open chest wounds, spinal motion restriction, hypothermia, frostbite, anaphylaxis and snakebite.' },
  { id: 'fa-ilcor', kind: 'organization', title: 'International Liaison Committee on Resuscitation (ILCOR) — Consensus on Science with Treatment Recommendations', org: 'ILCOR', url: 'https://www.ilcor.org/', subjects: ['first-aid'], note: 'The international body whose systematic reviews underpin national first-aid and resuscitation guidelines.' },
  { id: 'fa-wms-spine-2024', kind: 'guideline', title: 'Wilderness Medical Society Clinical Practice Guidelines for Spinal Cord Protection: 2024 Update', author: 'Hawkins SC, Williams J, Bennett BL, Islas A, Quinn R', year: '2024', org: 'Wilderness Medical Society', url: 'https://journals.sagepub.com/doi/10.1177/10806032241227232', subjects: ['first-aid'], note: 'Spinal motion restriction rather than rigid immobilisation; selective, criteria-based decisions.' },
  { id: 'fa-wms-wound-2014', kind: 'guideline', title: 'Wilderness Medical Society Practice Guidelines for Basic Wound Management in the Austere Environment: 2014 Update', author: 'Quinn RH, Wedmore I, Johnson EL, et al.', year: '2014', org: 'Wilderness Medical Society', url: 'https://pubmed.ncbi.nlm.nih.gov/25498257/', subjects: ['first-aid'], note: 'Early irrigation with potable water; clean (not sterile) technique; leave grossly contaminated wounds open.' },
  { id: 'fa-wms-lightning-2014', kind: 'guideline', title: 'Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Lightning Injuries: 2014 Update', author: 'Davis C, Engeln A, Johnson EL, et al.', year: '2014', org: 'Wilderness Medical Society', url: 'https://pubmed.ncbi.nlm.nih.gov/25498265/', subjects: ['first-aid', 'weather'], note: 'A 2023 update has been published in Wilderness & Environmental Medicine; check it for the latest recommendations.' },
  { id: 'fa-who-rabies', kind: 'guideline', title: 'Rabies — fact sheet', org: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/rabies', subjects: ['first-aid'], note: 'Wash bite and scratch wounds with soap and water for at least 15 minutes, then seek post-exposure prophylaxis.' },
  { id: 'fa-cdc-rabies', kind: 'government', title: 'Rabies', org: 'US Centers for Disease Control and Prevention', url: 'https://www.cdc.gov/rabies/', subjects: ['first-aid'] },
  { id: 'fa-who-snakebite', kind: 'guideline', title: 'Snakebite envenoming — fact sheet', org: 'World Health Organization', url: 'https://www.who.int/news-room/fact-sheets/detail/snakebite-envenoming', subjects: ['first-aid'], note: 'Global burden; antivenom is the definitive treatment.' },
  { id: 'fa-anzcor-pit', kind: 'guideline', title: 'Guideline 9.4.8 — Envenomation: Pressure Immobilisation Technique', org: 'Australian and New Zealand Committee on Resuscitation (ANZCOR)', url: 'https://www.anzcor.org/home/first-aid/guideline-9-4-8-envenomation-pressure-immobilisation-technique', subjects: ['first-aid'], note: 'Pressure immobilisation for all Australian snakes, funnel-web spiders, blue-ringed octopus and cone shells — not for other bites and stings.' },
  { id: 'fa-stop-the-bleed', kind: 'training', title: 'Stop the Bleed', org: 'American College of Surgeons', url: 'https://www.stopthebleed.org/', subjects: ['first-aid'], note: 'Short hands-on bleeding-control course: pressure, packing, tourniquets.' },
  { id: 'fa-atls', kind: 'book', title: 'Advanced Trauma Life Support (ATLS) Student Course Manual', org: 'American College of Surgeons', year: '10th ed., 2018', subjects: ['first-aid'], note: 'Source of the haemorrhage classes (I–IV by % blood volume lost) used in teaching.' },
]

const concepts: Record<string, string> = {
  'scene-safety': 'Scene safety and size-up',
  'patient-assessment': 'Patient assessment system',
  'vital-signs': 'Vital signs and normal ranges',
  'soap-note': 'SOAP notes and SAMPLE/OPQRST',
  abc: 'Airway, breathing, circulation',
  'bleeding-control': 'Bleeding control and tourniquets',
  shock: 'Shock',
  musculoskeletal: 'Fractures, sprains and dislocations',
  splinting: 'Splinting principles',
  'wound-care': 'Wound cleaning and care',
  burns: 'Burns: depth, area, cooling',
  infection: 'Wound infection',
  hypothermia: 'Hypothermia',
  'heat-illness': 'Heat illness',
  lightning: 'Lightning injury',
  anaphylaxis: 'Allergy and anaphylaxis',
  envenomation: 'Bites, stings and snakebite',
  rabies: 'Animal bites and rabies',
  poisoning: 'Poisoning',
  'eye-injury': 'Eye injuries',
  'head-injury': 'Head injury',
  'spine-assessment': 'Spinal assessment and motion restriction',
  'chest-injury': 'Chest injuries',
  'abdominal-injury': 'Abdominal injuries',
  monitoring: 'Patient monitoring and trends',
  evacuation: 'Evacuation decisions',
  'fa-myths': 'First-aid myths',
  'training-scope': 'Home practice vs formal training',
}

const skills: Skill[] = [
  { id: 'fa-soap-note', name: 'Write a SOAP note with a vitals table', stage: 9, physical: false, safety: 'home', description: 'Record a patient’s history, findings, vitals over time, problem list and plan in SOAP format.' },
  { id: 'fa-vitals', name: 'Measure and record vital signs', stage: 9, physical: true, safety: 'home', description: 'Count pulse and breathing rate, assess level of responsiveness (AVPU) and skin colour/temperature/moisture on a willing partner.' },
  { id: 'fa-recovery-position', name: 'Recovery position and log roll', stage: 9, physical: true, safety: 'home', description: 'Place a willing, uninjured partner in the recovery position and perform a team log roll.' },
  { id: 'fa-wound-irrigation', name: 'Wound irrigation and dressing', stage: 9, physical: true, safety: 'home', description: 'Improvise an irrigation jet and dress a wound on a training aid; build and apply blister care.' },
  { id: 'fa-evac-plan', name: 'Evacuation decision and plan', stage: 9, physical: false, safety: 'home', description: 'Choose urgency and method from the patient’s trend, resources, terrain, weather and daylight, and estimate evacuation time.' },
  { id: 'fa-improvised-litter', name: 'Improvised litter and carries', stage: 9, physical: true, safety: 'supervised', description: 'Build a pole-and-tarp litter, package a patient and coordinate a team carry at ground level.' },
]

export const stage9: StageContent = { n: 9, lessons: stage9Lessons, review: stage9Review, references, concepts, skills }
