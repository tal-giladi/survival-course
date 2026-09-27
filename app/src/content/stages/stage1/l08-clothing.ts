import type { Lesson } from '../../types'

export const l08: Lesson = {
  id: 's1-l8',
  stage: 1,
  order: 8,
  title: 'Clothing and environmental protection',
  level: 'beginner',
  minutes: 35,
  prerequisites: ['s1-l7'],
  concepts: ['clothing', 'insulation', 'wet-wind'],
  objectives: [
    'Explain that insulation works by **trapping still air**, and why moisture destroys it.',
    'Build a **layering system** and manage it actively to avoid sweating and chilling.',
    'Compare **cotton, wool, synthetics and down** in wet and dry conditions.',
    'Protect the **extremities, eyes and skin** in cold, heat and sun.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Clothing is the shelter you carry everywhere. It is also the first line of every heat-balance control from the previous lesson.

### Insulation is trapped air

Still air is a poor conductor of heat. Fleece, down, wool and synthetic fill all work by holding air still in a thick, fluffy layer. Two consequences:

1. **Thickness (loft) matters more than material.** Compressed insulation — under a tight pack strap, or down you are lying on — loses most of its value.
2. **Water fills the air spaces**, and water conducts heat about 25× better than air. Wet insulation is far less effective, and drying it costs body heat through evaporation.`,
    },
    { type: 'diagram', id: 'layering', caption: 'The layering system. Each layer has one job; together they are adjustable.' },
    {
      type: 'md',
      md: `### Layering, actively managed

- **Base layer** — next to the skin; moves sweat away. Merino wool or synthetic. **Not cotton.**
- **Mid layer** — light fleece or wool; the layer you add or remove most while moving.
- **Insulation** — a puffy jacket (down or synthetic) for when you *stop*.
- **Shell** — windproof and waterproof jacket and trousers.

The system only works if you **adjust it constantly**: "be bold, start cold" — begin a climb slightly chilly, vent before you sweat, and throw on the puffy the moment you stop. Stopping for five minutes without adding a layer is how many people start down the path to hypothermia.`,
    },
    {
      type: 'table',
      head: ['Material', 'Dry warmth', 'When wet', 'Notes'],
      rows: [
        ['**Cotton**', 'Good', 'Very poor; holds water, dries slowly', '"Cotton kills" in cold-wet conditions. Excellent in hot deserts, where evaporative cooling is wanted.'],
        ['**Wool (merino)**', 'Good', 'Retains some warmth; dries slowly', 'Odour-resistant; heavier when wet.'],
        ['**Synthetic (polyester fleece, synthetic fill)**', 'Good', 'Retains more warmth; dries fast', 'Cheap, robust; synthetic fill tolerates damp.'],
        ['**Down**', 'Best warmth-to-weight', 'Collapses; almost useless when soaked', 'Protect with a shell; treated down resists damp better.'],
      ],
    },
    {
      type: 'md',
      md: `### Extremities, eyes and skin

- **Head and neck.** The head does not lose "40–50 % of body heat" (an old myth), but it does not vasoconstrict much either, so it keeps losing heat when the rest of you is conserving it. A hat is one of the cheapest warmth controls — and a sun hat one of the best heat controls.
- **Hands.** Mittens are warmer than gloves (less surface area). Carry a spare dry pair.
- **Feet.** Wet feet for days cause **immersion (trench) foot**, even above freezing. Dry socks, air your feet, treat hot spots before they become blisters.
- **Eyes.** Snow, water and sand reflect UV; sunglasses prevent snow blindness (photokeratitis).
- **Skin in heat.** Loose, light-coloured clothing that **covers** skin — as desert peoples wear — reduces radiant heat gain and water loss compared with bare skin. Add a wide-brim hat and neck cover.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Improvised layers',
      md: 'A large plastic bin bag with a face hole is a windproof, waterproof vest. Dry leaves or grass stuffed between two layers of clothing add insulation. Newspaper under a jacket helps. Improvised layers are ugly — and they work.',
    },
  ],
  whyItMatters: 'Your clothing determines how long you can stay safe before you need a shelter or fire. Good clothing management turns a cold, wet night from a medical emergency into an uncomfortable story.',
  science: [
    {
      type: 'md',
      md: `### The clo unit

Clothing insulation is measured in **clo**. One clo is defined as $0.155\\ \\text{m}^2\\cdot\\text{°C/W}$ — roughly a business suit, which keeps a resting person comfortable at about 21 °C. Heat flow through clothing is approximately

$$
Q = \\frac{A \\, (T_{skin} - T_{air})}{0.155 \\times I_{clo}}
$$

where $A$ is body surface area (~1.8 m² for an adult). **Intuition:** double the clo and you halve the heat loss for the same temperature difference.

Example: skin at 33 °C, air at 0 °C, 2 clo, $A = 1.8$:
$Q = 1.8 \\times 33 / (0.155 \\times 2) \\approx 190\\ \\text{W}$ — more than twice resting metabolism. A resting person in 2 clo at 0 °C will get cold; walking (300+ W) they will be warm. That is exactly why you add the puffy when you stop.

Wetness can cut the effective clo of many garments by half or more, and wind penetrating the outer layers reduces it further — both effects the Heat Balance Lab models.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain day hike, 8 °C.** Synthetic tee + light fleece while climbing; shell over the top when the wind picks up at the ridge; puffy on for the lunch stop; everything vented before the next climb.

**Desert, 40 °C.** Long-sleeved, loose, light cotton shirt and trousers, wide-brim hat, neck cloth — soaked with a little water if water is plentiful. Here cotton’s wetness is an advantage.

**Tropical forest.** Quick-drying synthetic, long sleeves against insects and scratches, one dry set kept sealed for sleeping.

**Subarctic winter.** Vapour management dominates: avoid sweating at all costs, vent constantly, and dry damp layers inside your sleeping bag or by the fire.

**Urban winter outage.** Wear layers indoors, including a hat; gather the household into one room; insulate from cold floors.`,
    },
  ],
  mistakes: [
    'Wearing cotton base layers or jeans in cold, wet conditions.',
    'Waiting until you are cold to add layers, or until you are soaked in sweat to remove them.',
    'Compressing insulation under tight straps, or relying on down in constant rain.',
    'Ignoring feet: wet socks for days → immersion foot and blisters that stop you walking.',
    'Stripping off in desert heat — bare skin gains more radiant heat and loses more water.',
  ],
  exercises: [
    {
      id: 's1-l8-e1',
      title: 'Clothing system audit',
      level: 3,
      safety: 'home',
      minutes: 40,
      steps: [
        'Lay out everything you would wear and carry for a cool, wet day hike.',
        'Label each item: base / mid / insulation / shell / extremities.',
        'Note the fibre of each item; flag every cotton item.',
        'Identify gaps: spare socks? warm hat? spare gloves? insulation for stopping?',
        'Fix at least two gaps.',
      ],
      success: ['Every layer role is covered.', 'No cotton in the cold-wet system.', 'A spare dry insulating item is packed in a waterproof bag.'],
      skill: 'clothing-system',
    },
    {
      id: 's1-l8-e2',
      title: 'Layer management on a hill walk',
      level: 3,
      safety: 'outdoor',
      minutes: 90,
      steps: [
        'On a walk with a climb, start slightly cool ("be bold, start cold").',
        'Adjust layers at least 4 times to stay just below sweating.',
        'At each stop, add insulation within 60 seconds.',
        'Afterwards, note how damp your base layer was.',
      ],
      success: ['Base layer only lightly damp at the end.', 'You never felt cold at a stop for more than a minute.'],
      skill: 'clothing-system',
    },
  ],
  quiz: [
    {
      id: 's1-l8-q1',
      kind: 'single',
      prompt: 'Why does insulation lose much of its effectiveness when wet?',
      choices: [
        { id: 'a', text: 'Water is heavier than air.', why: 'Weight is not the mechanism.' },
        { id: 'b', text: 'Water displaces trapped air and conducts heat far better than air; evaporation removes more heat.', why: 'Correct.' },
        { id: 'c', text: 'Wet fibres stop producing heat.', why: 'Fibres never produce heat; they trap it.' },
        { id: 'd', text: 'It only matters for cotton.', why: 'All insulation suffers; cotton suffers most.' },
      ],
      answer: 'b',
      concepts: ['insulation'],
      explanation: 'Insulation works by trapping still air. Water replaces the air and conducts heat much better.',
    },
    {
      id: 's1-l8-q2',
      kind: 'single',
      prompt: 'In which environment is loose cotton clothing a reasonable choice?',
      choices: [
        { id: 'a', text: 'Autumn hills in rain', why: 'Cold + wet: cotton is dangerous.' },
        { id: 'b', text: 'Hot, dry desert', why: 'Correct — its evaporative cooling and coverage are an advantage.' },
        { id: 'c', text: 'Subarctic winter', why: 'Vapour management is critical; cotton traps moisture.' },
        { id: 'd', text: 'Spring snow travel', why: 'Wet snow + cotton is a poor combination.' },
      ],
      answer: 'b',
      concepts: ['clothing'],
      explanation: 'The same property that makes cotton dangerous in the cold (holding water) is useful in dry heat.',
    },
    {
      id: 's1-l8-q3',
      kind: 'numeric',
      prompt: 'Using $Q = A(T_{skin}-T_{air})/(0.155 \\times I_{clo})$ with $A = 1.8$ m², skin 33 °C, air 3 °C and 3 clo, estimate heat loss through clothing in **W** (nearest 5 W).',
      unit: 'W',
      answer: 116,
      tolerance: 5,
      concepts: ['insulation', 'heat-balance'],
      explanation: '$1.8 \\times 30 / (0.155 \\times 3) = 54 / 0.465 \\approx$ **116 W** — slightly above resting heat production, so a resting person would slowly cool.',
    },
    {
      id: 's1-l8-q4',
      kind: 'multi',
      prompt: 'Which are good layer-management habits?',
      choices: [
        { id: 'a', text: 'Vent or remove a layer before you start sweating on a climb.', why: 'Yes.' },
        { id: 'b', text: 'Add insulation as soon as you stop.', why: 'Yes — heat production drops instantly when you stop.' },
        { id: 'c', text: 'Keep a spare dry layer sealed in a waterproof bag.', why: 'Yes — your insurance layer.' },
        { id: 'd', text: 'Wear every layer from the start so you never feel cold.', why: 'No — you will sweat and soak your insulation.' },
      ],
      answer: ['a', 'b', 'c'],
      concepts: ['clothing'],
      explanation: 'Layering is active: adjust before you are too hot or too cold.',
    },
    {
      id: 's1-l8-q5',
      kind: 'truefalse',
      prompt: 'Mittens are generally warmer than gloves of the same material.',
      answer: true,
      concepts: ['clothing', 'heat-loss'],
      explanation: 'Mittens keep fingers together, reducing surface area and heat loss.',
    },
  ],
  scenario: {
    id: 's1-l8-sc',
    setup: 'You are snowshoeing uphill at −6 °C. You are warm and starting to sweat under a fleece and shell. In 20 minutes you will reach a windy summit where you plan a 15-minute break.',
    question: 'What is the best clothing plan?',
    choices: [
      { id: 'a', text: 'Keep everything on; you will need the warmth at the top.', why: 'You will arrive sweat-soaked, and that moisture will chill you at the summit.' },
      { id: 'b', text: 'Remove the fleece now and slow slightly to stop sweating; at the summit, immediately put on the puffy (over or under the shell) before eating.', why: 'Best: minimise sweat while working, maximise insulation when heat production drops.' },
      { id: 'c', text: 'Remove the shell and keep the fleece.', why: 'Better than nothing for venting, but the fleece still traps sweat, and you lose wind protection later.' },
      { id: 'd', text: 'Skip the break to stay warm.', why: 'Breaks are needed for food, water and navigation — manage clothing instead.' },
    ],
    best: 'b',
    debrief: 'Sweat is stored heat loss. Shedding the fleece and slowing a little keeps your insulation dry, and adding the puffy the moment you stop covers the sudden drop in metabolic heat. This is the core rhythm of cold-weather clothing management.',
    concepts: ['clothing', 'wet-wind'],
  },
  summary: [
    'Insulation = trapped still air; moisture and compression destroy it.',
    'Layers: base (wicking), mid (adjustable), insulation (for stops), shell (wind & rain).',
    'Manage actively: vent before you sweat, insulate as soon as you stop.',
    'No cotton in cold-wet; loose covering clothing in heat; protect head, hands, feet and eyes.',
  ],
  furtherReading: ['usariem-cold', 'parsons-thermal'],
  references: ['usariem-cold', 'parsons-thermal', 'iso-9920', 'wms-frostbite-2024', 'ten-essentials-mtn'],
}
