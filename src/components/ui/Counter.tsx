import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CounterProps {
  value: number
  suffix?: string
  prefix?: string
  className?: string
}

export default function Counter({ value, suffix = '', prefix = '', className = '' }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const spring = useSpring(count, { stiffness: 40, damping: 18 })

  useEffect(() => {
    if (isInView) count.set(value)
  }, [isInView, value, count])

  useEffect(() => {
    return spring.on('change', (latest) => {
      if (ref.current) {
        const rounded = Math.round(latest)
        ref.current.textContent =
          prefix +
          (rounded >= 1000 ? rounded.toLocaleString('fr-FR') : rounded.toString()) +
          suffix
      }
    })
  }, [spring, prefix, suffix])

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  )
}
