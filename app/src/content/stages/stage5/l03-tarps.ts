import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's5-l3',
  stage: 5,
  order: 3,
  title: 'Tarp configurations',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s5-l1'],
  concepts: ['tarp-configs', 'wind-loading', 'shelter-types', 'wet-wind'],
  objectives: [
    'Choose between **A-frame, lean-to, diamond and wedge** pitches for a given wind, rain, fire and time situation.',
    'Pitch for **wind**: orientation, height, tension order and anchors.',
    'Use $F = \\tfrac12\\rho C_d A v^2$ and $T \\approx PL/(4s)$ to explain why low pitches survive storms and drum-tight ridgelines break.',
    'Prevent the common water failures: pooling, wicking along lines and splash.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A single tarp of about 3 × 3 m with a dozen tie-out points and 15–20 m of cord is the most versatile shelter you can carry. Its weakness is also its strength: it has no fixed shape, so **you** decide how it meets the weather.

### Four core pitches`,
    },
    { type: 'diagram', id: 'tarp-pitches', caption: 'Four core pitches and how each meets the wind.' },
    {
      type: 'table',
      head: ['Pitch', 'Strengths', 'Weaknesses', 'Use it when…'],
      rows: [
        ['**A-frame**', 'Rain protection on both sides; symmetric, forgiving if the wind swings 90°; easy', 'Open ends funnel wind if aligned with it; needs two anchors for the ridgeline', 'Rain with variable wind; the default'],
        ['**Lean-to**', 'Fastest; huge open side for a fire’s radiant heat; good view out', 'Wind or rain on the open side goes straight in; big volume; big sail area', 'Steady wind from one side, dry-ish night, fire allowed'],
        ['**Diamond** (flying diamond)', 'One corner low into the wind, one high: sheds wind well, quick with one tree or pole', 'Small protected floor; exposed if the wind shifts', 'Solo, quick, one anchor available'],
        ['**Wedge** (closed low end)', 'Low, closed end into the wind; very storm-worthy; small volume', 'Less headroom and floor; needs care in setup', 'Strong wind from a known direction, rain, cold'],
      ],
    },
    {
      type: 'md',
      md: `### Pitching in wind

1. **Decide the worst wind of the night** (forecast, cloud movement, terrain) and orient for it — the closed or low side faces it.
2. **Pitch low.** Less height means less sail area, slower air near the ground and less volume to keep warm. In real storms, go lower than feels comfortable.
3. **Anchor the windward side first**, then the ridgeline, then the lee side. A tarp half-pitched with its open side to a gust becomes a kite.
4. **Tension evenly and moderately.** A tarp that flaps wears out cords and knots and keeps you awake; one that is bar-tight has no give when a gust hits (see the science).
5. **Use adjustable hitches** (e.g., a taut-line or trucker’s hitch) so you can re-tension as nylon stretches when wet or cold — and quick-release knots so you can re-pitch in the dark.
6. **Anchors:** trees and roots; stakes angled away from the load; in sand or snow bury a stick, stuff-sack of sand/snow or a rock as a **deadman** crosswise to the pull.

### Keeping the water out

- **No flat spots.** Water pools, the pool stretches the fabric, the stretch makes a deeper pool. Each 1 cm of water over 1 m² weighs 10 kg.
- **Drip lines.** Water runs along a ridgeline and guy-lines into your shelter. Tie a short cord or a twist of cloth to each line just outside the tarp so drips fall off there.
- **Splash and run-off.** Pitch the edges low on the weather side; choose a slight rise (Lesson 2) so run-off passes you.
- **Condensation.** Your breath adds several hundred grams of water overnight. A little ventilation at the ends keeps it from raining inside on cold nights.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Speed is a safety feature',
      md: 'A pitch you can do in 5 minutes with cold hands in the dark is worth more than a perfect one that takes 30. Practise until the A-frame and your storm pitch are automatic — then practise again with gloves and a headlamp.',
    },
    { type: 'sim', id: 'shelter-builder', caption: 'In the forest, pitch a lean-to on the ridge with its open side facing west and a high pitch. Then turn it round and pitch it low.' },
    {
      type: 'callout',
      tone: 'law',
      md: 'Tying to trees, staking and camping outside designated sites are regulated in many parks; some require tree-friendly straps or prohibit attaching anything to trees. Check the land manager’s rules before you practise, and leave no trace of the pitch.',
    },
  ],
  whyItMatters: 'Most tarp failures in storms are not fabric failures. They are orientation, height, tension and anchor failures: a lean-to open to the rain, a high A-frame that flogs itself apart, a drum-tight ridgeline that snaps, a stake pulled from soft ground at 2 a.m. Knowing the forces lets you pitch for the storm you will get, not the evening you see.',
  science: [
    {
      type: 'md',
      md: `### Wind force

The force of wind on a surface grows with the **square of the wind speed**:

$$
F = \\tfrac12\\,\\rho\\,C_d\\,A\\,v^2
$$

In words: force = ½ × air density × a shape factor × the area facing the wind × speed squared. Air density $\\rho \\approx 1.2$ kg/m³; $C_d \\approx 1.2$ for a flat sheet facing the wind.

**Worked example.** A 3 × 3 m tarp pitched as a high lean-to presents roughly its full 9 m² to a 50 km/h (13.9 m/s) wind:

$$
F \\approx 0.5 \\times 1.2 \\times 1.2 \\times 9 \\times 13.9^2 \\approx 1\\,250\\ \\text{N}
$$

— about the weight of 125 kg, shared by a few stakes and cords. Pitch it low and edge-on so it presents a third of the area, and the force drops to about 400 N. **Double the wind speed and the force quadruples**; gusts are what break things.

### Ridgeline tension

A line of span $L$ carrying a load $P$ at its middle, sagging by $s$, pulls on its anchors with a tension of about

$$
T \\approx \\frac{P\\,L}{4\\,s}
$$

In words: the flatter the line, the harder it pulls. With $P = 200$ N (the sideways push of a gust, or about 20 kg of wet snow or pooled water), $L = 4$ m:

- sag 20 cm: $T \\approx 200 \\times 4 / 0.8 = 1\\,000$ N
- sag 5 cm: $T \\approx 4\\,000$ N — more than the rated breaking strength of "550" paracord (550 lb ≈ 2.4 kN), and knots weaken cord further.

So **a ridgeline needs some sag and some give**. Bar-tight looks professional and fails in a storm. A little elasticity (a bungee, a stretchy guy-line or simply less pre-tension) absorbs gusts.

### Water load

Water weighs 1 kg per litre; 1 cm of water over 1 m² is 10 L = 10 kg ≈ 100 N. A 50 × 50 cm puddle 3 cm deep is already 7.5 kg sitting on one patch of fabric — and it grows as the fabric stretches. Slope every panel.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest, autumn gale from the west.** Wedge or low A-frame with the closed/low end to the west, both long edges almost to the ground, pack plugging the windward gap. Drip lines on the ridgeline.

**Mountain, above the trees.** No anchors high enough: trekking poles or sticks at the ends, rocks as deadmen, and a very low A-frame or wedge. Or simply wrap the tarp around you as a bivy on a thick layer of your kit.

**Boreal forest, calm −15 °C, fire allowed.** A lean-to facing a long fire with a reflector (Lesson 4) — the one situation where the big open side is an advantage.

**Desert.** The tarp becomes shade: raised high enough for air to flow, edges not sealed, ideally doubled (Lesson 6). Sand anchors: bury stuff-sacks or sticks as deadmen.

**Tropics.** A steep A-frame over a hammock or raised bed sheds downpours; wide overhangs keep splash out; tie drip lines on every line that reaches the tarp.

**Coastal.** Sand and shingle hold stakes poorly — use deadmen and driftwood; salt wind is relentless, so go low and edge-on.`,
    },
  ],
  mistakes: [
    'Pitching the open side of a lean-to toward the wind (or the rain).',
    'Pitching high and roomy in wind — a sail, not a shelter.',
    'Tensioning the ridgeline bar-tight: in a gust the tension multiplies and something breaks.',
    'Leaving flat panels that collect a pond by midnight.',
    'No drip lines, so water wicks along the cords onto your bed.',
    'Staking the lee side first, then fighting the tarp as the wind fills it.',
    'Never practising in the dark or with cold hands.',
  ],
  exercises: [
    {
      id: 's5-l3-e1',
      title: 'Four pitches against the clock',
      level: 3,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Tarp (≈3 × 3 m)', '15–20 m of cord', '6–8 stakes', 'Watch'],
      steps: [
        'Where it is allowed, pitch an A-frame, a lean-to, a diamond and a wedge. Time each.',
        'For each, stand on the windward side and decide whether the orientation is right for today’s wind.',
        'Pour a cup of water on a flat-looking panel. Does it pool? Fix the slope until it runs off.',
        'Add drip lines to the ridgeline and test them with water.',
        'Repeat your two best pitches at dusk with gloves on.',
      ],
      success: ['Each pitch under 10 minutes; your storm pitch under 7.', 'No pooling; drip lines shed water outside the shelter.'],
      skill: 'tarp-pitch',
    },
    {
      id: 's5-l3-e2',
      title: 'Measure ridgeline tension',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['2 m of string', 'A luggage scale or spring balance', 'A 1–2 kg weight (a water bottle)', 'Two sturdy chairs or posts', 'Ruler'],
      steps: [
        'Tie the string between the chairs through the luggage scale.',
        'Hang the bottle at the middle. Record the sag and the tension reading.',
        'Tighten the line to halve the sag. Record again. Repeat once more.',
        'Compare your readings with $T \\approx PL/(4s)$.',
      ],
      success: ['Tension roughly doubles when the sag halves.', 'You can explain why a slightly slack ridgeline survives gusts better.'],
      skill: 'knots',
      safetyNote: 'Stand to the side — a snapping line or slipping knot can whip.',
    },
  ],
  simulations: ['shelter-builder'],
  quiz: [
    {
      id: 's5-l3-q4',
      kind: 'single',
      prompt: 'A storm with 60 km/h gusts from the west is forecast for 02:00. Which of these choices is **NOT** sound?',
      choices: [
        { id: 'a', text: 'A wedge with the low closed end facing west', why: 'Sound — small sail area, closed to the wind.' },
        { id: 'b', text: 'Stake the west (windward) side first', why: 'Sound — the tarp cannot fill with wind while you work.' },
        { id: 'c', text: 'Tension the ridgeline as hard as you can', why: 'Correct — this is the mistake: no give means huge peak tension in a gust.' },
        { id: 'd', text: 'Use adjustable hitches to re-tension in the night', why: 'Sound — wet nylon stretches.' },
      ],
      answer: 'c',
      concepts: ['tarp-configs', 'wind-loading'],
      explanation: 'For a storm: pitch low, closed to the wind, windward edge first, with moderate tension and adjustable hitches. A drum-tight ridgeline (or a high pitch) is what fails in the gusts.',
    },
    {
      id: 's5-l3-q3',
      kind: 'single',
      prompt: 'Cold, dry, calm boreal night; fires are permitted and you have plenty of dead wood. Which pitch makes best use of it?',
      choices: [
        { id: 'a', text: 'Wedge, closed end to the fire', why: 'It would block the fire’s radiant heat.' },
        { id: 'b', text: 'Lean-to facing a long fire (with a reflector behind the fire)', why: 'Correct — the open side lets radiant heat in; calm air keeps smoke and sparks predictable.' },
        { id: 'c', text: 'Diamond with the low corner to the fire', why: 'Blocks most of the radiant heat.' },
        { id: 'd', text: 'A-frame with the fire at one end', why: 'Only a sliver of radiant heat reaches you through an end.' },
      ],
      answer: 'b',
      concepts: ['tarp-configs', 'reflector-fire'],
      explanation: 'Lean-to + fire is a system: the fire provides the heat, the tarp and reflector direct it. Without the fire it is one of the coldest pitches.',
    },
    {
      id: 's5-l3-q6',
      kind: 'single',
      prompt: 'Which is the right order of steps for pitching an A-frame in a rising wind?',
      choices: [
        { id: 'a', text: 'Orient for the worst wind → low ridgeline → windward edge → lee edge → drip lines', why: 'Correct — decide first, windward before lee so the tarp never fills, details last.' },
        { id: 'b', text: 'Low ridgeline → orient for the worst wind → windward edge → lee edge → drip lines', why: 'Orientation must be decided before the ridgeline goes up, or you re-rig it in the wind.' },
        { id: 'c', text: 'Orient for the worst wind → low ridgeline → lee edge → windward edge → drip lines', why: 'Staking the lee first leaves the windward edge free to fill like a sail while you work.' },
        { id: 'd', text: 'Orient for the worst wind → low ridgeline → drip lines → windward edge → lee edge', why: 'Drip lines are a detail; secure both edges before the wind rises further.' },
      ],
      answer: 'a',
      concepts: ['tarp-configs'],
      explanation: 'Decide orientation first; rig the ridgeline low; stake windward before lee so the tarp never fills; add drip lines and check for flat spots last.',
    },
    {
      id: 's5-l3-q2',
      kind: 'single',
      prompt: 'Gusts rise from 30 km/h to 60 km/h. By what factor does the wind force on your tarp increase?',
      choices: [
        { id: 'a', text: '4 times', why: 'Correct — force scales with $v^2$, and $2^2 = 4$.' },
        { id: 'b', text: '2 times', why: 'This assumes force grows in step with speed; it grows with the square.' },
        { id: 'c', text: '8 times', why: 'This cubes the speed ratio; force scales with $v^2$, not $v^3$.' },
        { id: 'd', text: 'About 1.4 times', why: 'This takes the square root of the speed ratio instead of squaring it.' },
      ],
      answer: 'a',
      concepts: ['wind-loading'],
      explanation: 'Force scales with $v^2$: doubling speed gives $2^2 = 4$ times the force. That is why the strongest gust of the night decides whether the pitch survives.',
    },
    {
      id: 's5-l3-q1',
      kind: 'single',
      prompt: 'A ridgeline spans $L = 5$ m. A load $P = 150$ N acts at the middle and the line sags $s = 0.25$ m. Estimate the tension $T \\approx PL/(4s)$.',
      choices: [
        { id: 'a', text: '750 N', why: 'Correct — 150 × 5 ÷ (4 × 0.25).' },
        { id: 'b', text: '3 000 N', why: 'This leaves out the factor of 4 in the denominator.' },
        { id: 'c', text: '187.5 N', why: 'This divides by 4 but forgets to divide by the sag $s$.' },
        { id: 'd', text: '7.5 N', why: 'This uses the sag as 25 (cm) instead of 0.25 m.' },
      ],
      answer: 'a',
      concepts: ['wind-loading'],
      explanation: '$150 \\times 5 / (4 \\times 0.25) = 750$ N. Pull it tighter to a 6 cm sag and the same load gives about 3 100 N.',
    },
    {
      id: 's5-l3-q5',
      kind: 'single',
      prompt: 'A 60 × 60 cm puddle 2 cm deep collects on your tarp. About how much does it weigh?',
      choices: [
        { id: 'a', text: 'About 7 kg', why: 'Correct — 0.6 × 0.6 × 0.02 m³ = 7.2 L ≈ 7.2 kg.' },
        { id: 'b', text: 'About 72 kg', why: 'This uses 2 cm as 0.2 m instead of 0.02 m.' },
        { id: 'c', text: 'About 0.7 kg', why: 'This slips a decimal place converting m³ to litres (1 m³ = 1 000 L).' },
        { id: 'd', text: 'About 0.007 kg', why: 'This reads 0.0072 m³ as 0.0072 L, forgetting the m³-to-litre conversion.' },
      ],
      answer: 'a',
      concepts: ['tarp-configs', 'wind-loading'],
      explanation: '0.6 × 0.6 × 0.02 m³ = 0.0072 m³ = 7.2 L ≈ 7.2 kg — and it grows as the fabric stretches. Slope every panel.',
    },
  ],
  scenario: {
    id: 's5-l3-sc',
    setup: 'Exposed moorland edge, 18:30, dark at 19:15. Rain has started and the wind is 30 km/h from the south-west, forecast to reach 60 km/h gusts around midnight. You have a 3 × 3 m tarp, 15 m of cord, 6 stakes, trekking poles, and your clothing is damp from the walk. There is a stone wall running north–south.',
    question: 'What do you pitch?',
    choices: [
      { id: 'a', text: 'A high lean-to against the wall, open side facing the view to the south-west.', why: 'Open to wind and rain and high: the tarp will flog, pull its stakes and let the rain in — while your damp clothes chill you.' },
      { id: 'b', text: 'A very low wedge east of the wall, closed end to the SW, windward stakes first, then dry layers.', why: 'Best: the wall cuts the wind, the wedge sheds the rest, and you fix the wet-plus-wind problem immediately by changing into dry layers under it.' },
      { id: 'c', text: 'A roomy A-frame on the open moor, ridgeline drum-tight so it will not flap in gusts.', why: 'Exposed, high and brittle: the gusts will find the weakest point.' },
      { id: 'd', text: 'Keep walking to warm up and look for a better, more sheltered site before dark.', why: 'Darkness in 45 minutes, rising wind and damp clothing: movement costs light and adds sweat; you may end up pitching in the dark in a worse place.' },
    ],
    best: 'b',
    debrief: 'Wet + wind is the Stage 1 killer combination. Use terrain (the lee of the wall), then the most storm-worthy pitch, oriented to the forecast wind, anchored windward first, with some give. Then deal with the damp clothing while you still have light.',
    concepts: ['tarp-configs', 'wind-loading', 'wet-wind', 'daylight'],
  },
  summary: [
    'A-frame = default; lean-to = with a fire and steady wind; diamond = quick and wind-shedding; wedge = storms.',
    'Force ∝ $v^2$: pitch low and edge-on; gusts decide survival.',
    '$T \\approx PL/(4s)$: a flatter line pulls harder — keep some sag and some give.',
    'Windward side first; adjustable hitches; deadmen in sand or snow.',
    'Slope every panel, add drip lines, ventilate the ends against condensation.',
  ],
  furtherReading: ['animated-knots', 'kochanski-bushcraft', 'iol-bushcraft'],
  references: ['kochanski-bushcraft', 'iol-bushcraft', 'army-atp-3-50-21', 'animated-knots', 'freedom-hills', 'lnt-principles'],
}
