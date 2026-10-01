import type { Lesson } from '../../types'

export const l09: Lesson = {
  id: 's8-l9',
  stage: 8,
  order: 9,
  title: 'Cold water and immersion',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s8-l3'],
  concepts: ['cold-shock', 'swim-failure', 'immersion-hypothermia', 'help-huddle', 'afterdrop'],
  objectives: [
    'Describe the four stages of cold-water immersion: **cold shock, swim failure, hypothermia, circum-rescue collapse** — and which kill most people.',
    'Explain **“float first”** and the **1-10-1** principle, and why its numbers are illustrative rather than guaranteed.',
    'Choose between **swimming, HELP, huddling and climbing out** from water temperature, distance to safety, flotation and rescue time.',
    'Explain why **flotation** is the single most important factor, and how cold-water rescue and aftercare differ from dry-land hypothermia.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Never practise cold-water immersion on your own',
      md: 'Cold water can incapacitate or kill within a minute. Everything in this lesson is taught by explanation and simulation. Practical cold-water, ice-rescue and swift-water skills require a professionally supervised course with rescue cover.',
    },
    {
      type: 'md',
      md: `Water conducts heat about **25 times** faster than air, and moving water strips the warm boundary layer continuously. But the surprising lesson of immersion research (Golden, Tipton, Giesbrecht and others) is that most cold-water deaths happen **before** hypothermia — in the first minutes.`,
    },
    { type: 'diagram', id: 's8-cold-water-timeline', caption: 'Four stages of immersion. Hypothermia is the last to arrive, not the first.' },
    {
      type: 'md',
      md: `### 1. Cold shock (0–3 minutes)

Sudden immersion in water below about **15 °C** triggers an involuntary **gasp**, then **hyperventilation**, a surge in heart rate and blood pressure, and a breath-hold time that collapses to seconds. If your head is under water or waves break over you during the gasp, you inhale water. Panic and thrashing make it worse. The response peaks within the first 30 seconds and fades over **1–3 minutes**.

**Float first.** Lean back, spread arms and legs, and let your breathing settle before you do anything else. This is the core of the RNLI’s *Float to Live* message and of Giesbrecht’s “1 minute” — a **PFD makes it far easier**, because it holds your airway up while you gasp.

### 2. Swim failure (roughly 10–30 minutes)

Arms and hands cool fast: nerves and muscles slow, strength and coordination fail. Within tens of minutes you may be unable to swim, grip a rope, pull yourself onto ice or a boat, or operate a zip — **long before** your core is hypothermic. Without flotation, this is when people drown. Use this window for **self-rescue actions** that matter: getting onto something, reaching a ladder, securing yourself to wreckage.

### 3. Hypothermia (30 minutes and beyond)

Core cooling follows, at a rate that depends hugely on water temperature, body size and fat, clothing and behaviour. In ice water, a lightly clothed adult in a PFD may remain conscious for around an hour or more; in 15–20 °C water, for several hours. Consciousness is usually lost somewhere around 30 °C core; **with** a PFD (ideally one that keeps the face up) you still have a chance of being found alive.

### 4. Circum-rescue collapse

Some people collapse **during or just after rescue**: the water’s pressure was supporting their circulation, and lifting them vertically, or making them climb, drops blood pressure; afterdrop adds to it. Lift horizontally if you can, keep them lying down, and treat as hypothermia (Lesson 3) — and for anyone who inhaled water, as a drowning casualty needing medical assessment.`,
    },
    {
      type: 'callout',
      tone: 'info',
      title: '1-10-1 — and the counterpoint',
      md: 'Giesbrecht’s **1-10-1**: about **1 minute** to get your breathing under control, about **10 minutes** of meaningful movement, and **up to about 1 hour** before unconsciousness from hypothermia in ice water. It is a memorable teaching tool. The National Center for Cold Water Safety argues that treating these numbers as time you *have* is dangerous: many people drown in the first minute, and swim failure can come sooner. Use 1-10-1 to remember the *order* of the threats — not as a clock.',
    },
    {
      type: 'md',
      md: `### What to do after the first minute

| Situation | Best behaviour | Why |
|---|---|---|
| Safety very close (a ladder, bank or boat within a short swim) | **Swim** — steadily, head up, early | You can reach it well inside the swim-failure window |
| Upturned boat or large debris you can climb onto | **Climb out** as much as possible, early | Air removes heat far more slowly than water |
| Alone, wearing a PFD, far from safety | **HELP** — Heat Escape Lessening Posture | Protects armpits, chest sides and groin; stillness cuts flushing of cold water |
| Group in PFDs | **Huddle** | Shared heat, bigger target for rescuers, morale |
| No PFD, far from safety | Float on your back, hold onto anything that floats, signal | Treading water and swimming spend the muscle function you need to stay up |

Swimming and treading water make you cool faster (roughly a third to a half faster in classic studies) because moving limbs pump cold water through clothing and increase blood flow to the limbs.`,
    },
    { type: 'diagram', id: 's8-help-huddle', caption: 'HELP and huddle: both need flotation.' },
    { type: 'sim', id: 'cold-water', caption: 'Work through four immersion scenarios; then use free play to see how water temperature, clothing and a PFD change the timeline.' },
  ],
  whyItMatters: 'Boating, fishing, ice travel, river crossings, coastal walks and floods all put people in cold water unexpectedly. The instinctive responses — gasp, thrash, swim for shore — are the ones that kill. Knowing the stages and a few simple rules (wear a PFD, float first, get out or get still) changes outcomes more than any other piece of knowledge in this stage.',
  science: [
    {
      type: 'md',
      md: `### A simple cooling model (used in the simulator)

Core cooling rate in water is roughly proportional to the temperature difference:

$$
\\frac{dT_{core}}{dt} \\approx -k\\,(37 - T_{water})
$$

with $k$ set by insulation, body build and behaviour. With the simulator’s central value for a lightly clothed, average adult keeping still in a PFD ($k \\approx 0.1\\ \\text{h}^{-1}$ after the HELP reduction), at 10 °C:

$$
0.1 \\times (37 - 10) \\approx 2.6\\ \\text{°C per hour}
$$

After a ~10-minute plateau (vasoconstriction briefly holds the core), reaching 35 °C takes about 55 minutes and ~30 °C about 2.5–3 hours. The real range is wide — lean people cool much faster, large people more slowly — so the simulator shows a band from 0.6× to 1.6× the central rate.

### Why water is so effective

Water’s thermal conductivity (~0.6 W/m·K) is about 25 times that of air (~0.025), and its heat capacity per volume is ~3,500 times greater — moving water never warms up next to you. Convective coefficients in water are 10–100 times those in air, which is why the same 10 °C feels mild in air and deadly in water.

### Why HELP works

The trunk sides, armpits and groin have large blood flow close to the surface. Pressing arms to the chest and drawing knees up cuts the exposed high-loss area; keeping still stops cold water being pumped through clothing. Classic studies (Hayward and colleagues, 1970s) estimated that HELP and huddling extend predicted survival time by roughly 50 % compared with treading water.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Spring lakes (North America, Scandinavia).** Air is warm, water still 5–10 °C: paddlers dressed for the air capsize and are incapacitated within minutes. Dress for the water temperature, not the air.

**Coastal UK/Europe.** Most coastal drowning victims never intended to enter the water — slips, falls, being cut off by the tide. *Float to Live* is aimed at them.

**Arctic and subarctic ice.** A person through lake ice should float and calm breathing first, then turn toward the direction they came from (the ice there held them), get arms onto the ice, kick to bring the body horizontal and slide forward, then roll away — never stand up near the hole. Learn this only on a supervised course.

**Tropical and warm seas.** At 22–26 °C there is little cold shock, but people still become hypothermic over many hours; flotation and staying with the boat decide survival.

**Urban and flood water.** Floodwater is often cold, fast and debris-laden; the rule from Stage 12 applies — do not enter it.`,
    },
  ],
  mistakes: [
    'Believing hypothermia is the main early threat in cold water — cold shock and swim failure kill first.',
    'Swimming for a distant shore instead of staying with a boat or floating in HELP.',
    'Leaving the PFD in the boat because the day is warm — cold shock does not care about air temperature.',
    'Treating 1-10-1 as a guaranteed 10 minutes of useful movement.',
    'Hauling a cold survivor out vertically and standing them up — risk of circum-rescue collapse.',
    'Myth: strong swimmers are safe. Swim failure is physiological, not a matter of skill.',
  ],
  exercises: [
    {
      id: 's8-l9-e1',
      title: 'Cold-water decision drills (simulation)',
      level: 2,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Complete all four scenarios in the Cold Water Timeline simulation.',
        'For each, write the one fact that decided the best behaviour (distance, flotation, rescue time, something to climb onto).',
        'In free play, find the water temperature at which a 400 m swim in a PFD becomes “uncertain” for an average adult in light clothing.',
      ],
      success: ['All four scenarios answered with written reasons.', 'You can explain why the same behaviour is right in one scenario and wrong in another.'],
    },
    {
      id: 's8-l9-e2',
      title: 'PFD fit and floating practice in a supervised pool',
      level: 3,
      safety: 'supervised',
      minutes: 60,
      materials: ['Your PFD / lifejacket', 'A lifeguarded pool session or a club PFD practice session'],
      steps: [
        'Check the PFD fits: fastened, snug, it does not ride up past your chin when lifted by the shoulders.',
        'In the supervised pool, practise floating on your back without a PFD (Float to Live position), then in the PFD.',
        'Practise the HELP posture and a three-person huddle in PFDs.',
        'Practise putting a PFD on in the water (hard — this is why you wear it).',
      ],
      success: ['Your PFD fits correctly.', 'You have floated calmly, held HELP and joined a huddle under supervision.'],
      safetyNote: 'Warm pool water only, with a lifeguard present. Never practise cold-water immersion or ice self-rescue without a professional course.',
      skill: 'cold-water-readiness',
    },
  ],
  simulations: ['cold-water'],
  quiz: [
    {
      id: 's8-l9-q4',
      kind: 'single',
      prompt: 'Your fishing boat capsizes 2 km offshore in 11 °C water. The three of you wear PFDs; the hull is floating but you cannot climb onto it. Rescue is on the way. Which plan is best?',
      choices: [
        { id: 'a', text: 'All stay with the boat, huddled together and holding onto the hull', why: 'Correct — a bigger target for rescuers, and huddling conserves heat.' },
        { id: 'b', text: 'All stay with the boat, each treading water hard to keep warm', why: 'Movement increases heat loss; stay still.' },
        { id: 'c', text: 'Strongest swimmer heads for shore; the other two huddle at the hull', why: '2 km in 11 °C water is far beyond likely swim failure.' },
        { id: 'd', text: 'All three swim for shore together, keeping each other in sight', why: 'Swim failure will come long before 2 km in 11 °C water.' },
      ],
      answer: 'a',
      concepts: ['help-huddle', 'swim-failure'],
      explanation: 'Stay with the boat, stay still, stay together.',
    },
    {
      id: 's8-l9-q2',
      kind: 'single',
      prompt: 'You fall off a jetty into 9 °C water. What should you do in the first minute?',
      choices: [
        { id: 'a', text: 'Swim hard for the nearest ladder before the cold sets in.', why: 'Swimming during the gasp and hyperventilation risks inhaling water.' },
        { id: 'b', text: 'Float on your back, spread out, and get your breathing under control.', why: 'Correct — float first.' },
        { id: 'c', text: 'Shout for help continuously until someone hears you.', why: 'Shouting while hyperventilating risks inhaling water; signal once breathing is controlled.' },
        { id: 'd', text: 'Remove heavy clothing so that you can swim more easily.', why: 'Clothing gives some insulation and trapped air; removing it wastes energy.' },
      ],
      answer: 'b',
      concepts: ['cold-shock'],
      explanation: 'The cold-shock response fades over 1–3 minutes. Then decide: a short swim to the ladder, or float and signal.',
    },
    {
      id: 's8-l9-q6',
      kind: 'single',
      prompt: 'Rescuers have reached a person who has been in 8 °C water for 50 minutes. How should they get them out?',
      choices: [
        { id: 'a', text: 'Horizontally if possible, then keep them lying down, insulated, handled gently', why: 'Correct — reduces circum-rescue collapse and afterdrop risk.' },
        { id: 'b', text: 'Have them climb the boarding ladder themselves to prove they are OK', why: 'Vertical exertion after long immersion risks collapse.' },
        { id: 'c', text: 'Pull them out by the arms and stand them up to walk to the cabin', why: 'Same risk; also damages cold limbs.' },
        { id: 'd', text: 'Lift them out and put them straight into a hot shower on board', why: 'Not field care for a hypothermic person; rewarm gently with insulation and trunk heat.' },
      ],
      answer: 'a',
      concepts: ['afterdrop', 'immersion-hypothermia'],
      explanation: 'Horizontal lift, lie down, insulate, trunk heat, monitor, medical assessment — especially if they inhaled water.',
    },
    {
      id: 's8-l9-q5',
      kind: 'single',
      prompt: 'Which statement about the 1-10-1 principle for cold water is correct?',
      choices: [
        { id: 'a', text: 'It is a teaching tool; windows vary and many drown in the first minute.', why: 'Correct — hence the counterpoint from the National Center for Cold Water Safety.' },
        { id: 'b', text: 'It guarantees at least 10 minutes of useful movement in ice water.', why: 'It is illustrative, not a guarantee; individual windows vary.' },
        { id: 'c', text: 'It guarantees about 1 hour of consciousness however cold the water.', why: 'No timing in it is guaranteed; people vary widely.' },
        { id: 'd', text: 'It shows that hypothermia is what kills most people in cold water.', why: 'Most deaths occur in the first stages — cold shock and swim failure.' },
      ],
      answer: 'a',
      concepts: ['cold-shock', 'swim-failure'],
      explanation: 'It is an illustrative teaching tool. Individual windows vary, and many people drown in the first minute — hence the counterpoint from the National Center for Cold Water Safety.',
    },
    {
      id: 's8-l9-q1',
      kind: 'single',
      prompt: 'Which sequence gives the stages of cold-water immersion from first to last?',
      choices: [
        { id: 'a', text: 'Cold shock → swim failure → hypothermia → circum-rescue collapse', why: 'Correct.' },
        { id: 'b', text: 'Cold shock → hypothermia → swim failure → circum-rescue collapse', why: 'Swim failure (cold arms and hands) comes well before hypothermia.' },
        { id: 'c', text: 'Swim failure → cold shock → hypothermia → circum-rescue collapse', why: 'Cold shock is the very first response, in the first minutes.' },
        { id: 'd', text: 'Cold shock → swim failure → circum-rescue collapse → hypothermia', why: 'Circum-rescue collapse happens at rescue, after hypothermia has developed.' },
      ],
      answer: 'a',
      concepts: ['cold-shock', 'swim-failure', 'immersion-hypothermia'],
      explanation: 'Cold shock (gasp) → swim failure (arms and hands fail) → hypothermia → circum-rescue collapse. Most deaths occur in the first two stages — before hypothermia.',
    },
    {
      id: 's8-l9-q3',
      kind: 'single',
      prompt: 'Using the simulator’s simple model, a person cools at 0.1 × (37 − T_water) °C/h after a 10-minute plateau. In 12 °C water, how many minutes after entry until the core reaches 35 °C?',
      choices: [
        { id: 'a', text: '≈ 58 min', why: 'Correct — 48 min of cooling plus the 10-minute plateau.' },
        { id: 'b', text: '≈ 48 min', why: 'This forgets the 10-minute plateau.' },
        { id: 'c', text: '≈ 110 min', why: 'This uses 0.1 × 12 (water temperature) instead of 0.1 × (37 − 12).' },
        { id: 'd', text: '≈ 85 min', why: 'This inverts the ratio: 2.5 ÷ 2 h instead of 2 ÷ 2.5 h.' },
      ],
      answer: 'a',
      concepts: ['immersion-hypothermia'],
      explanation: 'Rate = 0.1 × 25 = 2.5 °C/h; 2 °C takes 0.8 h = 48 min; plus the 10-minute plateau ≈ **58 min**. Real people vary widely around this.',
    },
  ],
  scenario: {
    id: 's8-l9-sc',
    setup: 'April, a large lake: air 16 °C, water 7 °C. You and a friend capsize a canoe 600 m from shore; you both wear PFDs. The canoe is swamped but floating. Nobody saw you, but your trip plan has you due back in 3 hours, and you carry a whistle and a waterproof phone.',
    question: 'After the first minute of floating, what is the best plan?',
    choices: [
      { id: 'a', text: 'Swim for shore together straight away, while you still can.', why: 'At 7 °C a 600 m swim in PFDs takes ~40 minutes — likely beyond swim failure, and it speeds cooling.' },
      { id: 'b', text: 'Call for help on the phone, climb onto the swamped canoe, stay together.', why: 'Best: communication starts rescue early, getting out of the water reduces heat loss, staying with the canoe makes you visible; whistle when you see or hear anyone.' },
      { id: 'c', text: 'Right the canoe and keep bailing it for as long as it takes.', why: 'Trying briefly may work, but long attempts burn the swim-failure window; get onto it or stay still.' },
      { id: 'd', text: 'Wait quietly in HELP for 3 hours until your contact raises the alarm.', why: 'HELP helps, but not calling when you can wastes hours.' },
    ],
    best: 'b',
    debrief: 'Use the minutes of good arm function for the highest-value actions: call, get out of the water as much as possible, and stay with the canoe. Then conserve heat. The trip plan (Stage 1) is your backup — do not make it your first line.',
    concepts: ['cold-shock', 'swim-failure', 'help-huddle', 'signaling'],
  },
  summary: [
    'Stages: cold shock (0–3 min) → swim failure (~10–30 min) → hypothermia (30 min+) → circum-rescue collapse.',
    'Float first; a PFD is the single biggest survival factor.',
    '1-10-1 orders the threats; its numbers are illustrative, not a guarantee.',
    'Close safety → swim early; something to climb onto → get out; far away → HELP or huddle, stay with the boat.',
    'Rescue horizontally; treat as hypothermia and possible drowning.',
  ],
  furtherReading: ['coldwater-1101', 'coldwater-1101-myth', 'rnli-float', 'tipton-cwi-2017'],
  references: ['coldwater-1101', 'coldwater-1101-myth', 'rnli-float', 'tipton-cwi-2017', 'wms-drowning-2024', 'wms-hypothermia-2019', 'golden-tipton-sea-survival', 'hayward-1975'],
}
