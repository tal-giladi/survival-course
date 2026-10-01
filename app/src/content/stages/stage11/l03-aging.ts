import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's11-l3',
  stage: 11,
  order: 3,
  title: 'Aging sign',
  level: 'advanced',
  minutes: 55,
  prerequisites: ['s11-l2'],
  concepts: ['track-aging', 'age-bracketing', 'reference-tracks', 'track-substrate'],
  objectives: [
    'Explain the **weathering processes** that change a print over time: drying, crumbling, rounding, infill, overprinting, debris, plant rebound, melt and freeze.',
    'Bracket the age of a trail with **dated events** (rain, frost, wind, tide, snowfall, traffic) using the principle that what lies on top is younger.',
    'Build and use **reference tracks** (an aging stand) to calibrate your judgement in your own substrate and weather.',
    'Express age as a **range with confidence**, not a single time, and recognise the biases that make people over-precise.',
  ],
  explanation: [
    {
      type: 'md',
      md: `“How old is this?” is the hardest question in tracking and the one that matters most in a search: prints that are hours old point to where someone might be now; prints that are days old point nowhere useful. Experienced trackers are good at it not because they have a magic eye but because they combine **two methods**:

1. **Bracketing with events** — a logical method you can use from today.
2. **Comparison with reference tracks** — a calibrated judgement you build with practice.

### Method 1: bracket with events

The rule is the same as in geology: **what lies on top is younger.**

- If a print **cuts into** something (a layer of fresh snow, rain-pitted mud, fallen leaves, a tyre track), it was made **after** that thing.
- If something **lies on top of** the print (rain pits, frost, a dusting of snow, drifted sand, a later tyre track, a spider web, an insect trail), the print was made **before** it.

Each dated event gives you one edge of a window. Two events can give you both edges.`,
    },
    { type: 'diagram', id: 's11-aging-bracket', caption: 'Two events bracket the age: after the snowfall ended (22:00), before the shower ended (02:00). At 10:00 the prints are 8–12 hours old.' },
    {
      type: 'md',
      md: `Useful dated events:

| Event | You know the time from | Print made **after** if… | Print made **before** if… |
|---|---|---|---|
| Rain stops | Your own observation, camp log, weather records | no raindrop pits inside, pits around | pits inside the print too |
| Snowfall / snow shower | Observation, forecast history | print cut into the new snow | new snow dusting inside |
| Wind (sand, snow, leaves) | Observation | crisp rims, leaves pressed in | drifted material inside, loose leaves on top |
| Frost / dew | Clear calm nights; temperature at dew point | frost broken or dew knocked off | frost crystals intact inside |
| Tide | Tide tables, wrack line | print on washed sand below last high water | — (the sea erases older prints) |
| Traffic | Known vehicle, patrol, your own walk in | print on top of the tyre/boot track | tyre/boot track across the print |
| Day/night animals | Species habits | e.g. nocturnal beetle trails cross the print | — |

### Method 2: reference tracks (an aging stand)

Weathering depends on substrate, sun, shade, humidity, temperature and wind — too many variables for a rule of thumb. So trackers **make their own prints** beside the unknown one, or keep an **aging stand** — a patch of the local substrate where they leave prints at known times and inspect them repeatedly. Compare, in the same light:

- **Colour and moisture:** fresh prints in damp soil are darker; they lighten as the surface dries.
- **Edges and walls:** crisp and sharp at first, then crumbling, then rounded and slumped.
- **Crushed vegetation:** bruised grass is dark and wet at first, then wilts, yellows and **springs back** over hours to days.
- **Debris:** fallen leaves, seeds, needles and insect trails accumulate on top.
- **Snow:** edges soften and prints enlarge with sun and warm air; in cold, walls **set** (sinter) and become firm — a fresh print in cold powder has soft walls you can collapse with a fingertip, an older one has hardened walls.`,
    },
    { type: 'diagram', id: 's11-aging-stand', caption: 'Reference prints in the same substrate. The rate varies hugely with weather — which is why you make your own.' },
    {
      type: 'callout',
      tone: 'info',
      title: 'State age as a range with a confidence',
      md: '“Between 8 and 12 hours, confident — two brackets” is useful. “About 3 hours” from edge crispness alone is a guess that sounds like a measurement. In a search, a falsely precise age can send teams in the wrong direction; a range with its reasons lets the search manager weigh it against other clues.',
    },
    {
      type: 'md',
      md: `### Biases that make aging worse

- **Wishful aging:** when you want the prints to be your missing friend’s, they look fresh. Write down the evidence before the conclusion.
- **Anchoring:** the first estimate spoken aloud sticks. Have two people estimate independently, then compare.
- **Light:** the same print looks crisp in low-angle light and old in flat light. Compare with the reference in the **same** light.
- **Micro-site:** a print in shade under trees ages far more slowly than one on a sunny bank a metre away.`,
    },
    { type: 'sim', id: 'tracking-scene', caption: 'Every scene includes aging: find the events that lie under and over the prints.' },
  ],
  whyItMatters: 'Age turns a trail into a decision. For a searcher, prints from this morning define where to look; prints from last week should be ruled out quickly so they do not pull teams away. For a traveller, fresh sign of a large animal on your route, or fresh human prints at a water source you thought was remote, changes the plan. Bracketing with events is a reliable, teachable method; unaided guessing is not.',
  science: [
    {
      type: 'md',
      md: `### The arithmetic of bracketing

If a print was made after event $E_1$ at time $t_1$ and before event $E_2$ at time $t_2$, and now is $t_{now}$, its age $a$ satisfies:

$$
t_{now} - t_2 \\;\\le\\; a \\;\\le\\; t_{now} - t_1
$$

In words: the **later** event you are sure the print pre-dates gives the **minimum** age; the **earlier** event it post-dates gives the **maximum** age. With several events, take the **largest** minimum and the **smallest** maximum — the window can only shrink.

**Worked example.** It is 15:00. A farmer drove out at 07:00 and back at 12:00. Dog prints lie on top of the 07:00 tyre track but are cut through by the 12:00 one:

$$
15{:}00 - 12{:}00 = 3\\ \\text{h} \\;\\le a\\; \\le 15{:}00 - 07{:}00 = 8\\ \\text{h}
$$

### Why prints dry from the edges

A print exposes more surface to air at its rims and ridges than in its floor, so evaporation (driven by the difference between the vapour pressure at the wet surface and in the air) dries edges first; drying soil loses cohesion and crumbles. Evaporation is faster with **sun, wind, warmth and low humidity** — so in a desert noon a print can look "old" in an hour, while in a humid shaded forest it may look "fresh" for a day. Dew point from Stage 12 matters too: on nights when the ground cools below the dew point, dew or frost forms on and in older prints, giving you a new dated layer.

### Snow: melting, sublimation and sintering

Sun and warm air erode print walls (melt and sublimation), rounding and enlarging the print. In cold snow the opposite happens to the walls themselves: ice grains bond together over time (**sintering**), so the disturbed snow of a print hardens. That is why trackers gently test wall firmness against a fresh reference print made beside it.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest, after overnight rain.** Rain stopped at 03:00. Prints on top of rain-pitted mud with smooth floors: made after 03:00. Human prints with pits inside: made before the rain stopped — older than your missing walker’s start time.

**Desert.** A sandstorm blew until 19:00. Every crisp print on the dunes is younger than that; beetle and lizard trails running across a print show it was there before those animals became active in the morning.

**Mountain.** Rockfall debris or fresh hail lying in prints dates them before the storm; prints on top of hail are after it.

**Arctic / subarctic.** A snow shower is the best clock you have. A dusting inside prints after a 01:00–02:00 shower, prints cut into snowfall that ended at 22:00: 8–12 hours old at 10:00. Sun on south-facing slopes ages prints far faster than on shaded north slopes.

**Coast.** High water is a daily eraser: every print below the last high-tide line is younger than that high tide. A tide table turns this into a precise clock.

**Urban.** Dust on a floor after an earthquake, a layer of ash after a wildfire, snow on a pavement: the earliest time the layer formed brackets every print on it. Rescue teams use the same logic when they check whether a building has been entered.

**Rural.** Tractor, patrol or school-bus tracks at known times are excellent brackets; so are the prints of your own party on the way in.`,
    },
  ],
  mistakes: [
    'Giving a single time (“2 hours”) instead of a range with the reasoning.',
    'Aging from edge crispness alone, without looking for events above and below the print.',
    'Comparing a print in the shade with a reference in the sun (or in different light).',
    'Letting what you hope (your missing friend’s prints) set the age.',
    'Forgetting that one event only gives one edge: “after the rain” means 0 to N hours, not “fresh”.',
    'Myth: “an experienced tracker can age any print to the hour at a glance.” Experts give ranges, check references and still disagree in difficult substrates.',
  ],
  exercises: [
    {
      id: 's11-l3-e1',
      title: 'Build and read an aging stand',
      level: 3,
      safety: 'home',
      minutes: 120,
      materials: ['A patch of garden soil or a large tray outdoors', 'Labels or small sticks', 'Phone camera', 'Notebook and a weather log'],
      steps: [
        'Smooth the substrate. Make a set of prints (hand-paw, shoe) and label them with the time.',
        'Photograph each set straight down, with a scale, at 0 h, 1 h, 3 h, 6 h, 12 h, 24 h, 48 h and 72 h — always with the same side light (a torch at dusk works well).',
        'Log the weather: sun or shade, rain, wind, overnight temperature, dew or frost.',
        'After 72 h, make a fresh print and have a friend make one at a time you do not know. Estimate its age as a range using your stand.',
        'Repeat in another season or substrate (sand, snow) and compare the rates.',
      ],
      success: ['A photo series for at least 5 time points with a weather log.', 'Your blind estimate’s range contains the true age.'],
      skill: 'trk-aging-reference',
    },
    {
      id: 's11-l3-e2',
      title: 'Event-bracket practice on a walk',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Notebook', 'Watch', 'Local weather record for the last 48 h'],
      steps: [
        'Before the walk, write down the known events of the last 48 hours: when rain or snow started and stopped, wind, frost, tides.',
        'On the walk, find five sets of prints. For each, look for an event lying on top of the prints and one lying under them.',
        'Write each age as a range with the reasoning, e.g. “after rain stopped 18:00, before frost ~02:00 → 7–15 h”.',
        'Check two of them with a reference print you make beside them.',
      ],
      success: ['Five ranges written with explicit brackets.', 'At least two brackets are two-sided (both a minimum and a maximum).'],
      skill: 'trk-aging-reference',
      safetyNote: 'Stay on legal paths; observe wildlife trails without following fresh sign of large animals.',
    },
  ],
  simulations: ['tracking-scene'],
  quiz: [
    {
      id: 's11-l3-q5',
      kind: 'single',
      prompt: 'Two searchers disagree: one says a print is “1 hour old”, the other “half a day”. What should the report to the search manager say?',
      choices: [
        { id: 'a', text: 'The average of the two, about 6 hours, as one best estimate', why: 'Averaging two guesses hides the uncertainty and the reasons.' },
        { id: 'b', text: 'The estimate of the more senior searcher, since experience counts', why: 'Seniority is not evidence; the manager needs the reasoning.' },
        { id: 'c', text: 'An age range with the evidence for each end, a scaled photo and location', why: 'Correct — reasons and uncertainty let the manager weigh this clue against others.' },
        { id: 'd', text: 'Nothing until the two searchers agree, to avoid a misleading report', why: 'Delaying a possible clue in a search wastes time; report the range.' },
      ],
      answer: 'c',
      concepts: ['track-aging', 'age-bracketing', 'clue-awareness'],
      explanation: 'Report ranges, reasons and records — e.g. “after the rain stopped at 06:00, no event on top → 0–7 h; walls still moist”. The search manager combines them with other clues and lost-person behaviour.',
    },
    {
      id: 's11-l3-q1',
      kind: 'single',
      prompt: 'Rain stopped at 18:00 yesterday. It is now 09:00. Boot prints on a path have raindrop pits inside them as well as around them. What can you say?',
      choices: [
        { id: 'a', text: 'They are less than 15 hours old', why: 'That would require the print to be on top of the rain-pitted surface — but the pits are inside the print.' },
        { id: 'b', text: 'They are at least 15 hours old', why: 'Correct — the rain lies on top of the print, so the print was made before or during the rain.' },
        { id: 'c', text: 'They are fresh because the edges look sharp', why: 'Edge crispness is weak evidence compared with an event lying on top of the print.' },
        { id: 'd', text: 'Rain pits tell you nothing about their age', why: 'Rain pits are one of the best dated layers.' },
      ],
      answer: 'b',
      concepts: ['age-bracketing'],
      explanation: 'Whatever lies on top is younger. Pits inside the print: print before the rain ended → age ≥ 09:00 − 18:00 = 15 h.',
    },
    {
      id: 's11-l3-q3',
      kind: 'single',
      prompt: 'Which observation shows that a print was made **after** the event named, not before it?',
      choices: [
        { id: 'a', text: 'Drifted sand lying inside the print (windstorm)', why: 'The wind deposited sand on top of the print, so the print came before the windstorm ended.' },
        { id: 'b', text: 'Last night’s wind-blown leaves pressed flat into the print floor', why: 'Correct — the leaves were there first and the foot pressed them down, so the print came after the leaf fall.' },
        { id: 'c', text: 'A later tyre track crossing and deforming the print (vehicle)', why: 'Superposition: the tyre track is on top, so the print came before the vehicle passed.' },
        { id: 'd', text: 'Intact frost crystals lying inside the print (frost)', why: 'A print made after the frost would break the crystals, so this print came before the frost.' },
      ],
      answer: 'b',
      concepts: ['age-bracketing', 'track-aging'],
      explanation: 'Something lying on top of the print is younger than the print; something pressed underneath it is older.',
    },
    {
      id: 's11-l3-q2',
      kind: 'single',
      prompt: 'It is 11:00. Hare prints are cut into snow that stopped falling at 23:00 last night, and frost crystals formed after 04:00 lie undisturbed inside them. What is the **maximum** age of the prints?',
      choices: [
        { id: 'a', text: '12 hours', why: 'Correct — the prints came after the snowfall ended: 11:00 − 23:00 = 12 h.' },
        { id: 'b', text: '7 hours', why: 'That is the minimum age, set by the frost (11:00 − 04:00).' },
        { id: 'c', text: '5 hours', why: 'That is the width of the window (12 − 7 h), not an age.' },
        { id: 'd', text: '19 hours', why: 'That is the gap from 04:00 to 23:00 — the wrong two times, not the age now.' },
      ],
      answer: 'a',
      concepts: ['age-bracketing'],
      explanation: 'After the snowfall ended (23:00) → maximum age 11:00 − 23:00 = 12 h. Before the frost (04:00) → minimum 7 h. Window: 7–12 h.',
    },
    {
      id: 's11-l3-q4',
      kind: 'single',
      prompt: 'Why do experienced trackers make a reference print beside an unknown one before estimating its age?',
      choices: [
        { id: 'a', text: 'To calibrate aging, since weathering rates vary so much locally', why: 'Correct — sun, shade, humidity, wind and substrate all change the rate.' },
        { id: 'b', text: 'To estimate the animal’s weight by comparing the two depths', why: 'Depth depends on pressure, speed and substrate; the reference print is for aging, not weight.' },
        { id: 'c', text: 'To confirm the species by matching the two print outlines', why: 'A human-made reference print says nothing about species; it calibrates weathering.' },
        { id: 'd', text: 'To mark the spot so other searchers can relocate the clue', why: 'Marking is done separately; the reference print shows how fast prints age here.' },
      ],
      answer: 'a',
      concepts: ['reference-tracks'],
      explanation: 'Sun, shade, humidity, wind and substrate all change the weathering rate. A reference print made in the same substrate and light beside the unknown one is the calibration.',
    },
  ],
  scenario: {
    id: 's11-l3-sc',
    setup: 'You are helping (under a team leader) at a search for a 14-year-old who walked away from a campsite at about 08:00 this morning. It is 13:00. On a sandy stream bank 2 km away you find trainer prints of about the right size heading upstream. A thunderstorm with heavy rain passed between 10:00 and 10:30; the prints show no raindrop pits and have crisp edges, and the rain-pitted sand around them has been crushed by the prints.',
    question: 'What is the best report?',
    choices: [
      { id: 'a', text: '“Found the kid’s prints — fresh — going upstream!” and run upstream to catch up.', why: 'Leaving your assignment and running ahead alone breaks the search structure and may destroy further sign.' },
      { id: 'b', text: 'Radio the team leader: “Trainer prints, about 24 cm, heading upstream; on top of the 10:00–10:30 rain pits, so made after 10:30 — 0 to 2.5 hours old. Photos with scale taken, location marked; we are keeping off the sign.”', why: 'Best: clear bracket with its reason, direction, size, records, and scene protection.' },
      { id: 'c', text: 'Say nothing, because you cannot be sure they are the child’s.', why: 'Uncertain clues are still clues. Reporting lets the manager decide; silence loses information.' },
      { id: 'd', text: 'Estimate “about 4 hours old” from how the edges look and report that.', why: 'The rain gives you a much better bracket than edge appearance — and it contradicts 4 hours.' },
    ],
    best: 'b',
    debrief: 'The storm is a dated layer under the prints: they were made after 10:30, so they are at most 2.5 hours old at 13:00. That fits the missing child (who left at 08:00) and is a high-value clue with a direction. The report gives what, where, which way, how old and why — and the team protects the sign so trained trackers can work it. Staying in the search structure (Stage 1: don’t create a second casualty; Lesson 6) matters more than speed on your own.',
    concepts: ['age-bracketing', 'clue-awareness', 'trk-scene-protection'],
  },
  summary: [
    '**What lies on top is younger.** Print cut into a layer → after it; layer on top of the print → before it.',
    'Age window: minimum = now − (latest event on top); maximum = now − (earliest event underneath). Multiple events only narrow it.',
    'Reference prints in the **same substrate and light** calibrate judgements of drying, crumbling, rounding and debris.',
    'Weathering rates vary hugely with sun, shade, wind, humidity and substrate — no universal rule of thumb.',
    'Report age as a **range with reasons**, never a falsely precise number; guard against wishful aging and anchoring.',
  ],
  furtherReading: ['trk-liebenberg-art', 'trk-taylor-cooper-mantracking', 'trk-cybertracker-cert'],
  references: ['trk-liebenberg-art', 'trk-taylor-cooper-mantracking', 'trk-elbroch-mammal-tracks', 'trk-cybertracker-cert', 'nasar'],
}
