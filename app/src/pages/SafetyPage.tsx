import { useRef, useState } from 'react'
import { safetyInfo } from '../components/ExerciseCard'
import type { SafetyClass } from '../content/types'
import { actions } from '../progress/store'

export function SafetyPage() {
  const file = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState('')

  const download = () => {
    const blob = new Blob([actions.exportJson()], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `survival-course-progress-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }
  const upload = async (f: File) => {
    try {
      actions.importJson(await f.text())
      setMsg('Progress imported.')
    } catch (e) {
      setMsg(`Import failed: ${(e as Error).message}`)
    }
  }

  return (
    <div className="page">
      <h1>How to use this course safely</h1>
      <div className="callout callout-danger">
        <div className="callout-title">This course does not make you competent on its own</div>
        <p>
          It teaches frameworks, science and decision making, and structures your practice. It cannot give feedback on your hands,
          supervise hazardous practice, verify plant identification, or certify you. Take a hands-on wilderness first aid course
          (WFA, 16 h, or WAFA, 40 h), a navigation course, and a bushcraft course from a reputable provider.
        </p>
      </div>

      <h2>Safety classes</h2>
      <p>Every exercise carries one of these labels. Respect them.</p>
      <table>
        <tbody>
          {(Object.keys(safetyInfo) as SafetyClass[]).map((k) => (
            <tr key={k}><td>{safetyInfo[k].icon} <strong>{safetyInfo[k].label}</strong></td><td>{safetyInfo[k].text}</td></tr>
          ))}
        </tbody>
      </table>

      <h2>Things this course will never ask you to do alone</h2>
      <ul>
        <li>Climb, scramble exposed terrain or rappel without qualified supervision.</li>
        <li>Cross fast or deep water, or enter cold water, to “practise”.</li>
        <li>Handle, trap or hunt wild animals, or eat wild plants or fungi identified only from this course.</li>
        <li>Light fires where they are not explicitly allowed, or during fire bans.</li>
        <li>Deliberately expose yourself to hypothermia, heat illness or dehydration.</li>
      </ul>
      <p>High-risk topics are taught through explanation and simulation instead.</p>

      <h2>Four levels of exercise</h2>
      <ol>
        <li><strong>Knowledge</strong> — identify, calculate, recall with understanding.</li>
        <li><strong>Simulation</strong> — make decisions in a model where mistakes are free.</li>
        <li><strong>Safe physical</strong> — practise at home or outdoors within the safety class.</li>
        <li><strong>Integrated</strong> — combine skills in scenarios, first virtually, then in controlled real settings.</li>
      </ol>

      <h2>Your data</h2>
      <p>Progress is stored only in this browser. Export it to back up or move devices.</p>
      <div className="row-btns">
        <button className="btn" onClick={download}>Export progress</button>
        <button className="btn" onClick={() => file.current?.click()}>Import progress</button>
        <input ref={file} type="file" accept="application/json" hidden onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])} />
        <button className="btn danger" onClick={() => { if (confirm('Erase all progress in this browser?')) { actions.reset(); setMsg('Progress reset.') } }}>Reset progress</button>
      </div>
      {msg && <p className="muted">{msg}</p>}

      <h2>Medical disclaimer</h2>
      <p className="muted">
        Content is educational and follows published guidelines (e.g., Wilderness Medical Society, CDC) as of 2026. It is not
        medical advice. In an emergency, call your local emergency number (112 in the EU and many countries, 911 in North America,
        999 in the UK, 000 in Australia, 101 / 100 in Israel).
      </p>
    </div>
  )
}
