import AdvancedService from './components/advancedService'
import Navbar from './components/navbar'
import WelcomeSection from './components/welcomeSection'
import WhyUs from './components/whyUs'
import AboutUs from './components/aboutUs'
import StatsSection from './components/statsSection'
import ServicesSection from './components/servicesSection'
import ContactUs from './components/contactsUs'
import Footer from './components/footer'

export default function Home() {
  return (
    <div className='container is-fluid p-0'>
      <Navbar />
      <WelcomeSection />
      <AboutUs />
      <StatsSection />
      <ServicesSection />
      <WhyUs />
      <AdvancedService />
      <ContactUs />
      <Footer />
    </div>
  )
}
