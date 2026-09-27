import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's16-l3',
  stage: 16,
  order: 3,
  title: 'Earthquake and building evacuation',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s16-l1'],
  concepts: ['drop-cover-hold', 'aftershocks', 'post-quake-checks', 'gas-leak', 'building-evacuation', 'immediate-danger'],
  objectives: [
    'Protect yourself during shaking with **Drop, Cover, Hold On**, and adapt it (bed, wheelchair, outdoors, driving, coast).',
    'Reject the common **myths**: the doorway, running outside, the “triangle of life”.',
    'Run the **first-hour checks** after shaking: shoes and light, injuries, gas, water, electricity, building damage.',
    'Explain **aftershocks** and why you stay out of damaged buildings.',
    'Evacuate a building safely in an earthquake or fire: **stairs not lifts, two ways out, low under smoke, doors closed**.',
  ],
  explanation: [
    {
      type: 'md',
      md: `An earthquake gives no time to think: strong shaking can start with no warning and last from a few seconds to a few minutes. Most injuries in modern buildings are not from collapse but from **falling and flying objects** — furniture, glass, ceiling fittings — and from people trying to **move** while the floor moves. So the rule is: **protect yourself where you are, immediately.**

### During the shaking: Drop, Cover, Hold On`,
    },
    { type: 'diagram', id: 's16-drop-cover-hold', caption: 'Drop, Cover, Hold On — the recommended action in most situations.' },
    {
      type: 'md',
      md: `1. **Drop** onto your hands and knees before the shaking knocks you down. This protects you from falling and lets you crawl if needed.
2. **Cover** your head and neck with one arm. If a sturdy table or desk is close, crawl under it; if not, get low beside an **interior wall**, away from windows, tall furniture and anything that can fall.
3. **Hold On** to your shelter (or your head and neck) until the shaking **stops**. Be ready to move with the table.

**Adaptations:**
- **In bed:** stay there, turn face down and cover your head and neck with a pillow.
- **Wheelchair or walker:** lock the wheels (or sit if you can), bend forward, cover head and neck with arms or a pillow.
- **Outdoors:** move a few steps away from buildings, trees, streetlights and power lines if you can do so safely, then drop and cover.
- **Driving:** pull over away from bridges, overpasses and power lines; stop; stay in the car with the seatbelt on.
- **Crowded places:** do not rush for exits; drop and cover where you are.
- **Coast:** after strong or long shaking (hard to stand, or lasting more than about 20 seconds) or if the sea suddenly rises or drains away, **go to high ground or inland on foot immediately** — do not wait for an official warning. A widely used coastal rule: *“Long or strong, get gone.”*`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Myths that injure people',
      md: '**“Stand in a doorway.”** A myth from old unreinforced houses. In modern buildings doorways are no stronger than anything else, the door can swing into you, and you must cross a moving floor to get there.\n\n**“Run outside.”** Most people who try are knocked down, cut by glass or hit by falling façades, signs and roof tiles on the way.\n\n**“The triangle of life” (lie beside furniture so the ‘void’ protects you).** Discredited by earthquake-safety experts; it assumes pancake collapse and wastes the seconds you have. Drop, Cover, Hold On.',
    },
    {
      type: 'md',
      md: `### When the shaking stops: the first hour

Work through the same order as every emergency in this course — **immediate danger first**:

1. **Shoes and light.** Put on shoes (broken glass is the commonest after-quake injury in homes) and use a **torch, never a flame**.
2. **Check yourself, then others.** Control bleeding with firm direct pressure; do not move someone with a suspected neck or back injury unless they are in immediate danger. (Stage 9; take a hands-on first-aid course.)
3. **Gas.** If you **smell gas or hear hissing**: no flames, no switches, no phones in that room; open windows, turn the gas off at the main valve **only if you know how**, get everyone out, and report it from outside. Once shut off, **only the gas company** should turn it back on.
4. **Water and electricity.** If pipes are broken, shut the main water stopcock (this also keeps the water in your hot-water tank clean). If wiring is damaged, sparks are visible or there is water near outlets, switch off at the main switch if safe to reach.
5. **Building.** Look for signs of **structural** damage: new diagonal cracks in concrete walls or columns, a leaning building, jammed doors, damaged stairs, separated additions or chimneys. If you see them — or if there is gas, fire or a tsunami risk — **get out** by the stairs with your go-bag, and help others.
6. **Communicate.** One text to the out-of-area contact; radio for official information.
7. **Neighbours.** Knock for people who live alone, older people and families with small children.`,
    },
    { type: 'diagram', id: 's16-aftershocks', caption: 'Aftershocks are most frequent in the first hours and days, but a strong one can come much later.' },
    {
      type: 'md',
      md: `### Aftershocks

A large earthquake is followed by **aftershocks** — smaller earthquakes on and around the same fault. They are most frequent in the first hours and decline over days to weeks, but **a strong aftershock can come days later** and can bring down buildings the main shock only weakened. So:

- Drop, Cover, Hold On **every** time.
- **Do not re-enter a damaged building** until it has been inspected; do not sleep in one.
- Stay clear of façades, chimneys, glass and power lines outside.

### If you are trapped

Stay still to avoid raising dust; cover your mouth with cloth. **Text** if you have a phone, **tap on a pipe or wall** or use a **whistle** so rescuers can hear you. Shout only as a last resort — it tires you and draws in dust.`,
    },
    {
      type: 'md',
      md: `### Evacuating a building (earthquake or fire)

Most building evacuations are for **fire**, and the rules apply after a quake too:

- **Know two ways out** of every room and every floor. Practise with the family twice a year.
- **Stairs, never lifts.** Lifts can stop between floors and shafts fill with smoke.
- **Smoke:** get **low** — the cleanest air is near the floor. Heavy smoke and toxic gases collect first along the ceiling.
- **Doors:** feel the door and handle with the back of your hand before opening. If hot, or smoke comes around it, keep it shut and use your second way out. **Close doors behind you** — a closed door slows fire and smoke.
- **If you cannot get out:** stay in a room with a window, close the door, block gaps with wet towels, call the emergency number, signal from the window.
- **High-rise buildings** often have a specific fire plan — some tell residents of flats not affected by the fire to **stay put** in their fire-resisting flat, others to evacuate fully. Know your building’s plan, and follow firefighters’ instructions.
- **People with limited mobility:** agree in advance who helps them; many buildings have refuge areas in protected stairwells where people wait for firefighters.

Once out, **go to the meeting point** and **stay out**. Report missing people to firefighters; never go back in.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Before the next earthquake',
      md: 'Fasten tall furniture, bookcases, TVs and water heaters to walls; put heavy things on low shelves; fit latches to kitchen cupboards; keep beds away from windows and under nothing heavy; keep shoes and a torch by every bed. Take part in a public earthquake drill (e.g., the annual “ShakeOut” drills held in many countries).',
    },
  ],
  whyItMatters: 'Earthquakes kill and injure mostly through what falls on people and what people do in the first seconds and the first hour: running, crossing moving floors, walking barefoot on glass, lighting candles near gas, and going back into damaged buildings. A few rehearsed actions change those odds dramatically — and the same building-evacuation habits protect you in the far more common house or office fire.',
  science: [
    {
      type: 'md',
      md: `### Why you get seconds of warning (sometimes)

An earthquake sends out fast, weaker **P-waves** (≈ 6 km/s in the crust) and slower, more damaging **S-waves** (≈ 3.5 km/s). An earthquake early-warning system detects the P-waves near the source and broadcasts an alert that can outrun the S-waves. The warning time at distance $d$ is roughly

$$
t_{\\text{warn}} \\approx \\frac{d}{v_S} - \\frac{d}{v_P} - t_{\\text{processing}}
$$

At $d = 60$ km: $60/3.5 - 60/6 \\approx 17.1 - 10 = 7.1$ s, minus a few seconds of processing — enough to drop, cover and hold on, not enough to run anywhere. Close to the epicentre, there may be no warning at all.

### Aftershock rates: Omori’s law

The rate of aftershocks falls roughly in inverse proportion to time since the main shock:

$$
n(t) \\propto \\frac{1}{(t + c)^p}, \\quad p \\approx 1
$$

In words: if there were 100 felt aftershocks in the first day, expect roughly half as many on day 2, a third as many on day 3, and a tenth as many on day 10 — fewer, but not zero. And an empirical rule of thumb (Båth’s law) says the **largest aftershock is often about one magnitude unit smaller** than the main shock — still a damaging earthquake after a large main shock. That is why damaged buildings stay off-limits for days.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**City apartment, night (see Capstone 12).** Stay in bed covering head and neck; then shoes and torch; bleeding control; gas smell → valve, windows, out; stairs; knock for the neighbour; park meeting point away from the building.

**Office tower, daytime.** Under the desk; afterwards, stairs only; follow the floor wardens; do not stand under the glass canopy at the entrance.

**Coastal town.** The shaking is long and strong: walk immediately to high ground by the signed tsunami route, not by car. Stay there until officials give the all-clear — tsunamis come in several waves over hours.

**Mountain village.** Shaking triggers rockfall and landslides: stay away from steep slopes and river gorges afterwards; roads may be blocked for days, so the home kit must last longer.

**Rural farmhouse (older masonry).** Unreinforced stone and brick walls and chimneys fall outwards: drop and cover inside, away from walls; afterwards, keep clear of the outside walls and chimney.

**Driving in a city.** Pull over away from overpasses and power lines, stay belted in until it stops, then continue cautiously — or leave the car and walk if roads are damaged, keeping clear of emergency routes.`,
    },
  ],
  mistakes: [
    'Myth: running for a doorway during the shaking.',
    'Myth: running outside during shaking — falling façades and glass are deadliest near buildings.',
    'Myth: the “triangle of life”.',
    'Walking barefoot in the dark among broken glass.',
    'Using candles, lighters or light switches when gas may be leaking.',
    'Using the lift after an earthquake or during a fire.',
    'Turning the gas back on yourself after shutting it off.',
    'Going back into a visibly damaged building, or sleeping in one, during an aftershock sequence.',
    'Driving towards the coast (or staying on the beach) after long or strong shaking.',
  ],
  exercises: [
    {
      id: 's16-l3-e1',
      title: 'Household earthquake drill',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['Household members', 'Torches', 'Shoes'],
      safetyNote: 'Practise movements slowly; do not practise running on stairs. Do not actually turn off the gas supply — only locate the valve and the tool.',
      steps: [
        'Walk through each room and agree the best Drop–Cover–Hold On spot (under a sturdy table, or low against an interior wall away from windows and tall furniture).',
        'At an unannounced moment, call “Earthquake!”: everyone drops, covers and holds on for 60 seconds.',
        'Lights off: find shoes and torch by feel from each bed.',
        'Locate (do not operate) the gas valve and its tool, the water stopcock and the electricity main switch.',
        'Walk the exit route by the stairs to meeting place 1, noting outdoor hazards (glass, façades, power lines).',
      ],
      success: ['Everyone reaches cover within 3 seconds from any room.', 'Every bed has shoes and a torch within reach.', 'Adults can point to all three shut-offs.'],
      skill: 'utility-shutoffs',
    },
    {
      id: 's16-l3-e2',
      title: 'Fasten and fix: a room-by-room hazard hunt',
      level: 3,
      safety: 'home',
      minutes: 90,
      steps: [
        'In each room, ask: what could fall on someone, block an exit or break and spill?',
        'List tall furniture, TVs, mirrors and pictures over beds, heavy items on high shelves, the water heater.',
        'Fix the top three risks this month (wall straps, moving heavy items low, moving a bed away from a window).',
        'Check two ways out of each bedroom, and that the route to the stairs is clear.',
      ],
      success: ['Three highest risks fixed.', 'Every bedroom has two known ways out.'],
      skill: 'home-plan',
      safetyNote: 'Use a stable step ladder with a helper; fix straps into studs or suitable wall anchors.',
    },
  ],
  quiz: [
    {
      id: 's16-l3-q1',
      kind: 'order',
      prompt: 'Order the first actions after strong shaking stops at night at home (no one is trapped).',
      items: [
        { id: 'shoes', text: 'Shoes on, torch on (no flame)' },
        { id: 'injuries', text: 'Check yourself and others; control bleeding' },
        { id: 'gas', text: 'Check for gas smell/hissing; deal with it' },
        { id: 'building', text: 'Check for structural damage; decide to stay or leave' },
        { id: 'text', text: 'Text the out-of-area contact' },
      ],
      answer: ['shoes', 'injuries', 'gas', 'building', 'text'],
      concepts: ['post-quake-checks', 'immediate-danger'],
      explanation: 'Protect the rescuer (shoes, light), then life-threatening injuries, then the hazards that can kill everyone (gas, collapse), then communication.',
    },
    {
      id: 's16-l3-q2',
      kind: 'single',
      prompt: 'You are in a supermarket when strong shaking starts. What do you do?',
      choices: [
        { id: 'a', text: 'Run for the exit before the crowd', why: 'You will be knocked down and hit by falling goods or glass.' },
        { id: 'b', text: 'Move away from tall shelves if you can in a step or two, drop, cover your head and neck, hold on until it stops', why: 'Correct.' },
        { id: 'c', text: 'Stand in the doorway to the stockroom', why: 'The doorway myth.' },
        { id: 'd', text: 'Lie down next to a shelf to create a void', why: 'The discredited “triangle of life”.' },
      ],
      answer: 'b',
      concepts: ['drop-cover-hold'],
      explanation: 'Protect yourself where you are; do not try to move far during shaking.',
    },
    {
      id: 's16-l3-q3',
      kind: 'truefalse',
      prompt: 'After a strong earthquake, if your building has new diagonal cracks in concrete walls, it is safe to go back in once the first hour has passed without aftershocks.',
      answer: false,
      concepts: ['aftershocks', 'post-quake-checks'],
      explanation: 'Aftershocks can come days later, and the largest is often only about one magnitude unit smaller than the main shock. Stay out until the building is inspected.',
    },
    {
      id: 's16-l3-q4',
      kind: 'numeric',
      prompt: 'P-waves travel at about 6 km/s and S-waves at about 3.5 km/s. How many seconds after the P-wave does the S-wave arrive 70 km from the epicentre? (One decimal.)',
      unit: 's',
      answer: 8.3,
      tolerance: 0.3,
      concepts: ['drop-cover-hold'],
      explanation: '$70/3.5 - 70/6 = 20 - 11.7 = 8.3$ s — the maximum possible early-warning time, before processing delays. Enough to drop and cover, not to run.',
    },
    {
      id: 's16-l3-q5',
      kind: 'multi',
      prompt: 'Your office building is on fire. Which actions are correct?',
      choices: [
        { id: 'a', text: 'Use the stairs, not the lift', why: 'Yes.' },
        { id: 'b', text: 'Feel doors with the back of your hand before opening', why: 'Yes — a hot door means fire behind it.' },
        { id: 'c', text: 'Stay low under smoke', why: 'Yes — the cleanest air is near the floor.' },
        { id: 'd', text: 'Leave doors open behind you for others', why: 'No — close them to slow fire and smoke.' },
        { id: 'e', text: 'Go back for your laptop once outside', why: 'No — never re-enter.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['building-evacuation'],
      explanation: 'Two ways out, stairs, low, doors checked and closed, and never go back in.',
    },
    {
      id: 's16-l3-q6',
      kind: 'single',
      prompt: 'On a beach, you feel shaking that makes it hard to stand and lasts about 40 seconds. No siren sounds. What should you do?',
      choices: [
        { id: 'a', text: 'Wait for an official tsunami warning', why: 'Local tsunamis can arrive before any warning is issued.' },
        { id: 'b', text: 'Walk or run to high ground or inland immediately', why: 'Correct — long or strong shaking is the natural warning.' },
        { id: 'c', text: 'Go to the water’s edge to see whether the sea recedes', why: 'The worst place to be.' },
        { id: 'd', text: 'Drive along the coast road to get home', why: 'Roads jam and the coast road is in the inundation zone.' },
      ],
      answer: 'b',
      concepts: ['evacuation-triggers', 'drop-cover-hold'],
      explanation: '“Long or strong, get gone.” Natural warnings — strong shaking, a roar, the sea rising or draining — mean leave now, on foot if possible.',
    },
  ],
  scenario: {
    id: 's16-l3-sc',
    setup: 'Ten minutes after a strong earthquake you are standing outside your four-storey block with your two children. The building has large diagonal cracks in the stairwell. Your elderly neighbour on the 3rd floor did not come out. A smaller aftershock has just shaken glass from a window. Firefighters are not in sight.',
    question: 'What is your best action?',
    choices: [
      { id: 'a', text: 'Run back up quickly to fetch her.', why: 'Re-entering a visibly damaged building during aftershocks can make you the second casualty — and leave your children alone.' },
      { id: 'b', text: 'Take the children to the meeting point away from the building, ask other neighbours whether anyone has seen her, try calling/texting her, and report her location to the first responders you can reach; stay out of the building.', why: 'Best: keeps your family safe, uses the community, and gets trained responders the exact information they need.' },
      { id: 'c', text: 'Wait by the entrance so you can see her when she comes out.', why: 'The area beside a damaged building is the most dangerous outdoors — glass and façade pieces fall in aftershocks.' },
      { id: 'd', text: 'Drive the children to relatives in another town and come back later.', why: 'Leaves the neighbour unreported and puts you on damaged, jammed roads.' },
    ],
    best: 'b',
    debrief: 'This is the immediate-danger question from Stage 1 applied to a city: do not create a second casualty. You can still help a lot from outside — account for people, pass precise information (who, which flat, her mobility) to responders, and keep your own dependants safe. If you have CERT-style training and the building is not damaged, the answer can change; here, the cracks and aftershocks say no.',
    concepts: ['immediate-danger', 'aftershocks', 'vulnerable-neighbours', 'building-evacuation'],
  },
  summary: [
    '**Drop, Cover, Hold On** — where you are, immediately; in bed, stay and cover head and neck.',
    'Doorways, running outside and the “triangle of life” are **myths**.',
    'After shaking: **shoes and torch → injuries → gas → building → communicate → neighbours**.',
    'Aftershocks decline roughly as 1/t but can be strong days later: **stay out of damaged buildings**.',
    'Evacuate by **stairs**; two ways out; low under smoke; feel and close doors; never go back in.',
    'On the coast: **long or strong, get gone** — to high ground, on foot.',
  ],
  furtherReading: ['shakeout-dcho', 'ready-earthquakes', 'ready-home-fires'],
  references: ['shakeout-dcho', 'ready-earthquakes', 'ready-home-fires', 'ready-tsunamis', 'usgs-aftershocks', 'nz-get-ready', 'fema-cert', 'fa-stop-the-bleed'],
}
