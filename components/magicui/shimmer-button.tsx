'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  children: React.ReactNode
  className?: string
}

export function ShimmerButton({
  shimmerColor = 'rgba(255, 255, 255, 0.18)',
  shimmerSize = '0.1em',
  borderRadius = '4px',
  shimmerDuration = '2s',
  background = 'linear-gradient(135deg, #2d6a2d, #3d8b3d)',
  children,
  className,
  style,
  ...props
}: ShimmerButtonProps) {
  return (
    <>
      <button
        style={{ borderRadius, ...style }}
        className={cn(
          'group relative cursor-pointer overflow-hidden whitespace-nowrap px-8 py-3.5',
          'text-ibk-text font-inter font-medium text-sm tracking-wide',
          'border border-[#3d8b3d]/30 transition-all duration-300',
          'hover:border-[#4aab4a]/60 hover:shadow-[0_0_30px_rgba(61,139,61,0.35)]',
          'focus:outline-none focus:ring-2 focus:ring-[#3d8b3d]/30',
          'disabled:opacity-60 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {/* Background */}
        <div className="absolute inset-0" style={{ background, borderRadius }} />
        {/* Shimmer overlay */}
        <div className="absolute inset-0 overflow-hidden" style={{ borderRadius }}>
          <div className="shimmer-slide absolute inset-0 opacity-0 group-hover:opacity-100" />
        </div>
        {/* Content */}
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
      </button>
      <style>{`
        .shimmer-slide {
          background: linear-gradient(
            90deg,
            transparent 0%,
            ${shimmerColor} 50%,
            transparent 100%
          );
          transform: translateX(-100%);
          animation: ibk-shimmer-slide ${shimmerDuration} linear infinite;
        }
        @keyframes ibk-shimmer-slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(200%); }
        }
      `}</style>
    </>
  )
}
