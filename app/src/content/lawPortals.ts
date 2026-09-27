// Where to check the rules. Laws on fires, foraging, fishing, hunting, trapping, camping,
// protected species and protected land vary by country, region, land manager and season.
// Always check the agency that manages the specific piece of land, on the day.

export interface LawPortal {
  region: string
  topic: string
  name: string
  url?: string
  note?: string
}

export const lawPortals: LawPortal[] = [
  { region: 'United States', topic: 'Fire (national parks)', name: 'NPS — Fire', url: 'https://www.nps.gov/subjects/fire/index.htm', note: 'Each park’s Superintendent’s Compendium lists local fire and foraging rules.' },
  { region: 'United States', topic: 'Fire (national forests)', name: 'USFS — Know Before You Go: Fire', url: 'https://www.fs.usda.gov/visit/know-before-you-go/fire', note: 'Each forest posts Stage 1/2 fire restrictions.' },
  { region: 'United States', topic: 'Foraging / forest products', name: 'USFS — Forest products', url: 'https://www.fs.usda.gov/visit/know-before-you-go/forest-products' },
  { region: 'United States', topic: 'Camping', name: 'NPS — Camping', url: 'https://www.nps.gov/subjects/camping/index.htm' },
  { region: 'United States', topic: 'Camping (BLM land)', name: 'BLM — Camping', url: 'https://www.blm.gov/programs/recreation/camping' },
  { region: 'United States', topic: 'Permits', name: 'Recreation.gov', url: 'https://www.recreation.gov/' },
  { region: 'United States', topic: 'Fishing and hunting', name: 'Association of Fish & Wildlife Agencies (links to all state agencies)', url: 'https://www.fishwildlife.org/' },
  { region: 'United States', topic: 'Federal wildlife law', name: 'US Fish & Wildlife Service', url: 'https://www.fws.gov/' },
  { region: 'United Kingdom', topic: 'Access, wild camping, fires (Scotland)', name: 'Scottish Outdoor Access Code', url: 'https://www.outdooraccess-scotland.scot/', note: 'Statutory access rights; responsible wild camping allowed; local camping-management byelaws apply.' },
  { region: 'United Kingdom', topic: 'Access (England & Wales)', name: 'The Countryside Code', url: 'https://www.gov.uk/government/publications/the-countryside-code', note: 'No general right to wild camp outside Dartmoor; landowner permission needed.' },
  { region: 'United Kingdom', topic: 'Fishing', name: 'gov.uk — Fishing licences', url: 'https://www.gov.uk/fishing-licences' },
  { region: 'United Kingdom', topic: 'Foraging law', name: 'legislation.gov.uk (Theft Act 1968 s.4(3); Wildlife and Countryside Act 1981)', url: 'https://www.legislation.gov.uk/', note: 'Picking for personal use is generally not theft; uprooting wild plants without permission is an offence.' },
  { region: 'Canada', topic: 'National parks (fires, camping, fishing permits)', name: 'Parks Canada — Rules and regulations', url: 'https://parks.canada.ca/voyage-travel/regles-rules', note: 'Crown land, hunting and most fishing rules are provincial.' },
  { region: 'Australia', topic: 'Parks (NSW example)', name: 'NSW National Parks', url: 'https://www.nationalparks.nsw.gov.au/', note: 'Total Fire Ban days are declared by state fire services.' },
  { region: 'Australia', topic: 'Parks (Victoria example)', name: 'Parks Victoria', url: 'https://www.parks.vic.gov.au/' },
  { region: 'New Zealand', topic: 'Fires, huts, camping, fishing, hunting', name: 'Department of Conservation', url: 'https://www.doc.govt.nz/' },
  { region: 'Sweden', topic: 'Right of public access', name: 'Naturvårdsverket — Allemansrätten', url: 'https://www.naturvardsverket.se/en/topics/the-right-of-public-access/', note: 'Broad camping and foraging rights; fires restricted by county bans.' },
  { region: 'Finland', topic: 'Everyman’s right', name: 'Metsähallitus — Everyman’s right', url: 'https://www.nationalparks.fi/everymansright', note: 'Fires need the landowner’s permission.' },
  { region: 'Norway', topic: 'Right of access', name: 'Norwegian Environment Agency — Allemannsretten', url: 'https://www.miljodirektoratet.no/', note: 'General ban on fires in or near forest 15 April – 15 September.' },
  { region: 'Israel', topic: 'Nature reserves & national parks', name: 'Israel Nature and Parks Authority', url: 'https://en.parks.org.il/', note: 'Overnight stays only at designated campgrounds; fires only where designated; protected plants may not be picked.' },
  { region: 'Israel', topic: 'Forests and forest campsites', name: 'KKL-JNF', url: 'https://www.kkl.org.il/eng/', note: 'Seasonal fire rules.' },
  { region: 'International', topic: 'Ethics', name: 'Leave No Trace — Seven Principles', url: 'https://lnt.org/why/7-principles/' },
  { region: 'International', topic: 'Beacon registration', name: 'Cospas-Sarsat country registries', url: 'https://www.cospas-sarsat.int/en/', note: 'Register a PLB in its country of registration.' },
]
