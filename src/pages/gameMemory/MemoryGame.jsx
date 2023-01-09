import React, { useEffect, useState } from "react";
import { SingleCard } from "../../components/SingleCard";
import { CardGrid, Container, ContentHeader, NewGame } from "./styles";


const CardImages = [
    {'src': '/image/ayato.png', matched: false},
    {'src': '/image/xiao.png', matched: false},
    {'src': '/image/zhong.png', matched: false},
    {'src': '/image/alhaitan.png', matched: false},
    {'src': '/image/cyno.png', matched: false},
    {'src': '/image/chield.png', matched: false},
    {'src': '/image/diluc.png', matched: false},
    {'src': '/image/itto.png', matched: false},
    {'src': '/image/tinnary.png', matched: false},
]

export function GameMemory () {

    // Estados para guardar os cards
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);

    // Guardar o estado das jogadas
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

    const [disabled, setDisabled] = useState(false);

    // duplicar e embaralhar as cartas
    const shuffleCards = () => {
        const shuffledCards = [...CardImages, ...CardImages]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({...card, id: Math.random()}))

        setChoiceOne(null);
        setChoiceTwo(null);
        setCards(shuffledCards);
        setTurns(0);
    }

    // Escolha
    const handleChoice = (card) => {
        choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    }

    //Compare 2 cards selecionados
    useEffect(() => {
        if(choiceOne && choiceTwo) {
            setDisabled(true)
            if(choiceOne.src === choiceTwo.src) {
                console.log('voce acertou')
                setCards(prevCards => {
                    return prevCards.map(card => {
                        if(card.src === choiceOne.src) {
                            return {...card, matched: true};
                        } else {
                            return card;
                        }
                    })
                })
                resetTurn()
            } else {
                console.log('voce errou, tente novamente')
                setTimeout(() => resetTurn(), 1000);
            }
        }

    }, [choiceOne, choiceTwo])

    // Reset turnos
    const resetTurn = () => {
        setChoiceOne(null)
        setChoiceTwo(null)
        setTurns(prevTurns => prevTurns + 1);
        setDisabled(false)
    }

    // iniciar o game automatico
    useEffect(() => {
        shuffleCards()
    }, [])

    return(
        <Container>
            <h1>Jogo da Memoria</h1>
            <ContentHeader>
                <NewGame onClick={shuffleCards}>New game</NewGame>
                <p>Turns: {turns}</p>
            </ContentHeader>
            <CardGrid>
                {cards.map((card) => (
                    <SingleCard 
                    key={card.id} 
                    card={card}
                    handleChoice={handleChoice}
                    flipped={card === choiceOne || card === choiceTwo || card.matched}
                    disabled={disabled}
                    />
                ))}
            </CardGrid>
            
        </Container>
    )
}