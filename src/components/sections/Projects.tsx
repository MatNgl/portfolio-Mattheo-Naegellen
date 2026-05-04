import { ExternalLink, Github, Clock } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'
import { projects } from '../../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Projets perso"
          title="Ce que je crée"
          subtitle="Des outils nés d'un besoin réel, pas de tutoriels."
        />

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <AnimatedSection key={project.id} delay={i * 0.09}>
              <div className="group relative glass rounded-[20px] p-6 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300">
                <div
                  className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: project.accent }}
                />

                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {project.logo ? (
                      <div
                        className="w-10 h-10 rounded-[12px] flex items-center justify-center flex-shrink-0 overflow-hidden p-1.5 bg-white border border-black/8 shadow-sm"
                      >
                        <img
                          src={project.logo}
                          alt={project.title}
                          className="w-full h-full object-contain"
                          draggable={false}
                        />
                      </div>
                    ) : (
                      <div
                        className="w-10 h-10 rounded-[12px] flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ background: project.accent }}
                      >
                        {project.title[0]}
                      </div>
                    )}
                    <div>
                      <h3 className="font-bold text-text text-base leading-tight">{project.title}</h3>
                      <p className="text-xs font-medium mt-0.5" style={{ color: project.accent }}>
                        {project.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {project.status === 'wip' && (
                      <span className="flex items-center gap-1 text-xs px-2.5 py-1 rounded-[10px] bg-amber-100 text-amber-700 font-medium">
                        <Clock size={10} />
                        En cours
                      </span>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-[10px] hover:bg-black/5 transition-colors text-text-muted hover:text-text"
                        aria-label="GitHub"
                      >
                        <Github size={15} />
                      </a>
                    )}
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-[10px] hover:bg-black/5 transition-colors text-text-muted hover:text-text"
                        aria-label="Voir le site"
                      >
                        <ExternalLink size={15} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-text-muted text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-[10px] font-medium"
                      style={{ background: `${project.accent}12`, color: project.accent }}
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
