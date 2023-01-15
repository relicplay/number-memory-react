
const Start = (props: {level: any; changeLevel: (value: string) => void}) => {

    return (<section className="startscreen">
    <button id="startbutton" className="button">Start</button>
    <div className="slidercontainer">
        <h1>Begin at Level:</h1>
        <input type="range" min="1" max="100" value={props.level} className="slider" id="levelslider" step="1" autoComplete="off" 
        onChange={(e) => {props.changeLevel(e.target.value);}} 
        />
        <h1 id="leveldisplay">{props.level}</h1>
    </div>
    </section>)
};

export default Start;