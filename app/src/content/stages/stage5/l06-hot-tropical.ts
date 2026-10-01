import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's5-l6',
  stage: 5,
  order: 6,
  title: 'Hot-climate and tropical shelters',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s5-l1'],
  concepts: ['hot-shelter', 'tropical-shelter', 'insect-protection', 'dehydration'],
  objectives: [
    'Explain how a hot-climate shelter reverses the heat balance: blocking **gains** from sun, hot ground and a hot roof, and helping the only remaining loss — **evaporation**.',
    'Design **double-roof, raised and dug-down** shade and decide **when** to build it.',
    'Design a **tropical** shelter for downpours, flooding, wet ground and insects: steep roof, raised bed, net.',
    'Quantify how shade and timing save **water**, using the energy cost of sweating.',
  ],
  explanation: [
    {
      type: 'md',
      md: `In the cold, a shelter keeps heat **in**. In a hot desert it must keep heat **out**, and in the humid tropics it must keep **water, mud and insects** out while letting air through. Same method, reversed physics.

### Desert: the reversed heat balance

When the air is hotter than your skin (about 35 °C), convection and radiation from hot surroundings **add** heat instead of removing it. The sun adds more; hot ground adds more by conduction; and a single sheet of fabric in the sun becomes a hot radiator over your head. The only way left to lose heat is **sweat evaporating** — which costs water you may not be able to replace.

So a desert shelter controls, in order:

1. **Direct sun** — shade, obviously; but a single thin sheet only moves the problem, because it heats up and radiates down on you.
2. **The hot roof** — a **second layer** with a 20–30 cm air gap: the top sheet takes the sun, the wind carries its heat away, and the lower sheet stays much closer to air temperature. A reflective or light-coloured top layer helps.
3. **Hot ground** — surface sand and rock in full sun can exceed 60 °C; a few tens of centimetres down it is far cooler. Rest off the surface or scrape down into cooler sand, on a layer of clothing or a pad.
4. **Air flow** — pitch high enough (40–60 cm clearance or open sides) for any breeze to pass under the roof and help sweat evaporate.`,
    },
    { type: 'diagram', id: 'double-roof', caption: 'Double roof, air gap, air flow underneath and a scrape down to cooler sand.' },
    {
      type: 'md',
      md: `### Timing beats technique

Building costs sweat. Digging in midday heat can cost a litre an hour or more — possibly more than the shelter will save you that day. Survival doctrine for hot deserts is blunt: **rest in the shade in the heat of the day; work, travel and build in the cool of early morning, evening or night; ration sweat, not water.** If you are caught at midday, take the quickest shade available (a rock overhang, a single sheet, the shaded side of a vehicle) and improve it later.

- **Vehicles**: stay with them (Stage 17) — they are a big target for searchers. But the interior of a closed car in the sun becomes far hotter than the outside air; use the shade *beside* the car, or a sheet rigged from it, not the inside.
- **Night**: deserts often cool dramatically after dark under clear skies. Keep a layer and ground insulation for the night; many desert survivors report being dangerously cold.

### Tropics: water, ground, insects

In the humid tropics the air is rarely dangerously hot or cold, but everything is **wet**, the ground is **alive**, and rain falls in **downpours**:

- **Steep roof** (45° or more) with wide overhangs sheds heavy rain; thatch big leaves or fronds like roof shingles, **bottom row first**, each row overlapping the one below.
- **Raised bed** 45–60 cm off the ground (a pole platform or a hammock): away from run-off, waterlogged soil, ants, leeches and crawling visitors; air flows underneath and dries and cools you.
- **Site**: well above rivers — they can rise metres overnight after rain upstream — away from standing water (mosquito breeding) and with no dead limbs, palm fronds or coconuts overhead.
- **Insects**: a mosquito net tucked in all round is the single most effective protection while you sleep. Add EPA-registered repellents such as DEET or picaridin on skin, long sleeves and permethrin-treated clothing (CDC guidance). Mosquitoes carry malaria, dengue and other diseases; this is a health hazard, not just a nuisance.
- **Dry set**: keep one set of clothes dry, only for sleeping; put the wet set back on in the morning. A dry night prevents skin breakdown and chilling — tropical nights at 22 °C can feel cold when you are soaked.`,
    },
    { type: 'diagram', id: 'raised-platform', caption: 'Tropical shelter: steep roof, raised bed, net, run-off passing underneath, high above the river.' },
    { type: 'sim', id: 'shelter-builder', caption: 'Try the desert with a single sheet vs a double roof on the open flat, and with a hard-paced dug-down shelter. Then the rainforest: river bank vs the rise, ground vs platform, net vs no net.' },
    {
      type: 'callout',
      tone: 'law',
      md: 'Many tropical forests, deserts and their wildlife are protected: cutting poles, clearing vegetation, camping and even entry may need permits, and some areas are closed. In an emergency, survival comes first; for practice, use kit (tarp, net, hammock) in permitted places and leave no trace.',
    },
  ],
  whyItMatters: 'In hot deserts, people die of heat and dehydration while carrying water they rationed and sweat they did not — often after hard work or travel in the midday sun. In the tropics, the dangers are floods, disease-carrying insects, and the slow misery of being permanently wet. The right shelter at the right time of day saves litres of water and nights of sleep.',
  science: [
    {
      type: 'md',
      md: `### Sweat is the currency

Evaporating water absorbs about 2.4 MJ per litre (Stage 1). To remove heat at a rate of $P$ watts by sweating alone, you must evaporate:

$$
\\dot m = \\frac{P}{2.4\\times10^6\\ \\text{J/kg}}\\ \\text{kg/s} \\;\\Rightarrow\\; \\text{litres per hour} = \\frac{P \\times 3600}{2.4\\times10^6} \\approx \\frac{P}{667}
$$

**Worked example.** Good shade removes roughly 150 W of solar and radiant gain compared with lying in the open. That is $150/667 \\approx 0.22$ L/h of sweat — over a six-hour afternoon, about **1.3 L** of water saved. And sweat that drips off instead of evaporating removes no heat at all, which is why air flow matters so much in humid air.

### The hot roof

Radiant exchange between you and a surface is roughly $q \\approx h_r A (T_{surface} - T_{skin})$ with $h_r \\approx 5$ W/(m²·K). Take about 0.6 m² of you facing the roof:

- Single sheet in full sun at 55 °C, skin at 35 °C: $5 \\times 0.6 \\times 20 \\approx 60$ W **into** you.
- Lower sheet of a double roof at 42 °C: $5 \\times 0.6 \\times 7 \\approx 21$ W.

That 40 W difference is about 0.06 L/h of sweat — small per hour, but it adds up over a long afternoon, and it is the difference between shade that feels like shade and shade that feels like an oven.

### Humid air limits evaporation

Sweat evaporates only as fast as the air can take up water vapour, which depends on the difference in vapour pressure between wet skin and air. At 95 % relative humidity that difference is small; moving air renews the thin layer next to your skin and increases evaporation. **In humid heat, air flow is the design priority** — open sides, raised beds, roofs high enough to vent.

### Wet ground

Wet soil conducts heat roughly 20–40 times better than dry leaves (k ≈ 1–2 vs ≈ 0.05 W/(m·K)). Even at 25 °C, lying on it in wet clothes all night cools you; a raised bed replaces that contact with moving air.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Sonoran or Saharan desert, vehicle breakdown.** Stay with the vehicle. Rig the tarp from the roof rack to the ground on the shaded side, add a second sheet above it, and rest. Signal preparations (mirror, ground-to-air markers) are done in the early morning.

**Australian outback.** Shade under a tree is dappled; add a sheet above for the gaps. Ants and flies are constant; a head net helps. Nights can fall below 5 °C in winter.

**Arabian or Gobi desert at night.** Clear, dry skies: temperatures can fall by 20 °C or more after sunset. The shade shelter becomes a windbreak; put all spare clothing under and over you.

**Amazon or Congo rainforest.** Hammock or pole platform, tarp in a steep A-frame above it, net tucked in, a site on a rise above the river. Afternoon storms arrive daily in the wet season — pitch before 15:00.

**Mangrove or tropical coast.** Tides and storm surges: sleep well above the strand line; mosquitoes and sandflies are fierce at dusk; a net and raised bed again.

**Urban heatwave.** The same principles indoors: shade windows from the outside, move air, sleep low in the building and off the top floor, and check on others (Ready.gov extreme-heat guidance).`,
    },
  ],
  mistakes: [
    'Building or digging in the heat of the day and sweating out more water than the shelter saves.',
    'A single thin sheet low over your head in full sun — a radiant heater.',
    'Sealing the sides of desert shade, killing the breeze.',
    'Lying directly on hot sand by day, or cold sand by night.',
    'Sheltering inside a closed vehicle in the sun.',
    'Sleeping on the ground in the tropics, next to rivers, or under dead canopy.',
    'No mosquito net or repellent in malaria and dengue regions.',
    'Myth: "ration your water — sip only when desperate." Doctrine is to ration **sweat** (shade, rest, timing) and drink the water you need; dehydration impairs judgment long before it kills.',
  ],
  exercises: [
    {
      id: 's5-l6-e1',
      title: 'Shade lab: one sheet vs two',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Two old sheets or tarps', 'Two thermometers (or one, used in turn)', 'Cord, chairs or sticks', 'A sunny garden, yard or balcony'],
      steps: [
        'On a sunny day, rig one sheet 50 cm above the ground, and next to it a second setup with two sheets 25 cm apart.',
        'Place a thermometer in the shade under each at the height of a lying person, and one in the open (shaded from direct sun by a card).',
        'After 20 minutes, record the readings; also feel the underside of each sheet.',
        'If you can, measure the ground surface in sun, in each shade, and 10 cm down in the sun.',
      ],
      success: ['You measured a cooler underside and cooler air under the double roof.', 'You found the ground temperature difference between surface and 10 cm down.'],
      safetyNote: 'Do this in moderate heat; drink water and stay in the shade yourself.',
    },
    {
      id: 's5-l6-e2',
      title: 'Rig a mosquito net and dry set',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['A mosquito net', 'Cord', 'A bed, cot or hammock', 'A dry bag'],
      steps: [
        'Hang the net from a single cord or two points so it drapes without touching your skin.',
        'Tuck it in all round (under the mattress or pad) so there are no gaps when you move.',
        'Pack a sleeping-only set of clothes in a dry bag and practise changing into it inside the net by headlamp.',
      ],
      success: ['Net rigged with no gaps in under 10 minutes.', 'Dry set stays dry in its bag through a simulated day.'],
      skill: 'tarp-pitch',
    },
    {
      id: 's5-l6-e3',
      title: 'Desert and rainforest challenge',
      level: 2,
      safety: 'virtual-only',
      minutes: 25,
      steps: [
        'In the Shelter Builder, score 75+ in the hot desert while keeping water loss under 3 L.',
        'Score 75+ in the rainforest with insect risk under 20 %.',
        'Write one sentence for each explaining the decisive choice.',
      ],
      success: ['Both targets met.', 'Your explanation names shade/timing and site/raised bed/net.'],
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l6-q2',
      kind: 'single',
      prompt: 'Stranded at 11:00 in a desert, 40 °C and rising. When should you build your double-roof shade?',
      choices: [
        { id: 'a', text: 'Immediately and fast, before the day gets any hotter', why: 'Hard work at midday can cost over a litre of sweat per hour.' },
        { id: 'b', text: 'Use the quickest shade now; build properly in the cool', why: 'Correct — rest in the heat, work in the cooler evening or early morning.' },
        { id: 'c', text: 'After dark, when the temperature is at its lowest', why: 'You need shade tomorrow; evening and early morning are cool enough to work without wasting light.' },
        { id: 'd', text: 'Never; sit it out inside the car with the doors shut', why: 'A closed car in the sun gets far hotter than the air outside.' },
      ],
      answer: 'b',
      concepts: ['hot-shelter', 'effort-budget'],
      explanation: '"Ration sweat, not water": take the quickest shade now and build properly in the evening or early morning. The timing of work is as important as the design.',
    },
    {
      id: 's5-l6-q3',
      kind: 'single',
      prompt: 'Which of these is **NOT** a reason a **raised bed** is worth the effort in the tropics?',
      choices: [
        { id: 'a', text: 'Air flows underneath, drying and cooling you', why: 'A real benefit — in humid air, flow is precious.' },
        { id: 'b', text: 'Fewer ants, leeches and crawling visitors reach you', why: 'A real benefit — especially with a net tucked in.' },
        { id: 'c', text: 'It keeps you off wet ground that conducts heat away', why: 'A real benefit — wet soil conducts far better than air.' },
        { id: 'd', text: 'It protects you from a river flooding its banks', why: 'Correct — not a benefit: a platform 50 cm up is no defence against a river rising metres. Site selection does that.' },
      ],
      answer: 'd',
      concepts: ['tropical-shelter', 'drainage'],
      explanation: 'Raised beds solve ground problems — run-off, wet ground, crawling insects, no air flow — not site problems. Choose the rise first.',
    },
    {
      id: 's5-l6-q4',
      kind: 'single',
      prompt: 'Which shade setup keeps you coolest in the desert by day?',
      choices: [
        { id: 'a', text: 'Two raised sheets with an air gap, light or reflective on top', why: 'Correct — the lower sheet stays cooler, and height lets the breeze through.' },
        { id: 'b', text: 'A single dark tarp stretched 20 cm above your face', why: 'A single sheet in the sun gets very hot and, that close, radiates heat onto you and blocks the breeze.' },
        { id: 'c', text: 'A single dark tarp pitched low and closed on every side', why: 'Low and closed traps hot air and blocks the only loss left — evaporation in moving air.' },
        { id: 'd', text: 'One light sheet laid low over you to keep the sun off', why: 'Light colour helps, but a single low sheet still heats up and radiates onto you.' },
      ],
      answer: 'a',
      concepts: ['hot-shelter'],
      explanation: 'A single sheet in the sun gets very hot and, close to you, radiates heat onto you and blocks the breeze. Raise it, add a second layer with an air gap, and prefer a light or reflective top.',
    },
    {
      id: 's5-l6-q5',
      kind: 'single',
      prompt: 'Which single item most reduces night-time mosquito bites in a malaria region?',
      choices: [
        { id: 'a', text: 'A smoky fire kept going by the bed', why: 'Helps a little and only while it smokes; not reliable.' },
        { id: 'b', text: 'A mosquito net tucked in all round', why: 'Correct — a physical barrier all night while you sleep. Add repellent and treated clothing for the evening.' },
        { id: 'c', text: 'Sleeping next to standing water to be near a water source', why: 'That is where mosquitoes breed.' },
        { id: 'd', text: 'Eating plenty of garlic before bed', why: 'Myth: no reliable evidence it repels mosquitoes.' },
      ],
      answer: 'b',
      concepts: ['insect-protection'],
      explanation: 'Net for the night; EPA-registered repellent (DEET, picaridin), long sleeves and permethrin-treated clothing for the evening and day (CDC).',
    },
    {
      id: 's5-l6-q1',
      kind: 'single',
      prompt: 'Resting in good shade instead of the open cuts your heat gain by **200 W** for **5 hours**. Using 2.4 MJ per litre of evaporated sweat, how much sweat does that save?',
      choices: [
        { id: 'a', text: '1.5 L', why: 'Correct — 200 W × 18 000 s = 3.6 MJ; 3.6 ÷ 2.4 = 1.5 L.' },
        { id: 'b', text: '0.67 L', why: 'This inverts the ratio: 2.4 ÷ 3.6 instead of 3.6 ÷ 2.4.' },
        { id: 'c', text: '3.6 L', why: 'That is the energy in MJ — it forgets to divide by 2.4 MJ per litre.' },
        { id: 'd', text: '8.6 L', why: 'This multiplies 3.6 MJ by 2.4 instead of dividing.' },
      ],
      answer: 'a',
      concepts: ['hot-shelter', 'dehydration'],
      explanation: '200 W × 5 × 3600 s = 3.6 MJ; 3.6 / 2.4 = **1.5 L**. Shade is water.',
    },
    {
      id: 's5-l6-q6',
      kind: 'single',
      prompt: 'A sun-heated single sheet is at **55 °C**; your skin is at **35 °C**. With $h_r \\approx 5$ W/(m²·K) and **0.6 m²** of you facing it, estimate the radiant heat gain.',
      choices: [
        { id: 'a', text: '60 W', why: 'Correct — 5 × 0.6 × (55 − 35).' },
        { id: 'b', text: '100 W', why: 'This leaves out the 0.6 m² area.' },
        { id: 'c', text: '165 W', why: 'This uses the sheet temperature (55) instead of the difference (20 K).' },
        { id: 'd', text: '270 W', why: 'This adds the two temperatures instead of subtracting them.' },
      ],
      answer: 'a',
      concepts: ['hot-shelter', 'heat-loss'],
      explanation: '$5 \\times 0.6 \\times (55 - 35) = 60$ W. A double roof that keeps the lower sheet near 42 °C cuts it to about 21 W.',
    },
  ],
  scenario: {
    id: 's5-l6-sc',
    setup: 'Lowland rainforest, wet season, 16:30, dark at about 18:00. You are separated from your group and have decided to stay put where they last saw you (they will search at first light). You have a tarp, 15 m of cord, a machete, a mosquito net, a headlamp and 1 L of water. Heavy rain is likely this evening. Nearby: a sandy river bank (open, flat, the river already brown), a gentle rise 10 m above the river with young trees, and a flat area crossed by ant trails.',
    question: 'What is your shelter plan?',
    choices: [
      { id: 'a', text: 'On the sandy river bank: flat, open to search aircraft, and water is right there.', why: 'The river is already rising; bank and flood plain are the most dangerous places tonight, and mosquitoes swarm there at dusk.' },
      { id: 'b', text: 'On the rise: steep tarp A-frame first, then a platform or frond bed, net tucked in.', why: 'Best: safe from floods, roof before rain, off the ground as time allows, insects handled. Keep a dry set in the dry bag, and the tarp becomes a rainwater collector.' },
      { id: 'c', text: 'On the flat area: it is the easiest ground to clear and pitch on before the rain.', why: 'Ant trails and mounds mean a night of bites; move a few metres to the rise.' },
      { id: 'd', text: 'Keep walking to find the group before dark, and pitch with them if you can.', why: 'You decided to stay where they will look; moving at dusk in rainforest risks getting more lost and injured.' },
    ],
    best: 'b',
    debrief: 'Hazards first (river, ants), then the biggest threat of the evening (the downpour: roof first), then the ground (platform or bed), then insects (net), then comfort (dry set). The tarp doubles as a rain collector — water is a priority too (Stage 4).',
    concepts: ['tropical-shelter', 'insect-protection', 'site-hazards', 'stay-or-move'],
  },
  summary: [
    'Hot deserts: block gains — sun, hot roof, hot ground — and help the only loss left, evaporation.',
    'Double roof with an air gap, raised for air flow, cooler ground underneath; light or reflective top.',
    'Rest in the heat, build in the cool; ration sweat, not water. Deserts get cold at night.',
    'Tropics: steep roof, raised bed, net, above the river, no dead canopy overhead, a dry sleeping set.',
    'Every 667 W·h of heat you avoid is about a litre of sweat you keep.',
  ],
  furtherReading: ['tbmed-507', 'wms-heat-2024', 'cdc-mosquito'],
  references: ['army-atp-3-50-21', 'afh-10-644', 'tbmed-507', 'wms-heat-2024', 'nws-heat', 'ready-heat', 'cdc-mosquito', 'nws-flood', 'lnt-principles'],
}
