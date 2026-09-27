import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's4-l3',
  stage: 4,
  order: 3,
  title: 'Collecting water',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s4-l2'],
  concepts: ['water-collection', 'snowmelt', 'solar-still', 'water-budget'],
  objectives: [
    'Calculate **rain yield** from catchment footprint × rainfall × efficiency, and collect it cleanly (first flush).',
    'Estimate the **fuel cost of melting snow and ice** and plan a winter water routine.',
    'Explain how **dew, fog and transpiration** collection work and why their yields are small.',
    'Model a **solar still** from its energy and water supply, and decide when it is worth the sweat of digging.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Lesson 2 was about finding water that already exists. This lesson is about **making water arrive** — from rain, snow, dew, fog, plants and soil. The recurring question is the same as in lesson 1: **how many litres do I get for how much sweat, time and fuel?**

### Rain: the best improvised source

A millimetre of rain is a litre on every square metre. A tarp, poncho, emergency blanket, bin bag, rock slab or roof turns a passing shower into litres. What matters is the **horizontal footprint** the rain falls on — tilting a tarp to make it drain *reduces* the area that catches rain.`,
    },
    { type: 'diagram', id: 'rain-catchment', caption: 'V = A × R × η. A 6 m² footprint in a 10 mm shower gives ~48 L at 80 % capture.' },
    {
      type: 'table',
      head: ['Rain', 'Rate', '2 × 3 m tarp, 1 h (η = 0.8)'],
      rows: [
        ['Light', '< 2.5 mm/h', 'up to ~12 L'],
        ['Moderate', '2.5–7.5 mm/h', '~12–36 L'],
        ['Heavy', '> 7.5 mm/h', '36+ L'],
        ['Tropical thunderstorm', '20–50 mm in an hour', '~100–240 L — more than you can store'],
      ],
      caption: 'Rain-rate categories as used by weather services; yields assume a horizontal 6 m² footprint.',
    },
    {
      type: 'md',
      md: `**Collect cleanly.**
- Rinse the surface with the **first flush** (roughly the first millimetre or first few minutes) and discard it: it carries dust, bird droppings and leaf litter.
- Choose clean surfaces. Avoid roofs with lead flashing, treated timber, asbestos-cement or bitumen sheeting, and vehicle roofs coated in road grime.
- Funnel the lowest corner into a container with a small opening; cover it after the storm.
- Rain collected cleanly is usually low in pathogens, but after it touches a roof or tarp **treat it** — low-risk is not no-risk.
- Have containers ready **before** the storm. People with tarps often collect only what one bottle can hold.

### Snow and ice: water that costs fuel

Snow is water, but melting it takes a lot of energy: about **334 kJ per kg** just to change ice to water — as much as heating that water from 0 °C to 80 °C. Eating snow takes that heat from your body (Stage 1); melt it in a pot instead.

- **Prefer liquid water** (lake outlets, open streams, holes chopped in ice) when available and treat it; it saves most of the fuel.
- **Ice beats snow:** same energy per kg, but ice gives far more water per pot-load and per trip. Fresh powder may be only 5–10 % water by volume.
- **Start with a little liquid** in the pot (from your bottle) to avoid scorching the pot and the "burnt" taste, then add snow gradually.
- **Insulate** the stove from the snow and shield it from wind; use a lid.

### Dew, fog and transpiration: small, slow, sometimes useful

**Dew** forms when a surface cools by radiating heat to a clear night sky and drops below the air's dew point (Stage 1 radiation). Best on **clear, calm, humid nights** on thin surfaces insulated from the ground: grass, a tarp on a frame, car roofs. Wipe with an absorbent cloth before sunrise and wring it out. Yields are usually a fraction of a litre per square metre per night — a morale boost, not a supply.

**Fog** collection works where fog is persistent and windy (coastal deserts of Chile, Peru, Namibia, Morocco): fine mesh intercepts droplets. Permanent nets there can yield several litres per square metre per day; an improvised net is far less.

**Transpiration bags:** a clear plastic bag tied over a leafy branch in the sun traps water the plant draws from its roots. Yields are typically tens to a few hundred millilitres per bag per day. Use only plants you **know** are not toxic (this course does not teach plant ID); the condensate can pick up plant compounds.

### Solar stills: understand the numbers before you dig

A pit still — a hole covered with clear plastic, a small stone making a low point over a cup — distils water from damp soil, plant material or liquid you pour in. The classic tests (Jackson & van Bavel, 1965) produced about **1.5 L/day** from a ~1 m pit **in the best case**. Real-world yields are often far lower, especially in dry sand.`,
    },
    { type: 'diagram', id: 'solar-still-section', caption: 'A still is a low-efficiency solar evaporator. At best ~15 % of the sunlight on its opening ends up in the cup.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Why stills so often lose water',
      md: 'Digging a 1 m pit is 30–90 minutes of hard work. At midday in the desert that costs **1–2 L of sweat** — more than a still in dry sand yields in several days. Stills are worth building when (1) you will stay **several days**, (2) the soil is **damp** or you have **non-potable liquid** to pour in, (3) you can dig in the **cool hours**, and (4) you have no better option. Their real superpower: turning **seawater, urine or contaminated water** into drinkable distillate, because salts, metals and microbes do not evaporate.',
    },
    { type: 'sim', id: 'solar-still', caption: 'Four decisions: build or don’t? Try the noon gravel plain, then the damp wash, then the coast with seawater.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law and ethics',
      md: 'Cutting vegetation for stills or transpiration bags, digging pits, and camping to collect water may be restricted in parks and protected areas; rules vary by jurisdiction. In an emergency, life comes first — otherwise practise on your own land or with permission, fill pits in, and pack out plastic.',
    },
  ],
  whyItMatters: 'Improvised collection ranges from excellent (rain on a tarp: tens of litres in an hour) to worse than useless (a solar still dug at noon in dry sand). Knowing the numbers lets you put your effort where the litres are — and stops you spending the water inside you to chase a few millilitres outside.',
  science: [
    {
      type: 'md',
      md: `### Rain yield

In words: the volume equals the horizontal area the rain falls on, times the depth of rain, times the fraction you actually capture.

$$
V\\,(\\text{L}) = A\\,(\\text{m}^2) \\times R\\,(\\text{mm}) \\times \\eta
$$

Why 1 mm on 1 m² is 1 L: $1\\,\\text{m}^2 \\times 0.001\\,\\text{m} = 0.001\\,\\text{m}^3 = 1\\,\\text{L}$.

**Worked example.** A 3 × 4 m tarp pitched as a gentle slope has a horizontal footprint of about 3 × 3.6 m ≈ 10.8 m². An afternoon storm drops 15 mm. With splash, spills and the first flush discarded, η ≈ 0.75:
$V = 10.8 \\times 15 \\times 0.75 \\approx 120$ L — several days of water for a small group, if you have containers.

### Fuel to melt snow

In words: warm the snow to 0 °C, melt it, then warm the water — each step needs heat; divide by the fuel's usable energy.

$$
Q = m\\,[c_{ice}\\,\\Delta T_1 + L_f + c_w\\,\\Delta T_2]
$$

with $c_{ice} ≈ 2.09$ kJ/(kg·K), $L_f ≈ 334$ kJ/kg, $c_w ≈ 4.19$ kJ/(kg·K).

**Worked example.** 1 kg of snow at −10 °C to drinkable water at 5 °C:
$Q = 2.09 \\times 10 + 334 + 4.19 \\times 5 ≈ 21 + 334 + 21 = 376$ kJ.
A canister stove delivers roughly half of the gas's ~46 MJ/kg to the pot in calm conditions (≈ 23 kJ per gram), so ≈ **16 g of gas per litre** — and ≈ 30–35 g per litre if you also bring it to a boil. For 4 L/day over 4 days that is 260–560 g of gas: **plan fuel as water**.

### Solar still: the energy ceiling

Evaporating water takes about 2.4 MJ per litre. A desert site receives ~25–30 MJ per m² on a clear summer day; a winter or cloudy day far less.

$$
Y_{max} = \\frac{\\eta \\times H \\times A}{2.4}
$$

With $\\eta ≈ 0.15$ (best case), $H = 28$ MJ/m²/day and a 0.9 m pit ($A = 0.64$ m²): $Y_{max} = 0.15 \\times 28 \\times 0.64 / 2.4 ≈ 1.1$ L/day. That is a **ceiling**: if the soil is dry, the pit runs out of water to evaporate long before it runs out of sunshine, and damp soil dries a little more each day. Then subtract the sweat of digging.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Tropical coast or rainforest.** Afternoon storms deliver more water than any other method. Rig a tarp or large leaves into a funnel before the storm; fill every container; treat and store.

**Coastal desert.** Rain is rare; fog may be common. A solar still fed with seawater, dug at dawn in damp sand, can produce around a litre a day — a real supplement if you are there for days.

**Arctic and high mountains.** The limiting resource is **fuel**, not water. Find open water where safe; otherwise melt ice rather than powder, keep a lid on, and make hot drinks part of the melt routine. A dark bag of snow on a sunny rock can pre-melt some water for free.

**Temperate forest.** Streams are usually available; stills and dew are pointless. A tarp in rain is a bonus. The effort belongs in treatment, not collection.

**Urban emergency.** Roof gutters and downpipes can fill buckets fast in rain, but roofs collect bird droppings, dust and sometimes lead — discard the first flush and treat. In wildfire smoke or after industrial fires, roof runoff may carry ash and chemicals.

**Sea survival.** Life-raft doctrine: collect rain from the canopy (rinse salt off first), keep the first water separate, and never drink seawater. Some rafts carry solar stills or hand-pumped reverse-osmosis units.`,
    },
  ],
  mistakes: [
    'Measuring a tarp by fabric area instead of the horizontal footprint that faces the rain.',
    'Having nothing ready to store rain when the storm arrives.',
    'Keeping the first flush of dust and bird droppings from a roof or tarp.',
    'Eating snow instead of melting it — costs body heat (Stage 1).',
    'Melting powder snow when ice or open water is nearby.',
    'Myth: "A solar still will supply a person’s daily water." Best case ~1–1.5 L/day from a ~1 m pit; often much less, and digging in heat can cost more than it yields.',
    'Building a still at noon on dry ground, or when you plan to move on tomorrow.',
    'Putting transpiration bags on plants you cannot positively identify as non-toxic.',
  ],
  exercises: [
    {
      id: 's4-l3-e1',
      title: 'Measure a tarp catchment',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Tarp or poncho', 'Cord and pegs', 'Bucket or bottles', 'Straight-sided container as a rain gauge', 'Ruler'],
      steps: [
        'Before forecast rain, pitch the tarp in a garden or legal campsite so one low corner drains into a container.',
        'Measure its horizontal footprint (m²). Put a straight-sided gauge nearby.',
        'After the rain, measure rainfall depth (mm) in the gauge and the litres collected.',
        'Compute your efficiency η = V / (A × R). What lost water: splash, sag pools, wind?',
        'Improve the rig and compare on the next rain.',
      ],
      success: ['Measured η for your rig.', 'A written estimate of how many litres your kit tarp gives per 10 mm of rain.'],
      skill: 'water-finding',
    },
    {
      id: 's4-l3-e2',
      title: 'Dew cloth and transpiration bag: measure, don’t drink',
      level: 3,
      safety: 'outdoor',
      minutes: 30,
      materials: ['Absorbent cloth', 'Clear plastic bag and tie', 'Measuring jug', 'A leafy plant you know well (e.g., your own garden shrub)'],
      safetyNote: 'This is a measurement exercise: do not drink the water. Use only plants you have positively identified yourself; avoid known toxic ornamentals such as oleander.',
      steps: [
        'On a clear, calm evening, lay the cloth on a board raised off the lawn. Before sunrise, wring it into the jug and note millilitres per square metre.',
        'Tie a clear bag over a sunny leafy branch in the morning; weigh or measure the water at sunset.',
        'Compare both with your lesson-1 water need. How many bags or square metres would one person need?',
      ],
      success: ['Two measured yields with conditions noted.', 'A written conclusion on when these methods are worth the effort.'],
      skill: 'water-finding',
    },
  ],
  simulations: ['solar-still', 'water-advanced'],
  quiz: [
    {
      id: 's4-l3-q1',
      kind: 'numeric',
      prompt: 'A tilted tarp has a horizontal footprint of 2.5 m × 2 m. A shower drops 12 mm. With 75 % capture, how many **litres** do you collect?',
      unit: 'L',
      answer: 45,
      tolerance: 1,
      concepts: ['water-collection'],
      explanation: '5 m² × 12 mm × 0.75 = **45 L**.',
    },
    {
      id: 's4-l3-q2',
      kind: 'numeric',
      prompt: 'Melting snow at −10 °C into 5 °C water needs about 376 kJ per litre. A canister stove delivers about 23 kJ per gram of gas. How many **grams** of gas to make 3 L (no boiling)?',
      unit: 'g',
      answer: 49,
      tolerance: 3,
      concepts: ['snowmelt'],
      explanation: '3 × 376 = 1,128 kJ; 1,128 / 23 ≈ **49 g**. Boiling it too roughly doubles that.',
    },
    {
      id: 's4-l3-q3',
      kind: 'order',
      prompt: 'Order the steps for collecting rain from a shed roof in an emergency.',
      items: [
        { id: 'inspect', text: 'Check the roof and gutter materials (no lead flashing, treated timber, heavy grime)' },
        { id: 'ready', text: 'Place clean containers under the downpipe before the rain' },
        { id: 'flush', text: 'Divert and discard the first flush' },
        { id: 'collect', text: 'Collect, cover the containers' },
        { id: 'treat', text: 'Treat before drinking and store safely' },
      ],
      answer: ['inspect', 'ready', 'flush', 'collect', 'treat'],
      concepts: ['water-collection', 'safe-storage'],
      explanation: 'Choose a safe surface, be ready before it rains, lose the dirty first flush, collect and cover, then treat.',
    },
    {
      id: 's4-l3-q4',
      kind: 'single',
      prompt: 'Why does a solar still often **lose** water for the builder?',
      choices: [
        { id: 'a', text: 'The plastic absorbs the water', why: 'Plastic does not absorb meaningful water.' },
        { id: 'b', text: 'Its yield is capped by sunlight and soil moisture at around a litre a day at best, while digging in heat can cost 1–2 L of sweat', why: 'Correct — low yield vs high sweat cost, especially in dry soil at midday.' },
        { id: 'c', text: 'Distilled water cannot be absorbed by the body', why: 'Distilled water hydrates perfectly well.' },
        { id: 'd', text: 'Stills only work at night', why: 'They need sunshine to evaporate water.' },
      ],
      answer: 'b',
      concepts: ['solar-still'],
      explanation: 'Energy ceiling ≈ 0.15 × H × A / 2.4 L/day; supply often lower. Build only when the maths is positive over your stay.',
    },
    {
      id: 's4-l3-q5',
      kind: 'multi',
      prompt: 'Which conditions favour **dew** collection?',
      choices: [
        { id: 'a', text: 'Clear sky', why: 'Yes — radiative cooling to the sky drives dew formation.' },
        { id: 'b', text: 'Calm air', why: 'Yes — wind mixes warmer air onto the surface and stops it cooling.' },
        { id: 'c', text: 'Humid air', why: 'Yes — a higher dew point means more condensation.' },
        { id: 'd', text: 'A thick cloud blanket', why: 'No — clouds radiate back and stop the surface cooling.' },
        { id: 'e', text: 'A thin surface raised off the ground', why: 'Yes — it cools quickly without heat from the ground.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['water-collection'],
      explanation: 'Dew is radiation physics: surfaces facing a clear sky on a calm, humid night cool below the dew point.',
    },
    {
      id: 's4-l3-q6',
      kind: 'single',
      prompt: 'Where does a solar still add the **most** value?',
      choices: [
        { id: 'a', text: 'Temperate forest beside a stream', why: 'Treating the stream water is far cheaper.' },
        { id: 'b', text: 'Dry gravel desert, built at noon, leaving tomorrow', why: 'The worst case: dry soil, midday sweat, one partial day.' },
        { id: 'c', text: 'A dry coast where you can pour seawater into it for several days', why: 'Correct — it desalinates water no other field method can.' },
        { id: 'd', text: 'Snowfield', why: 'Melting snow with a stove or the sun on dark fabric works better.' },
      ],
      answer: 'c',
      concepts: ['solar-still'],
      explanation: 'Distillation separates water from salts, metals and microbes — its unique advantage.',
    },
    {
      id: 's4-l3-q7',
      kind: 'truefalse',
      prompt: 'Tilting a tarp more steeply to make it drain faster increases the amount of rain it catches.',
      answer: false,
      concepts: ['water-collection'],
      explanation: 'Rain falls roughly vertically; catch depends on the **horizontal** footprint, which shrinks as you tilt. Use just enough slope to drain.',
    },
  ],
  scenario: {
    id: 's4-l3-sc',
    setup: 'Subarctic, late winter, −12 °C, clear. You are weather-bound in a hut for 4 days with a canister stove and 230 g of gas, a pot, chlorine dioxide tablets, and a lake whose outlet stream runs open 300 m away over easy ground. Snow is everywhere.',
    question: 'What is your water plan?',
    choices: [
      { id: 'a', text: 'Eat snow as you go to save gas.', why: 'Costs body heat (334 kJ per kg just to melt) and chills you — Stage 1 heat balance.' },
      { id: 'b', text: 'Melt powder snow for all water (~4 L/day).', why: '16 g/L × 16 L ≈ 260 g — more gas than you have, with nothing left for hot drinks or boiling.' },
      { id: 'c', text: 'Collect from the open outlet in daylight, treat with chlorine dioxide (long contact in cold water), and keep the gas for hot drinks and emergencies; melt ice, not powder, only if the outlet freezes.', why: 'Best: liquid water saves most of the fuel; ClO₂ works in cold water given time; ice beats powder as backup.' },
      { id: 'd', text: 'Drink as little as possible to stretch the gas.', why: 'Cold-weather dehydration impairs judgment and increases cold injury risk.' },
    ],
    best: 'c',
    debrief: 'In the cold, **fuel is water**. Liquid sources save the 334 kJ/kg melting cost; chemical treatment in cold water needs longer contact (lesson 5), and hot drinks made from treated water help your heat balance. Keep the outlet trips short, in daylight, on safe ice-free ground.',
    concepts: ['snowmelt', 'water-budget', 'heat-balance'],
  },
  summary: [
    'Rain: V = footprint × mm × η; 1 mm on 1 m² = 1 L. Discard the first flush; have containers ready.',
    'Snow: 334 kJ/kg to melt → ~16 g gas per litre (≈ double with boiling). Prefer open water, then ice.',
    'Dew, fog and transpiration: real but small; don’t bet your life on them.',
    'Solar still: ceiling ≈ 0.15 × H × A / 2.4 L/day, often less. Dig only in cool hours, damp soil, multi-day stays — or to distil seawater/urine.',
  ],
  furtherReading: ['jackson-vanbavel-1965', 'army-atp-3-50-21'],
  references: ['jackson-vanbavel-1965', 'army-atp-3-50-21', 'afh-10-644', 'cdc-emergency-water', 'usariem-cold'],
}
