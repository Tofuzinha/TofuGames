import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem;

    color: #fff;

`

export const NewGame = styled(Link)`
    width: 150px;
    height: auto;
    padding: 10px;
    margin: 20px 0;

    background: var(--white-color);
    color: var(--pink-color);

    text-decoration: none;
    text-align: center;
    font-size: 1rem;
    font-weight: 600;

    border-radius: 10px;
    transition: 0.5s ease;

    &:hover{
        background: var(--pink-color);
        color: var(--white-color);

    }


`

export const ContentRules = styled.div`
    width: 500px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

    background: var(--white-color);
    border-radius: 5px;

    color: #000;
`

