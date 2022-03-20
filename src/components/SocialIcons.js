import React from "react";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { StyledSocialIcons } from "./styled/SocialIcons.styled";

const SocialIcons = () => {
    return (
        <StyledSocialIcons>
            <li>
                <a href='https://twitter.com' aria-label='twitter.com'>
                    <FaTwitter />
                </a>
            </li>
            <li>
                <a href='https://facebook.com' aria-label='facebook.com'>
                    <span className='hide'>facebook.com</span>
                    <FaFacebook />
                </a>
            </li>
            <li>
                <a href='https://linkedin.com' aria-label='linkdin.com'>
                    <span className='hide'>linkdin.com</span>
                    <FaLinkedin />
                </a>
            </li>
        </StyledSocialIcons>
    );
};

export default SocialIcons;
