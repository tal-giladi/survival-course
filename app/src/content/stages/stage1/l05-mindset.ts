import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's1-l5',
  stage: 1,
  order: 5,
  title: 'Survival mindset and stress',
  level: 'beginner',
  minutes: 35,
  prerequisites: ['s1-l1'],
  concepts: ['stress', 'freezing', 'stress-control'],
  objectives: [
    'Describe the **acute stress response** and how it changes perception, thinking and fine motor skill.',
    'Explain why people **freeze** in emergencies and how rehearsal prevents it.',
    'Use **paced breathing** and **task focus** to regain control of attention.',
    'Describe the behaviours associated with the will to survive — and with giving up.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Your body in an emergency

A sudden threat triggers the **acute stress response**: adrenaline and noradrenaline surge, heart rate and breathing climb, blood is redirected to large muscles, and cortisol follows over minutes. This is superb for running from a bear and poor for reading a map.

Typical effects:

- **Tunnel vision** and auditory exclusion — you literally notice less.
- **Loss of fine motor control** — fumbling with a lighter or zip.
- **Degraded working memory** — difficulty holding more than one idea at a time.
- **Time distortion** — seconds feel like minutes, or the reverse.
- A strong urge to **move**, even without a plan.`,
    },
    { type: 'diagram', id: 'stress-curve', caption: 'Some arousal sharpens performance; too much collapses it — especially for complex or fine-motor tasks.' },
    {
      type: 'md',
      md: `### Why people freeze

Survival psychologist John Leach, a former RAF survival instructor, reviewed behaviour in disasters and described a recurring pattern: a minority of people (roughly **10–15 %**) stay relatively calm and act effectively; the large majority (around **75 %**) are stunned and bewildered, with slowed reasoning; and another **10–15 %** behave in counter-productive ways, such as panic or denial. The exact percentages vary; the pattern is robust.

His explanation of freezing is not cowardice but **processing time**. Forming a brand-new plan requires working memory, which stress degrades. People who have **rehearsed** a response — even mentally — can pull it from memory instead of building it from scratch. That is why aircrew brief exits and why this course repeats the same loop and questions until they are automatic.`,
    },
    {
      type: 'md',
      md: `### Regaining control: practical tools

1. **Paced breathing.** Slow exhalation activates the parasympathetic system. Two common patterns:
   - *Box breathing* — in 4 s, hold 4 s, out 4 s, hold 4 s, for 1–2 minutes.
   - *Extended exhale* — in through the nose for 4 s, out slowly for 6–8 s.
2. **Name it.** "I’m scared and my heart is racing. That’s adrenaline. It will settle." Labelling an emotion reduces its intensity.
3. **Shrink the task.** Replace "survive the night" with "put on my jacket", then "find a dry spot to sit". Small completed tasks restore a sense of control.
4. **Routine.** Structure — checking gear, keeping a log, scheduled signaling — fights helplessness over longer periods.
5. **Self-talk and purpose.** Many survivors describe focusing on someone they wanted to return to, or on the next concrete goal.`,
    },
    {
      type: 'md',
      md: `### The will to survive — and giving up

Case studies (Gonzales, *Deep Survival*; Leach’s work on psychogenic death, sometimes called "give-up-itis") point to behaviours common among survivors:

- accepting the situation quickly ("this is real, now what?") rather than denying it;
- **adapting the plan** to reality rather than clinging to the original goal;
- breaking big problems into small, achievable steps;
- humour, gratitude and caring for others;
- maintaining routine and self-care.

The opposite — passivity, withdrawal, loss of initiative — is a warning sign in yourself and in others. The response is to give the person (or yourself) **small, concrete tasks** and choices.`,
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Evidence note',
      md: 'Survival psychology rests on case studies and disaster research, not controlled experiments. Treat percentages as patterns, not laws. The practical advice — rehearse, breathe, shrink the task, keep routines — is consistent across military, aviation and SAR training.',
    },
  ],
  whyItMatters: 'The same person with the same kit can make excellent or terrible decisions depending on their stress state. Controlling arousal is not a soft skill; it is what keeps your hands able to light a stove and your mind able to read a map.',
  science: [
    {
      type: 'md',
      md: `### Heart rate and performance

Law-enforcement and military training literature commonly describes a rough relationship between stress-driven heart rate and task performance: fine motor skills start to degrade in the range of roughly 115–145 beats per minute, and complex motor and cognitive tasks degrade further above that. The exact thresholds are debated and individual, but the direction is well supported: **the more complex or delicate the task, the lower the arousal it tolerates.**

Practical consequence: before any fiddly task — lighting a stove, tying off a tarp line, texting coordinates — take **one minute of slow breathing** first.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Avalanche witness.** A skier sees a partner buried. Those who have *practised* transceiver searches start the search within seconds; those who have not often stand frozen while precious minutes pass. The difference is rehearsal, not courage.

**Night in the desert.** A stranded driver feels panic rising after dark. They name the fear, do two minutes of slow breathing, then give themselves a task: organise the water, set a signal light schedule, write a log entry. The panic recedes.

**Group lost in forest.** One member withdraws and stops talking. The leader gives them a specific job — collecting dry twigs for the fire — which restores their sense of agency.`,
    },
  ],
  mistakes: [
    'Believing you will "rise to the occasion" without rehearsal; under stress you fall to the level of your training.',
    'Trying to reason through a complex decision while hyperventilating — breathe first.',
    'Denial: continuing the original plan because accepting the emergency feels like failure.',
    'Leaving a withdrawn person alone; give them tasks and choices.',
  ],
  exercises: [
    {
      id: 's1-l5-e1',
      title: 'Breathing under mild stress',
      level: 3,
      safety: 'home',
      minutes: 15,
      materials: ['A timed puzzle or a cold (not icy) shower', 'Watch'],
      safetyNote: 'Do not use cold-water immersion (baths, lakes) as a stress drill — cold shock is dangerous. A cool shower or a timed puzzle is enough.',
      steps: [
        'Practise box breathing (4-4-4-4) for 2 minutes while calm, twice a day for a week.',
        'Then use it during a mild stressor: a timed puzzle, a cool shower, a stressful email.',
        'Notice and write down: heart-rate change (if you have a watch), how your attention changed, how long it took.',
      ],
      success: ['You can start paced breathing on cue without counting on your fingers.', 'You have noticed at least one measurable change (heart rate or subjective calm).'],
      skill: 'stress-control',
    },
    {
      id: 's1-l5-e2',
      title: 'Mental rehearsal of three emergencies',
      level: 2,
      safety: 'home',
      minutes: 20,
      steps: [
        'Pick three emergencies you could plausibly face (e.g., lost at dusk, partner injured, flash-flood warning).',
        'For each, close your eyes and walk through the first 5 minutes in detail: what you see, what you say, what your hands do.',
        'Write the first three actions for each on your 12-questions card.',
      ],
      success: ['You can state the first three actions for each emergency without hesitation.'],
      skill: 'decision-loop',
    },
  ],
  quiz: [
    {
      id: 's1-l5-q1',
      kind: 'multi',
      prompt: 'Which are typical effects of the acute stress response?',
      choices: [
        { id: 'a', text: 'Tunnel vision', why: 'Yes — attention narrows.' },
        { id: 'b', text: 'Improved fine motor control', why: 'No — fine motor control degrades.' },
        { id: 'c', text: 'Reduced working memory', why: 'Yes — holding several ideas at once becomes hard.' },
        { id: 'd', text: 'A strong urge to move', why: 'Yes — which is why STOP exists.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['stress'],
      explanation: 'The stress response prepares for gross physical action, at the expense of perception, delicate tasks and complex reasoning.',
    },
    {
      id: 's1-l5-q2',
      kind: 'single',
      prompt: 'According to Leach, what is the main reason people freeze in emergencies?',
      choices: [
        { id: 'a', text: 'Cowardice', why: 'No — freezing is a cognitive bottleneck, not a character flaw.' },
        { id: 'b', text: 'Working memory needs time to build a new response under stress', why: 'Correct — rehearsed responses bypass this.' },
        { id: 'c', text: 'Low blood sugar', why: 'Not the primary mechanism.' },
        { id: 'd', text: 'Lack of physical fitness', why: 'Fitness helps, but freezing is cognitive.' },
      ],
      answer: 'b',
      concepts: ['freezing'],
      explanation: 'Rehearsal lets you retrieve a plan instead of constructing one, which is why training and mental rehearsal prevent freezing.',
    },
    {
      id: 's1-l5-q3',
      kind: 'single',
      prompt: 'You need to light a stove with cold, shaking hands after a scare. What should you do first?',
      choices: [
        { id: 'a', text: 'Try repeatedly and quickly until it works.', why: 'Rushing a fine-motor task under high arousal wastes fuel and matches.' },
        { id: 'b', text: 'One minute of slow breathing, then prepare everything before striking.', why: 'Correct — lower arousal, then a deliberate sequence.' },
        { id: 'c', text: 'Skip the stove; it is too hard.', why: 'Giving up on a key task is a warning sign.' },
        { id: 'd', text: 'Ask someone else to decide.', why: 'Deferring the decision does not fix the physiology.' },
      ],
      answer: 'b',
      concepts: ['stress-control'],
      explanation: 'Delicate tasks tolerate less arousal. A minute of breathing is cheap and often decisive.',
    },
    {
      id: 's1-l5-q4',
      kind: 'truefalse',
      prompt: 'A good response to a group member who becomes withdrawn and passive is to let them rest alone without responsibilities.',
      answer: false,
      concepts: ['stress-control'],
      explanation: 'Rest matters, but withdrawal and loss of initiative respond better to small, concrete tasks and choices that restore agency.',
    },
  ],
  scenario: {
    id: 's1-l5-sc',
    setup: 'At dusk your hiking partner slips on scree and cuts their forearm. There is a lot of blood. Your heart is pounding, your hands are shaking, and your partner is shouting.',
    question: 'What is the best sequence?',
    choices: [
      { id: 'a', text: 'Grab the first-aid kit and start pulling items out as fast as possible.', why: 'Frantic searching under high arousal often loses time and items.' },
      { id: 'b', text: 'Check for further danger (more scree?), then one or two slow breaths while applying firm direct pressure with a gloved hand, then talk calmly to your partner and plan the next step.', why: 'Best: scene safety, the single most important action (pressure), and arousal control — all at once.' },
      { id: 'c', text: 'Run to find phone signal first.', why: 'Leaving a heavily bleeding person unattended loses the most time-critical intervention.' },
      { id: 'd', text: 'Wait until you feel calm before touching the wound.', why: 'Waiting for calm could cost critical minutes; act on the simple, rehearsed step while breathing.' },
    ],
    best: 'b',
    debrief: 'Immediate danger → major bleeding → everything else. Direct pressure is a simple, gross-motor action that works even with shaking hands; slow breathing while doing it lowers your arousal for the finer tasks that follow (dressing, calling for help). Calm words also lower your partner’s stress.',
    concepts: ['stress-control', 'immediate-danger', 'priorities'],
  },
  summary: [
    'Stress narrows attention, degrades fine motor skills and working memory, and urges movement.',
    'Freezing is a processing bottleneck; **rehearsal** is the cure.',
    'Breathe slowly, name the emotion, shrink the task, build routines.',
    'Survivors accept reality fast, adapt plans, and keep taking small steps.',
  ],
  furtherReading: ['deep-survival', 'leach-survival-psych'],
  references: ['leach-freeze-2004', 'leach-survival-psych', 'deep-survival', 'army-atp-3-50-21'],
}
