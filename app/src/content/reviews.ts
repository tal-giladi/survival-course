import type { Question } from './types'
import { stageContents } from './stageContents'

// Interleaved end-of-stage reviews, keyed by stage number.
export const stageReviews: Record<number, Question[]> = Object.fromEntries(stageContents.filter((s) => s.review.length).map((s) => [s.n, s.review]))

export const finalAssessment: Question[] = stageContents.flatMap((s) => s.finalAssessment ?? [])
