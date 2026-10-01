import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's10-l5',
  stage: 10,
  order: 5,
  title: 'Field sanitation and hygiene',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s4-l4'],
  concepts: ['fecal-oral-route', 'catholes', 'hand-hygiene', 'camp-layout', 'leave-no-trace'],
  objectives: [
    'Trace the **faecal–oral routes** (the F-diagram) and name the barrier that blocks each.',
    'Site, dig and close a **cathole** correctly, and know when to **pack out** waste instead.',
    'Wash hands effectively with **soap and little water**, build a **tippy tap**, and use sanitiser where it works.',
    'Lay out a camp so **water, kitchen, sleeping and toilet** areas stay separate.',
    'Manage a group when someone has **diarrhoea or vomiting**.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Diarrhoea is one of the most common reasons for trips to fail, and in a disaster or a long stay it can become dangerous through dehydration (Stage 8). Much of it is **self-inflicted**: pathogens from one person’s gut reach another person’s mouth. Stage 4 dealt with water; this lesson closes the other routes.

### The F-diagram

Public-health engineers summarise the faecal–oral routes with the **F-diagram** (first set out in a WHO monograph by Wagner and Lanoix, 1958): pathogens in **faeces** reach a new mouth via **fluids** (water), **fingers**, **flies**, **fields** (soil) and **food**. Two kinds of barrier block them:

1. **Primary**: safe disposal of faeces — a cathole, latrine or pack-out bag — so pathogens never enter the environment.
2. **Secondary**: hand-washing, water treatment, food hygiene and fly control, which stop pathogens that did escape.

Hand-washing is special because **fingers** touch every other route.`,
    },
    { type: 'diagram', id: 's10-f-diagram', caption: 'The F-diagram: block faeces at the source, then block the routes with hand-washing, water treatment and food hygiene.' },
    {
      type: 'md',
      md: `### Catholes: the standard for small groups

Leave No Trace’s guidance for most backcountry areas:

- **Where**: at least **60 m (200 ft, about 70 adult steps)** from water, camp and trails; in dark, organic soil, ideally with sun; not in drainage lines that will carry waste to water after rain.
- **How deep**: **15–20 cm (6–8 in)** deep and 10–15 cm across — the organic topsoil where decomposers live.
- **Close**: stir in a little soil with a stick, fill, tamp and disguise with leaves. Spread catholes out; do not reuse sites.
- **Toilet paper and hygiene products**: **pack them out** in a sealed bag (or use natural materials if allowed and appropriate). Menstrual products are always packed out.

**Pack it out instead** where catholes do not work: thin or rocky soil, frozen ground and snow, sand with little organic life, narrow canyons, heavily used areas, and places whose rules require it. Waste bags with gelling agents make this easy.

**Urine** is much less of a hazard: away from camp and trails, and on rock or bare ground rather than plants (animals dig up salty spots). Some river corridors have specific rules, such as urinating directly into the main river — follow the local rules.

**Groups staying longer** may use a shared latrine trench, again 60 m from water and camp, with soil added after each use. Humanitarian standards (Sphere) plan around **no more than about 20 people per toilet** and keeping toilets **at least 30 m from groundwater sources** such as wells.`,
    },
    { type: 'diagram', id: 's10-cathole', caption: 'Cathole: 15–20 cm into dark topsoil, at least 60 m from water, camp and trails; pack out paper.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Camping and waste rules differ by place',
      md: 'Many parks, canyons, high-use alpine areas and river trips **require** human waste to be packed out, some require permits and designated campsites, and some ban toilet paper burial. Check the land manager’s rules before you go (for example the park’s backcountry regulations) and follow them over general guidance.',
    },
    {
      type: 'md',
      md: `### Hand hygiene with little water

Washing with **soap and water** is the most reliable method: wet, lather, **scrub for at least 20 seconds** (backs of hands, between fingers, thumbs, under nails), rinse, dry. Soap does not need to kill germs; it **lifts** oils, dirt and microbes so the rinse carries them away.

**Alcohol hand sanitiser** (at least 60 % alcohol, per CDC) is a useful backup, but it works poorly on **visibly dirty or greasy hands** and against some pathogens (for example norovirus and *Cryptosporidium*). In camp: remove dirt with water first, then sanitise if soap is short.

**When**: after the toilet, before handling food or cooking, before eating, after caring for someone who is ill, after handling rubbish.

**Shared food**: pour snacks into each person’s hand rather than letting everyone reach into the bag — a classic route for spreading illness through a group.

### A tippy tap

A drinks bottle with a small hole in the cap, hung so a tilt pours a thin stream, gives running water from a fraction of a litre. Hang it on the path back from the toilet area, with soap on a string beside it, and stand it over gravel or a small soak-away so the ground does not turn to mud.`,
    },
    { type: 'diagram', id: 's10-tippy-tap', caption: 'A tippy tap turns one bottle into running water for many washes.' },
    {
      type: 'md',
      md: `### Camp layout

- **Water**: collect **upstream** of everything else in camp; keep the collection point clean.
- **Kitchen**: separate from sleeping (and further still in bear country, where local rules set distances); food stored against wildlife.
- **Toilet area**: at least 60 m from water and camp, reached by a path that passes the **hand-wash station** on the way back.
- **Washing up**: scrape plates into a rubbish bag, wash with little soap, strain food bits out of grey water (pack them out), and scatter the water at least 60 m from any water source.
- **Rubbish**: pack it all out; food scraps attract flies and animals.

### When someone is ill

If someone has diarrhoea or vomiting: they **stop cooking and serving**, use their own cup and utensils, wash hands carefully (and everyone else does too), and use a **separate toilet site** if possible. Replace fluids with oral rehydration solution (Stage 8) and watch for signs of dehydration; seek help for blood in the stool, high fever, or someone who cannot keep fluids down (Stage 9, and a WFA/WFR course).`,
    },
    { type: 'diagram', id: 's10-camp-layout', caption: 'Keep water, kitchen, sleeping and toilet areas apart; route the toilet path past the hand-wash.' },
    { type: 'sim', id: 'improvise-challenge', caption: 'Try the “Hand-washing station” challenge: which objects make a controlled tap and a reserve?' },
  ],
  whyItMatters: 'A group that treats its water carefully can still fall ill from one unwashed hand in a shared snack bag. Diarrhoea drains water and energy, stops progress and can become dangerous in heat or in a disaster where clean water is scarce. Good sanitation also protects the next visitors, the water supply downstream and wildlife.',
  science: [
    {
      type: 'md',
      md: `### Dose and routes

Stage 4 showed that some pathogens need only a **small dose** to infect — for example *Giardia* and *Cryptosporidium* cysts, and norovirus, can infect with very few organisms. A single unwashed finger can carry that. So the F-diagram’s routes matter even when water is treated. A systematic review of wilderness giardiasis in North America (Welch, 2000) found little evidence that drinking untreated wilderness water carries a high risk, and argued that **hand-to-mouth** transmission and hygiene deserve more attention. Treat water anyway (Stage 4 and WMS guidance): the point is that **water treatment and hand-washing are both needed**.

### Why topsoil and not deeper

Decomposition is done by soil organisms, which are most abundant in the dark, organic top layer. Waste buried **15–20 cm deep** sits in that layer; deeper burial reaches mineral soil with little life, where pathogens survive longer. Decay is slow in cold, dry or sandy soils, which is why those places call for packing waste out.

### How soap works

Soap molecules have a water-loving head and an oil-loving tail. The tails dissolve into the oils on skin that hold dirt and microbes; the heads face the water, so the whole package lifts off and is **rinsed away**. That takes time and friction — hence 20 seconds of scrubbing. Alcohol instead denatures proteins in microbes; it does not remove dirt, and grease shields microbes from it.

### Distance on the ground

60 m is a long way to judge by eye. Pace it: if your step is about 0.85 m, $60 / 0.85 \\approx 70$ steps (Stage 2’s pacing uses the same idea).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** Deep organic soil makes catholes work well; the group spreads them out and packs out paper in a zip-lock bag with a little baking soda to control smell.

**Desert.** Thin, dry soil decomposes slowly; in many desert parks and canyons, waste bags are required. Urine on bare rock or sand, away from the few pools.

**Mountain / alpine.** Above the tree line soil is thin and heavily used; many high routes require pack-out kits. Snow melts to reveal whatever was buried in it — never bury waste in snow.

**Arctic / subarctic.** Frozen ground: pack out, or follow local guidance for remote areas. Hands crack in the cold; a little warm water and soap plus a skin cream keeps hand-washing possible.

**Tropical.** Warm, moist soil decomposes quickly, but high rainfall washes waste into streams — sites well away from water and drainage lines, and strict hand-washing because flies are everywhere.

**Coastal.** Sand dunes hold little soil life and beaches are busy; many coasts require pack-out, and a few remote coasts have their own local guidance. Follow the local rule.

**Urban disaster.** With no flushing, a bucket toilet lined with bags and a hand-washing station with a tippy tap stop diarrhoea spreading through a family (Stage 16).

**Rural relief camp.** A trench latrine for a group, sited downhill from and well away from the well, with a hand-wash on the path back.`,
    },
  ],
  mistakes: [
    'Digging catholes near water, camp or trails, or in drainage lines.',
    'Burying waste too deep (into lifeless mineral soil) or in snow.',
    'Burying toilet paper and wet wipes: animals dig them up and they decay slowly.',
    'Reaching into a shared snack bag instead of pouring.',
    'Relying on hand sanitiser over visibly dirty hands.',
    'Letting an ill group member keep cooking.',
    'Myth: “If the water is treated, nobody will get sick.” Fingers, food and flies are routes too.',
    'Myth: “Boiling hands in the smoke or rubbing them with sand is as good as washing.” Neither removes microbes reliably; soap, water and friction do.',
  ],
  exercises: [
    {
      id: 's10-l5-e1',
      title: 'Build a tippy tap',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['A 1–2 L drinks bottle', 'A nail or a knife', 'Cord', 'Two sticks or a garden frame', 'Soap'],
      steps: [
        'Make a small hole in the cap (heat a nail, or twist a knife point carefully).',
        'Hang the bottle from a cord so a gentle tilt pours a thin stream; add soap on a string.',
        'Wash your hands for 20 seconds with it. Measure how much water one wash uses.',
        'Improve the hole size or tilt so a full bottle gives as many good washes as possible.',
      ],
      success: ['A working tippy tap.', 'You measured water used per wash.'],
      skill: 's10-camp-sanitation',
      safetyNote: 'Take care heating nails and using knives; cut away from yourself.',
    },
    {
      id: 's10-l5-e2',
      title: 'Hand-washing test with “germ” oil',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Cooking oil', 'Ground cinnamon or glitter', 'Soap', 'Water', 'Paper towels'],
      steps: [
        'Rub a few drops of oil mixed with cinnamon or glitter over your hands.',
        'Wash for 5 seconds with water only. Look at what remains.',
        'Re-coat and wash for 20 seconds with soap, scrubbing backs, thumbs, between fingers and under nails.',
        'Note where residue remains after each method.',
      ],
      success: ['You can see the difference soap and time make.', 'You know which parts of your hands you usually miss.'],
      skill: 's10-camp-sanitation',
    },
    {
      id: 's10-l5-e3',
      title: 'Plan the sanitation for your next camp',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['A map of the area', 'The land manager’s rules', 'A trowel and waste bags if required'],
      steps: [
        'Read the local rules: catholes allowed, pack-out required, fire and camping rules.',
        'On the map, mark water, the likely campsite and toilet zones at least 60 m away. Pace 60 m at home first to know your step count.',
        'Pack a hygiene kit: trowel, bags for paper, soap, sanitiser, a bottle for a tippy tap.',
        'On the trip, lay out camp as in the diagram and review what worked.',
      ],
      success: ['Your plan follows the local rules.', 'Toilet, kitchen, water and sleeping were separated as planned.'],
      skill: 's10-camp-sanitation',
      safetyNote: 'Only dig where it is allowed; practise digging technique in your own garden.',
    },
  ],
  simulations: ['improvise-challenge'],
  quiz: [
    {
      id: 's10-l5-q5',
      kind: 'single',
      prompt: 'A member of your group has diarrhoea on day 2 of 5. They usually cook. What is the best response?',
      choices: [
        { id: 'a', text: 'Let them keep cooking, since all the food is boiled anyway', why: 'Hands contaminate food after cooking, and plates and utensils too.' },
        { id: 'b', text: 'Someone else cooks; they get ORS, own utensils, a separate toilet', why: 'Correct — with strict hand-washing for everyone, this breaks the routes and treats the dehydration.' },
        { id: 'c', text: 'Give them less water so they need the toilet less often', why: 'Dangerous — they need more fluid, not less.' },
        { id: 'd', text: 'Carry on as normal and wait for it to pass on its own', why: 'Risks spreading illness through the whole group.' },
      ],
      answer: 'b',
      concepts: ['hand-hygiene', 'ors', 'dehydration'],
      explanation: 'Isolate the routes (someone else cooks, own cup and utensils, separate toilet site, strict hand-washing) and replace fluid and salts with oral rehydration solution (Stage 8). Seek help for red flags.',
    },
    {
      id: 's10-l5-q3',
      kind: 'single',
      prompt: 'In the F-diagram, which of these is the **primary** barrier (at the source) rather than a secondary one?',
      choices: [
        { id: 'a', text: 'Hand-washing with soap', why: 'Secondary — it blocks the fingers route.' },
        { id: 'b', text: 'Treating drinking water', why: 'Secondary — it blocks the fluids route.' },
        { id: 'c', text: 'Digging a proper cathole', why: 'Correct — safe disposal stops faeces reaching the environment.' },
        { id: 'd', text: 'Covering food against flies', why: 'Secondary — it blocks the flies and food routes.' },
      ],
      answer: 'c',
      concepts: ['fecal-oral-route'],
      explanation: 'Primary: safe disposal. Secondary (blocking routes after faeces are in the environment): hands, water, food, flies.',
    },
    {
      id: 's10-l5-q4',
      kind: 'single',
      prompt: 'After cooking, your hands are visibly greasy and dirty. What is the best way to clean them?',
      choices: [
        { id: 'a', text: 'Rub in alcohol sanitiser; it works just as well', why: 'Grease and dirt shield microbes from alcohol.' },
        { id: 'b', text: 'Wash the grease and dirt off with water and soap', why: 'Correct — remove the grease first so nothing shields the microbes.' },
        { id: 'c', text: 'Use a double dose of sanitiser to cut the grease', why: 'More alcohol does not get through grease and dirt.' },
        { id: 'd', text: 'Let your hands air-dry, then apply sanitiser', why: 'The grease and dirt are still there to shield microbes.' },
      ],
      answer: 'b',
      concepts: ['hand-hygiene'],
      explanation: 'Grease and dirt shield microbes from alcohol; remove them with water (and soap) first.',
    },
    {
      id: 's10-l5-q1',
      kind: 'single',
      prompt: 'How deep should a cathole be in a typical forest soil?',
      choices: [
        { id: 'a', text: '5 cm, so the sun can reach it', why: 'Too shallow — animals and rain uncover it.' },
        { id: 'b', text: '15–20 cm, in dark organic topsoil', why: 'Correct — deep enough to cover, shallow enough for decomposers.' },
        { id: 'c', text: '50 cm, as deep as possible', why: 'Too deep — lifeless mineral soil slows decomposition.' },
        { id: 'd', text: 'Depth does not matter if it is covered', why: 'Depth decides decomposition and exposure.' },
      ],
      answer: 'b',
      concepts: ['catholes'],
      explanation: '15–20 cm deep, at least 60 m from water, camp and trails.',
    },
    {
      id: 's10-l5-q6',
      kind: 'single',
      prompt: 'On a stream-side site, which order of camp zones runs correctly from **upstream** to **furthest away downstream/downhill**?',
      choices: [
        { id: 'a', text: 'Water point → camp → hand-wash → toilet area', why: 'Correct — water is collected upstream of everything, and the toilet path passes the hand-wash.' },
        { id: 'b', text: 'Camp → water point → hand-wash → toilet area', why: 'Water would be collected downstream of camp.' },
        { id: 'c', text: 'Water point → hand-wash → camp → toilet area', why: 'The hand-wash belongs on the toilet path, between camp and toilet.' },
        { id: 'd', text: 'Water point → camp → toilet area → hand-wash', why: 'The hand-wash should be on the way back from the toilet towards camp, not beyond it.' },
      ],
      answer: 'a',
      concepts: ['camp-layout'],
      explanation: 'Collect water upstream of everything; route the toilet path past the hand-wash; keep the toilet area ≥ 60 m from water and camp.',
    },
    {
      id: 's10-l5-q2',
      kind: 'single',
      prompt: 'Your pace is 0.8 m per step. About how many steps is **60 m**?',
      choices: [
        { id: 'a', text: '75 steps', why: 'Correct — 60 ÷ 0.8 = 75.' },
        { id: 'b', text: '48 steps', why: 'This multiplies by the step length instead of dividing.' },
        { id: 'c', text: '60 steps', why: 'This assumes 1 m per step and ignores your pace.' },
        { id: 'd', text: '750 steps', why: 'A decimal slip — 0.8 m was treated as 0.08 m.' },
      ],
      answer: 'a',
      concepts: ['catholes', 'pacing'],
      explanation: '$60 / 0.8 = 75$ steps.',
    },
  ],
  scenario: {
    id: 's10-l5-sc',
    setup: 'You are leading six teenagers on a 4-day canoe trip on a lake chain in the northern forest. Rules for the area allow catholes but require all toilet paper to be packed out. On day 1 you notice the group sharing a big bag of trail mix, and two of them wash plates in the lake.',
    question: 'What do you set up for the rest of the trip?',
    choices: [
      { id: 'a', text: 'Nothing new: the lake water is filtered for drinking, so the group is protected', why: 'Treated water blocks only one route; fingers and shared food remain.' },
      { id: 'b', text: 'A tippy tap and soap on the path back from the toilet zone, a “pour, don’t reach” rule for snacks, washing up away from the lake with strained grey water scattered 60 m from shore, toilet kits with trowel and pack-out bags, and a quick briefing', why: 'Best: blocks fingers, food and fluids routes, protects the lake and follows the local rule on paper.' },
      { id: 'c', text: 'Ban snacks and require everyone to use hand sanitiser only', why: 'Unrealistic, and sanitiser alone fails on dirty or greasy hands.' },
      { id: 'd', text: 'Tell everyone to swim daily instead of washing hands', why: 'Swimming is not hand-washing and adds to lake contamination if hygiene is poor.' },
    ],
    best: 'b',
    debrief: 'The F-diagram predicts where illness will come from: shared food and hands, not only water. Making good hygiene the easy default (a tap on the path, a pouring rule, a kit) works better than rules alone — a leadership lesson from Stage 15, a water-safety lesson from Stage 4, and Leave No Trace in action.',
    concepts: ['fecal-oral-route', 'hand-hygiene', 'camp-layout', 'leave-no-trace', 'water-treatment'],
  },
  summary: [
    'The **F-diagram**: faeces reach mouths via fluids, fingers, flies, fields and food; block the source first, then the routes.',
    '**Catholes**: 15–20 cm deep, ≥ 60 m (≈ 70 steps) from water, camp and trails; pack out paper and hygiene products; pack out waste where soil, snow or rules demand it.',
    '**Soap, water and 20 seconds**; sanitiser (≥ 60 % alcohol) as backup on clean-looking hands; **pour, don’t reach** into shared food.',
    'Lay out camp: water upstream, kitchen and sleeping apart, toilet far away, **hand-wash on the path back**.',
    'An ill person stops cooking, uses their own utensils and drinks ORS; watch for red flags.',
  ],
  furtherReading: ['lnt-principles', 's10-cdc-handwashing', 'sphere-handbook'],
  references: ['lnt-principles', 's10-cdc-handwashing', 'sphere-handbook', 's10-wagner-lanoix-1958', 's10-welch-giardia-2000', 'wms-water-2019', 'who-five-keys', 'nps-camping'],
}
