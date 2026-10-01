---
id: "04.1"
module: 4
minutes: 40
practice_minutes: 150
prerequisites: ["01.12"]
objectives:
  - "Describe where body water sits and how it enters and leaves the body in a daily water balance."
  - "Measure your own sweat rate from body mass and use it to plan."
  - "Relate % body-mass loss to symptoms and performance, and explain why about 2 % matters."
  - "Build a multi-day water budget for a group, including the effect of when you work."
  - "Recognise the opposite failure — overdrinking and hyponatraemia — and why \"drink to a plan, not to excess\" beats \"force fluids\"."
level: intermediate
volatility: concept
sources:
  - title: "Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate"
    url: https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate
  - title: "Dehydration: Physiology, Assessment, and Performance Effects"
    url: https://onlinelibrary.wiley.com/doi/10.1002/cphy.c130017
  - title: "WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update"
    url: https://journals.sagepub.com/doi/10.1177/10806032241227924
  - title: "TB MED 507: Heat Stress Control and Heat Casualty Management"
    url: https://www.hprc-online.org/resources-partners/whec/educational-tools/tb-med-507-heat
  - title: "Creating and Storing an Emergency Water Supply"
    url: https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html
last_verified: "2026-09-27"
---

# 04.1 · Water requirements and dehydration

Water planning errors are quiet: nothing hurts until you are 2–4 % down, and by then your judgment — the thing you need to fix the problem — is already degrading. People run out of water because they plan with a single number like "2 litres a day" instead of a model that changes with heat, work and timing. A measured sweat rate and a written budget turn water from a guess into a decision.

## Explanation

Stage 1 gave you the rule of thumb: **need ≈ baseline + sweat rate × hours active**, and "ration sweat, not water". This lesson opens the box: where the water goes, how fast, how to measure it on yourself, and what losing it does to you.

### Body water

An adult is roughly **50–60 % water by mass** — about **40 L** in a 70 kg person. Two-thirds is inside cells; one-third is outside them (blood plasma and the fluid between cells). Sweat is drawn from the outside compartment first, which is why blood volume falls, the heart has to beat faster to keep up, and you feel dizzy on standing when you are dry.

### The daily balance

Water comes **in** from drinks, from food (fruit and cooked food are mostly water) and a little from burning food (**metabolic water**, ~0.25–0.35 L/day). It goes **out** as urine, water evaporating from skin and lungs, faeces and — the big variable — **sweat**.

![Daily water balance for a resting adult: inputs from drink, food and metabolism equal outputs from urine, skin, breath, faeces and sweat](../../assets/diagrams/water-budget-flows.svg)

*A quiet temperate day balances at about 3 L. One hour of hiking in heat can add another litre to the OUT column.*

| Situation | Typical sweat rate | What drives it |
| --- | --- | --- |
| Resting in shade, 20 °C | < 0.1 L/h | Almost none |
| Resting in shade, 40 °C desert | 0.2–0.4 L/h | Heat gain from air and ground |
| Walking, mild weather | 0.3–0.6 L/h | Metabolic heat |
| Hiking uphill with a pack in heat | 0.8–1.5 L/h | Metabolic + solar heat |
| Hard work in desert sun | 1–2+ L/h | Everything at once |
| Cold, dry air, working hard | 0.3–0.8 L/h + breath | Sweat under layers; breathing dry air |

*Orders of magnitude from ACSM and military heat guidance. Individuals vary by a factor of 2–3 — measure yourself.*

### What losing water does

Physiologists express dehydration as **% of body mass lost**, because 1 L of water weighs 1 kg and scales are easy.

![Endurance performance falls as body-mass loss from dehydration rises past about 2 percent](../../assets/diagrams/dehydration-performance.svg)

*Performance falls off past ~2 % and steeply beyond 4–6 %. Heat makes every band worse.*

| Body-mass loss | 70 kg person | Typical effects |
| --- | --- | --- |
| 1 % | 0.7 L | Thirst |
| ~2 % | 1.4 L | Measurable loss of endurance and heat tolerance; poorer mood, attention and judgement (ACSM) |
| 3–5 % | 2–3.5 L | Headache, fatigue, dry mouth, dark scanty urine, rising heart rate, big drop in work capacity |
| 6–10 % | 4–7 L | Dizziness, laboured breathing, tingling, confusion, inability to walk; collapse likely in heat |
| > 10 % | > 7 L | Medical emergency; life-threatening |

*Approximate bands; heat, altitude, illness and age shift them.*

### Thirst is useful — but it lags

Thirst switches on at about 1–2 % loss. At rest in mild conditions, drinking to thirst works well. During hours of heavy sweating in heat, most people voluntarily replace only part of their losses (**"voluntary dehydration"**, first described in desert troops), and **cold blunts thirst** even while you lose water through breathing and cold-induced urination. So in heat, cold and at altitude, **drink to a plan** built on your measured sweat rate, and check urine.

**Urine check:** pale straw = fine; dark amber and scanty = behind. Vitamin supplements, some foods and the cold-induced diuresis of winter all confuse the colour, so combine it with volume, thirst and body mass.

### The opposite failure: too much plain water

Drinking large volumes of **plain water** over many hours while sweating out salt can dilute blood sodium — **exercise-associated hyponatraemia**. Its early signs (headache, nausea, fatigue, confusion) look like dehydration, which tempts people to drink even more. Warning signs: you are **gaining weight** during exercise, urinating often and clear, hands and feet swelling. The fix is **not** to stop drinking, but to drink to a plan that matches losses and eat salty food. Stage 8 (s8-l5) covers electrolytes in depth.

> [!TIP]
> **Cut the losses, not the intake**
>
> Sweat is the only big term you control. Move and work in the **cool hours**, rest in **shade** off hot ground, keep sun-protective clothing **on**, breathe through your nose, keep talking and eating protein to a minimum when water is very short. Each of these shrinks the OUT column; rationing water only moves the deficit from your bottle into your blood.

[Simulation: Water Planner: Source to Cup](../../simulations/water-advanced/index.html)

Try the desert canyon: compare "work through the day" with "work in cool hours" and watch the need per person change.

## Scientific and technical background

### Measuring sweat rate

In words: the mass you lost, plus what you drank, minus what you urinated, divided by the time — because 1 L of sweat weighs about 1 kg.

$$
SR = \frac{M_{before} - M_{after} + V_{drink} - V_{urine}}{t}
$$

with masses in kg (≈ L), volumes in L and $t$ in hours.

**Worked example.** Before a 2 h hot hike you weigh 72.4 kg (minimal clothing). After: 71.1 kg. You drank 1.0 L and did not urinate.
$SR = (72.4 - 71.1 + 1.0 - 0) / 2 = 2.3 / 2 = 1.15$ L/h.
Your end-of-hike deficit is $72.4 - 71.1 = 1.3$ kg, i.e. $1.3 / 72.4 = 1.8\,\%$ — right at the edge of measurable impairment.

### A daily water budget

In words: a day's need is the baseline (urine, breath, skin, food) plus every block of sweating, each at its own rate.

$$
N = B + \sum_i SR_i \times h_i
$$

where $B$ ≈ 2–3 L/day, $SR_i$ is the sweat rate in activity block $i$ (L/h) and $h_i$ its hours.

**Worked example — the same desert day, two schedules.** $B = 2.5$ L.

| Schedule | Blocks | Need |
|---|---|---|
| Walk 6 h through midday, then rest | $6 \times 1.3 + 5 \times 0.3$ | $2.5 + 7.8 + 1.5 = 11.8$ L |
| Walk 3 h at dawn + 3 h at dusk, rest in shade 8 h at midday | $6 \times 0.6 + 8 \times 0.3$ | $2.5 + 3.6 + 2.4 = 8.5$ L |

Same distance, **3.3 L less per person per day**, simply by timing. For two people over 3 days that is ~20 L — two heavy water bags you never have to carry or find.

### Group, multi-day

Total $= N \times \text{people} \times \text{days}$ **plus a margin** (spills, a leaking bottle, a sick companion, a day's delay). A common planning margin is 20–30 %, more where resupply is uncertain.

### Cold and altitude

Breathing moves water out: inhaled cold air holds almost no water, and exhaled air leaves saturated at about body temperature. At altitude you breathe more air per minute, so respiratory losses rise further, and many people also urinate more. Cold also reduces thirst. Winter and mountain parties dehydrate "without sweating" — plan for 3–4 L/day even in the cold, and budget the fuel to melt it (lesson 3).

## Examples

**Hot desert (Sonoran, Sahara, Australian interior).** Shade temperatures above 40 °C with ground far hotter. People who walk in the midday heat can sweat 1.5 L/h; those resting in shade under a tarp, off the ground, lose a fraction of that. Stranded motorists who stay with the vehicle, rest in its shade by day and signal are far more likely to survive than those who walk out at noon.

**Humid tropics.** Sweat drips instead of evaporating, so it removes water without removing much heat. Sweat rates stay high even in shade; heat illness and dehydration arrive together. Plan generous volumes and electrolytes.

**Arctic and high mountains.** Little visible sweat, but dry air, heavy breathing, cold diuresis and blunted thirst. Ski tourers and climbers commonly finish days 2–3 % down without noticing. Water must be made from snow — it costs fuel and time, so people under-make it.

**Urban heatwave or outage.** No air-conditioning, water pressure failing, elderly people who feel less thirst. Agencies recommend storing **at least 1 gallon (≈3.8 L) per person per day** for drinking and basic hygiene — more for heat, children, nursing mothers or illness.

**Coastal / at sea.** Surrounded by water you cannot drink; salty spray and wind increase losses. Shade and rain collection are the priorities; drinking seawater accelerates dehydration.

## Common mistakes

- Planning with a fixed number ("2 L a day") instead of baseline + sweat × hours.
- Myth: "You need exactly 8 glasses a day." Needs vary several-fold with heat, work and body size; there is no universal fixed amount.
- Myth: "Thirst means it is already too late." Thirst is an early, useful signal at rest — the problem is that it lags during heavy sweating and in the cold, so plan in those conditions.
- Rationing water in the heat while continuing to work and sweat.
- Forcing large volumes of plain water "to stay ahead", causing hyponatraemia on long hot days.
- Walking or working in the midday heat when the same task could be done at dawn or dusk.
- Ignoring the cold: winter parties often dehydrate because they are not thirsty and melting snow is a chore.
- Mostly a myth: "Coffee and tea dehydrate you." In habitual drinkers, moderate caffeinated drinks count toward fluid intake; alcohol is the real problem.

## Practical exercises

### Budget three trips on paper

Level 1 (Knowledge) · 🏠 Home · about 30 min

**Steps**

1. Write a daily budget for: (a) a 2-day summer desert hike for 2 people; (b) a 3-day winter ski tour for 3 people; (c) a 72-hour home power-and-water outage for your household.
2. For each, list activity blocks with an assumed sweat rate and hours; show the formula N = B + Σ SR × h.
3. Add a 25 % margin and state where the water will come from (carried, found, stored, melted).
4. For (a), recompute with a cool-hours schedule and note the saving.

**You have it when**

- Three written budgets with explicit assumptions.
- You can explain the biggest term in each and how to shrink it.

Builds the skill: Plan a water budget from measured sweat rates.

### Personal sweat-rate test in two conditions

> [!WARNING]
> **Outdoor.** Outdoors with ordinary care. A partner is recommended.
>
> Do not restrict drinking to "get a better number" — drink normally and record it. Stop and rest in shade if you feel dizzy, nauseous or develop a headache. Avoid the hottest part of the day if you are not heat-acclimatised.

Level 3 (Safe physical) · 🌲 Outdoor · about 120 min

**Materials:** Bathroom scale (0.1 kg resolution if possible); Bottle with volume marks; Notebook

**Steps**

1. Weigh yourself in minimal dry clothing after using the toilet.
2. Walk or hike for 60–90 minutes at a steady effort. Record what you drink and any urination (estimate volume).
3. Towel off sweat, weigh again in the same clothing.
4. Compute SR = (before − after + drink − urine) / hours, and % body-mass change.
5. Repeat on a different day in different weather (cool vs warm) or at a different effort.

**You have it when**

- Two measured sweat rates in L/h with conditions noted.
- A personal planning table you can use in lesson budgets and the simulator.

Builds the skill: Plan a water budget from measured sweat rates.

## Scenario question

Your 4×4 has broken down on a desert track at 11:00. 42 °C in the shade. Two of you, 12 L of water, a tarp, a satellite messenger (message sent, reply: "help within 36 h"). The nearest settlement is 35 km away.

**What is your water plan?**

1. Drink 0.5 L each per day so the 12 L lasts as long as possible, and keep working on the engine.
2. Stay put: raised tarp shade, rest through the heat, drink to a plan (~5–6 L each/day), work at dawn and dusk.
3. Walk out together at night carrying the water: 35 km is only about 9 hours on foot.
4. Drink the radiator water first to save your clean water, resting in the vehicle’s shade.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Help has a known ETA, so this is a **stay** decision (Stage 1 stay-or-move). The water question then becomes: how do I minimise sweat for 36 h? Shade raised off the ground, rest in the heat, work only in cool hours, drink what the plan says. At ~2.5 L baseline + ~0.3 L/h for 10 hot hours, each person needs ~5.5 L/day, so 12 L covers the two of you for roughly a day at that routine; you will likely end the 36 h a few percent down — uncomfortable but survivable. Work in the sun at 1.5 L/h and the same water is gone by evening. Keep signalling, and if help slips, the next priority is finding more water in the cool hours (lesson 2).

- **1.** Rationing while sweating from work in 42 °C heat drives you rapidly past 4–6 % loss; judgment and strength go first.
- **2.** Best: cuts sweat at the source, keeps the water inside you where it works, and uses the vehicle as shelter and search target. Even so, 12 L is tight for 36 h — which is exactly why every avoidable litre of sweat matters.
- **3.** Help is already coming to the vehicle; walking costs litres per hour, separates you from the search target and risks injury. A classic fatal choice.
- **4.** Radiator coolant (glycols) is toxic; never drink it.

</details>

## Summary

- Body is ~50–60 % water (~40 L at 70 kg); sweat drains blood volume first.
- Sweat rate = (mass before − after + drink − urine) / hours. Measure your own.
- ~2 % body-mass loss measurably impairs work and thinking; > 10 % is life-threatening.
- Need = baseline + Σ sweat rate × hours. **When** you work matters as much as how much you carry.
- Drink to a plan in heat, cold and altitude; don’t force huge volumes of plain water (hyponatraemia).

## Further reading

- Sawka MN, Burke LM, Eichner ER, et al.. *ACSM Position Stand: Exercise and Fluid Replacement*. 2007. Medicine & Science in Sports & Exercise 39(2):377–390. Sweat rates of ~0.5–2 L/h.
- Cheuvront SN, Kenefick RW. [Dehydration: Physiology, Assessment, and Performance Effects](https://onlinelibrary.wiley.com/doi/10.1002/cphy.c130017). 2014. Comprehensive Physiology 4(1). Review of body-water physiology and the performance effects of dehydration.
- Eifling KP, Gaudio FG, et al.. [WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update](https://journals.sagepub.com/doi/10.1177/10806032241227924). 2024. Graded evidence review; active cooling first for heat stroke.

## References

- Institute of Medicine (US National Academies). [Dietary Reference Intakes for Water, Potassium, Sodium, Chloride, and Sulfate](https://nap.nationalacademies.org/catalog/10925/dietary-reference-intakes-for-water-potassium-sodium-chloride-and-sulfate). 2005. Adequate intake ≈3.7 L/day (men) and 2.7 L/day (women) total water, from all sources.
- Sawka MN, Burke LM, Eichner ER, et al.. *ACSM Position Stand: Exercise and Fluid Replacement*. 2007. Medicine & Science in Sports & Exercise 39(2):377–390. Sweat rates of ~0.5–2 L/h.
- Cheuvront SN, Kenefick RW. [Dehydration: Physiology, Assessment, and Performance Effects](https://onlinelibrary.wiley.com/doi/10.1002/cphy.c130017). 2014. Comprehensive Physiology 4(1). Review of body-water physiology and the performance effects of dehydration.
- Adolph EF and associates. *Physiology of Man in the Desert*. 1947. Classic field studies of desert sweat rates, "voluntary dehydration" and survival without water.
- Eifling KP, Gaudio FG, et al.. [WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update](https://journals.sagepub.com/doi/10.1177/10806032241227924). 2024. Graded evidence review; active cooling first for heat stroke.
- US Army. [TB MED 507: Heat Stress Control and Heat Casualty Management](https://www.hprc-online.org/resources-partners/whec/educational-tools/tb-med-507-heat). 2022.
- US Centers for Disease Control and Prevention. [Creating and Storing an Emergency Water Supply](https://www.cdc.gov/water-emergency/about/how-to-create-and-store-an-emergency-water-supply.html). 1 gallon per person per day for at least 3 days, 2 weeks if possible; container sanitising; replace every 6 months.
