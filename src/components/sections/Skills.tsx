import { useEffect, useRef } from 'react'
import BigTitle from '../shared/BigTitle'
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
  PostgreSQL: 'postgresql',
  MongoDB: 'mongodb',
  Redis: 'redis',
  Docker: 'docker',
  GitHub: 'github',
  Linux: 'linux',
  Figma: 'figma',
  Git: 'git',
  Postman: 'postman',
  'REST API': 'openapiinitiative',

  VPS: 'linux',
}

const allSkills = Object.values(skills).flat()
const row1 = allSkills.filter((_, i) => i % 2 === 0)
const row2 = allSkills.filter((_, i) => i % 2 === 1)

const offsets = [0, -18, 12, -6, 20, -14, 5, -22, 16, -8, 18, -12, 8, -20, 3, -16, 14, -4, 20, -10]

function SkillChip({ name, index }: { name: string; index: number }) {
  const slug = iconMap[name]
  const yOffset = offsets[index % offsets.length]

  return (
    <div
      className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.05] backdrop-blur-sm border border-white/[0.07] text-white/70 font-medium text-sm hover:bg-white/[0.09] hover:border-primary/25 hover:text-primary hover:scale-105 transition-all duration-300 cursor-default select-none"
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={name}
          className="w-5 h-5 opacity-60"
          draggable={false}
        />
      )}
      {name}
    </div>
  )
}

function Marquee({ items, direction = 'left', speed = 12 }: { items: string[]; direction?: 'left' | 'right'; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let pos = direction === 'left' ? 0 : -(el.scrollWidth / 2)
    let rafId: number
    const animate = () => {
      if (direction === 'left') {
        pos -= speed / 60
        if (pos <= -(el.scrollWidth / 2)) pos = 0
      } else {
        pos += speed / 60
        if (pos >= 0) pos = -(el.scrollWidth / 2)
      }
      el.style.transform = `translateX(${pos}px)`
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafId)
  }, [direction, speed])

  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden py-6">
      <div ref={ref} className="flex gap-5 w-max will-change-transform">
        {doubled.map((skill, i) => (
          <SkillChip key={`${skill}-${i}`} name={skill} index={i} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <BigTitle line1="Stack" line2="Technique" />

      <div className="space-y-0 w-[100vw] relative left-1/2 -translate-x-1/2 lg:w-auto lg:static lg:transform-none lg:-mx-10">
        <Marquee items={row1} direction="left" speed={12} />
        <Marquee items={row2} direction="right" speed={10} />
      </div>
    </section>
  )
}
