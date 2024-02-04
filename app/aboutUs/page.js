'use client'
import Banner from "../components/banner"
import Navbar from "../components/navbar"
import bannerDefault from "../../public/bannerDefault.jpeg"
import StatsSection from "../components/statsSection"
import Footer from "../components/footer"
import styled from 'styled-components'
import { Label, Section, Paragraph, StyledImage, StyledIcon } from "../components/comps"
import img1 from '../../public/au-1.jpeg'
import img2 from '../../public/au-2.jpeg'
import img3 from '../../public/au-3.jpeg'
import img4 from '../../public/au-4.jpeg'
import img5 from '../../public/au-5.jpeg'
import img6 from '../../public/au-6.png'
import img7 from '../../public/au-7.jpeg'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import icon1 from '../../public/au-icon1.png'
import icon2 from '../../public/au-icon2.png'
import icon3 from '../../public/au-icon3.png'

const _Section = styled(Section)`
    @media only screen and (max-width: 1023px){
        position: absolute;
        top: 20%;
        left: 50%;
        bottom: 0%;
        z-index: -1;
        opacity: 0.3;
    }
`

export default function AboutUs() {
    return(
        <>
            <Navbar />
            <Banner img={bannerDefault.src} bannerText='About Us' />
            <Section
                $width='100%'
                $height='auto'
                $tabflexdirection='column'
            >
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $height='auto'
                    $mobileflexdirection='row'
                    $tabpadding='0'
                    $padding='0'
                    $mobilepadding='0'
                    style={{overflow: 'hidden'}}
                >
                    <StyledImage
                        style={{paddingTop: '150px', paddingRight: '20px'}} 
                        src={img1.src} 
                        alt="img1" 
                        width={1000} 
                        height={1000}
                        $maxheight='800px'
                        $tabmaxheight='600px'
                        $tabmaxwidth='300px'
                        $mobileminheight='300px'
                        $mobileminwidth='200px'
                    />
                    <StyledImage 
                        style={{minHeight: '150px'}}
                        src={img2.src} 
                        alt="img2" 
                        width={1000} 
                        height={1000} 
                        $maxheight='700px'
                        $tabmaxheight='500px'
                        $tabmaxwidth='300px'
                        $mobileminheight='300px'
                        $mobileminwidth='200px'
                    />
                </Section>
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $mobilepadding='0'
                    $height='auto'
                    $flexdirection='column'
                    $justifycontent='flex-start'
                    $alignitems='flex-start'
                    $mobilejustifycontent='flex-start'
                    $mobilealignitems='flex-start'
                >
                    <Label
                        $fontsize='25px'
                        $mobilefontsize='20px'
                        $color='#4985c9'
                        $fontweight='800'
                    >
                        About us
                    </Label>
                    <Label
                        $fontsize='30px'
                        $tabfontsize='25px'
                        $tablineheight='30px'
                        $mobilefontsize='25px'
                        $color='black'
                        $fontweight='800'
                        $lineheight='40px'
                    >
                        We care about your health
                    </Label>
                    <Paragraph>
                        Our dentists work as general dental practitioners (GDPs), usually in a high street practice, providing dental care to the general public. You can largely choose where you work but you may need to be flexible with your working hours.
                    </Paragraph>
                    <Label
                        $fontsize='30px'
                        $tabfontsize='25px'
                        $tablineheight='30px'
                        $mobilefontsize='25px'
                        $color='black'
                        $fontweight='800'
                        $lineheight='40px'
                        style={{marginTop: '20px'}}
                    >
                        Dental public health
                    </Label>
                    <Paragraph>
                        Dental public health is a specialty which involves assessing dental health needs and ensuring dental services meet those needs. Your work will look to improve the dental health of communities rather than individuals.
                    </Paragraph>
                </Section>
            </Section>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='column'
                $justifycontent='center'
                $alignitems='center'
                $bgcolor='#F8F8F8'
                $mobilealignitems='flex-start'
                $tabalignitems='flex-start'
            >
                <Label
                    $fontsize='25px'
                    $mobilefontsize='20px'
                    $color='#4985c9'
                    $fontweight='800'
                >
                    Pride in professional service
                </Label>
                <Label
                    $fontsize='30px'
                    $tabfontsize='25px'
                    $tablineheight='30px'
                    $mobilefontsize='25px'
                    $color='black'
                    $fontweight='800'
                    $lineheight='40px'
                >
                    Personalised Care That You Can Depend
                </Label>
                <Section
                    $padding='0'
                    $mobilepadding='0'
                    $width='100%'
                    $mobilewidth='100%'
                    $bgcolor='#f8f8f8'
                    style={{overflowX: 'scroll'}}
                >
                    <Section
                        $width='100%'
                        $height='auto'
                        $mobilewidth='1200px'
                        $flexdirection='row'
                        $mobileflexdirection='row'
                        $justifycontent='center'
                        $alignitems='center'
                        $padding='20px'
                        $tabpadding='10px'
                        $mobilepadding='10px'
                        $bgcolor='#F8F8F8'
                        style={{alignSelf: 'flex-start'}}
                    >
                        <Section
                            $width='33.33%'
                            $height='auto'
                            $flexdirection='column'
                            $mobileflexdirection='column'
                            $justifycontent='center'
                            $alignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='#F8F8F8'
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                        >
                            <StyledImage style={{padding: '10px', maxHeight: '500px', maxWidth: '500px'}} src={img3.src} alt="img3" width={1000} height={1000} />
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='black'
                                $fontweight='800'
                            >
                                Family Care
                            </Label>
                        </Section>
                        <Section
                            $width='33.33%'
                            $height='auto'
                            $flexdirection='column'
                            $mobileflexdirection='column'
                            $justifycontent='center'
                            $alignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='#F8F8F8'
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                        >
                            <StyledImage style={{padding: '10px', maxHeight: '500px', maxWidth: '500px'}} src={img4.src} alt="img4" width={1000} height={1000} />
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='black'
                                $fontweight='800'
                            >
                                Advanced Care
                            </Label>
                        </Section>
                        <Section
                            $width='33.33%'
                            $height='auto'
                            $flexdirection='column'
                            $mobileflexdirection='column'
                            $justifycontent='center'
                            $alignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='#F8F8F8'
                            whileHover={{scale: 1.05}}
                            transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                        >
                            <StyledImage style={{padding: '10px', maxHeight: '500px', maxWidth: '500px'}} src={img5.src} alt="img5" width={1000} height={1000} />
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='black'
                                $fontweight='800'
                            >
                                Online Consultations
                            </Label>
                        </Section>
                    </Section>
                </Section>
            </Section>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='column'
                $justifycontent='center'
                $alignitems='center'
                $mobilealignitems='flex-start'
                $tabalignitems='flex-start'
                $mobilepadding='0'
            >
                <Section
                    $padding='0'
                    $width='100%'
                    $height='auto'
                >
                    <Section
                        $width='50%'
                        $height='auto'
                        $flexdirection='column'
                        $justifycontent='flex-start'
                        $alignitems='flex-start'
                        $mobilealignitems='flex-start'
                        $mobilewidth='100%'
                        $mobileheight='auto'
                        $mobilepadding='0'
                    >
                        <Label
                            $fontsize='25px'
                            $mobilefontsize='20px'
                            $color='#4985c9'
                            $fontweight='800'
                            $lineheight='30px'
                            $mobilelineheight='20px'
                        >
                            Do you have any questions?
                        </Label>
                        <Label
                            $fontsize='30px'
                            $tabfontsize='25px'
                            $tablineheight='30px'
                            $mobilefontsize='25px'
                            $color='black'
                            $fontweight='800'
                            $lineheight='40px'
                            style={{marginBottom: '30px'}}
                        >
                            Frequently Asked Questiones
                        </Label>
                        <Accordion defaultExpanded>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Paragraph $fontweight='600' $color='black'>How can cosmetic dentistry improve my smile?</Paragraph>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Paragraph>A smile can be the first thing a person notices about you. If you are not confident with your smile, the dentists at Smile Dental Clinics can work with you to determine what dental care and procedures would work best to improve your smile and boost your self-confidence.</Paragraph>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Paragraph $fontweight='600' $color='black'>How often shoud I brush and floss my teeth?</Paragraph>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Paragraph>
                                    The dentists at Lagün Dental Clinics recommend following these steps for effective daily oral health care. Tooth brushing and flossing help control the plaque and bacteria that cause dental disease.
                                </Paragraph>
                                <Paragraph style={{marginTop: '10px'}}>
                                    <strong>Tooth Brushing: </strong>Brushing your teeth at least twice a day is recommended for everyone. It is especially important to brush your teeth right before going to bed. The toothbrush you use should be ADA approved with soft bristles. Electronic toothbrushes are also recommended because they are easy to use and effectively remove plaque.
                                </Paragraph>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2-content"
                                id="panel2-header"
                            >
                                <Paragraph $fontweight='600' $color='black'>Is there a way to prevent stained or discolored teeth?</Paragraph>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Paragraph>
                                    The following are the two most widely used teeth whitening systems:
                                </Paragraph>
                                <Paragraph style={{marginTop: '10px'}}>
                                    <strong>1. At-Home Teeth Whitening: </strong>Most at-home teeth whitening systems come in a gel form that is put into a custom-fitted mouth guard (also known as a tray) that is molded to the shape of your teeth. The gel-filled trays can be worn overnight while you sleep or during the day. The amount of time the trays are required to remain in your mouth depends, although typically, trays are worn twice a day for around 30 minutes each session. This type of whitening procedure can take several weeks before you see results.
                                </Paragraph>
                                <Paragraph style={{marginTop: '10px'}}>
                                    <strong>2. In-Office Teeth Whitening: </strong>Teeth whitening performed at a dental office may require more than one visit, each lasting anywhere from 30 to 60 minutes. You will instantly see results with this type of procedure. The bleaching solution used by the dentist is applied to your teeth, and your gums are completely protected. Some patients experience tooth sensitivity after having their teeth bleached in a dental office, but this typically wears off within a few days.
                                </Paragraph>
                            </AccordionDetails>
                        </Accordion>
                    </Section>
                    <Section
                        $width='50%'
                        $height='auto'
                        $flexdirection='column'
                        $justifycontent='center'
                        $alignitems='center'
                        $mobilewidth='100%'
                        $mobileheight='auto'
                        $mobilepadding='0'
                    >
                        <StyledImage style={{marginTop: '20px'}} $maxheight='600px' $maxwidth='100%' src={img7.src} alt="img7" width={1000} height={1000} />
                    </Section>
                </Section>
            </Section>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='row'
                $justifycontent='center'
                $alignitems='center'
                $mobilealignitems='flex-start'
                $tabalignitems='flex-start'
                $bgcolor='transparent'
            >
                <Section
                    $width='50%'
                    $height='auto'
                    $mobilewidth='100%'
                    $tabwidth='100%'
                    $flexdirection='column'
                    $justifycontent='flex-start'
                    $alignitems='flex-start'
                    $mobilealignitems='flex-start'
                    $mobilejustifycontent='flex-start'
                    $bgcolor='transparent'
                    $padding='0'
                    $mobilepadding='0'
                >
                     <Label
                        $fontsize='25px'
                        $mobilefontsize='20px'
                        $color='#4985c9'
                        $fontweight='800'
                    >
                        Trust Us
                    </Label>
                    <Label
                        $fontsize='30px'
                        $tabfontsize='25px'
                        $tablineheight='30px'
                        $mobilefontsize='25px'
                        $color='black'
                        $fontweight='800'
                        $lineheight='40px'
                    >
                        Keep Improving Our Dental Clinic
                    </Label>
                    <Section
                        $width='100%'
                        $height='auto'
                        $flexdirection='column'
                        $justifycontent='flex-start'
                        $alignitems='center'
                        $mobilealignitems='flex-start'
                        $tabalignitems='flex-start'
                        $padding='10px'
                        $mobilepadding='10px'
                        $bgcolor='transparent'
                    >
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='row'
                            $mobileflexdirection='row'
                            $justifycontent='flex-start'
                            $alignitems='center'
                            $mobilealignitems='flex-start'
                            $tabalignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='transparent'
                        >
                            <StyledIcon src={icon1.src} $width='100px' $height='100px' $mobilewidth='80px' $mobileheight='80px' alt="icon1" width={1000} height={1000} />
                            <Section
                                $flexdirection='column'
                                $mobileflexdirection='column'
                                $justifycontent='center'
                                $alignitems='flex-start'
                                $mobilealignitems='flex-start'
                                $padding='0'
                                $mobilepadding='0'
                                $bgcolor='transparent'
                            >
                                <Label
                                    $fontsize='20px'
                                    $tabfontsize='18px'
                                    $tablineheight='30px'
                                    $mobilefontsize='16px'
                                    $color='gray'
                                    $fontweight='800'
                                    $lineheight='40px'
                                >
                                    Keep Improving Our Dental Clinic
                                </Label>
                                <Paragraph>
                                    The Zoom whitening process uses a 25% hydrogen peroxide gel that is activated via a special UV light. You’ll see results immediately after the procedure, including measurements of your new tooth shade vs. your original. Your teeth will lose moisture during the procedure and be dehydrated, but will regain their moisture over the next several days. This is why it’s recommended to wait about a week before proceeding with any further cosmetic dentistry work, such as crowns or veneers.
                                </Paragraph>
                            </Section>
                        </Section>
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='row'
                            $mobileflexdirection='row'
                            $justifycontent='flex-start'
                            $alignitems='center'
                            $mobilealignitems='flex-start'
                            $tabalignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='transparent'
                        >
                            <StyledIcon src={icon2.src} $width='100px' $height='100px' $mobilewidth='80px' $mobileheight='80px' alt="icon2" width={1000} height={1000} />
                            <Section
                                $flexdirection='column'
                                $mobileflexdirection='column'
                                $justifycontent='center'
                                $alignitems='flex-start'
                                $mobilealignitems='flex-start'
                                $padding='0'
                                $mobilepadding='0'
                                $bgcolor='transparent'
                            >
                                <Label
                                    $fontsize='20px'
                                    $tabfontsize='18px'
                                    $tablineheight='30px'
                                    $mobilefontsize='16px'
                                    $color='gray'
                                    $fontweight='800'
                                    $lineheight='40px'
                                >
                                    Emergency dental care
                                </Label>
                                <Paragraph>
                                    24/7 emergency dental care. Emergency treatments include: -Tooth extractions. -Root canals. -Treating knocked-out (avulsed) teeth.
                                </Paragraph>
                            </Section>
                        </Section>
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='row'
                            $mobileflexdirection='row'
                            $justifycontent='flex-start'
                            $alignitems='center'
                            $mobilealignitems='flex-start'
                            $tabalignitems='center'
                            $padding='0'
                            $mobilepadding='0'
                            $bgcolor='transparent'
                        >
                            <StyledIcon src={icon3.src} $width='100px' $height='100px' $mobilewidth='80px' $mobileheight='80px' alt="icon3" width={1000} height={1000} />
                            <Section
                                $flexdirection='column'
                                $mobileflexdirection='column'
                                $justifycontent='center'
                                $alignitems='flex-start'
                                $mobilealignitems='flex-start'
                                $padding='0'
                                $mobilepadding='0'
                                $bgcolor='transparent'
                            >
                                <Label
                                    $fontsize='20px'
                                    $tabfontsize='18px'
                                    $tablineheight='30px'
                                    $mobilefontsize='16px'
                                    $color='gray'
                                    $fontweight='800'
                                    $lineheight='40px'
                                >
                                    Dental Surgery & Treatment
                                </Label>
                                <Paragraph>
                                    - Implant in a Day - Hollywood Smile - Zirconium Dental Veneers - Laminated Tooth Veneer - Porcelain Dental Veneers - E-Max Dental Veneer - Digital Smile Design - Orthodontics - Pediatric Dentistry - Aesthetic Filling - Root Canal Treatment - Teeth whitening - Braces Treatment - Wisdom Tooth Extraction - Transparent Plate Treatment - Pedodontics - Botox
                                </Paragraph>
                            </Section>
                        </Section>
                    </Section>
                </Section>
                <_Section
                    $width='auto'
                    $height='auto'
                    $flexdirection='column'
                    $justifycontent='flex-start'
                    $alignitems='center'
                    $mobilealignitems='flex-start'
                    $tabalignitems='flex-start'
                    $padding='0'
                    $mobilepadding='0'
                    $bgcolor='transparent'
                >
                    <StyledImage $imgwidth='400px' $imgheight='500px' src={img6.src} alt="img6" width={1000} height={1000} />
                </_Section>
            </Section>
            <StatsSection />
            <Footer />
        </>
    )
}