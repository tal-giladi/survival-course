---
id: "06.1"
module: 6
minutes: 40
practice_minutes: 55
prerequisites: ["01.7"]
objectives:
  - "Estimate basal metabolic rate with the Mifflin–St Jeor equation and scale it to a day with activity and environment factors."
  - "Explain what carbohydrate, fat and protein each contribute, and why energy density matters for carried food."
  - "Describe the body’s fuel stores — glycogen, fat, lean tissue — and what a multi-day deficit does to performance."
  - "Rank water above food and explain why eating can make a water shortage worse."
level: intermediate
volatility: concept
sources:
  - title: "A new predictive equation for resting energy expenditure in healthy individuals"
    url: https://pubmed.ncbi.nlm.nih.gov/2305711/
  - title: "Dietary Reference Intakes for Energy"
    url: https://nap.nationalacademies.org/catalog/26818/dietary-reference-intakes-for-energy
  - title: "TB MED 508: Prevention and Management of Cold-Weather Injuries"
    url: https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf
  - title: "Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate"
    url: https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
last_verified: "2026-09-27"
---

# 06.1 · Energy requirements

Energy is the currency behind warmth, strength and judgment. Knowing your numbers lets you choose the right amount of food to carry, ration it rationally when stranded, and recognise when “finding food” would cost more energy than it returns — the most common and least visible survival mistake.

## Explanation

Food is energy and building material. In most short emergencies (hours to a few days) nobody dies of hunger — but a large energy deficit makes you colder, weaker, slower-thinking and more irritable, which drives the bad decisions that *do* kill. The aim of this lesson is to put numbers on that deficit so you can plan food like you plan water.

### Three layers of daily energy use

1. **Basal metabolic rate (BMR)** — the energy to keep you alive at complete rest: heart, brain, liver, kidneys, keeping warm in comfortable conditions. For most adults it is **1,200–1,900 kcal/day** and is roughly 60–70 % of a sedentary person’s total.
2. **Activity** — everything you do on top. Walking with a pack all day can more than double your total.
3. **Environment** — cold adds the cost of shivering, heavier clothing and wading through snow; heat adds a little for sweating and cardiovascular strain.

Digesting food itself costs about 10 % of what you eat (the *thermic effect*); the activity factors below already include it.

![Stacked bars: basal metabolic rate, activity and environment add up to daily energy expenditure in three situations](../../assets/diagrams/energy-stack.svg)

*The same person burns roughly 2,500 kcal doing camp work and nearly 5,000 kcal skiing out in deep cold.*

### Estimating BMR: Mifflin–St Jeor

In words: bigger bodies (more mass, more height) burn more; the rate falls slowly with age; men burn a little more than women of the same size because they typically carry more muscle. Mifflin and St Jeor fitted this to measurements of about 500 adults in 1990:

$$
\text{BMR (kcal/day)} = 10\,m + 6.25\,h - 5\,a + s
$$

where $m$ is mass in kg, $h$ height in cm, $a$ age in years, and $s = +5$ for men, $-161$ for women. It is accurate to within roughly ±10 % for most healthy adults — good enough for planning, not for precise diets.

### Scaling to a day

Multiply BMR by a **physical activity level (PAL)**, then by an **environment factor**:

$$
\text{TDEE} = \text{BMR} \times \text{PAL} \times f_{\text{env}}
$$

| Day | PAL (approx.) |
|---|---|
| Resting in a shelter, minimal work | 1.3 |
| Camp work: firewood, water, shelter upkeep | 1.5–1.6 |
| Walking with a pack ~4 h | 1.8–1.9 |
| Walking or skiing with a pack ~8 h | 2.2–2.5 |

| Environment | $f_{\text{env}}$ (illustrative) |
|---|---|
| Temperate, well clothed | 1.0 |
| Cool or hot | 1.05 |
| Cold (−10 to 0 °C) | 1.1–1.2 |
| Severe cold (below −15 °C) with snow travel | 1.2–1.3+ |

Military cold-weather guidance (TB MED 508) notes that hard work in the cold often needs **more than 4,000 kcal per day**. The environment factors here are simplifications; poor clothing and shelter raise them sharply because shivering can multiply resting heat production several-fold for short periods.

### Macronutrients

| Nutrient | Energy | Role in the field |
|---|---|---|
| **Carbohydrate** | 4 kcal/g | Fast fuel; refills **glycogen**; the brain’s preferred fuel; fuels hard efforts and shivering |
| **Fat** | 9 kcal/g | Most energy per gram — ideal for carried food; slow, steady fuel |
| **Protein** | 4 kcal/g | Repair and immune function; a poor main fuel — breaking it down produces urea, which needs water to excrete |

**Energy density** decides what is worth carrying: nuts and nut butters ≈ 6 kcal/g, chocolate ≈ 5, energy bars 4–5, dried fruit ≈ 3, fresh fruit < 1. A day of food for hard work (4,000 kcal) weighs about **0.8–1 kg** if chosen for density.

A diet of **lean meat alone** fails: the liver can only process so much protein (roughly a third of energy intake at most). Trappers and explorers eating only lean game in winter reported weakness, nausea and diarrhoea despite eating large amounts — sometimes called "rabbit starvation". Fat and carbohydrate are not optional extras.

![Energy stores: glycogen about 2,000 kcal, fat about 100,000 kcal; timeline of a fast from glycogen use to fat adaptation to lean tissue loss](../../assets/diagrams/fuel-stores.svg)

*Glycogen is a small, fast tank; fat is a large, slow one. Protein is structure the body spends reluctantly.*

### What a deficit does

- **Hours to 2 days:** glycogen (≈ 500 g, ≈ 2,000 kcal in muscle and liver) carries hard work. When it runs low, pace drops sharply ("hitting the wall"), concentration wanders, and cold tolerance falls because shivering depends heavily on carbohydrate.
- **Days 2–4:** the body shifts to fat and makes ketones; hunger often peaks then eases. Some protein is broken down to make glucose.
- **Weeks:** fat-adapted but weaker, colder, slower to heal, more irritable and apathetic — the classic findings of the Minnesota semi-starvation experiment.

A lean adult with 10 % body fat has half the reserve of one with 20 %. Children, lean people and the elderly run out sooner.

![Priority ladder: danger, temperature, water, communication, then food](../../assets/diagrams/food-priority.svg)

*Food sits below water, warmth and being found — but above nothing else you can easily fix.*

> [!WARNING]
> **Water before food**
>
> If water is short, **eat little or nothing** until you have water. Digestion and especially protein metabolism increase water needs (urea must be excreted in urine), and dry food draws water into the gut. A few days without food is uncomfortable; a few days without water in heat can kill. With enough water, eat — a fed person thinks and stays warmer.

[Simulation: Energy Budget Planner](../../simulations/energy-budget/index.html)

Plan rations and food-getting for a multi-day scenario; watch glycogen, fat and performance.

## Scientific and technical background

### Worked example

A 60 kg, 165 cm, 40-year-old woman:

$$
\text{BMR} = 10(60) + 6.25(165) - 5(40) - 161 = 600 + 1031 - 200 - 161 \approx 1{,}270 \text{ kcal/day}
$$

- Resting in a shelter (PAL 1.3, temperate): $1270 \times 1.3 \approx 1{,}650$ kcal.
- Walking out 8 h at −5 °C (PAL 2.3, $f = 1.15$): $1270 \times 2.3 \times 1.15 \approx 3{,}360$ kcal.

An 80 kg, 180 cm, 30-year-old man: BMR $= 800 + 1125 - 150 + 5 = 1{,}780$ kcal; the same cold walk-out costs $\approx 4{,}710$ kcal.

### METs — a second way to estimate activity

A **MET** is resting metabolic rate, about **1 kcal per kg per hour**. Walking with a pack on trails is about 5–7 METs. Four hours at 6 METs for a 70 kg person: $70 \times 6 \times 4 \approx 1{,}700$ kcal gross, of which roughly $70 \times 4 = 280$ would have been spent anyway at rest.

### How much fat does a deficit burn?

Adipose tissue holds roughly **7,700 kcal per kg** (fat itself is 9 kcal/g; adipose tissue is ~85 % fat). A 2,000 kcal/day deficit for 5 days (10,000 kcal) is about 1.3 kg of adipose tissue if it all came from fat — in practice some comes from glycogen and lean tissue (with their stored water), so the scale shows more.

## Examples

**Subarctic ski tour:** 3,000 kcal/day of food packed for a trip that turns out to demand 4,500. After three days the group is glycogen-depleted, shivering poorly and making slow decisions on avalanche terrain. Fix: pack for the *cold* number, favour fat-dense food, eat regularly including a snack before sleep.

**Desert vehicle breakdown:** 41 °C, 12 L of water, 2,000 kcal of jerky and crackers. Resting in shade the occupants burn ~2,000 kcal/day each, but water is the real limit — they eat crackers sparingly, skip the salty jerky, and wait.

**Temperate forest, lost overnight:** one energy bar and no dinner. Uncomfortable but harmless; the priority is insulation from the ground and staying put.

**Tropical coast, week-long wait:** plenty of water, little food. A week at a 2,000 kcal deficit costs ~2 kg; it is survivable — the risks are infection, sun and morale.

**Urban power cut in winter:** the flat is 8 °C. People need more energy to stay warm, and hot drinks and regular meals help as much as extra blankets.

## Common mistakes

- Planning food for a “normal” day when the trip demands hard work in cold.
- Eating heavily when water is short — digestion and protein raise water needs.
- Myth: “You can survive three weeks without food, so food doesn’t matter.” Survival is not performance; a deficit degrades warmth and judgment within a day or two.
- Carrying low-density food (fresh fruit, tins) for a weight-limited trip.
- Relying on lean meat or protein bars alone — protein is a poor main fuel.
- Treating BMR equations as precise: they are ±10 % estimates.

## Practical exercises

### Calculate your own energy budget

Level 1 (Knowledge) · 🏠 Home · about 25 min

**Materials:** Scale, tape measure; Calculator or spreadsheet

**Steps**

1. Compute your BMR with Mifflin–St Jeor.
2. Compute total daily energy for four days: resting at home, a day hike, a camp day in the cold, and an 8-hour walk-out at −5 °C.
3. Convert each into kilograms of carried food at 4.5 kcal/g.
4. Write the numbers on your kit card next to your water numbers.

**You have it when**

- Four daily totals with the working shown.
- You can explain which factor changed most between them.

Builds the skill: Energy and ration planning.

### Energy-density audit of your trail food

Level 3 (Safe physical) · 🏠 Home · about 30 min

**Materials:** Your usual trail/emergency food with nutrition labels; Kitchen scale

**Steps**

1. For each item record kcal per 100 g and its carbohydrate, fat and protein grams.
2. Rank them by kcal per gram.
3. Design a 3,500 kcal day under 800 g that includes some carbohydrate for hard efforts and some fat for density.

**You have it when**

- A day plan ≥ 3,500 kcal and ≤ 800 g.
- No more than about a third of energy from protein.

Builds the skill: Energy and ration planning.

## Scenario question

Autumn, boreal forest, 2 °C at night. Your canoe partner and you are wind-bound on an island for an unknown time (probably 2–4 days). Plenty of lake water and a filter. You have 3,000 kcal of food between you and a tarp. Your partner wants to eat normally now “to stay strong” and deal with it later.

**What is the best food plan?**

1. Eat normally now to stay strong; catch fish later to make up for it.
2. Eat nothing while waiting and save all of it for the crossing day.
3. Ration small daily shares, keep a bigger share for the crossing, rest warm.
4. Spend the days foraging the island for berries and plants to top up.

<details>
<summary>Best choice and debrief</summary>

**Best: 3.** With water secure, eat — but ration for the whole uncertain period and weight it toward the day that demands the most (the crossing). Keep activity low while waiting; cold is the bigger threat than hunger. Foraging on a small island rarely repays its cost.

- **1.** Leaves nothing for the paddle out and bets on an uncertain catch.
- **2.** Glycogen empties and cold tolerance falls; a starved paddler on cold water is a hazard.
- **3.** Best: covers the uncertain wait, keeps some glycogen and warmth (a snack before sleep helps), and fuels the hardest, riskiest day.
- **4.** Energy spent searching usually exceeds what is found, and eating unknown plants is dangerous.

</details>

## Summary

- BMR (Mifflin–St Jeor) = 10·kg + 6.25·cm − 5·age + 5 (men) / −161 (women).
- Daily need ≈ BMR × activity (1.3–2.5) × environment (cold adds 10–30 %+).
- Carbohydrate refills glycogen; fat is dense fuel; protein is structure and needs water to process.
- Glycogen ≈ 2,000 kcal lasts 1–2 hard days; then weaker, colder, slower thinking.
- Water before food: with little water, eat little.

## Further reading

- US Army / USARIEM. [TB MED 508: Prevention and Management of Cold-Weather Injuries](https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf). Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.
- National Academies of Sciences, Engineering, and Medicine. [Dietary Reference Intakes for Energy](https://nap.nationalacademies.org/catalog/26818/dietary-reference-intakes-for-energy). 2023. Current energy-requirement equations built on doubly labelled water data.

## References

- Mifflin MD, St Jeor ST, Hill LA, Scott BJ, Daugherty SA, Koh YO. [A new predictive equation for resting energy expenditure in healthy individuals](https://pubmed.ncbi.nlm.nih.gov/2305711/). 1990. Am J Clin Nutr 51(2):241–247. The Mifflin–St Jeor equation; derived from 498 adults, R² ≈ 0.71.
- National Academies of Sciences, Engineering, and Medicine. [Dietary Reference Intakes for Energy](https://nap.nationalacademies.org/catalog/26818/dietary-reference-intakes-for-energy). 2023. Current energy-requirement equations built on doubly labelled water data.
- US Army / USARIEM. [TB MED 508: Prevention and Management of Cold-Weather Injuries](https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf). Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.
- Keys A, Brožek J, Henschel A, Mickelsen O, Taylor HL. *The Biology of Human Starvation*. 1950. The Minnesota Starvation Experiment: physical and psychological effects of prolonged semi-starvation.
- Institute of Medicine (US National Academies). [Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate](https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate). 2005. Adequate intake ≈3.7 L/day (men) and 2.7 L/day (women) total water, from all sources.
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
