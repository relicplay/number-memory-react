const Display = (props: {randomNumbers: Array<number>; gameStatus: number; secondsLeft: number; score: number}) => {

  //props.gameStatus == 1 && 

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
          className={`image ${props.secondsLeft <= 0 && props.score <= index ? 'image-hide' : ''}`}
          />
        );
      })}

        </article>
    )
};

export default Display;