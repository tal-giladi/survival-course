import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's1-l7',
  stage: 1,
  order: 7,
  title: 'Your body’s heat budget',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l2'],
  concepts: ['heat-balance', 'heat-loss', 'wet-wind'],
  objectives: [
    'Write the body’s **heat balance** in words and in a simple equation.',
    'Explain the four heat-transfer mechanisms — **radiation, convection, conduction, evaporation** — and give a control for each.',
    'Explain quantitatively why **wet + wind** is so dangerous.',
    'Estimate heat production at rest, walking and shivering.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Your core runs at about **37 °C**. It stays there only if the heat you **produce** matches the heat you **lose**. Almost every survival skill — clothing, shelter, fire, even water and food — is a way of controlling one side of that balance. This lesson gives you the model; Stage 8 deepens it.

### Heat in

- **Metabolism.** At rest an adult produces roughly **80–100 W** (like an old incandescent bulb). Walking with a pack: **300–500 W**. Hard work: 600+ W.
- **Shivering** can raise heat production several-fold for a while, but it is tiring, burns glycogen fast, and ruins fine motor control.
- **External heat.** Sun, fire, a warm partner, warm drinks (small, but good for morale).

### Heat out: four mechanisms`,
    },
    { type: 'diagram', id: 'heat-loss', caption: 'Four routes for heat to leave the body — plus breathing, which combines convection and evaporation.' },
    {
      type: 'table',
      head: ['Mechanism', 'What happens', 'Biggest when…', 'Controls'],
      rows: [
        ['**Radiation**', 'Infrared energy flows from warm skin/clothes to colder surroundings — including a clear night sky.', 'Clear, cold nights; bare head and hands.', 'Overhead cover, hat, reflective layers, a fire’s radiant heat.'],
        ['**Convection**', 'Moving air or water carries away the warm layer next to you.', 'Wind; being in moving water.', 'Windproof shell, get out of the wind, lee side of obstacles.'],
        ['**Conduction**', 'Direct contact with colder things: ground, snow, rock, water, metal.', 'Sitting or lying on cold/wet ground.', 'Ground insulation: pack, pad, 20–30 cm of dry leaves or boughs.'],
        ['**Evaporation**', 'Water turning to vapour takes a lot of heat with it — sweat, wet clothes, breath.', 'Sweating, wet clothing, dry cold air.', 'Avoid sweating (vent, slow down), stay dry, change wet layers.'],
      ],
    },
    {
      type: 'md',
      md: `### Wet + wind: the killer combination

Water conducts heat about **25 times** better than air, and wet fabric collapses the trapped air that makes insulation work. Add wind and the evaporation and convection losses multiply. This is why most hypothermia deaths do not happen in extreme cold; they happen at **0–10 °C in rain and wind**, to people in wet clothing. Staying dry is easier than getting dry: put your shell on *before* you get wet, and take layers off *before* you sweat.`,
    },
    { type: 'sim', id: 'heat-balance', caption: 'Explore: set 5 °C, light rain and wind, then compare wet cotton with a dry synthetic layer and a shell.' },
  ],
  whyItMatters: 'Hypothermia and heat illness are among the most common serious wilderness emergencies, and both are failures of heat balance. When you understand the four mechanisms, every piece of kit and every shelter becomes a deliberate control rather than a habit.',
  science: [
    {
      type: 'md',
      md: `### The heat balance equation

Physiologists write the body’s heat storage $S$ as:

$$
S = M - W \\pm R \\pm C \\pm K - E
$$

In words: **stored heat = metabolic heat − external work ± radiation ± convection ± conduction − evaporation**. The ± signs mean the environment can add heat (sun, fire, hot sand) or take it away. If $S$ is negative for long, core temperature falls; if positive, it rises.

### How much heat is that?

The body’s specific heat is about $3.5\\ \\text{kJ/(kg·°C)}$. For a 70 kg person:

$$
70 \\times 3.5 = 245\\ \\text{kJ per °C}
$$

So a net loss of 100 W (100 J every second) for one hour removes $100 \\times 3600 = 360\\ \\text{kJ}$ — about **1.5 °C** of core-equivalent heat if nothing compensates. In reality the body defends the core by cooling the limbs first and by shivering, but the arithmetic shows how fast an imbalance adds up.

### Evaporation is expensive

Evaporating water absorbs about $2.4\\ \\text{MJ}$ per litre. Evaporating just **100 ml** from wet clothing removes about $240\\ \\text{kJ}$ — roughly **one degree** of core heat for a 70 kg person. That is why damp clothes on a windy ridge can chill you faster than dry air at a much lower temperature.

### Radiation to the sky

Radiative loss follows the Stefan–Boltzmann law, $q = \\varepsilon\\sigma(T_s^4 - T_{sky}^4)$, with temperatures in kelvin. On a clear night the effective sky temperature can be 20–30 °C colder than the air, so an exposed person radiates heat to "space" even when the air is mild. Any roof — a tarp, dense branches — replaces that cold sky with a warmer surface.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate hills, 6 °C, rain and wind.** A walker in jeans and a cotton hoodie gets soaked. Conduction through wet fabric, evaporation and wind convection combine. Classic hypothermia weather.

**Desert night.** After a 38 °C day, a clear night sky drops the temperature to 8 °C. Radiation to the sky and conduction into sand chill a sleeper with no ground insulation. Desert survivors often report being dangerously cold at night.

**Snow.** Sitting directly on snow drains heat by conduction; a closed-cell foam pad or a thick bed of boughs cuts it dramatically.

**Tropics.** Constant wetness and nighttime temperatures of 18–22 °C can still produce chilling, especially after a day of sweating.`,
    },
  ],
  mistakes: [
    'Believing hypothermia requires freezing temperatures — most cases occur at 0–10 °C in wet, windy conditions.',
    'Working hard until soaked in sweat, then stopping to rest in the wind.',
    'Insulating above yourself but lying directly on cold ground.',
    'Eating snow to hydrate in the cold — it costs body heat to melt.',
  ],
  exercises: [
    {
      id: 's1-l7-e1',
      title: 'Wet-sleeve experiment',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Two identical sleeves or socks (one cotton, one wool or synthetic, if available)', 'Two thermometers (or one, used in turn)', 'A fan', 'Water'],
      steps: [
        'Wrap each thermometer bulb in a dry sleeve; note the starting temperature.',
        'Wet one sleeve, wring it out, and put both in front of a fan for 10 minutes.',
        'Record temperatures every 2 minutes. Repeat with cotton vs wool/synthetic if you have both.',
        'Explain your results using evaporation and convection.',
      ],
      success: ['You measured a clear temperature drop in the wet sleeve.', 'You can explain the result in terms of the heat balance equation.'],
      skill: 'clothing-system',
    },
  ],
  simulations: ['heat-balance'],
  quiz: [
    {
      id: 's1-l7-q1',
      kind: 'single',
      prompt: 'Sitting on a cold rock loses heat mainly by…',
      choices: [
        { id: 'a', text: 'Radiation', why: 'Some, but contact dominates.' },
        { id: 'b', text: 'Conduction', why: 'Correct — direct contact with a colder solid.' },
        { id: 'c', text: 'Convection', why: 'That requires moving air or water.' },
        { id: 'd', text: 'Evaporation', why: 'Only if you are wet.' },
      ],
      answer: 'b',
      concepts: ['heat-loss'],
      explanation: 'Conduction is heat transfer through direct contact. Insulate yourself from the ground.',
    },
    {
      id: 's1-l7-q2',
      kind: 'single',
      prompt: 'Evaporating 1 litre of water absorbs about 2.4 MJ. How much heat does evaporating **150 ml** from your clothing remove?',
      choices: [
        { id: 'a', text: '360 kJ', why: 'Correct — 0.15 L × 2400 kJ/L = 360 kJ.' },
        { id: 'b', text: '3600 kJ', why: 'This treats 150 ml as 1.5 L — a slipped decimal in the ml-to-litre conversion.' },
        { id: 'c', text: '36 kJ', why: 'This treats 150 ml as 0.015 L — the decimal slipped the other way.' },
        { id: 'd', text: '16 kJ', why: 'This divides 2400 by 150 instead of multiplying by 0.15 L — an inverted ratio.' },
      ],
      answer: 'a',
      concepts: ['heat-loss', 'wet-wind'],
      explanation: '0.15 L × 2400 kJ/L = **360 kJ** — about 1.5 °C of core-equivalent heat for a 70 kg person.',
    },
    {
      id: 's1-l7-q3',
      kind: 'single',
      prompt: 'Which pairing of a control with the heat-loss mechanism it targets is **wrong**?',
      choices: [
        { id: 'a', text: 'A windproof shell mainly reduces convection.', why: 'Correct pairing — it stops moving air stripping the warm layer.' },
        { id: 'b', text: 'A foam pad mainly reduces conduction.', why: 'Correct pairing — it insulates you from the cold ground.' },
        { id: 'c', text: 'A tarp overhead cuts radiation to a clear sky.', why: 'Correct pairing — it replaces the cold sky with a warmer surface.' },
        { id: 'd', text: 'Walking faster reduces evaporative loss.', why: 'Wrong, so this is the answer — walking faster usually increases sweating.' },
      ],
      answer: 'd',
      concepts: ['heat-loss'],
      explanation: 'Each control targets a mechanism. Exertion adds heat but also sweat, which later costs heat through evaporation.',
    },
    {
      id: 's1-l7-q4',
      kind: 'single',
      prompt: 'Under which conditions do many hypothermia cases occur?',
      choices: [
        { id: 'a', text: 'Well below −10 °C, in calm, dry and clear weather.', why: 'Extreme cold is dangerous, but many cases happen in much milder, wetter weather.' },
        { id: 'b', text: 'Between 0 and 10 °C, when people are wet and in wind.', why: 'Correct — wet clothing plus wind drives heat loss even when it is not freezing.' },
        { id: 'c', text: 'Below −20 °C, mostly at high altitude in winter.', why: 'Most cases do not need extreme cold or altitude.' },
        { id: 'd', text: 'Only once the air temperature drops below freezing.', why: 'Hypothermia does not require freezing temperatures.' },
      ],
      answer: 'b',
      concepts: ['wet-wind'],
      explanation: 'Many occur between 0 and 10 °C when people are wet and exposed to wind.',
    },
    {
      id: 's1-l7-q5',
      kind: 'single',
      prompt: 'A 70 kg person (≈245 kJ per °C) has a net heat loss of 50 W for 2 hours with no compensation. Roughly how many **°C** of core-equivalent heat is that?',
      choices: [
        { id: 'a', text: '1.5 °C', why: 'Correct — 50 W × 7200 s = 360 kJ; 360 / 245 ≈ 1.5 °C.' },
        { id: 'b', text: '0.7 °C', why: 'This uses 3600 s — one hour instead of two.' },
        { id: 'c', text: '5.1 °C', why: 'This divides 360 kJ by the 70 kg body mass, forgetting the 3.5 kJ/(kg·°C) specific heat.' },
        { id: 'd', text: '0.02 °C', why: 'This uses 120 s for 2 hours — minutes were never converted to seconds.' },
      ],
      answer: 'a',
      concepts: ['heat-balance'],
      explanation: '50 W × 7200 s = 360 kJ; 360 / 245 ≈ **1.5 °C**.',
    },
  ],
  scenario: {
    id: 's1-l7-sc',
    setup: 'You are on an exposed moor at 5 °C. Light rain, 25 km/h wind. You have been walking hard uphill and your base layer is damp with sweat. You stop to check the map.',
    question: 'What should you do first?',
    choices: [
      { id: 'a', text: 'Stay in the wind and check the map; you will warm up once you start walking.', why: 'Standing still, damp, in wind is exactly the heat-loss worst case.' },
      { id: 'b', text: 'Get into the lee of a wall, add your shell and insulation, then check the map.', why: 'Best: cuts convection and evaporative loss immediately and cheaply.' },
      { id: 'c', text: 'Take off the damp base layer so it can dry in the wind while you read the map.', why: 'Exposing skin and drying clothing in wind removes heat rapidly.' },
      { id: 'd', text: 'Drink some cold water to stay hydrated, then check the map before moving on.', why: 'Hydration matters but is not the most urgent heat-balance action here.' },
    ],
    best: 'b',
    debrief: 'When you stop working, heat production falls sharply while losses stay high. Getting out of the wind (convection) and covering damp layers with a shell (evaporation + convection) are the cheapest, biggest wins. Then check the map.',
    concepts: ['wet-wind', 'heat-balance'],
  },
  summary: [
    'Heat in = metabolism (+ sun, fire). Heat out = radiation, convection, conduction, evaporation.',
    '$S = M - W \\pm R \\pm C \\pm K - E$: if $S<0$ for long, core temperature falls.',
    'Water conducts heat ~25× better than air; evaporation removes ~2.4 MJ per litre.',
    'Stay dry, get out of the wind, insulate from the ground, cover the sky.',
  ],
  furtherReading: ['parsons-thermal', 'lundin-986', 'usariem-cold'],
  references: ['wms-hypothermia-2019', 'usariem-cold', 'parsons-thermal', 'nws-windchill', 'coldwater-1101'],
}
