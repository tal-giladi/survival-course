import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's1-l2',
  stage: 1,
  order: 2,
  title: 'Survival priorities',
  level: 'beginner',
  minutes: 35,
  prerequisites: ['s1-l1'],
  concepts: ['priorities', 'rule-of-threes'],
  objectives: [
    'Use the **rule of threes** to order threats — and name the situations where it breaks.',
    'Explain why priorities **shift with environment and time**.',
    'Score candidate actions by **risk reduced per unit of time, energy and resources**, adjusted for reversibility.',
    'Apply the military **Protection → Location → Acquisition** ordering as a cross-check.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The rule of threes — a useful lie

The classic mnemonic says you can survive about:

- **3 minutes** without air (or with severe bleeding),
- **3 hours** in a harsh environment without protection,
- **3 days** without water,
- **3 weeks** without food.

Its value is not the numbers. It is the **ordering**: airway and bleeding before exposure, exposure before water, water before food. Beginners routinely get this backwards — spending their first afternoon hunting for food while getting soaked and chilled.`,
    },
    { type: 'diagram', id: 'rule-of-threes', caption: 'The same ordering, shown honestly: each category is a range spanning an order of magnitude or more.' },
    {
      type: 'md',
      md: `### Where it breaks

- **Heat** can kill through dehydration and heat stroke in **hours**, not days. In a hot desert, water and shade jump to the top.
- A **mild, dry summer night** needs almost no shelter; "3 hours" is irrelevant.
- **Cold water** immersion can incapacitate in minutes through cold shock and swim failure — exposure becomes a minutes-scale threat.
- **Food** rarely matters in the short term, but a calorie deficit in severe cold reduces your ability to generate heat, so food *supports* the exposure priority.

So we treat the rule of threes as a **starting order** and then correct it with the 12 questions and the environment.`,
    },
    {
      type: 'md',
      md: `### Protection → Location → Acquisition

Military survival doctrine (ATP 3-50.21, AFH 10-644) orders survival tasks broadly as:

1. **Protection** — first aid, clothing, shelter, fire for warmth: *keep the body working*.
2. **Location** — signaling and communication: *get found*.
3. **Acquisition** — water, then food: *resupply the body*.

This is the rule of threes rewritten as tasks. It is a good cross-check when you are unsure.`,
    },
    {
      type: 'md',
      md: `### The next highest-value action

Real priorities are not a ranking of categories; they are a choice between specific actions. For each candidate action, ask:

- **How much risk does it remove?** (Which threat, and how serious?)
- **What does it cost?** Time, energy, sweat, daylight, materials, battery.
- **Is it reversible?** Walking away from a known location is hard to undo; putting on a jacket is trivially reversible.
- **Does it unlock other actions?** Stopping to think unlocks everything; a fire unlocks warmth, drying, boiling water and signaling.

A cheap action that removes a big risk is almost always next. *Putting on your rain shell before you are wet* is the classic example: seconds of effort, hours of protection.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Watch for sweat',
      md: 'Many high-effort actions (fast hiking, frantic shelter building) soak your clothing with sweat, which later robs heat as it evaporates. In cold weather, **pace work to avoid sweating** and vent layers before you start.',
    },
  ],
  whyItMatters: 'Priorities are how you spend limited time and energy. Spending the first daylight hours on the wrong thing — food, a long walk, an elaborate shelter — can use up the margin you need for the thing that actually kills people: cold, wet, dark, dehydration and injury.',
  science: [
    {
      type: 'md',
      md: `### A simple value model

Put rough numbers on it. Let an action reduce the probability of a bad outcome by $\\Delta p$, and let the outcome's severity be $S$ (on any consistent scale). The **risk reduced** is $\\Delta p \\times S$. If the action costs $C$ (minutes of daylight, say), its value per cost is

$$
V = \\frac{\\Delta p \\times S}{C}
$$

In words: *how much danger does this remove, per minute spent?* You will never compute this precisely in the field. But thinking this way exposes bad choices — like spending 90 minutes of the last daylight making a fishing line (tiny $\\Delta p$, huge $C$).`,
    },
    {
      type: 'table',
      head: ['Action (cold, wet evening)', 'Risk removed', 'Cost', 'Verdict'],
      rows: [
        ['Put on waterproof shell now', 'Large (keeps insulation dry)', '1 min', '**Do first**'],
        ['Pitch tarp over a sitting spot', 'Large (rain + wind)', '10–15 min', 'Next'],
        ['Gather dry tinder into a pocket', 'Medium (enables fire later)', '5 min', 'Soon'],
        ['Walk 2 km to "maybe" find the trail', 'Uncertain; may increase risk', '40 min + sweat', 'Avoid in fading light'],
        ['Look for food', 'Negligible tonight', '60 min', 'Not now'],
      ],
      caption: 'Ranking specific actions, not categories.',
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Arctic/subarctic, −12 °C, wind.** Protection dominates completely: insulation, wind block, ground insulation, fire. Water comes from melting snow — but *eating* snow costs body heat, so melting it over fire or in a bottle inside your jacket is better.

**Tropical rainforest.** Temperature risk is lower, but constant wet causes skin breakdown and chilling at night; water is plentiful but contaminated; insects and infection matter. Priorities: a raised, dry place to sleep; water treatment; foot care.

**Coastal, cold water.** If you are *in* the water, the priority is surviving cold shock (control breathing for the first minute), then getting out or as much of your body out as possible. Minutes matter.

**Urban power outage in winter.** Air: carbon-monoxide risk from improvised heating is a *3-minute* category threat that people create themselves. Then warmth, water, communication.`,
    },
  ],
  mistakes: [
    'Treating the rule of threes as literal timings instead of an ordering heuristic.',
    'Prioritizing food early — it is almost never the limiting factor in the first days.',
    'Choosing high-effort actions that cause sweating in the cold.',
    'Ranking categories ("shelter is priority 2") instead of comparing concrete actions and their costs.',
    'Forgetting that irreversible actions (leaving a known location, using up your only water on washing) need a higher bar.',
  ],
  exercises: [
    {
      id: 's1-l2-e1',
      title: 'Four environments, four priority lists',
      level: 1,
      safety: 'home',
      minutes: 30,
      steps: [
        'Take four settings: hot desert at noon, temperate forest in autumn rain, snowy mountain at dusk, city apartment during a 3-day power cut in winter.',
        'For each, list the top four threats in order.',
        'For each threat, write one cheap, high-value action.',
        'Compare the lists: what changed, and why?',
      ],
      success: ['Each list begins with a threat that could harm you within hours, not days.', 'You can justify every ordering using a mechanism (heat loss, sweat, CO, etc.).'],
      skill: 'decision-loop',
    },
  ],
  simulations: ['priority-triage'],
  quiz: [
    {
      id: 's1-l2-q1',
      kind: 'single',
      prompt: 'Which sequence orders these threats by the rule of threes (most urgent first)?',
      choices: [
        { id: 'a', text: 'Blocked airway → severe exposure → no water → no food', why: 'Correct — minutes, then hours, then days, then weeks.' },
        { id: 'b', text: 'Blocked airway → no water → severe exposure → no food', why: 'Exposure (hours) comes before water (days); beginners often swap them.' },
        { id: 'c', text: 'Severe exposure → blocked airway → no water → no food', why: 'A blocked airway kills in minutes and always comes first.' },
        { id: 'd', text: 'Blocked airway → severe exposure → no food → no water', why: 'Water (days) is more urgent than food (weeks).' },
      ],
      answer: 'a',
      concepts: ['rule-of-threes'],
      explanation: 'Minutes → hours → days → weeks. Remember it as an ordering, then adjust for the environment.',
    },
    {
      id: 's1-l2-q2',
      kind: 'single',
      prompt: 'In which situation is the rule-of-threes ordering most misleading?',
      choices: [
        { id: 'a', text: 'A temperate forest in mild autumn rain.', why: 'The standard ordering (protection from wet and wind first) works well here.' },
        { id: 'b', text: 'A hot desert at 42 °C with no shade.', why: 'Correct — dehydration and heat illness can kill within hours, far faster than "3 days".' },
        { id: 'c', text: 'A snowy mountainside at dusk.', why: 'Exposure is the top priority, exactly as the rule predicts.' },
        { id: 'd', text: 'A person with a blocked airway.', why: 'This is exactly what "3 minutes" describes.' },
      ],
      answer: 'b',
      concepts: ['rule-of-threes', 'priorities'],
      explanation: 'In extreme heat, water and shade become hour-scale priorities. The rule is an ordering heuristic that the environment can override.',
    },
    {
      id: 's1-l2-q3',
      kind: 'single',
      prompt: 'It is 16:30 in cold drizzle. Which action has the **highest value per unit cost** right now?',
      choices: [
        { id: 'a', text: 'Putting on your waterproof shell before you get wet.', why: 'Correct — one minute of effort protects your insulation for hours.' },
        { id: 'b', text: 'Carving a fishing hook.', why: 'Food is not a limiting factor tonight; this spends daylight for almost no risk reduction.' },
        { id: 'c', text: 'Walking fast toward a ridge to look for landmarks.', why: 'Costly, sweaty and uncertain; may worsen your situation.' },
        { id: 'd', text: 'Checking your phone for a signal every few minutes.', why: 'Uses battery that may be needed for communication later.' },
      ],
      answer: 'a',
      concepts: ['priorities'],
      explanation: 'Cheap actions that prevent big problems come first. Staying dry is far easier than getting dry.',
    },
    {
      id: 's1-l2-q4',
      kind: 'single',
      prompt: 'Which of these does **NOT** belong to **Protection** in the Protection → Location → Acquisition ordering?',
      choices: [
        { id: 'a', text: 'First aid for a bleeding wound', why: 'Protection — keeping the body working comes first.' },
        { id: 'b', text: 'A fire for warmth', why: 'Protection — fire for warmth keeps the body working.' },
        { id: 'c', text: 'Laying out a ground-to-air signal', why: 'Correct — signaling is Location: getting found.' },
        { id: 'd', text: 'Improving shelter insulation', why: 'Protection — shelter is part of keeping the body working.' },
      ],
      answer: 'c',
      concepts: ['priorities'],
      explanation: 'Protection keeps the body working (first aid, clothing, shelter, warmth). Location is getting found. Acquisition is water and food.',
    },
    {
      id: 's1-l2-q5',
      kind: 'single',
      prompt: 'In cold weather, why can a vigorous burst of shelter building raise your overnight hypothermia risk?',
      choices: [
        { id: 'a', text: 'Sweat soaks your insulation, and evaporating it later robs heat while you rest.', why: 'Correct — damp insulation loses much of its value and evaporation keeps cooling you.' },
        { id: 'b', text: 'Hard work burns the calories your body needs to keep generating heat overnight.', why: 'Calories matter little over a single night; the main problem is wet insulation.' },
        { id: 'c', text: 'It does not — working hard keeps you warm, so faster building is always safer.', why: 'The warmth is temporary; the sweat it leaves behind costs you heat for hours.' },
        { id: 'd', text: 'Exertion dehydrates you, and dehydration is what lowers your core temperature.', why: 'Dehydration hurts judgment, but the heat loss here comes from sweat-soaked clothing.' },
      ],
      answer: 'a',
      concepts: ['priorities', 'wet-wind'],
      explanation: 'Sweat-soaked insulation loses much of its value, and evaporating moisture removes heat later when you are still. Pace work and vent layers.',
    },
  ],
  scenario: {
    id: 's1-l2-sc',
    setup: 'Late autumn, temperate forest, 15:45. Sunset 17:10. 7 °C and falling; light rain is starting. You twisted an ankle — painful but you can hobble. You have a 2 × 3 m tarp, cord, a lighter, a knife, 1 L of water, a granola bar, a phone with no signal, and a fleece and rain jacket in your pack. The trailhead is roughly 5 km away.',
    question: 'Which plan best reflects correct priorities for the next hour?',
    choices: [
      { id: 'a', text: 'Hobble toward the trailhead as fast as possible to beat the dark and the rain.', why: 'Five km on a bad ankle in fading light and rain risks a worse injury and exhaustion while wet — an irreversible gamble.' },
      { id: 'b', text: 'Put on fleece and shell, pitch the tarp low nearby, gather fuel, try for signal.', why: 'Best: protection first (stay dry, block wind and rain, insulate from the ground), fire as a backup, and communication attempted without committing to a long move.' },
      { id: 'c', text: 'Spend the remaining light building the biggest possible signal fire nearby.', why: 'Signaling matters, but a fire in the rain with no shelter leaves you wet and cold; also check it is safe and legal.' },
      { id: 'd', text: 'Ration the water strictly and drink nothing at all until the morning light.', why: 'Rationing water rather than sweat is a classic error; you have enough for tonight and dehydration worsens judgment.' },
    ],
    best: 'b',
    debrief: 'The rain and falling temperature make **exposure** the threat that will hurt you first, and it is *cheap* to address now while you still have light and dry clothing. The ankle raises the cost and risk of moving, so staying put becomes more attractive. Communication is attempted opportunistically. Food and water are not tonight’s limiting factors.',
    concepts: ['priorities', 'stay-or-move'],
  },
  summary: [
    'The rule of threes gives an **ordering**, not timings: airway/bleeding → exposure → water → food.',
    'Heat, cold water and extreme cold can compress timelines dramatically.',
    'Protection → Location → Acquisition is the same ordering expressed as tasks.',
    'Choose actions by **risk removed per cost**, with extra caution for irreversible ones.',
  ],
  furtherReading: ['army-atp-3-50-21', 'lundin-986'],
  references: ['army-atp-3-50-21', 'afh-10-644', 'wms-heat-2024', 'coldwater-1101', 'ten-essentials-mtn'],
}
