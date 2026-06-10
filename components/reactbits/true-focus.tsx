'use client'

import { useRef, useState, useEffect } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TrueFocusProps {
  sentence: string
  manualMode?: boolean
  blurAmount?: number
  borderColor?: string
  glowColor?: string
  animationDuration?: number
  pauseBetweenAnimations?: number
  className?: string
}

export function TrueFocus({
  sentence,
  manualMode = false,
  blurAmount = 5,
  borderColor = '#3d8b3d',
  glowColor = 'rgba(61, 139, 61, 0.35)',
  animationDuration = 0.5,
  pauseBetweenAnimations = 1,
  className,
}: TrueFocusProps) {
  const words = sentence.split(' ')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [focusedIndex, setFocusedIndex] = useState(-1)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!isInView || started || manualMode) return
    setStarted(true)
    let i = 0
    const animate = () => {
      setFocusedIndex(i)
      i++
      if (i < words.length) {
        setTimeout(animate, (animationDuration + pauseBetweenAnimations) * 500)
      } else {
        // After all words, set to all visible
        setTimeout(() => setFocusedIndex(-2), (animationDuration + pauseBetweenAnimations) * 500)
      }
    }
    setTimeout(animate, 200)
  }, [isInView, started, manualMode, words.length, animationDuration, pauseBetweenAnimations])

  return (
    <div ref={ref} className={cn('flex flex-wrap items-baseline gap-x-4 gap-y-2', className)}>
      {words.map((word, i) => {
        const isFocused = focusedIndex === i
        const isDimmed = focusedIndex >= 0 && focusedIndex < words.length && focusedIndex !== i
        const isAllVisible = focusedIndex === -2

        return (
          <span
            key={i}
            className="relative transition-all cursor-default select-none font-playfair font-bold text-ibk-text"
            style={{
              filter:
                !isInView
                  ? `blur(${blurAmount}px)`
                  : isAllVisible
                  ? 'blur(0)'
                  : isFocused
                  ? 'blur(0)'
                  : isDimmed
                  ? `blur(${blurAmount}px)`
                  : 'blur(0)',
              opacity: !isInView ? 0 : isAllVisible ? 1 : isFocused ? 1 : isDimmed ? 0.35 : 1,
              transition: `filter ${animationDuration}s ease, opacity ${animationDuration}s ease`,
            }}
            onMouseEnter={() => manualMode && setFocusedIndex(i)}
            onMouseLeave={() => manualMode && setFocusedIndex(-1)}
          >
            {isFocused && (
              <span
                className="absolute pointer-events-none"
                style={{
                  inset: '-4px -8px',
                  border: `2px solid ${borderColor}`,
                  boxShadow: `0 0 12px ${glowColor}, 0 0 24px ${glowColor}`,
                  borderRadius: '4px',
                }}
              />
            )}
            {word}
          </span>
        )
      })}
    </div>
  )
}
