---
id: "02.2"
module: 2
minutes: 45
practice_minutes: 105
prerequisites: ["02.1"]
objectives:
  - "Read contour lines, the contour interval and index contours, and tell uphill from downhill."
  - "Estimate slope angle from contour spacing and the map scale."
  - "Recognise ridges, spurs, valleys (re-entrants), saddles, summits and cliffs from contour shapes."
  - "Distinguish convex and concave slopes and predict dead ground."
  - "Draw a simple cross-section profile of a route."
level: beginner
volatility: concept
sources:
  - title: "Topographic Map Symbols"
    url: https://pubs.usgs.gov/gip/TopographicMapSymbols/topomapsymbols.pdf
  - title: "Topographic Maps (US Topo, historical topos, topoBuilder)"
    url: https://www.usgs.gov/programs/national-geospatial-program/topographic-maps
  - title: "Mountaineering: The Freedom of the Hills (10th ed.)"
    url: https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition
  - title: "Avalanche.org (US avalanche centers)"
    url: https://avalanche.org/
  - title: "MapZone map-reading resources"
    url: https://www.ordnancesurvey.co.uk/mapzone
last_verified: "2026-09-27"
---

# 02.2 · Reading topography

Slope decides your speed, your energy use, your risk of falls, and — in winter — avalanche exposure (most slab avalanches start on slopes of about 30–45°). Landforms are also the navigator’s signposts: ridges, streams and saddles can be recognised in fog or in forest where nothing else is visible. Reading contours turns a flat piece of paper into a picture of what your legs are about to meet.

## Explanation

A **contour line** joins points of equal height. Imagine flooding the land and marking the shoreline every 10 m as the water rises: each shoreline is a contour. Seen from above, those shorelines draw the shape of the ground.

### Reading the lines

- **Contour interval** — the height between adjacent lines — is in the margin: commonly 5 or 10 m on 1:25,000 maps, 10 or 20 m on 1:50,000 maps, 20 or 40 ft on USGS 1:24,000 quads. Always check: the same drawing means very different ground at a 5 m and a 20 m interval.
- **Index contours** — every fourth or fifth line — are drawn thicker and labelled with their height. The numbers are printed so that they read **uphill** (their tops face up the slope) on many maps.
- **Uphill or downhill?** Look for height labels, spot heights, summits (closed rings getting smaller) and water: **streams always run downhill**, and lakes sit in low ground.
- **Spacing = steepness.** Close lines: steep. Wide lines: gentle. Lines merging: cliff (often with a separate cliff symbol).

![A hill shown as contour lines above and as a cross-section profile below](../../assets/diagrams/contours-profile.svg)

*A hill in contours and the same hill as a cross-section. Where lines crowd, the profile steepens.*

### Landforms from contour shapes

| Landform | What the contours do | On the ground |
|---|---|---|
| **Summit / knoll** | Closed rings, smallest in the middle | High point; ground falls in all directions |
| **Ridge / spur** | U- or V-shapes **pointing downhill** | A tongue of high ground; water drains off both sides |
| **Valley / re-entrant** | U- or V-shapes **pointing uphill** (upstream), often with a stream | Low ground you would walk *up*; water collects here |
| **Saddle (col, pass)** | An hourglass: two sets of rings with a low point between | Lowest point between two highs — natural crossing |
| **Cliff / steep face** | Lines crowd or merge; cliff symbol | Impassable or dangerous for walkers |
| **Plateau / flat** | Few, widely spaced lines | Hard to navigate: few features, easy to drift |

The **V-rule**: where contours cross a stream, the V points **upstream**. Spurs and valleys look alike in a sketch; the direction the V points — uphill or downhill — is what tells them apart.

![Contour patterns of a summit, spur, re-entrant, saddle and cliff](../../assets/diagrams/landforms.svg)

*Contour signatures of summit, spur, re-entrant, saddle and cliff. Check which way the Vs point.*

### Convex, concave and dead ground

Contours spaced **evenly** mean a uniform slope. On a **convex** slope (bulging out) the lines are **wide at the top and crowded at the bottom** — from the top you cannot see the steep lower part, so a walker descending finds the slope getting steeper under their feet, and a cliff can appear with little warning. On a **concave** slope (dished) the lines are **crowded at the top and wide at the bottom** — you can see the whole slope from above.

Ground you cannot see from where you stand is **dead ground**. It matters for route-finding (you will not see the stream until you are on it), for signaling (a searcher on a convex hill cannot see you below the brow) and for choosing where to wait.

### Drawing a profile

1. Lay a strip of paper along your route on the map.
2. Tick every place the route crosses a contour and write its height.
3. Transfer the ticks to the bottom of graph paper, mark heights vertically, and join the points.
4. Exaggerate the vertical scale if you like, but note it — the profile will look steeper than the ground.

A profile shows at a glance where the climbs, drops and flat sections are, how much total ascent a route has, and where dead ground hides the next section.

### Aspect

The **aspect** of a slope is the compass direction it faces — the way water would run straight down it, at right angles to the contours. You will use aspect in lesson 7 to relocate: “I am on a slope that falls to the north-east” rules out most of the map.

> [!TIP]
> **Contours over everything**
>
> Contours are the most durable information on the map. Tracks move and forests are cut, but a spur surveyed 60 years ago is still there. When the map and the ground seem to disagree, match the **shape of the land** first.

## Scientific and technical background

### Slope from contour spacing

The **gradient** is how much you climb for each unit you travel horizontally: vertical interval divided by horizontal distance. The **slope angle** is the angle whose tangent is that gradient:

$$
\text{gradient} = \frac{\Delta h}{\Delta x}, \qquad \theta = \arctan\left(\frac{\Delta h}{\Delta x}\right)
$$

Here $\Delta h$ is the height gained (contour interval × number of intervals, in metres) and $\Delta x$ is the horizontal distance (map distance × scale, in metres).

**Worked example 1.** 1:25,000 map, 10 m interval, adjacent contours **2 mm** apart. Horizontal distance $= 2\ \text{mm} \times 25\ \text{m/mm} = 50$ m. Gradient $= 10/50 = 0.2$ (20 %). $\theta = \arctan(0.2) \approx 11.3^\circ$ — a steady hill-walk slope.

**Worked example 2.** 1:50,000 map, 10 m interval, **5 intervals** within **3 mm**. $\Delta h = 50$ m, $\Delta x = 3 \times 50 = 150$ m. Gradient $= 0.33$, $\theta = \arctan(0.33) \approx 18.4^\circ$ — steep, slow going.

**Critical spacings** (1:25,000, 10 m interval):

| Contour spacing | Horizontal distance | Slope |
|---|---|---|
| 4 mm | 100 m | ≈6° |
| 2 mm | 50 m | ≈11° |
| 1 mm | 25 m | ≈22° |
| 0.7 mm | ≈17 m | ≈30° (avalanche-relevant) |
| 0.4 mm | 10 m | 45° — lines nearly touching |

Once lines are less than about 1 mm apart at this scale you are on ground where a slip can become a fall; when they merge, it is a cliff.

### Height gained

Count intervals, not lines: from the 340 m contour to the 520 m contour at a 20 m interval is $(520 - 340)/20 = 9$ intervals. Summing climbs along a profile gives **total ascent**, which you will feed into Naismith’s rule in lesson 5.

![Contour spacing on a 1:25,000 map with 10 m interval and the resulting slope angles](../../assets/diagrams/slope-spacing.svg)

*The same 10 m interval at different spacings: halving the spacing roughly doubles the gradient.*

## Examples

**Mountain.** In mist on a broad summit plateau, the only safe way down is a spur. The walkers look for contours bulging *downhill* in the right direction and check each step: the ground should fall away on both sides. The re-entrant beside it ends in crowded lines — a hidden cliff.

**Forest.** Under canopy you cannot see far, but you can feel the ground. Crossing a line of re-entrants, each dip with a small stream, lets a walker count features like beads on a string.

**Desert.** Wadis and dry washes are valleys whose V’s point upstream, even though no water is visible. A flash flood from distant rain runs down them — which is why the V-rule is also a hazard map.

**Tropical.** In steep rainforest hills, contours at 20 m intervals can hide 10 m bluffs between lines. The map says “steep”; the ground says “cliff”. Allow for detail the interval cannot show.

**Arctic and subarctic.** On flat tundra with a 10 m interval there may be one contour per kilometre. Low eskers and moraine ridges are the only relief; lakes and bog shapes become the main features.

**Coastal and rural.** Coastal paths run along convex cliff tops: the brow hides the drop. On farmland, a gentle concave valley lets you see the whole field system below — a good place to fix your position.

**Urban.** Cities have contours too. Streets that climb steeply, or a river valley through the middle of town, are the same landforms under concrete.

## Common mistakes

- Reading spurs as valleys (and the reverse) — check which way the Vs point and where the streams are.
- Not checking the contour interval: 1 mm spacing at a 5 m interval is a very different slope from 1 mm at 20 m.
- Counting contour lines instead of intervals when computing height gain.
- Assuming ground between contours is smooth — small cliffs and bluffs can hide between lines.
- Descending a convex slope expecting it to stay gentle.
- Myth: “Contour numbers are always printed upright.” On many maps they are aligned to read uphill, so they can appear upside down.
- Myth: “Following a stream downhill always leads to safety.” Streams also lead into gorges, over waterfalls and into dense vegetation — use them as features, not as automatic escape routes.

## Practical exercises

### Contours to profile

Level 2 (Simulation) · 🏠 Home · about 45 min

**Materials:** A topographic map with a hill and a valley (free USGS or OS sheet); Paper strip; Graph paper; Pencil and ruler

**Steps**

1. Choose a 2–3 km straight line crossing a ridge and a valley.
2. Tick each contour crossing on the paper strip and label its height.
3. Draw the profile on graph paper. Mark the steepest section and compute its slope with the arctan method.
4. Mark any dead ground: places you could not see from the start point.
5. On the same map, find and label one example each of summit, spur, re-entrant, saddle and (if present) cliff.

**You have it when**

- Profile heights match the contour labels.
- Your steepest-section slope is within about 3° of a partner’s or of a GIS/online profile tool.
- All five landforms correctly identified with the V-rule.

Builds the skill: Terrain association.

### Walk the contours

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Stay on paths; do not go near crowded contours or cliff symbols. Leave a trip plan.

Level 2 (Simulation) · 🌲 Outdoor · about 60 min

**Materials:** 1:25,000 map of a local park or hill with paths; Notebook

**Steps**

1. On a public path in daylight, stop at 4–5 points where the ground changes shape (a spur, a dip, a saddle).
2. At each, find the matching contour shape on the map and note the slope you estimated from spacing.
3. Compare how steep it felt with your estimate.

**You have it when**

- You matched every landform you stopped at.
- Your slope estimates were within about 5° of how the ground felt (use a phone inclinometer app to check if you have one).

Builds the skill: Terrain association.

## Interactive simulation

[Simulation: Navigation Simulator](../../simulations/nav-map/index.html)

Navigate a wilderness map between waypoints by bearing and pace count — with realistic compass and pacing error, crags, handrails, and the option to lose the compass.

## Scenario question

Late autumn in a mountain range. You and a friend are on a broad summit at 15:45; sunset is 16:50. Cloud has come down and visibility is 40 m. You planned to descend a spur on the north-east side; the map shows a re-entrant immediately east of it with contours that merge into a cliff symbol at 200 m below the summit. You are not certain which way you are facing.

**What is your best course of action?**

1. Head downhill on the steepest line — getting below the cloud quickly is the priority now.
2. Bearing onto the spur; check the ground falls away both sides, and stop if it closes into a hollow.
3. Stay on the summit and wait for the cloud to lift before starting any descent at all.
4. Find the first stream and follow it downhill, since water always leads to lower ground.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Landforms are navigation handrails you can feel. A spur falls away on both sides; a re-entrant closes in and collects water. With 65 minutes of daylight and a known landform to follow, a careful, checked descent beats both a blind rush and an unnecessary night out. If the checks fail and light runs short, stopping and sheltering becomes the better choice — keep the stay-or-move decision open.

- **1.** The steepest way down is exactly the line that leads into the re-entrant and the cliff.
- **2.** Best: uses the contour signature of a spur as a continuous check, and daylight is enough for a controlled descent.
- **3.** Possible if you have shelter and warmth, but with an hour of light and a known, identifiable descent line it adds a night out for little gain.
- **4.** Streams collect in re-entrants — here, the one ending in the cliff.

</details>

## Summary

- Contours join points of equal height; check the interval and use index contours and water to tell up from down.
- Slope: gradient = vertical interval ÷ horizontal distance; angle = arctan(gradient). 10 m at 2 mm on 1:25,000 ≈ 11°.
- Valley Vs point upstream; spur Vs point downhill; hourglass = saddle; merged lines = cliff.
- Convex slopes hide their steep lower part (dead ground); concave slopes can be seen whole from above.
- A profile shows climbs, drops and total ascent — the input to timing and route choice.

## Further reading

- Björn Kjellström. *Be Expert with Map and Compass*. The classic civilian compass text.
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- Ordnance Survey. [MapZone map-reading resources](https://www.ordnancesurvey.co.uk/mapzone).

## References

- USGS. [Topographic Map Symbols](https://pubs.usgs.gov/gip/TopographicMapSymbols/topomapsymbols.pdf).
- USGS National Geospatial Program. [Topographic Maps (US Topo, historical topos, topoBuilder)](https://www.usgs.gov/programs/national-geospatial-program/topographic-maps).
- Eric Langmuir. *Mountaincraft and Leadership*. 4th ed., 2013. The UK leader-training text; source of the common Naismith/Langmuir timing corrections.
- The Mountaineers. [Mountaineering: The Freedom of the Hills (10th ed.)](https://www.mountaineers.org/books/books/mountaineering-the-freedom-of-the-hills-10th-edition). The standard mountaineering text since 1960, revised by committee.
- US Army. *TC 3-25.26 Map Reading and Land Navigation*. 2013. Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.
- [Avalanche.org (US avalanche centers)](https://avalanche.org/).
