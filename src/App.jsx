import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Preloader from './components/Preloader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const SectionDivider = () => (
  <div className="w-full py-8">
    <div className="mx-auto h-px w-full max-w-6xl bg-[#F31113]" />
  </div>
)

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-out',
      offset: 120
    });
  }, []);

  return (
    <>
      <Preloader />
      <Navbar />
      <main className="overflow-x-hidden min-h-[100dvh] pb-24">
        <Hero />

        <div id="about">
          <About />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <SectionDivider />

        <div id="projects">
          <Projects />
        </div>

        <SectionDivider />

        <div id="work">
          <WorkExperience />
        </div>

        <div id="contact" className="pb-[env(safe-area-inset-bottom)]">
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App