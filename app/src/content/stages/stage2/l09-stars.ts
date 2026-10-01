import type { Lesson } from '../../types'

export const l09: Lesson = {
  id: 's2-l9',
  stage: 2,
  order: 9,
  title: 'Stars and Moon',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s2-l8'],
  concepts: ['polaris', 'southern-cross', 'star-navigation', 'moon-navigation'],
  objectives: [
    'Find **Polaris** from the Big Dipper or Cassiopeia and use it for north — and estimate your **latitude** from its height.',
    'Find **south** in the southern sky from the **Southern Cross and the Pointers**, and avoid the False Cross.',
    'Use **Orion’s belt** and the **rising/setting symmetry** of any star (and the stick-and-star method) for east–west.',
    'Get a rough direction from the **Moon’s phase and position**, and know how rough it is.',
  ],
  explanation: [
    {
      type: 'md',
      md: `The night sky turns about an axis — the extension of Earth’s own axis into space. The two points it turns around are the **celestial poles**. Everything below follows from one idea: **the celestial pole sits directly above true north (or true south) on the horizon, at a height equal to your latitude.** Find the pole, drop a vertical line to the horizon, and you have a true direction — no declination to worry about.

Star directions are for **orientation, not night travel**. Walking cross-country in the dark is how ankles break and people walk off edges. Use the sky at night to *fix* a direction — lay a line of sticks or stones on the ground — and move on it in daylight.

### Northern Hemisphere: Polaris

**Polaris** (the North Star) lies within about **0.7°** of the north celestial pole — close enough that it is due north for any field purpose. It is *not* especially bright (a common surprise); you find it from its neighbours:

- **Big Dipper (Plough) pointers.** The two stars at the end of the Dipper’s bowl, **Merak** and **Dubhe**, point toward Polaris. Go from Merak through Dubhe and continue about **five times** their separation.
- **Cassiopeia.** The W- (or M-) shaped constellation lies on the *opposite* side of Polaris from the Big Dipper, at roughly the same distance. When the Dipper is low or hidden behind trees, Cassiopeia is high, and vice versa.

Polaris is **not visible from the Southern Hemisphere**, and within a few degrees north of the equator it sits so low that haze and terrain usually hide it.`,
    },
    { type: 'diagram', id: 'northern-sky', caption: 'Merak → Dubhe, about 5× their gap, to Polaris; Cassiopeia on the far side. Drop a vertical from Polaris to the horizon: that point is true north.' },
    {
      type: 'md',
      md: `### Southern Hemisphere: the Southern Cross and the Pointers

There is **no bright star** at the south celestial pole, so you construct it:

1. Find the **Southern Cross (Crux)** — a small, bright kite of four stars — and next to it the two bright **Pointers**, **Alpha and Beta Centauri**.
2. Extend the cross’s **long axis** (from the top star, Gacrux, through the foot star, Acrux) about **4.5 times** its own length.
3. Draw the **perpendicular bisector** of the line joining the two Pointers, and extend it toward the same region.
4. Where the two lines meet is (approximately) the **south celestial pole**. Drop a vertical to the horizon: that is **true south**.

Beware the **False Cross** nearby — a larger, dimmer cross made of stars from Carina and Vela. It has **no Pointers** beside it and its stars are more evenly dim; the real Crux is compact, bright and has the two bright Pointers close by.`,
    },
    { type: 'diagram', id: 'southern-sky', caption: 'Long axis of the Cross × ~4.5 and the perpendicular bisector of the Pointers meet near the south celestial pole; drop to the horizon for south.' },
    {
      type: 'md',
      md: `### East and west: Orion and rising stars

- **Orion’s belt.** The westernmost belt star, **Mintaka**, lies almost exactly on the **celestial equator**. Any star on the celestial equator **rises due east and sets due west from everywhere on Earth** (except the poles). So a rising Mintaka marks east within about 1°; a setting Mintaka marks west. Orion is well placed in the evening from roughly November to March and is visible from both hemispheres (upside down, as seen from the south).
- **Any star’s rising and setting are symmetric.** A star that rises at azimuth $A$ sets at $360° - A$. The bisector of its rising and setting points is the north–south line, and the star reaches its highest point (culminates) on that line.
- **Stick-and-star method.** Line up a star over two stakes (or a stake and a notch) and watch it for 15–20 minutes, keeping your eye in the same place. Stars drift **westward**. If the star **rises**, you are looking roughly **east**; if it **sinks**, roughly **west**. If it slides **to the right**, you are facing roughly **south** (west is on your right); **to the left**, roughly **north**. Choose a star well above the horizon and away from the celestial pole you are facing — stars *below* the pole circle the other way.
- The whole sky rises about **4 minutes earlier each night**, so a constellation you use at 22:00 this week will be in the same place at about 20:00 a month from now.`,
    },
    { type: 'diagram', id: 'orion', caption: 'Mintaka, at the west end of Orion’s belt, sits on the celestial equator: it rises within about 1° of due east everywhere.' },
    {
      type: 'md',
      md: `### The Moon

The Moon is lit by the Sun, so its **lit side faces the Sun** — even when the Sun is below the horizon. Two rough rules:

- **Horn line.** For a crescent or gibbous Moon, imagine a line through the two horns (the tips) and extend it down to the horizon. In northern mid-latitudes it meets the horizon **roughly toward south**; in southern mid-latitudes, roughly toward north. It is a rough guide — the error can be tens of degrees, especially when the Moon is low.
- **Phase and time.** A **full Moon** is opposite the Sun: it rises around sunset, is **highest (roughly due south in northern mid-latitudes, north in southern) around local solar midnight**, and sets around sunrise. A **first-quarter** Moon is highest around sunset; a **last-quarter** Moon is highest around sunrise. The Moon rises on average about 50 minutes later each day.`,
    },
    { type: 'diagram', id: 'moon-phase', caption: 'The lit side points to the Sun. The line through the horns, extended to the horizon, gives a rough south (Northern Hemisphere).' },
    { type: 'sim', id: 'celestial', caption: 'Set a date, time and latitude, then find north or south from the stars — or the Sun or Moon — and check your answer.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Fix a line, then wait for daylight',
      md: 'Once you have north or south from the sky, mark it on the ground with a row of stones or sticks. Travel on it in daylight, using the sun and terrain to hold the direction. Night travel off-trail multiplies fall risk and navigation error; it is justified only by an immediate danger.',
    },
  ],
  whyItMatters: 'Phones die and compasses get lost, but on most clear nights the sky still gives true north or south within a few degrees — better than most natural signs on the ground. It also gives your latitude, and lets you check that a compass is not being deflected by metal or rock.',
  science: [
    {
      type: 'md',
      md: `### Why Polaris’s height equals your latitude

Polaris is so far away that its light arrives as parallel rays, all parallel to Earth’s axis. Your **horizon** is a plane tangent to Earth where you stand. At latitude $\\varphi$, that tangent plane is tilted by $\\varphi$ relative to the axis direction. In words: **the angle between your horizon and the direction of the pole equals your latitude.**

$$
h_{\\text{Polaris}} \\approx \\varphi \\quad (\\pm 0.7°)
$$

Check the ends: at the North Pole ($\\varphi = 90°$) Polaris is overhead; at the equator ($\\varphi = 0°$) it sits on the horizon. The same works in the south: the height of the (constructed) south celestial pole equals your southern latitude.

**Worked example.** At arm’s length a clenched fist covers about $10°$. You stack four and a half fists between the horizon and Polaris: $h \\approx 4.5 \\times 10° = 45°$, so you are near $45°\\text{N}$. Hand measurements are good to perhaps $\\pm 2$–$3°$; since $1°$ of latitude is about $111\\ \\text{km}$, that is $\\pm 200$–$300\\ \\text{km}$ — useful for a sanity check, not for a position.

### The Southern Cross construction

The long axis of Crux is about $6°$. The south celestial pole lies roughly $27°$ from Acrux, so the extension is about $27/6 \\approx 4.5$ lengths of the cross. Two independent lines (cross axis and Pointer bisector) cross at a point, which is why using both is far more precise than either alone.

### Why stars rise 4 minutes earlier each night

Earth turns once relative to the **stars** in about **23 h 56 min** (a *sidereal day*), but it must turn a little further to bring the **Sun** back to the same place (24 h), because Earth has moved along its orbit. The difference is about $4\\ \\text{min/day}$, so over 30 days the stars run $30 \\times 4 = 120\\ \\text{min} = 2\\ \\text{h}$ earlier.

### How close to east does Mintaka rise?

For a star of declination $\\delta$ (its "latitude" on the sky), the rising azimuth $A$ satisfies $\\cos A = \\sin\\delta / \\cos\\varphi$. Mintaka’s $\\delta \\approx -0.3°$. At $\\varphi = 50°$: $\\sin(-0.3°) \\approx -0.0052$, $\\cos 50° \\approx 0.643$, ratio $\\approx -0.008$, so $A \\approx 90.5°$ — within half a degree of due east. Atmospheric refraction and a hilly horizon add a little more error.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest, 60°N.** Polaris is high — about six fists up — and the Big Dipper circles it without setting. The canopy hides the horizon, so find Polaris through a gap, then walk to a clearing or lake shore to lay out a north line you can see.

**Desert, 25°S.** No Polaris. The Southern Cross is well up on autumn and winter evenings; the Pointers make it unmistakable. A crisp horizon lets you drop a vertical to the ground accurately and mark south with a row of stones for the morning.

**Tropical coast, 5°N.** Polaris is only about half a fist above the sea horizon and often lost in haze. Here Orion (on the equator line) and the stick-and-star method are more useful; the Southern Cross is also visible low in the south in the first half of the year.

**Mountains.** High ridges hide rising and setting stars. Use Polaris or the Cross, which do not depend on the horizon being flat — only on finding the point below them.

**Urban or rural edge.** Light pollution washes out Cassiopeia and the False Cross first; the Big Dipper, Orion and Crux usually survive. A full Moon brightens the sky and hides faint stars too.`,
    },
  ],
  mistakes: [
    'Looking for Polaris as "the brightest star in the sky" — it is only moderately bright; find it from the Big Dipper or Cassiopeia.',
    'Using the False Cross, which has no Pointers, instead of the compact, bright Southern Cross.',
    'Myth: "The North Star is visible from everywhere." It is below the horizon everywhere south of the equator.',
    'Treating the Moon’s horn line as precise. It is a rough guide with errors that can reach tens of degrees.',
    'Memorising stick-and-star left/right rules without the reason — stars drift westward; work out where west is from which way you face.',
    'Travelling off-trail at night because the sky shows a direction. Fix the line, then move in daylight.',
  ],
  exercises: [
    {
      id: 's2-l9-e1',
      title: 'Night-sky north (or south) from home',
      level: 2,
      safety: 'outdoor',
      minutes: 45,
      materials: ['Clear night', 'Two sticks or stones', 'Compass or phone compass (for checking only)', 'Notebook', 'Red or dim light'],
      safetyNote: 'Do this from a garden, a park near home or a known open spot on a road or path — with a partner if you are away from buildings. Do not walk off-trail in the dark.',
      steps: [
        'Let your eyes adapt for 15 minutes away from bright lights.',
        'Northern Hemisphere: find the Big Dipper, follow Merak → Dubhe about 5× to Polaris, and confirm with Cassiopeia. Southern Hemisphere: find Crux and the Pointers and construct the south celestial pole.',
        'Drop an imaginary vertical to the horizon and lay two sticks or stones on the ground pointing at that spot.',
        'Measure the pole’s height in fists and estimate your latitude; compare with the latitude on your phone.',
        'Next morning, check the stick line with a compass corrected for declination (or with the sun at solar noon).',
      ],
      success: ['Your line is within about 5° of true north/south.', 'Your latitude estimate is within about 3° of the true value.'],
      skill: 'night-sky-direction',
    },
    {
      id: 's2-l9-e2',
      title: 'Stick-and-star and Moon-horn check',
      level: 2,
      safety: 'outdoor',
      minutes: 40,
      materials: ['Two stakes or a fence post and a stick', 'Watch', 'Compass for checking'],
      safetyNote: 'Same location rules as above: close to home or on a known road or path.',
      steps: [
        'Pick a star about two fists up in any direction. Align it over the tops of two stakes; keep your eye at the same point.',
        'After 15–20 minutes, record whether it has risen, sunk, moved right or moved left, and deduce which way you face.',
        'Repeat facing a different direction.',
        'On a night with a crescent or gibbous Moon, extend the horn line to the horizon and compare it with a compass. Record the error.',
      ],
      success: ['You correctly identified the direction you faced in at least 3 of 4 trials.', 'You recorded the Moon-horn error and can say why it is only a rough guide.'],
      skill: 'night-sky-direction',
    },
  ],
  simulations: ['celestial'],
  quiz: [
    {
      id: 's2-l9-q7',
      kind: 'single',
      prompt: 'You are lost in hilly woodland at 22:00, uninjured, with warm clothing and a trip plan left with a friend. The sky is clear and you have found Polaris. What is the best use of it?',
      choices: [
        { id: 'a', text: 'Walk north now toward a road you believe lies that way, using Polaris to hold direction.', why: 'Night travel off-trail adds fall and navigation risk and moves you away from where searchers will start.' },
        { id: 'b', text: 'Mark a north line, stay comfortable and findable overnight, and decide in daylight.', why: 'Best — you gain a true reference at no risk, keep options open (reversible) and stay near your last known area.' },
        { id: 'c', text: 'Ignore it, since the stars are of little practical use once you are already lost.', why: 'A true direction is valuable for tomorrow’s decision.' },
        { id: 'd', text: 'Use it to measure your latitude so you can call in a precise position to rescuers.', why: 'Hand-measured latitude is only good to ±200–300 km — no use for a rescue position.' },
      ],
      answer: 'b',
      concepts: ['polaris', 'stay-or-move', 'reversibility', 'daylight'],
      explanation: 'The sky gives direction, not permission to travel. With a trip plan in place and a safe night possible, staying is reversible; walking in the dark is not.',
    },
    {
      id: 's2-l9-q2',
      kind: 'single',
      prompt: 'You are in the Southern Hemisphere and want true south. Which procedure is correct?',
      choices: [
        { id: 'a', text: 'Find the brightest star in the southern sky and drop a vertical from it to the horizon.', why: 'There is no bright pole star in the south; the brightest star could be anywhere.' },
        { id: 'b', text: 'Extend Crux’s long axis ~4.5×, cross it with the Pointers’ bisector, drop a vertical.', why: 'Correct — two independent lines locate the south celestial pole; the point below it on the horizon is south.' },
        { id: 'c', text: 'Use the False Cross instead, because it is larger and easier to pick out of the sky.', why: 'The False Cross does not point to the pole; its lack of Pointers is how you reject it.' },
        { id: 'd', text: 'Find Polaris low in the northern sky and simply face the opposite direction from it.', why: 'Polaris is below the horizon throughout the Southern Hemisphere.' },
      ],
      answer: 'b',
      concepts: ['southern-cross'],
      explanation: 'The south celestial pole is empty sky; you construct it from Crux’s long axis (extended about 4.5× its length) and the Pointers’ bisector, then drop to the horizon.',
    },
    {
      id: 's2-l9-q6',
      kind: 'single',
      prompt: 'Using the stick-and-star method in the Northern Hemisphere, the star you aligned has moved clearly **to the right** after 20 minutes. Which way are you roughly facing?',
      choices: [
        { id: 'a', text: 'North', why: 'Facing north, west is on your left, so stars above the pole drift left.' },
        { id: 'b', text: 'East', why: 'Facing east, stars rise.' },
        { id: 'c', text: 'South', why: 'Correct — stars drift westward, and when you face south, west is on your right.' },
        { id: 'd', text: 'West', why: 'Facing west, stars sink.' },
      ],
      answer: 'c',
      concepts: ['star-navigation'],
      explanation: 'Reason from the rule “stars drift west”: rising = east, sinking = west, moving right = facing south, moving left = facing north (for stars away from the pole).',
    },
    {
      id: 's2-l9-q5',
      kind: 'single',
      prompt: 'Which statement about the Moon as a direction aid is **not** correct?',
      diagram: 'moon-phase',
      choices: [
        { id: 'a', text: 'The lit side of the Moon faces the Sun, even after the Sun has set.', why: 'True — the Moon is lit by the Sun, so its bright limb points toward the Sun’s position below the horizon.' },
        { id: 'b', text: 'A full Moon is highest around local midnight, roughly due south at mid-northern latitudes.', why: 'True — the full Moon is opposite the Sun, so it culminates near solar midnight.' },
        { id: 'c', text: 'The horn line extended to the horizon gives south to within a degree or two.', why: 'Correct — this is the false one: it is a rough guide, and errors of tens of degrees are possible.' },
        { id: 'd', text: 'A first-quarter Moon is highest around sunset, about six hours after the Sun.', why: 'True — it is 90° east of the Sun, so it culminates about six hours after the Sun, near sunset.' },
      ],
      answer: 'c',
      concepts: ['moon-navigation'],
      explanation: 'The Moon’s geometry with the Sun gives useful but coarse direction; use it to confirm, not to navigate precisely.',
    },
    {
      id: 's2-l9-q1',
      kind: 'single',
      prompt: 'In the Northern Hemisphere you measure Polaris at three and a half fist-widths above a flat horizon (about 10° per fist at arm’s length). What is your approximate **latitude**?',
      diagram: 'polaris-latitude',
      choices: [
        { id: 'a', text: '35° N', why: 'Correct — 3.5 × 10° = 35°, and Polaris’s altitude ≈ your latitude.' },
        { id: 'b', text: '55° N', why: '90° − 35° — Polaris’s altitude is the latitude itself, not its complement.' },
        { id: 'c', text: '30° N', why: 'The half fist was dropped (3 × 10°).' },
        { id: 'd', text: '3.5° N', why: 'Forgot to convert fists to degrees — each fist is about 10°.' },
      ],
      answer: 'a',
      concepts: ['polaris'],
      explanation: '3.5 × 10° = 35°. The altitude of Polaris is approximately your latitude, so you are near **35°N** (hand-measure accuracy ±2–3°).',
    },
    {
      id: 's2-l9-q4',
      kind: 'single',
      prompt: 'Mintaka, the westernmost star of Orion’s belt, lies almost on the celestial equator. Which statement about its rising point is correct?',
      choices: [
        { id: 'a', text: 'It rises close to due east from both hemispheres', why: 'Correct — any star on the celestial equator rises due east and sets due west everywhere (within about 1°).' },
        { id: 'b', text: 'It rises due east only from the Northern Hemisphere', why: 'Stars on the celestial equator rise due east from both hemispheres.' },
        { id: 'c', text: 'It rises due east only from the Southern Hemisphere', why: 'Stars on the celestial equator rise due east from both hemispheres.' },
        { id: 'd', text: 'It rises due east only for observers near the equator', why: 'Latitude does not move the rising point of a celestial-equator star.' },
      ],
      answer: 'a',
      concepts: ['star-navigation'],
      explanation: 'Mintaka lies almost on the celestial equator, and any star on the celestial equator rises due east and sets due west from both hemispheres (within about 1°).',
    },
    {
      id: 's2-l9-q3',
      kind: 'single',
      prompt: 'On a flat horizon you see a bright star rise at azimuth 065° (true). At what azimuth will it **set**?',
      choices: [
        { id: 'a', text: '295°', why: 'Correct — rising and setting mirror about north–south: 360° − 65°.' },
        { id: 'b', text: '245°', why: '065° + 180° is a back bearing; stars do not set opposite where they rose.' },
        { id: 'c', text: '115°', why: '180° − 65° mirrors about east–west — that is another rising point.' },
        { id: 'd', text: '335°', why: 'Added 65° to due west instead of mirroring about the meridian.' },
      ],
      answer: 'a',
      concepts: ['star-navigation'],
      explanation: 'Rising and setting are symmetric about the north–south meridian: setting azimuth = 360° − 65° = **295°**. The bisector of 065° and 295° is 000°/180° — the true north–south line.',
    },
  ],
  scenario: {
    id: 's2-l9-sc',
    setup: 'Your 4WD breaks down at 21:00 on a remote outback track at about 25°S. The track runs roughly north–south; a cattle station lies about 20 km south along it. You left a trip plan with a friend and are due to check in tomorrow at 18:00. You have 12 L of water, the night is clear and mild, and tomorrow will reach 38 °C. The Southern Cross is high and bright.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Walk the 20 km tonight while it is cool, using the Southern Cross to hold south along the track.', why: 'Tempting, but it leaves your largest, most visible signal (the vehicle) and most of your water, and a night march with a heavy water load risks injury; you would also be halfway there at dawn, in rising heat.' },
      { id: 'b', text: 'Take a Southern Cross bearing and walk cross-country toward a highway you think lies south-east — shorter than the track.', why: 'Leaving a handrail for a guessed straight line at night is the worst combination: no catching feature, no visibility to searchers.' },
      { id: 'c', text: 'Stay with the vehicle, rest in shade, ration activity (not water), prep signals; stars only to check the track.', why: 'Best — your trip plan will trigger a search along a known route; the vehicle is a large, reflective signal and shelter; and staying is reversible.' },
      { id: 'd', text: 'Start walking south along the track at first light, before the day’s heat builds up.', why: 'Better than night travel, but you would still be on foot in 38 °C heat by mid-morning with water you had to carry, and away from the vehicle when searchers arrive.' },
    ],
    best: 'c',
    debrief: 'Stars are an excellent direction check, but the decision here turns on Stage 1 ideas: a **trip plan** means searchers will come along your route; the **vehicle** is shelter and a large signal; the **heat balance** of walking in 38 °C with a water load is brutal; and staying keeps your options open. Use the Southern Cross to confirm the track’s orientation and to mark south on the ground in case you later have to move — then stay.',
    concepts: ['southern-cross', 'stay-or-move', 'trip-plan', 'heat-balance', 'reversibility'],
  },
  summary: [
    'The celestial pole is above true north/south on the horizon, at a height equal to your latitude.',
    'North: Merak → Dubhe ×5 to Polaris (within ~0.7° of the pole); Cassiopeia on the far side.',
    'South: Crux long axis ×4.5 crossed with the Pointers’ bisector; reject the False Cross (no Pointers).',
    'Mintaka rises due east and sets due west everywhere; any star rises and sets symmetrically about the meridian.',
    'The Moon’s lit side faces the Sun; the horn line gives only a rough south (N) / north (S).',
    'Use the sky to fix a line on the ground; travel in daylight.',
  ],
  furtherReading: ['natural-navigator', 'nasa-moon-phases', 'meeus-algorithms'],
  references: ['meeus-algorithms', 'nasa-moon-phases', 'army-atp-3-50-21', 'afh-10-644', 'natural-navigator', 'kjellstrom'],
}
