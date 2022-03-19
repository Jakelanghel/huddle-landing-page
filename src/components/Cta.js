import React from "react";
import { StyledContainerAbsolute } from "./styled/ContainerAbsolute.styles";
import { Button } from "./styled/Button.styled";

const Cta = () => {
    return (
        <StyledContainerAbsolute>
            <h2>Ready To Build Your Community?</h2>
            <Button bg='#ff0099' color='#fff'>
                Get Started For Free
            </Button>
        </StyledContainerAbsolute>
    );
};

export default Cta;
