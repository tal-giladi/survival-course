import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's12-l5',
  stage: 12,
  order: 5,
  title: 'Wildfire',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s12-l1'],
  concepts: ['fire-behavior', 'escape-routes', 'go-no-go', 'fire-safety'],
  objectives: [
    'Explain the **fire behaviour triangle** of fuel, weather and topography and predict where a fire will run fastest.',
    'Explain why fires **run uphill**, through **chimneys and saddles**, and fastest in the **afternoon**.',
    'Plan **escape routes and safety zones** (LCES) for a route or camp, and size a safety zone from flame height.',
    'Set **wildfire go/no-go and evacuation triggers** from fire-danger ratings, red-flag warnings and smoke observations.',
  ],
  explanation: [
    {
      type: 'md',
      md: `You learned the **fire triangle** (heat, fuel, oxygen) in Stage 1 for lighting a small fire. Wildfire specialists use a different triangle to predict how a large fire will **behave**: **fuel, weather and topography**. Change any side and the fire changes.

### Fuel

- **Fine fuels** (dry grass, needles, twigs) ignite easily and carry fire **fast**. A grass fire can outrun a person on flat ground in strong wind.
- **Heavy fuels** (logs, dense shrubs) burn more slowly but longer and hotter.
- **Ladder fuels** (shrubs and low branches under trees) let a surface fire climb into the canopy and become a **crown fire**, which is fast, violent and throws embers.
- **Dryness** (fuel moisture) matters as much as the amount: after drought or a heatwave, even "green" country burns.

### Weather

- **Wind** pushes flames forward, preheats fuel and throws **embers** that start spot fires ahead of the main fire, sometimes a kilometre or more.
- **Low humidity and high temperature** dry fine fuels within hours. Burning peaks in the **afternoon**, when humidity is lowest and wind strongest.
- **Wind shifts**, from a passing front, a thunderstorm’s outflow (Lesson 2) or the evening change to downslope winds, can turn a fire’s long flank into its head.

### Topography

- **Fire runs uphill.** Flames lean toward the slope ahead and preheat it, and hot air rises up it. Spread rate increases steeply with slope.
- **Chimneys** (steep gullies), **saddles** and **narrow canyons** funnel wind and heat. They are the deadliest places to be above a fire.
- **Aspect:** sun-facing slopes (south in the Northern Hemisphere, north in the Southern) are drier and burn more readily.`,
    },
    { type: 'diagram', id: 'wildfire-escape', caption: 'Never try to escape uphill above a fire, or into a chimney or saddle. Pre-plan a route across or down to a safety zone.' },
    {
      type: 'md',
      md: `### LCES: the wildland firefighter’s safety system

Wildland firefighters (NWCG) build every assignment on **LCES**, and the same logic works for hikers and campers:

- **Lookouts:** someone watches the fire, the smoke and the weather.
- **Communications:** everyone gets warnings, and there is a way to call out (phone, radio, satellite messenger).
- **Escape routes:** at least two, known, **timed** and clear of fuel, leading *away* from the fire’s likely path, not uphill above it.
- **Safety zones:** places where you can survive **without a fire shelter**. The NWCG rule of thumb is a separation from flames of at least **four times the flame height**. Good candidates are large areas of already-burned ground (once cool), bare rock or scree, wide gravel bars and lakeshores, large irrigated fields, and car parks.

### Go/no-go and evacuation triggers for the public

**Before the trip (no-go triggers):**
- A **red-flag warning** or extreme/catastrophic **fire-danger rating** for the area. Rating systems differ by country: US NFDRS, the Canadian Fire Weather Index, Australia’s AFDRS with "Catastrophic", and Europe’s EFFIS.
- **Closures and fire bans** issued by the land manager (see the law callout).
- An active fire in or upwind of the area, especially one with a growing plume.

**During the trip (leave now):**
- **Smoke that is growing, darkening, or towering** into a pyrocumulus cloud; **ash or embers falling**.
- A **wind shift or increase** toward you. Rising temperature and falling humidity in the afternoon.
- Your escape route becoming threatened. Leave while two routes remain.

### If a fire is approaching

1. **Leave early**, by the route that goes **across or down-slope and away from** the head of the fire.
2. Do not try to outrun a fire uphill, and do not enter chimneys, saddles or dense unburned fuel.
3. Head for a **safety zone**: bare, burned or wet ground, water, rock, roads, large clearings.
4. Cover skin with natural-fibre or flame-resistant clothing; **synthetics can melt**. Protect your airway from smoke.
5. **In a vehicle**, stay inside rather than fleeing on foot. Park away from vegetation, close windows and vents, lie low and cover yourself. It is far better than being caught in the open.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire law varies by place and season',
      md: 'Campfire rules, seasonal fire bans and trail closures are set by the land manager and change with the fire danger. They may ban stoves with open flames, or all flame. Check the local land-manager or fire-agency page before every trip, and treat a ban as absolute: **most wildfires are started by people.** Your signal fire (Stage 14) and cooking fire (Stage 3) must obey the same rules unless it is a genuine life-threatening emergency, and even then, never in extreme fire danger (see the Stage 1 "Be Seen, Be Heard" simulation).',
    },
  ],
  whyItMatters: 'Wildfires are growing in size and season length across many regions. People on foot die when they wait too long, try to escape uphill, or enter terrain that funnels fire. Knowing how fire behaves tells you where not to be and when to leave, long before you see flames.',
  science: [
    {
      type: 'md',
      md: `### Slope and spread rate

A widely used field rule of thumb, from Australian bushfire research, is that a fire’s **forward spread roughly doubles for every 10° of upslope** (and roughly halves going downslope). In equation form:

$$
R_{slope} \\approx R_0 \\times 2^{\\theta / 10°}
$$

In words: the spread rate on slope $\\theta$ equals the flat-ground rate times 2 raised to (slope ÷ 10°).

**Example:** a grass fire spreading at 1 km/h on the flat, driven onto a 20° slope: $1 \\times 2^{2} = 4$ km/h, about **67 m per minute**. A fit hiker climbing a 20° slope manages perhaps 20–40 m of horizontal distance per minute. **You cannot outrun it uphill.** With wind as well, grass fires can spread many times faster.

### Sizing a safety zone

NWCG’s rule of thumb is a separation distance of at least **4 × flame height** from the flames, measured in every direction, for people without fire shelters. That makes it a radius:

- Flame height 10 m → separation ≥ 40 m → a circle about 80 m across: $\\pi \\times 40^2 \\approx 5000$ m² (about half a hectare, **plus** space for people and vehicles).
- In tall forest, crown-fire flames can be 30–60 m high, which needs a separation of hundreds of metres. That is why large lakes, big burned areas and wide rivers are preferred.

Radiant heat falls off with distance, and the 4× rule keeps exposure below the level that causes burns. It assumes flat ground and no wind. On slopes or downwind, go further.

### Why afternoons are dangerous

Fine dead fuels gain and lose moisture within hours, following relative humidity. On a hot afternoon RH may fall below 15–20 %, fine-fuel moisture drops, ignition by embers becomes very likely, and the sea-breeze or upslope winds are strongest. Many fire services plan around a peak burning period from roughly **midday to late afternoon**.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mediterranean scrub (California, Spain, Greece, South Africa).** A hot, dry offshore wind (Santa Ana, föhn-type) and a red-flag warning. Chaparral on steep canyon slopes, with a trail climbing a narrow canyon to a saddle. No-go: the terrain funnels fire and the fuel is explosive.

**Boreal forest (Canada, Siberia, Alaska).** Long summer days, crown fires in black spruce, and very large smoke plumes. Canoe routes use lakes as safety zones. Know which lakes are large enough.

**Australian eucalypt forest.** Extreme spotting from bark embers, sometimes kilometres ahead. Watch the fire-danger rating and leave early; a rating of "Catastrophic" means leave the area the day before.

**Grassland / prairie / savanna.** Fine fuel, fast spread, often wind-driven. Burned ground behind the fire front can become a safety zone within minutes once flames pass, but you must reach it safely.

**Mountain.** Afternoon upslope winds drive fire toward the ridge. Escape routes should go across or down, toward valley roads, rivers or large rock areas.

**Urban–wildland interface.** Roads become gridlocked in evacuations. Leave on the first recommendation, not the final order.`,
    },
  ],
  mistakes: [
    'Trying to escape **uphill** above a fire, or into a chimney, saddle or narrow canyon.',
    'Waiting to see flames before leaving. Smoke growth, ash fall and wind shift are the earlier triggers.',
    'Myth: "Fires don’t burn at night, so we are safe until morning." Fires slow at night but can still run, especially in wind or on slopes.',
    'Myth: "Green vegetation doesn’t burn." In drought it burns readily.',
    'Choosing a "safety zone" that is too small for the flame height.',
    'Wearing synthetic clothing near fire; it can melt onto skin.',
    'Lighting any fire during a fire ban, including "just a small one" for cooking or signalling.',
  ],
  exercises: [
    {
      id: 's12-l5-e1',
      title: 'Escape-route and safety-zone plan for a route',
      level: 2,
      safety: 'home',
      minutes: 35,
      materials: ['Topographic map of a route in a fire-prone area', 'Recent fire-danger information'],
      steps: [
        'Mark slopes, chimneys, saddles and narrow canyons along the route.',
        'Identify at least two escape routes for each section that go across or down-slope, and time them at walking pace.',
        'Mark candidate safety zones (lakes, rivers, bare rock, burned areas, large clearings) and estimate whether each is at least 4 × a plausible flame height across.',
        'Write your go/no-go triggers (rating, red flag, closures) and your "leave now" triggers (smoke, ash, wind shift).',
      ],
      success: ['Every section has two timed escape routes that do not go uphill above likely fire.', 'Safety zones are sized using the 4× rule.'],
      skill: 'hazard-go-no-go',
    },
    {
      id: 's12-l5-e2',
      title: 'Home or campsite evacuation triggers',
      level: 2,
      safety: 'home',
      minutes: 25,
      steps: [
        'Find your local fire agency’s danger-rating and alert system.',
        'Write specific triggers for leaving early (e.g., a rating of "Extreme" or a red-flag warning plus a fire within X km upwind).',
        'Plan two evacuation routes and a meeting point; pack a grab bag (link to Stage 16).',
      ],
      success: ['Your triggers act *before* an evacuation order is issued.', 'Everyone in the household knows the routes.'],
      skill: 'home-plan',
    },
  ],
  quiz: [
    {
      id: 's12-l5-q4',
      kind: 'single',
      prompt: 'You are hiking up a canyon toward a saddle. Smoke rises from the canyon floor 2 km below you, and the afternoon upslope wind is blowing toward you. What is the best action?',
      choices: [
        { id: 'a', text: 'Climb fast to the saddle and drop over the other side.', why: 'The saddle is where fire, wind and heat funnel. This is the classic fatal choice.' },
        { id: 'b', text: 'Move across-slope to the big scree field you passed, then call.', why: 'Best: away from the funnel, to ground with little fuel (or another pre-identified safety zone), without going upslope above the fire.' },
        { id: 'c', text: 'Descend straight toward the smoke to get back to the trailhead.', why: 'Walking into the fire’s path is only safe if the fire is clearly away from the route. Here it is not.' },
        { id: 'd', text: 'Stay put in the dense brush and wait for the fire to pass.', why: 'Dense unburned fuel is the worst place to be.' },
      ],
      answer: 'b',
      concepts: ['escape-routes', 'fire-behavior', 'immediate-danger'],
      explanation: 'Fire runs uphill, fastest in the afternoon with upslope wind, and funnels through saddles. Get across to low-fuel ground and call for help.',
    },
    {
      id: 's12-l5-q5',
      kind: 'single',
      prompt: 'There is a red-flag warning with extreme fire danger for your hiking area, but no fire has started yet. What is the best decision?',
      choices: [
        { id: 'a', text: 'Treat it as a no-go: change your area or your date.', why: 'Correct: under red-flag conditions any new ignition can spread explosively.' },
        { id: 'b', text: 'Go ahead, since there is no fire to escape from yet.', why: 'A fire can start and spread explosively after you are committed.' },
        { id: 'c', text: 'Go, but carry extra water in case a fire does start.', why: 'Extra water does not help you outrun an explosive fire.' },
        { id: 'd', text: 'Go, and turn back only if you see smoke on the route.', why: 'By the time you see smoke, a red-flag fire may already be moving faster than you.' },
      ],
      answer: 'a',
      concepts: ['go-no-go', 'fire-behavior'],
      explanation: 'Red-flag conditions mean any new ignition can spread explosively. Change your area or date.',
    },
    {
      id: 's12-l5-q1',
      kind: 'single',
      prompt: 'Which are the three sides of the **fire behaviour** triangle?',
      choices: [
        { id: 'a', text: 'Fuel, weather and topography', why: 'Correct: these predict how a wildfire moves.' },
        { id: 'b', text: 'Heat, fuel and oxygen', why: 'That is the ignition (combustion) triangle from Stage 1, not the behaviour triangle.' },
        { id: 'c', text: 'Fuel, oxygen and topography', why: 'Oxygen belongs to the combustion triangle; weather is the missing side.' },
        { id: 'd', text: 'Weather, fuel and ignition source', why: 'An ignition source is needed to start a fire, not to predict its behaviour.' },
      ],
      answer: 'a',
      concepts: ['fire-behavior', 'fire-triangle'],
      explanation: 'The fire triangle (heat, fuel, oxygen) explains combustion; the behaviour triangle (fuel, weather, topography) predicts how a wildfire moves.',
    },
    {
      id: 's12-l5-q3',
      kind: 'single',
      prompt: 'Flames are about 8 m high. Using the NWCG rule of thumb, what is the minimum separation distance from the flames in a safety zone?',
      choices: [
        { id: 'a', text: '32 m', why: 'Correct: 4 × flame height = 4 × 8 m.' },
        { id: 'b', text: '64 m', why: 'That is roughly the width of the clear area (32 m each side), not the separation distance.' },
        { id: 'c', text: '8 m', why: 'This is just the flame height; the rule is four times that.' },
        { id: 'd', text: '16 m', why: 'This uses 2 × flame height; the rule is 4 ×.' },
      ],
      answer: 'a',
      concepts: ['escape-routes'],
      explanation: '4 × 8 m = **32 m** in every direction, so the clear area is about 64 m across plus room for people. Go further on slopes or downwind.',
    },
    {
      id: 's12-l5-q2',
      kind: 'single',
      prompt: 'Using "spread doubles per 10° of slope", a fire spreading at 0.5 km/h on flat ground reaches a 30° slope. What is the spread rate?',
      choices: [
        { id: 'a', text: '4 km/h', why: 'Correct: three doublings, 0.5 × 2³ = 4.' },
        { id: 'b', text: '1.5 km/h', why: 'This multiplies by 3 (the number of 10° steps) instead of doubling three times.' },
        { id: 'c', text: '3 km/h', why: 'This multiplies by 2 × 3 instead of 2 × 2 × 2.' },
        { id: 'd', text: '1 km/h', why: 'This doubles only once, not once per 10°.' },
      ],
      answer: 'a',
      concepts: ['fire-behavior'],
      explanation: '$0.5 \\times 2^{3} = 4$ km/h. That is faster than anyone can walk uphill on a 30° slope.',
    },
  ],
  scenario: {
    id: 's12-l5-sc',
    setup: 'Day 2 of a 4-day backpacking loop in dry pine forest in late summer. At 11:00 you see a smoke column rising 15 km to the west. By 12:30 it has grown and darkened, the wind has swung to blow from the west, and fine ash is landing on your pack. The trail ahead climbs east through a narrow valley to a pass. Behind you (west) is the trailhead road, 10 km away, toward the smoke. A large lake is 3 km north on a side trail.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Continue east over the pass as planned — it is away from the smoke.', why: 'The fire will spread east with the wind, and the narrow valley and pass funnel fire. You would be ahead of it in the worst terrain.' },
      { id: 'b', text: 'Go north to the large lake now, use it as a safety zone, and send a satellite message with your position.', why: 'Best: the lake is close, across the fire’s likely path rather than ahead of it, and it gives a big fuel-free area. Communication lets agencies know you are there.' },
      { id: 'c', text: 'Go back west to the trailhead road.', why: 'That walks toward an actively growing fire.' },
      { id: 'd', text: 'Wait here for a few hours to see what the fire does.', why: 'Growing plume, wind shift and ash fall are the "leave now" triggers.' },
    ],
    best: 'b',
    debrief: 'Growing plume, wind shift toward you and ash fall are the classic triggers. Pick the nearest large safety zone that does not involve climbing uphill ahead of the fire or entering a funnel. Communicate early (Stage 1 and Stage 14). Staying and moving are both valid options, but here moving to the lake is clearly safer than staying in dense fuel.',
    concepts: ['escape-routes', 'stay-or-move', 'go-no-go'],
  },
  summary: [
    'Fire behaviour = fuel + weather + topography. Fine dry fuel, wind, low humidity and slope make fires fast.',
    'Fire runs uphill (roughly doubling per 10° of slope), funnels through chimneys, saddles and canyons, and peaks in the afternoon.',
    'LCES: Lookouts, Communications, Escape routes (two, timed, not uphill above the fire), Safety zones (≥ 4 × flame height).',
    'No-go: red flag, extreme rating, bans or closures. Leave now: growing plume, ash fall, wind shift toward you.',
    'Obey fire bans absolutely; most wildfires are human-caused.',
  ],
  furtherReading: ['nwcg-irpg', 'nwcg', 'usfs-fire'],
  references: ['nwcg', 'nwcg-irpg', 'nifc', 'usfs-fire', 'smokey-campfire'],
}
