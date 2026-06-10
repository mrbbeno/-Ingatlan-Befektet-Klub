'use client'

interface AnimatedGradientTextProps {
  children: React.ReactNode
  className?: string
}

export function AnimatedGradientText({ children, className }: AnimatedGradientTextProps) {
  return (
    <>
      <span
        className={`ibk-gradient-text ${className ?? ''}`}
        style={{
          backgroundImage:
            'linear-gradient(90deg, #3d8b3d 0%, #4aab4a 25%, #a8e0a8 50%, #4aab4a 75%, #3d8b3d 100%)',
          backgroundSize: '200% auto',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        {children}
      </span>
      <style>{`
        @keyframes ibk-gradient-shift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .ibk-gradient-text {
          display: inline;
          animation: ibk-gradient-shift 4s ease infinite;
        }
      `}</style>
    </>
  )
}
