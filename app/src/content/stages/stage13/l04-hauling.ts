import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's13-l4',
  stage: 13,
  order: 4,
  title: 'Hauling systems',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s13-l3'],
  concepts: ['mechanical-advantage', 'friction-losses', 'capstan-friction', 'vector-angles'],
  objectives: [
    'Explain **mechanical advantage (MA)** as a trade of force for distance, and find the **ideal MA** of simple and compound systems.',
    'Calculate **actual MA** with friction losses at pulleys and edges, and explain why big ratios lose efficiency.',
    'Estimate haul force, **rope travel** and anchor force for a given load, slope and system.',
    'Explain why rescue teams often prefer **lowering** to raising, and why **more MA is not always better**.',
    'Use the Mechanical Advantage Lab to explore systems **virtually** — and state clearly that hauling people requires formal training.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Virtual only for anything involving people',
      md: 'Hauling or lowering a person is technical rope rescue: it needs certified equipment, a trained team, backup systems and practice under qualified instructors. This lesson teaches the **physics** so that you understand what rescuers do and why improvising it is so dangerous. The only hands-on exercise uses a **bucket of water** at low height.',
    },
    {
      type: 'md',
      md: `### Trading force for distance

A pulley system does not create energy. If the haulers pull the rope a distance $d_h$ with force $F$, and the load moves $d_L$ against a resistance $W$, then (without friction) the work in equals the work out:

$$
F\\,d_h = W\\,d_L \\quad\\Rightarrow\\quad \\text{MA}_{\\text{ideal}} = \\frac{W}{F} = \\frac{d_h}{d_L}
$$

So a 3:1 system needs a third of the force — and **three metres of rope pulled for every metre the load moves**.

### Counting the advantage

For a **simple** system (one rope, pulleys alternating between anchor and load), the ideal MA is the **number of rope parts pulling on the load** (directly or through a pulley attached to it).

- **1:1** — a direct pull, or a pull through a fixed pulley at the anchor (a **redirect**): it changes direction only.
- **2:1** — rope end anchored, one pulley on the load: two parts hold it.
- **3:1 (“Z”)** — rope from the load up through an anchor pulley, back down to a travelling pulley that grips the load line, and back to the haulers. The shape of the rope gives it its name.

A **compound** system is one simple system pulling on the haul strand of another: the MAs **multiply** (a 3:1 on a 3:1 = 9:1). There are also **complex** systems that fit neither pattern — a trained-rigger topic.`,
    },
    { type: 'diagram', id: 's13-ma-systems', caption: '1:1, 2:1 and 3:1 (“Z”) with ideal tensions. Count the rope parts pulling on the load.' },
    {
      type: 'md',
      md: `### Friction: where the advantage goes

Every time the rope turns round a pulley, some tension is lost to friction in the bearing and in bending the rope. Call the fraction passed on the **efficiency** $\\eta$ of that turn. In a simple system, the rope parts carry $F, \\eta F, \\eta^2 F, \\dots$, so the actual MA is

$$
\\text{MA}_{\\text{actual}} = 1 + \\eta + \\eta^2 + \\dots + \\eta^{n-1}
$$

The more pulleys, the more of the ideal advantage disappears. A **carabiner** used instead of a pulley acts like the capstan in Stage 7: with the rope bending 180° round a small, rough radius, it can pass on only about half the tension. **Edges** are worse: rope dragged over rock loses a large share of the haul to friction — and can be **cut**. Rescue teams use **edge rollers**, padding and high redirects to lift the rope off the edge.`,
    },
    { type: 'diagram', id: 's13-friction-ma', caption: 'Actual MA falls further below ideal as systems grow — dramatically with carabiners.' },
    { type: 'sim', id: 'mechanical-advantage', caption: 'Try the three challenges. Pick the simplest system that works with the people available, and protect the edge.' },
    {
      type: 'md',
      md: `### What the physics tells rescuers

- **Lower if you can.** Gravity does the work; the team controls the speed with friction. Raising takes far more people, time and rope, and puts more force through anchors. Rescue teams therefore often choose lowering routes when the terrain allows.
- **Use the least MA that works.** Every extra ratio means more rope travel, more **resets** (when the travelling pulley reaches the anchor and has to be moved back down the rope), and more force delivered to the load and anchor if the load **snags**. A 9:1 pulled by three strong people can put several kilonewtons into a stuck litter or a person — without anyone feeling it.
- **Friction is the enemy of hauling and the friend of lowering.** The same capstan maths that wastes force over an edge lets one person control a heavy load on a lowering device.
- **Hold the load between pulls.** Real systems include a **progress-capture** device so that the load cannot slide back if haulers let go, and a separate **backup** (belay) line. Those components are exactly the part untrained people get wrong.

### Everyday uses you *can* practise

The **trucker’s hitch** is a small built-in pulley system for tensioning tarps, ridgelines and loads on a roof rack: ideally about 3:1, much less with cord rubbing on cord. A pulley or carabiner at a branch reduces the friction of hoisting a food bag. These are camp tasks with **gear**, not people.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Stored energy',
      md: 'A rope, strap or cable under high tension stores energy. If anything breaks — a knot, a shackle, a tree, a vehicle recovery point — the parts fly back with lethal force. Keep people out of the line of pull and to the side of any tensioned system, including vehicle recovery. This is a principle for camp and farm work too.',
    },
  ],
  whyItMatters: 'Hauling systems look like magic: a few pulleys and one person seems able to lift anything. The physics says otherwise: friction eats advantage, rope travel grows, forces pile up on anchors, and a powerful system can hurt the very person it is meant to help. Understanding this lets you use tensioning systems safely for gear and explains why mountain rescue teams train for years to raise and lower people.',
  science: [
    {
      type: 'md',
      md: `### Worked example: a free-hanging 100 kg load

The load weighs $W = 100 \\times 9.81 = 981$ N. Using a 3:1:

- **Ideal:** $F = 981/3 = 327$ N; rope travel 3 m per metre raised.
- **Good pulleys** ($\\eta = 0.9$): $\\text{MA} = 1 + 0.9 + 0.81 = 2.71$; $F = 981 / 2.71 \\approx 362$ N.
- **Carabiners** ($\\eta \\approx 0.53$ from the capstan model $e^{-0.2\\pi}$): $\\text{MA} = 1 + 0.53 + 0.28 \\approx 1.82$; $F \\approx 540$ N — the 3:1 is barely better than a 2:1 with good pulleys.

### Compound systems

A 3:1 on a 3:1 with $\\eta = 0.9$: $2.71 \\times 2.71 \\approx 7.3$ instead of 9. With carabiners: $1.82^2 \\approx 3.3$.

### Edges and slopes

Over an edge, the rope tension grows by the capstan factor $e^{\\mu\\theta}$ on its way to the system. With $\\mu = 0.3$ over a 90° bend ($\\theta = \\pi/2$): $e^{0.47} \\approx 1.6$ — the system must pull **60 % more** than the load needs. (Friction coefficients here are illustrative.)

On a slope of angle $\\theta_s$ with ground friction $\\mu_g$, the pull along the slope is

$$
P = W(\\sin\\theta_s + \\mu_g\\cos\\theta_s)
$$

For a 100 kg litter on a 40° slope with $\\mu_g = 0.3$: $P = 981 \\times (0.643 + 0.230) \\approx 856$ N. In **low-angle** terrain the ground carries much of the weight; in **high-angle** terrain the rope carries it all.

### Anchor force

With haulers pulling straight away from the load, the anchor holds the load-line tension minus the haulers’ pull: for the good-pulley 3:1, $981 - 362 \\approx 619$ N. Redirect the haul line through a U-turn at the anchor and that redirect adds nearly **twice** the haul force (Lesson 3).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain rescue.** Teams raise or lower stretchers on steep ground with certified pulleys, rope grabs, edge protection and a separate belay line, and choose lowering routes where they can.

**Glacier travel.** A person in a crevasse is a classic hauling problem: friction at the lip, where the rope has cut into the snow, can consume most of the haul. Crevasse-rescue systems are practised on formal courses, never learned in the moment.

**Desert canyons.** Canyoneers haul packs up short steps and lower them down drops — with trained members rigging, the pack as the load, and people kept out of the line of pull.

**Forest camp.** Hoisting a food bag over a branch: the rope rubbing over bark behaves like a capstan and makes the pull several times heavier; a smooth carabiner or small pulley on a sling at the branch helps a lot.

**Coastal.** Hauling a small boat or kayak up a slipway with a block-and-tackle — people stand to the side of the line.

**Arctic / subarctic.** Pulling a sled up a steep bank with a simple 2:1 anchored to a tree; frozen, icy rope slips in hitches and needs more wraps.

**Tropical.** Raising a tarp or mosquito net high between trees with a trucker’s hitch; slippery wet cord needs the hitch dressed carefully.

**Urban and rural.** Tensioning a load on a trailer, stretching a fence wire, or recovering a stuck vehicle: the forces and the stored energy are large. Use rated recovery equipment and keep people out of the line of pull.`,
    },
  ],
  mistakes: [
    'Myth: “more mechanical advantage is always better.” Big ratios waste rope, time and resets, and can overload a snagged load or the anchor without anyone feeling it.',
    'Counting pulleys instead of rope parts on the load.',
    'Ignoring friction: carabiners and edges can eat half or more of the advantage.',
    'Hauling a load over an unprotected edge — the rope can be cut.',
    'Forgetting that the haulers must pull the rope several times the distance the load moves.',
    'Standing in the line of pull of a tensioned rope or strap.',
    'Myth: a video is enough to rig a raising system. Rescue systems need backups, progress capture and trained teams.',
  ],
  exercises: [
    {
      id: 's13-l4-e1',
      title: 'Bucket bench test: measure real MA',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['A bucket with ~5 kg of water', '6–8 m of cord', 'Two small pulleys and two carabiners (any, not for climbing use)', 'Digital luggage scale', 'A sturdy horizontal bar or beam about 1.5 m high (e.g., a garden pergola or clothes-drying frame)'],
      steps: [
        'Weigh the bucket with the luggage scale (hanging directly): that is $W$.',
        'Rig a 1:1 over a pulley on the bar and measure the pull needed to lift the bucket slowly. Repeat with a carabiner instead of the pulley.',
        'Rig a 2:1 (cord tied off at the bar, pulley on the bucket handle, haul strand over a second pulley on the bar) and measure again, with pulleys then with carabiners.',
        'For each: actual MA = $W$ ÷ pull. Compare with the ideal and with the model: a 1:1 over a pulley gives $\\eta$; the 2:1 with its haul strand redirected over the bar gives $\\eta(1 + \\eta)$.',
        'Measure how much cord you pull to raise the bucket 20 cm in each case.',
      ],
      success: ['A table of ideal vs measured MA for pulleys and carabiners.', 'An estimate of $\\eta$ for your pulley and for the carabiner.', 'Rope travel matches the ideal MA.'],
      skill: 'rope-force-reasoning',
      safetyNote: 'Water bucket only, lifted no higher than your knees, over grass or a floor you can splash. Stand to the side, keep feet out from under the bucket, and never put any part of a person in or under the system.',
    },
    {
      id: 's13-l4-e2',
      title: 'Virtual: the three hauling challenges',
      level: 3,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Open the Mechanical Advantage Lab and complete “Haul a pack up a slab”, “Low-angle litter raise” and “Free-hanging 100 kg raise”.',
        'For each, first predict on paper the simplest system that will work, then test it.',
        'Swap pulleys for carabiners and the roller for padding: record how many extra haulers are needed.',
        'Write two sentences on why rescuers prefer lowering and small ratios where possible.',
      ],
      success: ['Scores of 90 % or more on all three challenges.', 'Predictions within one step of the answer before using the sim.'],
      skill: 'rope-force-reasoning',
    },
  ],
  simulations: ['mechanical-advantage'],
  quiz: [
    {
      id: 's13-l4-q1',
      kind: 'numeric',
      prompt: 'What is the ideal MA of a 3:1 system pulling on the haul strand of another 3:1?',
      unit: ':1',
      answer: 9,
      tolerance: 0,
      concepts: ['mechanical-advantage'],
      explanation: 'Compound systems multiply: 3 × 3 = 9.',
    },
    {
      id: 's13-l4-q2',
      kind: 'numeric',
      prompt: 'A simple 3:1 uses pulleys that each pass on 90 % of the tension. What is its actual MA? (two decimals)',
      unit: ':1',
      answer: 2.71,
      tolerance: 0.02,
      concepts: ['mechanical-advantage', 'friction-losses'],
      explanation: '$1 + 0.9 + 0.9^2 = 2.71$. Friction has already cost about 10 % of the ideal.',
    },
    {
      id: 's13-l4-q3',
      kind: 'numeric',
      prompt: 'Using a 3:1, how many metres of rope must the haulers pull to raise a load 10 m?',
      unit: 'm',
      answer: 30,
      tolerance: 0.5,
      concepts: ['mechanical-advantage'],
      explanation: 'Work in = work out: 3 m of rope per metre of lift — plus extra for rope stretch and resets in a real system.',
    },
    {
      id: 's13-l4-q4',
      kind: 'multi',
      prompt: 'Which changes reduce the haul force needed for the same load?',
      choices: [
        { id: 'a', text: 'Replacing carabiners with good pulleys', why: 'Yes — much less friction at each turn.' },
        { id: 'b', text: 'Using an edge roller or lifting the rope off the edge with a high redirect', why: 'Yes — removes edge friction (and protects the rope).' },
        { id: 'c', text: 'Adding a redirect at the anchor so haulers can pull downhill', why: 'No — a redirect adds friction, not advantage (though a better pulling direction can help the people).' },
        { id: 'd', text: 'Choosing a lowering route instead of raising', why: 'Yes — gravity does the work.' },
        { id: 'e', text: 'Pulling faster', why: 'No — friction is not reduced by speed.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['friction-losses', 'mechanical-advantage'],
      explanation: 'Reduce friction and prefer lowering. A redirect only changes direction — and costs one more pulley’s efficiency.',
    },
    {
      id: 's13-l4-q5',
      kind: 'truefalse',
      prompt: 'A higher mechanical advantage is always safer, because the haulers need less force.',
      answer: false,
      concepts: ['mechanical-advantage'],
      explanation: 'Myth. Big ratios mean more rope travel and resets, more friction, and much more force delivered if the load snags — enough to damage anchors or hurt a patient without the haulers feeling it.',
    },
    {
      id: 's13-l4-q6',
      kind: 'single',
      prompt: 'A 3:1 built with carabiners (each passing on ~53 %) has an actual MA of about 1.8. What is the best conclusion?',
      choices: [
        { id: 'a', text: 'It is still a 3:1, so plan with 3', why: 'Planning with ideal numbers under-estimates the haul force by almost 40 %.' },
        { id: 'b', text: 'Friction has consumed most of the extra advantage; a 2:1 with good pulleys would do about as well with less rope and fewer components', why: 'Correct — $1 + 0.95 = 1.95$ with good pulleys vs ≈ 1.82 here.' },
        { id: 'c', text: 'Add another 3:1 of carabiners to make a 9:1', why: 'The result is ≈ 3.3:1 with far more friction, rope and complexity.' },
        { id: 'd', text: 'Carabiners have no effect on MA', why: 'They act like small, rough capstans.' },
      ],
      answer: 'b',
      concepts: ['friction-losses', 'capstan-friction'],
      explanation: 'Actual MA, not ideal, decides how many people you need.',
    },
  ],
  scenario: {
    id: 's13-l4-sc',
    setup: 'Forest camp in bear country. You need to hoist a 10 kg food bag 4 m up over a branch. With the cord running over rough bark it takes almost all your strength and the bag keeps swinging into the trunk. Your partner suggests building a 3:1 from the cord and two carabiners you have.',
    question: 'What is the best approach?',
    choices: [
      { id: 'a', text: 'Build the 3:1 with carabiners — more advantage will fix it.', why: 'Carabiner friction eats much of the advantage, and you need three times the rope. The main loss is at the branch.' },
      { id: 'b', text: 'Put one carabiner on a short sling round the branch as a smooth redirect, throw the cord through it, pad the trunk side and pull from the side, not from under the bag.', why: 'Best: the bark capstan (μ ≈ 0.5 over 180°: ≈ 4.8× the weight, ≈ 470 N) becomes a smoother carabiner turn (≈ 1.9×, ≈ 180 N). Standing aside keeps you out from under the load.' },
      { id: 'c', text: 'Climb the tree and pull it up from the branch.', why: 'Tree climbing with a load is a fall risk, and unnecessary.' },
      { id: 'd', text: 'Skip the hang and keep the food in the tent.', why: 'In bear country that invites a bear to your tent; use the hang, a canister or the local food-storage rule.' },
    ],
    best: 'b',
    debrief: 'This is the capstan equation from Stage 7 used in reverse: friction at the branch multiplies the force you need. Reducing friction beats adding advantage. It is also a safe, gear-only job — the kind of rope work you can practise yourself. Follow local food-storage rules (canisters are required in some areas).',
    concepts: ['capstan-friction', 'friction-losses', 'mechanical-advantage'],
  },
  summary: [
    'MA trades force for distance: ideal MA = rope parts on the load = rope pulled ÷ load moved.',
    'Compound systems multiply; friction compounds too: actual MA $= 1 + \\eta + \\eta^2 + \\dots$',
    'Carabiners and edges can waste half or more of the force; rollers and good pulleys save it.',
    '**Lower when you can; use the least MA that works.** Big systems overload snagged loads and anchors.',
    'Keep people out of the line of pull of anything under tension.',
    'Hauling or lowering people is **formal-training only**; explore it here **virtually**.',
  ],
  furtherReading: ['rope-cmc-manual', 'rope-on-rope', 'freedom-hills'],
  references: ['rope-cmc-manual', 'rope-on-rope', 'freedom-hills', 'hibbeler-statics', 'rope-nfpa-1006', 'mra'],
}
