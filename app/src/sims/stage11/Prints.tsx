import type { Family } from './trackingModel'

// Schematic footprints, drawn pointing to the top of the screen (toes up) and centred on (0, 0).
// Shared by the Tracking Scene simulation and the Stage 11 diagrams. Colors come from CSS variables.

export interface PrintProps {
  family: Family
  foot?: 'front' | 'hind'
  side?: 'L' | 'R'
  /** Approximate print length in SVG units. */
  size: number
  x?: number
  y?: number
  rot?: number
  fill?: string
  opacity?: number
}

function Shape({ family, foot = 'hind', side = 'L', size: s }: Pick<PrintProps, 'family' | 'foot' | 'side' | 'size'>) {
  switch (family) {
    case 'canid': {
      const toes: [number, number][] = [[-0.27, -0.12], [0.27, -0.12], [-0.11, -0.36], [0.11, -0.36]]
      return (
        <g>
          {toes.map(([x, y], i) => (
            <g key={i}>
              <ellipse cx={x * s} cy={y * s} rx={0.1 * s} ry={0.13 * s} />
              <ellipse cx={x * s * 1.05} cy={(y - 0.19) * s} rx={0.03 * s} ry={0.04 * s} />
            </g>
          ))}
          <path d={`M${-0.2 * s},${0.3 * s} Q0,${0.02 * s} ${0.2 * s},${0.3 * s} Q${0.12 * s},${0.44 * s} 0,${0.4 * s} Q${-0.12 * s},${0.44 * s} ${-0.2 * s},${0.3 * s} Z`} />
        </g>
      )
    }
    case 'felid': {
      const lead = side === 'L' ? 1 : -1
      const toes: [number, number][] = [[-0.34 * lead, -0.04], [-0.13 * lead, -0.28], [0.13 * lead, -0.4], [0.35 * lead, -0.12]]
      return (
        <g>
          {toes.map(([x, y], i) => <ellipse key={i} cx={x * s} cy={y * s} rx={0.1 * s} ry={0.12 * s} />)}
          <path d={`M${-0.27 * s},${0.28 * s} Q${-0.22 * s},${0.06 * s} 0,${0.06 * s} Q${0.22 * s},${0.06 * s} ${0.27 * s},${0.28 * s} Q${0.24 * s},${0.44 * s} ${0.13 * s},${0.38 * s} Q${0.06 * s},${0.46 * s} 0,${0.38 * s} Q${-0.06 * s},${0.46 * s} ${-0.13 * s},${0.38 * s} Q${-0.24 * s},${0.44 * s} ${-0.27 * s},${0.28 * s} Z`} />
        </g>
      )
    }
    case 'mustelid': {
      const toes: [number, number][] = [[-0.36, -0.08], [-0.2, -0.3], [0, -0.38], [0.2, -0.3], [0.36, -0.08]]
      return (
        <g>
          {toes.map(([x, y], i) => <ellipse key={i} cx={x * s} cy={y * s} rx={0.07 * s} ry={0.09 * s} />)}
          <path d={`M${-0.3 * s},${0.14 * s} Q0,${-0.12 * s} ${0.3 * s},${0.14 * s} L${0.2 * s},${0.24 * s} Q0,${0.06 * s} ${-0.2 * s},${0.24 * s} Z`} />
        </g>
      )
    }
    case 'ungulate':
      return (
        <g>
          <path d={`M${-0.04 * s},${-0.5 * s} Q${-0.34 * s},${-0.12 * s} ${-0.24 * s},${0.42 * s} L${-0.04 * s},${0.42 * s} Z`} />
          <path d={`M${0.04 * s},${-0.5 * s} Q${0.34 * s},${-0.12 * s} ${0.24 * s},${0.42 * s} L${0.04 * s},${0.42 * s} Z`} />
        </g>
      )
    case 'lagomorph':
      return foot === 'hind'
        ? <ellipse cx="0" cy="0" rx={0.2 * s} ry={0.5 * s} strokeDasharray="2 2" />
        : <ellipse cx="0" cy="0" rx={0.13 * s} ry={0.2 * s} strokeDasharray="2 2" />
    case 'bird': {
      const w = 0.07 * s
      return (
        <g strokeLinecap="round">
          <path d={`M0,${0.25 * s} L${-0.36 * s},${-0.3 * s} Q0,${-0.18 * s} ${0.36 * s},${-0.3 * s} Z`} opacity="0.35" />
          <path d={`M0,${0.25 * s} L${-0.36 * s},${-0.3 * s} M0,${0.25 * s} L0,${-0.5 * s} M0,${0.25 * s} L${0.36 * s},${-0.3 * s} M0,${0.25 * s} L0,${0.36 * s}`} fill="none" strokeWidth={w} />
        </g>
      )
    }
    case 'human': {
      const m = side === 'L' ? -1 : 1
      const bars = [-0.36, -0.26, -0.16, -0.06]
      return (
        <g>
          <path d={`M${0.05 * m * s},${-0.5 * s} Q${0.2 * m * s},${-0.48 * s} ${0.19 * m * s},${-0.25 * s} Q${0.17 * m * s},${-0.02 * s} ${0.11 * m * s},${0.06 * s} L${-0.11 * m * s},${0.06 * s} Q${-0.16 * m * s},${-0.15 * s} ${-0.14 * m * s},${-0.35 * s} Q${-0.1 * m * s},${-0.5 * s} ${0.05 * m * s},${-0.5 * s} Z`} />
          <rect x={-0.13 * s} y={0.14 * s} width={0.26 * s} height={0.34 * s} rx={0.1 * s} />
          {bars.map((b) => <line key={b} x1={-0.1 * s} y1={b * s} x2={0.14 * s} y2={b * s} strokeWidth={0.025 * s} opacity="0.6" style={{ stroke: 'var(--panel)' }} />)}
        </g>
      )
    }
    case 'bear': {
      const toes: [number, number][] = [[-0.34, -0.2], [-0.18, -0.32], [0, -0.36], [0.18, -0.32], [0.34, -0.2]]
      return (
        <g>
          {toes.map(([x, y], i) => <ellipse key={i} cx={x * s} cy={y * s} rx={0.08 * s} ry={0.09 * s} />)}
          {foot === 'hind'
            ? <path d={`M${-0.36 * s},${-0.08 * s} Q0,${-0.18 * s} ${0.36 * s},${-0.08 * s} L${0.24 * s},${0.46 * s} Q0,${0.52 * s} ${-0.2 * s},${0.46 * s} Z`} />
            : <path d={`M${-0.4 * s},${-0.06 * s} Q0,${-0.2 * s} ${0.4 * s},${-0.06 * s} Q${0.3 * s},${0.14 * s} 0,${0.16 * s} Q${-0.3 * s},${0.14 * s} ${-0.4 * s},${-0.06 * s} Z`} />}
        </g>
      )
    }
  }
}

/** One footprint at (x, y) rotated by rot degrees. */
export function Print({ family, foot, side, size, x = 0, y = 0, rot = 0, fill = 'var(--text)', opacity = 0.55 }: PrintProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rot})`} fill={fill} stroke={fill} strokeWidth={family === 'lagomorph' ? 1.4 : 0} opacity={opacity}>
      <Shape family={family} foot={foot} side={side} size={size} />
    </g>
  )
}
