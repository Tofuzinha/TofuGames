import styled from "styled-components";

export const Container = styled.div`
    max-width: 500px;
    margin: 20px auto;

`

export const Content = styled.div`
    margin: 5px;
    width: 40px;
    height: 50px;
    background-color: var(--white-color);
    display: inline-block;
    border-radius: 6px;
    line-height: 50px;
    text-align: center;
    font-weight: 600;
    color: var(--pink-color);
    user-select: none;

    background: ${props => props.color === 'green' ? '#40DD50' 
    : props.color === 'yellow' ? '#FFD726'
    : props.color === 'grey' ? '#413F42' 
    : ''};

    color: ${props => props.color === 'green' ? '#fff' 
    : props.color === 'yellow' ? '#fff'
    : props.color === 'grey' ? '#fff' 
    : ''};

    transition: ${props => props.color === 'green' ? 'all 0.3 ease-in' 
    : props.color === 'yellow' ? 'all 0.3 ease-in'
    : props.color === 'grey' ? 'all 0.3 ease-in' 
    : ''};

`