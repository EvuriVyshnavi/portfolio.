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
