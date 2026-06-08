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

const DesktopOnlyScreen = () => (
  <div className="fixed inset-0 z-50 w-screen h-screen bg-black flex items-center justify-center p-6">
    <div className="max-w-sm text-center text-white">
      <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white/10 flex items-center justify-center">
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
      
      <h1 className="text-2xl font-bold mb-3">Desktop Mode Required</h1>
      <h2>Desktop recommended for full features</h2>
      
      <p className="text-white/80 mb-6 text-sm leading-relaxed">
        Please enable "Desktop" or "Desktop site" and refresh the page to view this portfolio.
      </p>

      <button 
        onClick={() => window.location.reload()}
        className="px-6 py-2 bg-white/10 rounded-full text-sm font-semibold hover:bg-white/20 transition"
      >
        Refresh Page
      </button>
    </div>
  </div>
)

function App() {
  const [isAllowed, setIsAllowed] = useState(false)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const checkDesktop = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      const isDesktopWidth = window.innerWidth >= 980
      
      if (!isMobileDevice || isDesktopWidth) {
        setIsAllowed(true)
      } else {
        setIsAllowed(false)
      }
      setChecking(false)
    }
    
    setTimeout(checkDesktop, 100)
    window.addEventListener('resize', checkDesktop)
    window.addEventListener('orientationchange', checkDesktop)
    
    return () => {
      window.removeEventListener('resize', checkDesktop)
      window.removeEventListener('orientationchange', checkDesktop)
    }
  }, [])

  if (checking) {
    return <div className="fixed inset-0 bg-black"></div>
  }

  if (!isAllowed) {
    return <DesktopOnlyScreen />
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