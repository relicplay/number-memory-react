import { useTimerEffect } from '../scripts/myUseEffects';
import Button from './Button';

const Loader = (
  props: {
    secondsLeft: number;
    setSecondsLeft: (value: number) => void;
  }
  ) => {

    useTimerEffect(props.secondsLeft, props.setSecondsLeft);

    return (
        <article className="loadingscreen">
        <div className="loader">
            <span id="counter">{props.secondsLeft}</span>
        </div>
        <span className="loadertext">Memorize the numbers!</span>
        <Button title="Skip" id="skipbutton" onClick={() => props.setSecondsLeft(0)} />
        </article>
    )
};

export default Loader;