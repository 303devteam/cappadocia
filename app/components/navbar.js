'use client';
import { useEffect, useState } from "react";
import { useAnimation, motion, useScroll, useMotionValue, useMotionValueEvent } from "framer-motion";
import { ArrowRight } from "@mui/icons-material";
import styled from "styled-components";
import Link from "next/link";

const NavContainer = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    width: 100%;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;

    @media only screen and (max-width: 768px) {
        justify-content: flex-end;
        padding: 0px 25px;
    }
`;

const NavItem = styled(motion.p)`
    position: relative;
    color: ${(props) => (props.mobile ? 'white' : 'gray')};
    margin: ${(props) => (props.mobile ? '15px 0px' : '0px 15px')};
    cursor: pointer;
    transition: 0.3s ease;
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: ${(props) => (props.mobile ? '20px' : '16px')};

    @media only screen and (max-width: 768px) {
        display: ${(props) => (props.mobile ? 'block' : 'none')};
    }

    &:hover {
        color: ${(props) => (props.mobile ? 'white' : 'black')};
        transition: 0.3s ease;
    }
`;

const HamburgerMenu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: auto;
    width: auto;

    @media only screen and (min-width: 768px) {
        display: none;
    }
`;

const Line = styled(motion.div)`
    width: 30px;
    height: 3px;
    border-radius: 10px;
    background-color: #4d4d4d;
    margin: 2px;
`;

const Menu = styled(motion.div)`
    width: 100%;
    height: 100%;
    top: 70px;
    right: 0;
    bottom: 0;
    overflow: hidden;
    position: fixed;
    z-index: 9;
    background-color: #4985c9;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Background = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    z-index: 8;
`;

export default function Navbar() {
    const controls = useAnimation()
    const [open, setOpen] = useState(false)
    const {scrollY} = useScroll()
    const [hidden, setHidden] = useState(false)
    const [mobile, setMobile] = useState(null)

    useEffect(() => {
        if(typeof window != undefined) {
            setMobile(true)
        }
    }, [])

    useMotionValueEvent(scrollY, 'change', (latest) => {
        const previous = scrollY.getPrevious()

        if(previous < latest && latest > 150 && open == false && window.innerWidth > 768) {
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
                <Link href={`/aboutUs`}><NavItem>ABOUT US</NavItem></Link>
                <HamburgerMenu onClick={() => setOpen(!open)}>
                    <Line animate={open ? {rotate: 45, margin: 0, y: 1} : {}} />
                    <Line animate={open ? {display: 'none'} : {}} />
                    <Line animate={open ? {rotate: -45, margin: 0, y: -2} : {}} />
                </HamburgerMenu>
            </NavContainer>
            <Menu
                initial={{y: '-110%'}}
                transition={{duration: 0.5}}
                animate={open ? {y: 0} : {}}
            >
                <Link href={`/`}>
                    <NavItem
                        mobile={`${mobile}`}
                        initial={{opacity: 0, x: 0}}
                        transition={{delay: 0.1}}
                        animate={open ? {opacity: 1, x: 0}: {}}
                    >
                        HOME
                    </NavItem>
                </Link>
                <Link href={`/services`}>
                    <NavItem
                        mobile={`${mobile}`}
                        initial={{opacity: 0, x: 0}}
                        transition={{delay: 0.2}}
                        animate={open ? {opacity: 1, x: 0}: {}}
                    >
                        SERVICES
                    </NavItem>
                </Link>
                <Link href={`/doctors`}>
                    <NavItem
                        mobile={`${mobile}`}
                        initial={{opacity: 0, x: 0}}
                        transition={{delay: 0.3}}
                        animate={open ? {opacity: 1, x: 0}: {}}
                    >
                        DOCTORS
                    </NavItem>
                </Link>
                <Link href={`/timetable`}>
                    <NavItem
                        mobile={`${mobile}`}
                        initial={{opacity: 0, x: 0}}
                        transition={{delay: 0.4}}
                        animate={open ? {opacity: 1, x: 0}: {}}
                    >
                        TIMETABLE
                    </NavItem>
                </Link>
                <Link href={`/aboutUs`}>
                    <NavItem
                        mobile={`${mobile}`}
                        initial={{opacity: 0, x: 0}}
                        transition={{delay: 0.4}}
                        animate={open ? {opacity: 1, x: 0}: {}}
                    >
                        ABOUT US
                    </NavItem>
                </Link>
            </Menu>
            {open ? <Background/> : null}
        </>
    )
}