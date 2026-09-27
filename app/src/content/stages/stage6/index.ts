import type { Lesson, StageContent } from '../../types'
import { l01 } from './l01-energy'
import { l02 } from './l02-food-management'
import { l03 } from './l03-food-safety'
import { l04 } from './l04-plant-id'
import { l05 } from './l05-fungi'
import { l06 } from './l06-insects'
import { l07 } from './l07-fishing'
import { l08 } from './l08-trapping-hunting'
import { stage6Review } from './review'
import { stage6Concepts, stage6References, stage6Skills } from './meta'

export const stage6Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08]

export const stage6: StageContent = {
  n: 6,
  lessons: stage6Lessons,
  review: stage6Review,
  references: stage6References,
  concepts: stage6Concepts,
  skills: stage6Skills,
}
