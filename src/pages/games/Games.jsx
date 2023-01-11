import { CardGames, Container, ContentGames, NameGames } from "./styles";

export function Games () {
    return(
        <Container>
            <ContentGames>
                <CardGames>
                    <NameGames to='/games/gameMemory'>Jogo da Memória</NameGames>
                    <NameGames to='/games/gameOld'>Jogo da Velha</NameGames>
                    <NameGames to='/games/RulesGameWordle'>Jogo das Palavras</NameGames>
                </CardGames>
            </ContentGames>
        </Container>
    )
}