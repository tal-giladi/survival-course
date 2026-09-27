import type { Lesson, StageContent } from '../../types'
import { l01 } from './l01-thinking'
import { l02 } from './l02-priorities'
import { l03 } from './l03-stop'
import { l04 } from './l04-risk'
import { l05 } from './l05-mindset'
import { l06 } from './l06-decisions'
import { l07 } from './l07-heat'
import { l08 } from './l08-clothing'
import { l09 } from './l09-kit'
import { l10 } from './l10-shelter'
import { l11 } from './l11-fire'
import { l12 } from './l12-water'
import { l13 } from './l13-signaling'
import { l14 } from './l14-first-hour'
import { stage1Review } from './review'

export const stage1Lessons: Lesson[] = [l01, l02, l03, l04, l05, l06, l07, l08, l09, l10, l11, l12, l13, l14]

export const stage1: StageContent = { n: 1, lessons: stage1Lessons, review: stage1Review }
