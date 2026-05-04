import { ExternalLink } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import BigTitle from '../shared/BigTitle'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <BigTitle line1="Projets" line2="Personnels" />

      <div className="grid gap-4">
        {projects.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 0.07}>
            <div className="group glass rounded-[18px] p-5 hover:bg-white/[0.06] transition-all duration-300">
              <div className="flex items-start gap-4">
                {/* Logo */}
                <div className="flex-shrink-0">
                  {project.logo ? (
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center overflow-hidden p-1.5 bg-white/[0.05] border border-white/[0.07]">
                      <img
                        src={project.logo}
                        alt={project.title}
                        className="w-full h-full object-contain"
                        draggable={false}
                      />
                    </div>
                  ) : (
                    <div
                      className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white/60 font-bold text-lg bg-white/[0.05] border border-white/[0.07]"
                    >
                      {project.title[0]}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-bold text-white text-base leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs text-primary/60 font-medium mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/8 border border-primary/15 text-primary text-xs font-medium hover:bg-primary/15 transition-all duration-300"
                      >
                        <ExternalLink size={11} />
                        Voir le site
                      </a>
                    )}
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
