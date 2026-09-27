import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's4-l6',
  stage: 4,
  order: 6,
  title: 'Improvised treatment and storage',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s4-l5'],
  concepts: ['improvised-treatment', 'sodis', 'safe-storage', 'turbidity'],
  objectives: [
    'Explain what improvised **sediment filters**, cloth, settling and coagulation do — and why they are **clarifiers, not purifiers**.',
    'Carry out **SODIS** under WHO/CDC conditions and know when it fails.',
    'Use **improvised heat** (boiling without proper kit, pasteurisation) safely.',
    'Store water so treated water **stays** safe, and plan a household emergency supply.',
  ],
  explanation: [
    {
      type: 'md',
      md: `When the filter breaks, the tablets run out or you never had them, you still have physics: gravity, fabric, sunlight and heat. This lesson sorts improvised methods into those that **clarify** (make water clearer and easier to treat) and those that **disinfect** (kill or inactivate pathogens) — and shows how to keep water safe after all that effort.

### Clarifiers: settling, cloth, coagulation, sediment filters

- **Settling:** let water stand in a container for an hour or more (overnight for glacial silt), then pour or siphon off the top without disturbing the bottom.
- **Cloth:** pour through a clean cloth folded several times. Old sari cloth folded 4–8 times has pores around 20 µm — in Bangladesh villages this simple step removed plankton that carry cholera bacteria and cut cholera cases by about **half** (Colwell et al., 2003). A big improvement where nothing else is available — but half is not safe.
- **Coagulation–flocculation:** alum (the CDC Yellow Book suggests about ¼ teaspoon per litre of cloudy water), stirred then left to settle, clumps fine particles and many microbes into flakes that sink. Follow it with cloth and a disinfection step.
- **Improvised sediment filter:** a cut bottle filled with layers of gravel, sand and crushed charcoal. It clarifies silty water nicely.`,
    },
    { type: 'diagram', id: 'sediment-filter', caption: 'A layered bottle filter makes water look clean. It does not make it safe.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Clear is not safe',
      md: 'Sand-and-charcoal bottle filters remove silt and some cysts, but **viruses and most bacteria pass straight through**. Campfire charcoal is **not activated carbon** — it has a fraction of the surface area and does little for chemicals either. Engineered **slow sand (biosand) filters** can remove most bacteria, but only after their biological layer has grown for **weeks**, and they still need a disinfection step. Always follow a clarifier with boiling, chemicals, UV or SODIS.',
    },
    {
      type: 'md',
      md: `### Disinfection with improvised means

**Boiling without a proper pot.** A metal can, a steel bottle (lid off!), or a pot improvised from foil can boil water on coals. Plastic or paper containers can be heated over flame only with great care — it works in principle because water keeps the container below its burning temperature — but they easily melt or fail, spilling boiling water; treat it as a last resort. **Hot-rock boiling** (heating stones in a fire and dropping them into water in a hollow or bark container) is an old technique; stones collected from riverbeds can hold water and **explode** in a fire — use dry stones, never river rocks, and keep your face away.

**Pasteurisation.** Pathogens die at **60 °C held for 30 minutes** (CDC Yellow Book) — reachable in a solar cooker or a black pot in strong sun. Without a thermometer you cannot confirm it, so prefer a rolling boil when you have fuel.

**SODIS (solar water disinfection).** Sunlight’s UV-A and heat together inactivate bacteria, viruses and protozoa in clear water. It is cheap, needs no fuel, and is used by millions of households — **if done correctly**.`,
    },
    { type: 'diagram', id: 'sodis-steps', caption: 'SODIS per CDC/WHO and the Eawag SODIS manual.' },
    {
      type: 'table',
      head: ['Condition', 'Requirement', 'Why'],
      rows: [
        ['Container', 'Clear, colourless **PET** plastic bottle, ≤ 2 L (≤ ~10 cm diameter), unscratched, labels removed', 'UV must reach all the water; coloured, thick or scratched containers block UV-A'],
        ['Water clarity', 'Clear — settle/cloth-filter cloudy water first (Eawag: below ~30 NTU; you should be able to read large print through the full bottle)', 'Particles shade microbes'],
        ['Exposure', 'Lay bottles **flat** in full sun, ideally on a roof or dark/reflective surface', 'Shorter light path, higher temperature'],
        ['Time', '**At least 6 hours** of bright sun; **2 consecutive days** if cloudy (CDC)', 'Dose accumulates; clouds cut UV'],
        ['Not for', 'Continuous rain (collect the rain instead), chemical contamination, salty water', 'Sunlight does not remove chemicals'],
        ['Drinking', 'Drink **directly from the bottle** or pour into a clean cup', 'Avoids re-contamination'],
      ],
    },
    {
      type: 'md',
      md: `### Safe storage: keep treated water treated

Studies of household water repeatedly find that water that was safe at the source becomes contaminated **between the tap and the mouth** — through hands, dippers and dirty containers. Storage is the last barrier.

- Use **clean, food-grade containers with narrow mouths and lids** (or a tap). Pour; **never dip** cups or hands in.
- **Label** treated and untreated containers; keep untreated drips off the threads and caps of treated bottles.
- A **chlorine residual** (0.2–0.5 mg/L, a faint chlorine smell) protects stored water against re-contamination; boiled, UV-, filtered- or SODIS-treated water has none, so keep it covered and use it within a day or two.
- Keep containers cool, dark and away from fuel, pesticides and cleaning chemicals.
- Wash hands before handling drinking water; don’t share drinking bottles.

### A household emergency supply

The CDC and Ready.gov recommend storing **at least 1 gallon (≈3.8 L) per person per day** for drinking and basic hygiene, for **at least 3 days**, and a **2-week supply** if possible — more for hot climates, pregnancy, children, illness and pets. Commercially bottled water is the simplest; if you fill your own, use sanitised food-grade containers (CDC: wash, then rinse with a solution of about 1 teaspoon of unscented bleach per quart of water), fill from a safe tap, label with the date, store at 10–21 °C (50–70 °F), and **replace every 6 months**. Stage 16 builds the full home kit.`,
    },
    { type: 'diagram', id: 'safe-storage', caption: 'The narrow neck and the lid do more for safety than most gadgets.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire rules',
      md: 'Boiling over an open fire is subject to fire bans and campfire rules that vary by jurisdiction and season (Stage 3). In an emergency, keep fires small and attended, on mineral soil, away from overhanging vegetation — and prefer a stove where fires are banned.',
    },
    { type: 'sim', id: 'water-advanced', caption: 'In the tropical river scenario, try settle + SODIS with six bottles, then compare with alum + filter + chlorine. How much water can each chain actually deliver per day?' },
  ],
  whyItMatters: 'Improvised methods are what you have when kit fails — and they are where dangerous misunderstandings live: a charcoal bottle filter that makes water look drinkable, a SODIS bottle left out on a cloudy afternoon, a bucket of carefully boiled water re-contaminated by dipping cups. Knowing which methods clarify and which disinfect, and protecting water after treatment, keeps improvisation from making you sick.',
  science: [
    {
      type: 'md',
      md: `### Clarifier + disinfectant: why the combination works

In words: the clarifier's small log reduction adds to the disinfectant's, and — more importantly — it makes the disinfectant's own log reduction much larger by removing the particles that shield microbes and consume chemicals.

$$
LR_{total} = LR_{clarify} + LR_{disinfect}(\\text{turbidity after clarifying})
$$

**Worked example (from the simulator’s model).** River water at 90 NTU, 28 °C. Chlorine 2 mg/L for 30 min straight into the murky water: organic matter and particles consume essentially all of it — no residual, next to no disinfection. Settle + cloth first (→ ~25 NTU) and the same dose gives ~3 logs for viruses; alum first (→ ~7 NTU) gives ~4, plus ~1 log from the alum itself. Same chemical, same dose, several times more safety.

### SODIS: dose and temperature

SODIS relies on UV-A (320–400 nm) plus mild heating. Its effect is a **dose**: roughly the product of intensity and time. That is why a cloudy day needs **two** days, and why a bottle more than ~10 cm across or full of silt fails — light intensity falls off exponentially with depth in the water, faster in turbid water:

$$
I(z) = I_0 \\, e^{-\\alpha z}
$$

where $\\alpha$ grows with turbidity. If the water heats above ~50 °C, heat and UV act together and inactivation is much faster; that is why dark or reflective backing surfaces help.

### Container volume for storage

In words: people × litres per person-day × days.

**Worked example.** A family of 4 planning 14 days at 3.8 L/person/day: $4 \\times 3.8 \\times 14 ≈ 213$ L — about eleven 20-litre jerry cans, or the contents of a typical water heater plus a few cans.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Tropical village after a storm.** No fuel, sunny days, plenty of PET bottles: settle and cloth-filter well or river water, SODIS on a tin roof for 6 hours, drink from the bottles. Collect rain in cleaned containers.

**Desert.** Strong sun makes SODIS effective; potholes are often clear enough once settled. Lay the bottles on a dark rock or metal sheet in full sun — the extra heat helps. Remember the water still has to be found and carried (lessons 2–3), and that SODIS does nothing for mine-contaminated pools.

**Temperate forest with a broken filter.** Boil if you have a pot and fuel (where fires are legal); otherwise clarify and use your chemical backup with a longer contact time in cold water.

**Arctic.** SODIS is useless in low winter sun; fuel is the method. Keep melted water in insulated bottles so it doesn’t refreeze.

**Urban emergency.** Stored water in the water heater and your own containers first; follow boil-water notices; household bleach per the CDC/EPA table if boiling is impossible. Keep stored water in narrow-neck containers away from garage chemicals.

**Coastal.** None of these methods removes salt; only a still (distillation) or a reverse-osmosis unit does.`,
    },
  ],
  mistakes: [
    'Myth: "A sand-and-charcoal filter purifies water." It clarifies; viruses and most bacteria pass.',
    'Myth: "Campfire charcoal is activated carbon." It is not; its adsorption is far weaker.',
    'Doing SODIS with cloudy water, glass or coloured bottles, large containers, or for only a few hours under cloud.',
    'Using SODIS on water that may be chemically contaminated.',
    'Heating river stones for hot-rock boiling — trapped water can make them explode.',
    'Dipping cups or hands into a bucket of treated water.',
    'Storing emergency water in used milk jugs or containers that held chemicals, or never rotating it.',
    'Myth: "Adding lemon juice or salt makes water safe." Neither reliably disinfects on its own.',
  ],
  exercises: [
    {
      id: 's4-l6-e1',
      title: 'SODIS practice run (with safe tap water)',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Two clear PET bottles (≤ 2 L)', 'A clear and a slightly muddied sample of tap water', 'Newspaper or large print', 'A sunny roof, balcony or dark surface'],
      safetyNote: 'This is practice with tap water. Do not rely on your first SODIS attempt for untreated water; follow the full procedure and conditions.',
      steps: [
        'Check each bottle: PET, clear, unscratched; remove labels.',
        'Do the clarity test: can you read large print through the full bottle from above? Do it for the clear and the muddied sample; settle and cloth-filter the muddy one until it passes.',
        'Lay both bottles flat in full sun for 6 hours; log the weather each hour.',
        'Decide, from your log, whether the run met the CDC conditions or would need a second day.',
      ],
      success: ['You can state the SODIS conditions from memory.', 'You judged correctly whether the day’s sun was enough.'],
      skill: 'water-multibarrier',
    },
    {
      id: 's4-l6-e2',
      title: 'Build and audit your household water store',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Food-grade containers or commercially bottled water', 'Unscented bleach', 'Labels and marker'],
      safetyNote: 'Use unscented household bleach only; follow the label and CDC instructions; never mix bleach with other cleaners.',
      steps: [
        'Compute your target: people × 3.8 L × 14 days (minimum 3 days). Add pets and hot-climate needs.',
        'Sanitise containers per CDC (wash; rinse with ~1 tsp bleach per quart of water; air-dry), fill from a safe tap, cap, label with the date.',
        'Store in a cool, dark place away from chemicals; set a 6-month reminder to rotate.',
        'Locate and note your water heater drain valve and main water shut-off valve.',
      ],
      success: ['A labelled store meeting at least the 3-day target.', 'A rotation reminder and the heater drain procedure written down.'],
      skill: 'water-storage',
    },
  ],
  simulations: ['water-advanced'],
  quiz: [
    {
      id: 's4-l6-q1',
      kind: 'single',
      prompt: 'A bottle filter of gravel, sand and crushed campfire charcoal turns muddy water crystal clear. What should you do next?',
      choices: [
        { id: 'a', text: 'Drink it — it is clear', why: 'Clear is not safe: viruses and most bacteria pass through sand and charcoal.' },
        { id: 'b', text: 'Disinfect it: boil, chemical, UV or SODIS', why: 'Correct — the filter was a clarifier; now the disinfectant will work much better.' },
        { id: 'c', text: 'Run it through the filter twice more', why: 'Repeating a clarifier adds little against viruses and bacteria.' },
        { id: 'd', text: 'Add more charcoal to make it activated carbon', why: 'Campfire charcoal is not activated carbon, and carbon is not a pathogen barrier anyway.' },
      ],
      answer: 'b',
      concepts: ['improvised-treatment'],
      explanation: 'Improvised filters clarify. Pair every clarifier with a disinfection step.',
    },
    {
      id: 's4-l6-q2',
      kind: 'multi',
      prompt: 'Which of these meet the SODIS conditions (CDC/WHO/Eawag)?',
      choices: [
        { id: 'a', text: 'A clear 1.5 L PET bottle laid flat on a tin roof for 6 hours of full sun', why: 'Yes.' },
        { id: 'b', text: 'A green glass bottle in the sun for a day', why: 'No — coloured glass blocks UV-A.' },
        { id: 'c', text: 'A clear 1 L PET bottle on a mostly cloudy day, left out for 2 consecutive days', why: 'Yes — cloud requires two days.' },
        { id: 'd', text: 'A 20 L clear bucket of muddy river water, 6 hours of sun', why: 'No — too deep and too turbid for UV to reach the water.' },
        { id: 'e', text: 'Clear PET bottles during a day of continuous rain', why: 'No — too little UV; collect the rain instead.' },
      ],
      answer: ['a', 'c'],
      concepts: ['sodis'],
      explanation: 'Clear PET, ≤ 2 L, clear water, lying flat, ≥ 6 h sun or 2 days if cloudy.',
    },
    {
      id: 's4-l6-q3',
      kind: 'numeric',
      prompt: 'How many **litres** should a family of 3 store for 14 days at the CDC/Ready.gov minimum of 1 gallon (3.8 L) per person per day?',
      unit: 'L',
      answer: 159.6,
      tolerance: 3,
      concepts: ['safe-storage', 'water-budget'],
      explanation: '3 × 3.8 × 14 = **159.6 L** — about eight 20 L cans. More in heat or with infants, pregnancy, illness or pets.',
    },
    {
      id: 's4-l6-q4',
      kind: 'truefalse',
      prompt: 'Boiled water stored in an open bucket stays safe for days because it was boiled.',
      answer: false,
      concepts: ['safe-storage'],
      explanation: 'Boiled water has no residual disinfectant; hands and cups re-contaminate it. Use covered, narrow-neck containers, pour, and use within a day or two.',
    },
    {
      id: 's4-l6-q5',
      kind: 'single',
      prompt: 'You want to boil water by hot-rock boiling in a bark container. Which stones should you heat?',
      choices: [
        { id: 'a', text: 'Smooth stones from the riverbed — they are clean', why: 'River stones can hold water and burst violently when heated.' },
        { id: 'b', text: 'Dry stones collected well away from water', why: 'Correct — lower risk of steam explosions; still keep your face away.' },
        { id: 'c', text: 'Flint or glassy stones, because they hold heat best', why: 'Glassy stones can shatter when heated and cooled rapidly.' },
        { id: 'd', text: 'Any stone — it makes no difference', why: 'Wet and glassy stones are known to fracture or explode.' },
      ],
      answer: 'b',
      concepts: ['improvised-treatment'],
      explanation: 'Trapped water turns to steam and can split a stone. Use dry stones; tongs or sticks; protect your eyes.',
    },
    {
      id: 's4-l6-q6',
      kind: 'single',
      prompt: 'Cholera villages in Bangladesh used folded sari cloth to filter water. What did the trial show?',
      choices: [
        { id: 'a', text: 'Cloth filtration eliminated cholera', why: 'No — it cut cases by about half.' },
        { id: 'b', text: 'Cloth filtration cut cholera by roughly half by removing plankton that carry the bacteria', why: 'Correct — a big gain from a simple step, but not full protection.' },
        { id: 'c', text: 'Cloth had no measurable effect', why: 'It had a large, statistically significant effect.' },
        { id: 'd', text: 'Cloth removed viruses', why: 'Folded cloth pores are ~20 µm — far too big for viruses.' },
      ],
      answer: 'b',
      concepts: ['improvised-treatment', 'filtration'],
      explanation: 'Simple clarification lowers risk; it doesn’t replace disinfection.',
    },
  ],
  scenario: {
    id: 's4-l6-sc',
    setup: 'Three days after a hurricane on a tropical island. No electricity, no stove fuel, no chlorine. The public well water is slightly cloudy. Days are hot and mostly sunny with afternoon showers. You have a dozen empty clear PET bottles, a few cloths and two buckets with lids.',
    question: 'What is your plan?',
    choices: [
      { id: 'a', text: 'Drink the well water — wells are groundwater and safe.', why: 'Storm flooding often contaminates shallow wells with sewage.' },
      { id: 'b', text: 'Settle the well water in a lidded bucket, pour through folded cloth into PET bottles, lay them flat on a sunny roof for 6 h (2 days if cloudy); also collect afternoon rain into the other lidded bucket; drink from the bottles.', why: 'Best: clarifier + SODIS under correct conditions, plus clean rain, stored safely.' },
      { id: 'c', text: 'Fill both open buckets with well water and put them in the sun for SODIS.', why: 'Buckets are too deep and opaque-ish for UV; open buckets invite re-contamination.' },
      { id: 'd', text: 'Filter the well water through sand and charcoal, then drink.', why: 'Clarifies only; viruses and bacteria pass.' },
    ],
    best: 'b',
    debrief: 'No fuel or chemicals → SODIS is your disinfectant, and it only works if the conditions are met: clear water (settle + cloth), clear PET ≤ 2 L lying flat, 6 h of sun or 2 days under cloud. Rain from clean surfaces is a second source. Store in lidded containers and drink from the bottles. Keep a watch on the forecast: continuous rain means switch to rain collection.',
    concepts: ['sodis', 'safe-storage', 'improvised-treatment'],
  },
  summary: [
    'Settling, cloth, alum and sand/charcoal filters **clarify**; they don’t make water safe on their own.',
    'Disinfect after clarifying: boil (improvised containers with care), pasteurise at 60 °C × 30 min if you can verify it, or SODIS.',
    'SODIS: clear PET ≤ 2 L, clear water, flat in full sun ≥ 6 h (2 days if cloudy); not for chemicals or continuous rain.',
    'Storage: narrow neck, lid, pour don’t dip, label, residual chlorine where possible.',
    'Home supply: ≥ 3.8 L per person per day, 3 days minimum, 2 weeks if possible; rotate every 6 months.',
  ],
  furtherReading: ['cdc-hwt', 'sodis-eawag', 'cdc-water-storage'],
  references: ['cdc-yellowbook-water', 'cdc-hwt', 'cdc-water-storage', 'sodis-eawag', 'who-hwts-round1', 'colwell-sari-2003', 'ready-kit', 'who-gdwq'],
}
