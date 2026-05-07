import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import ProjectPage from '../pages/ProjectPage.jsx'
import ExperiencePage from '../pages/ExperiencePage.jsx'
import ToolsPage from '../pages/ToolsPage.jsx'
import ThoughtsPage from '../pages/ThoughtsPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/tools" element={<ToolsPage />} />
      <Route path="/thoughts" element={<ThoughtsPage />} />
    </Routes>
  )
}

export default App