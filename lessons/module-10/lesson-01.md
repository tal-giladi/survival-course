---
id: "10.1"
module: 10
minutes: 40
practice_minutes: 70
prerequisites: ["01.6"]
objectives:
  - "Describe a problem by the function it needs, not by the object you are missing."
  - "Name the material properties that decide whether an object can do a job, and read them in ordinary objects."
  - "Recognise functional fixedness and use deliberate prompts to break it."
  - "Plan a load test with a safety factor before trusting an improvised item with anything that matters."
  - "Weigh the opportunity cost of using gear that is already doing a vital job."
level: intermediate
volatility: concept
sources:
  - title: "ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)"
    url: https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316
  - title: "AFH 10-644 SERE Operations"
    url: https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017
  - title: "Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)"
    url: https://research.fs.usda.gov/treesearch/62200
last_verified: "2026-09-27"
---

# 10.1 · The improvisation method

Kit breaks, gets lost and never quite matches the emergency you actually have. People who can see the functions hidden in ordinary objects turn a broken strap, a missing bottle or a torn tent into a 10-minute job instead of a crisis. A method also protects against the two classic errors: solving the wrong problem, and trusting something that was never tested.

## Explanation

Improvising is not a bag of clever tricks; it is a **method** for solving a problem when the proper tool is missing. The method works for a torn tent in the mountains, a broken strap in the desert and a flooded kitchen in a city. Military survival manuals put “Improvise” into their SURVIVAL mnemonic for this reason.

### Function over form

The first step is to stop asking “where is my water bottle?” and ask **“what must the thing do?”** A water bottle *holds water without leaking*, *is safe for drinking water*, *closes*, and *can be carried*. Each of those is a **function**, and each can be met by a different object. A clean bin bag holds water; a rucksack carries it; a cord closes the neck. None of them is a “bottle”, but together they do the bottle’s job.

Write the functions as verbs: *hold*, *carry*, *keep dry*, *stiffen*, *pad*, *bind*, *insulate*, *signal*. Then give each verb its **requirements**: how much, how long, how strong, how clean.

![The improvisation cycle: define the function, list the properties it needs, inventory candidate objects, build simply, test before trusting, use and monitor; a failed test loops back to the candidates](../../assets/diagrams/s10-method-cycle.svg)

*The improvisation cycle. Define the function first; test before you trust.*

### Material properties: what an object *is* made of decides what it can *do*

| Property | Question to ask | Good examples | Poor examples |
|---|---|---|---|
| **Waterproof** | Will water pass through or soak in? | plastic film, rubberised fabric, metal | cotton, cardboard, most rucksacks |
| **Food-safe** | Is it safe to hold drinking water or food? | drinks bottles, cooking pots, food bags | anything that held fuel, oil, pesticide or chemicals; scented bags |
| **Rigid** (stiffness) | Does it bend under load? | sound dead wood, poles, folded foam, rolled magazine | cord, cloth, wet cardboard |
| **Strong in tension** | Can it be pulled hard without breaking? | cord, straps, belts, tarps | tape, paper, thin plastic |
| **Binding** | Can it wrap and grip? | tape, cord, cable ties, cloth strips | rigid objects |
| **Padding / insulation** | Is it soft, springy, full of trapped air? | foam, dry clothing, dry leaves | wet cotton, hard objects |
| **Abrasion resistance** | Will it survive rubbing on rock or ground? | wire, nylon webbing, leather | tape, thin plastic |
| **Heat tolerance** | Can it sit near a flame? | metal, water-filled containers (Stage 7) | most plastics, synthetics |

Most failures in improvised gear come from one property that was ignored: a bag that was waterproof but not food-safe, a splint that was stiff but had nothing soft against the skin, a tape repair that was sticky but not abrasion-resistant.

![Property matrix rating nine ordinary objects from 0 to 3 on waterproofness, food safety, rigidity, strength in tension, binding, padding and abrasion resistance. A used fuel bottle is waterproof but scores zero for food safety.](../../assets/diagrams/s10-property-matrix.svg)

*Read a column when you know the function; read a row to see what else an object could do.*

### Functional fixedness — the trap in your own head

Psychologists call the habit of seeing an object only in its usual role **functional fixedness**. In Karl Duncker’s classic “candle problem” (1945), people asked to fix a candle to a wall using a candle, matches and a box of drawing pins often failed to see the **box** as a shelf when it was presented full, doing its usual job as a container. When the box was given to them empty, the solution came much more easily.

In the field this looks like: “I have no splint” (while sitting on a foam pad), “I have no rope” (while wearing a belt and two bootlaces), “I have nothing to carry water in” (while holding an empty stuff sack and a bin liner). Ways to break it:

1. **Say the function, not the name**: “something stiff, 30 cm long, that I can pad”.
2. **Empty everything out** and lay it on the ground. Objects in a pack are invisible.
3. **Describe each object by its properties** (“thin, strong, flexible, waterproof film”), not its name (“bin bag”).
4. **Ask “what else?” three times** for each item.
5. **Include nature and rubbish**: dead wood, stones, bark, a car’s floor mats, a plastic crate.

> [!WARNING]
> **Test before trusting**
>
> An improvised item is **untested until you test it**. Load it at ground level, where failure costs nothing, with **more** than it will carry in use (a safety factor of about 2 is a reasonable field rule for non-life-safety loads). Improvised items must **never** be used for life-safety loads such as climbing, abseiling, lowering people or crossing water — those need certified equipment and training (Stage 13).

### Opportunity cost: every object is already doing a job

Your rain jacket keeps you dry; your foam pad insulates you from the ground; your spare socks are tonight’s dry socks. Using one of them to fix something else can **solve a small problem by creating a big one**, especially in cold, wet weather (Stage 1 heat balance). Before you cut, soak or give away an item, ask: *what job is it doing now, and who does that job instead?*

The same logic prefers **reversible** improvisations (Stage 1, decisions): tie rather than cut, lash rather than nail, tape rather than glue, so the item can go back to its original job.

### The method in one line

**Function → properties → candidates → build simply → test → use and monitor.** It is Stage 1’s decision loop applied to things.

[Simulation: Improvise Challenge](../../simulations/improvise-challenge/index.html)

Split a problem into functions, assign objects, load-test, fix the weak link, then commit.

## Scientific and technical background

### Loads, weights and a safety factor

A load’s **weight** is its mass times gravity: $W = m \times g$, with $g \approx 9.81\ \text{m/s}^2$. A litre of water has a mass of about 1 kg, so 8 L of water weighs about

$$
W = 8\ \text{kg} \times 9.81\ \text{m/s}^2 \approx 78\ \text{N}.
$$

Real loads are **dynamic**: swinging, jolting and gusts can briefly double the force. A **safety factor** (SF) covers that and the unknown quality of improvised material:

$$
\text{Test load} = \text{SF} \times \text{working load}.
$$

With SF = 2, test that water-bag hanger with about 16 kg (for example two full 8 L bags, or you pulling steadily with a luggage scale) — at knee height, over soft ground.

### Why the weakest link decides

A system in series fails at its weakest part. If a hanger has a branch rated (by your test) to 30 kg, a cord to 100 kg and a knot that keeps about half of the cord’s strength (Stage 7, knot efficiency), the whole system is only as strong as the branch: 30 kg. Testing the **assembled** item finds the weakest link you did not think of — a slipping knot, a hidden crack, a tape that peels.

### Stiffness vs strength

Two different properties are often confused. **Stiffness** is how little something bends under load; **strength** is how much load breaks it. A cardboard tube is stiff until it gets wet; a paracord is strong but has no stiffness at all. Wood is stiff and strong **along** the grain, weak across it, and dead wood can hide rot inside a sound-looking skin (Stage 3). Choose by the property the function needs.

## Examples

**Forest (temperate).** Pack strap buckle snapped. Function: *join two straps and let them adjust*. Candidates: a trucker’s hitch in cord, a stick toggle through two loops, a safety pin chain. The toggle is quick, reversible and tested by leaning into the strap before the pack goes on.

**Desert.** Sun hat lost. Function: *shade the head and neck, let sweat evaporate*. A light-coloured shirt or bandana worn as a legionnaire cap does it; a black bin bag would shade but traps heat — wrong property.

**Mountain.** A crampon strap breaks. Function: *hold the crampon to the boot under load*. Cord lashing, tested on flat, safe ground; the group then chooses easier terrain, because improvised gear lowers your margin (Stage 1, risk).

**Tropical.** Rain soaks everything. Function: *keep the phone and matches dry*. A zip-lock bag inside another bag, inside the pack’s middle. Two barriers are redundancy (Stage 1).

**Arctic / subarctic.** A mitten is lost. Function: *insulate the hand and block wind*. A spare sock over the hand inside a stuff sack or a plastic bag as a wind shell. The dry sock is also critical for the feet — decide which need is greater now.

**Urban (after an earthquake).** No stretcher for a casualty with a leg injury. Function: *rigid, carryable platform*. A door, a table top or a ladder with blankets, strapped with belts — tested by lifting it loaded with bags first.

**Coastal.** A kayak paddle cracks. Function: *stiffen the shaft across the crack*. A splint of driftwood or a tent pole section, bound with tape and cord either side of the crack, then paddling gently close to shore.

## Common mistakes

- Searching for the missing object instead of defining the function it performed.
- Using a container that once held fuel or chemicals for drinking water.
- Trusting an improvised item without testing it at ground level first.
- Using a critical item (rain jacket, sleeping pad, dry socks) for a repair in cold, wet weather.
- Cutting or gluing when tying or lashing would work and could be undone.
- Myth: “Paracord is rated to 550 lb, so my improvised rig holds 250 kg.” A rating is for new cord in a straight pull; knots, bends, wear and shock loads cut it greatly — and improvised rigs are never for life-safety loads.
- Myth: “A real survivor can make anything from nothing.” Improvisation extends good kit; it does not replace it. The best improvisers carry a small repair kit.

## Practical exercises

### Function-first inventory

Level 1 (Knowledge) · 🏠 Home · about 30 min

**Materials:** The contents of your day pack or car; Paper and pencil

**Steps**

1. Empty your pack onto a table or the floor.
2. For each object, write three **properties** (e.g., “waterproof, flexible, thin”) and three **functions** it could perform other than its usual one.
3. Pick four functions that commonly fail on trips (carry water, splint, bind, keep dry). For each, list the two best candidates from your pile.
4. Mark any candidate that is also **critical** (warmth, rain protection, navigation, light). Choose a non-critical alternative where you can.

**You have it when**

- Every object has at least three alternative uses.
- Every common failure has two candidates, at least one non-critical.

Builds the skill: Improvised equipment.

### Build and load-test an improvised hanger

> [!WARNING]
> **Home.** Safe to do at home or at a desk.
>
> Keep loads low over the floor and your feet out from under them.

Level 2 (Simulation) · 🏠 Home · about 40 min

**Materials:** A broom handle or dowel; Cord; Two bags or buckets; Water bottles as weights; Luggage scale (optional)

**Steps**

1. Decide the working load: a bag with 4 L of water (about 4 kg).
2. Build a hanger: the handle resting between two chairs, the bag hung from a clove hitch in the middle.
3. Test at a safety factor of 2: hang 8 kg (or pull 8 kg on the scale), low over the floor.
4. Note the first thing that moves, slips or creaks. Improve it and repeat.

**You have it when**

- The hanger holds twice the working load for a minute without slipping.
- You identified and fixed the weakest link.

Builds the skill: Improvised equipment.

## Scenario question

You are two days into a canoe trip in the northern forest. At camp, the stove’s pump breaks and the group’s only pot handle has snapped off. It is 8 °C and drizzling; there is a fire ban because of a dry spring, and your drinking water plan relied on boiling.

**What is the best approach?**

1. Light a small fire anyway, just to boil water, and hold the pot with a forked stick
2. Define functions: “disinfect water” and “move a hot pot safely”. Use the backup (chemical tablets or filter) for water today; improvise a pot grip from a folded bandana and two sticks, test it with cold water, and try to repair the pump seal
3. Drink straight from the lake: northern lakes are clean
4. Paddle out today in the drizzle to get a new stove

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Splitting the problem by function shows that the vital job (safe water) has a legal backup, and the lesser job (hot-pot handling) can be improvised and tested with cold water first. This is Stage 1’s decision logic and Stage 4’s multiple-barrier water treatment, applied with an improvisation mindset — and within the law.

- **1.** Breaks the fire ban — a legal and wildfire risk — and does not address the broken stove.
- **2.** Best: separates the functions, uses a legal alternative for the vital one, tests the improvised grip safely, and keeps working on the repair.
- **3.** A myth — surface water can carry pathogens anywhere (Stage 4).
- **4.** An irreversible, costly decision to solve a problem that has cheaper solutions.

</details>

## Summary

- Improvise by **function**: describe what must be done, as verbs with requirements.
- Choose objects by **properties**: waterproof, food-safe, rigid, strong in tension, binding, padding, abrasion-resistant, heat-tolerant.
- Break **functional fixedness**: empty the pack, describe properties, ask “what else?”.
- **Test before trusting** at ground level with a safety factor of about 2; never for life-safety loads.
- Weigh **opportunity cost**: do not cannibalise gear that keeps you warm, dry or found.

## Further reading

- US Air Force. [AFH 10-644 SERE Operations](https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017). 2017. The most comprehensive public survival reference (650+ pages).
- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- Karl Duncker. *On problem-solving*. 1945. Psychological Monographs 58(5). Origin of the “candle problem” and the idea of functional fixedness.

## References

- US Army. [ATP 3-50.21 Survival (supersedes FM 3-05.70 / FM 21-76)](https://armypubs.army.mil/ProductMaps/PubForm/Details.aspx?PUB_ID=1005316). 2018. Current public US survival doctrine. Written for military contexts — use with judgment.
- US Air Force. [AFH 10-644 SERE Operations](https://archive.org/details/afh-10-644-survival-evasion-resistance-escape-operations-2017). 2017. The most comprehensive public survival reference (650+ pages).
- Karl Duncker. *On problem-solving*. 1945. Psychological Monographs 58(5). Origin of the “candle problem” and the idea of functional fixedness.
- Robert J. Ross (ed.). [Wood Handbook: Wood as an Engineering Material (FPL-GTR-282)](https://research.fs.usda.gov/treesearch/62200). 2021. Moisture content definitions, density, thermal properties and fire performance of wood.
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Laurence Gonzales. *Deep Survival: Who Lives, Who Dies, and Why*. 2003. Narrative synthesis of case studies and neuroscience. Journalism, not research — but widely used by trainers.
