import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    user-select:none
`

export const Past = styled(Container)`
    display: flex;
    justify-content: center;
    text-align: center;

`
export const Current = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;

`

export const Filled = styled.div`
    display: block;
    width: 60px;
    height: 60px;
    border: 1px solid var(--white-color);
    margin: 3px;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
    color: var(--pink-color);

    animation:bounce 0.2s ease-in-out forwards;

    @keyframes bounce {
        0%{
            transform: scale(1);
            border-color: var(--background-color);
        }
        50%{
            transform: scale(1.2);
        }
        100%{
            transform: scale(1);
            border-color: var(--white-color);
        }
        
    }

`

export const Content = styled.div`
    display: block;
    width: 60px;
    height: 60px;
    border: 1px solid var(--white-color);
    margin: 3px;
    text-align: center;
    line-height: 60px;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 2.5rem;
 
    background: ${props => props.color === 'green' ? '#40DD50' 
    : props.color === 'yellow' ? '#FFD726'
    : props.color === 'grey' ? '#413F42' 
    : ''};

    border-color: ${props => props.color === 'green' ? '#40DD50' 
    : props.color === 'yellow' ? '#FFD726'
    : props.color === 'grey' ? '#413F42' 
    : ''};

    animation: ${props => props.animation === 'green' ? 'flip 0.6s ease forwards' 
    : props.animation === 'yellow' ? 'flip 0.6s ease forwards'
    : props.animation === 'grey' ? 'flip 0.6s ease forwards' 
    : ''};


    &:nth-child(2){
        animation-delay: 0.3s;
    }
    &:nth-child(3){
        animation-delay: 0.6s;
    }
    &:nth-child(4){
        animation-delay: 0.9s;
    }
    &:nth-child(5){
        animation-delay: 1.2s;
    }

    @keyframes flip {
    0% {
        transform: rotateX(0);
        background: var(--background-color);
        color: var(--background-color);
        border-color: var(--white-color);
    }
    45% {
        transform: rotateX(90deg);
        background: var(--background-color);
        border-color: var(--white-color);
        color: var(--background-color);
    }
    55% {
        transform: rotateX(90deg);
        color: var(--white-color);
    }
    100% {
        transform: rotateX(0);
        color: var(--white-color);
    }
    
}



`

