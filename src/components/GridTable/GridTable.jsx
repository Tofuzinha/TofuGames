import RowTable from "../RowTable/RowTable";
import { Container } from "./styles";

export default function GridTable ({ currentGuess, guesses, turn }) {
    return(
        <Container>
            {guesses.map((g, i) => {
                if(turn === i) {
                    return <RowTable key={i} currentGuess={currentGuess} />
                }
                return <RowTable key={i} guess={g} />
            })}

        </Container>
    )
}
