import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's8-l2',
  stage: 8,
  order: 2,
  title: 'Heat-loss mechanisms quantified',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s8-l1'],
  concepts: ['radiative-loss', 'wind-chill', 'evaporative-loss', 'heat-loss', 'wet-wind', 'ground-insulation'],
  objectives: [
    'Calculate radiative loss with the **Stefan–Boltzmann law** and explain why a roof over your head matters on a clear night.',
    'Explain **convection** with a heat-transfer coefficient, and use the **2001 NWS/MSC wind-chill formula** — including what wind chill does *not* mean.',
    'Estimate **conductive** loss to the ground with $q = kA\\Delta T/d$ and compare foam, boughs and wet clothing.',
    'Quantify **evaporative** loss from wet clothing and explain why drying clothes on your body is expensive.',
  ],
  explanation: [
    {
      type: 'md',
      md: `In Stage 1 you met the four mechanisms qualitatively. Here we put numbers on them. You will not do these calculations in the field — but having done them once, you will *see* the numbers when you look at a wet partner on a windy ridge, or a sleeping spot under an open sky.

Each mechanism has the same shape: **heat flow = (a conductance) × (a temperature or vapour difference)**. Your controls either shrink the difference or shrink the conductance.`,
    },
    {
      type: 'table',
      head: ['Mechanism', 'Equation (per m²)', 'Drives it', 'Your control'],
      rows: [
        ['Radiation', '$q = \\varepsilon\\sigma(T_s^4 - T_{surr}^4)$', 'Temperature (in kelvin, to the 4th power) of what you “see”', 'A roof or canopy; a fire; reflective layers; cover skin'],
        ['Convection', '$q = h_c(T_s - T_a)$, with $h_c \\approx 3 + 8.3\\sqrt{v}$', 'Air or water speed $v$', 'Windproof shell; lee side; get out of the water'],
        ['Conduction', '$q = k\\,\\Delta T / d$', 'Contact with a cold, conductive surface', 'Thick, dry ground insulation'],
        ['Evaporation', '$q = \\dot m \\times 2.4\\ \\text{MJ/kg}$', 'Water turning to vapour: sweat, wet clothes, breath', 'Stay dry; vent before you sweat; shell over damp layers'],
      ],
    },
    { type: 'diagram', id: 's8-heat-partition', caption: 'Where the heat goes in four situations (course model, watts). The mix changes completely with conditions — so do the right controls.' },
    {
      type: 'md',
      md: `### Wind chill: what it is, and what it is not

The **wind chill temperature** (the 2001 index adopted in the US and Canada) is the still-air temperature that would cool **bare facial skin** as fast as the actual air and wind. It is useful for frostbite risk to exposed skin. It is **not**:

- the temperature of anything — a wet rag or a car radiator will never go below the actual air temperature, however windy;
- a measure of whole-body heat loss for a clothed person — clothing, wetness and activity matter far more.

The older (1945, Siple–Passel) index, based on water freezing in a plastic cylinder in Antarctica, overstated the chill and was replaced in 2001.`,
    },
    { type: 'diagram', id: 's8-wind-chill', caption: 'Wind chill (2001 NWS/MSC formula). Most of the effect comes in the first 20–30 km/h of wind.' },
    {
      type: 'md',
      md: `### Wet clothing: two penalties

Water ruins insulation twice. First, it fills the air spaces: water conducts heat about **25 times** better than still air, so wet insulation retains only part of its warmth (much less for cotton and down). Second, the water then **evaporates**, and every litre that evaporates takes about **2.4 MJ** — largely from you.`,
    },
    { type: 'diagram', id: 's8-wet-clothing', caption: 'Share of dry insulation retained when damp or soaked (illustrative values used in the course simulator).' },
    { type: 'sim', id: 'heat-balance', caption: 'Quick check: set −5 °C, clear night, resting; toggle the tarp and the ground bed and read the radiation and conduction bars.' },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Over time: run Challenge 1 (soaked on the moor) and find the cheapest combination of changes that keeps the core above 35.5 °C.' },
  ],
  whyItMatters: 'Different situations call for different controls. A shell does nothing for conduction; a foam pad does nothing for wind. Knowing which mechanism dominates — radiation under a clear sky, conduction when sitting, convection in wind, evaporation when wet — tells you which cheap action buys the most warmth.',
  science: [
    {
      type: 'md',
      md: `### Radiation to a clear night sky

The Stefan–Boltzmann law says a surface radiates in proportion to the **fourth power** of its absolute temperature. Net loss is emission minus what comes back from the surroundings:

$$
q = \\varepsilon \\sigma \\left(T_s^4 - T_{surr}^4\\right), \\quad \\sigma = 5.67 \\times 10^{-8}\\ \\text{W/(m}^2\\text{K}^4)
$$

In words: the hotter you are compared with what you can see, the faster you radiate — and a clear sky “looks” very cold (often 20–30 °C colder than the air). Example: the outer surface of a sleeping bag at 0 °C (273 K) facing a clear sky at an effective −20 °C (253 K), $\\varepsilon \\approx 0.95$:

$$
q = 0.95 \\times 5.67\\times10^{-8} \\times (273^4 - 253^4) \\approx 79\\ \\text{W/m}^2
$$

Over the ~0.9 m² facing up, that is about **70 W** — most of a resting person’s heat production. A tarp overhead at close to air temperature cuts it substantially: you now “see” a surface much warmer than the sky.

### Convection and the wind

Convective loss is $q = h_c (T_s - T_a)$. The coefficient $h_c$ grows roughly with the square root of air speed: about $6.7\\ \\text{W/(m}^2\\text{K)}$ in near-still air ($v = 0.2$ m/s) but about $22$ at 5 m/s (18 km/h). **Tripling** the coefficient triples the loss from exposed skin — which is why the first stretch of wind hurts most, and why stepping behind a boulder is worth so much.

### The 2001 wind-chill formula (metric)

$$
T_{wc} = 13.12 + 0.6215\\,T_a - 11.37\\,V^{0.16} + 0.3965\\,T_a V^{0.16}
$$

with $T_a$ in °C and $V$ the wind speed in km/h at 10 m height (valid for $T_a \\le 10$ °C and $V > 4.8$ km/h). Example, −10 °C and 30 km/h: $V^{0.16} = 30^{0.16} \\approx 1.723$, so

$$
T_{wc} = 13.12 - 6.22 - 19.59 - 6.83 \\approx -20\\ \\text{°C}
$$

which matches the published chart.

### Conduction into the ground

Fourier’s law for a flat layer: $q = k A \\Delta T / d$ ($k$ = conductivity, $d$ = thickness). Sitting with about 0.15 m² in contact, skin at 33 °C, ground at 0 °C:

- 2 cm closed-cell foam ($k \\approx 0.04$ W/m·K): $0.04 \\times 0.15 \\times 33 / 0.02 \\approx 10$ W.
- 3 mm of wet trousers ($k$ of the order of 0.3): hundreds of watts at first — in practice the skin in contact chills rapidly and stays cold.

Loose boughs or dry leaves work like foam **if** they are thick (20–30 cm before compression) and dry.

### Evaporation from wet clothing

Drying 0.5 L of water out of clothing over an hour removes

$$
\\frac{0.5 \\times 2.4\\times10^{6}\\ \\text{J}}{3600\\ \\text{s}} \\approx 330\\ \\text{W}
$$

— more than three times resting heat production. Not all of that heat comes from your body (some comes from the air and the sun), but in cold wind most of it does. Changing into dry layers, or putting a shell over damp ones, is often worth more than adding insulation.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert night (Sahara, Sonoran, Atacama).** Dry air and clear skies mean strong radiation to space; sand that was 60 °C at noon can fall below 10 °C by dawn. Overhead cover plus ground insulation beats more clothing on top.

**Arctic/subarctic.** At −30 °C and 20 km/h wind the wind chill is about −44 °C: exposed skin can freeze within minutes. Face protection and goggles matter more than another body layer.

**Mountain ridge in summer.** 8 °C, 40 km/h wind, walkers in damp base layers: convection and evaporation dominate. The shell goes on at the first sign of wind, not when it rains.

**Coastal and tropical.** Sea spray or rain at 20–25 °C can still produce big evaporative losses once you stop moving; fishermen and kayakers become hypothermic in “warm” climates.

**Urban.** Sitting on a concrete step or metal bench in winter drains heat by conduction; homeless-outreach workers teach people to sit on cardboard for exactly this reason.`,
    },
  ],
  mistakes: [
    'Myth: wind chill can freeze water or a radiator above 0 °C air temperature — it cannot; nothing is cooled below the air temperature by wind alone.',
    'Stacking insulation on top while lying directly on snow, rock or wet ground.',
    'Sleeping in the open under a clear sky when a tarp, dense tree or overhang is available.',
    'Trying to dry wet clothes by wearing them in the wind.',
    'Adding a warm layer *under* a shell that is soaked through, instead of changing the wet base layer.',
  ],
  exercises: [
    {
      id: 's8-l2-e1',
      title: 'Wind-chill and radiation worksheet',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['Calculator or spreadsheet'],
      steps: [
        'Compute the wind chill for −5, −15 and −25 °C at 10, 30 and 50 km/h with the 2001 formula. Check two values against the NWS/MSC chart.',
        'For each temperature, find how much of the total chill (from 5 km/h to 50 km/h) happens in the first 20 km/h.',
        'Compute the net radiation from a 0 °C sleeping-bag surface to a clear sky at −25 °C, and to a tarp at −8 °C. What fraction does the tarp remove?',
        'Write a one-line rule of thumb for each result.',
      ],
      success: ['Your wind-chill values match the chart within 1 °C.', 'You have a quantified reason to rig overhead cover on clear nights.'],
    },
    {
      id: 's8-l2-e2',
      title: 'Ground-insulation test',
      level: 3,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Foam pad', 'Rucksack', 'A thick pile of dry leaves or a folded coat', 'Outdoor thermometer (optional)', 'Watch'],
      steps: [
        'On a cool day (5–15 °C), sit on bare ground for 5 minutes; note how cold your seat feels (1–5 scale).',
        'Repeat on a rucksack, a foam pad, and a 20–30 cm pile of leaves or a folded coat.',
        'Rank them and relate the ranking to thickness and dryness (Fourier’s law).',
      ],
      success: ['You ranked at least three insulators and explained the ranking with conductivity and thickness.'],
      safetyNote: 'Stop if you begin to shiver. Choose dry weather and dress warmly.',
      skill: 'clothing-system',
    },
  ],
  simulations: ['heat-balance', 'heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l2-q1',
      kind: 'numeric',
      prompt: 'Use the 2001 formula to compute the wind chill for −5 °C air and 40 km/h wind. ($40^{0.16} \\approx 1.804$.) Give °C to the nearest degree.',
      unit: '°C',
      answer: -14,
      tolerance: 1,
      concepts: ['wind-chill'],
      explanation: '13.12 + 0.6215(−5) − 11.37(1.804) + 0.3965(−5)(1.804) = 13.12 − 3.11 − 20.51 − 3.58 ≈ **−14 °C**, matching the published chart.',
    },
    {
      id: 's8-l2-q2',
      kind: 'truefalse',
      prompt: 'At +2 °C air temperature with a wind chill of −6 °C, a wet water bottle left outside will freeze.',
      answer: false,
      concepts: ['wind-chill'],
      explanation: 'Wind speeds cooling but cannot take an object below the air temperature. Wind chill describes how fast bare skin loses heat, not a temperature anything reaches.',
    },
    {
      id: 's8-l2-q3',
      kind: 'single',
      prompt: 'On a clear, calm, −10 °C night you are warm enough in your bag but wake cold. Which single change most directly attacks the dominant loss the course model identifies?',
      choices: [
        { id: 'a', text: 'A tarp or dense canopy overhead, plus thicker insulation underneath.', why: 'Correct — radiation to the sky and conduction to the ground dominate on calm clear nights.' },
        { id: 'b', text: 'A windproof bivy shell.', why: 'Helps little in calm air.' },
        { id: 'c', text: 'Drinking extra water.', why: 'Hydration matters but does not cut a heat-loss route.' },
        { id: 'd', text: 'Sleeping on top of the pack in the open.', why: 'Some ground insulation, but ignores radiation to the sky.' },
      ],
      answer: 'a',
      concepts: ['radiative-loss', 'ground-insulation'],
      explanation: 'Calm and clear = radiation up and conduction down. Cover the sky and insulate the ground.',
    },
    {
      id: 's8-l2-q4',
      kind: 'numeric',
      prompt: 'Your clothing dries 0.3 L of water in 1 hour. Roughly how many **watts** is that evaporation removing? (2.4 MJ per litre; nearest 10 W.)',
      unit: 'W',
      answer: 200,
      tolerance: 10,
      concepts: ['evaporative-loss', 'wet-wind'],
      explanation: '0.3 × 2,400,000 J / 3,600 s = **200 W** — about twice resting heat production.',
    },
    {
      id: 's8-l2-q5',
      kind: 'order',
      prompt: 'Order these ground layers from **most** to **least** effective insulation for sitting on snow (same area).',
      items: [
        { id: 'foam', text: '2 cm closed-cell foam pad' },
        { id: 'boughs', text: '5 cm of compressed dry boughs' },
        { id: 'pack', text: 'Empty rucksack (about 1 cm of fabric and back-panel foam)' },
        { id: 'wet', text: 'Wet trousers only' },
      ],
      answer: ['foam', 'boughs', 'pack', 'wet'],
      concepts: ['ground-insulation', 'heat-loss'],
      explanation: 'Low conductivity and dry thickness win. Boughs compress a lot and have gaps; wet fabric conducts heat well. Pile boughs deep (20–30 cm) to rival foam.',
    },
    {
      id: 's8-l2-q6',
      kind: 'single',
      prompt: 'Why does the 2001 wind-chill index give *less* extreme values than the old 1945 index?',
      choices: [
        { id: 'a', text: 'The old index was based on water freezing in a cylinder and overstated skin cooling; the new one models human facial skin at face height.', why: 'Correct.' },
        { id: 'b', text: 'Winds are weaker now.', why: 'Not a climatology change.' },
        { id: 'c', text: 'The new index includes clothing.', why: 'It still describes bare skin.' },
        { id: 'd', text: 'The new index uses Fahrenheit.', why: 'Units do not change the physics.' },
      ],
      answer: 'a',
      concepts: ['wind-chill'],
      explanation: 'The 2001 index adjusts wind to face height and uses a model of human skin heat transfer, validated in trials.',
    },
  ],
  scenario: {
    id: 's8-l2-sc',
    setup: 'Early spring on an exposed coastal headland: 6 °C, 35 km/h onshore wind, occasional spray. You and a partner must wait 2 hours for the tide before you can continue. You have a tarp, foam sit pads, spare dry base layers in a dry bag, shells and insulated jackets. Your base layers are damp from the walk in.',
    question: 'Which plan best matches the dominant heat-loss mechanisms?',
    choices: [
      { id: 'a', text: 'Put on insulated jackets over the damp base layers and sit in the open on your packs.', why: 'Insulation helps, but damp layers keep evaporating and the wind keeps stripping heat.' },
      { id: 'b', text: 'Move into the lee of the rocks, swap into dry base layers, then jacket + shell, sit on foam pads, and rig the tarp as a windbreak.', why: 'Best: attacks convection (lee, shell, tarp), evaporation (dry layers) and conduction (pads).' },
      { id: 'c', text: 'Keep walking up and down the headland in the wind for 2 hours.', why: 'Generates heat, but in wind with damp layers you keep sweating and chilling; and it wastes energy.' },
      { id: 'd', text: 'Take off the damp layers and let them dry in the wind before putting them back on.', why: 'Exposes skin to high convective and evaporative loss.' },
    ],
    best: 'b',
    debrief: 'Name the mechanisms first: wind (convection), damp layers (evaporation), rock (conduction). Then match cheap controls to each. Changing base layers costs two minutes and may be worth more than any jacket.',
    concepts: ['wet-wind', 'evaporative-loss', 'ground-insulation'],
  },
  summary: [
    'Radiation: $q = \\varepsilon\\sigma(T_s^4 - T_{surr}^4)$ — a clear sky can take ~70 W from a resting sleeper; a roof cuts it.',
    'Convection rises with √(wind speed); most of the wind-chill effect comes in the first 20–30 km/h.',
    'Wind chill = bare-skin cooling rate, not a temperature things reach.',
    'Conduction: $q = kA\\Delta T/d$ — thick and dry beats everything; wet fabric conducts.',
    'Evaporation: 2.4 MJ per litre — drying 0.5 L/h of clothing ≈ 330 W.',
  ],
  furtherReading: ['nws-windchill', 'parsons-thermal', 'iso-9920'],
  references: ['nws-windchill', 'parsons-thermal', 'iso-9920', 'usariem-cold'],
}
