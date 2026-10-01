import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's1-l6',
  stage: 1,
  order: 6,
  title: 'Emergency decision making',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l4', 's1-l5'],
  concepts: ['decisions', 'reversibility', 'stay-or-move'],
  objectives: [
    'Make **good-enough decisions quickly** (satisficing) instead of waiting for certainty.',
    'Prefer **reversible** actions under uncertainty and set a higher bar for irreversible ones.',
    'Write **decision triggers** ("if X by time T, then Y").',
    'Apply a first-pass **stay-or-move** framework.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### You will never have enough information

Emergencies are defined by **uncertainty**: you do not know exactly where you are, how the weather will develop, how serious an injury is, or when help will come. Waiting for certainty is itself a decision — usually a bad one, because daylight and energy are draining away.

Good emergency decisions are **satisficing** decisions (Herbert Simon’s term): choose the first option that is *good enough* and safe, then reassess. Perfect is the enemy of alive.`,
    },
    {
      type: 'md',
      md: `### Reversible vs irreversible

Sort options by how easily you could undo them:

| Reversible (cheap to undo) | Irreversible or costly to undo |
|---|---|
| Putting on layers | Leaving your known location in poor visibility |
| Pitching a tarp where you are | Descending a steep gully you cannot climb back up |
| Sending a text with your position | Drinking untreated water from a dubious source |
| Moving 50 m to a better sheltered spot | Crossing a fast river |
| Waiting 20 minutes to watch the weather | Using your last fuel or battery |

**Under high uncertainty, prefer reversible actions.** They buy information and time. Reserve irreversible actions for when you have strong evidence — or when every alternative is worse.`,
    },
    {
      type: 'md',
      md: `### Decision triggers

A trigger is a decision made **in advance**, while calm, for a situation that may arise later when you are not:

- "If we have not found the trail junction **by 16:30**, we stop and prepare for the night."
- "If the river is above the second rock **at 07:00**, we do not cross."
- "If my partner cannot bear weight **after 20 minutes**, I activate the beacon."
- "If battery drops **below 20 %**, the phone goes off except for scheduled checks."

Triggers turn slow, emotional decisions into fast, mechanical ones — exactly what a stressed brain needs.`,
    },
    {
      type: 'md',
      md: `### Stay or move — the first pass

Search-and-rescue data (Koester, *Lost Person Behavior*) show that searchers find people faster when they **stay put and make themselves visible**, and that many lost people travel surprisingly far from where they first became confused, enlarging the search area. The default for a lost person is therefore:

> **If someone knows your route and when to expect you, and you are not in immediate danger — stay, shelter, and signal.**

Moving becomes the better choice when one or more of these is true:

- **Immediate danger** where you are (flood, fire, avalanche path, rockfall).
- **Nobody knows** you are out or where, so no search will come soon.
- You have a **known, safe route** to help within your daylight and energy budget (e.g., your own tracks, a clear trail, a road you can hear).
- Your location **cannot support survival** (no shelter, no water, extreme exposure) and a better location is close.
- Someone needs **evacuation** faster than rescue can arrive — and moving them is safe.

Stage 14 develops this into a full model. For now: *moving is the irreversible option; it needs the stronger justification.*`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'The two-question test',
      md: 'Before any big decision, ask: **"What happens if I’m wrong?"** and **"Can I undo it?"** If the answers are "something terrible" and "no", find a more reversible option first.',
    },
  ],
  whyItMatters: 'The worst outcomes in incident reports often follow a single irreversible decision made under pressure — pushing on into darkness, crossing the river, leaving the car. Knowing which decisions are one-way doors, and pre-deciding triggers, is how you avoid them.',
  science: [
    {
      type: 'md',
      md: `### The value of information

Sometimes the best action is to **learn something** before committing. Waiting 15 minutes to see whether a storm is heading your way, climbing 30 m to a clearing to look for landmarks, or checking whether your phone has signal all *buy information*.

Information is worth acquiring when (1) it could change your decision, and (2) it costs less than the expected loss from deciding wrongly. A crude version:

$$
\\text{worth it if} \\quad P(\\text{it changes my choice}) \\times (\\text{cost of wrong choice}) > \\text{cost of finding out}
$$

If nothing you could learn would change what you do, stop deliberating and act.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest, lost at 15:00.** Someone knows the route; weather is stable; daylight remains. The reversible options — stay, send a location text from a high point nearby, make yourself visible — are good enough. Trigger: "If no response by 16:30, prepare the night position here."

**Desert, vehicle breakdown.** Staying with the vehicle is almost always right: it is a large, visible target, provides shade, and people will search roads first. Walking in the heat is an irreversible, high-sweat decision.

**Mountain, deteriorating weather.** The known descent is short and in good condition; staying high means exposure to lightning and wind. Here, moving on a *known* route is the reversible-enough choice — a trigger ("descend immediately if we hear thunder") was set earlier.

**Coast.** A tide is rising towards a cove. Immediate danger overrides the default: move now to the planned exit or to ground above the high-water mark.`,
    },
  ],
  mistakes: [
    'Waiting for certainty that will never come while daylight disappears.',
    'Treating moving as the "active" and therefore better choice.',
    'Making irreversible decisions (river crossings, descents into unknown terrain) while exhausted or panicked.',
    'Not setting triggers — and then negotiating with yourself at the critical moment.',
  ],
  exercises: [
    {
      id: 's1-l6-e1',
      title: 'Decision journal',
      level: 2,
      safety: 'home',
      minutes: 20,
      steps: [
        'For one week, log three real decisions per day (they can be ordinary).',
        'For each: was it reversible? What would being wrong cost? Did you satisfice or over-deliberate?',
        'At the end of the week, write three decision triggers for your next outdoor trip.',
      ],
      success: ['21 logged decisions with reversibility noted.', 'Three concrete triggers written with a condition, a time and an action.'],
      skill: 'decision-loop',
    },
  ],
  simulations: ['scenario-lost-1400'],
  quiz: [
    {
      id: 's1-l6-q1',
      kind: 'single',
      prompt: 'Which action is the **most reversible**?',
      choices: [
        { id: 'a', text: 'Crossing a fast, thigh-deep stream to reach a trail you think is on the other side.', why: 'Hard and dangerous to undo.' },
        { id: 'b', text: 'Pitching your tarp 50 m away in a more sheltered hollow.', why: 'Correct — cheap to undo and keeps you near your known location.' },
        { id: 'c', text: 'Descending a steep gully in fading light.', why: 'Often impossible to reverse.' },
        { id: 'd', text: 'Drinking from a stagnant pool without treatment.', why: 'Cannot be undone.' },
      ],
      answer: 'b',
      concepts: ['reversibility'],
      explanation: 'Reversible actions buy time and information. Keep irreversible ones for when the evidence is strong.',
    },
    {
      id: 's1-l6-q2',
      kind: 'single',
      prompt: 'Which of these is **NOT** a good reason to **move** rather than stay put?',
      choices: [
        { id: 'a', text: 'Your location is in the path of a wildfire.', why: 'A valid reason — immediate danger.' },
        { id: 'b', text: 'Nobody knows you are out, so no search will start soon.', why: 'A valid reason — no search will come soon.' },
        { id: 'c', text: 'You feel restless and bored after an hour of waiting.', why: 'Correct — restlessness is a stress response, not a reason to move.' },
        { id: 'd', text: 'Your own clear tracks lead back to the trail, with plenty of daylight.', why: 'A valid reason — a known, safe route within your budget.' },
      ],
      answer: 'c',
      concepts: ['stay-or-move'],
      explanation: 'Move for immediate danger, no one knowing, a known safe route, an unsurvivable location, or an evacuation need. Not for restlessness.',
    },
    {
      id: 's1-l6-q3',
      kind: 'single',
      prompt: 'Which is a well-formed **decision trigger**?',
      choices: [
        { id: 'a', text: '"We’ll see how we feel later and decide then whether to stop for the night."', why: 'No condition, no time, no action.' },
        { id: 'b', text: '"If we haven’t reached the hut by 17:00, we pitch the shelter where we are."', why: 'Correct — condition, time and action.' },
        { id: 'c', text: '"We should be careful and stop early if anything starts to feel wrong."', why: 'An intention, not a trigger: no measurable condition and no time.' },
        { id: 'd', text: '"Let’s keep going until it gets dark, then pitch the shelter wherever we are."', why: 'Uses darkness as the trigger — too late.' },
      ],
      answer: 'b',
      concepts: ['decisions'],
      explanation: 'A trigger has a measurable condition, a time and a pre-chosen action.',
    },
    {
      id: 's1-l6-q4',
      kind: 'single',
      prompt: 'When should you stop gathering information and act?',
      choices: [
        { id: 'a', text: 'When nothing you could still learn would change your decision.', why: 'Correct — information only has value if it could change what you do.' },
        { id: 'b', text: 'When you are certain that your chosen option is the right one.', why: 'Certainty rarely comes in an emergency; waiting for it is itself a bad decision.' },
        { id: 'c', text: 'When you have checked every option you can think of at least once.', why: 'Checking options that cannot change your choice only burns daylight and energy.' },
        { id: 'd', text: 'When the information would take more than a few minutes to get.', why: 'Costly information can still be worth it if it could change a high-stakes choice.' },
      ],
      answer: 'a',
      concepts: ['decisions'],
      explanation: 'Information only has value if it could change what you do. If nothing you could learn would change your choice, stop deliberating and act.',
    },
  ],
  scenario: {
    id: 's1-l6-sc',
    setup: 'You and a friend are day-hiking in unfamiliar hills. At 15:30 the trail fades out. You left a trip plan with a relative (return by 19:00, call for help at 21:00). Weather: dry, 12 °C, calm, forecast stable. You hear a road faintly to the east but cannot see it. Sunset 18:40.',
    question: 'Which plan is best?',
    choices: [
      { id: 'a', text: 'Head east through the bush toward the road sound and keep going until you reach it.', why: 'Sound is deceptive in hills and there is no stop condition — an open-ended, irreversible commitment.' },
      { id: 'b', text: 'STOP and backtrack; if not found by 16:30 check the knoll, by 17:15 settle there.', why: 'Best: reversible steps, information-seeking with limits, and triggers tied to the daylight budget. A search will come if needed.' },
      { id: 'c', text: 'Sit exactly where you are and do nothing at all until the rescue team arrives.', why: 'Staying is reasonable, but with good weather and daylight there are cheap, reversible actions available first.' },
      { id: 'd', text: 'Split up to search for the trail in two directions and meet back here at 16:30.', why: 'Splitting up doubles the number of lost people and removes mutual support.' },
    ],
    best: 'b',
    debrief: 'Because someone knows your plan and the weather is benign, there is no pressure to take irreversible risks. The best plan uses the daylight to try **reversible, information-buying** steps (backtrack to the last certain trail point, then the nearby open knoll to check signal and look for the road), with **triggers** that make the stay decision automatic in time to prepare. Option A might work — but when it fails, it fails far from your last known point, in the dark.',
    concepts: ['stay-or-move', 'reversibility', 'decisions'],
  },
  summary: [
    'Decide with incomplete information: **satisfice**, then reassess.',
    'Prefer reversible actions under uncertainty; irreversible ones need strong evidence.',
    'Pre-set **triggers**: condition + time + action.',
    'Default for the lost: if someone knows your plan and you are safe — **stay, shelter, signal**.',
  ],
  furtherReading: ['koester-lpb', 'deep-survival'],
  references: ['koester-lpb', 'mccammon-traps', 'army-atp-3-50-21', 'leach-survival-psych'],
}
