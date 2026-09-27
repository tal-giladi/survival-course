// Generates docs/lesson-list.md and docs/prerequisite-graph.md from the app's curriculum data,
// so the course map has a single source of truth. Run: node scripts/gen-docs.ts
import { writeFileSync } from 'node:fs'
import { stages } from '../app/src/content/curriculum.ts'

const lvl = (l: string) => l[0].toUpperCase() + l.slice(1)
const title = new Map<string, string>()
for (const s of stages) for (const l of s.outline) title.set(l.id, l.title)

let list = '# Lesson list\n\n_Generated from `app/src/content/curriculum.ts` by `scripts/gen-docs.ts`. Do not edit by hand._\n\n'
let total = 0
for (const s of stages) {
  list += `## Stage ${s.n} — ${s.title} (${lvl(s.level)}) ${s.status === 'available' ? '✅ built' : '🗺️ planned'}\n\n${s.summary}\n\n`
  list += `Requires stages: ${s.requires.length ? s.requires.join(', ') : '—'} · Environments: ${s.environments.join(', ')} · Simulations: ${s.simulations.join(', ')}\n\n`
  list += '| ID | Lesson | Level | Prerequisites | Topics |\n|---|---|---|---|---|\n'
  for (const l of s.outline) {
    total++
    list += `| ${l.id} | ${l.title} | ${lvl(l.level)} | ${l.prerequisites.map((p) => `${p} ${title.get(p) ?? ''}`).join('; ') || '—'} | ${l.topics.join('; ')} |\n`
  }
  list += '\n'
}
list += `**Total: ${stages.length} stages, ${total} lessons/scenarios.**\n`
writeFileSync('docs/lesson-list.md', list)

let g = '# Prerequisite graph\n\n_Generated from `app/src/content/curriculum.ts`._\n\n## Stage level\n\n```mermaid\nflowchart LR\n'
for (const s of stages) g += `  S${s.n}["${s.n}. ${s.title}"]\n`
for (const s of stages) for (const r of s.requires) if (s.n !== 19 || [14, 15, 16, 17, 18].includes(r)) g += `  S${r} --> S${s.n}\n`
g += '```\n\n(Capstones require every stage; only the last few edges are drawn for readability.)\n\n## Cross-stage lesson dependencies\n\nEdges where a lesson depends on a lesson from a *different* stage — these are the threads that make the course cumulative.\n\n```mermaid\nflowchart LR\n'
const ids = new Set<string>()
let edges = ''
for (const s of stages)
  for (const l of s.outline)
    for (const p of l.prerequisites) {
      const ps = stages.find((x) => x.outline.some((o) => o.id === p))
      if (ps && ps.n !== s.n) {
        ids.add(p); ids.add(l.id)
        edges += `  ${p.replace(/-/g, '_')} --> ${l.id.replace(/-/g, '_')}\n`
      }
    }
for (const id of ids) g += `  ${id.replace(/-/g, '_')}["${id}: ${title.get(id)}"]\n`
g += edges + '```\n\n## Example thread (from the brief)\n\n```mermaid\nflowchart LR\n  a["s1-l7 Heat budget"] --> b["s8-l1 Thermoregulation"] --> c["s8-l2 Heat-loss mechanisms"] --> d["s1-l8 Clothing"] --> e["s5-l1 Shelter design"] --> f["s3-l7 Heating fires"] --> g["cap-3 Cold-weather capstone"]\n```\n\nWithin each stage, per-lesson prerequisites are listed in [lesson-list.md](lesson-list.md).\n'
writeFileSync('docs/prerequisite-graph.md', g)
console.log('lessons', total)
