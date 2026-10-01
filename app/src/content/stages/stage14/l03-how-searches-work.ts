import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's14-l3',
  stage: 14,
  order: 3,
  title: 'How searches work',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s14-l2', 's2-l12'],
  concepts: ['sar-system', 'poa-pod', 'bayesian-search', 'sweep-width', 'search-tactics', 'clue-awareness', 'responsive-subject', 'lost-person-behavior'],
  objectives: [
    'Describe **who runs a search** and how it unfolds: urgency, initial response, planning, operational periods.',
    'Explain how planners use the **last known point**, **lost-person behaviour** statistics and expert consensus to assign a **probability of area (POA)** to each segment.',
    'Calculate **coverage, probability of detection (POD)** and **probability of success (POS)**, and update POAs with **Bayes’ rule** after an unsuccessful search.',
    'Distinguish **hasty, efficient and thorough** tactics, **confinement**, **attraction** and **clue** searching.',
    'Explain what the **missing person** can do to raise their own probability of being detected.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Knowing how searchers think changes what you do when you are the one who is missing. A search is not a crowd wandering the woods; it is a planned allocation of scarce people, hours and aircraft to the places where the subject most probably is **and** can most probably be seen.

### Who searches

Responsibility differs by country and setting: police, a sheriff, a park service or a national rescue coordination centre (for aircraft and ships) usually **owns** the incident; volunteer mountain, cave, cave-diving and lowland search teams, coast guards, air ambulances and military aircraft do much of the searching. Teams use an incident command structure so that dozens of groups can work to one plan.

### The first hours

1. **Urgency.** Age, medical needs, weather, terrain hazards, experience and equipment decide how fast and how big the response is. A lightly dressed child in falling temperatures is a top-urgency search; a well-equipped adult overdue on a calm summer evening may start with phone calls.
2. **Where to start.** The **point last seen (PLS)** or **last known point (LKP)** — a car at a trailhead, a phone location, a photo, a register entry — anchors the search.
3. **Reflex tasks.** Fast **hasty teams** check the route, trails, known hazards (cliffs, water) and attractions (viewpoints, huts); **confinement** puts people at trailheads, road crossings and bridges so the subject cannot pass unseen; **investigation** gathers clothing colours, footwear tread, plans, phone data and habits.
4. **Lost-person behaviour.** Planners look up statistics from thousands of past incidents (Koester’s *Lost Person Behavior*) for someone like the subject — hiker, child, person with dementia, hunter, climber — including **distance rings** within which a given share of similar subjects were found, and typical behaviours (following trails or drainages, heading for high ground, hiding, sheltering).`,
    },
    {
      type: 'md',
      md: `### Probability of area, detection and success

The planner divides the area into **segments** with clear boundaries (paths, streams, ridges) sized for a team to search in a few hours. Then:

- **POA** (probability of area): how likely the subject is in each segment. Several experienced people estimate it independently and combine their estimates (a **consensus**), guided by the LKP, lost-person statistics, terrain and clues. The probability that the subject is outside every segment is called **rest of world (ROW)**.
- **POD** (probability of detection): how likely a given search of a segment would find the subject **if they are there**. It depends on how much ground the searchers effectively “sweep” relative to the segment’s size.
- **POS** (probability of success) = POA × POD. This is what the plan tries to maximise.

After a segment is searched **without** finding the subject, it becomes **less** likely they are there, and every other segment — including ROW — becomes **more** likely. This is **Bayes’ rule**, and it is how modern search planning shifts effort from period to period.`,
    },
    { type: 'diagram', id: 's14-poa-segments', caption: 'Segment A is searched with POD 80 % and nothing is found: A’s probability drops, all others rise.' },
    {
      type: 'md',
      md: `### Sweep width and coverage

**Sweep width** $W$ is a searcher’s effective detection “width”: the number of metres of ground a single pass truly covers for **this** kind of object, in **this** terrain and light. It is measured in detection experiments, not guessed. It is wide for a large, bright, moving, responsive subject on open ground; narrow for a small, dark, silent one in thick brush.

**Coverage** is how many times, on average, the segment has been effectively swept:

$$
C = \\frac{W \\times L}{A}
$$

where $L$ is the total track length walked (or flown) and $A$ the area. POD grows with coverage — but with **diminishing returns** (see the science section).`,
    },
    { type: 'diagram', id: 's14-pod-curve', caption: 'POD rises quickly at first and then flattens: the second pass finds less than the first.' },
    { type: 'sim', id: 'search-sim', caption: 'Plan three operational periods. Put effort where POA × marginal POD is highest, then watch the Bayesian update move it.' },
    {
      type: 'md',
      md: `### Search tactics

- **Hasty (Type I):** small, fast, experienced teams check the highest-probability places and hazards first — trails, the LKP, drainages, viewpoints, huts — calling and listening. High POS per hour at the start.
- **Efficient (Type II):** searchers spaced widely sweep a segment. The best POD per searcher-hour for responsive subjects and larger clues.
- **Thorough (Type III):** searchers close together in a line. High POD, but slow, tiring and it tramples clues — used later, for small segments, or for evidence or unresponsive subjects.
- **Confinement:** trail blocks, road patrols, **track traps** (smoothed sand or snow across a path that record whoever passes).
- **Attraction:** sirens, whistles, lights, calling the name — then **silence to listen**.
- **Other resources:** air-scent and trailing dogs, helicopters and aircraft flying set patterns, drones with cameras or thermal imaging, and phone data.

**Clues** vastly outnumber subjects — footprints, a dropped wrapper, a broken branch, a witness. Teams are trained in **clue awareness**, because each clue can reshape POAs dramatically.`,
    },
    { type: 'diagram', id: 's14-search-tactics', caption: 'Hasty, efficient and thorough tactics trade speed against detection per pass.' },
    {
      type: 'callout',
      tone: 'tip',
      title: 'What the missing person controls',
      md: 'Your behaviour sets both POA and POD.\n\n- **Stay put** once you are lost (Lesson 4): a moving subject makes searched segments “refill” and spreads probability into ROW.\n- **Be big and bright** in the open: it widens the sweep width of every searcher and aircraft.\n- **Respond:** answer calls, whistle back, flash a light. Unresponsive subjects need thorough, slow tactics.\n- **Leave clues:** a note at the car, arrows at junctions, a bright item where you left the trail.\n- **Tell someone your plan before you go** (Stage 1): it gives planners a route, an LKP and a start time.',
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Want to help? Train with a team',
      md: 'Search and rescue relies heavily on trained volunteers. Spontaneous helpers without training can obliterate tracks and clues and become casualties themselves. If this lesson interests you, contact a local search and rescue team or a national body (e.g., NASAR’s SARTECH training in the US, Mountain Rescue in the UK, national members of ICAR in the Alps) and train properly.',
    },
  ],
  whyItMatters: 'Understanding POA, POD and sweep width explains the advice you have heard all course: stay put, get into the open, be bright, answer, leave a trip plan. Each of those moves a number that searchers use to decide where to go next. For planners and volunteers, the same arithmetic turns a limited number of searcher-hours into the highest chance of finding someone alive.',
  science: [
    {
      type: 'md',
      md: `### POD from coverage

Search theory (Koopman, developed for naval search and adopted by maritime and land SAR) models detection as many small, independent chances along the searchers’ tracks. That gives the **exponential detection function**:

$$
\\text{POD} = 1 - e^{-C}
$$

In words: each extra unit of coverage finds a fixed **fraction** of what is still unfound. $C = 0.5$ gives 39 %, $C = 1$ gives 63 %, $C = 2$ gives 86 %, $C = 3$ gives 95 %.

**Worked example.** Segment area $A = 2$ km², sweep width $W = 40$ m $= 0.04$ km, one team walks $L = 10$ km: $C = 0.04 \\times 10 / 2 = 0.2$, so POD $= 1 - e^{-0.2} \\approx 18\\%$. Five teams ($L = 50$ km): $C = 1$, POD ≈ 63 %.

**Repeated searches.** Two searches with POD 50 % each do **not** make 100 %: the cumulative POD is $1 - (1-0.5)(1-0.5) = 75\\%$. (Equivalently, coverages add: $1 - e^{-(C_1 + C_2)}$.)

### Bayes’ rule after an unsuccessful search

If segment $i$ had probability $\\text{POA}_i$ and was searched with $\\text{POD}_i$ without success, then

$$
\\text{POA}_i' = \\frac{\\text{POA}_i (1 - \\text{POD}_i)}{1 - \\sum_j \\text{POA}_j\\,\\text{POD}_j}
$$

The numerator is the chance the subject is in $i$ **and** was missed; the denominator is the total chance that the search failed. Unsearched segments (and ROW) have $\\text{POD} = 0$, so their POA rises by the same factor.

**Worked example.** A 40 %, B 30 %, C 20 %, ROW 10 %. A is searched with POD 80 % (POS = 32 %). Failure probability = 0.68. New values: A $= 0.4 \\times 0.2 / 0.68 \\approx 12\\%$, B $= 0.3/0.68 \\approx 44\\%$, C $\\approx 29\\%$, ROW $\\approx 15\\%$.

### Where to put the next team

Because POD flattens, the **marginal** gain of one more searcher-hour in segment $i$ is proportional to $\\text{POA}_i \\times (W_i v_i / A_i) \\times e^{-C_i}$ (speed $v_i$). Good plans give each additional hour to the segment with the highest marginal gain. That is why effort goes first to **small, high-probability segments where searchers see well**, and why a dense, low-probability forest may get little effort until other segments have been searched down.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest (temperate):** a hiker’s car at a trailhead. Hasty teams walk the loop and side trails; confinement at road crossings; dogs from the car; later, efficient sweeps of the drainages that lost-person data suggest.

**Mountain:** helicopters search open slopes and ridges quickly where weather allows; ground teams handle gullies and forest. Avalanche debris is a special case with its own methods (transceivers, probes, dogs) taught on avalanche courses.

**Desert:** tracks last in sand and on crusted soil; trackers and track traps are powerful. Aircraft see far, but heat makes time critical — urgency is high.

**Arctic and subarctic:** snow records tracks until wind or new snow erases them; searchers and aircraft face short days and cold. Beacons and messengers dominate modern responses.

**Tropical forest:** visibility of a few metres means narrow sweep widths; searches follow rivers and trails, and rely on sound and on subjects moving to river banks or clearings.

**Coastal and marine:** maritime search patterns (expanding square, parallel track) with drift calculations for currents and wind; an EPIRB or PLB changes everything.

**Rural and urban:** people with dementia and young children are the most common urban-fringe searches; they may hide, shelter in outbuildings or dense cover, and not respond to their name, so thorough tactics near the LKP matter.`,
    },
  ],
  mistakes: [
    'Myth: searchers comb every square metre evenly. Effort goes where POA × POD per hour is highest; that changes as segments are searched.',
    'Myth: two searches at 50 % POD make 100 %. They make 75 %.',
    'Myth: an unsuccessful search of a segment proves the person is not there. It lowers the probability; it does not make it zero.',
    'Hiding from or not answering searchers (common in children and in embarrassed adults), which forces slow, thorough tactics.',
    'Walking on after hearing a helicopter, leaving the searched area and spreading probability into ROW.',
    'Well-meaning untrained volunteers trampling tracks and clues around the LKP.',
    'Leaving no trip plan, so there is no route, LKP or start time for planners to work from.',
  ],
  exercises: [
    {
      id: 's14-l3-e1',
      title: 'Tabletop search plan',
      level: 2,
      safety: 'home',
      minutes: 60,
      materials: ['A topographic map (paper or online) of an area you know', 'Calculator', 'Optional: a friend to act as a second “consensus” planner'],
      steps: [
        'Choose an LKP (e.g., a car at a trailhead) and a subject (e.g., a day hiker, overdue 4 h).',
        'Divide the area into 5–6 segments with natural boundaries. Estimate the area of each.',
        'Each planner assigns POAs independently (including ROW); average them.',
        'Assign a sweep width to each segment by terrain (e.g., 60 m open, 30 m mixed, 15 m dense) and give yourself 24 searcher-hours at 2 km/h. Compute C and POD for your allocation, and total POS.',
        'Assume nothing is found; update the POAs with Bayes’ rule and plan the second period.',
      ],
      success: ['Your POAs sum to 100 %.', 'Your second-period plan moves effort in the direction the Bayesian update suggests, and you can say why.'],
      skill: 'search-support',
    },
    {
      id: 's14-l3-e2',
      title: 'Sweep-width detection experiment',
      level: 2,
      safety: 'outdoor',
      minutes: 90,
      materials: ['10 objects: 5 bright (orange/red cloth), 5 dull (brown/green cloth), each about the size of a folded jacket', 'Measuring tape or pacing', 'A partner', 'A small wood or park with permission'],
      safetyNote: 'Stay on easy ground with permission; do not leave any object behind. Wear bright clothing yourself.',
      steps: [
        'Your partner hides the objects at measured distances from a straight path (5, 10, 15, 20, 30 m) on both sides, without you watching.',
        'Walk the path once at normal search pace, looking both sides; note each object you see and don’t leave the path.',
        'Record which objects at which distances you detected. Repeat with roles swapped.',
        'Estimate an effective sweep width for bright and for dull objects: roughly, the width of a strip in which you would have found as many as you actually found.',
      ],
      success: ['You have measured, not guessed, that bright objects have a far wider sweep width than dull ones in this vegetation.'],
      skill: 'search-support',
    },
  ],
  simulations: ['search-sim'],
  quiz: [
    {
      id: 's14-l3-q5',
      kind: 'single',
      prompt: 'After two unsuccessful periods concentrated on the trail corridor, what happens to the POA of the trail corridor and of the rest of world (ROW)?',
      choices: [
        { id: 'a', text: 'Both stay the same — probabilities are fixed at the start', why: 'They are updated after every period.' },
        { id: 'b', text: 'The trail corridor falls; ROW rises', why: 'Correct — Bayes’ rule moves probability away from searched segments into unsearched ones, including ROW.' },
        { id: 'c', text: 'The trail corridor rises because searchers are there', why: 'Search effort doesn’t attract the subject; failure lowers POA.' },
        { id: 'd', text: 'ROW falls because more has been searched', why: 'The opposite — ROW is never searched, so it rises. A rising ROW is a signal to reconsider the search area.' },
      ],
      answer: 'b',
      concepts: ['bayesian-search'],
      explanation: 'A growing ROW tells planners their segments may not contain the subject — time to re-examine clues, the LKP and the lost-person profile.',
    },
    {
      id: 's14-l3-q2',
      kind: 'single',
      prompt: 'Before a search: segment A has POA 50 %, B 30 %, C 10 %, ROW 10 %. A is searched with POD 60 % and nothing is found. What is B’s new POA?',
      choices: [
        { id: 'a', text: 'About 30 %', why: 'B was not searched, but a failed search in A still shifts probability to B: the values must be renormalised.' },
        { id: 'b', text: 'About 43 %', why: 'Correct — 0.30 / (1 − 0.5 × 0.6) = 0.30 / 0.70 ≈ 43 %.' },
        { id: 'c', text: 'About 60 %', why: 'This divides by 1 − POA of A (0.5) instead of 1 − POS (0.7).' },
        { id: 'd', text: 'About 75 %', why: 'This divides by 1 − POD (0.4) instead of 1 − POS (0.7).' },
      ],
      answer: 'b',
      concepts: ['bayesian-search', 'poa-pod'],
      explanation: 'POS = 0.5 × 0.6 = 0.30; failure probability 0.70. B′ = 0.30 / 0.70 ≈ **43 %**. (A′ = 0.5 × 0.4 / 0.7 ≈ 29 %, C′ ≈ 14 %, ROW′ ≈ 14 %.)',
    },
    {
      id: 's14-l3-q4',
      kind: 'single',
      prompt: 'You are lost and want searchers to detect you from further away. Which action does NOT increase the effective sweep width they have for **you**?',
      choices: [
        { id: 'a', text: 'Moving from dense brush to an open clearing nearby', why: 'This helps — you can be seen from further away.' },
        { id: 'b', text: 'Laying out a bright tarp and wearing a bright jacket', why: 'This helps — contrast widens the sweep width.' },
        { id: 'c', text: 'Answering calls and whistling back to searchers', why: 'This helps — a responsive subject can be detected at much greater distance.' },
        { id: 'd', text: 'Walking toward where you think the road is', why: 'Correct — it does not widen sweep width, and it moves you out of searched segments.' },
      ],
      answer: 'd',
      concepts: ['sweep-width', 'responsive-subject', 'visibility'],
      explanation: 'Sweep width depends on size, contrast, responsiveness and terrain around the subject — all things you can change without walking away.',
    },
    {
      id: 's14-l3-q3',
      kind: 'single',
      prompt: 'The same segment is searched twice, each time with a POD of 50 %. What is the cumulative POD?',
      choices: [
        { id: 'a', text: '100 %', why: 'PODs do not add: the second pass only finds a fraction of what is still unfound.' },
        { id: 'b', text: '75 %', why: 'Correct — 1 − (1 − 0.5)(1 − 0.5) = 75 %.' },
        { id: 'c', text: '50 %', why: 'The second pass does add detection — it searches the half that was missed.' },
        { id: 'd', text: '25 %', why: 'This multiplies the two PODs; that is the chance both passes would detect, not either.' },
      ],
      answer: 'b',
      concepts: ['poa-pod'],
      explanation: 'Cumulative POD = $1 - (1 - 0.5)(1 - 0.5) = 75\\%$. Each pass finds a fraction of what is still unfound.',
    },
    {
      id: 's14-l3-q6',
      kind: 'single',
      prompt: 'An adult hiker is reported overdue. In a typical initial response, what happens first?',
      choices: [
        { id: 'a', text: 'Assess urgency: age, health, weather and equipment', why: 'Correct — urgency decides how fast and how big the response is.' },
        { id: 'b', text: 'Establish the LKP from the car, phone data or witnesses', why: 'Second — it anchors the search once urgency is known.' },
        { id: 'c', text: 'Send hasty teams out and set confinement points', why: 'These reflex tasks follow once urgency and the LKP are known.' },
        { id: 'd', text: 'Segment the area and assign POAs by consensus', why: 'Planners build the probability map after the reflex tasks are under way.' },
      ],
      answer: 'a',
      concepts: ['sar-system', 'search-tactics'],
      explanation: 'Urgency, LKP, hasty teams and confinement, then segments and POAs, then efficient and thorough searches to maximise POS. Fast reflex tasks happen early while planners build the probability map.',
    },
    {
      id: 's14-l3-q1',
      kind: 'single',
      prompt: 'A segment of 3 km² is searched by teams with an effective sweep width of 30 m who walk a total of 50 km of track. Using POD = 1 − e^(−C), what is the POD?',
      choices: [
        { id: 'a', text: 'About 39 %', why: 'Correct — C = 0.03 × 50 / 3 = 0.5, and 1 − e^(−0.5) ≈ 39 %.' },
        { id: 'b', text: 'About 50 %', why: 'This takes the coverage C = 0.5 as the POD itself.' },
        { id: 'c', text: 'About 61 %', why: 'This is e^(−0.5), the chance of missing — it forgets to subtract from 1.' },
        { id: 'd', text: 'About 100 %', why: 'This leaves the sweep width in metres (30 instead of 0.03 km), giving C = 500.' },
      ],
      answer: 'a',
      concepts: ['poa-pod', 'sweep-width'],
      explanation: '$C = 0.03 \\times 50 / 3 = 0.5$; $\\text{POD} = 1 - e^{-0.5} \\approx 39\\%$.',
    },
  ],
  scenario: {
    id: 's14-l3-sc',
    setup: 'You are helping plan the first night of a search for a 70-year-old walker overdue on a forest loop. It is 20:00, 4 °C and falling, with rain forecast after midnight. You have 8 trained searchers and a dog team. The loop passes a ridge viewpoint and a steep stream gorge. The walker is known to be careful and to carry a phone, which is going straight to voicemail.',
    question: 'How should the first period’s effort be used?',
    choices: [
      { id: 'a', text: 'Put all 8 searchers in a tight line and grid the largest forest block thoroughly.', why: 'Slow, low POS per hour at the start, and it ignores the trail, viewpoint and gorge where POA × POD is highest.' },
      { id: 'b', text: 'Hasty teams walk the loop and side trails calling and listening, check the viewpoint and the gorge edge; confinement at the car park and road crossings; the dog team from the LKP; and the planner builds segments and POAs for the morning.', why: 'Best: high POS per hour early, hazards checked, the subject cannot pass unseen, and the plan for later periods is prepared.' },
      { id: 'c', text: 'Wait for daylight to start, to protect the searchers.', why: 'An older person at 4 °C with rain coming is urgent (Stage 8); trained teams can safely search trails and hazards at night.' },
      { id: 'd', text: 'Send everyone to the gorge because it is the most dangerous place.', why: 'The gorge must be checked, but putting all effort into one segment ignores the higher probability along the trail and leaves no confinement.' },
    ],
    best: 'b',
    debrief: 'Early in a search, **hasty tactics, hazards and confinement** buy the most probability of success per hour, while planners build segments and POAs. The weather and the walker’s age (Stage 8: hypothermia risk) set a high urgency; night is not a reason to wait for trained teams on trails.',
    concepts: ['search-tactics', 'poa-pod', 'sar-system', 'daylight'],
  },
  summary: [
    'Searches start from the LKP, urgency and lost-person behaviour; hasty teams, confinement and investigation come first.',
    'POS = POA × POD. Coverage $C = WL/A$; $\\text{POD} = 1 - e^{-C}$ — diminishing returns.',
    'After an unsuccessful search: $\\text{POA}_i\' = \\text{POA}_i(1-\\text{POD}_i)/(1-\\text{POS})$ — searched segments fall, others and ROW rise.',
    'Effort goes where POA × marginal POD per hour is highest: small, likely, open segments first.',
    'Tactics: hasty, efficient, thorough; confinement; attraction; clues; dogs; aircraft and drones.',
    'You raise your own POD: stay, be big and bright, respond, leave clues, leave a trip plan.',
  ],
  furtherReading: ['koester-lpb', 's14-cooper-frost-robe', 's14-nasar-funsar'],
  references: ['koester-lpb', 's14-koopman-search', 's14-stone-optimal-search', 's14-cooper-frost-robe', 's14-iamsar', 's14-nasar-funsar', 'nasar', 'mra', 's14-mrew', 'icar'],
}
