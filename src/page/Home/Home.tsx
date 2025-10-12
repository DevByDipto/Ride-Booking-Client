import CallToActionSection from '@/components/modules/home/CallToActionSection'
import Hero from '@/components/modules/home/Hero'
import HowItWorksOverview from '@/components/modules/home/HowItWorksOverview'
import ServiceHighlights from '@/components/modules/home/ServiceHighlights'
import TestimonialsSection from '@/components/modules/home/TestimonialsSection'

const Home = () => {
  return (
    <div>
        <Hero/>
        <HowItWorksOverview/>
        <ServiceHighlights/>
        <TestimonialsSection/>
        <CallToActionSection/>
    </div>
  )
}

export default Home