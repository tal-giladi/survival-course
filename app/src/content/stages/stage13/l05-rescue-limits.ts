import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's13-l5',
  stage: 13,
  order: 5,
  title: 'Improvised rescue systems and their limits',
  level: 'expert',
  minutes: 55,
  prerequisites: ['s13-l4'],
  concepts: ['rescue-limits', 'rescue-hierarchy', 'terrain-classes', 'training-scope', 'scene-safety'],
  objectives: [
    'Recognise **terrain classes** and the moment a slip becomes a fall — and turn back before it.',
    'Work through the **rescue response ladder**: prevent a second casualty, call early, talk–reach–throw, care without rope, and leave rope rescue to trained teams.',
    'Explain, with numbers, why **improvised rope rescue** by untrained people so often fails: grip, shock loads, anchors, edges and single points of failure.',
    'Name what requires **formal training** (belaying, rappelling, anchors for people, raising and lowering, crevasse and swiftwater rescue) and where to get it.',
    'Plan what you *can* do for someone stuck or injured on steep ground while help comes.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'What this lesson will not teach',
      md: 'You will **not** find instructions here for improvised harnesses, body rappels, hasty belays, raising or lowering a person, or rope-assisted river crossings. Those techniques exist in older manuals; used without training they injure and kill rescuers and patients. **Life-safety rope work requires qualified, hands-on instruction and certified equipment.** This lesson teaches the judgement around them.',
    },
    {
      type: 'md',
      md: `### Terrain: when does rope enter the picture?

The key question on steep ground is not the angle; it is the **consequence**: *if I slip here, do I stop — or fall?*

- **Walking terrain**: a slip is a stumble.
- **Steep ground and easy scrambling**: hands for balance; a slip may slide but usually stops.
- **Exposed scrambling**: hands needed, and a slip could become a fall. Guides often use a rope here — with training, anchors and techniques specific to it.
- **Climbing / high-angle**: the rope or your grip holds you. Formal training only.

Two practical rules: **going down is harder than going up** (many “stuck on a ledge” call-outs start with climbing up something the person could not reverse), and **the ground changes** — wet rock, frost, loose scree, snow patches and darkness move terrain up a class. Stage 12’s slope-angle and rockfall lessons apply here.`,
    },
    { type: 'diagram', id: 's13-terrain-classes', caption: 'Terrain classes by consequence. The untrained answer to “a slip could become a fall” is to turn back.' },
    {
      type: 'md',
      md: `### Low-angle and high-angle

Rope rescuers distinguish **low-angle** terrain, where the ground carries most of a patient’s and rescuers’ weight and the rope mainly helps and backs up, from **high-angle** terrain, where the rope carries everything. The physics from Lessons 3 and 4 applies to both; the consequences of error do not. Even low-angle litter work is taught on courses, because a litter team on a slope is a load, a set of anchors and a haul system all at once.

### Why improvised rope rescue goes wrong

- **Grip cannot hold a fall.** A person sliding or falling generates forces of several times their weight in a fraction of a second. A rope gripped in the hands slides and burns; a rope tied round an untrained holder pulls them over too.
- **Shock loads and fall factors.** Slack in the system turns a slip into a fall onto the rope (Lesson 1). Low-stretch and utility ropes transmit brutal forces.
- **Anchors and angles.** An anchor that feels solid to a hand pull can fail under a shock load or a different direction of pull; wide angles and redirects multiply forces (Lesson 3).
- **Edges.** A loaded rope moving over rock can be cut through.
- **Single points of failure.** Rescue teams use two independent rope systems (main and belay), certified hardware and constant checks. An improvised system usually has one of everything.
- **Human factors.** Urgency, emotion, darkness and cold drive rushed decisions (Stage 1’s heuristic traps). Rescuers regularly become casualties in water, cliff and confined-space incidents.

Rope in **moving water** deserves a special warning: a rope tied to a person in current can pin them under water with enormous force (Stage 12). Swiftwater rope techniques are a specialised course.`,
    },
    { type: 'diagram', id: 's13-rescue-ladder', caption: 'The rescue response ladder: most help happens without a rope at all.' },
    {
      type: 'md',
      md: `### What you *can* do

1. **Don’t become the second casualty.** Stop, keep everyone else back from the edge, and look for rockfall, water and weather hazards (scene safety, Stage 9).
2. **Call for help early** — emergency number, satellite messenger or **PLB** — with a precise location, what happened, the person’s condition and the terrain. Mountain rescue, SAR and fire services have rope teams; the earlier they start, the more daylight they have.
3. **Talk.** A person stuck on a ledge who stays still, sits down, and keeps low and away from the edge is often safe until rescuers arrive. Your calm voice is the most important tool you have.
4. **Reach or throw from a safe place** — only where you cannot be pulled in or over: a pole or a thrown bag to someone who can hold it on easy ground or in slack water.
5. **Care without rope.** Send down (or lower) **gear** — a jacket, a warm layer, water, a light, a phone battery — never people. Keep them warm (Stage 8), give first aid you are trained for (Stage 9), mark the spot and signal (Stage 1).
6. **Guide the rescuers in:** meet them at a road or trail junction, or signal your position with light or a whistle.

### Where to learn the real thing

- **Climbing and mountaineering** courses with qualified instructors (national mountain-guide or instructor bodies; UIAA-member federations run and recognise training).
- **Canyoneering** courses for descending and rope handling in canyons.
- **Rope rescue** courses at awareness, operations and technician levels (standards such as NFPA 1006 describe these), often through fire, SAR or mountain-rescue organisations.
- **Joining a SAR or mountain-rescue team** — they train members from scratch.
- **Wilderness first aid** — the medical half of any rescue (Stage 9).`,
    },
    { type: 'sim', id: 'mechanical-advantage', caption: 'Virtual demonstration: set the free-play load to 80 kg, hanging, and compare a 1:1 over a bare edge with a 3:1 over a roller. Then imagine doing it at night, with one rope and no backup.' },
  ],
  whyItMatters: 'When someone is stuck or hurt on steep ground, the urge to “do something” with the rope in your pack is overwhelming — and it is how bystanders become casualties. Knowing the physics of forces, friction and falls, knowing the terrain line you should not cross, and knowing the rope-free actions that actually help, lets you do the most useful things fast and leave the dangerous things to people trained and equipped for them.',
  science: [
    {
      type: 'md',
      md: `### Why a hand grip cannot stop a fall

In words: to stop a falling person, the rope must remove their kinetic energy over the distance it stretches and slides. The **average** force needed is their weight plus the kinetic energy divided by the stopping distance:

$$
F_{\\text{avg}} = mg + \\frac{\\tfrac12 m v^2}{d}
$$

After falling freely for about 1.3 m, a person is moving at $v = \\sqrt{2gh} = \\sqrt{2 \\times 9.81 \\times 1.27} \\approx 5$ m/s. To stop an 80 kg person in $d = 0.5$ m:

$$
F_{\\text{avg}} = 785 + \\frac{0.5 \\times 80 \\times 5^2}{0.5} = 785 + 2{,}000 \\approx 2.8\\ \\text{kN}
$$

That is an **average**; the peak is higher. It is about 3.6 times the person’s weight — far more than anyone can hold by gripping a rope. Trained belayers use **friction devices** and anchors precisely because hands alone cannot do it.

### Everything adds up

Put the stage together: a knot keeps ~65–75 % of the rope (Lesson 2); a found or utility rope may start far below its rating (Lesson 1); a wide anchor angle can double the force in each leg (Lesson 3); edge friction adds 60 % or more to the haul, and a carabiner “pulley” loses half (Lesson 4). Each factor alone might be survivable; improvised systems often stack several at once, with no backup.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (scrambling).** A walker climbs a short rock step to escape a steep slope and cannot climb back down. Best practice from rescue teams: stay put, sit down, call — rather than a companion attempting to lower a rope.

**Desert canyon.** A hiker jumps down a “short” pour-over and cannot climb back up; the canyon ahead has more drops. Calling for help (often by satellite messenger — there is no phone signal) and waiting in shade beats improvising a rope ascent.

**Coastal cliff.** A dog goes over the edge; the owner follows. Coastal rescue services advise owners to call them rather than go after a pet.

**Arctic / glacier.** A partner falls into a crevasse. Crevasse rescue is a trained, practised skill for roped teams — travelling unroped and untrained on a crevassed glacier is itself the error.

**Tropical river gorge.** A companion is swept into a pool below a cascade. Talk, reach and throw from the bank; do not tie on and wade into moving water.

**Forest.** A hunter falls from a tree stand and hangs in a harness: this is a **suspension emergency** needing fast help from trained responders; call immediately and follow dispatcher advice.

**Urban.** A worker is stuck on scaffolding or a roof edge; building staff call the fire service, keep bystanders back and talk to the person.

**Rural.** Someone is down a well or a silo: **never enter** — confined spaces kill rescuers with bad air. Call the fire service.`,
    },
  ],
  mistakes: [
    'Going after the person instead of calling for help first — becoming the second casualty.',
    'Myth: “Roping together makes an untrained group safer on steep ground.” Without anchors and training, one person’s fall can pull everyone off.',
    'Myth: “A rope handrail keeps people safe.” A hand grip cannot hold a slip; it adds false confidence.',
    'Improvising a harness or body rappel from an old manual or video.',
    'Tying a rope to someone in moving water.',
    'Climbing up something you cannot climb down.',
    'Delaying the call to “see if we can sort it out ourselves” — losing daylight rescuers need.',
    'Entering a well, silo, pit or confined space to help someone who has collapsed there.',
  ],
  exercises: [
    {
      id: 's13-l5-e1',
      title: 'Paper rescue plans: three stuck-person scenarios',
      level: 3,
      safety: 'virtual-only',
      minutes: 45,
      steps: [
        'Write a plan for each: (1) a friend stuck on a ledge 6 m above a scree slope at dusk; (2) a child slid down a steep grassy bank 15 m above a river; (3) a companion jumped into a slot canyon pothole and cannot climb out.',
        'For each, go down the rescue ladder: scene safety → call (what exactly will you say?) → talk / reach / throw from a safe place → care without rope → guiding rescuers.',
        'Write the exact emergency message: location (coordinates), number of people, injuries, terrain, weather, daylight left, your equipment.',
        'Mark every point where an untrained rope “solution” might tempt you, and write why you will not use it.',
      ],
      success: ['Three plans with no untrained rope use.', 'A complete emergency message for each.', 'Daylight and warmth addressed in each plan.'],
      skill: 'fa-evac-plan',
    },
    {
      id: 's13-l5-e2',
      title: 'Find and book formal rope training',
      level: 4,
      safety: 'formal-training',
      minutes: 60,
      steps: [
        'Decide what you actually need: indoor climbing basics, outdoor rock or mountaineering, canyoneering, rope rescue, or joining a SAR / mountain-rescue team.',
        'Find providers through national mountaineering federations, mountain-guide or instructor associations, fire and rescue training bodies or your local SAR team.',
        'Check the instructor’s qualification, the course ratios and whether equipment is certified and provided.',
        'Book it — and add a wilderness first-aid course if you have not done one.',
      ],
      success: ['A booked course with a qualified provider.', 'A written list of what you will and will not do with rope until you have trained.'],
      skill: 'rope-safety-course',
      safetyNote: 'All belaying, rappelling, anchor-building and rope rescue practice happens only under the direct supervision of a qualified instructor with certified equipment.',
    },
    {
      id: 's13-l5-e3',
      title: 'Write your terrain turn-back rules',
      level: 2,
      safety: 'home',
      minutes: 20,
      steps: [
        'Write three observable triggers that mean “turn back” on steep ground (e.g., “hands needed and a slip could become a fall”, “I cannot see how I would climb back down”, “rock or grass is wet and the drop below is serious”).',
        'Add a daylight rule: turn back if the remaining daylight is less than the time back plus a margin.',
        'Share them with the people you walk with and agree that anyone can call a turn-back.',
      ],
      success: ['Three written, observable triggers and a daylight rule.', 'The group has agreed them before the next trip.'],
      skill: 'hazard-go-no-go',
    },
  ],
  simulations: ['mechanical-advantage'],
  quiz: [
    {
      id: 's13-l5-q5',
      kind: 'single',
      prompt: 'Your companion has slid 10 m down a steep, grassy slope and stopped on a small ledge above a drop. They are conscious and holding a tussock. You have a 20 m rope. What first?',
      choices: [
        { id: 'a', text: 'Tie the rope round a tree and climb down it hand over hand to them', why: 'You would be on the same consequential slope with a grip that cannot hold a slip — two casualties.' },
        { id: 'b', text: 'Tell them to stay still, get yourself to safe ground and call for help with your location', why: 'Correct — prevent a second casualty, keep them stable, and start the trained rescue early.' },
        { id: 'c', text: 'Throw them the rope end and pull them back up the slope together', why: 'Neither of you can hold a slip, and you may be pulled down.' },
        { id: 'd', text: 'Go for help on foot straight away, without stopping to tell them', why: 'Call first if you can; if you must leave, tell them your plan and when you will be back.' },
      ],
      answer: 'b',
      concepts: ['rescue-hierarchy', 'scene-safety', 'immediate-danger'],
      explanation: 'Stop, stabilise, call. Then care without rope: talk, lower gear (not people) if safe, warmth and signalling.',
    },
    {
      id: 's13-l5-q6',
      kind: 'single',
      prompt: 'A farm worker has collapsed at the bottom of a grain silo. What should others at the scene do?',
      choices: [
        { id: 'a', text: 'Go in quickly with a rope tied round the waist so others can pull you out', why: 'Confined spaces can have lethal air and engulfment hazards; would-be rescuers often die too.' },
        { id: 'b', text: 'Stay out, call the fire service now, keep others away, shut off equipment if safe', why: 'Correct — confined-space rescue is a trained, equipped specialty.' },
        { id: 'c', text: 'Lower a ladder and climb down to check their breathing and pulse', why: 'Same hazard as going in on a rope: the air or grain that felled them can fell you.' },
        { id: 'd', text: 'Wait a while to see if they recover before calling anyone', why: 'Call immediately.' },
      ],
      answer: 'b',
      concepts: ['scene-safety', 'rescue-limits'],
      explanation: 'The rescuer-as-second-casualty pattern is common in confined spaces, water and cliffs. Call, isolate, keep others out.',
    },
    {
      id: 's13-l5-q3',
      kind: 'single',
      prompt: 'An untrained group on steep snow considers tying themselves together with a rope. Which statement is correct?',
      choices: [
        { id: 'a', text: 'A sliding person can pull the others off; roped travel is a trained skill', why: 'Correct — without anchors and trained technique, the forces of a slide pull everyone off.' },
        { id: 'b', text: 'It makes everyone safer, because the others can hold a person who slips', why: 'Myth — untrained people cannot hold the force of a sliding person.' },
        { id: 'c', text: 'It is safe as long as the strongest person goes last to hold any slip', why: 'Strength does not help without anchors and technique; the last person is pulled off too.' },
        { id: 'd', text: 'It is safe as long as the rope is a dynamic climbing rope', why: 'The rope type does not solve the missing anchors and training.' },
      ],
      answer: 'a',
      concepts: ['rescue-limits', 'terrain-classes'],
      explanation: 'Without anchors and trained technique, the forces of a sliding person pull the others off. Roped travel is a trained skill.',
    },
    {
      id: 's13-l5-q4',
      kind: 'single',
      prompt: 'Which of these can you do for real without formal, hands-on training?',
      choices: [
        { id: 'a', text: 'Belaying a climber at a crag', why: 'Needs formal training.' },
        { id: 'b', text: 'Rappelling (abseiling) down a drop', why: 'Needs formal training — descending on rope is unforgiving of any error in set-up.' },
        { id: 'c', text: 'Inspecting and logging your own rope', why: 'Correct — a safe home skill.' },
        { id: 'd', text: 'Building an anchor to hold a person', why: 'Needs formal training.' },
      ],
      answer: 'c',
      concepts: ['training-scope', 'rescue-limits'],
      explanation: 'Knots, inspection and force reasoning are home skills. Anything that holds a person — belaying, rappelling, anchors, raising or lowering an injured person — is formal-training only.',
    },
    {
      id: 's13-l5-q1',
      kind: 'single',
      prompt: 'Which sequence is the rescue response ladder, from first to last?',
      choices: [
        { id: 'a', text: 'Stay safe → call → reach/throw → care → rope rescue', why: 'Correct — no second casualty, call early, help from a safe place, care without rope, and rope rescue last by trained teams.' },
        { id: 'b', text: 'Call → stay safe → reach/throw → care → rope rescue', why: 'Your own safety comes before anything else, even the call.' },
        { id: 'c', text: 'Stay safe → reach/throw → rope rescue → call → care', why: 'Rope rescue is the last rung, and calling early is near the top.' },
        { id: 'd', text: 'Stay safe → reach/throw → care → call → rope rescue', why: 'Call for help early with a precise location — before the hands-on care.' },
      ],
      answer: 'a',
      concepts: ['rescue-hierarchy', 'scene-safety'],
      explanation: 'Most lives are saved on the upper rungs. Rope rescue is the last rung and belongs to trained teams.',
    },
    {
      id: 's13-l5-q2',
      kind: 'single',
      prompt: 'An 80 kg person has fallen freely to about 5 m/s. What average force stops them in 0.5 m? Use $F = mg + \\tfrac12 mv^2/d$ with g = 9.81 m/s².',
      choices: [
        { id: 'a', text: '2.8 kN', why: 'Correct — $785 + (0.5 \\times 80 \\times 25)/0.5 \\approx 2785$ N.' },
        { id: 'b', text: '2.0 kN', why: 'This forgets the body weight $mg$ that the rope must also hold.' },
        { id: 'c', text: '4.8 kN', why: 'This drops the ½ in the kinetic energy term.' },
        { id: 'd', text: '1.2 kN', why: 'This forgets to square the speed ($v^2 = 25$, not 5).' },
      ],
      answer: 'a',
      concepts: ['rescue-limits', 'fall-factor'],
      explanation: '$785 + (0.5 \\times 80 \\times 25)/0.5 = 785 + 2000 \\approx 2.8$ kN — about 3.6 × body weight on average, more at the peak. No hand grip holds that.',
    },
  ],
  scenario: {
    id: 's13-l5-sc',
    setup: 'Desert canyon, 17:30, sunset at 19:10. Your friend scrambled up a 5 m rock step to look around and now cannot climb down; they are on a ledge, uninjured but scared. You have a 20 m length of 8 mm utility rope, a warm layer, a headlamp, water, a phone with no signal and a personal locator beacon (PLB). Night temperatures will fall to about 5 °C.',
    question: 'What is your best plan?',
    choices: [
      { id: 'a', text: 'Throw the rope up, tell them to tie it round a rock and climb down it hand over hand.', why: 'An unknown anchor, utility rope, an untrained descent and no backup: a slip becomes a fall onto the rocks with you underneath.' },
      { id: 'b', text: 'Climb up to them to help them down the way they came.', why: 'You would be two people stuck — or falling — on terrain that one of you already could not reverse.' },
      { id: 'c', text: 'Tell them to sit down, keep away from the edge and stay put; activate the PLB now; if they can catch it without leaning out, throw up the rope end so they can pull up a bag with the warm layer, water and headlamp; prepare for night: warmth, light, signals; stay in voice contact.', why: 'Best: no one is on consequential ground, rescue starts with daylight left, and your friend is kept warm, hydrated and calm.' },
      { id: 'd', text: 'Leave them and hike out 3 hours to find phone signal.', why: 'The PLB works now; leaving them alone at night without warmth or contact adds risk to both of you.' },
    ],
    best: 'c',
    debrief: 'This pulls the whole course together: immediate danger and no second casualty (Stage 1), terrain you cannot reverse, a daylight budget, a cold desert night (Stage 8), signalling with a PLB and light (Stages 1 and 14), and the rope-free rungs of the rescue ladder. A trained canyon or mountain-rescue team will bring certified gear, anchors and a backup system. Your job is to keep everyone safe and warm until they do.',
    concepts: ['rescue-hierarchy', 'rescue-limits', 'daylight', 'signaling', 'hypothermia'],
  },
  summary: [
    'Ask on steep ground: **“if I slip, do I stop — or fall?”** If “fall”, turn back. Do not climb what you cannot reverse.',
    'Rescue ladder: **no second casualty → call early → talk/reach/throw from safety → care without rope → trained rope teams**.',
    'Stopping a falling person takes kilonewtons; **hands cannot hold it**, and improvised systems stack weak links with no backup.',
    'Never tie a rope to someone in moving water; never enter confined spaces to rescue.',
    'Belaying, rappelling, anchors for people, raising and lowering: **formal training only**.',
    'Knots, inspection and force reasoning are skills you can practise safely now; book a course for the rest.',
  ],
  furtherReading: ['freedom-hills', 'mra', 'icar'],
  references: ['freedom-hills', 'mra', 'icar', 'nasar', 'rope-nfpa-1006', 'rope-cmc-manual', 'langmuir-mountaincraft', 'fa-wms-spine-2024'],
}
