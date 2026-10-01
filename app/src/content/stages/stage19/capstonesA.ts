import type { Block, Lesson, Scenario } from '../../types'

// Capstones 1–6 (lessons cap-1 … cap-6 and their branching scenarios).
//
// Authoring notes
// - Node titles that start with a clock time ("17:15 — …") are always entered through options that
//   `set` minutes, so the on-screen clock matches the title on every path (checked in
//   src/test/capstonesA.test.ts). Untimed nodes can be reached at different times.
// - Consequences of earlier choices surface later through flags: an option duplicated with the same
//   text, one copy `hiddenIfFlag: X` and one `requiresFlag: X`, lets a past decision change what a
//   sensible present decision leads to — without the learner seeing the switch.

// ---------------------------------------------------------------------------------------------
// Capstone 1 — Lost in a forest
// ---------------------------------------------------------------------------------------------

const cap1Scenario: Scenario = {
  id: 'cap-1-scenario',
  title: 'Capstone 1 — Lost in a forest',
  stage: 19,
  environment: 'Temperate mixed forest, late October',
  concepts: ['integration', 'stop', 'stay-or-move', 'daylight', 'reversibility', 'site-selection', 'signaling', 'phone-use'],
  intro: `**Setting:** a large block of mixed spruce and beech forest on rolling hills, late October. Overcast and 9 °C now, but the forecast says the sky **clears after dark** — overnight low **−1 °C**, light wind. **Sunset 17:55**; under the canopy, useful light ends around 17:30.

**You:** alone and uninjured. You left the waymarked loop about 40 minutes ago to photograph fungi, then followed a deer path, and now nothing matches.

**Who knows:** your flatmate knows you went to "the forest trails north of town" and expects you for dinner at 19:00. No written route.

**Kit:** softshell jacket, thin fleece, beanie, 0.6 L water, chlorine-dioxide tablets, a trail-mix bag, lighter, small knife, headlamp, whistle, a foil space blanket, the park’s 1:25 000 map and a baseplate compass (which you haven’t used today), and a phone at **38 %** with no signal where you stand.

**On the map:** a gravel forest road runs east–west about 1.5 km **south** of the area you think you’re in — a long catching feature. The car park is on that road. A stream drains north-east into a ravine.

It is **15:30**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '15:30',
  initial: { minutes: 0, water: 600, energy: 70, warmth: 80, morale: 55, battery: 38, injury: 0, rescue: 15, lost: 55, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '15:30 — Nothing looks familiar',
      text: 'The deer path has petered out in a stand of young spruce. Every direction looks the same. Your pulse is up and there is a strong urge to *do something* — fast.',
      options: [
        { id: 'stop', text: 'STOP: sit on your pack, drink a little, eat a handful of trail mix, and get the map and compass out.', effect: { add: { minutes: 10, morale: 10, lost: -5, water: -100, energy: 5 } }, next: 'stop', quality: 2, feedback: 'Ten minutes buys a calm head. You still have about two hours of useful light — no immediate danger, so the most valuable thing you can do is think before you walk. (Stage 1: STOP; Stage 15: acute stress narrows attention.)' },
        { id: 'hurry', text: 'Walk briskly in the direction the trail “feels” like it should be.', effect: { add: { minutes: 35, energy: -12, lost: 20, water: -150, warmth: -5 }, flags: ['sweaty'] }, next: 'hurried', quality: 0, feedback: 'Lost people who move without a plan typically *increase* their distance from their last known point (Koester’s lost-person data). You also sweated into your base layer — that moisture will cost insulation after dark.' },
        { id: 'climb', text: 'Climb the nearest rise to look around before deciding.', effect: { add: { minutes: 20, energy: -8, water: -100, lost: -5 } }, next: 'stop', quality: 1, feedback: 'Height can help — but in closed forest you see mostly trunks. You gain one useful thing: the phone shows a flicker of signal up here. Stopping to think first would have cost less.' },
      ],
    },
    {
      id: 'hurried',
      title: 'Deeper in',
      text: 'Thirty-five minutes later you jump a stream and scramble up a bank. Nothing is familiar. Your base layer is damp and you’re breathing hard.',
      options: [
        { id: 'stop', text: 'Stop now. Sit, drink, eat, and get the map and compass out.', effect: { add: { minutes: 10, morale: 5 } }, next: 'stop', quality: 2, feedback: 'Stopping late is still far better than not stopping. Unzip the jacket so the damp layer can start to dry while you think.' },
        { id: 'stream', text: 'Follow this stream downhill — water always leads to roads and people.', effect: { add: { minutes: 35, energy: -10, lost: 15, water: -100 } }, next: 'stream', quality: 0, feedback: '“Follow water downhill” is a rule of thumb, not a law. On this map the stream runs *away* from the road, into a ravine. Always check the rule against the map you have.' },
      ],
    },
    {
      id: 'stop',
      title: 'Taking stock',
      text: 'Map and compass out. You can’t pinpoint yourself, but you know you left the loop somewhere north of the footbridge, and the forest road lies roughly 1.5 km **south** — a line you cannot miss if you walk south. There was a flicker of phone signal on a knoll about 200 m up the slope.',
      options: [
        { id: 'knoll', text: 'Walk up to the knoll, send an SMS with your coordinates and plan (“off trail, OK, heading S to forest road; if not out by 18:30 I’ll stay put here”), then airplane mode.', effect: { add: { minutes: 15, battery: -6, rescue: 30, morale: 10, energy: -3 }, flags: ['msg'] }, next: 'plan', quality: 2, feedback: 'Delivered on the second try. Your flatmate now has a position, a plan and a deadline — that shrinks any future search area enormously. SMS gets through on signal too weak for a call. (Stage 1 signaling; Stage 14 how searches work.)' },
        { id: 'gps', text: 'Keep the phone’s map app open and follow the blue dot back to the loop.', effect: { add: { minutes: 10, battery: -18, lost: -15 } }, next: 'plan', quality: 1, feedback: 'A GPS fix is genuinely useful — but a lit screen plus GPS in the cold can burn 1 % a minute. A single fix, written on the map, then airplane mode, gets the same information for a fraction of the battery.' },
        { id: 'nophone', text: 'Leave the phone off. Map and compass only.', effect: { add: { minutes: 5 } }, next: 'plan', quality: 1, feedback: 'Saving the battery is sensible, but a 6 % SMS that tells someone where you are is one of the highest-value actions available. Nobody knows your route.' },
      ],
    },
    {
      id: 'plan',
      title: 'Relocate or stay?',
      text: 'You have roughly an hour and a half of useful light, 0.6 L of water or less, no injury, and a night of clear-sky frost coming. The road to the south is a long, unmissable **catching feature**.',
      options: [
        { id: 'bearing', text: 'One bounded attempt: a compass bearing of 190° — deliberately **aiming off** west of the car park — pacing as you go. Trigger: if not at the road by 16:45 or after 2 km of paces, stop and make camp.', effect: { add: { minutes: 5, morale: 5 }, flags: ['aimoff'] }, next: 'bearing', quality: 2, feedback: 'This is the textbook relocation: a linear catching feature, a deliberate aim-off so you’ll know which way to turn when you hit it, distance measured by pacing, and a time/distance trigger that caps the risk. (Stage 2 navigation; Stage 1 decisions and triggers.)' },
        { id: 'stay-msg', requiresFlag: 'msg', text: 'Stay. Someone has your coordinates; spend the light on shelter, fire and signals.', effect: { add: { minutes: 5, rescue: 10 } }, next: 'site', quality: 2, feedback: 'Also a strong choice: your position is known, and staying is reversible and cheap. A frosty night is uncomfortable but very survivable with preparation.' },
        { id: 'stay-nomsg', hiddenIfFlag: 'msg', text: 'Stay. Spend the light on shelter, fire and signals.', effect: { add: { minutes: 5 } }, next: 'site', quality: 1, feedback: 'Reasonable and safe — but nobody knows your route, so a search will start late and cover a big area. With a clear catching feature this close, one bounded relocation attempt was worth considering.' },
        { id: 'stream', text: 'Follow the stream downhill instead — it must reach the valley road eventually.', effect: { add: { minutes: 25, energy: -10, lost: 15, water: -100 } }, next: 'stream', quality: 0, feedback: 'The map shows that stream flowing north-east into a ravine, away from the road. Choosing a rule of thumb over the map in your hand is a classic error.' },
      ],
    },
    {
      id: 'stream',
      title: 'The ravine',
      text: 'The stream drops into a mossy ravine. Below you is a 4 m step of wet rock beside a small waterfall. The light under the trees is already greying.',
      options: [
        { id: 'bench', text: 'Back away from the edge. Climb to the flat bench you passed just above, and prepare for the night there.', effect: { add: { minutes: 15, morale: 5 } }, next: 'site', quality: 2, feedback: 'The best decision available. Wet rock, fading light and tired legs are exactly where serious injuries happen — and a fall here would turn “lost” into “injured and lost”.' },
        { id: 'bearing', text: 'Climb out of the ravine and take a compass bearing of 190° to the forest road, aiming off to the west.', effect: { add: { minutes: 10, energy: -5 }, flags: ['aimoff'] }, next: 'bearing', quality: 1, feedback: 'A sound navigation plan — but you’re now starting it later and more tired, so the trigger time matters more than ever.' },
        { id: 'down', text: 'Climb down beside the waterfall; the valley must open out below.', effect: { add: { minutes: 20, injury: 55, energy: -20, warmth: -15, morale: -25 } }, next: 'end-fall', quality: 0, feedback: 'Wet rock, moss and fading light. Your foot skates off a ledge. Committing to terrain you can’t reverse is the error that turns a nuisance into an emergency.' },
      ],
    },
    {
      id: 'bearing',
      title: 'On a bearing',
      text: 'You’re counting paces on 190°. Twenty minutes along, a wide windthrow of fallen spruce blocks the line — trunks piled chest-high, as far as you can see either way.',
      options: [
        { id: 'box', text: 'Box around it: 90° right, count 100 paces, resume 190° until clear, 90° left for 100 paces, then continue.', effect: { add: { minutes: 30, energy: -8, lost: -10, water: -100 } }, next: 'road', quality: 2, feedback: 'Right-angle offsets with counted paces keep you on your original line even when you can’t walk it. Slower than a straight line, far faster than being lost again.' },
        { id: 'through', text: 'Climb straight through the fallen trunks to hold the line.', effect: { add: { minutes: 30, energy: -15, injury: 15, water: -100 } }, next: 'road', quality: 0, feedback: 'You get through — with a gashed shin and wobbly legs. Windthrow is a leg-breaking hazard, trunks roll and snap. You got away with it; that’s not the same as a good decision.' },
        { id: 'drift', text: 'Follow a deer trail that curves roughly south around the blowdown.', effect: { add: { minutes: 30, lost: 25, energy: -8, water: -50 } }, next: 'trigger', quality: 0, feedback: 'Game trails go where deer want to go. Once you stop checking the compass, “roughly south” drifts into “somewhere” — and your pace count is now meaningless.' },
      ],
    },
    {
      id: 'road',
      title: 'The forest road',
      text: 'Gravel under your boots. You’ve hit the catching feature. Because you aimed off to the west, you know the car park must be **east** of you. It’s about 2.5 km by road.',
      options: [
        { id: 'east', text: 'Turn east. Steady, non-sweating pace, headlamp in hand, and an update SMS at the first bar of signal.', effect: { add: { minutes: 60, energy: -10, water: -150, lost: -60, rescue: 20, morale: 20, battery: -3 } }, next: 'end-car', quality: 2, feedback: 'A controlled finish: known direction, easy surface, and the people who may be worrying get an update.' },
        { id: 'shortcut', text: 'Cut the corner through the forest toward where the car park should be — it saves 800 m.', effect: { add: { minutes: 20, lost: 25, energy: -8 } }, next: 'trigger', quality: 0, feedback: 'You left a road — the one thing you were sure of — to save ten minutes. In failing light, “shortcuts” are how solved problems come back.' },
      ],
    },
    {
      id: 'trigger',
      title: 'The light is going',
      text: 'Nothing matches. It’s getting hard to see detail on the ground, and your trigger — or common sense — says the relocation attempt is over.',
      options: [
        { id: 'camp', text: 'Honour the trigger. Stop here and prepare for the night.', effect: { add: { minutes: 5, morale: 5 } }, next: 'site', quality: 2, feedback: 'The whole point of a trigger is that you decide *before* sunk cost and hope start talking. Stopping now keeps your remaining light for protection.' },
        { id: 'push', text: 'Keep going by headlamp — the road must be close.', effect: { add: { minutes: 90, energy: -25, warmth: -20, lost: 20, morale: -20, injury: 40 } }, next: 'end-fall', quality: 0, feedback: 'Plan-continuation bias. In the dark you step off a hidden bank and land hard.' },
      ],
    },
    {
      id: 'site',
      title: 'Choosing a spot',
      text: 'Three candidate spots within 100 m: (1) a **flat bench** 15 m above the stream hollow, under a living spruce at the edge of a small clearing; (2) the **sheltered hollow** right beside the stream, out of the breeze; (3) the **open ridge crest** where the phone flickered and you’d be most visible.',
      options: [
        { id: 'bench', text: 'The bench under the living spruce, beside the clearing.', effect: { add: { minutes: 10 } }, next: 'prep', quality: 2, feedback: 'Above the cold-air pool, sheltered from wind, no dead limbs overhead, dry ground — and the clearing is a ready-made signal panel. (Stage 1/5: site selection.)' },
        { id: 'hollow', text: 'The sheltered hollow by the stream — calm, and water is right there.', effect: { add: { minutes: 10 }, flags: ['coldsite', 'coldnight'] }, next: 'prep', quality: 0, feedback: 'It *feels* sheltered now. But on a clear, calm night cold air drains downhill and pools in hollows — often several degrees colder than a bench a few metres higher, with dew and frost to match.' },
        { id: 'ridge', text: 'The open ridge crest — best for signal and to be seen.', effect: { add: { minutes: 10 }, flags: ['exposed', 'coldnight'] }, next: 'prep', quality: 1, feedback: 'Visibility matters, but you don’t have to *sleep* where you signal. Wind across an open crest will strip heat all night. Sleep sheltered; signal from the clearing and the crest.' },
      ],
    },
    {
      id: 'prep',
      title: 'Before dark',
      text: 'However much light is left, it is the most valuable resource you have. Clear sky, frost and −1 °C are coming.',
      options: [
        { id: 'protect', text: 'In this order: a 30 cm bed of dry leaves and spruce tips; space blanket and pack as a windbreak/reflector; three armloads of dead wood graded pencil- to wrist-thick, stacked under the spruce; water from the stream with a tablet in it; a big arrow of branches and your orange pack cover in the clearing.', effect: { set: { minutes: 210 }, add: { energy: -10, warmth: 10, rescue: 10, water: 500, morale: 10 }, flags: ['prepared'] }, next: 'dusk', quality: 2, feedback: 'Ground insulation first (conduction to frozen ground is the biggest overnight loss), then fuel for a small fire, then water (treated — chlorine dioxide needs 30 min for bacteria/viruses and up to 4 h for *Cryptosporidium*), then signals — all before you need a headlamp.' },
        { id: 'fire', text: 'Get a fire going first — warmth and morale — and sort the rest out afterwards.', effect: { set: { minutes: 210 }, add: { energy: -8, morale: 5, warmth: 5 }, flags: ['nobed', 'coldnight'] }, next: 'dusk', quality: 1, feedback: 'You spend 30 minutes coaxing damp surface wood before finding dry dead spruce twigs. The fire is lovely — but there’s no ground bed and only a small woodpile, and you’ll be sitting on frozen ground all night.' },
        { id: 'trail', text: 'Use the light for one last search for the trail.', effect: { set: { minutes: 210 }, add: { energy: -12, lost: 10, morale: -10, water: -100 }, flags: ['nobed', 'coldnight'] }, next: 'dusk', quality: 0, feedback: 'You find nothing and return in the dark with no bed, no wood and no water. The last light is the most expensive thing to waste.' },
      ],
    },
    {
      id: 'dusk',
      title: '19:00 — Full dark',
      text: 'The clouds have gone. Stars are out and the temperature is dropping fast.',
      options: [
        { id: 'update', text: 'Walk by headlamp to the edge of the clearing, try for signal and send “staying put at [coords], sheltered, OK; next check 07:00”. Then phone off, inside your clothing.', effect: { set: { minutes: 630 }, add: { battery: -6, rescue: 15, morale: 10, warmth: -5 }, flags: ['msg'] }, next: 'night', quality: 2, feedback: 'Short, scheduled phone use — with the phone kept warm (cold lithium batteries sag) — keeps searchers informed and leaves reserve for the morning.' },
        { id: 'light', text: 'Use the phone as a torch and play music to keep your spirits up.', effect: { set: { minutes: 630 }, add: { battery: -25, morale: 5 } }, next: 'night', quality: 0, feedback: 'A little morale, bought with your one lifeline. You have a headlamp for light.' },
        { id: 'off', text: 'Phone off until morning.', effect: { set: { minutes: 630 } }, next: 'night', quality: 1, feedback: 'Saves the battery, but misses a cheap chance to update anyone who might be searching.' },
        { id: 'moveup', requiresFlag: 'coldsite', text: 'Mist is settling in the hollow and your breath hangs in the air. Move up to the bench now and re-lay your bed there, then send a short update from the clearing.', effect: { set: { minutes: 630 }, add: { energy: -10, battery: -6, rescue: 10, morale: 5 }, flags: ['msg'], clearFlags: ['coldsite', 'coldnight'] }, next: 'night', quality: 2, feedback: 'Excellent correction. Mist and still air in the hollow were the warning signs of a cold-air pool. Fifteen minutes of work now saves hours of shivering.' },
        { id: 'dropoff', requiresFlag: 'exposed', text: 'The breeze on the crest cuts straight through you. Drop 20 m into the trees on the lee side and rebuild your bed, then send a short update from the crest.', effect: { set: { minutes: 630 }, add: { energy: -10, battery: -6, rescue: 10, morale: 5 }, flags: ['msg'], clearFlags: ['exposed', 'coldnight'] }, next: 'night', quality: 2, feedback: 'Good: sleep sheltered, signal exposed. Wind was stripping your heat by convection far faster than the air temperature alone suggests.' },
      ],
    },
    {
      id: 'night',
      title: '02:00 — Frost',
      text: 'Everything is white with frost. It’s about −1 °C. You wake shivering.',
      options: [
        { id: 'manage', hiddenIfFlag: 'coldnight', text: 'Stay put: feed the small fire a few sticks, eat the rest of the trail mix, sip water, pull the beanie down, do slow isometric squeezes when you shiver, and doze in short bursts.', effect: { set: { minutes: 1010 }, add: { energy: -10, warmth: -10, morale: 5, rescue: 25, water: -200 } }, next: 'end-found', quality: 2, feedback: 'Uncomfortable but controlled. Your ground bed is doing the heavy lifting; food gives shivering the fuel it needs. At first light you whistle in threes from the clearing.' },
        { id: 'manage-cold', requiresFlag: 'coldnight', text: 'Stay put: feed the small fire a few sticks, eat the rest of the trail mix, sip water, pull the beanie down, do slow isometric squeezes when you shiver, and doze in short bursts.', effect: { set: { minutes: 1150 }, add: { energy: -25, warmth: -35, morale: -15, rescue: 15, water: -200 } }, next: 'end-cold', quality: 2, feedback: 'The right routine — but the earlier choice is now collecting its price. Whether it was sleeping on bare ground, in the cold-air hollow or on the windy crest, you have lost heat all night and the shivering will not stop.' },
        { id: 'walk', text: 'You can’t stand it — walk out by headlamp on a compass bearing.', effect: { set: { minutes: 800 }, add: { energy: -30, warmth: -30, lost: 20, morale: -30, injury: 40 } }, next: 'end-fall', quality: 0, feedback: 'Night travel in frost over windthrow and banks, cold and tired, is how an uncomfortable night becomes an injury.' },
      ],
    },
    {
      id: 'end-car',
      title: 'The car park',
      text: 'The car is frosted over. You start the engine, turn the heater up, and message your flatmate.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **stopped early**, used the map to find a **catching feature**, **aimed off** so you knew which way to turn, **boxed around** an obstacle instead of drifting, and bounded the attempt with a **trigger**. No search needed.' },
    },
    {
      id: 'end-found',
      title: '08:20 — Voices in the trees',
      text: 'At 07:50 you hear a shout. Three whistle blasts; three shouts back. A search team walks into your clearing at 08:20, following your arrow.',
      options: [],
      end: { outcome: 'rescued', summary: 'A **good site** above the cold-air pool, a **thick ground bed**, fuel and water **prepared in daylight**, and **signals in the clearing** turned a frosty night into a routine find. Every message you sent shrank the search area.' },
    },
    {
      id: 'end-cold',
      title: '10:40 — Found, shaking',
      text: 'Searchers reach you mid-morning. You are shivering violently, clumsy and slow to answer. They get you into a dry bag with a hot-water bottle on your chest and walk you out slowly.',
      options: [],
      end: { outcome: 'survived', summary: 'Your night routine was right, but an earlier choice — **no ground bed**, **the cold-air hollow** or **the windy crest** — cost heat for ten hours and left you mildly hypothermic. Site and insulation decisions made at 17:00 decide how you feel at 02:00.' },
    },
    {
      id: 'end-fall',
      title: 'A fall in the dark',
      text: 'You fall on steep, wet ground and can no longer bear weight on one leg. Wet, cold and far from where anyone would look, you wait for a long, difficult search. Rescuers find you the next afternoon, hypothermic and injured.',
      options: [],
      end: { outcome: 'critical', summary: 'The turning points were **moving without a plan or a trigger** and **committing to terrain or darkness you couldn’t reverse**. Staying put and protected — or a bounded, map-based relocation — used the same resources far more safely.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 2 — Desert survival
// ---------------------------------------------------------------------------------------------

const cap2Scenario: Scenario = {
  id: 'cap-2-scenario',
  title: 'Capstone 2 — Desert survival',
  stage: 19,
  environment: 'Hot desert basin, early summer',
  concepts: ['integration', 'water-needs', 'dehydration', 'heat-balance', 'stay-or-move', 'visibility', 'signaling', 'trip-plan'],
  intro: `**Setting:** an unsealed track across a hot desert basin, early summer. **41 °C** at 11:00, forecast **44 °C** by 15:00, humidity 12 %, light wind. Ground-surface temperature in full sun exceeds 60 °C. Sunset 19:40; overnight low about 24 °C.

**You:** driving with your friend **Sam**. Twenty minutes ago the temperature gauge spiked; a radiator hose has split and the engine is steaming. You are **38 km** from the sealed highway. You passed one vehicle, two hours ago.

**Who knows:** you left a trip plan with a friend in town: route, vehicle, and “raise the alarm if we haven’t called by 18:00”.

**Kit:** **5 L** of drinking water between you, a sunshade/tarp and cord, a small first-aid kit, a signal mirror in the glovebox, a torch, salty crackers and fruit, a tool roll with **self-amalgamating tape**, the spare tyre, long-sleeved shirts and hats. Phones: no signal.

It is **11:00**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '11:00',
  initial: { minutes: 0, water: 5000, energy: 80, warmth: 80, morale: 60, battery: 70, injury: 0, rescue: 25, lost: 10, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '11:00 — Steam and silence',
      text: 'The engine ticks as it cools. Heat pours off the bonnet. Sam says: “We could just walk to the highway — how far can it be?”',
      options: [
        { id: 'stop', text: 'STOP: both out of the sun into the vehicle’s shadow, drink, and think before doing anything else.', effect: { add: { minutes: 15, morale: 10, water: -400 } }, next: 'assess', quality: 2, feedback: 'In 41 °C the first priority is to stop the heat gain. You have a vehicle, water, shade material and a trip plan — the situation is serious but stable if you don’t make it worse.' },
        { id: 'fix', text: 'Fix it now — get the bonnet up and find that split hose before it gets even hotter.', effect: { add: { minutes: 45, energy: -15, water: -700, warmth: 5 }, flags: ['heatstress'] }, next: 'fixsun', quality: 0, feedback: 'Hard work in full sun beside a hot engine adds metabolic heat to solar and radiant heat. You both sweat heavily — water you can’t get back — and the engine is still far too hot to touch safely.' },
        { id: 'walk', text: 'Walk for the highway now, carrying 2 L each.', effect: { set: { minutes: 90 }, add: { energy: -30, water: -1400, warmth: 10, morale: -10, rescue: -15 }, flags: ['heatstress'] }, next: 'walkday', quality: 0, feedback: 'Walking in the midday desert can cost 1–1.5 L of sweat per hour per person. 38 km is 9–10 hours of walking — far more water than you can carry — and you’ve left the most visible object for 50 km.' },
      ],
    },
    {
      id: 'fixsun',
      title: 'Under the bonnet',
      text: 'The split is on the lower radiator hose. The metal is too hot to hold for long. Sam is flushed and quiet.',
      options: [
        { id: 'stop', text: 'Stop. Into the shade, drink, and leave the repair for the evening cool.', effect: { add: { minutes: 10, morale: 5, water: -400 } }, next: 'assess', quality: 2, feedback: 'Good correction. The repair isn’t going anywhere; your body temperature is. Evening will make the job cooler, safer and cheaper in water.' },
        { id: 'finish', text: 'Keep going — you’re nearly there.', effect: { add: { minutes: 40, energy: -15, water: -600, morale: -5 } }, next: 'assess', quality: 0, feedback: 'You tape the hose, but without coolant you can’t test it, and you’ve both spent over a litre of sweat each. Sam has a headache.' },
      ],
    },
    {
      id: 'walkday',
      title: '12:30 — Heat shimmer',
      text: 'An hour and a half later the vehicle is a speck behind you. Your mouths are dry, Sam is lagging and stumbling on the stones, and the highway is still more than 30 km away.',
      options: [
        { id: 'back', text: 'Turn back to the vehicle now, slowly, drinking as you go.', effect: { add: { minutes: 80, energy: -15, water: -600, morale: -10, rescue: 15 } }, next: 'assess', quality: 1, feedback: 'The right correction, made expensively. Searchers will look along the route for the *vehicle* — it is 20 times easier to see than two people.' },
        { id: 'on', text: 'Keep walking. Turning back means all this was wasted.', effect: { add: { minutes: 150, energy: -40, water: -1500, injury: 50, morale: -30 } }, next: 'end-walk', quality: 0, feedback: 'Sunk-cost thinking. The water is gone long before the distance is.' },
      ],
    },
    {
      id: 'assess',
      title: 'Taking stock',
      text: 'You list what you have. The question is how to use the water: it has to last until someone finds you — likely late tonight or tomorrow morning, if your trip plan works.',
      options: [
        { id: 'ration', text: 'Ration hard: a small cup each per hour, no more, to make it last.', effect: { add: { minutes: 10, water: -150, energy: -10, morale: -10 }, flags: ['heatstress'] }, next: 'shade', quality: 0, feedback: 'Myth. Water in the bottle doesn’t keep you alive — water in your body does. Rationing below need causes dehydration, which reduces sweating capacity and accelerates heat illness. **Ration sweat, not water.**' },
        { id: 'drink', text: 'Drink to thirst with small regular sips, eat salty crackers with it, and cut sweat loss instead: rest, shade, minimal work until evening.', effect: { add: { minutes: 10, water: -300, morale: 10 } }, next: 'shade', quality: 2, feedback: 'Correct. Resting in good shade might cost 0.3–0.5 L/h each instead of 1–1.5 L/h working in sun. The salt helps you retain what you drink. (Stage 1 water; Stage 8 heat stress.)' },
        { id: 'pour', text: 'Pour water over your heads and shirts every half hour to stay cool.', effect: { add: { minutes: 10, water: -1000, morale: 5 } }, next: 'shade', quality: 1, feedback: 'Evaporative cooling works — but in a limited supply your drinking water does more good inside you. Save external wetting for someone showing signs of heat illness.' },
      ],
    },
    {
      id: 'shade',
      title: 'Making shade',
      text: 'The sun is almost overhead. The vehicle’s shadow is small and shrinking. Inside the cabin, the thermometer reads 58 °C.',
      options: [
        { id: 'tarp', text: 'Rig the sunshade/tarp from the roof rack on the shady side, with a second layer and an air gap above; sit on seat cushions, not the ground; long loose sleeves and hats on.', effect: { add: { minutes: 30, energy: -5, warmth: -10, water: -300, morale: 10 }, flags: ['shade'] }, next: 'signal', quality: 2, feedback: 'A double layer with an air gap blocks radiant heat far better than a single sheet; getting off the 60 °C ground stops conduction; loose covering clothing reduces solar gain. (Stage 5 hot-climate shelter; Stage 8 heat balance.)' },
        { id: 'car', text: 'Sit inside the car with the doors open — at least the roof blocks the sun.', effect: { add: { minutes: 5, warmth: 15, water: -500, morale: -5 }, flags: ['heatstress'] }, next: 'signal', quality: 0, feedback: 'A parked car is an oven: the cabin radiates heat from every surface. You are gaining heat, not shedding it.' },
        { id: 'under', text: 'Lie in the shade under the vehicle once the engine has cooled.', effect: { add: { minutes: 20, warmth: -5, water: -350 } }, next: 'signal', quality: 1, feedback: 'Reasonable: shaded ground is much cooler, and the vehicle can’t move. Cramped and dusty, with poor air movement — a raised double shade would be better.' },
      ],
    },
    {
      id: 'signal',
      title: 'Being findable',
      text: 'Your friend in town expects a call by 18:00. Any search will drive or fly your route.',
      options: [
        { id: 'signals', text: 'Bonnet up, space-blanket and bright clothes on the roof, mirror out of the glovebox and within reach, torch ready; one phone check from the roof for signal, then phones off.', effect: { set: { minutes: 240 }, add: { rescue: 20, battery: -3, water: -200, morale: 10 }, flags: ['signals'] }, next: 'partner', quality: 2, feedback: 'Standard “disabled vehicle” signals, prepared once, in minutes. The mirror is the single most effective daytime signal to aircraft — but only if it’s in your hand when you hear the engine. (Stage 14.)' },
        { id: 'phone', text: 'Leave both phones on the dashboard searching for signal.', effect: { set: { minutes: 240 }, add: { battery: -40 } }, next: 'partner', quality: 0, feedback: 'Searching for a network in a dead zone drains batteries fast, and heat damages them. Check periodically from the highest point, then switch off.' },
        { id: 'tyre', text: 'Set the spare tyre alight now for a big smoke column.', effect: { set: { minutes: 240 }, add: { water: -300, morale: 5, rescue: 3 }, flags: ['heatstress'] }, next: 'partner', quality: 0, feedback: 'Nobody is looking yet, so your one-shot smoke signal is wasted — and burning a tyre is toxic hard work in the heat, and a fire hazard. Smoke is for when you hear or see a searcher.' },
      ],
    },
    {
      id: 'partner',
      title: '15:00 — Sam is unwell',
      text: 'Sam has a pounding headache, feels sick and dizzy when standing, and is sweating heavily. Sam is alert and answers questions sensibly.',
      options: [
        { id: 'care', hiddenIfFlag: 'heatstress', text: 'Heat exhaustion care: Sam lies in the coolest shade, loosen clothing, wet the skin and fan, sips of water with salty crackers; check every 15 minutes that Sam is alert and making sense.', effect: { set: { minutes: 480 }, add: { water: -1000, morale: 5 } }, next: 'evening', quality: 2, feedback: 'Correct. By 16:30 Sam’s headache is easing. Mental status is the key check: any confusion, odd behaviour or collapse means heat stroke — a time-critical emergency. (Stage 8 heat stress; Stage 9 environmental emergencies.)' },
        { id: 'care-hot', requiresFlag: 'heatstress', text: 'Heat exhaustion care: Sam lies in the coolest shade, loosen clothing, wet the skin and fan, sips of water with salty crackers; check every 15 minutes that Sam is alert and making sense.', effect: { set: { minutes: 280 }, add: { water: -500 } }, next: 'stroke', quality: 2, feedback: 'The right care — and your 15-minute checks catch what happens next. The heat Sam soaked up earlier (working or walking in the sun, sitting in a hot car, or drinking too little) has pushed core temperature too high.' },
        { id: 'gulp', text: 'Have Sam drink a litre straight down, then get back to work on the car so you’re ready to go.', effect: { set: { minutes: 280 }, add: { water: -1000 }, flags: ['heatstress'] }, next: 'stroke', quality: 0, feedback: 'Water helps, but exertion in the heat is exactly what turns heat exhaustion into heat stroke. Rest and cooling are the treatment.' },
        { id: 'goforhelp', text: 'Leave Sam at the car with the water; you walk for help.', effect: { add: { minutes: 180, water: -1500, energy: -40, injury: 40, rescue: -10 } }, next: 'end-walk', quality: 0, feedback: 'Splitting up leaves an ill person alone and sends you walking in the worst heat of the day. The trip plan means help is already coming to the vehicle.' },
      ],
    },
    {
      id: 'stroke',
      title: '15:40 — Sam stops making sense',
      text: 'Sam is confused, slurring, and tries to wander off into the sun. Sam’s skin is very hot to the touch — and still sweating.',
      options: [
        { id: 'cool', text: 'Heat stroke: cool first, now. Into shade, strip to underwear, soak Sam’s whole body with water and fan hard nonstop; wet cloths all over. No drinks while confused. Keep cooling until Sam is lucid, then keep watching.', effect: { set: { minutes: 480 }, add: { water: -1500, injury: 10, morale: -5 }, flags: ['stroke'] }, next: 'evening', quality: 2, feedback: 'Exactly right. Heat stroke is defined by nervous-system dysfunction plus high body temperature — sweating does not rule it out. WMS guidance: **cool first, transport second**; whole-body wetting with continuous fanning is the best field method without cold-water immersion. Using drinking water for this is justified. After 40 minutes Sam is talking sense again.' },
        { id: 'pills', text: 'Give Sam two paracetamol for the “fever”, and small sips; let Sam sleep it off.', effect: { add: { minutes: 120, injury: 60, morale: -30 } }, next: 'end-stroke', quality: 0, feedback: 'Myth-driven care. Heat stroke is not a fever: antipyretics don’t lower it and may harm the liver. A confused casualty shouldn’t drink. Every minute without active cooling increases organ damage.' },
        { id: 'fan', text: 'Save the drinking water: fan Sam and keep Sam in the shade.', effect: { set: { minutes: 480 }, add: { water: -200, injury: 35, morale: -10 }, flags: ['stroke'] }, next: 'evening', quality: 1, feedback: 'Fanning a dry body in 44 °C air does little — evaporation needs water on the skin. Sam slowly improves as the afternoon cools, but spent far longer at a dangerous temperature. This is the one time pouring your water on someone is the right trade.' },
      ],
    },
    {
      id: 'evening',
      title: '19:00 — The heat breaks',
      text: 'It is 34 °C and falling. Sunset in 40 minutes. You still have some water. It’s after 18:00, so your friend should be raising the alarm now.',
      options: [
        { id: 'stay', text: 'Stay with the vehicle. Eat and drink, rest, keep the torch ready to flash in threes at any headlights, and the mirror ready for dawn.', effect: { set: { minutes: 1170 }, add: { water: -800, morale: 10, rescue: 25, energy: 10 } }, next: 'dawn', quality: 2, feedback: 'Your trip plan named this route and vehicle. Staying put, visible and hydrated is the highest-probability path home. (Stage 14 stay or move; Stage 17 stranded in heat.)' },
        { id: 'repair', text: 'Repair the hose with self-amalgamating tape now it’s cool, top up the radiator with 2 L of drinking water, and drive out slowly in the cool of the night.', effect: { set: { minutes: 550 }, add: { water: -2000, energy: -10, morale: 10 } }, next: 'drive', quality: 1, feedback: 'A legitimate trade: water for mobility, done in the cool. The risk is that if the repair fails you have far less water — and you’ll be less easy to find than if you’d stayed.' },
        { id: 'nightwalk', text: 'Walk out overnight while it’s cool — 38 km, carrying the rest of the water.', effect: { add: { minutes: 600, water: -2000, energy: -45, injury: 25, morale: -20, rescue: -20 } }, next: 'end-nightwalk', quality: 0, feedback: 'Night travel is the *right way* to move in the desert when you must — but you mustn’t: help is coming to the vehicle, and 38 km is more than 10 hours for tired, dehydrated people. You also become far harder to find.' },
      ],
    },
    {
      id: 'drive',
      title: '20:10 — The needle climbs',
      text: '12 km down the track, the temperature needle is creeping into the red again. The tape is weeping.',
      options: [
        { id: 'leapfrog', text: 'Stop, let the engine cool for 30 minutes, re-wrap the tape, add half a litre, and continue in short, slow hops watching the gauge.', effect: { add: { minutes: 240, water: -800, lost: -10, morale: 15, rescue: 20 } }, next: 'end-drove', quality: 2, feedback: 'Patient mechanical sympathy. Each hop moves you along your own planned route, so if the car does die you are still where searchers will look.' },
        { id: 'push', text: 'Push on — you’re so close.', effect: { set: { minutes: 1170 }, add: { water: -300, morale: -20 } }, next: 'dawn', quality: 0, feedback: 'The engine seizes 4 km later. Luckily you’re still on the planned route — but now with much less water and no second chance to drive.' },
      ],
    },
    {
      id: 'dawn',
      title: '06:30 — An engine in the sky',
      text: 'The desert is pink and cool. A light aircraft is flying low along the track, several kilometres away.',
      options: [
        { id: 'mirror', requiresFlag: 'signals', text: 'The mirror is on the dash. Aim it through the sighting hole and sweep the flash across the aircraft.', effect: { add: { minutes: 30, rescue: 40, morale: 20 } }, next: 'end-plane', quality: 2, feedback: 'The plane banks and waggles its wings. A mirror flash can be seen from tens of kilometres in clear air.' },
        { id: 'hunt', hiddenIfFlag: 'signals', text: 'Scramble to find the mirror in the glovebox, then flash the aircraft.', effect: { add: { minutes: 45, rescue: 25, morale: 10 } }, next: 'end-plane', quality: 1, feedback: 'You find it as the plane is passing. It turns back on its second leg. Signals prepared *before* you need them turn a close call into a certainty.' },
        { id: 'wave', text: 'Run into the open, wave both arms and shout.', effect: { add: { minutes: 60, rescue: 15, energy: -5 } }, next: 'end-plane', quality: 1, feedback: 'Two small figures are nearly invisible from the air; the vehicle is what they see. You are found on a later pass.' },
      ],
    },
    {
      id: 'end-plane',
      title: 'Found by air',
      text: 'The aircraft circles and radios a ground team, which reaches you within two hours with water. Anyone who had heat illness is taken for a hospital check.',
      options: [],
      end: { outcome: 'rescued', summary: 'The **trip plan** told searchers where to look; **staying with the vehicle** made you findable; **resting in raised double shade and drinking to need** (rationing sweat, not water) kept you functional; and **prompt heat-illness care** kept Sam alive.' },
    },
    {
      id: 'end-drove',
      title: 'Headlights on tarmac',
      text: 'Just after midnight you limp onto the sealed highway and flag down a truck. You call your friend, who has already alerted police.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **waited for the evening cool**, used the **repair kit**, and managed the engine patiently along **your planned route** so failure would still leave you findable. Trading drinking water for mobility was a real risk — it paid off because you stayed disciplined.' },
    },
    {
      id: 'end-nightwalk',
      title: 'Found on the track',
      text: 'At first light a search vehicle finds the two of you sitting on the track 22 km from the car, out of water, severely dehydrated and with blistered feet. The empty car was found three hours earlier.',
      options: [],
      end: { outcome: 'survived', summary: 'You survived because you **stayed on the track** — the searchers’ route. But **leaving a findable vehicle** that help was already heading for cost you your water and nearly your health.' },
    },
    {
      id: 'end-walk',
      title: 'Heat casualties',
      text: 'Walking in the afternoon heat, you run out of water. Collapse follows. A search along the route finds the vehicle first, then you, late in the evening. Evacuation is by helicopter.',
      options: [],
      end: { outcome: 'critical', summary: 'The decisive errors were **walking in the heat of the day**, **leaving the vehicle** that searchers would look for, and **splitting up**. Sweat losses of 1–1.5 L/h outrun any water you can carry.' },
    },
    {
      id: 'end-stroke',
      title: 'Too late to cool',
      text: 'Sam becomes unresponsive. You pour on the remaining water and fan until your arms fail. Rescuers arrive after dark; Sam is flown to intensive care.',
      options: [],
      end: { outcome: 'critical', summary: 'Heat stroke is treated by **immediate whole-body cooling**, not medication or rest. The earlier choices — **working or waiting in the heat** and **not rationing sweat** — set it up; the delay in cooling decided it.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 3 — Cold-weather survival
// ---------------------------------------------------------------------------------------------

const cap3Scenario: Scenario = {
  id: 'cap-3-scenario',
  title: 'Capstone 3 — Cold-weather survival',
  stage: 19,
  environment: 'Subarctic taiga, February',
  concepts: ['integration', 'insulation', 'clothing', 'heat-loss', 'shelter-types', 'water-needs', 'immediate-danger', 'stay-or-move'],
  intro: `**Setting:** subarctic spruce forest and frozen lakes, February. **−15 °C**, light wind, clear sky. Sunset **16:20**. Overnight low about **−25 °C**. 80 cm of settled snow off the trail.

**You:** alone on a snowmobile on a marked, groomed trail. The drive belt has just shredded. There is no spare. You are **22 km** from the lodge.

**Who knows:** the lodge knows your trail and expects you back at **17:00**. Groomers and lodge sleds use this trail daily. There is **no mobile coverage** in the area.

**Kit (on you):** base layer, fleece, snowmobile suit, insulated boots, gauntlet mitts with liner gloves, balaclava, goggles. **In the storage box:** an extra fleece, spare liner gloves, a small snow shovel, folding saw, a canister stove with one 230 g winter-mix canister, a 1 L pot, lighter and storm matches, **1 L thermos of hot tea** and a 0.5 L bottle, a foam seat pad, an emergency bivvy bag, 4 energy bars, a small first-aid kit, headlamp, whistle. Phone at 60 %.

It is **14:30**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '14:30',
  initial: { minutes: 0, water: 1500, energy: 70, warmth: 70, morale: 55, battery: 60, injury: 0, rescue: 20, lost: 10, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '14:30 — The belt lets go',
      text: 'A bang, a smell of hot rubber, and silence. The machine won’t move. You were warm while riding in the wind; now you’re standing still at −15 °C.',
      options: [
        { id: 'stop', text: 'STOP — and before anything else, add insulation: the extra fleece under your suit, sit on the foam pad, and drink some hot tea.', effect: { add: { minutes: 10, warmth: 5, morale: 10, water: -150 } }, next: 'assess', quality: 2, feedback: 'Your heat production just fell from “riding and bracing” to “standing still”. Adding insulation *before* you get cold is far cheaper than rewarming later. (Stage 1 heat budget; Stage 8 thermoregulation.)' },
        { id: 'repair', text: 'Mitts off — get the belt cover open and see if it can be refitted.', effect: { add: { minutes: 30, warmth: -10, morale: -5 } }, next: 'repair', quality: 0, feedback: 'Bare skin on cold metal at −15 °C loses heat by conduction astonishingly fast. And you already know there’s no spare belt.' },
        { id: 'walk', text: 'Start walking back along the trail right away, while there’s light.', effect: { add: { minutes: 60, energy: -25, warmth: 5, lost: 5 }, flags: ['sweat', 'coldnight'] }, next: 'walk', quality: 0, feedback: 'A snowmobile suit is built for sitting in the wind, not for walking. You overheat within minutes and sweat soaks your base layer — moisture that will destroy its insulation the moment you stop.' },
      ],
    },
    {
      id: 'repair',
      title: 'Bare fingers',
      text: 'Twenty minutes later three fingertips are white, waxy and numb. The belt is in pieces anyway.',
      options: [
        { id: 'rewarm', text: 'Stop. Fingertips into your armpits against bare skin until feeling returns, liner gloves and mitts on, and forget the belt.', effect: { add: { minutes: 10, morale: 5, warmth: -3 } }, next: 'assess', quality: 2, feedback: 'Correct for frostnip: gentle skin-to-skin rewarming. Feeling comes back with a painful tingle and no lasting damage.' },
        { id: 'rub', text: 'Rub them hard with snow to get the circulation going.', effect: { add: { minutes: 10, injury: 15, warmth: -5 }, flags: ['frostbite'] }, next: 'assess', quality: 0, feedback: '**Myth.** Rubbing — especially with snow — grinds ice crystals through frozen tissue and cools it further. Never rub frostbitten or frostnipped skin (WMS frostbite guidelines).' },
        { id: 'keep', text: 'Keep going a few more minutes — you might still find a way to fix it.', effect: { add: { minutes: 20, injury: 20, warmth: -10 }, flags: ['frostbite'] }, next: 'assess', quality: 0, feedback: 'Numb fingers stop sending pain warnings, which is exactly when frostnip becomes frostbite.' },
      ],
    },
    {
      id: 'walk',
      title: 'Deep snow',
      text: 'An hour later you’ve covered barely 3 km: wind-drifted sections of the trail are knee-deep. You’re steaming inside the suit, your base layer is wet, and the sun is on the horizon.',
      options: [
        { id: 'back', text: 'Stop, open the vents, and follow your own track back to the sled — it has your stove, pad, bivvy bag and shovel, and it’s far easier to spot than you.', effect: { add: { minutes: 50, energy: -10, warmth: -10 } }, next: 'shelter', quality: 1, feedback: 'The right correction. You’ve spent energy and wetted your insulation, but you’re back with your equipment and on the trail searchers will use.' },
        { id: 'on', text: 'Keep going. As long as you keep moving you’ll stay warm.', effect: { add: { minutes: 300, energy: -45, warmth: -45, morale: -30, injury: 20 } }, next: 'end-walk', quality: 0, feedback: 'True only while you have energy. At −25 °C in the dark, soaked with sweat and exhausted, the moment you slow down you start to cool fast.' },
      ],
    },
    {
      id: 'assess',
      title: 'Taking stock',
      text: 'The machine is dead. No signal. The lodge expects you at 17:00, knows this trail, and will send sleds along it. Sunset at 16:20. Tonight: −25 °C. Across a frozen lake to the west, the map shows a ploughed road about 3 km away.',
      options: [
        { id: 'stay', text: 'Stay with the sled on the trail: shelter, water and signals before dark.', effect: { add: { minutes: 5, morale: 5 } }, next: 'shelter', quality: 2, feedback: 'The lodge knows your route; searchers will come along this trail; the sled is a big visible object and a store of equipment. Staying is reversible — walking into a −25 °C night is not.' },
        { id: 'walk', text: 'Walk back along the trail — 22 km, maybe six hours.', effect: { add: { minutes: 60, energy: -25, warmth: 5, lost: 5 }, flags: ['sweat', 'coldnight'] }, next: 'walk', quality: 0, feedback: 'Six hours was optimistic: soft drifts and a heavy suit make it more like ten. You start sweating within minutes.' },
        { id: 'lake', text: 'Cut straight across the frozen lake to the ploughed road — only 3 km.', effect: { add: { minutes: 40, energy: -15, warmth: -40, injury: 30, morale: -40 } }, next: 'end-ice', quality: 0, feedback: 'Unknown ice. Inlets, outlets, springs and pressure ridges leave thin ice even in deep cold, often hidden under snow. You broke through near the inlet.' },
      ],
    },
    {
      id: 'shelter',
      title: 'Shelter before dark',
      text: 'Settled snow 80 cm deep beside the trail, small spruce around. The light is going blue.',
      options: [
        { id: 'trench', text: 'A snow trench beside the sled. Strip down to base layer and shell while digging, work at a steady pace, roof it with the sled cover and snow blocks, floor it with the pad and spruce boughs — layers back on the minute you stop.', effect: { add: { minutes: 75, energy: -15, warmth: 10, morale: 10, rescue: 5 } }, next: 'fire', quality: 2, feedback: '“Be bold, start cold”: venting while working keeps your insulation dry for the night. A trench is fast (about an hour), below the wind, and snow is an excellent insulator. (Stage 5 snow shelters; Stage 1 clothing.)' },
        { id: 'trench-hot', text: 'The same trench, but dig hard and fast in your full suit to beat the dark.', effect: { add: { minutes: 50, energy: -20, warmth: 5 }, flags: ['sweat', 'coldnight'] }, next: 'fire', quality: 1, feedback: 'A good shelter — built by soaking your insulation with sweat. You’ll feel it after midnight.' },
        { id: 'quinzhee', text: 'A quinzhee: pile a big mound of snow, let it settle, then hollow it out.', effect: { add: { minutes: 150, energy: -30, warmth: -5 }, flags: ['sweat', 'coldnight'] }, next: 'fire', quality: 1, feedback: 'Warm and strong when finished, but a quinzhee needs 1–2 hours for the piled snow to sinter plus hours of heavy work. You finish in darkness, exhausted and damp.' },
        { id: 'sled', text: 'Just sit in the lee of the sled, wrapped in the bivvy bag.', effect: { add: { minutes: 15, warmth: -10 }, flags: ['coldnight'] }, next: 'fire', quality: 0, feedback: 'Low effort, but you are sitting in moving −25 °C air, exposed to the clear sky. You’ll lose heat by convection and radiation all night.' },
      ],
    },
    {
      id: 'fire',
      title: 'Water and heat',
      text: 'You have one gas canister, a pot, and a thermos with a little tea left. You’ll need water — and warmth — through a long night.',
      options: [
        { id: 'outside', text: 'Run the stove at the entrance with the doorway open: melt snow for hot drinks, refill the thermos and bottle, and put a sealed bottle of hot water in the bivvy bag. Store bottles upside-down inside your jacket.', effect: { set: { minutes: 450 }, add: { water: 1000, warmth: 10, morale: 10, energy: 5 } }, next: 'night', quality: 2, feedback: 'Melting snow on a stove is fuel-efficient; hot drinks and a hot-water bottle deliver heat right where you need it. Upside-down bottles freeze at the base, not the lid. Ventilation keeps carbon monoxide out. (Stage 3 heat; Stage 4 water.)' },
        { id: 'inside', text: 'Seal the entrance with a snow block and run the stove inside to warm the shelter.', effect: { set: { minutes: 450 }, add: { water: 800, warmth: 15, morale: 5 }, flags: ['co'] }, next: 'conight', quality: 0, feedback: 'It feels wonderful — for a while. A stove in a sealed snow shelter produces carbon monoxide, which is odourless and accumulates quickly. Every snow shelter needs a vent, and a stove needs an open door.' },
        { id: 'snow', text: 'Save the gas: eat snow for water through the night.', effect: { set: { minutes: 450 }, add: { warmth: -15, energy: -10, water: 200 }, flags: ['coldnight'] }, next: 'night', quality: 0, feedback: 'Your body pays to melt that snow and warm the water — heat you can’t spare at −25 °C — and it chills your mouth and throat. Fuel is for exactly this.' },
      ],
    },
    {
      id: 'night',
      title: '22:00 — Deep cold',
      text: 'It’s −24 °C under hard stars. You’re in the bivvy bag, shivering on and off.',
      options: [
        { id: 'routine', hiddenIfFlag: 'coldnight', text: 'Routine: eat a bar, sip hot drink, hot-water bottle against your chest, pad under hips and shoulders, isometric squeezes when you shiver, and at 03:00 another hot drink with the door open.', effect: { set: { minutes: 1020 }, add: { energy: -10, warmth: -10, water: -500, morale: 5, rescue: 20 } }, next: 'dawn', quality: 2, feedback: 'A long, cold, controlled night. Calories feed shivering; warm fluids and a hot bottle on the trunk add heat where it matters; dry insulation and ground insulation do the rest.' },
        { id: 'routine-cold', requiresFlag: 'coldnight', text: 'Routine: eat a bar, sip hot drink, hot-water bottle against your chest, pad under hips and shoulders, isometric squeezes when you shiver, and at 03:00 another hot drink with the door open.', effect: { set: { minutes: 1020 }, add: { energy: -25, warmth: -30, water: -500, morale: -10, rescue: 20 } }, next: 'dawn', quality: 2, feedback: 'The right routine — but earlier decisions are now collecting. Sweat-damp layers, an open lee instead of a shelter, or cooling yourself by eating snow: each one is costing heat hour after hour. You shiver violently until dawn.' },
        { id: 'walkout', text: 'Too cold to stay still — walk out along the trail by headlamp.', effect: { add: { minutes: 240, energy: -40, warmth: -40, morale: -30, injury: 20 } }, next: 'end-walk', quality: 0, feedback: 'Walking warms you until your energy runs out — then you cool fast, far from your shelter and stove.' },
      ],
    },
    {
      id: 'conight',
      title: '22:00 — Headache',
      text: 'The shelter is cosy, but your head is pounding, you feel sick, and you’re very, very sleepy. The stove flame has gone lazy and yellow.',
      options: [
        { id: 'sleep', text: 'It’s exhaustion. Turn the stove down low and sleep it off.', effect: { add: { minutes: 180, injury: 70, warmth: -10 } }, next: 'end-co', quality: 0, feedback: 'Headache, nausea and drowsiness in an enclosed space with a burning stove are carbon-monoxide poisoning until proven otherwise.' },
        { id: 'vent', text: 'Suspect carbon monoxide: stove off, kick out the door block, crawl into fresh air and breathe. Punch a vent hole; the stove only ever runs again with the door open.', effect: { set: { minutes: 1020 }, add: { injury: 10, warmth: -20, energy: -15, morale: -5, rescue: 20 } }, next: 'dawn', quality: 2, feedback: 'Exactly right: remove the source, get to fresh air. Your headache slowly fades. A cold night follows, but you are alive to be cold.' },
      ],
    },
    {
      id: 'dawn',
      title: '07:30 — First light',
      text: '−26 °C, clear and still. The lodge will have raised the alarm last evening; search sleds usually run the trail at first light.',
      options: [
        { id: 'signal', hiddenIfFlag: 'frostbite', text: 'Stamp a huge X in open snow beside the trail, spread the bivvy bag on the sled, make a hot drink, and wait at the shelter entrance listening for engines, whistle ready.', effect: { add: { minutes: 90, rescue: 40, morale: 15 } }, next: 'end-found', quality: 2, feedback: 'Ground-to-air and trail-side signals in minutes, then warmth while you wait. (Stage 14.)' },
        { id: 'signal-f', requiresFlag: 'frostbite', text: 'Three fingertips are swollen, blistered and numb — frostbite that thawed overnight. Loose dry padding between the fingers, back into mitts, no rubbing, keep them from refreezing, ibuprofen from the kit. Then stamp out a big X beside the trail and wait at the entrance.', effect: { add: { minutes: 90, rescue: 40, morale: 5 } }, next: 'end-frost', quality: 2, feedback: 'Correct frostbite care in the field: protect thawed tissue, never let it refreeze, don’t rub, and ibuprofen is recommended by current WMS guidance. Blisters are left for medical care.' },
        { id: 'walk-trail', hiddenIfFlag: 'frostbite', text: 'Pack up and walk out along the packed trail now it’s light.', effect: { add: { minutes: 120, energy: -20, warmth: -5, rescue: 20 } }, next: 'end-found', quality: 1, feedback: 'Daylight travel on a packed trail searchers will use isn’t unreasonable — but you’re tired and cold, you left your shelter and stove behind, and the sled at the site was the thing they were looking for.' },
        { id: 'walk-trail-f', requiresFlag: 'frostbite', text: 'Pack up and walk out along the packed trail now it’s light.', effect: { add: { minutes: 120, energy: -20, warmth: -10, injury: 10, rescue: 20 } }, next: 'end-frost', quality: 1, feedback: 'You leave the shelter with frostbitten fingers that can refreeze in the wind — and every clumsy task hurts them further.' },
      ],
    },
    {
      id: 'end-found',
      title: 'Engines on the trail',
      text: 'Two lodge sleds come round the bend with a sled-towed rescue toboggan. Hot drinks, a down bag, and a ride home.',
      options: [],
      end: { outcome: 'rescued', summary: 'You **insulated before you got cold**, **stayed with the sled on a known route**, built a **fast trench while venting sweat**, made water with the **stove in a ventilated space**, and ran a disciplined night routine. The lodge’s knowledge of your route did the rest.' },
    },
    {
      id: 'end-frost',
      title: 'Rescued — with frostbite',
      text: 'The search sleds find you mid-morning. At hospital your fingers are rewarmed and treated; you’ll keep them, but they will be sensitive to cold for years.',
      options: [],
      end: { outcome: 'survived', summary: 'You survived the night well, but **bare-handed work on cold metal** — and **rubbing or pushing on when numb** — turned frostnip into frostbite in the first half hour. Mitts on, skin-to-skin rewarming at the first white patch.' },
    },
    {
      id: 'end-walk',
      title: 'Found on the trail',
      text: 'A search sled finds you at 03:00, collapsed in a drift, barely responsive. You are carried out on the toboggan with severe hypothermia.',
      options: [],
      end: { outcome: 'critical', summary: 'The decisive error was **walking in a sweat-soaked suit into a −25 °C night**, leaving shelter, stove and bivvy bag behind. Staying with the sled — insulated, sheltered and dry — was the safer choice with the same resources.' },
    },
    {
      id: 'end-co',
      title: 'Carbon monoxide',
      text: 'Searchers find the sled at dawn and dig into the shelter. You are unconscious. You are flown to hospital for hyperbaric treatment.',
      options: [],
      end: { outcome: 'critical', summary: 'A **stove in a sealed snow shelter** and **ignoring headache, nausea and drowsiness** nearly killed you. Always ventilate: an open door for the stove, a vent hole in the roof.' },
    },
    {
      id: 'end-ice',
      title: 'Through the ice',
      text: 'You break through to the waist near the inlet. Using your elbows and kicking flat, you roll out onto thicker ice — soaked to the chest at −15 °C, 2 km from the sled. A passing groomer spots you at dusk; you are evacuated with moderate hypothermia.',
      options: [],
      end: { outcome: 'critical', summary: '**A shortcut across unknown ice** turned a stable situation into a cold-water emergency. Inlets and outlets are the thin spots. Staying on the known trail, with your equipment, was the safer choice.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 4 — Tropical environment
// ---------------------------------------------------------------------------------------------

const cap4Scenario: Scenario = {
  id: 'cap-4-scenario',
  title: 'Capstone 4 — Tropical environment',
  stage: 19,
  environment: 'Lowland tropical rainforest, wet season',
  concepts: ['integration', 'water-treatment', 'stay-or-move', 'site-selection', 'shelter-types', 'signaling', 'immediate-danger', 'risk'],
  intro: `**Setting:** lowland tropical rainforest in the wet season. **29 °C**, humidity about 90 %. A heavy downpour arrives most afternoons between 15:00 and 17:00. Sunset **18:10**. The canopy is closed; you can rarely see more than 20 m.

**You:** on a guided three-day trek from a river lodge. At 12:20 you stepped off the trail for a toilet stop, came back by a different animal path, and have been unable to find the trail or the group since.

**Who knows:** the guide’s briefing was clear: *“If you’re ever separated — stop, stay put, and blow your whistle. We will come back for you.”* The guide carries a satellite messenger. The lodge sits on a large river used by boats every day; streams in this area drain to it.

**Kit:** a daypack, **0.5 L of water**, 6 chlorine-dioxide tablets, a poncho, 10 m of paracord, a small knife, lighter, headlamp, whistle, DEET insect repellent, a small first-aid kit, 2 energy bars, spare socks in a dry bag. Long sleeves and trousers. Phone at 55 %, no signal. A bramble scratch on your shin from this morning.

It is **13:00**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '13:00',
  initial: { minutes: 0, water: 500, energy: 70, warmth: 90, morale: 50, battery: 55, injury: 5, rescue: 30, lost: 45, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '13:00 — Which way was the trail?',
      text: 'Green walls in every direction. You have been walking back and forth for forty minutes. Insects whine; sweat runs into your eyes.',
      options: [
        { id: 'stop', text: 'STOP. Stand still, give three long whistle blasts, and listen for a full minute. Repeat.', effect: { add: { minutes: 10, rescue: 10, morale: 10 } }, next: 'wait', quality: 2, feedback: 'Exactly what the guide asked. A whistle carries much further than a voice and costs no energy; stopping keeps you close to where the group will search first.' },
        { id: 'run', text: 'Shout and hurry back the way you think you came.', effect: { add: { minutes: 40, lost: 25, energy: -10, water: -200 } }, next: 'wait', quality: 0, feedback: 'Forty sweaty minutes later you are further from where the guide will look. Moving targets are much harder to find than stationary ones. (Stage 14 how searches work.)' },
        { id: 'path', text: 'Follow what looks like a trail corridor through the undergrowth.', effect: { add: { minutes: 30, lost: 15, water: -150, energy: -5 } }, next: 'wait', quality: 0, feedback: 'Animal paths look like trails — that’s how you got here. They branch and fade.' },
      ],
    },
    {
      id: 'wait',
      title: 'Whistle and wait',
      text: 'No reply yet. The forest swallows sound, and the group may be a kilometre away before they notice you’re missing.',
      options: [
        { id: 'mark', text: 'Stay put as briefed: tie the bright poncho at head height, blow three blasts every 5–10 minutes, and sit where you can see around you.', effect: { add: { minutes: 30, rescue: 15, morale: 5 } }, next: 'water', quality: 2, feedback: 'A stationary, audible, visible person in a known general area is what searches are built to find. The poncho gives searchers something to see that isn’t green.' },
        { id: 'loop', text: 'Explore in a small loop to find the trail, snapping twigs to mark your way back.', effect: { add: { minutes: 30, energy: -5, lost: -5, water: -100 } }, next: 'water', quality: 1, feedback: 'Marked, bounded exploration is far better than wandering — but it still moves you and quiets your whistle while the group may be close.' },
        { id: 'phone', text: 'Walk around holding the phone up, looking for signal.', effect: { add: { minutes: 30, battery: -20, lost: 10, water: -100 } }, next: 'water', quality: 0, feedback: 'There is no network under this canopy. You’ve used battery, water and position for nothing.' },
      ],
    },
    {
      id: 'water',
      title: 'Thirst',
      text: 'Your water is nearly gone — in this heat and humidity you are sweating 0.5–1 L an hour even sitting still. A small brown stream runs 50 m downslope.',
      options: [
        { id: 'treat', text: 'Fill the bottle at the stream through a bandana, add a chlorine-dioxide tablet and wait the full contact time; meanwhile rig the poncho to funnel the afternoon rain into your bottle.', effect: { add: { minutes: 40, water: 1000, morale: 5 } }, next: 'decide', quality: 2, feedback: 'Pre-filtering removes sediment that shields microbes; chlorine dioxide needs about 30 minutes for bacteria and viruses and up to 4 hours for *Cryptosporidium* (longer if cold or cloudy). Rain collected straight off a clean poncho is low-risk and saves tablets. (Stage 4 treatment science.)' },
        { id: 'raw', text: 'Drink straight from the stream — it’s flowing, so it’s clean.', effect: { add: { minutes: 5, water: 700 }, flags: ['sick'] }, next: 'decide', quality: 0, feedback: '**Myth.** Flowing water carries whatever is upstream — animals, villages, run-off. Tropical surface water commonly carries bacteria, protozoa and viruses. Illness may take hours to days to appear.' },
        { id: 'vine', text: 'Cut a liana and drink the sap — you’ve seen it done on TV.', effect: { add: { minutes: 20, water: 100, injury: 5 } }, next: 'decide', quality: 0, feedback: 'Some vines hold drinkable water; many carry irritant or toxic milky sap. Without training in local species, it’s a gamble for a few sips — and the stream plus a tablet is right there.' },
      ],
    },
    {
      id: 'decide',
      title: 'Stay or move?',
      text: 'It is mid-afternoon. The group has surely noticed you’re missing. Thunder mutters in the distance.',
      options: [
        { id: 'stay', text: 'Stay within sight of this spot, prepare for a night, and keep the whistle schedule.', effect: { set: { minutes: 210 }, add: { rescue: 10, morale: 5, water: -300 } }, next: 'shelter', quality: 2, feedback: 'The guide is searching near where you were lost; staying keeps the search area small. Time now goes into shelter before the downpour. (Stage 14 stay or move.)' },
        { id: 'uphill', text: 'Climb uphill to look for the trail on the ridge.', effect: { set: { minutes: 210 }, add: { lost: 20, energy: -15, water: -400, rescue: -10 } }, next: 'shelter', quality: 0, feedback: 'Steep, slippery, and away from where you were last seen. You find no trail and arrive back, soaked with sweat, as the storm arrives.' },
        { id: 'downstream', text: 'Start following the stream downhill toward the big river now.', effect: { set: { minutes: 210 }, add: { energy: -15, lost: 10, water: -400, rescue: -10 } }, next: 'shelter', quality: 1, feedback: 'Following drainage is a valid long-term plan — but not while an organised search for you is only hours old. The banks are a tangle and you manage barely a kilometre before the storm stops you.' },
      ],
    },
    {
      id: 'shelter',
      title: '16:30 — The sky goes dark',
      text: 'The first heavy drops hit the canopy. You have about an hour and a half of light and a downpour to deal with.',
      options: [
        { id: 'raised', text: 'A raised bed: two poles lashed between trees with the paracord, a mat of sticks and palm fronds on top, the poncho pitched steeply as a roof. Sited off any drainage line, with no dead branches above, no ant or termite nests, and not on an animal path.', effect: { set: { minutes: 480 }, add: { energy: -15, morale: 10, warmth: -5 } }, next: 'night', quality: 2, feedback: 'Off the ground you are away from run-off, ants, leeches and most crawling things; a steep roof sheds tropical rain. Site checks overhead and underfoot matter more than anything you build. (Stage 5 tropical shelters.)' },
        { id: 'ground', text: 'A bed of leaves on the ground under the poncho, in a sheltered dip.', effect: { set: { minutes: 480 }, add: { energy: -5, warmth: -5 }, flags: ['ground'] }, next: 'night', quality: 0, feedback: 'A “sheltered dip” in a rainforest is a drainage line. The ground is where the water, ants and leeches are.' },
        { id: 'bank', text: 'The flat, sandy stream bank — open, soft and easy.', effect: { set: { minutes: 630 }, add: { energy: -5, morale: 5 } }, next: 'flood', quality: 0, feedback: 'It is flat and soft *because* floods deposit sand there. A storm upstream can raise a rainforest stream by a metre in minutes, even when it isn’t raining where you are.' },
      ],
    },
    {
      id: 'night',
      title: '21:00 — Rain and insects',
      text: 'Rain hammers the poncho, then stops. Mosquitoes arrive in clouds. Everything you own is damp.',
      options: [
        { id: 'care', hiddenIfFlag: 'ground', text: 'Repellent on exposed skin, sleeves and trousers tucked in; take off wet shoes and socks, dry your feet, dry socks on for sleep only; shoes hung upside-down; three whistle blasts whenever the rain eases.', effect: { set: { minutes: 1020 }, add: { morale: 5, energy: 5, rescue: 5 } }, next: 'bodycheck', quality: 2, feedback: 'Constant wet is the tropical enemy: feet left wet for days develop immersion foot, and bites become infected. Keep one set of socks dry for sleeping, even if it means putting wet ones back on in the morning.' },
        { id: 'care-ground', requiresFlag: 'ground', text: 'Repellent on exposed skin, sleeves and trousers tucked in; take off wet shoes and socks, dry your feet, dry socks on for sleep only; shoes hung upside-down; three whistle blasts whenever the rain eases.', effect: { set: { minutes: 1020 }, add: { morale: -15, energy: -10, injury: 10 } }, next: 'bodycheck', quality: 2, feedback: 'Good routine — but at 23:00 a sheet of run-off pours through your dip, and at 02:00 you wake covered in biting ants. Your ground-level site is now costing you sleep, dryness and skin.' },
        { id: 'shoes', text: 'Keep your wet shoes and socks on all night — you might need to move fast.', effect: { set: { minutes: 1020 }, add: { injury: 10, morale: -5 } }, next: 'bodycheck', quality: 0, feedback: 'Twelve hours of soaked feet in warm water softens and damages skin; it’s the first step to immersion foot and infection.' },
        { id: 'fire', text: 'Spend the evening trying to light a fire from the soaked wood for smoke and morale.', effect: { set: { minutes: 1020 }, add: { energy: -15, morale: -5 } }, next: 'bodycheck', quality: 1, feedback: 'Possible with patience — split dead standing wood has dry cores — but in a rainforest in the wet season fire is a low-value, high-effort task tonight. You aren’t cold; you’re wet and bitten.' },
      ],
    },
    {
      id: 'flood',
      title: '23:30 — A roar in the dark',
      text: 'You wake to a rising roar. Your headlamp shows brown water, full of leaves and branches, already lapping at the edge of your poncho.',
      options: [
        { id: 'up', text: 'Out and straight uphill, away from the channel, now. Grab the pack only if it’s already in your hand.', effect: { set: { minutes: 1020 }, add: { morale: -20, energy: -15, warmth: -5 } }, next: 'bodycheck', quality: 2, feedback: 'Right. Seconds matter in a flash flood; kit can be replaced. You spend the rest of the night hunched on a slope, but safe.' },
        { id: 'gear', text: 'Pack everything up properly first so you don’t lose your kit.', effect: { set: { minutes: 1020 }, add: { morale: -25, energy: -20, injury: 20 } }, next: 'bodycheck', quality: 0, feedback: 'By the time you’re packed the water is at your knees, pushing hard. You lose your footing, get dragged a few metres and scramble out bruised. You were lucky.' },
        { id: 'cross', text: 'Cross to the higher bank on the other side.', effect: { add: { minutes: 10, injury: 60, warmth: -20, morale: -40 } }, next: 'end-swept', quality: 0, feedback: 'Never enter moving floodwater, especially in the dark. Knee-deep fast water can knock an adult over.' },
      ],
    },
    {
      id: 'bodycheck',
      title: '06:00 — Body check',
      text: 'Grey light. You check yourself over: yesterday’s scratch on your shin is red and puffy at the edges; there are two leeches on your ankle; your feet are pale and wrinkled.',
      options: [
        { id: 'care', hiddenIfFlag: 'sick', text: 'Slide a fingernail under each leech’s sucker to detach it; irrigate the scratch with plenty of treated water and cover it with a clean dressing; dry and air your feet, then dry socks on.', effect: { set: { minutes: 1080 }, add: { water: -300, injury: -5, morale: 5 } }, next: 'dawn', quality: 2, feedback: 'Leeches are removed by breaking the seal of the sucker — not burning, salting or yanking, which can make them regurgitate into the wound. In the tropics small wounds become infected fast; irrigation with lots of clean water is the most important step. (Stage 9 wounds.)' },
        { id: 'care-sick', requiresFlag: 'sick', text: 'You’ve had cramps and watery diarrhoea since 03:00. Same leech, wound and foot care — and drink more treated water, a little at a time, with the sugar and salt from your energy bars.', effect: { set: { minutes: 1080 }, add: { water: -500, energy: -15, morale: -10 } }, next: 'dawn', quality: 2, feedback: 'Correct priorities: diarrhoea in the heat is a dehydration problem first. Small frequent sips with some sugar and salt, and treat *all* water from now on. Yesterday’s untreated stream water is the likely cause.' },
        { id: 'burn', text: 'Burn the leeches off with the lighter and leave the scratch — it’s tiny.', effect: { set: { minutes: 1080 }, add: { injury: 10 }, flags: ['sick'] }, next: 'dawn', quality: 0, feedback: 'Burning makes leeches regurgitate gut contents into the bite, and an uncleaned scratch in hot, wet conditions is an infection waiting to happen.' },
      ],
    },
    {
      id: 'dawn',
      title: '07:00 — Stay or follow the water?',
      text: 'Day 2. Birds everywhere, no human sounds yet. The search will have resumed at first light.',
      options: [
        { id: 'stay', hiddenIfFlag: 'sick', text: 'Stay: move to the most open spot nearby, poncho up as a marker, three whistle blasts every 10 minutes and whenever you hear anything.', effect: { set: { minutes: 1280 }, add: { rescue: 40, morale: 15, water: -300 } }, next: 'end-found', quality: 2, feedback: 'The search is concentrated near your last known point; your whistle turns “near” into “found”.' },
        { id: 'stay-sick', requiresFlag: 'sick', text: 'Stay: move to the most open spot nearby, poncho up as a marker, three whistle blasts every 10 minutes and whenever you hear anything.', effect: { add: { minutes: 200, rescue: 40, water: -400, energy: -10 } }, next: 'end-sick', quality: 2, feedback: 'The right choice — especially now that you are ill. Moving would dehydrate you faster.' },
        { id: 'follow', text: 'Follow the stream downhill toward the big river and the boats.', effect: { add: { minutes: 20, energy: -5 } }, next: 'drainage', quality: 1, feedback: 'A reasonable plan if nobody were searching — drainage leads to the river, and rivers carry people. But you are leaving the area the search is concentrated in.' },
      ],
    },
    {
      id: 'drainage',
      title: 'Following the water',
      text: 'The stream grows as side-streams join. The banks are a tangle of roots and fallen trunks; in places the water runs between steep rock walls.',
      options: [
        { id: 'beside', text: 'Travel beside the stream, not in it: around log-jams and gorges on the bank; cross only at wide, shallow riffles below knee depth, facing upstream with a pole; snap branches as a trail for searchers.', effect: { add: { minutes: 300, energy: -25, water: -600, lost: -30, morale: 10 } }, next: 'end-river', quality: 2, feedback: 'Slow, methodical and reversible. Wide riffles are the shallowest, slowest crossing points; a pole makes you a tripod. The broken-branch trail lets searchers follow you.' },
        { id: 'wade', text: 'Wade down the channel — easier than the tangled banks.', effect: { add: { minutes: 360, energy: -30, water: -500, injury: 15, lost: -30 } }, next: 'end-river', quality: 1, feedback: 'Faster in places, but hours in water soften your feet and hide holes, snags and drop-offs. You arrive with a twisted knee and ruined feet.' },
        { id: 'float', text: 'Float down on your back — the current is faster than walking.', effect: { add: { minutes: 30, injury: 60, warmth: -20, morale: -40 } }, next: 'end-swept', quality: 0, feedback: 'Log-jams (strainers) let water through but trap bodies. Never float an unknown stream.' },
      ],
    },
    {
      id: 'end-found',
      title: '10:20 — A whistle answers',
      text: 'Three blasts — and three come back, close. The guide and a lodge worker push through the undergrowth twenty minutes later.',
      options: [],
      end: { outcome: 'rescued', summary: 'You **did what the briefing said** — stopped, stayed and whistled — **treated your water**, built a **raised shelter on a safe site**, and kept **wounds and feet** under control. Staying stationary made you easy to find.' },
    },
    {
      id: 'end-sick',
      title: 'Found — and ill',
      text: 'Searchers find you late in the morning, weak and dehydrated. At the lodge you are treated for a gut infection and an infected wound with oral rehydration and antibiotics from the clinic.',
      options: [],
      end: { outcome: 'survived', summary: 'Your **stay-and-signal** decisions got you found. What made you ill was **untreated stream water** or a **neglected small wound** — in the tropics both become problems within a day.' },
    },
    {
      id: 'end-river',
      title: 'The big river',
      text: 'Late in the afternoon the stream opens onto the wide brown river. Within an hour a boat sees your poncho waving from a sandbank and takes you to the lodge, where the search is called off.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'Following **drainage to the river** worked because you travelled **beside the water, not in it**, crossed only at **safe riffles**, and left a trail. Staying put would have got you found sooner and with less risk — but you managed the risk well.' },
    },
    {
      id: 'end-swept',
      title: 'Swept away',
      text: 'The current pins you against a submerged log. You fight free, battered and half-drowned, and crawl onto the bank with a badly injured leg. Searchers find you the next day.',
      options: [],
      end: { outcome: 'critical', summary: 'Entering **moving water** — a flood in the dark or an unknown stream — was the decisive error. Upstream storms, strainers and hidden depth make rainforest streams far more dangerous than they look.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 5 — Mountain environment
// ---------------------------------------------------------------------------------------------

const cap5Scenario: Scenario = {
  id: 'cap-5-scenario',
  title: 'Capstone 5 — Mountain environment',
  stage: 19,
  environment: 'High alpine ridge, midsummer',
  concepts: ['integration', 'risk', 'human-factors', 'immediate-danger', 'decisions', 'reversibility', 'trip-plan', 'phone-use'],
  intro: `**Setting:** an easy but exposed scrambling ridge in high mountains, midsummer. You are at a **3,400 m col**; the summit is 45 minutes further along the crest at 3,650 m. **8 °C** and breezy. Forecast: **40 % chance of thunderstorms after 14:00**. Since 11:00, cumulus to the west has been towering higher and darker.

**You:** with your friend **Alex**. You both flew in from near sea level two days ago, drove up yesterday and slept at a hut at 2,900 m. Since 11:00 Alex has had a headache and nausea and has been lagging — “I’m fine, let’s just summit.”

**Route out:** back along the ridge to the gully, a scree gully down to the hut (2,900 m), then a trail to the car park at 1,900 m that crosses a glacial stream at 2,600 m.

**Who knows:** the hut warden has your names and route and expects you back through before 17:00.

**Kit (each):** helmet, waterproof jacket, light down jacket, gloves, hat, 1 L of water, snacks, emergency bivvy bag, headlamp. Shared: map, compass, small first-aid kit. Your phone is at 70 %; signal is intermittent on the ridge and absent in the gullies.

It is **12:30**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '12:30',
  initial: { minutes: 0, water: 2000, energy: 65, warmth: 75, morale: 60, battery: 70, injury: 0, rescue: 25, lost: 5, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '12:30 — Towers in the west',
      text: 'The clouds to the west have flat, anvil-shaped tops now. Alex sits down heavily and says the headache is “like a band”. The summit is *right there*.',
      options: [
        { id: 'turn', text: 'Turn around now. Descend the way you came, Alex in front where you can watch them.', effect: { add: { minutes: 15, morale: -5, energy: -5 } }, next: 'descent', quality: 2, feedback: 'Two independent reasons to go down — a building storm and a partner with symptoms of acute mountain sickness — and both get *worse* with time and height. Descent treats both. (Stage 8 altitude; Stage 12 thunderstorms; Stage 1 turnaround times.)' },
        { id: 'summit', text: 'Go for the summit. 45 minutes, you’re so close, and the storm might hold off.', effect: { set: { minutes: 70 }, add: { energy: -15, water: -300, morale: 5 }, flags: ['altitude'] }, next: 'summit', quality: 0, feedback: '“So close” is the voice of summit fever — a commitment/scarcity trap. Continuing up with AMS symptoms breaks the first rule of altitude: don’t go higher with symptoms. (Stage 15 cognitive bias.)' },
        { id: 'wait', text: 'Sit it out here at the col behind a big boulder until the clouds decide what to do.', effect: { set: { minutes: 105 }, add: { warmth: -10, water: -200 }, flags: ['altitude'] }, next: 'lightning', quality: 0, feedback: 'Waiting on a high col keeps you exposed to the storm *and* keeps Alex at altitude. Time is not neutral here — it’s working against both problems.' },
      ],
    },
    {
      id: 'summit',
      title: '13:40 — Summit, and the sky turns',
      text: 'On top. Your hair lifts and the trekking poles strapped to your pack start to buzz. Hail begins to rattle. Alex vomits and stumbles on the summit rocks.',
      options: [
        { id: 'down', text: 'Down immediately, off the crest by the known route — no photos.', effect: { set: { minutes: 105 }, add: { energy: -15, warmth: -10, water: -200 } }, next: 'lightning', quality: 1, feedback: 'The only reasonable move now. Buzzing, crackling and hair standing up mean you are in a strong electric field and a strike is imminent.' },
        { id: 'cairn', text: 'Shelter in the lee of the summit cairn until the hail passes.', effect: { set: { minutes: 105 }, add: { warmth: -20, injury: 15, morale: -15 } }, next: 'lightning', quality: 0, feedback: 'The summit is the highest point for kilometres: the worst place in a thunderstorm. A nearby strike throws you both to the ground.' },
      ],
    },
    {
      id: 'descent',
      title: 'Which way down?',
      text: 'From the col you have three ways off. The storm is growing fast.',
      options: [
        { id: 'known', text: 'The way you came: 30 minutes back along the ridge to the gully, then the scree gully to the hut.', effect: { set: { minutes: 105 }, add: { energy: -10, water: -200 } }, next: 'lightning', quality: 2, feedback: 'Known terrain, known difficulty, and it gets you off the crest quickly. In a hurry is exactly when to prefer the route you already know.' },
        { id: 'couloir', text: 'A steep, loose couloir straight down the east side — it looks like it would save an hour.', effect: { add: { minutes: 20, energy: -10 } }, next: 'couloir', quality: 0, feedback: 'Unknown, loose and steep, with no view of what’s below. “Looks like it would save an hour” is how parties end up above cliffs.' },
        { id: 'traverse', text: 'Traverse the crest to the pinnacle bivouac hut shown 1 km along the ridge.', effect: { set: { minutes: 105 }, add: { energy: -15, water: -200, warmth: -10 } }, next: 'lightning', quality: 0, feedback: 'A roof sounds good — but getting there means 40 minutes on the most exposed ground on the mountain as the storm arrives.' },
      ],
    },
    {
      id: 'couloir',
      title: 'Loose couloir',
      text: 'Every step sends stones rattling down. A rock the size of a microwave clatters past from above. The couloir narrows and steepens below.',
      options: [
        { id: 'back', text: 'Climb back out to the ridge, carefully, and take the known route.', effect: { set: { minutes: 105 }, add: { energy: -15, water: -200 } }, next: 'lightning', quality: 1, feedback: 'A costly but sound reversal. Terrain that is sending rocks at you *before* heavy rain loosens it is only going to get worse. (Stage 12 rockfall.)' },
        { id: 'on', text: 'Keep going down — one at a time, sheltering behind a rock rib.', effect: { set: { minutes: 105 }, add: { energy: -15, injury: 30, morale: -15, water: -200 } }, next: 'lightning', quality: 0, feedback: 'Moving one at a time is good practice in rockfall terrain, but it can’t make a bad couloir good. A stone strikes your shoulder; you make it into the lower gully battered and shaken.' },
      ],
    },
    {
      id: 'lightning',
      title: '14:15 — The storm breaks',
      text: 'Lightning and thunder three seconds apart — about 1 km away. Rain and hail. You are just below the crest.',
      options: [
        { id: 'off', hiddenIfFlag: 'altitude', text: 'Keep descending fast but carefully, away from the crest, summits, lone boulders and water-filled gullies; spread out at least 15 m apart; poles off the pack.', effect: { set: { minutes: 240 }, add: { warmth: -15, energy: -15, water: -300, morale: 5 } }, next: 'junction', quality: 2, feedback: 'No place outdoors is safe in a thunderstorm; the goal is *less* dangerous. Losing height and leaving exposed features is the most effective action. Spreading out means one strike can’t disable both of you. (Stage 12 lightning.)' },
        { id: 'off-a', requiresFlag: 'altitude', text: 'Keep descending fast but carefully, away from the crest, summits, lone boulders and water-filled gullies; spread out at least 15 m apart; poles off the pack.', effect: { set: { minutes: 150 }, add: { warmth: -15, energy: -15, water: -300 } }, next: 'alex', quality: 2, feedback: 'The right lightning tactics. But the extra time high on the mountain is catching up with Alex.' },
        { id: 'cave', hiddenIfFlag: 'altitude', text: 'Huddle together in the shallow cave under the rock overhang until it passes.', effect: { set: { minutes: 240 }, add: { injury: 30, morale: -20, warmth: -15 } }, next: 'junction', quality: 0, feedback: 'Shallow caves and overhangs are dangerous in lightning: current can jump across the opening (side flash) and travel along the ground. A nearby strike throws you both; you are stunned, with burns on your legs, but can move after a few minutes.' },
        { id: 'cave-a', requiresFlag: 'altitude', text: 'Huddle together in the shallow cave under the rock overhang until it passes.', effect: { set: { minutes: 150 }, add: { injury: 30, morale: -20, warmth: -15 } }, next: 'alex', quality: 0, feedback: 'Side flash from a nearby strike throws you both. When you recover, Alex is worse than before.' },
        { id: 'crouch', hiddenIfFlag: 'altitude', text: 'Stop and crouch on your pack in the “lightning position” right where you are until it’s over.', effect: { set: { minutes: 240 }, add: { warmth: -25, morale: -10 } }, next: 'junction', quality: 1, feedback: 'Current guidance no longer treats the crouch as protective — it barely reduces risk. It’s a last resort when you *cannot* move lower; here you could. You get very cold waiting.' },
        { id: 'crouch-a', requiresFlag: 'altitude', text: 'Stop and crouch on your pack in the “lightning position” right where you are until it’s over.', effect: { set: { minutes: 150 }, add: { warmth: -25, morale: -10 } }, next: 'alex', quality: 1, feedback: 'You survive the storm cold and shaken — and still high. Alex is getting worse.' },
      ],
    },
    {
      id: 'alex',
      title: '15:00 — Alex can’t walk straight',
      text: 'Alex is staggering, can’t walk heel-to-toe along a line, is confused about where you are, and says the headache is the worst ever. They keep wanting to lie down.',
      options: [
        { id: 'descend', text: 'Treat as high-altitude cerebral oedema: descend now, together — you walking just below Alex on the easy ground, holding their pack strap. At the first bar of signal, call the emergency number with location, symptoms, weather and your plan.', effect: { add: { minutes: 120, energy: -20, battery: -8, rescue: 50, morale: 5 } }, next: 'end-heli', quality: 2, feedback: 'Ataxia and confusion after AMS mean HACE — a life-threatening emergency. Descent is the definitive field treatment; every few hundred metres helps. A clear, specific call lets rescuers launch a helicopter as soon as the storm clears. (Stage 8 altitude; Stage 14 communication.)' },
        { id: 'rest', text: 'Let Alex rest in the bivvy bags and see how they are in an hour or two; descend in the morning if needed.', effect: { add: { minutes: 300, injury: 60, warmth: -20, morale: -30 } }, next: 'end-hace', quality: 0, feedback: 'HACE does not get better with rest at the same altitude — it gets worse, often fast. Waiting was the most dangerous option.' },
        { id: 'split', text: 'Wrap Alex up here and run down for help alone.', effect: { add: { minutes: 240, injury: 50, morale: -30, battery: -5 } }, next: 'end-hace', quality: 0, feedback: 'A confused person left alone at altitude can wander off, fall or deteriorate unseen. Descending together, while phoning ahead, is both faster help and better care.' },
      ],
    },
    {
      id: 'junction',
      title: '16:30 — The stream in spate',
      text: 'You’re on the trail at 2,600 m. Alex says the headache is fading now you’ve dropped 800 m. But the trail’s stepping-stones are under fast, brown glacial water — knee- to thigh-deep. The map shows a footbridge 1.2 km upstream.',
      options: [
        { id: 'bridge', text: 'Detour to the footbridge — an extra 40 minutes — and call the hut warden when you get signal.', effect: { add: { minutes: 150, energy: -20, water: -300, morale: 20, battery: -3, lost: -5 } }, next: 'end-car', quality: 2, feedback: 'Forty minutes is nothing against the consequences of a slip in fast, cold water. After a storm, glacial streams rise through the afternoon; they don’t fall until night. (Stage 12 water crossings.)' },
        { id: 'wade', text: 'Wade across here, facing upstream with arms linked, to save time.', effect: { add: { minutes: 20, injury: 50, warmth: -40, morale: -40 } }, next: 'end-wade', quality: 0, feedback: 'Knee-deep fast water is enough to sweep an adult off their feet, and glacial melt is close to 0 °C. Technique can’t fix a crossing that shouldn’t be made.' },
        { id: 'bivvy', text: 'Stop here, send a message to the warden, and bivouac until the water drops overnight.', effect: { add: { minutes: 900, warmth: -30, energy: -15, morale: -15, water: -300, battery: -4 } }, next: 'end-bivvy', quality: 1, feedback: 'Safe from the water, and informing the warden is good — but you’re wet and cold after the storm, and a safer crossing was 40 minutes away.' },
      ],
    },
    {
      id: 'end-car',
      title: 'Car park by headlamp',
      text: 'You reach the car at dusk, soaked and exhausted. Alex is hungry and headache-free.',
      options: [],
      end: { outcome: 'self-rescued', summary: 'You **turned around early** for two converging reasons (storm and AMS), **descended by the known route**, used **correct lightning tactics** (lose height, leave exposed features, spread out), and **detoured to the bridge** instead of wading. Descent fixed Alex’s AMS.' },
    },
    {
      id: 'end-heli',
      title: 'Helicopter at the hut',
      text: 'As the storm clears, a rescue helicopter lands near the hut, where you have got Alex down to 2,900 m. Alex is flown to hospital, treated for HACE, and recovers fully.',
      options: [],
      end: { outcome: 'rescued', summary: 'Pushing on to the summit — or waiting high — let **AMS progress to HACE**. What saved Alex was **recognising ataxia and confusion**, **descending immediately together**, and a **clear emergency call** as soon as there was signal.' },
    },
    {
      id: 'end-bivvy',
      title: 'A cold night by the stream',
      text: 'The water drops by 04:00. You cross at first light, shivering, and reach the car mid-morning. The warden had your message and held off a search.',
      options: [],
      end: { outcome: 'survived', summary: 'Your storm and altitude decisions were sound, and **messaging the warden** prevented a search. **Bivouacking wet when a bridge was 40 minutes away** turned a long day into a hypothermia-risk night.' },
    },
    {
      id: 'end-wade',
      title: 'Knocked down in the stream',
      text: 'Halfway across, the water takes your legs. You are swept 30 m and pinned against a boulder before Alex helps you out. Soaked in near-freezing water, with a badly injured knee, you wait for rescue as hypothermia sets in.',
      options: [],
      end: { outcome: 'critical', summary: 'You made good decisions high on the mountain, then **waded a glacial stream in spate** to save 40 minutes. Swift-water crossings are among the leading causes of death in backcountry travel.' },
    },
    {
      id: 'end-hace',
      title: 'Night at altitude',
      text: 'By nightfall Alex is barely responsive. A rescue team reaches you at 03:00 and lowers Alex down the mountain. Alex survives after days in intensive care.',
      options: [],
      end: { outcome: 'critical', summary: 'Two decisions compounded: **going higher with AMS** and then **delaying descent once HACE signs appeared**. With altitude illness, “wait and see” at the same height is the dangerous choice.' },
    },
  ],
}

// ---------------------------------------------------------------------------------------------
// Capstone 6 — Injured while hiking (the course brief’s integrated-scenario seed)
// ---------------------------------------------------------------------------------------------

const cap6Scenario: Scenario = {
  id: 'cap-6-scenario',
  title: 'Capstone 6 — Injured while hiking',
  stage: 19,
  environment: 'Temperate hills, early spring',
  concepts: ['integration', 'immediate-danger', 'priorities', 'phone-use', 'stay-or-move', 'shelter-types', 'fire-safety', 'water-needs', 'signaling'],
  intro: `**You are injured 4 km from your starting point. It is 17:30. The temperature is falling. You have 700 ml of water, a knife, cordage, a tarp, a lighter, a flashlight, and a phone at 12 % battery. You don’t know your exact location.**

**Setting:** wooded hills in early spring. 9 °C now, clearing overnight to about **1 °C** with a light breeze. Sunset **19:20**.

**What happened:** a washout forced a detour off the main path. Descending a loose rocky section, your foot rolled and you fell. Your watch says 4 km from the trailhead; you’re not sure how far off the main path the detour took you.

**Who knows:** your friend **Dana** knows which trailhead you started from and expects a text by 20:00.

**Also with you:** the clothes you’re wearing (base layer, light fleece, windproof jacket, cap), a bandana, a small daypack, one muesli bar. No first-aid kit.

It is **17:30**. Decision quality is revealed only at the end.`,
  start: 'start',
  startClock: '17:30',
  initial: { minutes: 0, water: 700, energy: 55, warmth: 70, morale: 40, battery: 12, injury: 45, rescue: 15, lost: 50, flags: [] },
  nodes: [
    {
      id: 'start',
      title: '17:30 — On the ground',
      text: 'You’re lying on loose rock below a small outcrop. Your left ankle throbs fiercely; blood is running down your face from somewhere on your head. Your heart is hammering.',
      options: [
        { id: 'check', text: 'Stay still for a moment. Then check: is anything above you going to fall? Are you breathing easily? Where is the blood coming from?', effect: { add: { minutes: 5, morale: 5 } }, next: 'assess', quality: 2, feedback: 'Scene safety first, then the life threats — airway, breathing, serious bleeding — before anything else. A few seconds of stillness also stops you making the injury worse. (Stage 9 patient assessment system.)' },
        { id: 'up', text: 'Get up and try to walk it off before it stiffens.', effect: { add: { minutes: 10, injury: 15, morale: -10, energy: -5 } }, next: 'assess', quality: 0, feedback: '**Myth.** “Walking it off” can turn a stable fracture into a displaced one. The ankle gives way on the second step and you fall again.' },
        { id: 'call', text: 'Grab the phone and call for help immediately.', effect: { add: { minutes: 5, battery: -3 } }, next: 'assess', quality: 1, feedback: 'The instinct is right, but there’s no signal where you’re lying and the attempt costs battery. Knowing what’s wrong first also makes the call far more useful.' },
      ],
    },
    {
      id: 'assess',
      title: 'Primary survey',
      text: 'Nothing above looks loose. Breathing is fine. A 3 cm cut on your scalp is bleeding freely. You don’t think you blacked out. No neck pain. The ankle: you can’t take any weight, the bone at the back of the outer ankle is very tender, and it’s swelling. Your toes are warm and pink and you can feel and wiggle them.',
      options: [
        { id: 'treat', text: 'Firm direct pressure on the scalp cut with the folded bandana for a full 10 minutes, then tie it in place. Splint the ankle as it lies: boot on, laces loosened, padded with the fleece, a stick each side tied with cordage above and below the joint. Recheck toes’ warmth, colour and feeling afterwards.', effect: { add: { minutes: 25, injury: -10, morale: 10, warmth: -5 } }, next: 'comm', quality: 2, feedback: 'Scalp wounds bleed dramatically but almost always stop with sustained pressure. Inability to bear weight plus bony tenderness at the ankle bone means a possible fracture: immobilise the joints above and below, pad well, and check circulation, sensation and movement before and after. (Stage 9 wounds; musculoskeletal injuries.)' },
        { id: 'wash', text: 'Pour most of your water over the cut to clean it, and leave the ankle — there’s nothing to be done out here.', effect: { add: { minutes: 10, water: -500, injury: 5 } }, next: 'comm', quality: 0, feedback: 'Bleeding control comes before cleaning, and 500 ml is most of your drinking water. An unsplinted fracture hurts more, swells more, and can damage nerves and vessels when moved.' },
        { id: 'soak', text: 'Pull the boot off to look, then soak the ankle in the cold stream 30 m away for an hour.', effect: { add: { minutes: 30, warmth: -20, injury: 10, energy: -10 } }, next: 'comm', quality: 0, feedback: 'Cold can reduce pain and swelling — in 20-minute sessions, when you can rewarm. An hour in a stream at dusk, with falling temperatures, is a hypothermia risk. And the swollen foot won’t go back into the boot.' },
      ],
    },
    {
      id: 'comm',
      title: 'Twelve per cent',
      text: 'You scoot 10 m onto a small rocky spur. One bar of signal flickers.',
      options: [
        { id: 'call', text: 'Call the emergency number. Say: “Hiker, fallen, can’t walk — possible broken ankle, head cut now controlled.” Location: trailhead name, ~4 km in, the washout detour, what you can see; read out your phone’s coordinates. Kit and plan: staying put, will flash a light. Agree a callback time, then airplane mode and phone inside your jacket.', effect: { add: { minutes: 10, battery: -5, rescue: 45, morale: 15, lost: -20 }, flags: ['called'] }, next: 'move', quality: 2, feedback: 'The single most valuable action available. Emergency calls may route through any available network, and many phones transmit your location automatically during the call. A structured message — what, where, who, plan — lets rescuers launch the right team to the right place. (Stage 1 phone use; Stage 14 communication.)' },
        { id: 'sms', text: 'Text Dana: “Fell, hurt ankle, ~4 km from the trailhead, staying put, call rescue.”', effect: { add: { minutes: 5, battery: -2, rescue: 20, morale: 10 }, flags: ['msg'] }, next: 'move', quality: 1, feedback: 'Good fallback — SMS often gets through when calls fail — but without coordinates Dana can only pass on a vague area, and she might not see it for an hour. Where a call is possible, call the emergency number first.' },
        { id: 'maps', text: 'Open the map app first, to work out exactly where you are.', effect: { add: { minutes: 10, battery: -9, lost: -20 } }, next: 'move', quality: 0, feedback: 'You find yourself on the map — and the phone dies in the cold before you can call. Information you can’t send doesn’t help anyone find you.' },
      ],
    },
    {
      id: 'move',
      title: 'Move or stay?',
      text: 'About an hour and a half of light left. The trailhead is 4 km away over rough, rocky trail. A flat, sheltered spot with small trees lies 30 m below you, out of the line of the loose rock.',
      options: [
        { id: 'stay', text: 'Stay. Only improve your position: shuffle on your backside 30 m down to the flat, sheltered spot, out of the rockfall line.', effect: { set: { minutes: 75 }, add: { energy: -5, injury: 5 } }, next: 'shelter', quality: 2, feedback: 'With a possible fracture, moving 4 km would take all night and risk a far worse injury. Rescuers now look for you here; your job is to make “here” as safe and warm as possible. (Stage 14 stay or move; Stage 9 evacuation decisions.)' },
        { id: 'crawl', text: 'Make a crutch from a branch and hop and crawl toward the trailhead.', effect: { set: { minutes: 150 }, add: { energy: -30, injury: 15, warmth: -10, water: -150, morale: -10 } }, next: 'crawl', quality: 0, feedback: 'Crawling is roughly 0.3–0.5 km/h on rough ground: 4 km is 8–12 hours, sweating and exhausting yourself — and moving away from where anyone was told to look.' },
      ],
    },
    {
      id: 'crawl',
      title: '20:00 — Six hundred metres',
      text: 'Two and a half hours of hopping and crawling. It’s dark, your hands are raw, the ankle is screaming, and your sweaty base layer is turning cold.',
      options: [
        { id: 'stop', text: 'Stop here. Rig the tarp as best you can in the dark, sit on your pack, and send a short update with your new position.', effect: { set: { minutes: 270 }, add: { battery: -3, energy: -5, rescue: 10 }, flags: ['nobed'] }, next: 'night', quality: 2, feedback: 'The right call now. Stopping late is far better than not stopping — but a shelter built by torchlight on unfamiliar ground will be a poor one.' },
        { id: 'on', text: 'Keep going — you’ve made it this far.', effect: { add: { minutes: 240, energy: -30, warmth: -35, injury: 20, morale: -30 } }, next: 'end-crawl', quality: 0, feedback: 'Sunk cost. Every hour moving now costs more heat and energy than it earns in distance.' },
      ],
    },
    {
      id: 'shelter',
      title: '18:45 — Before the light goes',
      text: 'You are on flat ground among small trees. The breeze is from the north-west and the temperature is dropping.',
      options: [
        { id: 'tarp', text: 'Sit on your pack plus a thick pile of every leaf and branch you can reach. Tie one tarp edge high to a tree with the cordage, weight the other edge low behind you as a lean-to with its back to the wind, and fold the spare tarp around your legs.', effect: { add: { minutes: 35, energy: -10, warmth: 10, morale: 10 } }, next: 'water', quality: 2, feedback: 'Ground insulation and a wind block are the two biggest wins for a person who can’t move to keep warm. The cordage and tarp are your most valuable kit tonight. (Stage 5 tarp configurations; Stage 1 heat balance.)' },
        { id: 'rock', text: 'Just sit against a big rock with your jacket zipped up — save your energy.', effect: { add: { minutes: 5 }, flags: ['nobed'] }, next: 'water', quality: 0, feedback: 'A rock is a heat sink: it will conduct heat away from your back all night. Saving 30 minutes of effort now will cost you hours of cold.' },
        { id: 'fire1', text: 'Fire first — shelter can wait until you’re warm.', effect: { add: { minutes: 30, energy: -10, warmth: 5, morale: 5 }, flags: ['nobed'] }, next: 'water', quality: 1, feedback: 'A fire helps, but you’ve spent the last good light on it. Rigging a tarp and building a ground bed by torchlight with one leg is much harder.' },
      ],
    },
    {
      id: 'water',
      title: '700 millilitres',
      text: 'You’re thirsty after the pain and effort. There’s a stream 150 m away over rough ground.',
      options: [
        { id: 'sip', text: 'Drink normally in small sips and eat the muesli bar now: tonight’s danger is cold, not thirst, and your body needs fuel to shiver.', effect: { set: { minutes: 120 }, add: { water: -250, energy: 10, morale: 5 } }, next: 'fire', quality: 2, feedback: 'At rest in cool weather, 700 ml comfortably covers a night; mild dehydration impairs heat production and judgment. Food now fuels shivering later. (Stage 4 water requirements; Stage 8 energy.)' },
        { id: 'ration', text: 'Save it all for tomorrow — tiny sips only.', effect: { set: { minutes: 120 }, add: { water: -50, morale: -5 } }, next: 'fire', quality: 1, feedback: 'Understandable, but the water does more good in you than in the bottle. Rescue is likely within a day; drink to thirst.' },
        { id: 'stream', text: 'Crawl the 150 m to the stream to fill up while there’s light.', effect: { set: { minutes: 120 }, add: { energy: -15, warmth: -10, injury: 10, water: 300 } }, next: 'fire', quality: 0, feedback: 'Water isn’t your limiting factor tonight. The crawl costs energy, heat and ankle stability — and untreated stream water needs boiling or treatment anyway.' },
      ],
    },
    {
      id: 'fire',
      title: '19:30 — Dusk',
      text: 'The light is going. The ground around you is damp leaf litter; there is dead wood within reach and more a few metres away.',
      options: [
        { id: 'small', text: 'A small fire on bare soil, scraped clear of leaves and ringed with stones, within arm’s reach; a pile of every stick you can reach by shuffling; lighter kept in an inner pocket.', effect: { set: { minutes: 270 }, add: { energy: -10, warmth: 10, morale: 15, rescue: 5, water: -150 } }, next: 'night', quality: 2, feedback: 'Small, controlled and sustainable by someone who can’t walk — warmth, light, morale and a signal. In a genuine emergency a safe, small fire is usually justified; clear the ground so it can’t creep. (Stage 3 fire safety.)' },
        { id: 'big', text: 'A big blaze, so it can be seen from far away.', effect: { set: { minutes: 270 }, add: { energy: -20, warmth: 5, rescue: 5, morale: -10, water: -150 } }, next: 'night', quality: 0, feedback: 'You can’t feed it, can’t control it and can’t get away from it if it spreads into the dry leaf litter. It burns through your fuel in an hour. A small fire is enough to be seen at night.' },
        { id: 'none', text: 'No fire — conserve energy and rely on the tarp and clothing.', effect: { set: { minutes: 270 }, add: { warmth: -5, water: -150 } }, next: 'night', quality: 1, feedback: 'Defensible if fire is prohibited or unsafe. But here a small fire is safe, adds warmth, and is a strong night signal.' },
      ],
    },
    {
      id: 'night',
      title: '22:00 — Cold and dark',
      text: 'It’s 3 °C. The sky has cleared.',
      options: [
        { id: 'lights', requiresFlag: 'called', text: 'Torch beams moving on the slope above! Flash your light in groups of three, shout “Here!” at intervals, and stay where you are.', effect: { set: { minutes: 310 }, add: { rescue: 40, morale: 30 } }, next: 'end-rescued', quality: 2, feedback: 'Light in threes and a voice at intervals guide the team to you. Staying put stops you moving out of the area they are searching.' },
        { id: 'toward', requiresFlag: 'called', text: 'Crawl toward the lights so they reach you sooner.', effect: { set: { minutes: 310 }, add: { injury: 15, energy: -15, morale: 10 } }, next: 'end-rescued', quality: 0, feedback: 'You gain a few metres and lose ankle position and splint alignment. They were coming to you — signal, don’t move.' },
        { id: 'routine', hiddenIfFlag: 'called', text: 'No lights yet. Routine: layers snug, knees up inside the tarp, a few sticks on the fire, a sip of water; at 23:00, phone on for two minutes to try a call, then off.', effect: { set: { minutes: 510 }, add: { battery: -3, rescue: 20, energy: -10, warmth: -10 } }, next: 'late', quality: 2, feedback: 'Scheduled, short phone checks give searchers chances to reach you without draining the battery. Dana will have raised the alarm when your text didn’t come.' },
        { id: 'crawlout', hiddenIfFlag: 'called', text: 'Nobody is coming. Try to crawl out tonight.', effect: { add: { minutes: 240, energy: -35, warmth: -35, injury: 20, morale: -30 } }, next: 'end-crawl', quality: 0, feedback: 'Someone *is* coming — Dana expected your text by 20:00. Crawling in the dark only moves you away from where they will look.' },
      ],
    },
    {
      id: 'late',
      title: '02:00 — The coldest hours',
      text: 'It’s 1 °C. You wake shivering. Somewhere far off, you think you hear a vehicle.',
      options: [
        { id: 'hold', hiddenIfFlag: 'nobed', text: 'Stay put: flash the torch in threes toward the sound, a stick or two on the fire, isometric squeezes when you shiver, and doze.', effect: { set: { minutes: 850 }, add: { rescue: 30, warmth: -10, energy: -10, morale: 10 } }, next: 'end-dawn', quality: 2, feedback: 'Your ground bed and lean-to are carrying you through the coldest hours. At first light the search team works up the detour path and hears you.' },
        { id: 'hold-cold', requiresFlag: 'nobed', text: 'Stay put: flash the torch in threes toward the sound, a stick or two on the fire, isometric squeezes when you shiver, and doze.', effect: { add: { minutes: 420, rescue: 30, warmth: -35, energy: -20, morale: -15 } }, next: 'end-cold', quality: 2, feedback: 'The right routine — but without a proper ground bed and wind block you have been losing heat into the ground and the breeze for hours. Your shivering becomes violent and your fingers stop working.' },
        { id: 'crawl', text: 'Crawl toward the vehicle sound to get warm and get closer.', effect: { add: { minutes: 180, energy: -30, warmth: -30, injury: 20, morale: -20 } }, next: 'end-crawl', quality: 0, feedback: 'Sounds carry confusingly in hills at night. You leave your fire and shelter for a guess.' },
      ],
    },
    {
      id: 'end-rescued',
      title: '22:40 — Found',
      text: 'A mountain-rescue team reaches you, re-splints the ankle, checks your head wound, gets you into a casualty bag and carries you out on a stretcher.',
      options: [],
      end: { outcome: 'rescued', summary: 'The **structured emergency call with coordinates** while you had 12 % was the decisive action. **Controlling bleeding and splinting** kept the injury stable; **staying put, insulated, with a small fire and light signals** made the rest easy.' },
    },
    {
      id: 'end-dawn',
      title: '07:40 — Voices on the path',
      text: 'Dana raised the alarm at 20:30. A search team working the detour path hears your shouts at first light and reaches you at 07:40. You’re cold, sore and entirely lucid.',
      options: [],
      end: { outcome: 'rescued', summary: 'Without a direct emergency call, rescue waited for **Dana’s alarm** and daylight. You got through a cold night because of **decisions made before dark**: a **ground bed and lean-to**, **drinking and eating**, and a **small, safe fire**.' },
    },
    {
      id: 'end-cold',
      title: 'Found at mid-morning',
      text: 'Searchers reach you at 09:00. You are shivering uncontrollably and slow to answer. They insulate you, give warm sweet drinks once you can swallow safely, and carry you out.',
      options: [],
      end: { outcome: 'survived', summary: 'Your injury care and communication were sound, but **no ground insulation or wind block** — whether from saving effort, fire-first, or crawling until dark — let the cold ground and breeze pull heat from you for ten hours.' },
    },
    {
      id: 'end-crawl',
      title: 'Found off route',
      text: 'Hours of crawling in the dark leave you exhausted, soaked in sweat and far from where anyone was told to look. A search dog finds you the next afternoon, hypothermic, with a displaced ankle fracture.',
      options: [],
      end: { outcome: 'critical', summary: '**Self-evacuating on a possible fracture** — or **leaving your shelter at night** — used up energy and heat you couldn’t spare and moved you out of the search area. With this injury, staying put, communicating and insulating was the survival strategy.' },
    },
  ],
}

export const capScenariosA: Scenario[] = [cap1Scenario, cap2Scenario, cap3Scenario, cap4Scenario, cap5Scenario, cap6Scenario]

// ---------------------------------------------------------------------------------------------
// Lessons
// ---------------------------------------------------------------------------------------------

const howToPlay: Block = {
  type: 'callout',
  tone: 'tip',
  title: 'How to use a capstone',
  md: 'Play the scenario once **without pausing**, the way it would happen. Then play it again and, at every decision, run the 12 questions out loud before choosing. Finally, try deliberately poor choices to see how an early mistake surfaces hours later — the scenario tracks flags as well as meters.',
}

const cap1: Lesson = {
  id: 'cap-1',
  stage: 19,
  order: 1,
  title: 'Lost in a forest',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s2-l12', 's14-l4'],
  concepts: ['integration', 'stay-or-move', 'daylight', 'site-selection'],
  objectives: [
    'Decide between a **bounded relocation** and staying put, using a catching feature, a deliberate aim-off and a time/distance trigger.',
    'Budget the **remaining daylight** so protection, water and signals are done before dark.',
    'Choose an overnight site that avoids **cold-air pooling**, wind exposure and overhead hazards on a clear, frosty night.',
    'Use a **low-battery phone** to shrink the search area rather than to navigate by screen.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

Late October, 15:30, temperate mixed forest. You are alone and uninjured, but you have lost the trail after 40 minutes off-path. The forecast says clearing skies and **−1 °C overnight**. Only your flatmate knows roughly where you went.

This is the most common wilderness emergency there is: a healthy person, a little off route, a few hours of light. It rarely kills anyone *directly* — the danger comes from what people do next: moving without a plan, following rules of thumb into bad terrain, and letting the light run out before they have protected themselves.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Stopping before acting', 'Stage 1 — STOP; Stage 15 — fear, panic and freezing'],
        ['Catching feature, aim-off, boxing around an obstacle, pace counting', 'Stage 2 — handrails, dead reckoning, when navigation fails'],
        ['Relocate once, with a trigger — or stay', 'Stage 1 — decisions, reversibility; Stage 14 — stay or move'],
        ['Short, scheduled phone use', 'Stage 1 — signaling and phones; Stage 14 — how searches work'],
        ['Bench vs hollow vs crest', 'Stage 5 — site selection; Stage 12 — cold-air pooling on clear nights'],
        ['Bed, windbreak, fuel, water, signals — in that order', 'Stage 1 — heat budget; Stage 3 — fire; Stage 4 — treatment'],
      ],
      caption: 'Every decision in the scenario is a combination of at least two earlier lessons.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-1', caption: 'Capstone 1: a branching scenario from 15:30 to the following morning.' },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire in the scenario',
      md: 'The scenario lets you light a small fire because it is a genuine emergency on a night with frost. In real life, check fire regulations and seasonal bans for any area you visit, and in practice sessions only light fires where it is legal and safe.',
    },
  ],
  whyItMatters: 'Lost-person incidents are the backbone of search-and-rescue caseloads. The difference between a non-event and a tragedy is usually made in the first hour: whether you stop, whether you tell someone where you are, whether you bound your movement, and whether you use the last light for protection.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **Catching features beat perfect navigation.** You don’t need to know where you are to know that walking 190° will hit a road. Aiming off tells you which way to turn when you arrive.
- **Triggers make “stay” easy.** Decide *before* you move what time or distance ends the attempt; honouring it later is then a rule, not a debate.
- **Site selection plays out at 02:00.** The hollow feels sheltered at 17:00 and is the coldest place in the forest by midnight on a clear night.
- **The same logic elsewhere:** in coastal fog the catching feature might be the shoreline; on moorland, a fence or a river; in a city park at night, a lit road.`,
    },
  ],
  mistakes: [
    'Walking faster when anxious instead of stopping — which usually moves you further from your last known point.',
    'Following a stream downhill because “water leads to people”, without checking where the map says it goes.',
    'Running the phone’s map continuously and having no battery left for the call that matters.',
    'Leaving a known linear feature (a road) to “cut the corner” in failing light.',
    'Spending the last hour of light on a fire or a search instead of a ground bed and fuel.',
    'Sleeping in the valley bottom on a clear night because it feels sheltered.',
  ],
  exercises: [
    {
      id: 'cap-1-e1',
      title: 'Play Capstone 1 twice',
      level: 4,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the scenario once without pausing.',
        'Play again; at each decision write the answers to the 12 questions before choosing.',
        'Play a third time making the “hurry” and “hollow” choices, and note where their consequences appear.',
        'Write three sentences: the decision that mattered most, why, and which earlier lesson it came from.',
      ],
      success: ['Decision quality of at least 80 % on the second run.', 'You can explain aim-off and cold-air pooling in your own words.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-1-e2',
      title: 'Catching-feature relocation drill',
      level: 4,
      safety: 'outdoor',
      minutes: 120,
      materials: ['A 1:25 000 map of a familiar small woodland bounded by a road or track', 'Baseplate compass', 'Watch', 'Partner', 'Normal day kit'],
      safetyNote: 'Daylight only, in good weather, in woodland you know, with a partner and a charged phone. Stay out of steep ground, ravines and water. Set a firm finish time and stop when it is reached.',
      steps: [
        'Your partner leads you to a point in the woodland without telling you where it is.',
        'Run STOP, then identify the nearest long catching feature on the map.',
        'Choose a bearing that deliberately aims off to one side of your target on that feature; state a time and pace-count trigger.',
        'Walk the bearing, counting paces; box around any obstacle with 90° offsets.',
        'On reaching the feature, turn the way your aim-off predicts and confirm your position.',
      ],
      success: ['You reach the catching feature within your trigger.', 'You turn the correct way without hesitation.', 'Your pace count is within 15 % of the map distance.'],
      skill: 'map-compass',
    },
  ],
  simulations: ['scenario-cap-1'],
  quiz: [
    {
      id: 'cap-1-q1',
      kind: 'single',
      prompt: 'Why did the best plan use a bearing of 190° instead of pointing straight at the car park?',
      choices: [
        { id: 'a', text: 'Magnetic declination in that area is 10°, so the bearing had to be offset.', why: 'Declination is handled when you set the bearing; it is not the reason for aiming off.' },
        { id: 'b', text: 'Aiming to one side means you know which way to turn when you hit the road.', why: 'Correct. If you aim straight at a point, small errors leave you unsure whether it is left or right.' },
        { id: 'c', text: 'Walking slightly west keeps the sun behind you and the glare off the map.', why: 'Irrelevant under an overcast sky, and not a navigation principle.' },
        { id: 'd', text: 'Bearings set to exact cardinal directions are harder to follow accurately.', why: 'There is no such rule.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'integration'],
      explanation: 'Aiming off converts an uncertain point target into a certain line target plus a known turn.',
    },
    {
      id: 'cap-1-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 phones): which phone plan best fits a lost, uninjured hiker at 38 % with weak signal?',
      choices: [
        { id: 'a', text: 'Keep the map app open continuously so you never lose track of your position.', why: 'Screen and GPS use can drain a battery in an hour or two, especially when cold.' },
        { id: 'b', text: 'Send one SMS with position and plan, then airplane mode and brief scheduled checks.', why: 'Correct — maximum information to searchers for minimum battery; keep the phone warm too.' },
        { id: 'c', text: 'Switch the phone off completely until you are certain you need outside help.', why: 'You may lose the chance to send your position while you have signal.' },
        { id: 'd', text: 'Keep calling home and the emergency number until someone finally answers.', why: 'Repeated failing calls burn battery; SMS often gets through on weaker signal.' },
      ],
      answer: 'b',
      concepts: ['phone-use', 'signaling'],
      explanation: 'The phone is primarily a communication device in an emergency: one SMS with coordinates and plan, then airplane mode and short scheduled checks. Navigate by map and compass and take occasional fixes.',
    },
    {
      id: 'cap-1-q3',
      kind: 'single',
      prompt: 'The sky is clearing and the wind dropping before a frosty night. Which sleeping spot is least likely to sit in a cold-air pool?',
      choices: [
        { id: 'a', text: 'The lowest point of a sheltered hollow on the valley floor.', why: 'Cold, dense air drains downhill and collects exactly there.' },
        { id: 'b', text: 'A flat patch where mist is starting to form this evening.', why: 'Mist shows air already cooled to its dew point — a sign of a cold pool.' },
        { id: 'c', text: 'An open meadow on the valley floor, out of the trees.', why: 'On calm, clear nights the valley floor collects draining cold air, and open sky increases radiative cooling.' },
        { id: 'd', text: 'Under a living conifer on a bench above the valley.', why: 'Correct — it is above the pool, and the canopy reduces radiation to the sky.' },
      ],
      answer: 'd',
      concepts: ['site-selection', 'heat-loss'],
      explanation: 'Calm, clear nights produce strong radiative cooling and cold-air drainage into hollows. A bench a few metres above a hollow can be several degrees warmer than its floor.',
    },
    {
      id: 'cap-1-q4',
      kind: 'single',
      prompt: 'You are lost in hilly forest and come across a stream. Which statement about following it downhill is correct?',
      choices: [
        { id: 'a', text: 'It reliably leads to a road or village, so it is a safe default.', why: 'This is the myth: streams are not a reliable route to roads.' },
        { id: 'b', text: 'It often leads into gorges, waterfalls and thick vegetation first.', why: 'Correct — that is where stream-following hikers get stuck or hurt.' },
        { id: 'c', text: 'It is safe as long as you walk in the streambed rather than the bank.', why: 'The streambed leads into the same gorges and falls, and is slippery underfoot.' },
        { id: 'd', text: 'It is the best plan whenever your map does not show a nearby road.', why: 'Check the map for a better catching feature instead of defaulting to the stream.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'immediate-danger'],
      explanation: 'Streams often lead into gorges, waterfalls and dense vegetation before they lead anywhere useful. Check the map; if it shows a better catching feature, use it.',
    },
    {
      id: 'cap-1-q2',
      kind: 'single',
      prompt: 'It is 15:40. Useful light under the canopy ends at 17:30. You need 60 minutes of light to make a bed, gather fuel, treat water and lay out signals. How long can a relocation attempt take before your trigger must fire?',
      choices: [
        { id: 'a', text: '110 min', why: 'That is all the remaining light — it forgets to reserve the 60 minutes for protection.' },
        { id: 'b', text: '50 min', why: 'Correct — 110 minutes of light minus 60 reserved leaves 50.' },
        { id: 'c', text: '30 min', why: 'Subtracting clock times as decimals (17.30 − 15.40 = 1.90) and reading that as 90 minutes gives the wrong total.' },
        { id: 'd', text: '170 min', why: 'That adds the 60 minutes of camp work instead of subtracting it.' },
      ],
      answer: 'b',
      concepts: ['daylight', 'decisions'],
      explanation: '15:40 → 17:30 is 110 minutes of useful light; reserving 60 for protection leaves 50 minutes for the attempt. That is your trigger: 16:30.',
    },
    {
      id: 'cap-1-q5',
      kind: 'single',
      prompt: 'Spaced review — you will stay out on a frosty night and have about an hour of light left. Which task deserves your effort first?',
      choices: [
        { id: 'a', text: 'Build a thick ground bed', why: 'Correct — conduction to frozen ground is the biggest overnight loss for a resting person.' },
        { id: 'b', text: 'Gather and grade fuel for a small fire', why: 'Important and needs light, but it comes after the bed and windbreak.' },
        { id: 'c', text: 'Lay out signals in the nearest clearing', why: 'Signals matter most in the morning and are quick to set out.' },
        { id: 'd', text: 'Collect and treat water', why: 'Needs light, but a resting person loses far more heat to the ground than they risk from thirst overnight.' },
      ],
      answer: 'a',
      concepts: ['priorities', 'ground-insulation'],
      explanation: 'Bed first, then a windbreak (conduction, then convection), then fuel and water while there is light, then signals. All of it must happen before dark.',
    },
  ],
  scenario: {
    id: 'cap-1-sc',
    setup: 'Coastal temperate rainforest, November, 16:10. Sunset 16:50; drizzle all night, 5 °C. You and a friend have lost a faint trail. Your map shows the shoreline 1 km west — a continuous beach — and the trailhead on that beach 2 km north of your likely position. You told your family your route. Phones: 20 % and 45 %, one bar intermittently.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Walk north-east toward where the trailhead “should” be, directly through the forest.', why: 'Aiming at a point in thick forest in failing light, with no trigger, is how people end up more lost.' },
      { id: 'b', text: 'Send an SMS with coordinates and plan; take a bearing west-south-west to hit the beach south of the trailhead so you know to turn north; trigger: if not on the beach by 16:40, stop and camp above the tide line in the trees.', why: 'Best — catching feature, aim-off, communication and a trigger that protects the remaining light.' },
      { id: 'c', text: 'Stay put now without messaging — your family knows the route.', why: 'Staying is defensible, but not sending your position while you have a bar wastes the most valuable action available.' },
      { id: 'd', text: 'Follow the nearest creek down to the sea.', why: 'Coastal creeks often end in steep, slippery ravines and cliffs above the beach.' },
    ],
    best: 'b',
    debrief: 'The same capstone logic in a new place: **communicate first**, use a **linear catching feature** (the shoreline), **aim off** so you know which way to turn, and **bound the attempt** so the last light is kept for protection. Camp above the high-tide line and out of any creek mouth.',
    concepts: ['integration', 'stay-or-move', 'daylight', 'phone-use'],
  },
  summary: [
    'Stop first; most lost-person harm comes from what people do in the next hour.',
    'Relocate with a catching feature, an aim-off and a trigger — or stay.',
    'Use the phone to tell people where you are, not to watch a blue dot.',
    'Protect before dark: bed, windbreak, fuel, water, signals.',
    'On clear, calm nights, sleep on a bench above the hollow, not in it.',
  ],
  furtherReading: ['koester-lpb', 'kjellstrom', 'deep-survival'],
  references: ['koester-lpb', 'kjellstrom', 'army-atp-3-50-21', 'wms-hypothermia-2019', 'cdc-emergency-water', 'usfs-fire'],
}

const cap2: Lesson = {
  id: 'cap-2',
  stage: 19,
  order: 2,
  title: 'Desert survival',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s4-l3', 's8-l4'],
  concepts: ['integration', 'water-needs', 'dehydration', 'heat-balance', 'stay-or-move'],
  objectives: [
    'Manage a fixed water supply by **rationing sweat, not water**: shade, rest and timing.',
    'Build **effective desert shade** (double layer, air gap, off the ground) and explain why a parked car is not shelter.',
    'Recognise **heat exhaustion versus heat stroke** and apply cool-first, transport-second care.',
    'Decide whether to **stay with a vehicle** or travel, and when night travel is — and isn’t — the right answer.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

A radiator hose splits at 11:00 on a remote desert track. It is 41 °C and rising to 44 °C. You and a friend have **5 L of water**, a sunshade, a tool roll, a signal mirror and a trip plan lodged with someone in town. The highway is 38 km away.

Desert emergencies punish the instinct to *do something*. Every litre of sweat is a litre you cannot get back, and the heat illness that follows destroys judgment right when you need it. The skilled response looks almost passive: stop the heat gain, rest in real shade, drink what your body needs, make the vehicle visible, and wait for the evening.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Drink to need; cut sweat instead of rationing', 'Stage 1/4 — water requirements; Stage 8 — hydration and heat stress'],
        ['Double-layer raised shade; not the car', 'Stage 5 — hot-climate shelters; Stage 1/8 — heat balance'],
        ['Heat exhaustion vs heat stroke; cool first', 'Stage 8 — heat stress; Stage 9 — environmental emergencies'],
        ['Stay with the vehicle; night travel only if you must', 'Stage 14 — stay or move; Stage 17 — stranded in heat'],
        ['Mirror ready; smoke only when searchers are near', 'Stage 14 — visual signals'],
        ['Repair in the cool; water-for-mobility trade', 'Stage 10 — repair systems; Stage 1 — risk'],
      ],
      caption: 'Heat, water and visibility are one problem in the desert.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-2', caption: 'Capstone 2: from 11:00 breakdown to the next morning.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Heat stroke is a time-critical emergency',
      md: 'Any confusion, odd behaviour, collapse or seizure in a hot person is heat stroke until proven otherwise — **even if they are still sweating**. Cool first and aggressively (cold-water immersion if available; otherwise soak the whole body and fan continuously), then evacuate. Do not give paracetamol or aspirin for it. Learn this hands-on on a wilderness first-aid course.',
    },
  ],
  whyItMatters: 'Hot-environment emergencies move fast: a person walking in the midday desert can lose 1–1.5 L of sweat an hour, and heat stroke can develop within an afternoon. The decisions that prevent it — shade, rest, water discipline, staying findable — are simple, but they run against every instinct to act.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **Ration sweat, not water.** Water in the jerrycan does nothing for you; water in your body keeps you cooling and thinking.
- **The vehicle is the signal.** From the air a car is visible from kilometres away; two people on foot are nearly invisible.
- **Night is for movement — only if movement is necessary.** If nobody knows where you are and you know exactly where help is, travel in the cool of the evening and night. If a trip plan names your route, stay.
- **The same logic elsewhere:** a canyon hike in summer (shade, turn around, wait for evening), an outback breakdown, a heatwave power cut in a city (cool rooms, check on vulnerable people, water on hand).`,
    },
  ],
  mistakes: [
    'Rationing drinking water below need to “make it last” (a myth).',
    'Working on the vehicle or walking in the hottest part of the day.',
    'Sheltering inside a parked car, which can exceed 60 °C.',
    'Assuming someone who is still sweating cannot have heat stroke.',
    'Treating heat stroke with fever medicine instead of immediate cooling.',
    'Leaving the vehicle when someone knows your route — or walking out at night when help is already on its way.',
  ],
  exercises: [
    {
      id: 'cap-2-e1',
      title: 'Play Capstone 2 and build a water ledger',
      level: 4,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the scenario once without pausing.',
        'Play again, and at each node write down how many millilitres you expect the choice to cost, and why (activity, shade, time of day).',
        'Compare your estimates with the water meter.',
        'Replay choosing “sit in the car” or “ration hard” and note what happens at 15:00.',
      ],
      success: ['You reach the best ending with at least 1 L left.', 'You can state the difference between heat exhaustion and heat stroke in one sentence.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-2-e2',
      title: 'Vehicle heat-emergency audit and plan',
      level: 4,
      safety: 'home',
      minutes: 90,
      materials: ['Your vehicle', 'Pen and paper or a spreadsheet', 'A thermometer (optional)'],
      steps: [
        'Inventory what your vehicle carries today for a 24-hour breakdown in heat: water, shade material, signals, repair tape, first aid, lights.',
        'Calculate water for everyone who usually travels with you: rest-in-shade and working-in-sun rates for 24 hours.',
        'Write a one-page trip plan template: route, vehicle description, check-in time, and the time your contact should raise the alarm.',
        'Optional: on a hot day, measure the temperature inside the closed car and in open shade next to it, from a safe position — never by staying inside.',
      ],
      success: ['A written kit list with gaps identified and fixed.', 'A trip-plan template you have used at least once.'],
      skill: 'vehicle-kit',
      safetyNote: 'Never sit in a closed car on a hot day to “test” it, and never leave people or animals inside.',
    },
  ],
  simulations: ['scenario-cap-2'],
  quiz: [
    {
      id: 'cap-2-q2',
      kind: 'single',
      prompt: 'What most clearly distinguishes heat stroke from heat exhaustion in the field?',
      choices: [
        { id: 'a', text: 'Heavy sweating that soaks through clothing', why: 'Sweating can be present in both — especially in exertional heat stroke.' },
        { id: 'b', text: 'Altered mental status, such as confusion or collapse', why: 'Correct — nervous-system dysfunction plus heat is the field definition of heat stroke.' },
        { id: 'c', text: 'A pounding headache together with nausea', why: 'Common in heat exhaustion; not specific.' },
        { id: 'd', text: 'Strong thirst and a dry mouth', why: 'A sign of dehydration, not of heat stroke.' },
      ],
      answer: 'b',
      concepts: ['heat-balance', 'dehydration'],
      explanation: 'Confusion, odd behaviour, collapse or seizure in the heat means heat stroke. Check mental status repeatedly in anyone unwell in the heat; a change in behaviour means cool immediately.',
    },
    {
      id: 'cap-2-q3',
      kind: 'single',
      prompt: 'Stranded in the desert with limited water, which approach best extends your survival time?',
      choices: [
        { id: 'a', text: 'Ration it to small cups each hour so the supply lasts longer.', why: 'Rationing leaves the water in the bottle while your body dehydrates.' },
        { id: 'b', text: 'Drink to need, and cut sweat loss with shade, rest and timing.', why: 'Correct — water in the body, not the bottle, keeps you alive.' },
        { id: 'c', text: 'Drink nothing until thirst is severe, then take only a little.', why: 'Waiting until you are badly dehydrated impairs judgment and heat control.' },
        { id: 'd', text: 'Sip small amounts while walking to reach help sooner.', why: 'Walking in the heat multiplies sweat loss; rest in shade instead.' },
      ],
      answer: 'b',
      concepts: ['water-needs', 'dehydration'],
      explanation: 'Water in the body, not the bottle, keeps you alive. Ration sweat, not water: drink to need and reduce sweat loss with shade, rest and timing.',
    },
    {
      id: 'cap-2-q4',
      kind: 'single',
      prompt: 'Which of these would make desert shade LESS effective?',
      choices: [
        { id: 'a', text: 'Two layers of material with an air gap between them', why: 'This helps — the outer layer takes the sun; the gap lets heat escape before it reaches the inner layer.' },
        { id: 'b', text: 'Sitting off the ground on a pad, cushion or branches', why: 'This helps — sunlit ground can exceed 60 °C, and even shaded ground conducts heat.' },
        { id: 'c', text: 'Enclosing the shade on all sides to block the hot wind', why: 'Correct — this is the mistake: you want air movement for evaporative cooling.' },
        { id: 'd', text: 'Wearing loose, long, light-coloured clothing underneath', why: 'This helps — it reduces solar and radiant heat gain while letting sweat evaporate.' },
      ],
      answer: 'c',
      concepts: ['shelter-types', 'heat-balance'],
      explanation: 'Desert shelter manages radiation (sun, hot ground) and conduction while keeping air moving.',
    },
    {
      id: 'cap-2-q5',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 signaling): when should you light a smoke signal such as a burning spare tyre?',
      choices: [
        { id: 'a', text: 'Immediately after breaking down, so it’s going when searchers start.', why: 'Nobody is looking yet; the signal is wasted and the fire is hazardous and toxic.' },
        { id: 'b', text: 'When you see or hear a searching vehicle or aircraft — prepared in advance so it lights quickly.', why: 'Correct — smoke is a one-shot, on-demand signal.' },
        { id: 'c', text: 'At night, because flames are easier to see.', why: 'At night a small fire or flashing light is better; smoke is a daytime signal.' },
        { id: 'd', text: 'Never — smoke is not a recognised signal.', why: 'Smoke is a recognised and effective daytime signal.' },
      ],
      answer: 'b',
      concepts: ['signaling', 'visibility'],
      explanation: 'Prepare signals early, trigger them when someone can see them. The mirror is the best daytime signal to aircraft.',
    },
    {
      id: 'cap-2-q1',
      kind: 'single',
      prompt: 'Walking in desert sun costs about 1.2 L of sweat per hour. At 4 km/h, how much water would one person need to walk the 38 km to the highway?',
      choices: [
        { id: 'a', text: 'About 9.5 L', why: 'That is the walking time in hours — the 1.2 L per hour factor was forgotten.' },
        { id: 'b', text: 'About 11.4 L', why: 'Correct — 9.5 h × 1.2 L/h.' },
        { id: 'c', text: 'About 45.6 L', why: 'That multiplies the distance by 1.2 instead of the walking time.' },
        { id: 'd', text: 'About 7.9 L', why: 'That divides the hours by 1.2 instead of multiplying.' },
      ],
      answer: 'b',
      concepts: ['water-needs', 'stay-or-move'],
      explanation: '38 km ÷ 4 km/h = 9.5 h; 9.5 h × 1.2 L/h ≈ 11.4 L per person — more than twice what the two of you carry in total. The numbers make the stay-or-move decision for you.',
    },
    {
      id: 'cap-2-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 heat budget): about how much heat does evaporating 1 L of sweat remove from the body?',
      choices: [
        { id: 'a', text: 'About 24 kJ', why: 'A hundred times too small.' },
        { id: 'b', text: 'About 240 kJ', why: 'That is for 100 ml.' },
        { id: 'c', text: 'About 2,400 kJ', why: 'Correct — roughly 2.4 MJ per litre evaporated.' },
        { id: 'd', text: 'About 24,000 kJ', why: 'Ten times too large.' },
      ],
      answer: 'c',
      concepts: ['heat-loss', 'heat-balance'],
      explanation: 'That is why sweating is so powerful — and why every litre of sweat is a litre of water you must replace.',
    },
  ],
  scenario: {
    id: 'cap-2-sc',
    setup: 'A summer canyon hike. At 12:30 your partner, who has been drinking little, becomes confused and starts slurring words; they are hot to the touch and still sweating. It is 39 °C. You have 2 L of water, a pool of shaded creek water nearby, and one bar of signal on the rim 20 minutes above.',
    question: 'What do you do first?',
    choices: [
      { id: 'a', text: 'Give them paracetamol and a litre to drink, then rest in the shade.', why: 'Antipyretics don’t treat heat stroke, and a confused person may not swallow safely.' },
      { id: 'b', text: 'Get them into the shaded creek water up to the neck (supporting their head) or, if that is unsafe, soak and fan them continuously; then send for help once cooling is underway.', why: 'Best — cold-water immersion is the most effective cooling; cool first, then call.' },
      { id: 'c', text: 'Leave them and climb to the rim to call for help immediately.', why: 'The call matters, but minutes of cooling matter more; leaving a confused person alone is also dangerous.' },
      { id: 'd', text: 'Help them walk out to the trailhead before they get worse.', why: 'Exertion in the heat is what caused this; walking will worsen it.' },
    ],
    best: 'b',
    debrief: 'Altered mental status in the heat is **heat stroke**. Current WMS and ACSM guidance: **cool first, transport second**. Immersion in cool water, with someone holding the casualty’s head clear, is the gold standard; otherwise whole-body wetting and continuous fanning. Only then go for the call — or send someone.',
    concepts: ['heat-balance', 'priorities', 'immediate-danger'],
  },
  summary: [
    'Ration sweat, not water: shade, rest, timing.',
    'Raised double-layer shade beats a parked car.',
    'Confusion in the heat = heat stroke: cool first, transport second.',
    'Stay with the vehicle when someone knows your route; travel only in the cool, and only if you must.',
    'Prepare signals early; fire them when someone can see them.',
  ],
  furtherReading: ['wms-heat-2024', 'ready-car', 'afh-10-644'],
  references: ['wms-heat-2024', 'acsm-ehi-2023', 'tbmed-507', 'acsm-fluid-2007', 'iom-water-2005', 'ready-car', 'nws-heat'],
}

const cap3: Lesson = {
  id: 'cap-3',
  stage: 19,
  order: 3,
  title: 'Cold-weather survival',
  level: 'expert',
  minutes: 80,
  prerequisites: ['s8-l3', 's5-l5', 's3-l4'],
  concepts: ['integration', 'insulation', 'clothing', 'heat-loss', 'shelter-types'],
  objectives: [
    'Manage the **insulation–sweat trade-off**: add layers when heat production falls, vent them when working.',
    'Choose a **snow shelter** that can be finished before dark with the time and energy available.',
    'Use a stove for water and heat **without carbon-monoxide risk**, and recognise CO poisoning.',
    'Give correct field care for **frostnip and frostbite**, avoiding the classic myths.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

February in subarctic taiga, 14:30, −15 °C, clear. Your snowmobile’s drive belt shreds 22 km from the lodge. The night will reach −25 °C. The lodge knows your route; there is no coverage. You have a stove, shovel, foam pad, bivvy bag and a thermos.

In deep cold the enemy is not the temperature itself but **moisture and time**. Sweat turns good insulation into a cold, wet layer; a stove that makes everything better can quietly poison you; a few minutes with bare fingers on metal decide whether you keep them. The scenario rewards slow, deliberate work and punishes haste.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Insulate immediately when heat production drops', 'Stage 1 — heat budget; Stage 8 — thermoregulation'],
        ['Vent while working; stay dry for the night', 'Stage 1 — clothing and insulation; Stage 8 — hypothermia'],
        ['Trench vs quinzhee vs “just the sled”', 'Stage 5 — snow shelters, shelter design'],
        ['Stove at an open entrance; never sealed in', 'Stage 3 — heating; Stage 12 — cold hazards'],
        ['Melt snow rather than eat it', 'Stage 4 — water; Stage 8 — heat balance'],
        ['Frostnip rewarming; frostbite protection', 'Stage 9 — environmental emergencies'],
        ['Stay with the machine; avoid unknown ice', 'Stage 14 — stay or move; Stage 17 — stranded in cold'],
      ],
      caption: 'Cold-weather survival is heat-budget management over 17 hours.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-3', caption: 'Capstone 3: a −25 °C night beside a broken snowmobile.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Carbon monoxide',
      md: 'Stoves, heaters and fires in enclosed spaces — snow shelters, tents, cars with blocked exhausts — produce carbon monoxide you cannot see or smell. Headache, nausea, dizziness and drowsiness are the warning signs. Ventilate always; if symptoms appear, turn the source off and get to fresh air at once.',
    },
  ],
  whyItMatters: 'Cold kills slowly and quietly: wet insulation, a little dehydration, a lot of time. The winning moves happen early — insulating before you’re cold, keeping clothing dry while you work, and finishing a shelter you can actually complete before dark.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **“Be bold, start cold.”** Strip layers before you dig; put them back on the moment you stop.
- **A shelter you can finish beats a perfect one you can’t.** A trench in an hour is better than a quinzhee finished at 20:00 by a soaked, exhausted builder.
- **Fuel is for water and heat.** Eating snow costs body heat; the stove exists to make that cost disappear.
- **The same logic elsewhere:** a stranded car in a blizzard (stay with it, clear the exhaust, run the engine only briefly with a window cracked), a winter hike with a broken binding, a late-season hunting trip.`,
    },
  ],
  mistakes: [
    'Walking out in a snowmobile suit and soaking the base layer with sweat.',
    'Working bare-handed on cold metal “for just a minute”.',
    'Rubbing frostbitten skin, especially with snow (a myth).',
    'Rewarming frostbite when it may refreeze before you reach care.',
    'Running a stove in a sealed shelter.',
    'Eating snow instead of melting it.',
    'Crossing a frozen lake without knowledge of the ice — inlets and outlets are thin.',
  ],
  exercises: [
    {
      id: 'cap-3-e1',
      title: 'Play Capstone 3 and trace the “coldnight” flag',
      level: 4,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the scenario once without pausing.',
        'Replay three times, each time choosing one moisture error (walking out, digging hot, eating snow). Note when and how it surfaces.',
        'Write a short paragraph on why the consequence appears hours later rather than immediately.',
      ],
      success: ['You reach the best ending at least once.', 'You can explain how sweat reduces insulation value.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-3-e2',
      title: 'Winter vent-and-layer drill',
      level: 4,
      safety: 'outdoor',
      minutes: 120,
      materials: ['Your normal winter layering system', 'A thermometer', 'A small notebook', 'A partner'],
      safetyNote: 'Do this on a short, familiar route near a road or building, in daylight, with a partner, above about −10 °C. Turn back at the first sign of numb skin, uncontrolled shivering or a deteriorating forecast.',
      steps: [
        'Before a winter walk, predict which layers you will wear when walking uphill, walking flat, and stopping.',
        'On the walk, change layers at each transition before you feel hot or cold; note the time it took.',
        'At a stop, check your base layer for dampness by touch; note how fast you cool.',
        'Afterwards, adjust your system so you can vent without removing your pack or gloves.',
      ],
      success: ['You finish with a dry base layer.', 'You made every layer change before becoming sweaty or chilled.'],
      skill: 'clothing-system',
    },
  ],
  simulations: ['scenario-cap-3'],
  quiz: [
    {
      id: 'cap-3-q3',
      kind: 'single',
      prompt: 'You’re in a snow shelter with a stove running. Which of these is NOT a sign of carbon-monoxide poisoning?',
      choices: [
        { id: 'a', text: 'A headache that builds while the stove runs', why: 'It is a sign — headache is the most common early symptom.' },
        { id: 'b', text: 'Nausea that starts after you settle inside', why: 'It is a sign — nausea is a typical CO symptom.' },
        { id: 'c', text: 'Unusual drowsiness or confusion', why: 'It is a sign — and a dangerous one, because it stops you acting.' },
        { id: 'd', text: 'A smell of gas inside the shelter', why: 'Correct — CO is odourless; a smell points to a leak, which is also a reason to ventilate.' },
      ],
      answer: 'd',
      concepts: ['immediate-danger', 'decisions'],
      explanation: 'CO has no smell, so watch for headache, nausea and drowsiness. Turn off the source and get to fresh air; symptoms often resemble exhaustion or altitude illness, which is why CO is so easy to miss.',
    },
    {
      id: 'cap-3-q2',
      kind: 'single',
      prompt: 'Which first aid for frostnipped or frostbitten skin is correct?',
      choices: [
        { id: 'a', text: 'Rub it briskly with snow to restore circulation.', why: 'A myth — rubbing damages frozen tissue, and snow cools it further.' },
        { id: 'b', text: 'Rewarm frostnip skin-to-skin; don’t rub frostbite.', why: 'Correct — protect frostbite and rewarm it only when it can’t refreeze.' },
        { id: 'c', text: 'Thaw frostbite in warm water at once, even if it may refreeze.', why: 'Rapid rewarming is right only when refreezing can be prevented.' },
        { id: 'd', text: 'Massage it firmly with dry hands until the colour returns.', why: 'Rubbing or massaging damages frozen tissue.' },
      ],
      answer: 'b',
      concepts: ['heat-loss', 'immediate-danger'],
      explanation: 'Rubbing damages frozen tissue, and snow cools it further. Rewarm frostnip skin-to-skin; for frostbite, protect it and rewarm rapidly in warm water only when refreezing can be prevented (WMS 2024).',
    },
    {
      id: 'cap-3-q1',
      kind: 'single',
      prompt: 'Why strip down to a base layer and shell before digging a snow trench at −15 °C?',
      choices: [
        { id: 'a', text: 'To move more freely.', why: 'A side benefit, not the reason.' },
        { id: 'b', text: 'To keep your insulating layers dry so they still work when you stop.', why: 'Correct — moisture from sweat collapses and wets insulation, and it freezes when you rest.' },
        { id: 'c', text: 'Because cold air makes you work faster.', why: 'Not a principle.' },
        { id: 'd', text: 'So the snow doesn’t melt on your clothes.', why: 'Snow on a shell is easily brushed off; sweat from inside is the problem.' },
      ],
      answer: 'b',
      concepts: ['insulation', 'clothing'],
      explanation: 'Heat production during work is high; insulation you need at rest becomes a sweat trap if worn while working.',
    },
    {
      id: 'cap-3-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 stay-or-move): which fact most strongly supports staying with the snowmobile?',
      choices: [
        { id: 'a', text: 'The engine stays warm for hours, so you can shelter against it.', why: 'It cools quickly; not the reason.' },
        { id: 'b', text: 'Searches will follow your known route, and the sled holds your gear and is easy to see.', why: 'Correct — known route, equipment and visibility together make staying the high-probability option.' },
        { id: 'c', text: 'Walking any real distance through deep snow is simply impossible.', why: 'Not always — but here it is slow and sweat-inducing.' },
        { id: 'd', text: 'Daylight returns at 07:30, so you can walk out safely in the morning.', why: 'Relevant to timing, but not why you should stay.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'trip-plan'],
      explanation: 'The lodge knows your route, so searches run along that trail. A trip plan converts “somewhere in the forest” into “on trail 3” — a search area a sled can cover in an hour.',
    },
    {
      id: 'cap-3-q5',
      kind: 'single',
      prompt: 'Spaced review (Stage 8): a companion is mildly hypothermic — shivering but coherent. Which field care step comes first?',
      choices: [
        { id: 'a', text: 'Get them out of wind and wet and insulate them from the ground', why: 'Correct — stop the heat loss before anything else.' },
        { id: 'b', text: 'Replace wet layers with dry ones or add a vapour barrier', why: 'Important, but it comes after getting out of the wind and wet.' },
        { id: 'c', text: 'Give calories and warm sweet drinks to fuel shivering', why: 'Fuel comes after the loss has been stopped.' },
        { id: 'd', text: 'Put hot bottles or heat packs on the chest and armpits', why: 'External heat is the last step, once losses are stopped and the body is fuelled.' },
      ],
      answer: 'a',
      concepts: ['heat-loss', 'priorities'],
      explanation: 'Shelter, dry layers, fuel, then external heat to the trunk: stop the loss first, then fuel the body’s own heat production, then add heat. Mild hypothermia responds well to this sequence.',
    },
    {
      id: 'cap-3-q4',
      kind: 'single',
      prompt: 'Melting ice or snow at 0 °C takes about 334 kJ per kg. How much energy does it take just to melt the snow for 2 L of water?',
      choices: [
        { id: 'a', text: '334 kJ', why: 'That is for 1 kg — the second litre was forgotten.' },
        { id: 'b', text: '167 kJ', why: 'That divides by 2 instead of multiplying.' },
        { id: 'c', text: '668 kJ', why: 'Correct — 2 kg × 334 kJ/kg.' },
        { id: 'd', text: '668,000 kJ', why: 'That uses 2,000 g with a per-kilogram value.' },
      ],
      answer: 'c',
      concepts: ['heat-balance', 'water-needs'],
      explanation: '2 kg × 334 kJ/kg = 668 kJ — before warming the water, and before warming the snow from −25 °C. If your body does this by eating snow, it is heat you cannot spare. That is what the stove fuel is for.',
    },
  ],
  scenario: {
    id: 'cap-3-sc',
    setup: 'A winter road in open farmland at night, −18 °C with blowing snow. Your car has slid into a snowbank; it is undamaged but stuck, and the exhaust is buried on the drift side. You have half a tank of fuel, a blanket, a shovel and a phone at 40 % with signal.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Keep the engine running with the heater on full and the windows closed until help arrives.', why: 'With a buried exhaust, CO can fill the cabin within minutes.' },
      { id: 'b', text: 'Call for help with your location; clear the exhaust; run the engine about 10 minutes an hour with a window cracked; wear all layers and use the blanket; stay with the car; re-check the exhaust regularly.', why: 'Best — communication, CO control, insulation and staying with the vehicle.' },
      { id: 'c', text: 'Walk to the farmhouse lights about 2 km away.', why: 'Blowing snow and wind make distances deceptive and whiteout disorientation likely; the car is shelter and a signal.' },
      { id: 'd', text: 'Dig the car out as fast as you can before you get cold.', why: 'Hard digging soaks you with sweat; pace it and vent, or wait for help.' },
    ],
    best: 'b',
    debrief: 'The capstone’s lessons on a road: **ventilate any combustion**, **insulate before you get cold**, **work without sweating**, and **stay with the shelter searchers are looking for**.',
    concepts: ['immediate-danger', 'stay-or-move', 'insulation'],
  },
  summary: [
    'Insulate as soon as heat production drops; vent as soon as you work.',
    'Build the shelter you can finish before dark.',
    'Stoves only with ventilation; headache + nausea + drowsiness = CO until proven otherwise.',
    'Frostnip: skin-to-skin rewarming. Frostbite: don’t rub; protect; don’t let it refreeze.',
    'Stay with the machine on a known route; avoid unknown ice.',
  ],
  furtherReading: ['usariem-cold', 'wms-frostbite-2024', 'kochanski-bushcraft'],
  references: ['usariem-cold', 'wms-hypothermia-2019', 'wms-frostbite-2024', 'nws-windchill', 'afh-10-644', 'ready-car'],
}

const cap4: Lesson = {
  id: 'cap-4',
  stage: 19,
  order: 4,
  title: 'Tropical environment',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s5-l6', 's4-l5'],
  concepts: ['integration', 'water-treatment', 'site-selection', 'stay-or-move'],
  objectives: [
    'Keep a water supply safe in the tropics: pre-filtering, **chemical contact times** and rain collection.',
    'Build and site a **raised shelter** that deals with rain, run-off, insects and falling branches.',
    'Manage **constant wet**: feet, small wounds, leeches and insect bites before they become infections.',
    'Decide when to **stay** for a search and when **following drainage** to a river is justified — and how to travel beside water safely.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

A lowland rainforest in the wet season. You were separated from a guided group at 12:20. It is 29 °C and 90 % humidity, with a downpour due mid-afternoon. The guide told everyone: *stop, stay, whistle.* You have half a litre of water, chlorine-dioxide tablets, a poncho, cord, repellent and a whistle.

Rainforests are rarely short of water or warmth. They are short of **visibility, dryness and hygiene**. You can’t see searchers and they can’t see you; everything is wet; and in heat and humidity small problems — a scratch, a sip of untreated water, twelve hours in wet socks — become big ones within a day.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Stop, stay and whistle as briefed', 'Stage 1 — STOP; Stage 14 — how searches work, audible signals'],
        ['Pre-filter + chlorine dioxide + contact time; rain collection', 'Stage 4 — contamination, treatment science'],
        ['Raised bed, steep roof, site checks overhead and underfoot', 'Stage 5 — hot-climate and tropical shelters; site selection'],
        ['Dry feet at night; leech removal; wound irrigation', 'Stage 9 — wounds; bites and stings; Stage 10 — field hygiene'],
        ['Flash flood on a stream bank', 'Stage 12 — flash floods and water crossings'],
        ['Following drainage — beside the water, not in it', 'Stage 2 — handrails; Stage 12 — crossings; Stage 14 — stay or move'],
      ],
      caption: 'In the tropics, most of the danger arrives slowly and through the skin, gut and feet.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-4', caption: 'Capstone 4: separated from a group in the rainforest, through a night and into Day 2.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'Treatment times are not optional',
      md: 'Check the label of any chemical treatment you carry. Typical chlorine-dioxide tablets need about 30 minutes for bacteria and viruses and up to **4 hours** for *Cryptosporidium* — longer in cold or cloudy water. Boiling (a rolling boil for 1 minute; 3 minutes above about 2,000 m) works against everything biological.',
    },
  ],
  whyItMatters: 'Tropical travel is increasingly common, and the failure modes are unfamiliar to people from temperate countries: flash floods from storms you can’t see, water that looks clean and isn’t, and infections that start from a scratch. The decisions that prevent them are small and constant.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **Your briefing is your plan.** If a guide or group has agreed “stop and whistle”, doing exactly that makes the search short.
- **Sites that look easy are often water’s sites.** Flat sand and sheltered dips are where floods and run-off go.
- **Feet and skin are equipment.** Dry them every night, even if it means putting wet socks back on in the morning.
- **Drainage leads out — slowly.** Following water to a river is a sound plan when nobody is searching near you; travel on the bank, cross only at wide riffles, and never float an unknown stream.
- **The same logic elsewhere:** a wet-season hike in monsoon Asia, a humid swamp forest, a hurricane aftermath with contaminated floodwater.`,
    },
  ],
  mistakes: [
    'Wandering after separation instead of stopping and signalling.',
    'Drinking “clean-looking” flowing water untreated (a myth).',
    'Skipping the full contact time for chemical treatment.',
    'Sleeping on the ground or on a stream bank.',
    'Leaving feet wet overnight.',
    'Burning or salting leeches off (causes regurgitation into the wound).',
    'Floating or wading down an unknown stream to travel faster.',
  ],
  exercises: [
    {
      id: 'cap-4-e1',
      title: 'Play Capstone 4 and map the delayed consequences',
      level: 4,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the scenario once without pausing.',
        'Replay, choosing the untreated stream water; then replay choosing the stream bank. Record where each consequence appears.',
        'Replay choosing to follow the drainage on Day 2 and note what makes that route safe or unsafe.',
      ],
      success: ['You reach the best ending at least once.', 'You can state the chlorine-dioxide contact time for Cryptosporidium on your tablets.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-4-e2',
      title: 'Water-treatment timing and rain-catch drill',
      level: 4,
      safety: 'home',
      minutes: 60,
      materials: ['Your chemical treatment tablets or drops', 'A bottle', 'A bandana or coffee filter', 'A poncho or tarp', 'A timer'],
      steps: [
        'Read your treatment’s label and write its contact times for bacteria, viruses and Cryptosporidium, and any cold/cloudy-water adjustment.',
        'In a garden or balcony, rig a poncho or tarp to funnel rain (or a hose spray) into a bottle; time how long it takes to collect 1 L.',
        'Pre-filter a jar of cloudy tap water through the bandana and dose it exactly as the label says; set a timer for the full contact time.',
        'Write a one-line rule you would follow in the field.',
      ],
      success: ['You can state the contact times from memory.', 'You collected 1 L with your rain catch and know how long it takes.'],
      skill: 'water-treatment',
      safetyNote: 'This drill uses tap water; it demonstrates timing and technique. Don’t drink surface water you have treated as a test.',
    },
  ],
  simulations: ['scenario-cap-4'],
  quiz: [
    {
      id: 'cap-4-q5',
      kind: 'single',
      prompt: 'Spaced review (Stage 14 stay or move): when is following drainage to a river the right choice?',
      choices: [
        { id: 'a', text: 'Straight after getting separated, before the group moves too far away.', why: 'That’s when a search is most likely to be near you; stay and signal.' },
        { id: 'b', text: 'When nobody knows where you are or the search has clearly failed, and you can travel safely.', why: 'Correct — drainage becomes the plan when staying no longer leads to rescue.' },
        { id: 'c', text: 'Never — in a rainforest you should always stay put and wait for rescue.', why: 'Staying is usually right early on, but not forever.' },
        { id: 'd', text: 'As soon as you hear a boat engine somewhere in the distance.', why: 'Sound travels confusingly; it’s a clue, not a decision rule.' },
      ],
      answer: 'b',
      concepts: ['stay-or-move', 'decisions'],
      explanation: 'Stay while the search is likely to be near; move — methodically, beside the water, leaving a trail — when that is no longer true.',
    },
    {
      id: 'cap-4-q3',
      kind: 'single',
      prompt: 'Which of these is a mistake when choosing a rainforest shelter site?',
      choices: [
        { id: 'a', text: 'Checking for dead branches or loose fruit overhead', why: 'A good check — falling wood is a major hazard.' },
        { id: 'b', text: 'Staying off drainage lines, dips and stream banks', why: 'A good check — run-off and flash floods.' },
        { id: 'c', text: 'Avoiding ant or termite nests and animal paths', why: 'A good check.' },
        { id: 'd', text: 'Camping as close to the stream as possible for water', why: 'Correct — this is the mistake: be above and back from the channel; collect rain or walk to the stream.' },
      ],
      answer: 'd',
      concepts: ['site-selection', 'shelter-types'],
      explanation: 'Look up, look down, look upstream. In the tropics the site does more for you than anything you build.',
    },
    {
      id: 'cap-4-q1',
      kind: 'single',
      prompt: 'You treat cloudy stream water with a chlorine-dioxide tablet. Which statement is correct?',
      choices: [
        { id: 'a', text: 'It is safe to drink as soon as the tablet has fully dissolved.', why: 'No — disinfection needs contact time.' },
        { id: 'b', text: 'Pre-filter, then wait the full contact time — up to 4 hours for Cryptosporidium.', why: 'Correct.' },
        { id: 'c', text: 'Chlorine dioxide has no effect at all on protozoa such as Cryptosporidium.', why: 'It does work on Cryptosporidium, but slowly — unlike ordinary chlorine.' },
        { id: 'd', text: 'Cloudiness does not matter, because the chemical reaches every microbe.', why: 'Particles shield microbes and consume the chemical; pre-filter.' },
      ],
      answer: 'b',
      concepts: ['water-treatment'],
      explanation: 'Read the label: times vary by product, temperature and turbidity. Boiling is the fallback that works on everything biological.',
    },
    {
      id: 'cap-4-q4',
      kind: 'single',
      prompt: 'A leech is attached to your ankle. Which statement is correct?',
      choices: [
        { id: 'a', text: 'Burning it off with a lighter is the safest way to remove it.', why: 'Burning can make the leech regurgitate into the bite.' },
        { id: 'b', text: 'Covering it with salt is the safest way to make it let go.', why: 'Salting, like burning, can make the leech regurgitate into the bite.' },
        { id: 'c', text: 'Slide a fingernail under the sucker to break the seal.', why: 'Correct — then clean the bite.' },
        { id: 'd', text: 'The leech itself is the main risk, so remove it at any cost.', why: 'The wound, not the leech, is the real risk; clean it afterwards.' },
      ],
      answer: 'c',
      concepts: ['immediate-danger', 'integration'],
      explanation: 'Burning or salting can make the leech regurgitate into the bite. Slide a fingernail under the sucker to break the seal, then clean the bite. The wound, not the leech, is the real risk.',
    },
    {
      id: 'cap-4-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 12): where is the safest place to cross a rainforest stream on foot?',
      choices: [
        { id: 'a', text: 'The narrowest point, where you can almost jump it.', why: 'Narrow sections are usually deepest and fastest.' },
        { id: 'b', text: 'A wide, shallow riffle, below knee depth, facing upstream with a pole.', why: 'Correct — wide riffles are shallowest and slowest.' },
        { id: 'c', text: 'Just above a log-jam, where the water slows down.', why: 'Log-jams are strainers — water passes through, people get pinned.' },
        { id: 'd', text: 'Anywhere, if you unbuckle your pack.', why: 'Unbuckling helps if you fall, but doesn’t make a bad crossing good.' },
      ],
      answer: 'b',
      concepts: ['risk', 'immediate-danger'],
      explanation: 'Choose the crossing, not just the technique: wide, shallow, slow, with a safe run-out below.',
    },
    {
      id: 'cap-4-q2',
      kind: 'single',
      prompt: 'Resting in 29 °C and 90 % humidity you sweat about 0.7 L per hour. How much water do you need for 6 hours of daylight?',
      choices: [
        { id: 'a', text: '0.7 L', why: 'That is one hour’s sweat — the 6 hours were forgotten.' },
        { id: 'b', text: '4.2 L', why: 'Correct — 0.7 L/h × 6 h.' },
        { id: 'c', text: '8.6 L', why: 'That divides 6 by 0.7 instead of multiplying.' },
        { id: 'd', text: '42 L', why: 'A decimal slip — ten times the correct amount.' },
      ],
      answer: 'b',
      concepts: ['water-needs', 'dehydration'],
      explanation: '0.7 L/h × 6 h = 4.2 L. High humidity makes sweat evaporate poorly, so you sweat more for the same cooling. Collecting rain is often the easiest way to meet this.',
    },
  ],
  scenario: {
    id: 'cap-4-sc',
    setup: 'Mangrove-lined coast in the tropics. Your kayak has been swept away and you are on a muddy island at 15:00, soaked, with 0.3 L of water, a poncho, water-treatment tablets, a whistle, and a signal mirror. Your group knows you were paddling this channel. Afternoon storms are daily.',
    question: 'What is the best first plan?',
    choices: [
      { id: 'a', text: 'Swim across the channel to the mainland before dark.', why: 'Tidal currents, cold shock is unlikely but exhaustion and wildlife are real; the group is looking for you in this channel.' },
      { id: 'b', text: 'Move to the highest, most open point of the island above the high-tide line; rig the poncho to catch the afternoon rain; mirror ready for boats and aircraft; whistle schedule; dry your feet tonight.', why: 'Best — water, visibility and a site above the tide, while the search comes to a known channel.' },
      { id: 'c', text: 'Drink from the channel — mangrove water is mostly fresh.', why: 'It is brackish or salt and contaminated; drinking it worsens dehydration.' },
      { id: 'd', text: 'Sleep in the mud at the water’s edge to be seen from the channel.', why: 'The tide will rise; choose the highest point and signal from there.' },
    ],
    best: 'b',
    debrief: 'The same capstone logic on a coast: **stay where the search will be**, **collect clean rain rather than drink doubtful water**, **site above the water’s reach**, and **manage skin and feet** in constant wet.',
    concepts: ['water-treatment', 'site-selection', 'visibility'],
  },
  summary: [
    'Stop, stay and signal where a search will look — especially if that’s what you were briefed.',
    'Pre-filter, dose, and wait the full contact time; collect rain where you can.',
    'Raised shelter, steep roof, and a site checked overhead, underfoot and upstream.',
    'Dry feet nightly; irrigate wounds; remove leeches by breaking the seal.',
    'Follow drainage only when staying won’t get you found — beside the water, never in it.',
  ],
  furtherReading: ['wms-water-2019', 'afh-10-644', 'auerbach'],
  references: ['wms-water-2019', 'cdc-emergency-water', 'who-gdwq', 'afh-10-644', 'nws-flood', 'auerbach', 'koester-lpb'],
}

const cap5: Lesson = {
  id: 'cap-5',
  stage: 19,
  order: 5,
  title: 'Mountain environment',
  level: 'expert',
  minutes: 75,
  prerequisites: ['s8-l8', 's12-l6'],
  concepts: ['integration', 'risk', 'human-factors', 'immediate-danger'],
  objectives: [
    'Make an early **turnaround** decision when independent hazards (weather, illness) converge.',
    'Apply current **lightning** guidance on exposed terrain: lose height, avoid exposed features and overhangs, spread out.',
    'Recognise the progression from **acute mountain sickness to HACE** and act on it by descending.',
    'Choose **terrain** (known route vs loose couloir) and **water crossings** by consequence, not by time saved.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

An exposed ridge at 3,400 m, 12:30, midsummer. Thunderstorms are forecast after 14:00 and the clouds are already towering. Your partner, who ascended fast from sea level, has a headache and nausea. The summit is 45 minutes away.

Mountains make hazards **converge**: weather, altitude, terrain and fatigue all get worse with height and time, and they interact. The central skill is recognising that two “maybe” problems together make a “definitely” — and that descending solves most of them at once. The traps are human: summit fever, sunk cost, and the unwillingness to disappoint a partner.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Turn around at 12:30', 'Stage 1 — trip plans, turnaround times, risk; Stage 15 — cognitive bias'],
        ['AMS → HACE: descend', 'Stage 8 — altitude; Stage 9 — monitoring and evacuation decisions'],
        ['Lightning: lose height, avoid overhangs, spread out', 'Stage 12 — thunderstorms and lightning'],
        ['Known route vs loose couloir', 'Stage 12 — rockfall; Stage 13 — terrain; Stage 1 — reversibility'],
        ['Stream in spate: detour to the bridge', 'Stage 12 — flash floods and water crossings'],
        ['Structured emergency call', 'Stage 14 — radio, satellite and phones'],
      ],
      caption: 'In the mountains, time and height make almost every hazard worse; descent fixes most of them.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-5', caption: 'Capstone 5: a ridge, a storm and a sick partner.' },
    {
      type: 'callout',
      tone: 'danger',
      title: 'Altitude illness in one paragraph',
      md: 'Headache plus nausea, fatigue or dizziness after a recent ascent is **acute mountain sickness**: don’t go higher; rest or descend. **Unsteady walking (fails heel-to-toe), confusion or unusual drowsiness** means **high-altitude cerebral oedema**; **breathlessness at rest** means **high-altitude pulmonary oedema**. Both are emergencies: descend immediately, with help, and call for rescue. Medication and oxygen are for trained people and do not replace descent. Take a wilderness-medicine course before going high.',
    },
  ],
  whyItMatters: 'Mountain accidents cluster around predictable decisions: continuing into a forecast storm, ignoring a partner’s symptoms near a summit, choosing an unknown shortcut, and wading a swollen stream near the end of the day. Every one is avoidable with an early, humble decision.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **Converging hazards.** Storm alone: maybe continue with a strict turnaround. AMS alone: stop ascending. Both together: go down now.
- **No place outdoors is safe from lightning.** Descend, leave ridges, summits and lone features; stay out of shallow caves and overhangs; spread out.
- **Known beats short.** An unknown couloir is a one-way door; the known route is a reversible one.
- **The last hazard of the day is often water.** Streams fed by storms and snowmelt peak in the afternoon.
- **The same logic elsewhere:** a volcano hike with afternoon storms, a high-altitude trek with a fast itinerary, a canyon with a thunderstorm upstream.`,
    },
  ],
  mistakes: [
    'Summit fever: continuing because the goal is close.',
    'Going higher with symptoms of acute mountain sickness.',
    'Treating HACE with rest and painkillers instead of descent.',
    'Sheltering in a shallow cave or under an overhang during lightning.',
    'Relying on the “lightning crouch” instead of moving to lower, less exposed ground.',
    'Taking an unknown loose couloir to save time.',
    'Wading a stream in spate when a bridge is within an hour.',
  ],
  exercises: [
    {
      id: 'cap-5-e1',
      title: 'Play Capstone 5 and name the traps',
      level: 4,
      safety: 'virtual-only',
      minutes: 40,
      steps: [
        'Play the scenario once without pausing.',
        'Replay choosing the summit; note how that choice changes what happens to Alex later.',
        'For each poor option in the scenario, name the human-factor trap it represents (commitment, scarcity, social proof, sunk cost…).',
      ],
      success: ['You reach the best ending at least once.', 'You can list the signs that separate AMS from HACE.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-5-e2',
      title: 'Turnaround and weather plan for a real mountain day',
      level: 4,
      safety: 'home',
      minutes: 60,
      materials: ['A map of a mountain route you plan to do', 'The local mountain-weather forecast', 'Pen and paper'],
      steps: [
        'Write the route with times for each leg, and set a hard turnaround time based on the thunderstorm forecast.',
        'Mark exposed sections (ridges, summits) and the fastest way off each one.',
        'Mark every stream crossing and an alternative (bridge, higher crossing) for each.',
        'Write three “if … then …” triggers: one for weather, one for a partner’s symptoms, one for pace.',
        'Leave the plan with someone and brief your partner on the triggers before the day.',
      ],
      success: ['A written plan with a turnaround time and three triggers.', 'Your partner can state the triggers without reading them.'],
      skill: 'risk-assessment',
    },
  ],
  simulations: ['scenario-cap-5'],
  quiz: [
    {
      id: 'cap-5-q2',
      kind: 'single',
      prompt: 'Your partner, who has had a headache since midday at 3,400 m, now can’t walk heel-to-toe along a line and seems confused. What does this indicate and what is the priority?',
      choices: [
        { id: 'a', text: 'Dehydration: rest and drink, then continue.', why: 'Dehydration may contribute, but ataxia and confusion at altitude mean HACE.' },
        { id: 'b', text: 'HACE: descend immediately, together, and call for rescue.', why: 'Correct — descent is the definitive treatment.' },
        { id: 'c', text: 'Mild AMS: rest here overnight.', why: 'Ataxia and confusion are beyond mild AMS; staying at altitude can be fatal.' },
        { id: 'd', text: 'Hypoglycaemia: give sugar and wait an hour.', why: 'Sugar is harmless to give, but waiting is not.' },
      ],
      answer: 'b',
      concepts: ['immediate-danger', 'decisions'],
      explanation: 'The heel-to-toe (tandem gait) test is a quick field check for HACE. Even a few hundred metres of descent can help dramatically.',
    },
    {
      id: 'cap-5-q4',
      kind: 'single',
      prompt: 'Which human-factor trap is NOT really at work in “We’re 45 minutes from the summit — let’s go for it” on a route new to you?',
      choices: [
        { id: 'a', text: 'Scarcity / summit fever', why: 'It is at work — the goal feels rare and close.' },
        { id: 'b', text: 'Commitment / sunk cost', why: 'It is at work — the effort already invested pushes you on.' },
        { id: 'c', text: 'Not wanting to disappoint a partner', why: 'It is at work — “I’m fine, let’s just summit.”' },
        { id: 'd', text: 'Familiarity with the route', why: 'Correct — the route is new to you, so this trap is not present.' },
      ],
      answer: 'd',
      concepts: ['human-factors', 'decisions'],
      explanation: 'Summit fever, sunk cost and social pressure all push toward the summit here. Naming the trap out loud, and having pre-agreed triggers, is the best defence.',
    },
    {
      id: 'cap-5-q3',
      kind: 'single',
      prompt: 'You are on a ridge and thunder is close. Where should you go?',
      choices: [
        { id: 'a', text: 'Into a shallow cave or under a rock overhang', why: 'Current can arc across the opening (side flash) and travel through the rock.' },
        { id: 'b', text: 'Down off the ridge, away from exposed features', why: 'Correct — lose height and leave exposed features.' },
        { id: 'c', text: 'Under the tallest lone tree on the ridge', why: 'Lone features are exactly what you should avoid in lightning.' },
        { id: 'd', text: 'Stay crouched on the ridge crest until it passes', why: 'The crest is the most exposed place; descend instead.' },
      ],
      answer: 'b',
      concepts: ['immediate-danger', 'risk'],
      explanation: 'Shallow caves and overhangs are not safe: current can arc across the opening and travel through ground and rock. Descend and leave summits, ridges and lone features.',
    },
    {
      id: 'cap-5-q5',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 reversibility): why is the known ascent route better than the loose couloir, even if it takes longer?',
      choices: [
        { id: 'a', text: 'The ascent route is always the faster way down a mountain.', why: 'It isn’t — here it was longer.' },
        { id: 'b', text: 'Its hazards are known and you can reverse it; the couloir may commit you.', why: 'Correct — reversibility and known consequences.' },
        { id: 'c', text: 'Couloirs attract lightning more than any other feature on a mountain.', why: 'Not the main reason; they are dangerous for rockfall and water.' },
        { id: 'd', text: 'Mountain rules say you must always descend the way you came up.', why: 'No such rule; it’s a judgment about consequences.' },
      ],
      answer: 'b',
      concepts: ['reversibility', 'risk'],
      explanation: 'Under time pressure, prefer the option whose worst case you already know.',
    },
    {
      id: 'cap-5-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 trip plans): which part of the pair’s plan most reduced the consequences of the day going wrong?',
      choices: [
        { id: 'a', text: 'The hut warden had their names, route and expected return time.', why: 'Correct — rescuers knew where to look before any call was made.' },
        { id: 'b', text: 'They carried two emergency bivvy bags.', why: 'Useful, but it doesn’t bring help.' },
        { id: 'c', text: 'They had a map.', why: 'Essential for navigation, but nobody else could see it.' },
        { id: 'd', text: 'They started early.', why: 'Helpful, but not what reduced the consequences once things went wrong.' },
      ],
      answer: 'a',
      concepts: ['trip-plan', 'phone-use'],
      explanation: 'A trip plan with a responsible person is the cheapest rescue insurance there is.',
    },
    {
      id: 'cap-5-q1',
      kind: 'single',
      prompt: 'You count 6 seconds between a lightning flash and its thunder. Sound travels about 343 m/s. How far away was the strike?',
      choices: [
        { id: 'a', text: 'About 0.06 km', why: 'That divides 343 by 6 — the ratio is inverted.' },
        { id: 'b', text: 'About 2.1 km', why: 'Correct — 6 s × 343 m/s ≈ 2,060 m.' },
        { id: 'c', text: 'About 6 km', why: 'That assumes sound covers 1 km per second; it takes about 3 s per km.' },
        { id: 'd', text: 'About 20.6 km', why: 'A metres-to-kilometres slip — ten times too far.' },
      ],
      answer: 'b',
      concepts: ['immediate-danger', 'risk'],
      explanation: '6 s × 343 m/s ≈ 2,060 m ≈ 2 km (≈3 s per km). Lightning can strike well over 10 km from a storm, so any audible thunder means you are within range.',
    },
  ],
  scenario: {
    id: 'cap-5-sc',
    setup: 'A popular volcano trail at 2,900 m, 13:00. Afternoon thunderstorms are common; today towers are building over the crater. Your group of four includes one person who is slow, has a headache and says they feel sick. The crater rim is 40 minutes up; the trail down is well marked and passes under a rock band that often sheds stones after rain.',
    question: 'What is the best plan?',
    choices: [
      { id: 'a', text: 'Everyone goes up quickly for a short look at the crater, then down.', why: 'Adds height and time to both problems; the rim is the most exposed point.' },
      { id: 'b', text: 'Turn around now as a group; move the unwell person to the front and watch for worsening symptoms; move quickly but spaced out below the rock band, and don’t linger there if it starts raining.', why: 'Best — converging weather and altitude problems, solved by descending together while managing the rockfall section.' },
      { id: 'c', text: 'Send the unwell person down alone and continue with the others.', why: 'A person with altitude symptoms should not descend alone, and the storm still threatens the rest.' },
      { id: 'd', text: 'Wait under the rock band for the storm to pass.', why: 'Overhangs are bad in lightning, and rock bands shed stones after rain.' },
    ],
    best: 'b',
    debrief: 'Two moderate hazards together — **storm and altitude illness** — call for an early turnaround. Keep the group together, put the unwell person where you can watch them, and manage terrain hazards (rockfall) on the way down.',
    concepts: ['risk', 'human-factors', 'decisions'],
  },
  summary: [
    'When weather and illness converge, turn around early.',
    'AMS: don’t go higher. HACE or HAPE: descend now, together, and call.',
    'Lightning: lose height, avoid summits, ridges, lone features and overhangs; spread out.',
    'Prefer the known, reversible route over the unknown shortcut.',
    'Treat afternoon streams in spate as a hazard; detour to the bridge.',
  ],
  furtherReading: ['freedom-hills', 'nws-lightning', 'mccammon-traps'],
  references: ['freedom-hills', 'nws-lightning', 'nws-flood', 'mccammon-traps', 'wms-org', 'auerbach', 'icar'],
}

const cap6: Lesson = {
  id: 'cap-6',
  stage: 19,
  order: 6,
  title: 'Injured while hiking',
  level: 'expert',
  minutes: 80,
  prerequisites: ['s9-l9'],
  concepts: ['integration', 'immediate-danger', 'phone-use', 'stay-or-move'],
  objectives: [
    'Run a **primary survey** on yourself and manage bleeding and a possible ankle fracture with improvised materials.',
    'Make a **structured emergency call** on a nearly flat battery, and plan scheduled phone checks.',
    'Decide **whether to move** with a lower-limb injury, based on distance, terrain, time and who knows where you are.',
    'Build an **overnight strategy** for an immobile person: ground insulation, wind block, a small safe fire, water and energy.',
  ],
  explanation: [
    {
      type: 'md',
      md: `### Briefing

This is the course brief’s own integrated scenario:

> *You are injured 4 km from your starting point. It is 17:30. Temperature is falling. You have 700 ml of water, a knife, cordage, tarp, lighter, flashlight and phone with 12 % battery. You don’t know your exact location.*

You fell on a rocky detour. Your scalp is bleeding and you cannot bear weight on your left ankle. Sunset is 19:20 and the night will reach about 1 °C. A friend knows your trailhead and expects a text by 20:00.

An injury changes almost every survival calculation. It removes “move” as a cheap option, makes you cold faster (you can’t generate heat by moving), and makes communication and insulation the two actions that decide the outcome.

### What this capstone combines`,
    },
    {
      type: 'table',
      head: ['Decision in the scenario', 'Draws on'],
      rows: [
        ['Scene safety, then life threats', 'Stage 9 — scene safety and the patient assessment system'],
        ['Direct pressure on a scalp wound; watch for head-injury signs', 'Stage 9 — wounds; head, spine, chest'],
        ['Splint in position found; check circulation, sensation, movement', 'Stage 9 — musculoskeletal injuries; Stage 10 — improvisation'],
        ['Structured emergency call with coordinates; scheduled checks', 'Stage 1 — phones; Stage 14 — radio, satellite and beacons'],
        ['Stay; improve position only', 'Stage 9 — evacuation decisions; Stage 14 — stay or move'],
        ['Ground bed + lean-to; small fire on bare soil', 'Stage 5 — tarp configurations; Stage 3 — fire safety'],
        ['Drink and eat; cold not thirst is the threat', 'Stage 4 — water requirements; Stage 8 — hypothermia'],
      ],
      caption: 'An injured person’s survival depends on communication and insulation more than anything else.',
    },
    howToPlay,
    { type: 'sim', id: 'scenario-cap-6', caption: 'Capstone 6: the brief’s scenario, from 17:30 through the night.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'First aid in this scenario is a summary, not training',
      md: 'The injury care here follows current wilderness first-aid practice, but reading it is not the same as being able to do it. Take a hands-on **Wilderness First Aid (WFA)** or **Wilderness First Responder (WFR)** course to learn assessment, bleeding control, splinting and head-injury monitoring properly.',
    },
    {
      type: 'callout',
      tone: 'law',
      title: 'Fire when you are injured',
      md: 'A small fire in a genuine emergency is usually justified where it can be kept safe — but fire bans exist for good reasons. Clear the ground to bare soil, keep the fire small enough to control from where you sit, and never build one you cannot reach to put out.',
    },
  ],
  whyItMatters: 'Lower-leg injuries on descents are among the most common reasons for mountain and wilderness rescue call-outs. Most of those people survive comfortably — because they call early, stay put and keep warm. The minority who try to self-evacuate on a fracture, or who spend their battery and light on the wrong things, turn a rescue into a crisis.',
  examples: [
    {
      type: 'md',
      md: `**Debrief themes**

- **Twelve per cent is one good call.** Say what, where, who and plan; agree a callback; then airplane mode, phone warm inside your jacket.
- **Immobile people get cold.** Everything you would normally do by moving — generating heat, collecting wood — must be done by reaching. Plan the next hours around arm’s length.
- **Self-evacuation is a calculation, not a feeling.** At 0.3–0.5 km/h crawling, 4 km is a whole night.
- **The same logic elsewhere:** a fall on a ski tour, a cycling crash on a remote road, a twisted knee on a coastal path at dusk, an injured climber waiting for a helicopter.`,
    },
  ],
  mistakes: [
    'Getting up to “walk it off” (a myth) before assessing the injury.',
    'Cleaning a bleeding wound before controlling the bleeding, or using drinking water to do it.',
    'Leaving a possible fracture unsplinted, or splinting without checking circulation and sensation before and after.',
    'Using the last battery on maps and messages to friends instead of a structured emergency call.',
    'Trying to crawl out on a possible fracture.',
    'Sitting on bare rock or cold ground with no insulation.',
    'Building a fire too big to control from where you sit.',
    'Rationing water hard on a cold night when cold, not thirst, is the danger.',
  ],
  exercises: [
    {
      id: 'cap-6-e1',
      title: 'Play Capstone 6 — the brief’s scenario',
      level: 4,
      safety: 'virtual-only',
      minutes: 45,
      steps: [
        'Play the scenario once without pausing.',
        'Replay and, at every node, write which of the brief’s ten decision areas it tests (immediate actions, injury, communication, navigation, shelter, water, fire, energy, moving, overnight).',
        'Replay choosing the text to your friend instead of the emergency call and compare the endings.',
      ],
      success: ['You reach the best ending at least once.', 'You can recite your structured emergency call without notes.'],
      skill: 'first-hour',
    },
    {
      id: 'cap-6-e2',
      title: 'Improvised ankle splint and emergency-call rehearsal',
      level: 4,
      safety: 'home',
      minutes: 60,
      materials: ['A training partner (uninjured)', 'A fleece or jacket for padding', 'Two straight sticks or rolled magazines', 'Cordage or triangular bandages', 'Your phone'],
      safetyNote: 'Practise only on an uninjured partner; tie nothing tightly, and check their toes stay warm and pink. This is rehearsal — not a substitute for a hands-on WFA course.',
      steps: [
        'Check your partner’s toes for warmth, colour, feeling and movement.',
        'Pad the ankle and apply the two sticks so the splint immobilises the lower leg and foot, tying above and below the ankle.',
        'Re-check circulation, sensation and movement, and loosen anything that affects them.',
        'Find your phone’s coordinates offline and write them in the format you would read out.',
        'Rehearse a 30-second emergency call aloud: what happened, injuries, location, kit, plan, callback time.',
      ],
      success: ['Splint applied in under 10 minutes, with checks before and after.', 'Emergency call delivered in 30–45 seconds with coordinates.'],
      skill: 'splinting',
    },
  ],
  simulations: ['scenario-cap-6'],
  quiz: [
    {
      id: 'cap-6-q4',
      kind: 'single',
      prompt: 'You can’t bear weight and the bone behind your outer ankle is very tender. Which is the best field care?',
      choices: [
        { id: 'a', text: 'Walk on it gently for a while so the joint does not stiffen.', why: 'A myth — it can displace a fracture.' },
        { id: 'b', text: 'Pad and splint it as found; check circulation and feeling before and after.', why: 'Correct — immobilise above and below the joint and check circulation, sensation and movement.' },
        { id: 'c', text: 'Straighten it and pull on the foot to reset the bone before splinting.', why: 'Only trained people realign limbs, and only for specific reasons such as absent circulation.' },
        { id: 'd', text: 'Soak it in the cold stream for an hour to bring the swelling down.', why: 'Short cold applications help; an hour in cold water at dusk risks hypothermia.' },
      ],
      answer: 'b',
      concepts: ['decisions', 'integration'],
      explanation: 'Inability to bear weight plus bony tenderness suggests a possible fracture. Splint, check CSM, keep warm, and don’t try to walk out.',
    },
    {
      id: 'cap-6-q2',
      kind: 'single',
      prompt: 'You have one emergency call on a 12 % battery. What should you leave OUT of it?',
      choices: [
        { id: 'a', text: 'What happened and what your injuries are', why: 'Include it — it decides which team and equipment are sent.' },
        { id: 'b', text: 'Your best location, landmarks and coordinates', why: 'Include it — trail, distance, landmarks and the phone’s coordinates.' },
        { id: 'c', text: 'Your plan and a time for a callback', why: 'Include it — staying put, how you will signal, then save the battery.' },
        { id: 'd', text: 'A full account of how the day went', why: 'Correct — it wastes battery; keep the call short and structured.' },
      ],
      answer: 'd',
      concepts: ['phone-use', 'signaling'],
      explanation: 'What, where, who, plan, callback. Then airplane mode and keep the phone warm.',
    },
    {
      id: 'cap-6-q1',
      kind: 'single',
      prompt: 'After the fall you have checked for danger such as falling rock. What comes next?',
      choices: [
        { id: 'a', text: 'Check breathing and find and control serious bleeding', why: 'Correct — life threats come straight after scene safety.' },
        { id: 'b', text: 'Assess and splint the ankle, checking the toes', why: 'Important, but only after life threats are ruled out.' },
        { id: 'c', text: 'Make a structured emergency call with location', why: 'The call can move earlier if signal is fleeting, but know what’s wrong before you describe it.' },
        { id: 'd', text: 'Improve your position and protect from the cold', why: 'Protection before dark matters, but it comes last in this sequence.' },
      ],
      answer: 'a',
      concepts: ['priorities', 'immediate-danger'],
      explanation: 'Scene, life threats, then the injury, then help, then protection. The call can move earlier if signal is fleeting — but know what’s wrong before you describe it.',
    },
    {
      id: 'cap-6-q5',
      kind: 'single',
      prompt: 'You have 700 ml of water, rescue is expected within a day, and you are resting through a cold night. What should you do with the water?',
      choices: [
        { id: 'a', text: 'Drink normally at rest; cold, not thirst, is tonight’s threat.', why: 'Correct — mild dehydration impairs heat production and judgment.' },
        { id: 'b', text: 'Save all of it for tomorrow in case the rescue is delayed.', why: 'Water in the bottle doesn’t help you produce heat tonight.' },
        { id: 'c', text: 'Take only a small sip every hour to make it last longer.', why: 'Rationing invites mild dehydration, which impairs heat production and judgment.' },
        { id: 'd', text: 'Drink none tonight, since you need no water while resting.', why: 'Needs at rest in cool weather are modest, but not zero.' },
      ],
      answer: 'a',
      concepts: ['water-needs', 'heat-balance'],
      explanation: 'At rest in cool weather your needs are modest, and mild dehydration impairs heat production and judgment. Cold is tonight’s threat, not thirst.',
    },
    {
      id: 'cap-6-q6',
      kind: 'single',
      prompt: 'Spaced review (Stage 1 signaling): you see torch beams on the slope above you at night. What’s the best signal with a flashlight?',
      choices: [
        { id: 'a', text: 'Keep it on continuously, pointing at them.', why: 'Visible, but a steady light can be mistaken for a searcher’s or a house.' },
        { id: 'b', text: 'Flash it in groups of three, and shout at intervals.', why: 'Correct — three of anything is the distress pattern, and pauses let you hear replies.' },
        { id: 'c', text: 'Wait until they are very close to save the battery.', why: 'They may pass by; signal while they can see you.' },
        { id: 'd', text: 'Crawl toward them with the light on.', why: 'Moving risks the injury and the splint; let them come to you.' },
      ],
      answer: 'b',
      concepts: ['signaling', 'visibility'],
      explanation: 'Groups of three, then listen. Stay put so the team can home in on you.',
    },
    {
      id: 'cap-6-q3',
      kind: 'single',
      prompt: 'Crawling on rough ground, you manage about 0.4 km/h. How long would 4 km take?',
      choices: [
        { id: 'a', text: '1 h', why: 'A decimal slip — ten times too short.' },
        { id: 'b', text: '1.6 h', why: 'That multiplies 4 by 0.4 instead of dividing.' },
        { id: 'c', text: '10 h', why: 'Correct — 4 km ÷ 0.4 km/h.' },
        { id: 'd', text: '0.1 h', why: 'That divides 0.4 by 4 — the ratio is inverted.' },
      ],
      answer: 'c',
      concepts: ['stay-or-move', 'daylight'],
      explanation: '4 km ÷ 0.4 km/h = 10 hours — through the coldest part of the night, sweating and exhausted, moving away from where anyone was told to look.',
    },
  ],
  scenario: {
    id: 'cap-6-sc',
    setup: 'A coastal cliff path, 16:00 in March. Your partner has fallen 2 m onto a grassy ledge beside the path and has a deep cut on the forearm that is bleeding heavily, and a painful wrist. They are conscious and talking. Wind is rising; sunset 18:10. You have a phone with good signal, a small first-aid kit, jackets and a foil blanket.',
    question: 'What do you do first?',
    choices: [
      { id: 'a', text: 'Climb down immediately and help them walk back up to the path.', why: 'Scene safety first — you may fall too, and moving them before assessment can make things worse.' },
      { id: 'b', text: 'Check you can reach them safely; get to them; apply firm direct pressure to the bleeding (and pack/pressure-bandage it); then call the emergency number with location and injuries; then protect them from wind.', why: 'Best — scene safety, life threat, communication, protection.' },
      { id: 'c', text: 'Call the emergency number first and wait at the top for rescuers.', why: 'Calling early is good, but heavy bleeding needs pressure now if you can reach them safely.' },
      { id: 'd', text: 'Apply a tourniquet only as an absolute last resort after an hour of pressure.', why: 'Outdated dogma: if direct pressure and packing can’t control life-threatening limb bleeding, current guidance is to apply a tourniquet early.' },
    ],
    best: 'b',
    debrief: 'The capstone’s order carries over: **scene safety → life threats (bleeding) → communication → protection from cold and wind**. Direct pressure controls most bleeding; if it doesn’t, current guidance supports an early tourniquet for life-threatening limb bleeding. Learn both on a hands-on course.',
    concepts: ['priorities', 'immediate-danger', 'phone-use'],
  },
  summary: [
    'Scene safety, then life threats, then the injury, then help, then protection.',
    'Direct pressure for scalp bleeding; splint a possible fracture and check circulation, sensation and movement.',
    '12 % is one structured call: what, where, who, plan, callback — then airplane mode.',
    'With a lower-limb injury, stay: improve your position only.',
    'Insulate from the ground, block the wind, make a small safe fire, drink and eat.',
    'Take a hands-on wilderness first-aid course.',
  ],
  furtherReading: ['nols-wm-book', 'nols-wm', 'redcross-wrfa'],
  references: ['nols-wm-book', 'wms-org', 'nols-wm', 'solo', 'redcross-wrfa', 'wms-hypothermia-2019', 'koester-lpb', 'smokey-campfire'],
}

export const capLessonsA: Lesson[] = [cap1, cap2, cap3, cap4, cap5, cap6]
