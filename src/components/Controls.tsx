
const Controls = (
  props:
    {
      level: number;
      gameStatus: number;
      input: string;
      randomNumbers: number[];
      inputRef: React.RefObject<HTMLInputElement>;
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
              onPaste={(e)=>{
                e.preventDefault()
                return false;
              }}
              onCopy={(e)=>{
                e.preventDefault()
                return false;
              }}
              onCut={(e)=>{
                e.preventDefault()
                return false;
              }}
              onDrop={(e)=>{
                e.preventDefault()
                return false;
              }}
              onDrag={(e)=>{
                e.preventDefault()
                return false;
              }}
              />
              </>
    )
};

export default Controls;