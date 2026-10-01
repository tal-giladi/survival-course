import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's15-l1',
  stage: 15,
  order: 1,
  title: 'Fear, panic and freezing',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s1-l5'],
  concepts: ['fear-response', 'defence-cascade', 'freezing', 'panic', 'stress', 'stress-control'],
  objectives: [
    'Explain the **fast and slow threat pathways** and why strong stress shifts control from deliberate planning to habit.',
    'Distinguish **attentive freezing, cognitive freezing, tonic immobility and panic**, and what helps each.',
    'Evaluate the “**10–80–10**” claim and the **mass-panic myth** against the research evidence.',
    'Use **if–then plans**, breathing and short, specific commands to break a freeze in yourself and in others.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 (Lesson 5) introduced the acute stress response, freezing and paced breathing. This lesson looks under the bonnet: *why* the brain behaves this way, which reactions are actually common in emergencies, and which popular beliefs about fear are wrong.

### Two routes from threat to action

A sudden threat — a crack of thunder on a ridge, a car sliding towards you, smoke under a door — is processed along two broadly parallel routes:

- A **fast route** through the **amygdala** and deep brain structures that flags danger and starts the body response — adrenaline, a jump in heart rate, a startle, or a freeze — **before you have consciously recognised what is happening**.
- A **slower route** through the sensory cortex and the **prefrontal cortex (PFC)**, which builds the detailed picture, appraises it (“it’s a branch, not a snake”), plans and can calm the alarm.

The PFC is what you need for navigation, rationing and weighing options. It is also the part most sensitive to stress chemistry: high levels of noradrenaline and dopamine released in acute stress **weaken PFC function**, while strengthening more primitive, habitual responses (Arnsten, 2009). In plain terms: **under strong stress you fall back on what is already wired in** — your habits and training — and building a new plan becomes much harder.`,
    },
    { type: 'diagram', id: 's15-threat-circuit', caption: 'The body reacts on the fast route before the slow route has finished thinking. Strong stress tips control towards habits.' },
    {
      type: 'md',
      md: `### “Freezing” is several different things

| Response | What is happening | What it looks like | What helps |
|---|---|---|---|
| **Attentive freeze** | A normal, brief defensive pause: body still, heart may slow, senses sharpen (Roelofs, 2017) | Standing stock-still at a noise, staring | Usually resolves in seconds; it is preparation for action |
| **Cognitive freeze** | The brain has no ready-made response, and building one from scratch is slow under stress (Leach, 2004) | Blank look, repeating the same useless action, “I don’t know what to do” | A **rehearsed** plan; a simple, specific instruction from someone else |
| **Tonic immobility** | An involuntary shutdown when a threat seems overwhelming and escape impossible (Kozlowska et al., 2015) | Rigid, unable to move or speak, even though aware | Not a choice — do not blame. Move the person to safety, speak calmly, give time |
| **Panic** (individual) | Runaway alarm: hyperventilation, pounding heart, sense of doom | Fast shallow breathing, tingling, dizziness, flight without direction | Slow exhale, grounding, one small task |

The **defence cascade** describes how these responses tend to shift as a threat gets closer and escape seems less possible: orienting → attentive freeze → flight or fight → tonic immobility → collapse. The stages overlap and are not a strict sequence, but the picture explains why a person can be frozen solid in one moment and sprinting the next.`,
    },
    { type: 'diagram', id: 's15-defence-cascade', caption: 'The defence cascade — a model, not a timetable.' },
    {
      type: 'md',
      md: `### Is panic common? Mostly not.

Films show crowds stampeding in blind panic. Decades of **disaster research** show something different: **mass panic is rare**. People in fires, shipwrecks, bombings and earthquakes usually behave reasonably and often cooperatively — helping strangers, queuing on stairs, carrying the injured (Clarke, 2002; Drury, Cocking & Reicher, 2009). Deadly crushes happen, but mostly because of crowd density and blocked exits, not because individuals lost their minds.

The more common and more dangerous failure is the opposite: **under-reaction**. People **delay** — they look for more information, wait for someone else to act, finish what they are doing, collect belongings, or tell themselves it is probably nothing. In survival terms, *the time you lose by not starting* often matters more than the time you lose by panicking.`,
    },
    { type: 'diagram', id: 's15-response-split', caption: 'The famous “10–80–10” picture, with the caveat it deserves.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Evidence check: the “10–80–10 rule”',
      md: 'John Leach described disaster behaviour as roughly **10–15 % calm and effective, about 75 % stunned and bewildered, and 10–15 % counter-productive** (Stage 1 used these figures). Trainers often round it to “10–80–10”. Treat it as a **teaching heuristic, not a measured law**: the percentages come from Leach’s reading of case descriptions rather than systematic counts, the numbers change from telling to telling, and disaster sociologists stress that most people act sensibly and cooperatively. What survives the scrutiny is useful: **many people slow down and wait for a lead** — which is why a calm person giving simple instructions can move a whole group.',
    },
    {
      type: 'md',
      md: `### Breaking a freeze

**In yourself**

1. **Pre-load the response.** Rehearsal (Stage 1) is the cure for cognitive freezing because it swaps *building* a plan for *retrieving* one. Make it concrete with **if–then plans**: “*If* I hear thunder on the ridge, *then* I turn around and head for the col.” “*If* I lose the path, *then* I stop, mark the spot and do STOP.”
2. **Start with the body.** Do one small physical thing: sit down, put a hand on the rock, take the map out. Action breaks paralysis more easily than thought.
3. **Breathe with a long exhale.** For example, in for 4 s and out for 6 s. This slows heart rate and gives the PFC room to work.
4. **Say it out loud.** “I’m frightened. Plan: shelter, then signal.” Speaking forces a sequence.

**In others**

- Use **short, loud, specific, positive commands**: “**Unclip. Move left. To me. Now.**” — not “Don’t panic!” or “Be careful!”. Cabin crews are trained to shout exactly this kind of command during evacuations because frozen people follow clear instructions.
- Use the person’s **name** and make **eye contact**.
- Give **one job at a time**: “Hold this torch. Point it at the rope.”
- For someone hyperventilating: sit them down, slow your own voice, breathe *with* them (“in… and slowly out”), and help them notice their surroundings (“tell me three things you can see”). Do **not** use a paper bag, and remember that shortness of breath can also be asthma, a heart problem or altitude illness — if it does not settle, treat it as a medical problem (Stage 9).`,
    },
    { type: 'diagram', id: 'stress-curve', caption: 'From Stage 1: the more complex the task, the less arousal it tolerates.' },
  ],
  whyItMatters: 'In most emergencies the first minute decides a great deal — leaving a burning building, getting off a ridge, starting an avalanche search, getting out of a sinking car. The biggest time-thieves in that minute are freezing and denial, not wild panic. Knowing what the brain is doing lets you plan and rehearse so that the first thing you do is the right thing, and lets you lead others who are frozen.',
  science: [
    {
      type: 'md',
      md: `### Chemistry on two timescales

- **Seconds:** the sympathetic nervous system and adrenaline raise heart rate, blood pressure and breathing; blood shifts to large muscles; pupils widen. This is the part you feel.
- **Minutes to hours:** the hypothalamic–pituitary–adrenal axis releases **cortisol**, which peaks some tens of minutes after the stressor begins and keeps energy available. This is why you can still feel shaky and irritable long after the danger has passed — and why the *second* decision after a scare is often worse than the first.

### Why hyperventilation makes things worse

Fast, deep breathing blows off carbon dioxide faster than the body makes it. Blood CO₂ falls and the blood becomes more alkaline; blood vessels in the brain narrow and nerves become irritable. Result: **dizziness, tingling in the lips and fingers, chest tightness and a feeling of unreality**, which feel like proof that something terrible is happening — so the breathing speeds up further. Slowing the exhale breaks the loop.

### Worked example: breathing rate

A pattern of 4 s in and 6 s out takes $4 + 6 = 10$ s per breath. Breaths per minute:

$$
\\text{rate} = \\frac{60\\ \\text{s/min}}{10\\ \\text{s/breath}} = 6\\ \\text{breaths/min}
$$

That is roughly half a typical resting rate (about 12–20 breaths per minute) and a common target for slow-breathing practice. Box breathing (4-4-4-4) is $60/16 \\approx 3.75$ breaths per minute.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (avalanche).** A skier watches her partner disappear in a slide. Her first second is a freeze. Because she has practised companion rescue, the next thought is a rehearsed script — “last-seen point, transceiver to search” — and she is searching within half a minute. An untrained friend beside her stands frozen until she shouts: “Tom! Transceiver on search, follow me!”

**Coastal (capsize).** A sea kayaker capsizes in cold water. Cold shock makes him gasp and breathe fast (Stage 8). He has practised the wet exit: hands to the grab loop, push, out. The drill runs almost by itself; he then floats and slows his breathing before trying anything complicated.

**Forest / rural (bushfire).** Australian fire agencies urge people to decide in advance whether to leave early. The reason is psychological as much as physical: late decisions made with smoke and embers around are exactly when people freeze or improvise poorly.

**Urban (building fire).** Office workers hear the alarm and keep typing, waiting for someone else to move — classic under-reaction. One colleague stands up and says: “Everyone out, stairs on the left, leave your bags.” The whole floor follows.

**Desert.** A lost hiker realises the car is not where she thought. Her heart races and she wants to walk fast in any direction. She sits in the shade, does one minute of slow breathing, drinks, and only then gets the map out — preventing the “panic walk” that makes many lost people harder to find.

**Arctic / subarctic.** In a whiteout on a frozen lake, a snowmobiler cannot see the shore. His if–then plan — “if I lose visibility, stop, stay with the machine and wait for it to clear” — stops him from driving blind towards open water.`,
    },
  ],
  mistakes: [
    'Myth: “People panic in disasters.” Mass panic is rare; delay, denial and waiting for others are far more common and just as deadly.',
    'Myth: “Freezing means cowardice.” Freezing is a normal brain response; rehearsal and clear instructions fix it.',
    'Myth: “The 10–80–10 rule is a proven statistic.” It is a teaching heuristic from case descriptions; use the lesson, not the numbers.',
    'Myth: “Slap a panicking person” or “breathe into a paper bag.” Neither is recommended; calm voice, slow breathing together, one task.',
    'Shouting “Don’t panic!” — it names the thing you want to avoid and gives no action. Give a specific command instead.',
    'Waiting for the fear to go away before acting. Act on the simple, rehearsed step while breathing.',
    'Assuming breathlessness is “just panic” without considering asthma, heart problems, altitude or injury.',
  ],
  exercises: [
    {
      id: 's15-l1-e1',
      title: 'Write five if–then plans',
      level: 2,
      safety: 'home',
      minutes: 25,
      steps: [
        'Pick five emergencies you could plausibly face on your trips or at home (e.g., thunder on a ridge, lost the path, partner falls, smoke in the stairwell, capsize).',
        'For each, write one sentence: “If [clear trigger], then I [first physical action], then [second action].”',
        'Read them aloud once a day for a week, then rehearse each one mentally with your eyes closed — see, hear and feel it.',
        'Carry them on your trip card with your 12 questions from Stage 1.',
      ],
      success: ['You can recite each trigger and first action instantly.', 'Every first action is physical and specific, not “stay calm”.'],
      skill: 'stress-control',
    },
    {
      id: 's15-l1-e2',
      title: 'Command voice with a partner',
      level: 2,
      safety: 'home',
      minutes: 20,
      materials: ['A partner', 'Two or three household objects'],
      steps: [
        'Your partner acts “frozen” in a pretend situation (e.g., sitting in a car you imagine is filling with water, or on a “ledge” marked on the floor).',
        'Get them moving using only commands of five words or fewer, starting with their name.',
        'Swap roles. Compare which commands worked: positive and specific (“Unbuckle. Window. Out.”) or negative and vague (“Don’t panic, be careful”).',
      ],
      success: ['You can produce three short, positive commands for each situation without thinking.'],
      skill: 'group-lead',
      safetyNote: 'Role-play only — no real water, heights or vehicles.',
    },
    {
      id: 's15-l1-e3',
      title: 'Breathing under mild challenge',
      level: 2,
      safety: 'home',
      minutes: 15,
      materials: ['A watch or timer'],
      steps: [
        'Practise 4-in / 6-out breathing for 3 minutes, sitting.',
        'Then do 20 seconds of brisk stair climbing or star jumps (only if you are healthy enough for moderate exercise), and use the same breathing to recover.',
        'Note how long it takes your heart rate or breathlessness to settle with and without the pattern.',
      ],
      success: ['You can switch to the pattern on cue while slightly out of breath.'],
      skill: 'stress-control',
      safetyNote: 'Stop if you feel dizzy or unwell. Do not hold your breath during or after exertion.',
    },
  ],
  quiz: [
    {
      id: 's15-l1-q3',
      kind: 'single',
      prompt: 'A friend freezes on a narrow path as rockfall starts above. What is the best way to get them moving?',
      choices: [
        { id: 'a', text: 'From a safe spot, shout their name and “Run to the boulder! Now!” while pointing at it', why: 'Correct — name, short specific command, clear target and a model, without becoming a second casualty.' },
        { id: 'b', text: 'Shout “Don’t panic!” as loudly as you can so they snap out of it', why: 'Negative commands give no action to take; the frozen person still does not know what to do.' },
        { id: 'c', text: 'Explain quickly how rockfall bounces and why they must get off the path', why: 'Too complex for someone whose planning brain is off-line; they need an action, not a reason.' },
        { id: 'd', text: 'Run back onto the path to them and wait there until they are ready', why: 'You join them in the danger zone, and a frozen person may never become “ready” without a lead.' },
      ],
      answer: 'a',
      concepts: ['freezing', 'emergency-leadership'],
      explanation: 'Frozen people respond to simple, specific, positive commands, a clear target and a model to follow — delivered from a position that keeps you safe.',
    },
    {
      id: 's15-l1-q6',
      kind: 'single',
      prompt: 'Your tent-mate wakes to find the stream rising around the tent in the dark and is hyperventilating. What do you do first?',
      choices: [
        { id: 'a', text: 'Sit them down and speak slowly, using their name', why: 'A good calming step — but not inside a tent that is flooding. Danger comes first.' },
        { id: 'b', text: 'Get both of you out and up to higher ground immediately', why: 'Correct — immediate danger first; calming comes once you are safe.' },
        { id: 'c', text: 'Breathe with them: in… and a long, slow out', why: 'Useful once you are safe, but the rising water is the immediate threat.' },
        { id: 'd', text: 'Give them one small task, like holding the torch', why: 'Restoring agency helps later; it comes after moving out of danger and settling their breathing.' },
      ],
      answer: 'b',
      concepts: ['immediate-danger', 'panic', 'stress-control'],
      explanation: 'Immediate danger first (Stage 1) — calming someone in a flooding tent is the wrong order. Once on high ground: sit them down, use their name, breathe with them, then give them a small task to restore agency.',
    },
    {
      id: 's15-l1-q1',
      kind: 'single',
      prompt: 'Why does strong acute stress make it hard to build a *new* plan while habits still run?',
      choices: [
        { id: 'a', text: 'Stress chemistry weakens the prefrontal cortex and favours habits', why: 'Correct — the part of the brain that plans is the most stress-sensitive.' },
        { id: 'b', text: 'Adrenaline shuts the amygdala down so threats go unnoticed', why: 'The opposite: the threat system is fully active under acute stress.' },
        { id: 'c', text: 'Low blood sugar from the stress response starves the brain', why: 'Hunger can add to the problem but is not the mechanism of acute stress.' },
        { id: 'd', text: 'Fear drains the muscles so that the body cannot act', why: 'Stress prepares the large muscles for action rather than weakening them.' },
      ],
      answer: 'a',
      concepts: ['fear-response', 'stress'],
      explanation: 'High noradrenaline and dopamine impair the PFC and strengthen habit and reflex systems. That is why training and rehearsed if–then plans matter: they are what the stressed brain can still use.',
    },
    {
      id: 's15-l1-q4',
      kind: 'single',
      prompt: 'How should the “10–80–10” split of disaster behaviour be used?',
      choices: [
        { id: 'a', text: 'As a precise statistic for planning evacuation capacity', why: 'It was never measured systematically; the numbers vary between sources.' },
        { id: 'b', text: 'As a heuristic: many people wait for a lead, so give clear instructions', why: 'Correct — the useful lesson survives even though the percentages are shaky.' },
        { id: 'c', text: 'As proof that about 10 % of people in any crowd always panic', why: 'Disaster research finds panic rare; the “counter-productive” group is not simply panickers.' },
        { id: 'd', text: 'Not at all — the numbers are unreliable, so ignore the idea', why: 'Too strong — its practical message is consistent with other research on delay and waiting for others.' },
      ],
      answer: 'b',
      concepts: ['freezing', 'panic'],
      explanation: 'Treat Leach’s split as a teaching picture. The robust point: most people are slowed down, not wild, and respond to a calm lead.',
    },
    {
      id: 's15-l1-q2',
      kind: 'single',
      prompt: 'What does disaster research show about how crowds usually respond to emergencies?',
      choices: [
        { id: 'a', text: 'Mass panic and blind trampling are the most common response', why: 'A popular myth — mass panic is rare in the research.' },
        { id: 'b', text: 'Most people act reasonably; delay and under-reaction are the bigger problems', why: 'Correct — people usually act sensibly and often help each other.' },
        { id: 'c', text: 'Deadly crushes are mostly caused by a few people who panic first', why: 'Crushes are mostly driven by crowd density and exits, not by panicking individuals.' },
        { id: 'd', text: 'Most people abandon others and look after themselves only', why: 'The opposite is common: people often help each other in emergencies.' },
      ],
      answer: 'b',
      concepts: ['panic'],
      explanation: 'Mass panic is rare. People usually act reasonably and often help each other. Delay and under-reaction are much more common problems; deadly crushes are mostly driven by density and exits.',
    },
    {
      id: 's15-l1-q5',
      kind: 'single',
      prompt: 'You breathe in for 3 s and out for 7 s. How many breaths per minute is that?',
      choices: [
        { id: 'a', text: '6 breaths/min', why: 'Correct — one breath takes 10 s, and 60 / 10 = 6.' },
        { id: 'b', text: '8.6 breaths/min', why: 'This divides 60 by the 7 s exhale only and forgets the inhale.' },
        { id: 'c', text: '20 breaths/min', why: 'This divides 60 by the 3 s inhale only and forgets the exhale.' },
        { id: 'd', text: '10 breaths/min', why: 'This confuses the breath length (10 s) with the rate per minute.' },
      ],
      answer: 'a',
      concepts: ['stress-control'],
      explanation: 'One breath takes $3 + 7 = 10$ s, so $60 / 10 = 6$ breaths per minute — about half a normal resting rate.',
    },
  ],
  scenario: {
    id: 's15-l1-sc',
    setup: 'You are guiding two friends through a narrow tropical canyon. The water turns brown and starts rising fast; you hear a roar upstream. There is a ledge 3 m up on the right that you noted on the way in. Your friend Lina is standing mid-stream, staring upstream, not moving. Your other friend is already scrambling towards the ledge.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Wade to Lina and explain calmly that flash floods can rise very fast and she should think about moving.', why: 'Too long and too abstract for someone frozen — and it keeps you both in the channel.' },
      { id: 'b', text: 'From the edge of the channel, shout: “Lina! To me! Right side! Now!” while pointing at the ledge; move up yourself as she comes.', why: 'Best: her name, a short command, a clear target and a model — without making yourself a second casualty.' },
      { id: 'c', text: 'Climb to the ledge first and wait for her to follow when she is ready.', why: 'Safe for you, but a frozen person may never become “ready”; she needs a lead.' },
      { id: 'd', text: 'Shout “Don’t panic!” and keep watching the water to judge how fast it rises.', why: 'Negative commands give no action, and watching the water is itself a freeze.' },
    ],
    best: 'b',
    debrief: 'Freezing in a flash flood is common and deadly; the response is a rehearsed if–then (“if the water browns or roars, then go high immediately” — Stage 12) and a clear, specific command to others. Keep yourself out of the channel: a rescuer who wades in often becomes the second victim.',
    concepts: ['freezing', 'flash-flood', 'immediate-danger', 'emergency-leadership'],
  },
  summary: [
    'Threats are processed on a **fast route** (amygdala → body) and a **slow route** (cortex → planning); strong stress weakens the PFC and favours habit.',
    'Freezing comes in several forms — attentive freeze, cognitive freeze, tonic immobility — plus individual panic; each has a different fix.',
    '**Mass panic is rare**; delay and under-reaction are the common killers.',
    'The **10–80–10** split is a teaching heuristic, not a measured law — but many people do wait for a lead.',
    'Break freezes with **if–then plans**, a physical first action, a long exhale, and **short, specific, positive commands** for others.',
  ],
  furtherReading: ['leach-freeze-2004', 'deep-survival', 'clarke-panic-2002', 'arnsten-2009'],
  references: ['leach-freeze-2004', 'leach-survival-psych', 'deep-survival', 'arnsten-2009', 'roelofs-2017', 'kozlowska-2015', 'clarke-panic-2002', 'drury-2009', 'army-atp-3-50-21', 'nws-flood'],
}
