import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's8-l6',
  stage: 8,
  order: 6,
  title: 'Energy metabolism',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s6-l1'],
  concepts: ['glycogen', 'fat-oxidation', 'starvation', 'energy-budget', 'shivering'],
  objectives: [
    'Compare the body’s **fuel stores** — glycogen, fat and protein — in grams and kilocalories, and explain why glycogen is the bottleneck.',
    'Explain the **crossover** between carbohydrate and fat use with exercise intensity and duration, and what “hitting the wall” is.',
    'Describe the **starvation timeline** (glycogen → gluconeogenesis → ketosis → protein loss) and its effect on judgment.',
    'Build a daily **energy budget** for cold-weather survival, including shivering, and explain why fat matters in lean-meat diets.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Food rarely kills in the short term, which is why it sits low in survival priorities. But energy is what powers **shivering, work and clear thinking** — so in cold, prolonged or physically demanding situations, fuel quietly decides how well you manage everything else.

### The fuel tanks (70 kg adult, typical)

| Store | Amount | Energy | Notes |
|---|---|---|---|
| **Muscle glycogen** | ~400–500 g | ~1,600–2,000 kcal | Usable only by the muscle that stores it; fastest fuel for hard work and shivering |
| **Liver glycogen** | ~80–100 g | ~350–400 kcal | Keeps blood glucose up for the brain; empties within about a day of fasting |
| **Fat** | ~10–15 kg | ~75,000–110,000 kcal | Huge, but released and burned more slowly; needs some carbohydrate “to burn cleanly” |
| **Protein** (muscle, organs) | ~10 kg | not a store | Broken down for glucose in fasting — at the cost of muscle |

Carbohydrate and protein give about **4 kcal/g**, fat about **9 kcal/g**. Glycogen is stored with ~3 g of water per gram, which is why it is heavy and limited.`,
    },
    {
      type: 'md',
      md: `### Intensity decides the fuel mix

At rest and easy walking, fat supplies a large share of energy. As intensity rises, the share from **carbohydrate** rises steeply, because it can be turned into ATP faster and with less oxygen per unit of energy. Over a long day at steady moderate effort, muscle glycogen falls and the share from fat rises; when glycogen is nearly empty, you cannot hold the pace — **“hitting the wall”** or **“bonking”**. Eating carbohydrate on the move (roughly 30–60 g per hour during long hard efforts) slows the fall.`,
    },
    { type: 'diagram', id: 's8-fuel-curves', caption: 'During steady moderate exercise, glycogen falls and the fat share rises (illustrative).' },
    {
      type: 'md',
      md: `### Fasting and starvation

Without food (but with water), the body shifts fuel in a predictable order: liver glycogen goes first (within about a day), then the liver makes glucose from amino acids (**gluconeogenesis**) — burning muscle protein — while fat breakdown produces **ketones**. After several days the brain runs largely on ketones and protein loss slows. Weeks later, when fat is exhausted, protein breakdown accelerates and organs fail.

Long before that, **performance and judgment decline**. The Minnesota Starvation Experiment (1944–45) found apathy, irritability, depression, preoccupation with food and poorer concentration in healthy volunteers on reduced rations — exactly the qualities a survivor cannot afford.`,
    },
    { type: 'diagram', id: 's8-starvation', caption: 'What the body burns without food (with water, at rest). Log time axis.' },
    { type: 'diagram', id: 's8-energy-budget', caption: 'Approximate daily expenditure. Cold-weather travel can double temperate needs.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Protein poisoning (“rabbit starvation”)',
      md: 'A diet of very lean meat alone (rabbit, lean fish) cannot supply energy for long: the liver can only process a limited amount of protein (roughly a third of energy needs), and people eating only lean meat become ill — nausea, diarrhoea, weakness — despite eating a lot. Northern peoples prize fat for good reason. Any foraging or hunting depends on local law and training (Stages 6–7).',
    },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Challenge 4: a 12-hour subarctic night on half-empty glycogen. Find how much food keeps the shivering furnace fuelled.' },
  ],
  whyItMatters: 'In the cold, food is heat: shivering and work run on it, and glycogen runs out in hours, not days. In any prolonged situation, falling energy intake erodes mood, judgment and physical capacity. Knowing the fuel tanks lets you plan rations, pace, and what to eat when — and explains why a snack at the right moment can prevent a hypothermia spiral.',
  science: [
    {
      type: 'md',
      md: `### How long does glycogen last?

Walking with a pack at ~365 W metabolic rate is about $365 \\times 3600 / 4184 \\approx 314$ kcal/h. If ~55 % comes from carbohydrate, that is ~173 kcal/h of glycogen. From a 1,800 kcal store:

$$
\\frac{1800}{173} \\approx 10\\ \\text{hours}
$$

— but at harder intensity (75 % carbohydrate, ~540 kcal/h) the same store lasts closer to **4–5 hours**, and shivering through a cold night after a hard day draws on what is left. Hence: eat regularly during long days and before sleeping in the cold.

### Fat: a big but slow tank

Adipose tissue holds about **7,700 kcal per kg**. A person with 12 kg of fat carries ~90,000 kcal — weeks of energy at rest. The limit is the *rate*: fat oxidation peaks at moderate intensity (roughly 0.5–1 g/min in trained people) and cannot power hard work or intense shivering by itself.

### A three-day energy budget without food

Expenditure 2,500 kcal/day (cold camp, light tasks, some shivering) for 3 days = 7,500 kcal. Glycogen supplies ~2,000; the rest comes mostly from fat (≈ 0.7 kg) plus a meaningful amount of protein early on. Survivable — water and warmth decide that — but expect weakness, irritability and slower thinking from day 2. Minimise work in the heat of the day, keep warm to limit shivering, and rest.

### Why the cold raises needs

Heavy clothing and boots, walking in snow, hauling loads and shivering all add cost. Military cold-weather planning allows roughly **4,000–4,500 kcal/day** for troops working in the cold, versus ~3,000 in temperate field conditions. Cold also blunts appetite and makes cooking slow — food must be easy to eat.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Arctic/subarctic.** Polar travellers hauling sledges burn 5,000–6,000+ kcal/day and still lose weight; high-fat foods (nuts, butter, cheese, chocolate) give the most energy per gram carried.

**Mountain.** Climbers “bonk” on long summit days when they do not eat because of altitude-suppressed appetite. Small, frequent carbohydrate snacks keep pace and judgment up.

**Desert.** Digesting protein uses more water for urea excretion; with very little water, eat little and favour carbohydrate.

**Forest and long-duration survival.** Foraged greens are low in energy; calories come from fats, nuts, starchy roots and animal foods — each with legal and safety constraints (Stage 6).

**Urban disaster.** Stored food for a 72-hour kit should be calorie-dense, need no cooking, and match people’s dietary needs.`,
    },
  ],
  mistakes: [
    'Skipping meals on a cold, hard day “to save time” — glycogen runs out and shivering fails later.',
    'Myth: you can live indefinitely on lean game or fish alone. Without fat, protein poisoning follows.',
    'Carrying low-calorie “healthy” snacks for cold or long trips instead of energy-dense food.',
    'Spending energy on low-value tasks (e.g., hunting with no skill) early in a short survival situation.',
    'Ignoring the mental effects of hunger: irritability and poor judgment are symptoms, not character flaws.',
  ],
  exercises: [
    {
      id: 's8-l6-e1',
      title: 'Build a cold-weather energy budget',
      level: 2,
      safety: 'home',
      minutes: 45,
      materials: ['Nutrition labels or a food database', 'Spreadsheet'],
      steps: [
        'Plan a 3-day winter trip: estimate daily expenditure (e.g., 4,000 kcal) and your food weight limit.',
        'Choose foods and compute kcal per 100 g for each; aim for at least 450 kcal/100 g overall.',
        'Schedule eating: breakfast, snacks every 60–90 min while moving, a fat-and-carbohydrate snack before sleep.',
        'Compare the total with the budget and adjust.',
      ],
      success: ['Your plan meets the energy budget within the weight limit.', 'Snacks are scheduled, not left to appetite.'],
      skill: 'cold-energy-budget',
    },
    {
      id: 's8-l6-e2',
      title: 'Glycogen and shivering in the Physiology Lab',
      level: 2,
      safety: 'virtual-only',
      minutes: 20,
      steps: [
        'Open Challenge 4 (twelve-hour subarctic night). Run it unchanged and note when glycogen warnings appear and how the core responds.',
        'Add a tarp and bed; then add snacks; then regular eating. Record final glycogen and minimum core each time.',
        'Explain the results in terms of shivering fuel.',
      ],
      success: ['You can show with numbers how food changes the night.'],
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l6-q5',
      kind: 'single',
      prompt: 'Which plan best helps a person get through a cold night in a basic shelter?',
      choices: [
        { id: 'a', text: 'Eat a carb-and-fat snack before sleep; keep food and a drink within reach', why: 'Correct — fuel for shivering, and refuelling without leaving insulation.' },
        { id: 'b', text: 'Skip dinner to save food for later; keep a drink within reach', why: 'Skipping dinner is a short-term saving that costs warmth tonight.' },
        { id: 'c', text: 'Eat a snack before sleep, then exercise hard until warm and sweating', why: 'Sweat dampens insulation; brief light movement is better.' },
        { id: 'd', text: 'Skip dinner, then exercise hard just before getting into the bag', why: 'Both choices cost warmth: no fuel, and damp insulation.' },
      ],
      answer: 'a',
      concepts: ['glycogen', 'shivering', 'energy-budget'],
      explanation: 'In the cold, food is heat. Eat before sleep, keep a snack handy, and avoid sweating.',
    },
    {
      id: 's8-l6-q4',
      kind: 'single',
      prompt: 'A survivor has plenty of very lean rabbit meat but no fat or carbohydrate. What is the outlook?',
      choices: [
        { id: 'a', text: 'They will fall ill: protein can cover only a limited share of energy.', why: 'Correct — this is “rabbit starvation”; fat is essential.' },
        { id: 'b', text: 'They will be fine indefinitely, as protein gives energy like any food.', why: 'The liver can process only a limited amount of protein — roughly a third of energy needs.' },
        { id: 'c', text: 'They will be fine as long as they eat until they feel full each day.', why: 'People eating only lean meat become ill despite eating a lot.' },
        { id: 'd', text: 'They will be fine for months; only vitamin shortages cause trouble.', why: 'The limit is energy from protein, and illness comes much sooner.' },
      ],
      answer: 'a',
      concepts: ['fat-oxidation', 'starvation'],
      explanation: 'Protein can supply only a limited share of energy; lean-meat-only diets cause “rabbit starvation”. Fat is essential.',
    },
    {
      id: 's8-l6-q1',
      kind: 'single',
      prompt: 'Which fuel store is the main bottleneck for hard work and prolonged shivering?',
      choices: [
        { id: 'a', text: 'Glycogen', why: 'Correct — only ~2,000 kcal, and used fast at high intensity.' },
        { id: 'b', text: 'Fat', why: 'Huge store, but released too slowly to limit you in the short term.' },
        { id: 'c', text: 'Protein', why: 'Not a store; used when fasting at the cost of muscle.' },
        { id: 'd', text: 'Blood glucose', why: 'A tiny pool kept topped up by liver glycogen.' },
      ],
      answer: 'a',
      concepts: ['glycogen'],
      explanation: 'Glycogen is small and fast; fat is large and slow. Feed the glycogen tank on long or cold days.',
    },
    {
      id: 's8-l6-q2',
      kind: 'single',
      prompt: 'Hard uphill work at 540 kcal/h draws 75 % from carbohydrate. How long does a 1,600 kcal glycogen store last with no food?',
      choices: [
        { id: 'a', text: '≈ 4.0 h', why: 'Correct — 1,600 ÷ 405 kcal/h.' },
        { id: 'b', text: '≈ 3.0 h', why: 'This divides by the full 540 kcal/h and forgets that only 75 % is carbohydrate.' },
        { id: 'c', text: '≈ 11.9 h', why: 'This uses 25 % from carbohydrate (135 kcal/h) instead of 75 %.' },
        { id: 'd', text: '≈ 0.25 h', why: 'This inverts the ratio (405 ÷ 1,600).' },
      ],
      answer: 'a',
      concepts: ['glycogen', 'energy-budget'],
      explanation: '540 × 0.75 = 405 kcal/h; 1,600 / 405 ≈ **4.0 h**.',
    },
    {
      id: 's8-l6-q3',
      kind: 'single',
      prompt: 'During total fasting (with water, at rest), what is the main fuel shift **after liver glycogen is used up**?',
      choices: [
        { id: 'a', text: 'Gluconeogenesis from protein rises', why: 'Correct — the next step, within days.' },
        { id: 'b', text: 'The brain runs largely on ketones', why: 'That comes later (weeks), and it spares protein.' },
        { id: 'c', text: 'Fat runs out and protein loss speeds up', why: 'That is the final, most dangerous phase.' },
        { id: 'd', text: 'Protein is fully spared until fat is gone', why: 'Protein is used early for gluconeogenesis, before ketosis spares it.' },
      ],
      answer: 'a',
      concepts: ['starvation'],
      explanation: 'Liver glycogen (hours) → gluconeogenesis from protein (days) → ketosis spares protein (weeks) → fat depleted, accelerated protein loss. Judgment degrades early in the sequence.',
    },
  ],
  scenario: {
    id: 's8-l6-sc',
    setup: 'You are stranded for an expected 3 days in a snowbound cabin area at −10 °C after a vehicle breakdown (Stage 17). You have 2,400 kcal of food per person (chocolate, nuts, crackers), a stove with fuel, sleeping bags, and plenty of snow. Rescue is expected but not certain. A companion suggests fasting on day 1 to “save food”.',
    question: 'What is the best food strategy?',
    choices: [
      { id: 'a', text: 'Fast completely on day 1 as suggested, then eat everything on day 2.', why: 'Leaves you cold and irritable on day 1 and wastes shelter-building capacity.' },
      { id: 'b', text: 'Eat about a third each day in small portions, with a bigger snack before sleep.', why: 'Best: steady fuel for warmth and judgment — add minimal hard work and sweating, and warm drinks from melted snow.' },
      { id: 'c', text: 'Eat everything now, while you are still warm and have strength.', why: 'No reserve for the coldest nights.' },
      { id: 'd', text: 'Save all the food for emergencies and live on body fat for now.', why: 'Fat can sustain you, but shivering and cold tolerance suffer without carbohydrate.' },
    ],
    best: 'b',
    debrief: 'Short survival situations are rarely decided by starvation, but by warmth and judgment. Small regular portions, a pre-sleep snack, warm drinks and minimal sweating turn limited food into maximal heat and clear thinking.',
    concepts: ['energy-budget', 'glycogen', 'stay-or-move'],
  },
  summary: [
    'Glycogen ~1,600–2,400 kcal (small, fast); fat ~75,000+ kcal (large, slow); protein is not a store.',
    'Carbohydrate share rises with intensity; glycogen empties in ~4–10 h of work → “the wall”.',
    'Fasting: liver glycogen → gluconeogenesis → ketosis → protein loss; judgment degrades early.',
    'Cold roughly doubles needs; eat regularly and before sleep. Lean meat alone is not enough.',
  ],
  furtherReading: ['keys-starvation', 'usariem-cold'],
  references: ['keys-starvation', 'usariem-cold', 'acsm-fluid-2007', 'auerbach'],
}
