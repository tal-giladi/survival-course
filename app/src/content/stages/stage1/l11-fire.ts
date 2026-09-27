import type { Lesson } from '../../types'

export const l11: Lesson = {
  id: 's1-l11',
  stage: 1,
  order: 11,
  title: 'Basic fire',
  level: 'beginner',
  minutes: 40,
  prerequisites: ['s1-l7'],
  concepts: ['fire-triangle', 'fire-structure', 'fire-safety'],
  objectives: [
    'Explain the **fire triangle** and why fine, dry fuel ignites first.',
    'Prepare a complete **tinder → kindling → fuel** ladder *before* ignition.',
    'Light a fire with a **lighter** and a **ferrocerium rod**, and build a teepee or lean-to lay.',
    'Choose a safe, legal site and **extinguish a fire completely**.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Fire gives warmth, dries clothing, boils water, signals, cooks, and lifts morale. It is also one of the easiest ways to cause a second emergency — a wildfire, a burn, carbon monoxide in an enclosed space. Treat it as a powerful tool, not a symbol.`,
    },
    { type: 'diagram', id: 'fire-triangle', caption: 'Heat, fuel, oxygen. Every fire problem is one of these three.' },
    {
      type: 'md',
      md: `### Why fire needs a ladder

Wood does not burn directly. Heat first **drives off water**, then breaks the wood down into flammable gases (**pyrolysis**); it is those gases that burn as flame. Thin material has a huge surface area for its mass, so a small flame can heat it through quickly. Thick material soaks up heat and stays cold inside. So you build a **ladder** of sizes, each rung roughly 2–3× thicker than the one before.`,
    },
    { type: 'diagram', id: 'fire-ladder', caption: 'Collect every rung before you strike. The most common failure is running out of small kindling.' },
    {
      type: 'md',
      md: `### Two simple lays

- **Teepee (cone):** kindling leaned in a cone around the tinder, with a doorway on the windward side for lighting and airflow. Concentrates heat upward — excellent for getting a fire going.
- **Lean-to:** a thicker stick or log laid on the ground as a windbreak, tinder in its lee, kindling leaned across it. Good in wind.

Either way: leave **gaps for air**, feed **gradually** (smothering a young fire is the second most common failure), and move to the next size only when the current one is burning well.

### Ignition

- **Lighter:** keep it in an inner pocket — butane fails when cold. Shield the flame, light the tinder from the windward side so the flame is blown *into* the fuel.
- **Ferrocerium rod:** scrape the rod with the spine of a knife or a striker, producing sparks at around 3,000 °C. Technique: put the rod tip *in* the tinder and **pull the rod back** while holding the striker still, so you do not scatter the tinder. It works wet (dry it off first) and at altitude; it needs very fine, fluffy tinder.
- **Matches:** keep them dry; windproof/stormproof matches help.

### Tinder that works

Cotton wool smeared with petroleum jelly (burns for minutes), birch bark (burns even when damp thanks to its oils), resin-rich pine "fatwood", dry grass, cattail fluff, fine wood shavings, commercial tinder tabs. Carry some — natural tinder is hard to find in rain.`,
    },
    {
      type: 'md',
      md: `### Safety and extinguishing

- **Site:** use existing fire rings where they exist. Otherwise, bare mineral soil or rock, clear of overhanging branches, with **at least 3 m** (10 ft) cleared of flammable material around it. Not on peat or deep leaf litter (fire can smoulder underground for days), not against tree roots, not in wind that throws sparks.
- **Size:** as small as does the job.
- **Never leave it unattended.**
- **Extinguish:** *drown, stir, feel* — pour water, stir the ashes, pour again, and feel with the back of your hand. If it is too hot to touch, it is too hot to leave.
- **Enclosed spaces:** never burn fires or run stoves inside tents, snow shelters or cars without ventilation — carbon monoxide kills silently.`,
    },
    {
      type: 'callout',
      tone: 'law',
      md: 'Fire rules change by country, region, land manager and **season** — bans can begin the same day. Many parks allow fires only in designated rings, and some ban all open flames including stoves in high-danger periods. Always check the land manager’s current restrictions. In practice exercises, only light fires where it is explicitly allowed.',
    },
  ],
  whyItMatters: 'A fire can turn an unplanned cold night from dangerous into manageable, and its smoke and light help searchers. But fire fails exactly when you need it most — wet, cold, windy, with numb fingers — unless the technique is rehearsed and the ladder is prepared first.',
  science: [
    {
      type: 'md',
      md: `### Surface area and ignition

For a round stick of diameter $d$ and length $L$, surface area ≈ $\\pi d L$ and volume ≈ $\\pi d^2 L / 4$. The ratio is

$$
\\frac{A}{V} = \\frac{4}{d}
$$

Halve the diameter and you **double** the surface available to absorb heat per unit of wood. A 1 mm shaving has 20× the surface-to-volume ratio of a 2 cm stick — which is why it catches from a match and the stick does not.

### Wet wood wastes energy

Dry wood releases roughly 15–19 MJ/kg. But water must be evaporated first, costing about **2.3 MJ per kg of water** (plus heating it). Wood with 50 % moisture content (by wet weight) spends a large fraction of its energy boiling off water, burns cooler, and smokes. That is why dead **standing** wood and dead branches still on the tree (which dry in the wind) are better than wood lying on wet ground.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest, rain:** dead spruce twigs from the lower trunk ("squaw wood") stay dry under the canopy; birch bark tinder; a lean-to lay against a log; split larger sticks to reach their dry cores.

**Desert:** fuel is scarce — dried cactus skeletons, dead shrub branches, dung in some regions. Fires are for night warmth and signaling, kept small.

**Coast:** driftwood is often salty and slow to catch; use plenty of fine kindling.

**Tropics:** everything is damp; carry tinder, and look for dead bamboo (split it — sealed sections can burst when heated), dead palm fronds, and resinous woods.

**Above tree line / arctic tundra:** there may be nothing to burn. A stove and fuel become essential kit.`,
    },
  ],
  mistakes: [
    'Striking the match before collecting all the tinder and kindling.',
    'Jumping from tinder straight to thumb-thick sticks.',
    'Smothering the young fire by piling on too much, too soon.',
    'Pushing the ferro striker forward and scattering the tinder.',
    'Keeping the lighter in an outer pocket where it gets cold and wet.',
    'Leaving a fire that is "mostly out", or lighting one during a fire ban.',
  ],
  exercises: [
    {
      id: 's1-l11-e1',
      title: 'Build the ladder (no ignition)',
      level: 3,
      safety: 'home',
      minutes: 40,
      materials: ['Dead twigs and sticks from a garden or park (where collecting is allowed)', 'Knife (optional)'],
      steps: [
        'Collect the five rungs: tinder, pencil-lead, pencil, thumb, wrist.',
        'Make piles big enough to match the diagram (e.g., two big handfuls of pencil-lead kindling).',
        'Time yourself. Then repeat after a rainy day and note what changes.',
      ],
      success: ['All five rungs collected in the right quantities within 20 minutes.', 'You can explain which rung usually runs out first and why.'],
      skill: 'fire-prep',
    },
    {
      id: 's1-l11-e2',
      title: 'Lighter and ferro-rod fire in a legal fire pit',
      level: 3,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Legal fire pit, fire ring or barbecue', 'Lighter', 'Ferrocerium rod and striker', 'Tinder', 'Water to extinguish'],
      safetyNote: 'Only where fires are explicitly permitted and no fire ban is in force. Keep water at hand. Tie back hair and loose clothing.',
      steps: [
        'Prepare the full ladder first.',
        'Build a teepee lay and light it with the lighter. Grow it to wrist-thick fuel.',
        'Extinguish it: drown, stir, feel.',
        'Repeat with a lean-to lay and the ferro rod, using the pull-back technique.',
        'Log: time from strike to self-sustaining fire, and what went wrong.',
      ],
      success: ['Two fires lit, one with each method.', 'Both extinguished cold to the touch.', 'Strike-to-sustained under 5 minutes.'],
      skill: 'fire-ignition',
    },
  ],
  simulations: ['fire-basic'],
  quiz: [
    {
      id: 's1-l11-q1',
      kind: 'single',
      prompt: 'Why does a 1 mm shaving catch fire from a match when a 2 cm stick does not?',
      choices: [
        { id: 'a', text: 'Shavings contain more oil.', why: 'Not generally true.' },
        { id: 'b', text: 'Surface-to-volume ratio is ~20× higher, so it heats through and pyrolyses quickly.', why: 'Correct: $A/V = 4/d$.' },
        { id: 'c', text: 'Thin wood contains less oxygen.', why: 'Wood oxygen content is not the issue.' },
        { id: 'd', text: 'Sticks are always wet.', why: 'Even a dry stick will not catch from a match.' },
      ],
      answer: 'b',
      concepts: ['fire-structure'],
      explanation: 'Thin fuel absorbs heat over a large area relative to its mass, reaching pyrolysis temperature quickly.',
    },
    {
      id: 's1-l11-q2',
      kind: 'order',
      prompt: 'Order the fuel ladder from first to last.',
      items: [
        { id: 't', text: 'Tinder (hair-fine)' },
        { id: 'sk', text: 'Small kindling (pencil lead)' },
        { id: 'k', text: 'Kindling (pencil)' },
        { id: 'sf', text: 'Small fuel (thumb)' },
        { id: 'f', text: 'Fuel (wrist)' },
      ],
      answer: ['t', 'sk', 'k', 'sf', 'f'],
      concepts: ['fire-structure'],
      explanation: 'Each rung is roughly 2–3× thicker than the previous one.',
    },
    {
      id: 's1-l11-q3',
      kind: 'single',
      prompt: 'What is the correct ferro-rod technique?',
      choices: [
        { id: 'a', text: 'Hold the rod above the tinder and push the striker down hard.', why: 'Often scatters tinder and wastes sparks.' },
        { id: 'b', text: 'Rest the rod tip in the tinder, hold the striker still, and pull the rod back.', why: 'Correct — sparks land in the tinder, which stays put.' },
        { id: 'c', text: 'Heat the rod in your hand first.', why: 'Unnecessary.' },
        { id: 'd', text: 'Strike it on a rock.', why: 'Ineffective.' },
      ],
      answer: 'b',
      concepts: ['fire-structure'],
      explanation: 'Pulling the rod back keeps your hand and the tinder steady.',
    },
    {
      id: 's1-l11-q4',
      kind: 'multi',
      prompt: 'Which are good fire-safety practices?',
      choices: [
        { id: 'a', text: 'Use an existing fire ring where one exists.', why: 'Yes.' },
        { id: 'b', text: 'Clear about 3 m around the fire of flammable material.', why: 'Yes.' },
        { id: 'c', text: 'Build on deep leaf litter or peat for insulation.', why: 'No — fire can smoulder underground and re-emerge.' },
        { id: 'd', text: 'Drown, stir and feel before leaving.', why: 'Yes.' },
        { id: 'e', text: 'Run a stove inside a closed tent to warm it.', why: 'No — carbon monoxide risk and fire risk.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['fire-safety'],
      explanation: 'Site, size, supervision, and complete extinguishing. Never in enclosed spaces.',
    },
    {
      id: 's1-l11-q5',
      kind: 'numeric',
      prompt: 'A 2 kg armful of wood contains 40 % water by weight. Evaporating water takes ~2.3 MJ/kg. How many **MJ** are spent just boiling off its water? (One decimal.)',
      unit: 'MJ',
      answer: 1.8,
      tolerance: 0.1,
      concepts: ['fire-structure'],
      explanation: '2 kg × 0.4 = 0.8 kg of water; 0.8 × 2.3 = **1.84 MJ** — energy that never reaches you as heat.',
    },
    {
      id: 's1-l11-q6',
      kind: 'truefalse',
      prompt: 'If there is no posted fire ban where you are hiking, you can assume fires are allowed.',
      answer: false,
      concepts: ['fire-safety'],
      explanation: 'Many areas prohibit fires outside designated rings year-round, and bans may be posted only online. Check with the land manager.',
    },
  ],
  scenario: {
    id: 's1-l11-sc',
    setup: 'You are stranded overnight in a wet temperate forest, 3 °C, drizzle. You have a lighter, a ferro rod, a few petroleum-jelly cotton balls, a knife and a tarp already pitched. Everything on the ground is soaked. It is legal and safe to light a small fire here in an emergency.',
    question: 'What is your best approach?',
    choices: [
      { id: 'a', text: 'Gather wet sticks from the ground, pile them on the cotton balls, and use the lighter.', why: 'Wet ground fuel will smother and cool the flame.' },
      { id: 'b', text: 'Collect dead twigs still attached to trees and dead standing wood; split thicker sticks to reach dry cores and shave feather sticks; build the full ladder under the tarp edge; light with the cotton balls.', why: 'Best: fuel off the ground is drier, splitting exposes dry wood, and your carried tinder buys time.' },
      { id: 'c', text: 'Use all the cotton balls at once to make a big flame.', why: 'Wasteful — the problem is kindling, not tinder.' },
      { id: 'd', text: 'Give up on fire; it cannot work in rain.', why: 'Hard, not impossible — and warmth matters tonight.' },
    ],
    best: 'b',
    debrief: 'In wet weather, fire success is almost entirely **fuel preparation**. Wood off the ground dries in the wind; the inside of a split stick is often dry; fine shavings give the surface area a small flame needs. Carried tinder is your insurance — use one ball at a time.',
    concepts: ['fire-structure', 'fire-triangle'],
  },
  summary: [
    'Fire triangle: heat, fuel, oxygen. Fuel must be dry and fine to start.',
    'Build the whole ladder first: tinder → pencil lead → pencil → thumb → wrist.',
    'Lighter in an inner pocket; ferro rod with the pull-back technique; carry tinder.',
    'Small, supervised, legal — and extinguished cold: **drown, stir, feel**.',
  ],
  furtherReading: ['kochanski-bushcraft', 'smokey-campfire'],
  references: ['smokey-campfire', 'usfs-fire', 'lnt-principles', 'kochanski-bushcraft', 'army-atp-3-50-21', 'iol-bushcraft'],
}
