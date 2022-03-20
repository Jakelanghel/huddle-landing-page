import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;

    h2 {
        text-align: center;
        margin-top: 1rem;
        letter-spacing: 1px;
    }

    img {
        padding: 2.5rem;
    }

    p {
        font-size: 14px;
        text-align: center;
        color: ${({ theme }) => theme.colors.grayishBlue};
        padding: 1rem 2rem;
        padding-bottom: 2.5rem;
        line-height: 1.45rem;
    }

    @media (min-width: ${({ theme }) => theme.desktop}) {
        flex-direction: ${({ layout }) => layout};
        align-items: center;
        padding: 2rem;
        padding-left: 4rem;
        justify-content: space-between;

        p,
        h2 {
            text-align: left;
        }
        p {
            padding: 0;
            padding-top: 1rem;
            max-width: 575px;
            font-size: 1rem;
            line-height: 1.5rem;
        }
        img {
            padding: 0;
            width: 100%;
            margin: 0 auto;
            padding: 3rem;
        }

        .cd-rw {
            width: 45%;
        }

        .cd-copy {
            padding-left: 4rem;
        }
    }
`;
