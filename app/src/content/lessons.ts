import type { Lesson } from './types'
import { stages } from './curriculum'
import { stage1Lessons } from './stages/stage1'

// Registry of fully written lessons. To add a stage: write ./stages/stageN/index.ts exporting an
// array of lessons, spread it in here, and set that stage's status to 'available' in curriculum.ts.
export const lessons: Lesson[] = [...stage1Lessons]

const byId = new Map(lessons.map((l) => [l.id, l]))

export const lessonById = (id: string) => byId.get(id)

/** Title for any lesson id, written or merely outlined. */
export function lessonTitle(id: string): string {
  const full = byId.get(id)
  if (full) return full.title
  for (const s of stages) {
    const o = s.outline.find((x) => x.id === id)
    if (o) return o.title
  }
  return id
}

/** Ordered list of written lesson ids across the whole course. */
export const lessonOrder: string[] = stages.flatMap((s) => s.outline.map((o) => o.id)).filter((id) => byId.has(id))

export function neighbours(id: string) {
  const i = lessonOrder.indexOf(id)
  return { prev: i > 0 ? lessonOrder[i - 1] : undefined, next: i >= 0 && i < lessonOrder.length - 1 ? lessonOrder[i + 1] : undefined }
}

export const lessonsForStage = (n: number) => lessons.filter((l) => l.stage === n).sort((a, b) => a.order - b.order)
