import styled from "styled-components";

export const Button = styled.button`
    border-radius: 50px;
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    font-size: 0.75rem;
    letter-spacing: 1px;
    font-weight: 700;
    padding: 0.5rem 2rem;
    background: ${({ bg }) => bg || "#fff"};
    color: ${({ color }) => color || "#333"};
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transform: scale(0.98);
    }
`;
