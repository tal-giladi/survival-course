---
id: "02.4"
module: 2
minutes: 50
practice_minutes: 90
prerequisites: ["02.3"]
objectives:
  - "Take a bearing from the map and walk it on the ground in three steps, including declination."
  - "Take a bearing from the ground and plot it on the map."
  - "Compute and use back bearings (±180°) to check your line and retrace it."
  - "Walk a bearing accurately using intermediate objects and leapfrogging."
  - "Estimate lateral miss with the 1-in-60 rule and decide how accurate a leg needs to be."
level: intermediate
volatility: concept
sources:
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
  - title: "Magnetic Field Calculators (declination)"
    url: https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml
  - title: "International Orienteering Federation"
    url: https://orienteering.sport/
  - title: "Hill and Moorland Leader qualification"
    url: https://www.mountain-training.org/qualifications/walking/hill-and-moorland-leader/
  - title: "Orienteering USA — find a club and practice courses"
    url: https://orienteeringusa.org/
  - title: "British Orienteering — clubs, permanent courses and coaching"
    url: https://www.britishorienteering.org.uk/
last_verified: "2026-09-27"
---

# 02.4 · Bearings and azimuths

Bearings let you travel when you cannot see where you are going: fog, forest, darkness, snow. They also turn the landscape into position fixes. Understanding how angular error scales with distance tells you when a bearing is enough on its own and when you need a handrail, a catching feature or shorter legs.

## Explanation

A **bearing** (in North America often called an **azimuth**) is a direction measured **clockwise from north**, 000° to 360°. East is 090°, south 180°, west 270°. Always say three digits — “zero four five”, not “forty-five” — so a mis-heard figure is less likely.

### Map to ground: three steps

1. **Edge on the route.** Lay one long edge of the baseplate along the line from where you are to where you want to go, with the **direction-of-travel arrow pointing toward the destination**. (Ignore the needle.)
2. **Lines to grid north.** Turn the **housing** until the orienting lines are parallel to the map’s north–south grid lines, with the orienting arrow pointing to the **top of the map** (grid north). Read the grid bearing at the index line.
3. **Correct and follow.** Convert grid → magnetic by rotating the housing by the declination (in this stage’s simulator: 8° W, so **add 8°**). Take the compass off the map, hold it flat in front of you, and **turn your whole body** until the red needle sits inside the orienting arrow — **“red in the shed”**. The direction-of-travel arrow now points along your route.

The most common error in step 2 is having the orienting arrow point to the **bottom** of the map: the lines are parallel, but the bearing is 180° wrong. Sense-check against the map: if the destination is roughly east, the bearing should be roughly 090°.

![Three steps to take a bearing from the map and follow it](../../assets/diagrams/bearing-steps.svg)

*Map to ground: (1) edge on route, arrow to target; (2) orienting lines parallel to grid north lines, arrow to the top of the map; (3) add declination, red in the shed, walk.*

### Ground to map

1. Point the direction-of-travel arrow at a distinct object (a summit, a mast, a lake outlet).
2. Turn the housing until **red is in the shed**. Read the **magnetic** bearing.
3. Convert magnetic → grid (8° W: **subtract 8°**).
4. On the map, put one edge of the baseplate through the object’s symbol and turn the **whole compass** (not the housing) until the orienting lines are parallel to the grid lines, arrow to the top of the map. The edge now lies along the line from the object toward you — you are somewhere on that line. Two or three such lines cross at your position (resection, lesson 7).

### Back bearings

The **back bearing** is the opposite direction: add 180° if the bearing is less than 180°, otherwise subtract 180°. 065° → 245°; 290° → 110°. Uses:

- **Retracing** your route to the last known point.
- **Checking your line**: turn around and sight back at where you started; if your start point is not on the back bearing, you have drifted to one side.
- Sighting an object behind you when the one ahead is hidden.

![Forward bearing 065 degrees and back bearing 245 degrees](../../assets/diagrams/back-bearing.svg)

*Forward bearing 065°, back bearing 245°. Sighting back to the start reveals sideways drift.*

### Walking a bearing

Nobody walks straight by watching a needle. Instead:

- **Sight and walk.** With red in the shed, look along the direction-of-travel arrow and pick a distinct **intermediate object** on the line — a tree, a boulder, a patch of snow. Put the compass down, walk to it, repeat. You steer by objects, not by the needle.
- **Leapfrog in poor visibility.** In fog, darkness or white-out, send a partner ahead to the edge of visibility; direct them left or right onto the line, walk to them, repeat. Tighter, but slow.
- **Obstacles.** Box around them: turn 90°, count paces, walk past on the original bearing, turn back 90° for the same pace count. Or sight an object on the far side of the obstacle on your bearing, then walk round to it by any route.
- **Know how accurate you need to be.** A bridge 20 m wide at 2 km needs a much tighter line than a 1 km-long river. When the target is small, aim off or use a catching feature (lesson 6).

![Lateral error from a heading error of 1, 5 and 10 degrees over 1 to 3 kilometres](../../assets/diagrams/one-in-sixty.svg)

*Lateral miss grows with distance: about 17 m per kilometre for every degree of error.*

> [!NOTE]
> **Where the error comes from**
>
> A good baseplate compass read carefully gives about **±2°**; a quick glance while moving, **±5° or worse**. Add errors from plotting the bearing on the map, reading the needle off level, local magnetic deviation and unconsciously drifting downhill or around vegetation. They combine — and, per the 1-in-60 rule, grow linearly with distance.

[Simulation: Navigation Simulator](../../simulations/nav-map/index.html)

Plan a route, measure each leg’s grid bearing, add 8° for declination and walk it. Watch how heading and pacing errors add up — then try aiming off at the river.

## Scientific and technical background

### The 1-in-60 rule

If your heading is wrong by an angle $\theta$, the sideways miss after distance $d$ is exactly

$$
x = d \tan\theta
$$

For small angles, $\tan\theta \approx \theta$ in radians, and one radian is about 57.3° — close enough to **60** for mental arithmetic. So:

$$
x \approx d \times \frac{\theta^\circ}{60}
$$

In words: **every degree of error puts you about 1/60 of the distance to the side.** Worked numbers:

| Error | Distance | 1-in-60 estimate | Exact $d\tan\theta$ |
|---|---|---|---|
| 1° | 1 km | $1000 / 60 \approx 17$ m | 17.5 m |
| 2° | 1 km | ≈33 m | 34.9 m |
| 5° | 2 km | $2000 \times 5/60 \approx 167$ m | 175 m |
| 10° | 1 km | ≈167 m | 176 m |
| 20° | 3 km | 1,000 m | 1,092 m |

The rule is excellent below about 10° and slightly underestimates beyond that (because 60 > 57.3 and because $\tan\theta$ grows faster than $\theta$). It also runs backwards: if you drifted 50 m off line over 1.5 km, your heading error was about $50 \times 60 / 1500 = 2^\circ$.

### Mils

Many military compasses use **mils**: NATO divides the circle into **6,400 mils** (so 1° ≈ 17.8 mils). One mil subtends almost exactly **1 m at 1 km** (0.98 m), which makes lateral error arithmetic trivial: 10 mils off over 2 km ≈ 20 m. Know which unit your compass uses before you set a bearing.

### Combining errors

Independent random errors combine roughly as the square root of the sum of squares. A ±2° reading error plus ±2° from plotting gives about $\sqrt{2^2+2^2} \approx 2.8^\circ$ — at 2 km, $2000 \times 2.8/60 \approx 95$ m either side. A systematic error such as forgotten declination does not average out: it adds the full amount on every leg.

## Examples

**Mountain in fog.** A group descends from a summit to a col 800 m away on a bearing of 212° magnetic, leapfrogging a partner 30 m ahead. At the col the ground rises on both sides — confirmation by landform, not just by bearing.

**Forest.** Visibility 30–50 m under canopy. The navigator sights on trees two or three ahead and walks to each, checking the back bearing to the last tree every few hundred metres.

**Desert.** Open ground makes objects far away look close, and there may be few distinct ones. A walker picks a distant rock outcrop on the bearing and walks to it — a long leg with few chances to drift, but checks the back bearing to the vehicle before losing sight of it.

**Arctic / subarctic white-out.** No contrast, no intermediate objects. Partners rope together or leapfrog at a few metres; some teams walk on a bearing behind a leader held on line by the navigator at the back.

**Tropical.** Dense vegetation forces constant detours around trunks and vines. Navigators box around obstacles and accept shorter legs, re-fixing at every stream or ridge.

**Coastal.** From a headland, a bearing to a lighthouse, plotted as a back bearing on the map, gives a line of position — the same idea sailors use.

**Rural.** Field boundaries often run on compass-straight lines. A walker compares the bearing of a hedge with the map to confirm which field they are in.

## Common mistakes

- Orienting arrow pointing to the bottom of the map in step 2 — the bearing is 180° out. Sense-check against the map.
- Rotating the whole compass instead of the housing when taking a bearing from the map, or the housing instead of the compass when plotting.
- Forgetting the declination, or applying it the wrong way (lesson 3).
- Walking while staring at the needle instead of steering by intermediate objects.
- Following the needle’s white (south) end — “red in the shed”, not white.
- Assuming a bearing alone will hit a small target far away; the 1-in-60 rule says it will not.
- Myth: “If you walk a bearing carefully you will arrive exactly on target.” Every leg has error; plan for it with catching features and aiming off.

## Practical exercises

### Map bearings at the kitchen table

Level 2 (Simulation) · 🏠 Home · about 30 min

**Materials:** Topographic map; Baseplate compass; Protractor (to check)

**Steps**

1. Mark 6 pairs of features on the map. For each pair, take the grid bearing with the compass (steps 1–2), then check it with a protractor.
2. Convert each to magnetic for the map’s current declination, and write the back bearing.
3. Estimate the lateral miss for a 3° error over each leg with the 1-in-60 rule.

**You have it when**

- Compass and protractor agree within 2° on every leg.
- All conversions and back bearings correct.

Builds the skill: Map and compass navigation.

### Park bearing loop

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> A public open space in daylight with a partner. Keep the compass away from phones and parked cars.

Level 3 (Safe physical) · 🌲 Outdoor · about 60 min

**Materials:** Baseplate compass; 4 small markers (e.g. clothes pegs); A partner; Open park or playing field

**Steps**

1. Place a marker at the start. Walk 50 paces on 060° magnetic, then 50 paces on 180°, then 50 paces on 300° — an equilateral triangle.
2. Steer by intermediate objects, not the needle. Mark where you finish.
3. Measure how far the finish is from the start. Repeat, then try a square (000°, 090°, 180°, 270°).
4. At each corner, sight the back bearing to the previous corner and note any drift.
5. Finally, try the nav-map simulation for the same idea at wilderness scale.

**You have it when**

- Finish within 5 m of the start on the triangle.
- You can say which way you tend to drift.

Builds the skill: Map and compass navigation.

## Scenario question

You are crossing open moorland toward a mountain hut 3 km away on a bearing of 245° magnetic. Visibility has dropped to 50 m in cloud. It is 16:10 and sunset is 17:05. After 2 km you reach a stream that the map shows 200 m before the hut, running north–south. You cannot see the hut. You know you have been reading the compass on the move for the last kilometre.

**What should you do?**

1. Keep going on 245° — the hut must be just ahead, somewhere beyond this stream.
2. STOP: use the stream as a handrail, estimate your drift, and decide by 16:30 to go on or camp.
3. Turn around and follow the back bearing (065°) for 2 km to the start before dark.
4. Split up to search both directions along the stream, so you find the hut faster.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** The distance mismatch is the clue: either your pacing is off, or you are on a different stream — perhaps because on-the-move readings let you drift (5° over 2 km ≈ 170 m). A linear feature is a gift: it lets you relocate by following it while you check landforms. The Stage 1 tools still apply — STOP, a daylight budget with a fixed decision time, and keeping the group together.

- **1.** You have walked only 2 km of a 3 km leg yet reached a stream the map puts 2.8 km along; your position is uncertain, and ploughing on in fading light compounds the problem.
- **2.** Best: recognises the mismatch, uses a linear feature to relocate, and sets a daylight-based decision point.
- **3.** Reversible, but 2 km back across moor in 55 minutes of light, in cloud, with the same error sources, may leave you in the dark on open ground anyway.
- **4.** Splitting in cloud and failing light turns one problem into two lost parties.

</details>

## Summary

- Map to ground: edge on route, orienting lines to grid north, correct declination, red in the shed, walk.
- Ground to map: sight, red in the shed, convert magnetic → grid, plot a line through the object.
- Back bearing = bearing ± 180°. Use it to retrace and to check drift.
- Walk by intermediate objects or leapfrogging, never by staring at the needle.
- 1-in-60 rule: miss ≈ distance × error° ÷ 60 — about 17 m per degree per km. Exact: $d\tan\theta$.

## Further reading

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- [Orienteering USA — find a club and practice courses](https://orienteeringusa.org/).
- [British Orienteering — clubs, permanent courses and coaching](https://www.britishorienteering.org.uk/).

## References

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- US Army. *TC 3-25.26 Map Reading and Land Navigation*. 2013. Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- NOAA NCEI. [Magnetic Field Calculators (declination)](https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml).
- [International Orienteering Federation](https://orienteering.sport/).
- Mountain Training (UK). [Hill and Moorland Leader qualification](https://www.mountain-training.org/qualifications/walking/hill-and-moorland-leader/). Train → consolidate (logged days) → assess: the model for this course’s practice logs.
