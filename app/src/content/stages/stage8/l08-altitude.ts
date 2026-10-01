import type { Lesson } from '../../types'

export const l08: Lesson = {
  id: 's8-l8',
  stage: 8,
  order: 8,
  title: 'Altitude',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s8-l1'],
  concepts: ['hypoxia', 'altitude-illness', 'ascent-rate', 'dehydration'],
  objectives: [
    'Calculate how **inspired oxygen pressure** falls with altitude and explain what the body does about it (acclimatisation).',
    'Recognise **AMS, HACE and HAPE**, and the red flags that demand **descent**.',
    'Plan an ascent using current guidance: above 3,000 m, **≤ 500 m/day** increase in sleeping altitude and a **rest day every 3–4 days**.',
    'Explain why altitude also increases dehydration, cold and UV risk, and degrades judgment and night vision.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'info',
      title: 'Educational content — not medical advice',
      md: 'Medications for prevention and treatment of altitude illness (e.g., acetazolamide, dexamethasone, nifedipine) are prescription drugs with side effects and contraindications. Discuss plans with a travel-medicine clinician before high-altitude trips, and learn recognition and evacuation hands-on (WFA/WFR, mountain-medicine courses).',
    },
    {
      type: 'md',
      md: `### Less pressure, less oxygen

The air at altitude is still **20.9 % oxygen** — but the air pressure is lower, so each breath carries fewer oxygen molecules. At about **5,500 m** the inspired oxygen pressure is roughly **half** its sea-level value.

The body responds in stages. Within minutes: faster, deeper breathing and a higher heart rate. Over **days**: the kidneys excrete bicarbonate to correct the alkalosis caused by overbreathing (allowing breathing to rise further), and plasma volume falls (concentrating red cells). Over **weeks**: more red blood cells. Acute acclimatisation takes **3–5 days** at each new level; that is why ascent rate matters so much.`,
    },
    { type: 'diagram', id: 's8-altitude-oxygen', caption: 'Inspired oxygen partial pressure versus altitude (standard atmosphere).' },
    {
      type: 'table',
      head: ['Condition', 'Key signs', 'What to do'],
      rows: [
        ['**AMS** (acute mountain sickness)', 'Headache plus one or more of: nausea/poor appetite, fatigue, dizziness; typically 6–12 h after arriving at a new altitude; like a hangover', 'Do not go higher until symptoms resolve; rest, fluids, simple pain relief; descend if worsening'],
        ['**HACE** (high-altitude cerebral oedema)', 'Ataxia (cannot walk heel-to-toe in a straight line), confusion, drowsiness — usually in someone with AMS', '**Descend immediately** (300–1,000 m or until better); oxygen and medication by trained personnel; evacuate'],
        ['**HAPE** (high-altitude pulmonary oedema)', 'Breathless **at rest**, marked drop in exercise tolerance, cough (later pink frothy sputum), blue lips', '**Descend**, minimise exertion, keep warm; oxygen if available; evacuate'],
      ],
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'The golden rules',
      md: '1) Illness at altitude is altitude illness until proven otherwise. 2) Never ascend with symptoms of AMS. 3) If symptoms get worse, or there is **any** sign of HACE or HAPE, **go down**. 4) Never leave someone with altitude illness alone.',
    },
    {
      type: 'md',
      md: `### Ascent rate

Current guidance (WMS 2024; CDC): avoid going from low altitude to a **sleeping altitude above about 2,750–3,000 m** in one day. Above **3,000 m**, increase **sleeping** altitude by no more than **500 m per day**, with a **rest day every 3–4 days** (or an extra night for each 1,000 m gained). You may climb higher during the day and return lower to sleep (“climb high, sleep low”). Speed of ascent, previous altitude illness and sleeping altitude are the main risk factors; fitness does **not** protect you.`,
    },
    { type: 'diagram', id: 's8-ascent-profile', caption: 'A staged ascent keeps sleeping-altitude gains small; flying or driving to a high bed skips acclimatisation.' },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Set the altitude slider to 4,500 m and compare water loss with sea level for the same walk.' },
  ],
  whyItMatters: 'Altitude illness is predictable, preventable and — except for its severe forms — easily treated by going down. Yet people die of HACE and HAPE every year because they ascended too fast, ignored symptoms, or delayed descent to stay with a schedule. It also silently degrades judgment, sleep, night vision and cold tolerance, amplifying every other hazard in this stage.',
  science: [
    {
      type: 'md',
      md: `### Inspired oxygen pressure

Air entering the lungs is warmed and saturated with water vapour (6.3 kPa at 37 °C), so the inspired oxygen pressure is

$$
P_{iO_2} = 0.2095 \\times (P_B - 6.3\\ \\text{kPa})
$$

where $P_B$ is barometric pressure. In the standard atmosphere, $P_B$ falls from 101.3 kPa at sea level to about 70 kPa at 3,000 m and 50.5 kPa at 5,500 m:

| Altitude | $P_B$ (kPa) | $P_{iO_2}$ (kPa) | % of sea level |
|---|---|---|---|
| 0 m | 101.3 | 19.9 | 100 % |
| 3,000 m | 70.1 | 13.4 | 67 % |
| 5,500 m | 50.5 | 9.3 | 47 % |
| 8,849 m (Everest) | ≈ 31–34 | ≈ 5.3–5.8 | ≈ 27–29 % |

Arterial oxygen saturation, near 97–99 % at sea level, typically falls toward about 90 % at 3,000 m and well below that higher up — varying a lot between people and with acclimatisation.

### Why you pee and breathe more

Hypoxia drives breathing up; that blows off CO₂ and makes the blood alkaline, which in turn *limits* breathing. Over days the kidneys excrete bicarbonate to compensate, letting breathing rise further — acclimatisation. (Acetazolamide, used for prevention on prescription, speeds this by making the kidneys excrete bicarbonate.)

### Water loss at altitude

Breathing more of colder, drier air raises respiratory water loss — often **0.5–1 L/day extra** at high altitude — on top of sweat. Mild dehydration mimics and worsens AMS symptoms, but over-drinking does not prevent AMS.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Andes and Tibetan plateau.** Travellers flying into cities at 3,400–3,700 m (e.g., Cusco, La Paz, Lhasa) commonly get AMS on the first night. A rest day on arrival — or an itinerary starting lower — is standard advice.

**Himalayan trekking.** Well-run treks build rest days into itineraries above 3,000 m; most HAPE and HACE cases follow fast ascents or ignored symptoms.

**Alpine and North American mountains.** Climbers driving from sea level to sleep at trailheads near 3,000 m before summit days risk AMS within a weekend.

**Arctic and subarctic mountains.** Cold, wind and altitude combine: frostbite and hypothermia risk rise while judgment falls.

**Desert mountains.** Hot valleys to cold high summits in a day: water, cold and hypoxia all at once.`,
    },
  ],
  mistakes: [
    'Believing fitness protects against altitude illness — it does not.',
    'Continuing up with a headache and nausea “to keep to the schedule”.',
    'Treating HACE or HAPE with rest at the same altitude instead of descending.',
    'Sending a sick person down alone.',
    'Drinking large volumes “to prevent AMS” — hydration matters, but overdrinking adds hyponatremia risk without preventing AMS.',
    'Mistaking AMS for a hangover or a cold and ignoring it.',
  ],
  exercises: [
    {
      id: 's8-l8-e1',
      title: 'Plan a safe ascent profile',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['A trek itinerary (real or from a guidebook) reaching 5,000+ m', 'Graph paper or spreadsheet'],
      steps: [
        'Plot sleeping altitude by day for the itinerary.',
        'Mark every night above 3,000 m where sleeping altitude rises more than 500 m, and every 3–4 days without a rest day.',
        'Redesign the itinerary to meet the guidance. Add a descent plan and a named person responsible for daily symptom checks.',
      ],
      success: ['Your revised plan keeps sleeping-altitude gains ≤ 500 m/day above 3,000 m with rest days.', 'You have a written descent trigger (worsening AMS, any HACE/HAPE sign).'],
      skill: 'risk-assessment',
    },
    {
      id: 's8-l8-e2',
      title: 'Symptom-check drill',
      level: 1,
      safety: 'home',
      minutes: 15,
      steps: [
        'Write a daily altitude check card: headache (0–3), GI symptoms, fatigue, dizziness, heel-to-toe walk test, breathlessness at rest.',
        'Practise the heel-to-toe (tandem) walk test on a friend and on yourself.',
        'Decide in advance what score or sign triggers “no higher” and what triggers “descend now”.',
      ],
      success: ['You have a card with clear action thresholds.'],
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l8-q2',
      kind: 'single',
      prompt: 'A trekker at 4,300 m with a headache becomes unsteady and cannot walk heel-to-toe in a straight line. What does this suggest, and what should happen?',
      choices: [
        { id: 'a', text: 'Mild AMS — rest a day here.', why: 'Ataxia signals HACE, not mild AMS.' },
        { id: 'b', text: 'HACE — descend now with companions.', why: 'Correct — descend immediately, never alone, and seek help.' },
        { id: 'c', text: 'Dehydration — drink 2 L and continue.', why: 'Dangerous misattribution.' },
        { id: 'd', text: 'Fatigue — sleep and reassess tomorrow.', why: 'HACE can progress to coma overnight.' },
      ],
      answer: 'b',
      concepts: ['altitude-illness'],
      explanation: 'Ataxia or altered mental status at altitude = HACE until proven otherwise. Descend now; never alone.',
    },
    {
      id: 's8-l8-q4',
      kind: 'single',
      prompt: 'Which of these is **not** a sign of HAPE?',
      choices: [
        { id: 'a', text: 'Breathlessness while at rest', why: 'A key sign of HAPE.' },
        { id: 'b', text: 'Much lower exercise tolerance than companions', why: 'A HAPE sign — often the earliest one.' },
        { id: 'c', text: 'Cough, later with pink frothy sputum', why: 'A HAPE sign.' },
        { id: 'd', text: 'Ataxia with normal breathing', why: 'Correct — that suggests HACE, not HAPE.' },
      ],
      answer: 'd',
      concepts: ['altitude-illness'],
      explanation: 'HAPE is fluid in the lungs: breathlessness at rest, falling exercise tolerance, cough. Descend, minimise exertion, oxygen if available.',
    },
    {
      id: 's8-l8-q3',
      kind: 'single',
      prompt: 'You sleep at 3,000 m on night 0. Using ≤ 500 m/day sleeping-altitude gain and a rest day after every 3 days of gain, what is the minimum number of further nights to first sleep at 5,000 m?',
      choices: [
        { id: 'a', text: '5 nights', why: 'Correct — 3,500, 4,000, 4,500, rest, 5,000.' },
        { id: 'b', text: '4 nights', why: 'This forgets the rest day after three days of gain.' },
        { id: 'c', text: '6 nights', why: 'This counts night 0 at 3,000 m as one of the further nights.' },
        { id: 'd', text: '7 nights', why: 'This takes a rest day after every day of gain, not every third.' },
      ],
      answer: 'a',
      concepts: ['ascent-rate'],
      explanation: '3,500 (1), 4,000 (2), 4,500 (3), rest at 4,500 (4), 5,000 (5) → **5** nights.',
    },
    {
      id: 's8-l8-q5',
      kind: 'single',
      prompt: 'Which statement about fitness and acute mountain sickness is correct?',
      choices: [
        { id: 'a', text: 'Fitness does not protect; ascent rate and sleeping altitude matter.', why: 'Correct — along with personal history. Fit people may even ascend too fast.' },
        { id: 'b', text: 'Very fit athletes are largely protected from acute mountain sickness.', why: 'Myth — fitness does not protect.' },
        { id: 'c', text: 'Fitness protects you, provided you also drink plenty of water.', why: 'Neither fitness nor drinking prevents AMS; ascent rate does.' },
        { id: 'd', text: 'Unfit people always get AMS first, so they are the ones to watch.', why: 'Anyone can get AMS; watch everyone, including the fittest.' },
      ],
      answer: 'a',
      concepts: ['altitude-illness', 'ascent-rate'],
      explanation: 'Fitness does not protect; ascent rate, sleeping altitude and personal history matter. Fit people may even ascend too fast.',
    },
    {
      id: 's8-l8-q1',
      kind: 'single',
      prompt: 'At 4,000 m the barometric pressure is about 61.6 kPa. What is the inspired oxygen pressure $P_{iO_2} = 0.2095 \\times (P_B - 6.3)$?',
      choices: [
        { id: 'a', text: '≈ 11.6 kPa', why: 'Correct — 0.2095 × 55.3.' },
        { id: 'b', text: '≈ 12.9 kPa', why: 'This forgets to subtract the 6.3 kPa of water vapour.' },
        { id: 'c', text: '≈ 6.6 kPa', why: 'This subtracts 6.3 after multiplying instead of before.' },
        { id: 'd', text: '≈ 19.9 kPa', why: 'This uses sea-level pressure (101.3 kPa) instead of 61.6 kPa.' },
      ],
      answer: 'a',
      concepts: ['hypoxia'],
      explanation: '0.2095 × (61.6 − 6.3) = 0.2095 × 55.3 ≈ **11.6 kPa** — about 58 % of sea level.',
    },
  ],
  scenario: {
    id: 's8-l8-sc',
    setup: 'Day 4 of a trek. Last night you slept at 4,200 m after a 700 m gain. This morning one member has a pounding headache, nausea and poor appetite, but walks normally and is thinking clearly. The plan is to sleep at 4,900 m tonight. There is a lodge at 3,900 m, two hours back down.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Continue to 4,900 m with painkillers; she will acclimatise on the way.', why: 'Ascending with AMS risks progression to HACE/HAPE.' },
      { id: 'b', text: 'Stay at 4,200 m today and treat her; descend to 3,900 m if she gets worse.', why: 'Best: no higher; rest, fluids, simple pain relief, re-checks through the day — and descend at any sign of worsening or HACE/HAPE.' },
      { id: 'c', text: 'Send her down alone to the lodge while the rest of the group continues.', why: 'Never leave someone with altitude illness alone.' },
      { id: 'd', text: 'Continue as planned; AMS is just a hangover-like nuisance that passes.', why: 'Ignores the key rule: do not ascend with symptoms.' },
    ],
    best: 'b',
    debrief: 'Mild AMS: do not go higher; rest and treat symptoms; descend if worse or at any sign of HACE (ataxia, confusion) or HAPE (breathless at rest). The itinerary’s 700 m gain was itself the problem — adjust the rest of the plan.',
    concepts: ['altitude-illness', 'ascent-rate', 'decisions'],
  },
  summary: [
    '$P_{iO_2} = 0.2095(P_B - 6.3)$; about half of sea level at ~5,500 m.',
    'AMS: headache + nausea/fatigue/dizziness; HACE: ataxia/confusion; HAPE: breathless at rest.',
    'Never ascend with symptoms; descend if worse or any HACE/HAPE sign; never alone.',
    'Above 3,000 m: ≤ 500 m/day sleeping gain, rest day every 3–4 days.',
    'Altitude adds water loss, cold, UV and worse judgment and night vision.',
  ],
  furtherReading: ['wms-altitude-2024', 'cdc-yellowbook-altitude', 'freedom-hills'],
  references: ['wms-altitude-2024', 'cdc-yellowbook-altitude', 'tbmed-505', 'auerbach'],
}
