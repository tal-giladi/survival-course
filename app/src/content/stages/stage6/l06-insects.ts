import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's6-l6',
  stage: 6,
  order: 6,
  title: 'Insects and small foods',
  level: 'intermediate',
  minutes: 30,
  prerequisites: ['s6-l3'],
  concepts: ['edible-insects', 'parasites', 'energy-return', 'foraging-law'],
  objectives: [
    'Describe the **nutritional value** of insects and why their energy return depends on season and abundance.',
    'Apply the **safety gates**: legality, safe kinds and clean sources, warning signs, thorough cooking, allergy.',
    'Place insect eating in its **cultural and legal context** rather than treating it as a stunt.',
    'Recognise the hidden risks of other **small foods** (snails, shellfish, eggs) — parasites, toxins and protection laws.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### A normal food for billions

The FAO estimates that insects are part of the traditional diet of **at least 2 billion people**, with more than **1,900 species** recorded as food. Examples include mopane caterpillars in southern Africa, witchetty grubs in Australia, grasshoppers (*chapulines*) in Mexico, crickets and silkworm pupae in Thailand, and palm weevil larvae across the tropics. In these places insects are harvested with local knowledge — which species, which season, how to prepare — and often from managed or seasonal abundance, not random searching.

### Nutrition

Insects are mostly water when fresh, but their dry matter is rich:
- **Protein:** often around a third to over half of dry weight, with good amino-acid quality.
- **Fat:** larvae and pupae (grubs, caterpillars, termites) can be fat-rich — the most energy-dense insects.
- **Micronutrients:** many are good sources of iron, zinc and B vitamins.

Fresh, a rough planning figure is **100–250 kcal per 100 g** — fat-rich larvae at the top. That is similar to lean meat for the same weight, but **gathering a few hundred grams is the hard part**.`,
    },
    { type: 'diagram', id: 'insect-gates', caption: 'Five gates. Any “no” means leave it.' },
    {
      type: 'md',
      md: `### Safety

- **Cook thoroughly** (boil, roast or fry). Insects can carry bacteria and parasites; cooking also improves taste and digestibility. Remove legs and wings from grasshoppers and crickets — spiny legs can injure the throat.
- **Allergy:** insects share allergenic proteins (for example tropomyosin) with **crustaceans and dust mites**. People allergic to shrimp or dust mites may react to insects.
- **Avoid** brightly coloured, hairy, stinging or foul-smelling insects — many advertise genuine toxins or irritant hairs — and insects that feed on carrion or dung, or that carry disease (flies, ticks, mosquitoes). Some caterpillar hairs cause severe skin and eye reactions.
- **Clean sources:** insects concentrate what they eat; avoid sprayed fields, roadsides, mine areas and polluted water.
- **Identify** as carefully as any food — insect identification is a skill too.

### Other small foods — small but not simple

- **Snails and slugs:** in many warm regions, raw or undercooked snails and slugs can transmit **rat lungworm** (*Angiostrongylus*), which causes eosinophilic meningitis. Cook thoroughly; wash hands after handling.
- **Shellfish:** heat-stable algal toxins (s6-l3). Only from open, monitored areas.
- **Bird eggs:** wild birds and their eggs are protected in most countries (for example under migratory-bird treaties). Taking them is usually illegal.
- **Frogs, lizards and other small vertebrates:** often protected; some are toxic; many carry *Salmonella*. Not a course activity.`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Collecting any wildlife — including invertebrates — is prohibited in many national parks and reserves; some insect species are legally protected. Where insects are sold as food, rules differ: in the EU, for example, insects need novel-food authorisation. Check the land manager and national rules: [References → Law varies by jurisdiction](#/references).',
    },
    {
      type: 'md',
      md: `### Energy return: abundance is everything

A seasonal **termite or locust swarm**, harvested the way local people do, can yield kilograms in an hour. **Grubbing under logs** in a cool forest may yield a handful of grubs for an hour of work — and tearing apart rotting logs damages habitat many species depend on. Insects are a meaningful food where they are abundant and the practice is legal and local; they rarely close an energy gap in a short emergency.`,
    },
    { type: 'diagram', id: 'energy-return', caption: 'Model values: gathering food is only worth it when expected gain exceeds cost.' },
    { type: 'sim', id: 'energy-budget', caption: 'Compare insect gathering in the tropical scenario with the subarctic one.' },
  ],
  whyItMatters: 'Insects are genuinely nutritious and, in the right place and season, abundant — a food for billions, not a TV dare. Knowing when they are worth gathering, how to make them safe, and when it is illegal or pointless keeps a sensible option from turning into a wasted afternoon, a parasite, or a fine.',
  science: [
    {
      type: 'md',
      md: `### Net energy of gathering

Net energy per hour $= p \\cdot E_{\\text{catch}} - C$, where $p$ is catches per hour, $E_{\\text{catch}}$ the energy per catch and $C$ the extra energy you spend per hour.

**Cool forest, turning logs:** you find 40 g of grubs per hour at ~250 kcal/100 g → 100 kcal/h gained; bending, lifting and walking cost ~120 kcal/h above rest. Net ≈ **−20 kcal/h** — and your hands and clothes are wet and cold.

**Termite swarm at dusk, warm season:** 500 g in an hour at ~200 kcal/100 g → 1,000 kcal/h for ~100 kcal/h of effort. Net ≈ **+900 kcal/h** — but only for a few evenings a year, and only where it is legal and locally practised.

### Why water content matters

Fresh insects are often 55–70 % water. Drying (traditional sun-drying or roasting) concentrates energy several-fold and preserves them — the same hurdle logic as s6-l2.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Southern African savanna:** mopane caterpillars are harvested seasonally, gutted, boiled and sun-dried — a traded food with a supply chain, not a survival trick.

**Australian desert:** witchetty grubs are gathered from the roots of particular shrubs using traditional knowledge of where to dig.

**Tropical forest:** palm weevil larvae are farmed in felled palms in some regions; wild harvest may require permission from landowners or communities.

**Temperate forest, autumn:** insect numbers fall with temperature; searching yields little and costs warmth.

**Arctic winter:** effectively no insects available.

**Urban:** food-grade cricket flour and roasted mealworms are sold legally in many countries — the safe way to try them.`,
    },
  ],
  mistakes: [
    'Eating insects raw — cook them.',
    'Ignoring a shellfish or dust-mite allergy.',
    'Eating bright, hairy, stinging or foul-smelling insects, or carrion feeders.',
    'Collecting in parks or reserves where all wildlife is protected.',
    'Myth: “Insects are a free lunch anywhere.” Return depends entirely on abundance and season.',
    'Eating raw snails or slugs in warm regions (rat lungworm).',
    'Taking wild bird eggs — protected almost everywhere.',
  ],
  exercises: [
    {
      id: 's6-l6-e1',
      title: 'Try a legal, food-grade insect product',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Commercially produced, food-grade insects or cricket flour where legally sold'],
      steps: [
        'Read the label: species, allergen warnings, energy and protein per 100 g.',
        'Cook or use as directed (e.g., cricket flour in pancakes).',
        'Compare kcal and protein per 100 g with meat, lentils and nuts.',
      ],
      success: ['You can state the energy and protein per 100 g and how it compares with other foods.'],
      safetyNote: 'Skip this if you have a shellfish or dust-mite allergy. Use commercial food-grade products only — not wild-caught insects.',
    },
    {
      id: 's6-l6-e2',
      title: 'Energy-return calculation for three gathering situations',
      level: 1,
      safety: 'home',
      minutes: 20,
      steps: [
        'For each: (a) 30 g/h of beetle larvae in a cool forest; (b) 600 g/h of grasshoppers in a legal seasonal harvest; (c) 10 g/h of ants in a desert.',
        'Assume 200 kcal/100 g and a cost of 120 kcal/h. Compute net kcal per hour.',
        'Write one sentence on when insect gathering is worth it.',
      ],
      success: ['Correct net values: (a) −60, (b) +1,080, (c) −100 kcal/h.'],
      skill: 'energy-planning',
    },
  ],
  simulations: ['energy-budget'],
  quiz: [
    {
      id: 's6-l6-q1',
      kind: 'single',
      prompt: 'Which of these practices does **not** make eating insects safer?',
      choices: [
        { id: 'a', text: 'Cooking them thoroughly before eating', why: 'It does — kills bacteria and parasites.' },
        { id: 'b', text: 'Avoiding brightly coloured, hairy or foul-smelling species', why: 'It does — these are common signs of toxins or irritant hairs.' },
        { id: 'c', text: 'Avoiding insects from sprayed fields and roadsides', why: 'It does — pesticides and pollutants accumulate.' },
        { id: 'd', text: 'Choosing flies found on carrion because they are abundant', why: 'Correct — this is the unsafe one; carrion flies are disease carriers.' },
      ],
      answer: 'd',
      concepts: ['edible-insects'],
      explanation: 'Cook, avoid warning signals, choose clean sources — and check legality and allergy.',
    },
    {
      id: 's6-l6-q5',
      kind: 'single',
      prompt: 'Which statement about collecting insects to eat is correct?',
      choices: [
        { id: 'a', text: 'It is legal anywhere, because insects are not protected wildlife.', why: 'Some insect species are protected, and many reserves ban collecting any wildlife.' },
        { id: 'b', text: 'Parks and reserves may ban it, and some insect species are protected.', why: 'Correct — and selling insects as food is regulated in some places.' },
        { id: 'c', text: 'Only selling insects is regulated; collecting for yourself is fine.', why: 'Collecting itself can be prohibited in parks and reserves.' },
        { id: 'd', text: 'It is legal anywhere outside national parks, whatever the species.', why: 'Some species are protected wherever they are found, and other reserves have rules too.' },
      ],
      answer: 'b',
      concepts: ['foraging-law'],
      explanation: 'Many parks and reserves prohibit collecting any wildlife, some insect species are protected, and sale as food is regulated in some places.',
    },
    {
      id: 's6-l6-q4',
      kind: 'single',
      prompt: 'Why should snails and slugs never be eaten raw in warm regions?',
      choices: [
        { id: 'a', text: 'They contain amatoxins.', why: 'No — that is fungi.' },
        { id: 'b', text: 'They can carry rat lungworm, which causes meningitis.', why: 'Correct.' },
        { id: 'c', text: 'They have too much fat.', why: 'No.' },
        { id: 'd', text: 'They are always illegal to collect.', why: 'Not always — the health risk is the reason.' },
      ],
      answer: 'b',
      concepts: ['parasites'],
      explanation: 'Angiostrongylus larvae are killed by thorough cooking; wash hands after handling.',
    },
    {
      id: 's6-l6-q2',
      kind: 'single',
      prompt: 'Who is most likely to react to eating insects?',
      choices: [
        { id: 'a', text: 'People with a peanut allergy', why: 'Not the main documented cross-reactivity.' },
        { id: 'b', text: 'People allergic to shellfish or dust mites', why: 'Correct — shared proteins such as tropomyosin.' },
        { id: 'c', text: 'People with lactose intolerance', why: 'Unrelated.' },
        { id: 'd', text: 'Nobody — insects are hypoallergenic', why: 'False.' },
      ],
      answer: 'b',
      concepts: ['edible-insects', 'food-poisoning'],
      explanation: 'Crustaceans, dust mites and insects are all arthropods with related allergens.',
    },
    {
      id: 's6-l6-q3',
      kind: 'single',
      prompt: 'You spend 2 hours turning logs and find 50 g of grubs (250 kcal/100 g). The extra effort costs 120 kcal per hour. What is your **net** energy?',
      choices: [
        { id: 'a', text: '+125 kcal', why: 'That counts the food gained but forgets the 240 kcal spent.' },
        { id: 'b', text: '+5 kcal', why: 'That counts only one hour of effort instead of two.' },
        { id: 'c', text: '−365 kcal', why: 'That subtracts the gain instead of adding it (−125 − 240).' },
        { id: 'd', text: '−115 kcal', why: 'Correct — 125 gained minus 240 spent.' },
      ],
      answer: 'd',
      concepts: ['energy-return'],
      explanation: 'Gain 0.5 × 250 = 125 kcal; cost 2 × 120 = 240 kcal; net **−115 kcal**.',
    },
  ],
  scenario: {
    id: 's6-l6-sc',
    setup: 'Temperate forest, late October, 6 °C and drizzle. You are waiting at your broken-down vehicle on a forest road for rescue expected tomorrow; a message is out. You have 1,200 kcal of food, water and warm clothes. A companion suggests spending the afternoon turning logs for grubs “to stretch the food”.',
    question: 'What is the best decision?',
    choices: [
      { id: 'a', text: 'Grub for the afternoon, since the extra protein will help you stay strong.', why: 'Cold season, low abundance: you will spend more energy (and warmth) than you gain, and get wet.' },
      { id: 'b', text: 'Stay dry and warm, ration your food, keep the vehicle visible; skip grubbing.', why: 'Best: the energy return is negative and the real threats are cold and being missed.' },
      { id: 'c', text: 'Grub for the afternoon, but eat them raw to save stove fuel.', why: 'Raw adds parasite risk to a negative energy return.' },
      { id: 'd', text: 'Walk deeper into the forest to look for richer spots to grub.', why: 'Leaves the vehicle (the search target) and costs even more energy.' },
    ],
    best: 'b',
    debrief: 'With rescue expected within a day, 1,200 kcal of food, and cold drizzle, grubbing costs warmth and energy for a negative return, and damages habitat. The highest-value actions are staying dry, staying with the vehicle, and signalling.',
    concepts: ['energy-return', 'stay-or-move', 'heat-balance'],
  },
  summary: [
    'Insects: a traditional food for ≥ 2 billion people; protein- and often fat-rich.',
    'Fresh ≈ 100–250 kcal/100 g; value depends on abundance and season.',
    'Gates: legal → safe kind, clean source → avoid warning signs → cook → allergy check.',
    'Other small foods hide risks: rat lungworm, shellfish toxins, protected eggs and animals.',
    'In a short cold-weather wait, gathering insects usually costs more than it returns.',
  ],
  furtherReading: ['fao-edible-insects-2013', 'fao-insects-safety-2021'],
  references: ['fao-edible-insects-2013', 'fao-insects-safety-2021', 'efsa-novel-food', 'who-five-keys', 'lnt-principles'],
}
