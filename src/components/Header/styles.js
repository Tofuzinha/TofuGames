import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
`

export const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr; 
    padding: 1rem ;

`

export const LogoTop = styled.div`
    display: flex;
    align-items: center;

    img {
        object-fit: contain;
        width: 100%;
        height: 80px;
    }

`

export const Navbar = styled.nav`
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;

`
export const Menu = styled(Link)`
    color: var(--white-color);
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    

    &:hover,
    &:focus {
        color: var(--pink-color);
    }

    &:active{
        color: var(--pink-color);
    }

`