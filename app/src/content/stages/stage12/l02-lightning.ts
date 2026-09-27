import type { Lesson } from '../../types'

export const l02: Lesson = {
  id: 's12-l2',
  stage: 12,
  order: 2,
  title: 'Thunderstorms and lightning',
  level: 'intermediate',
  minutes: 60,
  prerequisites: ['s12-l1'],
  concepts: ['convection-storms', 'lightning', 'flash-to-bang', 'go-no-go'],
  objectives: [
    'Explain how thunderstorms develop (**convection, instability, CAPE**) and their life cycle.',
    'Describe how lightning forms and the **five ways it injures people**.',
    'Estimate storm distance with **flash-to-bang** (343 m/s) and apply the **30-minute rule**.',
    'Choose the least-exposed place to be when caught out, and explain why the "lightning position" is a last resort.',
    'Set **go/no-go triggers** that get you off exposed terrain before the first strike.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Lightning rarely kills people who are indoors. Outdoors, most victims were caught because they **waited too long**: they finished the climb, the game or the paddle while the storm arrived. The skill in this lesson is mostly about *timing*.

### How a thunderstorm grows

A thunderstorm needs three ingredients:

1. **Moisture.** High dew points (Lesson 1) mean a lot of water vapour, and so a lot of latent heat released when it condenses.
2. **Instability.** A parcel of air, once lifted, keeps rising because it is warmer, and so lighter, than the air around it.
3. **A trigger to lift it.** Sun-heated slopes, a front, a sea-breeze boundary, or air forced over mountains.

On a hot, humid day these combine in a daily rhythm: small cumulus in mid-morning, towering cumulus by late morning, cumulonimbus in the afternoon. Mountains accelerate it, because sunny slopes heat the air and push it upward.`,
    },
    { type: 'diagram', id: 'thunderstorm-lifecycle', caption: 'Single-cell storms grow, mature and collapse within an hour or so. Lightning can occur in all three stages, including from the anvil ahead of the storm and from the back edge after the rain.' },
    {
      type: 'md',
      md: `### Lightning: what it is

Inside the storm, updrafts carry water and ice through the zone where supercooled droplets, ice crystals and soft hail (**graupel**) coexist. Collisions transfer charge: graupel tends to take negative charge and sinks, while small ice crystals take positive charge and rise. This separates charge across kilometres of cloud. When the electric field becomes strong enough, a stepped leader works its way toward the ground. Objects on the ground send up **upward streamers** to meet it, and the connection completes the channel for the **return stroke**.

- The channel heats the air to around **27,000 °C** (NWS: about 50,000 °F). The air expands explosively, and that explosion is **thunder**.
- Lightning can strike **about 16 km (10 miles)** from the storm, often under blue sky ("a bolt from the blue").
- The first strike of a storm is often the most dangerous, because nobody has moved yet. So is the **back edge**, when people go back out too early.`,
    },
    {
      type: 'md',
      md: `### How lightning injures people

Direct strikes are the least common mechanism. Most injuries come from current travelling *near* the person:

| Mechanism | What happens | Implication |
|---|---|---|
| **Ground current** | Current spreads through the ground from the strike point; a voltage difference between your feet drives current through your body | Causes many injuries and most livestock deaths. Keep feet together; do not lie flat |
| **Side flash** | Current jumps from a struck object (tree, pole) to a person nearby | **Never shelter under an isolated tree** |
| **Contact** | Touching something that is struck: fence, wire, metal railing, tent pole | Keep away from fences and long conductors |
| **Upward streamer** | A streamer rising from you that does not become the main channel still carries current | Being the tallest thing around is a risk even without a direct strike |
| **Direct strike** | You are the attachment point | Most likely on open, high ground or on water |`,
    },
    { type: 'diagram', id: 'lightning-injury-paths', caption: 'Five injury mechanisms. Distance from tall objects, from each other, and from long conductors reduces all of them.' },
    {
      type: 'md',
      md: `### Flash-to-bang and the 30-minute rule

Light arrives almost instantly; sound travels at about **343 m/s** (at 20 °C). Count the seconds from flash to thunder:

- **distance (m) = 343 × seconds**, which is about **3 seconds per kilometre** or about 5 seconds per mile.
- **If you can hear thunder, you are within striking distance.** The NWS message is "When thunder roars, go indoors."
- The older **"30-30 rule"** used a 30-second flash-to-bang (~10 km) as the time to seek shelter. Today’s guidance is simpler and safer: **move at the first thunder**, or earlier if you see towering cloud building.
- **Wait 30 minutes after the last thunder** before going back to exposed places. Storms often strike again from the back edge.`,
    },
    { type: 'diagram', id: 'flash-to-bang', caption: 'Flash-to-bang: 12 s × 343 m/s ≈ 4.1 km. Thunder is usually audible to roughly 15 km, about the range lightning can reach.' },
    { type: 'sim', id: 'lightning-risk', caption: 'Decide when to stop, where to go and when to resume on a mountain, a lake and an open plateau.' },
    {
      type: 'md',
      md: `### Where to be

**Safe:** a substantial building with wiring and plumbing, or a **hard-topped metal vehicle** with the windows closed. The metal body carries current around you; the tyres are irrelevant.

**Not safe:** tents, open-sided shelters and pavilions, rock overhangs and shallow cave mouths (current can arc across the gap), and the area under an isolated tree.

**If there is no safe place within reach, reduce your exposure:**

1. **Get off high ground:** summits, ridges, shoulders. Descend. Even 100 m lower on a slope helps.
2. **Get off and away from water:** lakes, rivers, beaches. On water you are the tallest object for kilometres.
3. **Avoid isolated tall objects** (lone trees, poles, towers) and **long conductors** (wire fences, cables, metal railings, fixed ropes).
4. **Prefer lower ground in dense forest of uniform height** over open meadows. It is not safe, but you are no longer the tallest target.
5. **Spread the group out.** Many outdoor programs use about **15 m or more** between people, so that one strike cannot injure everyone and someone can give first aid.
6. **Keep moving to lower, less exposed ground** rather than stopping to wait it out.

### Why the "lightning position" is a last resort

Crouching with feet together, head down and hands over the ears, ideally on a foam pad, **slightly** reduces your height and ground-current path. It does **not** make you safe, and the NWS no longer recommends it as a safety technique. It costs the minutes you should spend getting off the ridge. Use it only if you are caught on exposed ground, cannot move to less exposed terrain, and a strike feels imminent: hair standing on end, buzzing from rock or metal. Then move again as soon as you can.

### Go/no-go triggers

Decide these *before* the trip, as in Stage 1’s turnaround times:

- **Plan the day around the storm window.** In convective climates, summit early and be off exposed ground by early afternoon.
- **Cumulus towering before noon, or castellanus at dawn:** bring the turnaround forward.
- **First thunder, or any flash:** leave exposed terrain now and go to your pre-chosen refuge. Do not finish the pitch, the lap or the photo.
- **Resume only 30 minutes after the last thunder.**`,
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Lightning first aid — take a hands-on course',
      md: 'People struck by lightning **do not carry a charge**; it is safe to touch them at once (once *you* are not in danger). Lightning often causes **cardiac and respiratory arrest** that responds to prompt CPR, so in a multi-casualty strike, treat people who appear dead (not breathing) *first* ("reverse triage", per WMS guidance). Burns are usually superficial. Learn and practise this on a WFA/WAFA/WFR course (Stage 9).',
    },
  ],
  whyItMatters: 'Lightning injures and kills outdoor people every year, and nearly all of them could have been somewhere safer with 20–30 minutes more warning. Knowing how storms build, how to measure their distance, and which ground to avoid turns a terrifying lottery into a timing problem you can manage.',
  science: [
    {
      type: 'md',
      md: `### Instability and CAPE

A lifted air parcel is like a cork held under water. If it ends up **warmer than its surroundings**, it is less dense and buoyancy pushes it upward. Meteorologists add up that buoyancy over the whole depth where the parcel stays warmer than the surroundings. The total is **CAPE (Convective Available Potential Energy)**, in joules per kilogram:

$$
\\text{CAPE} = g \\int_{LFC}^{EL} \\frac{T_{parcel} - T_{env}}{T_{env}}\\, dz
$$

In words: the gravitational acceleration times the relative warmth of the parcel, summed from the level where it first becomes buoyant (LFC) to the level where it stops (EL). If all that energy became upward speed, $\\tfrac{1}{2}w^2 = \\text{CAPE}$, so

$$
w_{max} = \\sqrt{2\\,\\text{CAPE}}
$$

**Example:** CAPE = 1000 J/kg gives $w_{max} = \\sqrt{2000} \\approx 45$ m/s. Mixing with drier air and the weight of water cut real updrafts to perhaps half that, but that is still 20 m/s or more. That is enough to hold hail aloft and build a tower 10 km tall in under an hour. Forecasters loosely treat CAPE of a few hundred J/kg as weak, around 1000–2500 as moderate to strong, and above that as very unstable. The number only matters if something *triggers* the lift, which is why forecasts say "storms possible".

### Flash-to-bang numbers

Sound speed is about $331 + 0.6\\,T$ m/s ($T$ in °C): 343 m/s at 20 °C, 331 m/s at 0 °C. The difference is under 4 %, so "3 seconds per km" works in any weather.

- 9 s → $9 \\times 343 \\approx 3.1$ km
- 30 s → about 10 km

**Closing speed.** If successive flashes go from 30 s to 15 s in 10 minutes, the storm has moved from about 10.3 km to 5.1 km, roughly 5 km in 10 min or **30 km/h**. At that rate it will be overhead in about 10 minutes, which is less time than most descents take. That is why the trigger is the *first* thunder.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (Rockies, Alps).** A party summits at 13:30 in July, meets thunder on the descent ridge and has 40 minutes of exposed scrambling ahead. A 05:00 start and an 11:00 turnaround would have avoided the whole problem.

**Lake / coastal.** Paddlers see a dark sky across the lake and "just finish the crossing". On open water, the right call is the nearest shore that lets them get off the water and into forest, not the far launch.

**Open farmland / prairie.** A group of hikers crosses open fields with no forest nearby. They move to the car early, when thunder is first heard 12 km away, instead of sheltering under the one big oak by the gate.

**Desert (monsoon).** Storms build over the peaks and move out across the desert. Lightning under clear sky is common because the storm is far away but still within 16 km. Flash floods follow (Lesson 3).

**Tropical.** Afternoon storms are almost daily. Schedule exposed work (river travel, ridge walks) for the morning.

**Urban / sports fields.** Many lightning casualties happen on sports fields, golf courses and beaches. Getting into a building or car takes minutes, which is exactly why the decision must be made at the first thunder.`,
    },
  ],
  mistakes: [
    'Waiting for the rain before seeking shelter. Lightning can strike ~16 km ahead of it.',
    'Sheltering under an isolated tree, in a tent, under a picnic shelter or in a shallow rock overhang.',
    'Myth: "Rubber tyres protect you in a car." The metal body does the work; soft-top and open vehicles give little protection.',
    'Myth: "Lightning never strikes the same place twice." Tall objects are struck repeatedly.',
    'Myth: "Lightning victims are electrified; don’t touch them." They carry no charge; start care immediately.',
    'Myth: "Lying flat on the ground is safest." It increases ground-current exposure. The crouch is only a last resort, and moving to lower ground is better.',
    'Going back out as soon as the rain stops. Wait 30 minutes after the last thunder.',
  ],
  exercises: [
    {
      id: 's12-l2-e1',
      title: 'Lightning plan for a real route',
      level: 2,
      safety: 'home',
      minutes: 30,
      materials: ['A map of a route you plan to do', 'Climate information for the season'],
      steps: [
        'Mark every section where you would be the tallest object or near water: summits, ridges, open plateaus, lakes.',
        'For each, mark the nearest less-exposed refuge (dense forest below treeline, a valley, a building, the car) and the time to reach it.',
        'Set a start time, a turnaround time and a "first-thunder" rule for each exposed section.',
        'Write your group-spacing and resume rules (e.g., 15 m apart; 30 min after the last thunder).',
      ],
      success: ['Every exposed section has a named refuge and a time to reach it.', 'Your plan puts you off the most exposed ground before the typical storm window.'],
      skill: 'lightning-plan',
    },
    {
      id: 's12-l2-e2',
      title: 'Flash-to-bang from indoors',
      level: 3,
      safety: 'home',
      minutes: 20,
      materials: ['A stopwatch', 'A window, during a real thunderstorm — from inside a building'],
      steps: [
        'From inside a building, time flash-to-bang for at least five flashes.',
        'Convert each to distance (× 0.343 km/s) and estimate whether the storm is approaching or receding.',
        'After the last thunder, time 30 minutes. Note how often thunder returns during that window.',
      ],
      success: ['You can convert seconds to km in your head (÷ 3).', 'You estimated the storm’s approach speed from at least two readings.'],
      safetyNote: 'Stay indoors, away from windows and plumbing during the storm. Do not go outside to watch.',
    },
    {
      id: 's12-l2-e3',
      title: 'Lightning Risk simulation — all three maps',
      level: 2,
      safety: 'virtual-only',
      minutes: 20,
      steps: ['Play each map at least twice: once moving at the first sign, once waiting for the first close strike.', 'Compare your exposure and explain the difference.'],
      success: ['Score ≥ 80 on each map.', 'You never used the isolated tree or the open shelter as a refuge.'],
    },
  ],
  simulations: ['lightning-risk'],
  quiz: [
    {
      id: 's12-l2-q1',
      kind: 'numeric',
      prompt: 'You count **9 seconds** between a flash and its thunder. Using 343 m/s, how far away is the strike, in km? (one decimal)',
      unit: 'km',
      answer: 3.1,
      tolerance: 0.15,
      concepts: ['flash-to-bang'],
      explanation: '$9 \\times 343 = 3087$ m ≈ **3.1 km**. You are well within striking distance.',
    },
    {
      id: 's12-l2-q2',
      kind: 'numeric',
      prompt: 'Flash-to-bang goes from 30 s to 15 s over 10 minutes. Roughly how fast is the storm approaching, in km/h?',
      unit: 'km/h',
      answer: 31,
      tolerance: 4,
      concepts: ['flash-to-bang', 'convection-storms'],
      explanation: '30 s → 10.3 km; 15 s → 5.1 km. It closed 5.2 km in 1/6 h, so about **31 km/h**. It will be overhead in roughly 10 minutes.',
    },
    {
      id: 's12-l2-q3',
      kind: 'multi',
      prompt: 'Which places give **real** protection from lightning?',
      choices: [
        { id: 'a', text: 'A house with wiring and plumbing', why: 'Yes: a substantial building.' },
        { id: 'b', text: 'A hard-topped car with windows closed', why: 'Yes: the metal body carries current around you.' },
        { id: 'c', text: 'A tent', why: 'No: no protection at all.' },
        { id: 'd', text: 'An open-sided picnic shelter', why: 'No: open structures do not protect.' },
        { id: 'e', text: 'A shallow rock overhang', why: 'No: current can arc across the gap and through you.' },
      ],
      answer: ['a', 'b'],
      concepts: ['lightning'],
      explanation: 'Only substantial buildings and hard-topped metal vehicles are considered safe. Everything else only reduces exposure.',
    },
    {
      id: 's12-l2-q4',
      kind: 'order',
      prompt: 'You are on a rocky summit and hear the **first thunder** (flash-to-bang 25 s). Order your actions.',
      items: [
        { id: 'leave', text: 'Leave the summit immediately by the planned descent route' },
        { id: 'spread', text: 'Spread the group out as you reach less exposed ground' },
        { id: 'refuge', text: 'Reach dense forest / lower ground (or the vehicle, if close)' },
        { id: 'wait', text: 'Wait 30 minutes after the last thunder before going back up' },
      ],
      answer: ['leave', 'spread', 'refuge', 'wait'],
      concepts: ['lightning', 'go-no-go'],
      explanation: 'Get off the most exposed terrain first, reduce multi-casualty risk, reach the least exposed refuge, and respect the back edge of the storm.',
    },
    {
      id: 's12-l2-q5',
      kind: 'truefalse',
      prompt: 'The lightning crouch makes you safe enough to wait out a storm on a ridge.',
      answer: false,
      concepts: ['lightning'],
      explanation: 'It only slightly reduces risk and wastes time you should spend descending. It is a last resort when you cannot move and a strike seems imminent.',
    },
    {
      id: 's12-l2-q6',
      kind: 'single',
      prompt: 'Lightning strikes near a group of four. Two are moving and moaning with burns; one is sitting up, dazed; one is not breathing. Whom do you help first?',
      choices: [
        { id: 'a', text: 'The person who is not breathing: start CPR.', why: 'Correct: lightning arrest often responds to prompt CPR. This is "reverse triage".' },
        { id: 'b', text: 'The people with burns: they are in pain.', why: 'Painful but usually superficial; they are breathing.' },
        { id: 'c', text: 'Nobody until the storm has passed.', why: 'Move to a safer spot if you can, but do not delay CPR.' },
        { id: 'd', text: 'The dazed person, to prevent them wandering.', why: 'Lower priority than someone in arrest.' },
      ],
      answer: 'a',
      concepts: ['lightning', 'priorities'],
      explanation: 'In lightning incidents, the apparently dead are treated first (WMS guidance). Learn CPR on a hands-on course.',
    },
  ],
  scenario: {
    id: 's12-l2-sc',
    setup: 'You and three friends are 30 minutes from the top of a 3,000 m peak at 11:45. The forecast mentioned "afternoon thunderstorms possible". Cumulus to the west have become tall towers in the last hour; you have not heard thunder yet. The descent to treeline takes 45 minutes. Your group is keen to summit.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Summit quickly and descend — no thunder yet.', why: 'Towers growing this fast before noon usually produce lightning within an hour. You would be on the summit ridge in the storm window.' },
      { id: 'b', text: 'Turn around now and descend toward treeline, agreeing that the first thunder means moving fast to the forest and spreading out.', why: 'Best: you act on the early signal (towering cumulus) and make the next trigger explicit.' },
      { id: 'c', text: 'Wait at the col for 30 minutes to see whether the clouds turn into a storm.', why: 'Waiting on exposed ground spends your warning time.' },
      { id: 'd', text: 'Continue, and adopt the lightning position if thunder starts.', why: 'That plans to rely on a last resort that offers little protection.' },
    ],
    best: 'b',
    debrief: 'The real decision point comes before the first thunder. Rapid convective growth before noon is the trigger. Naming the next trigger in advance ("first thunder: forest, spread out") prevents a group debate at the worst moment. Commitment and scarcity traps (Stage 1) are strong on summit days.',
    concepts: ['lightning', 'convection-storms', 'human-factors'],
  },
  summary: [
    'Thunderstorms need moisture, instability (CAPE) and lift; in many climates they follow a daily afternoon rhythm.',
    'Distance ≈ 343 m × seconds (≈ 3 s per km). If you can hear thunder, you are within striking distance (~16 km).',
    'Move at the first thunder or earlier; resume only 30 minutes after the last.',
    'Safe: substantial buildings and hard-topped vehicles. Otherwise get off summits, ridges and water, away from isolated trees and fences, into lower dense forest, spread out.',
    'The lightning crouch is a last resort, not a plan. Struck people carry no charge: start CPR on those not breathing first.',
  ],
  furtherReading: ['nws-lightning', 'nws-lightning-science', 'wms-lightning-2014'],
  references: ['nws-lightning', 'nws-lightning-science', 'wms-lightning-2014', 'freedom-hills', 'nols-wm'],
}
