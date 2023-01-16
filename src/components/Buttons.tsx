
const Buttons = (props: {score: number; changeLevel: (value: number) => void; startGame: (value?: boolean) => void; level: number; maxLevel: number; randomNumbers: Array<number>;}) => {

    return (
        <div className="buttonwrapper">
            <button className="button" id="retrybutton" onClick={() => props.startGame(false)} disabled={props.score >= props.randomNumbers.length}>
                Retry
            </button>
            <button className="button" id="resetbutton" onClick={() => props.startGame()} disabled={props.score >= props.randomNumbers.length}>
                Reset
            </button>
            <button
            className={`button ${props.level > props.maxLevel ? 'hidden' : ''}`}
            id="nextbutton"
            onClick={() => props.changeLevel(props.level + 1)}
            disabled={props.score < props.randomNumbers.length}
            >
                Next
            </button>
        </div>
    )
};

export default Buttons;