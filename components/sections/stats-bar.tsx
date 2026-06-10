'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const stats = [
  { value: 15, suffix: '+', label: 'Év tapasztalat', sub: 'Ingatlan értékesítés' },
  { value: 30, suffix: '+', label: 'Év szaktudás',   sub: 'Felújítás & Kivitelezés' },
  { value: 100, suffix: '+', label: 'Eladott ingatlan', sub: 'Sikeres tranzakció' },
  { value: null, symbol: '∞', label: 'Miskolc & Régió', sub: 'Helyismeret' },
]

function AnimNum({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const started = useRef(false)
  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const dur = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1)
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * value))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, value])
  return <span ref={ref}>{count}{suffix}</span>
}

export function StatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <section ref={ref} className="bg-[#0F0F0F]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className={`flex flex-col py-10 px-8 ${i < stats.length - 1 ? 'border-r border-white/8' : ''} ${i >= 2 ? 'border-t border-white/8 lg:border-t-0' : ''}`}
              style={{ borderColor: 'rgba(255,255,255,0.07)' }}
            >
              <div
                className="font-playfair font-bold text-white mb-2 leading-none"
                style={{ fontSize: 'clamp(36px, 4.5vw, 60px)' }}
              >
                {s.value !== null
                  ? (inView ? <AnimNum value={s.value} suffix={s.suffix!} /> : `0${s.suffix}`)
                  : s.symbol}
              </div>
              <div className="text-white/80 font-inter font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-white/30 text-[10px] font-inter uppercase tracking-[0.14em]">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
