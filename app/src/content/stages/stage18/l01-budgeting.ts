import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's18-l1',
  stage: 18,
  order: 1,
  title: 'Resource and energy budgeting',
  level: 'advanced',
  minutes: 55,
  prerequisites: ['s6-l1', 's8-l6'],
  concepts: ['s18-resource-ledger', 's18-limiting-resource', 's18-work-rest', 'energy-budget', 'water-budget', 'rationing', 'energy-return', 'long-duration-fire', 'snowmelt'],
  objectives: [
    'Keep a **daily resource ledger** — stock, income, use and net — for water, food energy, fuel, light/battery and daylight.',
    'Calculate **days of reserve** for each resource and identify the **limiting resource** that should drive today’s plan.',
    'Value each **work block** by what it costs (energy, water, time) and what it returns, and schedule work and rest around heat, cold and daylight.',
    'Estimate the **fuel cost of water** in snow country and fold it into the fuel budget.',
    'Set **trigger points** (for example, “under one day of water”) that force a re-plan before a shortage becomes a crisis.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 6 showed how to estimate one person’s energy needs and how to ration food; Stage 8 explained where that energy comes from and what a deficit does to the body; Stage 4 built water budgets. A multi-day situation joins them up. Water, food, fuel, light, daylight, your own energy and your gear all run down together, and every hour you spend topping one up is an hour you are not spending on another. The skill is **bookkeeping under uncertainty**.

### The resource ledger

For each resource, write one line a day:

| Resource | Stock now | Income / day | Use / day | Net / day | Days of reserve |
|---|---|---|---|---|---|
| Treated water | 4 L | 3 L (one collection trip) | 3.5 L | −0.5 L | 8 |
| Food | 3,000 kcal | 0 | 600 kcal | −600 | 5 |
| Firewood | 6 armfuls | 4 | 5 | −1 | 6 |
| Phone battery | 60 % | 0 | 8 % (two short checks) | −8 % | 7.5 |
| Daylight | — | 9 h | tasks planned: 7 h | +2 h | — |

The last column is the one that matters. **The smallest number of days of reserve is your limiting resource** — the thing that will run out first — and today’s plan should be built around it. In this example it is food, but food is also the resource you can most afford to run short of (Stage 6: water before food). So the real question is: *which resource runs out first among the ones that will hurt me?*`,
    },
    { type: 'diagram', id: 's18-ledger', caption: 'The daily ledger: stock, income and use for each resource. The shortest reserve is your limiting resource.' },
    {
      type: 'md',
      md: `### Your body is a resource too

Your own **energy, hydration, warmth and sleep** are stocks with income and use, like anything in your pack. A day of heavy work on 500 kcal with broken sleep “spends” capacity you will not have tomorrow. Stage 8 showed that glycogen runs out within about a day of hard work and a large deficit; after that, work gets slower, judgment worse, and cold harder to resist. The multi-day plan therefore budgets **effort**, not just supplies:

- **Front-load high-value work** while you are strongest — usually day 1 and the mornings: shelter and bedding, water system, fuel, signals.
- **Stop when the job is good enough.** A shelter that keeps you warm is done; the fourth hour on it probably buys less than an hour on signals.
- **Rest is a task.** In heat, the hours around midday are for shade and rest (Stage 4: ration sweat, not water). In cold, rest in the warm hours and save effort for the fire and bed before dark.
- **Eat on a plan** (Stage 6): a steady small ration with a reserve, weighted toward the evening meal and the hardest days, beats feasting on day 1 or refusing to eat.`,
    },
    { type: 'diagram', id: 's18-task-value', caption: 'Every block of work costs energy and water. Rank tasks by what they return.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'The food-getting trap',
      md: 'In a wait of days, looking for food usually **costs more energy and water than it returns** (Stage 6: energy return). Hours spent hunting for food are hours not spent on shelter, water or signals, and eating unfamiliar wild plants or fungi is a serious poisoning risk — this course never asks you to eat wild plants or fungi identified from its pages. Food matters over weeks, not days; plan to carry enough.',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire, fishing and foraging are regulated',
      md: 'Fires may be banned seasonally or need a permit; fishing almost always needs a **licence** and follows seasons, methods and bag limits; foraging and cutting wood are restricted in many parks and reserves. Check the land manager’s rules before every trip — see [References → Law varies by jurisdiction](#/references). In a genuine life-threatening emergency, protecting life comes first, but plan so that you never need to break the rules to stay alive.',
    },
    {
      type: 'md',
      md: `### Trigger points and reserves

A ledger only helps if it changes what you do. Before a trip — or on the first evening of an emergency — write down **triggers**:

- *Water under one day of reserve* → water becomes the first task tomorrow, and heavy work moves to the cool hours.
- *Food reserve under two days* → drop to a smaller ration; stop any food-getting that costs more than it returns.
- *Firewood under one night* → nobody sleeps until tomorrow night’s wood is in.
- *Phone under 30 %* → phone off except at fixed check-in times (Stage 14).
- *A storm is forecast* → fuel, water and shelter repairs are done before it arrives.

Keep a **reserve** that is not part of the daily plan — for water, a full bottle; for food, a day’s ration; for fuel, one night’s wood under cover; for light, spare batteries. The reserve is what turns a surprise (an extra day, an injury, a storm) into an inconvenience.`,
    },
    { type: 'sim', id: 'multi-day', caption: 'Run a camp for up to six days. Try one run with a steady ration and one where you eat freely at first, and compare days 4–6.' },
  ],
  whyItMatters: 'Most multi-day survival situations are not decided by a single dramatic act but by slow drains: water that runs short on day 3, a woodpile that runs out at 2 a.m., a phone that dies before the search starts, a body that has been worked too hard on too little food. A ledger turns those drains into numbers you can see early, when there is still time and energy to act.',
  science: [
    {
      type: 'md',
      md: `### Days of reserve

For any resource with stock $S$, daily income $i$ and daily use $u$, the number of days until it runs out is

$$
D = \\frac{S}{u - i} \\quad (\\text{when } u > i)
$$

In words: divide what you have by how fast it is shrinking. If income matches or exceeds use, the stock is stable and $D$ is effectively unlimited — but only while the income lasts (a stream can dry up; rain stops).

**Worked example.** You hold 4 L of treated water and need 3.5 L a day; one collection trip a day brings 3 L. Net loss is 0.5 L/day, so $D = 4 / 0.5 = 8$ days. Skip the collection trip and $D = 4 / 3.5 \\approx 1.1$ days. The same stock is either comfortable or critical depending on the income — which is why protecting the *income* (a working filter, a known source, fuel to boil) matters as much as the stock.

### The fuel cost of water in snow country

In winter, water costs fuel. To turn 1 kg of snow at −10 °C into boiling water you must warm the ice to 0 °C (≈ 2.1 kJ per kg per °C × 10 °C ≈ 21 kJ), **melt** it (≈ 334 kJ), and heat the water to 100 °C (≈ 4.19 kJ per kg per °C × 100 °C ≈ 419 kJ):

$$
Q \\approx 21 + 334 + 419 \\approx 774\\ \\text{kJ per litre}
$$

Air-dried wood holds roughly 15 MJ per kg, but an open fire under a pot delivers only a small fraction of that to the water — assume about **10 %** for a rough budget (a stove or a sheltered, well-built fire does better). Then each litre needs about

$$
\\frac{0.774\\ \\text{MJ}}{15\\ \\text{MJ/kg} \\times 0.10} \\approx 0.5\\ \\text{kg of wood}
$$

and 4 L a day means about **2 kg of dry wood a day for water alone**, on top of the fire you need for warmth. The numbers are illustrative, but the conclusion is robust: in snow country **fuel is the water budget**. Start with water, not snow, if you have it (unfrozen open water or meltwater costs far less fuel), and melt snow with a little water already in the pot so it does not scorch.

### Energy: a rough daily ledger

Stage 6 estimated needs from resting metabolism × activity. For budgeting a camp, a simple additive ledger is easier to reason with: about **1,800 kcal** for camp life, plus a few hundred kcal for each block of heavy work, plus the cost of shivering on cold nights. A day of shelter-building and wood-gathering in the cold can easily reach 3,000 kcal. On a 500 kcal ration that is a deficit of about 2,500 kcal — roughly the size of your glycogen stores (Stage 8). Expect a noticeable drop in capacity after the first hard day, then a slower decline as fat takes over.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest (autumn).** Water is plentiful but must be treated; firewood is abundant but wet. The limiting resources are **warmth at night and dry fuel**. Day 1 goes on bed insulation, a covered woodpile and a water routine; food is rationed at a few hundred kcal a day without much harm.

**Desert.** Water is the only budget that matters. Work happens at dawn and dusk; the middle of the day is spent resting in shade. A ledger that shows 2 days of water turns “should we walk out?” into an arithmetic problem (Stage 4 and Stage 14: usually stay with the vehicle).

**Subarctic winter.** Every litre of water costs fuel; daylight may be only 5–6 hours. The ledger includes **daylight hours** and **wood per night**, and the plan protects the hours before dark for fuel and bed.

**Tropical rainforest.** Water falls from the sky; the budgets that bite are **dry clothing, foot health and gear** (Lesson 3) and heat strain from working in the afternoon.

**Coastal.** Fresh water is often scarce while fuel (driftwood) is plentiful — rain catchment and seeps are the income; resting in the shade and out of the wind is the saving.

**Urban disaster.** The same ledger runs a household through a long outage (Stage 16): stored water per person per day, food by expiry, battery watt-hours, and daylight for tasks without power.`,
    },
  ],
  mistakes: [
    'Budgeting only food and forgetting fuel, light, daylight and your own energy.',
    'Myth: “Ration your water to make it last.” Rationing drinking water below need only moves the deficit into your body; ration **sweat and effort** instead, and drink what you need.',
    'Treating a stock as safe without checking the income that keeps it topped up (a clogging filter, a drying stream, a wet woodpile).',
    'Eating most of the food on day 1 — or refusing to eat at all “to save it”.',
    'Spending the strongest hours of day 1 on low-value tasks such as looking for food.',
    'Myth: “In winter you have unlimited water — just eat snow.” Eating snow chills you and costs body heat; melting it costs fuel. Budget it.',
    'Not writing anything down: tired people misremember what they used yesterday.',
  ],
  exercises: [
    {
      id: 's18-l1-e1',
      title: 'Build a five-day resource ledger',
      level: 2,
      safety: 'home',
      minutes: 45,
      materials: ['Paper or a spreadsheet', 'Your usual overnight kit list'],
      steps: [
        'Pick a realistic scenario: you are stuck at one camp for five days (forest, desert, winter or coast).',
        'List every resource: water, food energy, fuel (stove gas or wood), light/battery, daylight, and your own sleep.',
        'For each, estimate stock, daily income and daily use. Use your Stage 4 water budget and Stage 6 energy estimate rather than guessing.',
        'Compute days of reserve for each; mark the limiting resource.',
        'Write at least four trigger points and the reserve you would hold back for each resource.',
      ],
      success: ['Every resource has stock, income, use and days of reserve.', 'You can name the limiting resource and explain why it — not food — drives day 1.'],
      skill: 'multi-day',
    },
    {
      id: 's18-l1-e2',
      title: 'Measure real consumption on a two-night trip',
      level: 3,
      safety: 'outdoor',
      minutes: 2880,
      materials: ['Normal backpacking kit', 'Scales (kitchen or luggage)', 'Notebook', 'A partner', 'A trip plan left with someone at home'],
      safetyNote: 'Use a legal campsite and follow its fire and camping rules. This is an ordinary, fully equipped trip — you are measuring, not rationing. Carry full food and water and turn back if anything goes wrong.',
      steps: [
        'Weigh food and fuel before leaving; note battery percentages and the water you carry.',
        'Each evening, record water drunk and used, food eaten (kcal from labels), fuel used, battery used, and hours of work, rest and sleep.',
        'On return, compare your measured use with your ledger estimates from the first exercise.',
        'Update your planning numbers for next time.',
      ],
      success: ['You have measured daily numbers for water, food, fuel and battery.', 'Your estimates are within about 25 % of what you measured, or you know why they were not.'],
      skill: 'multi-day',
    },
    {
      id: 's18-l1-e3',
      title: 'Ledger-driven play in the Multi-Day Camp',
      level: 2,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Play the Multi-Day Camp in the coastal environment. Before each day, write down which resource has the fewest days of reserve.',
        'Build the day’s blocks around that resource.',
        'Play once more, spending three blocks a day on food-getting, and compare energy and score.',
      ],
      success: ['You score at least 80 % on the coast.', 'You can explain in one sentence why food-getting lowered your score.'],
    },
  ],
  simulations: ['multi-day'],
  quiz: [
    {
      id: 's18-l1-q1',
      kind: 'numeric',
      prompt: 'You carry 6 L of treated water. You need 4 L a day, and one collection trip a day yields 2.5 L of treated water. How many days of reserve do you have?',
      unit: 'days',
      answer: 4,
      tolerance: 0.1,
      concepts: ['s18-resource-ledger', 'water-budget'],
      explanation: 'Net loss = 4 − 2.5 = 1.5 L/day; $D = 6 / 1.5 = 4$ days. Without the trip it would be $6/4 = 1.5$ days — protecting income matters as much as stock.',
    },
    {
      id: 's18-l1-q2',
      kind: 'single',
      prompt: 'Evening ledger on day 2 in a cold forest: water 5 days of reserve, food 3 days, firewood 0.5 nights, phone 6 days. What should tomorrow morning be built around?',
      choices: [
        { id: 'a', text: 'Food — it is the next most urgent after firewood, so start fishing', why: 'Food shortage over three days is uncomfortable, not dangerous; food-getting also usually costs more than it returns.' },
        { id: 'b', text: 'Firewood — it runs out tonight, and a cold night without fire drives warmth, sleep and morale down', why: 'Correct: the shortest reserve among resources that will hurt you soon.' },
        { id: 'c', text: 'Phone — send a status message while it still has charge', why: 'Six days of reserve; a fixed check-in time is enough.' },
        { id: 'd', text: 'Water — it is always the first priority', why: 'Water is a high priority, but with five days of reserve it is not today’s limiting resource.' },
      ],
      answer: 'b',
      concepts: ['s18-limiting-resource', 'long-duration-fire', 'priorities'],
      explanation: 'Plan around the resource with the fewest days of reserve among those whose shortage harms you soonest. Priorities are a starting point; the ledger tells you what they mean today.',
    },
    {
      id: 's18-l1-q3',
      kind: 'multi',
      prompt: 'You are waiting for rescue for several days in a hot, dry place with limited water. Which actions stretch the water budget safely?',
      choices: [
        { id: 'a', text: 'Do heavy work at dawn and dusk; rest in shade through midday', why: 'Yes — sweat loss depends heavily on when you work.' },
        { id: 'b', text: 'Drink only small sips, well below thirst, to make the supply last', why: 'No — rationing drinking water impairs you and does not reduce need; ration sweat instead.' },
        { id: 'c', text: 'Keep clothing on and loose to shade the skin', why: 'Yes — covered skin gains less radiant heat.' },
        { id: 'd', text: 'Eat less protein-heavy food', why: 'Yes — digesting protein needs extra water to excrete urea (Stage 8).' },
        { id: 'e', text: 'Spend the afternoon searching for food', why: 'No — heavy work in the heat for low-energy returns.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['water-budget', 's18-work-rest', 'dehydration'],
      explanation: 'Reduce use (timing, shade, clothing, diet) rather than rationing drinking below need.',
    },
    {
      id: 's18-l1-q4',
      kind: 'numeric',
      prompt: 'Using this lesson’s rough budget — 774 kJ to turn 1 L of −10 °C snow into boiling water, wood at 15 MJ/kg, 10 % of the heat reaching the pot — how many kilograms of dry wood do you need to make 3 L of boiled water?',
      unit: 'kg',
      answer: 1.55,
      tolerance: 0.15,
      concepts: ['snowmelt', 'long-duration-fire', 's18-resource-ledger'],
      explanation: 'Per litre: $0.774 / (15 \\times 0.10) \\approx 0.52$ kg. For 3 L: ≈ 1.55 kg. In winter the water budget is a fuel budget.',
    },
    {
      id: 's18-l1-q5',
      kind: 'truefalse',
      prompt: 'In a wait of a few days, spending most of each day looking for food is a good investment because food is energy.',
      answer: false,
      concepts: ['energy-return', 'rationing'],
      explanation: 'False. In a short wait, food-getting usually returns fewer calories than it costs, and it takes time and water away from shelter, fuel, signals and rest. Food matters over weeks; carry enough for the days you might be delayed.',
    },
    {
      id: 's18-l1-q6',
      kind: 'order',
      prompt: 'Day 1 at a cold, wet forest camp where you will wait several days. Order these tasks for the morning and afternoon.',
      items: [
        { id: 'bed', text: 'Improve shelter and insulate the bed from the ground' },
        { id: 'water', text: 'Set up a water routine: source, treatment, clean/dirty bottles' },
        { id: 'wood', text: 'Gather tonight’s firewood and put it under cover' },
        { id: 'signal', text: 'Build signals in the nearest open ground' },
        { id: 'food', text: 'Consider legal passive food-getting if everything else is done' },
      ],
      answer: ['bed', 'water', 'wood', 'signal', 'food'],
      concepts: ['priorities', 's18-work-rest', 's18-limiting-resource'],
      explanation: 'In cold, wet conditions warmth dominates the first night, then water, then fuel before dark and signals before any aircraft could come. Food-getting is last. In a desert, water and shade would lead; if an aircraft were expected today, signals would move up.',
    },
  ],
  scenario: {
    id: 's18-l1-sc',
    setup: 'You and a friend are stranded on a sandy coastal spit after your sea kayak was damaged; the Coastguard knows you are overdue and bad weather is forecast for day 3. You have 5 L of water, a small filter, 3,500 kcal of food, a tarp, driftwood everywhere and a brackish seep 400 m away that yields about 2 L of filterable water per trip. It is warm and sunny.',
    question: 'How do you plan the first two days?',
    choices: [
      { id: 'a', text: 'Ration water to half a litre each per day until rescue, and spend the days fishing to save food.', why: 'Rationing drinking water impairs judgment and invites heat illness; fishing in the sun burns water and energy for little return.' },
      { id: 'b', text: 'Keep a daily ledger. Mornings and evenings: seep trips and filtering, tarp shade with a rain catchment ready for day 3, a driftwood woodpile under cover, and signals on the open beach. Rest in shade through midday. Eat a steady small ration and drink to need.', why: 'Best: water income is protected, rain on day 3 is prepared for, effort is timed to the cool hours, signals are ready.' },
      { id: 'c', text: 'Walk along the coast to find help while you are still strong.', why: 'Leaves the place searchers will look, in the sun, with limited water; usually worse than staying at a known location (Stage 14).' },
      { id: 'd', text: 'Rest in the shade all day to save water and do nothing until the Coastguard arrives.', why: 'Saving sweat is right, but with no water income, catchment or signals, the ledger runs out and you are harder to find.' },
    ],
    best: 'b',
    debrief: 'This joins Stage 4’s water budget with Stage 14’s stay-or-move and this lesson’s ledger. On the coast, **fresh water is the limiting resource** and fuel is not; protect the water income (seep + filter + rain catchment), do the work in the cool hours, hold a reserve, and make yourself visible. Food is the least urgent budget over two or three days.',
    concepts: ['s18-limiting-resource', 'water-budget', 'stay-or-move', 'signaling'],
  },
  summary: [
    'Keep a **daily ledger** for water, food, fuel, light/battery, daylight — and your own energy and sleep.',
    '**Days of reserve** $D = S/(u - i)$; the smallest one among resources that will hurt you is the **limiting resource**.',
    'Protect **income** (a working filter, a known source, dry fuel) as carefully as stock.',
    'Front-load high-value work; **rest is a task**; ration sweat, not drinking water.',
    'In snow country, **water costs fuel** — roughly 0.5 kg of dry wood per litre on an open fire (illustrative).',
    'Write **trigger points** and hold a **reserve** of each resource.',
    'Food-getting rarely repays its cost in a short wait; fire, fishing and foraging are regulated.',
  ],
  furtherReading: ['afh-10-644', 'army-atp-3-50-21', 'nasem-energy-2023', 'keys-starvation'],
  references: ['afh-10-644', 'army-atp-3-50-21', 'nasem-energy-2023', 'iom-water-2005', 'keys-starvation', 'usariem-cold', 'cdc-emergency-water', 'mifflin-1990', 'noaa-fisheries', 'usfs-fire', 'lnt-principles'],
}
