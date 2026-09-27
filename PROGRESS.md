# Build progress (crash-recovery log)

Source brief: `plan.md`. Resume from the first unchecked item.

## Batches
- [x] B0  Repo init, Vite+React+TS scaffold in `app/`
- [x] B1  Research notes (`docs/research-notes.md`) — background agent
- [x] B2  Design docs: research summary, curriculum, prereq graph, module structure, lesson list, exercises, quiz plan, simulation plan, capstones, references (`docs/`)
- [x] B3  App architecture: content types, registry, router, layout, theming
- [x] B4  Reusable components: Lesson renderer, Quiz, Exercise, SkillTracker, References, ScenarioEngine, Simulation host
- [x] B5  Progress store + dashboard + spaced review
- [x] B6  Stage 1 lessons 1–4
- [x] B7  Stage 1 lessons 5–9
- [x] B8  Stage 1 lessons 10–13 + module quiz + capstone-lite scenario
- [x] B9  Stage 1 simulations (priorities, kit builder, heat-loss, fire, shelter, water, signaling, lost-scenario game)
- [x] B10 Stages 2–18 + capstones as roadmap stubs in registry (metadata, lessons, prereqs)
- [x] B11 Build, lint, test in browser, GitHub Pages workflow, README
- [x] B12 Push to GitHub (tal-giladi/survival-course, public)

## Notes
- B2: course-design.md, lesson-list.md, prerequisite-graph.md done (generated via scripts/gen-docs.ts). research-summary.md + references.md pending research agent output (docs/research-notes.md).
- B1/B2 done: research-notes, research-summary, course-design, lesson-list, prerequisite-graph, references (docs regenerate with: node scripts/gen-docs.ts).
- B3-B5 written (not yet compiled): components, pages, store, analytics, CSS. Missing before build: diagrams/registry.tsx, sims/*.tsx (7), content/scenarios.ts, content/stages/stage1/{index,review}.ts.
- B11/B12 done: tests (22) pass, build OK, deployed to https://tal-giladi.github.io/survival-course/ via GitHub Actions.

## Next (not started)
- Write Stage 2 (Navigation) lessons + nav-map and celestial simulations; then follow the recommended path in docs/course-design.md.

## Phase 2 — remaining stages (started 2026-09-27)
Per-stage modules: content/stages/stageN, diagrams/stageN.tsx, sims/stageN (see docs/AUTHORING.md).
Stages written in parallel git worktrees by agents, merged to main, then status flipped in curriculum.ts.
- [ ] Batch A: stages 2, 3, 4, 5, 8
- [ ] Batch B: stages 6, 7, 9, 10, 11, 12
- [ ] Batch C: stages 13, 14, 15, 16, 17, 18
- [ ] Stage 19: 12 capstone scenarios + final assessment page
- [ ] Regenerate docs, deploy
