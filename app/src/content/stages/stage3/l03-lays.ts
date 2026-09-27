import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's3-l3',
  stage: 3,
  order: 3,
  title: 'Fire lays and their purposes',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s3-l2'],
  concepts: ['fire-lays', 'fire-purpose', 'long-duration-fire'],
  objectives: [
    'Build and explain six lays: **teepee, log cabin, lean-to, star, long log and Dakota hole**.',
    'Match a lay to its **purpose** — cooking, heating, signalling or overnight — and to the weather.',
    'Estimate **burn rate and fuel needed** for a given duration.',
    'State the **caveats of the Dakota hole** and the safety limits of signal fires.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A “fire lay” is simply how you arrange fuel. Every lay trades the same three things differently: **how easily it starts**, **where its heat goes** (up, sideways, into coals), and **how often it needs feeding**. Choose the lay by asking first: *what is this fire for?*`,
    },
    { type: 'diagram', id: 'fire-lays', caption: 'Six lays and what each is good at.' },
    {
      type: 'table',
      head: ['Lay', 'How', 'Strengths', 'Weaknesses'],
      rows: [
        ['**Teepee**', 'Kindling leaned in a cone over the tinder, door to windward', 'Easiest to light; concentrates heat upward; tall flame', 'Burns fuel fast; collapses; poor pot support; heat goes up, not to you'],
        ['**Log cabin**', 'Crib of alternating layers around a small teepee', 'Stable; lots of air; collapses into an even coal bed; good pot platform', 'Uses more prepared wood; slower to build'],
        ['**Lean-to**', 'Tinder in the lee of a backlog, kindling leaned over it', 'Wind shield; quick; backlog reflects some heat', 'Directional — must match the wind'],
        ['**Star**', 'Several logs pushed into the centre like spokes; push in as they burn', 'Very fuel-thrifty; controllable; slow burn; good for cooking', 'Low heat output; needs an established fire to start'],
        ['**Long log** (parallel logs)', 'Two or three long logs stacked or side by side, burning along their length', 'Long, even heat along a sleeper’s body; hours between feeds', 'Needs long, dry logs and a tool to process them; hard to start'],
        ['**Dakota hole**', 'A pit (~30 cm) with a slanted air tunnel from the windward side', 'Wind-proof, low light and smoke, very fuel-efficient; pot sits right over flame', 'Digging; soil and root damage; floods in rain; almost no radiant heat to you'],
      ],
    },
    {
      type: 'md',
      md: `### Matching purpose

**Cooking.** Cook over **coals**, not flame: a log-cabin or star fire of hardwood that has burned down gives even, controllable heat. Stable pot support (two green logs, stones, a tripod) matters as much as the fire. Keep it small — a 5–10 kW fire is plenty for a pot.

**Heating a person.** You are warmed mostly by **radiation**, which travels in straight lines sideways. A tall teepee sends most of its heat up in the plume. A **long, low** fire (long log or lean-to) facing you, ideally with a **reflector** behind it, puts far more heat on your body (lesson 7).

**Signalling.** Searchers see **flame at night and smoke by day**. Build a signal fire ready to light — a log-cabin with plenty of tinder under cover — in an **open, visible** spot that is still safe. Three fires in a triangle (or a line), about 30 m apart, is a widely recognised distress signal. By day, once the base is roaring, add green boughs for thick white smoke against a dark forest. Do not burn tyres or plastics: the smoke is toxic.

**Long duration / overnight.** You need slow, even burning and long gaps between feeding: **star** or **long-log** fires of dense, dry hardwood. Budget the fuel (science section) — it is almost always more than people expect.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Dakota hole caveats',
      md: `The Dakota hole is often presented as “the stealth survival fire”. Its advantages are real (wind-proof, efficient, little light or smoke), but:

- **Roots and duff:** a pit dug into a root mat, duff or peat can ignite roots that smoulder underground and surface metres away, hours or days later. Only dig in mineral soil, away from trees, and put it out completely.
- **Impact:** it disturbs soil and vegetation. Leave No Trace practice favours existing fire rings or stoves; if you dig, refill and restore the site.
- **Rain and water tables:** the pit floods; in wet ground it fails.
- **It does not warm you:** almost all its heat goes straight up into the pot. For warmth, use a different lay.
- **Law:** digging and fires may both be prohibited where you are.`,
    },
    { type: 'sim', id: 'fire-advanced', caption: 'Try the same materials with each lay and each purpose. Watch suitability, burn time and radiant heat change.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'Many parks require fires only in existing rings, or ban them entirely during high danger — including signal-practice fires. In a real emergency, signalling is legitimate, but a signal fire that escapes becomes a wildfire and the searchers’ second emergency. Practise lays in a legal fire pit; practise signal-fire *preparation* without lighting.',
    },
  ],
  whyItMatters: 'The same armful of wood can boil water quickly, keep you warm for an hour, or last all night — depending on how it is arranged. Choosing the right lay stretches scarce fuel, saves hours of gathering, and puts the heat where you need it.',
  science: [
    {
      type: 'md',
      md: `### Burn rate and fuel budget

A campfire’s heat output is roughly

$$
P \\approx \\dot m \\times H_{net}
$$

where $\\dot m$ is the burn rate (kg/h) and $H_{net}$ the net energy per kg (lesson 1). In words: **power = how fast you burn wood × energy per kilogram.** Divide MJ/h by 3.6 to get kW.

Worked example: a teepee fire burning **3 kg/h** of wood at 20 % moisture ($H_{net} \\approx 14.3$ MJ/kg):

$$
P \\approx \\frac{3 \\times 14.3}{3.6} \\approx 12\\ \\text{kW}
$$

That is about the output of six electric fan heaters — but most of it leaves as hot gas in the plume. Only a fraction (typically ~20–40 % for an open wood fire) is radiated, and only part of that reaches you.

**Overnight fuel budget.** A long-log or star fire burning ~2 kg/h for 10 hours needs **20 kg** of wood — four or five armfuls of wrist-to-leg-thick dry wood, processed *before dark*. In the boreal forest, experienced instructors often gather two to three times what beginners think is enough.

### Why the Dakota hole is efficient

The tunnel feeds air to the base of the fire and the pit acts as a short chimney: the rising hot gas draws cold air in, so combustion is hot and nearly complete (little smoke). The pit walls also shield the fire from wind and hide the light — but the same walls block almost all the sideways radiation you would use for warmth.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal winter (Canada, Scandinavia):** a long-log fire along the open side of a lean-to shelter, with a reflector wall behind the fire — the classic northern overnight set-up. Fuel collection starts hours before dark.

**Desert night:** fuel is scarce, so a small star fire of dense dead mesquite or acacia keeps a modest, steady heat with minimal wood.

**Windy coastal plain:** a lean-to lay against a driftwood backlog, with the fire in the lee of a dune or rock.

**Mountain valley, lost party:** a pre-built log-cabin signal fire in an open meadow, tinder kept under a jacket, green boughs stacked beside it for smoke — lit when an aircraft is heard.

**Tropical river bank:** a small log-cabin fire on a platform of green logs for cooking, under a high tarp, in the monsoon.`,
    },
  ],
  mistakes: [
    'Using a tall teepee for warmth and wondering why your front is cold — most of its heat goes up.',
    'Cooking over flames instead of coals; pots blacken and food burns outside, raw inside.',
    'Not budgeting fuel for the night; running out at 03:00, the coldest hour.',
    'Myth: “The Dakota hole is the best survival fire.” — It is a specialised low-signature cooking fire; it gives almost no warmth, damages soil, floods, and can ignite roots.',
    'Lighting a signal fire in a dense stand of dry trees; it can escape and become a wildfire.',
    'Burning tyres or plastic for black smoke — toxic and polluting.',
  ],
  exercises: [
    {
      id: 's3-l3-e1',
      title: 'Lay selection drill (simulation)',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'In the Advanced Fire Builder, keep materials fixed (damp weather, birch bark, standing twigs, split hardwood).',
        'For each purpose (cook, heat, signal, overnight), try all six lays and record the suitability and score.',
        'Write one sentence per purpose explaining the winner in terms of where the heat goes and how often it needs feeding.',
      ],
      success: ['A table of 24 results.', 'You can explain each winner without looking at the numbers.'],
    },
    {
      id: 's3-l3-e2',
      title: 'Build three lays in a legal fire pit',
      level: 3,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Legal fire pit or ring', 'Full fuel ladder', 'Lighter or ferro rod', 'Pot and water', 'Water to extinguish'],
      safetyNote: 'Only where fires are explicitly permitted and no fire ban is in force. Keep fires small. Extinguish cold.',
      steps: [
        'Build a log-cabin lay, light it, let it burn to coals, and time how long it takes to boil 1 L of water.',
        'Rebuild as a star fire from the coals and note how long it runs on three pushed-in pieces.',
        'Build a lean-to against a backlog and compare the warmth on your hands at 1 m with the teepee stage.',
        'Extinguish: drown, stir, feel.',
      ],
      success: ['1 L boiled over coals.', 'You observed the difference in heat on your hands between lays.'],
      skill: 'fire-ignition',
    },
  ],
  simulations: ['fire-advanced'],
  quiz: [
    {
      id: 's3-l3-q1',
      kind: 'single',
      prompt: 'You need to boil water and cook for the next hour with little wood. Which lay fits best?',
      choices: [
        { id: 'a', text: 'Tall teepee', why: 'Great to start, but fuel-hungry, unstable under a pot, and the flame tip is cooler than the base.' },
        { id: 'b', text: 'Star fire of hardwood (or a log cabin burned down to coals)', why: 'Correct: steady, controllable, thrifty, with a stable base.' },
        { id: 'c', text: 'Long-log fire', why: 'Designed to warm a sleeper; overkill for a pot.' },
        { id: 'd', text: 'A big bonfire so it lasts', why: 'Too hot to approach and wastes fuel.' },
      ],
      answer: 'b',
      concepts: ['fire-lays', 'fire-purpose'],
      explanation: 'Cook on coals. Star and log-cabin fires both give stable, even heat.',
    },
    {
      id: 's3-l3-q2',
      kind: 'numeric',
      prompt: 'A long-log fire burns **2.5 kg/h**. How many kg of wood do you need for **10 hours**?',
      unit: 'kg',
      answer: 25,
      tolerance: 0.5,
      concepts: ['long-duration-fire'],
      explanation: '2.5 × 10 = **25 kg** — about five armfuls, to be processed before dark.',
    },
    {
      id: 's3-l3-q3',
      kind: 'multi',
      prompt: 'Which statements about the Dakota hole are correct?',
      choices: [
        { id: 'a', text: 'It burns efficiently with little smoke.', why: 'Yes — the tunnel and pit create a strong draught.' },
        { id: 'b', text: 'It is the best lay for warming yourself.', why: 'No — its heat goes up, not sideways.' },
        { id: 'c', text: 'Digging into roots or peat risks an underground fire.', why: 'Yes — roots can smoulder and spread unseen.' },
        { id: 'd', text: 'It floods in rain or wet ground.', why: 'Yes.' },
        { id: 'e', text: 'Leave No Trace prefers it over existing fire rings.', why: 'No — existing rings or stoves come first; digging disturbs soil.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['fire-lays', 'fire-safety'],
      explanation: 'A specialised, efficient, low-signature cooking fire — not a general survival fire.',
    },
    {
      id: 's3-l3-q4',
      kind: 'single',
      prompt: 'Daytime, forested valley, helicopter search likely. What is the most visible fire signal?',
      choices: [
        { id: 'a', text: 'A small, bright flame under the trees', why: 'Flame is hard to see by day, and the canopy hides it.' },
        { id: 'b', text: 'A hot fire in a clearing with green boughs added for thick white smoke', why: 'Correct: smoke contrasts with dark forest and rises above the canopy.' },
        { id: 'c', text: 'A Dakota hole', why: 'Designed to hide light and smoke — the opposite of a signal.' },
        { id: 'd', text: 'Burning a tyre from a vehicle for black smoke', why: 'Toxic; black smoke also shows poorly against dark forest.' },
      ],
      answer: 'b',
      concepts: ['fire-purpose', 'signaling', 'visibility'],
      explanation: 'By day, smoke; by night, flame. Choose contrast with the background, and keep it controllable.',
    },
    {
      id: 's3-l3-q5',
      kind: 'numeric',
      prompt: 'Using $P = \\dot m \\times H_{net} / 3.6$, what is the output in **kW** of a fire burning 1.5 kg/h of wood with $H_{net}$ = 14.4 MJ/kg?',
      unit: 'kW',
      answer: 6,
      tolerance: 0.2,
      concepts: ['fire-purpose', 'moisture-content'],
      explanation: '1.5 × 14.4 = 21.6 MJ/h; ÷ 3.6 = **6 kW** — a sensible cooking fire.',
    },
  ],
  scenario: {
    id: 's3-l3-sc',
    setup: 'Subarctic forest, −12 °C, 15:00 with sunset at 16:10. Your party of two must spend the night beside a stalled snowmobile. You have a saw, a tarp, a stove with little fuel, and dead standing spruce and birch nearby. Fires are legal. Your satellite messenger has sent your position (Stage 1: communicate first).',
    question: 'How do you plan the fire?',
    choices: [
      { id: 'a', text: 'A big teepee fire now for maximum heat, feeding it with whatever you find through the night.', why: 'Burns fuel fastest, most heat goes up, and gathering in the dark at −12 °C is exhausting and dangerous.' },
      { id: 'b', text: 'Spend the daylight cutting and stacking ~25–30 kg of dry wood, then build a long-log fire along the open side of the tarp lean-to with a reflector behind the fire.', why: 'Best: fuel budgeted in daylight, heat directed along your bodies, long gaps between feeds.' },
      { id: 'c', text: 'Dig a Dakota hole in the snow to hide the fire from wind.', why: 'Floods as the snow melts, and gives almost no warmth.' },
      { id: 'd', text: 'Rely on the stove all night.', why: 'Too little fuel; running a stove in an enclosed tarp space also risks carbon monoxide.' },
    ],
    best: 'b',
    debrief: 'Overnight cold is a **fuel-logistics** problem: budget the burn rate × hours, gather it in daylight, and choose a lay that radiates sideways and needs little tending. A long-log fire with a reflector along a lean-to is the classic northern answer. The stove is for melting snow and hot drinks, used ventilated.',
    concepts: ['long-duration-fire', 'fire-lays', 'daylight'],
  },
  summary: [
    'Choose the lay for the purpose: teepee to start/signal, log cabin or star to cook, lean-to or long log to warm, star or long log overnight.',
    'Power ≈ burn rate × net energy; divide MJ/h by 3.6 for kW. Budget fuel = burn rate × hours — gather it before dark.',
    'Signal: smoke by day, flame at night, three fires in a triangle; keep it controllable; never burn tyres or plastics.',
    'The Dakota hole is an efficient low-signature cooking fire with real caveats: roots, soil damage, floods, no warmth, law.',
  ],
  furtherReading: ['kochanski-bushcraft', 'army-atp-3-50-21'],
  references: ['kochanski-bushcraft', 'army-atp-3-50-21', 'afh-10-644', 'lnt-principles', 'smokey-campfire', 'usfs-fire'],
}
