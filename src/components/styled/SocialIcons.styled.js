import styled from "styled-components";

export const StyledSocialIcons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    li {
        list-style: none;
    }

    li:hover {
        border: none;
    }
    a {
        border: 1px solid #fff;
        border-radius: 50%;
        color: #fff;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 10px;
        height: 40px;
        width: 40px;
        text-decoration: none;
    }

    a:hover {
        filter: brightness(0) saturate(100%) invert(12%) sepia(100%)
            saturate(4816%) hue-rotate(319deg) brightness(116%) contrast(107%);
    }
`;
