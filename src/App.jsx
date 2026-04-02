import { useState, useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar'
import Window from './components/layout/Window'
import Intro from './components/intro/Intro'
import Education from './components/education/Education'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Skills from './components/skills/Skills'
import Achievements from './components/achievements/Achievements'
import Volunteering from './components/volunteering/Volunteering'
import Connect from './components/connect/Connect'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(null)
  const sectionRefs = useRef({})

  const navItems = [
    { id: 'education', label: 'Edu', title: 'Education' },
    { id: 'experience', label: 'Exp', title: 'Professional Experience' },
    { id: 'projects', label: 'Pro', title: 'Projects' },
    { id: 'skills', label: 'Skil', title: 'Tech Stack' },
    { id: 'achievements', label: 'Achi', title: 'Achievements' },
    { id: 'volunteering', label: 'Vol', title: 'Volunteering' },
    { id: 'connect', label: 'Co', title: "Let's Connect" }
  ];

  const handleNavClick = (tabId) => {
    setActiveTab(tabId)
  }

  useEffect(() => {
    if (activeTab) {
      document.body.classList.add('is-article-visible')
    } else {
      document.body.classList.remove('is-article-visible')
    }
  }, [activeTab])

  useEffect(() => {
    if (!activeTab) return

    const targetSection = sectionRefs.current[activeTab]
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeTab])

  return (
    <>
      <div id="wrapper">
        <Navbar 
          onNavClick={handleNavClick} 
          activeTab={activeTab} 
          items={navItems} 
          onLogoClick={() => setActiveTab(null)}
        />
        <Intro />
        {activeTab && (
          <Window 
            onClose={() => setActiveTab(null)} 
            direction="fade"
            // title="Profile Overview"
          >
            <section className="window-section" ref={(el) => { sectionRefs.current.education = el }}>
              <Education />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.experience = el }}>
              <Experience />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.projects = el }}>
              <Projects />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.skills = el }}>
              <Skills />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.achievements = el }}>
              <Achievements />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.volunteering = el }}>
              <Volunteering />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.connect = el }}>
              <Connect />
            </section>
          </Window>
        )}
      </div>
      <div id="bg"></div>
    </>
  )
}

export default App
