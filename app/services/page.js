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
import { Info } from "@mui/icons-material"
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { List } from "@mui/material"

const Icon = styled(Image)`
    width: 80px;
    height: 80px;
    display: flex;
    align-self: center;
`;

const InfoCard = styled.div`
    border-radius: 10px;
    flex: 1 1 25%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    padding: 20px;
    margin: 10px;
    transition: 300ms ease;

    @media only screen and (max-width: 1023px) {
        flex: 1 1 50%;
    }

    &:hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        transition: 300ms ease;
    }
`;

const ListItem = styled.div`
    display: flex;
    flex-direction: row;

`

export default function Services() {
    return(
        <>
            <Navbar />
            <Banner bannerText='Clinic Services' img={ServicesBanner.src} />
            <Section $flexdirection='column'>
                <Title size='20px' lineheight='10px' mobilesize='20px' color='#4985c9'>About us</Title>
                <Title size='30px' mobilesize='22px' color='black'>We Care About Your Health</Title>
                <div style={{
                    display: 'flex',
                    alignItems: 'stech',
                    flexWrap: 'wrap',
                }}>
                    <InfoCard>
                        <Icon src={Icon1.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>Dental Cleanings</Title>
                        <Paragraph>
                            Do you want to ensure a beautiful, healthy and long-lasting smile? Cleaning your teeth well at home is an important part of making it happen. By combining regular brushing and flossing with visits to your dentist at least twice a year, you’ll keep your smile healthy and help protect your smile from tooth decay and gum disease. During your professional cleanings, the hygienist uses professional tools, such as the ultrasonic, to remove tartar, stains, plaque and bacteria build-up that have accumulated between visits.
                        </Paragraph>
                    </InfoCard>
                    <InfoCard>
                        <Icon src={Icon2.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>Dental Implants</Title>
                        <Paragraph>
                            Unlike uncomfortable dentures or bridges, dental implants provide a foundation for replacement teeth that look, feel, and function just like natural teeth. Implants can also allow a person who has lost a tooth or multiple teeth regain the ability to eat and smile. You may also be eligible for a mini dental implant; we’ll take the time to discuss which option is better for your individual needs.
                        </Paragraph>
                    </InfoCard>
                    <InfoCard>
                        <Icon src={Icon3.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>Porcelain Veneers</Title>
                        <Paragraph>
                            Dental veneers, also commonly referred to as porcelain veneers, are thin shells of ceramic that are installed on the front of your teeth. People choose to get veneers to correct cracked, chipped, stained or misaligned teeth. Each veneer is designed differently for each person and is made from advanced materials that mimic the natural enamel of your teeth.
                        </Paragraph>
                    </InfoCard>
                    <InfoCard>
                        <Icon src={Icon4.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>We Care About Your Health</Title>
                        <Paragraph>
                            Dentures are removable, natural-looking replacements for teeth that can be made as either partial or full sets.
                        </Paragraph>
                    </InfoCard>
                    <InfoCard>
                        <Icon src={Icon5.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>Sealants</Title>
                        <Paragraph>
                            Think of dental sealants as a barrier against cavities. They’re a plastic material usually applied to the chewing surfaces of the back teeth both on top and bottom, where decay occurs most often.
                        </Paragraph>
                    </InfoCard>
                    <InfoCard>
                        <Icon src={Icon6.src} width={100} height={100}/>
                        <Title size='20px' lineheight='30px' mobilesize='18px' color='#404040'>Dentures & Partial Dentures</Title>
                        <Paragraph>
                            Crooked teeth are more than just a problem of aesthetics. They can also lead to stains and infections. When they are straightened using braces, it lowers your risk of cavities, improves your overall oral health and improves your smile. In addition, a correctly aligned bite can also help solve pain or other issues that affect the jaws.
                        </Paragraph>
                    </InfoCard>
                </div>
            </Section>
            <Section $flexdirection='row'>
                <Subsection width='50%'>
                    <Title size='20px' lineheight='30px' mobilesize='20px' color='#4985c9'>Traditional Braces</Title>
                    <Title lineheight='40px' size='30px' mobilesize='22px' color='black'>Yes, a healthy and beautiful smile is possible for you</Title>
                    <Paragraph style={{marginTop: '20px'}}>
                        Do missing or ill-fitting dentures have you avoiding certain foods? Do you hide your mouth when you smile or talk? Does this sound familiar? Then schedule a consultation so we can talk to you about dental implants.
                    </Paragraph>
                    <ListItem>
                        <CheckCircleOutlineIcon color="primary"/>
                        <Paragraph style={{marginLeft: '10px'}}>Permanent and stable like natural teeth</Paragraph>
                    </ListItem>
                    <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <Paragraph style={{marginLeft: '10px'}}>No need for messy adhesives</Paragraph>
                    </ListItem>
                    <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <Paragraph style={{marginLeft: '10px'}}>Eat the foods you want</Paragraph>
                    </ListItem>
                    <ListItem>
                        <CheckCircleOutlineIcon color="primary" />
                        <Paragraph style={{marginLeft: '10px'}}>Smile and talk naturally</Paragraph>
                    </ListItem>
                </Subsection>
                <Subsection width='50%'>

                </Subsection>
            </Section>
        </>
    )
}