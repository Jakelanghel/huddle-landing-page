import React from "react";
import { StyledCard } from "./styled/Card.styled";

const Card = ({ item: { id, title, body, image } }) => {
    return (
        <StyledCard layout={id % 2 !== 0 ? "row-reverse" : "row"}>
            <div className='cd-rw'>
                <img src={`./images/${image}`} alt='' />
            </div>

            <div className='cd-rw'>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        </StyledCard>
    );
};

export default Card;
