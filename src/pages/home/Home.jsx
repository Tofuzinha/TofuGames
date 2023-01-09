import { Container, WellCome } from "./styles";
import wellcome from '../../assets/person.gif';

export function Home () {
    return (
        <Container>
            <h1>Bem vindos!!</h1>
            <WellCome src={wellcome} alt='wellcome'></WellCome>
        </Container>
    )
}