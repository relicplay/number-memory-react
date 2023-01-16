const Display = (props: {randomNumbers: Array<number>; gameOn: number; secondsLeft: number; score: number}) => {

    return (
        <article id="randomdisplay">
        
        {props.randomNumbers.map((e, index) => {
            const imgPath = `images/${e}.png`;
            const id = `image${index}`;
        return (
          <img
          key={index}
          src={imgPath}
          id={id}
          alt="image"
          className={`image ${props.gameOn && props.secondsLeft <= 0 && props.score <= index ? 'image-hide' : ''}`}
          />
        );
      })}

        </article>
    )
};

export default Display;