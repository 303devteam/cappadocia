import Navbar from "../components/navbar"
import Banner from "../components/banner"
import AboutUsBanner from '../../public/bannerDefault.jpeg'

export default function AboutUs() {
    return(
        <>
            <Navbar />
            <Banner bannerText='About Us' img={AboutUsBanner.src} />
        </>
    )
}