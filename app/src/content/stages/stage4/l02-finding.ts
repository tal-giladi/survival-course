import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's4-l2',
  stage: 4,
  order: 2,
  title: 'Finding water',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s4-l1', 's2-l2'],
  concepts: ['water-finding', 'groundwater', 'water-budget'],
  objectives: [
    'Use **maps and local knowledge** first, and read terrain for where water collects.',
    'Interpret **vegetation and animal clues** — and know which ones mislead.',
    'Explain **groundwater**: water table, springs at rock contacts, seeps, subsurface flow in dry washes and the freshwater lens under dunes.',
    'Weigh the **expected value** of a water search against its sweat cost and daylight.',
    'Apply the ideas in **desert, coastal, arctic, tropical and urban** settings.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Finding water is a probability game. Every clue raises the odds; none is certain; and every search costs sweat and daylight. The skill is to look **first where the odds are highest and the cost is lowest**.

### 1. Before you go: maps and people

The cheapest water is the water you already know about. Topographic maps (Stage 2) mark **springs, wells, tanks, perennial streams (solid blue) and intermittent streams (dashed blue)**. Rangers, recent trip reports and locals know which ones are actually flowing this season. In dry country, carry enough to reach the *next reliable* source, not the next *mapped* one.

### 2. Terrain: water runs downhill and collects

- **Valley bottoms and confluences** collect surface and subsurface flow.
- **Outer bends of dry streambeds (washes, wadis, arroyos, creeks):** the current scours deepest there; water lingers in the sand longest. Dig at the lowest point of the outside of the bend.
- **Bases of cliffs and rock outcrops:** water that soaked into porous rock above emerges where it meets a less permeable layer — look for **dark streaks, moss, ferns or mineral crusts**.
- **Rock potholes (tinajas, gnammas, rock tanks):** hold rainwater for weeks; shaded ones last longest. Often stagnant and shared with animals — treat thoroughly.
- **Shaded, north-facing (southern-hemisphere: south-facing) gullies** keep snow and pools longer.`,
    },
    { type: 'diagram', id: 'water-terrain-clues', caption: 'Stack the clues: low ground + green vegetation + converging trails + bird flight lines.' },
    {
      type: 'md',
      md: `### 3. Vegetation clues

Some plants (**phreatophytes**) only grow where their roots reach groundwater: **willows, cottonwoods and poplars, sycamores, alders, reeds, rushes, cattails, sedges and tamarisk (salt cedar)**; **palms** at desert oases; river red gums along dry Australian watercourses. A **line of brighter green** winding across brown country marks a watercourse or shallow groundwater, often visible kilometres away from high ground.

Deep-rooted desert shrubs (creosote bush, mesquite in some settings, acacias) and cacti tell you little — many tap water far below reach, or store their own.

### 4. Animal clues

| Clue | Reliability | Why |
|---|---|---|
| **Game trails converging downhill** (a "V" pointing downslope) | Good | Grazers drink daily, usually at dawn and dusk. |
| **Seed-eating birds** (pigeons, doves, finches, sandgrouse, budgerigars) flying low and direct at dawn/dusk | Good | Dry seed diets force them to drink daily; they fly low to water and higher and slower after drinking. |
| **Bees and wasps** | Moderate | Colonies usually need water within a few km; follow the flight line. |
| **Mosquitoes, frogs calling, dragonflies** | Good for standing water nearby | Their larvae need water. |
| **Ants streaming up a tree** | Occasional | May lead to water held in a tree hollow. |
| **Raptors, carnivores, many reptiles** | Poor | They get much of their water from prey. |`,
    },
    {
      type: 'md',
      md: `### 5. Groundwater concepts

Below the surface, soil and rock are partly wet (the **unsaturated zone**); deeper, every pore is full (the **saturated zone**). The boundary is the **water table**, which roughly mirrors the land surface but lies closer to it in valleys. Where the water table meets the surface, you get **springs, seeps and marshes**. A **clay or solid rock layer** can hold up a small **perched water table** high on a slope, producing a spring far above the valley. There is far more fresh water in the ground than in all rivers and lakes combined (USGS) — the problem is reaching it.

**Seep holes.** Beside a muddy river or lake, dig a hole 1–2 m from the bank, a little below the water level, and let it fill. The water that seeps in has been filtered through sand: much clearer and lower in sediment and some microbes. It is **not** treated — but it is far easier to filter and disinfect.

**Coastal dunes: the freshwater lens.** Rain that soaks into sand floats as a lens on top of denser seawater. Dig at the lowest point **behind the first dune**, well above high tide; stop as soon as the water tastes brackish, and collect slowly from the top.`,
    },
    { type: 'diagram', id: 'groundwater-section', caption: 'Water table, perched water above a clay layer, a spring, and a seep hole beside a stream.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Know when to stop digging',
      md: 'Digging is hard work. In a dry wash, if you have not reached **damp** sand within about **30–60 cm**, stop and try a better spot (lower, outer bend, near green plants) — or wait for the cool of evening. A hole that yields nothing can easily cost a litre of sweat.',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law and ethics',
      md: 'Water rights, springs on private land, wells and stock tanks, and wildlife water catchments ("guzzlers") are regulated differently in each jurisdiction; many protected areas forbid cutting or damaging vegetation. In a genuine emergency, life comes first — otherwise ask landowners or managing agencies, and leave troughs and catchments as you found them. Drinking from plants (vines, bamboo, palms) is a **foraging** activity: laws differ, and it requires expert local plant identification that this course does not teach.',
    },
  ],
  whyItMatters: 'Carried water runs out on a predictable schedule; found water extends it. But searching is not free: each hour of scrambling in the heat can cost more than a litre. Knowing where water is most likely — and how much the search is worth — lets you find it with the least sweat and daylight, and keeps you from chasing mirages on hot, dry afternoons.',
  science: [
    {
      type: 'md',
      md: `### The expected value of a search

In words: a search is worth it when the water you expect to find — probability times amount — exceeds the sweat it costs, with margin for time and risk.

$$
EV = p \\times V_{found} - SR \\times t
$$

**Worked example.** 15:00, 38 °C. A green line of cottonwoods 3 km down-canyon: you judge a 60 % chance of reachable water, and you could fill 6 L. The round trip takes 2.5 h at 1.3 L/h in the heat.
$EV = 0.6 \\times 6 - 1.3 \\times 2.5 = 3.6 - 3.25 = +0.35$ L — barely positive, before counting the risk of a turned ankle.
Go at **18:00** instead (sweat 0.6 L/h): $3.6 - 1.5 = +2.1$ L — as long as you have enough daylight to get there and back (Stage 1: daylight budgeting).

### The freshwater lens (Ghyben–Herzberg)

Seawater is about 2.5 % denser than fresh water. A floating lens therefore extends about **40 times deeper below sea level than its top stands above it**:

$$
z \\approx 40 \\, h
$$

where $h$ is the height of the fresh water table above sea level and $z$ the depth of fresh water below sea level. If the water table behind a dune is 0.25 m above sea level, the fresh lens reaches ~10 m below sea level — but it is thin at the edges and **mixes if you pump or dig too hard**, drawing up salt. Collect slowly from the top of a shallow hole.

### Why springs appear on hillsides

Water soaking downward moves easily through sandstone, gravel or fractured rock and slowly through clay or shale. At the contact it spreads sideways and **daylights where the contact meets the slope** — a line of seeps you can often trace across a cliff face as a band of vegetation or dark staining.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert (Sonoran, Namib, Arabian, Australian interior).** Look for tinajas in shaded rock, green lines in washes, and the outer bends of dry streambeds; dig at dusk, not at noon. Distant palms or tamarisk signal a spring or shallow water table. Animal trails converge on water at dawn and dusk.

**Coastal.** Rain is the best source; next, dig behind the first dune for the freshwater lens. Estuaries and lagoons are brackish — taste a drop before committing and stop if salty. Never drink seawater.

**Arctic and subarctic.** Water is everywhere as snow and ice, but melting costs fuel (lesson 3). Look for **open water** — lake outlets, fast streams, springs that stay unfrozen — to save fuel. On the sea, old multiyear sea ice (rounded, bluish) has lost much of its salt; young grey sea ice is salty. Icebergs are fresh but dangerous to approach.

**Tropical forest.** Water is abundant but mostly contaminated: rivers carry village sewage and silt; the frequent afternoon rains are often cleaner (collect them). Bamboo segments and some vines hold water, but identifying safe species needs local expertise.

**Urban emergency.** Before looking outside: the **water heater tank** (drain from the bottom valve after shutting off power/gas and the inlet), the **toilet cistern** (the tank, not the bowl, and not if it has chemical cleaner), water left in pipes (open the highest tap to let air in, drain from the lowest), ice cubes, and liquid in canned fruit and vegetables. Avoid waterbeds, radiators and anything touched by **floodwater**. Swimming-pool water is for flushing and washing, not drinking.

**Temperate forest and mountains.** Streams are common — the question is contamination (lesson 4): prefer small side streams draining uninhabited slopes above trails, huts, pastures and roads.`,
    },
  ],
  mistakes: [
    'Myth: "Cut open a barrel cactus and drink the water." Most cactus pulp is bitter and many contain alkaloids or oxalic acid; it can cause vomiting and diarrhoea — more water loss, not less.',
    'Following raptors or predators to water — they get much of theirs from prey.',
    'Searching for water in the midday heat when the same search at dusk would cost half the sweat.',
    'Digging deeper and deeper in a dry spot instead of moving to a lower, greener one.',
    'Trusting an old map symbol or trip report without margin — springs and tanks dry up.',
    'Pumping or digging hard into a dune lens and drawing up seawater.',
    'Assuming green, lush places mean clean water; they mean water, which you must still treat.',
    'Scrambling up exposed rock to reach a pothole — a fall costs more than any water.',
  ],
  exercises: [
    {
      id: 's4-l2-e1',
      title: 'Water sources on a map',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['A topographic map (paper or online) of a dry or mountainous area you might visit'],
      steps: [
        'Mark every water symbol along a planned route: springs, wells, tanks, perennial and intermittent streams.',
        'Rate each source for reliability (season, recent reports, catchment size) and likely contamination (what lies upstream?).',
        'Mark three terrain features where you would search if a source were dry: outer bends, cliff bases, confluences, green corridors on satellite imagery.',
        'Write the carry plan: litres needed to reach the next *reliable* source with a 25 % margin.',
      ],
      success: ['A route with rated sources and backup search areas.', 'A carry plan that does not depend on an unreliable source.'],
      skill: 'water-finding',
    },
    {
      id: 's4-l2-e2',
      title: 'Clue walk: read a landscape for water',
      level: 3,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Notebook or phone for photos', 'Water to drink (do not drink what you find)'],
      safetyNote: 'Stay on legal paths and public land; do not climb to reach potholes or cliff seeps; do not dig in protected areas; do not drink untreated water.',
      steps: [
        'On a walk in a park, valley or coast, note every clue: vegetation lines, damp or dark rock, low points, trails, bird and insect activity.',
        'Sketch a cross-section of one valley showing where you think the water table is and why.',
        'At dawn or dusk, watch bird flight lines for 15 minutes and note their direction and height.',
        'Check a map afterwards: were your predictions right?',
      ],
      success: ['A sketched section with at least four clues explained.', 'At least one prediction checked against a map or a real water feature.'],
      skill: 'water-finding',
    },
  ],
  simulations: ['water-advanced'],
  quiz: [
    {
      id: 's4-l2-q1',
      kind: 'single',
      prompt: 'Crossing dry country, which plants most reliably indicate water within digging depth?',
      choices: [
        { id: 'a', text: 'Scattered cacti', why: 'Cacti store their own water and grow far from groundwater.' },
        { id: 'b', text: 'A winding line of willows, cottonwoods or reeds', why: 'Correct — phreatophytes need roots in groundwater; a line marks a watercourse.' },
        { id: 'c', text: 'Deep-rooted creosote or acacia scrub', why: 'Their roots may reach tens of metres; they tell you little about shallow water.' },
        { id: 'd', text: 'Lichens on rocks', why: 'Lichens survive on dew and fog.' },
      ],
      answer: 'b',
      concepts: ['water-finding'],
      explanation: 'Look for phreatophytes and lines of brighter green; they betray shallow groundwater from a distance.',
    },
    {
      id: 's4-l2-q2',
      kind: 'multi',
      prompt: 'Which animal clues are **good** indicators of nearby water?',
      choices: [
        { id: 'a', text: 'Pigeons and doves flying low and direct at dusk', why: 'Yes — seed-eaters must drink daily and fly low toward water.' },
        { id: 'b', text: 'Game trails converging downhill', why: 'Yes — they form a "V" pointing toward water.' },
        { id: 'c', text: 'A hawk circling overhead', why: 'No — raptors get much water from prey.' },
        { id: 'd', text: 'Mosquitoes and calling frogs', why: 'Yes — both need standing water to breed.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['water-finding'],
      explanation: 'Prefer animals that must drink daily (grazers, seed-eating birds) and those that breed in water.',
    },
    {
      id: 's4-l2-q3',
      kind: 'numeric',
      prompt: 'Behind a dune, the water table stands 0.3 m above sea level. Using the Ghyben–Herzberg ratio, roughly how many **metres below sea level** does fresh water extend?',
      unit: 'm',
      answer: 12,
      tolerance: 0.5,
      concepts: ['groundwater'],
      explanation: 'z ≈ 40 × h = 40 × 0.3 = **12 m**. The lens is thin at its edges and mixes if you draw hard — collect slowly from the top.',
    },
    {
      id: 's4-l2-q4',
      kind: 'truefalse',
      prompt: 'Cutting open a barrel cactus is a reliable way to get drinking water in the desert.',
      answer: false,
      concepts: ['water-finding'],
      explanation: '**Myth.** Pulp is bitter, often irritating and may cause vomiting or diarrhoea. It costs effort and water.',
    },
    {
      id: 's4-l2-q5',
      kind: 'single',
      prompt: '15:00, 39 °C. A promising green line is 2 km away (60 % chance of 5 L). The round trip takes 2 h. Your sweat rate is 1.4 L/h now and 0.6 L/h after 18:00. Sunset 19:40. What is the best plan?',
      choices: [
        { id: 'a', text: 'Go now: the sooner you find water, the better.', why: 'EV now = 0.6 × 5 − 1.4 × 2 = +0.2 L — nearly worthless, with heat-illness risk.' },
        { id: 'b', text: 'Rest in shade, leave at ~17:30–18:00 and return by last light.', why: 'Best: EV ≈ 3 − 1.2 = +1.8 L and still within daylight.' },
        { id: 'c', text: 'Go after dark when it is coolest.', why: 'Night travel over unknown ground to an uncertain source adds injury and navigation risk; you also cannot see the clues.' },
        { id: 'd', text: 'Never search — stay put and ration.', why: 'Rationing does not reduce need. If rescue is uncertain, a well-timed search is worth it.' },
      ],
      answer: 'b',
      concepts: ['water-finding', 'water-budget', 'daylight'],
      explanation: 'Expected value = probability × volume − sweat cost. Timing changes the cost; daylight limits the window.',
    },
    {
      id: 's4-l2-q6',
      kind: 'multi',
      prompt: 'After an earthquake cuts mains water, which household sources are **reasonable** to use for drinking (with treatment where in doubt)?',
      choices: [
        { id: 'a', text: 'The water heater tank', why: 'Yes — typically 150–300 L of mains water stored before the event; turn off power/gas first.' },
        { id: 'b', text: 'The toilet cistern (tank), if no chemical cleaner is used', why: 'Yes — clean mains water; treat it to be safe.' },
        { id: 'c', text: 'The radiator of a car or a hot-water heating system', why: 'No — antifreeze and corrosion inhibitors are toxic.' },
        { id: 'd', text: 'Floodwater in the street', why: 'No — sewage and chemicals; no field method makes it safe.' },
        { id: 'e', text: 'Water left in the pipes, drained from the lowest tap', why: 'Yes — open the highest tap to let air in.' },
      ],
      answer: ['a', 'b', 'e'],
      concepts: ['water-finding', 'chemical-contamination'],
      explanation: 'The house is full of stored clean water. Chemical contamination (radiators, floodwater) cannot be treated away.',
    },
  ],
  scenario: {
    id: 's4-l2-sc',
    setup: 'Day 2 of an unplanned stay in semi-arid canyon country. 16:00, 34 °C, sunset 19:10. You have 1 L left. Options: (1) a bright green band of cottonwoods 2.5 km down the main canyon floor; (2) a shaded rock pothole on a ledge 60 m up a steep slab, reached by an unroped scramble; (3) dig at your feet in the dry wash (straight section, dry sand).',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Scramble up to the pothole: it is closest.', why: 'An unroped fall is irreversible and far worse than thirst. Never climb for water.' },
      { id: 'b', text: 'Dig here in the dry straight section until you find water.', why: 'Low odds: no bend, no green, no damp sand. High sweat cost.' },
      { id: 'c', text: 'Rest in shade until ~17:00, then walk down-canyon to the cottonwoods, check the outer bends on the way, and plan to camp there before dark.', why: 'Best: highest probability source, cooler travel, within daylight, reversible if dry.' },
      { id: 'd', text: 'Wait for rain.', why: 'No forecast; waiting while drinking the last litre just delays the decision.' },
    ],
    best: 'c',
    debrief: 'Stack the clues (green line + canyon floor + outer bends), time the move for lower sweat, and fit it inside the daylight budget with a margin (Stage 1). Irreversible risks — unroped scrambles — are excluded no matter how close the water is. When you reach the trees, look for a seep or dig at the lowest outer bend, and treat what you find.',
    concepts: ['water-finding', 'daylight', 'reversibility'],
  },
  summary: [
    'Maps and local knowledge first; carry enough to reach the next **reliable** source.',
    'Water collects low: valley floors, outer bends of washes, cliff bases, shaded potholes.',
    'Trust phreatophytes (willow, cottonwood, reeds, palms) and daily drinkers (grazers, seed-eating birds); ignore raptors and cacti.',
    'Groundwater: water table, springs at permeable/impermeable contacts, seep holes by rivers, freshwater lens behind dunes (z ≈ 40h).',
    'Search value = probability × volume − sweat cost; search in cool hours within your daylight budget.',
  ],
  furtherReading: ['usgs-groundwater', 'army-atp-3-50-21'],
  references: ['usgs-groundwater', 'army-atp-3-50-21', 'afh-10-644', 'cdc-emergency-water', 'ready-kit'],
}
