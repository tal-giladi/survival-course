import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's11-l5',
  stage: 11,
  order: 5,
  title: 'Reading the landscape for resources',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s11-l4', 's4-l2'],
  concepts: ['water-sign', 'game-trails', 'bird-language', 'water-finding', 'handrails'],
  objectives: [
    'Combine **animal, bird, insect and plant sign** with terrain to judge where water is likely — and weigh each clue’s reliability.',
    'Use **game trails as handrails** where they help, and recognise where they mislead (dead ends, dense cover, cliffs, dangerous places).',
    'Read **alarm behaviour** of birds and animals as information about disturbance around you.',
    'Apply the safety rules for **animal-used water and trails**: treat all water, avoid predator ambush points, and never assume animal tracks mean safe ground or ice.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 4 taught you where water collects: low points, outside bends of dry washes, the bases of cliffs, springs at geological contacts. Animals know the same landscape far better than you do, and they leave records of what they know. This lesson turns tracking into **landscape reading**: using sign together with terrain to find water, easier routes and safe places — while treating every clue as a **probability, not a promise**.

### Water-related sign`,
    },
    { type: 'diagram', id: 's11-water-sign', caption: 'Several independent clues pointing to the same place are worth far more than any one.' },
    {
      type: 'md',
      md: `| Clue | What it suggests | Reliability and caveats |
|---|---|---|
| **Game trails converging and running downhill** | Many animals going to the same place, often water | Moderate. Trails also lead to feeding areas, salt licks, bedding cover. Follow the gradient and the convergence together. |
| **Increasing sign density** (more prints, scat, trampling) | A shared resource ahead | Moderate — same caveats. |
| **Green line of trees, reeds or palms** in a dry landscape | Water close to the surface along a wash or spring | Good. Water-loving trees (willows, cottonwoods, tamarisk, palms, reeds) need shallow groundwater. Dig at the lowest point on the outside of a bend (Stage 4). |
| **Animals digging in a dry streambed** | Water just below the surface | Good where it happens (in some deserts elephants, wild asses and other animals dig for water); treat any water found. |
| **Birds flying low and direct at dawn and dusk** | Many seed-eating birds (pigeons, doves, sandgrouse) drink daily, often around dawn and dusk | Weak to moderate. Direction only; raptors and insect-eaters give little water information. |
| **Insects**: mosquitoes, flies, bees | Standing water or moisture nearby | Weak. Some insects travel far; mosquito larvae need water, so many biting mosquitoes suggest water within a moderate distance. |
| **Frogs calling at night** | Standing or slow water | Good in season. |

**Treat every animal water source.** Water that animals drink from, wallow in or defecate around is heavily contaminated with protozoa, bacteria and viruses (Stage 4). Filter and disinfect, or boil.

### Game trails as handrails

In navigation (Stage 2) a **handrail** is a linear feature you follow toward your goal. Game trails can be excellent handrails: they follow the **easiest line** through terrain — along contours, ridges and valley floors, around cliffs, through gaps in dense vegetation — often better than you would choose. But:

- They are made by animals of a different **size and shape**: deer trails pass under branches at chest height; goat and sheep trails cross ledges you cannot; pig and rabbit runs become tunnels.
- They **wander and branch**, and lead to the animals’ destinations, not yours. Use them in the right general direction and **check your bearing** at every junction (Stage 2: terrain association, catching features).
- They pass through **predator ambush points** — thick cover at water, narrow gaps — and are used at dawn, dusk and night.
- Following a trail “just a bit further” is a classic way to become lost: agree a turnaround time or a catching feature before you commit.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Animal tracks do not certify safe ground',
      md: 'A fox’s trail across a frozen lake does not mean the ice will hold you: a fox weighs a small fraction of your weight and spreads it over four feet. Goat trails cross slopes where a slip is fatal. Animal trails into a flooded wash may predate the rising water. Always judge ice, slopes and water crossings on their own terms (Stage 12), never on animal evidence.',
    },
    {
      type: 'md',
      md: `### Reading alarm behaviour

Birds and many mammals react to disturbance in a patterned way: **alarm calls, sudden silence, flushing in one direction, squirrels scolding, deer snorting and stamping**. Naturalists call this reading **bird language**. It tells you:

- that something — a predator, a person, a dog — is moving nearby, and roughly **where** (the alarm moves with it);
- that **you** are the disturbance, announced ahead of you (which is why quiet, slow movement and sitting still reveal far more wildlife);
- in a search context, that there may be someone in a thicket the birds are scolding (a clue, not proof).

A calm baseline — birds feeding and singing normally — is the reference against which alarm stands out. Practise with a daily **sit spot**: 20 minutes, same place, many days, notebook.

### Other resources in the landscape

- **Shelter**: animal beds on a slope often mark a spot out of the wind with a view; rock overhangs with old droppings have been used for shelter for a long time (check them for current occupants and hazards first).
- **Warmth**: snow melts first on south-facing slopes in the northern hemisphere (north-facing in the southern) — animals feed and bask there, and it is often the drier place to rest.
- **Direction clues**: prevailing-wind shaping of trees and snow drifts (Stage 2, natural navigation) — combine with, not instead of, a compass.
- **People**: fresh human sign, livestock, fences, cut wood and vehicle tracks mean people are near — often the best resource of all in an emergency.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Access, water and wildlife law',
      md: 'Land access, the use of springs and wells, and disturbance of wildlife at water points are regulated differently in each country and protected area. In a genuine emergency, use what you need to survive and report it; otherwise stay on legal routes, do not camp at or foul water sources (many guidelines say camp at least 60 m / 200 ft from water), and do not disturb animals that depend on scarce water.',
    },
  ],
  whyItMatters: 'In dry country, a correct read of the landscape can save hours of searching for water — but a wrong one, trusted blindly, costs sweat you cannot afford. Game trails can make travel through dense or steep terrain easier and faster, or lead you into a maze. Knowing which clues are strong, which are weak and which are dangerous turns “bushcraft lore” into a disciplined judgement.',
  science: [
    {
      type: 'md',
      md: `### Why trails can be faster: Naismith’s rule

Animals and experienced people both minimise effort, and climbing costs far more than walking on the flat. **Naismith’s rule** (Stage 2) estimates walking time as about **1 hour per 5 km on the flat plus 1 hour per 600 m of ascent** — i.e. 12 min per km plus 10 min per 100 m of climb.

**Worked example.** You need to get to a valley 1 km away in a straight line, but the direct route climbs 150 m over a spur and drops again. A game trail contours around the spur for 1.5 km with no climb.

- Direct: $1\\ \\text{km} \\times 12\\ \\text{min} + 150\\ \\text{m} \\times \\frac{10\\ \\text{min}}{100\\ \\text{m}} = 12 + 15 = 27\\ \\text{min}$ (plus a steep descent).
- Trail: $1.5\\ \\text{km} \\times 12\\ \\text{min} = 18\\ \\text{min}$.

The longer trail is faster — and less tiring and safer on the descent. The same logic explains why trails of hoofed animals so often contour. (Naismith’s rule ignores rough ground and dense vegetation; add time for those.)

### Why water-loving vegetation marks shallow groundwater

Some plants — willows, cottonwoods, reeds, many palms — have roots that must reach the water table (they are called **phreatophytes**). Where they grow in a dry landscape, groundwater is within reach of their roots, often only a few metres down and sometimes much less at the lowest points. That is a physical reason for the “green line” clue, and why digging at the outside of a bend in a vegetated wash is worth trying (Stage 4). Their absence does not prove there is no water.

### Weighing clues

Clues combine like evidence in the decision-making lessons of Stage 1: one weak clue (a few flies) changes little; three independent moderate clues (converging trails, a green line, doves flying the same way at dusk) pointing to the same place make water there **likely**. Independent is the key word — three trails all following the same valley are really one clue.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Desert.** At dusk, doves and sandgrouse fly low and fast in the same direction; hoof-worn trails converge on a dry wash lined with tamarisk; a hollow dug by animals at the outside of a bend shows damp sand. Dig at the lowest point, let the hole fill, then filter and disinfect. Watch the sky: a wash is also a flash-flood channel (Stage 12).

**Savannah and dry woodland.** Well-worn trails converge on a waterhole — and so do predators, especially at dawn and dusk. Collect water in daylight, quickly, with a clear view; never camp there.

**Temperate forest.** Deer trails contour around a steep gully, giving a far easier route than the direct line; you follow in the right direction and check your compass at each junction until the trail turns away.

**Mountain.** Chamois or goat trails lead across a scree slope and onto ledges: a good line for them, a fatal one for you. You take the longer, safer route.

**Arctic / subarctic.** Caribou or reindeer trails follow ridges and eskers, which are drier and easier than the boggy lowlands; fox tracks cross a frozen lake — which tells you nothing about whether the ice will hold you.

**Tropical forest.** Pig and deer trails lead to a stream and to a mineral lick; mosquitoes intensify near a swampy hollow. Trails become tunnels under vegetation — use them with a bearing, and watch for snakes and stinging plants at hand height.

**Coast.** Seabird flight lines lead to colonies, not to fresh water; a line of reeds at the back of a beach may mark a freshwater seep, often brackish — test and treat.

**Urban / rural.** Pigeons gather at leaks and fountains; livestock paths lead to troughs and gates; human footpaths lead to people, the most valuable resource in an emergency.`,
    },
  ],
  mistakes: [
    'Trusting a single weak clue (a few bees, a bird) and walking far out of the way on it.',
    'Drinking from an animal waterhole or wallow without full treatment.',
    'Camping at a waterhole or on the trail leading to it.',
    'Following a game trail without a bearing or turnaround point and becoming lost.',
    'Assuming ice, a ledge or a water crossing is safe because animals crossed it.',
    'Myth: “bees are always within a few kilometres of water, so bees mean water nearby.” Bees can forage far; treat insects as a weak clue.',
    'Myth: “all game trails lead to water.” They lead to many things — food, cover, salt, other trails.',
  ],
  exercises: [
    {
      id: 's11-l5-e1',
      title: 'Map the trails of a local valley',
      level: 2,
      safety: 'outdoor',
      minutes: 120,
      materials: ['Topographic map or map app with offline tiles', 'Compass', 'Notebook, pencil'],
      steps: [
        'In a local valley, park or woodland, mark on the map every game trail you find, its direction and how well used it looks.',
        'Mark water points, green vegetation lines, obvious feeding and bedding areas.',
        'At home, look at the map: which trails converge, and where? Do they lead downhill to water, or to food and cover?',
        'Walk one game trail for 500 m using it as a handrail, checking your bearing at every junction; note where it would have led you off course.',
      ],
      success: ['A map with trails, water and resource points.', 'At least one convergence explained.', 'You stayed within 10° of your intended direction by checking at junctions.'],
      skill: 'water-finding',
      safetyNote: 'Stay on legal ground, take a partner, leave a trip plan, and agree a turnaround time. Do not follow trails onto ledges, into dense cover in predator country, or across ice or fast water.',
    },
    {
      id: 's11-l5-e2',
      title: 'Sit spot and alarm baseline',
      level: 1,
      safety: 'outdoor',
      minutes: 30,
      materials: ['A quiet spot you can visit often (garden, park, woodland edge)', 'Notebook'],
      steps: [
        'Sit still for 20 minutes. For the first 10, just listen and note the normal sounds (the baseline).',
        'Note every change: silence spreading, alarm calls, birds flushing — and what caused it if you can see (cat, dog, person, raptor).',
        'Repeat on at least five different days at a similar time and compare.',
      ],
      success: ['You can describe the baseline and at least three alarm events with their causes.'],
      skill: 'track-id',
    },
  ],
  simulations: ['tracking-scene'],
  quiz: [
    {
      id: 's11-l5-q4',
      kind: 'single',
      prompt: 'You find a waterhole with trampled, dung-covered margins at the end of converging game trails. It is late afternoon. What is the best plan?',
      choices: [
        { id: 'a', text: 'Camp right beside it so you have water through the night', why: 'Animals — including predators — concentrate at water at dusk and night; the site is fouled.' },
        { id: 'b', text: 'Fill up now in daylight, camp 60 m away off the trails, and treat it', why: 'Correct — resource used, risk avoided; filter and disinfect (or boil) before drinking.' },
        { id: 'c', text: 'Drink straight from the middle, where the water looks clear', why: 'Clear water can still carry pathogens, and this source is heavily used by animals.' },
        { id: 'd', text: 'Avoid it entirely and keep searching for a cleaner source', why: 'Wasteful if you need water — the risks are manageable with timing and treatment.' },
      ],
      answer: 'b',
      concepts: ['water-sign', 'water-treatment', 'site-hazards'],
      explanation: 'Use animal water sources quickly in daylight, camp at least 60 m away and well off the trails, and treat the water fully (filter and disinfect, or boil).',
    },
    {
      id: 's11-l5-q5',
      kind: 'single',
      prompt: 'You are following a deer trail as a handrail through dense forest toward a road to the east. At a junction, one branch continues north-east, the other turns north-west. What do you do?',
      choices: [
        { id: 'a', text: 'Take the better-used branch, since more traffic means a better route', why: 'Animal traffic does not know where your road is.' },
        { id: 'b', text: 'Check the compass, take the north-east branch, leave it if it swings away', why: 'Correct — trails are handrails only while they go your way.' },
        { id: 'c', text: 'Take the north-west branch, because game trails usually lead to water', why: 'Water is not your goal, and the rule is unreliable.' },
        { id: 'd', text: 'Stop following game trails and push straight east through the forest', why: 'Trails can still help while they go your way.' },
      ],
      answer: 'b',
      concepts: ['game-trails', 'handrails', 'bearings'],
      explanation: 'Use a trail only while it serves your bearing; check at every junction (Stage 2).',
    },
    {
      id: 's11-l5-q6',
      kind: 'single',
      prompt: 'Sitting quietly at the edge of a thicket, you notice birds suddenly go silent in a wave moving toward you, then a blackbird gives a rapid alarm call from a bush 30 m away. What is the most reasonable reading?',
      choices: [
        { id: 'a', text: 'A storm is coming and the birds are falling silent', why: 'Weather changes birdsong gradually, not as a moving wave with alarm calls.' },
        { id: 'b', text: 'Something is moving toward you through the thicket', why: 'Correct — a travelling wave of silence and alarm follows a moving disturbance: a predator, dog or person.' },
        { id: 'c', text: 'The birds have finished feeding for the day', why: 'That would not produce alarm calls moving in one direction.' },
        { id: 'd', text: 'Nothing; bird behaviour is too variable to read', why: 'Alarm behaviour is well documented and useful as a clue.' },
      ],
      answer: 'b',
      concepts: ['bird-language'],
      explanation: 'Alarm moves with the disturbance. It is a clue to look and listen more carefully — not proof of what it is.',
    },
    {
      id: 's11-l5-q2',
      kind: 'single',
      prompt: 'Fresh fox tracks cross a frozen lake you want to cross on foot. What do they tell you about the ice?',
      choices: [
        { id: 'a', text: 'Nothing useful: a fox is far lighter and spreads its weight on four feet', why: 'Correct — judge the ice on its own terms.' },
        { id: 'b', text: 'It will hold a person, since an animal crossed it very recently', why: 'A fox weighs a small fraction of a person’s weight; its crossing proves nothing about yours.' },
        { id: 'c', text: 'It is safe as long as you step exactly where the fox stepped', why: 'Your weight on two boots is far more than the fox’s on four feet, wherever you step.' },
        { id: 'd', text: 'It is safe near the tracks but may be thin elsewhere on the lake', why: 'The tracks show only that a light animal crossed; they say nothing about strength for a person anywhere.' },
      ],
      answer: 'a',
      concepts: ['ice-hazard', 'game-trails'],
      explanation: 'A fox weighs a small fraction of a person’s weight and spreads it over four feet. Judge ice on its own terms (thickness, type, colour, local knowledge).',
    },
    {
      id: 's11-l5-q1',
      kind: 'single',
      prompt: 'In a desert, you are weighing clues that there may be water in a nearby wash. Which of these is **not** a clue to water?',
      diagram: 's11-water-sign',
      choices: [
        { id: 'a', text: 'Several game trails converging downhill to the wash', why: 'This is a clue — a moderate one.' },
        { id: 'b', text: 'A line of tamarisk and reeds growing along the wash', why: 'This is a clue — water-loving plants need shallow groundwater: a good clue.' },
        { id: 'c', text: 'Doves flying low in the same direction at dusk', why: 'This is a clue — weak-to-moderate and directional for seed-eating birds.' },
        { id: 'd', text: 'A raptor circling high overhead above the wash', why: 'Correct — raptors get most of their water from prey and do not indicate water.' },
      ],
      answer: 'd',
      concepts: ['water-sign', 'water-finding'],
      explanation: 'Independent clues pointing to the same place strengthen each other; single weak clues (like one bee) do not, and raptors are not a water clue at all.',
    },
    {
      id: 's11-l5-q3',
      kind: 'single',
      prompt: 'Naismith: 12 min per km plus 10 min per 100 m of ascent. A direct route is 2 km with 300 m of climb; a contouring game trail is 3 km with no climb. How much time does the trail save? (Ignore the descent.)',
      choices: [
        { id: 'a', text: '18 min', why: 'Correct — direct 24 + 30 = 54 min; trail 36 min; saving 18 min.' },
        { id: 'b', text: '30 min', why: 'This is just the climbing time; it forgets the trail’s extra kilometre (12 min).' },
        { id: 'c', text: '42 min', why: 'This subtracts only one kilometre (12 min) of the trail instead of its full 36 min.' },
        { id: 'd', text: '54 min', why: 'This is the time for the direct route, not the saving.' },
      ],
      answer: 'a',
      concepts: ['game-trails', 'timing'],
      explanation: 'Direct: 24 + 30 = 54 min. Trail: 36 min. Saving: 18 min — and a less tiring, safer route.',
    },
  ],
  scenario: {
    id: 's11-l5-sc',
    setup: 'Day 2 lost in semi-arid hills after a vehicle breakdown. You have 0.5 L of water left; the temperature will reach 35 °C. From a ridge at 07:00 you see a green line of trees in a wash about 3 km away, and several game trails heading down toward it. Your vehicle is 1 km behind you on a track where you left a note saying you would stay with it.',
    question: 'What is your best decision?',
    choices: [
      { id: 'a', text: 'Walk to the green line now, in the cool of the morning, with the note updated: leave a new note and a big arrow at the vehicle, travel slowly in the shade where possible, return or rest in shade by late morning.', why: 'Reasonable given dwindling water — but it changes the stay-with-the-vehicle plan you told rescuers about. It is only the best choice if nobody expects you soon; otherwise option c is better.' },
      { id: 'b', text: 'Follow the game trails wherever they lead, since trails always lead to water.', why: 'Trails lead to many things; without a bearing and a turnaround time you risk becoming lost and far from the vehicle — the most visible object in the landscape.' },
      { id: 'c', text: 'Assess whether help is expected soon. If someone knows your route and return time, stay with the vehicle in shade, signal, and minimise water loss; only if no one will look for you for days, make an early-morning trip to the green line with a new note, a bearing and a strict turnaround time.', why: 'Best: it weighs the landscape clue against the stay-or-move decision and the rescue picture.' },
      { id: 'd', text: 'Walk to the green line at midday when you can see it best.', why: 'Midday walking in 35 °C heat with 0.5 L of water costs more water than you can carry.' },
    ],
    best: 'c',
    debrief: 'This lesson’s clue (a green line with converging trails) is strong evidence of shallow water — but it sits inside a bigger decision. Stage 1 and Stage 14 logic: a vehicle is far easier for searchers to find than a person, and a trip plan with a return time means help is coming. If nobody knows, water becomes the priority, and a short, early, well-marked trip with a bearing and turnaround time (and water treatment on arrival) is justified. Never walk in the midday heat (Stage 8).',
    concepts: ['water-sign', 'stay-or-move', 'water-budget', 'game-trails'],
  },
  summary: [
    'Water clues: **converging downhill trails, green lines of water-loving plants, animals digging, birds at dawn/dusk, insects, frogs** — weigh reliability; combine independent clues.',
    '**Treat all animal-used water**; collect in daylight; do not camp at water or on trails (≥ 60 m away).',
    '**Game trails as handrails**: good while they go your way — check your bearing at every junction; set a turnaround time.',
    'Animal tracks never prove that **ice, ledges or crossings** are safe for you.',
    'Alarm behaviour of birds and mammals reveals **moving disturbance** — including you.',
    'Resource decisions sit inside **stay-or-move** and rescue logic.',
  ],
  furtherReading: ['trk-young-robin', 'army-atp-3-50-21', 'usgs-groundwater'],
  references: ['trk-young-robin', 'army-atp-3-50-21', 'usgs-groundwater', 'naismith-1892', 'natural-navigator', 'lnt-principles', 'cdc-yellowbook-water', 'was'],
}
