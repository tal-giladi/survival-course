import type { Reference } from './types'

// Course-wide reference database. Lessons cite by id. Subjects drive grouping on the References page.
// URLs were checked on 2026-09-27 (see docs/research-notes.md). When a source goes out of date,
// replace the entry rather than keeping it for history.

export const subjects: Record<string, string> = {
  foundations: 'Foundations, priorities and risk',
  equipment: 'Clothing and equipment',
  navigation: 'Navigation',
  fire: 'Fire',
  water: 'Water',
  shelter: 'Shelter',
  food: 'Food and foraging',
  bushcraft: 'Bushcraft and primitive skills',
  physiology: 'Physiology',
  'first-aid': 'Wilderness first aid',
  improvisation: 'Improvisation',
  tracking: 'Tracking',
  weather: 'Weather',
  hazards: 'Environmental hazards',
  rope: 'Rope and knots',
  signaling: 'Signaling and rescue',
  psychology: 'Survival psychology',
  urban: 'Urban and disaster preparedness',
  vehicle: 'Vehicle and travel',
  'long-duration': 'Long-duration survival',
  law: 'Law and ethics',
}

export const references: Reference[] = [
  // ---------- Foundations, decision making, risk ----------
  { id: 'army-atp-3-50-21', kind: 'government', title: 'ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)', org: 'US Army', year: '2018', subjects: ['foundations', 'fire', 'water', 'shelter', 'food', 'navigation', 'signaling', 'improvisation'], url: 'https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316', note: 'Current public US survival doctrine. Written for military contexts — use with judgment.' },
  { id: 'afh-10-644', kind: 'government', title: 'AFH 10-644 SERE Operations', org: 'US Air Force', year: '2017', subjects: ['foundations', 'signaling', 'shelter', 'water', 'improvisation', 'long-duration'], url: 'https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017', note: 'The most comprehensive public survival reference (650+ pages).' },
  { id: 'ten-essentials-mtn', kind: 'organization', title: 'The Ten Essentials', org: 'The Mountaineers', subjects: ['foundations', 'equipment'], url: 'https://www.mountaineers.org/blog/what-are-the-ten-essentials', note: 'The organization that originated the Ten Essentials, now framed as systems.' },
  { id: 'nps-ten-essentials', kind: 'government', title: 'Ten Essentials', org: 'US National Park Service', subjects: ['foundations', 'equipment'], url: 'https://www.nps.gov/articles/10essentials.htm' },
  { id: 'freedom-hills', kind: 'book', title: 'Mountaineering: The Freedom of the Hills (10th ed.)', org: 'The Mountaineers', subjects: ['foundations', 'navigation', 'rope', 'weather'], url: 'https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition', note: 'The standard mountaineering text since 1960, revised by committee.' },
  { id: 'mccammon-traps', kind: 'paper', title: 'Heuristic traps in recreational avalanche accidents: evidence and implications', author: 'Ian McCammon', year: '2004', subjects: ['foundations', 'psychology', 'hazards'], note: 'Avalanche News 68. Source of the FACETS human-factor traps; applies well beyond avalanches.' },
  { id: 'koester-lpb', kind: 'book', title: 'Lost Person Behavior', author: 'Robert J. Koester', org: 'dbS Productions', year: '2008', subjects: ['signaling', 'navigation', 'psychology'], url: 'https://www.dbs-sar.com/LostPersonBehavior.htm', note: 'Statistical profiles of how lost people behave (ISRID, >145,000 incidents). Used by SAR planners worldwide.' },
  { id: 'nols-leadership', kind: 'training', title: 'NOLS expeditions and leadership courses', org: 'NOLS', url: 'https://www.nols.edu/', subjects: ['foundations', 'psychology'] },
  { id: 'mt-hml', kind: 'training', title: 'Hill and Moorland Leader qualification', org: 'Mountain Training (UK)', subjects: ['navigation', 'foundations'], url: 'https://www.mountain-training.org/qualifications/walking/hill-and-moorland-leader/', note: 'Train → consolidate (logged days) → assess: the model for this course’s practice logs.' },
  { id: 'lnt-principles', kind: 'organization', title: 'The Seven Principles of Leave No Trace', org: 'Leave No Trace Center for Outdoor Ethics', subjects: ['foundations', 'fire', 'shelter', 'law'], url: 'https://lnt.org/why/7-principles/' },

  // ---------- Psychology ----------
  { id: 'leach-freeze-2004', kind: 'paper', title: 'Why people “freeze” in an emergency: temporal and cognitive constraints on survival responses', author: 'John Leach', year: '2004', subjects: ['psychology'], note: 'Aviation, Space, and Environmental Medicine 75(6):539–542.', url: 'https://eprints.lancs.ac.uk/id/eprint/18753/' },
  { id: 'leach-survival-psych', kind: 'book', title: 'Survival Psychology', author: 'John Leach', year: '1994', subjects: ['psychology'], note: 'Academic foundation for disaster-behavior patterns, by a former RAF survival instructor.' },
  { id: 'deep-survival', kind: 'book', title: 'Deep Survival: Who Lives, Who Dies, and Why', author: 'Laurence Gonzales', year: '2003', subjects: ['psychology', 'foundations'], note: 'Narrative synthesis of case studies and neuroscience. Journalism, not research — but widely used by trainers.' },

  // ---------- Physiology ----------
  { id: 'wms-hypothermia-2019', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update', author: 'Dow J, Giesbrecht GG, Danzl DF, et al.', year: '2019', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid'], note: 'Wilderness & Environmental Medicine 30(4S):S47–S69.' },
  { id: 'wms-heat-2024', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update', author: 'Eifling KP, Gaudio FG, et al.', year: '2024', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid'], url: 'https://journals.sagepub.com/doi/10.1177/10806032241227924', note: 'Graded evidence review; active cooling first for heat stroke.' },
  { id: 'wms-frostbite-2024', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for the Prevention and Treatment of Frostbite: 2024 Update', author: 'McIntosh SE, et al.', year: '2024', org: 'Wilderness Medical Society', subjects: ['physiology', 'first-aid'], url: 'https://journals.sagepub.com/doi/10.1177/10806032231222359' },
  { id: 'acsm-ehi-2023', kind: 'guideline', title: 'ACSM Expert Consensus Statement on Exertional Heat Illness', author: 'Roberts WO, et al.', year: '2023', subjects: ['physiology', 'first-aid'], note: 'Current Sports Medicine Reports 22(4):134–149.', url: 'https://pubmed.ncbi.nlm.nih.gov/37036463/' },
  { id: 'acsm-fluid-2007', kind: 'guideline', title: 'ACSM Position Stand: Exercise and Fluid Replacement', author: 'Sawka MN, Burke LM, Eichner ER, et al.', year: '2007', subjects: ['physiology', 'water'], note: 'Medicine & Science in Sports & Exercise 39(2):377–390. Sweat rates of ~0.5–2 L/h.' },
  { id: 'iom-water-2005', kind: 'government', title: 'Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate', org: 'Institute of Medicine (US National Academies)', year: '2005', subjects: ['physiology', 'water'], url: 'https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate', note: 'Adequate intake ≈3.7 L/day (men) and 2.7 L/day (women) total water, from all sources.' },
  { id: 'usariem-cold', kind: 'government', title: 'TB MED 508: Prevention and Management of Cold-Weather Injuries', org: 'US Army / USARIEM', subjects: ['physiology', 'equipment'], url: 'https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf', note: 'Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.' },
  { id: 'tbmed-507', kind: 'government', title: 'TB MED 507: Heat Stress Control and Heat Casualty Management', org: 'US Army', year: '2022', subjects: ['physiology'], url: 'https://www.hprc-online.org/resources-partners/whec/educational-tools/tb-med-507-heat' },
  { id: 'parsons-thermal', kind: 'book', title: 'Human Thermal Environments', author: 'Ken Parsons', year: '3rd ed., 2014', subjects: ['physiology', 'equipment'], note: 'Standard text on human heat exchange; clo and met units.' },
  { id: 'nws-windchill', kind: 'government', title: 'Wind Chill Chart and formula', org: 'US National Weather Service', subjects: ['physiology', 'weather'], url: 'https://www.weather.gov/safety/cold-wind-chill-chart', note: 'The 2001 index, which replaced the 1945 Siple–Passel index that overstated chill.' },
  { id: 'nws-heat', kind: 'government', title: 'Heat Safety', org: 'US National Weather Service', subjects: ['physiology', 'weather'], url: 'https://www.weather.gov/safety/heat' },
  { id: 'coldwater-1101', kind: 'organization', title: 'Cold Water Boot Camp — the 1-10-1 principle', author: 'Gordon Giesbrecht', subjects: ['physiology'], url: 'https://www.coldwaterbootcamp.com/pages/1_10_60v2.html' },
  { id: 'coldwater-1101-myth', kind: 'organization', title: 'The 1-10-1 Myth', org: 'National Center for Cold Water Safety', subjects: ['physiology'], url: 'https://www.coldwatersafety.org/1-10-1-myth', note: 'Counterpoint: treat 1-10-1 windows as illustrative, not guaranteed.' },
  { id: 'lundin-986', kind: 'book', title: '98.6 Degrees: The Art of Keeping Your Ass Alive', author: 'Cody Lundin', year: '2003', subjects: ['physiology', 'foundations'], note: 'Readable and correctly centred on core temperature; pair with USARIEM and WMS for evidence.' },
  { id: 'iso-9920', kind: 'guideline', title: 'ISO 9920: Estimation of thermal insulation and water vapour resistance of a clothing ensemble', org: 'ISO', subjects: ['physiology', 'equipment'] },

  // ---------- Equipment / preparedness ----------
  { id: 'ready-kit', kind: 'government', title: 'Build a Kit', org: 'Ready.gov (FEMA)', subjects: ['equipment', 'urban'], url: 'https://www.ready.gov/kit' },
  { id: 'ready-plan', kind: 'government', title: 'Make a Plan', org: 'Ready.gov (FEMA)', subjects: ['urban', 'foundations'], url: 'https://www.ready.gov/plan' },
  { id: 'ready-car', kind: 'government', title: 'Car safety and vehicle emergency kit', org: 'Ready.gov (FEMA)', subjects: ['vehicle', 'equipment'], url: 'https://www.ready.gov/car' },
  { id: 'redcross-prepare', kind: 'organization', title: 'How to Prepare for Emergencies', org: 'American Red Cross', subjects: ['urban'], url: 'https://www.redcross.org/get-help/how-to-prepare-for-emergencies.html' },
  { id: 'fema-is100', kind: 'training', title: 'IS-100.c Introduction to the Incident Command System', org: 'FEMA Emergency Management Institute', subjects: ['urban', 'signaling'], url: 'https://training.fema.gov/is/courseoverview.aspx?code=IS-100.c' },

  // ---------- Shelter / bushcraft ----------
  { id: 'kochanski-bushcraft', kind: 'book', title: 'Bushcraft: Outdoor Skills and Wilderness Survival', author: 'Mors Kochanski', subjects: ['shelter', 'fire', 'bushcraft'], note: 'Northern-forest classic, strongest on shelter and fire for warmth.' },
  { id: 'karamat', kind: 'training', title: 'Karamat Wilderness Ways (Kochanski syllabus)', url: 'https://karamat.com/', subjects: ['bushcraft', 'shelter'] },
  { id: 'iol-bushcraft', kind: 'training', title: 'IOL Bushcraft Competency Award / Certificate / Diploma', org: 'Institute for Outdoor Learning (UK)', subjects: ['bushcraft', 'fire', 'shelter'], url: 'https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html' },
  { id: 'woodlore', kind: 'training', title: 'Woodlore — Ray Mears bushcraft courses', url: 'https://www.raymears.com/', subjects: ['bushcraft'] },
  { id: 'boss', kind: 'training', title: 'Boulder Outdoor Survival School', url: 'https://www.boss-inc.com/', subjects: ['bushcraft', 'long-duration'] },
  { id: 'spt', kind: 'organization', title: 'Society of Primitive Technology', url: 'https://www.primitive.org/', subjects: ['bushcraft', 'long-duration'] },

  // ---------- Fire ----------
  { id: 'smokey-campfire', kind: 'government', title: 'Campfire Safety', org: 'USDA Forest Service / Smokey Bear', subjects: ['fire', 'law'], url: 'https://smokeybear.com/en/prevention-how-tos/campfire-safety' },
  { id: 'usfs-fire', kind: 'government', title: 'Know Before You Go: Fire', org: 'USDA Forest Service', subjects: ['fire', 'law'], url: 'https://www.fs.usda.gov/visit/know-before-you-go/fire' },
  { id: 'nifc', kind: 'government', title: 'National Interagency Fire Center', url: 'https://www.nifc.gov/', subjects: ['fire', 'hazards'] },
  { id: 'nwcg', kind: 'government', title: 'National Wildfire Coordinating Group — fire behavior standards', url: 'https://www.nwcg.gov/', subjects: ['fire', 'hazards'] },

  // ---------- Water ----------
  { id: 'cdc-emergency-water', kind: 'government', title: 'How to Make Water Safe in an Emergency', org: 'US Centers for Disease Control and Prevention', subjects: ['water', 'urban'], url: 'https://www.cdc.gov/water-emergency/about/index.html', note: 'Rolling boil 1 min (3 min above 6,500 ft / ~2,000 m); bleach dosing and 30-min contact.' },
  { id: 'epa-emergency-disinfection', kind: 'government', title: 'Emergency Disinfection of Drinking Water', org: 'US Environmental Protection Agency', subjects: ['water', 'urban'], url: 'https://www.epa.gov/ground-water-and-drinking-water/emergency-disinfection-drinking-water' },
  { id: 'who-gdwq', kind: 'guideline', title: 'Guidelines for Drinking-water Quality (4th ed. with addenda)', org: 'World Health Organization', subjects: ['water'], url: 'https://www.who.int/publications/i/item/9789241548151' },
  { id: 'wms-water-2019', kind: 'guideline', title: 'WMS Clinical Practice Guidelines for Water Disinfection for Wilderness, International Travel, and Austere Situations', author: 'Backer HD, Derlet RW, Hill VR', year: '2019', org: 'Wilderness Medical Society', subjects: ['water'], note: 'Wilderness & Environmental Medicine 30(4S):S100–S120.' },

  // ---------- First aid ----------
  { id: 'nols-wm-book', kind: 'book', title: 'NOLS Wilderness Medicine', author: 'Tod Schimelpfenig', subjects: ['first-aid'], note: 'Standard textbook for NOLS WFA/WFR.' },
  { id: 'auerbach', kind: 'book', title: 'Auerbach’s Wilderness Medicine', author: 'Paul Auerbach et al.', subjects: ['first-aid', 'physiology'], note: 'Physician-level reference — the authority to check against.' },
  { id: 'wms-org', kind: 'organization', title: 'Wilderness Medical Society — Clinical Practice Guidelines', org: 'Wilderness Medical Society', url: 'https://wms.org/', subjects: ['first-aid', 'physiology'] },
  { id: 'nols-wm', kind: 'training', title: 'NOLS Wilderness Medicine (WFA 16 h · WAFA 40 h · WFR ~80 h)', org: 'NOLS', url: 'https://www.nols.edu/', subjects: ['first-aid'] },
  { id: 'solo', kind: 'training', title: 'SOLO Wilderness Medicine', org: 'SOLO Schools', url: 'https://www.soloschools.com/courses/wfr', subjects: ['first-aid'] },
  { id: 'redcross-wrfa', kind: 'training', title: 'Wilderness and Remote First Aid', org: 'American Red Cross', url: 'https://www.redcross.org/take-a-class/classes/wilderness-and-remote-first-aid/LP-00083300.html', subjects: ['first-aid'] },

  // ---------- Navigation ----------
  { id: 'usgs-symbols', kind: 'government', title: 'Topographic Map Symbols', org: 'USGS', url: 'https://pubs.usgs.gov/gip/TopographicMapSymbols/topomapsymbols.pdf', subjects: ['navigation'] },
  { id: 'noaa-declination', kind: 'tool', title: 'Magnetic Field Calculators (declination)', org: 'NOAA NCEI', url: 'https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml', subjects: ['navigation'] },
  { id: 'os-mapzone', kind: 'government', title: 'MapZone map-reading resources', org: 'Ordnance Survey', url: 'https://www.ordnancesurvey.co.uk/mapzone', subjects: ['navigation'] },
  { id: 'iof', kind: 'organization', title: 'International Orienteering Federation', url: 'https://orienteering.sport/', subjects: ['navigation'] },
  { id: 'kjellstrom', kind: 'book', title: 'Be Expert with Map and Compass', author: 'Björn Kjellström', subjects: ['navigation'], note: 'The classic civilian compass text.' },

  // ---------- Weather / hazards ----------
  { id: 'nws-lightning', kind: 'government', title: 'Lightning Safety', org: 'US National Weather Service', subjects: ['weather', 'hazards'], url: 'https://www.weather.gov/safety/lightning' },
  { id: 'nws-flood', kind: 'government', title: 'Flood Safety — Turn Around, Don’t Drown', org: 'US National Weather Service', subjects: ['weather', 'hazards'], url: 'https://www.weather.gov/safety/flood' },
  { id: 'metoffice-clouds', kind: 'government', title: 'Cloud types', org: 'UK Met Office', subjects: ['weather'], url: 'https://www.metoffice.gov.uk/weather/learn-about/weather/types-of-weather/clouds' },
  { id: 'avalanche-org', kind: 'organization', title: 'Avalanche.org (US avalanche centers)', url: 'https://avalanche.org/', subjects: ['hazards'] },

  // ---------- Tracking / rope ----------
  { id: 'cybertracker', kind: 'organization', title: 'CyberTracker tracker evaluation standard', url: 'https://www.cybertracker.org/', subjects: ['tracking'] },
  { id: 'was', kind: 'training', title: 'Wilderness Awareness School', url: 'https://wildernessawareness.org/', subjects: ['tracking'] },
  { id: 'animated-knots', kind: 'tool', title: 'Animated Knots', url: 'https://www.animatedknots.com/', subjects: ['rope'] },
  { id: 'uiaa', kind: 'organization', title: 'UIAA — International Climbing and Mountaineering Federation', url: 'https://www.theuiaa.org/', subjects: ['rope'] },

  // ---------- Signaling / rescue ----------
  { id: 'cospas-sarsat', kind: 'organization', title: 'International Cospas-Sarsat Programme', url: 'https://www.cospas-sarsat.int/en/', subjects: ['signaling'], note: 'The satellite system behind 406 MHz personal locator beacons.' },
  { id: 'noaa-sarsat', kind: 'government', title: 'NOAA SARSAT — beacon registration', org: 'NOAA', url: 'https://www.sarsat.noaa.gov/', subjects: ['signaling'] },
  { id: 'icar', kind: 'organization', title: 'International Commission for Alpine Rescue (ICAR)', url: 'https://www.alpine-rescue.org/', subjects: ['signaling', 'first-aid'] },
  { id: 'mra', kind: 'organization', title: 'Mountain Rescue Association', url: 'https://mra.org/', subjects: ['signaling'] },
  { id: 'nasar', kind: 'organization', title: 'National Association for Search and Rescue (SARTECH)', url: 'https://www.nasar.org/', subjects: ['signaling'] },
  { id: 'icao-annex12', kind: 'guideline', title: 'Annex 12 to the Chicago Convention — Search and Rescue (ground–air visual signal code)', org: 'ICAO', subjects: ['signaling'] },
]

export const refById = (id: string) => references.find((r) => r.id === id)
