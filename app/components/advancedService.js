'use client'
import { Label, StyledImage, Section } from "./comps"
import Img1 from '../../public/advanced1.jpeg'
import Img2 from '../../public/advanced2.jpeg'
import Img3 from '../../public/advanced3.jpeg'

export default function AdvancedService() {
    return(
        <>
            <Section
                $width='100%'
                $height='auto'
                $flexdirection='column'
                $alignitems='flex-start'
                $justifycontent='flex-start'
                $mobilealignitems='flex-start'
                $bgcolor='#f2f2f2'
            >
                <Label
                    $fontsize='25px'
                    $mobilefontsize='20px'
                    $color='#4985c9'
                    $fontweight='800'
                >
                   Advance Services
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
                    Why Choose Our Specialty Clinic?
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
                    $padding='0px'
                    $width='80%'
                    $tabwidth='100%'
                    $mobilewidth='680px'
                    $mobilepadding='0px'
                    style={{alignSelf: 'flex-start'}}
                    $bgcolor='#f2f2f2'
                    $flexdirection='row'
                    $mobileflexdirection='row'
                >
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='auto'
                        $height='auto'
                        $flexdirection='column'
                        $mobilepadding='0'
                        $padding='0'
                        style={{margin: '20px'}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                        $bgcolor='#f2f2f2'
                    >
                        <StyledImage priority src={Img1.src} width={1000} height={1000} alt="section-img"/>
                        <Section
                            $padding='0'
                            $mobilepadding='5px'
                            $bgcolor='#4985c9'
                            $width='100%'
                            style={{
                                boxShadow: '0px 0px 10px 0px black',
                            }}
                        >
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='white'
                                $fontweight='800'
                            >
                                Implants
                            </Label>
                        </Section>
                    </Section>
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='auto'
                        $height='auto'
                        $flexdirection='column'
                        $mobilepadding='0'
                        $padding='0'
                        style={{margin: '20px'}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                    >
                        <StyledImage priority src={Img2.src} width={1000} height={1000} alt="section-img"/>
                        <Section
                            $padding='0'
                            $mobilepadding='5px'
                            $bgcolor='#4985c9'
                            $width='100%'
                            style={{
                                boxShadow: '0px 0px 10px 0px black',
                            }}
                        >
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='white'
                                $fontweight='800'
                            >
                                Orthodontics
                            </Label>
                        </Section>
                    </Section>
                    <Section
                        $width='33%'
                        $tabwidth='100%'
                        $mobilewidth='auto'
                        $height='auto'
                        $flexdirection='column'
                        $padding='0'
                        $mobilepadding='0'
                        style={{margin: '20px'}}
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.5, type: 'spring', stiffness: 300}}
                    >
                        <StyledImage priority src={Img3.src} width={1000} height={1000} alt="section-img"/>
                        <Section
                            $padding='0'
                            $mobilewidth='auto'
                            $mobilepadding='5px'
                            $bgcolor='#4985c9'
                            $width='100%'
                            style={{
                                boxShadow: '0px 0px 10px 0px black',
                            }}
                        >
                            <Label
                                $fontsize='20px'
                                $mobilefontsize='18.4px'
                                $tabfontsize='20px'
                                $color='white'
                                $fontweight='800'
                            >
                                Cosmetic Surgery
                            </Label>
                        </Section>
                    </Section>
                </Section>
                </Section>
            </Section>
        </>
    )
}