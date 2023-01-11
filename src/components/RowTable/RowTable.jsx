import React from "react";
import { Container, Content, Current, Filled, Past } from "./styles";

export default function RowTable ({ guess, currentGuess }) {

    if(guess) {
        return(
            <Past>
                {guess.map((l, i) => (
                    <Content key={i} color={l.color} animation={l.color} >{l.key}</Content>
                ))}
            </Past>
        )
    }
    
    if(currentGuess) {
        let letters = currentGuess.split('');
        
        return (
            <Current>
                {letters.map((letters, i) => (
                    <Filled key={i} >{letters}</Filled>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <Content key={i}></Content>
                ))}
            </Current>

        )
    }

    return(
        <Container>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
            <Content></Content>
        </Container>
    )
}