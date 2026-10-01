import type { Lesson } from '../../types'

export const l06: Lesson = {
  id: 's11-l6',
  stage: 11,
  order: 6,
  title: 'Human tracks and search support',
  level: 'advanced',
  minutes: 60,
  prerequisites: ['s11-l3'],
  concepts: ['trk-lkp', 'trk-sign-cutting', 'trk-step-by-step', 'trk-scene-protection', 'clue-awareness', 'trk-search-area', 'lost-person-behavior'],
  objectives: [
    'Explain the role of the **point last seen / last known point** (the initial planning point) in a search, and why it must be **protected**.',
    'Describe **sign cutting** (searching along track traps for a subject’s sign) and **step-by-step tracking**, and what untrained helpers must and must not do.',
    'Show why the search area grows with the **square of elapsed time**, and how a single confirmed direction of travel shrinks it.',
    'Record and report a clue usefully — **what, where, when, which way, how old, why** — and make yourself easier to track by recording your own footwear.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Everything in this stage comes together in **search and rescue (SAR)**. Human tracking is one of several SAR tools — alongside lost-person behaviour statistics, hasty teams, dogs, drones and helicopters — and it is especially valuable early, when the trail is fresh and the search area is still small. In many regions **clue awareness** and basic sign cutting are part of ground-searcher training (for example, NASAR’s SARTECH courses in the USA); advanced man-tracking is a specialist skill taught by experienced SAR trackers.

This lesson is **not** a substitute for that training. It explains how trackers support searches so that you can (1) avoid destroying evidence, (2) report clues usefully, (3) make yourself easier to find, and (4) know what formal training to seek.

### The point last seen and the last known point

Searches are planned from an **initial planning point (IPP)**: either the **point last seen (PLS)** — where a witness last saw the person — or the **last known point (LKP)** — where there is evidence the person was (their car at a trailhead, a summit register entry, a phone ping, a dropped item, a confirmed print). The IPP anchors the statistics of how far lost people typically travel (Stage 2 and Robert Koester’s *Lost Person Behavior*), and it is the best place to find the **first prints** of the subject.

That is why the first rule for everyone arriving at a search is: **protect the IPP.** Crowds of well-meaning friends, family and volunteers trampling the trailhead, the campsite or the car park can destroy the only clear prints of the subject within minutes.

- Keep people, vehicles and dogs away from the IPP and any route leading from it.
- If you must approach, walk to one side, on hard ground, in single file, and say where you walked.
- Tell the search manager what the subject was wearing on their feet — **brand, size, tread** — and whether a spare pair or a photo of the soles exists.`,
    },
    {
      type: 'md',
      md: `### Sign cutting

**Sign cutting** means searching a line or strip of ground specifically for the subject’s sign, to answer one question: **did they cross here?** Searchers cut along natural **track traps** — soft trail edges, stream banks, sandy washes, dusty roads, snow — that anyone passing would have to cross. They can be:

- **around the IPP** in a loop, to find where the subject left it and in which direction;
- **along linear features** (trails, roads, streams, fences) across the likely direction of travel, to confirm or rule out whole sectors;
- **at "confinement" points** — trailheads, bridges, road crossings — often watched or checked repeatedly.

A positive cut gives a **direction and a time bracket** (Lesson 3); a careful **negative** cut along a good track trap is also information — it suggests the subject did not cross there (since the last dated event).`,
    },
    { type: 'diagram', id: 's11-sar-cut', caption: 'The area a person could have reached grows quickly with time. Sign-cutting along track traps, and one confirmed print with a direction, shrink it dramatically.' },
    {
      type: 'md',
      md: `### Step-by-step tracking

When a clear print of the subject is found, trained trackers work the trail **one print at a time** rather than rushing along it. The method, described in classic mantracking manuals, is:

1. **Identify the "prime" print**: draw and measure it — length, width, heel, tread pattern and wear — so you know exactly what you are following.
2. **Measure the step** and mark it on a **tracking stick** (a walking pole or straight stick with bands).
3. Place the stick’s mark at the last print; the next print should be within a small zone near the tip. Search that zone with **low-angle light** (dawn, dusk, or a torch held low) until you find it — even a partial scuff.
4. **Mark** each confirmed print; never move ahead of the last known print; walk **beside** the trail, never on it.
5. When the trail is lost, go back to the last known print and search systematically in widening arcs.

It is slow — metres per minute in poor ground — but it does not lose the trail. Teams combine it with sign cutting ahead (“leapfrogging”) to gain time.`,
    },
    { type: 'diagram', id: 's11-tracking-stick', caption: 'A tracking stick turns “where is the next print?” into a small, searchable zone.' },
    {
      type: 'callout',
      tone: 'warning',
      title: 'If you are not on the search team',
      md: 'Do not self-deploy into a search area — you may destroy sign, confuse dogs, and become a second subject. Report to the incident command post (searches are commonly organised under the Incident Command System), give your information, and do what you are assigned. If you find a clue: **stop, do not touch it, mark the spot, photograph it with a scale, note the time and location (coordinates), and report it by radio or phone.** Stay in your assigned area.',
    },
    {
      type: 'callout',
      tone: 'tip',
      title: 'Make yourself easy to track',
      md: 'Photograph the soles of your boots and your children’s shoes and leave the photos with your trip plan (Stage 1). Some child-safety programmes (e.g. “Hug-a-Tree and Survive”) teach children to leave a footprint on aluminium foil at home for the same reason. If you are lost: stay put where it is safe (Stage 14), and if you must move, leave clear sign — arrows, marks in the ground, a note with the time and direction — and walk where your prints will register.',
    },
  ],
  whyItMatters: 'Early in a search, the subject is close and the trail is fresh; within hours the area to cover can grow to tens of square kilometres. A single protected print at the trailhead, a well-reported clue with a direction and time bracket, or a negative sign cut along a trail can eliminate large parts of that area. Conversely, a trampled trailhead or a well-meaning volunteer rushing off alone can cost hours. What bystanders and volunteers do in the first hour often decides how effectively trained trackers can work.',
  science: [
    {
      type: 'md',
      md: `### Why time matters: area grows with the square of time

If a person could have walked in any direction at up to speed $v$ for time $t$, the area they could be in is a circle of radius $r = v\\,t$:

$$
A = \\pi r^2 = \\pi (v\\,t)^2
$$

In words: **double the time, four times the area.** Real lost people do not walk continuously or in straight lines, so SAR planners use statistical distance rings from lost-person-behaviour data rather than this simple circle — but the square law is why early action matters.

**Worked example (illustrative numbers).** Someone walking at 2 km/h through rough ground:

- after 2 h: $r = 4$ km, $A = \\pi \\times 4^2 \\approx 50$ km²
- after 6 h: $r = 12$ km, $A = \\pi \\times 12^2 \\approx 452$ km²

One confirmed print with a direction of travel (and the terrain constraints of that direction) might limit the likely area to a sector of, say, 60°. A sector of angle $\\theta$ is $\\theta/360°$ of the circle:

$$
A_{sector} = \\frac{60}{360} \\times 50 \\approx 8\\ \\text{km}^2
$$

— a six-fold reduction from one clue, found early.

### Why a stride is predictable

Adult walking step length is fairly regular for a given person, load and terrain, and correlates with height and leg length. That regularity is what makes the tracking stick work: after a few confirmed prints, the next print is almost always within a small zone. It also changes informatively: shorter steps and scuffing suggest fatigue, injury, a heavy load or steeper ground (Lesson 2).`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**Forest trailhead (temperate).** A hiker is overdue. The first deputy on scene tapes off the car and the start of the trail and keeps family members at the car park. A SAR tracker finds the subject’s distinctive lug pattern in the mud 50 m along the trail and a sign cutter confirms the same print at a junction 2 km on, heading toward a lake — the search shrinks to one drainage.

**Desert.** Dirt roads are dragged smooth with tyres or brush early in a search to create fresh track traps; teams check them later for new crossings. Sign lasts hours in calm conditions, minutes in wind.

**Mountain.** Snowfields and patches of soft ground between rock are the track traps; a summit register provides a dated LKP.

**Arctic / subarctic.** A snowfall ending at a known time gives every print a clean bracket; snowmobile tracks at known times act as tyre tracks do in Lesson 3.

**Coast.** Prints below the last high-water line are younger than that tide. A dog walker’s missing companion can be traced along a beach to where prints turn inland — or toward the water, which changes the response immediately.

**Tropical.** Dense vegetation shows little ground sign but lots of disturbed vegetation: broken stems, turned leaves, spider webs broken at human height.

**Urban and rural (dementia, children).** A person with dementia who walked away from home is often found close by, in yards, ditches and vegetation; searchers check nearby track traps (muddy verges, gardens) and dust on paths in buildings. Children often hide from searchers — which is why "hug a tree and answer when called" is taught.`,
    },
  ],
  mistakes: [
    'Rushing to the trailhead, campsite or car with a crowd and trampling the subject’s first prints.',
    'Self-deploying into a search area without reporting to the command post.',
    'Following a trail fast and far, losing it, and never finding it again because no one marked the last known print.',
    'Walking on the trail being followed instead of beside it.',
    'Reporting “found tracks!” without size, tread, direction, age bracket, location and photos.',
    'Assuming any human prints on the route belong to the subject without checking size, tread and age.',
    'Myth: “you must wait 24 hours before reporting someone missing.” Report an overdue person as soon as you are concerned — earlier searches are smaller and more successful.',
  ],
  exercises: [
    {
      id: 's11-l6-e1',
      title: 'Record your own footwear',
      level: 1,
      safety: 'home',
      minutes: 20,
      materials: ['Everyone’s outdoor footwear', 'Phone camera', 'Ruler', 'Aluminium foil (optional)'],
      steps: [
        'Photograph the sole of each pair of outdoor footwear straight down with a ruler beside it.',
        'Optionally step on a folded sheet of foil on a soft carpet to make a print, and photograph it.',
        'Note brand, model and size; store the photos with your trip-plan template (Stage 1) so they can be sent to searchers.',
        'Repeat when you buy new boots.',
      ],
      success: ['A sole photo with scale and size noted for every family member’s outdoor footwear, stored with the trip plan.'],
      skill: 'trip-plan',
    },
    {
      id: 's11-l6-e2',
      title: 'Partner trail: sign cutting and step-by-step',
      level: 3,
      safety: 'outdoor',
      minutes: 120,
      materials: ['A partner', 'Walking pole or straight stick, rubber bands or tape', 'Small flags or biodegradable markers', 'Notebook, phone camera, compass'],
      steps: [
        'Your partner walks a 200 m route off-path across mixed ground (grass, dirt, leaf litter) in known footwear while you wait out of sight; they note the route on a map.',
        'Start at the "IPP": find and record the prime print (sketch, measure, photograph).',
        'Set your tracking stick to their step length and follow print by print, marking each confirmed print. Use low-angle light.',
        'When you lose the trail, return to the last marked print and search in arcs. Also try cutting across the likely direction 50 m ahead along a soft strip.',
        'Compare your marked route with your partner’s map. Collect all markers.',
      ],
      success: ['Followed at least 100 m of trail with marked prints.', 'Recovered the trail at least once from the last known print.', 'All markers collected; no damage to vegetation.'],
      skill: 'trk-sign-cutting',
      safetyNote: 'Practise on legal ground in daylight with a partner and a trip plan; avoid steep ground, water and areas with dangerous wildlife. This is a training game, not search work — join a SAR team for real searches.',
    },
  ],
  simulations: ['tracking-scene'],
  quiz: [
    {
      id: 's11-l6-q1',
      kind: 'single',
      prompt: 'A walker has not returned; their car is at the trailhead. You are the first person there. Relatives want to rush up the trail shouting. What is the most useful thing to do first?',
      choices: [
        { id: 'a', text: 'Lead the relatives up the trail at speed while the sign is fresh', why: 'Understandable, but it tramples the subject’s first prints and risks more people getting lost.' },
        { id: 'b', text: 'Call the emergency number, keep everyone off the trail start, gather details', why: 'Correct — alert, protect the IPP, gather the information searchers need.' },
        { id: 'c', text: 'Drive the nearby roads looking for the walker before calling anyone', why: 'Low value compared with alerting the searchers and protecting the IPP.' },
        { id: 'd', text: 'Wait until the next morning in case the walker comes back on their own', why: 'Delay lets the search area grow with the square of time.' },
      ],
      answer: 'b',
      concepts: ['trk-lkp', 'trk-scene-protection'],
      explanation: 'The IPP holds the best sign: keep people and vehicles away from the car and trail start. Give searchers early, detailed information — time last seen, footwear, clothing, plans, phone number.',
    },
    {
      id: 's11-l6-q6',
      kind: 'single',
      prompt: 'In step-by-step tracking, you lose the trail on hard ground. What do you do?',
      diagram: 's11-tracking-stick',
      choices: [
        { id: 'a', text: 'Guess the direction and walk on until you pick up the trail again', why: 'This is how trails are lost for good — and ground is trampled in the process.' },
        { id: 'b', text: 'Go back to the last marked print and search the likely zone, then arcs', why: 'Correct — never move ahead of the last known print; use the tracking stick and low-angle light.' },
        { id: 'c', text: 'Abandon tracking and call off the search, since the trail is lost', why: 'Losing a trail is normal; recovery methods exist, and other search tactics continue.' },
        { id: 'd', text: 'Ask the whole group to fan out ahead and look for the next print', why: 'An uncoordinated crowd destroys sign; systematic sign cutting ahead is done deliberately by assigned teams.' },
      ],
      answer: 'b',
      concepts: ['trk-step-by-step'],
      explanation: 'The last known print is the anchor: return to it, use the tracking stick and low-angle light, and search the expected zone, then widening arcs. Slow and systematic beats fast and lost.',
    },
    {
      id: 's11-l6-q3',
      kind: 'single',
      prompt: 'You are a searcher and find a possible clue — a candy wrapper beside a boot print on your assigned trail. Which sequence of actions is right?',
      choices: [
        { id: 'a', text: 'Stop; mark and photograph; record details; report by radio', why: 'Correct — preserve, record, report.' },
        { id: 'b', text: 'Report by radio; stop; mark and photograph; record details', why: 'Stopping comes first — keep your feet and hands off the clue before anything else.' },
        { id: 'c', text: 'Bag the wrapper; mark and photograph; record details; report', why: 'Never touch or pick up the clue; the search manager decides what happens to it.' },
        { id: 'd', text: 'Stop; report by radio; walk on; record details at the debrief', why: 'The spot must be marked and recorded on site, or the clue cannot be found and judged again.' },
      ],
      answer: 'a',
      concepts: ['clue-awareness', 'trk-scene-protection'],
      explanation: 'Stop without touching or stepping near it; mark and photograph it with a scale; record time, coordinates, print direction and age bracket; report by radio and follow instructions. The search manager decides what happens next.',
    },
    {
      id: 's11-l6-q4',
      kind: 'single',
      prompt: 'You need to cut for sign across a subject’s likely direction of travel. Which is the **poorest** place to do it?',
      diagram: 's11-sar-cut',
      choices: [
        { id: 'a', text: 'The soft edges of a trail crossing that direction', why: 'A classic track trap.' },
        { id: 'b', text: 'A sandy or muddy stream bank across that line', why: 'A good track trap — soft and linear.' },
        { id: 'c', text: 'A dusty dirt road, perhaps dragged smooth first', why: 'A good track trap — sometimes dragged smooth to create a fresh one.' },
        { id: 'd', text: 'A bare rock slab across the subject’s route', why: 'Correct — little registers on rock, though scuffs and transferred soil can.' },
      ],
      answer: 'd',
      concepts: ['trk-sign-cutting'],
      explanation: 'Track traps are linear, soft features that anyone crossing must mark — trail edges, stream banks, dirt roads, and fresh snow that fell after the subject went missing.',
    },
    {
      id: 's11-l6-q5',
      kind: 'single',
      prompt: 'An adult friend is several hours overdue from a day walk and you are worried. When should you report them missing?',
      choices: [
        { id: 'a', text: 'Now, as soon as you are concerned', why: 'Correct — early searches cover smaller areas with fresher sign.' },
        { id: 'b', text: 'After 24 hours, the waiting period for adults', why: 'A myth: there is no 24-hour wait before reporting an adult missing.' },
        { id: 'c', text: 'Only after you have searched the area yourself', why: 'Searching alone first delays the alert and risks a second missing person.' },
        { id: 'd', text: 'Next morning, if they have still not returned', why: 'Delay lets the search area grow with the square of time.' },
      ],
      answer: 'a',
      concepts: ['trk-search-area', 'trip-plan'],
      explanation: 'There is no rule that you must wait 24 hours. Report an overdue person as soon as you are concerned: early searches cover smaller areas with fresher sign.',
    },
    {
      id: 's11-l6-q2',
      kind: 'single',
      prompt: 'A lost person could walk at up to 2.5 km/h in any direction. Using the simple circle model, what area could they be in after 4 hours? (π ≈ 3.14.)',
      choices: [
        { id: 'a', text: 'About 314 km²', why: 'Correct — r = 10 km, A = π × 10² ≈ 314 km².' },
        { id: 'b', text: 'About 31 km²', why: 'This forgets to square the radius (π × 10).' },
        { id: 'c', text: 'About 63 km²', why: 'This is the circumference formula (2πr), not the area.' },
        { id: 'd', text: 'About 100 km²', why: 'This squares the radius but forgets to multiply by π.' },
      ],
      answer: 'a',
      concepts: ['trk-search-area'],
      explanation: '$r = 2.5 \\times 4 = 10$ km; $A = \\pi r^2 \\approx 314$ km². After 2 hours it would have been about 79 km² — a quarter.',
    },
  ],
  scenario: {
    id: 's11-l6-sc',
    setup: 'You are on a volunteer search team assigned to walk a 2 km trail segment and look for clues. It is 15:30 in autumn; sunset is at 17:45; your team leader expects you back at the road by 17:30. Halfway along you find small trainer prints matching the description of the missing 9-year-old, heading off the trail into a dense, steep gully, on top of mud that dried after this morning’s rain.',
    question: 'What do you do?',
    choices: [
      { id: 'a', text: 'Follow the prints down the gully immediately — the child may be close.', why: 'Leaving your assignment into steep, dense ground late in the day risks the team becoming a second incident, and it tramples the best sign.' },
      { id: 'b', text: 'Stop, mark and photograph the prints with a scale, record coordinates, direction and the age bracket (after this morning’s rain), call your name loudly and listen, then radio the team leader and follow instructions — ready to hold the point or guide a tracking team there.', why: 'Best: preserves the clue, gets it to the people who can act on it, and keeps the search coordinated.' },
      { id: 'c', text: 'Finish walking your segment and mention it at the debrief at 17:30.', why: 'A fresh, directional clue about a missing child is time-critical; reporting it two hours later wastes the best part of the day.' },
      { id: 'd', text: 'Ignore it because many children walk on this trail.', why: 'It matches the description and is after this morning’s rain — report it and let the manager judge.' },
    ],
    best: 'b',
    debrief: 'This is the whole stage in one decision: identification (small trainer, matching description), aging (on top of this morning’s rain), direction (into the gully), and the discipline of reporting within the search structure. Calling and listening costs nothing and may get an answer. The search manager can send trained trackers, dogs or a hasty team — and your daylight budget (Stage 1) and the terrain make a solo descent the wrong move.',
    concepts: ['clue-awareness', 'trk-scene-protection', 'age-bracketing', 'daylight', 'immediate-danger'],
  },
  summary: [
    'Searches start from the **IPP** (point last seen or last known point) — **protect it**; the subject’s first prints are there.',
    '**Sign cutting** checks track traps (trail edges, stream banks, roads, snow) to find where the subject crossed — or did not.',
    '**Step-by-step tracking** with a tracking stick never moves ahead of the last known print.',
    'Search area grows with the **square of time**; one confirmed direction can cut it several-fold.',
    'Report clues with **what, where, when, which way, how old, why**, plus photos with a scale — then follow instructions.',
    'Record your family’s **sole patterns** with the trip plan. Get real training through a SAR team (e.g. NASAR courses, mountain rescue organisations).',
  ],
  furtherReading: ['koester-lpb', 'trk-taylor-cooper-mantracking', 'nasar', 'mra'],
  references: ['koester-lpb', 'trk-taylor-cooper-mantracking', 'nasar', 'mra', 'icar', 'fema-is100', 'adventuresmart', 'trk-cybertracker-cert'],
}
