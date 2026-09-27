import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's10-l3',
  stage: 10,
  order: 3,
  title: 'Frames, tripods and load carrying',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s10-l1', 's7-l2'],
  concepts: ['tripods', 'load-carriage', 'lashings', 'load-testing', 'evacuation'],
  objectives: [
    'Build a **tripod, bipod and A-frame** from poles and lashings, and explain how splay angle changes leg force and foot thrust.',
    'Choose poles by **straightness, soundness and diameter**, and test them before loading.',
    'Carry an awkward load with an **improvised pack frame or strap system**, keeping the load close to the spine.',
    'Relate improvised **stretchers** to Stage 9’s evacuation rules: team size, testing, and when not to carry.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Frames turn short, weak pieces into a structure that stands up and carries weight. Three shapes do most of the work:

- **Tripod** — three legs lashed at the head. Stands on uneven ground without guying; hangs a water bag, a food bag, a rain funnel or a lantern; frames a small shelter.
- **Bipod / shear legs** — two legs crossed at the head, held by a guy line; an A shape for lifting or for a ridge.
- **A-frame and ladder frame** — rigid triangles and rectangles braced with lashings; pack frames, stretchers, drying racks, a raised bed off wet ground.

Triangles are the key: a triangle cannot change shape without a side changing length, so it is **stiff**. A rectangle can collapse into a parallelogram unless it is **braced** with a diagonal or very firm lashings (Stage 7’s diagonal lashing exists for this reason).`,
    },
    { type: 'diagram', id: 's10-tripod-forces', caption: 'A 20 kg load on a tripod: leg force rises slowly with splay, but the outward push at the feet rises quickly.' },
    {
      type: 'md',
      md: `### Poles: the weakest link you can see

- **Sound**: dead wood that is dry and still attached to the tree, or lying clear of the ground, is usually stronger than wood rotting on the ground. **Test every pole**: stand it at an angle against a log and press your weight on it, or bend it over your knee at ground level. Sound wood rings when tapped; rotten wood is soft and punky.
- **Straight**: bends and knots concentrate stress.
- **Thick enough**: bending strength rises with the **cube** of diameter (see Science), so a slightly thicker pole is a lot stronger.
- **Carried alternatives**: trekking poles, tent poles, paddles, skis and ski poles are stiff and tested — but telescoping joints can slip, so tape or lock them and keep loads modest.

### Lashings

Stage 7 covers tripod, square and diagonal lashings. In improvised frames, most failures are **slipping lashings**, not breaking poles: finish with firm frapping turns, and let the lashing settle under a test load, then re-tighten.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Cutting live wood',
      md: 'Cutting live saplings or branches needs the landowner’s permission and is **prohibited** in most national parks and many public forests. Use fallen dead wood, carried poles or bought dowels for practice, dismantle frames and scatter natural materials when you leave (Leave No Trace). In a genuine emergency, protecting life comes first — but most practice is not an emergency.',
    },
    {
      type: 'md',
      md: `### Carrying loads

A load is easiest to carry when its **centre of mass is close to your spine and fairly high**, and its weight goes into your hips rather than hanging from your shoulders.

- **Pack frames**: two side rails and three cross-pieces lashed square make a ladder frame; padded straps (a folded jacket, a scarf) go round the top and bottom cross-pieces; a belt or cord round the lowest cross-piece becomes a hip strap. Tie the load **onto** the frame, heavy items close in.
- **No frame?** A blanket or tarp rolled round the load into a **horseshoe pack** over one shoulder and tied across the chest; a **tumpline** (a strap from the load across the forehead or upper chest), long used by porters in many cultures, needs neck conditioning and is best for short distances.
- **Snow and ice**: drag rather than carry — a pack or duffel on a tarp or a plastic sledge with a rope harness round the waist.
- **Carrying another person’s kit** after an injury is often a bigger job than carrying the person; spread it across the group.

### Stretchers and litters

Stage 9 teaches the carry itself: when to carry and when to wait, **six carriers plus relief**, and the fact that a litter moves at only about 1 km/h on good ground. The improvisation part is the frame: **two long, sound rails** (about 2 m or more), a strong **bed** (a tarp folded in thirds round the rails, several jackets zipped over them with the sleeves inside, or a door or ladder in a city), **padding and insulation** underneath the casualty, and **releasable** straps. Test it with a heavy pack or sandbag, never with a person first.`,
    },
    { type: 'diagram', id: 'improvised-litter', caption: 'From Stage 9: a pole-and-tarp litter. Test with a sandbag, not a friend; never on hazardous ground.' },
    { type: 'diagram', id: 's10-pack-frame', caption: 'A ladder frame, and why a load close to the spine is easier to carry.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Carrying people is a last resort',
      md: 'Carrying a casualty over rough ground is slow, exhausting and can injure carriers and patient. Move someone only as far as safety requires (out of rockfall, water, traffic), then call for help and care for them where they are, unless Stage 9’s evacuation decision says otherwise. Take a hands-on WFA/WFR course before relying on these skills.',
    },
    { type: 'sim', id: 'improvise-challenge', caption: 'Try “Move a casualty 300 m”: rails, bed, padding and straps each need a different property.' },
  ],
  whyItMatters: 'Many improvisation problems are structural: getting food and water off the ground, keeping a shelter or rain catcher up, carrying more than a pack was designed for, or moving an injured person out of danger. Knowing why triangles are stiff, why feet slide, and why a load far from the spine is exhausting lets you build things that stand and carry — and recognise when a structure will not do the job.',
  science: [
    {
      type: 'md',
      md: `### Tripod forces

For a symmetric tripod with a load $W$ hanging from the head, each leg carries a third of the load, tilted by the splay angle $\\theta$ from vertical. The compression in each leg is

$$
F_{leg} = \\frac{W}{3\\cos\\theta}
$$

and each foot pushes **outward** along the ground with

$$
H = \\frac{W \\tan\\theta}{3}.
$$

**Worked example.** A 20 kg water bag weighs $W \\approx 196$ N. At $\\theta = 20°$: $F_{leg} = 196 / (3 \\times 0.94) \\approx 70$ N and $H = 196 \\times 0.36 / 3 \\approx 24$ N. At $\\theta = 45°$: $F_{leg} \\approx 92$ N but $H \\approx 65$ N — nearly three times the outward push. Wide tripods are stable against tipping but their feet slide on hard or icy ground: dig the feet in, rest them against stones, or tie them together with a cord.

### Pole diameter and bending

A pole loaded across its length (a litter rail, a pack-frame cross-piece, a ridge) fails in **bending**. For a solid round section, bending strength is proportional to the section modulus $S = \\pi d^3 / 32$, so it grows with the **cube** of the diameter $d$. A 5 cm pole is $(5/4)^3 \\approx 1.95$ times as strong as a 4 cm pole of the same wood. Wood is also far weaker across the grain, and knots and rot reduce strength sharply (Wood Handbook).

### Load placement: turning moment

A load of mass $m$ whose centre of mass sits a distance $d$ behind your back creates a turning moment $M = m g d$ that your back and shoulder muscles must resist. For $m = 12$ kg: at $d = 0.25$ m, $M = 12 \\times 9.81 \\times 0.25 \\approx 29$ N·m; at $d = 0.10$ m, $M \\approx 12$ N·m. Same mass, less than half the effort to stay upright — the reason heavy items go close to the spine.

A common backpacking rule of thumb is to keep a loaded pack to about a fifth of body weight for long walks. It is a guide, not a physiological limit, but loads well above it slow you down and raise the risk of falls and injury.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** A tripod of dead poles hangs the group’s 10 L water bag clear of dirt and animals; the feet are pushed into soft ground and the head lashing re-tightened after the first load.

**Mountain.** Two trekking poles and a guy line form shear legs that lift the front of a tarp, giving head room without a tree. Joints are taped so they cannot telescope under load.

**Desert.** With no trees on the gravel flat, a tripod of trekking poles and a paddle holds a shade cloth, and a water bottle wrapped in a damp cloth hangs in the breeze, cooled by evaporation from the cloth.

**Tropical.** A raised platform of lashed poles keeps sleeping gear off wet ground and away from ants; rectangles are braced with diagonals so the platform does not rack sideways.

**Arctic.** After a knee injury, the injured skier’s pack is dragged on a tarp sledge with a waist harness; the group keeps carrying loads light enough to move steadily and stay warm.

**Urban.** After an earthquake, a door with blankets and belts serves as a stretcher; the team tests it with sandbags, then uses six carriers to reach the triage point.

**Coastal.** A driftwood A-frame braced with a diagonal supports a signal flag high above the dunes (Stage 14) and a rain catcher below it.`,
    },
  ],
  mistakes: [
    'Using rotten dead wood from the ground without testing it.',
    'Splaying tripod legs wide on hard or icy ground without anchoring the feet.',
    'Building rectangles without diagonal bracing, then watching them rack sideways.',
    'Hanging heavy loads far from the spine on an improvised frame.',
    'Starting a long litter carry with too few people, or testing a litter with a person first.',
    'Myth: “A tripod is strongest with its legs spread as wide as possible.” It resists tipping better, but foot thrust rises steeply — the feet slide.',
    'Myth: “Any pole thick enough to look strong is safe.” Hidden rot, knots and cracks decide; test at ground level.',
  ],
  exercises: [
    {
      id: 's10-l3-e1',
      title: 'Lash a tripod and measure its limits',
      level: 2,
      safety: 'home',
      minutes: 45,
      materials: ['Three broom handles or 1.5 m dowels', '6 m of 3–4 mm cord', 'A bag with 5 L of water', 'Tape measure'],
      steps: [
        'Tie a tripod lashing (Stage 7) and hang the water bag from the head.',
        'Set the legs at about 20° from vertical on a smooth floor; then widen to about 40°. Note when the feet start to slide.',
        'Tie a cord round the three feet and repeat. What changes?',
        'Push the head gently sideways at each angle: when does it tip?',
      ],
      success: ['You found the angle where the feet slide, and fixed it with a foot tie.', 'You can explain the trade-off between tipping and sliding.'],
      skill: 'lashings',
      safetyNote: 'Keep the load low; move feet and hands clear before pushing.',
    },
    {
      id: 's10-l3-e2',
      title: 'Carry an awkward load',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A blanket or small tarp', 'Cord or belts', 'An awkward load of about 8–10 kg (e.g., a bag of firewood or water bottles)'],
      steps: [
        'Carry the load 200 m in your arms. Note the effort.',
        'Roll it into a horseshoe pack in the blanket, tie the ends, and carry it over one shoulder, tied across the chest.',
        'Build a simple frame (or use a rucksack) and tie the load close to your back, heavy items high and close. Carry again.',
        'Compare effort, stability and hands-free time.',
      ],
      success: ['You carried the load hands-free and stable.', 'You can explain why the frame version was easier.'],
      skill: 'improvise',
      safetyNote: 'Lift with your legs; stay on easy ground.',
    },
    {
      id: 's10-l3-e3',
      title: 'Litter build and sandbag test (team)',
      level: 3,
      safety: 'supervised',
      minutes: 90,
      materials: ['Two sound poles of about 2.2 m', 'A 2 × 3 m tarp', 'Straps or cord', 'Sandbags or a heavy pack (about 40 kg total)', 'Six people'],
      steps: [
        'Fold the tarp in thirds round the rails; add a foam pad on top.',
        'Load with sandbags and lift together on a clear count. Check for slipping and sag.',
        'Carry 50 m on flat ground, swapping carriers on command.',
      ],
      success: ['The litter held without slipping.', 'The team swapped carriers smoothly.'],
      skill: 'fa-improvised-litter',
      safetyNote: 'Never practise with a live person on the litter over uneven ground, slopes or water. Supervised practice only; take a WFA/WFR course for patient handling.',
    },
  ],
  simulations: ['improvise-challenge'],
  quiz: [
    {
      id: 's10-l3-q1',
      kind: 'numeric',
      prompt: 'A 15 kg food bag hangs from a tripod whose legs are 30° from vertical. What is the **outward thrust** at each foot? (Use g = 9.81 m/s², tan 30° ≈ 0.577.)',
      unit: 'N',
      answer: 28.3,
      tolerance: 1.5,
      concepts: ['tripods'],
      explanation: '$W = 15 \\times 9.81 \\approx 147$ N; $H = 147 \\times 0.577 / 3 \\approx 28$ N.',
    },
    {
      id: 's10-l3-q2',
      kind: 'single',
      prompt: 'Your tripod stands on smooth rock and the feet slowly slide apart under load. What is the best fix?',
      choices: [
        { id: 'a', text: 'Spread the legs wider for more stability', why: 'Wider splay increases foot thrust — it will slide more.' },
        { id: 'b', text: 'Tie the three feet together with a cord (or chock them with stones) and reduce the splay a little', why: 'Correct — the cord takes the outward thrust.' },
        { id: 'c', text: 'Add more frapping turns at the head', why: 'Helps the lashing, not the sliding feet.' },
        { id: 'd', text: 'Use thicker legs', why: 'Leg strength is not the problem.' },
      ],
      answer: 'b',
      concepts: ['tripods'],
      explanation: 'Foot thrust $H = W \\tan\\theta / 3$: reduce θ or give the feet something to push against.',
    },
    {
      id: 's10-l3-q3',
      kind: 'single',
      prompt: 'Two dead poles look equally sound. One is 4 cm thick, the other 6 cm. Roughly how much stronger in bending is the thicker one?',
      choices: [
        { id: 'a', text: '1.5 times', why: 'That is the diameter ratio; strength scales with its cube.' },
        { id: 'b', text: 'About 2.25 times', why: 'That is the square; bending strength goes with the cube.' },
        { id: 'c', text: 'About 3.4 times', why: 'Correct — $(6/4)^3 = 3.375$.' },
        { id: 'd', text: 'The same, if the wood is the same', why: 'Diameter matters a great deal.' },
      ],
      answer: 'c',
      concepts: ['material-properties'],
      explanation: 'Section modulus $S = \\pi d^3/32$: a little more diameter buys a lot of bending strength.',
    },
    {
      id: 's10-l3-q4',
      kind: 'multi',
      prompt: 'You must carry an extra 12 kg of an injured partner’s gear. Which choices reduce the strain?',
      choices: [
        { id: 'a', text: 'Tie heavy items high and close to your spine', why: 'Yes — less turning moment.' },
        { id: 'b', text: 'Hang the heavy items from the back of the pack on long cords', why: 'No — far from the spine and swinging.' },
        { id: 'c', text: 'Add a hip strap so the weight goes to the hips', why: 'Yes — legs and hips carry loads better than shoulders.' },
        { id: 'd', text: 'Share the load across the group', why: 'Yes — lighter loads, steadier pace.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['load-carriage'],
      explanation: '$M = m g d$: keep $d$ small; transfer to hips; share.',
    },
    {
      id: 's10-l3-q5',
      kind: 'truefalse',
      prompt: 'An improvised litter should first be tested with a sandbag or heavy pack, not with a person.',
      answer: true,
      concepts: ['load-testing', 'evacuation'],
      explanation: 'Test at ground level with an inanimate load; a failed litter drops a patient.',
    },
    {
      id: 's10-l3-q6',
      kind: 'single',
      prompt: 'Why does a square frame of four poles need a diagonal brace?',
      choices: [
        { id: 'a', text: 'Rectangles can rack into parallelograms without any side changing length', why: 'Correct — a diagonal divides it into rigid triangles.' },
        { id: 'b', text: 'To make it heavier and more stable', why: 'Weight is not the point.' },
        { id: 'c', text: 'Because square lashings are weak', why: 'Even good lashings can rotate; the geometry is the issue.' },
        { id: 'd', text: 'It does not; four good lashings are enough', why: 'Lashings can rotate under side load.' },
      ],
      answer: 'a',
      concepts: ['lashings'],
      explanation: 'Triangles are rigid; rectangles are not.',
    },
  ],
  scenario: {
    id: 's10-l3-sc',
    setup: 'Late afternoon in a mountain forest. A member of your group of seven has an injured ankle and cannot bear weight. You are on a slope below a small cliff where stones fall occasionally; there is flat, sheltered ground 150 m away. A rescue team has been called by satellite messenger and should arrive in about 4 hours. It is 9 °C and will be dark in 90 minutes.',
    question: 'What should you do?',
    choices: [
      { id: 'a', text: 'Build a litter and start carrying her 6 km down to the road before dark', why: 'A long carry with seven people, into darkness, when rescue is already coming — slow, exhausting and risky.' },
      { id: 'b', text: 'Build a litter from two tested dead poles and a tarp, test it with packs, carry her the 150 m to the flat ground, then insulate her, make shelter and wait for the team', why: 'Best: moves only as far as safety requires (out of rockfall), tests the structure first, and then prioritises warmth and waiting for help.' },
      { id: 'c', text: 'Leave her where she is; moving casualties is always wrong', why: 'Rockfall is an immediate danger — a short, careful move is justified.' },
      { id: 'd', text: 'Two people support her to hop the 150 m', why: 'Hopping on a slope with an injured ankle risks a fall and a second injury; a litter is safer here.' },
    ],
    best: 'b',
    debrief: 'Stage 1’s immediate-danger rule justifies a short move; Stage 9’s evacuation logic says wait for the team that is already coming; this lesson makes the move safe: sound rails, a strong bed, and a sandbag test before a person goes on. Once there, warmth and ground insulation matter most (Stage 8).',
    concepts: ['evacuation', 'immediate-danger', 'load-testing', 'stay-or-move'],
  },
  summary: [
    '**Triangles** are rigid; brace rectangles with diagonals.',
    'Tripod: $F_{leg} = W/(3\\cos\\theta)$, foot thrust $H = W\\tan\\theta/3$ — anchor the feet when splayed.',
    'Poles: sound, straight, thick enough — bending strength rises with **diameter cubed**. Test at ground level.',
    'Carry loads **close to the spine**, into the hips; share heavy loads.',
    'Litters: rails, bed, padding, releasable straps; **sandbag test**; move people only as far as safety needs.',
  ],
  furtherReading: ['kochanski-bushcraft', 'nols-wm-book', 'fpl-wood-handbook'],
  references: ['kochanski-bushcraft', 'afh-10-644', 'army-atp-3-50-21', 'fpl-wood-handbook', 'hibbeler-statics', 'nols-wm-book', 'nols-wm', 'lnt-principles'],
}
