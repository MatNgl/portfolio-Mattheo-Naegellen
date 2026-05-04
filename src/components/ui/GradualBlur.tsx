interface GradualBlurProps {
  position?: 'top' | 'bottom'
  height?: number
  fromColor?: string
  toColor?: string
  className?: string
}

export default function GradualBlur({
  position = 'bottom',
  height = 120,
  fromColor = 'transparent',
  toColor = 'rgba(255,255,255,1)',
  className = '',
}: GradualBlurProps) {
  const gradient =
    position === 'bottom'
      ? `linear-gradient(to bottom, ${fromColor}, ${toColor})`
      : `linear-gradient(to top, ${fromColor}, ${toColor})`

  return (
    <div
      className={`absolute left-0 right-0 pointer-events-none z-20 ${className}`}
      style={{ [position]: 0, height, background: gradient }}
    />
  )
}
