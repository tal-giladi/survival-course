import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's12-l4',
  stage: 12,
  order: 4,
  title: 'Heat, cold, wind, snow and ice',
  level: 'intermediate',
  minutes: 55,
  prerequisites: ['s8-l2'],
  concepts: ['forecast-reading', 'wind-chill-heat-index', 'wind-hazard', 'ice-hazard'],
  objectives: [
    'Interpret a forecast for **your** terrain: lapse rate, freezing level, summit wind, gusts, probability of precipitation, watches and warnings.',
    'Calculate **wind chill** and read the **heat index**, and say what each does and does not mean.',
    'Recognise **strong-wind** hazards (balance, falling trees, wind loading) and set wind limits.',
    'Identify **snow and ice** hazards: whiteout, cornices, tree wells, freezing rain, verglas, and thin lake and river ice.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Heat, cold and wind are rarely sudden. They are predictable, forecast days ahead, and they injure people by adding up over hours. The hazard is usually a **mismatch** between the forecast for a town and the conditions where you will actually be: a summit, a desert basin, an exposed lake.

### Turning a forecast into *your* forecast

1. **Adjust for height.** Air cools on average about **6.5 °C per 1000 m** of height (the environmental lapse rate; it varies from about 4 to 9.8 °C/km). A valley forecast of 12 °C means about −1 °C on a summit 2,000 m higher.
2. **Find the freezing level.** Mountain forecasts often give the height of 0 °C. Above it, rain becomes snow, wet rock becomes **verglas** (thin ice), and wet clothing freezes.
3. **Read the wind at height, and the gusts.** Summit and ridge winds are often double those in the valley. Gusts are commonly 1.5 times the mean speed or more, and it is the gusts that knock you over.
4. **Understand "chance of rain".** A **40 % probability of precipitation** means a 40 % chance that measurable rain falls *at any given point* in the forecast area during the period. It does not mean rain for 40 % of the day.
5. **Know watch vs warning.** A *watch* means conditions are favourable for the hazard; a *warning* means it is happening or imminent. Terms vary by country, so learn your national service’s scale.
6. **Look at the night as well as the day.** Overnight lows drive hypothermia risk. In heatwaves, warm nights stop the body recovering.
7. **Watch for inversions.** On clear, calm nights cold air drains downhill and pools in valleys and hollows. The valley floor can be 5–10 °C colder than a bench 50–100 m above it. Camp slightly above the valley floor.`,
    },
    {
      type: 'md',
      md: `### Wind chill: what it is and isn’t

**Wind chill** expresses how fast **exposed skin** loses heat in wind, as the still-air temperature that would feel the same. The 2001 index used by the US and Canada is based on a model of heat loss from the face.

- It **does not** make water, cars or anything else colder than the air temperature. A radiator at −5 °C air will not freeze faster than −5 °C water would.
- It **does** tell you how fast frostbite can develop on exposed skin and how much a windproof layer is worth. Around a wind chill of **−28 °C**, exposed skin can freeze in about 30 minutes or less, and the time falls quickly at colder values.`,
    },
    { type: 'diagram', id: 'wind-chill-curve', caption: 'Wind chill (2001 index) versus wind speed. Most of the effect comes in the first 20–30 km/h of wind.' },
    {
      type: 'md',
      md: `### Heat index: humidity matters

The **heat index** combines air temperature and humidity into an "apparent temperature", because humid air slows sweat evaporation, which is your main cooling route in heat (Stage 1 and Stage 8). The NWS points out that heat index values were devised for **shade and light wind**; **full sun can add up to about 8 °C (15 °F)**.

- Example: **32 °C at 60 % RH** gives a heat index of about **38 °C**.
- A related measure, the **wet-bulb globe temperature (WBGT)**, adds sun and wind. It is used by militaries and sports bodies for work/rest limits.

### Strong winds

| Beaufort | Speed (km/h) | On foot |
|---|---|---|
| 6 — strong breeze | 39–49 | Umbrellas useless; tiring into the wind |
| 7 — near gale | 50–61 | Walking into the wind difficult |
| 8 — gale | 62–74 | Walking impeded; balance problems on ridges |
| 9+ — strong gale | 75+ | Gusts can knock people over; exposed ridges become dangerous |

**Hazards:** loss of balance on exposed edges; **falling trees and dead branches** ("widowmakers"), so never camp under dead trees or limbs in wind; flying debris; wind chill; tents failing at night; and snow **wind-loading** onto lee slopes, which creates avalanche danger (Lesson 6). Set a wind limit for exposed terrain *before* the trip, for example "gusts over 70 km/h: no ridge".

### Extreme heat and extreme cold

- **Heat:** move at dawn and dusk, rest in shade at midday, and budget water (Stage 4) and electrolytes. Heat illness is preventable and escalates fast (Stage 8, WMS heat guidelines). Hot, still desert basins and humid tropical lowlands are the worst.
- **Cold:** the danger comes from time, wind and wetness together. Plan for the overnight low at your camp height, with wind and possible precipitation, not for the daytime high in town.`,
    },
    {
      type: 'md',
      md: `### Snow hazards

- **Whiteout and flat light:** the horizon, slope and drop-offs vanish. Navigation becomes a Stage 2 skill test, and walking off a cornice or into a gully becomes possible.
- **Cornices:** overhanging snow lips on ridge crests, on the lee side. They can break **well back** from the visible edge, so stay far back from the lip and never stand on it to look over.
- **Tree wells and deep snow:** loose snow around tree trunks can trap a person who falls in head-first (snow-immersion suffocation). Keep a partner in sight.
- **Snow bridges** over streams and crevasses weaken in the afternoon sun.
- **Snow blindness:** UV reflected from snow burns the cornea within hours. Wear sunglasses or goggles, even when it is overcast.

### Ice hazards

- **Freezing rain:** rain falling through a warm layer aloft onto ground and objects below 0 °C. It glazes everything, including trees (which snap), roads and rock.
- **Black ice and verglas:** thin, transparent ice on roads and rock. It is almost invisible, and a routine scramble becomes a slip-and-fall hazard.
- **Hard snow and névé:** a slip can become an uncontrollable slide into rocks. Ice axe and crampon skills are **formal-training** skills.
- **Lake and river ice:** thickness varies with currents, inlets, outlets, springs, snow cover and pressure ridges. Agencies publish minimums for one person on foot of roughly **10–15 cm of new, clear ice**, depending on the agency. White or snow ice is weaker, and river ice is unreliable. Without local knowledge and training, **stay off ice**. Falling through ice is a cold-water immersion emergency (Stage 8).`,
    },
  ],
  whyItMatters: 'Heat, cold and wind cause many more outdoor emergencies than dramatic hazards like avalanches, and they are forecast days ahead. The skill is translating a general forecast to the place, height and time you will actually be, and deciding in advance what numbers turn a go into a no-go.',
  science: [
    {
      type: 'md',
      md: `### Wind chill formula (2001, metric)

The index estimates the air temperature that, with light wind, would cool exposed skin at the same rate:

$$
T_{wc} = 13.12 + 0.6215\\,T - 11.37\\,V^{0.16} + 0.3965\\,T\\,V^{0.16}
$$

In words: start from the air temperature $T$ (°C), then subtract a cooling term that grows with wind speed $V$ (km/h, at 10 m height) raised to a small power. That small power is why the first 20–30 km/h matter most.

**Example:** $T = -10$ °C, $V = 30$ km/h. $V^{0.16} = 30^{0.16} \\approx 1.72$.

$$
T_{wc} = 13.12 - 6.22 - 19.59 - 6.83 \\approx -19.5\\ °\\text{C}
$$

### Summit forecast from a valley forecast

Valley (1,000 m) forecast: 12 °C, wind 20 km/h. Summit at 3,000 m: $12 - 6.5 \\times 2 = -1$ °C. Summit wind 50 km/h (it is often 2–3 times the valley wind). Then $V^{0.16} = 50^{0.16} \\approx 1.87$ and

$$
T_{wc} = 13.12 - 0.62 - 21.26 - 0.74 \\approx -9.5\\ °\\text{C}
$$

So a "12 °C" day means planning for about −10 °C wind chill on top, and wet-and-wind hypothermia risk (Stage 1) if it rains.

### Probability of precipitation

Forecasters define $\\text{PoP} = C \\times A$: the **confidence** that precipitation will occur somewhere in the area, times the **fraction of the area** expected to get it. 80 % confidence over 50 % of the area gives PoP = 40 %. From where you stand, that is a 40 % chance of getting wet.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (Scotland, Rockies).** The valley forecast says 8 °C with a breeze. The mountain forecast gives a freezing level of 900 m, summit gusts of 90 km/h and wind chill of −15 °C. Walkers dressed for the valley forecast suffer on the plateau. Use the mountain forecast.

**Desert (Sahara, Sonoran, Australian interior).** 44 °C by day, 12 °C at night. Heat-index advice applies in the day, cold precautions at night. Move early, lie up in shade at midday.

**Tropical (SE Asia, Amazon).** 32 °C with 75 % RH gives a heat index in the mid-40s °C. Sweat drips rather than evaporates, so work-rest cycles and fluids matter more than the thermometer suggests.

**Arctic/subarctic.** −25 °C with 30 km/h wind gives a wind chill near −39 °C: exposed skin can freeze in roughly 10–30 minutes, and faster if it gets colder. Cover the face, check each other’s cheeks and noses.

**Forest in a windstorm.** Dead standing trees and hung-up branches come down in gusts. Choose a camp among sound trees or in the open, away from anything that could fall on you.

**Urban (ice storm).** Freezing rain snaps branches and power lines and turns footpaths into skating rinks. The safest trip is often the one postponed.`,
    },
  ],
  mistakes: [
    'Using the town or valley forecast for a summit or ridge.',
    'Myth: "Wind chill can freeze water below 0 °C when the air is above 0 °C." Wind chill only affects heat loss from warm objects like skin.',
    'Ignoring gusts and planning around the mean wind speed.',
    'Reading "40 % chance of rain" as "rain for 40 % of the day".',
    'Camping on the valley floor on a clear, calm winter night, the coldest spot in the landscape.',
    'Walking onto lake or river ice without knowing its thickness and how it formed.',
    'Standing on or near a cornice edge to look over.',
  ],
  exercises: [
    {
      id: 's12-l4-e1',
      title: 'Forecast interpretation drill',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['A national weather service forecast and, if available, a mountain or marine forecast for the same area'],
      steps: [
        'Pick a real objective with a height difference of at least 500 m from the nearest forecast point.',
        'Adjust temperature by 6.5 °C/km, find the freezing level, and estimate summit wind and gusts.',
        'Calculate wind chill at the summit (use the formula or the NWS chart) and, for warm destinations, the heat index.',
        'Write a one-paragraph "my forecast", stating the clothing and timing it demands.',
      ],
      success: ['Your summit temperature and wind chill are calculated correctly.', 'Your plan changes at least one thing (start time, layers, route) because of the adjusted forecast.'],
      skill: 'weather-read',
    },
    {
      id: 's12-l4-e2',
      title: 'Personal go/no-go card',
      level: 2,
      safety: 'home',
      minutes: 25,
      steps: [
        'Write numeric limits for your usual activities: maximum gusts on ridges, minimum wind chill, maximum heat index, freezing-level rules, thunderstorm rules, river rules.',
        'Add the observation triggers from this stage (pressure fall, towering cumulus, rising water).',
        'Laminate it or keep it in your phone’s offline notes, and use it on your next trip.',
      ],
      success: ['Every limit is a number or an observable event, not "if it looks bad".', 'Your partner knows and agrees with the card.'],
      skill: 'hazard-go-no-go',
    },
  ],
  quiz: [
    {
      id: 's12-l4-q1',
      kind: 'numeric',
      prompt: 'Air −10 °C, wind 30 km/h. Using the 2001 formula ($V^{0.16} \\approx 1.72$), what is the wind chill in °C?',
      unit: '°C',
      answer: -19.5,
      tolerance: 1,
      concepts: ['wind-chill-heat-index'],
      explanation: '$13.12 + 0.6215(-10) - 11.37(1.72) + 0.3965(-10)(1.72) \\approx -19.5$ °C.',
    },
    {
      id: 's12-l4-q2',
      kind: 'numeric',
      prompt: 'Valley at 800 m: 15 °C. Using 6.5 °C per 1000 m, what is the expected temperature on a 2,800 m summit?',
      unit: '°C',
      answer: 2,
      tolerance: 0.5,
      concepts: ['forecast-reading'],
      explanation: '2,000 m higher × 6.5 °C/km = 13 °C colder, so **2 °C**, before wind chill.',
    },
    {
      id: 's12-l4-q3',
      kind: 'single',
      prompt: 'The forecast says "40 % chance of rain this afternoon". What does it mean?',
      choices: [
        { id: 'a', text: 'A 40 % chance that measurable rain falls at any given point in the area this afternoon.', why: 'Correct: PoP = confidence × area fraction.' },
        { id: 'b', text: 'It will rain for 40 % of the afternoon.', why: 'A common misreading.' },
        { id: 'c', text: '40 % of the area will definitely get rain.', why: 'Only if forecasters are certain. PoP combines confidence and area.' },
        { id: 'd', text: 'Light rain (40 % intensity).', why: 'PoP says nothing about intensity.' },
      ],
      answer: 'a',
      concepts: ['forecast-reading'],
      explanation: 'PoP is a probability of getting wet at your point. Plan the gear for it and the route for the worst case.',
    },
    {
      id: 's12-l4-q4',
      kind: 'truefalse',
      prompt: 'A water bottle left out at +2 °C air temperature with a wind chill of −5 °C will freeze.',
      answer: false,
      concepts: ['wind-chill-heat-index'],
      explanation: 'Wind speeds up cooling toward air temperature but cannot cool an object below it. The bottle will not freeze at +2 °C air (ignoring radiation to a clear sky, which can cause frost on surfaces).',
    },
    {
      id: 's12-l4-q5',
      kind: 'multi',
      prompt: 'Which are good choices for a **winter camp on a clear, calm night**?',
      choices: [
        { id: 'a', text: 'A bench 50 m above the valley floor', why: 'Yes: avoids the cold-air pool.' },
        { id: 'b', text: 'The lowest point of the valley, by the frozen lake', why: 'No: the coldest place, plus ice fog and ice hazards.' },
        { id: 'c', text: 'Among sound, living trees, away from dead limbs', why: 'Yes: shelter without widowmakers.' },
        { id: 'd', text: 'Directly beneath a snow-loaded slope', why: 'No: avalanche runout (Lesson 6).' },
        { id: 'e', text: 'On the crest of a corniced ridge for the view', why: 'No: wind and cornice collapse.' },
      ],
      answer: ['a', 'c'],
      concepts: ['forecast-reading', 'site-selection', 'ice-hazard'],
      explanation: 'Cold air drains downhill on calm nights. Combine Stage 1 site selection with an awareness of overhead and slope hazards.',
    },
    {
      id: 's12-l4-q6',
      kind: 'single',
      prompt: 'Forecast: summit gusts to 95 km/h, mean 55 km/h. Your route follows a narrow exposed ridge for 2 hours. What is the best decision?',
      choices: [
        { id: 'a', text: 'Go: the mean wind is only a near gale.', why: 'The gusts, not the mean, knock people off balance on ridges.' },
        { id: 'b', text: 'Choose a sheltered lower route or another day.', why: 'Best: 95 km/h gusts on an exposed ridge are a no-go for most parties.' },
        { id: 'c', text: 'Go, and crawl in the gusts.', why: 'Hours of crawling on exposed ground is exhausting and cold, and still risky.' },
        { id: 'd', text: 'Go early before the wind picks up.', why: 'Only reasonable if the forecast shows a real calm window with margin, which is not stated here.' },
      ],
      answer: 'b',
      concepts: ['wind-hazard', 'go-no-go'],
      explanation: 'Set wind limits by gust speed and exposure. Strong gales on narrow ridges are among the clearest no-go triggers.',
    },
  ],
  scenario: {
    id: 's12-l4-sc',
    setup: 'Late autumn. The town forecast for today: 10 °C, showers, breeze. The mountain forecast you skimmed: freezing level 1,200 m, summit winds 60 km/h gusting 85, wind chill −12 °C. Your route crosses a 1,400 m plateau for 3 hours. Your friend is in jeans and a cotton hoodie with a thin rain jacket.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Go: 10 °C is mild.', why: 'That is the valley forecast. The plateau will be around freezing, wet and windy: classic hypothermia weather.' },
      { id: 'b', text: 'Switch to a sheltered low-level route below the freezing level, and fix your friend’s clothing (synthetic or wool layers, proper shell, hat, gloves) before any hill day.', why: 'Best: it matches the objective to the real conditions and to the weakest link in the group.' },
      { id: 'c', text: 'Go, but turn back if your friend starts shivering.', why: 'Shivering on a windy plateau far from shelter is already a problem, and judgment declines with cold.' },
      { id: 'd', text: 'Go faster to spend less time exposed.', why: 'Sweating, then stopping in the wind, makes things worse (Stage 1 heat balance).' },
    ],
    best: 'b',
    debrief: 'Translate the forecast to your height and exposure: near-freezing rain with 85 km/h gusts on a plateau is the classic "0–10 °C, wet and windy" hypothermia setting. Cotton loses most of its insulation when wet. The group’s weakest link sets the go/no-go.',
    concepts: ['forecast-reading', 'wet-wind', 'heat-balance'],
  },
  summary: [
    'Adjust forecasts for height (~6.5 °C/km), freezing level, summit wind and gusts. Plan for the night as well as the day.',
    'Wind chill = heat loss from exposed skin (frostbite risk), not the temperature of objects. Heat index = heat stress in shade; sun adds up to ~8 °C.',
    'Set wind limits by gusts and exposure. Avoid camping under dead trees in wind.',
    'Snow: whiteout, cornices (stay well back), tree wells, snow blindness. Ice: freezing rain, verglas, hard snow; stay off lake and river ice without local knowledge.',
    'Write a personal go/no-go card with numbers and observable triggers.',
  ],
  furtherReading: ['nws-windchill', 'nws-heat-index', 'wms-frostbite-2024'],
  references: ['nws-windchill', 'nws-heat', 'nws-heat-index', 'wms-heat-2024', 'wms-frostbite-2024', 'usariem-cold', 'freedom-hills'],
}
