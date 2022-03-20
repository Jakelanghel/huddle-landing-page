import React from "react";
import { StyledContainerAbsolute } from "./styled/ContainerAbsolute.styles";
import { Button } from "./styled/Button.styled";

const Cta = () => {
    return (
        <StyledContainerAbsolute>
            <h2>Ready To Build Your Community?</h2>
            <Button
                className='cta-btn'
                bg={({ theme }) => theme.colors.pink}
                color='#fff'
                ft='1.5rem'
            >
                Get Started For Free
            </Button>
        </StyledContainerAbsolute>
    );
};

export default Cta;
