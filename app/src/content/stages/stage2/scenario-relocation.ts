import type { Scenario } from '../../types'

// Stage 2 branching scenario (sim id 'nav-relocation'): relocation in fog on a moorland plateau.

export const navRelocation: Scenario = {
  id: 'nav-relocation',
  title: 'Fog on the plateau — relocation under time pressure',
  stage: 2,
  environment: 'Upland moorland plateau, late October',
  concepts: ['relocation', 'stop', 'terrain-association', 'handrails', 'stay-or-move', 'daylight', 'battery-strategy'],
  intro: `**Setting:** a broad, boggy upland plateau (about 600–640 m) with peat hags, few paths and steep grassy slopes and crags on its edges. Late October. 7 °C on the tops, wind 25 km/h, cloud down to 500 m: **visibility 40 m**. **Sunset 17:45**; usable light under cloud ends about 18:00.

**You:** alone, uninjured, a little tired. Your trip plan with your partner says: down by 18:00, call by 19:00.

**Kit:** 1:25,000 map and baseplate compass (you know your pace count: 64 per 100 m), phone at 60 % with an offline map, headtorch, fleece, waterproofs, hat and gloves, 700 ml water, emergency bivy bag, whistle, two snack bars.

**Your plan:** from the stream crossing (last known point, 14:25) walk on a bearing of about 040° magnetic to a cairn at a path junction, then follow the path down to the valley.`,
  start: 'start',
  startClock: '15:00',
  initial: { minutes: 0, water: 700, energy: 65, warmth: 75, morale: 60, battery: 60, injury: 0, rescue: 25, lost: 45, flags: [] },
  nodes: [
    {
      id: 'start',
      title: 'No cairn',
      text: 'You have walked 35 minutes from the stream crossing. The cairn should have appeared ten minutes ago. Around you: grey fog, peat hags, the odd sheep trod. Nothing on the ground clearly matches the map.',
      options: [
        { id: 'stop', text: 'Stop. Get out of the wind behind a peat hag, add a layer, eat, and work the problem.', effect: { add: { minutes: 8, morale: 8, warmth: 5, energy: 5 } }, next: 'stopped', quality: 2, feedback: 'Doubt is the trigger — not certainty. Eight minutes now buys clear thinking and keeps you close to your last known point.' },
        { id: 'push', text: 'Keep going on the same bearing — the cairn must be just ahead.', effect: { add: { minutes: 30, energy: -10, lost: 20, warmth: -5 }, flags: ['sweaty'] }, next: 'deeper', quality: 0, feedback: 'You were already past your expected arrival time. Every extra minute on an unverified bearing enlarges the circle of places you might be.' },
        { id: 'down', text: 'Follow a sheep trod downhill to get below the cloud and see where you are.', effect: { add: { minutes: 25, energy: -8, lost: 15 } }, next: 'steepground', quality: 0, feedback: 'The edges of plateaus are where the crags are. Descending blind in fog is a classic accident pattern.' },
      ],
    },
    {
      id: 'stopped',
      title: 'What do I actually know?',
      text: 'Last known point: the stream crossing at 14:25. You walked 35 min on about 040° magnetic over rough, boggy ground — at perhaps 3 km/h that is ~1.7 km, but bog and peat hags make both your bearing and your pace count unreliable. The phone has an offline map and GNSS works without signal.',
      options: [
        { id: 'gps', text: 'Take one phone GNSS fix, note the grid reference on the map in pencil, then back to airplane mode.', effect: { add: { minutes: 4, battery: -3, lost: -40, morale: 10 }, flags: ['fixed'] }, next: 'fixed', quality: 2, feedback: 'A single fix, written down, costs 3 % battery and turns “lost” into “located”. The skill is using the phone as a check, not as a screen you stare at.' },
        { id: 'circle', text: 'Draw an estimated-position circle from your last known point, then use the altimeter and the slope under your feet to narrow it.', effect: { add: { minutes: 8, lost: -20, morale: 5 } }, next: 'aspect', quality: 2, feedback: 'Classic relocation: start from what you know for certain, bound the possibilities, then test them against the ground.' },
        { id: 'bend', text: 'There’s a small stream nearby. Decide it must be the one on the map just west of the cairn.', effect: { add: { minutes: 5, lost: 10 } }, next: 'bent', quality: 0, feedback: '“Bending the map” — making the map fit what you hope — is how small errors become big ones.' },
      ],
    },
    {
      id: 'aspect',
      title: 'Reading the ground',
      text: 'Altimeter: 615 m. The ground falls gently (about 5°) toward the north-west on a compass check. Inside your circle the map shows only one place at ~615 m that slopes north-west: the north-west flank of Hill 640 — about 500 m north-east of the path junction you wanted. A stream runs north–south about 300 m west of there, down to the path at a footbridge.',
      options: [
        { id: 'handrail', text: 'Walk west to the stream as a catching feature, deliberately aiming off to the north, then follow it south (downstream) to the footbridge and the path.', effect: { add: { minutes: 35, energy: -8, lost: -30, water: -150 }, flags: ['fixed'] }, next: 'handrail', quality: 2, feedback: 'A big, unmissable catching feature plus aiming off: you will know which way to turn when you hit it.' },
        { id: 'gps', text: 'Confirm with one phone fix before committing.', effect: { add: { minutes: 4, battery: -3, lost: -30, morale: 5 }, flags: ['fixed'] }, next: 'fixed', quality: 2, feedback: 'Two independent methods agreeing is much better than one. Cheap insurance.' },
      ],
    },
    {
      id: 'bent',
      title: 'The stream flows the wrong way',
      text: 'You follow “your” stream for ten minutes. It flows north-east. The stream on the map beside the cairn flows south.',
      options: [
        { id: 'restop', text: 'Admit it. Stop again, and use the altimeter and slope aspect to narrow your position.', effect: { add: { minutes: 10, morale: -5, lost: -10 } }, next: 'aspect', quality: 1, feedback: 'Recognising a mismatch and stopping is exactly right — just later than ideal.' },
        { id: 'force', text: 'Maps are sometimes wrong. Keep following it.', effect: { add: { minutes: 30, energy: -10, lost: 20, warmth: -5 }, flags: ['sweaty'] }, next: 'deeper', quality: 0, feedback: 'The map is rarely wrong about which way water flows. You are.' },
      ],
    },
    {
      id: 'deeper',
      title: 'Peat hags and fading light',
      text: 'It is later now. The peat hags are chest-deep trenches, the fog is thicker, your base layer is damp and you are cooling whenever you stop. The ground ahead begins to tilt downward more steeply.',
      options: [
        { id: 'stop', text: 'Stop now: shelter behind a hag, add layers, eat, and work out your position.', effect: { add: { minutes: 10, warmth: 5, morale: 5 } }, next: 'stopped2', quality: 1, feedback: 'Late, but good. Stopping late is still far better than not stopping.' },
        { id: 'descend', text: 'The ground is dropping — keep going down; the valley must be below.', effect: { add: { minutes: 20, energy: -8 } }, next: 'slip', quality: 0, feedback: 'Steepening ground at a plateau edge in fog is a warning sign, not a destination.' },
      ],
    },
    {
      id: 'steepground',
      title: 'Steep grass above crags',
      text: 'The trod fades on a slope of wet grass that steepens into cloud. Below, you hear water falling over rock.',
      options: [
        { id: 'back', text: 'Climb back up to flatter ground and STOP there.', effect: { add: { minutes: 20, energy: -8, morale: 5 } }, next: 'stopped2', quality: 1, feedback: 'Reversing an unplanned descent is hard on pride and easy on the body — the right call.' },
        { id: 'continue', text: 'Carefully keep descending.', effect: { add: { minutes: 15 } }, next: 'slip', quality: 0, feedback: 'Wet grass on steep slopes is one of the most common causes of serious falls in hill walking.' },
      ],
    },
    {
      id: 'stopped2',
      title: 'Taking stock, later',
      text: 'You are sheltered and have added a layer. There is less light and less energy than there was. Last known point: the stream crossing, now well over an hour ago.',
      options: [
        { id: 'gps', text: 'One phone fix, noted on the map; airplane mode.', effect: { add: { minutes: 5, battery: -3, lost: -35, morale: 10 }, flags: ['fixed'] }, next: 'fixed', quality: 2, feedback: 'Located. Now the question is what to do with the light you have left.' },
        { id: 'circle', text: 'Estimated-position circle, altimeter and slope aspect.', effect: { add: { minutes: 10, lost: -20 } }, next: 'aspect', quality: 1, feedback: 'Sound method, though the circle is now much larger after the extra wandering.' },
      ],
    },
    {
      id: 'fixed',
      title: 'Located — now choose a route',
      text: 'You are on the north-west flank of Hill 640, about 500 m north-east of the path junction. A stream runs north–south 300 m west of you and reaches the path at a footbridge. The direct line to the junction crosses 500 m of peat hags. Sunset 17:45.',
      options: [
        { id: 'handrail', text: 'Walk west to the stream (aiming off to the north), then follow it downstream to the footbridge. Trigger: if not on the path by 17:15, stop and prepare to stay.', effect: { add: { minutes: 35, energy: -8, lost: -30, water: -150 } }, next: 'handrail', quality: 2, feedback: 'Longer on the map, far more certain on the ground — and bounded by a time trigger.' },
        { id: 'direct', text: 'Take a bearing straight to the junction across the peat hags.', effect: { add: { minutes: 45, energy: -12, lost: 10, water: -150 }, flags: ['sweaty'] }, next: 'direct', quality: 1, feedback: 'Shortest on the map, but peat hags wreck both bearing and pace count, and the cairn is a small target in fog.' },
        { id: 'stay', text: 'Stay here now and prepare for the night.', effect: { add: { minutes: 10 } }, next: 'stayearly', quality: 1, feedback: 'Staying is often right — but with a known position, a clear handrail and some light left, it may not be the best option yet.' },
      ],
    },
    {
      id: 'handrail',
      title: 'The footbridge',
      text: 'You hit the stream, turn left (south) as planned and follow it down. At the footbridge the path is obvious even in fog. It is getting dim.',
      options: [
        { id: 'path', text: 'Headtorch ready, follow the path down; send your partner a short “on path, down by 18:30, OK” message when you get signal.', effect: { add: { minutes: 70, energy: -10, battery: -3, lost: -30, morale: 15, rescue: 20 } }, next: 'end-self', quality: 2, feedback: 'A clear path, a torch and a message that prevents an unnecessary call-out. Textbook.' },
        { id: 'shortcut', text: 'Leave the path for a direct line toward the car park to save time before dark.', effect: { add: { minutes: 20, lost: 20, energy: -8 } }, next: 'slip', quality: 0, feedback: 'Having just relocated, you have thrown away your handrail as the light fails.' },
      ],
    },
    {
      id: 'direct',
      title: 'Where is the cairn?',
      text: 'The hags force you left and right. After 45 minutes there is no cairn, and the light is going fast. You are cold whenever you stop.',
      options: [
        { id: 'stay', text: 'Stop. Send an SMS with your grid reference and “stopping for the night, OK”; get into the bivy bag in the lee of a hag; set whistle and torch ready.', effect: { add: { minutes: 20, battery: -4, rescue: 35, warmth: 5, morale: 5 }, flags: ['msg'] }, next: 'end-night', quality: 2, feedback: 'You recognised the limit of your daylight and switched from travelling to surviving — and told someone where you are.' },
        { id: 'push', text: 'Push on in the dark with the headtorch; the path can’t be far.', effect: { add: { minutes: 60, energy: -15, warmth: -15 } }, next: 'slip', quality: 0, feedback: 'Darkness, fog, tired legs and bog: the conditions under which most navigation accidents happen.' },
      ],
    },
    {
      id: 'stayearly',
      title: 'An early halt',
      text: 'It is still light. You have a known position, a stream 300 m away that leads to a path, and a phone at over 50 %.',
      options: [
        { id: 'reconsider', text: 'Reconsider: use the stream as a handrail, with a firm 17:15 turn-back trigger.', effect: { add: { minutes: 35, energy: -8, lost: -30, water: -150 } }, next: 'handrail', quality: 2, feedback: 'Weighing the options again is good judgment, not indecision.' },
        { id: 'prep', text: 'Stay: message your position, pitch the bivy bag in the lee of a hag, and prepare signals.', effect: { add: { minutes: 30, battery: -4, rescue: 35 }, flags: ['msg'] }, next: 'end-night', quality: 1, feedback: 'Safe and defensible — just a longer, colder night than needed.' },
      ],
    },
    {
      id: 'slip',
      title: 'Slip',
      text: 'Your feet shoot out on wet grass. You slide several metres and stop against a rock. Your ankle is badly twisted; standing is agony.',
      options: [
        { id: 'call', text: 'Call the emergency number with your GNSS grid reference, then insulate yourself, put on everything, get into the bivy bag and set the torch flashing.', effect: { add: { minutes: 30, injury: 50, battery: -10, rescue: 50, warmth: -5 }, flags: ['injured', 'msg'] }, next: 'end-injured', quality: 2, feedback: 'Communication with an exact position, then protection from the ground and wind. The best recovery from a bad situation.' },
        { id: 'hobble', text: 'Try to hobble on down before full darkness.', effect: { add: { minutes: 90, injury: 70, warmth: -30, energy: -25, morale: -25 } }, next: 'end-critical', quality: 0, feedback: 'Moving injured, in the dark, on steep wet ground multiplies the risk of a far worse fall.' },
      ],
    },
    {
      id: 'end-self',
      title: 'Down at 18:30',
      text: 'You reach the car at 18:30, tired and damp but fine. Your partner already knows you are safe.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **stopped at the first doubt**, **relocated** with two independent methods (terrain + one GNSS fix), chose a **handrail and catching feature** over a direct line, and set a **time trigger**. That is navigation-failure recovery done right.' },
    },
    {
      id: 'end-night',
      title: 'A cold night, found at first light',
      text: 'A long, cold night in the bivy bag. Your message went through; a mountain rescue team walks to your grid reference at 07:30.',
      options: [],
      end: { outcome: 'rescued', summary: 'Stopping in time, **sending an exact position** and **protecting yourself from wind and ground** turned a navigation failure into an uncomfortable night rather than an accident. A handrail route earlier might have avoided the night altogether.' },
    },
    {
      id: 'end-injured',
      title: 'Rescued, injured',
      text: 'The team reaches your flashing torch at 21:40 and stretchers you down. Cold, sore — and alive.',
      options: [],
      end: { outcome: 'rescued', summary: 'The decisive error was **moving without a verified position** (or leaving the handrail) onto steep ground in fog. Your recovery — **call with coordinates, then insulate** — was excellent.' },
    },
    {
      id: 'end-critical',
      title: 'Found hypothermic',
      text: 'Searchers find you after midnight, far from where you slipped, wet and hypothermic.',
      options: [],
      end: { outcome: 'critical', summary: 'Pressing on while disoriented, then moving injured in the dark, turned a navigation problem into a medical emergency. **STOP early, relocate before moving, and switch to survival mode when daylight runs out.**' },
    },
  ],
}
