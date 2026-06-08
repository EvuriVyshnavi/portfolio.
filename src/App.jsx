import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SectionDivider = () => (
  <div className="w-full py-8">
    <div className="mx-auto h-px w-full max-w-6xl bg-[#F31113]" />
  </div>
)

function App() {
  const [showDesktopPrompt, setShowDesktopPrompt] = useState(false)

  useEffect(() => {
    const checkViewport = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setShowDesktopPrompt(isMobileDevice && window.innerWidth < 980)
    }
    
    setTimeout(checkViewport, 100)
    window.addEventListener('resize', checkViewport)
    window.addEventListener('orientationchange', checkViewport)
    
    return () => {
      window.removeEventListener('resize', checkViewport)
      window.removeEventListener('orientationchange', checkViewport)
    }
  }, [])

  // Desktop prompt unte site motham render cheyoddu. Hero lone prompt untadi
  if (showDesktopPrompt) {
    return <Hero />
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <WorkExperience />
      <Contact />
      <Footer />
    </>
  )
}

export default App