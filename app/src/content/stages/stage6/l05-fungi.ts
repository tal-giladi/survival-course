import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's6-l5',
  stage: 6,
  order: 5,
  title: 'Fungi: why not',
  level: 'advanced',
  minutes: 30,
  prerequisites: ['s6-l4'],
  concepts: ['fungi-safety', 'amatoxins', 'energy-return', 'foraging-law'],
  objectives: [
    'Explain why wild mushrooms have **almost no survival value** and a severe downside.',
    'Describe how **amatoxins** work and the **delayed, deceptive timeline** of poisoning.',
    'List the reasons mushroom identification is **expert-only**, and why photos and apps fail.',
    'Know what to do immediately after a **suspected mushroom ingestion**.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Rule for this course',
      md: 'Do not eat wild mushrooms in a survival situation. Ever. They provide almost no energy, and a single identification error can destroy your liver days later, far from help.',
    },
    {
      type: 'md',
      md: `### The cost–benefit is lopsided

Fresh mushrooms are about **90 % water** and typically provide only around **20–40 kcal per 100 g** — a large basket is a few hundred kilocalories. The benefit in an emergency is tiny. The downside includes the most lethal food poisoning most people will ever encounter.

### Amatoxins

**Amatoxins** are found in the death cap (*Amanita phalloides*), destroying angels (other white *Amanita* species), some small brown *Galerina* and some *Lepiota* species. They are responsible for most deaths after eating foraged mushrooms worldwide.

- They **stop protein synthesis** in cells by blocking RNA polymerase II. The liver, which absorbs them first and makes proteins constantly, is hit hardest; kidneys too.
- They are **heat-stable**: cooking, drying and freezing do not destroy them.
- A **single cap** can be enough to kill an adult.
- Death caps are reported as **tasting pleasant**.

### The deceptive timeline

1. **Latent phase (usually 6–24 h):** no symptoms. By the time anyone feels ill, the toxin is absorbed.
2. **Gastrointestinal phase:** severe vomiting and profuse watery diarrhoea, causing dehydration.
3. **Apparent recovery (around day 2–3):** the patient feels better — while liver enzymes climb.
4. **Liver (and kidney) failure (days 3–7):** jaundice, bleeding, confusion. Some survive with intensive care; some need a liver transplant; some die.

In a December 2016 cluster in Northern California, 14 people were poisoned by foraged death caps; three needed liver transplants and a child was left with permanent neurological injury.`,
    },
    { type: 'diagram', id: 'amatoxin-timeline', caption: 'The gap between meal and symptoms is what makes amatoxin poisoning so dangerous.' },
    {
      type: 'md',
      md: `### Other dangerous syndromes (not a complete list)

| Toxin / group | Typical onset | Main effect |
|---|---|---|
| **Orellanine** (some *Cortinarius*) | days to 2–3 weeks | kidney failure |
| **Gyromitrin** (false morels) | 6–12 h | GI upset, seizures, liver damage |
| **Muscarine** (some *Inocybe*, *Clitocybe*) | 15 min – 2 h | sweating, salivation, slow heart |
| **Ibotenic acid / muscimol** (fly agaric, panther cap) | 30 min – 2 h | confusion, agitation, delirium |
| **GI irritants** (many species) | 30 min – 3 h | vomiting and diarrhoea, dehydration |

Rule of thumb used by poison centres: **symptoms starting 6 hours or more after a wild-mushroom meal should be treated as a possible amatoxin poisoning** until proven otherwise.

### Why identification is expert-only

- **Key features are hidden or transient:** the death cap’s cup-like **volva** sits buried in the soil and is often broken off when picked; the ring can wash off; young "egg" stages resemble puffballs; colour varies with age and weather.
- **Spore prints, smell, microscopy and chemistry** are standard tools for experts — none are in a photograph.
- **Look-alikes cross continents:** death caps have been mistaken for edible species familiar from other countries — a known hazard for people foraging in a new place.
- **Confidence is not accuracy:** experienced foragers are among the people poisoned every year.
- **Mixed baskets:** one toxic mushroom among edible ones contaminates the meal.

Learning mushroom identification is a legitimate, rewarding hobby — through a **mycological society**, in person, over years, for recreation and science. It is not a survival skill.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Suspected ingestion',
      md: 'Call emergency services or a poison centre **immediately**, even with no symptoms (US: Poison Help 1-800-222-1222). Keep any leftover mushrooms, peelings or photos for identification. Early hospital care improves outcomes. Do not wait to see if symptoms develop.',
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Mushroom picking is regulated in many places: some parks and reserves prohibit it, some national forests require personal-use permits and set daily limits, and Nordic rights of public access allow it for personal use. Check the land manager: [References → Law varies by jurisdiction](#/references).',
    },
  ],
  whyItMatters: 'Mushrooms are a textbook example of a survival “resource” whose expected value is negative: tiny energy, catastrophic tail risk, and a delay that hides the consequence until it is too late to act. Recognising that pattern is the lesson.',
  science: [
    {
      type: 'md',
      md: `### Expected value of eating an unknown mushroom

Let the energy gained be $E \\approx 150$ kcal (half a kilogram). Suppose — optimistically — a 1 % chance that it is an amatoxin species. The expected cost includes a 1 % chance of liver failure days from help. No realistic energy gain balances an outcome that is **irreversible**; in decision terms, the downside is unbounded and the upside is trivial.

### Why the liver?

Toxins absorbed from the gut travel first to the liver via the portal vein. Liver cells take up amatoxins efficiently and depend on constant protein synthesis; amatoxin is also partly excreted in bile and re-absorbed (**enterohepatic circulation**), so the liver is exposed again and again. This is why intensive hospital care focuses on fluids, blocking uptake and monitoring liver function.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Coastal California, winter rains:** death caps fruit abundantly under oaks; clusters of poisonings follow wet seasons.

**Central European forest, autumn:** mushroom picking is a mainstream tradition — and poison centres see a seasonal surge in cases, including experienced pickers.

**Boreal forest (Scandinavia, Canada):** *Cortinarius* species with delayed kidney toxicity grow alongside popular edibles.

**Tropics:** thousands of undescribed species; no field guide covers them.

**Urban parks:** death caps grow under planted oaks in several cities; children and dogs are at risk.`,
    },
  ],
  mistakes: [
    'Myth: “Poisonous mushrooms taste bad.” Death caps are reported to taste pleasant.',
    'Myth: “Cooking or drying makes mushrooms safe.” Amatoxins are heat-stable.',
    'Myth: “If it tarnishes silver / peels easily / animals eat it, it’s safe.” None of these folk tests works.',
    'Waiting for symptoms before calling for help.',
    'Identifying from photographs or apps.',
    'Assuming mushrooms that look like an edible species from home are the same species abroad.',
  ],
  exercises: [
    {
      id: 's6-l5-e1',
      title: 'Spore print from a shop-bought mushroom',
      level: 3,
      safety: 'home',
      minutes: 20,
      materials: ['Shop-bought mushrooms (e.g., button and oyster)', 'White and black paper', 'Bowl or glass'],
      steps: [
        'Cut the stem from a mature cap; place gills-down, half on white paper and half on black.',
        'Cover with a bowl and leave for 6–12 hours.',
        'Compare the print colours between species. Note how much a real identification depends on features no photo shows.',
      ],
      success: ['A visible spore print.', 'You can explain why a photo cannot show spore colour.'],
      skill: 'plant-id',
      safetyNote: 'Use only shop-bought mushrooms. Do not collect wild fungi for this exercise.',
    },
    {
      id: 's6-l5-e2',
      title: 'Poison-centre card',
      level: 1,
      safety: 'home',
      minutes: 15,
      steps: [
        'Find the poison-centre number for your country and for your next travel destination.',
        'Add them to your phone and write them on your kit card with emergency numbers.',
        'Write the rule: “Suspected ingestion → call now, keep the sample.”',
      ],
      success: ['Numbers on your kit card and phone.'],
    },
    {
      id: 's6-l5-e3',
      title: 'Attend a mycological society foray as an observer',
      level: 3,
      safety: 'supervised',
      minutes: 180,
      steps: [
        'Find a local mycological society and join a public identification walk.',
        'Ask the leader to show a toxic species and explain which features they use to separate it.',
        'Record how many specimens even experts leave as “uncertain”.',
      ],
      success: ['You can describe one toxic species of your region and why it is confused with an edible one.'],
      safetyNote: 'Observation and learning only. Do not eat anything collected on the foray as part of this course.',
    },
  ],
  quiz: [
    {
      id: 's6-l5-q1',
      kind: 'single',
      prompt: 'A friend ate wild mushrooms at dinner and, at 6 a.m. the next day (about 10 hours later), develops violent vomiting and watery diarrhoea. What is the right response?',
      choices: [
        { id: 'a', text: 'Ordinary stomach upset — give plenty of fluids and let them rest.', why: 'The delayed onset is the classic amatoxin warning.' },
        { id: 'b', text: 'Treat as amatoxin poisoning: emergency care and poison centre now.', why: 'Correct — onset ≥ 6 hours is a red flag. Bring any leftovers.' },
        { id: 'c', text: 'Wait it out: if they feel better tomorrow, they are fine.', why: 'Apparent recovery is part of the amatoxin course.' },
        { id: 'd', text: 'Give activated charcoal and carry on with the trip as planned.', why: 'Only on professional advice, and never instead of evacuation.' },
      ],
      answer: 'b',
      concepts: ['amatoxins'],
      explanation: 'Late onset plus a wild-mushroom meal = assume amatoxin. Early hospital care matters; bring any leftovers.',
    },
    {
      id: 's6-l5-q5',
      kind: 'single',
      prompt: 'Which statement best describes the decision to eat unidentified wild mushrooms when lost?',
      choices: [
        { id: 'a', text: 'Worth the gamble if you are hungry enough and far from help.', why: 'Hunger does not change the toxin; the energy is trivial.' },
        { id: 'b', text: 'Trivial benefit against a rare but irreversible, delayed catastrophe.', why: 'Correct — never worth it.' },
        { id: 'c', text: 'Safe enough as long as you eat only a small amount at first.', why: 'A single cap can kill.' },
        { id: 'd', text: 'Safe if you first pass them through the universal edibility test.', why: 'Delayed toxins defeat the test completely.' },
      ],
      answer: 'b',
      concepts: ['fungi-safety', 'reversibility', 'decisions'],
      explanation: 'Irreversible downside, trivial upside: the reversibility principle from Stage 1 applies directly.',
    },
    {
      id: 's6-l5-q2',
      kind: 'single',
      prompt: 'Which statement about amatoxins is correct?',
      choices: [
        { id: 'a', text: 'Thorough cooking destroys them, so cooked mushrooms are safe.', why: 'Amatoxins are heat-stable.' },
        { id: 'b', text: 'Drying the mushrooms first breaks the toxins down.', why: 'Drying does not help.' },
        { id: 'c', text: 'Freezing for several days inactivates them.', why: 'Freezing does not help.' },
        { id: 'd', text: 'Cooking, drying and freezing all leave them intact.', why: 'Correct — amatoxins are heat-stable and survive all three.' },
      ],
      answer: 'd',
      concepts: ['amatoxins'],
      explanation: 'Amatoxins are heat-stable; cooking, drying and freezing do not help.',
    },
    {
      id: 's6-l5-q3',
      kind: 'single',
      prompt: 'Which of these is **not** a reason a mushroom can’t be reliably identified from a photograph?',
      choices: [
        { id: 'a', text: 'The volva may be buried in the soil or broken off.', why: 'A real reason — a key feature can be hidden.' },
        { id: 'b', text: 'Spore colour, smell and microscopic features are not visible.', why: 'A real reason — these features never show in a photo.' },
        { id: 'c', text: 'Colour and shape change with age and weather.', why: 'A real reason — appearance is transient.' },
        { id: 'd', text: 'Photographs are always too blurry to show the detail.', why: 'Correct — this is not the reason; the problem is missing features, not image quality.' },
      ],
      answer: 'd',
      concepts: ['fungi-safety'],
      explanation: 'The diagnostic features are often hidden, transient or microscopic — no image quality fixes that.',
    },
    {
      id: 's6-l5-q4',
      kind: 'single',
      prompt: 'Fresh mushrooms give about 30 kcal per 100 g. How much energy would 400 g provide?',
      choices: [
        { id: 'a', text: '1,200 kcal', why: 'That multiplies 400 × 30 without dividing by 100 g.' },
        { id: 'b', text: '120 kcal', why: 'Correct — 4 × 30.' },
        { id: 'c', text: '12 kcal', why: 'That divides by 1,000 instead of 100 — a unit slip.' },
        { id: 'd', text: '13 kcal', why: 'That inverts the ratio (400 / 30).' },
      ],
      answer: 'b',
      concepts: ['energy-return', 'fungi-safety'],
      explanation: '4 × 30 = **120 kcal** — about half an energy bar, for a risk of fatal liver failure.',
    },
  ],
  scenario: {
    id: 's6-l5-sc',
    setup: 'You are hiking in a temperate forest abroad with a friend who grew up picking mushrooms in her home country. You are both fine on food, but she spots a patch of large, pale mushrooms under oaks that “look exactly like” a species she has eaten for years, and wants to cook them at camp.',
    question: 'What is the best response?',
    choices: [
      { id: 'a', text: 'Trust her experience, since she has picked mushrooms for many years.', why: 'Experience from another continent does not cover local look-alikes — a documented cause of death-cap poisonings.' },
      { id: 'b', text: 'Each eat a small amount first and wait an hour to see if you react.', why: 'Amatoxin symptoms take 6–24 hours; an hour proves nothing.' },
      { id: 'c', text: 'Decline, explain the look-alike risk abroad, and leave them be.', why: 'Best: you have food and gain nothing but a high, irreversible risk.' },
      { id: 'd', text: 'Cook them thoroughly at camp so that any toxins are destroyed.', why: 'Amatoxins survive cooking.' },
    ],
    best: 'c',
    debrief: 'Pale mushrooms under oaks in a new country is precisely the death-cap scenario. Familiarity from home is not local knowledge. There is no hunger to justify any risk. If anyone does eat wild mushrooms and later becomes ill, treat it as an emergency immediately.',
    concepts: ['fungi-safety', 'amatoxins', 'human-factors'],
  },
  summary: [
    'Wild mushrooms: ~20–40 kcal per 100 g, potentially lethal — no survival value.',
    'Amatoxins block protein synthesis, are heat-stable, and one cap can kill.',
    'Timeline: 6–24 h quiet → GI phase → false recovery → liver failure.',
    'Identification is expert-only; photos and apps miss hidden and microscopic features.',
    'Suspected ingestion → call a poison centre / emergency services now; keep the sample.',
  ],
  furtherReading: ['mmwr-amanita-2016', 'nama'],
  references: ['mmwr-amanita-2016', 'mmwr-mushroom-2021', 'nama', 'poison-help', 'auerbach'],
}
