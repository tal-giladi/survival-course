import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's5-l1',
  stage: 5,
  order: 1,
  title: 'Shelter design principles',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l10'],
  concepts: ['heat-loss', 'r-value', 'shelter-volume', 'ground-insulation'],
  objectives: [
    'Design a shelter **path by path**: name the dominant heat-loss mechanism for a given night and the control that targets it.',
    'Calculate the heat flow through a bed with $Q = A\\,\\Delta T / R$, adding **R-values in series**.',
    'Explain why **small, enclosed volume** warms up and big open volume does not, using conductance $UA$.',
    'Rank design effort by **watts saved per minute of work**, and apply it under a time budget.',
  ],
  explanation: [
    {
      type: 'md',
      md: `In Stage 1 you learned that a shelter is a set of heat-loss controls arranged around your body. This stage turns that idea into a **design method** you can apply to any environment, kit or terrain:

1. **Identify the threats** for *this* night: wet? wind? cold ground? clear sky? sun? insects? rising water?
2. **Rank the heat-loss paths** — which one will take the most watts from you?
3. **Choose a control for each path**, biggest first, cheapest first.
4. **Check the budget**: time before dark, energy, sweat, materials within reach.
5. **Check the hazards** before you commit a single minute (Lesson 2).

Everything that follows is a way of making step 2 quantitative.`,
    },
    { type: 'diagram', id: 'shelter-heat-paths', caption: 'The four heat-loss paths of a person lying in a shelter, and the control for each.' },
    {
      type: 'table',
      head: ['Night type', 'Usually dominant path', 'Highest-value control'],
      rows: [
        ['Wet and windy, 0–10 °C', 'Evaporation + convection (wet clothing in wind)', 'A roof that keeps you dry, low to the ground, back to the wind'],
        ['Calm, clear and frosty', 'Radiation to the sky + conduction to frozen ground', 'Overhead cover (canopy or tarp), a thick bed, avoid hollows'],
        ['Snow, −10 °C and below', 'Conduction into snow + convection', 'Thick bed and pad; enclosed snow walls; out of the wind'],
        ['Desert afternoon', 'Radiant *gain* from sun, hot ground and a hot roof', 'Double-layer shade, air flow, cooler ground, rest'],
        ['Humid tropics at night', 'Evaporation from permanently wet clothing; conduction to wet ground', 'Steep roof, raised bed, net, a dry sleeping set'],
      ],
      caption: 'The ranking changes with the weather, so the design must too.',
    },
    {
      type: 'md',
      md: `### Ground first — usually

On most cold nights the ground is the biggest single drain, because your weight crushes the insulation between you and it. Clothing that gives you 1.5 clo standing up gives you almost nothing where your hips and shoulders press on the ground. That is why the Stage 1 rule was *"insulate underneath first"* — this lesson gives you the numbers.

**Thermal resistance** $R$ measures how hard it is for heat to get through a layer. For a flat layer, $R = d/k$: thickness divided by conductivity. Layers stacked on top of each other simply **add**: pad + leaves + clothing = $R_1 + R_2 + R_3$.`,
    },
    { type: 'diagram', id: 'bed-r-values', caption: 'R-values of common beds after compression. Thickness and dryness dominate everything else.' },
    {
      type: 'md',
      md: `Three rules fall straight out of the chart:

- **Compressed thickness is what counts.** 30 cm of loose leaves is about 7 cm under a body. Build it until it looks absurd.
- **Wet kills insulation.** Water fills the air spaces; wet leaves conduct several times better than dry ones. A bed in a run-off channel fails at 2 a.m.
- **A pad adds in series.** A thin foam pad on top of a leaf bed is better than either alone — and it keeps the leaves from poking through.

### Volume and warmth

The air in your shelter is warmed by the heat you lose into it and cooled by the shelter's **conductance** $UA$ (watts lost per degree of difference with the outside): heat leaking through the walls plus warm air blowing out. The air temperature settles where the two balance:

$$
\\Delta T_{\\text{inside}} \\approx \\frac{Q_{\\text{into air}}}{UA}
$$`,
    },
    { type: 'diagram', id: 'volume-warmth', caption: 'The same 60 W warms a small, enclosed, insulated space many degrees; a big open tarp barely at all.' },
    {
      type: 'md',
      md: `So:

- **Tarps don’t hold warm air.** Wind and open ends swap the air many times an hour. A tarp’s job is to stop **rain**, block **wind** and hide the **sky** — not to heat the air. Plan your warmth from your bed and clothing.
- **Enclosed insulated shelters do.** A debris hut or a snow shelter with thick walls and a small door can sit many degrees above the outside air using body heat alone — *if it is small*. Every extra cubic metre adds wall area and air to heat.
- **Low beats high** in the cold: less volume, less wind load, less sky. **High beats low** in heat, where you *want* air flow.

### Design under a budget

Every minute of building costs light, energy and — if you work hard — sweat, which later costs heat by evaporation. A practical question for each job is therefore: *how many watts does this save per minute of work?* Early minutes spent on the bed usually save the most; minutes spent perfecting a roof on a dry, calm night save almost nothing. The simulation below makes you pay for every choice.`,
    },
    { type: 'sim', id: 'shelter-builder', caption: 'Try the temperate forest: first lie on bare ground under a tarp, then add a 30 cm leaf bed. Compare the brown (conduction) bars.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Shelter building and the law',
      md: 'Cutting live vegetation, gathering large amounts of leaf litter, digging and building structures are restricted or banned in many parks and protected areas; camping itself may need a permit. In a real emergency, survival comes first. For **practice**, use a tarp, use dead and down material only where allowed, and dismantle and scatter what you built (Leave No Trace). Check the land manager’s rules — see the References page for jurisdiction portals.',
    },
  ],
  whyItMatters: 'People build the wrong shelter because they copy a picture instead of attacking the heat-loss path that is actually killing them tonight. A tarp without a bed on frozen ground, a beautiful roof over a sweat-soaked body, or a cavernous lean-to with no fire all fail for the same reason: the design did not follow the physics. If you can rank the paths, you can design for any place and any kit.',
  science: [
    {
      type: 'md',
      md: `### Heat through a layer

In words: **heat flow through a layer equals the area times the temperature difference, divided by the layer’s resistance.**

$$
Q = \\frac{A\\,\\Delta T}{R}, \\qquad R = \\frac{d}{k}
$$

$Q$ in watts, $A$ in m², $\\Delta T$ in kelvin (same size as °C), $R$ in m²·K/W, $d$ thickness in metres, $k$ conductivity in W/(m·K).

**Worked example — the bed.** Lying on damp ground at 5 °C, about $A = 0.5$ m² of you is in contact. Skin under clothing is ~33 °C, so $\\Delta T \\approx 28$ K.

- Bare ground: flattened clothing plus the soil right under you give roughly $R \\approx 0.12$. $Q = 0.5 \\times 28 / 0.12 \\approx 117$ W — more than your entire resting metabolism (≈ 85–100 W).
- 30 cm of dry leaves, compressed to 7.5 cm, $k \\approx 0.05$: $R = 0.075/0.05 = 1.5$. Add 0.12 for clothing and soil: $Q = 0.5 \\times 28 / 1.62 \\approx 9$ W.

That single choice changes the night by over 100 W. Over 10 hours, 100 W is 3.6 MJ — about 15 °C of core-equivalent heat for a 70 kg person (245 kJ per °C, Stage 1). The body would never let it get that far — it shivers, and it cools the skin and limbs first — but the arithmetic shows why people on bare ground shiver all night.

### Layers in series and in parallel

- **Series** (stacked): $R_{\\text{total}} = R_1 + R_2 + \\dots$ — a 1 cm foam pad ($R \\approx 0.29$) on 10 cm of leaves ($R \\approx 0.5$ compressed) gives $0.79$.
- **Parallel** (side by side, e.g., a sit-pad under your hips but not your shoulders): add the **conductances** $A/R$ of each area. A pad that covers only a third of you helps only a third of you — cold shoulders still drain heat.

### Air exchange

Heating air takes about $\\rho c_p \\approx 1.2\\ \\text{kg/m}^3 \\times 1005\\ \\text{J/(kg·K)} \\approx 1200$ J per m³ per kelvin. If the shelter’s air volume $V$ is replaced $n$ times per hour, the air-exchange conductance is

$$
UA_{\\text{air}} = \\frac{1200\\,V\\,n}{3600} \\approx \\frac{V\\,n}{3}\\ \\text{W/K}
$$

- A small snow shelter or debris hut, $V = 1.5$ m³, $n = 4$ per hour: $\\approx 2$ W/K.
- A pitched tarp, $V = 3$ m³, wind swapping the air $n = 20$ times an hour: $\\approx 20$ W/K.

With ~60 W of body heat reaching the air, the first warms by roughly 60 ÷ (2 + walls) — many degrees; the second by about 3 °C at most. **Size and openness, not the roof material, decide whether a shelter holds warm air.**

### Walls

Wall conductance is $U A = kA/d$. A 30 cm snow wall ($k \\approx 0.1$) over 6 m² gives $0.1 \\times 6 / 0.3 = 2$ W/K. Thick, dry, small: that is the whole recipe for a warm natural or snow shelter.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest, rain and gale.** The dominant paths are evaporation and convection. The best first minutes: a low A-frame or wedge with its closed end into the wind, then a thick leaf bed. An elaborate open lean-to would catch the wind and rain.

**Boreal forest, −20 °C, calm and clear.** Conduction into the snow and radiation to the sky dominate. A snow trench or quinzhee with a bough bed and pad beats any tarp; a tarp still helps by hiding the sky.

**Mountain bivouac above the treeline.** No insulation materials at all: the rope, the pack, the empty rucksack and every spare layer go *under* you; a bivy bag stops wind and spindrift. Here the design is kit, not construction.

**Desert.** The paths reverse in the day: you are *gaining* heat from sun, hot ground and a sun-heated roof. Shade, a double roof and air flow control the day; a fleece and a ground layer control the surprisingly cold night.

**Humid tropics.** Evaporation from clothing that never dries and conduction into waterlogged ground. A steep roof and a raised bed are worth more than any wall.

**Urban.** A multi-storey car park stairwell, a bus shelter, a parked car: the same four paths. Cardboard is excellent ground insulation; a car blocks wind and rain but conducts heat away through metal and glass.`,
    },
  ],
  mistakes: [
    'Designing from a picture instead of from tonight’s dominant heat-loss path.',
    'Building a roof and no bed — on a cold night the ground usually takes more heat than the sky.',
    'Measuring bed thickness before lying on it. Loose leaves compress to roughly a quarter of their height.',
    'Myth: "a space blanket under you insulates you from the ground." Foil reflects radiation but does almost nothing against conduction; it needs thick trapped air beneath it.',
    'Myth: "heat rises, so insulate overhead first." Warm air rises, but lying on the ground you lose heat by conduction straight down.',
    'Building big "to have room" — every extra cubic metre is air and wall area you must heat.',
    'Working hard enough to soak your base layer, then lying still in the wet clothes.',
  ],
  exercises: [
    {
      id: 's5-l1-e1',
      title: 'Kitchen insulation lab',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['4 identical jars or mugs', 'Hot tap water', 'Kitchen or aquarium thermometer', 'Dry leaves or crumpled paper, a folded towel, a foam pad or sheet, a wet towel', 'A cold surface (a stone floor, or a tray from the freezer)'],
      steps: [
        'Fill each jar with the same amount of hot water and record the starting temperature.',
        'Stand one jar directly on the cold surface, one on 5 cm of compressed leaves/paper, one on the foam, and one on the wet towel.',
        'Record the temperature every 5 minutes for 40 minutes.',
        'Plot the curves. Which layer had the highest R? Where did the wet towel rank?',
        'Repeat the leaf jar with a second, identical layer stacked on the first and check whether the loss rate roughly halves (series R).',
      ],
      success: ['You produced four cooling curves.', 'You can explain the ranking with $R = d/k$ and the effect of water.'],
    },
    {
      id: 's5-l1-e2',
      title: 'Compression and bed-building test',
      level: 3,
      safety: 'outdoor',
      minutes: 40,
      materials: ['A ruler or tape', 'Dry leaf litter or grass where collecting it is allowed', 'Optional: your foam sit-pad'],
      steps: [
        'Build a bed of dry leaves until it is 30 cm deep and measure it.',
        'Lie on it for 5 minutes, get up carefully, and measure the dent under your hips.',
        'Note how many armfuls it took and how long. Estimate how long a full-length bed would take.',
        'Return the material and leave the site as you found it.',
      ],
      success: ['You measured loose and compressed thickness.', 'You have a personal "minutes per full bed" number to use in planning.'],
      skill: 'natural-shelter',
      safetyNote: 'Gloves are sensible; check for ticks afterwards.',
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l1-q1',
      kind: 'numeric',
      prompt: 'A bed of 20 cm of conifer boughs compresses to **7 cm** under you. With $k = 0.06$ W/(m·K), what is its thermal resistance $R = d/k$ in m²·K/W? (Two decimals.)',
      unit: 'm²·K/W',
      answer: 1.17,
      tolerance: 0.05,
      concepts: ['r-value', 'ground-insulation'],
      explanation: '$R = 0.07 / 0.06 \\approx 1.17$ m²·K/W. Use the *compressed* thickness — the loose 20 cm would suggest 3.3, which is fiction.',
    },
    {
      id: 's5-l1-q2',
      kind: 'numeric',
      prompt: 'A small debris hut holds $V = 1.5$ m³ of air, replaced $n = 4$ times per hour. Using $UA_{air} \\approx V n / 3$, what is its air-exchange conductance in W/K?',
      unit: 'W/K',
      answer: 2,
      tolerance: 0.2,
      concepts: ['shelter-volume'],
      explanation: '$1.5 \\times 4 / 3 = 2$ W/K. With ~60 W of body heat reaching the air, that alone would allow a rise of tens of degrees — in practice the walls leak too, but small and enclosed is why debris huts and snow shelters feel warm.',
    },
    {
      id: 's5-l1-q3',
      kind: 'single',
      prompt: 'Calm, clear, −3 °C night in a pine forest, dry ground. You have a tarp, 20 minutes of light and a carpet of dry needles. Which heat-loss path deserves your first minutes?',
      choices: [
        { id: 'a', text: 'Convection — build walls against the wind', why: 'It is calm; wind is not the problem tonight.' },
        { id: 'b', text: 'Conduction — build a thick needle bed', why: 'Correct — frozen ground under a compressed body is the largest drain; the bed is also the cheapest big win.' },
        { id: 'c', text: 'Evaporation — waterproof everything', why: 'It is dry; there is little water to control.' },
        { id: 'd', text: 'Radiation — pitch the tarp perfectly taut first', why: 'Worth doing second (it hides the clear sky), but it saves fewer watts per minute than the bed.' },
      ],
      answer: 'b',
      concepts: ['heat-loss', 'ground-insulation'],
      explanation: 'Rank the paths for tonight: calm and dry removes convection and evaporation; conduction and radiation remain, and conduction through a crushed layer is bigger. Bed first, then a low tarp to hide the sky.',
    },
    {
      id: 's5-l1-q4',
      kind: 'multi',
      prompt: 'Which statements about **volume and warmth** are correct?',
      choices: [
        { id: 'a', text: 'A pitched tarp in wind raises the air temperature under it only a little.', why: 'Correct — air is exchanged many times an hour.' },
        { id: 'b', text: 'Doubling the size of an enclosed shelter roughly doubles its wall area and air to heat.', why: 'Correct — and so lowers the temperature rise from the same body heat.' },
        { id: 'c', text: 'In the cold, pitching low reduces wind load, volume and sky view.', why: 'Correct.' },
        { id: 'd', text: 'In a hot desert, pitching as low and closed as possible keeps you coolest.', why: 'Wrong — in heat you want shade *and* air flow, so the roof goes higher and the sides stay open.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['shelter-volume'],
      explanation: 'Small and closed holds warmth; big and open exchanges air. Choose which you need for the climate.',
    },
    {
      id: 's5-l1-q5',
      kind: 'truefalse',
      prompt: 'A foil emergency blanket laid directly on frozen ground is good ground insulation.',
      answer: false,
      concepts: ['r-value', 'heat-loss'],
      explanation: 'Myth. Foil is thin: it has almost no thermal resistance against conduction. It reflects radiant heat only when there is an air gap. Put thick, dry material under you; the foil can go on top of it or around you.',
    },
    {
      id: 's5-l1-q6',
      kind: 'order',
      prompt: 'Wet, windy night at 4 °C in a forest; you have a tarp and cord and 60 minutes of light. Order the jobs by **watts saved per minute**, highest first.',
      items: [
        { id: 'roof', text: 'Low tarp roof over a dry spot, closed side to the wind' },
        { id: 'bed', text: 'Thick bed of the driest debris you can find' },
        { id: 'plug', text: 'Pack or debris plugging the windward gap' },
        { id: 'deco', text: 'Neatening the tensioning and guy-lines' },
      ],
      answer: ['roof', 'bed', 'plug', 'deco'],
      concepts: ['heat-loss', 'wet-wind', 'effort-budget'],
      explanation: 'In rain and wind, staying dry comes first because wet clothing multiplies every other loss; then the bed; then fine-tuning the wind protection; cosmetics last. On a dry, calm night the bed would move to the top.',
    },
  ],
  scenario: {
    id: 's5-l1-sc',
    setup: 'Late autumn, deciduous forest, 17:00, sunset 17:40. Forecast: dry, clear, calm, −4 °C. You have a 2 × 3 m tarp, 10 m of cord, a warm jacket and a foam sit-pad. The forest floor is covered in dry leaves.',
    question: 'How do you spend the 40 minutes?',
    choices: [
      { id: 'a', text: 'A roomy, high A-frame so you can sit up, then leaves if there is time.', why: 'High and roomy costs time and adds volume you cannot heat; the bed — the biggest win tonight — risks being skipped.' },
      { id: 'b', text: 'A 30 cm+ leaf bed first (sit-pad under the hips), then a low, quick A-frame over it to hide the sky.', why: 'Best: tackles conduction (biggest path on a clear, frozen night) first, then radiation. Nothing is spent on wind or rain that will not come.' },
      { id: 'c', text: 'A perfect, drum-tight tarp and no bed — the tarp is your best piece of kit.', why: 'The tarp does not insulate you from frozen ground. You will shiver on the leaves you did not gather.' },
      { id: 'd', text: 'Start a debris hut; they are the warmest natural shelter.', why: 'A good debris hut takes hours. In 40 minutes you will have half a hut and no bed.' },
    ],
    best: 'b',
    debrief: 'Rank the paths: calm and dry removes wind and rain; clear and frozen leaves conduction and radiation. The bed attacks the bigger one cheaply, the tarp the other. Design follows tonight’s physics and the time you have — not the most impressive structure.',
    concepts: ['heat-loss', 'ground-insulation', 'effort-budget', 'daylight'],
  },
  summary: [
    'Design path by path: rank tonight’s heat-loss paths, then control the biggest ones first.',
    '$Q = A\\Delta T/R$ and $R = d/k$; layers in series add. Use **compressed** thickness; wet material loses most of its R.',
    'Warm air stays only in **small, enclosed** shelters ($UA$ small). Tarps stop rain, wind and sky — they do not heat air.',
    'Low and closed for cold; high, shaded and ventilated for heat.',
    'Spend minutes where they save the most watts, and don’t sweat doing it.',
  ],
  furtherReading: ['kochanski-bushcraft', 'parsons-thermal', 'army-atp-3-50-21'],
  references: ['kochanski-bushcraft', 'parsons-thermal', 'army-atp-3-50-21', 'usariem-cold', 'lnt-principles', 'iol-bushcraft'],
}
