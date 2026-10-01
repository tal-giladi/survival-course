---
id: "07.1"
module: 7
minutes: 45
practice_minutes: 90
prerequisites: ["01.9"]
objectives:
  - "Name the main fiber sources (bast, leaf, inner bark, husk, grass) and say which make strong cord and which are only good for weaving."
  - "Explain why twist adds strength: fiber friction, the helix angle, and why too much twist makes cord weaker again."
  - "Explain how reverse-wrap plying balances torque, and make a metre of two-ply cord."
  - "Estimate breaking strength from cross-section ($F \\propto d^2$) and check it against a load with a safety factor."
  - "Decide when to make cordage and when to use carried cord, given time and energy."
level: intermediate
volatility: concept
sources:
  - title: "The Seven Principles of Leave No Trace"
    url: https://lnt.org/why/7-principles/
  - title: "Society of Primitive Technology"
    url: https://www.primitive.org/
last_verified: "2026-09-27"
---

# 07.1 · Natural fibers and cordage

Cord is a force multiplier in almost every survival task: shelter, food storage, tools, splints, fishing, carrying. When yours runs out, you can make more, but it is slow. Knowing why cord is strong tells you how much to make, how thick, and which jobs it can safely do. It also tells you when a few extra metres of commercial cord in your kit are worth far more than hours of twisting.

## Explanation

Cord holds shelters up, food off the ground and tools to handles. Your kit (Stage 1, Lesson 9) should carry some. But cord runs out, gets cut, or is needed in more places than you planned. Natural cordage is one of the oldest human technologies: twisted plant fiber over 40,000 years old has been found. It also teaches a piece of engineering that recurs throughout this stage: **useful strength comes from structure, not only from material.**

### Fiber sources

Plants make long, strong cells to hold themselves up. Those cells are what we harvest:

| Source | Examples | Strength | Notes |
|---|---|---|---|
| **Bast (stem) fibers** | Stinging nettle, dogbane, milkweed, fireweed, hemp, flax | High | The fibers lie just under the outer skin of the stalk. **Dead autumn and winter stalks** give the best fiber and harm no living plant. |
| **Leaf fibers** | Yucca, agave (sisal), New Zealand flax, cabbage-tree | High | Scrape or pound the leaf pulp away; fibers run the full leaf length. Stiff when dry. |
| **Inner bark** | Basswood/lime, willow, cedar, elm | Medium | Strips of the soft layer under the outer bark, often **retted** (soaked for weeks until the layers separate). Fast to make but bulky. |
| **Husk and seed fibers** | Coconut coir, cotton | Medium | Coir is coarse but resists rot and salt water, which suits coastal and tropical use. |
| **Grasses, sedges, cattail leaves** | Cattail, rush, long grass | Low | Quick to twist, weak. Best for mats, baskets, lashing bundles, and tying thatch. |
| **Roots** | Spruce, pine, cedar roots | Medium | Split roots are superb for sewing bark containers (Lesson 3). |

Animal fibers (sinew, rawhide) are strong but depend on legal hunting or trapping. This course does not teach hunting or trapping (see Stage 6).

> [!IMPORTANT]
> **Harvesting law: fibers, bark and plants**
>
> Taking any plant material is regulated, and the rules differ widely between places:
>
> - **Protected areas.** Collecting or damaging plants is usually banned in national parks and nature reserves. For example, US National Park Service regulations (36 CFR §2.1) prohibit removing plants and natural features except under specific permits.
> - **Private land.** You need the landowner's permission. In Great Britain it is an offence to **uproot** any wild plant without the landowner's authorisation (Wildlife and Countryside Act 1981, s.13), and some species are fully protected.
> - **Protected species.** Some species are protected everywhere they grow. Check your local red list before you harvest.
> - **Living trees.** **Never ring-bark (girdle) a living tree.** Stripping a full band of bark kills it. Take inner bark only from trees already felled lawfully, from storm-fall, or with the landowner's permission.
>
> Leave No Trace applies: take dead stalks, harvest thinly across a wide area, and leave roots in the ground.

![Why twist adds strength: twisted fibers are squeezed together by their own tension, and each fiber runs at the helix angle alpha to the cord axis](../../assets/diagrams/s7-twist-helix.svg)

*Twist turns a loose bundle of short fibers into a structure: tension squeezes every fiber against its neighbours so friction can pass the load along.*

### Why twist adds strength

A nettle fiber bundle is perhaps 10–40 cm long, but you want a 10 m cord. The load must pass from fiber to fiber, and **the only thing that transfers it is friction**. Friction force = μ × normal force, so to grip, the fibers must be *pressed together*.

Twisting provides the press. When a twisted cord is pulled, each fiber runs as a helix. It tries to straighten, and in doing so it squeezes inward on the fibers beneath it. **The harder you pull, the harder they grip.** A twisted cord is self-tightening, much like a Chinese finger trap.

That creates a trade-off, set by the **surface helix angle** $\alpha$ (the angle between a surface fiber and the cord's axis):

- **Too little twist (α below about 10°):** little squeeze, so fibers slide past each other. The cord "drafts" apart without any fiber breaking.
- **Too much twist (α above about 35°):** fibers run steeply across the cord, so only about $\cos\alpha$ of each fiber's strength points along the load. The fibers are also pre-strained by the twist itself, and the cord kinks.
- **Sweet spot around 15–28°.** This is why commercial ropes are laid at roughly 20°.

![Relative cord strength against surface twist angle: rises steeply from zero, peaks near 20 degrees, then falls](../../assets/diagrams/s7-twist-curve.svg)

*Model of relative strength against surface twist angle: grip (rising) × obliquity (falling).*

### Reverse wrap: making twist permanent

A single twisted strand stores **torque**. Let go and it untwists. Load it and it spins, loses twist, and slips. The fix is **plying** with the **reverse wrap**:

1. Take a bundle of fiber and fold it so one end is about 1/3 longer (this staggers the splices).
2. Pinch at the fold and twist the **far** ply away from you (say, clockwise).
3. Lay it over the near ply, **counter-clockwise**. That is the reverse wrap.
4. Repeat: twist the (new) far ply clockwise, wrap it counter-clockwise over the other.
5. To add fiber, lay a new tapered bundle into the thinning ply about 5 cm before it runs out, and twist it in. Stagger the splices on the two plies.

Each ply wants to untwist one way. The plying twist holds it the other way. **The torques cancel**, so the cord is balanced: it hangs without kinking and keeps its twist under load. Three-ply cord works the same way, is rounder, and wears better.

![Reverse wrap: each ply is twisted one way, the plies are wrapped around each other the opposite way, so their torques cancel and the cord stays locked](../../assets/diagrams/s7-reverse-wrap.svg)

*Plies twisted one way, wrapped the other: the two torques cancel.*

[Simulation: Cordage Strength Lab](../../simulations/cordage-strength/index.html)

Try single strand against reverse wrap, then sweep the twist angle and diameter. Where does each job fail?

> [!WARNING]
> **Never trust hand-made cord with a person’s weight**
>
> Natural cordage varies metre by metre, and one thin splice sets the strength of the whole line. Use it for gear loads with generous margins. Climbing, hauling people and crossing water are for certified rope and formal training (Stage 13).

## Scientific and technical background

### Strength scales with cross-section

Every fiber in a cord's cross-section carries a share of the load, so strength is proportional to **area**, and area grows with the **square** of diameter:

$$
F_{break} \approx \sigma \cdot \frac{\pi d^2}{4}
$$

Here $\sigma$ is the effective strength of the finished cord in MPa (N/mm²), which is well below the strength of a single fiber because of air gaps, twist and uneven spinning, and $d$ is the diameter in mm. **Double the diameter and you get four times the strength, but you also need four times the fiber and roughly four times the work.**

**Worked example.** A well-made two-ply nettle cord has $\sigma \approx 50$ MPa.

- 3 mm: $A = \pi \times 3^2/4 = 7.1$ mm², so $F \approx 50 \times 7.1 \approx 350$ N, about **36 kg**.
- 6 mm: $A = 28.3$ mm², so $F \approx 1{,}400$ N in theory. Hand-made cord gets less even as it thickens, so expect about **1,300 N**.

For comparison, commercial 550 paracord of about 4 mm is rated about 2,400 N (550 lb), roughly 3–4× stronger than hand-made cord of the same size.

### Setting the twist

For a ply of diameter $D$ with $T$ turns per unit length, the surface helix angle is

$$
\tan\alpha = \pi D T
$$

In words: one turn advances the fiber one circumference ($\pi D$) around the cord while it travels $1/T$ along it. To get $\alpha = 20^\circ$ on a 1.5 mm ply: $T = \tan 20^\circ / (\pi \times 1.5) = 0.364/4.71 \approx 0.077$ turns per mm, or **about 8 turns per 10 cm**. Thicker plies need fewer turns for the same angle.

### Check it against a load: margin, not hope

Real loads are larger than the weight you are holding:

- **Dynamic factor.** Jerks, gusts and bounces often add 30–100 %.
- **Weak points.** A knot keeps only 50–75 % of the cord's strength, and a sharp bend over a thin branch costs more (Lesson 2).
- **Safety factor.** Hand-made cord is uneven, so aim for at least **×2** on gear loads, and more where failure hurts.

**Food bag, worked through.** The bag is 5 kg, so its weight is $5 \times 9.81 = 49$ N. Hauling it over a branch adds bark friction: the hauling side carries about 2.6× the load (Lesson 2), so 126 N. A jerk factor of 1.3 makes it 164 N. The cord bends round a 50 mm branch and keeps about 87 % of its strength there, so it needs about **190 N** of straight-cord strength just to hold. With a ×2 margin, you need about **380 N**. The 3 mm nettle cord (350 N) is marginal. A 3.5 mm cord (about 470 N) passes. Making 12 m of it at about 15 min per metre (for 3 mm cord, scaled by $d^2$) takes about **4 hours**.

## Examples

**Temperate forest, late autumn (Europe, North America, East Asia):** dead nettle or dogbane stalks stand in damp ground and field edges. Crush a stalk, split it, snap the woody core out of the fiber skin, and roll the fibers between your palms to clean them. One armful of stalks makes a few metres of fine cord.

**Desert (south-west USA, Mexico, Mediterranean, Middle East, Australia):** yucca and agave leaves give long, strong fibers. Dead, weathered leaves are often already partly separated. Dry leaf fibers are stiff and crack at tight bends, so **soak them before plying and knotting**.

**Tropical coast:** coconut husk (coir) fibers make coarse, rot-resistant cord for lashings and fish-trap bindings. Palm-leaf strips and rattan work as lashing material.

**Boreal and subarctic:** split spruce roots dug from soft moss beds make sewing and lashing material. Willow inner bark works for quick, heavy lashings in summer. In winter, fibers are scarce and frozen, which is one more reason cord belongs in the kit.

**Mountain and alpine:** vegetation is sparse above the tree line. Plan to carry all the cord you need.

**Urban or rural disaster:** you rarely need to make fiber. Cut and unravel synthetic webbing, electrical cable, rope from sacks, strips of plastic bag or fabric, and twist them with the same reverse wrap to make them stronger and more manageable.

## Common mistakes

- Twisting a single strand and using it as cord: it unwinds, kinks and slips under load.
- Twisting the plies in the same direction as the plying: nothing balances the torque and the cord unlays.
- "More twist is always stronger." (Myth.) Past roughly 30° the fibers carry load at an angle and the cord weakens and kinks.
- Splicing both plies at the same place, which creates a thin, weak spot. Stagger splices by several centimetres.
- Using dry, stiff leaf or bark fiber without soaking. It cracks at every bend.
- Ring-barking a living tree for inner bark. This kills the tree and is illegal in many places.
- Spending hours making cord in the cold before shelter and warmth are sorted. Priorities come first (Stage 1).

## Practical exercises

### Make one metre of two-ply reverse-wrap cord

Level 3 (Safe physical) · 🏠 Home · about 60 min

**Materials:** Raffia, unravelled jute or sisal twine, or dead nettle/dogbane stalks gathered with permission; Bowl of water (for leaf or bark fibers); Ruler

**Steps**

1. Prepare fibers: for stalks, crush, split, remove the woody core, and roll the fibers clean. For raffia or jute, tease it into thin, even bundles.
2. Fold a bundle with one end about 1/3 longer. Pinch the fold.
3. Twist the far ply clockwise until it just starts to kink, then wrap it counter-clockwise over the near ply. Repeat.
4. Count turns: aim for about 8 per 10 cm on thin cord (about 20°). Compare a section twisted loosely with one twisted very tightly.
5. Splice in new fiber before a ply thins, staggering splices between plies.
6. Finish with an overhand knot, measure length and diameter, and time yourself.

**You have it when**

- The cord hangs without spinning or kinking.
- The diameter stays even (±20 %) along the metre.
- You can state your time per metre and scale it to 10 m.

Builds the skill: Natural cordage.

### Break-test your cord with water bottles

> [!WARNING]
> **Home.** Safe to do at home or at a desk.
>
> Hang the load a few centimetres above a soft surface so nothing falls far. Keep your feet out from under it.

Level 3 (Safe physical) · 🏠 Home · about 30 min

**Materials:** Your cord; A sturdy hook or rail; A bag and 1 L water bottles; Luggage scale if available

**Steps**

1. Tie the cord to the rail with a round turn and two half hitches, and hang the bag from a bowline.
2. Add one litre (≈ 1 kg) at a time and note where the cord fails: at a knot, a splice, or mid-length?
3. Compare your result with $F \approx 50 \times \pi d^2/4$ N and the knot efficiency.
4. Repeat with a piece deliberately made as a single strand, and with a wetted piece.

**You have it when**

- You recorded the failure load and failure location.
- You can explain the difference between single strand and reverse wrap from the test.

Builds the skill: Natural cordage.

## Scenario question

Wet temperate forest, 6 °C, 15:30, sunset at 17:45. You are benighted after a navigation error, with a tarp, a knife, a lighter, a small first-aid kit and **8 m of 550 paracord**. You need a tarp ridgeline, guy lines, and a line to hang your food bag. Dead nettle stalks grow thickly by the stream.

**How should you use your cordage?**

1. Spend the next two hours making 15 m of nettle cord so the paracord stays spare.
2. Paracord on the ridgeline and guys, inner strands for light ties; nettle cord only once sheltered.
3. Put the paracord on the food bag and a single twisted nettle strand on the ridgeline.
4. Skip the ridgeline and drape the tarp over bushes, saving all the paracord for later.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Hand-made cord costs roughly 15 minutes per metre even for a practised maker, and far more for a beginner in the cold. Allocate your best cord to your worst load: a windy ridgeline sees hundreds of newtons. Split paracord gives light-duty strands. Make natural cord only once shelter and warmth are secure. This is a Stage 1 lesson too: kit redundancy (carry more cord than you think) beats improvisation under pressure.

- **1.** Two hours of sitting still in the cold and damp, with dusk coming, reverses the priorities. Shelter and warmth come first.
- **2.** Best: the strongest cord goes on the highest load, the priorities are respected, and cordage-making becomes an optional extra.
- **3.** This puts the weakest line under the highest load, and a single strand unwinds and slips.
- **4.** That is possible in calm weather, but it sheds rain and wind poorly compared with a tensioned tarp.

</details>

## Summary

- Bast and leaf fibers make strong cord; inner bark is fast but weaker; grasses suit weaving.
- Twist creates friction by squeezing fibers together. Strength peaks at roughly 15–28° of surface twist and falls with more.
- Reverse-wrap plying balances torque so the twist, and the strength, stay put.
- Strength ∝ d², but so do fiber and time. Check real loads with dynamic factors, knot losses and a ×2+ margin.
- Harvest dead stalks with permission, never ring-bark trees, and never trust hand-made cord with a person’s weight.

## Further reading

- David Wescott (ed.). *Primitive Technology: A Book of Earth Skills*. 1999. Practitioner articles on cordage, containers, knapping, adhesives, pigments and fire, from the Bulletin of Primitive Technology.
- J. W. S. Hearle, P. Grosberg, S. Backer. *Structural Mechanics of Fibers, Yarns, and Fabrics*. 1969. The classic analysis of twist, helix angle, fiber migration and yarn strength.
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.

## References

- David Wescott (ed.). *Primitive Technology: A Book of Earth Skills*. 1999. Practitioner articles on cordage, containers, knapping, adhesives, pigments and fire, from the Bulletin of Primitive Technology.
- J. W. S. Hearle, P. Grosberg, S. Backer. *Structural Mechanics of Fibers, Yarns, and Fabrics*. 1969. The classic analysis of twist, helix angle, fiber migration and yarn strength.
- H. A. McKenna, J. W. S. Hearle, N. O’Hear. *Handbook of Fibre Rope Technology*. 2004. Rope structures, natural and synthetic fibers, knot and bend efficiency.
- Mors Kochanski. *Bushcraft: Outdoor Skills and Wilderness Survival*. Northern-forest classic, strongest on shelter and fire for warmth.
- Leave No Trace Center for Outdoor Ethics. [The Seven Principles of Leave No Trace](https://lnt.org/why/7-principles/).
- US National Park Service (Code of Federal Regulations). *36 CFR §2.1 — Preservation of natural, cultural and archeological resources*. Prohibits removing or disturbing plants, rocks, minerals and cultural resources in US national parks, except as permitted.
- UK Parliament. *Wildlife and Countryside Act 1981, section 13 (protection of wild plants)*. Uprooting any wild plant without the landowner’s authorisation is an offence; listed species are fully protected.
- [Society of Primitive Technology](https://www.primitive.org/).
