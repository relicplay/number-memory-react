
import Button from './Button';

const ButtonCollection = (
    props: {
        score: number;
        gameStatus: number;
        changeLevel: (value: number) => void;
        setgameStatus: (value: number) => void;
        level: number;
        maxLevel: number;
        randomNumbers: number[];
    }
) => {

    return (
        <div className="buttonwrapper">
            <Button title="Retry" id="retrybutton" onClick={() => props.setgameStatus(2)} isDisabled={props.gameStatus > 3} />
            <Button title="Reset" id="resetbutton" onClick={() => props.setgameStatus(1)} isDisabled={props.gameStatus > 3} />
            <Button
            className={`button ${props.level > props.maxLevel ? 'hidden' : ''}`}
            title="Next"
            id="nextbutton"
            onClick={() => props.changeLevel(props.level + 1)}
            isDisabled={props.gameStatus <= 3}
            />
        </div>
    )
};

export default ButtonCollection;