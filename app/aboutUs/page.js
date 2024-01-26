'use client'
import styled from "styled-components"
import { motion } from 'framer-motion'
import Navbar from "../components/navbar"
import Banner from "../components/banner"
import StatsSection from "../components/statsSection"
import AboutUsBanner from '../../public/bannerDefault.jpeg'
import { Section, Subsection, Paragraph } from "../components/aboutUs"
import { Title } from "../components/welcomeSection"
import Image from "next/image"
import Img1 from '../../public/au-1.jpeg'
import Img2 from '../../public/au-2.jpeg'
import Img3 from '../../public/au-3.jpeg'
import Img4 from '../../public/au-4.jpeg'
import Img5 from '../../public/au-5.jpeg'
import Img6 from '../../public/au-6.png'
import Icon1 from '../../public/au-icon1.png'
import Icon2 from '../../public/au-icon2.png'
import Icon3 from '../../public/au-icon3.png'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SectionImage1 = styled(Image)`
    margin-top: 200px;
    @media only screen and (max-width: 1300px) {
        margin-top: 50px;
        margin-right: 10px;
        width: 150px;
        height: 300px;
    }

    @media only screen and (min-width: 1023px) and (max-width: 1300px) {
        width: 200px;
        height: 330px;
    }
`;

const SectionImage2 = styled(Image)`
    margin-left: 20px;
    @media only screen and (max-width: 1300px) {
        margin: 0;
        width: 150px;
        height: 300px;
    }

    @media only screen and (min-width: 1023px) and (max-width: 1300px) {
        width: 200px;
        height: 330px;
    }
`;

const SubsectionV2 = styled(Subsection)`
    flex-direction: row;
    @media only screen and (max-width: 1300px) {
        flex-direction: row;
    }
`;

const InfoSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

const TextSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`


export default function AboutUs() {
    return(
        <>
            <Navbar />
            <Banner bannerText='About Us' img={AboutUsBanner.src} />
            <Section>
                <SubsectionV2 width='50%' alignitems='center' mobileflex='column'>
                    <SectionImage1 alt="img1" src={Img1.src} width={300} height={300}/>
                    <SectionImage2 alt="img2" src={Img2.src} width={300} height={300}/>
                </SubsectionV2>
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
            <Section style={{flexDirection: 'column'}}>
                <Title style={{textAlign: 'center'}} size='20px' lineheight='10px' mobilesize='20px' color='#4985c9'>Pride in professional service</Title>
                <Title style={{textAlign: 'center'}} size='30px' mobilesize='25px' color='black'>Personalised Care That You Can Depend</Title>
                <Section>
                    <motion.div
                        whileHover={{scale: 1.1}} 
                        transition={{type: 'spring', stiffness: 400, damping: 10}}
                    >
                        <Subsection alignitems='center'>
                            <Image alt="img-3" src={Img3.src} width={350} height={350}/>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='black'>Family Care</Title>
                        </Subsection>
                    </motion.div>
                    <motion.div               
                        whileHover={{scale: 1.1}} 
                        transition={{type: 'spring', stiffness: 400, damping: 10}}        
                    >
                        <Subsection alignitems='center'>
                            <Image alt="img-4" src={Img4.src} width={350} height={350}/>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='black'>Advanced Care</Title>
                        </Subsection>
                    </motion.div>
                    <motion.div
                        whileHover={{scale: 1.1}} 
                        transition={{type: 'spring', stiffness: 400, damping: 10}}
                    >
                        <Subsection alignitems='center'>
                            <Image alt="img-5" src={Img5.src} width={350} height={350}/>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='black'>Online Consultation</Title>
                        </Subsection>
                    </motion.div>
                </Section>
            </Section>
            <Section>
                <Subsection width='50%' alignitems='flex-start'>
                    <Title size='20px' lineheight='10px' mobilesize='20px' color='#4985c9'>Do You Have any Questions?</Title>
                    <Title size='30px' lineheight='50px' mobilesize='25px' color='black'>Frequently Asked Questiones</Title>
                    <Accordion style={{marginTop: '20px'}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <Title style={{fontWeight: 400, lineHeight: '25px'}} size='20px' lineheight='5px' mobilesize='18px' color='#4a4a4a'>How can cosmetic dentistry improve my smile?</Title>
                        </AccordionSummary>
                        <AccordionDetails>
                        <Paragraph>
                            A smile can be the first thing a person notices about you. If you are not confident with your smile, the dentists at Smile Dental Clinics can work with you to determine what dental care and procedures would work best to improve your smile and boost your self-confidence.
                        </Paragraph>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                            <Title style={{fontWeight: 400, lineHeight: '25px'}} size='20px' lineheight='5px' mobilesize='18px' color='#4a4a4a'>How often shoud I brush and floss my teeth?</Title>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Paragraph>
                                The dentists at Lagün Dental Clinics recommend following these steps for effective daily oral health care. Tooth brushing and flossing help control the plaque and bacteria that cause dental disease.
                            </Paragraph>
                            <Paragraph>
                                <strong>Tooth Brushing:</strong> Brushing your teeth at least twice a day is recommended for everyone. It is especially important to brush your teeth right before going to bed. The toothbrush you use should be ADA approved with soft bristles. Electronic toothbrushes are also recommended because they are easy to use and effectively remove plaque.
                            </Paragraph>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2-content"
                        id="panel2-header"
                        >
                            <Title style={{fontWeight: 400, lineHeight: '25px'}} size='20px' lineheight='5px' mobilesize='18px' color='#4a4a4a'>Is there a way to prevent stained or discolored teeth?</Title>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Paragraph>
                                The following are the two most widely used teeth whitening systems:
                            </Paragraph>
                            <Paragraph>
                                <strong>1. At-Home Teeth Whitening:</strong> Most at-home teeth whitening systems come in a gel form that is put into a custom-fitted mouth guard (also known as a tray) that is molded to the shape of your teeth. The gel-filled trays can be worn overnight while you sleep or during the day. The amount of time the trays are required to remain in your mouth depends, although typically, trays are worn twice a day for around 30 minutes each session. This type of whitening procedure can take several weeks before you see results.
                            </Paragraph>
                            <Paragraph>
                                <strong>2. In-Office Teeth Whitening:</strong> Teeth whitening performed at a dental office may require more than one visit, each lasting anywhere from 30 to 60 minutes. You will instantly see results with this type of procedure. The bleaching solution used by the dentist is applied to your teeth, and your gums are completely protected. Some patients experience tooth sensitivity after having their teeth bleached in a dental office, but this typically wears off within a few days.
                            </Paragraph>
                        </AccordionDetails>
                    </Accordion>
                </Subsection>
                <Subsection width='50%' alignitems='flex-end'>

                </Subsection>
            </Section>
            <StatsSection />
            <Section>
                <Subsection width='100%'>
                    <InfoSection>
                        <Image alt="icon1" src={Icon1.src} width={100} height={100}/>
                        <TextSection>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='#4985c9'>Results Are Instantaneous</Title>
                            <Paragraph width='100%' mobilewidth='100%'>
                                The Zoom whitening process uses a 25% hydrogen peroxide gel that is activated via a special UV light. You’ll see results immediately after the procedure, including measurements of your new tooth shade vs. your original. Your teeth will lose moisture during the procedure and be dehydrated, but will regain their moisture over the next several days. This is why it’s recommended to wait about a week before proceeding with any further cosmetic dentistry work, such as crowns or veneers.
                            </Paragraph>
                        </TextSection>
                    </InfoSection>
                    <InfoSection>
                        <Image alt="icon2" src={Icon2.src} width={80} height={80}/>
                        <TextSection>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='#4985c9'>Emergency dental care</Title>
                            <Paragraph width='100%' mobilewidth='100%'>
                                24/7 emergency dental care. Emergency treatments include: -Tooth extractions. -Root canals. -Treating knocked-out (avulsed) teeth.
                            </Paragraph>
                        </TextSection>
                    </InfoSection>
                    <InfoSection>
                        <Image alt="icon3" src={Icon3.src} width={100} height={100}/>
                        <TextSection>
                            <Title size='20px' lineheight='50px' mobilesize='20px' color='#4985c9'>Dental Surgery & Treatment</Title>
                            <Paragraph width='100%' mobilewidth='100%'>
                                Implant in a Day - Hollywood Smile - Zirconium Dental Veneers - Laminated Tooth Veneer - Porcelain Dental Veneers - E-Max Dental Veneer - Digital Smile Design - Orthodontics - Pediatric Dentistry - Aesthetic Filling - Root Canal Treatment - Teeth whitening - Braces Treatment - Wisdom Tooth Extraction - Transparent Plate Treatment - Pedodontics - Botox
                            </Paragraph>
                        </TextSection>
                    </InfoSection>
                </Subsection>
                <Subsection width='50%' alignitems='center'>
                    <Image alt="img-6" src={Img6.src} width={500} height={500}/>
                </Subsection>
            </Section>
        </>
    )
}