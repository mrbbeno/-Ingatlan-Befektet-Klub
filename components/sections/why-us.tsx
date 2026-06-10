'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useTransform } from 'framer-motion'
import { Shield, Wrench, TrendingUp, Users, MapPin } from 'lucide-react'

// Simple NumberTicker using framer-motion useSpring
function AnimatedNumber({ value }: { value: number }) {
  const [isInView, setIsInView] = useState(false)
  const spring = useSpring(0, { duration: 2500, bounce: 0 })
  const display = useTransform(spring, (current) => Math.floor(current))

  useEffect(() => {
    if (isInView) {
      spring.set(value)
    }
  }, [isInView, spring, value])

  return (
    <motion.span
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, margin: '-50px' }}
    >
      {display}
    </motion.span>
  )
}

function StatBlock({ value, suffix = '', label, delay }: { value: number, suffix?: string, label: string, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay }}
      className="flex flex-col border-t border-[#3F0E0E] pt-4"
    >
      <div className="font-inter font-bold text-[#991B1B] text-6xl md:text-8xl leading-none tracking-tight">
        <AnimatedNumber value={value} />
        {suffix}
      </div>
      <div className="text-[#b8b4ac] font-inter text-[14px] uppercase tracking-widest mt-2">
        {label}
      </div>
    </motion.div>
  )
}

function BenefitRow({ icon: Icon, title, desc, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group flex flex-col md:flex-row items-start md:items-center py-5 border-b border-[#3F0E0E] hover:translate-x-2 transition-transform duration-300 ease-out cursor-default"
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-full border border-[#991B1B] flex items-center justify-center mr-5 mb-3 md:mb-0 group-hover:bg-[#991B1B] transition-colors duration-300">
        <Icon size={18} className="text-[#991B1B] group-hover:text-white transition-colors duration-300" />
      </div>
      <div className="flex-1 pr-4">
        <h4 className="font-inter font-medium text-[16px] text-[#f4f1eb] mb-1">{title}</h4>
        <p className="font-inter text-[13px] text-[#b8b4ac]">{desc}</p>
      </div>
    </motion.div>
  )
}

const benefits = [
  { icon: Shield, title: '15 év értékesítési tapasztalat', desc: 'Több száz sikeres tranzakció Miskolc és a régió teljes területén.' },
  { icon: Wrench, title: '30 év felújítási szaktudás', desc: 'Téglaépítéstől a kulcsrakész átadásig, saját kivitelező csapattal.' },
  { icon: TrendingUp, title: 'Folyamatosan bővülő portfólió', desc: 'Mindig friss ajánlatok, mielőtt még nyilvános hirdetés megjelenne.' },
  { icon: Users, title: 'Széles befektetői hálózat', desc: 'Zárt klub, ahol a tőke és a lehetőség találkozik.' },
  { icon: MapPin, title: 'Átfogó helyismeret', desc: 'Miskolc és Észak-Kelet Magyarország piacát belülről ismerjük.' }
]

export function WhyUs() {
  return (
    <section id="rolunk" className="bg-[#0A0A0A] relative w-full overflow-hidden py-16 md:py-24 font-inter text-[#f4f1eb]">

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        
        {/* Top Statement Bar */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="border-l-[3px] border-[#991B1B] pl-6 md:pl-8 mb-12 md:mb-16"
        >
          <h2 className="font-inter font-bold text-3xl md:text-5xl tracking-[-0.03em] text-[#f4f1eb] leading-[1.1]">
            Szakértelem,<br className="md:hidden" /> amiben megbízhat.
          </h2>
        </motion.div>

        {/* Split Layout */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 relative">
          
          {/* Diagonal Detail Line */}
          <div className="absolute top-0 right-0 lg:w-px lg:h-[130%] bg-[#5A1212] lg:origin-top-left lg:rotate-[18deg] hidden lg:block z-0 pointer-events-none" />

          {/* LEFT: 5 cols (Sticky Stats) */}
          <div className="lg:col-span-5 relative z-10 pb-12 lg:pb-0">
            <div className="lg:sticky lg:top-[120px] flex flex-col gap-8 md:gap-10">
              <StatBlock value={15} label="év tapasztalat" delay={0.15} />
              <StatBlock value={30} label="év szaktudás" delay={0.30} />
              <StatBlock value={100} suffix="+" label="sikeres tranzakció" delay={0.45} />
            </div>
          </div>

          {/* RIGHT: 7 cols (Benefit Rows) */}
          <div className="lg:col-span-7 relative z-10 flex flex-col pt-8 lg:pt-0">
            {benefits.map((b, i) => (
              <BenefitRow key={i} icon={b.icon} title={b.title} desc={b.desc} delay={0.2 + (i * 0.1)} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
