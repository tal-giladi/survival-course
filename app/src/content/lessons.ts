import type { Lesson } from './types'
import { stages } from './curriculum'
import { stageContents } from './stageContents'

// Registry of fully written lessons, merged from every stage folder (./stages/stageN/index.ts).
// To publish a stage, fill its folder and set its status to 'available' in curriculum.ts.
export const lessons: Lesson[] = stageContents.flatMap((s) => s.lessons)

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
