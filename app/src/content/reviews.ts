import type { Question } from './types'
import { stage1Review } from './stages/stage1/review'

// Interleaved end-of-stage reviews, keyed by stage number.
export const stageReviews: Record<number, Question[]> = {
  1: stage1Review,
}
