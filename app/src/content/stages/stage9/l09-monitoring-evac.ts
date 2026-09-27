import type { Lesson } from '../../types'

export const l09: Lesson = {
  id: 's9-l9',
  stage: 9,
  order: 9,
  title: 'Monitoring and evacuation decisions',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s9-l8'],
  concepts: ['monitoring', 'evacuation', 'vital-signs', 'stay-or-move', 'daylight', 'training-scope'],
  objectives: [
    'Monitor a patient over hours: what to measure, how often, and how to read **trends**.',
    'Classify evacuation **urgency** (none, non-urgent, urgent, emergent) from the patient and the trend.',
    'Choose an evacuation **plan** — walk out, carry, wait for a ground team, request a helicopter — from resources, terrain, weather, daylight and communications, with rough **time estimates**.',
    'Build and use an **improvised litter**, send a clear rescue request, and provide long-term patient care while waiting.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Monitoring: the patient is a moving picture

After the SOAP note, your job becomes **watching for change**. Repeat vital signs (LOR, pulse, breathing, skin, and temperature if you can) at intervals set by the patient's stability:

| Patient | Interval |
|---|---|
| Unstable, or just treated for a life threat | every **5 minutes** |
| Potentially unstable (head injury, possible internal bleeding) | every **15 minutes** |
| Stable | every **30–60 minutes**, and at every change of plan |

Write every set with the **time**. Then ask: *better, same or worse?* A patient whose pulse creeps up 10 beats each quarter-hour is telling you something no single reading can. **Any worsening → back to the primary survey**, then reconsider the evacuation plan.`,
    },
    { type: 'diagram', id: 'vitals-trend', caption: 'A trend turns borderline numbers into a clear decision.' },
    {
      type: 'md',
      md: `### Evacuation urgency: from the patient

- **None** — minor, field-treatable (blisters, small cuts, a stable sprain on a short trip, fully rewarmed mild hypothermia). Treat and continue, perhaps with changes.
- **Non-urgent** — needs a doctor eventually but no threat to life or limb now (stable fractures of small bones, a head knock with brief LOC and a normal exam, a wound needing closure). Walk out at a sensible pace, in daylight.
- **Urgent** — needs hospital care within hours; stable now but could worsen (femur fracture, anaphylaxis treated with epinephrine, heat stroke cooled, spreading infection, moderate hypothermia, snakebite).
- **Emergent** — life or limb threatened now (signs of shock, deteriorating LOR, breathing difficulty, severe hypothermia, uncontrolled internal bleeding, loss of circulation beyond a fracture). Fastest safe option.

### Evacuation plan: from the situation

Then filter the options through the practical questions — the same ones as Stage 1's stay-or-move decision:

- **Can the patient walk** (safely, without making the injury worse)?
- **Distance and terrain** to the road-head or a helicopter landing site.
- **Daylight** remaining (Stage 1 daylight budget) and **weather** — can aircraft fly?
- **People**: a litter carry needs about **6 carriers at a time plus relief** — two or three teams for anything more than a short distance.
- **Communications**: phone signal, satellite messenger, radio, or runners.
- **Rescuer risk**: a plan that endangers the group or the rescuers is not a good plan.`,
    },
    { type: 'diagram', id: 'evac-tree', caption: 'Urgency comes from the patient; the plan comes from everything else. Re-decide when the trend changes.' },
    { type: 'sim', id: 'evac-decision', caption: 'Seven cases. Choose urgency and a plan, then compare rough time estimates for every option.' },
    {
      type: 'md',
      md: `### Asking for help: the message

Whether by phone, satellite messenger, radio or a runner's written note, give rescuers what they need to send the right resource:

1. **Location** — coordinates (and datum/format), grid reference, or a clear description; landmarks.
2. **Number of patients**, and **what happened** (mechanism).
3. **Condition** — the SOAP summary: problems, latest vitals **and trend**, treatment given.
4. **Your resources** — people, shelter, food, water, lights, how long you can hold out.
5. **Weather** at your location, terrain hazards, possible landing sites.
6. **What you're requesting**, and how they can reach you (keep the phone on a schedule to save battery — Stage 1).

**Runners** go in **pairs** if possible, with the written message and the plan (where the patient will be, when), and they should not become a second emergency.`,
    },
    {
      type: 'md',
      md: `### Improvised stretchers and carries

- **Short distances / walking-wounded**: a shoulder-assist (patient's arm over your shoulders), a two-person seat carry, or a backpack carry for a light patient (a pack with leg holes cut or with poles through the hip belt).
- **Litters**: two poles (strong branches, paddles, skis) through a tarp folded in thirds, through zipped jackets with the sleeves inside, or through a sleeping bag with holes cut in the bottom corners; a rope litter (taught on courses) woven from a climbing rope.
- **Package the patient**: pad underneath, full hypothermia wrap, secure with straps so they can't slide, head uphill on slopes (unless in shock — then keep level), face visible for monitoring.
- **Carrying**: leader at the head calls every lift and step; swap carriers every few minutes; on steep or dangerous ground, stop — that needs ropes and trained rescuers.

**Helicopters**: follow the crew's instructions; secure loose kit (sleeping mats, tarps fly into rotors); make a clear, flat landing area if asked; approach only when signalled, from the front and in the pilot's view, never near the tail rotor. Air rescue carries its own risks and costs — it is for real need, not convenience.`,
    },
    { type: 'diagram', id: 'improvised-litter', caption: 'A pole-and-tarp litter. Practise with a sandbag, not a friend, and never on hazardous ground.' },
    {
      type: 'md',
      md: `### Long-term care while you wait

Hours or a night with a patient is common. Keep them **warm and dry** (insulate underneath!), **hydrated and fed** if alert and not heading for surgery soon, help them **urinate** (a wide-mouth bottle — holding it in is miserable and a full bladder is a common source of distress), **turn or reposition** them every couple of hours if they can't move, **re-check** dressings, splints and CSM, keep **monitoring** and writing it down, and **talk to them** — fear and pain are real problems, and a calm voice lowers both.`,
    },
    {
      type: 'table',
      head: ['Practise at home / supervised', 'Needs a course or rescue team'],
      rows: [
        ['Evacuation decisions with the Evac Decisions simulator; writing rescue messages from scenarios', 'Leading an evacuation with real patients (WFR scenario days)'],
        ['Building a pole-and-tarp litter; carrying a sandbag or rucksack at ground level with a team', 'Rope litters, technical lowers and raises (SAR / rope rescue training)'],
        ['Planning helicopter-landing-site selection on a map', 'Working around helicopters (rescue team training)'],
        ['Monitoring schedules and SOAP updates over a long role-play', 'Medication decisions in prolonged field care'],
      ],
    },
  ],
  whyItMatters: 'The evacuation decision is where first aid meets the rest of this course: navigation, weather, daylight, group resources and risk. Over-calling urgency puts rescuers at risk and wastes scarce resources; under-calling it costs lives. The trend in your monitoring notes is what makes the call defensible — to yourself, your group and the rescue coordinator.',
  science: [
    {
      type: 'md',
      md: `### Evacuation time maths

Time to definitive care is roughly the sum of its parts. In words: *how long until anyone knows* + *how long until they're ready* + *how long to reach you* + *how long to bring the patient out*:

$$ T \\approx T_{alert} + T_{assemble} + \\frac{d}{v_{in}} + \\frac{d}{v_{out}} $$

**Worked example.** A patient with a broken lower leg, 8 km from the road on a good trail. No signal; two runners walk out at 4 km/h: $T_{alert} = 8/4 = 2$ h. The volunteer team assembles in about 2 h and walks in at ~3.5 km/h: $8/3.5 \\approx 2.3$ h. They carry the litter out at ~1 km/h: 8 h. Total ≈ $2 + 2 + 2.3 + 8 \\approx 14$ hours — overnight. With a satellite messenger, $T_{alert}$ drops to minutes and saves 2 hours; with a helicopter in good weather, the whole thing might take 1–3 hours.

These speeds are **planning assumptions** (a litter on rough ground may manage only a few hundred metres per hour), but the structure explains three practical rules: **carry communication**, **call early** (the clock doesn't start until you do), and **plan for the night** whenever $T$ runs past sunset.`,
    },
    {
      type: 'md',
      md: `### How many carriers?

A loaded litter with an 80 kg patient, bedding and the litter itself weighs about 100 kg. Six carriers take ~17 kg each — sustainable for only a few minutes on rough ground before grip and shoulders fail. Rotating in relief carriers every 5–10 minutes is what keeps the pace; hence two or three teams for any long carry, and why a small group usually can't carry a patient far.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest.** A sprained ankle, 6 km on trail, midday, group of four: tape, redistribute weight, walk out — no rescue needed.

**Boreal wilderness.** A suspected femur fracture 9 km off-trail with three people: impossible to carry. Satellite message with a SOAP summary; helicopter tasked; patient packaged and monitored every 15 minutes.

**Mountain.** A head injury with falling LOR in good weather: emergent — call immediately and request air evacuation.

**Subarctic, storm at dusk.** Mild hypothermia fully rewarmed: stay in the tent tonight; send an "OK, delayed" message so no search launches; reassess at dawn.

**Coastal.** Anaphylaxis treated with epinephrine and improving, 5 km of good path: walk out now with the second pen ready and an ambulance meeting you — faster than waiting.

**Rural hill country, storm, night.** Abdominal injury with rising pulse; eight people and 4 km of trail: call so the ambulance and ground team head in, and carry toward them.

**Urban disaster.** After an earthquake with roads blocked, the "evacuation" might be to a triage point 1 km away on a door used as a stretcher.`,
    },
  ],
  mistakes: [
    'Taking one set of vitals and never writing down the time or the trend.',
    'Calling a helicopter for a walkable, stable injury — or failing to call early for a deteriorating one.',
    'Starting a long litter carry with too few people.',
    'Sending a single runner with no written message.',
    'Forgetting the daylight budget: evacuation plans that run into darkness without preparing for the night.',
    'Neglecting the patient’s warmth, toileting and morale during a long wait.',
  ],
  exercises: [
    {
      id: 's9-l9-e1',
      title: 'Improvised litter build and sandbag carry',
      level: 3,
      safety: 'supervised',
      minutes: 60,
      materials: ['Tarp', 'Two strong poles (~2.5 m)', 'Sleeping mat and bag', 'A 30–40 kg sandbag or heavy rucksack as the "patient"', 'At least 6 people'],
      steps: [
        'Fold the tarp in thirds around the poles; test the friction hold by lifting slowly.',
        'Package the "patient": mat, bag, straps. Face-end marked.',
        'Carry it 200 m on flat, easy ground with a leader calling lifts, steps and swaps.',
        'Time it and extrapolate: how long would 5 km take? How many people would you need?',
      ],
      success: ['The litter held without slipping.', 'Carriers swapped smoothly on command.', 'You can state a realistic km/h and team size.'],
      skill: 'fa-improvised-litter',
      safetyNote: 'Never practise with a live person on the litter over uneven ground, slopes or water; lift with legs, not backs.',
    },
    {
      id: 's9-l9-e2',
      title: 'Evacuation plan and rescue message',
      level: 2,
      safety: 'home',
      minutes: 40,
      steps: [
        'Play the Evacuation Decisions simulator; for two cases you got wrong, write why the best answer is best.',
        'Take the brief’s integrated scenario (injured 4 km from the start at 17:30, falling temperature, 12 % phone battery). Write the rescue message in the six-part format in under 160 characters for a satellite messenger, and a longer version for a phone call.',
        'Estimate evacuation time for walking out, carrying (if possible), and a ground rescue, using the formula in this lesson.',
      ],
      success: ['Your message includes location, patient condition with trend, resources and request.', 'Your time estimates show every term of the formula.'],
      skill: 'fa-evac-plan',
    },
    {
      id: 's9-l9-e3',
      title: 'Take the course',
      level: 4,
      safety: 'formal-training',
      minutes: 960,
      steps: [
        'Complete a WFA (≈16 h) at minimum; WAFA or WFR if you lead groups or travel remote.',
        'During the course, ask for at least one full scenario that includes a long monitoring period and an evacuation decision.',
        'Mark your first-aid skills in the skill tracker honestly: "practiced" after the course, "competent" only after repeated realistic practice.',
      ],
      success: ['Certificate earned; renewal date in your calendar.'],
      skill: 'patient-assessment',
    },
  ],
  simulations: ['evac-decision', 'patient-assessment'],
  quiz: [
    {
      id: 's9-l9-q1',
      kind: 'single',
      prompt: 'A patient with a closed lower-leg fracture has vitals: 14:00 pulse 84; 14:15 pulse 86; 14:30 pulse 85; alert and warm. What is the evacuation urgency?',
      choices: [
        { id: 'a', text: 'Emergent — request a helicopter now.', why: 'Stable vitals and no limb threat; emergent resources are for life or limb threats.' },
        { id: 'b', text: 'Urgent-to-non-urgent — organise evacuation (the patient can’t walk), keep monitoring every 15–30 min.', why: 'Correct — stable trend; the leg must be seen, but there is no immediate threat.' },
        { id: 'c', text: 'None — splint and continue the trip.', why: 'A patient who can’t walk on a fracture needs to leave.' },
        { id: 'd', text: 'Decide after one more hour of observation without calling anyone.', why: 'The call starts the clock; an evacuation of a non-walking patient takes hours to organise.' },
      ],
      answer: 'b',
      concepts: ['evacuation', 'monitoring'],
      explanation: 'Urgency comes from the patient and the trend; this one is stable. The method comes from the situation — a non-walking patient needs help.',
    },
    {
      id: 's9-l9-q2',
      kind: 'numeric',
      prompt: 'No signal. Runners must walk 6 km at 4 km/h to raise the alarm; the rescue team needs 2 h to assemble, walks in 6 km at 3 km/h, and carries the patient out at 1 km/h. Total hours until the patient reaches the road?',
      unit: 'h',
      answer: 11.5,
      tolerance: 0.2,
      concepts: ['evacuation', 'daylight'],
      explanation: '6/4 = 1.5 h + 2 h + 6/3 = 2 h + 6/1 = 6 h → **11.5 h**. Plan for a night out; a satellite messenger would save the first 1.5 h.',
    },
    {
      id: 's9-l9-q3',
      kind: 'multi',
      prompt: 'Which belong in a rescue request?',
      choices: [
        { id: 'a', text: 'Precise location (coordinates with format, or grid reference)', why: 'Yes — the most important item.' },
        { id: 'b', text: 'Patient condition including the vital-sign trend', why: 'Yes — it sets the resource and urgency.' },
        { id: 'c', text: 'Your group’s resources and how long you can hold out', why: 'Yes.' },
        { id: 'd', text: 'Weather and possible landing sites at your location', why: 'Yes — decides whether aircraft can come.' },
        { id: 'e', text: 'A detailed account of whose fault the accident was', why: 'No — irrelevant to the rescue.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['evacuation', 'signaling', 'phone-use'],
      explanation: 'Where, who and how bad (with trend), what you have, conditions, what you need.',
    },
    {
      id: 's9-l9-q4',
      kind: 'truefalse',
      prompt: 'Three fit adults can usually carry a litter patient 5 km over rough ground faster than a rescue team can arrive.',
      answer: false,
      concepts: ['evacuation'],
      explanation: 'Litter carries need about six carriers at a time plus relief; three people will be exhausted within minutes and risk dropping the patient.',
    },
    {
      id: 's9-l9-q5',
      kind: 'order',
      prompt: 'A patient you are monitoring suddenly becomes drowsy. Order your actions.',
      items: [
        { id: 'primary', text: 'Return to the primary survey (airway, breathing, circulation)' },
        { id: 'position', text: 'Protect the airway (recovery position if needed)' },
        { id: 'record', text: 'Record the change and time on the SOAP note' },
        { id: 'upgrade', text: 'Upgrade evacuation urgency and update rescuers' },
      ],
      answer: ['primary', 'position', 'record', 'upgrade'],
      concepts: ['monitoring', 'patient-assessment', 'evacuation'],
      explanation: 'Any deterioration restarts the loop: life threats first, then document and escalate.',
    },
    {
      id: 's9-l9-q6',
      kind: 'single',
      prompt: 'Why are the evacuation-decision and Stage 1 stay-or-move decisions so similar?',
      choices: [
        { id: 'a', text: 'They are unrelated; medical decisions follow different rules.', why: 'The same factors — risk of moving vs staying, daylight, weather, resources, comms — drive both.' },
        { id: 'b', text: 'Both weigh the risk and cost of moving against the risk of staying, using daylight, weather, resources and communication.', why: 'Correct — the patient’s trend is simply one more (dominant) input.' },
        { id: 'c', text: 'Both always favour staying put.', why: 'Sometimes moving is clearly right (a walkable patient, good daylight, short distance).' },
        { id: 'd', text: 'Both always favour moving.', why: 'Moving into darkness, storms or with too few carriers can make things worse.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'evacuation', 'decisions'],
      explanation: 'The decision loop from Stage 1 applies to patients: observe (trend), assess, prioritise, plan, act, reassess.',
    },
  ],
  scenario: {
    id: 's9-l9-sc',
    setup: 'Temperate forested hills, October, 17:30, 9 °C and falling. Your partner has an ankle injury (can’t bear weight, bony tenderness), you are 4 km from the start, you have 700 mL of water, a knife, cordage, a tarp, a lighter, a flashlight and a phone with 12 % battery and one bar of signal. Sunset 18:20. Vitals are stable over 30 minutes.',
    question: 'What is the best evacuation plan?',
    choices: [
      { id: 'a', text: 'Support her hopping out the 4 km before dark.', why: 'An unstable ankle, 4 km, 50 minutes of light: slow, painful, likely to end in the dark on the trail with a worse injury.' },
      { id: 'b', text: 'Send one short message/call now with location, SOAP summary and "non-urgent, stable, will shelter overnight here", then splint, pitch the tarp, insulate her from the ground, and put the phone in low-power mode with a check-in time.', why: 'Best: stable patient → urgency is modest; the cheap high-value actions are communication while battery lasts and protection before dark.' },
      { id: 'c', text: 'Leave her with the flashlight and run for help.', why: 'Leaves an immobile patient alone in the cold, and a runner alone at night; a call achieves the same with less risk.' },
      { id: 'd', text: 'Spend the battery searching online for ankle treatment videos.', why: 'Wastes the battery you need for communication.' },
    ],
    best: 'b',
    debrief: 'This is the brief’s integrated scenario. **Patient**: stable, non-walking lower-leg injury — urgent-to-non-urgent. **Situation**: 50 minutes of light, falling temperature, limited battery. Stage 1 priorities decide the plan: communicate once, clearly, while you can; protect from cold and dark; splint; monitor. A ground team can reach you tonight or at first light — and if her vitals trend worse, you have a check-in time to upgrade.',
    concepts: ['evacuation', 'stay-or-move', 'daylight', 'phone-use', 'priorities'],
  },
  summary: [
    'Monitor at 5-, 15- or 30–60-minute intervals by stability; record times; read trends.',
    'Urgency (none / non-urgent / urgent / emergent) comes from the patient and trend.',
    'The plan comes from walking ability, distance, terrain, daylight, weather, people and comms — and rescuer risk.',
    'T ≈ alert + assemble + walk-in + carry-out: carry comms and call early.',
    'Litter carries need ~6 carriers plus relief; package, pad and monitor the patient.',
    'Take a hands-on WFA/WAFA/WFR course — the next step after this stage.',
  ],
  furtherReading: ['nols-wm-book', 'nols-wm', 'redcross-wrfa'],
  references: ['nols-wm-book', 'auerbach', 'wms-org', 'nols-wm', 'solo', 'redcross-wrfa', 'icar'],
}
