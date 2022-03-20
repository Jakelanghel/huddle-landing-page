import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styled/SocialIcons.styled";

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com'>
                    <span className='hide'>twitter.com</span>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com'>
                    <span className='hide'>facebook.com</span>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com'>
                    <span className='hide'>linkdin.com</span>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    );
};

export default SocialIcons;
