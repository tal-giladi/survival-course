# Course design

This document is the blueprint for the course. It covers items 2–9 of the brief:
curriculum, prerequisite logic, module structure, practical-exercise list, quiz plan,
simulation plan and capstones. The research that informed it is in
[research-summary.md](research-summary.md); the lesson-by-lesson map is generated into
[lesson-list.md](lesson-list.md) and the dependency graph into
[prerequisite-graph.md](prerequisite-graph.md).

---

## 1. Philosophy: a decision system, not a bag of tricks

Every professional program studied (NOLS, WMS-aligned wilderness medicine, SAR training,
military SERE doctrine, the bushcraft schools) converges on the same insight: people die in the
outdoors mostly from **bad decisions under stress in cold, wet, dark, dehydrated or injured
conditions** — not from a missing trick. The course therefore teaches one loop and one set of
questions, and every lesson, exercise, simulation and capstone reuses them.

### The loop

**Observe → Assess → Prioritize → Plan → Act → Reassess**

It is deliberately close to STOP (Stop–Think–Observe–Plan) used by SAR and land agencies, and to
the patient-assessment cycle of wilderness medicine, so skills transfer between domains.

### The 12 questions

Asked in every scenario, in this order, until the answers stop changing:

1. Am I in immediate danger?
2. What are the major environmental threats?
3. Do I have injuries?
4. Where is my water?
5. What is my temperature risk?
6. Where will I shelter?
7. How will I communicate?
8. Should I stay or move?
9. What resources do I have?
10. What is the biggest risk over the next hour?
11. What is the biggest risk overnight?
12. What is my next highest-value action?

Question 12 is the output. The course teaches *prioritization* by scoring actions on
**risk reduced ÷ (time + energy + resources spent)**, adjusted for reversibility. The
Priority Triage simulation drills exactly this.

### Why the "rule of threes" is taught but not trusted

The rule (3 minutes air, 3 hours shelter in harsh conditions, 3 days water, 3 weeks food) is a
useful mnemonic for *ordering* threats, but each number varies by an order of magnitude with
environment. Lesson s1-l2 teaches it, then immediately teaches its failure cases (desert heat can
kill by dehydration in well under a day; a mild summer night needs almost no shelter). This
pattern — *teach the heuristic, then the mechanism that says when it breaks* — repeats across
the course.

---

## 2. Curriculum architecture

18 topical stages + a capstone stage (19) with 12 scenarios and the final assessment.
135 lesson/scenario units in total. See [lesson-list.md](lesson-list.md) for every unit.

| # | Stage | Level | Depends on |
|---|---|---|---|
| 1 | Survival Foundations | Beginner | — |
| 2 | Navigation and Terrain | Beginner → Advanced | 1 |
| 3 | Fire and Heat | Intermediate | 1 |
| 4 | Water | Intermediate | 1 |
| 5 | Shelter | Intermediate | 1 (+8 for snow shelters) |
| 6 | Food and Nutrition | Intermediate | 1, 4 |
| 7 | Primitive Skills / Bushcraft | Intermediate | 1, 3 |
| 8 | Physiology of Survival | Intermediate | 1 |
| 9 | Wilderness First Aid | Intermediate | 1, 8 |
| 10 | Field Improvisation | Intermediate | 1, 7 |
| 11 | Tracking | Intermediate | 1, 2 |
| 12 | Weather and Hazards | Intermediate | 1, 2 |
| 13 | Rope and Terrain | Advanced | 7 |
| 14 | Signaling and Rescue | Intermediate | 1, 2 |
| 15 | Survival Psychology | Advanced | 1 |
| 16 | Urban and Disaster | Intermediate | 1 |
| 17 | Vehicle and Travel | Intermediate | 1, 2 |
| 18 | Long-Duration Survival | Advanced | 3, 4, 5, 6, 8 |
| 19 | Capstones + Final assessment | Expert | all |

### Recommended study path

Stage numbers group topics; they are not a strict order. Physiology underpins shelter, fire,
water and first aid, so the recommended path pulls its first half forward:

1. **Stage 1** (all) — the foundation and decision system.
2. **Stage 2** lessons 1–7 (map & compass core) and **Stage 8** lessons 1–4 (thermo-regulation).
3. **Stages 3, 4, 5** (fire, water, shelter) — each now builds on real physiology.
4. **Stage 16** (urban/disaster) — immediately useful at home; low risk.
5. **Stages 6, 7, 10** (food, bushcraft, improvisation).
6. **Stage 9** (first aid) — then take a hands-on WFA/WAFA course.
7. **Stages 11, 12, 14** (tracking, hazards, signaling) and the rest of Stages 2 and 8.
8. **Stages 13, 15, 17, 18**.
9. **Capstones → Final assessment.**

The app shows a lesson's prerequisites on every lesson page and flags any that are not
completed, but never hard-locks content (self-directed learners jump around; the warning is
the teaching tool).

### Difficulty levels

- **Beginner** — vocabulary, mental models, first-hour actions.
- **Intermediate** — the mechanism behind each skill; simple quantitative reasoning; multiple
  techniques per problem.
- **Advanced** — trade-offs between competing priorities, failure analysis, environment-specific
  adaptation.
- **Expert** — integrated multi-day and multi-person scenarios with incomplete information.

---

## 3. Module (lesson) structure

Every lesson is a content file conforming to `Lesson` in `app/src/content/types.ts`, rendered by
one reusable `LessonView` component, in this fixed order:

1. Learning objectives
2. Explanation (rich blocks: text, callouts, diagrams, embedded simulations, tables)
3. Why it matters
4. Scientific / technical background (optional; equations explained in words first)
5. Visual diagrams (inline in 2 and 4)
6. Examples (drawn from several environments)
7. Common mistakes
8. Practical exercise(s) — each tagged with difficulty level and safety class
9. Interactive simulation where appropriate
10. Quiz — with explanations for every option
11. Scenario question — answered *before* the debrief is shown
12. Summary
13. Further reading
14. References (resolved from a single course-wide reference database)

Lessons target 20–40 minutes of reading plus exercises. Large subjects are split rather than
padded.

### Safety classes (shown on every exercise)

| Class | Meaning |
|---|---|
| 🏠 Home | Safe at a desk or at home |
| 🌲 Outdoor | Outdoors with ordinary care; a partner is recommended |
| 👥 Supervised | Only with a competent person present |
| 🎓 Formal training | Requires a certified course / instructor |
| 🧰 Special equipment | Requires specialized equipment *and* training |
| 🖥️ Virtual only | Simulate only; do not attempt physically |

Rules enforced in content: no unsupervised climbing, rappelling, hazardous water crossings,
wildlife handling, foraging of wild fungi, or fire in places where it is not legal. These
topics are taught through explanation and simulation, with pointers to real courses.

---

## 4. Practical exercise list

Four levels per the brief. Stage 1 exercises are fully written in the app; later stages are
planned below at the level of *which exercise, which level, which safety class*.

### Stage 1 (built)

| Lesson | Exercise | Level | Safety |
|---|---|---|---|
| s1-l1 | Write your personal "12 questions" card and laminate it | 1 | Home |
| s1-l1 | Case-study debrief: map a real incident onto the loop | 2 | Home |
| s1-l2 | Rank threats for four environments; justify each | 1 | Home |
| s1-l3 | STOP drill on a familiar walk: stop at a random point and run the checklist | 3 | Outdoor |
| s1-l4 | Write a trip plan and leave it with a contact | 3 | Home |
| s1-l4 | Risk-matrix a planned day hike | 2 | Home |
| s1-l5 | Box-breathing practice under mild stress (cold shower / timed puzzle) | 3 | Home |
| s1-l6 | Decision journal: log three real decisions with reversibility and value | 2 | Home |
| s1-l7 | Heat-budget experiment: wet vs dry sleeve in a breeze with a thermometer | 3 | Home |
| s1-l8 | Audit your clothing system by layer and fibre | 3 | Home |
| s1-l8 | Wet-cotton vs wool/synthetic comparison | 3 | Home |
| s1-l9 | Build a personal survival kit and pocket kit; weigh and inventory | 3 | Home |
| s1-l9 | Kit Builder simulation for three environments | 2 | Home |
| s1-l10 | Pitch a tarp A-frame and lean-to in a garden or park | 3 | Outdoor |
| s1-l10 | Ground-insulation test: sit on bare ground vs 15 cm of leaves | 3 | Outdoor |
| s1-l11 | Prepare a tinder/kindling/fuel bundle (no ignition) | 3 | Home |
| s1-l11 | Light a fire in a legal fire pit/grill with lighter and ferro rod | 3 | Outdoor (where legal) |
| s1-l12 | Measure your own water turnover for 3 days | 3 | Home |
| s1-l12 | Treat water with two methods; practise dosing arithmetic | 3 | Home |
| s1-l13 | Whistle and mirror practice; phone location drill (find your coordinates offline) | 3 | Outdoor |
| s1-l14 | Integrated scenario "Lost at 14:00" | 4 | Virtual |
| s1-l14 | Integrated home drill: overnight in the garden with only your kit | 4 | Outdoor |

### Later stages (planned)

| Stage | Level-1/2 exercises | Level-3 (safe physical) | Level-4 (integrated) |
|---|---|---|---|
| 2 Navigation | Grid refs, bearings on printed maps, contour interpretation, pacing maths | Pace-count calibration; orienteering course; shadow-stick; night sky ID | Navigation-failure simulation; local orienteering event |
| 3 Fire | Fire-lay selection by purpose and weather | Feather sticks; ferro rod on natural tinder; bow drill (safe setting) | Wet-weather fire challenge in legal pit |
| 4 Water | Water-need calculations; source risk ranking | Dew/rain collection; improvised sediment filter + real treatment | Multi-day water budget scenario |
| 5 Shelter | Site selection on photos/maps | Tarp configurations in wind; debris-hut model | Overnight in a self-built shelter with a sleeping bag as backup |
| 6 Food | Energy budgets; spoilage; plant ID from photos | Home food rotation; supervised plant walks | Food-vs-energy multi-day scenario |
| 7 Bushcraft | Engineering principles quiz | Cordage, lashings, bark container, pine-pitch glue | Build a tripod + pot hanger from cordage you made |
| 8 Physiology | Heat-loss calculations; wind-chill | Personal sweat-rate test | Cold/heat scenarios using the physiology simulator |
| 9 First aid | Assessment sequences; SOAP notes | Splinting and bleeding control on training aids | Mock patient scenarios → formal WFA course |
| 10 Improvisation | Constraint puzzles | Stretcher from jackets + poles (no live load at height) | Improvise-to-spec challenges |
| 11 Tracking | Track ID from images | Track trap in sand; track journal | Tracking-scene interpretation |
| 12 Hazards | Cloud ID; lightning timing | Weather journal with pressure trend | Go/no-go decision scenarios |
| 13 Rope | Vector-angle calculations | Knot tying; rope inspection; ground-level 3:1 haul | Virtual-only rescue systems |
| 14 Signaling | Signal matching; search-probability maths | Mirror aiming; ground-to-air layouts | SAR search simulation |
| 15 Psychology | Bias identification | Stress-inoculation drills | Priority-dilemma scenarios |
| 16 Urban | Home-kit quantities | Build a 72-hour home kit; family plan | 72-hour outage simulation |
| 17 Vehicle | Vehicle kit audit | Pack vehicle kit | Stranded-vehicle scenario |
| 18 Long duration | Budget planning | Weekend with a reduced kit (supervised) | Multi-day simulation |

---

## 5. Quiz plan

- Every lesson ends with a 4–8-question quiz; every question has an explanation *and* per-option
  feedback.
- Question types (all implemented as reusable components): single choice, multiple answer,
  true/false, ordering/prioritization, numeric calculation (with tolerance and units),
  image/diagram identification, scenario/decision.
- Map-reading questions (Stage 2) reuse the diagram slot with generated map SVGs.
- Each question carries **concept tags**. Quiz results update a per-concept mastery score,
  which drives the **weak-areas** list on the dashboard and the **spaced-review** queue.
- Every lesson also has one **scenario question** where the learner commits to an answer before
  the debrief explains why each option is good or bad.
- Each stage ends with a stage review that mixes new material with questions drawn from earlier
  stages (interleaving).
- The **final assessment** is scenario-weighted: ≥60 % of marks are judgment/prioritization
  items spanning navigation, physiology, first aid, fire, water, shelter, food, tracking,
  psychology and risk management.

### Spaced review design

A Leitner system over individual questions:

- Box 1 (missed) → due again immediately; box 2 → 3 days; box 3 → 7 days; box 4 → 16 days; box 5 → 35 days.
- Correct answer moves a question up a box; wrong moves it to box 1.
- The Review page mixes due questions across all completed lessons, so fire, water, physiology
  and navigation keep returning. Capstones deliberately re-test earlier concepts in new
  environments (fire → cold-weather capstone; navigation → lost-person capstone; physiology →
  cold-weather capstone; water → multi-day capstone).

---

## 6. Simulation plan

All simulations are React components registered by id in `app/src/sims/registry.ts`, so a lesson
embeds one with `{ type: 'sim', id: '...' }`. Each reports a score (0–100) to the progress store.
Models are intentionally simple but directionally correct and documented in code.

| ID | Stage | What the learner does | What the model shows | Status |
|---|---|---|---|---|
| priority-triage | 1 | Picks the next highest-value action from 4 candidates across random situations | Score + reasoning per round | Built |
| heat-balance | 1 | Sets air temp, wind, wetness, clothing, activity, shelter | Heat production vs loss by mechanism; net balance; time-to-danger; sweat loss | Built |
| kit-builder | 1 | Packs a kit under a weight limit for an environment | Coverage of functions, redundancy, weight | Built |
| shelter-site | 1 | Picks a site, shelter type, orientation and ground insulation | Overnight warmth, dryness, hazards | Built |
| fire-basic | 1 | Chooses tinder, kindling, fuel, lay, placement, weather, ignition | Staged ignition probabilities and an animated result | Built |
| water-treatment | 1 | Chooses source, collection, prefilter, treatment, storage | Residual risk per hazard class, time and fuel cost | Built |
| signal-detect | 1 | Chooses signals for day/night and searcher type | Detection likelihood by searcher | Built |
| scenario-lost-1400 | 1 | Branching "Day 1, 14:00 — you realise you are lost" | Time, weather, water, warmth, energy, battery, rescue probability | Built |
| nav-map | 2 | Top-down map: bearings, pacing, terrain, compass, getting lost | Track vs intended route, error cone | Planned |
| celestial | 2 | Changes time, date, latitude | Sun, Moon, stars; learner finds north | Planned |
| fire-advanced / friction-fire | 3 | Full fire lays; bow-drill mechanics | Heat and ember model | Planned |
| water-advanced / solar-still | 4 | Full source/treatment chains; still yields | Log reductions; yields vs sweat cost | Planned |
| shelter-builder | 5 | Builds shelters on terrain with materials | Heat-loss paths | Planned |
| energy-budget, plant-id | 6 | Budgets and ID drills | | Planned |
| heat-balance-advanced, cold-water | 8 | Full physiology model; immersion timeline | | Planned |
| patient-assessment, evac-decision | 9 | Mock patients | Vital-sign trends | Planned |
| tracking-scene | 11 | Click sign in a scene, interpret | | Planned |
| cloud-id, lightning-risk | 12 | Identify clouds; time storms | | Planned |
| mechanical-advantage | 13 | Rig a virtual haul system | Forces with friction | Planned |
| search-sim | 14 | Be the searcher and the lost person | POA/POD | Planned |
| outage-72h, stranded-vehicle, multi-day | 16–18 | Resource simulations over time | | Planned |
| capstone-engine | 19 | 12 branching capstones | | Planned (engine built) |

The branching **scenario engine** (`app/src/components/ScenarioPlayer.tsx`) is generic: a
scenario is data (nodes, options, effects on state variables, quality score, feedback). The
Stage 1 scenario and all twelve capstones use the same engine.

---

## 7. Capstone scenarios

Each capstone is a branching scenario with a debrief that maps every decision back to the
lessons it tests. All share the state model (time, water, energy, warmth, morale, battery,
injury, rescue probability, disorientation).

| # | Capstone | Setting | Core tension | Skills combined |
|---|---|---|---|---|
| 1 | Lost in a forest | Temperate forest, autumn, 15:30 | Relocate vs stay; daylight budget | Navigation, STOP, signaling, shelter, fire |
| 2 | Desert survival | Hot desert, vehicle breakdown, 11:00, 41 °C | Water budget vs travel; heat illness | Water, physiology, shelter (shade), vehicle, signaling |
| 3 | Cold-weather survival | Subarctic, −15 °C, snowmobile failure | Insulation vs exertion sweat; fire | Physiology, shelter (snow), fire, clothing |
| 4 | Tropical environment | Rainforest, separated from group | Water quality, insects, constant wet | Water treatment, shelter, first aid, navigation (rivers) |
| 5 | Mountain environment | Ridge scramble, weather front arriving | Descend vs shelter; altitude illness | Weather, physiology, terrain hazards, navigation |
| 6 | Injured while hiking | Ankle fracture 4 km from trailhead, 17:30 | Self-evac vs wait; overnight with injury | First aid, improvisation, signaling, shelter |
| 7 | Lost at night | Headlamp failing, trail lost | When to stop moving | Night navigation, psychology, shelter, signaling |
| 8 | Unexpected overnight stay | Day-hike overrun, light kit | Improvised bivouac | Clothing, shelter, fire, heat budget |
| 9 | Navigation failure | Compass lost, fog | Relocation with terrain only | Terrain association, natural navigation, dead reckoning |
| 10 | Multi-day survival | Canoe capsize, 4 days to rescue | Budgets and routine | Water, food, fire, shelter, morale, repair |
| 11 | Group survival | Group of 5, one hypothermic, one panicking | Leadership, triage, division of labor | Psychology, first aid, shelter, decision making |
| 12 | Disaster / urban emergency | Earthquake, night, no power or water | Building safety, water, communication | Urban survival, first aid, water, sanitation |

The brief's example ("injured 4 km from the start, 17:30, 700 ml water, knife, cordage, tarp,
lighter, flashlight, phone at 12 %") is the seed for capstone 6.

---

## 8. Progress tracking

Stored locally in the browser (`localStorage`, versioned schema, export/import as JSON so the
learner can back up or move devices).

Tracked: lessons completed, exercises completed, quiz scores (best + last, per question),
simulation best scores, scenario outcomes and decision quality, concept mastery, skill
self-assessments, review boxes.

Dashboard shows: overall progress, current/next lesson, skills by state, weak concepts, quiz and
scenario performance, reviews due.

Real-world skills use the five states from the brief — *Not learned, Studied, Practiced,
Competent, Needs more practice*. Completing a lesson can move a skill to **Studied** at most.
**Practiced** and **Competent** can only be set by the learner, and **Competent** on a physical
skill asks the learner to confirm they have performed it unaided, in realistic conditions, more
than once. Skills marked Competent and not re-confirmed for 6 months are flagged for refresh.

---

## 9. Geographic flexibility and law

Examples rotate through forest, desert, mountain, tropical, arctic/subarctic, coastal, urban and
rural settings. Every lesson that touches fire, foraging, fishing, hunting, trapping, camping,
protected species or protected land carries a **"Law varies"** callout linking to the
jurisdiction portal list on the References page rather than assuming any one country's rules.

---

## 10. Technical architecture

- Vite + React + TypeScript, deployed as a static site (GitHub Pages).
- `app/src/content/` — course content only (types, curriculum map, lessons, references, skills,
  scenarios). No UI code.
- `app/src/components/` — reusable UI: LessonView, Quiz, ExerciseCard, ScenarioPlayer,
  ReferenceList, SkillTracker, Diagram host, Sim host.
- `app/src/sims/` — simulations, each self-contained, registered by id.
- `app/src/diagrams/` — SVG diagram components registered by id.
- `app/src/progress/` — progress store, spaced-review scheduler, mastery calculation.
- Adding a stage = add `content/stages/stageN/*.ts`, register lessons in
  `content/lessons.ts`, flip the stage `status` to `available`. No application changes.
