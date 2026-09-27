import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's17-l3',
  stage: 17,
  order: 3,
  title: 'Stranded in cold and snow',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s17-l1', 's8-l3'],
  concepts: ['vehicle-exhaust-co', 'carbon-monoxide', 'vehicle-insulation', 'vehicle-fuel-budget', 'stay-with-vehicle', 'hypothermia', 'insulation', 'wind-chill'],
  objectives: [
    'Explain why a **snow-blocked tailpipe** fills a car with carbon monoxide, and run the engine safely: **exhaust clear, short runs, window cracked**.',
    'Keep warm in a stranded car by **insulating yourself and the cabin** and budgeting **fuel and battery**.',
    'Explain why you should **stay with the vehicle** in a winter storm, and what makes walking out so dangerous.',
    'Recognise **hypothermia, frostbite and CO poisoning** in yourself and others, and respond.',
    'Make a snowbound car **visible** to ploughs and searchers.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Winter strandings happen on ordinary roads: a blizzard closes a highway, a car slides into a ditch, snow drifts across a rural road faster than ploughs can clear it. Occupants face hours — sometimes a night or more — at well below freezing, often with wind. Road-safety agencies give remarkably consistent advice: **stay in the vehicle, make it visible, keep the exhaust clear, run the engine only sparingly, and keep warm with layers and blankets**.

### Why stay in the car

In a storm the car is a windproof shelter, it holds your supplies, and it is on the road the ploughs and police will clear. Walking in blowing snow is exhausting (deep drifts, no visibility), soaks clothing with sweat and snow, and people become disoriented within metres of a road. Walk only if you can **see** a building or help close by and reach it safely.`,
    },
    { type: 'diagram', id: 's17-exhaust-co', caption: 'The single most important winter rule: before the engine runs, the tailpipe must be clear.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Carbon monoxide in a snowbound car',
      md: 'When snow drifts over the tailpipe, exhaust is forced under the car and seeps into the cabin. **CO has no colour or smell.** Early symptoms — headache, dizziness, nausea, sleepiness, confusion — look like cold or fatigue, and **people asleep in a running car may never wake**. Rules: **clear the tailpipe** (and the snow around the car) before every engine run and whenever snow is drifting; run the engine **about 10 minutes each hour** for heat, not continuously; keep a **downwind window slightly open**; never run the engine in a closed garage; carry a **battery CO alarm** if you can. If anyone has symptoms: engine off, open doors or windows, fresh air, and seek medical help.',
    },
    {
      type: 'md',
      md: `### Heat: hold it first, add it second

The cabin loses heat fast — glass is a poor insulator and cars leak air. So the order is:

1. **Insulate yourself.** All layers, a hat and neck cover (an uncovered head loses heat like any other bare skin — and it is often the only bare skin left), gloves, dry socks, loosened boots. A **sleeping bag or blankets** are the best items in a winter car kit.
2. **Insulate from below.** Seats and floor conduct heat away; put a blanket, mat or spare clothing under you and keep feet off the floor.
3. **Insulate the cabin.** Cover windows (sun-shade, maps, spare clothing), block drafts, use only the part of the car you need, and share body heat by huddling.
4. **Add heat carefully.** Run the engine and heater for **short bursts** with the exhaust clear and a window cracked. At night, turn on the **dome light** while the engine runs so you can be seen — then off again to save the battery.
5. **Fuel the fire inside.** Eat and drink: shivering burns energy, and cold air and cold-induced urination dry you out. Melt snow in a bottle inside your jacket or in the heated cabin rather than eating it, which chills you.
6. **Move a little.** Clap, flex, wiggle toes; avoid exercise that makes you sweat.
7. **Take turns sleeping** if there are several of you, so one person watches for rescuers, the exhaust and anyone becoming unwell.`,
    },
    { type: 'diagram', id: 's17-winter-cabin', caption: 'Hold heat first — people, then the cabin — and only then add heat from the engine.' },
    { type: 'diagram', id: 's17-fuel-budget', caption: 'Short runs stretch the same fuel roughly five times further — and keep the battery charged.' },
    {
      type: 'md',
      md: `### Budget fuel and battery

Idling fuel use varies widely by vehicle (on the order of a litre per hour for many cars, more with big engines). Running **10 minutes every hour** stretches a half tank from about a day to several days, and keeps the battery charged. Headlights, hazard lights and heaters drain the battery with the engine off; save them for when they matter (night signalling, rescuers heard). A flat battery means no more engine heat at all.

**Electric vehicles** make no exhaust of their own, but heating draws on the range: seat and steering-wheel heaters use far less energy than heating the cabin air, so use those, pre-plan charging on winter trips, and still keep a sleeping bag in the car. A **hybrid’s** engine may start by itself to charge — treat it like any combustion car and keep its exhaust clear.

### Making a snowbound car visible

A car buried by snow looks like a drift. **Tie a bright cloth to the antenna or door**, clear snow off the roof, and when the snow stops, **raise the hood** as a “need help” signal. At night, run the dome light with the engine; flash lights or use a torch when you hear or see ploughs or rescuers. Keep your phone warm (in an inner pocket) to preserve its battery.`,
    },
    { type: 'sim', id: 'stranded-vehicle', caption: 'Try the winter case: run the engine with and without clearing the tailpipe, with and without a CO alarm, and compare warm gear against none.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Cold injuries — and first aid',
      md: '**Hypothermia** (Stage 8): shivering, fumbling hands, slurred speech, poor judgement, then drowsiness and — as it deepens — shivering may stop. Insulate from the ground and wind, get dry, give warm sweet drinks if the person is fully alert, and handle gently. **Frostbite:** numb, white, waxy skin on fingers, toes, nose, ears. Rewarm only when it will **not refreeze**; **do not rub** it or warm it at an engine or heater you cannot feel. Both need medical care. A wilderness first-aid course (WFA/WAFA/WFR) teaches the hands-on skills.',
    },
  ],
  whyItMatters: 'Two things kill people in snowbound cars: cold, when they have no insulation or leave the car, and carbon monoxide, when they run the engine with a blocked tailpipe. Both are preventable with a sleeping bag in the boot and one rule about the exhaust — and the same rules apply to anyone sheltering in a vehicle, cabin or tent with a fuel-burning heater.',
  science: [
    {
      type: 'md',
      md: `### How fast does a car cool?

A cabin loses heat roughly in proportion to the temperature difference with the outside air (Newton’s law of cooling): the gap shrinks exponentially with a **time constant** $\\tau$,

$$
T(t) = T_{\\text{out}} + (T_0 - T_{\\text{out}})\\, e^{-t/\\tau}
$$

In words: after one time constant the cabin has lost about 63 % of its warmth relative to outside. Cars have small $\\tau$ — perhaps an hour or two — because of large glass areas and air leaks. **Covering windows and blocking drafts increases $\\tau$**; body heat and short engine runs add heat.

**Worked example.** Engine off at 20 °C inside, −15 °C outside, $\\tau = 2$ h. After 2 hours: $-15 + 35 \\times e^{-1} \\approx -2$ °C. With windows covered ($\\tau = 3.5$ h): $-15 + 35 \\times e^{-2/3.5} \\approx 5$ °C — a noticeable difference, but the lesson is the same: the cabin will approach outdoor temperature overnight, so **your own insulation** is what counts.

### Carbon monoxide build-up

As in a house (Stage 16), the cabin concentration settles where the CO entering equals the CO removed by ventilation:

$$
C_{ss} = \\frac{G}{Q}
$$

$G$ is the CO entering (tiny with a clear tailpipe, very large when exhaust is forced under a snow-blocked car) and $Q$ the fresh-air flow. A cabin’s volume is only a few cubic metres, so even a small leak rate raises the concentration quickly; a cracked window raises $Q$ but **cannot compensate for a blocked tailpipe**. Symptoms depend on concentration and time; sleep removes the warning signs.

### Shivering has a cost

Shivering can raise heat production several-fold for a while, but it burns glycogen (Stage 8), and exhaustion, hunger and dehydration reduce it. That is why food, water and insulation early in the night matter more than heroic efforts later.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Great Plains blizzard (USA/Canada).** Drivers stranded on a closed interstate: those with sleeping bags who ran their engines 10 minutes an hour with the tailpipe cleared, and tied a cloth to the antenna, were reached by snowmobile crews the next morning.

**Scandinavian or Finnish forest road.** At −25 °C a car slides off in a curve. The driver calls the emergency number (112 works across the EU), wraps herself in the sleeping bag she always carries in winter, and waits with the hazards on for short periods.

**Alpine pass.** A pass closes behind and in front of a line of cars in heavy snow. Officials walk the queue checking on people; one car’s occupants are drowsy with headaches — its tailpipe is buried in a drift. Doors open, engine off, fresh air; they are taken to a nearby hotel.

**Siberian or Mongolian steppe.** Long distances between settlements and extreme cold: drivers travel in pairs of vehicles, carry full winter clothing, and never leave a vehicle to walk in a storm.

**Mountain road, Andes or Himalaya.** Snow can fall at any season at altitude; a car kit with a sleeping bag and water is standard for high passes.

**Subarctic Alaska or Yukon highway.** A satellite messenger check-in lapses; the contact raises the alarm and a highway patrol finds the car the next day, with the driver cold but well in a sleeping bag.`,
    },
  ],
  mistakes: [
    'Running the engine continuously, especially while sleeping, without checking the tailpipe.',
    'Myth: “Opening a window a crack makes running with a blocked tailpipe safe.” Clearing the tailpipe is the only fix.',
    'Myth: “You would smell carbon monoxide.” It is odourless; the exhaust smell comes from other gases.',
    'Leaving the car to walk for help in a storm.',
    'Heavy shovelling to “dig out” in a blizzard — exhausting, sweat-soaking and a strain on the heart.',
    'Eating snow instead of melting it.',
    'Draining the battery with lights and heater fan while the engine is off.',
    'Rubbing frostbitten skin or warming it against a hot heater vent.',
    'Setting off on a winter drive with a near-empty tank and no sleeping bag or warm clothing in the car.',
  ],
  exercises: [
    {
      id: 's17-l3-e1',
      title: 'Winter car kit and tailpipe check',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['Your car, parked, engine off', 'Winter kit items'],
      steps: [
        'With the engine off, find the tailpipe(s) and note how low they sit — how deep would snow need to be to block them?',
        'Add a sleeping bag or two blankets, hat, gloves, boots, snow brush, shovel and a bright cloth to the kit.',
        'Find the dome light, hazard and bonnet/hood release by feel, eyes closed.',
        'Write a laminated card for the glovebox: “Tailpipe clear → 10 min/hour → window cracked → CO symptoms = engine off, fresh air.”',
      ],
      success: ['The kit contains insulation for every usual occupant.', 'Everyone in the household can state the tailpipe rule.'],
      skill: 'vehicle-kit',
    },
    {
      id: 's17-l3-e2',
      title: 'Measure your car’s idle fuel use (outdoors only)',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      safetyNote: 'Only outdoors, in the open, never in a garage or enclosed space; stay out of the car or keep windows open; follow local anti-idling rules and keep it short. Stop if anyone feels unwell.',
      steps: [
        'With a full tank, note the trip computer or fuel gauge reading.',
        'Let the engine idle outdoors with the heater on for 30 minutes (or use the trip computer’s consumption display if it has one).',
        'Refill and record the litres used, or read the average consumption.',
        'Compute how many hours of 10-minute runs half a tank would give you.',
      ],
      success: ['You know your car’s idle consumption to within about 0.2 L/h.', 'You have a written fuel budget for a winter stranding.'],
    },
    {
      id: 's17-l3-e3',
      title: 'Winter stranding in the simulation',
      level: 2,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Play the winter case with warm gear, clearing the tailpipe and running the engine in bursts. Aim for 90 %.',
        'Play again running the engine continuously without clearing the tailpipe. Note when symptoms begin.',
        'Play without warm gear and without the engine. How long until hypothermia?',
      ],
      success: ['You can explain the CO mechanism and why sleeping makes it worse.', 'You can rank insulation, engine heat and fuel in order of importance.'],
    },
  ],
  simulations: ['stranded-vehicle'],
  quiz: [
    {
      id: 's17-l3-q1',
      kind: 'order',
      prompt: 'Snowbound at night, the cabin has become very cold. Order the steps for a safe engine run.',
      items: [
        { id: 'clear', text: 'Go out and clear snow from the tailpipe and around the car' },
        { id: 'window', text: 'Open a downwind window slightly' },
        { id: 'run', text: 'Run the engine and heater for about 10 minutes, dome light on' },
        { id: 'off', text: 'Switch off; lights off; recheck the tailpipe before the next run' },
      ],
      answer: ['clear', 'window', 'run', 'off'],
      concepts: ['vehicle-exhaust-co', 'vehicle-fuel-budget'],
      explanation: 'Clear first — a cracked window does not make a blocked tailpipe safe. Short runs save fuel and battery.',
    },
    {
      id: 's17-l3-q2',
      kind: 'multi',
      prompt: 'Which could be signs of carbon-monoxide poisoning in a snowbound car?',
      choices: [
        { id: 'a', text: 'Headache', why: 'Yes.' },
        { id: 'b', text: 'Nausea or dizziness', why: 'Yes.' },
        { id: 'c', text: 'Unusual sleepiness or confusion', why: 'Yes — and sleep removes the warning.' },
        { id: 'd', text: 'Several occupants feeling ill at once', why: 'Yes — a classic warning.' },
        { id: 'e', text: 'A clear smell of CO', why: 'CO has no smell. Exhaust smell means other gases are present — act — but no smell means nothing.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['carbon-monoxide', 'vehicle-exhaust-co'],
      explanation: 'CO symptoms mimic cold, fatigue or flu. Engine off, fresh air, clear the tailpipe, seek care.',
    },
    {
      id: 's17-l3-q3',
      kind: 'numeric',
      prompt: 'Half a tank is 25 L. If running 10 minutes per hour uses about 0.2 L/h on average, how many hours of heat does it give?',
      unit: 'h',
      answer: 125,
      tolerance: 2,
      concepts: ['vehicle-fuel-budget'],
      explanation: '$25 / 0.2 = 125$ h — about five days. Idling continuously at ~1 L/h would use it in about a day.',
    },
    {
      id: 's17-l3-q4',
      kind: 'single',
      prompt: 'You have a sleeping bag, a blanket and a quarter tank. It is −18 °C and the plough is expected in the morning. What is the best approach for the night?',
      choices: [
        { id: 'a', text: 'Idle the engine all night with the heater on so you can sleep comfortably', why: 'Uses the fuel and risks CO as snow drifts — especially while you sleep.' },
        { id: 'b', text: 'Get into the sleeping bag with the blanket under you, cover the windows, eat and drink, and run the engine briefly each hour after clearing the tailpipe', why: 'Correct — insulation first, engine heat second, CO rule always.' },
        { id: 'c', text: 'Walk to the farmhouse you passed 6 km back', why: 'At night in −18 °C and drifting snow, walking is far riskier than waiting.' },
        { id: 'd', text: 'Save fuel by never running the engine', why: 'With good insulation this can work, but brief safe runs add comfort and battery charge.' },
      ],
      answer: 'b',
      concepts: ['vehicle-insulation', 'vehicle-exhaust-co', 'stay-with-vehicle'],
      explanation: 'Hold heat with insulation; add heat in short, safe bursts; stay where the plough will come.',
    },
    {
      id: 's17-l3-q5',
      kind: 'truefalse',
      prompt: 'True or false: an electric car produces no exhaust, so there is no CO risk from its own drivetrain — but heating the cabin reduces its range.',
      answer: true,
      concepts: ['vehicle-exhaust-co', 'vehicle-fuel-budget'],
      explanation: 'True. Use seat and wheel heaters (efficient), plan charging, and keep insulation in the car. Hybrids may start their engine automatically — keep their exhaust clear.',
    },
    {
      id: 's17-l3-q6',
      kind: 'single',
      prompt: 'Your passenger’s fingertips are white, numb and waxy after clearing snow without gloves. You are stranded for the night. What do you do?',
      choices: [
        { id: 'a', text: 'Rub them hard with snow', why: 'A myth — rubbing damages tissue, and snow cools it further.' },
        { id: 'b', text: 'Hold them against the hot heater vent', why: 'Numb skin burns easily; uncontrolled heat can injure it.' },
        { id: 'c', text: 'Warm them gently against warm skin (armpit or belly) if they will not refreeze, keep them protected, and seek medical care', why: 'Correct.' },
        { id: 'd', text: 'Ignore it until morning', why: 'Early gentle rewarming of superficial cold injury, without refreezing, is appropriate.' },
      ],
      answer: 'c',
      concepts: ['hypothermia', 'fa-myths'],
      explanation: 'Follow WMS frostbite guidance: no rubbing, no uncontrolled heat, avoid thaw–refreeze cycles, and get medical care. Learn it in a WFA course.',
    },
  ],
  scenario: {
    id: 's17-l3-sc',
    setup: '23:00. You and a friend have been in your car in a ditch for five hours during a blizzard. The plough is not expected until morning. You have been idling the engine for heat most of the time. Your friend says she has a headache and feels sick and wants to sleep; you feel dizzy too. Snow has been drifting all evening.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Let her sleep — it’s been a long day — and keep the engine running so you are both warm.', why: 'Headache, nausea and drowsiness in two people with a running engine and drifting snow suggest CO; sleep could be fatal.' },
      { id: 'b', text: 'Switch the engine off, open the doors for fresh air, check and clear the tailpipe, keep her awake; then insulate with everything you have and use only short engine runs with a cleared tailpipe and a cracked window; call or signal for medical help when possible.', why: 'Best: removes the source, gets fresh air, and changes to a safe heating routine.' },
      { id: 'c', text: 'Open a window a little and keep the engine running.', why: 'Some improvement, but a blocked tailpipe keeps pouring CO into the cabin.' },
      { id: 'd', text: 'Walk together to find help.', why: 'Leaving a shelter in a blizzard at night is very dangerous; the immediate problem is CO, which can be fixed at the car.' },
    ],
    best: 'b',
    debrief: 'Stage 1’s first question — is there an immediate danger? — applies inside the car: CO is the immediate threat, cold the slower one. The same logic protected households in the Stage 16 outage. Symptoms shared by several people with a fuel-burning source nearby mean CO until proven otherwise.',
    concepts: ['vehicle-exhaust-co', 'carbon-monoxide', 'immediate-danger', 'stay-with-vehicle'],
  },
  summary: [
    '**Stay in the car** in a winter storm; walk only if help is visible and close.',
    '**Tailpipe clear before every run**; run the engine **~10 minutes per hour**; window cracked downwind; CO alarm if you have one.',
    'CO is invisible and odourless; **headache, nausea, sleepiness** in several people = engine off, fresh air.',
    'Hold heat first: **all layers, hat, sleeping bag, insulation underneath, windows covered**, huddle; eat and drink.',
    'Budget **fuel and battery**; keep the tank at least half full in winter; EVs: seat heaters and planned charging.',
    'Make the car visible: **bright cloth, clear roof, hood up after the snow stops, dome light at night** with the engine.',
  ],
  furtherReading: ['nhtsa-winter-driving', 'ready-winter', 'cdc-co', 'wms-hypothermia-2019'],
  references: ['nhtsa-winter-driving', 'ready-winter', 'ready-car', 'cdc-co', 'cpsc-co', 'wms-hypothermia-2019', 'wms-frostbite-2024', 'usariem-cold', 'nws-windchill'],
}
