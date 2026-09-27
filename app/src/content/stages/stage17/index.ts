import type { StageContent } from '../../types'
import { l01 } from './l01-kits-planning'
import { l02 } from './l02-heat'
import { l03 } from './l03-cold'
import { l04 } from './l04-roadside-remote'
import { stage17Review } from './review'

export const stage17: StageContent = {
  n: 17,
  lessons: [l01, l02, l03, l04],
  review: stage17Review,
  concepts: {
    'vehicle-kit': 'Vehicle emergency kit',
    'remote-road-planning': 'Remote-road planning (fuel, water, daylight, coverage)',
    'stay-with-vehicle': 'Staying with the vehicle',
    'hot-car-cabin': 'Heat inside a closed vehicle',
    'vehicle-exhaust-co': 'Engine exhaust and CO in a stranded vehicle',
    'vehicle-insulation': 'Keeping warm in a stranded vehicle',
    'vehicle-fuel-budget': 'Fuel and battery budgeting',
    'vehicle-roadside-safety': 'Roadside breakdown and crash safety',
    'vehicle-signaling': 'Signaling from a vehicle',
    'vehicle-nav-failure': 'Navigation failure on remote roads',
  },
  references: [
    { id: 'nhtsa-winter-driving', kind: 'government', title: 'Winter Driving Tips', org: 'US National Highway Traffic Safety Administration (NHTSA)', url: 'https://www.nhtsa.gov/winter-driving-tips', subjects: ['vehicle', 'hazards'], note: 'Prepare the car and a winter kit; if stranded, stay with the vehicle, keep the exhaust pipe clear of snow, and run the engine only sparingly to stay warm.' },
    { id: 'nhtsa-heatstroke', kind: 'government', title: 'Heatstroke: children in hot cars', org: 'US National Highway Traffic Safety Administration (NHTSA)', subjects: ['vehicle', 'physiology'], note: 'Never leave a child in a parked car; vehicles heat up quickly even on mild days. Find it on nhtsa.gov.' },
    { id: 'mclaren-hot-car-2005', kind: 'paper', title: 'Heat stress from enclosed vehicles: moderate ambient temperatures cause significant temperature rise in enclosed vehicles', author: 'McLaren C, Null J, Quinn J', year: '2005', subjects: ['vehicle', 'physiology'], note: 'Pediatrics 116(1):e109–e112. Cabin temperature rose on average about 22 °C (40 °F) within an hour, most of it in the first 30 minutes; cracking the windows made little difference.' },
    { id: 'uk-highway-code', kind: 'regulation', title: 'The Highway Code (Rules 274–287: breakdowns and incidents)', org: 'UK Department for Transport', url: 'https://www.gov.uk/guidance/the-highway-code/breakdowns-and-incidents-274-to-287', subjects: ['vehicle'], note: 'Hazard lights; a warning triangle at least 45 m behind a broken-down vehicle on ordinary roads, not on motorways; leave the vehicle by the side away from traffic and wait away from it.' },
    { id: 'nps-deva-safety', kind: 'government', title: 'Death Valley National Park: Safety (desert heat, travel and GPS warnings)', org: 'US National Park Service', subjects: ['vehicle', 'navigation', 'physiology'], note: 'Warns that GPS navigation can direct drivers onto closed or impassable roads; advises carrying ample water and staying with a disabled vehicle. Find it on nps.gov/deva.' },
  ],
}
