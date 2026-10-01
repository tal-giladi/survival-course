# Authoring a stage

This is the contract for writing a stage of the course. Stage 1 (`app/src/content/stages/stage1/`)
is the reference implementation — read at least three of its lessons, its `review.ts`, its diagrams
(`app/src/diagrams/stage1.tsx`) and two of its simulations (`app/src/sims/FireBasic.tsx`,
`app/src/sims/HeatBalance.tsx` + `heatModel.ts`) before writing.

## Files you own for stage N

Only create or edit these (so parallel authors never conflict):

- `app/src/content/stages/stageN/` — lesson files (`lNN-slug.ts`), `review.ts`, `index.ts`
- `app/src/diagrams/stageN.tsx` — SVG diagram components + `export const diagrams: Record<string, ComponentType>`
- `app/src/sims/stageN/` — simulation components + `index.ts` exporting `sims: SimDef[]`
  (types from `../types`; pure model logic in a separate `.ts` file so it can be unit-tested;
  a branching scenario can be registered with `scenarioSim('<scenario-id>')` from `../scenarioSim`)
- `app/src/test/stageN.test.ts` — optional tests for your simulation models

Do **not** edit shared files (`curriculum.ts`, `references.ts`, `skills.ts`, `labels.ts`, registries,
components, CSS). Everything a stage adds goes through its `StageContent` export:

```ts
export const stageN: StageContent = {
  n: N,
  lessons: [...],            // one per outline entry in curriculum.ts, same ids, titles and order
  review: [...],             // 10–12 interleaved stage-review questions (single, 4 choices), ids 'sN-rev-K'; first 10 imported
  references: [...],         // NEW references only (reuse existing ids from references.ts freely)
  concepts: { 'concept-id': 'Human label' }, // every NEW concept tag you use
  skills: [...],             // optional NEW skills (existing skill ids in skills.ts may be reused)
  scenarios: [...],          // optional branching scenarios for ScenarioPlayer
}
```

## Lesson requirements

Every lesson is a `Lesson` (see `app/src/content/types.ts`) matching the outline entry in
`curriculum.ts` (id, title, level, prerequisites). It must contain:

1. 3–5 learning objectives
2. Explanation — rich blocks (md, callouts, diagrams, sims, tables); substantive, not padded
3. Why it matters
4. Science/technical background where relevant — explain every equation in words first, use units
   and a worked numeric example; KaTeX math with `$...$` / `$$...$$` (escape backslashes in TS strings)
5. At least one SVG diagram per lesson on average across the stage (theme-aware: colors only via CSS
   variables like `var(--accent)`, `var(--text)`, `var(--panel-2)`, `var(--line)`, `var(--muted)`,
   `var(--bad)`, `var(--ok)`, `var(--info)`, `var(--sky)`, `var(--ground)`; `className="diagram"`;
   `role="img"` + `aria-label`)
6. Examples from several environments (forest, desert, mountain, tropical, arctic/subarctic, coastal, urban, rural) — not Israel-specific
7. Common mistakes (including myths, flagged as myths)
8. 1–3 practical exercises with `level` 1–4 and a `safety` class; physical skills link a `skill`
9. Simulations where they fit (`simulations: ['id']` and/or `{ type: 'sim', id }` blocks)
10. Quiz: 4–7 questions, every one `kind: 'single'` with exactly 4 choices (Tal's Academy imports only
    single-answer multiple choice). `why` text for **every** choice and an `explanation`; at least one
    judgment/scenario-style item. Only the first 5 are imported, so put the strongest first. Wrong options
    are plausible mistakes; options of similar length (the correct one is not the longest); no
    "all/none of the above".
11. Scenario question with exactly 4 choices, `best`, per-choice `why`, and a debrief
12. Summary bullets
13. Further reading + references (ids that exist in `references.ts` or your stage’s `references`)

Ids: lessons use the outline ids; quiz questions `sN-lK-qM`; exercises `sN-lK-eM`; scenario
question `sN-lK-sc`. Concept tags are kebab-case; reuse existing tags from `labels.ts` where they fit
(cross-stage reuse drives spaced review and weak-area detection).

Spaced review: each stage’s quizzes and review should re-test earlier-stage concepts in new contexts
(e.g., a navigation lesson’s scenario that also hinges on daylight budgeting or stay-or-move).

## Safety rules (non-negotiable)

- Classify every exercise: `home`, `outdoor`, `supervised`, `formal-training`, `special-equipment`, `virtual-only`.
- Never instruct unsupported climbing/rappelling, hazardous water crossings, cold-water immersion,
  wildlife handling, trapping/hunting practice, eating wild plants/fungi identified from the course,
  or fires where not legal. Teach those by explanation and simulation, point to formal training.
- First-aid content follows current WMS/ILCOR-aligned guidance, avoids myths (sucking venom,
  tourniquet-as-last-resort dogma, rubbing frostbite, etc.) and repeatedly directs learners to a
  hands-on WFA/WAFA/WFR course.
- Fire, foraging, fishing, hunting, trapping, camping: add a `callout` with `tone: 'law'`.

## Sources

Prefer guidelines and government agencies, then professional training bodies, then standard
textbooks. `docs/research-notes.md` lists checked sources by subject — use those URLs where possible.
Never invent URLs, DOIs or statistics; if unsure of a URL, omit `url` and cite the work by title.

## Definition of done

From `app/`: `npx tsc -b` passes, `npx vitest run` passes (it validates every id you reference),
`npx oxlint src` shows no errors, and `npx vite build` succeeds. Then `npm run export-academy` (regenerates the
Academy markdown at the repo root) and, from the tals-academy repo,
`npm run check-course -- ../course-creator/survival-course` reports 0 problems. Commit your stage with the
regenerated files.
