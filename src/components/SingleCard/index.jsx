import { CardBack, Card, CardFront } from "./styles";

export function SingleCard ({ card, handleChoice, flipped, disabled }) {

    const handleClick = () => {
        if(!disabled) {
            handleChoice(card)
        }

    }

    return(
        <Card >
            <div className={flipped ? 'flipped' : ''} >
                <CardFront flipped={flipped} className='front' src={card.src} alt='cardFront'/>
                <CardBack flipped={flipped} onClick={handleClick}>?</CardBack>
            </div>
        </Card>
    )
}