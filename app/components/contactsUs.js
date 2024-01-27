'use client';
import styled from "styled-components";
import Image from "next/image";
import { Title } from './welcomeSection';
import { Paragraph } from './aboutUs';
import { Section } from './aboutUs';
import { Subsection } from './aboutUs';
import { Text } from './welcomeSection';
import contactus from '../../public/contactus.jpeg';
import { InputLabel } from "@mui/material";
import 'bulma/css/bulma.css';



const ContactFormWrapper = styled.div`
  width: 80%;
  max-width: 400px; /* Adjust the width as needed */
  
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-size: 16px;
  color: #fff;
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 8px;
  width: 100%;
`;

const Textarea = styled.textarea`
  padding: 8px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #fff;
  color: #0086ad;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  opacity: 0.5;
  width: 70%;
  height: 30px;
`;

const StyledTextarea = styled.textarea`
  opacity: 0.5;
  width: 90%;
  height: 100px;
`;





export default function ContactUs() {
 
  return (
    <>
      <Section
        backgroundcolor="#0086ad"
        width="100%"
        style={{padding: 0}}

      >
        <Subsection
          justifycontent="flex-start"
          padding="0px"
          width="50%"

        >
          <Image src={contactus} alt="Contact Us" priority height={1000} width={1000} />
        </Subsection>


        <Subsection
          justifycontent='flex-start'
          alignitems='flex-start'
          width="50%"
          style={{height: '100%', marginLeft: '20px'}}
        >
          <Title
          font-size='30px'
          color='white'
          lineheight='40px'
          size='20px'
          >
          Get Started With CLİNİC Today!
          </Title>

          <ContactFormWrapper>
            <Form>
              <FormGroup>
                <Title
                lineheight='18px'
                size='13px'
                >Full Name:</Title>
                <StyledInput type="text" id="fullName" name="fullName"  />
              </FormGroup>

              <FormGroup>
                <Title
                size='13px'
                lineheight='18px'
                >Email:</Title>
                <StyledInput type="email" id="email" name="email"/>
              </FormGroup>

              <FormGroup>
                <Title
                size='13px'
                lineheight='18px'
                >Subject:</Title>
                <StyledInput type="text" id="subject" name="subject" />
              </FormGroup>

              <FormGroup>
                <Title
                size='13px'
                lineheight='18px'
                >Message:</Title>
                <StyledTextarea id="message" name="message" rows="4"/>
              </FormGroup>

              <button class="button is-medium is-responsive is-danger">
                         Submit Now and Get Consultation
              </button>
            </Form>
          </ContactFormWrapper>

          
        
        </Subsection>
      </Section>
    </>
  );
}

