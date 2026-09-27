import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's3-l7',
  stage: 3,
  order: 7,
  title: 'Heating and reflecting',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s3-l3', 's1-l7'],
  concepts: ['radiant-heat', 'reflectors', 'long-duration-fire'],
  objectives: [
    'Explain why a fire warms you mainly by **radiation**, and why most of its heat escapes upward.',
    'Use the **inverse-square** intuition — and its limits for long fires — to choose a seating distance.',
    'Design a **reflector** set-up and state honestly what it can and cannot do.',
    'Plan a **long-duration** warming fire and link its output to your body’s heat balance.',
  ],
  explanation: [
    {
      type: 'md',
      md: `In Stage 1 you learned the body’s heat budget: at rest you produce ~80–100 W, and on a cold night you can lose more than that. A fire is an external heat source on the “in” side of that budget. But a campfire of 10 kW or more often leaves your back freezing and your front scorched. Why so little of all that power reaches you — and how to get more of it — is geometry.

### Where a fire’s heat goes

- **Convection (the plume):** most of an open fire’s output — typically well over half — rises as hot gas and smoke. It warms the air *above* the fire, not you, unless you are in an enclosure (which brings carbon-monoxide danger).
- **Radiation:** the rest leaves as infrared, in straight lines, from the flames and glowing coals. This is what warms your hands and face. It passes through cold air without heating it, is blocked by anything in the way, and can be **reflected**.

So for warming a person, what matters is **radiant heat aimed sideways** at you — a large, low glowing surface facing you beats a tall flame.`,
    },
    { type: 'diagram', id: 'radiant-geometry', caption: 'Radiation travels in straight lines, spreads with distance, and can be sent back by a reflector.' },
    {
      type: 'md',
      md: `### Distance: inverse-square, and when it bends

For a **small** fire seen from a distance much greater than its size, radiant heat spreads over an ever-larger sphere, so intensity falls with the **square** of distance: **twice as far, a quarter of the heat.** Moving from 2 m to 1 m quadruples the radiant warmth — and the spark and burn risk.

For a **long** fire (a long-log fire as long as your body) seen from close up, the heat comes from a line rather than a point, and intensity falls closer to **1/distance** — much more gently. That is why a long, low fire gives even warmth along a sleeper’s whole body at a safe distance, while a small round fire makes a hot spot on your knees.

### Reflectors: what they do

A reflector is a surface on the far side of the fire (or behind you) that sends back radiation that would otherwise escape:

- **Behind the fire:** a wall of stacked green logs, a rock face or a boulder, ~0.5–1 m behind the flames and roughly as tall as the fire. Radiation heading away from you hits it and part of it comes back.
- **Behind you:** a rock face, log wall or a lean-to shelter’s back wall catches heat that passes you and re-radiates some of it onto your back. Sitting **between** fire and a reflecting surface is the classic northern set-up.
- **Space blankets / aluminised sheets** reflect infrared very well — but must stay far enough from the fire not to melt, and are best used behind you or as a shelter lining rather than right next to flames.

### Reflectors: their honest limits

- A reflector can at best return the radiation from the **back half** of the fire, so it can, at most, roughly **double** the radiant heat toward you — and real log or rock walls return much less, because they mainly **absorb** heat and re-radiate it slowly (which is still useful: a warm rock wall is a heat store).
- It does nothing for the **convective plume**, which is most of the output.
- **Wind** tilts flames and strips warmth; a reflector wall also works as a windbreak, which is often its biggest benefit.
- Reflectors can trap **smoke** in your face and make an enclosed space; keep the top open, never enclose a fire, and watch for carbon monoxide.

### Heated stones: a caution

Stones warmed at the edge of the fire and wrapped in cloth make excellent bed warmers. But **never heat stones from rivers, lakes or wet ground in the fire**: water trapped inside can turn to steam and make them crack or burst violently. Use dry stones from high ground, heat them at the edge rather than in the flames, and test cautiously.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'Building log reflectors, cutting green wood or moving rocks is prohibited in many protected areas, and long overnight fires may be restricted or banned. In a genuine emergency, protecting life comes first; in practice, use existing fire rings, bring a reflector material, and follow Leave No Trace.',
    },
  ],
  whyItMatters: 'On a cold night, a fire can turn a heat deficit into a surplus — but only if its heat reaches you. The right geometry (low, long, close enough, reflector, windbreak) can deliver several times more useful warmth from the same fuel, which is the difference between a long, cold night and actual rest.',
  science: [
    {
      type: 'md',
      md: `### Radiant flux from a small fire

Treat a small fire as a point source radiating $P_{rad}$ watts equally in all directions. At distance $d$, that power is spread over a sphere of area $4\\pi d^2$, so the radiant flux (power per square metre) is

$$
q = \\frac{P_{rad}}{4 \\pi d^2}
$$

In words: **radiated power, shared over a sphere that grows with the square of distance.**

**Worked example.** A 10 kW fire radiating 30 % → $P_{rad} = 3000$ W.

- At 1.5 m: $q = 3000 / (4\\pi \\times 1.5^2) \\approx 106$ W/m².
- At 1.0 m: $q \\approx 239$ W/m² — roughly a quarter of strong midday sunshine (~1000 W/m²).

If about 0.5 m² of your body faces the fire and absorbs most of it, at 1.5 m you receive about **50 W** — a real contribution against a 100 W night-time deficit, but not the whole answer. Move to 1 m: ~120 W on your front (and more sparks). Add a reflector that returns, say, a third of the back-going radiation, and your share rises by roughly a sixth. This is why **clothing, shelter and ground insulation still do most of the work**; the fire tops up.

### Line source: a long fire

For a long fire of length $\\ell$ viewed from $d \\ll \\ell$, the flux falls roughly as $1/d$ instead of $1/d^2$. Going from 0.8 m to 1.6 m then halves the warmth rather than quartering it, so you can sit or lie at a safer distance and still be warmed along your whole length.

### Link to your heat balance

Stage 1 wrote $S = M - W \\pm R \\pm C \\pm K - E$. A fire changes the radiation term $R$ from a loss (to a cold night sky) into a gain on the side facing it. Your back still radiates to the sky — which is why a roof or reflector behind you, a hat, and a ground bed (to cut conduction $K$) multiply the fire’s effect.`,
    },
    { type: 'sim', id: 'heat-balance', caption: 'Stage 1 lab: set a clear, calm night at −5 °C and see how much a shelter and bed change the balance before the fire even starts.' },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest:** a lean-to shelter facing a long-log fire, with a green-log reflector wall on the far side — the combination taught for northern winter overnights (Kochanski’s “super shelter” idea adds a clear plastic front to trap radiant heat; it needs careful ventilation).

**Desert canyon:** sitting between a small fire and a sun-warmed rock face — the rock re-radiates stored daytime heat and the fire’s heat through the evening.

**Mountain boulder field:** a fire against a big boulder, you on the open side; the boulder shields wind and reflects some heat.

**Coastal dunes:** a driftwood windbreak/reflector against a sea breeze, fire in the lee.

**Tropical highland:** nights of 5–10 °C after wet days: a small fire and a reflector mostly help dry clothing — which, via evaporation, is the biggest heat drain to fix.`,
    },
  ],
  mistakes: [
    'Building a tall fire for warmth — most of its heat rises in the plume.',
    'Sitting too far from a small fire “to be safe” — at 3 m a point-like fire gives you a quarter of the warmth it gives at 1.5 m. Move closer with care, or build a longer fire.',
    'Myth: “A reflector doubles the heat of any fire.” — At best it roughly doubles the radiant part toward you; real log walls return much less, and do nothing for the convective plume.',
    'Placing a space blanket right next to the flames — it melts and can burn.',
    'Heating wet river stones in the fire — they can burst.',
    'Enclosing a fire to trap its heat — smoke, burns and carbon monoxide.',
  ],
  exercises: [
    {
      id: 's3-l7-e1',
      title: 'Measure radiant warmth vs distance',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Legal fire pit', 'Two identical thermometers (e.g., cooking thermometers) with black-painted bulbs or taped black paper', 'Tape measure', 'Water to extinguish'],
      safetyNote: 'Only where fires are explicitly permitted and no fire ban is in force. Keep thermometers and yourself clear of sparks; never place anything plastic close to flames.',
      steps: [
        'With a steady small fire, place the black-bulb thermometer at 1 m, 1.5 m and 2 m in turn, shaded from sun, for 3 minutes each.',
        'Record the rise above air temperature at each distance. Compare the ratios with $1/d^2$.',
        'Stack a low wall of logs or stones behind the fire and repeat at 1.5 m. Estimate the reflector gain.',
        'Extinguish: drown, stir, feel.',
      ],
      success: ['Your readings fall with distance roughly as predicted.', 'You measured (not guessed) the reflector’s effect — often smaller than expected.'],
      skill: 'fire-reflector',
    },
    {
      id: 's3-l7-e2',
      title: 'Plan an overnight warming fire (desk)',
      level: 1,
      safety: 'home',
      minutes: 30,
      steps: [
        'Choose a biome and a night temperature. Pick a lay (long log or star), a burn rate (1–3 kg/h) and a night length.',
        'Compute the fuel budget in kg and in armfuls (~5 kg each).',
        'Sketch the layout: fire, reflector, your bed, the shelter, wind direction, 3 m clearance.',
        'Check it in the Advanced Fire Builder with purpose “overnight”.',
      ],
      success: ['A fuel budget and a sketch that respects safety clearances.', 'A sim score above 60 for your chosen layout.'],
    },
  ],
  simulations: ['fire-advanced'],
  quiz: [
    {
      id: 's3-l7-q1',
      kind: 'single',
      prompt: 'You move from 2 m to 1 m from a small campfire. Roughly how does the radiant heat on your face change?',
      choices: [
        { id: 'a', text: 'It doubles.', why: 'That would be a 1/d law (a long line source).' },
        { id: 'b', text: 'It roughly quadruples.', why: 'Correct: inverse-square for a small (point-like) fire.' },
        { id: 'c', text: 'No change; air temperature is the same.', why: 'Radiation does not depend on air temperature.' },
        { id: 'd', text: 'It halves.', why: 'Closer means more, not less.' },
      ],
      answer: 'b',
      concepts: ['radiant-heat'],
      explanation: 'Half the distance, a quarter of the area over which the heat spreads: about 4× the flux.',
    },
    {
      id: 's3-l7-q2',
      kind: 'numeric',
      prompt: 'A fire radiates 2,500 W. Using $q = P/(4\\pi d^2)$, what is the radiant flux at **1.2 m** in W/m²? (Nearest whole number.)',
      unit: 'W/m²',
      answer: 138,
      tolerance: 3,
      concepts: ['radiant-heat'],
      explanation: '4π × 1.44 ≈ 18.1 m²; 2500 ÷ 18.1 ≈ **138 W/m²**.',
    },
    {
      id: 's3-l7-q3',
      kind: 'multi',
      prompt: 'Which statements about reflectors are true?',
      choices: [
        { id: 'a', text: 'They can return part of the radiation heading away from you.', why: 'Yes.' },
        { id: 'b', text: 'They capture the convective plume.', why: 'No — hot gas rises regardless.' },
        { id: 'c', text: 'A log or rock wall also acts as a windbreak, which may be its biggest benefit.', why: 'Yes.' },
        { id: 'd', text: 'At best they roughly double the radiant heat toward you; real walls return much less.', why: 'Yes.' },
        { id: 'e', text: 'A space blanket works best touching the flames.', why: 'No — it melts. Keep it well clear.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['reflectors'],
      explanation: 'Reflectors are a real but modest gain; combine with windbreak, shelter and insulation.',
    },
    {
      id: 's3-l7-q4',
      kind: 'single',
      prompt: 'Why does a long-log fire warm a lying person more evenly than a small round fire?',
      choices: [
        { id: 'a', text: 'It burns hotter.', why: 'Not necessarily.' },
        { id: 'b', text: 'It is a line source along the body: flux falls more like 1/d than 1/d², and it covers the whole length.', why: 'Correct.' },
        { id: 'c', text: 'It makes less smoke.', why: 'Irrelevant to evenness.' },
        { id: 'd', text: 'Long logs contain more resin.', why: 'No.' },
      ],
      answer: 'b',
      concepts: ['radiant-heat', 'long-duration-fire'],
      explanation: 'Geometry: a long source seen from close up spreads heat evenly along you.',
    },
    {
      id: 's3-l7-q5',
      kind: 'truefalse',
      prompt: 'Stones from a river bed are ideal for heating in the fire as bed warmers.',
      answer: false,
      concepts: ['fire-safety'],
      explanation: 'Wet or porous stones can crack or burst as trapped water turns to steam. Use dry stones from high ground, warmed at the fire’s edge.',
    },
    {
      id: 's3-l7-q6',
      kind: 'single',
      prompt: 'Clear night, −5 °C, calm. You have a small fire, a tarp and a pile of spruce boughs. Which combination gives the biggest improvement in your heat balance?',
      choices: [
        { id: 'a', text: 'Bigger fire, sit on bare ground in front of it.', why: 'Conduction into the ground and radiation from your back to the sky continue.' },
        { id: 'b', text: 'Thick bough bed, tarp as a lean-to behind you, fire in front at a safe distance.', why: 'Correct: cuts conduction and back radiation; the fire tops up the front.' },
        { id: 'c', text: 'Fire only, standing to keep moving.', why: 'Tiring and only warms one side.' },
        { id: 'd', text: 'Tarp wrapped around you and the fire together.', why: 'Enclosed fire: burns, melting tarp and carbon monoxide.' },
      ],
      answer: 'b',
      concepts: ['heat-balance', 'reflectors', 'ground-insulation'],
      explanation: 'Fix the big losses first (conduction, back radiation), then add the fire’s radiant gain.',
    },
  ],
  scenario: {
    id: 's3-l7-sc',
    setup: 'Mountain forest, 0 °C, light wind, 18:00. You are uninjured but benighted with a partner who has a sprained ankle. You have a tarp, a knife, a lighter and plenty of dead standing wood; fires are legal. Your partner is shivering in damp layers.',
    question: 'Which set-up do you build?',
    choices: [
      { id: 'a', text: 'A big teepee fire in a clearing, both of you sitting 3 m away on packs.', why: 'Most heat goes up; at 3 m little radiation reaches you; ground and back losses continue.' },
      { id: 'b', text: 'Tarp as a lean-to with its open side facing a long, low fire 1–1.5 m away; a log reflector wall beyond the fire; a thick bough bed; damp layers drying on a line (not too close).', why: 'Best: heat aimed at you, back protected, conduction cut, wet layers dried.' },
      { id: 'c', text: 'Tarp closed around you both with a small fire inside for maximum warmth.', why: 'Enclosed fire: CO poisoning and fire risk.' },
      { id: 'd', text: 'No fire; sit back to back until morning.', why: 'Better than nothing, but a legal, safe fire is a big gain with a hypothermic partner.' },
    ],
    best: 'b',
    debrief: 'Geometry and heat balance together: a lean-to open to a long, low fire puts radiant heat along both bodies; the reflector and tarp cut back losses and wind; the bed cuts conduction; drying clothes removes the evaporative drain. Keep the fire open and ventilated.',
    concepts: ['radiant-heat', 'reflectors', 'heat-balance'],
  },
  summary: [
    'Fires warm people by radiation; most output rises in the convective plume.',
    'Small fire: flux ∝ 1/d² (half the distance, 4× the heat). Long fire up close: ≈ 1/d — even warmth at a safer distance.',
    'Reflectors return part of the back-going radiation (at best ~2×, usually far less) and block wind; never enclose a fire.',
    'Fire tops up a heat balance already improved by clothing, shelter and a ground bed. Budget fuel for the whole night.',
  ],
  furtherReading: ['kochanski-bushcraft', 'parsons-thermal', 'usariem-cold'],
  references: ['kochanski-bushcraft', 'parsons-thermal', 'usariem-cold', 'drysdale-fire-dynamics', 'lnt-principles'],
}
