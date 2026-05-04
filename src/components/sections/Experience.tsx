import AnimatedSection from '../shared/AnimatedSection'
import { experience } from '../../data/portfolio'

// Map tech names to Simple Icons slugs
const iconMap: Record<string, string> = {
  PHP: 'php',
  PostgreSQL: 'postgresql',
  JavaScript: 'javascript',
  Ajax: '',
  Docker: 'docker',
}

function TechIcon({ name }: { name: string }) {
  const slug = iconMap[name]
  if (!slug) {
    return (
      <span className="text-[10px] font-bold text-primary/60 px-1">{name}</span>
    )
  }
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className="w-4 h-4 opacity-70"
      draggable={false}
    />
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-5 mb-14">
          <AnimatedSection>
            <div className="flex items-center gap-5">
              <img
                src="/Logo_La_Banque_postale_2022.svg.png"
                alt="La Banque Postale"
                className="h-10 object-contain"
                draggable={false}
              />
              <div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">
                  Alternance
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-text leading-tight">
                  {experience.company}
                </h2>
                <p className="mt-1 text-base text-text-muted">
                  {experience.role} - {experience.period}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[0.95rem] top-0 bottom-0 w-px bg-primary/15 hidden md:block" />

          <div className="space-y-5">
            {experience.missions.map((mission, i) => (
              <AnimatedSection key={i} delay={i * 0.1} className="relative flex gap-6 md:gap-10">
                {/* Centered dot on the line */}
                <div className="hidden md:flex flex-shrink-0 items-center self-stretch">
                  <div className="w-[1.9rem] flex items-center justify-center">
                    <div className="w-3.5 h-3.5 rounded-full bg-primary border-[3px] border-white shadow-sm ring-1 ring-primary/20 z-10" />
                  </div>
                </div>

                <div className="flex-1 glass-dark rounded-[20px] p-6 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  <h3 className="font-bold text-text text-base">{mission.title}</h3>
                  <p className="text-text-muted mt-2 leading-relaxed text-sm">{mission.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {mission.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-[10px] bg-white/60 backdrop-blur-sm border border-primary/10 text-text font-medium hover:border-primary/25 transition-colors"
                        title={tag}
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
