import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({ theme }) => theme.colors.footer};
    color: ${({ theme }) => theme.colors.body};
    padding: 10rem 1rem 3rem;
    position: relative;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: left;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        font-size: 1.25rem;
        text-align: left;
        padding: 1rem;
        padding-left: 0;
    }

    p {
        text-align: right;
        text-align: left;
        padding-left: 1.5rem;
    }

    .ft-logo {
        width: 50%;
        margin-bottom: 1.5rem;
        filter: brightness(0) saturate(100%) invert(93%) sepia(7%) saturate(0%)
            hue-rotate(87deg) brightness(107%) contrast(107%);
    }

    .sml-mg-top {
        margin-top: 7px;
    }

    .ft-flex {
        margin-bottom: 2rem;
    }

    .ft-nav {
        margin: 3rem 0;
    }

    .cw {
        text-align: center;
        font-size: 0.75rem;
        letter-spacing: 1px;
        padding: 0;
        margin-top: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        display: flex;
        flex-direction: row;
        justify-content: center;
        padding: 13rem 3rem 1rem;

        .ft-logo {
            width: 50%;
        }

        .ft-contact-card {
            width: 25%;
            margin-right: 6rem;
        }

        .ft-nav {
            display: flex;
        }

        .ft-nav-rw {
            margin-right: 6rem;
        }

        li {
            font-size: 1.15rem;
            text-align: left;
            margin-bottom: 1rem;
            border-bottom: solid 1px #003333;
            padding: 0;
        }

        li:hover {
            cursor: pointer;
            border-bottom: solid 1px #fff;
        }

        .ft-soc {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 2rem 1rem;
        }
    }
`;
