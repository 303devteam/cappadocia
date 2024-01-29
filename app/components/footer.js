'use client'
import { Section, Label } from "./comps"
import { Facebook, X, Instagram, WhatsApp, Face } from '@mui/icons-material';
import Link from "next/link"
export default function Footer() {
    return(
        <>
            <Section
                $width='100%'
                $height='auto'
                $bgcolor='#032033'
                $flexdirection='row'
                $mobileflexdirection='column'
                $justifycontent='center'
                $alignitems='flex-start'
                $padding='50px'
                $mobilepadding='50px'
            >
                <Section
                    $width='auto'
                    $height='33%'
                    $bgcolor='#032033'
                    $flexdirection='column'
                    $mobileflexdirection='column'
                    $justifycontent='center'
                    $alignitems='flex-start'
                >
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='white'
                        $fontweight='800'
                    >
                        Departments
                    </Label>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dental Cleanings
                    </Label>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dental Implants
                    </Label>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Porcelain Veneers
                    </Label>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dentures & Partial Dentures
                    </Label>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Traditional Braces
                    </Label>
                </Section>
                <Section
                    $width='auto'
                    $height='33%'
                    $bgcolor='#032033'
                    $flexdirection='column'
                    $mobileflexdirection='column'
                    $justifycontent='center'
                    $alignitems='flex-start'
                >
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='white'
                        $fontweight='800'
                    >
                        Quick Links
                    </Label>
                    <Link href={'/aboutUs'}>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            About Us
                    </Label>
                    </Link>
                    <Link href={'/services'}>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            Services
                        </Label>
                    </Link>
                    <Link href={'/scheduleAppointment'}>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            Schedule Appointment
                        </Label>
                    </Link>
                    <Link href={'/doctors'}>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            Doctors
                        </Label>
                    </Link>
                </Section>
                <Section
                    $width='33%'
                    $height='auto'
                    $bgcolor='#032033'
                    $flexdirection='column'
                    $mobileflexdirection='column'
                    $justifycontent='center'
                    $alignitems='flex-start'
                >
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='white'
                        $fontweight='800'
                    >
                        Contact Us
                    </Label>
                    <Link href={`https://maps.app.goo.gl/9c4KLR7QqTwWMiYg7`} target="_blank">
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            Kayseri - Cappadocia
                        </Label>
                    </Link>
                    <Link href='tel:+905366115771'>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            Phone : +90 536 611 57 71
                        </Label>
                    </Link>
                    <Label
                        $fontsize='18px'
                        $tabfontsize='18px'
                        $mobilefontsize='18px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Opening Hours : 10:00 AM to 18:00 PM Monday to Saturday Sunday : Closed
                    </Label>
                    <Link href='mailto:info@cappadociahealth.com.tr'>
                        <Label
                            $fontsize='18px'
                            $tabfontsize='18px'
                            $mobilefontsize='18px'
                            $color='#595959'
                            $fontweight='500'
                            $lineheight='50px'
                            $link
                        >
                            info@cappadociahealth.com.tr
                        </Label>
                    </Link>
                </Section>
            </Section>
            <Section
                $width='100%'
                $height='auto'
                $padding='30px'
                $bgcolor='#031724'
                $flexdirection='row'
                $justifycontent='space-between'
                $mobileflexdirection='column-reverse'
            >
                <Label
                    $fontsize='18px'
                    $tabfontsize='18px'
                    $mobilefontsize='16px'
                    $color='white'
                    $fontweight='400'
                    $lineheight='20px'
                >
                    © 2023 Lagün Dent. All Rights Reserved
                </Label>
                <Section
                    $padding='0'
                    $mobilepadding='0'
                    $bgcolor='#031724'
                    $mobileflexdirection='row'
                >
                    <Link href={''}><Facebook style={{color: 'white', margin: '0px 10px', width: '30px', height: '30px', cursor: 'pointer'}} /></Link>
                    <Link href={''}><X style={{color: 'white', margin: '0px 10px', width: '30px', height: '30px', cursor: 'pointer'}}/></Link>
                    <Link href={'https://www.instagram.com/lagundent/'} target="_blank"><Instagram style={{color: 'white', margin: '0px 10px', width: '30px', height: '30px', cursor: 'pointer'}}/></Link>
                    <Link href={''}><WhatsApp style={{color: 'white', margin: '0px 10px', width: '30px', height: '30px', cursor: 'pointer'}}/></Link>
                </Section>
            </Section>
        </>
    )
}