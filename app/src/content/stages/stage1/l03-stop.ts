import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's1-l3',
  stage: 1,
  order: 3,
  title: 'Situation assessment: STOP',
  level: 'beginner',
  minutes: 30,
  prerequisites: ['s1-l2'],
  concepts: ['stop', 'immediate-danger', 'inventory', 'daylight'],
  objectives: [
    'Run **STOP** — Stop, Think, Observe, Plan — within the first minutes of a problem.',
    'Distinguish **immediate danger** (act now) from **developing threats** (plan for).',
    'Take a structured **inventory** of body, gear, people, environment and time.',
    'Build a **daylight budget** and estimate remaining light from the sun’s height.',
  ],
  explanation: [
    {
      type: 'md',
      md: `When something goes wrong, the body floods with adrenaline and the mind wants to *do something* — usually move. **STOP** interrupts that impulse. It is taught by land agencies and SAR teams worldwide because the single most common error of lost people is to keep moving, which adds distance, fatigue and confusion.

- **S — Stop.** Physically stop. Sit down if you can. Drink some water, eat something small. This lowers arousal and signals to your brain that you are in control.
- **T — Think.** What happened? What do I know for certain? What am I assuming?
- **O — Observe.** Your surroundings, weather, light, your body, your gear, other people.
- **P — Plan.** A short, concrete plan with a time checkpoint.

STOP is the first turn of the decision loop from lesson 1, packaged for the moment of shock.`,
    },
    {
      type: 'md',
      md: `### Immediate danger vs developing threats

The first observation is always: **is something about to hurt me in the next minutes?** Examples: rockfall, a rising river, a slope that could avalanche, fire approaching, traffic, a collapsing structure, a hostile animal, lightning.

If yes, **move to safety first** — the *minimum* distance that removes the danger — and then STOP. Everything else (cold, thirst, being lost) is a **developing threat**: serious, but measured in hours. Developing threats get a plan, not a panic.`,
    },
    {
      type: 'md',
      md: `### Structured inventory

Go through five headings. Say or write them — it helps under stress.

| Heading | Check |
|---|---|
| **Body** | Injuries, warmth, wetness, hunger, thirst, fatigue, medical conditions and medications. |
| **Gear** | Everything in pockets and pack — including things you would not normally count: plastic bags, foil, spare laces, a bright jacket. |
| **People** | Who is with you, their condition, skills, and who knows where you are. |
| **Environment** | Weather now and trend, terrain, water, shelter materials, hazards. |
| **Time** | Current time, time to dark, when you will be missed, forecast changes. |`,
    },
    {
      type: 'md',
      md: `### The daylight budget

Darkness multiplies every risk: navigation fails, falls become likely, shelter building takes three times longer, and morale drops. So budget backwards from sunset:

1. When is sunset (phone, or estimate from the sun)?
2. Usable light ends roughly **20–40 minutes after sunset** in open country at mid-latitudes (civil twilight) — less under forest canopy or clouds, and it varies with latitude and season.
3. Reserve time for the **night task** — pitching shelter, gathering fuel and insulation typically takes **45–90 minutes** for a beginner.
4. What remains is the time you can spend on anything else — including moving.

**Hand method:** at arm’s length, the width of one finger held horizontally covers roughly 1.5–2° of sky; a hand of four fingers ≈ 7–8°. Near the equinox at mid-latitudes the sun drops about 15° per hour when high, but more slowly and at a shallower angle near sunset and at high latitudes. Treat "each finger ≈ 10–15 minutes" as a rough estimate only.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Stop early',
      md: 'The best time to STOP is when you first feel doubt — not when you are sure you are lost. Doubt at 14:00 costs five minutes. Certainty at 17:30 costs a night out.',
    },
  ],
  whyItMatters: 'Lost-person research (Koester’s ISRID data) shows that many lost hikers travel far from where they first became disoriented, making searches bigger and slower. STOP keeps you close to your last known point, keeps your judgment intact, and ensures the next action is chosen, not reflexive.',
  science: [
    {
      type: 'md',
      md: `### Why sitting down and eating helps

Acute stress triggers the sympathetic nervous system: heart rate and breathing rise, attention narrows (tunnel vision), and complex reasoning in the prefrontal cortex degrades. Deliberate physical stillness, slow exhalation and a small snack give the parasympathetic system a chance to rebalance. It is not a trick of willpower — you are changing your physiology so that you can think.`,
    },
    {
      type: 'md',
      md: `### Daylight arithmetic

If sunset is at $t_s$, useful twilight adds $\\tau$ minutes, and your night preparation needs $T_n$ minutes, the latest time you can *start* preparing is

$$
t_{\\text{start}} = t_s + \\tau - T_n
$$

Example: sunset 17:10, $\\tau = 25$ min, $T_n = 75$ min → start by **16:20**. If it is 15:40 now, you have only 40 minutes for anything else.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain, 13:00.** A scrambler sees the weather building behind the ridge and realises the route is harder than expected. STOP: no immediate danger yet, but thunderstorms typically build in the afternoon. Inventory: no injuries, phone at 70 %, 1.5 L water. Plan: turn around now while the descent is dry; reassess at the col at 13:45.

**Desert track.** A dust storm reduces visibility to 50 m. Immediate danger: vehicles on the track. Minimum move: step well off the track, then STOP.

**Flood.** Water is rising around a campsite at night. Immediate danger: move to higher ground *now* — STOP happens on the high ground.`,
    },
  ],
  mistakes: [
    'Continuing to walk "just a bit further" to see if things look familiar.',
    'Skipping the inventory and forgetting useful items (spare bags, a bright jacket, a space blanket at the bottom of the pack).',
    'Assuming twilight lasts as long as it does in open country when you are under forest canopy or clouds.',
    'Moving far to escape an immediate danger when a short move would do — then being lost as well.',
  ],
  exercises: [
    {
      id: 's1-l3-e1',
      title: 'Random STOP drill',
      level: 3,
      safety: 'outdoor',
      minutes: 15,
      materials: ['A walk you know', 'Phone timer', 'Notebook'],
      steps: [
        'Set a random timer (15–45 min) on a familiar walk.',
        'When it goes off: stop, sit, drink, and run STOP out loud.',
        'Write the five-heading inventory in under 5 minutes.',
        'Estimate time to sunset with the hand method; check against your phone.',
        'Write a one-line plan with a time checkpoint.',
      ],
      success: ['Inventory complete within 5 minutes.', 'Sunset estimate within ±30 minutes of the true value.', 'Your plan names a specific action and a checkpoint time.'],
      skill: 'stop-drill',
    },
    {
      id: 's1-l3-e2',
      title: 'Hidden-inventory challenge',
      level: 3,
      safety: 'home',
      minutes: 20,
      steps: [
        'Empty your day pack and pockets onto a table.',
        'For every item, list at least one *non-obvious* survival use (e.g., a bin bag = rain poncho, vapour barrier, water collector, ground sheet).',
        'Note any function you have no item for.',
      ],
      success: ['At least 2 uses listed for every item.', 'A list of gaps to fix in lesson 9 (kit).'],
      skill: 'stop-drill',
    },
  ],
  quiz: [
    {
      id: 's1-l3-q1',
      kind: 'order',
      prompt: 'Order the letters of STOP.',
      items: [
        { id: 's', text: 'Stop' },
        { id: 't', text: 'Think' },
        { id: 'o', text: 'Observe' },
        { id: 'p', text: 'Plan' },
      ],
      answer: ['s', 't', 'o', 'p'],
      concepts: ['stop'],
      explanation: 'Stop the impulse, think about what you know, observe the facts, then plan.',
    },
    {
      id: 's1-l3-q2',
      kind: 'single',
      prompt: 'Which of these is an **immediate danger** that you should move away from before running STOP?',
      choices: [
        { id: 'a', text: 'Being two hours from sunset without a shelter.', why: 'A developing threat: plan for it.' },
        { id: 'b', text: 'Standing in a dry gully while thunder rumbles upstream.', why: 'Correct — flash floods can arrive with little warning; get to higher ground first.' },
        { id: 'c', text: 'Having only 500 ml of water left.', why: 'A developing threat measured in hours to days.' },
        { id: 'd', text: 'Not knowing where you are on the map.', why: 'Being disoriented is serious but not a minutes-scale danger.' },
      ],
      answer: 'b',
      concepts: ['immediate-danger'],
      explanation: 'Immediate dangers can hurt you within minutes. Move the minimum safe distance, then STOP.',
    },
    {
      id: 's1-l3-q3',
      kind: 'numeric',
      prompt: 'Sunset is at 17:10. You estimate 25 minutes of usable twilight and need 75 minutes to prepare for the night. It is now 15:40. How many **minutes** do you have for anything else (e.g., trying to relocate) before you must start preparing?',
      unit: 'min',
      answer: 40,
      tolerance: 0,
      concepts: ['daylight'],
      explanation: 'Latest start = 17:10 + 25 − 75 = 16:20. From 15:40 to 16:20 is **40 minutes**.',
    },
    {
      id: 's1-l3-q4',
      kind: 'multi',
      prompt: 'Which items belong in the five-heading inventory? (Choose all that apply.)',
      choices: [
        { id: 'a', text: 'Your medications and medical conditions', why: 'Yes — Body.' },
        { id: 'b', text: 'Who knows your route and when you are due back', why: 'Yes — People / Time.' },
        { id: 'c', text: 'The forecast trend', why: 'Yes — Environment.' },
        { id: 'd', text: 'Plastic bags and spare laces', why: 'Yes — Gear includes improvisable items.' },
        { id: 'e', text: 'Your social-media notifications', why: 'No — and checking them wastes battery.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['inventory'],
      explanation: 'Body, Gear, People, Environment, Time. Improvisable items count as gear.',
    },
    {
      id: 's1-l3-q5',
      kind: 'truefalse',
      prompt: 'Sitting down and eating a snack at the start of STOP is mainly about calories.',
      answer: false,
      concepts: ['stop', 'stress'],
      explanation: 'It is mainly about physiology and attention: stillness and a routine action help calm the acute stress response so you can think clearly.',
    },
  ],
  scenario: {
    id: 's1-l3-sc',
    setup: 'You are cross-country skiing on a marked loop in subarctic forest. At 14:20 you realise you have not seen a trail marker for 20 minutes. Sunset is 15:30. It is −8 °C, calm, and your tracks are clearly visible behind you in fresh snow.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Ski on — the loop must reconnect somewhere.', why: 'Hope is not a plan; with 70 minutes of light at −8 °C, a wrong guess is expensive.' },
      { id: 'b', text: 'STOP, then follow your own tracks back to the last marker while light is good.', why: 'Best: your tracks are a reliable, reversible route to a known point, and you have enough light to use them.' },
      { id: 'c', text: 'Build a snow shelter immediately.', why: 'Premature: you have a cheap, low-risk way to relocate first.' },
      { id: 'd', text: 'Head straight toward the sun to reach open ground.', why: 'Direction without a known destination adds distance and uncertainty.' },
    ],
    best: 'b',
    debrief: 'STOP turns up a resource you might otherwise ignore: **your own tracks**. Backtracking to the last known point is reversible, low-effort and fits the daylight budget. If wind or snowfall were filling the tracks, the calculation would change — this is why you observe before you plan.',
    concepts: ['stop', 'daylight', 'stay-or-move'],
  },
  summary: [
    '**STOP** — Stop, Think, Observe, Plan — interrupts the urge to keep moving.',
    'Immediate danger first: move the minimum safe distance, then STOP.',
    'Inventory under five headings: Body, Gear, People, Environment, Time.',
    'Budget backwards from sunset; darkness multiplies every risk.',
  ],
  furtherReading: ['koester-lpb'],
  references: ['koester-lpb', 'army-atp-3-50-21', 'nps-ten-essentials', 'leach-freeze-2004'],
}
