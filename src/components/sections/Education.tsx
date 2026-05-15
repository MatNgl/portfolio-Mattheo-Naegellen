import AnimatedSection from '../shared/AnimatedSection'
import BigTitle from '../shared/BigTitle'
import { education } from '../../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="py-16">
      <BigTitle line1="Parcours" line2="Scolaire" className="mb-10" />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[0.85rem] top-0 bottom-0 w-px bg-white/[0.07] hidden md:block" />

        <div className="space-y-4">
          {education.map((edu, i) => (
            <AnimatedSection key={i} delay={i * 0.08} className="relative flex gap-6 md:gap-8">
              {/* Timeline dot */}
              <div className="hidden md:flex flex-shrink-0 items-start pt-6 self-stretch">
                <div className="w-[1.7rem] flex items-center justify-center">
                  <div
                    className={`w-2.5 h-2.5 rounded-full border-2 z-10 ${
                      edu.alternance
                        ? 'bg-primary border-primary/40'
                        : 'bg-white/30 border-white/10'
                    }`}
                  />
                </div>
              </div>

              <div className="flex-1 glass rounded-[18px] p-5 hover:bg-white/[0.05] transition-all duration-300">
                {/* Header */}
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest ${
                      edu.alternance ? 'text-primary' : 'text-white/60'
                    }`}
                  >
                    {edu.alternance ? 'Alternance' : 'Formation initiale'}
                  </span>
                  <span className="text-[10px] text-white/45">·</span>
                  <span className="text-[10px] text-white/60">{edu.duration}</span>
                </div>

                <h3 className="font-bold text-white text-base">{edu.degree}</h3>

                <div className="flex items-center gap-2 mt-0.5 mb-3">
                  {edu.school && (
                    <span className="text-white/55 text-xs">{edu.school}</span>
                  )}
                  {edu.school && (
                    <span className="text-white/25 text-xs">·</span>
                  )}
                  <span className="text-white/55 text-xs">{edu.period}</span>
                </div>

                <p className="text-white/75 leading-relaxed text-sm">{edu.description}</p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {edu.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/65 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
