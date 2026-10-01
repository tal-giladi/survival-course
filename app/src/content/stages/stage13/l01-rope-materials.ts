import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's13-l1',
  stage: 13,
  order: 1,
  title: 'Rope materials, inspection and care',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s7-l2'],
  concepts: ['rope-types', 'fall-factor', 'rope-inspection', 'cordage-strength'],
  objectives: [
    'Compare the common rope fibres (nylon, polyester, HMPE, aramid, polypropylene, natural fibres) by stretch, strength, heat, water and UV behaviour.',
    'Explain the difference between **dynamic** and **low-stretch (“static”)** rope, and use the **fall factor** to see why the wrong rope can be lethal.',
    'Inspect a rope by hand and eye and name the findings that **retire** it.',
    'Store, clean and protect rope so it lasts, and keep a simple rope log.',
    'Tell **utility cord** (paracord, washing line, farm rope) from **life-safety rope** — and never mix them up.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'This stage teaches principles, not rope work for people',
      md: 'Knots, lashings and camp rigging at home are fine. Anything that holds a **person** — anchors, belaying, hauling, lowering, rappelling, climbing, rescue — is **life-safety rope work**. It needs qualified, hands-on instruction and certified equipment. Everything load-bearing in this stage is **virtual only** or points you to formal training.',
    },
    {
      type: 'md',
      md: `Stage 7 treated cord as a friction machine for camp. This lesson looks at **modern rope**: what it is made of, how it is built, how it stretches, and how you decide whether you can still trust it.

### Fibres

| Fibre | Stretch | Water | Heat | UV | Typical use |
|---|---|---|---|---|---|
| **Nylon (polyamide)** | High, elastic | Absorbs water; weaker and heavier when wet | Melts at roughly 220–260 °C | Moderate | Dynamic climbing ropes, slings, many rescue ropes |
| **Polyester** | Low | Absorbs little | Similar to nylon | Good | Low-stretch ropes, sailing lines, sheaths |
| **HMPE** (e.g., Dyneema, Spectra) | Very low | Floats, absorbs none | Melts at only ~150 °C | Good | Very strong thin slings and cords; slippery — knots hold poorly |
| **Aramid** (e.g., Kevlar, Technora) | Very low | Low | Very heat-resistant | Poor | Heat-resistant cords; weak when bent sharply and repeatedly |
| **Polypropylene** | Moderate | Floats | Melts at ~165 °C | **Poor** — sun weakens it fast | Cheap utility and water-rescue throw lines |
| **Natural** (manila, hemp, sisal, cotton) | Low–moderate | Absorbs; can rot | Chars rather than melts | Moderate | Traditional rope; not used for modern life safety |

### Construction

- **Kernmantle** (“core and sheath”): a load-bearing **core** protected by a woven **sheath**. Almost all modern climbing and rescue rope. The sheath hides core damage — so inspection is by **feel** as well as sight.
- **Laid (twisted)** rope: three strands twisted together. Easy to inspect and splice, but it spins under load and has no protective sheath.
- **Braided** rope and cord: a braided jacket, sometimes over loose inner yarns — **paracord** is this type. It is **utility cord**, not life-safety rope.`,
    },
    { type: 'diagram', id: 's13-rope-construction', caption: 'Kernmantle, laid and braided constructions; dynamic rope stretches to absorb a fall, low-stretch rope does not.' },
    {
      type: 'md',
      md: `### Dynamic vs low-stretch rope

- **Dynamic ropes** are made to **stretch** in a fall. The stretch turns the falling person’s energy into rope deformation over a longer distance, which keeps the **peak force** on the person, the belayer and the anchor survivable. They are tested to standards such as **EN 892 / UIAA 101**: a single rope must hold repeated severe test drops of an 80 kg mass, and the peak force on the first drop must stay at or below **12 kN**.
- **Low-stretch (“static”) kernmantle ropes** (tested to standards such as **EN 1891**) stretch only a few percent under a working load. That makes them efficient for **lowering, hauling, fixed lines and rope access** — and **dangerous to fall on**, because there is almost no stretch to absorb the energy.

### Utility cord is not life-safety rope

Military-specification **“550” paracord** has a *minimum* breaking strength of 550 lbf — about **2.4 kN**, before any knot. That is fine for tarps, shelters and gear. It is not fine for a person: a knot takes away a third to a half of that, a short drop multiplies body weight several times, and the cord is not made or tested for the job. The same goes for washing line, farm baler twine, towing straps and anything without a life-safety standard marking.`,
    },
    { type: 'diagram', id: 's13-fall-factor', caption: 'The fall factor, not the fall length, sets the peak force in a rope fall.' },
    {
      type: 'md',
      md: `### Inspection

Inspect **before and after every use**, and after anything unusual. Run the **whole rope** through your hands, a short section at a time, bending it gently as you go:

1. **Feel** for flat or soft spots (a damaged or broken core), stiff or lumpy spots (heat, chemicals, crushing), and changes in diameter.
2. **Look** at the sheath: cuts, heavy fuzzing, **core showing through** (a “core shot”), **glazing** (shiny, hard patches where friction has melted fibres), discoloration or stains.
3. **Smell and history:** chemical smells; contact with acids (car-battery acid is a classic), solvents, bleach; long storage in sunlight; a big fall or shock load; unknown history.
4. **Ends and markings:** are the ends sealed? Can you read the label — maker, standard, date?`,
    },
    { type: 'diagram', id: 's13-rope-inspection', caption: 'Six common findings. For life-safety rope, any serious doubt means retire it.' },
    {
      type: 'md',
      md: `### Retirement

Retire a life-safety rope — cut it up so no one else uses it — if:

- you find **core damage**, a core shot, glazing, significant stiff or flat spots;
- it has been in contact with **acids** or other damaging chemicals, even without visible damage;
- it has taken a **severe fall** or shock load beyond what the maker allows;
- its **history is unknown** (a rope found at a crag, in a hut, left on a canyon anchor);
- it has passed the **maker’s maximum lifetime**. Makers publish a limit for textile gear (commonly around ten years from manufacture, even unused) and much shorter lives for heavy use. Follow the instructions that came with the rope.

### Care

- **Keep it clean**: do not step on rope (it grinds grit into the core); use a rope bag or tarp.
- **Wash** when dirty in cool water with a mild soap (or the maker’s rope cleaner); rinse; **dry slowly in the shade**, never by a fire or heater.
- **Store** loosely coiled, dry, out of sunlight, away from chemicals, batteries and heat — not in a car boot next to a battery.
- **Friction heat kills nylon**: never let a moving rope run fast over another nylon rope or sling that is not moving — the static one melts.
- **Protect edges**: sharp or rough edges cut loaded ropes. Padding and rollers are standard for rope teams.
- **Keep a log** for any rope used for people: date bought, uses, falls, incidents, inspection results.`,
    },
  ],
  whyItMatters: 'A rope is only as good as the weakest metre of it, and damage is often hidden inside the sheath. People have been killed by the wrong kind of rope (a static line where a dynamic rope was needed), by old or chemically damaged ropes, and by utility cord used as if it were climbing rope. Choosing, inspecting and retiring rope correctly is the first skill every rope course teaches — and the one you can practise safely at home.',
  science: [
    {
      type: 'md',
      md: `### Why the fall factor sets the force

In words: a falling person gains energy from the height they fall. The rope must absorb all of it by stretching. A **longer rope** stretches **further** for the same force, so it can absorb more energy at a lower peak force. The ratio that matters is

$$
f = \\frac{h}{L}
$$

where $h$ is the fall distance (m) and $L$ the length of rope (m) available to stretch. This is the **fall factor**: 0 to 2 in normal climbing, higher in some anchor and via-ferrata situations.

If the rope behaves like a spring with stiffness $k$ (force per unit strain, N), the peak force on a mass $m$ is

$$
F_{\\text{peak}} = mg + \\sqrt{(mg)^2 + 2\\,mg\\,k\\,f}
$$

Notice that $h$ and $L$ appear **only through their ratio** $f$: a 2 m fall on 1 m of rope is **worse** than a 10 m fall on 20 m of rope.

**Worked example (illustrative stiffness values).** An 80 kg person weighs $mg = 785$ N. Take a dynamic rope with $k \\approx 24$ kN:

- $f = 0.5$: $F = 785 + \\sqrt{785^2 + 2 \\times 785 \\times 24{,}000 \\times 0.5} \\approx 5.2$ kN
- $f = 2$: $\\approx 9.5$ kN

Now a low-stretch rope ten times stiffer ($k \\approx 240$ kN):

- $f = 0.5$: $\\approx 14.5$ kN; $f = 1$: $\\approx 20$ kN — well above the 12 kN that dynamic-rope standards allow in a far more severe test fall.

Real ropes are not perfect springs (and knots, harnesses and bodies absorb some energy), but the lesson holds: **never fall on low-stretch rope, and keep fall factors low**. That is why this is a subject for trained climbers and rope technicians.

### Strength, working load and safety factor

A rope’s **rated (breaking) strength** is what it withstood in a test when new, straight and without knots. It is **not** a working load. Knots remove 25–50 % (next lesson), edges, wear, wetness and age remove more, and dynamic loads multiply the force. Rope teams therefore work with large **safety factors** — the ratio of breaking strength to expected load. Rescue texts commonly design for margins in the order of 10:1 on the whole system.

**Worked example.** Paracord: 550 lbf × 4.45 N/lbf ≈ **2.45 kN** new. With an overhand knot keeping ~55 %: ≈ **1.35 kN**. An 80 kg person hanging still is 0.785 kN — a safety factor under 2, before any bounce. A 12 kN fall would break it several times over.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert canyon.** Slings and ropes left on canyon anchors bake in intense sun and are chewed by grit and rodents. Trained canyoneers treat every piece of found webbing as untrustworthy and replace it — a found rope is **unknown history**.

**Coastal cliffs.** Salt crystals and sand work into the core and abrade fibres from inside. Ropes used near the sea are rinsed in fresh water and dried in the shade.

**Arctic and high mountain.** Wet nylon ropes freeze stiff, are harder to handle and lose some performance; many climbing ropes are **dry-treated** for this reason. Ice screws and crampons cut sheaths — one reason trained teams inspect after every day.

**Tropical forest.** Heat and humidity rot natural-fibre ropes and moulds grow in stored rope; synthetic rope is still preferred, stored dry and aired.

**Temperate forest.** Sap and bark stain and abrade rope; tree-care workers (arborists) use ropes and hardware made for their standards, and replace them on a schedule.

**Urban home and car.** The classic hidden hazard: rope stored in a garage or car boot next to a **lead-acid battery** or garden chemicals. Acid damage can be invisible and still destroy the core.

**Rural farm.** Blue polypropylene rope and baler twine degrade in sunlight within a season and are useful for tying bales — never for lifting people or animals out of pits.`,
    },
  ],
  mistakes: [
    'Using a low-stretch (“static”) rope where a person could fall onto it.',
    'Treating paracord, washing line or tow rope as life-safety rope.',
    'Myth: “A rope that looks fine is fine.” Core damage in kernmantle rope is hidden by the sheath — you must feel it.',
    'Myth: “A big rope rating means big safety margins.” The rating is for new, knot-free rope in a test; knots, edges, wear and shock loads use most of it up.',
    'Trusting a rope found in a hut, at a crag or on a canyon anchor.',
    'Storing rope in sunlight, near batteries or chemicals, or drying it by a fire.',
    'Stepping on rope or dragging it through sand and grit.',
    'Running a moving nylon rope over a stationary nylon sling (friction melting).',
  ],
  exercises: [
    {
      id: 's13-l1-e1',
      title: 'Inspect and log a rope or cord at home',
      level: 1,
      safety: 'home',
      minutes: 30,
      materials: ['Any rope or cord you own (utility or retired climbing rope)', 'Notebook or spreadsheet'],
      steps: [
        'Read any label or tag: fibre, construction, standard, date. If there is none, note “unknown — utility only”.',
        'Flake the whole length into a loose pile, then run it through your hands a short section at a time, bending it gently.',
        'Mark (with tape) anything soft, flat, stiff, glazed, cut, fuzzy or stained. Compare with the six findings in the diagram.',
        'Start a log: date, length, source, inspection result, decision (keep / utility only / retire).',
        'Coil it loosely and store it dry, in the dark, away from chemicals and batteries.',
      ],
      success: ['Every metre was handled, not just looked at.', 'Each finding is named and a decision is recorded.', 'You can say whether this rope may ever hold a person (for anything without a life-safety standard and known history: no).'],
      skill: 'rope-inspection',
      safetyNote: 'Inspection is safe at home. Deciding that a rope is fit to hold a person is a job for a trained, qualified user with certified equipment.',
    },
    {
      id: 's13-l1-e2',
      title: 'Stretch test: dynamic vs low-stretch (small weights only)',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['Two or three different cords of equal length (~2 m): e.g., bungee/shock cord, paracord, polyester line', 'A 2–5 kg weight (a water jug)', 'Tape measure', 'A sturdy hook at head height or lower'],
      steps: [
        'Hang each cord from the hook with no load and mark the bottom.',
        'Hang the water jug gently on it (no dropping) and measure how far the mark moves.',
        'Work out stretch as a percentage of the unloaded length for each cord.',
        'Rank them. Which would soften a sudden jerk? Which would transmit it?',
      ],
      success: ['Measured stretch for each cord.', 'You can explain why a stretchy rope lowers the peak force of a sudden load and why that matters in a fall.'],
      safetyNote: 'Use small weights, hang them gently, and keep your face away from a loaded cord — stretched cord snaps back hard if a knot or hook fails. Never drop weights onto cord and never hang from it yourself.',
    },
  ],
  quiz: [
    {
      id: 's13-l1-q2',
      kind: 'single',
      prompt: 'You inspect a life-safety rope. Which finding, on its own, does NOT mean the rope must be retired?',
      choices: [
        { id: 'a', text: 'A soft, flat section you can pinch together', why: 'Retire — the core is damaged under the sheath.' },
        { id: 'b', text: 'A month in a car boot next to a leaking battery', why: 'Retire — acid damage can be invisible and still destroy the core.' },
        { id: 'c', text: 'Light, even fuzz on the sheath after normal use', why: 'Correct — mild fuzz is normal wear; monitor it rather than retire.' },
        { id: 'd', text: 'A shiny, hard, glazed patch on the sheath', why: 'Retire — friction heat has melted fibres.' },
      ],
      answer: 'c',
      concepts: ['rope-inspection'],
      explanation: 'Core damage, chemicals, heat damage and unknown history (such as a rope found tied above a canyon drop) each retire a life-safety rope. Normal light wear is monitored, not ignored.',
    },
    {
      id: 's13-l1-q5',
      kind: 'single',
      prompt: 'On the same rope, which fall produces the higher peak force: a 10 m fall on 20 m of rope, or a 2 m fall on 1 m of rope?',
      choices: [
        { id: 'a', text: 'The 2 m fall on 1 m of rope, because its fall factor is 2', why: 'Correct — $f = 2/1 = 2$ versus $f = 10/20 = 0.5$.' },
        { id: 'b', text: 'The 10 m fall on 20 m of rope, because the fall is longer', why: 'Fall length alone does not set the force; the longer rope stretches further to absorb it.' },
        { id: 'c', text: 'Both are the same, because it is the same rope and climber', why: 'The same rope gives very different forces at different fall factors.' },
        { id: 'd', text: 'The 10 m fall, because the climber gains five times the energy', why: 'More energy, but far more rope to absorb it — the ratio is what counts.' },
      ],
      answer: 'a',
      concepts: ['fall-factor'],
      explanation: 'The peak force depends on the fall factor $h/L$: 0.5 vs 2. The short fall on little rope is far more severe.',
    },
    {
      id: 's13-l1-q1',
      kind: 'single',
      prompt: 'Which rope is designed to catch a climber’s fall?',
      choices: [
        { id: 'a', text: 'Low-stretch kernmantle (EN 1891)', why: 'Built for lowering, hauling and fixed lines; a fall onto it produces very high forces.' },
        { id: 'b', text: 'Dynamic kernmantle (EN 892 / UIAA 101)', why: 'Correct — its stretch absorbs fall energy and keeps the peak force within tested limits.' },
        { id: 'c', text: 'Braided polyester utility line', why: 'Not designed or tested for life safety.' },
        { id: 'd', text: 'HMPE (Dyneema) cord, because it is strongest for its size', why: 'Strong in a steady pull but almost no stretch — shock loads are brutal, and knots hold poorly.' },
      ],
      answer: 'b',
      concepts: ['rope-types', 'fall-factor'],
      explanation: 'Strength alone is not enough: energy absorption (stretch) is what keeps a fall survivable for the person and the anchor.',
    },
    {
      id: 's13-l1-q6',
      kind: 'single',
      prompt: 'Why must a fast-moving nylon rope never run over a stationary nylon sling?',
      choices: [
        { id: 'a', text: 'The rubbing can work the sling’s knot loose until it unties', why: 'Not the mechanism — the danger is heat, not the knot.' },
        { id: 'b', text: 'Friction heat concentrates on the stationary sling and can melt it', why: 'Correct — the moving rope spreads its heat along its length; the sling takes it all in one spot.' },
        { id: 'c', text: 'Nylon rubbing on nylon builds up static electricity', why: 'Irrelevant to strength.' },
        { id: 'd', text: 'It is fine as long as the sling is thicker than the rope', why: 'Thickness does not stop melting.' },
      ],
      answer: 'b',
      concepts: ['rope-inspection', 'capstan-friction'],
      explanation: 'Friction is useful (Stage 7) — but its heat has to go somewhere. Nylon melts at roughly 220–260 °C, HMPE at about 150 °C.',
    },
    {
      id: 's13-l1-q3',
      kind: 'single',
      prompt: 'A person falls 3 m before the rope starts to hold, with 2 m of rope between them and the anchor. What is the fall factor?',
      choices: [
        { id: 'a', text: '1.5', why: 'Correct — $f = h/L = 3/2$.' },
        { id: 'b', text: '0.67', why: 'This inverts the ratio ($L/h$); the fall distance goes on top.' },
        { id: 'c', text: '0.6', why: 'This divides by fall plus rope ($3/5$); only the rope length goes underneath.' },
        { id: 'd', text: '1.0', why: 'This subtracts ($3 - 2$); the fall factor is a ratio, not a difference.' },
      ],
      answer: 'a',
      concepts: ['fall-factor'],
      explanation: '$f = h/L = 3/2 = 1.5$ — a severe fall. A 6 m fall on 12 m of rope ($f = 0.5$) would be much gentler.',
    },
    {
      id: 's13-l1-q4',
      kind: 'single',
      prompt: 'Paracord rated at 550 lbf (1 lbf ≈ 4.45 N) is tied with a knot that keeps about 55 % of its strength. Roughly what breaking force remains?',
      choices: [
        { id: 'a', text: '1.35 kN', why: 'Correct — $550 \\times 4.45 \\times 0.55 \\approx 1350$ N.' },
        { id: 'b', text: '2.45 kN', why: 'This is the new, knot-free strength; the knot has not been applied.' },
        { id: 'c', text: '1.10 kN', why: 'This uses the 45 % the knot loses instead of the 55 % it keeps.' },
        { id: 'd', text: '13.5 kN', why: 'A unit slip: 1350 N is 1.35 kN, not 13.5 kN.' },
      ],
      answer: 'a',
      concepts: ['cordage-strength', 'knot-efficiency'],
      explanation: '$550 \\times 4.45 \\approx 2450$ N; $\\times 0.55 \\approx 1350$ N = 1.35 kN — less than twice the weight of an 80 kg person hanging still, before any bounce.',
    },
  ],
  scenario: {
    id: 's13-l1-sc',
    setup: 'You are scrambling on a mountain route with a friend in the late afternoon. At a steep rock step you find an old, faded rope tied to a spike above, hanging down the step. The alternative is to go back the way you came: about 2 hours to the valley, with sunset in 2½ hours. Clouds are building.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Test it with a hard pull from both of you; if it holds, use it to climb the step.', why: 'A pull test proves almost nothing: UV, core damage and a rotten anchor can fail under a slip’s shock load that is far larger than your pull. The rope and anchor have unknown history.' },
      { id: 'b', text: 'Treat the rope as untrustworthy, decide the step is beyond your skills without it, and turn back now while daylight and weather allow.', why: 'Best: unknown-history rope is retired rope, and turning back is reversible. You also protect your daylight budget and stay ahead of the building clouds.' },
      { id: 'c', text: 'Climb the step without touching the rope, since it is only a few metres.', why: 'If the step needed a rope for someone, a slip there may become a fall. Climbing up something you may not be able to reverse, late in the day, raises the stakes.' },
      { id: 'd', text: 'Use it but only as a handrail for balance, not your full weight.', why: 'In a slip you will grab it with your full weight plus a shock load — handrail use becomes life-safety use in an instant.' },
    ],
    best: 'b',
    debrief: 'Found rope has unknown history: it fails the first inspection question. The decision also re-uses Stage 1 and Stage 12 logic: a turnaround time, a daylight budget, building weather and a preference for reversible choices. Terrain that needs a rope needs trained people and their own, known, equipment.',
    concepts: ['rope-inspection', 'go-no-go', 'daylight', 'reversibility'],
  },
  summary: [
    'Nylon stretches and absorbs energy; polyester stretches little; HMPE is strong but slippery and melts at ~150 °C; polypropylene rots in sunlight.',
    '**Dynamic** rope catches falls; **low-stretch** rope is for lowering, hauling and fixed lines — never for falling onto.',
    'Peak force depends on the **fall factor** $h/L$, not on the fall length.',
    'Inspect by **feel and sight**, every metre; retire for core damage, glazing, chemicals, severe falls, unknown history or age.',
    'Store clean, dry, dark and away from chemicals; dry in the shade.',
    '**Utility cord is not life-safety rope.** Anything that holds a person needs certified gear and qualified instruction.',
  ],
  furtherReading: ['freedom-hills', 'uiaa', 'rope-en-892'],
  references: ['freedom-hills', 'uiaa', 'rope-en-892', 'rope-en-1891', 'rope-mil-c-5040', 'mckenna-rope-tech', 'cordage-institute', 'rope-on-rope'],
}
