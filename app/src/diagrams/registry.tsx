import type { ComponentType } from 'react'
import * as s1 from './stage1'

// Diagram registry: lessons and questions reference diagrams by id.
const diagrams: Record<string, ComponentType> = {
  'decision-loop': s1.DecisionLoop,
  'stage-graph': s1.StageGraph,
  'rule-of-threes': s1.RuleOfThrees,
  'risk-matrix': s1.RiskMatrix,
  'stress-curve': s1.StressCurve,
  'heat-loss': s1.HeatLoss,
  layering: s1.Layering,
  'kit-tiers': s1.KitTiers,
  'shelter-sites': s1.ShelterSites,
  'tarp-configs': s1.TarpConfigs,
  'fire-triangle': s1.FireTriangle,
  'fire-ladder': s1.FireLadder,
  'water-methods': s1.WaterMethods,
  'ground-to-air': s1.GroundToAir,
  'first-hour': s1.FirstHour,
}

export function Diagram({ id }: { id: string }) {
  const C = diagrams[id]
  return C ? <C /> : <div className="callout callout-info">Diagram “{id}” not found.</div>
}
