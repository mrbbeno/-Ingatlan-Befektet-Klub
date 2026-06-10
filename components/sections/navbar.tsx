'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#rolunk',        label: 'Rólunk' },
  { href: '#tagok',         label: 'Klubtagság' },
  { href: '#referencia',    label: 'Referenciák' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 inset-x-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-sm border-b border-[#DEDAD2]'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between"
          style={{ paddingTop: scrolled ? 16 : 24, paddingBottom: scrolled ? 16 : 24, transition: 'padding 0.4s ease' }}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            {/* Rounded logo mark */}
            <div
              className="w-10 h-10 bg-[#991B1B] flex items-center justify-center rounded-xl shadow-sm"
            >
              <span className="text-white font-playfair font-bold text-[14px]">IBK</span>
            </div>
            <span className="text-[#7A756E] text-[11px] font-inter tracking-[0.15em] uppercase hidden md:block">
              Ingatlan Befektető Klub
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[#0A0A0A] text-[12px] font-inter tracking-[0.08em] uppercase font-medium relative group"
              >
                {l.label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#991B1B] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a href="#kapcsolat" className="btn-primary px-5 py-2.5 text-[11px]">
              <span>Kapcsolat</span>
            </a>
          </div>

          {/* Mobile */}
          <button
            id="mobile-menu-btn"
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 top-0 z-40 bg-[#FFFFFF] border-b border-[#DEDAD2] pt-24 pb-10 px-8 shadow-2xl"
          >
            <button className="absolute top-6 right-8" onClick={() => setOpen(false)}>
              <X size={20} />
            </button>
            <nav className="flex flex-col">
              {navLinks.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setOpen(false)}
                  className="py-5 font-playfair text-3xl font-bold text-[#0A0A0A] border-b border-[#DEDAD2] hover:text-[#991B1B] transition-colors"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-8">
                <a href="#kapcsolat" className="btn-primary w-full justify-center" onClick={() => setOpen(false)}>
                  <span>Kapcsolat</span>
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
