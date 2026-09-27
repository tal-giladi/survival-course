// Patient Assessment simulator — pure model logic (no React), unit-tested in src/test/stage9.test.ts.
//
// A deliberately simple, directionally correct physiology model for teaching the *pattern* of
// wilderness patient care: scene safety → primary survey (fix life threats in order) → vitals over
// time → secondary survey → SOAP note → evacuation plan. Numbers are teaching approximations, not
// clinical predictions:
//   • Blood volume ≈ 70 mL/kg. Haemorrhage classes follow the ATLS teaching bands
//     (<15 %, 15–30 %, 30–40 %, >40 % of blood volume lost).
//   • Heat stroke: core temperature falls ~0.1–0.15 °C/min with aggressive field cooling;
//     cooling stops around 38.6 °C (WMS 2024 target band 38.3–38.8 °C).
//   • Hypothermia: exposed, wet and windy loses core heat; a hypothermia wrap stops the fall
//     and allows slow rewarming (WMS 2019).
//   • Anaphylaxis: severity rises until intramuscular epinephrine; one dose may wear off after
//     ~10–20 min, which is why a second dose is given if symptoms persist or return after 5–15 min.

export type ActionId =
  | 'scene'
  | 'move'
  | 'vitals'
  | 'secondary'
  | 'call'
  | 'pressure'
  | 'pack'
  | 'tourniquet'
  | 'recovery'
  | 'insulate'
  | 'wetoff'
  | 'cool'
  | 'drink'
  | 'epi'
  | 'antihistamine'
  | 'splint'
  | 'rub'
  | 'wait'

export interface ActionDef {
  id: ActionId
  label: string
  minutes: number
  group: 'scene' | 'primary' | 'treat' | 'assess' | 'other'
}

export const ACTIONS: ActionDef[] = [
  { id: 'scene', label: 'Scene size-up: hazards, gloves, mechanism, how many patients', minutes: 1, group: 'scene' },
  { id: 'move', label: 'Move patient (and you) the minimum distance out of the hazard', minutes: 2, group: 'scene' },
  { id: 'pressure', label: 'Firm direct pressure on the bleeding', minutes: 1, group: 'primary' },
  { id: 'pack', label: 'Pack the wound with gauze and hold pressure', minutes: 3, group: 'primary' },
  { id: 'tourniquet', label: 'Apply a tourniquet above the wound', minutes: 2, group: 'primary' },
  { id: 'recovery', label: 'Place in the recovery position', minutes: 1, group: 'primary' },
  { id: 'epi', label: 'Give epinephrine auto-injector (outer thigh)', minutes: 1, group: 'primary' },
  { id: 'cool', label: 'Shade + aggressive cooling (soak with water, fan; immerse if possible)', minutes: 3, group: 'primary' },
  { id: 'insulate', label: 'Insulate from ground, cover, wind-proof (hypothermia wrap)', minutes: 5, group: 'treat' },
  { id: 'wetoff', label: 'Swap wet clothing for dry layers (in shelter)', minutes: 5, group: 'treat' },
  { id: 'drink', label: 'Give fluids / warm sweet drink by mouth', minutes: 2, group: 'treat' },
  { id: 'antihistamine', label: 'Give an antihistamine tablet', minutes: 1, group: 'treat' },
  { id: 'splint', label: 'Splint the injured limb (check CSM before and after)', minutes: 10, group: 'treat' },
  { id: 'rub', label: 'Rub the arms and legs briskly to warm them', minutes: 3, group: 'treat' },
  { id: 'vitals', label: 'Take a set of vital signs', minutes: 2, group: 'assess' },
  { id: 'secondary', label: 'Secondary survey: head-to-toe exam + SAMPLE history', minutes: 6, group: 'assess' },
  { id: 'call', label: 'Call / send a message for help with location and patient report', minutes: 3, group: 'other' },
  { id: 'wait', label: 'Keep monitoring for 5 minutes', minutes: 5, group: 'other' },
]

export const actionById = (id: ActionId) => ACTIONS.find((a) => a.id === id)!

export type Ambient = 'cold' | 'hot' | 'mild'
export type Control = 'none' | 'pressure' | 'pack' | 'tourniquet'

export interface PatientState {
  t: number // minutes since arrival
  massKg: number
  bloodLossMl: number
  bleedRate: number // mL/min uncontrolled
  control: Control
  core: number // °C
  anaph: number // 0–100 anaphylaxis severity
  epiDoses: number
  epiUntil: number // minute at which the last dose's effect wanes
  inHazard: boolean
  cooling: boolean
  insulated: boolean
  wetOff: boolean
  recovery: boolean
  splinted: boolean
  called: boolean
  drank: boolean
}

export interface Vitals {
  t: number
  hr: number
  rr: number
  radial: 'strong' | 'weak' | 'absent'
  lor: string
  skin: string
  core: number
}

export interface CaseDef {
  id: string
  title: string
  env: string
  ambient: Ambient
  intro: string
  hazard?: string
  patient: { age: number; sex: 'M' | 'F'; massKg: number }
  complaint: string
  sample: { s: string; a: string; m: string; p: string; l: string; e: string }
  hidden: string
  initial: Partial<PatientState>
  /** Life-threat interventions and the minute by which each should be done. */
  critical: { action: ActionId; alt?: ActionId[]; by: number; why: string }[]
  /** Actions that harm this patient, with the reason. */
  harmful: Partial<Record<ActionId, string>>
  /** Actions that help but are not life-saving (count toward good care). */
  helpful: ActionId[]
  problems: string[]
}

export const CASES: CaseDef[] = [
  {
    id: 'forest-fall',
    title: 'Forest — fall onto rocks',
    env: 'Temperate forest, 9 °C, drizzle',
    ambient: 'cold',
    intro:
      'A trail runner slipped on a wet boulder field below a crumbling outcrop. You hear small rocks still clattering down the slope. She is sitting up, pale, with bright red blood pulsing from a deep gash on the inner right thigh. Her friend is panicking.',
    hazard: 'Loose rock is still falling from the outcrop above the patient.',
    patient: { age: 34, sex: 'F', massKg: 60 },
    complaint: 'Deep laceration right inner thigh with pulsing bright-red bleeding after a fall',
    sample: {
      s: 'Pain right thigh, thirsty, "I feel dizzy"; a bump on the back of the head, no loss of consciousness',
      a: 'None known',
      m: 'None',
      p: 'Healthy',
      l: 'Energy gel 1 h ago; water 30 min ago',
      e: 'Slipped on wet rock, slid ~3 m, thigh struck a sharp edge',
    },
    hidden: 'Secondary survey finds a 2 cm scalp bump (A+Ox4, no neck pain) and grazed palms.',
    initial: { bleedRate: 140, bloodLossMl: 450, core: 36.8, inHazard: true },
    critical: [
      { action: 'move', by: 4, why: 'Rockfall can make two patients out of one; a two-metre move is a minimal delay.' },
      { action: 'tourniquet', alt: ['pack'], by: 7, why: 'Pulsing thigh bleeding is life-threatening: a tourniquet (or packing plus hard pressure) early, not as a last resort.' },
      { action: 'insulate', by: 25, why: 'A bleeding patient on wet ground in drizzle cools fast, and cold worsens bleeding and shock.' },
    ],
    harmful: {
      rub: 'Rubbing limbs does nothing for a bleeding patient and wastes time.',
      drink: 'Small sips are not dangerous here, but a patient in developing shock who may need surgery should not be given large volumes — and it is not a priority.',
      epi: 'Epinephrine is for anaphylaxis; it has no role here.',
    },
    helpful: ['call', 'secondary', 'insulate', 'splint'],
    problems: ['Life-threatening limb bleeding','Shock from blood loss', 'Minor head injury — monitor', 'Cold exposure risk'],
  },
  {
    id: 'desert-collapse',
    title: 'Desert — collapse on a hot afternoon',
    env: 'Hot desert canyon, 41 °C, full sun',
    ambient: 'hot',
    intro:
      'At 15:00 a hiker in your group has become confused, is stumbling and suddenly sits down in the sun. His skin is hot and he is still sweating. He answers questions slowly and wrongly. There is shade under an overhang 20 m away and 6 L of water in the group.',
    patient: { age: 52, sex: 'M', massKg: 85 },
    complaint: 'Confusion and collapse during exertion in extreme heat',
    sample: {
      s: 'Headache, nausea; confused about the time and place',
      a: 'Penicillin (rash)',
      m: 'Blood-pressure tablet (diuretic)',
      p: 'High blood pressure',
      l: 'Lunch at 12:00; drank about 2 L since 08:00',
      e: 'Hiking uphill in full sun since 11:00, pace set to "beat the heat"',
    },
    hidden: 'Secondary survey: no injuries from sitting down; heat rash on the neck; dry mouth.',
    initial: { core: 41.2, bleedRate: 0, bloodLossMl: 0 },
    critical: [
      { action: 'cool', by: 5, why: 'Heat stroke (hot + altered mental status) is cool-first, transport-second. Every minute above ~40 °C adds organ damage.' },
    ],
    harmful: {
      drink: 'A confused patient may choke or vomit and aspirate; oral fluids wait until he is alert and can swallow safely. Cooling is the treatment, not drinking.',
      insulate: 'Wrapping a heat-stroke patient traps heat.',
      rub: 'Rubbing does not cool.',
      epi: 'Epinephrine is for anaphylaxis; it has no role here.',
    },
    helpful: ['call', 'secondary', 'recovery'],
    problems: ['Exertional heat stroke', 'Dehydration', 'Altered mental status — airway watch'],
  },
  {
    id: 'mountain-cold',
    title: 'Mountain — cold, wet climber',
    env: 'Exposed mountain ridge, 2 °C, wind 40 km/h, sleet',
    ambient: 'cold',
    intro:
      'A climber in your party has been soaked by sleet for two hours on a windy ridge. He is shivering violently, fumbling with his gear, slurring, and has stopped talking much. The ridge is fully exposed; 30 m below, on the lee side, there is a boulder you could shelter behind.',
    hazard: 'The exposed ridge: wind and sleet are driving heat loss for both of you, and the weather is building.',
    patient: { age: 41, sex: 'M', massKg: 78 },
    complaint: 'Violent shivering, clumsiness and slurred speech after prolonged cold wet exposure',
    sample: {
      s: '"I\'m fine" — but cannot do up his jacket zip',
      a: 'None',
      m: 'None',
      p: 'Asthma as a child',
      l: 'Half a sandwich at 10:00; little to drink',
      e: 'Long day, underdressed for sleet, cotton T-shirt under shell',
    },
    hidden: 'Secondary survey: cold white fingertips (early frostnip), no injuries.',
    initial: { core: 34.0, inHazard: true },
    critical: [
      { action: 'move', by: 6, why: 'Getting out of the wind to the lee side is the fastest way to stop heat loss — and protects you too.' },
      { action: 'insulate', by: 15, why: 'A hypothermia wrap (insulation below and around, vapour barrier, wind shell) stops the fall in core temperature.' },
    ],
    harmful: {
      rub: 'Myth: rubbing limbs does not rewarm the core and may worsen cold injury to tissue.',
      cool: 'Cooling a hypothermic patient is dangerous.',
      epi: 'Epinephrine is for anaphylaxis; it has no role here.',
    },
    helpful: ['wetoff', 'drink', 'call', 'secondary'],
    problems: ['Hypothermia (impaired, still shivering)', 'Frostnip fingertips', 'Energy depletion'],
  },
  {
    id: 'coast-sting',
    title: 'Tropical coast — sting at lunch',
    env: 'Tropical coastal trail, 31 °C, humid',
    ambient: 'mild',
    intro:
      'While eating by a coastal path, a hiker is stung on the neck by a wasp. Within minutes she has hives spreading over her chest, her voice is hoarse and she is wheezing. She says she had "a bad reaction once" and has an epinephrine auto-injector in her pack lid. There is no hazard nearby.',
    patient: { age: 27, sex: 'F', massKg: 58 },
    complaint: 'Hives, hoarse voice and wheeze minutes after a wasp sting',
    sample: {
      s: 'Throat feels tight, itchy, "something bad is happening"',
      a: 'Wasp stings (previous severe reaction)',
      m: 'Carries 2 epinephrine auto-injectors; antihistamine tablets',
      p: 'Previous anaphylaxis to a sting, age 19',
      l: 'Sandwich 10 min ago',
      e: 'Wasp landed on her sandwich; stung on the neck',
    },
    hidden: 'Secondary survey: sting site on neck with swelling; no other injuries.',
    initial: { anaph: 40 },
    critical: [
      { action: 'epi', by: 3, why: 'Anaphylaxis (skin + breathing signs after exposure) → epinephrine immediately. It is the only first-aid drug that reverses airway swelling and falling blood pressure.' },
    ],
    harmful: {
      antihistamine: 'An antihistamine only helps itching and hives; if given instead of epinephrine it delays the life-saving drug.',
      drink: 'Not useful with a swelling throat.',
      tourniquet: 'A tourniquet has no role in a sting reaction.',
      rub: 'Irrelevant here.',
    },
    helpful: ['call', 'secondary'],
    problems: ['Anaphylaxis', 'Biphasic reaction risk — evacuate'],
  },
]

export const caseById = (id: string) => CASES.find((c) => c.id === id)!

export function initialState(c: CaseDef): PatientState {
  return {
    t: 0,
    massKg: c.patient.massKg,
    bloodLossMl: 0,
    bleedRate: 0,
    control: 'none',
    core: 37,
    anaph: 0,
    epiDoses: 0,
    epiUntil: -1,
    inHazard: false,
    cooling: false,
    insulated: false,
    wetOff: false,
    recovery: false,
    splinted: false,
    called: false,
    drank: false,
    ...c.initial,
  }
}

export const bloodVolumeMl = (massKg: number) => 70 * massKg
export const lossFraction = (s: PatientState) => s.bloodLossMl / bloodVolumeMl(s.massKg)

/** ATLS-style haemorrhage class from fraction of blood volume lost. */
export function shockClass(f: number): 1 | 2 | 3 | 4 {
  if (f < 0.15) return 1
  if (f < 0.3) return 2
  if (f < 0.4) return 3
  return 4
}

const CONTROL_FACTOR: Record<Control, number> = { none: 1, pressure: 0.35, pack: 0.12, tourniquet: 0.01 }

/** Advance physiology one minute. */
export function tick(c: CaseDef, s0: PatientState): PatientState {
  const s = { ...s0, t: s0.t + 1 }
  // Bleeding. Cold and shock both impair clotting a little (the "lethal triad"), so loss rises when core < 35 °C.
  const coagPenalty = s.core < 35 ? 1.15 : 1
  s.bloodLossMl += s.bleedRate * CONTROL_FACTOR[s.control] * coagPenalty

  // Temperature.
  if (c.ambient === 'hot') {
    if (s.cooling) s.core = Math.max(38.6, s.core - 0.13)
    else s.core += 0.03
  } else if (c.ambient === 'cold') {
    const exposed = s.inHazard ? 0.04 : 0.018
    const shock = shockClass(lossFraction(s)) >= 3 ? 0.008 : 0
    let d = -(exposed + shock)
    if (s.insulated) d = s.wetOff || c.id !== 'mountain-cold' ? 0.012 : 0.004
    if (s.insulated && s.drank && s.core > 32) d += 0.004
    s.core = Math.min(37, s.core + d)
  }

  // Anaphylaxis: progresses until epinephrine; each dose acts ~12 min then symptoms may return.
  // In this teaching case the reaction outlasts one dose, as happens in a minority of real cases.
  if (s.anaph > 0) {
    const active = s.t <= s.epiUntil
    if (s.epiDoses >= 2) s.anaph = Math.max(0, s.anaph - (active ? 2 : 0.5))
    else if (active) s.anaph = Math.max(5, s.anaph - 2)
    else s.anaph = Math.min(100, s.anaph + (s.epiDoses === 1 ? 1.5 : 3))
  }
  return s
}

export interface ActionResult {
  state: PatientState
  note: string
}

/** Apply an action: its immediate effect, then elapse its duration minute by minute. */
export function applyAction(c: CaseDef, s0: PatientState, a: ActionId): ActionResult {
  let s = { ...s0 }
  let note = ''
  switch (a) {
    case 'scene':
      note = c.hazard ? `Hazard identified: ${c.hazard}` : 'No immediate hazards. Gloves on. One patient. Mechanism noted.'
      break
    case 'move':
      if (s.inHazard) {
        s.inHazard = false
        note = 'You move the patient the minimum distance to safety, supporting the injured part.'
      } else note = 'There was no hazard to move away from — time spent for nothing.'
      break
    case 'pressure':
      if (s.bleedRate > 0 && s.control === 'none') {
        s.control = 'pressure'
        note = 'Firm pressure slows the bleeding but blood still seeps through — hard to hold for long.'
      } else note = s.bleedRate > 0 ? 'Already controlled with a stronger method.' : 'No significant bleeding to press on.'
      break
    case 'pack':
      if (s.bleedRate > 0 && (s.control === 'none' || s.control === 'pressure')) {
        s.control = 'pack'
        note = 'You pack gauze deep into the wound and lean on it. The bleeding slows to an ooze.'
      } else note = s.bleedRate > 0 ? 'Already controlled.' : 'No wound that needs packing.'
      break
    case 'tourniquet':
      if (s.bleedRate > 0) {
        s.control = 'tourniquet'
        note = 'Tourniquet placed 5–8 cm above the wound and tightened until the bleeding stops. Time written on it.'
      } else note = 'No limb bleeding — a tourniquet has no role and causes pain and harm.'
      break
    case 'recovery':
      s.recovery = true
      note = 'Placed on side, airway draining. (Only needed if responsiveness drops.)'
      break
    case 'epi':
      if (s.anaph > 0) {
        s.epiDoses += 1
        s.anaph = Math.max(0, s.anaph - 25)
        s.epiUntil = s.t + 12
        note = s.epiDoses === 1 ? 'Epinephrine into the outer thigh. Within minutes breathing eases.' : 'Second dose given. Symptoms settle again.'
      } else note = 'Epinephrine without anaphylaxis — no benefit and possible harm.'
      break
    case 'cool':
      s.cooling = true
      note = c.ambient === 'hot' ? 'In the shade, soaked and fanned continuously. You will stop at about 38.6 °C.' : 'You cool the patient — wrong direction.'
      if (c.ambient !== 'hot') s.core -= 0.3
      break
    case 'insulate':
      s.insulated = true
      if (c.ambient === 'hot') s.core += 0.2
      note = c.ambient === 'hot' ? 'Covering a hot patient traps heat.' : 'Pad underneath, sleeping bag around, bivy/plastic as a vapour barrier and shell against wind.'
      break
    case 'wetoff':
      s.wetOff = true
      note = 'Wet layers swapped for dry ones, one at a time, sheltered from the wind.'
      break
    case 'drink':
      s.drank = true
      note = 'Fluids given by mouth.'
      break
    case 'antihistamine':
      note = 'Itching may ease in 30–60 minutes. It does nothing for the airway or blood pressure.'
      break
    case 'splint':
      s.splinted = true
      note = 'Limb splinted in a position of comfort; circulation, sensation and movement checked before and after.'
      break
    case 'rub':
      note = 'Rubbing wastes time and can damage cold tissue.'
      break
    case 'call':
      s.called = true
      note = 'Message sent: location, number of patients, problem, vitals, and what you need.'
      break
    case 'vitals':
    case 'secondary':
    case 'wait':
      break
  }
  const n = actionById(a).minutes
  for (let i = 0; i < n; i++) s = tick(c, s)
  if (a === 'secondary') note = c.hidden
  return { state: s, note }
}

const lerp = (pts: [number, number][], x: number) => {
  if (x <= pts[0][0]) return pts[0][1]
  for (let i = 1; i < pts.length; i++) {
    const [x1, y1] = pts[i]
    const [x0, y0] = pts[i - 1]
    if (x <= x1) return y0 + ((x - x0) / (x1 - x0)) * (y1 - y0)
  }
  return pts[pts.length - 1][1]
}

/** Vital signs derived from the state (rounded like a field measurement). */
export function vitals(s: PatientState): Vitals {
  const f = lossFraction(s)
  let hr = lerp([[0, 78], [0.15, 98], [0.3, 122], [0.4, 140], [0.5, 155]], f)
  let rr = lerp([[0, 15], [0.15, 18], [0.3, 24], [0.4, 32], [0.5, 36]], f)
  let lorLevel = f < 0.3 ? 0 : f < 0.4 ? 1 : f < 0.45 ? 2 : 3 // 0 A+Ox4, 1 A+Ox<4, 2 V, 3 P/U
  let radial: Vitals['radial'] = f < 0.3 ? 'strong' : f < 0.4 ? 'weak' : 'absent'
  let skin = f < 0.15 ? 'pink, warm, dry' : f < 0.3 ? 'pale, cool, moist' : 'pale-grey, cold, clammy'

  // Heat
  if (s.core > 37.5) {
    hr += (s.core - 37.2) * 14
    rr += (s.core - 37.2) * 3
    if (s.core >= 40) lorLevel = Math.max(lorLevel, s.core >= 41.8 ? 2 : 1)
    skin = s.cooling ? 'wet, cooling' : s.core >= 40 ? 'red, hot, sweaty' : 'flushed, hot, moist'
  }
  // Cold
  if (s.core < 35.5) {
    if (s.core < 32) {
      hr = Math.min(hr, 55)
      rr = Math.min(rr, 10)
      lorLevel = Math.max(lorLevel, s.core < 30 ? 3 : 2)
    } else {
      hr += 8 // shivering
      rr += 2
      lorLevel = Math.max(lorLevel, s.core < 34.5 ? 1 : 0)
    }
    skin = s.core < 32 ? 'pale, cold, no shivering' : 'pale, cold, shivering'
  }
  // Anaphylaxis
  if (s.anaph > 0) {
    hr += s.anaph * 0.6
    rr += s.anaph * 0.16
    if (s.anaph > 60) radial = 'weak'
    if (s.anaph > 85) radial = 'absent'
    lorLevel = Math.max(lorLevel, s.anaph > 85 ? 2 : s.anaph > 60 ? 1 : 0)
    skin = s.anaph > 20 ? 'flushed, hives, swollen lips' : s.anaph > 0 ? 'faint hives fading' : skin
  }
  const lor = ['A+Ox4 (alert, oriented)', 'A+Ox2 (alert, confused)', 'V (responds to voice)', 'P (responds only to pain)'][lorLevel]
  return { t: s.t, hr: Math.round(hr), rr: Math.round(rr), radial, lor, skin, core: Math.round(s.core * 10) / 10 }
}

export type Status = 'improving' | 'stable' | 'deteriorating' | 'critical'

/** Overall patient status now, compared with a state a few minutes earlier. */
export function status(c: CaseDef, s: PatientState): Status {
  const f = lossFraction(s)
  if (f >= 0.5 || s.core >= 42.5 || s.core < 28 || s.anaph >= 100) return 'critical'
  const bleeding = s.bleedRate > 0 && s.control !== 'tourniquet' && s.control !== 'pack'
  if (bleeding || s.anaph > 50 || (c.ambient === 'hot' && !s.cooling) || (c.ambient === 'cold' && !s.insulated && (s.core < 35 || f > 0.15)))
    return 'deteriorating'
  if (s.anaph > 0 && s.epiDoses < 2 && s.t > s.epiUntil) return 'deteriorating'
  if (c.ambient === 'hot' && s.cooling) return 'improving'
  if ((c.initial.anaph ?? 0) > 0 && s.epiDoses >= 1) return 'improving'
  if (c.ambient === 'cold' && s.insulated && !s.inHazard) return s.core < 36 || s.bleedRate > 0 ? 'improving' : 'stable'
  return 'stable'
}

export interface LogEntry {
  t: number
  action: ActionId
  note: string
}

export interface Assessment {
  score: number
  parts: { label: string; got: number; max: number; note: string }[]
  harms: string[]
}

/** Score a completed run from its action log, vitals log and final state. */
export function scoreRun(c: CaseDef, log: LogEntry[], vitalsLog: Vitals[], final: PatientState): Assessment {
  const parts: Assessment['parts'] = []
  const harms: string[] = []
  const first = log[0]?.action
  // 1. Scene safety (15)
  let scene = first === 'scene' ? 10 : log.some((l) => l.action === 'scene') ? 4 : 0
  const firstCare = log.findIndex((l) => !['scene', 'move', 'call'].includes(l.action))
  if (c.hazard) {
    const mv = log.findIndex((l) => l.action === 'move')
    if (mv >= 0 && (firstCare < 0 || mv < firstCare)) scene += 5
  } else scene += log.some((l) => l.action === 'move') ? 0 : 5
  parts.push({ label: 'Scene safety first', got: scene, max: 15, note: c.hazard ? 'Size up, then remove the hazard before hands-on care.' : 'Size up; no need to move this patient.' })

  // 2. Life threats found and fixed in time (40)
  const per = 40 / c.critical.length
  let crit = 0
  const critNotes: string[] = []
  for (const k of c.critical) {
    const ok = [k.action, ...(k.alt ?? [])]
    const e = log.find((l) => ok.includes(l.action))
    if (!e) critNotes.push(`Missed: ${actionById(k.action).label.toLowerCase()}.`)
    else if (e.t <= k.by) crit += per
    else {
      crit += per / 2
      critNotes.push(`Late (${e.t} min, target ≤ ${k.by}): ${actionById(k.action).label.toLowerCase()}.`)
    }
  }
  parts.push({ label: 'Life threats treated in time', got: Math.round(crit), max: 40, note: critNotes.join(' ') || 'All on time.' })

  // 3. Monitoring (15)
  const n = vitalsLog.length
  const mon = n >= 3 ? 15 : n === 2 ? 8 : n === 1 ? 4 : 0
  parts.push({ label: 'Vital signs over time', got: mon, max: 15, note: `${n} set(s) taken. Trends need at least three.` })

  // 4. Secondary survey + communication (10)
  const sec = (log.some((l) => l.action === 'secondary') ? 5 : 0) + (log.some((l) => l.action === 'call') ? 5 : 0)
  parts.push({ label: 'Secondary survey and call for help', got: sec, max: 10, note: 'Head-to-toe + SAMPLE finds hidden problems; an early, clear message starts the evacuation clock.' })

  // 5. Outcome (20)
  const st = status(c, final)
  const out = st === 'critical' ? 0 : st === 'deteriorating' ? 6 : st === 'stable' ? 16 : 20
  parts.push({ label: 'Patient outcome at hand-over', got: out, max: 20, note: `Patient is ${st}.` })

  // Harms (−8 each, once per action)
  const seen = new Set<ActionId>()
  for (const l of log) {
    const why = c.harmful[l.action]
    if (why && !seen.has(l.action)) {
      seen.add(l.action)
      harms.push(why)
    }
  }
  if (c.hazard && first !== 'scene' && first !== 'move') harms.push('You went hands-on before sizing up the scene — in the real world the hazard could have made you a second patient.')
  const raw = parts.reduce((a, p) => a + p.got, 0) - seen.size * 8
  return { score: Math.max(0, Math.min(100, Math.round(raw))), parts, harms }
}

/** Build a SOAP note from the run. */
export function soapNote(c: CaseDef, log: LogEntry[], vitalsLog: Vitals[], final: PatientState): { s: string; o: string[]; a: string[]; p: string[] } {
  const p = c.patient
  const s = `${p.age}-year-old ${p.sex === 'M' ? 'male' : 'female'}, ${c.complaint.charAt(0).toLowerCase() + c.complaint.slice(1)}. SAMPLE — S: ${c.sample.s}. A: ${c.sample.a}. M: ${c.sample.m}. P: ${c.sample.p}. L: ${c.sample.l}. E: ${c.sample.e}.`
  const o: string[] = [`Scene: ${c.env}.${c.hazard ? ` Hazard: ${c.hazard}` : ''}`]
  if (log.some((l) => l.action === 'secondary')) o.push(c.hidden)
  else o.push('Secondary survey not done — other injuries not excluded.')
  for (const v of vitalsLog) o.push(`T+${v.t} min: HR ${v.hr}, RR ${v.rr}, radial pulse ${v.radial}, LOR ${v.lor}, skin ${v.skin}, core ≈ ${v.core} °C`)
  if (vitalsLog.length === 0) o.push('No vital signs recorded.')
  const st = status(c, final)
  const a = [...c.problems]
  const f = lossFraction(final)
  if (final.bleedRate > 0) {
    const ctl = { none: 'NOT controlled', pressure: 'slowed by direct pressure only', pack: 'controlled with packing', tourniquet: 'controlled with a tourniquet (time noted)' }[final.control]
    a.push(`Bleeding ${ctl}. Estimated blood loss ≈ ${Math.round(final.bloodLossMl / 50) * 50} mL (${Math.round(f * 100)} % of volume, class ${['I', 'II', 'III', 'IV'][shockClass(f) - 1]})`)
  }
  a.push(`Overall trend: ${st}`)
  const plan: string[] = log.filter((l) => !['vitals', 'wait', 'scene'].includes(l.action)).map((l) => `T+${l.t}: ${actionById(l.action).label}`)
  const urgent = st === 'critical' || st === 'deteriorating' || c.id === 'coast-sting' || c.id === 'desert-collapse' || f >= 0.15
  plan.push(urgent ? 'Evacuation: URGENT/EMERGENT — request rescue; continue monitoring every 5–15 min.' : 'Evacuation: non-urgent once stable; monitor and reassess.')
  if (!final.called) plan.push('Call for help not yet made — do it now.')
  return { s, o, a, p: plan }
}
