import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's13-l2',
  stage: 13,
  order: 2,
  title: 'Knots, hitches and bends',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s13-l1'],
  concepts: ['knot-families', 'knot-security', 'knot-efficiency', 'capstan-friction'],
  objectives: [
    'Use the vocabulary of rope work: standing part, working end, tail, bight, loop, turn; and tell **knots, hitches and bends** apart.',
    'Choose from a **core knot set** by job: stopper, fixed loop, mid-line loop, hitch to an object, friction hitch, joining two ropes, tensioning.',
    'Apply **dress, set, tail, check** to every knot, and explain why knots slip, capsize or jam.',
    'Estimate the strength a knot leaves using **knot efficiency**, and explain it with bend radius and friction.',
    'Practise knots safely at home — and know which uses need an instructor’s check.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Words that make instructions make sense

- **Standing part** — the long, inactive part of the rope (often the loaded part).
- **Working end** — the end you tie with; what remains after the knot is the **tail**.
- **Bight** — a U-shaped fold of rope that does not cross itself.
- **Loop** — a fold that **crosses** itself. A **turn** passes round an object; a **round turn** goes fully round and a bit more.

### Three families

- **Knots** in the narrow sense are tied in the rope itself: **stoppers** (a lump that will not pass through a hole or device) and **loops**.
- **Hitches** tie a rope **to something** — a post, a ring, a tree or another rope. Many hold only while loaded or wrapped around the object.
- **Bends** join **two rope ends**.`,
    },
    { type: 'diagram', id: 's13-knot-families', caption: 'Knot, hitch, bend — and the four-step routine for every knot.' },
    {
      type: 'md',
      md: `### A core knot set

Learn a few knots **very well** rather than many badly. Tie them from a good visual reference (see Further reading) and have an instructor check you before any life-safety use.

| Job | Knot | Strengths | Watch out for |
|---|---|---|---|
| Stopper at a rope end | **Figure-eight stopper** (or a double overhand) | Bulky, easy to check | A stopper is only useful if someone knows why it is there |
| Fixed loop at an end | **Figure-eight loop** (on a bight or re-threaded) | Strong (~75 %), easy to inspect, very secure | Jams after heavy loads |
| Fixed loop, easy to untie | **Bowline** | Unties after loading; quick | Can loosen when unloaded and shaken, or capsize when the loop is pulled apart (“ring-loaded”); needs a secure finish for anything important |
| Loop in the middle of a rope | **Alpine butterfly** | Holds a load in any of three directions; can isolate a damaged section | Easy to tie wrongly — check it |
| Tie to a post or ring | **Round turn and two half hitches** | The turn takes the load by friction; unties under load | Leave a decent tail |
| Quick, adjustable attachment | **Clove hitch** | Fast; adjustable | Can slip with stiff or slippery rope, or roll off a pole end |
| Grip another rope | **Prusik** (friction hitch) | Grips when loaded, slides when not | Only with the right cord diameter and material — a trained-use component |
| Join unequal cords | **Sheet bend** (double for security) | Works with different diameters | Can shake loose unloaded |
| Join two ropes securely | **Double fisherman’s** (grapevine) | Very secure | Jams; hard to untie |
| Tension a line | **Trucker’s hitch** | Built-in advantage for tarps and loads | Friction eats much of its advantage (Lesson 4) |

Two lookalikes deserve warnings. The **reef (square) knot** is a **binding knot** only: used to join two ropes under load it can **capsize** and slide apart. And some bends used by climbers to join two ropes behave very differently from knots that look almost the same — one reason rope joining for descent is taught only hands-on.`,
    },
    { type: 'diagram', id: 's13-knot-strength', caption: 'Approximate strength left by common knots in a rope rated 22 kN. The knot is usually the weak point.' },
    {
      type: 'md',
      md: `### Dress, set, tail, check

1. **Dress** — arrange the strands so they lie parallel and do not cross unnecessarily. A badly dressed figure-eight is weaker and harder to inspect.
2. **Set** — pull **every** strand tight, not just the standing part. An unset knot can deform and slip when loaded.
3. **Tail** — leave a tail long enough that it cannot work back through the knot. Instructors specify a minimum for each use; “a stub” is never enough.
4. **Check** — say the knot’s name, look at it against a mental picture, and in any life-safety setting have a **partner check** (climbers check each other’s tie-in and harness every single time).

### Why knots fail

- **Slipping:** stiff, new, slippery (HMPE) or icy rope holds less friction; loads that come and go shake knots loose.
- **Capsizing:** a knot loaded the “wrong” way turns into a different, weaker shape — the reef knot used as a bend, a bowline pulled apart at the loop.
- **Mis-tying:** most real failures are human: an unfinished knot, a missed step, a tie-in interrupted by a conversation. That is why the partner check exists.
- **Breaking at the knot:** the tight bend at the knot’s entry concentrates stress (Stage 7), so ropes usually break **at** the knot.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Home practice vs life-safety use',
      md: 'Tying, dressing and checking knots on a chair leg or table is safe and worth hours of practice. Using a knot to **hold a person** — tying into a harness, building an anchor, joining ropes for a descent — must be learned and checked under a qualified instructor. A knot you “learned from a video” is not yet a knot you can trust with a life.',
    },
  ],
  whyItMatters: 'Knots are where rope systems most often go wrong: a knot that was never finished, a bend that capsized, a hitch that slid, a tail that was too short. A small set of knots tied perfectly, every time, and checked by habit is worth far more than a book of knots half-remembered. And knots are the one rope skill you can practise safely almost anywhere.',
  science: [
    {
      type: 'md',
      md: `### Knot efficiency

In words: a knot keeps only a fraction of the rope’s straight-pull strength, because the rope makes tight curves inside the knot and the outer fibres of each curve are overstretched first. We call that fraction the **knot efficiency** $e$:

$$
F_{\\text{knot}} = e \\times F_{\\text{rope}}
$$

**Worked example.** A rope rated $F_{\\text{rope}} = 22$ kN:

- figure-eight loop, $e \\approx 0.75$: $0.75 \\times 22 = 16.5$ kN
- bowline, $e \\approx 0.65$: $0.65 \\times 22 = 14.3$ kN
- clove hitch, $e \\approx 0.6$: $13.2$ kN

These are typical values from pull tests; published figures vary with rope, dressing and test method. They are **breaking** forces — life-safety systems keep real loads far below them.

### Friction does the holding (Stage 7 again)

A hitch holds because rope wraps round an object and friction grows **exponentially** with the wrap angle $\\theta$ (the capstan equation):

$$
T_{\\text{load}} = T_{\\text{hold}}\\, e^{\\mu\\theta}
$$

With $\\mu = 0.3$ and one full round turn ($\\theta = 2\\pi$): $e^{0.3 \\times 2\\pi} \\approx 6.6$ — each kilogram of hold resists about 6.6 kg of load, so the half hitches that finish a **round turn and two half hitches** see only a small part of the load. The same maths explains why a friction hitch such as the Prusik grips: several wraps multiply the grip, and a thin cord on a thicker rope bites harder than equal diameters. It also explains why **slippery** fibres (low $\\mu$) and **icy** rope need more wraps or different knots.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest camp.** Round turn and two half hitches to a tree for a ridgeline, a trucker’s hitch to tension it, a clove hitch or slip-knot finish for quick release — and a pad of bark-protecting fabric.

**Mountain.** Trained climbers tie in with a re-threaded figure-eight and check each other every time; an alpine butterfly is a classic mid-line loop for a trained glacier team.

**Coastal and sailing.** Bowlines and round turns on posts and rings: quick to tie, untie even after heavy loading or when wet.

**Desert.** Securing water containers and loads on a vehicle roof with trucker’s hitches; checking them at every stop, because vibration shakes knots loose.

**Arctic / subarctic.** Knots must be tied and untied with gloves: big, simple knots and bight-based quick releases win; icy rope slips, so tails are left longer.

**Tropical.** Wet, swollen natural cords jam; synthetic cords used for hammocks and tarps are tied with knots that untie after loading (bowline, slipped hitches).

**Urban and rural.** Tying a load on a trailer or roof rack, lashing a tarp over storm damage — the same trucker’s hitch and round turn; the reef knot stays for bandages and bundles.`,
    },
  ],
  mistakes: [
    'Myth: the reef (square) knot is a good way to join two ropes. It is a binding knot and can capsize under load.',
    'Learning twenty knots badly instead of eight knots perfectly.',
    'Not setting the knot — pulling only the standing part.',
    'Leaving a stub for a tail.',
    'Being interrupted mid-tie and walking away from an unfinished knot; skipping the partner check.',
    'Assuming a knot that works in one rope works the same in stiff, new, icy or HMPE rope.',
    'Myth: “more knots = more secure.” Extra knots can hide a mis-tie and make the system harder to check.',
  ],
  exercises: [
    {
      id: 's13-l2-e1',
      title: 'Core knot set: tie, dress, set, check',
      level: 2,
      safety: 'home',
      minutes: 45,
      materials: ['2–3 m of 8–10 mm rope or thick cord', 'A second shorter cord', 'A chair or table leg'],
      steps: [
        'From a good visual reference, tie each of: figure-eight stopper, figure-eight loop, bowline, alpine butterfly, clove hitch, round turn and two half hitches, sheet bend, double fisherman’s, trucker’s hitch.',
        'For each: dress it, set every strand, leave a proper tail, say its name out loud and check it against the picture.',
        'Tie the figure-eight loop, the bowline and the clove hitch around the chair leg with your eyes closed; then check with eyes open.',
        'Have someone hand you a knot you did not see tied: identify it, and say whether it is correct.',
        'Repeat over several days until each takes seconds and you never mis-tie it.',
      ],
      success: ['All nine knots tied correctly and named.', 'Three tied correctly by feel, eyes closed.', 'You spot a deliberately mis-tied knot.'],
      skill: 'knots',
      safetyNote: 'Practice only. Do not hang from, climb on, or anchor people with knots learned at home — life-safety use needs an instructor’s check.',
    },
    {
      id: 's13-l2-e2',
      title: 'Break a thread: measure knot efficiency',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['Sewing thread (cotton or polyester)', 'A digital luggage scale', 'Two pencils', 'Safety glasses'],
      steps: [
        'Wrap each end of a 30 cm piece of thread several turns round a pencil (the capstan grip spreads the load).',
        'Hook one pencil on the luggage scale; pull slowly on the other and note the peak reading as it breaks. Repeat 3 times.',
        'Now tie an overhand knot in the middle and repeat; then a figure-eight knot.',
        'Divide the average knotted strength by the average plain strength: that is your knot efficiency.',
      ],
      success: ['Three breaks per condition recorded.', 'You found where it broke (almost always at the knot) and computed an efficiency.'],
      safetyNote: 'Use thin thread only — never rope, cord or anything stretchy: stored energy snaps back. Wear safety glasses.',
    },
  ],
  quiz: [
    {
      id: 's13-l2-q6',
      kind: 'single',
      prompt: 'At an indoor climbing wall course, your partner is about to climb. Their tie-in knot looks different from the one you were taught, and they say “it’s fine, I always do it like that”. What do you do?',
      choices: [
        { id: 'a', text: 'Trust them, since they have more experience and use that knot every week', why: 'Experienced climbers mis-tie knots too; that is why checks exist.' },
        { id: 'b', text: 'Stop them, ask them to show you, and ask the instructor if either of you is unsure', why: 'Correct — a partner check that finds doubt must be resolved before anyone is off the ground.' },
        { id: 'c', text: 'Say nothing, but watch them closely during the first few moves of the climb', why: 'Watching does not fix a mis-tied knot.' },
        { id: 'd', text: 'Tie a second knot above theirs as a backup before they set off', why: 'Adds confusion and may hide the real problem.' },
      ],
      answer: 'b',
      concepts: ['knot-security', 'human-factors'],
      explanation: 'Social pressure and expert halo are heuristic traps (Stage 1). The partner check only works if doubt stops the action.',
    },
    {
      id: 's13-l2-q5',
      kind: 'single',
      prompt: 'Which statement about the reef (square) knot is correct?',
      choices: [
        { id: 'a', text: 'It is a binding knot; used as a bend it can capsize and slide apart', why: 'Correct — it is for bundles and bandages, not for joining loaded ropes.' },
        { id: 'b', text: 'It is a reliable bend for joining two ropes that will carry a load', why: 'Myth — as a bend it can capsize and slide apart.' },
        { id: 'c', text: 'It is a secure bend as long as both ropes have the same diameter', why: 'Equal diameters do not stop it capsizing under load.' },
        { id: 'd', text: 'It is the standard camp knot for joining two cords of unequal size', why: 'That job belongs to the sheet bend.' },
      ],
      answer: 'a',
      concepts: ['knot-families', 'knot-security'],
      explanation: 'It is a binding knot for bundles and bandages; as a bend it can capsize and slide apart. Use a sheet bend (camp) or a double fisherman’s.',
    },
    {
      id: 's13-l2-q1',
      kind: 'single',
      prompt: 'You need a loop in the middle of a rope that can be pulled from either end and from the loop. Which knot fits?',
      choices: [
        { id: 'a', text: 'Bowline', why: 'An end-of-rope loop; loaded from the wrong direction it can capsize.' },
        { id: 'b', text: 'Alpine butterfly', why: 'Correct — a mid-line loop that holds in three directions.' },
        { id: 'c', text: 'Clove hitch', why: 'A hitch to an object, not a fixed loop.' },
        { id: 'd', text: 'Reef knot', why: 'A binding knot.' },
      ],
      answer: 'b',
      concepts: ['knot-families'],
      explanation: 'Choose the knot by the job and by the directions it will be loaded.',
    },
    {
      id: 's13-l2-q3',
      kind: 'single',
      prompt: 'Which pair are both **bends** (knots that join two rope ends)?',
      choices: [
        { id: 'a', text: 'Sheet bend and double fisherman’s', why: 'Correct — the sheet bend joins unequal cords; the double fisherman’s is a secure bend.' },
        { id: 'b', text: 'Sheet bend and clove hitch', why: 'The clove hitch is a hitch to an object, not a bend.' },
        { id: 'c', text: 'Double fisherman’s and figure-eight loop', why: 'The figure-eight loop is a loop knot in one rope.' },
        { id: 'd', text: 'Clove hitch and figure-eight loop', why: 'Neither joins two ends: one is a hitch, the other a loop.' },
      ],
      answer: 'a',
      concepts: ['knot-families'],
      explanation: 'Knots (stoppers, loops) live in one rope; hitches attach to things; bends join two ends.',
    },
    {
      id: 's13-l2-q2',
      kind: 'single',
      prompt: 'Which sequence is the routine for every knot?',
      choices: [
        { id: 'a', text: 'Dress, set, confirm the tail, check', why: 'Correct — dress the strands, pull every strand tight, confirm an adequate tail, then name it and check.' },
        { id: 'b', text: 'Set, dress, confirm the tail, check', why: 'Dressing comes before setting: once every strand is pulled tight, the knot is locked in its shape.' },
        { id: 'c', text: 'Dress, check, set, confirm the tail', why: 'The check comes last, so it covers the finished knot and its tail.' },
        { id: 'd', text: 'Check, dress, set, confirm the tail', why: 'Checking before the knot is finished misses the commonest failure.' },
      ],
      answer: 'a',
      concepts: ['knot-security'],
      explanation: 'Dress, set, tail, check — every time (with a partner check for life safety). The check catches the commonest failure: a knot never finished.',
    },
    {
      id: 's13-l2-q4',
      kind: 'single',
      prompt: 'A rope is rated 22 kN. About what breaking strength remains with a bowline keeping 65 %?',
      choices: [
        { id: 'a', text: '14.3 kN', why: 'Correct — $0.65 \\times 22 = 14.3$ kN.' },
        { id: 'b', text: '7.7 kN', why: 'This is the 35 % the knot takes away, not what remains.' },
        { id: 'c', text: '22.0 kN', why: 'This ignores the knot; the rating is for knot-free rope.' },
        { id: 'd', text: '33.8 kN', why: 'This divides by 0.65 instead of multiplying — a knot never adds strength.' },
      ],
      answer: 'a',
      concepts: ['knot-efficiency'],
      explanation: '$0.65 \\times 22 = 14.3$ kN. That is a breaking force in a test — not a load you would ever plan to put on it.',
    },
  ],
  scenario: {
    id: 's13-l2-sc',
    setup: 'Forest camp, evening. A gale is forecast overnight. You are pitching a large tarp on a ridgeline of 4 mm polyester cord between two trees. The cord is new and slippery. You have 20 m of cord and some rags.',
    question: 'Which ridgeline set-up is best?',
    choices: [
      { id: 'a', text: 'A single overhand loop around each tree, pulled as tight as possible so the ridge is flat.', why: 'An overhand loop keeps only about half the cord’s strength, slips in slippery cord, and a drum-tight flat line multiplies the wind load into huge tension (Stage 5 and next lesson).' },
      { id: 'b', text: 'Round turn and two half hitches (tail left long) at one tree, trucker’s hitch to tension at the other, rags padding the bark, and a little sag left in the line; check it before dark.', why: 'Best: the round turn takes the load by friction, the hitch unties after loading, the trucker’s hitch lets you re-tension, the sag keeps tension moderate, and the bark is protected.' },
      { id: 'c', text: 'Reef knot to join two cords so the ridgeline can be doubled for strength.', why: 'The reef knot capsizes as a bend; doubled line with a weak join gains little.' },
      { id: 'd', text: 'Clove hitches at both trees because they are quick.', why: 'Clove hitches can slip in slippery, stiff new cord under gusty, cyclic loads.' },
    ],
    best: 'b',
    debrief: 'This is camp rigging, which you may practise yourself. It reuses the capstan idea (Stage 7), wind loading on tarps (Stage 5) and a preview of vector angles: a flatter line carries far more tension. The same thinking — right knot for the job, friction doing the holding, moderate angles — is what trained rope teams apply at a much higher standard for people.',
    concepts: ['knot-families', 'capstan-friction', 'wind-loading', 'knot-efficiency'],
  },
  summary: [
    '**Knots** (stoppers, loops) are tied in the rope; **hitches** attach to things; **bends** join ends.',
    'A small **core set** tied perfectly beats many knots tied badly.',
    '**Dress, set, tail, check** — and partner checks for anything life-safety.',
    'Knots keep roughly 50–75 % of rope strength; ropes break at the knot.',
    'Friction (the capstan effect) does the holding in hitches; slippery or icy rope needs more care.',
    'The reef knot is a **binding** knot, not a bend.',
  ],
  furtherReading: ['animated-knots', 'ashley-knots', 'freedom-hills'],
  references: ['animated-knots', 'ashley-knots', 'freedom-hills', 'mckenna-rope-tech', 'hibbeler-statics', 'uiaa'],
}
