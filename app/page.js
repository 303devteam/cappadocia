import Image from 'next/image'
import Navbar from './components/navbar'
import WelcomeSection from './components/welcomeSection'

export default function Home() {
  return (
    <div className='container is-fluid p-0'>
      <Navbar/>
      <WelcomeSection />
    </div>
  )
}
