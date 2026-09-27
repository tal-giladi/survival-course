import type { Lesson } from '../../types'

export const l12: Lesson = {
  id: 's1-l12',
  stage: 1,
  order: 12,
  title: 'Basic water',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l7'],
  concepts: ['water-needs', 'dehydration', 'water-treatment'],
  objectives: [
    'Estimate your **daily water need** from baseline plus sweat losses.',
    'Recognise the **signs of dehydration** and why "ration sweat, not water" is the rule.',
    'Rank water **sources** by likely contamination.',
    'Treat water correctly by **boiling, chemical disinfection, filtration or UV**, knowing what each does not remove.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### How much water do you need?

The US Institute of Medicine sets adequate **total** water intake (drinks + food) at about **3.7 L/day for men** and **2.7 L/day for women** in temperate conditions — roughly 80 % from drinks. On top of that come **sweat losses**, which vary enormously:

| Situation | Typical sweat rate |
|---|---|
| Resting in shade, mild | ~0.1 L/h |
| Walking in mild weather | 0.3–0.6 L/h |
| Hiking uphill in heat | 0.8–1.5 L/h |
| Hard work in desert sun | 1–2+ L/h |

A useful planning model: **baseline ≈ 2–3 L/day + sweat rate × hours active**. Heat, altitude, cold dry air (you lose water breathing) and illness all raise the need.

### Dehydration

Losing about **2 % of body mass** as water measurably degrades endurance and thinking. Signs: thirst, dark and scanty urine, headache, fatigue, dizziness on standing, irritability. Severe dehydration leads to confusion, rapid pulse and collapse — and makes heat illness and hypothermia more likely.

**Ration sweat, not water.** Hoarding water while you sweat it away achieves nothing — the water is more useful inside you. Instead, *reduce losses*: rest in shade during the heat of the day, move in the cool hours, keep clothing on in desert sun, breathe through the nose, don’t eat much if water is very short (digestion uses water).`,
    },
    {
      type: 'md',
      md: `### Sources, from usually safer to riskier

1. **Rain and fresh snowmelt** collected on clean surfaces — usually low in pathogens.
2. **Springs** emerging directly from rock — often good, but not guaranteed.
3. **Fast-flowing streams** high in the catchment, above people and livestock.
4. **Large lakes**, collected away from the shore.
5. **Slow rivers** downstream of farms, settlements or roads.
6. **Stagnant pools, puddles, cattle troughs** — high risk; also possible **algal toxins** (green scum or paint-like films — avoid entirely).

**Chemical contamination** (mines, agriculture, industry, flood water) is *not* removed by boiling, chlorine or most filters. Clear, cold and fast-flowing water can still carry Giardia or Cryptosporidium. **Treat all wild water** unless you have strong reasons not to.`,
    },
    { type: 'diagram', id: 'water-methods', caption: 'What each method handles. Combine methods for broad coverage.' },
    {
      type: 'md',
      md: `### Treatment methods

- **Boiling** — the gold standard for pathogens. Bring to a **rolling boil for 1 minute**; **3 minutes above about 2,000 m (6,500 ft)**, per the US CDC. Costs fuel and time; does not remove chemicals.
- **Chlorine (unscented household bleach or tablets)** — kills bacteria and viruses; weak against Giardia and **ineffective against Cryptosporidium**. CDC emergency guidance: for 6 % bleach, about **8 drops per gallon (≈2 drops per litre)**; double for cloudy or very cold water; wait **30 minutes**; there should be a slight chlorine smell.
- **Chlorine dioxide tablets/drops** — broader: bacteria, viruses, Giardia; Cryptosporidium with longer contact (often **4 hours** — follow the product instructions).
- **Filters** — hollow-fibre or ceramic filters rated **0.1–0.2 µm** remove bacteria and protozoa but generally **not viruses**. Some "purifiers" also remove viruses. Filters clog in turbid water.
- **UV pens** — effective against all pathogen classes **in clear water**; shadows from particles protect microbes. Needs batteries.

**Pre-treat turbid water:** let it settle, then pour it through a cloth or bandana. Clearer water makes every method work better.

**Belt and braces:** filter + chemical, or filter + UV, covers the gaps of each.

**Store safely:** clean containers with lids; don’t dip hands or cups into treated water; keep treated and untreated containers (and their threads) separate.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Do not drink',
      md: 'Seawater, urine, blood, alcohol, or water with algal scum. Seawater and urine add salt your kidneys must excrete using more water than they provide. Alcohol increases fluid loss and impairs judgment and thermoregulation.',
    },
  ],
  whyItMatters: 'Dehydration is fast in heat, subtle in cold, and degrades the judgment you need for every other decision. Contaminated water can turn a survival situation into a medical one days later. Water planning and treatment are basic hygiene for every trip.',
  science: [
    {
      type: 'md',
      md: `### Why chlorine needs time: the CT concept

Chemical disinfection depends on **concentration × contact time** ($CT$, in mg·min/L). A pathogen needs a certain $CT$ to be inactivated. Lower the concentration (or make the water colder, which slows the chemistry) and you need proportionally longer. Cryptosporidium’s tough oocyst wall needs a $CT$ for chlorine far beyond what is practical to drink — hence "ineffective".

### Estimating a day’s need

Total drinking need ≈ baseline + (sweat rate × active hours).

Example: baseline 2.5 L; 6 hours hiking at 0.7 L/h:
$2.5 + 0.7 \\times 6 = 6.7$ L. In a desert at 1.2 L/h for the same hours: $2.5 + 7.2 = 9.7$ L. Planning without the sweat term is how people run out.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain stream above a cattle pasture:** looks perfect, likely contaminated. Filter + chemical, or boil.

**Desert:** water is the limiting resource. Carry far more than seems necessary, travel in cool hours, and note that desert water sources (tinajas, seeps) may be stagnant and shared with animals.

**Subarctic:** snow is everywhere, but melting it costs fuel; do not eat snow (it cools you). Melt a little water in the pot first, then add snow, to avoid scorching.

**Coastal:** surrounded by undrinkable water; collect rain on a tarp.

**Urban emergency:** the tap may run but be contaminated after a flood or earthquake; follow boil-water notices. Stored water and the hot-water tank are reserves (Stage 16).`,
    },
  ],
  mistakes: [
    'Hoarding water while sweating heavily — ration sweat, not water.',
    'Assuming clear, cold, fast water is safe.',
    'Relying on chlorine alone where Cryptosporidium is a concern.',
    'Using a filter as if it removes viruses or chemicals.',
    'Contaminating treated water with untreated drips on bottle threads or dirty hands.',
    'Eating snow instead of melting it.',
  ],
  exercises: [
    {
      id: 's1-l12-e1',
      title: 'Measure your water turnover',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Bathroom scale (±0.1 kg ideally)', 'Water bottle with volume marks'],
      steps: [
        'Weigh yourself (minimal clothing) before and after a one-hour walk or workout. Note how much you drank during it.',
        'Sweat loss ≈ weight before − weight after + water drunk (1 kg ≈ 1 L).',
        'Repeat in different weather. Build your personal table of sweat rates.',
      ],
      success: ['You have at least two measured sweat rates.', 'You can compute a day’s water plan for a trip from your own numbers.'],
      skill: 'water-treatment',
    },
    {
      id: 's1-l12-e2',
      title: 'Treat water two ways',
      level: 3,
      safety: 'home',
      minutes: 45,
      materials: ['Pot and stove/kettle', 'Unscented household bleach or purification tablets', 'Dropper', 'Clean bottles', 'Cloth'],
      safetyNote: 'Use only unscented bleach intended for disinfection; check its concentration on the label. Do this with tap water for practice.',
      steps: [
        'Pre-filter a litre of (tap) water through a cloth to practise the technique.',
        'Boil a litre at a rolling boil for 1 minute; let it cool covered.',
        'Chemically treat a litre using the dose on your product or the CDC bleach table; wait the full contact time.',
        'Write the dosing arithmetic for 1 L, 2 L and 1 gallon on your kit card.',
      ],
      success: ['Both methods done with correct time/dose.', 'Dosing table written on your kit card.'],
      skill: 'water-treatment',
    },
  ],
  simulations: ['water-treatment'],
  quiz: [
    {
      id: 's1-l12-q1',
      kind: 'numeric',
      prompt: 'Baseline need 2.5 L/day. You will hike 5 hours at a sweat rate of 0.9 L/h. Estimate total drinking water for the day in **litres**.',
      unit: 'L',
      answer: 7,
      tolerance: 0.1,
      concepts: ['water-needs'],
      explanation: '2.5 + 0.9 × 5 = **7.0 L**.',
    },
    {
      id: 's1-l12-q2',
      kind: 'single',
      prompt: 'Which method is **ineffective** against *Cryptosporidium* at practical doses?',
      choices: [
        { id: 'a', text: 'Boiling', why: 'Boiling inactivates it.' },
        { id: 'b', text: 'Chlorine (bleach)', why: 'Correct — its oocyst wall resists chlorine.' },
        { id: 'c', text: '0.2 µm filter', why: 'Filters remove it (oocysts are ~4–6 µm).' },
        { id: 'd', text: 'UV in clear water', why: 'UV inactivates it.' },
      ],
      answer: 'b',
      concepts: ['water-treatment'],
      explanation: 'Chlorine dioxide with long contact, boiling, filters and UV handle Crypto; plain chlorine does not.',
    },
    {
      id: 's1-l12-q3',
      kind: 'single',
      prompt: 'How long should you boil water at 2,500 m altitude, per CDC guidance?',
      choices: [
        { id: 'a', text: 'Just until the first bubbles appear', why: 'Not enough.' },
        { id: 'b', text: 'Rolling boil for 1 minute', why: 'That is the guidance below ~2,000 m.' },
        { id: 'c', text: 'Rolling boil for 3 minutes', why: 'Correct — water boils at a lower temperature at altitude.' },
        { id: 'd', text: '20 minutes', why: 'Unnecessary and wastes fuel.' },
      ],
      answer: 'c',
      concepts: ['water-treatment'],
      explanation: 'Above ~2,000 m (6,500 ft), boil for 3 minutes.',
    },
    {
      id: 's1-l12-q4',
      kind: 'multi',
      prompt: 'Which are signs of dehydration?',
      choices: [
        { id: 'a', text: 'Dark, scanty urine', why: 'Yes.' },
        { id: 'b', text: 'Headache and fatigue', why: 'Yes.' },
        { id: 'c', text: 'Dizziness on standing', why: 'Yes.' },
        { id: 'd', text: 'Frequent, pale urine', why: 'No — that suggests good hydration.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['dehydration'],
      explanation: 'Thirst, dark urine, headache, fatigue, dizziness, irritability; later confusion and collapse.',
    },
    {
      id: 's1-l12-q5',
      kind: 'truefalse',
      prompt: 'In a survival situation with limited water in desert heat, you should sip as little as possible to make the water last longer.',
      answer: false,
      concepts: ['dehydration', 'water-needs'],
      explanation: '"Ration sweat, not water." Drink what you need and cut losses: shade, rest in the heat, move in the cool hours.',
    },
    {
      id: 's1-l12-q6',
      kind: 'single',
      prompt: 'A hollow-fibre filter rated 0.1 µm is used on stream water. Which hazard class remains the main concern?',
      choices: [
        { id: 'a', text: 'Bacteria', why: 'Removed.' },
        { id: 'b', text: 'Protozoa', why: 'Removed.' },
        { id: 'c', text: 'Viruses (and chemicals)', why: 'Correct — viruses are smaller than the pores; chemicals pass through.' },
        { id: 'd', text: 'Sediment', why: 'Removed (and may clog the filter).' },
      ],
      answer: 'c',
      concepts: ['water-treatment'],
      explanation: 'Add chemical or UV treatment where viruses are a concern (e.g., downstream of people).',
    },
  ],
  scenario: {
    id: 's1-l12-sc',
    setup: 'You are on a 3-day trek. Day 2, 13:00, 32 °C. You have 0.5 L left and a 0.2 µm filter; your chlorine tablets were lost. Options: (1) a clear, fast stream 10 minutes away that flows through a village 2 km upstream; (2) a stagnant, greenish pool right here; (3) wait for a forecast thunderstorm at 17:00 to collect rain on your tarp.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Drink from the green pool after filtering — it is closest.', why: 'Green scum may indicate algal toxins, which filters do not reliably remove.' },
      { id: 'b', text: 'Go to the stream now, pre-settle and filter, then boil it at camp if you have a stove; also set the tarp to collect rain later.', why: 'Best: a lower-risk source, filter for bacteria/protozoa, boiling covers viruses from the village, and rain is a bonus.' },
      { id: 'c', text: 'Save your 0.5 L and wait until 17:00 for the storm.', why: 'Rationing water in 32 °C heat while waiting on an uncertain forecast is risky.' },
      { id: 'd', text: 'Drink straight from the stream — fast water is clean.', why: 'A village upstream means likely viral and bacterial contamination.' },
    ],
    best: 'b',
    debrief: 'Pick the lowest-risk source you can reach, then match treatment to the likely hazards: a filter handles bacteria and protozoa; a village upstream means viruses too — boiling covers them. Rain collection is a free extra. Avoid algal water entirely. Don’t ration water in heat.',
    concepts: ['water-treatment', 'water-needs'],
  },
  summary: [
    'Need ≈ baseline 2–3 L/day **plus** sweat (0.3–2 L/h).',
    'Ration sweat, not water. Dehydration degrades judgment before it threatens life.',
    'Treat all wild water. Boil 1 min (3 min above ~2,000 m).',
    'Chlorine misses Crypto; filters miss viruses; UV needs clear water; nothing common removes chemicals.',
  ],
  furtherReading: ['cdc-emergency-water', 'wms-water-2019'],
  references: ['iom-water-2005', 'acsm-fluid-2007', 'cdc-emergency-water', 'epa-emergency-disinfection', 'wms-water-2019', 'who-gdwq'],
}
