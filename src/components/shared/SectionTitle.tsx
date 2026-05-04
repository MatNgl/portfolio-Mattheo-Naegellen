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
      <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">
        {label}
      </span>
      <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-white leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-white/40 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
}
