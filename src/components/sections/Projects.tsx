import { ExternalLink } from 'lucide-react'
import AnimatedSection from '../shared/AnimatedSection'
import BigTitle from '../shared/BigTitle'
import { projects } from '../../data/portfolio'

const iconMap: Record<string, string> = {
  React: 'react',
  NestJS: 'nestjs',
  MongoDB: 'mongodb',
  PostgreSQL: 'postgresql',
  Redis: 'redis',
  Docker: 'docker',
  Chromium: 'googlechrome',
  'Node.js': 'nodedotjs',
  'Telegram API': 'telegram',
  'Tailwind CSS': 'tailwindcss',
  Tailwind: 'tailwindcss',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  PHP: 'php',
  'API Pokemon': 'pokemongo',
  Angular: 'angular',
  Vite: 'vite',
  Figma: 'figma',
}

function StackIcon({ name }: { name: string }) {
  const slug = iconMap[name]
  return (
    <div className="relative group/icon inline-flex">
      <div className={`h-7 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center hover:bg-white/[0.12] hover:border-primary/25 transition-all duration-200 cursor-default ${slug ? 'w-7' : 'px-2'}`}>
        {slug ? (
          <img
            src={`https://cdn.simpleicons.org/${slug}/ffffff`}
            alt={name}
            className="w-4 h-4 opacity-65"
            draggable={false}
          />
        ) : (
          <span className="text-[10px] text-white/65 font-medium whitespace-nowrap px-1">
            {name}
          </span>
        )}
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-0.5 rounded-md bg-black/85 backdrop-blur-sm text-white text-[10px] font-medium whitespace-nowrap opacity-0 group-hover/icon:opacity-100 transition-opacity duration-150 pointer-events-none z-20">
        {name}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-black/85" />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <BigTitle line1="Projets" line2="Personnels" />

      {/* Intro */}
      <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-xl">
        Projets imaginés, conçus et déployés en totale autonomie, de la première ligne de code à la mise en production sur VPS personnel.
      </p>

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
                    <div className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white/60 font-bold text-lg bg-white/[0.05] border border-white/[0.07]">
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
                      <p className="text-xs text-primary/85 font-medium mt-0.5">
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

                  <p className="text-white/70 text-sm leading-relaxed mt-3">
                    {project.description}
                  </p>

                  {/* Stack icons */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="flex flex-wrap items-center gap-2 mt-4">
                      {project.tags.map((tag) => (
                        <StackIcon key={tag} name={tag} />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  )
}
