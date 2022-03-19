import styled from "styled-components";

export const StyledContainerAbsolute = styled.div`
    width: 95%;
    max-width: 600px;
    background: #fff;
    position: absolute;
    top: -80px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    border-radius: 14px;
    padding: 2rem 0;
    z-index: 1;

    h2 {
        font-size: 1.15rem;
        color: black;
        margin-bottom: 1.75rem;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        padding: 3rem;

        h2 {
            margin-bottom: 2rem;
        }
    }
`;
