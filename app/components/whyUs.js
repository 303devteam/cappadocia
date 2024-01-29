'use client'
import { Section, Label, StyledImage, Paragraph } from "./comps"
import whyus1 from "../../public/whyus.jpg"
import whyus2 from "../../public/whyus1.jpeg"
import whyus3 from "../../public/whyus2.jpeg"

export default function WhyUs() {
    return(
        <>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='column'
                $alignitems='flex-start'
                $justifycontent='flex-start'
                $mobilealignitems='flex-start'
            >
                <Label
                    $fontsize='25px'
                    $mobilefontsize='20px'
                    $color='#4985c9'
                    $fontweight='800'
                >
                    Why Choose Us
                </Label>
                <Section
                    $padding='0'
                    $mobilepadding='0'
                    $width='100%'
                    $mobilewidth='100%'
                    $bgcolor='#f2f2f2'
                    style={{overflowX: 'scroll'}}
                >
                <Section
                    $width='100%'
                    $height='auto'
                    $flexdirection='row'
                    $tabflexdirection='row'
                    $mobilewidth='700px'
                    $mobileflexdirection='row'
                    $mobilealignitems='flex-start'
                    style={{alignSelf: 'flex-start'}}
                    $padding='0'
                    $tabpadding='50px 10px'
                    $mobilepadding='10px'
                >
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='100%'
                        $height='auto'
                        $flexdirection='column'
                        $padding='10px'
                        $mobilepadding='5px'
                    >
                        <StyledImage priority src={whyus1.src} width={1000} height={1000} alt="section-img"/>
                        <Label
                            $fontsize='25px'
                            $mobilefontsize='20px'
                            $tabfontsize='20px'
                            $color='gray'
                            $fontweight='600'
                            $mobilelineheight='25px'
                        >
                            Panoramic X-Rays
                        </Label>
                    </Section>
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='100%'
                        $height='auto'
                        $flexdirection='column'
                        $padding='10px'
                        $mobilepadding='5px'
                    >
                        <StyledImage priority src={whyus2.src} width={5000} height={5000} alt="section-img"/>
                        <Label
                            $fontsize='25px'
                            $mobilefontsize='20px'
                            $tabfontsize='20px'
                            $color='gray'
                            $fontweight='600'
                            $mobilelineheight='25px'
                        >
                            Intraoral Camera
                        </Label>
                    </Section>
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='100%'
                        $height='auto'
                        $flexdirection='column'
                        $padding='10px'
                        $mobilepadding='5px'
                    >
                        <StyledImage priority src={whyus3.src} width={1000} height={1000} alt="section-img"/>
                        <Label
                            $fontsize='25px'
                            $mobilefontsize='20px'
                            $tabfontsize='20px'
                            $color='gray'
                            $fontweight='600'
                            $mobilelineheight='25px'
                        >
                            Digital X-Rays
                        </Label>
                    </Section>
                </Section>
                </Section>
                <Label
                    $fontsize='30px'
                    $tabfontsize='25px'
                    $tablineheight='30px'
                    $mobilefontsize='25px'
                    $color='black'
                    $fontweight='800'
                    $lineheight='40px'
                    style={{marginTop: '30px'}}
                >
                    Your dental health is important to us.
                </Label>
                <Paragraph
                    $fontsize='16px'
                    $tabfontsize='16px'
                    $mobilefontsize='16px'
                    $color='#595959'
                    $fontweight='400'
                    $lineheight='20px'
                >
                    Our dental health is important to us. That’s why we take time to do a thorough exam using state-of-the-art x-rays to get a better understanding of your particular dental condition. Using the latest technology, we will monitor the health of your teeth, gums and mouth and be able to make a precise diagnosis and recommendations for any necessary treatments.
                </Paragraph>
            </Section>
        </>
    )
}