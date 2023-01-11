import { useState, useEffect } from 'react';
import Wordle from '../../components/Wordle/Wordle';
import { Container } from './styles';

function GameWordle () {

    const [solution, setSolution] = useState(null);

    useEffect(()=> {
        fetch('https://tofuzinha.github.io/TofuGamesApi/db.json')
        .then(res => res.json())
        .then(json => json.solutions)
        .then(json => {
            //sortear um numero inteiro aleatorio 0 & 29
            const randomSolution = json[Math.floor(Math.random()*json.length)]
            setSolution(randomSolution.word);
        })
        console.log(solution)
    },[setSolution])

    return(
        <Container>
            <h2>Jogo Wordle</h2>
            <br/>
            {solution && <Wordle solution={solution} />}
        </Container>
    )
}

export default GameWordle;
