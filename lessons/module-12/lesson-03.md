---
id: "12.3"
module: 12
minutes: 60
practice_minutes: 70
prerequisites: ["12.2", "02.2"]
objectives:
  - "Read a map for catchments and explain why a storm you cannot see can flood the place you are standing."
  - "Estimate peak flow with the rational method and the drag force of moving water ($\\propto v^2$)."
  - "Apply the NWS rules of thumb (15 cm knocks an adult down, 30 cm floats most cars) and \"Turn Around, Don’t Drown\"."
  - "Decide when not to cross a river, and choose safer times and places when a crossing is unavoidable."
  - "Choose camps and routes that stay safe when water rises."
level: advanced
volatility: concept
sources:
  - title: "Flood Safety — Turn Around, Don’t Drown"
    url: https://www.weather.gov/safety/flood
  - title: "Turn Around Don’t Drown"
    url: https://www.weather.gov/safety/flood-turn-around-dont-drown
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
  - title: "Cold Water Boot Camp — the 1-10-1 principle"
    url: https://www.coldwaterbootcamp.com/pages/1_10_60v2.html
last_verified: "2026-09-27"
---

# 12.3 · Flash floods and water crossings

Flash floods and river crossings kill people who never saw rain: hikers in slot canyons under blue sky, drivers on a familiar road, trekkers crossing a glacial river in the afternoon. Every one of these is a decision made minutes or hours before, and every one can be changed with the right trigger.

## Explanation

Moving water is one of the most underestimated outdoor hazards. It looks slow, it looks shallow, and people step in. Rivers and floods kill experienced hikers, and floodwater kills many drivers who "had driven through it before".

### Catchments: why the flood comes from somewhere else

A **catchment** (watershed, drainage basin) is all the land that drains to a given point. Its boundary follows the ridgelines, which you can trace on a topographic map (Stage 2). **Every drop that falls anywhere in the catchment ends up passing your point**, and it may arrive hours later.

A **flash flood** is a rapid rise of water within minutes to a few hours of heavy rain, a dam or ice-jam failure, or a debris dam giving way. It is worst where:

- **Rain is intense** (thunderstorms, Lesson 2), often far upstream and out of sight.
- **Ground sheds water fast:** bare rock, thin or crusted desert soils, frozen or saturated ground, **burn scars** (Lesson 5), pavement.
- **Slopes are steep and channels narrow**, so the water has nowhere to spread. Slot canyons, gorges and dry washes are the extreme case.

![A storm over the upper catchment sends a flash flood down a canyon where the sky is clear; inset hydrograph shows the delayed sharp rise](../../assets/diagrams/catchment-flash-flood.svg)

*Sunshine where you stand says nothing about the catchment. The flood arrives as a steep, sudden rise, sometimes as a wall of debris-laden water.*

### Warning signs

- Thunderstorms or dark cloud **anywhere over the catchment**, or a flash-flood watch or warning.
- Water **rising, turning muddy**, carrying sticks, leaves and foam.
- A growing **roar** or rumble upstream, or rocks knocking together.
- A sudden change in flow, including a sudden *drop*, which can mean debris has dammed the channel upstream and may release.

**Response:** climb **up and out, immediately**, to ground well above the high-water marks, even if that means leaving gear behind. Do not try to outrun the water down the channel.

### The force of moving water

Moving water pushes on you with a force that grows with the **square of its speed**, so doubling the speed quadruples the force. It also **buoys you up**, which takes weight off your feet exactly when you need grip. That is why the NWS rules of thumb look so small:

| Depth of **moving** water | NWS rule of thumb |
|---|---|
| **~15 cm (6 in)** | Can knock over an adult |
| **~30 cm (12 in)** | Can carry away most cars |
| **~60 cm (2 ft)** | Can carry away SUVs and trucks |

**Turn Around, Don’t Drown.** Never walk or drive into floodwater. You cannot see the depth, the speed, or whether the road underneath has been washed away.

![Drag force on a wader’s legs grows with the square of water velocity; above about 2 metres per second it exceeds the grip of feet on a slippery bed](../../assets/diagrams/water-force-chart.svg)

*Drag on a wader’s legs versus water speed. Around 2 m/s, a brisk walking pace, the push already exceeds the grip of feet on a slippery bed.*

### River crossings: when **not** to cross

A planned route that "crosses the river" is a decision point, not a formality. **Do not cross** if any of these is true:

- The water is **fast and above knee depth**, or you **cannot see the bottom**.
- The river is **rising, muddy, or carrying debris**, or it is raining or storming upstream.
- There are **hazards downstream** within the distance you could be swept: rapids, waterfalls, **strainers** (fallen trees and log jams that let water through but hold a person under), undercut banks, or cold, deep pools.
- The water is **very cold** (snowmelt or glacial). Cold shock and swimming failure follow within minutes (Stage 8).
- You are **alone**, tired, or the group lacks training and a rescue plan.

**Options that are almost always better:**

- **Wait.** Flash floods usually fall within hours. Snowmelt and glacial rivers peak in the **late afternoon** and are lowest in the **early morning**.
- **Go around:** a bridge, the headwaters above tributary junctions, or a lake outlet.
- **Choose a wider, braided section.** When the same water spreads out, it is shallower and slower.
- **Turn back.** Rivers are a common place for turnaround times to be tested.

### If a crossing is unavoidable: principles only

Crossing technique (facing upstream, using a pole as a third point of contact, group methods, pack straps) is taught on **supervised courses**. Tactics vary with the river, and ropes in moving water can trap and drown people. The key principles are these: scout from the bank, choose the crossing point and a *run-out* (where you would wash up) *before* you step in, cross at an angle downstream, and keep the group together with a spotter downstream. **Any practice should be in calm, shallow, supervised water, or virtual.**

> [!CAUTION]
> **Safety boundary**
>
> Do not practise crossings in fast, deep, cold or rising water. Swiftwater rescue is a specialist discipline (formal training). In this course, crossings are assessed **from the bank** and decided in scenarios and simulations.

### Flooding more broadly

- **River floods** build over hours to days from widespread rain, **rain-on-snow** or snowmelt. Streams may rise overnight.
- **Coastal flooding:** storm surge plus high tide plus waves. Check tide tables before beach and headland walks.
- **Urban flooding:** underpasses, low roads and basements fill fast, and manhole covers can lift.
- **Campsites:** camp well above the **high-water marks**. Look for debris lines, flood trash lodged in branches and scoured banks. Never camp in a dry wash or on a gravel bar, and know your route *up* in the dark.

## Scientific and technical background

### How much water? The rational method

Engineers estimate the peak flow from a small catchment with

$$
Q = 0.278\; C\, i\, A
$$

In words: **peak flow = runoff fraction × rain intensity × area**, with a constant that makes the units work. $Q$ is in m³/s, $C$ is the fraction of rain that runs off (0.1–0.3 for forest soils, 0.5–0.9 for bare rock, pavement or burn scars), $i$ is rain intensity in mm/h, and $A$ is area in km².

**Example:** a 25 km² desert catchment of bare rock ($C = 0.6$) under a thunderstorm dropping 40 mm/h:

$$
Q = 0.278 \times 0.6 \times 40 \times 25 \approx 167\ \text{m}^3/\text{s}
$$

Push that through a slot canyon 5 m wide at 4 m/s and the depth is $167 / (5 \times 4) \approx 8$ m. That is the arithmetic behind "walls of water".

### Drag and grip

Water pushing on your legs exerts a drag force

$$
F = \tfrac{1}{2}\,\rho\, C_d\, A\, v^2
$$

In words: **half × water density × a shape factor × the area facing the flow × speed squared.** With $\rho = 1000$ kg/m³, $C_d \approx 1$, and knee-deep water on both legs ($A \approx 0.15$ m²):

- $v = 1$ m/s → $F \approx 75$ N
- $v = 2$ m/s → $F \approx 300$ N
- $v = 3$ m/s → $F \approx 675$ N

Your resistance is friction, roughly $\mu$ times your *effective* weight (weight minus buoyancy). A 75 kg person weighs about 736 N. Thigh-deep, the water displaced by the legs might lift ~200 N, leaving ~540 N pressing the feet down. On algae-covered rock ($\mu \approx 0.4$) that gives about **215 N of grip**. At 2 m/s the push (300 N) already exceeds it. **Deeper water increases the push and reduces the grip at the same time**, which is why the danger rises so steeply.

**Estimating speed from the bank:** time a floating stick over a paced 10 m. 5 s means 2 m/s. The surface is usually faster than the average flow, but the centre of the channel is faster still.

## Examples

**Desert slot canyon (Colorado Plateau, Middle East, Australian outback).** The forecast calls for isolated storms 30 km away over the plateau that drains into your canyon. It is a no-go even under blue sky: the catchment, not the local sky, sets the risk.

**Mountain / glacial river (Alaska, New Zealand, Himalaya).** A braided glacial river at 07:00 is thigh-deep in its channels. By 16:00, after a warm sunny day, it is waist-deep and grey. Plan crossings for early morning, or wait.

**Temperate forest.** After a night of rain, a creek you rock-hopped yesterday is brown and roaring. There is a bridge 3 km upstream. The detour costs an hour; the crossing could cost a life.

**Tropical.** Afternoon downpours raise jungle rivers within an hour. Camp high on the bank, not on the sand bar, and cross in the morning.

**Urban / rural roads.** A dip in a country road is covered by 25 cm of moving water. It is enough to float many cars, and the road beneath may be gone. Turn around.

**Coastal.** A beach walk around a headland at a rising tide with an onshore storm. Surge and waves can trap you against cliffs. Time it by the tide tables, with margin.

## Common mistakes

- Judging flood risk by the sky overhead instead of the whole catchment.
- Camping in a dry wash, on a gravel bar or just above the waterline because it is flat and sandy.
- Myth: "It’s only ankle-to-knee deep, so it can’t hurt me." Speed matters more than depth, and force rises with speed squared.
- Driving into flooded roads. A large share of flood deaths happen in vehicles driven into water.
- Crossing glacial or snowmelt rivers in the afternoon instead of waiting for the morning low.
- Tying people to a rope in moving water without swiftwater training. Ropes can pin people underwater.
- Trying to outrun a flash flood down the channel instead of climbing straight up and out.

## Practical exercises

### Map a catchment

Level 2 (Simulation) · 🏠 Home · about 30 min

**Materials:** A topographic map (paper or online) of a canyon, gorge or valley route

**Steps**

1. Pick a point on the route in a narrow channel.
2. Trace the catchment boundary along ridgelines until it closes.
3. Estimate its area in km² using the grid.
4. Use the rational method with $C = 0.5$ and $i = 30$ mm/h to estimate a peak flow.
5. Mark the escape points (places you can climb above flood level) and the no-go conditions for this route.

**You have it when**

- Your boundary follows ridgelines and closes on the chosen point.
- You have written at least two specific no-go triggers (e.g., "any thunderstorm forecast over the catchment").

Builds the skill: Hazard go/no-go triggers.

### Assess a crossing — from the bank only

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Do not enter the water. Stay away from undercut banks and slippery rocks at the edge. Do not do this during high flow or floods.

Level 3 (Safe physical) · 🌲 Outdoor · about 40 min

**Materials:** A stick or leaf to float; Watch; Notebook

**Steps**

1. At a local stream or river, stay on the dry bank well back from the edge.
2. Estimate the speed: time a floating stick over a paced 10 m.
3. Estimate the depth from visible features only (rocks, the bottom, marker posts). Do not wade in.
4. Look downstream for strainers, rapids, drops and deep pools, and upstream for signs of rising water.
5. Write your go/no-go decision and the alternatives (wait, detour, turn back).

**You have it when**

- You produced a speed estimate in m/s and a clear go/no-go decision with reasons.
- You identified at least one downstream hazard or confirmed there were none.

Builds the skill: River-crossing assessment from the bank.

## Scenario question

Trekking in a remote valley. At 14:00 you reach a glacial river that was thigh-deep and fast when another party crossed it this morning. Now it is grey, loud and you can hear boulders rolling. The map shows a footbridge 7 km upstream (about 3 hours). Your group is tired and camp is on the far side. Sunset is at 19:30.

**What is the best decision?**

1. Cross now while it is still light, linked arm in arm.
2. Camp on this side on high ground well above the flood marks, and reassess at dawn when meltwater is lowest.
3. Walk to the bridge now, arriving around 17:00 and continuing to camp by headlamp.
4. Cross where it is widest, alone first, to test it.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Glacial rivers peak in the afternoon and drop overnight. Waiting is a powerful, underused option. Choose the **reversible** action (Stage 1): a night on the wrong side can be undone, a swim in a glacial torrent cannot. If waiting were impossible, the bridge detour (c) would be next best.

- **1.** Rolling boulders and a daily meltwater peak make this a no-go. Group technique does not overcome the physics.
- **2.** Best: the river will likely be lower in the early morning. The cost is one night on the wrong side. That is reversible; a failed crossing is not.
- **3.** Reasonable, but tired walking into darkness adds risk. Better than crossing, worse than waiting unless you must be on the other side tonight.
- **4.** A lone test crossing in a no-go river puts one person at maximum risk without a rescue plan.

</details>

## Summary

- A catchment funnels all its rain to one point. Storms you cannot see cause flash floods where you stand.
- Peak flow ≈ 0.278·C·i·A. Bare rock, burn scars, frozen or saturated ground and narrow channels make it worse.
- Water force ∝ v². Depth adds push and removes grip. ~15 cm of fast water knocks adults over; ~30 cm floats cars. Turn Around, Don’t Drown.
- Don’t cross fast water above the knee, rising or muddy water, water with hazards downstream, or cold meltwater. Wait, detour or turn back.
- Crossing technique is learned on supervised courses; practise only in calm, shallow, supervised water, or virtually.

## Further reading

- US National Weather Service. [Flood Safety — Turn Around, Don’t Drown](https://www.weather.gov/safety/flood).
- US National Weather Service. [Turn Around Don’t Drown](https://www.weather.gov/safety/flood-turn-around-dont-drown). 6 in of fast water can knock over an adult; 12 in can carry away most cars; 2 ft SUVs and trucks.
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.

## References

- US National Weather Service. [Flood Safety — Turn Around, Don’t Drown](https://www.weather.gov/safety/flood).
- US National Weather Service. [Turn Around Don’t Drown](https://www.weather.gov/safety/flood-turn-around-dont-drown). 6 in of fast water can knock over an adult; 12 in can carry away most cars; 2 ft SUVs and trucks.
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- Gordon Giesbrecht. [Cold Water Boot Camp — the 1-10-1 principle](https://www.coldwaterbootcamp.com/pages/1_10_60v2.html).
