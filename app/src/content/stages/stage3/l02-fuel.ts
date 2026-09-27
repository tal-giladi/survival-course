import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's3-l2',
  stage: 3,
  order: 2,
  title: 'Tinder, kindling and fuel selection',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s3-l1'],
  concepts: ['fuel-selection', 'surface-to-volume', 'moisture-content'],
  objectives: [
    'Name reliable **natural tinders** for at least five biomes and explain what makes each work.',
    'Carve a **feather stick** and explain it as a way to manufacture surface area from dry wood.',
    'Compare **hardwood and softwood** by density, energy per armful, flame, sparks and coals.',
    'Find **dead standing wood** and test dryness with the snap test before you carry it.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Lesson 1 gave you the rule: **fine and dry lights; thick and wet does not.** Fuel selection is applying that rule to whatever the landscape offers — which changes completely between a boreal forest, a desert wash and a rainforest.

### Tinder: what makes it work

Good tinder has three properties: **very fine fibres** (huge surface-to-volume), **low moisture**, and ideally **oils, resins or waxes** that burn hot and shed water. Anything with all three lights from a spark; anything with two lights from a flame.`,
    },
    {
      type: 'table',
      head: ['Biome', 'Reliable natural tinders', 'Notes'],
      rows: [
        ['Boreal / temperate forest', 'Birch bark (paper-thin outer layers), fatwood scrapings, dry conifer twigs (“pencil-lead” size), cedar or juniper inner bark shredded fine', 'Birch bark’s oils (betulin) let it burn when damp. Take bark only from dead or fallen trees.'],
        ['Wetlands, lake shores', 'Cattail (bulrush) seed fluff, dry reed and grass tops', 'Cattail fluff flares almost instantly — mix it with something that burns longer.'],
        ['Grassland, savanna, steppe', 'Dry grass rubbed into a fine nest, seed heads, dried dung (well-dried herbivore dung)', 'Grass burns for seconds: gather a lot and have kindling ready.'],
        ['Desert', 'Shredded dead yucca/agave fibres, dry shrub bark, dead cactus skeleton fibres', 'Very dry, but scarce — collect as you walk.'],
        ['Tropical', 'Dry coconut husk fibre, palm “burlap” fibre, bamboo shavings, termite-nest dust (dry)', 'Everything is damp: carry tinder, keep it sealed.'],
        ['Mountain / alpine', 'Dead conifer twigs from under the canopy, dry lichens (sparingly), bark shreds', 'Above tree line there may be no fuel at all — carry a stove.'],
        ['Carried (any biome)', 'Cotton wool + petroleum jelly, commercial tinder tabs, wax-soaked cardboard, fatwood sticks', 'Your insurance. One ball can burn for minutes.'],
      ],
      caption: 'Tinder by biome. Collect as you walk — searching at dusk in rain is the worst time to start.',
    },
    {
      type: 'md',
      md: `### Kindling: the rung most people run short of

Kindling bridges a flame that lasts seconds to fuel that needs minutes. In practice you want **far more pencil-lead and pencil-thick kindling than feels necessary** — two big double-handfuls is a sensible minimum.

**Best sources:** dead twigs still attached to trees (they snap cleanly), especially the lower, shaded dead branches of conifers (sometimes called “squaw wood” in older North American texts); splits from larger dead wood; **feather sticks**.

### Feather sticks: manufactured surface area

A feather stick is a dry stick (often a split from the dry core of a larger piece) with many thin curls shaved down it and **left attached**. Each curl is a tiny piece of tinder; the stick is the kindling behind it. It is how you turn one dry-cored piece of wood into a complete fuel ladder in wet weather.

Technique, briefly: lock your wrist, keep the blade angle shallow, push the knife down the stick with your body (not your arm), and **stop before the curl breaks off**. Cut away from your body and legs, with a clear space around you.

### Fuel: hardwood vs softwood

Per **kilogram**, dry woods hold surprisingly similar energy (~18–20 MJ/kg; resinous softwoods at the top end). The differences are in **density** and **behaviour**:`,
    },
    {
      type: 'table',
      head: ['', 'Softwoods (pine, spruce, fir, cedar)', 'Hardwoods (oak, maple, beech, birch, acacia)'],
      rows: [
        ['Typical dry density', '~350–500 kg/m³', '~550–750+ kg/m³'],
        ['Energy per armful (same volume)', 'Lower', 'Often 1.3–1.6× more'],
        ['Lighting', 'Easy; resin helps', 'Slower; needs a hot base'],
        ['Flame and smoke', 'Tall, fast flame; more sparks and soot (resin)', 'Steadier flame, fewer sparks'],
        ['Coals', 'Few, short-lived', 'Long-lasting coal bed — ideal for cooking and overnight'],
        ['Best use', 'Starting fires, quick heat, signal flare-ups', 'Sustained heat, cooking, overnight'],
      ],
    },
    { type: 'diagram', id: 'surface-volume', caption: 'The whole ladder is surface-to-volume management: tinder at the left, fuel at the right.' },
    {
      type: 'md',
      md: `### Dead standing wood and the snap test

Wood lying on the ground wicks water from the soil and stays wet; **dead wood held off the ground** — standing dead trees (“snags”), dead branches still on trees, wood caught above the ground — dries in the wind.

- **Snap test:** dead dry wood breaks with a sharp *crack*. If it bends, it is green or wet. If it crumbles, it is punky (rotten) — poor fuel that smoulders.
- **Weight test:** dry wood feels light for its size.
- **Bark test:** bark falling away and grey, checked (cracked) ends suggest a long-dead, dry piece.
- **Safety:** large snags can fall without warning (“widowmakers”). Never camp under them, and never try to fell one with a knife or small saw.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Collecting wood is regulated too',
      md: 'Many parks and reserves ban collecting any wood (dead or alive), stripping bark, or cutting live trees; some allow only “dead and down” wood of wrist size or smaller. Lichens and mosses grow slowly and may be protected. Check the land manager’s rules — the References page lists portals by country.',
    },
  ],
  whyItMatters: 'Fire-making fails far more often at the collecting stage than at the striking stage. If you can walk into any biome and quickly name its best tinder, find dry kindling in quantity and choose fuel that matches your purpose, the ignition becomes the easy part.',
  science: [
    {
      type: 'md',
      md: `### Energy per armful

Energy in a volume of wood is density × energy per kg. Compare 0.02 m³ (a small armful) of dry pine at 450 kg/m³ and dry oak at 700 kg/m³, both at 15 % moisture (net ≈ 15.4 MJ/kg):

- Pine: $0.02 \\times 450 = 9$ kg → $9 \\times 15.4 \\approx 139$ MJ
- Oak: $0.02 \\times 700 = 14$ kg → $14 \\times 15.4 \\approx 216$ MJ

Same armful, about **55 % more energy** from the oak — and it burns longer because dense wood pyrolyses more slowly. That is why softwood starts fires and hardwood keeps them.

### Why oils and resins help

Resin (in fatwood) and betulin (in birch bark) are hydrocarbons with higher energy per kilogram than cellulose, and they are **hydrophobic**: they shed water and vaporise easily when heated, giving a hot, persistent flame even when the material is damp. Petroleum jelly on cotton works the same way: the cotton is a wick; the jelly is the fuel.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Scandinavian forest, winter:** birch bark from a fallen birch, dead spruce twigs from the lower trunk, split dead pine for fuel — the classic northern combination.

**Sonoran desert:** shredded dead yucca leaves and dry grass for tinder, dead mesquite twigs for kindling, dead ironwood or mesquite branches for long-burning fuel. Everything is dry; gathering enough is the work.

**Temperate rainforest (Pacific Northwest, New Zealand, Patagonia):** carried tinder, feather sticks from split dead cedar or beech, and dead branches off the ground. Western red cedar inner bark, shredded and dried in a pocket, is superb tinder.

**Tropical Southeast Asia:** dry coconut husk fibre, dead bamboo split into shavings (never heat whole sealed sections), dead palm fronds held off the ground.

**African savanna:** dry grass nest, dried herbivore dung as slow fuel, dead acacia (dense, hot, thorny — handle with gloves).

**Farmland / rural hedgerow:** dead hedge wood, dry straw (lights instantly, burns out in seconds). Always ask permission.`,
    },
  ],
  mistakes: [
    'Collecting tinder only when you need fire — collect it as you walk, especially before rain.',
    'Gathering one small handful of kindling; the fire dies between tinder and fuel.',
    'Picking up wood from the ground in wet weather instead of snapping dead branches off trees.',
    'Stripping bark from living birch trees — it scars and can kill them, and is illegal in many places. Use dead or fallen trees.',
    'Myth: “Green wood makes a good long-burning fire.” — It burns cool and smoky; a long burn comes from dense, dry hardwood.',
    'Knocking or pushing on large dead standing trees to collect wood — they can snap and fall.',
  ],
  exercises: [
    {
      id: 's3-l2-e1',
      title: 'Tinder by biome — field collection',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Zip-lock bags', 'Notebook', 'Local rules on collecting natural materials'],
      steps: [
        'On a walk where collecting is allowed, gather five different natural tinders and five kindling sources.',
        'Label each with where you found it (ground / off the ground / standing dead).',
        'At home, let them dry a day and rank them by fineness, dryness and resin/oil content.',
        'Later, test them with a ferro rod in a legal fire pit (lesson 5).',
      ],
      success: ['Five tinders identified and labelled.', 'You can say which would still work after a day of rain, and why.'],
      skill: 'fire-prep',
      safetyNote: 'Only collect where it is allowed; take dead material only; never strip living bark.',
    },
    {
      id: 's3-l2-e2',
      title: 'Carve three feather sticks',
      level: 3,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Fixed-blade knife', 'Dry softwood splits (thumb thickness)', 'Gloves on the holding hand (optional)'],
      safetyNote: 'Carve seated, blade moving away from your body and legs, with a clear “blood circle” (arm’s length plus knife) around you. Children only with an adult.',
      steps: [
        'Brace the stick’s end on a log or the ground, angled away from you.',
        'Lock your wrist and push down with your body to shave long, thin curls; stop before each one detaches.',
        'Make 10–20 curls per stick. Aim for curls thin enough to see light through.',
        'Test: can a lighter flame (in a legal fire pit) light the curls directly?',
      ],
      success: ['Three sticks with a dense tuft of attached curls.', 'At least one lights from a single lighter flame.'],
      skill: 'wet-fire',
    },
  ],
  simulations: ['fire-advanced'],
  quiz: [
    {
      id: 's3-l2-q1',
      kind: 'single',
      prompt: 'Why does birch bark light even when damp?',
      choices: [
        { id: 'a', text: 'It contains oily, water-repellent compounds (betulin) and peels into thin layers.', why: 'Correct: fine sheets plus a hydrophobic, energy-rich fuel.' },
        { id: 'b', text: 'It is always dry inside.', why: 'Bark can be soaked; its oils are what help.' },
        { id: 'c', text: 'It has a low ignition temperature because it is white.', why: 'Colour is not the reason.' },
        { id: 'd', text: 'It contains more oxygen than wood.', why: 'Not the mechanism.' },
      ],
      answer: 'a',
      concepts: ['fuel-selection'],
      explanation: 'Fineness + oils. Take it from dead or fallen birches only.',
    },
    {
      id: 's3-l2-q2',
      kind: 'numeric',
      prompt: 'An armful of dry oak (700 kg/m³) and one of dry pine (450 kg/m³) have the same volume. How many times more **mass** (and roughly energy) does the oak armful have? (Two decimals.)',
      unit: '×',
      answer: 1.56,
      tolerance: 0.03,
      concepts: ['fuel-selection'],
      explanation: '700 ÷ 450 ≈ **1.56**. Energy per kg is similar, so energy per armful scales with density.',
    },
    {
      id: 's3-l2-q3',
      kind: 'multi',
      prompt: 'Which are signs of good, dry fuel wood?',
      choices: [
        { id: 'a', text: 'It snaps with a sharp crack.', why: 'Yes — dry and sound.' },
        { id: 'b', text: 'It bends before breaking.', why: 'No — green or wet.' },
        { id: 'c', text: 'It was held off the ground (standing dead or hung up).', why: 'Yes — wind-dried, not soaking up ground moisture.' },
        { id: 'd', text: 'It crumbles in your hand.', why: 'No — punky, smoulders and makes smoke.' },
        { id: 'e', text: 'It feels light for its size.', why: 'Yes — little water.' },
      ],
      answer: ['a', 'c', 'e'],
      concepts: ['fuel-selection', 'moisture-content'],
      explanation: 'Snap, weight and position off the ground are quick, reliable dryness checks.',
    },
    {
      id: 's3-l2-q4',
      kind: 'single',
      prompt: 'You need a fire to cook for an hour with even heat. Which fuel plan is best?',
      choices: [
        { id: 'a', text: 'Softwood only: it lights easily.', why: 'Good starter, but few coals — heat will surge and sag.' },
        { id: 'b', text: 'Start with softwood kindling, then feed dry hardwood to build a coal bed.', why: 'Correct: easy start, then long-lasting, even coals.' },
        { id: 'c', text: 'Green hardwood: it burns slowly.', why: 'Slow because it is wet — cool, smoky, frustrating.' },
        { id: 'd', text: 'Punky wood: it smoulders for hours.', why: 'Smoulder is not cooking heat.' },
      ],
      answer: 'b',
      concepts: ['fuel-selection', 'fire-purpose'],
      explanation: 'Softwood to start, hardwood to sustain and to make coals.',
    },
    {
      id: 's3-l2-q5',
      kind: 'truefalse',
      prompt: 'A feather stick works because the attached curls add surface area while the stick itself acts as kindling behind them.',
      answer: true,
      concepts: ['surface-to-volume', 'fuel-selection'],
      explanation: 'It is a self-contained mini-ladder: fine curls → thin shavings → the stick.',
    },
  ],
  scenario: {
    id: 's3-l2-sc',
    setup: 'Late afternoon in a mixed temperate forest after two days of rain. You are on an unplanned overnight with a knife, a lighter and no carried tinder. Fires are permitted. You passed a fallen birch, a large dead standing pine with a broken top, and plenty of wet leaves.',
    question: 'What do you collect first?',
    choices: [
      { id: 'a', text: 'Dry-looking leaves from the top of the leaf litter as tinder.', why: 'Leaf litter after rain is wet under the surface and makes smoke.' },
      { id: 'b', text: 'Bark from the fallen birch; dead twigs snapped from lower branches of the conifers; a thigh-thick dead branch to split for feather sticks.', why: 'Best: oily tinder, off-the-ground kindling, and a dry core to manufacture the rest.' },
      { id: 'c', text: 'Push over the dead pine to get dry wood.', why: 'Dangerous — dead standing trees can snap and fall on you.' },
      { id: 'd', text: 'Cut live green branches; they are not rotten.', why: 'Too wet and often illegal.' },
    ],
    best: 'b',
    debrief: 'Start with the material that works when damp (birch bark), then kindling that has been drying in the wind (dead twigs on trees), then a dry core you can process into feather sticks and splits. Leave widowmakers alone: a broken-topped dead tree is a hazard, not a woodpile.',
    concepts: ['fuel-selection', 'moisture-content'],
  },
  summary: [
    'Tinder = fine + dry + (ideally) oily or resinous. Know your biome’s best tinders and carry your own.',
    'Collect far more pencil-lead and pencil kindling than you think; feather sticks make kindling from dry cores.',
    'Softwood starts fires; dense hardwood sustains them and makes coals (~1.3–1.6× energy per armful).',
    'Dead and off the ground; snap test; never under or pushing on dead standing trees; follow collection rules.',
  ],
  furtherReading: ['kochanski-bushcraft', 'fpl-wood-handbook'],
  references: ['kochanski-bushcraft', 'fpl-wood-handbook', 'army-atp-3-50-21', 'iol-bushcraft', 'lnt-principles'],
}
