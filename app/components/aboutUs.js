'use client'
import { Section, Label, StyledImage, Paragraph } from "./comps";
import SectionImg from '../../public/sec2-img.png'
import Link from "next/link";

export default function AboutUs() {
    return(
        <>
            <Section
                $width='100%'
                $mobilewidth='100%'
                $padding='40px'
                $mobilepadding='30px'
                $flexdirection='row'
                $tabflexdirection='column'
            >
                <Section
                    $width='50%'
                    $mobilewidth='100%'
                    $tabwidth='100%'
                    $padding='20px'
                    $mobilepadding='10px'
                    $flexdirection='column'
                    $alignitems='flex-start'
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
                        Dental Clinic promotes oral health in a new way
                    </Label>
                    <Paragraph
                        $fontsize='16px'
                        $tabfontsize='16px'
                        $mobilefontsize='16px'
                        $color='#595959'
                        $fontweight='400'
                        $lineheight='20px'
                        style={{marginBottom: '20px'}}
                    >
                        We wanted to create a modern oral health clinic focused on the dental experience that we wanted to make more accessible, affordable and cheaper. And of course – we offer high-quality treatments.
                    </Paragraph>
                    <Label
                        $fontsize='30px'
                        $tabfontsize='25px'
                        $tablineheight='30px'
                        $mobilefontsize='25px'
                        $color='black'
                        $fontweight='800'
                        $lineheight='40px'
                    >
                        We care for you
                    </Label>
                    <Paragraph
                        $fontsize='16px'
                        $tabfontsize='16px'
                        $mobilefontsize='16px'
                        $color='#595959'
                        $fontweight='400'
                        $lineheight='20px'
                    >
                        Our qualified dental nurses and dentists are dedicated and ready to provide superior treatment. The Nova Dental Clinic team understands the importance of clear communication with you as a patient and strives to provide high-quality guidelines and information as a part of a treatment. Our goal is for you to feel carefully listened to and adequately prepared to take care of your oral health on your own.
                    </Paragraph>
                    <Link href={'/aboutUs'}>
                        <Label
                            $link
                            $fontsize='20px'
                            $mobilefontsize='20px'
                            $color='#4985c9'
                            $fontweight='800'
                        >
                            Read more
                        </Label>
                    </Link>
                </Section>
                <Section
                    $width='50%'
                    $mobilewidth='100%'
                    $tabwidth='50%'
                    $padding='2s0px'
                    $mobilepadding='10px'
                    $flexdirection='column'
                >
                    <StyledImage style={{maxHeight: '550px'}} priority alt="img" src={SectionImg.src} width={1000} height={1000}/>
                </Section>
            </Section>
        </>
    )
}