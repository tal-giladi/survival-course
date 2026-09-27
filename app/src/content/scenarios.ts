import type { Scenario } from './types'

export const scenarios: Scenario[] = []
export const scenarioById = (id: string) => scenarios.find((s) => s.id === id)
