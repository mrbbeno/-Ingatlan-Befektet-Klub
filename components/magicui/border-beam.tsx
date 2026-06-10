'use client'

import { cn } from '@/lib/utils'

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 8,
  borderWidth = 1.5,
  colorFrom = '#3d8b3d',
  colorTo = '#4aab4a',
  delay = 0,
}: BorderBeamProps) {
  return (
    <>
      <div
        className={cn(
          'pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]',
          className
        )}
      >
        <div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `conic-gradient(from 0deg, transparent 0%, ${colorFrom} 10%, ${colorTo} 20%, transparent 30%)`,
            animation: `border-beam-spin ${duration}s linear ${-delay}s infinite`,
          }}
        />
        <div
          className="absolute rounded-[inherit]"
          style={{
            inset: `${borderWidth}px`,
            background: 'var(--ibk-card-bg, #111811)',
          }}
        />
      </div>
      <style>{`
        @keyframes border-beam-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  )
}
