'use client';
import styled from "styled-components";
import Image from "next/image";
import advanced1 from '../../public/advanced1.jpeg';
import advanced2 from '../../public/advanced2.jpeg';
import advanced3 from '../../public/advanced3.jpeg';
const AdvancedServiceContainer = styled.div`
    width: 100%;
    height: 60vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    background-color: white;
`;

const HeaderText = styled.div`
    position: absolute;
    top: 10px;
    left: 300px; /* Adjust the left position for WhyUsText */
    z-index: 1; /* Ensure the text container is on top */
    margin-left: 340px;
    font-family: 'Montserrat-Bold';
    font-size: 16px;
    color: #4985c9;
    font-weight: bold;

`;

const HeaderText2 = styled.div`
    position: absolute;
    top: 50px;
    left: 160px; /* Adjust the left position for WhyUsText */
    z-index: 1; /* Ensure the text container is on top */
    margin-left: 340px;
    font-family: 'Montserrat-Bold';
    font-size: 30px;
    font-weight: bold;

`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: space-around; /* Spread evenly */
    align-items: center;
    width: 100%;
    

`;

const ImageWrapper = styled.div`
    position:relative;
    display: flex;
    justify-content: space-around; /* Spread evenly */
    align-items: center;
    width: 100%;
    margin-top: 120px;


`;
const TextBox = styled.div`
   
    padding: 10px;
    text-align: center;
    transition: transform 0.3s ease;
    background-color: #4985c9;
    
`;

const ImageWithText = styled.div`
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        .text-box {
            transform: translateY(-10px);
        }
    }
`;
    
export default function AdvancedService() {
    return (
        <>
            <AdvancedServiceContainer>
                <HeaderText>
                    Advanced Services
                </HeaderText>
                <HeaderText2>
                    Why Choose Our Specialty Clinic?
                </HeaderText2>
                <ImageWrapper>
                    <ImageWithText>
                        <Image src={advanced1} />
                        <TextBox className="text-box">
                            <p>Implants</p>
                        </TextBox>
                    </ImageWithText>
                    <ImageWithText>
                        <Image src={advanced2} />
                        <TextBox className="text-box">
                            <p>Orthodontics</p>
                        </TextBox>
                    </ImageWithText>
                    <ImageWithText>
                        <Image src={advanced3} />
                        <TextBox className="text-box">
                            <p>Cosmetic Dentistry</p>
                        </TextBox>
                    </ImageWithText>
                </ImageWrapper>
            </AdvancedServiceContainer>
        </>
           
    );
}



