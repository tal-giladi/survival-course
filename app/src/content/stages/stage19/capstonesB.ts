import type { Lesson, Scenario } from '../../types'

// Capstones 7–12 (lessons cap-7 … cap-12 and their branching scenarios).
// Each scenario is pure data for the ScenarioPlayer. Titles that carry a clock time are reached only
// through options that `set` the elapsed minutes, so the on-screen clock always matches the story.

// ---------------------------------------------------------------------------------------------
// Capstone 7 — Lost at night
// ---------------------------------------------------------------------------------------------

const cap7Scenario: Scenario = {
  id: 'cap-7-scenario',
  title: 'Capstone 7 — Lost at night',
  stage: 19,
  environment: 'Forested upland (beech and spruce), late October, clear night',
  concepts: ['integration', 'stop', 'stay-or-move', 'stress-control', 'site-selection', 'ground-insulation', 'signaling', 'phone-use'],
  intro: `**Setting:** a forested upland in late October. Sunset was 17:20 and it has been fully dark since about 17:50. The sky is clear, there is almost no wind, and it is 5 °C, forecast to fall to about 0 °C before dawn. A thin crescent Moon hangs low in the west and sets around 20:30.

**You:** alone, uninjured, tired after a longer walk than planned. You took a detour to a viewpoint and started down late. Your flatmate knows you went "walking in the hills" and expects you "around 19:00" — nothing more specific.

**Kit:** fleece, light rain shell, beanie, thin gloves, 600 ml water, one chocolate bar, a whistle, a lighter, a small knife, a small first-aid kit, a foam sit pad, an orange 120-litre rubbish sack you use as a pack liner, and a headlamp whose batteries you forgot to replace — it is flickering and yellow. The phone (your only map, used all day) is at **30 %**.

It is **18:15**. Ten minutes ago the path vanished into a patch of wind-thrown trees, and you have been casting around for it since. Every choice changes time, warmth, energy, morale, battery, injury, disorientation and the chance of being found. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '18:15',
  initial: { minutes: 0, water: 600, energy: 50, warmth: 70, morale: 45, battery: 30, injury: 0, rescue: 15, lost: 55, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '18:15 — The beam dims',
      text: 'Fallen trunks lie across the slope in every direction. The headlamp flickers, brightens when you tap it, then fades again. Somewhere below you can hear a stream. Your heart is going fast and a voice in your head says *hurry*.',
      options: [
        { id: 'stop', text: 'Stop. Switch the headlamp **off** to save what is left, sit on the pad, put on fleece and hat, eat two squares of chocolate, and run STOP.', effect: { add: { minutes: 10, morale: 10, warmth: 5, energy: 5, lost: -5 } }, next: 'stopped', quality: 2, feedback: 'The single most important night decision is to stop *before* the light or the ground forces you to. A sitting person makes no new navigation errors and cannot fall. Switching the dying lamp off preserves its last minutes for camp work, and your eyes begin dark adaptation (most of it takes 20–30 minutes). Food and a hat deal with the heat-budget drop that comes the moment you stop walking.' },
        { id: 'push', text: 'Turn the headlamp to **maximum** and search hard for the path before it dies.', effect: { add: { minutes: 25, energy: -10, lost: 15, warmth: -5 }, flags: ['lampdead'] }, next: 'dark', quality: 0, feedback: 'Maximum output drains weak batteries in minutes. You zig-zag across the windthrow, sweat into your base layer, and 25 minutes later the beam dies — further from the last point you knew, with no light left for making camp.' },
        { id: 'phone', text: 'Switch to the phone torch and keep walking **downhill toward the stream** — valleys lead out.', effect: { add: { minutes: 20, battery: -10, lost: 10, energy: -5 } }, next: 'slope', quality: 0, feedback: 'You are spending your only communication device as a torch, and following water downhill in unfamiliar terrain at night. Streams cut the steepest ground in a landscape; "follow water out" is a daytime, open-country idea at best.' },
      ],
    },
    {
      id: 'dark',
      title: 'Total darkness',
      text: 'The headlamp gives a last orange glow and goes out. You cannot see your feet. You feel a strong urge to keep moving — any direction, just move.',
      options: [
        { id: 'sit', text: 'Sit down exactly where you are. Breathe slowly with long exhales, let your eyes adapt for 20 minutes, then take stock.', effect: { add: { minutes: 25, morale: 5, warmth: -5 } }, next: 'stopped', quality: 2, feedback: 'The urge to move is the stress response, not a plan. Slow breathing with a long exhale damps it. After 20 minutes your dark-adapted eyes show the sky gap, tree trunks and the pale sack in your pack — enough to work by hand, not enough to travel.' },
        { id: 'feel', text: 'Shuffle forward with hands out, feeling for the path with your feet.', effect: { add: { minutes: 30, injury: 15, lost: 10, energy: -10 } }, next: 'slope', quality: 0, feedback: 'Without light you cannot see holes, trunks or edges, and you have no reference for direction. You bark both shins and the ground starts to tilt.' },
      ],
    },
    {
      id: 'slope',
      title: 'Steep ground',
      text: 'The ground tilts sharply. Your foot skids on wet leaves and you land hard on your hip, grabbing a sapling. The stream is loud below — you cannot tell whether there is a drop between you and it.',
      options: [
        { id: 'back', text: 'Stop. Crawl back up the way you came to the last flat ground and stop there for good.', effect: { add: { minutes: 20, energy: -5, injury: 5, morale: -5, lost: -5 } }, next: 'stopped', quality: 2, feedback: 'Late, but right. Reversing to known, flatter ground is the reversible choice; continuing down is not. Most serious night injuries happen on exactly this kind of slope.' },
        { id: 'down', text: 'Keep descending carefully toward the stream — it must lead somewhere.', effect: { add: { minutes: 40, injury: 55, energy: -20, warmth: -20, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'The slope steepens into a wet bank above the stream. In the dark you step onto nothing.' },
      ],
    },
    {
      id: 'stopped',
      title: 'Taking stock',
      text: 'You sit on the pad and list what you have: clothes, water, chocolate, whistle, lighter, knife, first-aid kit, the orange sack. The phone gets one GPS fix: you are about **300 m west** of the marked trail, on a forested slope. There is one bar of signal, on and off.',
      options: [
        { id: 'call', text: 'Call the emergency number: coordinates, what happened, your kit, your battery level. Agree when you will next switch on, then airplane mode.', effect: { add: { minutes: 15, battery: -8, rescue: 40, morale: 15 }, flags: ['known', 'sar'] }, next: 'plan', quality: 2, feedback: 'Lost at night with a failed light is a legitimate reason to call — rescue teams consistently say they would rather come out early than late. Giving coordinates turns an enormous search area into a point. You will almost certainly be told to stay put, stay warm and keep the phone for contact, which is exactly the right plan.' },
        { id: 'text', text: 'Text your flatmate your coordinates and "lost, OK, staying warm, update at 20:00", then airplane mode.', effect: { add: { minutes: 5, battery: -4, rescue: 25, morale: 10 }, flags: ['known'] }, next: 'plan', quality: 1, feedback: 'Good — someone now knows exactly where you are, and SMS gets through when calls fail. But the information reaches rescuers second-hand and later: your flatmate has to decide to call, and relay coordinates correctly.' },
        { id: 'none', text: 'Save every percent of battery — you will sort this out yourself.', effect: { add: { minutes: 2 } }, next: 'plan', quality: 0, feedback: 'The cheapest high-value action of the night was a 30-second message with coordinates. Now the only information anyone has is "the hills", and your flatmate will not worry until well after 19:00.' },
      ],
    },
    {
      id: 'plan',
      title: 'Stay or move in the dark?',
      text: 'The trail is roughly 300 m east — across wind-thrown trunks, boulders and roots you cannot see. The crescent Moon is almost down. It is 3 °C and falling. You are dry apart from a little sweat, and there is no wind.',
      options: [
        { id: 'stay', text: 'Commit to staying: choose the best spot within 50 m and build a bivouac while you can still work.', effect: { add: { minutes: 5, morale: 5 } }, next: 'site', quality: 2, feedback: 'At night the risks of moving — falls, going further off track, sweating into your insulation — outweigh the risk of a cold but calm, dry 0 °C night with the clothing and materials you have. Staying also keeps you inside any search area already defined by your last message.' },
        { id: 'attempt', text: 'One bounded attempt: 20 minutes on an easterly line using the phone compass, then stop wherever you are.', effect: { add: { minutes: 25, battery: -10, energy: -8, lost: -5 } }, next: 'attempt', quality: 1, feedback: 'A trigger and a time limit make this far better than open-ended wandering. The problem is the terrain: 300 m of windthrow in the dark is not a 5-minute walk, and every minute of phone-as-torch spends your lifeline.' },
        { id: 'stars', text: 'Find Polaris from the Plough and walk north — the valley road is about 3 km north.', effect: { add: { minutes: 50, energy: -15, lost: 20, injury: 15, warmth: -5, morale: -15, battery: -5 } }, next: 'site', quality: 0, feedback: 'Polaris gives true north to within about a degree — but direction was never your problem. Footing, obstacles and the lack of light are. After 50 minutes of falling over trunks you are in a dense young plantation, scratched, sweaty and further from the position you reported. You stop because you have to.' },
      ],
    },
    {
      id: 'attempt',
      title: 'Twenty minutes, sixty metres',
      text: 'In 20 minutes of climbing over trunks by phone light you have covered perhaps 60 m. Your shin is bleeding a little. No trail.',
      options: [
        { id: 'honour', text: 'Stop, as agreed. This is where you spend the night.', effect: { add: { minutes: 5, morale: 5 } }, next: 'site', quality: 2, feedback: 'Honouring a trigger you set in calmer moments is how you beat plan-continuation bias. Note the travel rate: about 3 m per minute. At night, the map distance is almost irrelevant — the ground decides.' },
        { id: 'more', text: 'It must be close now — keep going.', effect: { add: { minutes: 40, battery: -12, injury: 15, energy: -10, lost: 10, morale: -10 } }, next: 'site', quality: 0, feedback: 'Forty more minutes, a fall onto a branch stub, and still no trail. You finally stop, exhausted and further from the point you reported — with less battery and less energy for the night.' },
      ],
    },
    {
      id: 'site',
      title: 'Where to spend the night',
      text: 'By brief phone light you see three possibilities within 50 m: (1) a flat, mossy hollow at the foot of the slope, right beside the stream; (2) a slight rise among big living spruces, with a gap in the canopy above; (3) the top of a rock outcrop, open to the air, with a clear view down the valley.',
      options: [
        { id: 'rise', text: 'The slight rise under living spruces, next to the canopy gap.', effect: { add: { minutes: 10 } }, next: 'bivouac', quality: 2, feedback: 'On clear, calm nights cold air drains downhill and pools in hollows; a rise sits above that frost pocket. Living trees block radiation to the clear sky and there are no dead limbs overhead. The canopy gap lets searchers’ lights — and aircraft sensors — see you.' },
        { id: 'hollow', text: 'The mossy hollow by the stream — flat, soft, and water on tap.', effect: { add: { minutes: 10, warmth: -10 }, flags: ['coldsite'] }, next: 'bivouac', quality: 0, feedback: 'Soft and convenient, but it is the coldest place on the hillside tonight (a cold-air pool), the moss is wet, and the stream’s roar will mask whistles and voices.' },
        { id: 'outcrop', text: 'The rock outcrop — the most visible spot around.', effect: { add: { minutes: 10, warmth: -5, rescue: 5 } }, next: 'bivouac', quality: 1, feedback: 'Visibility is a real asset, but bare rock conducts heat away and any breeze will find you. You can put signals on the outcrop and sleep 20 m back under the trees.' },
      ],
    },
    {
      id: 'bivouac',
      title: 'Improvised bivouac',
      text: 'You have the orange sack, the sit pad, your clothes, and whatever the forest floor can give you. The phone is your only light.',
      options: [
        { id: 'bed', text: 'Rake together a thick bed of dry needles, bracken and leaves by feel — a forearm deep — then sit on the pad inside the orange sack, pack over your feet, hood and hat on.', effect: { set: { minutes: 255 }, add: { energy: -8, warmth: 15, morale: 10, battery: -3 }, flags: ['bed'] }, next: 'night', quality: 2, feedback: 'The ground is your biggest heat thief when you stop: conduction into cold soil. A thick, dry, compressible bed plus the pad fixes that; the sack stops the air around you moving and sheds dew. Sitting curled keeps your surface area small. Forty minutes of work buys a survivable night.' },
        { id: 'fire', text: 'Light a small fire on bare soil beside a boulder and sit next to it all night.', effect: { set: { minutes: 255 }, add: { energy: -15, warmth: 10, morale: 15, battery: -6 }, flags: ['fire'] }, next: 'night', quality: 1, feedback: 'A fire lifts morale and helps searchers — but collecting enough wood by phone light is slow and risky, a fire needs feeding every few minutes all night, and you still lose heat into the ground behind you. Check local law: many forests ban open fires; in a genuine emergency protecting life comes first, but that does not remove your responsibility to keep it small, attended and fully out.' },
        { id: 'walk', text: 'Skip the shelter — keep moving in a small circle all night to stay warm.', effect: { set: { minutes: 255 }, add: { energy: -20, warmth: -10, morale: -10 } }, next: 'night', quality: 0, feedback: 'Movement warms you only while you have fuel for it, and it makes you sweat into your only insulation. By midnight you are exhausted, damp and cold — the pattern behind many night-time hypothermia cases.' },
      ],
    },
    {
      id: 'night',
      title: '22:30 — The cold hours',
      text: 'It is 0 °C. The stars are sharp. Branches crack in the dark and your imagination fills the gaps. You are shivering on and off, and the hours feel endless.',
      options: [
        { id: 'manage-known', requiresFlag: 'known', text: 'Manage the night: slow breathing and calm self-talk, half the chocolate, sips of water, pee when you need to, isometric clenches when shivering; phone on only at the agreed time.', effect: { set: { minutes: 325 }, add: { warmth: -5, morale: 10, energy: -5, battery: -3, water: -150 } }, next: 'lights', quality: 2, feedback: 'Structure beats fear: small tasks, a schedule and honest self-talk ("I am cold, not in danger; help knows where I am"). Eating gives your shivering muscles fuel; peeing avoids warming a litre of urine. At your 23:30 check the phone buzzes: a team is on its way up the trail.' },
        { id: 'manage-alone', hiddenIfFlag: 'known', text: 'Manage the night: slow breathing and calm self-talk, half the chocolate, sips of water, pee when you need to, isometric clenches when shivering; phone off until dawn.', effect: { set: { minutes: 755 }, add: { warmth: -15, morale: -5, energy: -15, water: -300 } }, next: 'dawn', quality: 2, feedback: 'Structure beats fear, and you get through the night in control. But because nobody knows where you are, no one comes: the search that began after your flatmate called the police at 21:00 is working through "the hills" by road and trail.' },
        { id: 'walkout', text: 'You cannot stand it any more — walk out now by phone light.', effect: { add: { minutes: 120, energy: -30, warmth: -25, injury: 45, lost: 20, morale: -30, battery: -20 } }, next: 'end-critical', quality: 0, feedback: 'Cold, tired, anxious and in the dark: every factor that causes falls and poor decisions is at its peak. The discomfort was real; the danger was in moving.' },
      ],
    },
    {
      id: 'lights',
      title: '23:40 — Lights on the hillside',
      text: 'Through the trees you see torch beams moving along the trail above — maybe 300 m away. Someone is shouting a name. Yours.',
      options: [
        { id: 'signal', hiddenIfFlag: 'coldsite', text: 'Three long whistle blasts, then flash the phone torch toward them in threes. Stay where you are and keep answering.', effect: { add: { minutes: 35, rescue: 50, morale: 30 } }, next: 'end-rescued', quality: 2, feedback: 'A whistle carries far further than a voice and costs nothing. Staying put lets the team walk to a fixed point instead of chasing a moving one.' },
        { id: 'signal-hollow', requiresFlag: 'coldsite', text: 'Three long whistle blasts, then flash the phone torch toward them in threes. Stay where you are and keep answering.', effect: { set: { minutes: 755 }, add: { warmth: -15, energy: -10, morale: -20, battery: -10 } }, next: 'dawn', quality: 2, feedback: 'The right action — but down in the hollow the stream drowns your whistle and the bank hides your light. The beams move on along the trail. The team resumes at first light. Your campsite choice has just cost you a night.' },
        { id: 'run', text: 'Scramble toward the lights as fast as you can.', effect: { add: { minutes: 30, injury: 45, morale: -10, energy: -15 } }, next: 'end-carried', quality: 0, feedback: 'Rescue is minutes away and you turn a cold night into an injury. Over windthrow in the dark you catch a foot between two trunks and feel your ankle go.' },
      ],
    },
    {
      id: 'dawn',
      title: '06:50 — First light',
      text: 'Grey light seeps through the spruces. Frost covers the sack. You are stiff, but you can see the ground — and the trunks you were fighting last night.',
      options: [
        { id: 'walk-fire', requiresFlag: 'fire', text: 'Drown the fire, stir the ashes, drown again until cold to the back of your hand. Then take one GPS fix, walk the 300 m east to the trail, and message as soon as you have signal.', effect: { add: { minutes: 150, energy: -15, warmth: 15, morale: 25, lost: -50, battery: -5, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'A fire is not out until it is cold. With daylight the 300 m that was a trap last night is ten careful minutes, and a marked trail leads down.' },
        { id: 'walk', hiddenIfFlag: 'fire', text: 'Eat the last chocolate, warm up with gentle movement, take one GPS fix, walk the 300 m east to the trail, and message as soon as you have signal.', effect: { add: { minutes: 150, energy: -15, warmth: 15, morale: 25, lost: -50, battery: -5, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Daylight changes the stay-or-move balance: the terrain is visible, the trail is close and certain, and you can tell searchers you are walking out. Warming up first avoids stumbling on stiff, cold legs.' },
        { id: 'wait', text: 'Stay put and signal: whistle in threes every few minutes, the orange sack spread in the canopy gap.', effect: { add: { minutes: 230, warmth: -5, energy: -10, rescue: 30, morale: -5 } }, next: 'end-survived', quality: 1, feedback: 'Safe and visible, and not wrong — but with the trail only 300 m away in daylight, a short, certain self-rescue was available and would have ended the search hours sooner.' },
      ],
    },
    {
      id: 'end-rescued',
      title: 'Walked out at midnight',
      text: 'Two rescuers reach you at 00:15, give you a hot drink and a spare headlamp, and walk you down the trail. You are at the road by 02:00.',
      options: [],
      end: { outcome: 'rescued', summary: 'You **stopped before the dark forced you to**, **sent your position**, chose a **site above the cold-air pool** with a **thick ground bed**, managed fear with structure, and **stayed put and signaled** when help arrived. A short, uneventful rescue.' },
    },
    {
      id: 'end-carried',
      title: 'Carried out',
      text: 'The team reaches you ten minutes later with a badly sprained ankle. The walk-out becomes a stretcher carry and you reach the road at 05:30.',
      options: [],
      end: { outcome: 'rescued', summary: 'Most of the night went well — but **moving toward rescuers in the dark** turned a cold night into an injury and a six-person carry. When help is coming to a known point, the point should stay still and make noise.' },
    },
    {
      id: 'end-selfrescue',
      title: 'Down by mid-morning',
      text: 'You reach the trail in twelve minutes and the road by 09:20, cold and hungry, and message your flatmate and the police.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **stopped instead of travelling in the dark**, built **insulation from the ground**, and waited for **daylight to make movement safe**. Night navigation failed; your judgment about *when not to navigate* did not.' },
    },
    {
      id: 'end-survived',
      title: 'Found at 10:40',
      text: 'A search dog finds you in the canopy gap at 10:40. You are cold and embarrassed, but unhurt.',
      options: [],
      end: { outcome: 'survived', summary: 'You got through a freezing night intact. The costly decisions were the ones that **kept your position unknown or unheard** — a missing message or a camp in the noisy frost hollow — and then **waiting when a short, certain daylight walk was available**.' },
    },
    {
      id: 'end-critical',
      title: 'A night that went wrong',
      text: 'You fall on steep ground in the dark and cannot bear weight. Wet and shivering, you use the last of your battery to call. Rescuers reach you at 04:30, hypothermic and injured.',
      options: [],
      end: { outcome: 'critical', summary: 'The turning point was **moving in darkness** — on a failing light, downhill toward water, or out of your camp in the small hours. The same kit, used while sitting still and insulated, would have produced a cold night and nothing worse.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 8 — Unexpected overnight stay
// ---------------------------------------------------------------------------------------------

const cap8Scenario: Scenario = {
  id: 'cap-8-scenario',
  title: 'Capstone 8 — Unexpected overnight stay',
  stage: 19,
  environment: 'Temperate coastal hills (heather moor above birch woods), late September, mild and misty',
  concepts: ['integration', 'daylight', 'clothing', 'insulation', 'ground-insulation', 'heat-balance', 'fire-safety', 'trip-plan'],
  intro: `**Setting:** heather-covered coastal hills in late September, inside a national park. It is mild — 10 °C now, about 6 °C overnight — but the cloud is down to the tops, the air is saturated, and a fine drizzle comes and goes. Light breeze from the sea. **Sunset 19:05.** Park byelaws prohibit open fires outside designated sites; much of the moor is deep peat.

**You:** a 16 km day loop that a washed-out bridge turned into 20 km. You are alone, tired but uninjured. Your partner has your written route and your "back by 20:00, call police at 21:00 if you haven't heard from me" plan.

**Kit (a light day pack):** showerproof softshell (not fully waterproof), thin fleece, a spare dry merino long-sleeve top, cap, buff, thin gloves, 500 ml water, half a sandwich and 100 g of nuts, a good headlamp, phone at **55 %** (signal only on the high ground), a small knife, a lighter, two large rubbish sacks, a foil emergency blanket. You are wearing a synthetic T-shirt that is damp with sweat.

It is **18:30**. You are on a broad shoulder, 7 km from the car. The route down is a steep, eroded gully path of wet rock and loose stones. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '18:30',
  initial: { minutes: 0, water: 500, energy: 45, warmth: 70, morale: 55, battery: 55, injury: 0, rescue: 20, lost: 10, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '18:30 — Behind schedule',
      text: 'Thirty-five minutes of daylight, less in the mist. Below you the gully path drops 300 m in steep, wet steps. An alternative is to stay high on the ridge and loop round to a forestry track — about 4 km longer, but easy walking.',
      options: [
        { id: 'stop', text: 'STOP. Accept that the gully in the dark is the biggest risk you face, and use the remaining light to prepare a night out here.', effect: { add: { minutes: 10, morale: 5 } }, next: 'call', quality: 2, feedback: 'An honest daylight budget: 35 minutes will not get you down 300 m of wet gully, and the second half would be by headlamp on the most dangerous ground of the day. A mild, windless-ish night with spare clothes is uncomfortable, not deadly — a fall in the gully could be.' },
        { id: 'gully', text: 'Go for it — descend the gully quickly and finish by headlamp.', effect: { add: { minutes: 45, energy: -15, injury: 15, warmth: -5 } }, next: 'gully', quality: 0, feedback: 'Summit fever in reverse: the car pulls you downhill. Hurrying on wet rock with tired legs and fading light is exactly how most walking injuries happen.' },
        { id: 'track', text: 'Take the long way: stay on the ridge to the forestry track and walk out by headlamp.', effect: { add: { minutes: 150, energy: -25, warmth: -10, water: -300, battery: -3 } }, next: 'track', quality: 1, feedback: 'A defensible choice — easier ground in the dark is a real risk reduction. But it is 11 km on tired legs in drizzle, you are sweating into your only warm layers, and you are committing to it without telling anyone.' },
      ],
    },
    {
      id: 'gully',
      title: 'The gully in the dark',
      text: 'Halfway down, in headlamp light, a block shifts under your boot. You sit down hard on your hip, winded. The steepest section is still below you.',
      options: [
        { id: 'back', text: 'Stop. Climb carefully back up to the flat shoulder and deal with the night there.', effect: { add: { minutes: 40, energy: -15, morale: -5 } }, next: 'call', quality: 2, feedback: 'Reversing costs 40 minutes and pride; it removes the steepest ground from your night. Recognising a mistake and undoing it is a skill.' },
        { id: 'down', text: 'Keep going — you are halfway already.', effect: { add: { minutes: 60, injury: 55, energy: -20, warmth: -20, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'Sunk-cost thinking. On the next wet step your foot shoots out and your lower leg twists under you.' },
      ],
    },
    {
      id: 'track',
      title: 'The forestry track by headlamp',
      text: '21:00. You reach the forestry track, soaked with sweat and drizzle and getting chilled whenever you slow down. Your phone shows one bar on this open section. The car is 4 km away on good track.',
      options: [
        { id: 'msg', text: 'Put the dry merino on under the shell, send your partner "late but safe, on forestry track, car by 22:30", then walk on at a steady, non-sweating pace.', effect: { add: { minutes: 75, battery: -5, warmth: 10, morale: 20, energy: -10, rescue: 30 } }, next: 'end-late', quality: 2, feedback: 'Your partner’s plan says police at 21:00 — a two-line message stops a call-out. Dry base layer plus shell turns a chilling walk into a comfortable one.' },
        { id: 'rush', text: 'Don’t stop for anything — the quicker you’re at the car the better.', effect: { add: { minutes: 60, energy: -15, warmth: -10, morale: -5 } }, next: 'end-late', quality: 0, feedback: 'You get there — but damp and chilled, and your partner has already phoned the police as agreed. A rescue team is being paged for someone who is fine.' },
      ],
    },
    {
      id: 'call',
      title: 'Telling someone',
      text: 'On the shoulder the phone finds one bar. The mist is thickening and the light is going.',
      options: [
        { id: 'plan', text: 'Call your partner: your exact position, "safe, uninjured, staying out tonight rather than risk the gully, walking out at first light around 07:00. If you haven’t heard from me by 10:00, call the police." Then airplane mode.', effect: { add: { minutes: 10, battery: -6, rescue: 30, morale: 15 }, flags: ['msg'] }, next: 'site', quality: 2, feedback: 'This is what a trip plan is for: update it. A clear position, a clear plan and a clear new alarm time mean nobody launches a night search for a person who is safe — and if something goes wrong, the search starts in the right place.' },
        { id: 'sos', text: 'Call the emergency number and ask to be collected.', effect: { add: { minutes: 15, battery: -10, rescue: 40, morale: 10 }, flags: ['msg'] }, next: 'site', quality: 1, feedback: 'Never hesitate to call if you are genuinely unsafe. Here, though, you are uninjured, have a plan and can manage a mild night; the controller takes your position, tells you to stay put, and asks you to call back if anything changes. Your partner still needs telling.' },
        { id: 'skip', text: 'Don’t bother — you’ll be home in the morning before anyone really worries.', effect: { add: { minutes: 2 } , flags: ['nomsg'] }, next: 'site', quality: 0, feedback: 'Your partner is holding a plan that says "call police at 21:00". They will — and volunteers will spend the night searching a hill for someone who is fine, because a one-minute call was not made.' },
      ],
    },
    {
      id: 'site',
      title: 'Where to spend the night',
      text: 'In the last light you look around: (1) the crest of the shoulder, with a view but the breeze straight off the sea; (2) a hollow of deep, dripping heather beside a small burn at the foot of the slope; (3) a hump of dry-ish heather in the lee of a big boulder, 20 m below the crest on the sheltered side.',
      options: [
        { id: 'lee', text: 'The heather hump in the lee of the boulder.', effect: { add: { minutes: 10 } }, next: 'clothes', quality: 2, feedback: 'Out of the wind, slightly raised so rain drains away, not in the wettest ground, and close enough to the crest to reach phone signal. Wind is the biggest multiplier of heat loss when you are damp.' },
        { id: 'crest', text: 'The crest — searchers will see you and the view is great.', effect: { add: { minutes: 5, warmth: -10, rescue: 5 } }, next: 'clothes', quality: 1, feedback: 'Visible, yes, and there is signal — but a damp person in a steady sea breeze all night loses heat by convection and evaporation for twelve hours.' },
        { id: 'burn', text: 'The hollow by the burn — lower, and there’s water.', effect: { add: { minutes: 15, warmth: -10, morale: -5 } }, next: 'clothes', quality: 0, feedback: 'The heather there is soaking, the ground is boggy, and cold air settles in hollows. Water is 100 m from the lee site anyway; you do not need to sleep in it.' },
      ],
    },
    {
      id: 'clothes',
      title: 'Damp clothes',
      text: 'You stop moving and within minutes you feel the chill: your T-shirt is damp with sweat, the fleece slightly damp from drizzle. In the pack is the dry merino top.',
      options: [
        { id: 'swap', text: 'Change quickly out of the breeze: damp T-shirt off, dry merino on next to skin, fleece over it, softshell on top; damp T-shirt into a sack so it doesn’t wet anything else.', effect: { add: { minutes: 5, warmth: 15, morale: 10 } }, next: 'shelter', quality: 2, feedback: 'Water conducts heat many times faster than still air; a damp layer against the skin keeps drawing heat all night. Thirty cold seconds of changing buys a drier microclimate for twelve hours. Keep the spare dry layer for exactly this moment — the stop.' },
        { id: 'over', text: 'Pull every layer on over the damp T-shirt to trap heat.', effect: { add: { minutes: 3, warmth: 5 }, flags: ['damp'] }, next: 'shelter', quality: 1, feedback: 'Better than nothing — insulation over a damp layer will slowly push some moisture outward. But you have a dry layer in the pack and you are choosing to sleep in a wet one.' },
        { id: 'air', text: 'Take the softshell off for a while so the damp T-shirt can air-dry in the breeze.', effect: { add: { minutes: 20, warmth: -15, morale: -5 }, flags: ['damp'] }, next: 'shelter', quality: 0, feedback: 'Drying a garment on your body in a breeze means evaporation is taking its heat from *you*. You lose warmth fast and the shirt is still damp.' },
      ],
    },
    {
      id: 'shelter',
      title: 'Improvised bivouac',
      text: 'Materials: two big rubbish sacks, the foil blanket, your pack, and a hillside of heather and old bracken.',
      options: [
        { id: 'nest', text: 'Pull dead heather and bracken into a bed a forearm thick; sit on the pack on top of it. Legs in one sack; cut a face hole in the other and wear it over your head and shoulders as a bivy; foil blanket inside the outer sack, not against your skin.', effect: { add: { minutes: 50, energy: -8, warmth: 15, morale: 10 } }, next: 'fire', quality: 2, feedback: 'Ground first (conduction), then a windproof, waterproof outer layer (convection and wetting), then the foil for a little extra radiant reflection. Sitting on the pack keeps your core off the ground. Taking dead material and scattering it in the morning keeps your impact small.' },
        { id: 'foil', text: 'Lie on the ground wrapped tightly in the foil blanket.', effect: { add: { minutes: 10, warmth: -10, morale: -5 }, flags: ['nobed'] }, next: 'fire', quality: 0, feedback: 'The foil does little against conduction into wet ground, which is where most of your heat goes. It is also fragile and traps condensation against you. Insulate underneath first.' },
        { id: 'leanto', text: 'Spend the last light cutting birch branches to build a proper lean-to.', effect: { add: { minutes: 80, energy: -20, warmth: -5, morale: -5 }, flags: ['nobed'] }, next: 'fire', quality: 1, feedback: 'A lot of work and damage to living trees for a structure that barely sheds fine drizzle — and you ran out of light before building the bed that actually mattered. Sacks already give you a roof.' },
      ],
    },
    {
      id: 'fire',
      title: 'Fire?',
      text: 'You have a lighter. The park bans open fires outside designated sites, the moor under you is deep peat, and it is a mild night. A fire would be a comfort.',
      options: [
        { id: 'nofire', text: 'No fire. Your heat budget works without one. Trigger: if you start shivering uncontrollably or lose finger dexterity, a small fire on bare rock or gravel becomes a genuine emergency measure — and you’ll report it.', effect: { set: { minutes: 450 }, add: { morale: 5, energy: -5, warmth: -10 } }, next: 'night', quality: 2, feedback: 'Fire is a tool, not a ritual. Tonight insulation, dryness and food do the job. Peat fires can smoulder underground for days and re-emerge far away; the law exists for reasons that apply to you too. Having a written trigger means you don’t have to relitigate the decision at 02:00.' },
        { id: 'bigfire', text: 'Light a good-sized fire anyway — it’s a miserable night and you need the morale.', effect: { set: { minutes: 450 }, add: { morale: 10, energy: -12, warmth: 0, battery: -2 }, flags: ['fire'] }, next: 'night', quality: 0, feedback: 'Illegal here, and dangerous on peat. Gathering fuel in the dark and mist costs energy, the wet heather smokes more than it burns, and you now have a fire to watch all night on ground that can burn underneath you.' },
        { id: 'eat', text: 'No fire; eat most of the nuts now and drink half your water before settling in.', effect: { set: { minutes: 450 }, add: { energy: 10, water: -250, warmth: -5 } }, next: 'night', quality: 1, feedback: 'The right call on fire, and fuel before a cold night is sensible. Holding some food back for the coldest hours before dawn is even better — digestion and shivering both need fuel then.' },
      ],
    },
    {
      id: 'night',
      title: '02:00 — The coldest part of the night',
      text: 'Mist drips off the sacks. You wake shivering; your feet are cold and it is hard to think of anything else. The hours to dawn feel impossible.',
      options: [
        { id: 'manage', hiddenIfFlag: 'nomsg', text: 'Eat, sip water, do slow isometric clenches until the shivering eases, pull the buff over your face, loosen your boot laces, re-tuck the sack. Doze in short bursts.', effect: { set: { minutes: 740 }, add: { warmth: -5, energy: -10, morale: 10, water: -150 } }, next: 'dawn', quality: 2, feedback: 'Shivering is your furnace — feed it. Tight laces restrict blood flow to cold feet. Short dozes are normal on a cold bivouac; you are uncomfortable, not in danger, and daylight is coming.' },
        { id: 'manage-alarm', requiresFlag: 'nomsg', text: 'Eat, sip water, do slow isometric clenches until the shivering eases, pull the buff over your face, loosen your boot laces, re-tuck the sack. Doze in short bursts.', effect: { set: { minutes: 490 }, add: { warmth: -3, energy: -5, morale: 5, water: -100 } }, next: 'callout', quality: 2, feedback: 'Good cold-night management. But at 02:40 you hear voices and see torches below: the police called out mountain rescue at 21:00, as your partner’s plan said.' },
        { id: 'walk', text: 'This is unbearable — pack up and go down the gully by headlamp.', effect: { add: { minutes: 90, injury: 55, energy: -25, warmth: -20, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'The discomfort is at its worst and your judgment at its lowest — sleep deprivation and cold impair decisions measurably. The gully is no safer at 02:00 than it was at 19:00.' },
        { id: 'scroll', hiddenIfFlag: 'nomsg', text: 'Distract yourself with the phone for an hour.', effect: { set: { minutes: 740 }, add: { battery: -35, warmth: -10, morale: 5, energy: -10 } }, next: 'dawn', quality: 0, feedback: 'A little distraction helps morale, but a cold battery drains fast and the phone is your only lifeline if tomorrow goes wrong. You also stop managing your warmth while you scroll.' },
      ],
    },
    {
      id: 'callout',
      title: '02:40 — Torches below',
      text: 'Headtorches are zig-zagging up the gully. A voice calls your name.',
      options: [
        { id: 'signal', text: 'Three long whistle blasts and wave the headlamp; stay put and keep answering until they reach you.', effect: { add: { minutes: 40, rescue: 50, morale: 10 } }, next: 'end-rescued', quality: 2, feedback: 'Signal clearly and let the team come to a fixed point. It is not your fault they are out, but it was your message that could have prevented it.' },
        { id: 'quiet', text: 'Stay quiet — they must be looking for someone else.', effect: { add: { minutes: 150, rescue: 30, morale: -15, warmth: -10 } }, next: 'end-rescued', quality: 0, feedback: 'Assume any search at night on your route is for you. Staying silent makes volunteers search for two more hours in the mist.' },
      ],
    },
    {
      id: 'dawn',
      title: '06:50 — Grey dawn',
      text: 'The mist is lifting off the shoulder. Everything is wet, but you can see the gully path clearly.',
      options: [
        { id: 'out', hiddenIfFlag: 'damp', text: 'Message your partner, eat what’s left, stretch and warm up, scatter the heather bed, pack everything out, and descend the gully slowly.', effect: { add: { minutes: 150, energy: -10, warmth: 15, morale: 25, battery: -5, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Daylight turns the gully back into an ordinary path. Warming up before a steep descent matters: stiff, cold muscles are clumsy. Leave no trace of the night.' },
        { id: 'out-damp', requiresFlag: 'damp', hiddenIfFlag: 'fire', text: 'You are shaking and clumsy after a night in damp clothes. Change into the dry merino now, eat everything, walk the flat shoulder until the shivering stops, then message and descend slowly.', effect: { add: { minutes: 180, energy: -12, warmth: 20, morale: 20, battery: -5, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'The damp layer cost you a hard night, and now it costs you time — but you recognise mild hypothermia signs (shivering, fumbling) and fix them before the steepest ground. Better late than on the gully.' },
        { id: 'fire-out', requiresFlag: 'fire', text: 'The fire scar is still smoking — the peat underneath has caught. Carry water from the burn in your bottle until nothing smokes or feels warm, then report it to the park as you walk out.', effect: { add: { minutes: 200, energy: -20, water: 0, morale: -5, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Peat fires creep underground. Dealing with it and reporting it is the responsible thing — and it shows why the byelaw exists.' },
        { id: 'rush', text: 'Get down fast while the path is visible — you want your bed.', effect: { add: { minutes: 70, injury: 35, energy: -20, morale: -10 } }, next: 'end-survived', quality: 0, feedback: 'Cold, stiff and hurried on wet rock: you slip on the third step and wrench your knee.' },
      ],
    },
    {
      id: 'end-selfrescue',
      title: 'Home for breakfast',
      text: 'You reach the car mid-morning, tired and damp, and message your partner.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **refused the gully in the dark**, **updated your trip plan**, chose a **sheltered lee site**, **changed into dry clothes** and **insulated from the ground**, and handled the fire question on facts and law, not habit. An unplanned night became an uneventful one.' },
    },
    {
      id: 'end-late',
      title: 'At the car late at night',
      text: 'You reach the car around 22:30 along the forestry track.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'Choosing **easier ground over the dangerous shortcut** worked. What mattered next was **dry layers at the stop** and **telling your partner before their alarm time** — skip either and a safe walk-out still leaves someone else searching or you chilled.' },
    },
    {
      id: 'end-rescued',
      title: 'Walked down by the team',
      text: 'The rescue team walks you down at first light, cold but unhurt.',
      options: [],
      end: { outcome: 'rescued', summary: 'Your night was well managed, but **not telling your partner** turned an uncomfortable bivouac into a full mountain-rescue call-out. The trip plan worked exactly as designed — you didn’t update it.' },
    },
    {
      id: 'end-survived',
      title: 'Limping out',
      text: 'You hobble the rest of the way down on a painful knee, reaching the car at midday.',
      options: [],
      end: { outcome: 'survived', summary: 'You got through the night — then **hurried a steep descent on cold, stiff legs**. Warming up and descending slowly would have cost twenty minutes and saved a knee.' },
    },
    {
      id: 'end-critical',
      title: 'Injured in the gully',
      text: 'You cannot bear weight. You call for help; a mountain-rescue team reaches you three hours later and stretchers you down.',
      options: [],
      end: { outcome: 'critical', summary: 'The decisive error was **descending steep, wet ground in the dark** — early out of summit fever or late out of misery. A mild night in spare clothes was always the lower-risk option.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 9 — Navigation failure
// ---------------------------------------------------------------------------------------------

const cap9Scenario: Scenario = {
  id: 'cap-9-scenario',
  title: 'Capstone 9 — Navigation failure',
  stage: 19,
  environment: 'High moorland plateau (~900 m), May, thick hill fog',
  concepts: ['integration', 'stop', 'decisions', 'reversibility', 'human-factors', 'stay-or-move', 'wet-wind', 'daylight'],
  intro: `**Setting:** a broad, featureless moorland plateau at about 900 m in May. Hill fog has come down: **visibility 30 m**. A steady westerly breeze of about 20 km/h, 7 °C, occasional drizzle. The forecast said the fog would persist into the evening. **Sunset 21:15.**

**The map (1:25,000), in your head and in your hand:** a small lochan (tarn) in the middle of the plateau, where you ate lunch from 12:30 to 12:55. About **1 km north** of it, the plateau ends in a line of **crags** running east–west. About **1.2 km south**, a long drystone **wall** runs east–west for 3 km; your descent path crosses it at a **gate directly south of the lochan**. On the east side a **stream** flows south off the plateau, passes under the wall 1.5 km east of the gate, then drops into a ravine. The plateau tilts gently south.

**You:** alone, experienced enough to have planned the route by compass. Your B&B host has your route card and expects you by 18:00.

**Kit:** map, watch, pencil, 750 ml water, lunch leftovers and two bars, waterproofs, a warm layer, hat and gloves, whistle, first-aid kit, a plastic survival bag, a headtorch. **No compass** — you realise it’s gone (left on the lunch rock?). **No phone** — its old battery died in the cold at noon.

It is **13:10**. You left the lochan 15 minutes ago, heading roughly north-east toward the summit cairn. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '13:10',
  initial: { minutes: 0, water: 750, energy: 70, warmth: 75, morale: 50, battery: 0, injury: 0, rescue: 10, lost: 60, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '13:10 — Fog, and no compass',
      text: 'Grey on every side. Heather, tussocks, the odd boulder, nothing more than 30 m away. You pat every pocket twice: no compass. The summit cairn is somewhere ahead, maybe.',
      options: [
        { id: 'stop', text: 'Stop. Get the map out, note the time, and work out what you actually know before taking another step.', effect: { add: { minutes: 10, morale: 5, lost: -5 } }, next: 'think', quality: 2, feedback: 'Every minute you walk without a method adds error you cannot measure. Stopping freezes the problem: you left a known point (the lochan) 15 minutes ago on a rough bearing — that is a small, bounded uncertainty, and it is still small.' },
        { id: 'search', text: 'Retrace your steps to the lunch rock to find the compass.', effect: { add: { minutes: 35, energy: -5, lost: -30 } }, next: 'search', quality: 1, feedback: 'Returning to your last known point is a classic relocation move, and a lochan is a big, unmistakable feature. Retracing 15 minutes over moorland in fog is not guaranteed — but here the lochan is big enough to walk into.' },
        { id: 'carry', text: 'Carry on toward the summit — you know roughly which way it is.', effect: { add: { minutes: 35, energy: -8, lost: 20 } }, next: 'edge', quality: 0, feedback: 'Without a reference, people in fog drift — usually in gentle curves — and feel sure they are walking straight. After 35 minutes you have no idea how far off your line you are.' },
      ],
    },
    {
      id: 'search',
      title: 'The lochan',
      text: 'After 20 minutes the ground flattens and dark water appears out of the grey: the lochan. You search the lunch rock and the heather around it for 15 minutes. No compass.',
      options: [
        { id: 'accept', text: 'Stop searching. You are standing on a known point, and that is worth more than the compass. Plan from here.', effect: { add: { minutes: 5, morale: 10, lost: -20 } }, next: 'think', quality: 2, feedback: 'Relocated. Your position is now certain to within 100 m, and the map shows everything you need in relation to this point. The compass is a sunk cost.' },
        { id: 'more', text: 'Keep searching — it has to be here somewhere.', effect: { add: { minutes: 60, energy: -10, warmth: -15, morale: -10 } }, next: 'think', quality: 0, feedback: 'An hour of standing and stooping in wet fog costs warmth and daylight, and the chance of finding a small object in heather falls with every minute. Set a limit before you start a search, not after.' },
      ],
    },
    {
      id: 'think',
      title: 'What do you actually know?',
      text: 'Your last certain point is the lochan — you are either at it, or no more than about 15 minutes’ walk from it. The breeze has blown steadily from the west all day; at lunch it came straight across the lochan from the west shore. The plateau tilts gently south, toward the wall. The wall is 3 km long: hard to miss if you head roughly south. The crags are to the north.',
      options: [
        { id: 'aimoff', text: 'Head south for the wall — but deliberately **aim off** to the west of the gate: keep the breeze on your right cheek and angle slightly into it, check the slope keeps falling gently ahead, and count paces.', effect: { add: { minutes: 5, morale: 10 }, flags: ['side'] }, next: 'southleg', quality: 2, feedback: 'The wall is a **catching feature** — long, unmissable, across your line. Aiming off means that when you hit it you *know* the gate is to your left (east), instead of guessing. Wind is a crude compass and can shift, so you cross-check it against the slope of the ground.' },
        { id: 'stream', text: 'Head east with the breeze on your back until you hit the stream, then follow it as a handrail.', effect: { add: { minutes: 5 } }, next: 'stream', quality: 1, feedback: 'Using a linear feature as a handrail is sound. But the stream is 1.5 km east of your descent, its banks are boggy, and below the wall it drops into a ravine — it is a longer, wetter route with a trap at the end.' },
        { id: 'wait', text: 'Sit tight in the survival bag until the fog lifts.', effect: { add: { minutes: 10, warmth: -5 } }, next: 'wait', quality: 1, feedback: 'Stopping is never the worst option in fog — but the forecast says it will persist, and you have a method available. Waiting without a trigger turns into waiting until dark.' },
        { id: 'downhill', text: 'Walk downhill — downhill always leads off a hill.', effect: { add: { minutes: 30, energy: -8, lost: 10 } }, next: 'edge', quality: 0, feedback: 'On a plateau "downhill" is ambiguous, and the steepest downhill nearby is the crag line. Following the fall line in poor visibility has walked people straight to cliff edges.' },
      ],
    },
    {
      id: 'edge',
      title: 'The ground falls away',
      text: 'The heather ends at a lip of wet rock. Beyond it: grey nothing, and the sound of wind coming up from far below.',
      options: [
        { id: 'back', text: 'Back off 20 m on hands and knees if needed. This must be the northern crag line — the only steep edge on the plateau. Turn your back to it and head south, breeze on your right cheek, counting paces.', effect: { add: { minutes: 15, morale: 10, lost: -25 } }, next: 'southleg', quality: 2, feedback: 'A bad moment turned into a relocation: an edge that only exists in one place on the map tells you where you are. Now you have a line (the crags) and a direction away from it. Note that you have not aimed off, so the wall will be a guess.' },
        { id: 'down', text: 'Look for a gully to scramble down — the valley must be below.', effect: { add: { minutes: 40, injury: 60, energy: -20, warmth: -20, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'Committing to steep, wet ground you cannot see the bottom of is irreversible. A foothold breaks away.' },
      ],
    },
    {
      id: 'southleg',
      title: 'Dead reckoning south',
      text: 'You set off into the grey with the breeze on your right cheek. The wall should be somewhere around 1.2 km ahead — or more, if you started further north.',
      options: [
        { id: 'pace', text: 'Count double-paces (your 100 m on rough moor is about 70), note the start time, and set a limit: no wall by about 1,600 m or 40 minutes, stop and rethink.', effect: { add: { minutes: 5 }, flags: ['pacing'] }, next: 'hags', quality: 2, feedback: 'Dead reckoning: distance from pace count, cross-checked by time at a known speed (about 3 km/h here). A distance limit stops you walking past a feature you somehow missed, or confusing a sheep-fold wall with the big one.' },
        { id: 'hope', text: 'Just walk — the wall is so big you can’t miss it.', effect: { add: { minutes: 2 } }, next: 'hags', quality: 1, feedback: 'You probably can’t miss it — but you won’t know when you *should* have hit it, or whether the first wall you meet is the right one.' },
      ],
    },
    {
      id: 'hags',
      title: 'Peat hags',
      text: 'The ground breaks up into peat hags: channels two metres deep with black, sucking bottoms, winding in every direction. In the channels the wind swirls and your cheek loses the breeze.',
      options: [
        { id: 'skirt', hiddenIfFlag: 'pacing', text: 'Pick your way round the hags, using a boulder or tuft at the edge of visibility as an aiming point on your line, and re-check the breeze on each rise.', effect: { add: { minutes: 45, energy: -10, lost: 5 } }, next: 'wall', quality: 1, feedback: 'Good technique: intermediate aiming points hold a line far better than feel. But without a count you lose track of how far you have come while detouring — when a wall appears, you will have to trust it is the right one.' },
        { id: 'skirt-count', requiresFlag: 'pacing', text: 'Pick your way round the hags, using a boulder or tuft at the edge of visibility as an aiming point on your line, re-checking the breeze on each rise and counting detours left and right.', effect: { add: { minutes: 45, energy: -10, lost: -20 } }, next: 'wall', quality: 2, feedback: 'Intermediate aiming points, cross-checked by wind and slope, plus a running count of detours: you arrive at a wall at about 1,350 m by your count — just where the big wall should be.' },
        { id: 'straight', text: 'Go straight through, jumping the channels.', effect: { add: { minutes: 35, energy: -20, injury: 20, warmth: -10, morale: -10 } }, next: 'wall', quality: 0, feedback: 'Peat hag edges collapse. You land thigh-deep in black water and wrench a knee climbing out — wet, colder, slower.' },
      ],
    },
    {
      id: 'wall',
      title: 'A wall out of the fog',
      text: 'A drystone wall, chest-high, runs left and right into the grey. The descent path crosses it at a gate. Which way?',
      options: [
        { id: 'known', requiresFlag: 'side', text: 'You know which side of the gate you are on — turn along the wall toward it.', effect: { add: { minutes: 20, lost: -40, morale: 15 } }, next: 'gate', quality: 2, feedback: 'This is why you aimed off (or used the stream): the catching feature plus a known side turns a guess into a certainty. Twenty minutes along the wall, the gate appears.' },
        { id: 'guess', hiddenIfFlag: 'side', text: 'Pick east with a limit: 15 minutes along the wall, and if there is no gate, turn round and go 30 minutes west.', effect: { add: { minutes: 50, energy: -8, lost: -30, morale: 5 } }, next: 'gate', quality: 1, feedback: 'A bounded search along a handrail is sound — the wall cannot let you get lost. It cost 30 extra minutes because you did not aim off, but it worked: the gate was to the west.' },
        { id: 'downhill', text: 'Follow the wall whichever way it goes downhill — that must be toward the valley.', effect: { add: { minutes: 120, energy: -20, warmth: -15, lost: 20, morale: -20 } }, next: 'end-survived', quality: 0, feedback: 'Walls follow property lines, not descent routes. This one leads you gently downhill into a vast bog, far from the gate and any path.' },
      ],
    },
    {
      id: 'stream',
      title: 'The stream',
      text: 'After 25 minutes with the breeze at your back you hear water, then find a stream running south in a shallow, boggy valley. According to the map it passes under the wall at a ford, then plunges into a ravine.',
      options: [
        { id: 'handrail', text: 'Follow it downstream, staying on firmer ground 20–30 m above the bank, until you hit the wall; then follow the wall west to the gate.', effect: { add: { minutes: 50, energy: -12, lost: -30, warmth: -5 }, flags: ['side'] }, next: 'wall', quality: 2, feedback: 'A handrail to a catching feature, with a known direction to turn when you get there. Keeping above the bank avoids the worst bog and any undercut edges.' },
        { id: 'ravine', text: 'Stay right beside the water all the way down — it is the surest line, and more sheltered.', effect: { add: { minutes: 70, injury: 50, energy: -20, warmth: -20, morale: -25 } }, next: 'end-critical', quality: 0, feedback: 'Below the wall the stream drops into a ravine of wet, mossy rock. Following water into steep ground in poor visibility is how a navigation problem becomes a rescue.' },
      ],
    },
    {
      id: 'wait',
      title: 'Sitting it out',
      text: 'You sit in the survival bag behind a peat bank, out of the breeze. The fog does not change.',
      options: [
        { id: 'trigger', text: 'Wait an hour with a trigger: if it hasn’t lifted by 15:00, head for the wall, aiming off to the west with the breeze on your right cheek.', effect: { add: { minutes: 70, warmth: -5, morale: 5 }, flags: ['side'] }, next: 'southleg', quality: 2, feedback: 'Waiting with a trigger is a real plan: it gives the weather a chance without letting the afternoon drain away. At 15:00 the fog is unchanged, and you go — with a method.' },
        { id: 'wait', text: 'Stay put until you are found. Blow the whistle in threes every 10 minutes. Your B&B host will raise the alarm after 18:00.', effect: { add: { minutes: 540, warmth: -30, energy: -25, morale: -20, rescue: 40, water: -500 } }, next: 'end-rescued', quality: 1, feedback: 'Staying put is always survivable with the right kit, and the route card means searchers will look in the right area. But it costs a long cold evening and a full call-out when you had the tools to walk out.' },
      ],
    },
    {
      id: 'gate',
      title: 'The gate',
      text: 'A metal gate in the wall, and on the far side a path with small cairns leading south and down into the fog.',
      options: [
        { id: 'path', text: 'Follow the path carefully, confirming each cairn before leaving the last one.', effect: { add: { minutes: 90, energy: -10, lost: -40, morale: 20, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'On a path in fog, “cairn to cairn” is its own navigation technique: never leave a known point until you can see the next.' },
        { id: 'short', text: 'Cut straight down the slope toward where the valley road must be — much quicker than the zig-zags.', effect: { add: { minutes: 120, injury: 30, energy: -20, lost: 20, morale: -10 } }, next: 'end-survived', quality: 0, feedback: 'The path zig-zags for a reason. Off it, the slope is steep, wet grass over hidden rock, and without a compass you lose the line again.' },
      ],
    },
    {
      id: 'end-selfrescue',
      title: 'Back at the B&B',
      text: 'You walk out of the fog into the valley and reach the B&B well before your 18:00 deadline.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'No compass and no phone — but you **stopped early**, anchored on your **last known point**, used the **wall as a catching feature** with **deliberate aiming off** (or the stream as a **handrail**), and kept a **pace count and time limit**. Terrain, not gadgets, got you down.' },
    },
    {
      id: 'end-rescued',
      title: 'Found in the fog',
      text: 'A mountain rescue team, working from your route card, finds you behind the peat bank at 22:30, cold but unhurt.',
      options: [],
      end: { outcome: 'rescued', summary: 'You stayed safe and made yourself findable, and your **route card** put the search in the right place. But you had the tools — **catching features, aiming off, pacing** — to walk out in daylight, and a **trigger time** would have used them.' },
    },
    {
      id: 'end-survived',
      title: 'A long way round',
      text: 'You reach a farm track in the next valley long after dark, exhausted, and phone the B&B from the farmhouse — the host was about to call the police.',
      options: [],
      end: { outcome: 'survived', summary: 'You got down, but by guesswork: **following a wall or a slope because it went downhill**, or **leaving the path to save time**. Handrails only help when you know which way they lead.' },
    },
    {
      id: 'end-critical',
      title: 'Injured below the plateau',
      text: 'You are hurt, wet and alone on steep ground. Your B&B host raises the alarm at 18:00, and it takes rescuers until after midnight to find you.',
      options: [],
      end: { outcome: 'critical', summary: 'The fatal-looking step was **committing to steep ground you could not see** — the crag gully or the ravine. In fog, edges and watercourses are hazards first and handrails second.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 10 — Multi-day survival
// ---------------------------------------------------------------------------------------------

const cap10Scenario: Scenario = {
  id: 'cap-10-scenario',
  title: 'Capstone 10 — Multi-day survival',
  stage: 19,
  environment: 'Remote boreal lakeland (spruce, pine and granite shores), late August',
  concepts: ['integration', 'priorities', 'inventory', 'water-treatment', 'water-needs', 'site-selection', 'signaling', 'visibility'],
  intro: `**Setting:** a remote chain of lakes in boreal forest, late August. Days around 16 °C, nights around 6 °C, water about 16 °C. No roads, no phone coverage, the occasional floatplane. Fires are permitted in this area (no fire ban is in force), and fishing is legal with the licences you both bought.

**What happened:** crossing a big lake, a gust and a steep wave swamped your canoe. You both had PFDs on, stayed with the canoe, controlled your breathing through the first gasping minute, and kicked it 150 m to the north shore. You lost the **food barrel** (with most of the food, the stove, the second sleeping bag, and — a mistake — the PLB), and one paddle.

**You:** you and your friend Jo, both tired, bruised and soaked. Your trip plan with the outfitter says you will be at the takeout at the end of **Day 5**; if you do not appear, they call the authorities and a floatplane flies your registered route. Realistically, help is **about 4 days away**.

**What you still have:** the gear dry bag (a 3 × 3 m tarp, one sleeping bag, one foam mat, 15 m of cord, a pot, a squeeze water filter, a first-aid kit with oral-rehydration sachets, a headlamp, a repair kit with duct tape, a fishing handline with hooks, a knife, a small emergency food bag of **about 4,000 kcal**), a 1 L bottle, the lighter and ferro rod in your PFD pocket, and a phone at **70 %** in a waterproof pouch (no signal; still a clock, torch, camera and GPS). The canoe is on the shore with a 30 cm crack near the stern.

It is **Day 1, 15:30**. The wind is still whipping whitecaps across the lake. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '15:30',
  initial: { minutes: 0, water: 1000, energy: 55, warmth: 40, morale: 35, battery: 70, injury: 5, rescue: 10, lost: 20, flags: [] },
  nodes: [
    {
      id: 'start',
      title: 'Day 1, 15:30 — Ashore',
      text: 'You are both shivering on a rock shelf, clothes streaming water, in a 30 km/h wind. Jo has a scraped, bleeding hand. The air is 14 °C — mild, but wet skin in wind loses heat fast.',
      options: [
        { id: 'warm', text: 'Warm up first: get out of the wind into the trees, wring out and change into whatever dry layers the dry bag holds (share them), shells on, a food bar each; then clean and dress Jo’s hand and take stock.', effect: { add: { minutes: 45, warmth: 25, morale: 10, energy: 5 } }, next: 'camp', quality: 2, feedback: 'Wet + wind is the most dangerous combination in mild weather. Removing yourselves from the wind and adding dry insulation stops the losses; food gives shivering muscles fuel. Only then is inventory useful — a cold brain makes bad lists.' },
        { id: 'paddle', text: 'Tape the crack and paddle for the takeout now, before you both get colder.', effect: { add: { minutes: 60, energy: -15, warmth: -10 } }, next: 'paddleout', quality: 0, feedback: 'Wet, cold, one paddle, a damaged hull, and the same wind that just capsized you — and the takeout is 40 km away. The urge to “get out” is strong, but the lake is the hazard that nearly killed you an hour ago.' },
        { id: 'search', text: 'Walk the shoreline for an hour looking for the food barrel before it drifts away.', effect: { add: { minutes: 75, warmth: -10, energy: -10, morale: 5 } }, next: 'camp', quality: 1, feedback: 'Understandable — the barrel held most of your food. But you search wet and in the wind, getting colder. You find the lost paddle wedged in rocks; the barrel is gone. Food is a Day 3 problem; cold is an hour-one problem.' },
      ],
    },
    {
      id: 'camp',
      title: 'Day 1 — Making camp',
      text: 'Along this shore you find: a sheltered flat in the spruce 30 m back from the water, near an open granite shelf at the shore; the bare, windy tip of the point, visible from miles away; and a flat spot beside a huge dead pine with endless firewood lying around it.',
      options: [
        { id: 'good', text: 'The sheltered flat in the spruce. Tarp pitched low to the wind, a thick bed of boughs and dry moss under the one mat, the sleeping bag opened as a shared quilt, fire on the granite shelf below the vegetation line.', effect: { set: { minutes: 330 }, add: { energy: -10, warmth: 20, morale: 10 } }, next: 'budget', quality: 2, feedback: 'Shelter out of the wind, no overhead hazards, insulation from the ground for two people on one mat, and a fire on bare rock where it cannot creep into roots or duff. The granite shelf will double as your signal platform.' },
        { id: 'point', text: 'The tip of the point — aircraft will see you.', effect: { set: { minutes: 330 }, add: { energy: -10, warmth: -5, morale: 0, rescue: 5 } }, next: 'budget', quality: 1, feedback: 'Visibility matters, but you will be there for days, and the wind will strip heat and flog the tarp every night. Live in shelter; signal from the open ground next to it.' },
        { id: 'deadtree', text: 'Beside the big dead pine — firewood for days.', effect: { set: { minutes: 330 }, add: { energy: -5, warmth: 10, morale: -5 } }, next: 'budget', quality: 0, feedback: 'Dead trees shed limbs and fall in wind, and you will be under it for four nights including a storm. Carrying wood 30 m is cheap; being under a “widowmaker” is not.' },
      ],
    },
    {
      id: 'budget',
      title: 'Day 1, 21:00 — The plan',
      text: 'Fire crackling, clothes steaming on a line. Jo asks the question: “So what now?” You have ~4,000 kcal of food for two people, unlimited lake water, one filter, one pot, and four days to wait.',
      options: [
        { id: 'plan', text: 'Write a plan in the phone notes: rescue most likely Day 5; ration food to ~500 kcal each per day, eaten mostly in the evening; ~3 L treated water each per day; one work block each morning, rest in the afternoons; signals ready by tomorrow noon; latrine well away from the lake and camp.', effect: { set: { minutes: 990 }, add: { morale: 15, energy: -5, warmth: -5, water: -500 }, flags: ['plan'] }, next: 'day2', quality: 2, feedback: 'Budgets turn fear into arithmetic. 500 kcal a day is a big deficit — but healthy adults tolerate several days of deficit well when warm and resting; they do not tolerate dehydration or cold. Evening calories help overnight heat production. Writing it down makes the plan shared, not just yours.' },
        { id: 'feast', text: 'Eat well tonight — you both need the boost. Tomorrow can look after itself.', effect: { set: { minutes: 990 }, add: { morale: 10, energy: 10, warmth: -5, water: -500 } }, next: 'day2', quality: 1, feedback: 'A good meal after a capsize is reasonable — but eating a third of four days’ food on night one means hungrier, colder nights later, and no plan means you will relitigate every decision.' },
        { id: 'fast', text: 'Eat nothing until you really need it — save it all for later.', effect: { set: { minutes: 990 }, add: { morale: -10, energy: -10, warmth: -10, water: -500 } }, next: 'day2', quality: 1, feedback: 'Food is not the limiting factor this week, but fasting on the coldest, most stressful night lowers heat production and morale when both matter most. Ration; don’t hoard.' },
      ],
    },
    {
      id: 'day2',
      title: 'Day 2, 08:00 — Building a routine',
      text: 'Calm, grey morning. Both of you slept in snatches under the shared quilt. The day stretches out ahead.',
      options: [
        { id: 'routine', text: 'Morning work block: a huge V of logs on the granite shelf with the red canoe upturned beside it; a signal fire laid and covered, with green spruce boughs ready for smoke; dry wood stockpiled under the tarp; a latrine 60 m from lake and camp. Afternoon: rest, with a baited handline set from shore.', effect: { set: { minutes: 1290 }, add: { energy: -10, morale: 15, rescue: 25 }, flags: ['signals'] }, next: 'water', quality: 2, feedback: 'Do the high-value work early, while you are fed and rested: signals prepared in advance can be lit in 30 seconds when a plane appears. A passive handline costs almost no energy. Sanitation distance protects your only water source.' },
        { id: 'forage', text: 'Spend the day getting food: berries and mushrooms that look familiar, and snares for hares.', effect: { set: { minutes: 1290 }, add: { energy: -20, morale: -5, water: -500 } }, next: 'water', quality: 0, feedback: 'You burn far more energy than you find, and eating plants or fungi identified on the spot is a serious poisoning risk. Snaring is illegal in many places without a licence and rarely productive for beginners. In a 4-day wait, energy conservation beats food acquisition.' },
        { id: 'rest', text: 'Stay in the sleeping bag all day to save energy.', effect: { set: { minutes: 1290 }, add: { energy: 5, morale: -10, warmth: 5 } }, next: 'water', quality: 1, feedback: 'Rest is part of the plan — but not *instead* of it. Without signals, firewood and a latrine, you have saved a few hundred kilocalories and made yourselves harder to find.' },
      ],
    },
    {
      id: 'water',
      title: 'Day 2, 13:00 — The filter slows',
      text: 'The squeeze filter has slowed to a trickle. The lake water is clear but tea-coloured from the forest. You are each drinking about 3 L a day.',
      options: [
        { id: 'backflush', text: 'Backflush the filter with clean water as the maker intends, pre-filter lake water through a bandana, and when it slows again bring water to a rolling boil for one minute in the pot.', effect: { set: { minutes: 2490 }, add: { water: 1000, energy: -5, morale: 5 } }, next: 'repair', quality: 2, feedback: 'Hollow-fibre filters clog with fine sediment and organic matter; backflushing restores flow. Pre-filtering extends its life. Boiling is a complete backup for microbes. Two methods means one failure is not a crisis — redundancy for a critical function.' },
        { id: 'boil', text: 'Give up on the filter and boil everything from now on.', effect: { set: { minutes: 2490 }, add: { water: 1000, energy: -10, morale: 0 } }, next: 'repair', quality: 1, feedback: 'Safe — a rolling boil kills the pathogens that matter. But boiling six litres a day costs wood, time and attention, and a two-minute backflush would have restored your easier method.' },
        { id: 'raw', text: 'It is a remote lake and the water is clear — drink it untreated.', effect: { set: { minutes: 2490 }, add: { water: 1000, morale: 5 }, flags: ['gi'] }, next: 'repair', quality: 0, feedback: 'Clear is not clean. Remote lakes carry protozoa and bacteria from wildlife. Diarrhoea in a survival situation drains exactly what you need most: water, salts and energy.' },
      ],
    },
    {
      id: 'repair',
      title: 'Day 3, 09:00 — The canoe',
      text: 'The 30 cm crack near the stern lets water in steadily. You have duct tape and a fire.',
      options: [
        { id: 'fix', text: 'Dry and gently warm the hull by the fire, clean it, and tape the crack on both sides. Then turn the red canoe upside down on the granite shelf as a signal. It is a backup, not a plan.', effect: { set: { minutes: 3150 }, add: { energy: -8, morale: 10, rescue: 5 } }, next: 'morale', quality: 2, feedback: 'Tape sticks only to dry, clean, warm surfaces. A repaired canoe keeps an option open if your situation changes (an injury, a missed search). Meanwhile its bright hull is one of the best signals you own.' },
        { id: 'go', text: 'Tape it and paddle out now. The takeout is 40 km; you might make it in two days.', effect: { add: { minutes: 90, energy: -15, warmth: -5 } }, next: 'paddleout', quality: 0, feedback: 'Leaving your plan’s route and your prepared signals, on a damaged boat, low on food, with a front forecast for tomorrow — every factor points the other way. Rescue will search where you said you would be.' },
        { id: 'ignore', text: 'Leave it. It is not going to matter.', effect: { set: { minutes: 3150 }, add: { morale: -5 } }, next: 'morale', quality: 1, feedback: 'Maybe not — but repair costs an hour of easy work, keeps an option open, and gives you a bright signal panel. Small, useful jobs are also good for morale.' },
      ],
    },
    {
      id: 'morale',
      title: 'Day 3, 20:00 — Jo goes quiet',
      text: 'Jo has stopped talking, eats without interest and says, “Nobody knows where we are. Nobody’s coming.” You feel it too.',
      options: [
        { id: 'talk', text: 'Sit with Jo and go through the facts: the outfitter expects us on Day 5 and has our route; the signals are ready. Plan tomorrow’s jobs together, share the evening meal, keep a daily log, and take turns telling stories before sleep.', effect: { set: { minutes: 3930 }, add: { morale: 20, warmth: -5, energy: -10 } }, next: 'day4', quality: 2, feedback: 'Morale is a survival resource. Accurate, specific information beats vague reassurance; routine, shared control and small achievable goals counter hopelessness; social connection is protective. Keep watching each other — withdrawal can also be an early sign of cold or dehydration.' },
        { id: 'promise', text: 'Tell Jo a plane will definitely come tomorrow.', effect: { set: { minutes: 3930 }, add: { morale: 5, energy: -10, warmth: -5 } }, next: 'day4', quality: 1, feedback: 'Kindly meant, but false certainty backfires: when no plane comes tomorrow, trust and morale drop further. Say what you know and what you are doing about it.' },
        { id: 'leave', text: 'Leave Jo alone for now and do the camp jobs yourself.', effect: { set: { minutes: 3930 }, add: { morale: -15, energy: -12, warmth: -5 } }, next: 'day4', quality: 0, feedback: 'Isolation deepens withdrawal, and you take on all the work. In a two-person party, each person’s morale is the other’s responsibility.' },
      ],
    },
    {
      id: 'day4',
      title: 'Day 4, 09:00 — The front arrives',
      text: 'Rain drives in sideways; gusts rattle the tarp; the lake is white. The temperature has fallen to 8 °C. There is one evening’s food left.',
      options: [
        { id: 'batten', hiddenIfFlag: 'gi', text: 'Re-pitch the tarp low and taut into the wind, move the wood stock under it, keep a small fire going on the shelf, stay dry and rest. Eat the last food this evening.', effect: { set: { minutes: 5670 }, add: { warmth: -10, energy: -15, morale: 5, water: -500 } }, next: 'day5', quality: 2, feedback: 'Storm routine: protect shelter, fuel and insulation, do nothing strenuous, keep dry. A low, taut tarp sheds wind; wet wood under cover now is fire tomorrow.' },
        { id: 'batten-gi', requiresFlag: 'gi', text: 'Re-pitch the tarp low and taut into the wind, move the wood stock under it, keep a small fire going on the shelf, stay dry and rest. Eat the last food this evening.', effect: { set: { minutes: 4290 }, add: { warmth: -10, energy: -10 } }, next: 'sick', quality: 2, feedback: 'Good storm routine. But by early afternoon Jo is doubled over with cramps and watery diarrhoea.' },
        { id: 'paddle', text: 'The shore is calmer in the lee — take the repaired canoe and try to get out before it gets worse.', effect: { add: { minutes: 60, energy: -15, warmth: -15 } }, next: 'paddleout', quality: 0, feedback: 'Launching into a storm on a taped hull because camp feels miserable is a textbook stress decision. “Calmer in the lee” lasts until the first headland.' },
      ],
    },
    {
      id: 'sick',
      title: 'Day 4, 15:00 — Jo is ill',
      text: 'Jo has had watery diarrhoea five times since midday, feels weak and has cramps. No blood, no high fever. Two days ago you drank the lake untreated.',
      options: [
        { id: 'ors', text: 'Oral rehydration: mix the ORS sachets with treated water and give small, frequent sips — at least a cup after every loose stool. Strict hand hygiene, a separate latrine trip plan, and everything boiled from now on.', effect: { set: { minutes: 5670 }, add: { water: -1000, morale: 5, energy: -15, warmth: -10 } }, next: 'day5', quality: 2, feedback: 'Fluid and salt replacement is the treatment that matters; oral rehydration solution is absorbed even during diarrhoea. Hygiene stops you getting it too. If ORS sachets run out, about 6 level teaspoons of sugar and ½ teaspoon of salt in 1 L of clean water is the standard substitute.' },
        { id: 'pills', text: 'Give loperamide from the first-aid kit and carry on as normal.', effect: { set: { minutes: 5670 }, add: { energy: -20, morale: -5, warmth: -10 } }, next: 'day5', quality: 1, feedback: 'An anti-motility drug can reduce trips for an adult with mild, non-bloody diarrhoea and no fever — but it does not replace the lost fluid and salt, which is the actual danger. Rehydration comes first.' },
        { id: 'stop', text: 'Tell Jo to stop drinking until the diarrhoea settles.', effect: { add: { minutes: 1080, energy: -30, morale: -25, warmth: -15 } }, next: 'end-ill', quality: 0, feedback: 'A dangerous myth. Stopping fluids does not stop diarrhoea; it just adds dehydration to it. By the next morning Jo is dizzy, barely passing urine and confused.' },
      ],
    },
    {
      id: 'day5',
      title: 'Day 5, 14:00 — An engine',
      text: 'The storm has passed. Broken cloud, light wind. Then — faint, then louder — the drone of a floatplane engine to the south.',
      options: [
        { id: 'signal', requiresFlag: 'signals', text: 'Light the prepared fire and pile on green boughs for thick white smoke; stand on the shelf by the log V and the red canoe; wave the orange PFDs in wide arcs; flash the pot lid toward the aircraft.', effect: { add: { minutes: 150, rescue: 60, morale: 40 } }, next: 'end-rescued', quality: 2, feedback: 'Prepared signals work at the speed of an aircraft. Smoke, a large geometric shape, contrasting colour and movement in open ground, plus a flash: the pilot rocks his wings within minutes.' },
        { id: 'scramble', hiddenIfFlag: 'signals', text: 'Run to the shore and wave your arms, and try to get a fire going fast.', effect: { add: { minutes: 1200, rescue: 30, morale: -20, warmth: -10, energy: -15 } }, next: 'end-survived', quality: 1, feedback: 'By the time the fire catches the plane is a speck. Nothing on the shore looked out of place from 300 m up. It will be the next day before a boat party reaches you.' },
        { id: 'hide', text: 'Stay under the tarp — if it is looking for you it will come closer.', effect: { add: { minutes: 1200, rescue: 20, morale: -25, warmth: -10, energy: -15 } }, next: 'end-survived', quality: 0, feedback: 'A tarp under spruce trees is invisible from the air. The search plane flies a pattern; it will not come closer unless something catches the crew’s eye.' },
      ],
    },
    {
      id: 'paddleout',
      title: 'Open water',
      text: 'Two kilometres along the shore the wind swings round the headland. Waves slap the bow; the tape is peeling and water sloshes around your knees. One of you is baling with the pot.',
      options: [
        { id: 'land', text: 'Turn for the nearest landing immediately, get ashore, and make camp there — still on your planned route.', effect: { add: { minutes: 2400, warmth: -15, energy: -25, morale: -15, rescue: 15 } }, next: 'end-survived', quality: 2, feedback: 'The best choice from a bad position: stop the escalation and get ashore while you still can. On the planned route, searchers will still find you — just later, with less food and no prepared signals.' },
        { id: 'push', text: 'Keep paddling hard — you are committed now.', effect: { add: { minutes: 45, warmth: -45, energy: -30, injury: 20, morale: -30 } }, next: 'end-lake', quality: 0, feedback: 'The canoe swamps a second time, 300 m from shore. Cold, tired and already chilled, you both struggle to swim.' },
      ],
    },
    {
      id: 'end-rescued',
      title: 'Picked up on Day 5',
      text: 'The floatplane lands, taxis to the shelf, and flies you both to the outfitter’s base by evening.',
      options: [],
      end: { outcome: 'rescued', summary: 'You **got warm before anything else**, made a **safe, sheltered camp**, turned uncertainty into a **written water, food and energy budget**, kept **redundant water treatment**, looked after **each other’s morale**, and had **signals ready before the aircraft came**. Four days, handled as a routine.' },
    },
    {
      id: 'end-survived',
      title: 'Found a day later',
      text: 'On Day 6 a search boat working the shoreline of your planned route spots your camp. You are both hungry, cold and exhausted, but alive.',
      options: [],
      end: { outcome: 'survived', summary: 'You survived — but the plane that could have ended it on Day 5 did not see you. The decisive gaps were **signals not prepared in advance**, or **leaving your camp and route by canoe**. In a multi-day wait, the work of being found is done days before the rescuers arrive.' },
    },
    {
      id: 'end-lake',
      title: 'Second capsize',
      text: 'You both reach shore after a desperate swim, severely hypothermic. A search aircraft finds you on Day 6 in a critical state.',
      options: [],
      end: { outcome: 'critical', summary: 'The lake was the hazard that started this. **Going back onto it in a damaged boat** — out of impatience or discomfort — converted a survivable wait into a cold-water emergency.' },
    },
    {
      id: 'end-ill',
      title: 'Evacuated by air, seriously dehydrated',
      text: 'By Day 5 Jo is too weak to stand. The floatplane crew finds you and flies Jo straight to hospital for intravenous fluids.',
      options: [],
      end: { outcome: 'critical', summary: 'Two decisions compounded: **drinking untreated water** and then **withholding fluids** to “stop” diarrhoea. Treat every source, keep a backup method, and treat diarrhoea with **oral rehydration**, not restriction.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 11 — Group survival
// ---------------------------------------------------------------------------------------------

const cap11Scenario: Scenario = {
  id: 'cap-11-scenario',
  title: 'Capstone 11 — Group survival',
  stage: 19,
  environment: 'Upland ridge in early November: sleet, strong wind, failing light',
  concepts: ['integration', 'priorities', 'stress-control', 'human-factors', 'wet-wind', 'heat-balance', 'stay-or-move', 'phone-use'],
  intro: `**Setting:** a high ridge walk in early November. Sleet, a north-westerly wind of 40 km/h gusting 60, air temperature 2 °C. **Sunset 16:30.** The car is 5 km away, over a col 250 m above you and then down a good path.

**The group (five friends):** you — the most experienced, with a wilderness first-aid course last year — plus
- **Dana**, quiet, wearing jeans that are now soaked, shivering hard, fumbling with her zip;
- **Ravi**, breathing fast, saying “we’re going to die up here” and demanding someone call a helicopter;
- **Mike**, fit and furious at the slow pace, announcing he will run to the car alone and drive round for help;
- **Lea**, calm, carrying a 4–6-person **group shelter (bothy bag)** and a flask of hot sweet tea.

**Group kit:** the bothy bag, three foam sit mats, two flasks, one plastic survival bag, a spare fleece and hat, food bars, three headlamps, a first-aid kit, your map and compass. Three phones, none with signal here — but there is usually one bar on a knoll 50 m above you, in sight of the path. Mike’s partner knows the route and expects you back by 18:00.

It is **15:30**. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '15:30',
  initial: { minutes: 0, water: 1500, energy: 45, warmth: 45, morale: 30, battery: 50, injury: 0, rescue: 20, lost: 10, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '15:30 — The group is coming apart',
      text: 'The group is strung out along the path, heads down against the sleet. Dana has stopped responding to jokes. Ravi is shouting. Mike is 30 m ahead and not waiting.',
      options: [
        { id: 'halt', text: 'Take charge, calmly and clearly: “Everyone stop here, behind these boulders. Lea, bothy bag out please. Mike, come back — I need you.”', effect: { add: { minutes: 10, morale: 10 } }, next: 'triage', quality: 2, feedback: 'In a deteriorating group someone has to make the first decision, and it should be the one that stops things getting worse: halt in the best shelter available. Clear, specific, calm instructions with names attached are followed; general appeals are not.' },
        { id: 'push', text: 'Keep everyone moving faster — the only real fix is getting over the col before dark.', effect: { add: { minutes: 20, warmth: -15, energy: -10, morale: -10 }, flags: ['danaworse'] }, next: 'pushon', quality: 0, feedback: 'The slowest person is hypothermic, and “faster” means she burns her last reserves while losing heat to wet jeans and wind. The group stretches further apart.' },
        { id: 'discuss', text: 'Gather everyone and hold a group discussion about what to do.', effect: { add: { minutes: 15, warmth: -10, morale: -5 } }, next: 'triage', quality: 1, feedback: 'Involving people is good leadership — but not standing in the open wind while someone is hypothermic. Shelter first, discussion inside the shelter.' },
      ],
    },
    {
      id: 'pushon',
      title: 'Strung out on the ridge',
      text: 'Dana trips and goes down on the wet rocks. She gets up slowly and stands swaying. Ravi is crying. Mike is out of sight over the next rise.',
      options: [
        { id: 'halt', text: 'Stop everyone now in the lee of the nearest boulders and get the bothy bag out.', effect: { add: { minutes: 10, morale: 5 } }, next: 'triage', quality: 2, feedback: 'Late, but the right correction. Stopping a failing plan is harder than starting one; it is still the best move available.' },
        { id: 'carry', text: 'Keep going — two of you take Dana’s arms and Mike can carry her pack.', effect: { add: { minutes: 60, warmth: -30, energy: -25, injury: 30, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'Dana’s condition is getting worse with every minute of exposure. Half an hour later she can no longer stand, the light is gone, and the group is spread over 200 m of ridge.' },
      ],
    },
    {
      id: 'triage',
      title: 'Who first?',
      text: 'Behind the boulders the wind drops a little. Three problems are shouting for your attention: Dana (quiet, shivering violently, clumsy), Ravi (panicking loudly) and Mike (angry, wants to leave).',
      options: [
        { id: 'dana', text: 'Dana first: into the bothy bag with Lea, sitting on two mats; replace her soaked jeans with Lea’s spare waterproof trousers over dry leggings, add the spare fleece and hat, hood up; sweet tea and a food bar while she can swallow safely.', effect: { add: { minutes: 15, warmth: 15, morale: 10 } }, next: 'ravi', quality: 2, feedback: 'Triage by threat to life, not by volume. Dana shows mild hypothermia (shivering, fumbling, withdrawn). The fix: stop further heat loss (out of wind, off the ground, wet layers off or covered, head covered), then fuel shivering with calories. The warmth of the drink matters less than the sugar.' },
        { id: 'mike', text: 'Deal with Mike first — he is the loudest and the most likely to do something rash.', effect: { add: { minutes: 15, warmth: -10, morale: -5 }, flags: ['danaworse'] }, next: 'ravi', quality: 0, feedback: 'The loudest person is rarely the sickest. Ten minutes of argument while Dana sits in wet jeans in the wind is ten minutes of heat loss she cannot afford.' },
        { id: 'myth', text: 'Warm Dana up fast: a swig from Mike’s whisky flask and brisk rubbing of her arms and legs.', effect: { add: { minutes: 10, warmth: -10, morale: 5 }, flags: ['danaworse'] }, next: 'ravi', quality: 0, feedback: 'Two myths. Alcohol dilates skin vessels — it feels warming while increasing heat loss — and impairs judgment and shivering. Vigorous rubbing does not rewarm the core and is discouraged. Insulation, shelter and calories are what work.' },
      ],
    },
    {
      id: 'ravi',
      title: 'Ravi is hyperventilating',
      text: 'Ravi is breathing fast and shallow, gripping his chest, saying his hands are tingling and he can’t breathe.',
      options: [
        { id: 'calm', text: 'Crouch in front of him, make eye contact, speak slowly: “Breathe with me — in for four, out for six.” When he settles, give him a job: hold the bothy bag’s windward edge and time Dana’s checks every 15 minutes.', effect: { add: { minutes: 10, morale: 15 } }, next: 'mike', quality: 2, feedback: 'Panic is contagious, and so is calm. Slow breathing with a longer exhale settles the fast breathing that causes tingling and chest tightness. A concrete task restores a sense of control and makes him part of the solution. (If chest pain persisted or he had a heart history, you would treat it as a possible medical emergency.)' },
        { id: 'snap', text: '“Pull yourself together, Ravi — you’re scaring everyone.”', effect: { add: { minutes: 5, morale: -15 }, flags: ['conflict'] }, next: 'mike', quality: 0, feedback: 'Shaming a frightened person makes the fear worse and adds humiliation. He goes quiet, but not calm — and you have created a grudge in a group that needs cooperation tonight.' },
        { id: 'ignore', text: 'Leave him — there are more urgent problems.', effect: { add: { minutes: 2, morale: -5 } }, next: 'mike', quality: 1, feedback: 'He is not the medical priority, but thirty seconds of calm attention and a job would have turned a liability into a helper.' },
      ],
    },
    {
      id: 'mike',
      title: 'Mike wants to go alone',
      text: '“This is ridiculous. I can be at the car in an hour. I’ll drive round and get help.” He is already tightening his pack straps.',
      options: [
        { id: 'knoll', text: '“Nobody goes alone, and nobody goes out of sight. Mike, you’re the fastest — take the phone with most battery to that knoll, call the emergency number with our grid reference, the number of people and Dana’s condition, then come straight back.”', effect: { add: { minutes: 20, battery: -10, rescue: 45, morale: 15 }, flags: ['called'] }, next: 'shelter', quality: 2, feedback: 'You redirect his energy into the highest-value task available: communication. The knoll is in sight, so the group never splits. The call puts a trained team on the way to a known point — faster than one person running 5 km in the dark and driving round.' },
        { id: 'alone', text: 'Let Mike go for the car alone — he is the fittest.', effect: { add: { minutes: 5, morale: -10, rescue: 10 }, flags: ['split'] }, next: 'shelter', quality: 0, feedback: 'A lone, frustrated person moving fast over a col in sleet and darkness is at high risk of injury or getting lost — and if it happens, nobody knows. You have also lost your strongest pair of hands.' },
        { id: 'pair', text: 'Send Mike and Ravi together over the col to raise the alarm from the car.', effect: { add: { minutes: 5, morale: -5, rescue: 10 }, flags: ['split'] }, next: 'shelter', quality: 1, feedback: 'Better than alone — a pair can help each other. But Ravi is still shaky, it is almost dark, and splitting halves the group’s warmth, light and hands, when a call from the knoll 50 m away could do the same job.' },
      ],
    },
    {
      id: 'shelter',
      title: 'Group shelter',
      text: 'Lea has the bothy bag unrolled. The sleet is heavier and the light is almost gone.',
      options: [
        { id: 'all', text: 'Everyone in: sit on packs and mats in a ring with backs to the fabric, Dana in the middle between the two warmest people, a vent held open near the top, flasks and food shared out.', effect: { add: { minutes: 15, warmth: 20, morale: 15 } }, next: 'conflict', quality: 2, feedback: 'A bothy bag holds the group’s combined heat — several people each producing around 100 W — in still air, out of wind and sleet. Sitting on packs and mats cuts conduction. Putting the casualty in the middle is triage made physical.' },
        { id: 'wall', text: 'First build a stone windbreak so the bag does not flog in the wind.', effect: { add: { minutes: 30, energy: -10, warmth: -10, morale: -5 } }, next: 'conflict', quality: 1, feedback: 'Twenty minutes of heavy lifting in the dark while the casualty waits. The bag works without it — weighted by the people sitting on its edges.' },
        { id: 'solo', text: 'Put Dana alone in the survival bag; the rest of you stand around it to block the wind.', effect: { add: { minutes: 10, warmth: -10, morale: -10 }, flags: ['danaworse'] }, next: 'conflict', quality: 0, feedback: 'A single plastic bag gives Dana no heat source but her own failing one, and four people standing in the wind are now the next casualties.' },
      ],
    },
    {
      id: 'conflict',
      title: 'Tension in the bag',
      text: 'Inside the flapping bag it is dark, crowded and tense. Someone blames someone else for the late start. Voices are rising, and Dana has gone very quiet.',
      options: [
        { id: 'roles', text: 'Acknowledge it: “We’re all cold and scared, and that’s normal.” Then restate the plan and give everyone a role — Ravi times Dana’s checks, Lea manages food and drink, Mike handles the phones and lights, you check Dana — with windward places rotated every 20 minutes.', effect: { set: { minutes: 120 }, add: { morale: 20, warmth: 5 } }, next: 'decide', quality: 2, feedback: 'Naming emotions lowers them; a plan and roles replace blame with purpose. Rotating the windward seats shares the cold fairly — fairness is a big part of group cohesion.' },
        { id: 'sorry', requiresFlag: 'conflict', text: 'Start by apologising to Ravi for snapping earlier, then restate the plan and hand out roles.', effect: { set: { minutes: 120 }, add: { morale: 25, warmth: 5 }, clearFlags: ['conflict'] }, next: 'decide', quality: 2, feedback: 'Leaders who repair their own mistakes quickly earn trust back. Ravi visibly relaxes and takes his job seriously.' },
        { id: 'vote', text: 'Put it to a vote: stay or walk out now?', effect: { set: { minutes: 120 }, add: { morale: -5 } }, next: 'decide', quality: 1, feedback: 'Democracy has its place, but in an emergency a vote between cold, frightened people tends to pick the option that ends discomfort soonest, not the safest. Consult, then decide.' },
        { id: 'shout', text: 'Shout them down: “Everyone shut up and do as I say.”', effect: { set: { minutes: 120 }, add: { morale: -20 } }, next: 'decide', quality: 0, feedback: 'You get silence, not cooperation. And in the silence nobody notices how quiet Dana has become.' },
      ],
    },
    {
      id: 'decide',
      title: '17:30 — Stay or move?',
      text: 'It is fully dark. Dana is still shivering; she can talk but is slow to answer. The descent is over a 250 m climb to an exposed col, then 4 km down a good path.',
      options: [
        { id: 'stay-called', requiresFlag: 'called', text: 'Stay in the bag. A team is coming to the position you reported; keep Dana warm and the phones ready.', effect: { add: { minutes: 20, morale: 10 } }, next: 'wait', quality: 2, feedback: 'The team is moving to your reported location. Staying keeps you exactly where they expect you, sheltered, with the casualty insulated.' },
        { id: 'stay-call', hiddenIfFlag: 'called', text: 'Stay, and send two people to the knoll (in sight) to call the emergency number now — grid reference, five people, one hypothermic — then straight back.', effect: { add: { minutes: 30, battery: -10, rescue: 40, morale: 10 }, flags: ['called'] }, next: 'wait', quality: 2, feedback: 'Communication late is far better than never. A pair, in sight, for a short, specific task — that is how to split a group safely.' },
        { id: 'move', text: 'Move together, now: pace of the slowest, Dana behind the leader, strongest at the back as sweep, headlamps front and back, a halt every 15 minutes to check her.', effect: { add: { minutes: 60, energy: -20, warmth: -10, morale: -5 } }, next: 'descent', quality: 1, feedback: 'A mildly hypothermic person who is insulated, fed and able to walk can sometimes walk out, and walking produces heat. But the climb to the exposed col comes first, in the dark, and if she deteriorates you will be in the worst place to stop.' },
        { id: 'splitnow', text: 'Split: the fittest three go for the car to raise the alarm; you stay with Dana.', effect: { add: { minutes: 30, morale: -15, warmth: -15 }, flags: ['split'] }, next: 'wait', quality: 0, feedback: 'You lose the bag’s shared heat and most of the lights, and the walkers face the col in the dark. If a phone call from the knoll is possible, it beats a 5 km walk to raise the alarm.' },
      ],
    },
    {
      id: 'descent',
      title: 'Toward the col in the dark',
      text: 'Halfway up to the col, Dana stumbles again and again. Her speech is slurring and she does not seem to understand where she is.',
      options: [
        { id: 'wrap', text: 'Stop in the most sheltered spot you can find. Lay Dana down on mats, wrap her in the survival bag and spare layers, get the bothy bag over everyone, handle her gently — and call from the col edge where there is a bar.', effect: { add: { minutes: 30, warmth: 10, battery: -10, rescue: 40, morale: 5 }, flags: ['called'] }, next: 'wait', quality: 2, feedback: 'Confusion and stumbling mean she is getting worse — moving beyond mild hypothermia. Now she should not walk: keep her horizontal, handle her gently, insulate all round (a “hypothermia wrap”), and get a stretcher team coming. Heat packs, if you had them, go on the chest and armpits over a thin layer.' },
        { id: 'keep', hiddenIfFlag: 'danaworse', text: 'She can still walk — one person each side, slow pace, keep going over the col.', effect: { add: { minutes: 150, energy: -25, warmth: -10, morale: 10 } }, next: 'end-selfrescue', quality: 1, feedback: 'Risky, and you get away with it: food, insulation and the early start to her care had given her enough reserves. Below the col she improves. But you gambled on the exposed col with a deteriorating casualty.' },
        { id: 'keep-worse', requiresFlag: 'danaworse', text: 'She can still walk — one person each side, slow pace, keep going over the col.', effect: { add: { minutes: 90, warmth: -30, energy: -30, injury: 30, morale: -30 } }, next: 'end-critical', quality: 0, feedback: 'After the early delays and heat loss she has no reserves left. At the col she collapses, barely responsive, in the most exposed place on the route.' },
      ],
    },
    {
      id: 'wait',
      title: 'Waiting for the team',
      text: 'The hours pass slowly in the bag. The wind roars; the sleet hisses on the fabric.',
      options: [
        { id: 'manage', hiddenIfFlag: 'split', text: 'Keep the routine: check Dana every 15 minutes (shivering, speech, can she touch thumb to each fingertip?), rotate the windward seats, share food and drink, one phone on for the team’s calls, others off and warm; whistle and headlamp flashes when you hear them.', effect: { add: { minutes: 150, warmth: -5, rescue: 40, morale: 15, battery: -10 } }, next: 'end-rescued', quality: 2, feedback: 'Monitoring tells you if she is improving or getting worse; routine keeps the group functioning; phone discipline keeps the team in contact; clear signals bring them straight to you.' },
        { id: 'manage-split', requiresFlag: 'split', text: 'Keep the routine: check Dana every 15 minutes (shivering, speech, can she touch thumb to each fingertip?), rotate the windward seats, share food and drink, one phone on for the team’s calls, others off and warm; whistle and headlamp flashes when you hear them.', effect: { add: { minutes: 150, warmth: -5, rescue: 30, morale: 5, battery: -10 } }, next: 'end-split', quality: 2, feedback: 'You do everything right with the people you have. But when the team arrives, their first question is: “Where are the others?”' },
        { id: 'meet', text: 'The team is taking too long — start walking Dana down to meet them.', effect: { add: { minutes: 90, warmth: -25, energy: -25, injury: 25, morale: -20 } }, next: 'end-critical', quality: 0, feedback: 'Moving a hypothermic casualty in the dark, away from the reported position, makes her worse and makes you harder to find.' },
      ],
    },
    {
      id: 'end-rescued',
      title: 'Walked off by the rescue team',
      text: 'The rescue team reaches you around 20:00, puts Dana in a casualty bag on a stretcher, and walks everyone else down with them.',
      options: [],
      end: { outcome: 'rescued', summary: 'You **halted in shelter**, **triaged by threat to life** (Dana first), **calmed panic with breathing and a job**, turned Mike’s urge to leave into a **call from the knoll in sight**, got **everyone into the group shelter**, and gave the group **roles, rotation and a routine**. Everyone got home.' },
    },
    {
      id: 'end-selfrescue',
      title: 'Down to the cars',
      text: 'The group reaches the cars at about 20:30. Dana is exhausted but talking normally in the warm car.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'Good early care — **shelter, insulation, calories** — gave Dana the reserves to walk out, and the group stayed **together at the pace of the slowest**. But crossing an exposed col at night with a worsening casualty was a gamble; a call from the knoll would have made it unnecessary.' },
    },
    {
      id: 'end-split',
      title: 'One group rescued, one searched for',
      text: 'Your group is walked down safely. Mike (and anyone who went with him) took a wrong line off the col in the dark; they are found cold, bruised and shaken at 02:00.',
      options: [],
      end: { outcome: 'survived', summary: 'Everyone survived, but **splitting the group** turned one emergency into two and sent the rescue team searching in two places. Keep the group together; if someone must go, send a **pair on a short, specific task within sight** — and prefer the phone.' },
    },
    {
      id: 'end-critical',
      title: 'Severe hypothermia on the hill',
      text: 'Dana becomes barely responsive. The rescue team, called late, reaches you after midnight and evacuates her by helicopter to hospital with severe hypothermia.',
      options: [],
      end: { outcome: 'critical', summary: 'The decisive errors were **treating the problem as “get down fast”** instead of “stop the heat loss”, **delays and myths in treating the casualty**, and **moving a deteriorating hypothermic person**. Shelter, insulation, calories and an early call would have kept her mildly cold instead of critically ill.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 12 — Disaster / urban emergency
// ---------------------------------------------------------------------------------------------

const cap12Scenario: Scenario = {
  id: 'cap-12-scenario',
  title: 'Capstone 12 — Night earthquake',
  stage: 19,
  environment: 'City apartment block, early March, night; power and water out after a strong earthquake',
  concepts: ['integration', 'immediate-danger', 'priorities', 'water-needs', 'water-treatment', 'phone-use', 'kit', 'stay-or-move'],
  intro: `**Setting:** a mid-sized city in early March. You live on the **3rd floor of a six-storey 1970s concrete apartment block**. It is 6 °C outside, dry, calm.

**Your household:** you, your partner Sam, Noa (9) and Eli (4). Next door lives **Mrs Katz**, 82, alone, who uses a walking frame.

**Your preparations:** a family plan (meeting point: the park across the road; out-of-area contact: an aunt in another city) and a home kit in the hall cupboard — two torches, a wind-up radio, a first-aid kit, a whistle, a charged power bank, food for about three days, copies of documents, and a half-packed go-bag. You meant to store 48 L of water (4 people × ~4 L × 3 days); there are **5 L**. Phones: yours 60 %, Sam’s 40 %. Your shoes are in the hall.

It is **02:40**. You wake to a roar and the whole building lurching. Every choice changes time, water, warmth, morale, battery, injuries and how quickly help reaches you. Decision quality is revealed at the end.`,
  start: 'start',
  startClock: '02:40',
  initial: { minutes: 0, water: 5000, energy: 70, warmth: 80, morale: 50, battery: 60, injury: 0, rescue: 40, lost: 20, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '02:40 — The shaking',
      text: 'The bed is sliding. Something heavy crashes in the living room; glass shatters in the kitchen. From the children’s room, Eli screams. The shaking goes on and on.',
      options: [
        { id: 'bed', text: 'Stay in bed, face down, and cover your head and neck with a pillow until the shaking stops. Shout to the kids: “Stay in bed, cover your heads!”', effect: { add: { minutes: 1, morale: 5 } }, next: 'after', quality: 2, feedback: 'Current guidance (Drop, Cover, Hold On) for someone in bed: stay there and protect your head and neck. Most earthquake injuries come from falling objects and from people trying to move while the floor is moving. Your voice reaches the children faster than you can.' },
        { id: 'kids', text: 'Run to the children’s room now.', effect: { add: { minutes: 1, injury: 15, morale: 0 }, flags: ['cutfoot'] }, next: 'after', quality: 1, feedback: 'Every parent’s instinct — but you are thrown against the door frame, and step on broken glass in the hallway in bare feet. You reach them only as the shaking stops.' },
        { id: 'doorway', text: 'Get into a doorway — the strongest place in the house.', effect: { add: { minutes: 1, injury: 15, morale: -5 } }, next: 'after', quality: 0, feedback: 'A myth from old unreinforced houses. In modern buildings doorways are no stronger than the rest, the door swings into you, and getting there means crossing a moving floor. You are knocked down on the way.' },
      ],
    },
    {
      id: 'after',
      title: 'Silence, and darkness',
      text: 'The shaking stops. Car alarms wail outside. The power is out and it is pitch dark. Eli is crying; Noa is calling for you.',
      options: [
        { id: 'shoes', text: 'Phone torch on, shoes on from the hall first, then the kit torch — and keep talking to the kids: “We’re coming, stay where you are.”', effect: { add: { minutes: 3, morale: 10 } }, next: 'injuries', quality: 2, feedback: 'Broken glass is the commonest after-quake injury in homes. Ten seconds for shoes protects the only feet that can carry the kids downstairs. A torch, never a flame: there may be gas.' },
        { id: 'barefoot', text: 'Rush barefoot to the children in the dark.', effect: { add: { minutes: 2, injury: 20, morale: -5 }, flags: ['cutfoot'] }, next: 'injuries', quality: 0, feedback: 'You slice your foot on glass from a fallen picture frame. Now there are two injured adults and a long night of stairs and walking ahead.' },
        { id: 'candle', text: 'Light a candle from the drawer so you can see properly.', effect: { add: { minutes: 3, morale: 5 }, flags: ['candle'] }, next: 'injuries', quality: 0, feedback: 'Candles cause many post-earthquake fires — and if a gas pipe has cracked, an open flame is the worst possible light source. Torches and phone lights only.' },
      ],
    },
    {
      id: 'injuries',
      title: 'Checking everyone',
      text: 'By torchlight: Sam is sitting on the floor with blood flowing steadily from a deep cut on the sole of the foot. Noa has a bump on the forehead but is alert, talking normally and remembers everything. Eli is terrified but unhurt.',
      options: [
        { id: 'pressure', text: 'Firm, direct pressure on Sam’s cut with a dressing from the kit for several minutes, then a firm pressure bandage. Check Noa: alert, normal speech, no vomiting — watch for worsening. Give Eli a job: holding the torch.', effect: { add: { minutes: 12, injury: -10, morale: 10 } }, next: 'gas', quality: 2, feedback: 'Firm direct pressure controls almost all bleeding. (A tourniquet is for life-threatening limb bleeding that pressure does not control — and then early, not as a last resort.) A head bump with normal alertness needs watching for worsening headache, vomiting, drowsiness or confusion. A small job calms a frightened child.' },
        { id: 'rinse', text: 'Rinse Sam’s wound thoroughly with bottled water first to get the glass out, then bandage it.', effect: { add: { minutes: 15, water: -1500, injury: 10, morale: -5 } }, next: 'gas', quality: 0, feedback: 'Bleeding control comes before cleaning — and you have just poured almost a third of your drinking water onto the floor while the cut kept bleeding. Clean the wound properly once bleeding is controlled and you have water to spare.' },
        { id: 'points', text: 'Raise Sam’s leg and press hard on the pressure point in the groin.', effect: { add: { minutes: 15, injury: 10, morale: -5 } }, next: 'gas', quality: 0, feedback: 'Elevation and pressure points are no longer recommended — there is little evidence they work and they delay what does: firm pressure directly on the wound.' },
      ],
    },
    {
      id: 'gas',
      title: 'A smell of gas',
      text: 'In the kitchen doorway you notice a faint smell of rotten eggs. You can’t hear hissing. Your gas meter and its shut-off valve are by the front door.',
      options: [
        { id: 'evacuate', hiddenIfFlag: 'candle', text: 'No switches, no flames. Open the windows, turn the gas off at the valve (a quarter-turn so the handle is across the pipe), grab the go-bag, coats and shoes, and get everyone out.', effect: { add: { minutes: 8, morale: 5 }, flags: ['gasoff'] }, next: 'leave', quality: 2, feedback: 'If you smell gas or hear hissing: ventilate, shut off at the main valve if you know how, get out, and report it from outside. Do not turn it back on yourself afterwards — that is the gas utility’s job.' },
        { id: 'evacuate-candle', requiresFlag: 'candle', text: 'Blow the candle out **now**. Then open the windows, turn the gas off at the valve, grab the go-bag, coats and shoes, and get everyone out.', effect: { add: { minutes: 8, morale: 5 }, flags: ['gasoff'], clearFlags: ['candle'] }, next: 'leave', quality: 2, feedback: 'Lucky. A flame and a gas smell in the same flat is how post-quake explosions happen. From here on, torches only.' },
        { id: 'lighter', text: 'Find the leak first: check the cooker and pipes, using the lighter to see better.', effect: { add: { minutes: 5, injury: 70, morale: -40, warmth: -10 } }, next: 'end-critical', quality: 0, feedback: 'Never look for a gas leak with a flame. There is a flash and a bang from the kitchen.' },
        { id: 'ignore', text: 'It’s probably from the street — ignore it; you’ll be leaving soon anyway.', effect: { add: { minutes: 2 }, flags: ['gasleak'] }, next: 'leave', quality: 0, feedback: 'A smell of gas after an earthquake must be treated as a leak. You leave the valve open and the windows shut behind you.' },
      ],
    },
    {
      id: 'leave',
      title: 'Getting out',
      text: 'In the stairwell your torch shows fresh diagonal cracks in the concrete walls and dust in the air. The lift is dead. From Mrs Katz’s flat, silence.',
      options: [
        { id: 'katz', text: 'Stairs, one adult in front and one behind the kids — and knock hard for Mrs Katz on the way. Help her with her frame and coat.', effect: { add: { minutes: 15, morale: 15, energy: -10 }, flags: ['neighbour'] }, next: 'stairs', quality: 2, feedback: 'Stairs, never lifts, after an earthquake. Checking on vulnerable neighbours is one of the most effective things residents do after disasters: professional responders are overwhelmed for hours, and most people rescued in the first hours are rescued by those nearby.' },
        { id: 'skip', text: 'Stairs, family only — the firefighters will check on Mrs Katz.', effect: { add: { minutes: 8, morale: -5 } }, next: 'stairs', quality: 1, feedback: 'Your family’s safety comes first, and it is understandable. But the firefighters will not reach this building for hours, and a 30-second knock could make all the difference to an 82-year-old alone in the dark.' },
        { id: 'stay', text: 'Stay in the flat until daylight — it’s cold outside and the stairwell looks dangerous.', effect: { add: { minutes: 90, warmth: -5, morale: -15 } }, next: 'end-rescued', quality: 0, feedback: 'Structural cracks plus a possible gas leak means get out while you can. At 04:10 a strong aftershock brings down part of the stairwell below your floor.' },
      ],
    },
    {
      id: 'stairs',
      title: 'Aftershock!',
      text: 'Between the 2nd and 1st floors the building jolts again, hard. Plaster rains down. Eli screams.',
      options: [
        { id: 'cover', text: 'Everyone down: crouch against the inner wall, away from the stairwell window, arms over heads and necks, hold on to each other until it stops.', effect: { add: { minutes: 3, morale: 5 } }, next: 'outside', quality: 2, feedback: 'Drop, Cover, Hold On applies wherever you are. Aftershocks are expected — sometimes strong — for days. Protecting heads and necks against falling debris is the priority; then continue down.' },
        { id: 'run', text: 'Run for the exit — it’s only two flights.', effect: { add: { minutes: 2, injury: 25, morale: -10 } }, next: 'outside', quality: 0, feedback: 'Running down stairs while they move is how people fall. Sam, on the injured foot, goes down hard, and Noa is hit by falling plaster.' },
      ],
    },
    {
      id: 'outside',
      title: 'In the street',
      text: 'Neighbours in pyjamas and blankets stand on the pavement right outside the entrance. A power line sags across the road. Glass hangs loose in window frames above.',
      options: [
        { id: 'park', text: 'Lead your group across to the park — your family meeting point — well away from buildings, walls and power lines. Coats on, everyone sits on the go-bag blanket.', effect: { add: { minutes: 20, morale: 15, warmth: -5 } }, next: 'comms', quality: 2, feedback: 'Outside is only safer if you are clear of what can fall: facades, glass, chimneys and power lines. A pre-agreed meeting point means anyone separated knows where to go.' },
        { id: 'entrance', text: 'Stay near the entrance with the neighbours, so you can pop back in for things.', effect: { add: { minutes: 20, injury: 15, morale: -10 } }, next: 'comms', quality: 0, feedback: 'The area right beside a damaged building is the most dangerous outdoors. A piece of facade drops in the next aftershock and cuts your arm.' },
        { id: 'drive', text: 'Get in the car and drive to your aunt’s in the other city.', effect: { add: { minutes: 120, battery: -5, morale: -15, warmth: -10, energy: -10 } }, next: 'comms', quality: 0, feedback: 'After a big quake, roads are cracked, bridges closed pending inspection, and junctions jammed — and emergency vehicles need them. Two hours later you have moved 2 km and turn back to the park.' },
      ],
    },
    {
      id: 'comms',
      title: 'Letting people know',
      text: 'The mobile network is overloaded; calls fail almost every time. Your phones have one or two bars.',
      options: [
        { id: 'text', text: 'Send one text to your out-of-area aunt: “All 4 OK, Sam cut foot bandaged, at park meeting point. Will update 08:00.” Mark yourselves safe if a check-in service is running, then low-power mode. Tune the wind-up radio to the local station for official information.', effect: { set: { minutes: 320 }, add: { battery: -5, morale: 15, rescue: 10 } }, next: 'water', quality: 2, feedback: 'Texts get through congested networks far better than calls and use less battery. One out-of-area contact becomes the hub for the whole family, keeping local lines free. Official broadcasts tell you where water, shelter and medical aid will be.' },
        { id: 'call', text: 'Keep calling family members until you get through to each of them.', effect: { set: { minutes: 320 }, add: { battery: -30, morale: -10 } }, next: 'water', quality: 0, feedback: 'Repeated call attempts drain your battery and add to the overload that stops emergency calls getting through.' },
        { id: 'emergency', text: 'Call the emergency number to get an ambulance for Sam’s foot.', effect: { set: { minutes: 320 }, add: { battery: -10, morale: -5 } }, next: 'water', quality: 1, feedback: 'The bleeding is controlled and Sam can hobble. Tonight emergency lines are needed for life-threatening cases; a first-aid post or clinic in the morning is the right level of care. Call without hesitation if the bleeding restarts and cannot be controlled.' },
        { id: 'gasreport', requiresFlag: 'gasleak', text: 'Find the firefighters at the corner and tell them: gas smell in your 3rd-floor flat, valve not shut off.', effect: { set: { minutes: 320 }, add: { morale: 5 }, clearFlags: ['gasleak'], flags: ['gasoff'] }, next: 'water', quality: 2, feedback: 'Correcting a mistake quickly is what matters. The crew shuts off the building’s gas supply within minutes.' },
      ],
    },
    {
      id: 'water',
      title: 'Day 1, 08:00 — No water',
      text: 'Daylight. The taps are dry; the radio says water may be off for days, and when it returns it will be under a boil-water notice. A distribution point is opening at the school. You have what is left of your bottled water for the four of you — five, if Mrs Katz is with you.',
      options: [
        { id: 'budget', text: 'Drinking and basic hygiene first: about 3–4 L per person per day. Collect water at the school in clean containers, and disinfect anything of doubtful origin — a rolling boil for one minute, or unscented household bleach at the dose on the label with 30 minutes’ contact.', effect: { set: { minutes: 500 }, add: { water: 2000, energy: -10, morale: 10 } }, next: 'sanitation', quality: 2, feedback: 'Budget by use: drinking first, then cooking and hand hygiene, and never drinking water for flushing. Official distribution points are the main supply; boiling or correctly dosed bleach makes doubtful water safe from microbes (not from chemicals).' },
        { id: 'pool', text: 'The apartment block’s swimming pool is full — use that as drinking water.', effect: { set: { minutes: 500 }, add: { water: 1000, morale: 0 } }, next: 'sanitation', quality: 0, feedback: 'Pool water contains chemicals and whatever has fallen in since the pumps stopped. It is useful for flushing and cleaning, not for drinking.' },
        { id: 'flush', text: 'Use the bottled water to wash properly and flush the toilet, then think about drinking water later.', effect: { set: { minutes: 500 }, add: { water: -2500, morale: 5 } }, next: 'sanitation', quality: 0, feedback: 'A single flush uses several litres. You have just spent a day of drinking water on the toilet.' },
      ],
    },
    {
      id: 'sanitation',
      title: 'Day 1, 11:00 — Toilets don’t flush',
      text: 'The school has opened some toilets but the queues are long. Everyone needs the toilet, including a 4-year-old who needs it *now*.',
      options: [
        { id: 'buckets', text: 'Improvise: a bucket lined with two bin bags (or a bag inside the toilet bowl), a little cat litter, sawdust or a disinfectant after each use, bags tied and stored in a lidded bin away from living space; hand-washing with soap and a little water or hand sanitiser, every time.', effect: { set: { minutes: 800 }, add: { morale: 10, water: -200 } }, next: 'shelter', quality: 2, feedback: 'After disasters, diarrhoeal disease spreads through poor sanitation and unwashed hands. Containing waste and keeping hand hygiene is as important as having water.' },
        { id: 'flushwater', text: 'Flush with drinking water — just this once.', effect: { set: { minutes: 800 }, add: { water: -1000, morale: 0 } }, next: 'shelter', quality: 0, feedback: '“Just this once” happens five times a day for five people. Drinking water is the one thing you cannot improvise.' },
        { id: 'bushes', text: 'Use the bushes in the park — everyone else is.', effect: { set: { minutes: 800 }, add: { morale: -5 } }, next: 'shelter', quality: 0, feedback: 'Hundreds of people using the same park turns it into a disease hazard within a day, in the very place families are sheltering.' },
      ],
    },
    {
      id: 'shelter',
      title: 'Day 1, 16:00 — Where to sleep tonight?',
      text: 'The building has not been inspected yet; the stairwell cracks look worse in daylight. The radio lists a community shelter at the sports hall. Night temperatures are near freezing. Aftershocks continue.',
      options: [
        { id: 'hall', hiddenIfFlag: 'neighbour', text: 'Go to the community shelter with the go-bag, bedding and medicines; register, ask for the first-aid post for Sam’s foot, and stay until the building is inspected.', effect: { add: { minutes: 120, warmth: 10, morale: 15, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Do not re-enter a damaged building until it has been inspected. Community shelters give warmth, water, sanitation, medical help and information — and registering helps relatives and authorities account for you.' },
        { id: 'hall-katz', requiresFlag: 'neighbour', text: 'Go to the community shelter with the go-bag, bedding and medicines, and take Mrs Katz with you; register all five of you and tell staff about her medication; ask for the first-aid post for Sam’s foot.', effect: { add: { minutes: 120, warmth: 10, morale: 20, rescue: 20 } }, next: 'end-selfrescue', quality: 2, feedback: 'Registering Mrs Katz and her medication needs makes sure an 82-year-old living alone does not fall through the cracks — exactly the kind of community resource that turns a disaster into something survivable.' },
        { id: 'home', text: 'Go back into the flat to sleep — it’s your home, and it survived.', effect: { add: { minutes: 600, injury: 30, morale: -30 } }, next: 'end-rescued', quality: 0, feedback: 'An uninspected, visibly damaged building during an aftershock sequence. At 03:00 a strong aftershock jams the stairwell door and cracks the ceiling above the children’s beds.' },
        { id: 'car', text: 'Sleep in the car in the park.', effect: { add: { minutes: 600, warmth: -25, morale: -10, energy: -15 } }, next: 'end-survived', quality: 1, feedback: 'Safe from falling buildings, but four people cramped in a cold car at near-freezing temperatures, with an injured foot and a 4-year-old, is a miserable, poorly insulated night — with no medical help, water or information.' },
      ],
    },
    {
      id: 'end-selfrescue',
      title: 'Safe, together, and looked after',
      text: 'By evening you are registered at the sports hall with blankets, water and hot food. Sam’s foot is cleaned and dressed at the first-aid post. Your aunt has told the rest of the family you are all safe.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **protected yourselves during the shaking**, used **torches not flames**, **controlled bleeding with direct pressure**, **dealt with the gas**, got out by the **stairs** and helped a **vulnerable neighbour**, sheltered **away from falling hazards**, **texted one out-of-area contact**, and managed **water and sanitation** from the start. Your plan worked — and your next job is storing the other 43 L of water.' },
    },
    {
      id: 'end-survived',
      title: 'A cold night in the car',
      text: 'The family gets through the night in the car, cold and exhausted. In the morning you move to the sports hall shelter.',
      options: [],
      end: { outcome: 'survived', summary: 'You avoided the worst risks, but **the car was a poor shelter** for an injured adult and two children at near-freezing temperatures. Community shelters exist precisely for this night: warmth, water, sanitation, medical care and information.' },
    },
    {
      id: 'end-rescued',
      title: 'Trapped upstairs',
      text: 'Firefighters reach your floor by ladder hours later and bring everyone down. Nobody is badly hurt, but it is a frightening, cold wait.',
      options: [],
      end: { outcome: 'rescued', summary: 'The decisive error was **staying in, or returning to, a visibly damaged building** during an aftershock sequence. After a strong earthquake: get out when the shaking stops if the building is damaged, and **do not go back in until it has been inspected**.' },
    },
    {
      id: 'end-critical',
      title: 'Gas explosion',
      text: 'The flash burns your face and hands and blows out the kitchen window. Neighbours help you out; you are taken to hospital with serious burns.',
      options: [],
      end: { outcome: 'critical', summary: 'One decision: **an open flame near a suspected gas leak**. After an earthquake, a smell of gas means no flames and no switches — ventilate, shut off the valve if you can, get out, and report it.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------------------------

const scenarioExercise = (id: string, title: string, focus: string[]): Lesson['exercises'][number] => ({
  id,
  title,
  level: 4,
  safety: 'virtual-only',
  minutes: 45,
  steps: [
    'Before starting, write down the 12 questions and answer them from the briefing alone: immediate danger, threats, injuries, water, temperature, shelter, communication, stay or move, resources, next hour, overnight, next highest-value action.',
    'Play the scenario once, making the choices you honestly think you would make. Do not read ahead.',
    ...focus,
    'Play it again deliberately choosing differently at the two decisions that mattered most, and compare the endings, meters and debrief.',
    'Write three sentences: the decision that mattered most, the earlier lesson it came from, and what you would do differently in the real world.',
  ],
  success: [
    'You reach the best ending with a decision quality of at least 80 %.',
    'You can explain *why* each of your choices was rated as it was, naming the underlying principle.',
  ],
})

const cap7: Lesson = {
  id: 'cap-7',
  stage: 19,
  order: 7,
  title: 'Lost at night',
  level: 'expert',
  minutes: 60,
  prerequisites: ['s2-l9', 's8-l7'],
  concepts: ['integration', 'stop', 'stay-or-move', 'stress-control', 'site-selection', 'ground-insulation', 'signaling', 'phone-use'],
  objectives: [
    'Decide **when to stop moving** at night, and explain why darkness changes the stay-or-move balance.',
    'Describe the **limits of night navigation**: dark adaptation, what stars and Moon can and cannot tell you, travel rates over rough ground.',
    'Use **stress-control** techniques and structure to get through a long, frightening night.',
    'Build an **improvised bivouac** with ground insulation and choose a site that avoids cold-air pools and is findable.',
    'Use the phone for **one decisive message** and signal effectively when searchers approach.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

October, forested uplands, **18:15** and fully dark. A clear, calm night heading for 0 °C. Your path vanished into wind-thrown trees; your headlamp is failing; your phone (your only map) is at 30 %. You are alone, and the one person expecting you knows only "the hills".

This capstone is about a single hard question: **when do you stop moving?** Almost everything else — the bivouac, the phone call, the signals, the long cold hours — follows from getting that one right.

### Why night changes everything

In daylight, a bounded attempt to relocate is often sensible. At night the same attempt costs far more:

- **Travel rates collapse.** Over rough ground by poor light you may cover 3–5 m per minute — a 300 m gap becomes an hour of falls.
- **You cannot see hazards.** Edges, holes, stream banks and branch stubs cause most night injuries.
- **Your brain is working against you.** Fatigue and sleep loss degrade judgment; fear pushes you to move "anywhere".
- **Your insulation is at risk.** Stumbling hard work makes you sweat into the only layers you will have at 03:00.

Meanwhile, a **calm, dry night at 0 °C** is survivable with modest insulation if you stop early enough to build it. That asymmetry is the whole lesson.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Stop before the light or terrain forces you to', 'Stage 1 · Situation assessment: STOP; Emergency decision making'],
        ['Ignore the urge to "just move"', 'Stage 1 · Survival mindset and stress; Stage 15 · Fear, panic and freezing'],
        ['Stars give direction, not footing', 'Stage 2 · Stars and Moon; When navigation fails'],
        ['Night-time judgment and fatigue', 'Stage 8 · Sleep, fatigue and cognition'],
        ['Site above the cold-air pool, away from dead trees', 'Stage 1 · Basic shelter; Stage 5 · Site selection in depth'],
        ['Thick ground bed; sack as vapour/wind barrier', 'Stage 1 · Your body’s heat budget; Stage 5 · Shelter design principles'],
        ['One message with coordinates, then battery discipline', 'Stage 1 · Emergency signaling; Stage 14 · Radio, satellite and beacons'],
        ['Stay put and signal when searchers approach', 'Stage 14 · How searches work; Stay or move'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-7', caption: 'Capstone 7: lost at night with a failing headlamp. Your choices change time, warmth, energy, morale, battery, injury and the chance of being found.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire at night in a forest',
      md: 'Many forests and parks prohibit open fires, especially in dry seasons. Where life is genuinely at risk, protecting it comes first — but you remain responsible for keeping any fire small, attended, on bare mineral soil or rock, and **dead out** (cold to the back of your hand) before you leave. Check local rules before every trip.',
    },
  ],
  whyItMatters: 'Many lost-person incidents turn from inconvenient to serious after dark, when people keep moving on steep or broken ground with poor light. Search managers consistently find that people who stop, insulate and make themselves findable are recovered in better condition than those who travel at night. The judgment to stop — and the skills to make stopping comfortable — is what this capstone trains.',
  science: [
    {
      type: 'md',
      md: `### Dark adaptation

The eye adapts to darkness in two stages: the cones within about 5–10 minutes, then the much more sensitive rods over **roughly 20–30 minutes**. A single glance at a bright white light resets much of that. Red or dim light preserves it better. Even fully adapted, you see shapes and sky gaps — not roots, holes or wet rock.

### Why hollows are coldest on clear nights

On a clear, calm night the ground radiates heat to the sky and chills the air above it. That cold, dense air **drains downslope** and pools in hollows and valley bottoms, which can be several degrees colder than a slight rise a few tens of metres away.

### Search area and movement

If you might be anywhere within radius $r$ of your last known point, the area to search is $\\pi r^2$. Walking on at night from $r = 0.5$ km to $r = 1.5$ km multiplies that area by $(1.5/0.5)^2 = 9$ — nine times more ground for searchers to cover in the dark.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Temperate forest:** the scenario pattern — windthrow, fading light, stream noise below. Stop on a rise under living trees; ground bed from needles and leaves.

**Desert:** night travel is sometimes *recommended* to avoid heat, but only on known, open, even terrain with a light and a clear objective; off-route in rocky washes the same fall risks apply.

**Mountain:** a benighted party on a ridge should stop at the first safe ledge rather than downclimb unknown ground by headlamp; clip in or sit well back from edges.

**Subarctic/arctic:** long nights mean stopping is often not optional. Early camp while you still have daylight and dexterity is the survival skill.

**Coastal:** tides and cliff edges make night movement especially dangerous; move above the high-water line and stop.

**Urban/rural fringe:** lights and road noise can be kilometres away across farmland ditches, fences and rivers; being able to *see* a light does not mean you can reach it safely.`,
    },
  ],
  mistakes: [
    'Using the last of a failing headlamp on maximum to keep searching, instead of saving it for camp work.',
    'Following a stream downhill in the dark "because water leads out" — streams cut the steepest ground.',
    'Believing that finding Polaris solves the problem: direction is rarely what stops you at night; footing is.',
    'Camping in the flat, soft hollow by the stream — the coldest spot on a clear night, and too noisy to hear searchers.',
    'Keeping the phone on all night waiting for a call, or using it as a torch, then having no battery when it matters.',
    'Running toward searchers’ lights instead of staying put and signaling.',
    'Myth: "keep moving all night to stay warm" — you run out of fuel and sweat into your insulation.',
  ],
  exercises: [
    scenarioExercise('cap-7-e1', 'Play the night-lost capstone', [
      'On your first run, note the clock time at which you decided to stop moving. On your second run, try to stop earlier and see how warmth, energy and injury differ at 22:30.',
    ]),
    {
      id: 'cap-7-e2',
      title: 'Dusk sit-out drill on a familiar trail',
      level: 4,
      safety: 'outdoor',
      minutes: 120,
      materials: ['A partner', 'Two working headlamps with spare batteries', 'Sit pad and a large bag or bivy bag each', 'Warm layers, hat, water, food', 'Whistle', 'Charged phone'],
      safetyNote: 'Choose a familiar, easy, well-used trail within 15 minutes of a road, in mild, dry weather, with someone at home who knows your plan and return time. Stay on the trail: never practise off-trail travel in the dark. No fires. Stop the drill if anyone gets cold.',
      steps: [
        'Arrive before sunset and walk 10–15 minutes along a trail you know well. Note the time of sunset and of full darkness.',
        'At full dark, switch both headlamps off for 20 minutes. Every 5 minutes, write down what you can and cannot see (sky gaps, trunks, the trail surface, your feet).',
        'Switch one light on for 10 seconds, off again, and note how much night vision you lost.',
        'Set up a sit-out beside the trail: pad plus a pile of leaf litter underneath, bag over your body, hat on. Sit for 30 minutes and note where you feel cold first.',
        'Practise whistle and light signals in threes to your partner from 50 m apart; practise sending a location message in airplane-mode-off/on discipline.',
        'Walk out on the trail with lights on and debrief: what would you have needed to spend the whole night there?',
      ],
      success: [
        'You can describe from experience how little you can see without a light, even when fully dark-adapted.',
        'You felt the difference an insulating layer under you makes within the first 10 minutes.',
        'You can signal and send your coordinates in under 2 minutes by feel and dim light.',
      ],
      skill: 'first-hour',
    },
  ],
  simulations: ['scenario-cap-7'],
  quiz: [
    {
      id: 'cap-7-q1',
      kind: 'single',
      prompt: '19:00, fully dark, clear and calm, 2 °C forecast to fall to −1 °C. You are uninjured, 300 m from a marked trail across wind-thrown trees, with a failing headlamp, warm layers, a pad and a large bag. Your coordinates have been sent to the emergency services. What is the best plan?',
      choices: [
        { id: 'a', text: 'Cross the 300 m to the trail by phone torch — it is very close.', why: '300 m of windthrow at night can take an hour of falls and drains the phone you need for contact.' },
        { id: 'b', text: 'Stop here, make a thick ground bed on a slight rise, and stay put.', why: 'Best: low risk, reversible, keeps you where rescuers expect you, and the night is survivable with insulation.' },
        { id: 'c', text: 'Walk on toward a road 3 km away using the stars for direction.', why: 'Direction is not the problem at night; footing and hazards are. You would also leave your reported position.' },
        { id: 'd', text: 'Keep walking in a small circle all night to generate body heat.', why: 'You would exhaust your energy and sweat into your insulation.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'reversibility'],
      explanation: 'At night the risks of moving over unseen ground usually outweigh the risks of a calm, cold night with insulation — especially once someone knows where you are. Pick a slight rise under living trees and build a thick ground bed.',
    },
    {
      id: 'cap-7-q6',
      kind: 'single',
      prompt: 'At 23:00 you are shivering in your bivouac, frightened by noises, with an overwhelming urge to "just go". What helps most?',
      choices: [
        { id: 'a', text: 'Slow breathing, calm self-talk, and small tasks like eating and a scheduled phone check.', why: 'Best: a long exhale damps the stress response, and small tasks give the mind structure and control.' },
        { id: 'b', text: 'Walk out by phone light so the fear stops building.', why: 'Fear is real, but moving in the dark adds real danger.' },
        { id: 'c', text: 'Keep the phone on and scroll until dawn to distract yourself.', why: 'Helps a little with boredom but drains your lifeline.' },
        { id: 'd', text: 'Try hard to push the fear out of your mind and not think about it.', why: 'Suppression rarely works; structure and breathing do better.' },
      ],
      answer: 'a',
      concepts: ['stress-control', 'stress'],
      explanation: 'Structured routines and breathing with a long exhale are the practical tools for managing fear on a long night: eat, sip water, adjust insulation, keep to the phone schedule.',
    },
    {
      id: 'cap-7-q2',
      kind: 'single',
      prompt: 'Clear, calm night. Which bivouac site is **best**?',
      choices: [
        { id: 'a', text: 'A slight rise under living trees, beside a small opening', why: 'Best: above the cold-air pool, sheltered from radiation to the sky, no widowmakers, and visible to lights or aircraft.' },
        { id: 'b', text: 'Beside a loud stream on the valley floor, so water is close', why: 'Hollows by streams are cold and damp, and the noise masks whistles and voices.' },
        { id: 'c', text: 'On the bare top of a rock outcrop, where you can be seen', why: 'Rock conducts heat away and catches any breeze; signal from it, sleep beside it.' },
        { id: 'd', text: 'In the bottom of a hollow, out of sight of the wind', why: 'On clear nights cold air drains into hollows and pools there.' },
      ],
      answer: 'a',
      concepts: ['site-selection', 'visibility'],
      explanation: 'Warmth, safety and findability together: above the cold pool, under living cover with no dead limbs overhead, beside an opening.',
    },
    {
      id: 'cap-7-q4',
      kind: 'single',
      prompt: 'You realise at dusk that you are lost and your light is failing. What should you do **first**?',
      choices: [
        { id: 'a', text: 'Stop, sit, and slow your breathing', why: 'Correct: stop the errors before anything else.' },
        { id: 'b', text: 'Add layers and a hat, and eat something', why: 'Important, and next — but only once you have stopped and calmed down.' },
        { id: 'c', text: 'Get a position fix and send it with a status', why: 'Third: tell someone once you are calm and not losing heat.' },
        { id: 'd', text: 'Choose a site and start building a ground bed', why: 'Comes after you have stopped, layered up and sent your position.' },
      ],
      answer: 'a',
      concepts: ['stop', 'priorities', 'phone-use'],
      explanation: 'The order is: stop and breathe; add layers and eat; send one fix and status, then airplane mode; build a site and ground bed; set a schedule for phone checks and signals. Stop the errors, stop the heat loss, tell someone, then build protection.',
    },
    {
      id: 'cap-7-q3',
      kind: 'single',
      prompt: 'Searchers believe you are within 0.5 km of your last known point. You walk on through the night and could now be anywhere within 1.5 km. By what **factor** has the possible search area grown?',
      choices: [
        { id: 'a', text: '3×', why: 'That is the ratio of the radii; area grows with the square of the radius.' },
        { id: 'b', text: '9×', why: 'Correct: (1.5 / 0.5)² = 3² = 9.' },
        { id: 'c', text: '8×', why: 'That counts only the new ring added outside the original circle, not the whole area.' },
        { id: 'd', text: '2.25×', why: 'That squares 1.5 without dividing by the original 0.5 km radius.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'visibility'],
      explanation: 'Area ∝ r². $(1.5 / 0.5)^2 = 3^2 = 9$. Moving at night can multiply the search problem while making it harder for you to be seen.',
    },
    {
      id: 'cap-7-q5',
      kind: 'single',
      prompt: 'You may need to spot searchers’ lights later tonight. Which statement about night vision is correct?',
      choices: [
        { id: 'a', text: 'Dark adaptation takes 20–30 minutes; seconds of bright white light undo much of it.', why: 'Correct: rods need 20–30 minutes to reach high sensitivity, and bright light bleaches them.' },
        { id: 'b', text: 'Dark adaptation is complete in about two minutes, so bright light costs little.', why: 'It takes 20–30 minutes, which is why protecting it matters.' },
        { id: 'c', text: 'Once your eyes have fully adapted, brief bright light no longer affects them.', why: 'A few seconds of bright white light undoes much of the adaptation.' },
        { id: 'd', text: 'Dim red light and bright white light affect adapted eyes about equally.', why: 'Dim or red light is the way to keep your eyes adapted.' },
      ],
      answer: 'a',
      concepts: ['decisions'],
      explanation: 'Rods take 20–30 minutes to reach high sensitivity; bright light bleaches them. Use dim or red light, and keep your eyes adapted if you need to see searchers’ lights.',
    },
  ],
  scenario: {
    id: 'cap-7-sc',
    setup: 'It is 21:30. You are in a reasonable bivouac on a forested slope; your position has been sent to the emergency services, who told you to stay put. Far below, perhaps 2 km away across unknown forest and a river, you can see car headlights moving on a road.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Head for the road — you can see exactly where it is.', why: 'Seeing a light is not the same as reaching it: unknown slopes, a river and darkness lie between, and you would leave the position rescuers are heading for.' },
      { id: 'b', text: 'Stay in the bivouac; keep warm; turn the phone on at the agreed time; signal with light and whistle when searchers are near.', why: 'Best: you stay where you told rescuers you would be, and you conserve warmth and battery.' },
      { id: 'c', text: 'Flash your light at the cars continuously until someone stops.', why: 'Drivers will not interpret it, and you drain your light.' },
      { id: 'd', text: 'Pack up and move a few hundred metres downhill toward the road, so you are closer when help comes.', why: 'Even a short move puts you on unseen ground and away from the position you reported.' },
    ],
    best: 'b',
    debrief: 'Once someone knows where you are, **your position is the rescue plan**. Moving toward distant lights at night is a classic trap: the terrain between is unseen and often much harder than it looks, and every metre makes you harder to find.',
    concepts: ['stay-or-move', 'signaling'],
  },
  summary: [
    'At night, stop early: the ground, not the map, decides travel time and risk.',
    'Stars and Moon give direction; they do not make broken ground safe.',
    'Choose a site above cold-air pools, under living trees, near an opening; build a thick ground bed.',
    'One message with coordinates beats hours of battery used as a torch.',
    'Manage fear with breathing, facts and small tasks; stay put and signal when help comes.',
  ],
  furtherReading: ['koester-lpb', 'deep-survival'],
  references: ['koester-lpb', 'leach-survival-psych', 'deep-survival', 'army-atp-3-50-21', 'freedom-hills', 'mra', 'wms-hypothermia-2019'],
}

const cap8: Lesson = {
  id: 'cap-8',
  stage: 19,
  order: 8,
  title: 'Unexpected overnight stay',
  level: 'expert',
  minutes: 60,
  prerequisites: ['s5-l3', 's3-l7'],
  concepts: ['integration', 'daylight', 'clothing', 'insulation', 'ground-insulation', 'heat-balance', 'fire-safety', 'trip-plan'],
  objectives: [
    'Recognise from an honest **daylight budget** when an unplanned night out is the safer option.',
    'Build an **improvised bivouac** from a light day kit: ground insulation first, then a wind and water barrier.',
    'Manage **damp clothing** and a night-long **heat budget** with food, water and posture.',
    'Decide about **fire** on the basis of need, law and ground conditions — not habit.',
    'Update a **trip plan** so a safe night out does not trigger an unnecessary search.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

A 16 km day loop has become 20 km. At **18:30** you are on a misty shoulder, 7 km from the car, with 35 minutes of light and a steep, wet gully between you and the valley. The night will be mild (about 6 °C) but saturated, with drizzle and a sea breeze. Your kit is light: a showerproof softshell, a thin fleece, a spare dry merino top, two rubbish sacks, a foil blanket, 500 ml of water, a little food. You are in a national park where open fires are banned, on deep peat. Your partner holds your trip plan, with "call the police at 21:00" written on it.

The skill here is not heroics. It is **choosing the night deliberately**, then running a small, careful heat budget for twelve hours.

### The heat budget, in plain words

Sitting still, you produce roughly 80–100 W of heat. Overnight you lose it by **conduction** (into the ground — usually the biggest loss when you sit or lie), **convection** (wind), **evaporation** (damp clothes and breath) and **radiation** (to a clear sky). Every choice in this capstone changes one of those terms: a bed cuts conduction, a sack cuts convection and wetting, a dry base layer cuts evaporative loss, food fuels shivering.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Refuse the wet gully in the dark', 'Stage 1 · Risk management; Emergency decision making'],
        ['Update the trip plan with a new alarm time', 'Stage 1 · Thinking like a survivor (trip plans); Emergency signaling'],
        ['Lee site, slightly raised, out of the wet', 'Stage 5 · Site selection in depth'],
        ['Sacks as bivy and poncho; bed before roof', 'Stage 5 · Tarp configurations; Shelter design principles'],
        ['Dry layer at the stop, not on the move', 'Stage 1 · Clothing and environmental protection; Stage 8 · Heat-loss mechanisms quantified'],
        ['Fire only if genuinely needed, and legal', 'Stage 3 · Heating and reflecting; Fire safety, law and impact'],
        ['Food and shivering through the coldest hours', 'Stage 8 · Energy metabolism; Hypothermia'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-8', caption: 'Capstone 8: a day hike turns into an unplanned night out with a light kit.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire bans, peat and responsibility',
      md: 'Parks and moorland often prohibit open fires outright, and **peat can burn underground for days**, re-emerging far from where it started. Where a fire is truly needed to protect life, keep it tiny, on bare rock or mineral soil, attended, and dead out before you leave — and report it. On a mild night with insulation, it is almost never needed. Leave No Trace: scatter bedding material in the morning.',
    },
  ],
  whyItMatters: 'Most unplanned nights out begin as ordinary day walks that run late. The people who come through them well are those who stop in daylight, while they can still choose a site and build insulation, and who tell someone. The people who get hurt usually try to force the last hour in the dark.',
  science: [
    {
      type: 'md',
      md: `### A worked heat-deficit example

Suppose you produce $P = 100\\ \\text{W}$ sitting still but lose $L = 130\\ \\text{W}$ in your bivouac. The deficit is $L - P = 30\\ \\text{W}$ — thirty joules every second. Over a 10-hour night:

$$E = 30\\ \\text{W} \\times 36{,}000\\ \\text{s} = 1{,}080{,}000\\ \\text{J} \\approx 1{,}080\\ \\text{kJ} \\approx 258\\ \\text{kcal}$$

Your body covers that by shivering (which needs fuel) and by letting skin and limbs cool. Cut the loss to 110 W with a thicker bed and a dry base layer and the deficit falls by two-thirds — which is why insulation beats almost everything else on a mild, damp night.

### Why damp clothing matters so much

Water conducts heat roughly 25 times better than still air, and damp fabric keeps evaporating — each gram of water evaporated takes about 2.4 kJ with it. A sweaty T-shirt worn all night can cost more heat than the breeze.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Coastal moor (the scenario):** mild, saturated, breezy — wetting and wind are the enemies; sacks and a lee site are the answers.

**Temperate forest:** leaf litter and needles make excellent beds; a tarp or sacks as roof; fire rules vary widely by season.

**Mountain:** above the treeline there is little bed material; sit on rope, pack and pad; get out of the wind behind boulders; never force a descent in the dark.

**Desert:** unplanned nights can be surprisingly cold under clear skies; sand is a poor insulator when damp but digging a shallow scoop and lining it helps; darkness also brings cooler travel — only on known ground.

**Subarctic:** the same principles, but the margins are small: an emergency bivy bag and a sleeping pad are essential kit, not luxuries.

**Tropical:** the threat is wetting and insects more than cold; get off the ground, keep one dry layer for the night.`,
    },
  ],
  mistakes: [
    'Racing the last of the light down steep, wet ground rather than stopping while you can still prepare.',
    'Not updating the person holding your trip plan, causing an unnecessary night search.',
    'Keeping the dry spare layer "for later" and sleeping in a sweat-soaked one.',
    'Wrapping in a foil blanket on bare wet ground — conduction into the ground is the bigger loss.',
    'Spending the last light on an elaborate structure instead of a thick bed.',
    'Lighting a fire on peat or where fires are banned, "for morale".',
    'Myth: "space blankets reflect 90 % of your body heat, so they are enough on their own."',
  ],
  exercises: [
    scenarioExercise('cap-8-e1', 'Play the unexpected-overnight capstone', [
      'On one run, choose the forestry-track option and on another the bivouac. Compare the risks each carries and what each depends on (dry layers, messaging, energy).',
    ]),
    {
      id: 'cap-8-e2',
      title: 'Garden bivouac with a day-hike kit',
      level: 4,
      safety: 'home',
      minutes: 180,
      materials: ['Your normal day-hike pack and clothing', 'Two large rubbish sacks', 'Foil blanket', 'Sit pad', 'A thermometer', 'Notebook'],
      safetyNote: 'Do this in your own garden, yard or balcony on a mild, dry night, with the house a few steps away as a bail-out. No fire. Stop immediately if you start shivering hard or anyone feels unwell; children and anyone with a medical condition should not take part.',
      steps: [
        'At dusk, with only the kit you normally carry on a day hike, set up a bivouac: bed of garden leaves or cardboard under the pad, legs in one sack, the other as a hooded poncho with a face hole.',
        'Record the air temperature at the start and every 30 minutes.',
        'Sit for 30 minutes wearing a slightly damp T-shirt under your layers (spray it lightly), then change into a dry one. Note the difference in how you feel after 10 minutes.',
        'Remove the bed for 10 minutes and sit on the pad alone, then on bare ground. Note where you get cold first.',
        'After two to three hours, go inside and write down exactly what you would add to your day pack to make a full night acceptable.',
      ],
      success: [
        'You can state from experience which change mattered most: bed, dry layer, or windproof outer.',
        'Your day kit now includes at least one improvement you identified.',
      ],
      skill: 'clothing-system',
    },
  ],
  simulations: ['scenario-cap-8'],
  quiz: [
    {
      id: 'cap-8-q4',
      kind: 'single',
      prompt: '18:30, 35 minutes of daylight left, 300 m of steep, wet gully between you and easy ground. Mild weather, spare layers, sacks. Which reasoning is soundest?',
      choices: [
        { id: 'a', text: 'Descend now: most of the gully will be behind you before it is fully dark.', why: 'The hardest part would be done by headlamp on the most dangerous ground, when you are most tired.' },
        { id: 'b', text: 'Stay high: a mild night out is uncomfortable, a gully fall could be disastrous.', why: 'Best: it compares consequences, not just likelihoods.' },
        { id: 'c', text: 'Descend quickly to beat the dark, since speed shortens your time on the rock.', why: 'Hurry on wet rock multiplies injury risk.' },
        { id: 'd', text: 'Start down now and stop partway if the wet rock becomes too difficult.', why: 'Being stuck on steep, wet ground at dark is worse than either bivouacking above or finishing in daylight.' },
      ],
      answer: 'b',
      concepts: ['daylight', 'risk'],
      explanation: 'Risk is likelihood × consequence. A likely but mild discomfort beats a less likely but severe injury.',
    },
    {
      id: 'cap-8-q1',
      kind: 'single',
      prompt: 'You stop for an unplanned night. Your T-shirt is damp with sweat; you have a dry merino top in your pack. What should you do?',
      choices: [
        { id: 'a', text: 'Change into the dry top next to your skin now, with insulation and a shell over it; bag the damp one.', why: 'Best: dry next to skin, insulation over, windproof outside — for the whole night.' },
        { id: 'b', text: 'Put every layer over the damp T-shirt and keep the dry top for tomorrow.', why: 'You would spend twelve hours losing extra heat to a wet layer you could remove.' },
        { id: 'c', text: 'Take off your jacket so the T-shirt dries in the breeze.', why: 'Evaporative drying on your body takes the heat from you.' },
        { id: 'd', text: 'Wait until you start shivering, then change.', why: 'Changing while still warm is easier and quicker; waiting wastes heat.' },
      ],
      answer: 'a',
      concepts: ['clothing', 'insulation'],
      explanation: 'The moment you stop is when a dry layer is worth most: sweat production drops and the damp layer becomes a heat sink.',
    },
    {
      id: 'cap-8-q2',
      kind: 'single',
      prompt: 'On a mild, damp, breezy night in a light bivouac, which measure does **NOT** meaningfully reduce heat loss?',
      choices: [
        { id: 'a', text: 'A thick, dry bed of heather or leaves under you', why: 'It does help: it cuts conduction, often the biggest loss when stationary.' },
        { id: 'b', text: 'A rubbish sack as a windproof, waterproof outer layer', why: 'It does help: it cuts convection and wetting.' },
        { id: 'c', text: 'A foil blanket as your only layer over the wet ground', why: 'Correct: foil barely resists conduction into wet ground.' },
        { id: 'd', text: 'Eating some food before the coldest hours of the night', why: 'It does help: food fuels heat production and shivering.' },
      ],
      answer: 'c',
      concepts: ['heat-loss', 'ground-insulation', 'heat-balance'],
      explanation: 'Insulate from the ground with a thick dry bed, block wind and wet, and fuel the furnace. Foil alone does little against conduction into wet ground.',
    },
    {
      id: 'cap-8-q6',
      kind: 'single',
      prompt: 'You are building an improvised bivouac from a day kit and have chosen a slightly raised site out of the wind. What should you do **next**?',
      choices: [
        { id: 'a', text: 'Build a thick insulating bed', why: 'Comes next after dry layers — change before you cool down.' },
        { id: 'b', text: 'Change into dry layers next to the skin', why: 'Correct: dry skin before you cool down.' },
        { id: 'c', text: 'Get into the windproof outer layer', why: 'Comes after the bed: ground before roof.' },
        { id: 'd', text: 'Arrange food, water and a night plan', why: 'The last step, once you are dry, insulated and wrapped.' },
      ],
      answer: 'b',
      concepts: ['site-selection', 'ground-insulation', 'clothing'],
      explanation: 'Site first; dry skin before you cool down; then a thick bed (ground before roof); then the windproof outer; then settle in with food, water and a plan for the coldest hours.',
    },
    {
      id: 'cap-8-q5',
      kind: 'single',
      prompt: 'You lit a small fire on moorland with deep peat, and it now looks completely out on the surface. Which statement is correct?',
      choices: [
        { id: 'a', text: 'It can still be smouldering underground and re-emerge elsewhere.', why: 'Correct: peat can smoulder below the surface for days.' },
        { id: 'b', text: 'With no smoke or flame on the surface, the fire is fully out.', why: 'Peat fires can burn on unseen beneath the surface.' },
        { id: 'c', text: 'Peat is too wet to burn, so only the heather could have caught.', why: 'Peat itself burns and can smoulder for days.' },
        { id: 'd', text: 'An underground peat fire dies within an hour of surface flames.', why: 'Peat can smoulder below the surface for days.' },
      ],
      answer: 'a',
      concepts: ['fire-safety'],
      explanation: 'Peat can smoulder below the surface for days and re-emerge elsewhere. That is one reason for fire bans on moorland.',
    },
    {
      id: 'cap-8-q3',
      kind: 'single',
      prompt: 'Sitting still you produce 100 W but lose 130 W. How many **kilocalories** does that 30 W deficit add up to over a 10-hour night? (1 kcal ≈ 4,184 J)',
      choices: [
        { id: 'a', text: '≈ 258 kcal', why: 'Correct: 30 J/s × 36,000 s ÷ 4,184.' },
        { id: 'b', text: '≈ 1,080 kcal', why: 'That is 1,080 kJ — the joules were not converted to kilocalories.' },
        { id: 'c', text: '≈ 1,118 kcal', why: 'That uses the whole 130 W loss instead of the 30 W deficit.' },
        { id: 'd', text: '≈ 4.3 kcal', why: 'That multiplies by 600 minutes instead of 36,000 seconds.' },
      ],
      answer: 'a',
      concepts: ['heat-balance'],
      explanation: '30 J/s × 36,000 s = 1,080,000 J ÷ 4,184 ≈ **258 kcal** that must come from shivering and cooling tissues. Cutting losses shrinks this directly.',
    },
  ],
  scenario: {
    id: 'cap-8-sc',
    setup: 'You have decided to bivouac on the hill. Your partner has your trip plan, which says "back by 20:00; if no contact by 21:00, call the police". It is 19:00 and you have one bar of signal.',
    question: 'What message do you send?',
    choices: [
      { id: 'a', text: '"Running late, don’t worry."', why: 'Vague: no position, no plan, no new alarm time — your partner does not know when to worry.' },
      { id: 'b', text: '"Safe and uninjured at [position]. Staying out tonight rather than descend the gully in the dark. Walking out at first light, ~07:00. If no word by 10:00, call the police and give them this position."', why: 'Best: position, status, plan, and a new, specific alarm time.' },
      { id: 'c', text: 'No message — you’ll be home before anyone really worries.', why: 'The plan says 21:00. A rescue team will be paged for someone who is fine.' },
      { id: 'd', text: '"Lost, please send help."', why: 'Inaccurate: you are not lost or in need of rescue, and it triggers a night call-out.' },
    ],
    best: 'b',
    debrief: 'A trip plan is a living document. **Position, status, intention, and a new alarm time** turn an uncomfortable night into a non-event — and if something does go wrong later, the search starts in the right place.',
    concepts: ['trip-plan', 'phone-use'],
  },
  summary: [
    'Stop while there is light to choose a site and build insulation.',
    'Ground first: a thick bed cuts the biggest overnight loss.',
    'Dry layer next to skin at the stop; shell and sacks outside.',
    'Fire is a tool, bounded by need, law and ground — not a ritual.',
    'Update your trip plan with position, plan and a new alarm time.',
  ],
  furtherReading: ['usariem-cold', 'lnt-principles'],
  references: ['usariem-cold', 'parsons-thermal', 'lundin-986', 'wms-hypothermia-2019', 'lnt-principles', 'usfs-fire', 'smokey-campfire', 'kochanski-bushcraft'],
}

const cap9: Lesson = {
  id: 'cap-9',
  stage: 19,
  order: 9,
  title: 'Navigation failure',
  level: 'expert',
  minutes: 60,
  prerequisites: ['s2-l12'],
  concepts: ['integration', 'stop', 'decisions', 'reversibility', 'human-factors', 'stay-or-move', 'wet-wind', 'daylight'],
  objectives: [
    'Anchor relocation on a **last known point** and a bounded estimate of where you could be.',
    'Use **terrain association, handrails and catching features** when the compass is gone.',
    'Apply **aiming off** so that meeting a linear feature tells you which way to turn.',
    'Keep **dead reckoning** by pace count and time, with a distance limit that triggers a rethink.',
    'Decide **when to stop and sit tight**, and how to set a trigger so waiting stays a plan.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

A broad moorland plateau, **13:10**, hill fog with 30 m visibility and a steady westerly breeze. You left a small lochan 15 minutes ago, heading for a summit — and you have just realised your compass is gone. Your phone died in the cold an hour ago. The map shows crags along the northern edge, a long wall across the south with your descent path crossing it at a gate, and a stream on the east side that drops into a ravine below the wall.

This capstone asks you to navigate with **the land itself**: what you know about where you have been, how far and how long you have walked, which way the ground tilts, and which long features you cannot miss.

### Tools without a compass

- **Last known point:** the lochan. Everything is relative to it.
- **Dead reckoning:** distance ≈ speed × time, cross-checked by pace count. On rough moor, about 3 km/h.
- **Catching features:** long lines across your path (a wall, a river, a road) that stop you overshooting.
- **Handrails:** lines you follow (a stream, a wall, a fence, a path).
- **Aiming off:** deliberately aiming to one side of your target on a catching feature, so you know which way to turn when you hit it.
- **Crude direction:** a steady wind (cross-checked, because it can shift), the fall of the slope, intermediate aiming points at the edge of visibility.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Stop and anchor on the last known point', 'Stage 1 · Situation assessment: STOP; Stage 2 · When navigation fails'],
        ['Wall as catching feature; aiming off', 'Stage 2 · Terrain association and handrails'],
        ['Pace count, time and distance limit', 'Stage 2 · Pacing, timing and dead reckoning'],
        ['Edges and relocation from unique features', 'Stage 2 · Reading topography; Triangulation and relocation'],
        ['Wind and slope as crude direction', 'Stage 2 · Natural navigation'],
        ['Avoiding "downhill leads out" and ravines', 'Stage 12 · Avalanches, rockfall and landslides; Stage 1 · Risk management'],
        ['Wait with a trigger, not indefinitely', 'Stage 1 · Emergency decision making; Stage 14 · Stay or move'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-9', caption: 'Capstone 9: compass lost, phone dead, fog on a plateau. Relocate with terrain alone.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Edges in fog',
      md: 'On plateaus, the most dangerous feature is often the edge you cannot see. If the ground starts to steepen unexpectedly in poor visibility, **stop and back off** — then use the edge as information. Never descend steep ground you cannot see the bottom of.',
    },
  ],
  whyItMatters: 'Equipment fails: compasses are dropped, phones die in the cold, GPS units lose batteries. Most navigators who get into trouble after an equipment failure do so because they keep walking on instinct. A navigator who understands terrain, time and distance can still get down safely — or knows when to stop.',
  science: [
    {
      type: 'md',
      md: `### Dead reckoning in numbers

If your 100 m pace count on rough moor is 70 double-paces, a 1.2 km leg is:

$$\\text{paces} = 70 \\times \\frac{1{,}200\\ \\text{m}}{100\\ \\text{m}} = 840\\ \\text{double-paces}$$

At about 3 km/h, the same leg takes $1.2 / 3 = 0.4$ h = **24 minutes**. Using both, with a limit (say 1,600 m or 40 minutes), catches large errors — such as having started further north than you thought.

### Why aiming off works

Heading straight for a gate on a wall, even a small directional error (a few degrees) leaves you unsure whether you are left or right of it. Aiming off by more than your likely error — say 10–15° to one side — guarantees you arrive on a known side. The cost is a short walk along the wall; the gain is certainty.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Moorland/plateau (the scenario):** walls, fences and streams are the catching features and handrails; edges are the hazard.

**Forest:** roads, rivers and power-line cuttings make excellent catching features; aim off to a known side of a trail junction.

**Mountain:** ridgelines and valley floors are handrails — but gullies and cliffs interrupt them; use them only where the map shows safe ground.

**Desert:** a road or a pipeline can be a 100-km catching feature; aim off so you know which way the nearest junction or settlement lies.

**Arctic/whiteout:** almost no features; stop, shelter, and wait for visibility unless you have a proven handrail such as a flagged route.

**Coastal:** the shoreline is a huge handrail, but tides, cliffs and inlets make following it hazardous; know the tide times.`,
    },
  ],
  mistakes: [
    'Walking on "by feel" after losing the compass — people drift in curves while feeling sure they are going straight.',
    'Searching for a lost item without a time limit.',
    'Myth: "walk downhill and you will reach safety" — on plateaus and in hill country, the steepest downhill is often a crag or ravine.',
    'Following a wall or stream without knowing which way it leads relative to your goal.',
    'Walking without a distance or time limit, so you pass the feature you were looking for.',
    'Waiting for fog to lift with no trigger, until darkness decides for you.',
  ],
  exercises: [
    scenarioExercise('cap-9-e1', 'Play the navigation-failure capstone', [
      'Before choosing a strategy, sketch the plateau from the briefing: lochan, crags, wall, gate, stream. Mark your likely position as a circle, not a point.',
    ]),
    {
      id: 'cap-9-e2',
      title: 'Terrain-only leg with backup',
      level: 4,
      safety: 'outdoor',
      minutes: 120,
      materials: ['A 1:25,000 or 1:50,000 map of a familiar, easy area', 'A partner who carries a compass and GPS/phone as backup', 'Watch', 'Pencil'],
      safetyNote: 'Do this in good visibility and settled weather, on familiar, gentle terrain with no cliffs or dangerous water, with a partner who keeps a working compass and GPS and can take over at any time. Never practise navigation without backup in fog or near edges.',
      steps: [
        'Before you set off, measure your pace count over a known 100 m on the kind of ground you will walk.',
        'Choose a 1–1.5 km leg that ends on a long catching feature (a wall, fence, track or stream) with a specific target point on it.',
        'Hand your compass to your partner. Plan the leg by terrain only: note the slope direction, any handrails, and aim off deliberately to one side of your target.',
        'Walk the leg counting paces and noting time. Set a limit: if you have walked 30 % further than planned without meeting the feature, stop.',
        'On reaching the feature, turn toward your target and note how far you walked along it. Your partner then checks your position with GPS.',
        'Debrief: how far off your intended line were you, and did aiming off still get you to the target?',
      ],
      success: [
        'You meet the catching feature within 20 % of your predicted distance.',
        'You turn the correct way along it because you aimed off, not by luck.',
      ],
      skill: 'map-compass',
    },
  ],
  simulations: ['scenario-cap-9'],
  quiz: [
    {
      id: 'cap-9-q5',
      kind: 'single',
      prompt: 'Which situation most clearly calls for **stopping and sheltering** rather than continuing to navigate?',
      choices: [
        { id: 'a', text: 'Fog, but a known wall 1 km south and several hours of daylight.', why: 'You have a catching feature and time: navigate with a method and a limit.' },
        { id: 'b', text: 'Whiteout near a corniced edge, no reachable catching feature, dusk falling.', why: 'Correct: no safe method, a lethal hazard, and no light — stop, shelter, signal.' },
        { id: 'c', text: 'Steady drizzle and low cloud while you are on a well-marked, cairned path.', why: 'Follow the path cairn to cairn.' },
        { id: 'd', text: 'You have lost the compass, but the valley below you is clearly visible.', why: 'Visibility gives you terrain association.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'daylight', 'risk'],
      explanation: 'Stop when every available method is unsafe or unreliable — especially near edges and at nightfall.',
    },
    {
      id: 'cap-9-q3',
      kind: 'single',
      prompt: 'In fog without a compass, which of these is **NOT** a useful relocation clue?',
      choices: [
        { id: 'a', text: 'A steep edge that exists in only one place on the map', why: 'Useful: a unique feature fixes a line of position.' },
        { id: 'b', text: 'Time and pace count since your last known point', why: 'Useful: they bound how far you can be.' },
        { id: 'c', text: 'The direction the ground slopes, compared with the map', why: 'Useful: slope aspect is a strong clue.' },
        { id: 'd', text: 'A strong, steady feeling that the car is "this way"', why: 'Correct: feelings of certainty are common and often wrong in poor visibility.' },
      ],
      answer: 'd',
      concepts: ['decisions', 'human-factors'],
      explanation: 'Relocation uses evidence: unique features, measured time and distance, slope, and cross-checked direction cues such as a steady wind — not a feeling of certainty.',
    },
    {
      id: 'cap-9-q1',
      kind: 'single',
      prompt: 'A long wall runs east–west across your route; the gate you need is somewhere on it. You have no compass. Why aim deliberately to the west of the gate?',
      choices: [
        { id: 'a', text: 'Because walls like this are usually easier to cross on their west side.', why: 'Irrelevant to finding the gate.' },
        { id: 'b', text: 'So at the wall you know the gate lies to your left (east).', why: 'Correct: aiming off turns an uncertain arrival into a known side.' },
        { id: 'c', text: 'Because the prevailing westerly wind will help you hold a straight line.', why: 'The wind may help you hold a line, but it is not the reason for aiming off.' },
        { id: 'd', text: 'Because aiming to one side makes the overall route to the gate shorter.', why: 'Aiming off usually makes it slightly longer — the price of certainty.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'integration'],
      explanation: 'Aim off by more than your likely directional error, then follow the catching feature toward the target.',
    },
    {
      id: 'cap-9-q4',
      kind: 'single',
      prompt: 'In thick fog, what usually happens to walkers who concentrate hard on walking straight?',
      choices: [
        { id: 'a', text: 'They hold a straight line, because concentration makes up for landmarks.', why: 'Concentration does not replace external references.' },
        { id: 'b', text: 'They drift and often curve, while still feeling confident.', why: 'Correct: without external references, walkers drift while feeling sure.' },
        { id: 'c', text: 'They walk straight but lose all sense of how far they have gone.', why: 'The main problem is direction drift, not just distance.' },
        { id: 'd', text: 'They stop trusting themselves and so take more care with direction.', why: 'The danger is that they feel confident while drifting.' },
      ],
      answer: 'b',
      concepts: ['human-factors'],
      explanation: 'Without external references, walkers drift and often curve, while feeling confident. Use aiming points, cross-checked cues and catching features.',
    },
    {
      id: 'cap-9-q6',
      kind: 'single',
      prompt: 'What is the difference between a **handrail** and a **catching feature**?',
      choices: [
        { id: 'a', text: 'A handrail is a line you follow; a catching feature crosses your path and stops you.', why: 'Correct: a catching feature tells you that you have gone far enough (or too far).' },
        { id: 'b', text: 'They are two names for the same thing: any linear feature such as a wall.', why: 'The same wall can be both, but the roles differ.' },
        { id: 'c', text: 'A handrail must be man-made, while a catching feature must be natural.', why: 'Either can be natural or man-made.' },
        { id: 'd', text: 'A handrail is what you aim off from; a catching feature is what you follow.', why: 'Reversed: you follow a handrail, and aim off toward a catching feature.' },
      ],
      answer: 'a',
      concepts: ['decisions', 'integration'],
      explanation: 'Plan legs that follow handrails and end on catching features — ideally with aiming off.',
    },
    {
      id: 'cap-9-q2',
      kind: 'single',
      prompt: 'Your pace count on rough moor is 70 double-paces per 100 m. How many double-paces should a 1,200 m leg take?',
      choices: [
        { id: 'a', text: '84 double-paces', why: 'A decimal slip: 1,200 m is 12 lots of 100 m, not 1.2.' },
        { id: 'b', text: '840 double-paces', why: 'Correct: 70 × 12.' },
        { id: 'c', text: '1,680 double-paces', why: 'That is the number of single paces, not double-paces.' },
        { id: 'd', text: '1,714 double-paces', why: 'Inverted ratio: 1,200 ÷ 70 × 100.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'integration'],
      explanation: '70 × (1,200 / 100) = **840**. Cross-check by time: at 3 km/h, 1.2 km takes about 24 minutes.',
    },
  ],
  scenario: {
    id: 'cap-9-sc',
    setup: 'In fog without a compass, you reach a long wall. You did not aim off, so the gate could be either way. It is 16:00; sunset is 21:15.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Follow the wall whichever way goes downhill.', why: 'Walls follow boundaries, not descent routes; downhill may lead into bog or away from the gate.' },
      { id: 'b', text: 'Pick one direction with a time limit (e.g. 15 minutes); if there is no gate, return and search the other way for twice as long.', why: 'Best: a bounded, reversible search along a handrail you cannot lose.' },
      { id: 'c', text: 'Climb the wall and head straight on south.', why: 'Leaving the handrail throws away your only certain reference.' },
      { id: 'd', text: 'Sit and wait for the fog to lift.', why: 'Possible, but you have a safe method and daylight to use it.' },
    ],
    best: 'b',
    debrief: 'A handrail with a time limit is a safe search pattern: you can never get lost along it, and the limit stops you walking indefinitely the wrong way. Next time, **aim off** and skip the search.',
    concepts: ['decisions', 'reversibility'],
  },
  summary: [
    'Stop early and anchor on your last known point; treat your position as a circle.',
    'Catching features stop overshoot; handrails carry you; aiming off tells you which way to turn.',
    'Pace count plus time, with a distance limit, keeps dead reckoning honest.',
    'Wind and slope are crude compasses — cross-check them.',
    'Edges and ravines are hazards first; waiting is a plan only with a trigger.',
  ],
  furtherReading: ['kjellstrom', 'mt-hml'],
  references: ['kjellstrom', 'freedom-hills', 'os-mapzone', 'usgs-symbols', 'mt-hml', 'koester-lpb'],
}

const cap10: Lesson = {
  id: 'cap-10',
  stage: 19,
  order: 10,
  title: 'Multi-day survival',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s18-l4'],
  concepts: ['integration', 'priorities', 'inventory', 'water-needs', 'water-treatment', 'redundancy', 'signaling', 'visibility'],
  objectives: [
    'Build and follow **water, food and energy budgets** for a wait of several days.',
    'Run **repeated water processing** with redundancy, and manage **sanitation** to protect the water source.',
    'Create a **daily routine** that front-loads high-value work (signals, fuel, repair) and protects rest.',
    'Maintain **morale** — your own and a partner’s — with facts, roles and small goals.',
    'Plan **several days ahead**, including weather changes and illness.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

Late August in remote boreal lakeland. Your canoe swamped crossing a big lake; you and your friend Jo stayed with it, PFDs on, controlled your breathing through the first minute of cold shock, and kicked it to shore. You lost the food barrel — with the stove, a sleeping bag and the PLB — and one paddle. The outfitter expects you at the takeout at the end of **Day 5**. Help is realistically **four days away**.

This is the course’s long game. Nothing in the first hour will kill you if you get warm; what decides the outcome is **how you run days 2 to 5**: budgets, routine, water, sanitation, signals, repair and morale.

### Budgets, not heroics

- **Water:** about 3 L per person per day for a resting adult in mild weather (more when working or hot). Unlimited source, limited *treatment* capacity — protect it.
- **Food:** 4,000 kcal for two people over four days ≈ **500 kcal per person per day**. A large deficit, tolerable for days if you stay warm and rested. Eat mostly in the evening for night-time heat production.
- **Energy:** every task costs calories you cannot replace. Do the valuable ones (signals, fuel, shelter, repair) early and well; rest in the afternoon.
- **Morale:** a resource that runs down like any other. Replenish it with routine, shared decisions and progress you can see.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Get warm before anything else after immersion', 'Stage 8 · Cold water and immersion; Hypothermia'],
        ['Camp: sheltered, no dead trees, signal platform nearby', 'Stage 5 · Site selection in depth'],
        ['Water, food and energy budgets', 'Stage 18 · Resource and energy budgeting; Stage 6 · Energy requirements'],
        ['Filter backflush, pre-filter, boil as backup', 'Stage 4 · Treatment science; Improvised treatment and storage'],
        ['Latrine distance and hand hygiene', 'Stage 10 · Field sanitation and hygiene; Stage 18 · Camp systems and sanitation'],
        ['Canoe repair and bright hull as signal', 'Stage 10 · Repair systems; Stage 14 · Visual and audible signals'],
        ['Morale, routine and a partner who withdraws', 'Stage 18 · Sleep, morale and planning ahead; Stage 15 · Isolation, uncertainty and fatigue'],
        ['Oral rehydration for diarrhoea', 'Stage 9 · Environmental emergencies; Stage 8 · Hydration and electrolytes'],
        ['Signals ready before the aircraft arrives', 'Stage 14 · How searches work'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-10', caption: 'Capstone 10: five days on a lakeshore after a canoe capsize. Watch the clock run across multiple days.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire, fishing and foraging rules',
      md: 'Fire bans, fishing licences and rules on snaring and harvesting differ by jurisdiction and season. Check them before a trip. In a real emergency, protecting life comes first — but **passive fishing where licensed** is low-cost, while **snaring and foraging unfamiliar plants or fungi** are poor energy investments and serious poisoning risks. This course never asks you to eat wild plants or fungi identified from its pages.',
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'First aid',
      md: 'Diarrhoea is treated first with **fluid and salt replacement** (oral rehydration solution). Seek urgent evacuation for blood in the stool, high fever, inability to keep fluids down, or signs of severe dehydration (confusion, very little urine, fainting). Hands-on wilderness first-aid training (WFA/WAFA/WFR) is strongly recommended for anyone planning remote trips.',
    },
  ],
  whyItMatters: 'Remote-water trips, bush flights and wilderness expeditions sometimes end in waits of several days. The people who come through them well are rarely the ones with the best bushcraft tricks; they are the ones who make a plan on day one, protect their water, keep a routine and have their signals ready when the aircraft finally comes.',
  science: [
    {
      type: 'md',
      md: `### The food budget

Total food energy $F = 4{,}000$ kcal for $n = 2$ people over $d = 4$ days:

$$\\text{per person per day} = \\frac{F}{n \\times d} = \\frac{4{,}000}{2 \\times 4} = 500\\ \\text{kcal}$$

A resting adult may need 1,800–2,500 kcal a day, so each of you runs a deficit of roughly 1,500–2,000 kcal/day — about 0.2 kg of body fat. Over four days that is uncomfortable but safe for healthy adults. **Water and warmth are not negotiable in the same way.**

### Cold-water immersion (why the first minutes mattered)

The **1-10-1** idea is a useful teaching frame: about **1 minute** of cold-shock gasping to get your breathing under control, roughly **10 minutes** of meaningful movement before muscles in the limbs weaken, and about **1 hour** before hypothermia causes unconsciousness in very cold water. These are illustrative, not guarantees — warmer water extends them, rough water and exhaustion shorten them. A PFD keeps you afloat through all three phases.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Boreal lakeland (the scenario):** unlimited water that must be treated; plenty of fuel; aircraft search along registered routes.

**Desert vehicle breakdown:** water is the binding budget; shade and rest in the heat of the day; the vehicle is the signal.

**Tropical river:** constant wet; water treatment and foot care become the daily routine; raised sleeping platform.

**Arctic:** fuel and insulation dominate; melting snow costs fuel — budget it; storms can pin you for days.

**Coastal (shipwreck or kayak):** fresh water is scarce; collect rain, protect from sun and spray; signal to shipping lanes.

**Urban disaster:** a multi-day wait at home after infrastructure failure uses the same budgets — water per person per day, food, light, sanitation and morale.`,
    },
  ],
  mistakes: [
    'Spending the first cold hour searching for lost gear while still wet.',
    'Eating most of the food on night one, or refusing to eat at all.',
    'Relying on a single water-treatment method with no backup.',
    'Drinking clear, untreated water because the place is "remote".',
    'Siting the latrine close to the lake or camp.',
    'Spending days foraging or trapping for fewer calories than the effort costs.',
    'Leaving signals until an aircraft is already overhead.',
    'Myth: "stop drinking to stop diarrhoea" — it adds dehydration to the illness.',
    'Going back onto dangerous water in a damaged boat because waiting feels intolerable.',
  ],
  exercises: [
    scenarioExercise('cap-10-e1', 'Play the multi-day capstone', [
      'Track the clock across days: write down what you did in each morning and afternoon, and compare it with a routine you would design from scratch.',
    ]),
    {
      id: 'cap-10-e2',
      title: 'Four-day budget and routine plan (tabletop)',
      level: 4,
      safety: 'home',
      minutes: 60,
      materials: ['Your real trip kit list (or a friend’s)', 'Food labels or a nutrition app', 'Notebook or spreadsheet'],
      steps: [
        'Choose a real or planned trip and imagine it goes wrong on Day 1 with rescue on Day 5. Remove one major item (food bag, stove, or filter).',
        'List what remains and calculate total food energy. Divide it into a daily ration per person.',
        'Set a daily water target per person, and specify two independent treatment methods with the equipment you actually carry.',
        'Write a daily routine: a morning work block (signals, fuel, water, repair, sanitation) and rest periods. Mark which tasks must be finished by the end of Day 2.',
        'Add contingency plans for: a storm day, one person ill with diarrhoea, and a treatment method failing.',
        'Revise your real kit list based on what the exercise showed (e.g. PLB carried on your person, not in a pack).',
      ],
      success: [
        'Your plan has numeric budgets for water, food and energy per person per day.',
        'Every critical function (water, fire, light, signalling) has a backup.',
        'You changed at least one item in your real kit or trip plan.',
      ],
      skill: 'multi-day',
    },
  ],
  simulations: ['scenario-cap-10'],
  quiz: [
    {
      id: 'cap-10-q5',
      kind: 'single',
      prompt: 'You and a partner are ashore, soaked, after a capsize at 15:30, with gear and a four-day wait ahead. Which order of priorities is best?',
      choices: [
        { id: 'a', text: 'Get warm and dry → check injuries → camp and fire → water and budget → signals', why: 'Correct: immediate threats first, then tonight’s shelter, then the systems for the days ahead.' },
        { id: 'b', text: 'Check injuries → camp and fire → get warm and dry → signals → water and budget', why: 'Cold is the most immediate threat for soaked people; warming up cannot wait for camp.' },
        { id: 'c', text: 'Signals → get warm and dry → check injuries → camp and fire → water and budget', why: 'Signals matter by Day 2, but cold and injuries threaten you now.' },
        { id: 'd', text: 'Camp and fire → water and budget → get warm and dry → check injuries → signals', why: 'Stopping heat loss and checking injuries come before building systems.' },
      ],
      answer: 'a',
      concepts: ['priorities', 'heat-balance'],
      explanation: 'Immediate threats first (cold, injuries), then tonight’s shelter, then the systems that keep you going for days — and signals by Day 2.',
    },
    {
      id: 'cap-10-q4',
      kind: 'single',
      prompt: 'Your canoe has just capsized in cold water. You are wearing a PFD. What matters most in the **first minute**?',
      choices: [
        { id: 'a', text: 'Control your breathing through the initial gasping', why: 'Correct: cold shock peaks in the first minute; uncontrolled gasping can mean inhaling water.' },
        { id: 'b', text: 'Swim hard for the shore while your muscles still work', why: 'Use your useful minutes to get out or onto the boat, not for a long swim — and breathing comes first.' },
        { id: 'c', text: 'Take off your PFD so you can swim faster to the bank', why: 'The PFD keeps you afloat when your muscles weaken.' },
        { id: 'd', text: 'Leave the canoe behind so it does not slow you down', why: 'A floating canoe is flotation and a large target — stay with it.' },
      ],
      answer: 'a',
      concepts: ['immediate-danger', 'heat-loss'],
      explanation: 'The 1-10-1 frame: breathe through the first minute, use the next ~10 minutes of good movement to get out or onto the boat, and keep your flotation.',
    },
    {
      id: 'cap-10-q2',
      kind: 'single',
      prompt: 'Your squeeze filter has slowed to a trickle on Day 2. What is the best response?',
      choices: [
        { id: 'a', text: 'Backflush it, pre-filter through cloth, and keep boiling as backup.', why: 'Best: restores the easy method and keeps redundancy.' },
        { id: 'b', text: 'Drink the lake water untreated, since it looks perfectly clear.', why: 'Clear is not clean; remote water carries protozoa and bacteria.' },
        { id: 'c', text: 'Ration drinking water heavily to save the filter’s remaining capacity.', why: 'Dehydration is more dangerous than the effort of boiling.' },
        { id: 'd', text: 'Throw the filter away and boil all your water from now on.', why: 'Safe, but costs fuel and time; the filter can usually be restored.' },
      ],
      answer: 'a',
      concepts: ['water-treatment', 'redundancy'],
      explanation: 'Maintain your primary method and keep an independent backup — redundancy for critical functions.',
    },
    {
      id: 'cap-10-q6',
      kind: 'single',
      prompt: 'On Day 4, your partner has watery diarrhoea (no blood, no high fever). What is the most important treatment?',
      choices: [
        { id: 'a', text: 'Oral rehydration: treated water with ORS in small, frequent sips', why: 'Correct: replacing fluid and salt is what matters.' },
        { id: 'b', text: 'Stop drinking until the diarrhoea settles, to rest the gut', why: 'Dangerous myth.' },
        { id: 'c', text: 'Eat as much as possible to replace the energy being lost', why: 'Food is secondary; fluids and salts first.' },
        { id: 'd', text: 'Anti-diarrhoea tablets alone, to stop the fluid losses', why: 'They may reduce frequency but do not replace losses.' },
      ],
      answer: 'a',
      concepts: ['dehydration', 'water-needs'],
      explanation: 'Oral rehydration solution (or sugar and salt) is absorbed even during diarrhoea; add strict hand hygiene. Evacuate urgently for blood, high fever, persistent vomiting or signs of severe dehydration.',
    },
    {
      id: 'cap-10-q3',
      kind: 'single',
      prompt: 'Which statement about boiling water in the field is correct?',
      choices: [
        { id: 'a', text: 'A one-minute rolling boil makes clear water microbiologically safe at low altitude.', why: 'Correct: it inactivates bacteria, viruses and protozoa.' },
        { id: 'b', text: 'Water needs at least ten minutes at a rolling boil before protozoa are inactivated.', why: 'One minute is enough at low altitude (three above about 2,000 m).' },
        { id: 'c', text: 'Boiling makes water safe from microbes and from chemical contamination alike.', why: 'Boiling does not remove chemicals.' },
        { id: 'd', text: 'At high altitude a shorter boil is enough, because water boils more readily there.', why: 'Water boils at a lower temperature at altitude, so boil longer: 3 minutes above about 2,000 m.' },
      ],
      answer: 'a',
      concepts: ['water-treatment'],
      explanation: 'A rolling boil for 1 minute (3 minutes above about 2,000 m) inactivates bacteria, viruses and protozoa. It does not remove chemicals.',
    },
    {
      id: 'cap-10-q1',
      kind: 'single',
      prompt: 'Two people have 4,000 kcal of food and expect to wait 4 days. What is the ration per person per day?',
      choices: [
        { id: 'a', text: '250 kcal', why: 'That divides by the 2 people twice.' },
        { id: 'b', text: '500 kcal', why: 'Correct: 4,000 ÷ (2 × 4).' },
        { id: 'c', text: '1,000 kcal', why: 'That is per day for both people together — the 2 people were not divided out.' },
        { id: 'd', text: '2,000 kcal', why: 'That is per person for the whole wait — the 4 days were not divided out.' },
      ],
      answer: 'b',
      concepts: ['inventory', 'priorities'],
      explanation: '4,000 ÷ (2 × 4) = **500 kcal** per person per day — a large but tolerable deficit for a few days if you stay warm and rested.',
    },
  ],
  scenario: {
    id: 'cap-10-sc',
    setup: 'Day 3 morning, calm and sunny. Your canoe is repaired with tape. The takeout is 40 km away with one paddle; the outfitter expects you on Day 5 and has your route. You have one day of food left.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Paddle out now while the weather is calm.', why: 'Leaves your route and prepared signals, on a damaged boat, low on food — and weather can change in hours.' },
      { id: 'b', text: 'Stay: keep the routine, keep signals ready, use the red canoe as a signal panel, and keep it as a backup option.', why: 'Best: rescue will search your planned route; you are safe, and the boat keeps an option open.' },
      { id: 'c', text: 'Split up: one paddles for help, the other stays.', why: 'Doubles the number of people at risk and splits your resources.' },
      { id: 'd', text: 'Paddle part of the way today, camp on the route, and reassess tomorrow.', why: 'Still puts a damaged boat back on the hazard, low on food, and leaves your prepared signals behind.' },
    ],
    best: 'b',
    debrief: 'When someone reliable knows your route and when you are overdue, **staying on it** is usually the safest plan. A repaired boat is a backup for a changed situation (a serious illness, a missed search) — not a reason to go back onto the hazard that started it.',
    concepts: ['stay-or-move', 'reversibility'],
  },
  summary: [
    'Get warm first; everything else can wait an hour.',
    'Turn uncertainty into numbers: water, food and energy per person per day.',
    'Two independent water-treatment methods; latrine well away from water and camp.',
    'Front-load signals, fuel and repair; rest in the afternoon.',
    'Morale is a resource: facts, roles, routine, connection.',
  ],
  furtherReading: ['afh-10-644', 'wms-water-2019'],
  references: ['afh-10-644', 'army-atp-3-50-21', 'wms-water-2019', 'cdc-emergency-water', 'iom-water-2005', 'coldwater-1101', 'coldwater-1101-myth', 'nols-wm-book', 'lnt-principles'],
}

const cap11: Lesson = {
  id: 'cap-11',
  stage: 19,
  order: 11,
  title: 'Group survival',
  level: 'expert',
  minutes: 60,
  prerequisites: ['s15-l4'],
  concepts: ['integration', 'priorities', 'stress-control', 'human-factors', 'wet-wind', 'heat-balance', 'stay-or-move', 'phone-use'],
  objectives: [
    'Take **calm, clear leadership** of a deteriorating group without formal authority.',
    '**Triage** by threat to life rather than by who is loudest.',
    'Recognise and manage **mild hypothermia** in the field, and know when it has become worse.',
    'Defuse **panic and conflict** with breathing, roles and fairness.',
    'Decide whether to **split the group**, and how to communicate with rescuers.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

Five friends on a November ridge. **15:30**, sleet, 40 km/h wind gusting 60, 2 °C, sunset 16:30. The car is 5 km away over a col. Dana is shivering, clumsy and quiet in soaked jeans. Ravi is hyperventilating. Mike wants to run for the car alone. Lea is calm and carries a group shelter. You are the most experienced — so the group looks to you.

Groups have huge advantages — more heat, more hands, more ideas, more kit — **if they stay a group**. They also bring problems a solo traveller never has: panic spreads, arguments waste time, and the strongest person often wants to leave.

### Leadership in an emergency

- **Stop the deterioration first.** Halt in the best shelter available before discussing anything.
- **Give specific instructions with names.** "Lea, bothy bag out please" works; "someone get the shelter" does not.
- **Triage by threat to life.** The quiet, clumsy, shivering person is usually more urgent than the loud one.
- **Give everyone a job.** Tasks restore control, counter panic and keep people watching each other.
- **Consult, then decide.** Explain the plan; do not put safety to a vote among cold, frightened people.
- **Keep the group together.** If someone must go, send a pair, on a short, specific task, ideally within sight.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Halt in shelter, lead with clear instructions', 'Stage 15 · Leadership and group survival'],
        ['Triage: hypothermic casualty first', 'Stage 9 · Scene safety and the patient assessment system; Environmental emergencies'],
        ['Mild hypothermia: insulate, shelter, calories; no alcohol, no rubbing', 'Stage 8 · Hypothermia'],
        ['Panic: slow breathing and a task', 'Stage 15 · Fear, panic and freezing; Stage 1 · Survival mindset and stress'],
        ['Group shelter and shared heat', 'Stage 1 · Your body’s heat budget; Stage 5 · Shelter design principles'],
        ['Call from the knoll; phone discipline', 'Stage 1 · Emergency signaling; Stage 14 · Radio, satellite and beacons'],
        ['Stay or move with a casualty', 'Stage 9 · Monitoring and evacuation decisions; Stage 14 · Stay or move'],
        ['Group conflict and fairness', 'Stage 15 · Cognitive bias in the field; Leadership and group survival'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-11', caption: 'Capstone 11: a group of five in sleet and failing light, with one hypothermic, one panicking, and one wanting to walk out alone.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Hypothermia first aid — train for it',
      md: 'Current wilderness-medicine guidance for **mild hypothermia** (shivering, alert, clumsy): stop further heat loss (shelter, insulation from the ground, replace or cover wet clothing, cover the head), give calories if the person can swallow safely, and monitor. **Worsening** — confusion, slurred speech, stumbling, drowsiness, shivering decreasing while still cold — means handle gently, keep horizontal, wrap fully (a "hypothermia wrap"), apply heat packs to the chest, armpits and back over a thin layer if available, and evacuate. **No alcohol, no rubbing of limbs.** Practise this on a hands-on WFA/WAFA/WFR course.',
    },
  ],
  whyItMatters: 'Many outdoor incidents involve groups of friends without a designated leader. When conditions turn, the group’s outcome often depends on whether one person steps up calmly, focuses on the right casualty, and keeps everyone together. These are learnable skills, not personality traits.',
  science: [
    {
      type: 'md',
      md: `### Shared heat in a group shelter

A resting adult produces roughly 80–100 W. Five people in a bothy bag produce about

$$5 \\times 100\\ \\text{W} = 500\\ \\text{W}$$

— the output of a small heater — inside a windproof envelope. The bag works by stopping **convection** (wind stripping warm air) and **wetting**; sitting on packs and mats stops **conduction** into the ground. The coldest person goes in the middle.

### Why alcohol and rubbing are wrong

Alcohol dilates skin blood vessels: it *feels* warming while increasing heat loss, and it impairs shivering and judgment. Vigorous rubbing of limbs does not rewarm the core and can harm cold tissue. Calories (a sweet drink or food) give shivering muscles fuel; the warmth of the drink itself adds little heat.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Mountain (the scenario):** sleet, wind, a hypothermic member — halt, group shelter, triage, call from a spot with signal within sight.

**Forest:** a youth group separated at dusk — gather at a known point, headcount, pair system, one adult on the phone, others on tasks.

**Desert:** a group with a heat-exhausted member — shade, cooling and fluids first; don’t let the fittest run for the road in the midday heat.

**Arctic:** a snowmobile party with a cold member — build a windbreak from the machines, share insulation, one person on the satellite messenger.

**Coastal:** a kayak group with one capsized and cold — raft up, get them out of the water, warm layers, land together at the nearest safe shore.

**Urban disaster:** neighbours after an earthquake — someone takes charge, checks the most vulnerable first, gives jobs, and keeps people away from damaged buildings.`,
    },
  ],
  mistakes: [
    'Pushing the whole group faster when the slowest person is getting hypothermic.',
    'Attending to the loudest person first instead of the sickest.',
    'Myths: alcohol "to warm up"; rubbing arms and legs.',
    'Letting a strong, frustrated member go for help alone.',
    'Voting on safety decisions in the cold instead of consulting and then deciding.',
    'Shaming a panicking person instead of calming them and giving them a task.',
    'Walking a worsening hypothermic casualty over exposed ground in the dark.',
  ],
  exercises: [
    scenarioExercise('cap-11-e1', 'Play the group-survival capstone', [
      'On one run, deliberately handle Mike first; on another, Dana first. Compare the effect on warmth and on the endings.',
    ]),
    {
      id: 'cap-11-e2',
      title: 'Group emergency tabletop with roles',
      level: 4,
      safety: 'home',
      minutes: 60,
      materials: ['3–6 people from your walking group, club or family', 'A printed briefing (use this capstone’s)', 'A timer'],
      steps: [
        'Assign roles in secret: one "hypothermic" person (quiet, slow to answer), one "panicking", one "wants to leave alone", the rest as themselves. One person volunteers to lead.',
        'Run the scenario as a conversation for 20 minutes, in real time, with the leader making decisions out loud. A timer marks each 5 minutes; the "hypothermic" person gets worse if not addressed within 10.',
        'Stop and debrief each role: what made you feel listened to? What made you want to leave or argue?',
        'Swap leaders and run a variant (e.g. no phone signal anywhere).',
        'Agree three group rules for your real trips (e.g. nobody walks alone; pace of the slowest; who carries the group shelter).',
      ],
      success: [
        'The leader addressed the hypothermic person first in each run.',
        'The group agreed written rules and assigned who carries the group shelter and first-aid kit.',
      ],
      skill: 'group-lead',
    },
  ],
  simulations: ['scenario-cap-11'],
  quiz: [
    {
      id: 'cap-11-q6',
      kind: 'single',
      prompt: 'A mildly hypothermic walker has been walking slowly with support. Which change means she should **stop walking** and be wrapped and evacuated?',
      choices: [
        { id: 'a', text: 'She says she is cold and asks someone to find her hat.', why: 'Normal and a good sign — she is alert.' },
        { id: 'b', text: 'She is shivering hard but still chatting and joking normally.', why: 'Shivering with normal mental status is mild hypothermia.' },
        { id: 'c', text: 'Her speech slurs, she stumbles repeatedly and seems confused.', why: 'Correct: altered mental status means she is getting worse.' },
        { id: 'd', text: 'She says she is very hungry and asks to stop for food.', why: 'Feed her — it helps.' },
      ],
      answer: 'c',
      concepts: ['heat-balance', 'immediate-danger'],
      explanation: 'Confusion, slurred speech, stumbling and drowsiness mark progression beyond mild hypothermia: handle gently, keep horizontal, wrap, evacuate.',
    },
    {
      id: 'cap-11-q1',
      kind: 'single',
      prompt: 'In sleet and wind, which group member should you attend to first?',
      choices: [
        { id: 'a', text: 'The one shouting angrily that the group is too slow', why: 'Loud is not the same as urgent.' },
        { id: 'b', text: 'The one who has gone quiet, is shivering hard and fumbling with a zip', why: 'Correct: signs of hypothermia — the most immediate threat to life here.' },
        { id: 'c', text: 'The one breathing fast and saying they will die', why: 'Needs calm attention soon, but is not the medical priority.' },
        { id: 'd', text: 'Whoever asks first', why: 'Triage by threat, not by order of asking.' },
      ],
      answer: 'b',
      concepts: ['priorities', 'immediate-danger'],
      explanation: 'Quiet casualties are easily overlooked. Triage by threat to life.',
    },
    {
      id: 'cap-11-q4',
      kind: 'single',
      prompt: 'Conditions are bad and the fittest person in the group could reach help faster alone. What is usually the best decision?',
      choices: [
        { id: 'a', text: 'Send the fittest person alone, since speed matters most now.', why: 'A lone person moving fast in bad conditions is at high risk, and if they get into trouble nobody knows.' },
        { id: 'b', text: 'Prefer communication; if someone must go, send a pair on a short task.', why: 'Correct: keeps people together and gets help moving without a lone walker.' },
        { id: 'c', text: 'Walk the whole group out together at the fittest person’s pace.', why: 'Weaker members, perhaps a casualty, would be pushed beyond their limits.' },
        { id: 'd', text: 'Send the fittest person alone, with a fixed time to turn back.', why: 'A turn-back time does not help if they are hurt alone and nobody knows.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'risk'],
      explanation: 'A lone person moving fast in bad conditions is at high risk, and if they get into trouble nobody knows. Prefer communication; if someone must go, send a pair on a short, specific task.',
    },
    {
      id: 'cap-11-q3',
      kind: 'single',
      prompt: 'A group member is hyperventilating, with tingling hands, saying they cannot breathe. What is the best first response?',
      choices: [
        { id: 'a', text: 'Tell them firmly to pull themselves together and keep moving.', why: 'Shaming increases fear and damages cooperation.' },
        { id: 'b', text: 'Breathe slowly with them, longer out than in, then give them a job.', why: 'Best: calm is contagious; slow breathing settles the physical symptoms; a task restores control.' },
        { id: 'c', text: 'Have them breathe into a paper bag until the tingling stops.', why: 'No longer recommended — it can lower oxygen and delay recognising a genuine medical problem.' },
        { id: 'd', text: 'Leave them alone for a few minutes so they calm down by themselves.', why: 'Panic spreads; brief, calm attention is cheap.' },
      ],
      answer: 'b',
      concepts: ['stress-control', 'stress'],
      explanation: 'Eye contact, slow breathing plus a concrete task. If symptoms persist or there is chest pain with risk factors, treat it as a possible medical emergency.',
    },
    {
      id: 'cap-11-q2',
      kind: 'single',
      prompt: 'Which of these is **NOT** an appropriate field treatment for **mild** hypothermia (shivering, alert, clumsy)?',
      choices: [
        { id: 'a', text: 'Getting them out of the wind and off the ground', why: 'Appropriate: stops convection and conduction.' },
        { id: 'b', text: 'Replacing or covering wet clothing and adding a hat', why: 'Appropriate: reduces heat loss.' },
        { id: 'c', text: 'Food or a sweet drink, if they can swallow safely', why: 'Appropriate: calories fuel shivering.' },
        { id: 'd', text: 'A drink of spirits to help warm them up from inside', why: 'Correct: alcohol increases heat loss and impairs shivering and judgment.' },
      ],
      answer: 'd',
      concepts: ['heat-loss', 'wet-wind'],
      explanation: 'Shelter, insulation, dry or covered layers, calories — and monitoring. No alcohol, and no vigorous rubbing, which does not rewarm the core and can harm tissue.',
    },
    {
      id: 'cap-11-q5',
      kind: 'single',
      prompt: 'Five resting adults each produce about 100 W of heat. Roughly how much heat do they produce together inside a group shelter?',
      choices: [
        { id: 'a', text: 'About 20 W', why: 'That divides 100 W by 5 instead of multiplying.' },
        { id: 'b', text: 'About 100 W', why: 'That is one person’s output, not the group’s.' },
        { id: 'c', text: 'About 500 W', why: 'Correct: 5 × 100 W.' },
        { id: 'd', text: 'About 5,000 W', why: 'An extra factor of ten has crept in.' },
      ],
      answer: 'c',
      concepts: ['heat-balance'],
      explanation: '5 × 100 W ≈ **500 W** — kept in by the windproof bag, which is why group shelters are so effective.',
    },
  ],
  scenario: {
    id: 'cap-11-sc',
    setup: 'Your group is in a bothy bag; one member is mildly hypothermic. Mike, frustrated, is putting his pack on: "I’m going for the car — back with help in two hours." There is phone signal on a knoll 50 m away, in sight.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Let him go — he is the fittest and it will be faster.', why: 'He would be alone, in the dark, in sleet; if he is hurt, nobody knows. And a call is available.' },
      { id: 'b', text: 'Give him the most valuable job: take the best phone to the knoll, call the emergency number with the grid reference and the casualty’s condition, then come straight back.', why: 'Best: channels his energy, keeps the group together and in sight, and gets trained help moving now.' },
      { id: 'c', text: 'Forbid him from moving and tell him to sit down.', why: 'Keeps the group together, but wastes his energy and misses the call.' },
      { id: 'd', text: 'Put it to a vote.', why: 'Slow, and likely to pick the option that ends discomfort soonest.' },
    ],
    best: 'b',
    debrief: 'Most urges to leave are about **regaining control**. Redirecting that energy into a short, specific, high-value task — here, communication — keeps the group intact and gets help on its way sooner than a lone walker could.',
    concepts: ['human-factors', 'phone-use'],
  },
  summary: [
    'Halt in shelter first; lead with specific, named instructions.',
    'Triage by threat to life — the quiet, shivering one first.',
    'Mild hypothermia: shelter, insulation, dry layers, calories; worsening means wrap and evacuate.',
    'Panic: slow breathing plus a task. Conflict: name it, restate the plan, share roles fairly.',
    'Keep the group together; call rather than walk for help when you can.',
  ],
  furtherReading: ['nols-leadership', 'wms-hypothermia-2019'],
  references: ['nols-leadership', 'wms-hypothermia-2019', 'usariem-cold', 'leach-freeze-2004', 'mccammon-traps', 'nols-wm', 'mra', 'icar'],
}

const cap12: Lesson = {
  id: 'cap-12',
  stage: 19,
  order: 12,
  title: 'Disaster / urban emergency',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s16-l5'],
  concepts: ['integration', 'immediate-danger', 'priorities', 'water-needs', 'water-treatment', 'phone-use', 'kit', 'stay-or-move'],
  objectives: [
    'Protect yourself and your family **during shaking and aftershocks**, and avoid common myths.',
    'Manage the first hour after a quake: **light, injuries, gas, and building safety**.',
    'Decide between **sheltering in place and evacuating**, and use **community resources**.',
    'Run household **water and sanitation** when utilities fail.',
    'Use a **family communication plan** on an overloaded network.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### The briefing

**02:40**, early March. A strong earthquake shakes your 3rd-floor apartment in a 1970s concrete block. The power and water are out; aftershocks follow. At home: your partner Sam, Noa (9) and Eli (4). Next door: Mrs Katz, 82, alone, with a walking frame. You have a family plan and a home kit — and only 5 L of the 48 L of water you meant to store.

Urban disasters use the same decision system as the wilderness: **immediate danger → injuries → shelter → water → communication → stay or move**. What changes is the hazards (falling objects, gas, damaged buildings, power lines), the resources (neighbours, shelters, official information) and the crowd.

### The first hour, in order

1. **During shaking:** Drop, Cover, Hold On. In bed, stay there and cover your head and neck with a pillow.
2. **When it stops:** shoes, torch (never a flame), check yourself, then others.
3. **Injuries:** firm direct pressure for bleeding; check heads, necks and breathing.
4. **Hazards:** gas smell or hissing → no flames or switches, ventilate, shut the valve if you know how, get out, report it.
5. **Building:** visible structural damage or gas → leave by the stairs, helping vulnerable neighbours; expect aftershocks.
6. **Outside:** go to open ground away from buildings, glass and power lines — ideally your pre-agreed meeting point.
7. **Communicate:** one text to an out-of-area contact; radio for official information.`,
    },
    {
      type: 'table',
      caption: 'Decisions in this capstone and where you learned them',
      head: ['Decision', 'Draws on'],
      rows: [
        ['Drop, Cover, Hold On; doorway myth', 'Stage 16 · Earthquake and building evacuation'],
        ['Shoes and torches, not candles', 'Stage 16 · Home kits: water, food, light, power'],
        ['Direct pressure; head-injury watch', 'Stage 9 · Airway, breathing, circulation; Head, spine, chest and abdomen'],
        ['Gas: no flame, ventilate, shut off, leave', 'Stage 16 · Utility and communication failure; Stage 1 · Risk management'],
        ['Stairs, neighbours, meeting point', 'Stage 16 · Household emergency planning; Stage 15 · Leadership and group survival'],
        ['Text an out-of-area contact; radio', 'Stage 16 · Utility and communication failure; Stage 1 · Emergency signaling'],
        ['Water budget and disinfection', 'Stage 4 · Water requirements and dehydration; Treatment science'],
        ['Sanitation without flushing', 'Stage 10 · Field sanitation and hygiene'],
        ['Community shelter vs damaged home', 'Stage 16 · Household emergency planning; Stage 14 · Stay or move'],
      ],
    },
    { type: 'sim', id: 'scenario-cap-12', caption: 'Capstone 12: a night earthquake at home, with a family and an elderly neighbour. The clock runs through the first day.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Gas and electricity',
      md: 'If you smell gas or hear hissing: **no flames, no light switches, no appliances**; open windows, shut off at the main valve only if you know how, get everyone out and report it from outside. Once the gas is shut off, **only the gas utility should turn it back on**. Avoid downed power lines entirely and assume they are live.',
    },
    {
      type: 'callout',
      tone: 'warning',
      title: 'First aid',
      md: 'Control bleeding with **firm direct pressure**. A tourniquet is for life-threatening limb bleeding that direct pressure cannot control — applied early, not as a "last resort". Elevation and pressure points are no longer recommended. After a head bump, watch for worsening headache, repeated vomiting, drowsiness or confusion, and seek care. Take a hands-on first-aid course; many communities also offer community emergency response training.',
    },
  ],
  whyItMatters: 'Most people will never be lost in a wilderness, but many will live through an earthquake, flood, storm or long utility failure. In the first hours after a large disaster, professional responders are overwhelmed; households and neighbours do most of the rescuing, first aid and caring. A rehearsed family plan and a few correct instincts save lives.',
  science: [
    {
      type: 'md',
      md: `### How much water is "enough"?

A common planning figure is about **1 US gallon (≈ 3.8 L) per person per day** for drinking and basic hygiene, for at least three days. For a family of four:

$$4 \\times 3.8\\ \\text{L} \\times 3\\ \\text{days} \\approx 45.6\\ \\text{L}$$

More for hot weather, illness, pregnancy, infants, older people and pets. One toilet flush can use 6–9 L — which is why drinking water must never be used for flushing.

### Disinfecting doubtful water

- **Boil:** a rolling boil for 1 minute (3 minutes above about 2,000 m).
- **Bleach:** plain, unscented household bleach at the dose given on the label or by your public-health authority, then **30 minutes’ contact time**; double the dose for cloudy water, or better, let it settle and filter it first.

Neither removes chemical contamination (fuel, industrial spills) — for that, use stored or distributed water.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Urban earthquake (the scenario):** falling objects, glass, gas, damaged stairwells, overloaded networks, community shelters.

**Rural earthquake:** landslides block roads; farm water tanks and wells may be the water supply; neighbours are further apart — know them in advance.

**Flood:** never walk or drive through floodwater; move to higher floors; floodwater contaminates everything it touches, including wells.

**Winter storm and power cut:** carbon-monoxide risk from generators and indoor heaters; one room kept warm; check on older neighbours.

**Heatwave with power failure:** cooling centres, shade, water, and checking on isolated older people are the lifesavers.

**Wildfire:** evacuate early when told; the go-bag and a pre-planned route matter more than anything you might defend.`,
    },
  ],
  mistakes: [
    'Running outside or down stairs during the shaking.',
    'Myth: "stand in a doorway" — in modern buildings it is no safer and you risk the door and falls.',
    'Walking barefoot in the dark among broken glass.',
    'Using candles or lighters for light — or to look for a gas leak.',
    'Using the lift after an earthquake.',
    'Standing next to damaged buildings or under power lines outside.',
    'Repeatedly calling instead of texting on an overloaded network.',
    'Flushing toilets with drinking water.',
    'Returning to an uninspected, visibly damaged building during aftershocks.',
    'Forgetting vulnerable neighbours who live alone.',
  ],
  exercises: [
    scenarioExercise('cap-12-e1', 'Play the urban-earthquake capstone', [
      'On one run, do everything right in the first 10 minutes but ignore the gas; on another, get the gas right but skip Mrs Katz. Compare what changes later in the day.',
    ]),
    {
      id: 'cap-12-e2',
      title: 'Family earthquake drill at home',
      level: 4,
      safety: 'home',
      minutes: 90,
      materials: ['Your household', 'Home emergency kit', 'Torches', 'Whistle', 'Phones', 'Paper and pen'],
      safetyNote: 'Do not actually turn off your gas supply — once shut, only the gas utility should turn it back on. Just locate the valve and the correct tool. Practise movements slowly; do not practise running on stairs. Adapt the drill for young children, older people and anyone with limited mobility.',
      steps: [
        'Walk through each room and agree the best Drop–Cover–Hold On spot (under a sturdy table, or low against an inside wall away from windows and tall furniture). In bed: stay and cover your head and neck.',
        'Call "earthquake!" at an unexpected moment; everyone drops, covers and holds on for 60 seconds.',
        'Lights off: find shoes and torches by feel. Check that every bedroom has a torch and shoes within reach.',
        'Locate (do not operate) the gas valve and the tool for it, the main water stopcock, and the electricity main switch.',
        'Walk your evacuation route down the stairs to your outdoor meeting point, noting hazards (glass, power lines, facades).',
        'Each person texts the out-of-area contact a practice message; check everyone has the number saved and written on paper.',
        'Measure your stored water against about 4 L per person per day for 3 days, and list what is missing from your kit. Agree who will check on vulnerable neighbours.',
      ],
      success: [
        'Everyone can reach a safe spot within a few seconds from every room, including in the dark.',
        'Every adult can find the gas valve and main switches, and knows not to use flames.',
        'Stored water and kit gaps are written down with a date to fix them.',
      ],
      skill: 'home-plan',
    },
  ],
  simulations: ['scenario-cap-12'],
  quiz: [
    {
      id: 'cap-12-q2',
      kind: 'single',
      prompt: 'After an earthquake you smell gas in your flat. What is the right course of action?',
      choices: [
        { id: 'a', text: 'Open windows, get everyone out, then report it from outside.', why: 'Correct: ventilate, leave, report — and shut off the main valve if you know how.' },
        { id: 'b', text: 'Switch the lights on, then find and shut off the leaking appliance.', why: 'Light switches can spark and ignite the gas.' },
        { id: 'c', text: 'Use a lighter to locate the leak, then tape over it until help comes.', why: 'Never — this causes explosions.' },
        { id: 'd', text: 'Shut the main valve, then turn it back on once the smell has gone.', why: 'Only the gas utility turns the supply back on.' },
      ],
      answer: 'a',
      concepts: ['immediate-danger', 'risk'],
      explanation: 'No flames, no switches; ventilate, shut off at the main valve if you can, get out, report it to the utility or emergency services. Only the utility turns it back on.',
    },
    {
      id: 'cap-12-q5',
      kind: 'single',
      prompt: 'A family member has a deep cut on the foot that is bleeding steadily. What is the first action?',
      choices: [
        { id: 'a', text: 'Firm, direct pressure on the wound with a dressing, then a pressure bandage', why: 'Correct.' },
        { id: 'b', text: 'Rinse it thoroughly with your stored drinking water first', why: 'Bleeding control comes first; cleaning later with water to spare.' },
        { id: 'c', text: 'Raise the leg and press on the groin pressure point', why: 'No longer recommended; delays effective pressure.' },
        { id: 'd', text: 'Apply a tourniquet immediately', why: 'Tourniquets are for life-threatening limb bleeding that pressure cannot control.' },
      ],
      answer: 'a',
      concepts: ['priorities', 'immediate-danger'],
      explanation: 'Direct pressure controls almost all bleeding. Escalate to a tourniquet for life-threatening limb bleeding not controlled by pressure.',
    },
    {
      id: 'cap-12-q6',
      kind: 'single',
      prompt: 'The water is off for days. What is the best use of your limited stored water?',
      choices: [
        { id: 'a', text: 'Drinking first, then food prep and hygiene; flush with pool water', why: 'Correct: budget by priority.' },
        { id: 'b', text: 'Flushing the toilet regularly so the flat stays hygienic', why: 'A flush uses 6–9 L of drinking water.' },
        { id: 'c', text: 'Drinking pool water so the bottled water lasts longer', why: 'Pool water is for flushing and cleaning, not drinking.' },
        { id: 'd', text: 'Washing clothes so everyone stays clean and healthy', why: 'Low priority in the first days.' },
      ],
      answer: 'a',
      concepts: ['water-needs', 'priorities'],
      explanation: 'Drinking > food preparation > hand hygiene > everything else; use non-drinking water such as pool water for flushing. Improvise toilets with bags and disinfectant.',
    },
    {
      id: 'cap-12-q1',
      kind: 'single',
      prompt: 'An earthquake wakes you in bed. What should you do during the shaking?',
      choices: [
        { id: 'a', text: 'Stay in bed, face down, covering head and neck with a pillow.', why: 'Correct — current guidance for people in bed.' },
        { id: 'b', text: 'Run outside as fast as possible before the building can collapse.', why: 'Moving during shaking causes many injuries; falling debris outside is a major hazard.' },
        { id: 'c', text: 'Get up and stand in the bedroom doorway until the shaking stops.', why: 'A myth for modern buildings.' },
        { id: 'd', text: 'Run to the stairs to get out ahead of the crowd.', why: 'Stairs are dangerous during shaking.' },
      ],
      answer: 'a',
      concepts: ['immediate-danger'],
      explanation: 'Drop, Cover, Hold On — and if in bed, stay there and protect your head and neck.',
    },
    {
      id: 'cap-12-q4',
      kind: 'single',
      prompt: 'After a disaster the mobile network is congested. What is usually the most reliable way to tell family you are safe?',
      choices: [
        { id: 'a', text: 'Keep redialling until a voice call finally connects', why: 'Calls need a continuous channel, which a congested network struggles to give — and redialling adds load.' },
        { id: 'b', text: 'Send a short text message', why: 'Correct: texts need only brief connections and are queued and retried.' },
        { id: 'c', text: 'Wait for the network to clear, then make one long call', why: 'A text gets through sooner and keeps lines free.' },
        { id: 'd', text: 'Call the emergency number and ask them to pass it on', why: 'Emergency lines must be kept free for emergencies.' },
      ],
      answer: 'b',
      concepts: ['phone-use'],
      explanation: 'Text messages need only brief connections and are queued and retried; calls need a continuous channel. Texting also keeps lines free for emergencies.',
    },
    {
      id: 'cap-12-q3',
      kind: 'single',
      prompt: 'Using the planning figure of about 3.8 L per person per day, how many litres of water should a family of four store for 3 days?',
      choices: [
        { id: 'a', text: 'About 11.4 L', why: 'That is for one person — the 4 people were left out.' },
        { id: 'b', text: 'About 15.2 L', why: 'That is for one day — the 3 days were left out.' },
        { id: 'c', text: 'About 4.6 L', why: 'A decimal slip: the product is 45.6, not 4.56.' },
        { id: 'd', text: 'About 45.6 L', why: 'Correct: 4 × 3.8 × 3.' },
      ],
      answer: 'd',
      concepts: ['water-needs', 'kit'],
      explanation: '4 × 3.8 × 3 ≈ **45.6 L** — more for hot weather, illness, infants, older people and pets.',
    },
  ],
  scenario: {
    id: 'cap-12-sc',
    setup: 'Day 2 after the earthquake. Your family is at a community shelter. Your building has visible cracks in the stairwell and has not been inspected. Your partner’s regular medication and the children’s warm clothes are still in the flat.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Nip in quickly while there are no aftershocks.', why: 'Aftershocks are unpredictable, and damaged stairwells can fail. Uninspected buildings are off-limits for good reason.' },
      { id: 'b', text: 'Tell the shelter’s medical post about the medication; ask authorities when an inspection or escorted retrieval is possible; use the shelter’s clothing donations meanwhile.', why: 'Best: meets the needs through community resources without entering a dangerous building.' },
      { id: 'c', text: 'Go without the medication — it can wait a week.', why: 'Many medications should not be interrupted; the shelter can usually help source them.' },
      { id: 'd', text: 'Ask a neighbour who is a builder to look at the stairwell, and go in if they say it looks sound.', why: 'An informal look is not an inspection, and aftershocks are unpredictable; uninspected buildings stay off-limits.' },
    ],
    best: 'b',
    debrief: 'After a disaster, the **community system** — shelters, medical posts, pharmacies and inspection teams — exists to meet exactly these needs. Keep your go-bag stocked with a week of essential medication and copies of prescriptions, and **do not re-enter damaged buildings until they have been inspected**.',
    concepts: ['risk', 'stay-or-move'],
  },
  summary: [
    'Drop, Cover, Hold On — in bed, stay put and protect your head. Doorways are a myth.',
    'Shoes and torches first; never flames after a quake.',
    'Gas smell: no flames or switches, ventilate, shut off, get out, report.',
    'Leave damaged buildings by the stairs, help vulnerable neighbours, go to open ground.',
    'Text one out-of-area contact; drinking water first; improvise sanitation; use community shelters.',
  ],
  furtherReading: ['ready-plan', 'redcross-prepare'],
  references: ['ready-plan', 'ready-kit', 'redcross-prepare', 'cdc-emergency-water', 'epa-emergency-disinfection', 'fema-is100', 'nols-wm'],
}

export const capLessonsB: Lesson[] = [cap7, cap8, cap9, cap10, cap11, cap12]
export const capScenariosB: Scenario[] = [cap7Scenario, cap8Scenario, cap9Scenario, cap10Scenario, cap11Scenario, cap12Scenario]
