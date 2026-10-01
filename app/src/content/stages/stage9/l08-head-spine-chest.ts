import type { Lesson } from '../../types'

export const l08: Lesson = {
  id: 's9-l8',
  stage: 9,
  order: 8,
  title: 'Head, spine, chest and abdomen',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s9-l3'],
  concepts: ['head-injury', 'spine-assessment', 'chest-injury', 'abdominal-injury', 'eye-injury', 'training-scope'],
  objectives: [
    'Recognise **traumatic brain injury** and its red flags, and monitor level of responsiveness over time.',
    'Apply current **selective spinal motion restriction** thinking — and know which parts are for trained responders.',
    'Recognise dangerous **chest** and **abdominal** injuries and give the first aid that current guidelines support (e.g., leave open chest wounds open).',
    'Give first aid for **eye injuries**: foreign bodies, chemicals, penetrating injuries and snow blindness.',
  ],
  explanation: [
    {
      type: 'md',
      md: `These are the injuries where **you cannot see the damage**. Your tools are the mechanism, the patient's story, a careful exam and — above all — **the trend over time**.

### Head injury

**Concussion / mild TBI**: a blow or jolt followed by any of — brief loss of consciousness, not remembering the event, confusion, headache, nausea, dizziness, blurred vision. **Scalp wounds** bleed heavily; control with firm pressure (gently if the skull may be broken).

**Red flags** (rising pressure inside the skull or a skull fracture):
- **Decreasing level of responsiveness** (A+Ox4 → A+Ox3 → V…) — the single most important sign;
- worsening headache, **repeated vomiting**, seizures, new weakness or numbness;
- unequal pupils; clear fluid or blood from ears or nose; bruising behind the ears or around both eyes (late signs);
- very late: slowing pulse, irregular breathing, rising blood pressure.

**Care:** protect the airway (recovery position if vomiting or drowsy), monitor **LOR every 15 minutes** and record it, keep the person still and warm, no alcohol or sedating drugs. **Evacuate:** any **loss of consciousness** or persisting symptoms → evacuate (non-urgent if the exam stays normal and stable); **any red flag or deterioration → emergent**. People on blood thinners and older adults deserve a lower threshold.`,
    },
    {
      type: 'md',
      md: `### Spinal injury: selective, not automatic

For decades, first aiders were taught to immobilise anyone with a possible neck injury on a rigid board with a hard collar. Evidence has changed that. Current guidance (WMS 2024 spinal-cord-protection update; 2024 AHA/Red Cross first aid):

- Aim for **spinal motion restriction (SMR)** — keeping the spine still, supported and in neutral alignment with padding — rather than "immobilisation", which no device truly achieves.
- Decide **selectively**, using clinical criteria, not reflexively on mechanism alone.
- **Lay first aiders should not apply cervical collars**; ask an alert patient to keep still, and support the head in the position found if needed. Poorly fitted collars can raise pressure in the skull, hamper the airway and cause pain; rigid long boards cause pressure sores and breathing restriction and are not recommended for transport.
- **Airway always beats spine** — roll a vomiting patient as a unit.
- If the patient needs moving, keep head, shoulders and hips aligned (log roll, team lift) and move no further than necessary.

On WFA/WFR courses you learn a **focused spine assessment**: after a mechanism that could injure the spine, a trained responder checks that the patient is **reliable** (A+Ox4, sober, no distracting injury, able to communicate), has **no spine pain or tenderness**, and has **normal sensation and strength** in all four limbs. If all are normal, a trained responder can decide SMR is not needed — which can let the patient walk out. That decision requires hands-on training: **do not "clear" a spine from this text.**`,
    },
    { type: 'diagram', id: 'spine-smr', caption: 'Selective spinal motion restriction: criteria-based, and the clearing decision belongs to trained responders.' },
    {
      type: 'md',
      md: `### Chest injuries

- **Rib fractures**: sharp pain on breathing or coughing, point tenderness. Let the patient hold a padded jacket against the ribs; **don't tape tightly around the chest** (it restricts breathing and promotes pneumonia); encourage deep breaths every hour. Several ribs broken in several places can create a **flail segment** that moves the wrong way on breathing — emergent.
- **Pneumothorax** (air around the lung): increasing shortness of breath, fast breathing, low oxygen. A **tension pneumothorax** — worsening breathlessness, distress and signs of shock — is lethal; decompression is a clinician/advanced-provider skill. First aid: position of comfort (usually sitting up), emergent evacuation.
- **Open ("sucking") chest wound**: the 2024 AHA/Red Cross guidelines say it is reasonable to **leave it open** to the air or cover it with a **clean non-occlusive dressing** (e.g., dry gauze) or a vented chest seal. Sealing it completely with plastic can trap air and cause a tension pneumothorax; if you did seal it and breathing gets worse, **remove the seal**.
- **Impaled objects**: stabilise, don't remove.`,
    },
    {
      type: 'md',
      md: `### Abdominal injuries and "surgical" abdomens

- **Blunt trauma** (falls, handlebars, crush): internal bleeding from spleen or liver may show only as **shock signs trending worse**, tenderness, guarding or a rigid belly, and pain referred to the shoulder. Nothing by mouth if evacuation is short; lie flat, insulate, **evacuate** (emergent if shock signs).
- **Penetrating wounds**: control bleeding; if organs protrude (**evisceration**), **don't push them back** — cover with a clean, moist dressing and then a dry layer to keep warm.
- **Medical abdomen**: pain with fever, a rigid belly, blood in vomit or stool, pain that persists or localises (e.g., appendicitis often moves from around the navel to the lower right), or pain in a possibly pregnant patient → evacuate.`,
    },
    {
      type: 'md',
      md: `### Eye injuries

- **Loose foreign body** (grit, insect): don't rub. Irrigate with clean water from the inner corner outward; lift the upper lid over the lower lashes.
- **Chemical in the eye** (stove fuel, sunscreen, insect repellent, lime): **flush immediately and continuously for at least 15 minutes**, holding the lids open; then evacuate for anything but a trivial, fully resolved irritation.
- **Embedded or penetrating object**: **don't remove it**. Shield the eye with a cup (not pressure on the eyeball); some protocols cover the uninjured eye too, to reduce eye movement. Emergent evacuation.
- **Blunt trauma** with blood inside the eye, vision loss or double vision → evacuate.
- **Snow blindness (UV keratitis)**: sunburn of the cornea from snow, water, sand or altitude. Gritty, very painful eyes starting **6–12 hours after exposure**. Dark environment, cool compresses, no contact lenses; usually heals in 1–2 days. **Prevention**: sunglasses or goggles with side protection — improvise slit goggles from cardboard if lost.`,
    },
    {
      type: 'table',
      head: ['Practise at home', 'Formal training only'],
      rows: [
        ['LOR/AVPU and pupil checks on a partner; a 15-minute monitoring chart', 'Focused spine assessment and the decision to "clear" a spine'],
        ['Log roll and team lift with helpers holding head alignment', 'Airway management in a head-injured patient'],
        ['Eye-irrigation set-up on a partner using clean water', 'Chest-seal decisions, needle decompression (clinicians)'],
        ['Improvising slit goggles; packing UV-protective eyewear', 'Assessing the acute abdomen'],
      ],
    },
  ],
  whyItMatters: 'Head, spine, chest and abdominal injuries are where first-aid errors are hidden until hours later — the “talk and die” head injury, the spleen bleeding silently, the walk-out that should have been a carry. Modern spinal thinking also changes real decisions: a patient who can be safely assessed and walk out avoids a long, risky litter carry for everyone.',
  science: [
    {
      type: 'md',
      md: `### Why a falling LOR matters: the fixed box

The skull is a rigid box holding brain, blood and cerebrospinal fluid. A bleed inside adds volume that has nowhere to go (the Monro–Kellie principle). At first the body compensates by pushing out fluid and venous blood; once that reserve is used up, **pressure rises steeply** and blood flow to the brain falls. The first sign is usually a **decline in responsiveness**; the very late signs (slow pulse, irregular breathing, high blood pressure — "Cushing's triad") mean brain herniation is close.

That is why an **epidural bleed** can produce a "lucid interval": knocked out, then talking normally for an hour, then rapidly worse. The trend in AVPU every 15 minutes catches it; a single reassuring look does not.

### Worked example: monitoring load

A head-injured patient is monitored every 15 minutes for 6 hours: $6 \\times 60 / 15 = 24$ checks. Split the job and write each on the SOAP note — fatigue makes rescuers skip checks at exactly the hours (night, cold) when change is most likely.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** A climber is hit on the helmet by a rock, dazed for a minute, then fine. Two hours later she has a worsening headache and vomits twice: red flags → emergent evacuation.

**Forest (mountain biking).** A rider goes over the bars; neck pain and tingling in both hands. Keep him still, head supported in the position found, insulate, call — no collar, no walking.

**Coastal.** A body-boarder dumped head-first on a sandbank complains of neck pain but is floating face down: airway first — turn him face up with in-line support and get him out of the water.

**Desert.** A fall from a camel onto rocky ground: ribs painful on breathing, breathing increasingly fast. Sit him up, pad the ribs, monitor breathing rate; worsening = emergent.

**Arctic/alpine.** Three days of glacier travel without sunglasses: gritty, streaming, painful eyes at night — snow blindness. Dark tent, cool compresses, improvised slit goggles tomorrow.

**Urban.** A cyclist hits a car's side mirror with her abdomen and feels "winded". Her pulse climbs over 30 minutes — suspect splenic injury; ambulance.`,
    },
  ],
  mistakes: [
    'Being reassured by a head-injured patient who "seems fine" after a brief knock-out — watch the trend.',
    'Applying a rigid collar or board by reflex; or, conversely, "clearing" a spine without training.',
    'Leaving a vomiting patient on their back to protect the spine.',
    'Taping ribs tightly or sealing an open chest wound airtight with no plan to release it.',
    'Pushing eviscerated organs back in.',
    'Rubbing an eye with grit in it, or trying to remove an embedded object.',
  ],
  exercises: [
    {
      id: 's9-l8-e1',
      title: 'Head-injury monitoring chart',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['Partner', 'Pen light', 'Watch', 'SOAP form'],
      steps: [
        'Your partner plays a head-injured hiker and secretly scripts a change (e.g., A+Ox4 for 45 min, then A+Ox3, then vomiting).',
        'Every "15 minutes" (compress to 2 real minutes) record AVPU/orientation, pupils, pulse, breathing and symptoms.',
        'Stop when you identify a red flag, state the evacuation urgency, and write the SOAP note.',
      ],
      success: ['You detected the change at the first check after it happened.', 'Your note has times and an urgency upgrade.'],
      skill: 'fa-soap-note',
    },
    {
      id: 's9-l8-e2',
      title: 'Focused spine assessment — on a course',
      level: 4,
      safety: 'formal-training',
      minutes: 120,
      steps: [
        'On your WFA/WAFA/WFR course, ask to practise the focused spine assessment and spinal motion restriction with padding in multiple scenarios.',
        'Practise the log roll, team lift and airway-first positioning with an instructor watching head alignment.',
        'Record the criteria your course uses in your notebook.',
      ],
      success: ['Instructor sign-off on the assessment and SMR packaging.'],
      skill: 'patient-assessment',
    },
  ],
  quiz: [
    {
      id: 's9-l8-q1',
      kind: 'single',
      prompt: 'Which finding after a head injury is the most worrying?',
      choices: [
        { id: 'a', text: 'A large, swelling bruise on the forehead where he hit the rock', why: 'Uncomfortable but not itself a red flag.' },
        { id: 'b', text: 'Level of responsiveness declining from A+Ox4 to V over an hour', why: 'Correct — the key sign of rising pressure inside the skull.' },
        { id: 'c', text: 'A scalp wound that bled heavily before pressure controlled it', why: 'Scalp wounds bleed heavily; pressure controls them.' },
        { id: 'd', text: 'A mild headache that has been slowly improving over the hour', why: 'Improving symptoms are reassuring.' },
      ],
      answer: 'b',
      concepts: ['head-injury', 'monitoring'],
      explanation: 'Deteriorating LOR is the most important head-injury red flag → emergent evacuation.',
    },
    {
      id: 's9-l8-q4',
      kind: 'single',
      prompt: 'After a mountain-bike crash, which rider could a trained responder decide does **not** need spinal motion restriction (SMR)?',
      choices: [
        { id: 'a', text: 'Alert and sober, no neck pain, normal strength and sensation', why: 'Correct — these are the criteria that allow a trained responder to decide against SMR.' },
        { id: 'b', text: 'Alert and sober, but with neck pain when moving the head', why: 'Spine pain means keep still and supported.' },
        { id: 'c', text: 'No neck pain, but confused and repeating the same questions', why: 'An unreliable patient cannot be assessed for spine injury.' },
        { id: 'd', text: 'No neck pain, but tingling in both hands since the crash', why: 'Tingling suggests possible cord involvement — keep still and supported.' },
      ],
      answer: 'a',
      concepts: ['spine-assessment', 'training-scope'],
      explanation: 'Reliability, spine pain/tenderness and neuro signs drive the decision; a painful distracting injury such as a broken wrist also counts against clearing. Clearing a spine is a course-taught skill.',
    },
    {
      id: 's9-l8-q3',
      kind: 'single',
      prompt: 'An open chest wound bubbles with each breath. What is the currently recommended first aid?',
      choices: [
        { id: 'a', text: 'Seal it airtight on all four sides with plastic so no air can get in.', why: 'A fully occlusive seal can cause a tension pneumothorax.' },
        { id: 'b', text: 'Leave it open or use a non-occlusive or vented dressing, and watch breathing.', why: 'Correct — 2024 AHA/Red Cross guidance; remove any seal if breathing worsens.' },
        { id: 'c', text: 'Pack the wound tightly with gauze and hold firm pressure, as for the groin.', why: 'Packing is for limb and junctional bleeding, not the chest cavity.' },
        { id: 'd', text: 'Lay the patient on the injured side, then walk them out slowly to the road.', why: 'Walking is unwise; position of comfort (often sitting) and evacuation.' },
      ],
      answer: 'b',
      concepts: ['chest-injury'],
      explanation: 'Avoid trapping air: leave it open or use a non-occlusive or vented dressing, and remove any seal if breathing worsens. Watch breathing; emergent evacuation.',
    },
    {
      id: 's9-l8-q2',
      kind: 'single',
      prompt: 'Someone might have a neck injury. What do current first-aid guidelines say a lay first aider should do?',
      choices: [
        { id: 'a', text: 'Keep the person still and supported, without fitting a collar.', why: 'Correct — lay first aiders should not apply collars (WMS 2024; AHA/Red Cross 2024).' },
        { id: 'b', text: 'Fit a cervical collar to anyone who might have a neck injury.', why: 'Guidelines no longer recommend lay first aiders apply collars.' },
        { id: 'c', text: 'Improvise a rigid collar from a foam pad if no real one is at hand.', why: 'An improvised collar is still a collar; keep the person still and supported instead.' },
        { id: 'd', text: 'Sit the person up and gently turn the neck to check for pain.', why: 'Moving the neck to test it risks harm; spinal decisions are criteria-based and course-taught.' },
      ],
      answer: 'a',
      concepts: ['spine-assessment', 'fa-myths'],
      explanation: 'Lay first aiders should not apply collars; keep the person still and supported. Spinal decisions are selective and criteria-based (WMS 2024; AHA/Red Cross 2024).',
    },
    {
      id: 's9-l8-q6',
      kind: 'single',
      prompt: 'A trekker has gritty, streaming, very painful eyes at night after a day on a snowfield without sunglasses. Most likely?',
      choices: [
        { id: 'a', text: 'Snow blindness (UV keratitis): dark, cool compresses and eye protection.', why: 'Correct — delayed onset 6–12 h after UV exposure is typical; no contacts, and protect the eyes tomorrow.' },
        { id: 'b', text: 'A penetrating eye injury that needs emergent evacuation tonight.', why: 'No injury mechanism; both eyes; delayed onset.' },
        { id: 'c', text: 'An allergic reaction that should be treated with epinephrine.', why: 'No systemic signs; epinephrine is for anaphylaxis.' },
        { id: 'd', text: 'Dehydration after a long day, treated with plenty of fluids.', why: 'Does not cause this pattern.' },
      ],
      answer: 'a',
      concepts: ['eye-injury'],
      explanation: 'UV keratitis usually heals in a day or two; prevention is eyewear with side protection or improvised slit goggles.',
    },
    {
      id: 's9-l8-q5',
      kind: 'single',
      prompt: 'Stove fuel splashes into a hiker’s eye. For at least how long should you flush it with clean water?',
      choices: [
        { id: 'a', text: '15 minutes', why: 'Correct — flush continuously for at least 15 minutes.' },
        { id: 'b', text: '20 minutes', why: 'That is the burn-cooling time; the eye-flushing minimum is 15 minutes.' },
        { id: 'c', text: '5 minutes', why: 'Too short — flush for at least 15 minutes.' },
        { id: 'd', text: '1 minute', why: 'A quick rinse is far short of the 15-minute minimum.' },
      ],
      answer: 'a',
      concepts: ['eye-injury', 'poisoning'],
      explanation: 'Flush continuously for at least 15 minutes, lids held open, then evacuate unless fully resolved.',
    },
  ],
  scenario: {
    id: 's9-l8-sc',
    setup: 'Temperate mountain valley, 12:00. A hiker slipped on a wet slab and slid 4 m, hitting his head (helmetless) and back. He was “out” for about 30 seconds. Now he is A+Ox4, has neck pain when he turns his head and a headache, but no numbness. He wants to walk the 8 km back. The weather is fine, you have a phone signal and five people.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'He is talking and has no numbness, so let him walk out slowly with a partner beside him.', why: 'Neck pain after a 4 m fall means SMR, and a loss of consciousness means evacuation and monitoring; walking risks both.' },
      { id: 'b', text: 'Keep him still with his head supported (no collar), insulate, monitor LOR, and call rescue.', why: 'Best: spine pain → motion restriction; LOC → evacuation with LOR checks every 15 minutes; call as urgent, upgrading to emergent if his LOR falls or he vomits.' },
      { id: 'c', text: 'Improvise a rigid collar from a foam pad and tape him to a tarp for an 8 km carry now.', why: 'Collars by lay first aiders are not recommended, and an unrequested 8 km carry by five people is slow and risky when rescue can be called.' },
      { id: 'd', text: 'Give him painkillers and let him have a nap, then decide once he wakes up.', why: 'Sleep hides changes in responsiveness unless you wake and check him; and the decision is already clear.' },
    ],
    best: 'b',
    debrief: 'Two separate problems: **possible spinal injury** (spine pain after a significant mechanism → keep still and supported; a trained responder could not “clear” him with that pain) and **head injury with loss of consciousness** (→ evacuate and watch LOR). Current thinking avoids reflexive collars and boards, but it does not mean walking out a patient with neck pain.',
    concepts: ['spine-assessment', 'head-injury', 'evacuation', 'monitoring'],
  },
  summary: [
    'Head injury: falling LOR is the red flag; monitor every 15 min; any LOC → evacuate; deterioration → emergent.',
    'Spine: selective spinal motion restriction; no collars by lay first aiders; airway beats spine; spine clearance is course-taught.',
    'Chest: don’t tape ribs; leave open chest wounds open or use a non-occlusive/vented dressing; worsening breathing → emergent.',
    'Abdomen: internal bleeding shows as a shock trend; cover eviscerations moist; evacuate.',
    'Eyes: irrigate foreign bodies and chemicals (≥15 min), shield penetrating injuries, prevent snow blindness.',
  ],
  furtherReading: ['fa-wms-spine-2024', 'fa-aha-arc-2024', 'nols-wm-book'],
  references: ['fa-wms-spine-2024', 'fa-aha-arc-2024', 'nols-wm-book', 'auerbach', 'wms-org', 'nols-wm'],
}
