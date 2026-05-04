import AnimatedSection from './AnimatedSection'

interface BigTitleProps {
  line1: string
  line2?: string
  className?: string
  delay?: number
}

export default function BigTitle({ line1, line2, className = '', delay = 0 }: BigTitleProps) {
  return (
    <AnimatedSection delay={delay} className={`mb-10 ${className}`}>
      <h2 className="font-black uppercase leading-none tracking-tight">
        <span className="block text-5xl lg:text-6xl xl:text-7xl text-white">
          {line1}
        </span>
        {line2 && (
          <span className="block text-5xl lg:text-6xl xl:text-7xl text-white/15">
            {line2}
          </span>
        )}
      </h2>
    </AnimatedSection>
  )
}
