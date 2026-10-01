import type { Lesson } from '../../types'

export const l12: Lesson = {
  id: 's2-l12',
  stage: 2,
  order: 12,
  title: 'When navigation fails',
  level: 'advanced',
  minutes: 55,
  prerequisites: ['s2-l7', 's2-l10', 's2-l11'],
  concepts: ['lost-recognition', 'lost-person-behavior', 'no-equipment-nav', 'relocation', 'stay-or-move'],
  objectives: [
    'Recognise the **early signs** of being lost — including "bending the map" — and act on doubt, not certainty.',
    'Describe common **lost-person strategies** from SAR research and which ones help or hurt.',
    'Choose between **relocating, moving to a catching feature, and staying put**, using STOP, the daylight budget and pre-set triggers.',
    'Navigate **without equipment** using sun, stars, terrain and linear features — and recognise the dangers of following drainages.',
    'Make yourself **findable** from the moment you decide to stay.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Almost nobody decides to get lost. It happens gradually: a missed junction, a trail that fades, a detour around a bog, fog on a plateau. The skill is noticing early, when fixing it is cheap.

### Warning signs

- **The map doesn’t match.** A stream flows the wrong way; you are climbing when the map says descend.
- **Bending the map.** You catch yourself explaining away mismatches — "that stream must be seasonal", "the map is probably wrong". This is the single most important warning sign: it means you have stopped using the map to test your position and started using it to confirm a belief.
- **Time overrun.** The feature you expected at 20 minutes has not appeared after 40. (Your Naismith estimate is a built-in alarm clock.)
- **Expected features missing, unexpected ones present.** A second river, a ridge you should not have crossed.
- **A vague feeling** that something is off. Treat it as data.

### How people react

Lost people commonly pass through **denial** (keep going, bend the map), **urgency** (speed up, take shortcuts, stop checking) and sometimes **panic** — running, discarding gear, pushing through dangerous terrain. Stage 1’s acute-stress lessons apply directly: the answer is **STOP**, physically, as early as possible.`,
    },
    {
      type: 'md',
      md: `### What lost people actually do

Robert Koester’s *Lost Person Behavior* and the International Search and Rescue Incident Database (ISRID) catalogue what lost people do. Searchers use these patterns to decide where to look first. Common strategies:

| Strategy | What it looks like | Effect |
|---|---|---|
| **Random traversing** | Moving in whatever direction looks easiest; circling. | Burns energy, adds distance, enlarges the search area. |
| **Route or direction traveling** | Picking a trail, road or direction and sticking to it. | Can work if the route leads somewhere; can lead far from searchers. |
| **Direction sampling** | Trying a direction for a short distance, returning to a known point, trying another. | Good — keeps a fixed anchor while testing options. |
| **View enhancing** | Climbing to a high point to see landmarks or get phone signal. | Often useful, but can lead onto steep ground. |
| **Backtracking** | Retracing your route to the last known point. | Very good if the route is clear (tracks, a recorded GPS track). |
| **Following trails, drainages or linear features** | Following a path, stream, fence or power line. | Often leads out — sometimes into gorges, cliffs or dense vegetation. |
| **Staying put** | Stopping, sheltering, signaling. | Makes you easiest to find; the hardest strategy for most people. |`,
    },
    { type: 'diagram', id: 'lost-strategies', caption: 'Lost-person strategies around the initial planning point (IPP): backtracking, route travel, direction sampling, view enhancing, staying put.' },
    {
      type: 'md',
      md: `ISRID data show that distances travelled vary widely with the person’s category (hiker, child, hunter, person with dementia, etc.), the terrain and the ecoregion. For many categories, half of subjects are found within a few kilometres of where they were last seen — which is why searchers start near the **initial planning point (IPP)** and work outward. **Every kilometre you wander moves you out of the high-probability area.** (Stage 14 shows how searches are planned from these statistics.)

### The decision: relocate, move, or stay

Run **STOP**, then work through the relocation procedure from lesson 7:`,
    },
    { type: 'diagram', id: 'relocation-flow', caption: 'Relocation: STOP → last known point → what can I see → terrain association → short, reversible search → decide.' },
    {
      type: 'md',
      md: `1. **Last known point (LKP).** Where were you last *certain*? How long ago, in what direction, at what pace? Draw a circle of possible positions.
2. **Cheap, reversible options first.** Backtrack on clear tracks or a recorded track; do **short out-and-back searches** from a marked spot (mark it with a bright item or a cairn so you can always return).
3. **A catching feature.** If the map shows a long road, river, coast, fence or ridge that you *must* hit in a known general direction, deliberately aim for it (aim off so you know which way to turn).
4. **Stay.** If you are injured, darkness or weather is near, a trip plan means searchers are coming, or moving means crossing hazards — stay, shelter and signal.

Set **triggers** before you move: "If I haven’t found the trail by 15:30, I stop and build shelter here." A trigger turns a vague hope into a decision you have already made while calm.

### Navigating without equipment

- **Sun** (lesson 8): shadow stick for east–west; sun at noon gives south/north.
- **Stars and Moon** (lesson 9): fix a line at night, move in daylight.
- **Natural signs** (lesson 10): ±30–45°, only for big targets.
- **Terrain.** Ridges are often more open and give views; valleys collect trails, water and roads — in settled country, walking **downhill along a drainage** often leads to a track or habitation.
- **But drainages are also dangerous.** Streams steepen into **gorges, waterfalls and cliff bands**; in tropical forest they choke with vegetation; in flash-flood country they are the worst place to be. Follow a drainage from **above and beside** it, never down the watercourse into a slot you cannot climb back out of.
- **Linear features** — roads, fences, power lines, pipelines, coastlines — are the best catching features: long, hard to miss, and they lead to people.`,
    },
    { type: 'sim', id: 'nav-relocation', caption: 'Fog on a moorland plateau: use STOP, your last known point, terrain and the daylight budget to decide what to do.' },
    {
      type: 'callout',
      tone: 'tip',
      title: 'The moment you decide to stay, start being found',
      md: 'Move to the nearest open spot you can reach safely; put out bright items; whistle in threes every few minutes; switch the phone to a battery plan with scheduled checks; prepare a mirror, light and ground signal. Tell yourself the plan out loud: “I am staying here. They know my route. My job is to stay warm and visible.”',
    },
  ],
  whyItMatters: 'Being lost is rarely fatal by itself; what kills is what lost people do next — walking into darkness, cold, cliffs or water, far from where searchers will look. Recognising the signs early and choosing a deliberate strategy turns a potential tragedy into an inconvenience or a short search.',
  science: [
    {
      type: 'md',
      md: `### Random wandering covers little ground

If you walk $n$ legs of length $L$ in random directions, your typical net distance from the start is not $nL$ but about

$$
R \\approx L\\sqrt{n}
$$

In words: **the net displacement grows only with the square root of the number of legs.** Walking 16 random legs of 500 m (8 km of effort) typically leaves you only $500 \\times \\sqrt{16} = 500 \\times 4 = 2\\ \\text{km}$ from where you started — and in an unknown direction. You spent the energy of 8 km, gained 2 km, and made yourself harder to find.

### Search area grows with the square of distance

If you could be anywhere within radius $r$ of the last known point, the area to search is $\\pi r^2$. Wandering from 2 km to 3 km possible radius increases the area from $\\pi \\times 2^2 \\approx 12.6\\ \\text{km}^2$ to $\\pi \\times 3^2 \\approx 28.3\\ \\text{km}^2$ — a factor of $(3/2)^2 = 2.25$. Search effort (and time) scales with area, so every extra kilometre costs searchers disproportionately.

### Why staying put helps even if you *could* walk out

A stationary person is found by *any* searcher who reaches that spot; a moving person must be intercepted. Searchers also rely on **clues** — footprints, dropped items, witness sightings — that line up only if you are where the clues point. Staying put, in the open, signaling, raises the **probability of detection** for every team in the field.

### A daylight budget for relocating

From Stage 1: latest start of night preparation $t_{\\text{start}} = t_s + \\tau - T_n$. With sunset at 16:40, 20 min of useful twilight under cloud and 70 min to prepare shelter, $t_{\\text{start}} = 16{:}40 + 0{:}20 - 1{:}10 = 15{:}50$. If it is 14:50, you have **60 minutes** for relocation — enough for a few short, reversible searches, not for a long gamble.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** A mushroom picker, head down for hours, loses all sense of direction. Best move: STOP, whistle, call out; if no clear backtrack, stay near the last known area and signal. Searches like this tend to be short when the subject stays put and responds.

**Mountain plateau in fog.** Walkers miss the descent path. The plateau edge is a catching feature, but also a cliff. Careful relocation — pace and bearing to a known feature — or staying and sheltering beats walking toward "the edge".

**Desert.** A recurring pattern in desert incidents: a driver leaves a stuck vehicle to walk for help and gets into serious trouble kilometres away, while the car itself is found quickly. The vehicle is shelter, shade and a large signal.

**Tropical rainforest.** Following a stream downhill leads into a steep, overgrown gorge with waterfalls. Moving along the ridge above it, or staying near a clearing, is safer.

**Subarctic.** Short winter days make the daylight budget the dominant factor; a lost skier who stops and builds shelter at 14:00 is in far better shape than one still wandering at 16:00.

**Coast.** A coastline is a perfect catching feature — but tides and cliffs can trap people walking along it. Know the tide before you commit.

**Urban and rural.** Even in farmland or on the edge of a city, lost-person patterns hold: people with dementia may walk in a straight line until blocked; children may hide from searchers. Roads and fences are strong handrails for self-rescue.`,
    },
  ],
  mistakes: [
    '"Bending the map" to fit what you want to be true.',
    'Speeding up when uncertain instead of stopping — urgency is the second stage of being lost.',
    'Leaving the last known point without marking it, so you cannot return.',
    'Following a stream down into a gorge or over a waterfall.',
    'Walking until dark and then trying to build shelter.',
    'Hiding from or ignoring searchers out of embarrassment — call out, signal, respond.',
    'Myth: "If I just walk in a straight line I’ll hit something." Without references people walk in circles, and straight lines can lead into wilderness for days.',
  ],
  exercises: [
    {
      id: 's2-l12-e1',
      title: 'Tabletop lost drill',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['A topographic map of a real area (paper or on screen)', 'A partner', 'Timer'],
      steps: [
        'Your partner secretly marks a last known point and a “true” position 1–3 km away, then describes only what you can see (terrain, streams, slope direction, time, weather).',
        'Run STOP aloud. Draw your circle of possible positions from the LKP, time and pace.',
        'Choose a strategy (backtrack, short searches, catching feature, stay) and set a trigger time from a daylight budget.',
        'Your partner reveals the true position; discuss what each option would have led to, including any drainages with gorges or cliffs.',
      ],
      success: ['Your circle of possible positions contains the true position.', 'Your plan has a named catching feature or a stay decision, and a trigger time.'],
      skill: 'stop-drill',
    },
    {
      id: 's2-l12-e2',
      title: 'No-compass walk to a catching feature',
      level: 3,
      safety: 'supervised',
      minutes: 90,
      materials: ['Supervisor with map, compass and GPS', 'A small area bounded by paths or roads', 'Whistle'],
      safetyNote: 'In daylight only, in a small area bounded by roads, paths or a shoreline, with a competent supervisor tracking you. No steep ground, gorges or water crossings.',
      steps: [
        'The supervisor leads you to a start point in the area; you do not use map, compass or phone.',
        'Using the sun, natural clues and terrain only, walk to a named catching feature 1–2 km away (a road or path that bounds the area).',
        'Every 10 minutes, estimate your direction and distance travelled; the supervisor records the truth from GPS.',
        'Debrief: how big was your heading error, and did aiming at the catching feature absorb it?',
      ],
      success: ['You reached the catching feature.', 'Your heading estimates were within about 45° of the truth most of the time, and you can explain the biggest error.'],
      skill: 'terrain-association',
    },
  ],
  simulations: ['nav-relocation', 'nav-map'],
  quiz: [
    {
      id: 's2-l12-q7',
      kind: 'single',
      prompt: 'Day hike, trip plan left with a friend, due back at 18:00. At 16:30 you realise you are lost in dense, hilly forest, uninjured, with warm layers. Sunset is 18:20. Which is the best plan?',
      choices: [
        { id: 'a', text: 'Keep walking fast downhill until you find a road, while there is still daylight left.', why: 'Urgency, darkness and a drainage that may lead to a gorge — a poor combination.' },
        { id: 'b', text: 'STOP; 15–20 min of marked out-and-back searches; if no trail by 17:15, prepare for night and signal.', why: 'Best — cheap reversible options first, a trigger time, then stay where searchers will look.' },
        { id: 'c', text: 'Climb the highest hill in sight to get a phone signal, however long that takes you.', why: 'View enhancing can help, but not at the cost of being on steep ground at dusk.' },
        { id: 'd', text: 'Sit down immediately where you are and do nothing at all until rescuers find you.', why: 'Staying is right eventually, but you should also try cheap reversible options and prepare shelter and signals.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'trip-plan', 'daylight', 'reversibility'],
      explanation: 'The trip plan means a search will start near your route; a short, anchored relocation attempt with a trigger, then a well-prepared stay at the nearest safe open spot, gives the best odds.',
    },
    {
      id: 's2-l12-q1',
      kind: 'single',
      prompt: 'Which of these is **not** a warning sign that you may already be lost?',
      choices: [
        { id: 'a', text: 'You tell yourself the stream on the map “must be seasonal” because it isn’t there.', why: 'A warning sign — classic bending the map.' },
        { id: 'b', text: 'A junction expected at 20 minutes has not appeared after 40.', why: 'A warning sign — a time overrun is an objective alarm.' },
        { id: 'c', text: 'You pass the features you expected, in order and on time.', why: 'Correct — that is the map confirming your position.' },
        { id: 'd', text: 'You notice you are walking faster and checking the map less.', why: 'A warning sign — urgency is a behavioral warning sign.' },
      ],
      answer: 'c',
      concepts: ['lost-recognition'],
      explanation: 'Mismatches (such as descending when the route should climb), time overruns, explaining away evidence and speeding up all mean: STOP now.',
    },
    {
      id: 's2-l12-q2',
      kind: 'single',
      prompt: 'Which lost-person strategy keeps a fixed anchor while testing options?',
      choices: [
        { id: 'a', text: 'Random traversing', why: 'No anchor — you drift and circle.' },
        { id: 'b', text: 'Direction sampling', why: 'Correct — short trips out from a known point and back.' },
        { id: 'c', text: 'Route traveling', why: 'Commits to a single route; no return to an anchor.' },
        { id: 'd', text: 'View enhancing', why: 'Useful for information, but climbing away from your point is not an anchored search.' },
      ],
      answer: 'b',
      concepts: ['lost-person-behavior'],
      explanation: 'Direction sampling (and marked out-and-back searches) keeps your last known point as a safe base.',
    },
    {
      id: 's2-l12-q5',
      kind: 'single',
      prompt: 'In the relocation sequence, which step comes **immediately before** you commit at your trigger time (catching feature, or stay and signal)?',
      choices: [
        { id: 'a', text: 'Stop, sit, drink and calm down', why: 'That is the first step — it opens the sequence.' },
        { id: 'b', text: 'Identify your last known point and circle', why: 'Second — the known facts come before observation and action.' },
        { id: 'c', text: 'Match the visible terrain to the map', why: 'Third — observation comes before trying actions.' },
        { id: 'd', text: 'Try short, marked, reversible searches', why: 'Correct — cheap reversible actions come last before the committed decision.' },
      ],
      answer: 'd',
      concepts: ['relocation', 'stop', 'decisions'],
      explanation: 'Calm first, then known facts, then observation, then cheap reversible actions, then a committed decision at a pre-set trigger.',
    },
    {
      id: 's2-l12-q6',
      kind: 'single',
      prompt: 'Sunset is at 16:40. Under cloud you expect 20 minutes of useful twilight and need 70 minutes to prepare shelter. It is 14:50. How long do you have for relocation before you must start preparing?',
      choices: [
        { id: 'a', text: '60 minutes', why: 'Correct — latest start = 16:40 + 20 − 70 = 15:50.' },
        { id: 'b', text: '40 minutes', why: 'Forgot the twilight — 16:40 − 70 = 15:30.' },
        { id: 'c', text: '20 minutes', why: 'Subtracted the twilight instead of adding it — 15:10.' },
        { id: 'd', text: '130 minutes', why: 'Forgot the 70 minutes of shelter preparation.' },
      ],
      answer: 'a',
      concepts: ['daylight', 'relocation'],
      explanation: 'Latest start = 16:40 + 20 − 70 = 15:50. From 14:50 that is **60 minutes**.',
    },
    {
      id: 's2-l12-q3',
      kind: 'single',
      prompt: 'A lost walker makes 25 legs of 400 m each in random directions. About how far are they typically from where they started?',
      choices: [
        { id: 'a', text: '2 km', why: 'Correct — R ≈ L√n = 0.4 × 5 = 2 km.' },
        { id: 'b', text: '10 km', why: 'That is the total distance walked; random legs partly cancel.' },
        { id: 'c', text: '0.4 km', why: 'Random legs do not fully cancel — distance still grows with √n.' },
        { id: 'd', text: '5 km', why: 'Forgot to multiply √25 by the 0.4 km leg length.' },
      ],
      answer: 'a',
      concepts: ['lost-person-behavior', 'stay-or-move'],
      explanation: '$R \\approx L\\sqrt{n} = 0.4 \\times \\sqrt{25} = 0.4 \\times 5 =$ **2 km** — after 10 km of walking, in an unknown direction.',
    },
    {
      id: 's2-l12-q4',
      kind: 'single',
      prompt: 'Which statement about following a stream downhill when lost is most accurate?',
      choices: [
        { id: 'a', text: 'It often reaches tracks in settled country, but can lead into gorges or floods.', why: 'Correct — follow from above and beside, if at all.' },
        { id: 'b', text: 'It is always safe, since water reliably leads down to roads and to people.', why: 'Streams also lead over waterfalls and cliff bands and into dense vegetation.' },
        { id: 'c', text: 'It is safe in forest, and dangerous only in open, steep mountain terrain.', why: 'Gorges, dense vegetation and flash floods are forest hazards too.' },
        { id: 'd', text: 'Walk in the streambed itself, which is the clearest path through cover.', why: 'Streambeds are dangerous in flash floods; stay above and beside the water.' },
      ],
      answer: 'a',
      concepts: ['no-equipment-nav'],
      explanation: 'In settled country it often leads to tracks or roads, but streams also lead into gorges, over waterfalls and cliff bands, into dense vegetation, and are dangerous in flash floods. Follow from above and beside, if at all.',
    },
  ],
  scenario: {
    id: 's2-l12-sc',
    setup: 'You left the trail in lowland tropical rainforest at 15:00 to photograph birds and wandered about 20 minutes. Now you cannot find the trail. It is 15:30; sunset is 18:15 with a short tropical twilight. You hear a stream downhill. You told your lodge your route and are due back at 18:00. Your phone has 40 % battery, no signal, and no offline map. You have a whistle, a bright rain jacket and 1 L of water.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Follow the stream downhill, since streams lead to rivers and rivers lead to people.', why: 'In rainforest, streams often steepen into gorges and waterfalls and choke with vegetation; you would also leave the area where the lodge will search.' },
      { id: 'b', text: 'STOP; hang the jacket as a marker, do whistling out-and-back searches; no trail by 16:45 → stay, signal.', why: 'Best — you are probably within a few hundred metres of the trail; anchored searches are reversible; the trigger protects your daylight; and the lodge will search your stated route.' },
      { id: 'c', text: 'Walk in a straight line using the sun until you hit a road somewhere in that direction.', why: 'The sun is hidden under canopy, straight-line walking drifts, and you do not know that a road lies in any given direction.' },
      { id: 'd', text: 'Keep searching around randomly until dark, since the trail must be very close by.', why: 'Random traversing enlarges the search area and leaves no time to prepare for the night.' },
    ],
    best: 'b',
    debrief: 'You were probably within a few hundred metres of the trail. **Marked, out-and-back searches** from the jacket exploit that without risking getting further lost. A **trigger time** protects the daylight budget, and your **trip plan** means searchers will start near the trail — so staying close, visible and audible (the most open spot nearby, prepared for the night) beats walking toward an imagined road. Stage 14 covers how those searchers will work.',
    concepts: ['lost-person-behavior', 'relocation', 'stay-or-move', 'trip-plan', 'daylight', 'signaling'],
  },
  summary: [
    'Act on doubt: map mismatches, time overruns and “bending the map” mean STOP now.',
    'Lost people traverse randomly, follow routes and drainages, sample directions, seek views, backtrack — or stay put. Anchored strategies and staying are best.',
    'Random wandering: $R \\approx L\\sqrt{n}$ — lots of effort, little progress, a bigger search area ($\\pi r^2$).',
    'Relocate cheaply and reversibly first; set a trigger time from the daylight budget.',
    'Without equipment: sun, stars, natural clues and terrain toward long catching features; beware gorges and cliffs along drainages.',
    'Once you stay, work at being found: open ground, colour, whistle, light, phone battery plan.',
  ],
  furtherReading: ['koester-lpb', 'adventuresmart', 'deep-survival'],
  references: ['koester-lpb', 'adventuresmart', 'nasar', 'mra', 'souman-circles-2009', 'langmuir-mountaincraft', 'army-atp-3-50-21', 'deep-survival'],
}
