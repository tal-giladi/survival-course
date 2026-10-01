---
id: "06.2"
module: 6
minutes: 40
practice_minutes: 120
prerequisites: ["06.1"]
objectives:
  - "Build a ration plan for an uncertain duration, with a reserve and more food for the hardest days."
  - "Size and maintain a home emergency food store with first-in-first-out rotation."
  - "Explain preservation as a set of hurdles — cold, dryness, acidity, salt/sugar, heat-and-seal, smoke."
  - "Recognise spoilage and know why many dangerous foods look, smell and taste normal."
level: intermediate
volatility: concept
sources:
  - title: "Food Safety During Power Outage"
    url: https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage
  - title: "Home-Canned Foods (botulism prevention)"
    url: https://www.cdc.gov/botulism/prevention/home-canned-foods.html
  - title: "National Center for Home Food Preservation"
    url: https://nchfp.uga.edu/
  - title: "“Danger Zone” (40 °F – 140 °F)"
    url: https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f
  - title: "Build a Kit"
    url: https://www.ready.gov/kit
last_verified: "2026-09-27"
---

# 06.2 · Emergency food management

Most real food emergencies are not about finding food — they are about managing the food you already have: in a stranded vehicle, a storm-bound camp, or a home without power. Good rationing keeps people warm and clear-headed; poor storage and spoilage can turn an inconvenience into a medical emergency.

## Explanation

### Rationing: a plan, not a feeling

Rationing well is arithmetic plus psychology:

1. **Inventory** everything edible and its energy (labels, or rough values: a bar ≈ 250 kcal, 100 g nuts ≈ 600 kcal, 100 g dry pasta ≈ 350 kcal).
2. **Estimate the duration** — then add a margin. Rescues and weather windows slip. If you expect 3 days, plan for 4–5.
3. **Hold a reserve** of 10–20 % that is not part of the daily ration.
4. **Weight the plan** toward high-demand days (a walk-out, a crossing, a cold night) and the evening meal (fuel for a night of keeping warm).
5. **Eat regularly in small amounts** rather than one feast — blood glucose and morale stay steadier.
6. **Review daily** as the situation changes.

Two opposite mistakes are common. *Eating freely until the food is gone* leaves nothing for the day that matters. *Refusing to eat* while carrying food wastes it — food in the pack does no work, and a starved person on day 3 is colder and makes worse decisions. The old rule of fasting for the first 24 hours to "save food" is not supported for people with adequate water; eat modestly and keep eating.

![Food remaining over six days for three strategies: eat freely, even ration with reserve, and starving while saving food](../../assets/diagrams/ration-curves.svg)

*An even ration with a reserve is the default. Adjust it toward the days that demand most.*

### Groups

- Share **by need**, openly: people doing heavy work, the cold, the lean, children and pregnant women need more. Agree the rule early, before hunger makes it contentious.
- One person holds and issues the food; everyone can see the inventory. Secrecy breeds suspicion.
- Hot, shared meals are worth more than their calories — they are ritual and morale.

### The home emergency store

Preparedness agencies (Ready.gov and equivalents) recommend at least **several days** of non-perishable food per person, and many recommend two weeks.

| Rule | Why |
|---|---|
| Store what you **normally eat** | You will rotate it, and stress is no time for unfamiliar food |
| **First in, first out** — label purchase dates | Keeps stock fresh without waste |
| **Cool, dry, dark**, off the floor, in pest-proof containers | Heat, moisture, light and rodents are the main spoilers |
| Include **no-cook** options, a manual can opener and a safe way to heat | Power and gas may be off; never use camping stoves or barbecues indoors (carbon monoxide) |
| Plan **water with food** | Dry foods need water to prepare |
| Cover special needs | Infants, allergies, medical diets, pets |

"**Best before**" is about quality; "**use by**" is about safety — respect use-by dates on perishables.

### Preservation: stacking hurdles against microbes

Microbes need **water, warmth, suitable acidity, nutrients and time**. Every preservation method removes one or more of these:

![Preservation hurdles: cold, drying, acid, salt or sugar, heat and seal, smoke — each blocks microbial growth](../../assets/diagrams/preservation-hurdles.svg)

*Traditional foods usually combine several hurdles — dried, salted and smoked fish keeps far longer than any one method alone.*

- **Cold:** a refrigerator at or below **4 °C (40 °F)** slows growth; freezing at **−18 °C (0 °F)** stops it (but does not kill most microbes).
- **Drying:** removes the water microbes need — jerky, dried fish, dried fruit, flour, rice.
- **Acidity:** at **pH 4.6 or below**, *Clostridium botulinum* cannot grow; pickles and many fermented foods rely on this.
- **Salt and sugar:** bind water so microbes cannot use it — salt fish, cured meats, jams.
- **Heat and seal (canning):** kill microbes, then keep new ones out. **Low-acid foods** (vegetables, meat, fish) must be **pressure canned** at home; a boiling-water bath does not reach temperatures that destroy botulinum spores.
- **Smoke:** dries the surface and deposits antimicrobial compounds; on its own it is weak.

Use **tested procedures** (for example the US National Center for Home Food Preservation) rather than improvised recipes — botulism from home-canned vegetables is a recurring cause of outbreaks.

> [!CAUTION]
> **Spoilage you can’t see**
>
> Obvious spoilage — mould, slime, sour or putrid smell, bulging, leaking or spurting cans — means discard. But **pathogens and their toxins often cause no change at all**. Botulinum toxin cannot be seen, smelled or tasted, and a small taste can be deadly. **Never taste to test. When in doubt, throw it out.**

### Power cuts

US food-safety guidance: a closed refrigerator keeps food safe for about **4 hours**; a **full** freezer about **48 hours** (**24 hours** if half full). Keep doors shut. Discard perishables (meat, fish, eggs, dairy, leftovers) that have been above 4 °C for more than 2 hours. Food that still has ice crystals or is at or below 4 °C can be refrozen (quality may suffer). An appliance thermometer turns guesses into facts.

[Simulation: Energy Budget Planner](../../simulations/energy-budget/index.html)

Try “eat freely”, “even ration + reserve” and “starve now” in the boreal scenario — compare the walk-out day.

## Scientific and technical background

### Ration arithmetic

Daily ration $R$ from carried energy $E$, planned days $D$ and reserve fraction $r$:

$$
R = \frac{E(1-r)}{D}
$$

Example: two people carry 6,000 kcal; rescue expected in 3 days, planned for 5 with a 15 % reserve:
$R = 6000 \times 0.85 / 5 = 1{,}020$ kcal per day for the pair — about 500 kcal each. That is a large deficit (see s6-l1), but it lasts, and the 900 kcal reserve fuels a walk-out if needed.

### Why "a little warm" is worse than you think

Bacteria in the danger zone can double roughly every 20 minutes. Starting from 1,000 cells, 4 hours is 12 doublings: $1000 \times 2^{12} \approx 4$ million. That is why the guidance is in hours, not days.

## Examples

**Stranded car in a blizzard (rural):** the family’s kit holds 6,000 kcal of bars and nuts for four people. Plan: small snacks every few hours, a larger share at night when it is coldest, and water from melted snow on the stove with a window cracked open for ventilation.

**Boreal canoe trip, wind-bound:** food packed for 5 days, now likely 8. Cut the daily ration by a third, keep a reserve, add safe legal fishing if gear and licence allow (s6-l7).

**Tropical storm at home (coastal city):** power out for 3 days. The freezer was full and kept closed: day 1 eat fridge perishables first, then freezer items as they thaw, then the pantry.

**Desert:** dried foods need water — crackers and dried fruit are better than salty jerky or dry noodles when water is short.

**Arctic expedition:** high-fat rations, eaten little and often; everything freezes, so bars are kept in an inside pocket.

## Common mistakes

- Eating freely at first “because rescue will come soon”.
- Refusing to eat while carrying food — it helps nobody in the pack.
- Myth: “If it smells fine, it’s safe.” Many pathogens and toxins cause no change.
- Tasting food to decide whether it spoiled.
- Storing emergency food nobody likes, so it is never rotated and expires.
- Using a boiling-water bath to can vegetables or meat.
- Opening the freezer repeatedly during a power cut.
- Running a camp stove or barbecue indoors to cook — carbon monoxide.

## Practical exercises

### Build and rotate a 72-hour household food store

Level 3 (Safe physical) · 🏠 Home · about 90 min

**Materials:** Shelf or crate; Marker for dates; Manual can opener; Food your household normally eats

**Steps**

1. Compute your household’s energy need for 3 days (≈ 2,000 kcal per adult per day as a baseline; more in a cold house).
2. Assemble non-perishable food to meet it, including options that need no cooking and little water.
3. Label each item with its purchase date; put the oldest at the front.
4. Set a calendar reminder every 6 months to eat and replace the oldest items.

**You have it when**

- Total kcal ≥ your 3-day need, verified from labels.
- Rotation reminder set.
- A safe way to prepare food without mains power (and no indoor combustion).

Builds the skill: Emergency food storage and rotation.

### Ration plan for a stranded group

Level 2 (Simulation) · 🏠 Home · about 30 min

**Steps**

1. Scenario: four people, 9,000 kcal of food, rescue expected in 3 days, a 12 km walk-out possible on day 4.
2. Write a daily plan with a reserve and a larger ration the day before and the day of the walk-out.
3. Decide how you will share between a large, active adult, a lean teenager and an older adult. Write the rule down.
4. Run your plan in the Energy Budget simulation’s boreal scenario and adjust.

**You have it when**

- Plan sums to ≤ 9,000 kcal with a named reserve.
- Sharing rule is explicit and justified by need.

Builds the skill: Energy and ration planning.

## Scenario question

Rural winter storm. You, your partner and your 10-year-old are snowed into your car on a quiet road; help is estimated at 24–48 hours. It is −8 °C outside. You have 5,000 kcal of mixed snacks, 3 L of water, a small stove and a pot, and blankets. The engine is off to save fuel; the exhaust is buried in snow.

**What is the best food and warmth plan?**

1. Eat half the food now to stay warm, and save the rest for tomorrow.
2. Ration for 48 h with a reserve, eat often; melt snow only with a window open.
3. Save all the food until you are sure that no one is coming for you.
4. Run the engine for heat and cook with the windows shut to hold heat.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Plan for the longer estimate with a reserve (5,000 × 0.85 / 2 days / 3 people ≈ 700 kcal per person-day even at 48 h; less if it runs longer — review daily). In the cold, food is part of your heat source: eat regularly, more at night. Water comes from snow — melted, not eaten. Carbon monoxide from a buried exhaust or an indoor stove kills far faster than hunger.

- **1.** Front-loading leaves too little if the wait runs to 48 hours or longer.
- **2.** Best: ~700 kcal per person-day eaten little and often (more at night), water from snow, never a stove in a sealed car, and the exhaust cleared before any engine run.
- **3.** Hungry people in the cold get colder and more irritable; food in the bag does nothing.
- **4.** A buried exhaust and a stove in a sealed car are classic carbon-monoxide deaths.

</details>

## Summary

- Inventory → duration + margin → reserve (10–20 %) → daily ration weighted to hard days → review.
- Store what you eat; first in, first out; cool, dry, dark, pest-proof.
- Preservation = hurdles: cold, dry, acid (pH ≤ 4.6), salt/sugar, heat + seal, smoke.
- Low-acid foods need pressure canning. Never taste to test. When in doubt, throw it out.
- Power cut: fridge ~4 h, full freezer ~48 h (24 h half full).

## Further reading

- FoodSafety.gov (USDA/FDA/CDC). [Food Safety During Power Outage](https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage). Fridge ~4 h; full freezer ~48 h (24 h half full); never taste to decide.
- University of Georgia / USDA NIFA. [National Center for Home Food Preservation](https://nchfp.uga.edu/). Tested procedures for canning, drying, freezing, pickling and fermenting.

## References

- FoodSafety.gov (USDA/FDA/CDC). [Food Safety During Power Outage](https://www.foodsafety.gov/food-safety-charts/food-safety-during-power-outage). Fridge ~4 h; full freezer ~48 h (24 h half full); never taste to decide.
- US Centers for Disease Control and Prevention. [Home-Canned Foods (botulism prevention)](https://www.cdc.gov/botulism/prevention/home-canned-foods.html). Pressure canning is the only safe home method for low-acid foods.
- University of Georgia / USDA NIFA. [National Center for Home Food Preservation](https://nchfp.uga.edu/). Tested procedures for canning, drying, freezing, pickling and fermenting.
- USDA Food Safety and Inspection Service. [“Danger Zone” (40 °F – 140 °F)](https://www.fsis.usda.gov/food-safety/safe-food-handling-and-preparation/food-safety-basics/danger-zone-40f-140f). Bacteria can double in as little as 20 minutes; the 2-hour / 1-hour rules.
- Ready.gov (FEMA). [Build a Kit](https://www.ready.gov/kit).
- Keys A, Brožek J, Henschel A, Mickelsen O, Taylor HL. *The Biology of Human Starvation*. 1950. The Minnesota Starvation Experiment: physical and psychological effects of prolonged semi-starvation.
