import type { Skill } from './types'

// Real-world skills the learner self-assesses. A lesson can mark a skill "studied";
// only the learner can mark it practiced or competent.

export const skills: Skill[] = [
  // Stage 1
  { id: 'decision-loop', name: 'Run the Observe–Assess–Prioritize–Plan–Act–Reassess loop', stage: 1, physical: false, safety: 'home', description: 'Work any situation through the 12 questions and name the next highest-value action.' },
  { id: 'stop-drill', name: 'STOP drill in the field', stage: 1, physical: true, safety: 'outdoor', description: 'Stop, think, observe and plan at an unplanned moment on a real walk, within 5 minutes.' },
  { id: 'trip-plan', name: 'Trip plan and check-in system', stage: 1, physical: false, safety: 'home', description: 'Write a trip plan with route, timings, turnaround time and an overdue procedure; leave it with a responsible contact.' },
  { id: 'risk-assessment', name: 'Risk assessment of a planned trip', stage: 1, physical: false, safety: 'home', description: 'Identify hazards, rate likelihood and consequence, and choose controls and decision points.' },
  { id: 'stress-control', name: 'Acute stress control', stage: 1, physical: true, safety: 'home', description: 'Use paced breathing and task focus to regain control of attention under stress.' },
  { id: 'clothing-system', name: 'Clothing system management', stage: 1, physical: true, safety: 'outdoor', description: 'Select, layer and adjust clothing to stay dry and warm while moving and resting.' },
  { id: 'kit-assembly', name: 'Personal survival kit', stage: 1, physical: true, safety: 'home', description: 'Assemble, carry and maintain an environment-appropriate personal kit with redundancy for critical functions.' },
  { id: 'site-selection', name: 'Shelter site selection', stage: 1, physical: true, safety: 'outdoor', description: 'Choose a site that avoids overhead, water, wind and cold-air hazards and has materials nearby.' },
  { id: 'tarp-pitch', name: 'Pitch a tarp shelter', stage: 1, physical: true, safety: 'outdoor', description: 'Pitch an A-frame and a lean-to tarp in under 10 minutes, oriented to wind and rain.' },
  { id: 'fire-prep', name: 'Fire preparation', stage: 1, physical: true, safety: 'home', description: 'Gather and grade tinder, kindling and fuel in the right quantities before ignition.' },
  { id: 'fire-ignition', name: 'Light and manage a fire with lighter and ferro rod', stage: 1, physical: true, safety: 'outdoor', description: 'Light a fire safely in a legal location, keep it controlled, and extinguish it cold.' },
  { id: 'water-treatment', name: 'Treat water with two methods', stage: 1, physical: true, safety: 'home', description: 'Boil, chemically treat and/or filter water correctly, including dose and contact time.' },
  { id: 'signaling-basic', name: 'Signal with whistle, mirror and light', stage: 1, physical: true, safety: 'outdoor', description: 'Use a whistle, aim a signal mirror and send light signals in groups of three / SOS.' },
  { id: 'phone-location', name: 'Report your location from a phone', stage: 1, physical: false, safety: 'home', description: 'Find and read out your coordinates offline, and conserve battery for emergency use.' },
  { id: 'first-hour', name: 'First-hour survival plan', stage: 1, physical: false, safety: 'virtual-only', description: 'Produce a prioritized first-hour plan for an unfamiliar emergency.' },

  // Later stages (planned) — listed so the skill tracker shows the whole path.
  { id: 'map-compass', name: 'Map and compass navigation', stage: 2, physical: true, safety: 'outdoor', description: 'Take and follow bearings, pace distances and relocate with a map.' },
  { id: 'natural-nav', name: 'Navigation without instruments', stage: 2, physical: true, safety: 'outdoor', description: 'Find direction from sun, shadow, stars and landscape.' },
  { id: 'friction-fire', name: 'Friction fire (bow drill)', stage: 3, physical: true, safety: 'supervised', description: 'Produce an ember with a bow drill and blow it to flame.' },
  { id: 'wet-fire', name: 'Wet-weather fire', stage: 3, physical: true, safety: 'outdoor', description: 'Light a fire in wet conditions from processed natural fuel.' },
  { id: 'water-finding', name: 'Finding and collecting water', stage: 4, physical: true, safety: 'outdoor', description: 'Locate and collect water using terrain, vegetation and collection methods.' },
  { id: 'natural-shelter', name: 'Natural shelter construction', stage: 5, physical: true, safety: 'outdoor', description: 'Build a debris or lean-to shelter that keeps you warm overnight.' },
  { id: 'plant-id', name: 'Plant identification discipline', stage: 6, physical: true, safety: 'supervised', description: 'Identify plants to species with a key, including dangerous look-alikes.' },
  { id: 'cordage', name: 'Natural cordage', stage: 7, physical: true, safety: 'home', description: 'Make two-ply reverse-wrap cordage from natural fibers.' },
  { id: 'lashings', name: 'Lashings', stage: 7, physical: true, safety: 'home', description: 'Tie square, diagonal and tripod lashings.' },
  { id: 'hypothermia-mgmt', name: 'Hypothermia prevention and care', stage: 8, physical: true, safety: 'formal-training', description: 'Recognise and manage cold stress and hypothermia.' },
  { id: 'patient-assessment', name: 'Patient assessment system', stage: 9, physical: true, safety: 'formal-training', description: 'Scene size-up, primary and secondary survey, SOAP note.' },
  { id: 'bleeding-control', name: 'Bleeding control', stage: 9, physical: true, safety: 'formal-training', description: 'Direct pressure, packing and tourniquet application.' },
  { id: 'splinting', name: 'Improvised splinting', stage: 9, physical: true, safety: 'home', description: 'Splint limb injuries with improvised materials (on training partners).' },
  { id: 'improvise', name: 'Improvised equipment', stage: 10, physical: true, safety: 'home', description: 'Design and test improvised solutions from ordinary objects.' },
  { id: 'track-id', name: 'Track and sign interpretation', stage: 11, physical: true, safety: 'outdoor', description: 'Identify, age and interpret tracks and sign.' },
  { id: 'weather-read', name: 'Field weather reading', stage: 12, physical: false, safety: 'outdoor', description: 'Anticipate weather changes from clouds, wind and pressure.' },
  { id: 'knots', name: 'Core knots, hitches and bends', stage: 13, physical: true, safety: 'home', description: 'Tie and dress bowline, clove hitch, figure-eight family, sheet bend, trucker’s hitch.' },
  { id: 'search-support', name: 'Making yourself findable', stage: 14, physical: true, safety: 'outdoor', description: 'Set up visual and audible signals that match how searches work.' },
  { id: 'group-lead', name: 'Leading a group in an emergency', stage: 15, physical: false, safety: 'supervised', description: 'Assign roles, manage conflict and keep morale.' },
  { id: 'home-plan', name: 'Household emergency plan and kit', stage: 16, physical: true, safety: 'home', description: 'Maintain a 72-hour+ home kit and a tested family plan.' },
  { id: 'vehicle-kit', name: 'Vehicle emergency readiness', stage: 17, physical: true, safety: 'home', description: 'Maintain a vehicle kit and know the stay-with-vehicle rules.' },
  { id: 'multi-day', name: 'Multi-day resource management', stage: 18, physical: true, safety: 'supervised', description: 'Plan and run budgets for water, energy and food over several days.' },
]

export const skillById = (id: string) => skills.find((s) => s.id === id)
