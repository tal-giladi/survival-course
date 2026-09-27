import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's11-l2',
  stage: 11,
  order: 2,
  title: 'Gaits and direction of travel',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s11-l1'],
  concepts: ['gait-patterns', 'direction-of-travel', 'pressure-releases', 'track-measurement'],
  objectives: [
    'Recognise the trail patterns of the main gaits — **walk, trot, lope/gallop and bound** — and what each suggests about behaviour.',
    'Measure **step, stride and trail width** and use them to compare trails and estimate relative speed.',
    'Determine the **direction of travel** from several independent cues, including in poor prints.',
    'Describe **pressure releases** (the shapes pushed into a print by shifting weight) and state the limits of what they can reliably tell you.',
  ],
  explanation: [
    {
      type: 'md',
      md: `A single print tells you **who**; the pattern of prints tells you **what they were doing**. Animals change gait with speed and purpose, and each gait leaves a recognisable pattern. Reading gaits lets you tell a fox hunting (slow, meandering walk with stops) from one travelling (a straight trot for kilometres), a relaxed deer from a fleeing one, a person strolling from one running or stumbling.

### The four gait patterns you need first`,
    },
    { type: 'diagram', id: 's11-gaits', caption: 'Trail patterns, travelling left to right. The same animal uses several gaits; the pattern tells you which.' },
    {
      type: 'md',
      md: `- **Walk.** Feet move one at a time; prints alternate left–right in a zig-zag. Many animals — cats, foxes, deer — place the hind foot in or just beside the front print (**direct register**), which makes a walking trail look like a line of single prints. Slow, careful, foraging or stalking.
- **Trot.** Diagonal pairs of feet (left front + right hind) move together. The trail is **straighter and narrower**, steps longer and very even. The **dog family’s** travelling gait: a fox or wolf trot can run in a near-straight line for kilometres. Deer also trot when moving with purpose.
- **Lope and gallop.** Faster gaits in which the feet land in a sequence: groups of **three or four prints in a slanting line**, separated by long gaps as the animal is airborne or on one foot. Groups longer and gaps bigger with speed.
- **Bound and hop.** Front and hind pairs land together. Weasel-family animals bound in **pairs** (hind feet landing in the front prints). Rabbits and hares make **groups of four** in which the **long hind prints land side by side ahead** of the two front prints — the hind feet swing past the front feet. Squirrels do the same with crisper prints. Many small birds **hop** (paired prints); larger ground birds **walk** (alternating).

Humans walk (alternating, heel-first), run (longer strides, toe-first, deeper toe digs, often no heel mark) and — when tired, injured or carrying loads — shuffle, drag feet or stagger: all visible in a trail, and all important in a search (Lesson 6).

### Measuring the trail`,
    },
    { type: 'diagram', id: 's11-track-measure', caption: 'Step (one print to the next), stride (a print to the next print of the same foot), trail width (outer edges).' },
    {
      type: 'md',
      md: `For walks and trots measure the **step** or **stride** and the **trail width**; for lopes and bounds measure the **group length** and the **gap** between groups. Measure several and use the average. Within one individual, **longer strides mean faster movement**; a sudden change in pattern means a change in behaviour — a trot breaking into a gallop (alarm, chase), a walk dropping into short stops (investigating, feeding).

### Direction of travel`,
    },
    { type: 'diagram', id: 's11-direction', caption: 'Cues in the print and in the vegetation. Use several; any one can mislead.' },
    {
      type: 'md',
      md: `In a clear print, **toes point forward** — done. But prints are often blurred, half-filled or only partial. Then combine cues:

1. **Print shape:** toes at the front; hoof tips point forward; in a hare group, the long hind prints are at the **front**.
2. **Toe dig:** weight rolls from heel to toes, so the **front of the print is usually deeper** and its rim steeper.
3. **Displaced material:** at push-off the foot shoves soil backward, often leaving a small **ridge behind the toe dig** inside the print; loose material may be sprayed out. How it sprays depends on gait and substrate — use it only together with other cues.
4. **Group order** in lopes and bounds (the pattern repeats in one direction).
5. **Vegetation:** grass and twigs are **bent and pressed in the direction of travel**; leaves are scuffed forward; a dark line through dewy grass shows the path.
6. **Where it goes:** trails lead to and from things — water, cover, a den, a road. Follow the trail a few metres both ways before deciding.

### Pressure releases — useful vocabulary, handle with care

When weight shifts inside a moving foot, the substrate records it as small ridges, crumbles, discs and dishes within the print. Some tracking schools teach a detailed vocabulary of these **pressure releases** and claim they reveal head turns, hesitation, even an animal’s intentions. The basic mechanics are solid: **turning, stopping, accelerating and slipping** do leave characteristic asymmetries — a ridge pushed up on the outside of a turn, a deep toe dig and spray at an acceleration, a skid at a slip. But the more detailed claims have **not been tested systematically**, and different substrates produce similar shapes for different reasons. Treat fine interpretations as hypotheses to check against the rest of the trail, not as facts.`,
    },
    { type: 'sim', id: 'tracking-scene', caption: 'Identify family, gait and direction in drawn trails — then bracket their age (Lesson 3).' },
  ],
  whyItMatters: 'Direction of travel is the single most useful fact a trail can give you: which way an animal went to water, which way a lost person was heading, whether the prints on your route are coming toward you or going away. Gait tells you the story — relaxed, hunting, fleeing, exhausted — and changes in gait mark the places where something happened.',
  science: [
    {
      type: 'md',
      md: `### From stride to speed: Alexander’s formula

The zoologist R. McNeill Alexander showed (1976) that animals of very different sizes move in **dynamically similar** ways when their speed is scaled to their size. From measurements of living animals he derived an empirical formula that estimates speed from stride length and hip height:

$$
v \\approx 0.25\\, g^{0.5}\\, \\lambda^{1.67}\\, h^{-1.17}
$$

where $v$ is speed (m/s), $g = 9.81$ m/s², $\\lambda$ is **stride length** (m — a print to the next print of the same foot) and $h$ is **hip height** (m). In words: speed grows a little faster than stride length, and a given stride means a faster pace for a short-legged animal than for a tall one. It was originally used to estimate dinosaur speeds from fossil trackways — the ultimate "old tracks".

**Worked example.** A person with hip height $h = 0.9$ m leaves a stride of $\\lambda = 1.6$ m:

- $\\lambda^{1.67} = 1.6^{1.67} \\approx 2.19$
- $h^{-1.17} = 0.9^{-1.17} \\approx 1.13$
- $g^{0.5} \\approx 3.13$

$$
v \\approx 0.25 \\times 3.13 \\times 2.19 \\times 1.13 \\approx 1.9\\ \\text{m/s} \\;(\\approx 7\\ \\text{km/h})
$$

A brisk walk. The same person with a 2.8 m stride would be running at roughly $0.25 \\times 3.13 \\times 5.58 \\times 1.13 \\approx 4.9$ m/s. The formula is **approximate** (errors of tens of per cent are normal, and it depends on gait and ground), but the *ratio* is robust: within one individual, a stride 1.5× longer means roughly $1.5^{1.67} \\approx 2$× faster.

A useful companion is the **relative stride** $\\lambda / h$: in Alexander’s analysis, values below about 2 indicate walking, and values well above 2 indicate running or trotting.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal forest in snow.** A wolf trail runs straight down a frozen river in a direct-register trot, then breaks into lope groups where it meets a deer trail — the start of a chase. The deer trail changes from a walk to bounding groups with deep hoof prints and dewclaws showing.

**Desert.** At dawn a jackal’s or coyote’s trot crosses the sand flat in a straight line; a hare’s bound groups cross it at right angles and suddenly lengthen — alarm. Wind has not yet erased either.

**Mountain.** On a scree path a person’s prints change from long, regular heel-first steps to short, scuffed, sideways prints on the steeper section — slower, careful movement (or fatigue).

**Coast.** Gulls walk (alternating prints) along the tideline; crows and small waders mix walking and hopping; an otter’s bounding pairs run from the water to a rock and back.

**Tropical forest trail.** Wild pigs leave messy, overlapping hoof prints and rooted soil; a fleeing group leaves splayed hooves and dewclaw marks deep in the mud.

**Urban park in snow.** A dog’s wandering, zig-zagging trail (sniffing, running to its owner) beside the owner’s steady walk; a fox’s straight trot along the fence line at night.`,
    },
  ],
  mistakes: [
    'Deciding direction from one blurred print without checking the next several.',
    'Reading a hare’s bound backwards: the long hind prints are at the **front** of each group.',
    'Calling a direct-register walk a “two-legged” trail or a trot because only one print per step is visible.',
    'Measuring a single step and treating it as the animal’s typical stride — gaits and speeds vary within metres.',
    'Myth: “pressure releases reveal what an animal was thinking.” Basic shifts (turns, stops, slips) are readable; claims of reading intentions or head turns from tiny ridges are untested.',
    'Following a trail “backtracking” into the direction it came from because you misread direction — always confirm with several cues.',
  ],
  exercises: [
    {
      id: 's11-l2-e1',
      title: 'Your own gaits in sand',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['A beach, sandy area, fresh snow or a raked patch of soil', 'Tape measure', 'Phone camera', 'A partner'],
      steps: [
        'Walk 10 m at a slow pace, then at a brisk pace, then jog (only if the surface is safe); your partner times each.',
        'Measure the stride (heel to heel of the same foot) for 5 strides in each trail, and the trail width.',
        'Compute each speed from distance ÷ time and compare with the stride lengths. Try Alexander’s formula with your hip height.',
        'Look at the toe digs, heel marks and sprayed material in each trail and note how they change with speed.',
        'Have your partner walk a short trail, turn once and stop once while you look away; read where they turned and stopped.',
      ],
      success: ['Stride lengthens and trail narrows with speed.', 'Estimated and timed speeds agree within about 30 %.', 'You find the turn and the stop from the prints alone.'],
      skill: 'track-id',
      safetyNote: 'Jog only on even, obstacle-free ground. Stay above the tideline on beaches with fast-moving tides or waves.',
    },
    {
      id: 's11-l2-e2',
      title: 'Gait and direction log',
      level: 2,
      safety: 'outdoor',
      minutes: 60,
      materials: ['Notebook', 'Tape measure', 'Phone camera'],
      steps: [
        'On a walk with good track traps (mud, snow, sand), find three animal trails.',
        'For each, sketch at least 3 m of the pattern and label the gait.',
        'Decide the direction of travel using at least three independent cues and write them down.',
        'Look for a change of gait along each trail and suggest (as a hypothesis) why it happened.',
      ],
      success: ['Three trails logged with gait, direction and the cues used.', 'At least one gait change found and described.'],
      skill: 'track-id',
      safetyNote: 'Observe trails only; do not follow fresh trails of large or potentially dangerous animals.',
    },
  ],
  simulations: ['tracking-scene'],
  quiz: [
    {
      id: 's11-l2-q1',
      kind: 'single',
      prompt: 'A long, nearly straight line of evenly spaced, single oval prints with claws, trail width only a few centimetres. What is the animal most likely doing?',
      choices: [
        { id: 'a', text: 'Trotting — a dog-family animal travelling', why: 'Correct — straight, narrow, evenly spaced direct-register prints are the classic canid travelling trot.' },
        { id: 'b', text: 'Bounding', why: 'Bounds leave pairs or groups of four, not single prints.' },
        { id: 'c', text: 'Galloping', why: 'Gallops leave groups of four with long gaps.' },
        { id: 'd', text: 'Stalking prey', why: 'Stalking is slow with short steps, stops and changes of direction.' },
      ],
      answer: 'a',
      concepts: ['gait-patterns'],
      explanation: 'The dog family’s travelling gait is a trot, usually direct register, which makes a straight line of single prints.',
    },
    {
      id: 's11-l2-q2',
      kind: 'single',
      prompt: 'In a hare’s bounding group, two long prints lie side by side and two small prints lie one behind the other. Which end of the group points the way the hare went?',
      diagram: 's11-gaits',
      choices: [
        { id: 'a', text: 'The end with the two long hind prints', why: 'Correct — the hind feet swing past the front feet and land ahead of them.' },
        { id: 'b', text: 'The end with the two small front prints', why: 'The classic beginner’s error: it reads the trail backwards.' },
        { id: 'c', text: 'You cannot tell from a bounding group', why: 'You can — the group structure is diagnostic.' },
      ],
      answer: 'a',
      concepts: ['gait-patterns', 'direction-of-travel'],
      explanation: 'Rabbits, hares and squirrels place their hind feet ahead of their front feet when bounding.',
    },
    {
      id: 's11-l2-q3',
      kind: 'multi',
      prompt: 'A trail of blurred prints crosses a grassy path. Which cues help establish the direction of travel?',
      choices: [
        { id: 'a', text: 'Grass stems bent and pressed one way', why: 'Yes — vegetation is pushed in the direction of travel.' },
        { id: 'b', text: 'The deeper end of each print (toe dig)', why: 'Yes — weight rolls onto the toes at push-off.' },
        { id: 'c', text: 'Where the trail leads a few metres each way (water, cover, a gap in a fence)', why: 'Yes — context is a legitimate cue.' },
        { id: 'd', text: 'The colour of the print', why: 'Colour relates to moisture and age, not direction.' },
        { id: 'e', text: 'Group order in a lope or bound', why: 'Yes — patterns repeat in the direction of travel.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['direction-of-travel'],
      explanation: 'Combine independent cues; any single cue can mislead in poor ground.',
    },
    {
      id: 's11-l2-q4',
      kind: 'numeric',
      prompt: 'Using Alexander’s formula $v \\approx 0.25\\, g^{0.5}\\, \\lambda^{1.67}\\, h^{-1.17}$, estimate the speed (m/s) of a person with hip height 1.0 m and a stride of 2.0 m. (g = 9.81 m/s²; one decimal.)',
      unit: 'm/s',
      answer: 2.5,
      tolerance: 0.2,
      concepts: ['gait-patterns', 'track-measurement'],
      explanation: '$2.0^{1.67} \\approx 3.18$; $1.0^{-1.17} = 1$; $\\sqrt{9.81} \\approx 3.13$. $v \\approx 0.25 \\times 3.13 \\times 3.18 \\approx 2.5$ m/s (≈ 9 km/h) — a slow run. The formula is approximate but good for comparisons.',
    },
    {
      id: 's11-l2-q5',
      kind: 'truefalse',
      prompt: 'Tiny ridges and crumbles inside a print can reliably tell a trained tracker what the animal was thinking about.',
      answer: false,
      concepts: ['pressure-releases'],
      explanation: 'Turns, stops, accelerations and slips leave readable marks, but detailed claims about intentions or head movements from pressure releases have not been systematically tested. Treat them as hypotheses.',
    },
    {
      id: 's11-l2-q6',
      kind: 'order',
      prompt: 'Order these trails of the same fox from slowest to fastest.',
      items: [
        { id: 'walk', text: 'Zig-zag of single prints, short steps, occasional stops' },
        { id: 'trot', text: 'Straight line of single prints, longer even steps' },
        { id: 'lope', text: 'Groups of 3–4 prints in a slant, gaps about 1 m' },
        { id: 'gallop', text: 'Groups of 4 prints, gaps over 2 m, deep toe digs' },
      ],
      answer: ['walk', 'trot', 'lope', 'gallop'],
      concepts: ['gait-patterns'],
      explanation: 'Walk → trot → lope → gallop; group spacing and toe digs grow with speed.',
    },
  ],
  scenario: {
    id: 's11-l2-sc',
    setup: 'You are walking back to camp on a snowy forest road. Fresh boot prints of your hiking partner, who left camp alone an hour ago to “check the view”, leave the road. They start as long regular steps, then become shorter, with scuffed toes and one sideways skid, and head downhill toward a creek gully instead of up toward the viewpoint. It is getting dark in 90 minutes.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Assume they went to the viewpoint and wait at camp.', why: 'The prints say otherwise: they head downhill, and the change of gait suggests difficulty.' },
      { id: 'b', text: 'Call and whistle along the road, note the time and where the prints leave the road (photo, GPS point), then follow the prints carefully while you can see them and signal regularly — turning back at a pre-set time to raise the alarm if you have not found them.', why: 'Best: uses the trail while it is fresh, keeps you within your daylight budget, and preserves the information for rescuers.' },
      { id: 'c', text: 'Run down the gully to catch up.', why: 'Running down steep snowy ground toward a creek risks making you a second casualty — and the skid shows it is slippery.' },
      { id: 'd', text: 'Immediately call emergency services without looking further.', why: 'Reasonable if you are worried and have signal, but a brief, safe search along a clear trail with a turnaround time can resolve it — and you can call at the same time.' },
    ],
    best: 'b',
    debrief: 'Gait change is information: long regular steps turning into short, scuffed ones and a skid suggest slipping or tiredness. Direction (downhill, toward water) matches common lost-person behaviour. A short, bounded search along a clear trail — with signals, a record of the point where the prints leave the road, and a hard turnaround time from your daylight budget — is appropriate. If in doubt, call early; searches go best when they start early.',
    concepts: ['direction-of-travel', 'gait-patterns', 'daylight', 'lost-person-behavior'],
  },
  summary: [
    '**Walk**: zig-zag, often direct register. **Trot**: straight, narrow, even. **Lope/gallop**: slanting groups with gaps. **Bound**: pairs or fours; hare hind prints lead.',
    'Measure **step, stride, trail width** or group and gap; longer strides mean faster movement.',
    'Alexander: $v \\approx 0.25\\, g^{0.5} \\lambda^{1.67} h^{-1.17}$ — approximate, best for comparisons.',
    '**Direction**: toe end, toe dig, group order, vegetation lean, context — use several cues.',
    'Pressure releases show turns, stops and slips; detailed “mind-reading” claims are untested.',
    'A change of gait marks the place where something happened.',
  ],
  furtherReading: ['trk-elbroch-mammal-tracks', 'trk-alexander-1976', 'trk-liebenberg-art'],
  references: ['trk-elbroch-mammal-tracks', 'trk-alexander-1976', 'trk-liebenberg-art', 'trk-cybertracker-cert', 'koester-lpb'],
}
