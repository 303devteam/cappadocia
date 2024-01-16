'use client'
import styled from "styled-components";
import Image from "next/image";
import bannerImg from '../../public/banner01.jpg'

const HeroBody = styled.div`
    width: 100%;
    height: 6px;
    padding-top: 70px;
    position: relative;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`;

const HeroContent = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-items: flex-start;
    padding: 100px;
`;
const Title = styled.p`
    font-size: ${props => props.size};
    color: white;
    font-weight: 800;
    line-height: 60px;
    font-family: 'Montserrat';
    color: white;
`;

export default function WelcomeSection() {
    return(
        <>
            <HeroBody>
                <Image priority style={{height: '550px', objectFit: 'cover'}} alt="welcome-img" src={bannerImg.src} width={2000} height={2000}/>
                <HeroContent>
                    <Title size={'18px'}>Welcome to Dental Clinic</Title>
                    <Title size={'50px'}>Caring for Your Face {<br/>} and Your Teeth</Title>
                </HeroContent>
            </HeroBody>
        </>
    )
}