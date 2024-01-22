'use client'
import styled from "styled-components"
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import AboutUsBanner from '../../public/bannerDefault.jpeg'
import { Section, Subsection, Paragraph } from "../components/aboutUs"
import { Title } from "../components/welcomeSection"
import Image from "next/image"
import Img1 from '../../public/au-1.jpeg'
import Img2 from '../../public/au-2.jpeg'

const SectionImage = styled(Image)`

    @media only screen and (max-width: 1023px) {
        justify-content: flex-end;
    }
`

export default function AboutUs() {
    return(
        <>
            <Navbar />
            <Banner bannerText='About Us' img={AboutUsBanner.src} />
            <Section>
                <Subsection width='50%' alignitems='center' mobileflex='column'>
                    <SectionImage style={{marginRight: 30, marginTop: 200}} src={Img1.src} width={300} height={300}/>
                    <SectionImage src={Img2.src} width={300} height={300}/>
                </Subsection>
                <Subsection width='50%' alignitems='flex-start'>
                    <Title size='20px' lineheight='10px' mobilesize='20px' color='#4985c9'>About us</Title>
                    <Title size='30px' mobilesize='25px' color='black'>We Care About Your Health</Title>
                    <Paragraph style={{marginTop: '10px'}} width='80%' mobilewidth='100%'>
                        Our dentists work as general dental practitioners (GDPs), usually in a high street practice, providing dental care to the general public. You can largely choose where you work but you may need to be flexible with your working hours.
                    </Paragraph>
                    <Title size='30px' mobilesize='25px' color='black'>Dental public health</Title>
                    <Paragraph style={{marginTop: '10px'}} width='80%' mobilewidth='100%'>
                        Dental public health is a specialty which involves assessing dental health needs and ensuring dental services meet those needs. Your work will look to improve the dental health of communities rather than individuals.
                    </Paragraph>
                </Subsection>
            </Section>
        </>
    )
}