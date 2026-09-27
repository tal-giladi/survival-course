import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's3-l6',
  stage: 3,
  order: 6,
  title: 'Friction fire',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s3-l5'],
  concepts: ['friction-fire', 'friction-power', 'ember-to-flame'],
  objectives: [
    'Name the parts of a **bow drill** and explain what each does mechanically.',
    'Calculate **friction power** $P = \\mu N v$ from force and speed, and explain the race between heating and losses.',
    'Choose suitable **wood pairs** and explain why resinous, very hard, green or rotten wood fails.',
    'Carry a friction ember through to **flame**, and explain why friction fire is a last-resort skill.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Friction fire is making fire from wood alone: rubbing two pieces together fast and hard enough that the wood dust they grind off heats past its ignition point and becomes a **glowing ember**. It is among the oldest human technologies and one of the most satisfying outdoor skills — and it is **Plan D**, not Plan A. Carry a lighter and a ferro rod; learn friction fire for understanding, resilience and craft.

### The bow drill set`,
    },
    { type: 'diagram', id: 'bow-drill-set', caption: 'Bow, spindle, handhold, hearth board with notch, and ember pan.' },
    {
      type: 'md',
      md: `- **Spindle:** straight, dry, about 2 cm thick and 20 cm long, rounded at the top, blunt-pointed at the bottom.
- **Hearth board:** about 1.5 cm thick, of the same or a slightly softer wood. A shallow socket is burned in near the edge, then a **notch** cut from the edge to the socket’s centre (about 1/8 of the circle). The notch collects the hot dust and lets air reach it.
- **Handhold (bearing block):** holds the spindle’s top. Make it from hard wood, stone or bone with a smooth socket, **lubricated** (fat, soap, waxy leaves, nose grease) so the top spins freely and all the friction happens at the bottom.
- **Bow:** a stick about your arm’s length, slightly flexible, with a strong cord. The cord is wrapped once around the spindle.
- **Ember pan:** a leaf or bark chip under the notch to catch and carry the ember.

### Technique in brief

Kneel on your right knee (right-handed), left foot on the hearth beside the socket. Lock your left wrist against your left shin so the handhold is braced and the spindle vertical. Start with **long, smooth, full-length strokes** and light pressure to seat the spindle; then increase pressure and speed steadily. Dust in the notch goes from brown to **black**, smoke thickens and keeps rising when you stop — that is an ember. Stop, keep still for a few seconds, lift the spindle, tap the board and ease it away from the ember.

### Why it fails (and the fix)

| Symptom | Likely cause | Fix |
|---|---|---|
| Squeaking, shiny glazed surfaces, little dust | Too little pressure, resinous or hard wood | More pressure; change wood; roughen the socket with grit or a knife |
| Lots of pale brown dust, no smoke | Not enough speed or pressure; damp wood | Faster, longer strokes; drier wood |
| Spindle keeps jumping out | Wrist not locked; notch too wide; bow cord slipping | Brace wrist on shin; recut notch; tighten cord |
| Smoke but ember dies | Dust scattered; notch too shallow; stopped too soon | Notch to the centre; keep going 10+ strokes after heavy smoke |
| Exhausted before ember | Inefficient form; too thick spindle | Use body weight, long strokes; thinner spindle |`,
    },
    { type: 'sim', id: 'friction-fire', caption: 'Change one variable at a time: wood pair, dryness, spindle diameter, stroke, pressure and notch.' },
    {
      type: 'md',
      md: `### Wood pairs

Good friction woods are **soft to medium-hard, dry, non-resinous** and produce fine, dark dust. Well-known pairs include western red cedar, basswood (lime/linden), willow, aspen/poplar, cottonwood root, buckeye, alder and some sotol/yucca stalks (a spindle on a softer hearth). Poor choices: **resinous pines** (resin melts and glazes), **very hard dense woods** such as oak (polish instead of dust, and conduct heat away), **green wood** (heat goes into steam), and **punky wood** (crumbles, holds moisture).

### Other friction methods

- **Hand drill:** a long, thin, straight stalk spun between the palms on a hearth. No cordage needed, but it demands dry, light stalks (e.g., mullein, horseweed, yucca) and serious hand stamina; beginners blister quickly.
- **Fire plough and fire saw:** rubbing a stick along a groove, or a bamboo edge across a split bamboo section — traditional in the Pacific and Southeast Asia.

### Ember to flame

A friction ember is fragile but lasts a few minutes. Have a **bird’s-nest tinder bundle** ready (lesson 5) — dry grass, finely shredded inner bark (cedar, juniper, cottonwood), fine shavings. Tip the ember into it, fold, blow gently then harder until it flames, and put it straight into your prepared lay.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Safety class: supervised or legal fire setting',
      md: 'The ember is real fire. Practise with an instructor or experienced friend, in a legal fire pit or on bare mineral ground where fires are allowed, with water ready and no fire restriction in force. Knife work to make the kit carries its own risks — carve seated, cutting away from your body. The IOL Bushcraft Competency Certificate includes a bow-drill unit; a course is the fastest way to get it right.',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'Cutting live wood for a friction kit is prohibited in many parks and reserves; buy or bring kit wood, or use dead wood where collection is allowed. Friction embers count as open fire under fire restrictions.',
    },
  ],
  whyItMatters: 'Friction fire teaches the whole physics of fire in your hands: power, heat loss, moisture, surface area and ember management. It is a genuine last-resort capability — and knowing how hard it is (tens of watts for a minute, with the right wood) is the best argument for always carrying a lighter and a ferro rod.',
  science: [
    {
      type: 'md',
      md: `### Power = force × velocity

Mechanical power is force times speed: $P = F v$. When one surface rubs on another, the friction force is $\\mu N$, where $N$ is the force pressing them together and $\\mu$ (the **friction coefficient**, typically 0.3–0.5 for dry wood on wood) says how “grabby” the surfaces are. So the heat generated by rubbing is

$$
P = \\mu N v
$$

In words: **heat per second = grabbiness × how hard you press × how fast you rub.**

**How fast does the tip rub?** The bow cord drives the spindle’s side, so the rim of the spindle moves at the cord speed. If each full stroke (back and forth) is $L$ long and you make $f$ strokes per second, the cord averages $v_{bow} = 2 L f$. The spindle’s bottom is a disc; points near its centre barely move, so the **average** rubbing speed is about $\\tfrac{2}{3}$ of the rim speed:

$$
v_{rub} \\approx \\tfrac{2}{3}\\, v_{bow} = \\tfrac{4}{3} L f
$$

**Worked example:** 60 cm strokes at 1.5 strokes/s → $v_{bow} = 2 \\times 0.6 \\times 1.5 = 1.8$ m/s, $v_{rub} \\approx 1.2$ m/s. With $\\mu = 0.45$ and $N = 80$ N (about 8 kg of your weight):

$$
P = 0.45 \\times 80 \\times 1.2 \\approx 43\\ \\text{W}
$$

That is the mechanical power your bow arm supplies, and all of it becomes heat at the rubbing surfaces. For comparison, a fit adult can sustain perhaps **40–60 W** of arm work for a minute or two, and far less for long. Friction fire lives right at the edge of human upper-body endurance — which is why good form (body weight for pressure, long efficient strokes) matters so much.`,
    },
    { type: 'diagram', id: 'friction-balance', caption: 'Temperature rises until heat in equals heat lost. Good technique crosses the ember threshold; weak or damp technique plateaus below it.' },
    {
      type: 'md',
      md: `### The heating race

Not all of that heat stays in the dust. It is lost by **conduction** into the board and spindle, **radiation** and air cooling from the hot spot, and — if the wood is damp — **evaporating water**. A simple model of the hot zone’s temperature $T$:

$$
C\\frac{dT}{dt} = q_{in} - G\\,(T - T_{air}) - q_{rad} - q_{evap}
$$

In words: *the rate the hot spot warms equals heat in minus the losses*, where $C$ is how much heat it takes to warm the zone by 1 °C, and $G$ how fast heat leaks away per degree of excess temperature. Temperature climbs until losses equal input — the **steady-state** temperature $T_{air} + q_{in}/G$ (ignoring radiation). If that ceiling is below the ~350–450 °C at which char dust self-sustains, **you will never get an ember no matter how long you go**. Consequences:

- **Thicker spindle** → larger contact area → larger $C$ and $G$ → slower heating, lower ceiling. ~2 cm is a good compromise; much thinner slips and drills through the board.
- **Damp wood** → water must boil off first: the temperature sticks near 100 °C (“steam, not smoke”) and friction drops (water lubricates).
- **Resin or very hard wood** → low μ and glazing, little dust, high conduction.
- **Notch** → the dust must accumulate, stay insulated by its own pile and get air. No notch, no ember.

### Fatigue

A useful model of muscle endurance is **critical power**: below a certain power (CP) you can keep going for a long time; above it, you drain a limited reserve $W'$ at the rate $(P - CP)$. Time to exhaustion ≈ $W'/(P - CP)$. With, say, $CP = 45$ W and $W' = 4.5$ kJ, working at 70 W gives $4500/25 = 180$ s; at 100 W, only 82 s. Going “all out” early can leave you empty just before the ember forms.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Pacific Northwest (temperate rainforest):** western red cedar on cedar is the classic teaching kit — but only from dry, dead standing wood or kit wood stored indoors.

**European woodland:** lime (basswood) and willow; hazel spindles on lime hearths are common in bushcraft schools.

**American Southwest desert:** sotol or yucca stalks as spindles (bow or hand drill) on cottonwood-root or sotol hearths; very dry air helps.

**Southeast Asia and the Pacific:** bamboo fire saws and fire ploughs using dry bamboo and softwoods such as hibiscus.

**Subarctic:** feasible with dry dead wood (e.g., aspen, willow), but numb hands and cold wood make it very hard — the case for carrying a ferro rod.`,
    },
  ],
  mistakes: [
    'Myth: “Rubbing two sticks together is an easy emergency fire.” — It takes the right dry wood, a correct kit, good form and practice; beginners often need several sessions.',
    'Using green or damp wood — the heat goes into steam.',
    'Choosing resinous pine or dense oak; they glaze and polish instead of producing hot dust.',
    'Not locking the wrist against the shin — the spindle wobbles and jumps out.',
    'Short, fast, jerky strokes that tire the arm without heating the tip; use the whole bow length.',
    'Stopping the moment smoke appears — keep going 10 or more strong strokes to build a proper ember.',
    'Having no tinder bundle ready when the ember forms.',
  ],
  exercises: [
    {
      id: 's3-l6-e1',
      title: 'Bow-drill lab: find the ember envelope',
      level: 2,
      safety: 'home',
      minutes: 30,
      steps: [
        'In the Bow-Drill Lab, start with dry cedar, 20 mm spindle, 60 cm strokes at 1.5 strokes/s, 80 N, good notch.',
        'Change one variable at a time (diameter, force, rate, dryness, wood, notch) and record ember time or failure.',
        'Find the lowest force that still makes an ember with a 25 mm spindle. Explain using $P = \\mu N v$ and the heat-loss model.',
      ],
      success: ['A table of at least 10 runs.', 'You can explain, with numbers, why a thicker spindle needs more force.'],
    },
    {
      id: 's3-l6-e2',
      title: 'Make a bow-drill kit (no ember)',
      level: 3,
      safety: 'home',
      minutes: 120,
      materials: ['Dry softwood (cedar, basswood, willow, poplar — bought or legally collected dead wood)', 'Fixed-blade knife and small saw', 'Strong cord (paracord inner strands or leather)', 'Hardwood or stone for the handhold'],
      safetyNote: 'Carve seated with the blade moving away from your body; keep a clear space around you.',
      steps: [
        'Carve a straight spindle ~20 × 2 cm; round the top, blunt-point the bottom.',
        'Split and flatten a hearth ~1.5 cm thick and ~5 cm wide.',
        'Carve a handhold with a smooth socket; lubricate it.',
        'Rig the bow with the cord just tight enough that the spindle twists into it with firm pressure.',
        'Check the fit: spindle vertical, wrist braced, smooth long strokes (no socket burning yet).',
      ],
      success: ['A complete, well-fitting kit.', 'You can name the function of each part.'],
      skill: 'friction-fire',
    },
    {
      id: 's3-l6-e3',
      title: 'Bow-drill ember to flame, with a supervisor',
      level: 3,
      safety: 'supervised',
      minutes: 120,
      materials: ['Your kit', 'Tinder bundle (dry grass / shredded inner bark)', 'Legal fire pit or cleared mineral soil where fires are allowed', 'Water', 'Leather or gloves'],
      safetyNote: 'With an instructor or experienced person; only where fires are legal and no restriction is in force. The ember is fire — keep water ready and extinguish cold.',
      steps: [
        'Burn in a socket, cut the notch to its centre, put an ember pan underneath.',
        'Bow with long strokes, building pressure and speed; continue 10+ strokes after heavy smoke.',
        'Transfer the ember to the tinder bundle and blow it to flame; place it in a prepared lay.',
        'Log strokes, time, and conditions for every attempt.',
      ],
      success: ['Three embers on separate days.', 'At least one ember taken to a self-sustaining fire.'],
      skill: 'friction-fire',
    },
  ],
  simulations: ['friction-fire'],
  quiz: [
    {
      id: 's3-l6-q1',
      kind: 'numeric',
      prompt: 'Friction coefficient 0.4, downward force 90 N, average rubbing speed 1.0 m/s. Using $P = \\mu N v$, what is the friction power in **watts**?',
      unit: 'W',
      answer: 36,
      tolerance: 0.5,
      concepts: ['friction-power'],
      explanation: '0.4 × 90 × 1.0 = **36 W** of heat at the rubbing surfaces.',
    },
    {
      id: 's3-l6-q2',
      kind: 'numeric',
      prompt: 'Strokes are 50 cm long at 1.2 full strokes per second. What is the average bow-cord speed $v_{bow} = 2Lf$ in **m/s**?',
      unit: 'm/s',
      answer: 1.2,
      tolerance: 0.02,
      concepts: ['friction-power'],
      explanation: '2 × 0.5 × 1.2 = **1.2 m/s**; the tip’s average rubbing speed is about 2/3 of that, 0.8 m/s.',
    },
    {
      id: 's3-l6-q3',
      kind: 'single',
      prompt: 'You bow hard for two minutes with damp willow. Steam rises, the dust is pale, the temperature never seems to climb. What is the physics?',
      choices: [
        { id: 'a', text: 'Heat is going into evaporating water, and water lowers friction, so the hot spot stalls near 100 °C.', why: 'Correct.' },
        { id: 'b', text: 'Willow cannot make fire.', why: 'Dry willow works well.' },
        { id: 'c', text: 'You need to bow faster for longer; it always works eventually.', why: 'If the steady-state temperature is below ignition, more time does not help — and you tire.' },
        { id: 'd', text: 'The notch is too big.', why: 'A notch problem does not cause steam.' },
      ],
      answer: 'a',
      concepts: ['friction-fire', 'moisture-content'],
      explanation: 'The same moisture physics as in lesson 1: water must boil off before temperature can rise.',
    },
    {
      id: 's3-l6-q4',
      kind: 'multi',
      prompt: 'Which wood choices are likely to fail for a bow drill?',
      choices: [
        { id: 'a', text: 'Resinous pine', why: 'Yes — resin melts and glazes.' },
        { id: 'b', text: 'Dry basswood (lime)', why: 'No — a classic good choice.' },
        { id: 'c', text: 'Dense oak', why: 'Yes — polishes, little dust, conducts heat away.' },
        { id: 'd', text: 'Punky half-rotten wood', why: 'Yes — crumbles, holds moisture.' },
        { id: 'e', text: 'Dry western red cedar', why: 'No — a classic good choice.' },
      ],
      answer: ['a', 'c', 'd'],
      concepts: ['friction-fire'],
      explanation: 'Soft-to-medium, dry, non-resinous woods produce fine dark dust that holds heat.',
    },
    {
      id: 's3-l6-q5',
      kind: 'single',
      prompt: 'Why does a 3 cm spindle often fail where a 2 cm spindle succeeds with the same effort?',
      choices: [
        { id: 'a', text: 'The larger contact area spreads the same heat over more wood and loses more to conduction, lowering the temperature ceiling.', why: 'Correct: bigger C and G.' },
        { id: 'b', text: 'Thick spindles spin faster.', why: 'At the same cord speed, a thicker spindle spins slower (fewer rpm).' },
        { id: 'c', text: 'Thick spindles have more resin.', why: 'Diameter does not change the wood.' },
        { id: 'd', text: 'Friction coefficient is lower for thick wood.', why: 'μ depends on the surfaces, not the diameter.' },
      ],
      answer: 'a',
      concepts: ['friction-power', 'friction-fire'],
      explanation: 'Temperature is set by the balance of heat in vs heat lost; a bigger hot zone loses more and warms more slowly.',
    },
    {
      id: 's3-l6-q6',
      kind: 'truefalse',
      prompt: 'Friction fire is a good primary fire-starting method for an emergency kit.',
      answer: false,
      concepts: ['friction-fire', 'redundancy'],
      explanation: 'It is a last-resort skill. Carry a lighter and a ferro rod (redundancy, Stage 1).',
    },
  ],
  scenario: {
    id: 's3-l6-sc',
    setup: 'Semi-arid scrubland, 12 °C at dusk, forecast 2 °C tonight, clear sky. You lost your pack crossing a river; you have a knife, paracord and dry clothes on. Dead cottonwood and dry yucca stalks grow nearby. Fires are allowed. It is 45 minutes to dark.',
    question: 'How do you use the time?',
    choices: [
      { id: 'a', text: 'Spend all remaining light on a bow-drill fire.', why: 'Possible success, but if it fails you have no shelter and no insulation for a clear, cold night.' },
      { id: 'b', text: 'First build a windbreak and a thick insulating bed of dry grass and brush (priorities); then, with the remaining light, make a bow drill from cottonwood and yucca and gather a tinder bundle and fuel.', why: 'Best: shelter and insulation are certain gains; fire is a bonus with a real chance.' },
      { id: 'c', text: 'Walk through the night to stay warm.', why: 'Risks injury and getting lost in the dark, and exhaustion.' },
      { id: 'd', text: 'Try a hand drill on green cottonwood.', why: 'Green wood will not produce an ember.' },
    ],
    best: 'b',
    debrief: 'Priorities decide the order: at 2 °C in dry clothes, shelter and ground insulation give certain protection within minutes. Friction fire is uncertain and exhausting — worth attempting with the best materials (dry cottonwood hearth, yucca spindle), but not at the expense of a safe night.',
    concepts: ['friction-fire', 'priorities', 'ground-insulation'],
  },
  summary: [
    'Bow drill: spindle, hearth with notch, lubricated handhold, bow, ember pan. Lock the wrist; long, smooth strokes.',
    'Friction power $P = \\mu N v$ — tens of watts, near the limit of sustainable arm work.',
    'Temperature rises until losses equal input; thick spindles, damp, resinous or hard wood cap it below ember temperature.',
    'Ember → bird’s-nest bundle → flame. Friction fire is Plan D: practise it supervised; carry lighter and ferro rod.',
  ],
  furtherReading: ['iol-bushcraft-cert', 'kochanski-bushcraft', 'spt'],
  references: ['iol-bushcraft-cert', 'iol-bushcraft', 'kochanski-bushcraft', 'spt', 'woodlore', 'army-atp-3-50-21'],
}
