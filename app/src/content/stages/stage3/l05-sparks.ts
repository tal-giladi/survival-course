import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's3-l5',
  stage: 3,
  order: 5,
  title: 'Ferrocerium, flint and steel',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s3-l2'],
  concepts: ['spark-ignition', 'ember-to-flame', 'fuel-selection'],
  objectives: [
    'Explain how **ferrocerium** and **flint-and-steel** sparks form, and why their temperatures and energies differ.',
    'Calculate the **energy in a spark** and use it to explain why spark tinder must be ultra-fine.',
    'Make and use **char cloth**, and turn a glowing ember into flame with a tinder bundle.',
    'Use the **pull-back** ferro technique and the traditional flint-and-steel strike reliably.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A lighter is the best fire starter until it is cold, wet, empty or broken. Spark methods are the backup that almost never fails mechanically — but they only work with the **right tinder**, because a spark carries very little energy.

### Ferrocerium (“ferro rod”)

Ferrocerium is an alloy of **mischmetal** (mostly cerium and lanthanum) with iron and often magnesium. Scraping it with a hard, sharp edge shaves off tiny particles that **ignite spontaneously in air** (the alloy is *pyrophoric*) and burn at around **3,000 °C** — a shower of burning metal.

- Works wet (wipe it dry first), at altitude and in the cold.
- Thousands of strikes per rod; carry the striker attached.
- New rods have a protective coating — scrape it off before you need it.

**Technique — pull back, don’t push:** rest the rod tip *in* the tinder, hold the striker (or knife spine) still at about 45°, and **pull the rod back** firmly along its length. The sparks land where the tinder is and your hand doesn’t knock the nest apart.

### Flint and steel

The traditional method works the other way round: a **hard, sharp stone** (flint, chert, quartzite, agate) shaves tiny slivers off a **high-carbon steel striker**. The heat of the cut makes those iron slivers glow and oxidise as sparks — roughly 800–1,100 °C, far cooler and smaller than ferro sparks. They will **not** light ordinary tinder. They need a **char material** that catches a spark and glows:

- **Char cloth** (charred cotton), charred punk wood, or true tinder fungus (amadou, from *Fomes fomentarius*, processed).
- Hold the char on top of the flint, near the sharp edge; strike the steel **down and across** the edge in a glancing blow. A spark lands on the char and becomes a tiny, spreading glow.
- Place the glowing char in a **tinder bundle** and blow it to flame.

Stainless steel and most knife steels do not spark well from flint; carbon steel strikers do.`,
    },
    { type: 'diagram', id: 'spark-ignition', caption: 'Sparks are hot but tiny: the tinder, not the spark, decides success.' },
    {
      type: 'md',
      md: `### Char cloth: pyrolysis on purpose

Char cloth is made by heating 100 % cotton in a **closed tin with one small hole**. The cotton pyrolyses (lesson 1): volatiles escape as smoke through the hole and may burn as a small jet of flame; without enough oxygen, the cloth cannot burn, so what remains is **char** — almost pure, porous carbon. When smoke stops coming out, the batch is done. Let the tin cool completely before opening, or the char will ignite in the air.

Why it works: porous carbon has a huge surface area, needs no pyrolysis (it is already char), and glows at a few hundred degrees. A single spark is enough to start that glow.

### Ember to flame: the tinder bundle

A spark-caught char, or a friction ember (lesson 6), is **glowing** combustion — no flame yet. To get flame:

1. Prepare a **bird’s-nest bundle** of fine, dry fibres (dry grass, shredded inner bark, fine shavings) before you strike, with a pocket in the middle.
2. Place the ember in the pocket; fold the bundle loosely around it.
3. **Blow gently** and steadily; as smoke thickens, blow harder. The ember heats the fibres around it to pyrolysis, the smoke becomes dense and yellow, then it bursts into flame.
4. Put the flaming bundle into your prepared lay immediately.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Safety',
      md: 'Ferro sparks and char cloth are fire. Strike away from your face and from dry grass, keep fuel canisters and spare fuel away, and have water ready. Char-cloth making involves a hot tin that can flare: do it outdoors in a legal fire, with tongs and gloves.',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Law varies',
      md: 'A spark is an ignition source in law: fire restrictions (for example “no open flame”, “no fireworks, sparks or ignition devices” periods) can include spark practice. Practise striking onto tinder only inside a legal fire pit or on bare, non-flammable ground where fires are allowed.',
    },
  ],
  whyItMatters: 'Redundant ignition is one of the core Ten Essentials. A ferro rod on your kit and the skill to light natural tinder with it means a wet or empty lighter is an inconvenience rather than a crisis — and flint-and-steel teaches the ember-to-flame skill that friction fire also depends on.',
  science: [
    {
      type: 'md',
      md: `### How much energy is in a spark?

Energy stored in a hot particle is mass × specific heat × temperature rise:

$$
E = m\\,c\\,\\Delta T
$$

A large ferro spark particle might have a mass around **0.1 mg** ($10^{-4}$ g). With $c \\approx 0.45$ J/(g·°C) (typical of metals) and $\\Delta T \\approx 3000$ °C:

$$
E \\approx 10^{-4} \\times 0.45 \\times 3000 \\approx 0.14\\ \\text{J}
$$

Heating **0.1 g** of tinder by 300 °C needs $0.1 \\times 1.5 \\times 300 = 45$ J — over **300 sparks’ worth**, delivered at the same instant and place. That will not happen. So a spark cannot heat a *lump* of tinder; it can only ignite **a few fibres fine enough to reach ignition from 0.1 J**, which then grow. That is why spark tinder is fluffed to hair-fine fibres: the first fibre that lights has almost no mass.

The flint-and-steel spark is cooler (~1,000 °C) and smaller, carrying perhaps a tenth of the energy — so it needs a material that is **already char** and glows at a few hundred degrees: char cloth.

### Ember growth

A glowing ember spreads because each burning bit of char heats its neighbours above their ignition temperature. Blowing supplies oxygen (the ember’s rate-limiting reactant) and removes ash; blow too hard too early and you cool it faster than it heats.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Arctic/subarctic, −25 °C:** a butane lighter will not vaporise its fuel; a ferro rod still sparks. Birch bark scraped to fine powder with the striker catches first time.

**Tropical wet forest:** a ferro rod keeps working after a river crossing; carried cotton-and-jelly or coconut husk fibre shredded fine gives the flame.

**Desert:** very dry grass and shredded yucca fibres light from a ferro spark almost instantly — so beware of stray sparks in dry grass.

**Coastal:** matches get damp in salt air; a ferro rod with a lanyarded striker does not care.

**Historical/rural:** flint and steel with char cloth was the everyday fire starter across Europe and colonial North America until matches spread in the 19th century.`,
    },
  ],
  mistakes: [
    'Pushing the striker forward and scattering the tinder — pull the rod back instead.',
    'Using a stainless-steel knife blade or a painted spine as a striker; use the supplied striker or a square, sharp carbon-steel spine.',
    'Striking onto coarse tinder (sticks, bark chunks): the spark has too little energy.',
    'Opening a char-cloth tin before it has cooled — the cloth ignites in the air and burns to ash.',
    'Blowing hard on a fresh ember and cooling it; start gently.',
    'Myth: “Ferro rods are magnesium.” — Magnesium blocks are a different tool (shavings burn very hot but are hard to light in wind); ferro rods are mainly cerium–lanthanum alloy.',
    'Myth: “Any rock and any steel make sparks.” — You need a hard, sharp-edged stone and high-carbon steel.',
  ],
  exercises: [
    {
      id: 's3-l5-e1',
      title: 'Ferro rod on five natural tinders',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Ferro rod and striker', 'Five natural tinders (from lesson 2)', 'Legal fire pit', 'Water to extinguish'],
      safetyNote: 'Only in a legal fire pit with no fire restriction in force; strike away from face and dry vegetation.',
      steps: [
        'Prepare each tinder as a loose, fluffed nest the size of your fist.',
        'Using the pull-back technique, count strikes until each tinder holds a flame.',
        'Repeat after misting each tinder with water from a spray bottle.',
        'Rank the tinders; compare with your predictions from lesson 2.',
      ],
      success: ['At least three natural tinders lit from a ferro rod in fewer than five strikes.', 'You can explain the rankings using fineness, dryness and oil content.'],
      skill: 'spark-ignition',
    },
    {
      id: 's3-l5-e2',
      title: 'Make char cloth and light it with flint and steel',
      level: 3,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Small metal tin with a lid (e.g., mint tin) with one nail hole', '100 % cotton scraps', 'Legal fire or camping stove outdoors', 'Tongs, gloves', 'Carbon-steel striker and flint or chert', 'Tinder bundle'],
      safetyNote: 'The tin and escaping gases are very hot and may flare; work outdoors with tongs and gloves, away from anything flammable. Let the tin cool completely before opening.',
      steps: [
        'Fill the tin loosely with cotton squares; close it; place it in hot coals or on the stove.',
        'Watch the smoke from the hole; when it stops (~5–15 min), remove the tin and let it cool fully.',
        'Hold a piece of char cloth on the flint; strike the steel down across the edge until a spark catches.',
        'Put the glowing char in a bird’s-nest bundle and blow it to flame over the fire pit.',
      ],
      success: ['Char cloth is black, flexible and catches a spark.', 'You blew an ember to flame at least once.'],
      skill: 'spark-ignition',
    },
  ],
  quiz: [
    {
      id: 's3-l5-q1',
      kind: 'single',
      prompt: 'Why does ordinary tinder light from a ferro rod but usually not from flint-and-steel sparks?',
      choices: [
        { id: 'a', text: 'Ferro sparks are much hotter and larger, carrying more energy.', why: 'Correct: ~3,000 °C burning metal vs ~1,000 °C tiny iron slivers.' },
        { id: 'b', text: 'Flint sparks are cold.', why: 'They are hot, just smaller and cooler.' },
        { id: 'c', text: 'Ferro rods contain petroleum.', why: 'They are a metal alloy.' },
        { id: 'd', text: 'Tinder repels flint sparks.', why: 'Not a thing.' },
      ],
      answer: 'a',
      concepts: ['spark-ignition'],
      explanation: 'Energy per spark decides what it can ignite. Flint-and-steel needs char, which glows at a few hundred degrees.',
    },
    {
      id: 's3-l5-q2',
      kind: 'numeric',
      prompt: 'A spark particle of 0.2 mg (2 × 10⁻⁴ g) with c = 0.45 J/(g·°C) cools from 3,000 °C. Using $E = mc\\Delta T$, how many **joules** does it carry? (Two decimals.)',
      unit: 'J',
      answer: 0.27,
      tolerance: 0.02,
      concepts: ['spark-ignition'],
      explanation: '2×10⁻⁴ × 0.45 × 3000 = **0.27 J** — far less than the ~45 J needed to heat 0.1 g of tinder, so only hair-fine fibres ignite.',
    },
    {
      id: 's3-l5-q3',
      kind: 'single',
      prompt: 'What is happening inside the char-cloth tin?',
      choices: [
        { id: 'a', text: 'The cotton burns to ash.', why: 'Without enough oxygen it cannot burn — that is the point.' },
        { id: 'b', text: 'The cotton pyrolyses: volatiles escape through the hole and carbon char remains.', why: 'Correct.' },
        { id: 'c', text: 'The cotton melts.', why: 'Cotton is cellulose; it decomposes rather than melts.' },
        { id: 'd', text: 'The tin coats the cotton in metal.', why: 'No.' },
      ],
      answer: 'b',
      concepts: ['spark-ignition', 'combustion'],
      explanation: 'Controlled pyrolysis leaves porous carbon that catches a spark and glows.',
    },
    {
      id: 's3-l5-q4',
      kind: 'order',
      prompt: 'Order the ember-to-flame steps.',
      items: [
        { id: 'nest', text: 'Prepare a fine, dry bird’s-nest bundle with a pocket' },
        { id: 'place', text: 'Place the ember in the pocket and fold the bundle loosely' },
        { id: 'gentle', text: 'Blow gently, then harder as smoke thickens' },
        { id: 'lay', text: 'Put the flaming bundle into the prepared lay' },
      ],
      answer: ['nest', 'place', 'gentle', 'lay'],
      concepts: ['ember-to-flame'],
      explanation: 'Bundle ready before the spark; gentle oxygen first; move fast once it flames.',
    },
    {
      id: 's3-l5-q5',
      kind: 'multi',
      prompt: 'Which are advantages of a ferro rod over a butane lighter?',
      choices: [
        { id: 'a', text: 'Works after being soaked (once wiped).', why: 'Yes.' },
        { id: 'b', text: 'Works in severe cold.', why: 'Yes — butane struggles to vaporise below about freezing.' },
        { id: 'c', text: 'Lights coarse, damp tinder more easily than a flame.', why: 'No — a sustained flame is far better on poor tinder.' },
        { id: 'd', text: 'Thousands of strikes with no fuel to run out.', why: 'Yes.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['spark-ignition', 'redundancy'],
      explanation: 'Carry both: the lighter for easy fires, the ferro rod for when the lighter fails.',
    },
  ],
  scenario: {
    id: 's3-l5-sc',
    setup: 'Canadian Shield, −20 °C, late afternoon. You fell through thin ice to the knees, got out, and must warm up and dry your boots. Your lighter only sparks — the butane will not flow in this cold. You have a ferro rod, birch trees nearby, and dead spruce. Fires are legal.',
    question: 'What is your best move?',
    choices: [
      { id: 'a', text: 'Keep trying the lighter until it works.', why: 'Wastes minutes while your feet freeze; warm it inside your clothing for later instead.' },
      { id: 'b', text: 'Put the lighter inside your clothes to warm; meanwhile scrape birch bark into fine curls and powder, build the ladder with dead spruce twigs, and light the bark with the ferro rod using the pull-back technique.', why: 'Best: the ferro rod works now, birch bark catches sparks, and the lighter becomes a warm backup.' },
      { id: 'c', text: 'Strike the ferro rod onto whole strips of bark.', why: 'Coarse bark rarely catches a spark; scrape it fine first.' },
      { id: 'd', text: 'Walk back to the car 5 km to warm up.', why: 'Wet feet at −20 °C for over an hour of walking risks frostbite.' },
    ],
    best: 'b',
    debrief: 'Redundancy in action: the backup ignition works when the primary fails in the cold. Sparks carry little energy, so the tinder must be ultra-fine — birch bark scraped to curls and powder is ideal. Keep the lighter in an inner pocket from now on.',
    concepts: ['spark-ignition', 'redundancy', 'heat-balance'],
  },
  summary: [
    'Ferro sparks: burning mischmetal particles at ~3,000 °C. Pull the rod back, rod tip in the tinder.',
    'Flint and steel: hard stone shaves carbon steel into ~1,000 °C sparks; needs char cloth or amadou.',
    'A spark carries ~0.1 J — so tinder must be hair-fine. Char cloth is cotton pyrolysed in a closed tin.',
    'Ember to flame: prepared bird’s nest, gentle then stronger breath, straight into the lay.',
  ],
  furtherReading: ['kochanski-bushcraft', 'iol-bushcraft-cert'],
  references: ['kochanski-bushcraft', 'iol-bushcraft-cert', 'ten-essentials-mtn', 'army-atp-3-50-21', 'babrauskas-ignition'],
}
