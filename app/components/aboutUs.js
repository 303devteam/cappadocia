'use client'
import styled from "styled-components"
import Image from "next/image";
import Link from "next/link";
import { Title } from './welcomeSection';
import SectionImg from '../../public/sec2-img.png'

export const Section = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.backgroundcolor || '#fff'};
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction:  ${props => props.flexDirection || 'row'};
    padding: ${props => props.padding || '40px'};

    @media only screen and (max-width: 1023px) {
        flex-direction:  column;
        padding: 30px;
        
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        flex-direction: ${props => props.mobileflex || 'row'};
        padding: 30px;
}
   
`;
export const Subsection = styled.div`
    width: ${props => props.width || 'auto'};
    height: auto;
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    align-items: ${props => props.alignitems || 'flex-start'};
    justify-content: ${props => props.justifycontent || 'center'};
    padding: ${props => props.padding || '5px'};

    @media only screen and (max-width: 1023px) {
        width: 100%;
        flex-direction: ${props => props.mobileflex || 'column'};
        align-items: ${props => props.mobilealignitems || 'center'};
    }
`;

export const Paragraph = styled.p`
    font-family: 'Montserrat';
    color: gray;
    word-wrap: normal;
    margin-bottom: 20px;
    width: ${props => props.width || 'auto'};

    @media only screen and (max-width: 1023px) {
        width: ${props => props.mobilewidth || 'auto'};
    }    
`;

const SectionImage = styled(Image)`
    @media only screen and (max-width: 1023px) {
        width: 60%;
        height: 60%;
        margin-top: 20px;
        display: flex;
        align-self: center;
    }
`;

export default function AboutUs() {
    return(
        <>
            <Section>
                <Subsection width={'50%'}>
                    <Title color={'#4985c9'} lineheight={'40px'} size={'20px'} mobilesize={'20px'}>About us</Title>
                    <Title color={'black'} lineheight={'40px'} size={'30px'} mobilesize={'25px'}>Dental Health promotes oral health in a new way</Title>
                    <Paragraph>
                        We wanted to create a modern oral health clinic focused on the dental experience that we wanted to make more accessible, affordable and cheaper. And of course – we offer high-quality treatments.
                    </Paragraph>
                    <Title color={'black'} lineheight={'40px'} size={'30px'} mobilesize={'25px'}>We care for you</Title>
                    <Paragraph>
                        Our qualified dental nurses and dentists are dedicated and ready to provide superior treatment. The Nova Dental Clinic team understands the importance of clear communication with you as a patient and strives to provide high-quality guidelines and information as a part of a treatment. Our goal is for you to feel carefully listened to and adequately prepared to take care of your oral health on your own.
                    </Paragraph>
                    <Title link={'true'} color={'#4985c9'} lineheight={'40px'} size={'20px'} mobilesize={'20px'}><Link style={{color: '#4985c9'}} href='/aboutUs'>Discover More</Link></Title>
                </Subsection>
                <Subsection style={{display: 'flex', alignItems: 'flex-end'}} width={'50%'}>
                    <SectionImage src={SectionImg.src} alt={'section-img'} width={800} height={700} />
                </Subsection>
            </Section>
        </>
    )
}