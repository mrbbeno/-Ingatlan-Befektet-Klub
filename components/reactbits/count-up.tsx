'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface CountUpProps {
  end: number
  start?: number
  duration?: number
  delay?: number
  prefix?: string
  suffix?: string
  className?: string
  separator?: string
  decimals?: number
}

export function CountUp({
  end,
  start = 0,
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className,
  separator = '',
  decimals = 0,
}: CountUpProps) {
  const [count, setCount] = useState(start)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const timeout = setTimeout(() => {
            const startTime = performance.now()
            const range = end - start

            const tick = (currentTime: number) => {
              const elapsed = currentTime - startTime
              const progress = Math.min(elapsed / (duration * 1000), 1)
              const eased = 1 - Math.pow(1 - progress, 3)
              setCount(start + eased * range)
              if (progress < 1) requestAnimationFrame(tick)
            }

            requestAnimationFrame(tick)
          }, delay * 1000)

          return () => clearTimeout(timeout)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, start, duration, delay])

  const formatted = count.toFixed(decimals)
  const withSeparator = separator
    ? formatted.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
    : formatted

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {withSeparator}
      {suffix}
    </span>
  )
}
