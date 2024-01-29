'use client'
import { useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Section, Label } from "./comps"
import styled from "styled-components"

const _Section = styled(Section)`
    &:not(:last-child) {
        border-right: 3px dotted white;

        @media only screen and (max-width: 768px) {
            width: 100%;
            border-right: none;
            border-bottom: 2px dotted white;
        }
    }
`


export default function StatsSection() {
    const section = useRef(null)
    const isInView = useInView(section)
    const [mobile, setMobile] = useState(true)

    useEffect(() => {
        if(typeof window != undefined) {
            setMobile(true)
        }
    }, [])

    return(
        <>
            <Section
                ref={section}
                $width='100%'
                $mobilewidth='100%'
                $height='auto'
                $mobileheight='auto'
                $bgcolor='#4985c9'
                $tabpadding='15px'
            >
                <_Section
                    $width='25%'
                    $mobilewidth='100%'
                    $bgcolor='transparent'
                    $flexdirection='column'
                    $padding='0'
                    $mobilepadding='10px'
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{  delay: 0.1 }}
                >
                    <Label
                        $color='white'
                        $fontsize='40px'
                        $mobilefontsize='30px'
                        $fontweight='600'
                        $tabfontsize='30px'
                    >
                        3
                    </Label>
                    <Label
                        $color='white'
                        $fontsize='25px'
                        $mobilefontsize='20px'
                        $tabfontsize='18px'
                        $fontweight='600'
                        $lineheight='30px'
                    >
                        Doctors
                    </Label>
                </_Section>
                <_Section
                    $width='25%'
                    $mobilewidth='100%'
                    $bgcolor='transparent'
                    $flexdirection='column'
                    $padding='0'
                    $mobilepadding='10px'
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{  delay: 0.2 }}
                >
                    <Label
                        $color='white'
                        $tabfontsize='30px'
                        $mobilefontsize='30px'
                        $fontsize='40px'
                        $fontweight='600'
                    >
                        +9200
                    </Label>
                    <Label
                        $color='white'
                        $fontsize='25px'
                        $fontweight='600'
                        $lineheight='30px'
                        $tabfontsize='18px'
                        $mobilefontsize='20px'
                    >
                        Happy Clients
                    </Label>
                </_Section>
                <_Section
                    $width='25%'
                    $mobilewidth='100%'
                    $bgcolor='transparent'
                    $flexdirection='column'
                    $padding='0'
                    $mobilepadding='10px'
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{  delay: 0.3 }}
                >
                    <Label
                        $color='white'
                        $fontsize='40px'
                        $fontweight='600'
                        $tabfontsize='30px'
                        $mobilefontsize='30px'
                    >
                        9800
                    </Label>
                    <Label
                        $color='white'
                        $fontsize='25px'
                        $fontweight='600'
                        $lineheight='30px'
                        $tabfontsize='18px'
                        $mobilefontsize='20px'
                    >
                        Total Operations
                    </Label>
                </_Section>
                <_Section
                    $width='25%'
                    $mobilewidth='100%'
                    $bgcolor='transparent'
                    $flexdirection='column'
                    $padding='0'
                    $mobilepadding='10px'
                    initial={{ opacity: 0, y: -100 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{  delay: 0.4 }}
                >
                    <Label
                        $color='white'
                        $fontsize='40px'
                        $fontweight='600'
                        $tabfontsize='30px'
                        $mobilefontsize='30px'
                    >
                        100%
                    </Label>
                    <Label
                        $color='white'
                        $fontsize='25px'
                        $fontweight='600'
                        $lineheight='30px'
                        $tabfontsize='18px'
                        $mobilefontsize='20px'
                    >
                        Assurance
                    </Label>
                </_Section>
            </Section>
        </>
    )
}