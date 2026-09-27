import type { ComponentType } from 'react'

export interface SimProps {
  onScore: (score: number) => void
}

export interface SimDef {
  id: string
  title: string
  stage: number
  description: string
  concepts: string[]
  component: ComponentType<SimProps>
}
