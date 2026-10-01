---
id: "04.4"
module: 4
minutes: 40
practice_minutes: 60
prerequisites: ["01.12"]
objectives:
  - "Name the four pathogen classes — bacteria, viruses, protozoa, helminths — with their sizes, sources and typical illnesses."
  - "Explain infective dose and a simple dose–response model, and why low doses still matter over many days."
  - "Recognise chemical hazards (metals, agrochemicals, fuel, salinity) and cyanobacterial toxins, and why most field treatments do not remove them."
  - "Run a quick sanitary survey: read the catchment upstream to rank sources by likely hazard."
level: intermediate
volatility: concept
sources:
  - title: "Water Disinfection for Travelers (CDC Yellow Book)"
    url: https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/water-disinfection-for-travelers.html
  - title: "Guidelines for Drinking-water Quality (4th ed. with addenda)"
    url: https://www.who.int/publications/i/item/9789241548151
  - title: "Toxic Cyanobacteria in Water (2nd ed.)"
    url: https://www.who.int/publications/m/item/toxic-cyanobacteria-in-water---second-edition
  - title: "Harmful Algal Blooms and Your Health"
    url: https://www.cdc.gov/harmful-algal-blooms/about/index.html
  - title: "Harmful Algal Blooms (HABs) in Water Bodies"
    url: https://www.epa.gov/cyanohabs
  - title: "Household Water Treatment (Global WASH)"
    url: https://www.cdc.gov/global-water-sanitation-hygiene/about/about-household-water-treatment.html
last_verified: "2026-09-27"
---

# 04.4 · Contamination

Choosing the wrong source, or a treatment that misses the hazard in it, turns a survival situation into a medical one — diarrhoea and vomiting can cost litres a day, exactly when water is scarce. Understanding the four classes, their sizes and doses, and the hazards no field method removes lets you rank sources in seconds and pick treatment that actually matches the threat.

## Explanation

Stage 1 said "treat all wild water". This lesson explains **what** you are treating for, so you can choose methods that match the hazard (lesson 5) instead of hoping one gadget covers everything.

### Four classes of pathogens

| Class | Size | Examples | Main sources | Notes |
| --- | --- | --- | --- | --- |
| **Viruses** | ~0.02–0.1 µm | Norovirus, hepatitis A and E, rotavirus, enteroviruses | Human sewage (mostly human-specific) | Too small for most microfilters; very low infective doses. |
| **Bacteria** | ~0.5–5 µm | *E. coli* O157, *Campylobacter*, *Salmonella*, *Shigella*, *Vibrio cholerae*, *Leptospira* | Humans, livestock, wildlife | Killed easily by chlorine, heat and UV. |
| **Protozoa** | ~4–19 µm | *Cryptosporidium* (4–6 µm), *Giardia* (8–19 µm), *Entamoeba*, *Cyclospora* | Humans, livestock (calves!), beavers and other wildlife | Tough cysts/oocysts; Crypto resists chlorine. |
| **Helminths** | Eggs ~30–80 µm; larvae larger | Roundworm and tapeworm eggs, guinea worm; *Schistosoma* (skin contact) | Faeces; certain snails (schistosomiasis) | Removed by most filters; some infect through skin, not by drinking. |

*Sizes after the CDC Yellow Book. Each class is roughly 10× bigger than the one above.*

![Logarithmic size scale: viruses 0.02 to 0.1 micrometres, bacteria 0.5 to 5, Cryptosporidium 4 to 6, Giardia 8 to 19, helminth eggs 30 to 80, compared with filter pore sizes](../../assets/diagrams/pathogen-size-scale.svg)

*Log-scale sizes: this is why a 0.1 µm filter stops Giardia and bacteria but not viruses.*

### Infective dose: how few is too many?

Some pathogens need only a handful of organisms to infect a healthy adult; others need thousands or more. Orders of magnitude from outbreak and volunteer studies:

| Pathogen | Approximate infective dose | Typical incubation |
|---|---|---|
| Norovirus | ~10–100 virus particles | 12–48 h |
| *Giardia* | ~10 cysts | 1–2 weeks |
| *Cryptosporidium* | ~10–100 oocysts | ~1 week |
| *Shigella*, *E. coli* O157 | ~10–100 bacteria | 1–4 days |
| *Campylobacter* | hundreds | 2–5 days |
| *Salmonella* (non-typhoidal) | often thousands+ | 12–72 h |
| *Vibrio cholerae* | often 10³–10⁶ (lower with little stomach acid) | hours–5 days |
| Hepatitis A | low | 2–7 weeks |

Two lessons follow. First, **"mostly clean" is not clean** when a few organisms infect. Second, **illness often appears days or weeks later** — on day 4 of a trek, or after you get home — so people blame the wrong meal and repeat the mistake.

### Where contamination comes from: read upstream

Water quality is decided **upstream**. Before choosing a source, run a 60-second **sanitary survey**:

- **People?** Villages, huts, campsites, trails, toilets, septic fields, roads → **viruses** plus everything else.
- **Livestock?** Pastures, corrals, troughs, calving areas → **Cryptosporidium, *E. coli* O157, *Campylobacter*, *Giardia*.**
- **Wildlife?** Beavers, deer, rodents, birds → *Giardia*, *Crypto*, *Leptospira*.
- **Industry and mining?** Mine tailings, orange/red staining, oily sheens, dead fish, odd colours → **chemicals**.
- **Agriculture?** Fields, orchards, irrigation return flows → nitrates and pesticides.
- **Warm, still, nutrient-rich water?** → **cyanobacterial blooms**.
- **Floods?** → sewage + fuel + chemicals, all at once.

### Chemical hazards

- **Heavy metals and metalloids** (lead, arsenic, cadmium, mercury): mine drainage, old industrial sites, and naturally high arsenic in some groundwater (e.g., parts of South Asia, the Americas).
- **Agrochemicals**: nitrate (dangerous to infants), pesticides and herbicides.
- **Fuel and solvents**: sheens, smells, flood and urban runoff.
- **Salinity**: seawater (~35 g/L salt), brackish estuaries, desert playas and alkali flats with white crusts. Drinking salty water increases your water need.

**Field methods that kill microbes — boiling, chlorine, UV, SODIS — do not remove chemicals.** Boiling concentrates them slightly. Activated carbon removes some organic chemicals and improves taste, but not salts, nitrate or most metals. **Distillation** (a solar still, lesson 3) separates water from salts and metals. The practical rule: **avoid chemically suspect sources** — find another.

### Cyanobacteria ("blue-green algae")

In warm, calm, nutrient-rich water, cyanobacteria can bloom into **scums that look like spilled green paint, pea soup, or blue-green or brownish streaks**, sometimes with a foul smell. Many produce **toxins**: microcystins (liver), anatoxins and saxitoxins (nerves), cylindrospermopsin (liver, kidney). Dogs die every summer after swimming in or drinking bloom water. The WHO provisional guideline for microcystin-LR in drinking water is about **1 µg/L** for lifetime exposure (12 µg/L short-term).

**Boiling does not destroy these toxins** and can burst cells, releasing more. Filters remove intact cells but not dissolved toxin. Chlorine and carbon reduce some toxins partially and unpredictably. **Avoid bloom water entirely** — for drinking, washing and swimming — and keep dogs out.

> [!CAUTION]
> **Hazards you don’t have to drink**
>
> **Leptospirosis** bacteria (from animal urine, common after tropical floods) enter through cuts and mucous membranes; **schistosomiasis** larvae (freshwater in parts of Africa, the Middle East, Asia and South America) burrow through intact skin. Where these occur, avoid wading and swimming in fresh water when you can, and cover cuts. Floodwater is dangerous to touch as well as to drink.

> [!NOTE]
> **Hands matter as much as water**
>
> Studies of backcountry travellers suggest that much "water-borne" illness is really **hand-to-mouth** spread among companions: shared snack bags, unwashed hands after the toilet. Wash or sanitise hands before food and after toilet visits, and don’t share bottles. Stage 10 covers field sanitation.

## Scientific and technical background

### A simple dose–response model

In words: each organism you swallow has a small independent chance $r$ of starting an infection. The chance of getting through the day uninfected falls exponentially with the number swallowed.

$$
P_{inf} = 1 - e^{-r\,d}
$$

where $d$ is the dose (organisms swallowed per day) = concentration $C$ (per litre) × volume drunk $V$ (L/day).

**Worked example (illustrative numbers).** Suppose a stream carries $C = 0.5$ infective organisms per litre of a pathogen with $r = 0.02$. You drink 3 L/day: $d = 1.5$.
$P_{day} = 1 - e^{-0.03} ≈ 3\,\%$ per day.
Over 10 days: $1 - (1 - 0.03)^{10} ≈ 26\,\%$. A tenfold (**1-log**) reduction brings the daily risk to ~0.3 % and the 10-day risk to ~3 %; a **4-log** reduction makes it negligible. That is why treatment is measured in logs (lesson 5).

### Why sizes matter

Straining works by size: anything larger than the pores cannot pass. On a log scale, viruses (~0.03 µm) are ~10× smaller than a 0.1–0.2 µm microfilter pore; bacteria are ~5–50× larger; protozoan cysts ~40–100× larger. Particles also **shield** microbes from chemicals and UV and **consume** chlorine — the link between turbidity and treatment failure.

### Why Cryptosporidium is special

Its oocyst has a thick, chemically resistant wall. Free chlorine at drinking-water doses would need contact times of days to weeks to achieve much inactivation. It is also small enough (4–6 µm) that coarse cloths and poor filters let it through. Livestock (especially young calves) shed enormous numbers. Boiling, 1 µm-or-finer filtration, UV and long-contact chlorine dioxide are the effective options.

## Examples

**Alpine and temperate mountains.** A crystal-clear stream below a hut, a trail or grazing sheep can carry norovirus, *Campylobacter* or *Crypto*. A side stream draining an untracked slope is usually a much better bet — but still treat.

**Desert.** Tinajas and cattle troughs are shared by animals; warm, still water favours bacteria and sometimes cyanobacteria. Mine country adds metals: a beautifully clear pool below an old mine may be the most dangerous water around.

**Tropical river.** Villages upstream mean human viruses and bacteria; silt makes everything harder to treat; floods add *Leptospira*. Rain may be the cleanest water available.

**Arctic and subarctic.** Cold slows microbes but does not kill them — *Giardia* cysts survive for months in cold water. Beaver ponds and moose wallows are classic sources.

**Coastal.** Estuaries mix sewage, agricultural runoff and salt. Harmful algal blooms occur in brackish lagoons as well as fresh lakes.

**Urban emergency.** After an earthquake or flood, broken pipes draw in sewage when pressure drops; authorities issue boil-water notices. Floodwater carries sewage, fuel, pesticides and industrial chemicals: never drink it, and avoid wading in it.

## Common mistakes

- Myth: "Clear, cold, fast-moving water is safe." Clarity says nothing about viruses or cysts; cold preserves them.
- Myth: "Boiling makes any water safe." It kills pathogens but leaves chemicals, salt and cyanotoxins — and concentrates them slightly.
- Blaming the last meal: many waterborne infections appear days to weeks after the exposure.
- Drinking from, swimming in, or letting dogs into water with green paint-like scum.
- Choosing water downstream of a village, trail, hut or pasture when a side stream is available.
- Treating water carefully and then passing a shared snack bag with unwashed hands.
- Wading through floodwater or tropical fresh water with open cuts.

## Practical exercises

### Sanitary survey from a map

Level 2 (Simulation) · 🏠 Home · about 30 min

**Materials:** Online topographic map and satellite imagery of a hiking area

**Steps**

1. Pick three streams or lakes you might drink from.
2. Trace each catchment upstream. List people, livestock, wildlife, mines, farms, roads and still water.
3. For each source, predict the dominant hazard classes (viruses? Crypto? chemicals? cyanotoxins?).
4. Rank the sources and state the minimum treatment chain each would need (use lesson 5 when you reach it).

**You have it when**

- Three sources ranked with the hazards named.
- At least one source rejected for chemical or cyanobacterial risk, with a reason.

Builds the skill: Finding and collecting water.

### Run the source-to-cup planner

> [!CAUTION]
> **Virtual only.** Simulate only. Do not attempt physically.

Level 2 (Simulation) · 🖥️ Virtual only · about 30 min

**Steps**

1. Open the Water Planner simulator. For each scenario, list the sources and predict their hazard classes before running anything.
2. Pick the riskiest source in each scenario and try to make it safe. Note which hazards no chain can fix.
3. Then pick the best source and find the simplest chain that scores ≥ 80 %.

**You have it when**

- Predicted hazards match the simulator for most sources.
- You can explain why floodwater and bloom water fail regardless of treatment.

## Interactive simulation

[Simulation: Water Planner: Source to Cup](../../simulations/water-advanced/index.html)

Plan several days of water for four environments: choose source, collection, clarification, filter, disinfection dose and contact time, storage and routine. See risk per hazard class, time, fuel and your water balance.

## Scenario question

Late August, a warm lowland lake. You have a 0.1 µm filter, a stove and chlorine tablets, 1 L left and 2 h of daylight. The near shore has a green, paint-like scum. On the map, a small inflow stream enters the lake 1.5 km away through pasture. It rained heavily last night.

**What is the best move?**

1. Collect from the scummy shore, then filter it and boil it to be doubly safe.
2. Walk to the inflow stream, collect above the lake, filter then chlorinate, back by dark.
3. Wade out to the middle of the lake where the water looks clear, then filter it.
4. Drink lake water taken away from the scum, treated with chlorine tablets only.

<details>
<summary>Best choice and debrief</summary>

**Best: 2.** Bloom water is a **chemical** hazard — change the source, don’t try to treat it. The inflow stream through pasture carries livestock pathogens (especially Crypto, likely flushed by last night’s rain), which the 0.1 µm filter removes; chlorine covers viruses and bacteria. Do it inside your daylight budget.

- **1.** Filtering removes cells but not dissolved toxin; boiling does not destroy it and can release more. Unsafe.
- **2.** Best: avoids the bloom; filter covers protozoa (pasture → Crypto) and bacteria; chlorine adds viruses; time fits. Settle it first if cloudy.
- **3.** Toxins disperse through the water; wading adds skin contact and drowning risk.
- **4.** Chlorine does not reliably remove cyanotoxins and misses Crypto.

</details>

## Summary

- Four classes, ~10× apart in size: viruses (~0.03 µm) < bacteria (~1 µm) < protozoa (4–19 µm) < helminth eggs (30–80 µm).
- Low infective doses (norovirus, Giardia, Crypto, Shigella) mean "mostly clean" is not clean; illness often shows days later.
- Read upstream: people → viruses; livestock → Crypto and E. coli O157; mines/industry → chemicals; warm still water → blooms.
- Field disinfection does not remove chemicals, salt or cyanotoxins. Avoid those sources.
- Hand hygiene and skin-contact hazards (leptospirosis, schistosomiasis) matter too.

## Further reading

- Backer HD, Hill VR. [Water Disinfection for Travelers (CDC Yellow Book)](https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/water-disinfection-for-travelers.html). Organism sizes vs filter pores, heat (60 °C × 30 min; seconds at 100 °C), chemical and UV methods, EPA purifier benchmark (6/4/3 log), SODIS conditions, alum clarification.
- Backer HD, Derlet RW, Hill VR. *WMS Clinical Practice Guidelines for Water Disinfection for Wilderness, International Travel, and Austere Situations*. 2019. Wilderness & Environmental Medicine 30(4S):S100–S120.
- Chorus I, Welker M (eds.). [Toxic Cyanobacteria in Water (2nd ed.)](https://www.who.int/publications/m/item/toxic-cyanobacteria-in-water---second-edition). 2021.

## References

- Backer HD, Hill VR. [Water Disinfection for Travelers (CDC Yellow Book)](https://www.cdc.gov/yellow-book/hcp/preparing-international-travelers/water-disinfection-for-travelers.html). Organism sizes vs filter pores, heat (60 °C × 30 min; seconds at 100 °C), chemical and UV methods, EPA purifier benchmark (6/4/3 log), SODIS conditions, alum clarification.
- Backer HD, Derlet RW, Hill VR. *WMS Clinical Practice Guidelines for Water Disinfection for Wilderness, International Travel, and Austere Situations*. 2019. Wilderness & Environmental Medicine 30(4S):S100–S120.
- World Health Organization. [Guidelines for Drinking-water Quality (4th ed. with addenda)](https://www.who.int/publications/i/item/9789241548151).
- Chorus I, Welker M (eds.). [Toxic Cyanobacteria in Water (2nd ed.)](https://www.who.int/publications/m/item/toxic-cyanobacteria-in-water---second-edition). 2021.
- US Centers for Disease Control and Prevention. [Harmful Algal Blooms and Your Health](https://www.cdc.gov/harmful-algal-blooms/about/index.html).
- US Environmental Protection Agency. [Harmful Algal Blooms (HABs) in Water Bodies](https://www.epa.gov/cyanohabs).
- US Centers for Disease Control and Prevention. [Household Water Treatment (Global WASH)](https://www.cdc.gov/global-water-sanitation-hygiene/about/about-household-water-treatment.html). SODIS: 6–8 h of strong sun, or 2 days if cloudy; safe storage; none of these methods remove chemicals.
