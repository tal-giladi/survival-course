import type { Lesson } from '../../types'

export const l09: Lesson = {
  id: 's1-l9',
  stage: 1,
  order: 9,
  title: 'Survival equipment and your personal kit',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l2', 's1-l8'],
  concepts: ['kit', 'redundancy'],
  objectives: [
    'List the **Ten Essentials** as functional systems and explain what each protects against.',
    'Organise kit in **three tiers** so the most critical items survive losing your pack.',
    'Apply **redundancy** to critical functions (fire, light, communication, navigation).',
    'Adapt a kit to **environment**, trip length and group, within a weight budget.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Kit does not make you survive; decisions do. But the right small items make good decisions *possible*: a headlamp makes stopping at dusk less urgent, a lighter turns a cold night into a warm one, and a satellite messenger can cut a two-day search to two hours.

### The Ten Essentials — as systems

The Mountaineers’ "Ten Essentials" list, adopted by land agencies such as the US National Park Service, is written as **systems** rather than specific items:

| # | System | Protects against | Typical items |
|---|---|---|---|
| 1 | **Navigation** | Getting lost | Map, compass, GPS/phone with offline maps, altimeter |
| 2 | **Headlamp** | Darkness | Headlamp + spare batteries |
| 3 | **Sun protection** | Sunburn, snow blindness, heat | Sunglasses, sunscreen, hat, clothing |
| 4 | **First aid** | Injury, illness | Kit matched to your training; personal medications |
| 5 | **Knife** | Repair, fire prep, first aid | Knife or multitool, repair tape |
| 6 | **Fire** | Cold, signaling, water | Lighter + ferro rod, tinder |
| 7 | **Shelter** | Exposure | Emergency bivy/bag, tarp |
| 8 | **Extra food** | Delay | One day beyond plan |
| 9 | **Extra water** | Dehydration | More water + a way to treat it |
| 10 | **Extra clothes** | Cold, wet | Insulating layer, hat, gloves, dry socks |

Modern additions most instructors now add: **communication** (charged phone, power bank, whistle, and in remote areas a **PLB or satellite messenger**) and a **trip plan** left with someone.`,
    },
    { type: 'diagram', id: 'kit-tiers', caption: 'Three tiers. If you lose the pack, Tier 1 and 2 must still let you survive a night and be found.' },
    {
      type: 'md',
      md: `### Redundancy

Critical functions should not depend on a single item. The saying "two is one, one is none" is crude but useful:

- **Fire:** a lighter *and* a ferro rod (ferro rods work wet; lighters fail when cold or wet). Carry prepared tinder.
- **Light:** headlamp *and* phone light or a tiny backup light.
- **Communication:** phone *and* whistle; in remote areas add a PLB/satellite messenger.
- **Navigation:** phone with offline maps *and* paper map + compass.

Redundancy should be **diverse** — different failure modes — not just two of the same thing.

### Weight and the environment

Every gram costs energy, and heavy kits encourage leaving things behind. Tailor to the trip:

- **Desert:** far more water capacity; shade (tarp); sun protection; signal mirror.
- **Cold/snow:** insulation, stove for melting snow, closed-cell pad, spare gloves, goggles.
- **Tropical:** water treatment, insect protection, spare dry clothes in a waterproof bag, foot care.
- **Coastal/water:** tide tables, flotation, dry bag.
- **Urban commute:** the *Everyday Carry* subset — phone + power bank, small light, cash, water, any medications, a whistle.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Kit you cannot use is not kit',
      md: 'A ferro rod you have never struck, a first-aid kit with items you do not understand, a compass you cannot take a bearing with — these give false confidence. Practise with every item at home before you rely on it.',
    },
  ],
  whyItMatters: 'Many rescues are of people who set out for a short, easy walk carrying almost nothing. A few hundred grams of well-chosen kit — organised so it stays on your body — changes the outcome of the most common emergencies: an unplanned night out, getting lost, a minor injury, a sudden change of weather.',
  examples: [
    {
      type: 'md',
      md: `**Pocket kit (Tier 2, ~250 g) example:** mini ferro rod + cotton-wool/petroleum tinder in a film canister, small lighter, orange emergency bag, 6 water purification tablets, 5 m of cord, signal mirror, button compass, whistle, 2 plasters + 1 small dressing, 2 energy gels, tiny LED light, strip of repair tape wrapped around a card.

**Day pack (Tier 3):** the Ten Essentials + the pocket kit + phone + power bank. In remote terrain: PLB or satellite messenger.

**Vehicle (see Stage 17):** blankets, lots of water, food, shovel, jump leads, high-visibility items, a full first-aid kit.

**Home (see Stage 16):** at least 3 days of water (about 4 L per person per day is a common planning figure, including hygiene), food, light, radio, first aid, medications.`,
    },
  ],
  mistakes: [
    'Keeping every critical item in the pack — then losing or leaving the pack.',
    'Redundancy with the same failure mode (two lighters that both fail in the cold).',
    'Carrying items you have never practised with.',
    'Letting batteries, medications and food expire; never checking the kit.',
    'Cutting the "boring" items (extra layer, headlamp) to save weight on "short" trips.',
  ],
  exercises: [
    {
      id: 's1-l9-e1',
      title: 'Build your pocket kit and day kit',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Small pouch or tin', 'Kitchen scale', 'The items you choose'],
      steps: [
        'Assemble a Tier 2 pocket kit under ~300 g covering: fire (×2 methods), shelter, water treatment, signaling (visual + audible), navigation, light, first aid, cord, repair.',
        'Weigh it and write an inventory card that lives inside it.',
        'Check your day pack against the Ten Essentials + communication.',
        'Practise with every item: strike the ferro rod onto tinder (safely, outdoors), open the emergency bag, use the compass.',
        'Set a calendar reminder every 6 months to check batteries, expiry dates and tinder.',
      ],
      success: ['Pocket kit covers every function and weighs under ~300 g.', 'You have used every item at least once.', 'A 6-monthly check reminder is set.'],
      skill: 'kit-assembly',
    },
  ],
  simulations: ['kit-builder'],
  quiz: [
    {
      id: 's1-l9-q1',
      kind: 'single',
      prompt: 'Which of these is **NOT** one of the **Ten Essentials** systems?',
      choices: [
        { id: 'a', text: 'Navigation', why: 'One of the Ten Essentials.' },
        { id: 'b', text: 'Fire', why: 'One of the Ten Essentials.' },
        { id: 'c', text: 'Fishing kit', why: 'Correct — food acquisition is not an essential for day trips.' },
        { id: 'd', text: 'Headlamp', why: 'One of the Ten Essentials.' },
      ],
      answer: 'c',
      concepts: ['kit'],
      explanation: 'The Ten Essentials cover navigation, light, sun, first aid, knife, fire, shelter, extra food, extra water, extra clothes.',
    },
    {
      id: 's1-l9-q2',
      kind: 'single',
      prompt: 'Which pairing gives the **best** fire redundancy?',
      choices: [
        { id: 'a', text: 'Two identical butane lighters', why: 'Same failure mode — both struggle when cold or wet.' },
        { id: 'b', text: 'A butane lighter and a ferrocerium rod with tinder', why: 'Correct — different failure modes; ferro works wet and cold.' },
        { id: 'c', text: 'A box of ordinary matches', why: 'Single method and vulnerable to damp.' },
        { id: 'd', text: 'A lighter and a phone', why: 'A phone does not light fires.' },
      ],
      answer: 'b',
      concepts: ['redundancy'],
      explanation: 'Good redundancy is diverse redundancy.',
    },
    {
      id: 's1-l9-q3',
      kind: 'single',
      prompt: 'Why keep a pocket kit on your body rather than in your pack?',
      choices: [
        { id: 'a', text: 'It is quicker to reach snacks and the map without stopping.', why: 'Convenient, but not the reason.' },
        { id: 'b', text: 'Packs get lost or swept away; the critical minimum must stay on you.', why: 'Correct.' },
        { id: 'c', text: 'It spreads the load and makes your pack lighter to carry all day.', why: 'The total weight is the same.' },
        { id: 'd', text: 'Park and land-agency regulations generally require it on trails.', why: 'No such general rule.' },
      ],
      answer: 'b',
      concepts: ['kit'],
      explanation: 'Many survival stories start with separation from the pack: a fall, a river, a detour to find water.',
    },
    {
      id: 's1-l9-q4',
      kind: 'single',
      prompt: 'Which addition matters most for a solo day hike in a remote area with no phone coverage?',
      choices: [
        { id: 'a', text: 'A heavier knife', why: 'Marginal benefit.' },
        { id: 'b', text: 'A PLB or satellite messenger', why: 'Correct — it can summon help without cell coverage.' },
        { id: 'c', text: 'A fishing line', why: 'Food is rarely the limiting factor.' },
        { id: 'd', text: 'A second compass', why: 'Useful but far less valuable than communication when alone.' },
      ],
      answer: 'b',
      concepts: ['kit', 'signaling'],
      explanation: 'Solo + remote + no coverage means rescue depends on someone noticing you are overdue. A beacon removes that delay.',
    },
  ],
  scenario: {
    id: 's1-l9-sc',
    setup: 'A friend is going on a 4-hour desert canyon hike in summer. They plan to carry: 1 L of water, phone, sunglasses, a cap, a granola bar. The trailhead has no phone signal.',
    question: 'What is the single most important change to suggest?',
    choices: [
      { id: 'a', text: 'Bring a sturdy knife for repairs, cutting cord and preparing a fire.', why: 'Useful, but not what will decide survival here.' },
      { id: 'b', text: 'Carry 3–4 L of water, leave a trip plan, and add a no-signal way to call for help.', why: 'Best: water and communication are the life-limiting factors in desert heat.' },
      { id: 'c', text: 'Pack a fishing kit and extra food bars in case the hike runs long.', why: 'Food is not the limiting factor, and fishing is irrelevant in a desert canyon.' },
      { id: 'd', text: 'Swap the cap for a warm hat in case the canyon gets cold at night.', why: 'Wrong direction; a wide-brim sun hat would help.' },
    ],
    best: 'b',
    debrief: 'In summer desert heat, walking can consume 0.5–1 L of water per hour. One litre for four hours is an emergency waiting to happen. Water, a trip plan and a way to summon help address the most likely and most severe failure. Kit choices should follow the environment’s priorities.',
    concepts: ['kit', 'water-needs', 'priorities'],
  },
  summary: [
    'The Ten Essentials are **systems**; add communication and a trip plan.',
    'Three tiers: on body, pocket kit, pack — the critical minimum never leaves you.',
    'Redundancy should be **diverse** (lighter + ferro rod; phone + whistle + beacon).',
    'Tailor to environment and practise with every item.',
  ],
  furtherReading: ['ten-essentials-mtn', 'freedom-hills', 'ready-kit'],
  references: ['ten-essentials-mtn', 'nps-ten-essentials', 'freedom-hills', 'ready-kit', 'cospas-sarsat'],
}
