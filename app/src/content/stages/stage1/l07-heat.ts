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
      kind: 'numeric',
      prompt: 'Evaporating 1 litre of water absorbs about 2.4 MJ. How many **kJ** does evaporating **150 ml** from your clothing remove?',
      unit: 'kJ',
      answer: 360,
      tolerance: 10,
      concepts: ['heat-loss', 'wet-wind'],
      explanation: '0.15 L × 2400 kJ/L = **360 kJ** — about 1.5 °C of core-equivalent heat for a 70 kg person.',
    },
    {
      id: 's1-l7-q3',
      kind: 'multi',
      prompt: 'Match controls to mechanisms. Which statements are correct?',
      choices: [
        { id: 'a', text: 'A windproof shell mainly reduces convection.', why: 'Correct.' },
        { id: 'b', text: 'A foam pad mainly reduces conduction.', why: 'Correct.' },
        { id: 'c', text: 'A tarp overhead can reduce radiative loss to a clear night sky.', why: 'Correct.' },
        { id: 'd', text: 'Walking faster reduces evaporative loss.', why: 'Wrong — it usually increases sweating.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['heat-loss'],
      explanation: 'Each control targets a mechanism. Exertion adds heat but also sweat, which later costs heat through evaporation.',
    },
    {
      id: 's1-l7-q4',
      kind: 'truefalse',
      prompt: 'Most hypothermia cases occur at temperatures well below −10 °C.',
      answer: false,
      concepts: ['wet-wind'],
      explanation: 'Many occur between 0 and 10 °C when people are wet and exposed to wind.',
    },
    {
      id: 's1-l7-q5',
      kind: 'numeric',
      prompt: 'A 70 kg person (≈245 kJ per °C) has a net heat loss of 50 W for 2 hours with no compensation. Roughly how many **°C** of core-equivalent heat is that? (One decimal.)',
      unit: '°C',
      answer: 1.5,
      tolerance: 0.1,
      concepts: ['heat-balance'],
      explanation: '50 W × 7200 s = 360 kJ; 360 / 245 ≈ **1.5 °C**.',
    },
  ],
  scenario: {
    id: 's1-l7-sc',
    setup: 'You are on an exposed moor at 5 °C. Light rain, 25 km/h wind. You have been walking hard uphill and your base layer is damp with sweat. You stop to check the map.',
    question: 'What should you do first?',
    choices: [
      { id: 'a', text: 'Stay in the wind; you will warm up when you start walking again.', why: 'Standing still, damp, in wind is exactly the heat-loss worst case.' },
      { id: 'b', text: 'Get into the lee of a wall or boulder, put on your shell and an insulating layer, then check the map.', why: 'Best: cuts convection and evaporative loss immediately and cheaply.' },
      { id: 'c', text: 'Take off the damp base layer to let it dry in the wind.', why: 'Exposing skin and drying clothing in wind removes heat rapidly.' },
      { id: 'd', text: 'Drink cold water to stay hydrated.', why: 'Hydration matters but is not the most urgent heat-balance action here.' },
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
