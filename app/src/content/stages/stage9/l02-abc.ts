import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's9-l2',
  stage: 9,
  order: 2,
  title: 'Airway, breathing, circulation',
  level: 'intermediate',
  minutes: 40,
  prerequisites: ['s9-l1'],
  concepts: ['abc', 'bleeding-control', 'training-scope', 'fa-myths'],
  objectives: [
    'Open and protect an airway, and use the **recovery position** for an unresponsive person who is breathing normally.',
    'Recognise **abnormal breathing** and know when CPR is needed (and that it is learned hands-on).',
    'Control severe bleeding with **direct pressure**, **wound packing** and a **tourniquet** — used early for life-threatening limb bleeding.',
    'Explain why a tourniquet is **not a last resort**, and how to place, time and leave it.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Why X comes before A

Traditional first aid taught *ABC*. Trauma care now puts **catastrophic bleeding first** (X-ABC or "C-ABC"), because an adult can lose a life-threatening amount of blood from a limb artery in a few minutes, while a partially obstructed airway can often be opened in seconds once bleeding is controlled. With two rescuers, do both at once.

### Airway

A person who is **unresponsive** can die from their own tongue or vomit blocking the airway. If they are on their back, open the airway with a **head-tilt, chin-lift**; a **jaw thrust** (lifting the jaw without tilting the head) is the trained-provider option when spinal injury is suspected. Look in the mouth and remove anything you can see and easily reach — don't blind-sweep.

**If they are breathing normally** and you have to leave them, or they may vomit, place them in the **recovery position**. Airway always beats spine: a suspected spinal injury does not justify leaving someone on their back to choke — roll them as a unit with helpers keeping the head in line.`,
    },
    { type: 'diagram', id: 'recovery-position', caption: 'The recovery position keeps the airway draining. Put insulation under the whole body on cold ground.' },
    {
      type: 'md',
      md: `### Breathing

Look, listen and feel for **no more than 10 seconds**. Watch for:
- **No breathing, or only occasional gasps (agonal breathing)** → this is cardiac arrest. Call for help and start **CPR** (and use an AED if one exists). CPR is a hands-on skill — take a certified CPR course; this stage will not try to teach compression depth by text.
- **Laboured, noisy, fast or shallow** breathing → sit a responsive patient up if comfortable, look for a cause (asthma, anaphylaxis, chest injury, altitude), and prepare to evacuate.

*Wilderness caveat:* CPR in the backcountry rarely restarts a heart stopped by major trauma, because there is no hospital behind it. The exceptions — where CPR is especially worthwhile — are **lightning strike, drowning, hypothermia and avalanche burial**, where the heart and lungs may recover. Wilderness courses teach when CPR can reasonably be stopped.

**Choking** (a responsive adult who cannot speak, cough or breathe): alternate up to 5 firm **back blows** between the shoulder blades and up to 5 **abdominal thrusts**; if they become unresponsive, start CPR.`,
    },
    {
      type: 'md',
      md: `### Circulation: stopping severe bleeding

Life-threatening bleeding looks like **spurting or steady flowing** blood, blood soaking through clothing and pooling on the ground, or a wound where a limb has been partly amputated. The tools, from simplest:

1. **Direct pressure.** Gloves on, expose the wound, press **hard** with gauze, a clean cloth or your gloved hand, and **keep pressing** — at least 10 minutes for plain gauze, without peeking. Elevation adds little and is no longer emphasised.
2. **Wound packing.** For deep wounds — especially **junctional** areas (groin, armpit, neck base) where a tourniquet cannot go — push gauze (haemostatic gauze if you carry it) *into* the wound until it is full, then hold hard pressure (≈ 3 min for haemostatic gauze, per the product; longer for plain gauze). Finish with a pressure bandage.
3. **Tourniquet.** For **life-threatening limb bleeding** that pressure does not immediately control — or that you cannot hold pressure on because there are other patients or you must move — apply a tourniquet **early**. The 2024 AHA/Red Cross guidelines and military experience agree: early tourniquet use saves lives, and the old "last resort" teaching is a **myth**.`,
    },
    { type: 'diagram', id: 'tourniquet-placement', caption: 'Tourniquet placement. A purpose-made windlass tourniquet is far more reliable than an improvised one.' },
    {
      type: 'md',
      md: `### Tourniquet details that matter

- **Where:** 5–8 cm (2–3 in) above the wound, **not over a joint**. If you cannot see the wound quickly (darkness, layers of clothing), go **"high and tight"** on the limb.
- **How tight:** until the **bleeding stops** (and the pulse beyond it is gone). It will hurt — a lot. That is expected. A loose tourniquet is worse than none: it blocks the veins but not the artery, *increasing* bleeding.
- **Second tourniquet:** if one doesn't stop it, apply another just above the first.
- **Time:** write the time on the tourniquet or the patient's forehead. Limbs usually tolerate a tourniquet for around **2 hours** with low complication rates. **Do not loosen it** to "let some blood in". In prolonged field care, trained providers may consider converting to packing/pressure — that is a WFR-level (or higher) decision, not a first-aider's.
- **Improvised tourniquets** (a cravat and stick windlass) often fail: they must be at least ~4 cm wide, and they are hard to get tight enough. **Carry a commercial one** if your trips are remote.`,
    },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Myths to drop',
      md: '- **"Tourniquets always cost the limb."** Modern data show limb loss from properly applied tourniquets is rare; death from uncontrolled bleeding is not.\n- **"Pressure points will stop arterial bleeding."** Not supported by evidence; removed from current guidelines.\n- **"Lift the limb above the heart first."** Elevation is not a reliable bleeding control; don\'t delay pressure for it.\n- **"Peek to see if it has stopped."** Every lift breaks the forming clot.',
    },
    {
      type: 'table',
      head: ['Practise at home', 'Needs an instructor / course'],
      rows: [
        ['Recovery position and a team log roll with a willing partner', 'CPR and AED (certified CPR course)'],
        ['Applying a commercial tourniquet to a training aid (rolled towel, pool noodle, limb trainer)', 'Tourniquet on a real limb, and conversion decisions (Stop the Bleed / WFA / WFR)'],
        ['Packing gauze into a wound trainer (a slit in a rolled towel or foam block)', 'Jaw thrust, airway adjuncts, choking manoeuvres on a manikin'],
        ['Kit check: where is the tourniquet, can you reach it with either hand?', 'Haemostatic dressing use on realistic simulators'],
      ],
    },
  ],
  whyItMatters: 'Airway obstruction and bleeding are the two problems that kill in minutes — faster than any rescue can arrive. They are also the two where a trained bystander makes the biggest difference. The American College of Surgeons calls bleeding “the #1 cause of preventable death after injury”; that is why short courses such as Stop the Bleed exist, and why a tourniquet belongs in a remote-trip kit.',
  science: [
    {
      type: 'md',
      md: `### How much blood can you lose?

An adult's blood volume is about **70 mL per kg** of body mass. In words: multiply body mass in kilograms by 70 to get millilitres of blood.

$$ V_{blood} \\approx 70\\ \\text{mL/kg} \\times m $$

**Worked example.** An 80 kg hiker has about $70 \\times 80 = 5600$ mL ≈ 5.6 L. Losing 30 % — about 1.7 L — pushes most people into **class III haemorrhage**: rapid pulse, fast breathing, confusion and falling blood pressure (lesson 3).

Now the rate. If a limb wound bleeds at **150 mL/min**, then the time to lose 1.7 L is

$$ t = \\frac{1700\\ \\text{mL}}{150\\ \\text{mL/min}} \\approx 11\\ \\text{min} $$

Illustrative numbers, not a prediction — but they show why the rescue helicopter is irrelevant to this problem, and your hands (and a tourniquet) are everything.`,
    },
    {
      type: 'md',
      md: `### Why pressure works — and why a loose tourniquet makes it worse

Bleeding flow depends on the pressure difference driving blood out and the resistance in its path. Firm pressure raises the resistance at the hole and lets platelets and clotting proteins plug it. A tourniquet squeezes the whole limb: tight enough, it collapses the artery (arterial pressure ~120 mmHg at the top of each beat) and stops flow. Too loose, it collapses only the low-pressure **veins** (~10–20 mmHg): blood still flows *in* through the artery but can't flow *out* through the veins, so the limb engorges and the wound bleeds **more**. That is why "tight until it stops" is the rule.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest.** A chainsaw kicks back and cuts the lower thigh of a volunteer trail worker. Bright red blood is soaking the ground. His partner applies the tourniquet from the saw kit within a minute, notes the time, and calls. The patient is in hospital 90 minutes later with the limb intact.

**Mountain.** A skier's shin is cut by a ski edge. Steady dark bleeding stops with 10 minutes of hard direct pressure and a pressure bandage — no tourniquet needed.

**Urban/disaster.** After an earthquake, a neighbour has a deep glass cut in the armpit. A tourniquet can't go there: you pack the wound with a clean cloth and lean on it with your full weight while someone else calls for help.

**Coastal.** A swimmer is pulled from the surf unresponsive but breathing. On the beach you place them in the recovery position so water and vomit drain, keep checking breathing, and insulate them from the wet sand.

**Arctic.** A snowmobiler is unresponsive and snoring after a crash. You roll him as a unit onto his side with two helpers holding his head in line — airway beats spine.`,
    },
  ],
  mistakes: [
    'Delaying a tourniquet for life-threatening limb bleeding because it is a "last resort" — a dangerous myth.',
    'Applying a tourniquet loosely, or over a joint, so the bleeding continues or gets worse.',
    'Loosening a tourniquet in the field to "rest the limb".',
    'Peeking under a pressure dressing every minute.',
    'Leaving an unresponsive, vomiting patient on their back because of spinal worry.',
    'Carrying a tourniquet deep in the pack where it cannot be reached quickly.',
  ],
  exercises: [
    {
      id: 's9-l2-e1',
      title: 'Recovery position and team log roll',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Willing, uninjured partner (and two more for the log roll)', 'Sleeping mat'],
      steps: [
        'Partner lies on their back on the mat, playing unresponsive but breathing.',
        'Place them in the recovery position: near arm out, far hand to cheek, far knee up, roll toward you, head tilted so the mouth drains.',
        'Now the log roll: one person holds the head in line and gives commands; two roll the body as a unit on "roll on three".',
        'Swap roles. Time yourselves.',
      ],
      success: ['The position is stable (the upper knee stops rolling).', 'The mouth points downward.', 'In the log roll, head, shoulders and hips moved together.'],
      skill: 'fa-recovery-position',
      safetyNote: 'Only on an uninjured volunteer; stop if anything hurts.',
    },
    {
      id: 's9-l2-e2',
      title: 'Tourniquet and wound-packing drill on a training aid',
      level: 3,
      safety: 'home',
      minutes: 30,
      materials: ['Commercial windlass tourniquet (or a training one)', 'Rolled towel or pool noodle as a "limb"', 'Foam block or towel with a deep slit as a "wound"', 'Roller gauze', 'Timer'],
      steps: [
        'Place the tourniquet on the training limb 5–8 cm above a marked wound, tighten and secure the windlass, write the time. Target: under 60 seconds, then under 30.',
        'Repeat one-handed with each hand (you may be the patient).',
        'Pack the slit wound with roller gauze, fingertip by fingertip, until full; hold pressure 3 minutes by the clock.',
        'Book a Stop the Bleed or similar hands-on course to practise on realistic trainers and learn how tight "tight" really is.',
      ],
      success: ['Tourniquet on and secured in under 30 s with either hand.', 'Wound packed full with no gaps.'],
      skill: 'bleeding-control',
      safetyNote: 'Do not practise tightening a tourniquet on a real limb without an instructor — it is painful and can injure nerves if left on.',
    },
  ],
  quiz: [
    {
      id: 's9-l2-q1',
      kind: 'single',
      prompt: 'A partner’s lower leg is spurting bright red blood after a fall onto a sharp rock. Pressing hard with gauze is not stopping it. What next?',
      choices: [
        { id: 'a', text: 'Keep pressing and raise the leg, since a tourniquet is only a last resort for bleeding.', why: 'Outdated. Life-threatening limb bleeding that pressure isn’t controlling needs a tourniquet now.' },
        { id: 'b', text: 'Apply a tourniquet 5–8 cm above the wound, not over the knee, and tighten until it stops.', why: 'Correct — early tourniquet for life-threatening limb bleeding; note the time it went on.' },
        { id: 'c', text: 'Press hard on the pressure point in the groin to slow the blood flowing into the leg.', why: 'Pressure points are not supported by evidence and are no longer taught.' },
        { id: 'd', text: 'Rinse and clean the wound first so you can see exactly where the bleeding comes from.', why: 'Cleaning comes much later. Stop the bleeding.' },
      ],
      answer: 'b',
      concepts: ['bleeding-control', 'fa-myths'],
      explanation: 'Direct pressure → if it fails (or you can’t maintain it) → tourniquet. Current guidelines treat the tourniquet as an early tool, not a last resort.',
    },
    {
      id: 's9-l2-q5',
      kind: 'single',
      prompt: 'A deep wound in the groin is bleeding heavily. What is the best first-aid approach?',
      choices: [
        { id: 'a', text: 'Put a tourniquet as high around the upper thigh as it will go and tighten it hard.', why: 'A limb tourniquet cannot compress a vessel at the groin crease — it is a junctional wound.' },
        { id: 'b', text: 'Pack the wound tightly with gauze (haemostatic if available) and hold hard pressure.', why: 'Correct — packing is the tool for junctional bleeding.' },
        { id: 'c', text: 'Cover it with a light, clean dressing to keep dirt out, and start evacuating quickly.', why: 'A light cover will not stop major bleeding.' },
        { id: 'd', text: 'Hold ice packs over the wound to constrict the vessels and slow the bleeding.', why: 'Ice does not stop major bleeding.' },
      ],
      answer: 'b',
      concepts: ['bleeding-control'],
      explanation: 'Groin, armpit and neck: pack and press. Tourniquets are for limbs.',
    },
    {
      id: 's9-l2-q4',
      kind: 'single',
      prompt: 'Which of these is **not** correct care for an unresponsive adult who is breathing normally?',
      choices: [
        { id: 'a', text: 'Place them in the recovery position if you must leave them or they may vomit.', why: 'Correct care — it keeps the airway draining.' },
        { id: 'b', text: 'Keep them flat on their back if a spinal injury is possible, even while vomiting.', why: 'This is the wrong one — airway beats spine; log-roll them onto their side as a unit.' },
        { id: 'c', text: 'Insulate them from the ground, because cold ground drains heat from a still body.', why: 'Correct care — cold ground drains heat fast from a still person.' },
        { id: 'd', text: 'Keep checking their breathing, and start CPR if it stops being normal.', why: 'Correct care — reassess continuously.' },
      ],
      answer: 'b',
      concepts: ['abc'],
      explanation: 'Protect the airway, keep watching the breathing, and protect from the environment. A vomiting patient is log-rolled onto their side as a unit, even if a spinal injury is possible.',
    },
    {
      id: 's9-l2-q6',
      kind: 'single',
      prompt: 'After a lightning strike in a group, one person is unresponsive and not breathing; two others are dazed but walking. Where should CPR effort go first?',
      choices: [
        { id: 'a', text: 'To the two dazed walkers first, because they are the most likely to survive.', why: 'They are talking and breathing; they can wait.' },
        { id: 'b', text: 'To the person who is not breathing, as lightning arrest often responds to CPR.', why: 'Correct — "reverse triage": lightning is one of the wilderness situations where CPR is especially worthwhile.' },
        { id: 'c', text: 'To nobody, because CPR in the wilderness almost never brings anyone back.', why: 'Too absolute. Lightning, drowning, hypothermia and avalanche are the exceptions where it is worth it.' },
        { id: 'd', text: 'First move all three into a tent for shelter, then start CPR on whoever needs it.', why: 'Tents offer no lightning protection; start CPR where you are once the scene is as safe as it can be.' },
      ],
      answer: 'b',
      concepts: ['abc', 'lightning'],
      explanation: 'Lightning often causes breathing and cardiac arrest in an otherwise intact body, so the apparently dead are treated first. Learn CPR on a certified course.',
    },
    {
      id: 's9-l2-q3',
      kind: 'single',
      prompt: 'A tourniquet has been put on loosely, and the limb is swelling and bleeding more than before. Which statement is correct?',
      choices: [
        { id: 'a', text: 'It squeezes veins shut while arteries still fill the limb; tighten until bleeding stops.', why: 'Correct — a too-loose tourniquet engorges the limb and can make bleeding worse.' },
        { id: 'b', text: 'A loose tourniquet is gentler on the limb, so leave it and add more gauze on top.', why: 'Leaving it loose keeps trapping venous blood while arterial blood flows in.' },
        { id: 'c', text: 'The tourniquet has failed, so take it off and go back to direct pressure alone.', why: 'Pressure already failed; the fix is to tighten the tourniquet until the bleeding stops.' },
        { id: 'd', text: 'Some extra bleeding is normal at first; wait ten minutes before adjusting it.', why: 'Waiting lets the limb keep engorging and bleeding; tighten it now.' },
      ],
      answer: 'a',
      concepts: ['bleeding-control'],
      explanation: 'A loose tourniquet squeezes the low-pressure veins shut while arterial blood still flows in, engorging the limb. Tighten until bleeding stops.',
    },
    {
      id: 's9-l2-q2',
      kind: 'single',
      prompt: 'Estimate the blood volume of a 65 kg adult (70 mL/kg).',
      choices: [
        { id: 'a', text: '4.6 L', why: 'Correct — 70 × 65 = 4550 mL ≈ 4.6 L.' },
        { id: 'b', text: '0.5 L', why: 'This uses 7 mL/kg instead of 70 mL/kg (a decimal slip): 455 mL.' },
        { id: 'c', text: '45.5 L', why: 'This converts 4550 mL by dividing by 100 instead of 1000.' },
        { id: 'd', text: '1.4 L', why: 'That is 30 % of the blood volume — the loss that means serious shock, not the total.' },
      ],
      answer: 'a',
      concepts: ['bleeding-control', 'shock'],
      explanation: '70 mL/kg × 65 kg = 4550 mL ≈ 4.6 L. Losing 30 % (~1.4 L) means serious shock.',
    },
  ],
  scenario: {
    id: 's9-l2-sc',
    setup: 'Rural farmland, winter, 16:30. A neighbour’s teenager has put his arm through a greenhouse pane. Blood is pumping from a deep cut on the inner forearm and pooling on the frozen ground. You have a home first-aid kit with gauze, a crepe bandage and a commercial tourniquet. The ambulance is 40 minutes away on icy roads.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Press hard at once; if it still pumps, apply the tourniquet above the wound, note the time, then call.', why: 'Best: fast pressure, early tourniquet for pumping limb bleeding (5–8 cm above the wound, or high on the upper arm if in doubt — never over the elbow), then call, keep him lying down and warm.' },
      { id: 'b', text: 'Wrap the crepe bandage loosely around the cut, raise the arm, and wait for the ambulance.', why: 'A loose wrap on pumping bleeding will not work; 40 minutes is too long.' },
      { id: 'c', text: 'Call the ambulance first and wait on the line for instructions before touching the wound.', why: 'Calling matters, but someone should be pressing on the wound while you do — or put the phone on speaker.' },
      { id: 'd', text: 'Rinse the wound with warm water so you can see where the blood comes from, then press.', why: 'Rinsing wastes minutes and blood. Cleaning is for later.' },
    ],
    best: 'a',
    debrief: 'Pumping blood is a minutes problem; the ambulance is a 40-minute solution. **X before ABC**: hands on the wound, tourniquet early if pressure fails, *then* call (speakerphone), lay the patient flat, and insulate from the frozen ground — cold worsens bleeding and shock.',
    concepts: ['bleeding-control', 'priorities', 'abc'],
  },
  summary: [
    'Catastrophic bleeding first, then airway and breathing — with two rescuers, both at once.',
    'Unresponsive but breathing normally → recovery position; airway beats spine.',
    'Not breathing normally → CPR (learn it hands-on). Lightning, drowning, hypothermia and avalanche are the wilderness cases where it is most worthwhile.',
    'Bleeding: hard direct pressure → packing for deep/junctional wounds → **tourniquet early** for life-threatening limb bleeding.',
    'Tourniquet: 5–8 cm above, not over a joint, tight until bleeding stops, note the time, don’t loosen.',
  ],
  furtherReading: ['fa-stop-the-bleed', 'fa-aha-arc-2024', 'nols-wm-book'],
  references: ['fa-aha-arc-2024', 'fa-ilcor', 'fa-stop-the-bleed', 'fa-atls', 'nols-wm-book', 'auerbach', 'fa-wms-lightning-2014'],
}
