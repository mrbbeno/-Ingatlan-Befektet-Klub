import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Ingatlan Befektető Klub – Miskolc | Tapasztalt befektetői csapat',
  description:
    'Az Ingatlan Befektető Klub tapasztalt befektetői csapata Miskolcon – ingatlan vásárlástól a kulcsrakész átadásig. 15+ év tapasztalat, 100+ eladott ingatlan.',
  keywords:
    'ingatlan befektetés, miskolc ingatlan, ingatlan klub, befektetői ingatlan, ingatlan vásárlás, kulcsrakész felújítás',
  openGraph: {
    title: 'Ingatlan Befektető Klub – Miskolc',
    description: 'Tapasztalt befektetői csapat Miskolcon – vásárlástól a kulcsrakész átadásig.',
    type: 'website',
    locale: 'hu_HU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hu" className={`${playfair.variable} ${inter.variable}`}>
      <body
        className="antialiased overflow-x-hidden"
        style={{ background: '#FFFFFF', color: '#0E0E0E', fontFamily: 'var(--font-inter)' }}
      >
        {children}
      </body>
    </html>
  )
}
