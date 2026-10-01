import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's7-l2',
  stage: 7,
  order: 2,
  title: 'Knots and lashings for camp',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s7-l1'],
  concepts: ['capstan-friction', 'knot-efficiency', 'lashings', 'wind-loading'],
  objectives: [
    'Explain a knot as a **friction machine**, and use the capstan equation $T_2 = T_1 e^{\\mu\\theta}$ to see why a few turns hold large loads.',
    'Explain why **bend radius** decides where cord breaks, and rank common knots by **efficiency**.',
    'Tie **square, diagonal and tripod lashings** and explain what frapping turns do.',
    'Predict ridgeline tension from sag, $H = wL^2/(8s)$, and choose a pitch that the cord can survive.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 13 covers knots for life-safety rope. This lesson is about **camp**: tarps, food lines, tripods, frames and bundles, where the aim is holding gear securely with the least cord and the least fuss. Three engineering ideas explain nearly every camp knot and lashing.

### 1. A knot is a friction machine

Wrap cord around a post and pull one end. The cord presses on the post, friction resists sliding, and each bit of wrap passes on slightly less tension than it received. The result is **exponential**: every extra bit of wrap multiplies the holding power by the same factor. This is the **capstan equation** (below). It explains:

- why a sailor can hold a ship on a bollard with one hand;
- why a **round turn** takes most of a load before the half hitches even feel it;
- why wrapping a ridgeline twice around a tree before the knot **unloads the knot**;
- why a **clove hitch** or **timber hitch** grips a pole at all.

### 2. Cord breaks at its sharpest bend

When cord bends, the outside fibers stretch further than the inside ones, so they reach their breaking strain first. The tighter the bend relative to the cord's diameter, the worse this gets. Knots are tight bends under load, so **a knot is usually the weakest point of a line**. Knots with gentle curves (figure-eight, round turn) keep more strength than knots with sharp nips (overhand, reef).`,
    },
    { type: 'diagram', id: 's7-bend-knot', caption: 'Left: strength kept as cord bends round a pin of diameter D. Right: typical knot efficiencies. Brittle dry fibers lose even more.' },
    {
      type: 'md',
      md: `### 3. Tension multiplies when you pull sideways

Push sideways on the middle of a taut line and the tension along it rises far above your push. That one fact explains two things. **Frapping turns**, pulled between two lashed poles, crank the wraps tight. And a **flat, drum-tight ridgeline** in the wind carries several times the wind force on the tarp.

### Camp knots worth knowing

| Job | Knot | Why |
|---|---|---|
| Anchor a line to a tree | **Round turn and two half hitches** | The turn takes the load by friction; easy to untie |
| Fixed loop (food bag, guy) | **Bowline** or **figure-eight loop** | Bowline unties after loading; figure-eight is stronger and more secure |
| Adjustable guy line | **Taut-line hitch** or **trucker's hitch** | Friction you can slide; trucker's gives about 3:1 tensioning |
| Start or finish a lashing | **Clove hitch** (square), **timber hitch** (diagonal) | Grip a pole by wraps |
| Join two cords | **Sheet bend** | Works with unequal thicknesses; the reef knot does not |
| Bind a bundle | **Reef (square) knot** | Binding only: it **capsizes** when used as a bend |`,
    },
    { type: 'diagram', id: 's7-lashings', caption: 'Square lashing (poles crossing at 90°), diagonal lashing (poles that spring apart), tripod lashing (three legs).' },
    {
      type: 'md',
      md: `### Lashings

- **Square lashing:** for poles that cross and touch, such as a pack-frame cross-bar, a shelf or a ridge pole on an upright. Start with a clove hitch under the cross-bar. Make 3–4 wraps going *over* the cross-bar and *under* the upright. Then make 2–3 **frapping turns** between the poles to pull the wraps tight, and finish with a clove hitch.
- **Diagonal lashing:** for poles that cross but tend to **spring apart**, such as the X-brace of a frame. A **timber hitch** around both poles pulls them together first. Then wrap along one diagonal, wrap along the other, frap, and finish.
- **Tripod lashing:** lay three legs side by side. Weave a loose figure-eight in and out 5–8 times, frap lightly between the legs, then **spread the legs**: the spread tightens the lashing. A tripod is stable when its feet sit on a wide circle and the load hangs inside it. It is the classic pot hanger, water-filter frame and drying rack.

Lashings use many strands, so each strand carries only a small share of the load. **Thin cord is often enough.** What kills lashings is **slipping** (in stiff or slippery cord), **wear** and **loosening as fibers dry**. Soak natural cord before lashing: it tightens as it dries onto the wood, although plant fibers loosen again as they swell and shrink through wet–dry cycles. Check lashings daily.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Poles, trees and Leave No Trace',
      md: 'Cutting live saplings for poles needs the landowner’s permission, and in national parks and many public forests it is prohibited. Use dead-fall, carried trekking poles, or bought poles. Lines round trees crush and rub bark, so pad them or use a wide strap. **Dismantle every lashing** and scatter natural materials when you leave. Rules differ everywhere; check the land manager’s rules before you go.',
    },
    { type: 'sim', id: 'cordage-strength', caption: 'Pick the ridgeline job: compare a bowline with a figure-eight, a clove hitch in dry yucca, and a thicker line.' },
  ],
  whyItMatters: 'Most camp failures are cord failures: a tarp that collapses at 02:00, a food bag in the dirt, a pot tipping off a collapsing tripod into the fire. If you understand friction, bend radius and sideways tension, you pick the right knot, put the load where the cord is strongest, and pitch so the line never sees a load it cannot carry.',
  science: [
    {
      type: 'md',
      md: `### The capstan equation

A cord wrapped through an angle $\\theta$ (radians; one full turn = $2\\pi$) around a post with friction coefficient $\\mu$ can hold a load $T_2$ with a much smaller pull $T_1$:

$$
T_2 = T_1\\, e^{\\mu \\theta}
$$

In words: **each extra bit of wrap multiplies the holding power by the same factor.** The radius of the post does not appear, only the angle and the friction. Cord on bark or wood has $\\mu \\approx 0.25$–$0.4$.

| Wrap | $\\theta$ | $e^{0.3\\theta}$ |
|---|---|---|
| Half a turn (over a branch) | $\\pi$ | 2.6 |
| One turn | $2\\pi$ | 6.6 |
| Two turns | $4\\pi$ | 43 |
| Three turns | $6\\pi$ | 286 |

**Worked example.** To hold a 60 kg load (589 N) with two turns around a tree ($\\mu = 0.3$), your hand needs only $589/43 \\approx 14$ N, about **1.4 kg of pull**.

**The same physics works against you over a branch.** Hauling a 5 kg food bag (49 N) over a branch with half a wrap means pulling $49 \\times 2.6 \\approx 126$ N. That is 2.6× the bag's weight, so the hauling side of the line carries the highest load. Once the bag is up and you tie off, friction helps: the tie-off only has to hold $49/2.6 \\approx 19$ N.`,
    },
    { type: 'diagram', id: 's7-capstan', caption: 'T₂/T₁ grows exponentially with wrap angle (log scale): half a turn ≈ 2.6×, two turns ≈ 43×.' },
    {
      type: 'md',
      md: `### Bend radius

Bend a cord of diameter $d$ round a pin of diameter $D$. The outside fibers travel a longer path than the centre line, and their extra strain is roughly

$$
\\varepsilon_{extra} \\approx \\frac{d}{D + d}
$$

So the outer fibers are already partly stretched before any load arrives. A rule of thumb for how much strength remains is $\\eta \\approx 1 - 0.5/\\sqrt{D/d}$: **50 % over a pin as thick as the cord, 75 % at D/d = 4, about 90 % at D/d = 25**. A 3 mm cord over a 50 mm branch ($D/d \\approx 17$) keeps about 88 %. The same cord through a tight overhand knot, where it bends round itself ($D/d \\approx 1$), keeps about half.

### Ridgeline tension from sag

A line of span $L$ carrying a distributed load $w$ (N per metre) and sagging by $s$ at mid-span has a horizontal tension of

$$
H = \\frac{w L^2}{8 s}
$$

In words: **tension is inversely proportional to sag. Halve the sag and you double the tension.**

**Worked example.** Take a 3 × 3 m tarp in a 30 km/h wind (8.3 m/s). The dynamic pressure is $q = \\tfrac12 \\rho v^2 = 0.5 \\times 1.2 \\times 8.3^2 \\approx 42$ Pa. On 9 m² with a drag coefficient of about 0.8, and with the ridgeline taking about 35 % of the force, the ridgeline carries about **105 N**, or $w = 26$ N/m over $L = 4$ m.

- 20 cm sag (5 %): $H = 26 \\times 16 / (8 \\times 0.2) \\approx 260$ N; gusts ×1.5 → **≈ 400 N**.
- 5 cm sag, "drum-tight": $H \\approx 1{,}050$ N; gusts → **≈ 1,600 N**, enough to break most hand-made cord and many cheap cords.

This is why Stage 5 says to **pitch low, pitch sheltered, and add guy lines** rather than winching the ridgeline tighter.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest, rainy night:** a ridgeline between two trees with a round turn at one end and a trucker's hitch at the other. Drip lines (a short cord tied to the ridgeline just inside the tarp edge) stop rain running along the line into your shelter.

**Boreal winter:** stiff, frozen cord and cold fingers. Prefer knots you can untie with gloves on (slipped hitches, bowlines) over knots that jam (overhand loops). Synthetic cord stays pliable; natural cord freezes stiff when wet.

**Desert:** few trees. A tripod of dead stalks or trekking poles holds a shade sheet or a water bag. Sun and heat degrade cord (UV weakens nylon and natural fibers alike), so inspect it daily.

**Tropical:** lashings on a raised sleeping platform (Stage 5). Rattan and vine lashings shrink and tighten as they dry in the heat, but rot fast in constant damp. Rebind them every few days.

**Coastal:** salt-crusted cord is abrasive and holds moisture. Rinse it when you can. Rocks give sharp bends, so pad lines over edges.

**Urban/disaster:** lash a stretcher from two poles and a blanket (Stage 9), or a tarp to a fence with square lashings. Cable ties are quick but brittle in cold; cord is reusable.`,
    },
  ],
  mistakes: [
    'Using a reef knot to join two cords under load. It capsizes; use a sheet bend.',
    'Winching a ridgeline drum-tight "so it won’t flap". Tension rises as 1/sag, and gusts break the line or the anchor.',
    'Letting the knot take the full load when two wraps round the tree would have unloaded it.',
    'Running cord over sharp rock edges or thin branches (small D/d).',
    'Lashing without frapping turns, so the wraps stay loose and the poles rotate.',
    '"A knot you can tie fast is a good knot." (Myth.) Security under shaking matters more; clove hitches roll loose in stiff cord.',
    'Leaving lashings and cord on trees when you leave camp.',
  ],
  exercises: [
    {
      id: 's7-l2-e1',
      title: 'Lash a tripod and a square frame at home',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['Three broom handles, garden canes or dowels', '6–8 m of 3–4 mm cord', 'A bucket to hang'],
      steps: [
        'Tie a tripod lashing: three legs side by side, clove hitch, 6 loose figure-eight weaves, 2 light frapping turns, clove hitch. Spread the legs.',
        'Hang a bucket with 2 L of water from the head. Push the head gently sideways: when does it tip?',
        'Make a square frame from four sticks with square lashings (3 wraps, 2 fraps each).',
        'Rack each corner by hand. Retie one corner without frapping turns and compare the stiffness.',
      ],
      success: ['The tripod holds the bucket and resists a gentle side push.', 'The frame corners do not rotate when racked.', 'You can explain what the frapping turns did.'],
      skill: 'lashings',
    },
    {
      id: 's7-l2-e2',
      title: 'Measure the capstan effect',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['A broom handle fixed between two chairs', 'A bucket with 5 L of water (≈ 50 N)', 'Cord', 'Luggage scale'],
      safetyNote: 'Keep the bucket low over the floor.',
      steps: [
        'Hang the bucket from a cord laid over the handle (half a turn) and measure the pull needed to hold it steady with the scale.',
        'Repeat with 1, 1.5 and 2 full turns.',
        'Compute $\\mu$ from $\\mu = \\ln(T_2/T_1)/\\theta$ for each, and check that the values agree.',
        'Now measure the pull needed to **raise** the bucket over half a turn. It is higher than the load.',
      ],
      success: ['Your μ values are consistent (roughly 0.2–0.4).', 'You can explain why a food bag is hardest on the line while you haul it.'],
      skill: 'knots',
    },
  ],
  simulations: ['cordage-strength'],
  quiz: [
    {
      id: 's7-l2-q3',
      kind: 'single',
      prompt: 'Your ridgeline sags 20 cm and carries about 260 N. You winch it tight to 5 cm of sag. Roughly what tension does it carry now in the same wind?',
      choices: [
        { id: 'a', text: 'About 260 N: the wind has not changed', why: 'Tension depends on sag as well as on wind.' },
        { id: 'b', text: 'About 520 N', why: 'That is for halving the sag once; you quartered it.' },
        { id: 'c', text: 'About 1,040 N', why: 'Correct: H ∝ 1/s, so a quarter of the sag means four times the tension.' },
        { id: 'd', text: 'Less than before, because a tight line flaps less', why: 'Less flapping, but far more static tension.' },
      ],
      answer: 'c',
      concepts: ['wind-loading'],
      explanation: 'H = wL²/(8s). Tight lines look neat but multiply tension; gusts on top can snap cord or pull anchors.',
    },
    {
      id: 's7-l2-q5',
      kind: 'single',
      prompt: 'Which choice does **not** reduce the load on the knot at the anchor tree of a ridgeline?',
      choices: [
        { id: 'a', text: 'Take two full turns round the trunk before tying off', why: 'It does: two turns hold about 43× by friction, so the knot sees a fraction of the load.' },
        { id: 'b', text: 'Give the ridgeline a little more sag', why: 'It does: more sag means less tension everywhere.' },
        { id: 'c', text: 'Add guy lines to the tarp corners and edges', why: 'It does: guy lines share the wind load.' },
        { id: 'd', text: 'Swap the round turn for a reef knot at the tree', why: 'Correct: a reef knot is weaker and capsizes, and it takes away the friction turn.' },
      ],
      answer: 'd',
      concepts: ['capstan-friction', 'wind-loading', 'knot-efficiency'],
      explanation: 'Reduce the load (sag, guys), then move the load onto friction (turns) before it reaches the knot. A reef knot does neither.',
    },
    {
      id: 's7-l2-q2',
      kind: 'single',
      prompt: 'A cord fails in a test. Where is it most likely to have broken?',
      choices: [
        { id: 'a', text: 'In the middle of a long, straight section', why: 'Only if there is a flaw there. Straight cord keeps 100 % of its strength.' },
        { id: 'b', text: 'At the sharpest bend: inside a knot or over a thin edge', why: 'Correct: outer fibers are pre-strained at tight bends and reach breaking strain first.' },
        { id: 'c', text: 'Right at the anchor tree, because the tree is hardest', why: 'Hardness is not the issue; bend radius is, and a thick trunk is a gentle bend.' },
        { id: 'd', text: 'Wherever the cord has soaked up the most water', why: 'Wet plant fiber is often slightly stronger.' },
      ],
      answer: 'b',
      concepts: ['knot-efficiency'],
      explanation: 'Bend radius sets knot efficiency. That is why the figure-eight (about 75 %) beats the overhand (about 50 %).',
    },
    {
      id: 's7-l2-q1',
      kind: 'single',
      prompt: 'You hold a 400 N load with **1.5 turns** of cord round a tree, with μ = 0.3. Using $T_1 = T_2 / e^{\\mu\\theta}$, how many newtons must your hand hold?',
      choices: [
        { id: 'a', text: '≈ 23.7 N', why: 'Correct: θ = 1.5 × 2π = 9.42 rad, e^2.83 ≈ 16.9, and 400/16.9 ≈ 23.7 N.' },
        { id: 'b', text: '≈ 97.3 N', why: 'This counts 1.5 half-turns (θ = 1.5π). One full turn is 2π radians.' },
        { id: 'c', text: '≈ 255.1 N', why: 'This uses θ = 1.5 rad, forgetting to convert turns to radians.' },
        { id: 'd', text: '≈ 6,760 N', why: 'This multiplies by e^(μθ) instead of dividing: friction helps the hand, it does not add load.' },
      ],
      answer: 'a',
      concepts: ['capstan-friction'],
      explanation: 'θ = 1.5 × 2π = 9.42 rad; e^(0.3 × 9.42) = e^2.83 ≈ 16.9; 400/16.9 ≈ **23.7 N**, about 2.4 kg of pull.',
    },
    {
      id: 's7-l2-q6',
      kind: 'single',
      prompt: 'A lashing with 8 strands holds a joint loaded to 300 N. Which statement about sizing its cord is correct?',
      choices: [
        { id: 'a', text: 'Thin cord is often enough; slipping and wear are the usual failures', why: 'Correct: each strand carries only about 40 N, so tightening pull and rubbing size the cord.' },
        { id: 'b', text: 'Each strand carries the full 300 N, so use the thickest cord you have', why: 'The strands share the load: 300 N over 8 strands is about 40 N each.' },
        { id: 'c', text: 'Lashings fail by snapping, so cord diameter matters more than wraps', why: 'Snapping is rare in lashings; slipping and wear are the usual failures.' },
        { id: 'd', text: 'Extra wraps add friction but do not share the load between strands', why: 'Every wrap is another strand sharing the load.' },
      ],
      answer: 'a',
      concepts: ['lashings'],
      explanation: 'With 8 strands sharing 300 N, each carries about 40 N. The tightening pull and daily rubbing are what size the cord.',
    },
    {
      id: 's7-l2-q4',
      kind: 'single',
      prompt: 'Which sequence ties a **square lashing** correctly?',
      choices: [
        { id: 'a', text: 'Clove hitch, wraps, frapping turns, finishing clove hitch', why: 'Correct: anchor on the upright below the cross-bar, wrap 3–4 times, frap 2–3 times, then finish and tuck.' },
        { id: 'b', text: 'Wraps, clove hitch, frapping turns, finishing clove hitch', why: 'The clove hitch anchors the start; wraps without it slide loose.' },
        { id: 'c', text: 'Clove hitch, frapping turns, wraps, finishing clove hitch', why: 'Frapping turns tighten existing wraps, so they must come after them.' },
        { id: 'd', text: 'Clove hitch, wraps, finishing clove hitch, frapping turns', why: 'Frapping comes before the finish; after tying off there is no cord left to frap with.' },
      ],
      answer: 'a',
      concepts: ['lashings'],
      explanation: 'Anchor, wrap, tighten by frapping, finish. The frapping turns between the poles are what make the joint rigid.',
    },
  ],
  scenario: {
    id: 's7-l2-sc',
    setup: 'Coastal forest, 22:30. The wind is rising and forecast to gust to 50 km/h by 02:00. Your tarp is pitched high and drum-tight on a 3 mm cord ridgeline tied with bowlines. You carry 10 m of spare 4 mm cord. The tarp is snapping loudly, and you are dry and warm in your sleeping bag.',
    question: 'What is the best move now, before the gusts arrive?',
    choices: [
      { id: 'a', text: 'Tighten the ridgeline further so the tarp stops flapping and stays drum-tight in gusts.', why: 'Less sag means much more tension: this is the fastest way to break the line in a gust.' },
      { id: 'b', text: 'Pitch lower to windward, give the ridgeline sag, take two turns per tree and add guys.', why: 'Best: it cuts the wind force, the tension and the knot load all at once, while you are still dry and it is still manageable.' },
      { id: 'c', text: 'Stay in the bag and leave it as it is; deal with the tarp only if it actually fails.', why: 'Re-pitching a collapsed tarp at 02:00 in the dark, wind and rain gets you wet and cold. That is a much worse problem than getting up now.' },
      { id: 'd', text: 'Take the tarp down now and sleep in the open so nothing is left for the wind to break.', why: 'It removes the failure risk but also your rain and wind protection.' },
    ],
    best: 'b',
    debrief: 'The engineering says tension ∝ wind area × speed² ÷ sag. You control all three: pitch lower (less area in the wind), move to a sheltered spot, and allow some sag. Then put the load on friction (turns round the trunk) and share it (guy lines). The decision logic is from Stage 1: a reversible, low-cost action now prevents an irreversible problem later, getting wet in the cold in the dark.',
    concepts: ['wind-loading', 'capstan-friction', 'tarp-configs', 'reversibility'],
  },
  summary: [
    'Capstan: T₂ = T₁·e^(μθ). Holding power grows exponentially with wrap, so turns unload knots, and hauling over a branch overloads the line.',
    'Cord breaks at its sharpest bend: knot efficiency runs from about 45 % (reef) to about 75 % (figure-eight, round turn).',
    'Ridgeline tension H = wL²/(8s): halve the sag, double the tension. Pitch low and use guys instead.',
    'Square lashing for crossing poles, diagonal for poles that spring apart, tripod for three legs. Frapping turns make them rigid.',
    'Use dead-fall, pad trees, and remove all lashings when you leave.',
  ],
  furtherReading: ['ashley-knots', 'animated-knots', 'hibbeler-statics'],
  references: ['ashley-knots', 'animated-knots', 'hibbeler-statics', 'mckenna-rope-tech', 'cordage-institute', 'lnt-principles', 'freedom-hills'],
}
