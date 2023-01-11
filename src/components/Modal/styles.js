import styled, { css } from "styled-components";
import loser from './../../assets/itachi.gif'

export const Container = styled.div`
    background: rgba(0,0,0,0.8);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left:0;

    >img{
        position: absolute;
        top:0;
        width: auto;
        height: 250px;
        object-fit: cover;
        z-index:0;
    }

`
export const Content = css`
    max-width: 480px;
    height: auto;
    padding: 40px;
    border-radius: 10px;
    margin: 10% auto;
    box-shadow: 2px 2px 10px rgba(255,255,255,0.3);
    
    >h1{
        margin-bottom: 1rem;
    }

    >span {
        font-size: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const ContentLoser = styled.div`
    ${Content}
    background-image: url(${loser});
    background-size: cover;
    background-repeat: no-repeat;
    color: #fff;

`

export const ContentSucess = styled.div`
    ${Content}
    background: var(--white-color);
    color: var(--background-color);

`

export const SolutionLoser = styled.p`
    color:green;
    font-weight: 600;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;

`
export const SolutionSucess= styled.p`
    color:#ff004c;
    font-weight: 600;
    font-size: 1em;
    text-transform: uppercase;
    letter-spacing: 1px;

`