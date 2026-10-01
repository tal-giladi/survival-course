---
id: "01.2"
module: 1
minutes: 35
practice_minutes: 30
prerequisites: ["01.1"]
objectives:
  - "Use the rule of threes to order threats — and name the situations where it breaks."
  - "Explain why priorities shift with environment and time."
  - "Score candidate actions by risk reduced per unit of time, energy and resources, adjusted for reversibility."
  - "Apply the military Protection → Location → Acquisition ordering as a cross-check."
level: beginner
volatility: concept
sources:
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
  - title: "AFH 10-644 SERE Operations"
    url: https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017
  - title: "WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update"
    url: https://journals.sagepub.com/doi/10.1177/10806032241227924
  - title: "Cold Water Boot Camp — the 1-10-1 principle"
    url: https://www.coldwaterbootcamp.com/pages/1_10_60v2.html
  - title: "The Ten Essentials"
    url: https://www.mountaineers.org/blog/what-are-the-ten-essentials
last_verified: "2026-09-27"
---

# 01.2 · Survival priorities

Priorities are how you spend limited time and energy. Spending the first daylight hours on the wrong thing — food, a long walk, an elaborate shelter — can use up the margin you need for the thing that actually kills people: cold, wet, dark, dehydration and injury.

## Explanation

### The rule of threes — a useful lie

The classic mnemonic says you can survive about:

- **3 minutes** without air (or with severe bleeding),
- **3 hours** in a harsh environment without protection,
- **3 days** without water,
- **3 weeks** without food.

Its value is not the numbers. It is the **ordering**: airway and bleeding before exposure, exposure before water, water before food. Beginners routinely get this backwards — spending their first afternoon hunting for food while getting soaked and chilled.

![Rule of threes as ranges on a logarithmic time axis](../../assets/diagrams/rule-of-threes.svg)

*The same ordering, shown honestly: each category is a range spanning an order of magnitude or more.*

### Where it breaks

- **Heat** can kill through dehydration and heat stroke in **hours**, not days. In a hot desert, water and shade jump to the top.
- A **mild, dry summer night** needs almost no shelter; "3 hours" is irrelevant.
- **Cold water** immersion can incapacitate in minutes through cold shock and swim failure — exposure becomes a minutes-scale threat.
- **Food** rarely matters in the short term, but a calorie deficit in severe cold reduces your ability to generate heat, so food *supports* the exposure priority.

So we treat the rule of threes as a **starting order** and then correct it with the 12 questions and the environment.

### Protection → Location → Acquisition

Military survival doctrine (ATP 3-50.21, AFH 10-644) orders survival tasks broadly as:

1. **Protection** — first aid, clothing, shelter, fire for warmth: *keep the body working*.
2. **Location** — signaling and communication: *get found*.
3. **Acquisition** — water, then food: *resupply the body*.

This is the rule of threes rewritten as tasks. It is a good cross-check when you are unsure.

### The next highest-value action

Real priorities are not a ranking of categories; they are a choice between specific actions. For each candidate action, ask:

- **How much risk does it remove?** (Which threat, and how serious?)
- **What does it cost?** Time, energy, sweat, daylight, materials, battery.
- **Is it reversible?** Walking away from a known location is hard to undo; putting on a jacket is trivially reversible.
- **Does it unlock other actions?** Stopping to think unlocks everything; a fire unlocks warmth, drying, boiling water and signaling.

A cheap action that removes a big risk is almost always next. *Putting on your rain shell before you are wet* is the classic example: seconds of effort, hours of protection.

> [!WARNING]
> **Watch for sweat**
>
> Many high-effort actions (fast hiking, frantic shelter building) soak your clothing with sweat, which later robs heat as it evaporates. In cold weather, **pace work to avoid sweating** and vent layers before you start.

## Scientific and technical background

### A simple value model

Put rough numbers on it. Let an action reduce the probability of a bad outcome by $\Delta p$, and let the outcome's severity be $S$ (on any consistent scale). The **risk reduced** is $\Delta p \times S$. If the action costs $C$ (minutes of daylight, say), its value per cost is

$$
V = \frac{\Delta p \times S}{C}
$$

In words: *how much danger does this remove, per minute spent?* You will never compute this precisely in the field. But thinking this way exposes bad choices — like spending 90 minutes of the last daylight making a fishing line (tiny $\Delta p$, huge $C$).

| Action (cold, wet evening) | Risk removed | Cost | Verdict |
| --- | --- | --- | --- |
| Put on waterproof shell now | Large (keeps insulation dry) | 1 min | **Do first** |
| Pitch tarp over a sitting spot | Large (rain + wind) | 10–15 min | Next |
| Gather dry tinder into a pocket | Medium (enables fire later) | 5 min | Soon |
| Walk 2 km to "maybe" find the trail | Uncertain; may increase risk | 40 min + sweat | Avoid in fading light |
| Look for food | Negligible tonight | 60 min | Not now |

*Ranking specific actions, not categories.*

## Examples

**Arctic/subarctic, −12 °C, wind.** Protection dominates completely: insulation, wind block, ground insulation, fire. Water comes from melting snow — but *eating* snow costs body heat, so melting it over fire or in a bottle inside your jacket is better.

**Tropical rainforest.** Temperature risk is lower, but constant wet causes skin breakdown and chilling at night; water is plentiful but contaminated; insects and infection matter. Priorities: a raised, dry place to sleep; water treatment; foot care.

**Coastal, cold water.** If you are *in* the water, the priority is surviving cold shock (control breathing for the first minute), then getting out or as much of your body out as possible. Minutes matter.

**Urban power outage in winter.** Air: carbon-monoxide risk from improvised heating is a *3-minute* category threat that people create themselves. Then warmth, water, communication.

## Common mistakes

- Treating the rule of threes as literal timings instead of an ordering heuristic.
- Prioritizing food early — it is almost never the limiting factor in the first days.
- Choosing high-effort actions that cause sweating in the cold.
- Ranking categories ("shelter is priority 2") instead of comparing concrete actions and their costs.
- Forgetting that irreversible actions (leaving a known location, using up your only water on washing) need a higher bar.

## Practical exercises

### Four environments, four priority lists

Level 1 (Knowledge) · 🏠 Home · about 30 min

**Steps**

1. Take four settings: hot desert at noon, temperate forest in autumn rain, snowy mountain at dusk, city apartment during a 3-day power cut in winter.
2. For each, list the top four threats in order.
3. For each threat, write one cheap, high-value action.
4. Compare the lists: what changed, and why?

**You have it when**

- Each list begins with a threat that could harm you within hours, not days.
- You can justify every ordering using a mechanism (heat loss, sweat, CO, etc.).

Builds the skill: Run the Observe–Assess–Prioritize–Plan–Act–Reassess loop.

## Interactive simulation

[Simulation: Priority Triage](../../simulations/priority-triage/index.html)

Pick the next highest-value action in rapidly changing situations.

## Scenario question

Late autumn, temperate forest, 15:45. Sunset 17:10. 7 °C and falling; light rain is starting. You twisted an ankle — painful but you can hobble. You have a 2 × 3 m tarp, cord, a lighter, a knife, 1 L of water, a granola bar, a phone with no signal, and a fleece and rain jacket in your pack. The trailhead is roughly 5 km away.

**Which plan best reflects correct priorities for the next hour?**

1. Hobble toward the trailhead as fast as possible to beat the dark and the rain.
2. Put on fleece and shell, pitch the tarp low nearby, gather fuel, try for signal.
3. Spend the remaining light building the biggest possible signal fire nearby.
4. Ration the water strictly and drink nothing at all until the morning light.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** The rain and falling temperature make **exposure** the threat that will hurt you first, and it is *cheap* to address now while you still have light and dry clothing. The ankle raises the cost and risk of moving, so staying put becomes more attractive. Communication is attempted opportunistically. Food and water are not tonight’s limiting factors.

- **1.** Five km on a bad ankle in fading light and rain risks a worse injury and exhaustion while wet — an irreversible gamble.
- **2.** Best: protection first (stay dry, block wind and rain, insulate from the ground), fire as a backup, and communication attempted without committing to a long move.
- **3.** Signaling matters, but a fire in the rain with no shelter leaves you wet and cold; also check it is safe and legal.
- **4.** Rationing water rather than sweat is a classic error; you have enough for tonight and dehydration worsens judgment.

</details>

## Summary

- The rule of threes gives an **ordering**, not timings: airway/bleeding → exposure → water → food.
- Heat, cold water and extreme cold can compress timelines dramatically.
- Protection → Location → Acquisition is the same ordering expressed as tasks.
- Choose actions by **risk removed per cost**, with extra caution for irreversible ones.

## Further reading

- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- Cody Lundin. *98.6 Degrees: The Art of Keeping Your Ass Alive*. 2003. Readable and correctly centred on core temperature; pair with USARIEM and WMS for evidence.

## References

- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- US Air Force. [AFH 10-644 SERE Operations](https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017). 2017. The most comprehensive public survival reference (650+ pages).
- Eifling KP, Gaudio FG, et al.. [WMS Clinical Practice Guidelines for the Prevention and Treatment of Heat Illness: 2024 Update](https://journals.sagepub.com/doi/10.1177/10806032241227924). 2024. Graded evidence review; active cooling first for heat stroke.
- Gordon Giesbrecht. [Cold Water Boot Camp — the 1-10-1 principle](https://www.coldwaterbootcamp.com/pages/1_10_60v2.html).
- The Mountaineers. [The Ten Essentials](https://www.mountaineers.org/blog/what-are-the-ten-essentials). The organization that originated the Ten Essentials, now framed as systems.
