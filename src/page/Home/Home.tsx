import Hero from '@/components/modules/home/Hero'
import HowItWorksOverview from '@/components/modules/home/HowItWorksOverview'
import ServiceHighlights from '@/components/modules/home/ServiceHighlights'
import TestimonialsSection from '@/components/modules/home/TestimonialsSection'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HowItWorksOverview/>
        <ServiceHighlights/>
        <TestimonialsSection/>
    </div>
  )
}

export default Home