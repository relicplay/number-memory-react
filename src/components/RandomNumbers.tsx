const RandomNumbers = (props: {randomNumbers: Array<number>}) => {

    return (
        <article id="randomdisplay">
        
        {props.randomNumbers.map((e, index) => {
            const imgPath = `images/${e}.png`;
        return (
          <img key={index} src={imgPath} />
        );
      })}

        </article>
    )
};

export default RandomNumbers;