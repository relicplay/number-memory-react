import Start from './Start';
import Loader from './Loader';
import Display from './Display';
import Buttons from './Buttons';
import Controls from './Controls';

const GameScreen = (
  props: {
    gameStatus: number,
    level: number,
    changeLevel: (value: number) => void,
    setgameStatus: (value: number) => void,
    maxLevel: number,
    randomNumbers: number[],
    secondsLeft: number,
    score: number,
    input: string,
    inputRef: React.RefObject<HTMLInputElement>,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    setSecondsLeft: (value: number) => void
  }
  ) => {

    if (props.gameStatus < 0) {
      return <Start level={props.level} changeLevel={props.changeLevel} setgameStatus={props.setgameStatus} maxLevel={props.maxLevel} />
    }
    return (
      <section className="gamescreen">
        <Display randomNumbers={props.randomNumbers} gameStatus={props.gameStatus} secondsLeft={props.secondsLeft} score={props.score}/>
        {props.secondsLeft <= 0 ? (
          <article className="controls">
            <Controls level={props.level} gameStatus={props.gameStatus} input={props.input} randomNumbers={props.randomNumbers} inputRef={props.inputRef} handleChange={props.handleChange}/>
            <Buttons score={props.score} changeLevel={props.changeLevel} gameStatus={props.gameStatus} setgameStatus={props.setgameStatus} level={props.level} maxLevel={props.maxLevel} randomNumbers={props.randomNumbers}/>
          </article>
        )
        : (
          <Loader secondsLeft={props.secondsLeft} setSecondsLeft={props.setSecondsLeft} />
        )}
      </section>
    )
  }
  
export default GameScreen;