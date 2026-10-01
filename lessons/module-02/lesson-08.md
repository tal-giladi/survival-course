---
id: "02.8"
module: 2
minutes: 45
practice_minutes: 75
prerequisites: ["02.3"]
objectives:
  - "Predict roughly where the sun rises, peaks and sets for your latitude and season — and why “rises in the east” is only approximately true."
  - "Find solar noon from clock time, correcting for time zone, daylight saving and the equation of time."
  - "Get an east–west line from a shadow stick, and an exact north–south line from the equal-shadow method."
  - "Use the watch method, estimate its error, and know where it fails."
level: intermediate
volatility: concept
sources:
  - title: "NOAA Solar Calculator"
    url: https://gml.noaa.gov/grad/solcalc/
  - title: "General Solar Position Calculations"
    url: https://gml.noaa.gov/grad/solcalc/solareqns.PDF
  - title: "The Natural Navigator"
    url: https://www.naturalnavigator.com/
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
  - title: "Walking straight into circles"
    url: https://doi.org/10.1016/j.cub.2009.07.053
last_verified: "2026-09-27"
---

# 02.8 · Sun and shadow navigation

If your compass is lost, broken or doubted, the sun is the next most reliable direction source by day. Knowing its real behaviour — and how wrong the popular shortcuts can be — lets you keep a steady line instead of walking in circles, and tells you when a sun estimate is good enough and when it is not.

## Explanation

> [!CAUTION]
> **Eye safety**
>
> Never look at the sun — not briefly, not through sunglasses, binoculars or a camera. Every method in this lesson works from **shadows** or from pointing at the sun’s direction without looking at it.

The sun is the most widely available direction-finder — but it moves, and its path changes with **latitude** and **season**. Used with that in mind, it gives direction to within 5–15°. Used carelessly, it can be out by 30° or more.

### Where the sun rises and sets

- Only near the **equinoxes** (around 20 March and 22–23 September) does the sun rise almost due **east** (090°) and set almost due **west** (270°), everywhere on Earth.
- In the **northern summer** it rises north of east and sets north of west; in the northern winter, south of east and south of west (reversed seasons in the southern hemisphere).
- The swing grows with latitude. At **40° N** at midsummer, sunrise is at about **059°** — roughly 31° north of east. At **60° N** it is about **037°**. At the **equator** it is about **067°**.

![Sun paths across the sky at the equator, 40 degrees north and 60 degrees north for solstices and equinox](../../assets/diagrams/sun-path.svg)

*Sun paths at the equator, 40° N and 60° N at the solstices and equinox, with sunrise azimuths.*

### Solar noon: the sun’s best moment

At **solar noon** the sun is highest and crosses the meridian:

- North of the Tropic of Cancer (about 23.4° N): due **south**.
- South of the Tropic of Capricorn: due **north**.
- **In the tropics** it can be north, south or almost straight overhead, depending on the date — so noon direction is unreliable there.

Solar noon is **not** 12:00 on your watch. It shifts with where you are in your time zone (4 minutes per degree of longitude), with **daylight saving** (+1 h), and with the **equation of time** (the sun runs up to about 14 minutes slow in February and 16 minutes fast in early November). A clock-noon “the sun is south now” can easily be an hour out.

### The shadow-stick method

1. Push a straight stick (about 1 m) upright into level ground.
2. Mark the tip of its shadow with a stone (**first mark**).
3. Wait **15–30 minutes**; mark the new tip (**second mark**).
4. The line **first → second** points roughly **west → east** (the shadow moves opposite to the sun). This is true in both hemispheres.
5. Stand with the first mark on your left and the second on your right: you face roughly **north**. A perpendicular to the line gives north–south.

![Shadow-stick method: two marks of the shadow tip give a west to east line](../../assets/diagrams/shadow-stick.svg)

*Shadow tip marked twice; first → second mark runs roughly west → east; the perpendicular gives north–south.*

**Accuracy.** At the equinox the shadow tip traces a straight east–west line all day, so the method is excellent. At other dates the tip traces a curve. Around midday at mid-latitudes the curve runs very close to east–west; early and late in the day, near the solstices and at high latitudes, the error grows. In the **tropics near noon** the shadow is short and may swing quickly, so errors can be large.

**The equal-shadow (equal-altitude) method** is exact: mark the shadow tip mid-morning and draw a circle through it centred on the stick base. In the afternoon, mark where the shadow tip touches the circle again. The two marks lie on an exact east–west line, and the line from the stick base to their midpoint is true **north–south**. It takes hours, but at camp it gives a reference line you can trust.

### The watch method

With an **analogue watch** set to standard (not daylight-saving) time:

- **Northern hemisphere:** hold the watch flat, point the **hour hand** at the sun. **South** lies midway between the hour hand and **12**.
- **Southern hemisphere:** point **12** at the sun. **North** lies midway between 12 and the hour hand.
- On **daylight saving** time, use **1 o’clock** instead of 12.

Before noon, bisect the angle going forward to 12; after noon, back to 12 — always use the smaller angle.

![Watch method for northern and southern hemispheres at 16:00 solar time](../../assets/diagrams/watch-method.svg)

*Watch method: northern hemisphere (hour hand on sun, bisector to 12 = south) and southern hemisphere (12 on sun, bisector = north).*

[Simulation: Sky Navigator](../../simulations/celestial/index.html)

Set date, time and latitude. Compare the true solar azimuth with what the watch method predicts — find where it fails.

[Simulation: Navigation Simulator](../../simulations/nav-map/index.html)

Try the sun-only mode: walk legs using the sun instead of a compass and see how ±10–15° errors grow.

## Scientific and technical background

### Sunrise azimuth

In words: the sunrise direction depends on how far the sun is north or south of the celestial equator that day (its **declination** $\delta$, between −23.4° and +23.4°) and on your **latitude** $\varphi$. Measured from north, and ignoring refraction:

$$
\cos A_{\text{rise}} = \frac{\sin\delta}{\cos\varphi}
$$

**Worked example.** Midsummer ($\delta = 23.4^\circ$) at $\varphi = 40^\circ$: $\sin 23.4^\circ / \cos 40^\circ = 0.398 / 0.766 = 0.519$, so $A \approx 58.7^\circ$. At the equinox $\delta = 0$, $\cos A = 0$, and $A = 90^\circ$ — due east, at any latitude.

### Hour angle versus azimuth

The sun’s **hour angle** — its position around the sky’s axis — changes a steady **15° per hour** (360° in 24 h). Its **azimuth** (compass direction) does not. Near noon, when the sun is high, azimuth changes fast; in the morning and evening it changes slowly. At 40° N at midsummer, 09:00 solar time puts the sun at azimuth ≈ 100°, and 11:00 at ≈ 138° — 38° in two hours, then 42° more in the last hour before noon.

### Why the watch method goes wrong

The hour hand turns 30° per hour; halving the angle to 12 turns that into 15° per hour — the method assumes **azimuth changes 15° every hour**. That is only true when the sun’s path is nearly horizontal (high latitudes, low sun). Worked example, 40° N midsummer, 09:00 solar time: the watch places the sun at $180^\circ - 3 \times 15^\circ = 135^\circ$, but the real azimuth is ≈ 100°. Your “south” is **35° wrong**. The same time in midwinter: real azimuth ≈ 138°, error only ≈ 3°. In the tropics near noon the sun can be almost overhead and swing from east to west in minutes — the method is useless there.

### Solar noon from clock time

The sun crosses 15° of longitude per hour, so **1° of longitude = 4 minutes**. Worked example: you are at 80° W in a zone whose reference meridian is 75° W, on daylight saving, in mid-July (sun about 6 minutes slow):

$$
12{:}00 + 5^\circ \times 4\ \text{min} + 60\ \text{min} + 6\ \text{min} = 13{:}26
$$

At 12:00 on the clock the sun is still 86 minutes from solar noon; at 40° N it is then at azimuth ≈ 129°, so “12:00 = south” would be about **50° wrong**.

## Examples

**Desert, midsummer.** At 25° N at midday the sun is close to overhead and shadows are tiny. Direction work waits until mid-afternoon, when shadows lengthen — the same hours you should rest in shade anyway.

**Subarctic, midsummer.** At 65° N the sun stays up almost around the clock and never climbs above about 50°. Azimuth moves close to 15° per hour, so the watch method works relatively well — but sunrise is only about 20° east of north, so “the sun rose over there, that’s east” is badly wrong.

**Tropical rainforest.** Canopy hides the sun; bright patches and shadow directions help only in clearings, and noon direction may be north or south depending on the month.

**Mountain.** Deep valleys delay sunrise and hasten sunset; the direction of the first sunlight hitting a peak is still the sun’s azimuth, not “east”.

**Coastal, temperate.** A kayaker in winter at 50° S uses the sun in the north at midday as a steering reference, checking the clock correction first.

**Urban.** Tall buildings throw long, crisp shadows — an easy shadow-stick if you mark a lamp post’s shadow tip on a pavement.

## Common mistakes

- Myth: “The sun always rises due east and sets due west.” Only near the equinoxes; at 40° N the sunrise can be 30° either side of east.
- Myth: “At 12:00 the sun is due south.” Time zones, daylight saving and the equation of time can shift solar noon by more than an hour.
- Forgetting daylight saving in the watch method (use 1 o’clock, not 12).
- Using the watch method in the tropics or with a high summer sun, where errors reach 30° or more.
- Using the shadow-stick near noon in the tropics, or with marks only a couple of minutes apart.
- Looking at the sun to judge its position.

## Practical exercises

### Shadow-stick versus compass

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Watch the shadow, never the sun. Wear sun protection and drink water on hot days.

Level 2 (Simulation) · 🌲 Outdoor · about 45 min

**Materials:** A straight stick about 1 m long; Small stones or pegs; Compass (for checking); Watch

**Steps**

1. On level, sunny ground, set the stick upright. Mark the shadow tip.
2. After 15 minutes, mark again; after 30, mark a third time.
3. Draw the west → east line and its perpendicular.
4. Check against the compass (corrected for local declination). Record the error for the 15- and 30-minute lines.
5. Repeat at a different time of day or season and compare.

**You have it when**

- North–south line within about 10° of the compass.
- You can explain why your error was larger or smaller at different times.

Builds the skill: Navigation without instruments.

### Watch method error log

> [!CAUTION]
> **Virtual only.** Simulate only. Do not attempt physically.

Level 1 (Knowledge) · 🖥️ Virtual only · about 30 min

**Materials:** The celestial simulator (or the NOAA Solar Calculator)

**Steps**

1. Pick your latitude. For a summer and a winter date, check the sun’s true azimuth at 08:00, 10:00, 14:00 and 16:00 solar time.
2. For each, compute where the watch method would place south, and the error.
3. Repeat at 10° and 60° latitude.

**You have it when**

- A table of errors showing where the method is usable and where it is not.

Builds the skill: Navigation without instruments.

## Scenario question

Your compass was lost in a river crossing. You are in open savanna at about 12° S in December, it is 11:30 and 36 °C. Your route home runs roughly west along a line of low hills you can no longer see. You have 3 L of water and a hat; shadows are very short.

**What is the best plan?**

1. Use the watch method right now to find west and start walking straight away.
2. Rest in shade through the heat, use a shadow stick mid-afternoon, walk west late in the day.
3. Walk directly away from the sun now, keeping it at your back to hold a line.
4. Wait for sunset, then walk toward where it set through the night to stay cool.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** At 12° S in December the sun passes almost overhead at noon, so neither the watch nor a quick shadow reading is trustworthy. Mid-afternoon shadows are long and a 20–30 minute shadow stick gives a usable east–west line. Resting through midday is the Stage 1 heat-balance and water decision; the navigation plan fits it rather than fighting it.

- **1.** Near noon in the tropics the sun is almost overhead; the watch method can be wildly wrong — and walking at midday costs water fast.
- **2.** Best — protects heat balance and water, and waits for long shadows when the shadow stick works well.
- **3.** The sun is nearly overhead; “away from it” has no reliable direction at this time.
- **4.** The December sunset at 12° S is well south of west, and night travel adds fall and navigation risk.

</details>

## Summary

- The sun rises due east and sets due west only near the equinoxes; the swing grows with latitude.
- Solar noon: due south (north of 23.4° N), due north (south of 23.4° S); correct clock time for longitude (4 min/°), daylight saving and the equation of time.
- Shadow stick: first mark → second mark ≈ west → east; the equal-shadow method gives an exact north–south line.
- Watch method: assumes 15° of azimuth per hour — good for a low sun, poor for a high sun, useless near noon in the tropics.
- Never look at the sun; work from shadows.

## Further reading

- Tristan Gooley. [The Natural Navigator](https://www.naturalnavigator.com/). Popular (not peer-reviewed) but careful modern writing on sun, star, plant and weather clues, including their limits.
- NOAA Global Monitoring Laboratory. [NOAA Solar Calculator](https://gml.noaa.gov/grad/solcalc/). Sunrise, sunset, solar noon and solar azimuth/elevation for any place and date. No longer actively maintained, but still accurate for learning.

## References

- NOAA Global Monitoring Laboratory. [NOAA Solar Calculator](https://gml.noaa.gov/grad/solcalc/). Sunrise, sunset, solar noon and solar azimuth/elevation for any place and date. No longer actively maintained, but still accurate for learning.
- NOAA Global Monitoring Laboratory. [General Solar Position Calculations](https://gml.noaa.gov/grad/solcalc/solareqns.PDF). Two-page summary of the declination, equation-of-time and hour-angle formulas used in this stage’s celestial simulator.
- Jean Meeus. *Astronomical Algorithms (2nd ed.)*. 1998. The standard reference for computing Sun, Moon and star positions.
- Tristan Gooley. [The Natural Navigator](https://www.naturalnavigator.com/). Popular (not peer-reviewed) but careful modern writing on sun, star, plant and weather clues, including their limits.
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- Souman JL, Frissen I, Sreenivasa MN, Ernst MO. [Walking straight into circles](https://doi.org/10.1016/j.cub.2009.07.053). 2009. Current Biology 19(18):1538–1542. GPS-tracked walkers without sun or landmarks repeatedly walked in circles.
