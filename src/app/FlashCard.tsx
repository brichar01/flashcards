import flashCards from '../cards/greetings.json';
import AnswerOptions from "./AnswerOptions";

const FlashCard = () => {
    let flashCard = flashCards[1]
    const choices = flashCards.map((card) => card.flashCardReverse)

    return(
        <div className="App-header">
        <h1>
            {flashCard.flashCardFront}
        </h1>
            <AnswerOptions choices={choices}/>
        </div>
    )
}

export default FlashCard;