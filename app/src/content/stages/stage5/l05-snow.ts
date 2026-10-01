import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's5-l5',
  stage: 5,
  order: 5,
  title: 'Snow shelters',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s5-l1', 's8-l2'],
  concepts: ['snow-insulation', 'snow-shelter', 'carbon-monoxide', 'ground-insulation'],
  objectives: [
    'Explain why snow insulates, how its conductivity depends on density, and why snow shelters sit near **0 °C** inside.',
    'Compare the **snow trench, quinzhee and snow cave** by time, snow needed, warmth and risk.',
    'Describe the design features that control **collapse, cold-air sinking, dripping and ventilation**.',
    'Recognise **carbon monoxide** and stale-air risks and the rules that prevent them.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Learn to build these on a course',
      md: 'Snow shelters kill people every winter through **collapse, suffocation, carbon monoxide and avalanches**. This lesson teaches the principles and lets you experiment in the simulator. Building a snow shelter to **sleep in** should be learned on a winter skills or avalanche course, with an instructor, in safe terrain.',
    },
    {
      type: 'md',
      md: `### Snow as insulation

Snow is ice crystals and **mostly air**: fresh snow is roughly 5–15 % ice by volume, settled snow roughly 25–45 %. The trapped air makes it a good insulator; the ice skeleton makes it a building material; and because the wind cannot pass through a thick wall, a snow shelter removes convection almost completely.

Three facts shape every snow shelter:

1. **Conductivity rises with density.** Light, fluffy snow insulates best but is weak; dense, wind-packed snow is strong but conducts more heat. Settled snow is a good compromise.
2. **The inside cannot get much above 0 °C.** Warmer air melts the walls; the melt refreezes as an ice glaze that is stronger but less porous. A good snow shelter holds its air near 0 °C or a few degrees below, while it is −20 °C or colder outside.
3. **The ground under deep snow stays near 0 °C.** Snow on top of the earth insulates it; you are digging into a relatively warm layer.

### Three shelters compared`,
    },
    {
      type: 'table',
      head: ['', 'Snow trench', 'Quinzhee', 'Snow cave'],
      rows: [
        ['What it is', 'Body-sized trench in firm snow, roofed with a tarp, skis/poles and blocks', 'A pile of snow left to sinter, then hollowed out to an even wall', 'Dug horizontally into a deep drift or bank'],
        ['Snow needed', '≈ 1 m of firm snow', 'Any snow you can pile — even shallow cover', 'A deep, stable drift (often on lee slopes)'],
        ['Time (trained)', 'About an hour', 'Commonly 2–3 hours plus waiting', '2–3 hours'],
        ['Warmth', 'Good; roof is the weak point', 'Very good', 'Very good'],
        ['Main risks', 'Roof sag under new snow; wet from digging', 'Collapse (thin/unsintered walls), CO, sweat', '**Avalanche terrain**, collapse, CO'],
      ],
      caption: 'Times vary enormously with snow, tools and skill. Plan with generous margins.',
    },
    { type: 'diagram', id: 'quinzhee-section', caption: 'Quinzhee: even wall, sleeping bench above the entrance, cold sink, vent.' },
    {
      type: 'md',
      md: `### Design features (all snow shelters)

- **Cold sink.** Make the entrance lower than the sleeping platform. Cold, dense air drains out through the door and warm air stays up with you — the same physics as the valley cold pool in Lesson 2.
- **Even walls, smooth domed ceiling.** A dome carries load evenly; a smooth, curved ceiling lets meltwater run down the walls instead of dripping on you. In a quinzhee, push 30 cm sticks into the pile from outside before hollowing; stop digging when you meet one.
- **Sintering.** Piling snow mixes grains of different temperatures and sizes; given time they bond ("sinter") and the pile hardens. Wait at least one to two hours before hollowing — longer in very cold snow. Skipping it is the classic cause of quinzhee collapse.
- **Ventilation.** Poke a vent hole through the roof (a ski pole or stick works) and keep it and the entrance clear through the night; drifting snow and ice glaze can seal both.
- **Ground insulation.** You still need a pad and boughs or packs under you: lying on snow at 0 °C conducts heat just like cold ground.
- **Protocols.** Never build or sleep in a snow shelter alone. One person digs, one watches from outside. Keep a shovel **inside**. Mark the shelter from outside (skis, poles) so rescuers can find it.

### The snow trench

The quickest option and often the best in a real emergency: dig a slot about body length, shoulder width and a metre deep in firm snow, lay skis, poles or branches across and a tarp or snow blocks on top, shaped to shed load. Insulate the floor. A lower entrance at one end gives a cold sink.`,
    },
    { type: 'diagram', id: 'snow-trench', caption: 'Snow trench: fast, low, roofed and insulated underneath.' },
    {
      type: 'md',
      md: `### Carbon monoxide and stale air

Any flame — stove, candle, fuel tablet — produces carbon monoxide, especially when burning with too little oxygen or with a cold pot over it. CO is **colourless and odourless**. Early symptoms are easy to dismiss as altitude, tiredness or cold: **headache, dizziness, weakness, nausea, confusion**; then drowsiness, collapse and death. In a small, sealed snow shelter it can build up quickly, and wet walls glazed with ice are far less porous than fresh snow.

Rules:

- **No flames inside a snow shelter** as a heater. Cook outside or in a well-ventilated entrance, never with the door blocked.
- **Keep the vent and door open** all night; check them if you wake.
- **Anyone with a headache, nausea or drowsiness → everyone out into fresh air**, and treat it as CO until proven otherwise.
- A burning candle is **not** an oxygen or CO detector — it can keep burning in air that is dangerous for you.

### Staying dry while digging

Digging is hard work, and sweat soaked into your insulation will cost you heat all night (Stage 1: evaporating 150 ml removes ~360 kJ). Strip down to a base layer and shell before you start, dig slowly, rotate with partners, and put dry layers back on when you stop.`,
    },
    { type: 'sim', id: 'shelter-builder', caption: 'Switch to Subarctic snow. Compare a tarp A-frame, a trench and a quinzhee — then try the quinzhee with no vent and a stove, and without waiting for sintering.' },
    {
      type: 'callout',
      tone: 'law',
      md: 'Snow shelters are generally allowed where camping is, but some ski areas, parks and avalanche-controlled terrain restrict digging or overnight stays. Always collapse snow shelters before you leave: an abandoned quinzhee or cave can collapse on a skier, snowmobiler or child later.',
    },
  ],
  whyItMatters: 'In deep cold, a snow shelter can be the difference between a survivable night and a fatal one: it can keep the air around you near 0 °C when it is −25 °C outside, with no fuel. But the same features that make it warm — enclosed, heavy, sealed — make it dangerous when built badly, sited in avalanche terrain or heated with a flame. Understanding the physics is what makes the rules make sense.',
  science: [
    {
      type: 'md',
      md: `### Snow conductivity

Field measurements of seasonal snow (Sturm et al., 1997) fit an empirical curve: for density $\\rho$ between about 0.16 and 0.6 g/cm³,

$$
k_{\\text{eff}} \\approx 0.138 - 1.01\\,\\rho + 3.233\\,\\rho^2\\quad \\text{W/(m·K)}
$$

In words: conductivity rises steeply with density. For settled snow at $\\rho = 0.3$ g/cm³: $k \\approx 0.138 - 0.303 + 0.291 \\approx 0.13$ W/(m·K). For comparison: still air ≈ 0.025, dry leaves ≈ 0.05, solid ice ≈ 2.2.

### How warm can a quinzhee get?

Take a one-person quinzhee with 6 m² of wall, 30 cm thick, $k \\approx 0.1$:

$$
UA_{\\text{walls}} = \\frac{kA}{d} = \\frac{0.1 \\times 6}{0.3} = 2\\ \\text{W/K}
$$

Add about 1 W/K for the vent and door. If about 60 W of your heat reaches the air:

$$
\\Delta T \\approx \\frac{60}{3} = 20\\ ^\\circ\\text{C}
$$

At −25 °C outside that predicts about −5 °C inside. Two people roughly double the heat input — but the air cannot go much above 0 °C without melting the ceiling, which is why well-used shelters develop an ice glaze.

### Why the entrance goes low

Air at −20 °C is about 8 % denser than air at 0 °C ($273/253 \\approx 1.08$). Given an exit below the living space, the coldest air drains out and warmer air is trapped above the sill, exactly like a cold pool in a valley.

### Melting costs

Melting snow absorbs about 334 kJ per kg (latent heat of fusion). A shelter warmed by a stove turns that heat into drips and glaze rather than warm air; and eating snow to hydrate costs your body the same 334 kJ per kg, plus the energy to warm the water to body temperature.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest, −30 °C, snowmobile breakdown.** A quinzhee at the forest edge, started early in the afternoon, gives a far warmer night than a tarp. The group digs in shifts to avoid sweating and keeps the stove outside.

**Alpine ski tour, storm, avalanche danger considerable.** The obvious deep drift is on a loaded lee slope under a cornice — the worst place. The group digs a trench on a low-angle bench away from any slope above, roofed with skis and a tarp.

**Arctic tundra, wind-packed snow.** Hard, wind-packed snow is ideal for cutting blocks (igloo or block-roofed trench) but poor for piling a quinzhee. Wind is the main enemy; get below the surface.

**Temperate mountains, wet spring snow near 0 °C.** Heavy, wet snow sinters quickly but is weak when it warms; walls sag and drip. Rain on a snow shelter is a collapse warning. A tarp shelter on an insulated platform may be the better choice.

**Vehicle stranded in snow.** Staying with the car is usually right; the snow-shelter lesson here is **CO**: keep the exhaust pipe clear of snow if you run the engine for heat, and run it only in short periods with a window cracked.`,
    },
  ],
  mistakes: [
    'Hollowing a quinzhee straight after piling it — unsintered snow collapses.',
    'Walls of uneven thickness, thin spots in the roof, a flat ceiling that drips.',
    'Entrance at or above the sleeping level, so the warm air escapes and cold air stays.',
    'No vent, or a vent that drifts shut; blocking the door completely.',
    'A stove, candle or fuel tablet inside for warmth.',
    'Digging in avalanche terrain because the snow is deep there.',
    'Digging hard in full insulation and soaking it with sweat.',
    'Building or sleeping in a snow shelter alone, or without a shovel inside.',
    'Myth: "a candle flame shows you when the air is bad." It can keep burning in air that is already dangerous; CO has no warning smell.',
  ],
  exercises: [
    {
      id: 's5-l5-e1',
      title: 'Snowpack temperature profile',
      level: 3,
      safety: 'outdoor',
      minutes: 45,
      materials: ['A probe thermometer', 'A small shovel or trowel', 'Notebook'],
      steps: [
        'On a cold day, in flat, low-angle terrain near a road or house (no slopes above), dig a small pit to the ground or as deep as you safely can.',
        'Measure the air temperature, then the snow temperature at the surface, 10, 20, 30 cm and every 20 cm down to the bottom.',
        'Note hardness and grain size at each depth.',
        'Plot temperature vs depth. How warm is the bottom compared with the air? Fill the pit in when finished.',
      ],
      success: ['You measured a clear temperature gradient.', 'You can explain why the base of deep snow stays near 0 °C and why snow walls insulate.'],
      safetyNote: 'Flat terrain only; never dig pits on or below slopes in avalanche country without avalanche training.',
    },
    {
      id: 's5-l5-e2',
      title: 'Snow shelter building on a winter course',
      level: 4,
      safety: 'formal-training',
      minutes: 480,
      materials: ['Winter clothing system', 'Avalanche shovel', 'Course-provided equipment'],
      steps: [
        'Enrol on a winter skills, winter camping or avalanche course that includes snow shelters.',
        'With the instructor, build a trench and (if taught) a quinzhee or cave, practising the cold sink, wall thickness gauges, vents and the buddy-watch protocol.',
        'Record build time, how wet you got and the inside and outside temperatures.',
      ],
      success: ['You built a shelter under supervision and can list the safety checks from memory.'],
      skill: 'snow-shelter',
    },
    {
      id: 's5-l5-e3',
      title: 'Simulated snow night',
      level: 2,
      safety: 'virtual-only',
      minutes: 20,
      steps: [
        'In the Shelter Builder, choose Subarctic snow.',
        'Find a combination that scores 75+ without using the flame option.',
        'Then add the stove with no vent and read the hazard panel. Write down the three CO rules from this lesson.',
      ],
      success: ['Score of 75+ in the snow environment.', 'You can explain why the flame option failed.'],
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l5-q2',
      kind: 'single',
      prompt: 'Two hours into the night in a quinzhee, your partner has a headache and feels sick and sleepy. A candle is burning inside. What do you do **first**?',
      choices: [
        { id: 'a', text: 'Get everyone out into fresh air immediately', why: 'Correct — treat it as carbon monoxide until proven otherwise; fresh air comes first.' },
        { id: 'b', text: 'Put out the candle and stay inside to keep warm', why: 'Removing the source is right, but it comes after getting everyone into fresh air.' },
        { id: 'c', text: 'Let them sleep it off; headaches are common in the cold', why: 'Drowsiness is a late CO sign; sleep can be fatal.' },
        { id: 'd', text: 'Watch the candle — while it burns, the air is fine', why: 'A flame is not a CO detector.' },
      ],
      answer: 'a',
      concepts: ['carbon-monoxide'],
      explanation: 'CO symptoms are nonspecific and easy to explain away. Fresh air first, then remove the source and check the vent and entrance before anyone goes back in; seek medical help if symptoms persist.',
    },
    {
      id: 's5-l5-q6',
      kind: 'single',
      prompt: 'You have 90 minutes of light, firm snow about 1 m deep and a tarp. Which snow shelter fits?',
      choices: [
        { id: 'a', text: 'A quinzhee', why: 'Piling, sintering and hollowing commonly take 2–3 hours or more.' },
        { id: 'b', text: 'A snow trench roofed with the tarp', why: 'Correct — about an hour of steady work in firm snow.' },
        { id: 'c', text: 'An igloo', why: 'Needs block-cutting skill and suitable snow; unrealistic for most people in 90 minutes.' },
        { id: 'd', text: 'A snow cave into the nearest steep drift', why: 'Time aside, steep drifts are often avalanche terrain.' },
      ],
      answer: 'b',
      concepts: ['snow-shelter', 'effort-budget', 'daylight'],
      explanation: 'Match the shelter to the time available: a finished trench beats an unfinished quinzhee.',
    },
    {
      id: 's5-l5-q3',
      kind: 'single',
      prompt: 'Why should the entrance of a snow shelter be **lower** than the sleeping platform?',
      choices: [
        { id: 'a', text: 'So blowing snow cannot drift into the chamber', why: 'It may help a little, but that is not the main reason.' },
        { id: 'b', text: 'Cold, dense air drains out and warm air stays above', why: 'Correct — the cold-sink principle.' },
        { id: 'c', text: 'Because a low entrance is quicker to dig out', why: 'Often it is harder.' },
        { id: 'd', text: 'To keep carbon monoxide from leaving the shelter', why: 'You want CO to escape — that is what vents are for.' },
      ],
      answer: 'b',
      concepts: ['snow-shelter', 'cold-air-pooling'],
      explanation: 'The same density difference that fills valley hollows with cold air drains a snow shelter through a low door, trapping warm air above the platform.',
    },
    {
      id: 's5-l5-q5',
      kind: 'single',
      prompt: 'Which statement about digging a snow cave into a wind-drifted lee slope is correct?',
      choices: [
        { id: 'a', text: 'It is risky: the wind loading that deepens the drift builds slab avalanches.', why: 'Correct — deep, firm snow on a lee slope is a sign of wind loading.' },
        { id: 'b', text: 'It is ideal: the snow is deep and firm, so the cave roof will hold well.', why: 'The snow is deep and firm because wind loaded the slope — the same process that forms slab avalanches.' },
        { id: 'c', text: 'It is safe as long as you dig in near the bottom of the slope.', why: 'The bottom of a slope is its runout zone — where an avalanche ends up.' },
        { id: 'd', text: 'It is safe once the snow has been left to sinter for an hour or two.', why: 'Sintering firms the snow you dig, not the stability of the slope above.' },
      ],
      answer: 'a',
      concepts: ['site-hazards', 'snow-shelter'],
      explanation: 'The snow is deep and firm because wind loaded the slope — the same process that forms slab avalanches. Dig in low-angle terrain with no slope above.',
    },
    {
      id: 's5-l5-q4',
      kind: 'single',
      prompt: 'Which is the right order of steps for building a quinzhee?',
      choices: [
        { id: 'a', text: 'Choose safe site → pile and mix snow → push in depth sticks → wait 1–2 h → hollow out', why: 'Correct — the sticks go in before the wait so they are ready as gauges; hollow only after sintering.' },
        { id: 'b', text: 'Choose safe site → pile and mix snow → wait 1–2 h → push in depth sticks → hollow out', why: 'Works, but wastes the waiting time; the sticks go in before the wait so they are ready as gauges.' },
        { id: 'c', text: 'Choose safe site → pile and mix snow → push in depth sticks → hollow out → wait 1–2 h', why: 'Hollowing before the snow sinters risks collapsing the dome.' },
        { id: 'd', text: 'Choose safe site → push in depth sticks → pile and mix snow → wait 1–2 h → hollow out', why: 'The sticks go into the finished pile, so their tips mark 30 cm of wall.' },
      ],
      answer: 'a',
      concepts: ['snow-shelter'],
      explanation: 'Site first (low-angle, no slope above); pile and mix; push in 30 cm sticks before the wait so they are ready as gauges; hollow from a low entrance only after sintering, then poke a vent.',
    },
    {
      id: 's5-l5-q1',
      kind: 'single',
      prompt: 'A snow shelter has 8 m² of wall, 40 cm thick, with $k = 0.12$ W/(m·K). What is the wall conductance $UA = kA/d$?',
      choices: [
        { id: 'a', text: '2.4 W/K', why: 'Correct — 0.12 × 8 ÷ 0.4.' },
        { id: 'b', text: '0.024 W/K', why: 'This uses the thickness as 40 (cm) instead of 0.4 m.' },
        { id: 'c', text: '26.7 W/K', why: 'This inverts the formula to $Ad/k$.' },
        { id: 'd', text: '0.38 W/K', why: 'This multiplies by the thickness instead of dividing.' },
      ],
      answer: 'a',
      concepts: ['snow-insulation', 'r-value'],
      explanation: '$0.12 \\times 8 / 0.4 = 2.4$ W/K. With ~60 W reaching the air and ~1 W/K for the vent, the inside sits roughly 18 °C above the outside air (but not much above 0 °C).',
    },
  ],
  scenario: {
    id: 's5-l5-sc',
    setup: 'Two of you are on a winter ski tour. At 13:30 a binding breaks beyond repair 14 km from the car; darkness at 16:30; forecast −22 °C overnight, light wind. You have sent a message by satellite messenger; rescue will come at first light. You have a shovel each, a tarp, two foam pads, a stove and fuel, bivy bags and warm clothing. Nearby: a low-angle bench at a forest edge with 1.2 m of settled snow, and a steep, corniced gully full of deep drifted snow 200 m away.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Dig a snow cave into the deep drift in the gully — the snow there is fastest to dig.', why: 'The drift is deep because the gully is wind-loaded under a cornice: avalanche terrain.' },
      { id: 'b', text: 'Pile a quinzhee on the bench now, dig in shifts in base layers; vent it, cook outside.', why: 'Best: safe terrain, enough time if you start now, warmest option, and the CO and sweat risks are managed. Hollow it with a low entrance after it sinters; boughs and pads underneath.' },
      { id: 'c', text: 'Pitch the tarp, then run the stove inside the bivy bags to stay warm all night.', why: 'A flame in an enclosed space is a CO risk, and the fuel will not last; a tarp at −22 °C is a very cold night.' },
      { id: 'd', text: 'Ski out on one ski to reach the car tonight rather than spend a night at −22 °C.', why: '14 km on one ski in the dark at −22 °C with help already coming — exhaustion, sweat and frostbite. Stay put.' },
    ],
    best: 'b',
    debrief: 'Stay-or-move: help is coming and moving is dangerous, so stay. Site: avoid the wind-loaded gully. Design: with three hours of light and two shovels, a quinzhee is realistic if you start immediately — a trench is the fallback if progress is slow. Manage the hidden costs: sweat while digging and CO from the stove.',
    concepts: ['snow-shelter', 'carbon-monoxide', 'site-hazards', 'stay-or-move', 'heat-balance'],
  },
  summary: [
    'Snow is mostly air: a wind-proof insulator whose conductivity rises with density (settled snow ≈ 0.1–0.15 W/(m·K)).',
    'Snow shelters sit near 0 °C inside at best; walls of ~30 cm, a small volume and a vent make that possible.',
    'Trench ≈ 1 h; quinzhee and cave commonly 2–3 h+. Match the shelter to the light you have.',
    'Low entrance (cold sink), even domed walls, sintering time, vent, shovel inside, never alone.',
    'No flames inside. Headache, nausea or drowsiness = everyone out: think carbon monoxide.',
  ],
  furtherReading: ['sturm-snow-1997', 'avalanche-canada', 'usariem-cold', 'freedom-hills'],
  references: ['sturm-snow-1997', 'cdc-co', 'avalanche-org', 'avalanche-canada', 'usariem-cold', 'freedom-hills', 'army-atp-3-50-21', 'ready-winter', 'kochanski-bushcraft'],
}
