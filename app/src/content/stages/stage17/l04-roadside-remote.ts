import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's17-l4',
  stage: 17,
  order: 4,
  title: 'Roadside emergencies and remote roads',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s17-l1'],
  concepts: ['vehicle-roadside-safety', 'vehicle-signaling', 'vehicle-nav-failure', 'visibility', 'signaling', 'flash-flood', 'moving-water-force', 'offline-maps', 'scene-safety'],
  objectives: [
    'Handle a **roadside breakdown or crash** safely: where to stop, what to switch on and wear, where to stand, and whom to call.',
    'Make a stranded vehicle **visible** by day and night with car-based and carried signals, and use a **beacon** correctly.',
    'Recognise and recover from **navigation failure** on remote roads — GPS routing onto impassable tracks, wrong turns, no coverage.',
    'Refuse **flooded roads** and understand why a little moving water can float a car.',
    'Apply stay-or-move and turnaround rules to a road journey that is going wrong.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Many vehicle emergencies are not remote at all: a breakdown on a busy highway at night, a crash on a rural road, a car stopped in a flooded dip. There the first danger is **other traffic** and **the environment around the car**, not heat or cold.

### Breakdowns on a road

1. **Signal and get off the road** as far as you safely can — a hard shoulder, lay-by, verge or side road. If the car is still moving, a few hundred metres to a safe place is worth it.
2. **Hazard lights on** (and sidelights at night or in poor visibility).
3. **Hi-vis vest on before you get out**; get out on the side away from traffic, with passengers.
4. **Wait away from the car and the traffic** — behind a barrier or up a bank, **upstream** of the car (so a vehicle hitting yours does not push it into you). Do not stand between cars or in front of your own.
5. **Warning triangle** where the law requires and it is safe to place it — well behind the car, farther on fast roads and before bends; many jurisdictions ban placing one on motorways.
6. **Call for help:** breakdown service, or the emergency number if you are in danger (112 across the EU and many other countries, 911 in North America, 000 in Australia, 999 in the UK). Use emergency location sharing on your phone, or give road name, direction and the nearest marker post or junction.
7. **If you cannot get off a fast road** or it is unsafe to get out, stay in the car with your seat belt on and hazards on, and call the emergency number.`,
    },
    { type: 'diagram', id: 's17-roadside', caption: 'On a busy road the threat is other vehicles: off the road, lit up, and waiting behind the barrier, upstream of the car.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Know the rules where you drive',
      md: 'Road laws differ by country and change: many European countries **require** a warning triangle and hi-vis vests in the car; the **UK Highway Code** tells drivers to place a triangle at least 45 m behind a broken-down vehicle on ordinary roads but **not** to use one on motorways; some countries require first-aid kits or fire extinguishers. Check the rules for every country you drive in. **Signal fires** and burning tyres are illegal or dangerous in many places and can start wildfires — use lights, mirrors, cloth and beacons instead; light a fire only where it is legal and safe (Stage 3).',
    },
    {
      type: 'md',
      md: `### After a crash

Stage 1’s scene safety and Stage 9’s first aid apply directly: **protect the scene** (hazards, triangle, stop other traffic only if you safely can), **call the emergency number early**, turn off engines, watch for fuel leaks and fire. Treat life-threatening bleeding; do not move injured people unless they are in danger where they are (fire, traffic, water) — follow current WMS/ILCOR guidance on spinal care. A **first-aid course** (and ideally WFA for remote roads) is the most valuable preparation of all.

### Being seen from the road and the air

Searchers must notice you before they can help. A vehicle is already a large, regular, often brightly coloured object; make it more so:`,
    },
    { type: 'diagram', id: 's17-vehicle-signals', caption: 'Signals from a vehicle: by day, contrast and movement; by night, light; always, a beacon if you carry one.' },
    {
      type: 'md',
      md: `- **Hood/bonnet up** is widely understood as “this car needs help”; add a **bright cloth** on the antenna or a door.
- **Ground signals** (Stage 14): a large “V” (require assistance) or “SOS” in contrasting materials on open ground near the car — rocks, branches, spare clothing, floor mats; several metres long, straight lines and sharp angles that nature rarely makes.
- **Signal mirror** in sunshine toward aircraft or distant vehicles; it can be seen from very far away (Stage 1).
- **Lights at night:** headlights, hazard lights, a torch or strobe — in groups of three. Use the car battery sparingly; save it for when you see or hear searchers.
- **Sound:** three whistle blasts or three horn blasts, repeated.
- **Beacon or satellite SOS:** once activated, **leave it on**, keep it with you, antenna vertical with a clear view of the sky, and **stay put** — rescuers home in on the position.
- **Phone:** if you have any signal, call the emergency number or text; a text may get through when a call will not. Keep the phone warm and in low-power mode; check at set times.

### Navigation failure on remote roads

Navigation apps route by their map data, which may not know that a road is **closed, washed out, seasonal, private or impassable** for your vehicle. Park services in desert parks warn that GPS directions can lead visitors onto dangerous roads. Protect yourself:

- **Plan the route yourself** on a map before departure; do not accept “shortest route” suggestions onto unknown tracks.
- Carry **offline maps and a paper map**; know the names of the roads in order (Stage 2).
- Set **turnaround triggers**: the road becomes rougher than your car can handle, it no longer matches the map, fuel falls below what you need to return, or daylight runs short. **Turn back while you still can.** Backtracking on the road you know is the most reliable relocation method (Stage 2).
- If you are unsure where you are: **stop**, keep the car on the known road, re-read the map, look for road numbers and landmarks. Do not keep driving “to see what’s round the corner” on a track that is deteriorating.

### Flooded roads: turn around

**Never drive into flood water.** You cannot see the depth, the current or whether the road beneath has been washed away. According to Ready.gov, about **15 cm (6 in)** of moving water can knock a person down and about **30 cm (1 ft)** can sweep a vehicle away. A large share of flood deaths happen in vehicles (Stage 12). The same applies to desert washes after distant storms. If your car is caught in rising water and you cannot drive back out, get out early — through a window if necessary — and onto high ground; do not stay in a car that is being carried by water.`,
    },
    { type: 'sim', id: 'stranded-vehicle', caption: 'Play either case and notice how search progress changes when you set out signals, flash lights at night, or activate a beacon.' },
  ],
  whyItMatters: 'Roadside incidents are among the most common emergencies people face, and the killers are predictable: being hit by traffic while standing by a broken-down car, driving into flood water, and following a navigation app onto a road the car cannot handle. Visibility, getting away from the traffic, refusing flooded roads and turning back early prevent almost all of them.',
  science: [
    {
      type: 'md',
      md: `### Why a little water floats a car

A car is a large, fairly light box: water pressing up on it creates **buoyancy** equal to the weight of the water it displaces (Archimedes). Once the upward force approaches the car’s weight, the tyres lose grip, and the **current** then pushes it sideways. The force of moving water on an object grows roughly with the **square of the speed**:

$$
F = \\tfrac{1}{2} \\rho \\, C_d \\, A \\, v^2
$$

In words: water density $\\rho$ (1000 kg/m³), times a shape factor $C_d$, times the area facing the current $A$, times the speed squared. **Worked example:** water 0.3 m deep against a car side 4 m long gives $A = 1.2$ m²; at $v = 2$ m/s and $C_d \\approx 1$: $F = 0.5 \\times 1000 \\times 1 \\times 1.2 \\times 4 = 2400$ N — while buoyancy is already reducing the car’s grip. Double the speed and the force quadruples. (Stage 12 covers moving-water force in depth.)

### Stopping distance and warning distance

A driver approaching your stopped car needs to **see** it, **react** (about 1–1.5 s) and **brake**. At 100 km/h (about 28 m/s), reaction alone covers roughly $28 \\times 1.5 = 42$ m before braking even starts, and braking takes considerably more. That is why warning devices are placed well back, farther on fast roads and before bends and crests — and why you wait behind a barrier rather than trusting drivers to stop.

### How visible is a signal?

An object is detectable when it contrasts with its background and subtends enough angle at the observer’s eye. A person seen from the air at a few hundred metres is a few pixels of colour; a car is many times larger, and a sunlit mirror flash is far brighter than the ground around it. That is why signals **enlarge** (ground signals), **contrast** (bright cloth, cleared snow) and **flash** (mirror, lights) — and why a person who walks away from the car becomes much harder to find.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Motorway at night (Europe).** A tyre blows out. The driver steers onto the hard shoulder, hazards on, hi-vis vests on in the car, everyone out on the verge side and up the bank behind the barrier, and calls the breakdown service with the marker-post number. No triangle on the motorway, as local law advises.

**Rural two-lane road, North America.** A deer strike leaves the car disabled just over a crest. The driver moves the passengers off the road, places flares and a triangle well back before the crest where it is safe, and calls 911.

**Desert park (USA).** A navigation app routes a couple onto an unmaintained road. The surface deteriorates; they set a turnaround trigger (“if we need four-wheel drive, we go back”) and reverse to the paved road before the car gets stuck.

**Tropical wet season (Southeast Asia, northern Australia).** A causeway is under fast brown water. A local truck drives through; the tourists do not follow. They wait on high ground for the water to fall — within hours.

**Mountain road in fog (Andes, Alps).** Visibility drops to 20 m. The driver pulls completely off at a lay-by, lights on, rather than stopping in the lane, and waits for the fog to lift.

**Arctic ice road or winter track.** A breakdown far from settlements: the driver activates a satellite messenger, lays out a bright tarp on the snow, and stays with the vehicle, using the cab heater in short runs with the exhaust checked.`,
    },
  ],
  mistakes: [
    'Standing beside, behind or in front of a broken-down car on a busy road.',
    'Getting out on the traffic side, or without a hi-vis vest at night.',
    'Stopping in a live lane when a shoulder or lay-by is reachable.',
    'Myth: “An SUV or 4×4 can drive through flood water.” Heavy vehicles float and are swept away too.',
    'Following a navigation app onto an unknown or deteriorating track without a turnaround rule.',
    'Driving on “to see what is round the corner” when fuel, daylight or the road say go back.',
    'Draining the car battery by leaving lights on all night, so there is nothing left when searchers come.',
    'Switching a beacon off after a few minutes, or moving away from where it was activated.',
    'Lighting a signal fire or burning a tyre where it is illegal or could start a wildfire.',
  ],
  exercises: [
    {
      id: 's17-l4-e1',
      title: 'Roadside readiness drill (parked, off the road)',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Your car, parked at home or in an empty car park', 'Hi-vis vests', 'Warning triangle'],
      safetyNote: 'Do this off the road only — a driveway or an empty private car park — never on a live road.',
      steps: [
        'From the driver’s seat, find and switch on the hazard lights; reach the hi-vis vests without getting out.',
        'Assemble the warning triangle and time it.',
        'Practise getting everyone out on the side away from where traffic would be, and walking to a “safe place” behind an imaginary barrier.',
        'Write your breakdown service number and the local emergency number on a card in the glovebox.',
      ],
      success: ['Hazards, vests and triangle ready within one minute.', 'Every passenger knows where to go and where not to stand.'],
      skill: 'vehicle-kit',
    },
    {
      id: 's17-l4-e2',
      title: 'Plan a remote route with turnaround triggers',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['Paper or offline map', 'Navigation app'],
      steps: [
        'Choose a remote drive. Compare the app’s suggested route with a paper or official map; note any tracks, seasonal roads or closures.',
        'Download offline maps for the whole area.',
        'Write three turnaround triggers (road condition, fuel, time of day).',
        'Add the route and triggers to your trip plan (Lesson 1).',
      ],
      success: ['You can list the roads in order without the app.', 'Your contact has the same route and triggers.'],
      skill: 'trip-plan',
    },
    {
      id: 's17-l4-e3',
      title: 'Vehicle signal practice',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Signal mirror', 'Bright cloth', 'A partner', 'Open ground where it is permitted'],
      safetyNote: 'Never aim a mirror at aircraft, drivers or people’s eyes in practice; aim at a fixed target such as a distant post. Do this away from roads.',
      steps: [
        'Aim a signal mirror at a fixed target 100–500 m away using the two-finger or sighting method (Stage 1).',
        'Lay out a “V” at least 3 m long in contrasting material; have your partner photograph it from as high a point as is safely available.',
        'Compare how visible the car is with and without the cloth, the open hood and the ground signal.',
      ],
      success: ['You can hold a mirror flash on a distant target.', 'Your ground signal is recognisable from a distance.'],
      skill: 'signaling-basic',
    },
  ],
  simulations: ['stranded-vehicle'],
  quiz: [
    {
      id: 's17-l4-q4',
      kind: 'single',
      prompt: 'Your navigation app tells you to turn onto an unsigned dirt road to save 60 km. The road soon becomes sandy and rutted, your fuel is at 40 % and it is 16:30. What do you do?',
      choices: [
        { id: 'a', text: 'Keep going — the app says it is a road', why: 'App data may not know the road is impassable or closed.' },
        { id: 'b', text: 'Turn back to the paved road now while the car, fuel and daylight allow it', why: 'Correct — your turnaround triggers (surface, fuel, daylight) are all flashing.' },
        { id: 'c', text: 'Speed up to get through the sandy part quickly', why: 'Raises the risk of a crash or getting badly stuck.' },
        { id: 'd', text: 'Stop and wait for another car', why: 'On an unused track, one may not come.' },
      ],
      answer: 'b',
      concepts: ['vehicle-nav-failure', 'remote-road-planning', 'daylight'],
      explanation: 'Turning back on the known road is the cheapest, most reversible decision (Stage 1 reversibility; Stage 2 backtracking).',
    },
    {
      id: 's17-l4-q6',
      kind: 'single',
      prompt: 'You activated your PLB three hours ago beside your broken-down car in remote hills. Nobody has arrived. What should you do?',
      choices: [
        { id: 'a', text: 'Switch it off to save the battery and walk to high ground to look for help', why: 'Rescuers are homing on the position; switching off and moving makes you harder to find.' },
        { id: 'b', text: 'Leave it on with a clear view of the sky, stay with the car, prepare visual signals, and wait', why: 'Correct — rescues can take many hours in remote country.' },
        { id: 'c', text: 'Switch it off and on every hour', why: 'Interrupts the signal rescuers are using.' },
        { id: 'd', text: 'Leave it in the car and walk for help', why: 'You separate yourself from the position rescuers will go to.' },
      ],
      answer: 'b',
      concepts: ['vehicle-signaling', 'stay-with-vehicle', 'signaling'],
      explanation: 'A beacon alerts rescuers, but they still have to travel. Stay put with it on, and be ready to show yourself when they come.',
    },
    {
      id: 's17-l4-q1',
      kind: 'single',
      prompt: 'A tyre blows on a busy dual carriageway at night. You have steered onto the shoulder as far from traffic as possible and switched on the hazard lights. What comes next?',
      choices: [
        { id: 'a', text: 'Call for help with your location from your seat', why: 'Calling comes after everyone is out and away from the car.' },
        { id: 'b', text: 'Put on hi-vis vests while still inside the car', why: 'Correct — be visible before anyone steps out.' },
        { id: 'c', text: 'Step out on the traffic side to look at the tyre', why: 'That puts you in the path of traffic; exit away from it.' },
        { id: 'd', text: 'Get everyone out, then look for the hi-vis vests', why: 'Vests go on inside the car, before anyone is out near traffic.' },
      ],
      answer: 'b',
      concepts: ['vehicle-roadside-safety', 'visibility'],
      explanation: 'The order is: pull over, hazards on, hi-vis on inside the car, everyone out on the side away from traffic to behind the barrier upstream of the car, then call for help with your location.',
    },
    {
      id: 's17-l4-q3',
      kind: 'single',
      prompt: 'An aircraft is searching for your stranded car by day. Which of these does NOT make you more visible?',
      choices: [
        { id: 'a', text: 'A large “V” laid out in contrasting material on open ground', why: 'It does — the international ground-to-air sign for “require assistance”.' },
        { id: 'b', text: 'Signal-mirror flashes aimed toward the aircraft', why: 'It does — visible from very far away in sunshine.' },
        { id: 'c', text: 'Parking the car under trees to keep it in shade', why: 'Correct — shade for you, yes, but keep the car and signals in the open.' },
        { id: 'd', text: 'Bright cloth laid out and the hood left open', why: 'It does.' },
      ],
      answer: 'c',
      concepts: ['vehicle-signaling', 'signaling', 'visibility'],
      explanation: 'Enlarge, contrast, flash — and let an activated PLB with a clear view of the sky give your position directly.',
    },
    {
      id: 's17-l4-q2',
      kind: 'single',
      prompt: 'Fast-moving water about 40 cm deep is running across a flooded road. You are driving a large 4×4. What is right?',
      choices: [
        { id: 'a', text: 'Drive through slowly — a large 4×4 sits high enough for 40 cm', why: 'Around 30 cm of moving water can sweep a vehicle away.' },
        { id: 'b', text: 'Turn around — about 30 cm of moving water can sweep a car away', why: 'Correct.' },
        { id: 'c', text: 'Drive through fast so the water has less time to push the car', why: 'Speed does not stop moving water from floating the car, and the road may be gone.' },
        { id: 'd', text: 'Cross only if you can still see the road surface below the water', why: 'You cannot see if the road beneath is intact, and 40 cm of moving water is already too much.' },
      ],
      answer: 'b',
      concepts: ['moving-water-force', 'flash-flood'],
      explanation: 'Around 30 cm of moving water can sweep a vehicle away (Ready.gov), and you cannot see if the road beneath is intact. Turn around.',
    },
    {
      id: 's17-l4-q5',
      kind: 'single',
      prompt: 'At 100 km/h (about 28 m/s), how far does a driver travel during a 1.5-second reaction time, before braking begins?',
      choices: [
        { id: 'a', text: '28 m', why: 'That is one second of travel; the reaction time is 1.5 s.' },
        { id: 'b', text: '42 m', why: 'Correct — 28 m/s for 1.5 s.' },
        { id: 'c', text: '150 m', why: 'This uses 100 km/h as if it were 100 m/s.' },
        { id: 'd', text: '19 m', why: 'This divides the speed by the time instead of multiplying.' },
      ],
      answer: 'b',
      concepts: ['vehicle-roadside-safety'],
      explanation: '$28 \times 1.5 = 42$ m — before any braking. That is why warnings go well back and why you wait behind the barrier.',
    },
  ],
  scenario: {
    id: 's17-l4-sc',
    setup: 'Late afternoon on a remote gravel road in hill country. After heavy rain upstream, the road dips into a creek crossing that is running brown and fast; you cannot see the bottom. The route on the other side is 40 km shorter than going back. Your fuel is at a third; there is no phone signal; your trip plan names this road.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Drive through slowly in low gear.', why: 'You cannot know the depth, current or whether the road bed is intact; moving water floats and sweeps cars.' },
      { id: 'b', text: 'Wade in first to check the depth, then drive.', why: 'Moving water can knock a person off their feet at shin-to-knee depth; wading a flooded crossing is itself a serious hazard.' },
      { id: 'c', text: 'Turn around; either wait on high ground for the water to fall or drive back the known way, and update your contact at the first signal.', why: 'Best: fully reversible, keeps you on a route searchers know, and removes the flood risk.' },
      { id: 'd', text: 'Leave the car and walk the 40 km on the other side.', why: 'Crossing on foot is more dangerous than in a car, and you would leave your shelter and signal.' },
    ],
    best: 'c',
    debrief: 'Stage 12’s moving-water physics and Stage 1’s reversibility principle meet here: the crossing is an irreversible gamble; turning back is cheap. Because the trip plan names this road, waiting on high ground near it also keeps you where searchers would look — and creek levels after rain often fall within hours.',
    concepts: ['moving-water-force', 'flash-flood', 'reversibility', 'trip-plan', 'vehicle-nav-failure'],
  },
  summary: [
    'Breakdown on a road: **off the road, hazards, hi-vis before you get out, wait behind the barrier upstream**, triangle only where legal and safe, then call.',
    'After a crash: **scene safety, call early**, life-threatening bleeding, move casualties only out of danger; take a first-aid course.',
    'Be seen: **hood up, bright cloth, big ground “V”, mirror by day, lights and sound in threes at night**; a beacon **stays on and stays put**.',
    'Navigation apps can route onto closed or impassable roads: **plan on a map, carry offline and paper maps, set turnaround triggers**, and turn back early.',
    '**Never drive into flood water**: about 30 cm of moving water can sweep a car away.',
  ],
  furtherReading: ['uk-highway-code', 'ready-car', 'ready-floods', 'icao-annex12'],
  references: ['uk-highway-code', 'ready-car', 'ready-floods', 'nws-flood', 'icao-annex12', 'cospas-sarsat', 'nps-deva-safety', 'fa-wms-spine-2024', 'fa-ilcor', 'koester-lpb'],
}
