import type { Lesson } from '../../types'

export const l04: Lesson = {
  id: 's9-l4',
  stage: 9,
  order: 4,
  title: 'Musculoskeletal injuries',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s9-l1'],
  concepts: ['musculoskeletal', 'splinting', 'training-scope', 'evacuation'],
  objectives: [
    'Distinguish **stable** injuries (usable, can often walk out) from **unstable** ones (suspected fracture or dislocation).',
    'Apply **splinting principles**: joint above and below, padding, position of function, CSM checks before and after.',
    'Improvise splints, slings and swathes from what a hiker carries.',
    'Name which manoeuvres — **traction for angulated fractures, traction splints, dislocation reductions** — are for trained providers only.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Stable or unstable?

Wilderness medicine asks a practical question first: **can the injured part do its job?**

- **Stable injury** (most sprains, strains, contusions): pain and swelling, but the patient can move and bear weight on it, with no deformity and no point tenderness over bone. Often manageable in the field; a stable ankle may walk out, taped, with a lighter pack.
- **Unstable injury** (suspected fracture or dislocation): deformity, point tenderness over bone, grating (crepitus), inability to use or bear weight, a "pop" or "clunk" with the injury, or a joint locked out of position. Splint it and plan an evacuation.

A useful ankle/foot rule of thumb, adapted from emergency-department decision rules: suspect a fracture if the patient **cannot take four steps** (limping is fine) or has **tenderness over the bony knobs of the ankle** or the base of the fifth metatarsal. When in doubt, treat as unstable.

**Open fractures** (bone end through the skin, or a wound over a fracture) carry a high infection risk: control bleeding, rinse off gross contamination, cover with a clean dressing, splint and evacuate — they need antibiotics and surgery.`,
    },
    { type: 'diagram', id: 'splint-principles', caption: 'Splint the joint above and below, pad the gaps, check CSM before and after.' },
    {
      type: 'md',
      md: `### Splinting principles

1. **Check CSM beyond the injury**: *Circulation* (colour, warmth, pulse or capillary refill), *Sensation* (can they feel you touch each toe/finger?), *Movement* (wiggle).
2. **Immobilise the joints above and below** a suspected bone fracture; for a joint injury, the **bones above and below**.
3. **Padding** fills the hollows so the splint is snug without pressure points. A foam sleeping pad is the backpacker's best splint material.
4. **Rigid support**: trekking poles, tent poles, sticks, a rolled foam pad, a pack's frame sheet, a SAM-type splint, a partner's leg (buddy splint).
5. **Position of function**: hand gently curved around a roll, ankle at 90°, knee slightly bent — unless the injury dictates otherwise.
6. **Tie away from the injury** and leave fingers/toes visible to re-check CSM.
7. **Re-check CSM** after splinting and regularly: swelling tightens splints. Worse CSM → loosen and re-pad.
8. **Cold** (not ice directly on skin) for 20 minutes several times a day reduces pain and swelling; **elevate** when possible.

**Slings and swathes** immobilise shoulder, collarbone, arm and wrist injuries: a triangular bandage (or a jacket with its bottom hem pinned up) supports the forearm, and a wide band around the chest holds the arm to the body.`,
    },
    {
      type: 'md',
      md: `### What first aid does — and what needs training

| First aider (after this stage + practice) | Trained provider only (WFA/WAFA/WFR protocols, or a clinician) |
|---|---|
| Splint in the position found, or position of comfort | **Gentle in-line traction** to straighten an angulated long-bone fracture (e.g., when CSM is lost or to allow splinting) |
| Sling and swathe; buddy-tape fingers/toes | **Traction splint** for mid-thigh (femur) fractures |
| Tape a stable ankle for walking out | **Reduction of dislocations** (shoulder, kneecap, finger) — taught in some wilderness courses under strict criteria |
| Cold, elevation, pain relief the patient already carries | Pelvic binder application and spine clearance decisions |
| Decide stable vs unstable; plan evacuation | Managing open fractures over long evacuations |

Reductions are taught in wilderness courses because a remote joint left dislocated for many hours can damage nerves and vessels, and a reduced joint is easier to evacuate. But a wrong reduction (a fracture mistaken for a dislocation) can do harm — this is exactly the kind of skill you learn with an instructor's hands on yours, not from text.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Pelvis and femur: hidden bleeders',
      md: 'A broken femur can hide 1–1.5 L of blood; a broken pelvis considerably more. Mechanism (a big fall onto the hips, a crushing injury) plus pain in the pelvis or groin = do **not** rock or spring the pelvis to "test" it, keep the patient still, treat for shock and call for an urgent evacuation.',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Home practice',
      md: 'Splinting is one of the best first-aid skills to practise at home: forearm, wrist, ankle, lower leg and finger splints on a willing partner using only what is in your day pack. Time yourself and check CSM every time. Then refine it with an instructor on a WFA course.',
    },
  ],
  whyItMatters: 'Musculoskeletal injuries — ankle sprains, wrist and lower-leg fractures, shoulder dislocations — are the most common reason for backcountry rescues. The quality of your splint decides pain, further damage and whether the patient can help with their own evacuation; your stable/unstable judgment decides whether the group walks out or calls a rescue.',
  science: [
    {
      type: 'md',
      md: `### Why "joint above and below" works: levers

A broken bone is a lever with a hinge in the wrong place. The muscles around it still pull, and every movement of the neighbouring joints swings the fragments against each other — pain, bleeding and possible nerve or vessel damage. Fixing the joints at each end removes the lever arm, so the fragments stay still.

### Worked example: hidden blood in a femur fracture

The thigh is roughly a cylinder. If swelling increases the thigh's radius from 8 cm to 9 cm over a 40 cm length, the extra volume is

$$ \\Delta V = \\pi L (r_2^2 - r_1^2) = \\pi \\times 40 \\times (81 - 64) \\approx 2100\\ \\text{cm}^3 $$

— about **2 litres**, or roughly 40 % of a 70 kg adult's blood volume if it were all blood. Real swelling is part blood, part fluid, but the arithmetic shows why a 1 cm change in radius is alarming, and why femur fractures are treated as potential shock.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest.** An ankle rolled on a root: swollen, but the hiker can walk four steps and there's no bony tenderness. Tape it, redistribute the pack, walk out with poles — a stable injury.

**Mountain (scree).** A slip onto an outstretched hand; wrist deformed like a dinner fork. Splint with a rolled foam pad from mid-forearm to past the knuckles, hand around a sock roll, sling and swathe. CSM checked: fingers warm, can feel and wiggle. The patient walks out.

**Arctic/subarctic.** A shoulder dislocation from a ski fall, 25 km from the road. A WFR on the trip, trained in a specific reduction technique, reduces it within the time window her course taught; otherwise sling and swathe in the position of comfort and evacuate.

**Tropical.** A lower-leg fracture on a jungle trail: splint with bamboo and a foam pad, elevate, check toes every 30 minutes as swelling rises in the heat, and send the two fittest members for help.

**Urban/disaster.** After an earthquake a neighbour's forearm is trapped and bruised. Splint with rolled magazines and a scarf.`,
    },
  ],
  mistakes: [
    'Splinting without checking CSM before and after — or never re-checking as swelling increases.',
    'Splints that are too short (not reaching the joints above and below) or unpadded.',
    'Tying bandages directly over the fracture site.',
    'Attempting to "pop back" a dislocation without training — a fracture-dislocation can be made much worse.',
    'Rocking a pelvis to test for fracture.',
    'Assuming "if they can move it, it isn’t broken" — many fractures still allow some movement.',
  ],
  exercises: [
    {
      id: 's9-l4-e1',
      title: 'Improvised splints from a day pack',
      level: 3,
      safety: 'home',
      minutes: 60,
      materials: ['Willing partner', 'Foam sleeping pad', 'Trekking poles or sticks', 'Triangular bandage or scarf', 'Tape, socks, spare clothing'],
      steps: [
        'Forearm/wrist: rolled-pad splint from elbow to knuckles, hand in position of function, sling and swathe. CSM before and after.',
        'Lower leg/ankle: pad "U" around the lower leg and foot, poles either side, secured above and below the knee and ankle. Leave toes visible.',
        'Finger: buddy-tape to the neighbour with padding between.',
        'Time each splint; aim for under 10 minutes with a good result. Ask your partner where it presses.',
      ],
      success: ['Joints above and below immobilised.', 'CSM documented before and after.', 'No pressure points reported after 10 minutes.'],
      skill: 'splinting',
      safetyNote: 'Only on uninjured volunteers. Nothing tied tight enough to change finger/toe colour.',
    },
    {
      id: 's9-l4-e2',
      title: 'Traction, traction splints and reductions — with an instructor',
      level: 4,
      safety: 'formal-training',
      minutes: 480,
      steps: [
        'Enrol in a WAFA or WFR course that teaches in-line traction for angulated fractures, femur traction splints and the dislocation reductions allowed by its protocols.',
        'Practise each under instructor supervision until assessed as competent; note the indications and contraindications your course uses.',
        'Record in your skill tracker what you have been assessed on and when it expires.',
      ],
      success: ['Instructor sign-off on each skill.'],
      skill: 'splinting',
    },
  ],
  quiz: [
    {
      id: 's9-l4-q1',
      kind: 'single',
      prompt: 'Which finding best suggests an **unstable** ankle injury?',
      choices: [
        { id: 'a', text: 'Mild swelling on the outside of the ankle, can walk with a limp.', why: 'Typical of a stable sprain.' },
        { id: 'b', text: 'Cannot take four steps and is tender directly over the bony knob of the ankle.', why: 'Correct — these are the classic fracture red flags.' },
        { id: 'c', text: 'Bruising the next day.', why: 'Bruising happens with sprains too.' },
        { id: 'd', text: 'Pain when the ankle is iced.', why: 'Not diagnostic.' },
      ],
      answer: 'b',
      concepts: ['musculoskeletal'],
      explanation: 'Inability to bear weight and bony point tenderness suggest a fracture — splint and plan evacuation.',
    },
    {
      id: 's9-l4-q2',
      kind: 'order',
      prompt: 'Order the steps for splinting a suspected forearm fracture.',
      items: [
        { id: 'csm1', text: 'Check circulation, sensation, movement in the hand' },
        { id: 'pad', text: 'Pad and position the arm (hand in position of function)' },
        { id: 'rigid', text: 'Apply rigid support from above the wrist to above the elbow' },
        { id: 'secure', text: 'Secure it, tying away from the fracture site' },
        { id: 'csm2', text: 'Re-check CSM and add a sling and swathe' },
      ],
      answer: ['csm1', 'pad', 'rigid', 'secure', 'csm2'],
      concepts: ['splinting'],
      explanation: 'CSM before and after bracket every splint. Pad, support, secure, then sling.',
    },
    {
      id: 's9-l4-q3',
      kind: 'multi',
      prompt: 'Which of these are **trained-provider** skills rather than basic first aid?',
      choices: [
        { id: 'a', text: 'Reducing a dislocated shoulder', why: 'Yes — taught under specific criteria on wilderness courses.' },
        { id: 'b', text: 'Applying a traction splint to a femur fracture', why: 'Yes.' },
        { id: 'c', text: 'Buddy-taping a sprained finger', why: 'No — basic first aid.' },
        { id: 'd', text: 'Straightening an angulated leg fracture with in-line traction', why: 'Yes — taught in WFA/WFR with hands-on practice.' },
        { id: 'e', text: 'Checking CSM', why: 'No — every first aider should do it.' },
      ],
      answer: ['a', 'b', 'd'],
      concepts: ['training-scope', 'musculoskeletal'],
      explanation: 'Moving bones and joints into new positions is learned with an instructor. Splinting in position and checking CSM is for everyone.',
    },
    {
      id: 's9-l4-q4',
      kind: 'truefalse',
      prompt: 'If a patient can wiggle the fingers of an injured arm, the arm is not broken.',
      answer: false,
      concepts: ['musculoskeletal', 'fa-myths'],
      explanation: 'Movement beyond an injury says the nerves and tendons work — not that the bone is intact. Treat on mechanism, deformity, point tenderness and function.',
    },
    {
      id: 's9-l4-q5',
      kind: 'numeric',
      prompt: 'A femur fracture hides about 1.2 L of blood in a 60 kg patient (70 mL/kg). What percentage of blood volume is that? (Nearest whole percent.)',
      unit: '%',
      answer: 29,
      tolerance: 1,
      concepts: ['musculoskeletal', 'shock'],
      explanation: 'Blood volume = 60 × 70 = 4200 mL. 1200 / 4200 ≈ 29 % — upper class II, close to class III. A closed fracture can still cause shock.',
    },
  ],
  scenario: {
    id: 's9-l4-sc',
    setup: 'Mountain trail, 15:00, sunset 19:00, clear and cool. Your partner slipped on scree and has an obviously deformed lower leg; the foot is cold and pale, and she cannot feel you touching her toes. You are 5 km from the car, with a phone signal. Nobody in the group has taken a first-aid course.',
    question: 'What is the best course of action?',
    choices: [
      { id: 'a', text: 'Pull hard on the foot to straighten the leg — you have seen it on TV.', why: 'In-line traction is a trained skill done gently under specific criteria; untrained force can tear vessels and nerves.' },
      { id: 'b', text: 'Splint the leg as found with pads and poles, insulate her, call for rescue immediately describing the loss of circulation and sensation (a limb threat), and re-check CSM every 15 minutes.', why: 'Best: loss of CSM makes this urgent; you stabilise, protect, and get trained help moving fast.' },
      { id: 'c', text: 'Help her hop the 5 km out before dark.', why: 'An unstable leg with no circulation cannot bear weight, and the attempt risks further injury.' },
      { id: 'd', text: 'Wait until tomorrow to see if feeling returns.', why: 'Loss of circulation for hours can cost the limb.' },
    ],
    best: 'b',
    debrief: 'Absent CSM beyond a deformed fracture is a **limb threat**. Trained providers may gently straighten such a fracture to restore circulation — which is exactly why a course is worth taking. Without training: splint in the position found, keep her warm (Stage 1 heat-loss: she is now still on the ground), call early with a clear SOAP-style report, and keep re-checking.',
    concepts: ['splinting', 'training-scope', 'evacuation', 'heat-loss'],
  },
  summary: [
    'Stable (usable, no deformity, no bony tenderness) vs unstable (suspected fracture or dislocation) drives the walk-out decision.',
    'Splint joint above and below, pad well, position of function, CSM before and after — and re-check.',
    'Improvise with foam pads, poles, sticks, clothing and tape; slings and swathes for the arm.',
    'Traction, traction splints and dislocation reductions are for trained providers.',
    'Femur and pelvic fractures can bleed enough to cause shock — treat and evacuate accordingly.',
  ],
  furtherReading: ['nols-wm-book', 'nols-wm', 'solo'],
  references: ['nols-wm-book', 'auerbach', 'wms-org', 'nols-wm', 'solo', 'redcross-wrfa'],
}
