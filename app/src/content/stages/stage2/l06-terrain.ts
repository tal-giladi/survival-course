import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's2-l6',
  stage: 2,
  order: 6,
  title: 'Terrain association and handrails',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s2-l2', 's2-l5'],
  concepts: ['terrain-association', 'handrails', 'aiming-off', 'angular-error', 'contours', 'landforms'],
  objectives: [
    'Keep the map **oriented** and **thumbed** so the ground and the map always match.',
    'Plan a route in legs using **handrails**, **collecting features**, **catching features** and **attack points**.',
    'Use **aiming off** to hit a point on a linear feature, and size the offset with the 1-in-60 rule.',
    'Choose between rough and precise navigation (“traffic lights”) and use **contouring** to hold height.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Compass-and-pacing works, but it is slow and its errors grow (lesson 5). Skilled navigators spend most of their time doing something easier and more robust: **terrain association** — continuously matching what they see to what the map shows. The compass is kept for the parts where the terrain cannot guide you.

### Orient and thumb the map

- **Orient the map**: turn it so north on the map points to north on the ground (use the compass, or line up two features you can see). Then left on the map is left in front of you.
- **Thumb the map**: fold it small and keep your thumb on your current position, moving it as you pass features. You never have to “find yourself” from scratch.

### Build the route out of features

| Feature type | What it does | Examples |
|---|---|---|
| **Handrail** | A linear feature you can follow roughly parallel to your route, with little thinking. | Stream, trail, wall, fence, forest edge, ridge crest, power line, lake shore |
| **Collecting feature** | Something you expect to pass on the way — you “tick it off” to confirm progress. | A stream you cross, a saddle, a path junction, a building |
| **Catching feature** (backstop) | A linear feature *beyond* your target that tells you you have gone too far. | A road, a river, a steep valley side, the edge of a forest |
| **Attack point** | An obvious, easy-to-find feature close to a small target, from which you make a short, precise leg. | A stream junction, a hut, a bend in a trail, a summit cairn |`,
    },
    { type: 'diagram', id: 'handrails', caption: 'Follow the stream (handrail) to the junction (attack point); a short compass leg reaches the target; the road beyond is the catching feature.' },
    {
      type: 'md',
      md: `### Traffic-light navigation

Not every part of a route needs the same care:

- **Green (rough navigation):** following a strong handrail. Move fast; glance at the map, tick off collecting features.
- **Amber:** approaching a decision — a junction, the end of the handrail. Slow down, check the map, prepare the next bearing.
- **Red (precise navigation):** the last few hundred metres from the attack point to a small target, or any leg without handrails. Compass bearing, pace count, eyes up.

### Aiming off

Suppose you must reach a bridge on a river, walking on a bearing across a forest. Your bearing error means you will hit the river somewhere *near* the bridge — but you won’t know whether to turn left or right. **Aiming off** removes that doubt: deliberately aim a few degrees to **one side** (say, left). When you hit the river, you *know* the bridge is to your right.`,
    },
    { type: 'diagram', id: 'aiming-off', caption: 'Direct aim: you reach the stream unsure which way to turn. Aiming off: you know the junction lies to your right.' },
    {
      type: 'md',
      md: `### Contouring

To cross a hillside to a point at the same height, **contour** — walk around the slope holding your altitude rather than dropping and re-climbing. Watch the slope angle under your feet and glance at an altimeter if you have one. Most people drift **downhill** while contouring, so correct slightly upward.

### Simplify

Before each leg, say it in one sentence: “Follow the wall uphill to the saddle; if I reach the forest edge I’ve gone too far.” If you can’t, the leg is too complicated — break it up.`,
    },
    { type: 'sim', id: 'nav-map', caption: 'Plan a route to the hut using the river as a handrail and the trail as a catching feature. Try aiming off to hit the stream junction.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Handrails that are not safe routes',
      md: 'A stream is an excellent handrail on a map but may be a gorge, waterfall or dense thicket on the ground. Walk *beside* a handrail at a safe distance, never in a streambed that could flood, and never along a cliff edge.',
    },
  ],
  whyItMatters: 'Terrain association is faster, less tiring and more forgiving than pure compass work: a missed count or a small bearing error doesn’t matter when a river tells you exactly where you are. Catching features limit how far a mistake can carry you — which keeps a navigation error from turning into a search.',
  science: [
    {
      type: 'md',
      md: `### How much to aim off

From lesson 4, the **1-in-60 rule**: an angle of 1° produces a sideways offset of about 1/60 of the distance travelled. In words: offset = distance × angle ÷ 60.

$$
x \\approx \\frac{d\\,\\theta}{60}
$$

with $x$ and $d$ in the same unit and $\\theta$ in degrees (good to within a few percent up to about 20°).

**Worked example.** Aiming off **10°** over **600 m**: $x = 600 \\times 10 / 60 = 100$ m. You will meet the stream about 100 m to the aimed side of the target, then walk 100 m along it.

**How big must the offset be?** It must exceed your likely error. If your compass work is good to about ±3°, the error at 600 m is $600 \\times 3/60 = 30$ m — so aiming off 5–10° (50–100 m) comfortably clears it. In thick forest with ±5° or worse, aim off more. Too much aim-off only costs extra walking along the handrail, which is cheap.

### Why catching features cap your error

Without a catching feature, an overshoot error is unbounded — you can keep walking. With a road 300 m beyond the target, the *worst* overshoot is 300 m, and you know exactly where you are when you reach it. Good route choice converts open-ended uncertainty into a bounded one.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** An orienteer uses a forest edge as a handrail, ticks off a path crossing (collecting feature), then uses a boulder field as an attack point for a small pit 150 m away.

**Mountain.** In cloud, a hill walker follows a ridge crest (handrail) to a saddle, then contours at constant height to a col, knowing that the steep crags on the left are a *hazard*, not a catching feature.

**Desert.** A dry wash (wadi) is a natural handrail; a line of power pylons is a strong catching feature across the plain.

**Tropical rainforest.** Visibility may be only 10–20 m, so streams and ridges are almost the only handrails. Aiming off to hit a river upstream of a village means you know to follow it downstream.

**Coastal.** The shoreline is a powerful handrail and catching feature — but check tide times before relying on a beach route.

**Rural farmland.** Walls, hedges and fences make dense networks of handrails; count field boundaries as collecting features.

**Subarctic, winter.** Frozen lakes and treeline edges become handrails — but judge ice from local knowledge and safety guidance, never from the map.`,
    },
  ],
  mistakes: [
    '“Bending the map”: forcing what you see to fit where you want to be, e.g., taking any stream as “the” stream.',
    'Not checking the map at amber points and running past a junction on a fast handrail.',
    'Aiming directly at a point on a linear feature, then guessing which way to turn.',
    'Choosing a “catching feature” that is actually a hazard (cliff edge, fast river).',
    'Drifting downhill while contouring and arriving well below the target.',
    'Myth: “If you follow any stream downhill you will reach civilisation.” Streams may lead into gorges, waterfalls, swamps or roadless valleys; follow one only as a planned handrail on a map.',
  ],
  exercises: [
    {
      id: 's2-l6-e1',
      title: 'Permanent orienteering course',
      level: 2,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Permanent-course map (from a local orienteering club or park)', 'Baseplate compass', 'Watch'],
      steps: [
        'Find a permanent orienteering course through a national body (Orienteering USA, British Orienteering, or your country’s IOF member).',
        'Before each control, name the handrail, attack point and catching feature out loud.',
        'Orient and thumb the map the whole time; note where you slowed down (amber) and where you went precise (red).',
        'On at least two controls, deliberately aim off to a linear feature.',
      ],
      success: ['All controls found.', 'You can explain the plan you used for each leg.', 'No leg ended with “I didn’t know which way to turn”.'],
      skill: 'terrain-association',
      safetyNote: 'Go with a partner or tell someone your plan; carry water and a phone.',
    },
    {
      id: 's2-l6-e2',
      title: 'Map-only route plan',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['Any 1:25,000 or 1:50,000 topographic map (paper or online)'],
      steps: [
        'Pick a start and a small target 3–5 km apart.',
        'Draw a route in legs; label every handrail, collecting feature, attack point and catching feature.',
        'For one leg, calculate an aim-off offset with the 1-in-60 rule.',
        'Write each leg as a one-sentence instruction.',
      ],
      success: ['Every leg has a catching feature or a clear stop condition.', 'Aim-off offset calculated correctly.'],
      skill: 'map-compass',
    },
  ],
  simulations: ['nav-map'],
  quiz: [
    {
      id: 's2-l6-q1',
      kind: 'numeric',
      prompt: 'You aim off **6°** to the left of a footbridge on a river **1.5 km** away. Using the 1-in-60 rule, about how many **metres** left of the bridge do you expect to hit the river?',
      unit: 'm',
      answer: 150,
      tolerance: 10,
      concepts: ['aiming-off', 'angular-error'],
      explanation: '1,500 × 6 / 60 = **150 m**. On reaching the river, turn right and walk about 150 m.',
      diagram: 'aiming-off',
    },
    {
      id: 's2-l6-q2',
      kind: 'single',
      prompt: 'You aim off to the **right** of a stream junction and meet the stream. Which way do you turn?',
      choices: [
        { id: 'a', text: 'Right', why: 'You are already right of the target; turning right takes you further away.' },
        { id: 'b', text: 'Left', why: 'Correct — you deliberately placed the target to your left.' },
        { id: 'c', text: 'It depends on which way the stream flows', why: 'The flow direction doesn’t matter; your deliberate offset does.' },
        { id: 'd', text: 'Take a new bearing to decide', why: 'Unnecessary — the whole point of aiming off is that you already know.' },
      ],
      answer: 'b',
      concepts: ['aiming-off'],
      explanation: 'Aiming off trades a little extra walking for certainty about the direction to turn.',
    },
    {
      id: 's2-l6-q3',
      kind: 'multi',
      prompt: 'Which of these make good **catching features** for a hut 800 m ahead? (Choose all that apply.)',
      choices: [
        { id: 'a', text: 'A road crossing your line 300 m beyond the hut', why: 'Yes — linear, obvious, safe and close beyond the target.' },
        { id: 'b', text: 'A cliff edge 100 m beyond the hut', why: 'No — a hazard is not a backstop; you might meet it in fog.' },
        { id: 'c', text: 'A large lake shore 400 m beyond the hut', why: 'Yes — unmistakable and linear.' },
        { id: 'd', text: 'A single boulder 200 m beyond the hut', why: 'No — a point is easy to miss; catching features must be linear.' },
      ],
      answer: ['a', 'c'],
      concepts: ['handrails'],
      explanation: 'A catching feature must be linear, obvious, safe to reach and not too far beyond the target.',
      diagram: 'handrails',
    },
    {
      id: 's2-l6-q4',
      kind: 'order',
      prompt: 'Order a typical attack-point approach to a small target.',
      items: [
        { id: 'a', text: 'Follow a handrail quickly (rough navigation)' },
        { id: 'b', text: 'Tick off a collecting feature to confirm progress' },
        { id: 'c', text: 'Reach the attack point and confirm it on the map' },
        { id: 'd', text: 'Take a precise bearing and pace the short final leg' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['handrails', 'terrain-association'],
      explanation: 'Fast and rough where the terrain guides you; slow and precise only for the short final leg.',
    },
    {
      id: 's2-l6-q5',
      kind: 'truefalse',
      prompt: 'Following any stream downhill is a reliable way to reach people when lost.',
      answer: false,
      concepts: ['nav-myths', 'handrails'],
      explanation: 'Myth. Streams can lead into gorges, waterfalls, swamps or empty valleys. A stream is a handrail only when the map shows where it goes and that route is safe.',
    },
    {
      id: 's2-l6-q6',
      kind: 'single',
      prompt: 'In fog you reach “the stream” sooner than expected, and it flows the opposite way to the one on your map. What should you conclude?',
      choices: [
        { id: 'a', text: 'The map is probably wrong.', why: 'Topographic maps are rarely wrong about stream direction; you are more likely wrong about your position.' },
        { id: 'b', text: 'It is probably a different stream — you may not be where you think. Stop and relocate.', why: 'Correct — two mismatches (timing and flow) are strong evidence of a position error.' },
        { id: 'c', text: 'Streams can change direction; carry on.', why: 'That is “bending the map” to fit your hopes.' },
        { id: 'd', text: 'Follow it anyway — it’s a handrail.', why: 'A handrail you have misidentified leads you confidently in the wrong direction.' },
      ],
      answer: 'b',
      concepts: ['terrain-association', 'nav-myths', 'stop'],
      explanation: 'When the ground disagrees with the map, believe the ground and question your position. Lesson 7 covers relocation.',
    },
  ],
  scenario: {
    id: 's2-l6-sc',
    setup: 'You need to reach a mountain hut sitting beside a stream, 1.2 km away across a forested hillside. Visibility in the trees is 30 m. A forestry road runs along the valley floor 400 m beyond the hut. It is 15:30; sunset 17:00.',
    question: 'Which plan is best?',
    choices: [
      { id: 'a', text: 'Take a direct bearing to the hut and hope to see it.', why: 'With ±3–5° error in forest you could miss by 60–100 m and walk past a hut you can’t see.' },
      { id: 'b', text: 'Aim off about 10° upstream, hit the stream, follow it down to the hut; if you reach the road you’ve overshot.', why: 'Best — aiming off gives a certain turn direction, the stream is a handrail and the road is a catching feature.' },
      { id: 'c', text: 'Walk down to the road first, then look for a path up.', why: 'Workable but slower, loses height, and assumes a path exists.' },
      { id: 'd', text: 'Wait until morning.', why: 'Premature — 90 minutes of light and a robust plan are enough for 1.2 km.' },
    ],
    best: 'b',
    debrief: 'Aim-off (1,200 × 10 / 60 = 200 m upstream of the hut) makes the stream a guaranteed hit with a known turn. The road bounds any overshoot. With 1.2 km and 90 minutes of daylight, the plan fits the daylight budget with margin — the kind of cross-check Stage 1 taught.',
    concepts: ['aiming-off', 'handrails', 'daylight'],
  },
  summary: [
    'Orient and thumb the map so the ground and the map always match.',
    'Build routes from handrails, collecting features, attack points and catching features.',
    'Aim off to one side of a target on a linear feature; offset ≈ distance × angle ÷ 60.',
    'Go fast on handrails (green), precise near the target (red); contour to hold height and correct for downhill drift.',
    'Believe the ground over your hopes — never bend the map.',
  ],
  furtherReading: ['kjellstrom', 'british-orienteering', 'orienteering-usa'],
  references: ['kjellstrom', 'iof', 'british-orienteering', 'orienteering-usa', 'os-mapzone', 'langmuir-mountaincraft', 'mt-hml'],
}
