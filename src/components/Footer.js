import React from "react";
import { Flex } from "./styled/Flex.styled";
import { StyledFooter } from "./styled/Footer.styled";
import SocialIcons from "./SocialIcons";
import { Logo } from "./styled/Header.styled";
import Cta from "../components/Cta";

const Footer = () => {
    return (
        <StyledFooter>
            <div className='ft-contact-card'>
                <Logo src='./images/logo.svg' alt='logo' className='ft-logo' />

                <Flex fd='row' alignIt='flex-start' className='ft-flex'>
                    <img
                        src='./images/icon-location.svg'
                        alt='location-icon'
                        className='sml-mg-top'
                    />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua
                    </p>
                </Flex>

                <Flex fd='row' className='ft-flex'>
                    <img src='./images/icon-phone.svg' alt='location-icon' />
                    <p>+1-543-123-4567</p>
                </Flex>

                <Flex fd='row' className='ft-flex'>
                    <img src='./images/icon-email.svg' alt='location-icon' />
                    <p>example@huddle.com</p>
                </Flex>

                <Cta />
            </div>

            <div className='ft-nav'>
                <Flex className='ft-nav-rw' fd='column' alignIt='flex-start'>
                    <ul>
                        <li>About Us</li>
                        <li>What We Do</li>
                        <li>FAQ</li>
                    </ul>
                </Flex>

                <Flex className='ft-nav-rw' fd='column' alignIt='flex-start'>
                    <ul>
                        <li>Career</li>
                        <li>Blog</li>
                        <li>Contact Us</li>
                    </ul>
                </Flex>
            </div>

            <div className='ft-soc'>
                <SocialIcons />

                <p className='cw'>
                    &copy; Copyright 2021 Huddle. All rights reserved
                </p>
            </div>
        </StyledFooter>
    );
};

export default Footer;
