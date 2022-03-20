import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${({ theme }) => theme.colors.paleCyan};
    background-image: url("./images/bg-hero-mobile.svg");
    background-size: cover;
    background-position: -40px -40px;

    h1 {
        max-width: 275px;
        margin: 0 auto;
        margin-bottom: 2rem;
        line-height: 2rem;
    }

    p {
        max-width: 345px;
        margin: 0 auto;
        margin-bottom: 2.5rem;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        background-image: url("./images/bg-hero-desktop.svg");

        h1,
        p {
            text-align: left;
        }

        h1 {
            margin: 3rem 0 1rem 0;
            line-height: 3rem;
            justify-self: flex-start;
            max-width: 400px;
        }

        p {
            font-size: 1rem;
            max-width: 460px;
            margin: 0 0 2rem 0;
        }

        .hero {
            justify-content: space-between;
            padding: 0;
            padding-bottom: 3rem;
        }

        .hero-rw {
            width: 45%;
        }

        .hero-rw-1 {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            padding-bottom: 5rem;
        }
    }
`;

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4rem;
`;

export const Logo = styled.img`
    width: 100px;
    @media (min-width: ${({ theme }) => theme.desktop}) {
        width: 18%;
    }
`;

export const Image = styled.img`
    width: 90%;
    margin-left: 40px;
    margin: 3.75rem auto;

    @media (min-width: ${({ theme }) => theme.desktop}) {
        padding: 0;
        margin: 0;
        width: 1000%;
    }
`;
