import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's14-l1',
  stage: 14,
  order: 1,
  title: 'Visual and audible signals',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s1-l13'],
  concepts: ['signal-mirror', 'night-signals', 'smoke-signals', 'ground-air-signals', 'audible-signals', 'visibility', 'signaling'],
  objectives: [
    'Aim a **signal mirror** with the V-finger and sighting methods, and explain from geometry why a slow sweep works and why the Sun’s position matters.',
    'Choose the right **day, night and sound signal** for the light, the background and the kind of searcher.',
    'Build **ground-to-air** signals and use the **body signals** aircrews recognise — and read the aircraft’s reply.',
    'Prepare **smoke and fire** signals that contrast with the background, only where legal and safe.',
    'Run a **signal routine** that is ready in seconds but costs little energy and battery.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 gave you the basics: groups of three, whistle, mirror, light, colour, the ground-to-air code. This lesson turns them into **skills you can aim, time and adapt**. The idea running through it is simple: a searcher detects you when your signal is **stronger than the background** — brighter, louder, a different colour, a straighter line, a movement — and when it reaches them **while they are looking or listening**.

So every signal decision has three questions:

1. **Who is searching, and how?** Aircraft crews scan the ground from hundreds of metres up, over engine noise. Ground teams walk, call and listen. Boats scan the horizon.
2. **What is the background?** Dark forest, bright snow, pale desert, glittering sea, a city at night.
3. **What costs you what?** Energy, battery, fuel, water and — with fire — the risk of making things far worse.`,
    },
    { type: 'diagram', id: 's14-signal-toolbox', caption: 'A signal toolbox: match the signal to the light and the searcher. Electronic alerts (Lesson 2) work in all conditions — the others help searchers find the exact spot.' },
    {
      type: 'md',
      md: `### The signal mirror: the longest-range thing in your pocket

A mirror reflects an image of the Sun. To the person it hits, the flash is as bright as a patch of the Sun’s surface the size of your mirror — which is why it can be seen from very far away in clear air. But the beam is **narrow**: it spreads only by the width of the Sun’s disc, about half a degree. At 10 km the flash is roughly 90 m wide. That is plenty to cover an aircraft *if you are aimed at it*, and nothing if you are off by a few degrees. Aiming is the skill.

**V-finger method (any mirror):**
1. Extend one arm and make a V with two fingers (or hold up a fist); put the target in the V.
2. Hold the mirror close under your eye and tilt it until the bright spot of reflected sunlight lands on your fingers.
3. Keep the spot on the V while you **rock the mirror slightly** so the spot flicks on and off your fingers — each flick sends a flash across the target.

**Sighting (retroreflective) mirror:** purpose-made signal mirrors have a hole or mesh in the middle. Look through it at the target; a small bright aim spot appears — move the mirror until the spot sits on the target. A CD’s centre hole can be used the same way.

**Sweep, don’t stare.** Slowly sweeping a few degrees back and forth across the target — or along the horizon toward a sound you cannot yet see — gives repeated flashes and forgives aiming error. Keep sweeping the horizon on sunny days even when you see nothing: a crew may see you before you see them.`,
    },
    { type: 'diagram', id: 's14-mirror-aim', caption: 'The mirror must bisect the angle between Sun and target. The flash cone is only about half a degree wide.' },
    { type: 'sim', id: 'signal-mirror', caption: 'Try each situation: which reflector, which aiming method, and where to stand?' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Flash only in a real emergency',
      md: 'A mirror flash or a laser in a pilot’s or driver’s eyes can dazzle them at a critical moment. **Practise on walls, rocks and signs — never at aircraft, vehicles or people.** Many countries prosecute pointing lasers at aircraft; hand-held “rescue lasers” are sold, but the same rule applies: emergencies only, and never at the cockpit once the crew has seen you. Once an aircraft or boat is clearly heading for you, stop flashing directly at it.',
    },
    {
      type: 'md',
      md: `### Light at night

In darkness a small light is visible from far away, especially from the air, because the background is black.

- **Strobe or torch in groups of three**, or **SOS** (··· — — — ···). A flashing light is noticed more easily than a steady one against scattered lights.
- **Point, then sweep.** Point your torch toward a sound; sweep slowly across an aircraft’s path.
- **Chemical light stick on a cord**, swung in a circle, makes a large ring of light — a distinctive, man-made shape.
- **Save the battery.** Don’t run a strobe all night. Listen for engines, voices or whistles, then signal. Use the **red** or lowest mode for camp tasks to protect your night vision (Stage 8) and your battery.
- **Fire at night** is a bright, flickering point — prepared in advance, legal and safe (below).

### Sound: for ground teams

Sound matters when searchers are close: in forest, fog, at night, in rubble. A **whistle** carries much further than a voice and costs almost nothing. Three blasts, pause, repeat — then **stop and listen**, because ground teams call and then wait for an answer. Banging on a pipe, a pot or a car horn in threes works too. Aircrews cannot hear you over their engines.`,
    },
    {
      type: 'md',
      md: `### Smoke and fire

By day, a smoke column can be seen for kilometres — if it **contrasts** with the background and if the wind lets it rise.

- **Pale smoke** (green leaves, damp moss, grass or conifer boughs on a hot fire) shows against dark forest or rock.
- **Dark smoke** (rubber, oil-soaked material) shows against snow, pale sand or a hazy sky. Burning plastics produces toxic smoke — stay upwind and use it only in a real emergency.
- **Wind flattens smoke**; calm mornings are best.
- **Three fires in a triangle**, or three smokes in a line, is a recognised distress pattern.
- **Prepare in advance, light on cue.** Build the fire in the open with dry tinder protected from rain and a pile of smoke-making material beside it. Light it when you hear or see searchers — not hours earlier.`,
    },
    { type: 'diagram', id: 's14-smoke-contrast', caption: 'Contrast is everything: pale smoke against dark, dark smoke against pale — and calm air.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Signal fires and the law',
      md: 'Fire rules still apply in an emergency: many regions ban all open fires during high fire danger, and a signal fire that escapes can start a wildfire that endangers you, the searchers and whole communities. **Check local fire restrictions before every trip**, and in dry, windy conditions choose other signals. Where fire is allowed, clear a wide area to mineral soil, keep it small until needed, never leave it unattended and put it out completely (Stage 3).',
    },
    {
      type: 'md',
      md: `### Ground-to-air and body signals

Aircrews scan for **what nature does not make**: straight lines, right angles, big geometric shapes, strong contrast and movement.

- Use the international code from Stage 1 (**V** require assistance, **X** require medical assistance, **N** no, **Y** yes, **arrow** proceeding in this direction). Make symbols **at least 3 m long — bigger is better** — with lines about a sixth as wide as they are long.
- **Materials:** a bright tarp or space blanket, clothing, logs or stones on snow; trenches in snow cast shadows; turf turned over on grass; dark branches on pale sand. In open country, orient long lines across the expected flight path.
- **Body signals:** **both arms raised in a Y** means “need help, pick us up”; **one arm up and one down** means “no help needed”. A cheerful one-armed wave can be read as “all fine”.
- **The aircraft’s reply:** rocking its wings by day, or flashing its landing or navigation lights twice at night, means **message received and understood**.`,
    },
    { type: 'diagram', id: 'ground-to-air', caption: 'Ground-to-air code (from Stage 1).' },
    { type: 'diagram', id: 's14-body-signals', caption: 'Body signals and the aircraft’s acknowledgement.' },
    {
      type: 'md',
      md: `### A signal routine

When you have decided to stay (Lesson 4), set up once and keep it cheap:

1. **Static signals first** — they work while you sleep: a bright tarp or shape in the nearest open spot, a big V or arrow, bright gear on a pole.
2. **Ready signals within reach** — mirror on a cord around your neck, whistle, torch, smoke material beside a prepared (legal) fire.
3. **Listen and look on a schedule** — for example, whistle in threes then listen for a minute every 15 minutes by day; sweep the horizon with the mirror whenever the Sun is out; check the phone on the battery plan from Stage 1.
4. **React immediately** to engines, voices, lights or whistles: mirror or light first, then movement and colour.`,
    },
  ],
  whyItMatters: 'Searchers can pass close to a missing person without seeing them: canopy, dull clothing, a small shape in a big landscape. An alert (a call or a beacon) tells rescuers to come; visual and audible signals turn the last few kilometres into the last few metres. A prepared, well-aimed signal can end a search in minutes — and a badly chosen one, like a fire in high fire danger, can create a second emergency.',
  science: [
    {
      type: 'md',
      md: `### Mirror geometry

A flat mirror reflects light so that the angle in equals the angle out. To send sunlight to a target, the **mirror’s normal** (the line perpendicular to its face) must point exactly halfway between the direction to the Sun and the direction to the target. If the angle between those two directions is $\\theta$, the mirror is tilted $\\theta/2$ from each, and the area it presents to the Sun — its **effective area** — is

$$
A_{\\text{eff}} = A \\cos\\left(\\frac{\\theta}{2}\\right)
$$

In words: with the Sun in front of you and the target in front ($\\theta$ small), you get almost the full mirror. With the Sun to your side ($\\theta = 90°$), $\\cos 45° \\approx 0.71$. With the Sun almost directly behind you ($\\theta = 160°$), $\\cos 80° \\approx 0.17$ — the mirror is nearly edge-on. Turning or moving so the Sun is more to your side can quadruple the flash.

### Beam width

The Sun’s disc is about $0.53°$ across, so the reflected beam spreads by the same angle. Its width at distance $d$ is about

$$
w \\approx d \\times 0.0093
$$

At $d = 10$ km: $w \\approx 93$ m. At 25 km: $\\approx 230$ m. A pointing error of 2° at 10 km misses by about $10\\,000 \\times \\tan 2° \\approx 350$ m — this is why aiming technique matters more than mirror size at short range.

### Brightness falls with distance and haze

The flash intensity is proportional to effective area × reflectance. Like any point source, its illuminance at the observer falls with the **square of distance**, and haze removes a further fraction:

$$
E = \\frac{I}{d^2}\\, e^{-3.9\\,d/V}
$$

where $V$ is the meteorological visibility. Worked example: moving from 10 km to 20 km cuts $1/d^2$ to a quarter; if visibility is 40 km, haze cuts it by a further $e^{-3.9 \\times 10/40} \\approx 0.38$. The flash at 20 km is about $0.25 \\times 0.38 \\approx 0.1$ as bright as at 10 km. A glass mirror with reflectance ~0.85 is about 17 times brighter than a phone screen of the same size, whose glass reflects only a few per cent.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert:** sunshine most days makes the mirror your main signal. Lay dark stones or clothing in a large V on pale ground; by day, rest in shade beside your prepared signals rather than walking (Stage 8 heat balance). Dark smoke shows against pale sand and sky.

**Coast and sea:** sweep the mirror along the horizon toward boats and aircraft; glitter on the water makes small bright objects hard to see, so colour and movement matter. On a beach, write the symbols above the high-tide line.

**Arctic and snow:** dark shapes on snow; trenches that cast shadows (best with low Sun); dark smoke. Cold kills batteries — keep torches and phones inside your clothing.

**Tropical forest:** canopy hides almost everything. Get to a river bank, a gap from a fallen tree or a clearing; flash and wave from there. Smoke from a fire in the open rises through gaps. Whistles are valuable because visibility on the ground is a few metres.

**Mountain:** ridges and open slopes are visible from the air but exposed to weather; valleys are sheltered but hidden. The **Alpine distress signal** (six signals a minute, a minute’s pause, repeat) is recognised in European mountains. Shout-and-listen works across valleys in calm air.

**Rural farmland:** fields make ground signals easy; mowed or trampled letters in crops show clearly — tell the landowner afterward.

**Urban disaster:** from a window or a roof, a bright sheet or towel, a torch at night, and knocking or whistling in threes if trapped (Stage 16).`,
    },
  ],
  mistakes: [
    'Myth: a mirror only works when the Sun is in front of you. It works with the Sun to the side; only when the Sun is almost directly behind you does it become weak — then move or turn.',
    'Flashing randomly at the sky instead of aiming with the V-finger or sighting method, or holding the aim still instead of sweeping slowly across the target.',
    'Myth: helicopter crews will hear shouting or a whistle. Engine and rotor noise drowns it; use visual signals for aircraft and sound for ground teams.',
    'Waving one arm cheerfully at an aircraft — it can look like “all fine”. Use both arms in a Y.',
    'Ground signals that are too small, in shade, under trees or in colours that blend with the background.',
    'Lighting a signal fire during a fire ban or in dry wind, or leaving it unattended.',
    'Running a strobe or headlamp all night so there is no battery left when searchers are actually near.',
    'Signalling without pausing to listen for the reply.',
  ],
  exercises: [
    {
      id: 's14-l1-e1',
      title: 'Mirror aiming practice',
      level: 2,
      safety: 'outdoor',
      minutes: 40,
      materials: ['Signal mirror or small flat mirror (a CD also works)', 'A sunny day', 'A partner with a phone'],
      safetyNote: 'Aim only at walls, rocks, signs or trees — never at people, vehicles or aircraft. Your partner watches the target, not the mirror, and stays well to one side of it.',
      steps: [
        'Pick a target 100–300 m away (a pale wall, a rock face, a sign).',
        'V-finger method: put the target in your V, bring the sun spot onto your fingers, then rock the mirror slightly. Your partner, standing beside the target, tells you by phone when they see the flash land.',
        'If your mirror has a sighting hole, repeat with the aim spot. Compare how fast you get on target.',
        'Move so the Sun is (a) in front of you, (b) to your side, (c) nearly behind you. Notice how hard (c) is and how moving a few metres helps.',
        'Time yourself: from mirror in pocket to flash on target.',
      ],
      success: ['Flash on target within 10 seconds with the Sun to your side.', 'You can explain why the Sun almost behind you makes aiming hard.'],
      skill: 'signaling-basic',
    },
    {
      id: 's14-l1-e2',
      title: 'Build and check a ground-to-air signal',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Bright tarp, space blanket or clothing', 'An open field or beach where you have permission', 'A viewpoint above it (hill, embankment or upper floor)'],
      safetyNote: 'Use only loose materials; do not cut vegetation or dig on protected land. Remove everything afterwards.',
      steps: [
        'Lay out a V at least 3 m long with a bright tarp or clothing, lines roughly a sixth as wide as they are long.',
        'From your viewpoint, photograph it. Then photograph it again after moving it into the shade of trees or against a background of similar colour.',
        'Improve contrast and straightness until it reads instantly as man-made.',
        'Practise the Y and N body signals in front of your partner at 100 m; can they tell them apart?',
      ],
      success: ['Your signal is recognisable in a photograph from the viewpoint at a glance.', 'You can explain which placement made it disappear and why.'],
      skill: 'search-support',
    },
  ],
  simulations: ['signal-mirror', 'signal-detect'],
  quiz: [
    {
      id: 's14-l1-q3',
      kind: 'single',
      prompt: 'Sunny morning. A search aircraft is to the east; the Sun is low in the west, almost directly behind you. What do you do with your mirror?',
      choices: [
        { id: 'a', text: 'Give up on the mirror — it cannot work with the Sun behind you', why: 'It can still work, just weakly; and you can improve the angle.' },
        { id: 'b', text: 'Turn or move so the Sun is more to your side, then aim and sweep', why: 'Correct — reducing the Sun–target angle increases the effective area, and aiming plus sweeping puts the flash on the aircraft.' },
        { id: 'c', text: 'Flash straight up at the sky so it is seen from all directions', why: 'The flash goes where the mirror points; straight up it reaches nobody.' },
        { id: 'd', text: 'Hold the mirror flat on the ground so it catches the most sunlight', why: 'It will reflect the Sun upward and westward, away from the aircraft.' },
      ],
      answer: 'b',
      concepts: ['signal-mirror', 'visibility'],
      explanation: 'Effective area = $A\\cos(\\theta/2)$. With θ near 180° the mirror is edge-on; a few metres’ move or a turn can make a big difference.',
    },
    {
      id: 's14-l1-q6',
      kind: 'single',
      prompt: 'Night in a forest. You hear distant voices calling a name — yours. Your headlamp is at 30 %. What is the best first action?',
      choices: [
        { id: 'a', text: 'Whistle in threes, pause to listen, then aim your light at them', why: 'Correct — sound reaches ground teams through trees; the pause lets you hear their answer, and the light guides them in.' },
        { id: 'b', text: 'Shout back continuously until the searchers reach you', why: 'Tiring, carries less far than a whistle and you cannot hear their replies.' },
        { id: 'c', text: 'Head toward the voices in the dark so they find you sooner', why: 'Risk of a fall or injury, and you may move away from where they are heading.' },
        { id: 'd', text: 'Stay quiet to save energy and headlamp until they are close', why: 'They may pass by; ground teams call and then listen for an answer.' },
      ],
      answer: 'a',
      concepts: ['audible-signals', 'night-signals'],
      explanation: 'Match the signal to the searcher: sound for ground teams, then light to guide them. Stay put.',
    },
    {
      id: 's14-l1-q4',
      kind: 'single',
      prompt: 'Where fire is legal and safe, which smoke signal is most likely to be seen well?',
      choices: [
        { id: 'a', text: 'Pale smoke above dark conifer forest on a calm morning', why: 'Correct — pale smoke contrasts with the dark trees, and calm air lets it rise in a column.' },
        { id: 'b', text: 'Pale smoke from green boughs in a strong, gusty wind', why: 'Wind flattens and disperses the smoke before it can be seen.' },
        { id: 'c', text: 'A smoky fire built under dense forest canopy', why: 'The canopy diffuses the smoke, and the fire risk is high.' },
        { id: 'd', text: 'Pale smoke against a white overcast sky', why: 'Poor contrast; dark smoke would stand out more.' },
      ],
      answer: 'a',
      concepts: ['smoke-signals', 'visibility'],
      explanation: 'Smoke must contrast with its background (pale over dark forest, dark over snow) and be able to rise. And only where fire is legal and safe.',
    },
    {
      id: 's14-l1-q5',
      kind: 'single',
      prompt: 'A helicopter crew is passing and looking your way. Which body signal clearly says you need help?',
      choices: [
        { id: 'a', text: 'Waving one arm overhead', why: 'A one-armed wave can be read as a friendly “all fine”.' },
        { id: 'b', text: 'Both arms raised in a Y', why: 'Correct — both arms up in a Y means “need help, pick us up”.' },
        { id: 'c', text: 'One arm up and one arm down', why: 'That means “no help needed” — the opposite of what you want.' },
        { id: 'd', text: 'One arm held straight up, still', why: 'A single arm is not the help signal; the recognised signal uses both arms in a Y.' },
      ],
      answer: 'b',
      concepts: ['ground-air-signals'],
      explanation: 'Both arms raised in a **Y** means “need help”. A one-armed wave can be read as a friendly “all fine”; one arm up and one down means “no help needed”.',
    },
    {
      id: 's14-l1-q1',
      kind: 'single',
      prompt: 'V-finger mirror method: the target is framed in your V and the sun spot is now resting on your fingers. What is the next step?',
      choices: [
        { id: 'a', text: 'Hold the mirror perfectly still so the spot stays on the V', why: 'A still aim easily misses; small rocking sends repeated flashes across the target.' },
        { id: 'b', text: 'Rock the mirror slightly so the spot flicks on and off the V', why: 'Correct — rocking makes repeated flashes cross the target, covering small aiming errors.' },
        { id: 'c', text: 'Lower your arm so the flash can travel on to the target', why: 'Your fingers are the aiming reference; lowering them loses the aim.' },
        { id: 'd', text: 'Move the mirror away from your eye to widen the flash', why: 'The beam width is set by the Sun’s disc; the mirror stays close under your eye to keep the aim.' },
      ],
      answer: 'b',
      concepts: ['signal-mirror'],
      explanation: 'Frame the target in a V, hold the mirror close under your eye, tilt until the spot falls on your fingers, then rock slightly so repeated flashes cross the target.',
    },
    {
      id: 's14-l1-q2',
      kind: 'single',
      prompt: 'A mirror flash spreads by about 0.0093 of the distance (the Sun’s disc). How wide is the flash when it reaches an aircraft 20 km away?',
      choices: [
        { id: 'a', text: 'About 186 m', why: 'Correct — 20 000 m × 0.0093 ≈ 186 m.' },
        { id: 'b', text: 'About 0.19 m', why: 'This multiplies 20 (km) by 0.0093 without converting kilometres to metres.' },
        { id: 'c', text: 'About 18.6 m', why: 'This treats 20 km as 2 000 m — one factor of ten lost in the conversion.' },
        { id: 'd', text: 'About 1 860 m', why: 'This treats 20 km as 200 000 m — one factor of ten too many.' },
      ],
      answer: 'a',
      concepts: ['signal-mirror'],
      explanation: '$20\\,000 \\times 0.0093 \\approx 186$ m. Wide enough to cover an aircraft — but a 2° aiming error at 20 km misses by about 700 m, so technique matters.',
    },
  ],
  scenario: {
    id: 's14-l1-sc',
    setup: 'Day 2 lost in pale, rocky desert hills. It is 10:00, sunny and hot; the Sun is in the south-east. You have 1.5 L of water, a small compact mirror, a dark-blue jacket, a whistle and a lighter. Dry brush grows along a wash; a fire ban was posted at the trailhead. You hear a light aircraft somewhere to the north-west but cannot see it yet.',
    question: 'What is your best plan?',
    choices: [
      { id: 'a', text: 'Light the brush in the wash to make a big smoke column.', why: 'A fire ban, dry brush and heat: a wildfire could start that threatens you and the searchers.' },
      { id: 'b', text: 'Stand on an open spot near your shade, sweep the mirror slowly along the north-west horizon toward the sound, and lay the dark jacket and stones out as a large V on pale ground; rest in shade between passes.', why: 'Best: the mirror is the longest-range daytime signal; the Sun to your side/front makes aiming practical; a static dark-on-pale V keeps working while you rest and conserve water.' },
      { id: 'c', text: 'Walk toward the sound to get closer to the aircraft.', why: 'You cannot outwalk an aircraft; walking in heat burns water, and you leave the area being searched.' },
      { id: 'd', text: 'Blow the whistle in threes so the crew can hear you.', why: 'Aircrews cannot hear a whistle over the engine.' },
    ],
    best: 'b',
    debrief: 'Match the signal to the searcher (aircraft → light and shapes), the background (dark on pale desert) and your constraints (fire ban, water budget from Stage 8). The mirror sweep works before you can see the aircraft; the static V works while you rest in shade.',
    concepts: ['signal-mirror', 'ground-air-signals', 'fire-law', 'water-budget'],
  },
  summary: [
    'A signal works when it beats the background and reaches a searcher who is looking or listening.',
    'Mirror: V-finger or sighting aim, then a slow sweep; the Sun to your side is easier than behind you. Beam ≈ 0.5° wide.',
    'Night: strobe or torch in threes when you hear searchers; save battery; fire only where legal and safe.',
    'Sound is for ground teams: three whistle blasts, then listen.',
    'Smoke: pale on dark, dark on pale, calm air; prepared in advance; never in a fire ban.',
    'Ground-to-air symbols ≥ 3 m in the open; both arms up in a Y = need help; rocking wings = understood.',
  ],
  furtherReading: ['army-atp-3-50-21', 'afh-10-644', 'icao-annex12'],
  references: ['army-atp-3-50-21', 'afh-10-644', 'icao-annex12', 's14-iamsar', 'smokey-campfire', 'icar'],
}
