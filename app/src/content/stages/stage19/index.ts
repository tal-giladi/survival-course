import type { StageContent } from '../../types'
import { capLessonsA, capScenariosA } from './capstonesA'
import { capLessonsB, capScenariosB } from './capstonesB'
import { finalLesson, finalQuestions } from './final'

export const stage19: StageContent = {
  n: 19,
  lessons: [...capLessonsA, ...capLessonsB, ...finalLesson],
  review: [],
  scenarios: [...capScenariosA, ...capScenariosB],
  finalAssessment: finalQuestions,
}
