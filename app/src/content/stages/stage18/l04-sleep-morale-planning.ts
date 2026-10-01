import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's18-l4',
  stage: 18,
  order: 4,
  title: 'Sleep, morale and planning ahead',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s15-l3'],
  concepts: ['s18-sleep-system', 's18-morale', 's18-apathy', 's18-rolling-plan', 'sleep-deprivation', 'ground-insulation', 'stay-or-move', 'decisions', 'forecast-reading', 'integration'],
  objectives: [
    'Build a **sleep system** that works night after night: ground insulation, dry sleep clothes, food and water before bed, a plan for the fire.',
    'Choose between **tending a fire all night** and a **banked fire with a better bed**, and plan naps and shifts.',
    'Manage **morale** as a resource — routine, goals, roles, control, connection — and recognise **apathy and withdrawal** early in yourself and others.',
    'Plan **several days ahead** with a rolling plan: three horizons, reserves, weather and rescue windows, and triggers that force a re-plan.',
    'Re-examine **stay or move** each day with fresh information, and make big decisions at the right time of day.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 8 explained what sleep loss does to the brain; Stage 15 looked at isolation, uncertainty and decision fatigue. This lesson is about the practical side over several days: getting enough sleep, keeping your spirits up, and thinking beyond today.

### A sleep system, not just a bed

Most cold, sleepless nights come from the **ground** and from going to bed already cold, hungry or wet — not from the air.

- **Insulate from the ground first.** Conduction to cold or wet ground is relentless (Stage 5: R-values). A thick layer of dry boughs, leaves, grass or a foam pad under you usually matters more than anything over you. Rebuild and fluff it each evening.
- **Go to bed warm, fed and dry.** Eat something with fat and carbohydrate in the evening (Stage 8), drink a hot drink, do a few minutes of light exercise to warm up — but not enough to sweat — and change into dry sleep clothes.
- **Empty your bladder.** Warming a full bladder costs heat, and getting up breaks sleep.
- **A warm bottle** (a sealed bottle of hot water, wrapped in a sock) in the sleeping bag helps, and keeps tomorrow’s water from freezing.
- **Protect the head and neck** with a hat or hood; keep your breath outside the bag to limit moisture (Lesson 3).
- **In heat and in the tropics**, the problem is insects, humidity and heat: a raised platform, a net, sleeping through the cooler night and resting through midday.

### Fire all night, or a better bed?

A fire tended all night gives warmth, light and company — and costs **a lot of fuel and sleep**: you wake every hour or two to feed it. A well-insulated bed in a small shelter with the fire **banked** at bedtime often gives more total sleep for less wood. In deep cold without a sleeping bag, a long fire with a reflector (Stage 3) may be the only option; then take shifts, or plan naps in the warmest part of the day. The Multi-Day Camp below lets you compare them.

### Naps and shifts

- Short naps of **10–20 minutes** refresh with little grogginess; a nap of about **90 minutes** covers a full cycle (Stage 8).
- In a group, **shifts** for the fire or a lookout mean somebody is always rested enough to think. Fix the handover time and rule — “wake the next person, don’t skip”.
- Decide big things — stay or move, a river crossing, a route — **after sleep and food, early in the day**, not at 03:00.`,
    },
    { type: 'sim', id: 'multi-day', caption: 'Compare two runs in the subarctic: one tending the fire all night, one building a better shelter and banking the fire. Watch sleep debt, warmth and morale.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire, camping and signal rules',
      md: 'A multi-day stay is still subject to fire bans, camping limits and rules on cutting live wood for beds and shelters. In a genuine emergency, protecting life comes first, but know the rules where you travel and plan so you rarely need to break them ([References → Law varies by jurisdiction](#/references)). Signal fires in particular can start wildfires in dry conditions (Stage 12).',
    },
    {
      type: 'md',
      md: `### Morale is a resource

Survivors, instructors and researchers describe the same thing: people with similar kit and bodies do very differently depending on their state of mind. Morale is not a mood you wait for; it is a **resource you manage**, like water.

What keeps it up:

- **Routine and structure** (Lesson 2): each day has a shape — morning round, work, rest, evening meal, plan.
- **Small, achievable goals and visible progress**: a better bed today, a finished signal, a full water batch. Tick them off; keep a log.
- **Control over something**: even when the big thing (rescue) is out of your hands, choose what you *can* control and act on it.
- **Basic needs met**: food, water, warmth and sleep have a large effect on mood (Stages 6 and 8). A hot drink is worth more than its calories.
- **Connection and roles**: in a group, everyone has a job; talk, share decisions and share out the unpleasant tasks. Alone, talk yourself through tasks, write, keep to the routine.
- **Meaning and a future**: think about the people you will see, plans for after; many survivors describe this as what kept them going.
- **Humour** and small comforts — a clean face, a tidy shelter, a song.

### When morale fails: apathy and withdrawal

Psychologist John Leach, a former military survival instructor, describes a progression sometimes called “**give-up-itis**”: withdrawal from others and from tasks, then apathy, loss of will and initiative, and — in extreme, prolonged cases — deaths without a clear physical cause. Earlier signs are more common and more useful to recognise:

- Stops doing routine tasks; neglects hygiene or eating.
- Withdraws from conversation; stays in the shelter.
- Flat, indifferent answers; “what’s the point?”.

What helps is the opposite of withdrawal: a **specific, achievable task** and a reason to do it, company, food and warmth, and a small sense of control. Give the person a job that matters (“you are in charge of the fire tonight”), do it with them at first, and praise what gets done. Treat physical causes too: cold, dehydration, hunger, head injury and illness can all look like apathy (Stage 9). If mood or behaviour is worsening despite this, it is a reason to prioritise evacuation.`,
    },
    { type: 'diagram', id: 's18-morale-loops', caption: 'Sleep, work and morale feed each other — downward or upward.' },
    {
      type: 'md',
      md: `### Planning several days ahead

A good plan has **three horizons**:

1. **Today** — detailed: what each work block is for, what must be done before dark.
2. **Tomorrow** — the main jobs, and what must be ready *tonight* to make them possible (wood cut, water treated, clothes dry).
3. **The next three to five days** — reserves (Lesson 1), the weather (Stage 12), rescue windows (Stage 14), and whether staying is still right.

Every evening, update the ledger, review the day and **roll the plan forward** one day. Then write down the **triggers** that would force an immediate re-plan: water under a day of reserve, a storm forecast, illness or injury, key gear failing, or a change in what you expect from rescuers.

Plans need **alternatives**. For the things that matter most — shelter, water, fire, signals, getting out — ask: *what is plan B if plan A fails, and plan C after that?* A signal plan might be: a phone text at fixed times while the battery lasts; ground-to-air markers and a signal fire ready in the clearing; a whistle and mirror on your body at all times.

### Stay or move — asked again each day

Stage 1 and Stage 14 explain why staying put is usually right when someone knows where you are. Over several days, the answer can change: water or fuel may be running out, a storm may be coming, someone may be getting worse, or it may become clear that nobody is looking. Ask the question **each morning**, with the ledger in front of you and food in you. Write down what would change your mind, so you are not deciding on mood.`,
    },
    { type: 'diagram', id: 's18-rolling-plan', caption: 'A rolling plan: detailed today, outline tomorrow, options and reserves for the days after — reviewed every evening.' },
  ],
  whyItMatters: 'In multi-day situations, people often have enough kit and enough food; what fails is sleep, spirit and foresight. Exhausted, demoralised people stop maintaining their camp, miss the aircraft, and make their worst decisions at night. A sleep system, a routine that protects morale and a plan that looks beyond today keep you functioning — and ready when help comes.',
  science: [
    {
      type: 'md',
      md: `### Sleep debt over several nights

Sleep debt adds up: if you need about 7.5 h and get 5 h a night tending a fire, you add 2.5 h of debt each night:

$$
\\text{debt after } n \\text{ nights} = n \\times (7.5 - \\text{hours slept})
$$

After four nights at 5 h, that is 10 h. Stage 8 showed that about 17–19 hours awake impairs performance roughly as much as a blood alcohol concentration of 0.05 % (Williamson and Feyer, 2000); chronic partial sleep loss also degrades attention and mood, and people consistently **underestimate** how impaired they are. One good night reduces but does not wipe out several nights of debt.

**Worked comparison.** Tending the fire all night: about 5 h of sleep and perhaps twice the firewood. Banked fire in a well-insulated shelter: perhaps 7 h if the bed is good. Over four nights the difference is about **8 hours of sleep** — the equivalent of a full night — and several extra hours of wood-gathering avoided.

### Why routine helps

Uncertainty and lack of control are among the strongest stressors. Routine does not remove the uncertainty of rescue, but it gives many small certainties — what you will do next, what “done” looks like — and repeated small successes. Research on starvation (Keys and colleagues, 1950) also reminds us that hunger itself brings irritability, apathy and preoccupation with food; some low mood in a long wait is physiology, not failure of character. Feed, warm and rest people before judging them.

### A simple planning rule for reserves

If rescue is expected in $d$ days but could slip, plan resources for about $1.5\\times d$ to $2\\times d$ and hold that margin as a reserve (Stage 6: rationing with a margin). The cost of planning for too long is a little hunger; the cost of planning for too short can be the whole situation.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Subarctic winter.** Nights are 16–18 hours long. A snow shelter (Stage 5) with a thick bough bed often gives better sleep than a fire tended all night. The evening routine — hot meal, warm bottle, dry sleep clothes, boots in a bag inside the bag — is what makes the long night bearable. Short daylight makes the **plan for tomorrow** critical.

**Tropical rainforest.** Heat, humidity and insects break sleep. A raised hammock or platform with a net, sleeping in dry clothes, and resting through the hottest hours help. Constant wet, noise and darkness under the canopy wear down morale; routine and small tasks matter.

**Temperate forest.** A dry bed off the ground and a banked fire usually beat an all-night vigil. Rain days are for maintenance and rest under the tarp, not for heroic wood-gathering.

**Coastal.** Wind and spray steal sleep; a low shelter in the lee of a dune or rocks, and a plan tied to tides and daylight for signals and water trips.

**Mountain.** Altitude disturbs sleep (Stage 8); descending even a little can help. Weather windows dominate the rolling plan.

**Urban disaster.** After an earthquake or long outage, sleep is broken by aftershocks, noise and worry. Families take turns, keep routines for children, and plan the next days around water, food, shelter and information (Stage 16).`,
    },
  ],
  mistakes: [
    'Putting all the effort into the roof and none into the ground under you.',
    'Going to bed cold, hungry or in damp clothes and hoping to warm up.',
    'Tending a big fire all night, every night, until exhaustion.',
    'Making big decisions at night or when exhausted.',
    'Myth: “Morale is a matter of character; you either have it or you don’t.” It responds to routine, goals, food, warmth, sleep and company.',
    'Myth: “Give-up-itis only happens to weak people.” Withdrawal and apathy can affect anyone under prolonged stress; early action reverses it.',
    'Planning only for today, or planning for the rescue date with no margin.',
    'Deciding stay-or-move once, on day 1, and never revisiting it.',
  ],
  exercises: [
    {
      id: 's18-l4-e1',
      title: 'Back-garden sleep-system test',
      level: 2,
      safety: 'outdoor',
      minutes: 720,
      materials: ['Tarp or tent', 'Foam pad and/or a thick layer of dry leaves or grass in a bag', 'Sleeping bag', 'Dry sleep clothes', 'Thermometer', 'A notebook'],
      safetyNote: 'Do this in a garden or legal campsite with a house or car nearby. Set a bail-out rule in advance (for example: “if I am shivering for more than 20 minutes, I go in”) and use it. No fires unless legal and supervised; no stoves inside the shelter.',
      steps: [
        'Night 1: sleep with your normal routine; note air temperature, what you wore, when you woke and why.',
        'Night 2: apply the full sleep routine — more ground insulation, evening meal with fat, hot drink, bladder emptied, warm bottle, dry sleep clothes, hat.',
        'Compare hours slept, times woken and how cold you felt.',
      ],
      success: ['Night 2 gave more sleep or fewer cold wake-ups than night 1.', 'You can name the single change that helped most.'],
      skill: 'shelter-overnight',
    },
    {
      id: 's18-l4-e2',
      title: 'Plan three days ahead in the Multi-Day Camp',
      level: 3,
      safety: 'virtual-only',
      minutes: 45,
      steps: [
        'Play the Multi-Day Camp in the subarctic. Each evening, before choosing the next day, write a three-horizon plan (today, tomorrow, next 3 days) and your triggers.',
        'Play once tending the fire every night and once building the shelter up and banking the fire.',
        'Compare sleep debt, morale and the score, and note where the storm and aircraft changed your plan.',
      ],
      success: ['You reached 80 % or more in at least one run.', 'Your plan anticipated the storm and the aircraft day.'],
    },
    {
      id: 's18-l4-e3',
      title: 'Supervised multi-day expedition course',
      level: 4,
      safety: 'formal-training',
      minutes: 10080,
      steps: [
        'Choose a reputable multi-day outdoor course (for example, an expedition, wilderness skills or leadership course run by a recognised provider).',
        'Before it, write your personal ledger, maintenance round and routine; take them with you.',
        'During the course, practise the routine, the daily round and the evening planning, and ask instructors to critique them.',
        'Afterwards, revise your plans and kit list.',
      ],
      success: ['You completed a supervised multi-day course.', 'You revised your ledger, round and routine from what you learned.'],
      skill: 'multi-day',
      safetyNote: 'Choose providers with qualified instructors, emergency plans and appropriate insurance; do not attempt multi-day survival practice alone.',
    },
  ],
  simulations: ['multi-day'],
  quiz: [
    {
      id: 's18-l4-q5',
      kind: 'single',
      prompt: 'At 02:00 on night 3, cold and awake, you decide you will walk out at first light down an unfamiliar valley. What should you do?',
      choices: [
        { id: 'a', text: 'Pack everything now so that you can leave at first light', why: 'Commits you to a decision made at the circadian low, exhausted — exactly when judgment is worst.' },
        { id: 'b', text: 'Note your reasons, rest, then review them after breakfast', why: 'Correct — big decisions after food and rest, with the ledger, weather and rescue expectations in front of you.' },
        { id: 'c', text: 'Leave immediately, in the dark, while you still feel motivated', why: 'Night travel in unfamiliar terrain is one of the most dangerous options (Stage 2).' },
        { id: 'd', text: 'Dismiss the thought for good, because staying is always right', why: 'Staying is usually right, but the question deserves a proper daily review; circumstances can change.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'decisions', 'sleep-deprivation'],
      explanation: 'Stage 8 and Stage 15: decisions at the circadian low, exhausted and cold, are unreliable. Review stay-or-move each morning, with food and facts.',
    },
    {
      id: 's18-l4-q3',
      kind: 'single',
      prompt: 'On day 4, your companion stops helping, stays in the shelter, stops eating and answers “what’s the point?”. Which response does NOT fit this lesson?',
      choices: [
        { id: 'a', text: 'Check for physical causes: cold, dehydration, hunger, illness, head injury', why: 'This fits — these can look like apathy.' },
        { id: 'b', text: 'Give them a specific, meaningful job and start it together with them', why: 'This fits — purposeful activity and a sense of control counter withdrawal.' },
        { id: 'c', text: 'Leave them alone in the shelter to rest until they feel better', why: 'Correct: rest is fine, but leaving them isolated with nothing to do tends to deepen withdrawal.' },
        { id: 'd', text: 'Offer food, a hot drink and warmth, and talk about the plan ahead', why: 'This fits — basic needs and a future to focus on.' },
      ],
      answer: 'c',
      concepts: ['s18-apathy', 's18-morale'],
      explanation: 'Withdrawal and apathy respond to basic needs, company, a specific task and a sense of control; isolation and blame usually deepen it. Rule out physical causes, and if it keeps getting worse, prioritise evacuation.',
    },
    {
      id: 's18-l4-q2',
      kind: 'single',
      prompt: 'It is −12 °C. You have a sleeping bag, a tarp, plenty of boughs and a small saw. Which night plan is likely to give the best result over several nights?',
      choices: [
        { id: 'a', text: 'Sit up beside a big fire all night, every night, to stay warm', why: 'Warm, but costs sleep and a great deal of fuel; exhaustion builds each night.' },
        { id: 'b', text: 'Small insulated shelter, thick bough bed, hot food, banked fire', why: 'Correct — a good bed, a hot meal and drink before bed and a banked fire usually give more sleep for less wood.' },
        { id: 'c', text: 'Sleep directly on the snow inside the bag to save building effort', why: 'Conduction to the snow will steal heat all night; insulate the ground.' },
        { id: 'd', text: 'Stay awake and keep walking around through the night to stay warm', why: 'Burns energy, causes sweating and exhaustion, and risks injury in the dark.' },
      ],
      answer: 'b',
      concepts: ['s18-sleep-system', 'ground-insulation', 'long-duration-fire'],
      explanation: 'The ground and the evening routine matter most. With a sleeping bag, invest in the bed and bank the fire.',
    },
    {
      id: 's18-l4-q6',
      kind: 'single',
      prompt: 'Rescue is expected in about 3 days. How much food and fuel should you plan for?',
      choices: [
        { id: 'a', text: 'Exactly 3 days, since a margin only adds weight', why: 'Rescues slip because of weather and logistics; a plan with no margin fails at the first delay.' },
        { id: 'b', text: 'Roughly 4.5–6 days, holding the extra as a reserve', why: 'Correct: plan for about 1.5–2× the expected wait.' },
        { id: 'c', text: '3 days, plus whatever you can forage on the way', why: 'Food-getting in a short wait usually costs more than it returns; it is not a reliable margin.' },
        { id: 'd', text: 'Just 2 days, so that you are forced to ration well', why: 'Under-planning does not make rescue come sooner; it only removes your reserve.' },
      ],
      answer: 'b',
      concepts: ['s18-rolling-plan', 'rationing'],
      explanation: 'Rescues slip because of weather and logistics. Plan for roughly 1.5–2× the expected wait and hold the margin as a reserve.',
    },
    {
      id: 's18-l4-q1',
      kind: 'single',
      prompt: 'You need about 7.5 h of sleep. For four nights you tend a fire and sleep 5 h a night. How many hours of sleep debt have you built up?',
      choices: [
        { id: 'a', text: '10 h', why: 'Correct: 4 × (7.5 − 5) = 10 h.' },
        { id: 'b', text: '2.5 h', why: 'This is the shortfall for one night; it forgets to multiply by four nights.' },
        { id: 'c', text: '20 h', why: 'This is the total sleep you got (4 × 5), not the shortfall.' },
        { id: 'd', text: '30 h', why: 'This is the total sleep you needed (4 × 7.5), not the shortfall.' },
      ],
      answer: 'a',
      concepts: ['sleep-deprivation', 's18-sleep-system'],
      explanation: '$4 \\times (7.5 - 5) = 10$ h — more than a full night. Expect slower thinking, worse mood and poor risk judgment, and that you will underestimate it.',
    },
    {
      id: 's18-l4-q4',
      kind: 'single',
      prompt: 'Which sequence orders the three planning horizons from most detailed to least detailed?',
      choices: [
        { id: 'a', text: 'Today → tomorrow → next 3–5 days', why: 'Correct: detail where it pays — today’s work blocks, then tomorrow’s main jobs, then reserves and options further out.' },
        { id: 'b', text: 'Next 3–5 days → tomorrow → today', why: 'This is least to most detailed — the reverse of the question.' },
        { id: 'c', text: 'Tomorrow → today → next 3–5 days', why: 'Today needs the most detail: what each work block is for and what must be done before dark.' },
        { id: 'd', text: 'Today → next 3–5 days → tomorrow', why: 'Tomorrow’s plan (main jobs, what must be ready tonight) is more detailed than the 3–5 day outlook.' },
      ],
      answer: 'a',
      concepts: ['s18-rolling-plan'],
      explanation: 'Today covers each work block and what must be done before dark; tomorrow covers main jobs and what must be ready tonight; the next 3–5 days cover reserves, weather, rescue windows and stay-or-move. Roll the plan forward every evening.',
    },
  ],
  scenario: {
    id: 's18-l4-sc',
    setup: 'Day 3 of an unplanned wait in a subarctic forest in late autumn. You and two friends had a vehicle breakdown on a remote forestry road; your trip plan says you would be back yesterday. You have one sleeping bag each, a tarp, a stove with fuel for two more days of melting snow, food for four days on small rations, and plenty of dead wood. One friend is sleeping badly and has become quiet; everyone is tired from two nights of feeding a fire. The radio says a storm arrives tomorrow night.',
    question: 'What is your plan for today?',
    choices: [
      { id: 'a', text: 'Walk out today, before the storm, along the road — 60 km to the highway.', why: 'A long walk in the cold with tired people, away from the vehicle searchers will find first, and possibly into the storm.' },
      { id: 'b', text: 'Today: turn the tarp and vehicle into a well-insulated shelter with a thick bough bed, stock two nights of wood under cover, switch from melting snow on the stove to melting over the fire to save stove fuel, set a signal site on the road, and give each person a role; tonight bank the fire and sleep in shifts. Review stay-or-move tomorrow morning.', why: 'Best: prepares for the storm, fixes sleep, protects fuel, keeps you visible and addresses morale with roles.' },
      { id: 'c', text: 'Stay by the fire as before; the storm will pass.', why: 'Continues the pattern that is exhausting everyone and leaves the storm unprepared for.' },
      { id: 'd', text: 'Send the quiet friend to rest in the vehicle alone while the other two work.', why: 'Rest is fine, but isolation deepens withdrawal; a role and company help more.' },
    ],
    best: 'b',
    debrief: 'This joins Stage 5 (shelter and insulation), Stage 12 (acting on a forecast), Stage 14 (stay with the vehicle, be visible) and Stage 15 (roles and morale). The rolling plan uses the storm as a trigger: tomorrow’s needs — wood, shelter, water — are prepared today. Sleep is fixed by the bed and a banked fire rather than an all-night vigil. The quiet friend gets a role and company, and physical causes are checked.',
    concepts: ['s18-rolling-plan', 's18-sleep-system', 's18-morale', 'stay-or-move', 'forecast-reading'],
  },
  summary: [
    'A **sleep system**: insulate the ground first; go to bed warm, fed, dry and with an empty bladder; warm bottle; hat.',
    'A good bed and a **banked fire** usually beat an all-night vigil; use naps and shifts.',
    '**Morale is a resource**: routine, goals, visible progress, control, basic needs, roles, connection, meaning.',
    'Spot **withdrawal and apathy** early; answer with a specific task, company, warmth and food — and check for physical causes.',
    'Plan in **three horizons**, roll the plan every evening, and write **triggers** and alternatives.',
    'Re-ask **stay or move** each morning, with food and facts — not at 02:00.',
    'Plan reserves for **1.5–2×** the expected wait.',
  ],
  furtherReading: ['leach-survival-psych', 'leach-giveupitis-2018', 'deep-survival', 'williamson-feyer-2000'],
  references: ['leach-survival-psych', 'leach-giveupitis-2018', 'deep-survival', 'williamson-feyer-2000', 'keys-starvation', 'afh-10-644', 'army-atp-3-50-21', 'nols-leadership', 'usariem-cold', 'lnt-principles', 'usfs-fire'],
}
