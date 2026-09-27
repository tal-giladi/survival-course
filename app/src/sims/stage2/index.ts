import type { SimDef } from '../types'
import { scenarioSim } from '../scenarioSim'
import { NavMap } from './NavMap'
import { Celestial } from './Celestial'

export const sims: SimDef[] = [
  { id: 'nav-map', title: 'Navigation Simulator', stage: 2, description: 'Navigate a wilderness map between waypoints by bearing and pace count — with realistic compass and pacing error, crags, handrails, and the option to lose the compass.', concepts: ['bearings', 'declination', 'pacing', 'dead-reckoning', 'handrails', 'aiming-off', 'terrain-association'], component: NavMap },
  { id: 'celestial', title: 'Sky Navigator', stage: 2, description: 'Change date, time, latitude and hemisphere; read direction from the Sun, Moon and stars.', concepts: ['solar-direction', 'polaris', 'southern-cross', 'star-navigation', 'moon-navigation'], component: Celestial },
  { id: 'nav-relocation', title: 'Scenario: Fog on the Plateau', stage: 2, description: 'A branching relocation scenario: the path vanishes in fog, the map no longer matches, and the light is going.', concepts: ['relocation', 'stop', 'stay-or-move', 'daylight'], component: scenarioSim('nav-relocation') },
]
