import type { Lesson } from '../../types'

export const l10: Lesson = {
  id: 's2-l10',
  stage: 2,
  order: 10,
  title: 'Natural navigation',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s2-l8'],
  concepts: ['natural-navigation', 'nav-myths', 'angular-error'],
  objectives: [
    'Read **wind-shaped** clues — flagged trees, snow drifts and sastrugi, cornices, sand dunes — and turn them into a direction once you know the prevailing wind.',
    'Use **sun-driven asymmetries** (snow melt, vegetation, satellite dishes) and human features cautiously.',
    'Explain why **moss, tree rings and similar folk rules** are unreliable, and flag them as myths.',
    'Estimate the **error** of natural navigation and choose targets (large catching features) that tolerate it.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Natural navigation means reading direction from the landscape itself. Almost every reliable clue has one of two causes: **the wind** (which usually blows from a prevailing direction in a given region and season) or **the sun** (which is on the equator side of the sky outside the tropics). If you can name the cause behind a clue, you can judge how far to trust it. If you cannot, it is folklore.

Two facts shape everything below:

- A clue gives you a direction **only if you know the local cause** — e.g., "the prevailing wind here is from the south-west." Learn that *before* the trip (from a local, a wind rose, or by noticing the pattern on a day when you know where north is).
- Many clues give a **line, not an arrow** — they tell you the axis (say, NE–SW) but not which end is which. Another clue must settle the ambiguity.

### Wind clues`,
    },
    { type: 'diagram', id: 'natural-signs', caption: 'Wind-flagged tree, snow cornice and drift, and a barchan dune with its slip face — each with the wind that shaped it.' },
    {
      type: 'table',
      head: ['Clue', 'What you see', 'What it tells you', 'Watch out for'],
      rows: [
        ['**Flagged trees**', 'Branches only on one side; crown streaming like a flag; trunk leaning.', 'Branches point **downwind** of the strong prevailing wind (the windward side is stunted by drying, abrasion and ice).', 'Only on exposed trees — ridges, coasts, tree line. In valleys the wind is channelled by terrain.'],
        ['**Snow drifts and tails**', 'Drifts and "tails" of snow extending behind boulders, bushes and fence posts.', 'Tails lie on the **lee (downwind) side** of the obstacle — a clear arrow for the wind of the last storm.', 'The last storm’s wind may not be the prevailing one.'],
        ['**Sastrugi**', 'Hard, sculpted ridges of wind-packed snow.', 'Their long axis runs **parallel** to the wind that carved them — a line, not an arrow.', 'Settle the ambiguity with drift tails or cornices; crossing sastrugi at an angle warns you have drifted off line.'],
        ['**Cornices**', 'Overhanging lips of snow along ridges.', 'Cornices overhang the **lee side**, so the wind blew from the other side.', '**Hazard:** they can break far back from the edge. Stay well back on the windward side; never walk to the lip.'],
        ['**Barchan dunes**', 'Crescent-shaped dunes on hard desert floors.', 'The **horns point downwind**; the gentle slope faces the wind and the steep **slip face** (≈ 30–34°) is on the lee side.', 'Complex dune fields and changing seasonal winds scramble the pattern.'],
      ],
    },
    {
      type: 'md',
      md: `### Sun clues

Outside the tropics the sun spends the day on the **equator side** of the sky (south in the Northern Hemisphere, north in the Southern). That creates asymmetries:

- **Snow melts first** on equator-facing slopes and on the sunny side of trees and rocks; late snow patches linger on pole-facing slopes.
- Equator-facing slopes are often **drier**, with different plants; pole-facing slopes stay cooler and damper.
- Many trees carry **more and denser branches on the sunny side** — but only when they grow in the open. In a forest, light comes from gaps, not from the south.

### Human clues

- **Satellite TV dishes** point at geostationary satellites above the equator: roughly **south** in mid-northern latitudes, **north** in mid-southern latitudes. The exact azimuth depends on which satellite, so it can be SE or SW; the *tilt* also tells you roughly how far from the equator you are.
- **Churches** in traditional Christian regions often have the altar at the east end — often, not always. Street layouts, local custom and sunrise on a saint’s day all shift it.
- **Roads, power lines, fences, irrigation lines** are not direction clues but excellent **handrails and catching features**.

### Combine independent clues

One clue is a hint; three **independent** clues that agree are evidence. "Independent" means different causes — a flagged tree, a snow tail and the sun’s position — not three flagged trees on the same ridge, which share the same local wind eddy.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Myth: moss grows on the north side',
      md: 'Moss and lichen grow where it is **damp and shaded**, and on whatever side rain and runoff reach. In a humid forest that is every side; on a boulder by a stream it is the stream side; on a leaning trunk it is the upper face. At best it hints at local shade. Tree rings are no better — they are wider where the tree needed support or had more water, not toward the equator.',
    },
    { type: 'sim', id: 'nav-map', caption: 'Try sun-only and no-aid modes: aim for a large catching feature and watch how heading error accumulates.' },
  ],
  whyItMatters: 'When equipment fails, natural clues can keep you heading in a general direction instead of walking in circles. Knowing their error lets you choose a target you can actually hit — a coast, a river, a road — rather than a point you will miss.',
  science: [
    {
      type: 'md',
      md: `### How big is the error?

Honest field practitioners rate most natural clues at **±30–45°** on their own. What does that mean on the ground? The **lateral offset** $d$ after walking a distance $D$ on a heading that is wrong by angle $\\theta$ is

$$
d = D \\sin\\theta
$$

In words: the further you walk and the larger the error, the further sideways you end up. For small angles, the 1-in-60 rule ($d \\approx D\\,\\theta/60$ with $\\theta$ in degrees) is close enough; at 30–45° use the sine.

**Worked example.** Walking $D = 5\\ \\text{km}$ with $\\theta = 30°$: $d = 5 \\times \\sin 30° = 5 \\times 0.5 = 2.5\\ \\text{km}$ off. With $\\theta = 45°$: $d = 5 \\times 0.71 \\approx 3.5\\ \\text{km}$. A hut is a hopeless target; a river, road or coastline crossing your path for many kilometres is a good one.

### Why combining clues helps — and when it doesn’t

If $n$ clues have **independent, unbiased** random errors of about $\\sigma$ each, their average has error about $\\sigma/\\sqrt{n}$. Four clues at $\\pm 40°$ give roughly $40/\\sqrt 4 = \\pm 20°$. But errors from a **common cause** (all shaped by the same valley wind) do not average out — they add a bias. That is why independence matters more than number.

### Walking in circles

In an experiment by Souman and colleagues (2009), people GPS-tracked while walking "straight" in a large forest or desert **held a straight course when the sun or moon was visible**, but under overcast skies they repeatedly **walked in circles** and crossed their own paths, without noticing. Blindfolded walkers made even tighter circles. Small, random drifts in each step accumulate; without an external reference you cannot correct them. This is why even a crude clue, checked every few minutes, is far better than none.

### Satellite-dish tilt (a worked example)

A dish aimed at a geostationary satellite on your own longitude tilts up at elevation $e$ given by $\\tan e = (\\cos\\varphi - 0.151)/\\sin\\varphi$, where $\\varphi$ is latitude and 0.151 is Earth’s radius divided by the satellite’s orbital radius. At $\\varphi = 50°$: $(0.643 - 0.151)/0.766 \\approx 0.64$, so $e \\approx 33°$. At $\\varphi = 30°$: $(0.866 - 0.151)/0.5 \\approx 1.43$, so $e \\approx 55°$. Dishes point lower the further you are from the equator.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Coastal headland.** Hawthorns and pines are flagged hard inland by the prevailing onshore wind. Combined with the sound of surf behind you, you can keep a steady course inland to the coast road — a long catching feature.

**Mountain ridge in winter.** Cornices overhang the north-east side, so the storm winds were from the south-west; drift tails behind boulders agree. The same observation is a **safety warning**: keep well back from the corniced edge.

**Arctic tundra.** On flat, featureless snow in overcast light, sastrugi are one of the few references. Travellers there have long kept a steady angle across the sastrugi to hold a course — checking it against drift tails and any glimpse of the sun.

**Desert.** In a barchan field the horns all point one way. That, plus the sun, gives two independent clues. In complex star-dune fields, dunes are useless for direction.

**Temperate forest.** Moss is on every side of the trunks; the canopy hides the sun. Natural clues are weakest exactly where people most often get lost — use streams, ridges and trails (terrain) instead.

**Tropical rainforest.** High humidity and overhead sun make vegetation asymmetries nearly meaningless. Drainages and the sun at gaps are better.

**Urban and rural.** Satellite dishes across a village all point the same way (roughly toward the equator); old churches often face east; farm fields and roads give long straight handrails.`,
    },
  ],
  mistakes: [
    'Myth: moss grows on the north side of trees. It grows where it is damp and shaded — which can be any side.',
    'Myth: tree rings are wider on the south side. Ring width follows support, water and light, not the compass.',
    'Trusting a single clue, or several clues that share one cause (all trees on one windy ridge).',
    'Forgetting that a wind clue needs the local prevailing wind direction — learn it before the trip.',
    'Reading flagged trees in a valley, where terrain channels the wind.',
    'Aiming natural navigation at a small target (a hut, a car) instead of a large catching feature.',
    'Walking to the edge of a cornice to "read" it.',
  ],
  exercises: [
    {
      id: 's2-l10-e1',
      title: 'Natural-signs journal',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Notebook or phone notes', 'Compass', 'A park, coast path or rural lane you know'],
      steps: [
        'Find out the prevailing wind for your area (a local weather service wind rose, or ask).',
        'On a known path, record at least 8 clues: flagged trees, snow or sand patterns, moss, sunny-side vegetation, dishes, church orientation.',
        'For each, write the direction it suggests and the cause behind it, then check with a compass.',
        'Compute the error of each clue and the error of the average of the independent ones.',
      ],
      success: ['At least 8 clues recorded with a stated cause.', 'You can say which clues were within ±30° and which were misleading, and why.'],
      skill: 'natural-nav',
    },
    {
      id: 's2-l10-e2',
      title: 'Sun-only and no-aid runs in the simulator',
      level: 1,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'In the navigation simulator, choose no-aid mode and try to walk 3 km to a point. Record how far you miss.',
        'Repeat aiming at a long catching feature instead. Compare.',
        'Repeat in sun-only mode and note how often you need to re-check the sun to stay within 20°.',
      ],
      success: ['You reached the catching feature in no-aid or sun-only mode.', 'You can explain why the point target failed and the catching feature did not.'],
    },
  ],
  simulations: ['nav-map'],
  quiz: [
    {
      id: 's2-l10-q6',
      kind: 'single',
      prompt: 'Your phone is dead and you are in overcast forest. The map (memorised) shows a long east–west road about 3 km to the south. The only clues are moss on trunks and one flagged tree in a clearing. What is the soundest approach?',
      choices: [
        { id: 'a', text: 'Follow the moss on the trunks, which marks north, and keep it at your back.', why: 'Moss is not a direction indicator.' },
        { id: 'b', text: 'Walk straight “by feel” — you know roughly which way you came in this morning.', why: 'Without an external reference people walk in circles (Souman et al., 2009).' },
        { id: 'c', text: 'If moving is justified: STOP, combine several clues and the sun, aim for the road, re-check often.', why: 'Best — combines the decision rules with an error-tolerant target.' },
        { id: 'd', text: 'Take the flagged tree’s direction as exact and walk on it for 3 km without checking.', why: 'A single clue may be off by tens of degrees, and you will drift further without re-checks.' },
      ],
      answer: 'c',
      concepts: ['natural-navigation', 'stop', 'stay-or-move', 'decisions'],
      explanation: 'Natural navigation is a way to hit big targets, and it is used inside the stay-or-move decision — not instead of it. Gather several independent clues, use the road as a catching feature and re-check every few hundred metres.',
    },
    {
      id: 's2-l10-q3',
      kind: 'single',
      prompt: 'Assuming you know the prevailing wind or where the sun is, which of these gives you only a **line**, not a direction arrow?',
      choices: [
        { id: 'a', text: 'Snow tails behind boulders', why: 'An arrow — tails form on the lee side, so they point downwind.' },
        { id: 'b', text: 'The horns of a barchan dune', why: 'An arrow — the horns point downwind and the slip face is on the lee.' },
        { id: 'c', text: 'The alignment of sastrugi alone', why: 'Correct — their long axis gives the wind line, but not which end is upwind; you need another clue.' },
        { id: 'd', text: 'Earlier snow melt on one valley side', why: 'An arrow (outside the tropics) — the sunnier, equator-facing slope melts first.' },
      ],
      answer: 'c',
      concepts: ['natural-navigation', 'nav-myths'],
      explanation: 'Distinguish arrows (drift tails, dune horns, cornices, sunny slopes) from lines (sastrugi) and from noise (moss).',
    },
    {
      id: 's2-l10-q4',
      kind: 'single',
      prompt: 'On a snowy ridge the cornices overhang the east side. Where should you walk?',
      diagram: 'natural-signs',
      choices: [
        { id: 'a', text: 'Along the crest, where the snow is firmest.', why: 'The crest may be cornice — unsupported snow that can break well back from the visible edge.' },
        { id: 'b', text: 'Well back from the edge on the west (windward) side.', why: 'Correct — cornices overhang the lee (east) side; the windward side is supported ground.' },
        { id: 'c', text: 'On the east side below the cornice, out of the wind.', why: 'That is under the cornice, in its fall line, and often on a loaded avalanche slope.' },
        { id: 'd', text: 'Near the lip, so you can see down the east face.', why: 'Never approach the lip; fracture lines can run far back.' },
      ],
      answer: 'b',
      concepts: ['natural-navigation'],
      explanation: 'Cornices tell you the wind blew from the west — and that the east edge is dangerous. Formal avalanche training is needed for travel on snowy ridges.',
    },
    {
      id: 's2-l10-q1',
      kind: 'single',
      prompt: 'In a Northern Hemisphere forest, what does moss on a tree trunk tell you?',
      choices: [
        { id: 'a', text: 'Where it is locally damp and shaded — not a direction', why: 'Correct — moss follows moisture and shade, which can be on any side.' },
        { id: 'b', text: 'North — it grows on the north side, like a compass', why: 'Myth: in a damp forest moss is often all around the trunk.' },
        { id: 'c', text: 'South — it grows on the sunnier, equator-facing side', why: 'Moss favours damp and shade, not sun — and even that varies tree by tree.' },
        { id: 'd', text: 'The prevailing wind — it grows on the windward side', why: 'Moss tracks local moisture and shade, not the wind direction.' },
      ],
      answer: 'a',
      concepts: ['nav-myths', 'natural-navigation'],
      explanation: 'Myth: “moss grows on the north side”. Moss follows moisture and shade, which can be on any side. In a damp forest it is often all around the trunk, so it cannot replace a compass.',
    },
    {
      id: 's2-l10-q5',
      kind: 'single',
      prompt: 'You have four independent, unbiased natural clues, each good to about ±40°. Roughly what error should you expect for their average?',
      choices: [
        { id: 'a', text: '±20°', why: 'Correct — σ/√n = 40/√4 = 40/2.' },
        { id: 'b', text: '±10°', why: 'Divided by n (4) instead of √n (2).' },
        { id: 'c', text: '±40°', why: 'Averaging independent clues does reduce the error.' },
        { id: 'd', text: '±80°', why: 'Multiplied by √4 instead of dividing — errors in an average shrink.' },
      ],
      answer: 'a',
      concepts: ['natural-navigation', 'angular-error'],
      explanation: '$\\sigma/\\sqrt{n} = 40/\\sqrt{4} = 40/2 =$ **±20°** — but only if the clues really are independent. Shared causes create a bias that averaging cannot remove.',
    },
    {
      id: 's2-l10-q2',
      kind: 'single',
      prompt: 'Using natural clues you hold a heading that is 30° off the true line for 4 km. How far to the side of your intended line do you end up?',
      diagram: 'one-in-sixty',
      choices: [
        { id: 'a', text: '2 km', why: 'Correct — 4 × sin 30° = 4 × 0.5 = 2 km.' },
        { id: 'b', text: '3.5 km', why: 'Used cos 30° (0.87) instead of sin 30°.' },
        { id: 'c', text: '0.5 km', why: 'Forgot to multiply by the 4 km distance — that is just sin 30°.' },
        { id: 'd', text: '8 km', why: 'Divided by sin 30° instead of multiplying (4 ÷ 0.5).' },
      ],
      answer: 'a',
      concepts: ['angular-error', 'natural-navigation'],
      explanation: '$d = D\\sin\\theta = 4 \\times \\sin 30° = 4 \\times 0.5 =$ **2 km**. Only a large catching feature tolerates that.',
    },
  ],
  scenario: {
    id: 's2-l10-sc',
    setup: 'You are on a guided ski-tour in subarctic tundra and have been separated from the group in flat, overcast light at 12:30. Sunset is at 15:10. Your phone died in the −15 °C cold. You know camp is on a large river that runs east–west about 6 km south of you, and the guide said this morning that the prevailing wind here is from the north-west. Your own tracks have already blown in. Sastrugi run NW–SE, and snow tails behind boulders extend to the south-east.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Head off immediately along the sastrugi, using their direction as a compass to the river.', why: 'Sastrugi alone give a line (NW–SE), not south; you would be heading SE at best and ignoring a quick chance to revive the phone.' },
      { id: 'b', text: 'STOP: warm the phone in your clothes, head south off the wind clues to the river, re-check often.', why: 'Best — warming the battery may restore GPS; two consistent wind clues give an arrow; a 6 km-wide catching feature tolerates the error; and 6 km fits the daylight budget.' },
      { id: 'c', text: 'Wait where you are for the sun to show through, so you have a reliable direction first.', why: 'Overcast could last all day; with 2½ hours of light at −15 °C, waiting without shelter is itself a decision with costs.' },
      { id: 'd', text: 'Check which side of the boulders has lichen on it to find north, then head that way.', why: 'Lichen distribution is not a compass (myth), especially on wind-scoured tundra rocks.' },
    ],
    best: 'b',
    debrief: 'Cold kills batteries but often only temporarily — warming the phone costs nothing (Stage 1: **phone use**). Two independent-looking wind clues (drift tails as an **arrow**, sastrugi as a **line**) plus local knowledge of the prevailing wind give a usable heading. At ±30° over 6 km you could be 3 km off to the side — but the river is a long catching feature, so you still hit it. The daylight budget allows the trip if you start now; if you have not reached the river by around 14:30, switch to a shelter plan.',
    concepts: ['natural-navigation', 'battery-strategy', 'phone-use', 'daylight', 'stop'],
  },
  summary: [
    'Reliable clues come from the wind or the sun; name the cause or distrust the clue.',
    'Flagged trees point downwind; snow tails lie in the lee; cornices overhang the lee; barchan horns point downwind.',
    'Sastrugi give a line, not an arrow. Cornices are also a hazard — stay well back.',
    'Myths: moss and tree rings are not compasses.',
    'Expect ±30–45° per clue; average only independent clues; aim for big catching features ($d = D\\sin\\theta$).',
  ],
  furtherReading: ['natural-navigator', 'souman-circles-2009'],
  references: ['natural-navigator', 'souman-circles-2009', 'army-atp-3-50-21', 'afh-10-644', 'kjellstrom', 'avalanche-org'],
}
