import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's8-l4',
  stage: 8,
  order: 4,
  title: 'Heat stress',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s8-l2'],
  concepts: ['heat-illness', 'heat-acclimatisation', 'wbgt', 'evaporative-loss', 'dehydration'],
  objectives: [
    'Explain why, above skin temperature, **evaporation is the only way to lose heat** — and what humidity does to it.',
    'Distinguish **heat exhaustion** from **heat stroke**, with **central nervous system dysfunction** as the dividing line.',
    'State the current first-aid principle for heat stroke — **cool first, transport second**, ideally by cold-water immersion (WMS 2024, ACSM 2023).',
    'Explain **acclimatisation** and use **WBGT** to judge heat-stress risk and plan work and rest.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'info',
      title: 'Educational content — not a substitute for training',
      md: 'Heat stroke is a life-threatening emergency. This lesson explains the physiology and current guidance so you can prevent and recognise it. Hands-on first-aid training (WFA/WAFA/WFR) is where you learn to manage it.',
    },
    {
      type: 'md',
      md: `### Heat in, heat out — when the air is hot

In the heat, the budget from Stage 1 turns around. **Metabolism** still makes heat (walking with a pack: ~350 W, of which ~80 % is heat). **Sun** can add a few hundred watts to exposed skin and dark clothing. And when the air (or the ground, or a rock face) is **hotter than your skin (~35 °C)**, radiation, convection and conduction *add* heat instead of removing it.

That leaves **evaporation of sweat** as the only exit. Sweat cools you only when it **evaporates** — sweat that drips off is lost water with no cooling. Evaporation needs a vapour-pressure difference between wet skin and the air: in **humid** heat it slows, in **dry** heat it is fast but the water bill is huge.

### The heat-illness spectrum`,
    },
    { type: 'diagram', id: 's8-heat-spectrum', caption: 'The heat-illness spectrum. The line that matters: any change in mental status means heat stroke until proven otherwise.' },
    {
      type: 'table',
      head: ['', 'Heat exhaustion', 'Heat stroke'],
      rows: [
        ['Core temperature', 'Usually below 40 °C', 'Usually above 40 °C (may be lower if cooling has begun)'],
        ['Mental status', '**Normal** — may be tired, irritable', '**Abnormal**: confusion, odd behaviour, collapse, seizures, coma'],
        ['Skin', 'Sweaty, pale or flushed', 'Often still sweating in exertional heat stroke — dry skin is **not** required'],
        ['Other signs', 'Headache, nausea, dizziness, weakness, fast pulse', 'As exhaustion, plus CNS dysfunction; organ damage follows'],
        ['Field care', 'Stop, shade, lie down, cool the skin, fluids with salt; improves within ~30 min', '**Cool immediately and aggressively** — cold-water immersion if possible; then evacuate'],
      ],
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Cool first, transport second',
      md: 'In **exertional heat stroke**, the time spent above about 40 °C drives the damage. Current WMS (2024) and ACSM (2023) guidance: start cooling on the spot. **Cold-water immersion** (neck down, stirred water) is fastest. If you cannot immerse: soak with the coldest water available and fan, or rotate ice-water-soaked towels over the whole body, plus ice packs to neck, armpits and groin. Stop active cooling at about **39 °C** if you can measure it (to avoid overshoot) — otherwise when mental status clearly improves — and then evacuate. Do not wait for transport to start cooling.',
    },
    {
      type: 'md',
      md: `### Acclimatisation

Repeated heat exposure with exercise — about **1–2 hours a day for 10–14 days** — produces real adaptations: you **sweat earlier and more**, sweat is **less salty**, **plasma volume** expands, heart rate and core temperature during work fall. Most of the gain comes in the first week; it decays over a few weeks without heat. Acclimatisation reduces risk but does **not** reduce your water needs — it increases them.`,
    },
    { type: 'diagram', id: 's8-acclimatisation', caption: 'Heat acclimatisation develops over roughly 7–14 days (illustrative time courses).' },
    {
      type: 'md',
      md: `### Measuring heat stress: WBGT

Air temperature alone misses humidity and sun. The **wet-bulb globe temperature** (WBGT) combines them, weighted by what matters for sweating people: the natural wet-bulb temperature (humidity + wind), the black-globe temperature (radiant heat, sun) and the dry-bulb air temperature. Military and sports bodies use WBGT categories to set work/rest cycles and water intake.`,
    },
    { type: 'diagram', id: 's8-wbgt', caption: 'WBGT and heat categories (after US Army TB MED 507).' },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Challenge 2: get through a 42 °C desert day on 5 L of water. Compare walking in the sun with resting in shade.' },
  ],
  whyItMatters: 'Exertional heat stroke is one of the few conditions where what a bystander does in the first 30 minutes largely decides survival. It strikes fit people working hard — hikers, soldiers, labourers, athletes — often on days that do not feel extreme. Knowing the dividing line (mental status) and the treatment (cool first) saves lives; so does planning activity around heat.',
  science: [
    {
      type: 'md',
      md: `### How much sweat does the heat demand?

Example: walking in the desert at 40 °C in sun. Heat to remove: metabolic heat ~290 W + solar gain ~150 W + dry gain from hot air ~100 W ≈ **540 W**. Evaporating water removes $2.4\\ \\text{MJ/kg}$, so the evaporation needed is

$$
\\dot m = \\frac{540\\ \\text{W} \\times 3600\\ \\text{s}}{2.4\\times10^{6}\\ \\text{J/kg}} \\approx 0.8\\ \\text{L/h}
$$

and more is actually sweated, because some drips off. Resting in shade cuts metabolic heat by ~70 % and solar gain by most of the rest — the single biggest water-saving action in the desert.

### Humidity and the ceiling on evaporation

Evaporative heat loss is proportional to the difference between the vapour pressure at wet skin (about 5.6 kPa at 35 °C) and the vapour pressure of the air. At 40 °C and 15 % humidity the air holds ~1.1 kPa — a big gradient. At 32 °C and 80 % it holds ~3.8 kPa — a much smaller one, so the **maximum** evaporative cooling is much lower even though the air is cooler. That is why humid heat can be more dangerous than dry heat at a higher temperature.

### WBGT (outdoors, in sun)

$$
\\text{WBGT} = 0.7\\,T_{nwb} + 0.2\\,T_{g} + 0.1\\,T_{db}
$$

In words: 70 % natural wet bulb (humidity and wind), 20 % black globe (sun and radiant heat), 10 % air. Example: $T_{nwb} = 25$ °C, $T_g = 45$ °C, $T_{db} = 35$ °C gives $17.5 + 9 + 3.5 = 30$ °C — a high-risk category where hard work must be sharply limited.

### Cooling rates

Cold-water immersion can cool a heat-stroke patient at roughly **0.15–0.35 °C per minute**; wet-and-fan or rotating ice towels are slower but still far better than nothing. From 42 °C to 39 °C at 0.2 °C/min takes 15 minutes — shorter than most evacuations.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert (Arizona, Negev, Sahara, Outback).** Hikers who start late and climb out of canyons in the afternoon are the classic heat-illness casualties. Local rangers’ advice — travel early and late, rest in shade through the midday hours — is exactly the physics above.

**Humid tropics and coastal regions.** At 32 °C and 80 % humidity, sweat pours off without evaporating. Pace must drop further than the thermometer suggests.

**Mountain.** Glacier travel on a still, sunny day can produce heat exhaustion at an air temperature of 10 °C: reflected sun, hard work and heavy clothing.

**Urban heatwaves.** Older people, the chronically ill and outdoor workers suffer classic (non-exertional) heat stroke over several days in hot, poorly ventilated housing; the principle of rapid cooling is the same.

**Rural and agricultural work.** Fieldworkers early in the season, before acclimatisation, are at highest risk — which is why occupational guidance requires gradual work build-up.`,
    },
  ],
  mistakes: [
    'Waiting for dry skin before suspecting heat stroke — exertional heat stroke victims often still sweat.',
    'Transporting first and cooling later — cool on the spot, then transport.',
    'Assuming fit people are safe — exertional heat stroke is a disease of fit, motivated people working hard.',
    'Myth: salt tablets prevent heat illness. Adequate sodium in food and drink helps with large sweat losses; tablets with little water can cause harm.',
    'Planning by air temperature alone and ignoring humidity, sun and workload.',
    'Pushing on through headache, dizziness or nausea in the heat.',
  ],
  exercises: [
    {
      id: 's8-l4-e1',
      title: 'Plan a hot-day route with WBGT',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['A local weather forecast with temperature and humidity (or a WBGT forecast if your weather service offers one)', 'Paper or spreadsheet'],
      steps: [
        'Pick a real or imagined 15 km hike in a hot place. Find the hourly forecast.',
        'Estimate WBGT for early morning, noon and late afternoon (use a WBGT forecast if available; otherwise note humidity and sun).',
        'Plan start time, rest stops in shade, and turnaround time so the hardest climbing falls in the lowest-WBGT hours.',
        'Compute a water plan: baseline + sweat rate × hours (use 1 L/h for hard walking in heat unless you have measured your own).',
      ],
      success: ['Your plan puts the hardest work in the coolest hours.', 'Your water plan includes a sweat term and a reserve.'],
    },
    {
      id: 's8-l4-e2',
      title: 'Heat-stroke cooling drill (dry run)',
      level: 3,
      safety: 'home',
      minutes: 20,
      materials: ['Partner', 'Tarp or large bin bag', 'Towels', 'Water containers'],
      steps: [
        'Talk through how you would improvise cold-water immersion on a trail: tarp “taco” held up by rescuers and filled with the coldest water available.',
        'Practise laying out the tarp with a partner lying on it (dry run — no water needed) and lifting the edges.',
        'Assign roles: cooler, caller (emergency services), recorder (times, mental status).',
      ],
      success: ['You can set up an improvised immersion tarp in under 3 minutes.', 'Everyone knows their role.'],
      safetyNote: 'This is a rehearsal only. Do not cool healthy people with ice water.',
      skill: 'patient-assessment',
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l4-q1',
      kind: 'single',
      prompt: 'Which single finding most clearly separates heat stroke from heat exhaustion?',
      choices: [
        { id: 'a', text: 'Hot, dry skin with no sweating', why: 'Exertional heat stroke victims often still sweat; dry skin is not required.' },
        { id: 'b', text: 'Confusion or other altered mental status', why: 'Correct — CNS dysfunction (confusion, collapse, seizure) defines heat stroke.' },
        { id: 'c', text: 'A severe, pounding headache', why: 'Common to both.' },
        { id: 'd', text: 'A noticeably fast pulse', why: 'Common to both.' },
      ],
      answer: 'b',
      concepts: ['heat-illness'],
      explanation: 'Any confusion or odd behaviour in the heat is heat stroke until proven otherwise — cool immediately.',
    },
    {
      id: 's8-l4-q2',
      kind: 'single',
      prompt: 'A runner collapses at 35 °C, confused and very hot to touch. A creek is nearby and you have a companion. Which sequence is right?',
      choices: [
        { id: 'a', text: 'Send for help → immerse in creek → monitor while cooling → remove when improving → evacuate', why: 'Correct — cool first, transport second, with help already on the way.' },
        { id: 'b', text: 'Send for help → carry to the trailhead → cool in the vehicle on the way to care', why: 'Transport before cooling wastes the minutes that matter most; cool on the spot.' },
        { id: 'c', text: 'Immerse in creek → remove after 2 minutes → walk them out → call from the road', why: 'Too short to cool, and making a heat-stroke patient walk is dangerous; call early.' },
        { id: 'd', text: 'Send for help → move into shade → monitor airway → start cooling when help arrives', why: 'Waiting to cool lets core temperature stay dangerously high; immersion is the priority.' },
      ],
      answer: 'a',
      concepts: ['heat-illness'],
      explanation: 'Cool first, transport second. Call early so help is on the way while you cool; take them out when clearly improving (or ~39 °C if measurable).',
    },
    {
      id: 's8-l4-q6',
      kind: 'single',
      prompt: 'Heat exhaustion: a hiker is dizzy, nauseated and sweaty but fully alert. Best care?',
      choices: [
        { id: 'a', text: 'Rest in shade, legs up, cool the skin, sip salty fluids; reassess in 30 min.', why: 'Correct — rest, cooling and fluids with electrolytes.' },
        { id: 'b', text: 'Keep walking slowly so you reach the car before it gets worse.', why: 'Continued exertion in heat risks progression.' },
        { id: 'c', text: 'Have them drink as much plain water as possible, as fast as possible.', why: 'Moderate amounts with electrolytes; forcing large volumes of plain water adds hyponatremia risk.' },
        { id: 'd', text: 'Start cold-water immersion straight away, as for heat stroke.', why: 'Needed for heat stroke; heat exhaustion usually responds to rest and cooling — but any mental change changes that.' },
      ],
      answer: 'a',
      concepts: ['heat-illness', 'electrolytes'],
      explanation: 'Heat exhaustion should improve within about 30 minutes of rest and cooling. If mental status changes, treat as heat stroke.',
    },
    {
      id: 's8-l4-q5',
      kind: 'single',
      prompt: 'Compare 32 °C at 80 % humidity with 38 °C at 15 % humidity. Which statement is correct?',
      choices: [
        { id: 'a', text: 'The humid day can be worse, because humidity limits sweat evaporation.', why: 'Correct — humidity caps the maximum evaporative cooling.' },
        { id: 'b', text: 'The hotter day is always worse, because air temperature sets heat stress.', why: 'Air temperature alone misses humidity and radiation; WBGT captures them.' },
        { id: 'c', text: 'They are about equal, because extra sweating offsets the humidity.', why: 'Sweat that cannot evaporate does not cool you.' },
        { id: 'd', text: 'The dry day is worse, because dry air makes sweat evaporate too fast.', why: 'Fast evaporation is what cools you; it is not the hazard.' },
      ],
      answer: 'a',
      concepts: ['wbgt', 'evaporative-loss'],
      explanation: 'Humidity limits the maximum evaporative cooling, so heat stress at 32 °C/80 % can exceed 38 °C/15 %. WBGT captures this; air temperature alone does not.',
    },
    {
      id: 's8-l4-q4',
      kind: 'single',
      prompt: 'Which of these is **not** an effect of 10–14 days of heat acclimatisation?',
      choices: [
        { id: 'a', text: 'Sweating starts earlier and at a higher rate', why: 'A real effect.' },
        { id: 'b', text: 'Sweat becomes less salty', why: 'A real effect — sodium is conserved.' },
        { id: 'c', text: 'Plasma volume expands and heart rate falls', why: 'A real effect — heart rate at a given workload falls.' },
        { id: 'd', text: 'You need less water through the day', why: 'Correct — you sweat more, so you usually need more water.' },
      ],
      answer: 'd',
      concepts: ['heat-acclimatisation'],
      explanation: 'Acclimatisation makes cooling more effective, not cheaper in water: earlier, heavier, less salty sweat and a larger plasma volume.',
    },
    {
      id: 's8-l4-q3',
      kind: 'single',
      prompt: 'Outdoor WBGT = 0.7 wet bulb + 0.2 globe + 0.1 air. Natural wet bulb 24 °C, black globe 48 °C, air 36 °C. What is the WBGT?',
      choices: [
        { id: 'a', text: '30.0 °C', why: 'Correct — 16.8 + 9.6 + 3.6.' },
        { id: 'b', text: '28.8 °C', why: 'This swaps the globe and air weights (0.1 × 48 + 0.2 × 36).' },
        { id: 'c', text: '37.2 °C', why: 'This gives the 0.7 weight to air instead of wet bulb.' },
        { id: 'd', text: '26.4 °C', why: 'This leaves out the 0.1 × air term.' },
      ],
      answer: 'a',
      concepts: ['wbgt'],
      explanation: '0.7×24 + 0.2×48 + 0.1×36 = 16.8 + 9.6 + 3.6 = **30.0 °C** — a high-risk category.',
    },
  ],
  scenario: {
    id: 's8-l4-sc',
    setup: 'Canyon hike, 14:00, 41 °C. Your group of four is 3 km and 400 m of climbing below the rim, with 3 L of water left between you. One member, not acclimatised, has a headache and has vomited once. He is alert and answering sensibly. There is deep shade under an overhang and a shallow, cool pool 200 m back down the trail.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Push on to the rim now, sharing the water, before the afternoon gets hotter.', why: 'The climb out in peak heat is the most dangerous option for someone already showing heat exhaustion.' },
      { id: 'b', text: 'Rest in the shade until about 17:00, cool him with pool water, give sips and salty snacks.', why: 'Best: removes the heat load and treats heat exhaustion — with a clear trigger to call for help if his mental status changes.' },
      { id: 'c', text: 'Give him all the remaining water to drink at once, then continue up.', why: 'Drinking helps but does not remove the heat load; you will be out of water for the climb.' },
      { id: 'd', text: 'Split up: two go ahead for help now while the other two wait here.', why: 'Sending people into peak heat without a clear need adds risk; call if you have signal.' },
    ],
    best: 'b',
    debrief: 'Heat exhaustion with normal mental status: stop, shade, cool, fluids with salt, and re-time the climb for the cooler evening. Set a trigger — any confusion means heat stroke: immerse in the pool and call for rescue.',
    concepts: ['heat-illness', 'daylight', 'water-needs'],
  },
  summary: [
    'Above ~35 °C, sweat evaporation is the only heat exit; humidity limits it.',
    'Heat exhaustion: normal mental status. Heat stroke: CNS dysfunction, usually > 40 °C.',
    'Heat stroke: cool first (cold-water immersion), transport second.',
    'Acclimatisation (10–14 days) improves sweating and circulation — and increases water needs.',
    'WBGT = 0.7 wet bulb + 0.2 globe + 0.1 air; plan work and rest by it.',
  ],
  furtherReading: ['wms-heat-2024', 'acsm-ehi-2023', 'tbmed-507'],
  references: ['wms-heat-2024', 'acsm-ehi-2023', 'tbmed-507', 'niosh-heat', 'nws-heat', 'acsm-fluid-2007'],
}
