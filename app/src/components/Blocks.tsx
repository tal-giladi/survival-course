import type { Block } from '../content/types'
import { Markdown } from './Markdown'
import { Diagram } from '../diagrams/registry'
import { SimHost } from '../sims/SimHost'

const toneIcon: Record<string, string> = { info: 'ℹ️', warning: '⚠️', danger: '⛔', tip: '💡', law: '⚖️' }

export function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.type) {
          case 'md':
            return <Markdown key={i} md={b.md} />
          case 'callout':
            return (
              <aside key={i} className={`callout callout-${b.tone}`}>
                <div className="callout-title">
                  {toneIcon[b.tone]} {b.title ?? (b.tone === 'law' ? 'Law varies by jurisdiction' : '')}
                </div>
                <Markdown md={b.md} />
              </aside>
            )
          case 'diagram':
            return (
              <figure key={i} className="figure">
                <Diagram id={b.id} />
                {b.caption && <figcaption>{b.caption}</figcaption>}
              </figure>
            )
          case 'sim':
            return <SimHost key={i} id={b.id} caption={b.caption} />
          case 'table':
            return (
              <div key={i} className="table-wrap">
                <table>
                  <thead>
                    <tr>{b.head.map((h) => <th key={h}><Markdown md={h} inline /></th>)}</tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, ri) => (
                      <tr key={ri}>{r.map((c, ci) => <td key={ci}><Markdown md={c} inline /></td>)}</tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && <div className="caption">{b.caption}</div>}
              </div>
            )
        }
      })}
    </>
  )
}
