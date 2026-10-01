import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's8-l7',
  stage: 8,
  order: 7,
  title: 'Sleep, fatigue and cognition',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l5'],
  concepts: ['sleep-deprivation', 'night-vision', 'cognitive-degradation', 'stress', 'decisions'],
  objectives: [
    'Quantify the effects of **sleep loss** (17–19 h awake ≈ 0.05 % blood alcohol) and the **circadian low** around 03:00–06:00.',
    'Explain how cold, heat, dehydration, low blood sugar, hypoxia and stress **stack** to degrade cognition.',
    'Describe **dark adaptation** (cones in 5–10 min, rods over 20–40 min) and how to protect and use night vision.',
    'Apply countermeasures: sleep strategy, naps, checklists, buddy checks and decision timing.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 showed how acute stress narrows attention. This lesson adds the slower, physical drains on the brain — lost sleep, exhaustion, and the environmental stresses from earlier lessons — and one sense that changes completely at night: vision.

### Sleep loss

Adults need roughly **7–9 hours** of sleep. After about **17–19 hours awake**, performance on reaction-time and coordination tasks is comparable to a blood alcohol concentration of **0.05 %**; after longer, it approaches 0.1 %. Worse, sleep-deprived people **underestimate** their impairment, and **microsleeps** — lapses of a few seconds — appear without warning.

Two processes set alertness: **sleep pressure**, which builds the longer you are awake, and the **circadian rhythm**, which dips to its lowest in the early morning (about 03:00–06:00) and a smaller dip in early afternoon. The worst decisions tend to come when both line up — the second night of an epic, before dawn.`,
    },
    { type: 'diagram', id: 's8-sleep-performance', caption: 'Alertness falls with time awake and dips in the circadian low (illustrative).' },
    {
      type: 'table',
      head: ['Stressor', 'Typical cognitive effect', 'Cheap countermeasure'],
      rows: [
        ['Sleep loss', 'Slower reactions, lapses, poor risk judgment, irritability', 'Protect sleep; 10–20 min naps; decide big things after rest'],
        ['Cold (mild hypothermia)', 'Slowed thinking, apathy, poor coordination', 'Warmth and calories before tasks'],
        ['Heat', 'Poor attention and working memory; confusion in heat stroke', 'Shade, pace, cooling'],
        ['Dehydration (≥ 2 %)', 'Worse attention, mood and headache', 'Drink to thirst, planned water stops'],
        ['Low blood sugar', 'Irritability, poor concentration, shakiness', 'Regular carbohydrate snacks'],
        ['Hypoxia (altitude)', 'Slowed thinking, poor judgment, reduced night vision', 'Slow ascent; descend if worsening'],
        ['Acute stress / fear', 'Tunnel vision, rigid thinking, freezing', 'Breathing control, STOP, simple plans'],
      ],
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'They stack',
      md: 'A cold, hungry, dehydrated person who has slept badly for two nights is impaired far more than any one factor suggests — and is the least able to notice. Use **checklists** for critical tasks (navigation checks, anchor and knot checks, stove and CO safety), make **buddy checks** normal, and make big decisions — stay or move, route choice — **early in the day**, after food and rest.',
    },
    {
      type: 'md',
      md: `### Night vision

Your retina has two light-sensing systems. **Cones** give colour and sharp central vision in daylight. **Rods** are far more sensitive but colour-blind and absent from the very centre of vision (the fovea). In the dark, cones reach their best sensitivity within **5–10 minutes**; rods keep improving for **20–40 minutes** as their pigment (rhodopsin) regenerates. A single look at a bright white light bleaches rhodopsin and costs you much of that work.

Practical consequences:

- Give your eyes **30 minutes** of darkness before you need them; use a **dim red** light for map reading (rods are relatively insensitive to red).
- Close one eye when a light is unavoidable — the covered eye keeps its adaptation.
- Use **averted vision**: look about 10–20° to the side of a faint object, onto the rod-rich retina, and it appears.
- **Scan** slowly with short pauses; rods detect movement well but objects fade if you stare.
- Hypoxia degrades night vision noticeably at altitude, and fatigue, dehydration and smoking do too.`,
    },
    { type: 'diagram', id: 's8-dark-adaptation', caption: 'Dark adaptation: cones plateau quickly; rods take 20–40 minutes.' },
  ],
  whyItMatters: 'Many survival stories turn on a decision made at 2 a.m., on day three, by someone cold, hungry and exhausted. You cannot always avoid those states, but you can know their effects, build systems that do not rely on a sharp brain, and keep one of your most useful night-time tools — dark-adapted vision — working.',
  science: [
    {
      type: 'md',
      md: `### How big is the impairment?

Williamson and Feyer (2000) kept volunteers awake for 28 hours and compared their test performance with measured alcohol doses. After **17–19 hours** awake, performance on several tests was equal to or worse than at **0.05 % BAC**; response speeds on some tests were up to 50 % slower. Many countries set their driving limit at 0.05 %.

A simple sleep-debt model: if you need 8 h and sleep 5 h for three nights, your debt is $3 \\times 3 = 9$ h. One long night does not fully repay it; performance recovers over several nights.

### Naps and sleep inertia

Waking from deep sleep brings **sleep inertia** — grogginess lasting 15–30 minutes. A **10–20 minute nap** mostly avoids deep sleep and gives a quick boost; a **~90 minute nap** covers a full cycle. Before a critical task, allow time to wake properly after sleeping.

### Why rods are slow

Rhodopsin, bleached by light, is regenerated by a chemical cycle that takes tens of minutes. Rod sensitivity after full dark adaptation is thousands of times higher than immediately after bright light — roughly **3–4 log units** in the classic dark-adaptation curve. Red light (above ~620 nm) stimulates rods weakly, so it preserves adaptation while still letting cones read a map.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain epic.** A climbing party benighted on a ridge decides at 04:00 to descend a different, unknown gully to “save time”. Fatigue, cold and the circadian low combine; the classic advice is to wait for first light unless staying is dangerous.

**Desert.** Travelling at night to avoid heat means working through your circadian low. Plan navigation checks at fixed intervals, travel in pairs, and sleep in shade through the midday hours.

**Coastal and marine.** Watch-keeping at sea at 03:00 is when things are missed; mariners use red light and fixed scanning routines.

**Arctic winter.** Long darkness disrupts sleep and circadian rhythm; schedules, light exposure in the day and consistent sleep times help.

**Urban disaster.** Responders and families after an earthquake often go days with little sleep; shift systems (even informal ones) keep someone rested for decisions.`,
    },
  ],
  mistakes: [
    'Believing you can “push through” sleep loss with willpower — impairment is physiological and underestimated.',
    'Myth: carrots give you night vision. Vitamin A deficiency causes night blindness, but extra carrots do not improve normal night vision (the story was wartime propaganda).',
    'Checking a phone or headlamp on full white beam, then trying to see into the dark.',
    'Staring straight at a faint object at night instead of using averted vision.',
    'Making irreversible decisions in the early-morning low when waiting for light is possible.',
    'Relying on memory rather than checklists when exhausted.',
  ],
  exercises: [
    {
      id: 's8-l7-e1',
      title: 'Measure your own dark adaptation',
      level: 3,
      safety: 'home',
      minutes: 50,
      materials: ['A room that can be made fully dark', 'A few faint objects (e.g., a light-grey card with numbers written in pencil)', 'A red light (or red cellophane over a torch)', 'A clock you can read without light, or a helper'],
      steps: [
        'Spend a few minutes in bright light, then turn off all lights.',
        'Every 5 minutes, try to read the faint card; note what you can see. Try looking slightly to one side (averted vision).',
        'At 30 minutes, briefly switch on the red light, read something, switch it off; check whether you lost adaptation.',
        'Then glance at a white light for 2 seconds with one eye covered; compare the two eyes.',
      ],
      success: ['You recorded improvements up to about 20–40 minutes.', 'You observed averted vision, the red-light effect and the one-eye trick.'],
      safetyNote: 'Move carefully in the dark; clear trip hazards first.',
      skill: 'night-vision-discipline',
    },
    {
      id: 's8-l7-e2',
      title: 'Fatigue-proof checklist',
      level: 1,
      safety: 'home',
      minutes: 25,
      steps: [
        'Pick three critical tasks for your trips (e.g., navigation decision point, stove/CO safety in a tent, river-crossing go/no-go).',
        'Write a 4–6 item checklist for each that a tired person could follow.',
        'Test each on someone who has not read this lesson; revise.',
      ],
      success: ['Three short checklists written and tested.'],
      skill: 'decision-loop',
    },
  ],
  quiz: [
    {
      id: 's8-l7-q5',
      kind: 'single',
      prompt: 'Your group is lost but safe in a sheltered spot at 03:30. Someone wants to leave now to find the trail. Considering physiology, what is the strongest argument for waiting?',
      choices: [
        { id: 'a', text: 'Fatigue and the circadian low impair judgment; first light is only ~2 h away.', why: 'Correct — darkness also degrades vision; staying is safe, so waiting costs little and avoids deciding at the worst time.' },
        { id: 'b', text: 'Search teams do not operate at night, so moving now gains nothing.', why: 'Not true, and not the key reason.' },
        { id: 'c', text: 'Moving in the dark is always wrong, whatever the situation is.', why: 'Sometimes moving is necessary (e.g., immediate danger).' },
        { id: 'd', text: 'Eyes cannot adapt to darkness, so the headlamp is all you have.', why: 'They can, over 20–40 minutes.' },
      ],
      answer: 'a',
      concepts: ['cognitive-degradation', 'stay-or-move', 'decisions'],
      explanation: 'The circadian low, fatigue and darkness all degrade judgment and vision. Make big, irreversible decisions after rest and in daylight when you can.',
    },
    {
      id: 's8-l7-q2',
      kind: 'single',
      prompt: 'Which of these habits does **not** protect or make good use of your night vision?',
      choices: [
        { id: 'a', text: 'Using a dim red light for map reading', why: 'It helps — rods are relatively insensitive to red.' },
        { id: 'b', text: 'Closing one eye when a bright light is unavoidable', why: 'It helps — the covered eye stays adapted.' },
        { id: 'c', text: 'Looking slightly to the side of a faint object', why: 'It helps — averted vision uses rod-rich retina.' },
        { id: 'd', text: 'Checking your phone on full brightness every few minutes', why: 'Correct — it bleaches rhodopsin again and again.' },
      ],
      answer: 'd',
      concepts: ['night-vision'],
      explanation: 'Dark adaptation takes 20–40 minutes and seconds to lose. Use dim red light, protect one eye, and use averted vision.',
    },
    {
      id: 's8-l7-q3',
      kind: 'single',
      prompt: 'Which statement about vitamin A (for example from carrots) and night vision is correct?',
      choices: [
        { id: 'a', text: 'Deficiency causes night blindness; extra does not improve normal vision.', why: 'Correct — the carrot story is only half true.' },
        { id: 'b', text: 'Eating extra carrots noticeably sharpens a healthy person’s night vision.', why: 'Myth for a well-nourished person.' },
        { id: 'c', text: 'Extra vitamin A shortens dark adaptation from 30 minutes to a few.', why: 'Adaptation still takes 20–40 minutes; extra vitamin A does not speed it up.' },
        { id: 'd', text: 'Vitamin A has no role in night vision; the carrot link is pure myth.', why: 'Deficiency really does cause night blindness.' },
      ],
      answer: 'a',
      concepts: ['night-vision'],
      explanation: 'Myth. Vitamin A deficiency causes night blindness, but extra vitamin A does not enhance normal night vision.',
    },
    {
      id: 's8-l7-q1',
      kind: 'single',
      prompt: 'After about how many hours awake does performance resemble a blood alcohol concentration of 0.05 %?',
      choices: [
        { id: 'a', text: '8–10 hours', why: 'Too early for most people.' },
        { id: 'b', text: '17–19 hours', why: 'Correct (Williamson & Feyer, 2000).' },
        { id: 'c', text: '36 hours', why: 'By then impairment is much worse.' },
        { id: 'd', text: 'Only after 48 hours', why: 'Impairment comparable to alcohol appears far sooner.' },
      ],
      answer: 'b',
      concepts: ['sleep-deprivation'],
      explanation: 'About 17–19 hours awake resembles 0.05 % BAC. A long day that started at 06:00 reaches this by midnight.',
    },
    {
      id: 's8-l7-q4',
      kind: 'single',
      prompt: 'You need 8 h of sleep but get 4.5 h, 5 h and 6 h on three nights. What is your total sleep debt?',
      choices: [
        { id: 'a', text: '8.5 h', why: 'Correct — 3.5 + 3 + 2.' },
        { id: 'b', text: '15.5 h', why: 'That is the total you slept, not the shortfall.' },
        { id: 'c', text: '2.8 h', why: 'That is the average debt per night, not the total.' },
        { id: 'd', text: '6.5 h', why: 'This counts only the first two nights.' },
      ],
      answer: 'a',
      concepts: ['sleep-deprivation'],
      explanation: '(8 − 4.5) + (8 − 5) + (8 − 6) = 3.5 + 3 + 2 = **8.5 h**.',
    },
  ],
  scenario: {
    id: 's8-l7-sc',
    setup: 'Day 3 of an unexpected bivouac after a canyon flood blocked your exit. You have slept about 3 hours a night, food is low, and it is 02:00. Water is available and your camp is safe. Your partner proposes starting a 6-hour scramble out now “while it is cool”, by headlamp, on an unfamiliar route.',
    question: 'What is the best decision?',
    choices: [
      { id: 'a', text: 'Go now while it is cool — the midday heat is the bigger risk.', why: 'Heat matters, but a technical unfamiliar route at the circadian low with a big sleep debt is a high-consequence gamble.' },
      { id: 'b', text: 'Sleep until first light (~05:30), eat, then go with a turnaround time.', why: 'Best: repays some sleep, uses daylight for the hard part, and still avoids the midday heat; add a checklist of route decision points.' },
      { id: 'c', text: 'Stay awake and talk through the route in detail until dawn.', why: 'Burns the chance to sleep.' },
      { id: 'd', text: 'Split up so that the stronger of you can move out faster.', why: 'Splitting impaired people adds risk.' },
    ],
    best: 'b',
    debrief: 'Sleep debt and the circadian low stack on hunger and stress. With a safe camp, waiting three hours for light buys vision, judgment and a nap; starting at first light still beats the heat. Use a checklist and turnaround time because you are impaired.',
    concepts: ['sleep-deprivation', 'cognitive-degradation', 'daylight'],
  },
  summary: [
    '17–19 h awake ≈ 0.05 % BAC; you underestimate your impairment.',
    'Circadian low ≈ 03:00–06:00; avoid big decisions there when you can.',
    'Cold, heat, dehydration, hunger, hypoxia and stress stack — use checklists and buddy checks.',
    'Dark adaptation: cones 5–10 min, rods 20–40 min; red light, one eye closed, averted vision.',
  ],
  furtherReading: ['williamson-feyer-2000', 'webvision-dark-adaptation', 'leach-freeze-2004'],
  references: ['williamson-feyer-2000', 'webvision-dark-adaptation', 'leach-freeze-2004', 'deep-survival'],
}
