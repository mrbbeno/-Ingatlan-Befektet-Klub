'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const testimonials = [
  {
    quote: 'Az Ingatlan Befektető Klub csapata rendkívül professzionálisan és hozzáértően segített nekünk az ingatlanvásárlásban. Gyors, megbízható és ügyfélközpontú hozzáállásuk miatt teljes szívből ajánljuk őket mindenkinek.',
    author: 'Kégl Ildikó',
    title: 'Befektető ügyfél, Miskolc',
    year: '2024',
  },
  {
    quote: 'Régóta kerestük a megfelelő befektetési lehetőséget Miskolcon, és az IBK csapata pontosan azt hozta, amire szükségünk volt. Szakértelmük és helyismeretük páratlan a régióban.',
    author: 'Dr. Károlyi Zoltán',
    title: 'Befektető, Észak-Kelet Magyarország',
    year: '2023',
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' as any })

  return (
    <section
      id="referencia"
      ref={ref}
      className="bg-[#FFFFFF] relative"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="border-t border-[#E0DDD7]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-24 md:py-36">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          className="flex items-center gap-4 mb-20"
        >
          <span className="text-[#991B1B] text-[11px] font-inter font-semibold tracking-[0.25em] uppercase">
            05 — Ügyfeleink mondták
          </span>
          <div className="flex-1 h-px bg-[#E0DDD7]" />
        </motion.div>

        {/* Two column testimonials */}
        <div className="grid lg:grid-cols-2 gap-0">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`py-12 md:py-16 ${i === 0 ? 'lg:pr-20 lg:border-r border-[#E0DDD7]' : 'lg:pl-20'} ${i === 1 ? 'border-t border-[#E0DDD7] lg:border-t-0' : ''}`}
            >
              {/* Year */}
              <div className="text-[#C8C4BC] font-inter text-[11px] tracking-[0.2em] uppercase mb-8">
                {t.year}
              </div>

              {/* Quote mark */}
              <div
                className="font-playfair text-[80px] leading-none text-[#E0DDD7] mb-4 select-none"
                aria-hidden
              >
                &quot;
              </div>

              {/* Quote text */}
              <blockquote
                className="font-inter italic font-medium text-[#0E0E0E] leading-[1.6] mb-10"
                style={{ fontSize: 'clamp(16px, 1.8vw, 20px)' }}
              >
                {t.quote}
              </blockquote>

              {/* Attribution */}
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-[#7F1D1D]" />
                <div>
                  <p className="text-[#0E0E0E] font-inter font-semibold text-sm">{t.author}</p>
                  <p className="text-[#6B6560] font-inter text-xs mt-0.5">{t.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom: review aggregate */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-16 pt-12 border-t border-[#E0DDD7] flex flex-col md:flex-row items-start md:items-center gap-6 justify-between"
        >
          <div className="flex items-center gap-6">
            <div>
              <div className="font-inter font-bold text-[#991B1B] text-4xl">{`5.0`}</div>
              <div className="text-[#6B6560] text-[11px] font-inter uppercase tracking-[0.12em] mt-1">Átlagos értékelés</div>
            </div>
            <div className="h-12 w-px bg-[#E0DDD7]" />
            <div>
              <div className="font-inter font-bold text-[#991B1B] text-4xl">{`100+`}</div>
              <div className="text-[#6B6560] text-[11px] font-inter uppercase tracking-[0.12em] mt-1">Elégedett ügyfél</div>
            </div>
          </div>
          <a href="#kapcsolat" className="btn-outline text-sm">
            <span>Legyen ön is ügyfelünk</span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
