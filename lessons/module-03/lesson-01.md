---
id: "03.1"
module: 3
minutes: 40
practice_minutes: 70
prerequisites: ["01.11"]
objectives:
  - "Describe the four stages of wood combustion — drying, pyrolysis, flaming, glowing char — and what each needs."
  - "Use the surface-to-volume ratio $A/V = 4/d$ and the heating time $t \\sim r^2/\\alpha$ to explain why fine fuel lights first."
  - "Calculate the net energy of wood at a given moisture content, and convert between wet-basis and dry-basis moisture."
  - "Explain smoke as wasted fuel and water vapour, and use that to diagnose a struggling fire."
level: intermediate
volatility: concept
sources:
  - title: "Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)"
    url: https://research.fs.usda.gov/treesearch/62200
  - title: "Fire"
    url: https://www.nps.gov/subjects/fire/index.htm
  - title: "Know Before You Go: Fire"
    url: https://www.fs.usda.gov/visit/know-before-you-go/fire
last_verified: "2026-09-27"
---

# 03.1 · Combustion science

When a fire fails in rain or at dusk, guessing wastes the fuel and daylight you have left. If you understand that flame is burning gas made by heat, you can diagnose the failure — too thick, too wet, too tight, too windy — and fix the right thing on the next attempt.

## Explanation

In Stage 1 you learned the fire triangle — heat, fuel, oxygen — and the fuel ladder. This lesson opens the box: **what actually happens to a stick when it burns**, and why every rule of fire-craft (fine first, dry first, air gaps, feed gradually) follows from three facts about heat, surface and water.

### Wood does not burn — its gases do

Heat a piece of wood and it goes through four overlapping stages:

1. **Heating and drying.** Up to roughly 100–150 °C the wood mostly just gets hotter and its water boils off. Energy spent here produces steam, not flame.
2. **Pyrolysis.** From roughly 200 °C upward, and fast above ~300 °C, the wood’s polymers break apart: hemicellulose first, then cellulose, with lignin decomposing over a wide range. The products are flammable gases and tar vapours (“volatiles”) — roughly three-quarters of dry wood’s mass — plus a solid carbon skeleton, **char**.
3. **Flaming combustion.** The volatiles rise, mix with air and burn *above* the wood as flame. The flame radiates heat back down, pyrolysing more wood: the fire feeds itself.
4. **Glowing (smouldering) combustion.** When the volatiles are gone, oxygen attacks the char surface directly. That is a bed of **coals**: little flame, steady intense heat — ideal for cooking.

![Wood combustion stages: drying, pyrolysis, flaming combustion of gases, glowing char](../../assets/diagrams/combustion-stages.svg)

*Heat drives water out, then breaks wood into gas; the gas burns as flame; the leftover char glows as coals.*

### What this means in practice

- A young fire dies when the flame cannot **pyrolyse the next piece fast enough** — the next piece is too thick or too wet. That is a heat-transfer problem, not bad luck.
- **Air gaps** matter because the gases must mix with oxygen to burn. A tight pile makes gas that escapes unburned: smoke.
- **Smoke is fuel you are not burning**, plus steam. Thick white smoke from a small fire means wet fuel or too little air; the cure is finer, drier fuel and more gap — not more big wood.
- Some people add a fourth side to the triangle — the **chemical chain reaction** in the flame (the “fire tetrahedron”). It matters for firefighting chemistry; for fire-craft, the triangle is enough.

### Two numbers to remember

- **Piloted ignition** (a flame or spark nearby) of wood surfaces happens at roughly **250–350 °C**, depending on the wood and how long it is heated. Without a pilot flame, wood needs far higher temperatures.
- Dry wood holds about **18–20 MJ/kg** of chemical energy. Water in it costs about **2.4 MJ per kg of water** to evaporate. Everything in the science section follows from these.

> [!IMPORTANT]
> **Law varies**
>
> Experimenting with fire is only legal where open fires are allowed — and bans change with the season, sometimes the same day. Every practical in this stage assumes a legal fire pit, ring or barbecue and a check of the land manager’s current restrictions. The worldwide portal list is on the References page.

## Scientific and technical background

### Surface-to-volume ratio

Heat enters a stick through its surface, but has to warm its whole volume. For a round stick of diameter $d$ and length $L$ (ignoring the ends), surface $A = \pi d L$ and volume $V = \pi d^2 L / 4$, so

$$
\frac{A}{V} = \frac{4}{d}
$$

In words: **halve the thickness, double the surface each gram of wood exposes to the flame.** A 1 mm shaving has 20× the surface per unit volume of a 2 cm stick.

![Surface-to-volume ratio of sticks falls as four divided by diameter](../../assets/diagrams/surface-volume.svg)

*A/V = 4/d: the ratio collapses as sticks get thicker.*

### Heating time grows with the square of thickness

How long does it take heat to soak into a stick? Heat diffuses, and diffusion time scales with the **square** of distance:

$$
t \approx \frac{r^2}{\alpha}
$$

where $r$ is the radius and $\alpha$ is the wood’s thermal diffusivity — how fast temperature spreads through it, about $1.5 \times 10^{-7}\ \text{m}^2/\text{s}$ for dry wood. In words: **twice as thick takes four times as long** to heat through.

- 1 mm shaving ($r = 0.5$ mm): $t \approx (5 \times 10^{-4})^2 / 1.5\times10^{-7} \approx 1.7$ s.
- 2 cm stick ($r = 1$ cm): $t \approx (10^{-2})^2 / 1.5\times10^{-7} \approx 670$ s — about **11 minutes**.

A match burns for ~10 seconds. That is the whole argument for the fuel ladder in one line.

### Moisture content and energy

Foresters define moisture content two ways. **Wet basis** $m$ is water ÷ total mass. **Dry basis** $u$ is water ÷ dry wood mass. They convert as

$$
m = \frac{u}{1+u}
$$

So “100 % moisture (dry basis)” — common in living trees — means **half the log is water** (50 % wet basis). This course uses wet basis unless stated.

Net usable heat per kilogram of wood at wet-basis moisture $m$:

$$
H_{net} \approx 18.5\,(1-m) - 2.44\,m \quad \text{MJ/kg}
$$

The first term is the energy in the dry wood; the second is the energy spent turning its water into steam. Worked example:

| Wood | $m$ | Dry wood energy | Evaporation cost | Net |
|---|---|---|---|---|
| Seasoned / dead standing | 0.20 | 0.8 × 18.5 = 14.8 MJ | 0.2 × 2.44 = 0.49 MJ | **≈ 14.3 MJ/kg** |
| Lying on wet ground | 0.35 | 12.0 MJ | 0.85 MJ | **≈ 11.2 MJ/kg** |
| Green, freshly cut | 0.50 | 9.25 MJ | 1.22 MJ | **≈ 8.0 MJ/kg** |

Green wood gives barely **half** the heat of seasoned wood per kilogram you carry — and it is worse than the table says, because the steam cools the flame, pyrolysis slows, combustion becomes incomplete, and a big share of the “energy” leaves as smoke.

![Net usable heat per kilogram of wood falls steeply as moisture content rises](../../assets/diagrams/moisture-energy.svg)

*Net energy per kilogram falls steeply with moisture — and flame temperature and cleanliness fall with it.*

### How much heat does it take to light tinder?

Wood’s specific heat is about $1.5\ \text{J/(g·°C)}$. To raise **1 g** of dry tinder from 15 °C to ~300 °C takes $1 \times 1.5 \times 285 \approx 430$ J. A lighter flame delivers tens of watts, so a fluffy gram of birch bark gets there in seconds — *if* its fibres are thin enough that the heat reaches all of it. Add 10 % water and you pay an extra ~$0.1 \times 2440 \approx 240$ J first. Damp tinder is not impossible; it is **slow**, and slow is what kills a young fire.

## Examples

**Boreal forest, autumn drizzle:** fallen spruce on the ground reads 35–40 % moisture; dead spruce twigs still on the lower trunk read 12–18 %. Same tree, same day, very different fires.

**Hot desert:** dead mesquite or acacia can be under 10 % moisture — it lights readily and burns hot and clean. The challenge is quantity, not dryness.

**Tropical rainforest:** humidity keeps dead wood at 20–30 % even without rain; hard, dense woods take long to light. Split dead branches for their drier cores; look for resinous woods and dead bamboo (split it first — sealed sections can burst).

**Coastal:** driftwood above the tide line can be dry, but salt-soaked wood hisses and burns slowly; the salt residue also makes the flames yellow-orange.

**Urban disaster:** treated or painted timber and pallets burn, but treated wood and plastics give toxic smoke. Untreated, dry, split softwood is the best fuel in rubble.

## Common mistakes

- Myth: “Wood burns.” — The gases pyrolysed from wood burn; the leftover char glows. Fixing a fire means helping pyrolysis (heat, thin fuel) and mixing (air gaps).
- Myth: “Thick white smoke means the fire is about to take off.” — Usually it means steam and unburned gases from wet or smothered fuel. Add finer dry fuel and open air gaps.
- Confusing dry-basis and wet-basis moisture: “100 % moisture” in forestry means half the mass is water, not that the log is pure water.
- Adding more big, damp wood to a struggling fire — it absorbs heat faster than the fire can pyrolyse it.
- Assuming dead wood is dry: dead wood lying on wet ground can be as wet as green wood.

## Practical exercises

### Measure moisture content with a kitchen scale

Level 3 (Safe physical) · 🏠 Home · about 30 min

**Materials:** Three sticks: dead-standing, dead from the ground, freshly cut green (collected where allowed); Kitchen scale (1 g resolution); Warm, dry place (radiator shelf, airing cupboard)

**Steps**

1. Weigh each stick on the day you collect it and label it.
2. Dry them indoors for 2–3 weeks, weighing every few days until the mass stops falling (roughly “oven-dry-ish”).
3. Moisture (wet basis) = (fresh mass − dry mass) ÷ fresh mass. Compute it for each stick.
4. Use $H_{net} = 18.5(1-m) - 2.44m$ to compute the net energy of each stick as collected.

**You have it when**

- You measured a clear difference between the three sticks.
- You can explain why the ground stick behaved closer to the green one than to the standing one.

Builds the skill: Fire preparation.

### Ignition-time test by thickness

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Only where fires are explicitly permitted and no fire ban is in force. Keep water at hand; extinguish cold before leaving.

Level 3 (Safe physical) · 🌲 Outdoor · about 40 min

**Materials:** Legal fire pit or barbecue; Lighter; Dry sticks of 1–2 mm, 5 mm, 10 mm and 20 mm; Timer; Water to extinguish

**Steps**

1. Hold the lighter flame steadily under the middle of each stick, one at a time, in still air.
2. Time until the stick holds its own flame when you remove the lighter (stop at 60 s).
3. Plot time against diameter. Compare with the prediction $t \propto d^2$.
4. Extinguish: drown, stir, feel.

**You have it when**

- Thin sticks self-sustain in seconds; thick ones never do from a lighter alone.
- You can relate the result to $A/V = 4/d$ and $t \approx r^2/\alpha$.

Builds the skill: Light and manage a fire with lighter and ferro rod.

## Interactive simulation

[Simulation: Advanced Fire Builder](../../simulations/fire-advanced/index.html)

Choose materials, lay, placement, weather and purpose; see ignition odds, heat output over time, fuel use, smoke and suitability.

## Scenario question

Coastal forest, 6 °C, after a night of rain; a small legal fire is permitted at your emergency bivouac. Your young fire (lit from birch bark) produces billowing white smoke from a heap of wrist-thick branches you picked up from the forest floor. Your partner is cold and wet (Stage 1: wet + wind). About 40 minutes of daylight remain.

**What is the best next move?**

1. Pile on more of the wrist-thick branches so the fire has more fuel to work with.
2. Pull the big branches back, open the base, and feed split dead-standing wood, pencil to thumb size.
3. Keep blowing hard into the base of the smoke until flames finally break through.
4. Abandon the fire and spend the remaining light walking briskly to warm up.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** White smoke told you the flame could not pyrolyse the next rung fast enough: too thick, too wet, too tight. Pull it back, rebuild the ladder with **split dead-standing wood** (dry core, high A/V), and let the growing fire dry the wet branches before they go on. With a cold partner, a few minutes of rework now buys hours of warmth later.

- **1.** Adds more heat sink and more water — the fire gets smokier and may die.
- **2.** Best: restores the ladder, adds air, and lets the fire pre-dry the wet branches at the edge.
- **3.** Some air helps briefly, but the fuel problem remains and you will exhaust yourself.
- **4.** Walking in wet clothes at dusk risks sweat, exhaustion and a dark, cold night.

</details>

## Summary

- Heat drives off water, pyrolysis turns wood into gas, the gas burns as flame, and the char glows as coals.
- $A/V = 4/d$ and heating time $t \approx r^2/\alpha$: thin fuel heats through in seconds, thick fuel in minutes.
- Net energy $\approx 18.5(1-m) - 2.44m$ MJ/kg: green wood gives about half the heat of seasoned wood — and more smoke.
- Smoke is unburned fuel plus steam: fix it with drier, finer fuel and more air, not bigger wood.

## Further reading

- Dougal Drysdale. *An Introduction to Fire Dynamics (3rd ed.)*. 2011. Standard fire-science text: pyrolysis, ignition, flame spread, heat transfer.
- Robert J. Ross (ed.). [Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)](https://research.fs.usda.gov/treesearch/62200). 2021. Moisture content definitions, density, thermal properties and fire performance of wood.
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.

## References

- Dougal Drysdale. *An Introduction to Fire Dynamics (3rd ed.)*. 2011. Standard fire-science text: pyrolysis, ignition, flame spread, heat transfer.
- Vytenis Babrauskas. *Ignition Handbook*. 2003. Reference for ignition temperatures of wood and other materials, and why they vary with heating time.
- Robert J. Ross (ed.). [Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)](https://research.fs.usda.gov/treesearch/62200). 2021. Moisture content definitions, density, thermal properties and fire performance of wood.
- US National Park Service. [Fire](https://www.nps.gov/subjects/fire/index.htm). Each park’s Superintendent’s Compendium lists local fire rules.
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- USDA Forest Service. [Know Before You Go: Fire](https://www.fs.usda.gov/visit/know-before-you-go/fire).
