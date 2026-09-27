import type { Level, SkillState } from './types'

export const levelLabel: Record<Level, string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
  expert: 'Expert',
}

export const skillStateLabel: Record<SkillState, string> = {
  'not-learned': 'Not learned',
  studied: 'Studied',
  practiced: 'Practiced',
  competent: 'Competent',
  'needs-practice': 'Needs more practice',
}

/** Human-readable names for concept tags used by quizzes and weak-area detection. */
export const conceptLabel: Record<string, string> = {
  'decision-loop': 'The decision loop',
  'twelve-questions': 'The 12 questions',
  priorities: 'Survival priorities',
  'rule-of-threes': 'Rule of threes and its limits',
  stop: 'STOP / situation assessment',
  'immediate-danger': 'Immediate danger',
  inventory: 'Resource inventory',
  daylight: 'Time and daylight budgeting',
  risk: 'Risk = likelihood × consequence',
  'human-factors': 'Human factors and heuristic traps',
  'trip-plan': 'Trip plans and turnaround times',
  stress: 'Acute stress response',
  freezing: 'Freezing and behavioral response',
  'stress-control': 'Stress-control techniques',
  decisions: 'Decisions under uncertainty',
  reversibility: 'Reversible vs irreversible actions',
  'stay-or-move': 'Stay or move',
  'heat-balance': 'Heat balance',
  'heat-loss': 'Heat-loss mechanisms',
  'wet-wind': 'Wet + wind danger',
  clothing: 'Clothing systems',
  insulation: 'Insulation and moisture',
  kit: 'Survival kit design',
  redundancy: 'Redundancy of critical functions',
  'site-selection': 'Shelter site selection',
  'ground-insulation': 'Ground insulation',
  'shelter-types': 'Basic shelter types',
  'fire-triangle': 'Fire triangle',
  'fire-structure': 'Tinder → kindling → fuel',
  'fire-safety': 'Fire safety and law',
  'water-needs': 'Water requirements',
  'water-treatment': 'Water treatment methods',
  dehydration: 'Dehydration',
  signaling: 'Signaling methods',
  'phone-use': 'Phone and emergency numbers',
  visibility: 'Being visible to searchers',
  integration: 'Integrated decision making',
}
