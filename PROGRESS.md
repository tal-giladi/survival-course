# Build progress (crash-recovery log)

Source brief: `plan.md`. Resume from the first unchecked item.

## Batches
- [x] B0  Repo init, Vite+React+TS scaffold in `app/`
- [x] B1  Research notes (`docs/research-notes.md`) — background agent
- [x] B2  Design docs: research summary, curriculum, prereq graph, module structure, lesson list, exercises, quiz plan, simulation plan, capstones, references (`docs/`)
- [ ] B3  App architecture: content types, registry, router, layout, theming
- [ ] B4  Reusable components: Lesson renderer, Quiz, Exercise, SkillTracker, References, ScenarioEngine, Simulation host
- [ ] B5  Progress store + dashboard + spaced review
- [ ] B6  Stage 1 lessons 1–4
- [ ] B7  Stage 1 lessons 5–9
- [ ] B8  Stage 1 lessons 10–13 + module quiz + capstone-lite scenario
- [ ] B9  Stage 1 simulations (priorities, kit builder, heat-loss, fire, shelter, water, signaling, lost-scenario game)
- [ ] B10 Stages 2–18 + capstones as roadmap stubs in registry (metadata, lessons, prereqs)
- [ ] B11 Build, lint, test in browser, GitHub Pages workflow, README
- [ ] B12 Push to GitHub (tal-giladi/survival-course, public)

## Notes
- B2: course-design.md, lesson-list.md, prerequisite-graph.md done (generated via scripts/gen-docs.ts). research-summary.md + references.md pending research agent output (docs/research-notes.md).
- B1/B2 done: research-notes, research-summary, course-design, lesson-list, prerequisite-graph, references (docs regenerate with: node scripts/gen-docs.ts).
