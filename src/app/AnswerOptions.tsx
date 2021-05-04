import Shuffle from "../util/Shuffle";


type Props = {
    choices: Array<string>
}

const AnswerOptions = (props: Props) => {
    const {choices} = props;

    return(<div>{
        Shuffle(choices).map((choice) => <div><button key={choice}>{choice}</button></div>)
    }</div>)
}

export default AnswerOptions;