import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's3-l1',
  stage: 3,
  order: 1,
  title: 'Combustion science',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l11'],
  concepts: ['combustion', 'surface-to-volume', 'moisture-content'],
  objectives: [
    'Describe the four stages of wood combustion — **drying, pyrolysis, flaming, glowing char** — and what each needs.',
    'Use the **surface-to-volume** ratio $A/V = 4/d$ and the heating time $t \\sim r^2/\\alpha$ to explain why fine fuel lights first.',
    'Calculate the **net energy** of wood at a given moisture content, and convert between wet-basis and dry-basis moisture.',
    'Explain smoke as **wasted fuel and water vapour**, and use that to diagnose a struggling fire.',
  ],
  explanation: [
    {
      type: 'md',
      md: `In Stage 1 you learned the fire triangle — heat, fuel, oxygen — and the fuel ladder. This lesson opens the box: **what actually happens to a stick when it burns**, and why every rule of fire-craft (fine first, dry first, air gaps, feed gradually) follows from three facts about heat, surface and water.

### Wood does not burn — its gases do

Heat a piece of wood and it goes through four overlapping stages:

1. **Heating and drying.** Up to roughly 100–150 °C the wood mostly just gets hotter and its water boils off. Energy spent here produces steam, not flame.
2. **Pyrolysis.** From roughly 200 °C upward, and fast above ~300 °C, the wood’s polymers break apart: hemicellulose first, then cellulose, with lignin decomposing over a wide range. The products are flammable gases and tar vapours (“volatiles”) — roughly three-quarters of dry wood’s mass — plus a solid carbon skeleton, **char**.
3. **Flaming combustion.** The volatiles rise, mix with air and burn *above* the wood as flame. The flame radiates heat back down, pyrolysing more wood: the fire feeds itself.
4. **Glowing (smouldering) combustion.** When the volatiles are gone, oxygen attacks the char surface directly. That is a bed of **coals**: little flame, steady intense heat — ideal for cooking.`,
    },
    { type: 'diagram', id: 'combustion-stages', caption: 'Heat drives water out, then breaks wood into gas; the gas burns as flame; the leftover char glows as coals.' },
    {
      type: 'md',
      md: `### What this means in practice

- A young fire dies when the flame cannot **pyrolyse the next piece fast enough** — the next piece is too thick or too wet. That is a heat-transfer problem, not bad luck.
- **Air gaps** matter because the gases must mix with oxygen to burn. A tight pile makes gas that escapes unburned: smoke.
- **Smoke is fuel you are not burning**, plus steam. Thick white smoke from a small fire means wet fuel or too little air; the cure is finer, drier fuel and more gap — not more big wood.
- Some people add a fourth side to the triangle — the **chemical chain reaction** in the flame (the “fire tetrahedron”). It matters for firefighting chemistry; for fire-craft, the triangle is enough.

### Two numbers to remember

- **Piloted ignition** (a flame or spark nearby) of wood surfaces happens at roughly **250–350 °C**, depending on the wood and how long it is heated. Without a pilot flame, wood needs far higher temperatures.
- Dry wood holds about **18–20 MJ/kg** of chemical energy. Water in it costs about **2.4 MJ per kg of water** to evaporate. Everything in the science section follows from these.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'Experimenting with fire is only legal where open fires are allowed — and bans change with the season, sometimes the same day. Every practical in this stage assumes a legal fire pit, ring or barbecue and a check of the land manager’s current restrictions. The worldwide portal list is on the References page.',
    },
  ],
  whyItMatters: 'When a fire fails in rain or at dusk, guessing wastes the fuel and daylight you have left. If you understand that flame is burning gas made by heat, you can diagnose the failure — too thick, too wet, too tight, too windy — and fix the right thing on the next attempt.',
  science: [
    {
      type: 'md',
      md: `### Surface-to-volume ratio

Heat enters a stick through its surface, but has to warm its whole volume. For a round stick of diameter $d$ and length $L$ (ignoring the ends), surface $A = \\pi d L$ and volume $V = \\pi d^2 L / 4$, so

$$
\\frac{A}{V} = \\frac{4}{d}
$$

In words: **halve the thickness, double the surface each gram of wood exposes to the flame.** A 1 mm shaving has 20× the surface per unit volume of a 2 cm stick.`,
    },
    { type: 'diagram', id: 'surface-volume', caption: 'A/V = 4/d: the ratio collapses as sticks get thicker.' },
    {
      type: 'md',
      md: `### Heating time grows with the square of thickness

How long does it take heat to soak into a stick? Heat diffuses, and diffusion time scales with the **square** of distance:

$$
t \\approx \\frac{r^2}{\\alpha}
$$

where $r$ is the radius and $\\alpha$ is the wood’s thermal diffusivity — how fast temperature spreads through it, about $1.5 \\times 10^{-7}\\ \\text{m}^2/\\text{s}$ for dry wood. In words: **twice as thick takes four times as long** to heat through.

- 1 mm shaving ($r = 0.5$ mm): $t \\approx (5 \\times 10^{-4})^2 / 1.5\\times10^{-7} \\approx 1.7$ s.
- 2 cm stick ($r = 1$ cm): $t \\approx (10^{-2})^2 / 1.5\\times10^{-7} \\approx 670$ s — about **11 minutes**.

A match burns for ~10 seconds. That is the whole argument for the fuel ladder in one line.

### Moisture content and energy

Foresters define moisture content two ways. **Wet basis** $m$ is water ÷ total mass. **Dry basis** $u$ is water ÷ dry wood mass. They convert as

$$
m = \\frac{u}{1+u}
$$

So “100 % moisture (dry basis)” — common in living trees — means **half the log is water** (50 % wet basis). This course uses wet basis unless stated.

Net usable heat per kilogram of wood at wet-basis moisture $m$:

$$
H_{net} \\approx 18.5\\,(1-m) - 2.44\\,m \\quad \\text{MJ/kg}
$$

The first term is the energy in the dry wood; the second is the energy spent turning its water into steam. Worked example:

| Wood | $m$ | Dry wood energy | Evaporation cost | Net |
|---|---|---|---|---|
| Seasoned / dead standing | 0.20 | 0.8 × 18.5 = 14.8 MJ | 0.2 × 2.44 = 0.49 MJ | **≈ 14.3 MJ/kg** |
| Lying on wet ground | 0.35 | 12.0 MJ | 0.85 MJ | **≈ 11.2 MJ/kg** |
| Green, freshly cut | 0.50 | 9.25 MJ | 1.22 MJ | **≈ 8.0 MJ/kg** |

Green wood gives barely **half** the heat of seasoned wood per kilogram you carry — and it is worse than the table says, because the steam cools the flame, pyrolysis slows, combustion becomes incomplete, and a big share of the “energy” leaves as smoke.`,
    },
    { type: 'diagram', id: 'moisture-energy', caption: 'Net energy per kilogram falls steeply with moisture — and flame temperature and cleanliness fall with it.' },
    {
      type: 'md',
      md: `### How much heat does it take to light tinder?

Wood’s specific heat is about $1.5\\ \\text{J/(g·°C)}$. To raise **1 g** of dry tinder from 15 °C to ~300 °C takes $1 \\times 1.5 \\times 285 \\approx 430$ J. A lighter flame delivers tens of watts, so a fluffy gram of birch bark gets there in seconds — *if* its fibres are thin enough that the heat reaches all of it. Add 10 % water and you pay an extra ~$0.1 \\times 2440 \\approx 240$ J first. Damp tinder is not impossible; it is **slow**, and slow is what kills a young fire.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest, autumn drizzle:** fallen spruce on the ground reads 35–40 % moisture; dead spruce twigs still on the lower trunk read 12–18 %. Same tree, same day, very different fires.

**Hot desert:** dead mesquite or acacia can be under 10 % moisture — it lights readily and burns hot and clean. The challenge is quantity, not dryness.

**Tropical rainforest:** humidity keeps dead wood at 20–30 % even without rain; hard, dense woods take long to light. Split dead branches for their drier cores; look for resinous woods and dead bamboo (split it first — sealed sections can burst).

**Coastal:** driftwood above the tide line can be dry, but salt-soaked wood hisses and burns slowly; the salt residue also makes the flames yellow-orange.

**Urban disaster:** treated or painted timber and pallets burn, but treated wood and plastics give toxic smoke. Untreated, dry, split softwood is the best fuel in rubble.`,
    },
  ],
  mistakes: [
    'Myth: “Wood burns.” — The gases pyrolysed from wood burn; the leftover char glows. Fixing a fire means helping pyrolysis (heat, thin fuel) and mixing (air gaps).',
    'Myth: “Thick white smoke means the fire is about to take off.” — Usually it means steam and unburned gases from wet or smothered fuel. Add finer dry fuel and open air gaps.',
    'Confusing dry-basis and wet-basis moisture: “100 % moisture” in forestry means half the mass is water, not that the log is pure water.',
    'Adding more big, damp wood to a struggling fire — it absorbs heat faster than the fire can pyrolyse it.',
    'Assuming dead wood is dry: dead wood lying on wet ground can be as wet as green wood.',
  ],
  exercises: [
    {
      id: 's3-l1-e1',
      title: 'Measure moisture content with a kitchen scale',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Three sticks: dead-standing, dead from the ground, freshly cut green (collected where allowed)', 'Kitchen scale (1 g resolution)', 'Warm, dry place (radiator shelf, airing cupboard)'],
      steps: [
        'Weigh each stick on the day you collect it and label it.',
        'Dry them indoors for 2–3 weeks, weighing every few days until the mass stops falling (roughly “oven-dry-ish”).',
        'Moisture (wet basis) = (fresh mass − dry mass) ÷ fresh mass. Compute it for each stick.',
        'Use $H_{net} = 18.5(1-m) - 2.44m$ to compute the net energy of each stick as collected.',
      ],
      success: ['You measured a clear difference between the three sticks.', 'You can explain why the ground stick behaved closer to the green one than to the standing one.'],
      skill: 'fire-prep',
    },
    {
      id: 's3-l1-e2',
      title: 'Ignition-time test by thickness',
      level: 3,
      safety: 'outdoor',
      minutes: 40,
      materials: ['Legal fire pit or barbecue', 'Lighter', 'Dry sticks of 1–2 mm, 5 mm, 10 mm and 20 mm', 'Timer', 'Water to extinguish'],
      safetyNote: 'Only where fires are explicitly permitted and no fire ban is in force. Keep water at hand; extinguish cold before leaving.',
      steps: [
        'Hold the lighter flame steadily under the middle of each stick, one at a time, in still air.',
        'Time until the stick holds its own flame when you remove the lighter (stop at 60 s).',
        'Plot time against diameter. Compare with the prediction $t \\propto d^2$.',
        'Extinguish: drown, stir, feel.',
      ],
      success: ['Thin sticks self-sustain in seconds; thick ones never do from a lighter alone.', 'You can relate the result to $A/V = 4/d$ and $t \\approx r^2/\\alpha$.'],
      skill: 'fire-ignition',
    },
  ],
  simulations: ['fire-advanced'],
  quiz: [
    {
      id: 's3-l1-q1',
      kind: 'order',
      prompt: 'Order the stages as a stick heats in a fire.',
      items: [
        { id: 'dry', text: 'Water boils off (drying)' },
        { id: 'pyro', text: 'Wood breaks down into flammable gases (pyrolysis)' },
        { id: 'flame', text: 'Gases mix with air and burn as flame' },
        { id: 'char', text: 'Remaining char glows as coals' },
      ],
      answer: ['dry', 'pyro', 'flame', 'char'],
      concepts: ['combustion'],
      explanation: 'Heat first evaporates water, then pyrolyses the wood; the volatiles burn as flame; the char burns last as glowing coals.',
    },
    {
      id: 's3-l1-q2',
      kind: 'numeric',
      prompt: 'Using $H_{net} = 18.5(1-m) - 2.44m$ MJ/kg, what is the net energy of wood at **30 %** moisture (wet basis)? (One decimal.)',
      unit: 'MJ/kg',
      answer: 12.2,
      tolerance: 0.15,
      concepts: ['moisture-content'],
      explanation: '18.5 × 0.7 = 12.95; 2.44 × 0.3 = 0.73; 12.95 − 0.73 ≈ **12.2 MJ/kg**, about 15 % less than wood at 20 %.',
    },
    {
      id: 's3-l1-q3',
      kind: 'single',
      prompt: 'A forester says a green log is at “100 % moisture content, dry basis”. What fraction of the log’s mass is water?',
      choices: [
        { id: 'a', text: 'All of it', why: 'Dry basis divides by the *dry* mass, so it can exceed 100 % without the log being all water.' },
        { id: 'b', text: 'Half of it', why: 'Correct: $m = u/(1+u) = 1/2$.' },
        { id: 'c', text: 'One tenth', why: 'That would be about 11 % dry basis.' },
        { id: 'd', text: 'It cannot be known', why: 'The conversion is exact: $m = u/(1+u)$.' },
      ],
      answer: 'b',
      concepts: ['moisture-content'],
      explanation: 'Water equals the dry mass, so water is half the total. Always check which basis a moisture figure uses.',
    },
    {
      id: 's3-l1-q4',
      kind: 'single',
      prompt: 'Diffusion time scales as $t \\approx r^2/\\alpha$. If a 4 mm stick takes about 25 s to heat through, roughly how long does an 8 mm stick take?',
      choices: [
        { id: 'a', text: '~25 s', why: 'Thickness matters — this ignores it.' },
        { id: 'b', text: '~50 s', why: 'That assumes time grows linearly with thickness.' },
        { id: 'c', text: '~100 s', why: 'Correct: doubling $r$ quadruples $t$.' },
        { id: 'd', text: '~200 s', why: 'That would be a cube law.' },
      ],
      answer: 'c',
      concepts: ['surface-to-volume'],
      explanation: 'Twice as thick, four times as long. That is why each rung of the ladder should be only 2–3× the previous one.',
    },
    {
      id: 's3-l1-q5',
      kind: 'multi',
      prompt: 'A small fire produces thick white smoke and little flame. Which are likely causes?',
      choices: [
        { id: 'a', text: 'Fuel too wet — heat is going into steam', why: 'Yes: water vapour and cooled, incomplete combustion.' },
        { id: 'b', text: 'Fuel packed too tightly — gases escape unburned', why: 'Yes: volatiles need air to burn.' },
        { id: 'c', text: 'Pieces too thick for the flame to pyrolyse', why: 'Yes: they smoulder instead of flaming.' },
        { id: 'd', text: 'Too much oxygen', why: 'Excess air rarely causes smoke in a campfire; it is usually the opposite.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['combustion', 'moisture-content'],
      explanation: 'Smoke = unburned volatiles + steam. Fix it with drier, finer fuel and bigger air gaps.',
    },
    {
      id: 's3-l1-q6',
      kind: 'truefalse',
      prompt: 'Heating fine tinder from 15 °C to ~300 °C needs only a few hundred joules per gram, so a lighter can light dry tinder in seconds.',
      answer: true,
      concepts: ['combustion', 'surface-to-volume'],
      explanation: '1 g × 1.5 J/(g·°C) × 285 °C ≈ 430 J. A lighter supplies tens of watts — but only fine fibres let that heat reach all of the tinder quickly.',
    },
  ],
  scenario: {
    id: 's3-l1-sc',
    setup: 'Coastal forest, 6 °C, after a night of rain; a small legal fire is permitted at your emergency bivouac. Your young fire (lit from birch bark) produces billowing white smoke from a heap of wrist-thick branches you picked up from the forest floor. Your partner is cold and wet (Stage 1: wet + wind). About 40 minutes of daylight remain.',
    question: 'What is the best next move?',
    choices: [
      { id: 'a', text: 'Pile on more wrist-thick branches so the fire has more fuel to work with.', why: 'Adds more heat sink and more water — the fire gets smokier and may die.' },
      { id: 'b', text: 'Pull the big wet branches back, open the base, and feed split dead-standing wood in pencil to thumb sizes until there is a hot core; dry the big branches around the edge.', why: 'Best: restores the ladder, adds air, and uses the fire to pre-dry the wet wood.' },
      { id: 'c', text: 'Blow hard into the smoke continuously.', why: 'Some air helps briefly, but the fuel problem remains and you will exhaust yourself.' },
      { id: 'd', text: 'Abandon the fire and spend the remaining light walking to warm up.', why: 'Walking in wet clothes at dusk risks sweat, exhaustion and a dark, cold night.' },
    ],
    best: 'b',
    debrief: 'White smoke told you the flame could not pyrolyse the next rung fast enough: too thick, too wet, too tight. Pull it back, rebuild the ladder with **split dead-standing wood** (dry core, high A/V), and let the growing fire dry the wet branches before they go on. With a cold partner, a few minutes of rework now buys hours of warmth later.',
    concepts: ['combustion', 'moisture-content', 'wet-wind'],
  },
  summary: [
    'Heat drives off water, pyrolysis turns wood into gas, the gas burns as flame, and the char glows as coals.',
    '$A/V = 4/d$ and heating time $t \\approx r^2/\\alpha$: thin fuel heats through in seconds, thick fuel in minutes.',
    'Net energy $\\approx 18.5(1-m) - 2.44m$ MJ/kg: green wood gives about half the heat of seasoned wood — and more smoke.',
    'Smoke is unburned fuel plus steam: fix it with drier, finer fuel and more air, not bigger wood.',
  ],
  furtherReading: ['drysdale-fire-dynamics', 'fpl-wood-handbook', 'kochanski-bushcraft'],
  references: ['drysdale-fire-dynamics', 'babrauskas-ignition', 'fpl-wood-handbook', 'nps-fire', 'kochanski-bushcraft', 'usfs-fire'],
}
