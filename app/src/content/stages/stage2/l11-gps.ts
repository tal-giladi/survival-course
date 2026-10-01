import type { Lesson } from '../../types'

export const l11: Lesson = {
  id: 's2-l11',
  stage: 2,
  order: 11,
  title: 'GPS and digital maps',
  level: 'beginner',
  minutes: 45,
  prerequisites: ['s2-l1'],
  concepts: ['gnss', 'coordinate-formats', 'battery-strategy', 'offline-maps', 'phone-use'],
  objectives: [
    'Explain how **GNSS** finds your position from signal travel times, and why it needs **four** satellites.',
    'Know what limits accuracy — **canopy, canyons, multipath, geometry (DOP)** — and how to recognise a bad fix.',
    'Read, convert and report coordinates in **DD, DDM, DMS and UTM/MGRS**, stating format and datum.',
    'Set up **offline maps** and run a **battery plan** that keeps a reserve for emergencies.',
  ],
  explanation: [
    {
      type: 'md',
      md: `"GPS" is the US system; the general name is **GNSS** (Global Navigation Satellite Systems). Four global systems are operating: **GPS** (USA), **Galileo** (EU), **GLONASS** (Russia) and **BeiDou** (China). Most modern phones and handheld units use several at once, which means more satellites in view and better fixes in difficult terrain.

### What your phone does — and does not — need

- A phone’s GNSS receiver **only listens**. It does not need cell coverage or data to compute a position, and on most modern phones it keeps working in **airplane mode**.
- **Assisted GPS (A-GPS)** uses the cell network to download satellite orbit data so the first fix comes in seconds. Without a network, a "cold" first fix can take from under a minute to several minutes — stand still in the open and wait.
- What *does* need data is the **map**. A blue dot on a blank grey screen is useless. **Download offline maps before the trip**, then test them in airplane mode at home.

### Accuracy and how it fails

Under open sky, GPS-enabled smartphones are typically accurate to about **5 m**. Accuracy degrades:

- **Under dense canopy**, especially when wet — signals are weakened.
- **In canyons, gorges and "urban canyons"** — buildings and cliffs block much of the sky, and signals **bounce (multipath)**, arriving late and making the receiver think the satellite is further away. Fixes jump around by tens of metres.
- **With poor geometry** — if the usable satellites are bunched in one part of the sky, small range errors turn into large position errors. This is measured by **DOP (dilution of precision)**.

Signs of a bad fix: the accuracy circle is large, your position jumps while you stand still, or your track zigzags across a valley you did not cross. Check against the terrain — GNSS is a sensor, not an oracle.`,
    },
    { type: 'diagram', id: 'gnss-trilateration', caption: 'Each satellite’s signal travel time gives a range sphere; the receiver’s own clock error is solved as a fourth unknown.' },
    {
      type: 'md',
      md: `### Coordinate formats

The same point can be written in several ways. Mixing them up is a classic, dangerous search-and-rescue error.

| Format | Example | Notes |
|---|---|---|
| **DD** — decimal degrees | 46.5725° N, 8.0050° E | Common in phone apps and web maps; sometimes written 46.5725, 8.005 (N and E positive, S and W negative). |
| **DDM** — degrees, decimal minutes | 46° 34.35′ N, 8° 00.30′ E | Aviation, marine and many GPS units. |
| **DMS** — degrees, minutes, seconds | 46° 34′ 21″ N, 8° 00′ 18″ E | Traditional; paper charts and older maps. |
| **UTM / MGRS** | e.g. 32T 0423xxx 51xxxxx | Metric grid: easting and northing in metres within a 6° zone; MGRS adds letters for 100 km squares. Matches the grid on many topographic maps. |

**Always say the format and the hemisphere letters** when reporting a position, and read digits one at a time: "four six, decimal, five seven two five, north."

**Datum.** Coordinates are relative to a model of Earth’s shape (a *datum*). GNSS uses **WGS 84**; many older paper maps use local datums (e.g., NAD27 in North America, OSGB36 in Britain). The same numbers on different datums can be tens to a couple of hundred metres apart. Set your device to the datum printed on your map, or know that they differ.`,
    },
    {
      type: 'md',
      md: `### Battery strategy

- **Before:** start at 100 %; carry a **power bank** and cable; download maps; set the screen timeout short; know your phone’s real drain rate from a test walk.
- **During:** keep the phone in **airplane mode** (GNSS still works) and **low-power mode**; screen **off** between checks; check position at decision points instead of following the blue dot continuously. If you record a track, the drain is modest with the screen off.
- **Cold:** lithium-ion batteries deliver much less power when cold and phones may shut down with charge "remaining". Keep the phone and power bank **inside your clothing**, close to the body; warming a "dead" cold phone often brings it back.
- **Reserve:** decide a **hard floor** (e.g., 30 %) kept for an emergency call, SMS and coordinates. When you reach it, the phone becomes an emergency device only.

### Offline maps and track recording

Download the area **plus a generous margin** (your escape routes and the next valley). Use a topographic layer with contours, not a road map. Record your **track**: if you become lost, it shows exactly where you came from — a backtracking route to your last known point.

### Beacons and messengers

A **PLB** transmits on 406 MHz to the **Cospas-Sarsat** satellite system with a GNSS-derived position; a **satellite messenger** adds two-way text. Some phones now offer emergency SOS via satellite in some regions. These alert rescuers — they are the right tool when you *need help*, not a substitute for knowing where you are.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Complement, never replace',
      md: 'Carry a paper map and compass and know how to use them. Electronics fail from cold, water, drops, flat batteries and software updates. GNSS is superb for *confirming* your position and giving exact coordinates to rescuers — as one of at least two independent systems.',
    },
  ],
  whyItMatters: 'A phone with an offline map and a charged battery is the most powerful navigation tool most people will ever carry — and dead batteries, missing maps and misread coordinates are among the most common reasons it fails them. Rescuers can only reach the position you give them.',
  science: [
    {
      type: 'md',
      md: `### Ranging from time

Each satellite broadcasts its position and a precise time. Your receiver measures how long the signal took to arrive, $\\Delta t$, and turns it into a distance using the speed of light $c \\approx 3 \\times 10^8\\ \\text{m/s}$:

$$
r = c \\, \\Delta t
$$

In words: **distance = speed of light × travel time.** GPS satellites orbit about 20 200 km up, so the signal takes about $20\\,200\\,000 / 3\\times10^8 \\approx 0.067\\ \\text{s}$ (67 ms). Because $c$ is so large, tiny timing errors matter: an error of **1 microsecond** gives

$$
3 \\times 10^8\\ \\text{m/s} \\times 1 \\times 10^{-6}\\ \\text{s} = 300\\ \\text{m}.
$$

### Why four satellites?

Satellites carry atomic clocks; your phone has a cheap quartz clock that may be off by milliseconds. So there are **four unknowns**: your three position coordinates $(x, y, z)$ and your clock error $b$. Each satellite gives one equation, $\\sqrt{(x-x_i)^2+(y-y_i)^2+(z-z_i)^2} + c\\,b = c\\,\\Delta t_i$, so you need at least **four** satellites. Extra satellites improve accuracy and let the receiver reject bad signals.

### Geometry: DOP

Position error ≈ **DOP × range error**. With a range error of 3 m and a horizontal DOP of 1.5 (satellites spread across the sky), expect about $1.5 \\times 3 = 4.5\\ \\text{m}$. In a narrow gorge where only a strip of sky is visible, DOP might be 6: $6 \\times 3 = 18\\ \\text{m}$, before adding multipath.

### Coordinate arithmetic

- $1°$ of latitude ≈ **111 km**; $1′ = 1/60°$ ≈ **1.85 km** (one nautical mile); $1″$ ≈ **31 m**; $0.00001°$ ≈ **1.1 m**.
- A degree of longitude shrinks with latitude: $111 \\cos\\varphi$ km — about 55.5 km at 60°.

**Converting DD → DDM → DMS**, e.g. $46.5725°$:
1. Whole degrees: **46°**. Fraction $0.5725 \\times 60 = 34.35′$ → **46° 34.35′** (DDM).
2. Whole minutes: **34′**. Fraction $0.35 \\times 60 = 21″$ → **46° 34′ 21″** (DMS).

**Why mixing formats is dangerous.** If "46° 34.35′" is typed into an app as 46.3435°, the error is $0.5725 - 0.3435 = 0.229°$, i.e. $0.229 \\times 111 \\approx 25\\ \\text{km}$ — a search in the wrong valley.

### A battery budget

A phone navigating with the screen on continuously might use **10–15 % per hour**; in airplane mode with the screen off and brief position checks, a few percent per hour. Starting at 80 % with a 30 % reserve leaves 50 % to spend:

$$
\\text{hours} = \\frac{80 - 30}{12\\ \\%/\\text{h}} \\approx 4.2\\ \\text{h (screen on)} \\qquad \\frac{80 - 30}{2.5\\ \\%/\\text{h}} = 20\\ \\text{h (checks only)}
$$

A 10 000 mAh power bank delivers only about 60–70 % of its rating to the phone (voltage conversion and heat), so roughly $6500 / 3000 \\approx 2$ full charges of a 3000 mAh phone.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** Open summits give excellent fixes; a deep gorge on the descent gives a jumpy one. Take a clean fix on the open shoulder before dropping in, and note it.

**Tropical rainforest.** Wet, multi-layer canopy weakens signals. Wait for the fix to settle, or take it in a river clearing or tree fall gap.

**Arctic and subarctic.** Cold is the main enemy: carry the phone in an inner pocket and use a power bank kept warm; touchscreens fail with gloves and wet fingers — know your phone’s physical buttons for emergency calls.

**Desert.** Excellent sky view, but heat also harms batteries: keep the phone shaded (not on a dashboard). Coordinates are vital where there are few named features to describe.

**Coast.** Sea cliffs and coves can block half the sky. Tide times in your notes; the map app will not warn you about the tide.

**Urban.** Tall buildings produce multipath errors of tens of metres — a blue dot on the wrong side of a street or block. In a disaster, networks may be overloaded while GNSS still works: offline maps of your own city are worth downloading.

**Rural.** Farm tracks and forestry roads may be missing or wrong on road maps; use a topographic layer.`,
    },
  ],
  mistakes: [
    'Believing GPS needs phone signal. The position does not; the map download does.',
    'Reading coordinates to rescuers without saying the format — or typing DDM into an app expecting DD.',
    'Following the blue dot with the screen on all day and arriving at dusk with 5 % battery.',
    'Keeping the phone in an outer pocket or pack lid in the cold.',
    'Downloading a road map instead of a topographic map, or only the planned route without margins.',
    'Trusting a jumpy fix in a gorge or under wet canopy without checking the terrain.',
    'Myth: "GPS will tell rescuers where I am." Your phone knows; rescuers do not — until you call, text, or activate a beacon.',
  ],
  exercises: [
    {
      id: 's2-l11-e1',
      title: 'Coordinate format drill',
      level: 1,
      safety: 'home',
      minutes: 25,
      steps: [
        'Get your home coordinates from a map app in decimal degrees.',
        'Convert them by hand to DDM and DMS; check with the app’s format setting.',
        'Find the same point’s UTM/MGRS reference in an app or on a topographic map.',
        'Read the position aloud to a partner in each format, stating format and hemisphere; have them type it into their app and see if it lands on your house.',
      ],
      success: ['Your hand conversions match the app to the nearest second.', 'Your partner’s pin lands within 30 m of your house for every format.'],
      skill: 'gps-offline',
    },
    {
      id: 's2-l11-e2',
      title: 'Offline map and battery test',
      level: 2,
      safety: 'home',
      minutes: 60,
      materials: ['Phone with an offline-capable map app', 'Power bank'],
      steps: [
        'Download a topographic offline map for an area you plan to visit, with a margin of at least 5 km around your route.',
        'Put the phone in airplane mode and confirm the map and your position still display.',
        'Record 30 minutes of track with the screen off, then 30 minutes with the screen on; note the battery used each time.',
        'Write your battery plan: start level, reserve floor, check schedule and expected hours.',
      ],
      success: ['Map and position work in airplane mode.', 'You know your phone’s drain rate in both modes and have a written reserve floor.'],
      skill: 'gps-offline',
    },
  ],
  quiz: [
    {
      id: 's2-l11-q5',
      kind: 'single',
      prompt: 'Which statement about phone GNSS in the field is **false**?',
      choices: [
        { id: 'a', text: 'Most modern phones can get a GNSS fix in airplane mode with no cell signal.', why: 'True — the receiver only listens to satellites.' },
        { id: 'b', text: 'Without a downloaded map, a fix with no data may show a dot on a blank screen.', why: 'True — maps, unlike positions, need data unless stored offline.' },
        { id: 'c', text: 'Fixes are usually most accurate at the bottom of a narrow gorge.', why: 'Correct — this is false: the sky is blocked and multipath is common.' },
        { id: 'd', text: 'A cold phone that shuts down may work again once it is warmed.', why: 'True — cold reduces the battery’s available power; warming often restores it.' },
      ],
      answer: 'c',
      concepts: ['gnss', 'offline-maps', 'battery-strategy'],
      explanation: 'Positions are free and offline; maps must be downloaded; geometry and cold are the big practical limits. (Datums matter too: the same numbers on different datums can be tens to hundreds of metres apart.)',
    },
    {
      id: 's2-l11-q3',
      kind: 'single',
      prompt: 'A dispatcher types “46° 34.35′ N” into an app as **46.3435°**. How far north–south is the plotted point from the true one? (1° ≈ 111 km.)',
      choices: [
        { id: 'a', text: '25.4 km', why: 'Correct — 46 + 34.35/60 = 46.5725°; the gap is 0.229° × 111 km.' },
        { id: 'b', text: '254 km', why: 'Decimal slip — the gap was taken as 2.29° instead of 0.229°.' },
        { id: 'c', text: '13.7 km', why: 'The 0.229° gap was turned into 13.7 minutes and read as km — 1′ is about 1.85 km.' },
        { id: 'd', text: '2.5 km', why: 'Decimal slip — the gap was taken as 0.0229° instead of 0.229°.' },
      ],
      answer: 'a',
      concepts: ['coordinate-formats'],
      explanation: '46° 34.35′ = 46 + 34.35/60 = 46.5725°. Error = 46.5725 − 46.3435 = 0.229°; × 111 ≈ **25.4 km**.',
    },
    {
      id: 's2-l11-q6',
      kind: 'single',
      prompt: 'Which order of trip-preparation steps for digital navigation makes most sense?',
      choices: [
        { id: 'a', text: 'Download map → test offline → charge, leave plan → trail routine', why: 'Correct — get the data, prove it works, charge and plan, then run the battery strategy.' },
        { id: 'b', text: 'Charge, leave plan → download map → trail routine → test offline', why: 'Testing offline must happen at home, before you rely on it on the trail.' },
        { id: 'c', text: 'Download map → charge, leave plan → trail routine → test offline', why: 'Discovering the offline map fails once you are already on the trail is too late.' },
        { id: 'd', text: 'Test offline → download map → charge, leave plan → trail routine', why: 'There is nothing to test offline until the map has been downloaded.' },
      ],
      answer: 'a',
      concepts: ['offline-maps', 'battery-strategy', 'trip-plan'],
      explanation: 'Download the topographic map with a margin, test map and position at home in airplane mode, charge phone and power bank and leave a trip plan — then on the trail use airplane mode, screen off, check at decision points and keep a reserve.',
    },
    {
      id: 's2-l11-q2',
      kind: 'single',
      prompt: 'Why does a GNSS receiver need signals from at least **four** satellites for a position?',
      diagram: 'gnss-trilateration',
      choices: [
        { id: 'a', text: 'One for each of north, south, east and west.', why: 'Directions are not measured separately.' },
        { id: 'b', text: 'To solve three position coordinates plus the receiver’s clock error.', why: 'Correct — four unknowns need four equations.' },
        { id: 'c', text: 'Because each constellation contributes one satellite.', why: 'A single constellation can give a fix alone.' },
        { id: 'd', text: 'Three for position and one to download the map.', why: 'Satellites do not send maps.' },
      ],
      answer: 'b',
      concepts: ['gnss'],
      explanation: 'The cheap receiver clock is the fourth unknown. Extra satellites add accuracy and let bad signals be rejected.',
    },
    {
      id: 's2-l11-q4',
      kind: 'single',
      prompt: 'Your phone is at 70 %. You want to keep a 25 % reserve, and continuous screen-on navigation uses 15 % per hour. How long can you afford to navigate screen-on?',
      choices: [
        { id: 'a', text: '3 h', why: 'Correct — (70 − 25) / 15 = 45 / 15.' },
        { id: 'b', text: '4.7 h', why: 'Forgot the reserve — 70 / 15 runs the phone flat.' },
        { id: 'c', text: '1.7 h', why: 'Budgeted the reserve instead of what is above it — 25 / 15.' },
        { id: 'd', text: '6.3 h', why: 'Added the reserve instead of subtracting it — (70 + 25) / 15.' },
      ],
      answer: 'a',
      concepts: ['battery-strategy', 'phone-use'],
      explanation: '(70 − 25) / 15 = **3 h**. Switching to screen-off with checks at decision points could stretch the same 45 % to well over a day.',
    },
    {
      id: 's2-l11-q1',
      kind: 'single',
      prompt: 'Radio signals travel at about 3 × 10⁸ m/s. A receiver’s timing is off by **1 microsecond**. How large a range error does that cause?',
      choices: [
        { id: 'a', text: '300 m', why: 'Correct — 3 × 10⁸ × 1 × 10⁻⁶ = 300 m.' },
        { id: 'b', text: '300 km', why: 'Used a millisecond (10⁻³ s) instead of a microsecond.' },
        { id: 'c', text: '0.3 m', why: 'Used a nanosecond (10⁻⁹ s) instead of a microsecond.' },
        { id: 'd', text: '150 m', why: 'Halved as if for a radar echo — GNSS signals travel one way.' },
      ],
      answer: 'a',
      concepts: ['gnss'],
      explanation: '$3\\times10^8 \\times 1\\times10^{-6} =$ **300 m**. That is why the receiver solves for its own clock error.',
    },
  ],
  scenario: {
    id: 's2-l11-sc',
    setup: 'In a whiteout on a mountain ridge, your partner has slipped and injured a leg. You have one bar of signal and 22 % battery. Your GPS app shows “46° 34′ 21″ N, 8° 00′ 18″ E”. You get through to the emergency number.',
    question: 'How do you give your location?',
    choices: [
      { id: 'a', text: 'Read “46 34 21, 8 0 18” out quickly, before the weak call has a chance to drop.', why: 'Without the format and hemisphere, the dispatcher may enter it as decimal degrees or DDM — kilometres off.' },
      { id: 'b', text: 'Say “degrees, minutes, seconds”, read each part with N/E, get a read-back, SMS it, then save battery.', why: 'Best — format and read-back prevent the classic conversion error; SMS gets through on weak signal and leaves a written record; the battery plan keeps you reachable.' },
      { id: 'c', text: 'Describe the ridge and the nearest summit instead, since coordinates confuse people.', why: 'Descriptions help as a cross-check but are far less precise, especially in a whiteout.' },
      { id: 'd', text: 'Hang up and activate a personal locator beacon instead, which rescuers can home in on.', why: 'You already have a live line to rescuers; a beacon is the backup if the phone fails.' },
    ],
    best: 'b',
    debrief: 'Coordinates are only useful if they are **received correctly**. State the format, read digits clearly, get a read-back, and back it up by SMS — which often works when voice is marginal (Stage 1: **phone use**, **signaling**). Then protect the battery so rescuers can reach you again (airplane mode, power saving, phone kept warm, agreed check-in times). A beacon or satellite SOS is the backup if the phone dies.',
    concepts: ['coordinate-formats', 'phone-use', 'signaling', 'battery-strategy'],
  },
  summary: [
    'GNSS: distance = speed of light × travel time; four satellites solve position plus clock error. 1 µs ≈ 300 m.',
    'Open sky ≈ 5 m with a phone; canopy, canyons, multipath and poor geometry (DOP) degrade it.',
    'Positions work offline; maps must be downloaded. Test in airplane mode.',
    'DD, DDM, DMS, UTM/MGRS: always state the format, hemisphere and (if relevant) datum. 1° ≈ 111 km, 1′ ≈ 1.85 km.',
    'Battery: airplane mode, screen off, keep warm, check at decision points, keep a hard reserve.',
    'GNSS complements map and compass; PLBs and messengers call for help.',
  ],
  furtherReading: ['gps-gov', 'adventuresmart'],
  references: ['gps-gov', 'cospas-sarsat', 'noaa-sarsat', 'tc-3-25-26', 'usgs-topo', 'adventuresmart'],
}
