// Evacuation Decision simulator — pure model logic, unit-tested in src/test/stage9.test.ts.
//
// The learner reads a patient, trend, distance, terrain, weather, daylight, group and comms, then
// chooses an urgency and an evacuation plan. The debrief compares rough time-to-hospital estimates
// for every option. Speeds are *planning assumptions* used in wilderness-medicine teaching, not
// measurements: a fit walker on trail ~3–4 km/h; an injured walker half that or less; a litter
// carry roughly 0.5–1.5 km/h and only with 6+ carriers rotating; a rescue team needs time to be
// alerted, assemble and walk in; helicopters need flyable weather and usually daylight.

export type Urgency = 'none' | 'non-urgent' | 'urgent' | 'emergent'
export type Plan = 'stay' | 'walk' | 'carry' | 'ground-rescue' | 'helicopter'
export type Terrain = 'trail' | 'off-trail' | 'steep'
export type Weather = 'good' | 'deteriorating' | 'storm'
export type Comms = 'satellite' | 'phone' | 'none'

export const URGENCIES: { id: Urgency; label: string; desc: string }[] = [
  { id: 'none', label: 'No evacuation', desc: 'Treat in the field and continue (perhaps modified).' },
  { id: 'non-urgent', label: 'Non-urgent', desc: 'Leave the field at a reasonable pace; no threat to life or limb now.' },
  { id: 'urgent', label: 'Urgent', desc: 'Needs hospital care within hours; stable now but could worsen.' },
  { id: 'emergent', label: 'Emergent', desc: 'Life or limb is threatened now — fastest safe option.' },
]

export const PLANS: { id: Plan; label: string }[] = [
  { id: 'stay', label: 'Stay: treat, shelter and monitor here (reassess later)' },
  { id: 'walk', label: 'Walk out with the patient (assisted self-evacuation)' },
  { id: 'carry', label: 'Carry the patient out on an improvised litter' },
  { id: 'ground-rescue', label: 'Call for a ground rescue team and prepare to wait' },
  { id: 'helicopter', label: 'Call for rescue and request a helicopter' },
]

export interface EvacCase {
  id: string
  env: string
  patient: string
  trend: string
  distanceKm: number
  terrain: Terrain
  weather: Weather
  daylightH: number
  group: number // able-bodied people besides the patient
  comms: Comms
  canWalk: boolean
  /** Hours until someone raises the alarm if you cannot call. */
  overdueH: number
  bestUrgency: Urgency
  /** 2 = best, 1 = acceptable, 0 = poor/dangerous. */
  grades: Record<Plan, 0 | 1 | 2>
  why: Record<Plan, string>
  debrief: string
}

const TERRAIN_WALK: Record<Terrain, number> = { trail: 3.5, 'off-trail': 2, steep: 1.2 }
const TERRAIN_CARRY: Record<Terrain, number> = { trail: 1.2, 'off-trail': 0.6, steep: 0.3 }

/** Hours until the outside world learns of the emergency. */
export function alertHours(c: EvacCase): number {
  return c.comms === 'none' ? c.overdueH : 0.25
}

export function helicopterFlyable(c: EvacCase): boolean {
  return c.weather !== 'storm' && c.comms !== 'none' && c.daylightH >= 1.5
}

export interface Estimate {
  plan: Plan
  feasible: boolean
  hours: number // to the road-head / hospital hand-over, rough
  note: string
}

/** Rough time for each plan, with feasibility. */
export function estimate(c: EvacCase, p: Plan): Estimate {
  const weatherSlow = c.weather === 'storm' ? 0.6 : c.weather === 'deteriorating' ? 0.85 : 1
  switch (p) {
    case 'stay':
      return { plan: p, feasible: true, hours: Infinity, note: 'No movement toward care; right only if the patient does not need a hospital, or if moving is more dangerous than staying.' }
    case 'walk': {
      if (!c.canWalk) return { plan: p, feasible: false, hours: Infinity, note: 'The patient cannot walk.' }
      const v = TERRAIN_WALK[c.terrain] * 0.5 * weatherSlow
      return { plan: p, feasible: true, hours: c.distanceKm / v, note: `≈ ${c.distanceKm} km ÷ ${v.toFixed(1)} km/h (injured walker, ${c.terrain}${c.weather !== 'good' ? ', weather' : ''}).` }
    }
    case 'carry': {
      if (c.group < 6) return { plan: p, feasible: false, hours: Infinity, note: `A litter carry needs about 6–8 carriers rotating; you have ${c.group}.` }
      const v = TERRAIN_CARRY[c.terrain] * weatherSlow
      return { plan: p, feasible: true, hours: c.distanceKm / v, note: `≈ ${c.distanceKm} km ÷ ${v.toFixed(1)} km/h litter speed — exhausting and slow.` }
    }
    case 'ground-rescue': {
      const alert = alertHours(c)
      const assemble = 2
      const walkIn = c.distanceKm / (TERRAIN_WALK[c.terrain] * weatherSlow)
      const out = c.canWalk ? c.distanceKm / (TERRAIN_WALK[c.terrain] * 0.5 * weatherSlow) : c.distanceKm / (TERRAIN_CARRY[c.terrain] * 1.3 * weatherSlow)
      return { plan: p, feasible: true, hours: alert + assemble + walkIn + out, note: `alert ${alert.toFixed(1)} h + assemble ~${assemble} h + walk in ${walkIn.toFixed(1)} h + bring out ${out.toFixed(1)} h.` }
    }
    case 'helicopter': {
      if (!helicopterFlyable(c)) {
        const reason = c.comms === 'none' ? 'no way to call' : c.weather === 'storm' ? 'storm — aircraft will not fly' : 'too little daylight for most services'
        return { plan: p, feasible: false, hours: Infinity, note: `Not realistic now: ${reason}.` }
      }
      const h = alertHours(c) + 1.5
      return { plan: p, feasible: true, hours: h, note: `alert ${alertHours(c).toFixed(1)} h + ~1–2 h for tasking, flight and winching (highly variable).` }
    }
  }
}

export const EVAC_CASES: EvacCase[] = [
  {
    id: 'ankle-trail',
    env: 'Temperate forest, autumn, 11:00',
    patient: 'Rolled ankle. Swollen outer ankle, tender over the soft tissue but not over the bone; she walked 20 steps with pain after taping.',
    trend: 'Vitals normal and unchanged over 40 minutes.',
    distanceKm: 6,
    terrain: 'trail',
    weather: 'good',
    daylightH: 7,
    group: 3,
    comms: 'phone',
    canWalk: true,
    overdueH: 8,
    bestUrgency: 'non-urgent',
    grades: { stay: 1, walk: 2, carry: 0, 'ground-rescue': 0, helicopter: 0 },
    why: {
      stay: 'Not dangerous, but a day of daylight and a walkable injury argue for getting out while conditions are good.',
      walk: 'Best: taped ankle, lighter pack (others carry her gear), trekking poles, frequent rests. About 3–4 h — well inside the daylight.',
      carry: 'You only have 3 others, and she can walk. Carrying would be slower and risk more injuries.',
      'ground-rescue': 'Uses a volunteer team for a problem you can solve yourselves.',
      helicopter: 'Over-triage: puts aircrew at risk and ties up a resource someone else may need.',
    },
    debrief: 'A stable, walkable lower-leg injury with plenty of daylight is the classic **assisted self-evacuation**. Redistribute weight, tape, use poles, and set a turnaround plan if pain or swelling becomes unmanageable.',
  },
  {
    id: 'femur-offtrail',
    env: 'Boreal forest, summer, 13:00',
    patient: 'Fell from a log; painful, deformed mid-thigh, cannot bear weight. Splinted; circulation, sensation and movement present below the injury.',
    trend: 'Heart rate 92 → 96 → 98 over 45 min; alert; skin pale but warm.',
    distanceKm: 9,
    terrain: 'off-trail',
    weather: 'good',
    daylightH: 8,
    group: 3,
    comms: 'satellite',
    canWalk: false,
    overdueH: 30,
    bestUrgency: 'urgent',
    grades: { stay: 0, walk: 0, carry: 0, 'ground-rescue': 1, helicopter: 2 },
    why: {
      stay: 'A suspected femur fracture can hide a litre or more of blood loss; the slowly rising heart rate needs a hospital.',
      walk: 'Impossible and harmful.',
      carry: 'Three people cannot carry a litter 9 km off-trail; they would drop and re-injure the patient and exhaust themselves.',
      'ground-rescue': 'Acceptable, but a 9 km off-trail litter carry by a team will take many hours.',
      helicopter: 'Best: good weather, daylight, a satellite messenger and a long off-trail carry make air evacuation the fastest safe option. Rescue coordinators will decide the asset — tell them the facts.',
    },
    debrief: 'Mid-thigh fractures are **urgent**: stable now, but internal blood loss and pain can tip into shock. With a slowly climbing heart rate, a long carry and a working messenger, request rescue early and describe the patient clearly; helicopter is reasonable here. Keep monitoring and keep the patient warm while you wait.',
  },
  {
    id: 'head-mountain',
    env: 'Mountain valley, summer, 10:30',
    patient: 'Hit head in a fall, knocked out for about a minute. Now has a worsening headache, has vomited twice and is getting harder to keep awake.',
    trend: 'LOR A+Ox4 → A+Ox3 → V over 50 minutes. Heart rate 72 → 64; breathing irregular.',
    distanceKm: 14,
    terrain: 'steep',
    weather: 'good',
    daylightH: 9,
    group: 4,
    comms: 'phone',
    canWalk: false,
    overdueH: 10,
    bestUrgency: 'emergent',
    grades: { stay: 0, walk: 0, carry: 0, 'ground-rescue': 1, helicopter: 2 },
    why: {
      stay: 'A falling level of responsiveness after head trauma suggests bleeding inside the skull. This needs a neurosurgeon, fast.',
      walk: 'A patient with falling responsiveness cannot walk safely.',
      carry: 'Four carriers, 14 km of steep terrain — impossible in any useful time.',
      'ground-rescue': 'Call, yes — but ground evacuation would take far too long; ask for the fastest asset.',
      helicopter: 'Best: a deteriorating head injury in good flying weather is exactly what helicopter rescue is for.',
    },
    debrief: 'The **trend** decides this one: the patient was awake and is getting worse (plus a slowing pulse and irregular breathing — late signs of rising pressure in the skull). That is **emergent**. Call immediately, request air evacuation, protect the airway (recovery position if vomiting and responsiveness drops), and record vitals every 5–10 minutes.',
  },
  {
    id: 'hypo-storm',
    env: 'Subarctic tundra, October, 16:00',
    patient: 'Mild hypothermia this afternoon: shivering, clumsy. Now rewarmed in a tent with dry clothes, food and warm drinks; talking normally, walked around the tent.',
    trend: 'Shivering stopped after rewarming, alert and oriented for 2 hours; vitals normal.',
    distanceKm: 20,
    terrain: 'off-trail',
    weather: 'storm',
    daylightH: 1,
    group: 3,
    comms: 'satellite',
    canWalk: true,
    overdueH: 48,
    bestUrgency: 'none',
    grades: { stay: 2, walk: 0, carry: 0, 'ground-rescue': 1, helicopter: 0 },
    why: {
      stay: 'Best: mild hypothermia fully rewarmed and stable does not need a hospital. Stay sheltered, eat, drink, sleep warm, and decide in the morning.',
      walk: 'Walking 20 km into a storm at dusk would recreate the problem for everyone.',
      carry: 'Not needed and not possible.',
      'ground-rescue': 'Not needed; a message to your contact that you are safe and delayed is sensible, but calling a team out into a storm is not.',
      helicopter: 'Aircraft will not fly in a storm at dusk, and the patient does not need one.',
    },
    debrief: 'Not every patient needs evacuation. **Mild** hypothermia that has been fully rewarmed in the field can often continue after rest (WMS 2019), whereas moderate or severe hypothermia always needs evacuation. The storm and darkness add rescuer risk to any movement. Consider sending an OK/delayed message so no one launches a search.',
  },
  {
    id: 'anaphylaxis-coast',
    env: 'Coastal cliff path, 12:00',
    patient: 'Anaphylaxis after a bee sting. Epinephrine given 20 min ago; breathing now normal, hives fading. One auto-injector left.',
    trend: 'Improving: HR 124 → 104 → 96; wheeze gone.',
    distanceKm: 5,
    terrain: 'trail',
    weather: 'good',
    daylightH: 6,
    group: 2,
    comms: 'phone',
    canWalk: true,
    overdueH: 6,
    bestUrgency: 'urgent',
    grades: { stay: 0, walk: 2, carry: 0, 'ground-rescue': 1, helicopter: 1 },
    why: {
      stay: 'Anyone who needed epinephrine needs a hospital: symptoms can return as the drug wears off, or hours later (biphasic reaction).',
      walk: 'Best: she is walking and improving; head straight out, carrying the second auto-injector in hand, calling ahead so an ambulance meets you at the trailhead. About 3 h.',
      carry: 'You only have 2 others and she can walk.',
      'ground-rescue': 'Acceptable, but slower than walking out now.',
      helicopter: 'Reasonable to discuss with dispatch if she worsens; walking out is faster here while she is well.',
    },
    debrief: 'Anaphylaxis treated with epinephrine = **urgent** evacuation even when the patient looks better. Keep the second dose ready, walk at an easy pace, call ahead, and re-dose if breathing or dizziness returns.',
  },
  {
    id: 'blister-desert',
    env: 'Desert canyon, spring, 09:00',
    patient: 'Large heel blister and a shallow cut on the forearm from a thorn bush.',
    trend: 'No change; vitals normal.',
    distanceKm: 18,
    terrain: 'trail',
    weather: 'good',
    daylightH: 10,
    group: 2,
    comms: 'none',
    canWalk: true,
    overdueH: 36,
    bestUrgency: 'none',
    grades: { stay: 2, walk: 1, carry: 0, 'ground-rescue': 0, helicopter: 0 },
    why: {
      stay: 'Best: drain and dress the blister, clean and dress the cut, adjust pace and footwear, and carry on with the trip — watch for infection.',
      walk: 'Acceptable if the trip was nearly over, but these are field-treatable problems.',
      carry: 'Absurd for a blister.',
      'ground-rescue': 'You have no comms anyway — and this is not a rescue problem.',
      helicopter: 'Not realistic and not needed.',
    },
    debrief: 'Minor problems are treated in the field. The decision would change if the cut became infected (spreading redness, red streaks, fever) — then evacuate.',
  },
  {
    id: 'abdomen-storm',
    env: 'Rural hill country, winter, 18:30 (dark)',
    patient: 'Fell onto a boulder, struck the left upper abdomen. Now pale, sweaty, thirsty, with a tender, rigid abdomen.',
    trend: 'HR 96 → 112 → 124; RR 18 → 24; becoming anxious.',
    distanceKm: 4,
    terrain: 'trail',
    weather: 'storm',
    daylightH: 0,
    group: 8,
    comms: 'phone',
    canWalk: false,
    overdueH: 4,
    bestUrgency: 'emergent',
    grades: { stay: 0, walk: 0, carry: 2, 'ground-rescue': 1, helicopter: 0 },
    why: {
      stay: 'A rising heart rate with a rigid abdomen after trauma suggests internal bleeding — only surgery fixes it.',
      walk: 'Walking would worsen the bleeding and he may collapse.',
      carry: 'Best: call first so a ground team and ambulance come toward you, then carry him on a litter along the trail with 8 people rotating, keeping him warm and flat. Meeting the rescuers part-way saves hours.',
      'ground-rescue': 'Acceptable, but waiting in place wastes the hours your strong group could spend closing the distance.',
      helicopter: 'Storm and darkness: aircraft are unlikely to fly. Ask, but do not bet his life on it.',
    },
    debrief: 'Internal bleeding is **emergent** and cannot be controlled in the field. When aircraft cannot fly, a large group on a short trail can carry the patient **toward** the rescuers — after calling so everyone converges. Monitor vitals every 5 minutes and keep him insulated.',
  },
]

export const evacCaseById = (id: string) => EVAC_CASES.find((c) => c.id === id)!

const ORDER: Urgency[] = ['none', 'non-urgent', 'urgent', 'emergent']

/** Score one decision 0–100: urgency (40) + plan (60). One step off on urgency earns half. */
export function scoreEvac(c: EvacCase, urgency: Urgency, plan: Plan): { score: number; urgencyPts: number; planPts: number } {
  const d = Math.abs(ORDER.indexOf(urgency) - ORDER.indexOf(c.bestUrgency))
  const urgencyPts = d === 0 ? 40 : d === 1 ? 20 : 0
  const planPts = c.grades[plan] * 30
  return { score: urgencyPts + planPts, urgencyPts, planPts }
}

export const fmtHours = (h: number) => (Number.isFinite(h) ? (h < 1 ? `${Math.round(h * 60)} min` : `${h.toFixed(1)} h`) : '—')
