import { restrictInput } from '../scripts/script';


const Controls = (
  props:
    {
      level: number;
      gameStatus: number;
      input: string;
      randomNumbers: number[];
      inputRef: React.RefObject<HTMLInputElement>;
      //handleChange: (event: React.ChangeEvent<HTMLInputElement>, setInput: (value: string) => string, onlyAllowNumbers: (value: string) => string) => void;
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    }
  ) => {

    let msg: string;

    props.gameStatus == 3 ? 
    msg='FAIL!'
    : props.gameStatus == 4 ? 
    msg='SUCCESS!' 
    : msg = `Level ${props.level}`;

    return (
        <>
        <h1 id="resultmessage">{msg}</h1>

        <input type="text"
              id="inputfield"
              placeholder="Enter correct number sequence..."
              autoComplete="off"
              value={props.input}
              onChange={props.handleChange}
              maxLength={props.randomNumbers.length}
              ref={props.inputRef}
              disabled={props.gameStatus >= 3}
              autoFocus
              onPaste={(e) => restrictInput(e)}
              onCopy={(e) => restrictInput(e)}
              onCut={(e) => restrictInput(e)}
              onDrop={(e) => restrictInput(e)}
              onDrag={(e) => restrictInput(e)}
              />
              </>
    )
};

export default Controls;