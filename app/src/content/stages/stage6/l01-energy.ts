import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's6-l1',
  stage: 6,
  order: 1,
  title: 'Energy requirements',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l7'],
  concepts: ['energy-needs', 'bmr', 'macronutrients', 'water-before-food', 'energy-stores'],
  objectives: [
    'Estimate **basal metabolic rate** with the Mifflin–St Jeor equation and scale it to a day with activity and environment factors.',
    'Explain what **carbohydrate, fat and protein** each contribute, and why energy density matters for carried food.',
    'Describe the body’s **fuel stores** — glycogen, fat, lean tissue — and what a multi-day deficit does to performance.',
    'Rank **water above food** and explain why eating can make a water shortage worse.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Food is energy and building material. In most short emergencies (hours to a few days) nobody dies of hunger — but a large energy deficit makes you colder, weaker, slower-thinking and more irritable, which drives the bad decisions that *do* kill. The aim of this lesson is to put numbers on that deficit so you can plan food like you plan water.

### Three layers of daily energy use

1. **Basal metabolic rate (BMR)** — the energy to keep you alive at complete rest: heart, brain, liver, kidneys, keeping warm in comfortable conditions. For most adults it is **1,200–1,900 kcal/day** and is roughly 60–70 % of a sedentary person’s total.
2. **Activity** — everything you do on top. Walking with a pack all day can more than double your total.
3. **Environment** — cold adds the cost of shivering, heavier clothing and wading through snow; heat adds a little for sweating and cardiovascular strain.

Digesting food itself costs about 10 % of what you eat (the *thermic effect*); the activity factors below already include it.`,
    },
    { type: 'diagram', id: 'energy-stack', caption: 'The same person burns roughly 2,500 kcal doing camp work and nearly 5,000 kcal skiing out in deep cold.' },
    {
      type: 'md',
      md: `### Estimating BMR: Mifflin–St Jeor

In words: bigger bodies (more mass, more height) burn more; the rate falls slowly with age; men burn a little more than women of the same size because they typically carry more muscle. Mifflin and St Jeor fitted this to measurements of about 500 adults in 1990:

$$
\\text{BMR (kcal/day)} = 10\\,m + 6.25\\,h - 5\\,a + s
$$

where $m$ is mass in kg, $h$ height in cm, $a$ age in years, and $s = +5$ for men, $-161$ for women. It is accurate to within roughly ±10 % for most healthy adults — good enough for planning, not for precise diets.

### Scaling to a day

Multiply BMR by a **physical activity level (PAL)**, then by an **environment factor**:

$$
\\text{TDEE} = \\text{BMR} \\times \\text{PAL} \\times f_{\\text{env}}
$$

| Day | PAL (approx.) |
|---|---|
| Resting in a shelter, minimal work | 1.3 |
| Camp work: firewood, water, shelter upkeep | 1.5–1.6 |
| Walking with a pack ~4 h | 1.8–1.9 |
| Walking or skiing with a pack ~8 h | 2.2–2.5 |

| Environment | $f_{\\text{env}}$ (illustrative) |
|---|---|
| Temperate, well clothed | 1.0 |
| Cool or hot | 1.05 |
| Cold (−10 to 0 °C) | 1.1–1.2 |
| Severe cold (below −15 °C) with snow travel | 1.2–1.3+ |

Military cold-weather guidance (TB MED 508) notes that hard work in the cold often needs **more than 4,000 kcal per day**. The environment factors here are simplifications; poor clothing and shelter raise them sharply because shivering can multiply resting heat production several-fold for short periods.`,
    },
    {
      type: 'md',
      md: `### Macronutrients

| Nutrient | Energy | Role in the field |
|---|---|---|
| **Carbohydrate** | 4 kcal/g | Fast fuel; refills **glycogen**; the brain’s preferred fuel; fuels hard efforts and shivering |
| **Fat** | 9 kcal/g | Most energy per gram — ideal for carried food; slow, steady fuel |
| **Protein** | 4 kcal/g | Repair and immune function; a poor main fuel — breaking it down produces urea, which needs water to excrete |

**Energy density** decides what is worth carrying: nuts and nut butters ≈ 6 kcal/g, chocolate ≈ 5, energy bars 4–5, dried fruit ≈ 3, fresh fruit < 1. A day of food for hard work (4,000 kcal) weighs about **0.8–1 kg** if chosen for density.

A diet of **lean meat alone** fails: the liver can only process so much protein (roughly a third of energy intake at most). Trappers and explorers eating only lean game in winter reported weakness, nausea and diarrhoea despite eating large amounts — sometimes called "rabbit starvation". Fat and carbohydrate are not optional extras.`,
    },
    { type: 'diagram', id: 'fuel-stores', caption: 'Glycogen is a small, fast tank; fat is a large, slow one. Protein is structure the body spends reluctantly.' },
    {
      type: 'md',
      md: `### What a deficit does

- **Hours to 2 days:** glycogen (≈ 500 g, ≈ 2,000 kcal in muscle and liver) carries hard work. When it runs low, pace drops sharply ("hitting the wall"), concentration wanders, and cold tolerance falls because shivering depends heavily on carbohydrate.
- **Days 2–4:** the body shifts to fat and makes ketones; hunger often peaks then eases. Some protein is broken down to make glucose.
- **Weeks:** fat-adapted but weaker, colder, slower to heal, more irritable and apathetic — the classic findings of the Minnesota semi-starvation experiment.

A lean adult with 10 % body fat has half the reserve of one with 20 %. Children, lean people and the elderly run out sooner.`,
    },
    { type: 'diagram', id: 'food-priority', caption: 'Food sits below water, warmth and being found — but above nothing else you can easily fix.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Water before food',
      md: 'If water is short, **eat little or nothing** until you have water. Digestion and especially protein metabolism increase water needs (urea must be excreted in urine), and dry food draws water into the gut. A few days without food is uncomfortable; a few days without water in heat can kill. With enough water, eat — a fed person thinks and stays warmer.',
    },
    { type: 'sim', id: 'energy-budget', caption: 'Plan rations and food-getting for a multi-day scenario; watch glycogen, fat and performance.' },
  ],
  whyItMatters: 'Energy is the currency behind warmth, strength and judgment. Knowing your numbers lets you choose the right amount of food to carry, ration it rationally when stranded, and recognise when “finding food” would cost more energy than it returns — the most common and least visible survival mistake.',
  science: [
    {
      type: 'md',
      md: `### Worked example

A 60 kg, 165 cm, 40-year-old woman:

$$
\\text{BMR} = 10(60) + 6.25(165) - 5(40) - 161 = 600 + 1031 - 200 - 161 \\approx 1{,}270 \\text{ kcal/day}
$$

- Resting in a shelter (PAL 1.3, temperate): $1270 \\times 1.3 \\approx 1{,}650$ kcal.
- Walking out 8 h at −5 °C (PAL 2.3, $f = 1.15$): $1270 \\times 2.3 \\times 1.15 \\approx 3{,}360$ kcal.

An 80 kg, 180 cm, 30-year-old man: BMR $= 800 + 1125 - 150 + 5 = 1{,}780$ kcal; the same cold walk-out costs $\\approx 4{,}710$ kcal.

### METs — a second way to estimate activity

A **MET** is resting metabolic rate, about **1 kcal per kg per hour**. Walking with a pack on trails is about 5–7 METs. Four hours at 6 METs for a 70 kg person: $70 \\times 6 \\times 4 \\approx 1{,}700$ kcal gross, of which roughly $70 \\times 4 = 280$ would have been spent anyway at rest.

### How much fat does a deficit burn?

Adipose tissue holds roughly **7,700 kcal per kg** (fat itself is 9 kcal/g; adipose tissue is ~85 % fat). A 2,000 kcal/day deficit for 5 days (10,000 kcal) is about 1.3 kg of adipose tissue if it all came from fat — in practice some comes from glycogen and lean tissue (with their stored water), so the scale shows more.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Subarctic ski tour:** 3,000 kcal/day of food packed for a trip that turns out to demand 4,500. After three days the group is glycogen-depleted, shivering poorly and making slow decisions on avalanche terrain. Fix: pack for the *cold* number, favour fat-dense food, eat regularly including a snack before sleep.

**Desert vehicle breakdown:** 41 °C, 12 L of water, 2,000 kcal of jerky and crackers. Resting in shade the occupants burn ~2,000 kcal/day each, but water is the real limit — they eat crackers sparingly, skip the salty jerky, and wait.

**Temperate forest, lost overnight:** one energy bar and no dinner. Uncomfortable but harmless; the priority is insulation from the ground and staying put.

**Tropical coast, week-long wait:** plenty of water, little food. A week at a 2,000 kcal deficit costs ~2 kg; it is survivable — the risks are infection, sun and morale.

**Urban power cut in winter:** the flat is 8 °C. People need more energy to stay warm, and hot drinks and regular meals help as much as extra blankets.`,
    },
  ],
  mistakes: [
    'Planning food for a “normal” day when the trip demands hard work in cold.',
    'Eating heavily when water is short — digestion and protein raise water needs.',
    'Myth: “You can survive three weeks without food, so food doesn’t matter.” Survival is not performance; a deficit degrades warmth and judgment within a day or two.',
    'Carrying low-density food (fresh fruit, tins) for a weight-limited trip.',
    'Relying on lean meat or protein bars alone — protein is a poor main fuel.',
    'Treating BMR equations as precise: they are ±10 % estimates.',
  ],
  exercises: [
    {
      id: 's6-l1-e1',
      title: 'Calculate your own energy budget',
      level: 1,
      safety: 'home',
      minutes: 25,
      materials: ['Scale, tape measure', 'Calculator or spreadsheet'],
      steps: [
        'Compute your BMR with Mifflin–St Jeor.',
        'Compute total daily energy for four days: resting at home, a day hike, a camp day in the cold, and an 8-hour walk-out at −5 °C.',
        'Convert each into kilograms of carried food at 4.5 kcal/g.',
        'Write the numbers on your kit card next to your water numbers.',
      ],
      success: ['Four daily totals with the working shown.', 'You can explain which factor changed most between them.'],
      skill: 'energy-planning',
    },
    {
      id: 's6-l1-e2',
      title: 'Energy-density audit of your trail food',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Your usual trail/emergency food with nutrition labels', 'Kitchen scale'],
      steps: [
        'For each item record kcal per 100 g and its carbohydrate, fat and protein grams.',
        'Rank them by kcal per gram.',
        'Design a 3,500 kcal day under 800 g that includes some carbohydrate for hard efforts and some fat for density.',
      ],
      success: ['A day plan ≥ 3,500 kcal and ≤ 800 g.', 'No more than about a third of energy from protein.'],
      skill: 'energy-planning',
    },
  ],
  simulations: ['energy-budget'],
  quiz: [
    {
      id: 's6-l1-q1',
      kind: 'numeric',
      prompt: 'Using Mifflin–St Jeor, estimate BMR for a man of 70 kg, 175 cm, 30 years, in **kcal/day**.',
      unit: 'kcal/day',
      answer: 1649,
      tolerance: 5,
      concepts: ['bmr'],
      explanation: '10 × 70 + 6.25 × 175 − 5 × 30 + 5 = 700 + 1093.75 − 150 + 5 ≈ **1,649 kcal/day**.',
    },
    {
      id: 's6-l1-q2',
      kind: 'numeric',
      prompt: 'That same man (BMR ≈ 1,650 kcal) skis out for 8 hours at −20 °C: PAL 2.3, environment factor 1.25. Estimate his daily expenditure in **kcal**.',
      unit: 'kcal',
      answer: 4744,
      tolerance: 60,
      concepts: ['energy-needs'],
      explanation: '1,650 × 2.3 × 1.25 ≈ **4,740 kcal** — nearly three times his BMR, and more than most people carry.',
    },
    {
      id: 's6-l1-q3',
      kind: 'single',
      prompt: 'You are stranded in desert heat with 3 L of water and a bag of beef jerky. What should you do about food?',
      choices: [
        { id: 'a', text: 'Eat the jerky to keep your strength up.', why: 'Protein and salt increase water needs — the opposite of what you want.' },
        { id: 'b', text: 'Eat little or nothing until water is secure; rest in shade.', why: 'Correct — water before food, and reduce sweat losses.' },
        { id: 'c', text: 'Eat the jerky but drink only small sips.', why: 'Rationing water while adding a water load is doubly wrong.' },
        { id: 'd', text: 'Walk to find food while it is still daylight.', why: 'Walking in heat costs far more water than any food could repay.' },
      ],
      answer: 'b',
      concepts: ['water-before-food', 'water-needs'],
      explanation: 'Water limits survival in heat; food can wait days. Digesting protein produces urea that must be excreted with water.',
    },
    {
      id: 's6-l1-q4',
      kind: 'multi',
      prompt: 'Which statements about fuel stores are correct?',
      choices: [
        { id: 'a', text: 'Glycogen stores hold roughly 2,000 kcal in an average adult.', why: 'Correct — about 500 g at 4 kcal/g.' },
        { id: 'b', text: 'Fat stores hold tens of thousands of kcal, even in fairly lean people.', why: 'Correct — 10 kg of adipose tissue ≈ 77,000 kcal.' },
        { id: 'c', text: 'Low glycogen reduces cold tolerance because shivering relies heavily on carbohydrate.', why: 'Correct — cold and hunger compound each other.' },
        { id: 'd', text: 'Protein is the body’s main energy reserve.', why: 'No — protein is structure (muscle, organs); losing it weakens you.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['energy-stores', 'heat-balance'],
      explanation: 'Small fast tank (glycogen), large slow tank (fat), and structure you don’t want to burn (protein).',
    },
    {
      id: 's6-l1-q5',
      kind: 'single',
      prompt: 'For a weight-limited 5-day ski trip, which food choice gives the most energy per kilogram carried?',
      choices: [
        { id: 'a', text: 'Tinned stew', why: '≈ 1 kcal/g, mostly water and tin.' },
        { id: 'b', text: 'Fresh apples', why: '< 1 kcal/g.' },
        { id: 'c', text: 'Nuts, chocolate and cheese', why: 'Correct — 4–6 kcal/g thanks to fat.' },
        { id: 'd', text: 'Lean jerky only', why: 'Moderately dense but protein-only — a poor main fuel.' },
      ],
      answer: 'c',
      concepts: ['macronutrients'],
      explanation: 'Fat carries 9 kcal/g. Mix it with carbohydrate for hard efforts and a little protein for repair.',
    },
    {
      id: 's6-l1-q6',
      kind: 'truefalse',
      prompt: 'Because people can survive weeks without food, eating has little effect on survival odds in a 3-day cold-weather emergency.',
      answer: false,
      concepts: ['energy-stores', 'priorities'],
      explanation: 'Survival time without food is long, but performance, warmth and judgment degrade within a day or two of a large deficit — especially in cold.',
    },
  ],
  scenario: {
    id: 's6-l1-sc',
    setup: 'Autumn, boreal forest, 2 °C at night. Your canoe partner and you are wind-bound on an island for an unknown time (probably 2–4 days). Plenty of lake water and a filter. You have 3,000 kcal of food between you and a tarp. Your partner wants to eat normally now “to stay strong” and deal with it later.',
    question: 'What is the best food plan?',
    choices: [
      { id: 'a', text: 'Eat normally now; you can fish later.', why: 'Leaves nothing for the paddle out and bets on an uncertain catch.' },
      { id: 'b', text: 'Eat nothing to save everything for the crossing.', why: 'Glycogen empties and cold tolerance falls; a starved paddler on cold water is a hazard.' },
      { id: 'c', text: 'Split the food into small daily rations with a larger share kept for the crossing day; rest, stay warm and dry; eat a snack before sleep.', why: 'Best: covers the uncertain wait, keeps some glycogen and warmth, and fuels the hardest, riskiest day.' },
      { id: 'd', text: 'Spend the day foraging on the island to top up.', why: 'Energy spent searching usually exceeds what is found, and eating unknown plants is dangerous.' },
    ],
    best: 'c',
    debrief: 'With water secure, eat — but ration for the whole uncertain period and weight it toward the day that demands the most (the crossing). Keep activity low while waiting; cold is the bigger threat than hunger. Foraging on a small island rarely repays its cost.',
    concepts: ['rationing', 'energy-stores', 'heat-balance'],
  },
  summary: [
    'BMR (Mifflin–St Jeor) = 10·kg + 6.25·cm − 5·age + 5 (men) / −161 (women).',
    'Daily need ≈ BMR × activity (1.3–2.5) × environment (cold adds 10–30 %+).',
    'Carbohydrate refills glycogen; fat is dense fuel; protein is structure and needs water to process.',
    'Glycogen ≈ 2,000 kcal lasts 1–2 hard days; then weaker, colder, slower thinking.',
    'Water before food: with little water, eat little.',
  ],
  furtherReading: ['usariem-cold', 'nasem-energy-2023'],
  references: ['mifflin-1990', 'nasem-energy-2023', 'usariem-cold', 'keys-starvation', 'iom-water-2005', 'army-atp-3-50-21'],
}
