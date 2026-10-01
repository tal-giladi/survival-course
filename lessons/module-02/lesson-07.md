---
id: "02.7"
module: 2
minutes: 50
practice_minutes: 105
prerequisites: ["02.4", "02.6"]
objectives:
  - "Fix your position by resection from two or three back bearings, correcting for declination."
  - "Read a cocked hat: what its size says about your bearing error and why line angles matter."
  - "Use a single bearing plus a linear feature, and slope aspect, to locate yourself."
  - "Run a structured relocation procedure — including when to stop searching and stay put."
level: intermediate
volatility: concept
sources:
  - title: "Magnetic Field Calculators (declination)"
    url: https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml
  - title: "Lost Person Behavior"
    url: https://www.dbs-sar.com/LostPersonBehavior.htm
  - title: "AdventureSmart — trip planning and “if lost” guidance"
    url: https://www.adventuresmart.ca/
last_verified: "2026-09-27"
---

# 02.7 · Triangulation and relocation

Most wilderness navigation incidents begin as a small, unnoticed position error that grows while the walker keeps moving. A disciplined relocation routine — and knowing when to stop and stay — turns a potential search into a ten-minute pause.

## Explanation

Everyone who navigates gets **temporarily unsure** of their position. The skill is not avoiding it; it is recognising it early and relocating methodically, before a small doubt becomes being lost.

### Resection: where am I, from what I can see?

If you can see and identify on the map two or three distinct features — a summit, a mast, a lake outlet, a church — you can fix your position:

1. **Orient yourself and identify features** on the map *and* the ground. Choose features spread widely around you.
2. **Take a magnetic bearing** to each one.
3. **Convert to grid** using the declination on the map. With the course map’s **8° W** declination (magnetic = grid + 8°), subtract 8°: 040° magnetic → **032° grid**.
4. **Compute the back bearing** (add or subtract 180°): 032° → **212°**.
5. **Draw the line** on the map from each feature along its back bearing. (With a baseplate compass you can instead set the grid bearing, place the edge on the feature and rotate the whole compass until its orienting lines match the grid — the edge then lies along your line.)
6. Where the lines cross is your position.

Two lines give a point. A third line is a check: in practice the three lines almost never meet exactly and form a small triangle — the **cocked hat**.

![Resection: back-bearing lines from three features forming a cocked hat](../../assets/diagrams/resection.svg)

*Back-bearing lines from three identified features; the small triangle where they cross is the cocked hat.*

### Reading the cocked hat

- **Small** triangle: your bearings are consistent; you are probably inside or near it.
- **Large** triangle: at least one bearing is poor, a feature is misidentified, or declination was applied the wrong way. Recheck before trusting it.
- **Line angles matter.** Lines crossing at **60–120°** give a tight fix. Lines crossing at a shallow angle (under ~30°) or nearly opposite (over ~150°) smear the fix along the lines.

### One bearing plus a linear feature

If you know you are on a path, stream, ridge or shore, one back bearing to a single identified feature is enough: your position is where the line crosses the linear feature. Aligning two distant features (a **transit**) gives a line without a compass.

### Slope aspect

On a hillside with nothing to sight on, point the compass straight **down the fall line** and read the bearing — the **aspect** of the slope. Convert to grid. Then look along your handrail or contour for the place where the contours face that direction. On a ridge that bends, aspect can pin you to within a few hundred metres even in fog.

### The relocation procedure

When the ground stops matching the map:

1. **STOP.** Stop moving. Every step taken while confused makes the problem bigger.
2. **Last known point.** Where were you *sure* of your position? When?
3. **Estimate a circle.** Radius ≈ your speed × time since the last known point. You are almost certainly inside it.
4. **Look for major features** inside the circle — big landforms, linear features, slope aspect. Try a resection if anything is visible.
5. **Decide:** backtrack to the last known point (often safest), or walk on a bearing to a **catching feature** you cannot miss (a road, river, big lake shore).
6. **If searching nearby,** use a small, planned pattern (a box or expanding square around your estimated position) with a strict **time limit**, marking your start point.
7. **If daylight, weather or energy are running out, stay.** Shelter, signal and wait — the Stage 1 stay-or-move logic.

![Relocation procedure flowchart](../../assets/diagrams/relocation-flow.svg)

*Relocation procedure: STOP → last known point → estimate circle → features and aspect → backtrack or head for a catching feature → stay if light is low.*

[Simulation: Scenario: Fog on the Plateau](../../simulations/nav-relocation/index.html)

Branching scenario: relocate in fog on a moorland plateau. Every choice costs time and daylight.

> [!WARNING]
> **Don’t bend the map**
>
> The most dangerous relocation error is convincing yourself that a feature “sort of fits”. If one clue doesn’t match — flow direction, slope aspect, the angle of a path junction — treat it as evidence that you are *not* where you think.

## Scientific and technical background

### Converting and reversing bearings

With a **west** declination $D_W$ (magnetic north lies west of grid north), a magnetic bearing is larger than the grid bearing:

$$
\theta_{\text{grid}} = \theta_{\text{mag}} - D_W, \qquad \theta_{\text{back}} = \theta_{\text{grid}} \pm 180^\circ
$$

**Worked example** (8° W). Bearing to a summit 040° magnetic → 032° grid → back bearing **212°**. Bearing to a mast 130° magnetic → 122° grid → back bearing **302°**. The two lines cross at $302 - 212 = 90^\circ$ — an ideal fix.

### How big should the cocked hat be?

From the 1-in-60 rule, a bearing error of $\varepsilon$ degrees to a feature at distance $d$ shifts that line sideways by about $d\varepsilon/60$. With $\pm 3^\circ$ at 1.5 km: $1500 \times 3/60 = 75$ m. A cocked hat with sides of the order of 50–150 m is normal; one 500 m across means a mistake.

The angle $\alpha$ between two lines turns sideways error $x$ into position error of roughly

$$
e \approx \frac{x}{\sin\alpha}
$$

At $\alpha = 90^\circ$, $e = 75$ m. At $\alpha = 20^\circ$, $e \approx 75 / 0.34 \approx 220$ m — the same bearing quality gives a fix three times worse. Hence: choose features **60–120° apart**.

### The estimated-position circle

Radius $r = v \times t$. Walking 3 km/h for 20 min since your last known point gives $r = 1$ km, an area of $\pi r^2 \approx 3.1\ \text{km}^2$. Wait another 20 minutes while moving aimlessly and the radius doubles — the area to consider quadruples. This is why STOP comes first.

## Examples

**Mountain, clear day.** From an unnamed knoll a walker sights a trig-point summit (NE) and a reservoir dam (SE), 95° apart. The cocked hat from a third bearing to a mast is 60 m across — a confident fix.

**Coastal.** A sea kayaker ashore in haze lines up a lighthouse with a headland (transit) and takes one bearing to an island: two lines, one fix.

**Boreal forest.** No views at all. The navigator backtracks 400 m to the last trail junction instead of guessing — slower on paper, faster in practice.

**Moorland in fog.** The slope drops away at 250°. On the map, only one stretch of the plateau edge within the estimated circle faces west-southwest; that narrows the search to a few hundred metres.

**Desert.** Distant ranges are easy to see but hard to identify; a large cocked hat revealed that one “peak” was a different summit. A third, closer landmark resolved it.

**Rural or urban fringe.** Church spires, masts and water towers make excellent resection targets on lowland maps.

## Common mistakes

- Applying declination the wrong way (adding instead of subtracting), which rotates every line and can create a convincing but wrong fix.
- Choosing features that are nearly in line with each other (lines crossing at a shallow angle).
- Resecting from features you have not positively identified.
- Continuing to walk while “trying to work it out”.
- Searching with no time limit until daylight is gone.
- Myth: “The cocked hat is always the exact spot where you stand.” It is a zone of uncertainty — you may even be just outside it.

## Practical exercises

### Hilltop resection

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Stay well back from edges while sighting; choose a viewpoint with safe footing.

Level 3 (Safe physical) · 🌲 Outdoor · about 60 min

**Materials:** Topographic map; Baseplate compass with orienting lines; Pencil

**Steps**

1. On a hill or viewpoint you can locate on the map, identify three features spread widely around you.
2. Take a magnetic bearing to each, convert to grid, and compute back bearings.
3. Plot the lines and measure the cocked hat.
4. Compare with your true position (map or GNSS) and work out your bearing error.

**You have it when**

- Cocked hat under ~150 m across for features within 3 km.
- Correct declination direction on every line.
- You can explain why your worst line was worst.

Builds the skill: Map and compass navigation.

### Slope-aspect walk

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.

Level 2 (Simulation) · 🌲 Outdoor · about 45 min

**Materials:** Map of a hilly area with a path; Compass

**Steps**

1. Walk a contouring path round a hill. Every 5 minutes, measure the fall-line bearing.
2. Mark on the map where the contours face that direction.
3. Check each estimate against the known path position.

**You have it when**

- Positions from aspect agree with the path to within about 200 m.

Builds the skill: Terrain association.

## Scenario question

Late afternoon, autumn. You are on a broad ridge in thickening cloud and the path has faded. Your last known point was a cairn 25 minutes ago; you walk about 3 km/h. Occasionally the cloud thins and you glimpse a distinctive radio mast, roughly south-east. The ground slopes down to your right.

**What is the best next step?**

1. Keep walking along the ridge, since the faded path is likely to reappear again soon.
2. STOP; bearing to the mast when it clears plus slope aspect, fixed within your 1.25 km circle.
3. Descend the slope to your right to get below the cloud and see the land.
4. Phone for rescue immediately, before the cloud and the light get any worse.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Circle radius = 3 km/h × 25 min ≈ 1.25 km. A back bearing from the mast gives one line; the ridge aspect narrows where along it you are. If that fails, backtracking 25 minutes to the cairn is still reversible. Only if light and weather make that unsafe does staying put take over.

- **1.** Moving on while unsure grows the uncertainty circle and wastes light.
- **2.** Best — two independent lines (mast bearing and ridge aspect) inside a bounded circle can give a fix within minutes.
- **3.** Descending an unknown slope in cloud is irreversible and may lead to crags or the wrong valley.
- **4.** Not yet — you are uninjured with tools and daylight to relocate; keep the phone as a backup.

</details>

## Summary

- Resection: magnetic bearing → grid (8° W: subtract 8°) → back bearing (±180°) → draw from the feature.
- A small cocked hat is normal; a large one is a mistake. Choose features 60–120° apart.
- One bearing plus a linear feature, or slope aspect plus a handrail, can also fix you.
- Relocation: STOP → last known point → circle (speed × time) → features → backtrack or catching feature → stay if light is low.
- Never bend the map; time-box every search.

## Further reading

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- US Army. *TC 3-25.26 Map Reading and Land Navigation*. 2013. Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.
- Canada’s national SAR prevention program. [AdventureSmart — trip planning and “if lost” guidance](https://www.adventuresmart.ca/).

## References

- US Army. *TC 3-25.26 Map Reading and Land Navigation*. 2013. Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.
- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- NOAA NCEI. [Magnetic Field Calculators (declination)](https://www.ngdc.noaa.gov/geomag/calculators/magcalc.shtml).
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- Robert J. Koester. [Lost Person Behavior](https://www.dbs-sar.com/LostPersonBehavior.htm). 2008. Statistical profiles of how lost people behave (ISRID, >145,000 incidents). Used by SAR planners worldwide.
- Canada’s national SAR prevention program. [AdventureSmart — trip planning and “if lost” guidance](https://www.adventuresmart.ca/).
