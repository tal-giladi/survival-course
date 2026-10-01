import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's10-l1',
  stage: 10,
  order: 1,
  title: 'The improvisation method',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l6'],
  concepts: ['improvisation-method', 'functional-fixedness', 'material-properties', 'load-testing', 'critical-gear-tradeoff'],
  objectives: [
    'Describe a problem by the **function** it needs, not by the object you are missing.',
    'Name the **material properties** that decide whether an object can do a job, and read them in ordinary objects.',
    'Recognise **functional fixedness** and use deliberate prompts to break it.',
    'Plan a **load test** with a safety factor before trusting an improvised item with anything that matters.',
    'Weigh the **opportunity cost** of using gear that is already doing a vital job.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Improvising is not a bag of clever tricks; it is a **method** for solving a problem when the proper tool is missing. The method works for a torn tent in the mountains, a broken strap in the desert and a flooded kitchen in a city. Military survival manuals put “Improvise” into their SURVIVAL mnemonic for this reason.

### Function over form

The first step is to stop asking “where is my water bottle?” and ask **“what must the thing do?”** A water bottle *holds water without leaking*, *is safe for drinking water*, *closes*, and *can be carried*. Each of those is a **function**, and each can be met by a different object. A clean bin bag holds water; a rucksack carries it; a cord closes the neck. None of them is a “bottle”, but together they do the bottle’s job.

Write the functions as verbs: *hold*, *carry*, *keep dry*, *stiffen*, *pad*, *bind*, *insulate*, *signal*. Then give each verb its **requirements**: how much, how long, how strong, how clean.`,
    },
    { type: 'diagram', id: 's10-method-cycle', caption: 'The improvisation cycle. Define the function first; test before you trust.' },
    {
      type: 'md',
      md: `### Material properties: what an object *is* made of decides what it can *do*

| Property | Question to ask | Good examples | Poor examples |
|---|---|---|---|
| **Waterproof** | Will water pass through or soak in? | plastic film, rubberised fabric, metal | cotton, cardboard, most rucksacks |
| **Food-safe** | Is it safe to hold drinking water or food? | drinks bottles, cooking pots, food bags | anything that held fuel, oil, pesticide or chemicals; scented bags |
| **Rigid** (stiffness) | Does it bend under load? | sound dead wood, poles, folded foam, rolled magazine | cord, cloth, wet cardboard |
| **Strong in tension** | Can it be pulled hard without breaking? | cord, straps, belts, tarps | tape, paper, thin plastic |
| **Binding** | Can it wrap and grip? | tape, cord, cable ties, cloth strips | rigid objects |
| **Padding / insulation** | Is it soft, springy, full of trapped air? | foam, dry clothing, dry leaves | wet cotton, hard objects |
| **Abrasion resistance** | Will it survive rubbing on rock or ground? | wire, nylon webbing, leather | tape, thin plastic |
| **Heat tolerance** | Can it sit near a flame? | metal, water-filled containers (Stage 7) | most plastics, synthetics |

Most failures in improvised gear come from one property that was ignored: a bag that was waterproof but not food-safe, a splint that was stiff but had nothing soft against the skin, a tape repair that was sticky but not abrasion-resistant.`,
    },
    { type: 'diagram', id: 's10-property-matrix', caption: 'Read a column when you know the function; read a row to see what else an object could do.' },
    {
      type: 'md',
      md: `### Functional fixedness — the trap in your own head

Psychologists call the habit of seeing an object only in its usual role **functional fixedness**. In Karl Duncker’s classic “candle problem” (1945), people asked to fix a candle to a wall using a candle, matches and a box of drawing pins often failed to see the **box** as a shelf when it was presented full, doing its usual job as a container. When the box was given to them empty, the solution came much more easily.

In the field this looks like: “I have no splint” (while sitting on a foam pad), “I have no rope” (while wearing a belt and two bootlaces), “I have nothing to carry water in” (while holding an empty stuff sack and a bin liner). Ways to break it:

1. **Say the function, not the name**: “something stiff, 30 cm long, that I can pad”.
2. **Empty everything out** and lay it on the ground. Objects in a pack are invisible.
3. **Describe each object by its properties** (“thin, strong, flexible, waterproof film”), not its name (“bin bag”).
4. **Ask “what else?” three times** for each item.
5. **Include nature and rubbish**: dead wood, stones, bark, a car’s floor mats, a plastic crate.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Test before trusting',
      md: 'An improvised item is **untested until you test it**. Load it at ground level, where failure costs nothing, with **more** than it will carry in use (a safety factor of about 2 is a reasonable field rule for non-life-safety loads). Improvised items must **never** be used for life-safety loads such as climbing, abseiling, lowering people or crossing water — those need certified equipment and training (Stage 13).',
    },
    {
      type: 'md',
      md: `### Opportunity cost: every object is already doing a job

Your rain jacket keeps you dry; your foam pad insulates you from the ground; your spare socks are tonight’s dry socks. Using one of them to fix something else can **solve a small problem by creating a big one**, especially in cold, wet weather (Stage 1 heat balance). Before you cut, soak or give away an item, ask: *what job is it doing now, and who does that job instead?*

The same logic prefers **reversible** improvisations (Stage 1, decisions): tie rather than cut, lash rather than nail, tape rather than glue, so the item can go back to its original job.

### The method in one line

**Function → properties → candidates → build simply → test → use and monitor.** It is Stage 1’s decision loop applied to things.`,
    },
    { type: 'sim', id: 'improvise-challenge', caption: 'Split a problem into functions, assign objects, load-test, fix the weak link, then commit.' },
  ],
  whyItMatters: 'Kit breaks, gets lost and never quite matches the emergency you actually have. People who can see the functions hidden in ordinary objects turn a broken strap, a missing bottle or a torn tent into a 10-minute job instead of a crisis. A method also protects against the two classic errors: solving the wrong problem, and trusting something that was never tested.',
  science: [
    {
      type: 'md',
      md: `### Loads, weights and a safety factor

A load’s **weight** is its mass times gravity: $W = m \\times g$, with $g \\approx 9.81\\ \\text{m/s}^2$. A litre of water has a mass of about 1 kg, so 8 L of water weighs about

$$
W = 8\\ \\text{kg} \\times 9.81\\ \\text{m/s}^2 \\approx 78\\ \\text{N}.
$$

Real loads are **dynamic**: swinging, jolting and gusts can briefly double the force. A **safety factor** (SF) covers that and the unknown quality of improvised material:

$$
\\text{Test load} = \\text{SF} \\times \\text{working load}.
$$

With SF = 2, test that water-bag hanger with about 16 kg (for example two full 8 L bags, or you pulling steadily with a luggage scale) — at knee height, over soft ground.

### Why the weakest link decides

A system in series fails at its weakest part. If a hanger has a branch rated (by your test) to 30 kg, a cord to 100 kg and a knot that keeps about half of the cord’s strength (Stage 7, knot efficiency), the whole system is only as strong as the branch: 30 kg. Testing the **assembled** item finds the weakest link you did not think of — a slipping knot, a hidden crack, a tape that peels.

### Stiffness vs strength

Two different properties are often confused. **Stiffness** is how little something bends under load; **strength** is how much load breaks it. A cardboard tube is stiff until it gets wet; a paracord is strong but has no stiffness at all. Wood is stiff and strong **along** the grain, weak across it, and dead wood can hide rot inside a sound-looking skin (Stage 3). Choose by the property the function needs.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest (temperate).** Pack strap buckle snapped. Function: *join two straps and let them adjust*. Candidates: a trucker’s hitch in cord, a stick toggle through two loops, a safety pin chain. The toggle is quick, reversible and tested by leaning into the strap before the pack goes on.

**Desert.** Sun hat lost. Function: *shade the head and neck, let sweat evaporate*. A light-coloured shirt or bandana worn as a legionnaire cap does it; a black bin bag would shade but traps heat — wrong property.

**Mountain.** A crampon strap breaks. Function: *hold the crampon to the boot under load*. Cord lashing, tested on flat, safe ground; the group then chooses easier terrain, because improvised gear lowers your margin (Stage 1, risk).

**Tropical.** Rain soaks everything. Function: *keep the phone and matches dry*. A zip-lock bag inside another bag, inside the pack’s middle. Two barriers are redundancy (Stage 1).

**Arctic / subarctic.** A mitten is lost. Function: *insulate the hand and block wind*. A spare sock over the hand inside a stuff sack or a plastic bag as a wind shell. The dry sock is also critical for the feet — decide which need is greater now.

**Urban (after an earthquake).** No stretcher for a casualty with a leg injury. Function: *rigid, carryable platform*. A door, a table top or a ladder with blankets, strapped with belts — tested by lifting it loaded with bags first.

**Coastal.** A kayak paddle cracks. Function: *stiffen the shaft across the crack*. A splint of driftwood or a tent pole section, bound with tape and cord either side of the crack, then paddling gently close to shore.`,
    },
  ],
  mistakes: [
    'Searching for the missing object instead of defining the function it performed.',
    'Using a container that once held fuel or chemicals for drinking water.',
    'Trusting an improvised item without testing it at ground level first.',
    'Using a critical item (rain jacket, sleeping pad, dry socks) for a repair in cold, wet weather.',
    'Cutting or gluing when tying or lashing would work and could be undone.',
    'Myth: “Paracord is rated to 550 lb, so my improvised rig holds 250 kg.” A rating is for new cord in a straight pull; knots, bends, wear and shock loads cut it greatly — and improvised rigs are never for life-safety loads.',
    'Myth: “A real survivor can make anything from nothing.” Improvisation extends good kit; it does not replace it. The best improvisers carry a small repair kit.',
  ],
  exercises: [
    {
      id: 's10-l1-e1',
      title: 'Function-first inventory',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['The contents of your day pack or car', 'Paper and pencil'],
      steps: [
        'Empty your pack onto a table or the floor.',
        'For each object, write three **properties** (e.g., “waterproof, flexible, thin”) and three **functions** it could perform other than its usual one.',
        'Pick four functions that commonly fail on trips (carry water, splint, bind, keep dry). For each, list the two best candidates from your pile.',
        'Mark any candidate that is also **critical** (warmth, rain protection, navigation, light). Choose a non-critical alternative where you can.',
      ],
      success: ['Every object has at least three alternative uses.', 'Every common failure has two candidates, at least one non-critical.'],
      skill: 'improvise',
    },
    {
      id: 's10-l1-e2',
      title: 'Build and load-test an improvised hanger',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['A broom handle or dowel', 'Cord', 'Two bags or buckets', 'Water bottles as weights', 'Luggage scale (optional)'],
      steps: [
        'Decide the working load: a bag with 4 L of water (about 4 kg).',
        'Build a hanger: the handle resting between two chairs, the bag hung from a clove hitch in the middle.',
        'Test at a safety factor of 2: hang 8 kg (or pull 8 kg on the scale), low over the floor.',
        'Note the first thing that moves, slips or creaks. Improve it and repeat.',
      ],
      success: ['The hanger holds twice the working load for a minute without slipping.', 'You identified and fixed the weakest link.'],
      skill: 'improvise',
      safetyNote: 'Keep loads low over the floor and your feet out from under them.',
    },
  ],
  simulations: ['improvise-challenge'],
  quiz: [
    {
      id: 's10-l1-q5',
      kind: 'single',
      prompt: 'Sleet, 2 °C, 3 hours from the road. A friend’s pack strap tears. What is the best material to fix it?',
      choices: [
        { id: 'a', text: 'Your rain jacket, knotted firmly into a strap', why: 'You need the jacket to stay dry and warm — a large opportunity cost in sleet.' },
        { id: 'b', text: 'Cord or a stuff-sack strap, tied with a tested knot', why: 'Correct — strong in tension and not doing a vital job.' },
        { id: 'c', text: 'Duct tape wrapped around the torn ends only', why: 'Tape is weak in tension and peels when wet and cold.' },
        { id: 'd', text: 'Strips cut from your foam sleeping pad', why: 'Weak in tension and you need the pad for insulation.' },
      ],
      answer: 'b',
      concepts: ['critical-gear-tradeoff', 'material-properties', 'wet-wind'],
      explanation: 'Match the property (tension) and avoid cannibalising critical gear in cold, wet weather.',
    },
    {
      id: 's10-l1-q1',
      kind: 'single',
      prompt: 'Your only water bottle split. What is the best first step?',
      choices: [
        { id: 'a', text: 'Search the pack carefully for a spare bottle', why: 'This is functional fixedness: you are looking for the object, not the function.' },
        { id: 'b', text: 'List what the bottle did: hold, stay food-safe, close, carry', why: 'Correct — each function can then be met by an object you do have.' },
        { id: 'c', text: 'Drink all the remaining water now so nothing needs carrying', why: 'You cannot store water in your body for later; you will need water again.' },
        { id: 'd', text: 'Refill the empty fuel bottle and carry on as before', why: 'Not food-safe: fuel residue cannot be cleaned out in the field.' },
      ],
      answer: 'b',
      concepts: ['improvisation-method', 'functional-fixedness'],
      explanation: 'Define the function first; then choose objects by their properties.',
    },
    {
      id: 's10-l1-q4',
      kind: 'single',
      prompt: 'An improvised cord-and-branch rig has held twice your body weight in a ground-level test. Can it be used to lower a person down a short cliff?',
      choices: [
        { id: 'a', text: 'Yes — a safety factor of 2 shows it is strong enough', why: 'No. Dynamic loads, edge abrasion and hidden flaws make improvised rigs unpredictable; a static test does not cover them.' },
        { id: 'b', text: 'Yes, as long as the person lowered is lighter than you', why: 'No. Weight is not the issue — life-safety rope work needs certified equipment, anchors and training.' },
        { id: 'c', text: 'No — lowering a person needs certified gear and training', why: 'Correct — life-safety loads are never trusted to improvised rigs.' },
        { id: 'd', text: 'No — but it would be fine after a test at 3× body weight', why: 'No. A bigger static test still misses dynamic loads, edge abrasion and hidden flaws.' },
      ],
      answer: 'c',
      concepts: ['load-testing', 'training-scope'],
      explanation: 'Never. Life-safety rope work needs certified equipment, proper anchors and training. Dynamic loads, edge abrasion and hidden flaws make improvised rigs unpredictable (Stage 13).',
    },
    {
      id: 's10-l1-q3',
      kind: 'single',
      prompt: 'Which of these does **NOT** help break **functional fixedness**?',
      choices: [
        { id: 'a', text: 'Describe objects by their properties, not their names', why: 'It helps — “thin, strong, waterproof film” suggests uses that “bin bag” hides.' },
        { id: 'b', text: 'Empty the pack and lay everything out where you can see it', why: 'It helps — objects you can see get used.' },
        { id: 'c', text: 'Ask “what else could this do?” three times per item', why: 'It helps — forcing alternatives widens the search.' },
        { id: 'd', text: 'Wait until you remember where the proper tool is kept', why: 'Correct — this keeps you fixed on the missing object.' },
      ],
      answer: 'd',
      concepts: ['functional-fixedness'],
      explanation: 'Properties, visibility and forced alternatives all widen what you can see; waiting for the “proper” tool narrows it.',
    },
    {
      id: 's10-l1-q2',
      kind: 'single',
      prompt: 'A hanger will carry a 6 L water bag. With a safety factor of 2, what **test mass** should you load it with?',
      choices: [
        { id: 'a', text: '12 kg', why: 'Correct — 6 L of water ≈ 6 kg, and 2 × 6 = 12 kg.' },
        { id: 'b', text: '6 kg', why: 'That is the working load; it forgets the safety factor of 2.' },
        { id: 'c', text: '3 kg', why: 'This divides by the safety factor instead of multiplying.' },
        { id: 'd', text: '8 kg', why: 'This adds 2 kg instead of multiplying by 2.' },
      ],
      answer: 'a',
      concepts: ['load-testing'],
      explanation: '6 L of water ≈ 6 kg; 2 × 6 = 12 kg. Test at ground level.',
    },
    {
      id: 's10-l1-q6',
      kind: 'single',
      prompt: 'In the improvisation method, what comes straight after you have **defined the function**?',
      choices: [
        { id: 'a', text: 'Inventory the candidate objects', why: 'Not yet — without the required properties you cannot judge candidates.' },
        { id: 'b', text: 'List the properties needed', why: 'Correct — properties are the bridge from function to object.' },
        { id: 'c', text: 'Build something simple', why: 'Too early — you have not chosen materials yet.' },
        { id: 'd', text: 'Test before trusting', why: 'Testing comes after building.' },
      ],
      answer: 'b',
      concepts: ['improvisation-method'],
      explanation: 'Function → properties → candidates → build → test → use and monitor.',
    },
  ],
  scenario: {
    id: 's10-l1-sc',
    setup: 'You are two days into a canoe trip in the northern forest. At camp, the stove’s pump breaks and the group’s only pot handle has snapped off. It is 8 °C and drizzling; there is a fire ban because of a dry spring, and your drinking water plan relied on boiling.',
    question: 'What is the best approach?',
    choices: [
      { id: 'a', text: 'Light a small fire anyway, just to boil water, and hold the pot with a forked stick', why: 'Breaks the fire ban — a legal and wildfire risk — and does not address the broken stove.' },
      { id: 'b', text: 'Define functions: “disinfect water” and “move a hot pot safely”. Use the backup (chemical tablets or filter) for water today; improvise a pot grip from a folded bandana and two sticks, test it with cold water, and try to repair the pump seal', why: 'Best: separates the functions, uses a legal alternative for the vital one, tests the improvised grip safely, and keeps working on the repair.' },
      { id: 'c', text: 'Drink straight from the lake: northern lakes are clean', why: 'A myth — surface water can carry pathogens anywhere (Stage 4).' },
      { id: 'd', text: 'Paddle out today in the drizzle to get a new stove', why: 'An irreversible, costly decision to solve a problem that has cheaper solutions.' },
    ],
    best: 'b',
    debrief: 'Splitting the problem by function shows that the vital job (safe water) has a legal backup, and the lesser job (hot-pot handling) can be improvised and tested with cold water first. This is Stage 1’s decision logic and Stage 4’s multiple-barrier water treatment, applied with an improvisation mindset — and within the law.',
    concepts: ['improvisation-method', 'water-treatment', 'fire-safety', 'reversibility'],
  },
  summary: [
    'Improvise by **function**: describe what must be done, as verbs with requirements.',
    'Choose objects by **properties**: waterproof, food-safe, rigid, strong in tension, binding, padding, abrasion-resistant, heat-tolerant.',
    'Break **functional fixedness**: empty the pack, describe properties, ask “what else?”.',
    '**Test before trusting** at ground level with a safety factor of about 2; never for life-safety loads.',
    'Weigh **opportunity cost**: do not cannibalise gear that keeps you warm, dry or found.',
  ],
  furtherReading: ['afh-10-644', 'army-atp-3-50-21', 's10-duncker-1945'],
  references: ['army-atp-3-50-21', 'afh-10-644', 's10-duncker-1945', 'fpl-wood-handbook', 'kochanski-bushcraft', 'deep-survival'],
}
