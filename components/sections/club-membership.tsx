'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'

const perks = [
  {
    title: 'Exkluzív ajánlatok',
    desc: 'Elsőként értesül a piacon nem hirdetett ingatlanokról.',
  },
  {
    title: 'Szakértői hálózat',
    desc: 'Közvetlen kapcsolat ügyvédekhez, mérnökökhöz, kivitelezőkhöz.',
  },
  {
    title: 'Folyamatos támogatás',
    desc: 'Személyes befektetési mentor és negyedéves piaci elemzések.',
  },
]

export function ClubMembership() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' as any })

  return (
    <section
      id="tagok"
      ref={ref}
      className="bg-[#0B0B0B] relative overflow-hidden"
    >
      {/* Architectural grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Large decorative text */}
      <div
        className="absolute right-0 bottom-0 font-playfair font-bold text-white/[0.02] leading-none select-none pointer-events-none"
        style={{ fontSize: 'clamp(120px, 20vw, 300px)' }}
        aria-hidden
      >
        IBK
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12 py-24 md:py-36">


        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left */}
          <div className="lg:col-span-6">
            <div className="overflow-hidden mb-8">
              <motion.h2
                initial={{ y: '100%' }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 0.1 }}
                className="font-playfair font-bold text-white tracking-[-0.03em] leading-[1.0]"
                style={{ fontSize: 'clamp(38px, 5.5vw, 80px)' }}
              >
                Klubtagság{' '}
                <span className="italic text-[#991B1B]">exkluzív lehetőségek</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/60 font-inter text-base leading-relaxed mb-12 max-w-lg"
            >
              Zárt befektetői körünk tagjai elsőként értesülnek az új lehetőségekről, exkluzív feltételekkel juthatnak ingatlanokhoz és személyes mentorálást kapnak.
            </motion.p>

            <motion.a
              href="#kapcsolat"
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="inline-flex items-center gap-3 bg-white text-[#0B0B0B] px-8 py-4 font-inter font-semibold text-sm tracking-[0.08em] uppercase hover:bg-[#991B1B] hover:text-white rounded-full transition-all duration-300 shadow-lg"
            >
              Érdekel a tagság
              <ArrowUpRight size={16} />
            </motion.a>
          </div>

          {/* Right: perks */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-0">
              {perks.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 24 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                  className="py-7 border-b border-white/10 group cursor-default"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[#991B1B] font-playfair font-bold text-4xl leading-none select-none">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="text-white font-inter font-semibold text-lg mb-1 tracking-tight group-hover:text-[#991B1B] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-white/50 font-inter text-sm leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="text-white/25 text-xs font-inter uppercase tracking-[0.15em] mt-8"
            >
              Korlátozott helyek · Ingyenes konzultáció
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
