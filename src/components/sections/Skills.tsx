import { motion } from 'framer-motion'
import AnimatedSection from '../shared/AnimatedSection'
import SectionTitle from '../shared/SectionTitle'
import { skills } from '../../data/portfolio'

const iconMap: Record<string, string> = {
  React: 'react',
  Angular: 'angular',
  TypeScript: 'typescript',
  JavaScript: 'javascript',
  'HTML / CSS': 'html5',
  'Tailwind CSS': 'tailwindcss',
  NestJS: 'nestjs',
  PHP: 'php',
  'Node.js': 'nodedotjs',
  'REST API': '',
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Redis: 'redis',
  Docker: 'docker',
  GitHub: 'github',
  VPS: '',
  Linux: 'linux',
  Figma: 'figma',
  Git: 'git',
  Postman: 'postman',
  Ajax: '',
}

function SkillIcon({ name }: { name: string }) {
  const slug = iconMap[name]
  if (!slug) return null
  return (
    <img
      src={`https://cdn.simpleicons.org/${slug}`}
      alt={name}
      className="w-4 h-4 opacity-70"
      draggable={false}
    />
  )
}

export default function Skills() {
  const categories = Object.entries(skills) as [string, string[]][]

  return (
    <section id="skills" className="py-28 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          label="Stack"
          title="Ce que je maitrise"
          centered
        />

        <div className="space-y-8 max-w-3xl mx-auto">
          {categories.map(([cat, items], i) => (
            <AnimatedSection key={cat} delay={i * 0.09}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <span className="w-36 text-xs font-bold text-primary uppercase tracking-wider pt-2.5 flex-shrink-0">
                  {cat}
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {items.map((skill, j) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 + j * 0.04, duration: 0.3 }}
                      className="glass inline-flex items-center gap-2 px-4 py-2.5 rounded-[14px] text-sm font-medium text-text hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                    >
                      <SkillIcon name={skill} />
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              {i < categories.length - 1 && (
                <div className="mt-7 h-px bg-primary/6" />
              )}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
