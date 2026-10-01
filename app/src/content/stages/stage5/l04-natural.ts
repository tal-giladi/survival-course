import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's5-l4',
  stage: 5,
  order: 4,
  title: 'Natural shelters',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s5-l1'],
  concepts: ['natural-shelter', 'reflector-fire', 'shelter-volume', 'effort-budget'],
  objectives: [
    'Explain how a **debris hut** keeps you warm without a fire or sleeping bag — and why thickness, size and dryness decide whether it works.',
    'Estimate the **material and time** a natural shelter needs, and decide whether it fits your daylight.',
    'Design a **lean-to with a fire and reflector** and know when it is and is not worth the fuel.',
    'Evaluate **natural features** — overhangs, caves, fallen trees, boulders, tree canopy — for both their shelter and their hazards.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A natural shelter replaces carried kit with **materials and time**. It can be superb — a well-built debris hut is warmer than many tents — but it is expensive: hours of work, lots of material, and an unforgiving relationship with rain and daylight. The design method from Lesson 1 still applies; only the materials change.

### The debris hut

A debris hut is a small, body-sized frame buried under a very thick pile of dry leaves, grass, needles or bracken. It is essentially **a sleeping bag made of forest**.`,
    },
    { type: 'diagram', id: 'debris-hut', caption: 'Debris hut: a small frame, an arm-deep pile of debris, a thick bed inside and a door plug.' },
    {
      type: 'md',
      md: `Principles, in order of importance:

1. **Small.** The inside should be only just big enough to wriggle into. Every extra centimetre is air to warm.
2. **Thick.** Pile debris until it is roughly an arm’s length (60–90 cm) deep everywhere. A useful test: from inside in daylight, you should see *no* light through the walls. Then add more — it settles.
3. **Dry and shedding.** Steep sides shed rain; a final layer of sticks or bark on top stops wind scattering the leaves. In steady rain, thin debris leaks — thickness is also your roof.
4. **Bed inside.** Fill the inside with dry debris too, and lie on (and partly in) it. The ground still takes heat.
5. **Door plug.** Pull a bundle of debris or your pack into the entrance after you.
6. **Structure.** A sound ridgepole about 1.5 × your height, one end on a stump, rock or forked support at roughly hip height, the other on the ground; ribs leaning against it close enough that debris does not fall through. Test it by leaning on it before you pile anything on.

### When it is — and isn’t — the right choice

The debris hut shines where **dry debris is abundant and close**, you have **several hours of light**, and you have **no tarp or sleeping bag**. It fails when material is scarce (the hut ends up thin), when everything is soaked, when time runs out (half a hut is not half as warm — it is much colder), and in the humid tropics (wet debris, insects, snakes). With a tarp in your pack, a tarp plus a thick bed is usually the better use of the same time.`,
    },
    {
      type: 'md',
      md: `### Lean-to with fire and reflector

A **lean-to** — a ridgepole between two trees with poles leaning on it, thatched with boughs laid like roof shingles from the bottom up — is open on one side. On its own it is cold. With a **long fire** parallel to the opening about a metre away and a **reflector** of stacked dead logs behind the fire, it becomes a heated room: the fire’s radiant heat reaches you directly and bounces back off the reflector and the sloping roof.`,
    },
    { type: 'diagram', id: 'reflector-leanto', caption: 'Lean-to, long fire and reflector: radiant heat arrives from the fire and the reflector.' },
    {
      type: 'md',
      md: `The catch is **fuel**. A fire that keeps you warm all night in the cold burns a large pile of dead wood — gathering it can take longer than building the shelter, and you must wake to feed it. Plan fuel before dark; if you cannot gather enough, build an insulated shelter instead. And the fire must be **legal, safe and controlled** (Stage 3): clear the ground, keep it away from the roof, and never have a fire inside or right next to a debris hut — it is a pile of tinder.

### Natural features

| Feature | Offers | Hazards and checks |
|---|---|---|
| **Rock overhang / shallow cave** | Instant roof, wind break, dry ground | Rockfall (fresh scars, loose blocks); animals and their dens; flooding of floors and channels; **not** lightning shelter (currents can arc across the opening); cold rock floors need a thick bed |
| **Deep cave** | Stable temperature | Getting lost, falls, flooding, bats (rabies, fungal spores); do not go beyond the daylight zone |
| **Fallen tree / root plate** | Ready-made wall and roof support | Root plates can topple back; trunks can roll or settle; other dead trees nearby may fall the same way |
| **Big boulder** | Wind break, reflector for a fire | Is it below a cliff? Check for rockfall scars and the runout fan |
| **Dense conifer canopy** | Blocks the sky (radiation), rain and snow; dry needle duff | Dead lower branches; snow-loaded branches dumping; deep **tree wells** in snow country |
| **Thicket / hedge** | Wind break, materials | Insects, ticks, thorns; animal trails |

A natural feature is a **head start**, not a shelter. You still need a bed, rain protection and a hazard check.`,
    },
    { type: 'sim', id: 'shelter-builder', caption: 'Build a debris hut at the leafy bench in the forest, then try the same at the ridge where debris is scarce. Watch the build time.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Materials and Leave No Trace',
      md: 'Cutting live trees and boughs, stripping bark and building structures are prohibited in many parks and reserves, and gathering large amounts of leaf litter or dead wood can be too. Practise only where the landowner allows it, use **dead and down** material, and dismantle and scatter everything afterwards. Fire rules (bans, permits, seasons) apply to reflector fires — see Stage 3 and the References page for jurisdiction portals. In a genuine emergency, survival comes first.',
    },
  ],
  whyItMatters: 'Knowing how to turn a forest into insulation is a genuine survival skill for when kit is lost, damaged or never carried. Knowing its cost is just as important: people have used their last light on half-finished natural shelters when a simpler option would have kept them warmer. Natural features save hours — or kill, when their hazards are ignored.',
  science: [
    {
      type: 'md',
      md: `### Why an arm’s length of leaves works

Loose, dry leaves trap still air. Allowing for gaps and some wind penetration, take an effective conductivity $k \\approx 0.06$ W/(m·K). A 70 cm pile gives

$$
R = \\frac{d}{k} = \\frac{0.7}{0.06} \\approx 12\\ \\text{m}^2\\text{·K/W}
$$

Over roughly 6 m² of wall, the conductance through the walls is only $UA = 6/12 \\approx 0.5$ W/K. The real losses are **air leakage** (gaps, the door) — perhaps 2–4 W/K — and the ground. With about 50 W of your heat warming the air inside:

$$
\\Delta T \\approx \\frac{50}{0.5 + 3} \\approx 14\\ ^\\circ\\text{C}
$$

A hut with only 20 cm of debris has $R \\approx 3.3$, wall $UA \\approx 1.8$ W/K, and — more importantly — gaps everywhere and rain coming through. Thin huts fail by leakage and water, not just by conduction.

### Estimating the work

Pile volume ≈ wall area × thickness. For a one-person hut with about 6 m² of wall at 0.7 m thick: $6 \\times 0.7 = 4.2$ m³ of debris, plus ~0.5 m³ for the bed inside. If one armful is about 0.05 m³, that is roughly **95 armfuls**. At 1 minute per armful when debris is within a few metres, about 1½ hours for the pile alone; if you have to walk 30 m for each armful, double or triple it. **Material within reach decides whether a debris hut is possible before dark.**

### Radiant heat from a fire

Radiant flux from a fire falls off with distance: roughly with the square of the distance for a small fire, more slowly for a long fire you lie parallel to (closer to $1/d$). That is why the fire is long, close (about 1 m) and parallel to the bed, and why a reflector behind it — sending back heat that would otherwise radiate away from you — and a sloping roof above you both help. Only a small fraction of the fire’s total output reaches you; the rest heats the sky, which is why fires for warmth are so fuel-hungry.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate deciduous forest, autumn.** The debris hut’s home: dry leaves everywhere. A first-timer should expect several hours; practise on a dry day first.

**Boreal forest.** Spruce boughs make a springy bed and shingle thatch for a lean-to; snow can bank the walls. A lean-to with a reflector fire is a classic northern-forest technique where fires are allowed.

**Desert.** Rock overhangs and boulders give shade in minutes — check for rockfall, and for snakes and scorpions in the crevices before you sit. Debris is scarce; natural shelter means *terrain*.

**Tropical forest.** Big leaves and palm fronds make excellent shingle thatch on a steep lean-to or A-frame over a raised bed (Lesson 6). A debris hut on the ground would be wet, full of insects and possibly occupied.

**Mountain.** Boulder fields provide wind breaks and bivouac spots; loose blocks and rockfall runouts demand a careful look up. Above the treeline, the "natural shelter" is a hollow in the lee of rocks with all your kit under you.

**Coast.** Driftwood makes frames and windbreaks; check that stacked logs cannot roll, and stay above storm-tide debris lines.`,
    },
  ],
  mistakes: [
    'Building the debris hut too big: it cannot be heated by one body.',
    'Stopping when the pile “looks thick”. If you can see light through it, it is far too thin — and it will settle.',
    'Forgetting the bed inside the hut.',
    'Starting a debris hut with an hour of light and no material nearby.',
    'A fire inside, or right next to, a debris hut.',
    'A lean-to without enough fuel for the whole night.',
    'Sheltering under an overhang or in a cave mouth during a lightning storm; treating a rock shelter as safe without checking for rockfall.',
    'Myth: "a small fire inside a snow or debris shelter is a good way to keep warm." Fire risk, smoke and carbon monoxide make it dangerous.',
  ],
  exercises: [
    {
      id: 's5-l4-e1',
      title: 'Build, test and dismantle a debris hut',
      level: 3,
      safety: 'outdoor',
      minutes: 240,
      materials: ['Gloves', 'Watch', 'A partner', 'Warm clothes for testing'],
      steps: [
        'Get permission for a site with abundant dead leaves and fallen sticks.',
        'Choose a safe spot (look up, upstream, down, around). Build a ridgepole frame sized to your body and test it with your weight.',
        'Add ribs, a lattice of twigs, then debris until no light shows from inside. Count armfuls and time yourself.',
        'Build a thick bed inside and a door plug. Lie inside for 30 minutes on a cool day and note cold spots.',
        'Dismantle completely and scatter the materials.',
      ],
      success: ['No light visible from inside.', 'You recorded the time and armfuls, and can estimate whether you could build one before dark.'],
      skill: 'natural-shelter',
      safetyNote: 'Do not sleep in a practice hut alone; check for ticks afterwards; never light a fire near it.',
    },
    {
      id: 's5-l4-e2',
      title: 'Model hut heat test',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['Two identical mugs of warm water', 'Thermometer', 'A shoebox or small frame of sticks', 'Crumpled paper, dry leaves or cloth scraps'],
      steps: [
        'Put one mug in the open and one under a small frame covered with a 3 cm layer of crumpled paper. Record both every 10 minutes.',
        'Repeat with a 10 cm layer, then with a 10 cm layer but a big hole on one side.',
        'Rank the results: thickness vs leakage.',
      ],
      success: ['You measured slower cooling with thicker cover.', 'You observed how much a gap (leakage) spoils a thick layer.'],
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l4-q1',
      kind: 'single',
      prompt: 'A debris hut needs about **4.5 m³** of leaves. One armful is about **0.05 m³** and takes **1.5 min** to gather and place. How long does the leaf pile take?',
      choices: [
        { id: 'a', text: '135 min', why: 'Correct — 4.5 ÷ 0.05 = 90 armfuls × 1.5 min.' },
        { id: 'b', text: '90 min', why: 'That is the number of armfuls, not minutes — it forgets the 1.5 min per armful.' },
        { id: 'c', text: '60 min', why: 'This divides the 90 armfuls by 1.5 instead of multiplying.' },
        { id: 'd', text: '13.5 min', why: 'This slips a decimal: 4.5 ÷ 0.05 is 90, not 9.' },
      ],
      answer: 'a',
      concepts: ['effort-budget', 'natural-shelter'],
      explanation: '4.5 / 0.05 = 90 armfuls × 1.5 min = **135 min** — over two hours before the frame and bed. If sunset is in 90 minutes, this is the wrong shelter.',
    },
    {
      id: 's5-l4-q2',
      kind: 'single',
      prompt: 'Inside your finished debris hut in daylight, you can see small spots of light through the walls. What does it mean?',
      choices: [
        { id: 'a', text: 'It is well ventilated — good', why: 'Those gaps are leaks for warm air and paths for rain.' },
        { id: 'b', text: 'The walls are much too thin; keep piling', why: 'Correct — light through means air and water through. Arm-deep is the target, and it settles.' },
        { id: 'c', text: 'The frame is too big for the pile', why: 'Possibly too, but the visible light says thickness first.' },
        { id: 'd', text: 'Nothing; debris huts are always leaky', why: 'A good one is not.' },
      ],
      answer: 'b',
      concepts: ['natural-shelter', 'shelter-volume'],
      explanation: 'Leakage, not conduction through leaves, is what cools a thin hut. Pile until no light shows — arm-deep, allowing for settling.',
    },
    {
      id: 's5-l4-q3',
      kind: 'single',
      prompt: 'Which of these is **NOT** a real hazard of sheltering under a **rock overhang**?',
      choices: [
        { id: 'a', text: 'Rockfall from the roof or the cliff above', why: 'A real hazard — check for fresh scars and loose blocks.' },
        { id: 'b', text: 'Lightning currents arcing across the opening', why: 'A real hazard — shallow overhangs are not lightning shelter.' },
        { id: 'c', text: 'Animals such as snakes or scorpions using it already', why: 'A real hazard — dens, nests, snakes, scorpions.' },
        { id: 'd', text: 'The rock radiates heat and makes you too warm at night', why: 'Correct — not a hazard: cold rock is more often a heat sink; you still need a bed.' },
      ],
      answer: 'd',
      concepts: ['site-hazards', 'natural-shelter'],
      explanation: 'A natural feature is a head start, not a finished shelter — run the full hazard check: rockfall, lightning, animals and water running down the rock or through the floor.',
    },
    {
      id: 's5-l4-q4',
      kind: 'single',
      prompt: 'When is a lean-to with a reflector fire the best option (assuming fires are permitted and you have time to gather fuel)?',
      choices: [
        { id: 'a', text: 'A windy, rainy night with little dead wood', why: 'Rain and wind blow into the open side and the fire struggles; little fuel means a cold night.' },
        { id: 'b', text: 'A cold, calm, dry night with plenty of dead wood', why: 'Correct — all the ingredients for a warm open shelter are present.' },
        { id: 'c', text: 'A clear, hot desert night after a scorching day', why: 'You do not need a heated room; shade and air flow matter by day.' },
        { id: 'd', text: 'Any cold night when you have no tarp with you', why: 'Without the fuel, a lean-to is one of the coldest designs.' },
      ],
      answer: 'b',
      concepts: ['reflector-fire', 'fire-safety'],
      explanation: 'The fire is the heater; the lean-to and reflector only direct its heat. It needs a cold, calm, dry night, abundant fuel, permission and time to gather — no fuel, no warmth.',
    },
    {
      id: 's5-l4-q5',
      kind: 'single',
      prompt: 'Which statement about using fire to warm a debris hut is correct?',
      choices: [
        { id: 'a', text: 'Never light one inside: the hut is dry tinder, and smoke and CO build up.', why: 'Correct — a debris hut is a pile of dry tinder around your body, in an enclosed space.' },
        { id: 'b', text: 'A small fire inside is safe if you keep it to a handful of dry twigs.', why: 'Any flame inside sits in a pile of dry tinder, and still makes smoke and carbon monoxide.' },
        { id: 'c', text: 'A fire inside is safe as long as you leave the door open for the smoke.', why: 'An open door does not stop the leaves catching or carbon monoxide building up.' },
        { id: 'd', text: 'A fire inside is fine once you damp the nearby leaves down with water.', why: 'Wet leaves lose their insulation, and the rest of the hut is still dry tinder.' },
      ],
      answer: 'a',
      concepts: ['fire-safety', 'natural-shelter'],
      explanation: 'A debris hut is a pile of dry tinder around your body, and fire in an enclosed space adds smoke and carbon monoxide. Never — keep any fire at a safe distance outside.',
    },
  ],
  scenario: {
    id: 's5-l4-sc',
    setup: 'Late autumn beech forest, 15:00, dark at 17:15. Your pack (with tarp and sleeping bag) was lost crossing a stream. You have your clothes, a knife and a lighter. Forecast: dry, 1 °C, light wind. Fires are permitted in emergencies here. Deep dry leaf litter covers the slope; there are plenty of fallen branches.',
    question: 'What is your plan for the remaining light?',
    choices: [
      { id: 'a', text: 'A small, tight debris hut, starting now: arm-deep pile, thick inside bed, a fire at a safe distance.', why: 'Best: 2¼ hours with abundant close material is enough for a proper hut; the night is dry, so leaves stay insulating. The fire (not next to the hut) is for morale and warming up while working.' },
      { id: 'b', text: 'A roomy lean-to thatched with boughs, then gather firewood for the night if time allows.', why: 'Without a whole night’s fuel gathered, an open lean-to at 1 °C will be very cold.' },
      { id: 'c', text: 'Find a big fallen tree and sleep in its lee with no other construction, saving energy.', why: 'A useful windbreak, but no insulation below or around you: a long, shivering night.' },
      { id: 'd', text: 'Walk out tonight to find the car while you still have some daylight and energy left.', why: 'Dark in 2 hours, wet feet, no light kit: a classic way to become lost and hypothermic. Stay-or-move favours staying.' },
    ],
    best: 'a',
    debrief: 'No carried insulation, abundant dry debris, enough daylight and a dry forecast: this is exactly when the debris hut earns its cost. Keep it small, pile until no light shows, bed inside, plug the door. A fire at a safe distance helps you while working but is not the heater — the hut is.',
    concepts: ['natural-shelter', 'effort-budget', 'stay-or-move', 'daylight'],
  },
  summary: [
    'A debris hut is a forest sleeping bag: small, arm-deep, dry, bed inside, door plugged.',
    'Leakage and water, not conduction, make thin huts fail. No light through the walls.',
    'Count the cost: material within reach and hours of light decide whether it is possible.',
    'A lean-to is only warm with a well-fuelled fire and reflector — plan the fuel first; never fire in or beside a debris hut.',
    'Natural features are head starts: check overhangs, caves, fallen trees and boulders for their hazards.',
  ],
  furtherReading: ['kochanski-bushcraft', 'iol-bushcraft', 'karamat'],
  references: ['kochanski-bushcraft', 'iol-bushcraft', 'karamat', 'army-atp-3-50-21', 'afh-10-644', 'nws-lightning', 'lnt-principles', 'usfs-fire'],
}
