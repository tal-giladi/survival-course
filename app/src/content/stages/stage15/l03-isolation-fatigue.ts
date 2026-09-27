import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's15-l3',
  stage: 15,
  order: 3,
  title: 'Isolation, uncertainty and fatigue',
  level: 'advanced',
  minutes: 55,
  prerequisites: ['s8-l7'],
  concepts: ['isolation-uncertainty', 'decision-fatigue', 'emotion-regulation', 'give-up-itis', 'sleep-deprivation', 'cognitive-degradation', 'stress-control'],
  objectives: [
    'Explain why **uncertainty** and **isolation** wear people down, and how structure and routine counter them.',
    'Separate the well-supported effects of **sleep loss, cold, hunger and exhaustion** on decisions from the contested idea of a limited “willpower battery”.',
    'Use **emotion-regulation** strategies — from choosing the situation to reappraisal, labelling and breathing — during a long ordeal.',
    'Recognise the stages of **giving up** in yourself or others, rule out physical causes first, and respond with purpose and control.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Lesson 1 dealt with the first seconds of an emergency. Many survival situations are instead **long**: a night lost in the forest becomes three; a snowbound hut, a life raft, a stranded car, a week of grid failure. Here the enemy is slower — not knowing, being alone, sleeping badly, being cold and hungry — and it attacks motivation and judgment.

### Uncertainty: not knowing hurts

Uncertainty about a threat — *will they find us? when? is the weather going to break?* — drives anxiety in its own right. Research on anxiety shows that uncertain threats provoke more sustained vigilance and worry than threats that are certain, even certain bad ones, because the brain keeps preparing for every possibility (Grupe & Nitschke, 2013).

You cannot remove the uncertainty, but you can **shrink it and give it edges**:

- **Estimate the search timeline.** If you left a trip plan (Stage 1), you know roughly when your contact will raise the alarm and how searches work (Stage 14). “They will miss me tonight at 20:00; a search could start tomorrow morning” is an anchor for the mind.
- **Build a schedule.** Signal at fixed times, drink at fixed times, check shelter and fire at fixed times, write a log. A day made of known blocks is much easier to live through than an open-ended wait.
- **Set short horizons.** “Get through to the next signal time”, not “survive until rescue”.

### Isolation

Studies of people wintering over in Antarctica and on polar expeditions — the closest thing we have to controlled long-term isolation — report sleep disturbance, irritability, low mood, withdrawal and interpersonal tension, as well as positive effects such as growth and camaraderie (Palinkas & Suedfeld, 2008). A mid-mission slump in mood (the “third-quarter phenomenon”) has been reported but is not found consistently.

Alone in the wild, isolation adds the absence of anyone to check your thinking. Practical antidotes: **talk out loud** (describing your plan works like a second person), keep a **written log**, keep **routines of self-care** (washing hands and face, tidying the shelter), and connect to someone you are going home to — many survivors describe this as what kept them going (Gonzales; Leach).`,
    },
    {
      type: 'md',
      md: `### Fatigue and “decision fatigue”

Stage 8 (Lesson 7) showed how **sleep loss**, cold, heat, dehydration, low blood sugar and altitude degrade thinking, and how sleep-deprived people underestimate their own impairment. Chronic partial sleep loss adds up: in a laboratory study, people restricted to 4–6 hours in bed for two weeks built up deficits in attention comparable to one or two nights without any sleep — yet rated themselves only slightly sleepy (Van Dongen et al., 2003). **Several short nights are not “getting by”.**

You will often hear about “**decision fatigue**”: the idea that willpower is a limited resource that every decision uses up (“ego depletion”). Be careful. A large, preregistered replication across 23 laboratories found an ego-depletion effect **close to zero** (Hagger et al., 2016), and the idea remains disputed. What is well supported is simpler: **tiredness, sleep loss, hunger, cold and stress** make decisions worse. The practical advice is the same either way:

- **Make fewer decisions in the moment.** Routines, checklists and rules decided in advance (Lesson 2) turn decisions into habits.
- **Time big decisions.** Decide whether to move, ration or change plans **after food, water and rest**, in daylight, not at 03:00 or at the end of an exhausting day (Stage 8).
- **Share the load.** In a group, rotate who decides routine matters and keep the leader rested for the big ones (Lesson 4).
- **Write it down.** A written plan does not get tired.`,
    },
    { type: 'diagram', id: 's8-sleep-performance', caption: 'From Stage 8: alertness falls with time awake and dips in the early-morning circadian low.' },
    {
      type: 'md',
      md: `### Emotion regulation in a long ordeal

Emotions are not the enemy: fear keeps you careful, and hope keeps you working. The goal is to **regulate** them, not to switch them off. Psychologist James Gross’s *process model* sorts strategies by when they act (Gross, 2015):

1. **Situation selection** — avoid or leave triggering situations: turn back early rather than spend the night on the ridge; don’t pitch the shelter beside a roaring river that keeps you awake.
2. **Situation modification** — change what is around you: light, a fire, warmth, food, a tidy camp.
3. **Attention** — point the mind at a task: counting breaths, carving a spoon, maintaining the fire.
4. **Reappraisal** — change the meaning: “this is a hard night, not the end”; “every hour here is an hour closer to the search”.
5. **Response modulation** — act on the body: slow breathing, movement, food.

Two findings are worth knowing. **Reappraisal** is generally associated with better outcomes than **suppression** (hiding what you feel), which tends to cost effort and memory and to strain relationships (Gross, 2015). And simply **putting a feeling into words** — “I’m scared”, “I’m furious with myself” — reduces the brain’s threat response (Lieberman et al., 2007).`,
    },
    { type: 'diagram', id: 's15-regulation', caption: 'Earlier strategies usually cost less effort than fighting a full-blown emotion.' },
    {
      type: 'md',
      md: `### Giving up

John Leach has described a pattern he calls **“give-up-itis”**, drawing on prisoner-of-war, shipwreck and disaster accounts. He proposes five stages: **social withdrawal → apathy → loss of will to act (aboulia) → almost no spontaneous movement or thought (psychic akinesia) → death** (Leach, 2018). This is a hypothesis built on case reports, not a proven model, but its practical message is consistent with other evidence: it can be **reversed by restoring a sense of control and purpose** — small, meaningful tasks, choices and goals.

**Rule out physical causes first.** Withdrawal, apathy and confusion are also signs of **hypothermia**, **heat illness**, **dehydration**, **low blood sugar**, **head injury**, **carbon-monoxide poisoning** and **altitude illness**. Before treating someone’s “mood”, warm them, feed and water them, check for injury, and look for fuel-burning devices near shelters (Stages 8, 9 and 16).

### Hope, routine, meaning

Post-disaster research points to five elements that help people recover: a sense of **safety**, **calming**, **self- and community efficacy** (“we can do something”), **connectedness** and **hope** (Hobfoll et al., 2007). They are just as useful in a survival camp: a safe, organised camp; calm routines; everyone with a job; staying together; and a realistic, repeated statement of why rescue or self-rescue is going to work.`,
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'When the ordeal is over',
      md: 'Strong feelings, bad dreams, poor sleep and replaying events are common for days or weeks after a frightening experience and usually fade. If they persist beyond a few weeks, get worse, or make daily life hard, talk to a doctor or mental-health professional. This course does not replace professional help.',
    },
  ],
  whyItMatters: 'Most people who die in prolonged survival situations do not die in the first hour. They die after days of poor sleep, cold, hunger and uncertainty have worn down their judgment and their will — often after a bad decision made at night, or after they stopped doing the small things that kept them alive. Routines, timed decisions and deliberate emotional regulation are what carry you from day one to rescue.',
  science: [
    {
      type: 'md',
      md: `### Sleep debt arithmetic

**Sleep debt** is the running total of sleep you needed but did not get:

$$
\\text{debt} = \\sum_{\\text{nights}} (\\text{need} - \\text{sleep obtained})
$$

In words: add up the shortfall night by night. If you need about 8 hours and manage 5 hours a night for three nights in a cold bivouac, the debt is $3 \\times (8 - 5) = 9$ hours. The Van Dongen study suggests that by then your attention may be about as impaired as after a full night without sleep — while you feel only a bit tired.

One long night does not repay the whole debt, but a **10–20 minute nap** improves alertness quickly, and protecting one good night’s sleep (insulation, warmth, a snack before bed — Stage 8) is often the best “decision-making equipment” you have.

### Worked example: timing a big decision

A lost hiker must decide whether to stay or move (Stage 14). It is 02:30 on the second night, she has slept 3 hours, has not eaten since noon and is cold. The same decision at 09:00, after a hot drink, some food, a warm hour in the sun and the morning signal attempt, will be made with better thinking and more daylight ahead. Unless there is **immediate danger**, the rule is: **decide big, irreversible things after food, water, warmth and daylight.**`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Tropical forest.** In 1971, 17-year-old Juliane Koepcke survived a plane break-up over the Peruvian rainforest and walked out alone over 11 days. She has described following streams downhill because her father, a biologist, had taught her that water leads to people — a rehearsed rule that gave her a direction and a daily purpose.

**Arctic / Antarctic.** Winter-over crews at polar stations keep strict routines — fixed mealtimes, work schedules, celebrations — partly to counter the monotony and isolation of months of darkness.

**Coastal / at sea.** Survivors in life rafts often describe routines: fixed times for bailing, watch-keeping, drinking the ration, checking the signal kit. The routine gives each hour a shape.

**Mountain.** Snowbound in a hut for three days, a group sets a daily plan: morning weather check and radio call, snow-melting duty rota, a short walk to the ridge at noon if safe, cards in the evening. Morale holds; the decision to descend is made at 08:00 on a clear morning, not in the evening storm.

**Desert.** A driver stranded with his vehicle rests in shade by day, signals at dawn and dusk, and writes a log of water drunk and vehicles heard. The log turns an open-ended wait into a series of small, finished tasks.

**Urban.** During a week-long winter power cut, an older man living alone stops getting out of bed. A neighbour checks first for cold and dehydration (he is chilled), gets him warm and fed, and then gives him a job — keeping the list of which neighbours have been checked. He is visibly brighter the next day.`,
    },
  ],
  mistakes: [
    'Making big, irreversible decisions at night, exhausted, hungry or cold when there is no immediate danger forcing them.',
    'Myth: “Decision fatigue means you have a fixed number of good decisions per day.” The ego-depletion evidence is weak; tiredness, hunger and stress are the real, well-supported causes.',
    'Believing you are coping fine after several short nights; people under-rate their own impairment.',
    'Treating apathy and withdrawal as “just mood” without first checking for hypothermia, dehydration, low blood sugar, head injury or carbon monoxide.',
    'Waiting passively without a schedule — open-ended waiting feeds uncertainty and despair.',
    'Suppressing all emotion and telling others to “stop being emotional”; name it and redirect it instead.',
    'Leaving a withdrawn person alone to rest without a role or choices.',
  ],
  exercises: [
    {
      id: 's15-l3-e1',
      title: 'A survival-day routine card',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'Pick a realistic scenario: stranded for 72 hours with your car in winter, or lost for two nights in a forest you know.',
        'Write a daily timetable: signal times, drinking and eating times, shelter and fire checks, rest, a log entry, one “morale” item.',
        'Mark which decisions you will only make at a fixed “decision time” after food and daylight (move or stay, rationing changes).',
        'Keep the card with your kit.',
      ],
      success: ['Every block of the day has an activity and a time.', 'Big decisions are tied to a set time and condition, not to mood.'],
      skill: 'decision-loop',
    },
    {
      id: 's15-l3-e2',
      title: 'Reappraisal and labelling practice',
      level: 2,
      safety: 'home',
      minutes: 15,
      steps: [
        'For a week, whenever something frustrates or worries you, write one line naming the feeling (“I feel anxious”) and one line reframing it (“this is uncomfortable and temporary; my next step is…”).',
        'At the end of the week, write three reframes you could use on a cold, lonely night outdoors.',
      ],
      success: ['You have at least seven labelled-and-reframed entries.', 'You have three ready-made field reframes.'],
      skill: 'stress-control',
    },
    {
      id: 's15-l3-e3',
      title: 'Tired-decision audit',
      level: 3,
      safety: 'home',
      minutes: 20,
      steps: [
        'After your next short night, make a list of decisions you made that day — at home, work or on the road.',
        'Rate each: would you have decided differently after a good night’s sleep and a meal?',
        'Write one rule for your trips (e.g., “no route changes after 18:00 without food and a map check with a partner”).',
      ],
      success: ['You wrote at least one concrete fatigue rule for your next trip.'],
      skill: 'risk-assessment',
      safetyNote: 'Do not deliberately deprive yourself of sleep for this exercise, and do not drive when drowsy.',
    },
  ],
  quiz: [
    {
      id: 's15-l3-q1',
      kind: 'single',
      prompt: 'What does the current evidence say about “decision fatigue” as a limited willpower battery (ego depletion)?',
      choices: [
        { id: 'a', text: 'It is firmly established: everyone has a fixed daily quota of good decisions', why: 'A large multi-lab replication found an effect close to zero.' },
        { id: 'b', text: 'The ego-depletion effect is disputed; fatigue, sleep loss, hunger and stress are the well-supported reasons decisions deteriorate', why: 'Correct.' },
        { id: 'c', text: 'Decisions have no effect on performance at all', why: 'Too strong — being tired, hungry or cold clearly matters.' },
        { id: 'd', text: 'Only physical fatigue matters, not sleep', why: 'Sleep loss is one of the best-documented causes of poor decisions.' },
      ],
      answer: 'b',
      concepts: ['decision-fatigue', 'sleep-deprivation'],
      explanation: 'Plan as if tiredness, hunger and stress will degrade your decisions — because they will — and reduce the number of decisions made in the moment with routines and rules.',
    },
    {
      id: 's15-l3-q2',
      kind: 'numeric',
      prompt: 'You need about 8 h of sleep. On a four-night trip you sleep 6, 4, 5 and 5 hours. What is your sleep debt at the end, in hours?',
      unit: 'h',
      answer: 12,
      tolerance: 0,
      concepts: ['sleep-deprivation'],
      explanation: '$(8-6) + (8-4) + (8-5) + (8-5) = 2 + 4 + 3 + 3 = 12$ h — enough for substantial impairment, even if you feel only a bit tired.',
    },
    {
      id: 's15-l3-q3',
      kind: 'multi',
      prompt: 'On day 3 of being stranded, your companion has stopped talking, lies in the shelter and will not eat. What should you check or do **first**?',
      choices: [
        { id: 'a', text: 'Check for hypothermia: feel their core, look for shivering or its absence, confusion', why: 'Yes — cold causes apathy and withdrawal.' },
        { id: 'b', text: 'Give warm, sweet fluid and food if they can swallow safely', why: 'Yes — dehydration and low blood sugar mimic despair.' },
        { id: 'c', text: 'Check for injury, especially head injury', why: 'Yes — a slow bleed can present as withdrawal.' },
        { id: 'd', text: 'Tell them firmly to snap out of it', why: 'No — it adds shame and does nothing for the causes.' },
        { id: 'e', text: 'Check that no stove or fire is burning in the closed shelter', why: 'Yes — carbon monoxide causes drowsiness and confusion.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['give-up-itis', 'hypothermia', 'carbon-monoxide'],
      explanation: 'Rule out the physical killers first. Only then treat it as psychological — with small tasks, choices and a clear reason for hope.',
    },
    {
      id: 's15-l3-q4',
      kind: 'truefalse',
      prompt: 'Suppressing your emotions (hiding what you feel and carrying on) is generally a more effective long-term strategy than reappraising the situation.',
      answer: false,
      concepts: ['emotion-regulation'],
      explanation: 'Research generally favours reappraisal — changing how you interpret the situation — over suppression, which tends to cost effort and memory and to strain relationships.',
    },
    {
      id: 's15-l3-q5',
      kind: 'order',
      prompt: 'Order these emotion-regulation strategies from earliest to latest in the emotional process (Gross’s process model).',
      items: [
        { id: 'select', text: 'Situation selection: turn back before the storm rather than spend the night on the ridge' },
        { id: 'modify', text: 'Situation modification: light a fire and tidy the camp' },
        { id: 'attend', text: 'Attention: focus on carving a spoon' },
        { id: 'reappraise', text: 'Reappraisal: “every hour here is an hour closer to the search”' },
        { id: 'response', text: 'Response modulation: slow breathing' },
      ],
      answer: ['select', 'modify', 'attend', 'reappraise', 'response'],
      concepts: ['emotion-regulation'],
      explanation: 'Earlier strategies act before the emotion builds and usually cost less effort; later ones work once it is already strong.',
    },
    {
      id: 's15-l3-q6',
      kind: 'single',
      prompt: 'Lost overnight with no immediate danger, when should you make the decision whether to stay or to walk out?',
      choices: [
        { id: 'a', text: 'Right away, at 02:00, while you feel the urge to move', why: 'The worst time: circadian low, cold, hungry, dark.' },
        { id: 'b', text: 'After first light, food, water and warmth, at a pre-set decision time', why: 'Correct — better thinking and a full day of light ahead.' },
        { id: 'c', text: 'Whenever you stop feeling afraid', why: 'That may never come; tie it to conditions, not feelings.' },
        { id: 'd', text: 'Let the group vote the moment anyone suggests moving', why: 'Timing and conditions matter more than the method.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'decision-fatigue', 'daylight'],
      explanation: 'Unless there is immediate danger, make big, irreversible decisions in daylight after food and rest (Stage 8 and Stage 14).',
    },
  ],
  scenario: {
    id: 's15-l3-sc',
    setup: 'Late autumn in a subarctic forest. You and your friend Jonas have been stranded by a broken-down ATV for two days, 25 km from the road. Your trip-plan contact expected you yesterday. You have a tarp shelter, a fire, some food and a stream. Since this afternoon Jonas has stopped helping, sits staring at the fire, answers in single words and says “what’s the point, nobody is coming”. The temperature tonight will be −8 °C.',
    question: 'What is the best plan for this evening?',
    choices: [
      { id: 'a', text: 'Leave him to rest; he needs time alone to come round.', why: 'Withdrawal tends to deepen when left alone — and you have not ruled out cold or hunger.' },
      { id: 'b', text: 'Check him for cold and injury, get him warm with a hot sweet drink and food; then explain the search timeline (“they missed us yesterday; a search is likely under way”), give him a job — keeping the fire and the signal log — and agree a plan for tomorrow morning.', why: 'Best: physical causes first, then certainty, control and purpose.' },
      { id: 'c', text: 'Set off tonight to walk the 25 km out so you can get help faster.', why: 'A big, irreversible decision at night in −8 °C, leaving a vulnerable person alone, while a search is probably starting.' },
      { id: 'd', text: 'Tell him firmly that giving up is not an option and he must pull himself together.', why: 'Pressure and shame rarely restore motivation; tasks and control do.' },
    ],
    best: 'b',
    debrief: 'Apathy in the cold is a physical warning first (hypothermia, low blood sugar, dehydration — Stage 8) and a psychological one second. Once warmth and food are sorted, uncertainty is shrunk with facts (the trip plan and the search timeline from Stage 14), and control is restored with a meaningful role. The stay-or-move decision waits for daylight and a fed, rested mind.',
    concepts: ['give-up-itis', 'hypothermia', 'isolation-uncertainty', 'stay-or-move'],
  },
  summary: [
    'Uncertainty and isolation wear people down; **schedules, logs, short horizons and a search timeline** give them edges.',
    'Sleep debt **adds up**, and people under-rate their impairment.',
    '“Decision fatigue” as a willpower battery is **disputed**; tiredness, hunger, cold and stress are the real, well-supported culprits — so use routines and time big decisions.',
    'Regulate emotions early where you can; **reappraise** and **name** feelings rather than suppress them.',
    '**Giving up** has recognisable stages; rule out physical causes first, then restore **control, purpose and hope**.',
  ],
  furtherReading: ['leach-giveupitis-2018', 'palinkas-suedfeld-2008', 'gross-2015', 'deep-survival'],
  references: ['grupe-nitschke-2013', 'palinkas-suedfeld-2008', 'van-dongen-2003', 'williamson-feyer-2000', 'hagger-2016', 'gross-2015', 'lieberman-2007', 'leach-giveupitis-2018', 'hobfoll-2007', 'leach-survival-psych', 'deep-survival', 'koester-lpb'],
}
