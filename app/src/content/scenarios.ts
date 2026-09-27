import type { Scenario } from './types'

// Branching scenarios for the generic ScenarioPlayer. Capstones (Stage 19) will be added here.

const lost1400: Scenario = {
  id: 'lost-1400',
  title: 'Day 1, 14:00 — You realise you are lost',
  stage: 1,
  environment: 'Temperate forested hills, October',
  concepts: ['integration', 'stop', 'stay-or-move', 'priorities', 'phone-use', 'site-selection'],
  intro: `**Setting:** forested hills in October. Overcast, 11 °C. Forecast: rain from about 19:00, overnight low 2 °C. **Sunset 18:30.**

**You:** alone, uninjured. You told your partner you’d be back by 18:00 and roughly which loop you were walking.

**Kit:** rain jacket, fleece, warm hat, 1 L water, emergency bivy bag, lighter, small knife, headlamp, whistle, two snack bars, a paper map (no compass), and a phone at 45 % with patchy coverage.

It’s 14:00. The path you’re on has faded out and nothing matches the map. Every choice changes time, energy, warmth, water, battery, morale and the chance of being found. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '14:00',
  initial: { minutes: 0, water: 1000, energy: 75, warmth: 85, morale: 60, battery: 45, injury: 0, rescue: 20, lost: 50, flags: [] },
  nodes: [
    {
      id: 'start',
      title: 'The trail is gone',
      text: 'You’ve been walking for 15 minutes on a path that has become a deer trail. You feel a jolt of anxiety.',
      options: [
        { id: 'stop', text: 'Stop. Sit down, drink, eat half a bar, and think.', effect: { add: { minutes: 10, morale: 10, lost: -5, water: -150, energy: 5 } }, next: 'stopped', quality: 2, feedback: 'Heart rate settles. You notice you have 4.5 hours of light and no immediate danger. STOP costs 10 minutes and buys clear thinking.' },
        { id: 'push', text: 'Walk faster — the main trail must be just ahead.', effect: { add: { minutes: 45, energy: -15, lost: 25, water: -200, warmth: -5 }, flags: ['sweaty'] }, next: 'pushed', quality: 0, feedback: 'Forty-five minutes later nothing looks familiar, you’re sweaty, and you’re further from your last known point.' },
        { id: 'callwalk', text: 'Keep walking while trying to call your partner.', effect: { add: { minutes: 15, battery: -12, lost: 10 } }, next: 'phonewalk', quality: 1, feedback: 'The call drops twice. You’ve used battery and walked further without a plan.' },
      ],
    },
    {
      id: 'phonewalk',
      title: 'Calls failing',
      text: 'One bar comes and goes. You are still walking.',
      options: [
        { id: 'stop', text: 'Stop and run STOP properly.', effect: { add: { minutes: 10, morale: 5 } }, next: 'stopped', quality: 2, feedback: 'Good recovery. Stopping late is far better than not stopping.' },
        { id: 'keep', text: 'Keep going; you’ll call when there’s better signal.', effect: { add: { minutes: 40, energy: -12, lost: 20, water: -150 }, flags: ['sweaty'] }, next: 'pushed', quality: 0, feedback: 'You’re now well off route and tiring.' },
      ],
    },
    {
      id: 'pushed',
      title: 'Deeper in',
      text: 'The slope steepens toward a creek. Drizzle has started early. Your base layer is damp with sweat.',
      options: [
        { id: 'stop', text: 'Stop now. Put on the rain jacket, sit, eat, and think.', effect: { add: { minutes: 10, morale: 5, warmth: 5 } }, next: 'stopped2', quality: 2, feedback: 'The jacket keeps the drizzle off your damp fleece. Late, but good.' },
        { id: 'creek', text: 'Follow the creek downhill — water always leads somewhere.', effect: { add: { minutes: 60, energy: -15, warmth: -10, lost: 10, water: -200 } }, next: 'creek', quality: 0, feedback: 'In unfamiliar hill country, creeks often lead into steep, slippery gorges before they lead anywhere useful.' },
      ],
    },
    {
      id: 'creek',
      title: 'Waterfall',
      text: '16:00. The creek drops over a 6 m wet rock step. The sides are steep and slick. Light is fading under the canopy.',
      options: [
        { id: 'stop', text: 'Stop. Back away from the edge and reassess.', effect: { add: { minutes: 10, morale: 5 } }, next: 'stopped2', quality: 2, feedback: 'The best decision available. Many serious injuries happen right here.' },
        { id: 'climb', text: 'Climb down beside the waterfall.', effect: { add: { minutes: 30, injury: 60, energy: -20, warmth: -15, morale: -25 } }, next: 'end-fall', quality: 0, feedback: 'Wet rock, tired legs, fading light. You slip.' },
      ],
    },
    {
      id: 'stopped',
      title: 'Inventory',
      text: 'You list your kit and check the time: 14:10. The phone shows one bar, on and off. You don’t know exactly where you are, but you can see roughly where you left the main trail.',
      options: [
        { id: 'sms', text: 'Send an SMS to your partner with your coordinates and “off trail, OK, will update at 16:00”, then airplane mode.', effect: { add: { battery: -5, rescue: 30, morale: 10 }, flags: ['msg'] }, next: 'plan', quality: 2, feedback: 'The message goes through on the third try. Now someone knows roughly where you are — the most valuable thing you can do with the phone.' },
        { id: 'gps', text: 'Use the phone’s GPS map continuously to navigate back.', effect: { add: { battery: -25, lost: -20, minutes: 10 } }, next: 'gpsnav', quality: 1, feedback: 'You get a position — but continuous GPS and screen use are burning battery you may need tonight.' },
        { id: 'save', text: 'Save the phone completely for later.', effect: { add: { minutes: 5 } }, next: 'plan', quality: 1, feedback: 'Saving battery is sensible, but a single SMS now costs little and could change everything.' },
      ],
    },
    {
      id: 'stopped2',
      title: 'Taking stock, later',
      text: 'It’s later than you’d like. You check the phone: one bar, intermittently.',
      options: [
        { id: 'sms', text: 'Send an SMS with coordinates and a short status; airplane mode.', effect: { add: { battery: -5, rescue: 25, morale: 10, minutes: 5 }, flags: ['msg'] }, next: 'plan', quality: 2, feedback: 'Message delivered. Someone now knows where to look.' },
        { id: 'gps', text: 'Navigate by phone GPS toward the trail.', effect: { add: { battery: -25, lost: -20, minutes: 10 } }, next: 'gpsnav', quality: 1, feedback: 'You have a position, but your battery is dropping fast.' },
      ],
    },
    {
      id: 'gpsnav',
      title: 'The trail is across the valley',
      text: 'The GPS shows the main trail about 1.2 km east — across a steep wooded valley. A longer route follows a spur around the head of the valley.',
      options: [
        { id: 'direct', text: 'Go straight across: down the steep slope and up the other side.', effect: { add: { minutes: 50, energy: -25, water: -200 } }, next: 'valley', quality: 0, feedback: 'Steep, wet leaves over rock. Direct is rarely fastest in steep terrain.' },
        { id: 'spur', text: 'Contour round on the spur, with a trigger: if not on the trail by 16:00, stop and prepare for the night.', effect: { add: { minutes: 90, energy: -15, lost: -30, water: -250, battery: -5 } }, next: 'trail', quality: 2, feedback: 'Longer on the map, but safer and more certain — and bounded by a trigger. You meet the trail at 15:50.' },
        { id: 'stay', text: 'Stay put here and wait for rescue.', effect: { add: { minutes: 5 } }, next: 'plan', quality: 1, feedback: 'Staying is often right — but with a clear, safe option and 4 hours of light, it’s worth considering the alternatives.' },
      ],
    },
    {
      id: 'valley',
      title: 'Slip',
      text: 'Halfway down, your foot shoots out on wet leaves. Your ankle twists hard. You can stand, but walking is very painful.',
      options: [
        { id: 'stopcall', text: 'Stop. Message your position and injury, then prepare to spend the night where you are.', effect: { add: { minutes: 20, injury: 40, battery: -8, rescue: 30, morale: -5 }, flags: ['injured', 'msg'] }, next: 'camp', quality: 2, feedback: 'Communication first, then protection. Moving on a bad ankle in this terrain risks a far worse injury.' },
        { id: 'limp', text: 'Limp on toward the trail before it gets dark.', effect: { add: { minutes: 120, injury: 60, energy: -30, warmth: -20, morale: -20 } }, next: 'end-night-walk', quality: 0, feedback: 'Progress is agonisingly slow. Darkness and rain catch you on steep ground.' },
      ],
    },
    {
      id: 'plan',
      title: 'Stay or move?',
      text: 'You have water, warm layers, an emergency bag, and several hours of light. Rain is due around 19:00.',
      options: [
        { id: 'backtrack', text: 'One bounded attempt: backtrack along your own path for 30 minutes. Trigger: if not on the trail by 15:30, stay and prepare for the night.', effect: { add: { minutes: 40, energy: -5, lost: -30, water: -100 } }, next: 'backtrack', quality: 2, feedback: 'Reversible, time-boxed, and aimed at your last known point.' },
        { id: 'stay-msg', text: 'Stay here now: prepare shelter, water and signals early.', requiresFlag: 'msg', effect: { add: { minutes: 10, rescue: 10 } }, next: 'camp', quality: 2, feedback: 'With your partner informed and your position sent, staying is a strong, low-risk choice.' },
        { id: 'stay-nomsg', text: 'Stay here now: prepare shelter, water and signals early.', hiddenIfFlag: 'msg', effect: { add: { minutes: 10 } }, next: 'camp', quality: 1, feedback: 'Reasonable — your partner expects you at 18:00 and knows the loop. But you haven’t sent your position, so the search area will be bigger.' },
        { id: 'road', text: 'Head toward what sounds like a road to the south.', effect: { add: { minutes: 60, energy: -15, lost: 20, water: -200 } }, next: 'road', quality: 0, feedback: 'Sound bounces around valleys. After an hour you’re in thick scrub on a steep slope with no road in sight.' },
      ],
    },
    {
      id: 'road',
      title: 'No road',
      text: 'It’s 15:30. You’re scratched, tired and more disoriented than before.',
      options: [
        { id: 'stop', text: 'Stop, message your position, and prepare to stay where there is flat ground nearby.', effect: { add: { minutes: 15, battery: -5, rescue: 25, morale: 5 }, flags: ['msg'] }, next: 'camp', quality: 2, feedback: 'The right correction. Every further unplanned kilometre enlarges the search area.' },
        { id: 'more', text: 'Keep going — it must be close.', effect: { add: { minutes: 150, energy: -30, warmth: -20, lost: 20, morale: -20 } }, next: 'end-night-walk', quality: 0, feedback: 'Plan continuation bias: the more you invest, the harder it is to stop.' },
      ],
    },
    {
      id: 'backtrack',
      title: 'A trail marker',
      text: 'After 25 minutes along your own faint footprints you spot a painted marker: the junction you missed. It’s 15:25. The car is 5 km away; sunset 18:30.',
      options: [
        { id: 'walk', text: 'Walk out at a steady, non-sweating pace; send an update SMS when you get signal.', effect: { add: { minutes: 110, energy: -15, water: -300, battery: -3, rescue: 20, lost: -50, morale: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Steady pace, dry layers, and your partner is informed.' },
        { id: 'rush', text: 'Jog downhill to be sure of beating the dark.', effect: { add: { minutes: 70, energy: -25, injury: 35, morale: -10, lost: -50 } }, next: 'end-rolled', quality: 0, feedback: 'You had plenty of time. Hurrying on a wet descent turned a solved problem into an injury.' },
      ],
    },
    {
      id: 'trail',
      title: 'Back on the trail',
      text: '15:50. You’re on the marked trail, 5 km from the car. Drizzle is starting.',
      options: [
        { id: 'walk', text: 'Jacket on, steady pace, update SMS at the first signal.', effect: { add: { minutes: 105, energy: -15, water: -300, battery: -3, rescue: 20, lost: -40, morale: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Calm, controlled finish.' },
        { id: 'rush', text: 'Run to beat the rain.', effect: { add: { minutes: 65, energy: -25, injury: 35, lost: -40 } }, next: 'end-rolled', quality: 0, feedback: 'Wet, rooty trail + fatigue + hurry = sprained ankle.' },
      ],
    },
    {
      id: 'camp',
      title: 'Choosing a site',
      text: 'You’ll spend the night out. Three options within 100 m: (1) a flat meadow by the creek in the valley bottom, (2) a gentle bench part-way up the slope under living conifers, next to a small clearing, (3) flat ground beneath a large dead tree with lots of fallen wood.',
      options: [
        { id: 'bench', text: 'The mid-slope bench under living trees, near the clearing.', effect: { add: { minutes: 15 } }, next: 'prep', quality: 2, feedback: 'Above the cold-air pool, sheltered, no overhead hazards — and the clearing will help searchers see you.' },
        { id: 'meadow', text: 'The meadow by the creek — flat, and water is right there.', effect: { add: { minutes: 10, warmth: -20 }, flags: ['coldsite'] }, next: 'prep', quality: 0, feedback: 'On a calm night cold air pools in valley bottoms, and the creek could rise in rain. Tonight this will cost you warmth.' },
        { id: 'deadtree', text: 'Under the big dead tree — firewood on tap.', effect: { add: { minutes: 10, morale: -10 }, flags: ['deadtree'] }, next: 'prep', quality: 0, feedback: 'Widowmakers kill campers every year, especially in wind and rain. You spend the night listening to it creak.' },
      ],
    },
    {
      id: 'prep',
      title: 'Before dark',
      text: 'It’s late afternoon. Rain is due around 19:00. How do you use the remaining light?',
      options: [
        { id: 'protect', text: 'Thick ground bed of needles and leaves, bivy bag ready, fuel and tinder gathered under cover, water collected, red jacket and a big “V” of branches laid out in the clearing.', effect: { add: { minutes: 90, energy: -10, warmth: 10, rescue: 10, water: 400, morale: 10 }, flags: ['prepared'] }, next: 'dusk', quality: 2, feedback: 'Protection, water and signals — all before dark and before the rain.' },
        { id: 'food', text: 'Look for food: berries, maybe fish in the creek.', effect: { add: { minutes: 90, energy: -10, warmth: -10, morale: -5 } }, next: 'dusk', quality: 0, feedback: 'You find almost nothing, and you’ve spent the last light without preparing a bed or fuel. Food is not tonight’s limiting factor.' },
        { id: 'bigfire', text: 'Build the biggest possible signal fire and sit by it.', effect: { add: { minutes: 75, energy: -15, rescue: 5, morale: 5 } }, next: 'dusk', quality: 1, feedback: 'A fire helps, but without a ground bed and cover it won’t save you from the rain — and a big fire needs constant feeding and care.' },
      ],
    },
    {
      id: 'dusk',
      title: '18:30 — rain',
      text: 'The first drops fall as the light goes. The phone shows one bar.',
      options: [
        { id: 'update', text: 'Send a short update (“staying put at [coords], sheltered, OK”), then phone off until a 21:00 check.', effect: { set: { minutes: 270 }, add: { minutes: 10, battery: -5, rescue: 15, morale: 10 } }, next: 'night', quality: 2, feedback: 'Short, scheduled use of the phone keeps searchers informed and the battery alive.' },
        { id: 'scroll', text: 'Scroll news and play a game to take your mind off things.', effect: { set: { minutes: 270 }, add: { minutes: 60, battery: -30, morale: 5 } }, next: 'night', quality: 0, feedback: 'Distraction helps morale a little — at the cost of your emergency lifeline.' },
        { id: 'off', text: 'Turn the phone off completely until morning.', effect: { set: { minutes: 270 }, add: { minutes: 5 } }, next: 'night', quality: 1, feedback: 'Saves battery, but misses a cheap chance to update searchers.' },
      ],
    },
    {
      id: 'night',
      title: 'The long night',
      text: 'Rain drums on the bivy bag. At 23:00 you’re cold and it feels endless. You hear nothing but rain.',
      options: [
        { id: 'manage', text: 'Stay in the shelter: hat on, eat your last bar, sip water, do slow isometric exercises when shivering, doze in short bursts, whistle every half hour after first light.', effect: { set: { minutes: 1090 }, add: { energy: -10, warmth: -10, morale: 5, rescue: 25, water: -300 } }, next: 'end-morning', quality: 2, feedback: 'Uncomfortable, but controlled. At first light you move to the clearing and signal.' },
        { id: 'walk', text: 'You can’t stand it — walk out by headlamp.', effect: { set: { minutes: 870 }, add: { energy: -35, warmth: -35, lost: 20, morale: -30, injury: 30 } }, next: 'end-night-walk', quality: 0, feedback: 'Night navigation in rain on steep ground, cold and tired — the classic path to a fall or hypothermia.' },
      ],
    },
    {
      id: 'end-selfrescue',
      title: 'Back at the car',
      text: 'You reach the car at dusk, damp and tired, and message your partner.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You stopped early, used the phone wisely, and made a **bounded, reversible** attempt to relocate. No search needed.' },
    },
    {
      id: 'end-rolled',
      title: 'Sprained ankle on the trail',
      text: 'You sprain your ankle 2 km from the car. Your partner raises the alarm; a team reaches you on the trail at 20:30.',
      options: [],
      end: { outcome: 'rescued', summary: 'You had solved the problem — then hurried. Being on a marked trail made rescue quick, but it was avoidable.' },
    },
    {
      id: 'end-morning',
      title: 'Found at 08:10',
      text: 'At 07:45 you hear voices. Three long whistle blasts; they answer. A search team walks into your clearing at 08:10.',
      options: [],
      end: { outcome: 'rescued', summary: 'Your **message with coordinates**, a **well-chosen site**, and **signals prepared in daylight** made you easy to find. A cold night — nothing worse.' },
    },
    {
      id: 'end-night-walk',
      title: 'A night that went wrong',
      text: 'Moving in the dark and rain, you fall on a steep slope and can no longer walk. Wet and shivering, you use the last of your battery to call. Rescuers reach you at 04:30, mildly hypothermic.',
      options: [],
      end: { outcome: 'critical', summary: 'The turning points were **moving without a plan** and **moving at night**. Staying put, protected and signaling, would have produced a safer outcome with the same resources.' },
    },
    {
      id: 'end-fall',
      title: 'Injured in the gorge',
      text: 'You fall at the waterfall and injure your leg. Wet and far from your route, you wait for a long, difficult search.',
      options: [],
      end: { outcome: 'critical', summary: 'Following a creek downhill in unfamiliar terrain led into a gorge. The decisive errors were not stopping early and committing to irreversible terrain.' },
    },
  ],
}

export const scenarios: Scenario[] = [lost1400]
export const scenarioById = (id: string) => scenarios.find((s) => s.id === id)
