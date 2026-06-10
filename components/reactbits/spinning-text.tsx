'use client'

import { cn } from '@/lib/utils'

interface SpinningTextProps {
  text: string
  radius?: number
  fontSize?: number
  className?: string
  color?: string
  duration?: number
}

export function SpinningText({
  text,
  radius = 60,
  fontSize = 11,
  className,
  color = '#3d8b3d',
  duration = 8,
}: SpinningTextProps) {
  const chars = text.split('')
  const angleStep = 360 / chars.length

  return (
    <>
      <div
        className={cn('relative inline-flex items-center justify-center', className)}
        style={{
          width: radius * 2,
          height: radius * 2,
        }}
      >
        <div
          className="ibk-spin-text absolute w-full h-full"
          style={{ animationDuration: `${duration}s` }}
        >
          {chars.map((char, i) => {
            const angle = i * angleStep
            return (
              <span
                key={i}
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  fontSize,
                  color,
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  transform: `rotate(${angle}deg) translateY(-${radius - fontSize}px)`,
                  transformOrigin: '0 0',
                  userSelect: 'none',
                }}
              >
                {char}
              </span>
            )
          })}
        </div>
      </div>
      <style>{`
        @keyframes ibk-spin-text {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ibk-spin-text {
          animation: ibk-spin-text linear infinite;
        }
      `}</style>
    </>
  )
}
