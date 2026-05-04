import { useEffect, useRef } from 'react'
import AnimatedSection from '../shared/AnimatedSection'
import Grainient from '../ui/Grainient'
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
}

const allSkills = Object.values(skills).flat()
const row1 = allSkills.filter((_, i) => i % 2 === 0)
const row2 = allSkills.filter((_, i) => i % 2 === 1)

// Wider range of offsets for more organic cloud feel
const offsets = [0, -22, 14, -8, 24, -18, 6, -28, 18, -10, 20, -14, 10, -24, 4, -20, 16, -6, 22, -12]

function SkillChip({ name, index }: { name: string; index: number }) {
  const slug = iconMap[name]
  const yOffset = offsets[index % offsets.length]

  return (
    <div
      className="flex-shrink-0 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-white/90 font-medium text-sm hover:bg-white/20 hover:scale-105 transition-all duration-300 cursor-default select-none"
      style={{ transform: `translateY(${yOffset}px)` }}
    >
      {slug && (
        <img
          src={`https://cdn.simpleicons.org/${slug}/ffffff`}
          alt={name}
          className="w-5 h-5"
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
    <div className="overflow-hidden py-10">
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
    <section id="skills" className="relative py-14 overflow-hidden">
      {/* Same Grainient as the hero */}
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

      <div className="relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="text-xs font-bold text-white/50 uppercase tracking-widest">Stack</span>
          <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-white leading-tight">
            Ce que je maîtrise
          </h2>
        </AnimatedSection>

        <div className="space-y-0">
          <Marquee items={row1} direction="left" speed={12} />
          <Marquee items={row2} direction="right" speed={10} />
        </div>
      </div>
    </section>
  )
}
