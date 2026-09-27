import type { SimDef } from '../types'
import { PatientAssessment } from './PatientAssessment'
import { EvacDecision } from './EvacDecision'

export const sims: SimDef[] = [
  {
    id: 'patient-assessment',
    title: 'Patient Assessment Simulator',
    stage: 9,
    description: 'Work mock patients in four environments: scene size-up, primary survey, interventions in order, vitals over time — then a scored debrief and a generated SOAP note.',
    concepts: ['patient-assessment', 'scene-safety', 'bleeding-control', 'vital-signs', 'soap-note'],
    component: PatientAssessment,
  },
  {
    id: 'evac-decision',
    title: 'Evacuation Decisions',
    stage: 9,
    description: 'Decide go/no-go, urgency and plan — walk out, carry, wait for rescue or request a helicopter — from injuries, trends, terrain, weather, daylight, group and comms.',
    concepts: ['evacuation', 'monitoring', 'stay-or-move'],
    component: EvacDecision,
  },
]
