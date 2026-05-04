import AnimatedSection from '../shared/AnimatedSection'
import Grainient from '../ui/Grainient'
import { experience } from '../../data/portfolio'

const iconMap: Record<string, string> = {
  PHP: 'php',
  PostgreSQL: 'postgresql',
  JavaScript: 'javascript',
  Docker: 'docker',
}

function TechIcon({ name }: { name: string }) {
  const slug = iconMap[name]
  if (!slug) return null
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}/ffffff`}
      alt={name}
      className="w-4 h-4 opacity-80"
      draggable={false}
    />
  )
}

export default function Experience() {
  return (
    <section id="experience" data-theme="dark" className="relative py-24 overflow-hidden">
      {/* Grainient background */}
      <div className="absolute inset-0">
        <Grainient
          color1="#ffd19f"
          color2="#19046e"
          color3="#19046e"
          timeSpeed={1.9}
          grainAmount={0.04}
          warpStrength={0.6}
          zoom={2}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-5 mb-14">
          <AnimatedSection>
            <div className="flex items-center gap-5">
              <div className="h-12 w-12 rounded-[14px] bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center overflow-hidden p-1.5">
                <img
                  src="/Logo_La_Banque_postale_2022.svg.png"
                  alt="La Banque Postale"
                  className="w-full h-full object-contain brightness-0 invert"
                  draggable={false}
                />
              </div>
              <div>
                <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
                  Alternance
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {experience.company}
                </h2>
                <p className="mt-1 text-base text-white/60">
                  {experience.role} — {experience.period}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[0.95rem] top-0 bottom-0 w-px bg-white/15 hidden md:block" />

          <div className="space-y-5">
            {experience.missions.map((mission, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative flex gap-6 md:gap-10">
                {/* Centered dot */}
                <div className="hidden md:flex flex-shrink-0 items-center self-stretch">
                  <div className="w-[1.9rem] flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-white border-[3px] border-white/30 shadow-sm z-10" />
                  </div>
                </div>

                <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/15 rounded-[20px] p-6 hover:bg-white/15 hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-white text-base">{mission.title}</h3>
                  <p className="text-white/70 mt-2 leading-relaxed text-sm">{mission.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {mission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 font-medium"
                      >
                        <TechIcon name={tag} />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
