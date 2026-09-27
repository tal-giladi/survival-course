import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's5-l7',
  stage: 5,
  order: 7,
  title: 'Shelter failure analysis',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s5-l3', 's5-l4'],
  concepts: ['shelter-failure', 'effort-budget', 'risk', 'human-factors'],
  objectives: [
    'Trace a shelter failure from its **proximate cause** to its **root cause** using a fault tree and "five whys".',
    'Run a **pre-mortem** on a planned shelter and add the checks it reveals.',
    'Allocate limited time by **value per minute**, after removing lethal hazards regardless of cost.',
    'Explain why a shelter is a **series system** and why fixing the weakest link pays most.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Every shelter can fail. Professionals improve by looking hard at failures — their own and other people’s — and asking not only *what* broke, but *why that was the thing that broke*. This lesson gives you the tools and applies them to a set of **composite cases**: realistic, illustrative situations assembled from common failure patterns, not accounts of specific real incidents.

### From symptom to root cause`,
    },
    { type: 'diagram', id: 'failure-tree', caption: 'A fault tree: the bad night at the top, the mechanisms beneath it, the decisions at the bottom.' },
    {
      type: 'md',
      md: `A **fault tree** starts at the outcome (a dangerous night) and branches into the ways it could happen: heat drained, water got in, time ran out, a hazard struck. Each branch splits again until you reach **decisions** — because decisions are what you can change next time.

**Five whys** does the same thing linearly: *The tarp blew down.* Why? The stakes pulled out. Why? It was pitched high and open to the wind. Why? It was pitched in a hurry at dusk without checking the forecast wind. Why? The decision to stop was made an hour too late. Why? The group kept pushing for the planned camp (a commitment trap — Stage 1). The fix is not "better stakes"; it is "decide to stop while there is light for a storm pitch".

### Composite cases`,
    },
    {
      type: 'table',
      head: ['Case', 'What happened', 'Proximate cause', 'Root cause', 'Cheapest fix'],
      rows: [
        ['**The dry wash** (desert)', 'A flood came down the wash at 02:00 from a storm out of sight', 'Slept in a channel', 'Chose comfort (soft, flat sand) before hazards; didn’t look upstream', 'Five-minute site check; sleep on the terrace above'],
        ['**The drum-tight ridgeline** (temperate)', 'Cord snapped in a midnight gust; wet, sleepless night', 'Peak tension exceeded the cord', 'Believed tighter = stronger; no give; high pitch', 'Pitch low with some sag and an elastic element'],
        ['**The half-finished hut** (forest)', 'Debris hut only half piled at dark; shivered all night', 'Walls too thin; no bed', 'Started a 3-hour build with 1 hour of light; material far away', 'Estimate time before starting; tarp + bed instead'],
        ['**The frosty meadow** (mountain)', 'Frost on the bag, shivering at −4 °C while friends upslope were at +1 °C', 'Cold-air pool + thin bed', 'Picked the flat, sheltered valley floor on a clear, calm night', 'Camp mid-slope; build the bed first'],
        ['**The cosy quinzhee** (subarctic)', 'Headaches and nausea at 22:00', 'CO from a stove with the vent drifted shut', 'Used a flame for warmth; no vent checks', 'No flame inside; check vent and door; out at first symptom'],
        ['**The sweaty trench** (snow)', 'Good trench, but shivering from 21:00', 'Clothing soaked with sweat while digging', 'Dug fast in full insulation to beat the dark', 'Strip to base + shell, steady pace, dry layers on after'],
        ['**The riverbank hammock** (tropics)', 'River rose under the hammock; gear swept away', 'Site in the flood plain', 'Chose open ground for easy rigging; ignored brown, rising water', 'Hammock on the rise above; read the river'],
      ],
      caption: 'Composite, illustrative cases built from common failure patterns.',
    },
    {
      type: 'md',
      md: `Notice the pattern: **the root cause is almost always a decision made before construction** — where to stop, when to start, which site, which design, how fast to work. Construction technique matters, but it is rarely where the chain begins.

### Pre-mortem

Before you build, spend two minutes imagining it is 03:00 and the shelter has failed. Ask: *What failed?* Wind from a different direction? A puddle? A branch? Sweat? Cold ground? The vent? Then add the check or change that prevents each one. It is cheap and remarkably effective at catching the failure you had not thought about.

### Optimising under a budget

Once hazards are removed, you rarely have time for everything. Rank the remaining jobs by **value per minute** — watts saved (or risk removed) divided by minutes of work — and do them in that order:

| Job (forest, rain then clear, 2 °C) | Minutes | Rough benefit | Value per minute |
|---|---|---|---|
| Move from hollow to mid-slope bench | 10 | Removes flood risk; ~5 °C warmer after clearing | **Must do** (lethal hazard) |
| Low A-frame, closed end to the wind | 20 | Keeps you dry: avoids ~50–100 W of wet-clothing loss | ~3–5 W/min |
| 30 cm leaf bed | 30 | ~100 W less conduction | ~3 W/min |
| Plug the windward gap with the pack | 3 | ~10–15 W | ~4 W/min |
| Perfecting tension and neat guy-lines | 15 | ~0 W unless it fixes pooling or flapping | ~0 |
| Second leaf layer (30 → 50 cm) | 20 | ~5 W more | ~0.25 W/min |

The table explains why "good enough and finished" beats "perfect and unfinished": value per minute falls steeply after the first few big wins. Then **stop building before dark**, dry out, eat, drink and rest.

### Night maintenance

Plan to wake and check: re-tension wet cords, knock snow off the tarp, clear the vent and entrance, move away from water that is pooling, add a layer before you start shivering hard. A shelter is a system you operate, not a structure you finish.`,
    },
    { type: 'sim', id: 'shelter-builder', caption: 'Level-4 challenge: score 75+ in all four environments. After each failure, name its root cause before changing anything.' },
    {
      type: 'callout',
      tone: 'law',
      md: 'Practise overnights only where camping is permitted — your own garden, a campsite, or land where the manager allows dispersed camping — and follow local fire rules. Regulations differ by country and by land parcel; check before you go (References page).',
    },
  ],
  whyItMatters: 'Failure analysis turns bad nights into better judgment. Without it, people fix symptoms (stronger stakes, a thicker tarp) and repeat the decision that caused the failure (stopping too late, sleeping in the wrong place). With it, each night — real or simulated — improves the next.',
  science: [
    {
      type: 'md',
      md: `### A shelter is a series system

A shelter keeps you safe only if **every** critical function works: the site is safe, the roof keeps you dry, the structure survives the wind, the bed insulates, you stay dry from sweat. If these fail independently, the probability that the whole night succeeds is the **product** of the individual reliabilities:

$$
P_{\\text{night}} = P_{\\text{site}} \\times P_{\\text{roof}} \\times P_{\\text{structure}} \\times P_{\\text{bed}} \\times P_{\\text{dry}}
$$

**Worked example.** $0.99 \\times 0.95 \\times 0.80 \\times 0.90 \\times 0.95 \\approx 0.64$. Raising the weakest link (structure, 0.80) to 0.95 gives $\\approx 0.76$; raising an already good link (site, 0.99 → 1.00) gives only $\\approx 0.65$. **Fix the weakest link first.**

### Risk as expected cost

Stage 1 defined risk as likelihood × consequence. A dead limb might have a small chance of falling on any one night, but the consequence is death; a 10-minute move removes it entirely. When the consequence is catastrophic and irreversible, even small probabilities justify a cheap control — and "it didn’t fall last time" is not evidence of safety.

### Value per minute

The marginal benefit of insulation falls as it gets thicker. For the bed, heat flow $Q = A\\Delta T/R$ with $R$ proportional to thickness, so each extra centimetre saves less than the one before. Going from 0 to 7 cm compressed saves about 100 W; from 7 to 14 cm, only a few more watts. This diminishing return is why the optimum is usually *several things done adequately* rather than *one thing done perfectly*.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** A group loses its first hour arguing about a perfect site, then pitches in the dark. Root cause: no time budget or decision deadline. Fix: set a "shelter decision time" when light remaining = build time + margin (Stage 1 daylight budgeting).

**Arctic.** A tarp shelter at −25 °C is survivable only with a very thick bed; the failure is conduction into the snow. Fix: snow walls or a trench, and the bed first.

**Desert.** A shade shelter works by day but the occupant shivers at night on bare sand. Root cause: designed for one threat, not for the whole 24 hours. Fix: plan the night layer and ground insulation too.

**Tropics.** A perfect tarp over a bed on the ground, but the run-off from a downpour flows straight through. Root cause: site drainage not checked. Fix: move to the rise or raise the bed.

**Urban.** A family sheltering in a car during a winter storm develops headaches: the exhaust pipe is buried in snow. Root cause: unaware of CO from a blocked exhaust. Fix: keep the exhaust clear, run the engine only briefly with a window cracked (Stage 17).

**Mountain.** A bivouac in a boulder field is hit by stonefall after rain. Root cause: shelter under a slope with fresh rockfall scars. Fix: look up; move out of the runout.`,
    },
  ],
  mistakes: [
    'Fixing the proximate cause (stronger stakes) instead of the root decision (stopping too late, wrong site).',
    'Continuing an over-ambitious build because of the time already invested (sunk-cost / commitment trap).',
    'Treating "it was fine last time" as evidence that a hazard is acceptable.',
    'Spending the last light perfecting details with near-zero value per minute.',
    'Assuming the shelter is finished at bedtime — no plan for night checks and maintenance.',
    'Designing for the obvious threat and forgetting the others (desert nights, tropical run-off, sweat in the snow).',
  ],
  exercises: [
    {
      id: 's5-l7-e1',
      title: 'Write a failure analysis',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'Take a real night you spent outdoors that went badly — or a failed Shelter Builder run.',
        'Draw a fault tree from the outcome down to decisions.',
        'Apply five whys to the most important branch.',
        'Write the one decision you would change and the check that would have caught it.',
      ],
      success: ['Your root cause is a decision, not a piece of equipment.', 'You wrote a concrete, testable check (e.g., "stop when light remaining = build time + 30 min").'],
    },
    {
      id: 's5-l7-e2',
      title: 'Backyard overnight with a pre-mortem',
      level: 3,
      safety: 'outdoor',
      minutes: 720,
      materials: ['Tarp, cord, stakes', 'Ground insulation', 'Sleeping bag (this is practice, not an ordeal)', 'Thermometer', 'Notebook, headlamp'],
      steps: [
        'In a garden or a permitted campsite with a warm fallback nearby, choose a site and pitch a shelter for the forecast.',
        'Before sleeping, write a pre-mortem: five ways it could fail tonight and your check for each.',
        'Set an alarm for 03:00: record temperature, wind, any drips, pooling or cold spots.',
        'In the morning, compare what happened with your pre-mortem.',
      ],
      success: ['You slept (or rested) through the night with a working shelter.', 'At least one pre-mortem check prevented or caught a problem, or you added a new one.'],
      skill: 'shelter-overnight',
      safetyNote: 'Keep a warm fallback; do not practise in severe weather; tell someone where you are.',
    },
    {
      id: 's5-l7-e3',
      title: 'Four-environment challenge',
      level: 4,
      safety: 'virtual-only',
      minutes: 45,
      steps: [
        'Score 75+ in all four Shelter Builder environments.',
        'For each environment, record the one change that made the biggest difference and its value per minute.',
      ],
      success: ['All four environments at 75+.', 'Your notes identify a hazard-removal step and a high value-per-minute step in each.'],
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l7-q1',
      kind: 'numeric',
      prompt: 'A shelter’s critical functions have reliabilities: site 0.98, roof 0.90, structure 0.85, bed 0.95. Assuming independence, what is the probability the whole night succeeds? (Two decimals.)',
      unit: '',
      answer: 0.71,
      tolerance: 0.01,
      concepts: ['shelter-failure', 'risk'],
      explanation: '$0.98 \\times 0.90 \\times 0.85 \\times 0.95 \\approx 0.71$. The structure (0.85) is the weakest link — improve it first.',
    },
    {
      id: 's5-l7-q2',
      kind: 'single',
      prompt: '"The tarp blew down because the stakes pulled out of soft ground." Which is the most useful **root cause** to act on?',
      choices: [
        { id: 'a', text: 'The stakes were too short', why: 'A proximate cause — longer stakes help, but the pitch was still wrong for the wind.' },
        { id: 'b', text: 'The tarp was pitched high and open to the forecast wind because the decision to stop came too late to pitch properly', why: 'Correct — it names the decisions (timing, orientation, height) that you can change next time.' },
        { id: 'c', text: 'Bad luck with the gusts', why: 'The gusts were forecast; luck is not a cause you can act on.' },
        { id: 'd', text: 'The ground was soft', why: 'A condition, not a decision; deadmen or a different site handle it.' },
      ],
      answer: 'b',
      concepts: ['shelter-failure', 'decisions'],
      explanation: 'Keep asking "why" until you reach a decision you control.',
    },
    {
      id: 's5-l7-q3',
      kind: 'order',
      prompt: 'Forest, rain then clear and 2 °C, 60 minutes of light, and you are standing in a hollow by the stream. Order the jobs.',
      items: [
        { id: 'move', text: 'Move up to the mid-slope bench' },
        { id: 'roof', text: 'Low A-frame, closed end to the wind' },
        { id: 'bed', text: 'Thick leaf bed' },
        { id: 'polish', text: 'Neaten tension and guy-lines' },
      ],
      answer: ['move', 'roof', 'bed', 'polish'],
      concepts: ['effort-budget', 'site-hazards'],
      explanation: 'Remove the lethal hazard (flood path, cold pool) first whatever it costs; then the highest value per minute in the rain (roof), then the bed, then polish.',
    },
    {
      id: 's5-l7-q4',
      kind: 'multi',
      prompt: 'Which belong in a **pre-mortem** for a snow trench tonight?',
      choices: [
        { id: 'a', text: 'New snow loading and sagging the roof', why: 'Yes — plan to clear it or shape the roof to shed.' },
        { id: 'b', text: 'Sweat from digging soaking my insulation', why: 'Yes — plan layers and pace.' },
        { id: 'c', text: 'The entrance or vent drifting shut', why: 'Yes — plan checks.' },
        { id: 'd', text: 'Being too warm and needing sunscreen at 03:00', why: 'No — not a credible failure mode tonight.' },
        { id: 'e', text: 'Cold conducted into the snow through a thin bed', why: 'Yes — plan boughs and pads.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['shelter-failure', 'snow-shelter'],
      explanation: 'A pre-mortem asks "it failed at 03:00 — why?" and adds a check for each plausible answer.',
    },
    {
      id: 's5-l7-q5',
      kind: 'truefalse',
      prompt: 'If you have already spent 90 minutes on a debris hut, you should finish it even if dark is 30 minutes away and it needs another 90 minutes.',
      answer: false,
      concepts: ['human-factors', 'effort-budget'],
      explanation: 'The 90 minutes are spent either way (sunk cost). Decide on what gives the warmest night from *now*: perhaps use the half-hut’s material as a thick bed under a quick cover.',
    },
  ],
  scenario: {
    id: 's5-l7-sc',
    setup: 'Temperate hills, autumn. You twisted your ankle and are 4 km from the trailhead. It is 17:30; sunset at 18:20; 8 °C now, forecast 1 °C and clear overnight, light wind. You have 700 ml of water, a knife, 10 m of cord, a small tarp, a lighter, a flashlight, a warm jacket, and a phone with 12 % battery and one bar of signal. You are on a gentle slope above a stream, among living oaks with deep leaf litter.',
    question: 'What is your plan for the next 50 minutes?',
    choices: [
      { id: 'a', text: 'Limp on towards the trailhead; you might make it before full dark.', why: '4 km on a sprained ankle will take hours; you will be moving, sweating and at risk of further injury in the dark and cold.' },
      { id: 'b', text: 'Call or text emergency services now with your location, switch the phone to power-saving; then build a thick leaf bed on the slope (not by the stream), a low tarp over it, and put the jacket on before you cool down.', why: 'Best: communication first while you have battery and signal; stay above the cold pool; the bed is the highest value per minute on a clear, cold night; the tarp hides the sky.' },
      { id: 'c', text: 'Spend the light building a debris hut near the stream for water access.', why: 'Too slow for 50 minutes, and the stream side is the cold pool on a clear night.' },
      { id: 'd', text: 'Build a fire first to signal and stay warm, then decide.', why: 'A fire may help later, but communication and the bed are higher value right now, and fire rules and dry fuel need checking.' },
    ],
    best: 'b',
    debrief: 'Run the 12 questions: injury limits movement (stay), communication is cheap and decisive (call now), the overnight risk is a clear, cold night (conduction and radiation), so bed first and cover second, on the slope above the cold pool. Pre-mortem: phone dying (power-save, scheduled check-ins), ankle swelling (elevate on the pack), getting cold before building is done (jacket on now).',
    concepts: ['shelter-failure', 'effort-budget', 'stay-or-move', 'priorities', 'cold-air-pooling'],
  },
  summary: [
    'Trace failures to decisions: fault trees and five whys.',
    'Most root causes are made before construction: when to stop, where, which design, how fast.',
    'Pre-mortem: "It failed at 03:00 — why?" Add a check for each answer.',
    'Remove lethal hazards first; then spend minutes by value per minute; stop before dark.',
    'A shelter is a series system: fix the weakest link; operate and maintain it through the night.',
  ],
  furtherReading: ['deep-survival', 'mccammon-traps', 'kochanski-bushcraft'],
  references: ['deep-survival', 'mccammon-traps', 'kochanski-bushcraft', 'army-atp-3-50-21', 'cdc-co', 'nws-flood', 'ready-car'],
}
