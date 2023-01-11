import { Container, ContentRules, NewGame } from "./styles";

export default function RulesGameWordle () {
    return(
        <Container>
            <h1>Leia as Regras</h1>
            <NewGame to='/games/gameWordle'>Iniciar Jogo</NewGame>
            <ContentRules>
                <h3>Instruções</h3>
                <p>- Uso somente de letras;</p>
                <p>- Use o teclado para digitar;</p>
                <p>- Backspace(apaga o valor digitado);</p>
                <p>- Enter(envia o valor digitado);</p>
                <p>- As palavras são aleatórias.</p>
                <br/>
                <spam style={{fontWeight: '600'}}>Legendas*</spam>
                <div>
                    <p><span style={{color: '#40DD50', fontWeight: '600'}}>Verde </span>Informa que a letra está no lugar correto.</p>
                    <p><span style={{color: '#FFD726', fontWeight: '600'}}>Amarelo </span>Informa que a letra está no lugar errado.</p>
                    <p><span style={{color: '#413F42', fontWeight: '600'}}>Cinza </span>Informa que não possui essa letra na palavra.</p>
                </div>

            </ContentRules>
        </Container>

    )
}