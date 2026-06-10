'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

function useNumberTicker(value: number, delay: number = 0, duration: number = 2) {
  const [current, setCurrent] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const started = useRef(false)

  useEffect(() => {
    if (!isInView || started.current) return
    started.current = true

    const timeout = setTimeout(() => {
      const startTime = performance.now()
      const endValue = value

      const tick = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        const eased = 1 - Math.pow(1 - progress, 3) // ease out cubic
        setCurrent(Math.round(eased * endValue))
        if (progress < 1) {
          requestAnimationFrame(tick)
        }
      }

      requestAnimationFrame(tick)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [isInView, value, delay, duration])

  return { current, ref }
}

interface NumberTickerProps {
  value: number
  className?: string
  delay?: number
  decimalPlaces?: number
  prefix?: string
  suffix?: string
}

export function NumberTicker({
  value,
  className,
  delay = 0,
  decimalPlaces = 0,
  prefix = '',
  suffix = '',
}: NumberTickerProps) {
  const { current, ref } = useNumberTicker(value, delay)

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {prefix}
      {current.toFixed(decimalPlaces)}
      {suffix}
    </span>
  )
}
