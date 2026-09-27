import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's17-l1',
  stage: 17,
  order: 1,
  title: 'Vehicle kits and trip planning',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l9'],
  concepts: ['vehicle-kit', 'remote-road-planning', 'trip-plan', 'kit', 'redundancy', 'water-budget', 'vehicle-fuel-budget'],
  objectives: [
    'Explain why vehicles strand people — and why the vehicle is usually also their best **shelter and signal**.',
    'Assemble a **vehicle kit by function** (water and food, warmth and shade, being seen and calling, car recovery, first aid and navigation), scaled to climate and remoteness.',
    'Write a **trip plan** for a road journey with a route, vehicle description, check-ins and a clear **alarm time**.',
    'Budget **fuel, water and daylight** for a remote road, with a worked range calculation and a reserve.',
    'Choose communication for the route: coverage, a **PLB or satellite messenger**, and what each can and cannot do.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A car makes it easy to go a long way from help very quickly. In a few hours you can drive from a city into desert, forest, mountains or tundra, in clothes chosen for the air-conditioned cabin. That is why vehicle strandings are common — and also why they are usually survivable: **the vehicle carries shelter, supplies and a large, easily-spotted signal**, and it is usually on a road that searchers will follow.

Most vehicle emergencies are ordinary: a flat tyre, a flat battery, a car stuck in sand or snow, a slide into a ditch, a road closed by flood, snow or fire, running out of fuel, a wrong turn onto a track the car cannot handle. What turns an ordinary breakdown into a survival situation is **remoteness, weather and time** — and the difference is decided before you leave home.

### The vehicle itself

Before a remote or winter trip:

- **Tyres**, including the **spare** (pressure and tread), and the jack and wheel wrench that actually fit. On remote tracks, many drivers carry a second spare and a puncture kit.
- **Fuel:** start full and top up at every opportunity; in winter keep the tank **at least half full** (fuel is heat if you are stranded).
- **Battery, coolant, oil, wipers and washer fluid** suited to the season; lights working.
- Know how to open the bonnet/hood, find the tailpipe, and switch on the hazard lights without looking.`,
    },
    { type: 'diagram', id: 's17-vehicle-kit', caption: 'Organise the kit by what it does, so every critical function is covered — then add for the climate.' },
    {
      type: 'md',
      md: `### A vehicle kit, by function

Stage 1 built a personal kit around **functions with redundancy**. A vehicle kit follows the same logic but can be heavier:

| Function | Core items | Remote / climate additions |
|---|---|---|
| Water and food | Water for everyone for the longest likely wait; non-perishable snacks | Desert: many litres per person per day, in several containers |
| Warmth and shade | Blankets, hat, gloves, dry spare layers, rain shell | Cold: sleeping bag, boots, snow brush, grit or sand. Heat: tarp or sheet, cord, wide-brim hats, sun-shade |
| Be seen and call | Charged phone, cable, power bank; torch; whistle; hi-vis vest; warning triangle | PLB or satellite messenger; signal mirror; bright cloth |
| Car and recovery | Jumper cables or jump pack, tyre inflator, tow strap, basic tools, duct tape | Shovel; traction boards; second spare; spare fuel only where legal and in approved cans |
| Care and navigation | First-aid kit, personal medicines, paper map, printed route plan | Offline maps, compass |

Water is the item most often under-packed. Ready.gov suggests at least a gallon (about 4 L) per person per day for home kits; in desert heat a resting adult may need more, and anyone working needs much more (Stage 4 and Stage 8). Carry it in **several containers** so one leak does not lose it all.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Kit that makes things worse',
      md: 'Fuel-burning heaters, stoves and barbecues must **never** be used inside a vehicle: they produce carbon monoxide just like a house generator (Stage 16). Loose heavy items become projectiles in a crash — strap water and tools down. Spare fuel carried in unapproved containers, or inside the cabin, is a fire and fume hazard.',
    },
    { type: 'diagram', id: 's17-trip-plan', caption: 'A trip plan is only useful if it includes an alarm time — and someone who will act on it.' },
    {
      type: 'md',
      md: `### The trip plan: what starts the search

Stage 1 showed that a **trip plan** is what turns “missing” into “searched for”. For a road journey it contains:

- **Route** (roads and tracks, in order) and **alternatives** you might take — and a promise not to change route without telling your contact.
- **Vehicle:** make, model, colour, number plate. Searchers look for a car, not a person.
- **People:** names, ages, medical needs; **kit** carried (water, warm gear, beacon).
- **Communication:** your phone numbers, beacon or messenger ID, when you will check in (for example, at each fuel stop).
- **Expected arrival** — and a separate **alarm time**: the moment your contact calls the police or emergency number *without waiting further*, and what to tell them.

A good alarm time leaves a sensible grace period for delays but not so long that you spend an extra night out. On some remote routes — the Australian outback, northern Canada, desert parks — local police, park staff or roadhouses will also take a trip notice or advise on road conditions.

### Planning a remote road

- **Conditions:** check road status, closures, weather warnings and seasonal hazards (flooded dips after desert rain, snow on passes, fire danger).
- **Daylight:** plan to reach the difficult sections and your destination with daylight to spare (Stage 1 daylight budgeting).
- **Fuel:** know the distance between fuel stops and your real consumption on that surface — sand, snow, heavy loads, towing and air-conditioning all increase it.
- **Coverage:** mobile coverage maps are optimistic; plan as if there is none.
- **Beacon or messenger:** a **PLB** (406 MHz personal locator beacon) sends a distress alert with position through the Cospas-Sarsat satellites to rescue authorities; it is one-way and for life-threatening emergencies, and it must be **registered**. A **satellite messenger** allows two-way texts and check-ins through a commercial network with a subscription. Some newer phones can send emergency messages by satellite in some countries — check whether yours can, where you are going, before relying on it.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'The two-minute pre-departure check',
      md: 'Fuel full? Spare and jack? Water for everyone for a day longer than planned? Warm layers or shade for the season? Phone charged plus a power bank? Beacon packed? Trip plan sent — and did your contact confirm the alarm time?',
    },
  ],
  whyItMatters: 'Nearly everything that decides the outcome of a vehicle stranding happens before the engine starts: whether anyone knows where you are, whether there is water and warmth in the car, and whether you can call for help without a phone signal. A few minutes of planning and a kit that lives in the car turn a remote breakdown into an inconvenience.',
  science: [
    {
      type: 'md',
      md: `### Fuel range with a reserve

**Range** is the fuel you are willing to use divided by how much the car burns per kilometre. Keep a **reserve** for detours, headwinds, soft surfaces and idling while stranded:

$$
\\text{range (km)} = \\frac{V_{\\text{tank}} \\times (1 - r)}{c} \\times 100
$$

where $V_{\\text{tank}}$ is the tank volume (L), $r$ the reserve fraction and $c$ the consumption in L/100 km.

**Worked example.** A 60 L tank, a 25 % reserve and 11 L/100 km on a corrugated gravel road with the air-conditioning on:

$$
\\frac{60 \\times 0.75}{11} \\times 100 \\approx 409 \\text{ km}
$$

If the next fuel is 450 km away, you need spare fuel, a different route or a lower consumption — not optimism.

### Water: mass and volume add up

Water weighs **1 kg per litre**. Two people, a planned one-day drive plus a two-day stranding margin, at 5 L each per day in heat: $2 \\times 3 \\times 5 = 30$ L — 30 kg, easily carried in a vehicle and impossible to carry on foot. This is one of the reasons the vehicle is the place to wait.

### Why redundancy beats a single “best” item

If a critical function depends on one item that works with probability $p$, adding an independent second means both must fail: $1 - (1-p)^2$. A phone that works in a remote valley 50 % of the time plus a beacon that works 95 % of the time gives about $1 - 0.5 \\times 0.05 = 97.5$ % — but only if the two fail independently (a flat power bank that charges both does not count).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert (Mojave or Sahara fringe).** A couple plan a scenic back road: 30 L of water, a tarp, traction boards, a PLB, a printed map, and a text to a friend with the route and “call the park service if you haven’t heard from us by 19:00”. A soft wash traps the car at 14:00; they are found the next morning because the friend called on time.

**Subarctic highway (Yukon, Lapland, Siberia).** Hundreds of kilometres between services in winter: a full tank at every stop, sleeping bags in the car, a snow shovel, a battery jump pack, a satellite messenger, and check-ins at each settlement.

**Mountain pass (Alps, Rockies, Andes).** Snow chains and practice fitting them, warm clothing for walking, a shovel, and a check of pass status and forecast before departure — with a turnaround rule if the pass is closing.

**Rural farmland.** A late-night drive home on empty back roads: phone charged, a blanket and water always in the car, a hi-vis vest and warning triangle, and a family member who knows the expected arrival time.

**Tropical wet season.** Unsealed roads become impassable; river crossings rise overnight. The plan includes a road-condition check, a rule never to drive into flood water, and extra food for waiting it out.

**City commuter.** Even in a city, a car kit (water, snacks, a warm layer, phone cable, torch) matters in snowstorms, floods and evacuations when traffic stops for hours.`,
    },
  ],
  mistakes: [
    'Leaving no trip plan — or a plan with no alarm time, or with someone who will not act on it.',
    'Changing route (a “shortcut”) without telling the contact, so the search looks in the wrong place.',
    'Carrying one bottle of water in the desert “because we are only driving”.',
    'Driving past fuel stops on remote roads because the tank is still half full.',
    'Myth: “My phone will get a signal somewhere.” Coverage maps overstate remote coverage; plan for none.',
    'Buying a PLB and never registering it, or never checking its battery date.',
    'Packing a camping stove or heater to use inside the car.',
    'Leaving heavy kit loose in the cabin where it becomes a projectile in a crash.',
  ],
  exercises: [
    {
      id: 's17-l1-e1',
      title: 'Build and stow your vehicle kit',
      level: 1,
      safety: 'home',
      minutes: 90,
      materials: ['A strong box or bag', 'Items from the kit table', 'Straps'],
      steps: [
        'List the longest likely wait on your usual routes (hours or days) and the worst season.',
        'Pack the kit by function using the table: water and food, warmth and shade, be seen and call, car and recovery, care and navigation.',
        'Check that every critical function has two independent ways to be met (e.g., phone and beacon; blanket and sleeping bag).',
        'Strap it down in the boot/trunk; put the first-aid kit, torch and hi-vis vest within reach of the driver.',
        'Put a reminder in your calendar to check water, batteries and medicines every six months.',
      ],
      success: ['Every function is covered, with redundancy for calling and warmth.', 'The kit is secured and can be reached quickly.'],
      skill: 'vehicle-kit',
    },
    {
      id: 's17-l1-e2',
      title: 'Write a road trip plan and test the alarm',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'Choose a real or planned journey. Write route, alternatives, vehicle description, people, kit, check-ins, expected arrival and alarm time.',
        'Give it to a contact and agree exactly what they will do at the alarm time and whom they will call.',
        'On your next ordinary drive, send check-ins as planned and a “home safe” message at the end.',
        'Ask your contact afterwards whether anything in the plan was unclear.',
      ],
      success: ['Your contact can say, without looking, what they would do and when.', 'The plan fits on one page or one message.'],
      skill: 'trip-plan',
    },
    {
      id: 's17-l1-e3',
      title: 'Fuel and water budget for a remote route',
      level: 2,
      safety: 'home',
      minutes: 25,
      steps: [
        'Pick a remote route on a map and list the distances between fuel stops.',
        'Using your car’s real consumption (add 20–40 % for rough surfaces or heavy loads), compute the range with a 25 % reserve.',
        'Compute water for everyone for the trip plus two extra days in the expected temperatures.',
        'Decide what you must change: spare fuel, a different route, more water, or a different season.',
      ],
      success: ['Each leg is within range with the reserve intact.', 'You know how many litres of water to carry and where it goes in the car.'],
    },
  ],
  simulations: ['stranded-vehicle'],
  quiz: [
    {
      id: 's17-l1-q1',
      kind: 'multi',
      prompt: 'Which items belong in a trip plan for a remote road journey?',
      choices: [
        { id: 'a', text: 'Route and any alternative routes', why: 'Yes — searchers follow the route.' },
        { id: 'b', text: 'Vehicle make, colour and number plate', why: 'Yes — searchers look for a vehicle, often from the air.' },
        { id: 'c', text: 'An alarm time and whom your contact will call', why: 'Yes — without it, no one starts the search.' },
        { id: 'd', text: 'What kit you carry (water, warm gear, beacon)', why: 'Yes — it tells searchers how urgent it is and how long you can wait.' },
        { id: 'e', text: 'Your car’s service history', why: 'Not useful to searchers.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['trip-plan', 'remote-road-planning'],
      explanation: 'A trip plan answers the searchers’ questions: where, in what, who, with what, and when to start looking.',
    },
    {
      id: 's17-l1-q2',
      kind: 'numeric',
      prompt: 'Your 70 L tank, keeping a 20 % reserve, on a sandy track where the car uses 14 L/100 km. What is the planning range in km?',
      unit: 'km',
      answer: 400,
      tolerance: 5,
      concepts: ['vehicle-fuel-budget', 'remote-road-planning'],
      explanation: '$70 \\times 0.8 = 56$ L usable; $56 / 14 \\times 100 = 400$ km.',
    },
    {
      id: 's17-l1-q3',
      kind: 'single',
      prompt: 'What is the main difference between a PLB and a satellite messenger?',
      choices: [
        { id: 'a', text: 'A PLB sends a one-way distress alert with position to rescue authorities through a government satellite system; a messenger sends two-way texts through a commercial network', why: 'Correct.' },
        { id: 'b', text: 'A PLB needs mobile coverage', why: 'No — that is its point: it works without mobile coverage.' },
        { id: 'c', text: 'A messenger does not need a subscription', why: 'Most do need one.' },
        { id: 'd', text: 'There is no difference', why: 'They work differently and suit different uses.' },
      ],
      answer: 'a',
      concepts: ['vehicle-kit', 'signaling'],
      explanation: 'PLBs (406 MHz, Cospas-Sarsat) are for life-threatening emergencies and must be registered; messengers add check-ins and two-way communication. Stage 14 covers both in depth.',
    },
    {
      id: 's17-l1-q4',
      kind: 'truefalse',
      prompt: 'True or false: in winter, keeping the fuel tank at least half full is recommended partly because fuel may be your source of heat if you are stranded.',
      answer: true,
      concepts: ['vehicle-fuel-budget', 'vehicle-kit'],
      explanation: 'True. Short engine runs (with the exhaust clear) are a major source of heat in a stranded car — and an empty tank cannot provide them.',
    },
    {
      id: 's17-l1-q5',
      kind: 'single',
      prompt: 'You planned the sealed highway, but a sign offers a gravel “scenic shortcut” that saves 80 km. Your contact has your plan. What is best?',
      choices: [
        { id: 'a', text: 'Take the shortcut — it is shorter, so you will arrive earlier', why: 'If anything goes wrong, searchers will look on the highway, not on the shortcut.' },
        { id: 'b', text: 'Stay on the planned route, or first message your contact with the new route and check fuel, water and road conditions', why: 'Correct — a route change must update the plan.' },
        { id: 'c', text: 'Take it and text your contact once you arrive', why: 'Too late to help if you get stuck on the way.' },
        { id: 'd', text: 'Take it but drive faster', why: 'Speed on unfamiliar gravel raises the risk of a crash.' },
      ],
      answer: 'b',
      concepts: ['trip-plan', 'remote-road-planning', 'stay-with-vehicle'],
      explanation: 'The plan only helps if it is true. Update it before a route change — and check that the car, fuel and water suit the new road.',
    },
    {
      id: 's17-l1-q6',
      kind: 'order',
      prompt: 'Order these from most to least important for surviving a two-day stranding in summer desert heat.',
      items: [
        { id: 'plan', text: 'Someone holds your trip plan with an alarm time' },
        { id: 'water', text: 'Plenty of water in several containers' },
        { id: 'shade', text: 'A tarp or sheet and cord for shade' },
        { id: 'snacks', text: 'Snacks' },
      ],
      answer: ['plan', 'water', 'shade', 'snacks'],
      concepts: ['trip-plan', 'water-budget', 'priorities'],
      explanation: 'Being found ends the emergency; water and shade keep you alive until then; food matters least over two days (Stage 1 priorities).',
    },
  ],
  scenario: {
    id: 's17-l1-sc',
    setup: 'You are about to drive 300 km across a semi-desert region, including 120 km of unsealed road with no services and no mobile coverage. It is midsummer. You have a full tank, 6 L of water, a phone and a first-aid kit. Your sister expects you “sometime this evening”.',
    question: 'What is the most important thing to fix before you leave?',
    choices: [
      { id: 'a', text: 'Buy a better phone mount so you can use navigation more easily.', why: 'Convenient, but it does not change what happens if you get stuck.' },
      { id: 'b', text: 'Give your sister the route, the car’s description and a firm alarm time with instructions to call the police; add much more water and something for shade.', why: 'Best: it creates a search if you do not arrive, and gives you the water and shade to wait for it.' },
      { id: 'c', text: 'Pack extra snacks.', why: 'Food matters least in a short stranding.' },
      { id: 'd', text: 'Plan to drive at night when it is cooler.', why: 'It reduces heat stress, but night driving on unsealed roads has its own risks, and without a plan and water the core problem remains.' },
    ],
    best: 'b',
    debrief: 'Stage 1’s priorities and trip-plan logic apply directly: in a remote, hot, no-coverage area the two things that decide the outcome are whether anyone will come looking and whether you have water and shade to wait. “Sometime this evening” is not an alarm time.',
    concepts: ['trip-plan', 'water-budget', 'vehicle-kit', 'remote-road-planning'],
  },
  summary: [
    'Vehicles strand people because they take them far, fast — but the vehicle is usually the best **shelter and signal**.',
    'Kit by **function**, with redundancy for calling and warmth; add **water and shade** for heat, **sleeping gear and a shovel** for cold.',
    'A **trip plan** needs route, vehicle, people, kit, check-ins and an **alarm time** with someone who will act — and it must stay true.',
    'Budget **fuel with a reserve**, water in litres per person per day, and daylight for the difficult sections.',
    'Plan for **no coverage**: a registered PLB or a satellite messenger for remote roads.',
  ],
  furtherReading: ['ready-car', 'nhtsa-winter-driving', 'cospas-sarsat'],
  references: ['ready-car', 'ready-kit', 'nhtsa-winter-driving', 'cospas-sarsat', 'noaa-sarsat', 'koester-lpb', 'nps-deva-safety', 'army-atp-3-50-21'],
}
