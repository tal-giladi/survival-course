import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's9-l5',
  stage: 9,
  order: 5,
  title: 'Wounds, burns and blisters',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s9-l1'],
  concepts: ['wound-care', 'burns', 'infection', 'fa-myths', 'training-scope'],
  objectives: [
    'Clean a wound correctly: **bleeding first**, then high-volume **irrigation with drinkable water**, debris removal and a moist dressing.',
    'Recognise **wound infection** early and know when it forces an evacuation.',
    'Classify **burns by depth**, estimate area with the **rule of nines** and palm method, and **cool** them correctly.',
    'Prevent and treat **blisters**, the most common trip-ending wound.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Cuts and scrapes: the sequence

1. **Stop the bleeding** (lesson 2). Cleaning comes after.
2. **Irrigate.** The biggest single factor in preventing infection is washing out bacteria and debris with a **large volume of clean water under pressure**. Drinkable (treated) water is fine — sterile water is not necessary (WMS). Don't add iodine, alcohol or hydrogen peroxide to the wound; they damage tissue.
3. **Remove debris** you can see with clean tweezers; scrub road-rash-type abrasions gently.
4. **Dress.** A thin layer of ointment (optional) and a non-stick dressing keep the wound moist, which heals faster than a dry scab. Change daily or when wet or dirty.
5. **Close or leave open?** Clean, simple cuts can be drawn together with adhesive strips. **Leave open**: animal bites, dirty/crushing wounds, punctures and anything more than a few hours old — closing traps bacteria. Glue and sutures are for trained providers.
6. **Impaled objects**: stabilise them in place with bulky padding; removing them can unplug a bleeding vessel. (The trained-provider exceptions — e.g., an object obstructing the airway — are taught on courses.)`,
    },
    { type: 'diagram', id: 'wound-irrigation', caption: 'Irrigation: volume and pressure, not antiseptics, clean a wound.' },
    {
      type: 'md',
      md: `### Infection: watch the wound every day

Some redness at the edges is normal healing. **Infection** shows as *increasing* pain, swelling, warmth and redness after day 1–2, pus, **red streaks** running up the limb (lymphangitis), swollen lymph nodes, or **fever and feeling unwell**. Local infection: open it up, clean again, warm soaks, and plan to leave. **Spreading redness, streaks or fever → evacuate** (urgent): antibiotics are needed, and sepsis (lesson 3) can follow. Tetanus is a risk with any dirty wound — keep your vaccinations current before remote trips.`,
    },
    {
      type: 'md',
      md: `### Burns

**Stop the burning**: smother flames (stop, drop, roll; a jacket), remove hot or chemical-soaked clothing and jewellery (swelling makes rings into tourniquets). For chemicals, brush off powders, then flush with lots of water.

**Cool the burn** with cool — not icy — clean running water for **20 minutes** (ANZCOR and UK guidance; US guidance says at least 10 minutes). Cooling limits the depth of damage and eases pain; it is worthwhile up to about 3 hours after the burn. In the backcountry, cool the **burn, not the patient**: with a large burn, keep the rest of the body warm to avoid hypothermia.

**Assess depth:**`,
    },
    { type: 'diagram', id: 'burn-depth', caption: 'Burn depth. Depth often declares itself over 24–48 hours.' },
    {
      type: 'md',
      md: `**Assess area** (count partial- and full-thickness only):`,
    },
    { type: 'diagram', id: 'rule-of-nines', caption: 'Rule of nines (adult) and the palm method.' },
    {
      type: 'md',
      md: `**Dress**: loosely with cling film (plastic wrap) in strips or a clean non-stick dressing; don't pop blisters; don't apply butter, oil, toothpaste or ice — **myths** that trap heat, contaminate or freeze tissue.

**Evacuate** for: partial-thickness burns over **~10 % body surface** (less in children and older adults), any **full-thickness** burn, burns to the **face, hands, feet, genitals or major joints**, **circumferential** burns (right round a limb or chest), **electrical/lightning** or significant chemical burns, and any sign of **airway burns** (singed nasal hair, soot around mouth, hoarse voice, burns in an enclosed space) — the last is **emergent**, because the airway can swell shut over hours.`,
    },
    {
      type: 'md',
      md: `### Blisters

A blister is a friction burn: repeated shear separates skin layers and the gap fills with fluid.

- **Prevent**: well-fitting, broken-in footwear; thin liner socks; dry feet; and — most important — **stop at the first hot spot** and tape it (tape, moleskin, or a hydrocolloid dressing).
- **Small, intact blister**: protect it with a donut of padding and cover.
- **Large, tense or painful blister**: clean, drain at the edge with a clean needle, **leave the roof on** as a natural dressing, then pad and cover. A torn blister is an open wound: clean and dress like any other.
- Watch for infection — a blister is a common entry point in the tropics.`,
    },
    {
      type: 'table',
      head: ['Practise at home', 'Needs a hands-on course or clinician'],
      rows: [
        ['Building an irrigation jet (syringe or pierced bag) and flushing a "dirty wound" on an orange or banana', 'Wound closure with glue or sutures'],
        ['Dressing and bandaging on a partner', 'Debriding (cutting away) dead tissue'],
        ['Hot-spot taping and blister padding on your own feet', 'Burn fluid management; escharotomy'],
        ['Timing 20 minutes of cooling; practising cling-film dressing on an unburned arm', 'Managing airway burns'],
      ],
    },
  ],
  whyItMatters: 'Wounds, burns and blisters are the everyday injuries of the outdoors. Handled well, they are an inconvenience; handled badly — dirty wounds closed, burns iced, blisters ignored — they become infections, sepsis or ruined trips days later, often far from help. Stove and campfire burns and infected wounds are among the commonest reasons for expedition evacuations.',
  science: [
    {
      type: 'md',
      md: `### Why volume and pressure clean a wound

Bacteria and grit stick to tissue. To dislodge them, the water jet must exert a shear force greater than their adhesion — while not so strong it drives them deeper. A pressure of roughly 5–8 psi (about 35–55 kPa), which is what a 10–20 mL syringe pushed firmly through a small opening delivers, is commonly cited as effective; a gentle pour is much less so. Then **volume** dilutes what remains: if each rinse removes a fixed fraction of the bacteria, the count falls **geometrically**. If each 100 mL removes 30 %, then after $n$ rinses the remaining fraction is $0.7^n$; after 10 rinses (1 L), $0.7^{10} \\approx 0.03$ — about 3 % remain. Illustrative, but it is why "a litre or more for a dirty wound" is standard advice.`,
    },
    {
      type: 'md',
      md: `### Rule of nines

In words: the adult body surface splits into regions worth about 9 % each (or multiples of 9). Head 9, each arm 9, front of trunk 18, back of trunk 18, each leg 18, genitals 1 — totalling 100 %. For small or patchy burns, the patient's **palm with fingers ≈ 1 %** of their body surface.

**Worked example.** A stove flare burns the whole front of a trekker's right leg (half of 18 = 9 %) and the front of the right arm (half of 9 ≈ 4.5 %), mostly blistered: $9 + 4.5 = 13.5\\ \\%$ partial thickness. That is over 10 % — an evacuation, with attention to warmth and fluids.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest.** A knife slips while carving: a clean 3 cm cut on the thumb. Pressure, irrigate with 500 mL of filtered water from a pierced bag, close with adhesive strips, dress. Checked daily — heals.

**Coastal.** A coral cut on the foot, rinsed in seawater and ignored. Day 3: red, hot, pus, a red streak up the shin. Coral and marine wounds infect easily; this one needs antibiotics — evacuate.

**Desert.** Severe sunburn with blisters across the back and shoulders (≈ 10 %+) on a canyon trip. Shade, cool compresses, fluids, loose covering — and an early exit.

**Arctic.** A white-gas stove flares in a tent vestibule, burning a hand. Cool with snow-melt water (not snow directly), cover with cling film, keep the rest of the person warm; hand burns warrant evacuation.

**Tropical.** Small blisters from wet boots become infected ulcers within days. In constant wet, daily foot care — dry, air, tape — is the prevention.`,
    },
  ],
  mistakes: [
    'Cleaning before the bleeding is controlled.',
    'Dabbing a wound with antiseptic instead of irrigating it with lots of water.',
    'Closing a dirty wound or an animal bite.',
    'Myth: ice, butter, oil or toothpaste on burns.',
    'Cooling a large burn so long that the patient becomes hypothermic.',
    'Ignoring a hot spot "until the next rest stop".',
  ],
  exercises: [
    {
      id: 's9-l5-e1',
      title: 'Irrigation jet and dressing drill',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Irrigation syringe or a clean zip-lock bag and a pin', '1 L of tap water', 'An orange with a shallow cut rubbed with soil or coffee grounds', 'Dressings, tape, adhesive strips'],
      steps: [
        'Make a jet: fill the bag, pierce one corner with a pin, squeeze firmly. Compare with an irrigation syringe if you have one.',
        'Irrigate the orange "wound" from a few cm away, angled so grit washes out and away. How much water until it looks clean?',
        'Dress a partner’s forearm (unharmed) with a non-stick pad and wrap; tape strips across an imaginary clean cut.',
        'Put a mini wound-care kit together for your day pack.',
      ],
      success: ['You can produce a steady jet from improvised materials.', 'You used at least 500 mL before judging it clean.'],
      skill: 'fa-wound-irrigation',
    },
    {
      id: 's9-l5-e2',
      title: 'Hot-spot discipline on a hike',
      level: 3,
      safety: 'outdoor',
      minutes: 120,
      materials: ['Tape or hydrocolloid dressings', 'Spare socks'],
      steps: [
        'On a normal day hike, agree that anyone who feels a hot spot calls a stop immediately.',
        'At the stop: remove sock, dry the skin, tape the hot spot smoothly with rounded corners.',
        'At the end, inspect everyone’s feet and note which footwear/sock combinations caused problems.',
      ],
      success: ['Every hot spot was taped before it became a blister.'],
      skill: 'fa-wound-irrigation',
    },
  ],
  quiz: [
    {
      id: 's9-l5-q1',
      kind: 'single',
      prompt: 'What does the most to prevent infection in a dirty cut in the field?',
      choices: [
        { id: 'a', text: 'Pouring hydrogen peroxide into it', why: 'Damages tissue; not recommended as irrigation fluid.' },
        { id: 'b', text: 'High-volume irrigation with drinkable water under pressure', why: 'Correct — volume and pressure remove bacteria and debris (WMS).' },
        { id: 'c', text: 'Closing it tightly with tape so dirt can’t get in', why: 'Closing a dirty wound traps bacteria inside.' },
        { id: 'd', text: 'Letting it bleed freely for 10 minutes', why: 'Bleeding does not reliably clean a wound and costs blood.' },
      ],
      answer: 'b',
      concepts: ['wound-care', 'fa-myths'],
      explanation: 'Irrigate early and generously with potable water. No additives needed.',
    },
    {
      id: 's9-l5-q2',
      kind: 'numeric',
      prompt: 'Using the adult rule of nines, what percentage of body surface is burned if the whole front of the trunk and the whole of one arm are partial-thickness burns?',
      unit: '%',
      answer: 27,
      tolerance: 0,
      concepts: ['burns'],
      explanation: 'Front of trunk 18 % + one arm 9 % = **27 %** — a major burn: emergent evacuation, keep warm.',
    },
    {
      id: 's9-l5-q3',
      kind: 'multi',
      prompt: 'Which burns warrant evacuation even if small?',
      choices: [
        { id: 'a', text: 'A burn across the palm and fingers', why: 'Yes — hands are a critical area.' },
        { id: 'b', text: 'Singed nostril hairs and a hoarse voice after a tent fire', why: 'Yes — possible airway burn: emergent.' },
        { id: 'c', text: 'A 2 cm superficial (red, no blister) burn on the forearm', why: 'No — field-treatable.' },
        { id: 'd', text: 'A burn that goes all the way around the lower leg', why: 'Yes — circumferential burns can cut off circulation as they swell.' },
        { id: 'e', text: 'A lightning burn', why: 'Yes — electrical injury can damage deeper tissue and the heart.' },
      ],
      answer: ['a', 'b', 'd', 'e'],
      concepts: ['burns', 'evacuation'],
      explanation: 'Location, depth, circumference, mechanism and airway involvement matter as much as area.',
    },
    {
      id: 's9-l5-q4',
      kind: 'truefalse',
      prompt: 'Ice is the best way to cool a burn quickly.',
      answer: false,
      concepts: ['burns', 'fa-myths'],
      explanation: 'Ice can cause cold injury to already damaged tissue. Use cool running water for ~20 minutes and keep the rest of the patient warm.',
    },
    {
      id: 's9-l5-q5',
      kind: 'single',
      prompt: 'Day 3 after a coral cut on the ankle: the redness has spread 8 cm, there is a red streak up the shin and the patient feels feverish. What now?',
      choices: [
        { id: 'a', text: 'Re-clean and carry on with the trip.', why: 'Spreading redness, streaks and fever mean the infection is spreading — beyond field care.' },
        { id: 'b', text: 'Open and clean the wound, warm soaks, mark the edge of the redness with a pen and time, and evacuate urgently for antibiotics.', why: 'Correct — lymphangitis plus fever needs antibiotics; marking the edge documents the trend.' },
        { id: 'c', text: 'Close the wound with tape to keep the infection in.', why: 'Closing an infected wound makes it worse.' },
        { id: 'd', text: 'Wait until day 5.', why: 'Sepsis can develop meanwhile.' },
      ],
      answer: 'b',
      concepts: ['infection', 'evacuation', 'monitoring'],
      explanation: 'Local care buys time; spreading infection needs a clinician. Marking the redness turns a feeling into a measurable trend.',
    },
  ],
  scenario: {
    id: 's9-l5-sc',
    setup: 'Subarctic lake shore, late September, 4 °C, wind. Your companion knocked a pot of boiling water over her thigh and the front of her lower leg while cooking outside the tent. Large blisters are forming over an area about the size of eight of her palms. You have 10 L of lake water (treated), a first-aid kit with cling film, a satellite messenger, and two days’ paddle to the nearest road.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Pack the burn in snow and ice from the shore for an hour to stop the pain.', why: 'Ice damages burned tissue, and an hour of cold in the wind will make her hypothermic.' },
      { id: 'b', text: 'Remove wet clothing from the area, cool the burn with cool water for about 20 minutes while keeping the rest of her in her sleeping bag in the tent, dress loosely with cling film, and send a message: ≈ 8 % partial-thickness burn involving the knee — request evacuation advice.', why: 'Best: cools the burn, protects the patient from cold, uses the palm method to estimate area, and involves rescue early for a burn near a joint.' },
      { id: 'c', text: 'Pop all the blisters so the burn can breathe, then cover with butter.', why: 'Popping blisters and greasing burns are myths that raise infection risk.' },
      { id: 'd', text: 'It is under 10 %, so no action is needed beyond a plaster.', why: 'Area is only one criterion; burns over the knee (a joint) and this size in a remote place justify expert advice and likely evacuation.' },
    ],
    best: 'b',
    debrief: 'Palm method: eight palms ≈ **8 %**. Burn care in the cold is a balance: cool the **burn**, warm the **patient** (Stage 1 heat balance — wind and wet skin at 4 °C remove heat fast). A burn over a major joint and two days from a road is a reason to use the messenger early; rescue coordinators can advise. Watch for infection over the following days.',
    concepts: ['burns', 'heat-balance', 'evacuation'],
  },
  summary: [
    'Bleeding first, then irrigate with lots of drinkable water under pressure; no antiseptic needed in the wound.',
    'Leave dirty wounds and bites open; stabilise impaled objects.',
    'Spreading redness, red streaks or fever = evacuate for antibiotics.',
    'Burns: stop the burning, cool ~20 min with cool water (burn, not patient), cling film, no ice/butter/popping.',
    'Rule of nines and palm ≈ 1 %; evacuate for >10 %, full thickness, critical areas, circumferential, electrical, airway.',
    'Blisters: stop at the hot spot; drain large ones at the edge and keep the roof.',
  ],
  furtherReading: ['fa-wms-wound-2014', 'nols-wm-book'],
  references: ['fa-wms-wound-2014', 'fa-aha-arc-2024', 'nols-wm-book', 'auerbach', 'wms-org'],
}
