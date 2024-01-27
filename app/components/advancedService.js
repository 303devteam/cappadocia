'use client';
import styled from "styled-components";
import Image from "next/image";
import advanced1 from '../../public/advanced1.jpeg';
import advanced2 from '../../public/advanced2.jpeg';
import advanced3 from '../../public/advanced3.jpeg';
import {Title} from './welcomeSection';
import {Paragraph} from './aboutUs';
import {Section} from './aboutUs';
import {Subsection} from './aboutUs';
import {Text} from './welcomeSection';

const ImageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: auto;
        &:hover .textbox {
            transform: translateY(-20px); /* Adjust the value as needed */
        }

    margin-bottom: 20px;

`;

const TextBox = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color:#4985c9;
    height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: translateY(0); /* Initial position */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition effects */
    

`;
    
export default function AdvancedService() {
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
                        Advanced Services
                    </Title>

                    <Title
                    font-size='30px'
                    color='black'
                    lineheight='40px'
                    size='20px'
                    >
                        Why choose Our Advanced Services?
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
                        <Image
                        src={advanced1}
                        width={400}
                        height={300}
                        />
                    <TextBox className="textbox">
                       <Title
                       font-size='15px'
                       color='white'
                       lineheight='40px'
                       size='20px'
                       >
                        Implants
                       </Title>
                        
                    </TextBox>
                    
                    
                       

                    </ImageWrapper>
                    <ImageWrapper>
                        <Image
                        src={advanced2}
                        width={400}
                        height={300}
                        />
                         <TextBox className="textbox">
                       <Title
                       font-size='15px'
                       color='white'
                       lineheight='40px'
                       size='20px'
                       >
                        Orthodontics
                       </Title>
                        
                    </TextBox>

                    </ImageWrapper>
                    <ImageWrapper>
                        <Image
                        src={advanced3}
                        width={400}
                        height={300}
                        />
                         <TextBox className="textbox">
                       <Title
                       font-size='15px'
                       color='white'
                       lineheight='40px'
                       size='20px'
                       >
                        Cosmetic Dentistry
                       </Title>
                        
                    </TextBox>

                    </ImageWrapper>
                    
                </Subsection>

                <Subsection>

                </Subsection>
            </Section>
        </>
           
    );
}



