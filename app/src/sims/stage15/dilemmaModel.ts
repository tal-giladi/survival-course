// Priority dilemmas: a timed sequence of leadership decisions on a mountain ridge day.
// Stress and fatigue shrink the time available for each decision and narrow attention (subtle cues are
// hidden). Not deciding in time means the default happens — usually "carry on as we were".
// The debrief surfaces the cognitive biases behind each choice. Pure logic, deterministic, unit-tested.

export type Bias = 'plan-continuation' | 'sunk-cost' | 'normalization-of-deviance' | 'groupthink' | 'tunnel-vision'

export const BIASES: Bias[] = ['plan-continuation', 'sunk-cost', 'normalization-of-deviance', 'groupthink', 'tunnel-vision']

export const BIAS_LABEL: Record<Bias, string> = {
  'plan-continuation': 'Plan continuation',
  'sunk-cost': 'Sunk cost',
  'normalization-of-deviance': 'Normalization of deviance',
  groupthink: 'Groupthink',
  'tunnel-vision': 'Tunnel vision / goal fixation',
}

export const BIAS_EXPLAIN: Record<Bias, string> = {
  'plan-continuation': 'Sticking with the original plan after the conditions it was built for have changed. The cure is a pre-set trigger (turnaround time, weather rule) and re-planning out loud whenever new evidence arrives.',
  'sunk-cost': 'Letting what you have already spent (the drive, the effort, the blister) justify spending more risk. Past costs are gone whichever way you choose; only future costs and benefits count.',
  'normalization-of-deviance': 'Treating a warning sign as normal because it has not hurt you before — "it rumbles every afternoon". Near-misses are counted as proof of safety, so the margin quietly shrinks.',
  groupthink: 'A group converging on the option nobody wants to challenge. A show of hands with the leader’s wish visible, or following the loudest voice, is not a check. Ask the quietest person first; appoint a devil’s advocate.',
  'tunnel-vision': 'Attention narrowed onto one goal (get down fast, get the summit) so that other hazards drop out of view — a normal effect of stress and fatigue.',
}

export interface Effect {
  minutes?: number
  fatigue?: number
  stress?: number
  risk?: number
  flags?: string[]
}

export interface DOption {
  id: string
  text: string
  quality: 0 | 1 | 2
  biases?: Bias[]
  effect: Effect
  feedback: string
}

export interface Cue {
  text: string
  /** Subtle cues are missed when attention is narrowed by stress or fatigue. */
  subtle?: boolean
}

export interface Dilemma {
  id: string
  title: string
  text: string
  cues: Cue[]
  options: DOption[]
  /** What happens if you do not decide in time. */
  defaultOption: string
  /** Minutes of walking to the next scene, added after the choice. */
  leg: number
  /** Stress added when the scene begins (a storm hitting, darkness). */
  enterStress?: number
  /** Only shown when this returns true (evaluated when the scene is reached). */
  when?: (s: PDState) => boolean
}

export interface DecisionRecord {
  dilemma: string
  option: string
  timedOut: boolean
  quality: 0 | 1 | 2
  biases: Bias[]
  stress: number
  fatigue: number
  limit: number
  clock: number
  missedCues: string[]
}

export interface PDState {
  /** Index into DILEMMAS of the next scene to consider. */
  step: number
  /** Minutes since midnight. */
  clock: number
  fatigue: number
  stress: number
  risk: number
  flags: string[]
  log: DecisionRecord[]
  stops: number
  /** Index of the scene where a STOP was last taken (one per scene). */
  stoppedAt: number
  /** Scene index whose entry stress has already been applied. */
  entered: number
  done: boolean
}

export const START_CLOCK = 7 * 60 + 30
export const SUNSET = 17 * 60 + 30
export const DUSK_CHECK = 16 * 60
export const BASE_SECONDS = 30
export const MIN_SECONDS = 8
/** Fatigue added per hour of walking. */
export const FATIGUE_PER_HOUR = 5

export const DILEMMAS: Dilemma[] = [
  {
    id: 'forecast',
    title: 'Trailhead, 07:30 — the forecast changes',
    text: 'You are leading Ana, Sam and Dana on a 16 km autumn ridge loop. Your plan: summit about 12:00, **turnaround 12:30**, car by 16:30, sunset 17:30 — set when the forecast said “storms possible after 14:00”. At the trailhead one bar of signal brings an update: **isolated thunderstorms from about 12:00**. You drove four hours; this is the only free weekend for a month. Ana: “They always forecast storms in autumn.” Sam and Dana look at you.',
    cues: [
      { text: 'The update moves the storm window 2 hours earlier than the plan assumed.' },
      { text: 'Your turnaround time was chosen for the old forecast.' },
      { text: 'After the col there is no easy way off the crest for 6 km.', subtle: true },
    ],
    options: [
      { id: 'reset', text: 'Keep the day but re-plan now: new turnaround 11:00 at the col, valley path as the return, and say the rule out loud to everyone.', quality: 2, effect: { minutes: 10, stress: -5, flags: ['replanned'] }, feedback: 'New evidence, new plan — made before commitment has built up, and shared so anyone can call it.' },
      { id: 'asis', text: 'Go as planned with the 12:30 turnaround and keep an eye on the sky.', quality: 1, biases: ['plan-continuation'], effect: { risk: 5 }, feedback: 'Acceptable, but the turnaround was set for a different forecast. Keeping it unchanged is plan continuation in its mildest form.' },
      { id: 'drove', text: '“We drove four hours. We are doing the full ridge whatever happens.”', quality: 0, biases: ['sunk-cost'], effect: { risk: 12, stress: 5, flags: ['committed'] }, feedback: 'The four hours are spent whichever way you choose. Using them to justify more risk is the sunk-cost trap — and saying it out loud makes turning back harder later.' },
      { id: 'vote', text: 'Quick show of hands after you say “I reckon we’re fine” — everyone agrees. Go.', quality: 0, biases: ['groupthink'], effect: { risk: 8 }, feedback: 'A vote after the leader has said what they want is not a check; nobody wants to be the one who cancelled the trip.' },
    ],
    defaultOption: 'asis',
    leg: 150,
  },
  {
    id: 'blister',
    title: 'Km 5 — Dana slows down',
    text: 'Dana has a heel blister and has slowed. You are 40 minutes behind schedule. She says: “I’m fine, go on, don’t wait for me.”',
    cues: [
      { text: 'At this pace you will reach the col about when the storms are forecast.' },
      { text: 'Dana is quieter than usual and has stopped drinking at breaks.', subtle: true },
    ],
    options: [
      { id: 'treat', text: 'Stop 15 minutes: treat the blister properly, everyone eats and drinks; then recompute the turnaround from your real pace.', quality: 2, effect: { minutes: 15, fatigue: -5, stress: -5, flags: ['treated'] }, feedback: 'Fixing a small problem early is cheaper than a big one later — and re-planning from actual pace is the opposite of plan continuation.' },
      { id: 'push', text: 'Speed up to win back the lost time — “we can still make it”.', quality: 0, biases: ['plan-continuation'], effect: { minutes: -10, fatigue: 15, risk: 8 }, feedback: 'Making reality fit the schedule, instead of the schedule fit reality. Speed costs energy and the blister gets worse.' },
      { id: 'split', text: 'Send Dana back to the car alone and carry on with the others.', quality: 0, biases: ['tunnel-vision'], effect: { risk: 15, flags: ['split'] }, feedback: 'Splitting the group to protect the goal leaves an injured, quiet person alone on a mountain with storms forecast.' },
      { id: 'tape', text: 'Quick tape without taking the boot off; keep the old schedule.', quality: 1, biases: ['plan-continuation'], effect: { minutes: 5, fatigue: 5, risk: 4 }, feedback: 'Better than nothing, but the schedule itself is the problem and it was not revisited.' },
    ],
    defaultOption: 'tape',
    leg: 60,
  },
  {
    id: 'col',
    title: 'The col — towers building',
    text: 'Towering cumulus to the west, and a first, distant rumble of thunder. The summit is 45 minutes away along an exposed crest. Sam: “It’s rumbled like this every afternoon this week and it never came to anything.” Ana: “We’ve come all this way, with Dana’s foot and everything.”',
    cues: [
      { text: 'If you can hear thunder, you are within striking distance of lightning.' },
      { text: 'The anvil tops are drifting towards the ridge.', subtle: true },
    ],
    options: [
      { id: 'turn', text: 'Turn back now and take the valley path off the crest.', quality: 2, effect: { stress: -5, flags: ['turned'] }, feedback: 'The storm rule wins over the summit. The mountain will be there next month.' },
      { id: 'sunk', text: '“We’ve come all this way and suffered for it — we’re not leaving without the summit.”', quality: 0, biases: ['sunk-cost', 'plan-continuation'], effect: { minutes: 90, fatigue: 10, risk: 18, flags: ['summited'] }, feedback: 'The effort already spent does not make the crest any safer in a thunderstorm.' },
      { id: 'usual', text: 'Agree with Sam — it has been fine all week. Carry on along the crest.', quality: 0, biases: ['normalization-of-deviance'], effect: { minutes: 90, fatigue: 10, risk: 18, flags: ['summited'] }, feedback: '“It never came to anything” is exactly how warning signs become normal. Past luck is not evidence of safety.' },
      { id: 'wait', text: 'Wait at the col for 20 minutes and see what the cloud does.', quality: 1, biases: ['plan-continuation'], effect: { minutes: 20, risk: 6 }, feedback: 'Waiting on an exposed col keeps the summit alive and costs you your margin. If you wait, wait lower.' },
    ],
    defaultOption: 'wait',
    leg: 60,
  },
  {
    id: 'storm',
    title: 'On the crest — the storm arrives',
    text: 'Hail. A flash, and thunder about 3 seconds later. Your trekking poles buzz. Dana is frightened and has stopped moving.',
    cues: [
      { text: '3 seconds from flash to bang is roughly 1 km away.' },
      { text: 'A gully 100 m back leads off the crest to lower, broken ground.', subtle: true },
    ],
    options: [
      { id: 'descend', text: 'Get off the crest at once by the nearest safe way down; poles away from the body; spread out at least 15 m apart; give Dana one clear job: “follow Ana’s red jacket”.', quality: 2, effect: { minutes: 40, risk: 4, stress: -5 }, feedback: 'Height first, then spacing. A frozen person needs one short instruction, not a debate.' },
      { id: 'overhang', text: 'Shelter together under the overhanging boulder on the crest.', quality: 0, biases: ['tunnel-vision'], effect: { minutes: 40, risk: 15, stress: 5 }, feedback: 'Shelter from the hail, but overhangs and shallow caves on high ground are dangerous in lightning (current can jump the gap), and bunching up risks multiple casualties.' },
      { id: 'huddle', text: 'Stop and huddle together to calm Dana down.', quality: 0, effect: { minutes: 30, risk: 12 }, feedback: 'Staying high and bunched is the freeze response in group form. Comfort her while moving down.' },
      { id: 'continue', text: 'Keep going to the planned descent path — only 40 minutes more.', quality: 0, biases: ['plan-continuation'], effect: { minutes: 40, fatigue: 5, risk: 18 }, feedback: 'The plan’s descent route is not the nearest way off the high ground.' },
    ],
    defaultOption: 'huddle',
    leg: 0,
    enterStress: 25,
    when: (s) => s.flags.includes('summited'),
  },
  {
    id: 'shortcut',
    title: 'The descent — a shortcut',
    text: 'The path zig-zags slowly down. A faint trail drops straight into a gully marked on no path map. Ana: “That’ll save an hour — look, there are footprints.” Everyone is tired and wants to be down.',
    cues: [
      { text: 'Footprints show someone went down — not that they got down.' },
      { text: 'Your map’s contours bunch together at the bottom of the gully: a cliff band.', subtle: true },
    ],
    options: [
      { id: 'known', text: 'Stay on the known path, even though it is slower.', quality: 2, effect: { minutes: 60, fatigue: 8 }, feedback: 'Known ground at the end of a tiring day is worth the hour.' },
      { id: 'gully', text: 'Take the gully — you want to be down.', quality: 0, biases: ['tunnel-vision'], effect: { minutes: 90, fatigue: 15, stress: 15, risk: 15 }, feedback: 'The gully cliffs out and you have to climb back up. “Get down fast” pushed the map out of view.' },
      { id: 'scout', text: 'Check the map carefully first, then decide together.', quality: 1, effect: { minutes: 65, fatigue: 8, risk: 2 }, feedback: 'Checking the map turns up the cliff band and you take the path — a good habit, at some cost in time.' },
      { id: 'follow', text: 'Everyone is keen, nobody objects — follow Ana.', quality: 0, biases: ['groupthink'], effect: { minutes: 90, fatigue: 15, stress: 15, risk: 15 }, feedback: 'Silence is not agreement. When nobody decides, the loudest voice does.' },
    ],
    defaultOption: 'follow',
    leg: 120,
  },
  {
    id: 'dusk',
    title: 'Racing the dark',
    text: 'The light is going — sunset is 17:30 — and it is 4 km to the car on a rough path. Dana is exhausted and stumbling. There are two head torches between four people.',
    cues: [
      { text: 'Falls on rough ground rise sharply with exhaustion and darkness.' },
      { text: 'Everyone has missed a meal; low blood sugar makes people irritable and clumsy.', subtle: true },
    ],
    options: [
      { id: 'slow', text: 'Stop 5 minutes: eat, drink, torches at front and back, walk slowly together on the path, and text your contact a new ETA.', quality: 2, effect: { minutes: 100, fatigue: 5, risk: 3 }, feedback: 'Slow and together, fed and lit — and the people waiting for you know.' },
      { id: 'rush', text: 'Race the light — go as fast as possible.', quality: 0, biases: ['plan-continuation'], effect: { minutes: 70, fatigue: 20, risk: 10 }, feedback: 'You lose the race anyway, now more tired. The fall risk climbs with speed and fatigue.' },
      { id: 'ahead', text: 'Sam runs ahead alone to fetch the spare torch from the car.', quality: 0, biases: ['tunnel-vision'], effect: { minutes: 100, risk: 10, flags: ['split'] }, feedback: 'Now two groups, one of them alone in the dark with no torch.' },
      { id: 'bivvy', text: 'Stop where you are and prepare to spend the night, having texted your contact.', quality: 1, effect: { minutes: 30, fatigue: -5, risk: 5 }, feedback: 'Defensible if you have insulation — but on a known path with two torches, walking slowly out is better.' },
    ],
    defaultOption: 'rush',
    leg: 0,
    enterStress: 15,
    when: (s) => s.clock >= DUSK_CHECK,
  },
  {
    id: 'car',
    title: 'Back at the car',
    text: 'Whatever happened on the way, you are all at the car. Sam: “Well, we survived — so it was fine, wasn’t it?”',
    cues: [
      { text: 'A good outcome does not prove the decisions were good.' },
      { text: 'Dana has said almost nothing for an hour.', subtle: true },
    ],
    options: [
      { id: 'aar', text: 'Ten-minute after-action review: what did we plan, what happened, why, what will we do differently? Ask Dana first.', quality: 2, effect: { minutes: 10, stress: -10 }, feedback: 'Reviewing close calls while they are fresh is how groups stop normalising them.' },
      { id: 'lucky', text: 'Celebrate — it worked out, so the decisions were fine.', quality: 0, biases: ['normalization-of-deviance'], effect: {}, feedback: 'Outcome bias: counting a lucky escape as proof that the plan was good is how the margin shrinks next time.' },
      { id: 'blame', text: 'Point out that Dana’s blister ruined the day.', quality: 0, effect: { stress: 10 }, feedback: 'Blame closes down the honest review the group needs — and the blister was not the problem.' },
      { id: 'later', text: 'Agree to talk it through next week.', quality: 1, effect: {}, feedback: 'Better than nothing, but details and feelings fade quickly.' },
    ],
    defaultOption: 'lucky',
    leg: 0,
  },
]

const clamp = (v: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, v))

export function initialState(): PDState {
  return { step: 0, clock: START_CLOCK, fatigue: 10, stress: 20, risk: 0, flags: [], log: [], stops: 0, stoppedAt: -1, entered: -1, done: false }
}

/** Index of the next dilemma to show (skipping those whose condition fails), or -1 when finished. */
export function nextIndex(s: PDState): number {
  for (let i = s.step; i < DILEMMAS.length; i++) {
    const d = DILEMMAS[i]
    if (!d.when || d.when(s)) return i
  }
  return -1
}

/**
 * Move to the next scene and apply its entry stress. Idempotent for the same scene.
 * Returns a finished state if nothing is left.
 */
export function enter(s: PDState): PDState {
  if (s.done) return s
  const i = nextIndex(s)
  if (i < 0) return { ...s, done: true }
  if (s.entered === i && s.step === i) return s
  const d = DILEMMAS[i]
  return { ...s, step: i, entered: i, stress: clamp(s.stress + (d.enterStress ?? 0)) }
}

export function current(s: PDState): Dilemma | undefined {
  if (s.done) return undefined
  const i = nextIndex(s)
  return i < 0 ? undefined : DILEMMAS[i]
}

/** Attention is narrowed: subtle cues are missed. */
export function narrowed(s: PDState): boolean {
  return s.stress >= 60 || s.fatigue >= 70
}

export function visibleCues(s: PDState, d: Dilemma): Cue[] {
  return narrowed(s) ? d.cues.filter((c) => !c.subtle) : d.cues
}

/** Seconds available for the current decision; shrinks with stress and fatigue. */
export function timeLimit(s: PDState): number {
  const t = BASE_SECONDS * (1 - 0.35 * s.stress / 100) * (1 - 0.35 * s.fatigue / 100)
  return Math.max(MIN_SECONDS, Math.round(t))
}

export function canStop(s: PDState): boolean {
  return !s.done && s.stoppedAt !== nextIndex(s)
}

/** STOP: a minute of slow breathing and a look around. Costs 5 minutes of daylight; lowers stress. */
export function takeStop(s: PDState): PDState {
  if (!canStop(s)) return s
  return { ...s, clock: s.clock + 5, stress: clamp(s.stress - 20), stops: s.stops + 1, stoppedAt: nextIndex(s) }
}

/** Apply a choice to the current dilemma; `null` means the timer ran out and the default happens. */
export function choose(s0: PDState, optionId: string | null): PDState {
  const s = enter(s0)
  if (s.done) return s
  const i = s.step
  const d = DILEMMAS[i]
  const timedOut = optionId === null
  const opt = d.options.find((o) => o.id === (optionId ?? d.defaultOption))
  if (!opt) throw new Error(`unknown option ${optionId} for ${d.id}`)
  const e = opt.effect
  const walked = Math.max(0, (e.minutes ?? 0) + d.leg)
  const rec: DecisionRecord = {
    dilemma: d.id,
    option: opt.id,
    timedOut,
    quality: opt.quality,
    biases: opt.biases ?? [],
    stress: Math.round(s.stress),
    fatigue: Math.round(s.fatigue),
    limit: timeLimit(s),
    clock: s.clock,
    missedCues: narrowed(s) ? d.cues.filter((c) => c.subtle).map((c) => c.text) : [],
  }
  const next: PDState = {
    ...s,
    clock: s.clock + (e.minutes ?? 0) + d.leg,
    fatigue: clamp(s.fatigue + (e.fatigue ?? 0) + (walked / 60) * FATIGUE_PER_HOUR),
    stress: clamp(s.stress + (e.stress ?? 0) + (timedOut ? 10 : 0)),
    risk: s.risk + (e.risk ?? 0) + (timedOut ? 2 : 0),
    flags: [...s.flags, ...(e.flags ?? [])],
    log: [...s.log, rec],
    step: i + 1,
  }
  return nextIndex(next) < 0 ? { ...next, done: true } : enter(next)
}

export type Outcome = 'home' | 'close-call' | 'incident'

export const OUTCOME_LABEL: Record<Outcome, string> = {
  home: 'Home safe, with margin to spare',
  'close-call': 'Home — but it was a close call',
  incident: 'An incident: someone was hurt or the group was benighted in a storm-soaked, split-up mess',
}

export function outcomeOf(s: PDState): Outcome {
  if (s.risk < 10) return 'home'
  if (s.risk < 35) return 'close-call'
  return 'incident'
}

export interface Debrief {
  score: number
  outcome: Outcome
  biasCounts: Record<Bias, number>
  timeouts: number
  missedCues: string[]
  stops: number
  notes: string[]
}

export function debrief(s: PDState): Debrief {
  const n = s.log.length
  const q = s.log.reduce((a, r) => a + r.quality, 0)
  const timeouts = s.log.filter((r) => r.timedOut).length
  const outcome = outcomeOf(s)
  let score = n ? Math.round((100 * q) / (2 * n)) - 5 * timeouts : 0
  if (outcome === 'incident') score = Math.min(score, 40)
  score = clamp(score)
  const biasCounts = Object.fromEntries(BIASES.map((b) => [b, 0])) as Record<Bias, number>
  for (const r of s.log) for (const b of r.biases) biasCounts[b]++
  const missedCues = s.log.flatMap((r) => r.missedCues)
  const notes: string[] = []
  if (timeouts) notes.push(`You ran out of time ${timeouts}× — and each time the default happened: the group carried on as before. Not deciding is a decision, usually for plan continuation.`)
  if (missedCues.length) notes.push('High stress or fatigue hid some cues from you (listed below). Narrowed attention is normal; a STOP, food, water and a second pair of eyes widen it again.')
  if (s.stops === 0 && s.log.some((r) => r.stress >= 50)) notes.push('You never took a STOP. One minute of slow breathing lowers arousal, buys back decision time and lets missed cues back in.')
  if (s.flags.includes('split')) notes.push('The group split. Separating people to protect the objective is a classic tunnel-vision move; keep groups together unless there is a clear, planned reason.')
  if (s.flags.includes('replanned') || s.flags.includes('turned')) notes.push('You changed the plan when the evidence changed — the single most protective habit against all five traps.')
  if (!notes.length) notes.push('Clean decisions. Now try again under full time pressure, or with a different first choice, and watch how one early commitment shapes everything after it.')
  return { score, outcome, biasCounts, timeouts, missedCues, stops: s.stops, notes }
}

export function clockLabel(min: number): string {
  const h = Math.floor(min / 60) % 24
  const m = Math.round(min % 60)
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

/** Run a whole day from a policy (used by tests): the policy returns an option id, 'stop', or null (time out). */
export function runPolicy(policy: (s: PDState, d: Dilemma) => string | null): PDState {
  let s = enter(initialState())
  for (let guard = 0; !s.done && guard < 50; guard++) {
    const d = current(s)!
    const pick = policy(s, d)
    if (pick === 'stop') {
      s = takeStop(s)
      const again = policy(s, d)
      s = choose(s, again === 'stop' ? d.defaultOption : again)
    } else s = choose(s, pick)
  }
  return s
}
