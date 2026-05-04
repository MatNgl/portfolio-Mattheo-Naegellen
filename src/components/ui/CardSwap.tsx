import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
  RefObject,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import gsap from 'gsap'

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

export interface CardSwapProps {
  width?: number | string
  height?: number | string
  cardDistance?: number
  verticalDistance?: number
  delay?: number
  pauseOnHover?: boolean
  skewAmount?: number
  easing?: 'linear' | 'elastic'
  children: ReactNode
}

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string
}

/* ------------------------------------------------------------------ */
/*  macOS browser chrome                                               */
/* ------------------------------------------------------------------ */

function BrowserChrome() {
  return (
    <div className="flex items-center h-7 bg-[#1e1e24] rounded-t-xl px-3 select-none shrink-0">
      <div className="flex items-center gap-[6px]">
        <span className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] border border-[#e0443e]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#febc2e] border border-[#dea123]" />
        <span className="w-[10px] h-[10px] rounded-full bg-[#28c840] border border-[#1aab29]" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="h-[20px] w-[55%] bg-[#2d2d35] rounded-md" />
      </div>
      <div className="w-[48px]" />
    </div>
  )
}

/* ------------------------------------------------------------------ */
/*  Card with browser chrome                                           */
/* ------------------------------------------------------------------ */

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, children, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 flex flex-col rounded-xl border border-white/10 bg-[#16161a] [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden] ${customClass ?? ''} ${rest.className ?? ''}`.trim()}
      style={{
        ...rest.style,
        boxShadow:
          '0 25px 60px -12px rgba(0,0,0,0.45), 0 8px 24px -8px rgba(93,57,93,0.18)',
      }}
    >
      <BrowserChrome />
      <div className="relative flex-1 overflow-hidden rounded-b-xl">
        {children}
      </div>
    </div>
  )
)
Card.displayName = 'Card'

type CardRef = RefObject<HTMLDivElement | null>

/* ------------------------------------------------------------------ */
/*  3D slot helpers                                                    */
/* ------------------------------------------------------------------ */

interface Slot {
  x: number
  y: number
  z: number
  zIndex: number
}

const makeSlot = (i: number, distX: number, distY: number, total: number): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
})

const placeNow = (el: HTMLElement, slot: Slot, skew: number) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  })

/* ------------------------------------------------------------------ */
/*  CardSwap component (original React Bits logic)                     */
/* ------------------------------------------------------------------ */

const CardSwap: React.FC<CardSwapProps> = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  skewAmount = 6,
  easing = 'elastic',
  children,
}) => {
  const config =
    easing === 'elastic'
      ? {
          ease: 'elastic.out(0.6,0.9)',
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: 'power1.inOut',
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        }

  const childArr = useMemo(
    () => Children.toArray(children) as ReactElement<CardProps>[],
    [children]
  )
  const refs = useMemo<CardRef[]>(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  )

  const order = useRef<number[]>(Array.from({ length: childArr.length }, (_, i) => i))
  const tlRef = useRef<gsap.core.Timeline | null>(null)
  const intervalRef = useRef<number>(0)
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const total = refs.length
    refs.forEach((r, i) =>
      r.current && placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount)
    )

    const swap = () => {
      if (order.current.length < 2) return

      const [front, ...rest] = order.current
      const elFront = refs[front].current!
      const tl = gsap.timeline()
      tlRef.current = tl

      tl.to(elFront, {
        y: '+=500',
        duration: config.durDrop,
        ease: config.ease,
      })

      tl.addLabel('promote', `-=${config.durDrop * config.promoteOverlap}`)
      rest.forEach((idx, i) => {
        const el = refs[idx].current!
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length)
        tl.set(el, { zIndex: slot.zIndex }, 'promote')
        tl.to(
          el,
          {
            x: slot.x,
            y: slot.y,
            z: slot.z,
            duration: config.durMove,
            ease: config.ease,
          },
          `promote+=${i * 0.15}`
        )
      })

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length)
      tl.addLabel('return', `promote+=${config.durMove * config.returnDelay}`)
      tl.call(
        () => {
          gsap.set(elFront, { zIndex: backSlot.zIndex })
        },
        undefined,
        'return'
      )
      tl.to(
        elFront,
        {
          x: backSlot.x,
          y: backSlot.y,
          z: backSlot.z,
          duration: config.durReturn,
          ease: config.ease,
        },
        'return'
      )

      tl.call(() => {
        order.current = [...rest, front]
      })
    }

    swap()
    intervalRef.current = window.setInterval(swap, delay)

    if (pauseOnHover) {
      const node = container.current!
      const pause = () => {
        tlRef.current?.pause()
        clearInterval(intervalRef.current)
      }
      const resume = () => {
        tlRef.current?.play()
        intervalRef.current = window.setInterval(swap, delay)
      }
      node.addEventListener('mouseenter', pause)
      node.addEventListener('mouseleave', resume)
      return () => {
        node.removeEventListener('mouseenter', pause)
        node.removeEventListener('mouseleave', resume)
        clearInterval(intervalRef.current)
      }
    }
    return () => clearInterval(intervalRef.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing])

  const rendered = childArr.map((child, i) =>
    isValidElement<CardProps>(child)
      ? cloneElement(child, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
        } as CardProps & React.RefAttributes<HTMLDivElement>)
      : child
  )

  return (
    <div
      ref={container}
      className="absolute top-1/2 left-1/2 lg:left-auto lg:right-0 -translate-y-1/2 -translate-x-1/2 lg:translate-x-[5%] [perspective:900px] overflow-visible origin-center lg:origin-center-right max-[768px]:scale-[0.85] max-[480px]:scale-[0.7]"
      style={{ width, height }}
    >
      {rendered}
    </div>
  )
}

export default CardSwap
