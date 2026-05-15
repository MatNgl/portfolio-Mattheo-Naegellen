import { motion } from 'framer-motion'
import CardSwap, { Card } from '../ui/CardSwap'
import Counter from '../ui/Counter'
import { personalInfo, projects, stats } from '../../data/portfolio'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] },
})

export default function Hero() {
  return (
    <section className="pb-24">
      {/* Title + stats */}
      <div className="mb-10">
        <motion.span
          {...fadeUp(0.05)}
          className="inline-block text-[11px] font-bold text-white/35 uppercase tracking-[0.2em] mb-5"
        >
          {personalInfo.school} — {personalInfo.degree}
        </motion.span>

        <motion.h1
          {...fadeUp(0.15)}
          className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.0] tracking-tight"
        >
          {personalInfo.title}
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-5 text-base lg:text-lg text-white/45 leading-relaxed max-w-lg font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div {...fadeUp(0.35)} className="flex gap-10 mt-8">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl lg:text-5xl font-extrabold text-primary tabular-nums tracking-tight">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </div>
              <span className="text-xs text-white/35 font-medium uppercase tracking-wider mt-1 block">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CardSwap — desktop only (lg+) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="hidden lg:block"
      >
        <div className="relative w-full h-[440px]">
          <CardSwap
            width={500}
            height={360}
            cardDistance={40}
            verticalDistance={48}
            delay={3000}
            pauseOnHover={false}
            skewAmount={4}
            easing="elastic"
          >
            {projects.map((p) => (
              <Card
                key={p.id}
                customClass="!border-white/10 cursor-pointer"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-5 rounded-full" style={{ background: p.accent }} />
                    <h3 className="text-white font-bold text-sm drop-shadow">{p.title}</h3>
                  </div>
                </div>
              </Card>
            ))}
          </CardSwap>
        </div>
      </motion.div>

      {/* Projects grid — tablet & mobile (< lg) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="lg:hidden mt-8 grid grid-cols-2 gap-3"
      >
        {projects.map((p) => (
          <button
            key={p.id}
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="relative rounded-xl overflow-hidden aspect-video border border-white/10 cursor-pointer group text-left"
            style={{ boxShadow: '0 12px 30px -8px rgba(0,0,0,0.5)' }}
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-2.5 flex items-center gap-1.5">
              <div className="w-0.5 h-4 rounded-full flex-shrink-0" style={{ background: p.accent }} />
              <span className="text-white font-semibold text-xs truncate">{p.title}</span>
            </div>
          </button>
        ))}
      </motion.div>
    </section>
  )
}
