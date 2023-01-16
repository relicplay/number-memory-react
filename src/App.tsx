import React, { useState, useEffect, useRef } from 'react';
import './App.scss';
import { generateRandomArray, onlyAllowNumbers } from './scripts/script';

import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import Loader from './components/Loader';
import Display from './components/Display';
import Buttons from './components/Buttons';
import Controls from './components/Controls';

const maxLevel = 100;

function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [level, setLevel] = useState(1);
  const [gameOn, setGameOn] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const startGame: (newNumbers?: boolean) => void = (newNumbers = true) => {
    setScore(0);
    setInput('');
    setGameOn(1);
    setSecondsLeft(10 + Math.floor(level * 0.1));
    newNumbers && setRandomNumbers(generateRandomArray(3+level));
  }

  const compareNumbers = (guessedNumber: number, actualNumber: number) => {
    if (guessedNumber == actualNumber && score < input.length) {setScore(input.length);}
  //guessedNumber == actualNumber ? getPoint(userInputField.value.length-1) : gameResult(userInputField.value.length, false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(onlyAllowNumbers(event.target.value));
  }

  const changeLevel = (value: number) => {
    //setLevel(Number(value));
    setLevel(value);
  }

  useEffect(() => {
    input.length > 0 && compareNumbers(Number(inputRef.current?.value[input.length-1]), randomNumbers[input.length-1]);
  }, [input]);

  useEffect(() => {
    gameOn > 0 && startGame();
  }, [level]);


  return (
    <div className="wrapper">
        <Header />
        <main className={`${gameOn > 0 && 'main-boxshadow'}`}>

        {gameOn < 1 ? (
          <Start level={level} changeLevel={changeLevel} startGame={startGame} maxLevel={maxLevel} />
        )
        : (
          <section className="gamescreen">

            <Display randomNumbers={randomNumbers} gameOn={gameOn} secondsLeft={secondsLeft} score={score}/>

            {secondsLeft <= 0 ? (
              <article className="controls">
                <Controls level={level}/>

              <input type="text"
              id="inputfield"
              placeholder="Enter correct number sequence..."
              autoComplete="off"
              value={input}
              onChange={handleChange}
              maxLength={randomNumbers.length}
              ref={inputRef}
              /*
              onselectstart="return false"
              oncut="return false"
              onCopy="return false"
              onpaste="return false"
              ondrag="return false"
              ondrop="return false"
              */
              />

                <Buttons score={score} changeLevel={changeLevel} startGame={startGame} level={level} maxLevel={maxLevel} randomNumbers={randomNumbers}/>

              </article>
            )
            : (
              <Loader secondsLeft={secondsLeft} setSecondsLeft={setSecondsLeft} />
            )
            }

          </section>
        )}

        </main>
        <Footer />
    </div>
  );
}

export default App;
