'use client'

import { useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Check, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const contactItems = [
  { Icon: Mail, label: 'Email', value: 'info@ibk-miskolc.hu', href: 'mailto:info@ibk-miskolc.hu' },
  { Icon: MapPin, label: 'Iroda', value: 'Miskolc, Szemere u. 12.', href: '#' },
]

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' as any })
  const [form, setForm] = useState({ nev: '', email: '', telefon: '', uzenet: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      console.log('Form data:', form)
      setLoading(false)
      setSubmitted(true)
    }, 1000)
  }

  return (
    <section
      id="kapcsolat"
      ref={ref}
      className="bg-[#FFFFFF] relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-24 md:py-36">

        {/* Label */}

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">

          {/* Left: Advisor Info (Juhos Zsolt) */}
          <div className="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
              >
                <h2
                  className="font-inter font-bold text-[#0E0E0E] tracking-[-0.03em] leading-[1.0] mb-4"
                  style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
                >
                  Ingyenes<br />
                  <span className="text-[#991B1B]">konzultáció</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-[#6B6560] font-inter text-sm leading-relaxed"
              >
                Vegyük fel a kapcsolatot. Személyes tanácsadónk segít kiválasztani a céljainak legmegfelelőbb lehetőséget.
              </motion.p>
            </div>

            {/* Juhos Zsolt Advisor Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-white rounded-3xl border border-[#E0DDD7] shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch"
            >
              {/* Image side */}
              <div className="relative w-full md:w-2/5 h-64 md:h-auto min-h-[250px] bg-[#FFFFFF]">
                <Image
                  src="/Juhos_Zsolt_tanacsado.png"
                  alt="Juhos Zsolt tanácsadó"
                  fill
                  className="object-contain object-bottom p-2"
                  sizes="(max-width: 768px) 100vw, 20vw"
                />
              </div>

              {/* Detail side */}
              <div className="p-8 flex flex-col justify-between flex-1">
                <div>
                  <span className="bg-[#FEE2E2] text-[#991B1B] text-[9px] font-inter font-bold uppercase tracking-wider px-3 py-1 rounded-full inline-block mb-4">
                    Az Ön tanácsadója
                  </span>
                  <h4 className="font-inter font-bold text-2xl text-[#0E0E0E] mb-1">
                    Juhos Zsolt
                  </h4>
                  <p className="text-xs text-[#6B6560] font-inter uppercase tracking-wide">
                    Ingatlanszakértő & Mentor
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-[#E0DDD7] flex flex-col gap-3">
                  <a
                    href="tel:+36707012271"
                    className="flex items-center gap-3 group text-[#0E0E0E] hover:text-[#991B1B] transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#FEE2E2] flex items-center justify-center text-[#991B1B] group-hover:bg-[#991B1B] group-hover:text-white transition-all">
                      <Phone size={14} />
                    </div>
                    <div>
                      <p className="text-[10px] text-[#6B6560] uppercase tracking-wider leading-none mb-0.5">Mobil</p>
                      <span className="text-sm font-semibold font-inter">+36 70 701 2271</span>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Other Contacts & Info */}
            <div className="space-y-4">
              {contactItems.map(({ Icon, label, value, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-4 group bg-white/40 p-4 rounded-2xl border border-[#E0DDD7]/50 hover:bg-white hover:border-[#E0DDD7] transition-all"
                >
                  <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 transition-all duration-300 bg-white group-hover:bg-[#991B1B] text-[#991B1B] group-hover:text-white rounded-full border border-[#E0DDD7]" >
                    <Icon size={16} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[#6B6560] text-[10px] font-inter uppercase tracking-[0.15em] mb-0.5">{label}</p>
                    <p className="text-[#0E0E0E] font-inter text-sm font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -16 }}
                  className="bg-white p-8 md:p-12 shadow-xl border border-[#E0DDD7] rounded-3xl"
                >
                  <h3 className="font-playfair font-bold text-[#0E0E0E] text-2xl mb-8 tracking-tight">
                    Küldjön üzenetet
                  </h3>

                  <div className="grid md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="block text-[#6B6560] text-[10px] font-inter uppercase tracking-[0.15em] mb-2">
                        Teljes név *
                      </label>
                      <input
                        id="contact-nev"
                        name="nev"
                        type="text"
                        required
                        placeholder="Kovács János"
                        value={form.nev}
                        onChange={handleChange}
                        className="ibk-input"
                      />
                    </div>
                    <div>
                      <label className="block text-[#6B6560] text-[10px] font-inter uppercase tracking-[0.15em] mb-2">
                        Email *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        placeholder="kovacs@email.hu"
                        value={form.email}
                        onChange={handleChange}
                        className="ibk-input"
                      />
                    </div>
                  </div>

                  <div className="mb-5">
                    <label className="block text-[#6B6560] text-[10px] font-inter uppercase tracking-[0.15em] mb-2">
                      Telefonszám
                    </label>
                    <input
                      id="contact-telefon"
                      name="telefon"
                      type="tel"
                      placeholder="+36 30 000 0000"
                      value={form.telefon}
                      onChange={handleChange}
                      className="ibk-input"
                    />
                  </div>

                  <div className="mb-8">
                    <label className="block text-[#6B6560] text-[10px] font-inter uppercase tracking-[0.15em] mb-2">
                      Üzenet *
                    </label>
                    <textarea
                      id="contact-uzenet"
                      name="uzenet"
                      required
                      rows={5}
                      placeholder="Írja le miben segíthetünk..."
                      value={form.uzenet}
                      onChange={handleChange}
                      className="ibk-input resize-none"
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary flex-shrink-0 disabled:opacity-60"
                    >
                      <span className="flex items-center gap-2">
                        {loading ? (
                          <>
                            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                            </svg>
                            Küldés...
                          </>
                        ) : (
                          <>Üzenet küldése <ArrowUpRight size={15} /></>
                        )}
                      </span>
                    </button>
                    <p className="text-[#6B6560] text-xs font-inter">
                      Adatait bizalmasan kezeljük. Legkésőbb 24 órán belül válaszolunk.
                    </p>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-white p-8 md:p-12 shadow-xl border border-[#E0DDD7] rounded-3xl flex flex-col items-center justify-center py-24 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 250, delay: 0.1 }}
                    className="w-16 h-16 flex items-center justify-center mb-6 rounded-full"
                    style={{ background: '#FEE2E2', border: '2px solid #991B1B' }}
                  >
                    <Check size={28} style={{ color: '#991B1B' }} strokeWidth={2.5} />
                  </motion.div>
                  <h3 className="font-playfair text-3xl font-bold text-[#0E0E0E] mb-3">
                    Köszönjük!
                  </h3>
                  <p className="text-[#6B6560] font-inter text-base max-w-sm">
                    Üzenetét megkaptuk. Csapatunk 24 órán belül felveszi Önnel a kapcsolatot.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
