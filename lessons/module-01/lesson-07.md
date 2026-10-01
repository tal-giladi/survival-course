---
id: "01.7"
module: 1
minutes: 40
practice_minutes: 30
prerequisites: ["01.2"]
objectives:
  - "Write the body’s heat balance in words and in a simple equation."
  - "Explain the four heat-transfer mechanisms — radiation, convection, conduction, evaporation — and give a control for each."
  - "Explain quantitatively why wet + wind is so dangerous."
  - "Estimate heat production at rest, walking and shivering."
level: beginner
volatility: concept
sources:
  - title: "TB MED 508: Prevention and Management of Cold-Weather Injuries"
    url: https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf
  - title: "Wind Chill Chart and formula"
    url: https://www.weather.gov/safety/cold-wind-chill-chart
  - title: "Cold Water Boot Camp — the 1-10-1 principle"
    url: https://www.coldwaterbootcamp.com/pages/1_10_60v2.html
last_verified: "2026-09-27"
---

# 01.7 · Your body’s heat budget

Hypothermia and heat illness are among the most common serious wilderness emergencies, and both are failures of heat balance. When you understand the four mechanisms, every piece of kit and every shelter becomes a deliberate control rather than a habit.

## Explanation

Your core runs at about **37 °C**. It stays there only if the heat you **produce** matches the heat you **lose**. Almost every survival skill — clothing, shelter, fire, even water and food — is a way of controlling one side of that balance. This lesson gives you the model; Stage 8 deepens it.

### Heat in

- **Metabolism.** At rest an adult produces roughly **80–100 W** (like an old incandescent bulb). Walking with a pack: **300–500 W**. Hard work: 600+ W.
- **Shivering** can raise heat production several-fold for a while, but it is tiring, burns glycogen fast, and ruins fine motor control.
- **External heat.** Sun, fire, a warm partner, warm drinks (small, but good for morale).

### Heat out: four mechanisms

![Four heat-loss mechanisms from a person: radiation, convection, conduction, evaporation, plus respiration](../../assets/diagrams/heat-loss.svg)

*Four routes for heat to leave the body — plus breathing, which combines convection and evaporation.*

| Mechanism | What happens | Biggest when… | Controls |
| --- | --- | --- | --- |
| **Radiation** | Infrared energy flows from warm skin/clothes to colder surroundings — including a clear night sky. | Clear, cold nights; bare head and hands. | Overhead cover, hat, reflective layers, a fire’s radiant heat. |
| **Convection** | Moving air or water carries away the warm layer next to you. | Wind; being in moving water. | Windproof shell, get out of the wind, lee side of obstacles. |
| **Conduction** | Direct contact with colder things: ground, snow, rock, water, metal. | Sitting or lying on cold/wet ground. | Ground insulation: pack, pad, 20–30 cm of dry leaves or boughs. |
| **Evaporation** | Water turning to vapour takes a lot of heat with it — sweat, wet clothes, breath. | Sweating, wet clothing, dry cold air. | Avoid sweating (vent, slow down), stay dry, change wet layers. |

### Wet + wind: the killer combination

Water conducts heat about **25 times** better than air, and wet fabric collapses the trapped air that makes insulation work. Add wind and the evaporation and convection losses multiply. This is why most hypothermia deaths do not happen in extreme cold; they happen at **0–10 °C in rain and wind**, to people in wet clothing. Staying dry is easier than getting dry: put your shell on *before* you get wet, and take layers off *before* you sweat.

[Simulation: Heat Balance Lab](../../simulations/heat-balance/index.html)

Explore: set 5 °C, light rain and wind, then compare wet cotton with a dry synthetic layer and a shell.

## Scientific and technical background

### The heat balance equation

Physiologists write the body’s heat storage $S$ as:

$$
S = M - W \pm R \pm C \pm K - E
$$

In words: **stored heat = metabolic heat − external work ± radiation ± convection ± conduction − evaporation**. The ± signs mean the environment can add heat (sun, fire, hot sand) or take it away. If $S$ is negative for long, core temperature falls; if positive, it rises.

### How much heat is that?

The body’s specific heat is about $3.5\ \text{kJ/(kg·°C)}$. For a 70 kg person:

$$
70 \times 3.5 = 245\ \text{kJ per °C}
$$

So a net loss of 100 W (100 J every second) for one hour removes $100 \times 3600 = 360\ \text{kJ}$ — about **1.5 °C** of core-equivalent heat if nothing compensates. In reality the body defends the core by cooling the limbs first and by shivering, but the arithmetic shows how fast an imbalance adds up.

### Evaporation is expensive

Evaporating water absorbs about $2.4\ \text{MJ}$ per litre. Evaporating just **100 ml** from wet clothing removes about $240\ \text{kJ}$ — roughly **one degree** of core heat for a 70 kg person. That is why damp clothes on a windy ridge can chill you faster than dry air at a much lower temperature.

### Radiation to the sky

Radiative loss follows the Stefan–Boltzmann law, $q = \varepsilon\sigma(T_s^4 - T_{sky}^4)$, with temperatures in kelvin. On a clear night the effective sky temperature can be 20–30 °C colder than the air, so an exposed person radiates heat to "space" even when the air is mild. Any roof — a tarp, dense branches — replaces that cold sky with a warmer surface.

## Examples

**Temperate hills, 6 °C, rain and wind.** A walker in jeans and a cotton hoodie gets soaked. Conduction through wet fabric, evaporation and wind convection combine. Classic hypothermia weather.

**Desert night.** After a 38 °C day, a clear night sky drops the temperature to 8 °C. Radiation to the sky and conduction into sand chill a sleeper with no ground insulation. Desert survivors often report being dangerously cold at night.

**Snow.** Sitting directly on snow drains heat by conduction; a closed-cell foam pad or a thick bed of boughs cuts it dramatically.

**Tropics.** Constant wetness and nighttime temperatures of 18–22 °C can still produce chilling, especially after a day of sweating.

## Common mistakes

- Believing hypothermia requires freezing temperatures — most cases occur at 0–10 °C in wet, windy conditions.
- Working hard until soaked in sweat, then stopping to rest in the wind.
- Insulating above yourself but lying directly on cold ground.
- Eating snow to hydrate in the cold — it costs body heat to melt.

## Practical exercises

### Wet-sleeve experiment

Level 3 (Safe physical) · 🏠 Home · about 30 min

**Materials:** Two identical sleeves or socks (one cotton, one wool or synthetic, if available); Two thermometers (or one, used in turn); A fan; Water

**Steps**

1. Wrap each thermometer bulb in a dry sleeve; note the starting temperature.
2. Wet one sleeve, wring it out, and put both in front of a fan for 10 minutes.
3. Record temperatures every 2 minutes. Repeat with cotton vs wool/synthetic if you have both.
4. Explain your results using evaporation and convection.

**You have it when**

- You measured a clear temperature drop in the wet sleeve.
- You can explain the result in terms of the heat balance equation.

Builds the skill: Clothing system management.

## Scenario question

You are on an exposed moor at 5 °C. Light rain, 25 km/h wind. You have been walking hard uphill and your base layer is damp with sweat. You stop to check the map.

**What should you do first?**

1. Stay in the wind and check the map; you will warm up once you start walking.
2. Get into the lee of a wall, add your shell and insulation, then check the map.
3. Take off the damp base layer so it can dry in the wind while you read the map.
4. Drink some cold water to stay hydrated, then check the map before moving on.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** When you stop working, heat production falls sharply while losses stay high. Getting out of the wind (convection) and covering damp layers with a shell (evaporation + convection) are the cheapest, biggest wins. Then check the map.

- **1.** Standing still, damp, in wind is exactly the heat-loss worst case.
- **2.** Best: cuts convection and evaporative loss immediately and cheaply.
- **3.** Exposing skin and drying clothing in wind removes heat rapidly.
- **4.** Hydration matters but is not the most urgent heat-balance action here.

</details>

## Summary

- Heat in = metabolism (+ sun, fire). Heat out = radiation, convection, conduction, evaporation.
- $S = M - W \pm R \pm C \pm K - E$: if $S<0$ for long, core temperature falls.
- Water conducts heat ~25× better than air; evaporation removes ~2.4 MJ per litre.
- Stay dry, get out of the wind, insulate from the ground, cover the sky.

## Further reading

- Ken Parsons. *Human Thermal Environments*. 3rd ed., 2014. Standard text on human heat exchange; clo and met units.
- Cody Lundin. *98.6 Degrees: The Art of Keeping Your Ass Alive*. 2003. Readable and correctly centred on core temperature; pair with USARIEM and WMS for evidence.
- US Army / USARIEM. [TB MED 508: Prevention and Management of Cold-Weather Injuries](https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf). Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.

## References

- Dow J, Giesbrecht GG, Danzl DF, et al.. *WMS Clinical Practice Guidelines for the Out-of-Hospital Evaluation and Treatment of Accidental Hypothermia: 2019 Update*. 2019. Wilderness & Environmental Medicine 30(4S):S47–S69.
- US Army / USARIEM. [TB MED 508: Prevention and Management of Cold-Weather Injuries](https://usariem.health.mil/assets/docs/partnering/tbmed508.pdf). Evidence-based military cold-injury doctrine: clothing, nutrition, hypothermia, frostbite.
- Ken Parsons. *Human Thermal Environments*. 3rd ed., 2014. Standard text on human heat exchange; clo and met units.
- US National Weather Service. [Wind Chill Chart and formula](https://www.weather.gov/safety/cold-wind-chill-chart). The 2001 index, which replaced the 1945 Siple–Passel index that overstated chill.
- Gordon Giesbrecht. [Cold Water Boot Camp — the 1-10-1 principle](https://www.coldwaterbootcamp.com/pages/1_10_60v2.html).
