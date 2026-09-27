import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's18-l2',
  stage: 18,
  order: 2,
  title: 'Camp systems and sanitation',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s10-l5'],
  concepts: ['s18-camp-zones', 'fecal-oral-route', 's18-clean-dirty', 's18-camp-routine', 'emergency-sanitation', 'leave-no-trace', 'water-treatment', 'food-poisoning', 'carbon-monoxide', 'site-hazards'],
  objectives: [
    'Lay out a multi-day camp in **zones** — sleep, fire and kitchen, fuel, water, washing, latrine, food storage, tools, signals — using wind, drainage and distance.',
    'Explain the **faecal–oral routes** (the F-diagram) and place a barrier on each: latrine siting, water treatment, hand washing, covering and food hygiene.',
    'Run a **clean/dirty water system** that stops treated water being re-contaminated.',
    'Build a **daily camp routine** that makes the important things happen automatically, even when you are tired.',
    'Recognise when a camp should be moved, and manage illness in camp so it does not spread.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A one-night bivouac can be messy and still work. Over several days, small inefficiencies and small contaminations add up: you walk the same wasteful route to the woodpile twenty times, lose the knife twice, and, on day 4, get diarrhoea from a bottle that touched a dirty hand. Stage 10 covered the basics of field sanitation — catholes, hand hygiene and a simple layout. This lesson turns them into a **system** that runs itself for days.

### Zones

Think of the camp as a small village with a map. Each activity gets a place, chosen for a reason:

| Zone | Where | Why |
|---|---|---|
| **Sleep shelter** | Slight rise, good drainage, no dead branches or trees overhead, out of flood and rockfall paths (Stage 5) | The place you spend most hours; hazards there are the most likely to hit you |
| **Fire and kitchen** | A few metres **downwind** of the shelter, on mineral soil or an existing fire ring | Smoke and sparks blow away from the bed; food smells stay away from where you sleep |
| **Woodpile** | Beside the fire, **under cover**, off the ground | Dry fuel tonight and tomorrow; short trips in the dark |
| **Water collection** | **Upstream** of camp and of anywhere you wash | Your own camp is a contamination source |
| **Washing and grey water** | At least **60 m (200 ft)** from the water, scattered widely | Soap and food scraps pollute water and attract animals |
| **Latrine / catholes** | **Downwind**, downhill of water, at least **60 m (about 70 adult steps)** from water, camp and trails | The main barrier in the F-diagram |
| **Food storage** | Away from the sleeping area; follow local rules where bears or other wildlife are a concern | Animals follow food smells into shelters |
| **Tools and repair** | One fixed, covered spot | “A place for everything” prevents losses that can cost a day |
| **Signal site** | The nearest open ground visible from the air or water (Stage 14) | Signals must be ready before searchers arrive |

Mark paths between them so you walk the same line — it protects vegetation and makes night trips safe. In snow, pick a **clean-snow area** upwind for melting water and a separate, clearly marked area for urine, well away from it.`,
    },
    { type: 'diagram', id: 's18-camp-layout', caption: 'A multi-day camp in zones. Distances from water follow Leave No Trace guidance; always check local rules.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Camping, fire, waste and food-storage rules',
      md: 'Camping may need a permit or be allowed only at designated sites; many areas limit stays (often around 14 days on public land in the US). Fires may be banned. Some places require you to **pack out human waste** (for example many river corridors, deserts, glaciers and high-use areas) or to store food in **approved wildlife-resistant containers**. Rules differ by land manager and season — check before every trip ([References → Law varies by jurisdiction](#/references)).',
    },
    {
      type: 'md',
      md: `### Sanitation: why it matters more each day

Diarrhoeal disease spreads when **faeces reach a mouth**. The classic **F-diagram** traces the routes — fluids, fingers, flies, fields (soil) and floors (surfaces), usually by way of **food** — and shows where barriers go:`,
    },
    { type: 'diagram', id: 's18-f-diagram', caption: 'The F-diagram: block the routes at the source (sanitation) and on the way (treatment, hand washing, covering, food hygiene).' },
    {
      type: 'md',
      md: `- **At the source — latrine siting.** Catholes 15–20 cm (6–8 in) deep in dark organic soil, at least 60 m from water, camp and trails, covered and disguised afterwards; spread them out. For longer stays or groups, land managers may recommend a **single latrine** instead; follow local guidance. Where soil is thin, frozen or the area is heavily used, pack waste out.
- **Fluids — water treatment.** Treat every litre (Stages 1 and 4), and keep treated water clean (below).
- **Fingers — hand washing.** After the toilet and before handling food or clean water: soap and water, scrubbing for at least 20 seconds, then air-dry. Alcohol hand sanitiser (at least 60 % alcohol) is a backup; it works poorly on visibly dirty hands and does not kill every germ, so it does not replace soap.
- **Flies and surfaces — cover.** Cover food and cooking gear; cover catholes; keep food scraps and rubbish bagged.
- **Food — hygiene.** Clean hands and utensils, cook thoroughly, eat promptly, store safely (Stage 6).

A **hand-washing station** at the latrine path makes the right thing the easy thing: a bottle or bag of water hung from a branch with a small hole or a tap, a bar of soap on a string, and a place to drain. Over several days, the station prevents more illness than any single piece of kit.

### The clean/dirty water system

Most field water failures are **re-contamination** rather than failed treatment:

1. **Two colours of container.** “Dirty” (raw) and “clean” (treated) bottles are marked and never swapped. Only the dirty bottle goes into the stream.
2. **Protect threads and mouthpieces.** Raw drips on the threads of a clean bottle bypass your treatment; keep caps on and dry the threads.
3. **Clean hands** before handling clean water.
4. **Treat in batches** at a fixed time — morning and evening — so there is always a day of treated water ahead (Lesson 1).
5. **Know your backup.** Filter plus tablets, or boiling if fuel allows; count tablets on the ledger.

### Routine: making good habits automatic

Tired people forget. A routine turns the important jobs into habits:

| When | Routine |
|---|---|
| **Dawn** | Latrine and hand washing; check the fire; morning maintenance round (Lesson 3); drink |
| **Morning** | Main work while cool and strongest: water batch, wood, shelter, signals |
| **Midday** | Rest and shade in heat; in cold, eat and do the chores that need dexterity |
| **Afternoon** | Lighter work; tomorrow’s firewood in **before dark**; refresh signals |
| **Evening** | Hot meal, evening water batch, dry clothes, bed ready, evening round, **plan tomorrow**, log the ledger |

Routine also protects **morale** (Lesson 4): it gives each day structure and visible progress.

### When the camp itself becomes the problem

Camps degrade. Move if the ground becomes waterlogged, if the latrine area is filling, if animals are raiding, if a hazard appears (rising river, a leaning dead tree after a storm), or if a better site would make you **more visible**. Moving costs a day of energy — decide in the morning, with food in you, not at dusk.

### Illness in camp

If someone gets diarrhoea: fluids and salts first (oral rehydration solution — Stage 8 and Stage 9), rest, strict hand washing, and they should not prepare food or handle clean water for others. Seek evacuation for **blood in the stool, high fever, inability to keep fluids down, or signs of severe dehydration** such as confusion, fainting or very little urine. A hands-on wilderness first-aid course (WFA/WAFA/WFR) teaches this properly.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Cooking inside shelters',
      md: 'Stoves, braziers and fires inside tents, snow shelters or small huts produce **carbon monoxide** (Stage 16). Cook outside or in a well-ventilated vestibule with the door open; in snow shelters keep a ventilation hole open and clear. Headache, nausea or drowsiness in several people at once is a warning — get into fresh air.',
    },
  ],
  whyItMatters: 'Historically, disease has killed more people in camps — military, refugee, disaster and expedition — than exposure or starvation. Over several days, one lapse (a dirty bottle, an unwashed hand, a latrine too close to the stream) can turn a manageable wait into a medical emergency. A well-zoned camp with a routine also saves energy, prevents lost gear and keeps you sane.',
  science: [
    {
      type: 'md',
      md: `### Why the numbers are what they are

**60 m (200 ft) from water.** Faecal pathogens can travel through soil and in surface run-off, especially in rain. Distance, organic soil and depth give the soil time to filter and microbes time to die off before anything reaches water. Leave No Trace uses about **70 adult steps** as a field measure for 200 ft.

**Infective doses are small.** Some pathogens need only a few organisms to cause infection (Stage 4: infective dose). That is why an unwashed hand touching a bottle mouth can undo careful treatment.

**Hand washing works mechanically.** Soap lifts grease and microbes off the skin so that rubbing and rinsing remove them; sanitiser kills many microbes chemically but leaves dirt and some resistant organisms behind.

### How a small risk becomes likely over a week

If each day carries a small chance $p$ of a contamination event that makes you ill, the chance of at least one such event over $n$ days is

$$
P = 1 - (1 - p)^n
$$

With $p = 0.05$ (one day in twenty), $P = 1 - 0.95^7 \\approx 0.30$ over a week. Halve the daily risk with a hand-washing station and a clean/dirty system and the weekly chance falls to about $1 - 0.975^7 \\approx 0.16$. Systems pay off because they act on every day.

### Grey water and soap

Even biodegradable soap harms aquatic life in streams and lakes. Wash **away** from the water with a small amount of soap, strain out food scraps (pack them out), and scatter the grey water widely on soil at least 60 m from water.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest lakeshore.** Water is collected from the lake upwind of camp and filtered; the latrine is 70 steps back in the forest, downhill of the camp but away from the shore; the washing station hangs on the latrine path. Food hangs or sits in a canister away from the tent where bears are present.

**Desert canyon.** Soil is thin and water rare; many land managers require human waste to be packed out in bags. The kitchen goes in shade; grey water is minimal and scattered far from the pothole you drink from.

**Tropical rainforest.** Everything is wet: raised sleeping platform, a covered woodpile, and a strict routine of drying feet and socks each evening. Flies and ants make **covering food** essential.

**Arctic or alpine snow camp.** A marked clean-snow area for water upwind; a marked latrine area downwind; cooking outside or with ventilation to avoid carbon monoxide in snow shelters.

**Coastal.** Latrines above the high-tide line and away from freshwater seeps; food stored away from gulls and foxes; wind decides where the fire goes.

**Urban disaster.** The same zones exist at home after an earthquake or outage: a bucket-toilet area, a hand-washing station, clean and dirty water containers, and a cooking area outside (Stage 16).`,
    },
  ],
  mistakes: [
    'Collecting water downstream of your own camp, washing area or latrine.',
    'Dipping the “clean” bottle into the stream or filling it with dirty hands.',
    'Siting the latrine where it is convenient rather than downwind and ≥ 60 m from water.',
    'Myth: “Hand sanitiser is as good as soap.” It is a backup; it works poorly on dirty hands and misses some germs.',
    'Myth: “Water in the wilderness is clean because it is far from people.” Animals and other campers contaminate it; treat every litre.',
    'Cooking inside a closed tent or snow shelter.',
    'Letting someone with diarrhoea prepare food or handle clean water for the group.',
    'No fixed place for tools, so the knife or lighter is lost in leaf litter.',
  ],
  exercises: [
    {
      id: 's18-l2-e1',
      title: 'Map and audit a camp',
      level: 2,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Notebook and pencil', 'Compass or phone compass', 'A legal campsite or your own overnight camp'],
      safetyNote: 'Use a legal campsite and follow its rules for fires and waste. Do not dig catholes where the land manager requires pack-out or designated toilets.',
      steps: [
        'Note wind direction, slope and drainage, water sources and hazards (dead trees, flood marks).',
        'Sketch a zone plan: sleep, fire/kitchen, woodpile, water, washing, latrine, food storage, tools, signal site.',
        'Pace the distances from the latrine and washing areas to water. Are they at least 60 m (about 70 steps)?',
        'Walk the paths at dusk with a headlamp: are they safe and simple?',
        'List three changes you would make for a five-day stay.',
      ],
      success: ['Your plan puts water upstream and the latrine downwind and ≥ 60 m away.', 'You can justify every zone’s position.'],
      skill: 's18-camp-hygiene',
    },
    {
      id: 's18-l2-e2',
      title: 'Build a hanging hand-washing station',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['A plastic bottle or jerrycan with a cap', 'Cord', 'Soap and a mesh bag or stocking', 'A nail heated safely or a small drill to make a hole'],
      safetyNote: 'An adult makes the hole; handle heated nails with pliers.',
      steps: [
        'Make a small hole near the base of the bottle, or fit a tap, so that a gentle stream flows when the cap is loosened (or tipped).',
        'Hang it at hand height; tie soap on a string beside it.',
        'Put gravel or leaves under it so the ground does not become mud.',
        'Wash your hands with it for 20 seconds and measure how much water one wash uses.',
      ],
      success: ['One hand wash uses well under half a litre.', 'The station can be hung, used and packed away in under five minutes.'],
      skill: 's18-camp-hygiene',
    },
    {
      id: 's18-l2-e3',
      title: 'Clean/dirty water drill',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Two bottles', 'Coloured tape', 'Your filter or treatment method', 'A bowl of tap water with a drop of food colouring as “dirty” water'],
      steps: [
        'Mark one bottle “dirty” and one “clean”.',
        'Fill the dirty bottle from the bowl and treat or filter into the clean bottle.',
        'Inspect the clean bottle’s threads and cap for any coloured drops. Any colour = a contamination route.',
        'Repeat until you can do it three times with no colour transfer.',
      ],
      success: ['Three runs with no dye on the clean bottle’s threads, cap or outside.'],
      skill: 'water-treatment',
    },
  ],
  quiz: [
    {
      id: 's18-l2-q1',
      kind: 'multi',
      prompt: 'Which choices make a five-day camp by a stream safer?',
      choices: [
        { id: 'a', text: 'Collect water upstream of camp and washing', why: 'Yes — your own camp is a contamination source.' },
        { id: 'b', text: 'Latrine downwind and at least 60 m from water, camp and trails', why: 'Yes — the first barrier in the F-diagram.' },
        { id: 'c', text: 'Fire and kitchen a few metres upwind of the sleeping shelter', why: 'No — downwind, so smoke and sparks blow away from the bed.' },
        { id: 'd', text: 'A hand-washing station on the latrine path', why: 'Yes — it makes the right thing the easy thing.' },
        { id: 'e', text: 'Wash dishes directly in the stream with biodegradable soap', why: 'No — wash ≥ 60 m away and scatter strained grey water.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['s18-camp-zones', 'leave-no-trace', 'emergency-sanitation'],
      explanation: 'Zones are chosen for wind, drainage and distance from water. The kitchen goes downwind of the bed.',
    },
    {
      id: 's18-l2-q2',
      kind: 'single',
      prompt: 'On day 4, two of your group have diarrhoea although all water has been filtered. What is the most likely cause?',
      choices: [
        { id: 'a', text: 'The filter has stopped working completely', why: 'Possible, but a clogging filter usually slows before it fails, and most failures are elsewhere.' },
        { id: 'b', text: 'Re-contamination: unwashed hands, a shared pot, or raw water on clean bottle threads', why: 'Correct — most field failures happen after treatment, via fingers and surfaces.' },
        { id: 'c', text: 'Drinking too much water', why: 'Not a cause of infectious diarrhoea.' },
        { id: 'd', text: 'Eating too little food', why: 'Hunger does not cause infectious diarrhoea.' },
      ],
      answer: 'b',
      concepts: ['fecal-oral-route', 's18-clean-dirty'],
      explanation: 'Look along the F-diagram: fingers, surfaces and food are routes that bypass water treatment. Fix hand washing, the clean/dirty system and who handles food.',
    },
    {
      id: 's18-l2-q3',
      kind: 'numeric',
      prompt: 'Leave No Trace gives about 70 adult steps as a field measure for 200 ft. If your pace (one step) is 0.8 m, how far away in metres is a cathole 70 of your steps from the stream?',
      unit: 'm',
      answer: 56,
      tolerance: 1,
      concepts: ['s18-camp-zones', 'leave-no-trace'],
      explanation: '$70 \\times 0.8 = 56$ m — close to 60 m. If your step is shorter, take more steps; the target is the distance, not the count.',
    },
    {
      id: 's18-l2-q4',
      kind: 'truefalse',
      prompt: 'Alcohol hand sanitiser is an adequate replacement for soap and water after using the latrine, even when your hands are visibly dirty.',
      answer: false,
      concepts: ['fecal-oral-route'],
      explanation: 'False. Sanitiser is a backup when soap and water are not available; it works poorly on visibly dirty or greasy hands and does not kill every germ.',
    },
    {
      id: 's18-l2-q5',
      kind: 'order',
      prompt: 'Order the evening routine at a cold camp so that the most time-critical jobs happen first.',
      items: [
        { id: 'wood', text: 'Bring in tonight’s and tomorrow morning’s firewood before dark' },
        { id: 'water', text: 'Evening water batch: treat and fill clean bottles for the night and morning' },
        { id: 'meal', text: 'Hot meal and hot drink' },
        { id: 'bed', text: 'Dry clothes on, bed ready, boots and bottles protected from freezing' },
        { id: 'plan', text: 'Evening round, ledger and plan for tomorrow' },
      ],
      answer: ['wood', 'water', 'meal', 'bed', 'plan'],
      concepts: ['s18-camp-routine', 'daylight'],
      explanation: 'Daylight-dependent jobs first (wood), then water while the fire is going, then food, then the bed, then the plan. The routine protects you when you are tired.',
    },
    {
      id: 's18-l2-q6',
      kind: 'single',
      prompt: 'After a storm, a large dead branch now hangs over your shelter, and the ground beside the stream has flooded close to your latrine. It is 15:00 in winter; dark at 17:00. What is the best plan?',
      choices: [
        { id: 'a', text: 'Stay tonight as you are and decide tomorrow', why: 'The overhead hazard is immediate; sleeping under it tonight is the kind of risk Stage 1 calls immediate danger.' },
        { id: 'b', text: 'Move the sleeping shelter out from under the branch now, keep the rest of camp, and plan a full move or a new latrine tomorrow morning', why: 'Best: deals with the immediate danger before dark and defers the bigger move to a fed, rested morning.' },
        { id: 'c', text: 'Move the whole camp now to a better site 1 km away', why: 'A large move in the last two hours of daylight risks ending the day wet, cold and unsheltered.' },
        { id: 'd', text: 'Try to pull the branch down yourself', why: 'Hazardous work alone; widow-makers injure people.' },
      ],
      answer: 'b',
      concepts: ['site-hazards', 'immediate-danger', 'daylight', 's18-camp-zones'],
      explanation: 'Deal with immediate dangers now; make big, costly decisions in the morning with food and daylight.',
    },
  ],
  scenario: {
    id: 's18-l2-sc',
    setup: 'You are the most experienced person in a group of four stranded for an expected four to five days at a forest lake after a floatplane could not return for you in bad weather. The group has set up quickly: tents near the shore, the fire upwind of the tents, one shared pot, a filter, no soap, and people using the forest “wherever” behind the tents. One person already has an upset stomach.',
    question: 'What do you change first?',
    choices: [
      { id: 'a', text: 'Nothing — it is only a few days, and changing things wastes energy.', why: 'Over four to five days, with one person already ill, disease is a realistic threat; the changes are cheap.' },
      { id: 'b', text: 'Set up the sanitation system now: a latrine area downwind and 70 steps from the lake, a hand-washing station on the path (ash or sand scrub and water if there is no soap, sanitiser if anyone has it), clean/dirty bottles, the sick person stops handling food and water, and move the fire downwind of the tents.', why: 'Best: blocks the faecal–oral routes at once, protects the group from the first case, and fixes fire safety — all cheap on day 1.' },
      { id: 'c', text: 'Start boiling all water as well as filtering it.', why: 'Water treatment is not the weak point; fingers, the shared pot and the latrine are.' },
      { id: 'd', text: 'Move camp to the other side of the lake.', why: 'Costly, and the same habits would move with you.' },
    ],
    best: 'b',
    debrief: 'This joins Stage 10’s field sanitation, Stage 4’s contamination routes and Stage 15’s group roles. With one case already, the F-diagram tells you where the next cases will come from: hands, shared utensils, and a latrine too close to camp and water. Rubbing hands with clean sand or wood ash and rinsing is a better-than-nothing substitute when there is no soap. Give someone the job of running the washing station — a role also helps morale.',
    concepts: ['fecal-oral-route', 's18-camp-zones', 'emergency-sanitation', 'fire-safety'],
  },
  summary: [
    'A multi-day camp is a **system of zones** placed by wind, drainage and distance from water.',
    'Water **upstream**; latrine **downwind** and **≥ 60 m (about 70 steps)** from water, camp and trails; kitchen downwind of the bed.',
    'The **F-diagram**: block fluids, fingers, flies, fields and food — sanitation, treatment, hand washing, covering, food hygiene.',
    '**Clean/dirty** containers stop re-contamination; treat water in batches with a backup method.',
    'A **routine** makes good habits automatic when you are tired; big moves happen in the morning.',
    'Diarrhoea: fluids and salts first; the sick person stops handling food and water; know the evacuation red flags — and take a WFA course.',
    'Camping, fire, waste and food-storage **rules** differ by place: check them.',
  ],
  furtherReading: ['lnt-principles', 's18-who-sanitation-2018', 'who-five-keys', 's10-cdc-handwashing'],
  references: ['lnt-principles', 's10-wagner-lanoix-1958', 's18-who-sanitation-2018', 's10-cdc-handwashing', 'who-five-keys', 'cdc-emergency-water', 'who-ors-2006', 'cdc-co', 'nps-camping', 'scottish-access-code', 'sphere-handbook', 'nols-wm-book'],
}
