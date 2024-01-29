'use client'
import { Section, StyledImage, Label, Paragraph, StyledIcon } from "./comps"
import Link from "next/link"
import comp5 from "../../public/comp5.jpeg"
import icon1 from "../../public/icon1.png"
import icon2 from "../../public/icon2.png"
import icon3 from "../../public/icon3.png"
import Image from "next/image"

export default function ServicesSection() {
    return (
        <>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='row'
                $tabflexdirection='column-reverse'
                $padding='0'
                $mobilepadding='0'
            >
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $mobilewidth='100%'
                    $height='auto'
                    $padding='0'
                    $mobilepadding='0'
                >
                    <StyledImage style={{height: '880px'}} src={comp5.src} width={1000} height={1000} alt="section-img"/>
                </Section>
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $mobilewidth='100%'
                    $height='auto'
                    $flexdirection='column'
                    $alignitems='flex-start'
                    $mobilealignitems='flex-start'
                    $padding='40px'
                    $tabpadding='40px'
                >
                    <Label
                        $fontsize='25px'
                        $mobilefontsize='20px'
                        $color='#4985c9'
                        $fontweight='800'
                    >
                        What We do
                    </Label>
                    <Label
                        $fontsize='30px'
                        $tabfontsize='25px'
                        $tablineheight='25px'
                        $mobilefontsize='25px'
                        $color='black'
                        $fontweight='800'
                        $lineheight='40px'
                        $mobilelineheight='30px'
                    >
                        OPD, Medical and Surgical Services We Offer
                    </Label>
                    <Section
                        $width='100%'
                        $height='auto'
                        $flexdirection='column'
                        $alignitems='flex-start'
                        $mobilealignitems='flex-start'
                        $padding='0px'
                        $mobilepadding='0'
                    >
                        <StyledIcon
                            $width='50px'
                            $height='50px'
                            $mobilewidth='40px'
                            $mobileheight='40px'
                            $margin='30px 20px 0 0'
                            $mobilemargin='20px  0 0 0'
                            src={icon1.src} 
                            alt="icon1" 
                            width={100} 
                            height={100}
                        />
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='column'
                            $alignitems='flex-start'
                            $mobilealignitems='flex-start'
                            $padding='0'
                            $mobilepadding='0'
                        >
                            <Label
                                $color="gray"
                                $lineheight='25px'
                                $mobilefontsize='18px'
                                $fontsize='18px'
                                $fontweight='800'
                            >
                                    Experience
                            </Label>
                            <Paragraph $fontsize='16px'>
                                You’ll have the advantage of a team of highly skilled and knowledgeable professionals supporting you in your dental health every step of the way.
                            </Paragraph>
                        </Section>
                        <StyledIcon
                            $width='60px'
                            $height='50px'
                            $mobilewidth='50px'
                            $mobileheight='40px'
                            $margin='30px 20px 0 0'
                            $mobilemargin='20px  0 0 0'
                            src={icon2.src} 
                            alt="icon2" 
                            width={100} 
                            height={100}
                        />
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='column'
                            $alignitems='flex-start'
                            $mobilealignitems='flex-start'
                            $padding='0'
                            $mobilepadding='0'
                        >
                            <Label
                                $color="gray"
                                $lineheight='30px'
                                $mobilefontsize='18px'
                                $fontsize='18px'
                                $fontweight='800'
                            >
                                    Experience
                            </Label>
                            <Paragraph>
                                You’ll have the advantage of a team of highly skilled and knowledgeable professionals supporting you in your dental health every step of the way.
                            </Paragraph>
                        </Section>
                        <StyledIcon
                            $width='50px'
                            $height='50px'
                            $mobilewidth='40px'
                            $mobileheight='40px'
                            $margin='30px 20px 0 0'
                            $mobilemargin='20px  0 0 0'
                            src={icon3.src} 
                            alt="icon3" 
                            width={100} 
                            height={100}
                        />
                        <Section
                            $width='100%'
                            $height='auto'
                            $flexdirection='column'
                            $alignitems='flex-start'
                            $mobilealignitems='flex-start'
                            $padding='0'
                            $mobilepadding='0'
                        >
                            <Label
                                $color="gray"
                                $lineheight='30px'
                                $mobilefontsize='18px'
                                $fontsize='18px'
                                $fontweight='800'
                            >
                                    Experience
                            </Label>
                            <Paragraph>
                                You’ll have the advantage of a team of highly skilled and knowledgeable professionals supporting you in your dental health every step of the way.
                            </Paragraph>
                        </Section>
                    </Section>
                    <Link href={'/services'}>
                        <Label
                            $link
                            $fontsize='20px'
                            $mobilefontsize='20px'
                            $tabfontsize='20px'
                            $color='#4985c9'
                            $fontweight='800'
                        >
                            Discover our services
                        </Label>
                    </Link>
                </Section>
            </Section>
        </>
    )
}