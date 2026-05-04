import Counter from '../ui/Counter'
import AnimatedSection from '../shared/AnimatedSection'
import { stats } from '../../data/portfolio'

export default function Stats() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <AnimatedSection key={i} delay={i * 0.14}>
              <div className="glass-dark rounded-apple-lg p-8 text-center hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                <div className="text-4xl lg:text-5xl font-bold text-primary tabular-nums">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-text-muted text-sm font-medium tracking-wide">
                  {stat.label}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
