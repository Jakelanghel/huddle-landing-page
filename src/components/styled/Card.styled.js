import styled from "styled-components";

export const StyledCard = styled.div`
    display: flex;
    background-color: #fff;
    border-radius: 14px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    margin: 40px 0;
    padding: 2rem;
    flex-direction: ${({ layout }) => layout || "row"};

    img: {
        width: 80%;
    }
    & > div {
        flex: 1;
    }

    h2 {
        font-size: 1.25rem;
        text-align: center;
    }

    p {
        font-size: 0.95rem;
        text-align: center;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
    }
`;
