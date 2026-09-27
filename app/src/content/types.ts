// Content schema for the course. Content files only import from here;
// application logic never lives in content files.

export type Level = 'beginner' | 'intermediate' | 'advanced' | 'expert'

/** Safety classification used for every practical exercise. */
export type SafetyClass =
  | 'home' // safe to do at home / desk
  | 'outdoor' // safe outdoors with ordinary care, ideally with a partner
  | 'supervised' // outdoors, requires a competent supervisor
  | 'formal-training' // requires a certified course / instructor
  | 'special-equipment' // requires specialized gear and training
  | 'virtual-only' // only simulate; do not attempt physically

/** Bibliographic reference. Lessons cite by id; the references page lists all. */
export interface Reference {
  id: string
  title: string
  author?: string
  org?: string
  year?: string
  url?: string
  kind: 'book' | 'guideline' | 'government' | 'paper' | 'organization' | 'training' | 'video' | 'tool' | 'regulation'
  subjects: string[]
  note?: string
}

/** Rich content blocks inside a lesson section. `md` supports GFM + $math$. */
export type Block =
  | { type: 'md'; md: string }
  | { type: 'callout'; tone: 'info' | 'warning' | 'danger' | 'tip' | 'law'; title?: string; md: string }
  | { type: 'diagram'; id: string; caption?: string }
  | { type: 'sim'; id: string; caption?: string }
  | { type: 'table'; head: string[]; rows: string[][]; caption?: string }

export interface Choice {
  id: string
  text: string
  /** Shown after answering, for every option. */
  why: string
}

interface QuestionBase {
  id: string
  prompt: string
  /** Optional diagram/image shown with the prompt (diagram registry id). */
  diagram?: string
  /** Concept tags feed spaced review and weak-area detection. */
  concepts: string[]
  /** Overall explanation shown after answering. */
  explanation: string
}

export type Question =
  | (QuestionBase & { kind: 'single'; choices: Choice[]; answer: string })
  | (QuestionBase & { kind: 'multi'; choices: Choice[]; answer: string[] })
  | (QuestionBase & { kind: 'truefalse'; answer: boolean })
  | (QuestionBase & { kind: 'order'; items: { id: string; text: string }[]; answer: string[] })
  | (QuestionBase & { kind: 'numeric'; unit: string; answer: number; tolerance: number })

export interface Exercise {
  id: string
  title: string
  level: 1 | 2 | 3 | 4
  safety: SafetyClass
  minutes: number
  materials?: string[]
  steps: string[]
  success: string[]
  /** Real-world skill this exercise builds toward (skills registry id). */
  skill?: string
  safetyNote?: string
}

/** Single decision question with debrief shown after answering. */
export interface ScenarioQuestion {
  id: string
  setup: string
  question: string
  choices: Choice[]
  best: string
  debrief: string
  concepts: string[]
}

export interface Lesson {
  id: string
  stage: number
  order: number
  title: string
  level: Level
  minutes: number
  /** Lesson ids that should be studied first. */
  prerequisites: string[]
  concepts: string[]
  objectives: string[]
  explanation: Block[]
  whyItMatters: string
  science?: Block[]
  examples: Block[]
  mistakes: string[]
  exercises: Exercise[]
  simulations?: string[]
  quiz: Question[]
  scenario: ScenarioQuestion
  summary: string[]
  furtherReading: string[] // reference ids
  references: string[] // reference ids
}

/** Lightweight outline used for stages whose full content is not written yet. */
export interface LessonOutline {
  id: string
  title: string
  level: Level
  prerequisites: string[]
  topics: string[]
}

export interface Stage {
  n: number
  slug: string
  title: string
  level: Level
  summary: string
  /** Stage numbers that must precede this one. */
  requires: number[]
  status: 'available' | 'planned'
  outline: LessonOutline[]
  simulations: string[]
  environments: string[]
}

export type SkillState = 'not-learned' | 'studied' | 'practiced' | 'competent' | 'needs-practice'

export interface Skill {
  id: string
  name: string
  stage: number
  /** Whether this is a physical skill that only real practice can confirm. */
  physical: boolean
  safety: SafetyClass
  description: string
}

// ---------- Scenario engine ----------

export type ScenarioVar =
  | 'minutes' // elapsed minutes since scenario start
  | 'water' // ml carried
  | 'energy' // 0-100 reserve
  | 'warmth' // 0-100 thermal status (100 = comfortable, <30 = hypothermia risk)
  | 'morale' // 0-100
  | 'battery' // phone %
  | 'injury' // 0-100 severity
  | 'rescue' // 0-100 probability of being found soon
  | 'lost' // 0-100 how far off-track / disoriented

export type ScenarioState = Record<ScenarioVar, number> & { flags: string[] }

export interface ScenarioEffect {
  set?: Partial<Record<ScenarioVar, number>>
  add?: Partial<Record<ScenarioVar, number>>
  flags?: string[]
  clearFlags?: string[]
}

export interface ScenarioOption {
  id: string
  text: string
  effect: ScenarioEffect
  next: string
  /** Scored 0-2: 0 poor, 1 acceptable, 2 good. Revealed only in the debrief. */
  quality: 0 | 1 | 2
  feedback: string
  requiresFlag?: string
  hiddenIfFlag?: string
}

export interface ScenarioNode {
  id: string
  title: string
  text: string
  options: ScenarioOption[]
  /** Terminal node: outcome summary. */
  end?: { outcome: 'rescued' | 'self-rescued' | 'survived' | 'critical'; summary: string }
}

export interface Scenario {
  id: string
  title: string
  stage: number
  environment: string
  intro: string
  start: string
  startClock: string // 'HH:MM'
  initial: ScenarioState
  nodes: ScenarioNode[]
  concepts: string[]
}

/** Everything one stage contributes. Each stage folder exports one of these; registries merge them. */
export interface StageContent {
  n: number
  lessons: Lesson[]
  review: Question[]
  references?: Reference[]
  concepts?: Record<string, string>
  skills?: Skill[]
  scenarios?: Scenario[]
  /** Final-assessment questions (capstone stage only). */
  finalAssessment?: Question[]
}
