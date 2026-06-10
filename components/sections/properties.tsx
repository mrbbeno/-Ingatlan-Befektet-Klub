'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { Home, Maximize, MapPin, Tag, ArrowUpRight } from 'lucide-react'

const properties = [
  {
    id: 1,
    title: 'Modern Minimalista Villa',
    location: 'Miskolctapolca, Panoráma u.',
    price: '148 000 000 Ft',
    size: '185 m²',
    rooms: '5 szoba',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    tag: 'Új építésű',
    clubExclusive: true,
  },
  {
    id: 2,
    title: 'Exkluzív Belvárosi Penthouse',
    location: 'Miskolc, Szemere u.',
    price: '92 000 000 Ft',
    size: '110 m²',
    rooms: '3 szoba',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    tag: 'Befektetésre kiváló',
    clubExclusive: false,
  },
  {
    id: 3,
    title: 'Családi Ház Hatalmas Parkkal',
    location: 'Miskolc, Görömböly',
    price: '115 000 000 Ft',
    size: '220 m²',
    rooms: '6 szoba',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    tag: 'Nyugodt környezet',
    clubExclusive: true,
  },
]

export function Properties() {
  const ref = useRef(null)

  return (
    <section id="elado" ref={ref} className="bg-[#FFFFFF] py-24 md:py-36 relative overflow-visible">
      {/* Decorative background grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(200, 196, 188, 0.2) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(200, 196, 188, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Section title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-inter font-bold text-[#0E0E0E] text-4xl md:text-6xl tracking-[-0.03em] leading-none"
            >
              Kiemelt <span className="text-[#7F1D1D]">ajánlataink</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[#6B6560] font-inter text-sm max-w-md"
          >
            Klubtagjainknak elővásárlási joguk van a portfóliónkban található, piacon kívüli (off-market) ingatlanokra.
          </motion.p>
        </div>

        {/* Normal Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {properties.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#E0DDD7] hover:shadow-2xl hover:border-[#7F1D1D]/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <span className="bg-[#0B0B0B] text-white text-[10px] font-inter uppercase tracking-[0.1em] px-3 py-1.5 rounded-full font-semibold shadow-md">
                    {p.tag}
                  </span>
                  {p.clubExclusive && (
                    <span className="bg-[#7F1D1D] text-white text-[10px] font-inter uppercase tracking-[0.1em] px-3 py-1.5 rounded-full font-semibold shadow-md">
                      Klub exkluzív
                    </span>
                  )}
                </div>
              </div>

              {/* Card content */}
              <div className="p-8 flex flex-col flex-1 bg-white">
                <div className="flex items-center gap-2 text-[#6B6560] text-xs mb-3">
                  <MapPin size={12} className="text-[#7F1D1D]" />
                  <span>{p.location}</span>
                </div>

                <h3 className="font-inter font-bold text-[#0E0E0E] text-2xl mb-4 group-hover:text-[#7F1D1D] transition-colors">
                  {p.title}
                </h3>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 py-4 my-4 border-y border-[#E0DDD7] text-sm text-[#6B6560] font-inter">
                  <div className="flex items-center gap-2">
                    <Maximize size={14} className="text-[#7F1D1D]" />
                    <span>{p.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Home size={14} className="text-[#7F1D1D]" />
                    <span>{p.rooms}</span>
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="flex items-center justify-between mt-auto pt-2">
                  <div>
                    <span className="text-[10px] text-[#6B6560] font-inter uppercase tracking-[0.15em] block mb-0.5">
                      Irányár
                    </span>
                    <span className="font-inter font-bold text-xl text-[#0E0E0E]">
                      {p.price}
                    </span>
                  </div>
                  
                  <div className="w-10 h-10 bg-[#FFFFFF] group-hover:bg-[#7F1D1D] border border-[#E0DDD7] group-hover:border-[#7F1D1D] flex items-center justify-center rounded-full transition-all duration-300">
                    <ArrowUpRight size={16} className="text-[#6B6560] group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA to sign up */}
        <div className="mt-16 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex flex-col sm:flex-row items-center gap-6 p-8 bg-[#FFFFFF] rounded-3xl border border-[#E0DDD7] shadow-sm max-w-3xl mx-auto hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-sm font-inter text-[#6B6560] text-left">
              <strong className="text-[#0E0E0E] block mb-1">Még több zárt körű ajánlatot szeretne látni?</strong>
              Klubtagjaink hozzáférnek a teljes off-market adatbázisunkhoz, ahol további miskolci és észak-keleti ingatlanok találhatók.
            </p>
            <a href="#tagok" className="btn-primary flex-shrink-0">
              Klubtagság igénylése
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
