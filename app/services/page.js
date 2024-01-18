import Navbar from "../components/navbar"
import Banner from "../components/banner"
import ServicesBanner from '../../public/ban.jpeg'

export default function Services() {
    return(
        <>
            <Navbar />
            <Banner bannerText='Clinic Services' img={ServicesBanner.src} />
        </>
    )
}