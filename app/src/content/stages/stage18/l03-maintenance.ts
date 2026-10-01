import type { Lesson } from '../../types'

export const l03: Lesson = {
  id: 's18-l3',
  stage: 18,
  order: 3,
  title: 'Maintenance and repair',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s10-l4'],
  concepts: ['s18-preventive-maintenance', 's18-moisture-management', 's18-foot-care', 'redundancy', 'long-duration-fire', 'filtration', 'knife-safety', 'insulation', 'battery-strategy'],
  objectives: [
    'Run a short **daily maintenance round** — feet, body, clothing, sleep system, shelter, water system, fire kit, tools, signals — and fix problems while they are small.',
    'Explain why small daily failure risks become likely over many days, and use **redundancy** and a repair kit to answer that.',
    'Manage **moisture** in clothing and sleeping bags over several nights, and prevent **immersion (trench) foot**.',
    'Keep **fire and water systems** working day after day: dry tinder stocks, drying fuel, banking coals, filter care, freezing, tablet counts.',
    'Care for **tools** (knife, saw, axe, cord) and batteries so they last the trip.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 10 taught how to repair things — tape, cord, wire, stitching, footwear. Over several days the bigger win is **not needing to**: noticing a fraying guyline before it snaps in the night, drying socks before a blister becomes an infection, backflushing a filter before it clogs. Maintenance is cheap when things are small and expensive when they fail.

### The daily round

Twice a day — a quick round in the morning before work, a fuller one in the evening before dark — go through the same list in the same order:`,
    },
    { type: 'diagram', id: 's18-maintenance-round', caption: 'A daily round of about 15 minutes. The same order every time, so nothing is forgotten when you are tired.' },
    {
      type: 'table',
      head: ['Item', 'Look for', 'Quick fix'],
      rows: [
        ['Feet', 'Hot spots, blisters, white wrinkled skin, numbness, cracks', 'Dry, air, tape hot spots, change to dry socks for sleep'],
        ['Body', 'Cuts, splinters, sunburn, bites, chafing', 'Clean and cover small wounds at once (Stage 9)'],
        ['Clothing', 'Wet layers, small tears, broken zips, lost buttons', 'Dry in sun/wind or by body heat; stitch or tape small tears'],
        ['Sleep system', 'Damp insulation, flattened loft, ground moisture', 'Air it by day; keep it off the ground; do not sleep in wet clothes'],
        ['Shelter', 'Chafed lines, pulled pegs, pooling water, drips', 'Re-tension, pad chafe points, re-pitch drainage'],
        ['Water system', 'Slowing filter, cracked bottles, tablet count, dirty threads', 'Backflush or clean filter; count and log tablets'],
        ['Fire kit', 'Damp tinder, lighter fuel, ferro rod, tomorrow’s kindling', 'Refill the dry-tinder bag; kindling under cover'],
        ['Tools', 'Dull or rusting blades, loose heads, cracked handles', 'Clean, dry, oil lightly, sharpen, retire damaged tools'],
        ['Signals', 'Blown-down markers, damp signal fire, dead batteries', 'Refresh markers; keep signal-fire fuel dry; rotate batteries'],
      ],
    },
    {
      type: 'md',
      md: `### Clothing and sleeping bags: the moisture problem

Insulation works by trapping still air. Water conducts heat far better than air, and wet fibres collapse, so **wet insulation stops insulating** (Stage 1: heat balance; Stage 8: evaporative loss). Over several days in cold weather, moisture accumulates:

- **From outside**: rain, snow melting on clothes, dew and condensation in shelters.
- **From you**: sweat during work, and water vapour from your skin all night. In the cold, some of that vapour condenses or freezes inside the outer layers of a sleeping bag, and it does not all dry out the next day — bags on long cold trips can get noticeably heavier and flatter night by night.

Countermeasures:

- **Vent before you sweat.** Take a layer off before hard work; put it back on when you stop.
- **Dry every day you can**: sun and wind by day; small damp items (socks, gloves) inside your jacket or in the sleeping bag (not soaking-wet items).
- **Keep a dry set for sleeping** and never wear it for work.
- **Air the sleeping bag** inside-out whenever the weather allows; shake frost out of it before it melts.
- **Keep it off the ground and away from shelter walls** where condensation drips.
- Synthetic insulation keeps more of its warmth when damp than down does; down is lighter when dry. Protect whichever you have.

### Feet

Feet that stay **wet and cool for many hours** — even well above freezing — can develop **immersion (trench) foot**: numb, swollen, then painful feet with damaged nerves and blood vessels. It was notorious in the trenches and happens today in wet forest, tropical and marine settings. Prevention is simple and must be daily:

- Take boots and socks off each evening; dry, air and inspect your feet; sleep with dry, warm feet.
- Change to dry socks at least once a day; dry the wet pair against your body.
- Loosen tight laces; avoid constriction; keep moving your toes.
- Treat hot spots **before** they become blisters.

Numb, white or blotchy feet that do not recover, blisters on cold-injured skin, or signs of infection need medical care — and are good reasons to evacuate. Frostbite and non-freezing cold injury need proper first-aid training: take a WFA/WAFA/WFR course.

### Repeated fire

A fire you light once is a skill; a fire you keep for five days is a **system** (Stage 3: long-duration fires):

- **Never let the dry-tinder bag run out.** Refill it every day from the best material you find, and keep it inside your clothing in wet weather.
- **Dry tomorrow’s fuel today** on a rack near — not over — the fire, and keep the woodpile under cover.
- **Bank the fire** at night: rake coals together, cover them with ash, and lay a few thick, slow-burning pieces. Coals under ash can often be revived in the morning with dry tinder and a little air.
- **Keep ignition redundant**: lighter, ferro rod and matches in different pockets (Stage 1: redundancy).
- **Manage the fire site**: clear flammables around it, keep water nearby, and put it out properly before you leave or if the wind rises.`,
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire rules still apply on day 5',
      md: 'Fire bans and permits apply to multi-day stays as they do to a single night, and dry spells can bring new restrictions mid-trip. Use existing fire rings where they exist, keep fires small, and follow the land manager’s rules ([References → Law varies by jurisdiction](#/references)). A camping stove is often permitted when open fires are not.',
    },
    {
      type: 'md',
      md: `### Repeated water treatment

- **Filters clog.** Flow slows as silt builds up; **backflush** or clean as the manufacturer directs, and pre-filter muddy water through cloth or let it settle first (Stage 4: turbidity).
- **Many hollow-fibre filters are damaged by freezing** — often invisibly. In freezing weather, sleep with the filter in a bag inside your sleeping bag; if it may have frozen, treat its output as unsafe and switch to boiling or chemicals.
- **Count your tablets** on the ledger and know the contact time for the water temperature (cold water needs longer — follow the label).
- **Containers crack and leak**; tape them before the leak grows, and keep one spare.

### Tools and batteries

- **Knives**: wipe clean and dry after use, oil lightly if carbon steel, sharpen little and often, and cut away from yourself inside the blood circle (Stage 7).
- **Saws and axes**: check that heads are tight and handles uncracked; sheath when not in use. A loose axe head is a projectile — retire it.
- **Cord**: check for chafe where it touches bark or rock; pad or re-route it.
- **Batteries**: cold lowers usable capacity; keep phones and spare batteries warm in an inner pocket and warm a cold battery before using it (Stage 14).

### The repair kit

| Item | Uses |
|---|---|
| Strong tape (wrapped around a bottle or pole) | Tears in tarps, clothing, tents, containers; blisters (with care) |
| Needle, strong thread, safety pins | Clothing, packs, straps |
| Cord (a few metres of spare) | Guylines, lashings, laces |
| Cable ties / wire | Splints for broken poles, pack frames, zip pulls |
| Glue or seam sealer | Boots, seams |
| Spare buckle, zip pulls | Packs and clothing |
| Small sharpening stone | Knife and tool edges |
| Spare filter O-ring / cleaning tool | Water system |`,
    },
  ],
  whyItMatters: 'Over one night, most gear survives almost anything. Over a week, clothing tears, bags get damp, filters clog, blades dull, feet macerate and the lighter runs dry. Each failure is small; together they can break the systems that keep you warm, hydrated and healthy. A short daily round turns failures into chores.',
  science: [
    {
      type: 'md',
      md: `### Small daily risks add up

If an item has a probability $p$ of failing on any given day, and days are independent, the chance it survives $n$ days is $(1 - p)^n$, so the chance of **at least one failure** is

$$
P = 1 - (1 - p)^n
$$

In words: multiply the daily “survival” chance by itself for every day, and subtract from one.

**Worked example.** A lighter with a 5 % chance per day of being lost, soaked or empty survives a week with probability $0.95^7 \\approx 0.70$ — a **30 %** chance you are without it by day 7. Carry a second, independent ignition source with the same 5 % daily risk and the chance of losing **both** within a week falls to about $0.30 \\times 0.30 = 0.09$ (if their failures are independent — keep them in different places so one soaking does not take both).`,
    },
    { type: 'diagram', id: 's18-failure-odds', caption: 'Daily risks compound. Redundancy and maintenance lower the daily risk — and the weekly one with it.' },
    {
      type: 'md',
      md: `### Why wet insulation fails

Still air conducts heat very poorly — about 0.025 W per metre per kelvin. Liquid water conducts about 0.6 W/(m·K), roughly **24 times** more. Insulation is mostly air held still between fibres; as water replaces air and fibres collapse, the layer conducts more and gets thinner, and evaporation from wet fabric carries away additional heat. That is why the order of priority is: **stay dry, then get dry, then keep the sleeping insulation dry above all**.

### Illustrative moisture budget for a sleeping bag

A resting person loses some water through the skin by evaporation all night even without sweating. Suppose, for illustration, that 50–100 g of it is trapped each cold night in the outer layers of the bag. After a week that is **0.35–0.7 kg** of water in a bag that weighed perhaps 1.2 kg dry — and the wettest insulation sits exactly where it is coldest. The numbers depend strongly on temperature, the bag and the shelter, but the direction is not in doubt: **dry the bag whenever you can**.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Tropical rainforest.** Nothing dries on its own. The evening round centres on feet: boots off, feet dried and aired, dry socks for sleep, wet socks worn again in the morning. Cuts are cleaned and covered the same day because they infect quickly.

**Subarctic winter.** Moisture control dominates: vent before sweating, frost shaken from bags, the filter kept inside the sleeping bag or replaced by boiling, batteries in inner pockets, tools not touched bare-handed at very low temperatures.

**Temperate forest in autumn.** Fire systems matter most: dry-tinder bag refilled daily from birch bark or dead twigs off standing trees, fuel drying beside the fire, coals banked at night.

**Mountain.** Wind chafes lines on rock and snaps poles; a pole splint (tape plus a spare sleeve or a stick) and padded guylines save the shelter.

**Coastal.** Salt spray corrodes blades and zips — rinse and dry them; sand grinds zips and filters.

**Urban disaster.** The same logic applies at home: check the generator’s placement and fuel, the water store, torches and batteries, and the bucket-toilet supplies daily (Stage 16).`,
    },
  ],
  mistakes: [
    'Waiting for something to fail before fixing it.',
    'Wearing sleeping clothes for work, or sleeping in wet clothing.',
    'Keeping all ignition sources in one pocket.',
    'Letting a filter freeze, then trusting it.',
    'Leaving boots and socks on for days in wet conditions.',
    'Myth: “Trench foot only happens in freezing weather.” It is caused by feet staying wet and cool for long periods, often well above freezing.',
    'Myth: “Rub cold, numb feet hard to warm them.” Rubbing damages cold-injured tissue; warm gently and seek care.',
    'Using a tool with a loose head or cracked handle “just once more”.',
  ],
  exercises: [
    {
      id: 's18-l3-e1',
      title: 'Build and test a field repair kit',
      level: 2,
      safety: 'home',
      minutes: 60,
      materials: ['Tape, needle and thread, safety pins, spare cord, cable ties, small sharpening stone', 'An old tarp, old jacket and a broken tent pole (or a stick) to practise on'],
      steps: [
        'Assemble the kit in a small bag; weigh it.',
        'Practise three repairs: tape a 5 cm tear in the tarp (both sides, rounded corners), stitch a torn seam, splint a broken pole with tape and a sleeve or stick.',
        'Time each repair with cold hands (after holding a cold drink for a minute) and with a headlamp only.',
        'Add or remove items according to what you actually used.',
      ],
      success: ['All three repairs hold under a firm pull.', 'You can do each repair with a headlamp in under ten minutes.'],
      skill: 's18-field-maintenance',
    },
    {
      id: 's18-l3-e2',
      title: 'Run the daily round on a multi-night trip',
      level: 3,
      safety: 'outdoor',
      minutes: 2880,
      materials: ['Normal multi-night kit', 'The repair kit', 'Printed daily-round checklist', 'A partner and a trip plan left with someone at home'],
      safetyNote: 'Use legal campsites and follow fire rules. This is a normal, fully equipped trip; the goal is the routine, not hardship.',
      steps: [
        'Every morning and evening, do the round in the same order and tick the checklist.',
        'Log every problem found, how small it was, and what you did.',
        'On return, list which problems would have become failures by day 5 if missed.',
      ],
      success: ['You completed every round.', 'You found and fixed at least one problem before it became a failure.'],
      skill: 's18-field-maintenance',
    },
    {
      id: 's18-l3-e3',
      title: 'Knife care and sharpening',
      level: 2,
      safety: 'home',
      minutes: 40,
      materials: ['Your fixed-blade or folding knife', 'Sharpening stone', 'Cloth and a little oil (for carbon steel)'],
      safetyNote: 'Sit down, work on a stable surface, keep fingers out of the edge’s path, and stroke the edge away from your body. Follow the knife laws where you live (Stage 7).',
      steps: [
        'Clean and dry the blade and handle; check the handle and pivot for looseness or cracks.',
        'Find the edge angle with the marker trick (colour the bevel; see where the stone removes ink).',
        'Sharpen with light, consistent strokes on each side until a small burr forms; remove it with alternating light strokes.',
        'Test on paper; wipe, oil lightly if carbon steel, and sheath.',
      ],
      success: ['The knife slices paper cleanly.', 'You sharpened without the blade ever pointing toward you.'],
      skill: 'knife-safety',
    },
  ],
  quiz: [
    {
      id: 's18-l3-q2',
      kind: 'single',
      prompt: 'It is −15 °C. Your hollow-fibre filter spent the night in the pack’s side pocket. What do you do?',
      choices: [
        { id: 'a', text: 'Use it as normal, as long as water still flows through it', why: 'Freezing can crack fibres invisibly; flow does not prove it still removes pathogens.' },
        { id: 'b', text: 'Treat its output as unsafe; boil or use chemical treatment', why: 'Correct — and keep filters in your sleeping bag in future.' },
        { id: 'c', text: 'Warm it by the fire until it is hot right through, then use it', why: 'Heat can damage it too, and does not repair cracked fibres.' },
        { id: 'd', text: 'Blow through it first to test whether the fibres are intact', why: 'Not a reliable integrity test in the field.' },
      ],
      answer: 'b',
      concepts: ['filtration', 's18-preventive-maintenance', 'water-treatment'],
      explanation: 'Many manufacturers warn that freezing damages hollow-fibre filters. Treat a possibly frozen filter as failed, switch to a backup method, and keep filters in your sleeping bag on freezing nights.',
    },
    {
      id: 's18-l3-q5',
      kind: 'single',
      prompt: 'Day 4 of a cold, wet wait. Which is the best way to keep your fire going for the rest of the week?',
      choices: [
        { id: 'a', text: 'Keep a large fire burning day and night so that it never goes out', why: 'Burns far more fuel than you can gather, and costs sleep.' },
        { id: 'b', text: 'Daily dry tinder, drying fuel, banked coals and spare ignition', why: 'Correct — refill the tinder bag, dry tomorrow’s fuel by the fire, bank coals under ash at night and keep ignition sources in separate pockets: a system rather than a single fire.' },
        { id: 'c', text: 'Rely on the lighter, since it has worked without fail every day', why: 'Past success does not protect against loss or a soaking; a single point of failure.' },
        { id: 'd', text: 'Save all the dry wood for emergencies and burn only wet wood', why: 'Wet wood smoulders; you need a dry core to keep a fire alive.' },
      ],
      answer: 'b',
      concepts: ['long-duration-fire', 'redundancy', 'wet-weather-fire'],
      explanation: 'Repeated fire is about a continuous supply of dry tinder and fuel, banked coals and redundant ignition.',
    },
    {
      id: 's18-l3-q3',
      kind: 'single',
      prompt: 'On a wet, cool multi-day trip, which habit makes immersion (trench) foot MORE likely?',
      choices: [
        { id: 'a', text: 'Taking boots and socks off each evening to dry, air and inspect feet', why: 'This prevents it — feet need to dry every night.' },
        { id: 'b', text: 'Lacing boots very tight all day to keep the water out', why: 'Correct: constriction reduces circulation and worsens the injury.' },
        { id: 'c', text: 'Sleeping in dry socks and drying the wet pair against your body', why: 'This prevents it — dry feet overnight are the core habit.' },
        { id: 'd', text: 'Treating hot spots as soon as you notice them, before they blister', why: 'This prevents problems — deal with small issues early.' },
      ],
      answer: 'b',
      concepts: ['s18-foot-care'],
      explanation: 'Immersion foot comes from long hours wet and cool. Dry feet every night, loosen laces, and deal with small problems early; keeping boots on overnight is another mistake, because feet need to dry.',
    },
    {
      id: 's18-l3-q4',
      kind: 'single',
      prompt: 'Why does wet insulation lose much of its warmth?',
      choices: [
        { id: 'a', text: 'Water conducts heat far better than the still air it replaces', why: 'Correct: roughly 24 times better; fibres also collapse and evaporation carries heat away.' },
        { id: 'b', text: 'Water itself is cold, so it chills the fibres until they dry out', why: 'Even warm water in insulation conducts heat away; the problem is conduction, not the water’s starting temperature.' },
        { id: 'c', text: 'Wet fibres become heavier, which squeezes all the air out of the outer layer', why: 'Fibres do collapse, but the main cause is that water conducts heat much better than still air.' },
        { id: 'd', text: 'Water blocks your skin from breathing, so the body makes less heat', why: 'Skin breathing has nothing to do with it; insulation works by trapping still air.' },
      ],
      answer: 'a',
      concepts: ['s18-moisture-management', 'insulation'],
      explanation: 'Water conducts heat roughly 24 times better than still air, fibres collapse when wet, and evaporation carries away more heat.',
    },
    {
      id: 's18-l3-q1',
      kind: 'single',
      prompt: 'A headlamp has a 4 % chance each day of failing (dropped, soaked, broken). Assuming independent days, what is the chance it has failed at least once by the end of a 10-day trip?',
      choices: [
        { id: 'a', text: 'About 33 %', why: 'Correct: 1 − 0.96¹⁰ ≈ 1 − 0.665 = 0.335.' },
        { id: 'b', text: 'About 40 %', why: 'This simply adds 4 % ten times; probabilities of independent days do not add.' },
        { id: 'c', text: 'About 67 %', why: 'This is 0.96¹⁰ — the chance it survives every day — not the chance it fails.' },
        { id: 'd', text: 'About 4 %', why: 'This is the chance for a single day; the risk builds up over ten days.' },
      ],
      answer: 'a',
      concepts: ['redundancy', 's18-preventive-maintenance'],
      explanation: '$1 - 0.96^{10} \\approx 1 - 0.665 = 0.335$, about 33 %. A small spare light and daily checks bring the risk down.',
    },
  ],
  scenario: {
    id: 's18-l3-sc',
    setup: 'Day 3 of a tropical river trip turned into a wait: your boat is damaged and a pickup is expected in three or four days. Everything is damp. Your partner has had wet boots on for three days and says their feet feel “a bit numb, but fine”. The tarp has a 10 cm tear near a grommet, the filter is slowing, and the machete is rusting.',
    question: 'What do you deal with first this evening?',
    choices: [
      { id: 'a', text: 'The tarp tear — shelter is a top priority.', why: 'Important, but a torn tarp can be taped in minutes, and the tear is not yet the most harmful problem.' },
      { id: 'b', text: 'Your partner’s feet: boots and socks off, inspect, dry and air them, dry socks for the night, feet warm and raised; then tape the tarp, backflush the filter and clean the machete.', why: 'Best: numb feet after days wet are an early sign of immersion foot, which can disable them for weeks; the other items are quick fixes in order.' },
      { id: 'c', text: 'The machete — tools are needed for everything else.', why: 'Rust is cosmetic at this stage; it can wait until after the body and shelter.' },
      { id: 'd', text: 'Boil water instead of filtering to save the filter.', why: 'Maybe later, but it does not address the most serious problem.' },
    ],
    best: 'b',
    debrief: 'The daily round starts with feet and body for a reason: they are the hardest to repair. This combines Stage 8’s cold physiology (non-freezing cold injury does not need freezing temperatures), Stage 9’s monitoring and this lesson’s maintenance order. If numbness does not improve, the skin blisters or the feet become very painful when warmed, treat it as a medical problem and plan evacuation.',
    concepts: ['s18-foot-care', 's18-preventive-maintenance', 'monitoring'],
  },
  summary: [
    'A **daily round** (feet → body → clothing → sleep system → shelter → water → fire kit → tools → signals) turns failures into chores.',
    'Daily risks compound: $P = 1 - (1-p)^n$; answer it with **redundancy** kept in separate places.',
    '**Moisture** is the long-trip enemy: vent before sweating, dry daily, keep sleep clothes and the sleeping bag dry.',
    'Prevent **immersion foot**: dry, air and inspect feet every evening; loosen laces; dry socks for sleep.',
    'Repeated **fire**: daily dry-tinder refill, fuel drying, banked coals, redundant ignition — within fire rules.',
    'Repeated **water**: backflush filters, protect them from freezing, count tablets.',
    'Carry and practise a **repair kit**; retire unsafe tools.',
  ],
  furtherReading: ['freedom-hills', 'kochanski-bushcraft', 'nols-wm-book', 'afh-10-644'],
  references: ['freedom-hills', 'kochanski-bushcraft', 'afh-10-644', 'army-atp-3-50-21', 'nols-wm-book', 'auerbach', 'wms-water-2019', 'usariem-cold', 'smokey-campfire', 'usfs-fire', 'lnt-principles'],
}
