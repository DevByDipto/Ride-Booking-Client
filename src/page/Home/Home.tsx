import Hero from '@/components/modules/home/Hero'
import HowItWorksOverview from '@/components/modules/home/HowItWorksOverview'
import ServiceHighlights from '@/components/modules/home/ServiceHighlights'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HowItWorksOverview/>
        <ServiceHighlights/>
    </div>
  )
}

export default Home