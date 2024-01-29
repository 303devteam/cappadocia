import { motion } from 'framer-motion'
import styled from 'styled-components'
import Image from 'next/image';

export const Label = styled(motion.p)`
    font-family: 'Montserrat';
    font-size: ${(props) => (props.$fontsize)};
    font-weight: ${(props) => (props.$fontweight)};
    line-height: ${(props) => (props.$lineheight || '60px')};
    color: ${(props) => (props.$color || 'white')};
    text-decoration: ${(props) => (props.$link ? 'underline' : 'none')};
    cursor: ${(props) => (props.$link ? 'pointer' : 'auto')};
    width: ${(props) => (props.$width || 'auto')};

    @media only screen and (max-width: 768px) {
        font-size: ${(props) => props.$mobilefontsize || '18px'};
        line-height: ${props => props.$mobilelineheight || '40px'};
        width: ${(props) => props.$mobilewidth || 'auto'};
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: ${(props) => (props.$tabfontsize || props.$fontsize)};
        line-height: ${(props) => (props.$tablineheight || props.$lineheight)};
        width: ${(props) => (props.$tabwidth || props.$width)};
    }
`;

export const StyledImage = styled(Image)`
    object-fit: cover;
    height: ${(props) => (props.$height || '100%')};
    width: ${(props) => (props.$width || '100%')};
    margin: ${(props) => (props.$margin || '0px')};

    @media only screen and (max-width: 768px){
        height: ${(props) => (props.$mobileheight || 'auto')};
        width: ${(props) => (props.$mobilewidth || 'auto')};
        margin: ${(props) => (props.$mobilemargin || '0px')};
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        height: ${(props) => (props.$tabheight || props.$height)};
        width: ${(props) => (props.$tabwidth || props.$width)};
        margin: ${(props) => (props.$tabmargin || props.$margin)};
    }
`;

export const StyledIcon = styled(Image)`
    width: ${(props) => (props.$width || '100%')};
    height: ${(props) => (props.$height || '100%')};
    margin: ${(props) => (props.$margin || '0px')};

    @media only screen and (max-width: 768px){
        width: ${(props) => (props.$mobilewidth || 'auto')};
        height: ${(props) => (props.$mobileheight || 'auto')};
        margin: ${(props) => (props.$mobilemargin || '0px')};
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: ${(props) => (props.$tabwidth || props.$width)};
        height: ${(props) => (props.$tabheight || props.$height)};
        margin: ${(props) => (props.$tabmargin || props.$margin)};
    }
`;

export const Section = styled(motion.div)`
    display: flex;
    position: relative;
    width: ${props => props.$width};
    height: ${props => props.$height};
    background-color: ${props => props.$bgcolor || '#fff'};
    justify-content: ${props => props.$justifycontent || 'center'};
    align-items: ${props => props.$alignitems || 'center'};
    flex-direction: ${props => props.$flexdirection || 'row'};
    padding: ${props => props.$padding || '40px'};

    @media only screen and (max-width: 768px) {
        flex-direction: ${(props) => (props.$mobileflexdirection || 'column')};
        justify-content: ${(props) => (props.$mobilejustifycontent || 'center')};
        align-items: ${(props) => (props.$mobilealignitems || 'center')};
        padding: ${(props) => (props.$mobilepadding || '30px')};
        margin: ${(props) => (props.$mobilemargin || '0px')};
        width: ${(props) => (props.$mobilewidth || '100%')};
        height: ${(props) => (props.$mobileheight || 'auto')};
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        flex-direction: ${(props) => (props.$tabflexdirection || props.$flexdirection)};
        justify-content: ${(props) => (props.$tabjustifycontent || props.$justifycontent)};
        align-items: ${(props) => (props.$tabalignitems || props.$alignitems)};
        padding: ${(props) => (props.$tabpadding || props.$padding)};
        margin: ${(props) => (props.$tabmargin || props.$margin)};
        width: ${(props) => (props.$tabwidth || props.$width)};
        height: ${(props) => (props.$tabheight || props.$height)};
    }
`;

export const Paragraph = styled.p`
    font-family: 'Montserrat';
    word-wrap: normal;
    font-size: ${props => props.$fontsize || '16px'};
    font-weight: ${props => props.$fontweight || 'normal'};
    color: ${props => props.$color || 'gray'};
    width: ${props => props.$width || 'auto'};

    @media only screen and (max-width: 768px) {
        width: ${props => props.mobilewidth || 'auto'};
        font-size: ${props => props.$mobilefontsize || '16px'};
    }

    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        width: ${props => props.tabwidth || props.$width};
        font-size: ${props => props.$tabfontsize || props.$fontsize};
    }
`;