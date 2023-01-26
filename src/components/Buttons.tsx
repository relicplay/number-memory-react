
const Buttons = (
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
            <button className="button" id="retrybutton" onClick={() => props.setgameStatus(2)} disabled={props.gameStatus > 3}>
                Retry
            </button>
            <button className="button" id="resetbutton" onClick={() => props.setgameStatus(1)} disabled={props.gameStatus > 3}>
                Reset
            </button>
            <button
            className={`button ${props.level > props.maxLevel ? 'hidden' : ''}`}
            id="nextbutton"
            onClick={() => props.changeLevel(props.level + 1)}
            disabled={props.gameStatus <= 3}
            >
                Next
            </button>
        </div>
    )
};

export default Buttons;