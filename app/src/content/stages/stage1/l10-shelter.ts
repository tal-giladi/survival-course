import type { Lesson } from '../../types'

export const l10: Lesson = {
  id: 's1-l10',
  stage: 1,
  order: 10,
  title: 'Basic shelter',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l7', 's1-l9'],
  concepts: ['site-selection', 'ground-insulation', 'shelter-types'],
  objectives: [
    'Explain shelter as **heat-balance control** plus rest.',
    'Choose a site using the **5 Ws** and avoid cold-air sinks, flood paths and overhead hazards.',
    'Build effective **ground insulation** and explain why it matters more than a roof on many nights.',
    'Pitch an **A-frame** and a **lean-to** tarp and use an emergency bag correctly.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A shelter is not a building. It is a set of **heat-loss controls** arranged around your body so that you can rest safely:

| Threat | Shelter control |
|---|---|
| Rain / snow (evaporation, conduction through wet clothes) | Roof, drainage |
| Wind (convection) | Walls, orientation, site in the lee |
| Cold ground (conduction) | Thick, dry insulation underneath |
| Clear sky (radiation) | Roof or canopy overhead |
| Heat and sun (radiation gain) | Shade, ventilation, raised roof |

Small is warm: the less air volume your body must heat, and the closer the walls, the better — as long as you stay dry.`,
    },
    {
      type: 'md',
      md: `### Site selection: the 5 Ws

- **Widowmakers** — dead trees and hanging branches that can fall, especially in wind. Look up.
- **Water** — near enough to fetch, but *never* in a dry streambed, gully or flood plain. Flash floods can come from rain you cannot see.
- **Wind** — find the lee of a ridge, boulder or thicket; avoid exposed ridges and saddles that funnel wind.
- **Wiggly things** — ant nests, wasp nests, animal trails, snake habitat, mosquito-heavy stagnant water.
- **Wood** (and materials) — enough fuel and insulation nearby so building does not cost hours.

Two more terrain traps:

- **Cold-air pooling.** On calm, clear nights, cold dense air drains downhill and collects in valley bottoms and hollows, which can be several degrees colder than slopes a little higher. A spot **part-way up a slope** is often warmest.
- **Hazard slopes.** Below cliffs (rockfall), in avalanche paths, on unstable ground.`,
    },
    { type: 'diagram', id: 'shelter-sites', caption: 'Good sites are usually mid-slope, sheltered from wind, above flood level and away from dead trees.' },
    {
      type: 'md',
      md: `### Ground insulation first

On a cold night, the ground can steal more heat than the air. Your body compresses anything beneath it, so you need **far more material than looks sensible**: pile dry leaves, grass, pine needles or spruce boughs at least **20–30 cm** thick before lying on it (it compresses to a few centimetres). Your empty pack, a rope coil, spare clothes and a foam sit-pad all help.

### Tarp shelters`,
    },
    { type: 'diagram', id: 'tarp-configs', caption: 'A-frame and lean-to. Pitch low on the windward side.' },
    {
      type: 'md',
      md: `- **A-frame:** ridgeline between two trees at about hip-to-chest height, tarp over it, edges staked or weighted close to the ground. Protects from rain and wind from both sides. Lower and narrower = warmer.
- **Lean-to:** one edge high, the other on the ground facing into the wind. Faster to pitch, lets a fire’s radiant heat in on the open side — but offers less protection if the wind shifts.
- **Emergency bag / bivy:** a waterproof bag you get into. It blocks wind and rain and traps warm moist air. Foil "space" versions reflect radiant heat back but are fragile and trap condensation — expect to get damp from inside.

Pitching tips: tension lines so rain runs off; a drip line (a short cord hanging off the ridgeline) stops water running down the cord into your shelter; dig no trenches (damages ground, rarely needed if you choose the site well).`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Rules on camping, cutting vegetation and building structures vary widely. Many protected areas prohibit cutting live branches or building shelters except in emergencies. In a genuine emergency, survival comes first; for practice, use a tarp and dead, fallen material only where it is allowed. See the References page for jurisdiction portals.',
    },
  ],
  whyItMatters: 'Most unplanned nights out are survivable with decent clothing, a well-chosen site, ground insulation and a simple cover. People get into trouble by choosing hollows, lying on cold ground or spending the last light building an elaborate structure in the wrong place.',
  science: [
    {
      type: 'md',
      md: `### Why the ground is so hungry

Heat conducted through a layer is roughly

$$
Q = \\frac{k \\, A \\, \\Delta T}{d}
$$

where $k$ is thermal conductivity, $A$ the contact area, $\\Delta T$ the temperature difference and $d$ the thickness. **Intuition:** heat flow doubles if the layer is half as thick, or if the material conducts twice as well.

- Damp soil: $k \\approx 1\\text{–}2$ W/(m·K). Still air trapped in dry leaves: effective $k \\approx 0.04\\text{–}0.06$.
- Lying on the ground puts roughly $0.5$ m² of your body in contact with it.

Lying on bare damp soil at 5 °C with skin/clothing at ~30 °C through, say, 1 cm of compressed clothing is a very large heat sink. Replace that with **5 cm of compressed dry leaves** ($k \\approx 0.05$): $Q \\approx 0.05 \\times 0.5 \\times 25 / 0.05 = 12.5$ W — easily handled by your metabolism. The **thickness and dryness** of what you lie on matter enormously.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest in rain:** tarp A-frame pitched low between two living trees on a gentle mid-slope, thick leaf bed, packs as a windbreak at the open end.

**Desert day:** shelter means **shade**. A tarp raised 30–50 cm above the ground (so air can flow) with a second layer or gap above it cuts radiant heat; digging into the cooler subsurface sand helps. Rest in the shade during the heat of the day.

**Snow:** get off the snow (boughs, pack, pad), block the wind; snow itself is an excellent insulator but snow caves and trenches need training (Stage 5) because of collapse and ventilation risks.

**Tropics:** get *off the ground* — a raised platform or hammock away from water, insects and runoff; a steep roof sheds heavy rain.

**Urban:** a car, a bus shelter, the lee side of a building — the same principles: wind, wet, ground, sky.`,
    },
  ],
  mistakes: [
    'Camping in a dry streambed or at the bottom of a valley (flood and cold-air pooling).',
    'Pitching under dead trees or large dead branches.',
    'Insulating overhead but lying on bare ground.',
    'Building a big, airy shelter that cannot be kept warm.',
    'Spending the last daylight on an ambitious design; a simple, finished shelter beats a perfect, unfinished one.',
  ],
  exercises: [
    {
      id: 's1-l10-e1',
      title: 'Pitch A-frame and lean-to',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Tarp (≈2×3 m)', '10–15 m of cord', '6 pegs or improvised stakes'],
      steps: [
        'In a garden or park where it is allowed, pitch an A-frame. Time yourself.',
        'Re-pitch it as a lean-to facing away from the wind.',
        'Add a drip line to the ridgeline.',
        'Repeat until you can pitch either in under 10 minutes, then try once with gloves on and once at dusk.',
      ],
      success: ['Both configurations pitched in under 10 minutes.', 'The tarp is taut enough that water runs off rather than pooling.'],
      skill: 'tarp-pitch',
    },
    {
      id: 's1-l10-e2',
      title: 'Ground insulation test',
      level: 3,
      safety: 'outdoor',
      minutes: 40,
      steps: [
        'On a cool day, sit for 10 minutes directly on the ground and note how your seat and legs feel.',
        'Pile dry leaves or grass 20–30 cm thick, sit on it for 10 minutes, and compare.',
        'Measure how thick the pile is after you stand up.',
      ],
      success: ['You felt a clear difference.', 'You can explain it with $Q = kA\\Delta T/d$.'],
      skill: 'site-selection',
    },
  ],
  simulations: ['shelter-site'],
  quiz: [
    {
      id: 's1-l10-q1',
      kind: 'single',
      prompt: 'On a calm, clear night, which site is usually **coldest**?',
      diagram: 'shelter-sites',
      choices: [
        { id: 'a', text: 'A sheltered bench part-way up the slope', why: 'Usually the warmest option.' },
        { id: 'b', text: 'The valley floor near the stream', why: 'Correct — cold air drains downhill and pools there.' },
        { id: 'c', text: 'The lee side of a large boulder mid-slope', why: 'Sheltered from wind and above the cold pool.' },
        { id: 'd', text: 'Under dense evergreen canopy mid-slope', why: 'Canopy reduces radiation loss to the sky.' },
      ],
      answer: 'b',
      concepts: ['site-selection'],
      explanation: 'Cold-air pooling makes valley bottoms and hollows colder on calm, clear nights; they also carry flood risk.',
    },
    {
      id: 's1-l10-q2',
      kind: 'single',
      prompt: 'Which list gives the **5 Ws** of site selection?',
      choices: [
        { id: 'a', text: 'Widowmakers, water, wind, wiggly things, wood', why: 'Correct — overhead hazards, water and floods, wind, creatures, materials.' },
        { id: 'b', text: 'Widowmakers, water, wind, weather, warmth', why: 'Weather and warmth are outcomes; the list covers wiggly things and wood/materials.' },
        { id: 'c', text: 'Wind, water, wood, warmth, wiggly things', why: 'This misses widowmakers — dead trees and branches overhead. Look up.' },
        { id: 'd', text: 'Widowmakers, water, wind, wood, wildlife', why: 'Close, but the list says wiggly things: nests, animal trails, insects, snakes.' },
      ],
      answer: 'a',
      concepts: ['site-selection'],
      explanation: 'Widowmakers, water, wind, wiggly things, wood.',
    },
    {
      id: 's1-l10-q3',
      kind: 'single',
      prompt: 'You have 20 minutes of light left, a tarp, cord and a forest floor full of dry leaves. What gives the most warmth tonight?',
      choices: [
        { id: 'a', text: 'A perfectly tensioned tarp pitched high, sleeping on bare ground', why: 'You will lose heat to the ground all night.' },
        { id: 'b', text: 'A quick, low A-frame and a leaf bed 20–30 cm thick before compression', why: 'Correct — covers conduction, rain and wind.' },
        { id: 'c', text: 'A large lean-to with a wide opening and room to sit up inside', why: 'Too much volume and exposure without a fire.' },
        { id: 'd', text: 'Skip the shelter and keep walking through the night to stay warm', why: 'You will exhaust yourself and sweat in the dark.' },
      ],
      answer: 'b',
      concepts: ['ground-insulation', 'shelter-types'],
      explanation: 'Simple cover + thick dry insulation underneath is the highest-value combination.',
    },
    {
      id: 's1-l10-q4',
      kind: 'single',
      prompt: 'Using $Q = kA\\Delta T/d$ with $k = 0.05$ W/(m·K), $A = 0.5$ m², $\\Delta T = 25$ K and $d = 0.025$ m (2.5 cm of compressed leaves), estimate the heat loss to the ground.',
      choices: [
        { id: 'a', text: '25 W', why: 'Correct — $0.05 \\times 0.5 \\times 25 / 0.025 = 25$ W.' },
        { id: 'b', text: '0.25 W', why: 'This uses 2.5 for the thickness — centimetres were not converted to metres.' },
        { id: 'c', text: '50 W', why: 'This leaves out the 0.5 m² contact area.' },
        { id: 'd', text: '0.016 W', why: 'This multiplies by the thickness instead of dividing by it.' },
      ],
      answer: 'a',
      concepts: ['ground-insulation'],
      explanation: '$0.05 \\times 0.5 \\times 25 / 0.025 = 25$ W. Halving the thickness doubles the loss — pile more.',
    },
    {
      id: 's1-l10-q5',
      kind: 'single',
      prompt: 'Why is a flat, sandy dry streambed a poor shelter site?',
      choices: [
        { id: 'a', text: 'It can flash-flood from rain far upstream, even with no local rain.', why: 'Correct — the channel exists because water runs through it, sometimes suddenly.' },
        { id: 'b', text: 'Sand holds moisture and will soak your insulation during the night.', why: 'Dampness is a minor issue next to the flood risk.' },
        { id: 'c', text: 'Animals use dry channels as trails, so you will be disturbed all night.', why: 'Wildlife is a lesser concern; the real danger is a flash flood.' },
        { id: 'd', text: 'Its loose sand is too soft to hold stakes, so a tarp will not stay up.', why: 'Staking can be improvised; a flash flood cannot be survived so easily.' },
      ],
      answer: 'a',
      concepts: ['site-selection'],
      explanation: 'Dry channels can flash-flood from rain far upstream, sometimes with no local rain at all.',
    },
  ],
  scenario: {
    id: 's1-l10-sc',
    setup: 'Mountain forest, 18:00, 4 °C, forecast clear and calm overnight, down to −2 °C. You have a tarp, cord, a thin foam sit-pad, warm layers and a lighter. Options: (1) a flat meadow in the valley bottom by the stream; (2) a small bench 40 m up the slope under a mix of living and dead pines; (3) the same bench 30 m further along, under living trees only, next to a large boulder.',
    question: 'Where and how do you shelter?',
    choices: [
      { id: 'a', text: 'Meadow by the stream: flat ground, easy water and open sky for signaling.', why: 'Cold-air pooling on a clear, calm night and exposure to the sky make this the coldest option.' },
      { id: 'b', text: 'Bench under the mixed pines, since it is closest and saves your remaining light.', why: 'Dead trees overhead are a real hazard.' },
      { id: 'c', text: 'Boulder bench under living trees: low A-frame, thick needle bed, pad under hips.', why: 'Best: above the cold pool, wind-sheltered, canopy overhead, no widowmakers, strong ground insulation.' },
      { id: 'd', text: 'Skip the shelter and keep walking through the night to stay warm and moving.', why: 'Exhausting, sweaty and risky in the dark.' },
    ],
    best: 'c',
    debrief: 'Clear and calm means cold air will drain into the valley and radiation to the sky will be strong: pick the mid-slope bench, under canopy, clear of dead trees. Then invest your effort in the ground bed — the biggest heat sink on a cold night.',
    concepts: ['site-selection', 'ground-insulation'],
  },
  summary: [
    'Shelter = controls for wet, wind, ground, sky (and sun in heat).',
    'Site: 5 Ws; avoid valley bottoms, dry channels, dead trees and hazard slopes.',
    'Insulate underneath first — pile 20–30 cm; it compresses.',
    'Simple, small and finished beats elaborate and unfinished.',
  ],
  furtherReading: ['kochanski-bushcraft', 'army-atp-3-50-21'],
  references: ['kochanski-bushcraft', 'army-atp-3-50-21', 'afh-10-644', 'lnt-principles', 'usariem-cold'],
}
