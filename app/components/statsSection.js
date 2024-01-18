'use client'
import styled from "styled-components"
import { motion } from 'framer-motion'
import { Title } from "./welcomeSection"
import { useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"

export const SectionDiv = styled.div`
    width: 100%;
    height: auto;
    background-color: ${props => props.backgroundcolor};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 20px 40px;

    @media only screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

const Card = styled.div`
    width: 25%;
    height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:not(:last-child) {
        border-right: 3px dotted white;

        @media only screen and (max-width: 768px) {
            width: 100%;
            border-right: none;
            border-bottom: 2px dotted white;
        }
    }

    @media only screen and (max-width: 768px) {
        height: 100px;
        padding: 10px 0px;
        justify-content: space-around;
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
            <SectionDiv ref={section} backgroundcolor='#4985c9'>
                <Card>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1}}
                        size='40px' 
                        color='white'
                    >3</Title>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.1 }}
                        lineheight='40px' 
                        mobilesize={'16px'}
                        size='20px' 
                        color='white'
                    >Doctors</Title>
                </Card>
                <Card>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{  delay: 0.2 }}
                        size='40px' 
                        color='white'
                    >+9200</Title>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{  delay: 0.2 }}
                        lineheight='40px' 
                        mobilesize={'16px'} 
                        size='20px' 
                        color='white'
                    >Happy Clients</Title>
                </Card>
                <Card>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{  delay: 0.3 }}
                        size='40px' 
                        color='white'
                    >9800</Title>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{  delay: 0.3 }}
                        lineheight='40px' 
                        mobilesize={'16px'} 
                        size='20px' 
                        color='white'
                    >Total Operations</Title>
                </Card>
                <Card>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{  delay: 0.4 }}
                        size='40px' 
                        color='white'
                    >100%</Title>
                    <Title
                        initial={{ opacity: 0, y: -100 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4 }}
                        lineheight='40px' 
                        mobilesize={'16px'} 
                        size='20px' 
                        color='white'
                    >Assurance</Title>
                </Card>
            </SectionDiv>
        </>
    )
}