import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 3rem;
`

export const ContentGames = styled.div`
    display: flex;

`

export const CardGames = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
   
`

export const NameGames = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height:50px;
    background-color: var(--white-color);
    padding: 1rem;
    border-radius: 10px;

    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    color: var(--background-color);

    &:hover,
    &:focus,
    &:active {
        background-color: var(--pink-color);
        color: var(--white-color);
    }
`

