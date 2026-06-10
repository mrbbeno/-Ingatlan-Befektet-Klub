'use client'

const navLinks = [
  { href: '#szolgaltatasok', label: 'Szolgáltatások' },
  { href: '#rolunk', label: 'Rólunk' },
  { href: '#tagok', label: 'Klubtagság' },
  { href: '#referencia', label: 'Referenciák' },
  { href: '#kapcsolat', label: 'Kapcsolat' },
]

export function Footer() {
  return (
    <footer className="bg-[#0E0E0E]">
      {/* Main footer */}
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-20">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16">

          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <span className="font-playfair text-2xl font-bold text-white tracking-[-0.02em]">IBK</span>
              <div className="w-px h-5 bg-white/20" />
              <span className="text-white/40 text-xs font-inter tracking-[0.12em] uppercase">
                Ingatlan Befektető Klub
              </span>
            </div>
            <p className="text-white/40 font-inter text-sm leading-relaxed max-w-xs mb-8">
              Miskolc legtapasztaltabb ingatlanbefektetői csapata. Vásárlástól a kulcsrakész átadásig.
            </p>
            {/* Circular text badge */}
            <div className="flex items-center gap-4">
              <div className="relative w-[88px] h-[88px] flex-shrink-0">
                <svg viewBox="0 0 88 88" className="w-full h-full" style={{ animation: 'ibk-spin-text 14s linear infinite' }}>
                  <defs>
                    <path
                      id="circle-path"
                      d="M 44 44 m -32 0 a 32 32 0 1 1 64 0 a 32 32 0 1 1 -64 0"
                    />
                  </defs>
                  <text
                    fontSize="7.5"
                    fontFamily="Inter, sans-serif"
                    fontWeight="500"
                    letterSpacing="2"
                    fill="rgba(255,255,255,0.3)"
                  >
                    <textPath href="#circle-path">
                      MISKOLC · BEFEKTETÉS · INGATLAN · IBK ·
                    </textPath>
                  </text>
                </svg>
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ fontSize: 18 }}
                >
                  <span className="font-playfair font-bold text-white/60">IBK</span>
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="md:col-span-3 md:col-start-6">
            <p className="text-white/30 text-[10px] font-inter uppercase tracking-[0.2em] mb-6">Navigáció</p>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-white/60 text-sm font-inter hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 md:col-start-9">
            <p className="text-white/30 text-[10px] font-inter uppercase tracking-[0.2em] mb-6">Elérhetőség</p>
            <div className="space-y-3">
              {[
                '+36 30 123 4567',
                'info@ibk-miskolc.hu',
                'Miskolc, Szemere u. 12.',
              ].map((v, i) => (
                <p key={i} className="text-white/60 text-sm font-inter">{v}</p>
              ))}
            </div>
            <div
              className="mt-8 p-5 border border-white/10 rounded-2xl"
            >
              <p className="text-[#991B1B] text-[10px] font-inter font-semibold uppercase tracking-[0.15em] mb-1">
                Ingyenes felmérés
              </p>
              <p className="text-white/40 text-xs font-inter">
                Hívjon minket munkaidőben – szívesen segítünk.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-[11px] font-inter">
            © 2026 Ingatlan Befektető Klub. Minden jog fenntartva.
          </p>
          <p className="text-white/25 text-[11px] font-inter">
            Demo:{' '}
            <a
              href="https://optimaai.hu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#991B1B] hover:text-white transition-colors"
            >
              Optimaai
            </a>
          </p>
        </div>
      </div>

      <style>{`
        @keyframes ibk-spin-text {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </footer>
  )
}
