import type { StageContent } from '../../types'
import { l01 } from './l01-planning'
import { l02 } from './l02-home-kits'
import { l03 } from './l03-earthquake'
import { l04 } from './l04-flood-fire-weather'
import { l05 } from './l05-utility-failure'
import { stage16Review } from './review'

export const stage16: StageContent = {
  n: 16,
  lessons: [l01, l02, l03, l04, l05],
  review: stage16Review,
  concepts: {
    'family-plan': 'Household emergency plan',
    'comms-plan': 'Family communication plan and out-of-area contact',
    'community-resources': 'Community resources and neighbourhood response teams',
    'official-alerts': 'Official alerts and warnings',
    'home-kit': 'Household emergency kit',
    'go-bag': 'Go-bag (grab-and-go kit)',
    'emergency-water-food': 'Emergency water and food quantities',
    'stock-rotation': 'Storage and rotation of supplies',
    'battery-capacity': 'Battery capacity and power budgeting',
    'emergency-lighting': 'Flameless emergency lighting',
    'generator-safety': 'Generator safety (CO, backfeeding)',
    'drop-cover-hold': 'Drop, Cover, Hold On',
    aftershocks: 'Aftershocks',
    'post-quake-checks': 'Post-earthquake checks (injuries, gas, building)',
    'gas-leak': 'Gas leaks',
    'building-evacuation': 'Building evacuation',
    'evacuation-triggers': 'Evacuation triggers',
    'shelter-in-place': 'Shelter in place vs evacuate',
    'extreme-weather-home': 'Extreme heat, cold and storms at home',
    'wildfire-home': 'Wildfire readiness at home',
    'flood-home': 'Floods at home',
    'power-outage': 'Power outages',
    'water-outage': 'Water outages',
    'emergency-sanitation': 'Emergency sanitation and hygiene',
    'infrastructure-failure': 'Cascading infrastructure failure',
    'comms-failure': 'Communication failure (SMS, radio)',
    'temporary-shelter': 'Temporary and community shelter',
    'vulnerable-neighbours': 'Checking on vulnerable people',
  },
  skills: [
    { id: 'family-comms-plan', name: 'Family communication plan', stage: 16, physical: false, safety: 'home', description: 'Write and test a plan with an out-of-area contact, three meeting places, school/work arrangements and paper copies for every member.' },
    { id: 'utility-shutoffs', name: 'Locate utility shut-offs', stage: 16, physical: true, safety: 'home', description: 'Find the main water stopcock, electricity main switch and gas valve (and the tool for it), and know when — and when not — to use each.' },
    { id: 'go-bag-pack', name: 'Pack and maintain a go-bag', stage: 16, physical: true, safety: 'home', description: 'Assemble a grab-and-go bag per person that can be carried out of the door within two minutes, and check it twice a year.' },
    { id: 'outage-drill', name: 'Lights-out household drill', stage: 16, physical: true, safety: 'home', description: 'Run the home for an evening without mains power or tap water using only the kit, and fix the gaps found.' },
  ],
  references: [
    { id: 'ready-power-outages', kind: 'government', title: 'Power Outages', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/power-outages', subjects: ['urban'], note: 'Generators outdoors ≥ 20 ft from windows and doors; fridge ~4 h, full freezer ~48 h; medical devices; unplug appliances.' },
    { id: 'ready-earthquakes', kind: 'government', title: 'Earthquakes', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/earthquakes', subjects: ['urban', 'hazards'], note: 'Drop, Cover, Hold On; in bed, face down with a pillow over head and neck; if trapped, text or bang on a pipe.' },
    { id: 'ready-floods', kind: 'government', title: 'Floods', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/floods', subjects: ['urban', 'hazards'], note: '6 in of moving water can knock you down; 1 ft can sweep a vehicle away.' },
    { id: 'ready-shelter', kind: 'government', title: 'Shelter (mass care and sheltering in place)', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/shelter', subjects: ['urban'] },
    { id: 'ready-home-fires', kind: 'government', title: 'Home Fires', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/home-fires', subjects: ['urban', 'fire'], note: 'Two ways out of every room; crawl low under smoke; feel doors before opening; practise twice a year.' },
    { id: 'ready-alerts', kind: 'government', title: 'Emergency Alerts', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/alerts', subjects: ['urban', 'signaling'], note: 'Wireless Emergency Alerts, EAS, NOAA Weather Radio, IPAWS.' },
    { id: 'ready-pets', kind: 'government', title: 'Prepare Your Pets for Disasters', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/pets', subjects: ['urban'] },
    { id: 'ready-older-adults', kind: 'government', title: 'Older Adults', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/older-adults', subjects: ['urban'] },
    { id: 'ready-tsunamis', kind: 'government', title: 'Tsunamis', org: 'Ready.gov (FEMA)', url: 'https://www.ready.gov/tsunamis', subjects: ['urban', 'hazards'], note: 'Natural warnings: a coastal earthquake, an ocean roar, the sea suddenly rising or draining — evacuate without waiting for an official warning.' },
    { id: 'fema-cert', kind: 'training', title: 'Community Emergency Response Team (CERT)', org: 'FEMA', url: 'https://fema.gov/cert', subjects: ['urban', 'first-aid'], note: 'Volunteer training in disaster preparedness, fire safety, light search and rescue, team organisation and disaster medical operations.' },
    { id: 'shakeout-dcho', kind: 'organization', title: 'Drop, Cover, and Hold On', org: 'Great ShakeOut / Earthquake Country Alliance', url: 'https://www.shakeout.org/dropcoverholdon/', subjects: ['urban', 'hazards'], note: 'Explains why doorways, running outside and the “triangle of life” are not recommended.' },
    { id: 'nfpa-firewise', kind: 'organization', title: 'Preparing Homes for Wildfire (Firewise USA, the home ignition zone)', org: 'National Fire Protection Association (NFPA)', subjects: ['fire', 'urban'], note: 'Immediate (0–5 ft), intermediate (5–30 ft) and extended (30–100 ft) zones. Find it on nfpa.org.' },
    { id: 'iafc-ready-set-go', kind: 'organization', title: 'Ready, Set, Go! wildland fire action program', org: 'International Association of Fire Chiefs', subjects: ['fire', 'urban'], note: 'Prepare early, stay aware, leave early.' },
    { id: 'sphere-handbook', kind: 'guideline', title: 'The Sphere Handbook: Humanitarian Charter and Minimum Standards in Humanitarian Response', org: 'Sphere Association', year: '2018', subjects: ['water', 'urban'], note: 'WASH chapter: average of at least 15 L of water per person per day for drinking, cooking and personal hygiene in emergencies; toilet and hand-washing standards.' },
    { id: 'usgs-aftershocks', kind: 'government', title: 'Aftershock forecasts and aftershock basics', org: 'US Geological Survey Earthquake Hazards Program', subjects: ['hazards'], note: 'Aftershock rates decay roughly as 1/time (Omori); the largest aftershock is often about one magnitude unit smaller than the main shock. Find it on usgs.gov.' },
    { id: 'eecc-art110', kind: 'regulation', title: 'European Electronic Communications Code (Directive (EU) 2018/1972), Article 110: public warning systems', org: 'European Union', year: '2018', subjects: ['urban', 'signaling'], note: 'Requires member states to deliver public warnings to mobile phones in the affected area (e.g., cell broadcast, “EU-Alert”).' },
    { id: 'nz-get-ready', kind: 'government', title: 'Get Ready (national preparedness guidance)', org: 'New Zealand National Emergency Management Agency', subjects: ['urban', 'hazards'], note: 'Includes the coastal rule “Long or strong, get gone” and emergency toilet guidance. Find it via getready.govt.nz.' },
  ],
}
