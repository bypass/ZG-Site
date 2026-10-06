import { useEffect, useState } from 'react'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import Resume from './pages/Resume.jsx'
import About from './pages/About.jsx'
import { PROJECTS } from './data/projects.js'

export default function App() {
  const [page, setPage] = useState('Home')
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => { window.scrollTo(0, 0) }, [page, activeProject])

  const goToPage = (p) => { setActiveProject(null); setPage(p) }

  let content
  if (page === 'Projects' && activeProject) {
    const project = PROJECTS.find((p) => p.id === activeProject)
    content = <ProjectDetail project={project} onBack={() => setActiveProject(null)} />
  } else if (page === 'Home') content = <Home />
  else if (page === 'Projects') content = <Projects onSelect={setActiveProject} />
  else if (page === 'Resume') content = <Resume />
  else content = <About />

  return (
    <>
      <Nav page={page} onNavigate={goToPage} />
      <main>{content}</main>
      <Footer />
    </>
  )
}
