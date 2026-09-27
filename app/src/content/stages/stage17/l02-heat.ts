import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's17-l2',
  stage: 17,
  order: 2,
  title: 'Stranded in heat',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s17-l1', 's8-l4'],
  concepts: ['stay-with-vehicle', 'hot-car-cabin', 'water-budget', 'sweat-rate', 'heat-illness', 'hot-shelter', 'vehicle-signaling', 'stay-or-move'],
  objectives: [
    'Run the **first hour** of a desert stranding: safety, a message if possible, shade, signals, and a water inventory.',
    'Explain why a **closed car in the sun** becomes dangerous within minutes, and where to wait instead.',
    'Manage a **water budget** by rationing **sweat, not water**: rest in shade by day, work at dawn, dusk and night.',
    'Decide **stay or walk** from who knows where you are, distance, temperature and water — and why staying is the default.',
    'Recognise **heat exhaustion and heat stroke** and start the right first aid.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A hot desert stranding usually starts undramatically: a car bogged in soft sand, a burst tyre on a rocky track, an overheated engine, a wrong turn and an empty tank. The danger is the next 24–48 hours: air above 40 °C, ground far hotter, intense sun, no shade and — too often — too little water and no one who knows where you are.

### The first hour

1. **Stop and think** (Stage 1 STOP). Is there an immediate danger — flash-flood wash, a crash scene, traffic? If not, nothing needs to be done in a hurry in the midday heat.
2. **Try to call** or message once, from the car or a nearby rise if it is short and safe; send your position. If you carry a **PLB or satellite messenger** and life could be at risk, use it now — earlier is better.
3. **Shade before anything else.** Get out of the sun and out of the closed car.
4. **Take stock:** water (litres, per person), food, clothing, tools, fuel, battery; who knows your route and when they will raise the alarm.
5. **Make yourself visible** — in the cooler part of the day (Lesson 4).
6. **Decide the plan**: almost always, **stay with the vehicle** and wait for the search your trip plan starts.`,
    },
    { type: 'diagram', id: 's17-hot-car', caption: 'A closed car is a greenhouse: sunlight in, heat trapped. Wait in raised shade beside it.' },
    {
      type: 'md',
      md: `### The car is an oven — use it as a shade frame

Sunlight passes through the windows and heats the seats, dashboard and air; the glass traps much of the heat. Measurements of parked cars show cabin temperatures rising by roughly **20 °C (40 °F) within an hour, most of it in the first 30 minutes**, even on mild days — and **cracking the windows makes little difference**. This is also why children and pets die in parked cars: never leave anyone in a vehicle in the sun, even “for a minute”.

So in a desert stranding **do not shelter inside the closed car by day**. Use it instead as the frame for shade:

- Rig a **tarp, sheet, blanket or sun-shade** from the roof or roof rack to the ground on the shaded side, or between the car and a spare wheel.
- Use a **double layer** with an air gap if you can — the outer layer takes the sun, the inner one stays cooler (Stage 5 hot-weather shelter).
- **Sit off the ground**: desert ground in the sun can be far hotter than the air. A seat, cushion, spare tyre or mat breaks contact.
- Keep **doors open** for airflow if you do use the cabin, and use it in the early morning, evening and night, when it is cooler and a windbreak.
- Keep clothing **on** — loose, light-coloured, long sleeves and a hat. Covered skin gains less heat from the sun and loses sweat more slowly, so more of it cools you.

### Ration sweat, not water

The most dangerous myth in desert survival is “save your water”. Water in the bottle does not keep you alive; water in your body does — survival doctrine puts it as “ration sweat, not water”.

- **Drink to replace what you lose**, in regular amounts; do not try to “make it last” by sipping.
- **Reduce the loss**: rest in shade through the heat of the day, do tasks at dawn, dusk and at night, do not talk or smoke unnecessarily, keep clothes on.
- **Eat little** if water is very short — digestion needs water — but salty snacks help if you are drinking plenty.
- **Never drink** radiator coolant (antifreeze is toxic), windscreen-washer fluid, fuel, or seawater. Urine is not a water source.
- Watch your urine: small amounts of dark urine mean you are behind.`,
    },
    { type: 'sim', id: 'stranded-vehicle', caption: 'Try the desert case: compare waiting in shade with sitting in the car, rationing with drinking to need, and digging out at noon versus at dawn.' },
    {
      type: 'md',
      md: `### Getting unstuck — timed for the cool

If the car is simply bogged in sand, you may be able to free it. **Do the work in the cool** (dawn is best), not at noon:

- Clear sand from in front of all the wheels and from under the chassis; a stuck car often rests on its belly.
- Many four-wheel-drive guides advise **lowering tyre pressure** on soft sand to lengthen the footprint — only if you can **re-inflate** before driving on hard roads, and within the tyre maker’s limits.
- Use **traction boards**, floor mats or brush under the drive wheels; drive out gently in a low gear without spinning the wheels.
- Keep enough **fuel** to reach help once you are free.

If you cannot free it in a couple of attempts, stop — overheating yourself is worse than waiting.

### Stay or walk

Stage 14 treats stay-or-move in depth. For a vehicle in desert heat the default is clear: **stay**. The vehicle is shade, water storage and a large signal on a known route; a walker sweats litres per hour, cannot carry enough water, and is a tiny target — and searchers following your route will find the car, not you. Walking can be considered only when **all** of these hold: nobody will look for you in time, help is **close, certain and on a known route**, you can travel in the cool of the night or early morning, and you can carry enough water for the whole distance. If you ever do leave, leave a note on the dashboard with the time, your direction and who went.`,
    },
    { type: 'diagram', id: 's17-stay-or-walk', caption: 'Stay is the default; walking needs every condition to line up.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Heat illness: recognise and act',
      md: '**Heat exhaustion:** heavy sweating, headache, dizziness, nausea, weakness, fast pulse. Stop activity, get into the best shade, loosen clothing, wet the skin and fan, drink. **Heat stroke** is an emergency: **confusion, strange behaviour, collapse or seizures** with a hot body — sweating may or may not continue. Cool immediately and aggressively (the WMS recommends cold-water immersion where possible; otherwise soak and fan continuously, ice or cold packs to neck, armpits and groin) and call for help by any means. Learn this hands-on in a wilderness first-aid course (WFA/WAFA/WFR).',
    },
  ],
  whyItMatters: 'Hot-desert strandings are unforgiving: a few wrong hours — sitting in a closed car, walking at midday, saving water instead of drinking it — can turn a car stuck in sand into a death. The right actions are simple and mostly passive: shade, rest, drink, signal and wait by the vehicle while the trip plan brings help.',
  science: [
    {
      type: 'md',
      md: `### Where the heat comes from

The body’s heat balance (Stage 1 and Stage 8) in words: heat stored = heat you make + heat you gain − heat you lose.

$$
S = M + R_{\\text{sun}} + C_{\\text{air}} - E_{\\text{sweat}}
$$

- $M$, metabolic heat: about 100 W at rest, 400–600 W digging.
- $R_{\\text{sun}}$, solar radiation: a few hundred watts on an exposed person in desert sun; shade removes most of it.
- $C_{\\text{air}}$: when the air is hotter than your skin (about 33–35 °C), convection **adds** heat instead of removing it — the hotter and windier, the more.
- $E_{\\text{sweat}}$: evaporation is then the only way to lose heat. Each litre of sweat that evaporates removes about 2.4 MJ.

If $S > 0$, core temperature rises. With a 70 kg body storing about 245 kJ per °C, a surplus of 100 W raises the core by $100 \\times 3600 / 245\\,000 \\approx 1.5$ °C per hour — heat exhaustion within an hour or two.

### Why rest in shade saves water

To stay in balance, you must sweat (and evaporate) enough to remove $M + R + C$. **Worked example** (illustrative, in line with the Heat Balance Lab): resting in good shade, $M \\approx 100$ W and the extra from hot air and reflected heat perhaps 150 W — about 250 W to evaporate, or roughly $250 \\times 3600 / 2.4 \\times 10^{6} \\approx 0.4$ L per hour. Digging in the sun, $M \\approx 500$ W plus perhaps 150 W of sun: 650 W, about 1 L per hour — **more than double**, and often more than the body can actually evaporate, so heat is stored. Sweat rates of 0.5–2 L/h are typical in hot work (ACSM). Over a 10-hour hot day, the choice between resting in shade and working in the sun can differ by 5 L or more.

### Dehydration and core temperature

Dehydration reduces blood volume and sweating, and in hot conditions core temperature rises by roughly 0.1–0.2 °C for every 1 % of body mass lost. That is why “saving water” makes you hotter as well as thirstier — and why the Stranded Vehicle simulation punishes rationing.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mojave / Death Valley (USA).** A family follows a navigation app onto an unmaintained road; the car sinks in sand at midday. They rig a tarp, sit on the car mats in shade, drink to need, lay a large “V” with rocks at 18:00 and wait. Their trip plan brings a ranger along the route the next morning.

**Australian outback.** A four-wheel-drive breaks an axle on a remote track at 45 °C. The driver activates his PLB, rigs shade from the awning, and stays put. A police vehicle, directed by the rescue coordination centre, arrives that evening.

**Sahara fringe.** A driver whose car has overheated decides to walk 40 km to a village at noon with 2 L of water. He collapses within hours; the car, left by the track, is found the same afternoon by a passing truck. (A recurring pattern in desert incidents: the vehicle is found; the walker is not.)

**Arabian desert, winter.** Days are mild, nights cold: the same car that is an oven at noon becomes the warm shelter at night. Blankets matter as much as shade.

**Mediterranean or Middle-Eastern rural road in a heatwave.** A breakdown on a quiet road at 42 °C: traffic will pass within hours, so the priority is shade, water and staying visible — hazards on, hi-vis vest, standing well off the road.

**City car park.** A parked car in summer sun reaches dangerous temperatures within minutes. The same physics that threatens the stranded motorist kills children and pets forgotten in cars — check the back seat, every time.`,
    },
  ],
  mistakes: [
    'Myth: “Save your water for later.” Ration sweat, not water — drink to need and reduce losses.',
    'Sheltering inside the closed car in the sun.',
    'Myth: “Cracking the windows keeps a parked car cool.” The temperature still climbs steeply.',
    'Walking for help in the midday heat, or leaving a vehicle that searchers will find.',
    'Digging out, changing tyres or building signals at noon instead of at dawn or dusk.',
    'Taking off shirts and hats to cool down in direct sun.',
    'Drinking radiator coolant, washer fluid or urine.',
    'Waiting too long to activate a beacon.',
    'Leaving children or pets in a parked car “just for a minute”.',
  ],
  exercises: [
    {
      id: 's17-l2-e1',
      title: 'Rig vehicle shade (in the cool)',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Your car, parked safely off the road', 'Tarp or sheet', 'Cord', 'Mats or cushions'],
      safetyNote: 'Practise in mild weather or in the early morning, never in extreme heat. Park safely off any road; engine off; do not climb on the car roof — rig from the roof rails or doors while standing on the ground.',
      steps: [
        'Rig a tarp or sheet from the roof rails or doors to the ground on the shaded side.',
        'Add a second layer above the first with a gap, if you have two.',
        'Arrange a seat off the ground in the shade; open the car doors for airflow.',
        'Time yourself and note what was missing (cord, pegs, weights for sand).',
      ],
      success: ['Shade for everyone in under 15 minutes.', 'A list of kit changes for the vehicle kit.'],
      skill: 'vehicle-kit',
    },
    {
      id: 's17-l2-e2',
      title: 'Desert stranding in the simulation',
      level: 2,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Play the Stranded Vehicle simulation in the desert with a trip plan and plenty of water. Aim for 90 % or more.',
        'Play again rationing water to sips. Compare core temperature, dehydration and water left.',
        'Play without a trip plan. What changes about staying versus walking or digging out?',
      ],
      success: ['You can explain why rationing water scores worse.', 'You can state when walking might be reasonable and when it is not.'],
    },
  ],
  simulations: ['stranded-vehicle'],
  quiz: [
    {
      id: 's17-l2-q1',
      kind: 'single',
      prompt: 'Your car is stuck in sand at 11:00; it will be 44 °C by mid-afternoon. Where should you wait?',
      choices: [
        { id: 'a', text: 'Inside the car with the windows up to keep out the hot wind', why: 'The cabin heats far above the outside air in the sun.' },
        { id: 'b', text: 'Inside the car with the windows cracked', why: 'Cracked windows make little difference to cabin temperature.' },
        { id: 'c', text: 'In raised, preferably double-layer shade rigged beside the car, sitting off the ground', why: 'Correct.' },
        { id: 'd', text: 'Lying on the sand in the car’s shadow', why: 'Better than the cabin, but the shadow moves and hot ground conducts heat into you.' },
      ],
      answer: 'c',
      concepts: ['hot-car-cabin', 'hot-shelter'],
      explanation: 'Use the car as a shade frame, not an oven: shade overhead, air moving, and something between you and the hot ground.',
    },
    {
      id: 's17-l2-q2',
      kind: 'truefalse',
      prompt: 'True or false: in desert heat you should sip your water as slowly as possible to make it last.',
      answer: false,
      concepts: ['water-budget', 'dehydration'],
      explanation: 'False. Drink to replace losses and cut the losses themselves (shade, rest, work in the cool). Water in the body is what keeps you alive; dehydration also raises core temperature.',
    },
    {
      id: 's17-l2-q3',
      kind: 'numeric',
      prompt: 'Resting in shade you lose about 0.4 L/h for 10 hot hours and 0.15 L/h for 14 cooler hours. How many litres per person per day is that?',
      unit: 'L',
      answer: 6.1,
      tolerance: 0.1,
      concepts: ['water-budget', 'sweat-rate'],
      explanation: '$10 \\times 0.4 + 14 \\times 0.15 = 4 + 2.1 = 6.1$ L — and that is resting. Work in the heat can double it.',
    },
    {
      id: 's17-l2-q4',
      kind: 'multi',
      prompt: 'Which actions reduce your water loss while waiting by a stranded car in the desert?',
      choices: [
        { id: 'a', text: 'Resting in shade through the middle of the day', why: 'Yes — the biggest single saving.' },
        { id: 'b', text: 'Keeping loose, light-coloured clothing and a hat on', why: 'Yes — clothing blocks sun and makes sweat work harder.' },
        { id: 'c', text: 'Doing tasks at dawn, dusk and night', why: 'Yes.' },
        { id: 'd', text: 'Eating a large meal', why: 'No — digestion uses water; eat little if water is short.' },
        { id: 'e', text: 'Sitting on a mat or seat rather than the ground', why: 'Yes — hot ground conducts heat into you.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['sweat-rate', 'hot-shelter', 'water-budget'],
      explanation: 'Ration sweat: cut sun, heat gain from ground and air, and metabolic heat from work.',
    },
    {
      id: 's17-l2-q5',
      kind: 'single',
      prompt: 'Your friend, who has been digging in the sun, becomes confused and aggressive and his skin is hot. What do you do first?',
      choices: [
        { id: 'a', text: 'Give him water and let him rest in the car', why: 'The car is hot, and a confused casualty may not drink safely. This needs active cooling now.' },
        { id: 'b', text: 'Treat as heat stroke: move to shade, cool aggressively (soak with water and fan, cold packs to neck, armpits, groin; immerse if possible) and call for help by any means', why: 'Correct — confusion with a hot body is heat stroke until proven otherwise.' },
        { id: 'c', text: 'Wait to see if he improves', why: 'Heat stroke kills; cooling must start at once.' },
        { id: 'd', text: 'Walk him to the road for help', why: 'More exertion in heat worsens it.' },
      ],
      answer: 'b',
      concepts: ['heat-illness'],
      explanation: 'Altered mental state plus heat exposure means heat stroke: cool first, fast (WMS), and evacuate. A WFA course teaches this hands-on.',
    },
    {
      id: 's17-l2-q6',
      kind: 'single',
      prompt: 'Nobody knows your route, you have no beacon, the highway is 25 km away along the track you drove in on, and you have 12 L of water. The car cannot be freed. What is the most reasonable plan?',
      choices: [
        { id: 'a', text: 'Walk now, at 13:00, while you are fresh', why: 'Midday walking costs litres per hour and risks heat stroke.' },
        { id: 'b', text: 'Wait in shade by the car until evening, signal, leave a note, and — if no one has come — walk the known track by night carrying most of the water', why: 'Reasonable: no search is coming, help is on a known route at a walkable distance, and night travel roughly halves the water cost.' },
        { id: 'c', text: 'Stay by the car indefinitely without signalling', why: 'With no one looking and no signals, you may not be found in time.' },
        { id: 'd', text: 'Walk cross-country toward a town you think is closer', why: 'Leaving the known route adds navigation risk and makes you harder to find.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'stay-with-vehicle', 'water-budget', 'trip-plan'],
      explanation: 'Staying is the default because a search is coming. Without a trip plan or beacon that assumption fails, and a night walk on a known route with enough water can be the better option — which is exactly why the trip plan matters.',
    },
  ],
  scenario: {
    id: 's17-l2-sc',
    setup: '14:00, 43 °C. Your car has slid off a remote desert track into soft sand. Your partner holds your trip plan with an alarm time of 20:00. You have 20 L of water, a tarp, cord and a shovel. Your partner-in-the-car suggests starting to dig immediately so you can be home tonight.',
    question: 'What is the best plan for the next few hours?',
    choices: [
      { id: 'a', text: 'Dig now at full effort to get out before dark.', why: 'Hard work in 43 °C sun can cause heat exhaustion within an hour or two and costs litres of sweat.' },
      { id: 'b', text: 'Rig raised shade, rest and drink to need through the afternoon heat, lay signals and dig at dusk or dawn when it is cooler; stay with the car.', why: 'Best: protects against heat illness, saves water, keeps you visible on the planned route, and still allows self-rescue in the cool.' },
      { id: 'c', text: 'Sit in the car with the engine idling and air-conditioning on until evening.', why: 'Comfortable, but it burns fuel you need to drive out, and an idling engine in extreme heat can overheat.' },
      { id: 'd', text: 'One person walks for help while the other digs.', why: 'Splitting up and walking in midday heat multiplies the risk.' },
    ],
    best: 'b',
    debrief: 'This combines Stage 8’s heat-balance physiology with Stage 1’s time budgeting: the job (digging) is the same at 14:00 and at 06:00, but the heat cost is not. Because the trip plan will start a search, there is no reason to take the risk; waiting in shade and working in the cool keeps both options — rescue and self-rescue — open.',
    concepts: ['stay-with-vehicle', 'heat-illness', 'water-budget', 'daylight', 'vehicle-fuel-budget'],
  },
  summary: [
    'First hour: STOP, message or beacon if possible, **shade**, inventory, signals in the cool, plan to **stay**.',
    'A closed car in the sun gains roughly **20 °C within an hour**; cracked windows barely help. Wait in **raised double shade beside it**.',
    '**Ration sweat, not water:** drink to need; rest by day; work at dawn, dusk and night; keep clothes on.',
    'Never drink coolant, washer fluid, fuel, seawater or urine.',
    '**Stay with the vehicle** unless nobody will look, help is close and certain, and you can walk in the cool with enough water.',
    'Confusion + heat = **heat stroke**: cool aggressively at once and get help; learn it in a WFA course.',
  ],
  furtherReading: ['mclaren-hot-car-2005', 'wms-heat-2024', 'nws-heat', 'nps-deva-safety'],
  references: ['mclaren-hot-car-2005', 'nhtsa-heatstroke', 'wms-heat-2024', 'tbmed-507', 'nws-heat', 'ready-heat', 'acsm-fluid-2007', 'adolph-desert-1947', 'army-atp-3-50-21', 'nps-deva-safety', 'ready-car'],
}
