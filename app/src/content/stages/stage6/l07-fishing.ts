import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's6-l7',
  stage: 6,
  order: 7,
  title: 'Fishing',
  level: 'intermediate',
  minutes: 35,
  prerequisites: ['s6-l3'],
  concepts: ['fishing-law', 'fishing-energy', 'energy-return', 'food-safety-temps'],
  objectives: [
    'Find and apply the **fishing regulations** for a water: licence, season, size and bag limits, permitted gear and protected species.',
    'Describe a minimal **fishing kit** and where fish are likely to hold, and tie two reliable knots.',
    'Calculate the **energy return** of active versus passive fishing and explain why passive methods dominate — where they are legal.',
    'Fish **safely**: cold water, moving water, ice, tides, hooks and spines, and food safety.',
  ],
  explanation: [
    {
      type: 'callout',
      tone: 'law',
      title: 'Regulations first',
      md: 'Almost everywhere, fishing needs a **licence or permit** (sometimes several: for example, national park fishing permits in Canada are separate from provincial licences), and rules set **seasons, size and bag limits, permitted baits and methods** and **protected species**. Unattended set-lines, nets and fish traps are banned or tightly restricted in many places. A fishing kit in your survival pack is not a licence. Find the fisheries agency for your water: [References → Law varies by jurisdiction](#/references).',
    },
    {
      type: 'md',
      md: `### What the rules usually cover

| Rule | Why it exists |
|---|---|
| Licence / permit | Funds management; proves you know the rules |
| Open and closed seasons | Protects spawning fish |
| Size and bag limits | Lets fish breed at least once; shares the resource |
| Gear limits (hooks, lines, nets, set-lines, traps) | Efficient methods can empty a water; non-target catches |
| Bait rules (live bait, moving fish between waters) | Invasive species and disease |
| Protected species / catch-and-release waters | Conservation |
| Marine vs freshwater authorities | Different agencies, different rules |

Read the rules for the **specific water** before the trip and save them offline.

### A minimal kit

A pocket fishing kit weighs 30–60 g: 20–50 m of monofilament line, a range of small hooks, a few split-shot sinkers, a small float, a couple of small lures or flies, wound on a card or a small reel. A hand-line can be wound around a stick or bottle. **Two knots** cover most needs: the **improved clinch** and the **Palomar** for tying on hooks and lures (see Animated Knots).

### Where fish hold

Fish seek **food, cover and comfortable water**:
- Edges and **structure** — fallen trees, rocks, weed beds, undercut banks.
- **Inflows and outflows**, eddies behind rocks, the seam between fast and slow water.
- **Drop-offs** where shallow water meets deep.
- **Dawn and dusk** are usually most productive; in cold water fish are sluggish and feed less.

Small hooks and small baits catch more fish in most waters; many survival catches are small fish.`,
    },
    { type: 'diagram', id: 'energy-return', caption: 'Active fishing pays for every hour; passive gear (where legal) fishes while you rest.' },
    {
      type: 'md',
      md: `### Energy return

A 300 g trout yields roughly 150–200 g of edible flesh; lean freshwater fish provides very roughly **100–150 kcal per 100 g** — so a small fish is **about 150–250 kcal**, less than one energy bar. Standing or sitting fishing costs perhaps 60–100 kcal per hour above rest, more in cold wind or when walking between spots.

- **Active hook-and-line** fishing by a beginner on unfamiliar water often catches nothing for hours: the expected return can be **below** its cost.
- **Passive gear** — set-lines, nets, traps — fishes while you rest and costs only tending time. That is why it dominates subsistence fishing worldwide, and why it is so tightly regulated.
- Fish is **lean** protein; a diet of only lean fish runs into the protein ceiling (s6-l1). Keep eating your carried fat and carbohydrate alongside it.

Fishing often pays best as a **morale and routine** activity during a long wait near good water — not as a way to close a large energy gap quickly.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Water is the hazard, not the fish',
      md: 'Do not wade in fast or cold water, fish from slippery rocks above deep water, or go onto ice without training, local ice information and safety gear — cold-water immersion incapacitates within minutes (Stage 8). On coasts, watch tides and swells; waves sweep anglers off rocks. Keep hooks away from eyes; handle spiny fish carefully. Cook fish to 63 °C (145 °F), or until opaque and flaking.',
    },
    { type: 'sim', id: 'energy-budget', caption: 'Compare active fishing, set-lines and no fishing in the boreal and tropical coast scenarios.' },
  ],
  whyItMatters: 'Near water, fishing is the most accessible, legal and forgiving wild food — and the easiest to overestimate. Knowing the rules, a little gear and the real energy numbers turns it into a sensible option rather than a cold, wet, calorie-negative afternoon or a fine.',
  science: [
    {
      type: 'md',
      md: `### Expected value per hour

$$
\\text{net/h} = p \\times E_{\\text{fish}} - C
$$

where $p$ is fish per hour, $E_{\\text{fish}}$ kcal per fish, and $C$ extra kcal spent per hour.

**Active fishing:** $p = 0.3$, $E = 160$, $C = 80$ → $48 - 80 = -32$ kcal/h.
**Passive lines (where legal):** tending 1 h catches from lines set all day: $p = 0.6$ per tending hour, $E = 200$, $C = 40$ → $120 - 40 = +80$ kcal/h.

### The chance of an empty day

If catches are random at rate $p$ per hour, the chance of **nothing** in $h$ hours is approximately $(1-p)^h$. At $p = 0.3$ for 4 hours: $0.7^4 \\approx 0.24$ — a one-in-four chance of a blank day even when the average looks fine. Ration as if the blank day will happen.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal lake, autumn:** small pike and perch near weed edges at dusk; the angler fishes from a safe shore, not from a slippery log, with a licence bought before the trip.

**Tropical coast:** reef fish are abundant, but ciguatera and marine-reserve rules apply; local advice decides which species are eaten.

**Mountain stream:** small trout, cold water, slippery rocks. Short sessions; hands warmed between; no wading.

**Subarctic lake in winter:** ice fishing is a skill with its own training — ice thickness, pressure ridges, inflows and currents.

**Urban canal or river:** licence rules still apply; fish from polluted urban waters may carry contaminants — follow local consumption advisories.

**Desert reservoir:** often stocked and regulated; shade and water planning come first.`,
    },
  ],
  mistakes: [
    'Assuming a survival situation or a kit in your pack exempts you from fishing law.',
    'Setting unattended lines, nets or traps where they are illegal.',
    'Wading in cold or fast water to reach a better spot.',
    'Myth: “There are always fish — you’ll eat well.” Blank days are common.',
    'Using big hooks and big baits in waters full of small fish.',
    'Eating only lean fish for days — add fat and carbohydrate.',
    'Undercooking fish or eating it raw (parasites).',
  ],
  exercises: [
    {
      id: 's6-l7-e1',
      title: 'Read the rules for one water',
      level: 1,
      safety: 'home',
      minutes: 30,
      steps: [
        'Choose a lake, river or coast you might visit.',
        'Find the managing agency (state/provincial/national fisheries, national park, landowner).',
        'Record: licence and cost, season, size and bag limits, permitted gear and bait, protected species, special closures.',
        'Save it offline with your trip plan.',
      ],
      success: ['A one-page rules summary with the source link.'],
      skill: 'legal-fishing',
    },
    {
      id: 's6-l7-e2',
      title: 'Knots and a pocket kit',
      level: 3,
      safety: 'home',
      minutes: 40,
      materials: ['Monofilament line', 'Hooks with the point covered (or a bare hook shank/swivel for practice)', 'Small tin'],
      steps: [
        'Tie the improved clinch knot and the Palomar knot 10 times each; wet the knot before tightening.',
        'Pull-test each against a spring scale or by hand; note any that slip.',
        'Assemble a pocket kit under 60 g and list its contents on your kit card.',
      ],
      success: ['Both knots tied reliably 10 times.', 'Kit assembled and listed.'],
      skill: 'legal-fishing',
      safetyNote: 'Cover hook points while practising; keep hooks away from eyes.',
    },
    {
      id: 's6-l7-e3',
      title: 'A licensed fishing session with an experienced angler',
      level: 3,
      safety: 'supervised',
      minutes: 180,
      steps: [
        'Buy the correct licence. Fish a water where you have checked the rules, with an experienced angler or at a club introduction day.',
        'Record time spent, fish caught and their approximate weight.',
        'Estimate kcal caught vs kcal spent, and compare with the model in this lesson.',
      ],
      success: ['A log with time, catches and a net-energy estimate.', 'All rules followed, including release of undersized fish.'],
      skill: 'legal-fishing',
      safetyNote: 'Fish from safe banks; no wading in cold or fast water; wear a buoyancy aid near deep or moving water.',
    },
  ],
  simulations: ['energy-budget'],
  quiz: [
    {
      id: 's6-l7-q5',
      kind: 'single',
      prompt: 'The best fishing spot on a cold mountain river is reached by wading across a thigh-deep run. What do you do?',
      choices: [
        { id: 'a', text: 'Wade carefully with a stick.', why: 'Thigh-deep moving cold water is a serious drowning and hypothermia risk.' },
        { id: 'b', text: 'Fish from your safe bank, even if the spot is worse.', why: 'Correct — the fish is never worth a swim.' },
        { id: 'c', text: 'Wade across in the evening when fish bite best.', why: 'Darker, colder, and just as deep.' },
        { id: 'd', text: 'Take off your boots so they stay dry.', why: 'Bare feet on slippery rocks make it worse.' },
      ],
      answer: 'b',
      concepts: ['fishing-energy', 'risk'],
      explanation: 'Stage 13 covers water crossings; here the value of a slightly better spot is tiny compared with the risk.',
    },
    {
      id: 's6-l7-q1',
      kind: 'single',
      prompt: 'You carry a fishing kit in your survival pack. Which statement about using it is correct?',
      choices: [
        { id: 'a', text: 'The kit lets you fish anywhere without a licence in an emergency.', why: 'No — fishing rules apply to everyone, kit or not.' },
        { id: 'b', text: 'Fishing rules still apply, and many also restrict methods like set-lines.', why: 'Correct — check the rules before you go.' },
        { id: 'c', text: 'A licence is needed only if you keep the fish rather than release it.', why: 'No — fishing rules apply to everyone who fishes.' },
        { id: 'd', text: 'With a licence, any method is allowed, including unattended set-lines.', why: 'Many rules restrict methods such as set-lines.' },
      ],
      answer: 'b',
      concepts: ['fishing-law'],
      explanation: 'Fishing rules apply to everyone; many also restrict methods like set-lines. Check before you go.',
    },
    {
      id: 's6-l7-q4',
      kind: 'single',
      prompt: 'Where in a river are fish **least** likely to hold?',
      choices: [
        { id: 'a', text: 'In the eddy behind a large rock', why: 'A good spot — shelter next to food-carrying current.' },
        { id: 'b', text: 'Under an undercut bank or fallen tree', why: 'A good spot — cover.' },
        { id: 'c', text: 'At the seam between fast and slow water', why: 'A good spot — food drifts past without the fish fighting the current.' },
        { id: 'd', text: 'In the fastest, shallowest open riffle at midday', why: 'Correct — no cover, tiring current: usually the least likely spot.' },
      ],
      answer: 'd',
      concepts: ['fishing-energy'],
      explanation: 'Fish need food, cover and comfortable current: edges, eddies, seams and structure.',
    },
    {
      id: 's6-l7-q2',
      kind: 'single',
      prompt: 'You fish actively for 3 hours. You catch 0.3 fish per hour on average, each worth 160 kcal, and fishing costs 80 kcal/h above rest. What is the expected **net** energy?',
      choices: [
        { id: 'a', text: '+144 kcal', why: 'That is the gain only — the 240 kcal cost was forgotten.' },
        { id: 'b', text: '+64 kcal', why: 'That charges the cost for only one hour instead of three.' },
        { id: 'c', text: '−96 kcal', why: 'Correct — 144 gained minus 240 spent.' },
        { id: 'd', text: '−32 kcal', why: 'That is the net for one hour (48 − 80), not multiplied by 3.' },
      ],
      answer: 'c',
      concepts: ['fishing-energy', 'energy-return'],
      explanation: 'Gain 3 × 0.3 × 160 = 144; cost 3 × 80 = 240; net **−96 kcal**.',
    },
    {
      id: 's6-l7-q3',
      kind: 'single',
      prompt: 'Catch rate is 0.3 fish per hour. What is the probability of catching nothing in 4 hours?',
      choices: [
        { id: 'a', text: '≈ 76 %', why: 'That is 1 − 0.7⁴ — the chance of catching at least one fish.' },
        { id: 'b', text: '≈ 0.8 %', why: 'That is 0.3⁴ — it multiplies the catch chance, not the miss chance.' },
        { id: 'c', text: '≈ 0 %', why: 'Expecting 1.2 fish on average (4 × 0.3) does not guarantee one.' },
        { id: 'd', text: '≈ 24 %', why: 'Correct — 0.7⁴ ≈ 0.24.' },
      ],
      answer: 'd',
      concepts: ['fishing-energy'],
      explanation: 'The chance of no fish in an hour is 0.7, so 0.7⁴ ≈ 0.24 → **24 %**. Plan rations for the blank day.',
    },
  ],
  scenario: {
    id: 's6-l7-sc',
    setup: 'Canada, boreal lake inside a national park, day 3 of an unexpected 5-day wait for a float plane (weather). You have a fishing licence for the province but did not buy the national-park fishing permit. Food is at 900 kcal per day. You have a hand-line kit and have seen small fish near a weed bed. Your partner suggests setting several unattended lines overnight to “maximise the catch”.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Set several unattended lines overnight, since this is an emergency.', why: 'Unattended set-lines are typically prohibited, and this is a delay, not a life-threatening emergency.' },
      { id: 'b', text: 'Report in, fish one attended hand-line briefly from shore, keep rations.', why: 'Best: modest, attended, low-risk fishing; rationing stays the backbone; sorting out the missing permit with the park when you can is the legal and ethical route.' },
      { id: 'c', text: 'Spend all day fishing from the canoe to reach the deeper water.', why: 'Energy and cold exposure on the water for an uncertain catch; the ration plan matters more.' },
      { id: 'd', text: 'Skip fishing and eat the remaining food faster to keep warm.', why: 'Food would run out before the plane can arrive.' },
    ],
    best: 'b',
    debrief: 'A weather delay with 900 kcal/day is hard but survivable; rationing carries you. Fishing is a modest, morale-positive top-up at best. Permits matter: provincial licences don’t cover national parks, and unattended lines are commonly illegal. Stay in contact, fish only attended lines from safe spots, and don’t make illegal gear the plan.',
    concepts: ['fishing-law', 'rationing', 'energy-return'],
  },
  summary: [
    'Regulations first: licence/permit, season, size and bag limits, gear and bait rules, protected species.',
    'Pocket kit ≈ 30–60 g; improved clinch and Palomar knots; fish edges, structure, eddies, dawn and dusk.',
    'A small fish ≈ 150–250 kcal; active fishing can be energy-negative; passive gear dominates — where legal.',
    'Blank days are common: P(nothing) ≈ (1 − p)^h.',
    'The water is the hazard: no cold/fast wading, no untrained ice, watch tides; cook fish to 63 °C.',
  ],
  furtherReading: ['uk-rod-rules', 'animated-knots'],
  references: ['noaa-fisheries', 'uk-rod-rules', 'animated-knots', 'foodsafety-temps', 'army-atp-3-50-21', 'coldwater-1101'],
}
