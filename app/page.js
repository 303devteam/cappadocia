import AdvancedService from './components/advancedService'
import Navbar from './components/navbar'
import WelcomeSection from './components/welcomeSection'
import WhyUs from './components/whyUs' // Fix: Changed the import statement to match the correct casing

export default function Home() {
  return (
    <div className='container is-fluid p-0'>
      <Navbar />
      <WelcomeSection />
      <WhyUs/>
      <AdvancedService />
    </div>
  )
}
