'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '@/lib/utils'

interface WordPullUpProps {
  words: string
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'div'
}

export function WordPullUp({
  words,
  className,
  as: Tag = 'h1',
}: WordPullUpProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={cn('flex flex-wrap overflow-hidden', className)}
      aria-label={words}
    >
      {words.split(' ').map((word, i) => (
        <motion.span
          key={i}
          variants={itemVariants}
          className="mr-[0.25em] last:mr-0 inline-block"
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  )
}
