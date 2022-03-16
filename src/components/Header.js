import React from "react";
import { StyledHeader } from "./styled/Header.styled";
import { Container } from "./styled/Container.styled";

const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Nav>
                    <Logo src='./images/logo.svg' alt='logo' />
                    <Button>Try it Free</Button>
                </Nav>
            </Container>
        </StyledHeader>
    );
};

export default Header;
