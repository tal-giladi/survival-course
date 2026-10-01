import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's2-l1',
  stage: 2,
  order: 1,
  title: 'Maps and scale',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l3'],
  concepts: ['map-scale', 'grid-reference', 'map-symbols'],
  objectives: [
    'Convert between **map distance and ground distance** at 1:25,000 and 1:50,000, including curved routes.',
    'Give and read **4- and 6-figure grid references**, and state how precise each one is.',
    'Recognise the main **map symbols** and read the legend and margin of an unfamiliar map.',
    'Explain what a **map datum** is and why your GPS datum must match your map.',
    'Judge how far to trust a map from its **scale, age and source**.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A topographic map is a scaled-down, simplified model of the ground: **shape** (contours, next lesson), **features** (water, vegetation, tracks, buildings) and a **grid** that lets you name any point. Everything else in this stage — bearings, pacing, relocation, even GPS — assumes you can read this model fluently.

### Scale

Scale is a ratio: **1:25,000** means 1 unit on the map is 25,000 of the same units on the ground. Convert it once into numbers you can use in your head:

| Scale | 1 mm on map | 1 cm on map | 1 km on ground | Typical use |
|---|---|---|---|---|
| **1:25,000** | 25 m | 250 m | **4 cm** | Walking, detailed terrain (OS Explorer, many European maps) |
| **1:24,000** | 24 m | 240 m | ≈4.2 cm | USGS 7.5-minute quadrangles (US Topo) |
| **1:50,000** | 50 m | 500 m | **2 cm** | Hill walking over larger areas, military and many national series |
| **1:100,000+** | 100 m+ | 1 km+ | ≤1 cm | Trip planning, road travel — too coarse for foot navigation |

A **large-scale** map (1:25,000) shows a *small* area in *large* detail; a **small-scale** map (1:250,000) shows a large area with little detail. The words feel backwards — think of the fraction: 1/25,000 is a bigger number than 1/250,000.`,
    },
    { type: 'diagram', id: 'map-scale', caption: 'The same 1 km on the ground: 4 cm at 1:25,000, 2 cm at 1:50,000. Use the scale bar, not the ruler you assume matches it.' },
    {
      type: 'md',
      md: `### Measuring distance

- **Straight line:** ruler or the romer scale on your compass baseplate, then convert.
- **Curved route (trail, river, contour line):** lay the edge of a piece of paper along the route, pivoting and ticking at each bend, then lay the paper against the scale bar. A length of thread works too. Measuring only the straight line between ends underestimates a winding route — often badly.
- **Grid squares:** on most topographic maps the grid is **1 km** — a quick sanity check: a route across three squares and a bit is a bit over 3 km (more if it runs diagonally: a square’s diagonal is ≈1.4 km).

Map distance is always **horizontal** distance. Climbing and rough ground cost extra time and paces — lessons 2 and 5 handle that.

### Grid references: “along the corridor, then up the stairs”

The grid lines are numbered. **Eastings** (the vertical lines) increase to the east; **northings** (the horizontal lines) increase to the north. Always give the easting first — along the corridor, then up the stairs.

- **4-figure reference** — names a whole **1 km square** by the lines that meet at its **south-west (bottom-left) corner**: square **3457** lies east of easting 34 and north of northing 57.
- **6-figure reference** — divide the square into tenths by eye (or with the romer). A hut 4 tenths east of line 34 and 7 tenths north of line 57 is at **344 577**. This names a **100 m × 100 m** square, not a point.
- **8-figure reference** — tenths of tenths: a 10 m square. Realistic only with a romer or GPS.`,
    },
    { type: 'diagram', id: 'grid-ref', caption: 'Working out a 6-figure reference: easting 34 + 4 tenths = 344, northing 57 + 7 tenths = 577 → 344 577.' },
    {
      type: 'md',
      md: `### Coordinate systems, briefly

- **National grids** (e.g. the British National Grid) and **UTM** (Universal Transverse Mercator) are flat metric grids. UTM splits the world into 60 zones, each 6° of longitude wide; a full UTM position is a zone plus an easting and a northing in metres, e.g. zone 33T, 512 300 mE, 5 084 700 mN. A 6-figure reference on that map uses only the kilometre and hundred-metre digits: **123 847**. Because those digits repeat every 100 km, **MGRS** (the military grid) adds two letters for the 100 km square.
- **Latitude/longitude** is angular. One degree of latitude ≈ **111 km**, one minute ≈ 1.85 km (a nautical mile), one second ≈ 31 m. Degrees of longitude shrink toward the poles (≈55 km at 60° N or S). Lesson 11 covers formats and reading them from a phone.

### Datums: the invisible trap

A **datum** is the mathematical model of Earth’s shape that ties coordinates to the ground. The same numbers on different datums can be **tens to hundreds of metres apart**. Most GPS devices and phones default to **WGS84**; many older maps use local datums (NAD27 in North America, OSGB36 behind the British grid, Tokyo datum, ED50 in parts of Europe). The datum is printed in the map margin — **set your GPS to match the map** (or convert), and always state the datum when you pass a position to rescuers.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Read the margin before you read the map',
      md: 'Scale, contour interval, grid system, **datum**, magnetic declination (lesson 3), legend and **date of survey or revision** are all in the margin. Ten seconds with the margin prevents the classic errors: wrong scale for distance, wrong datum for GPS, and trusting a 30-year-old track that no longer exists.',
    },
    {
      type: 'md',
      md: `### Symbols and colours

Legends vary between countries — always read the one on your map — but conventions are similar. On **USGS** maps: contours brown, water blue, woodland green, open land white, roads and trails black or red, buildings black. **Orienteering maps** use their own IOF standard, where *white* means runnable forest and *yellow* means open land — the opposite of what a USGS reader expects.

Symbols are chosen for navigation value, not realism: a single “building” symbol can hide a barn or a ruin, and a dashed track may be a highway for a 4×4 or a faint line in the grass. **Landforms change slowly; human features and vegetation change fast.** Forest gets logged, reservoirs rise, trails are rerouted. Check the map’s revision date and trust contours over tracks when they disagree.`,
    },
  ],
  whyItMatters: 'Most navigation failures are not compass failures — they are map-reading failures: distance misjudged by a factor of two because of the wrong scale, a grid reference given with eastings and northings swapped, or a GPS position plotted on the wrong datum. Rescuers need a location they can find; you need distances you can budget against daylight. Both start here.',
  science: [
    {
      type: 'md',
      md: `### Scale arithmetic

Ground distance equals map distance multiplied by the scale denominator $N$:

$$
D_{\\text{ground}} = d_{\\text{map}} \\times N
$$

Work in one unit, then convert. Worked examples:

- 1:25,000, route measures **7.4 cm**: $7.4 \\times 25{,}000 = 185{,}000\\ \\text{cm} = 1{,}850\\ \\text{m}$. Shortcut: 1 cm = 250 m, so $7.4 \\times 250 = 1{,}850$ m.
- 1:50,000, the same 7.4 cm: 1 cm = 500 m, so **3.7 km**. Reading the right distance with the wrong scale doubles or halves your time plan.
- Reverse: a 3 km leg on 1:25,000 is $3{,}000 / 250 = 12$ cm on the map.

### How precise is a grid reference?

A 1 km square divided into tenths gives 100 m cells, so a 6-figure reference locates something to within a **100 m × 100 m** square — the true point could be up to about $\\sqrt{50^2 + 50^2} \\approx 71$ m from the square’s centre. Each extra pair of digits divides the cell by 10: 8 figures → 10 m, 10 figures → 1 m (a GPS figure, not a map one).

### Why datums differ

Earth is not a sphere but a slightly flattened, lumpy shape. Older national datums used an ellipsoid fitted to one region; WGS84 is fitted to the whole globe and centred on Earth’s centre of mass. The offset between them varies by place — for example on the order of 100 m between OSGB36 and WGS84 latitude/longitude in parts of Britain, and several hundred metres for the old Tokyo datum. A 100 m error is enough to put you on the wrong side of a stream or at the bottom rather than the top of a cliff band.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest (temperate, North America).** A group uses a 1:24,000 USGS quad from the 1980s. The logging road on the map has become a young plantation; the old clear-cut edge shown in green-white is now uniform forest. They navigate by the stream and contours instead — features that have not moved.

**Mountain (Alps).** A walker measures a zigzag path to a hut with a straight ruler: 2.1 km. Tracing each switchback with the paper-edge method gives 3.4 km — the difference between arriving in daylight and arriving at dusk.

**Desert.** Large areas are mapped only at 1:100,000 or smaller. A dry wash shown as a single blue dashed line may be one of several braided channels on the ground; distances measured on such a map carry large uncertainty, so plans need wider margins.

**Coastal.** A kayaker gives a position from a GPS set to WGS84; the coastguard plots it on a chart using a different datum and searches a beach 200 m from the real one. Stating the datum and format removes the ambiguity.

**Urban and rural.** In a city, the grid on a street atlas works exactly like the one on a topo map — a useful place to practise references. In farmland, field boundaries are good features, but hedges and fences are removed and added far more often than hills change.

**Subarctic.** In Scandinavia and Canada, lakes and bogs dominate 1:50,000 maps. In winter the same blue symbols become flat, open, walkable (or dangerous) surfaces — the map shows what is there, not how it behaves in every season.`,
    },
  ],
  mistakes: [
    'Using a 1:25,000 mental conversion on a 1:50,000 map (or the reverse) — every distance is out by a factor of two.',
    'Giving northings before eastings, or taking the grid line to the *north-east* of the square instead of the south-west corner.',
    'Measuring a winding route as a straight line.',
    'Plotting a GPS position without checking the map datum and the coordinate format.',
    'Trusting tracks, forest edges and buildings on an old map as much as the contours.',
    'Myth: “A 6-figure grid reference gives an exact point.” It gives a 100 m square.',
    'Myth: “Large-scale maps cover large areas.” A large-scale map (1:25,000) covers a small area in large detail.',
  ],
  exercises: [
    {
      id: 's2-l1-e1',
      title: 'Margin, scale and grid drill',
      level: 1,
      safety: 'home',
      minutes: 40,
      materials: ['A free printed or on-screen topographic map (USGS US Topo, OS map via MapZone, or your national agency)', 'Ruler', 'A strip of paper', 'Pencil'],
      steps: [
        'Read the margin: write down scale, contour interval, grid system, datum, declination and revision date.',
        'Pick 5 features (a summit, a hut, a stream junction, a bridge, a lake outlet). Write a 4-figure and a 6-figure reference for each.',
        'Swap with a friend or cover your answers, then locate each feature from its reference alone.',
        'Measure a winding trail between two features with the paper-edge method, and again as a straight line. Convert both to metres.',
      ],
      success: [
        'All 6-figure references within one tenth of a square of the true position.',
        'Eastings always first.',
        'You can state how much longer the trail is than the straight line, and why it matters for timing.',
      ],
      skill: 'map-compass',
    },
    {
      id: 's2-l1-e2',
      title: 'Check a known distance',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Map of your neighbourhood or a local park at 1:25,000 or similar', 'Phone with GPS track (optional)'],
      steps: [
        'Choose a loop you know, measure it on the map with the paper-edge method, and predict its length.',
        'Walk it (in daylight, telling someone your route) and compare with a GPS track or signposted distance.',
        'Note where the map simplified the route (small bends, switchbacks).',
      ],
      success: ['Your map measurement is within 10% of the measured distance.', 'You can explain where the difference came from.'],
      skill: 'map-compass',
      safetyNote: 'A familiar, public route in daylight. Leave a simple trip plan with someone.',
    },
  ],
  quiz: [
    {
      id: 's2-l1-q6',
      kind: 'single',
      prompt: 'It is 15:30, sunset is 17:00, and you have about 20 minutes of useful twilight. The hut is 2.8 km away by a winding trail. You planned at 4 km/h on flat ground, but you had measured the trail as a straight line (1.9 km). What is the soundest reading of your position?',
      choices: [
        { id: 'a', text: 'Plenty of time: the 1.9 km I measured takes under 30 minutes at 4 km/h.', why: 'Uses the wrong (straight-line) distance — the error the question is testing.' },
        { id: 'b', text: 'Fine, but check: 2.8 km at 4 km/h is 42 min, arriving ~16:15; recheck climb.', why: 'Best: correct distance, correct time, and it keeps the margin under review rather than assuming it.' },
        { id: 'c', text: 'Too tight to risk: the extra 0.9 km means I should turn back right now.', why: 'Not supported by the numbers — 42 minutes against 110 minutes of light leaves a good margin.' },
        { id: 'd', text: 'Fine either way: scale errors do not matter while it is still daylight.', why: 'Distance errors directly consume the daylight budget.' },
      ],
      answer: 'b',
      concepts: ['map-scale', 'daylight'],
      explanation: '2.8 km ÷ 4 km/h = 0.7 h = 42 min, and light lasts until about 17:20, so there is margin. But the straight-line error cut the true distance by a third — budget against daylight with the measured route, not the straight line.',
    },
    {
      id: 's2-l1-q5',
      kind: 'single',
      prompt: 'Your phone GPS shows a position that seems ~150 m off the trail on your paper map, even though you are standing on the trail. Which of these could **not** explain the offset?',
      choices: [
        { id: 'a', text: 'The map uses an older local datum, while the phone uses WGS84.', why: 'Plausible — datum offsets can be tens to hundreds of metres.' },
        { id: 'b', text: 'The trail has been rerouted since the map was last revised.', why: 'Plausible — human features change; check the map’s revision date.' },
        { id: 'c', text: 'You read the coordinate in a different format (e.g. DMS vs decimal).', why: 'Plausible — format errors can produce offsets from metres to kilometres.' },
        { id: 'd', text: 'The paper map’s scale is 1:50,000 rather than 1:25,000.', why: 'Correct — scale changes how distances look on paper, not where a coordinate plots.' },
      ],
      answer: 'd',
      concepts: ['map-symbols', 'grid-reference'],
      explanation: 'Datum, revision date and coordinate format can all shift where you appear to be; check the margin and the format before deciding which to trust. Scale affects measurement, not plotting.',
    },
    {
      id: 's2-l1-q3',
      kind: 'single',
      prompt: 'A spring lies in the square whose south-west corner is where easting **62** meets northing **18**. It is about 3 tenths east of line 62 and 9 tenths north of line 18. What is its 6-figure grid reference?',
      diagram: 'grid-ref',
      choices: [
        { id: 'a', text: '623 189', why: 'Correct — easting 62 + 3 tenths = 623, then northing 18 + 9 tenths = 189.' },
        { id: 'b', text: '189 623', why: 'Northing first — “up the stairs” before “along the corridor”. Rescuers would search the wrong place.' },
        { id: 'c', text: '629 183', why: 'The tenths have been swapped between the easting and the northing.' },
        { id: 'd', text: '6218', why: 'This is the 4-figure reference for the 1 km square, not the 6-figure reference asked for.' },
      ],
      answer: 'a',
      concepts: ['grid-reference'],
      explanation: 'Eastings first (along the corridor), then northings (up the stairs); each gets its line number plus tenths.',
    },
    {
      id: 's2-l1-q1',
      kind: 'single',
      prompt: 'On a **1:50,000** map a trail between two huts measures **6.2 cm** with the paper-edge method. How long is it on the ground?',
      choices: [
        { id: 'a', text: '3.1 km', why: 'Correct — at 1:50,000, 1 cm = 500 m, so 6.2 × 500 m = 3,100 m.' },
        { id: 'b', text: '1.55 km', why: 'This uses 250 m per cm — the 1:25,000 conversion, not 1:50,000.' },
        { id: 'c', text: '31 km', why: 'A decimal slip: 6.2 × 5,000 m treats each cm as 5 km instead of 500 m.' },
        { id: 'd', text: '0.31 km', why: 'This uses 50 m per cm — that is the value for 1 mm, not 1 cm.' },
      ],
      answer: 'a',
      concepts: ['map-scale'],
      explanation: 'At 1:50,000, 1 cm = 500 m. 6.2 × 500 m = 3,100 m = **3.1 km**.',
    },
    {
      id: 's2-l1-q4',
      kind: 'single',
      prompt: 'How precisely does a **6-figure** grid reference locate a feature?',
      choices: [
        { id: 'a', text: 'To a 100 m × 100 m square', why: 'Correct — each figure pair adds tenths of the 1 km square, giving 100 m.' },
        { id: 'b', text: 'To a 10 m × 10 m square', why: 'That needs 8 figures — usually only from a GPS or a careful romer measurement.' },
        { id: 'c', text: 'To a 1 km × 1 km square', why: 'That is a 4-figure reference, which names only the grid square.' },
        { id: 'd', text: 'To about 1 m, like a GPS', why: 'Far too precise — 6 figures name a 100 m square; even 8 figures only reach 10 m.' },
      ],
      answer: 'a',
      concepts: ['grid-reference'],
      explanation: 'A 6-figure reference names a **100 m × 100 m** square. You need 8 figures for 10 m — usually only from a GPS or a careful romer measurement.',
    },
    {
      id: 's2-l1-q2',
      kind: 'single',
      prompt: 'You need to walk **1.5 km** along a straight forest road. How long is that on a **1:25,000** map?',
      choices: [
        { id: 'a', text: '6 cm', why: 'Correct — at 1:25,000, 1 km = 4 cm, so 1.5 km = 6 cm.' },
        { id: 'b', text: '3 cm', why: 'This uses 2 cm per km — the 1:50,000 conversion.' },
        { id: 'c', text: '60 cm', why: '1,500 m ÷ 25 m = 60 gives millimetres (1 mm = 25 m), not centimetres.' },
        { id: 'd', text: '0.6 cm', why: 'A decimal slip — 1,500 m ÷ 2,500 m treats each cm as 2.5 km instead of 250 m.' },
      ],
      answer: 'a',
      concepts: ['map-scale'],
      explanation: 'At 1:25,000, 1 km = 4 cm, so 1.5 km = **6 cm** (1,500 m ÷ 250 m per cm).',
    },
  ],
  scenario: {
    id: 's2-l1-sc',
    setup: 'You are walking in rural hill country with a 1:50,000 map revised 22 years ago. The map shows a track crossing a forestry plantation to a road 3 km away. At the plantation edge you find a new fence, a locked gate and a sign for felling operations; the track beyond is churned mud. It is 14:00, sunset 16:40. Your trip plan with a friend says you will be at the road by 16:00.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Climb the gate and follow the track as mapped, since the map still shows it as the route to the road.', why: 'The map is 22 years old and the sign indicates active hazards; the map is not permission or proof the route is safe.' },
      { id: 'b', text: 'STOP, pick a route on lasting features (stream, ridge, road), measure it, and update your contact if the ETA slips.', why: 'Best: trusts slow-changing features, measures the real alternative against daylight, and keeps your trip plan accurate.' },
      { id: 'c', text: 'Take a compass bearing straight across the plantation toward the road, which is the shortest line.', why: 'Dense plantation and felling operations make a straight line slow and hazardous; you would also deviate from the route your contact expects.' },
      { id: 'd', text: 'Wait at the gate for forestry workers to come by and show you the safest way through to the road.', why: 'May never happen on a weekend; burns daylight without a plan.' },
    ],
    best: 'b',
    debrief: 'Old maps are reliable for landforms and water, unreliable for tracks, fences and vegetation. A pause (STOP) lets you choose an alternative built on features that last, measure it properly and compare it with the 2 h 40 min of light you have. Updating your contact keeps your trip plan true — a plan that no longer matches your route slows any search.',
    concepts: ['map-symbols', 'map-scale', 'stop', 'trip-plan'],
  },
  summary: [
    '1:25,000 → 1 mm = 25 m, 4 cm = 1 km. 1:50,000 → 1 mm = 50 m, 2 cm = 1 km.',
    'Measure winding routes along their bends; straight lines underestimate.',
    'Grid references: eastings first (“along the corridor, then up the stairs”). 4 figures = 1 km square, 6 figures = 100 m square.',
    'Match your GPS datum and coordinate format to the map, and state both when reporting a position.',
    'Read the margin first; trust landforms and water over tracks and vegetation on old maps.',
  ],
  furtherReading: ['os-mapzone', 'usgs-symbols', 'kjellstrom'],
  references: ['usgs-symbols', 'usgs-topo', 'os-mapzone', 'tc-3-25-26', 'kjellstrom', 'freedom-hills', 'iof'],
}
