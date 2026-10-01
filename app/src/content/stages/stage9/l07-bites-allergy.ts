import type { Lesson } from '../../types'

export const l07: Lesson = {
  id: 's9-l7',
  stage: 9,
  order: 7,
  title: 'Bites, stings, allergy and poisoning',
  level: 'intermediate',
  minutes: 45,
  prerequisites: ['s9-l2'],
  concepts: ['anaphylaxis', 'envenomation', 'rabies', 'poisoning', 'fa-myths', 'training-scope'],
  objectives: [
    'Recognise **anaphylaxis** and give **epinephrine** by auto-injector early, with a second dose when indicated.',
    'Give snakebite first aid that is **correct for the region** — and reject cutting, sucking, ice and tourniquets.',
    'Manage insect, tick, spider, scorpion and marine stings; treat **mammal bites** with thorough washing and a rabies decision.',
    'Handle suspected **poisoning** (plants, fungi, carbon monoxide) by removing the source, calling for expert advice and monitoring.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Allergic reactions and anaphylaxis

A **mild allergic reaction** — itchy rash, hives in one area, runny eyes — is uncomfortable but not dangerous; an oral antihistamine helps.

**Anaphylaxis** is a severe, whole-body reaction that can kill within minutes. Suspect it when, soon after a likely trigger (stings, foods, medicines), there is **skin** involvement (widespread hives, flushing, swollen lips/tongue) **plus** trouble in another system: **breathing** (wheeze, hoarse voice, throat tightness, stridor), **circulation** (dizziness, fainting, weak fast pulse), or **gut** (vomiting, cramps). Low blood pressure or breathing trouble after a known allergen is enough on its own — skin signs are sometimes absent.

**Treatment: epinephrine (adrenaline), intramuscularly, immediately.**

- Auto-injector into the **outer mid-thigh** (through clothing is fine); hold for the time stated on the device.
- Typical doses: **0.3 mg** for adults and children over ~25–30 kg; **0.15 mg** for children ~15–25/30 kg (the device label sets the band).
- **Second dose** after **5–15 minutes** if symptoms are not improving or return — this is why people with anaphylaxis should carry **two**.
- **Position:** lying down (legs raised) if faint; sitting up if breathing is the main problem. Don't let them stand up suddenly — collapse is common.
- **Antihistamines and asthma inhalers are add-ons**, never substitutes: they do not reverse airway swelling or low blood pressure.
- **Evacuate everyone who needed epinephrine.** Symptoms can return as the drug wears off (15–20 minutes) or hours later (a *biphasic* reaction).

The law on giving another person's epinephrine, or carrying spare "stock" pens for a group, varies by country — check before you lead trips.`,
    },
    {
      type: 'md',
      md: `### Stings and small bites

- **Bees**: remove the stinger **quickly** by any method — speed matters more than technique (the "scrape, don't pinch" rule is a myth about the mechanism). Cold pack, antihistamine for itch. Watch for anaphylaxis.
- **Ticks**: grasp with fine-tipped tweezers **close to the skin** and pull steadily straight out. No burning, petroleum jelly or nail polish (myths that may make the tick regurgitate). Note the date and place; fever or an expanding rash in the next weeks needs a doctor (Lyme disease and other tick-borne infections vary by region).
- **Spiders and scorpions**: most cause local pain only. A few (widow spiders; Australian funnel-web spiders; some scorpions in North Africa, the Middle East, Mexico and India) cause systemic illness — sweating, muscle cramps, breathing problems in children. Cold pack, calm, evacuate if systemic. **Funnel-web bites get a pressure immobilisation bandage** (ANZCOR).
- **Marine**: rinse jellyfish stings with **seawater** (fresh water can fire remaining stinging cells); in tropical Australia and the Indo-Pacific, **vinegar** is used for box-jellyfish stings (follow local signs); **hot-water immersion** (as hot as tolerable without scalding) relieves many other stings, including bluebottles/Portuguese man o' war and venomous fish spines (stonefish, stingray). Urinating on a sting is a **myth**.`,
    },
    {
      type: 'md',
      md: `### Snakebite principles

Many bites are "dry" (no venom), but all should be treated as envenomations until proven otherwise. The only definitive treatment is **antivenom in hospital** (WHO), so first aid is about **getting there** while slowing spread and avoiding harm.

**Everywhere:** move away from the snake (don't try to catch or kill it; a photo from a safe distance is fine), keep the patient **calm and still**, **remove rings, watches and tight footwear** before swelling, **splint the limb**, **mark the edge of swelling with a pen and the time** every 15–30 minutes, and **call and evacuate** — carrying the patient if possible rather than letting them walk.

**Regional differences — follow local guidance:**

- **Australia (and some neighbouring regions):** the **pressure immobilisation technique** — a broad elastic bandage firmly over the bite and then up the whole limb, plus a splint — is recommended for **all Australian snakes** (ANZCOR), because many are neurotoxic elapids with little local tissue damage and venom that spreads through the lymphatics.
- **The Americas (pit vipers: rattlesnakes, lanceheads) and many viper regions:** current US guidelines advise **against** pressure bandaging, because these venoms cause severe local tissue damage that compression may worsen. Immobilise, keep the limb roughly at heart level, and evacuate.
- **Africa and Asia:** both elapids (cobras, mambas, kraits) and vipers occur; national guidance differs. Learn the snakes and the protocol **for where you are going**, before you go.`,
    },
    { type: 'diagram', id: 'snakebite-dos', caption: 'Snakebite first aid: the “don’ts” list is mostly old myths.' },
    {
      type: 'md',
      md: `### Mammal bites and rabies

Any mammal bite or scratch — dogs, cats, monkeys, foxes, raccoons, **bats** (whose bites may be tiny) — carries **infection** risk and, in many regions, **rabies** risk. Rabies is almost always fatal once symptoms start, but prompt **post-exposure prophylaxis (PEP)** — wound care, vaccine and sometimes immunoglobulin — is highly effective.

1. **Wash immediately and thoroughly: soap and running water for at least 15 minutes** (WHO), then irrigate as in lesson 5.
2. **Do not close** the wound; dress it.
3. **Seek medical care urgently** for a rabies-risk decision — within hours to a day or two, not "after the trip". Dog bites in rabies-endemic areas (much of Asia, Africa and Latin America), any bat contact (including waking to find a bat in the tent), and bites from wild carnivores are high-risk.
4. Bites to the **hand**, deep **cat** bites and bites with crush injury infect easily — antibiotics are often needed.`,
    },
    {
      type: 'md',
      md: `### Poisoning

- **Ingested plants or fungi**: stop eating, keep a **sample** (or photo) of what was eaten, **don't induce vomiting**, and call a **poison-control centre** or emergency number (numbers vary by country — look yours up before the trip). Activated charcoal only on expert advice. **Mushrooms that cause symptoms 6–24 hours after eating** are the most dangerous (amatoxin); early vomiting is not reassuring. Stage 6 covers why you should never eat a wild plant or fungus you have identified only from a course.
- **Carbon monoxide**: stoves, heaters or fires in tents, snow shelters, vehicles or houses. Headache, nausea, dizziness, confusion — often several people at once. **Get everyone into fresh air**, oxygen if available, evacuate. "Cherry-red skin" is a late, unreliable sign.
- **Fuel, chemicals**: skin — remove clothing, wash; eyes — flush for 15+ minutes (lesson 8); swallowed — don't induce vomiting; call poison control.`,
    },
    {
      type: 'table',
      head: ['Practise at home', 'Needs a course or clinician'],
      rows: [
        ['Epinephrine auto-injector **trainer** (no needle, no drug): grip, thigh, hold time, second dose timing', 'Recognising anaphylaxis in realistic scenarios; drawing up epinephrine from an ampoule (some WFR/expedition courses)'],
        ['Pressure immobilisation bandage on a partner’s leg (if you travel in Australia)', 'Snakebite care and antivenom decisions'],
        ['Tick removal on a training aid; tick checks after walks', 'Rabies PEP (a medical treatment)'],
        ['Poison-centre and emergency numbers for your destinations', 'Toxicology advice'],
      ],
    },
  ],
  whyItMatters: 'Anaphylaxis is the medical emergency where a first aider with the right drug most directly saves a life. Snakebite first aid is where outdated myths still cause the most harm. And rabies turns a minor-looking bite on a trip abroad into a race against time. Knowing the right actions — and the local variations — before you go is the whole game.',
  science: [
    {
      type: 'md',
      md: `### Why epinephrine and not antihistamine?

In anaphylaxis, immune cells release histamine and other mediators that make blood vessels leak and dilate (blood pressure falls) and airways constrict and swell. **Epinephrine** acts on alpha- and beta-adrenergic receptors: it **constricts vessels** (raising blood pressure, reducing swelling) and **relaxes airway muscle** — within minutes. Antihistamines only block one mediator's effects and work over 30–60 minutes: fine for itch, useless for a closing airway.

Intramuscular epinephrine peaks in the blood in roughly 10 minutes and its effect fades over 15–20 minutes — the physiological reason for the **5–15-minute** re-dose window and for evacuating everyone treated.

### Dose by weight (worked example)

A 22 kg child falls in the lower band on most auto-injector labels → **0.15 mg** device. A 70 kg adult → **0.3 mg**. The standard intramuscular dose is about **0.01 mg/kg** up to 0.5 mg; auto-injectors approximate that in fixed steps.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Coastal (Mediterranean).** A wasp sting at a picnic → hives, hoarse voice. Her own auto-injector goes into her outer thigh within a minute; breathing eases. Twelve minutes later the wheeze returns; the second pen is given. Evacuated to hospital as urgent.

**Desert (south-western USA).** A rattlesnake bite on the ankle. Rings and boot off, calm, splinted, swelling edge marked every 15 minutes, carried to the road; no pressure bandage (pit viper).

**Tropical Australia.** An eastern brown snake bite on the shin while bush-walking: pressure immobilisation bandage and splint, patient kept completely still, radio for helicopter.

**South Asia.** A street dog bites a trekker's calf in a village. Fifteen minutes of soap and water, then a day's travel to a clinic for rabies PEP.

**Subarctic.** A family is found with headaches and vomiting in a cabin heated by a faulty stove: carbon monoxide. Doors open, everyone outside, evacuated.

**Temperate forest.** An adult eats foraged "chanterelles"; 10 hours later, severe vomiting. The delayed onset is a red flag for amatoxin poisoning — emergent evacuation with a sample.`,
    },
  ],
  mistakes: [
    'Giving an antihistamine and "waiting to see" in anaphylaxis — delaying epinephrine is the most dangerous error.',
    'Carrying only one auto-injector on a remote trip.',
    'Cutting, sucking, suction pumps, ice, tourniquets or electric shocks for snakebite — all myths.',
    'Using pressure immobilisation for pit-viper bites where local guidance advises against it, or not using it in Australia where it is recommended.',
    'Delaying rabies care until the end of a trip.',
    'Inducing vomiting after a poisoning.',
  ],
  exercises: [
    {
      id: 's9-l7-e1',
      title: 'Auto-injector trainer drill and allergy plan',
      level: 3,
      safety: 'home',
      minutes: 20,
      materials: ['An epinephrine auto-injector **trainer** (needle-free, drug-free) — many manufacturers supply them', 'Paper'],
      steps: [
        'Practise the grip, cap removal, outer-thigh placement and hold time on yourself and a partner with the trainer only.',
        'Say the second-dose rule aloud: "no better or worse after 5–15 minutes → second pen".',
        'For anyone in your group with a known allergy, write a one-page plan: triggers, signs, where the pens are carried, who can use them, evacuation plan.',
      ],
      success: ['You can use the trainer correctly in under 15 seconds.', 'Your group’s plan names where both pens are carried.'],
      safetyNote: 'Never practise with a real auto-injector — accidental injection into a thumb or finger is a medical emergency.',
    },
    {
      id: 's9-l7-e2',
      title: 'Regional snakebite and bite plan',
      level: 1,
      safety: 'home',
      minutes: 40,
      steps: [
        'Choose a destination. Find the local health authority’s snakebite first-aid guidance and the main venomous species.',
        'Write down: first-aid steps, whether pressure immobilisation is recommended, the nearest antivenom-capable hospital, and evacuation time.',
        'Add: rabies status of the region, nearest clinic offering PEP, poison-centre number.',
        'If the destination is Australia, practise a pressure immobilisation bandage on a partner’s leg with a broad elastic bandage.',
      ],
      success: ['A written, region-specific plan with numbers and distances.'],
      skill: 'fa-evac-plan',
    },
  ],
  quiz: [
    {
      id: 's9-l7-q1',
      kind: 'single',
      prompt: 'Ten minutes after a bee sting, a hiker has hives across the chest, a hoarse voice and is wheezing. She carries two auto-injectors. What first?',
      choices: [
        { id: 'a', text: 'Give an antihistamine tablet now and watch her closely for 30 minutes.', why: 'Too slow and does not treat airway swelling.' },
        { id: 'b', text: 'Epinephrine auto-injector into the outer thigh now, then call for help.', why: 'Correct — skin + breathing signs after a trigger = anaphylaxis; give the second pen after 5–15 min if she is not improving.' },
        { id: 'c', text: 'Scrape the stinger out carefully first, then decide on the next step.', why: 'Removing the stinger is fine but must not delay epinephrine.' },
        { id: 'd', text: 'Walk her quickly to the trailhead so she can reach a doctor sooner.', why: 'Exertion and standing can precipitate collapse; treat first.' },
      ],
      answer: 'b',
      concepts: ['anaphylaxis'],
      explanation: 'Epinephrine early saves lives; a second dose after 5–15 minutes if there is no improvement. Antihistamines are adjuncts.',
    },
    {
      id: 's9-l7-q6',
      kind: 'single',
      prompt: 'A group cooking inside a closed snow shelter all develop headaches and nausea. What is the most likely cause and action?',
      choices: [
        { id: 'a', text: 'Altitude sickness: rest for the evening and continue the climb tomorrow.', why: 'Possible in theory, but several people at once in an enclosed space with a stove points to CO.' },
        { id: 'b', text: 'Carbon monoxide: ventilate and get everyone into fresh air immediately.', why: 'Correct — scene safety applies to invisible gases too.' },
        { id: 'c', text: 'Food poisoning from the shared meal: induce vomiting in everyone.', why: 'Wrong cause and inducing vomiting is not recommended.' },
        { id: 'd', text: 'Dehydration: everyone should drink more water and rest in the shelter.', why: 'Misses a lethal, fast-acting cause.' },
      ],
      answer: 'b',
      concepts: ['poisoning', 'scene-safety', 'immediate-danger'],
      explanation: 'Clusters of symptoms in enclosed spaces with combustion = CO until proven otherwise. The first action is the scene.',
    },
    {
      id: 's9-l7-q2',
      kind: 'single',
      prompt: 'Which of these is correct snakebite first aid rather than a myth?',
      choices: [
        { id: 'a', text: 'Cutting across the fang marks to let venom out', why: 'Myth — causes bleeding and infection, removes no venom.' },
        { id: 'b', text: 'Suction over the bite with the mouth or a pump', why: 'Myth — removes negligible venom.' },
        { id: 'c', text: 'Removing rings and tight boots before swelling', why: 'Correct — removing constrictions is real first aid.' },
        { id: 'd', text: 'A tight arterial tourniquet above the bite', why: 'Myth for snakebite — can cost the limb and concentrate venom.' },
      ],
      answer: 'c',
      concepts: ['envenomation', 'fa-myths'],
      explanation: 'Calm, still, splint, remove constrictions, mark swelling, evacuate — plus pressure immobilisation where local guidance says so (e.g., Australia). Cutting, suction, ice and arterial tourniquets are myths.',
    },
    {
      id: 's9-l7-q5',
      kind: 'single',
      prompt: 'You wake in a hut to find a bat flying around the room where you were sleeping. No one noticed a bite. What is the safest course?',
      choices: [
        { id: 'a', text: 'Nothing is needed, since nobody noticed a bite or felt anything.', why: 'Bat bites can be tiny and unnoticed during sleep.' },
        { id: 'b', text: 'Seek medical advice promptly about rabies post-exposure prophylaxis.', why: 'Correct — bat exposure while asleep is treated as a possible exposure in many guidelines.' },
        { id: 'c', text: 'Watch everyone closely and seek care if any symptoms appear later.', why: 'Once symptoms appear, rabies is almost always fatal.' },
        { id: 'd', text: 'Catch the bat by hand so that it can be tested for rabies.', why: 'Never handle wildlife — a bite is exactly what you are trying to avoid.' },
      ],
      answer: 'b',
      concepts: ['rabies'],
      explanation: 'Rabies decisions are about exposure risk, and bats are a classic unnoticed exposure.',
    },
    {
      id: 's9-l7-q3',
      kind: 'single',
      prompt: 'Which statement about pressure immobilisation bandaging for snakebite is correct?',
      choices: [
        { id: 'a', text: 'It is recommended for all Australian snakebites, but not for US pit-viper bites.', why: 'Correct — ANZCOR recommends it for all Australian snakes; US guidance advises against it for pit vipers.' },
        { id: 'b', text: 'It is recommended for every venomous snakebite worldwide, including pit vipers.', why: 'Region matters: US guidance advises against pressure bandaging for pit-viper bites.' },
        { id: 'c', text: 'It is recommended for US rattlesnake bites but no longer used in Australia.', why: 'This reverses the guidance: Australia recommends it, the US advises against it for pit vipers.' },
        { id: 'd', text: 'It is no longer recommended anywhere, having been replaced by splinting alone.', why: 'ANZCOR still recommends it for all Australian snakebites (and funnel-web spiders).' },
      ],
      answer: 'a',
      concepts: ['envenomation'],
      explanation: 'ANZCOR recommends it for all Australian snakes (and funnel-web spiders). US guidance advises against pressure bandaging for pit-viper bites — region matters.',
    },
    {
      id: 's9-l7-q4',
      kind: 'single',
      prompt: 'After a dog bite in a rabies-endemic area, for at least how long should the wound be washed with soap and water, per WHO?',
      choices: [
        { id: 'a', text: '15 minutes', why: 'Correct — WHO advises at least 15 minutes of washing.' },
        { id: 'b', text: '20 minutes', why: 'That is the burn-cooling time, not the WHO bite-washing time.' },
        { id: 'c', text: '5 minutes', why: 'Too short — WHO advises at least 15 minutes.' },
        { id: 'd', text: '1 minute', why: 'A quick rinse is far short of the 15 minutes WHO advises.' },
      ],
      answer: 'a',
      concepts: ['rabies'],
      explanation: 'At least 15 minutes of washing, then urgent medical care for post-exposure prophylaxis.',
    },
  ],
  scenario: {
    id: 's9-l7-sc',
    setup: 'Rocky desert canyon in the south-western USA, 11:00, 35 °C. A friend is bitten on the lower leg by a rattlesnake. The fang marks are bleeding slightly and swelling is starting. You are 6 km from the car, with a phone signal on the rim 10 minutes away, and three people in the group. Someone suggests the snakebite kit with a suction pump, and someone else wants to tie a belt above the bite.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Use the suction pump for 15 minutes, then tie the belt tight above the bite.', why: 'Both are myths: suction removes negligible venom and a tight constriction can cost the limb.' },
      { id: 'b', text: 'Keep him calm and still in shade, remove the boot, splint, mark swelling, and call for evacuation.', why: 'Best: move away from the snake, remove anything tight, mark the swelling edge with the time, send someone to the rim to call, and plan the fastest evacuation that minimises his exertion.' },
      { id: 'c', text: 'Kill the snake carefully with a rock and bring it along so doctors can identify it.', why: 'Risks a second bite; a photo from a safe distance is enough, and treatment does not wait for ID.' },
      { id: 'd', text: 'Wrap a firm pressure bandage up the whole leg, the way it is done in Australia.', why: 'Region matters: US guidance advises against pressure bandaging for pit-viper bites.' },
    ],
    best: 'b',
    debrief: 'Snakebite first aid is mostly about **what not to do** and **how fast you reach antivenom**. In pit-viper country: calm, still, splint, remove constrictions, mark swelling, call, evacuate — carried if possible. Add Stage 1 thinking: it is 35 °C, so shade and water for everyone, and send the caller with a partner if the terrain is risky.',
    concepts: ['envenomation', 'fa-myths', 'evacuation', 'priorities'],
  },
  summary: [
    'Anaphylaxis = trigger + skin + breathing/circulation/gut → epinephrine IM outer thigh now; second dose after 5–15 min if needed; evacuate all.',
    'Antihistamines are add-ons, not substitutes.',
    'Snakebite: calm, still, splint, remove constrictions, mark swelling, evacuate. No cutting, sucking, ice, tourniquet. Pressure immobilisation in Australia; not for pit vipers.',
    'Mammal bites: soap and water ≥15 min, leave open, urgent rabies decision.',
    'Poisoning: remove the source, keep a sample, no induced vomiting, call poison control; CO → fresh air.',
  ],
  furtherReading: ['fa-who-snakebite', 'fa-anzcor-pit', 'fa-who-rabies'],
  references: ['fa-aha-arc-2024', 'fa-who-snakebite', 'fa-anzcor-pit', 'fa-who-rabies', 'fa-cdc-rabies', 'nols-wm-book', 'auerbach'],
}
