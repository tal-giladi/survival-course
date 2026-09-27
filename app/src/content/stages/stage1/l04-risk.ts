import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's1-l4',
  stage: 1,
  order: 4,
  title: 'Risk management',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l3'],
  concepts: ['risk', 'human-factors', 'trip-plan'],
  objectives: [
    'Describe risk as **likelihood × consequence** and use a risk matrix.',
    'Explain why **exposure time** compounds small risks.',
    'Recognise the **FACETS** human-factor traps in your own decisions.',
    'Write a **trip plan** with a turnaround time and an overdue procedure.',
  ],
  explanation: [
    {
      type: 'md',
      md: `The best survival situation is the one that never happens. Professionals spend far more effort **preventing** emergencies than surviving them. Risk management is that prevention, done systematically.

### Hazard vs risk

- A **hazard** is something that can cause harm: a river, a cliff, lightning, cold.
- **Risk** is how likely that harm is *and* how bad it would be, given what you are doing.

A river is a hazard. Crossing it in spate at thigh depth is a high risk; walking beside it on a good path is a low one.`,
    },
    { type: 'diagram', id: 'risk-matrix', caption: 'A 5 × 5 risk matrix. Scores are rough; the value is in forcing you to think about both axes.' },
    {
      type: 'md',
      md: `### Controls

For each significant risk, choose controls — ideally several, because each can fail:

1. **Avoid** — choose a different route, day or objective.
2. **Reduce likelihood** — start earlier, check the forecast, carry a map, go with a partner.
3. **Reduce consequence** — carry a first-aid kit, emergency shelter, a satellite messenger; leave a trip plan.
4. **Accept** — knowingly, with a decision point where you will reconsider.`,
    },
    {
      type: 'md',
      md: `### Decision points and turnaround times

A **turnaround time** is a time, set *before* you start, at which you turn back regardless of where you are. It exists because, once you are invested, your judgment about "just a bit further" is unreliable. Good turnaround times are based on:

- time to get back to safety **plus a margin** (at least 25 %),
- daylight, weather forecast, and the slowest member of the group.

Write it down. Tell your partner. Treat it as a commitment, not a suggestion.`,
    },
    {
      type: 'md',
      md: `### FACETS: how good people make bad decisions

Avalanche researcher Ian McCammon analysed accidents and found that experienced people repeatedly fell into the same **heuristic traps** — mental shortcuts that are normally helpful. They apply to every outdoor decision:

| Trap | What it sounds like |
|---|---|
| **F**amiliarity | "I've done this route a dozen times." |
| **A**cceptance | Wanting to be seen as capable by the group. |
| **C**onsistency / commitment | "We've come this far; we planned this for months." |
| **E**xpert halo | "She's the experienced one; she must know it's fine." |
| **T**racks / scarcity | "Someone else went this way" / "This is our only chance this year." |
| **S**ocial facilitation | Taking more risk because others are watching or present. |

Naming the trap out loud ("Is this commitment talking?") is surprisingly effective.`,
    },
    {
      type: 'md',
      md: `### The trip plan

A trip plan converts "nobody knows where I am" into "people will look for me, in the right place, at the right time". It is the single most valuable consequence-reducing control. It contains:

- who is going, with descriptions (clothing colours help searchers), vehicle and registration;
- route, alternatives, and where you plan to camp;
- start time, **expected return time**, and **the time at which your contact should call for help**;
- what you carry (shelter, communication devices, medical kit);
- the number to call (local emergency number, park authority).

Leave it with a responsible person, not just on social media.`,
    },
  ],
  whyItMatters: 'Rescue is often measured in hours to days, and it starts only when someone knows you are missing and where to look. Risk management — especially trip plans and turnaround times — shortens that delay or removes the emergency entirely.',
  science: [
    {
      type: 'md',
      md: `### Small risks compound with exposure

Suppose an activity carries a probability $p$ of an incident per hour, independently each hour. Over $n$ hours the chance of *at least one* incident is

$$
P = 1 - (1 - p)^n
$$

Intuition: each hour you "survive" only with probability $1-p$, and those survivals multiply. With $p = 1\\%$ and $n = 10$: $1 - 0.99^{10} \\approx 9.6\\%$. Doubling exposure time nearly doubles the risk. That is why **reducing time in the hazard** (a faster crossing, an earlier start, a shorter route across the avalanche slope) is such a powerful control.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain day hike.** Hazard: afternoon thunderstorms. Controls: start at dawn, summit by 11:00, turnaround 11:30, route with a lower escape option, check the forecast the night before and the sky every hour.

**Desert.** Hazard: heat, vehicle breakdown. Controls: travel in the cooler hours, carry at least double the water you expect to need, tell someone your route and return time, carry a satellite messenger.

**Coastal.** Hazard: tide cutting off a beach walk. Controls: check tide tables, identify exit points, set a turnaround time relative to low tide.

**Urban.** Hazard: power outage in winter. Controls: stored water, alternative heating that does not produce indoor CO, battery lighting, a family communication plan.`,
    },
  ],
  mistakes: [
    'Rating only likelihood ("it probably won’t happen") and ignoring consequence.',
    'Setting a turnaround time and then negotiating with it on the day.',
    'Leaving a vague trip plan ("going hiking in the national park") or none at all.',
    'Relying on a single control — one phone, one light, one route option.',
    'Believing experience makes you immune: FACETS traps catch experts most.',
  ],
  exercises: [
    {
      id: 's1-l4-e1',
      title: 'Write and use a real trip plan',
      level: 3,
      safety: 'home',
      minutes: 30,
      steps: [
        'Choose a real walk you will do in the next month.',
        'Write a trip plan using the checklist in this lesson, including the time your contact should raise the alarm.',
        'Give it to a responsible person and brief them on what to do.',
        'After the walk, check in on time — and tell your contact you are back.',
      ],
      success: ['Your contact can tell you, unprompted, when and whom to call.', 'You checked in on time.'],
      skill: 'trip-plan',
    },
    {
      id: 's1-l4-e2',
      title: 'Risk-matrix a planned day',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'List at least 6 hazards for a planned trip (weather, terrain, water, darkness, health, navigation…).',
        'Score each for likelihood and consequence (1–5).',
        'For any score ≥ 8, add at least two controls.',
        'Set a turnaround time with a 25 % margin.',
        'Identify which FACETS trap is most likely to affect *you* on this trip.',
      ],
      success: ['Every high risk has at least two independent controls.', 'Your turnaround time is written down and shared.'],
      skill: 'risk-assessment',
    },
  ],
  quiz: [
    {
      id: 's1-l4-q1',
      kind: 'single',
      prompt: 'Which best describes **risk**?',
      choices: [
        { id: 'a', text: 'Anything that can cause harm.', why: 'That is a hazard.' },
        { id: 'b', text: 'The likelihood of harm combined with its severity, given what you are doing.', why: 'Correct.' },
        { id: 'c', text: 'How dangerous an environment feels.', why: 'Perceived danger is often poorly calibrated.' },
        { id: 'd', text: 'The number of hazards on a route.', why: 'Counting hazards ignores likelihood and consequence.' },
      ],
      answer: 'b',
      concepts: ['risk'],
      explanation: 'Hazard is the source of harm; risk is likelihood × consequence in your specific situation.',
    },
    {
      id: 's1-l4-q2',
      kind: 'numeric',
      prompt: 'An activity has a 2 % chance of an incident each hour, independently. What is the probability (in %) of **at least one** incident over 5 hours? (Round to one decimal.)',
      unit: '%',
      answer: 9.6,
      tolerance: 0.2,
      concepts: ['risk'],
      explanation: '$1 - 0.98^5 = 1 - 0.904 = 0.096$ → **9.6 %**. Small hourly risks add up with exposure time.',
    },
    {
      id: 's1-l4-q3',
      kind: 'single',
      prompt: '"We’ve planned this trip for a year and driven six hours — let’s push on even though the storm is early." Which FACETS trap is this?',
      choices: [
        { id: 'a', text: 'Familiarity', why: 'Familiarity is about a known place feeling safe.' },
        { id: 'b', text: 'Consistency / commitment', why: 'Correct — prior investment is driving the decision.' },
        { id: 'c', text: 'Expert halo', why: 'No one is being deferred to here.' },
        { id: 'd', text: 'Social facilitation', why: 'Not about the presence of others.' },
      ],
      answer: 'b',
      concepts: ['human-factors'],
      explanation: 'Sunk costs (time, travel, planning) create pressure to continue. The mountain does not know how far you drove.',
    },
    {
      id: 's1-l4-q4',
      kind: 'multi',
      prompt: 'Which belong in a good trip plan?',
      choices: [
        { id: 'a', text: 'The time at which your contact should call for help', why: 'Yes — this is the most important line.' },
        { id: 'b', text: 'Clothing and pack colours', why: 'Yes — helps searchers.' },
        { id: 'c', text: 'Planned route and alternatives', why: 'Yes — defines where to search first.' },
        { id: 'd', text: 'Vehicle description and where it is parked', why: 'Yes — often the first clue found.' },
        { id: 'e', text: 'A promise to “probably be back by evening”', why: 'No — vague times delay searches.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['trip-plan'],
      explanation: 'A trip plan should let someone who is not you start an effective search.',
    },
    {
      id: 's1-l4-q5',
      kind: 'single',
      prompt: 'The ascent to a viewpoint takes 3 h and the descent 2 h. Sunset is at 18:00 and you want 25 % margin on the descent. What is the latest sensible **turnaround time**?',
      choices: [
        { id: 'a', text: '16:00', why: 'That leaves exactly 2 h — no margin.' },
        { id: 'b', text: '15:30', why: 'Correct — 2 h × 1.25 = 2.5 h before 18:00.' },
        { id: 'c', text: '17:00', why: 'You would descend in the dark.' },
        { id: 'd', text: 'Whenever you reach the top', why: 'That is not a turnaround time.' },
      ],
      answer: 'b',
      concepts: ['trip-plan', 'daylight'],
      explanation: 'Turnaround = sunset − (descent time × 1.25) = 18:00 − 2 h 30 min = 15:30.',
    },
  ],
  scenario: {
    id: 's1-l4-sc',
    setup: 'You are leading two friends up a popular mountain. Your turnaround time is 12:00. At 11:50 you are 20 minutes below the summit. The sky to the west is darkening. Another group passes you going up, laughing. Your friends really want the summit.',
    question: 'What is the best decision?',
    choices: [
      { id: 'a', text: 'Continue — 20 minutes is close, and the other group is going.', why: 'This is commitment + tracks + social facilitation all at once.' },
      { id: 'b', text: 'Turn around at 12:00 as planned, and say why out loud.', why: 'Best: the turnaround time was set when your judgment was not under pressure, and the sky supports it.' },
      { id: 'c', text: 'Send the fittest friend up alone while the others wait.', why: 'Splits the group and puts one person alone at the most exposed place at the worst time.' },
      { id: 'd', text: 'Extend the turnaround to 12:30 and reassess.', why: 'Renegotiating a turnaround time under pressure is exactly what turnaround times are designed to prevent.' },
    ],
    best: 'b',
    debrief: 'Turnaround times are pre-commitments made by your calmer self. The darkening sky is evidence *for* the plan, not against it. Naming the FACETS traps out loud (“is this commitment talking?”) helps a group accept the decision.',
    concepts: ['human-factors', 'trip-plan'],
  },
  summary: [
    'Risk = likelihood × consequence; hazards are just sources of harm.',
    'Exposure time compounds risk: $P = 1-(1-p)^n$.',
    'Layer controls: avoid, reduce likelihood, reduce consequence, accept knowingly.',
    'Set turnaround times in advance and keep them. Name the **FACETS** traps.',
    'A trip plan with a clear alarm time is your best consequence control.',
  ],
  furtherReading: ['mccammon-traps', 'freedom-hills'],
  references: ['mccammon-traps', 'freedom-hills', 'ready-plan', 'koester-lpb', 'mt-hml'],
}
