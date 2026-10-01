import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's5-l2',
  stage: 5,
  order: 2,
  title: 'Site selection in depth',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s5-l1', 's2-l2'],
  concepts: ['site-selection', 'cold-air-pooling', 'site-hazards', 'drainage'],
  objectives: [
    'Explain **cold-air drainage** and predict which nights and which terrain will produce a cold pool.',
    'Read the ground for **drainage and flood** evidence, and estimate run-off from a catchment.',
    'Use terrain to reduce **wind** without walking into avalanche, rockfall or lightning exposure.',
    'Run a systematic **look up, upstream, down, around** hazard check before committing to a site.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A good shelter on a bad site is a bad shelter. Site selection comes **before** design because it decides which heat-loss paths you will face and which hazards you are betting against. The Stage 1 "5 Ws" (widowmakers, water, wind, wiggly things, wood) are the checklist; this lesson is the physics and the field clues behind each.

### Cold-air drainage

On a **calm, clear night** the ground radiates heat to the sky and cools quickly. The air touching it cools too, becomes denser, and **flows downhill like a slow liquid**, collecting in valley floors, hollows, basins and behind barriers such as a dense hedge or a road embankment. The result is a **cold pool** (a "frost hollow") that can be several degrees colder than a **thermal belt** part-way up the slope.`,
    },
    { type: 'diagram', id: 'cold-air-drainage', caption: 'Calm, clear nights: cold air drains downslope and pools; the warmest ground is usually part-way up.' },
    {
      type: 'md',
      md: `Field clues: fog or frost forming first in the bottoms; heavier dew in hollows; a noticeable cold "breath" of air sliding down a gully at dusk; frost-damaged vegetation in basins. And the conditions that **cancel** it: wind (it mixes the air) and cloud (it stops the ground radiating so strongly). On a stormy night the valley floor may be the *sheltered* choice — if it is not a flood path.

### Drainage and flooding

Water collects where contour lines point uphill (valleys, gullies, channels) and spreads where the ground flattens. Read the ground:

| Clue | Meaning | Decision |
|---|---|---|
| Sand, rounded pebbles, a flat floor between banks | A channel that carries water sometimes | Never sleep in it, even bone-dry |
| Debris lodged in branches, silt lines on trunks, flattened grass | High-water marks | Move above them — well above |
| Bare, compacted soil in a shallow dip | Run-off path in rain | Move to a slight rise or hummock |
| Moss, rushes, sphagnum, standing water | Waterlogged ground | Your bed will soak from below |
| Storm cloud over hills upstream | Flash flood can arrive under a clear sky | Get out of the channel now |

A **gentle rise** with a slight slope lets rain run *past* you. Dig no trenches around shelters — they damage the ground and rarely work; choose the spot instead.

### Wind

- **Use the lee** of ridges, boulders, dense thickets and banks. A windbreak protects a zone downwind roughly several times its own height, most strongly close behind it.
- **Avoid funnels**: saddles, cols, gaps between hills and the mouths of valleys accelerate wind.
- **Stay low**: wind speed increases with height above the ground; a shelter 50 cm tall sits in much slower air than one 2 m tall.
- **Expect it to change**: in mountains, air often flows *up* valleys by day and *down* them at night; a front can swing the wind 90° or more. Orient for the worst wind of the night, not the breeze at 16:00.

### Hazards: the four looks

Before you put down your pack:

1. **Look up** — dead trees and hanging dead limbs ("widowmakers"), trees leaning over the site, snow-loaded branches, cliffs, cornices, loose rocks above.
2. **Look upstream** — could water arrive here? Channel, flood plain, tide line, dam, snowmelt?
3. **Look down** — ant and wasp nests, animal trails and dens, burrows, crevices (snakes, scorpions), lake ice and overflow water, sharp or rotten ground.
4. **Look around** — wind exposure, lightning exposure (summits, ridges, lone tall trees), visibility to searchers, water and materials within reach.`,
    },
    { type: 'diagram', id: 'site-hazards', caption: 'The hazards that rule a site out regardless of how comfortable it looks.' },
    {
      type: 'md',
      md: `**Avalanche terrain** deserves its own warning. Slopes steeper than about 30°, their runout zones below, gullies that funnel slides and lee slopes loaded with wind-drifted snow can all release. Unfortunately, wind-drifted lee slopes are exactly where the deep, easy-digging snow for a snow shelter accumulates. If you travel in avalanche terrain, take an avalanche course and check the regional avalanche forecast (Avalanche.org, Avalanche Canada and similar national services).

**Rockfall** clues: fresh, pale, angular fragments with no lichen; a talus fan; impact scars on trees. Freeze–thaw and rain loosen rock — the stormy night is when it falls.

### Balancing competing needs

Sites trade off. The ideal is *mid-slope, in the lee, under sound living trees, slightly raised, well above any water, with materials close and an open spot nearby where searchers can see your signal* (Stage 14). When you cannot have it all, **eliminate hazards first**, then take shelter from the biggest heat-loss path, then convenience.`,
    },
    { type: 'sim', id: 'shelter-builder', caption: 'Try every site in the forest with the same shelter. The risk bars change more than the temperatures.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Where camping is allowed',
      md: 'Land managers often set rules on where you may camp: distance from water and trails, designated sites only, permits, or no camping at all. Leave No Trace guidance is to camp on durable surfaces and at least about 200 ft (≈ 60 m) from lakes and streams where possible. In an emergency, safety decides; for practice, check the rules for that specific land (NPS, BLM, national park and forestry agencies — see the References page).',
    },
  ],
  whyItMatters: 'Many deaths in the outdoors attributed to "exposure" or "bad luck" were decided when the site was chosen: the flat, sandy wash that flooded, the tree that came down, the slope that slid, or the frosty hollow that made an adequate shelter inadequate. A five-minute site check costs almost nothing and removes risks that no amount of construction can fix.',
  science: [
    {
      type: 'md',
      md: `### Why cold air flows

Air density follows the ideal gas law, $\\rho = p/(R_{air} T)$: at the same pressure, **density is inversely proportional to absolute temperature**. Air at −5 °C (268 K) compared with air at 0 °C (273 K):

$$
\\frac{\\rho_{-5}}{\\rho_{0}} = \\frac{273}{268} \\approx 1.019
$$

About 2 % denser — small, but on a calm night nothing stirs it, so it slides downhill and pools just as water would.

### How fast the ground cools on a clear night

Radiation follows the Stefan–Boltzmann law, $q = \\varepsilon\\sigma(T_{g}^4 - T_{sky}^4)$ with $\\sigma = 5.67\\times10^{-8}$ W/(m²·K⁴). For ground at 0 °C (273 K) under a clear sky with an effective temperature around −20 °C (253 K), taking $\\varepsilon \\approx 1$:

$$
q \\approx 5.67\\times10^{-8}\\,(273^4 - 253^4) \\approx 83\\ \\text{W/m}^2
$$

Under low cloud (effective sky temperature close to the air, say 270 K) the same formula gives only about 13 W/m². **Clear + calm = strong cooling and a strong cold pool; cloud or wind = weak.**

### How much water a gully can deliver

Run-off volume ≈ catchment area × rainfall × fraction that runs off. A 1 km² catchment (10⁶ m²) receiving 20 mm (0.02 m) of rain collects:

$$
10^6 \\times 0.02 = 20\\,000\\ \\text{m}^3
$$

If only a third of it runs off within an hour, that is about 6 700 m³/h ≈ **1.9 m³ per second** funnelled through one channel — a torrent — possibly from a storm you cannot see. Bare rock and desert soils shed a higher fraction than forest soils, which is why desert washes are so dangerous.

### Wind near the ground

Close to the surface, friction slows the wind; speed grows roughly with the logarithm of height. A shelter pitched low sits in noticeably slower air, and because wind force scales with $v^2$, a little less speed is a lot less force (Lesson 3).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain valley, autumn.** Two hikers camp on a flat meadow by the stream; two others on a bench 40 m higher. Clear and calm: the meadow frosts over while the bench stays just above freezing. Same kit, very different nights.

**Desert.** The sandy wash is flat, soft and shaded by its bank — and it is the drain for a large area of bare rock. A storm over distant hills can send a flood through after dark. Camp on a terrace well above the wash, not in it.

**Coast.** Above the highest tide line — look for the strand line of dried seaweed and driftwood — and above storm-surge debris. Headlands are windy; hollows behind dunes are sheltered but can collect cold air and water.

**Tropical rainforest.** Rivers rise metres overnight after rain in the hills. Sleep on ground well above the banks, and look up: dead branches, palm fronds and epiphytes fall from the canopy.

**Arctic/subarctic.** Lake and river ice can carry **overflow** — water flowing on top of the ice under the snow. Wet feet at −30 °C is an emergency. Forest edges give wind shelter and materials; open lakes give visibility.

**Urban/rural.** Ditches, underpasses and low car parks flood; the lee of a building beats an open field; avoid sleeping near roads or where machinery might operate.`,
    },
  ],
  mistakes: [
    'Choosing the flattest, softest spot — often a channel, wash or flood plain.',
    'Camping in the valley floor on a calm, clear night because it is sheltered.',
    'Using the lee of a slope in snow country without thinking about wind-loaded avalanche slopes.',
    'Checking for dead trees at eye level but not looking up into the crown.',
    'Orienting for the afternoon breeze, not for the storm forecast for 02:00.',
    'Hiding so well that searchers cannot see or hear you — plan a signal spot nearby.',
    'Myth: "lightning never strikes the same place twice" — exposed high points get struck repeatedly; they are simply bad places to be in a storm.',
  ],
  exercises: [
    {
      id: 's5-l2-e1',
      title: 'Dusk temperature transect',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A digital thermometer (a cheap cooking or weather one)', 'Headlamp', 'Notebook', 'A partner'],
      steps: [
        'Choose a clear, calm evening and a public path that runs from a valley floor or park hollow up a slope.',
        'At sunset and again an hour later, read the temperature at chest height at 5 points: bottom, low slope, mid-slope, upper slope, top. Hold the thermometer in the shade of your body, away from your hand, for 2 minutes each.',
        'Note wind, cloud, fog, dew or frost at each point.',
        'Plot temperature vs height. Where would you have slept?',
      ],
      success: ['You measured a temperature profile.', 'You can point to where cold air pooled — or explain why it didn’t (wind, cloud).'],
      skill: 'site-selection',
      safetyNote: 'Stay on paths, carry a light, and turn back if footing is poor in the dark.',
    },
    {
      id: 's5-l2-e2',
      title: 'Map site analysis',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['A topographic map of an area you know (paper or online)'],
      steps: [
        'Mark three candidate overnight sites for a clear, calm, frosty night and three for a stormy, wet, westerly night.',
        'For each, note from the contours: channels and catchment above it, slope steepness above it, exposure to the forecast wind, and distance to water and to an open signal spot.',
        'Rank them and write one sentence per site explaining the decisive factor.',
      ],
      success: ['Your choices differ between the two nights for stated reasons.', 'No chosen site sits in a channel, below a steep slope or in a hollow on the calm night.'],
      skill: 'map-compass',
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l2-q3',
      kind: 'single',
      prompt: 'You find a flat, sheltered spot under a large tree. Which observation does **NOT** give you a reason to rule it out?',
      choices: [
        { id: 'a', text: 'Broken dead limbs hanging in the crown', why: 'Rules it out — widowmakers fall in wind, snow load or for no visible reason.' },
        { id: 'b', text: 'Twigs and grass lodged in low branches, silt on the trunk', why: 'Rules it out — these are high-water marks: this spot floods.' },
        { id: 'c', text: 'Pale, angular rock fragments without lichen scattered around', why: 'Rules it out — fresh rockfall from above.' },
        { id: 'd', text: 'Dry leaf litter about 20 cm deep around the base', why: 'Correct — that is excellent bed material, a positive, not a hazard.' },
      ],
      answer: 'd',
      concepts: ['site-hazards'],
      explanation: 'Look up, upstream and around before comfort: dead limbs, high-water marks and fresh rockfall each rule a site out. Materials and sound trees are positives.',
    },
    {
      id: 's5-l2-q4',
      kind: 'single',
      prompt: 'No rain is falling where you are. Which statement about sleeping in a dry desert wash is correct?',
      choices: [
        { id: 'a', text: 'It is unsafe: rain far upstream on the catchment can send a flood down it.', why: 'Correct — flash floods come from rain you may never see or hear.' },
        { id: 'b', text: 'It is safe as long as the sky directly overhead stays clear all night.', why: 'The flood is fed by the whole catchment, which may be many kilometres away and out of sight.' },
        { id: 'c', text: 'It is safe if the sand is dry, since that shows no water is on its way.', why: 'Dry sand only tells you about the past; a flood can arrive within minutes.' },
        { id: 'd', text: 'It is safe if you sleep tight against the cut bank, not mid-channel.', why: 'Flood water fills the whole channel, cut bank included.' },
      ],
      answer: 'a',
      concepts: ['drainage', 'site-hazards'],
      explanation: 'Flash floods come from rain on the catchment upstream, which may be many kilometres away and out of sight. A wash is never a safe bed, whatever the local sky.',
    },
    {
      id: 's5-l2-q5',
      kind: 'single',
      prompt: 'In snow country you find a perfect deep drift for a snow cave on the lee side of a steep, corniced slope. What is the problem?',
      choices: [
        { id: 'a', text: 'None — a deep drift is ideal for digging a cave', why: 'Deep snow is ideal to dig — and it is deep because wind loaded the slope, which also makes it prone to avalanche.' },
        { id: 'b', text: 'Wind-loaded lee slopes and cornices are avalanche terrain', why: 'Correct — the same process that builds the drift builds slab avalanches.' },
        { id: 'c', text: 'Snow on lee slopes is too soft to hold a cave roof', why: 'Wind-packed snow is often firm; stability of the slope is the issue.' },
        { id: 'd', text: 'The drift is too deep to dig down to firm ground', why: 'Depth is what you want for a cave; the slope above is the danger.' },
      ],
      answer: 'b',
      concepts: ['site-hazards', 'snow-shelter'],
      explanation: 'Dig in low-angle terrain away from slopes above and their runout zones, and use the regional avalanche forecast when travelling in the mountains in winter.',
    },
    {
      id: 's5-l2-q1',
      kind: 'single',
      prompt: 'Which night makes the valley floor coldest relative to the slopes?',
      choices: [
        { id: 'a', text: 'Overcast, 40 km/h wind', why: 'Wind mixes the air and cloud limits radiative cooling — little pooling.' },
        { id: 'b', text: 'Clear, calm, dry air', why: 'Correct — strong radiative cooling and nothing to mix the cold air as it drains downhill.' },
        { id: 'c', text: 'Steady rain, light wind', why: 'Clouds and rain keep the ground from radiating strongly.' },
        { id: 'd', text: 'Overcast, calm, light drizzle', why: 'Calm lets air pool, but cloud limits radiative cooling, so little cold air forms.' },
      ],
      answer: 'b',
      concepts: ['cold-air-pooling'],
      explanation: 'Clear skies let the ground radiate (~80 W/m² in the worked example); calm air lets the cooled, denser air drain and pool.',
    },
    {
      id: 's5-l2-q2',
      kind: 'single',
      prompt: 'A gully drains a **0.5 km²** catchment. A storm drops **30 mm** of rain on it, and about **40 %** runs off. How much water comes down the gully?',
      choices: [
        { id: 'a', text: '6 000 m³', why: 'Correct — 500 000 m² × 0.03 m × 0.4.' },
        { id: 'b', text: '15 000 m³', why: 'This forgets that only 40 % runs off.' },
        { id: 'c', text: '60 000 m³', why: 'This treats 30 mm as 0.3 m instead of 0.03 m.' },
        { id: 'd', text: '6 m³', why: 'This treats 0.5 km² as 500 m² — 1 km² is 1 000 000 m².' },
      ],
      answer: 'a',
      concepts: ['drainage', 'site-hazards'],
      explanation: '0.5 km² = 500 000 m². Volume = 500 000 × 0.03 × 0.4 = **6 000 m³** — more than two Olympic swimming pools’ worth, arriving through one channel.',
    },
  ],
  scenario: {
    id: 's5-l2-sc',
    setup: 'Semi-arid hills, 17:10, sunset 18:20. You are lost-but-stationary after deciding to stay put for the night (you left a trip plan; you are overdue at 20:00). Clear sky, calm, forecast 2 °C. Thunderstorms are visible over mountains 20 km upstream. Options: (1) a sandy, flat wash with a cut bank for shade; (2) a gravel terrace 4 m above the wash, scattered shrubs, 100 m from an open ridge you could signal from; (3) the open ridge crest itself; (4) a hollow behind a rock outcrop, 2 m above the wash floor.',
    question: 'Where do you spend the night?',
    choices: [
      { id: 'a', text: 'The wash — soft sand to sleep on, the cut bank behind you, out of any breeze.', why: 'Flash-flood path with storms upstream, and a cold-air drain on a clear, calm night.' },
      { id: 'b', text: 'The terrace, with a shrub windbreak and grass bed; signal from the ridge as needed.', why: 'Best: above flood level and the cold pool, near a signal spot, materials to hand. Signal from the ridge at dawn or when you hear a searcher.' },
      { id: 'c', text: 'The ridge crest — searchers can see you all night and you can signal at once.', why: 'Most exposed to wind and radiation, and to lightning if the storms drift over. Stay near the ridge, not on it.' },
      { id: 'd', text: 'The hollow behind the outcrop — it is out of sight of the wind and sheltered.', why: 'Low and close to the wash: cold air and flood water both arrive there; crevices may hold scorpions or snakes.' },
    ],
    best: 'b',
    debrief: 'Eliminate hazards first (flood path, lightning exposure), then choose for the biggest heat-loss path (clear, calm: radiation and cold-air pooling favour a raised terrace), then for rescue (a signal spot nearby). Staying put was already the right decision; the site makes it safe. Daylight budgeting matters too: 70 minutes is enough for a grass bed and a windbreak, not for an ambitious build.',
    concepts: ['site-selection', 'cold-air-pooling', 'drainage', 'stay-or-move', 'visibility'],
  },
  summary: [
    'Site before design: eliminate hazards, then fight the biggest heat-loss path, then convenience.',
    'Clear + calm nights: cold air drains and pools; sleep part-way up, not in hollows.',
    'Water: read channels, high-water marks and catchments; flash floods come from rain you cannot see.',
    'Wind: use the lee and stay low — but lee slopes in snow country can be avalanche slopes.',
    'Look up, upstream, down and around before you drop your pack.',
  ],
  furtherReading: ['avalanche-canada', 'nws-flood', 'lnt-principles'],
  references: ['army-atp-3-50-21', 'nws-flood', 'nws-lightning', 'avalanche-org', 'avalanche-canada', 'lnt-principles', 'nps-camping', 'kochanski-bushcraft'],
}
