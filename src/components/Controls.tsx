
const Controls = (props: {level: number;}) => {

    let msg = `Level ${props.level}`;

    return (
        <h1 id="resultmessage">{msg}</h1>
    )
};

export default Controls;