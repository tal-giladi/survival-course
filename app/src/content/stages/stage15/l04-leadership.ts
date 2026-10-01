import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's15-l4',
  stage: 15,
  order: 4,
  title: 'Leadership and group survival',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s15-l2'],
  concepts: ['emergency-leadership', 'group-roles', 'group-conflict', 'group-morale', 'groupthink', 'psychological-first-aid', 'after-action-review'],
  objectives: [
    'Match **leadership style** to the situation: directive in the first minutes of a crisis, consultative when time allows.',
    'Organise a group with **clear roles, check-ins and rotations**, and keep everyone together.',
    'Recognise **groupthink** and use countermeasures that bring out genuine dissent.',
    'Manage **conflict** and **morale**, and give basic **psychological first aid** (look, listen, link).',
    'Run a blame-free **after-action review** and distinguish it from pressing people to relive an event.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Groups have huge survival advantages — more hands, shared warmth, someone to watch while others sleep, people to check your thinking. They also have their own failure modes: nobody in charge, everyone in charge, silent disagreement, blame and splitting up. This lesson is about getting the advantages without the failures.

### What a leader does in an emergency

Whether appointed or emergent, the person leading does five jobs:

1. **Make sense of the situation** and say it out loud: “Here’s where we are, here’s what matters most.” (Stage 1’s decision loop.)
2. **Set a clear, simple plan and priorities**, and say what would change them.
3. **Organise:** give everyone a role and a time to report back.
4. **Look after people:** warmth, food, water, rest, morale — including their own.
5. **Adapt:** reassess at set points and change the plan when the evidence changes (Lesson 2).

### Style depends on the clock

- **Directive** (“You two, get the tarp up; you, get the stove going”) is right when **time is short and the danger immediate** — the first minutes after a fall, a flood, a fire. Frozen people need clear instructions (Lesson 1).
- **Consultative** (“Here’s what I’m thinking — what am I missing?”, then the leader decides) suits most field decisions once the immediate danger is controlled.
- **Consensus** (the group agrees) builds commitment for big, slow decisions — whether to walk out tomorrow — but takes time, and can slide into groupthink.

Good leaders move between styles and **say which one they are using**: “This one’s my call, now — we move.” / “We have time on this; I want everyone’s view.”

The formal leader is not always the best one for every problem. **Emergent leadership** by the person with the relevant skill — the nurse with the injured person, the navigator with the map — is healthy as long as the group knows who is deciding what.`,
    },
    { type: 'diagram', id: 's15-group-roles', caption: 'Roles give everyone purpose and make sure nothing critical is forgotten.' },
    {
      type: 'md',
      md: `### Roles, check-ins and staying together

- **Assign roles** to match skills and physical state: navigator, medic, shelter/fire, water/food, signals/communications — combined in small groups. Give the injured or anxious a meaningful role too (log-keeper, fire-watcher): purpose is protective (Lesson 3).
- **Fixed check-ins:** “Back here in 20 minutes with what you found.” No one leaves camp without saying where and for how long; use the **buddy system**.
- **Rotate** heavy and unpleasant jobs and night watches so everyone sleeps.
- **Stay together** unless there is a clear, planned reason to split (e.g., two fit people going for help while others stay with an injured person, with a written plan, times and route). Splitting in anger or impatience is a classic way small problems become big ones.

### Groupthink

Irving Janis used the term **groupthink** for a cohesive group’s drive for agreement overriding realistic appraisal (Janis, 1982). Symptoms include a feeling of invulnerability, rationalising away warnings, self-censorship, an illusion that everyone agrees, and pressure on anyone who dissents. Conditions that invite it — a close-knit group, a strong leader who states a preference early, stress and isolation — are exactly those of a survival group. (Janis built the model from historical case studies; experimental support for the full model is mixed, but the countermeasures are sound and widely used.)

| Groupthink sign | Countermeasure |
|---|---|
| Leader says what they want first | Leader **speaks last**; ask the least experienced or quietest person first |
| Silence taken as agreement | Go round the group; everyone gives a view or a rating out of 10 |
| “We’re a strong team, we’ll be fine” | Pre-mortem: “It’s tomorrow and this has gone wrong — why?” (Lesson 2) |
| Pressure on the doubter | Thank dissent publicly; agree in advance that anyone can call a stop |
| Everyone hears the same arguments | Independent estimates first (write them down), then discuss |

A **devil’s advocate** can help, but research suggests that **genuine dissent** — someone who really disagrees — stimulates better thinking than a role-played one (Nemeth, Brown & Rogers, 2001). So the most important job is to make real disagreement safe.

Aviation learned this the hard way. **Crew Resource Management (CRM)** training, introduced after accidents in which junior crew members noticed problems but did not challenge the captain effectively, teaches everyone to speak up assertively and leaders to invite it (Helmreich, Merritt & Wilhelm, 1999). Borrow the habits: state the concern, the reason and the proposal (“I’m worried about the cloud; it’s 12:10 and our turnaround is 12:00; I propose we turn now”), and **repeat it** if it is not acknowledged.`,
    },
    {
      type: 'md',
      md: `### Conflict

Conflict in survival groups usually grows from the same roots: **fatigue, hunger, cold, fear, unequal workloads, scarce resources and different risk tolerance**. Handle it early:

- **Fix the body first.** Many arguments soften after food, water, warmth and sleep.
- **Talk privately**, calmly, about interests, not positions: “You want to walk out because you’re worried about your kids; I want to stay because the search will look here. What would make both of those work?”
- **Make fairness visible:** ration water and food openly, rotate hard jobs, write the rota down.
- **Decide how you decide** before the next hard choice (who has the final call, and when).
- **Never split up in anger.**

Group-development models such as Tuckman’s **forming, storming, norming, performing** (Tuckman, 1965) describe how friction often rises before a group settles into working norms. It is a descriptive model, not a law, but it is reassuring to know that early storming is normal.

### Morale

Morale is not cheerfulness; it is the group’s willingness to keep working. It is built from **small wins** (the tarp up, the fire lit, the first signal sent), **routines**, **food and warmth**, **honest information** (people cope better with bad news than with rumours), **recognition**, **humour**, and everyone having a **role that matters**. Shackleton’s *Endurance* expedition (1914–1916), in which every member of the ship’s crew survived months on the ice and at sea, is often cited for its fixed routines, shared hardship and the leader’s close attention to the most discouraged men.

### Psychological first aid

After a frightening event, some people will be distressed. **Psychological first aid (PFA)**, as set out by the World Health Organization, is simple humane support built around **look, listen, link** (WHO, 2011):

- **Look:** safety first; check for urgent physical needs and for people who are very distressed.
- **Listen:** approach, introduce yourself, ask about needs and concerns, listen without pressure, help people feel calm.
- **Link:** help people meet basic needs (warmth, water, information), connect them with loved ones and with help.

PFA does **not** mean making people describe the event in detail. Pressing people to recount a traumatic event in a single session is **not** recommended. Let them talk if they want to; do not force it.

### After-action review

An **after-action review (AAR)** is an *operational* debrief, not a psychological one. Soon after the trip or incident — once people are safe, warm and fed — ask four questions, without blame:

1. What did we **plan** to happen?
2. What **actually** happened?
3. **Why** was there a difference?
4. What will we **do differently** next time?

Include near-misses (Lesson 2). Ask the quietest person first, and let the leader speak last.`,
    },
  ],
  whyItMatters: 'Many survival stories are group stories — and so are many tragedies. The same people and equipment can hold together for weeks or fall apart in hours depending on whether roles are clear, dissent is heard, conflict is handled early and morale is looked after. These are learnable skills, and they matter just as much in a flooded neighbourhood or a stranded bus as on a mountain.',
  science: [
    {
      type: 'md',
      md: `### Worked example: a night-watch rota

A group of $n$ people must keep one person awake overnight (fire, signalling, watching an injured companion) for a night of $T$ hours. With one watcher at a time, each person’s share is:

$$
t_{\\text{watch}} = \\frac{T}{n}
$$

In words: divide the night evenly. For a 10-hour night and 4 people, $10 / 4 = 2.5$ h each, leaving each person about 7.5 hours for rest. If one person is injured and excluded, $10 / 3 \\approx 3.3$ h each. Put the least rested person on the **first** watch (so they then get an unbroken sleep), and avoid giving the leader the 03:00–05:00 watch before a big morning decision (Lesson 3).

### Why groups can be worse than individuals

Groups pool knowledge, but only if the knowledge is actually shared. Discussions tend to dwell on information everyone already has and underweight what only one person knows — the one who spotted the cliff band on the map, or who noticed the partner shivering. Collecting **independent views first**, then discussing, is a simple fix.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (Andes, 1972).** After a plane crash high in the Andes, the survivors organised themselves into teams — for melting snow into water, caring for the injured (two were medical students), repairing the fuselage shelter — and eventually chose an expedition team, fed and equipped by the others, to walk out for help. Sixteen people survived 72 days.

**Polar (Shackleton’s *Endurance*).** When the ship was crushed by ice, the expedition lived on the ice and then in open boats. Daily routines, shared work and the leader’s attention to morale kept the group functioning until rescue.

**Underground / urban (Chile, 2010).** Thirty-three miners were trapped for 69 days. In the first days, before contact with the surface, they rationed a tiny emergency food supply, organised shifts and made decisions by group vote under the shift foreman.

**Forest (wildfire, Mann Gulch, 1949).** As the fire blew up, the foreman lit an escape fire and ordered his crew into it. Under extreme stress, with little prior relationship with their leader and no time to explain, most did not follow; 13 died. Weick (1993) used the case to show how roles and shared understanding can collapse under stress — and why trust has to be built before the crisis.

**Desert (stranded vehicle).** A family’s car breaks down on a remote track. The parents assign jobs: the eldest child manages the water log, the youngest collects shade materials, one adult handles signals and the phone. Knowing who does what keeps everyone busy, calm and in the shade.

**Coastal.** On a sea-kayak trip one paddler insists on continuing past the agreed wind limit. The leader asks each paddler privately for a rating out of 10 for comfort; two say 3. The group lands, and the dissenter is thanked for raising the plan in the first place.`,
    },
  ],
  mistakes: [
    'The leader stating their preference first and then asking “everyone OK?”.',
    'Taking silence as agreement.',
    'Myth: “A good leader never changes their mind.” Changing the plan when the evidence changes is a strength.',
    'Using consensus in the first minutes of an emergency when a clear directive is needed — or staying directive for days when people need a voice.',
    'Splitting the group in anger, or letting individuals wander off without a check-in time.',
    'Leaving injured, anxious or withdrawn people without a role.',
    'Myth: “Everyone should talk through what happened straight away.” Pressing people to relive the event is not recommended; offer listening and practical support.',
    'Turning an after-action review into a hunt for someone to blame.',
  ],
  exercises: [
    {
      id: 's15-l4-e1',
      title: 'Roles and check-in plan for your next group trip',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'List your group and each person’s skills and limits.',
        'Assign emergency roles (navigator, medic, shelter/fire, water/food, signals) and a deputy for each.',
        'Agree how decisions will be made (who has the final call in an emergency, when you will use consultation) and that anyone can call a stop.',
        'Write a night-watch rota for a forced overnight.',
      ],
      success: ['Everyone knows their emergency role and the decision rule before departure.'],
      skill: 'group-lead',
    },
    {
      id: 's15-l4-e2',
      title: 'Run a pre-mortem',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Your group', 'Paper and pens'],
      steps: [
        'The evening before a trip, say: “Imagine it’s tomorrow night and this trip has gone badly wrong. Write down why.”',
        'Everyone writes silently for 5 minutes, then reads out their list — the quietest person first, the leader last.',
        'Pick the three most plausible failures and agree a trigger or change for each.',
      ],
      success: ['At least one risk came up that the leader had not considered.', 'Each of the top three risks has a concrete trigger or plan change.'],
      skill: 'psy-after-action-review',
    },
    {
      id: 's15-l4-e3',
      title: 'After-action review of a real trip',
      level: 2,
      safety: 'home',
      minutes: 20,
      steps: [
        'Within a day of your next outing, ask the four AAR questions: planned, happened, why, next time.',
        'Record at least one near-miss or “we got away with it” moment.',
        'Turn each lesson into a change in your kit, trip plan or trigger card.',
      ],
      success: ['A written AAR exists with at least one concrete change.'],
      skill: 'psy-after-action-review',
    },
  ],
  quiz: [
    {
      id: 's15-l4-q6',
      kind: 'single',
      prompt: 'Day 2, stranded after a flood cut the only road. Two group members are arguing loudly about whether to wade out. Tempers are high; nobody has eaten since yesterday. What is the best first step?',
      choices: [
        { id: 'a', text: 'Take a vote right now so the group can settle it and move on', why: 'Decides under the worst conditions and creates winners and losers.' },
        { id: 'b', text: 'Let them go their separate ways if they really cannot agree', why: 'Splitting in anger is how small problems become tragedies — and wading floodwater is extremely dangerous (Stage 12).' },
        { id: 'c', text: 'Pause for food and warmth, hear each privately, then set a decision time', why: 'Correct — fix the body, hear the interests, and make the decision structured.' },
        { id: 'd', text: 'Side with the more experienced person to end the argument quickly', why: 'Expert halo; and the other person’s concern may be valid.' },
      ],
      answer: 'c',
      concepts: ['group-conflict', 'water-crossing', 'decision-fatigue'],
      explanation: 'Many conflicts soften after food, water and rest. Talking about interests, not positions, and agreeing a decision time with clear criteria (water level, news on the radio) turns a fight into a plan — and keeps people out of floodwater.',
    },
    {
      id: 's15-l4-q1',
      kind: 'single',
      prompt: 'A member of your group has just fallen 5 m down a slope and is lying still; others are shouting and milling about. Which leadership style fits the next two minutes?',
      choices: [
        { id: 'a', text: 'Consensus — discuss the options until everyone agrees', why: 'Too slow for an immediate emergency.' },
        { id: 'b', text: 'Directive — short, clear instructions to named people', why: 'Correct — time is short and people need direction.' },
        { id: 'c', text: 'Vote — let the majority decide what happens next', why: 'Wastes time and gives no one a task.' },
        { id: 'd', text: 'Wait for someone to emerge naturally as leader', why: 'Everyone waiting for someone else is the classic under-reaction.' },
      ],
      answer: 'b',
      concepts: ['emergency-leadership', 'freezing'],
      explanation: 'Directive leadership in the first minutes: “Ana, check the slope is safe to descend. Sam, get the first-aid kit. I’ll go to him.” Consult once the immediate danger is controlled.',
    },
    {
      id: 's15-l4-q2',
      kind: 'single',
      prompt: 'Which of these practices makes groupthink **more** likely rather than less?',
      choices: [
        { id: 'a', text: 'The leader gives their view last, after everyone else', why: 'Reduces groupthink — prevents anchoring on the leader’s view.' },
        { id: 'b', text: 'Asking the quietest or least experienced person first', why: 'Reduces groupthink — they are the most likely to self-censor.' },
        { id: 'c', text: 'Closing the discussion with “We all agree, right?”', why: 'Correct — it invites the illusion of unanimity.' },
        { id: 'd', text: 'Everyone writes down their view before the discussion', why: 'Reduces groupthink — independent views before social pressure.' },
      ],
      answer: 'c',
      concepts: ['groupthink'],
      explanation: 'Groupthink feeds on the leader’s early preference, silence and social pressure. Structure the discussion to bring genuine disagreement out — and thank people publicly for raising doubts.',
    },
    {
      id: 's15-l4-q3',
      kind: 'single',
      prompt: 'Which approach matches WHO psychological first aid for distressed survivors?',
      choices: [
        { id: 'a', text: 'Get them to describe the event in detail as soon as possible', why: 'Pressing people to relive the event is not recommended.' },
        { id: 'b', text: 'Look, listen, link: safety, practical help, calm listening, connection', why: 'Correct — the core of WHO psychological first aid.' },
        { id: 'c', text: 'Leave them alone until a professional counsellor can be reached', why: 'PFA is simple humane support anyone can give: approach, listen, help meet basic needs.' },
        { id: 'd', text: 'Ask them not to talk about it so they do not upset the others', why: 'Let people talk if they want to; just do not force it.' },
      ],
      answer: 'b',
      concepts: ['psychological-first-aid'],
      explanation: 'WHO psychological first aid is look, listen, link: safety, practical support, calm listening without pressure, and connection. Pressing people to relive the event is not recommended.',
    },
    {
      id: 's15-l4-q4',
      kind: 'single',
      prompt: 'In an after-action review, which question comes right after “What actually happened?”',
      choices: [
        { id: 'a', text: 'What did we plan to happen?', why: 'That comes first — it sets the baseline.' },
        { id: 'b', text: 'Why was there a difference?', why: 'Correct — plan, reality, then the reasons for the gap.' },
        { id: 'c', text: 'What will we do differently next time?', why: 'That comes last, once the reasons are understood.' },
        { id: 'd', text: 'Who made the mistake that caused it?', why: 'Not part of the review — keep it blame-free.' },
      ],
      answer: 'b',
      concepts: ['after-action-review'],
      explanation: 'Plan → reality → reasons → changes. Keep it blame-free and include near-misses.',
    },
    {
      id: 's15-l4-q5',
      kind: 'single',
      prompt: 'Five people must keep one person awake through a 12-hour night to tend a fire and watch an injured companion (who is excluded from the rota). How many hours does each of the four others watch?',
      choices: [
        { id: 'a', text: '3 h', why: 'Correct — 12 / 4 = 3 h each.' },
        { id: 'b', text: '2.4 h', why: 'This divides by 5 and forgets that the injured person is excluded.' },
        { id: 'c', text: '4 h', why: 'This divides by 3, leaving one of the four healthy people out.' },
        { id: 'd', text: '6 h', why: 'This splits the night into two halves instead of sharing it among four.' },
      ],
      answer: 'a',
      concepts: ['group-roles'],
      explanation: '$12 / 4 = 3$ h each. Put the least rested on first watch and keep the leader off the 03:00 watch before a big morning decision.',
    },
  ],
  scenario: {
    id: 's15-l4-sc',
    setup: 'A winter storm has stranded your bus of 14 passengers on a mountain pass road overnight; the driver is shaken and says he doesn’t know what to do. Temperature −12 °C, engine running intermittently for heat, phones have weak signal, and snow is drifting against the bus. Two young men announce they are going to walk the 9 km down to the village for help. Several passengers are frightened; an older woman is shivering.',
    question: 'You have winter experience. What do you do?',
    choices: [
      { id: 'a', text: 'Stay quiet — you are not the driver and it is not your place.', why: 'The group is leaderless and a dangerous split is forming; emergent leadership by the person with relevant skill is appropriate.' },
      { id: 'b', text: 'Offer to help the driver organise: agree with him that everyone stays with the bus; call or text emergency services with your location; assign roles (someone keeps the exhaust pipe clear of snow while the engine runs, someone checks on the older woman and shares clothing, someone rations water and snacks); set check-in times and a plan for the night.', why: 'Best: supports the formal leader, keeps the group together, addresses the real killers (cold and carbon monoxide), and gives frightened people jobs.' },
      { id: 'c', text: 'Let the two men go; they are fit and it may bring help sooner.', why: 'Walking 9 km at night in a storm at −12 °C is extremely risky; rescuers look for the vehicle, and a split group doubles the search.' },
      { id: 'd', text: 'Hold a group discussion and vote on everything, including whether to walk.', why: 'Some discussion is useful, but the first minutes need a clear plan; a vote could legitimise a dangerous split.' },
    ],
    best: 'b',
    debrief: 'This brings together stay-or-move logic (Stage 14; stay with the vehicle in most storms), carbon monoxide from a running engine in drifting snow (Stage 16), hypothermia care (Stage 8) and leadership. Emergent leaders do best by backing, not overthrowing, the formal one. Roles give frightened people purpose; a firm, explained decision to stay together prevents the most dangerous option.',
    concepts: ['emergency-leadership', 'group-roles', 'stay-or-move', 'carbon-monoxide', 'hypothermia'],
  },
  summary: [
    'Leaders make sense, plan, organise, look after people and adapt — and **say which decision style** they are using.',
    '**Directive** for immediate danger; **consultative** or **consensus** when time allows.',
    'Give everyone a **role**, set **check-ins**, **rotate** hard jobs, and **stay together**.',
    '**Groupthink:** leader speaks last, quietest first, independent views before discussion, make genuine dissent safe.',
    'Handle **conflict** early: body first, interests not positions, visible fairness, never split in anger.',
    '**Morale** is built from small wins, routines, honest information and meaningful roles.',
    '**PFA** = look, listen, link — no pressure to relive events. **AAR** = planned, happened, why, next time — no blame.',
  ],
  furtherReading: ['who-pfa-2011', 'janis-groupthink', 'weick-1993', 'nols-leadership'],
  references: ['janis-groupthink', 'nemeth-2001', 'helmreich-crm-1999', 'tuckman-1965', 'weick-1993', 'who-pfa-2011', 'hobfoll-2007', 'klein-premortem-2007', 'nols-leadership', 'langmuir-mountaincraft', 'leach-survival-psych'],
}
