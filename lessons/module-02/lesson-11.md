---
id: "02.11"
module: 2
minutes: 45
practice_minutes: 85
prerequisites: ["02.1"]
objectives:
  - "Explain how GNSS finds your position from signal travel times, and why it needs four satellites."
  - "Know what limits accuracy — canopy, canyons, multipath, geometry (DOP) — and how to recognise a bad fix."
  - "Read, convert and report coordinates in DD, DDM, DMS and UTM/MGRS, stating format and datum."
  - "Set up offline maps and run a battery plan that keeps a reserve for emergencies."
level: beginner
volatility: concept
sources:
  - title: "GPS.gov — official US government information about GPS"
    url: https://www.gps.gov/
  - title: "International Cospas-Sarsat Programme"
    url: https://www.cospas-sarsat.int/en/
  - title: "NOAA SARSAT — beacon registration"
    url: https://www.sarsat.noaa.gov/
  - title: "Topographic Maps (US Topo, historical topos, topoBuilder)"
    url: https://www.usgs.gov/programs/national-geospatial-program/topographic-maps
  - title: "AdventureSmart — trip planning and “if lost” guidance"
    url: https://www.adventuresmart.ca/
last_verified: "2026-09-27"
---

# 02.11 · GPS and digital maps

A phone with an offline map and a charged battery is the most powerful navigation tool most people will ever carry — and dead batteries, missing maps and misread coordinates are among the most common reasons it fails them. Rescuers can only reach the position you give them.

## Explanation

"GPS" is the US system; the general name is **GNSS** (Global Navigation Satellite Systems). Four global systems are operating: **GPS** (USA), **Galileo** (EU), **GLONASS** (Russia) and **BeiDou** (China). Most modern phones and handheld units use several at once, which means more satellites in view and better fixes in difficult terrain.

### What your phone does — and does not — need

- A phone’s GNSS receiver **only listens**. It does not need cell coverage or data to compute a position, and on most modern phones it keeps working in **airplane mode**.
- **Assisted GPS (A-GPS)** uses the cell network to download satellite orbit data so the first fix comes in seconds. Without a network, a "cold" first fix can take from under a minute to several minutes — stand still in the open and wait.
- What *does* need data is the **map**. A blue dot on a blank grey screen is useless. **Download offline maps before the trip**, then test them in airplane mode at home.

### Accuracy and how it fails

Under open sky, GPS-enabled smartphones are typically accurate to about **5 m**. Accuracy degrades:

- **Under dense canopy**, especially when wet — signals are weakened.
- **In canyons, gorges and "urban canyons"** — buildings and cliffs block much of the sky, and signals **bounce (multipath)**, arriving late and making the receiver think the satellite is further away. Fixes jump around by tens of metres.
- **With poor geometry** — if the usable satellites are bunched in one part of the sky, small range errors turn into large position errors. This is measured by **DOP (dilution of precision)**.

Signs of a bad fix: the accuracy circle is large, your position jumps while you stand still, or your track zigzags across a valley you did not cross. Check against the terrain — GNSS is a sensor, not an oracle.

![GNSS positioning: range circles from satellites intersecting at the receiver, with clock error blurring every range](../../assets/diagrams/gnss-trilateration.svg)

*Each satellite’s signal travel time gives a range sphere; the receiver’s own clock error is solved as a fourth unknown.*

### Coordinate formats

The same point can be written in several ways. Mixing them up is a classic, dangerous search-and-rescue error.

| Format | Example | Notes |
|---|---|---|
| **DD** — decimal degrees | 46.5725° N, 8.0050° E | Common in phone apps and web maps; sometimes written 46.5725, 8.005 (N and E positive, S and W negative). |
| **DDM** — degrees, decimal minutes | 46° 34.35′ N, 8° 00.30′ E | Aviation, marine and many GPS units. |
| **DMS** — degrees, minutes, seconds | 46° 34′ 21″ N, 8° 00′ 18″ E | Traditional; paper charts and older maps. |
| **UTM / MGRS** | e.g. 32T 0423xxx 51xxxxx | Metric grid: easting and northing in metres within a 6° zone; MGRS adds letters for 100 km squares. Matches the grid on many topographic maps. |

**Always say the format and the hemisphere letters** when reporting a position, and read digits one at a time: "four six, decimal, five seven two five, north."

**Datum.** Coordinates are relative to a model of Earth’s shape (a *datum*). GNSS uses **WGS 84**; many older paper maps use local datums (e.g., NAD27 in North America, OSGB36 in Britain). The same numbers on different datums can be tens to a couple of hundred metres apart. Set your device to the datum printed on your map, or know that they differ.

### Battery strategy

- **Before:** start at 100 %; carry a **power bank** and cable; download maps; set the screen timeout short; know your phone’s real drain rate from a test walk.
- **During:** keep the phone in **airplane mode** (GNSS still works) and **low-power mode**; screen **off** between checks; check position at decision points instead of following the blue dot continuously. If you record a track, the drain is modest with the screen off.
- **Cold:** lithium-ion batteries deliver much less power when cold and phones may shut down with charge "remaining". Keep the phone and power bank **inside your clothing**, close to the body; warming a "dead" cold phone often brings it back.
- **Reserve:** decide a **hard floor** (e.g., 30 %) kept for an emergency call, SMS and coordinates. When you reach it, the phone becomes an emergency device only.

### Offline maps and track recording

Download the area **plus a generous margin** (your escape routes and the next valley). Use a topographic layer with contours, not a road map. Record your **track**: if you become lost, it shows exactly where you came from — a backtracking route to your last known point.

### Beacons and messengers

A **PLB** transmits on 406 MHz to the **Cospas-Sarsat** satellite system with a GNSS-derived position; a **satellite messenger** adds two-way text. Some phones now offer emergency SOS via satellite in some regions. These alert rescuers — they are the right tool when you *need help*, not a substitute for knowing where you are.

> [!WARNING]
> **Complement, never replace**
>
> Carry a paper map and compass and know how to use them. Electronics fail from cold, water, drops, flat batteries and software updates. GNSS is superb for *confirming* your position and giving exact coordinates to rescuers — as one of at least two independent systems.

## Scientific and technical background

### Ranging from time

Each satellite broadcasts its position and a precise time. Your receiver measures how long the signal took to arrive, $\Delta t$, and turns it into a distance using the speed of light $c \approx 3 \times 10^8\ \text{m/s}$:

$$
r = c \, \Delta t
$$

In words: **distance = speed of light × travel time.** GPS satellites orbit about 20 200 km up, so the signal takes about $20\,200\,000 / 3\times10^8 \approx 0.067\ \text{s}$ (67 ms). Because $c$ is so large, tiny timing errors matter: an error of **1 microsecond** gives

$$
3 \times 10^8\ \text{m/s} \times 1 \times 10^{-6}\ \text{s} = 300\ \text{m}.
$$

### Why four satellites?

Satellites carry atomic clocks; your phone has a cheap quartz clock that may be off by milliseconds. So there are **four unknowns**: your three position coordinates $(x, y, z)$ and your clock error $b$. Each satellite gives one equation, $\sqrt{(x-x_i)^2+(y-y_i)^2+(z-z_i)^2} + c\,b = c\,\Delta t_i$, so you need at least **four** satellites. Extra satellites improve accuracy and let the receiver reject bad signals.

### Geometry: DOP

Position error ≈ **DOP × range error**. With a range error of 3 m and a horizontal DOP of 1.5 (satellites spread across the sky), expect about $1.5 \times 3 = 4.5\ \text{m}$. In a narrow gorge where only a strip of sky is visible, DOP might be 6: $6 \times 3 = 18\ \text{m}$, before adding multipath.

### Coordinate arithmetic

- $1°$ of latitude ≈ **111 km**; $1′ = 1/60°$ ≈ **1.85 km** (one nautical mile); $1″$ ≈ **31 m**; $0.00001°$ ≈ **1.1 m**.
- A degree of longitude shrinks with latitude: $111 \cos\varphi$ km — about 55.5 km at 60°.

**Converting DD → DDM → DMS**, e.g. $46.5725°$:
1. Whole degrees: **46°**. Fraction $0.5725 \times 60 = 34.35′$ → **46° 34.35′** (DDM).
2. Whole minutes: **34′**. Fraction $0.35 \times 60 = 21″$ → **46° 34′ 21″** (DMS).

**Why mixing formats is dangerous.** If "46° 34.35′" is typed into an app as 46.3435°, the error is $0.5725 - 0.3435 = 0.229°$, i.e. $0.229 \times 111 \approx 25\ \text{km}$ — a search in the wrong valley.

### A battery budget

A phone navigating with the screen on continuously might use **10–15 % per hour**; in airplane mode with the screen off and brief position checks, a few percent per hour. Starting at 80 % with a 30 % reserve leaves 50 % to spend:

$$
\text{hours} = \frac{80 - 30}{12\ \%/\text{h}} \approx 4.2\ \text{h (screen on)} \qquad \frac{80 - 30}{2.5\ \%/\text{h}} = 20\ \text{h (checks only)}
$$

A 10 000 mAh power bank delivers only about 60–70 % of its rating to the phone (voltage conversion and heat), so roughly $6500 / 3000 \approx 2$ full charges of a 3000 mAh phone.

## Examples

**Mountain.** Open summits give excellent fixes; a deep gorge on the descent gives a jumpy one. Take a clean fix on the open shoulder before dropping in, and note it.

**Tropical rainforest.** Wet, multi-layer canopy weakens signals. Wait for the fix to settle, or take it in a river clearing or tree fall gap.

**Arctic and subarctic.** Cold is the main enemy: carry the phone in an inner pocket and use a power bank kept warm; touchscreens fail with gloves and wet fingers — know your phone’s physical buttons for emergency calls.

**Desert.** Excellent sky view, but heat also harms batteries: keep the phone shaded (not on a dashboard). Coordinates are vital where there are few named features to describe.

**Coast.** Sea cliffs and coves can block half the sky. Tide times in your notes; the map app will not warn you about the tide.

**Urban.** Tall buildings produce multipath errors of tens of metres — a blue dot on the wrong side of a street or block. In a disaster, networks may be overloaded while GNSS still works: offline maps of your own city are worth downloading.

**Rural.** Farm tracks and forestry roads may be missing or wrong on road maps; use a topographic layer.

## Common mistakes

- Believing GPS needs phone signal. The position does not; the map download does.
- Reading coordinates to rescuers without saying the format — or typing DDM into an app expecting DD.
- Following the blue dot with the screen on all day and arriving at dusk with 5 % battery.
- Keeping the phone in an outer pocket or pack lid in the cold.
- Downloading a road map instead of a topographic map, or only the planned route without margins.
- Trusting a jumpy fix in a gorge or under wet canopy without checking the terrain.
- Myth: "GPS will tell rescuers where I am." Your phone knows; rescuers do not — until you call, text, or activate a beacon.

## Practical exercises

### Coordinate format drill

Level 1 (Knowledge) · 🏠 Home · about 25 min

**Steps**

1. Get your home coordinates from a map app in decimal degrees.
2. Convert them by hand to DDM and DMS; check with the app’s format setting.
3. Find the same point’s UTM/MGRS reference in an app or on a topographic map.
4. Read the position aloud to a partner in each format, stating format and hemisphere; have them type it into their app and see if it lands on your house.

**You have it when**

- Your hand conversions match the app to the nearest second.
- Your partner’s pin lands within 30 m of your house for every format.

Builds the skill: GPS and offline-map use.

### Offline map and battery test

Level 2 (Simulation) · 🏠 Home · about 60 min

**Materials:** Phone with an offline-capable map app; Power bank

**Steps**

1. Download a topographic offline map for an area you plan to visit, with a margin of at least 5 km around your route.
2. Put the phone in airplane mode and confirm the map and your position still display.
3. Record 30 minutes of track with the screen off, then 30 minutes with the screen on; note the battery used each time.
4. Write your battery plan: start level, reserve floor, check schedule and expected hours.

**You have it when**

- Map and position work in airplane mode.
- You know your phone’s drain rate in both modes and have a written reserve floor.

Builds the skill: GPS and offline-map use.

## Scenario question

In a whiteout on a mountain ridge, your partner has slipped and injured a leg. You have one bar of signal and 22 % battery. Your GPS app shows “46° 34′ 21″ N, 8° 00′ 18″ E”. You get through to the emergency number.

**How do you give your location?**

1. Read “46 34 21, 8 0 18” out quickly, before the weak call has a chance to drop.
2. Say “degrees, minutes, seconds”, read each part with N/E, get a read-back, SMS it, then save battery.
3. Describe the ridge and the nearest summit instead, since coordinates confuse people.
4. Hang up and activate a personal locator beacon instead, which rescuers can home in on.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Coordinates are only useful if they are **received correctly**. State the format, read digits clearly, get a read-back, and back it up by SMS — which often works when voice is marginal (Stage 1: **phone use**, **signaling**). Then protect the battery so rescuers can reach you again (airplane mode, power saving, phone kept warm, agreed check-in times). A beacon or satellite SOS is the backup if the phone dies.

- **1.** Without the format and hemisphere, the dispatcher may enter it as decimal degrees or DDM — kilometres off.
- **2.** Best — format and read-back prevent the classic conversion error; SMS gets through on weak signal and leaves a written record; the battery plan keeps you reachable.
- **3.** Descriptions help as a cross-check but are far less precise, especially in a whiteout.
- **4.** You already have a live line to rescuers; a beacon is the backup if the phone fails.

</details>

## Summary

- GNSS: distance = speed of light × travel time; four satellites solve position plus clock error. 1 µs ≈ 300 m.
- Open sky ≈ 5 m with a phone; canopy, canyons, multipath and poor geometry (DOP) degrade it.
- Positions work offline; maps must be downloaded. Test in airplane mode.
- DD, DDM, DMS, UTM/MGRS: always state the format, hemisphere and (if relevant) datum. 1° ≈ 111 km, 1′ ≈ 1.85 km.
- Battery: airplane mode, screen off, keep warm, check at decision points, keep a hard reserve.
- GNSS complements map and compass; PLBs and messengers call for help.

## Further reading

- [GPS.gov — official US government information about GPS](https://www.gps.gov/).
- Canada’s national SAR prevention program. [AdventureSmart — trip planning and “if lost” guidance](https://www.adventuresmart.ca/).

## References

- [GPS.gov — official US government information about GPS](https://www.gps.gov/).
- [International Cospas-Sarsat Programme](https://www.cospas-sarsat.int/en/). The satellite system behind 406 MHz personal locator beacons.
- NOAA. [NOAA SARSAT — beacon registration](https://www.sarsat.noaa.gov/).
- US Army. *TC 3-25.26 Map Reading and Land Navigation*. 2013. Military land-navigation manual: grid references, declination diagrams, resection, dead reckoning. Use with judgment for civilian contexts.
- USGS National Geospatial Program. [Topographic Maps (US Topo, historical topos, topoBuilder)](https://www.usgs.gov/programs/national-geospatial-program/topographic-maps).
- Canada’s national SAR prevention program. [AdventureSmart — trip planning and “if lost” guidance](https://www.adventuresmart.ca/).
