// Exports the course to the Tal's Academy import layout (plain markdown + .quiz.yaml + SVG + simulations)
// at the repo root, from the app's content in app/src/content. The app stays the single source of truth:
// edit content there, then run `cd app && npm run export-academy` and commit the result.
//
//   _sidebar.md, glossary.md, references/*.md
//   lessons/module-NN/lesson-MM.md (+ .quiz.yaml)      stage N, lesson M
//   assessments/module-NN-quiz.md (+ .quiz.yaml)       stage review (stage 19: final assessment)
//   assets/diagrams/<id>.svg                           diagrams, rendered from the React components
//   simulations/<id>/index.html                        simulations (bundle built by vite.sims.config.ts)
//
// Graded quizzes are the first 5 questions of each lesson and the first 10 of each review; every
// question must be single choice with 4 options. Options are reordered so the correct answer's
// position rotates through A-D.
import { mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { createElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import { stages } from '../src/content/curriculum'
import { stageContents } from '../src/content/stageContents'
import { conceptLabel } from '../src/content/labels'
import { references, refById, subjects } from '../src/content/references'
import { lawPortals } from '../src/content/lawPortals'
import { skillById } from '../src/content/skills'
import { diagramIds, Diagram } from '../src/diagrams/registry'
import { sims, simById } from '../src/sims/registry'
import { safetyInfo, levelNames } from '../src/components/ExerciseCard'
import type { Block, Exercise, Lesson, Question, Reference, ScenarioQuestion } from '../src/content/types'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..', '..')
const LAST_VERIFIED = '2026-09-27'
const LESSON_QUIZ_MAX = 5
const MODULE_QUIZ_MAX = 10

const problems: string[] = []
const pad = (n: number) => String(n).padStart(2, '0')
const write = (rel: string, text: string) => {
  const p = join(ROOT, rel)
  mkdirSync(dirname(p), { recursive: true })
  writeFileSync(p, text.replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n')
}
const plain = (md: string) => md.replace(/\*\*|__/g, '').replace(/`/g, '').trim()
const cell = (s: string) => s.replace(/\|/g, '\\|').replace(/\n/g, '<br>')

// ---------- ids and paths ----------

type Loc = { stage: number; order: number; num: number; lesson: Lesson }
const locs = new Map<string, Loc>()
let running = 0
for (const st of stages) {
  const content = stageContents.find((s) => s.n === st.n)
  const lessons = st.outline.map((o) => content?.lessons.find((l) => l.id === o.id)).filter((l): l is Lesson => !!l)
  lessons.forEach((lesson, i) => locs.set(lesson.id, { stage: st.n, order: i + 1, num: ++running, lesson }))
}
const pageId = (l: Loc) => `${pad(l.stage)}.${l.order}`
const lessonPath = (l: Loc) => `lessons/module-${pad(l.stage)}/lesson-${pad(l.order)}.md`
const quizPath = (n: number) => `assessments/module-${pad(n)}-quiz.md`
const quizYaml = (md: string) => md.replace(/\.md$/, '.quiz.yaml')
const fromLesson = '../../'

// ---------- markdown ----------

const ALERT: Record<string, string> = { info: 'NOTE', tip: 'TIP', warning: 'WARNING', danger: 'CAUTION', law: 'IMPORTANT' }
const quote = (md: string) => md.split('\n').map((l) => (l ? `> ${l}` : '>')).join('\n')

const diagramAlt = new Map<string, string>()
const usedDiagrams = new Set<string>()
const diagramMd = (id: string, caption?: string, up = fromLesson) => {
  if (!diagramIds.includes(id)) {
    problems.push(`unknown diagram ${id}`)
    return ''
  }
  usedDiagrams.add(id)
  const alt = (diagramAlt.get(id) || caption || id).replace(/[[\]]/g, '').replace(/\s+/g, ' ')
  return `![${alt}](${up}assets/diagrams/${id}.svg)` + (caption ? `\n\n*${caption}*` : '')
}

const usedSims = new Set<string>()
const simMd = (id: string, caption?: string) => {
  const def = simById(id)
  if (!def) {
    problems.push(`unknown simulation ${id}`)
    return ''
  }
  usedSims.add(id)
  return `[Simulation: ${def.title}](${fromLesson}simulations/${id}/index.html)\n\n${caption ?? def.description}`
}

function blockMd(b: Block): string {
  switch (b.type) {
    case 'md':
      return b.md
    case 'callout':
      return quote(`[!${ALERT[b.tone]}]\n${b.title ? `**${b.title}**\n\n` : ''}${b.md}`)
    case 'diagram':
      return diagramMd(b.id, b.caption)
    case 'sim':
      return simMd(b.id, b.caption)
    case 'table':
      return [
        `| ${b.head.map(cell).join(' | ')} |`,
        `| ${b.head.map(() => '---').join(' | ')} |`,
        ...b.rows.map((r) => `| ${r.map(cell).join(' | ')} |`),
        b.caption ? `\n*${b.caption}*` : '',
      ].join('\n')
  }
}
const blocksMd = (bs: Block[]) => bs.map(blockMd).filter(Boolean).join('\n\n')

const refMd = (r: Reference) => {
  const who = r.author ?? r.org
  const title = r.url ? `[${r.title}](${r.url})` : `*${r.title}*`
  return [who, title, r.year].filter(Boolean).join('. ') + '.' + (r.note ? ` ${r.note}` : '')
}
const refList = (ids: string[]) =>
  ids
    .map((id) => refById(id) ?? (problems.push(`unknown reference ${id}`), undefined))
    .filter((r): r is Reference => !!r)
    .map((r) => `- ${refMd(r)}`)
    .join('\n')

function exerciseMd(e: Exercise): string {
  const s = safetyInfo[e.safety]
  const out = [`### ${e.title}`]
  const risky = !['home', 'virtual-only'].includes(e.safety)
  if (e.safety === 'virtual-only') out.push(quote(`[!CAUTION]\n**Virtual only.** ${s.text}${e.safetyNote ? `\n\n${e.safetyNote}` : ''}`))
  else if (risky || e.safetyNote) out.push(quote(`[!WARNING]\n**${s.label}.** ${s.text}${e.safetyNote ? `\n\n${e.safetyNote}` : ''}`))
  out.push(`Level ${e.level} (${levelNames[e.level]}) · ${s.icon} ${s.label} · about ${e.minutes} min`)
  if (e.materials?.length) out.push(`**Materials:** ${e.materials.join('; ')}`)
  out.push('**Steps**\n\n' + e.steps.map((x, i) => `${i + 1}. ${x}`).join('\n'))
  out.push('**You have it when**\n\n' + e.success.map((x) => `- ${x}`).join('\n'))
  const skill = e.skill && skillById(e.skill)
  if (skill) out.push(`Builds the skill: ${skill.name}.`)
  return out.join('\n\n')
}

function scenarioMd(sc: ScenarioQuestion): string {
  const best = sc.choices.findIndex((c) => c.id === sc.best)
  return [
    sc.setup,
    `**${sc.question}**`,
    sc.choices.map((c, i) => `${i + 1}. ${c.text}`).join('\n'),
    '<details>\n<summary>Best choice and debrief</summary>',
    `**Best: ${best + 1}.** ${sc.debrief}`,
    sc.choices.map((c, i) => `- **${i + 1}.** ${c.why}`).join('\n'),
    '</details>',
  ]
    .filter(Boolean)
    .join('\n\n')
}

function lessonMd(l: Loc): string {
  const x = l.lesson
  const prereqs = x.prerequisites.map((id) => locs.get(id)).filter((p): p is Loc => !!p).map(pageId)
  const sources = [...new Set([...x.references, ...x.furtherReading])]
    .map((id) => refById(id))
    .filter((r): r is Reference => !!r?.url)
    .map((r) => `  - title: ${JSON.stringify(r.title)}\n    url: ${r.url}`)
  const practice = x.exercises.reduce((a, e) => a + e.minutes, 0)
  const fm = [
    '---',
    `id: "${pageId(l)}"`,
    `module: ${l.stage}`,
    `minutes: ${x.minutes}`,
    `practice_minutes: ${practice}`,
    `prerequisites: [${prereqs.map((p) => `"${p}"`).join(', ')}]`,
    'objectives:',
    ...x.objectives.map((o) => `  - ${JSON.stringify(plain(o))}`),
    `level: ${x.level}`,
    'volatility: concept',
    ...(sources.length ? ['sources:', ...sources] : []),
    `last_verified: "${LAST_VERIFIED}"`,
    '---',
  ]
  const inlineSims = new Set(
    [...x.explanation, ...(x.science ?? []), ...x.examples].filter((b) => b.type === 'sim').map((b) => b.id),
  )
  const extraSims = (x.simulations ?? []).filter((id) => !inlineSims.has(id))
  const sections: [string, string][] = [
    ['Explanation', blocksMd(x.explanation)],
    ['Scientific and technical background', x.science ? blocksMd(x.science) : ''],
    ['Examples', blocksMd(x.examples)],
    ['Common mistakes', x.mistakes.map((m) => `- ${m}`).join('\n')],
    ['Practical exercises', x.exercises.map(exerciseMd).join('\n\n')],
    ['Interactive simulation', extraSims.map((id) => simMd(id)).join('\n\n')],
    ['Scenario question', scenarioMd(x.scenario)],
    ['Summary', x.summary.map((s) => `- ${s}`).join('\n')],
    ['Further reading', refList(x.furtherReading)],
    ['References', refList(x.references)],
  ]
  return [
    fm.join('\n'),
    `# ${pageId(l)} · ${x.title}`,
    x.whyItMatters,
    ...sections.filter(([, body]) => body.trim()).map(([h, body]) => `## ${h}\n\n${body}`),
  ].join('\n\n')
}

// ---------- quizzes ----------

const yamlText = (s: string, indent: string) =>
  `|-\n${s.trim().split('\n').map((l) => (l ? indent + l : '')).join('\n')}`

function quizYamlFor(qs: Question[], fileKey: string, up: string): string {
  let seed = [...fileKey].reduce((a, c) => a + c.charCodeAt(0), 0)
  const entries: string[] = []
  for (const q of qs) {
    if (q.kind !== 'single' || q.choices.length !== 4) {
      problems.push(`${q.id}: ${q.kind} question with ${'choices' in q ? q.choices.length : 0} choices (need single, 4)`)
      continue
    }
    const correct = q.choices.find((c) => c.id === q.answer)!
    const wrong = q.choices.filter((c) => c !== correct)
    const pos = seed++ % 4
    const options = [...wrong.slice(0, pos), correct, ...wrong.slice(pos)]
    const prompt = q.prompt + (q.diagram ? `\n\n${diagramMd(q.diagram, undefined, up)}` : '')
    const why = `${q.explanation}\n\n${correct.why}`.trim()
    entries.push(
      [
        `- id: ${q.id}`,
        `  question: ${yamlText(prompt, '    ')}`,
        '  options:',
        ...options.map((o) => `    - ${yamlText(o.text, '      ')}`),
        `  correct: ${pos}`,
        `  explanation: ${yamlText(q.explanation.trim() ? q.explanation : why, '    ')}`,
      ].join('\n'),
    )
  }
  return entries.join('\n\n')
}

// ---------- write ----------

for (const dir of ['lessons', 'assessments', 'assets/diagrams', 'references']) rmSync(join(ROOT, dir), { recursive: true, force: true })
for (const s of sims) rmSync(join(ROOT, 'simulations', s.id), { recursive: true, force: true })

// Alt text from each diagram's own aria-label.
for (const id of diagramIds) {
  const svg = renderToStaticMarkup(createElement(Diagram, { id }))
  diagramAlt.set(id, /aria-label="([^"]*)"/.exec(svg)?.[1]?.replace(/&#x27;/g, '’').replace(/&quot;/g, '"').replace(/&amp;/g, '&') ?? id)
}

const sidebar = [
  '- [Home](/)',
  '- [Glossary](glossary.md)',
  '- [Sources](references/sources.md)',
  '- [Where to check the law](references/law-portals.md)',
  '',
]
let lessonQuestions = 0
let moduleQuestions = 0
for (const st of stages) {
  const content = stageContents.find((s) => s.n === st.n)!
  const stageLocs = [...locs.values()].filter((l) => l.stage === st.n)
  sidebar.push(`- **Module ${st.n} — ${st.title}**`)
  for (const l of stageLocs) {
    const p = lessonPath(l)
    write(p, lessonMd(l))
    const qs = l.lesson.quiz.slice(0, LESSON_QUIZ_MAX)
    lessonQuestions += qs.length
    write(quizYaml(p), quizYamlFor(qs, p, fromLesson))
    sidebar.push(`  - [${pad(l.num)} · ${l.lesson.title}](${p})`)
  }
  const review = (st.n === 19 ? content.finalAssessment ?? [] : content.review).slice(0, MODULE_QUIZ_MAX)
  if (review.length) {
    const qp = quizPath(st.n)
    const title = st.n === 19 ? 'Final assessment quiz' : `Module ${st.n} quiz`
    write(
      qp,
      [
        `# ${title}`,
        st.n === 19
          ? `${review.length} questions across every stage of the course: the judgment calls the capstones practise. Pass mark 70%.`
          : `${review.length} interleaved questions across Stage ${st.n}, ${st.title}. Pass mark 70%.`,
        `Review the stage first:\n\n${stageLocs.map((l) => `- [${pageId(l)} · ${l.lesson.title}](../${lessonPath(l)})`).join('\n')}`,
      ].join('\n\n'),
    )
    moduleQuestions += review.length
    write(quizYaml(qp), quizYamlFor(review, qp, '../'))
    sidebar.push(`  - [${title}](${qp})`)
  }
}
write('_sidebar.md', sidebar.join('\n'))

// Diagrams: theme variables inlined, with their own panel background so they read in light and dark pages.
const LIGHT = '--bg:#f6f4ee;--panel:#ffffff;--panel-2:#efece3;--text:#1f2a24;--muted:#5c6a61;--line:#d9d4c7;--accent:#2f6b4f;--accent-2:#c2682b;--accent-soft:#e2efe7;--ok:#2e7d4f;--ok-soft:#e1f2e7;--bad:#b3372b;--bad-soft:#f8e3e0;--warn:#9a6a00;--warn-soft:#fbf0d4;--info-soft:#e5eef8;--info:#2c5d8f;--sky:#cfe3f2;--ground:#8b7d5a'
const DARK = '--bg:#141a17;--panel:#1c2420;--panel-2:#232d28;--text:#e6ebe7;--muted:#9aa8a0;--line:#34413a;--accent:#6fbf94;--accent-2:#e7925a;--accent-soft:#1f3a2d;--ok:#6fcf97;--ok-soft:#1c3527;--bad:#f08a7e;--bad-soft:#3b211e;--warn:#e8c15a;--warn-soft:#362d14;--info-soft:#1b2a3a;--info:#8cb8e6;--sky:#1f3345;--ground:#5a5140'
const STYLE = `<style>svg{${LIGHT};background:var(--panel);font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}@media (prefers-color-scheme:dark){svg{${DARK}}}text{fill:var(--text)}.muted-fill{fill:var(--muted)}</style>`
for (const id of usedDiagrams) {
  let svg = renderToStaticMarkup(createElement(Diagram, { id }))
  const vb = /viewBox="([\d.\s-]+)"/.exec(svg)?.[1].trim().split(/\s+/).map(Number)
  const size = vb && !/^<svg[^>]*\swidth=/.test(svg) ? ` width="${vb[2]}" height="${vb[3]}"` : ''
  svg = svg.replace(/^<svg/, `<svg xmlns="http://www.w3.org/2000/svg"${size}`).replace(/^(<svg[^>]*>)/, `$1${STYLE}`)
  write(`assets/diagrams/${id}.svg`, `<?xml version="1.0" encoding="UTF-8"?>\n${svg}`)
}

// Simulation pages: one per simulation, all sharing simulations/common/ (the built bundle).
for (const id of usedSims) {
  const def = simById(id)!
  write(
    `simulations/${id}/index.html`,
    `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${def.title}</title>
<link rel="stylesheet" href="../common/sim.css">
</head>
<body data-sim="${id}">
<div id="root"></div>
<script src="../common/sim.js"></script>
</body>
</html>`,
  )
}

// Reference pages.
write(
  'glossary.md',
  ['# Glossary', 'The concepts the course tags its questions with, in alphabetical order.', ...Object.entries(conceptLabel)
    .sort((a, b) => a[1].localeCompare(b[1]))
    .map(([, label]) => `- ${label}`)].join('\n\n').replace(/\n\n- /g, '\n- ').replace('order.\n- ', 'order.\n\n- '),
)
write(
  'references/sources.md',
  [
    '# Sources',
    'Every source the lessons cite, grouped by subject.',
    ...Object.entries(subjects).flatMap(([key, label]) => {
      const rs = references.filter((r) => r.subjects[0] === key)
      return rs.length ? [`## ${label}\n\n${rs.map((r) => `- ${refMd(r)}`).join('\n')}`] : []
    }),
  ].join('\n\n'),
)
const regions = [...new Set(lawPortals.map((p) => p.region))]
write(
  'references/law-portals.md',
  [
    '# Where to check the law',
    'Laws on fires, foraging, fishing, hunting, trapping, camping, protected species and protected land vary by country, region, land manager and season. Always check the agency that manages the specific piece of land, on the day.',
    ...regions.map(
      (r) =>
        `## ${r}\n\n` +
        lawPortals
          .filter((p) => p.region === r)
          .map((p) => `- **${p.topic}:** ${p.url ? `[${p.name}](${p.url})` : p.name}${p.note ? ` ${p.note}` : ''}`)
          .join('\n'),
    ),
  ].join('\n\n'),
)

console.log(
  `${locs.size} lessons, ${lessonQuestions} lesson questions, ${moduleQuestions} module questions, ` +
    `${usedDiagrams.size} diagrams, ${usedSims.size} simulations, ${problems.length} problems`,
)
for (const p of problems) console.log(`PROBLEM ${p}`)
process.exit(problems.length ? 1 : 0)
