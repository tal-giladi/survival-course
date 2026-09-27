import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's11-l1',
  stage: 11,
  order: 1,
  title: 'Track identification',
  level: 'intermediate',
  minutes: 50,
  prerequisites: ['s1-l3'],
  concepts: ['track-anatomy', 'track-families', 'track-measurement', 'track-substrate', 'trk-wildlife-distance'],
  objectives: [
    'Name the parts of a mammal print — **toes, claws, palm (metacarpal) and heel pads, negative space** — and say which ones you can actually see in a given print.',
    'Tell the **major track families** apart by toe count, symmetry, claws and outline: dog, cat, weasel, bear, hoofed animals, rabbits and hares, birds and humans.',
    'Measure a print and a trail **consistently** (length, width, step, stride, trail width) and record them with a photo and a scale.',
    'Explain how **substrate** (mud, sand, snow, dust, leaf litter) changes what a print looks like, and why one print is rarely enough.',
    'Observe wildlife sign **without approaching, handling or following** animals.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Tracking is **reading evidence**. A print is a record of a foot meeting a surface at one moment; the trail is a sequence of such moments; and **sign** is everything else an animal (or person) leaves: bent grass, feeding remains, droppings, beds, hair. In this course tracking serves three purposes: to understand the ecology around you (what lives here, where it moves, where water and cover are), to support **navigation and awareness**, and to help **search and rescue** (Lesson 6). It is not taught here as a hunting skill, and it never means approaching animals.

The discipline is the same as the STOP routine from Stage 1: **stop, observe, think, then conclude — and keep the conclusion provisional.** Beginners name the animal first and then look for evidence that agrees. Trackers do the opposite: they describe what they see, measure it, and only then compare with the possibilities.

### Anatomy of a print`,
    },
    { type: 'diagram', id: 's11-track-anatomy', caption: 'Dog family vs cat family — the classic first comparison. Shapes are schematic; real prints vary with foot, speed and ground.' },
    {
      type: 'md',
      md: `Most mammal prints are made by some combination of:

- **Toes (digital pads)** — count them. Four or five is the first big split. Some animals have five toes but the inner toe often fails to print (it is small and set back), so a "four-toed" print may belong to a five-toed animal. Count across several prints.
- **Claws** — small dots or slits ahead of the toes. Dogs and bears usually show them; cats keep them retracted when walking; weasel-family claws often show.
- **Palm (metacarpal) pad** on front feet and **heel (metatarsal) pad** on hind feet — their size and shape are diagnostic: small and triangular in dogs, large with a three-lobed rear edge in cats, C- or chevron-shaped in the weasel family, very wide in bears.
- **Negative space** — the raised ground between pads. In a dog print you can draw an **X** through it; in a cat print you cannot, because the big heel pad crowds the toes.
- **Outline and symmetry** — dog prints are oval and nearly symmetrical left–right; cat prints are round and asymmetrical, with one **leading toe** further forward (like your middle finger).
- **Front vs hind** — in many animals front feet are larger (they carry more weight); in rabbits and hares the hind feet are much longer.

### The major track families`,
    },
    { type: 'diagram', id: 's11-track-families', caption: 'Eight families you can learn first. Within each family, size and trail pattern narrow things down further; a regional field guide finishes the job.' },
    {
      type: 'table',
      head: ['Family', 'Examples across regions', 'Key features', 'Common confusion'],
      rows: [
        ['Dog family', 'Red fox, Arctic fox, coyote, wolf, jackal, domestic dog', '4 toes front and hind, claws usually show, oval, X-shaped negative space', 'Domestic dogs: splayed toes, blunt claws, wandering trail; wild canids: compact prints, purposeful straight trails'],
        ['Cat family', 'Lynx, bobcat, wildcat, cougar, leopard, domestic cat', '4 toes, no claws (usually), round, asymmetrical, large 3-lobed heel pad', 'A dog print in firm ground with claws not showing'],
        ['Weasel family', 'Weasel, stoat, mink, marten, otter, badger, wolverine', '5 toes (inner one may not show), C-shaped pad, bounding pairs', 'Small cats in poor substrate'],
        ['Bears', 'Brown/grizzly, black, polar', '5 toes in an arc, very wide palm pad, long claws; hind print like a broad human foot', 'Human bare feet (but bears have claws and a wider pad)'],
        ['Hoofed animals', 'Deer, moose, elk, sheep, goats, wild boar, pigs', 'Two hoof halves pointing forward; dewclaws print behind in soft ground or at speed', 'Deer vs sheep/goat — shape and habitat; boar dewclaws sit wider'],
        ['Rabbits and hares', 'Cottontail, European rabbit, snowshoe hare, Arctic hare, desert hares', 'Furry feet with few crisp pads; long hind feet land ahead of front feet', 'Squirrels also bound — but show crisp toes and pads'],
        ['Birds', 'Gulls and ducks (webbed), crows and songbirds, herons, ptarmigan', '3 thin forward toes, 1 back; webbing in waterbirds; hop (pairs) or walk (alternate)', 'Small lizards in sand (look for a tail drag)'],
        ['Humans', 'Boots, trainers, sandals, bare feet', 'Heel, arch, ball, sole outline, tread; long regular steps', 'Bear hind prints, old eroded boot prints'],
      ],
      caption: 'Examples are illustrative, not a regional checklist — use a field guide for the species where you are.',
    },
    {
      type: 'md',
      md: `### Measure, photograph, record

Consistency beats precision. Measure **length** (front of the leading toe to the back of the pad, **excluding claws** unless you note otherwise) and **width** (widest point), on several prints, and write down the substrate. Then measure the **trail**: step, stride and trail width (Lesson 2). Photograph each print **straight down, with a scale** (a ruler, a pen of known length) and with low-angle light across it — side light makes shallow features visible; overhead sun at noon flattens them.`,
    },
    { type: 'diagram', id: 's11-track-measure', caption: 'Standard measurements. Write them in a notebook with the date, time, place, substrate and weather.' },
    {
      type: 'md',
      md: `### The substrate changes everything

The same foot leaves a different print in different ground:

- **Wet mud and fine wet sand** record detail: pads, claws, even skin texture — the best "track traps".
- **Dry sand** collapses: prints become rounded bowls, bigger than the foot. Wind erases them within hours.
- **Snow** changes constantly: fresh powder hides detail, sun and warm air **enlarge** prints as their edges melt and sublimate, and deep snow makes animals drag their feet.
- **Leaf litter, grass and rock** rarely show prints at all; here you read **sign** instead — disturbed leaves, bent stems, scuffed moss (Lesson 4).
- **Dust on hard surfaces** (roads, floors, rock slabs) can hold surprisingly clear prints for a short time.

So: find the **best print** in the trail rather than guessing from a poor one, and let the substrate temper your confidence.`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Observe, never approach',
      md: 'Track and sign study is done at a distance from the animal. Do not follow fresh tracks of large predators (bears, big cats, wolves), moose, bison, wild boar or cattle; do not approach dens, nests, carcasses or young animals; leave the area calmly if sign is very fresh. Many parks set minimum distances (for example, several US national parks require at least 100 yards / 91 m from bears and wolves and 25 yards / 23 m from other wildlife). An animal that seems tame or sick may be neither — do not touch it (Stage 9: bites and rabies).',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'How to get good',
      md: 'Tracking is learned by volume and feedback: many hours on real ground, checking your ideas against someone better. Join a local naturalist or tracking club, and when you are ready, take a **CyberTracker track-and-sign evaluation** — a field assessment on real sign where an evaluator explains every answer.',
    },
  ],
  whyItMatters: 'Knowing what moves around you changes decisions: where to put a camp (not on a busy game trail or beside a predator’s kill), whether that pool is visited by many animals (and needs treatment even more), where the easiest line through thick vegetation runs, and whether the prints on a path belong to the person you are looking for. Track identification is also the entry point for all the other skills in this stage — you cannot interpret gait, age or behaviour from a print you have misidentified.',
  science: [
    {
      type: 'md',
      md: `### Why prints are deeper in some places: pressure

How deep a foot sinks depends on the **pressure** it applies — force divided by contact area:

$$
P = \\frac{F}{A} = \\frac{m\\,g}{A}
$$

where $m$ is the mass carried by that foot (kg), $g = 9.81\\ \\text{m/s}^2$, and $A$ is the contact area (m²). Pressure is in pascals (Pa = N/m²).

**Worked example (assumed values).** A 70 kg person standing on one boot with about 250 cm² (0.025 m²) of sole in contact:

$$
P = \\frac{70 \\times 9.81}{0.025} \\approx 27\\,500\\ \\text{Pa} \\approx 27\\ \\text{kPa}
$$

A 30 kg animal momentarily on one foot of about 40 cm² (0.004 m²):

$$
P = \\frac{30 \\times 9.81}{0.004} \\approx 73\\,600\\ \\text{Pa} \\approx 74\\ \\text{kPa}
$$

— nearly three times more, which is why a lighter animal can leave a deeper, sharper print than a heavier person in the same mud. Speed adds dynamic force (landing from a bound can briefly multiply the force several times), so **deep prints do not simply mean a heavy animal**. The same arithmetic explains snowshoes and wide feet: lynx and snowshoe hares spread their weight over very large, furry feet and stay on top of snow that swallows their predators and competitors.

### Why a print can be larger than the foot

Soft substrate flows: dry sand slumps inward and outward, snow melts back from the walls, mud splashes. Most field guides therefore give **ranges** of print sizes and advise measuring many prints. Treat any single measurement as ±10–20 % until you have checked several — a rough working allowance, not a published constant.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest after rain.** The muddy edge of a forest road is a natural track trap: fox, deer, badger and domestic dog prints side by side. Compare the dog’s splayed toes and meandering trail with the fox’s compact oval print and straight line.

**Desert.** At dawn the sand between dunes is a newspaper of the night: beetle trails, jerboa or kangaroo-rat hops, jackal or coyote trots, lizard tail drags. By midday the wind has erased much of it. Read early.

**Subarctic winter.** In fresh snow, a lynx’s round, clawless prints can be nearly as wide as a wolf’s; the lynx trail wanders from cover to cover, the wolf trail runs straight along frozen rivers and ridges. After two sunny days both have grown and lost their detail.

**Coast.** Below the high-tide line every print is younger than the last high water — gull, heron, otter, dog. The best detail is in firm, damp sand, not soft dry sand above the tideline.

**Tropical riverbank.** Soft mud at the water’s edge records everything that drinks there — pigs, deer, big cats, monitor lizards, crocodilians. Treat it as a place to observe from a distance and not to linger; crocodilians and large predators use the same margins.

**Urban.** Dust on a floor after an earthquake, snow on a pavement, mud on a construction site: human and pet prints tell you who has been through a building or along a path — the basis of Lesson 6.`,
    },
  ],
  mistakes: [
    'Naming the animal first and then “seeing” features that fit it (confirmation bias).',
    'Identifying from one poor print instead of finding the clearest print in the trail.',
    'Counting toes from a single print: the fifth toe of some animals often does not register.',
    'Measuring claws in the print length without saying so, or measuring in dry sand and comparing with mud-based field-guide sizes.',
    'Myth: “claws always show on dog prints and never on cat prints.” Dogs on hard ground may show none; cats show claws when slipping, climbing or on steep ground.',
    'Myth: “a deeper print means a heavier animal.” Pressure and speed matter as much as weight.',
    'Following fresh large-predator tracks to “see the animal”, or approaching a den, nest or carcass.',
    'Picking up scat, bones or carcasses with bare hands (Lesson 4).',
  ],
  exercises: [
    {
      id: 's11-l1-e1',
      title: 'Build a tracking box',
      level: 1,
      safety: 'home',
      minutes: 45,
      materials: ['A shallow tray or a raked patch of garden soil', 'Fine sand or soil, water spray', 'Ruler, phone camera, notebook'],
      steps: [
        'Fill the tray with damp, sieved soil or sand and smooth it.',
        'Make prints: your hand pressed like a paw, your bare foot, your shoe, a pet walking across (if you have one).',
        'Photograph each straight down with the ruler beside it, once with overhead light and once with a torch held low from the side.',
        'Measure length and width; sketch each print and label the parts you can see (toes, pads, claws, negative space).',
        'Dry out one half of the tray and repeat: note how the same foot looks in dry vs damp material.',
      ],
      success: ['Side-lit photos show clearly more detail than overhead photos.', 'Sketches label at least three anatomical features.', 'You can explain why the dry-substrate print differs.'],
      skill: 'track-id',
    },
    {
      id: 's11-l1-e2',
      title: 'Track-trap survey',
      level: 2,
      safety: 'outdoor',
      minutes: 90,
      materials: ['Notebook', 'Ruler or tape', 'Phone camera', 'Regional track field guide'],
      steps: [
        'Choose a natural track trap on a public path: a muddy puddle margin, a sandy stream edge, a beach below the tideline, fresh snow.',
        'Find the five clearest prints of different kinds. Photograph each with a scale and side light.',
        'For each, write the description first (toes, claws, pads, outline, size, substrate), then the family, then — only if the evidence supports it — the species.',
        'Check your answers with the field guide and, if possible, an experienced tracker or online tracking community.',
      ],
      success: ['Five prints recorded with description before identification.', 'Family correct for at least four, confirmed by a more experienced person or a good guide.'],
      skill: 'track-id',
      safetyNote: 'Stay on legal paths and away from water edges that are unstable or used by dangerous animals. Do not follow fresh tracks of large predators or large hoofed animals; do not touch scat or carcasses.',
    },
  ],
  simulations: ['tracking-scene'],
  quiz: [
    {
      id: 's11-l1-q1',
      kind: 'single',
      prompt: 'A clear print in mud: four toes, claw marks, an oval outline, a small triangular pad, and you can draw an X through the raised ground between pads. Which family?',
      diagram: 's11-track-anatomy',
      choices: [
        { id: 'a', text: 'Dog family', why: 'Correct — four toes, claws, oval and the X-shaped negative space are the classic canid features.' },
        { id: 'b', text: 'Cat family', why: 'Cat prints are round, asymmetrical, usually clawless, with a large three-lobed heel pad that blocks the X.' },
        { id: 'c', text: 'Weasel family', why: 'Weasel-family prints show five toes and a C-shaped pad.' },
        { id: 'd', text: 'Hoofed animal', why: 'Hoofed animals leave two hoof halves, not toes and pads.' },
      ],
      answer: 'a',
      concepts: ['track-anatomy', 'track-families'],
      explanation: 'Describe first (toes, claws, pad shape, symmetry, negative space), then match. The X is a quick test that separates dog from cat family in good prints.',
    },
    {
      id: 's11-l1-q2',
      kind: 'multi',
      prompt: 'Which features point toward the **cat** family?',
      choices: [
        { id: 'a', text: 'Round outline', why: 'Yes — cat prints are about as wide as long.' },
        { id: 'b', text: 'One toe clearly further forward than the others (leading toe)', why: 'Yes — asymmetry is typical of cats.' },
        { id: 'c', text: 'Large heel pad with three lobes at the rear', why: 'Yes.' },
        { id: 'd', text: 'Five toes in a fan with a C-shaped pad', why: 'No — that is the weasel family.' },
        { id: 'e', text: 'Sharp claw marks on every print in a walking trail on flat ground', why: 'No — cats walk with claws retracted, although claws can show when slipping or climbing.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['track-anatomy', 'track-families'],
      explanation: 'Round, asymmetrical, big three-lobed heel pad, and usually no claws in a walking trail.',
    },
    {
      id: 's11-l1-q3',
      kind: 'truefalse',
      prompt: 'Myth check: a deeper print always means a heavier animal.',
      answer: false,
      concepts: ['track-substrate', 'track-measurement'],
      explanation: 'Depth depends on pressure (force ÷ area), speed and the substrate. A light animal on small feet, or any animal landing from a bound, can sink deeper than a heavier one walking.',
    },
    {
      id: 's11-l1-q4',
      kind: 'numeric',
      prompt: 'A 20 kg animal puts its weight on one foot with a contact area of 25 cm² (0.0025 m²). What pressure does it apply, in kPa? (g = 9.81 m/s²; nearest whole number.)',
      unit: 'kPa',
      answer: 78,
      tolerance: 2,
      concepts: ['track-substrate'],
      explanation: '$P = mg/A = 20 \\times 9.81 / 0.0025 = 78\\,480$ Pa ≈ 78 kPa — about three times the pressure under a 70 kg person’s boot.',
    },
    {
      id: 's11-l1-q5',
      kind: 'single',
      prompt: 'You find a line of large, very fresh prints with five toes and long claw marks crossing your path in a forest known for bears. What do you do?',
      choices: [
        { id: 'a', text: 'Follow them quietly for a few hundred metres to get a photo', why: 'Following fresh large-predator tracks can lead you straight to the animal, possibly at a carcass or with young.' },
        { id: 'b', text: 'Photograph one print with a scale from where you stand, then move away in the other direction, making your presence known, and tell others / the land manager', why: 'Correct — record, avoid, inform.' },
        { id: 'c', text: 'Measure every print along the trail to be sure of the species', why: 'Lingering beside very fresh bear sign increases the chance of a surprise encounter.' },
        { id: 'd', text: 'Ignore them; tracks tell you nothing useful', why: 'They tell you something very useful: change your route.' },
      ],
      answer: 'b',
      concepts: ['trk-wildlife-distance', 'immediate-danger'],
      explanation: 'Tracking is for interpretation and avoidance, not for getting close. Very fresh sign of large, potentially dangerous animals is a reason to change your plan.',
    },
  ],
  scenario: {
    id: 's11-l1-sc',
    setup: 'On a winter walk in a subarctic forest you and a friend find large round prints in fresh snow. Your friend says: “Wolf — they’re huge!” The prints are about 9 cm wide, show no claws, and the trail wanders between spruce thickets. It is 14:30; sunset is at 15:40 and you are 5 km from the car.',
    question: 'What is the best response?',
    choices: [
      { id: 'a', text: 'Agree it is a wolf and follow the trail to find the pack.', why: 'Wrong on the evidence (round, clawless, wandering suggests lynx) and wrong on the action: following wildlife with an hour of daylight left.' },
      { id: 'b', text: 'Describe the evidence together — round, no claws, asymmetrical toes, wandering trail — conclude “probably lynx”, take a photo with a scale, and head back now to reach the car before dark.', why: 'Best: evidence-first identification, a quick record, and a decision that respects the daylight budget.' },
      { id: 'c', text: 'Spend 40 minutes measuring the trail carefully to settle the argument.', why: 'Good tracking habit, bad timing: it spends most of your remaining daylight 5 km from the car.' },
      { id: 'd', text: 'Leave immediately without recording anything because all large tracks mean danger.', why: 'Safe but wasteful — a 30-second photo costs nothing and the evidence suggests a shy cat, not an immediate threat.' },
    ],
    best: 'b',
    debrief: 'Two habits from this lesson and one from Stage 1. Describe before naming: round, clawless, asymmetrical prints in a wandering trail fit a lynx; wolves leave oval, clawed prints in straight lines. Enlarged snow prints fool people about size. And the daylight budget still rules: 70 minutes of light for 5 km in snow means leaving now.',
    concepts: ['track-families', 'track-substrate', 'daylight'],
  },
  summary: [
    'Tracking is evidence reading: **describe, measure, then identify** — and keep conclusions provisional.',
    'Key features: **toe count, claws, pad shape, negative space, symmetry, outline**, front vs hind.',
    'Dog family: 4 toes, claws, oval, X. Cat family: 4 toes, no claws, round, leading toe, big 3-lobed pad.',
    'Measure consistently, photograph **straight down with a scale and side light**, record the substrate.',
    'Substrate changes size and detail: find the best print, and trust ranges, not single numbers.',
    '**Never approach or follow** wildlife; fresh sign of large animals is a reason to change route.',
  ],
  furtherReading: ['trk-elbroch-mammal-tracks', 'trk-liebenberg-art', 'cybertracker', 'was'],
  references: ['trk-elbroch-mammal-tracks', 'trk-liebenberg-art', 'trk-cybertracker-cert', 'trk-tracker-cert-na', 'cybertracker', 'was', 'trk-nps-wildlife-distance', 'lnt-principles', 'fa-cdc-rabies'],
}
