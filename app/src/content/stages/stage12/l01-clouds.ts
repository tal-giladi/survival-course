import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's12-l1',
  stage: 12,
  order: 1,
  title: 'Clouds and weather patterns',
  level: 'intermediate',
  minutes: 55,
  prerequisites: ['s1-l4'],
  concepts: ['cloud-id', 'weather-fronts', 'pressure-trends', 'dew-point', 'wind-patterns'],
  objectives: [
    'Identify the **ten WMO cloud genera** and state what each usually predicts.',
    'Recognise the **warm-front and cold-front sequences** from clouds, wind and pressure together.',
    'Read a **pressure trend** (barometer or altimeter) and turn it into a go/no-go trigger.',
    'Use **temperature and dew point** to predict fog, dew or frost and estimate cloud-base height.',
    'Explain the large-scale and local wind patterns that shape a day outdoors.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A forecast is the best information you will have before a trip, but it covers a large area and it gets old. Once you are out there, **the sky, the wind and the barometer are your update.** You are not trying to beat a meteorologist. You are trying to notice early that the day is turning out differently from what the forecast said, while there is still time to change plans.

This stage is about **recognising hazards before they become emergencies**. Weather is where most of them start: lightning, flash floods, wind, cold rain, heat, and snow loading on avalanche slopes.

### Clouds are visible air movement

A cloud forms when rising air cools to its **dew point** and water vapour condenses. So the *shape* of a cloud tells you *how the air is moving*:

- **Layered (stratiform) clouds** come from broad, gentle lifting. Think fronts and widespread steady rain.
- **Heaped (cumuliform) clouds** come from local, buoyant updrafts, which means convection: showers and thunderstorms.
- **Height** tells you how far the process has developed. High ice-crystal cloud is often the first sign of a weather system still hundreds of kilometres away.`,
    },
    { type: 'diagram', id: 'cloud-altitudes', caption: 'The ten cloud genera of the WMO International Cloud Atlas, by typical height in mid-latitudes.' },
    {
      type: 'table',
      head: ['Genus', 'Looks like', 'Usually means'],
      rows: [
        ['**Cirrus (Ci)**', 'White wisps, hooks ("mares’ tails")', 'Fair if isolated and not spreading. Thickening from one side: a front may arrive in 12–24 h.'],
        ['**Cirrocumulus (Cc)**', 'Tiny grains or ripples, no shading', 'Upper-level moisture. A weak signal by itself, so watch the trend.'],
        ['**Cirrostratus (Cs)**', 'Milky veil; **halo** round sun or moon', 'Following cirrus: warm-front rain likely within about 6–24 h.'],
        ['**Altocumulus (Ac)**', 'Grey-white rounded patches with shading', 'Unsettled. **Turreted (castellanus)** on a warm humid morning means thunderstorms later.'],
        ['**Altostratus (As)**', 'Grey sheet; sun as through frosted glass', 'Rain or snow usually within a few hours as it lowers and thickens.'],
        ['**Nimbostratus (Ns)**', 'Dark, formless, low; continuous rain', 'Hours of steady precipitation. Streams rise and visibility is poor.'],
        ['**Stratocumulus (Sc)**', 'Low lumpy rolls with gaps', 'Mostly dry; common behind a cold front.'],
        ['**Stratus (St)**', 'Uniform low grey layer; hides hilltops', 'Drizzle, poor visibility; often lifts later.'],
        ['**Cumulus (Cu)**', 'Heaps with flat bases', 'Small and flat: fair. **Growing tall before noon**: showers or storms possible.'],
        ['**Cumulonimbus (Cb)**', 'Towering, anvil top, dark base', 'Thunderstorm: lightning, gusts, hail, heavy rain, flash flood.'],
      ],
      caption: 'Heuristics, not rules: a single cloud is weak evidence. Trends over hours, plus wind and pressure, are strong evidence.',
    },
    { type: 'sim', id: 'cloud-id', caption: 'Practise on drawn skies that change over time: name the cloud, then forecast the next hours.' },
    {
      type: 'md',
      md: `### Weather patterns: highs, lows and fronts

- **High pressure (anticyclone):** sinking air, few clouds, light winds. You get settled weather, clear cold nights, frost and valley fog, and in summer heat and possibly afternoon cumulus.
- **Low pressure (depression, cyclone):** rising air, cloud, rain and wind. In the mid-latitudes, lows carry **fronts**, the boundaries between air masses.

**Warm front.** Warm air slides slowly up over cold air along a shallow slope. The clouds arrive in order, highest first: **Ci → Cs → As → Ns**, spread over 12–24 hours. The pressure falls steadily and the rain is steady.

**Cold front.** Cold air wedges under warm air on a steep slope. The weather comes in a narrow band of **Cb**, with gusts, heavy showers and sometimes thunder. After it passes the wind shifts, the temperature drops, pressure rises and the sky clears to broken Sc or Cu.

**Occluded front.** A cold front catches up with a warm front. Expect a mix of the two sequences.`,
    },
    { type: 'diagram', id: 'front-cross-section', caption: 'Warm fronts give long warning and long rain; cold fronts give short warning and violent, short weather.' },
    {
      type: 'md',
      md: `### Pressure trends: your best single instrument

A barometer, or the barometric altimeter in a watch or phone, measures the weight of air above you. What matters is **the trend**, not the number:

| 3-hour change | Typical meaning |
|---|---|
| Steady or rising | Settled or improving |
| Falling ~1–3 hPa | Change coming, often within a day |
| Falling ~3–6 hPa | A significant system arriving; wind and rain likely |
| Falling > 6 hPa | Strong system; gales likely. Treat it as a no-go trigger for exposed terrain |

**Altimeter trick.** Near sea level, 1 hPa is about **8 m** of height. If your watch says camp has "climbed" 40 m overnight while you slept, pressure has fallen by about 5 hPa. That is a warning.`,
    },
    { type: 'diagram', id: 'pressure-tendency', caption: 'Three barometer traces. Decide your trigger in advance (e.g., "a 3 hPa fall in 3 h means we don’t go onto the ridge").' },
    {
      type: 'md',
      md: `### Humidity and dew point

**Relative humidity** (RH) is how close the air is to saturation *at its current temperature*. It changes whenever the temperature changes, so on its own it can mislead. The **dew point** is the temperature at which the air would become saturated. It measures the actual moisture in the air.

- **Temperature − dew point = the spread.** A small spread means saturation is close: fog, dew, frost, low cloud, condensation inside your tent.
- On a clear, calm evening the air cools. If the forecast low is at or below the dew point, **expect fog or dew by morning**, and frost if that point is below 0 °C.
- A high dew point (above about 18–20 °C) means humid, sticky air. Sweat evaporates poorly, which matters for heat illness, and there is plenty of fuel for thunderstorms.`,
    },
    { type: 'diagram', id: 'dew-point-cloud-base', caption: 'Rising air cools faster than its dew point falls; where they meet, cloud forms.' },
    {
      type: 'md',
      md: `### Wind patterns

- **Around lows and highs.** In the **Northern Hemisphere**, wind circulates anticlockwise around lows and clockwise around highs. The Southern Hemisphere is the reverse. **Buys Ballot’s law:** in the Northern Hemisphere, stand with your back to the wind and low pressure is on your left, slightly ahead (on your right in the Southern Hemisphere).
- **Backing and veering.** A wind that shifts anticlockwise (e.g., W → SW → S) is *backing*; clockwise is *veering*. In the Northern Hemisphere a backing, strengthening wind with falling pressure often means a front is approaching. A sharp veer with a temperature drop marks a cold front passing.
- **Local winds.** *Sea breezes* blow onshore on sunny afternoons and *land breezes* offshore at night. *Valley (anabatic) winds* flow upslope by day and *mountain (katabatic) winds* flow downslope at night, pooling cold air in hollows. Wind also speeds up over ridges and through gaps, and is typically much stronger on summits than in the valley.`,
    },
  ],
  whyItMatters: 'Most weather emergencies happen to people who had the information but did not act on it: a thickening sky, a falling barometer, towers of cumulus by 10:00. Reading the sky turns a forecast into a live decision tool and gives you hours of warning instead of minutes.',
  science: [
    {
      type: 'md',
      md: `### Why rising air makes cloud

Air that rises expands (there is less pressure above it) and cools. Unsaturated air cools at the **dry adiabatic lapse rate**, about **9.8 °C per km**. The dew point of that rising air falls much more slowly, about **2 °C per km**. The two close in on each other at roughly 8 °C per km, so they meet at a height of

$$
h_{base} \\approx 125\\ \\text{m} \\times (T - T_d)
$$

In words: every degree of spread between temperature and dew point at the ground adds about 125 m to the cloud base. **Example:** $T = 26\\ °\\text{C}$, $T_d = 14\\ °\\text{C}$ gives a spread of $12\\ °\\text{C}$ and $h_{base} \\approx 1500\\ \\text{m}$. If your route crosses a 1,800 m ridge, you will be in cloud there, so plan your navigation for it.

Inside the cloud, condensing water releases latent heat, so saturated air cools more slowly, around **5–7 °C per km**. That extra warmth is what keeps convective clouds buoyant (Lesson 2).

### Pressure and height

Near sea level, pressure falls by about **1 hPa for every 8 m** of height. That is why a barometric altimeter can mistake a weather change for a change in height, and why you can read that "error" as a weather signal. If you are not moving and the altimeter rises 24 m, pressure has fallen about 3 hPa.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (Alps, Rockies, Andes).** Morning cumulus that are already towering by 10:00, with altocumulus castellanus at dawn, are a classic afternoon-thunderstorm pattern. Plan to be off summits and ridges by early afternoon.

**Temperate coast (UK, Pacific Northwest, Patagonia).** A sky that thickens from cirrus to altostratus, with a barometer falling 1 hPa per hour and a backing wind, is a warm front. Expect rain and rising wind within hours. It is not a day for an exposed coastal scramble.

**Desert.** Dew points are often very low, so the spread is huge: cloud bases are high and nights cool fast. In monsoon season a sudden jump in dew point is the sign that storms, and flash floods, are possible.

**Arctic/subarctic.** Under a high-pressure dome, clear calm nights produce extreme cold and ice fog near open water or settlements. A thickening cirrostratus veil with a halo can bring snow and wind within a day.

**Tropical.** Fronts are rare. Weather is driven by daily convection: clear mornings, towering cumulus by midday, heavy showers in the afternoon. A falling barometer in the cyclone season is a serious signal.`,
    },
  ],
  mistakes: [
    'Judging from a single cloud instead of the **trend** over hours, together with wind and pressure.',
    'Myth: "Red sky at night, shepherd’s delight" is a reliable forecast. It has a physical basis in mid-latitude westerlies, but it is weak evidence and fails often. Use it alongside pressure and cloud trend, never alone.',
    'Treating relative humidity as the moisture content. Use the **dew point** and the temperature–dew point spread.',
    'Ignoring the altimeter drifting overnight. That drift *is* the barometer telling you the weather is changing.',
    'Assuming valley weather applies on the summit. Wind, cloud and temperature can be very different 1,000 m higher.',
  ],
  exercises: [
    {
      id: 's12-l1-e1',
      title: 'Three-day sky and pressure log',
      level: 3,
      safety: 'home',
      minutes: 20,
      materials: ['Notebook or phone', 'Barometer app, weather station or barometric watch (optional)', 'Window or outdoor space'],
      steps: [
        'Three times a day for three days, record: cloud genera (use the table), estimated cover in eighths, wind direction and strength, and pressure if you can read it.',
        'Each evening, write a one-line forecast for the next 12 hours based only on your log.',
        'Compare with what actually happened and with the official forecast. Note which clue was most useful.',
      ],
      success: ['You named the cloud genus correctly in most observations (check against the Met Office or WMO Cloud Atlas photos).', 'At least one of your 12-hour forecasts used a pressure or cloud trend correctly.'],
      skill: 'weather-read',
    },
    {
      id: 's12-l1-e2',
      title: 'Cloud ID simulation',
      level: 2,
      safety: 'virtual-only',
      minutes: 15,
      steps: ['Run the Cloud ID simulation until you score at least 80 %.', 'For each sky you got wrong, write down which clue (trend, wind, pressure, dew point) you missed.'],
      success: ['Score ≥ 80 %.', 'You can explain the warm-front sequence and the "towering cumulus before noon" warning without notes.'],
    },
  ],
  simulations: ['cloud-id'],
  quiz: [
    {
      id: 's12-l1-q1',
      kind: 'order',
      prompt: 'Put the classic **warm-front** cloud sequence in the order an observer sees it.',
      items: [
        { id: 'ns', text: 'Nimbostratus with steady rain' },
        { id: 'ci', text: 'Cirrus spreading from one direction' },
        { id: 'as', text: 'Altostratus, sun as through frosted glass' },
        { id: 'cs', text: 'Cirrostratus with a halo' },
      ],
      answer: ['ci', 'cs', 'as', 'ns'],
      concepts: ['weather-fronts', 'cloud-id'],
      explanation: 'The frontal surface slopes gently, so the highest cloud is furthest ahead: Ci → Cs → As → Ns, typically over 12–24 hours.',
    },
    {
      id: 's12-l1-q2',
      kind: 'numeric',
      prompt: 'At the trailhead the temperature is 22 °C and the dew point 10 °C. Estimate the height of the cumulus cloud base above the trailhead, in metres.',
      unit: 'm',
      answer: 1500,
      tolerance: 150,
      concepts: ['dew-point'],
      explanation: '$125\\ \\text{m} \\times (22 - 10) = 1500\\ \\text{m}$. A route that climbs higher than that will be in cloud.',
    },
    {
      id: 's12-l1-q3',
      kind: 'single',
      prompt: 'You are camped at 1,200 m. Your watch altimeter read 1,200 m at bedtime and 1,248 m at dawn; you have not moved. What does this most likely mean?',
      choices: [
        { id: 'a', text: 'Pressure has fallen about 6 hPa overnight — a significant weather system is approaching.', why: 'Correct: 48 m ÷ 8 m/hPa ≈ 6 hPa, a large fall.' },
        { id: 'b', text: 'Pressure has risen — fine weather ahead.', why: 'A rising pressure would make the altimeter read *lower*.' },
        { id: 'c', text: 'The watch battery is failing.', why: 'Possible but unlikely; the drift has a clear physical meaning.' },
        { id: 'd', text: 'The ground has risen through frost heave.', why: 'Not by 48 m.' },
      ],
      answer: 'a',
      concepts: ['pressure-trends'],
      explanation: 'An altimeter is a barometer. An apparent climb while stationary is a pressure fall. About 6 hPa in 8–10 hours is a strong signal of wind and rain.',
    },
    {
      id: 's12-l1-q4',
      kind: 'multi',
      prompt: 'Which observations **together** point to a cold front having just passed (Northern Hemisphere)?',
      choices: [
        { id: 'a', text: 'Wind veered from SW to NW', why: 'Yes: a veering wind marks the front passing.' },
        { id: 'b', text: 'Temperature dropped several degrees in an hour', why: 'Yes: colder air behind the front.' },
        { id: 'c', text: 'Pressure rising after a low point', why: 'Yes: the trough has passed.' },
        { id: 'd', text: 'Cirrostratus halo thickening to altostratus', why: 'No: that is the warm-front approach.' },
        { id: 'e', text: 'Broken stratocumulus and clearing sky', why: 'Yes: typical behind a cold front.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['weather-fronts', 'wind-patterns'],
      explanation: 'Behind a cold front: veer, temperature drop, pressure rise, clearing to Sc/Cu. It is often gusty and cold, so wind chill now matters more than rain.',
    },
    {
      id: 's12-l1-q5',
      kind: 'truefalse',
      prompt: 'Relative humidity of 100 % on a cold night and 60 % on a hot afternoon means the afternoon air contains less water vapour.',
      answer: false,
      concepts: ['dew-point'],
      explanation: 'RH depends on temperature. Warm air can hold far more vapour, so 60 % RH at 30 °C (dew point ≈ 21 °C) contains more water than 100 % RH at 5 °C. Dew point measures actual moisture.',
    },
    {
      id: 's12-l1-q6',
      kind: 'single',
      prompt: 'Summer, 09:30, mountains. Cumulus that were small at 08:00 are now taller than they are wide, and you saw turreted altocumulus at dawn. Your route reaches an exposed summit at 13:00. What is the best decision?',
      choices: [
        { id: 'a', text: 'Continue as planned; the forecast said "isolated storms".', why: '"Isolated" does not mean "not over you", and the sky is updating the forecast.' },
        { id: 'b', text: 'Move the turnaround earlier (e.g., off the summit ridge by 11:30) or choose a lower objective, and keep watching.', why: 'Best: early convective growth plus castellanus is a strong afternoon-storm signal. Change the plan while it is cheap.' },
        { id: 'c', text: 'Wait at the col until 13:00 to see how it develops.', why: 'Waiting on exposed ground in the storm window is the worst of both.' },
        { id: 'd', text: 'Run to the summit faster.', why: 'Rushing adds fatigue and error risk, and you are still exposed during the storm window.' },
      ],
      answer: 'b',
      concepts: ['cloud-id', 'convection-storms', 'trip-plan'],
      explanation: 'Clouds are a live update to the forecast. Adjust your turnaround time (Stage 1) before the storm, not during it.',
    },
  ],
  scenario: {
    id: 's12-l1-sc',
    setup: 'Day 2 of a coastal backpacking trip. The forecast two days ago was "mostly dry". Since dawn you have watched cirrus thicken into a milky veil with a halo round the sun. The wind has backed from W to S and freshened. Your watch shows pressure down 4 hPa in 3 hours. Today’s plan includes a 3-hour exposed headland section with no escape routes and a tidal crossing.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Go as planned; the official forecast said dry.', why: 'The forecast is two days old and your observations contradict it strongly.' },
      { id: 'b', text: 'Treat it as an approaching front: skip the exposed headland today, take the inland alternative or stay at a sheltered camp, and get an updated forecast if you have signal.', why: 'Best: warm-front sequence plus a significant pressure fall is a clear trigger. You are acting hours before the rain and wind arrive.' },
      { id: 'c', text: 'Start the headland section immediately to "beat the weather".', why: 'Racing a front onto committing terrain with no escape is a classic accident pattern.' },
      { id: 'd', text: 'Wait until it starts raining, then decide.', why: 'By then you have lost your warning time.' },
    ],
    best: 'b',
    debrief: 'Cirrus → cirrostratus halo, a backing, freshening wind, and 4 hPa in 3 hours all agree: a front will arrive within hours. The value of reading the sky is acting *before* the hazard: re-route while alternatives still exist.',
    concepts: ['weather-fronts', 'pressure-trends', 'go-no-go'],
  },
  summary: [
    'Cloud shape shows how air is moving: layers mean broad lifting (fronts); heaps mean convection (showers, storms).',
    'Warm front: Ci → Cs → As → Ns over 12–24 h. Cold front: a narrow band of Cb, then a veering wind, colder air and clearing.',
    'The pressure trend is the best single instrument. A fall of 3 hPa or more in 3 h is a trigger; your altimeter drifting upward is the same signal.',
    'Dew point measures moisture. The temperature–dew point spread predicts fog and dew; cloud base ≈ 125 m per °C of spread.',
    'Judge the trend of several clues together, never a single cloud.',
  ],
  furtherReading: ['metoffice-clouds', 'wmo-cloud-atlas', 'freedom-hills'],
  references: ['metoffice-clouds', 'wmo-cloud-atlas', 'freedom-hills', 'mt-hml'],
}
