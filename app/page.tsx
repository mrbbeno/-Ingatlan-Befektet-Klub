'use client'

import { Navbar } from '@/components/sections/navbar'
import { Hero } from '@/components/sections/hero'
import { Services } from '@/components/sections/services'
import { WhyUs } from '@/components/sections/why-us'
import { Properties } from '@/components/sections/properties'
import { ClubMembership } from '@/components/sections/club-membership'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Properties />
      <ClubMembership />
      <Contact />
      <Footer />
    </main>
  )
}
