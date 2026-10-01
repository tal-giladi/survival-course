import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's9-l1',
  stage: 9,
  order: 1,
  title: 'Scene safety and the patient assessment system',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l3'],
  concepts: ['scene-safety', 'patient-assessment', 'vital-signs', 'soap-note', 'training-scope'],
  objectives: [
    'Run a **scene size-up** before touching a patient: hazards, mechanism, number of patients, protection, resources.',
    'Perform a **primary survey** in order and fix life threats as you find them.',
    'Take a **secondary survey**: head-to-toe exam, vital signs, **SAMPLE** history and **OPQRST** for pain.',
    'Record the patient on a **SOAP note** with a timed vital-signs table.',
    'Say which parts of this lesson you can practise at home and which need a hands-on **WFA/WAFA/WFR** course.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'warning',
      title: 'This stage is a primer, not a certificate',
      md: 'Wilderness first aid is a *hands-on* skill. This stage gives you the frameworks, the reasons and the decision logic, and it marks every skill as **home-practicable** or **formal-training-only**. Then take a real course — Wilderness First Aid (WFA, ~16 h), Wilderness Advanced First Aid (WAFA, ~40 h) or Wilderness First Responder (WFR, ~70–80 h) from NOLS, SOLO, the Red Cross or an equivalent provider where you live. Content here follows the Wilderness Medical Society (WMS) practice guidelines and ILCOR-based first-aid guidelines (2024 AHA/Red Cross).',
    },
    {
      type: 'md',
      md: `### Why "wilderness" first aid is different

Urban first aid assumes an ambulance in 10–15 minutes. In the wilderness, help may be **hours or days** away, the weather is part of the problem, and you must decide *whether and how* to move the patient. So wilderness courses add three things: **prolonged care** (keeping someone warm, fed, hydrated and monitored for hours), **improvisation** (splints, litters, shelters from what you carry), and **evacuation decisions**. All of it rests on one routine: the **Patient Assessment System (PAS)**.`,
    },
    { type: 'diagram', id: 'pas-flow', caption: 'The Patient Assessment System. It is a loop: any change sends you back to the start.' },
    {
      type: 'md',
      md: `### 1. Scene size-up — before you touch anyone

This is STOP (lesson s1-l3) applied to a casualty. From a safe spot, pause for ten seconds and ask:

- **Is the scene safe — for me, for bystanders, for the patient?** Rockfall, avalanche slope, moving water, lightning, traffic, fire, unstable structures, hostile animals, carbon monoxide in a tent or snow cave. If not safe, **make it safe or don't go in**. A second casualty doubles the problem and halves the rescuers.
- **What happened (mechanism of injury)?** A 5 m fall, a tumble on a talus field, a sudden collapse in heat — the mechanism tells you which hidden injuries to suspect.
- **How many patients?** Look for others — the quiet one is often the worst.
- **Protection:** gloves (nitrile in every kit), eye protection if there is spurting blood.
- **Resources:** who can help, what kit is there, how do we call out?

If the patient is in danger and you can move them safely, move them the **minimum distance** that removes the hazard — even with a suspected spine injury. Then start the primary survey.`,
    },
    {
      type: 'md',
      md: `### 2. Primary survey — find and fix what kills first

Introduce yourself, ask permission ("I know first aid — can I help you?"), and check **responsiveness** with **AVPU**: **A**lert, responds to **V**oice, responds to **P**ain, **U**nresponsive. An alert person is described by orientation: A+Ox4 knows *who* they are, *where* they are, *when* it is and *what happened*.

Then go through the life threats **in order**, fixing each before moving on. Many wilderness curricula use a variant of **X-ABCDE**:

| Step | Look for | Immediate action (details in lessons 2–3) |
|---|---|---|
| **X** — eXsanguinating bleeding | Spurting or pooling blood | Pressure, packing, tourniquet |
| **A** — Airway | Obstruction, vomit, snoring | Open, clear, recovery position |
| **B** — Breathing | Absent, laboured, abnormal | Position; CPR if not breathing normally |
| **C** — Circulation | Other bleeding; signs of shock | Control; lie flat; keep warm |
| **D** — Disability | Level of responsiveness, spine concern | Keep still; protect |
| **E** — Environment / Expose | Cold, heat, wet ground; hidden wounds | Insulate, shelter; look under clothing |

**Fix as you find.** You do not finish the checklist while someone bleeds out.`,
    },
    {
      type: 'md',
      md: `### 3. Secondary survey — the full picture

Once life threats are controlled, do three things:

1. **Head-to-toe exam.** Look, ask and feel from head to feet: pain, tenderness, deformity, swelling, wounds, bleeding, fluid from ears or nose, abnormal chest movement, abdominal tenderness, circulation/sensation/movement (CSM) in hands and feet. Look under clothing where the mechanism suggests injury — but re-cover quickly in the cold.
2. **Vital signs** — the baseline you will compare everything to (see the chart below).
3. **History.** **SAMPLE**: *Symptoms, Allergies, Medications, Past medical history, Last intake and output (food, drink, urine, stool), Events leading up.* For pain, **OPQRST**: *Onset, Provokes/Palliates, Quality, Region/Radiates, Severity (0–10), Time/Trend.*`,
    },
    { type: 'diagram', id: 'vitals-ranges', caption: 'Adult vital signs at rest. The single most useful thing you can do with them is repeat them.' },
    {
      type: 'md',
      md: `### 4. SOAP — the record and the plan

Write it down. Memory fails under stress, and the rescue team, doctor or hand-over needs a clear story. A **SOAP note** has four parts: **S**ubjective (what the patient says: age, sex, chief complaint, SAMPLE, OPQRST), **O**bjective (what you find: scene, exam, vitals with *times*), **A**ssessment (a problem list, most serious first, plus anticipated problems) and **P**lan (for each problem: treatment, monitoring interval, evacuation decision).`,
    },
    { type: 'diagram', id: 'soap-layout', caption: 'A SOAP note. Waterproof paper and a pencil belong in every first-aid kit.' },
    {
      type: 'md',
      md: `### 5. Monitor and reassess

Repeat vitals every **5–15 minutes** for an unstable patient and at least **hourly** for a stable one. Look at the **trend**: a pulse that goes 88 → 96 → 108 over 30 minutes is a louder alarm than any single number. Any worsening sends you back to the primary survey. Lesson 9 goes deeper.`,
    },
    { type: 'sim', id: 'patient-assessment', caption: 'Work a mock patient: size up, fix life threats in order, take vitals over time, then read your generated SOAP note.' },
    {
      type: 'table',
      head: ['Practise at home (with a partner or on paper)', 'Needs a hands-on course (WFA/WAFA/WFR)'],
      rows: [
        ['Scene size-up talk-through on any walk', 'Assessment on moulaged "patients" in real weather with instructor feedback'],
        ['Pulse, breathing rate, AVPU and skin checks on a willing partner', 'Blood pressure, pulse oximetry interpretation'],
        ['SAMPLE and OPQRST interviews with a friend role-playing', 'Focused spine assessment ("clearing" the spine)'],
        ['Writing SOAP notes from case descriptions', 'CPR and airway adjuncts (take a CPR course too)'],
      ],
      caption: 'What you can and cannot learn from home.',
    },
  ],
  whyItMatters: 'Most first-aid errors in the backcountry are not errors of technique but of sequence: rushing into a dangerous scene, treating the painful ankle while missing the quiet bleeding, forgetting to re-check. A fixed routine protects you from your own adrenaline — the same reason STOP exists — and gives the rescue service a clear, written picture that speeds the right response.',
  science: [
    {
      type: 'md',
      md: `### Counting vitals accurately

A pulse is usually counted for **15 seconds and multiplied by 4** (or 30 s × 2). The price of speed is precision: miss one beat in 15 s and your reading is off by 4 beats/min; in 30 s, by 2. For a trend you want the *same* method every time.

**Worked example.** You count 26 beats in 15 s: $26 \\times 4 = 104$ beats/min. Fifteen minutes later you count 29: $29 \\times 4 = 116$. A rise of 12/min in 15 minutes, with no exertion, is a trend worth acting on — even though "116" alone might just look like pain or anxiety.

Breathing rate is counted **without telling the patient** (people change their breathing when watched), for 30 s × 2.`,
    },
    {
      type: 'md',
      md: `### Why the mechanism matters: energy

Injury is energy delivered to tissue. The kinetic energy of a falling body is $E = m g h$: mass × gravity (9.8 m/s²) × height. A 70 kg person falling 1 m carries $70 \\times 9.8 \\times 1 \\approx 690$ J; from 5 m, about 3.4 kJ — five times as much, all delivered in a fraction of a second. That is why a "significant mechanism" (a fall of more than about standing height onto rock, a high-speed ski crash) raises your suspicion of head, spine, chest and abdominal injuries even when the patient says they're fine.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** A climber is hit by a falling rock at the base of a crag. The hazard (more rockfall) is still active. Size-up says: helmets on, move the patient 20 m away from the base along the path the party used — then primary survey.

**Coastal.** A person is lying on rocks at the tide line, waves washing over their legs. The incoming tide is the immediate danger; move them above the tideline before anything else.

**Urban.** A cyclist is down in the road. Traffic is the hazard: bystander with a light and hi-vis directs cars, then you approach.

**Arctic/subarctic.** A snowmobiler is unresponsive in a snow cave with a running stove. Suspect **carbon monoxide** — ventilate and get everyone into fresh air before you help, or you'll be the next patient.

**Tropical forest.** A hiker collapses beside a trail. You notice a wasp nest disturbed in the ground nearby — move away first.`,
    },
  ],
  mistakes: [
    'Rushing to the patient without a size-up — the most common way rescuers become casualties.',
    'Finishing the whole checklist before controlling the bleeding you found in step one ("fix as you find").',
    'Taking one set of vitals and never repeating it — the trend is the information.',
    'Treating the loud, painful injury and missing the quiet one (abdominal bleeding, a second patient).',
    'Keeping everything in your head — without a written SOAP note, times and trends are lost.',
    'Myth: "don’t move a casualty, ever". Move the minimum distance needed to escape a real hazard, protecting the spine as well as you can.',
  ],
  exercises: [
    {
      id: 's9-l1-e1',
      title: 'Vital signs on a partner: resting, after exercise, after recovery',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['A willing partner', 'Watch with seconds', 'Pencil and waterproof notebook'],
      steps: [
        'Find the radial pulse (thumb side of the wrist) and the carotid (beside the windpipe — press one side only, gently).',
        'Record at rest: pulse (15 s × 4), breathing rate (30 s × 2, without announcing it), AVPU/orientation, skin colour-temperature-moisture.',
        'Your partner does 2 minutes of step-ups. Re-measure immediately, then every 2 minutes for 10 minutes.',
        'Draw the trend on paper. How long did recovery take? How much did the 15 s method vary from a full 60 s count?',
      ],
      success: ['You can find a radial pulse in under 10 seconds.', 'Your table has times, and your trend graph shows recovery toward baseline.'],
      skill: 'fa-vitals',
      safetyNote: 'Only light exercise for a healthy partner. Never press both carotid arteries at once.',
    },
    {
      id: 's9-l1-e2',
      title: 'Full patient assessment drill with a role-play patient',
      level: 3,
      safety: 'home',
      minutes: 45,
      materials: ['Partner with a written "patient card" (injury, SAMPLE answers, vitals that change on cue)', 'Gloves', 'SOAP form'],
      steps: [
        'Your partner writes a secret card (e.g., "fell 2 m, hurts left wrist, allergic to penicillin, pulse rises every 5 min").',
        'Start at the "scene": say your size-up aloud (hazards, mechanism, number of patients, gloves).',
        'Primary survey out loud: AVPU, X-ABCDE; your partner tells you findings only when you check them.',
        'Secondary survey: head-to-toe, vitals, SAMPLE, OPQRST. Repeat vitals twice.',
        'Write the SOAP note and state an evacuation plan. Swap roles.',
      ],
      success: ['Scene size-up happened before hands-on care.', 'No findings on the card were missed.', 'SOAP note has times for every vitals set.'],
      skill: 'patient-assessment',
    },
    {
      id: 's9-l1-e3',
      title: 'Book a hands-on course',
      level: 1,
      safety: 'formal-training',
      minutes: 20,
      steps: [
        'Find WFA/WAFA/WFR courses within reach (NOLS, SOLO, Red Cross WRFA, or your country’s equivalents; in the UK look for outdoor first-aid courses meeting your governing body’s requirements).',
        'Check hours, practical share, certification period (usually 2–3 years) and whether CPR is included.',
        'Put the date in your calendar — this whole stage is preparation for that course.',
      ],
      success: ['You have a named course and a date.'],
      skill: 'patient-assessment',
    },
  ],
  simulations: ['patient-assessment'],
  quiz: [
    {
      id: 's9-l1-q2',
      kind: 'single',
      prompt: 'You arrive at a hiker lying at the bottom of a gully. Rocks are still trickling down from above and she is moaning in pain. What do you do first?',
      choices: [
        { id: 'a', text: 'Hurry straight to her and check her airway, since she may be struggling to breathe.', why: 'Rushing in under active rockfall risks a second casualty — you.' },
        { id: 'b', text: 'Stop at a safe spot, size up, then move her the minimum distance out of the fall line.', why: 'Correct — the scene hazard is the most immediate threat to both of you; moving her a short distance (protecting her neck as you can) is justified before the primary survey.' },
        { id: 'c', text: 'Leave her exactly where she lies, because moving a patient can injure the spine.', why: 'A real, ongoing hazard outranks spinal concerns. Move minimally and carefully.' },
        { id: 'd', text: 'Take a full set of vitals where she lies before deciding whether to move her.', why: 'Vitals come in the secondary survey, after the scene and life threats.' },
      ],
      answer: 'b',
      concepts: ['scene-safety', 'immediate-danger'],
      explanation: 'Immediate danger first (lesson s1-l3): a minimal, careful move out of the fall line, then the primary survey. The rescuer’s safety is part of the patient’s safety.',
    },
    {
      id: 's9-l1-q6',
      kind: 'single',
      prompt: 'Which set of findings is the most worrying?',
      choices: [
        { id: 'a', text: 'A single pulse of 104 in a hiker who has just scrambled up a steep slope.', why: 'Exertion explains it; repeat after rest.' },
        { id: 'b', text: 'Pulse 88 → 98 → 110 over 30 minutes of rest after a fall, skin turning pale and moist.', why: 'Correct — a rising pulse at rest with changing skin signs is a trend toward shock.' },
        { id: 'c', text: 'A resting pulse of 58 in a fit, relaxed trail runner sitting beside the trail.', why: 'Low resting heart rates are normal in fit people.' },
        { id: 'd', text: 'A breathing rate of 16 per minute, with skin that is pink, warm and dry.', why: 'Normal.' },
      ],
      answer: 'b',
      concepts: ['vital-signs', 'monitoring'],
      explanation: 'Trends beat single readings. A steady climb at rest with pale, moist skin suggests compensating shock.',
    },
    {
      id: 's9-l1-q5',
      kind: 'single',
      prompt: 'A patient answers your questions and knows who she is and where she is, but not the day or what happened. How do you record her mental status?',
      choices: [
        { id: 'a', text: 'A+Ox4 — she is alert and answering your questions', why: 'Ox4 requires orientation to person, place, time and event; she knows only two of them.' },
        { id: 'b', text: 'A+Ox2 — alert, oriented to person and place only', why: 'Correct — alert, but oriented only to who and where.' },
        { id: 'c', text: 'A+Ox3 — alert, oriented to person, place and time', why: 'She does not know the day, so she is not oriented to time.' },
        { id: 'd', text: 'V — she responds only when you speak to her', why: 'She is alert and answering questions, so she is A, not V.' },
      ],
      answer: 'b',
      concepts: ['vital-signs', 'patient-assessment'],
      explanation: 'Ox4 means oriented to person, place, time and event. Knowing only who and where is A+Ox2 — an important finding, especially after a head injury.',
    },
    {
      id: 's9-l1-q1',
      kind: 'single',
      prompt: 'Which sequence is the correct order of the Patient Assessment System?',
      choices: [
        { id: 'a', text: 'Scene size-up → primary survey → secondary survey → SOAP note → monitor', why: 'Correct — safety, life threats, full picture, written plan, repeat.' },
        { id: 'b', text: 'Primary survey → scene size-up → secondary survey → SOAP note → monitor', why: 'The scene comes first: you cannot help anyone if you become a casualty.' },
        { id: 'c', text: 'Scene size-up → secondary survey → primary survey → SOAP note → monitor', why: 'Life threats (primary survey) are fixed before the detailed exam and vitals.' },
        { id: 'd', text: 'Scene size-up → primary survey → SOAP note → secondary survey → monitor', why: 'The SOAP note and plan are built from the secondary survey findings, so they come after it.' },
      ],
      answer: 'a',
      concepts: ['patient-assessment', 'scene-safety'],
      explanation: 'Safety → life threats → full picture (exam, vitals, SAMPLE) → written plan → monitor and reassess. Any deterioration takes you back to the primary survey.',
    },
    {
      id: 's9-l1-q4',
      kind: 'single',
      prompt: 'You count 23 radial pulse beats in 15 seconds. What is the heart rate?',
      choices: [
        { id: 'a', text: '92 beats/min', why: 'Correct — 23 × 4 = 92.' },
        { id: 'b', text: '138 beats/min', why: 'This multiplies by 6, as if the count had been over 10 seconds.' },
        { id: 'c', text: '46 beats/min', why: 'This multiplies by 2, as if the count had been over 30 seconds.' },
        { id: 'd', text: '69 beats/min', why: 'This multiplies by 3, as if the count had been over 20 seconds.' },
      ],
      answer: 'a',
      concepts: ['vital-signs'],
      explanation: 'A 15-second count is multiplied by 4 (60 / 15): 23 × 4 = 92 beats/min — within the normal adult range of 60–100.',
    },
    {
      id: 's9-l1-q3',
      kind: 'single',
      prompt: 'Which of these does **not** belong in a **SAMPLE** history?',
      choices: [
        { id: 'a', text: 'Allergies', why: 'It belongs — the A.' },
        { id: 'b', text: 'Last food, drink, urine and stool', why: 'It belongs — L is last intake and output.' },
        { id: 'c', text: 'Pulse rate', why: 'Correct — pulse is a vital sign (objective), not history.' },
        { id: 'd', text: 'Events leading up to the problem', why: 'It belongs — the E.' },
      ],
      answer: 'c',
      concepts: ['soap-note'],
      explanation: 'SAMPLE is Symptoms, Allergies, Medications, Past history, Last in/out, Events. Vitals go in the Objective section.',
    },
  ],
  scenario: {
    id: 's9-l1-sc',
    setup: 'Late afternoon in a desert canyon, 36 °C. Two friends ahead of you shout for help: one has fallen about 3 m from a ledge and is lying in the sandy wash. Thunderheads are building upstream; you heard distant thunder ten minutes ago. The injured friend is groaning and says his leg hurts.',
    question: 'What is your best first sequence?',
    choices: [
      { id: 'a', text: 'Splint his leg right away so he is comfortable, then deal with the weather once he is settled.', why: 'Treats the obvious injury and ignores both the scene hazard and hidden life threats.' },
      { id: 'b', text: 'Treat the wash as a flash-flood path: make a short, supported move to higher ground, then do the primary survey.', why: 'Best: the flood risk is the immediate danger; moving him the minimum distance with helpers, supporting his leg and head, is justified, then life threats are checked.' },
      { id: 'c', text: 'Do a thorough head-to-toe exam and SAMPLE history where he lies, as moving him could worsen his injuries.', why: 'Thorough, but in the wrong order: a flash flood could arrive in minutes.' },
      { id: 'd', text: 'Leave him where he is and hurry back to the trailhead for help before the storm arrives.', why: 'Leaves him in a flood path with unknown life threats.' },
    ],
    best: 'b',
    debrief: 'This is STOP and the 12 questions from Stage 1 in medical form: **immediate danger first**. Flash floods in desert washes can arrive from storms you cannot see. After a minimal, supported move to high ground, run the primary survey (bleeding, airway, breathing, circulation), then the secondary. A 3 m fall is a significant mechanism — suspect more than the leg.',
    concepts: ['scene-safety', 'immediate-danger', 'patient-assessment'],
  },
  summary: [
    'Scene size-up first: hazards, mechanism, number of patients, gloves, resources.',
    'Primary survey X-ABCDE — **fix as you find**.',
    'Secondary survey: head-to-toe, vital signs, SAMPLE, OPQRST.',
    'Write a SOAP note with timed vitals; repeat vitals and watch trends.',
    'Practise vitals, interviews and SOAP notes at home; learn hands-on assessment on a WFA/WAFA/WFR course.',
  ],
  furtherReading: ['nols-wm-book', 'nols-wm', 'solo', 'redcross-wrfa'],
  references: ['nols-wm-book', 'auerbach', 'wms-org', 'fa-aha-arc-2024', 'fa-ilcor', 'nols-wm', 'solo', 'redcross-wrfa'],
}
