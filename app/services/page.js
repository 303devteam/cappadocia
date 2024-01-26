'use client'
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import ServicesBanner from '../../public/ban.jpeg'
import Image from "next/image"
import styled from "styled-components"
import { Section, Subsection, Paragraph } from "../components/aboutUs"
import { Title } from "../components/welcomeSection"
import Icon1 from '../../public/sr-icon1.svg'
import Icon2 from '../../public/sr-icon2.svg'
import Icon3 from '../../public/sr-icon3.svg'
import Icon4 from '../../public/sr-icon4.svg'
import Icon5 from '../../public/sr-icon5.svg'
import Icon6 from '../../public/sr-icon6.svg'

const Icon = styled(Image)`
    width: 80px;
    height: 80px;
    display: flex;
    align-self: center;
`;

export default function Services() {
    return(
        <>
            <Navbar />
            <Banner bannerText='Clinic Services' img={ServicesBanner.src} />
            <Section $flexdirection='column'>
                <Title size='20px' lineheight='10px' mobilesize='20px' color='#4985c9'>About us</Title>
                <Title size='30px' mobilesize='22px' color='black'>We Care About Your Health</Title>
                <Subsection style={{marginTop: 20}} $flexdirection='row' width='80%'>
                    <Subsection height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon1.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Dental Cleaning</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Do you want to ensure a beautiful, healthy and long-lasting smile? Cleaning your teeth well at home is an important part of making it happen. By combining regular brushing and flossing with visits to your dentist at least twice a year, you’ll keep your smile healthy and help protect your smile from tooth decay and gum disease. During your professional cleanings, the hygienist uses professional tools, such as the ultrasonic, to remove tartar, stains, plaque and bacteria build-up that have accumulated between visits.
                        </Paragraph>
                    </Subsection>
                    <Subsection style={{margin: '0px 10px', height: '100%', border: '1px solid gray'}} height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon2.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Dental Implants</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Unlike uncomfortable dentures or bridges, dental implants provide a foundation for replacement teeth that look, feel, and function just like natural teeth. Implants can also allow a person who has lost a tooth or multiple teeth regain the ability to eat and smile. You may also be eligible for a mini dental implant; we’ll take the time to discuss which option is better for your individual needs.
                        </Paragraph>
                    </Subsection>
                    <Subsection height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon3.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Porcelain Veneers</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Dental veneers, also commonly referred to as porcelain veneers, are thin shells of ceramic that are installed on the front of your teeth. People choose to get veneers to correct cracked, chipped, stained or misaligned teeth. Each veneer is designed differently for each person and is made from advanced materials that mimic the natural enamel of your teeth.
                        </Paragraph>
                    </Subsection>
                </Subsection>
                <Subsection $flexdirection='row' width='80%'>
                    <Subsection height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon4.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Dentures & Partial Dentures</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Dentures are removable, natural-looking replacements for teeth that can be made as either partial or full sets.
                        </Paragraph>
                    </Subsection>
                    <Subsection style={{margin: '0px 10px'}} height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon5.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Sealants</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Think of dental sealants as a barrier against cavities. They’re a plastic material usually applied to the chewing surfaces of the back teeth both on top and bottom, where decay occurs most often.
                        </Paragraph>
                    </Subsection>
                    <Subsection height='100%' width='33.33%'>
                        <Icon alt="icon" src={Icon6.src}  width={100} height={100}/>
                        <Title style={{alignSelf: 'center'}} size='20px' lineheight='50px' mobilesize='18px' color='black'>Traditional Braces</Title>
                        <Paragraph style={{textAlign: 'right'}}>
                            Crooked teeth are more than just a problem of aesthetics. They can also lead to stains and infections. When they are straightened using braces, it lowers your risk of cavities, improves your overall oral health and improves your smile. In addition, a correctly aligned bite can also help solve pain or other issues that affect the jaws.
                        </Paragraph>
                    </Subsection>
                </Subsection>
            </Section>
            <Section $flexdirection='row'>
                <Subsection width='50%'>
                    <Title size='20px' lineheight='30px' mobilesize='20px' color='#4985c9'>Trust us</Title>
                    <Title lineheight='40px' size='30px' mobilesize='22px' color='black'>Yes, a healthy and beautiful smile is possible for you</Title>
                    <Paragraph style={{marginTop: '20px'}}>
                        Do missing or ill-fitting dentures have you avoiding certain foods? Do you hide your mouth when you smile or talk? Does this sound familiar? Then schedule a consultation so we can talk to you about dental implants.
                    </Paragraph>
                </Subsection>
                <Subsection width='50%'>

                </Subsection>
            </Section>
        </>
    )
}