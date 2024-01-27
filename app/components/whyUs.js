'use client';
import styled from "styled-components";
import Image from "next/image";
import whyus from '../../public/whyus.jpg';
import whyus1 from '../../public/whyus1.jpeg';
import whyus2 from '../../public/whyus2.jpeg';
import {Text } from './welcomeSection';

import {Title} from './welcomeSection';
import {Paragraph} from './aboutUs';
import {Section} from './aboutUs';
import {Subsection} from './aboutUs';





const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
    height: auto;
    margin-bottom: 30px;


   
`;











export default function WhyUs() {
    return (
        <>
            <Section 
            flexDirection='column'
            
            >
                <Subsection
                width='100%'
                
                mobileflex='column'
                >
                    <Title
                    font-size='20px'
                    color='#4985c9'
                    lineheight='40px'
                    size='20px'
                    >
                        Why Choose Us
                    </Title>
                </Subsection>

                <Subsection
                width='100%'
                flexDirection='row'
                justifycontent='space-around'
                alignitems='center'
                mobileflex='column'
                >
                    <ImageWrapper>
                        <Image src={whyus} priority style={{height: '300px', width: '450px'}}/> 
                        <Title
                         font-size='20px'
                         color='#4985c9'
                         lineheight='40px'
                         size='20px'
                        >
                            Panoramic X-Rays
                        </Title>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={whyus1} priority style={{height: '300px', width: '450px'}}/>
                        <Title
                        font-size='20px'
                        color='#4985c9'
                        lineheight='40px'
                        size='20px'
                        >
                            Intraoral Camera
                        </Title>
                    </ImageWrapper>
                    <ImageWrapper>
                        <Image src={whyus2} priority style={{height: '300px', width: '450px'}}/>
                        <Title
                        font-size='20px'
                        color='#4985c9'
                        lineheight='40px'
                        size='20px'
                        >
                            Digital X-Rays
                        </Title>
                    </ImageWrapper>
                </Subsection>

                <Subsection
                width='100%'
                mobilealignitems='flex-start'
                >
                    <Title
                    font-size='20px'
                    color='black'
                    lineheight='40px'
                    size='20px'
                    >
                        Your dental health is important to us.

                    </Title>

                    <Paragraph>
                    Our dental health is important to us. That’s why we take time to do a thorough exam using state-of-the-art x-rays to get a better understanding of your particular dental condition. Using the latest technology, we will monitor the health of your teeth, gums and mouth and be able to make a precise diagnosis and recommendations for any necessary treatments.
                    </Paragraph>
                </Subsection>
            </Section>
        
        </>
    );
}



// Our dental health is important to us. That’s why we take time to do a thorough exam using state-of-the-art x-rays to get a better understanding of your particular dental condition. Using the latest technology, we will monitor the health of your teeth, gums and mouth and be able to make a precise diagnosis and recommendations for any necessary treatments.
