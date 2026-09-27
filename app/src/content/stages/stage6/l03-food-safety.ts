import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's6-l3',
  stage: 6,
  order: 3,
  title: 'Food safety and cooking',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s6-l2'],
  concepts: ['food-safety-temps', 'food-poisoning', 'parasites', 'primitive-food-prep', 'spoilage'],
  objectives: [
    'Apply **safe minimum internal temperatures** and the **danger zone** rules with a thermometer.',
    'Distinguish **infections** from **pre-formed toxins** and explain why reheating does not fix every spoiled food.',
    'Name the main **parasite and toxin risks** of wild meat, fish and shellfish, and how cooking and official closures control them.',
    'Describe how **primitive cooking and processing** (boiling, roasting, stone boiling, leaching) change food safety and energy.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A survival situation is the worst possible time for vomiting and diarrhoea: they cost water, electrolytes, energy and morale all at once. Most food-borne illness is preventable with the WHO’s **Five Keys to Safer Food**:

1. **Keep clean** — hands, surfaces, utensils. In camp, a hand-washing station (water + soap, or alcohol gel after visible dirt is removed) before cooking and after the toilet.
2. **Separate raw and cooked** — different boards/knives, or cook first and cut later.
3. **Cook thoroughly** — to a measured temperature, not a colour.
4. **Keep food at safe temperatures** — out of the danger zone.
5. **Use safe water and raw materials** — treated water (s1-l12), food from known sources.`,
    },
    { type: 'diagram', id: 'danger-zone', caption: 'Measure, don’t guess. Colour and juices are unreliable indicators of doneness.' },
    {
      type: 'table',
      head: ['Food', 'Safe minimum internal temperature'],
      rows: [
        ['Poultry (whole or minced), leftovers, casseroles', '**74 °C / 165 °F**'],
        ['Minced (ground) meat', '**71 °C / 160 °F**'],
        ['Whole cuts of beef, pork, lamb, veal', '**63 °C / 145 °F** then rest 3 minutes'],
        ['Fish (finfish)', '**63 °C / 145 °F**, or flesh opaque and separating'],
        ['Wild game at risk of *Trichinella* (bear, wild boar, walrus, cougar)', '**≥ 74 °C / 165 °F** (CDC)'],
      ],
      caption: 'US FoodSafety.gov and CDC values. Other countries publish similar tables.',
    },
    {
      type: 'md',
      md: `### The danger zone

Between **4 °C and 60 °C (40–140 °F)** bacteria can double roughly every **20 minutes**. Keep perishable food out of this band for no more than **2 hours** in total — **1 hour** above 32 °C (90 °F). In the field without refrigeration: cook and eat fresh food promptly, don’t keep cooked leftovers overnight in warm weather, and cool large amounts quickly in small portions.`,
    },
    { type: 'diagram', id: 'bacterial-growth', caption: 'Exponential growth is why the rules are counted in hours.' },
    {
      type: 'md',
      md: `### Two kinds of food poisoning

| Type | Examples | Timing | Does cooking fix it? |
|---|---|---|---|
| **Infection** — living organisms multiply in you | *Salmonella*, *Campylobacter*, pathogenic *E. coli*, norovirus, *Giardia* | usually 12 h – several days | Yes, if food is cooked properly and not recontaminated |
| **Pre-formed toxin** — made in the food before you eat it | *Staphylococcus aureus* (handled food left warm), *Bacillus cereus* (cooked rice left warm), botulinum toxin, scombroid (histamine in poorly chilled fish) | often 30 min – 6 h; botulism 12–72 h | **Often no** — several toxins survive heating |

Reheating cooked rice that sat warm all day can kill the bacteria and leave their heat-stable toxin behind.

**Care in the field:** most food poisoning is self-limiting; the danger is dehydration. Sip oral rehydration solution; rest. **Seek urgent help** for bloody diarrhoea, high fever, inability to keep fluids down, signs of severe dehydration, or any **neurological** symptoms (double vision, drooping eyelids, slurred speech, difficulty swallowing or breathing) — possible botulism, shellfish poisoning or other toxins. First-aid detail is in Stage 9; take a hands-on WFA course.`,
    },
    {
      type: 'md',
      md: `### Wild meat, fish and shellfish

- **Trichinella** larvae live in the muscle of meat-eating wild animals (bear, wild boar, walrus). Cook to ≥ 74 °C. **Freezing does not reliably kill** the freeze-resistant species common in Arctic and subarctic game. Smoking, drying and salting (jerky) do not reliably kill it either.
- **Raw fish** can carry tapeworms and other parasites; cook it (or use commercially frozen fish handled to parasite-destruction standards for raw dishes).
- **Shellfish** filter-feed and can concentrate **heat-stable** algal toxins (paralytic, amnesic, diarrhoetic shellfish poisoning). Cooking does not help. Only harvest where and when the official monitoring programme says it is open.
- **Reef fish** in some tropical regions can carry **ciguatoxin** — also heat-stable. Follow local knowledge and advisories.
- **Animals found dead** or acting sick: leave them. Handling and eating them risks zoonoses (for example tularemia in rabbits and hares). Wear gloves when handling any carcass legally obtained.`,
    },
    {
      type: 'md',
      md: `### Cooking without a kitchen

- **Boiling** is the safest field method: even heating, nothing burned, and the fat and nutrients stay in the broth.
- **Roasting** over coals or on a spit: turn often, cut thick pieces thin, check the centre.
- **Ember and ash cooking:** foil or clay-wrapped food in hot coals — hard to judge; check the centre.
- **Stone boiling:** heating stones in a fire and dropping them into water held in a bark, wooden or hide container. Use **dry, dense stones from above the waterline**; stones from rivers or wet ground can hold water and **burst violently** when heated. Handle with tongs, not fingers.
- **Earth ovens / pits:** slow and fuel-efficient; mostly a camp or cultural technique.

### Processing that makes food safe or edible

Many traditional foods need processing that took generations to learn:
- **Leaching** — soaking or rinsing to remove water-soluble bitter or harmful compounds (tannins in acorns in many cultures).
- **Cassava** — a staple for hundreds of millions of people — contains cyanogenic compounds; incomplete processing during famine has caused outbreaks of paralytic disease (konzo).
- **Nixtamalisation** of maize with alkali releases niacin; maize-dependent populations without it suffered pellagra.

The lesson: “edible” often means *edible after the right preparation*. Knowledge of preparation is as local and as specialised as knowledge of identification.`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Cooking fires follow the same rules as any fire: many parks allow fires only in designated rings, and fire bans can begin the same day — sometimes including stoves. Harvesting shellfish, fish and game is licensed and seasonal almost everywhere. Check the land manager and wildlife/fisheries agency: [References → Law varies by jurisdiction](#/references).',
    },
  ],
  whyItMatters: 'A bout of diarrhoea in the backcountry can dehydrate a person faster than a hot day, and some food toxins kill. Most of it is preventable with clean hands, a thermometer, and knowing which risks cooking cannot fix.',
  science: [
    {
      type: 'md',
      md: `### Stone boiling: how many stones?

Heat needed to raise water temperature: $Q = m\\,c\\,\\Delta T$, where $c_{water} \\approx 4.19$ kJ/(kg·°C).
Bringing 1 L of water from 10 °C to 100 °C needs $1 \\times 4.19 \\times 90 \\approx 377$ kJ.

A granite-like stone has $c \\approx 0.8$ kJ/(kg·°C). A 1 kg stone cooling from about 400 °C to 100 °C gives $1 \\times 0.8 \\times 300 = 240$ kJ.

So roughly $377 / 240 \\approx 1.6$ kg of hot stone per litre — in practice **2–3 kg** because heat escapes through the container and to the air. That is a lot of hot rock handled near your food, which is why stone boiling is slow and why metal pots were among the most valued trade goods in history.

### Why cooking adds energy

Cooking gelatinises starch and denatures protein, making both easier to digest. Cooked starchy foods yield noticeably more usable energy than raw ones — one reason every human culture cooks.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Arctic:** walrus and bear meat are traditional foods; outbreaks of trichinellosis follow eating them undercooked or as dried/fermented products. Cook thoroughly; freezing is not enough.

**Tropical coast:** reef fish may carry ciguatoxin in known hotspots; local advice beats guesswork, and cooking does not help.

**Temperate coast:** mussels look perfect during a harmful algal bloom. The shellfish closure map, not appearance, tells you if they are safe.

**Desert:** heat pushes food through the danger zone in an hour — eat freshly cooked food straight away and do not keep leftovers.

**Urban emergency:** without power, cooked rice kept warm on a camping stove all day is a *Bacillus cereus* risk; cook smaller amounts and eat them promptly.

**Forest camp:** the group’s stomach bug came from a shared bag of trail mix and no hand washing — not the stream.`,
    },
  ],
  mistakes: [
    'Judging doneness by colour instead of a thermometer.',
    'Myth: “Freezing kills parasites in any meat.” Arctic Trichinella species in wild game can survive freezing.',
    'Myth: “Reheating makes anything safe.” Heat-stable toxins survive.',
    'Harvesting shellfish without checking official closures.',
    'Heating wet river stones for stone boiling — they can burst.',
    'Keeping cooked food warm (not hot) for hours.',
    'Skipping hand washing in camp and blaming the water.',
  ],
  exercises: [
    {
      id: 's6-l3-e1',
      title: 'Calibrate a thermometer and cook to temperature',
      level: 3,
      safety: 'home',
      minutes: 45,
      materials: ['Digital food thermometer', 'Glass of ice and water', 'Chicken pieces or minced meat'],
      steps: [
        'Fill a glass with ice, add a little water, stir; after 2 minutes the thermometer should read 0 °C (32 °F). Note any offset.',
        'Cook chicken or minced meat; measure in the thickest part, not touching bone.',
        'Compare what “looks done” with the measured temperature at several points.',
        'Use separate boards for raw and cooked; wash hands after handling raw meat.',
      ],
      success: ['Thermometer offset known.', 'Food cooked to the correct measured temperature.', 'No raw–cooked cross-contact.'],
      skill: 'food-safety',
    },
    {
      id: 's6-l3-e2',
      title: 'Build a camp hygiene kit and routine',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Small soap or alcohol gel', 'Collapsible bowl or bag', 'Separate cloth for pots', 'Oral rehydration sachets'],
      steps: [
        'Assemble the kit and weigh it.',
        'Write a camp routine: wash hands before food and after the toilet; cook first, cut later; nobody dips hands into shared snacks (pour them).',
        'Practise it on your next outing or even a picnic.',
      ],
      success: ['Kit under 150 g.', 'Routine written and used at least once.'],
      skill: 'food-safety',
    },
  ],
  quiz: [
    {
      id: 's6-l3-q1',
      kind: 'single',
      prompt: 'You have legally obtained wild boar meat in camp. What is the safe approach?',
      choices: [
        { id: 'a', text: 'Freeze it for a week, then cook to medium-rare.', why: 'Freezing is unreliable for wild-game Trichinella; medium-rare is too low.' },
        { id: 'b', text: 'Cook to at least 74 °C (165 °F) in the thickest part, measured.', why: 'Correct — the CDC recommendation for wild game.' },
        { id: 'c', text: 'Smoke it into jerky without cooking first.', why: 'Drying and smoking do not reliably kill Trichinella.' },
        { id: 'd', text: 'Cook until the outside is brown.', why: 'Surface colour says nothing about the centre.' },
      ],
      answer: 'b',
      concepts: ['parasites', 'food-safety-temps'],
      explanation: 'Measured internal temperature is the control. For carnivorous and omnivorous wild game: ≥ 74 °C.',
    },
    {
      id: 's6-l3-q2',
      kind: 'multi',
      prompt: 'Which hazards are **not** reliably removed by thorough cooking?',
      choices: [
        { id: 'a', text: 'Paralytic shellfish toxins', why: 'Correct — heat-stable.' },
        { id: 'b', text: '*Salmonella* bacteria', why: 'No — cooking kills them.' },
        { id: 'c', text: '*Staphylococcus aureus* toxin in food left warm', why: 'Correct — heat-stable toxin.' },
        { id: 'd', text: 'Ciguatoxin in reef fish', why: 'Correct — heat-stable.' },
        { id: 'e', text: 'Trichinella larvae', why: 'No — proper cooking kills them.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['food-poisoning'],
      explanation: 'Pre-formed toxins are prevented, not cured: official closures, local advice, and keeping food out of the danger zone.',
    },
    {
      id: 's6-l3-q3',
      kind: 'numeric',
      prompt: 'Stone boiling: how many kJ are needed to heat 2 L of water from 10 °C to 100 °C? (c = 4.19 kJ/kg·°C)',
      unit: 'kJ',
      answer: 754,
      tolerance: 10,
      concepts: ['primitive-food-prep'],
      explanation: '2 × 4.19 × 90 ≈ **754 kJ** — about 3 kg of 400 °C stone in theory, more in practice.',
    },
    {
      id: 's6-l3-q4',
      kind: 'truefalse',
      prompt: 'Freezing bear meat for several weeks makes it safe to eat undercooked.',
      answer: false,
      concepts: ['parasites'],
      explanation: 'Freeze-resistant Trichinella species occur in wild game, especially in Arctic and subarctic regions. Cook to ≥ 74 °C.',
    },
    {
      id: 's6-l3-q5',
      kind: 'single',
      prompt: 'After eating, a companion develops double vision, drooping eyelids and difficulty swallowing. What does this suggest and what do you do?',
      choices: [
        { id: 'a', text: 'Ordinary gastroenteritis — rest and fluids.', why: 'Neurological signs are not ordinary food poisoning.' },
        { id: 'b', text: 'Possible botulism or a toxin — urgent evacuation/medical help now.', why: 'Correct — neurological symptoms after food are an emergency.' },
        { id: 'c', text: 'Fatigue — sleep it off.', why: 'Breathing muscles can fail; do not wait.' },
        { id: 'd', text: 'Give more of the same food to “settle the stomach”.', why: 'More toxin is the last thing needed.' },
      ],
      answer: 'b',
      concepts: ['food-poisoning'],
      explanation: 'Descending weakness starting with the eyes and swallowing is the classic botulism picture. Call for help; keep the suspect food for investigators.',
    },
    {
      id: 's6-l3-q6',
      kind: 'single',
      prompt: 'Why should stones for stone boiling come from dry ground above the waterline?',
      choices: [
        { id: 'a', text: 'River stones are too cold.', why: 'Temperature is not the issue.' },
        { id: 'b', text: 'Water trapped in porous or cracked stones turns to steam and can burst them violently.', why: 'Correct.' },
        { id: 'c', text: 'Dry stones hold more heat per kilogram.', why: 'Heat capacity is similar; the hazard is steam.' },
        { id: 'd', text: 'River stones are protected.', why: 'Possibly in places — but the safety reason is bursting.' },
      ],
      answer: 'b',
      concepts: ['primitive-food-prep', 'fire-safety'],
      explanation: 'Heated wet stones can explode and throw hot fragments. Dense, dry stones; tongs; eye protection in practice.',
    },
  ],
  scenario: {
    id: 's6-l3-sc',
    setup: 'Day 4 of a canoe expedition in hot weather (30 °C). Last night’s large pot of rice and lentils was left in the pot overnight. Two people have mild stomach cramps this morning. Water is treated with a filter. The group wants to reheat the leftovers for breakfast to save fuel and food.',
    question: 'What is the best decision?',
    choices: [
      { id: 'a', text: 'Reheat the leftovers thoroughly — boiling kills everything.', why: 'Boiling kills bacteria but not heat-stable toxins such as those of Bacillus cereus.' },
      { id: 'b', text: 'Discard the leftovers; cook a fresh small breakfast; tighten hand washing and pour-not-dip snacks; monitor the two with cramps and push fluids with oral rehydration salts.', why: 'Best: removes the likely toxin source, addresses the most likely spread route, and manages dehydration.' },
      { id: 'c', text: 'Blame the water and switch to boiling all water; eat the leftovers.', why: 'Water treatment is already sound; the leftovers and hands are the more likely cause.' },
      { id: 'd', text: 'Skip food for everyone today to be safe.', why: 'Unnecessary — fresh, hot food is safe, and paddlers need energy.' },
    ],
    best: 'b',
    debrief: 'Cooked starchy food left warm overnight is a textbook toxin risk; reheating does not help. Discard it. In groups, illness often spreads hand-to-mouth; hygiene is the control. Manage the sick with fluids and rest, and set evacuation triggers (bloody diarrhoea, high fever, unable to keep fluids down, neurological signs).',
    concepts: ['food-poisoning', 'spoilage', 'dehydration'],
  },
  summary: [
    'Five keys: clean, separate, cook thoroughly, safe temperatures, safe water and raw materials.',
    'Measure: 74 °C poultry/leftovers/wild game; 71 °C minced meat; 63 °C whole cuts (+3 min) and fish.',
    'Danger zone 4–60 °C: max 2 h (1 h above 32 °C). Bacteria double in ~20 min.',
    'Heat-stable toxins (shellfish, ciguatera, some bacterial toxins) are prevented, not cooked away.',
    'Stone boiling: dry stones only; processing (leaching, cassava, nixtamalisation) is specialised local knowledge.',
  ],
  furtherReading: ['who-five-keys', 'foodsafety-temps'],
  references: ['who-five-keys', 'foodsafety-temps', 'fsis-danger-zone', 'cdc-trichinellosis', 'cdc-botulism-canning', 'who-food-safety', 'fda-safe-handling', 'auerbach'],
}
