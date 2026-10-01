import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's9-l3',
  stage: 9,
  order: 3,
  title: 'Shock',
  level: 'intermediate',
  minutes: 35,
  prerequisites: ['s9-l2'],
  concepts: ['shock', 'vital-signs', 'monitoring', 'hypothermia', 'fa-myths'],
  objectives: [
    'Explain shock as **inadequate delivery of oxygen to the tissues**, and name its main causes.',
    'Recognise **compensated** shock early — rising pulse and breathing, pale cool moist skin, anxiety, thirst — before blood pressure falls.',
    'Estimate blood loss as a fraction of blood volume and relate it to the **haemorrhage classes**.',
    'Give field care for shock — fix the cause, lie flat, insulate, monitor, evacuate — and know which treatments need a clinician.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### What shock is (and isn't)

In first aid, **shock** does not mean an emotional "state of shock". It means the circulation is failing to deliver enough oxygen to the body's cells. Cells then switch to inefficient, acid-producing metabolism; if it continues, organs fail.

Four broad mechanisms — the "pipes, pump and fluid" model:

| Type | What fails | Wilderness examples |
|---|---|---|
| **Hypovolaemic** | Not enough fluid in the pipes | Bleeding (external or internal), severe burns, severe dehydration, vomiting/diarrhoea |
| **Distributive** | Pipes suddenly too wide | Anaphylaxis, sepsis (infection), spinal cord injury |
| **Cardiogenic** | The pump fails | Heart attack |
| **Obstructive** | Something blocks the pump | Tension pneumothorax (chest injury) |

In trauma, think **bleeding first** — and remember that a lot of blood can hide inside: a broken femur can hold 1–1.5 L, a pelvic fracture or abdominal injury much more.`,
    },
    {
      type: 'md',
      md: `### Compensation: the body hides the problem

When blood volume falls, the body fights back. The sympathetic nervous system speeds the heart, narrows blood vessels in skin and gut to keep blood for the brain and heart, and speeds breathing. That is why the **early** signs are:

- **Rising heart rate** (often the first clue), then rising breathing rate;
- **Pale, cool, moist skin** (vessels clamped; sweating);
- **Anxiety, restlessness**, thirst, nausea.

Blood pressure holds up remarkably well until roughly **30 % of blood volume** is gone. By the time the radial pulse is weak or the patient is confused, the patient is in **decompensated** shock and close to collapse.`,
    },
    { type: 'diagram', id: 'shock-classes', caption: 'Haemorrhage classes (ATLS teaching model). Pulse and breathing rise early; blood pressure and mental status fail late.' },
    {
      type: 'md',
      md: `### Field care for shock

1. **Fix the cause** if you can: stop bleeding (lesson 2), give epinephrine for anaphylaxis (lesson 7), cool heat stroke (lesson 6).
2. **Lie the patient flat.** Raising the legs may give a short-lived improvement and can be considered if there are no leg, pelvic or spinal injuries — it is optional, not a treatment.
3. **Insulate and protect.** Pad underneath, cover, shelter from wind and wet. Cold worsens bleeding and shock (the *lethal triad* of hypothermia, acid build-up and poor clotting). A patient in shock on wet ground can become hypothermic even in mild weather.
4. **Calm and reassure.** Anxiety raises oxygen demand.
5. **Food and drink:** if the patient is alert and evacuation is many hours away, small sips of water are generally acceptable; don't give anything by mouth to someone drowsy or vomiting. Follow your course's protocol.
6. **Monitor** vitals every 5–15 minutes and write them down.
7. **Evacuate.** Any patient with signs of shock after trauma needs a hospital; worsening signs are **emergent**.

Intravenous fluids, blood and surgery are what actually reverse haemorrhagic shock — none of which a first aider carries. That is why the early call matters.`,
    },
    {
      type: 'callout',
      tone: 'info',
      title: 'Acute stress reaction vs shock',
      md: 'Many people go pale, sweaty and faint right after an injury or seeing blood — a nervous-system reaction (vasovagal). Lie them down; it usually settles within minutes and the vitals return to normal. **Shock does not settle — it trends worse.** Only repeated vitals tell them apart.',
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Home vs formal training',
      md: '**Home:** practise building a "shock package" (pad + sleeping bag + vapour barrier + shell) around a partner lying on the ground; practise vitals trends. **Course:** recognising shock in realistic scenarios with changing vitals, and the WFR-level decisions on fluids and long-term care — take a WFA/WAFA/WFR.',
    },
    { type: 'sim', id: 'patient-assessment', caption: 'Try the “Forest — fall onto rocks” patient and watch what untreated bleeding does to the pulse.' },
  ],
  whyItMatters: 'Shock is the common pathway by which many injuries kill — slowly enough that a good first aider can see it coming and change the outcome. Recognising the early, compensated stage turns “she seemed fine” into an early call for evacuation while the patient still has reserves.',
  science: [
    {
      type: 'md',
      md: `### Oxygen delivery

The oxygen delivered to the body each minute is roughly **cardiac output × oxygen content of the blood**. Cardiac output is **heart rate × stroke volume** (blood pumped per beat). In words: if each beat pumps less (because the tank is low), the heart must beat faster to deliver the same oxygen — which is exactly the rising pulse you measure.

$$ \\text{CO} = \\text{HR} \\times \\text{SV} $$

**Worked example.** At rest, 70 beats/min × 70 mL/beat ≈ 4.9 L/min. If blood loss drops stroke volume to 45 mL, the heart must reach about $4900 / 45 \\approx 109$ beats/min to keep the same output. When it can't beat fast enough — or the vessels can't clamp any further — blood pressure falls.`,
    },
    {
      type: 'table',
      head: ['Class', 'Blood loss (% volume)', '70 kg adult (≈ 4.9 L)', 'Typical signs'],
      rows: [
        ['I', '< 15 %', '< 750 mL', 'Minimal; slight pulse rise'],
        ['II', '15–30 %', '750–1500 mL', 'Pulse > 100, faster breathing, anxious, pale/cool skin'],
        ['III', '30–40 %', '1500–2000 mL', 'Pulse > 120, BP falling, confused'],
        ['IV', '> 40 %', '> 2000 mL', 'Pulse > 140 or weak/absent radial, lethargic — life-threatening'],
      ],
      caption: 'Haemorrhage classes from the ATLS teaching model. Real patients vary (fit athletes, older people and some medications blunt the pulse rise).',
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** A mountain biker hits a tree with his thigh. No external bleeding, but his thigh swells, his pulse goes 90 → 104 → 116 over 30 minutes and his skin turns clammy. Suspect internal bleeding from a femur fracture: splint, insulate, call for evacuation now.

**Desert.** Two days of diarrhoea in the heat leave a trekker dizzy on standing, with a pulse of 118 and dark, scant urine — hypovolaemic shock from fluid loss. Shade, rest, oral rehydration solution in small frequent sips if alert, and evacuate if not improving.

**Tropical.** A cut on the foot becomes red, hot and swollen; three days later the patient has a fever, fast pulse and is confused — **sepsis**, a distributive shock. Emergent evacuation.

**Urban.** At a car crash a passenger with seat-belt bruising says he's fine but keeps asking the same questions and is pale and sweaty. Mechanism plus trend = suspect abdominal bleeding.

**Subarctic.** A snowmobiler with a broken lower leg lies on snow for an hour while help is fetched. By the time rescuers arrive, he is shivering violently: cold has compounded shock. Insulation from the ground was the missing step.`,
    },
  ],
  mistakes: [
    'Waiting for a low blood pressure (or unconsciousness) before thinking "shock" — that is late.',
    'Taking one set of vitals and concluding the patient is fine.',
    'Leaving a patient in shock on cold, wet ground without insulation.',
    'Myth: "give the patient a stiff drink for shock". Alcohol dilates skin vessels and worsens heat loss and judgment.',
    'Giving food or drink to a drowsy or vomiting patient.',
    'Confusing a brief faint (which settles) with shock (which trends worse) — without repeated vitals you cannot tell.',
  ],
  exercises: [
    {
      id: 's9-l3-e1',
      title: 'Build a shock package outdoors',
      level: 3,
      safety: 'outdoor',
      minutes: 30,
      materials: ['Willing partner', 'Foam pad or packs', 'Sleeping bag', 'Large plastic bag or bivy', 'Tarp'],
      steps: [
        'On a cool day, partner lies on the ground in normal clothing for 5 minutes and reports how the ground feels.',
        'Build the package: pad underneath (never skip), sleeping bag, vapour barrier, tarp over for wind and rain. Head covered, face clear.',
        'Time yourself. Then do it with your partner "unable to help" (keep them still while sliding the pad under — a log roll).',
        'Discuss: what would you change in heavy rain? On snow?',
      ],
      success: ['Package built in under 5 minutes.', 'Patient insulated underneath and wind-protected, airway visible.'],
      skill: 'hypothermia-mgmt',
    },
    {
      id: 's9-l3-e2',
      title: 'Blood-loss arithmetic and trend reading',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'For your own body mass, calculate blood volume (70 mL/kg) and the volumes for 15 %, 30 % and 40 % loss.',
        'Pour that 15 % volume of water onto a towel on the floor to see what "750 mL" looks like — blood loss is often under-estimated.',
        'Run the forest-fall patient in the Patient Assessment Simulator twice: once controlling bleeding by minute 5, once by minute 12. Compare the heart-rate trends.',
      ],
      success: ['You can state your own blood volume and class thresholds.', 'You can explain the difference between the two simulator runs.'],
    },
  ],
  simulations: ['patient-assessment'],
  quiz: [
    {
      id: 's9-l3-q1',
      kind: 'single',
      prompt: 'Which is usually the **earliest** measurable sign of blood-loss shock?',
      choices: [
        { id: 'a', text: 'Falling blood pressure', why: 'A late sign — BP holds until ~30 % loss.' },
        { id: 'b', text: 'Rising heart rate', why: 'Correct — the body compensates by beating faster.' },
        { id: 'c', text: 'Becoming unresponsive', why: 'Very late.' },
        { id: 'd', text: 'A rising temperature', why: 'Fever is not a feature of blood-loss shock.' },
      ],
      answer: 'b',
      concepts: ['shock', 'vital-signs'],
      explanation: 'Pulse and breathing rise and skin goes pale-cool-moist while blood pressure is still normal. Catch it there.',
    },
    {
      id: 's9-l3-q3',
      kind: 'single',
      prompt: 'Which of these is **not** an appropriate first-aid measure for a patient in shock after a fall?',
      choices: [
        { id: 'a', text: 'Control any external bleeding', why: 'Appropriate — fix the cause first.' },
        { id: 'b', text: 'Lie them flat and insulate from the ground', why: 'Appropriate — rest and warmth.' },
        { id: 'c', text: 'A shot of whisky to warm them up', why: 'Correct — this is the myth: alcohol worsens heat loss and judgment.' },
        { id: 'd', text: 'Repeat vital signs every 5–15 minutes', why: 'Appropriate — trends guide urgency.' },
      ],
      answer: 'c',
      concepts: ['shock', 'fa-myths', 'monitoring'],
      explanation: 'Fix the cause, lie flat, keep warm, reassure, monitor, evacuate. Alcohol is a myth that worsens heat loss.',
    },
    {
      id: 's9-l3-q4',
      kind: 'single',
      prompt: 'A friend goes pale and faints on seeing a wound, then recovers with normal vitals after lying down for 5 minutes. What is the most likely explanation?',
      choices: [
        { id: 'a', text: 'An acute stress (vasovagal) reaction, which settles once she lies down.', why: 'Correct — it settles, and her vitals are normal.' },
        { id: 'b', text: 'Early compensated shock that will keep getting worse over the next hour.', why: 'Shock trends worse over repeated vitals; hers are normal and settled.' },
        { id: 'c', text: 'Late shock, since fainting means her blood pressure has already fallen.', why: 'Late shock does not recover to normal vitals in 5 minutes of lying down.' },
        { id: 'd', text: 'Blood-loss shock that lying flat has now fully corrected on its own.', why: 'She has not lost blood, and lying flat does not cure true shock.' },
      ],
      answer: 'a',
      concepts: ['shock', 'vital-signs'],
      explanation: 'That pattern fits an acute stress (vasovagal) reaction, which settles. Shock trends worse over repeated vitals.',
    },
    {
      id: 's9-l3-q5',
      kind: 'single',
      prompt: 'Why does insulating a shocked patient matter even at 12 °C?',
      choices: [
        { id: 'a', text: 'Because shivering burns energy and is dangerous for an injured patient in itself.', why: 'Shivering costs energy but is not the main issue.' },
        { id: 'b', text: 'A still body loses heat into the ground, and cooling impairs clotting and worsens shock.', why: 'Correct — the lethal triad links cold, acid build-up and poor clotting.' },
        { id: 'c', text: 'Mainly for comfort, since a calm and comfortable patient copes better with pain.', why: 'It changes outcomes, not just comfort.' },
        { id: 'd', text: 'It barely matters above 10 °C, as the ground is not cold enough to chill anyone.', why: 'Ground conduction and wind chill a motionless person well above 10 °C.' },
      ],
      answer: 'b',
      concepts: ['shock', 'hypothermia', 'heat-loss'],
      explanation: 'Stage 1 heat-loss physics applies to patients too: a still body on the ground loses heat by conduction, and wet or wind multiply it. Falling core temperature impairs clotting and worsens shock.',
    },
    {
      id: 's9-l3-q2',
      kind: 'single',
      prompt: 'A 75 kg patient has lost about 1.2 L of blood. What percentage of blood volume is that (70 mL/kg)?',
      choices: [
        { id: 'a', text: '23 %', why: 'Correct — 1200 / 5250 ≈ 0.23.' },
        { id: 'b', text: '77 %', why: 'This is the share that remains (100 − 23), not the share lost.' },
        { id: 'c', text: '16 %', why: 'This uses 100 mL/kg instead of 70 mL/kg: 1200 / 7500.' },
        { id: 'd', text: '2 %', why: 'This forgets the 70 mL/kg factor and divides 1.2 by the body weight (1.2 / 75 ≈ 1.6).' },
      ],
      answer: 'a',
      concepts: ['shock'],
      explanation: 'Blood volume = 75 × 70 = 5250 mL. 1200 / 5250 ≈ 0.23 → **23 %**: class II. Expect pulse > 100, anxiety, pale moist skin.',
    },
  ],
  scenario: {
    id: 's9-l3-sc',
    setup: 'Temperate forest, 14:00, 10 °C and damp. Your friend fell 2 m off a boulder and landed on his side. There is no external bleeding. He says his left upper abdomen and ribs hurt. First vitals (14:05): pulse 92, breathing 18, skin pink. At 14:20: pulse 104, breathing 22, skin pale and moist; he is thirsty and restless. You are 7 km from the road with a phone signal.',
    question: 'What does the trend tell you, and what do you do?',
    choices: [
      { id: 'a', text: 'Pain explains the higher pulse. Give him a painkiller and walk out slowly together.', why: 'Pain raises the pulse, but pale moist skin, thirst and restlessness after a blow to the left upper abdomen suggest internal bleeding (spleen).' },
      { id: 'b', text: 'Suspect internal bleeding: lie him flat, insulate, nothing to eat, call rescue now, repeat vitals.', why: 'Best: compensated shock — call as urgent-to-emergent and repeat vitals every 5 minutes; the trend is the diagnosis here, and internal bleeding needs a surgeon.' },
      { id: 'c', text: 'Let him drink as much as he wants, since his thirst shows he is getting dehydrated.', why: 'Thirst is a shock sign here, and a patient who may need surgery should not drink large volumes.' },
      { id: 'd', text: 'Keep him resting for an hour and repeat his vitals to see whether things settle.', why: 'Shock does not settle; waiting burns the time he needs for evacuation.' },
    ],
    best: 'b',
    debrief: 'Two sets of vitals 15 minutes apart turned a “sore side” into a probable spleen injury with compensated shock. The mechanism (fall onto the left side) plus the trend is enough to call early. **Internal bleeding cannot be treated in the field** — the only field treatment is fast evacuation, warmth and monitoring.',
    concepts: ['shock', 'monitoring', 'abdominal-injury', 'evacuation'],
  },
  summary: [
    'Shock = not enough oxygen reaching the tissues; in trauma think bleeding, including internal bleeding.',
    'Early signs: rising pulse and breathing, pale-cool-moist skin, anxiety, thirst. Falling BP and confusion are late.',
    'Blood volume ≈ 70 mL/kg; class II starts at ~15 % loss, class III at ~30 %.',
    'Care: fix the cause, lie flat, insulate, reassure, monitor, evacuate. No alcohol.',
    'A trend of worsening vitals upgrades evacuation urgency.',
  ],
  furtherReading: ['nols-wm-book', 'fa-atls', 'auerbach'],
  references: ['fa-atls', 'nols-wm-book', 'auerbach', 'fa-aha-arc-2024', 'wms-hypothermia-2019'],
}
