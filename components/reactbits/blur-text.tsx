'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

interface BlurTextProps {
  text: string
  className?: string
  delay?: number
  animateBy?: 'words' | 'characters'
  direction?: 'top' | 'bottom'
  onAnimationComplete?: () => void
}

export function BlurText({
  text,
  className,
  delay = 0,
  animateBy = 'words',
  direction = 'bottom',
  onAnimationComplete,
}: BlurTextProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')

  const variants = {
    hidden: {
      opacity: 0,
      filter: 'blur(10px)',
      y: direction === 'bottom' ? 20 : -20,
    },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
    },
  }

  return (
    <motion.span
      ref={ref}
      className={cn('inline', className)}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      onAnimationComplete={onAnimationComplete}
    >
      {elements.map((el, i) => (
        <motion.span
          key={i}
          variants={variants}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.08,
            ease: 'easeOut',
          }}
          className={animateBy === 'words' ? 'inline-block mr-[0.25em]' : 'inline-block'}
        >
          {el}
        </motion.span>
      ))}
    </motion.span>
  )
}
