import { motion } from 'framer-motion'
import { Github, Linkedin, ArrowDown } from 'lucide-react'
import Grainient from '../ui/Grainient'
import CardSwap, { Card } from '../ui/CardSwap'
import MagneticButton from '../shared/MagneticButton'
import { personalInfo, projects } from '../../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section data-theme="dark" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Grainient
          color1="#ffd19f"
          color2="#19046e"
          color3="#fafafa"
          timeSpeed={1.9}
          grainAmount={0.04}
          warpStrength={0.6}
          warpFrequency={4.0}
          contrast={1.2}
          saturation={0.85}
          zoom={2}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full pt-24 pb-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-center justify-between gap-12 lg:gap-8">
          {/* Left: text content */}
          <div className="flex-1 max-w-xl">
            <motion.span
              {...fadeUp(0.1)}
              className="inline-block text-xs font-bold text-white/80 uppercase tracking-widest mb-6"
            >
              EFREI Paris - Master Fullstack & Management
            </motion.span>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-none tracking-tight"
            >
              Matthéo
              <br />
              <span className="text-accent">Naegellen</span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.32)}
              className="mt-5 text-lg font-semibold text-white/75"
            >
              Développeur Fullstack
            </motion.p>

            <motion.p
              {...fadeUp(0.42)}
              className="mt-4 text-base lg:text-lg text-white/60 leading-relaxed max-w-md"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              {...fadeUp(0.55)}
              className="mt-10 flex flex-wrap gap-3"
            >
              <MagneticButton href={personalInfo.github} target="_blank" variant="primary" className="!bg-white !text-primary hover:!bg-white/90 shadow-xl shadow-black/10">
                <Github size={15} />
                GitHub
              </MagneticButton>
              <MagneticButton href={personalInfo.linkedin} target="_blank" variant="outline" className="!bg-white/15 !backdrop-blur-md !border-white/25 !text-white hover:!bg-white/25">
                <Linkedin size={15} />
                LinkedIn
              </MagneticButton>
              <MagneticButton href="#contact" variant="ghost" className="!text-white/80 hover:!bg-white/10">
                Me contacter
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right: 3D stacked CardSwap */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:block flex-shrink-0"
            style={{ width: 680, height: 700 }}
          >
            <CardSwap
              width={520}
              height={370}
              cardDistance={42}
              verticalDistance={52}
              delay={3000}
              pauseOnHover={false}
              skewAmount={5}
              easing="elastic"
            >
              {projects.map((p) => (
                <Card
                  key={p.id}
                  customClass="!border-white/10"
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div
                        className="w-1 h-5 rounded-full"
                        style={{ background: p.accent }}
                      />
                      <h3 className="text-white font-bold text-sm leading-tight drop-shadow">
                        {p.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1 ml-3">
                      {p.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-0.5 rounded-full bg-white/20 text-white/85 backdrop-blur-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={18} strokeWidth={1.5} />
        </motion.div>
      </motion.div>

    </section>
  )
}
