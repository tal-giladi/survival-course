import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's3-l4',
  stage: 3,
  order: 4,
  title: 'Wet-weather fire',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s3-l3'],
  concepts: ['wet-weather-fire', 'moisture-content', 'fuel-selection'],
  objectives: [
    'Find **dry fuel in wet conditions**: standing dead wood, sheltered twigs, split cores, resin wood.',
    'Build a **platform** that isolates the fire from wet ground or snow, and protect the fire from rain safely.',
    'Process wood — **baton, split, feather** — to create a full ladder from a few dry cores.',
    'Use **fatwood and other resins**, and use the fire to dry the next fuel.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Wet weather is exactly when you most need fire — hypothermia peaks at 0–10 °C in rain and wind (Stage 1) — and exactly when it is hardest. The good news is that rain wets wood **from the outside in**, slowly. Wet-weather fire is almost entirely about **finding and exposing the dry wood that is still there**, and keeping the young fire off wet ground and out of the rain.`,
    },
    { type: 'diagram', id: 'wet-fire', caption: 'Split to the dry core, feather it, and build on a platform under high cover.' },
    {
      type: 'md',
      md: `### 1. Where the dry wood is

- **Dead twigs still on trees**, especially the lower dead branches of conifers, sheltered by the canopy above.
- **Standing dead trees and dead branches** off the ground: the outside is wet, the inside is often dry.
- **The underside of leaning logs** and wood under rock overhangs or dense evergreen cover.
- **Fatwood**: resin-saturated wood in the stumps and branch joints of dead pines. Heavy, amber-coloured, smells of turpentine; lights even when soaked.
- **Birch bark** from fallen trees, and your **carried tinder**.

Avoid: anything lying on the ground, punky wood, and the surface layer of leaf litter.

### 2. Process it: manufacture a dry ladder

Take a dead, wrist- to forearm-thick piece and **baton** it (tap the knife spine through the wood with a stick) into quarters, then eighths. The inner faces are dry. From those splits:

- shave **feather sticks** and loose shavings (tinder and small kindling);
- split pencil- and thumb-thick pieces (kindling and small fuel).

In rain, gather **two to three times** the usual quantity of the smallest kindling: some of it will be damp, and a wet-weather fire needs a longer, hotter start.

### 3. Get off the ground and under cover

- Build on a **platform** of dry sticks laid side by side (or a flat stone, or bark) so the base is not cooled by wet soil or snow. On deep snow, make the platform of green logs or dig down to ground.
- Shield the fire with your **body, pack or a tarp rigged high** — a tarp too low will scorch or melt, and sparks burn holes in synthetics. Never light a fire inside a tent or a closed shelter.
- Light in the lee: a **lean-to lay** against a backlog protects the flame from wind and dripping water.

### 4. Nurse it, then use it

Feed slowly until there is a **hot core**, then lay the next fuel around (not on) the fire to steam-dry. A ring of wood drying at the edge is the rain-day equivalent of a woodpile.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Carry the part that is hard to find',
      md: 'In wet climates, experienced travellers carry **tinder** (cotton + petroleum jelly, fatwood sticks, tinder tabs), a **lighter kept in an inner pocket**, and a **ferro rod** as backup. Carried tinder turns a 30-minute struggle into a 5-minute job.',
    },
    { type: 'sim', id: 'fire-advanced', caption: 'Set “steady rain”. Compare ground twigs + ground logs + wet ground with feather sticks + split standing wood + platform.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'Rain does not lift a fire ban: many bans stay in force until officially lifted, and cutting standing dead trees is prohibited in many parks. Practise wet-weather fire only in a legal fire pit; batoning and processing wood can be practised anywhere a knife and dead wood are allowed.',
    },
  ],
  whyItMatters: 'The fire you need most is the one you light with numb hands in the rain. People who can reliably light that fire have practised finding dry cores and processing wood, not a special trick.',
  science: [
    {
      type: 'md',
      md: `### Why the core stays dry

Water moves into wood slowly — mostly along the grain through the ends, and very slowly across it. A dead, seasoned branch left out in a day of rain typically gains moisture only in the outer few millimetres; the core can stay near its previous moisture for days.

Now apply lesson 1. Suppose a 6 cm split has a 3 mm wet shell at 40 % moisture and a dry core at 15 %. Splitting it into eighths exposes fresh dry faces, so most of your fine shavings come from wood at **~15 %**, net ≈ 15.4 MJ/kg, instead of 40 % at ≈ 10.1 MJ/kg — about **50 % more heat** per kilogram of shavings, and much faster pyrolysis because less heat goes into boiling water first.

### Why platforms matter

Wet ground and snow are heat sinks. Water conducts heat about 25× better than still air, and melting snow absorbs 334 kJ/kg before it even starts to warm. A young fire sitting on wet soil loses heat downward while it is still smaller than a hand. A platform of dry sticks adds an **insulating air gap** and a sacrificial dry layer — the same logic as ground insulation for your body (Stage 1).

### Resin: fuel that repels water

Pine resin (turpentine and rosin compounds) is a hydrocarbon mixture with more energy per kilogram than cellulose, and it is **hydrophobic**. Scrapings of fatwood light from a ferro spark even after a soaking, and a stick of fatwood burns for minutes, long enough to dry and pyrolyse surrounding kindling.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate rainforest (Olympic Peninsula, Fiordland, Patagonia):** split dead western red cedar or beech to dry cores, feather sticks, carried tinder, lean-to lay under a high tarp.

**Scottish or Norwegian upland, sleet:** little wood; carried stove and fuel matter more. If wood exists, dead birch from the gullies, split fine.

**Boreal spring, deep wet snow:** platform of green logs on top of the snow; dead spruce twigs from the lower trunk; birch bark; fatwood from old pine stumps.

**Tropical monsoon:** split dead bamboo (never whole sealed sections) and hardwood cores; coconut husk fibre; a raised platform to keep off saturated ground; fire under a high, well-ventilated shelter roof only.

**Urban flood or storm:** dry fuel from indoors (untreated furniture offcuts, cardboard) — and remember carbon monoxide: never burn indoors or in a garage.`,
    },
  ],
  mistakes: [
    'Picking up wood from the ground in the rain — it is the wettest fuel available.',
    'Making the smallest kindling in normal quantities; wet fires need two to three times more.',
    'Rigging the tarp low over the fire: it scorches, melts or catches fire — and traps smoke.',
    'Building directly on wet soil or snow: the fire loses heat downward, and on snow it sinks and drowns.',
    'Myth: “Once it has rained, fire bans no longer matter.” — Bans remain until the land manager lifts them.',
    'Batoning towards your legs, or splitting with a folding knife whose lock can fail.',
  ],
  exercises: [
    {
      id: 's3-l4-e1',
      title: 'Find the dry core',
      level: 3,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Fixed-blade knife', 'Baton (a stick of hardwood)', 'Dead wood collected after rain (where allowed)'],
      safetyNote: 'Baton with the log on a stable base, legs out of the line of the blade, gloves recommended. Use a full-tang fixed blade, not a folding knife.',
      steps: [
        'After a day of rain, collect a dead branch from the ground and one from a standing dead tree.',
        'Baton each into eighths; touch the inner faces to your lip (a sensitive moisture detector).',
        'From the standing piece, make a pile of shavings, two feather sticks and a double-handful of pencil splits.',
        'Record which piece gave usable dry wood, and how long processing took.',
      ],
      success: ['You produced a full dry mini-ladder from one wet-looking piece.', 'You can explain why the standing piece was drier inside.'],
      skill: 'wet-fire',
    },
    {
      id: 's3-l4-e2',
      title: 'Wet-weather fire challenge in a legal fire pit',
      level: 4,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Legal fire pit on a rainy day', 'Knife and baton', 'Ferro rod and lighter', 'One carried tinder item', 'Tarp (optional, rigged high)', 'Water to extinguish'],
      safetyNote: 'Only where fires are explicitly permitted and no ban is in force. Keep any tarp well above and upwind of the flames. Extinguish cold.',
      steps: [
        'Using only natural fuel you process on site plus one carried tinder item, build a platform and a lean-to lay.',
        'Light it and grow it to wrist-thick fuel. Time strike-to-self-sustaining fire.',
        'Lay wet fuel around the fire to dry and note how long it takes before it will burn.',
        'Extinguish: drown, stir, feel. Log what you would do differently.',
      ],
      success: ['Self-sustaining fire within 15 minutes of starting to process wood.', 'Fire extinguished cold.'],
      skill: 'wet-fire',
    },
  ],
  simulations: ['fire-advanced'],
  quiz: [
    {
      id: 's3-l4-q1',
      kind: 'single',
      prompt: 'After a day of rain, where is the driest kindling most likely to be?',
      choices: [
        { id: 'a', text: 'On top of the leaf litter in an open clearing', why: 'Fully exposed to rain and sitting on wet ground.' },
        { id: 'b', text: 'Dead twigs on the lower trunks of conifers under the canopy', why: 'Correct: sheltered and held off the ground.' },
        { id: 'c', text: 'Thick moss peeled from the ground under the trees', why: 'Moss holds water like a sponge.' },
        { id: 'd', text: 'Fallen branches gathered from a dry-looking stream bed', why: 'Wettest option.' },
      ],
      answer: 'b',
      concepts: ['wet-weather-fire', 'fuel-selection'],
      explanation: 'Off the ground and under cover — the canopy shelters them and the wind dries them.',
    },
    {
      id: 's3-l4-q2',
      kind: 'single',
      prompt: 'In the rain, you have found dead standing wood, sheltered twigs and some resin wood. What should you do next?',
      choices: [
        { id: 'a', text: 'Split it to dry cores and make shavings, feather sticks and splits', why: 'Correct: process the materials into a dry ladder before anything else.' },
        { id: 'b', text: 'Light your tinder at once and feed the twigs before the rain gets worse', why: 'Ignition comes after the ladder is ready; unprocessed wood will not catch.' },
        { id: 'c', text: 'Lay the wood around the fire site so it can start drying out', why: 'Drying fuel around the edge needs a fire already burning — it comes last.' },
        { id: 'd', text: 'Rig the tarp tight and low over the site so no drops reach the tinder', why: 'Cover must be high to avoid scorching, and it does not replace processing.' },
      ],
      answer: 'a',
      concepts: ['wet-weather-fire'],
      explanation: 'The order is find, split to dry cores, build a platform and shelter, light and feed to a hot core, then dry the next fuel around the edge. Materials and processing first; ignition is the short, easy part when the ladder is ready.',
    },
    {
      id: 's3-l4-q4',
      kind: 'single',
      prompt: 'Which of these is **not** a safe way to protect a young fire from rain?',
      choices: [
        { id: 'a', text: 'Shield it with your body and pack while it catches.', why: 'Safe and effective.' },
        { id: 'b', text: 'Rig a tarp high above, well clear of the flames.', why: 'Safe — high enough not to scorch, open for smoke.' },
        { id: 'c', text: 'Light it in the tent vestibule with the door zipped.', why: 'Correct: fire and carbon-monoxide danger in an enclosed space.' },
        { id: 'd', text: 'Build a lean-to lay against a sheltering backlog.', why: 'Safe — shelters the flame from wind and drips.' },
      ],
      answer: 'c',
      concepts: ['wet-weather-fire', 'carbon-monoxide'],
      explanation: 'Shelter the fire, do not enclose it. Never light a fire in a tent or closed shelter.',
    },
    {
      id: 's3-l4-q3',
      kind: 'single',
      prompt: 'Shavings from a split’s dry core are at 15 % moisture; shavings from its wet shell are at 40 %. Using $H_{net} = 18.5(1-m) - 2.44m$, how much more energy do the dry-core shavings provide?',
      choices: [
        { id: 'a', text: '≈ 5.2 MJ/kg more', why: 'Correct: 15.36 − 10.12 ≈ 5.2 MJ/kg.' },
        { id: 'b', text: '≈ 4.6 MJ/kg more', why: 'That compares only the dry-wood terms and forgets the evaporation cost.' },
        { id: 'c', text: '≈ 4.0 MJ/kg more', why: 'That adds the evaporation cost instead of subtracting it.' },
        { id: 'd', text: '≈ 15.4 MJ/kg more', why: 'That is the dry-core value itself, not the difference.' },
      ],
      answer: 'a',
      concepts: ['moisture-content', 'wet-weather-fire'],
      explanation: 'At 15 %: 15.73 − 0.37 = 15.36. At 40 %: 11.1 − 0.98 = 10.12. Difference ≈ **5.2 MJ/kg** — about 50 % more.',
    },
    {
      id: 's3-l4-q5',
      kind: 'single',
      prompt: 'You must light a fire where the snow is deep. What should the fire sit on?',
      choices: [
        { id: 'a', text: 'A platform of green logs, or dig down to the ground', why: 'Correct: keeps the fire from melting down into the snow.' },
        { id: 'b', text: 'The snow surface itself, since it is flat and clean', why: 'The fire melts down and drowns itself; melting snow absorbs 334 kJ/kg.' },
        { id: 'c', text: 'A layer of snow stamped down hard to make it firm', why: 'Packed snow still melts and soaks the base of the fire.' },
        { id: 'd', text: 'A thin mat of dry twigs laid straight on the snow', why: 'Dry twigs burn away quickly and the fire sinks into the melt.' },
      ],
      answer: 'a',
      concepts: ['wet-weather-fire'],
      explanation: 'A fire built directly on deep snow usually melts down and drowns itself, because melting snow absorbs 334 kJ/kg. Use a platform of green logs, or dig down to the ground where practical.',
    },
  ],
  scenario: {
    id: 's3-l4-sc',
    setup: 'Temperate mountains, 4 °C, steady rain, 16:30. You and a friend are soaked after a river crossing went wrong (you should not have crossed — Stage 1 risk). You have a knife, a lighter in an inner pocket, two cotton-and-jelly balls and a tarp. Fires are allowed here. Your friend is shivering hard.',
    question: 'What is your best sequence?',
    choices: [
      { id: 'a', text: 'Light a fire at once, using both cotton balls on the nearest wet sticks.', why: 'Wastes your only tinder on fuel that cannot catch.' },
      { id: 'b', text: 'Rig the tarp high, get your friend dry and insulated, then split dry cores for a fire.', why: 'Best: shelter and insulation reduce heat loss now; a platform, dry cores and one cotton ball give a fire that will catch.' },
      { id: 'c', text: 'Keep walking to the car 6 km away, since moving will keep you both warm.', why: 'Hard walking in wet clothes while exhausted and hypothermic risks collapse, at dusk.' },
      { id: 'd', text: 'Build the fire inside the tarp shelter with the sides pulled down to keep rain out.', why: 'Fire and smoke in an enclosed space: burns and carbon monoxide.' },
    ],
    best: 'b',
    debrief: 'Priorities first: stop the heat loss (shelter, dry layers, ground insulation) — that works in minutes. Then fire, done properly: dry cores, a platform, high cover, one tinder ball at a time. A fire that fails wastes the energy and tinder you cannot replace.',
    concepts: ['wet-weather-fire', 'priorities', 'heat-balance'],
  },
  summary: [
    'Rain wets wood from the outside in: the dry fuel is in standing dead wood, sheltered twigs, split cores and fatwood.',
    'Baton, split and feather to make a whole dry ladder; gather two to three times the usual fine kindling.',
    'Build on a platform, shelter the fire high and open (never in tents), use a lean-to lay, and dry the next fuel around it.',
    'Carry tinder and a lighter in an inner pocket; rain does not lift fire bans.',
  ],
  furtherReading: ['kochanski-bushcraft', 'iol-bushcraft-cert'],
  references: ['kochanski-bushcraft', 'army-atp-3-50-21', 'iol-bushcraft-cert', 'fpl-wood-handbook', 'usfs-fire'],
}
