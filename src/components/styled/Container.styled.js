import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    padding: 1.5rem 1rem;
    padding-bottom: 0;
    margin: 0 auto;
    margin-bottom: ${({ mg }) => mg};

    @media (min-width: ${({ theme }) => theme.desktop}) {
        max-width: none;
        width: 90%;
    }
`;
