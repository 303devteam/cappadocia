'use client'
import styled from "styled-components";
import Image from "next/image";
import bannerImg from '../../public/banner01.jpg'

const HeroBody = styled.div`
    width: 100%;
    height: auto;
    padding-top: 70px;
    position: relative;
    display: flex;
    justify-content: flex-start;
`

export default function WelcomeSection() {
    return(
        <>
            <HeroBody>
                <Image style={{position: "absolute", zIndex: -1}} src={bannerImg.src} width={2000} height={2000}/>
                <p>ds</p>
            </HeroBody>
        </>
    )
}