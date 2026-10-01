import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's2-l7',
  stage: 2,
  order: 7,
  title: 'Triangulation and relocation',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s2-l4', 's2-l6'],
  concepts: ['resection', 'relocation', 'back-bearing', 'declination', 'angular-error', 'stop', 'stay-or-move'],
  objectives: [
    'Fix your position by **resection** from two or three back bearings, correcting for declination.',
    'Read a **cocked hat**: what its size says about your bearing error and why line angles matter.',
    'Use a single bearing plus a linear feature, and **slope aspect**, to locate yourself.',
    'Run a structured **relocation procedure** — including when to stop searching and stay put.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Everyone who navigates gets **temporarily unsure** of their position. The skill is not avoiding it; it is recognising it early and relocating methodically, before a small doubt becomes being lost.

### Resection: where am I, from what I can see?

If you can see and identify on the map two or three distinct features — a summit, a mast, a lake outlet, a church — you can fix your position:

1. **Orient yourself and identify features** on the map *and* the ground. Choose features spread widely around you.
2. **Take a magnetic bearing** to each one.
3. **Convert to grid** using the declination on the map. With the course map’s **8° W** declination (magnetic = grid + 8°), subtract 8°: 040° magnetic → **032° grid**.
4. **Compute the back bearing** (add or subtract 180°): 032° → **212°**.
5. **Draw the line** on the map from each feature along its back bearing. (With a baseplate compass you can instead set the grid bearing, place the edge on the feature and rotate the whole compass until its orienting lines match the grid — the edge then lies along your line.)
6. Where the lines cross is your position.

Two lines give a point. A third line is a check: in practice the three lines almost never meet exactly and form a small triangle — the **cocked hat**.`,
    },
    { type: 'diagram', id: 'resection', caption: 'Back-bearing lines from three identified features; the small triangle where they cross is the cocked hat.' },
    {
      type: 'md',
      md: `### Reading the cocked hat

- **Small** triangle: your bearings are consistent; you are probably inside or near it.
- **Large** triangle: at least one bearing is poor, a feature is misidentified, or declination was applied the wrong way. Recheck before trusting it.
- **Line angles matter.** Lines crossing at **60–120°** give a tight fix. Lines crossing at a shallow angle (under ~30°) or nearly opposite (over ~150°) smear the fix along the lines.

### One bearing plus a linear feature

If you know you are on a path, stream, ridge or shore, one back bearing to a single identified feature is enough: your position is where the line crosses the linear feature. Aligning two distant features (a **transit**) gives a line without a compass.

### Slope aspect

On a hillside with nothing to sight on, point the compass straight **down the fall line** and read the bearing — the **aspect** of the slope. Convert to grid. Then look along your handrail or contour for the place where the contours face that direction. On a ridge that bends, aspect can pin you to within a few hundred metres even in fog.`,
    },
    {
      type: 'md',
      md: `### The relocation procedure

When the ground stops matching the map:

1. **STOP.** Stop moving. Every step taken while confused makes the problem bigger.
2. **Last known point.** Where were you *sure* of your position? When?
3. **Estimate a circle.** Radius ≈ your speed × time since the last known point. You are almost certainly inside it.
4. **Look for major features** inside the circle — big landforms, linear features, slope aspect. Try a resection if anything is visible.
5. **Decide:** backtrack to the last known point (often safest), or walk on a bearing to a **catching feature** you cannot miss (a road, river, big lake shore).
6. **If searching nearby,** use a small, planned pattern (a box or expanding square around your estimated position) with a strict **time limit**, marking your start point.
7. **If daylight, weather or energy are running out, stay.** Shelter, signal and wait — the Stage 1 stay-or-move logic.`,
    },
    { type: 'diagram', id: 'relocation-flow', caption: 'Relocation procedure: STOP → last known point → estimate circle → features and aspect → backtrack or head for a catching feature → stay if light is low.' },
    { type: 'sim', id: 'nav-relocation', caption: 'Branching scenario: relocate in fog on a moorland plateau. Every choice costs time and daylight.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Don’t bend the map',
      md: 'The most dangerous relocation error is convincing yourself that a feature “sort of fits”. If one clue doesn’t match — flow direction, slope aspect, the angle of a path junction — treat it as evidence that you are *not* where you think.',
    },
  ],
  whyItMatters: 'Most wilderness navigation incidents begin as a small, unnoticed position error that grows while the walker keeps moving. A disciplined relocation routine — and knowing when to stop and stay — turns a potential search into a ten-minute pause.',
  science: [
    {
      type: 'md',
      md: `### Converting and reversing bearings

With a **west** declination $D_W$ (magnetic north lies west of grid north), a magnetic bearing is larger than the grid bearing:

$$
\\theta_{\\text{grid}} = \\theta_{\\text{mag}} - D_W, \\qquad \\theta_{\\text{back}} = \\theta_{\\text{grid}} \\pm 180^\\circ
$$

**Worked example** (8° W). Bearing to a summit 040° magnetic → 032° grid → back bearing **212°**. Bearing to a mast 130° magnetic → 122° grid → back bearing **302°**. The two lines cross at $302 - 212 = 90^\\circ$ — an ideal fix.

### How big should the cocked hat be?

From the 1-in-60 rule, a bearing error of $\\varepsilon$ degrees to a feature at distance $d$ shifts that line sideways by about $d\\varepsilon/60$. With $\\pm 3^\\circ$ at 1.5 km: $1500 \\times 3/60 = 75$ m. A cocked hat with sides of the order of 50–150 m is normal; one 500 m across means a mistake.

The angle $\\alpha$ between two lines turns sideways error $x$ into position error of roughly

$$
e \\approx \\frac{x}{\\sin\\alpha}
$$

At $\\alpha = 90^\\circ$, $e = 75$ m. At $\\alpha = 20^\\circ$, $e \\approx 75 / 0.34 \\approx 220$ m — the same bearing quality gives a fix three times worse. Hence: choose features **60–120° apart**.

### The estimated-position circle

Radius $r = v \\times t$. Walking 3 km/h for 20 min since your last known point gives $r = 1$ km, an area of $\\pi r^2 \\approx 3.1\\ \\text{km}^2$. Wait another 20 minutes while moving aimlessly and the radius doubles — the area to consider quadruples. This is why STOP comes first.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain, clear day.** From an unnamed knoll a walker sights a trig-point summit (NE) and a reservoir dam (SE), 95° apart. The cocked hat from a third bearing to a mast is 60 m across — a confident fix.

**Coastal.** A sea kayaker ashore in haze lines up a lighthouse with a headland (transit) and takes one bearing to an island: two lines, one fix.

**Boreal forest.** No views at all. The navigator backtracks 400 m to the last trail junction instead of guessing — slower on paper, faster in practice.

**Moorland in fog.** The slope drops away at 250°. On the map, only one stretch of the plateau edge within the estimated circle faces west-southwest; that narrows the search to a few hundred metres.

**Desert.** Distant ranges are easy to see but hard to identify; a large cocked hat revealed that one “peak” was a different summit. A third, closer landmark resolved it.

**Rural or urban fringe.** Church spires, masts and water towers make excellent resection targets on lowland maps.`,
    },
  ],
  mistakes: [
    'Applying declination the wrong way (adding instead of subtracting), which rotates every line and can create a convincing but wrong fix.',
    'Choosing features that are nearly in line with each other (lines crossing at a shallow angle).',
    'Resecting from features you have not positively identified.',
    'Continuing to walk while “trying to work it out”.',
    'Searching with no time limit until daylight is gone.',
    'Myth: “The cocked hat is always the exact spot where you stand.” It is a zone of uncertainty — you may even be just outside it.',
  ],
  exercises: [
    {
      id: 's2-l7-e1',
      title: 'Hilltop resection',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Topographic map', 'Baseplate compass with orienting lines', 'Pencil'],
      steps: [
        'On a hill or viewpoint you can locate on the map, identify three features spread widely around you.',
        'Take a magnetic bearing to each, convert to grid, and compute back bearings.',
        'Plot the lines and measure the cocked hat.',
        'Compare with your true position (map or GNSS) and work out your bearing error.',
      ],
      success: ['Cocked hat under ~150 m across for features within 3 km.', 'Correct declination direction on every line.', 'You can explain why your worst line was worst.'],
      skill: 'map-compass',
      safetyNote: 'Stay well back from edges while sighting; choose a viewpoint with safe footing.',
    },
    {
      id: 's2-l7-e2',
      title: 'Slope-aspect walk',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Map of a hilly area with a path', 'Compass'],
      steps: [
        'Walk a contouring path round a hill. Every 5 minutes, measure the fall-line bearing.',
        'Mark on the map where the contours face that direction.',
        'Check each estimate against the known path position.',
      ],
      success: ['Positions from aspect agree with the path to within about 200 m.'],
      skill: 'terrain-association',
    },
  ],
  simulations: ['nav-relocation'],
  quiz: [
    {
      id: 's2-l7-q6',
      kind: 'single',
      prompt: 'You are unsure of your position in forest at 16:40; sunset is 17:20. Which action is **not** sound?',
      choices: [
        { id: 'a', text: 'Stop first and estimate the circle your position must lie in.', why: 'Sound — always the first step.' },
        { id: 'b', text: 'Backtrack on your track to the last junction if it is close.', why: 'Sound — reversible and low-risk, if it fits the light.' },
        { id: 'c', text: 'Search in widening loops until you find the path, however long.', why: 'Correct — an unlimited search in fading light breaks the daylight budget and adds distance.' },
        { id: 'd', text: 'If relocation fails in 15–20 min, prepare to stay, keep warm, signal.', why: 'Sound — stay-or-move logic: moving in the dark multiplies risk.' },
      ],
      answer: 'c',
      concepts: ['relocation', 'daylight', 'stay-or-move'],
      explanation: 'Relocation is time-boxed. With 40 minutes of light plus twilight, keep enough to prepare for the night.',
    },
    {
      id: 's2-l7-q5',
      kind: 'single',
      prompt: 'Your three-bearing resection produces a **very large** cocked hat. What does it most likely mean?',
      choices: [
        { id: 'a', text: 'A mistake: wrong feature, bad bearing or declination sign', why: 'Correct — find the error before trusting any point.' },
        { id: 'b', text: 'You are probably at its centre, so plot that as your fix', why: 'A large hat signals an error; its centre is no more trustworthy than any other point.' },
        { id: 'c', text: 'The lines are fine; take the corner nearest your route', why: 'Picking the convenient corner is bending the map to fit your hopes.' },
        { id: 'd', text: 'You are somewhere inside it, so search the whole triangle', why: 'With a mistake in the lines you may not be inside it at all.' },
      ],
      answer: 'a',
      concepts: ['resection'],
      explanation: 'A large cocked hat signals a mistake — a misidentified feature, a bad bearing or declination applied the wrong way. Find the error before trusting any point.',
    },
    {
      id: 's2-l7-q2',
      kind: 'single',
      prompt: 'Which pair of features gives the most reliable two-line fix?',
      choices: [
        { id: 'a', text: 'Two summits at bearings 040° and 055°', why: 'Only 15° apart — lines cross at a shallow angle and the fix smears.' },
        { id: 'b', text: 'A summit at 020° and a mast at 110°', why: 'Correct — 90° apart gives the tightest intersection.' },
        { id: 'c', text: 'A summit at 010° and a lake at 185°', why: 'Nearly opposite (175°) — the lines are almost parallel.' },
        { id: 'd', text: 'Any two, if you are careful', why: 'Care can’t fix geometry: error is amplified by 1/sin of the crossing angle.' },
      ],
      answer: 'b',
      concepts: ['resection', 'angular-error'],
      explanation: 'Position error ≈ sideways error ÷ sin(angle between lines). Aim for 60–120°.',
    },
    {
      id: 's2-l7-q1',
      kind: 'single',
      prompt: 'Declination is 8° W (magnetic = grid + 8°). You take a bearing of **075° magnetic** to a cairn. What **grid** back bearing do you draw from the cairn toward yourself?',
      choices: [
        { id: 'a', text: '247°', why: 'Correct — grid = 075 − 8 = 067°, back bearing = 067 + 180.' },
        { id: 'b', text: '263°', why: 'Wrong sign — 8° was added (083°) before reversing.' },
        { id: 'c', text: '255°', why: 'Declination skipped — this reverses the magnetic bearing.' },
        { id: 'd', text: '067°', why: 'This is the grid bearing to the cairn — it was never reversed.' },
      ],
      answer: 'a',
      concepts: ['resection', 'back-bearing', 'declination'],
      explanation: 'Grid bearing = 075 − 8 = 067°. Back bearing = 067 + 180 = **247°**.',
      diagram: 'resection',
    },
    {
      id: 's2-l7-q4',
      kind: 'single',
      prompt: 'Relocation procedure: you have stopped moving. What is the **next** step?',
      choices: [
        { id: 'a', text: 'Identify your last known point and time', why: 'Correct — it anchors everything that follows.' },
        { id: 'b', text: 'Estimate the circle you must be in', why: 'The circle needs a centre and a time — the last known point comes first.' },
        { id: 'c', text: 'Look for major features or a resection', why: 'Evidence-gathering comes after you have anchored and bounded the problem.' },
        { id: 'd', text: 'Backtrack or head for a catching feature', why: 'Choosing an action is the last step, once you have anchored, bounded and checked.' },
      ],
      answer: 'a',
      concepts: ['relocation', 'stop'],
      explanation: 'Freeze the problem, anchor it (last known point and time), bound it (circle), gather evidence, then choose a reversible action.',
    },
    {
      id: 's2-l7-q3',
      kind: 'single',
      prompt: 'You were last sure of your position 36 minutes ago and have been walking at about 2.5 km/h. What is the radius of your estimated-position circle?',
      choices: [
        { id: 'a', text: '1.5 km', why: 'Correct — 36 min = 0.6 h, and 2.5 × 0.6 = 1.5 km.' },
        { id: 'b', text: '0.9 km', why: '36 min was taken as 0.36 h instead of 0.6 h.' },
        { id: 'c', text: '90 km', why: 'Minutes were never converted to hours (2.5 × 36).' },
        { id: 'd', text: '4.2 km', why: 'Ratio inverted — 2.5 ÷ 0.6 instead of 2.5 × 0.6.' },
      ],
      answer: 'a',
      concepts: ['relocation'],
      explanation: '2.5 km/h × 0.6 h = **1.5 km**.',
    },
  ],
  scenario: {
    id: 's2-l7-sc',
    setup: 'Late afternoon, autumn. You are on a broad ridge in thickening cloud and the path has faded. Your last known point was a cairn 25 minutes ago; you walk about 3 km/h. Occasionally the cloud thins and you glimpse a distinctive radio mast, roughly south-east. The ground slopes down to your right.',
    question: 'What is the best next step?',
    choices: [
      { id: 'a', text: 'Keep walking along the ridge, since the faded path is likely to reappear again soon.', why: 'Moving on while unsure grows the uncertainty circle and wastes light.' },
      { id: 'b', text: 'STOP; bearing to the mast when it clears plus slope aspect, fixed within your 1.25 km circle.', why: 'Best — two independent lines (mast bearing and ridge aspect) inside a bounded circle can give a fix within minutes.' },
      { id: 'c', text: 'Descend the slope to your right to get below the cloud and see the land.', why: 'Descending an unknown slope in cloud is irreversible and may lead to crags or the wrong valley.' },
      { id: 'd', text: 'Phone for rescue immediately, before the cloud and the light get any worse.', why: 'Not yet — you are uninjured with tools and daylight to relocate; keep the phone as a backup.' },
    ],
    best: 'b',
    debrief: 'Circle radius = 3 km/h × 25 min ≈ 1.25 km. A back bearing from the mast gives one line; the ridge aspect narrows where along it you are. If that fails, backtracking 25 minutes to the cairn is still reversible. Only if light and weather make that unsafe does staying put take over.',
    concepts: ['relocation', 'resection', 'stop', 'reversibility', 'decisions'],
  },
  summary: [
    'Resection: magnetic bearing → grid (8° W: subtract 8°) → back bearing (±180°) → draw from the feature.',
    'A small cocked hat is normal; a large one is a mistake. Choose features 60–120° apart.',
    'One bearing plus a linear feature, or slope aspect plus a handrail, can also fix you.',
    'Relocation: STOP → last known point → circle (speed × time) → features → backtrack or catching feature → stay if light is low.',
    'Never bend the map; time-box every search.',
  ],
  furtherReading: ['kjellstrom', 'tc-3-25-26', 'adventuresmart'],
  references: ['tc-3-25-26', 'kjellstrom', 'noaa-declination', 'langmuir-mountaincraft', 'koester-lpb', 'adventuresmart'],
}
