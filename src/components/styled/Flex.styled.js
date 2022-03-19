import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: ${({ alignIt }) => alignIt || "center"};
    flex-direction: ${({ fd }) => fd || "column"};

    text-align: center;

    & > descent-override,
    & > ul {
        flex: 1;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: row;
    }
`;
