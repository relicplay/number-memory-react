const Display = (props: {randomNumbers: Array<number>; gameOn: number; secondsLeft: number}) => {

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
          className={`image ${props.gameOn && props.secondsLeft <= 0 ? 'image-hide' : ''}`}
          />
        );
      })}

        </article>
    )
};

export default Display;