import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's6-l2',
  stage: 6,
  order: 2,
  title: 'Emergency food management',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s6-l1'],
  concepts: ['rationing', 'food-storage', 'food-preservation', 'spoilage'],
  objectives: [
    'Build a **ration plan** for an uncertain duration, with a reserve and more food for the hardest days.',
    'Size and maintain a **home emergency food store** with first-in-first-out rotation.',
    'Explain preservation as a set of **hurdles** — cold, dryness, acidity, salt/sugar, heat-and-seal, smoke.',
    'Recognise **spoilage** and know why many dangerous foods look, smell and taste normal.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Rationing: a plan, not a feeling

Rationing well is arithmetic plus psychology:

1. **Inventory** everything edible and its energy (labels, or rough values: a bar ≈ 250 kcal, 100 g nuts ≈ 600 kcal, 100 g dry pasta ≈ 350 kcal).
2. **Estimate the duration** — then add a margin. Rescues and weather windows slip. If you expect 3 days, plan for 4–5.
3. **Hold a reserve** of 10–20 % that is not part of the daily ration.
4. **Weight the plan** toward high-demand days (a walk-out, a crossing, a cold night) and the evening meal (fuel for a night of keeping warm).
5. **Eat regularly in small amounts** rather than one feast — blood glucose and morale stay steadier.
6. **Review daily** as the situation changes.

Two opposite mistakes are common. *Eating freely until the food is gone* leaves nothing for the day that matters. *Refusing to eat* while carrying food wastes it — food in the pack does no work, and a starved person on day 3 is colder and makes worse decisions. The old rule of fasting for the first 24 hours to "save food" is not supported for people with adequate water; eat modestly and keep eating.`,
    },
    { type: 'diagram', id: 'ration-curves', caption: 'An even ration with a reserve is the default. Adjust it toward the days that demand most.' },
    {
      type: 'md',
      md: `### Groups

- Share **by need**, openly: people doing heavy work, the cold, the lean, children and pregnant women need more. Agree the rule early, before hunger makes it contentious.
- One person holds and issues the food; everyone can see the inventory. Secrecy breeds suspicion.
- Hot, shared meals are worth more than their calories — they are ritual and morale.

### The home emergency store

Preparedness agencies (Ready.gov and equivalents) recommend at least **several days** of non-perishable food per person, and many recommend two weeks.

| Rule | Why |
|---|---|
| Store what you **normally eat** | You will rotate it, and stress is no time for unfamiliar food |
| **First in, first out** — label purchase dates | Keeps stock fresh without waste |
| **Cool, dry, dark**, off the floor, in pest-proof containers | Heat, moisture, light and rodents are the main spoilers |
| Include **no-cook** options, a manual can opener and a safe way to heat | Power and gas may be off; never use camping stoves or barbecues indoors (carbon monoxide) |
| Plan **water with food** | Dry foods need water to prepare |
| Cover special needs | Infants, allergies, medical diets, pets |

"**Best before**" is about quality; "**use by**" is about safety — respect use-by dates on perishables.`,
    },
    {
      type: 'md',
      md: `### Preservation: stacking hurdles against microbes

Microbes need **water, warmth, suitable acidity, nutrients and time**. Every preservation method removes one or more of these:`,
    },
    { type: 'diagram', id: 'preservation-hurdles', caption: 'Traditional foods usually combine several hurdles — dried, salted and smoked fish keeps far longer than any one method alone.' },
    {
      type: 'md',
      md: `- **Cold:** a refrigerator at or below **4 °C (40 °F)** slows growth; freezing at **−18 °C (0 °F)** stops it (but does not kill most microbes).
- **Drying:** removes the water microbes need — jerky, dried fish, dried fruit, flour, rice.
- **Acidity:** at **pH 4.6 or below**, *Clostridium botulinum* cannot grow; pickles and many fermented foods rely on this.
- **Salt and sugar:** bind water so microbes cannot use it — salt fish, cured meats, jams.
- **Heat and seal (canning):** kill microbes, then keep new ones out. **Low-acid foods** (vegetables, meat, fish) must be **pressure canned** at home; a boiling-water bath does not reach temperatures that destroy botulinum spores.
- **Smoke:** dries the surface and deposits antimicrobial compounds; on its own it is weak.

Use **tested procedures** (for example the US National Center for Home Food Preservation) rather than improvised recipes — botulism from home-canned vegetables is a recurring cause of outbreaks.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Spoilage you can’t see',
      md: 'Obvious spoilage — mould, slime, sour or putrid smell, bulging, leaking or spurting cans — means discard. But **pathogens and their toxins often cause no change at all**. Botulinum toxin cannot be seen, smelled or tasted, and a small taste can be deadly. **Never taste to test. When in doubt, throw it out.**',
    },
    {
      type: 'md',
      md: `### Power cuts

US food-safety guidance: a closed refrigerator keeps food safe for about **4 hours**; a **full** freezer about **48 hours** (**24 hours** if half full). Keep doors shut. Discard perishables (meat, fish, eggs, dairy, leftovers) that have been above 4 °C for more than 2 hours. Food that still has ice crystals or is at or below 4 °C can be refrozen (quality may suffer). An appliance thermometer turns guesses into facts.`,
    },
    { type: 'sim', id: 'energy-budget', caption: 'Try “eat freely”, “even ration + reserve” and “starve now” in the boreal scenario — compare the walk-out day.' },
  ],
  whyItMatters: 'Most real food emergencies are not about finding food — they are about managing the food you already have: in a stranded vehicle, a storm-bound camp, or a home without power. Good rationing keeps people warm and clear-headed; poor storage and spoilage can turn an inconvenience into a medical emergency.',
  science: [
    {
      type: 'md',
      md: `### Ration arithmetic

Daily ration $R$ from carried energy $E$, planned days $D$ and reserve fraction $r$:

$$
R = \\frac{E(1-r)}{D}
$$

Example: two people carry 6,000 kcal; rescue expected in 3 days, planned for 5 with a 15 % reserve:
$R = 6000 \\times 0.85 / 5 = 1{,}020$ kcal per day for the pair — about 500 kcal each. That is a large deficit (see s6-l1), but it lasts, and the 900 kcal reserve fuels a walk-out if needed.

### Why "a little warm" is worse than you think

Bacteria in the danger zone can double roughly every 20 minutes. Starting from 1,000 cells, 4 hours is 12 doublings: $1000 \\times 2^{12} \\approx 4$ million. That is why the guidance is in hours, not days.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Stranded car in a blizzard (rural):** the family’s kit holds 6,000 kcal of bars and nuts for four people. Plan: small snacks every few hours, a larger share at night when it is coldest, and water from melted snow on the stove with a window cracked open for ventilation.

**Boreal canoe trip, wind-bound:** food packed for 5 days, now likely 8. Cut the daily ration by a third, keep a reserve, add safe legal fishing if gear and licence allow (s6-l7).

**Tropical storm at home (coastal city):** power out for 3 days. The freezer was full and kept closed: day 1 eat fridge perishables first, then freezer items as they thaw, then the pantry.

**Desert:** dried foods need water — crackers and dried fruit are better than salty jerky or dry noodles when water is short.

**Arctic expedition:** high-fat rations, eaten little and often; everything freezes, so bars are kept in an inside pocket.`,
    },
  ],
  mistakes: [
    'Eating freely at first “because rescue will come soon”.',
    'Refusing to eat while carrying food — it helps nobody in the pack.',
    'Myth: “If it smells fine, it’s safe.” Many pathogens and toxins cause no change.',
    'Tasting food to decide whether it spoiled.',
    'Storing emergency food nobody likes, so it is never rotated and expires.',
    'Using a boiling-water bath to can vegetables or meat.',
    'Opening the freezer repeatedly during a power cut.',
    'Running a camp stove or barbecue indoors to cook — carbon monoxide.',
  ],
  exercises: [
    {
      id: 's6-l2-e1',
      title: 'Build and rotate a 72-hour household food store',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Shelf or crate', 'Marker for dates', 'Manual can opener', 'Food your household normally eats'],
      steps: [
        'Compute your household’s energy need for 3 days (≈ 2,000 kcal per adult per day as a baseline; more in a cold house).',
        'Assemble non-perishable food to meet it, including options that need no cooking and little water.',
        'Label each item with its purchase date; put the oldest at the front.',
        'Set a calendar reminder every 6 months to eat and replace the oldest items.',
      ],
      success: ['Total kcal ≥ your 3-day need, verified from labels.', 'Rotation reminder set.', 'A safe way to prepare food without mains power (and no indoor combustion).'],
      skill: 'food-storage',
    },
    {
      id: 's6-l2-e2',
      title: 'Ration plan for a stranded group',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'Scenario: four people, 9,000 kcal of food, rescue expected in 3 days, a 12 km walk-out possible on day 4.',
        'Write a daily plan with a reserve and a larger ration the day before and the day of the walk-out.',
        'Decide how you will share between a large, active adult, a lean teenager and an older adult. Write the rule down.',
        'Run your plan in the Energy Budget simulation’s boreal scenario and adjust.',
      ],
      success: ['Plan sums to ≤ 9,000 kcal with a named reserve.', 'Sharing rule is explicit and justified by need.'],
      skill: 'energy-planning',
    },
  ],
  simulations: ['energy-budget'],
  quiz: [
    {
      id: 's6-l2-q2',
      kind: 'single',
      prompt: 'A tin of home-canned green beans has a bulging lid and spurts when opened, but smells normal. What do you do?',
      choices: [
        { id: 'a', text: 'Boil it for 10 minutes and eat it.', why: 'Dangerous gamble — and handling it risks exposure.' },
        { id: 'b', text: 'Taste a little to check.', why: 'Botulinum toxin is lethal in tiny amounts and has no taste.' },
        { id: 'c', text: 'Discard it without tasting, carefully, and clean up.', why: 'Correct — bulging and spurting are classic warning signs.' },
        { id: 'd', text: 'Eat it: normal smell means it is fine.', why: 'Botulinum toxin does not change smell.' },
      ],
      answer: 'c',
      concepts: ['spoilage', 'food-poisoning'],
      explanation: 'Low-acid home-canned vegetables are the classic botulism source. When in doubt, throw it out — never taste.',
    },
    {
      id: 's6-l2-q4',
      kind: 'single',
      prompt: 'The power has been off for 30 hours. Your freezer was full and kept closed. Which is right?',
      choices: [
        { id: 'a', text: 'Everything in the freezer must be discarded after 24 hours off.', why: 'A full, closed freezer holds safe temperatures for about 48 hours.' },
        { id: 'b', text: 'Freezer food still icy or ≤ 4 °C is safe; warm fridge perishables go.', why: 'Correct — freezer items with ice crystals or at ≤ 4 °C are safe; fridge perishables above 4 °C for > 2 h should go.' },
        { id: 'c', text: 'The fridge contents are fine as well, since the door stayed closed.', why: 'A fridge holds only about 4 hours.' },
        { id: 'd', text: 'Taste or smell each item to decide what is still good to eat.', why: 'Never taste to test.' },
      ],
      answer: 'b',
      concepts: ['spoilage', 'food-storage'],
      explanation: 'Fridge ≈ 4 h; full freezer ≈ 48 h (24 h half full). Use a thermometer, not your tongue.',
    },
    {
      id: 's6-l2-q6',
      kind: 'single',
      prompt: 'Which is the safe home method for canning low-acid vegetables such as green beans?',
      choices: [
        { id: 'a', text: 'A boiling-water bath, as long as it boils long enough', why: 'No — boiling water cannot reliably destroy botulinum spores in low-acid food.' },
        { id: 'b', text: 'Pressure canning', why: 'Correct — the only safe home method for low-acid foods.' },
        { id: 'c', text: 'Filling jars with boiling food and sealing at once', why: 'No — this never reaches the temperature needed to destroy spores.' },
        { id: 'd', text: 'A boiling-water bath with a little extra salt', why: 'No — salt at that level does not stop botulinum; pressure canning is required.' },
      ],
      answer: 'b',
      concepts: ['food-preservation', 'food-poisoning'],
      explanation: 'Low-acid foods must be pressure canned; boiling water cannot reliably destroy botulinum spores.',
    },
    {
      id: 's6-l2-q3',
      kind: 'single',
      prompt: 'Drying meat into jerky, salting fish and making jam with lots of sugar all prevent microbial growth mainly by…',
      choices: [
        { id: 'a', text: 'raising the acidity of the food', why: 'That is how pickling in vinegar works.' },
        { id: 'b', text: 'reducing the water available to microbes', why: 'Correct — drying removes water; salt and sugar bind it.' },
        { id: 'c', text: 'keeping the food too cold for growth', why: 'That is how refrigeration works.' },
        { id: 'd', text: 'killing every microbe with heat', why: 'None of these relies mainly on heat; they lower water activity.' },
      ],
      answer: 'b',
      concepts: ['food-preservation'],
      explanation: 'Drying, salt and sugar all lower water activity; acid (pickling) and cold (refrigeration) are different hurdles.',
    },
    {
      id: 's6-l2-q1',
      kind: 'single',
      prompt: 'You carry 4,500 kcal. Rescue is expected in 3 days; you plan for 5, holding a 15 % reserve. What is the daily ration?',
      choices: [
        { id: 'a', text: '900 kcal/day', why: 'That is 4,500 / 5 — the 15 % reserve was not held back.' },
        { id: 'b', text: '1,275 kcal/day', why: 'That divides by the 3-day estimate instead of the 5-day plan.' },
        { id: 'c', text: '765 kcal/day', why: 'Correct — 4,500 × 0.85 / 5.' },
        { id: 'd', text: '1,500 kcal/day', why: 'That is 4,500 / 3 — no margin and no reserve.' },
      ],
      answer: 'c',
      concepts: ['rationing'],
      explanation: '4,500 × 0.85 / 5 = **765 kcal/day**, with 675 kcal held back.',
    },
    {
      id: 's6-l2-q5',
      kind: 'single',
      prompt: 'Building a ration plan while stranded, you have inventoried all your food and its energy. What is the next step?',
      choices: [
        { id: 'a', text: 'Set aside a reserve', why: 'You need to know how long the food must last before sizing what remains — the reserve comes next.' },
        { id: 'b', text: 'Estimate duration and add a margin', why: 'Correct — count, then decide how long it must last.' },
        { id: 'c', text: 'Split the food by day, weighted toward hard days', why: 'You cannot split it until you know the duration and have set a reserve aside.' },
        { id: 'd', text: 'Review the plan daily as things change', why: 'Reviewing is the ongoing last step, once a plan exists.' },
      ],
      answer: 'b',
      concepts: ['rationing'],
      explanation: 'Inventory → estimate duration with a margin → set aside a reserve → split the rest by day → review daily. You cannot split it until you know how long it must last.',
    },
  ],
  scenario: {
    id: 's6-l2-sc',
    setup: 'Rural winter storm. You, your partner and your 10-year-old are snowed into your car on a quiet road; help is estimated at 24–48 hours. It is −8 °C outside. You have 5,000 kcal of mixed snacks, 3 L of water, a small stove and a pot, and blankets. The engine is off to save fuel; the exhaust is buried in snow.',
    question: 'What is the best food and warmth plan?',
    choices: [
      { id: 'a', text: 'Eat half the food now to stay warm, and save the rest for tomorrow.', why: 'Front-loading leaves too little if the wait runs to 48 hours or longer.' },
      { id: 'b', text: 'Ration for 48 h with a reserve, eat often; melt snow only with a window open.', why: 'Best: ~700 kcal per person-day eaten little and often (more at night), water from snow, never a stove in a sealed car, and the exhaust cleared before any engine run.' },
      { id: 'c', text: 'Save all the food until you are sure that no one is coming for you.', why: 'Hungry people in the cold get colder and more irritable; food in the bag does nothing.' },
      { id: 'd', text: 'Run the engine for heat and cook with the windows shut to hold heat.', why: 'A buried exhaust and a stove in a sealed car are classic carbon-monoxide deaths.' },
    ],
    best: 'b',
    debrief: 'Plan for the longer estimate with a reserve (5,000 × 0.85 / 2 days / 3 people ≈ 700 kcal per person-day even at 48 h; less if it runs longer — review daily). In the cold, food is part of your heat source: eat regularly, more at night. Water comes from snow — melted, not eaten. Carbon monoxide from a buried exhaust or an indoor stove kills far faster than hunger.',
    concepts: ['rationing', 'heat-balance', 'stay-or-move'],
  },
  summary: [
    'Inventory → duration + margin → reserve (10–20 %) → daily ration weighted to hard days → review.',
    'Store what you eat; first in, first out; cool, dry, dark, pest-proof.',
    'Preservation = hurdles: cold, dry, acid (pH ≤ 4.6), salt/sugar, heat + seal, smoke.',
    'Low-acid foods need pressure canning. Never taste to test. When in doubt, throw it out.',
    'Power cut: fridge ~4 h, full freezer ~48 h (24 h half full).',
  ],
  furtherReading: ['foodsafety-outage', 'nchfp'],
  references: ['foodsafety-outage', 'cdc-botulism-canning', 'nchfp', 'fsis-danger-zone', 'ready-kit', 'keys-starvation'],
}
