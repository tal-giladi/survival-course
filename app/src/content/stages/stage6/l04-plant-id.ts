import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's6-l4',
  stage: 6,
  order: 4,
  title: 'Plant identification discipline',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s6-l3'],
  concepts: ['plant-id-discipline', 'toxic-lookalikes', 'edibility-test-myth', 'foraging-law', 'energy-return'],
  objectives: [
    'Use a **botanical key** systematically: every feature, mature specimens, in season.',
    'Explain why **deadly look-alikes** make “it looks like…” worthless, with real examples of confusion pairs.',
    'Explain why the so-called **universal edibility test is unreliable** and should never be used as an identification method.',
    'Weigh the small **energy return** of most wild plants against the risks, and know the **legal limits** on picking.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'This lesson trains discipline, not foraging',
      md: 'Nothing in this course makes any wild plant safe for you to eat. Never eat a plant identified from a course, a book alone, a photo or an app. Real foraging needs a regional key, repeated in-person teaching by a qualified local expert, and years of practice — and even experts are poisoned.',
    },
    {
      type: 'md',
      md: `### Why plants are hard

Several of the most toxic plants in temperate regions are common, grow in the same places as popular wild foods, and share their obvious features. Classic real-world confusions include:

| Sought for food | Deadly or dangerous look-alike | Region |
|---|---|---|
| Wild carrot, wild parsnip | **Poison hemlock**, **water hemlock** (carrot family) | Europe, North America |
| Wild garlic (ramsons) | **Lily of the valley**, **autumn crocus** | Europe |
| Wild onions | **Death camas** | North America |
| Wild leeks (ramps) | **False hellebore** (*Veratrum*) | North America, Europe |
| Comfrey, borage | **Foxglove** (before flowering) | Europe, widely naturalised |

Water hemlock is often described as among the most toxic plants in North America: a small piece of root can cause seizures within an hour. Foxglove and lily of the valley contain cardiac glycosides that disturb heart rhythm. None of these announce themselves by taste.

### How identification actually works

A **dichotomous key** asks paired questions — *leaves opposite or alternate? stem round or square? flower parts in fours or fives?* — and each answer removes candidates until one remains. Discipline means:

1. **Check every feature the key uses**, not the ones that are easy to see. Leaves, arrangement, stem (section, hairs, markings), flowers (number of parts, symmetry, arrangement), fruit/seed, root, smell, sap, habitat, season.
2. **Mature, complete specimens.** Seedlings and plants out of flower often cannot be keyed. If a diagnostic feature is missing today, the identification is **incomplete** — full stop.
3. **Several specimens** — individuals vary.
4. **Exclude every look-alike** that occurs in your region, positively, by the features that separate them.
5. **Right part, right stage, right preparation.** Many plants are edible in one part or season and toxic in another; some need processing (s6-l3).
6. **Confirm in person** with a qualified local expert until you are one.

Beginners are commonly advised to **avoid the whole carrot family (Apiaceae)**: it contains several of the deadliest plants and many harmless-looking relatives.`,
    },
    { type: 'diagram', id: 'lookalike-pair', caption: 'Fictional plants: same flowers, same leaves — the differences are in the features people skip.' },
    { type: 'diagram', id: 'id-funnel', caption: 'Every gate must pass. Any doubt at any gate exits to “do not eat”.' },
    {
      type: 'md',
      md: `### The “universal edibility test” is unreliable

Some military and popular survival manuals describe a **“universal edibility test”**: separate plant parts, rub on skin, hold on the lips, chew, wait hours, eat a little more, and so on. It is widely criticised by toxicologists and **should not be used as a way to identify food**:

- **Small amounts can kill.** Water hemlock, some *Aconitum* and cardiac-glycoside plants are dangerous in quantities the test would have you swallow.
- **Delayed toxins.** Some poisons cause no symptoms for many hours or days (the deadliest fungi are the textbook case — and manuals themselves say the test does not apply to fungi). A “pass” after 8 hours means nothing.
- **Cumulative toxins** (for example pyrrolizidine alkaloids that damage the liver) show no acute effect at all.
- **Taste is not toxicity.** Many deadly plants taste mild; many safe ones are bitter.
- **Energy.** A day of testing one plant costs time and energy and yields a few leaves worth tens of kilocalories.

At best it is a desperate last resort for a long-term situation — and in every short emergency the right answer is to **ration, stay found, and not eat unknown plants**.`,
    },
    {
      type: 'md',
      md: `### The energy reality

Most wild **greens** provide roughly **20–50 kcal per 100 g** — a kilogram of leaves is a few hundred kilocalories. Calorie-dense wild foods (nuts, seeds, starchy roots and tubers) are seasonal, often need heavy processing, and take real labour to gather. In a 72-hour emergency, plant foraging almost never repays its energy and risk. Its value is long-term, local, expert, and cultural.

### Myths that kill

- “If birds or animals eat it, it’s safe.” Many animals tolerate toxins that kill humans.
- “Poisonous plants taste bitter.” Not reliably.
- “Cooking removes toxins.” Some; many are heat-stable.
- “My app says 95 % match.” Image apps misidentify, cannot smell, dig or cut, and bear no consequences.`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Foraging law varies widely. Nature reserves and many national parks prohibit picking; protected species may not be picked anywhere; in England and Wales uprooting any wild plant without the landowner’s permission is an offence, while Nordic rights of public access allow berry and mushroom picking. In Israel, protected plants may not be picked. Check the land manager and national rules: [References → Law varies by jurisdiction](#/references).',
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Suspected plant poisoning',
      md: 'Call emergency services or a poison centre immediately (in the US, Poison Help 1-800-222-1222), even before symptoms. Keep a sample of the plant for identification. Do not induce vomiting unless told to by a poison centre.',
    },
    { type: 'sim', id: 'plant-id', caption: 'Fictional species, drawn features. You score by checking systematically and refusing when any doubt remains.' },
  ],
  whyItMatters: 'Plant poisonings in foragers often involve confident people who “knew” the plant. The discipline — every feature, every look-alike, in-person confirmation, and a readiness to say no — is transferable to every high-consequence identification you will ever make, from fungi to fuel types to medication labels.',
  science: [
    {
      type: 'md',
      md: `### Probability of a fatal misidentification

Suppose a careless forager is right 99 % of the time, and 1 in 20 of their errors involves a dangerous look-alike. The chance of a dangerous error per new plant eaten is $0.01 \\times 0.05 = 0.0005$. Over 200 identifications:

$$
P(\\text{at least one}) = 1 - (1 - 0.0005)^{200} \\approx 0.095
$$

About a **10 % chance** of a serious poisoning over a foraging “career” — from a 99 %-accurate person. Discipline is about driving the per-identification error toward zero, not about being right usually.

### Why keys work

Each good key question splits the remaining candidates roughly in half. With $n$ binary questions you can separate up to $2^n$ species: 10 questions → 1,024. But the answer to *every* question must be observable and correct: one unobservable feature (no flowers today) can leave two candidates — one of them deadly.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**European beech wood, spring:** wild garlic grows in carpets, sometimes mixed with lily of the valley. The garlic smell of crushed leaves is a key feature — but smell on your fingers from the last leaf confuses the next. Experts check each plant.

**North American meadow:** wild onions and death camas grow side by side; without the onion smell, a grass-like plant with a bulb is not identified.

**Roadside ditch, anywhere temperate:** tall white umbrella-flowered plants — wild carrot, cow parsley, poison hemlock, and near water, water hemlock. Beginners leave the whole family alone.

**Tropics:** enormous plant diversity, little of it in any field guide a visitor carries. Local, living knowledge is the only reliable source.

**Desert:** few edible plants; many with toxic sap. The energy return does not justify the risk.

**Arctic tundra:** some berries are safe and familiar, but a few plants are toxic and the calories are seasonal and small.`,
    },
  ],
  mistakes: [
    'Myth: the universal edibility test can identify safe plants. It cannot — small doses and delayed toxins defeat it.',
    'Stopping as soon as a plant “matches” instead of excluding the look-alikes.',
    'Keying a plant without flowers or fruit when the key needs them.',
    'Trusting an app, a single photo or a friend’s social-media post.',
    'Myth: “Animals eat it, so it’s safe.”',
    'Picking in reserves, uprooting without permission, or taking protected species.',
    'Assuming a plant safe in one part or season is safe in all.',
  ],
  exercises: [
    {
      id: 's6-l4-e1',
      title: 'Identification Discipline Trainer',
      level: 2,
      safety: 'virtual-only',
      minutes: 20,
      steps: [
        'Open the Plant ID trainer below and work through all eight specimens.',
        'For each, write down which features separated the candidates — or which missing feature made refusal the only answer.',
        'Repeat until you score above 90 % with zero poisonings.',
      ],
      success: ['Score ≥ 90 % with no poisonings.', 'You can name the single feature that separated each look-alike pair.'],
      skill: 'plant-id',
      safetyNote: 'Fictional species. This trains the habit of refusing — not permission to forage.',
    },
    {
      id: 's6-l4-e2',
      title: 'Key a common plant — observe only',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A regional botanical key or field guide with a key', 'Hand lens', 'Notebook, camera'],
      steps: [
        'In a garden, or a public space where it is allowed, choose a common flowering plant. Do **not** pick, uproot or taste it.',
        'Record every feature: leaf shape, arrangement, margin, stem section and hairs, flower parts, fruit, habitat.',
        'Work through the key. At each step, write the question and your answer.',
        'List the look-alikes the guide mentions and the feature that excludes each.',
        'Check your result with a local botanist, naturalist group or herbarium volunteer.',
      ],
      success: ['A complete feature record.', 'A keyed identification confirmed by someone qualified.'],
      skill: 'plant-id',
      safetyNote: 'Observation only. Wear gloves if you touch plants — some saps burn skin, especially in sunlight. Never taste.',
    },
    {
      id: 's6-l4-e3',
      title: 'Guided plant walk with a qualified local expert',
      level: 3,
      safety: 'supervised',
      minutes: 120,
      steps: [
        'Join a guided walk run by a botanical society, park ranger or accredited instructor.',
        'Ask the guide to show at least one dangerous look-alike and the features that separate it.',
        'Observe, photograph and take notes. Do not pick or eat anything as part of this exercise.',
      ],
      success: ['You can describe one real look-alike pair from your region and its separating features.'],
      skill: 'plant-id',
    },
  ],
  simulations: ['plant-id'],
  quiz: [
    {
      id: 's6-l4-q2',
      kind: 'single',
      prompt: 'You are keying a plant with feathery leaves and white umbrella-shaped flowers. Which statement is correct?',
      choices: [
        { id: 'a', text: 'The umbrella-shaped flowers identify it; nothing more is needed.', why: 'No — many species share them, some deadly.' },
        { id: 'b', text: 'A carrot smell from a crushed leaf is enough to confirm it.', why: 'Smell helps, but a deadly relative may smell similar, so never alone.' },
        { id: 'c', text: 'Stem, crushed-leaf smell, root and habitat must all be checked.', why: 'Correct — these are the features that separate the look-alikes.' },
        { id: 'd', text: 'Leaves and flowers decide it; root and habitat do not matter.', why: 'Water-loving species and root structure are key separating features.' },
      ],
      answer: 'c',
      concepts: ['plant-id-discipline', 'toxic-lookalikes'],
      explanation: 'In the carrot family, the obvious features are shared; the separating ones are stem (hairs, markings, hollow or solid), smell, root and habitat — and beginners avoid the family entirely.',
    },
    {
      id: 's6-l4-q1',
      kind: 'single',
      prompt: 'Why is the “universal edibility test” unreliable?',
      choices: [
        { id: 'a', text: 'It takes too long to complete, though its results are accurate.', why: 'It is not accurate — that is the core problem.' },
        { id: 'b', text: 'Tiny doses can kill, toxins may act days later, taste reveals nothing.', why: 'Correct — some toxins act after many hours or days, and taste does not reveal toxicity.' },
        { id: 'c', text: 'It only fails for plants with milky sap or a bitter taste.', why: 'Its failures are general.' },
        { id: 'd', text: 'It works well for fungi, but not for flowering plants.', why: 'Backwards — even manuals say it does not apply to fungi.' },
      ],
      answer: 'b',
      concepts: ['edibility-test-myth'],
      explanation: 'The test can “pass” a plant that kills later or poison you during the test itself. Use it for nothing; ration and get rescued.',
    },
    {
      id: 's6-l4-q4',
      kind: 'single',
      prompt: 'In the identification funnel, you have checked every key feature on a mature specimen and positively excluded every regional look-alike. What is the next gate?',
      choices: [
        { id: 'a', text: 'Eat a small amount and wait to see how you react', why: 'Never a gate — tasting is not identification, and some toxins act late.' },
        { id: 'b', text: 'Check that it is legal to pick here', why: 'That is the first gate, before you start keying.' },
        { id: 'c', text: 'Confirm it in person with a local expert', why: 'Correct — expert confirmation comes before any eating.' },
        { id: 'd', text: 'Pick the right part, stage and preparation', why: 'That is the final gate, after expert confirmation.' },
      ],
      answer: 'c',
      concepts: ['plant-id-discipline', 'foraging-law'],
      explanation: 'Legal → every key feature → every look-alike excluded → expert confirmation in person → right part, stage and preparation, small amount. Each gate must pass; failing any exits to “do not eat”.',
    },
    {
      id: 's6-l4-q3',
      kind: 'single',
      prompt: 'You watch deer and birds eating berries from a shrub. What does that tell you about the berries’ safety for you?',
      choices: [
        { id: 'a', text: 'Nothing — animals tolerate many compounds that are toxic to people.', why: 'Correct — animal feeding is no guide to human edibility.' },
        { id: 'b', text: 'They are safe for humans as long as you eat only a few at a time.', why: 'Small amounts of some plants are deadly; animal feeding proves nothing.' },
        { id: 'c', text: 'They are safe because birds and deer both eat them, not just one.', why: 'Two species tolerating a toxin says nothing about human tolerance.' },
        { id: 'd', text: 'They are safe once they have been cooked thoroughly over a fire.', why: 'Many plant toxins survive cooking, and the premise is still a myth.' },
      ],
      answer: 'a',
      concepts: ['plant-id-discipline'],
      explanation: 'A myth. Animals tolerate many compounds that are toxic to people.',
    },
    {
      id: 's6-l4-q6',
      kind: 'single',
      prompt: 'In a 72-hour emergency, why is foraging for wild greens usually a poor use of effort, even if identification were certain?',
      choices: [
        { id: 'a', text: 'Greens contain no useful nutrients, only water and fibre.', why: 'They have vitamins and minerals — but few calories.' },
        { id: 'b', text: 'At ~20–50 kcal per 100 g, gathering costs more than it returns.', why: 'Correct — the energy return is negative.' },
        { id: 'c', text: 'Greens are always illegal to pick in forests and parks.', why: 'Not always — but the energy argument holds everywhere.' },
        { id: 'd', text: 'Greens must be cooked for hours before they are digestible.', why: 'Not generally the issue.' },
      ],
      answer: 'b',
      concepts: ['energy-return'],
      explanation: 'Short emergencies are won by rationing and being found; foraging is a long-term, expert activity.',
    },
    {
      id: 's6-l4-q5',
      kind: 'single',
      prompt: 'A forager is right 99.9 % of the time, and every error is dangerous. What is the probability of at least one dangerous error over 300 identifications?',
      choices: [
        { id: 'a', text: '≈ 25.9 %', why: 'Correct — 1 − 0.999³⁰⁰.' },
        { id: 'b', text: '≈ 30 %', why: 'That simply adds 0.1 % 300 times; risks compound, they do not add.' },
        { id: 'c', text: '≈ 74.1 %', why: 'That is 0.999³⁰⁰ — the probability of **no** error.' },
        { id: 'd', text: '≈ 0.1 %', why: 'That is the risk of a single identification, not 300.' },
      ],
      answer: 'a',
      concepts: ['plant-id-discipline', 'risk'],
      explanation: '1 − 0.999³⁰⁰ ≈ 1 − 0.741 = **25.9 %**. “Usually right” is not safe enough for irreversible outcomes.',
    },
  ],
  scenario: {
    id: 's6-l4-sc',
    setup: 'Temperate forest, summer. You and a friend have been lost for 30 hours; you have water and a filter but ate your last bar this morning. By a stream you find tall plants with feathery leaves, white umbrella flowers and a carrot-like smell when crushed. Your friend says, “That’s wild carrot — I’ve seen it on a survival show. Let’s eat the roots.”',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Eat a small piece of root, wait an hour, then eat more if you feel fine.', why: 'A small piece of water hemlock root can cause seizures within an hour — the test itself can kill.' },
      { id: 'b', text: 'Refuse — it can’t be told apart from water hemlock; stay put, be findable.', why: 'Best: the look-alike is deadly, you lack the separating knowledge, and 30 hours without food is not dangerous with water. Conserve energy instead.' },
      { id: 'c', text: 'Cook the roots well first, since heat destroys most plant toxins.', why: 'Cicutoxin and many plant toxins are not reliably destroyed by cooking.' },
      { id: 'd', text: 'Eat the leaves instead of the roots, since roots are more toxic.', why: 'Wrong plant, wrong logic — all parts of hemlocks are toxic.' },
    ],
    best: 'b',
    debrief: 'This is the textbook trap: streamside, carrot family, carrot smell — the profile of water hemlock as much as wild carrot. Thirty hours without food is uncomfortable but safe with water; an identification error is irreversible. The highest-value actions are staying put, shelter, signals and rationing energy.',
    concepts: ['toxic-lookalikes', 'edibility-test-myth', 'stay-or-move', 'reversibility'],
  },
  summary: [
    'Every key feature, on mature specimens, in season — an unobservable feature means an incomplete ID.',
    'Exclude every regional look-alike positively; beginners avoid the carrot family.',
    'The universal edibility test is unreliable: small doses, delayed and cumulative toxins, taste ≠ toxicity.',
    'Wild greens are ~20–50 kcal/100 g — foraging rarely pays in short emergencies.',
    'Check the law; never eat anything identified from this course, a photo or an app.',
  ],
  furtherReading: ['peterson-edible', 'army-atp-3-50-21'],
  references: ['army-atp-3-50-21', 'peterson-edible', 'poison-help', 'auerbach', 'lnt-principles'],
}
