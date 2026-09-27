# Notes for Tal

- Live site: https://tal-giladi.github.io/survival-course/ — repo: https://github.com/tal-giladi/survival-course (public). GitHub Pages was enabled with the Actions workflow.
- Published: all 18 stages, capstones and final assessment.
- Research notes list items that could not be machine-verified (some WMS DOIs, book editions, NASAR pages, Israeli fishing/hunting licence pages, UK legislation links) — see the end of docs/research-notes.md.
- Simulation models are intentionally simplified; assumptions are documented in the code (e.g. app/src/sims/heatModel.ts).
- Progress is stored in the browser only (localStorage); export/import is on the "Safety & data" page.
- Most new references in stages 10–18 are cited by title without URLs (couldn't be verified offline).

## Done 2026-09-27 (follow-up pass)

- Diagram pass: every diagram in all 18 stages (≈290) was checked in the browser for text running off the edge or overlapping other text. Fixed about 30 diagrams in stages 1, 2, 5, 7, 8, 10, 13, 14, 15, 16, 17 and 18. Two remaining flags are rotated axis labels (false positives).
- Figure checks:
  - Stage 10: Sphere 2018 (≤ 20 people per shared toilet; ≥ 30 m from groundwater sources), PET softening ~70–80 °C (its glass transition), the ~20 % pack rule of thumb, and the Welch (2000) conclusion all match the sources. PubMed blocked the automated check of the Welch abstract; the wording matches the paper as I know it.
  - Stage 13: EN 892 single rope (80 kg mass, peak force ≤ 12 kN) and MIL-C-5040 Type III 550 lbf are correct.
  - Stage 17: McLaren 2005 (~22 °C / 40 °F rise in an hour, ~80 % of it in the first 30 min) is correct. Triangle ≥ 45 m behind, never on motorways, is correct (now Rule 276). The reference URL now points to the breakdowns page (Rules 274–287), which was checked live.
  - Stage 18: the F-diagram comes from Wagner & Lanoix (WHO, 1958). The open-fire ~10 % efficiency and ~0.5 kg wood per litre (melting and boiling snow at 10 % efficiency ≈ 0.45 kg) are consistent and labelled illustrative. The sleeping-bag +50–100 g/night figure is plausible for multi-night cold use.
