import type { Lesson } from '../../types'

export const l01: Lesson = {
  id: 's8-l1',
  stage: 8,
  order: 1,
  title: 'Thermoregulation and core temperature',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s1-l7'],
  concepts: ['thermoregulation', 'core-shell', 'shivering', 'heat-balance'],
  objectives: [
    'Distinguish **core** from **shell** temperature and explain why the body lets the shell cool to protect the core.',
    'Describe thermoregulation as a **control loop**: sensors, the hypothalamus, and four effectors (vasomotor tone, shivering, sweating, behaviour).',
    'Estimate heat production from **metabolic equivalents (MET)** and from **shivering**, and what shivering costs in fuel.',
    'Explain why **behaviour** is the most powerful — and the first to fail — thermoregulatory response.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 gave you the heat budget: heat in must equal heat out. This lesson looks at the **controller** — how your body senses its temperature and what it does about it — so you can recognise when that controller is winning, struggling, or failing.

### Core and shell

Your body is not one temperature. The **core** — brain, heart, lungs, liver, kidneys — is held close to **37 °C** (normal range roughly 36.5–37.5 °C, varying through the day). The **shell** — skin, fat and much of the limbs — may sit anywhere from about 20 to 35 °C.

The shell is adjustable insulation. When you are warm, blood flows freely to the skin and the warm core extends into your hands and feet. When you are cold, the blood vessels in the skin **constrict** and the core effectively shrinks to the trunk and head. Cold hands are not a malfunction: they are the body spending the limbs to protect the brain and heart.`,
    },
    { type: 'diagram', id: 's8-core-shell', caption: 'Warm: thin shell, warm limbs. Cold: vasoconstriction thickens the cool shell and protects the core.' },
    {
      type: 'md',
      md: `### The control loop

Temperature sensors in the **skin** give early warning (you feel cold long before your core cools). Sensors in the **core** — blood, spinal cord, the brain itself — report the real state. The **hypothalamus** compares these signals with a set point near 37 °C and drives four effectors:

| Effector | In the cold | In the heat | Cost |
|---|---|---|---|
| **Vasomotor tone** | Skin vessels constrict → less heat reaches the surface | Skin vessels dilate → more heat reaches the surface | Cold hands lose dexterity; in heat the heart works harder |
| **Shivering** | Involuntary muscle contraction: heat production up to 3–5× resting for short periods | — | Burns glycogen fast; ruins fine motor control |
| **Sweating** | — | Evaporation removes ≈ 2.4 MJ per litre | Water and sodium; useless if sweat drips off or cannot evaporate |
| **Behaviour** | Add layers, find shelter, eat, move | Shade, slow down, remove layers, wet the skin | Requires a working brain and the will to act |`,
    },
    { type: 'diagram', id: 's8-thermo-control', caption: 'Thermoregulation is a feedback loop. Behaviour is the strongest effector — and the one that fails first when the brain cools, overheats, dehydrates or runs out of sugar.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'The behavioural trap',
      md: 'The physiological responses are automatic; **behaviour is not**. A mildly hypothermic, dehydrated or exhausted person often stops making good choices — leaving a hat off, not bothering to eat, pressing on instead of stopping. Build habits (layer changes at every stop, eat and drink on a schedule) and watch your partners, because each of you is a poor judge of your own state.',
    },
    { type: 'sim', id: 'heat-balance-advanced', caption: 'Explore: run 6 hours at 5 °C and 20 km/h resting in hiking layers, then add food. Watch shivering and the glycogen curve.' },
  ],
  whyItMatters: 'Every cold or heat emergency is this control system being overwhelmed. If you know what the body does automatically — and what it cannot do without your help — you can recognise the early stages (cold hands, shivering, clumsiness; or rising heart rate and headache in the heat) and act while the problem is still cheap to fix.',
  science: [
    {
      type: 'md',
      md: `### Heat production in watts

A **MET** (metabolic equivalent) is resting metabolism, about $58\\ \\text{W/m}^2$ of body surface. An adult has about $1.8\\ \\text{m}^2$ of skin, so:

$$
1\\ \\text{MET} \\approx 58 \\times 1.8 \\approx 105\\ \\text{W}
$$

Walking with a pack is about 3.5 MET (≈ 365 W); hard uphill work about 6 MET (≈ 630 W). Only about 20 % of that becomes mechanical work; the rest is heat you must lose.

### What shivering costs

Sustained shivering can add roughly **150–250 W** for hours (short bursts go higher). That heat comes from fuel: 1 kcal = 4,184 J, so 200 W is

$$
\\frac{200 \\times 3600}{4184} \\approx 170\\ \\text{kcal per hour}
$$

A large share of shivering fuel is carbohydrate. Your muscle and liver glycogen store is only about **1,500–2,000 kcal**, so a night of heavy shivering without food can empty it — and a person who cannot shiver cools faster. Food is a thermoregulatory tool.

### Why the core cools slowly, then quickly

The body's heat capacity is about $3.5\\ \\text{kJ/(kg·°C)}$, so a 70 kg person stores about 245 kJ per °C. While vasoconstriction and shivering are working, a large imbalance may cause only a slow fall in core temperature. Once shivering fades (glycogen gone, or core below about 32–33 °C), the same losses produce a much faster fall. This is why hypothermia can seem stable for hours and then deteriorate quickly.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Subarctic winter camp.** A skier sits on a sled to eat lunch at −20 °C. Within ten minutes her fingers are too clumsy to work a zip: vasoconstriction is protecting her core at the cost of her hands. Putting on the insulated jacket *before* sitting and wearing mitts keeps both.

**Mountain rescue.** A lost walker found at night is shivering violently but talking clearly. Shivering is a sign the controller is still working — the aim is to protect it (insulation, calories, shelter) before it runs out of fuel.

**Desert.** A hiker’s heart rate climbs steadily through a hot afternoon at the same pace: skin vasodilation is diverting blood to the surface, and dehydration is shrinking blood volume. The controller is working hard; slowing down and resting in shade gives it room.

**Tropical river trip.** After hours of paddling in rain at 22 °C, a paddler starts shivering at the evening stop. Mild air does not mean no cold stress when you are wet and have stopped producing work heat.`,
    },
  ],
  mistakes: [
    'Treating cold hands as a minor comfort issue — they are a sign the body is defending its core and your dexterity is going.',
    'Myth: “you lose most of your heat through your head.” The head loses heat roughly in proportion to its surface area — but it does not vasoconstrict much, so a hat is still one of the cheapest warmth controls.',
    'Assuming a shivering person is fine because they are alert — shivering is costly and cannot last indefinitely without food.',
    'Relying on how you feel: skin sensors adapt, and a cooling brain judges its own state badly.',
    'Myth: alcohol warms you. It dilates skin vessels (you feel warm) while increasing heat loss and impairing judgment and shivering.',
  ],
  exercises: [
    {
      id: 's8-l1-e1',
      title: 'Watch your own vasoconstriction',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Bowl of cool (not icy) tap water, about 15 °C', 'Kitchen or infrared thermometer (optional)', 'Timer', 'Paper and pen'],
      steps: [
        'Note how easily you can do up a button or pick up a coin with one hand; time it.',
        'Put the other hand in cool water for 3 minutes (remove it at once if it becomes painful).',
        'Dry it and repeat the button/coin task with that hand; time it again. Note skin colour and, if you have one, skin temperature.',
        'Warm the hand in your armpit and time how long before dexterity returns.',
        'Write two sentences linking what you saw to vasoconstriction and to what it means for tasks like lighting a stove or tying a knot in the cold.',
      ],
      success: ['You measured a clear drop in dexterity after cooling.', 'You can explain why the body lets the hands cool and what that means for doing tasks early.'],
      safetyNote: 'Use cool tap water, never ice water. Skip this if you have Raynaud’s phenomenon, circulation problems or diabetes-related neuropathy.',
      skill: 'hypothermia-mgmt',
    },
    {
      id: 's8-l1-e2',
      title: 'Explore the controller in the Physiology Lab',
      level: 2,
      safety: 'virtual-only',
      minutes: 20,
      steps: [
        'Open the Physiology Lab. Set 0 °C, 15 km/h wind, dry synthetic hiking layers, resting for 8 h, no food.',
        'Record minimum core temperature, final glycogen and when shivering starts.',
        'Repeat with “Regular eating” and then with an insulated jacket. Explain each change using the control loop.',
      ],
      success: ['You can point to the moment shivering begins and explain what powers it.', 'You can explain why food changed the outcome.'],
    },
  ],
  simulations: ['heat-balance-advanced'],
  quiz: [
    {
      id: 's8-l1-q5',
      kind: 'single',
      prompt: 'A hypothermic person has been shivering hard for hours without food. Why might their core temperature now start falling faster even though the weather has not changed?',
      choices: [
        { id: 'a', text: 'Glycogen is running out, so shivering weakens and heat production drops.', why: 'Correct — shivering is fuel-limited.' },
        { id: 'b', text: 'Their skin has warmed up, so it now loses more heat to the air.', why: 'The opposite; skin stays cold while the core is defended.' },
        { id: 'c', text: 'Their clothes have dried, so they trap less warm air than before.', why: 'Drying would slow cooling, not speed it.' },
        { id: 'd', text: 'Shivering always switches off after exactly 2 hours.', why: 'There is no fixed time; fuel and core temperature matter.' },
      ],
      answer: 'a',
      concepts: ['shivering', 'glycogen'],
      explanation: 'Shivering burns glycogen; when the fuel runs low, heat production falls. Feed a cold person who can swallow safely to keep the shivering furnace going.',
    },
    {
      id: 's8-l1-q4',
      kind: 'single',
      prompt: 'A companion suggests a drink of spirits to warm up a cold walker. Which statement about this is correct?',
      choices: [
        { id: 'a', text: 'It feels warming but dilates skin vessels and increases heat loss.', why: 'Correct — the warm feeling is skin blood flow that dumps heat; it can also blunt shivering and judgment.' },
        { id: 'b', text: 'It warms the core quickly because alcohol releases heat as it is burned.', why: 'Any calories are small next to the extra heat lost through dilated skin vessels.' },
        { id: 'c', text: 'A small amount is useful because it helps restart weak shivering.', why: 'Alcohol can blunt shivering rather than restart it.' },
        { id: 'd', text: 'It is harmless, just no more effective than a warm sweet drink.', why: 'Not harmless: it increases heat loss and impairs judgment.' },
      ],
      answer: 'a',
      concepts: ['thermoregulation', 'core-shell'],
      explanation: 'Myth. Alcohol dilates skin vessels (feels warm) while increasing heat loss, can blunt shivering and impairs judgment. Offer warm, sweet, non-alcoholic drinks to a person who can swallow safely.',
    },
    {
      id: 's8-l1-q1',
      kind: 'single',
      prompt: 'Why do your fingers become cold and clumsy long before your core temperature falls?',
      choices: [
        { id: 'a', text: 'Skin and limb blood flow is cut to keep the core warm.', why: 'Correct — vasoconstriction sacrifices the shell to protect the core.' },
        { id: 'b', text: 'The hypothalamus has already started to fail in the cold.', why: 'No — this is the controller working as designed.' },
        { id: 'c', text: 'Fingers lack temperature sensors, so they cool unnoticed.', why: 'They have many; that is why they hurt when cold.' },
        { id: 'd', text: 'Shivering in the arms pulls blood away from the hands.', why: 'Shivering happens in large muscles; the cause is skin vasoconstriction.' },
      ],
      answer: 'a',
      concepts: ['core-shell', 'thermoregulation'],
      explanation: 'The core (brain, heart, organs) is defended at the expense of the shell (skin, limbs) by vasoconstriction. Do fine-motor tasks early, before the hands cool.',
    },
    {
      id: 's8-l1-q3',
      kind: 'single',
      prompt: 'Effectors are the things the body or person does to change heat flow. Which of these is **not** an effector of thermoregulation?',
      choices: [
        { id: 'a', text: 'Constricting skin blood vessels', why: 'It is an effector — vasomotor tone changes heat flow to the skin.' },
        { id: 'b', text: 'Shivering', why: 'It is an effector — it produces heat.' },
        { id: 'c', text: 'Putting on a jacket', why: 'It is an effector — behaviour is the most powerful one.' },
        { id: 'd', text: 'Skin temperature sensors', why: 'Correct — sensors detect temperature; they do not act on heat flow.' },
      ],
      answer: 'd',
      concepts: ['thermoregulation'],
      explanation: 'Sensors feed the hypothalamus; effectors are vasomotor tone, shivering, sweating and behaviour.',
    },
    {
      id: 's8-l1-q2',
      kind: 'single',
      prompt: 'Shivering adds 180 W of heat for 5 hours. About how many **kcal** of fuel is that? (1 kcal = 4,184 J.)',
      choices: [
        { id: 'a', text: '≈ 770 kcal', why: 'Correct — 3.24 MJ ÷ 4,184 J/kcal.' },
        { id: 'b', text: '≈ 3,240 kcal', why: 'This treats kilojoules as kilocalories; you still need to divide by 4.184.' },
        { id: 'c', text: '≈ 13 kcal', why: 'This converts hours with × 60 (minutes) instead of × 3,600 seconds.' },
        { id: 'd', text: '≈ 13,560 kcal', why: 'This multiplies by 4.184 instead of dividing — the conversion is inverted.' },
      ],
      answer: 'a',
      concepts: ['shivering'],
      explanation: '180 W × 5 × 3,600 s = 3.24 MJ; 3,240,000 / 4,184 ≈ **774 kcal** — a large part of a person’s glycogen store.',
    },
  ],
  scenario: {
    id: 's8-l1-sc',
    setup: 'Late autumn, 3 °C, drizzle. Your group has stopped for 20 minutes to fix a broken pack strap. One member, who skipped lunch, is shivering steadily, fumbling with her gloves, and says she is “fine, just cold.”',
    question: 'What is the best next action?',
    choices: [
      { id: 'a', text: 'Take her word for it and keep working on the strap until it is fixed.', why: 'Self-assessment is unreliable once cold; fumbling is an early warning.' },
      { id: 'b', text: 'Put her in a jacket and shell on a pack out of the wind, with food and a warm drink.', why: 'Best: supports the controller (insulation, shelter, fuel) while the problem is small; then fix the strap.' },
      { id: 'c', text: 'Have her do star jumps to warm up while you finish the strap.', why: 'Brief activity helps a mildly cold-stressed person, but without fuel and insulation it spends glycogen and makes her sweat.' },
      { id: 'd', text: 'Leave the strap and start walking at once to generate heat.', why: 'Moving helps, but ignoring her fuel and insulation leaves the cause untouched.' },
    ],
    best: 'b',
    debrief: 'Shivering and clumsiness while stopped mean the body is defending its core and spending fuel to do it. The cheap fix is behavioural: insulation, shelter from wind and ground, and calories. Watch each other — the cold person is the worst judge of their own state.',
    concepts: ['shivering', 'thermoregulation', 'priorities'],
  },
  summary: [
    'Core ≈ 37 °C is defended; the shell (skin, limbs) is allowed to cool.',
    'Controller: skin and core sensors → hypothalamus → vasomotor tone, shivering, sweating, behaviour.',
    '1 MET ≈ 105 W; shivering adds ≈ 150–250 W and burns ≈ 150–200 kcal/h, much of it glycogen.',
    'Behaviour is the strongest effector and the first to fail — build habits and watch partners.',
  ],
  furtherReading: ['parsons-thermal', 'usariem-cold', 'lundin-986'],
  references: ['parsons-thermal', 'usariem-cold', 'wms-hypothermia-2019', 'auerbach'],
}
