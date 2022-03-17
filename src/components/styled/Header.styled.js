import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.header};
    padding: 1.5rem 0;
    background-image: url("./images/bg-hero-mobile.svg");
    background-size: cover;
    background-position: 10px -80px;

    h1 {
        font-size: 1.25rem;
        padding: 0 2rem;
        margin-bottom: 1.5rem;
        letter-spacing: 1px;
    }

    p {
        font-size: 0.95rem;
        line-height: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .get-started-btn {
        padding: 0.75rem 3rem;
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 2.5rem;

    /* @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    } */
`;

export const Logo = styled.img`
    width: 100px;
    /* @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-bottom: 40px;
        width: ;
    } */
`;

export const Image = styled.img`
    width: 300px;
    margin-left: 40px;

    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin: 2rem auto;
    }
`;
