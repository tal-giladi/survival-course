import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's12-l3',
  stage: 12,
  order: 3,
  title: 'Flash floods and water crossings',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s12-l2', 's2-l2'],
  concepts: ['flash-flood', 'moving-water-force', 'water-crossing', 'go-no-go'],
  objectives: [
    'Read a map for **catchments** and explain why a storm you cannot see can flood the place you are standing.',
    'Estimate peak flow with the **rational method** and the **drag force** of moving water ($\\propto v^2$).',
    'Apply the NWS rules of thumb (**15 cm** knocks an adult down, **30 cm** floats most cars) and "Turn Around, Don’t Drown".',
    'Decide **when not to cross** a river, and choose safer times and places when a crossing is unavoidable.',
    'Choose camps and routes that stay safe when water rises.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Moving water is one of the most underestimated outdoor hazards. It looks slow, it looks shallow, and people step in. Rivers and floods kill experienced hikers, and floodwater kills many drivers who "had driven through it before".

### Catchments: why the flood comes from somewhere else

A **catchment** (watershed, drainage basin) is all the land that drains to a given point. Its boundary follows the ridgelines, which you can trace on a topographic map (Stage 2). **Every drop that falls anywhere in the catchment ends up passing your point**, and it may arrive hours later.

A **flash flood** is a rapid rise of water within minutes to a few hours of heavy rain, a dam or ice-jam failure, or a debris dam giving way. It is worst where:

- **Rain is intense** (thunderstorms, Lesson 2), often far upstream and out of sight.
- **Ground sheds water fast:** bare rock, thin or crusted desert soils, frozen or saturated ground, **burn scars** (Lesson 5), pavement.
- **Slopes are steep and channels narrow**, so the water has nowhere to spread. Slot canyons, gorges and dry washes are the extreme case.`,
    },
    { type: 'diagram', id: 'catchment-flash-flood', caption: 'Sunshine where you stand says nothing about the catchment. The flood arrives as a steep, sudden rise, sometimes as a wall of debris-laden water.' },
    {
      type: 'md',
      md: `### Warning signs

- Thunderstorms or dark cloud **anywhere over the catchment**, or a flash-flood watch or warning.
- Water **rising, turning muddy**, carrying sticks, leaves and foam.
- A growing **roar** or rumble upstream, or rocks knocking together.
- A sudden change in flow, including a sudden *drop*, which can mean debris has dammed the channel upstream and may release.

**Response:** climb **up and out, immediately**, to ground well above the high-water marks, even if that means leaving gear behind. Do not try to outrun the water down the channel.

### The force of moving water

Moving water pushes on you with a force that grows with the **square of its speed**, so doubling the speed quadruples the force. It also **buoys you up**, which takes weight off your feet exactly when you need grip. That is why the NWS rules of thumb look so small:

| Depth of **moving** water | NWS rule of thumb |
|---|---|
| **~15 cm (6 in)** | Can knock over an adult |
| **~30 cm (12 in)** | Can carry away most cars |
| **~60 cm (2 ft)** | Can carry away SUVs and trucks |

**Turn Around, Don’t Drown.** Never walk or drive into floodwater. You cannot see the depth, the speed, or whether the road underneath has been washed away.`,
    },
    { type: 'diagram', id: 'water-force-chart', caption: 'Drag on a wader’s legs versus water speed. Around 2 m/s, a brisk walking pace, the push already exceeds the grip of feet on a slippery bed.' },
    {
      type: 'md',
      md: `### River crossings: when **not** to cross

A planned route that "crosses the river" is a decision point, not a formality. **Do not cross** if any of these is true:

- The water is **fast and above knee depth**, or you **cannot see the bottom**.
- The river is **rising, muddy, or carrying debris**, or it is raining or storming upstream.
- There are **hazards downstream** within the distance you could be swept: rapids, waterfalls, **strainers** (fallen trees and log jams that let water through but hold a person under), undercut banks, or cold, deep pools.
- The water is **very cold** (snowmelt or glacial). Cold shock and swimming failure follow within minutes (Stage 8).
- You are **alone**, tired, or the group lacks training and a rescue plan.

**Options that are almost always better:**

- **Wait.** Flash floods usually fall within hours. Snowmelt and glacial rivers peak in the **late afternoon** and are lowest in the **early morning**.
- **Go around:** a bridge, the headwaters above tributary junctions, or a lake outlet.
- **Choose a wider, braided section.** When the same water spreads out, it is shallower and slower.
- **Turn back.** Rivers are a common place for turnaround times to be tested.

### If a crossing is unavoidable: principles only

Crossing technique (facing upstream, using a pole as a third point of contact, group methods, pack straps) is taught on **supervised courses**. Tactics vary with the river, and ropes in moving water can trap and drown people. The key principles are these: scout from the bank, choose the crossing point and a *run-out* (where you would wash up) *before* you step in, cross at an angle downstream, and keep the group together with a spotter downstream. **Any practice should be in calm, shallow, supervised water, or virtual.**`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Safety boundary',
      md: 'Do not practise crossings in fast, deep, cold or rising water. Swiftwater rescue is a specialist discipline (formal training). In this course, crossings are assessed **from the bank** and decided in scenarios and simulations.',
    },
    {
      type: 'md',
      md: `### Flooding more broadly

- **River floods** build over hours to days from widespread rain, **rain-on-snow** or snowmelt. Streams may rise overnight.
- **Coastal flooding:** storm surge plus high tide plus waves. Check tide tables before beach and headland walks.
- **Urban flooding:** underpasses, low roads and basements fill fast, and manhole covers can lift.
- **Campsites:** camp well above the **high-water marks**. Look for debris lines, flood trash lodged in branches and scoured banks. Never camp in a dry wash or on a gravel bar, and know your route *up* in the dark.`,
    },
  ],
  whyItMatters: 'Flash floods and river crossings kill people who never saw rain: hikers in slot canyons under blue sky, drivers on a familiar road, trekkers crossing a glacial river in the afternoon. Every one of these is a decision made minutes or hours before, and every one can be changed with the right trigger.',
  science: [
    {
      type: 'md',
      md: `### How much water? The rational method

Engineers estimate the peak flow from a small catchment with

$$
Q = 0.278\\; C\\, i\\, A
$$

In words: **peak flow = runoff fraction × rain intensity × area**, with a constant that makes the units work. $Q$ is in m³/s, $C$ is the fraction of rain that runs off (0.1–0.3 for forest soils, 0.5–0.9 for bare rock, pavement or burn scars), $i$ is rain intensity in mm/h, and $A$ is area in km².

**Example:** a 25 km² desert catchment of bare rock ($C = 0.6$) under a thunderstorm dropping 40 mm/h:

$$
Q = 0.278 \\times 0.6 \\times 40 \\times 25 \\approx 167\\ \\text{m}^3/\\text{s}
$$

Push that through a slot canyon 5 m wide at 4 m/s and the depth is $167 / (5 \\times 4) \\approx 8$ m. That is the arithmetic behind "walls of water".

### Drag and grip

Water pushing on your legs exerts a drag force

$$
F = \\tfrac{1}{2}\\,\\rho\\, C_d\\, A\\, v^2
$$

In words: **half × water density × a shape factor × the area facing the flow × speed squared.** With $\\rho = 1000$ kg/m³, $C_d \\approx 1$, and knee-deep water on both legs ($A \\approx 0.15$ m²):

- $v = 1$ m/s → $F \\approx 75$ N
- $v = 2$ m/s → $F \\approx 300$ N
- $v = 3$ m/s → $F \\approx 675$ N

Your resistance is friction, roughly $\\mu$ times your *effective* weight (weight minus buoyancy). A 75 kg person weighs about 736 N. Thigh-deep, the water displaced by the legs might lift ~200 N, leaving ~540 N pressing the feet down. On algae-covered rock ($\\mu \\approx 0.4$) that gives about **215 N of grip**. At 2 m/s the push (300 N) already exceeds it. **Deeper water increases the push and reduces the grip at the same time**, which is why the danger rises so steeply.

**Estimating speed from the bank:** time a floating stick over a paced 10 m. 5 s means 2 m/s. The surface is usually faster than the average flow, but the centre of the channel is faster still.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert slot canyon (Colorado Plateau, Middle East, Australian outback).** The forecast calls for isolated storms 30 km away over the plateau that drains into your canyon. It is a no-go even under blue sky: the catchment, not the local sky, sets the risk.

**Mountain / glacial river (Alaska, New Zealand, Himalaya).** A braided glacial river at 07:00 is thigh-deep in its channels. By 16:00, after a warm sunny day, it is waist-deep and grey. Plan crossings for early morning, or wait.

**Temperate forest.** After a night of rain, a creek you rock-hopped yesterday is brown and roaring. There is a bridge 3 km upstream. The detour costs an hour; the crossing could cost a life.

**Tropical.** Afternoon downpours raise jungle rivers within an hour. Camp high on the bank, not on the sand bar, and cross in the morning.

**Urban / rural roads.** A dip in a country road is covered by 25 cm of moving water. It is enough to float many cars, and the road beneath may be gone. Turn around.

**Coastal.** A beach walk around a headland at a rising tide with an onshore storm. Surge and waves can trap you against cliffs. Time it by the tide tables, with margin.`,
    },
  ],
  mistakes: [
    'Judging flood risk by the sky overhead instead of the whole catchment.',
    'Camping in a dry wash, on a gravel bar or just above the waterline because it is flat and sandy.',
    'Myth: "It’s only ankle-to-knee deep, so it can’t hurt me." Speed matters more than depth, and force rises with speed squared.',
    'Driving into flooded roads. A large share of flood deaths happen in vehicles driven into water.',
    'Crossing glacial or snowmelt rivers in the afternoon instead of waiting for the morning low.',
    'Tying people to a rope in moving water without swiftwater training. Ropes can pin people underwater.',
    'Trying to outrun a flash flood down the channel instead of climbing straight up and out.',
  ],
  exercises: [
    {
      id: 's12-l3-e1',
      title: 'Map a catchment',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['A topographic map (paper or online) of a canyon, gorge or valley route'],
      steps: [
        'Pick a point on the route in a narrow channel.',
        'Trace the catchment boundary along ridgelines until it closes.',
        'Estimate its area in km² using the grid.',
        'Use the rational method with $C = 0.5$ and $i = 30$ mm/h to estimate a peak flow.',
        'Mark the escape points (places you can climb above flood level) and the no-go conditions for this route.',
      ],
      success: ['Your boundary follows ridgelines and closes on the chosen point.', 'You have written at least two specific no-go triggers (e.g., "any thunderstorm forecast over the catchment").'],
      skill: 'hazard-go-no-go',
    },
    {
      id: 's12-l3-e2',
      title: 'Assess a crossing — from the bank only',
      level: 3,
      safety: 'outdoor',
      minutes: 40,
      materials: ['A stick or leaf to float', 'Watch', 'Notebook'],
      steps: [
        'At a local stream or river, stay on the dry bank well back from the edge.',
        'Estimate the speed: time a floating stick over a paced 10 m.',
        'Estimate the depth from visible features only (rocks, the bottom, marker posts). Do not wade in.',
        'Look downstream for strainers, rapids, drops and deep pools, and upstream for signs of rising water.',
        'Write your go/no-go decision and the alternatives (wait, detour, turn back).',
      ],
      success: ['You produced a speed estimate in m/s and a clear go/no-go decision with reasons.', 'You identified at least one downstream hazard or confirmed there were none.'],
      skill: 'crossing-assessment',
      safetyNote: 'Do not enter the water. Stay away from undercut banks and slippery rocks at the edge. Do not do this during high flow or floods.',
    },
  ],
  quiz: [
    {
      id: 's12-l3-q6',
      kind: 'single',
      prompt: 'You are in a dry wash. The water around your feet starts to rise and turn muddy, and you hear a rumble upstream. What do you do?',
      choices: [
        { id: 'a', text: 'Climb straight up the side to high ground now, leaving gear.', why: 'Correct: height is the only protection, and seconds count.' },
        { id: 'b', text: 'Run downstream as fast as you can to reach the canyon exit.', why: 'You cannot outrun a flash flood down its own channel.' },
        { id: 'c', text: 'Climb onto the biggest boulder in the channel and hold on.', why: 'Flood surges move boulders and carry debris.' },
        { id: 'd', text: 'Pack up your gear quickly first, then climb out of the wash.', why: 'Gear is replaceable; there may be only seconds.' },
      ],
      answer: 'a',
      concepts: ['flash-flood', 'immediate-danger'],
      explanation: 'Up and out, now. Beforehand, know the escape points along the route.',
    },
    {
      id: 's12-l3-q3',
      kind: 'single',
      prompt: 'You have no formal river-crossing training. Which of these conditions is **not**, in itself, a no-go for a crossing?',
      choices: [
        { id: 'a', text: 'Fast-flowing water above knee depth', why: 'A no-go: depth and speed together will take your feet.' },
        { id: 'b', text: 'A log jam 50 m downstream of the ford', why: 'A no-go: a strainer is a deadly entrapment hazard.' },
        { id: 'c', text: 'Water that is rising and turning brown', why: 'A no-go: flow is increasing.' },
        { id: 'd', text: 'Clear, slow, shin-deep water over gravel', why: 'Correct: not a no-go in itself; still scout and choose a gentle run-out.' },
      ],
      answer: 'd',
      concepts: ['water-crossing', 'go-no-go'],
      explanation: 'Depth, speed, trend, downstream hazards and temperature (e.g., a snowmelt river near its afternoon peak) each can make a crossing a no-go. Alternatives: wait, go around, turn back.',
    },
    {
      id: 's12-l3-q2',
      kind: 'single',
      prompt: 'If water speed **doubles** at the same depth, the drag force on your legs…',
      choices: [
        { id: 'a', text: 'doubles', why: 'Drag depends on speed squared, not speed.' },
        { id: 'b', text: 'quadruples', why: 'Correct: 2² = 4.' },
        { id: 'c', text: 'stays the same', why: 'No: force depends strongly on speed.' },
        { id: 'd', text: 'increases by about 40 %', why: 'That would be √2, the wrong direction of the relationship.' },
      ],
      answer: 'b',
      concepts: ['moving-water-force'],
      explanation: '$F \\propto v^2$. A river that looks "a bit faster" may be pushing twice as hard.',
    },
    {
      id: 's12-l3-q4',
      kind: 'single',
      prompt: 'According to the US National Weather Service, about how deep does rushing water need to be to carry away **most cars**?',
      choices: [
        { id: 'a', text: 'About 15 cm (6 in)', why: 'That depth of fast water can knock an adult over; cars need a little more.' },
        { id: 'b', text: 'About 30 cm (12 in)', why: 'Correct: NWS figure for most cars.' },
        { id: 'c', text: 'About 60 cm (24 in)', why: 'That is the NWS figure for SUVs and trucks.' },
        { id: 'd', text: 'About 1 m (40 in)', why: 'Far less is needed; at about 60 cm even SUVs and trucks are carried away.' },
      ],
      answer: 'b',
      concepts: ['flash-flood'],
      explanation: 'NWS: ~15 cm of fast water can knock an adult over; ~30 cm can carry away most cars; ~60 cm SUVs and trucks. Turn Around, Don’t Drown.',
    },
    {
      id: 's12-l3-q1',
      kind: 'single',
      prompt: 'Using $F = \\tfrac{1}{2}\\rho C_d A v^2$ with $\\rho = 1000$, $C_d = 1$, $A = 0.15$ m², what is the force at **2.5 m/s**?',
      choices: [
        { id: 'a', text: '469 N', why: 'Correct: 0.5 × 1000 × 1 × 0.15 × 6.25 = 468.75 N.' },
        { id: 'b', text: '938 N', why: 'This forgets the factor of ½.' },
        { id: 'c', text: '188 N', why: 'This uses v (2.5) instead of v² (6.25).' },
        { id: 'd', text: '375 N', why: 'This doubles the speed (5) instead of squaring it (6.25).' },
      ],
      answer: 'a',
      concepts: ['moving-water-force'],
      explanation: '$0.5 \\times 1000 \\times 1 \\times 0.15 \\times 2.5^2 = 468.75$ N. That is well above the grip of feet on a slippery bed.',
    },
    {
      id: 's12-l3-q5',
      kind: 'single',
      prompt: 'Rational method: $Q = 0.278\\,C\\,i\\,A$. A 10 km² catchment of bare rock ($C = 0.7$) receives 50 mm/h. What is the peak flow?',
      choices: [
        { id: 'a', text: '97 m³/s', why: 'Correct: 0.278 × 0.7 × 50 × 10 = 97.3 m³/s.' },
        { id: 'b', text: '350 m³/s', why: 'This forgets the 0.278 unit-conversion factor.' },
        { id: 'c', text: '139 m³/s', why: 'This forgets the runoff coefficient C = 0.7.' },
        { id: 'd', text: '1259 m³/s', why: 'This divides by 0.278 instead of multiplying.' },
      ],
      answer: 'a',
      concepts: ['flash-flood'],
      explanation: '$0.278 \\times 0.7 \\times 50 \\times 10 = 97.3$ m³/s. That is from a storm over an area smaller than many city parks.',
    },
  ],
  scenario: {
    id: 's12-l3-sc',
    setup: 'Trekking in a remote valley. At 14:00 you reach a glacial river that was thigh-deep and fast when another party crossed it this morning. Now it is grey, loud and you can hear boulders rolling. The map shows a footbridge 7 km upstream (about 3 hours). Your group is tired and camp is on the far side. Sunset is at 19:30.',
    question: 'What is the best decision?',
    choices: [
      { id: 'a', text: 'Cross now while it is still light, linked arm in arm.', why: 'Rolling boulders and a daily meltwater peak make this a no-go. Group technique does not overcome the physics.' },
      { id: 'b', text: 'Camp on this side on high ground well above the flood marks, and reassess at dawn when meltwater is lowest.', why: 'Best: the river will likely be lower in the early morning. The cost is one night on the wrong side. That is reversible; a failed crossing is not.' },
      { id: 'c', text: 'Walk to the bridge now, arriving around 17:00 and continuing to camp by headlamp.', why: 'Reasonable, but tired walking into darkness adds risk. Better than crossing, worse than waiting unless you must be on the other side tonight.' },
      { id: 'd', text: 'Cross where it is widest, alone first, to test it.', why: 'A lone test crossing in a no-go river puts one person at maximum risk without a rescue plan.' },
    ],
    best: 'b',
    debrief: 'Glacial rivers peak in the afternoon and drop overnight. Waiting is a powerful, underused option. Choose the **reversible** action (Stage 1): a night on the wrong side can be undone, a swim in a glacial torrent cannot. If waiting were impossible, the bridge detour (c) would be next best.',
    concepts: ['water-crossing', 'reversibility', 'daylight'],
  },
  summary: [
    'A catchment funnels all its rain to one point. Storms you cannot see cause flash floods where you stand.',
    'Peak flow ≈ 0.278·C·i·A. Bare rock, burn scars, frozen or saturated ground and narrow channels make it worse.',
    'Water force ∝ v². Depth adds push and removes grip. ~15 cm of fast water knocks adults over; ~30 cm floats cars. Turn Around, Don’t Drown.',
    'Don’t cross fast water above the knee, rising or muddy water, water with hazards downstream, or cold meltwater. Wait, detour or turn back.',
    'Crossing technique is learned on supervised courses; practise only in calm, shallow, supervised water, or virtually.',
  ],
  furtherReading: ['nws-flood', 'nws-tadd', 'freedom-hills'],
  references: ['nws-flood', 'nws-tadd', 'freedom-hills', 'coldwater-1101'],
}
