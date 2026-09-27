import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's1-l1',
  stage: 1,
  order: 1,
  title: 'Thinking like a survivor',
  level: 'beginner',
  minutes: 30,
  prerequisites: [],
  concepts: ['decision-loop', 'twelve-questions'],
  objectives: [
    'Describe how most wilderness emergencies actually develop — as a **chain of small decisions**, not a single dramatic event.',
    'Use the **Observe → Assess → Prioritize → Plan → Act → Reassess** loop on an unfamiliar situation.',
    'Recite the **12 questions** and explain why question 12 — *the next highest-value action* — is the output of the other eleven.',
    'Explain why this course teaches principles and trade-offs instead of a list of tricks.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Most people imagine survival as a skills contest: whoever can light a fire with sticks wins. Incident reports tell a different story. People rarely die because they lacked an exotic technique. They die because a **sequence of ordinary decisions** — a late start, a skipped turnaround time, cotton clothing, pushing on in fading light, not telling anyone the route — stacked up until the margin was gone. Then, under stress, cold and darkness, they made one more poor decision.

The skill that matters most is therefore **decision making under pressure**. Techniques matter, but only as options inside a decision.`,
    },
    {
      type: 'md',
      md: `### The loop

Every situation in this course is worked through the same loop:

1. **Observe** — gather facts: weather, terrain, light, your body, your gear, other people.
2. **Assess** — what do those facts mean? What is dangerous, and how fast is it getting worse?
3. **Prioritize** — which threat will hurt you first or worst? What is the *next highest-value action*?
4. **Plan** — a short, concrete plan with a checkpoint: *"Pitch the tarp in the hollow behind those rocks, then reassess at 17:00."*
5. **Act** — do it, deliberately.
6. **Reassess** — did it work? Has anything changed? Go round again.`,
    },
    { type: 'diagram', id: 'decision-loop', caption: 'The decision loop. It never stops; the 12 questions feed it.' },
    {
      type: 'md',
      md: `The loop deliberately mirrors tools professionals use: land agencies and SAR teams teach **STOP** (Stop, Think, Observe, Plan), wilderness medicine uses a **patient-assessment cycle** that re-checks the patient repeatedly, and military aviators use similar observe–decide–act cycles. Learning one loop well means your reasoning transfers across domains.`,
    },
    {
      type: 'md',
      md: `### The 12 questions

The loop tells you *how* to think. These questions tell you *what* to think about. Ask them in this order — early questions can override later ones.

| # | Question | Why it sits here |
|---|---|---|
| 1 | Am I in immediate danger? | Rockfall, rising water, traffic, fire, avalanche slope — move first, think second. |
| 2 | What are the major environmental threats? | Cold, heat, wet, wind, altitude, darkness, storms. |
| 3 | Do I have injuries? | Bleeding and breathing problems outrank everything except immediate danger. |
| 4 | Where is my water? | Dehydration degrades judgment and can kill within a day in heat. |
| 5 | What is my temperature risk? | Hypothermia and heat illness are the classic wilderness killers. |
| 6 | Where will I shelter? | Shelter is temperature control plus rest. |
| 7 | How will I communicate? | Being found is usually faster than self-rescue. |
| 8 | Should I stay or move? | One of the most consequential — and least reversible — decisions. |
| 9 | What resources do I have? | Gear, clothing, skills, people, daylight, energy. |
| 10 | What is the biggest risk over the next hour? | Forces short-horizon realism. |
| 11 | What is the biggest risk overnight? | Most survival situations are decided by the first night. |
| 12 | What is my next highest-value action? | **The output.** Everything above feeds this. |`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'The key idea',
      md: 'You will rarely have the time, energy or materials to do everything. Survival is choosing **what to do next**, doing it well, and reassessing — again and again.',
    },
  ],
  whyItMatters: `A memorised trick only helps in the exact situation it was designed for. A decision system helps in situations nobody wrote a trick for — which is most real emergencies. Research on survival behaviour (Leach; Gonzales) finds that people who adapt their plans to reality, rather than clinging to the original plan, do better. The loop is how you make adapting a habit.`,
  examples: [
    {
      type: 'md',
      md: `**Forest, autumn, 16:10.** A day hiker realises the trail they are on is not the one on the map. Observe: 90 minutes of daylight, light drizzle, 9 °C, phone at 40 %, no injuries. Assess: the main threat is getting wet and cold after dark, not being "lost" as such. Prioritize: stop wandering (which adds distance and confusion), try to message, protect from wet. Plan: retrace 10 minutes to the last known junction while there is light; if not found by 16:40, stop and prepare for the night. Act. Reassess at 16:40.

**Desert, midday.** A car breaks down on a remote track at 41 °C. The 12 questions quickly show water and heat as the threats; shelter means *shade*; stay-or-move strongly favours staying with the vehicle, which is far easier to find than a person. The highest-value action is to get out of the sun and reduce sweat — not to start walking.

**City, night.** An earthquake knocks out power. Question 1 (immediate danger) dominates: gas smell, damaged structure, aftershocks. Once safe, the same questions apply — water, temperature, communication, stay or go to a shelter.`,
    },
  ],
  mistakes: [
    'Treating survival as a checklist of techniques instead of a sequence of decisions.',
    'Making a plan once and then executing it blindly — skipping **Reassess**.',
    'Jumping to a dramatic action (building a fire, starting to walk out) before checking immediate danger, injuries and weather.',
    'Assuming the environment decides the priorities once and for all; priorities change as the hours pass.',
  ],
  exercises: [
    {
      id: 's1-l1-e1',
      title: 'Make your 12-questions card',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Index card or phone lock-screen image', 'Pen', 'Optional: laminator or clear tape'],
      steps: [
        'Write the loop (Observe → Assess → Prioritize → Plan → Act → Reassess) on one side.',
        'Write the 12 questions on the other side, in order, in your own words.',
        'Keep it in your pocket kit or as a phone image that works offline.',
      ],
      success: ['You can recite the 12 questions from memory, in order.', 'The card is in your day pack or pocket kit.'],
      skill: 'decision-loop',
    },
    {
      id: 's1-l1-e2',
      title: 'Case-study debrief',
      level: 2,
      safety: 'home',
      minutes: 45,
      steps: [
        'Find a published incident report (mountain rescue team annual reports, national park SAR summaries, or a chapter of *Deep Survival*).',
        'List every decision the people made in time order.',
        'Mark the first point where a different decision would have stopped the chain.',
        'For that point, answer the 12 questions as they would have looked to the person at that moment.',
      ],
      success: ['You identified at least three decision points.', 'You can explain what the next highest-value action was at the critical point, using only what the person knew then.'],
      skill: 'decision-loop',
    },
  ],
  simulations: ['priority-triage'],
  quiz: [
    {
      id: 's1-l1-q1',
      kind: 'order',
      prompt: 'Put the decision loop in order.',
      items: [
        { id: 'o', text: 'Observe' },
        { id: 'a', text: 'Assess' },
        { id: 'p', text: 'Prioritize' },
        { id: 'pl', text: 'Plan' },
        { id: 'ac', text: 'Act' },
        { id: 'r', text: 'Reassess' },
      ],
      answer: ['o', 'a', 'p', 'pl', 'ac', 'r'],
      concepts: ['decision-loop'],
      explanation: 'Facts first (observe), then meaning (assess), then choice (prioritize), then a concrete plan, then action — and always a reassessment, because conditions change.',
    },
    {
      id: 's1-l1-q2',
      kind: 'single',
      prompt: 'Which of the 12 questions is the **output** that the others feed into?',
      choices: [
        { id: 'a', text: 'Am I in immediate danger?', why: 'This is the first check, not the output.' },
        { id: 'b', text: 'Should I stay or move?', why: 'An important decision, but one input among several.' },
        { id: 'c', text: 'What is my next highest-value action?', why: 'Correct — every other question exists to answer this one.' },
        { id: 'd', text: 'What resources do I have?', why: 'Resources constrain the options; they are not the decision.' },
      ],
      answer: 'c',
      concepts: ['twelve-questions'],
      explanation: 'The 12 questions end in a single action. Survival is a stream of "what next?" decisions.',
    },
    {
      id: 's1-l1-q3',
      kind: 'truefalse',
      prompt: 'Incident analyses show that most wilderness deaths are caused by a lack of advanced primitive skills such as friction fire.',
      answer: false,
      concepts: ['decision-loop'],
      explanation: 'Most outcomes turn on ordinary decisions — preparation, timing, clothing, communication, and whether people adapted their plans — rather than exotic skills.',
    },
    {
      id: 's1-l1-q4',
      kind: 'single',
      prompt: 'A hiker notices at 16:00 that they are off-route. Night falls at 17:45. They are uninjured, dry and warm. What is the **best first move**?',
      choices: [
        { id: 'a', text: 'Walk faster in the direction that feels right to make up time.', why: 'Moving fast while disoriented is how people get more lost — and more tired.' },
        { id: 'b', text: 'Stop, run STOP/the 12 questions, and decide with the remaining daylight in mind.', why: 'Correct — a few minutes of structured thinking costs little and prevents compounding errors.' },
        { id: 'c', text: 'Start building a debris shelter immediately.', why: 'Shelter may become the priority, but not before assessing whether a short, safe relocation is possible in daylight.' },
        { id: 'd', text: 'Light a signal fire.', why: 'Premature — and possibly illegal or dangerous — before assessing the situation.' },
      ],
      answer: 'b',
      concepts: ['decision-loop', 'stop'],
      explanation: 'Stopping to observe and assess is itself the highest-value first action when there is no immediate danger.',
    },
    {
      id: 's1-l1-q5',
      kind: 'multi',
      prompt: 'Which statements about the 12 questions are true? (Choose all that apply.)',
      choices: [
        { id: 'a', text: 'Earlier questions can override later ones.', why: 'True — immediate danger and injuries come first.' },
        { id: 'b', text: 'You ask them once at the start of an emergency.', why: 'False — you cycle through them every time you reassess.' },
        { id: 'c', text: 'They apply in urban disasters as well as wilderness.', why: 'True — water, temperature, communication and stay/move apply in a city too.' },
        { id: 'd', text: 'Questions 10 and 11 force you to think about different time horizons.', why: 'True — the next hour and the coming night often need different actions.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['twelve-questions'],
      explanation: 'The questions are ordered, repeated, and environment-independent. Two explicit time horizons stop you from solving only the problem in front of you.',
    },
  ],
  scenario: {
    id: 's1-l1-sc',
    setup: 'You are hiking alone on a coastal cliff path in late afternoon. A sea mist rolls in fast; visibility drops to 20 m. The path is narrow with a drop on one side. You are warm, dry, uninjured, with a phone at 60 %, water, a jacket and a headlamp.',
    question: 'What is your next highest-value action?',
    choices: [
      { id: 'a', text: 'Keep walking to the car park 3 km ahead before it gets worse.', why: 'Moving along a cliff edge in 20 m visibility adds a serious fall risk to an otherwise stable situation.' },
      { id: 'b', text: 'Stop well back from the edge, put on your jacket, check your position on the phone map, and decide with that information.', why: 'Best: it removes the immediate danger (edge), protects against the damp, and gathers facts before committing.' },
      { id: 'c', text: 'Call emergency services immediately.', why: 'Reasonable if you cannot move safely — but you have not yet assessed whether you can.' },
      { id: 'd', text: 'Sit down and wait for the mist to clear, however long it takes.', why: 'Waiting may become the right choice, but deciding without checking position, time and weather is premature.' },
    ],
    best: 'b',
    debrief: 'The loop begins with **immediate danger**: the cliff edge in low visibility. Removing that danger and gathering information (position, time to dark, forecast) costs a few minutes and keeps every option open. Calling for help or waiting are both valid *after* assessment — that is the point: decide from facts, not from the first impulse.',
    concepts: ['decision-loop', 'immediate-danger'],
  },
  summary: [
    'Emergencies usually grow from chains of small, ordinary decisions.',
    'The loop — **Observe → Assess → Prioritize → Plan → Act → Reassess** — is repeated, never done once.',
    'The 12 questions are ordered: immediate danger and injuries first; the output is the **next highest-value action**.',
    'This course teaches mechanisms and trade-offs so you can reason about situations no list anticipates.',
  ],
  furtherReading: ['deep-survival', 'leach-survival-psych', 'freedom-hills'],
  references: ['deep-survival', 'leach-freeze-2004', 'army-atp-3-50-21', 'nols-leadership', 'koester-lpb'],
}
