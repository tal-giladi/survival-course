import type { StageContent } from '../../types'
import { l01 } from './l01-rope-materials'
import { l02 } from './l02-knots'
import { l03 } from './l03-anchors'
import { l04 } from './l04-hauling'
import { l05 } from './l05-rescue-limits'
import { stage13Review } from './review'

export const stage13: StageContent = {
  n: 13,
  lessons: [l01, l02, l03, l04, l05],
  review: stage13Review,
  concepts: {
    'rope-types': 'Rope fibres and constructions (dynamic vs low-stretch)',
    'fall-factor': 'Fall factor and impact force',
    'rope-inspection': 'Rope inspection, care and retirement',
    'knot-families': 'Knots, hitches and bends (choosing by job)',
    'knot-security': 'Dress, set, tail, check — why knots fail',
    'vector-angles': 'Vector angles and force multiplication',
    'anchor-principles': 'Anchor principles (SERENE / ERNEST)',
    'mechanical-advantage': 'Mechanical advantage (ideal and actual)',
    'friction-losses': 'Friction losses at pulleys and edges',
    'terrain-classes': 'Terrain classes: when a slip becomes a fall',
    'rescue-limits': 'Limits of improvised rope rescue',
    'rescue-hierarchy': 'Rescue response ladder (no second casualty, call, reach, care)',
  },
  skills: [
    { id: 'rope-inspection', name: 'Inspect, care for and log rope', stage: 13, physical: true, safety: 'home', description: 'Inspect a rope by feel and sight along its whole length, name the findings that retire it, store it correctly and keep a rope log.' },
    { id: 'rope-force-reasoning', name: 'Rope force reasoning', stage: 13, physical: false, safety: 'virtual-only', description: 'Calculate anchor-leg and redirect forces from angles, and ideal and actual mechanical advantage with friction losses — on paper, in the simulator and with small bench tests only.' },
    { id: 'rope-safety-course', name: 'Formal rope training (climbing, canyoneering or rope rescue)', stage: 13, physical: true, safety: 'formal-training', description: 'Complete a course with a qualified instructor before belaying, rappelling, building anchors for people, or raising and lowering anyone.' },
  ],
  references: [
    { id: 'rope-en-892', kind: 'guideline', title: 'EN 892: Mountaineering equipment — Dynamic mountaineering ropes — Safety requirements and test methods', org: 'European Committee for Standardization (CEN)', subjects: ['rope'], note: 'Drop tests with an 80 kg mass for single ropes; limits on peak impact force and elongation. The UIAA 101 standard sets equivalent requirements.' },
    { id: 'rope-en-1891', kind: 'guideline', title: 'EN 1891: Personal protective equipment for the prevention of falls from a height — Low stretch kernmantel ropes', org: 'European Committee for Standardization (CEN)', subjects: ['rope'], note: 'Requirements for low-stretch kernmantle ropes used in rope access, work positioning and rescue.' },
    { id: 'rope-mil-c-5040', kind: 'regulation', title: 'MIL-C-5040: Cord, Fibrous, Nylon (parachute cord)', org: 'US Department of Defense', subjects: ['rope', 'equipment'], note: 'Type III (“550 cord”) has a minimum breaking strength of 550 lbf. Not a life-safety rope standard.' },
    { id: 'rope-nfpa-1006', kind: 'guideline', title: 'NFPA 1006: Standard for Technical Rescue Personnel Professional Qualifications', org: 'National Fire Protection Association', subjects: ['rope', 'signaling'], note: 'Defines job performance requirements for rope rescue and other technical rescue disciplines at progressive levels.' },
    { id: 'rope-cmc-manual', kind: 'book', title: 'CMC Rope Rescue Manual', org: 'CMC Rescue', subjects: ['rope'], note: 'A widely used rope-rescue training text: rope, hardware, anchors, mechanical advantage, raising and lowering systems.' },
    { id: 'rope-on-rope', kind: 'book', title: 'On Rope: North American Vertical Rope Techniques', author: 'Bruce Smith and Allen Padgett', org: 'National Speleological Society', subjects: ['rope'], note: 'Rope materials, care, knots, anchors and rigging from the caving community.' },
    { id: 'rope-climbing-anchors', kind: 'book', title: 'Climbing Anchors', author: 'John Long and Bob Gaines', org: 'FalconGuides', subjects: ['rope'], note: 'Anchor principles, load distribution and the forces that angles create. No substitute for instruction.' },
  ],
}
