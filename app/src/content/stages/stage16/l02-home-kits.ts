import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's16-l2',
  stage: 16,
  order: 2,
  title: 'Home kits: water, food, light, power',
  level: 'beginner',
  minutes: 45,
  prerequisites: ['s16-l1'],
  concepts: ['home-kit', 'go-bag', 'emergency-water-food', 'stock-rotation', 'battery-capacity', 'emergency-lighting', 'generator-safety'],
  objectives: [
    'Calculate **water and food quantities** for your household and number of days.',
    'Store and **rotate** water and food so the kit is fresh when you need it.',
    'Choose **flameless lighting** and size **battery power** in watt-hours.',
    'Explain why generators and fuel-burning devices must **never run indoors**.',
    'Distinguish the **stay-at-home kit** from the **go-bag**, and adapt both to infants, older adults, pets and climate.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A home kit lets a household live **without utilities and without shops** for a set time. Agencies used to say three days; many now recommend a week or more, and national advice ranges from about **3 days to 2 weeks** — follow yours. Start with 3 days and grow.

### Two kits, not one

| | **Stay-at-home kit** | **Go-bag** (one per person) |
|---|---|---|
| Purpose | Shelter in place for days without power, water or shops | Leave the house in 2 minutes |
| Water | Days of water for everyone (litres below) | 1–2 L per person + a way to treat water |
| Food | Days of shelf-stable food | 1–2 days of ready-to-eat food |
| Other | Lights, radio, power, first aid, sanitation, warmth/cooling, tools | Documents, cash, medications, phone charger/power bank, torch, clothes, whistle, map, contacts on paper |

The go-bag lives by the door; the home kit can be spread through cupboards, as long as everyone knows where.`,
    },
    { type: 'diagram', id: 's16-water-food', caption: 'Water and food for a family of four: the numbers grow quickly with days.' },
    {
      type: 'md',
      md: `### Water: the non-negotiable

The common planning figure is **about 4 L (1 US gallon) per person per day** for drinking and basic hygiene. Of that, roughly 2–3 L is for drinking (more in heat, for nursing mothers, the sick and the active) and about 1 L for food preparation and minimal washing. Add water for **pets** and plan **more in hot climates** (roughly half as much again).

**Storage:**
- Commercially bottled water: keep it sealed, in a cool dark place, until its date.
- Self-filled: clean food-grade containers (not milk jugs, which degrade and leak); fill from a treated tap; seal; label with the date; **replace every 6 months**.
- Split water between several containers and places (one leak, one crushed cupboard should not take it all).
- Keep a way to **disinfect** extra water: unscented household bleach and a dropper, a filter, or a stove to boil (outdoors only).

**Hidden water in a home:** the hot-water tank (turn off its power or gas first and let it cool), the toilet **cistern** (tank) if no cleaning chemicals are in it — not the bowl — ice cubes, and canned-food liquids. A bath filled at the start of an outage is excellent for flushing and washing (and can be disinfected for drinking if needed).`,
    },
    {
      type: 'md',
      md: `### Food: store what you eat, eat what you store

Aim for about **2,000 kcal per adult per day** (children less, cold weather and hard work more). Choose foods that:

- need **no refrigeration**, **little or no cooking** and **little water**: canned beans, fish and meat, peanut butter, crackers, oats, dried fruit, nuts, cereal bars, long-life milk;
- your household **already eats** — unfamiliar food goes uneaten, especially by children and the stressed;
- cover **special diets**: infant formula (ready-to-feed needs no water), allergies, diabetes.

Add a **manual can opener**, plates, cutlery and rubbish bags.

**Rotation (first in, first out):** put new purchases at the back, use from the front, and check dates every six months (a fixed date, e.g., when clocks change). A pantry you cook from every week is a kit that never expires.`,
    },
    {
      type: 'md',
      md: `### Light: flameless

Use **LED torches, headlamps and lanterns**, with spare batteries (or rechargeable ones kept charged). A headlamp leaves both hands free for first aid, stairs and children. **Avoid candles**: they cause many house fires after disasters, and an open flame near a gas leak after an earthquake can be catastrophic. Put a torch and shoes by every bed.

### Power: think in watt-hours

Phones are torches, radios, maps and your link to family — but only while charged. Keep phones charged by habit, and store energy in **power banks**, plus optionally a small solar panel or a hand-crank radio with a USB port. A car can charge phones — outdoors only, never with the engine running in a garage.`,
    },
    { type: 'diagram', id: 's16-battery-budget', caption: 'Battery arithmetic: the number printed in mAh only becomes useful once converted to watt-hours.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Generators and fuel-burning devices: never indoors',
      md: 'Portable generators, camping stoves, barbecues, patio heaters and running cars produce **carbon monoxide (CO)** — invisible, odourless and able to kill sleeping people. Run a generator **only outdoors, at least 6 m (20 ft) from doors, windows and vents**, with the exhaust pointing away — never in a house, garage, basement, shed, or on a balcony near a window, even with doors open. Install **battery CO alarms** on every level and near sleeping areas. Never connect a generator to the house wiring by plugging it into a wall socket: without a transfer switch installed by an electrician, it can **backfeed** the grid and electrocute line workers.',
    },
    { type: 'diagram', id: 's16-generator', caption: 'Generator placement. The safe spot is outside and away from every opening; a flat usually has no such spot.' },
    {
      type: 'md',
      md: `### The rest of the home kit

- **First aid** kit and manual; **medications** (a reserve of at least a week, if your prescriber and pharmacist agree), spare glasses, hearing-aid batteries.
- **Battery or wind-up radio** for official broadcasts.
- **Sanitation:** bucket, heavy bags, absorbent (cat litter/sawdust), soap, hand sanitiser, wipes, menstrual products (Lesson 5).
- **Warmth or cooling:** sleeping bags and blankets for cold climates; battery fans and spray bottles for hot ones.
- **Tools:** shut-off wrench, duct tape, plastic sheeting (for sealing a room in a chemical release), work gloves, dust masks, sturdy shoes, whistle.
- **Fire extinguisher** and working smoke and CO alarms.
- **Documents and cash** in a waterproof pouch; contacts on paper.
- **Special needs:** infant supplies (formula, nappies), pet food, water, lead and carrier, mobility aids.`,
    },
    { type: 'sim', id: 'home-kit', caption: 'Build a kit for different households and climates under a budget and storage limit. Watch how the gaps change.' },
  ],
  whyItMatters: 'Shops empty within hours of a warning, taps and pumps stop when the power stops, and relief takes days to reach everyone after a large disaster. A kit bought and rotated in calm times turns those days from a crisis into an inconvenience — and frees help for those who could not prepare.',
  science: [
    {
      type: 'md',
      md: `### Water quantity

Total water = people × litres per person per day × days (+ pets):

$$
W = n \\times q \\times d
$$

For **2 adults and 2 children** at $q = 4$ L for $d = 7$ days: $4 \\times 4 \\times 7 = 112$ L — about six 20 L containers. In a hot climate at 6 L: $4 \\times 6 \\times 7 = 168$ L. For comparison, humanitarian minimum standards (Sphere) aim for an average of **15 L per person per day** once a camp is running — the 4 L figure is a short-term survival-and-basic-hygiene figure, not a comfortable one.

### Food energy

Daily energy for the same family: $2 \\times 2000 + 2 \\times 1500 = 7000$ kcal. For a week: $49\\,000$ kcal. Typical shelf-stable foods: dry oats ≈ 380 kcal per 100 g, peanut butter ≈ 590 kcal per 100 g, a 400 g can of beans ≈ 300–350 kcal. So a week of food could be, for example, 2 kg of oats (7,600 kcal) + 2 kg of peanut butter (11,800 kcal) + 20 cans of beans and fish (~7,000 kcal) + crackers, rice, dried fruit and nuts for the rest — and a variety that the family will actually eat.

### Battery energy in watt-hours

Energy (Wh) = charge (Ah) × voltage (V). Power banks print capacity in **mAh at the internal cell voltage** (about 3.7 V):

$$
E = \\frac{20\\,000\\ \\text{mAh}}{1000} \\times 3.7\\ \\text{V} = 74\\ \\text{Wh}
$$

Converting to USB 5 V and charging a phone loses roughly a quarter, leaving about **55 Wh** usable. A phone battery of about 4,500 mAh at 3.8 V holds ≈ 17 Wh, so one such power bank gives roughly **3 full phone charges**. A 3 W LED lantern running 6 hours a night uses 18 Wh per night.

Time a device runs = usable energy ÷ power: $55\\ \\text{Wh} \\div 3\\ \\text{W} \\approx 18$ hours of lantern light.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Small city flat.** Little storage space: water in 5–10 L bottles under beds and in wardrobes; food is the ordinary pantry kept a week deep; power banks and a small solar panel instead of a generator (a flat has no safe place 6 m from every opening).

**Suburban house, cold winters.** Sleeping bags for everyone, a battery CO alarm on each floor, a plan for one warm room, stored water plus a filled bath at the start of an outage.

**Hot desert city.** Water at 6+ L per person per day; battery fans, spray bottles and a plan for a cooling centre; medications that must stay below a set temperature identified in advance.

**Rural property.** Wells need electric pumps: store water or have a manual option; livestock water; fuel stored safely; a longer self-reliance target (roads may be cut for longer).

**Tropical coast (cyclone season).** Kit checked before the season; documents in waterproof bags; water stored before landfall, as supplies are often contaminated afterwards.

**Subarctic town.** Food with extra energy for cold; warm clothing and sleeping bags rated for indoor temperatures that may fall near freezing; spare batteries kept warm (cold drains them).`,
    },
  ],
  mistakes: [
    'Storing water in old milk jugs, or never replacing self-filled water.',
    'Buying “survival food” nobody likes, then letting it expire.',
    'Forgetting a manual can opener, infant formula, pet food or medications.',
    'Using candles as the main light source.',
    'Myth: “A generator is safe in the garage with the door open.” It is not — CO builds up and seeps into the house. Outdoors only, ≥ 6 m from openings.',
    'Myth: “My power bank says 20,000 mAh, so it charges a 4,000 mAh phone five times.” The mAh are at a different voltage and conversion loses energy; think in Wh — about three charges.',
    'Keeping the whole kit in one place that a flood or collapse could make unreachable.',
  ],
  exercises: [
    {
      id: 's16-l2-e1',
      title: 'Build and inventory a 72-hour home kit',
      level: 3,
      safety: 'home',
      minutes: 120,
      materials: ['Containers for water', 'Your pantry', 'A marker and labels'],
      steps: [
        'Calculate water (people × 4 L × 3 days, more in heat, plus pets) and food (kcal per person per day × 3) for your household.',
        'Fill and date water containers or buy bottled water; store them in at least two places.',
        'Check your pantry against the food figure; add shelf-stable food you already eat, and a manual can opener.',
        'Assemble lights (one per person or two minimum), a radio, power banks, first aid, sanitation items, tools and documents.',
        'Write an inventory with expiry dates; set a 6-monthly reminder to rotate.',
      ],
      success: ['Water and food meet your calculated figures.', 'Every family member knows where the kit is.', 'A rotation reminder exists.'],
      skill: 'home-plan',
      safetyNote: 'Store fuel and batteries away from heat and children. Do not store petrol indoors.',
    },
    {
      id: 's16-l2-e2',
      title: 'Pack a go-bag and time the grab',
      level: 3,
      safety: 'home',
      minutes: 60,
      steps: [
        'Pack one bag per person (children carry a small one): water, snacks, torch, whistle, copies of documents, cash, medications list, phone cable and power bank, a change of clothes, rain layer, contacts card.',
        'Place the bags by the exit you would use.',
        'Run a drill: from a random moment, everyone gets shoes, jacket and go-bag and reaches meeting place 1. Time it.',
        'Note anything missed; aim for under 2 minutes.',
      ],
      success: ['All bags packed and weighed so each person can carry theirs.', 'The drill takes under 2 minutes.'],
      skill: 'go-bag-pack',
    },
    {
      id: 's16-l2-e3',
      title: 'Battery budget for 72 hours',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'Read the capacity (mAh) of your power banks and phones; convert to Wh (mAh ÷ 1000 × 3.7 V).',
        'Estimate what you need for 3 days: phones on low-power mode (e.g., one charge per phone per day), lights (W × hours), radio.',
        'Compare with the usable energy (about 75 % of the power bank’s Wh). Decide what to add: another power bank, a solar panel, a crank radio.',
      ],
      success: ['You have a written Wh budget with a margin.'],
      skill: 'home-plan',
    },
  ],
  simulations: ['home-kit'],
  quiz: [
    {
      id: 's16-l2-q1',
      kind: 'numeric',
      prompt: 'A household of 3 adults and 1 child in a hot climate plans 6 L per person per day. How many litres for **5 days**?',
      unit: 'L',
      answer: 120,
      tolerance: 0,
      concepts: ['emergency-water-food'],
      explanation: '$4 \\times 6 \\times 5 = 120$ L — about six 20 L containers.',
    },
    {
      id: 's16-l2-q2',
      kind: 'numeric',
      prompt: 'A power bank is rated 10,000 mAh at 3.7 V. About how many watt-hours are **usable** at the USB port if about 75 % survives conversion? (Round to a whole number.)',
      unit: 'Wh',
      answer: 28,
      tolerance: 1,
      concepts: ['battery-capacity'],
      explanation: '$10\\ \\text{Ah} \\times 3.7\\ \\text{V} = 37$ Wh nominal; $37 \\times 0.75 \\approx 28$ Wh usable — about one and a half charges of a typical phone.',
    },
    {
      id: 's16-l2-q3',
      kind: 'single',
      prompt: 'Where is it safe to run a portable generator during a power cut?',
      choices: [
        { id: 'a', text: 'In the garage with the big door fully open', why: 'No — CO accumulates in garages and seeps into the house.' },
        { id: 'b', text: 'On a flat’s balcony next to the living-room window', why: 'No — exhaust enters through windows and doors.' },
        { id: 'c', text: 'Outdoors, at least 6 m (20 ft) from doors, windows and vents, exhaust pointing away, with CO alarms inside', why: 'Correct.' },
        { id: 'd', text: 'In the basement, where it is dry', why: 'No — one of the deadliest places.' },
      ],
      answer: 'c',
      concepts: ['generator-safety', 'carbon-monoxide'],
      explanation: 'Generators are for outdoors only. CO is odourless; sleeping people can die without waking.',
    },
    {
      id: 's16-l2-q4',
      kind: 'multi',
      prompt: 'Which are good practice for stored water and food?',
      choices: [
        { id: 'a', text: 'Replacing self-filled water every 6 months', why: 'Yes.' },
        { id: 'b', text: 'Storing water in several containers in different places', why: 'Yes — one leak or one blocked cupboard does not take it all.' },
        { id: 'c', text: 'Buying food nobody eats because it lasts 25 years', why: 'No — food that is not eaten is not a supply.' },
        { id: 'd', text: 'First in, first out: new stock at the back', why: 'Yes — rotation keeps the kit fresh.' },
        { id: 'e', text: 'Reusing old milk jugs for water', why: 'No — they degrade and are hard to clean.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['stock-rotation', 'emergency-water-food'],
      explanation: 'Store what you eat and eat what you store; rotate water on a schedule.',
    },
    {
      id: 's16-l2-q5',
      kind: 'single',
      prompt: 'After an earthquake at night, the power is out. What is the best light source to reach first?',
      choices: [
        { id: 'a', text: 'A candle and matches from the kitchen drawer', why: 'A flame near a possible gas leak can cause an explosion; candles also cause many post-disaster fires.' },
        { id: 'b', text: 'The headlamp and shoes kept by the bed', why: 'Correct — flameless, hands-free, and shoes protect against broken glass.' },
        { id: 'c', text: 'A lighter, briefly, to find the torch', why: 'Still an open flame in a possibly gas-filled room.' },
        { id: 'd', text: 'The car headlights', why: 'Not reachable safely, and wastes the car battery.' },
      ],
      answer: 'b',
      concepts: ['emergency-lighting', 'gas-leak'],
      explanation: 'Keep a torch or headlamp and shoes by every bed. Never use a flame until you know there is no gas leak.',
    },
    {
      id: 's16-l2-q6',
      kind: 'single',
      prompt: 'A family of 2 adults and 2 young children needs about 7,000 kcal per day. Which is closest to a **week’s** food energy?',
      choices: [
        { id: 'a', text: '7,000 kcal', why: 'That is one day.' },
        { id: 'b', text: '21,000 kcal', why: 'That is three days.' },
        { id: 'c', text: '49,000 kcal', why: 'Correct — 7 × 7,000.' },
        { id: 'd', text: '140,000 kcal', why: 'Far too much for a week.' },
      ],
      answer: 'c',
      concepts: ['emergency-water-food'],
      explanation: '7,000 × 7 = 49,000 kcal — for example about 2 kg of oats, 2 kg of peanut butter, 20 cans and assorted dry food.',
    },
  ],
  scenario: {
    id: 's16-l2-sc',
    setup: 'You have a budget for one purchase this month for your family of four in a ground-floor flat in a city with cold winters and frequent storms. Your kit has 10 L of water, some canned food, one torch and no CO alarm.',
    question: 'What should you buy first?',
    choices: [
      { id: 'a', text: 'A portable petrol generator', why: 'Expensive, and a flat has no safe spot 6 m from all openings — it adds a CO hazard rather than removing one.' },
      { id: 'b', text: 'Water containers to reach ~48 L (4 people × 4 L × 3 days), plus a battery CO alarm and a second light', why: 'Best: water is the largest gap and cannot be improvised; the CO alarm protects against the commonest outage killer; lights are cheap.' },
      { id: 'c', text: 'Freeze-dried survival food for a month', why: 'Food is not your most limiting resource over 72 hours; water is.' },
      { id: 'd', text: 'A large stock of candles', why: 'Fire risk and dangerous after earthquakes (gas); use LED lights.' },
    ],
    best: 'b',
    debrief: 'Close the most dangerous gap first. As in Stage 1’s priorities, water outranks food on a 3-day horizon, and a cheap control (a CO alarm) guards against a severe and common consequence. Expensive kit that introduces new hazards (a generator in a flat) is a poor first buy.',
    concepts: ['home-kit', 'emergency-water-food', 'generator-safety', 'priorities'],
  },
  summary: [
    'Water: **~4 L per person per day** (more in heat), for at least 3 days — longer if your agency advises.',
    'Food: ~2,000 kcal per adult per day; store what you eat; **rotate first in, first out**.',
    'Flameless light; power measured in **Wh = Ah × V**; a 20,000 mAh bank ≈ 3 phone charges.',
    'Generators and fuel burners **never indoors**; CO alarms on every level.',
    'A stay-at-home kit and a go-bag per person; adapt to infants, older adults, pets and climate.',
  ],
  furtherReading: ['ready-kit', 'cdc-water-storage', 'ready-power-outages'],
  references: ['ready-kit', 'cdc-water-storage', 'cdc-emergency-water', 'ready-power-outages', 'cdc-co', 'cpsc-co', 'sphere-handbook', 'ready-pets', 'redcross-prepare'],
}
