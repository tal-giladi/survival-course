import type { Question } from '../content/types'
import { lessons } from '../content/lessons'
import { stages } from '../content/curriculum'
import { skills } from '../content/skills'
import type { Progress } from './store'

// Derived views over progress: mastery, weak areas, review queue, completion.

export const allQuestions: { q: Question; lessonId: string }[] = lessons.flatMap((l) => l.quiz.map((q) => ({ q, lessonId: l.id })))
const qIndex = new Map(allQuestions.map((x) => [x.q.id, x]))

export function dueQuestions(p: Progress, now = Date.now()) {
  return Object.entries(p.questions)
    .filter(([id, r]) => r.due <= now && qIndex.has(id))
    .sort((a, b) => a[1].box - b[1].box || a[1].due - b[1].due)
    .map(([id]) => qIndex.get(id)!)
}

/** Questions from completed lessons never answered yet — used to top up review sessions. */
export function unseenFromCompleted(p: Progress) {
  return allQuestions.filter((x) => p.lessons[x.lessonId] && !p.questions[x.q.id])
}

export function conceptMastery(p: Progress) {
  return Object.entries(p.concepts)
    .map(([concept, r]) => ({ concept, right: r.right, wrong: r.wrong, total: r.right + r.wrong, accuracy: r.right / Math.max(1, r.right + r.wrong) }))
    .sort((a, b) => a.accuracy - b.accuracy)
}

export function weakConcepts(p: Progress) {
  return conceptMastery(p).filter((c) => c.total >= 2 && c.accuracy < 0.7)
}

export function courseCompletion(p: Progress) {
  const total = stages.reduce((a, s) => a + s.outline.length, 0)
  const written = lessons.length
  const done = lessons.filter((l) => p.lessons[l.id]).length
  return { total, written, done }
}

export function stageCompletion(p: Progress, n: number) {
  const ls = lessons.filter((l) => l.stage === n)
  return { total: ls.length, done: ls.filter((l) => p.lessons[l.id]).length }
}

export function exerciseCompletion(p: Progress) {
  const all = lessons.flatMap((l) => l.exercises)
  return { total: all.length, done: all.filter((e) => p.exercises[e.id]).length }
}

export function skillSummary(p: Progress) {
  const counts = { 'not-learned': 0, studied: 0, practiced: 0, competent: 0, 'needs-practice': 0 }
  const SIX_MONTHS = 182 * 86_400_000
  const stale: string[] = []
  for (const s of skills) {
    const r = p.skills[s.id]
    counts[r?.state ?? 'not-learned']++
    if (r?.state === 'competent' && Date.now() - r.updated > SIX_MONTHS) stale.push(s.id)
  }
  return { counts, stale }
}

export function quizAverage(p: Progress) {
  const vals = Object.values(p.quizzes)
  return vals.length ? vals.reduce((a, q) => a + q.best, 0) / vals.length : null
}

/** First written lesson that is not complete, in course order. */
export function nextLesson(p: Progress) {
  return lessons.find((l) => !p.lessons[l.id])
}
