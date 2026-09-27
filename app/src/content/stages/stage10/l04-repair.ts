import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's10-l4',
  stage: 10,
  order: 4,
  title: 'Repair systems',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s10-l1'],
  concepts: ['field-repair', 'repair-kit', 'footwear-repair', 'material-properties', 'critical-gear-tradeoff'],
  objectives: [
    'Assemble a light **repair kit** that covers binding, patching, sewing and splinting.',
    'Use **tape, cord, wire and cable ties** for what each does best, and know their failure modes.',
    'Repair **footwear, clothing, tents, poles and pads** well enough to finish a trip.',
    'Explain why **round corners and crack-stop holes** make repairs last (stress concentration).',
    'Recognise equipment that must **never** be field-repaired and used for its original job.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Things break at the worst time: a sole peels on a long descent, a zip fails in a blizzard, a tent pole snaps in wind. A **repair system** is a small kit plus a routine: **stop the damage spreading, make it work, then make it last**.

### The field repair routine

1. **Stop and stabilise.** A tear that keeps being loaded grows. Take the strain off (loosen, unload, guy out a flapping panel).
2. **Clean and dry.** Tape and glue grip clean, dry, warm surfaces. Wipe grit and water, warm the area and the tape inside your jacket.
3. **Separate the load path from the cover.** Something tough and strong carries the load (cord, wire, a splint sleeve); something smooth seals and protects (tape, a patch).
4. **Round the corners.** Cut patches with rounded corners and extend them 2–3 cm beyond the damage; put a small hole or a round end at the tip of a crack or tear.
5. **Test and monitor.** Load it gently, then check it at every break. A field repair is temporary until proven otherwise.`,
    },
    { type: 'diagram', id: 's10-repair-wraps', caption: 'Three repairs, one principle: a tough material carries the load, a smooth one covers and seals.' },
    {
      type: 'md',
      md: `### The four binders and what they are good for

| Material | Strengths | Failure modes | Best for |
|---|---|---|---|
| **Duct / repair tape** | Fast, seals, conforms | Peels when wet, cold or dirty; scuffs through on rock; adhesive creeps under steady load | Patching fabric, covering other repairs, splint wraps over padding |
| **Cord** | Strong in tension, reusable, adjustable | Slips if badly tied; abrades on sharp edges | Lashings, straps, bindings, guy lines |
| **Wire** | Very tough, abrasion-proof, holds shape | Cuts fabric and skin; fatigues if bent back and forth | Boot soles, pack frames, stove and hardware fixes |
| **Cable ties** | Fast, strong, tough | Cannot be loosened; brittle in deep cold; cut fabric | Joining straps and buckles, boot soles, hardware |

Carry tape **wrapped round a trekking pole, lighter or bottle** — a few metres takes almost no space. Add a **needle, strong thread and safety pins**; sewing is slow but permanent.`,
    },
    {
      type: 'md',
      md: `### Common repairs

**Footwear**
- **Sole peeling**: bind with cord, wire or cable ties through the lace eyelets and round the sole, avoiding the ball of the foot; cover with tape. Check hourly.
- **Broken lace**: replace with cord; or re-lace skipping the lowest eyelets to shorten it.
- **Blown seam**: sew with strong thread if you can; otherwise tape inside and out.
- **Hot spots**: stop and deal with them at once — tape over a hot spot before a blister forms; pad around a blister rather than over it; keep feet as dry as you can (Stage 9 covers blister and wound care).

**Clothing**
- **Tear**: tape on both sides with rounded corners, or safety-pin and sew later. Down jackets: tape immediately to stop losing down.
- **Broken zip**: close the gap with safety pins; if the slider has spread, squeeze it gently with pliers.
- **Lost buttons or broken buckles**: a toggle of stick and cord, or a sheet bend tied directly in the straps.

**Shelter and sleep**
- **Tent pole break**: splint sleeve (or a tent stake) centred on the break, taped at both ends; tape over sharp ends.
- **Torn fly**: dry, tape both sides, round corners; guy out the panel to take wind strain off; pitch a tarp over it if you have one.
- **Air pad puncture**: find the leak with water or spit bubbles, dry it, patch it; if it cannot be fixed, put clothing, pack and foam under you for insulation (Stage 5).

**Other kit**
- **Pack strap or hip belt**: cord lashed through the webbing, or a sheet bend in the webbing itself.
- **Glasses**: tape or thin wire through the hinge; bring a spare pair if you depend on them.
- **Stoves**: carry the maker’s spare parts (O-rings, pump seals) and practise at home.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Never field-repair life-safety equipment and trust it',
      md: 'Do not improvise repairs to **climbing harnesses, ropes, slings, helmets, carabiners, avalanche transceivers, buoyancy aids (PFDs)**, or to **gas lines, electrical wiring or vehicle brakes and steering**. Retire damaged life-safety gear; isolate gas and electricity and call a professional (Stage 16). Improvised repairs are for comfort and function, not for holding a life.',
    },
    {
      type: 'md',
      md: `### Build a repair kit

A light kit for a day or multi-day trip (the Ten Essentials include a knife and repair kit):

- 2–3 m of **duct or repair tape** wrapped on something you carry
- **Needle**, strong thread (e.g., heavy polyester), 4–6 **safety pins**
- 4–6 **cable ties**, 1–2 m of soft **wire**
- 5–10 m of **cord**
- Fabric **repair patches** and a small tube of **seam sealer or flexible adhesive**
- Tent-pole **splint sleeve**, pad **patch kit**, spare **buckle**, stove **spares**
- A **multitool or knife** (check local knife laws)

Match it to the trip: add ski-binding parts in winter, a kayak hull repair kit on water, spare laces on long walks.`,
    },
    { type: 'sim', id: 'improvise-challenge', caption: 'Try “Boot sole peeling off” and “Torn tent fly in sleet” — the second has an opportunity-cost trap.' },
  ],
  whyItMatters: 'Broken gear turns into injuries and exposure: a failed boot causes a fall or an unplanned night, a torn tent lets rain in, a broken pack strap slows a group. Most failures can be fixed in minutes with 100 grams of kit and a routine. Knowing what not to repair is just as important: some equipment must be retired, not patched.',
  science: [
    {
      type: 'md',
      md: `### Why sharp corners and cracks grow: stress concentration

When a material with a hole or slit is pulled, the stress near the tip of the hole is higher than elsewhere. For an elliptical hole with half-length $a$ (across the pull) and half-width $b$, the peak stress is

$$
\\sigma_{max} = \\sigma \\left(1 + \\frac{2a}{b}\\right)
$$

where $\\sigma$ is the average stress in the material (Inglis’s classic result). The bracket is the **stress concentration factor**.

**Worked example.** A slit-like tear 10 times longer than it is wide ($a/b = 10$) has a factor $1 + 20 = 21$: the tip feels 21 times the average stress, so the tear runs. A **round** hole ($a = b$) has a factor of only $1 + 2 = 3$. That is why you round patch corners, and why a small round hole (or a rounded cut) at the end of a crack in rigid plastic or a tear in fabric can stop it spreading.

### Pressure-sensitive tape

Duct tape’s adhesive is a soft, sticky solid that must **flow into the surface** to grip. It flows better when warm, and cannot reach a surface covered in water, frost, dust or oil. That is why you **clean, dry, warm and press** tape — and why tape alone slowly creeps under a steady load. A tape wrap round a pole or strap grips far better than a flat strip: each turn adds friction (Stage 7’s capstan effect).

### Wire fatigue

Bending wire back and forth hardens and weakens it at the bend until it snaps. Twist wire ends **once, firmly**, and avoid places where it will flex with every step.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain.** A boot sole peels on a scree descent. Cable ties through the eyelets and round the sole, covered with tape, get the walker to the hut; the group chooses the gentler path.

**Desert.** A sandal strap breaks 8 km from the road in 40 °C heat. Repair in shade in the cool of the evening; a cord threaded through the sole and tied round the ankle holds; water budget recalculated for the slower pace (Stage 4).

**Arctic / subarctic.** A ski-binding screw pulls out. Wire and cable ties round the ski and boot, plus steel wool or wood shavings packed in the hole to take a screw again; cable ties are kept warm inside a jacket because they go brittle in deep cold.

**Tropical.** Constant wet stops tape sticking. Sew instead, and carry a small tube of flexible adhesive that works on damp fabric if possible.

**Coastal / canoe.** A cracked canoe hull is dried, the crack’s ends are drilled or rounded, and it is patched with tape on the outside; the group stays close to shore.

**Forest.** A tent pole snaps in a storm; the splint sleeve and tape hold, and guy lines are added to reduce the load on that pole.

**Urban.** A storm breaks a window: plastic sheeting taped over the frame keeps out rain until a glazier comes. A leaking pipe gets a tape-and-rubber wrap — and the water is turned off at the stopcock first.`,
    },
  ],
  mistakes: [
    'Taping over wet, dirty or frozen surfaces and expecting it to hold.',
    'Leaving sharp corners on patches or letting a tear keep working in the wind.',
    'Using tape alone where abrasion is high (boot soles on rock).',
    'Using a critical item (the rain jacket, the only warm layer) as repair material in bad weather.',
    'Not carrying a repair kit, or carrying one nobody has practised with.',
    'Myth: “Duct tape fixes anything.” It is a fast cover and patch, weak in tension, poor when wet or cold, and useless on abrasive surfaces.',
    'Myth: “A repaired harness or rope is fine if the repair looks strong.” Life-safety equipment is retired, never patched.',
  ],
  exercises: [
    {
      id: 's10-l4-e1',
      title: 'Build and weigh a repair kit',
      level: 1,
      safety: 'home',
      minutes: 45,
      materials: ['Duct tape', 'Needle and strong thread', 'Safety pins', 'Cable ties', 'Soft wire', 'Cord', 'Patches', 'A small bag', 'Kitchen scale'],
      steps: [
        'List your trip’s likely failures: footwear, clothing, shelter, pad, pack, stove.',
        'For each, choose one kit item that fixes it and one backup.',
        'Wrap tape on a bottle or pole; pack the rest in a small bag. Weigh it.',
        'Label anything that needs a specific tool (stove spares) and check you carry that tool.',
      ],
      success: ['Every likely failure has a fix and a backup.', 'The kit weighs about 100–200 g for a day trip.'],
      skill: 's10-field-repair',
    },
    {
      id: 's10-l4-e2',
      title: 'Repair drills',
      level: 2,
      safety: 'home',
      minutes: 60,
      materials: ['An old boot or shoe', 'Old fabric or a worn-out jacket', 'A broken tent pole or a piece of dowel sawn part-way', 'Your repair kit'],
      steps: [
        'Cut a 10 cm slit in the old fabric. Patch it with tape on both sides, rounded corners, 2–3 cm overlap. Pull hard: does it hold?',
        'Cut a second slit and patch it with square corners. Compare which peels or tears first.',
        'Bind the old shoe’s toe with cable ties or cord and tape; walk 500 m on a rough path and inspect.',
        'Splint the pole with a sleeve or stake and tape; flex it and check.',
        'Repeat one repair in the cold (e.g., materials from the freezer or outdoors in winter) or with damp fabric and note the difference.',
      ],
      success: ['The rounded patch outlasts the square one.', 'You can do each repair in under 10 minutes.'],
      skill: 's10-field-repair',
      safetyNote: 'Take care with knives and wire ends; cut away from yourself.',
    },
  ],
  simulations: ['improvise-challenge'],
  quiz: [
    {
      id: 's10-l4-q1',
      kind: 'single',
      prompt: 'Your boot sole has come away at the toe with 12 km of rocky trail left. Which repair is best?',
      choices: [
        { id: 'a', text: 'Several wraps of duct tape round the toe', why: 'Tape scuffs through quickly on rock.' },
        { id: 'b', text: 'Cable ties or cord through the lace eyelets and round the sole, covered with tape', why: 'Correct — tough binding carries the load; tape covers and smooths.' },
        { id: 'c', text: 'Glue it with the stove’s fuel as a solvent', why: 'Fuel is not an adhesive and is a fire hazard.' },
        { id: 'd', text: 'Walk on it carefully; it will hold', why: 'The flapping sole can trip you and will get worse.' },
      ],
      answer: 'b',
      concepts: ['footwear-repair', 'material-properties'],
      explanation: 'Separate the load path (abrasion-resistant binding) from the cover (tape).',
    },
    {
      id: 's10-l4-q2',
      kind: 'numeric',
      prompt: 'A tear behaves like an ellipse with half-length a = 30 mm and half-width b = 2 mm. What is the **stress concentration factor** $1 + 2a/b$?',
      unit: '×',
      answer: 31,
      tolerance: 0,
      concepts: ['field-repair'],
      explanation: '$1 + 2 \\times 30 / 2 = 31$. Rounding the tip (making $b$ larger) cuts it sharply; a round hole gives 3.',
    },
    {
      id: 's10-l4-q3',
      kind: 'multi',
      prompt: 'Which help tape stick in the field?',
      choices: [
        { id: 'a', text: 'Wiping the surface clean and dry', why: 'Yes — adhesive must touch the surface.' },
        { id: 'b', text: 'Warming the tape inside your jacket first', why: 'Yes — warm adhesive flows into the surface.' },
        { id: 'c', text: 'Rounding the corners', why: 'Yes — corners are where peeling starts.' },
        { id: 'd', text: 'Applying it over frost to “freeze it in place”', why: 'No — frost stops the adhesive gripping.' },
        { id: 'e', text: 'Pressing firmly and rubbing it down', why: 'Yes — pressure-sensitive adhesives need pressure.' },
      ],
      answer: ['a', 'b', 'c', 'e'],
      concepts: ['field-repair'],
      explanation: 'Clean, dry, warm, pressed, rounded.',
    },
    {
      id: 's10-l4-q4',
      kind: 'truefalse',
      prompt: 'A climbing sling with a small cut can be safely used again if the cut is taped over tightly.',
      answer: false,
      concepts: ['field-repair', 'training-scope'],
      explanation: 'Life-safety equipment that is damaged is retired, never patched.',
    },
    {
      id: 's10-l4-q5',
      kind: 'single',
      prompt: 'It is −25 °C and a ski binding is loose. Which fixings should you be cautious with?',
      choices: [
        { id: 'a', text: 'Cord lashings', why: 'Cord stays flexible in the cold.' },
        { id: 'b', text: 'Cable ties that have been kept in an outside pocket', why: 'Correct — many plastic ties become brittle in deep cold; keep them warm before use.' },
        { id: 'c', text: 'Soft wire', why: 'Wire works well in cold; avoid repeated bending.' },
        { id: 'd', text: 'A multitool', why: 'Fine, though cold metal needs gloves.' },
      ],
      answer: 'b',
      concepts: ['material-properties', 'field-repair'],
      explanation: 'Material properties change with temperature: plastics stiffen and can snap in deep cold.',
    },
  ],
  scenario: {
    id: 's10-l4-sc',
    setup: 'Day 3 of 4 on a subarctic trek. Overnight, wind snapped one pole of your two-person dome tent and tore a 10 cm rip next to it. It is 2 °C with wet snow; you plan to camp one more night. You have a repair kit (tape, sleeve, needle and thread, cord), a tarp, two rain jackets and two foam pads.',
    question: 'What is the best repair plan?',
    choices: [
      { id: 'a', text: 'Cut a rain jacket into a patch and tape it over the rip', why: 'Destroys a critical layer in wet snow — solving one problem by creating a worse one.' },
      { id: 'b', text: 'Splint the pole with the sleeve and tape; dry, tape both sides of the rip with rounded corners; add extra guy lines on that side; pitch the tarp over the tent if possible', why: 'Best: fixes the structure, stops the tear spreading, takes the wind load off, and adds a second roof — without using critical gear.' },
      { id: 'c', text: 'Walk out now in the wet snow, a day early, without repairing anything', why: 'Possible, but leaves the day in poor weather with no shelter plan if you are delayed.' },
      { id: 'd', text: 'Tape over the rip without drying it and leave the pole', why: 'Tape will not stick to wet fabric and the broken pole will tear more fabric.' },
    ],
    best: 'b',
    debrief: 'Stop the damage, fix the load path (pole), seal the cover (tape on dry fabric), relieve the strain (guy lines), and add redundancy (tarp). The critical-gear test from Lesson 1 rules out the jacket; Stage 5’s shelter-failure ideas and Stage 1’s heat balance explain why a dry night matters.',
    concepts: ['field-repair', 'critical-gear-tradeoff', 'shelter-failure', 'redundancy'],
  },
  summary: [
    'Routine: **stabilise → clean and dry → load path + cover → round corners → test and monitor**.',
    'Tape covers; cord binds and adjusts; wire and cable ties resist abrasion — each has failure modes.',
    'Sharp tips concentrate stress ($1 + 2a/b$): round corners and crack tips.',
    'Carry a 100–200 g **repair kit** and practise with it at home.',
    '**Never** patch life-safety gear, gas, electrics or vehicle brakes and steering.',
  ],
  furtherReading: ['nps-ten-essentials', 'ten-essentials-mtn', 'freedom-hills'],
  references: ['nps-ten-essentials', 'ten-essentials-mtn', 'freedom-hills', 'afh-10-644', 'army-atp-3-50-21', 'hibbeler-statics', 's10-inglis-1913'],
}
