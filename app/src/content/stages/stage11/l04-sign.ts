import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's11-l4',
  stage: 11,
  order: 4,
  title: 'Sign: trails, feeding, beds, scat',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s11-l1'],
  concepts: ['disturbed-vegetation', 'beds-trails-runs', 'feeding-sign', 'scat-id', 'scat-hygiene', 'trk-wildlife-distance'],
  objectives: [
    'Read **disturbed vegetation and ground sign** where prints do not register: bent stems, dew trails, scuffs, overturned debris.',
    'Distinguish **trails, runs, tunnels, slides, beds and lays**, and what they say about how animals use a place.',
    'Interpret common **feeding sign** — browse, gnawed nuts and cones, rooting, digging, kills — and the teeth or tools that made it.',
    'Recognise the main **scat shapes** by family, and handle all scat, droppings and carcasses with strict **hygiene and distance**.',
  ],
  explanation: [
    {
      type: 'md',
      md: `On most ground — grass, leaf litter, rock, forest floor — clear prints are the exception. Experienced trackers spend most of their time reading **sign**: all the other traces a living thing leaves. Sign is also what tells you about **behaviour**: where animals feed, rest, travel and mark.

### Disturbed vegetation and ground sign

- **Bent and broken stems** lean the way the animal went; bruised grass is darker and wetter at first, then wilts and springs back over hours to days.
- **Dew and frost trails**: at dawn a dark line through silver grass shows exactly where something passed since the dew formed.
- **Overturned debris**: a stone, stick or leaf flipped over shows its darker, damper underside; it dries and lightens over hours.
- **Scuffs and compressions**: flattened moss, scraped bark on a log, a disturbed line of pine needles.
- **Transfer**: mud or wet sand carried onto rock or dry ground, water drips beside a stream crossing.
- **Hair and feathers** on fences, thorns and bark at the height of the animal’s body.

Use **low-angle light** and look **along** the ground toward the light, not straight down — subtle flattening and shine appear that are invisible from above.

### Trails, runs, beds and lays

- **Trails** are paths used repeatedly: narrow, often worn to bare soil, following the easiest line between feeding, water, cover and resting places. Big animals make big trails; hares and rabbits make **runs** through grass; voles and mice make **runways** and tunnels (under snow in winter).
- **Slides** are smooth chutes into water or down snow banks (otters are famous for them).
- **Beds and lays** are oval patches of flattened vegetation or melted snow where an animal rested — deer often bed with a view and the wind at their back; hares sit in shallow **forms**. Hair in a bed helps identify it.
- **Marking sign**: scrapes on the ground, rubs on saplings (deer antlers), bite and claw marks on trees (bears), urine and scat on prominent points along trails.`,
    },
    { type: 'diagram', id: 's11-browse', caption: 'The same twig, two browsers: clean cut vs torn. Teeth decide the shape of feeding sign.' },
    {
      type: 'md',
      md: `### Feeding sign

Feeding remains are records of the **tools** that made them:

- **Browse** (twigs and buds eaten): deer and other ruminants have **no upper front teeth** — they press twigs against a hard pad and tear, leaving **ragged, fibrous ends**. Rabbits, hares and rodents have sharp upper and lower incisors and leave **clean, angled cuts** (often about 45°). Height above the ground (or snow) gives a clue to the animal’s size.
- **Nuts and cones**: squirrels often split nuts or chew rough holes and strip pine cones into a pile of scales and central cores; small mice and voles chew neater, smaller holes; birds peck or hammer them open.
- **Rooting and digging**: wild boar and pigs turn over large areas of soil; badgers, bears and foxes dig for roots, insects or rodents; ground squirrels leave mounds.
- **Bark stripping and gnawing**: deer strip bark upward in strips; rodents gnaw with fine paired tooth marks; beavers leave pointed stumps and wood chips.
- **Kills and remains**: a bird of prey typically **plucks** feathers, leaving shafts intact; a mammal predator **bites through** feather shafts. Large carcasses may be cached under debris by big cats and bears — **leave the area immediately**.

### Scat and droppings`,
    },
    { type: 'diagram', id: 's11-scat', caption: 'Schematic shapes only — sizes, contents and forms vary with diet and season. Look, photograph, never touch.' },
    {
      type: 'md',
      md: `Scat tells you **who**, **what they eat** and sometimes **when**. Describe: shape, size (diameter matters more than length), contents (hair, bone, seeds, insect parts, berries), location (on a trail junction, a rock, covered with soil).

- **Pellets**: deer, sheep, goats (often with a nipple or dimple at one end), rabbits and hares (round, fibrous, slightly flattened).
- **Tubular, twisted, tapered**: the dog family; often full of hair and bone fragments, frequently left on prominent spots as marking.
- **Segmented, blunt**: the cat family; often partly covered by a scrape.
- **Long, thin, twisted with hair, often musky**: the weasel family; otter spraints near water are full of fish scales.
- **Bird droppings**: a dark part with a **white uric-acid cap** — birds excrete nitrogen as uric acid, which saves water.
- **Owl pellets and other bird pellets** are **not scat**: they are regurgitated fur, bones and insect parts.
- **Latrines**: some animals (raccoons, badgers, some antelope) use the same toilet sites repeatedly.

Freshness follows the same logic as Lesson 3: moist and shiny vs dry and crusted, insects on it, rain or frost on it.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Scat, droppings and carcasses: hygiene first',
      md: 'Never touch scat, pellets, droppings or carcasses with bare hands, and never sniff them closely. Use a stick; photograph with a scale. Wash hands afterwards. Keep dogs and children away. Examples of the risks: **Echinococcus** tapeworm eggs in fox and dog scat; **raccoon roundworm** eggs in raccoon latrines; **hantavirus** from rodent droppings and nests — in huts, sheds and cabins do **not sweep or vacuum dry droppings**: ventilate, wet them with disinfectant and wipe them up wearing gloves. Treat any animal that seems tame, sick or behaves strangely as a possible rabies case and keep away (Stage 9).',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Wildlife law and ethics',
      md: 'Many countries protect wildlife from **disturbance** — especially nests, dens, roosts and breeding sites — and some protect shed antlers, feathers, bones and eggs from collection (for example, US national parks prohibit removing natural objects and disturbing wildlife). Rules differ by country and site: check with the land manager before collecting anything, and never use track and sign study to harass, bait or hunt animals outside licensed, legal hunting. Leave No Trace: observe from a distance, do not follow, do not feed.',
    },
  ],
  whyItMatters: 'Sign is available almost everywhere, prints are not. It tells you what lives here, what they eat and where they rest — which in turn tells you where not to camp (on a trail or beside a carcass), which water sources are heavily used (and heavily contaminated), and where the easiest travel lines through dense vegetation run. And because disease risk from scat and droppings is real, knowing what you are looking at keeps you from picking it up.',
  science: [
    {
      type: 'md',
      md: `### Teeth shape sign

Ruminants (deer, sheep, goats, cattle) have a **dental pad** instead of upper incisors: the lower incisors press against it, and the twig is torn off by a jerk of the head — hence ragged, often crushed ends. Rodents and lagomorphs have **ever-growing, chisel-like incisors** worn to a sharp edge, which cut plant stems cleanly at an angle. This is why browse sign can separate groups even when no print is visible.

### Dew trails and the dew point

Dew forms when grass cools below the **dew point** of the air (Stage 12). Grass blades radiate heat to a clear night sky and cool faster than the air, so dew appears first on vegetation. Anything that passes afterwards knocks the drops off, leaving a darker line. A common approximation for the dew point $T_d$ (°C), valid when relative humidity RH is above about 50 %, is:

$$
T_d \\approx T - \\frac{100 - RH}{5}
$$

**Worked example.** Evening air at $T = 12$ °C and RH = 80 %: $T_d \\approx 12 - 20/5 = 8$ °C. If the clear night brings the grass below 8 °C — likely on a calm, clear night — dew forms, and every dark line through it at dawn marks a passage **since the dew formed**. When the sun dries the grass, this clock stops.

### Why bird droppings are white

Mammals excrete nitrogen mostly as urea dissolved in water (urine). Birds (and many reptiles) excrete it as **uric acid**, a nearly insoluble paste that needs little water — the white part of a dropping. It is a water-saving adaptation, and a quick way to tell bird from mammal droppings.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest.** A narrow trail with ragged-browsed bramble tips at knee to chest height, a flattened oval in bracken with grey-brown hair, and pellet groups: deer use this as a route between a bedding thicket and a meadow. Do not camp on it.

**Boreal forest in winter.** Snowshoe hare runs through willow thickets, twigs clipped cleanly at 45° at the height of last month’s snow surface; vole tunnels revealed as the snow melts; a lynx bed on a ridge with a view.

**Desert.** Dug-out pits under shrubs where animals searched for roots or insects; ant-lion pits; droppings concentrated near the only rock overhang with shade; hoof-worn trails converging on a spring (Lesson 5).

**Mountain.** Chamois, ibex or wild sheep trails contour across steep slopes; marmot or pika hay piles and burrows in boulder fields; eagle plucking posts on prominent rocks.

**Tropical forest.** Wild pig wallows and rubbing trees caked with mud; fruit fallen with bite marks under a fruiting fig; monkey feeding remains dropped from the canopy.

**Coast.** Otter spraints with fish scales on rocks at the water’s edge; gull pellets of shell fragments; shorebird probe holes in mudflats.

**Urban.** Fox scat on prominent spots in parks and gardens; rat runs along walls (greasy smears); pigeon droppings under ledges. The hygiene rules apply equally in town.`,
    },
  ],
  mistakes: [
    'Picking up scat, pellets or bones with bare hands, or letting a dog roll in or eat them.',
    'Sweeping or vacuuming dry rodent droppings in a hut or shed (risk of inhaling hantavirus).',
    'Mistaking an owl pellet for scat — it is regurgitated, and its bones tell you what the owl ate.',
    'Calling every torn twig “deer” without checking height and other sign (livestock tear browse too).',
    'Camping on a well-used game trail or near a cached carcass.',
    'Myth: “you can tell the exact species from scat shape alone.” Diet changes shape and colour; overlap between species is large.',
    'Myth: “a wild animal that walks up to you is friendly.” Unusual tameness can be a sign of disease or habituation — keep away.',
  ],
  exercises: [
    {
      id: 's11-l4-e1',
      title: 'Sign-only walk',
      level: 2,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Notebook', 'Phone camera', 'A stick for pointing', 'Hand sanitiser or soap and water'],
      steps: [
        'Walk a route with little mud or snow (grass, forest floor). Your task: find evidence of animals without using any clear prints.',
        'Record at least ten sign items in categories: disturbed vegetation, trails/runs, beds, feeding sign, scat, hair/feathers, marking.',
        'For each, write what made it (family or “unknown”), how you know, and a rough age with reasons.',
        'Look along the ground toward low sun at least once and note what you see that you missed from above.',
      ],
      success: ['Ten items across at least five categories.', 'Each item has a reason, not just a name.', 'No sign handled by hand.'],
      skill: 'track-id',
      safetyNote: 'Do not touch scat, droppings, pellets or carcasses; use a stick and wash hands afterwards. Leave the area if you find a fresh carcass or cache. Do not approach dens or nests.',
    },
    {
      id: 's11-l4-e2',
      title: 'Browse comparison at home',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Two cut twigs from a garden shrub (prunings)', 'Sharp secateurs', 'Magnifier or phone camera macro'],
      steps: [
        'Cut one twig cleanly at an angle with secateurs (a model of rodent or rabbit incisors).',
        'Tear the other off by gripping and pulling sideways (a model of deer browse).',
        'Photograph both ends close up and compare: cut face vs fibres.',
        'Leave both outside for a few days and photograph again: note colour and drying.',
      ],
      success: ['You can explain which animal groups make each type and why.', 'You recorded the colour change over days.'],
      skill: 'track-id',
    },
  ],
  quiz: [
    {
      id: 's11-l4-q6',
      kind: 'single',
      prompt: 'Off-trail in the forest, you smell something rotten and find a large mound of leaves and soil heaped over what looks like a deer carcass. What do you do?',
      choices: [
        { id: 'a', text: 'Uncover it carefully to see what killed the deer', why: 'A covered carcass is often a cache that a big cat or bear intends to return to — and may be guarding nearby.' },
        { id: 'b', text: 'Leave promptly the way you came, stay alert, and report it', why: 'Correct — avoid the predator’s food, and inform the land manager.' },
        { id: 'c', text: 'Camp nearby, out of sight, to watch for the predator', why: 'Camping near a cache invites a dangerous encounter.' },
        { id: 'd', text: 'Take a leg bone as a souvenir before moving on', why: 'Unsafe (hygiene, predator) and often illegal.' },
      ],
      answer: 'b',
      concepts: ['feeding-sign', 'trk-wildlife-distance', 'immediate-danger'],
      explanation: 'Cached carcasses are among the most dangerous places to linger in predator country. Leave, and report.',
    },
    {
      id: 's11-l4-q2',
      kind: 'single',
      prompt: 'You open a mountain hut that has been closed all winter and find mouse droppings on the floor and bunks. What should you do?',
      choices: [
        { id: 'a', text: 'Sweep them out quickly before unpacking so the floor is clean', why: 'Sweeping dry droppings can put virus particles into the air you breathe.' },
        { id: 'b', text: 'Ventilate, wear gloves, wet with disinfectant, wait, then wipe and bag', why: 'Correct — this follows public-health guidance for hantavirus prevention; wash your hands afterwards.' },
        { id: 'c', text: 'Vacuum them up with the hut’s vacuum cleaner to avoid touching them', why: 'Vacuuming also aerosolises particles.' },
        { id: 'd', text: 'Leave them; a few mouse droppings in a hut are harmless to people', why: 'Rodent droppings can transmit hantavirus and other infections.' },
      ],
      answer: 'b',
      concepts: ['scat-hygiene'],
      explanation: 'Open doors and windows, wear gloves, wet the droppings with disinfectant, wait, then wipe up, bag them and wash hands — never sweep or vacuum dry droppings.',
    },
    {
      id: 's11-l4-q1',
      kind: 'single',
      prompt: 'Willow twigs are bitten off at about 60 cm height with ragged, torn, fibrous ends. The most likely browser is:',
      diagram: 's11-browse',
      choices: [
        { id: 'a', text: 'A deer or other ruminant', why: 'Correct — no upper incisors, so they tear rather than cut.' },
        { id: 'b', text: 'A hare', why: 'Hares cut twigs cleanly at an angle.' },
        { id: 'c', text: 'A vole', why: 'Voles gnaw with fine tooth marks near the ground.' },
        { id: 'd', text: 'A beaver', why: 'Beavers leave pointed, gnawed stumps and chips, not torn tips.' },
      ],
      answer: 'a',
      concepts: ['feeding-sign'],
      explanation: 'Ragged, torn tips point to ruminants; clean angled cuts to rabbits, hares and rodents.',
    },
    {
      id: 's11-l4-q3',
      kind: 'single',
      prompt: 'Which statement about scat and pellets is correct?',
      choices: [
        { id: 'a', text: 'The white part of a bird dropping is uric acid', why: 'Correct — a water-saving way of excreting nitrogen.' },
        { id: 'b', text: 'Owl pellets are owl scat packed with fur and bone', why: 'Owl pellets are regurgitated fur and bone, not scat.' },
        { id: 'c', text: 'Scat shape alone identifies the species reliably', why: 'Diet changes shape, and overlap between species is large.' },
        { id: 'd', text: 'Dry scat is safe to break open with your fingers', why: 'Dry scat can still carry parasite eggs. Use a stick.' },
      ],
      answer: 'a',
      concepts: ['scat-id', 'scat-hygiene'],
      explanation: 'Owl pellets are regurgitated, not scat; dog-family scat is often tubular, twisted and tapered with hair and bone. Describe shape, size, contents and location — and never handle it.',
    },
    {
      id: 's11-l4-q4',
      kind: 'single',
      prompt: 'At dawn you see a dark line through silver, dew-covered grass. What does it tell you about timing?',
      choices: [
        { id: 'a', text: 'Something passed through after the dew formed', why: 'Correct — whatever knocked the dew off came after it formed.' },
        { id: 'b', text: 'Something passed through before the dew formed', why: 'A dark line means dew was knocked off, which can only happen after the dew had formed.' },
        { id: 'c', text: 'It shows a route, but nothing at all about timing', why: 'Dew is a dated layer, so the line does give a time bracket.' },
        { id: 'd', text: 'Something passed through within the last few minutes', why: 'The dew only says “after it formed” (usually after midnight on clear nights), not how recently.' },
      ],
      answer: 'a',
      concepts: ['disturbed-vegetation', 'age-bracketing'],
      explanation: 'Dew is a dated layer: anything that knocks it off passed after it formed (usually after midnight on clear nights).',
    },
    {
      id: 's11-l4-q5',
      kind: 'single',
      prompt: 'Evening air is 15 °C with 70 % relative humidity. Using $T_d \\approx T - (100 - RH)/5$, what is the approximate dew point?',
      choices: [
        { id: 'a', text: 'About 9 °C', why: 'Correct — 15 − 30/5 = 9 °C.' },
        { id: 'b', text: 'About −15 °C', why: 'This forgets to divide (100 − RH) by 5.' },
        { id: 'c', text: 'About 1 °C', why: 'This uses RH (70) instead of 100 − RH (30).' },
        { id: 'd', text: 'About 21 °C', why: 'This adds the correction instead of subtracting it; the dew point cannot exceed the air temperature.' },
      ],
      answer: 'a',
      concepts: ['dew-point', 'disturbed-vegetation'],
      explanation: '$15 - 30/5 = 9$ °C. On a clear, calm night, grass cools below this and dew forms — setting up a dew-trail clock for the morning.',
    },
  ],
  scenario: {
    id: 's11-l4-sc',
    setup: 'Late afternoon in a temperate forest, you are choosing a spot for an emergency overnight bivouac. The flattest, most sheltered spot is on a narrow, bare-earth path through dense undergrowth. Along it you see pellet groups, torn twig tips at waist height, a wallow of muddy water and, 30 m on, tubular twisted scat full of hair on a rock.',
    question: 'Where do you set up?',
    choices: [
      { id: 'a', text: 'On the path — it is flat, sheltered and clear of vegetation.', why: 'You would be sleeping on a busy game trail used at night by deer (and the predators that follow them), and next to a contaminated wallow.' },
      { id: 'b', text: 'Beside the wallow, so you have water for the night.', why: 'Wallows attract animals and are fouled; the water needs full treatment and the site is busy at night.' },
      { id: 'c', text: 'Off the trail, 50–100 m away on a small rise with no animal sign, dead-tree hazards checked, and water carried from a cleaner source and treated.', why: 'Best: avoids animal traffic and contaminated water while following the shelter-site rules of Stage 5.' },
      { id: 'd', text: 'Keep walking in the dark to find a better spot.', why: 'Travelling off-trail in the dark is a common way to get lost or injured; better to use the remaining light to set up away from the trail.' },
    ],
    best: 'c',
    debrief: 'Sign turned into a site decision. Pellets and torn browse say deer use this path; the twisted hairy scat says a canid follows it; the wallow says animals gather here. Stage 5’s site-selection rules — look up, look around, avoid hazards — include “not on the animals’ highway”. Water from wallows and heavily used pools needs the most careful treatment (Stage 4).',
    concepts: ['beds-trails-runs', 'scat-id', 'site-hazards', 'water-treatment'],
  },
  summary: [
    'Most ground shows **sign, not prints**: bent stems, dew trails, overturned debris, scuffs, transfer, hair.',
    '**Trails, runs, beds, slides and marking sign** show how animals use a place — do not camp on them.',
    'Feeding sign records teeth: **torn browse = ruminants**, **clean 45° cuts = rabbits, hares, rodents**.',
    'Scat: pellets, twisted/tapered (dog family), segmented (cat family), white-capped (birds); owl pellets are not scat.',
    '**Never handle scat, droppings or carcasses**; never sweep dry rodent droppings; leave cached carcasses at once.',
    'Wildlife disturbance and collection are regulated in many places — check local rules.',
  ],
  furtherReading: ['trk-elbroch-mammal-tracks', 'trk-cdc-hantavirus', 'lnt-principles'],
  references: ['trk-elbroch-mammal-tracks', 'trk-cdc-hantavirus', 'trk-cdc-baylisascaris', 'trk-cdc-echinococcosis', 'fa-cdc-rabies', 'trk-nps-wildlife-distance', 'cfr-36-2-1', 'lnt-principles'],
}
