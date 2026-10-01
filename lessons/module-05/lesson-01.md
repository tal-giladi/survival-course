---
id: "05.1"
module: 5
minutes: 40
practice_minutes: 100
prerequisites: ["01.10"]
objectives:
  - "Design a shelter path by path: name the dominant heat-loss mechanism for a given night and the control that targets it."
  - "Calculate the heat flow through a bed with $Q = A\\,\\Delta T / R$, adding R-values in series."
  - "Explain why small, enclosed volume warms up and big open volume does not, using conductance $UA$."
  - "Rank design effort by watts saved per minute of work, and apply it under a time budget."
level: intermediate
volatility: concept
sources:
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
  - title: "TB MED 508: Prevention and Management of Cold-Weather Injuries"
    url: https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf
  - title: "The Seven Principles of Leave No Trace"
    url: https://lnt.org/why/7-principles/
  - title: "IOL Bushcraft Competency Award / Certificate / Diploma"
    url: https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html
last_verified: "2026-09-27"
---

# 05.1 · Shelter design principles

People build the wrong shelter because they copy a picture instead of attacking the heat-loss path that is actually killing them tonight. A tarp without a bed on frozen ground, a beautiful roof over a sweat-soaked body, or a cavernous lean-to with no fire all fail for the same reason: the design did not follow the physics. If you can rank the paths, you can design for any place and any kit.

## Explanation

In Stage 1 you learned that a shelter is a set of heat-loss controls arranged around your body. This stage turns that idea into a **design method** you can apply to any environment, kit or terrain:

1. **Identify the threats** for *this* night: wet? wind? cold ground? clear sky? sun? insects? rising water?
2. **Rank the heat-loss paths** — which one will take the most watts from you?
3. **Choose a control for each path**, biggest first, cheapest first.
4. **Check the budget**: time before dark, energy, sweat, materials within reach.
5. **Check the hazards** before you commit a single minute (Lesson 2).

Everything that follows is a way of making step 2 quantitative.

![Cross-section of a person in a tarp shelter with the four heat-loss paths and the shelter control for each](../../assets/diagrams/shelter-heat-paths.svg)

*The four heat-loss paths of a person lying in a shelter, and the control for each.*

| Night type | Usually dominant path | Highest-value control |
| --- | --- | --- |
| Wet and windy, 0–10 °C | Evaporation + convection (wet clothing in wind) | A roof that keeps you dry, low to the ground, back to the wind |
| Calm, clear and frosty | Radiation to the sky + conduction to frozen ground | Overhead cover (canopy or tarp), a thick bed, avoid hollows |
| Snow, −10 °C and below | Conduction into snow + convection | Thick bed and pad; enclosed snow walls; out of the wind |
| Desert afternoon | Radiant *gain* from sun, hot ground and a hot roof | Double-layer shade, air flow, cooler ground, rest |
| Humid tropics at night | Evaporation from permanently wet clothing; conduction to wet ground | Steep roof, raised bed, net, a dry sleeping set |

*The ranking changes with the weather, so the design must too.*

### Ground first — usually

On most cold nights the ground is the biggest single drain, because your weight crushes the insulation between you and it. Clothing that gives you 1.5 clo standing up gives you almost nothing where your hips and shoulders press on the ground. That is why the Stage 1 rule was *"insulate underneath first"* — this lesson gives you the numbers.

**Thermal resistance** $R$ measures how hard it is for heat to get through a layer. For a flat layer, $R = d/k$: thickness divided by conductivity. Layers stacked on top of each other simply **add**: pad + leaves + clothing = $R_1 + R_2 + R_3$.

![Bar chart of thermal resistance of common ground insulation layers](../../assets/diagrams/bed-r-values.svg)

*R-values of common beds after compression. Thickness and dryness dominate everything else.*

Three rules fall straight out of the chart:

- **Compressed thickness is what counts.** 30 cm of loose leaves is about 7 cm under a body. Build it until it looks absurd.
- **Wet kills insulation.** Water fills the air spaces; wet leaves conduct several times better than dry ones. A bed in a run-off channel fails at 2 a.m.
- **A pad adds in series.** A thin foam pad on top of a leaf bed is better than either alone — and it keeps the leaves from poking through.

### Volume and warmth

The air in your shelter is warmed by the heat you lose into it and cooled by the shelter's **conductance** $UA$ (watts lost per degree of difference with the outside): heat leaking through the walls plus warm air blowing out. The air temperature settles where the two balance:

$$
\Delta T_{\text{inside}} \approx \frac{Q_{\text{into air}}}{UA}
$$

![Small enclosed shelter versus large open shelter: the same body heat warms the small one many degrees and the large one barely at all](../../assets/diagrams/volume-warmth.svg)

*The same 60 W warms a small, enclosed, insulated space many degrees; a big open tarp barely at all.*

So:

- **Tarps don’t hold warm air.** Wind and open ends swap the air many times an hour. A tarp’s job is to stop **rain**, block **wind** and hide the **sky** — not to heat the air. Plan your warmth from your bed and clothing.
- **Enclosed insulated shelters do.** A debris hut or a snow shelter with thick walls and a small door can sit many degrees above the outside air using body heat alone — *if it is small*. Every extra cubic metre adds wall area and air to heat.
- **Low beats high** in the cold: less volume, less wind load, less sky. **High beats low** in heat, where you *want* air flow.

### Design under a budget

Every minute of building costs light, energy and — if you work hard — sweat, which later costs heat by evaporation. A practical question for each job is therefore: *how many watts does this save per minute of work?* Early minutes spent on the bed usually save the most; minutes spent perfecting a roof on a dry, calm night save almost nothing. The simulation below makes you pay for every choice.

[Simulation: Shelter Builder](../../simulations/shelter-builder/index.html)

Try the temperate forest: first lie on bare ground under a tarp, then add a 30 cm leaf bed. Compare the brown (conduction) bars.

> [!IMPORTANT]
> **Shelter building and the law**
>
> Cutting live vegetation, gathering large amounts of leaf litter, digging and building structures are restricted or banned in many parks and protected areas; camping itself may need a permit. In a real emergency, survival comes first. For **practice**, use a tarp, use dead and down material only where allowed, and dismantle and scatter what you built (Leave No Trace). Check the land manager’s rules — see the References page for jurisdiction portals.

## Scientific and technical background

### Heat through a layer

In words: **heat flow through a layer equals the area times the temperature difference, divided by the layer’s resistance.**

$$
Q = \frac{A\,\Delta T}{R}, \qquad R = \frac{d}{k}
$$

$Q$ in watts, $A$ in m², $\Delta T$ in kelvin (same size as °C), $R$ in m²·K/W, $d$ thickness in metres, $k$ conductivity in W/(m·K).

**Worked example — the bed.** Lying on damp ground at 5 °C, about $A = 0.5$ m² of you is in contact. Skin under clothing is ~33 °C, so $\Delta T \approx 28$ K.

- Bare ground: flattened clothing plus the soil right under you give roughly $R \approx 0.12$. $Q = 0.5 \times 28 / 0.12 \approx 117$ W — more than your entire resting metabolism (≈ 85–100 W).
- 30 cm of dry leaves, compressed to 7.5 cm, $k \approx 0.05$: $R = 0.075/0.05 = 1.5$. Add 0.12 for clothing and soil: $Q = 0.5 \times 28 / 1.62 \approx 9$ W.

That single choice changes the night by over 100 W. Over 10 hours, 100 W is 3.6 MJ — about 15 °C of core-equivalent heat for a 70 kg person (245 kJ per °C, Stage 1). The body would never let it get that far — it shivers, and it cools the skin and limbs first — but the arithmetic shows why people on bare ground shiver all night.

### Layers in series and in parallel

- **Series** (stacked): $R_{\text{total}} = R_1 + R_2 + \dots$ — a 1 cm foam pad ($R \approx 0.29$) on 10 cm of leaves ($R \approx 0.5$ compressed) gives $0.79$.
- **Parallel** (side by side, e.g., a sit-pad under your hips but not your shoulders): add the **conductances** $A/R$ of each area. A pad that covers only a third of you helps only a third of you — cold shoulders still drain heat.

### Air exchange

Heating air takes about $\rho c_p \approx 1.2\ \text{kg/m}^3 \times 1005\ \text{J/(kg·K)} \approx 1200$ J per m³ per kelvin. If the shelter’s air volume $V$ is replaced $n$ times per hour, the air-exchange conductance is

$$
UA_{\text{air}} = \frac{1200\,V\,n}{3600} \approx \frac{V\,n}{3}\ \text{W/K}
$$

- A small snow shelter or debris hut, $V = 1.5$ m³, $n = 4$ per hour: $\approx 2$ W/K.
- A pitched tarp, $V = 3$ m³, wind swapping the air $n = 20$ times an hour: $\approx 20$ W/K.

With ~60 W of body heat reaching the air, the first warms by roughly 60 ÷ (2 + walls) — many degrees; the second by about 3 °C at most. **Size and openness, not the roof material, decide whether a shelter holds warm air.**

### Walls

Wall conductance is $U A = kA/d$. A 30 cm snow wall ($k \approx 0.1$) over 6 m² gives $0.1 \times 6 / 0.3 = 2$ W/K. Thick, dry, small: that is the whole recipe for a warm natural or snow shelter.

## Examples

**Temperate forest, rain and gale.** The dominant paths are evaporation and convection. The best first minutes: a low A-frame or wedge with its closed end into the wind, then a thick leaf bed. An elaborate open lean-to would catch the wind and rain.

**Boreal forest, −20 °C, calm and clear.** Conduction into the snow and radiation to the sky dominate. A snow trench or quinzhee with a bough bed and pad beats any tarp; a tarp still helps by hiding the sky.

**Mountain bivouac above the treeline.** No insulation materials at all: the rope, the pack, the empty rucksack and every spare layer go *under* you; a bivy bag stops wind and spindrift. Here the design is kit, not construction.

**Desert.** The paths reverse in the day: you are *gaining* heat from sun, hot ground and a sun-heated roof. Shade, a double roof and air flow control the day; a fleece and a ground layer control the surprisingly cold night.

**Humid tropics.** Evaporation from clothing that never dries and conduction into waterlogged ground. A steep roof and a raised bed are worth more than any wall.

**Urban.** A multi-storey car park stairwell, a bus shelter, a parked car: the same four paths. Cardboard is excellent ground insulation; a car blocks wind and rain but conducts heat away through metal and glass.

## Common mistakes

- Designing from a picture instead of from tonight’s dominant heat-loss path.
- Building a roof and no bed — on a cold night the ground usually takes more heat than the sky.
- Measuring bed thickness before lying on it. Loose leaves compress to roughly a quarter of their height.
- Myth: "a space blanket under you insulates you from the ground." Foil reflects radiation but does almost nothing against conduction; it needs thick trapped air beneath it.
- Myth: "heat rises, so insulate overhead first." Warm air rises, but lying on the ground you lose heat by conduction straight down.
- Building big "to have room" — every extra cubic metre is air and wall area you must heat.
- Working hard enough to soak your base layer, then lying still in the wet clothes.

## Practical exercises

### Kitchen insulation lab

Level 3 (Safe physical) · 🏠 Home · about 60 min

**Materials:** 4 identical jars or mugs; Hot tap water; Kitchen or aquarium thermometer; Dry leaves or crumpled paper, a folded towel, a foam pad or sheet, a wet towel; A cold surface (a stone floor, or a tray from the freezer)

**Steps**

1. Fill each jar with the same amount of hot water and record the starting temperature.
2. Stand one jar directly on the cold surface, one on 5 cm of compressed leaves/paper, one on the foam, and one on the wet towel.
3. Record the temperature every 5 minutes for 40 minutes.
4. Plot the curves. Which layer had the highest R? Where did the wet towel rank?
5. Repeat the leaf jar with a second, identical layer stacked on the first and check whether the loss rate roughly halves (series R).

**You have it when**

- You produced four cooling curves.
- You can explain the ranking with $R = d/k$ and the effect of water.

### Compression and bed-building test

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Gloves are sensible; check for ticks afterwards.

Level 3 (Safe physical) · 🌲 Outdoor · about 40 min

**Materials:** A ruler or tape; Dry leaf litter or grass where collecting it is allowed; Optional: your foam sit-pad

**Steps**

1. Build a bed of dry leaves until it is 30 cm deep and measure it.
2. Lie on it for 5 minutes, get up carefully, and measure the dent under your hips.
3. Note how many armfuls it took and how long. Estimate how long a full-length bed would take.
4. Return the material and leave the site as you found it.

**You have it when**

- You measured loose and compressed thickness.
- You have a personal "minutes per full bed" number to use in planning.

Builds the skill: Natural shelter construction.

## Scenario question

Late autumn, deciduous forest, 17:00, sunset 17:40. Forecast: dry, clear, calm, −4 °C. You have a 2 × 3 m tarp, 10 m of cord, a warm jacket and a foam sit-pad. The forest floor is covered in dry leaves.

**How do you spend the 40 minutes?**

1. A roomy, high A-frame so you can sit up, then leaves if there is time.
2. A 30 cm+ leaf bed first (sit-pad under the hips), then a quick, low A-frame over it.
3. A perfect, drum-tight tarp and no bed — the tarp is your best piece of kit.
4. Start a debris hut; they are the warmest natural shelter you can build.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Rank the paths: calm and dry removes wind and rain; clear and frozen leaves conduction and radiation. The bed attacks the bigger one cheaply, the tarp the other. Design follows tonight’s physics and the time you have — not the most impressive structure.

- **1.** High and roomy costs time and adds volume you cannot heat; the bed — the biggest win tonight — risks being skipped.
- **2.** Best: tackles conduction (biggest path on a clear, frozen night) first, then radiation by hiding the sky. Nothing is spent on wind or rain that will not come.
- **3.** The tarp does not insulate you from frozen ground. You will shiver on the leaves you did not gather.
- **4.** A good debris hut takes hours. In 40 minutes you will have half a hut and no bed.

</details>

## Summary

- Design path by path: rank tonight’s heat-loss paths, then control the biggest ones first.
- $Q = A\Delta T/R$ and $R = d/k$; layers in series add. Use **compressed** thickness; wet material loses most of its R.
- Warm air stays only in **small, enclosed** shelters ($UA$ small). Tarps stop rain, wind and sky — they do not heat air.
- Low and closed for cold; high, shaded and ventilated for heat.
- Spend minutes where they save the most watts, and don’t sweat doing it.

## Further reading

- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Ken Parsons. *Human Thermal Environments*. 3rd ed., 2014. Standard text on human heat exchange; clo and met units.
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.

## References

- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Ken Parsons. *Human Thermal Environments*. 3rd ed., 2014. Standard text on human heat exchange; clo and met units.
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- US Army / USARIEM. [TB MED 508: Prevention and Management of Cold-Weather Injuries](https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf). Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.
- Leave No Trace Center for Outdoor Ethics. [The Seven Principles of Leave No Trace](https://lnt.org/why/7-principles/).
- Institute for Outdoor Learning (UK). [IOL Bushcraft Competency Award / Certificate / Diploma](https://www.outdoor-learning.org/standards/iol-awards-and-accreditation/bushcraft.html).
