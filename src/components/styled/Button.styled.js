import styled from "styled-components";

export const Button = styled.button`
    letter-spacing: 1px;
    font-weight: 700;
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    padding: ${({ pd }) => pd || "1.25em 4.5em"};
    background: #fff;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;
