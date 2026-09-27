import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's7-l3',
  stage: 7,
  order: 3,
  title: 'Containers and baskets',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s7-l1'],
  concepts: ['bark-containers', 'weaving', 'stone-boiling', 'primitive-food-prep', 'harvest-law'],
  objectives: [
    'Fold a **bark container** that respects the grain, and explain why bark bends one way and splits the other.',
    'Describe the main **basketry structures** (plain weave, twining, coiling) and why soaking makes material workable.',
    'Explain **boiling without metal**: why a wet bark pot does not burn, and how to size **stone boiling** with an energy balance.',
    'Use primitive containers to treat water to a real **rolling boil**, safely.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Containers are a bushcraft force multiplier: you cannot carry water, gather food, boil, or store tinder without them. Metal and plastic are best, so carry them. When they are missing, **bark, wood, woven plant material and hot stones** have held and boiled water for thousands of years.

### Bark: a sheet material with a grain

Tree bark behaves like a natural plywood with all its fibers running one way. **Across the grain it bends easily; along the grain it splits.** A container works when the grain runs **around** the vessel, not up its sides.

- **Birch** (paper birch in North America, silver/downy birch in Eurasia) is the classic: flexible, waterproof (it contains betulin, a waxy compound), and rot-resistant. The outer bark peels from **dead, fallen trees** long after the wood has rotted. Take it from those.
- **Elm, cedar, basswood, tulip poplar and many tropical barks** peel in spring and early summer when the sap runs. They make good containers but are thicker.
- In the tropics, **bamboo sections**, coconut shells, gourds and big leaves (banana, heliconia) are ready-made containers and cooking wraps.

**The folded bark container:** cut a rectangle with the grain running lengthwise. Score a lens (pointed ellipse) on the **inner** face, touching the long edges. Warm the bark over a fire if it is stiff (this softens it), then fold the ends up along the score and pin each folded end with a split stick. The lens shape lets the base stay flat while the sides rise. A split-root or cordage rim hoop stiffens the top, and pine pitch (Lesson 6) seals seams.`,
    },
    { type: 'diagram', id: 's7-bark-container', caption: 'Folded bark container: score a lens across the grain, fold up the ends, pin them.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Bark harvesting and the law',
      md: 'Peeling bark from a **living** tree can kill it (ring-barking), invites disease, and leaves a scar for decades. It is prohibited in most parks and reserves, and on private land without permission. Use bark from fallen or lawfully felled trees. Birch outer bark peeled from logs that are already dead does no harm. Fires to heat stones need a legal fire site and no fire ban in force (Stage 3). Rules vary: check with the land manager.',
    },
    {
      type: 'md',
      md: `### Weaving: stiffness from friction and interlocking

A basket is a structure of **stakes** (stiff, the skeleton) and **weavers** (pliable, the skin):

- **Plain (over-under) weave:** each weaver passes over one stake and under the next, alternating each row. A round basket uses an **odd** number of stakes so a single continuous weaver alternates automatically.
- **Twining:** two weavers twist around each other between stakes, locking each stake in place. Twining is tight, strong, and can be made nearly watertight with fine material. It is also used for mats and fish traps.
- **Coiling:** a bundle of grass or split material is spiralled and stitched to the row below. This gives the densest, strongest baskets. Tightly coiled baskets, sealed with pitch, have held water for boiling.

**Why soak?** Dry willow, grass and bark are brittle. Water softens the hemicellulose and lignin that bind the cell walls, so the material bends without cracking. This is the same effect that makes wet fiber knot better (Lesson 1). Dry material in the basket then shrinks slightly and tightens the weave.

### Boiling without metal

Two methods work, and both rest on simple heat physics.

**1. A wet container over coals.** Water cannot get hotter than about 100 °C at sea level. Where bark or wood is **wetted on the inside**, the water keeps it near 100 °C, well below the 250–350 °C at which wood pyrolyses and ignites (Stage 3). The container survives as long as flames stay **below the water line** and the pot never boils dry. You can show this with a paper cup of water over a candle. The catch is that bark is an insulator, so heat trickles in slowly: expect **roughly an hour per litre** over coals.

**2. Stone boiling.** Heat dense stones in the fire, lift them with tongs, shake off the ash, and drop them into water held in a bark, wood, hide or woven container, or a pit lined with a tarp or clay. Each stone gives up its stored heat within seconds to tens of seconds. It is fast, and it works with containers that could never go near a flame.`,
    },
    { type: 'diagram', id: 's7-stone-boiling', caption: 'Energy balance: about 3 kg of stones at 500 °C bring 2 L of water to the boil, with losses.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Stones can explode',
      md: '**Never heat stones taken from a river, lake or wet ground.** Water in their pores flashes to steam and can burst them violently. Also avoid layered rock (slate, shale), which splits apart, and glassy stone (flint, obsidian, quartz), which shatters from thermal shock. Use dry, dense, fine-grained stones from higher ground. Wear eye protection, heat them in a ring rather than under the fire’s centre, keep people back, and use long tongs (a split green stick) instead of fingers.',
    },
    {
      type: 'md',
      md: `### Treat water properly

Boiling kills pathogens only if you get a **rolling boil**. Current guidance (CDC) is a rolling boil for **1 minute**, or **3 minutes above about 2,000 m**. With stones, add them in batches until the water rolls, then keep adding stones to hold the boil for the full time. Let ash and grit settle, or pour through cloth. A stone-boiled drink tastes of smoke, but it is safe from microbes. Boiling does **not** remove chemical contamination (Stage 4).

### Primitive cooking

The same containers and stones cook food: stews by stone boiling, **stone griddles** (a flat, dry stone propped over coals), **earth ovens** (a pit of hot stones and green leaves, covered with soil, steaming for hours), and **leaf-wrapped steaming** in coals. Food-safety rules still apply (Stage 6): cook meat and fish through, and do not rely on smoke or drying alone.`,
    },
  ],
  whyItMatters: 'Without a pot you cannot reliably boil water, and unsafe water can disable you in days (Stage 4). A folded bark container takes about 15 minutes. A stone-boiling setup turns any watertight vessel into a kettle. Knowing the physics lets you judge how many stones, how long, and which stones not to use. That is the difference between treated water and a face full of rock fragments.',
  science: [
    {
      type: 'md',
      md: `### How many stones?

The heat stones give up must equal the heat the water gains (plus losses):

$$
m_s c_s (T_s - T_f) \\cdot \\eta = m_w c_w (T_f - T_w)
$$

$m$ is mass (kg), $c$ is specific heat (water 4.18, typical rock about 0.8 kJ/(kg·°C)), $T_s$ is the stone temperature, $T_w$ the starting water temperature, $T_f$ the final temperature, and $\\eta$ the fraction of stone heat that actually reaches the water (the rest heats the container and air or escapes as steam; $\\eta \\approx 0.7$).

**Worked example.** Bring 2 L (2 kg) of water from 15 °C to 100 °C:

- Water needs $2 \\times 4.18 \\times 85 \\approx 710$ kJ.
- Stones at about 500 °C (dull red in the dark) cooling to 100 °C give $0.8 \\times 400 = 320$ kJ per kg.
- Ideal: $710/320 \\approx 2.2$ kg. With $\\eta = 0.7$: $2.2/0.7 \\approx$ **3.2 kg of stones**, about six fist-sized stones, added in batches.

Water has about **five times** the specific heat of rock, which is why you need more stone than water by mass.

### How fast do stones give up heat?

Heat leaves a stone at a rate $\\dot Q = hA\\,\\Delta T$, where $h$ is the heat-transfer coefficient (very high in boiling water, about 1,000–5,000 W/(m²·°C)), $A$ is surface area and $\\Delta T$ is the temperature difference. The time constant is $\\tau = m c / (h A)$. For a 0.5 kg stone (radius about 3.5 cm, area about 0.015 m²) with $h \\approx 1{,}500$: $\\tau \\approx (0.5 \\times 800)/(1{,}500 \\times 0.015) \\approx 17$ s. **Most of the heat transfers within a minute**, with a loud hiss. Smaller stones transfer faster (more surface per mass, as in Stage 3) but cool more on the way from fire to pot.

### Why the bark pot is slow

Heat must conduct through the bark wall. The rate is $q = k \\Delta T / t$, where $k$ is thermal conductivity, $\\Delta T$ the temperature difference across the wall and $t$ the wall thickness. Bark has $k \\approx 0.1$ W/(m·°C). Take a 2 mm wall whose outside is about 200 °C (hotter and it starts to char) and whose inside is 100 °C: $q \\approx 0.1 \\times 100 / 0.002 = 5{,}000$ W/m². Over a 0.02 m² base that is **about 100 W**. Heating 1 L from 15 °C needs about 356 kJ, so $356{,}000/100 \\approx 3{,}600$ s, **about an hour**. A steel pot conducts about 500× better; its limit is the fire, not the wall.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest:** birch-bark containers, pinned or sewn with split spruce root, sealed with pitch. Traditional northern peoples used such vessels for berries, water and even boiling (by stones or directly over coals).

**Temperate forest (Europe, East Asia, North America):** willow and hazel for plain-weave and twined baskets; lime (basswood) bark for containers in early summer, where you have permission to harvest.

**Tropical:** a bamboo section is a ready-made pot. Split one wall open lengthwise or cut above a node, fill with water or food, and set it at the edge of coals. Green bamboo survives because the water inside keeps it cool. **Never put a sealed bamboo section in a fire**: trapped air and steam make it burst. Coconut shells and big leaves serve as bowls and cooking wraps.

**Desert:** few barks, but yucca and agave leaves weave into mats and coiled baskets. A pit lined with a tarp or plastic bag, with stones heated in the fire, gives stone-boiled water where fuel is scarce and precious.

**Coastal:** shells serve as scoops and bowls. Driftwood burned into a hollow with coals and scraped makes a trough for stone boiling.

**Urban/disaster:** you are unlikely to need bark, but the physics transfers. A clean metal tin, a glass jar heated gently in a water bath, or a heat-resistant plastic container with hot stones can all heat water when the power is out.`,
    },
  ],
  mistakes: [
    'Peeling bark from living trees (can kill the tree; often illegal) when dead birch logs are nearby.',
    'Folding bark along the grain, so it splits.',
    'Heating wet river stones, which can burst violently.',
    'Letting flames reach above the water line of a bark or bamboo pot, or letting it boil dry.',
    'Stopping as soon as the water first steams. Microbial safety needs a rolling boil for 1 minute (3 minutes above ~2,000 m).',
    '"Stone-boiled water is sterile because it’s been in fire." (Myth.) Only the temperature and time it reaches count, and ash and grit still need settling.',
    'Putting a closed bamboo section in the fire, where trapped steam makes it burst.',
  ],
  exercises: [
    {
      id: 's7-l3-e1',
      title: 'Fold a container: card first, bark second',
      level: 3,
      safety: 'home',
      minutes: 45,
      materials: ['A sheet of thin card (cereal box)', 'Knife or scissors', 'Clothes-pegs or split sticks', 'Later: outer bark from a fallen birch, collected with permission'],
      steps: [
        'Cut a 30 × 20 cm rectangle of card. Mark a lens shape touching the long edges and score it lightly.',
        'Fold the ends up along the score and pin them. Note how the base stays flat.',
        'Repeat with birch bark from a fallen log: grain lengthwise, lens scored on the inner face, warm the bark over a flame (away from the flame, not in it) if it is stiff.',
        'Add a rim hoop of cord or split root, fill it with water and check for leaks.',
      ],
      success: ['The container stands on its own and holds 0.5 L without leaking for 10 minutes.', 'You can explain why the grain runs around the container.'],
      skill: 'bark-container',
    },
    {
      id: 's7-l3-e2',
      title: 'Stone-boil water to a rolling boil',
      level: 3,
      safety: 'supervised',
      minutes: 90,
      materials: ['Legal fire pit and permission', '6–8 dry, dense fist-sized stones from high ground (not a stream bed)', 'Container: bark, wooden bowl, or a pit lined with a tarp', 'Green-stick tongs', 'Safety glasses', 'Thermometer (optional)', 'Water to extinguish'],
      safetyNote: 'Supervised: hot stones can burst and cause burns. Wear safety glasses, keep bystanders 2 m back, and never use river or layered stones. Only where fires are legal.',
      steps: [
        'Heat stones at the edge of the fire for 30–45 minutes.',
        'Predict how many stones you need for your volume using the energy balance.',
        'Transfer stones one at a time with tongs, shaking off ash. Count the stones until the water reaches a rolling boil, then hold the boil for 1 minute (3 minutes above ~2,000 m).',
        'Compare your stone count with your prediction and estimate η.',
        'Extinguish the fire fully: drown, stir, feel.',
      ],
      success: ['Water reached a rolling boil held for the required time.', 'No stone burst (you chose stones correctly).', 'You estimated your efficiency η.'],
      skill: 'water-treatment',
    },
  ],
  quiz: [
    {
      id: 's7-l3-q1',
      kind: 'numeric',
      prompt: 'You want to heat **1 L** of water from 10 °C to 100 °C with stones at 500 °C (c = 0.8 kJ/(kg·°C)), with η = 0.7. Water c = 4.18 kJ/(kg·°C). How many **kg** of stones? (One decimal.)',
      unit: 'kg',
      answer: 1.7,
      tolerance: 0.15,
      concepts: ['stone-boiling'],
      explanation: 'Water: 1 × 4.18 × 90 = 376 kJ. Stone: 0.8 × 400 = 320 kJ/kg × 0.7 = 224 kJ/kg. 376/224 ≈ **1.7 kg**, about three or four fist-sized stones.',
    },
    {
      id: 's7-l3-q2',
      kind: 'single',
      prompt: 'Why does a birch-bark pot of water sitting on coals not burn through?',
      choices: [
        { id: 'a', text: 'Birch bark is fireproof', why: 'No: dry birch bark is one of the best tinders there is.' },
        { id: 'b', text: 'Water holds the wetted bark near 100 °C, far below the ~250–350 °C where wood pyrolyses and ignites', why: 'Correct: the water is a heat sink, as long as flames stay below the water line and it never boils dry.' },
        { id: 'c', text: 'The coals are not hot enough to burn bark', why: 'Coals are far hotter than bark’s ignition temperature.' },
        { id: 'd', text: 'Steam puts out the fire', why: 'Not at this scale.' },
      ],
      answer: 'b',
      concepts: ['bark-containers', 'combustion'],
      explanation: 'The Stage 3 combustion stages explain it: wood must reach pyrolysis temperature to burn, and wet wood cannot go above ~100 °C until it dries.',
    },
    {
      id: 's7-l3-q3',
      kind: 'multi',
      prompt: 'Which stones should you **not** heat for stone boiling?',
      choices: [
        { id: 'a', text: 'Rounded stones from a stream bed', why: 'Correct: water trapped in their pores flashes to steam and can burst them.' },
        { id: 'b', text: 'Layered slate or shale', why: 'Correct: it splits apart along its layers.' },
        { id: 'c', text: 'Flint or obsidian', why: 'Correct: glassy stones shatter from thermal shock into sharp fragments.' },
        { id: 'd', text: 'Dry, dense, fine-grained stones from a hillside', why: 'These are the ones to use.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['stone-boiling'],
      explanation: 'Choose dry, dense, unlayered stones and still wear eye protection.',
    },
    {
      id: 's7-l3-q4',
      kind: 'single',
      prompt: 'You make a round basket with a single continuous weaver in plain weave. How many stakes?',
      choices: [
        { id: 'a', text: 'An even number', why: 'A single weaver would then pass over the same stakes every round, and the weave would not lock.' },
        { id: 'b', text: 'An odd number', why: 'Correct: the over-under alternation shifts one stake each round.' },
        { id: 'c', text: 'It does not matter', why: 'It matters for a single weaver; with two weavers or twining an even number works.' },
        { id: 'd', text: 'Exactly 12', why: 'No magic number.' },
      ],
      answer: 'b',
      concepts: ['weaving'],
      explanation: 'An odd count makes the pattern alternate automatically round after round.',
    },
    {
      id: 's7-l3-q5',
      kind: 'truefalse',
      prompt: 'Once stone-boiled water starts steaming, it is safe to drink.',
      answer: false,
      concepts: ['water-treatment', 'boiling-altitude'],
      explanation: 'Steaming happens well below boiling. CDC guidance is a rolling boil for 1 minute (3 minutes above ~2,000 m), and chemical contaminants remain.',
    },
    {
      id: 's7-l3-q6',
      kind: 'single',
      prompt: 'Why is weaving material soaked before use?',
      choices: [
        { id: 'a', text: 'Water softens the lignin and hemicellulose binding the fibers, so they bend without cracking', why: 'Correct: plasticised material bends; dry material snaps.' },
        { id: 'b', text: 'Wet material weighs more, so the basket is sturdier', why: 'Weight adds nothing structural.' },
        { id: 'c', text: 'To kill insects', why: 'Not the purpose.' },
        { id: 'd', text: 'Wet weavers shrink tight immediately', why: 'They tighten as they **dry**, afterwards.' },
      ],
      answer: 'a',
      concepts: ['weaving', 'natural-fibers'],
      explanation: 'The same principle applies to cordage: soak stiff fibers before bending them tightly.',
    },
  ],
  scenario: {
    id: 's7-l3-sc',
    setup: 'Temperate forest, mid-afternoon, 12 °C. Your metal cup was lost in a river crossing; you still have a 1 L plastic bottle, a lighter and a knife. The only water is a cloudy stream below a pasture. Fires are legal here. Fallen birch logs with loose bark lie nearby, and the stream bed is full of rounded pebbles.',
    question: 'How do you make drinking water?',
    choices: [
      { id: 'a', text: 'Stand the plastic bottle in the coals.', why: 'Most plastic bottles soften and melt above the water line, even if the water keeps the wetted part cooler, and you may lose your only bottle.' },
      { id: 'b', text: 'Let the water settle, fold a birch-bark container, and stone-boil it with dry stones from the bank above the stream until it rolls for 1 minute. Store it in the bottle.', why: 'Best: the method works, the right stones avoid bursts, settling handles turbidity, and the bottle is kept for storage.' },
      { id: 'c', text: 'Heat stream pebbles and drop them in the bottle.', why: 'Wet stream pebbles can burst, and hot stones will melt a plastic bottle.' },
      { id: 'd', text: 'Drink it untreated: it is flowing water.', why: 'Water below pasture carries a high risk of pathogens such as Cryptosporidium, Giardia and E. coli (Stage 4).' },
    ],
    best: 'b',
    debrief: 'Settle (turbidity) → contain (bark, grain around) → heat (dry, dense stones from high ground) → boil (rolling, 1 minute) → store (bottle). Each step uses one piece of physics from this lesson. The Stage 4 multi-barrier idea still applies: clarification first makes every other step work better.',
    concepts: ['stone-boiling', 'bark-containers', 'water-treatment', 'turbidity'],
  },
  summary: [
    'Bark bends across the grain and splits along it, so fold containers with the grain running around them. Use dead or fallen trees.',
    'Baskets are stakes plus weavers: plain weave, twining and coiling. Soak the material so it bends without cracking.',
    'Wet containers survive on coals because water holds them near 100 °C, but bark conducts heat slowly (about an hour per litre).',
    'Stone boiling: stone mass ≈ water heat ÷ (0.8 × ΔT × η), about 3 kg of stones for 2 L. Never heat river stones.',
    'Water safety still needs a rolling boil for 1 minute (3 minutes above ~2,000 m).',
  ],
  furtherReading: ['wescott-primitive-tech', 'kochanski-bushcraft', 'cdc-emergency-water'],
  references: ['wescott-primitive-tech', 'kochanski-bushcraft', 'cdc-emergency-water', 'wms-water-2019', 'lnt-principles', 'cfr-36-2-1', 'fpl-wood-handbook'],
}
