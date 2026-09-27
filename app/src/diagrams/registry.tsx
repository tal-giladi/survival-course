import type { ComponentType } from 'react'
import * as s1 from './stage1'
import { diagrams as d2 } from './stage2'
import { diagrams as d3 } from './stage3'
import { diagrams as d4 } from './stage4'
import { diagrams as d5 } from './stage5'
import { diagrams as d6 } from './stage6'
import { diagrams as d7 } from './stage7'
import { diagrams as d8 } from './stage8'
import { diagrams as d9 } from './stage9'
import { diagrams as d10 } from './stage10'
import { diagrams as d11 } from './stage11'
import { diagrams as d12 } from './stage12'
import { diagrams as d13 } from './stage13'
import { diagrams as d14 } from './stage14'
import { diagrams as d15 } from './stage15'
import { diagrams as d16 } from './stage16'
import { diagrams as d17 } from './stage17'
import { diagrams as d18 } from './stage18'
import { diagrams as d19 } from './stage19'


// Diagram registry: lessons and questions reference diagrams by id.
const stage1Diagrams: Record<string, ComponentType> = {
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

// Later stages register diagrams in ./stageN.tsx.
const diagrams: Record<string, ComponentType> = { ...stage1Diagrams, ...d2, ...d3, ...d4, ...d5, ...d6, ...d7, ...d8, ...d9, ...d10, ...d11, ...d12, ...d13, ...d14, ...d15, ...d16, ...d17, ...d18, ...d19 }

export const diagramIds = Object.keys(diagrams)

export function Diagram({ id }: { id: string }) {
  const C = diagrams[id]
  return C ? <C /> : <div className="callout callout-info">Diagram “{id}” not found.</div>
}
