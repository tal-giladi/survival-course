---
id: "14.3"
module: 14
minutes: 60
practice_minutes: 150
prerequisites: ["14.2", "02.12"]
objectives:
  - "Describe who runs a search and how it unfolds: urgency, initial response, planning, operational periods."
  - "Explain how planners use the last known point, lost-person behaviour statistics and expert consensus to assign a probability of area (POA) to each segment."
  - "Calculate coverage, probability of detection (POD) and probability of success (POS), and update POAs with Bayes’ rule after an unsuccessful search."
  - "Distinguish hasty, efficient and thorough tactics, confinement, attraction and clue searching."
  - "Explain what the missing person can do to raise their own probability of being detected."
level: advanced
volatility: concept
sources:
  - title: "Lost Person Behavior"
    url: https://www.dbs-sar.com/LostPersonBehavior.htm
  - title: "National Association for Search and Rescue (SARTECH)"
    url: https://www.nasar.org/
  - title: "Mountain Rescue Association"
    url: https://mra.org/
  - title: "Mountain Rescue England and Wales"
    url: https://www.mountainrescue.org.uk/
  - title: "International Commission for Alpine Rescue (ICAR)"
    url: https://www.alpine-rescue.org/
last_verified: "2026-09-27"
---

# 14.3 · How searches work

Understanding POA, POD and sweep width explains the advice you have heard all course: stay put, get into the open, be bright, answer, leave a trip plan. Each of those moves a number that searchers use to decide where to go next. For planners and volunteers, the same arithmetic turns a limited number of searcher-hours into the highest chance of finding someone alive.

## Explanation

Knowing how searchers think changes what you do when you are the one who is missing. A search is not a crowd wandering the woods; it is a planned allocation of scarce people, hours and aircraft to the places where the subject most probably is **and** can most probably be seen.

### Who searches

Responsibility differs by country and setting: police, a sheriff, a park service or a national rescue coordination centre (for aircraft and ships) usually **owns** the incident; volunteer mountain, cave, cave-diving and lowland search teams, coast guards, air ambulances and military aircraft do much of the searching. Teams use an incident command structure so that dozens of groups can work to one plan.

### The first hours

1. **Urgency.** Age, medical needs, weather, terrain hazards, experience and equipment decide how fast and how big the response is. A lightly dressed child in falling temperatures is a top-urgency search; a well-equipped adult overdue on a calm summer evening may start with phone calls.
2. **Where to start.** The **point last seen (PLS)** or **last known point (LKP)** — a car at a trailhead, a phone location, a photo, a register entry — anchors the search.
3. **Reflex tasks.** Fast **hasty teams** check the route, trails, known hazards (cliffs, water) and attractions (viewpoints, huts); **confinement** puts people at trailheads, road crossings and bridges so the subject cannot pass unseen; **investigation** gathers clothing colours, footwear tread, plans, phone data and habits.
4. **Lost-person behaviour.** Planners look up statistics from thousands of past incidents (Koester’s *Lost Person Behavior*) for someone like the subject — hiker, child, person with dementia, hunter, climber — including **distance rings** within which a given share of similar subjects were found, and typical behaviours (following trails or drainages, heading for high ground, hiding, sheltering).

### Probability of area, detection and success

The planner divides the area into **segments** with clear boundaries (paths, streams, ridges) sized for a team to search in a few hours. Then:

- **POA** (probability of area): how likely the subject is in each segment. Several experienced people estimate it independently and combine their estimates (a **consensus**), guided by the LKP, lost-person statistics, terrain and clues. The probability that the subject is outside every segment is called **rest of world (ROW)**.
- **POD** (probability of detection): how likely a given search of a segment would find the subject **if they are there**. It depends on how much ground the searchers effectively “sweep” relative to the segment’s size.
- **POS** (probability of success) = POA × POD. This is what the plan tries to maximise.

After a segment is searched **without** finding the subject, it becomes **less** likely they are there, and every other segment — including ROW — becomes **more** likely. This is **Bayes’ rule**, and it is how modern search planning shifts effort from period to period.

![A search area divided into segments A, B and C plus rest of world. Before: A 40 percent, B 30, C 20, rest of world 10. Segment A is searched with POD 80 percent, giving POS 32 percent. After the unsuccessful search, Bayes’ rule gives A 12 percent, B 44, C 29, rest of world 15.](../../assets/diagrams/s14-poa-segments.svg)

*Segment A is searched with POD 80 % and nothing is found: A’s probability drops, all others rise.*

### Sweep width and coverage

**Sweep width** $W$ is a searcher’s effective detection “width”: the number of metres of ground a single pass truly covers for **this** kind of object, in **this** terrain and light. It is measured in detection experiments, not guessed. It is wide for a large, bright, moving, responsive subject on open ground; narrow for a small, dark, silent one in thick brush.

**Coverage** is how many times, on average, the segment has been effectively swept:

$$
C = \frac{W \times L}{A}
$$

where $L$ is the total track length walked (or flown) and $A$ the area. POD grows with coverage — but with **diminishing returns** (see the science section).

![Probability of detection against coverage. POD equals one minus e to the minus coverage. Coverage 0.5 gives 39 percent, coverage 1 gives 63 percent, coverage 2 gives 86 percent: doubling effort gives diminishing returns.](../../assets/diagrams/s14-pod-curve.svg)

*POD rises quickly at first and then flattens: the second pass finds less than the first.*

[Simulation: Search Planner](../../simulations/search-sim/index.html)

Plan three operational periods. Put effort where POA × marginal POD is highest, then watch the Bayesian update move it.

### Search tactics

- **Hasty (Type I):** small, fast, experienced teams check the highest-probability places and hazards first — trails, the LKP, drainages, viewpoints, huts — calling and listening. High POS per hour at the start.
- **Efficient (Type II):** searchers spaced widely sweep a segment. The best POD per searcher-hour for responsive subjects and larger clues.
- **Thorough (Type III):** searchers close together in a line. High POD, but slow, tiring and it tramples clues — used later, for small segments, or for evidence or unresponsive subjects.
- **Confinement:** trail blocks, road patrols, **track traps** (smoothed sand or snow across a path that record whoever passes).
- **Attraction:** sirens, whistles, lights, calling the name — then **silence to listen**.
- **Other resources:** air-scent and trailing dogs, helicopters and aircraft flying set patterns, drones with cameras or thermal imaging, and phone data.

**Clues** vastly outnumber subjects — footprints, a dropped wrapper, a broken branch, a witness. Teams are trained in **clue awareness**, because each clue can reshape POAs dramatically.

![Three search tactics. Hasty (Type I): a few fast, trained searchers check trails, the point last seen and likely spots, calling and listening. Efficient (Type II): widely spaced searchers sweep a segment, high POD per hour. Thorough (Type III): closely spaced searchers in a line, high POD but slow and destroys clues. Confinement and attraction run alongside.](../../assets/diagrams/s14-search-tactics.svg)

*Hasty, efficient and thorough tactics trade speed against detection per pass.*

> [!TIP]
> **What the missing person controls**
>
> Your behaviour sets both POA and POD.
>
> - **Stay put** once you are lost (Lesson 4): a moving subject makes searched segments “refill” and spreads probability into ROW.
> - **Be big and bright** in the open: it widens the sweep width of every searcher and aircraft.
> - **Respond:** answer calls, whistle back, flash a light. Unresponsive subjects need thorough, slow tactics.
> - **Leave clues:** a note at the car, arrows at junctions, a bright item where you left the trail.
> - **Tell someone your plan before you go** (Stage 1): it gives planners a route, an LKP and a start time.

> [!NOTE]
> **Want to help? Train with a team**
>
> Search and rescue relies heavily on trained volunteers. Spontaneous helpers without training can obliterate tracks and clues and become casualties themselves. If this lesson interests you, contact a local search and rescue team or a national body (e.g., NASAR’s SARTECH training in the US, Mountain Rescue in the UK, national members of ICAR in the Alps) and train properly.

## Scientific and technical background

### POD from coverage

Search theory (Koopman, developed for naval search and adopted by maritime and land SAR) models detection as many small, independent chances along the searchers’ tracks. That gives the **exponential detection function**:

$$
\text{POD} = 1 - e^{-C}
$$

In words: each extra unit of coverage finds a fixed **fraction** of what is still unfound. $C = 0.5$ gives 39 %, $C = 1$ gives 63 %, $C = 2$ gives 86 %, $C = 3$ gives 95 %.

**Worked example.** Segment area $A = 2$ km², sweep width $W = 40$ m $= 0.04$ km, one team walks $L = 10$ km: $C = 0.04 \times 10 / 2 = 0.2$, so POD $= 1 - e^{-0.2} \approx 18\%$. Five teams ($L = 50$ km): $C = 1$, POD ≈ 63 %.

**Repeated searches.** Two searches with POD 50 % each do **not** make 100 %: the cumulative POD is $1 - (1-0.5)(1-0.5) = 75\%$. (Equivalently, coverages add: $1 - e^{-(C_1 + C_2)}$.)

### Bayes’ rule after an unsuccessful search

If segment $i$ had probability $\text{POA}_i$ and was searched with $\text{POD}_i$ without success, then

$$
\text{POA}_i' = \frac{\text{POA}_i (1 - \text{POD}_i)}{1 - \sum_j \text{POA}_j\,\text{POD}_j}
$$

The numerator is the chance the subject is in $i$ **and** was missed; the denominator is the total chance that the search failed. Unsearched segments (and ROW) have $\text{POD} = 0$, so their POA rises by the same factor.

**Worked example.** A 40 %, B 30 %, C 20 %, ROW 10 %. A is searched with POD 80 % (POS = 32 %). Failure probability = 0.68. New values: A $= 0.4 \times 0.2 / 0.68 \approx 12\%$, B $= 0.3/0.68 \approx 44\%$, C $\approx 29\%$, ROW $\approx 15\%$.

### Where to put the next team

Because POD flattens, the **marginal** gain of one more searcher-hour in segment $i$ is proportional to $\text{POA}_i \times (W_i v_i / A_i) \times e^{-C_i}$ (speed $v_i$). Good plans give each additional hour to the segment with the highest marginal gain. That is why effort goes first to **small, high-probability segments where searchers see well**, and why a dense, low-probability forest may get little effort until other segments have been searched down.

## Examples

**Forest (temperate):** a hiker’s car at a trailhead. Hasty teams walk the loop and side trails; confinement at road crossings; dogs from the car; later, efficient sweeps of the drainages that lost-person data suggest.

**Mountain:** helicopters search open slopes and ridges quickly where weather allows; ground teams handle gullies and forest. Avalanche debris is a special case with its own methods (transceivers, probes, dogs) taught on avalanche courses.

**Desert:** tracks last in sand and on crusted soil; trackers and track traps are powerful. Aircraft see far, but heat makes time critical — urgency is high.

**Arctic and subarctic:** snow records tracks until wind or new snow erases them; searchers and aircraft face short days and cold. Beacons and messengers dominate modern responses.

**Tropical forest:** visibility of a few metres means narrow sweep widths; searches follow rivers and trails, and rely on sound and on subjects moving to river banks or clearings.

**Coastal and marine:** maritime search patterns (expanding square, parallel track) with drift calculations for currents and wind; an EPIRB or PLB changes everything.

**Rural and urban:** people with dementia and young children are the most common urban-fringe searches; they may hide, shelter in outbuildings or dense cover, and not respond to their name, so thorough tactics near the LKP matter.

## Common mistakes

- Myth: searchers comb every square metre evenly. Effort goes where POA × POD per hour is highest; that changes as segments are searched.
- Myth: two searches at 50 % POD make 100 %. They make 75 %.
- Myth: an unsuccessful search of a segment proves the person is not there. It lowers the probability; it does not make it zero.
- Hiding from or not answering searchers (common in children and in embarrassed adults), which forces slow, thorough tactics.
- Walking on after hearing a helicopter, leaving the searched area and spreading probability into ROW.
- Well-meaning untrained volunteers trampling tracks and clues around the LKP.
- Leaving no trip plan, so there is no route, LKP or start time for planners to work from.

## Practical exercises

### Tabletop search plan

Level 2 (Simulation) · 🏠 Home · about 60 min

**Materials:** A topographic map (paper or online) of an area you know; Calculator; Optional: a friend to act as a second “consensus” planner

**Steps**

1. Choose an LKP (e.g., a car at a trailhead) and a subject (e.g., a day hiker, overdue 4 h).
2. Divide the area into 5–6 segments with natural boundaries. Estimate the area of each.
3. Each planner assigns POAs independently (including ROW); average them.
4. Assign a sweep width to each segment by terrain (e.g., 60 m open, 30 m mixed, 15 m dense) and give yourself 24 searcher-hours at 2 km/h. Compute C and POD for your allocation, and total POS.
5. Assume nothing is found; update the POAs with Bayes’ rule and plan the second period.

**You have it when**

- Your POAs sum to 100 %.
- Your second-period plan moves effort in the direction the Bayesian update suggests, and you can say why.

Builds the skill: Making yourself findable.

### Sweep-width detection experiment

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Stay on easy ground with permission; do not leave any object behind. Wear bright clothing yourself.

Level 2 (Simulation) · 🌲 Outdoor · about 90 min

**Materials:** 10 objects: 5 bright (orange/red cloth), 5 dull (brown/green cloth), each about the size of a folded jacket; Measuring tape or pacing; A partner; A small wood or park with permission

**Steps**

1. Your partner hides the objects at measured distances from a straight path (5, 10, 15, 20, 30 m) on both sides, without you watching.
2. Walk the path once at normal search pace, looking both sides; note each object you see and don’t leave the path.
3. Record which objects at which distances you detected. Repeat with roles swapped.
4. Estimate an effective sweep width for bright and for dull objects: roughly, the width of a strip in which you would have found as many as you actually found.

**You have it when**

- You have measured, not guessed, that bright objects have a far wider sweep width than dull ones in this vegetation.

Builds the skill: Making yourself findable.

## Scenario question

You are helping plan the first night of a search for a 70-year-old walker overdue on a forest loop. It is 20:00, 4 °C and falling, with rain forecast after midnight. You have 8 trained searchers and a dog team. The loop passes a ridge viewpoint and a steep stream gorge. The walker is known to be careful and to carry a phone, which is going straight to voicemail.

**How should the first period’s effort be used?**

1. Put all 8 searchers in a tight line and grid the largest forest block thoroughly.
2. Hasty teams walk the loop and side trails calling and listening, check the viewpoint and the gorge edge; confinement at the car park and road crossings; the dog team from the LKP; and the planner builds segments and POAs for the morning.
3. Wait for daylight to start, to protect the searchers.
4. Send everyone to the gorge because it is the most dangerous place.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Early in a search, **hasty tactics, hazards and confinement** buy the most probability of success per hour, while planners build segments and POAs. The weather and the walker’s age (Stage 8: hypothermia risk) set a high urgency; night is not a reason to wait for trained teams on trails.

- **1.** Slow, low POS per hour at the start, and it ignores the trail, viewpoint and gorge where POA × POD is highest.
- **2.** Best: high POS per hour early, hazards checked, the subject cannot pass unseen, and the plan for later periods is prepared.
- **3.** An older person at 4 °C with rain coming is urgent (Stage 8); trained teams can safely search trails and hazards at night.
- **4.** The gorge must be checked, but putting all effort into one segment ignores the higher probability along the trail and leaves no confinement.

</details>

## Summary

- Searches start from the LKP, urgency and lost-person behaviour; hasty teams, confinement and investigation come first.
- POS = POA × POD. Coverage $C = WL/A$; $\text{POD} = 1 - e^{-C}$ — diminishing returns.
- After an unsuccessful search: $\text{POA}_i' = \text{POA}_i(1-\text{POD}_i)/(1-\text{POS})$ — searched segments fall, others and ROW rise.
- Effort goes where POA × marginal POD per hour is highest: small, likely, open segments first.
- Tactics: hasty, efficient, thorough; confinement; attraction; clues; dogs; aircraft and drones.
- You raise your own POD: stay, be big and bright, respond, leave clues, leave a trip plan.

## Further reading

- Robert J. Koester. [Lost Person Behavior](https://www.dbs-sar.com/LostPersonBehavior.htm). 2008. Statistical profiles of how lost people behave (ISRID, >145,000 incidents). Used by SAR planners worldwide.
- Donald C. Cooper, J. R. Frost, R. Quincy Robe. *Compatibility of Land SAR Procedures with Search Theory*. 2003. Report reconciling land SAR practice (POA, POD, segments, consensus) with search theory; introduced effective sweep width and detection experiments to land search planning.
- National Association for Search and Rescue (NASAR). *Fundamentals of Search and Rescue*. 2005. Textbook for NASAR’s FUNSAR course and SARTECH II: SAR system, search tactics, clue awareness, lost-person behaviour.

## References

- Robert J. Koester. [Lost Person Behavior](https://www.dbs-sar.com/LostPersonBehavior.htm). 2008. Statistical profiles of how lost people behave (ISRID, >145,000 incidents). Used by SAR planners worldwide.
- Bernard O. Koopman. *Search and Screening: General Principles with Historical Applications*. 1980. Foundational search theory, including the exponential (random-search) detection function POD = 1 − e^(−C).
- Lawrence D. Stone. *Theory of Optimal Search*. 1975. Mathematical theory of allocating search effort, including Bayesian updating and optimal allocation for exponential detection.
- Donald C. Cooper, J. R. Frost, R. Quincy Robe. *Compatibility of Land SAR Procedures with Search Theory*. 2003. Report reconciling land SAR practice (POA, POD, segments, consensus) with search theory; introduced effective sweep width and detection experiments to land search planning.
- International Maritime Organization (IMO) and International Civil Aviation Organization (ICAO). *IAMSAR Manual — International Aeronautical and Maritime Search and Rescue Manual (Volumes I–III)*. The international SAR manual. Volume II (mission co-ordination) covers search planning: POA, POD, POS, sweep width and search patterns; Volume III covers distress signals and procedures for mobile facilities. Updated regularly; available from IMO and ICAO.
- National Association for Search and Rescue (NASAR). *Fundamentals of Search and Rescue*. 2005. Textbook for NASAR’s FUNSAR course and SARTECH II: SAR system, search tactics, clue awareness, lost-person behaviour.
- [National Association for Search and Rescue (SARTECH)](https://www.nasar.org/).
- [Mountain Rescue Association](https://mra.org/).
- [Mountain Rescue England and Wales](https://www.mountainrescue.org.uk/). Volunteer mountain and lowland search and rescue teams; advice on calling for help and on joining a team.
- [International Commission for Alpine Rescue (ICAR)](https://www.alpine-rescue.org/).
