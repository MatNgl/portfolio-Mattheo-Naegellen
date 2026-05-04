import AnimatedSection from '../shared/AnimatedSection'
import BigTitle from '../shared/BigTitle'
import { experiences } from '../../data/portfolio'

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
      className="w-3.5 h-3.5 opacity-80"
      draggable={false}
    />
  )
}

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-5 mb-10">
        <BigTitle line1="Parcours" line2="Professionnel" className="mb-0 flex-1" />
        <AnimatedSection delay={0.1} className="flex-shrink-0 mb-1">
          <div className="flex items-center gap-2 pb-1">
            <div className="h-8 w-8 rounded-[10px] bg-white/[0.05] border border-white/[0.08] flex items-center justify-center overflow-hidden p-1">
              <img
                src="/Logo_La_Banque_postale_2022.svg.png"
                alt="La Banque Postale"
                className="w-full h-full object-contain brightness-0 invert opacity-60"
                draggable={false}
              />
            </div>
            <span className="text-xs text-white/30 font-medium">La Banque Postale</span>
          </div>
        </AnimatedSection>
      </div>

      <div className="relative">
        <div className="absolute left-[0.85rem] top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

        <div className="space-y-4">
          {experiences.map((exp, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className="relative flex gap-6 md:gap-8">
              <div className="hidden md:flex flex-shrink-0 items-start pt-6 self-stretch">
                <div className="w-[1.7rem] flex items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 z-10 ${
                      exp.type === 'alternance'
                        ? 'bg-primary border-primary/40'
                        : 'bg-white/40 border-white/15'
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 glass rounded-[18px] p-5 hover:bg-white/[0.05] transition-all duration-300">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      exp.type === 'alternance' ? 'text-primary' : 'text-white/30'
                    }`}
                  >
                    {exp.type === 'alternance' ? 'Alternance' : 'Stage'}
                  </span>
                  <span className="text-[10px] text-white/20">-</span>
                  <span className="text-[10px] text-white/25">{exp.duration}</span>
                </div>

                <h3 className="font-bold text-white text-base">{exp.role}</h3>
                <p className="text-white/35 text-xs mt-0.5">{exp.period}</p>
                <p className="text-white/50 mt-3 leading-relaxed text-sm">{exp.description}</p>

                {exp.missions && (
                  <div className="mt-4 space-y-3">
                    {exp.missions.map((mission, mi) => (
                      <div
                        key={mi}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.05]"
                      >
                        <h4 className="font-semibold text-white/75 text-sm">{mission.title}</h4>
                        <p className="text-white/40 text-xs mt-1 leading-relaxed">
                          {mission.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {mission.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center gap-1 text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white font-medium"
                            >
                              <TechIcon name={tag} />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
