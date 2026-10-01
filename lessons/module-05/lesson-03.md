---
id: "05.3"
module: 5
minutes: 40
practice_minutes: 120
prerequisites: ["05.1"]
objectives:
  - "Choose between A-frame, lean-to, diamond and wedge pitches for a given wind, rain, fire and time situation."
  - "Pitch for wind: orientation, height, tension order and anchors."
  - "Use $F = \\tfrac12\\rho C_d A v^2$ and $T \\approx PL/(4s)$ to explain why low pitches survive storms and drum-tight ridgelines break."
  - "Prevent the common water failures: pooling, wicking along lines and splash."
level: intermediate
volatility: concept
sources:
  - title: "IOL Bushcraft Competency Award / Certificate / Diploma"
    url: https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
  - title: "Animated Knots"
    url: https://www.animatedknots.com/
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
  - title: "The Seven Principles of Leave No Trace"
    url: https://lnt.org/why/7-principles/
last_verified: "2026-09-27"
---

# 05.3 · Tarp configurations

Most tarp failures in storms are not fabric failures. They are orientation, height, tension and anchor failures: a lean-to open to the rain, a high A-frame that flogs itself apart, a drum-tight ridgeline that snaps, a stake pulled from soft ground at 2 a.m. Knowing the forces lets you pitch for the storm you will get, not the evening you see.

## Explanation

A single tarp of about 3 × 3 m with a dozen tie-out points and 15–20 m of cord is the most versatile shelter you can carry. Its weakness is also its strength: it has no fixed shape, so **you** decide how it meets the weather.

### Four core pitches

![Four tarp pitches: A-frame, lean-to, diamond and wedge, each shown relative to the wind](../../assets/diagrams/tarp-pitches.svg)

*Four core pitches and how each meets the wind.*

| Pitch | Strengths | Weaknesses | Use it when… |
| --- | --- | --- | --- |
| **A-frame** | Rain protection on both sides; symmetric, forgiving if the wind swings 90°; easy | Open ends funnel wind if aligned with it; needs two anchors for the ridgeline | Rain with variable wind; the default |
| **Lean-to** | Fastest; huge open side for a fire’s radiant heat; good view out | Wind or rain on the open side goes straight in; big volume; big sail area | Steady wind from one side, dry-ish night, fire allowed |
| **Diamond** (flying diamond) | One corner low into the wind, one high: sheds wind well, quick with one tree or pole | Small protected floor; exposed if the wind shifts | Solo, quick, one anchor available |
| **Wedge** (closed low end) | Low, closed end into the wind; very storm-worthy; small volume | Less headroom and floor; needs care in setup | Strong wind from a known direction, rain, cold |

### Pitching in wind

1. **Decide the worst wind of the night** (forecast, cloud movement, terrain) and orient for it — the closed or low side faces it.
2. **Pitch low.** Less height means less sail area, slower air near the ground and less volume to keep warm. In real storms, go lower than feels comfortable.
3. **Anchor the windward side first**, then the ridgeline, then the lee side. A tarp half-pitched with its open side to a gust becomes a kite.
4. **Tension evenly and moderately.** A tarp that flaps wears out cords and knots and keeps you awake; one that is bar-tight has no give when a gust hits (see the science).
5. **Use adjustable hitches** (e.g., a taut-line or trucker’s hitch) so you can re-tension as nylon stretches when wet or cold — and quick-release knots so you can re-pitch in the dark.
6. **Anchors:** trees and roots; stakes angled away from the load; in sand or snow bury a stick, stuff-sack of sand/snow or a rock as a **deadman** crosswise to the pull.

### Keeping the water out

- **No flat spots.** Water pools, the pool stretches the fabric, the stretch makes a deeper pool. Each 1 cm of water over 1 m² weighs 10 kg.
- **Drip lines.** Water runs along a ridgeline and guy-lines into your shelter. Tie a short cord or a twist of cloth to each line just outside the tarp so drips fall off there.
- **Splash and run-off.** Pitch the edges low on the weather side; choose a slight rise (Lesson 2) so run-off passes you.
- **Condensation.** Your breath adds several hundred grams of water overnight. A little ventilation at the ends keeps it from raining inside on cold nights.

> [!TIP]
> **Speed is a safety feature**
>
> A pitch you can do in 5 minutes with cold hands in the dark is worth more than a perfect one that takes 30. Practise until the A-frame and your storm pitch are automatic — then practise again with gloves and a headlamp.

[Simulation: Shelter Builder](../../simulations/shelter-builder/index.html)

In the forest, pitch a lean-to on the ridge with its open side facing west and a high pitch. Then turn it round and pitch it low.

> [!IMPORTANT]
> Tying to trees, staking and camping outside designated sites are regulated in many parks; some require tree-friendly straps or prohibit attaching anything to trees. Check the land manager’s rules before you practise, and leave no trace of the pitch.

## Scientific and technical background

### Wind force

The force of wind on a surface grows with the **square of the wind speed**:

$$
F = \tfrac12\,\rho\,C_d\,A\,v^2
$$

In words: force = ½ × air density × a shape factor × the area facing the wind × speed squared. Air density $\rho \approx 1.2$ kg/m³; $C_d \approx 1.2$ for a flat sheet facing the wind.

**Worked example.** A 3 × 3 m tarp pitched as a high lean-to presents roughly its full 9 m² to a 50 km/h (13.9 m/s) wind:

$$
F \approx 0.5 \times 1.2 \times 1.2 \times 9 \times 13.9^2 \approx 1\,250\ \text{N}
$$

— about the weight of 125 kg, shared by a few stakes and cords. Pitch it low and edge-on so it presents a third of the area, and the force drops to about 400 N. **Double the wind speed and the force quadruples**; gusts are what break things.

### Ridgeline tension

A line of span $L$ carrying a load $P$ at its middle, sagging by $s$, pulls on its anchors with a tension of about

$$
T \approx \frac{P\,L}{4\,s}
$$

In words: the flatter the line, the harder it pulls. With $P = 200$ N (the sideways push of a gust, or about 20 kg of wet snow or pooled water), $L = 4$ m:

- sag 20 cm: $T \approx 200 \times 4 / 0.8 = 1\,000$ N
- sag 5 cm: $T \approx 4\,000$ N — more than the rated breaking strength of "550" paracord (550 lb ≈ 2.4 kN), and knots weaken cord further.

So **a ridgeline needs some sag and some give**. Bar-tight looks professional and fails in a storm. A little elasticity (a bungee, a stretchy guy-line or simply less pre-tension) absorbs gusts.

### Water load

Water weighs 1 kg per litre; 1 cm of water over 1 m² is 10 L = 10 kg ≈ 100 N. A 50 × 50 cm puddle 3 cm deep is already 7.5 kg sitting on one patch of fabric — and it grows as the fabric stretches. Slope every panel.

## Examples

**Temperate forest, autumn gale from the west.** Wedge or low A-frame with the closed/low end to the west, both long edges almost to the ground, pack plugging the windward gap. Drip lines on the ridgeline.

**Mountain, above the trees.** No anchors high enough: trekking poles or sticks at the ends, rocks as deadmen, and a very low A-frame or wedge. Or simply wrap the tarp around you as a bivy on a thick layer of your kit.

**Boreal forest, calm −15 °C, fire allowed.** A lean-to facing a long fire with a reflector (Lesson 4) — the one situation where the big open side is an advantage.

**Desert.** The tarp becomes shade: raised high enough for air to flow, edges not sealed, ideally doubled (Lesson 6). Sand anchors: bury stuff-sacks or sticks as deadmen.

**Tropics.** A steep A-frame over a hammock or raised bed sheds downpours; wide overhangs keep splash out; tie drip lines on every line that reaches the tarp.

**Coastal.** Sand and shingle hold stakes poorly — use deadmen and driftwood; salt wind is relentless, so go low and edge-on.

## Common mistakes

- Pitching the open side of a lean-to toward the wind (or the rain).
- Pitching high and roomy in wind — a sail, not a shelter.
- Tensioning the ridgeline bar-tight: in a gust the tension multiplies and something breaks.
- Leaving flat panels that collect a pond by midnight.
- No drip lines, so water wicks along the cords onto your bed.
- Staking the lee side first, then fighting the tarp as the wind fills it.
- Never practising in the dark or with cold hands.

## Practical exercises

### Four pitches against the clock

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.

Level 3 (Safe physical) · 🌲 Outdoor · about 90 min

**Materials:** Tarp (≈3 × 3 m); 15–20 m of cord; 6–8 stakes; Watch

**Steps**

1. Where it is allowed, pitch an A-frame, a lean-to, a diamond and a wedge. Time each.
2. For each, stand on the windward side and decide whether the orientation is right for today’s wind.
3. Pour a cup of water on a flat-looking panel. Does it pool? Fix the slope until it runs off.
4. Add drip lines to the ridgeline and test them with water.
5. Repeat your two best pitches at dusk with gloves on.

**You have it when**

- Each pitch under 10 minutes; your storm pitch under 7.
- No pooling; drip lines shed water outside the shelter.

Builds the skill: Pitch a tarp shelter.

### Measure ridgeline tension

> [!WARNING]
> **Home.** Safe to do at home or at a desk.
>
> Stand to the side — a snapping line or slipping knot can whip.

Level 3 (Safe physical) · 🏠 Home · about 30 min

**Materials:** 2 m of string; A luggage scale or spring balance; A 1–2 kg weight (a water bottle); Two sturdy chairs or posts; Ruler

**Steps**

1. Tie the string between the chairs through the luggage scale.
2. Hang the bottle at the middle. Record the sag and the tension reading.
3. Tighten the line to halve the sag. Record again. Repeat once more.
4. Compare your readings with $T \approx PL/(4s)$.

**You have it when**

- Tension roughly doubles when the sag halves.
- You can explain why a slightly slack ridgeline survives gusts better.

Builds the skill: Core knots, hitches and bends.

## Scenario question

Exposed moorland edge, 18:30, dark at 19:15. Rain has started and the wind is 30 km/h from the south-west, forecast to reach 60 km/h gusts around midnight. You have a 3 × 3 m tarp, 15 m of cord, 6 stakes, trekking poles, and your clothing is damp from the walk. There is a stone wall running north–south.

**What do you pitch?**

1. A high lean-to against the wall, open side facing the view to the south-west.
2. A very low wedge east of the wall, closed end to the SW, windward stakes first, then dry layers.
3. A roomy A-frame on the open moor, ridgeline drum-tight so it will not flap in gusts.
4. Keep walking to warm up and look for a better, more sheltered site before dark.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Wet + wind is the Stage 1 killer combination. Use terrain (the lee of the wall), then the most storm-worthy pitch, oriented to the forecast wind, anchored windward first, with some give. Then deal with the damp clothing while you still have light.

- **1.** Open to wind and rain and high: the tarp will flog, pull its stakes and let the rain in — while your damp clothes chill you.
- **2.** Best: the wall cuts the wind, the wedge sheds the rest, and you fix the wet-plus-wind problem immediately by changing into dry layers under it.
- **3.** Exposed, high and brittle: the gusts will find the weakest point.
- **4.** Darkness in 45 minutes, rising wind and damp clothing: movement costs light and adds sweat; you may end up pitching in the dark in a worse place.

</details>

## Summary

- A-frame = default; lean-to = with a fire and steady wind; diamond = quick and wind-shedding; wedge = storms.
- Force ∝ $v^2$: pitch low and edge-on; gusts decide survival.
- $T \approx PL/(4s)$: a flatter line pulls harder — keep some sag and some give.
- Windward side first; adjustable hitches; deadmen in sand or snow.
- Slope every panel, add drip lines, ventilate the ends against condensation.

## Further reading

- [Animated Knots](https://www.animatedknots.com/).
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Institute for Outdoor Learning (UK). [IOL Bushcraft Competency Award / Certificate / Diploma](https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html).

## References

- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Institute for Outdoor Learning (UK). [IOL Bushcraft Competency Award / Certificate / Diploma](https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html).
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- [Animated Knots](https://www.animatedknots.com/).
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- Leave No Trace Center for Outdoor Ethics. [The Seven Principles of Leave No Trace](https://lnt.org/why/7-principles/).
