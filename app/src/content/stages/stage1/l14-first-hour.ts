import type { Lesson } from '../../types'

export const l14: Lesson = {
  id: 's1-l14',
  stage: 1,
  order: 14,
  title: 'Putting it together: the first hour',
  level: 'beginner',
  minutes: 45,
  prerequisites: ['s1-l6', 's1-l10', 's1-l11', 's1-l12', 's1-l13'],
  concepts: ['integration', 'twelve-questions', 'priorities'],
  objectives: [
    'Run the complete decision loop on an **integrated scenario** from first alarm to overnight plan.',
    'Sequence **first-hour actions** so cheap, high-value protection happens before daylight runs out.',
    'Explain every decision in terms of mechanisms from earlier lessons — heat balance, risk, stay-or-move, signaling.',
    'Identify which Stage 1 skills you still need to practise physically.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Stage 1 gave you a set of tools. This lesson is about **sequencing** them. In a real emergency the tools compete for the same limited daylight, energy and attention — so the order you use them matters as much as how well you use them.`,
    },
    { type: 'diagram', id: 'first-hour', caption: 'A typical first hour. Timings flex; the order rarely does.' },
    {
      type: 'md',
      md: `### A worked example

> **Temperate mountains, October, 16:05.** You and a friend took a "shortcut" off the trail and are now unsure where you are. Sunset 18:20. 9 °C, cloud thickening from the west, forecast rain after 20:00, overnight low 3 °C. You left a trip plan with your sister: back by 19:00, call for help at 21:00. Kit: two day packs, a tarp, cord, lighter + ferro rod, 1.2 L water, a filter, snacks, two headlamps, phones at 55 % and 30 %, rain jackets, one fleece each, a whistle.

**0–5 min — STOP.** No immediate danger (not on a cliff or in a gully). No injuries. You both sit, drink a little, eat a bar. Heart rates settle.

**5–15 min — Inventory and communication.** Inventory as above. One phone shows one bar: send an SMS to your sister with your coordinates, "Off trail, OK, may stay out tonight, will update at 18:00." Airplane mode on the other phone to save it.

**15–30 min — Stay or move?** Questions 8–11: Someone knows your plan (search would start at 21:00). Weather is about to worsen; darkness at ~18:45. Your own route back is uncertain through thick brush. Moving is **irreversible and uncertain**; staying is **reversible** and supported by the trip plan. Trigger set: "One reversible attempt: backtrack 15 minutes along our path. If we don’t hit the trail by 16:45, we stay."

**30–60 min — Protection.** The backtrack fails at 16:45 — trigger fires, no debate. You choose a mid-slope bench under living trees, out of the valley bottom (clear-sky gaps would allow cold-air pooling; rain is coming). Tarp A-frame pitched low with the back to the west wind. Thick leaf bed, 25 cm. Gather tinder into a pocket and a full fire ladder under the tarp edge. Filter water from a stream nearby to fill both bottles.

**60+ min — Reassess.** Fire lit and small (legal in an emergency, safe site). Update SMS sent from a spot with signal: "Staying put at [coordinates], sheltered, fine." Signals prepared: red jacket for the clearing below in the morning; whistle schedule every 15 minutes if you hear anyone. Plan for rain: layers on before it arrives; food shared; turns at keeping the fire.

**Result:** a cold, uncomfortable, safe night — and a short, easy rescue or self-rescue in daylight.`,
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Notice what didn’t happen',
      md: 'No one spent the last light looking for food, walking "just a bit further", or building an elaborate shelter in the wrong place. Every action removed a big risk cheaply, and the one risky option (moving) was bounded by a trigger.',
    },
    { type: 'sim', id: 'scenario-lost-1400', caption: 'Now you: a branching scenario that tracks time, weather, water, warmth, battery and rescue probability.' },
  ],
  whyItMatters: 'Real emergencies do not come one topic at a time. Integrating priorities, heat balance, shelter, fire, water and signaling into a single sequenced plan is the skill that transfers to situations you have never studied.',
  examples: [
    {
      type: 'md',
      md: `**The same first hour, other environments:**

- **Desert vehicle breakdown at 11:00:** STOP → water and shade first (under/beside the vehicle, off hot ground) → message/beacon → stay with the vehicle → signals prepared (mirror, bonnet up, spare tyre ready for smoke) → rest through the heat; any movement only in the cool of evening, and usually not at all.
- **Snowshoe trip, binding broken at dusk, −10 °C:** STOP → insulation on immediately (heat production just dropped) → ground insulation from the pack and boughs → wind block → stove for warm water → message.
- **Urban earthquake at night:** immediate danger (gas, structural damage, aftershocks) → injuries → exit safely → water and warmth → communicate family plan → stay near the home or go to the designated shelter.`,
    },
  ],
  mistakes: [
    'Solving the most interesting problem instead of the most urgent one.',
    'Letting daylight run out before protection is in place.',
    'Treating the decision to stay as "giving up" instead of the strategic choice it usually is.',
    'Forgetting to update the people who might be searching.',
  ],
  exercises: [
    {
      id: 's1-l14-e1',
      title: 'Integrated scenario: Day 1, 14:00',
      level: 4,
      safety: 'virtual-only',
      minutes: 30,
      steps: [
        'Play the scenario simulation in this lesson once without pausing.',
        'Play it again and, at every decision, write down the 12 questions’ answers before choosing.',
        'Compare decision-quality scores and write down the one decision that mattered most.',
      ],
      success: ['Decision quality ≥ 80 % on the second run.', 'You can explain the most important decision in terms of reversibility and heat balance.'],
      skill: 'first-hour',
    },
    {
      id: 's1-l14-e2',
      title: 'Garden or campsite overnight with your kit',
      level: 4,
      safety: 'outdoor',
      minutes: 720,
      materials: ['Your day pack with the Ten Essentials', 'Tarp', 'A sleeping bag as a safety backup (kept nearby)'],
      safetyNote: 'Do this in your garden or a legal campsite, in mild weather, with a warm house or car nearby as a bail-out. Tell someone. Do not attempt in cold or severe weather.',
      steps: [
        'Starting at 17:00, run the first-hour sequence as if it were real: STOP, inventory, message someone, choose a site, pitch the tarp, build a ground bed, prepare (and if permitted, light) a fire, treat water.',
        'Sleep (or try to) with only your day kit, keeping the sleeping bag beside you as a backup.',
        'At 03:00 and at dawn, note how cold you are and why (ground? wind? damp?).',
        'In the morning, write a debrief: what worked, what failed, what you will change in your kit.',
      ],
      success: ['Protection complete within 60 minutes of starting.', 'A written debrief with at least three changes to your kit or technique.'],
      skill: 'first-hour',
    },
  ],
  simulations: ['scenario-lost-1400'],
  quiz: [
    {
      id: 's1-l14-q1',
      kind: 'order',
      prompt: 'Order these first-hour actions for a lost hiker at 16:00 with no immediate danger.',
      items: [
        { id: 'stop', text: 'STOP: sit, drink, calm down' },
        { id: 'inv', text: 'Inventory and send a location message' },
        { id: 'decide', text: 'Decide stay or move (with a trigger)' },
        { id: 'protect', text: 'Shelter, ground insulation, fire preparation' },
        { id: 'reassess', text: 'Reassess and prepare signals for the morning' },
      ],
      answer: ['stop', 'inv', 'decide', 'protect', 'reassess'],
      concepts: ['integration', 'decision-loop'],
      explanation: 'Stop → information → decision → protection → reassess. It mirrors the decision loop.',
    },
    {
      id: 's1-l14-q2',
      kind: 'single',
      prompt: 'In the worked example, why was a mid-slope bench chosen over the valley bottom? (Review of lesson 10.)',
      choices: [
        { id: 'a', text: 'Better phone signal', why: 'Possibly, but not the main reason.' },
        { id: 'b', text: 'Cold-air pooling and flood risk in the valley bottom', why: 'Correct.' },
        { id: 'c', text: 'Closer to food sources', why: 'Food is not tonight’s priority.' },
        { id: 'd', text: 'Easier to light a fire', why: 'Not the determining factor.' },
      ],
      answer: 'b',
      concepts: ['site-selection', 'integration'],
      explanation: 'Valley bottoms collect cold air on calm nights and carry flood risk.',
    },
    {
      id: 's1-l14-q3',
      kind: 'single',
      prompt: 'Which Stage 1 idea made the "stay" decision fast and unemotional in the worked example?',
      choices: [
        { id: 'a', text: 'The rule of threes', why: 'Helps order threats, but did not make this decision.' },
        { id: 'b', text: 'A decision trigger set in advance', why: 'Correct — "if not on the trail by 16:45, we stay".' },
        { id: 'c', text: 'The fire triangle', why: 'Unrelated.' },
        { id: 'd', text: 'Box breathing', why: 'Helps arousal, not the decision rule.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'integration'],
      explanation: 'Triggers pre-commit a decision while you are calm.',
    },
    {
      id: 's1-l14-q4',
      kind: 'multi',
      prompt: 'Spaced review — which of these are correct?',
      choices: [
        { id: 'a', text: 'Evaporating 100 ml of water removes about 240 kJ of heat.', why: 'Correct (lesson 7).' },
        { id: 'b', text: 'Chlorine reliably inactivates Cryptosporidium.', why: 'Wrong (lesson 12).' },
        { id: 'c', text: 'A lighter should be kept in an inner pocket in the cold.', why: 'Correct (lesson 11).' },
        { id: 'd', text: 'Doubling the radius of a search area doubles its size.', why: 'Wrong — it quadruples (lesson 13).' },
      ],
      answer: ['a', 'c'],
      concepts: ['heat-loss', 'water-treatment', 'fire-structure', 'visibility'],
      explanation: 'These mechanisms keep coming back — that is the point of spaced review.',
    },
  ],
  scenario: {
    id: 's1-l14-sc',
    setup: 'Coastal hills, spring, 15:30. Sunset 19:10. You are alone, have sprained your ankle badly on a remote path and cannot walk more than a few metres. 11 °C, wind rising, showers forecast. No one knows your exact route but your partner expects you home at 20:00. Phone: 25 %, one bar intermittently. Kit: jacket, fleece, 0.7 L water, snack, headlamp, whistle, small emergency bag, lighter.',
    question: 'Which first-hour plan is best?',
    choices: [
      { id: 'a', text: 'Crawl toward the road, 3 km away, before dark.', why: 'Slow, exhausting and exposes you to the weather; you will be harder to find away from the path.' },
      { id: 'b', text: 'Call the emergency number now (or SMS if the call fails) with your location; then get out of the wind beside the path, put on all layers, sit on your pack, get into the emergency bag before the showers, and set signal and battery routines.', why: 'Best: an injured, stationary person’s biggest lever is communication, then protection from wind and rain.' },
      { id: 'c', text: 'Wait until 20:00 when your partner will raise the alarm.', why: 'Your partner does not know your route, and you have a signal now — use it while the battery lasts.' },
      { id: 'd', text: 'Use the remaining battery to search the map for a shorter route.', why: 'Communication first; you cannot use a shorter route anyway.' },
    ],
    best: 'b',
    debrief: 'Injury removes "move" from the table, and the missing trip plan means no automatic search in the right place — so **communication is the highest-value action while you have signal**. Then heat balance: wind + showers + sitting still is the hypothermia recipe, so layers, ground insulation (pack) and the emergency bag go on early. Staying beside the path makes you easy to find.',
    concepts: ['integration', 'phone-use', 'heat-balance', 'stay-or-move'],
  },
  summary: [
    'Sequence matters: STOP → information → decision → protection → reassess.',
    'Protect early and cheaply; bound risky options with triggers.',
    'Communication is often the highest-value action when you have it.',
    'Stage 1 skills return in every later stage and every capstone.',
  ],
  furtherReading: ['deep-survival', 'koester-lpb'],
  references: ['koester-lpb', 'army-atp-3-50-21', 'wms-hypothermia-2019', 'cdc-emergency-water', 'ten-essentials-mtn'],
}
