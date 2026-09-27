// Plant ID discipline trainer — pure model.
// Every species here is FICTIONAL. The key is invented so that it behaves like real keys do: edible-in-key
// species have deadly look-alikes that differ in only one or two features, and some features cannot be
// observed on a given day (no flowers out of season). The trainer rewards systematic checking and, above
// all, refusing when the identification is incomplete or a dangerous candidate cannot be excluded.
// It trains discipline, not permission: nothing identified from a course or an app is food.

export type FeatureId = 'leafShape' | 'arrangement' | 'stem' | 'flowers' | 'smell' | 'sap' | 'root'

export const FEATURES: { id: FeatureId; label: string; how: string }[] = [
  { id: 'leafShape', label: 'Leaf shape', how: 'Look at a mature leaf, not a seedling.' },
  { id: 'arrangement', label: 'Leaf arrangement', how: 'How leaves attach along the stem (or only from the base).' },
  { id: 'stem', label: 'Stem', how: 'Section, hairs, markings. In real life, wear gloves: some saps burn skin.' },
  { id: 'flowers', label: 'Flowers', how: 'Shape, colour and arrangement — often absent out of season.' },
  { id: 'smell', label: 'Smell of a crushed leaf', how: 'Smell only; never taste. In real life, gloves and wash hands.' },
  { id: 'sap', label: 'Sap', how: 'Colour of sap from a snapped leaf stalk.' },
  { id: 'root', label: 'Root', how: 'Virtual only — uprooting wild plants without permission is illegal in many places.' },
]

export type Status = 'edible-in-key' | 'toxic' | 'deadly'

export interface KeySpecies {
  id: string
  name: string
  status: Status
  traits: Record<FeatureId, string>
}

export const UNKNOWN = 'not observable today'

export const KEY: KeySpecies[] = [
  { id: 'chivegrass', name: 'Meadow chivegrass', status: 'edible-in-key', traits: { leafShape: 'grass-like', arrangement: 'basal only', stem: 'none — leaves from the ground', flowers: 'white stars on a leafless stalk', smell: 'onion', sap: 'clear', root: 'bulb' } },
  { id: 'starlily', name: 'Mourning star-lily', status: 'deadly', traits: { leafShape: 'grass-like', arrangement: 'basal only', stem: 'none — leaves from the ground', flowers: 'white stars on a leafless stalk', smell: 'none', sap: 'clear', root: 'bulb' } },
  { id: 'lacewort', name: 'Lacewort carrot', status: 'edible-in-key', traits: { leafShape: 'fern-like, finely divided', arrangement: 'alternate', stem: 'hollow, hairy, green', flowers: 'white umbrella cluster', smell: 'carrot', sap: 'clear', root: 'taproot' } },
  { id: 'hemlace', name: 'Spotted hemlace', status: 'deadly', traits: { leafShape: 'fern-like, finely divided', arrangement: 'alternate', stem: 'hollow, smooth, purple-blotched', flowers: 'white umbrella cluster', smell: 'musty, mousy', sap: 'clear', root: 'taproot' } },
  { id: 'cowlace', name: 'Marsh cowlace', status: 'deadly', traits: { leafShape: 'fern-like, finely divided', arrangement: 'alternate', stem: 'hollow, smooth, green', flowers: 'white umbrella cluster', smell: 'carrot', sap: 'clear', root: 'chambered rootstock' } },
  { id: 'heartsorrel', name: 'Heartleaf sorrel', status: 'edible-in-key', traits: { leafShape: 'heart-shaped', arrangement: 'alternate', stem: 'round, solid', flowers: 'yellow, four petals', smell: 'none', sap: 'clear', root: 'fibrous' } },
  { id: 'nightbell', name: 'Bell nightleaf', status: 'toxic', traits: { leafShape: 'heart-shaped', arrangement: 'alternate', stem: 'round, solid', flowers: 'purple bells', smell: 'none', sap: 'clear', root: 'fibrous' } },
  { id: 'mintstem', name: 'Square mintstem', status: 'edible-in-key', traits: { leafShape: 'lance-shaped', arrangement: 'opposite', stem: 'square', flowers: 'purple bells', smell: 'minty', sap: 'clear', root: 'fibrous' } },
  { id: 'bittersquare', name: 'Bitter squarestem', status: 'toxic', traits: { leafShape: 'lance-shaped', arrangement: 'opposite', stem: 'square', flowers: 'purple bells', smell: 'none', sap: 'clear', root: 'fibrous' } },
  { id: 'palespurge', name: 'Pale spurge', status: 'toxic', traits: { leafShape: 'lance-shaped', arrangement: 'alternate', stem: 'round, solid', flowers: 'yellow, four petals', smell: 'none', sap: 'milky', root: 'fibrous' } },
]

export interface Specimen {
  id: string
  context: string
  traits: Record<FeatureId, string>
  /** Debrief: what the specimen really was and the lesson. */
  debrief: string
}

const t = (s: string): Record<FeatureId, string> => ({ ...KEY.find((k) => k.id === s)!.traits })

export const SPECIMENS: Specimen[] = [
  { id: 'r1', context: 'Damp meadow, late spring. Clumps of grass-like leaves; some plants flowering.', traits: t('chivegrass'), debrief: 'Meadow chivegrass. Only the smell separates it from the deadly star-lily — anyone who stopped at leaves, flowers and bulb could not tell them apart. Real-world analogue: wild onions vs death camas.' },
  { id: 'r2', context: 'Rocky slope, spring. Grass-like leaves from a bulb, white flower stalks.', traits: t('starlily'), debrief: 'Mourning star-lily — deadly. It matches chivegrass on six of seven features. No onion smell means refuse.' },
  { id: 'r3', context: 'Field margin, early summer. Feathery leaves; flower heads not yet open.', traits: { ...t('lacewort'), flowers: UNKNOWN }, debrief: 'Lacewort carrot. Even without flowers the hairy green stem, carrot smell and taproot exclude both deadly umbels. The key still separates it — but only after checking stem, smell and root.' },
  { id: 'r4', context: 'Roadside ditch, summer. Tall plant, feathery leaves, white umbrella flowers.', traits: t('hemlace'), debrief: 'Spotted hemlace — deadly. Smooth purple-blotched stem and mousy smell. Real-world analogue: poison hemlock beside wild carrot.' },
  { id: 'r5', context: 'Woodland edge, autumn. Heart-shaped leaves; flowering is over.', traits: { ...t('heartsorrel'), flowers: UNKNOWN }, debrief: 'Heartleaf sorrel — but on this day nobody could know that. Without flowers it cannot be separated from toxic bell nightleaf. The only correct answer was to refuse.' },
  { id: 'r6', context: 'Hedge bank, summer. Feathery leaves, hairy stem, white umbrella flowers.', traits: { leafShape: 'fern-like, finely divided', arrangement: 'alternate', stem: 'hollow, hairy, green', flowers: 'white umbrella cluster', smell: 'musty, mousy', sap: 'clear', root: 'taproot' }, debrief: 'Not in the key. It matches lacewort carrot on leaves, stem and flowers — then smells wrong. A plant that fits "most" features is not identified; it is unknown.' },
  { id: 'r7', context: 'Stream bank, summer. Square stems, opposite leaves, purple flowers.', traits: t('mintstem'), debrief: 'Square mintstem. Its toxic look-alike differs only in smell — you needed to check it.' },
  { id: 'r8', context: 'Marsh edge, summer. Feathery leaves, white umbrella flowers, smells of carrot.', traits: t('cowlace'), debrief: 'Marsh cowlace — deadly, and it smells of carrot. Smooth stem and chambered rootstock separate it from lacewort carrot. Real-world analogue: water hemlock, among the most toxic plants in North America.' },
]

export type Decision = 'eat' | 'refuse' | 'expert'

export const DECISIONS: { id: Decision; label: string }[] = [
  { id: 'refuse', label: 'Refuse — identification incomplete or a dangerous candidate remains' },
  { id: 'expert', label: 'Positive key ID — record it and have a local expert confirm in person' },
  { id: 'eat', label: 'Eat it' },
]

/** Key species consistent with the features inspected so far. Unobservable features cannot exclude anything. */
export function candidates(sp: Specimen, inspected: FeatureId[]): KeySpecies[] {
  return KEY.filter((k) => inspected.every((f) => sp.traits[f] === UNKNOWN || k.traits[f] === sp.traits[f]))
}

export interface RoundResult {
  score: number
  safe: boolean
  justified: boolean
  poisoned: boolean
  remaining: KeySpecies[]
  message: string
}

const ALL: FeatureId[] = FEATURES.map((f) => f.id)

export function evaluateRound(sp: Specimen, inspected: FeatureId[], decision: Decision): RoundResult {
  const truth = candidates(sp, ALL)
  const safe = truth.length === 1 && truth[0].status === 'edible-in-key'
  const remaining = candidates(sp, inspected)
  const justified = remaining.length === 1 && remaining[0].status === 'edible-in-key'
  const danger = remaining.filter((k) => k.status !== 'edible-in-key')
  let score = 0
  let message = ''
  let poisoned = false

  if (decision === 'refuse') {
    if (!safe) { score = 100; message = 'Correct refusal.' }
    else if (justified) { score = 70; message = 'Safe choice. Your checks did isolate an edible-in-key species — refusing is never wrong, and in real life an in-person expert is still the next step.' }
    else { score = 90; message = 'Good discipline: with the checks you made, the ID was not complete, so refusing was right. More checks could have finished the key.' }
  } else if (decision === 'expert') {
    if (safe && justified) { score = 100; message = 'Systematic and complete: every candidate but one was excluded. Recording it for expert confirmation is the right next step.' }
    else if (safe) { score = 40; message = 'Right answer by luck — your checks left other candidates open.' }
    else if (justified) { score = 15; message = 'You stopped checking once it “matched”. The features you skipped would have shown it is not what you thought.' }
    else { score = 5; message = danger.length ? `Claimed an ID while ${danger.map((d) => d.name).join(', ')} could not be excluded.` : 'Claimed an ID for a plant that is not in the key.' }
  } else {
    if (safe && justified) { score = 30; message = 'The key ID was complete — but eating on a course-trained ID is exactly what this course forbids. Real keys, real look-alikes, and real consequences need an in-person expert.' }
    else { score = 0; poisoned = !safe; message = safe ? 'You ate on an incomplete identification. It happened to be harmless; the habit is what kills.' : 'Poisoned. The identification was incomplete or wrong, and a dangerous plant was eaten.' }
  }
  return { score, safe, justified, poisoned, remaining, message }
}

export function sessionScore(rounds: RoundResult[]): number {
  if (!rounds.length) return 0
  const avg = rounds.reduce((a, r) => a + r.score, 0) / rounds.length
  // Any poisoning caps the session: one fatal error outweighs many good calls.
  return Math.round(rounds.some((r) => r.poisoned) ? Math.min(avg, 40) : avg)
}
