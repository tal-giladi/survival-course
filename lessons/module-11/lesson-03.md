---
id: "11.3"
module: 11
minutes: 55
practice_minutes: 180
prerequisites: ["11.2"]
objectives:
  - "Explain the weathering processes that change a print over time: drying, crumbling, rounding, infill, overprinting, debris, plant rebound, melt and freeze."
  - "Bracket the age of a trail with dated events (rain, frost, wind, tide, snowfall, traffic) using the principle that what lies on top is younger."
  - "Build and use reference tracks (an aging stand) to calibrate your judgement in your own substrate and weather."
  - "Express age as a range with confidence, not a single time, and recognise the biases that make people over-precise."
level: advanced
volatility: concept
sources:
  - title: "CyberTracker Tracker Certification (2018)"
    url: https://www.cybertracker.org/downloads/tracking/CyberTracker-Tracker-Certification-2018.pdf
  - title: "National Association for Search and Rescue (SARTECH)"
    url: https://www.nasar.org/
last_verified: "2026-09-27"
---

# 11.3 · Aging sign

Age turns a trail into a decision. For a searcher, prints from this morning define where to look; prints from last week should be ruled out quickly so they do not pull teams away. For a traveller, fresh sign of a large animal on your route, or fresh human prints at a water source you thought was remote, changes the plan. Bracketing with events is a reliable, teachable method; unaided guessing is not.

## Explanation

“How old is this?” is the hardest question in tracking and the one that matters most in a search: prints that are hours old point to where someone might be now; prints that are days old point nowhere useful. Experienced trackers are good at it not because they have a magic eye but because they combine **two methods**:

1. **Bracketing with events** — a logical method you can use from today.
2. **Comparison with reference tracks** — a calibrated judgement you build with practice.

### Method 1: bracket with events

The rule is the same as in geology: **what lies on top is younger.**

- If a print **cuts into** something (a layer of fresh snow, rain-pitted mud, fallen leaves, a tyre track), it was made **after** that thing.
- If something **lies on top of** the print (rain pits, frost, a dusting of snow, drifted sand, a later tyre track, a spider web, an insect trail), the print was made **before** it.

Each dated event gives you one edge of a window. Two events can give you both edges.

![Timeline from 18:00 yesterday to 12:00 today. The main snowfall ended at 22:00 and the prints are cut into it, so they were made after 22:00. A snow shower from 01:00 to 02:00 left a dusting inside the prints, so they were made before 02:00. At 10:00 the prints are therefore 8 to 12 hours old.](../../assets/diagrams/s11-aging-bracket.svg)

*Two events bracket the age: after the snowfall ended (22:00), before the shower ended (02:00). At 10:00 the prints are 8–12 hours old.*

Useful dated events:

| Event | You know the time from | Print made **after** if… | Print made **before** if… |
|---|---|---|---|
| Rain stops | Your own observation, camp log, weather records | no raindrop pits inside, pits around | pits inside the print too |
| Snowfall / snow shower | Observation, forecast history | print cut into the new snow | new snow dusting inside |
| Wind (sand, snow, leaves) | Observation | crisp rims, leaves pressed in | drifted material inside, loose leaves on top |
| Frost / dew | Clear calm nights; temperature at dew point | frost broken or dew knocked off | frost crystals intact inside |
| Tide | Tide tables, wrack line | print on washed sand below last high water | — (the sea erases older prints) |
| Traffic | Known vehicle, patrol, your own walk in | print on top of the tyre/boot track | tyre/boot track across the print |
| Day/night animals | Species habits | e.g. nocturnal beetle trails cross the print | — |

### Method 2: reference tracks (an aging stand)

Weathering depends on substrate, sun, shade, humidity, temperature and wind — too many variables for a rule of thumb. So trackers **make their own prints** beside the unknown one, or keep an **aging stand** — a patch of the local substrate where they leave prints at known times and inspect them repeatedly. Compare, in the same light:

- **Colour and moisture:** fresh prints in damp soil are darker; they lighten as the surface dries.
- **Edges and walls:** crisp and sharp at first, then crumbling, then rounded and slumped.
- **Crushed vegetation:** bruised grass is dark and wet at first, then wilts, yellows and **springs back** over hours to days.
- **Debris:** fallen leaves, seeds, needles and insect trails accumulate on top.
- **Snow:** edges soften and prints enlarge with sun and warm air; in cold, walls **set** (sinter) and become firm — a fresh print in cold powder has soft walls you can collapse with a fingertip, an older one has hardened walls.

![Reference prints in the same substrate at 0 hours, about 6 hours, about a day and several days: walls go from crisp and dark to crumbled, rounded and lighter, then collect debris, rain pits and insect trails. Illustrative only — rates depend on substrate and weather.](../../assets/diagrams/s11-aging-stand.svg)

*Reference prints in the same substrate. The rate varies hugely with weather — which is why you make your own.*

> [!NOTE]
> **State age as a range with a confidence**
>
> “Between 8 and 12 hours, confident — two brackets” is useful. “About 3 hours” from edge crispness alone is a guess that sounds like a measurement. In a search, a falsely precise age can send teams in the wrong direction; a range with its reasons lets the search manager weigh it against other clues.

### Biases that make aging worse

- **Wishful aging:** when you want the prints to be your missing friend’s, they look fresh. Write down the evidence before the conclusion.
- **Anchoring:** the first estimate spoken aloud sticks. Have two people estimate independently, then compare.
- **Light:** the same print looks crisp in low-angle light and old in flat light. Compare with the reference in the **same** light.
- **Micro-site:** a print in shade under trees ages far more slowly than one on a sunny bank a metre away.

[Simulation: Tracking Scene](../../simulations/tracking-scene/index.html)

Every scene includes aging: find the events that lie under and over the prints.

## Scientific and technical background

### The arithmetic of bracketing

If a print was made after event $E_1$ at time $t_1$ and before event $E_2$ at time $t_2$, and now is $t_{now}$, its age $a$ satisfies:

$$
t_{now} - t_2 \;\le\; a \;\le\; t_{now} - t_1
$$

In words: the **later** event you are sure the print pre-dates gives the **minimum** age; the **earlier** event it post-dates gives the **maximum** age. With several events, take the **largest** minimum and the **smallest** maximum — the window can only shrink.

**Worked example.** It is 15:00. A farmer drove out at 07:00 and back at 12:00. Dog prints lie on top of the 07:00 tyre track but are cut through by the 12:00 one:

$$
15{:}00 - 12{:}00 = 3\ \text{h} \;\le a\; \le 15{:}00 - 07{:}00 = 8\ \text{h}
$$

### Why prints dry from the edges

A print exposes more surface to air at its rims and ridges than in its floor, so evaporation (driven by the difference between the vapour pressure at the wet surface and in the air) dries edges first; drying soil loses cohesion and crumbles. Evaporation is faster with **sun, wind, warmth and low humidity** — so in a desert noon a print can look "old" in an hour, while in a humid shaded forest it may look "fresh" for a day. Dew point from Stage 12 matters too: on nights when the ground cools below the dew point, dew or frost forms on and in older prints, giving you a new dated layer.

### Snow: melting, sublimation and sintering

Sun and warm air erode print walls (melt and sublimation), rounding and enlarging the print. In cold snow the opposite happens to the walls themselves: ice grains bond together over time (**sintering**), so the disturbed snow of a print hardens. That is why trackers gently test wall firmness against a fresh reference print made beside it.

## Examples

**Temperate forest, after overnight rain.** Rain stopped at 03:00. Prints on top of rain-pitted mud with smooth floors: made after 03:00. Human prints with pits inside: made before the rain stopped — older than your missing walker’s start time.

**Desert.** A sandstorm blew until 19:00. Every crisp print on the dunes is younger than that; beetle and lizard trails running across a print show it was there before those animals became active in the morning.

**Mountain.** Rockfall debris or fresh hail lying in prints dates them before the storm; prints on top of hail are after it.

**Arctic / subarctic.** A snow shower is the best clock you have. A dusting inside prints after a 01:00–02:00 shower, prints cut into snowfall that ended at 22:00: 8–12 hours old at 10:00. Sun on south-facing slopes ages prints far faster than on shaded north slopes.

**Coast.** High water is a daily eraser: every print below the last high-tide line is younger than that high tide. A tide table turns this into a precise clock.

**Urban.** Dust on a floor after an earthquake, a layer of ash after a wildfire, snow on a pavement: the earliest time the layer formed brackets every print on it. Rescue teams use the same logic when they check whether a building has been entered.

**Rural.** Tractor, patrol or school-bus tracks at known times are excellent brackets; so are the prints of your own party on the way in.

## Common mistakes

- Giving a single time (“2 hours”) instead of a range with the reasoning.
- Aging from edge crispness alone, without looking for events above and below the print.
- Comparing a print in the shade with a reference in the sun (or in different light).
- Letting what you hope (your missing friend’s prints) set the age.
- Forgetting that one event only gives one edge: “after the rain” means 0 to N hours, not “fresh”.
- Myth: “an experienced tracker can age any print to the hour at a glance.” Experts give ranges, check references and still disagree in difficult substrates.

## Practical exercises

### Build and read an aging stand

Level 3 (Safe physical) · 🏠 Home · about 120 min

**Materials:** A patch of garden soil or a large tray outdoors; Labels or small sticks; Phone camera; Notebook and a weather log

**Steps**

1. Smooth the substrate. Make a set of prints (hand-paw, shoe) and label them with the time.
2. Photograph each set straight down, with a scale, at 0 h, 1 h, 3 h, 6 h, 12 h, 24 h, 48 h and 72 h — always with the same side light (a torch at dusk works well).
3. Log the weather: sun or shade, rain, wind, overnight temperature, dew or frost.
4. After 72 h, make a fresh print and have a friend make one at a time you do not know. Estimate its age as a range using your stand.
5. Repeat in another season or substrate (sand, snow) and compare the rates.

**You have it when**

- A photo series for at least 5 time points with a weather log.
- Your blind estimate’s range contains the true age.

Builds the skill: Age sign with reference tracks and event brackets.

### Event-bracket practice on a walk

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Stay on legal paths; observe wildlife trails without following fresh sign of large animals.

Level 2 (Simulation) · 🌲 Outdoor · about 60 min

**Materials:** Notebook; Watch; Local weather record for the last 48 h

**Steps**

1. Before the walk, write down the known events of the last 48 hours: when rain or snow started and stopped, wind, frost, tides.
2. On the walk, find five sets of prints. For each, look for an event lying on top of the prints and one lying under them.
3. Write each age as a range with the reasoning, e.g. “after rain stopped 18:00, before frost ~02:00 → 7–15 h”.
4. Check two of them with a reference print you make beside them.

**You have it when**

- Five ranges written with explicit brackets.
- At least two brackets are two-sided (both a minimum and a maximum).

Builds the skill: Age sign with reference tracks and event brackets.

## Scenario question

You are helping (under a team leader) at a search for a 14-year-old who walked away from a campsite at about 08:00 this morning. It is 13:00. On a sandy stream bank 2 km away you find trainer prints of about the right size heading upstream. A thunderstorm with heavy rain passed between 10:00 and 10:30; the prints show no raindrop pits and have crisp edges, and the rain-pitted sand around them has been crushed by the prints.

**What is the best report?**

1. “Found the kid’s prints — fresh — going upstream!” and run upstream to catch up.
2. Radio the team leader: “Trainer prints, about 24 cm, heading upstream; on top of the 10:00–10:30 rain pits, so made after 10:30 — 0 to 2.5 hours old. Photos with scale taken, location marked; we are keeping off the sign.”
3. Say nothing, because you cannot be sure they are the child’s.
4. Estimate “about 4 hours old” from how the edges look and report that.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** The storm is a dated layer under the prints: they were made after 10:30, so they are at most 2.5 hours old at 13:00. That fits the missing child (who left at 08:00) and is a high-value clue with a direction. The report gives what, where, which way, how old and why — and the team protects the sign so trained trackers can work it. Staying in the search structure (Stage 1: don’t create a second casualty; Lesson 6) matters more than speed on your own.

- **1.** Leaving your assignment and running ahead alone breaks the search structure and may destroy further sign.
- **2.** Best: clear bracket with its reason, direction, size, records, and scene protection.
- **3.** Uncertain clues are still clues. Reporting lets the manager decide; silence loses information.
- **4.** The rain gives you a much better bracket than edge appearance — and it contradicts 4 hours.

</details>

## Summary

- **What lies on top is younger.** Print cut into a layer → after it; layer on top of the print → before it.
- Age window: minimum = now − (latest event on top); maximum = now − (earliest event underneath). Multiple events only narrow it.
- Reference prints in the **same substrate and light** calibrate judgements of drying, crumbling, rounding and debris.
- Weathering rates vary hugely with sun, shade, wind, humidity and substrate — no universal rule of thumb.
- Report age as a **range with reasons**, never a falsely precise number; guard against wishful aging and anchoring.

## Further reading

- Louis Liebenberg. *The Art of Tracking: The Origin of Science*. 1990. Tracking as hypothesis-testing, drawn from San trackers of the Kalahari; by the founder of CyberTracker.
- Albert “Ab” Taylor and Donald C. Cooper. *Fundamentals of Mantracking: The Step-by-Step Method*. The classic SAR text on step-by-step human tracking, prime prints and the tracking stick.
- CyberTracker Conservation. [CyberTracker Tracker Certification (2018)](https://www.cybertracker.org/downloads/tracking/CyberTracker-Tracker-Certification-2018.pdf). 2018. The international track-and-sign and trailing evaluation standard (Levels 1–3, Professional, Specialist).

## References

- Louis Liebenberg. *The Art of Tracking: The Origin of Science*. 1990. Tracking as hypothesis-testing, drawn from San trackers of the Kalahari; by the founder of CyberTracker.
- Albert “Ab” Taylor and Donald C. Cooper. *Fundamentals of Mantracking: The Step-by-Step Method*. The classic SAR text on step-by-step human tracking, prime prints and the tracking stick.
- Mark Elbroch and Casey McFarland. *Mammal Tracks & Sign: A Guide to North American Species (2nd ed.)*. 2019. The standard detailed reference for mammal tracks, gaits, feeding sign and scat, with measurements and photographs.
- CyberTracker Conservation. [CyberTracker Tracker Certification (2018)](https://www.cybertracker.org/downloads/tracking/CyberTracker-Tracker-Certification-2018.pdf). 2018. The international track-and-sign and trailing evaluation standard (Levels 1–3, Professional, Specialist).
- [National Association for Search and Rescue (SARTECH)](https://www.nasar.org/).
