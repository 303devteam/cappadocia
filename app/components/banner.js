'use client'
import styled from "styled-components"
import { Title } from "./welcomeSection";
import Image from "next/image";

const BannerContainer = styled.div`
    position: relative;
    width: 100%;
    height: 40%;
    padding: 170px 150px 100px 100px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media only screen and (max-width: 1023px) {
        padding: 170px 140px 100px 10px;
    }
`;

const BannerImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
    
    @media only screen and (max-width: 1023px) {
        width: 100%;
        height: 100%;
    }
`;

export default function Banner(props) {
    return(
        <>
            <BannerContainer>
                <BannerImage 
                    src={props.img} 
                    alt='banner' 
                    width={10000} 
                    height={1000} />
                <Title size='40px' mobilesize='30px'>{props.bannerText}</Title>
            </BannerContainer>
        </>
    )
}