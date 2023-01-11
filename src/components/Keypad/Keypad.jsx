import React, { useEffect, useState } from "react";
import { Container, Content } from "./styles";

export default function Keypad ({usedKeys}) {
    const [letters, setLetters] = useState(null)

    useEffect(() => {
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(json => {
            setLetters(json)
        })
    },[])


    return (
        <Container>
            {letters && letters.map((l) => {
                const color = usedKeys[l.key]
                return(
                    <Content key={l.key} color={color}>{l.key}</Content>
                )
            })}
        </Container>
    )
}