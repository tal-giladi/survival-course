import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's14-l4',
  stage: 14,
  order: 4,
  title: 'Stay or move',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s14-l3'],
  concepts: ['stay-or-move', 'rescue-timeline', 'leave-signs', 'responsive-subject', 'immediate-danger', 'daylight', 'trip-plan'],
  objectives: [
    'Apply a structured **stay-or-move** decision: immediate danger, whether anyone will look for you, and whether a known safe point is reachable within your budget.',
    'Explain with **search theory** why staying usually wins, and when it does not.',
    'Compare your **survival window** with the likely **time to rescue**, and set **re-evaluation triggers**.',
    'Make **short moves** to become findable without leaving the search area.',
    '**Leave signs** — notes, arrows, markers — that let rescuers follow you if you do move.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 introduced stay-or-move as a judgment; Stage 2 showed how lost people wander and why random walking covers little ground. With the search theory of Lesson 3 you can now see the decision the way a rescuer does.

### The default: stay

If someone knows your route and when to raise the alarm, or you have already sent an alert, **staying put is usually the best decision**:

- **Searchers start where you were.** Your LKP and route anchor every POA. A stationary subject stays inside the segments being searched; a moving one can walk into segments already searched, out of the area altogether (ROW), or away from the trail teams are walking.
- **The area grows with the square of distance.** If you could be anywhere within $r$ of the LKP, the area is $\\pi r^2$. Walking from 2 km to 5 km out makes the possible area more than six times bigger.
- **Stationary subjects are easier to detect.** You can set up large static signals, stay in the open, listen and answer. A moving person under canopy is a small, silent target.
- **Moving costs what you need to survive:** energy, water, body heat, daylight, and the risk of falls, cold-water crossings and cliffs — especially late in the day and when tired (Stage 8).

This is why SAR teams teach children to **“hug a tree”** — stay in one place, make noise, answer when called — and why the advice to stay with a broken-down vehicle, a floating capsized boat or a crashed aircraft is so consistent.`,
    },
    { type: 'diagram', id: 's14-stay-move', caption: 'A stay-or-move decision. Re-run it whenever conditions change.' },
    {
      type: 'md',
      md: `### When moving is right

1. **Immediate danger where you are.** Rising water, fire, rockfall or avalanche slopes, a tide coming in, a lightning-exposed ridge, cold with no shelter possible. Move the **shortest distance to safety**, then stay again.
2. **Nobody will look — soon enough.** No trip plan, no alert sent, no signal, nobody expecting you for days, and your water, warmth or food will not last that long.
3. **A known, certain route to safety within your budget.** Not “I think the road is that way” but: a trail you know, a handrail such as a river or track that leads to a road without hazards, with enough **daylight**, water and energy to reach it (Stage 2 daylight budget). Set a **turn-back time**.
4. **Medical need** where waiting makes things clearly worse and moving is possible — usually by getting a message out, not by carrying someone. A group with a casualty normally **stays together** and alerts; if someone must go for help, send **two** with a written note of the casualty’s location, condition and needs.

**Short moves are different.** Moving 100–300 m to a clearing, a river bank, a ridge top or out of a hazard — to become findable, to reach water or shelter — keeps you in the same search segment. Mark it: leave an arrow at the old spot and move in one straight line.`,
    },
    { type: 'sim', id: 'search-sim', caption: 'Tick “the subject keeps moving” and compare the cumulative probability of success with a subject who stays.' },
    {
      type: 'md',
      md: `### Survival window versus time to rescue

A practical way to decide is to compare two times:

- **Time to rescue** ≈ time until someone raises the alarm (your overdue time on the trip plan, or now if you have alerted) + time for rescuers to respond + time to find you.
- **Survival window** ≈ how long you can stay safe where you are: water (Stage 4), warmth and shelter (Stages 5 and 8), food matters far less, injuries, medicines, and weather coming.

If your survival window comfortably exceeds the time to rescue, **stay and improve both**: signals shorten the time to be found; shelter and water extend the window. If the window is shorter — and moving would genuinely lengthen it or bring rescue sooner — moving deserves serious thought.

### Set triggers in advance

Decide *before* you need to what would change your mind, and write it down: “If no sign of a search by noon on day 3 **and** water is below 1 L, we walk the stream down to the track at first light.” Triggers protect you from two opposite errors: **panic** (moving too early) and **plan continuation** (staying too long when the situation has clearly changed).`,
    },
    {
      type: 'md',
      md: `### Leaving signs for rescuers

Whether you stay or move, help searchers read your story.

- **A note at the vehicle, hut, shelter or LKP**: date and time, names, how many, condition and injuries, which direction you went and why, where you plan to be and **when you will come back** if the route fails, what supplies you have. Protect it from rain (a plastic bag) and put it where it will be seen — on a windscreen, a door, the trail register.
- **Arrows at every junction or change of direction**: sticks, stones, a scratched line in sand or snow, trail tape. A large arrow in the open means “proceeding in this direction” to aircraft.
- **Drop a bright item** where you leave a trail, and at turns.
- **Update** the signs if you return or change plan — an old arrow pointing the wrong way costs searchers hours.
- **When you stay**, put your static signals where the route or nearest trail is, with an arrow pointing to your camp if it is out of sight.`,
    },
    { type: 'diagram', id: 's14-leave-signs', caption: 'A note at the LKP, arrows at junctions, markers at turns and a big arrow in the open.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Marking responsibly',
      md: 'In an emergency, markers that help rescuers are justified. Prefer **loose sticks, stones and removable tape** over cutting blazes into trees or painting rocks, which may be illegal in protected areas and permanent. After the emergency, remove or report any markers you left (Leave No Trace). Never move or remove official trail markers or other people’s emergency signs.',
    },
  ],
  whyItMatters: 'Stay-or-move is the decision that most often turns an inconvenient night out into a fatal one. People who walk on after becoming lost frequently end up further from help, exhausted, in worse terrain and outside the area being searched. People who stay in a findable spot, keep warm and signal usually make the search short. Knowing the exceptions — and leaving signs when you do move — keeps rescuers’ probability map close to the truth.',
  science: [
    {
      type: 'md',
      md: `### What a moving subject does to the search

In Lesson 3, an unsuccessful search lowers a segment’s POA. That only works if the subject **stays** where the probability was. Suppose a fraction $m$ of the probability in each segment leaves it between periods (the subject walks on) and spreads over other segments and the rest of the world. Then

$$
\\text{POA}_i^{\\text{next}} = (1 - m)\\,\\text{POA}_i' + m \\times (\\text{share of the moving probability landing in } i)
$$

Searched segments **refill**, and ROW grows. The planners’ effort is diluted, and cumulative POS falls.

**Worked example.** A search achieves POS = 30 % per period on a subject who stays. After three periods the probability of having found them is $1 - 0.7^3 \\approx 66\\%$. If walking on lowers the effective POS to 20 % per period, the three-period figure drops to $1 - 0.8^3 \\approx 49\\%$ — and the subject has also spent energy, water and daylight. The Search Planner simulation shows the same effect with a moving subject.

### Random walking and area

From Stage 2, a lost person walking $n$ legs of length $L$ in random directions ends up only about $L\\sqrt{n}$ from the start — lots of effort, little progress — yet the **possible** area is set by how far they *could* have gone, $\\pi r^2$. Going from $r = 2$ km to $r = 5$ km multiplies the area by $(5/2)^2 = 6.25$.

### Comparing times

If the time to rescue $T_r$ is uncertain, think in ranges. Example: trip plan says “raise the alarm at 20:00”; teams need about 3 h to mobilise and reach the trailhead; a hasty search of the route takes 3–6 h. So the earliest likely contact is around 02:00–05:00 the next morning — plan to spend **one night** out, then decide on day 2 with triggers. If your survival window with shelter and water is several days, staying is clearly right.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest:** lost in the afternoon with a trip plan filed: stay, move 150 m to the nearest clearing, build insulation and shelter before dark, lay out bright gear, whistle in threes on a schedule (see Capstone 1).

**Desert:** a stranded vehicle is the biggest, shadiest, most visible object for kilometres; stay with it and use it as a signal (Stage 17). Walking in heat burns water far faster than resting in shade.

**Mountain:** if a storm is coming onto an exposed ridge, a short, careful descent to shelter is an immediate-danger move — then stay and signal. Never descend unknown steep ground in poor visibility to “find a way down”.

**Arctic and subarctic:** travel in cold and wind is exhausting and risks sweating then chilling; staying in a snow shelter with signals outside is usually safer (Stage 5).

**Coastal:** a tide coming in below cliffs is a reason to move — to the highest safe ground — early. At sea, staying with a capsized boat that floats keeps you with a bigger target.

**Tropical:** following a river downstream is often suggested, but rivers bring waterfalls, gorges, flash floods and crossings (Stage 12). If people know where you are, stay by the river bank where you can be seen.

**Rural:** on farmland, fences, tracks and roads are long catching features; a short, certain walk to a road in daylight can be a sound move — leave a note and arrows.

**Urban disaster:** stay-or-move also applies to sheltering in place versus evacuating (Stage 16): move away from an immediate hazard, not into a long night journey.`,
    },
  ],
  mistakes: [
    'Walking on “to find the way” with no known route, especially late in the day.',
    'Myth: following any stream downhill always leads to people. It can lead into gorges, waterfalls and flooding creeks.',
    'Staying in a place with an obvious immediate hazard (a flood channel, avalanche path, below loose rock) because “the rule is to stay”.',
    'Leaving the vehicle, boat or aircraft wreck — a large, visible target — to walk for help.',
    'Moving without leaving a note or arrows, so the LKP points searchers the wrong way.',
    'Splitting a group so that someone ends up alone and unaccounted for.',
    'Having no pre-set triggers, then either panicking early or staying far too long after the situation has changed.',
  ],
  exercises: [
    {
      id: 's14-l4-e1',
      title: 'Write your stay-or-move triggers',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['Your next trip plan', 'Map of the area'],
      steps: [
        'For your next trip, write the overdue time and what your contact should do then.',
        'Estimate a rough time to rescue if you went missing at the furthest point (alarm time + response + search).',
        'List the immediate hazards on the route that would force a move (water, cliffs, weather exposure).',
        'Write two or three explicit triggers for moving (time, water level, weather, injury) and the planned move (e.g., “downstream path to the forest road, first light only”).',
        'Give a copy to your trip contact.',
      ],
      success: ['Your contact can say, from your plan, when to raise the alarm and what you are likely to do if lost.'],
      skill: 'trip-plan',
    },
    {
      id: 's14-l4-e2',
      title: 'Follow-my-signs walk',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A partner', 'Paper, pencil and a plastic bag', 'Removable trail tape (optional)'],
      safetyNote: 'On paths in a familiar park or wood only, in daylight, both with phones. Use loose sticks, stones or removable tape and remove every marker afterwards; do not cut or paint trees.',
      steps: [
        'Leave a note at the start (as in the lesson) and walk a route of about 1 km with 4–5 junctions, marking each with an arrow of sticks or stones.',
        'Your partner waits 20 minutes, then follows using only your signs.',
        'Together, walk back and collect every marker. Discuss which signs were missed and why.',
      ],
      success: ['Your partner followed the route without guessing.', 'All markers removed.'],
      skill: 'search-support',
    },
  ],
  simulations: ['search-sim'],
  quiz: [
    {
      id: 's14-l4-q1',
      kind: 'single',
      prompt: 'You are lost but uninjured in a forest at 16:00. A friend has your trip plan with an overdue time of 19:00. It will be dark at 18:30. What is the best choice?',
      choices: [
        { id: 'a', text: 'Walk in the direction you think the car is until dark', why: 'Uncertain direction and failing light: you may leave the search area and be caught out in the dark without a shelter.' },
        { id: 'b', text: 'Stay: move to the nearest open spot, build shelter and insulation before dark, set out signals and a whistle schedule', why: 'Correct — someone will raise the alarm soon; staying keeps you inside the search area and uses daylight for shelter.' },
        { id: 'c', text: 'Follow the nearest stream downhill quickly', why: 'Drainages lead into gorges and crossings, especially risky in the dark.' },
        { id: 'd', text: 'Keep moving all night to stay warm', why: 'Exhaustion, sweating and falls; and a moving subject is harder to find.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'daylight', 'trip-plan'],
      explanation: 'The trip plan means a search will start this evening. Use the remaining daylight for shelter and signals (Stages 1 and 5).',
    },
    {
      id: 's14-l4-q2',
      kind: 'multi',
      prompt: 'Which are good reasons to move from where you are?',
      choices: [
        { id: 'a', text: 'Water in the stream bed you are camped in is rising after rain upstream', why: 'Yes — immediate danger; move the shortest distance to safe ground.' },
        { id: 'b', text: 'You feel bored and it has been 3 hours', why: 'No — boredom and impatience are exactly what triggers help you resist.' },
        { id: 'c', text: 'You are under dense canopy; a clearing is 150 m away on the same slope', why: 'Yes — a short move to become findable; mark it.' },
        { id: 'd', text: 'Nobody knows you are here, no alert is possible, and a known trail to a road is 3 km away with 5 hours of daylight', why: 'Yes — no one will look soon, and a certain route to safety is within budget. Leave a note and arrows.' },
        { id: 'e', text: 'You heard a helicopter far away and want to get closer to it', why: 'No — you cannot catch an aircraft; signal from open ground near where you are.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['stay-or-move', 'immediate-danger', 'flash-flood'],
      explanation: 'Move for immediate danger, to become findable nearby, or when no one will look and a certain route exists — not from impatience.',
    },
    {
      id: 's14-l4-q3',
      kind: 'numeric',
      prompt: 'A lost walker could be anywhere within 2 km of the LKP. If they keep walking and could now be anywhere within 5 km, by what factor has the possible search area grown?',
      unit: '×',
      answer: 6.25,
      tolerance: 0.1,
      concepts: ['stay-or-move', 'poa-pod'],
      explanation: 'Area ∝ r²: $(5/2)^2 = 6.25$.',
    },
    {
      id: 's14-l4-q4',
      kind: 'order',
      prompt: 'You must leave your broken-down vehicle because a known farm is 4 km away along the track and nobody expects you for days. Order what you do.',
      items: [
        { id: 'note', text: 'Leave a dated note on the windscreen: names, condition, direction, plan, time to return if blocked' },
        { id: 'signal', text: 'Leave a large ground signal/arrow by the vehicle pointing along the track' },
        { id: 'kit', text: 'Take water, warm layers, light, whistle and phone' },
        { id: 'walk', text: 'Walk along the track in daylight, arrows at any junction, with a turn-back time' },
      ],
      answer: ['note', 'signal', 'kit', 'walk'],
      concepts: ['leave-signs', 'stay-or-move'],
      explanation: 'Signs first, so that anyone who finds the vehicle knows your story; then go deliberately with a turn-back time. (In heat, travel in the cool of morning or evening — Stage 8.)',
    },
    {
      id: 's14-l4-q5',
      kind: 'truefalse',
      prompt: 'Once you have decided to stay, you should never re-evaluate that decision.',
      answer: false,
      concepts: ['stay-or-move', 'rescue-timeline'],
      explanation: 'Set triggers (time, water, weather, injury) and re-run the decision when they are met. Staying is a default, not a vow.',
    },
    {
      id: 's14-l4-q6',
      kind: 'single',
      prompt: 'A child who is lost in the woods hears adults calling her name. What do “hug a tree” programmes teach her to do?',
      choices: [
        { id: 'a', text: 'Hide, because strangers are calling', why: 'Children sometimes do this — which is why the programmes teach the opposite.' },
        { id: 'b', text: 'Stay by one tree, and answer or blow a whistle when she hears her name', why: 'Correct — stay in one place and respond.' },
        { id: 'c', text: 'Run toward the voices as fast as she can', why: 'Running risks falls and moving away from searchers’ paths.' },
        { id: 'd', text: 'Keep walking to find the way home', why: 'Moving makes her harder to find.' },
      ],
      answer: 'b',
      concepts: ['responsive-subject', 'stay-or-move'],
      explanation: 'Stay put and respond: the two things that most increase a child’s probability of detection. Practise it with children before trips.',
    },
  ],
  scenario: {
    id: 's14-l4-sc',
    setup: 'Late September in hilly northern forest. You and a friend left the trail to photograph a waterfall and cannot find it again. It is 15:30; sunset is at 18:45. It is 9 °C and drizzling. You left a trip plan with a neighbour (overdue time 20:00). You have 1 L of water between you, rain jackets, a lighter, a whistle, a headlamp and a phone with 15 % battery and no signal. The stream below the waterfall flows north; you believe the road is somewhere north, perhaps 5–6 km away, through unknown terrain.',
    question: 'What is your plan?',
    choices: [
      { id: 'a', text: 'Follow the stream north as fast as possible to reach the road before dark.', why: 'Unknown terrain, 3 hours of light, drizzle and a stream that may enter a gorge: high risk of a fall or a night caught out wet, and you leave the area near your route.' },
      { id: 'b', text: 'Split up: one goes north for help, the other waits.', why: 'Two lost people instead of one, each alone in the dark and the wet.' },
      { id: 'c', text: 'Stay near the waterfall, which is close to your planned route: move to the nearest open spot above the stream, build a rain-proof shelter with insulation from the ground while it is light, prepare a fire if legal and safe, set out bright gear and a note/arrow on the nearest path, phone off except for a check from the highest nearby point, whistle in threes on a schedule; decide on day 2 with triggers.', why: 'Best: the alarm will be raised at 20:00 and the search will start from your route; you use daylight for shelter against wet and cold, stay findable and keep the phone for later.' },
      { id: 'd', text: 'Keep searching for the trail in widening circles until dark.', why: 'A few short, marked searches can help early, but circling until dark burns energy and daylight and ends with no shelter.' },
    ],
    best: 'c',
    debrief: 'Every stage feeds this decision: STOP (Stage 1), the daylight budget and lost-person behaviour (Stage 2), wet-and-wind heat loss (Stage 8), shelter and insulation (Stage 5), fire only where legal (Stage 3), and search theory (this stage). With a trip plan filed and an alarm due in four hours, staying in a findable spot near the route is the high-probability, low-regret choice.',
    concepts: ['stay-or-move', 'daylight', 'wet-wind', 'leave-signs', 'trip-plan'],
  },
  summary: [
    'Default: **stay** when someone will look (trip plan or alert sent).',
    'Staying keeps POA valid, keeps the area small ($\\pi r^2$) and makes you easier to detect.',
    'Move for **immediate danger**, when **nobody will look** in time, or along a **known, certain route** within your daylight and energy budget.',
    'Short moves to become findable are fine — mark them.',
    'Compare survival window with time to rescue; set written triggers and re-evaluate.',
    'Leave a note at the LKP and arrows at every junction; update or remove them later.',
  ],
  furtherReading: ['koester-lpb', 'adventuresmart'],
  references: ['koester-lpb', 'adventuresmart', 's14-cooper-frost-robe', 'army-atp-3-50-21', 'lnt-principles', 'nasar'],
}
