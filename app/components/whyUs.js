'use client';
import styled from "styled-components";
import Image from "next/image";
import whyus from '../../public/whyus.jpg';
import whyus1 from '../../public/whyus1.jpeg';
import whyus2 from '../../public/whyus2.jpeg';


const WhyUsContainer = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    background-color: white;
    
    
`;



const WhyUsTextContainer = styled.div`
    position: absolute;
    top: 0;
    left: 250px; /* Adjust the left position for WhyUsText */
    z-index: 1; /* Ensure the text container is on top */
    margin-left: 340px;
    font-family: 'Montserrat-Bold';


`;


const WhyUsText = styled.h1`
    font-size: 35px;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    margin-top: 20px;
    color: #4985c9;
    font-weight: bold;
    
   
   
   
    
    
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-around; /* Spread evenly */
    align-items: center;
    width: 100%;
    margin-bottom: 40px;
   
   
    
`;


const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 20px; /* Adjust the spacing between images */
    font-family: 'Montserrat';
    transition: transform 0.3s ease;
    cursor: pointer;

    &:hover {
        transform: scale(1.1); /* Scale up on hover */
    }
`;


const BottomTextBold = styled.div`
    position: absolute;
    bottom: 110px; /* Adjust the distance from the bottom */
    left: 159px; /* Adjust the left position for BottomTextBold */
    font-size: 23px;
    font-family: 'Montserrat-Bold';
    font-weight: bold;
    
 `;

const BottomText = styled.div`
    position: absolute;
    bottom: 15px; /* Adjust the distance from the bottom */
    left: 161px; /* Adjust the left position for BottomTextBold */
    font-size: 16px;
    font-family: 'Montserrat';
    font-weight: normal;
    line-height: 30px;

    `;





export default function WhyUs() {
    return (
        <>
            <WhyUsContainer>
                <WhyUsTextContainer>
                    <WhyUsText>
                        Why choose us?
                    </WhyUsText>
                </WhyUsTextContainer>

                <ImageContainer>
                    <ImageWrapper>
                        <Image priority style = {{width: '300px', height: '200px'}} src={whyus}/>
                        <h3>Panoramic X-Ray</h3>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image priority style = {{width: '300px', height: '200px'}} src={whyus1}/>
                        <h3>Intraoral exam</h3>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image priority style = {{width: '300px', height: '200px'}} src={whyus2}/>
                        <h3>Digital X-Ray</h3>
                    </ImageWrapper>
                </ImageContainer>
                <BottomTextBold>
                    Your dental health is important to us.
                </BottomTextBold>

                <BottomText>

                    That’s why we take time to do a thorough exam using state-of-the-art x-rays to get a better understanding of your particular dental condition. 
                    Using the latest technology, we will monitor the health of your teeth, gums and mouth and be able to make a precise diagnosis and recommendations for any necessary treatments.    
                </BottomText>           
                   
            </WhyUsContainer>
            </>
    );
}



// Our dental health is important to us. That’s why we take time to do a thorough exam using state-of-the-art x-rays to get a better understanding of your particular dental condition. Using the latest technology, we will monitor the health of your teeth, gums and mouth and be able to make a precise diagnosis and recommendations for any necessary treatments.
