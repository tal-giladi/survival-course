import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's8-l3',
  stage: 8,
  order: 3,
  title: 'Hypothermia',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s8-l2'],
  concepts: ['hypothermia', 'afterdrop', 'shivering', 'wet-wind'],
  objectives: [
    'Classify cold patients as **cold-stressed, mild, moderate or severe** using the WMS 2019 staging and field signs (mental status, shivering).',
    'Explain **afterdrop** and why moderate and severe hypothermia demand **gentle, horizontal handling**.',
    'Describe evidence-based **field rewarming**: stop the loss, insulate (especially underneath), vapour barrier, heat to the trunk, calories for those who can swallow.',
    'Recognise when hypothermia is an **evacuation** emergency and why hands-on training is essential.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'info',
      title: 'Educational content — not a substitute for training',
      md: 'This lesson explains the physiology and the current Wilderness Medical Society (WMS) approach so you can understand and prevent hypothermia. Managing a hypothermic patient safely — assessment, handling, CPR decisions — must be learned hands-on on a **WFA / WAFA / WFR** course. In an emergency, call for help early.',
    },
    {
      type: 'md',
      md: `**Hypothermia** means a core temperature below **35 °C**. It is most common not in extreme cold but at **0–10 °C in wind and rain**, in people who are wet, tired, underfed or injured — and in anyone who falls into cold water. It creeps: the same brain that should notice the problem is being cooled.

### Staging

The WMS 2019 guideline uses core temperature where it can be measured reliably (in the field it usually cannot — oral and ear thermometers read low in the cold), and otherwise **mental status and shivering**:`,
    },
    { type: 'diagram', id: 's8-hypothermia-stages', caption: 'Hypothermia stages (after WMS 2019). Classify by the signs you can observe and assume the worse stage if unsure.' },
    {
      type: 'table',
      head: ['Stage', 'Core (approx.)', 'What you see', 'Field priorities'],
      rows: [
        ['Cold stressed (not hypothermic)', '35–37 °C', 'Shivering, cold, normal mental status, can care for self', 'Shelter, dry layers, food and drink, move to generate heat'],
        ['Mild', '35–32 °C', 'Shivering; the “umbles” — stumbles, mumbles, fumbles, grumbles; poor judgment', 'Stop heat loss, insulate, calories; may walk if able; evacuation depends on response'],
        ['Moderate', '32–28 °C', 'Drowsy or confused; shivering may **stop**', 'Horizontal, gentle handling, full hypothermia wrap, heat to trunk, **evacuate**'],
        ['Severe', '< 28 °C', 'Unconscious; breathing and pulse may be very slow and hard to find', 'As moderate; check breathing and pulse for up to a minute; urgent evacuation; CPR per training'],
      ],
    },
    {
      type: 'md',
      md: `### Afterdrop and gentle handling

When a cold person is rescued, the core may **keep cooling for a while**: the cold shell is still exchanging heat with the core, and the body is still losing heat until it is fully wrapped. Rough handling, standing up, walking or rubbing the limbs can make this worse and — in moderate and severe hypothermia — the cold heart is irritable and prone to dangerous arrhythmias. Hence the rules: **keep them horizontal, move them gently, do not make them walk, do not rub the limbs.**`,
    },
    { type: 'diagram', id: 's8-afterdrop', caption: 'Afterdrop (illustrative). Insulation and gentle handling limit how far the core keeps falling after rescue.' },
    {
      type: 'md',
      md: `### Field rewarming — what actually works

1. **Stop further loss.** Out of wind and water; onto insulation; replace wet clothing *if* it can be done without long exposure — otherwise add a **vapour barrier** (plastic sheet, foil blanket) over the wet clothes.
2. **Insulate all round — especially underneath.** Sleeping bags, jackets, pads; cover the head and neck.
3. **Add heat to the trunk.** Chemical heat packs or warm water bottles on the **chest, armpits and back** (never directly on skin — burns happen easily on cold skin). Heat to the hands and feet alone does little for the core.
4. **Fuel.** If the person is alert and can swallow safely: calories (sugary drinks, food). Warm drinks are mostly about calories and morale; the heat they carry is small.
5. **Exercise only for the mildly cold.** A cold-stressed or mildly hypothermic person who is alert may walk or exercise to generate heat — after eating. Moderate and severe: no.
6. **Evacuate** moderate and severe hypothermia, and anyone not improving.`,
    },
    { type: 'diagram', id: 's8-hypothermia-wrap', caption: 'The hypothermia wrap (“burrito”) from outside in. Ground insulation is the part most often skimped.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Myths that cause harm',
      md: 'Do **not** rub cold limbs, give alcohol, put a cold person in a hot shower or bath in the field, or make a confused hypothermic person walk out. Body-to-body warming in a sleeping bag delivers less heat than packs on the trunk and can delay other care — use it only when nothing better is available.',
    },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Run Challenge 1 and note when the core crosses 35 °C and 32 °C without intervention — then find the cheapest fix.' },
  ],
  whyItMatters: 'Hypothermia kills in ordinary weather and ordinary places — day walks, fishing trips, lake crossings, broken-down cars. It is also a companion of every other emergency: an injured person lying still on cold ground becomes hypothermic even on a mild day, and hypothermia makes bleeding and shock worse. Prevention and early recognition are cheap; late treatment is hard.',
  science: [
    {
      type: 'md',
      md: `### Why the brain goes first

Nerve conduction and brain metabolism slow as temperature falls — roughly **6–7 % less oxygen consumption per °C** of cooling. The first things to go are the highest functions: judgment, planning and fine coordination. That is why mildly hypothermic people make poor decisions (paradoxical undressing near the end is one grim example) and why a group must watch its members.

### Why shivering stops

Shivering is driven by the cold signal but limited by fuel and by the muscles themselves. Below about **32 °C** core, shivering typically weakens and stops. With it goes the body’s main heat source — so without external heat and insulation the fall speeds up.

### The cold heart

Below about **32 °C** the risk of arrhythmias rises; below about **28 °C** (and especially lower) the risk of cardiac arrest becomes high, and a jolt or position change can trigger ventricular fibrillation. Heart rate and breathing slow dramatically, which is why rescuers check for signs of life for **up to a minute** before deciding a severely hypothermic person has no pulse.

### A worked number: how fast does a stopped hiker cool?

A 70 kg walker in soaked cotton at 5 °C in wind stops moving. Heat production falls to ~105 W; losses might be ~400 W after vasoconstriction; shivering supplies ~200 W. Net ≈ −95 W. With 245 kJ per °C:

$$
\\frac{95 \\times 3600}{245\\,000} \\approx 1.4\\ \\text{°C per hour}
$$

So mild hypothermia can arrive in about an hour — and faster once glycogen for shivering runs short.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate hills (UK, Appalachians, New Zealand).** Most hypothermia rescues are walkers caught in rain and wind at 2–8 °C, often late in the day, tired and underfed.

**Subarctic.** A snowmobiler breaks through lake ice near shore, self-rescues, and must then deal with wet clothing at −20 °C. The priority is dry insulation and shelter immediately — a vapour barrier and a sleeping bag, or a fire — not a long walk.

**Urban.** An older person living alone in an unheated home in winter develops hypothermia indoors at 12 °C air temperature. Hypothermia is not only an outdoor problem.

**Desert and tropics.** Flash-flood survivors soaked at night at 12–15 °C, and trekkers caught in cold mountain rain in the tropics, become hypothermic despite the region’s “hot” reputation.`,
    },
  ],
  mistakes: [
    'Believing hypothermia needs freezing temperatures — wet and wind at 0–10 °C is the classic setting.',
    'Myth: rub the limbs to restore circulation — it can worsen afterdrop and damage cold tissue.',
    'Walking a confused (moderate) hypothermic person out instead of packaging them horizontally.',
    'Putting heat packs directly on cold skin, causing burns.',
    'Skimping on insulation underneath the patient.',
    'Giving food or drink to someone too drowsy to swallow safely.',
    'Assuming someone who has stopped shivering is getting better.',
  ],
  exercises: [
    {
      id: 's8-l3-e1',
      title: 'Build a hypothermia wrap',
      level: 3,
      safety: 'home',
      minutes: 45,
      materials: ['A willing partner', 'Tarp or large plastic sheet', 'Foam pads or blankets', 'Sleeping bag(s)', 'Foil blanket or plastic bag (vapour barrier)', 'Warm water bottles (warm, not hot) in socks', 'Hat'],
      steps: [
        'Lay out, from the bottom: tarp, then pads (at least two layers), then sleeping bag.',
        'Have your partner lie on it (in dry clothes — this is practice). Add the vapour barrier around the torso, and the covered warm bottles at chest, armpits and back.',
        'Close the bag, cover the head leaving the face clear, and fold the tarp over into a “burrito”.',
        'Time yourself. Then practise rolling your partner gently with two helpers, keeping them horizontal.',
        'Swap roles and note what it feels like — especially the ground insulation.',
      ],
      success: ['Wrap completed in under 10 minutes with ground insulation, vapour barrier, trunk heat and head covered.', 'You can explain why each layer is there.'],
      safetyNote: 'Use warm, not hot, bottles and always wrap them in fabric. Practice only — hands-on hypothermia care should be learned on a WFA/WAFA course.',
      skill: 'hypothermia-mgmt',
    },
    {
      id: 's8-l3-e2',
      title: 'Take a wilderness first-aid course',
      level: 4,
      safety: 'formal-training',
      minutes: 960,
      steps: [
        'Find a WFA (≈16 h) or WAFA (≈40 h) course from a recognised provider in your region.',
        'During the course, ask to practise assessment and packaging of a cold patient in realistic conditions.',
        'Afterwards, log the course and update your kit to include a vapour barrier and heat packs.',
      ],
      success: ['You hold a current wilderness first-aid certificate.', 'You have practised packaging a hypothermic patient under supervision.'],
      skill: 'hypothermia-mgmt',
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l3-q1',
      kind: 'single',
      prompt: 'A walker is shivering, slurring words and stumbling, but answers questions. Which stage is most likely?',
      choices: [
        { id: 'a', text: 'Cold stressed, not hypothermic', why: 'Mental status and coordination are impaired, so it is worse than cold stress.' },
        { id: 'b', text: 'Mild hypothermia', why: 'Correct — shivering with the “umbles” but still responsive.' },
        { id: 'c', text: 'Moderate hypothermia', why: 'Possible if drowsy and not shivering; shivering and responsiveness suggest mild.' },
        { id: 'd', text: 'Severe hypothermia', why: 'Severe means unconscious.' },
      ],
      answer: 'b',
      concepts: ['hypothermia'],
      explanation: 'Stumbles, mumbles, fumbles, grumbles with shivering = mild. Treat, watch closely, and assume worse if uncertain.',
    },
    {
      id: 's8-l3-q3',
      kind: 'single',
      prompt: 'A hypothermic hiker who was shivering hard has stopped shivering and is becoming more confused. What does this most likely mean?',
      choices: [
        { id: 'a', text: 'The core is still falling or fuel has run out — a danger sign.', why: 'Correct — shivering often stops below about 32 °C or when glycogen runs out.' },
        { id: 'b', text: 'They are warming up, so shivering is no longer needed.', why: 'Worsening mental status says the opposite; this is the classic trap.' },
        { id: 'c', text: 'They have adapted to the cold and can rest unattended.', why: 'There is no such quick adaptation; they need care and close watching.' },
        { id: 'd', text: 'The reflex has paused briefly and will restart in minutes.', why: 'Do not wait for it — loss of shivering plus confusion means escalate care.' },
      ],
      answer: 'a',
      concepts: ['shivering', 'hypothermia'],
      explanation: 'Shivering often stops as the core falls below about 32 °C or as fuel runs out. Loss of shivering with worsening mental status is a danger sign.',
    },
    {
      id: 's8-l3-q2',
      kind: 'single',
      prompt: 'You are caring for a **moderately** hypothermic person. Which action goes **against** current guidance?',
      choices: [
        { id: 'a', text: 'Keep them horizontal and handle them gently', why: 'Follows guidance — limits afterdrop and arrhythmia risk.' },
        { id: 'b', text: 'Wrapped heat packs on chest, armpits and back', why: 'Follows guidance — heat goes to the trunk.' },
        { id: 'c', text: 'Rub their arms and legs vigorously to warm them', why: 'Correct — a myth that can worsen afterdrop and injure tissue.' },
        { id: 'd', text: 'Insulate underneath them as well as on top', why: 'Follows guidance — conduction to the ground is often the biggest loss.' },
      ],
      answer: 'c',
      concepts: ['hypothermia', 'afterdrop'],
      explanation: 'Package, insulate (below as well as above), heat the trunk, handle gently, evacuate. Rubbing limbs and making them walk to warm up are both wrong for moderate hypothermia.',
    },
    {
      id: 's8-l3-q4',
      kind: 'single',
      prompt: 'A hiker in rain is mildly hypothermic. Which step of field care comes **first**?',
      choices: [
        { id: 'a', text: 'Get out of the wind and rain, onto insulation', why: 'Correct — stop the loss before anything else.' },
        { id: 'b', text: 'Replace wet layers with dry ones', why: 'Important, but done once you are out of the wind and rain.' },
        { id: 'c', text: 'Give calories and a warm sweet drink', why: 'Fuel comes after the heat loss is stopped and insulation added.' },
        { id: 'd', text: 'Put heat packs on the trunk', why: 'Added with insulation, after shelter and dry layers.' },
      ],
      answer: 'a',
      concepts: ['hypothermia'],
      explanation: 'Order: shelter and insulation underneath → dry layers → insulation, hat and heat to the trunk → calories → reassess. Stop the loss first, then add heat, then fuel, then decide.',
    },
    {
      id: 's8-l3-q5',
      kind: 'single',
      prompt: 'A casualty’s net heat loss is 120 W and nothing changes. With 245 kJ per °C, about how long until the core has fallen 2 °C?',
      choices: [
        { id: 'a', text: '≈ 1.1 h', why: 'Correct — 490 kJ ÷ 120 W ≈ 4,080 s.' },
        { id: 'b', text: '≈ 0.6 h', why: 'This uses 245 kJ for a 1 °C fall and forgets the 2 °C.' },
        { id: 'c', text: '≈ 0.9 h', why: 'This inverts the ratio (120 × 3,600 ÷ 490,000).' },
        { id: 'd', text: '≈ 68 h', why: 'This divides seconds by 60 (giving minutes) and labels them hours.' },
      ],
      answer: 'a',
      concepts: ['hypothermia', 'heat-balance'],
      explanation: '2 × 245,000 J / 120 W ≈ 4,080 s ≈ **1.1 h**. The body’s defences change this in practice, but the arithmetic shows why there is no time to waste.',
    },
  ],
  scenario: {
    id: 's8-l3-sc',
    setup: 'Autumn, 4 °C, heavy rain. You find a lone hiker sitting against a rock, soaked, drowsy, slow to answer, and not shivering. Your group of three has a tarp, two sleeping bags, foam pads, spare dry clothes, heat packs and a phone with signal. The trailhead is 5 km away.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Help him up and walk him out between two of you so the exercise warms him.', why: 'Moderate hypothermia (drowsy, not shivering): walking risks afterdrop and collapse.' },
      { id: 'b', text: 'Call for rescue; lay him flat under the tarp on pads and bags, heat packs on his trunk.', why: 'Best: treats as moderate hypothermia (add a vapour barrier, handle gently, monitor) and gets help moving early.' },
      { id: 'c', text: 'Give him a large hot drink right away and rub his hands and feet to warm them.', why: 'Too drowsy to swallow safely, and rubbing limbs is a harmful myth.' },
      { id: 'd', text: 'Strip off his wet clothes and share a sleeping bag with him skin-to-skin.', why: 'Long exposure while undressing in rain, and less effective than packs on the trunk.' },
    ],
    best: 'b',
    debrief: 'Drowsy and not shivering suggests moderate hypothermia: horizontal, gentle, fully wrapped with insulation below, vapour barrier over wet clothes, heat to the trunk, and early call for evacuation. This is exactly what a hands-on WFA course trains.',
    concepts: ['hypothermia', 'afterdrop', 'priorities'],
  },
  summary: [
    'Hypothermia = core < 35 °C; stages: cold-stressed, mild (35–32), moderate (32–28), severe (< 28).',
    'Field staging uses mental status and shivering; assume the worse stage when unsure.',
    'Afterdrop: keep moderate/severe patients horizontal, handle gently, no walking, no rubbing.',
    'Rewarming: stop loss → insulate (esp. underneath) → vapour barrier → heat to trunk → calories if safe → evacuate.',
    'Learn it hands-on: WFA/WAFA/WFR.',
  ],
  furtherReading: ['wms-hypothermia-2019', 'usariem-cold', 'nols-wm-book'],
  references: ['wms-hypothermia-2019', 'usariem-cold', 'auerbach', 'nols-wm', 'wms-frostbite-2024'],
}
