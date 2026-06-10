import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import {
  IconHomeDollar,
  IconKey,
  IconChartBar,
  IconTool,
} from '@tabler/icons-react'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const services = [
  {
    title: 'Eladnék',
    description: 'Teljes körű felkészítés és professzionális marketing. Ingyenes felmérés, professzionális fotózás, drónfelvételek.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=85',
    icon: <IconHomeDollar className="h-4 w-4 text-[#7F1D1D]" />,
    href: '#kapcsolat',
    colSpan: 'md:col-span-2',
  },
  {
    title: 'Vásárolnék',
    description: 'Megkeressük az Ön igényeinek tökéletes otthont zárt, nyilvánosan nem hirdetett (off-market) adatbázisunkban.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=900&q=85',
    icon: <IconKey className="h-4 w-4 text-[#7F1D1D]" />,
    href: '#kapcsolat',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Befektetnék',
    description: 'Személyre szabott befektetési portfólió építése. Prémium ingatlanok, amelyek kiemelkedő hozamot garantálnak.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=85',
    icon: <IconChartBar className="h-4 w-4 text-[#7F1D1D]" />,
    href: '#tagok',
    colSpan: 'md:col-span-1',
  },
  {
    title: 'Építkeznék',
    description: 'Generálkivitelezés A-tól Z-ig. Kulcsrakész építkezések kiváló minőségű alapanyagokból, garanciával.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=85',
    icon: <IconTool className="h-4 w-4 text-[#7F1D1D]" />,
    href: '#kapcsolat',
    colSpan: 'md:col-span-2',
  },
]

export function Services() {
  return (
    <section id="szolgaltatasok" className="bg-[#FFFFFF] py-24 md:py-36 relative">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        
        <div className="mb-16">
          <h2 className="font-inter font-bold text-[#0E0E0E] text-4xl md:text-5xl lg:text-6xl tracking-[-0.03em] leading-none">
            Miben tudunk <span className="text-[#7F1D1D]">segíteni?</span>
          </h2>
        </div>

        <BentoGrid className="w-full md:auto-rows-[22rem]">
          {services.map((item, i) => (
            <BentoGridItem
              key={i}
              title={<span className="font-inter font-bold text-lg">{item.title}</span>}
              description={
                <div className="flex flex-col gap-4">
                  <span className="font-inter text-sm text-[#6B6560] leading-relaxed">{item.description}</span>
                  <a href={item.href} className="inline-flex items-center gap-2 text-[#991B1B] font-inter text-[11px] font-bold tracking-[0.1em] uppercase group-hover/bento:text-[#7F1D1D] transition-colors mt-1 w-fit">
                    Érdekel <ArrowRight size={14} className="group-hover/bento:translate-x-1 transition-transform" />
                  </a>
                </div>
              }
              header={
                <div className="flex flex-1 w-full h-full min-h-[8rem] relative rounded-xl overflow-hidden group">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                  {/* Subtle overlay for better contrast if needed */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              }
              icon={item.icon}
              className={item.colSpan}
            />
          ))}
        </BentoGrid>

      </div>
    </section>
  )
}
