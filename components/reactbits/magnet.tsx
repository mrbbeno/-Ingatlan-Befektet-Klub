'use client'

import { useRef, useState, MouseEvent } from 'react'

interface MagnetProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

export function Magnet({ children, strength = 40, className }: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)
    const dy = (e.clientY - cy) / (rect.height / 2)
    setPos({ x: dx * strength, y: dy * strength })
  }

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: pos.x === 0 && pos.y === 0 ? 'transform 0.5s ease' : 'transform 0.1s ease',
        willChange: 'transform',
        display: 'inline-block',
      }}
    >
      {children}
    </div>
  )
}
