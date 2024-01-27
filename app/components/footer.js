'use client';
import styled from "styled-components";
import Image from "next/image";
import {Text } from './welcomeSection';
import {Title} from './welcomeSection';
import {Paragraph} from './aboutUs';
import {Section} from './aboutUs';
import {Subsection} from './aboutUs';















export default function Footer() {
    return (
        <>
            <Section
            width='100%'
            backgroundcolor='#032033'
            >
                <Subsection
                width='70%'
                flexDirection='row'
                justifycontent='center'
                alignitems='stretch'
                style={{height: '30%'}}
                >

                    <Subsection
                    width='30%'
                    flexDirection='column'
                    justifycontent='flex-start'
                    alignitems='flex-start'
                    >

                        <Title>
                            Departments
                        </Title>

                        <Paragraph>
                            Dental Cleanings
                        </Paragraph>
                        <Paragraph>
                            Dental Implants
                        </Paragraph>
                        <Paragraph>
                            Porcelain Veneers
                        </Paragraph>
                        <Paragraph>
                            Dentures & Partial Dentures
                        </Paragraph>
                        <Paragraph>
                            Sealants
                        </Paragraph>
                        <Paragraph>
                            Traditional Braces
                        </Paragraph>

                    

                    </Subsection>

                    <Subsection
                    width='30%'
                    flexDirection='column'
                    justifycontent='flex-start'
                    alignitems='flex-start'
                    >
                        <Title>
                            Quick Links
                        </Title>

                        <Paragraph>
                            About Us
                        </Paragraph>
                        <Paragraph>
                            Departments
                        </Paragraph>
                        <Paragraph>
                            Find A Doctor
                        </Paragraph>
                        <Paragraph>
                            FAQ
                        </Paragraph>
                        <Paragraph>
                            Timetable
                        </Paragraph>
                        

                    </Subsection>

                    <Subsection
                    width='30%'
                    flexDirection='column'
                    justifycontent='flex-start'
                    alignitems='flex-start'
                    >
                        <Title>
                            Contact us
                        </Title>

                        <Paragraph>
                            Kayseri - Cappadocia
                        </Paragraph>
                        <Paragraph>
                            Phone : +90 536 611 57 71 Opening Hours : 10:00 AM to 18:00 PM Monday to Saturday Sunday : Closed
                        </Paragraph>
                        <Paragraph>
                            info@cappadociahealth.com.tr
                        </Paragraph>
                      

                    </Subsection>

                </Subsection>

            </Section>
        </>
    );
}
