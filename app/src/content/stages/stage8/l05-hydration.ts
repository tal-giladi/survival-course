import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's8-l5',
  stage: 8,
  order: 5,
  title: 'Hydration and electrolytes',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s4-l1'],
  concepts: ['dehydration', 'electrolytes', 'hyponatremia', 'ors', 'water-needs'],
  objectives: [
    'Describe where body water sits and why **sodium** controls the volume of blood and extracellular fluid.',
    'Quantify dehydration as **% of body mass** and describe its effects at 2 %, 4 % and 6 %.',
    'Explain **exercise-associated hyponatremia** — its main cause (drinking well beyond losses) and why it mimics heat illness.',
    'Explain how **oral rehydration solution** works and when it is the right drink.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Where the water is

About **60 %** of an adult’s body mass is water — roughly **42 L** in a 70 kg person. About two-thirds is inside cells; one-third is **extracellular** (between cells and in blood plasma). **Sodium** is the main dissolved particle outside cells, so the body’s sodium content largely sets how much water stays in the extracellular space and blood.

Your kidneys and a hormone (arginine vasopressin, AVP) keep the plasma sodium concentration within a narrow band, **135–145 mmol/L**, by adjusting urine output and thirst. Go outside the band and brain cells swell or shrink — which is why both severe dehydration and hyponatremia show up as **headache, nausea and confusion**.

### Dehydration

Sweat is mostly water with some salt (roughly **0.5–2 g sodium per litre**, varying a lot between people). Lose sweat without replacing it and the blood becomes more concentrated and smaller in volume: the heart works harder, sweating and skin blood flow fall, and core temperature at a given workload rises by about **0.1–0.2 °C per 1 %** of body mass lost.`,
    },
    { type: 'diagram', id: 's8-dehydration-effects', caption: 'Dehydration measured as % of body mass lost (70 kg: 1 % = 0.7 L). Approximate thresholds.' },
    {
      type: 'md',
      md: `### Hyponatremia: too much water

**Exercise-associated hyponatremia (EAH)** is a plasma sodium below 135 mmol/L during or up to 24 h after prolonged activity. The main cause is **drinking more than you lose**, often plain water, over hours — especially by slower, smaller people on long events or hikes who follow a rigid “drink as much as possible” rule — with AVP still telling the kidneys to hold water. Large sodium losses in sweat add to it.

Early signs (headache, nausea, bloating, fatigue) are easy to confuse with heat exhaustion or dehydration; later signs are vomiting, confusion, seizures and coma. The history distinguishes them: **has this person been drinking a lot and peeing little? Have they gained weight or have puffy fingers?** Giving more water to someone with EAH can kill.

The WMS guidance for prevention is simple: **drink to thirst**, eat normal salty food, and do not force fluids beyond losses. Suspected EAH with confusion or seizures is an evacuation emergency; do not give more plain water.`,
    },
    { type: 'diagram', id: 's8-sodium-balance', caption: 'Two ways to leave the normal band: losing water faster than sodium (dehydration) or diluting sodium with excess water (hyponatremia).' },
    {
      type: 'md',
      md: `### Oral rehydration solution (ORS)

The gut absorbs sodium and glucose **together** through a co-transporter (SGLT1), and water follows. That is why a dilute sugar-and-salt solution rehydrates faster than plain water when losses are large — especially in **diarrhoea**, where ORS saves millions of lives. The WHO/UNICEF **reduced-osmolarity ORS** (2002–2006) contains per litre about **75 mmol sodium and 75 mmol glucose** (245 mOsm/L).

When to use it: diarrhoea and vomiting; heavy, prolonged sweating over many hours; recovery from dehydration. Commercial sachets are best (they get the ratio right). If you must improvise, use a measured recipe, clean water and level spoons — too much salt is harmful. Sports drinks are usually lower in sodium and higher in sugar than ORS.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Field monitoring',
      md: '**Thirst**, **urine colour and volume** (pale straw and regular is good; dark and scanty means drink more; frequent and clear while drinking a lot means you can ease off), and on longer trips **body weight** before and after activity are the simple tools. Weight gain during a long day of drinking is a warning sign for hyponatremia.',
    },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Try: 20 °C, walking 6 h, drinking 1.5 L/h, no food — then watch the warnings. Compare drinking 0.5 L/h with snacks.' },
  ],
  whyItMatters: 'Water is the most common limiting resource in survival situations, and both too little and too much can kill. Understanding sodium lets you use water efficiently in heat, recognise the rare but deadly overdrinking trap, and treat the dehydration from diarrhoea that often follows drinking untreated water.',
  science: [
    {
      type: 'md',
      md: `### Body water arithmetic

For a 70 kg person, total body water $\\approx 0.6 \\times 70 = 42$ L. A 2 % body-mass loss is $0.02 \\times 70 = 1.4$ kg ≈ **1.4 L** — about 3 % of total body water, but a larger share of **plasma**, because the loss falls disproportionately on the extracellular space early on.

### Sodium in sweat

Sweat sodium varies from about 20 to 80 mmol/L (sodium’s molar mass is 23 g/mol). At 40 mmol/L and 1 L/h of sweat for 8 hours:

$$
40\\ \\text{mmol/L} \\times 23\\ \\text{mg/mmol} \\times 8\\ \\text{L} \\approx 7.4\\ \\text{g sodium} \\approx 19\\ \\text{g salt}
$$

That is several times a typical daily intake, which is why long hot days need **salty food** as well as water — and why replacing 8 L of sweat with 8 L of plain water and no food pushes plasma sodium down.

### Why ORS has the glucose it has

Sodium–glucose co-transport moves one glucose molecule with two sodium ions across the gut wall; water follows osmotically. Too much sugar raises the solution’s osmolality and pulls water *into* the gut, worsening diarrhoea — so the low-osmolarity formula (245 mOsm/L) works better than the old one (311 mOsm/L) and much better than sugary soft drinks (often 600+ mOsm/L).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert trek.** A hiker sweating 1 L/h for 8 hours needs ~8 L of water *and* salty food. Carrying water without food invites both dehydration and hyponatremia.

**Grand Canyon–style descents.** Rangers see both conditions on the same trail: dehydrated hikers who carried too little, and hyponatremic hikers who drank litres of plain water without eating.

**Arctic expedition.** Cold dry air, heavy breathing and cold-induced urine output (cold diuresis) cause dehydration that no one feels — thirst is blunted in the cold. Scheduled hot drinks help both hydration and warmth.

**Tropical travel.** Traveller’s diarrhoea can cost litres a day; ORS sachets in the first-aid kit are one of the most useful items you can carry.

**Urban disaster.** After an earthquake or flood, stored water plus ORS sachets are a core part of a household kit (Stage 16).`,
    },
  ],
  mistakes: [
    'Myth: “drink 8 glasses a day regardless” or “drink as much as possible on long hikes.” Needs vary hugely; drink to thirst and match losses.',
    'Replacing very large sweat losses with plain water and no food or salt.',
    'Treating confusion in a hiker who has been drinking heavily as dehydration and giving more water.',
    'Using sugary soft drinks as rehydration for diarrhoea.',
    'Ignoring dehydration in the cold because you do not feel thirsty.',
    'Improvising ORS without measuring — too much salt is dangerous, especially for children.',
  ],
  exercises: [
    {
      id: 's8-l5-e1',
      title: 'Measure your sweat rate and sodium plan',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Bathroom scale (±0.1 kg)', 'Water bottle with volume marks', 'Notebook'],
      steps: [
        'Weigh yourself nude or in minimal dry clothing. Exercise or walk briskly for 60 minutes, noting water drunk.',
        'Towel off and weigh again. Sweat loss (L) ≈ weight before − weight after + water drunk (1 kg ≈ 1 L).',
        'Repeat on a hot day and a cool day. Record both rates in your kit notes.',
        'Using 40 mmol/L as a typical sweat sodium, calculate how much salt you would lose on an 8-hour day at each rate, and plan food that replaces it.',
      ],
      success: ['You have two measured sweat rates.', 'You have a fluid and salty-food plan for a long hot day.'],
      skill: 'fluid-electrolyte-plan',
    },
    {
      id: 's8-l5-e2',
      title: 'Hydration triage cards',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'Write three short cases: dehydrated hiker, hyponatremic hiker, heat-exhaustion hiker. Give each a drinking history, urine output, weight change and symptoms.',
        'For each, write the first two field actions and the red flags for evacuation.',
        'Swap cards with a study partner and check each other’s answers against this lesson.',
      ],
      success: ['You can tell dehydration and hyponatremia apart from history and signs.'],
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l5-q1',
      kind: 'numeric',
      prompt: 'A 80 kg hiker weighs 77.6 kg after a hot 6-hour walk (no food or drink during it). What % of body mass has he lost? (One decimal.)',
      unit: '%',
      answer: 3.0,
      tolerance: 0.1,
      concepts: ['dehydration'],
      explanation: '(80 − 77.6) / 80 × 100 = **3.0 %** — endurance, heat tolerance and thinking are measurably worse.',
    },
    {
      id: 's8-l5-q2',
      kind: 'single',
      prompt: 'What is the main cause of exercise-associated hyponatremia?',
      choices: [
        { id: 'a', text: 'Drinking more fluid than you lose over many hours', why: 'Correct — fluid overload is the primary cause.' },
        { id: 'b', text: 'Not drinking enough', why: 'That causes dehydration (high sodium).' },
        { id: 'c', text: 'Eating too much salt', why: 'That raises sodium.' },
        { id: 'd', text: 'Cold weather', why: 'Not a direct cause.' },
      ],
      answer: 'a',
      concepts: ['hyponatremia'],
      explanation: 'Overdrinking, often plain water, with AVP still active, dilutes plasma sodium. Drink to thirst.',
    },
    {
      id: 's8-l5-q3',
      kind: 'multi',
      prompt: 'Which findings point toward **hyponatremia** rather than dehydration in a confused hiker?',
      choices: [
        { id: 'a', text: 'Has drunk 6 L of water in 5 hours and barely urinated', why: 'Yes — intake far beyond losses.' },
        { id: 'b', text: 'Weight is higher than at the start', why: 'Yes — fluid gain.' },
        { id: 'c', text: 'Puffy fingers, rings tight', why: 'Yes — fluid retention.' },
        { id: 'd', text: 'Very dark, scanty urine and has drunk almost nothing', why: 'No — that points to dehydration.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['hyponatremia', 'dehydration'],
      explanation: 'Drinking history and weight change separate them. Do not give more water to a suspected EAH patient; evacuate if confused.',
    },
    {
      id: 's8-l5-q4',
      kind: 'single',
      prompt: 'Why does ORS contain glucose as well as salt?',
      choices: [
        { id: 'a', text: 'Glucose and sodium are absorbed together by a co-transporter, and water follows.', why: 'Correct.' },
        { id: 'b', text: 'To make it taste better.', why: 'A side effect, not the reason.' },
        { id: 'c', text: 'Glucose kills gut pathogens.', why: 'It does not.' },
        { id: 'd', text: 'To provide most of the day’s calories.', why: 'The calories are small.' },
      ],
      answer: 'a',
      concepts: ['ors', 'electrolytes'],
      explanation: 'Sodium–glucose co-transport (SGLT1) is why ORS rehydrates faster than water in diarrhoea.',
    },
    {
      id: 's8-l5-q5',
      kind: 'truefalse',
      prompt: 'In cold weather you can rely on thirst alone because you sweat very little.',
      answer: false,
      concepts: ['dehydration', 'water-needs'],
      explanation: 'Thirst is blunted in the cold, while breathing cold dry air, cold diuresis and heavy work still cost water. Schedule warm drinks.',
    },
    {
      id: 's8-l5-q6',
      kind: 'numeric',
      prompt: 'Sweat at 1.2 L/h for 5 h with 50 mmol/L sodium. How many **grams of sodium** are lost? (Na = 23 mg/mmol; one decimal.)',
      unit: 'g',
      answer: 6.9,
      tolerance: 0.1,
      concepts: ['electrolytes'],
      explanation: '1.2 × 5 = 6 L; 6 × 50 = 300 mmol; 300 × 23 mg = **6.9 g** sodium (≈ 17.5 g salt).',
    },
  ],
  scenario: {
    id: 's8-l5-sc',
    setup: 'Hot, humid day on a long coastal trail. A friend has been drinking about a litre an hour of plain water “to be safe”, eating nothing. After 6 hours she has a headache, feels bloated and nauseated, has not urinated since morning, and seems a little muddled. It is 29 °C.',
    question: 'What is the best action?',
    choices: [
      { id: 'a', text: 'She must be dehydrated — have her drink another litre quickly.', why: 'Her history suggests fluid overload; more plain water could worsen hyponatremia.' },
      { id: 'b', text: 'Stop drinking plain water; rest in shade; give salty snacks if she is alert and not vomiting; call for help/evacuate because she is muddled.', why: 'Best: treats suspected EAH and escalates because of the mental change.' },
      { id: 'c', text: 'Give salt tablets with a large volume of water.', why: 'The large volume of water is the problem.' },
      { id: 'd', text: 'Continue walking; it is probably heat exhaustion.', why: 'Mental status change needs escalation, and continued exertion adds heat.' },
    ],
    best: 'b',
    debrief: 'High intake, low urine output and a muddled state suggest hyponatremia, which mimics heat illness. Stop the water, salty food if safe, cool and rest, and evacuate for sodium measurement — confusion makes this urgent. If there is any doubt about heat stroke (very hot, collapsing), cooling still comes first.',
    concepts: ['hyponatremia', 'heat-illness', 'dehydration'],
  },
  summary: [
    'Body water ≈ 60 % of mass; sodium sets extracellular volume; plasma Na 135–145 mmol/L.',
    'Dehydration: 2 % impairs performance; each 1 % raises working core temperature ~0.1–0.2 °C.',
    'EAH: mainly from drinking beyond losses — drink to thirst and eat salty food.',
    'ORS (≈75 mmol Na + 75 mmol glucose per litre) uses sodium–glucose co-transport.',
    'Monitor thirst, urine and weight.',
  ],
  furtherReading: ['wms-eah-2019', 'acsm-fluid-2007', 'who-ors-2006'],
  references: ['wms-eah-2019', 'acsm-fluid-2007', 'iom-water-2005', 'who-ors-2006', 'usariem-cold'],
}
