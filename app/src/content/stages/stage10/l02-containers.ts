import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's10-l2',
  stage: 10,
  order: 2,
  title: 'Containers, water collection and transport',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s10-l1'],
  concepts: ['improvised-containers', 'water-transport', 'water-collection', 'safe-storage', 'material-properties'],
  objectives: [
    'Choose improvised containers by **waterproofness, food safety, closure and strength**, and reject unsafe ones.',
    'Separate the jobs of **holding** water and **carrying** it (the bag-in-pack principle).',
    'Estimate **trips, loads and rain-catch volumes** with simple arithmetic.',
    'Keep **treated and untreated** water apart and clean improvised containers.',
    'Adapt water transport to heat, cold, snow, jungle and city conditions.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Water is heavy, sloshes, leaks and freezes. Most survival water problems are not about *finding* water (Stage 4) but about **holding enough of it, keeping it clean, and moving it** to where you need it.

### Four functions of a water container

1. **Hold** without leaking — waterproof material and seams.
2. **Keep it safe** — food-safe material, clean, closable, and never used for fuel or chemicals.
3. **Close** — a lid, a twist and fold, a tied neck.
4. **Carry** — handles, straps or a support that takes the weight.

A drinks bottle does all four at once. Improvised containers usually do **one or two**, so you combine objects: a bag does 1 and 2, a rucksack does 4, a cord does 3.`,
    },
    { type: 'diagram', id: 's10-water-carry', caption: 'Bag-in-pack: the liner holds the water, the pack carries it. Never use containers that held fuel or chemicals.' },
    {
      type: 'md',
      md: `### What you can use

| Candidate | Holds | Food-safe | Closes | Carries | Notes |
|---|---|---|---|---|---|
| Drinks bottles, hydration bladders | ✓ | ✓ | ✓ | ✓ | Best. Carry more empties than you think you need — they weigh almost nothing. |
| Heavy bin bag, new and unscented | ✓ | ± | tie | ✗ | Only inside a pack, stuff sack or hole. Double it. Treat the water. |
| Dry bag, stuff sack with a liner | ✓ | ± | ✓ | ± | Good for camp storage and short carries. |
| Cooking pot with lid | ✓ | ✓ | ± | ✗ | Short distances; also boils. |
| Zip-lock food bags | ✓ | ✓ | ✓ | ✗ | Small volumes, carried inside something. |
| Bamboo sections (tropics) | ✓ | ✓ | plug | ✓ | Cut below a node; a classic container. |
| Bark containers (Stage 7) | ✓ | ✓ | ✗ | ± | Collect and boil at camp; slow to make. |
| Hollow in a rock, a tarp-lined pit | ✓ | ± | ✗ | ✗ | Camp reservoirs; cover them. |
| **Fuel, oil, antifreeze, pesticide or chemical containers** | ✓ | **✗** | ✓ | ✓ | **Never** for drinking water — residue cannot be removed in the field. |

“±” means acceptable for short-term use if the item is new and clean and you treat the water. Improvised containers are **not** water treatment — Stage 4 methods still apply.`,
    },
    {
      type: 'md',
      md: `### Clean and dirty: keep them apart

Mark one container (tape, a knot, a colour) as **untreated** and never let it touch treated water, bottle threads or your mouth. Collect with the dirty one; treat into the clean one. A single drip of untreated water on a clean bottle’s threads can undo careful treatment (Stage 4, safe storage).

To clean a container at home or in a relief setting, CDC advises washing it with soap and water, rinsing, then swirling a weak solution of unscented household bleach round the inside, emptying it and letting it air dry. In the field, rinse with treated water and keep it closed.

### Collecting into improvised containers

Stage 4 covers where water is. The container side of the job:

- **Rain**: a tarp or plastic sheet angled into a pot or a bag in a hole; let the first rain rinse the surface, then collect (the stage 4 diagram below gives the volume).
- **Scooping** from a shallow seep: a cut-down bottle or a cup, poured into the bag; avoid stirring sediment.
- **Dew and snow**: cloth wiped on wet grass and wrung out; snow melted in a pot **with a little water already in it** so the pot does not scorch (Stage 4).
- **Cities**: bath, sinks and buckets filled at the first warning; 20 L jerrycans from distribution points.`,
    },
    { type: 'diagram', id: 'rain-catchment', caption: 'From Stage 4: V = A × R × η. A 6 m² tarp in 5 mm of rain at 80 % capture gives about 24 L.' },
    {
      type: 'md',
      md: `### Moving water

- **Close to the back, high and centred.** Water is dense; a full bag far from your spine levers on your shoulders (Lesson 3).
- **Split loads**: two 10 L containers balanced in each hand beat one 20 L container on one side.
- **Use carriers**: a pack with a liner, a shoulder yoke (a pole across the shoulders with a load at each end), a trolley or sledge in the city or on snow.
- **Protect against leaks**: double bags, the knot or twist upward, and nothing sharp in the pack beside it.
- **Cold**: keep bottles inside the pack or jacket; water freezes first at the top, so carrying bottles **upside down** keeps the lid from freezing shut.
- **Heat**: carry enough for the trip plus a reserve; a warm bottle is still water — do not ration it (Stage 8).`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Bark, bamboo and plants belong to someone',
      md: 'Stripping bark from **live** trees can kill them and is prohibited in most parks and protected areas; cutting bamboo or live wood needs the landowner’s permission. Practise bark containers with fallen or permitted material (Stage 7). Check the land manager’s rules before collecting anything.',
    },
    { type: 'sim', id: 'improvise-challenge', caption: 'Try the “Carry 8 L of water” challenge: which object holds, which carries, which closes?' },
  ],
  whyItMatters: 'A person in the heat may need 4–6 L of water a day or more (Stage 8), and a group needs many times that. Without containers, a good source is only useful while you stand beside it. Being able to hold and move water safely turns one reliable source into a whole day’s range — and a wrong container (one that held fuel) can make the water itself the hazard.',
  science: [
    {
      type: 'md',
      md: `### Weight and trips

Water has a density of about 1 kg per litre. A group’s daily need $D$ (litres) divided by what you can carry per trip $C$ gives the number of trips, rounded **up**:

$$
n = \\left\\lceil \\frac{D}{C} \\right\\rceil
$$

**Worked example.** Four people need 4 L each: $D = 16$ L. With two 1.5 L bottles ($C = 3$ L), $n = \\lceil 16/3 \\rceil = 6$ trips. If the spring is 1 km away, that is **12 km** of walking. Add a 10 L bag-in-pack ($C = 13$ L): $n = \\lceil 16/13 \\rceil = 2$ trips, 4 km. Better containers save energy, sweat and daylight (Stage 1).

### Rain catchment

Rain depth in millimetres equals **litres per square metre**: 1 mm of rain on 1 m² is 1 L. The volume you catch is

$$
V = A \\times R \\times \\eta
$$

with $A$ the catching area (m²), $R$ the rainfall (mm) and $\\eta$ the fraction you actually capture (often 0.6–0.8 with a sagging tarp and splash losses). A 2 × 3 m tarp ($A = 6$ m²) in 5 mm of rain at $\\eta = 0.8$: $V = 6 \\times 5 \\times 0.8 = 24$ L.

### Why plastic bottles and fire do not mix

A container full of water cannot get much hotter than the water inside it (about 100 °C at sea level), which is why a wet bark pot or even a paper cup can hold boiling water over coals (Stage 7). But **PET** drinks bottles soften at temperatures well below boiling (their glass transition is roughly 70–80 °C), so they deform and may leak. Boil in metal; use PET for carrying, storage and SODIS (Stage 4).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert.** A group’s vehicle breaks down 15 km from a known well (Stage 17: usually stay with the vehicle). If water must be fetched, the plan is two strong walkers, every empty bottle and a bin-bag liner in each pack, at night or dawn, with a turnaround time — and water carried for the walk itself.

**Tropical forest.** Bamboo sections, cut just below a node, make durable canteens; large leaves folded into cones funnel rain into them. Collected water still needs treatment.

**Mountain.** A day-hiker’s bottle cracks on a rock. A zip-lock bag inside a spare sock inside the pack carries a litre to the next stream, where it is treated.

**Arctic / subarctic.** Water is everywhere but frozen; fuel is the limit. Bottles travel upside down inside the jacket; a pot with a little liquid water melts snow without scorching.

**Coastal.** Fresh water is scarce, rain is not. A tarp or poncho angled into a pot collects rain; the first flush washes off salt spray before collecting.

**Urban disaster.** Taps fail. Filled baths and pans, marked “untreated”, supply flushing and washing; bottled or treated water goes into clean, labelled containers. Two 10 L containers on a trolley beat a 20 L one carried by hand.

**Rural.** A well pump needs power. A clean bucket on a rope lowered into an open well is a container problem, not a source problem — and the water is treated before drinking.`,
    },
  ],
  mistakes: [
    'Carrying water in a container that once held fuel, antifreeze or chemicals.',
    'Filling a bag that has no support: it stretches, leaks and tears.',
    'Letting untreated water touch the threads or mouth of a clean bottle.',
    'Boiling water in a plastic drinks bottle.',
    'Setting out with too few empty containers: empties weigh almost nothing and save trips.',
    'Myth: “Water in a clean container is safe to drink.” The container is clean; the water may not be — treat it.',
    'Myth: “Rationing water in a warm bottle makes it last.” Drink to need; conserve sweat instead (Stage 8).',
  ],
  exercises: [
    {
      id: 's10-l2-e1',
      title: 'Bag-in-pack water carry',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['A rucksack', 'Two new, unscented heavy bin bags', 'Cord or a hair tie', 'A garden or yard with a tap'],
      steps: [
        'Double the bags and put them inside the pack as a liner.',
        'Fill with 5 L of tap water; twist, fold over and tie the neck; place the neck upward.',
        'Walk 200 m, including a step up and down. Check for leaks and how the load sits.',
        'Improve it: pad sharp items, move the load higher or closer, and repeat with 8 L.',
      ],
      success: ['8 L carried 200 m without leaks.', 'You can describe which object did which function.'],
      skill: 'improvise',
      safetyNote: 'Use tap water only and pour it onto a garden afterwards; do not drink water from bin bags.',
    },
    {
      id: 's10-l2-e2',
      title: 'Measure a rain catch',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A tarp or plastic sheet', 'Cord', 'A bucket or pot', 'A measuring jug', 'A rain gauge or a straight-sided cup'],
      steps: [
        'Before rain, pitch the sheet as a sloping funnel into the bucket.',
        'Measure the sheet’s area (m²) and set the straight-sided cup nearby as a rain gauge.',
        'After a shower, measure the collected volume and the rain depth (mm).',
        'Calculate your capture efficiency: $\\eta = V / (A \\times R)$. Improve the pitch and repeat.',
      ],
      success: ['You measured η and can predict litres for a given rain.', 'Your second pitch captured more.'],
      skill: 'water-finding',
    },
  ],
  simulations: ['improvise-challenge'],
  quiz: [
    {
      id: 's10-l2-q6',
      kind: 'single',
      prompt: 'Winter day trip, −10 °C. How should you carry your water bottles?',
      choices: [
        { id: 'a', text: 'In the side pockets of the pack, cap up', why: 'Exposed to the cold — they will freeze, starting at the top.' },
        { id: 'b', text: 'Inside the pack or jacket, insulated, and upside down', why: 'Correct — insulation slows freezing and ice forms away from the lid.' },
        { id: 'c', text: 'Empty, and eat snow along the way instead', why: 'Eating snow costs body heat and is slow; melting it needs fuel.' },
        { id: 'd', text: 'Half-full so they slosh and cannot freeze', why: 'Movement does not stop freezing.' },
      ],
      answer: 'b',
      concepts: ['water-transport', 'heat-loss'],
      explanation: 'Keep water liquid by insulating it and letting ice form where it does not block the lid.',
    },
    {
      id: 's10-l2-q1',
      kind: 'single',
      prompt: 'Which is the **worst** choice for carrying drinking water?',
      choices: [
        { id: 'a', text: 'A new, unscented bin bag inside a rucksack', why: 'Acceptable short term if the water is treated.' },
        { id: 'b', text: 'A rinsed antifreeze jug with a good screw cap', why: 'Correct — chemical residue cannot be removed; never use it for water.' },
        { id: 'c', text: 'A zip-lock food bag tucked inside a sock', why: 'Food-safe; small but fine.' },
        { id: 'd', text: 'A cooking pot with its lid on', why: 'Food-safe; fine for short distances.' },
      ],
      answer: 'b',
      concepts: ['improvised-containers', 'chemical-contamination'],
      explanation: 'Food safety is a property you cannot restore in the field. Containers that held chemicals are out.',
    },
    {
      id: 's10-l2-q4',
      kind: 'single',
      prompt: 'You carry untreated water in a “dirty” bag and treat it into a clean bottle. Which habit puts the treated water at risk?',
      choices: [
        { id: 'a', text: 'Marking the dirty container so it is never confused', why: 'A good habit — it prevents mix-ups.' },
        { id: 'b', text: 'Pouring so the dirty bag never touches the bottle’s threads', why: 'A good habit — threads and mouths are the weak point.' },
        { id: 'c', text: 'Dipping the clean bottle into the dirty bag to fill it faster', why: 'Correct — this contaminates the outside and threads.' },
        { id: 'd', text: 'Keeping the clean bottle closed between uses', why: 'A good habit — safe storage.' },
      ],
      answer: 'c',
      concepts: ['safe-storage'],
      explanation: 'Stage 4’s safe-storage rules apply to improvised containers too: keep dirty and clean apart, and protect threads and mouths.',
    },
    {
      id: 's10-l2-q5',
      kind: 'single',
      prompt: 'Is a thin PET drinks bottle a good pot for boiling water over a small fire?',
      choices: [
        { id: 'a', text: 'Yes — the water keeps the wall below 100 °C', why: 'Water does cap the wall near 100 °C, but PET softens well below that.' },
        { id: 'b', text: 'No — PET softens below 100 °C, so the bottle deforms', why: 'Correct — PET softens at roughly 70–80 °C. Boil in metal.' },
        { id: 'c', text: 'Yes — as long as the bottle is filled to the brim', why: 'A full bottle still reaches temperatures at which PET softens.' },
        { id: 'd', text: 'Yes — if you keep the flames low and slow', why: 'Any heat that boils the water takes PET past its softening point.' },
      ],
      answer: 'b',
      concepts: ['material-properties'],
      explanation: 'Water limits the wall to about 100 °C, but PET softens well below that (roughly 70–80 °C), so it deforms. Boil in metal.',
    },
    {
      id: 's10-l2-q2',
      kind: 'single',
      prompt: 'A group needs 20 L of water. The spring is 1.5 km away. Each trip carries 6 L. How many **trips** are needed?',
      choices: [
        { id: 'a', text: '4 trips', why: 'Correct — 20 ÷ 6 = 3.3, rounded up to 4.' },
        { id: 'b', text: '3 trips', why: 'Rounded down: 3 trips carry only 18 L.' },
        { id: 'c', text: '8 trips', why: 'This counts each return walk as a separate trip.' },
        { id: 'd', text: '13 trips', why: 'This divides litres by the distance instead of by the load per trip.' },
      ],
      answer: 'a',
      concepts: ['water-transport'],
      explanation: '$\lceil 20/6 \rceil = 4$ trips — 12 km of walking. More container capacity would cut that.',
    },
    {
      id: 's10-l2-q3',
      kind: 'single',
      prompt: 'A 3 × 3 m tarp catches a 4 mm shower at 75 % efficiency. About how many litres do you collect?',
      choices: [
        { id: 'a', text: '27 L', why: 'Correct — 9 m² × 4 mm × 0.75 = 27 L.' },
        { id: 'b', text: '36 L', why: 'This forgets the 75 % efficiency.' },
        { id: 'c', text: '9 L', why: 'This uses the 3 m side instead of the 9 m² area.' },
        { id: 'd', text: '2.7 L', why: 'A unit slip: 1 mm on 1 m² is 1 L, not 0.1 L.' },
      ],
      answer: 'a',
      concepts: ['water-collection'],
      explanation: '$V = 9\ \text{m}^2 \times 4\ \text{mm} \times 0.75 = 27$ L. 1 mm on 1 m² = 1 L.',
    },
  ],
  scenario: {
    id: 's10-l2-sc',
    setup: 'Hot desert canyon, 36 °C. Your group of three has 2 L left between you. A reliable spring is 2 km up-canyon; camp is in shade. You have two empty 1 L bottles, a 10 L dry bag, two new bin bags, a rucksack, a stove-fuel bottle (empty) and treatment tablets. It is 16:00; sunset 19:30.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Everyone walks to the spring now with all the bottles, drinks there and comes back', why: 'Three people sweating in the heat to carry only 2 L back; the most sweat for the least water.' },
      { id: 'b', text: 'Two people go at about 17:30 when shade covers the canyon, carrying the 2 L to drink on the way, the bottles, the dry bag and a bin-bag liner in the rucksack; treat everything; one person stays at camp; turnaround 19:00', why: 'Best: timed for cooler conditions, carries enough capacity for about 14 L, keeps water for the walk, uses a turnaround time and leaves a person at camp.' },
      { id: 'c', text: 'Send one person with the fuel bottle and the two bottles to save weight', why: 'The fuel bottle is not food-safe, the capacity is tiny, and one person alone in heat is a risk.' },
      { id: 'd', text: 'Ration the 2 L overnight and go in the morning', why: 'Rationing in 36 °C heat risks heat illness; the spring is close and daylight remains.' },
    ],
    best: 'b',
    debrief: 'Capacity decides how many trips you need; timing decides how much you sweat on each one. Combining containers (bottles plus bag-in-pack) gives a large payload, and Stage 1’s daylight budget and turnaround time keep the trip safe. The fuel bottle is excluded by food safety, not by size.',
    concepts: ['water-transport', 'improvised-containers', 'daylight', 'dehydration'],
  },
  summary: [
    'A container must **hold, stay safe, close and carry** — combine objects to cover all four.',
    '**Bag-in-pack**: the liner holds water, the pack carries it.',
    '**Never** use containers that held fuel, oil or chemicals; improvised containers are not treatment.',
    'Trips $= \\lceil D/C \\rceil$; rain catch $V = A \\times R \\times \\eta$ (1 mm on 1 m² = 1 L).',
    'Keep **dirty and clean** containers apart; boil in metal, not PET.',
  ],
  furtherReading: ['cdc-water-storage', 'cdc-yellowbook-water', 'afh-10-644'],
  references: ['cdc-water-storage', 'cdc-yellowbook-water', 'wms-water-2019', 'afh-10-644', 'army-atp-3-50-21', 'kochanski-bushcraft', 'lnt-principles'],
}
