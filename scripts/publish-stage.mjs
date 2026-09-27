// Usage: node scripts/publish-stage.mjs <stage-number> — flips a stage's status to 'available' in curriculum.ts.
import { readFileSync, writeFileSync } from 'node:fs'
const n = process.argv[2]
const f = new URL('../app/src/content/curriculum.ts', import.meta.url)
let s = readFileSync(f, 'utf8')
const i = s.indexOf(`    n: ${n},\n`)
if (i < 0) throw new Error(`stage ${n} not found`)
const j = s.indexOf("status: 'planned'", i)
const next = s.indexOf('    n: ', i + 5)
if (j < 0 || (next > 0 && j > next)) throw new Error(`stage ${n} already available`)
s = s.slice(0, j) + "status: 'available'" + s.slice(j + "status: 'planned'".length)
writeFileSync(f, s)
console.log(`stage ${n} published`)
