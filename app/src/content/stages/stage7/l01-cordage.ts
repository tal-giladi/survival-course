import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's7-l1',
  stage: 7,
  order: 1,
  title: 'Natural fibers and cordage',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s1-l9'],
  concepts: ['natural-fibers', 'cordage-twist', 'reverse-wrap', 'cordage-strength', 'harvest-law'],
  objectives: [
    'Name the main **fiber sources** (bast, leaf, inner bark, husk, grass) and say which make strong cord and which are only good for weaving.',
    'Explain **why twist adds strength**: fiber friction, the helix angle, and why too much twist makes cord weaker again.',
    'Explain how **reverse-wrap plying** balances torque, and make a metre of two-ply cord.',
    'Estimate breaking strength from **cross-section** ($F \\propto d^2$) and check it against a load with a safety factor.',
    'Decide when to **make** cordage and when to **use carried cord**, given time and energy.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Cord holds shelters up, food off the ground and tools to handles. Your kit (Stage 1, Lesson 9) should carry some. But cord runs out, gets cut, or is needed in more places than you planned. Natural cordage is one of the oldest human technologies: twisted plant fiber over 40,000 years old has been found. It also teaches a piece of engineering that recurs throughout this stage: **useful strength comes from structure, not only from material.**

### Fiber sources

Plants make long, strong cells to hold themselves up. Those cells are what we harvest:

| Source | Examples | Strength | Notes |
|---|---|---|---|
| **Bast (stem) fibers** | Stinging nettle, dogbane, milkweed, fireweed, hemp, flax | High | The fibers lie just under the outer skin of the stalk. **Dead autumn and winter stalks** give the best fiber and harm no living plant. |
| **Leaf fibers** | Yucca, agave (sisal), New Zealand flax, cabbage-tree | High | Scrape or pound the leaf pulp away; fibers run the full leaf length. Stiff when dry. |
| **Inner bark** | Basswood/lime, willow, cedar, elm | Medium | Strips of the soft layer under the outer bark, often **retted** (soaked for weeks until the layers separate). Fast to make but bulky. |
| **Husk and seed fibers** | Coconut coir, cotton | Medium | Coir is coarse but resists rot and salt water, which suits coastal and tropical use. |
| **Grasses, sedges, cattail leaves** | Cattail, rush, long grass | Low | Quick to twist, weak. Best for mats, baskets, lashing bundles, and tying thatch. |
| **Roots** | Spruce, pine, cedar roots | Medium | Split roots are superb for sewing bark containers (Lesson 3). |

Animal fibers (sinew, rawhide) are strong but depend on legal hunting or trapping. This course does not teach hunting or trapping (see Stage 6).`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Harvesting law: fibers, bark and plants',
      md: `Taking any plant material is regulated, and the rules differ widely between places:

- **Protected areas.** Collecting or damaging plants is usually banned in national parks and nature reserves. For example, US National Park Service regulations (36 CFR §2.1) prohibit removing plants and natural features except under specific permits.
- **Private land.** You need the landowner's permission. In Great Britain it is an offence to **uproot** any wild plant without the landowner's authorisation (Wildlife and Countryside Act 1981, s.13), and some species are fully protected.
- **Protected species.** Some species are protected everywhere they grow. Check your local red list before you harvest.
- **Living trees.** **Never ring-bark (girdle) a living tree.** Stripping a full band of bark kills it. Take inner bark only from trees already felled lawfully, from storm-fall, or with the landowner's permission.

Leave No Trace applies: take dead stalks, harvest thinly across a wide area, and leave roots in the ground.`,
    },
    { type: 'diagram', id: 's7-twist-helix', caption: 'Twist turns a loose bundle of short fibers into a structure: tension squeezes every fiber against its neighbours so friction can pass the load along.' },
    {
      type: 'md',
      md: `### Why twist adds strength

A nettle fiber bundle is perhaps 10–40 cm long, but you want a 10 m cord. The load must pass from fiber to fiber, and **the only thing that transfers it is friction**. Friction force = μ × normal force, so to grip, the fibers must be *pressed together*.

Twisting provides the press. When a twisted cord is pulled, each fiber runs as a helix. It tries to straighten, and in doing so it squeezes inward on the fibers beneath it. **The harder you pull, the harder they grip.** A twisted cord is self-tightening, much like a Chinese finger trap.

That creates a trade-off, set by the **surface helix angle** $\\alpha$ (the angle between a surface fiber and the cord's axis):

- **Too little twist (α below about 10°):** little squeeze, so fibers slide past each other. The cord "drafts" apart without any fiber breaking.
- **Too much twist (α above about 35°):** fibers run steeply across the cord, so only about $\\cos\\alpha$ of each fiber's strength points along the load. The fibers are also pre-strained by the twist itself, and the cord kinks.
- **Sweet spot around 15–28°.** This is why commercial ropes are laid at roughly 20°.`,
    },
    { type: 'diagram', id: 's7-twist-curve', caption: 'Model of relative strength against surface twist angle: grip (rising) × obliquity (falling).' },
    {
      type: 'md',
      md: `### Reverse wrap: making twist permanent

A single twisted strand stores **torque**. Let go and it untwists. Load it and it spins, loses twist, and slips. The fix is **plying** with the **reverse wrap**:

1. Take a bundle of fiber and fold it so one end is about 1/3 longer (this staggers the splices).
2. Pinch at the fold and twist the **far** ply away from you (say, clockwise).
3. Lay it over the near ply, **counter-clockwise**. That is the reverse wrap.
4. Repeat: twist the (new) far ply clockwise, wrap it counter-clockwise over the other.
5. To add fiber, lay a new tapered bundle into the thinning ply about 5 cm before it runs out, and twist it in. Stagger the splices on the two plies.

Each ply wants to untwist one way. The plying twist holds it the other way. **The torques cancel**, so the cord is balanced: it hangs without kinking and keeps its twist under load. Three-ply cord works the same way, is rounder, and wears better.`,
    },
    { type: 'diagram', id: 's7-reverse-wrap', caption: 'Plies twisted one way, wrapped the other: the two torques cancel.' },
    { type: 'sim', id: 'cordage-strength', caption: 'Try single strand against reverse wrap, then sweep the twist angle and diameter. Where does each job fail?' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Never trust hand-made cord with a person’s weight',
      md: 'Natural cordage varies metre by metre, and one thin splice sets the strength of the whole line. Use it for gear loads with generous margins. Climbing, hauling people and crossing water are for certified rope and formal training (Stage 13).',
    },
  ],
  whyItMatters: 'Cord is a force multiplier in almost every survival task: shelter, food storage, tools, splints, fishing, carrying. When yours runs out, you can make more, but it is slow. Knowing why cord is strong tells you how much to make, how thick, and which jobs it can safely do. It also tells you when a few extra metres of commercial cord in your kit are worth far more than hours of twisting.',
  science: [
    {
      type: 'md',
      md: `### Strength scales with cross-section

Every fiber in a cord's cross-section carries a share of the load, so strength is proportional to **area**, and area grows with the **square** of diameter:

$$
F_{break} \\approx \\sigma \\cdot \\frac{\\pi d^2}{4}
$$

Here $\\sigma$ is the effective strength of the finished cord in MPa (N/mm²), which is well below the strength of a single fiber because of air gaps, twist and uneven spinning, and $d$ is the diameter in mm. **Double the diameter and you get four times the strength, but you also need four times the fiber and roughly four times the work.**

**Worked example.** A well-made two-ply nettle cord has $\\sigma \\approx 50$ MPa.

- 3 mm: $A = \\pi \\times 3^2/4 = 7.1$ mm², so $F \\approx 50 \\times 7.1 \\approx 350$ N, about **36 kg**.
- 6 mm: $A = 28.3$ mm², so $F \\approx 1{,}400$ N in theory. Hand-made cord gets less even as it thickens, so expect about **1,300 N**.

For comparison, commercial 550 paracord of about 4 mm is rated about 2,400 N (550 lb), roughly 3–4× stronger than hand-made cord of the same size.

### Setting the twist

For a ply of diameter $D$ with $T$ turns per unit length, the surface helix angle is

$$
\\tan\\alpha = \\pi D T
$$

In words: one turn advances the fiber one circumference ($\\pi D$) around the cord while it travels $1/T$ along it. To get $\\alpha = 20^\\circ$ on a 1.5 mm ply: $T = \\tan 20^\\circ / (\\pi \\times 1.5) = 0.364/4.71 \\approx 0.077$ turns per mm, or **about 8 turns per 10 cm**. Thicker plies need fewer turns for the same angle.

### Check it against a load: margin, not hope

Real loads are larger than the weight you are holding:

- **Dynamic factor.** Jerks, gusts and bounces often add 30–100 %.
- **Weak points.** A knot keeps only 50–75 % of the cord's strength, and a sharp bend over a thin branch costs more (Lesson 2).
- **Safety factor.** Hand-made cord is uneven, so aim for at least **×2** on gear loads, and more where failure hurts.

**Food bag, worked through.** The bag is 5 kg, so its weight is $5 \\times 9.81 = 49$ N. Hauling it over a branch adds bark friction: the hauling side carries about 2.6× the load (Lesson 2), so 126 N. A jerk factor of 1.3 makes it 164 N. The cord bends round a 50 mm branch and keeps about 87 % of its strength there, so it needs about **190 N** of straight-cord strength just to hold. With a ×2 margin, you need about **380 N**. The 3 mm nettle cord (350 N) is marginal. A 3.5 mm cord (about 470 N) passes. Making 12 m of it at about 15 min per metre (for 3 mm cord, scaled by $d^2$) takes about **4 hours**.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest, late autumn (Europe, North America, East Asia):** dead nettle or dogbane stalks stand in damp ground and field edges. Crush a stalk, split it, snap the woody core out of the fiber skin, and roll the fibers between your palms to clean them. One armful of stalks makes a few metres of fine cord.

**Desert (south-west USA, Mexico, Mediterranean, Middle East, Australia):** yucca and agave leaves give long, strong fibers. Dead, weathered leaves are often already partly separated. Dry leaf fibers are stiff and crack at tight bends, so **soak them before plying and knotting**.

**Tropical coast:** coconut husk (coir) fibers make coarse, rot-resistant cord for lashings and fish-trap bindings. Palm-leaf strips and rattan work as lashing material.

**Boreal and subarctic:** split spruce roots dug from soft moss beds make sewing and lashing material. Willow inner bark works for quick, heavy lashings in summer. In winter, fibers are scarce and frozen, which is one more reason cord belongs in the kit.

**Mountain and alpine:** vegetation is sparse above the tree line. Plan to carry all the cord you need.

**Urban or rural disaster:** you rarely need to make fiber. Cut and unravel synthetic webbing, electrical cable, rope from sacks, strips of plastic bag or fabric, and twist them with the same reverse wrap to make them stronger and more manageable.`,
    },
  ],
  mistakes: [
    'Twisting a single strand and using it as cord: it unwinds, kinks and slips under load.',
    'Twisting the plies in the same direction as the plying: nothing balances the torque and the cord unlays.',
    '"More twist is always stronger." (Myth.) Past roughly 30° the fibers carry load at an angle and the cord weakens and kinks.',
    'Splicing both plies at the same place, which creates a thin, weak spot. Stagger splices by several centimetres.',
    'Using dry, stiff leaf or bark fiber without soaking. It cracks at every bend.',
    'Ring-barking a living tree for inner bark. This kills the tree and is illegal in many places.',
    'Spending hours making cord in the cold before shelter and warmth are sorted. Priorities come first (Stage 1).',
  ],
  exercises: [
    {
      id: 's7-l1-e1',
      title: 'Make one metre of two-ply reverse-wrap cord',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['Raffia, unravelled jute or sisal twine, or dead nettle/dogbane stalks gathered with permission', 'Bowl of water (for leaf or bark fibers)', 'Ruler'],
      steps: [
        'Prepare fibers: for stalks, crush, split, remove the woody core, and roll the fibers clean. For raffia or jute, tease it into thin, even bundles.',
        'Fold a bundle with one end about 1/3 longer. Pinch the fold.',
        'Twist the far ply clockwise until it just starts to kink, then wrap it counter-clockwise over the near ply. Repeat.',
        'Count turns: aim for about 8 per 10 cm on thin cord (about 20°). Compare a section twisted loosely with one twisted very tightly.',
        'Splice in new fiber before a ply thins, staggering splices between plies.',
        'Finish with an overhand knot, measure length and diameter, and time yourself.',
      ],
      success: ['The cord hangs without spinning or kinking.', 'The diameter stays even (±20 %) along the metre.', 'You can state your time per metre and scale it to 10 m.'],
      skill: 'cordage',
    },
    {
      id: 's7-l1-e2',
      title: 'Break-test your cord with water bottles',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Your cord', 'A sturdy hook or rail', 'A bag and 1 L water bottles', 'Luggage scale if available'],
      safetyNote: 'Hang the load a few centimetres above a soft surface so nothing falls far. Keep your feet out from under it.',
      steps: [
        'Tie the cord to the rail with a round turn and two half hitches, and hang the bag from a bowline.',
        'Add one litre (≈ 1 kg) at a time and note where the cord fails: at a knot, a splice, or mid-length?',
        'Compare your result with $F \\approx 50 \\times \\pi d^2/4$ N and the knot efficiency.',
        'Repeat with a piece deliberately made as a single strand, and with a wetted piece.',
      ],
      success: ['You recorded the failure load and failure location.', 'You can explain the difference between single strand and reverse wrap from the test.'],
      skill: 'cordage',
    },
  ],
  simulations: ['cordage-strength'],
  quiz: [
    {
      id: 's7-l1-q5',
      kind: 'single',
      prompt: 'In a dry desert you have fresh yucca leaves, and later you will tie tight knots. What is the best preparation?',
      choices: [
        { id: 'a', text: 'Use the fibers bone-dry for maximum strength', why: 'Dry leaf fiber is stiff and cracks at the tight bends of knots.' },
        { id: 'b', text: 'Extract the fibers, and soak them before plying and before knotting', why: 'Correct: water makes stiff fibers pliable, so they bend without cracking.' },
        { id: 'c', text: 'Use the whole leaf without extracting the fibers first', why: 'Pulp is weak and rots; the fiber is what carries load.' },
        { id: 'd', text: 'Char the fibers lightly over the fire to harden them', why: 'Heat and charring weaken cellulose.' },
      ],
      answer: 'b',
      concepts: ['natural-fibers', 'knot-efficiency'],
      explanation: 'Brittle dry fibers lose far more strength at knots. Basket makers and cordage makers soak material for the same reason.',
    },
    {
      id: 's7-l1-q4',
      kind: 'single',
      prompt: 'Compared with a single twisted strand, which of these is **not** something reverse-wrap plying achieves?',
      choices: [
        { id: 'a', text: 'It balances torque, so the cord does not unwind or kink', why: 'It does: ply twist and plying twist oppose each other.' },
        { id: 'b', text: 'It locks the twist in under load, so the fibers keep gripping', why: 'It does: a single strand loses twist, and so grip, as it spins under load.' },
        { id: 'c', text: 'It averages out thin spots, since the other ply backs a weak one', why: 'It does: load sharing between plies makes the cord more even.' },
        { id: 'd', text: 'It makes the individual fibers themselves stronger', why: 'Correct: the material is unchanged; only the structure improves.' },
      ],
      answer: 'd',
      concepts: ['reverse-wrap'],
      explanation: 'Plying is structural engineering: it balances torque and shares load, turning twist into lasting strength. The fibers themselves are no stronger.',
    },
    {
      id: 's7-l1-q2',
      kind: 'single',
      prompt: 'A 3 mm cord breaks at 350 N. Ignoring the small size effect, what should a **4 mm** cord of the same fiber and construction hold?',
      choices: [
        { id: 'a', text: '≈ 197 N', why: 'This uses (3/4)², the ratio upside down: a thicker cord cannot be weaker.' },
        { id: 'b', text: '≈ 467 N', why: 'This scales with diameter, 350 × 4/3. Strength follows area, which goes with d².' },
        { id: 'c', text: '≈ 622 N', why: 'Correct: 350 × (4/3)² = 350 × 1.78 ≈ 622 N.' },
        { id: 'd', text: '≈ 830 N', why: 'This uses (4/3)³, as if strength followed volume. It follows cross-section area.' },
      ],
      answer: 'c',
      concepts: ['cordage-strength'],
      explanation: 'Strength ∝ d²: 350 × (4/3)² = 350 × 1.78 ≈ **622 N**. One more millimetre gives 78 % more strength, and 78 % more fiber and work.',
    },
    {
      id: 's7-l1-q3',
      kind: 'single',
      prompt: 'Which statement about twist and cord strength is correct?',
      choices: [
        { id: 'a', text: 'Strength keeps rising the more twist you put into each ply', why: 'Past roughly 30° the fibers carry load at an angle, are pre-strained, and the cord kinks.' },
        { id: 'b', text: 'Strength peaks at roughly 15–28° of surface twist, then falls', why: 'Correct: grip rises with twist while fiber alignment falls, so there is a sweet spot.' },
        { id: 'c', text: 'Twist adds no strength; only the fiber type sets the strength', why: 'Without twist, short fibers slide past each other and the cord drafts apart.' },
        { id: 'd', text: 'Strength peaks at about 45°, where grip and alignment balance', why: 'At 45° only about cos 45° ≈ 70 % of fiber strength acts along the cord; the peak is far lower.' },
      ],
      answer: 'b',
      concepts: ['cordage-twist'],
      explanation: 'Strength rises up to roughly 15–28° of surface twist and then falls: fibers lie at a steeper angle (only ≈ cos α of their strength acts along the cord), are pre-strained, and kink.',
    },
    {
      id: 's7-l1-q6',
      kind: 'single',
      prompt: 'Where does the most, and most harmless, bast fiber come from in the temperate zone?',
      choices: [
        { id: 'a', text: 'Green summer nettle stalks pulled up by the root', why: 'Fiber is weaker in green stalks, and uprooting may be illegal (for example, in Great Britain without the landowner’s permission).' },
        { id: 'b', text: 'Dead standing stalks in late autumn and winter, cut above ground', why: 'Correct: the fiber is mature, the stalk is already dead, and the roots remain.' },
        { id: 'c', text: 'Bark stripped in a ring around a young tree', why: 'Ring-barking kills trees and is widely illegal.' },
        { id: 'd', text: 'Any plant in a national park, since it is public land', why: 'Collecting is usually prohibited in national parks.' },
      ],
      answer: 'b',
      concepts: ['natural-fibers', 'harvest-law'],
      explanation: 'The best technique is also the most sustainable one: dead stalks, cut above ground, with permission.',
    },
    {
      id: 's7-l1-q1',
      kind: 'single',
      prompt: 'What actually transfers load from one short fiber to the next in a twisted cord?',
      choices: [
        { id: 'a', text: 'Friction, from twist pressing the fibers against each other', why: 'Correct. Tension in the helical fibers squeezes the bundle, and friction grows with that squeeze.' },
        { id: 'b', text: 'Natural glue in the plant bonding neighbouring fibers', why: 'Pectins and lignin are removed during processing; cord does not rely on them.' },
        { id: 'c', text: 'Each fiber running the full length of the finished cord', why: 'Fibers are 10–40 cm long; the cord is metres long.' },
        { id: 'd', text: 'Knots at each end clamping the whole bundle together', why: 'Knots anchor the ends; they do not hold the middle together.' },
      ],
      answer: 'a',
      concepts: ['cordage-twist'],
      explanation: 'Twist → inward pressure → friction → load sharing. This is why untwisted fiber pulls apart easily.',
    },
  ],
  scenario: {
    id: 's7-l1-sc',
    setup: 'Wet temperate forest, 6 °C, 15:30, sunset at 17:45. You are benighted after a navigation error, with a tarp, a knife, a lighter, a small first-aid kit and **8 m of 550 paracord**. You need a tarp ridgeline, guy lines, and a line to hang your food bag. Dead nettle stalks grow thickly by the stream.',
    question: 'How should you use your cordage?',
    choices: [
      { id: 'a', text: 'Spend the next two hours making 15 m of nettle cord so the paracord stays spare.', why: 'Two hours of sitting still in the cold and damp, with dusk coming, reverses the priorities. Shelter and warmth come first.' },
      { id: 'b', text: 'Paracord on the ridgeline and guys, inner strands for light ties; nettle cord only once sheltered.', why: 'Best: the strongest cord goes on the highest load, the priorities are respected, and cordage-making becomes an optional extra.' },
      { id: 'c', text: 'Put the paracord on the food bag and a single twisted nettle strand on the ridgeline.', why: 'This puts the weakest line under the highest load, and a single strand unwinds and slips.' },
      { id: 'd', text: 'Skip the ridgeline and drape the tarp over bushes, saving all the paracord for later.', why: 'That is possible in calm weather, but it sheds rain and wind poorly compared with a tensioned tarp.' },
    ],
    best: 'b',
    debrief: 'Hand-made cord costs roughly 15 minutes per metre even for a practised maker, and far more for a beginner in the cold. Allocate your best cord to your worst load: a windy ridgeline sees hundreds of newtons. Split paracord gives light-duty strands. Make natural cord only once shelter and warmth are secure. This is a Stage 1 lesson too: kit redundancy (carry more cord than you think) beats improvisation under pressure.',
    concepts: ['cordage-strength', 'priorities', 'kit', 'redundancy'],
  },
  summary: [
    'Bast and leaf fibers make strong cord; inner bark is fast but weaker; grasses suit weaving.',
    'Twist creates friction by squeezing fibers together. Strength peaks at roughly 15–28° of surface twist and falls with more.',
    'Reverse-wrap plying balances torque so the twist, and the strength, stay put.',
    'Strength ∝ d², but so do fiber and time. Check real loads with dynamic factors, knot losses and a ×2+ margin.',
    'Harvest dead stalks with permission, never ring-bark trees, and never trust hand-made cord with a person’s weight.',
  ],
  furtherReading: ['wescott-primitive-tech', 'hearle-yarn-mechanics', 'kochanski-bushcraft'],
  references: ['wescott-primitive-tech', 'hearle-yarn-mechanics', 'mckenna-rope-tech', 'kochanski-bushcraft', 'lnt-principles', 'cfr-36-2-1', 'uk-wca-1981', 'spt'],
}
