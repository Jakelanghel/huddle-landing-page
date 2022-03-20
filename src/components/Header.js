import React from "react";
import { StyledHeader, Nav, Logo, Image } from "./styled/Header.styled";
import { Flex } from "./styled/Flex.styled";
import { Container } from "./styled/Container.styled";
import { Button } from "./styled/Button.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='logo' />
                    <Button pd='.5rem 1.75rem'>Try it Free</Button>
                </Nav>

                <Flex className='hero'>
                    <div className='hero-rw hero-rw-1'>
                        <h1>Build The Community Your Fans Will Love</h1>
                        <p>
                            Huddle re-imagines the way we build communities. You
                            have a voice, but so does your audience. Create
                            connections with your users as you engage in genuine
                            discussion.
                        </p>
                        <Button className='btn-pink'>
                            Get Started For Free
                        </Button>
                    </div>
                    <div className='hero-rw'>
                        <Image src='./images/illustration-mockups.svg' />
                    </div>
                </Flex>
            </Container>
        </StyledHeader>
    );
};

export default Header;
