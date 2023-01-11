import { Container, ContentLoser, ContentSucess, SolutionLoser, SolutionSucess } from "./styles";
import winner from './../../assets/winner.gif'

export default function Modal ({ isCorrect, turn, solution }) {
    return(
        <Container>
            {isCorrect && (
                <>
                    <img src={winner}/>
                    <ContentSucess>
                        <h1>Você venceu!</h1>
                        <SolutionSucess>{solution}</SolutionSucess>
                        <p>Você conseguiu solucionar em {turn} palpites</p>
                    </ContentSucess>
                </>
            )}
            {!isCorrect && (
                <ContentLoser>
                    <h1>Você Perdeu!</h1>
                    <span>A palavra da solução era: &nbsp;<SolutionLoser>{solution}</SolutionLoser></span>
                    <p>Tente Novamente!</p>
                </ContentLoser>
            )}
        </Container>
    )
}