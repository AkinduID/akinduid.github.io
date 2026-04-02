import { useState, useEffect, useRef } from 'react'
import Navbar from './components/layout/Navbar'
import Window from './components/layout/Window'
import Intro from './components/intro/Intro'
import About from './components/about/about'
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
  const hasAutoOpenedFromScroll = useRef(false)
  const isSyncingFromScroll = useRef(false)
  const scrollSpyLockUntil = useRef(0)

  const navItems = [
    { id: 'about', label: 'About', title: 'About', icon: 'fa-solid fa-user' },
    { id: 'education', label: 'Education', title: 'Education', icon: 'fa-solid fa-graduation-cap' },
    { id: 'experience', label: 'Experience', title: 'Professional Experience', icon: 'fa-solid fa-briefcase' },
    { id: 'projects', label: 'Projects', title: 'Projects', icon: 'fa-solid fa-folder-open' },
    { id: 'skills', label: 'Skills', title: 'Tech Stack', icon: 'fa-solid fa-code' },
    { id: 'achievements', label: 'Achivements', title: 'Achievements', icon: 'fa-solid fa-trophy' },
    { id: 'volunteering', label: 'Volunteering', title: 'Volunteering', icon: 'fa-solid fa-handshake' },
    { id: 'connect', label: 'Connect', title: "Let's Connect", icon: 'fa-regular fa-paper-plane' }
  ];

  const handleNavClick = (tabId) => {
    scrollSpyLockUntil.current = Date.now() + 450
    setActiveTab(tabId)
  }

  const handleIntroArrowClick = () => {
    hasAutoOpenedFromScroll.current = true
    scrollSpyLockUntil.current = Date.now() + 450
    setActiveTab(navItems[0].id)
  }

  const handleWindowContentWheel = (event) => {
    if (activeTab !== navItems[0].id) return

    const isScrollingUp = event.deltaY < -20
    const isAtTop = event.currentTarget.scrollTop <= 0

    if (isScrollingUp && isAtTop) {
      setActiveTab(null)
    }
  }

  const handleWindowContentScroll = (event) => {
    if (!activeTab || Date.now() < scrollSpyLockUntil.current) return

    const container = event.currentTarget
    let closestId = navItems[0].id
    let smallestDistance = Number.POSITIVE_INFINITY

    for (const item of navItems) {
      const section = sectionRefs.current[item.id]
      if (!section) continue

      const distance = Math.abs(section.offsetTop - container.scrollTop)
      if (distance < smallestDistance) {
        smallestDistance = distance
        closestId = item.id
      }
    }

    if (closestId !== activeTab) {
      isSyncingFromScroll.current = true
      setActiveTab(closestId)
    }
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

    if (isSyncingFromScroll.current) {
      isSyncingFromScroll.current = false
      return
    }

    const targetSection = sectionRefs.current[activeTab]
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeTab])

  useEffect(() => {
    if (activeTab) {
      hasAutoOpenedFromScroll.current = true
      return
    }

    hasAutoOpenedFromScroll.current = false

    const handleWheel = (event) => {
      if (event.deltaY <= 20 || hasAutoOpenedFromScroll.current) return

      hasAutoOpenedFromScroll.current = true
      setActiveTab(navItems[0].id)
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
    }
  }, [activeTab, navItems])

  return (
    <>
      <div id="wrapper">
        <Navbar 
          onNavClick={handleNavClick} 
          activeTab={activeTab} 
          items={navItems} 
          onLogoClick={() => setActiveTab(null)}
        />
        <Intro onArrowClick={handleIntroArrowClick} />
        {activeTab && (
          <Window 
            direction="fade"
            onContentWheel={handleWindowContentWheel}
            onContentScroll={handleWindowContentScroll}
            // title="Profile Overview"
          >
            <section className="window-section" ref={(el) => { sectionRefs.current.about = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">About</h2>
              </div>
              <About />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.education = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Education</h2>
              </div>
              <Education />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.experience = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Professional Experience</h2>
              </div>
              <Experience />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.projects = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Projects</h2>
              </div>
              <Projects />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.skills = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Tech Stack</h2>
              </div>
              <Skills />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.achievements = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Achievements</h2>
              </div>
              <Achievements />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.volunteering = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Volunteering</h2>
              </div>
              <Volunteering />
            </section>
            <section className="window-section" ref={(el) => { sectionRefs.current.connect = el }}>
              <div className="window-section-header">
                <h2 className="window-section-title">Let's Connect</h2>
              </div>
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
