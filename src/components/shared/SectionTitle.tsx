import AnimatedSection from './AnimatedSection'

interface SectionTitleProps {
  label: string
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionTitle({
  label,
  title,
  subtitle,
  centered = false,
  className = '',
}: SectionTitleProps) {
  return (
    <AnimatedSection className={`mb-14 ${centered ? 'text-center' : ''} ${className}`}>
      <span className="text-xs font-bold text-primary uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-2 text-3xl lg:text-4xl font-bold text-text leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base lg:text-lg text-text-muted leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
