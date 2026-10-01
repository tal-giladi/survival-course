import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's2-l5',
  stage: 2,
  order: 5,
  title: 'Pacing, timing and dead reckoning',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s2-l4'],
  concepts: ['pacing', 'timing', 'dead-reckoning', 'angular-error', 'daylight'],
  objectives: [
    'Calibrate a **pace count** per 100 m and correct it for slope, vegetation, snow, load, fatigue and darkness.',
    'Predict leg times with **Naismith’s rule** and Langmuir’s descent corrections, and know when to distrust them.',
    'Navigate by **dead reckoning**: known start + bearing + distance → estimated position.',
    'Explain why **random errors grow with √n** but **systematic errors grow with n**, and use that to size your uncertainty.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A compass tells you *which way*. It does not tell you *how far*. In poor visibility, featureless terrain or dense forest, distance is the other half of navigation — and you measure it with two instruments you always carry: your **legs** (pacing) and your **watch** (timing).

### Pace counting

A **pace** is a *double step*: count every time the same foot (say, the left) touches the ground. Most adults take roughly **60–70 paces per 100 m** on flat, open ground, but that range is useless until you know *your* number.

**Calibrate** on a measured 100 m (a running track straight, a surveyed path, or a distance you measure with a tape or a GNSS track averaged over several walks). Walk it naturally, with your usual pack, three to four times each way and average. Then repeat on different ground, because your count changes:

| Condition | Effect on paces per 100 m | Why |
|---|---|---|
| Moderate uphill | More (often +10–25 %) | Shorter stride |
| Steep downhill | More | You brake and shorten stride |
| Gentle downhill | Slightly fewer or the same | Longer, easier stride |
| Heather, tussocks, scrub, forest undergrowth | More (+10–30 %) | Stepping over and around |
| Soft sand, deep or soft snow | Many more | Slip and sink on each step |
| Heavy pack, fatigue | More | Stride shortens as you tire |
| Darkness, fog | More | Cautious, shorter steps |

The percentages are illustrative; **your own calibration table** is what counts.`,
    },
    {
      type: 'md',
      md: `### Keeping count

Counting to 400 in your head while also reading terrain is error-prone. Break the count into 100 m units and **tally** each one:

- **Pacing (ranger) beads:** a cord with two strands of sliding beads — typically 9 beads for each 100 m and 4–9 beads for each full kilometre. Slide one bead per 100 m; at the tenth 100 m, reset the small beads and slide a kilometre bead.
- **Knots or pebbles:** tie a knot in a cord, or move a pebble from one pocket to the other, every 100 m.
- **Say it aloud** at each 100 m: “three hundred”. Saying it fixes it in memory.

If the count is interrupted (a stream crossing, a detour round a boulder), estimate the lost distance straight away and write it down.`,
    },
    {
      type: 'md',
      md: `### Timing: Naismith’s rule

In 1892 William Naismith suggested allowing **one hour for every 3 miles** on the map plus **one hour for every 2,000 ft** of ascent. The metric version used today:

- **5 km/h** on the flat (12 min per km), **plus**
- **1 minute for every 10 m of ascent** (1 hour per 600 m).

Descent needs its own treatment. Langmuir’s widely used corrections: on **gentle descents (about 5–12°)** subtract **10 minutes per 300 m** of descent; on **steep descents (over about 12°)** *add* **10 minutes per 300 m**, because steep ground slows you down.

Naismith describes a fit walker on good paths with a light pack. **Tranter’s corrections** adjust for fitness and fatigue, and every group adds time for rest stops, rough ground, snow, darkness, navigation stops and the slowest member. Treat Naismith as a *baseline* and log your actual times to build your own factor.`,
    },
    { type: 'diagram', id: 'naismith-slope', caption: 'Time per horizontal kilometre versus gradient: Naismith’s flat rate plus climb time, with Langmuir’s descent corrections.' },
    {
      type: 'md',
      md: `### Dead reckoning

**Dead reckoning** means: from a **known point**, follow a **bearing** for a **measured distance** (by pace or time) and mark your **estimated position**. Chain several legs and you can cross terrain with no visible features. Its weakness is that every leg carries some error, and those errors **accumulate**. The trick is to know how big your uncertainty is and to **reset it** whenever you reach a feature you can identify on the map.`,
    },
    { type: 'diagram', id: 'pace-error', caption: 'Error grows along a dead-reckoning track: random errors partly cancel (growing with √n), a systematic bias adds every leg (growing with n).' },
    { type: 'sim', id: 'nav-map', caption: 'Walk several legs by bearing and pace count. Watch how your uncertainty grows in forest and uphill — then reset it at a handrail.' },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Timing and pacing together',
      md: 'Use both at once: pace short, precise legs (under ~1 km) and time long ones. When they disagree by more than about 10 %, stop and look for a feature before going further.',
    },
  ],
  whyItMatters: 'In fog, whiteout, darkness or dense forest you may not see a single landmark for an hour. Knowing how far you have gone — and how uncertain that is — is the difference between walking confidently to a hut and walking past it. Accurate timing also feeds the daylight budget and turnaround time you learned in Stage 1.',
  science: [
    {
      type: 'md',
      md: `### Naismith in one line

Total time equals horizontal distance divided by walking speed, plus a fixed time per metre climbed:

$$
t = \\frac{d}{v} + \\frac{h_{\\uparrow}}{10\\ \\text{m/min}}
$$

with $d$ in km, $v = 5$ km/h, and $h_{\\uparrow}$ the total ascent in metres.

**Worked example.** A leg of **3.2 km** with **240 m** of climb: flat time $3.2 / 5 = 0.64$ h $= 38.4$ min; climb time $240 / 10 = 24$ min. Total $\\approx$ **62 min**. If the leg then drops 300 m on a gentle 8° slope, subtract 10 min; if that 300 m is a steep 20° descent, add 10 min instead.

### How errors add up

Suppose each leg’s distance error is **random** with standard deviation $\\sigma_{\\text{leg}}$ — sometimes long, sometimes short, independently. Independent random errors add *in quadrature* (their squares add), so after $n$ equal legs:

$$
\\sigma_{\\text{total}} = \\sqrt{n}\\,\\sigma_{\\text{leg}}
$$

A **systematic** bias $b$ — for example, you calibrated on a track but are now walking through heather, so every leg is 5 % short — has the same sign every time, so it adds linearly:

$$
E_{\\text{sys}} = n\\,b
$$

**Worked example.** Four legs of 500 m (2 km total), 5 % pacing error per leg:

- Random: $\\pm 25$ m per leg → $\\sqrt{4} \\times 25 = \\pm 50$ m after 2 km.
- Systematic: $4 \\times 25 = 100$ m after 2 km — twice as large, and always in the same direction.
- Both at once combine in quadrature: $\\sqrt{50^2 + 100^2} \\approx 112$ m.

Lesson: **calibrate for the ground you are on** (removes bias) and **break long crossings into short legs that end on features** (resets both).

### Direction error adds a sideways component

Distance error stretches your uncertainty *along* the track; bearing error widens it *across* the track. With the 1-in-60 rule from lesson 4, a 2° error over 500 m gives $500 \\times 2 / 60 \\approx 17$ m sideways per leg. Together they make an error **ellipse** that grows with every leg.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain, whiteout.** A party on a broad snow plateau heads for a descent gully 1.2 km away. They pace in 100 m units and swap the lead counter every 300 m. Their snow calibration is 85 paces per 100 m instead of 64 on a path; using the path figure would have stopped them 300 m short.

**Boreal forest.** Visibility 30 m, no trails. A hunter paces 700 m on a bearing to a lake shore, adding 20 % for deadfall. Reaching the shore when expected confirms the leg; not reaching it by 900 m is a clear signal to stop.

**Desert.** On a featureless gravel plain the main error is *systematic* — soft sand patches shorten every stride. Timing each 1 km leg and cross-checking with the pace count catches the drift.

**Arctic tundra, low light.** Winter days are short; Naismith times plus snow and darkness corrections tell a group whether they can reach a shelter before civil twilight ends.

**Urban, blackout.** With street signs unreadable and no phone, counting blocks and paces from a known junction is dead reckoning too.`,
    },
  ],
  mistakes: [
    'Using a single pace count for every surface — the resulting systematic error is larger than random error over any real distance.',
    'Counting single steps sometimes and double steps other times.',
    'Treating Naismith as a promise rather than a fit-walker baseline; ignoring stops, group pace, load, snow and darkness.',
    'Chaining many long dead-reckoning legs without resetting at a known feature.',
    'Forgetting the lost distance when a count is interrupted by a detour.',
    'Myth: “An experienced walker doesn’t need to count — you just know how far you’ve gone.” Unaided distance estimates drift badly — often toward overestimating how far you have come — in fog, forest, rough ground and darkness.',
  ],
  exercises: [
    {
      id: 's2-l5-e1',
      title: 'Calibrate your pace count',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['A measured 100 m (running-track straight or taped distance)', 'Notebook', 'Your usual day pack'],
      steps: [
        'Walk the 100 m naturally, counting double steps, four times each way. Average the counts.',
        'Repeat on a moderate slope (up and down), in rough grass or woodland, and once with a heavier pack.',
        'Write a small calibration table: surface/slope → paces per 100 m.',
        'Test it: pace an unmeasured 400–500 m, then check the distance on a map or GNSS track.',
      ],
      success: ['Flat counts vary by no more than ±2 paces between runs.', 'Test distance within ±10 % of the measured value.'],
      skill: 'pace-count',
      safetyNote: 'Use a park, track or quiet path; keep your attention on the ground, not on the count, near traffic or edges.',
    },
    {
      id: 's2-l5-e2',
      title: 'Naismith prediction versus reality',
      level: 2,
      safety: 'outdoor',
      minutes: 120,
      materials: ['Map of a known walk', 'Watch', 'Notebook'],
      steps: [
        'Split a familiar 5–10 km walk into legs; measure distance and total ascent for each.',
        'Predict each leg with Naismith and Langmuir; add planned stops.',
        'Walk it, logging actual arrival times at each leg end.',
        'Compute your personal factor: actual moving time ÷ predicted time.',
      ],
      success: ['Predicted and actual times logged for every leg.', 'A personal Naismith factor you can apply in future trip plans.'],
      skill: 'pace-count',
    },
  ],
  simulations: ['nav-map'],
  quiz: [
    {
      id: 's2-l5-q6',
      kind: 'single',
      prompt: 'It is 15:00; sunset is 17:30 with about 30 minutes of useful twilight. Your Naismith estimate to the hut is 1 h 50 min on good paths, but the last 3 km are through deep snow and you will need at least 40 minutes to prepare an emergency camp if you don’t make it. What is the best judgment?',
      choices: [
        { id: 'a', text: 'Go now — 1 h 50 min gets you to the hut at 16:50, well before dark.', why: 'Naismith assumes good paths; deep snow can add 50 % or more to those 3 km, and there is no margin for a wrong turn.' },
        { id: 'b', text: 'Correct for snow, set a decision time, and pick a fallback camp you can reach in light.', why: 'Best — corrected time, a decision time and a fallback turn a guess into a plan that fits the daylight budget.' },
        { id: 'c', text: 'Go, but walk faster than the Naismith pace to build in a safety margin.', why: 'Rushing in snow increases sweating, fatigue and navigation errors — a heat-balance and judgment cost.' },
        { id: 'd', text: 'Ignore the timing and just follow the bearing until the hut comes into view.', why: 'Timing is how you know if you have missed the hut; dropping it removes your catching check.' },
      ],
      answer: 'b',
      concepts: ['timing', 'daylight', 'trip-plan'],
      explanation: 'Latest start for camp prep ≈ 17:30 + 30 − 40 = 17:20. With a realistic snow correction the hut may be marginal, so decide in advance where and when you will switch plans.',
    },
    {
      id: 's2-l5-q2',
      kind: 'single',
      prompt: 'Your pace count is 5 % short on every leg because you calibrated on a track and are now in heather. After **nine** 400 m legs, how large is the accumulated error from this bias?',
      choices: [
        { id: 'a', text: '20 m', why: 'That is one leg’s error (5 % of 400 m). A bias does not cancel.' },
        { id: 'b', text: '60 m', why: 'That is √9 × 20 m — the rule for independent random errors, not for a bias.' },
        { id: 'c', text: '180 m', why: 'Correct — a systematic error adds linearly: 9 × 20 m.' },
        { id: 'd', text: '0 m — errors average out over many legs', why: 'Only random errors partly cancel; a consistent bias never does.' },
      ],
      answer: 'c',
      concepts: ['dead-reckoning', 'pacing'],
      explanation: 'Systematic error grows as n·b = 9 × 20 m = **180 m**. A random ±20 m per leg would grow only to √9 × 20 = ±60 m. Calibrating for the ground removes the bias.',
      diagram: 'pace-error',
    },
    {
      id: 's2-l5-q5',
      kind: 'single',
      prompt: 'How does Langmuir’s correction adjust the Naismith estimate on a **steep** descent (more than about 12°)?',
      choices: [
        { id: 'a', text: 'Adds 10 min per 300 m of descent', why: 'Correct — steep descents are slower than flat ground.' },
        { id: 'b', text: 'Subtracts 10 min per 300 m of descent', why: 'That applies only to gentle descents of about 5–12°.' },
        { id: 'c', text: 'No change — descent time is free', why: 'Langmuir corrects descents in both directions; steep ones cost time.' },
        { id: 'd', text: 'Adds 1 min per 10 m, as for climbing', why: 'That is Naismith’s ascent allowance, not Langmuir’s descent rule.' },
      ],
      answer: 'a',
      concepts: ['timing'],
      explanation: 'Only gentle descents (≈5–12°) are faster: subtract 10 min per 300 m. Steep descents are slower: **add** 10 min per 300 m.',
    },
    {
      id: 's2-l5-q4',
      kind: 'single',
      prompt: 'Which condition usually does **not** increase your paces per 100 m?',
      choices: [
        { id: 'a', text: 'Walking uphill on a steady climb', why: 'It does — stride shortens on the climb.' },
        { id: 'b', text: 'Wading through deep soft snow', why: 'It does — you sink and slip with each step.' },
        { id: 'c', text: 'A gentle downhill on a smooth path', why: 'Correct — this often lengthens stride slightly or leaves it unchanged.' },
        { id: 'd', text: 'Fatigue late in a long day', why: 'It does — tired legs take shorter strides.' },
      ],
      answer: 'c',
      concepts: ['pacing'],
      explanation: 'Anything that shortens your stride raises the count — climbing, soft snow, darkness, fatigue. Steep downhill does too, but a gentle smooth descent usually does not.',
    },
    {
      id: 's2-l5-q1',
      kind: 'single',
      prompt: 'Using Naismith (5 km/h + 1 min per 10 m of ascent), how long should you allow for a leg of **2.4 km** with **300 m** of climb?',
      choices: [
        { id: 'a', text: '59 min', why: 'Correct — 28.8 min for distance plus 30 min for climb.' },
        { id: 'b', text: '29 min', why: 'Forgot the climb — this is the flat time only.' },
        { id: 'c', text: '78 min', why: 'Unit slip — 0.48 h was read as 48 min instead of 28.8 min.' },
        { id: 'd', text: '89 min', why: 'Doubled the climb allowance — 1 min per 5 m instead of per 10 m.' },
      ],
      answer: 'a',
      concepts: ['timing'],
      explanation: 'Flat: 2.4 / 5 = 0.48 h = 28.8 min. Climb: 300 / 10 = 30 min. Total ≈ **59 min** — before stops, rough ground or a slow group.',
    },
    {
      id: 's2-l5-q3',
      kind: 'single',
      prompt: 'Each 500 m leg has an independent random distance error of ±30 m. After **4** legs, what is the combined random error?',
      choices: [
        { id: 'a', text: '±60 m', why: 'Correct — independent errors add in quadrature: √4 × 30.' },
        { id: 'b', text: '±120 m', why: '4 × 30 is how a systematic bias grows, not random error.' },
        { id: 'c', text: '±30 m', why: 'That is one leg’s error; random errors still grow, just more slowly.' },
        { id: 'd', text: '±15 m', why: 'Divided by √4 as if averaging — the total error grows, it does not shrink.' },
      ],
      answer: 'a',
      concepts: ['dead-reckoning'],
      explanation: 'Independent errors add in quadrature: √4 × 30 = **60 m** — not 4 × 30 = 120 m.',
    },
  ],
  scenario: {
    id: 's2-l5-sc',
    setup: 'Fog on an open moorland plateau, visibility 40 m. You left a cairn (known point) on a bearing to a small tarn 1.6 km away, planning to pace it. Your moor calibration is 72 paces per 100 m. You have counted 1,300 paces and see no water. It is 16:10 in late autumn; sunset is 17:05.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Keep going on the bearing until you find the tarn, since it must be just a little further.', why: 'You are already ~200 m past the expected distance with open-ended uncertainty and under an hour of light.' },
      { id: 'b', text: 'STOP: at ≈1.8 km you’ve overshot. Do a short, timed search, then back-bearing to the cairn if it fails.', why: 'Best — uses the measured distance, bounds the search in time, and keeps a reversible route back to a known point.' },
      { id: 'c', text: 'Turn toward where you feel the tarn probably is and follow that hunch until you see water.', why: 'Feelings in fog are unreliable; without a bearing you lose your dead-reckoning line entirely.' },
      { id: 'd', text: 'Assume you miscounted somewhere and restart the pace count from zero right here.', why: 'Throwing away the count discards your only distance information.' },
    ],
    best: 'b',
    debrief: '1,300 ÷ 72 ≈ 18 hundred-metre units ≈ 1.8 km — you have overshot the planned 1.6 km. With 5–10 % pacing error you are probably within 100–200 m of the tarn, likely to one side because of bearing error. A short time-limited search is sensible; the daylight budget and a reversible back-bearing to the cairn keep the downside small. This is STOP and reversibility from Stage 1 applied to dead reckoning.',
    concepts: ['dead-reckoning', 'pacing', 'stop', 'daylight', 'reversibility'],
  },
  summary: [
    'A pace is a double step; calibrate per 100 m on each type of ground you use.',
    'Tally every 100 m with beads, knots or pebbles, and say it aloud.',
    'Naismith: 5 km/h + 1 min per 10 m ascent; gentle descent −10 min/300 m, steep descent +10 min/300 m. Log your own factor.',
    'Random errors grow as $\\sqrt{n}$; systematic errors grow as $n$. Calibrate to remove bias; end legs on features to reset.',
  ],
  furtherReading: ['langmuir-mountaincraft', 'kjellstrom', 'tc-3-25-26'],
  references: ['naismith-1892', 'langmuir-mountaincraft', 'mt-hml', 'kjellstrom', 'tc-3-25-26', 'freedom-hills'],
}
