'use client'
import { Section, Label } from "./comps"

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
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dental Cleanings
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dental Implants
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Porcelain Veneers
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Dentures & Partial Dentures
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
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
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                        $link
                    >
                        About Us
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                        $link
                    >
                        Services
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                        $link
                    >
                        Schedule Appointment
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                        $link
                    >
                        Doctors
                    </Label>
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
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Kayseri - Cappadocia
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Phone : +90 536 611 57 71
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        Opening Hours : 10:00 AM to 18:00 PM Monday to Saturday Sunday : Closed
                    </Label>
                    <Label
                        $fontsize='20px'
                        $tabfontsize='20px'
                        $mobilefontsize='20px'
                        $color='#595959'
                        $fontweight='500'
                        $lineheight='50px'
                    >
                        info@cappadociahealth.com.tr
                    </Label>
                </Section>
            </Section>
            <Section
                $width='100%'
                $height='auto'
                $padding='20px'
                $bgcolor='#031724'
            >

            </Section>
        </>
    )
}