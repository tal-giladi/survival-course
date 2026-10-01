import type { Lesson } from '../../types'

export const l08: Lesson = {
  id: 's6-l8',
  stage: 6,
  order: 8,
  title: 'Trapping and hunting concepts',
  level: 'advanced',
  minutes: 40,
  prerequisites: ['s6-l7'],
  concepts: ['hunting-trapping-law', 'energy-return', 'long-term-food', 'parasites', 'macronutrients'],
  objectives: [
    'Explain the **legal, ethical and safety** gates that every hunting or trapping activity must pass.',
    'Use **energy economics** — expected return, variance, handling cost — to judge food-getting options.',
    'Describe the **realities of long-term food acquisition** and why short emergencies are solved by rationing and rescue.',
    'Identify the route to legitimate skills: **hunter education and licensed, supervised instruction**.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'What this lesson does not teach',
      md: 'This course gives **no instructions for building traps, snares or weapons**, and no exercise involves setting them. They are illegal in many places without licences, dangerous to people and pets, indiscriminate toward protected species, and often inhumane in untrained hands. If you want these skills, learn them where they are legal, through **accredited hunter or trapper education** and **licensed instructors**.',
    },
    {
      type: 'md',
      md: `### Why survival manuals mislead here

Many survival books present snares and deadfalls as a quick fix. In reality:
- **Success rates are low** for novices. Trapping as a livelihood relies on detailed knowledge of animal sign and movement, many sets, and daily checks over long periods.
- **Non-target captures** — pets, protected species, even people — are common with improvised devices.
- **Welfare:** poorly designed or placed devices cause prolonged suffering. International humane-trapping standards exist precisely because of this, and several countries and regions have banned snares outright.
- **Law:** trapping generally needs a licence, is limited to certain species, seasons and approved device types, and often requires trapper education and device registration or labelling.

### Hunting: law, training and responsibility

Hunting is legal and managed in many countries — and among the most regulated outdoor activities:
- **Licences and tags** by species, season, area and method; **hunter education** is mandatory for a first licence in many jurisdictions.
- **Weapon law:** firearms and bows have their own licensing, storage and transport rules.
- **Fair chase and ethics:** positive identification of the animal and what lies beyond it, shots only within your proven ability, prompt recovery, no waste.
- **Safety:** most hunting injuries involve failing to identify the target or what is beyond it, and falls (for example from tree stands).
- **Health:** field dressing risks cuts and zoonoses (for example tularemia in rabbits and hares, brucellosis in some wild pigs); some regions test deer for chronic wasting disease; wild carnivores and omnivores need cooking to ≥ 74 °C for *Trichinella* (s6-l3).
- **Meat care is heavy work:** a large animal must be field-dressed, cooled and carried — a major energy cost, and in warm weather meat spoils within hours.`,
    },
    { type: 'diagram', id: 'harvest-gates', caption: 'Fail any gate and the answer is no.' },
    {
      type: 'md',
      md: `### Energy economics

Behavioural ecologists model foraging with a simple idea: a food item is worth pursuing if its **energy gained per unit of time (including search and handling)** beats the average of the alternatives. Applied to a stranded person:

- **Expected return per hour** $= p \\times E - C$ (s6-l7). Stalking large game has a big $E$ but a tiny $p$ and a large $C$ — a strongly negative expectation for an untrained, unlicensed person.
- **Variance matters:** a method that usually yields nothing but occasionally a lot is a poor bet for one person with a small reserve. Hunter-gatherer societies manage this by **sharing** large kills across a group — a solo survivor cannot.
- **Handling cost:** dressing, cooking, preserving, and carrying all cost energy and water.
- **Quality:** small wild game is **lean**. Eating mostly lean meat hits the **protein ceiling** (s6-l1) — the historical "rabbit starvation" — so fat and carbohydrate still have to come from somewhere.`,
    },
    { type: 'diagram', id: 'energy-return', caption: 'Model values from the Energy Budget sim. Only low-effort, passive methods tend to return more than they cost — and they are the most regulated.' },
    {
      type: 'md',
      md: `### Long-term food acquisition: the realities

- People who genuinely live from wild food do it with **deep local knowledge**, **groups**, **tools**, **storage and preservation**, and **seasonal planning** — and still face lean seasons.
- Solo attempts to live off the land, including televised ones, typically show **large weight loss** over weeks, even with good equipment and skills. Evidence here is mostly anecdotal: there is little rigorous data on multi-week self-sufficiency, so treat confident claims with caution.
- In real long-duration situations (Stage 18) the reliable foods are the ones with the best energy return and lowest risk: **carried and stored staples**, **legal fishing**, **known, abundant plant foods with local expert knowledge**, **trade and community**.
- For almost every emergency people actually face — lost for days, stranded vehicle, storm-bound camp — the winning strategy is **ration, conserve, stay findable, and get rescued**.`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Hunting and trapping are licensed by species, season, area and method, often with mandatory hunter/trapper education; firearms and bows have separate laws; protected species and reserves are off-limits; some jurisdictions recognise specific subsistence rights for Indigenous peoples. There is generally no “survival exemption” you can rely on in advance. Find your wildlife agency: [References → Law varies by jurisdiction](#/references).',
    },
    { type: 'sim', id: 'energy-budget', caption: 'Add “stalking” or “trapping” hours in any scenario and watch the energy balance and the hard-day performance.' },
  ],
  whyItMatters: 'The picture of the lone survivor living off snares and game is one of the most persistent and costly myths in survival culture. Understanding the law, the ethics and the energy economics lets you choose actions that actually improve your odds — and, if you want these skills, to pursue them legally and responsibly.',
  science: [
    {
      type: 'md',
      md: `### Worked comparison (model values)

| Option | $p$ (per h) | $E$ (kcal) | $C$ (kcal/h) | Net per hour |
|---|---|---|---|---|
| Rest in shelter | — | — | 0 | 0 |
| Passive set-lines, where legal | 0.6 | 200 | 40 | **+80** |
| Small-game trapping (licensed) | 0.06 | 700 | 100 | **−58** |
| Stalking game (licensed) | 0.02 | 2,000 | 300 | **−260** |

Five hours of stalking: $5 \\times (0.02 \\times 2000 - 300) = 5 \\times (40 - 300) = -1{,}300$ kcal expected — before field dressing and carrying. The probability of *any* success in those 5 hours is only $1 - 0.98^5 \\approx 10\\%$.

### Protein ceiling in numbers

If the liver can safely process protein supplying at most roughly 35 % of energy needs, a person needing 3,000 kcal/day can use about 1,050 kcal of protein (≈ 260 g). Lean rabbit meat is mostly protein; eating enough of it to meet 3,000 kcal would far exceed that ceiling — hence nausea, diarrhoea and weakness despite a full stomach.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest, stranded 4 days:** the group considers improvising snares from wire. They are in a provincial park, have no licence, and wildlife is scarce near camp. They ration, fish one attended line legally, and are picked up on day 4.

**Subarctic Indigenous community:** caribou hunting and fishing are organised around seasons, sharing, preservation (drying, freezing) and law, including recognised subsistence rights — a system, not a trick.

**African savanna:** hunting is tightly controlled; poaching laws are strict, and many species are protected. Visitors do not hunt.

**European farmland:** hunting rights belong to landowners or hunting associations; licences require exams; snares are banned in many countries.

**Desert:** animals are few and mostly nocturnal; daytime pursuit in heat costs water that cannot be replaced.

**Tropical forest:** bushmeat hunting drives declines in many species and spreads zoonoses; visitors should not take part.`,
    },
  ],
  mistakes: [
    'Myth: “Survivors live off snares.” Novice trapping success is low and often illegal.',
    'Myth: “In a survival situation, the law doesn’t apply.” Don’t plan on an exemption.',
    'Spending energy on high-variance hunting with a small reserve and no group to share with.',
    'Relying on lean meat alone — the protein ceiling.',
    'Handling carcasses without gloves; eating animals found dead or sick.',
    'Treating a weapon as a survival tool without licensing and training.',
  ],
  exercises: [
    {
      id: 's6-l8-e1',
      title: 'Map the law where you travel',
      level: 1,
      safety: 'home',
      minutes: 40,
      steps: [
        'Pick a region you visit. Find its wildlife agency or equivalent.',
        'Record: which species may be hunted or trapped, by whom, with what licence, in which seasons and by which methods; whether snares are banned; whether hunter education is mandatory.',
        'Note protected areas and species where no taking is allowed.',
        'Write one line: “In an emergency here, my food plan is …” (it should not depend on hunting or trapping).',
      ],
      success: ['A one-page summary with sources.', 'A food plan that does not rely on taking wildlife.'],
      skill: 'energy-planning',
    },
    {
      id: 's6-l8-e2',
      title: 'Integrated multi-day energy plan',
      level: 4,
      safety: 'virtual-only',
      minutes: 45,
      steps: [
        'In the Energy Budget simulation, play all four scenarios.',
        'For each, find the plan with the best score; note which (if any) food-getting activity you kept and why.',
        'Then add 4 h/day of stalking to your best plan and record the change in hard-day performance and score.',
        'Write a short debrief linking your choices to water, warmth, rescue and energy return.',
      ],
      success: ['Score ≥ 70 in at least three scenarios.', 'Debrief explains every food-getting hour you kept.'],
      skill: 'energy-planning',
    },
    {
      id: 's6-l8-e3',
      title: 'Take an accredited hunter-education course (optional)',
      level: 3,
      safety: 'formal-training',
      minutes: 600,
      steps: [
        'If hunting interests you and is legal where you live, enrol in your jurisdiction’s hunter-education course.',
        'Complete the law, ethics, firearm/bow safety, wildlife identification and game-care modules and any field day.',
        'Only then consider a licensed, mentored first hunt.',
      ],
      success: ['Course certificate.'],
      skill: 'hunter-education',
      safetyNote: 'Formal, licensed instruction only. This course does not teach weapons, traps or snares.',
    },
  ],
  simulations: ['energy-budget'],
  quiz: [
    {
      id: 's6-l8-q6',
      kind: 'single',
      prompt: 'You are one of four people stranded for an expected 3–5 days with 6,000 kcal of food, water, and shelter. Which food strategy has the best expected outcome?',
      choices: [
        { id: 'a', text: 'Two people hunt every day while the other two stay and wait at camp.', why: 'High cost, low probability, and probably illegal; hunters burn food and warmth.' },
        { id: 'b', text: 'Ration with a reserve, rest, keep signals up, add only cheap legal options.', why: 'Correct — rescue is the solution; food-getting only if cheap and legal (e.g., one attended fishing line if licensed).' },
        { id: 'c', text: 'Eat normally for the first two days, then start hunting if needed.', why: 'Uses the reserve and bets on a low-probability source.' },
        { id: 'd', text: 'Walk out together immediately to look for food and help on the way.', why: 'Leaves the search area and costs the most energy of all.' },
      ],
      answer: 'b',
      concepts: ['rationing', 'energy-return', 'stay-or-move'],
      explanation: 'Short emergencies are solved by rationing, conserving and being found.',
    },
    {
      id: 's6-l8-q4',
      kind: 'single',
      prompt: 'Why can’t plenty of lean rabbit meat alone meet your energy needs indefinitely?',
      choices: [
        { id: 'a', text: 'Rabbit meat carries too many parasites to eat every day.', why: 'Thorough cooking handles parasites; the problem is the missing fat.' },
        { id: 'b', text: 'Rabbit contains too little protein to maintain your muscle.', why: 'Backwards — the problem is too much protein and too little fat.' },
        { id: 'c', text: 'Protein has a ceiling; without fat and carbs you get sick and weak.', why: 'Correct — “rabbit starvation”: nausea, diarrhoea and weakness.' },
        { id: 'd', text: 'Lean meat is digested too slowly to release its energy in time.', why: 'Digestion speed is not the issue; the protein ceiling is.' },
      ],
      answer: 'c',
      concepts: ['macronutrients', 'long-term-food'],
      explanation: 'The protein ceiling: a lean-meat-only diet causes nausea, diarrhoea and weakness (“rabbit starvation”). Fat and carbohydrate are needed.',
    },
    {
      id: 's6-l8-q5',
      kind: 'single',
      prompt: 'Which of these is **not** a reason this course does not teach snare or trap construction?',
      choices: [
        { id: 'a', text: 'Trapping is illegal in many places without licences, and snares are banned in some countries.', why: 'A real reason — the law.' },
        { id: 'b', text: 'Improvised devices catch pets and protected species.', why: 'A real reason — non-target captures.' },
        { id: 'c', text: 'Untrained use causes animal suffering.', why: 'A real reason — welfare.' },
        { id: 'd', text: 'Traps work too well and soon empty the forest of game.', why: 'Correct — this is not a reason; novice success rates are low.' },
      ],
      answer: 'd',
      concepts: ['hunting-trapping-law'],
      explanation: 'Law, non-target captures and welfare — and low success for novices makes it a poor bet anyway.',
    },
    {
      id: 's6-l8-q3',
      kind: 'single',
      prompt: 'Why do hunter-gatherer groups share large kills?',
      choices: [
        { id: 'a', text: 'Large kills are rare, so sharing smooths out the high variance.', why: 'Correct — it turns a risky, lumpy food source into a reliable one.' },
        { id: 'b', text: 'Meat alone is not nutritious enough for any one person.', why: 'Not the reason.' },
        { id: 'c', text: 'Sharing all meat is required by law in every country.', why: 'No.' },
        { id: 'd', text: 'Carrying meat back to camp is too heavy for one hunter.', why: 'Not the reason — sharing is about smoothing the variance of success.' },
      ],
      answer: 'a',
      concepts: ['energy-return', 'long-term-food'],
      explanation: 'A solo survivor has no group to buffer the variance — another reason high-variance hunting is a poor emergency strategy.',
    },
    {
      id: 's6-l8-q1',
      kind: 'single',
      prompt: 'Model values: stalking game succeeds with p = 0.02 per hour, a success yields 2,000 kcal, and stalking costs 300 kcal/h. What is the expected net energy of **4 hours** of stalking?',
      choices: [
        { id: 'a', text: '−260 kcal', why: 'That is one hour (40 − 300), not multiplied by 4.' },
        { id: 'b', text: '+6,800 kcal', why: 'That ignores the 0.02 probability, as if every hour succeeded.' },
        { id: 'c', text: '−1,040 kcal', why: 'Correct — 4 × (40 − 300).' },
        { id: 'd', text: '−1,200 kcal', why: 'That counts the cost but forgets the expected gain of 160 kcal.' },
      ],
      answer: 'c',
      concepts: ['energy-return'],
      explanation: '4 × (0.02 × 2,000 − 300) = 4 × (40 − 300) = **−1,040 kcal** — before dressing and carrying.',
    },
    {
      id: 's6-l8-q2',
      kind: 'single',
      prompt: 'Any harvest of wild animals must pass five gates. Which gate comes first?',
      choices: [
        { id: 'a', text: 'Worth it: energy, time and water vs return', why: 'That is the last gate — even a legal, ethical, safe harvest may not pay.' },
        { id: 'b', text: 'Ethical: humane, no non-target catches', why: 'Important, but it comes after legality and training.' },
        { id: 'c', text: 'Legal: licence, season, species, method, place', why: 'Correct — legality comes first.' },
        { id: 'd', text: 'Safe: weapons, knives, zoonoses, terrain', why: 'Important, but it comes after legality, training and ethics.' },
      ],
      answer: 'c',
      concepts: ['hunting-trapping-law'],
      explanation: 'Legal → trained → ethical → safe → worth it. Legality and training come first; a legal, trained, ethical, safe harvest may still not be worth it energetically.',
    },
  ],
  scenario: {
    id: 's6-l8-sc',
    setup: 'Mountain forest, late autumn. Your group of three is stuck by an early snowstorm at a remote hut; rescue by snowmobile is expected in 2–3 days; a message is out. Food: 5,000 kcal. One member, who watches survival videos, wants to use the wire from the repair kit to make snares around the hut “so we have meat if it drags on”. You are in a national park.',
    question: 'What is the best response?',
    choices: [
      { id: 'a', text: 'Agree, since it is an emergency and the meat could prove valuable.', why: 'Illegal in a national park, unlikely to succeed, risks non-target animals, and wastes energy and warmth.' },
      { id: 'b', text: 'Decline snares; ration with a reserve, stay warm, keep the hut visible.', why: 'Best: legal, humane and energy-sound; rescue is the solution, and the wire is for repairs.' },
      { id: 'c', text: 'Set the snares, but check them only once to save energy and warmth.', why: 'Prolongs any animal’s suffering and still breaks the law.' },
      { id: 'd', text: 'Send the fittest person out to hunt with a knife while you wait.', why: 'Very low success, high energy cost, and injury risk in snow.' },
    ],
    best: 'b',
    debrief: 'Two to three days is well within what rationed food covers (5,000 × 0.85 / 3 / 3 ≈ 470 kcal per person-day at minimum — hungry but safe with warmth and water). Snares in a national park are illegal, inhumane in untrained hands, and unlikely to work. Keep energy for warmth and for the snowmobile evacuation.',
    concepts: ['hunting-trapping-law', 'rationing', 'energy-return'],
  },
  summary: [
    'No traps, snares or weapons without law, licence and accredited training — this course teaches concepts only.',
    'Gates: legal → trained → ethical → safe → worth it.',
    'Expected return = p × E − C; hunting and trapping are usually energy-negative and high-variance for one person.',
    'Lean meat alone fails (protein ceiling); long-term food needs knowledge, groups, storage and seasons.',
    'Short emergencies: ration, conserve, stay findable, get rescued.',
  ],
  furtherReading: ['ihea', 'afh-10-644'],
  references: ['ihea', 'cdc-trichinellosis', 'army-atp-3-50-21', 'afh-10-644', 'lnt-principles', 'keys-starvation'],
}
