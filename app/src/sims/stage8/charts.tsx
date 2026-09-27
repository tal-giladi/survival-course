// Small SVG chart helpers for the Stage 8 simulations. Colors come from CSS variables (theme-aware).

export interface Series {
  label: string
  color: string
  values: number[]
  dashed?: boolean
}

export interface HLine {
  y: number
  label: string
  color: string
}

interface LineChartProps {
  x: number[]
  series: Series[]
  yMin: number
  yMax: number
  yLabel: string
  xLabel?: string
  lines?: HLine[]
  /** Optional shaded band (e.g. uncertainty) drawn under the series. */
  band?: { lo: number[]; hi: number[]; color: string }
  height?: number
  ariaLabel: string
}

const W = 640
const PAD = { l: 46, r: 12, t: 12, b: 30 }

function ticks(min: number, max: number, n = 5) {
  const span = max - min
  const raw = span / n
  const mag = Math.pow(10, Math.floor(Math.log10(raw)))
  const step = [1, 2, 2.5, 5, 10].map((m) => m * mag).find((s) => span / s <= n + 0.5) ?? raw
  const out: number[] = []
  for (let v = Math.ceil(min / step) * step; v <= max + 1e-9; v += step) out.push(Math.round(v * 1000) / 1000)
  return out
}

export function LineChart({ x, series, yMin, yMax, yLabel, xLabel = 'hours', lines = [], band, height = 220, ariaLabel }: LineChartProps) {
  const H = height
  const x0 = x[0] ?? 0
  const x1 = x[x.length - 1] ?? 1
  const sx = (v: number) => PAD.l + ((v - x0) / Math.max(1e-9, x1 - x0)) * (W - PAD.l - PAD.r)
  const sy = (v: number) => PAD.t + (1 - (Math.max(yMin, Math.min(yMax, v)) - yMin) / (yMax - yMin)) * (H - PAD.t - PAD.b)
  const path = (vals: number[]) => vals.map((v, i) => `${i ? 'L' : 'M'}${sx(x[i]).toFixed(1)},${sy(v).toFixed(1)}`).join(' ')
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaLabel}>
      {ticks(yMin, yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={PAD.l} x2={W - PAD.r} y1={sy(t)} y2={sy(t)} stroke="var(--line)" strokeWidth="0.6" />
          <text x={PAD.l - 5} y={sy(t) + 4} fontSize="10" textAnchor="end" className="muted-fill">{t}</text>
        </g>
      ))}
      {ticks(x0, x1, 6).map((t) => (
        <text key={`x${t}`} x={sx(t)} y={H - PAD.b + 14} fontSize="10" textAnchor="middle" className="muted-fill">{t}</text>
      ))}
      <text x={W - PAD.r} y={H - 4} fontSize="10" textAnchor="end" className="muted-fill">{xLabel}</text>
      <text x={12} y={PAD.t + 8} fontSize="10" className="muted-fill">{yLabel}</text>
      {band && (
        <path
          d={`${path(band.hi)} ${band.lo.map((_, i) => `L${sx(x[band.lo.length - 1 - i]).toFixed(1)},${sy(band.lo[band.lo.length - 1 - i]).toFixed(1)}`).join(' ')} Z`}
          fill={band.color}
          opacity="0.18"
        />
      )}
      {lines.map((l) => (
        <g key={l.label}>
          <line x1={PAD.l} x2={W - PAD.r} y1={sy(l.y)} y2={sy(l.y)} stroke={l.color} strokeDasharray="5 4" strokeWidth="1.2" />
          <text x={W - PAD.r - 4} y={sy(l.y) - 3} fontSize="10" textAnchor="end" style={{ fill: l.color }}>{l.label}</text>
        </g>
      ))}
      {series.map((s) => (
        <path key={s.label} d={path(s.values)} fill="none" stroke={s.color} strokeWidth="2.2" strokeDasharray={s.dashed ? '6 4' : undefined} />
      ))}
      <line x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={H - PAD.b} stroke="var(--muted)" />
      <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} stroke="var(--muted)" />
    </svg>
  )
}

export function StackedArea({ x, series, yMax, yLabel, height = 220, ariaLabel, overlay }: { x: number[]; series: Series[]; yMax: number; yLabel: string; height?: number; ariaLabel: string; overlay?: Series }) {
  const H = height
  const x0 = x[0] ?? 0
  const x1 = x[x.length - 1] ?? 1
  const sx = (v: number) => PAD.l + ((v - x0) / Math.max(1e-9, x1 - x0)) * (W - PAD.l - PAD.r)
  const sy = (v: number) => PAD.t + (1 - Math.max(0, Math.min(yMax, v)) / yMax) * (H - PAD.t - PAD.b)
  const cum: number[][] = []
  series.forEach((s, k) => cum.push(s.values.map((v, i) => Math.max(0, v) + (k ? cum[k - 1][i] : 0))))
  return (
    <svg className="diagram" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={ariaLabel}>
      {ticks(0, yMax).map((t) => (
        <g key={`y${t}`}>
          <line x1={PAD.l} x2={W - PAD.r} y1={sy(t)} y2={sy(t)} stroke="var(--line)" strokeWidth="0.6" />
          <text x={PAD.l - 5} y={sy(t) + 4} fontSize="10" textAnchor="end" className="muted-fill">{t}</text>
        </g>
      ))}
      {ticks(x0, x1, 6).map((t) => (
        <text key={`x${t}`} x={sx(t)} y={H - PAD.b + 14} fontSize="10" textAnchor="middle" className="muted-fill">{t}</text>
      ))}
      <text x={W - PAD.r} y={H - 4} fontSize="10" textAnchor="end" className="muted-fill">hours</text>
      <text x={12} y={PAD.t + 8} fontSize="10" className="muted-fill">{yLabel}</text>
      {series.map((s, k) => {
        const top = cum[k]
        const bottom = k ? cum[k - 1] : top.map(() => 0)
        const d = `${top.map((v, i) => `${i ? 'L' : 'M'}${sx(x[i]).toFixed(1)},${sy(v).toFixed(1)}`).join(' ')} ${bottom
          .map((_, j) => {
            const i = bottom.length - 1 - j
            return `L${sx(x[i]).toFixed(1)},${sy(bottom[i]).toFixed(1)}`
          })
          .join(' ')} Z`
        return <path key={s.label} d={d} fill={s.color} opacity="0.75" />
      })}
      {overlay && <path d={overlay.values.map((v, i) => `${i ? 'L' : 'M'}${sx(x[i]).toFixed(1)},${sy(v).toFixed(1)}`).join(' ')} fill="none" stroke={overlay.color} strokeWidth="2.4" strokeDasharray="6 4" />}
      <line x1={PAD.l} x2={PAD.l} y1={PAD.t} y2={H - PAD.b} stroke="var(--muted)" />
      <line x1={PAD.l} x2={W - PAD.r} y1={H - PAD.b} y2={H - PAD.b} stroke="var(--muted)" />
    </svg>
  )
}

export function Legend({ items }: { items: { label: string; color: string }[] }) {
  return (
    <div className="legend">
      {items.map((l) => (
        <span key={l.label} style={{ ['--c' as string]: l.color }}>{l.label}</span>
      ))}
    </div>
  )
}
