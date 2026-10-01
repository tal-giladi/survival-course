import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's2-l2',
  stage: 2,
  order: 2,
  title: 'Reading topography',
  level: 'beginner',
  minutes: 45,
  prerequisites: ['s2-l1'],
  concepts: ['contours', 'slope', 'landforms'],
  objectives: [
    'Read **contour lines**, the contour interval and index contours, and tell uphill from downhill.',
    'Estimate **slope angle** from contour spacing and the map scale.',
    'Recognise **ridges, spurs, valleys (re-entrants), saddles, summits and cliffs** from contour shapes.',
    'Distinguish **convex and concave** slopes and predict **dead ground**.',
    'Draw a simple **cross-section profile** of a route.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A **contour line** joins points of equal height. Imagine flooding the land and marking the shoreline every 10 m as the water rises: each shoreline is a contour. Seen from above, those shorelines draw the shape of the ground.

### Reading the lines

- **Contour interval** — the height between adjacent lines — is in the margin: commonly 5 or 10 m on 1:25,000 maps, 10 or 20 m on 1:50,000 maps, 20 or 40 ft on USGS 1:24,000 quads. Always check: the same drawing means very different ground at a 5 m and a 20 m interval.
- **Index contours** — every fourth or fifth line — are drawn thicker and labelled with their height. The numbers are printed so that they read **uphill** (their tops face up the slope) on many maps.
- **Uphill or downhill?** Look for height labels, spot heights, summits (closed rings getting smaller) and water: **streams always run downhill**, and lakes sit in low ground.
- **Spacing = steepness.** Close lines: steep. Wide lines: gentle. Lines merging: cliff (often with a separate cliff symbol).`,
    },
    { type: 'diagram', id: 'contours-profile', caption: 'A hill in contours and the same hill as a cross-section. Where lines crowd, the profile steepens.' },
    {
      type: 'md',
      md: `### Landforms from contour shapes

| Landform | What the contours do | On the ground |
|---|---|---|
| **Summit / knoll** | Closed rings, smallest in the middle | High point; ground falls in all directions |
| **Ridge / spur** | U- or V-shapes **pointing downhill** | A tongue of high ground; water drains off both sides |
| **Valley / re-entrant** | U- or V-shapes **pointing uphill** (upstream), often with a stream | Low ground you would walk *up*; water collects here |
| **Saddle (col, pass)** | An hourglass: two sets of rings with a low point between | Lowest point between two highs — natural crossing |
| **Cliff / steep face** | Lines crowd or merge; cliff symbol | Impassable or dangerous for walkers |
| **Plateau / flat** | Few, widely spaced lines | Hard to navigate: few features, easy to drift |

The **V-rule**: where contours cross a stream, the V points **upstream**. Spurs and valleys look alike in a sketch; the direction the V points — uphill or downhill — is what tells them apart.`,
    },
    { type: 'diagram', id: 'landforms', caption: 'Contour signatures of summit, spur, re-entrant, saddle and cliff. Check which way the Vs point.' },
    {
      type: 'md',
      md: `### Convex, concave and dead ground

Contours spaced **evenly** mean a uniform slope. On a **convex** slope (bulging out) the lines are **wide at the top and crowded at the bottom** — from the top you cannot see the steep lower part, so a walker descending finds the slope getting steeper under their feet, and a cliff can appear with little warning. On a **concave** slope (dished) the lines are **crowded at the top and wide at the bottom** — you can see the whole slope from above.

Ground you cannot see from where you stand is **dead ground**. It matters for route-finding (you will not see the stream until you are on it), for signaling (a searcher on a convex hill cannot see you below the brow) and for choosing where to wait.

### Drawing a profile

1. Lay a strip of paper along your route on the map.
2. Tick every place the route crosses a contour and write its height.
3. Transfer the ticks to the bottom of graph paper, mark heights vertically, and join the points.
4. Exaggerate the vertical scale if you like, but note it — the profile will look steeper than the ground.

A profile shows at a glance where the climbs, drops and flat sections are, how much total ascent a route has, and where dead ground hides the next section.

### Aspect

The **aspect** of a slope is the compass direction it faces — the way water would run straight down it, at right angles to the contours. You will use aspect in lesson 7 to relocate: “I am on a slope that falls to the north-east” rules out most of the map.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Contours over everything',
      md: 'Contours are the most durable information on the map. Tracks move and forests are cut, but a spur surveyed 60 years ago is still there. When the map and the ground seem to disagree, match the **shape of the land** first.',
    },
  ],
  whyItMatters: 'Slope decides your speed, your energy use, your risk of falls, and — in winter — avalanche exposure (most slab avalanches start on slopes of about 30–45°). Landforms are also the navigator’s signposts: ridges, streams and saddles can be recognised in fog or in forest where nothing else is visible. Reading contours turns a flat piece of paper into a picture of what your legs are about to meet.',
  science: [
    {
      type: 'md',
      md: `### Slope from contour spacing

The **gradient** is how much you climb for each unit you travel horizontally: vertical interval divided by horizontal distance. The **slope angle** is the angle whose tangent is that gradient:

$$
\\text{gradient} = \\frac{\\Delta h}{\\Delta x}, \\qquad \\theta = \\arctan\\left(\\frac{\\Delta h}{\\Delta x}\\right)
$$

Here $\\Delta h$ is the height gained (contour interval × number of intervals, in metres) and $\\Delta x$ is the horizontal distance (map distance × scale, in metres).

**Worked example 1.** 1:25,000 map, 10 m interval, adjacent contours **2 mm** apart. Horizontal distance $= 2\\ \\text{mm} \\times 25\\ \\text{m/mm} = 50$ m. Gradient $= 10/50 = 0.2$ (20 %). $\\theta = \\arctan(0.2) \\approx 11.3^\\circ$ — a steady hill-walk slope.

**Worked example 2.** 1:50,000 map, 10 m interval, **5 intervals** within **3 mm**. $\\Delta h = 50$ m, $\\Delta x = 3 \\times 50 = 150$ m. Gradient $= 0.33$, $\\theta = \\arctan(0.33) \\approx 18.4^\\circ$ — steep, slow going.

**Critical spacings** (1:25,000, 10 m interval):

| Contour spacing | Horizontal distance | Slope |
|---|---|---|
| 4 mm | 100 m | ≈6° |
| 2 mm | 50 m | ≈11° |
| 1 mm | 25 m | ≈22° |
| 0.7 mm | ≈17 m | ≈30° (avalanche-relevant) |
| 0.4 mm | 10 m | 45° — lines nearly touching |

Once lines are less than about 1 mm apart at this scale you are on ground where a slip can become a fall; when they merge, it is a cliff.

### Height gained

Count intervals, not lines: from the 340 m contour to the 520 m contour at a 20 m interval is $(520 - 340)/20 = 9$ intervals. Summing climbs along a profile gives **total ascent**, which you will feed into Naismith’s rule in lesson 5.`,
    },
    { type: 'diagram', id: 'slope-spacing', caption: 'The same 10 m interval at different spacings: halving the spacing roughly doubles the gradient.' },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** In mist on a broad summit plateau, the only safe way down is a spur. The walkers look for contours bulging *downhill* in the right direction and check each step: the ground should fall away on both sides. The re-entrant beside it ends in crowded lines — a hidden cliff.

**Forest.** Under canopy you cannot see far, but you can feel the ground. Crossing a line of re-entrants, each dip with a small stream, lets a walker count features like beads on a string.

**Desert.** Wadis and dry washes are valleys whose V’s point upstream, even though no water is visible. A flash flood from distant rain runs down them — which is why the V-rule is also a hazard map.

**Tropical.** In steep rainforest hills, contours at 20 m intervals can hide 10 m bluffs between lines. The map says “steep”; the ground says “cliff”. Allow for detail the interval cannot show.

**Arctic and subarctic.** On flat tundra with a 10 m interval there may be one contour per kilometre. Low eskers and moraine ridges are the only relief; lakes and bog shapes become the main features.

**Coastal and rural.** Coastal paths run along convex cliff tops: the brow hides the drop. On farmland, a gentle concave valley lets you see the whole field system below — a good place to fix your position.

**Urban.** Cities have contours too. Streets that climb steeply, or a river valley through the middle of town, are the same landforms under concrete.`,
    },
  ],
  mistakes: [
    'Reading spurs as valleys (and the reverse) — check which way the Vs point and where the streams are.',
    'Not checking the contour interval: 1 mm spacing at a 5 m interval is a very different slope from 1 mm at 20 m.',
    'Counting contour lines instead of intervals when computing height gain.',
    'Assuming ground between contours is smooth — small cliffs and bluffs can hide between lines.',
    'Descending a convex slope expecting it to stay gentle.',
    'Myth: “Contour numbers are always printed upright.” On many maps they are aligned to read uphill, so they can appear upside down.',
    'Myth: “Following a stream downhill always leads to safety.” Streams also lead into gorges, over waterfalls and into dense vegetation — use them as features, not as automatic escape routes.',
  ],
  exercises: [
    {
      id: 's2-l2-e1',
      title: 'Contours to profile',
      level: 2,
      safety: 'home',
      minutes: 45,
      materials: ['A topographic map with a hill and a valley (free USGS or OS sheet)', 'Paper strip', 'Graph paper', 'Pencil and ruler'],
      steps: [
        'Choose a 2–3 km straight line crossing a ridge and a valley.',
        'Tick each contour crossing on the paper strip and label its height.',
        'Draw the profile on graph paper. Mark the steepest section and compute its slope with the arctan method.',
        'Mark any dead ground: places you could not see from the start point.',
        'On the same map, find and label one example each of summit, spur, re-entrant, saddle and (if present) cliff.',
      ],
      success: [
        'Profile heights match the contour labels.',
        'Your steepest-section slope is within about 3° of a partner’s or of a GIS/online profile tool.',
        'All five landforms correctly identified with the V-rule.',
      ],
      skill: 'terrain-association',
    },
    {
      id: 's2-l2-e2',
      title: 'Walk the contours',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['1:25,000 map of a local park or hill with paths', 'Notebook'],
      steps: [
        'On a public path in daylight, stop at 4–5 points where the ground changes shape (a spur, a dip, a saddle).',
        'At each, find the matching contour shape on the map and note the slope you estimated from spacing.',
        'Compare how steep it felt with your estimate.',
      ],
      success: ['You matched every landform you stopped at.', 'Your slope estimates were within about 5° of how the ground felt (use a phone inclinometer app to check if you have one).'],
      skill: 'terrain-association',
      safetyNote: 'Stay on paths; do not go near crowded contours or cliff symbols. Leave a trip plan.',
    },
  ],
  simulations: ['nav-map'],
  quiz: [
    {
      id: 's2-l2-q3',
      kind: 'single',
      prompt: 'You are descending in poor visibility. On the map, the contours below you are widely spaced near your position and become crowded lower down. Which statement is **wrong**?',
      choices: [
        { id: 'a', text: 'This is a convex slope: wide spacing above, crowded below.', why: 'True — wide above, crowded below is the convex signature.' },
        { id: 'b', text: 'You may not see the steep lower section from where you stand.', why: 'True — convex slopes create dead ground beneath the brow.' },
        { id: 'c', text: 'The slope will get gentler the further down you go.', why: 'Correct — this is the false one: crowding below means it steepens.' },
        { id: 'd', text: 'Check the map for cliff symbols and pick a spur or path first.', why: 'True and wise — the steepening section is where falls happen.' },
      ],
      answer: 'c',
      concepts: ['contours', 'slope', 'landforms'],
      explanation: 'Convex slopes hide their steepest part. Slow down, check the map and pick the safest line before committing.',
    },
    {
      id: 's2-l2-q2',
      kind: 'single',
      prompt: 'Where contour lines cross a stream, they form Vs. Which way do the Vs point?',
      choices: [
        { id: 'a', text: 'Downstream, toward lower ground', why: 'That is the pattern of a spur, not a valley.' },
        { id: 'b', text: 'Upstream, toward higher ground', why: 'Correct — the valley cuts back into the slope, so each contour bends uphill.' },
        { id: 'c', text: 'Always toward north', why: 'Contour shapes follow landforms, not compass direction.' },
        { id: 'd', text: 'It depends on the contour interval', why: 'The interval changes how many Vs there are, not their direction.' },
      ],
      answer: 'b',
      concepts: ['contours', 'landforms'],
      explanation: 'V-rule: in valleys the Vs point upstream (uphill); on spurs they point downhill.',
    },
    {
      id: 's2-l2-q6',
      kind: 'single',
      prompt: 'Between two summits the contours form an **hourglass** pattern. What does it show?',
      choices: [
        { id: 'a', text: 'A saddle, usually the easiest place to cross the ridge', why: 'Correct — a saddle (col, pass) is the lowest point on the ridge between two highs.' },
        { id: 'b', text: 'A knoll, a small extra summit best avoided when crossing', why: 'A knoll shows as a small closed ring, not an hourglass between two summits.' },
        { id: 'c', text: 'A re-entrant that funnels water down off the ridge', why: 'A re-entrant shows as Vs pointing uphill, not an hourglass.' },
        { id: 'd', text: 'A cliff band blocking the way between the two summits', why: 'Cliffs show as merged, crowded contours or a cliff symbol.' },
      ],
      answer: 'a',
      concepts: ['landforms'],
      explanation: 'A saddle (col, pass) is the lowest point on the ridge between two highs, which is why trails and passes cross there.',
    },
    {
      id: 's2-l2-q1',
      kind: 'single',
      prompt: 'On a **1:25,000** map with a **10 m** contour interval, adjacent contours are **1 mm** apart. What is the slope angle?',
      choices: [
        { id: 'a', text: '21.8°', why: 'Correct — 1 mm = 25 m horizontal; arctan(10/25) = arctan(0.4) ≈ 21.8°.' },
        { id: 'b', text: '68.2°', why: 'Ratio inverted — arctan(25/10) puts horizontal over vertical.' },
        { id: 'c', text: '76.0°', why: 'Wrong conversion — 1 mm taken as 2.5 m, so arctan(10/2.5).' },
        { id: 'd', text: '2.3°', why: 'Wrong conversion — 1 mm taken as 250 m (the 1 cm value), so arctan(10/250).' },
      ],
      answer: 'a',
      concepts: ['slope'],
      explanation: '1 mm × 25 m/mm = 25 m horizontal. Gradient = 10/25 = 0.4. arctan(0.4) ≈ **21.8°**.',
    },
    {
      id: 's2-l2-q4',
      kind: 'single',
      prompt: 'Your route climbs from the **340 m** contour to the **520 m** contour. The contour interval is **20 m**. How many contour **intervals** do you climb through?',
      choices: [
        { id: 'a', text: '9 intervals', why: 'Correct — (520 − 340) ÷ 20 = 9.' },
        { id: 'b', text: '8 intervals', why: 'That is the number of intermediate lines you cross, not intervals.' },
        { id: 'c', text: '10 intervals', why: 'That counts every line including both named ones — lines, not intervals.' },
        { id: 'd', text: '26 intervals', why: 'Forgot to subtract the start height: 520 ÷ 20 = 26.' },
      ],
      answer: 'a',
      concepts: ['contours'],
      explanation: '(520 − 340) ÷ 20 = **9** intervals (you will cross 8 intermediate lines between the two named ones). Count intervals, not lines, when computing height gain.',
    },
    {
      id: 's2-l2-q5',
      kind: 'single',
      prompt: 'You are drawing a route profile and have just laid a paper strip along the route on the map. What is the **next** step?',
      choices: [
        { id: 'a', text: 'Tick each contour crossing and write its height', why: 'Correct — the ticks and heights are what you later transfer and plot.' },
        { id: 'b', text: 'Transfer the strip to the base of graph paper', why: 'Too early — the strip has no ticks or heights on it yet.' },
        { id: 'c', text: 'Plot each height vertically and join the points', why: 'That is the last step, after ticking and transferring.' },
        { id: 'd', text: 'Note the vertical exaggeration of the graph', why: 'You note it on the finished profile, not before marking the strip.' },
      ],
      answer: 'a',
      concepts: ['contours'],
      explanation: 'Strip → ticks with heights → transfer → plot and join. Note any vertical exaggeration.',
    },
  ],
  scenario: {
    id: 's2-l2-sc',
    setup: 'Late autumn in a mountain range. You and a friend are on a broad summit at 15:45; sunset is 16:50. Cloud has come down and visibility is 40 m. You planned to descend a spur on the north-east side; the map shows a re-entrant immediately east of it with contours that merge into a cliff symbol at 200 m below the summit. You are not certain which way you are facing.',
    question: 'What is your best course of action?',
    choices: [
      { id: 'a', text: 'Head downhill on the steepest line — getting below the cloud quickly is the priority now.', why: 'The steepest way down is exactly the line that leads into the re-entrant and the cliff.' },
      { id: 'b', text: 'Bearing onto the spur; check the ground falls away both sides, and stop if it closes into a hollow.', why: 'Best: uses the contour signature of a spur as a continuous check, and daylight is enough for a controlled descent.' },
      { id: 'c', text: 'Stay on the summit and wait for the cloud to lift before starting any descent at all.', why: 'Possible if you have shelter and warmth, but with an hour of light and a known, identifiable descent line it adds a night out for little gain.' },
      { id: 'd', text: 'Find the first stream and follow it downhill, since water always leads to lower ground.', why: 'Streams collect in re-entrants — here, the one ending in the cliff.' },
    ],
    best: 'b',
    debrief: 'Landforms are navigation handrails you can feel. A spur falls away on both sides; a re-entrant closes in and collects water. With 65 minutes of daylight and a known landform to follow, a careful, checked descent beats both a blind rush and an unnecessary night out. If the checks fail and light runs short, stopping and sheltering becomes the better choice — keep the stay-or-move decision open.',
    concepts: ['landforms', 'contours', 'daylight', 'stay-or-move'],
  },
  summary: [
    'Contours join points of equal height; check the interval and use index contours and water to tell up from down.',
    'Slope: gradient = vertical interval ÷ horizontal distance; angle = arctan(gradient). 10 m at 2 mm on 1:25,000 ≈ 11°.',
    'Valley Vs point upstream; spur Vs point downhill; hourglass = saddle; merged lines = cliff.',
    'Convex slopes hide their steep lower part (dead ground); concave slopes can be seen whole from above.',
    'A profile shows climbs, drops and total ascent — the input to timing and route choice.',
  ],
  furtherReading: ['kjellstrom', 'langmuir-mountaincraft', 'os-mapzone'],
  references: ['usgs-symbols', 'usgs-topo', 'langmuir-mountaincraft', 'freedom-hills', 'tc-3-25-26', 'avalanche-org'],
}
