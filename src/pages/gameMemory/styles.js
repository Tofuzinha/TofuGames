import styled, {css} from "styled-components";

export const Container = styled.div`
    max-width: 100%;
    margin-top: 2rem;

    text-align: center;
    color: #fff;

`

export const ContentHeader = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`

export const NewGame = styled.button`
    width: 200px;
    height:100%;

    margin-top: 2rem;
    padding: 0.75rem;

    border: 2px solid var(--pink-color);
    border-radius: 5px;
    
    background: var(--white-color);
    color: var(--background-color);
    font-size: 1rem;
    font-weight: 600;

    cursor: pointer;

    &:hover,
    &:focus {
        background: var(--pink-color);
        color: var(--white-color);
        border: 2px solid var(--white-color);

    }
`

export const CardGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 1rem;
    margin-top: 1rem;
`

