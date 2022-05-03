import { Facebook, Instagram, MailOutline, Phone, Room, Twitter } from '@material-ui/icons';
import React from 'react';
import { 
    Container,
    SocialSection,
    CopyrightInfo,
    SocialContainer,
    IconContainer,
    Center,
    ContactUsSection,
    Title,
    ContactItem
 } from "./styles";

const Footer = () => {
    return (
        <Container>
            <SocialSection>
                <CopyrightInfo>© 2022 Bake Cafe</CopyrightInfo>
               
                <SocialContainer>
                    <IconContainer color="#3B5999">
                        <Facebook />
                    </IconContainer>
                    <IconContainer color="#E4405F">
                        <Instagram />
                    </IconContainer>
                    <IconContainer color="#55ACEE">
                        <Twitter />
                    </IconContainer>
                </SocialContainer>
            </SocialSection>
            <Center></Center>
            <ContactUsSection>
                <Title>Contact Us</Title>
                <ContactItem> <Room />Madambakkam, Chennai</ContactItem>
                <ContactItem> <Phone />+91 99335 45534</ContactItem>
                <ContactItem> <MailOutline />bakecafe@gmail.com</ContactItem>
            </ContactUsSection>

        </Container>
    )
}

export default Footer;