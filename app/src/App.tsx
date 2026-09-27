import { useState } from 'react'
import { HashRouter, NavLink, Route, Routes } from 'react-router-dom'
import { Dashboard } from './pages/Dashboard'
import { CourseMap } from './pages/CourseMap'
import { StagePage } from './pages/StagePage'
import { LessonPage } from './pages/LessonPage'
import { SkillsPage } from './pages/SkillsPage'
import { ReviewPage } from './pages/ReviewPage'
import { ReferencesPage } from './pages/ReferencesPage'
import { SimulationsPage } from './pages/SimulationsPage'
import { SafetyPage } from './pages/SafetyPage'
import { stages } from './content/curriculum'
import { lessonsForStage } from './content/lessons'
import { useProgress } from './progress/store'
import { dueQuestions } from './progress/analytics'

function Sidebar({ onNavigate }: { onNavigate: () => void }) {
  const p = useProgress()
  const due = dueQuestions(p).length
  return (
    <nav className="sidebar" aria-label="Main">
      <NavLink to="/" end onClick={onNavigate}>🏕️ Dashboard</NavLink>
      <NavLink to="/map" onClick={onNavigate}>🗺️ Course map</NavLink>
      <NavLink to="/review" onClick={onNavigate}>🔁 Review {due > 0 && <span className="pill">{due}</span>}</NavLink>
      <NavLink to="/skills" onClick={onNavigate}>🧭 Skills</NavLink>
      <NavLink to="/sims" onClick={onNavigate}>🎮 Simulations</NavLink>
      <NavLink to="/references" onClick={onNavigate}>📚 References</NavLink>
      <NavLink to="/lesson/final" onClick={onNavigate}>🎓 Final assessment</NavLink>
      <NavLink to="/safety" onClick={onNavigate}>⛑️ Safety &amp; data</NavLink>
      <div className="nav-group">Stages</div>
      {stages.map((s) => (
        <div key={s.n}>
          <NavLink to={`/stage/${s.n}`} onClick={onNavigate} className={s.status === 'planned' ? 'planned' : ''}>
            {s.n === 19 ? '★' : s.n}. {s.title}
          </NavLink>
          {s.status === 'available' && (
            <div className="nav-lessons">
              {lessonsForStage(s.n).map((l) => (
                <NavLink key={l.id} to={`/lesson/${l.id}`} onClick={onNavigate}>
                  {p.lessons[l.id] ? '✓ ' : ''}{l.order}. {l.title}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}

function Shell() {
  const [open, setOpen] = useState(false)
  return (
    <div className={`shell ${open ? 'nav-open' : ''}`}>
      <header className="topbar">
        <button className="menu-btn" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>☰</button>
        <NavLink to="/" className="brand">Survivor’s Mind <span className="muted">· field course</span></NavLink>
      </header>
      <aside className="side">
        <Sidebar onNavigate={() => setOpen(false)} />
      </aside>
      <main className="main">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<CourseMap />} />
          <Route path="/stage/:n" element={<StagePage />} />
          <Route path="/lesson/:id" element={<LessonPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/references" element={<ReferencesPage />} />
          <Route path="/sims" element={<SimulationsPage />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="*" element={<div className="page"><h1>Not found</h1></div>} />
        </Routes>
      </main>
    </div>
  )
}

export default function App() {
  return (
    <HashRouter>
      <Shell />
    </HashRouter>
  )
}
