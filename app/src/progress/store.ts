import { useSyncExternalStore } from 'react'
import type { SkillState } from '../content/types'

// All learner progress lives here, persisted to localStorage under a versioned key.
// The store is a tiny external store so any component can subscribe without a context provider.

export interface QuestionRecord {
  box: number // Leitner box 1..5
  due: number // epoch ms
  seen: number
  correct: number
  last: boolean
}

export interface QuizRecord {
  best: number // 0..1
  last: number
  attempts: number
}

export interface ScenarioRecord {
  best: number // 0..100 decision quality
  outcomes: string[]
  runs: number
}

export interface SkillRecord {
  state: SkillState
  updated: number
  confirmedUnaided?: boolean
}

export interface Progress {
  version: 1
  lessons: Record<string, { completed: number }>
  lastLesson?: string
  exercises: Record<string, number> // id -> completed at
  quizzes: Record<string, QuizRecord> // lesson id -> record
  questions: Record<string, QuestionRecord>
  concepts: Record<string, { right: number; wrong: number }>
  sims: Record<string, { best: number; runs: number }>
  scenarios: Record<string, ScenarioRecord>
  scenarioAnswers: Record<string, string> // lesson scenario question id -> chosen option
  skills: Record<string, SkillRecord>
}

const KEY = 'survival-course-progress-v1'
const empty = (): Progress => ({
  version: 1,
  lessons: {},
  exercises: {},
  quizzes: {},
  questions: {},
  concepts: {},
  sims: {},
  scenarios: {},
  scenarioAnswers: {},
  skills: {},
})

function load(): Progress {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return empty()
    const parsed = JSON.parse(raw) as Progress
    return parsed.version === 1 ? { ...empty(), ...parsed } : empty()
  } catch {
    return empty()
  }
}

let state: Progress = load()
const listeners = new Set<() => void>()

function commit(next: Progress) {
  state = next
  try {
    localStorage.setItem(KEY, JSON.stringify(state))
  } catch {
    // storage unavailable (private mode) — progress lives for this session only
  }
  listeners.forEach((l) => l())
}

export function useProgress(): Progress {
  return useSyncExternalStore(
    (cb) => {
      listeners.add(cb)
      return () => listeners.delete(cb)
    },
    () => state,
  )
}

export const getProgress = () => state

const DAY = 86_400_000
export const BOX_DAYS = [0, 1, 3, 7, 16, 35]

export const actions = {
  visitLesson(id: string) {
    if (state.lastLesson !== id) commit({ ...state, lastLesson: id })
  },
  completeLesson(id: string, skillIds: string[]) {
    const skills = { ...state.skills }
    // Completing a lesson can at most mark a skill as "studied" — never practiced or competent.
    for (const s of skillIds) {
      if (!skills[s] || skills[s].state === 'not-learned') skills[s] = { state: 'studied', updated: Date.now() }
    }
    commit({ ...state, lessons: { ...state.lessons, [id]: { completed: Date.now() } }, skills })
  },
  uncompleteLesson(id: string) {
    const lessons = { ...state.lessons }
    delete lessons[id]
    commit({ ...state, lessons })
  },
  toggleExercise(id: string) {
    const exercises = { ...state.exercises }
    if (exercises[id]) delete exercises[id]
    else exercises[id] = Date.now()
    commit({ ...state, exercises })
  },
  recordAnswer(qid: string, concepts: string[], correct: boolean) {
    const prev = state.questions[qid] ?? { box: 1, due: 0, seen: 0, correct: 0, last: false }
    const box = correct ? Math.min(5, prev.seen === 0 ? 2 : prev.box + 1) : 1
    const q: QuestionRecord = {
      box,
      due: Date.now() + BOX_DAYS[box] * DAY,
      seen: prev.seen + 1,
      correct: prev.correct + (correct ? 1 : 0),
      last: correct,
    }
    const cs = { ...state.concepts }
    for (const c of concepts) {
      const r = cs[c] ?? { right: 0, wrong: 0 }
      cs[c] = correct ? { ...r, right: r.right + 1 } : { ...r, wrong: r.wrong + 1 }
    }
    commit({ ...state, questions: { ...state.questions, [qid]: q }, concepts: cs })
  },
  recordQuiz(lessonId: string, score: number) {
    const prev = state.quizzes[lessonId]
    const rec: QuizRecord = {
      best: Math.max(prev?.best ?? 0, score),
      last: score,
      attempts: (prev?.attempts ?? 0) + 1,
    }
    commit({ ...state, quizzes: { ...state.quizzes, [lessonId]: rec } })
  },
  recordSim(id: string, score: number) {
    const prev = state.sims[id]
    commit({
      ...state,
      sims: { ...state.sims, [id]: { best: Math.max(prev?.best ?? 0, Math.round(score)), runs: (prev?.runs ?? 0) + 1 } },
    })
  },
  recordScenario(id: string, quality: number, outcome: string) {
    const prev = state.scenarios[id]
    commit({
      ...state,
      scenarios: {
        ...state.scenarios,
        [id]: {
          best: Math.max(prev?.best ?? 0, Math.round(quality)),
          outcomes: [...(prev?.outcomes ?? []), outcome].slice(-10),
          runs: (prev?.runs ?? 0) + 1,
        },
      },
    })
  },
  answerScenarioQuestion(id: string, choice: string, concepts: string[], correct: boolean) {
    commit({ ...state, scenarioAnswers: { ...state.scenarioAnswers, [id]: choice } })
    actions.recordAnswer(id, concepts, correct)
  },
  resetScenarioQuestion(id: string) {
    const sa = { ...state.scenarioAnswers }
    delete sa[id]
    commit({ ...state, scenarioAnswers: sa })
  },
  setSkill(id: string, s: SkillState, confirmedUnaided?: boolean) {
    commit({ ...state, skills: { ...state.skills, [id]: { state: s, updated: Date.now(), confirmedUnaided } } })
  },
  exportJson() {
    return JSON.stringify(state, null, 2)
  },
  importJson(json: string) {
    const parsed = JSON.parse(json) as Progress
    if (parsed.version !== 1) throw new Error('Unsupported progress file version')
    commit({ ...empty(), ...parsed })
  },
  reset() {
    commit(empty())
  },
}
