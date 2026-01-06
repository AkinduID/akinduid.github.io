import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Window from './components/Window'
import Intro from './components/Intro'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import Volunteering from './components/Volunteering'
import Connect from './components/Connect'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState(null)
  const [direction, setDirection] = useState('fade')

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'volunteering', label: 'Volunteering' },
    { id: 'connect', label: 'Connect' }
  ];

  const handleNavClick = (tabId) => {
    if (activeTab) {
      const currentIndex = navItems.findIndex(item => item.id === activeTab);
      const newIndex = navItems.findIndex(item => item.id === tabId);
      
      if (newIndex > currentIndex) {
        setDirection('up');
      } else if (newIndex < currentIndex) {
        setDirection('down');
      } else {
        setDirection('fade');
      }
    } else {
      setDirection('fade');
    }
    setActiveTab(tabId);
  };

  useEffect(() => {
    if (activeTab) {
      document.body.classList.add('is-article-visible')
    } else {
      document.body.classList.remove('is-article-visible')
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
          <Window key={activeTab} onClose={() => setActiveTab(null)} direction={direction}>
            {activeTab === 'about' && <About />}
            {activeTab === 'experience' && <Experience />}
            {activeTab === 'projects' && <Projects />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'volunteering' && <Volunteering />}
            {activeTab === 'achievements' && <Achievements />}
            {activeTab === 'connect' && <Connect />}
          </Window>
        )}
      </div>
      <div id="bg"></div>
    </>
  )
}

export default App
