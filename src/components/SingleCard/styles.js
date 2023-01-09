import styled, {css} from "styled-components";

export const Card = styled.div`
    position: relative;

`

export const Model = css`
    width: 150px;
    height: 250px;
    border-radius: 10px;
    display: block;

`

export const CardFront = styled.img`
    ${Model}

    object-fit: cover;
    object-position: top;

    position: absolute;
    
    border: 2px solid var(--pink-color);

    transform: ${props => props.flipped ? 'rotateY(0deg)' : 'rotateY(90deg)'};
    transition-delay: ${props => props.flipped ? '0.2s' : ''};

`

export const CardBack = styled.div`
    ${Model}

    background-color: var(--pink-color);
    border: 2px solid var(--white-color);
    
    display: flex;
    justify-content: center;
    align-items: center;

    transition: all ease-in 0.2s;
    transition-delay: ${props => props.flipped ? '0s' : '0.2s'};
    transform: ${props => props.flipped ? 'rotateY(90deg)' : ''};
`