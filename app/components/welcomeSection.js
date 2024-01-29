'use client'
import { Label, StyledImage, Section } from "./comps";
import styled from "styled-components";
import bannerImg from '../../public/banner01.jpg'

const _Label = styled(Label)`
    position: absolute;
    left: 3%;
    top: 50%;

    @media only screen and (max-width: 1300px) {
        top: 70%;
    }
`

export default function WelcomeSection() {
    return(
        <>
            <Section
                $padding='70px 0px 0px 0px'
                $mobilepadding='70px 0px 0px 0px'
                $height='70vh'
                $mobileheight='40vh'
                $flexdirection='column'
                $justifycontent='center'
            >
                <StyledImage
                    priority
                    $mobilewidth='100%'
                    $mobileheight='100%'
                    alt="welcome" 
                    src={bannerImg.src} 
                    width={10000} 
                    height={10000}
                />
                <_Label 
                    $width='600px'
                    $fontsize='50px'
                    $mobilefontsize='30px'
                    $color='white'
                    $fontweight='800'
                >
                    Caring for Your Face and Your Teeth
                </_Label>
            </Section>
        </>
    )
}