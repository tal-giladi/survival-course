import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's12-l6',
  stage: 12,
  order: 6,
  title: 'Avalanches, rockfall and landslides',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s12-l4', 's2-l2'],
  concepts: ['avalanche', 'slope-angle', 'rockfall-landslide', 'go-no-go'],
  objectives: [
    'Recognise **avalanche terrain**: slope angle (30–45°), runout zones and terrain traps, and measure slope angle from a map.',
    'Name the main **avalanche problems** and the **red-flag** observations, and read a public avalanche forecast and its **danger scale**.',
    'Explain why avalanche travel requires **formal training** and rescue equipment, and what to do if you have neither.',
    'Recognise **rockfall, landslide and debris-flow** hazards and other dangerous terrain, and set go/no-go triggers for them.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'danger',
      title: 'Training boundary',
      md: 'This lesson teaches **recognition and avoidance**. Travelling in avalanche terrain requires a **formal avalanche course** (e.g., AIARE in the US, Avalanche Canada AST, national alpine-club and mountain-training courses in Europe and the UK), **rescue equipment** (transceiver, probe, shovel) that you have practised with, and a current avalanche forecast. **Do not do any exercise from this course on or below avalanche terrain.**',
    },
    {
      type: 'md',
      md: `### How avalanches happen

Most avalanche deaths are caused by **slab avalanches**: a cohesive layer of snow (the slab) sitting on a **weak layer** fractures and slides as a block. Crucially, **most fatal avalanches are triggered by the victims or members of their own party**. The added weight of a person collapses the weak layer. So avalanche safety is mostly about **where you go and when**.

The three ingredients are **terrain, snowpack and weather**, plus the **human factor** that decides whether you are there when the other three line up.

### Terrain: the part you can always see

- **Slope angle.** Most slab avalanches start on slopes of **30–45°**, most often **around 35–40°**. Below about 30° slabs rarely release; much above 45° snow tends to slough off in small amounts before it builds deep slabs.
- **Runout zones.** Avalanches travel far onto flatter ground. **You can be caught on a 15° valley floor by a slope releasing above you.** Look *up* as well as at your feet.
- **Terrain traps** raise the consequences: gullies and creek beds (deep burial), cliffs below (trauma), trees (trauma), lakes.
- **Features:** convex rolls, lee slopes under ridges (wind-loaded), and slopes that face the sun in warming conditions.`,
    },
    { type: 'diagram', id: 'slope-angle-chart', caption: 'Schematic of where slab avalanches start. The 30–45° band is avalanche terrain, and anything below it that the debris could reach is too.' },
    {
      type: 'md',
      md: `### Snowpack and weather: avalanche problems

Public avalanche centres describe the hazard as one or more **avalanche problems**. Each has a **type**, a **location** (aspects and elevations), a **likelihood** and a **size**:

| Problem | Short description | Typical cause |
|---|---|---|
| **Storm slab** | Slab of new snow | Heavy recent snowfall; usually settles within days |
| **Wind slab** | Dense slab formed on lee slopes | Wind moving snow, even with no new snowfall |
| **Persistent slab** | Slab over a weak layer that lasts weeks | Buried surface hoar or facets; deceptive and deadly |
| **Deep persistent slab** | Very deep weak layer near the ground | Large, hard to predict, often unsurvivable |
| **Loose dry / loose wet** | Point releases that fan out | New dry snow; sun or rain wetting the surface |
| **Wet slab / glide** | Whole-slab release when water weakens layers | Rapid warming, rain on snow, spring |
| **Cornice** | Overhanging lip breaks off | Wind and warming; can trigger slopes below |

### Red flags: nature’s warnings

Any one of these means *avalanche conditions exist now*:

- **Recent avalanches** on similar slopes.
- **Shooting cracks** running out from your skis or feet.
- **"Whumpfing"**: the snowpack collapsing with a sound underfoot.
- **Heavy snowfall** or rain in the last 24–48 hours.
- **Strong wind** transporting snow (plumes off ridges, fresh drifts).
- **Rapid warming**: the first warm day after a cold spell, rain on snow, a wet surface.

### The danger scale

North America (NAPADS) and Europe (EAWS) use five levels: **1 Low, 2 Moderate, 3 Considerable, 4 High, 5 Extreme / Very High**. The danger **increases exponentially** between levels. EAWS notes that about **half of avalanche fatalities occur at level 3 (Considerable)**. That is not because it is the worst level, but because it looks manageable and people still travel. Forecasts usually give separate ratings by elevation band, and the avalanche problems tell you *where* the danger is.

### If you have no training or equipment

- **Stay out of avalanche terrain and its runouts** whenever there is snow on slopes of 30° or more. Choose low-angle routes well away from steeper slopes above: forest roads, valley walks, rolling terrain.
- If a planned summer route turns snowy, **turn around**.
- In a survival situation, route along ridges of low angle, dense forest (not sparse trees), and broad valley floors well away from slope runouts. Cross avalanche paths quickly, one at a time, if you cannot avoid them.`,
    },
    {
      type: 'md',
      md: `### Rockfall

- **Triggers:** freeze–thaw (worst on the first sun of the morning and in spring), rain, earthquakes, animals, and **other people above you**.
- **Gullies funnel** rocks; cliff bases and scree fans with fresh scars and pale "new" rock show recent activity.
- **Controls:** wear a helmet where rockfall is possible; avoid gullies when others are above; pass exposed sections quickly and early in the day; do not rest or camp under cliffs; shout **"Rock!"** if you dislodge one, and if you hear it, press against the face rather than looking up.

### Landslides and debris flows

- **Triggers:** intense or prolonged rain, rapid snowmelt, earthquakes, and **burned slopes** (USGS: post-fire debris flows can follow short, intense bursts of rain on recent burn scars).
- **Warning signs:** new cracks in the ground or road, tilted trees or poles, bulging slopes, new springs or seepage, streams turning muddy or suddenly dropping in flow, and a rumbling sound.
- **Controls:** avoid channels and the **fans** at the mouths of steep valleys during heavy rain; do not camp at the base of steep slopes or on debris fans; move **sideways** out of the path of a flow.

### Other dangerous terrain

- **Steep wet grass and loose scree:** slips become falls. Take a lower or longer line.
- **Exposure:** anywhere a slip would be a long fall. The hazard is the consequence, not the difficulty.
- **Undercut riverbanks and sea cliffs:** they collapse without warning. Stay well back.
- **Glaciers:** crevasses hidden by snow bridges; formal training and rope teams only.
- **Cornices and snow bridges** (Lesson 4).`,
    },
  ],
  whyItMatters: 'Avalanches, rockfall and landslides are low-frequency, high-consequence hazards: you may never see one, but a single event can be unsurvivable. The terrain clues (angle, runouts, gullies, fans) are visible in advance on a map and on the ground, so recognising them turns an invisible risk into a route choice.',
  science: [
    {
      type: 'md',
      md: `### Measuring slope angle from a map

On a topographic map, slope angle comes from the contour interval (the rise) and the horizontal distance between contours (the run):

$$
\\tan\\theta = \\frac{\\text{rise}}{\\text{run}}, \\qquad \\theta = \\arctan\\left(\\frac{\\text{rise}}{\\text{run}}\\right)
$$

**Example:** 1:25,000 map, 10 m contour interval, contours 0.5 mm apart. The run is 0.5 mm × 25,000 = 12.5 m, so $\\tan\\theta = 10/12.5 = 0.8$ and $\\theta \\approx 38.7°$. That is prime avalanche terrain.

Useful anchors: $\\tan 30° \\approx 0.58$ and $\\tan 45° = 1.0$. So **if the run between contours is less than about 1.7 times the contour interval, the slope is steeper than 30°**. Online slope-angle map layers do this for you. Short steep rolls smaller than the contour spacing do not show on maps, so check angles in the field with an inclinometer.

### Why 30–45°? Stress on the weak layer

The weight of a slab of thickness $h$ and density $\\rho$ pulls it down-slope. The shear stress on the weak layer is

$$
\\tau = \\rho\\, g\\, h\\, \\sin\\theta \\cos\\theta
$$

In words: slab weight per unit area times $\\sin\\theta\\cos\\theta$, which is greatest at 45°. **Example:** $h = 0.5$ m, $\\rho = 200$ kg/m³, $\\theta = 38°$: $\\tau = 200 \\times 9.81 \\times 0.5 \\times 0.616 \\times 0.788 \\approx 476$ Pa. Below ~30° the stress is too low for most slabs to fail. Above ~45–50° snow sloughs off before thick slabs build. A skier adds a local stress that can collapse the weak layer and start a fracture that runs across the slope.

### Rockfall energy

A falling rock gains kinetic energy $E = m g h$. A **1 kg** rock falling **50 m**: $1 \\times 9.81 \\times 50 \\approx 490$ J, about the energy of a pistol bullet. A climbing helmet helps against small rocks, but the better control is not being in the fall line.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain snowshoe walk (Rockies, Alps).** A popular "easy" trail follows a valley floor below 38° slopes. After 40 cm of new snow and strong wind, the runouts reach the trail. The right call is another trail in low-angle forest away from steep slopes.

**Scottish winter hills.** Wind slabs build on lee slopes and in gully tops, below cornices. SAIS forecasts give aspect and elevation. Change the route to avoid them.

**Spring in the Alps.** Wet-snow avalanches and rockfall increase as the day warms. Start before dawn and be off steep slopes by late morning.

**Desert canyons.** Rain on steep, bare slopes releases rockfall and debris flows into the same channels that carry flash floods (Lesson 3).

**Tropical mountains / monsoon.** Prolonged heavy rain triggers landslides on roads and trails. Avoid travel under steep cut slopes during and just after heavy rain.

**Burned forest.** In the first years after a fire, even moderate storms can trigger debris flows from burn scars onto roads and campsites below.

**Coastal cliffs.** Cliff-top paths collapse after storms and freeze–thaw. Stay back from edges and do not shelter at the cliff base.`,
    },
  ],
  mistakes: [
    'Thinking you are safe on flat ground while standing in the runout of a steep slope above.',
    'Myth: "Avalanches happen during storms, so sunny days after a storm are safe." The first clear days after heavy snow and wind are often the most dangerous.',
    'Myth: "Loud noises trigger avalanches." Shouting and aircraft almost never do; the weight of people does.',
    'Myth: "Trees mean safety." Sparse trees do not anchor snow, and they cause trauma in an avalanche.',
    'Treating "Considerable" as manageable without training. About half of fatalities happen at this level.',
    'Resting or camping at the foot of cliffs, in gullies, or on debris fans below steep slopes.',
    'Carrying a transceiver without practised companion-rescue skills (training + regular practice).',
  ],
  exercises: [
    {
      id: 's12-l6-e1',
      title: 'Measure slope angles on a map',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['Topographic map with known scale and contour interval (paper or online)', 'Ruler or map measuring tool'],
      steps: [
        'Choose a mountain area you might visit in winter.',
        'Find three places where the contours are closest together and compute the angle with $\\tan\\theta$ = rise ÷ run.',
        'Shade every area steeper than 30° and draw where debris could run out below.',
        'If available, compare with an online slope-angle layer.',
        'Mark a winter route that stays out of both the shaded slopes and their runouts.',
      ],
      success: ['Your angles are within ~3° of a slope-angle layer.', 'Your route avoids slopes ≥ 30° and their runouts.'],
      skill: 'hazard-go-no-go',
    },
    {
      id: 's12-l6-e2',
      title: 'Read an avalanche forecast',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'Open a public avalanche forecast (avalanche.org, Avalanche Canada, SAIS, SLF or your national service).',
        'Record the danger rating for each elevation band and each avalanche problem (type, aspect, elevation, likelihood, size).',
        'Explain in two sentences where you would *not* go today and why.',
      ],
      success: ['You can name each avalanche problem and where it is located.', 'Your "where not to go" is specific to aspect and elevation.'],
    },
    {
      id: 's12-l6-e3',
      title: 'Take a formal avalanche course before winter mountain travel',
      level: 4,
      safety: 'formal-training',
      minutes: 1440,
      steps: [
        'Find a recognised course in your region (e.g., AIARE 1 / Avalanche Canada AST 1 / an accredited national course).',
        'Buy or rent a transceiver, probe and shovel and practise companion rescue with your regular partners.',
        'Travel your first seasons with experienced, trained partners on low-consequence terrain.',
      ],
      success: ['You hold a recognised course certificate.', 'You can find a buried transceiver and dig to it within a time standard set by your instructor.'],
      safetyNote: 'Only under qualified instruction. No avalanche-terrain practice from this course.',
    },
  ],
  quiz: [
    {
      id: 's12-l6-q1',
      kind: 'numeric',
      prompt: 'On a 1:25,000 map with a 20 m contour interval, adjacent contours are **1.0 mm** apart. What is the slope angle in degrees?',
      unit: '°',
      answer: 38.7,
      tolerance: 1,
      concepts: ['slope-angle'],
      explanation: 'Run = 1.0 mm × 25,000 = 25 m. $\\tan\\theta = 20/25 = 0.8$, so $\\theta \\approx 38.7°$. That is in the prime avalanche band.',
    },
    {
      id: 's12-l6-q2',
      kind: 'multi',
      prompt: 'Which observations are **red flags** meaning avalanche conditions exist now?',
      choices: [
        { id: 'a', text: 'Shooting cracks from your skis', why: 'Yes.' },
        { id: 'b', text: '"Whumpf" collapse sounds', why: 'Yes.' },
        { id: 'c', text: 'Fresh avalanche debris on similar slopes', why: 'Yes: the most reliable sign of all.' },
        { id: 'd', text: 'Snow plumes blowing off the ridges', why: 'Yes: active wind loading.' },
        { id: 'e', text: 'A cold, clear day two weeks after the last snowfall', why: 'Not a red flag in itself (though persistent weak layers can still exist).' },
      ],
      answer: ['a', 'b', 'c', 'd'],
      concepts: ['avalanche'],
      explanation: 'Red flags are nature telling you directly. Any one should turn you away from avalanche terrain.',
    },
    {
      id: 's12-l6-q3',
      kind: 'truefalse',
      prompt: 'Most fatal avalanches are triggered by the victim or someone in their party.',
      answer: true,
      concepts: ['avalanche', 'human-factors'],
      explanation: 'Which is why terrain choice, and resisting the FACETS traps (Stage 1), is the core of avalanche safety.',
    },
    {
      id: 's12-l6-q4',
      kind: 'single',
      prompt: 'According to the European Avalanche Warning Services, at which danger level do roughly **half** of avalanche fatalities occur?',
      choices: [
        { id: 'a', text: '1 Low', why: 'Fatalities are rare at Low.' },
        { id: 'b', text: '3 Considerable', why: 'Correct: dangerous, but it looks manageable, so many people travel.' },
        { id: 'c', text: '5 Very High', why: 'Very rare, and few people travel then.' },
        { id: 'd', text: '4 High', why: 'Very dangerous, but fewer people go out.' },
      ],
      answer: 'b',
      concepts: ['avalanche'],
      explanation: 'Risk = hazard × exposure. At Considerable the hazard is substantial and exposure (people travelling) is high.',
    },
    {
      id: 's12-l6-q5',
      kind: 'single',
      prompt: 'Summer, heavy overnight rain, on a trail below a steep slope burned last year. The stream beside the trail has turned thick and brown, and you hear a rumble upslope. What should you do?',
      choices: [
        { id: 'a', text: 'Move sideways out of the channel and off the fan to higher ground immediately.', why: 'Correct: signs of an imminent debris flow. Get out of its path.' },
        { id: 'b', text: 'Continue quickly along the trail in the valley bottom.', why: 'The valley bottom and channel are the flow’s path.' },
        { id: 'c', text: 'Shelter under the overhanging bank.', why: 'The flow can bury or scour it.' },
        { id: 'd', text: 'Wait by the stream to watch.', why: 'Seconds count.' },
      ],
      answer: 'a',
      concepts: ['rockfall-landslide', 'immediate-danger'],
      explanation: 'Burn scars plus intense rain produce debris flows (USGS). Channels and fans are the danger zones; move sideways and up.',
    },
  ],
  scenario: {
    id: 's12-l6-sc',
    setup: 'You are on a winter snowshoe walk with two friends, none of you avalanche-trained, with no transceivers. The forecast is "Considerable" above treeline on north-east aspects (wind slab). 35 cm of snow fell two days ago with strong south-west winds, and today is sunny and calm. The planned trail follows a flat valley floor for 2 km directly beneath a 40° north-east-facing slope. A longer alternative stays in dense, low-angle forest on the other side of the valley.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Take the valley trail: it is flat, so there is no avalanche terrain.', why: 'You would be in the runout of exactly the slope the forecast warns about (NE aspect, wind-loaded).' },
      { id: 'b', text: 'Take the valley trail quickly, spaced out.', why: 'Spacing reduces multiple burials, but without training or rescue gear you should not be in the runout at all.' },
      { id: 'c', text: 'Take the longer forest route well away from the steep slope and its runout.', why: 'Best: avoids the avalanche problem entirely at the cost of time.' },
      { id: 'd', text: 'Test the slope by kicking the bottom of it.', why: 'Untrained slope testing below a loaded slope is how people trigger avalanches onto themselves.' },
    ],
    best: 'c',
    debrief: 'Runouts are avalanche terrain. The forecast problem (wind slab on NE aspects) matches the slope above the trail, and sunny calm days after snow and wind feel safe but often are not. With no training and no rescue gear, the only good tool you have is terrain choice. Take a formal course before going further.',
    concepts: ['avalanche', 'slope-angle', 'go-no-go'],
  },
  summary: [
    'Slab avalanches start mostly on 30–45° slopes (peak ~35–40°) and can run far onto flat ground. Runouts count as avalanche terrain.',
    'Avalanche problems (storm, wind, persistent, wet, cornice…) have a type, location, likelihood and size. Red flags: recent avalanches, cracks, whumpfs, new snow, wind loading, rapid warming.',
    'The danger scale is exponential; about half of fatalities happen at Considerable. Most victims trigger their own avalanche.',
    'Avalanche travel requires formal training, rescue gear and practice. Without them, avoid slopes ≥ 30° and their runouts.',
    'Rockfall: gullies, morning thaw, parties above. Landslides and debris flows: heavy rain, burn scars, channels and fans. Move sideways and up.',
  ],
  furtherReading: ['avalanche-org', 'avalanche-canada', 'tremper-avalanche', 'usgs-landslides'],
  references: ['avalanche-org', 'napads', 'avalanche-problems', 'eaws-danger-scale', 'avalanche-canada', 'sais', 'slf', 'tremper-avalanche', 'avalanche-handbook', 'mccammon-traps', 'usgs-landslides', 'freedom-hills'],
}
