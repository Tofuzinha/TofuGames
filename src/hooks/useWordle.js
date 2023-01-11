import { useState } from "react";

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]) //cada palpite é um array
    const [history, setHistory] = useState([]) //cada palpite é uma string
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({}); // {a: 'green', b: 'yellow', c: 'grey'}


    // formatar um palpite em um array de objetos de letras
    // ex: [{key: 'a', color 'amarelo'}]
    const formatGuess = () => {
        let solutionsArray = [...solution];
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'}
        });
        
        //encontrar todas as letras verdes
        formattedGuess.forEach((l, i) => {
            if(solution[i] === l.key) {
                formattedGuess[i].color = 'green';
                solutionsArray[i] = null;
            }
        })

        //encontrar todas as letras amarelas
        formattedGuess.forEach((l, i) => {
            if(solutionsArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionsArray[solutionsArray.indexOf(l.key)] = null;   
            }
        })
        return formattedGuess;
    }

    // Adicionar um novo palpite ao state de palpites
    // Atualize o state isCorrect se o palpite estiver correto
    // Adicione 1 ao state da turn
    const addNewGuess = (formattedGuess) => {
        if(currentGuess === solution) {
            setIsCorrect(true)
        }
        setGuesses((prevGuesses) => {
            let newGuesses = [...prevGuesses];
            newGuesses[turn] = formattedGuess;
            return newGuesses;
        })
        setHistory((prevHistory) => {
            return [...prevHistory, currentGuess]
        })
        setTurn((prevTurn) => {
            return prevTurn + 1;
        })
        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys}

            formattedGuess.forEach((l) => {
                const currentColor = newKeys[l.key];

                if(l.color === 'green') {
                    newKeys[l.key] = 'green';
                    return;
                }
                if(l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow';
                    return;
                }
                if(l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'grey';
                    return;
                }
            })
            return newKeys;

        })
        setCurrentGuess('');

    }

    // lidar com o evento de digitação e rastrear o palpite atual
    // se o usuário pressionar enter, adicione o novo palpite
    const handleKeyup = ({ key }) => {

        if(key === 'Enter') {
            // adicione apenas palpite se o turno for menor que 5
            if(turn > 5) {
                console.log('vc precisa usar todas as letras')
                return;
            }
            // não permitir palavras duplicadas
            if(history.includes(currentGuess)) {
                console.log('nao pode usar palavras repetidas')
                return;

            }
            // a palavra de verificação tem 5 caracteres
            if(currentGuess.length !== 5) {
                console.log('deve conter 5 caracteres')
                return;

            }
            const formatted = formatGuess();
            addNewGuess(formatted);
        }

        // configurar o backspace somente para deletar uma letra digitada
        if(key === 'Backspace'){
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return
        }
        // permite usar somente letras
        if(/^[A-Za-z]$/.test(key)){
            if(currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key
                })
            }
        }

    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyup}
}

export default useWordle;