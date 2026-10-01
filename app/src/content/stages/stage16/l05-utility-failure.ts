import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's16-l5',
  stage: 16,
  order: 5,
  title: 'Utility and communication failure',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s16-l2'],
  concepts: ['power-outage', 'water-outage', 'emergency-sanitation', 'carbon-monoxide', 'infrastructure-failure', 'comms-failure', 'vulnerable-neighbours'],
  objectives: [
    'Anticipate how a power cut **cascades** into water, sewage, communication, fuel, payment and medical failures.',
    'Run a household through a **multi-day power outage**: food safety, light, battery, heating/cooling.',
    'Manage a **water outage**: budgeting, hidden sources, disinfection and boil-water notices.',
    'Set up **emergency sanitation**: a bucket toilet, hand hygiene and waste storage.',
    'Recognise and prevent **carbon-monoxide** poisoning, and keep **communicating** when networks fail (SMS, radio, messengers).',
  ],
  explanation: [
    {
      type: 'md',
      md: `Modern life runs on a few networks — electricity, water, sewage, telecommunications, fuel — and they depend on each other. The most common “disaster” most people will face is not an earthquake but a **long utility failure**: a storm, heatwave, ice storm or grid fault that takes power down for days, and water and communications with it.`,
    },
    { type: 'diagram', id: 's16-cascade', caption: 'A power cut is rarely only a power cut.' },
    {
      type: 'md',
      md: `### How failures cascade

- **Mobile networks** keep running on backup batteries at the towers — often for hours, not days. Networks then degrade area by area, just as everyone is trying to call.
- **Water** is pumped: high-rise buildings lose pressure immediately; whole districts lose it when treatment and pumping stations run out of backup power. When water returns, it may be under a **boil-water notice**.
- **Sewage** pumping stops: toilets may not drain, and sewers can back up.
- **Fuel stations and card payments** need power: fuel queues, cash only.
- **Traffic lights and lifts** fail; **refrigeration** stops (food, insulin and other medicines); **heating** fails even with gas boilers, which need electricity for pumps and controls.
- **Hospitals and care homes** run on generators and are stretched; people on home oxygen or dialysis may need to move.

The lesson for planning: **the second-order failures are the ones that hurt** — water, communication, cash, medicines, heat. Your kit and plan (Lessons 1–2) are built for exactly these.

### A power outage, hour by hour

**First hour:** switch to torches; check neighbours who depend on power; **unplug** sensitive appliances (a surge when power returns can damage them) and leave **one lamp switched on** so you know when power is back; tune the radio; **fill the bath and containers** if water may fail; text your out-of-area contact.

**Food:** keep fridge and freezer **doors shut**. A closed fridge keeps food cold for about **4 hours**; a full freezer about **48 hours** (a half-full one about 24). Eat in this order: **fridge perishables first, then freezer food, then pantry food** (the pantry keeps; the perishables do not). Discard perishables that have been **above 4 °C (40 °F) for more than 2 hours** — when in doubt, throw it out. In freezing weather a cool box outside (shaded, animal-proof) extends fridge life; never rely on snow in the sun.

**Heat and cold:** see Lesson 4 — one warm room in winter; keep heat out by day and flush it out by night in summer; warming or cooling centres when the house becomes dangerous.

**Batteries:** low-power mode, fixed check-in times for phones, one light at a time; charge from a power bank or from a car **outdoors**.

**Medical:** electricity-dependent equipment and refrigerated medicines first — if the backup will not last, go early to a place with power.`,
    },
    { type: 'sim', id: 'outage-72h', caption: 'Live through 72 hours without power and water, in winter or summer. Your decisions change warmth, water, food, batteries, CO risk and your neighbour’s fate.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Carbon monoxide: the outage killer',
      md: 'After storms and power cuts, carbon-monoxide poisoning is one of the commonest causes of death and hospital admission. CO comes from **generators, camping stoves, barbecues, gas ovens used for heat, patio heaters, and cars running in garages**. It has no colour or smell. Early symptoms — **headache, dizziness, weakness, nausea, confusion** — are easily mistaken for flu, and **sleeping people can die without waking**. Several people (or pets) feeling ill at once in the same building is a warning sign. **Prevention:** fuel-burning devices only outdoors (generators ≥ 6 m / 20 ft from openings); never heat with an oven or stove; battery **CO alarms** on every level and near bedrooms. **If an alarm sounds or you suspect CO:** get everyone into fresh air immediately, call the emergency number, and do not go back in until the building is cleared.',
    },
    {
      type: 'md',
      md: `### Water outage

1. **Budget by use.** Drinking first (2–3 L per person per day, more in heat), then food preparation and **hand hygiene**, then washing. **Never flush toilets with drinking water** — one flush uses 6–9 L.
2. **Use hidden and grey water.** The filled bath, the hot-water tank (power/gas off, let it cool), the toilet cistern (not the bowl) if no chemicals, and water used for washing (for flushing).
3. **Official supplies.** Distribution points, bottled water, water tankers — bring clean containers.
4. **Disinfect doubtful water** (Stage 1 and Stage 4): let it settle or filter it through cloth; then **boil** (a rolling boil for 1 minute; 3 minutes above about 2,000 m) or add **unscented household bleach** at the dose on the label or given by your public-health agency, and wait **30 minutes**. Boiling and bleach deal with microbes, **not chemicals**: water contaminated with fuel or industrial chemicals (floodwater, a chemical spill) is not made safe — use stored or distributed water.
5. **Boil-water notices** apply to drinking, brushing teeth, making ice, washing food and preparing infant formula, until lifted.`,
    },
    {
      type: 'md',
      md: `### Sanitation: the forgotten priority

When toilets cannot flush, diarrhoeal disease spreads quickly through faeces and unwashed hands — historically one of the biggest killers after disasters. An emergency toilet takes minutes to set up:`,
    },
    { type: 'diagram', id: 's16-bucket-toilet', caption: 'An emergency bucket toilet. Some agencies promote a two-bucket system that keeps urine separate.' },
    {
      type: 'md',
      md: `- **Bucket toilet:** a sturdy bucket (or the toilet bowl itself, emptied, with bags inside it) lined with **two heavy bags**; after each use add a handful of **absorbent** (cat litter, sawdust, shredded paper, dry soil); keep a **tight lid** on it.
- **Separate urine** where possible (a second container): the faeces bucket fills more slowly and smells less. Follow local advice on disposing of urine.
- **Store waste** tied and double-bagged in a lidded bin outside the living space, until collection or official instructions. Do not dig pits near wells or water sources, and do not dump waste into storm drains.
- **Hand hygiene** after the toilet and before food: soap and a little water from a jerrycan with a tap, or alcohol hand sanitiser. Set up a **hand-washing station** by the toilet.
- **Hygiene in general:** wash hands before preparing food, clean food-contact surfaces, manage rubbish so it does not attract pests, and keep babies’ nappies and menstrual products bagged separately.

### Communication failure

- **Texts over calls** (Lesson 1): texts get through congested networks far more often and use less battery. Keep messages short; send your status to the **out-of-area contact**.
- **Official information by radio.** Broadcast radio (AM/FM, and weather-radio services where they exist) works when mobile data and the internet do not. A **wind-up or battery radio** is the single most useful communication item in a home kit.
- **Cell-broadcast alerts** reach phones in an area even when the network is busy.
- **Short-range radios:** licence-free walkie-talkies (such as FRS in North America, PMR446 in Europe, UHF CB in Australia) let a family or street talk over a few hundred metres to a few kilometres. **Amateur (ham) radio** operators, who need a licence, often provide emergency communications for authorities.
- **Low-tech:** notes on doors, community noticeboards at shelters, pre-agreed meeting places and times.
- **Emergency calls:** keep emergency lines for emergencies; if a call does not connect, try again, or send a text if your country supports text-to-emergency services.

### Community resources during the event

Official **distribution points** (water, food), **warming/cooling centres** and **shelters**, **first-aid posts**, and **information points** open in larger outages. Neighbourhood groups and trained volunteers (e.g., CERT) organise wellbeing checks. You are part of that resource: check on the neighbours who live alone, share information, and share what you can spare.`,
    },
  ],
  whyItMatters: 'Long outages are the most likely large emergency most households will face — and their deaths are largely preventable: carbon monoxide from indoor generators and stoves, hypothermia and heat illness in vulnerable people living alone, dehydration and food poisoning, and disease from poor sanitation. A household that knows the rules turns three days without utilities into an uncomfortable weekend.',
  science: [
    {
      type: 'md',
      md: `### How CO builds up indoors

Indoor air is replaced by outside air at a rate called the **air-change rate** (air changes per hour, ACH). A fuel-burning device adds CO at a rate $G$; ventilation removes it in proportion to how much is there. The concentration rises until removal equals production — the **steady state**:

$$
C_{ss} = \\frac{G}{Q}
$$

where $Q$ is the ventilation flow (volume per hour). In words: **double the source, double the level; halve the ventilation, double the level.** A closed-up house in winter may exchange only 0.3–0.5 of its air per hour, and a portable generator produces CO many hundreds of times faster than a gas cooker, so the steady-state level in a garage or house is lethal. Opening a garage door does not raise $Q$ nearly enough — which is why the rule is “outdoors, far from openings”, not “ventilate”.

The approach to steady state is exponential: after one “air-change time” $V/Q$ the level is at about 63 % of $C_{ss}$, after three about 95 %. With 0.5 ACH, that is 2 hours and 6 hours — people are often asleep by then.

### Food in a dead fridge

A closed fridge warms towards room temperature roughly exponentially, with a time constant of many hours because of its insulation and the thermal mass of the food. Bacteria that cause food poisoning multiply fastest between about 4 °C and 60 °C (the “danger zone”, Stage 6). That is why the rule is **time above 4 °C**, not “does it smell OK”.

### Sanitation arithmetic

A person produces roughly 1–1.5 L of urine and about 0.1–0.5 kg of faeces per day. A family of four therefore generates around **4–6 L of urine a day** — which is why separating urine keeps a bucket toilet usable for days instead of hours.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**High-rise flat (city).** Water pressure fails at once above the lower floors; lifts stop. The household fills the bath in the first minutes, sets up a bag-in-the-bowl toilet, and uses the stairs with a headlamp. An older neighbour on the 12th floor cannot manage stairs; neighbours carry up water and report her to the welfare-check team.

**Suburban house, ice storm.** Four days without power at −10 °C. The family lives in one room with sleeping bags; the generator runs outdoors 7 m from the house to power the fridge and a small heater through an extension lead; two battery CO alarms are inside. A neighbour’s generator in a garage sends two people to hospital.

**Rural farm.** The well pump needs electricity: stored water and a hand pump or a generator (outdoors) keep people and animals watered. Neighbours check on each other by radio because mobile coverage fails.

**Hot desert city.** A grid failure during a heatwave: the family keeps heat out by day, soaks cloths, drinks 4+ L each, eats perishables first, and takes the grandparents to an air-conditioned cooling centre in the afternoon.

**Tropical island after a cyclone.** Water is contaminated and may be off for weeks: rain collection, boiling on a stove outdoors, strict hand washing and a two-bucket toilet prevent the diarrhoeal outbreaks that often follow storms.

**Subarctic town.** Pipes freeze if the heat stays off: the family drains the water system before moving to the warming centre.`,
    },
  ],
  mistakes: [
    'Running a generator, stove, barbecue or car in a garage, basement or home — even “with the door open”.',
    'Heating with a gas oven.',
    'Myth: “You would smell carbon monoxide.” It is odourless; only an alarm will tell you.',
    'Opening the fridge and freezer repeatedly to check them.',
    'Eating pantry food first while the perishables spoil.',
    'Myth: “If it smells fine, it is safe.” Dangerous bacteria often do not change smell or taste; use the time-above-4 °C rule.',
    'Flushing the toilet with drinking water.',
    'Relying on boiling or bleach for water contaminated with fuel or chemicals.',
    'Calling repeatedly on a jammed network instead of texting.',
    'Forgetting to check on neighbours who live alone or depend on medical equipment.',
  ],
  exercises: [
    {
      id: 's16-l5-e1',
      title: 'Lights-out evening',
      level: 3,
      safety: 'home',
      minutes: 240,
      materials: ['Your home kit', 'Household members'],
      safetyNote: 'Use only battery lights — no candles. Keep the fridge and freezer running (do not switch off the main supply); simply do not use mains lights, sockets, taps or the flush for the evening. Keep CO alarms and smoke alarms working. Stop if anyone becomes cold or unwell.',
      steps: [
        'Choose an evening. From 18:00 to bedtime, use no mains power, no tap water and no toilet flush — only the kit.',
        'Prepare a meal without the stove (or on a camping stove outdoors only), using stored water.',
        'Set up the bucket toilet and a hand-washing station, and use them.',
        'Track battery use: which lights and phones, for how long.',
        'Afterwards, list every gap and fix it within a month.',
      ],
      success: ['The household got through the evening on the kit.', 'A written gap list exists, with dates to fix each item.'],
      skill: 'outage-drill',
    },
    {
      id: 's16-l5-e2',
      title: 'CO alarm and fuel-device audit',
      level: 3,
      safety: 'home',
      minutes: 30,
      steps: [
        'List every fuel-burning appliance and device at home, including camping stoves, barbecues, generators and cars in attached garages.',
        'Check you have a working CO alarm on every level and near sleeping areas; test them and note battery dates.',
        'Write on each portable device’s case: “OUTDOORS ONLY”.',
        'Teach every household member the CO symptoms and what to do if the alarm sounds.',
      ],
      success: ['Every level has a tested CO alarm.', 'Everyone can name three CO symptoms and the response.'],
      skill: 'home-plan',
    },
    {
      id: 's16-l5-e3',
      title: '72-hour outage simulation, both seasons',
      level: 2,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the 72-Hour Outage simulation once in winter and once in summer.',
        'In one run, deliberately skip the first-hour actions (filling water, texting, the radio) and compare.',
        'Write down the three decisions that changed the outcome most, and which lesson each came from.',
      ],
      success: ['You scored at least 80 % in both seasons.', 'You can explain why each of your three key decisions mattered.'],
    },
  ],
  simulations: ['outage-72h'],
  quiz: [
    {
      id: 's16-l5-q5',
      kind: 'single',
      prompt: 'After a flood, your well water looks clear but floodwater covered the wellhead. You have a stove and bleach. What is safest for drinking?',
      choices: [
        { id: 'a', text: 'Boil the well water at a rolling boil for one minute', why: 'Handles microbes but not fuel or chemicals that floods carry.' },
        { id: 'b', text: 'Add the right dose of bleach and wait 30 minutes', why: 'Same problem — chemicals are not removed.' },
        { id: 'c', text: 'Drink stored or official water until the well is tested and disinfected', why: 'Correct.' },
        { id: 'd', text: 'Filter it through a clean cloth, then boil it as well', why: 'The cloth removes sediment only and boiling handles microbes; chemicals remain.' },
      ],
      answer: 'c',
      concepts: ['water-outage', 'water-treatment', 'chemical-contamination'],
      explanation: 'Boiling and bleach make water microbiologically safer, not chemically safe. Floodwater often contains fuel, sewage and chemicals.',
    },
    {
      id: 's16-l5-q2',
      kind: 'single',
      prompt: 'Which belief about spotting carbon-monoxide poisoning during a winter outage is **wrong**?',
      choices: [
        { id: 'a', text: 'Several people with headaches at once is a warning sign.', why: 'True — shared symptoms in one building are a classic warning.' },
        { id: 'b', text: 'A lethargic family dog can be an early warning sign.', why: 'True — pets are often affected first.' },
        { id: 'c', text: 'Confusion and drowsiness are symptoms; sleep can be fatal.', why: 'True — together with dizziness and nausea.' },
        { id: 'd', text: 'If there is no smell of exhaust, there is no CO present.', why: 'Correct — this is wrong: CO itself is odourless, so lack of smell means nothing.' },
      ],
      answer: 'd',
      concepts: ['carbon-monoxide'],
      explanation: 'Flu-like symptoms in several people or pets, especially improving when away from home, suggest CO; a smell of exhaust means other gases are present too, but no smell proves nothing. Fresh air and the emergency number.',
    },
    {
      id: 's16-l5-q3',
      kind: 'single',
      prompt: 'Your fridge has been off for 6 hours in a warm flat; the door was opened several times. Its thermometer reads 9 °C. What do you do with the chicken inside?',
      choices: [
        { id: 'a', text: 'Smell it; if it smells fine, cook it well', why: 'Many dangerous bacteria and toxins do not change the smell, and some toxins survive cooking.' },
        { id: 'b', text: 'Discard it — it has been above 4 °C for more than 2 hours', why: 'Correct.' },
        { id: 'c', text: 'Refreeze it when the power returns', why: 'Refreezing does not undo bacterial growth.' },
        { id: 'd', text: 'Eat it cold quickly before it gets worse', why: 'The worst option.' },
      ],
      answer: 'b',
      concepts: ['power-outage', 'food-safety-temps'],
      explanation: 'When in doubt, throw it out. The rule is time above 4 °C (40 °F).',
    },
    {
      id: 's16-l5-q7',
      kind: 'single',
      prompt: 'Mobile data is down and calls fail, but texts occasionally go through. What is the best way to get **official information** about shelters and water points?',
      choices: [
        { id: 'a', text: 'Keep refreshing official social-media accounts for updates', why: 'Needs data and drains the battery.' },
        { id: 'b', text: 'A battery or wind-up radio tuned to the local emergency station', why: 'Correct — broadcast radio works without the mobile network.' },
        { id: 'c', text: 'Call the emergency number and ask the operator directly', why: 'Keep emergency lines for emergencies.' },
        { id: 'd', text: 'Drive around town looking for posted signs and notices', why: 'Wastes fuel on roads without traffic lights.' },
      ],
      answer: 'b',
      concepts: ['comms-failure', 'official-alerts'],
      explanation: 'Broadcast radio is one-to-many and survives network overload; it is how authorities announce shelters, water and restoration times.',
    },
    {
      id: 's16-l5-q6',
      kind: 'single',
      prompt: 'You are using a bucket toilet for several days. Which practice makes it **unsafe**?',
      choices: [
        { id: 'a', text: 'Lining it with two heavy bags and keeping a tight lid on', why: 'Safe practice — contains waste and smell.' },
        { id: 'b', text: 'Adding cat litter or sawdust after each use', why: 'Safe practice — controls smell and liquid.' },
        { id: 'c', text: 'Emptying the full bags into the storm drain', why: 'Correct — this spreads disease; store sealed bags until collection.' },
        { id: 'd', text: 'Washing hands with soap or sanitiser every time', why: 'Safe practice — the most important part.' },
      ],
      answer: 'c',
      concepts: ['emergency-sanitation'],
      explanation: 'Contain, cover, separate urine where possible, store sealed bags until collection — and wash hands every time.',
    },
    {
      id: 's16-l5-q1',
      kind: 'single',
      prompt: 'The power has gone out and will be off for days. In what order should you eat your food?',
      choices: [
        { id: 'a', text: 'Fridge perishables, then freezer food, then pantry food', why: 'Correct — eat in the order things spoil.' },
        { id: 'b', text: 'Pantry food, then fridge perishables, then freezer food', why: 'The pantry keeps; eating it first wastes the perishables.' },
        { id: 'c', text: 'Freezer food, then fridge perishables, then pantry food', why: 'A full freezer lasts about 48 h; the closed fridge only about 4 h.' },
        { id: 'd', text: 'Fridge perishables, then pantry food, then freezer food', why: 'The freezer food spoils long before the pantry does.' },
      ],
      answer: 'a',
      concepts: ['power-outage', 'food-storage'],
      explanation: 'A closed fridge lasts about 4 h, a full freezer about 48 h (cook freezer food outdoors on a camping stove); the pantry keeps. Eat in the order things spoil.',
    },
    {
      id: 's16-l5-q4',
      kind: 'single',
      prompt: 'Taps are off for 4 days. Five people plan 3 L each per day for drinking and cooking and 1 L each per day for hand and basic hygiene. How much potable water do they need?',
      choices: [
        { id: 'a', text: '80 L', why: 'Correct — 5 × 4 L × 4 days.' },
        { id: 'b', text: '60 L', why: 'This leaves out the 1 L per day for hygiene.' },
        { id: 'c', text: '20 L', why: 'That is one day for the household; multiply by 4 days.' },
        { id: 'd', text: '16 L', why: 'That is one person for 4 days; multiply by 5 people.' },
      ],
      answer: 'a',
      concepts: ['water-outage', 'emergency-water-food'],
      explanation: '$5 \\times (3 + 1) \\times 4 = 80$ L. Flushing comes from bath or grey water — or a bucket toilet — never from this budget.',
    },
  ],
  scenario: {
    id: 's16-l5-sc',
    setup: 'Day 2 of a winter power cut, −6 °C outside, 9 °C inside. Your family is managing in one room with sleeping bags. A neighbour has put a petrol generator in his attached garage with the up-and-over door half open, running a heater into the house. His two children have had headaches since the morning; he thinks it is a cold. You have a battery CO alarm in your kit.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Nothing — it is his house and his generator.', why: 'Headaches in several people near a running generator are a textbook CO warning; sleeping tonight could kill them.' },
      { id: 'b', text: 'Tell him now that this is likely CO poisoning: generator off (or moved outside, ≥ 6 m from openings), everyone into fresh air, call the emergency number for the children’s symptoms; lend or place your CO alarm; offer your warm room or the warming centre.', why: 'Best: removes the source, gets people into fresh air, gets medical assessment, and offers a safe alternative for warmth.' },
      { id: 'c', text: 'Suggest he opens the garage door fully.', why: 'Helps a little, but a generator in a garage is never safe; CO still enters the house.' },
      { id: 'd', text: 'Tell him to give the children painkillers and put them to bed early.', why: 'Sleep is exactly when CO kills.' },
    ],
    best: 'b',
    debrief: 'This combines Stage 1’s immediate-danger question with community resources. CO is the classic outage killer: the victims feel only “flu”, and the danger peaks overnight. Your knowledge and your CO alarm are a community resource; a friendly, direct intervention and a safer alternative for warmth (your room, the warming centre) save lives.',
    concepts: ['carbon-monoxide', 'generator-safety', 'vulnerable-neighbours', 'immediate-danger'],
  },
  summary: [
    'Power cuts **cascade**: water, sewage, networks, fuel, payments, refrigeration, heating, medical care.',
    'Outage routine: torches, unplug + one lamp on, radio, fill water, text, check neighbours; **fridge ~4 h, full freezer ~48 h**; eat fridge → freezer → pantry.',
    '**CO:** no fuel-burning devices indoors; generators ≥ 6 m from openings; alarms on every level; symptoms are flu-like.',
    'Water: drinking first; never flush with drinking water; boil or bleach for microbes — **not chemicals**.',
    'Sanitation: bag-lined bucket, absorbent, lid, urine separate, sealed storage — and **hand washing every time**.',
    'Communication: **texts, radio, cell-broadcast alerts, short-range radios**, paper plans and meeting places.',
  ],
  furtherReading: ['ready-power-outages', 'foodsafety-outage', 'cdc-co', 'cdc-emergency-water'],
  references: ['ready-power-outages', 'foodsafety-outage', 'cdc-co', 'cpsc-co', 'cdc-emergency-water', 'epa-emergency-disinfection', 'sphere-handbook', 'ready-alerts', 'nz-get-ready', 'fema-cert', 'ready-winter', 'ready-heat'],
}
