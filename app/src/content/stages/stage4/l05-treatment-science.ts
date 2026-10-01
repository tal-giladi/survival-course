import type { Lesson } from '../../types'

export const l05: Lesson = {
  id: 's4-l5',
  stage: 4,
  order: 5,
  title: 'Treatment science',
  level: 'advanced',
  minutes: 50,
  prerequisites: ['s4-l4'],
  concepts: ['log-reduction', 'ct-disinfection', 'filtration', 'uv-dose', 'boiling-altitude', 'turbidity', 'water-treatment'],
  objectives: [
    'Convert between **log reductions** and percentages and combine barriers in a **multi-barrier** chain.',
    'Use the **CT concept** (concentration × time) to set chlorine or chlorine dioxide dose and contact time for temperature, pH and turbidity.',
    'Match **filter pore sizes** to organism sizes; know what microfilters, ultrafilters, reverse osmosis and carbon do.',
    'Explain **UV dose** and why clarity controls it.',
    'Explain why **boiling works at any altitude** and what the CDC 1-minute / 3-minute rule is for.',
  ],
  explanation: [
    {
      type: 'md',
      md: `Treatment either **removes** organisms (settling, coagulation, filtration) or **inactivates** them (heat, chemicals, UV). Every method is described by *how much* it reduces each pathogen class, in **logs**.

### Log reductions

One log = a **10-fold** reduction = 90 % removed. Two logs = 99 %. Four logs = 99.99 %. Logs let you see what percentages hide: 99 % sounds excellent, but if the water carried 10,000 viruses per litre, 100 remain.`,
    },
    { type: 'diagram', id: 'log-reduction-ladder', caption: 'Each log is ×10. The US EPA "purifier" benchmark: 6 log bacteria, 4 log viruses, 3 log protozoan cysts.' },
    {
      type: 'md',
      md: `**Barriers in series add logs** (as long as they act independently): settling (0.5 log) + filter (6 log for protozoa) + chlorine (4 log for viruses) gives each class its own total. A good chain puts a **different strength** behind every weakness — the idea behind municipal water treatment and behind the "filter + chemical" advice in Stage 1.`,
    },
    { type: 'diagram', id: 'multi-barrier', caption: 'Source choice is the first barrier; safe storage is the last.' },
    {
      type: 'md',
      md: `### Filtration: size exclusion

| Type | Pore size | Removes | Misses |
|---|---|---|---|
| Cloth, coffee filter | ~20–100 µm | Silt, some helminth eggs, copepods | Bacteria, viruses, most cysts |
| **Microfilter** (hollow fibre, ceramic) | 0.1–0.2 µm (≤ 1 µm "absolute") | Protozoa, bacteria (4–6 log) | **Viruses** (only those stuck to particles), chemicals |
| **Ultrafilter** ("purifier" hollow fibre) | ~0.01–0.02 µm | Adds viruses (≈ 4 log) | Dissolved chemicals, salt |
| **Reverse osmosis** (hand-pump desalinators) | molecular | Salt, most chemicals, all pathogens | Very slow, expensive, fouls easily |
| **Activated carbon** | adsorption, not a sieve | Some organic chemicals, chlorine taste | **Not a pathogen barrier** unless combined with a microfilter |

Filters **clog** in turbid water (settle first; backflush or scrub as the maker instructs). A hollow-fibre filter that **freezes** with water inside can crack invisibly; manufacturers advise keeping it in your sleeping bag in the cold and replacing it if it may have frozen. Check integrity where the product allows.

### Heat

Pathogens die rapidly at temperatures well **below** boiling: the CDC Yellow Book notes pasteurisation at **60 °C for 30 minutes**, faster at 70 °C, and that at 100 °C they die **within seconds**. Water boils at ~83 °C even at 4,900 m — still far above pasteurisation temperatures, so **boiling works at any altitude people can live**. The CDC rule (rolling boil **1 min**, **3 min above ~2,000 m / 6,500 ft**) adds a safety margin. The heating-up period does much of the killing; boiling for 10–20 minutes adds nothing but fuel cost.`,
    },
    { type: 'diagram', id: 'boiling-altitude', caption: 'Even on high mountains the boiling point stays well above the pasteurisation zone.' },
    {
      type: 'md',
      md: `### Chemical disinfection and CT

Chemicals need **time in contact at a concentration**: $CT$ = concentration (mg/L) × contact time (min). Each pathogen needs a certain CT for a given log reduction, and that CT **rises sharply in cold water**, at **high pH** (for chlorine) and in **turbid** water.`,
    },
    { type: 'diagram', id: 'ct-temperature', caption: 'For chlorine, Giardia’s CT roughly quadruples from 25 °C to 5 °C. Cryptosporidium is off the chart.' },
    {
      type: 'table',
      head: ['Chemical', 'Bacteria', 'Viruses', 'Giardia', 'Crypto', 'Notes'],
      rows: [
        ['**Chlorine** (bleach, NaDCC tablets)', '✓ fast', '✓ fast', '~ slow in cold', '✗', 'Leaves a protective residual; taste. CDC: 30 min contact, double dose for cloudy/cold water.'],
        ['**Chlorine dioxide**', '✓', '✓', '✓', '✓ with ~4 h', 'Less affected by pH; little lasting residual; follow product time.'],
        ['**Iodine**', '✓', '✓', '~', '✗', 'Taste; not for pregnancy, thyroid disease or use beyond a few weeks (CDC/WHO).'],
        ['Silver', 'slow', 'weak', '✗', '✗', 'A preservative for stored water, **not** a primary disinfectant.'],
      ],
    },
    {
      type: 'md',
      md: `**Turbidity** (cloudiness, in NTU) harms chemicals twice: particles and organic matter **consume** chlorine (demand), and microbes **hide** inside particles. Clarify first; if you can’t, double the dose and lengthen the time. The CDC check: after 30 minutes there should be a faint chlorine smell; if not, repeat the dose and wait another 15 minutes.

### UV

UV-C light (~254 nm) damages DNA so microbes cannot reproduce. **Dose** = intensity × time, in mJ/cm². Protozoa are surprisingly UV-sensitive (~10–20 mJ/cm² for 3–4 log); many viruses need more (~30–40); a few (adenovirus) much more. UV pens deliver a fixed dose to clear water — **particles cast shadows** and dissolved colour absorbs UV, so turbid or tea-coloured water gets under-dosed. UV leaves no residual and batteries fail in the cold.`,
    },
    { type: 'sim', id: 'water-advanced', caption: 'Try chlorine at 5 °C vs 25 °C, clear vs cloudy water, and watch Giardia and Crypto change. Then build a chain for the tropical river below the village.' },
  ],
  whyItMatters: 'Every method has a hole: chlorine and Crypto, filters and viruses, UV and cloudy water, boiling and fuel and chemicals. The science tells you exactly where the holes are and how big they become in cold, murky water — so you can stack methods whose holes don’t overlap, set the right dose and time, and stop wasting fuel on ritual.',
  science: [
    {
      type: 'md',
      md: `### Logs

In words: the log reduction is how many powers of ten you divided the count by.

$$
LR = \\log_{10}\\!\\left(\\frac{N_0}{N}\\right), \\qquad \\text{fraction remaining} = 10^{-LR}
$$

**Worked example.** A river below a village carries $N_0 = 10^4$ viruses/L. A microfilter (0.5 log for viruses) + chlorine (4 log) = 4.5 log → $10^{4-4.5} ≈ 0.3$ per litre. Without the chlorine: $10^{3.5} ≈ 3{,}000$ per litre — and norovirus infects with tens.

### Chick–Watson and CT

The classic disinfection law says the log-kill is proportional to concentration × time (for many disinfectants the concentration exponent is close to 1):

$$
\\log_{10}\\frac{N_0}{N} = k \\, C \\, t \\quad\\Rightarrow\\quad CT_{\\text{needed}} = \\frac{LR}{k}
$$

$k$ depends on the organism, the chemical, temperature and pH. Regulators publish **CT tables**. Rounded values for free chlorine at pH ≈ 7 (US EPA surface-water CT tables):

| Water temperature | Giardia, 3-log | Viruses, 4-log |
|---|---|---|
| 5 °C | ~140 mg·min/L | ~8 |
| 15 °C | ~70 | ~4 |
| 25 °C | ~35 | ~2 |

**Worked example.** Chlorine residual 2 mg/L in 5 °C stream water. For 3-log Giardia: $t = 140 / 2 = 70$ min. For 4-log viruses: $t = 8/2 = 4$ min. The 30-minute emergency guidance comfortably covers bacteria and viruses; **cold water needs a longer wait for Giardia**, and no practical chlorine time handles Crypto (its CT is in the thousands).

**Rule of thumb:** the required CT roughly **doubles for every 10 °C colder**. At pH 8.5, much less of the chlorine is in its strong form (HOCl) and CT rises several-fold.

### UV dose

$$
D\\,(\\text{mJ/cm}^2) = I\\,(\\text{mW/cm}^2) \\times t\\,(\\text{s})
$$

A pen delivering 0.5 mW/cm² for 80 s gives 40 mJ/cm² in clear water — about 4 log for protozoa and many viruses. If particles and colour cut the average intensity by two-thirds, the dose falls to ~13 mJ/cm²: roughly 2 logs for protozoa, 1 for many viruses.

### Heat to the boil

$$
Q = m\\,c\\,\\Delta T = 1\\,\\text{kg} \\times 4.19\\,\\text{kJ/(kg·K)} \\times 85\\,\\text{K} ≈ 356\\,\\text{kJ}
$$

That is the energy to bring 1 L from 15 °C to 100 °C; each minute of rolling boil adds roughly 50 kJ on a lidded pot. On a canister stove (~23 kJ delivered per gram), ≈ 15–20 g of gas per litre; on an open wood fire (~10 % efficient), ≈ 0.25 kg of dry wood.`,
    },
  ],
  examples: [
    {
      type: 'md',
      md: `**High mountains (Andes, Himalaya, Rockies).** Water boils at ~85 °C at 4,500 m — still lethal to pathogens. Fuel is heavy and the air is cold; filter + chemical with a longer contact time is often lighter than boiling everything. Glacial silt clogs filters: settle overnight first.

**Tropical river below a village.** High turbidity, warm water, human viruses. Clarify (settle or alum), microfilter, then chlorine — warm water makes chlorine work fast.

**Desert pothole.** Warm, stagnant, animal-used, often cloudy. Settle and cloth-filter, then filter + chemical or boil. Warm water helps chemicals; algae add chlorine demand.

**Subarctic lake in winter.** 1 °C water makes chlorine and chlorine dioxide slow — use the longest label time or warm the water first. Keep filters and UV pens warm.

**Urban boil-water notice.** Boiling is the standard advice; where fuel is limited, household bleach at the dose on the CDC/EPA table, 30 minutes, double for cloudy water. Stored tap water filled before the event needs no treatment.

**Coastal and at sea.** Only distillation or reverse osmosis removes salt; none of the disinfection methods here make seawater drinkable.`,
    },
  ],
  mistakes: [
    'Myth: "Boil water for 10–20 minutes to be safe." A rolling boil for 1 min (3 min above ~2,000 m) is the CDC guidance; longer wastes fuel.',
    'Myth: "Water doesn’t get hot enough to disinfect at altitude." Even at ~83 °C it is far above pasteurisation temperatures.',
    'Using the same chlorine contact time in 2 °C water as in 25 °C water.',
    'Using a UV pen in cloudy or tea-coloured water without clarifying first.',
    'Treating a carbon filter as a pathogen barrier.',
    'Trusting a hollow-fibre filter that froze overnight.',
    'Relying on chlorine alone where livestock or people upstream mean Crypto risk.',
    'Myth: "A silver or copper bottle purifies water." Silver is a slow preservative, not a primary disinfectant.',
  ],
  exercises: [
    {
      id: 's4-l5-e1',
      title: 'Your treatment card: dose, time and fuel',
      level: 1,
      safety: 'home',
      minutes: 40,
      materials: ['Your chlorine / chlorine dioxide product labels', 'CDC or EPA emergency disinfection table', 'Card and pen'],
      steps: [
        'Write the dose for 1 L, 2 L and 10 L of clear and cloudy water for your chemical, from its label or the CDC/EPA table.',
        'Write the contact time at 20 °C, 10 °C and near 0 °C (use the "×2 per 10 °C" rule where the label is silent, and never go below the label).',
        'Compute the gas needed to boil 1 L and to melt and boil 1 L of snow on your stove.',
        'Add the CDC boiling rule for your usual altitude.',
      ],
      success: ['A pocket card with doses, times and fuel figures.', 'You can explain each number with CT or Q = mcΔT.'],
      skill: 'water-treatment',
    },
    {
      id: 's4-l5-e2',
      title: 'Multi-barrier dry run with muddy water',
      level: 3,
      safety: 'home',
      minutes: 90,
      materials: ['Tap water', 'A spoonful of garden soil or clay', 'Two clear jars', 'Cloth', 'Your filter (if you have one)', 'Chlorine product'],
      safetyNote: 'This is practice with deliberately dirtied water — do not drink it. Clean your filter afterwards per the maker’s instructions or use an old one.',
      steps: [
        'Stir soil into a litre of tap water. Split into two jars.',
        'Jar A: filter straight away and time it. Jar B: settle 1 h, pour through cloth, then filter. Compare flow and clarity.',
        'Dose jar B with chlorine at the cloudy-water rate and time the 30-minute contact; check for the faint chlorine smell.',
        'Write down which barrier handles which pathogen class, and what would still be missing for a stream below a village or a mine.',
      ],
      success: ['You observed faster filtering after clarification.', 'Your written chain names the log contribution of each step.'],
      skill: 'water-multibarrier',
    },
  ],
  simulations: ['water-advanced'],
  quiz: [
    {
      id: 's4-l5-q3',
      kind: 'single',
      prompt: 'At 4,500 m, water boils at about 85 °C. What does that mean for boiling as a treatment?',
      choices: [
        { id: 'a', text: 'Boiling no longer works; use chemicals only', why: '85 °C is far above pasteurisation temperatures (60–70 °C); boiling still works.' },
        { id: 'b', text: 'It still works; use the CDC 3-minute rule for margin', why: 'Correct — the CDC rule is a rolling boil of 3 min above ~2,000 m.' },
        { id: 'c', text: 'Boil for 20 minutes to compensate', why: 'Wastes fuel without meaningful benefit.' },
        { id: 'd', text: 'Just bring it to 60 °C to save fuel', why: 'You can’t reliably judge 60 °C held for 30 min in the field; a rolling boil is a visible indicator.' },
      ],
      answer: 'b',
      concepts: ['boiling-altitude'],
      explanation: 'Pathogens die rapidly well below 83 °C. The 3-minute rule above 2,000 m is a guideline margin.',
    },
    {
      id: 's4-l5-q6',
      kind: 'single',
      prompt: 'Your hollow-fibre filter froze overnight, but water still flows through it the next morning. What should you do?',
      choices: [
        { id: 'a', text: 'Trust it: if water still flows, the fibres are intact', why: 'Ice can crack fibres invisibly; flow says nothing about integrity.' },
        { id: 'b', text: 'Treat it as cracked: back it up with chemical or boiling', why: 'Correct — replace it when you can, and add a backup barrier meanwhile.' },
        { id: 'c', text: 'Backflush it hard once it thaws, then trust it again', why: 'Backflushing clears clogging; it cannot reveal or repair cracked fibres.' },
        { id: 'd', text: 'Trust it as long as the filtered water comes out clear', why: 'Pathogens are invisible; clear output says nothing about cracked fibres.' },
      ],
      answer: 'b',
      concepts: ['filtration'],
      explanation: 'Ice can crack fibres invisibly; flow says nothing about integrity. Keep filters warm; replace one that may have frozen, or add chemical/boiling as a backup.',
    },
    {
      id: 's4-l5-q4',
      kind: 'single',
      prompt: 'Which of these does **not** reduce the effectiveness of a UV pen?',
      choices: [
        { id: 'a', text: 'Cloudy water', why: 'Reduces it — particles shade microbes.' },
        { id: 'b', text: 'Tea-coloured water rich in dissolved organic matter', why: 'Reduces it — dissolved colour absorbs UV.' },
        { id: 'c', text: 'Cold batteries', why: 'Reduces it — weaker or failed lamp cycles.' },
        { id: 'd', text: 'Using a wide-mouth bottle as instructed', why: 'Correct — that is how most pens are designed to be used.' },
      ],
      answer: 'd',
      concepts: ['uv-dose', 'turbidity'],
      explanation: 'UV dose = intensity × time. Anything that blocks light or weakens the lamp cuts the dose.',
    },
    {
      id: 's4-l5-q2',
      kind: 'single',
      prompt: 'For 3-log Giardia inactivation with free chlorine at 5 °C, CT ≈ 140 mg·min/L. With a 2 mg/L residual, how long a contact time do you need?',
      choices: [
        { id: 'a', text: '30 min', why: 'That is the standard emergency guidance; cold water needs much longer for Giardia.' },
        { id: 'b', text: '140 min', why: 'This forgets to divide the CT by the 2 mg/L concentration.' },
        { id: 'c', text: '70 min', why: 'Correct — t = CT / C = 140 / 2 = 70 min.' },
        { id: 'd', text: '280 min', why: 'This multiplies CT by the concentration instead of dividing.' },
      ],
      answer: 'c',
      concepts: ['ct-disinfection'],
      explanation: 't = CT / C = 140 / 2 = **70 min** — more than double the standard 30 minutes, because the water is cold.',
    },
    {
      id: 's4-l5-q5',
      kind: 'single',
      prompt: 'Which chain for a silty river below a village is in the right order?',
      choices: [
        { id: 'a', text: 'Collect → microfilter → settle and cloth → chlorine → store', why: 'Silt clogs the filter; clarify before filtering.' },
        { id: 'b', text: 'Collect → settle and cloth → chlorine → microfilter → store', why: 'Disinfect last, so the chlorine residual protects the stored water.' },
        { id: 'c', text: 'Collect → settle and cloth → microfilter → chlorine → store', why: 'Correct — clarify, filter, then disinfect last so the residual protects stored water.' },
        { id: 'd', text: 'Collect → chlorine → settle and cloth → microfilter → store', why: 'Silt consumes and shields chlorine; clarify before adding chemicals.' },
      ],
      answer: 'c',
      concepts: ['log-reduction', 'turbidity', 'safe-storage'],
      explanation: 'Clarify before the filter (clogging) and before chemicals (demand, shielding); disinfect last so the residual protects stored water in a clean narrow-neck container.',
    },
    {
      id: 's4-l5-q7',
      kind: 'single',
      prompt: 'A product is marketed as a "purifier" under the US EPA guide standard. What should it achieve?',
      choices: [
        { id: 'a', text: '6 log bacteria, 4 log viruses, 3 log protozoan cysts', why: 'Correct — the EPA benchmark cited in the CDC Yellow Book.' },
        { id: 'b', text: 'Removal of all chemicals and heavy metals', why: 'Microbiological purifiers are not tested for chemical removal.' },
        { id: 'c', text: '99 % removal of every pathogen class', why: 'Only 2 log — far too little.' },
        { id: 'd', text: 'Desalination of seawater to drinking standard', why: 'That requires reverse osmosis or distillation.' },
      ],
      answer: 'a',
      concepts: ['log-reduction', 'filtration'],
      explanation: 'A "filter" usually means bacteria + protozoa only; a "purifier" also covers viruses.',
    },
    {
      id: 's4-l5-q1',
      kind: 'single',
      prompt: 'A treatment reduces bacteria from 200,000 per litre to 20 per litre. How many logs is that?',
      choices: [
        { id: 'a', text: '3 log', why: 'One power of ten short: 200,000 / 20 = 10,000 = 10⁴.' },
        { id: 'b', text: '4 log', why: 'Correct — log₁₀(200,000 / 20) = log₁₀(10,000) = 4.' },
        { id: 'c', text: '5 log', why: 'This counts the zeros in 200,000 instead of using the ratio.' },
        { id: 'd', text: '5.3 log', why: 'This is log₁₀(200,000) — it ignores the 20 that remain.' },
      ],
      answer: 'b',
      concepts: ['log-reduction'],
      explanation: 'log₁₀(200,000 / 20) = log₁₀(10,000) = **4** log (99.99 %).',
    },
  ],
  scenario: {
    id: 's4-l5-sc',
    setup: 'Trekking at 4,200 m. The only water is a grey, glacial-silt stream running past a busy lodge 200 m upstream. Water temperature 2 °C. You have a hollow-fibre filter, chlorine tablets, a stove and 180 g of gas for 3 days of cooking. You need 4 L/day.',
    question: 'Which chain best balances safety and fuel?',
    choices: [
      { id: 'a', text: 'Filter only: glacial meltwater is clean, and the filter handles protozoa.', why: 'The lodge upstream means human viruses; the filter misses them. The silt will also clog it.' },
      { id: 'b', text: 'Boil everything for 10 minutes, since altitude lowers the boiling point.', why: '12 L × ~25 g/L (plus 10-min boils) far exceeds 180 g; wasted fuel for no extra safety.' },
      { id: 'c', text: 'Settle overnight, filter, chlorinate with double contact time; keep filter warm.', why: 'Best: settling protects the filter; filter covers protozoa and bacteria; chlorine covers viruses; cold means longer contact; fuel saved for cooking. Keep the filter in your sleeping bag.' },
      { id: 'd', text: 'Chlorine only, with the standard 30 minutes of contact time per batch.', why: 'In 2 °C silty water, Giardia is under-treated and Crypto untouched.' },
    ],
    best: 'c',
    debrief: 'Match each barrier to a hazard: clarify for silt, microfilter for protozoa and bacteria, chemical for viruses from the lodge — with CT adjusted for 2 °C. Boiling would also work, and works at 4,200 m (≈86 °C), but the fuel budget says use it only as a backup. Keep the filter from freezing.',
    concepts: ['ct-disinfection', 'log-reduction', 'boiling-altitude', 'turbidity'],
  },
  summary: [
    '1 log = 90 %; logs add across independent barriers. EPA purifier benchmark: 6/4/3 log (bacteria/viruses/cysts).',
    'Filters by size: microfilters (0.1–0.2 µm) miss viruses; ultrafilters catch them; only RO or distillation removes salt; carbon is not a pathogen barrier.',
    'Chemicals: CT = C × t; roughly ×2 per 10 °C colder; turbidity adds demand and shields microbes. Chlorine misses Crypto; ClO₂ needs ~4 h for it.',
    'UV dose = intensity × time; needs clear water; no residual.',
    'Boiling works at any altitude; 1 min (3 min above ~2,000 m) is the CDC margin — longer only burns fuel.',
  ],
  furtherReading: ['cdc-yellowbook-water', 'wms-water-2019', 'epa-swtr-ct', 'epa-uvdgm-2006'],
  references: ['cdc-yellowbook-water', 'wms-water-2019', 'cdc-emergency-water', 'epa-emergency-disinfection', 'epa-swtr-ct', 'epa-uvdgm-2006', 'who-gdwq', 'who-hwts-round1'],
}
