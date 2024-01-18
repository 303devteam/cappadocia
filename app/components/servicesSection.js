'use client'
import styled from "styled-components"
import Image from "next/image"
import comp5 from "../../public/comp5.jpeg"
import icon1 from "../../public/icon1.png"
import icon2 from "../../public/icon2.png"
import icon3 from "../../public/icon3.png"
import { Title } from "./welcomeSection"
import { SectionDiv } from "./statsSection"
import { Subsection, Paragraph } from "./aboutUs"

const SectionImage = styled(Image)`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    align-self: center;
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: ${props => props.direction};
    align-items: flex-start;
    justify-content: center;
`;

export default function ServicesSection() {
    return (
        <>
            <SectionDiv style={{padding: 0}}>
                <Subsection style={{padding: 0}} width={'50%'}>
                    <SectionImage style={{margin: 0}} src={comp5.src} width={1000} height={1000} alt="section-img"/>
                </Subsection>
                <Subsection style={{padding: 30}} width={'50%'}>
                    <Title color="#4985c9" size='20px'>What We Do</Title>
                    <Title color="black" lineheight='30px' mobilesize='25px' size='30px'>OPD, Medical and Surgical Services We Offer</Title>
                    <TextSection style={{marginTop: '50px'}} direction='column'>
                        <TextSection style={{alignItems: 'center', marginBottom: '40px'}} direction='row'>
                            <Image style={{marginRight: '20px'}} src={icon1.src} width={100} height={100} alt="icon1"/>
                            <TextSection direction='column'>
                                <Title color="gray" lineheight='30px' mobilesize='18px' size='18px'>Experience</Title>
                                <Paragraph style={{margin: 0}}>
                                    You’ll have the advantage of a team of highly skilled and knowledgeable professionals supporting you in your dental health every step of the way.
                                </Paragraph>
                            </TextSection>
                        </TextSection>
                        <TextSection style={{alignItems: 'center', marginBottom: '40px'}} direction='row'>
                            <Image style={{marginRight: '20px'}} src={icon2.src} width={70} height={70} alt="icon2"/>
                            <TextSection direction='column'>
                                <Title color="gray" lineheight='30px' mobilesize='18px' size='18px'>Complete Care</Title>
                                <Paragraph style={{margin: 0}}>
                                    We provide a full suite of dental care to cover you and your family’s oral health needs.
                                </Paragraph>
                            </TextSection>
                        </TextSection>
                        <TextSection style={{alignItems: 'center', marginBottom: '40px'}} direction='row'>
                            <Image style={{marginRight: '20px'}} src={icon3.src} width={60} height={60} alt="icon3"/>
                            <TextSection direction='column'>
                                <Title color="gray" lineheight='30px' mobilesize='18px' size='18px'>Friendly Atmosphere</Title>
                                <Paragraph style={{margin: 0}}>
                                    Our dental team will treat you with care and kindness at every visit.
                                </Paragraph>
                            </TextSection>
                        </TextSection>
                        <Title color="#4985c9" link='true' lineheight='20px' mobilesize='20px' size='20px'>Our Services</Title>
                    </TextSection>
                </Subsection>
            </SectionDiv>
        </>
    )
}