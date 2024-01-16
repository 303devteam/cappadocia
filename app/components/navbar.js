'use client';
import { useEffect, useState } from "react";
import { useAnimation, motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
    font-weight: 600;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
`;

const NavItem = styled.p`
    position: relative;
    color: gray;
    margin: 0px 15px;
    cursor: pointer;
    transition: 0.3s ease;
    font-family: 'Montserrat';

    @media only screen and (max-width: 768px) {
        display: none;
    }

    &:hover {
        color: black;
        transition: 0.3s ease;
    }
`;

export default function Navbar() {
    const controls = useAnimation()
    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(false)

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()

        if(previous < latest && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    return(
        <>
            <NavContainer
                variants={{
                    visible: {y: 0},
                    hidden: {y: -100}
                }}
                animate={hidden ? 'hidden' : 'visible'} 
                transition={{ duration: 0.2 , ease: 'easeInOut'}}
            >
                <Link href={`/`}><NavItem>HOME</NavItem></Link>
                <Link href={`/services`}><NavItem>SERVICES</NavItem></Link>
                <Link href={`/doctors`}><NavItem>DOCTORS</NavItem></Link>
                <Link href={`/timetable`}><NavItem>TIMETABLE</NavItem></Link>
            </NavContainer>
        </>
    )
}