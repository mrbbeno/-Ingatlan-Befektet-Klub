'use client'

import { cn } from '@/lib/utils'
import { useEffect, useState } from 'react'

interface Meteor {
  id: number
  top: string
  left: string
  width: number
  speed: number
  delay: number
}

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteors, setMeteors] = useState<Meteor[]>([])

  useEffect(() => {
    const generated = Array.from({ length: number }, (_, i) => ({
      id: i,
      top: `${Math.random() * 40}%`,
      left: `${Math.random() * 100}%`,
      width: Math.random() * 1 + 0.5,
      speed: Math.random() * 8 + 6,
      delay: Math.random() * 6,
    }))
    setMeteors(generated)
  }, [number])

  return (
    <>
      <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
        {meteors.map((meteor) => (
          <span
            key={meteor.id}
            className="absolute ibk-meteor"
            style={{
              top: meteor.top,
              left: meteor.left,
              width: `${meteor.width}px`,
              height: `${meteor.width * 100}px`,
              background: `linear-gradient(to bottom, rgba(61,139,61,0.9), rgba(61,139,61,0))`,
              boxShadow: `0 0 ${meteor.width * 4}px rgba(61,139,61,0.4)`,
              borderRadius: '50%',
              transform: 'rotate(215deg)',
              animationDuration: `${meteor.speed}s`,
              animationDelay: `${meteor.delay}s`,
            }}
          />
        ))}
      </div>
      <style>{`
        @keyframes ibk-meteor-fall {
          0% {
            transform: rotate(215deg) translateX(0);
            opacity: 0;
          }
          5% { opacity: 0.7; }
          80% { opacity: 0.3; }
          100% {
            transform: rotate(215deg) translateX(-700px);
            opacity: 0;
          }
        }
        .ibk-meteor {
          animation-name: ibk-meteor-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </>
  )
}
