import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's9-l6',
  stage: 9,
  order: 6,
  title: 'Environmental emergencies',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s8-l3', 's8-l4'],
  concepts: ['hypothermia', 'heat-illness', 'dehydration', 'lightning', 'heat-balance', 'fa-myths'],
  objectives: [
    'Stage **hypothermia** by behaviour and shivering, and give field care: stop heat loss, a hypothermia wrap, gentle handling, evacuation criteria.',
    'Separate **heat exhaustion** from **heat stroke** by mental status, and cool heat stroke **first**, transport second.',
    'Recognise **dehydration** and its look-alike **exercise-associated hyponatraemia**.',
    'Reduce **lightning** risk and care for lightning casualties, including “reverse triage”.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 8 explained *why* bodies overheat and chill. This lesson turns that physiology into care. Every environmental emergency starts with the same step: **remove the person from the environment that is causing it** — out of the wind and wet, into shade, off the ridge.`,
    },
    {
      type: 'md',
      md: `### Hypothermia (core temperature below 35 °C)

You rarely have an accurate core thermometer in the field, so the Wilderness Medical Society (2019) stages hypothermia by what you can **see**:

| Stage (approx. core) | What you see | Care |
|---|---|---|
| **Cold stressed** (> 35 °C) | Shivering, normal mind | Shelter, dry layers, food, warm drink; can keep moving |
| **Mild impairment** (35–32 °C) | Violent shivering, the "umbles": stumbles, mumbles, fumbles, grumbles | Stop heat loss, wrap, warm sweet drinks if able to swallow, rest; evacuate if not quickly improving |
| **Moderate** (32–28 °C) | Drowsy, confused, shivering fading or stopped | Wrap, horizontal, **handle very gently**; nothing by mouth; **evacuate** |
| **Severe** (< 28 °C) | Unresponsive, very slow breathing and pulse | As above; check breathing/pulse for up to a minute; CPR if no signs of life (course-taught) — **emergent** |

**Field care — the hypothermia wrap ("burrito"):** get out of the wind and wet; insulate **under** the patient first; remove wet clothing if you are sheltered (or cover it with a vapour barrier if not); wrap in sleeping bag(s) with a **vapour barrier** (plastic sheet, bivy, emergency blanket) and a **wind/waterproof outer layer**; add **heat sources** — warm water bottles wrapped in cloth — to the chest, armpits and back. Keep the patient **horizontal**, especially if moderate or severe: a cold heart is irritable, and rough handling can trigger a fatal rhythm.

Why drinks only if alert? Because a drowsy patient can choke. Why sugar? Shivering burns carbohydrate fast — fuel keeps the internal furnace running. Warm drinks feel good but deliver only a little heat; the wrap does the real work.`,
    },
    { type: 'diagram', id: 'hypothermia-wrap', caption: 'A hypothermia wrap stops conduction, convection and evaporation — the heat-loss routes from Stage 1.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Myths',
      md: '- **Rub the arms and legs to warm them.** Doesn\'t rewarm the core and can damage cold tissue.\n- **A shot of alcohol warms you.** It dilutes skin vessels — you *feel* warm while losing heat faster.\n- **Rewarm frostbitten fingers by the fire or by rubbing with snow.** Thaw frostbite only in warm water (~37–39 °C) and only if it will not refreeze; never rub (WMS frostbite 2024).\n- **"Nobody is dead until warm and dead"** is a hospital principle for severe hypothermia — in the field, follow your course protocol, since CPR during a long evacuation is often impossible.',
    },
    {
      type: 'md',
      md: `### Heat illness

The dividing line is **mental status**:

- **Heat exhaustion**: weak, dizzy, headache, nausea, sweaty, fast pulse — but **thinking normally**. Stop, shade, lie down, loosen clothing, drink water with some salt/electrolytes, cool with wet cloths and fanning. Should improve within about 30 minutes; if not, treat as worse.
- **Heat stroke**: high body temperature (typically > 40 °C) **plus altered mental status** — confusion, odd behaviour, collapse, seizures. Sweating may continue (exertional heat stroke). **Cool first, transport second** (WMS 2024, ACSM 2023): every minute above ~40 °C damages brain, kidneys, liver and muscle.
  - **Best: cold-water immersion** (a stream, lake, a tarp filled with water) up to the neck, head supported.
  - **Otherwise**: soak with water and fan continuously; cold packs if available. Keep going.
  - **Stop cooling** at about **38.5 °C** (WMS target band 38.3–38.8 °C) or when mental status clears if you can't measure, to avoid overshooting into hypothermia.
  - Nothing by mouth until alert; recovery position if drowsy; **evacuate** even if they recover.`,
    },
    { type: 'diagram', id: 'heat-spectrum', caption: 'Mental status separates heat exhaustion from heat stroke; hyponatraemia is the look-alike with normal temperature.' },
    {
      type: 'md',
      md: `### Dehydration and its dangerous look-alike

**Dehydration** — thirst, dark scant urine, headache, fatigue, dizziness on standing, fast pulse. About **1 kg of body mass lost = 1 L of fluid**. Losing more than ~2 % of body mass measurably impairs endurance and thinking. Treat with water plus electrolytes; for moderate losses (e.g., diarrhoea) an oral rehydration solution (commercial sachets; a common home recipe is about 6 level teaspoons of sugar and ½ level teaspoon of salt in 1 L of clean water), in small frequent sips.

**Exercise-associated hyponatraemia** — low blood sodium from **drinking too much plain water** (often while trying to avoid heat illness) during long exertion. Nausea, headache, confusion, a **normal temperature**, clear urine, and a history of heavy drinking. It can progress to seizures and coma. **Don't give more water**; salty food if alert and mild; **evacuate** if mental status is altered. The lesson: drink to thirst and eat salty food on long hot days.`,
    },
    {
      type: 'md',
      md: `### Lightning

**Prevention beats treatment.** If you can hear thunder, you are within striking distance. Plan exposed ridges and summits for the morning in thunderstorm seasons, get off high points and out of open ground early, avoid lone trees, water and metal fences, and **spread the group out** so one strike cannot injure everyone. Tents and open shelters give no protection. Wait **30 minutes after the last thunder** before returning to exposed terrain.

**Care:** lightning victims do **not** carry a charge — touch them at once. Lightning often stops breathing (and the heart) in an otherwise intact body, so **those who look dead get CPR first** ("reverse triage"). Survivors may have burns, ruptured eardrums, temporary limb paralysis, confusion and memory loss; anyone struck should be evacuated for assessment.`,
    },
    {
      type: 'table',
      head: ['Practise at home / outdoors', 'Needs a course'],
      rows: [
        ['Building a hypothermia wrap around a partner (outdoors, supervised, no real cold exposure)', 'Recognising and handling moderate/severe hypothermia; CPR in the cold'],
        ['Planning cooling kits for hot trips (tarp for immersion, water, spray bottle)', 'Heat-stroke cooling protocols with temperature measurement'],
        ['Tracking your own weight loss and urine colour on hot hikes', 'Assessing hyponatraemia vs heat stroke in the field'],
        ['Lightning flash-to-bang counting; planning ridge timing', 'Lightning casualty care scenarios'],
      ],
    },
  ],
  whyItMatters: 'Cold, heat and lightning kill healthy people — people with no injury at all — and they do it on ordinary trips when the weather turns. Environmental emergencies are also the ones a group can most often prevent (clothing, pace, timing, drinking sensibly) and most effectively treat in the field (a wrap, a cold-water tarp).',
  science: [
    {
      type: 'md',
      md: `### How fast can you cool heat stroke?

Cooling rate depends on how fast heat can flow out of the body. Water conducts heat about **25 times** better than air, so immersion in cold water removes heat far faster than fanning. Measured cooling rates for cold-water immersion are typically well over 0.1 °C per minute; evaporative methods are several times slower.

**Worked example.** A patient is at 41.5 °C. Target 38.8 °C = a drop of 2.7 °C.

- Immersion at ~0.15 °C/min: $2.7 / 0.15 = 18$ minutes.
- Soaking and fanning at ~0.04 °C/min: $2.7 / 0.04 \\approx 68$ minutes.

An extra 50 minutes above 40 °C is the difference that matters — which is why "cool first, transport second" is the rule.`,
    },
    {
      type: 'md',
      md: `### Lightning distance: flash to bang

Light arrives almost instantly; sound travels at about 343 m/s — about **3 seconds per kilometre**. Count seconds from flash to thunder and divide by 3 for kilometres:

$$ d\\ (\\text{km}) \\approx \\frac{t\\ (\\text{s})}{3} $$

Thunder 15 s after the flash → about 5 km. Strikes can land 10 km or more from the storm, so any audible thunder means "act now".

### Dehydration arithmetic

A 70 kg hiker weighs 67.9 kg after a hot day. Loss = 2.1 kg ≈ 2.1 L, or $2.1/70 = 3\\ \\%$ of body mass — past the ~2 % threshold where performance and judgment drop.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (temperate, summer).** Hypothermia at 8 °C: a runner in shorts caught in wind and rain on a summit ridge. Most hypothermia happens at temperatures above freezing, when wet and wind combine (Stage 1 "wet + wind").

**Arctic/subarctic.** A skier with frost-nipped cheeks and moderate hypothermia after falling through lake ice: out of the water, wet clothes off inside a tent, full wrap, horizontal, satellite call — emergent evacuation.

**Desert.** Exertional heat stroke on a canyon hike at 40 °C: the group fills a tarp with river water, immerses the patient to the neck and fans; mental status clears in 20 minutes; evacuated.

**Urban.** A marathon runner collapses confused at the finish — normal temperature, drank at every station. Hyponatraemia, not heat stroke; the medical tent withholds water.

**Tropical.** Heat exhaustion in high humidity at only 30 °C, because sweat cannot evaporate. Rest in shade, fan, fluids with salt.

**Rural plains.** A farm worker is struck by lightning; bystanders start CPR immediately and he survives.`,
    },
  ],
  mistakes: [
    'Waiting for the temperature to drop below freezing before thinking about hypothermia.',
    'Rough handling or walking a moderately hypothermic patient.',
    'Giving drinks to a drowsy patient.',
    'Delaying cooling of heat stroke to start the evacuation.',
    'Forcing water on a confused hiker with a normal temperature (hyponatraemia).',
    'Myth: lightning never strikes the same place twice, and victims are "electrified".',
  ],
  exercises: [
    {
      id: 's9-l6-e1',
      title: 'Hypothermia wrap build with a team',
      level: 3,
      safety: 'supervised',
      minutes: 45,
      materials: ['Two foam pads', 'Two sleeping bags', 'Large plastic sheet or bivy', 'Tarp', 'Two water bottles with warm (not hot) water in socks'],
      steps: [
        'Outdoors on a cool day, with an experienced person present: one volunteer lies down fully clothed.',
        'Team builds the wrap in order: ground insulation, bag, vapour barrier, outer shell; warm bottles to chest and armpits (never directly on skin).',
        'Move the "patient" only horizontally, as a unit, with a leader calling moves.',
        'Unwrap after 10 minutes; ask where cold air got in.',
      ],
      success: ['Wrap complete in under 10 minutes.', 'Patient never sat or stood up during the drill.', 'No bare hot bottles against skin.'],
      skill: 'hypothermia-mgmt',
      safetyNote: 'No real cold exposure: the volunteer stays dry and warm. Warm bottles, not hot — burns are common with heat packs on cold skin.',
    },
    {
      id: 's9-l6-e2',
      title: 'Hot-trip cooling and hydration plan',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'For a hot-weather trip, list where you could immerse a heat-stroke patient (streams, lakes) and what you would use elsewhere (tarp, water, spray, fan).',
        'Plan water: estimate sweat losses (Stage 1/8), drinking plan, salty snacks — and a rule for recognising over-drinking.',
        'Weigh yourself before and after your next warm hike; calculate % body-mass change.',
      ],
      success: ['A written cooling plan with specific locations and gear.', 'Your % mass change is under 2 %.'],
      skill: 'fa-evac-plan',
    },
  ],
  quiz: [
    {
      id: 's9-l6-q1',
      kind: 'single',
      prompt: 'A hiker in 40 °C heat is confused and combative, with hot sweaty skin. Which action comes first?',
      choices: [
        { id: 'a', text: 'Start walking him to the trailhead 3 km away so he can reach a hospital.', why: 'Transport before cooling lets organ damage continue.' },
        { id: 'b', text: 'Cool him aggressively now: creek immersion if possible, otherwise soak and fan.', why: 'Correct — heat stroke: cool first, transport second.' },
        { id: 'c', text: 'Make him drink a litre of water quickly to replace the fluid he has sweated.', why: 'A confused patient may choke; drinking does not cool fast enough.' },
        { id: 'd', text: 'Wrap him in an emergency blanket to prevent shock while you call for help.', why: 'Traps heat — dangerous.' },
      ],
      answer: 'b',
      concepts: ['heat-illness'],
      explanation: 'Altered mental status + heat = heat stroke. Cold-water immersion is the most effective field treatment (WMS 2024); if not possible, soak and fan continuously.',
    },
    {
      id: 's9-l6-q2',
      kind: 'single',
      prompt: 'Which of these does **not** belong in the field care of **moderate** hypothermia (drowsy, shivering stopped)?',
      choices: [
        { id: 'a', text: 'Keep the patient horizontal and handle them gently', why: 'Belongs — the cold heart is irritable.' },
        { id: 'b', text: 'Hypothermia wrap with heat sources to chest and armpits', why: 'Belongs — with a vapour barrier, it stops further heat loss.' },
        { id: 'c', text: 'Hot sweet drinks to rewarm them from the inside', why: 'Correct — this does not belong: a drowsy patient can choke. Drinks are for alert patients.' },
        { id: 'd', text: 'Arrange evacuation as soon as they are wrapped', why: 'Belongs — moderate hypothermia always needs evacuation.' },
      ],
      answer: 'c',
      concepts: ['hypothermia'],
      explanation: 'Stop heat loss, handle gently, wrap, evacuate. Food and drink only for alert patients, and never walk a moderately hypothermic patient.',
    },
    {
      id: 's9-l6-q4',
      kind: 'single',
      prompt: 'A confused marathon runner has a normal body temperature and has drunk a lot of plain water. What is the best approach?',
      choices: [
        { id: 'a', text: 'Suspect hyponatraemia: give no more water, and evacuate as he is confused.', why: 'Correct — more water makes hyponatraemia worse; altered mental status means evacuation.' },
        { id: 'b', text: 'Treat it as dehydration and give him plenty more water to drink quickly.', why: 'That pattern suggests hyponatraemia; more water makes it worse.' },
        { id: 'c', text: 'Treat it as heat stroke and immerse him in cold water straight away.', why: 'His temperature is normal; the pattern points to hyponatraemia, not heat stroke.' },
        { id: 'd', text: 'Let him rest in the shade for an hour, then let him finish if he feels fine.', why: 'Altered mental status is a reason to evacuate, not to carry on.' },
      ],
      answer: 'a',
      concepts: ['dehydration', 'heat-illness'],
      explanation: 'Confusion, normal temperature and lots of plain water suggest exercise-associated hyponatraemia; more water makes it worse. Evacuate if mental status is altered.',
    },
    {
      id: 's9-l6-q6',
      kind: 'single',
      prompt: 'Which weather combination most often produces hypothermia in hikers?',
      choices: [
        { id: 'a', text: 'Dry, calm, −10 °C with good clothing', why: 'Cold, but dry calm air with insulation is manageable.' },
        { id: 'b', text: 'Wind and rain at 5–10 °C with wet clothing', why: 'Correct — wet + wind multiplies heat loss (Stage 1).' },
        { id: 'c', text: 'Hot, humid 30 °C with heavy sweating', why: 'Heat illness, not hypothermia.' },
        { id: 'd', text: 'Snow at 0 °C with a shell and dry insulation', why: 'Well protected.' },
      ],
      answer: 'b',
      concepts: ['hypothermia', 'wet-wind', 'heat-loss'],
      explanation: 'Most hypothermia happens above freezing: evaporation, convection and wet insulation combine.',
    },
    {
      id: 's9-l6-q3',
      kind: 'single',
      prompt: 'You count 12 seconds between a lightning flash and its thunder. About how far away was the strike?',
      choices: [
        { id: 'a', text: 'About 4 km', why: 'Correct — 12 / 3 ≈ 4 km.' },
        { id: 'b', text: 'About 12 km', why: 'This forgets to divide by 3, as if sound travelled 1 km per second.' },
        { id: 'c', text: 'About 36 km', why: 'This multiplies by 3 instead of dividing by 3.' },
        { id: 'd', text: 'About 2.4 km', why: 'This uses the miles rule (divide by 5) and reads the answer as km.' },
      ],
      answer: 'a',
      concepts: ['lightning'],
      explanation: 'Sound travels ~1 km per 3 s: 12 / 3 ≈ **4 km** — well within striking distance. Get off exposed ground now.',
    },
    {
      id: 's9-l6-q5',
      kind: 'single',
      prompt: 'Lightning strikes near your group of four. One person is unresponsive and not breathing, one has burns and is crying, two are dazed but talking. Whom do you help first?',
      choices: [
        { id: 'a', text: 'The crying person with burns, who is clearly in pain.', why: 'They are breathing and talking.' },
        { id: 'b', text: 'The one who is not breathing — start CPR on them.', why: 'Correct — reverse triage: lightning arrest is often survivable with prompt CPR.' },
        { id: 'c', text: 'Nobody yet — wait until their electrical charge fades.', why: 'Myth — victims carry no charge.' },
        { id: 'd', text: 'The two dazed ones, to move them into a tent.', why: 'Tents offer no protection and they are not the priority.' },
      ],
      answer: 'b',
      concepts: ['lightning', 'abc', 'fa-myths'],
      explanation: 'Normal triage deprioritises the pulseless; lightning reverses that.',
    },
  ],
  scenario: {
    id: 's9-l6-sc',
    setup: 'Scottish-style mountain, 15:00, 6 °C, 50 km/h wind, driving rain. Sunset 17:00. A group member is shivering hard, stumbling and slurring. You are 2 km (downhill, 1 h) from a bothy (stone hut) and 6 km from the road. You have a group shelter, spare fleece, a stove, sweet drinks and a phone with signal.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Push hard for the road, 6 km away, so he reaches hospital as quickly as possible tonight.', why: 'Hours of exposure in wind and rain at dusk will deepen hypothermia — and the effort may exhaust him.' },
      { id: 'b', text: 'Get into the group shelter, add dry fleece, give warm sweet drinks, then move with care to the bothy.', why: 'Best: stop heat loss immediately on the lee side, refuel while he can still hold a cup, and once shivering eases make a short, reversible move with the group close around him; call to report and reassess.' },
      { id: 'c', text: 'Give him a nip of whisky to warm him up, then keep going toward the bothy.', why: 'Myth: alcohol increases heat loss.' },
      { id: 'd', text: 'Stay put on the open ridge, keep him company and call mountain rescue to come to you.', why: 'Waiting exposed in wind and rain lets hypothermia progress; a group shelter and a short move are better.' },
    ],
    best: 'b',
    debrief: 'He is **mildly impaired** (shivering, "umbles"). Treat in place first — Stage 1’s cheapest high-value action is stopping heat loss — then a **short** move to a hut is reasonable while he can still walk. Had he been drowsy with shivering stopped (moderate), you would **not** walk him: wrap him horizontally where you are and call for evacuation. This is stay-or-move applied to a patient.',
    concepts: ['hypothermia', 'stay-or-move', 'wet-wind'],
  },
  summary: [
    'Remove the person from the environment causing the problem.',
    'Hypothermia: stage by shivering and mental status; wrap with ground insulation, vapour barrier and shell; gentle and horizontal; drinks only if alert; moderate/severe → evacuate.',
    'Heat stroke = heat + altered mind → cool first (immersion best), stop ~38.5 °C, then evacuate.',
    'Dehydration: 1 kg ≈ 1 L; >2 % loss impairs you. Hyponatraemia: confused, normal temp, over-drank — no more water.',
    'Lightning: thunder audible = in range; spread out; 30 min after last thunder; reverse triage.',
  ],
  furtherReading: ['wms-hypothermia-2019', 'wms-heat-2024', 'fa-wms-lightning-2014'],
  references: ['wms-hypothermia-2019', 'wms-heat-2024', 'wms-frostbite-2024', 'acsm-ehi-2023', 'fa-wms-lightning-2014', 'nws-lightning', 'usariem-cold', 'tbmed-507', 'fa-aha-arc-2024'],
}
