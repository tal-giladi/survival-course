import type { Lesson } from '../../types'

export const l13: Lesson = {
  id: 's1-l13',
  stage: 1,
  order: 13,
  title: 'Emergency signaling',
  level: 'beginner',
  minutes: 35,
  prerequisites: ['s1-l3'],
  concepts: ['signaling', 'phone-use', 'visibility'],
  objectives: [
    'Use a **phone** effectively in an emergency: calls, SMS, location, and battery strategy.',
    'Signal with **whistle, mirror and light** using internationally recognised patterns.',
    'Make yourself **visible** to air and ground searchers using contrast, shape and movement.',
    'Explain what **PLBs and satellite messengers** do, and why registration matters.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Being found is usually faster and safer than rescuing yourself. Signaling has two jobs: **alert** someone that you need help, and **guide** them to you once they are looking.

### Your phone

- **Call the emergency number** even if your own network shows no service: in many countries, emergency calls to 112/911 can use any available network. Know the local number (112 across the EU and in many countries; 911 in North America; 999 in the UK; 000 in Australia; 101 for ambulance in Israel).
- **SMS** often gets through when voice calls fail, because it needs only a brief connection. Some countries offer emergency SMS (in the UK, you must register in advance).
- Many newer phones offer **emergency SOS via satellite** in some regions. Learn whether yours does, and try the demo mode at home.
- **Your location:** learn how to read your coordinates offline (compass apps, map apps with offline maps). Say them clearly, including the format (decimal degrees vs degrees-minutes-seconds).
- **Battery strategy:** airplane mode + low-power mode, turn off Bluetooth and Wi-Fi scanning, keep the phone warm (cold batteries die fast — inside your clothing), switch on at scheduled times, and climb to high ground or open areas for better signal. Don’t burn battery on photos or games.`,
    },
    {
      type: 'md',
      md: `### Groups of three

Three of anything — three whistle blasts, three fires in a triangle, three flashes — is widely recognised as a distress signal. Repeat with pauses. In European mountains, the **Alpine distress signal** is six signals per minute, a minute’s pause, repeat; the reply is three per minute.

**SOS** in Morse — ··· — — — ··· — works with a light at night.

### Whistle

A whistle carries far further than a voice and costs no energy. Three long blasts, pause, repeat. Shouting exhausts you and your throat quickly.

### Signal mirror

A mirror flash in sunshine can be seen from tens of kilometres by aircraft. Aiming technique: hold the mirror near your eye, extend your other arm with fingers in a **V** around the target, and tilt the mirror until the sun spot falls on your fingers, then sweep it gently across the target. Practise at home with a wall. Even a phone screen, a CD or foil can flash.

### Light at night

A headlamp or strobe in bursts of three, or SOS, is visible for kilometres in darkness. Point it at the searcher; sweep it at aircraft.`,
    },
    {
      type: 'md',
      md: `### Be visible

Searchers — especially from the air — look for things that do not belong in nature:

- **Contrast:** bright orange, red or blue against green or brown; dark on snow.
- **Size and shape:** straight lines, right angles and large geometric shapes.
- **Movement:** waving a bright jacket or tarp; waving both arms overhead (the "Y" signal means "yes / need help").
- **Location:** open ground — clearings, ridgelines, riverbanks, snowfields — not under dense canopy.
- **Smoke:** in daylight, smoke is visible for kilometres. Green leaves or damp material on a hot fire produce white smoke, visible against dark forest; rubber or oil produce dark smoke, visible against snow or sky. Only where safe and legal — a signal fire that becomes a wildfire is a disaster.`,
    },
    { type: 'diagram', id: 'ground-to-air', caption: 'Ground-to-air code symbols (from the international SAR signal code). Big, straight and contrasting.' },
    {
      type: 'md',
      md: `### Beacons and satellite messengers

- A **Personal Locator Beacon (PLB)** transmits on 406 MHz to the international **Cospas-Sarsat** satellite system, which relays your identity and position to rescue coordination centres. One-way, no subscription, very reliable. It **must be registered** in the country of registration so rescuers know who you are and whom to call.
- A **satellite messenger** uses commercial satellite networks for two-way text and SOS, and can share tracking with friends. Needs a subscription.
- In remote areas without phone coverage, either can shorten a rescue from days to hours.

Only activate a distress beacon in a genuine emergency; it starts a real search.`,
    },
  ],
  whyItMatters: 'Search areas grow rapidly with time, and searchers can pass within metres of someone hidden under trees in dull clothing. Good signaling shrinks the search area, speeds rescue and reduces risk to rescuers.',
  science: [
    {
      type: 'md',
      md: `### Why search areas grow so fast

If someone could be anywhere within radius $r$ of their last known point, the area to search is $\\pi r^2$ — it grows with the **square** of the distance. A lost person who walks 2 km further doesn’t double the search area; if they could have gone in any direction, the possible area grows from $\\pi (2)^2 \\approx 12.6\\ \\text{km}^2$ to $\\pi (4)^2 \\approx 50\\ \\text{km}^2$ — **four times** bigger. Staying put and signaling keeps the problem small.

### Detection and contrast

Detection depends on angular size and contrast. An object appears smaller in proportion to distance, so at twice the distance it needs twice the linear size to look the same. A 3 m ground signal seen from 1 km subtends about $3/1000$ rad ≈ **0.17°** — detectable if the contrast is high, easily missed if not. Brightness (a mirror flash, a strobe) beats size at long range.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest:** move to the nearest clearing or riverbank; spread a bright tarp or jacket; whistle in threes every few minutes; headlamp at night.

**Desert:** stay by the vehicle (it is large and reflective); use the mirror at any aircraft; lay out large contrasting shapes; smoke from a fire fed with a tyre (only in an emergency, far from vegetation).

**Snow:** dark shapes stamped or laid out on snow; a trench in the snow in an X casts shadows visible from the air.

**Coast:** mirror flashes toward ships and aircraft; orange items on the beach; stay above the high-tide mark.

**Urban disaster:** tap on pipes or walls in threes if trapped (saves your voice and avoids inhaling dust); a whistle is part of every home kit.`,
    },
  ],
  mistakes: [
    'Shouting until hoarse instead of using a whistle.',
    'Draining the phone battery on repeated failed calls, photos or scrolling.',
    'Waiting under dense trees where aircraft cannot see you.',
    'Not registering a PLB, or buying one and never checking its battery date.',
    'Lighting a signal fire that escapes and becomes a wildfire.',
  ],
  exercises: [
    {
      id: 's1-l13-e1',
      title: 'Phone location drill',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'In airplane mode, find your current coordinates with an offline app. Write them down in two formats.',
        'Check whether your phone supports emergency SOS via satellite in your region and try its demo mode if available.',
        'Configure a medical ID / emergency information on the lock screen.',
        'Find the local emergency number(s) for places you hike, including any emergency-SMS registration.',
      ],
      success: ['Coordinates obtained offline in under 1 minute.', 'Emergency info visible on your lock screen.'],
      skill: 'phone-location',
    },
    {
      id: 's1-l13-e2',
      title: 'Whistle and mirror practice',
      level: 3,
      safety: 'outdoor',
      minutes: 40,
      materials: ['Whistle', 'Signal mirror (or small mirror/CD)', 'A partner'],
      safetyNote: 'Never flash a mirror at vehicles, aircraft or people’s eyes in a non-emergency — it can dazzle pilots and drivers. Practise on a wall or a distant object with a partner.',
      steps: [
        'With a partner, test how far three whistle blasts carry compared with shouting (in open ground and in trees).',
        'Practise the V-finger aiming method on a sunny day, targeting a distant sign or tree.',
        'Have your partner walk away and report when they can see the flash.',
      ],
      success: ['You can put the flash on a target in under 10 seconds.', 'You know how far your whistle carries versus your voice.'],
      skill: 'signaling-basic',
    },
  ],
  simulations: ['signal-detect'],
  quiz: [
    {
      id: 's1-l13-q1',
      kind: 'single',
      prompt: 'What is the widely recognised audible distress pattern with a whistle?',
      choices: [
        { id: 'a', text: 'One long continuous blast', why: 'Not a recognised pattern and exhausting.' },
        { id: 'b', text: 'Three blasts, pause, repeat', why: 'Correct.' },
        { id: 'c', text: 'Two short blasts', why: 'Not a distress signal.' },
        { id: 'd', text: 'Blow whenever you feel like it', why: 'Patterns are what tell searchers it is a signal.' },
      ],
      answer: 'b',
      concepts: ['signaling'],
      explanation: 'Groups of three are the general distress convention. (The Alpine signal is six per minute.)',
    },
    {
      id: 's1-l13-q2',
      kind: 'multi',
      prompt: 'Which actions extend phone battery life in an emergency?',
      choices: [
        { id: 'a', text: 'Airplane mode between scheduled checks', why: 'Yes.' },
        { id: 'b', text: 'Keeping the phone warm inside your clothing', why: 'Yes — cold kills batteries.' },
        { id: 'c', text: 'Repeatedly redialling when the call fails', why: 'No — searching for signal drains the battery; try SMS or move to higher ground.' },
        { id: 'd', text: 'Low-power mode and lowest screen brightness', why: 'Yes.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['phone-use'],
      explanation: 'Minimise radio searching, screen time and cold; schedule checks; try SMS.',
    },
    {
      id: 's1-l13-q3',
      kind: 'single',
      prompt: 'Ground-to-air code: what does a large **X** mean?',
      diagram: 'ground-to-air',
      choices: [
        { id: 'a', text: 'Require assistance', why: 'That is V.' },
        { id: 'b', text: 'Require medical assistance', why: 'Correct.' },
        { id: 'c', text: 'No', why: 'That is N.' },
        { id: 'd', text: 'Proceeding in this direction', why: 'That is an arrow.' },
      ],
      answer: 'b',
      concepts: ['signaling'],
      explanation: 'V = require assistance; X = require medical assistance; N = no; Y = yes; arrow = travelling this way.',
    },
    {
      id: 's1-l13-q4',
      kind: 'numeric',
      prompt: 'A person could be anywhere within 3 km of their last known point. If they walk on and could now be anywhere within 6 km, by what **factor** does the possible search area grow?',
      unit: '×',
      answer: 4,
      tolerance: 0,
      concepts: ['visibility', 'stay-or-move'],
      explanation: 'Area ∝ r². Doubling the radius multiplies the area by **4**.',
    },
    {
      id: 's1-l13-q5',
      kind: 'truefalse',
      prompt: 'A PLB needs to be registered so that rescuers can identify the owner and contact people.',
      answer: true,
      concepts: ['signaling'],
      explanation: 'Registration links the beacon’s ID to you and your emergency contacts, speeding response and reducing false-alarm effort.',
    },
  ],
  scenario: {
    id: 's1-l13-sc',
    setup: 'Day 2 of being lost in a conifer forest. You hear a helicopter somewhere to the north. You are under dense trees; 150 m away is a rocky clearing. You have a red jacket, a small mirror, a whistle, and it is sunny.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Stay under the trees and blow the whistle.', why: 'The crew will not hear a whistle over rotor noise and cannot see you under canopy.' },
      { id: 'b', text: 'Move quickly to the clearing, flash the mirror toward the helicopter, and wave the red jacket in wide arcs.', why: 'Best: open ground + brightness + colour + movement are what aircrew can detect.' },
      { id: 'c', text: 'Start a large fire under the trees.', why: 'Smoke would be diffused by canopy, and a fire in a conifer forest can become a wildfire.' },
      { id: 'd', text: 'Wait until it comes closer before doing anything.', why: 'It may never come closer; early detection matters.' },
    ],
    best: 'b',
    debrief: 'Aircraft detect **contrast, brightness and movement in open ground**. A mirror flash is the longest-range daytime signal available to you; a moving red jacket confirms it. Prepare signals in the clearing *before* you hear aircraft next time.',
    concepts: ['visibility', 'signaling'],
  },
  summary: [
    'Phone: know the number, try SMS, learn offline coordinates, protect the battery.',
    'Groups of three (or SOS, or Alpine six-per-minute) signal distress.',
    'Whistle > voice; mirror > everything on a sunny day; light at night.',
    'Be visible: open ground, contrast, straight lines, movement.',
    'PLB (Cospas-Sarsat) or satellite messenger for remote trips — registered.',
  ],
  furtherReading: ['koester-lpb', 'cospas-sarsat'],
  references: ['cospas-sarsat', 'noaa-sarsat', 'icao-annex12', 'army-atp-3-50-21', 'koester-lpb', 'mra'],
}
