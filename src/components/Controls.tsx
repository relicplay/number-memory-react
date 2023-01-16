
const Controls = (props: {level: number; gameStatus: number}) => {

    let msg: string;

    props.gameStatus == 3 ? 
    msg='FAIL!'
    : props.gameStatus == 4 ? 
    msg='SUCCESS!' 
    : msg = `Level ${props.level}`;

    return (
        <h1 id="resultmessage">{msg}</h1>
    )
};

export default Controls;