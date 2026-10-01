import type { Lesson } from '../../types'

export const l08: Lesson = {
  id: 's2-l8',
  stage: 2,
  order: 8,
  title: 'Sun and shadow navigation',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s2-l3'],
  concepts: ['solar-direction', 'shadow-stick', 'watch-method', 'nav-myths', 'heat-balance'],
  objectives: [
    'Predict roughly where the sun rises, peaks and sets for your **latitude and season** — and why “rises in the east” is only approximately true.',
    'Find **solar noon** from clock time, correcting for time zone, daylight saving and the equation of time.',
    'Get an east–west line from a **shadow stick**, and an exact north–south line from the **equal-shadow** method.',
    'Use the **watch method**, estimate its error, and know where it fails.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Eye safety',
      md: 'Never look at the sun — not briefly, not through sunglasses, binoculars or a camera. Every method in this lesson works from **shadows** or from pointing at the sun’s direction without looking at it.',
    },
    {
      type: 'md',
      md: `The sun is the most widely available direction-finder — but it moves, and its path changes with **latitude** and **season**. Used with that in mind, it gives direction to within 5–15°. Used carelessly, it can be out by 30° or more.

### Where the sun rises and sets

- Only near the **equinoxes** (around 20 March and 22–23 September) does the sun rise almost due **east** (090°) and set almost due **west** (270°), everywhere on Earth.
- In the **northern summer** it rises north of east and sets north of west; in the northern winter, south of east and south of west (reversed seasons in the southern hemisphere).
- The swing grows with latitude. At **40° N** at midsummer, sunrise is at about **059°** — roughly 31° north of east. At **60° N** it is about **037°**. At the **equator** it is about **067°**.`,
    },
    { type: 'diagram', id: 'sun-path', caption: 'Sun paths at the equator, 40° N and 60° N at the solstices and equinox, with sunrise azimuths.' },
    {
      type: 'md',
      md: `### Solar noon: the sun’s best moment

At **solar noon** the sun is highest and crosses the meridian:

- North of the Tropic of Cancer (about 23.4° N): due **south**.
- South of the Tropic of Capricorn: due **north**.
- **In the tropics** it can be north, south or almost straight overhead, depending on the date — so noon direction is unreliable there.

Solar noon is **not** 12:00 on your watch. It shifts with where you are in your time zone (4 minutes per degree of longitude), with **daylight saving** (+1 h), and with the **equation of time** (the sun runs up to about 14 minutes slow in February and 16 minutes fast in early November). A clock-noon “the sun is south now” can easily be an hour out.

### The shadow-stick method

1. Push a straight stick (about 1 m) upright into level ground.
2. Mark the tip of its shadow with a stone (**first mark**).
3. Wait **15–30 minutes**; mark the new tip (**second mark**).
4. The line **first → second** points roughly **west → east** (the shadow moves opposite to the sun). This is true in both hemispheres.
5. Stand with the first mark on your left and the second on your right: you face roughly **north**. A perpendicular to the line gives north–south.`,
    },
    { type: 'diagram', id: 'shadow-stick', caption: 'Shadow tip marked twice; first → second mark runs roughly west → east; the perpendicular gives north–south.' },
    {
      type: 'md',
      md: `**Accuracy.** At the equinox the shadow tip traces a straight east–west line all day, so the method is excellent. At other dates the tip traces a curve. Around midday at mid-latitudes the curve runs very close to east–west; early and late in the day, near the solstices and at high latitudes, the error grows. In the **tropics near noon** the shadow is short and may swing quickly, so errors can be large.

**The equal-shadow (equal-altitude) method** is exact: mark the shadow tip mid-morning and draw a circle through it centred on the stick base. In the afternoon, mark where the shadow tip touches the circle again. The two marks lie on an exact east–west line, and the line from the stick base to their midpoint is true **north–south**. It takes hours, but at camp it gives a reference line you can trust.

### The watch method

With an **analogue watch** set to standard (not daylight-saving) time:

- **Northern hemisphere:** hold the watch flat, point the **hour hand** at the sun. **South** lies midway between the hour hand and **12**.
- **Southern hemisphere:** point **12** at the sun. **North** lies midway between 12 and the hour hand.
- On **daylight saving** time, use **1 o’clock** instead of 12.

Before noon, bisect the angle going forward to 12; after noon, back to 12 — always use the smaller angle.`,
    },
    { type: 'diagram', id: 'watch-method', caption: 'Watch method: northern hemisphere (hour hand on sun, bisector to 12 = south) and southern hemisphere (12 on sun, bisector = north).' },
    { type: 'sim', id: 'celestial', caption: 'Set date, time and latitude. Compare the true solar azimuth with what the watch method predicts — find where it fails.' },
    { type: 'sim', id: 'nav-map', caption: 'Try the sun-only mode: walk legs using the sun instead of a compass and see how ±10–15° errors grow.' },
  ],
  whyItMatters: 'If your compass is lost, broken or doubted, the sun is the next most reliable direction source by day. Knowing its real behaviour — and how wrong the popular shortcuts can be — lets you keep a steady line instead of walking in circles, and tells you when a sun estimate is good enough and when it is not.',
  science: [
    {
      type: 'md',
      md: `### Sunrise azimuth

In words: the sunrise direction depends on how far the sun is north or south of the celestial equator that day (its **declination** $\\delta$, between −23.4° and +23.4°) and on your **latitude** $\\varphi$. Measured from north, and ignoring refraction:

$$
\\cos A_{\\text{rise}} = \\frac{\\sin\\delta}{\\cos\\varphi}
$$

**Worked example.** Midsummer ($\\delta = 23.4^\\circ$) at $\\varphi = 40^\\circ$: $\\sin 23.4^\\circ / \\cos 40^\\circ = 0.398 / 0.766 = 0.519$, so $A \\approx 58.7^\\circ$. At the equinox $\\delta = 0$, $\\cos A = 0$, and $A = 90^\\circ$ — due east, at any latitude.

### Hour angle versus azimuth

The sun’s **hour angle** — its position around the sky’s axis — changes a steady **15° per hour** (360° in 24 h). Its **azimuth** (compass direction) does not. Near noon, when the sun is high, azimuth changes fast; in the morning and evening it changes slowly. At 40° N at midsummer, 09:00 solar time puts the sun at azimuth ≈ 100°, and 11:00 at ≈ 138° — 38° in two hours, then 42° more in the last hour before noon.

### Why the watch method goes wrong

The hour hand turns 30° per hour; halving the angle to 12 turns that into 15° per hour — the method assumes **azimuth changes 15° every hour**. That is only true when the sun’s path is nearly horizontal (high latitudes, low sun). Worked example, 40° N midsummer, 09:00 solar time: the watch places the sun at $180^\\circ - 3 \\times 15^\\circ = 135^\\circ$, but the real azimuth is ≈ 100°. Your “south” is **35° wrong**. The same time in midwinter: real azimuth ≈ 138°, error only ≈ 3°. In the tropics near noon the sun can be almost overhead and swing from east to west in minutes — the method is useless there.

### Solar noon from clock time

The sun crosses 15° of longitude per hour, so **1° of longitude = 4 minutes**. Worked example: you are at 80° W in a zone whose reference meridian is 75° W, on daylight saving, in mid-July (sun about 6 minutes slow):

$$
12{:}00 + 5^\\circ \\times 4\\ \\text{min} + 60\\ \\text{min} + 6\\ \\text{min} = 13{:}26
$$

At 12:00 on the clock the sun is still 86 minutes from solar noon; at 40° N it is then at azimuth ≈ 129°, so “12:00 = south” would be about **50° wrong**.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert, midsummer.** At 25° N at midday the sun is close to overhead and shadows are tiny. Direction work waits until mid-afternoon, when shadows lengthen — the same hours you should rest in shade anyway.

**Subarctic, midsummer.** At 65° N the sun stays up almost around the clock and never climbs above about 50°. Azimuth moves close to 15° per hour, so the watch method works relatively well — but sunrise is only about 20° east of north, so “the sun rose over there, that’s east” is badly wrong.

**Tropical rainforest.** Canopy hides the sun; bright patches and shadow directions help only in clearings, and noon direction may be north or south depending on the month.

**Mountain.** Deep valleys delay sunrise and hasten sunset; the direction of the first sunlight hitting a peak is still the sun’s azimuth, not “east”.

**Coastal, temperate.** A kayaker in winter at 50° S uses the sun in the north at midday as a steering reference, checking the clock correction first.

**Urban.** Tall buildings throw long, crisp shadows — an easy shadow-stick if you mark a lamp post’s shadow tip on a pavement.`,
    },
  ],
  mistakes: [
    'Myth: “The sun always rises due east and sets due west.” Only near the equinoxes; at 40° N the sunrise can be 30° either side of east.',
    'Myth: “At 12:00 the sun is due south.” Time zones, daylight saving and the equation of time can shift solar noon by more than an hour.',
    'Forgetting daylight saving in the watch method (use 1 o’clock, not 12).',
    'Using the watch method in the tropics or with a high summer sun, where errors reach 30° or more.',
    'Using the shadow-stick near noon in the tropics, or with marks only a couple of minutes apart.',
    'Looking at the sun to judge its position.',
  ],
  exercises: [
    {
      id: 's2-l8-e1',
      title: 'Shadow-stick versus compass',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['A straight stick about 1 m long', 'Small stones or pegs', 'Compass (for checking)', 'Watch'],
      steps: [
        'On level, sunny ground, set the stick upright. Mark the shadow tip.',
        'After 15 minutes, mark again; after 30, mark a third time.',
        'Draw the west → east line and its perpendicular.',
        'Check against the compass (corrected for local declination). Record the error for the 15- and 30-minute lines.',
        'Repeat at a different time of day or season and compare.',
      ],
      success: ['North–south line within about 10° of the compass.', 'You can explain why your error was larger or smaller at different times.'],
      skill: 'natural-nav',
      safetyNote: 'Watch the shadow, never the sun. Wear sun protection and drink water on hot days.',
    },
    {
      id: 's2-l8-e2',
      title: 'Watch method error log',
      level: 1,
      safety: 'virtual-only',
      minutes: 30,
      materials: ['The celestial simulator (or the NOAA Solar Calculator)'],
      steps: [
        'Pick your latitude. For a summer and a winter date, check the sun’s true azimuth at 08:00, 10:00, 14:00 and 16:00 solar time.',
        'For each, compute where the watch method would place south, and the error.',
        'Repeat at 10° and 60° latitude.',
      ],
      success: ['A table of errors showing where the method is usable and where it is not.'],
      skill: 'natural-nav',
    },
  ],
  simulations: ['celestial', 'nav-map'],
  quiz: [
    {
      id: 's2-l8-q4',
      kind: 'single',
      prompt: 'The watch method assumes the sun’s azimuth moves 15° per hour. In which case is it still accurate to within a few degrees?',
      diagram: 'watch-method',
      choices: [
        { id: 'a', text: 'Mid-morning at 40° N in midsummer', why: 'The high summer sun’s azimuth runs well behind 15°/h; ≈35° error at 09:00.' },
        { id: 'b', text: 'Near noon at 10° N, any time of year', why: 'The sun is almost overhead and its azimuth swings unpredictably.' },
        { id: 'c', text: 'Mid-morning at 40° N in midwinter', why: 'Correct — the low winter sun moves close to 15°/h; error is a few degrees.' },
        { id: 'd', text: 'Any latitude, if you forget daylight saving', why: 'Forgetting daylight saving adds a one-hour clock error — about 15° on its own.' },
      ],
      answer: 'c',
      concepts: ['watch-method'],
      explanation: 'The method assumes 15° of azimuth per hour. That holds for a low sun; it fails for a high sun and in the tropics, and a forgotten DST hour adds about 15° more.',
    },
    {
      id: 's2-l8-q5',
      kind: 'single',
      prompt: 'Where in the northern hemisphere is the sun at solar noon reliably **due south**?',
      choices: [
        { id: 'a', text: 'Only north of the Tropic of Cancer (≈23.4° N)', why: 'Correct — further south, around midsummer the noon sun can be north of overhead.' },
        { id: 'b', text: 'Everywhere north of the equator, all year round', why: 'Myth — in the northern tropics the midsummer noon sun is north of overhead.' },
        { id: 'c', text: 'Only north of the Arctic Circle (≈66.6° N)', why: 'Too strict — it already holds everywhere north of about 23.4° N.' },
        { id: 'd', text: 'Only between the equator and the Tropic of Cancer', why: 'Backwards — that band is exactly where the noon sun can be north of you.' },
      ],
      answer: 'a',
      concepts: ['solar-direction', 'nav-myths'],
      explanation: 'Only north of the Tropic of Cancer (≈23.4° N). In the northern tropics, around midsummer the noon sun is north of overhead.',
    },
    {
      id: 's2-l8-q1',
      kind: 'single',
      prompt: 'You are at 40° N in late June. Roughly where does the sun rise?',
      choices: [
        { id: 'a', text: 'Due east (090°)', why: 'Only near the equinoxes.' },
        { id: 'b', text: 'About 059°, north-east', why: 'Correct — cos A = sin 23.4° / cos 40° ≈ 0.52, so A ≈ 59°.' },
        { id: 'c', text: 'About 120°, south-east', why: 'That is roughly the midwinter sunrise at 40° N.' },
        { id: 'd', text: 'About 030°', why: 'Too far north for 40° N; you would need to be above about 60° N.' },
      ],
      answer: 'b',
      concepts: ['solar-direction', 'nav-myths'],
      explanation: 'In summer the sun rises north of east, in winter south of east; the swing grows with latitude.',
      diagram: 'sun-path',
    },
    {
      id: 's2-l8-q3',
      kind: 'single',
      prompt: 'In a shadow-stick reading, the first mark is at A and the second (20 minutes later) at B. The line A → B points…',
      choices: [
        { id: 'a', text: 'Roughly west → east', why: 'Correct — the sun moves east to west, so the shadow tip moves west to east, in both hemispheres.' },
        { id: 'b', text: 'Roughly east → west', why: 'That is the sun’s motion; the shadow moves the opposite way.' },
        { id: 'c', text: 'North → south', why: 'The line is east–west; north–south is its perpendicular.' },
        { id: 'd', text: 'West → east in the north, east → west in the south', why: 'The shadow tip moves west → east in both hemispheres.' },
      ],
      answer: 'a',
      concepts: ['shadow-stick'],
      explanation: 'First mark = west, second = east. Stand with the first mark on your left to face roughly north.',
      diagram: 'shadow-stick',
    },
    {
      id: 's2-l8-q6',
      kind: 'single',
      prompt: 'In the southern hemisphere, using a watch on standard time, how do you find north?',
      choices: [
        { id: 'a', text: 'Point the hour hand at the sun; north is midway to 12.', why: 'That is the northern-hemisphere method, and it gives south there.' },
        { id: 'b', text: 'Point 12 at the sun; north is midway between 12 and the hour hand.', why: 'Correct.' },
        { id: 'c', text: 'Point 6 at the sun; north is at 12.', why: 'Not a valid method.' },
        { id: 'd', text: 'It doesn’t work in the southern hemisphere.', why: 'It works (with the same limitations) using the reversed version.' },
      ],
      answer: 'b',
      concepts: ['watch-method'],
      explanation: 'South of the equator the midday sun is in the north, so the method is mirrored: 12 on the sun, bisect to the hour hand.',
    },
    {
      id: 's2-l8-q2',
      kind: 'single',
      prompt: 'You are **6° of longitude west** of your time zone’s reference meridian. No daylight saving, and the equation of time is about zero today. When is solar noon?',
      choices: [
        { id: 'a', text: '24 min after 12:00', why: 'Correct — 1° of longitude takes 4 minutes; west means later: 6 × 4 = 24.' },
        { id: 'b', text: '24 min before 12:00', why: 'Wrong sign — places west of the meridian see the sun later, not earlier.' },
        { id: 'c', text: '6 min after 12:00', why: 'Forgot the factor of 4 minutes per degree.' },
        { id: 'd', text: '1.5 min after 12:00', why: 'Ratio inverted — 6 ÷ 4 instead of 6 × 4.' },
      ],
      answer: 'a',
      concepts: ['solar-direction'],
      explanation: 'The sun covers 1° of longitude in 4 minutes; west means later. 6 × 4 = **24 min** → solar noon ≈ 12:24.',
    },
  ],
  scenario: {
    id: 's2-l8-sc',
    setup: 'Your compass was lost in a river crossing. You are in open savanna at about 12° S in December, it is 11:30 and 36 °C. Your route home runs roughly west along a line of low hills you can no longer see. You have 3 L of water and a hat; shadows are very short.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Use the watch method right now to find west and start walking straight away.', why: 'Near noon in the tropics the sun is almost overhead; the watch method can be wildly wrong — and walking at midday costs water fast.' },
      { id: 'b', text: 'Rest in shade through the heat, use a shadow stick mid-afternoon, walk west late in the day.', why: 'Best — protects heat balance and water, and waits for long shadows when the shadow stick works well.' },
      { id: 'c', text: 'Walk directly away from the sun now, keeping it at your back to hold a line.', why: 'The sun is nearly overhead; “away from it” has no reliable direction at this time.' },
      { id: 'd', text: 'Wait for sunset, then walk toward where it set through the night to stay cool.', why: 'The December sunset at 12° S is well south of west, and night travel adds fall and navigation risk.' },
    ],
    best: 'b',
    debrief: 'At 12° S in December the sun passes almost overhead at noon, so neither the watch nor a quick shadow reading is trustworthy. Mid-afternoon shadows are long and a 20–30 minute shadow stick gives a usable east–west line. Resting through midday is the Stage 1 heat-balance and water decision; the navigation plan fits it rather than fighting it.',
    concepts: ['shadow-stick', 'watch-method', 'heat-balance', 'decisions'],
  },
  summary: [
    'The sun rises due east and sets due west only near the equinoxes; the swing grows with latitude.',
    'Solar noon: due south (north of 23.4° N), due north (south of 23.4° S); correct clock time for longitude (4 min/°), daylight saving and the equation of time.',
    'Shadow stick: first mark → second mark ≈ west → east; the equal-shadow method gives an exact north–south line.',
    'Watch method: assumes 15° of azimuth per hour — good for a low sun, poor for a high sun, useless near noon in the tropics.',
    'Never look at the sun; work from shadows.',
  ],
  furtherReading: ['natural-navigator', 'noaa-solcalc'],
  references: ['noaa-solcalc', 'noaa-solar-eqns', 'meeus-algorithms', 'natural-navigator', 'army-atp-3-50-21', 'souman-circles-2009'],
}
