'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ArrowRight, Award } from 'lucide-react'

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen bg-[#FFFFFF] overflow-hidden">

      {/* Subtle squares grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 196, 188, 0.35) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 196, 188, 0.35) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12 min-h-screen flex flex-col">

        {/* Main content grid */}
        <div className="flex-1 grid lg:grid-cols-12 gap-8 items-center pt-28 pb-16">

          {/* Left: Typography */}
          <div className="lg:col-span-6 flex flex-col">

            {/* Main headline */}
            <div className="overflow-hidden -mb-4">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
              >
                <h1
                  className="font-playfair font-bold text-[#0A0A0A] leading-[0.93] tracking-[-0.03em] pb-8"
                  style={{ fontSize: 'clamp(52px, 8vw, 116px)' }}
                >
                  Ingatlan
                </h1>
              </motion.div>
            </div>
            <div className="overflow-hidden -mb-4">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.27 }}
              >
                <h1
                  className="font-playfair font-bold leading-[0.93] tracking-[-0.03em] pb-8"
                  style={{
                    fontSize: 'clamp(52px, 8vw, 116px)',
                    color: '#991B1B',
                  }}
                >
                  Befektető
                </h1>
              </motion.div>
            </div>
            <div className="overflow-hidden mb-4">
              <motion.div
                initial={{ y: '110%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.39 }}
              >
                <h1
                  className="font-playfair font-bold text-[#0A0A0A] leading-[0.93] tracking-[-0.03em] pb-8"
                  style={{ fontSize: 'clamp(52px, 8vw, 116px)' }}
                >
                  Klub.
                </h1>
              </motion.div>
            </div>

            {/* Subline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="text-[#6B6560] font-inter text-lg leading-relaxed max-w-md mb-12"
            >
              Tapasztalt befektetői csapat Miskolcon. Csatlakozzon zárt körünkhöz és legyen részese az exkluzív ingatlanlehetőségeknek.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a href="#tagok" className="btn-primary">
                Csatlakozzon a klubhoz
                <ArrowRight size={16} />
              </a>
              <a href="#elado" className="btn-outline">
                Eladó ingatlanok
              </a>
            </motion.div>
          </div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            className="hidden lg:block lg:col-span-6 relative"
          >
            {/* Orange frame accent */}
            <div
              className="absolute -top-3 -right-3 w-full h-full pointer-events-none z-0 rounded-3xl"
              style={{ border: '2px solid rgba(10,25,48,0.2)' }}
            />

            <div className="relative z-10 w-full h-[460px] lg:h-[600px] overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=85"
                alt="Prémium ingatlan Miskolcon"
                fill
                className="object-cover object-center"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Bottom gradient for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="absolute -bottom-8 -left-4 md:-left-10 bg-white/90 backdrop-blur-xl p-5 z-20 shadow-[0_24px_48px_rgba(10,25,48,0.2)] rounded-3xl border border-white/50 flex items-center gap-5"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#991B1B] to-[#7F1D1D] flex items-center justify-center flex-shrink-0 shadow-inner">
                <Award size={24} className="text-[#FEE2E2]" />
              </div>
              <div className="pr-4">
                <div className="font-playfair text-3xl font-bold text-[#0E0E0E] leading-none mb-1.5">15+</div>
                <div className="text-[#6B6560] text-[10px] font-inter font-bold tracking-[0.2em] uppercase">
                  Év Tapasztalat
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>


      </div>
    </section>
  )
}
