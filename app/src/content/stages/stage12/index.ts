import type { StageContent } from '../../types'
import { l01 } from './l01-clouds'
import { l02 } from './l02-lightning'
import { l03 } from './l03-floods'
import { l04 } from './l04-heat-cold-wind'
import { l05 } from './l05-wildfire'
import { l06 } from './l06-avalanche-terrain'
import { stage12Review } from './review'

export const stage12: StageContent = {
  n: 12,
  lessons: [l01, l02, l03, l04, l05, l06],
  review: stage12Review,
  concepts: {
    'cloud-id': 'Cloud identification (WMO genera)',
    'weather-fronts': 'Weather systems and fronts',
    'pressure-trends': 'Pressure trends',
    'dew-point': 'Humidity and dew point',
    'wind-patterns': 'Large-scale and local wind patterns',
    'convection-storms': 'Convection and storm development',
    lightning: 'Lightning safety',
    'flash-to-bang': 'Flash-to-bang distance and the 30-minute rule',
    'go-no-go': 'Go/no-go hazard triggers',
    'flash-flood': 'Flash floods and catchments',
    'moving-water-force': 'Force of moving water',
    'water-crossing': 'Water crossings: when not to cross',
    'forecast-reading': 'Interpreting forecasts for your terrain',
    'wind-chill-heat-index': 'Wind chill and heat index',
    'wind-hazard': 'Strong-wind hazards',
    'ice-hazard': 'Snow and ice hazards',
    'fire-behavior': 'Wildfire behaviour (fuel, weather, topography)',
    'escape-routes': 'Wildfire escape routes and safety zones',
    avalanche: 'Avalanche terrain, problems and danger scale',
    'slope-angle': 'Slope angle',
    'rockfall-landslide': 'Rockfall, landslides and debris flows',
  },
  skills: [
    { id: 'lightning-plan', name: 'Lightning action plan', stage: 12, physical: false, safety: 'home', description: 'Plan a route around the storm window with refuges, first-thunder and 30-minute rules, and group spacing.' },
    { id: 'hazard-go-no-go', name: 'Hazard go/no-go triggers', stage: 12, physical: false, safety: 'home', description: 'Write numeric and observable triggers for weather, water, fire and avalanche hazards, and apply them on a route.' },
    { id: 'crossing-assessment', name: 'River-crossing assessment from the bank', stage: 12, physical: true, safety: 'outdoor', description: 'Estimate speed, depth, trend and downstream hazards of a river from the bank and make a go/no-go decision without entering the water.' },
  ],
  references: [
    { id: 'wmo-cloud-atlas', kind: 'guideline', title: 'International Cloud Atlas: Manual on the Observation of Clouds and Other Meteors (WMO-No. 407)', org: 'World Meteorological Organization', url: 'https://cloudatlas.wmo.int/en/home.html', subjects: ['weather'], note: 'The international standard for the ten cloud genera, with photographs.' },
    { id: 'nws-lightning-science', kind: 'government', title: 'Understanding Lightning Science', org: 'US National Weather Service', url: 'https://www.weather.gov/safety/lightning-science-overview', subjects: ['weather', 'hazards'], note: 'Lightning can strike ~10 miles from a storm; channel temperature ~50,000 °F.' },
    { id: 'wms-lightning-2014', kind: 'guideline', title: 'Wilderness Medical Society Practice Guidelines for the Prevention and Treatment of Lightning Injuries: 2014 Update', author: 'Davis C, Engeln A, Johnson EL, et al.', year: '2014', subjects: ['first-aid', 'hazards'], note: 'Wilderness & Environmental Medicine 25(4 Suppl):S86–S95. Check for a newer revision.' },
    { id: 'nws-tadd', kind: 'government', title: 'Turn Around Don’t Drown', org: 'US National Weather Service', url: 'https://www.weather.gov/safety/flood-turn-around-dont-drown', subjects: ['weather', 'hazards'], note: '6 in of fast water can knock over an adult; 12 in can carry away most cars; 2 ft SUVs and trucks.' },
    { id: 'nws-heat-index', kind: 'government', title: 'Heat Forecast Tools (Heat Index)', org: 'US National Weather Service', url: 'https://www.weather.gov/safety/heat-index', subjects: ['weather', 'physiology'], note: 'Heat index is for shade and light wind; full sun can add up to 15 °F.' },
    { id: 'nwcg-irpg', kind: 'guideline', title: 'Incident Response Pocket Guide (PMS 461)', org: 'National Wildfire Coordinating Group', subjects: ['fire', 'hazards'], note: 'LCES, watch-out situations, safety-zone guidelines (separation ≥ 4 × flame height). Available from nwcg.gov publications.' },
    { id: 'napads', kind: 'guideline', title: 'North American Public Avalanche Danger Scale', org: 'Avalanche.org', url: 'https://avalanche.org/avalanche-encyclopedia/human/resources/north-american-public-avalanche-danger-scale/', subjects: ['hazards'] },
    { id: 'avalanche-problems', kind: 'guideline', title: 'Avalanche Problems', org: 'Avalanche.org', url: 'https://avalanche.org/avalanche-encyclopedia/avalanche/avalanche-problems/', subjects: ['hazards'], note: 'Problem type, distribution, likelihood and size.' },
    { id: 'eaws-danger-scale', kind: 'guideline', title: 'European Avalanche Danger Scale', org: 'European Avalanche Warning Services (EAWS)', url: 'https://www.avalanches.org/standards/avalanche-danger-scale/', subjects: ['hazards'], note: 'About half of avalanche fatalities occur at level 3 (Considerable).' },
    { id: 'avalanche-canada', kind: 'organization', title: 'Avalanche Canada', url: 'https://www.avalanche.ca/', subjects: ['hazards'], note: 'Forecasts and the AST training courses.' },
    { id: 'sais', kind: 'government', title: 'Scottish Avalanche Information Service', url: 'https://www.sais.gov.uk/', subjects: ['hazards'] },
    { id: 'slf', kind: 'government', title: 'WSL Institute for Snow and Avalanche Research SLF', url: 'https://www.slf.ch/en/', subjects: ['hazards'], note: 'Swiss national avalanche forecasting and research.' },
    { id: 'tremper-avalanche', kind: 'book', title: 'Staying Alive in Avalanche Terrain', author: 'Bruce Tremper', year: '3rd ed., 2018', subjects: ['hazards'], note: 'The standard recreational avalanche text. No substitute for a course.' },
    { id: 'avalanche-handbook', kind: 'book', title: 'The Avalanche Handbook', author: 'David McClung and Peter Schaerer', year: '3rd ed., 2006', subjects: ['hazards'], note: 'Technical reference on snowpack and avalanche mechanics.' },
    { id: 'usgs-landslides', kind: 'government', title: 'Landslide Hazards Program', org: 'US Geological Survey', url: 'https://www.usgs.gov/programs/landslide-hazards', subjects: ['hazards'], note: 'Landslide basics, post-fire debris-flow hazards.' },
  ],
}
