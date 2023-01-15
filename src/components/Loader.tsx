const Loader = (props: {secondsLeft: number; setSecondsLeft: (value: number) => void;}) => {

    return (
        <article className="loadingscreen">
        <div className="loader">
            <span id="counter">{props.secondsLeft}</span>
        </div>
        <span className="loadertext">Memorize the numbers!</span>
        <button className="button" id="skipbutton" onClick={() => props.setSecondsLeft(0)}>Skip</button>
        </article>
    )
};

export default Loader;