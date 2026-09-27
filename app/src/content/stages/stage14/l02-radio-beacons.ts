import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's14-l2',
  stage: 14,
  order: 2,
  title: 'Radio, satellite and beacons',
  level: 'intermediate',
  minutes: 55,
  prerequisites: ['s14-l1'],
  concepts: ['distress-beacons', 'beacon-registration', 'false-alerts', 'satellite-messengers', 'radio-licensing', 'radio-range', 'distress-procedure', 'phone-use'],
  objectives: [
    'Explain how a **406 MHz beacon** alert travels through **Cospas-Sarsat** to a rescue coordination centre, and what the GNSS position and the 121.5 MHz homing signal add.',
    'Compare **PLBs, EPIRBs, ELTs, satellite messengers and phone satellite SOS**, and choose what to carry for a trip.',
    '**Register, test and deploy** a beacon correctly — activate it only in genuine distress, and report any accidental activation at once.',
    'Use radios **legally** (licence-free, licensed, marine VHF, amateur) and estimate their range from **line of sight**.',
    'Give a clear **distress message**: who, where, what happened, how many, what help.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Visual and audible signals (Lesson 1) guide searchers over the last few kilometres. Electronic signals do the first and most important job: **telling someone you need help, and where you are** — from places no one can see or hear you.

Your first choice is still a **phone** where there is coverage (Stage 1): call the emergency number, send an SMS if calls fail, give your coordinates. Where available, phones also send their location to the emergency service automatically during an emergency call (for example, *Advanced Mobile Location*). Beyond coverage, you need satellites or radio.

### Distress beacons and Cospas-Sarsat

**Cospas-Sarsat** is an international, government-run satellite system for distress alerts. Three kinds of beacon use it, all transmitting on **406 MHz**:

| Beacon | Carried by | Activation |
|---|---|---|
| **PLB** (personal locator beacon) | People: hikers, climbers, pilots, paddlers | Manual |
| **EPIRB** (emergency position-indicating radio beacon) | Ships and boats | Manual, or automatic when it floats free |
| **ELT** (emergency locator transmitter) | Aircraft | Automatic on impact, or manual |

When activated, the beacon sends a short **digital burst** every minute or so containing its **unique identification number** (15 hexadecimal characters, which also encodes the country it is registered in) and, on most modern beacons, a **GNSS position**. Satellites in low, medium and geostationary orbits relay it to ground stations (**LUTs**), which pass it to a national **mission control centre** and on to the **rescue coordination centre (RCC)** responsible for that area. The RCC looks up the beacon’s **registration**, calls your emergency contacts to learn who you are and what you were doing, and tasks rescuers. A low-power **121.5 MHz** signal lets aircraft and ground teams **home in** on the beacon for the final approach.

Satellite processing of old 121.5 MHz-only beacons ended in 2009 — such beacons are no longer detected from space.`,
    },
    { type: 'diagram', id: 's14-cospas-sarsat', caption: 'From beacon to rescuers: satellites, ground station, mission control, rescue coordination centre — and homing on 121.5 MHz.' },
    {
      type: 'md',
      md: `### Satellite messengers and satellite SOS

**Satellite messengers** use commercial satellite networks. They offer **two-way text**, tracking that friends can follow, and an **SOS** that goes to a commercial emergency response centre, which contacts the appropriate authorities for your location. **Two-way messaging is a big advantage**: you can say what happened, how badly someone is hurt and what help you need, and the centre can tell you help is coming. They need a **subscription**, and coverage depends on the network.

Some newer **phones** can send emergency messages **via satellite** in some countries. They need a clear view of the sky and you must point the phone as it instructs — try the demo mode at home. **Satellite phones** give voice calls; they are heavier and costlier.

### Which to carry?

- **PLB:** built for one job, government-backed system, no subscription, typically designed to transmit for at least 24 hours. One-way: rescuers know *where* and *who*, not *what*.
- **Messenger:** two-way detail, tracking and non-emergency “running late” messages that can **prevent** a search; needs subscription and charging.
- Many remote travellers carry **both**, or a messenger plus a phone with satellite SOS. Either is far better than nothing where there is no coverage.`,
    },
    {
      type: 'md',
      md: `### Registration, testing and deployment

**Register** your beacon with the national authority for the country coded into it (in the US, NOAA SARSAT; in the UK, the UK Beacon Registry). Registration is free in many countries and often legally required. It lets the RCC confirm quickly that a real person is in trouble, call your contacts, and **resolve accidental alerts without launching a search**. Update it when you change phone numbers, emergency contacts or vehicles/boats; some authorities require renewal (NOAA asks every two years). Many registries let you add **trip details**.

**Test** only with the manufacturer’s **self-test** — it checks the battery and circuits without sending a real alert. **Never “test” by activating it.** Note the battery replacement date and replace it through the manufacturer.

**Deploy** it properly: fully extend the antenna and hold it **vertical**, with a **clear view of the sky**, away from rock walls and dense canopy; don’t lie on it or shield it with your body; keep it out of water unless it is designed to float. **Leave it on** until rescuers reach you or an RCC tells you to switch off.`,
    },
    { type: 'diagram', id: 's14-beacon-deploy', caption: 'Beacon deployment: antenna vertical, open sky, leave it on.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Activate only in genuine distress — and report accidents immediately',
      md: 'A distress beacon or satellite SOS is for **grave and imminent danger to life** when you cannot get out of it by yourself: a serious injury or illness, someone missing in dangerous conditions, being unable to survive where you are. It is **not** for being tired, late or uncomfortable — use a messenger’s non-emergency message, a call or a text instead.\n\nEvery alert launches real people, often aircraft, sometimes at risk to themselves, and diverts them from other emergencies. **Knowingly sending a false distress alert is illegal in many countries** and can bring fines or prosecution. **If you activate one by accident, switch it off and immediately contact the rescue coordination centre or national authority** (the number is in your registration papers) to cancel it — honest, promptly reported accidents are part of the system; unreported ones cause searches.',
    },
    {
      type: 'md',
      md: `### Radio basics — and the licence question

Radios work without networks or subscriptions, and let you **talk** with your group or with rescuers. But the radio spectrum is regulated: **who may transmit, on which frequencies and at what power is set by law**, and interference can block emergency and aviation traffic.

| Radio | Licence? | Typical use |
|---|---|---|
| Licence-free walkie-talkies (FRS in North America, PMR446 in Europe, UHF CB in Australia) | No (fixed low power, approved radios) | Within a group; a few hundred metres to a few km |
| GMRS (US) | Licence (no exam) | Higher power, repeaters |
| Marine VHF | Operator certificate and station licence in many countries | Boats; **channel 16** is the international distress and calling channel, monitored by coast guards in many areas |
| Amateur (“ham”) radio | Licence by **exam** | Long range, repeaters, emergency nets |
| Aviation band (incl. 121.5 MHz) | Licensed aircraft and ground stations only | Not for hikers |

Radio regulations generally allow a station **in distress** to use any means at its disposal to attract attention and get help — a narrow exception for genuine emergencies, **not** permission to carry and use radios you are not licensed for. If a radio is part of your plan, **get the licence and the training**: amateur licensing courses teach procedures and range, and marine courses teach DSC distress alerts and Mayday procedure.

**Range is mostly line of sight** at VHF and UHF. Height beats power: climb to a ridge or open ground, hold the antenna vertical, and agree **scheduled listening times** to save batteries.`,
    },
    { type: 'diagram', id: 's14-radio-horizon', caption: 'VHF/UHF radio is line of sight: get high.' },
    {
      type: 'md',
      md: `### The distress message

The same content works for a phone call, a text, a messenger SOS follow-up or a radio call. Rehearse it:

1. **Who**: your name (and radio call sign or vessel name).
2. **Where**: coordinates in a stated format (Stage 2), plus a description — “north side of the lake, below the red cliff”.
3. **What happened**: the problem and its severity — “fall, leg fracture, conscious, can’t walk”.
4. **How many** people, and their condition.
5. **What help** you need, and what you have (shelter, water, light, battery).

On radio, **MAYDAY** (said three times) is reserved for grave and imminent danger to life; **PAN-PAN** signals urgency without immediate danger to life. Then listen — and follow instructions.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Save power, stay reachable',
      md: 'After sending an alert, agree a **check-in schedule** (e.g., on the hour) and power down between. Keep batteries warm inside your clothing. If a messenger or phone is your only link, don’t spend it on photos or long chats — short, factual updates.',
    },
  ],
  whyItMatters: 'Most wilderness rescues begin with a message: a call, a text, a beacon alert. Where there is no coverage, a registered beacon or satellite messenger turns “missing somewhere” into “this person, at this point, since this time” — shrinking the search area from hundreds of square kilometres to a few metres. Misused, the same tools waste rescuers’ time and put them at risk.',
  science: [
    {
      type: 'md',
      md: `### How far can a radio reach?

VHF and UHF radio waves travel roughly in straight lines. Because the Earth curves, a line from an antenna at height $h$ grazes the surface at the **radio horizon**. With the usual allowance for the atmosphere bending radio waves slightly,

$$
d \\approx 4.1\\left(\\sqrt{h_1} + \\sqrt{h_2}\\right)
$$

with $d$ in kilometres and antenna heights $h_1, h_2$ in metres. In words: range grows with the **square root** of height, for both ends.

Worked example: two people holding radios 1.5 m above flat ground: $4.1 \\times (1.22 + 1.22) \\approx 10$ km at the very best — hills and forest usually cut it to a few km. Climb a 300 m hill: $4.1 \\times (\\sqrt{301.5} + 1.22) \\approx 4.1 \\times 18.6 \\approx 76$ km of possible line of sight to the plain below. Quadrupling transmitter power, by contrast, only doubles range in free space (power falls with the square of distance) and does nothing to get past a ridge.

### Why a GNSS position matters

Older Cospas-Sarsat processing located beacons from the **Doppler shift** of their signal as a low-orbit satellite passed overhead, which could take time and give positions accurate to a few kilometres. A beacon that includes its own **GNSS position** in the message gives rescuers a position typically within about a hundred metres as soon as the message is received, and satellites in medium orbit (carried on navigation satellites) relay alerts almost continuously. The **121.5 MHz homing signal** then leads rescuers the last few hundred metres, even in cloud or at night.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Coastal sea kayaking:** a PLB in your buoyancy aid (not in a hatch), plus a waterproof **marine VHF** — with the operator’s certificate — to talk to the coast guard and nearby boats on channel 16. A phone in a waterproof pouch as a back-up.

**Arctic or subarctic expedition:** a satellite messenger for daily check-ins and weather, plus a PLB; lithium batteries, carried warm. Agree with your home contact what a missed check-in means (Stage 1 trip plan) — often “wait for the next scheduled one” before alerting, to avoid false alarms from a flat battery.

**Desert vehicle trip:** a messenger or PLB with the vehicle *and* one on your body in case you have to leave it (Stage 17). The vehicle is also a big visual signal.

**European mountains:** call **112**; a PLB or messenger for areas without coverage. Mountain rescue teams often ask you to keep the phone switched on and free for their calls.

**Tropical river trip:** dense canopy blocks satellite signals — get to a gravel bar or clearing with open sky before activating.

**Rural lone worker or farmer:** a PLB or messenger in your pocket when working alone in remote fields or forests; family know your check-in times.

**Urban disaster:** when mobile networks are overloaded, **SMS** gets through more often than calls; licence-free radios keep a household or street in touch; amateur operators often support official emergency communications (Stage 16).`,
    },
  ],
  mistakes: [
    'Buying a PLB and never registering it, or leaving old contact details in the registration.',
    '“Testing” a beacon by activating it, or not reporting an accidental activation straight away.',
    'Activating an SOS for a non-emergency (tired, late, lost but safe and with a phone signal to call).',
    'Switching the beacon off after a few hours to “save battery” before rescuers arrive.',
    'Deploying the beacon lying flat, under a boulder, in a gully or under dense canopy.',
    'Myth: any radio can call the rescue services. Licence-free radios reach only a few km and nobody is obliged to listen; aviation and marine channels need licensed equipment and operators.',
    'Myth: more power always beats terrain. At VHF/UHF, height and line of sight matter far more.',
    'Giving coordinates without saying their format, or a vague location (“near the lake”).',
  ],
  exercises: [
    {
      id: 's14-l2-e1',
      title: 'Beacon and messenger readiness check',
      level: 1,
      safety: 'home',
      minutes: 45,
      materials: ['Your PLB or satellite messenger (or the manual of one you are considering)', 'Computer or phone'],
      safetyNote: 'Do not activate the distress function. Use only the manufacturer’s self-test, following the manual (self-tests use battery life).',
      steps: [
        'Find the beacon’s 15-character ID on its label. Check that it is registered with the correct national authority; update contacts and add your next trip details if the registry allows.',
        'Write the rescue coordination centre / registry phone number on a card kept with the beacon, for reporting an accidental activation.',
        'Note the battery expiry date in your calendar with a reminder 3 months before.',
        'Run the self-test exactly as the manual describes.',
        'Practise deployment posture without activating: antenna fully extended and vertical, arm raised, clear sky above.',
        'For a messenger: check the subscription, send a non-emergency test message to your contact and confirm they receive it.',
      ],
      success: ['Registration current, with correct contacts.', 'You can describe the steps for an accidental activation from memory.'],
      skill: 'beacon-readiness',
    },
    {
      id: 's14-l2-e2',
      title: 'Write and rehearse your distress message',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'Pick a real place you hike. Invent an emergency (e.g., companion with a leg injury at a named spot).',
        'Write the five parts: who, where (coordinates with format + description), what happened, how many, what help and what you have.',
        'Say it aloud as a phone call in under 45 seconds, then compress it into a 160-character text.',
        'Ask someone to repeat back your location from your message. Could they find it on a map?',
      ],
      success: ['A clear 45-second message and a 160-character text that a stranger can locate on a map.'],
      skill: 'phone-location',
    },
    {
      id: 's14-l2-e3',
      title: 'Line-of-sight radio test (licence-free radios)',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Two licence-free radios legal in your country (e.g., FRS or PMR446)', 'A partner', 'Map'],
      safetyNote: 'Use only radios and channels that are licence-free where you are, and keep transmissions short. Stay on paths; agree a meeting time in case you lose contact.',
      steps: [
        'Start together, then walk apart along a path, checking in every few minutes.',
        'Note on the map where contact becomes broken, then where it fails.',
        'At the failure point, climb to higher or more open ground nearby and try again.',
        'Compare the range in forest, around a hill, and in the open.',
      ],
      success: ['You can show on the map how terrain, not distance alone, limited the link — and how height restored it.'],
    },
  ],
  quiz: [
    {
      id: 's14-l2-q1',
      kind: 'single',
      prompt: 'You activate a registered 406 MHz PLB. Who first acts on the alert to organise your rescue?',
      diagram: 's14-cospas-sarsat',
      choices: [
        { id: 'a', text: 'The beacon manufacturer', why: 'Manufacturers are not in the alert chain.' },
        { id: 'b', text: 'The rescue coordination centre (RCC) responsible for your area, after the alert passes through satellites, a ground station and a mission control centre', why: 'Correct.' },
        { id: 'c', text: 'Your emergency contact, who must call the police', why: 'The RCC calls your contact for information; your contact does not have to raise the alarm.' },
        { id: 'd', text: 'A commercial call centre that bills you', why: 'That describes some satellite messengers’ SOS route, not Cospas-Sarsat.' },
      ],
      answer: 'b',
      concepts: ['distress-beacons'],
      explanation: 'Beacon → satellites → LUT → MCC → RCC. The RCC uses your registration to call your contacts and tasks rescuers.',
    },
    {
      id: 's14-l2-q2',
      kind: 'multi',
      prompt: 'What does registering your PLB achieve?',
      choices: [
        { id: 'a', text: 'Rescuers learn who you are and whom to call', why: 'Yes.' },
        { id: 'b', text: 'Accidental alerts can often be resolved by a phone call instead of a search', why: 'Yes.' },
        { id: 'c', text: 'Your contacts can tell the RCC your plans, group size and experience', why: 'Yes — this shapes the response.' },
        { id: 'd', text: 'It makes the beacon’s battery last longer', why: 'No — registration is information, not hardware.' },
        { id: 'e', text: 'It is required by law in many countries', why: 'Yes.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['beacon-registration', 'false-alerts'],
      explanation: 'A registered beacon is a person with a name, contacts and plans; an unregistered one is an anonymous signal that must be treated as real.',
    },
    {
      id: 's14-l2-q3',
      kind: 'truefalse',
      prompt: 'If you set off your PLB by accident, the best thing to do is switch it off quietly and say nothing — the alert will be ignored.',
      answer: false,
      concepts: ['false-alerts'],
      explanation: 'The alert may already have been received and a response started. **Switch it off and immediately call the RCC or national authority** to cancel. Promptly reported accidents are routine; unreported ones cause searches.',
    },
    {
      id: 's14-l2-q4',
      kind: 'numeric',
      prompt: 'Using $d \\approx 4.1(\\sqrt{h_1} + \\sqrt{h_2})$ km, what is the radio horizon between two hand-held radios each held 2 m above flat ground? (One decimal.)',
      unit: 'km',
      answer: 11.6,
      tolerance: 0.5,
      concepts: ['radio-range'],
      explanation: '$\\sqrt{2} \\approx 1.41$; $4.1 \\times 2.83 \\approx 11.6$ km — the theoretical best. Terrain and vegetation usually reduce it a lot.',
    },
    {
      id: 's14-l2-q5',
      kind: 'order',
      prompt: 'Order the content of a distress message.',
      items: [
        { id: 'who', text: 'Who is calling' },
        { id: 'where', text: 'Where: coordinates with format, plus description' },
        { id: 'what', text: 'What happened and how serious' },
        { id: 'many', text: 'How many people, and their condition' },
        { id: 'help', text: 'What help is needed and what you have' },
      ],
      answer: ['who', 'where', 'what', 'many', 'help'],
      concepts: ['distress-procedure', 'coordinate-formats'],
      explanation: 'Location comes early: if the call drops after ten seconds, rescuers at least know where to go.',
    },
    {
      id: 's14-l2-q6',
      kind: 'single',
      prompt: 'Late afternoon, you are on a trail with a twisted ankle. You can walk slowly; you will reach the car 2 hours after dark. You have a headlamp, warm layers and one bar of phone signal. You also carry a PLB. What do you do?',
      choices: [
        { id: 'a', text: 'Activate the PLB — you are injured', why: 'Not grave and imminent danger: you can self-rescue and you have a phone. This would tie up rescuers.' },
        { id: 'b', text: 'Text your trip contact your position, the problem and the new estimated return time; continue carefully with the headlamp and keep the PLB for a real emergency', why: 'Correct — updating your contact prevents a needless search and keeps the beacon for true distress.' },
        { id: 'c', text: 'Say nothing and push on fast to beat the dark', why: 'Rushing on an injured ankle risks a worse fall; your contact may raise the alarm when you are overdue.' },
        { id: 'd', text: 'Activate the PLB and switch it off when you reach the car', why: 'Launches a search for a non-emergency, and switching off without calling leaves rescuers searching.' },
      ],
      answer: 'b',
      concepts: ['false-alerts', 'trip-plan', 'phone-use'],
      explanation: 'Beacons are for distress. The trip plan from Stage 1 works both ways: tell your contact when your plan changes.',
    },
  ],
  scenario: {
    id: 's14-l2-sc',
    setup: 'You and a friend are crossing a remote mountain pass. At 15:00 she falls on a boulder field: she has an obviously deformed thigh, severe pain, and cannot bear weight. It is 3 °C and cloud is dropping. There is no phone coverage. You carry a registered PLB and a satellite messenger. Walking out alone for help would take about 6 hours.',
    question: 'What is your best course of action?',
    choices: [
      { id: 'a', text: 'Leave her with your spare clothes and walk out for help.', why: 'Leaves a badly injured person alone in the cold for many hours, and you risk a fall in the dark; electronic alerts are far faster.' },
      { id: 'b', text: 'Activate the PLB with its antenna vertical in the most open spot nearby, send an SOS by messenger with her injury, your group size and what you have, then insulate her from the ground, get her into shelter and layers, and keep both devices on.', why: 'Best: grave danger with no self-rescue option is exactly what beacons are for; the messenger adds detail rescuers need; then you manage the patient and the cold (Stages 8 and 9).' },
      { id: 'c', text: 'Wait until morning and see how she feels.', why: 'A femur fracture and falling temperatures are an emergency now; delay risks hypothermia and shock.' },
      { id: 'd', text: 'Activate the PLB for 10 minutes, then switch it off to save battery for later.', why: 'Switching off breaks the alert and homing signal rescuers need; beacons are designed to run for many hours.' },
    ],
    best: 'b',
    debrief: 'This is the case beacons exist for: grave and imminent danger, no way to self-rescue, no phone. Alert first (both channels), then shelter and patient care. Keep the beacon on and in the open; use the messenger for updates. Hands-on first-aid training (WFA/WAFA) teaches how to protect a casualty from cold and how to manage a suspected fracture while you wait.',
    concepts: ['distress-beacons', 'satellite-messengers', 'immediate-danger', 'heat-balance'],
  },
  summary: [
    'PLB/EPIRB/ELT → 406 MHz → Cospas-Sarsat satellites → LUT → MCC → RCC; GNSS position in the message; 121.5 MHz for homing.',
    'Messengers add two-way text and tracking (subscription); phones may have satellite SOS in some countries.',
    'Register (free in many countries), keep details current, self-test only, note battery dates.',
    'Activate only in grave and imminent danger; keep it on, antenna vertical, open sky. Accidental activation → switch off and call the RCC at once.',
    'Radios are licensed by law; licence-free radios are short range; get licences (marine, amateur) if radio is part of your plan.',
    'Range is line of sight: $d \\approx 4.1(\\sqrt{h_1}+\\sqrt{h_2})$ km — get high.',
    'Distress message: who, where, what, how many, what help.',
  ],
  furtherReading: ['cospas-sarsat', 'noaa-sarsat', 's14-iamsar'],
  references: ['cospas-sarsat', 'noaa-sarsat', 's14-uk-beacon-registry', 's14-fcc-part95', 's14-fcc-part97', 's14-iamsar', 'mra', 'gps-gov'],
}
