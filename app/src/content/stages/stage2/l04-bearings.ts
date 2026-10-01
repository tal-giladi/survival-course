import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's2-l4',
  stage: 2,
  order: 4,
  title: 'Bearings and azimuths',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s2-l3'],
  concepts: ['bearings', 'back-bearing', 'angular-error', 'declination'],
  objectives: [
    'Take a bearing **from the map and walk it on the ground** in three steps, including declination.',
    'Take a bearing **from the ground and plot it on the map**.',
    'Compute and use **back bearings** (±180°) to check your line and retrace it.',
    'Walk a bearing accurately using **intermediate objects** and leapfrogging.',
    'Estimate lateral miss with the **1-in-60 rule** and decide how accurate a leg needs to be.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A **bearing** (in North America often called an **azimuth**) is a direction measured **clockwise from north**, 000° to 360°. East is 090°, south 180°, west 270°. Always say three digits — “zero four five”, not “forty-five” — so a mis-heard figure is less likely.

### Map to ground: three steps

1. **Edge on the route.** Lay one long edge of the baseplate along the line from where you are to where you want to go, with the **direction-of-travel arrow pointing toward the destination**. (Ignore the needle.)
2. **Lines to grid north.** Turn the **housing** until the orienting lines are parallel to the map’s north–south grid lines, with the orienting arrow pointing to the **top of the map** (grid north). Read the grid bearing at the index line.
3. **Correct and follow.** Convert grid → magnetic by rotating the housing by the declination (in this stage’s simulator: 8° W, so **add 8°**). Take the compass off the map, hold it flat in front of you, and **turn your whole body** until the red needle sits inside the orienting arrow — **“red in the shed”**. The direction-of-travel arrow now points along your route.

The most common error in step 2 is having the orienting arrow point to the **bottom** of the map: the lines are parallel, but the bearing is 180° wrong. Sense-check against the map: if the destination is roughly east, the bearing should be roughly 090°.`,
    },
    { type: 'diagram', id: 'bearing-steps', caption: 'Map to ground: (1) edge on route, arrow to target; (2) orienting lines parallel to grid north lines, arrow to the top of the map; (3) add declination, red in the shed, walk.' },
    {
      type: 'md',
      md: `### Ground to map

1. Point the direction-of-travel arrow at a distinct object (a summit, a mast, a lake outlet).
2. Turn the housing until **red is in the shed**. Read the **magnetic** bearing.
3. Convert magnetic → grid (8° W: **subtract 8°**).
4. On the map, put one edge of the baseplate through the object’s symbol and turn the **whole compass** (not the housing) until the orienting lines are parallel to the grid lines, arrow to the top of the map. The edge now lies along the line from the object toward you — you are somewhere on that line. Two or three such lines cross at your position (resection, lesson 7).

### Back bearings

The **back bearing** is the opposite direction: add 180° if the bearing is less than 180°, otherwise subtract 180°. 065° → 245°; 290° → 110°. Uses:

- **Retracing** your route to the last known point.
- **Checking your line**: turn around and sight back at where you started; if your start point is not on the back bearing, you have drifted to one side.
- Sighting an object behind you when the one ahead is hidden.`,
    },
    { type: 'diagram', id: 'back-bearing', caption: 'Forward bearing 065°, back bearing 245°. Sighting back to the start reveals sideways drift.' },
    {
      type: 'md',
      md: `### Walking a bearing

Nobody walks straight by watching a needle. Instead:

- **Sight and walk.** With red in the shed, look along the direction-of-travel arrow and pick a distinct **intermediate object** on the line — a tree, a boulder, a patch of snow. Put the compass down, walk to it, repeat. You steer by objects, not by the needle.
- **Leapfrog in poor visibility.** In fog, darkness or white-out, send a partner ahead to the edge of visibility; direct them left or right onto the line, walk to them, repeat. Tighter, but slow.
- **Obstacles.** Box around them: turn 90°, count paces, walk past on the original bearing, turn back 90° for the same pace count. Or sight an object on the far side of the obstacle on your bearing, then walk round to it by any route.
- **Know how accurate you need to be.** A bridge 20 m wide at 2 km needs a much tighter line than a 1 km-long river. When the target is small, aim off or use a catching feature (lesson 6).`,
    },
    { type: 'diagram', id: 'one-in-sixty', caption: 'Lateral miss grows with distance: about 17 m per kilometre for every degree of error.' },
    {
      type: 'callout',
      tone: 'info',
      title: 'Where the error comes from',
      md: 'A good baseplate compass read carefully gives about **±2°**; a quick glance while moving, **±5° or worse**. Add errors from plotting the bearing on the map, reading the needle off level, local magnetic deviation and unconsciously drifting downhill or around vegetation. They combine — and, per the 1-in-60 rule, grow linearly with distance.',
    },
    { type: 'sim', id: 'nav-map', caption: 'Plan a route, measure each leg’s grid bearing, add 8° for declination and walk it. Watch how heading and pacing errors add up — then try aiming off at the river.' },
  ],
  whyItMatters: 'Bearings let you travel when you cannot see where you are going: fog, forest, darkness, snow. They also turn the landscape into position fixes. Understanding how angular error scales with distance tells you when a bearing is enough on its own and when you need a handrail, a catching feature or shorter legs.',
  science: [
    {
      type: 'md',
      md: `### The 1-in-60 rule

If your heading is wrong by an angle $\\theta$, the sideways miss after distance $d$ is exactly

$$
x = d \\tan\\theta
$$

For small angles, $\\tan\\theta \\approx \\theta$ in radians, and one radian is about 57.3° — close enough to **60** for mental arithmetic. So:

$$
x \\approx d \\times \\frac{\\theta^\\circ}{60}
$$

In words: **every degree of error puts you about 1/60 of the distance to the side.** Worked numbers:

| Error | Distance | 1-in-60 estimate | Exact $d\\tan\\theta$ |
|---|---|---|---|
| 1° | 1 km | $1000 / 60 \\approx 17$ m | 17.5 m |
| 2° | 1 km | ≈33 m | 34.9 m |
| 5° | 2 km | $2000 \\times 5/60 \\approx 167$ m | 175 m |
| 10° | 1 km | ≈167 m | 176 m |
| 20° | 3 km | 1,000 m | 1,092 m |

The rule is excellent below about 10° and slightly underestimates beyond that (because 60 > 57.3 and because $\\tan\\theta$ grows faster than $\\theta$). It also runs backwards: if you drifted 50 m off line over 1.5 km, your heading error was about $50 \\times 60 / 1500 = 2^\\circ$.

### Mils

Many military compasses use **mils**: NATO divides the circle into **6,400 mils** (so 1° ≈ 17.8 mils). One mil subtends almost exactly **1 m at 1 km** (0.98 m), which makes lateral error arithmetic trivial: 10 mils off over 2 km ≈ 20 m. Know which unit your compass uses before you set a bearing.

### Combining errors

Independent random errors combine roughly as the square root of the sum of squares. A ±2° reading error plus ±2° from plotting gives about $\\sqrt{2^2+2^2} \\approx 2.8^\\circ$ — at 2 km, $2000 \\times 2.8/60 \\approx 95$ m either side. A systematic error such as forgotten declination does not average out: it adds the full amount on every leg.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain in fog.** A group descends from a summit to a col 800 m away on a bearing of 212° magnetic, leapfrogging a partner 30 m ahead. At the col the ground rises on both sides — confirmation by landform, not just by bearing.

**Forest.** Visibility 30–50 m under canopy. The navigator sights on trees two or three ahead and walks to each, checking the back bearing to the last tree every few hundred metres.

**Desert.** Open ground makes objects far away look close, and there may be few distinct ones. A walker picks a distant rock outcrop on the bearing and walks to it — a long leg with few chances to drift, but checks the back bearing to the vehicle before losing sight of it.

**Arctic / subarctic white-out.** No contrast, no intermediate objects. Partners rope together or leapfrog at a few metres; some teams walk on a bearing behind a leader held on line by the navigator at the back.

**Tropical.** Dense vegetation forces constant detours around trunks and vines. Navigators box around obstacles and accept shorter legs, re-fixing at every stream or ridge.

**Coastal.** From a headland, a bearing to a lighthouse, plotted as a back bearing on the map, gives a line of position — the same idea sailors use.

**Rural.** Field boundaries often run on compass-straight lines. A walker compares the bearing of a hedge with the map to confirm which field they are in.`,
    },
  ],
  mistakes: [
    'Orienting arrow pointing to the bottom of the map in step 2 — the bearing is 180° out. Sense-check against the map.',
    'Rotating the whole compass instead of the housing when taking a bearing from the map, or the housing instead of the compass when plotting.',
    'Forgetting the declination, or applying it the wrong way (lesson 3).',
    'Walking while staring at the needle instead of steering by intermediate objects.',
    'Following the needle’s white (south) end — “red in the shed”, not white.',
    'Assuming a bearing alone will hit a small target far away; the 1-in-60 rule says it will not.',
    'Myth: “If you walk a bearing carefully you will arrive exactly on target.” Every leg has error; plan for it with catching features and aiming off.',
  ],
  exercises: [
    {
      id: 's2-l4-e1',
      title: 'Map bearings at the kitchen table',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['Topographic map', 'Baseplate compass', 'Protractor (to check)'],
      steps: [
        'Mark 6 pairs of features on the map. For each pair, take the grid bearing with the compass (steps 1–2), then check it with a protractor.',
        'Convert each to magnetic for the map’s current declination, and write the back bearing.',
        'Estimate the lateral miss for a 3° error over each leg with the 1-in-60 rule.',
      ],
      success: ['Compass and protractor agree within 2° on every leg.', 'All conversions and back bearings correct.'],
      skill: 'map-compass',
    },
    {
      id: 's2-l4-e2',
      title: 'Park bearing loop',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Baseplate compass', '4 small markers (e.g. clothes pegs)', 'A partner', 'Open park or playing field'],
      steps: [
        'Place a marker at the start. Walk 50 paces on 060° magnetic, then 50 paces on 180°, then 50 paces on 300° — an equilateral triangle.',
        'Steer by intermediate objects, not the needle. Mark where you finish.',
        'Measure how far the finish is from the start. Repeat, then try a square (000°, 090°, 180°, 270°).',
        'At each corner, sight the back bearing to the previous corner and note any drift.',
        'Finally, try the nav-map simulation for the same idea at wilderness scale.',
      ],
      success: ['Finish within 5 m of the start on the triangle.', 'You can say which way you tend to drift.'],
      skill: 'map-compass',
      safetyNote: 'A public open space in daylight with a partner. Keep the compass away from phones and parked cars.',
    },
  ],
  simulations: ['nav-map'],
  quiz: [
    {
      id: 's2-l4-q5',
      kind: 'single',
      prompt: 'Your target is a footbridge **15 m** wide across a river, **2 km** away through forest. Your realistic heading accuracy is ±4°. What is the best plan?',
      choices: [
        { id: 'a', text: 'Walk the direct bearing carefully, since ±4° is accurate enough here.', why: '4° over 2 km is ≈133 m either side; the chance of hitting a 15 m bridge directly is small, and you won’t know which way to turn.' },
        { id: 'b', text: 'Aim deliberately ~10° left of the bridge, so at the river you turn right.', why: 'Best: turns an uncertain miss into a known one, using the river as a catching feature (aiming off, lesson 6).' },
        { id: 'c', text: 'Walk the bearing, and if the bridge isn’t there, search both ways along the bank.', why: 'Works eventually, but can double the search distance — and you may not know which way to try first.' },
        { id: 'd', text: 'Follow the back bearing instead, which cancels out your heading error.', why: 'The back bearing points back to your start; it does not help find the bridge.' },
      ],
      answer: 'b',
      concepts: ['angular-error', 'bearings'],
      explanation: 'The 1-in-60 rule says ±4° over 2 km is about ±133 m. When the target is much smaller than the expected error, aim off to one side of a linear feature.',
    },
    {
      id: 's2-l4-q6',
      kind: 'single',
      prompt: 'Which practice makes walking a bearing **less** accurate?',
      choices: [
        { id: 'a', text: 'Sighting intermediate objects and walking to each one', why: 'Improves accuracy — you steer by landmarks, not by a swinging needle.' },
        { id: 'b', text: 'Checking the back bearing to your start or last object', why: 'Improves accuracy — it reveals sideways drift.' },
        { id: 'c', text: 'Leapfrogging a partner ahead of you in thick fog', why: 'Improves accuracy — it creates intermediate objects when there are none.' },
        { id: 'd', text: 'Reading the bearing on the move without stopping', why: 'Correct — a quick glance on the move is typically ±5° or worse.' },
      ],
      answer: 'd',
      concepts: ['bearings', 'back-bearing'],
      explanation: 'Accuracy comes from stopping to sight, steering by objects, and checking behind you — not from watching the needle as you walk (or comparing it next to a phone, which deflects it).',
    },
    {
      id: 's2-l4-q1',
      kind: 'single',
      prompt: 'Taking a bearing from the map: you have laid the baseplate edge from start to target and turned the housing so the orienting lines are parallel to grid north. What do you do **next**?',
      choices: [
        { id: 'a', text: 'Adjust the housing for declination', why: 'Correct — the map gives a grid bearing; convert it before you use the needle.' },
        { id: 'b', text: 'Turn your body until the red needle sits in the orienting arrow', why: 'Too early — without the declination step you would walk a grid bearing.' },
        { id: 'c', text: 'Sight an object along the direction-of-travel arrow and walk to it', why: 'That is the last step, once the bearing is corrected and you are facing it.' },
        { id: 'd', text: 'Turn the housing on the map until the needle lines up with north', why: 'The needle plays no part in measuring on the map; the grid lines do.' },
      ],
      answer: 'a',
      concepts: ['bearings'],
      explanation: 'Measure on the map (edge, lines to grid north), correct for declination, then put red in the shed and steer by objects.',
    },
    {
      id: 's2-l4-q4',
      kind: 'single',
      prompt: 'Using the 1-in-60 rule, how far to the side will a **3°** heading error put you after **1.5 km**?',
      diagram: 'one-in-sixty',
      choices: [
        { id: 'a', text: '75 m', why: 'Correct — 1500 × 3 / 60 = 75 m.' },
        { id: 'b', text: '750 m', why: 'Divided by 6 instead of 60 — ten times too big.' },
        { id: 'c', text: '25 m', why: 'Forgot to multiply by the 3° — 1500 / 60 is the error for 1° only.' },
        { id: 'd', text: '7.5 m', why: 'Unit slip — 1.5 km was taken as 150 m.' },
      ],
      answer: 'a',
      concepts: ['angular-error'],
      explanation: '1500 × 3 / 60 = **75 m** (exact: 1500 × tan 3° ≈ 79 m).',
    },
    {
      id: 's2-l4-q3',
      kind: 'single',
      prompt: 'You walked on a magnetic bearing of **290°**. What bearing do you follow to **retrace** your route?',
      choices: [
        { id: 'a', text: '110°', why: 'Correct — 290 is more than 180, so subtract 180.' },
        { id: 'b', text: '070°', why: '360 − 290 mirrors the bearing across north; it does not reverse it.' },
        { id: 'c', text: '200°', why: '290 − 90 is a right-angle turn, not a reversal.' },
        { id: 'd', text: '470°', why: '180 was added without wrapping — bearings stop at 359°.' },
      ],
      answer: 'a',
      concepts: ['back-bearing'],
      explanation: '290 is more than 180, so subtract: 290 − 180 = **110°**.',
    },
    {
      id: 's2-l4-q2',
      kind: 'single',
      prompt: 'In the simulator the declination is **8° W**. You measure a **grid** bearing of **132°** to the hut. What **magnetic** bearing do you set?',
      choices: [
        { id: 'a', text: '140°', why: 'Correct — west declination, grid → magnetic adds: 132 + 8.' },
        { id: 'b', text: '124°', why: 'Wrong sign — subtracting is the rule for east declination.' },
        { id: 'c', text: '132°', why: 'No correction applied — this is still the grid bearing.' },
        { id: 'd', text: '148°', why: 'The correction was applied twice (132 + 16).' },
      ],
      answer: 'a',
      concepts: ['bearings', 'declination'],
      explanation: 'West declination: grid → magnetic, add. 132 + 8 = **140°**.',
    },
  ],
  scenario: {
    id: 's2-l4-sc',
    setup: 'You are crossing open moorland toward a mountain hut 3 km away on a bearing of 245° magnetic. Visibility has dropped to 50 m in cloud. It is 16:10 and sunset is 17:05. After 2 km you reach a stream that the map shows 200 m before the hut, running north–south. You cannot see the hut. You know you have been reading the compass on the move for the last kilometre.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Keep going on 245° — the hut must be just ahead, somewhere beyond this stream.', why: 'You have walked only 2 km of a 3 km leg yet reached a stream the map puts 2.8 km along; your position is uncertain, and ploughing on in fading light compounds the problem.' },
      { id: 'b', text: 'STOP: use the stream as a handrail, estimate your drift, and decide by 16:30 to go on or camp.', why: 'Best: recognises the mismatch, uses a linear feature to relocate, and sets a daylight-based decision point.' },
      { id: 'c', text: 'Turn around and follow the back bearing (065°) for 2 km to the start before dark.', why: 'Reversible, but 2 km back across moor in 55 minutes of light, in cloud, with the same error sources, may leave you in the dark on open ground anyway.' },
      { id: 'd', text: 'Split up to search both directions along the stream, so you find the hut faster.', why: 'Splitting in cloud and failing light turns one problem into two lost parties.' },
    ],
    best: 'b',
    debrief: 'The distance mismatch is the clue: either your pacing is off, or you are on a different stream — perhaps because on-the-move readings let you drift (5° over 2 km ≈ 170 m). A linear feature is a gift: it lets you relocate by following it while you check landforms. The Stage 1 tools still apply — STOP, a daylight budget with a fixed decision time, and keeping the group together.',
    concepts: ['bearings', 'angular-error', 'stop', 'daylight', 'stay-or-move'],
  },
  summary: [
    'Map to ground: edge on route, orienting lines to grid north, correct declination, red in the shed, walk.',
    'Ground to map: sight, red in the shed, convert magnetic → grid, plot a line through the object.',
    'Back bearing = bearing ± 180°. Use it to retrace and to check drift.',
    'Walk by intermediate objects or leapfrogging, never by staring at the needle.',
    '1-in-60 rule: miss ≈ distance × error° ÷ 60 — about 17 m per degree per km. Exact: $d\\tan\\theta$.',
  ],
  furtherReading: ['kjellstrom', 'langmuir-mountaincraft', 'orienteering-usa', 'british-orienteering'],
  references: ['kjellstrom', 'tc-3-25-26', 'langmuir-mountaincraft', 'freedom-hills', 'noaa-declination', 'iof', 'mt-hml'],
}
