import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's7-l5',
  stage: 7,
  order: 5,
  title: 'Stone, bone and antler',
  level: 'advanced',
  minutes: 45,
  prerequisites: ['s7-l4'],
  concepts: ['conchoidal-fracture', 'knapping-safety', 'bone-tools', 'eye-injury', 'harvest-law'],
  objectives: [
    'Explain **conchoidal fracture**: why glassy stone breaks in shell-shaped curves and gives edges sharper than steel.',
    'Use **platform angle** and strike position to predict whether a flake detaches.',
    'Apply the **flintknapping safety controls** for eyes, lungs, cuts, bystanders and waste, and explain why first practice is supervised.',
    'Describe how **bone and antler** differ from stone as materials, and the groove-and-splinter and grinding methods.',
    'Follow the **law on collecting** stone, artifacts, bone and antler.',
  ],
  explanation: [
    {
      type: 'md',
      md: `For more than 3 million years, stone was humanity's cutting technology. Today a modern knife beats it for everyday work, so this lesson is less "make an arrowhead" and more **materials science you can see**: why some stones break predictably, why their edges are so sharp, and what that means for your safety, even if all you ever do is pick up a broken bottle in an emergency.

### Which stone works

Knappable stone is **brittle, fine-grained and uniform** (nearly isotropic): it has no preferred planes of weakness. Examples:

- **Obsidian** (volcanic glass): the most predictable and sharpest, and the most dangerous to work.
- **Flint and chert** (microcrystalline quartz): the classic tool stone of Europe, the Middle East and North America. Heat treatment makes some cherts easier to work (an advanced, fire-based technique; learn it on a course).
- **Quartzite, fine basalt, jasper**: harder to control.
- **Glass** from bottles: behaves like obsidian, and is where many modern knappers practise, with the same safety rules.

Coarse or layered rock (granite, sandstone, slate) does not flake conchoidally. It crumbles or splits. Sandstone is useful as an **abrader** for grinding bone and sharpening.`,
    },
    { type: 'diagram', id: 's7-conchoidal', caption: 'A blow near the edge of a platform under 90° starts a Hertzian cone; the crack turns down the face and releases a flake with a bulb of percussion.' },
    {
      type: 'md',
      md: `### Conchoidal fracture

Strike a block of glassy stone a few millimetres in from an edge, and the stress under the hammer starts a **Hertzian cone** crack, the same cone a stone pops out of a car windscreen. Near an edge, one side of the cone breaks out, and the crack **turns** and runs **roughly parallel to the face**, guided by the stress field. A flake detaches with tell-tale features: a **bulb of percussion** below the strike point, concentric **ripples**, and a feather-thin edge.

Three controls decide success:

1. **Platform angle** (between the striking surface and the face you want the flake to come off): must be **under 90°**, typically 60–80°. At 90° or more the crack cannot turn out through the face and just crushes the edge.
2. **Where you strike:** a few millimetres in from the edge. Too far in makes a thick flake or nothing; too close crushes the edge.
3. **Support and follow-through:** the core is held on a padded thigh or in a padded hand, so the flake can leave.

**Methods:** *hard-hammer percussion* (a hammerstone, for big flakes), *soft-hammer* (antler billet, for thinner, longer flakes), *pressure flaking* (an antler tine pushed on the edge, for fine retouch), and **bipolar percussion** (the core set on an anvil stone and struck from above). Bipolar percussion needs little skill and produces usable sharp flakes from small pebbles. In an emergency it is the realistic method, and it is also the most likely to send fragments flying.`,
    },
    { type: 'diagram', id: 's7-knapping-ppe', caption: 'Every hazard has a control. The first sessions are supervised, with an experienced knapper.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Flintknapping is supervised practice',
      md: `- **Eyes:** flakes and tiny spalls leave the core at speed. **Impact-rated safety glasses** (ANSI Z87.1 / EN 166) for the knapper *and* anyone watching. Sunglasses are not enough. If a fragment enters an eye: do not rub it, do not try to remove an embedded object, rinse loose grit with clean water, cover and get medical help (Stage 9).
- **Lungs:** knapping and grinding flint, chert and quartzite release fine **crystalline silica** dust. Long-term exposure causes silicosis, an irreversible lung disease (OSHA and NIOSH). Knap **outdoors**, upwind; never sweep dry. Wet-wipe and use a P2/N95 respirator for long sessions. Obsidian dust is also harmful to breathe.
- **Hands and legs:** a thick leather pad on your thigh and in your palm; leather gloves on the holding hand; long trousers and closed shoes. Edges can be a few nanometres thin, sharper than a steel scalpel, and cut deeply without much pain at first.
- **Bystanders and pets:** keep them 2–3 m away with glasses on.
- **Waste (debitage):** knap onto a tarp and bury or dispose of the shards safely. Razor-sharp flakes on a path cut feet and paws for years.
- **First aid:** keep a kit on hand and make sure your tetanus vaccination is up to date.

Learn with a knapping club, a primitive-skills school or an experimental-archaeology group before working alone.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Stone, artifacts, bone and antler: collecting law',
      md: `- **Archaeological artifacts** (arrowheads, flakes, worked bone) are protected in most countries. In the US, collecting them on federal land breaks the Archaeological Resources Protection Act (ARPA); many other nations have similar heritage laws. **Look, photograph, leave.**
- **Your own modern flakes can mislead archaeologists.** Knap onto a tarp, keep or bury your waste away from sites, and never leave replica points in the landscape.
- **Rocks and minerals** in national parks and reserves are protected (for example, 36 CFR §2.1 in US national parks). Some public lands allow limited personal collecting of obsidian or chert with rules; check first.
- **Bone and antler:** use butcher bones or legally obtained material. Collecting shed antlers is banned in some parks and seasonally regulated elsewhere, and many animal parts from protected species are illegal to possess.`,
    },
    {
      type: 'md',
      md: `### Bone and antler

Bone is a **composite**: stiff mineral crystals (hydroxyapatite) embedded in tough, flexible collagen. Antler is similar but has more collagen, which makes it **tougher**: it absorbs impact without shattering, so it makes excellent billets, pressure flakers, wedges and handles. Neither flakes like stone. You shape them by:

- **Groove-and-splinter:** saw two parallel grooves along a long bone with a stone flake (or hacksaw), then lever out the strip between them.
- **Grinding** on wet sandstone to shape points, awls and needles. Grind wet: bone dust is an irritant and fresh material carries bacteria.
- **Soaking** antler for days softens it enough to carve.

Classic bone tools include **awls** (for punching holes to sew bark and hide), **needles**, **scrapers**, **fish gorges** (only where fishing is legal and licensed, Stage 6), and **wedges**. Clean bones by simmering and drying them before you work them.`,
    },
  ],
  whyItMatters: 'Understanding fracture is how you read broken glass, stone and ceramics in any emergency, whether you want an edge or need to avoid one. It also shows why modern tools matter: a steel knife in your kit replaces hours of risky, skilled work. When you do practise stone and bone crafts, the safety controls turn an eye-, lung- and hand-hazardous activity into a reasonable hobby.',
  science: [
    {
      type: 'md',
      md: `### Why glassy stone is weak and sharp at the same time

Brittle materials break at tiny flaws, because stress concentrates at a crack tip. Griffith's result says a crack of length $a$ grows when the applied stress $\\sigma$ reaches

$$
\\sigma_c = \\frac{K_{IC}}{\\sqrt{\\pi a}}
$$

$K_{IC}$ is the **fracture toughness**, the material's resistance to crack growth. In words: **the longer the existing flaw, the lower the stress needed to break the material.**

**Worked example.** Obsidian and glass have $K_{IC} \\approx 0.75$ MPa·√m. With a 1 mm flaw ($a = 0.001$ m): $\\sigma_c = 0.75/\\sqrt{\\pi \\times 0.001} = 0.75/0.056 \\approx$ **13 MPa**. Structural steel has $K_{IC} \\approx 50$ MPa·√m or more, which is 60× tougher. With the same flaw it needs more than 800 MPa.

That low toughness is exactly what makes knapping possible: a controlled blow grows one crack along a predictable path. Because there are no grains to stop it, the crack leaves a surface smooth at the molecular scale, and the edge where two such surfaces meet can be only nanometres thick. The same physics makes the edge fragile. It chips as soon as it meets bone or grit, so stone edges are resharpened constantly.

### Platform angle as a force balance

Think of the blow as a force $F$ at the edge. The flake detaches when the component of stress that can open a crack running out through the face is large enough. For a platform angle $\\theta$ above about 90°, the path through the face is longer than a path straight down into the core. The crack takes the easier route, and you crush the edge instead of removing a flake. Knappers therefore **prepare the platform**: they grind or abrade it to remove overhangs, and they choose points where the angle is acute.

### Bone vs stone

| Property | Flint/obsidian | Cortical bone | Antler |
|---|---|---|---|
| Stiffness (GPa) | ~70 | ~15–20 | ~7–10 |
| Fracture toughness (MPa·√m) | ~0.7–1.5 | ~2–7 | higher still |
| Behaviour | Shatters, very sharp | Tough, grindable | Very tough, absorbs impact |

Stone gives the sharpest edges but is brittle. Bone and antler give tough points, awls and hammers.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert (south-western USA, Middle East, Sahara, Australian arid zone):** chert, jasper and chalcedony are common in dry washes. It is also where ancient flake scatters are most visible and most protected. Photograph them, never collect.

**Temperate Europe:** chalk-country flint nodules. In emergencies, a flint flake is a serviceable cutting edge for cordage and food. Your kit knife is better.

**Volcanic regions (Pacific North-west, East Africa, Mediterranean islands, New Zealand):** obsidian. Treat any freshly broken piece as broken glass.

**Arctic/subarctic:** stone is often frozen and covered in snow. Bone and antler tools, needles and awls for sewing skin clothing were central to Arctic survival. The engineering lesson for today is that tough materials matter for tools that must not shatter in the cold.

**Coastal:** beach pebbles of flint or chert can be bipolar-flaked. Shells ground on sandstone make scrapers.

**Urban/disaster:** broken glass is the most common "knapped stone" you will meet. Its edges are just as sharp. Wear gloves and eye protection clearing debris (Stage 16). A glass shard can cut cord in an emergency. Wrap one end in tape or cloth as a handle.`,
    },
  ],
  mistakes: [
    'Knapping without impact-rated eye protection, or letting onlookers stand close without it.',
    'Knapping indoors or sweeping dry dust: repeated silica exposure is a lung hazard.',
    'Holding the core on a bare thigh or in a bare palm.',
    '"Obsidian flakes are safe once knapping stops." (Myth.) Debitage stays razor-sharp indefinitely. Collect it on a tarp.',
    'Picking up "arrowheads" found on public land, which is often illegal and destroys archaeological context.',
    'Striking with the platform angle at 90° or more, which crushes the edge instead of removing a flake.',
    'Heating stones or treating chert in a fire without training: spalls and burns.',
  ],
  exercises: [
    {
      id: 's7-l5-e1',
      title: 'First knapping session with an experienced knapper',
      level: 3,
      safety: 'supervised',
      minutes: 120,
      materials: ['Impact-rated safety glasses (for everyone present)', 'Leather thigh pad and palm pad; leather glove', 'Hammerstone or antler billet; pressure flaker', 'Tarp for debitage', 'First-aid kit', 'Practice material supplied by the club (glass or legal flint/chert)'],
      safetyNote: 'Only with an experienced knapper, outdoors or in a well-ventilated space, with PPE on everyone present. Children and pets away. Collect all waste.',
      steps: [
        'Set up: tarp down, pads on, glasses on everyone, first-aid kit open, upwind position.',
        'Identify platforms: measure or estimate angles and choose ones under 90°.',
        'Remove 5–10 flakes by percussion; examine each for the bulb, ripples and termination.',
        'Pressure-flake one edge of a flake into a straight, even scraper edge.',
        'Collect all debitage from the tarp into a sealed container for safe disposal.',
      ],
      success: ['You can predict before each blow whether it will detach a flake, and explain the misses.', 'No injury; every piece of waste collected.'],
      skill: 'flintknapping',
    },
    {
      id: 's7-l5-e2',
      title: 'Groove-and-splinter a bone awl',
      level: 3,
      safety: 'home',
      minutes: 120,
      materials: ['A clean, simmered and dried butcher’s bone (e.g. a lamb or deer metapodial)', 'Hacksaw or stone flake', 'Wet sandstone or coarse whetstone', 'Dust mask and safety glasses', 'Bench vice or clamp'],
      safetyNote: 'Clamp the bone, never hold it in your hand while sawing. Grind wet and wear a dust mask. Cut away from your body.',
      steps: [
        'Clamp the bone. Saw two parallel grooves 5–8 mm apart along its length, deepening them until they reach the marrow cavity.',
        'Lever out the strip between the grooves with a wooden wedge.',
        'Grind the strip wet on the stone into a tapered point, rotating it for a round section.',
        'Test it by punching holes in birch bark or leather for sewing (Lesson 3).',
      ],
      success: ['The awl pierces bark without breaking.', 'You can explain why bone is tougher than stone.'],
      skill: 'improvise',
    },
  ],
  quiz: [
    {
      id: 's7-l5-q1',
      kind: 'single',
      prompt: 'You strike the edge of a flint core where the platform angle is about 100°. What most likely happens?',
      choices: [
        { id: 'a', text: 'A long, thin flake detaches', why: 'That needs an acute angle, so the crack can turn out through the face.' },
        { id: 'b', text: 'The edge crushes and no flake comes off', why: 'Correct: at 90° or more, the crack cannot turn out through the face.' },
        { id: 'c', text: 'The core splits in half along a plane', why: 'Flint has no planes; that is how layered rock behaves.' },
        { id: 'd', text: 'Nothing: flint cannot be broken by hand', why: 'It can, with a correct angle and strike.' },
      ],
      answer: 'b',
      concepts: ['conchoidal-fracture'],
      explanation: 'Platform angle under 90° (typically 60–80°) is the first requirement for a flake.',
    },
    {
      id: 's7-l5-q2',
      kind: 'numeric',
      prompt: 'Using $\\sigma_c = K_{IC}/\\sqrt{\\pi a}$, what stress (MPa) breaks glass with $K_{IC}$ = 0.75 MPa·√m if it has a **4 mm** flaw? (One decimal.)',
      unit: 'MPa',
      answer: 6.7,
      tolerance: 0.3,
      concepts: ['conchoidal-fracture'],
      explanation: '√(π × 0.004) = √0.01257 = 0.112; 0.75/0.112 ≈ **6.7 MPa**, half the strength with a 1 mm flaw. Four times the flaw, half the strength.',
    },
    {
      id: 's7-l5-q3',
      kind: 'multi',
      prompt: 'Which controls belong in **every** knapping session?',
      choices: [
        { id: 'a', text: 'Impact-rated glasses for the knapper and everyone watching', why: 'Yes: flakes travel at speed in any direction.' },
        { id: 'b', text: 'Outdoors or well ventilated, no dry sweeping', why: 'Yes: crystalline silica dust.' },
        { id: 'c', text: 'Leather pads on the leg and palm', why: 'Yes: lacerations are the most common injury.' },
        { id: 'd', text: 'A tarp to catch and dispose of debitage', why: 'Yes: sharp waste injures people and animals later.' },
        { id: 'e', text: 'Sunglasses instead of safety glasses in bright sun', why: 'No: most sunglasses are not impact-rated.' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['knapping-safety', 'eye-injury'],
      explanation: 'Eyes, lungs, hands, bystanders and waste: each has a control.',
    },
    {
      id: 's7-l5-q4',
      kind: 'single',
      prompt: 'A flake enters your partner’s eye while knapping and seems embedded. What is correct?',
      choices: [
        { id: 'a', text: 'Try to pick it out with tweezers', why: 'Never remove an embedded object from the eye in the field.' },
        { id: 'b', text: 'Have them rub it until it comes out', why: 'Rubbing drives sharp fragments deeper.' },
        { id: 'c', text: 'Do not rub or remove it; protect the eye from pressure, cover both eyes if possible to limit eye movement, and get medical care urgently', why: 'Correct: this is current first-aid practice for penetrating eye injury.' },
        { id: 'd', text: 'Wait a day to see if it improves', why: 'Penetrating eye injuries need urgent care.' },
      ],
      answer: 'c',
      concepts: ['eye-injury', 'knapping-safety'],
      explanation: 'Loose grit may be irrigated gently; anything embedded is stabilised and evacuated (Stage 9). Prevention (impact-rated glasses) is far better.',
    },
    {
      id: 's7-l5-q5',
      kind: 'truefalse',
      prompt: 'Antler makes a better hammer (billet) than flint because its collagen-rich structure is tougher and absorbs impact without shattering.',
      answer: true,
      concepts: ['bone-tools'],
      explanation: 'Toughness (resistance to crack growth), not hardness, is what a hammer needs.',
    },
    {
      id: 's7-l5-q6',
      kind: 'single',
      prompt: 'On a desert hike on public land you find a scatter of worked chert flakes and a broken point. What should you do?',
      choices: [
        { id: 'a', text: 'Collect the point as a souvenir', why: 'Often illegal (e.g. ARPA on US federal land) and destroys archaeological context.' },
        { id: 'b', text: 'Photograph it, note the location, leave it undisturbed and report it to the land manager', why: 'Correct.' },
        { id: 'c', text: 'Use the flakes to practise knapping', why: 'Still removing or altering artifacts.' },
        { id: 'd', text: 'Pile the flakes so others can find them', why: 'Moving them destroys the context archaeologists read.' },
      ],
      answer: 'b',
      concepts: ['harvest-law'],
      explanation: 'Look, photograph, leave, report. The same ethic applies to modern waste: never scatter your own flakes.',
    },
  ],
  scenario: {
    id: 's7-l5-sc',
    setup: 'A rainy weekend at a primitive-skills meetup. A newcomer, in shorts and with no glasses, sits in a crowded tent knapping obsidian on his bare knee to stay out of the rain. Two children sit a metre away, watching. Shards are collecting on the groundsheet.',
    question: 'What is the best intervention?',
    choices: [
      { id: 'a', text: 'Let him continue: he is learning, and obsidian is easy to work.', why: 'Eyes, legs, children and a confined, dusty space make this an injury waiting to happen.' },
      { id: 'b', text: 'Pause him politely. Move the session to a ventilated, covered spot outdoors, with glasses on everyone, leather pads, children 2–3 m back, and a tarp to catch debitage; then clean the groundsheet carefully with gloves.', why: 'Best: it removes every hazard, keeps the learning going, and deals with the shards already scattered.' },
      { id: 'c', text: 'Give only the children sunglasses.', why: 'Sunglasses are not impact-rated, and the knapper’s own eyes, legs and lungs are unprotected.' },
      { id: 'd', text: 'Tell him to wear gloves and carry on in the tent.', why: 'One control out of five. Eyes, dust and bystanders remain.' },
    ],
    best: 'b',
    debrief: 'Knapping hazards are well understood, so the controls are simple: eyes, lungs, cuts, bystanders, waste. A friendly, early intervention (the Stage 15 group-leadership habit) prevents the irreversible outcome of a penetrating eye injury. Shards in a groundsheet will cut someone later, so clear them as part of the fix.',
    concepts: ['knapping-safety', 'eye-injury', 'risk'],
  },
  summary: [
    'Conchoidal fracture: fine, uniform, glassy stone breaks along a controllable curved crack, giving nanometre-thin edges.',
    'A flake needs a platform angle under 90°, a strike a few mm in from the edge, and support.',
    'Low fracture toughness (σ_c = K_IC/√(πa)) makes glassy stone easy to shape and quick to chip.',
    'Safety: impact-rated glasses for all, outdoors against silica dust, leather pads, bystanders back, debitage collected. Supervised learning.',
    'Bone and antler are tough composites: groove-and-splinter and wet grinding. Collect nothing archaeological; obey collecting laws.',
  ],
  furtherReading: ['whittaker-flintknapping', 'wescott-primitive-tech', 'osha-silica'],
  references: ['whittaker-flintknapping', 'wescott-primitive-tech', 'osha-silica', 'niosh-silica', 'arpa-1979', 'cfr-36-2-1', 'nols-wm-book', 'spt'],
}
