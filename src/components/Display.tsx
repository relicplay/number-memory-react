const Display = (
  props: {
    randomNumbers: number[];
    gameStatus: number;
    secondsLeft: number;
    score: number;
  }
  ) => {

    return (
        <article id="randomdisplay">
        
        {props.randomNumbers.map((e, index) => {
            //const imgPath = `/images/${e}.png`;
            //Having "homepage" in package.json prevents images from showing. The code below fixes this:
            const imgPath = `${process.env.PUBLIC_URL}/images/${e}.png`;
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