'use client'
import styled, { css } from "styled-components";
import Image from "next/image";
import bannerImg from '../../public/banner01.jpg'
import { motion } from "framer-motion";

const HeroBody = styled.div`
    width: 100%;
    height: auto;
    padding-top: 70px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;

    @media only screen and (max-width: 1023px) {
        justify-content: flex-end;
    }
`;

const HeroContent = styled.div`
    position: absolute;
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: flex-start;
    padding: 100px;
    word-wrap: normal;

    @media only screen and (max-width: 1023px) {
        padding: 40px;
        width: 60%;
    }

    @media only screen and (max-width: 768px) {
        padding: 40px;
        width: 100%;
    }
`;

export const Title = styled(motion.p)`
    font-size: ${(props) => (props.size)};
    color: white;
    font-weight: 800;
    line-height: ${props => props.lineheight || '60px'};
    font-family: 'Montserrat';
    color: ${props => props.color || 'white'};
    text-decoration: ${props => props.link ? 'underline' : 'none'};
    cursor: ${props => props.link ? 'pointer' : 'auto'};

    @media only screen and (max-width: 768px) {
        font-size: ${(props) => (props.mobilesize)};
        line-height: 30px;
    }
`;

const BannerImg = styled(Image)`
    height: 600px;
    width: 100%;
    object-fit: cover;

    @media only screen and (max-width: 768px){
        height: 300px;
    }
`;

export default function WelcomeSection() {
    return(
        <>
            <HeroBody>
                <BannerImg priority src={bannerImg.src} alt="banner-img" width={1000} height={1000}/>
                <HeroContent>
                    <Title mobilesize={'16px'} size={'18px'}>Welcome to Dental Clinic</Title>
                    <Title mobilesize={'25px'} size={'50px'}>Caring for Your Face and Your Teeth</Title>
                </HeroContent>
            </HeroBody>
        </>
    )
}