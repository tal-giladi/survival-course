---
id: "13.3"
module: 13
minutes: 55
practice_minutes: 60
prerequisites: ["13.2"]
objectives:
  - "Express loads in newtons and kilonewtons, and tell static loads from dynamic (shock) loads."
  - "Calculate the force in each leg of a two-leg anchor from the included angle, and explain why flat, tight lines are dangerous."
  - "Calculate the force on a redirect from the angle between its rope strands."
  - "Describe the anchor principles instructors check (SERENE / ERNEST), and why evaluating anchors for people requires formal training."
  - "Apply the same force reasoning safely to camp rigging: ridgelines, food lines and tripods."
level: advanced
volatility: concept
sources:
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
  - title: "UIAA — International Climbing and Mountaineering Federation"
    url: https://www.theuiaa.org/
  - title: "The Seven Principles of Leave No Trace"
    url: https://lnt.org/why/7-principles/
last_verified: "2026-09-27"
---

# 13.3 · Load principles and anchors

Most people assume two anchor points halve the load and that a tighter line is a stronger line. Both are wrong, sometimes lethally. The vector-angle rule explains why a tight rope across a gully can break, why a flat ridgeline snaps in wind, and why redirects and anchors carry more than the load. Understanding the physics also makes it obvious why judging anchors for people is a trained skill.

## Explanation

### Forces, not kilograms

A mass of $m$ kg hanging still pulls with a force of $m \times g$, where $g \approx 9.81$ m/s². So 1 kg weighs about **9.8 N**, 100 kg about **0.98 kN**. Rope, slings and hardware are rated in **kilonewtons (kN)** because the forces that matter are rarely just the weight:

- **Static load** — hanging still: roughly the weight.
- **Dynamic (shock) load** — anything that jerks: a slip onto a slack rope, a bouncing load, a sudden stop. The force can be several times the weight (Lesson 1: the fall factor).
- **Multiplied load** — the same weight can put **more than its own weight** into parts of a system, because of the **angles** those parts make. This lesson is about that.

![Force in each anchor leg as a multiple of the load, against the angle between the legs: 0.5 at 0 degrees, 0.58 at 60, 0.71 at 90, 1.0 at 120, 1.93 at 150, rising steeply toward infinity at 180](../../assets/diagrams/s13-vector-angles.svg)

*Each leg of a two-leg anchor carries more as the angle between the legs grows — equal to the whole load at 120°, and without limit as the line flattens.*

### Vector angles

Hang a load from the middle of a rope whose two ends go up to two points. Each leg must hold part of the load **up** — but it also pulls **sideways** against the other leg, and those sideways pulls do nothing useful. The wider the angle between the legs, the more of each leg’s tension is wasted pulling sideways, so the tension rises:

| Angle between legs | Each leg carries |
|---|---|
| 0° (side by side) | 0.50 × load |
| 60° | 0.58 × load |
| 90° | 0.71 × load |
| **120°** | **1.00 × load** — no benefit from two legs |
| 150° | 1.93 × load |
| 170° (almost flat) | 5.7 × load |

Rules of thumb that climbing and rescue courses teach: keep anchor-leg angles **narrow — ideally under about 60°**, treat 90° as a warning, and **never exceed 120°**. A **tight, nearly flat line** with a load in the middle — a “tensioned line” across a gully, a clothesline pulled drum-tight, a sling threaded so it forms a triangle between two points — can multiply forces many times.

![Force on a redirect pulley: 2 times the rope tension when the rope makes a U-turn, 1.41 times at 90 degrees between strands, equal to the tension at 120 degrees, and nearly zero when the rope runs straight past](../../assets/diagrams/s13-redirect-force.svg)

*A pulley that turns a rope feels the vector sum of the two strands: twice the tension for a U-turn.*

### Redirects

When a rope changes direction round a pulley, tree or carabiner, the anchor of that redirect feels **both strands** pulling. For a full U-turn it feels about **twice** the rope tension; at 90° between the strands, about 1.4 times; at 120°, once; for a slight bend, little. This surprises people: a redirect at the top of a haul can carry **more** than the load itself.

### Anchor principles

An **anchor** is whatever the rope system is attached to: a tree, boulder, rock feature, bolts, placed climbing protection, a vehicle or a structure. How to choose, build and test anchors for people is a core part of climbing and rescue training — this course does **not** teach it. What you can understand is **what instructors check**. The common teaching acronyms are **SERENE** and **ERNEST**:

![Anchor principles often taught as SERENE or ERNEST: strong, redundant, equalised, no extension, efficient or timely, shown around a two-point anchor with a master point and a narrow angle](../../assets/diagrams/s13-anchor-principles.svg)

*Principles used to evaluate anchors. Knowing the words is not the same as being able to judge a real anchor.*

- **Strong / Solid** — every component far stronger than any load it could see. A “large living tree” is only as good as its roots, the soil, and the rock it grows from.
- **Redundant** — no single point of failure: not one tree, one sling, one knot or one carabiner that everything depends on.
- **Equalised** — the load is shared between points. In practice, perfect sharing does not happen; friction, stretch and direction changes all skew it.
- **No Extension** — if one point fails, the system should not drop and shock-load the rest (Lesson 1).
- **Efficient / Timely** — simple enough to build correctly and check, quickly.

Two further ideas matter as much as the acronym: the **direction of pull** (an anchor that is solid one way may pull out another way), and **the edge** (a perfect anchor above a sharp edge still fails if the rope is cut).

> [!CAUTION]
> **Anchors for people: formal training only**
>
> Judging whether a tree, boulder, bolt or placement will hold a person — and building a system on it — needs hands-on instruction from a qualified climbing, canyoneering or rope-rescue instructor, and practice under supervision. The exercises here use **small objects only** or are **virtual**.

> [!IMPORTANT]
> **Trees and land**
>
> Tying off to trees, fences or structures needs the landowner’s permission in many places, and some parks restrict ropes on trees or ban fixed anchors entirely. Pad bark to avoid damage, and remove everything you rig.

[Simulation: Mechanical Advantage Lab (virtual only)](../../simulations/mechanical-advantage/index.html)

Open the sim and move the anchor-leg angle slider: watch each leg’s force as the angle opens past 90° and 120°.

## Scientific and technical background

### Two-leg anchor

In words: the vertical parts of the two leg tensions must add up to the load $W$. If the legs share equally and each makes half the included angle $\beta/2$ with the vertical, each leg’s vertical part is $T \cos(\beta/2)$, so

$$
2\,T\cos\!\left(\tfrac{\beta}{2}\right) = W \quad\Rightarrow\quad T = \frac{W}{2\cos(\beta/2)}
$$

**Worked example.** A 100 kg load weighs $W \approx 981$ N. At $\beta = 60°$: $T = 981/(2 \times 0.866) \approx 566$ N. At $120°$: $\cos 60° = 0.5$, so $T = 981$ N. At $150°$: $T = 981/(2 \times 0.259) \approx 1{,}895$ N — almost **twice the load in each leg**.

### A sagging line

For a load hanging from the middle of a line that dips at a **sag angle** $\alpha$ below horizontal, the included angle is $180° - 2\alpha$, so the same formula becomes

$$
T = \frac{W}{2\sin\alpha}
$$

**Camp example.** A 10 kg food bag ($W = 98$ N) on a line with only 5° of sag: $T = 98 / (2 \times 0.087) \approx 563$ N — nearly **six times** the bag’s weight. Let it sag to 20°: $T \approx 143$ N. Sag is your friend.

### Redirect force

A pulley whose two strands carry $T_1$ and $T_2$ with an angle $\alpha$ between them feels the vector sum

$$
F = \sqrt{T_1^2 + T_2^2 + 2T_1T_2\cos\alpha}\;\;\xrightarrow{T_1=T_2=T}\;\; F = 2T\cos\!\left(\tfrac{\alpha}{2}\right)
$$

A U-turn ($\alpha = 0$) gives $2T$; $90°$ gives $1.41T$; $120°$ gives $T$.

## Examples

**Forest camp.** A drum-tight ridgeline and a flat food-hang line are the everyday versions of a 170° anchor: they snap in gusts or pull the branch down. Leave sag.

**Mountain.** Trained climbers keep the legs of an anchor narrow and consider the direction a fall would pull. A tight “handline” strung across a gully for a group is a flat line: a slip multiplies the load in it and in both anchors.

**Desert canyon.** Rope teams find old anchors of webbing threaded round boulders or wedged logs. The direction of pull, the edge and the sun-rotted webbing all matter; they are always inspected and often replaced by trained canyoneers.

**Coastal.** Sea-cliff anchors must consider rock quality (sandstone, chalk and weathered rock can crumble) and salt-corroded fixed hardware.

**Arctic / snow.** Snow anchors (buried objects, pickets) depend on snow strength that changes with temperature and time of day — a specialist training topic.

**Tropical.** Trees can be shallow-rooted in thin soils or rotten from the inside; vines are not anchors.

**Urban.** Structural anchors on buildings are engineered and certified for rope access; balcony rails, pipes and door frames are not.

**Rural.** Fence posts, gates and farm vehicles are tempting anchors for recovery; a vehicle-recovery strap or rope under tension stores enormous energy, and a failure can kill bystanders.

## Common mistakes

- Myth: two anchor points always halve the load. Past 120° each leg carries more than the whole load.
- Myth: tighter is stronger. A flat, tight line multiplies force in the line and at both ends.
- Forgetting that a redirect’s anchor feels up to twice the rope tension.
- Choosing an anchor for its size and ignoring the direction of pull or the edge below it.
- Using a single tree, sling, knot or carabiner that everything depends on (no redundancy).
- Assuming load is shared evenly because the anchor “looks equalised”.
- Tying people off to balcony rails, pipes, fence posts or vines.

## Practical exercises

### Measure vector angles with a water bottle

> [!WARNING]
> **Home.** Safe to do at home or at a desk.
>
> Small loads only, at low height, with the chairs weighted so they cannot tip. Keep faces away from the cord — it snaps back if a knot slips. Never apply this to anything holding a person.

Level 2 (Simulation) · 🏠 Home · about 40 min

**Materials:** 2 m of cord; A 2 L water bottle (≈ 2 kg, ≈ 20 N); Digital luggage scale; Two heavy chairs or table legs; Protractor or phone angle app

**Steps**

1. Tie one end of the cord to a chair leg; tie the luggage scale between the other end and the second chair.
2. Hang the bottle from the middle of the cord with a small loop or hook.
3. Move the chairs apart to make the sag angle about 60°, 30° and 10° below horizontal. Read the scale each time.
4. Compare with $T = W / (2\sin\alpha)$: about 12 N, 20 N and 58 N for a 20 N bottle.
5. Write one sentence on what this means for a ridgeline or a tensioned line across a gap.

**You have it when**

- Three measurements within about 20 % of the formula.
- You can explain why sag protects a line.

Builds the skill: Rope force reasoning.

### Virtual: anchor-angle drill

> [!CAUTION]
> **Virtual only.** Simulate only. Do not attempt physically.

Level 2 (Simulation) · 🖥️ Virtual only · about 20 min

**Steps**

1. In the Mechanical Advantage Lab, keep the system fixed and set the anchor-leg angle to 30°, 60°, 90°, 120° and 150°.
2. Record the leg force each time and plot it against angle.
3. Add a haul-line redirect at 0° (a U-turn) and at 120°; note the change in the anchor force.
4. Summarise the two rules in your own words: keep anchor angles narrow; redirects add load.

**You have it when**

- A plot showing the steep rise past 90°.
- Correctly predicts the leg force at 120° before moving the slider.

Builds the skill: Rope force reasoning.

## Scenario question

On a coastal walk, a family ahead of you has stopped at a short, steep, muddy section above a rocky drop. The father has a 10 m length of rope and wants to tie it across between two small trees at waist height, pulled tight, so his children can hold it as they pass. He asks you to help pull it tight.

**What do you do?**

1. Help pull it as tight as you can — tighter is safer.
2. Tell him politely what you know: a tight rope gives false security and cannot hold a slip; suggest the group turns back or finds a safer route, and offer to help carry the youngest child back along easy ground.
3. Suggest tying the rope round each child’s waist and holding the other end yourself.
4. Say nothing — it is their decision.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Force reasoning (flat angles, shock loads, grip) plus Stage 1 decision rules: immediate danger, reversible options first, and the “Ask: if I slip here, do I stop or fall?” test. When the honest answer is “fall”, rope improvisation by untrained people usually adds danger. Turning back is the rope-free safety system.

- **1.** A flat line multiplies forces in the rope and both small trees; a child slipping will not be held by their grip anyway.
- **2.** Best: explains the real risk, keeps everyone off consequential ground and offers practical help.
- **3.** An untrained person holding a rope tied to a falling child can be pulled over the drop too, and the child can be injured by the jerk.
- **4.** You may be the only one who knows the physics; a short, respectful warning can save a life.

</details>

## Summary

- Loads are forces: 1 kg ≈ 9.8 N; ropes and hardware are rated in kN. Shock loads can be several times the weight.
- Each leg of a two-leg anchor carries $W/(2\cos(\beta/2))$: equal to the whole load at 120°, far more beyond.
- A sagging line: $T = W/(2\sin\alpha)$ — sag protects lines.
- A redirect feels up to **twice** the rope tension.
- Anchor principles: **Strong, Redundant, Equalised, No Extension, Efficient** — plus direction of pull and the edge.
- Knowing the principles is not the same as judging a real anchor: **anchors for people need formal training**.

## Further reading

- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- John Long and Bob Gaines. *Climbing Anchors*. Anchor principles, load distribution and the forces that angles create. No substitute for instruction.
- R. C. Hibbeler. *Engineering Mechanics: Statics*. Standard textbook treatment of belt (capstan) friction, wedges and cables.

## References

- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- John Long and Bob Gaines. *Climbing Anchors*. Anchor principles, load distribution and the forces that angles create. No substitute for instruction.
- R. C. Hibbeler. *Engineering Mechanics: Statics*. Standard textbook treatment of belt (capstan) friction, wedges and cables.
- CMC Rescue. *CMC Rope Rescue Manual*. A widely used rope-rescue training text: rope, hardware, anchors, mechanical advantage, raising and lowering systems.
- [UIAA — International Climbing and Mountaineering Federation](https://www.theuiaa.org/).
- Leave No Trace Center for Outdoor Ethics. [The Seven Principles of Leave No Trace](https://lnt.org/why/7-principles/).
