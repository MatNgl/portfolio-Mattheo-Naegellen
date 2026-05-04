import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
}

const variants = {
  primary:
    'bg-primary text-white hover:bg-primary/80 shadow-lg shadow-primary/20 hover:shadow-primary/30',
  outline:
    'glass border-primary/15 text-white hover:bg-white/[0.08]',
  ghost:
    'text-white/70 hover:bg-white/[0.06] hover:text-white',
}

export default function MagneticButton({
  children,
  className = '',
  href,
  target,
  rel,
  onClick,
  variant = 'primary',
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 px-6 py-3 rounded-[14px] font-medium text-sm transition-all duration-250 cursor-pointer select-none active:scale-[0.97]'

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === '_blank' ? 'noopener noreferrer' : undefined)}
        className={`${base} ${variants[variant]} ${className}`}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
