import Navbar from './components/layout/Navbar'
import ProfilePanel from './components/layout/ProfilePanel'
import Hero from './components/sections/Hero'
import Experience from './components/sections/Experience'
import Education from './components/sections/Education'
import Projects from './components/sections/Projects'
import Skills from './components/sections/Skills'
import Contact from './components/sections/Contact'
import Grainient from './components/ui/Grainient'

function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      {/* Full-page Grainient background */}
      <div className="fixed inset-0 z-0">
        <Grainient
          color1="#012202"
          color2="#284b28"
          color3="#203c01"
          timeSpeed={0.85}
          warpStrength={0.7}
          warpAmplitude={5}
          warpSpeed={1.8}
          warpFrequency={2.9}
          noiseScale={1}
          centerX={0.25}
          centerY={0.44}
          gamma={0.9}
          zoom={1}
          grainAmount={0.06}
        />
      </div>

      <Navbar />

      {/* Centered container split layout */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 pt-24 pb-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Left: Sticky Profile Panel — desktop only */}
          <aside className="hidden lg:block lg:w-[300px] xl:w-[320px] flex-shrink-0">
            <div className="sticky top-28">
              <ProfilePanel />
            </div>
          </aside>

          {/* Right: Scrollable content */}
          <main className="flex-1 min-w-0">
            <Hero />
            <Experience />
            <Education />
            <Skills />
            <Projects />
            <Contact />
          </main>

        </div>
      </div>
    </div>
  )
}

export default App
