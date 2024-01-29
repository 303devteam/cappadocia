'use client'
import { Label, StyledImage, Section } from "./comps"
import Img from '../../public/contactus.jpeg'
import styled from 'styled-components'
import Image from "next/image"

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
    return(
        <>
            <Section
                $width='100%'
                $height='auto'
                $padding='0'
                $mobilepadding='0'
                $bgcolor='#0086ad'
            >
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $mobilewidth='100%'
                    $height='auto'
                    $padding='0'
                    $mobilepadding='0'
                >
                    <Image style={{objectFit: 'cover', width: '100%', height: '600px'}} priority src={Img.src} width={1000} height={1000} alt="section-img"/>
                </Section>
                <Section
                    $width='50%'
                    $tabwidth='100%'
                    $mobilewidth='100%'
                    $height='auto'
                    $padding='50px'
                    $mobilepadding='30px'
                    $bgcolor='transparent'
                    $flexdirection='column'
                    $alignitems='flex-start'
                    $mobilealignitems='flex-start'
                >
          <ContactFormWrapper>
            <Label
                $fontsize='20px'
                $tabfontsize='20px'
                $mobilefontsize='20px'
                $color='white'
                $fontweight='800'
                >
                    Contact Us
                </Label>
            <Form>
              <FormGroup>
                     <Label
                        $fontsize='15px'
                        $tabfontsize='15px'
                        $mobilefontsize='15px'
                        $color='white'
                        $fontweight='800'
                        $lineheight='25px'
                        $mobilelineheight='20px'
                    >
                        Full Name:
                    </Label>
                <StyledInput type="text" id="fullName" name="fullName"  />
              </FormGroup>
              <FormGroup>
                <Label
                    $fontsize='15px'
                    $tabfontsize='15px'
                    $mobilefontsize='15px'
                    $color='white'
                    $fontweight='800'
                    $lineheight='25px'
                    $mobilelineheight='20px'
                >
                    Email:
                </Label>
                <StyledInput type="email" id="email" name="email"/>
              </FormGroup>
              <FormGroup>
                <Label
                    $fontsize='15px'
                    $tabfontsize='15px'
                    $mobilefontsize='15px'
                    $color='white'
                    $fontweight='800'
                    $lineheight='25px'
                    $mobilelineheight='20px'
                    >
                        Subject:
                </Label>
                <StyledInput type="text" id="subject" name="subject" />
              </FormGroup>
              <FormGroup>
                <Label
                    $fontsize='15px'
                    $tabfontsize='15px'
                    $mobilefontsize='15px'
                    $color='white'
                    $fontweight='800'
                    $lineheight='25px'
                    $mobilelineheight='20px'
                    >
                        Message:
                </Label>
                <StyledTextarea id="message" name="message" rows="4"/>
              </FormGroup>
              <button onClick={(e) => e.preventDefault()} className="button is-medium is-responsive is-danger">
                         Submit Now and Get Consultation
              </button>
            </Form>
          </ContactFormWrapper>
                </Section>
            </Section>
        </>
    )
}