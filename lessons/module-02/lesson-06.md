---
id: "02.6"
module: 2
minutes: 45
practice_minutes: 120
prerequisites: ["02.2", "02.5"]
objectives:
  - "Keep the map oriented and thumbed so the ground and the map always match."
  - "Plan a route in legs using handrails, collecting features, catching features and attack points."
  - "Use aiming off to hit a point on a linear feature, and size the offset with the 1-in-60 rule."
  - "Choose between rough and precise navigation (“traffic lights”) and use contouring to hold height."
level: intermediate
volatility: concept
sources:
  - title: "International Orienteering Federation"
    url: https://orienteering.sport/
  - title: "British Orienteering — clubs, permanent courses and coaching"
    url: https://www.britishorienteering.org.uk/
  - title: "Orienteering USA — find a club and practice courses"
    url: https://orienteeringusa.org/
  - title: "MapZone map-reading resources"
    url: https://www.ordnancesurvey.co.uk/mapzone
  - title: "Hill and Moorland Leader qualification"
    url: https://www.mountain-training.org/qualifications/walking/hill-and-moorland-leader/
last_verified: "2026-09-27"
---

# 02.6 · Terrain association and handrails

Terrain association is faster, less tiring and more forgiving than pure compass work: a missed count or a small bearing error doesn’t matter when a river tells you exactly where you are. Catching features limit how far a mistake can carry you — which keeps a navigation error from turning into a search.

## Explanation

Compass-and-pacing works, but it is slow and its errors grow (lesson 5). Skilled navigators spend most of their time doing something easier and more robust: **terrain association** — continuously matching what they see to what the map shows. The compass is kept for the parts where the terrain cannot guide you.

### Orient and thumb the map

- **Orient the map**: turn it so north on the map points to north on the ground (use the compass, or line up two features you can see). Then left on the map is left in front of you.
- **Thumb the map**: fold it small and keep your thumb on your current position, moving it as you pass features. You never have to “find yourself” from scratch.

### Build the route out of features

| Feature type | What it does | Examples |
|---|---|---|
| **Handrail** | A linear feature you can follow roughly parallel to your route, with little thinking. | Stream, trail, wall, fence, forest edge, ridge crest, power line, lake shore |
| **Collecting feature** | Something you expect to pass on the way — you “tick it off” to confirm progress. | A stream you cross, a saddle, a path junction, a building |
| **Catching feature** (backstop) | A linear feature *beyond* your target that tells you you have gone too far. | A road, a river, a steep valley side, the edge of a forest |
| **Attack point** | An obvious, easy-to-find feature close to a small target, from which you make a short, precise leg. | A stream junction, a hut, a bend in a trail, a summit cairn |

![Handrail stream leading to an attack point, a short compass leg to the target, and a road beyond as a catching feature](../../assets/diagrams/handrails.svg)

*Follow the stream (handrail) to the junction (attack point); a short compass leg reaches the target; the road beyond is the catching feature.*

### Traffic-light navigation

Not every part of a route needs the same care:

- **Green (rough navigation):** following a strong handrail. Move fast; glance at the map, tick off collecting features.
- **Amber:** approaching a decision — a junction, the end of the handrail. Slow down, check the map, prepare the next bearing.
- **Red (precise navigation):** the last few hundred metres from the attack point to a small target, or any leg without handrails. Compass bearing, pace count, eyes up.

### Aiming off

Suppose you must reach a bridge on a river, walking on a bearing across a forest. Your bearing error means you will hit the river somewhere *near* the bridge — but you won’t know whether to turn left or right. **Aiming off** removes that doubt: deliberately aim a few degrees to **one side** (say, left). When you hit the river, you *know* the bridge is to your right.

![Aiming directly at a river junction versus aiming off to one side](../../assets/diagrams/aiming-off.svg)

*Direct aim: you reach the stream unsure which way to turn. Aiming off: you know the junction lies to your right.*

### Contouring

To cross a hillside to a point at the same height, **contour** — walk around the slope holding your altitude rather than dropping and re-climbing. Watch the slope angle under your feet and glance at an altimeter if you have one. Most people drift **downhill** while contouring, so correct slightly upward.

### Simplify

Before each leg, say it in one sentence: “Follow the wall uphill to the saddle; if I reach the forest edge I’ve gone too far.” If you can’t, the leg is too complicated — break it up.

[Simulation: Navigation Simulator](../../simulations/nav-map/index.html)

Plan a route to the hut using the river as a handrail and the trail as a catching feature. Try aiming off to hit the stream junction.

> [!WARNING]
> **Handrails that are not safe routes**
>
> A stream is an excellent handrail on a map but may be a gorge, waterfall or dense thicket on the ground. Walk *beside* a handrail at a safe distance, never in a streambed that could flood, and never along a cliff edge.

## Scientific and technical background

### How much to aim off

From lesson 4, the **1-in-60 rule**: an angle of 1° produces a sideways offset of about 1/60 of the distance travelled. In words: offset = distance × angle ÷ 60.

$$
x \approx \frac{d\,\theta}{60}
$$

with $x$ and $d$ in the same unit and $\theta$ in degrees (good to within a few percent up to about 20°).

**Worked example.** Aiming off **10°** over **600 m**: $x = 600 \times 10 / 60 = 100$ m. You will meet the stream about 100 m to the aimed side of the target, then walk 100 m along it.

**How big must the offset be?** It must exceed your likely error. If your compass work is good to about ±3°, the error at 600 m is $600 \times 3/60 = 30$ m — so aiming off 5–10° (50–100 m) comfortably clears it. In thick forest with ±5° or worse, aim off more. Too much aim-off only costs extra walking along the handrail, which is cheap.

### Why catching features cap your error

Without a catching feature, an overshoot error is unbounded — you can keep walking. With a road 300 m beyond the target, the *worst* overshoot is 300 m, and you know exactly where you are when you reach it. Good route choice converts open-ended uncertainty into a bounded one.

## Examples

**Temperate forest.** An orienteer uses a forest edge as a handrail, ticks off a path crossing (collecting feature), then uses a boulder field as an attack point for a small pit 150 m away.

**Mountain.** In cloud, a hill walker follows a ridge crest (handrail) to a saddle, then contours at constant height to a col, knowing that the steep crags on the left are a *hazard*, not a catching feature.

**Desert.** A dry wash (wadi) is a natural handrail; a line of power pylons is a strong catching feature across the plain.

**Tropical rainforest.** Visibility may be only 10–20 m, so streams and ridges are almost the only handrails. Aiming off to hit a river upstream of a village means you know to follow it downstream.

**Coastal.** The shoreline is a powerful handrail and catching feature — but check tide times before relying on a beach route.

**Rural farmland.** Walls, hedges and fences make dense networks of handrails; count field boundaries as collecting features.

**Subarctic, winter.** Frozen lakes and treeline edges become handrails — but judge ice from local knowledge and safety guidance, never from the map.

## Common mistakes

- “Bending the map”: forcing what you see to fit where you want to be, e.g., taking any stream as “the” stream.
- Not checking the map at amber points and running past a junction on a fast handrail.
- Aiming directly at a point on a linear feature, then guessing which way to turn.
- Choosing a “catching feature” that is actually a hazard (cliff edge, fast river).
- Drifting downhill while contouring and arriving well below the target.
- Myth: “If you follow any stream downhill you will reach civilisation.” Streams may lead into gorges, waterfalls, swamps or roadless valleys; follow one only as a planned handrail on a map.

## Practical exercises

### Permanent orienteering course

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Go with a partner or tell someone your plan; carry water and a phone.

Level 2 (Simulation) · 🌲 Outdoor · about 90 min

**Materials:** Permanent-course map (from a local orienteering club or park); Baseplate compass; Watch

**Steps**

1. Find a permanent orienteering course through a national body (Orienteering USA, British Orienteering, or your country’s IOF member).
2. Before each control, name the handrail, attack point and catching feature out loud.
3. Orient and thumb the map the whole time; note where you slowed down (amber) and where you went precise (red).
4. On at least two controls, deliberately aim off to a linear feature.

**You have it when**

- All controls found.
- You can explain the plan you used for each leg.
- No leg ended with “I didn’t know which way to turn”.

Builds the skill: Terrain association.

### Map-only route plan

Level 1 (Knowledge) · 🏠 Home · about 30 min

**Materials:** Any 1:25,000 or 1:50,000 topographic map (paper or online)

**Steps**

1. Pick a start and a small target 3–5 km apart.
2. Draw a route in legs; label every handrail, collecting feature, attack point and catching feature.
3. For one leg, calculate an aim-off offset with the 1-in-60 rule.
4. Write each leg as a one-sentence instruction.

**You have it when**

- Every leg has a catching feature or a clear stop condition.
- Aim-off offset calculated correctly.

Builds the skill: Map and compass navigation.

## Scenario question

You need to reach a mountain hut sitting beside a stream, 1.2 km away across a forested hillside. Visibility in the trees is 30 m. A forestry road runs along the valley floor 400 m beyond the hut. It is 15:30; sunset 17:00.

**Which plan is best?**

1. Take a direct bearing to the hut and watch carefully for it through the trees.
2. Aim off ~10° upstream, hit the stream and follow it down; the road catches any overshoot.
3. Walk down to the forestry road first, then look for a path up to the hut.
4. Wait until morning rather than risk the forest in such poor visibility.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Aim-off (1,200 × 10 / 60 = 200 m upstream of the hut) makes the stream a guaranteed hit with a known turn. The road bounds any overshoot. With 1.2 km and 90 minutes of daylight, the plan fits the daylight budget with margin — the kind of cross-check Stage 1 taught.

- **1.** With ±3–5° error in forest you could miss by 60–100 m and walk past a hut you can’t see.
- **2.** Best — aiming off gives a certain turn direction, the stream is a handrail and the road is a catching feature.
- **3.** Workable but slower, loses height, and assumes a path exists.
- **4.** Premature — 90 minutes of light and a robust plan are enough for 1.2 km.

</details>

## Summary

- Orient and thumb the map so the ground and the map always match.
- Build routes from handrails, collecting features, attack points and catching features.
- Aim off to one side of a target on a linear feature; offset ≈ distance × angle ÷ 60.
- Go fast on handrails (green), precise near the target (red); contour to hold height and correct for downhill drift.
- Believe the ground over your hopes — never bend the map.

## Further reading

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- [British Orienteering — clubs, permanent courses and coaching](https://www.britishorienteering.org.uk/).
- [Orienteering USA — find a club and practice courses](https://orienteeringusa.org/).

## References

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- [International Orienteering Federation](https://orienteering.sport/).
- [British Orienteering — clubs, permanent courses and coaching](https://www.britishorienteering.org.uk/).
- [Orienteering USA — find a club and practice courses](https://orienteeringusa.org/).
- Ordnance Survey. [MapZone map-reading resources](https://www.ordnancesurvey.co.uk/mapzone).
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- Mountain Training (UK). [Hill and Moorland Leader qualification](https://www.mountain-training.org/qualifications/walking/hill-and-moorland-leader/). Train → consolidate (logged days) → assess: the model for this course’s practice logs.
