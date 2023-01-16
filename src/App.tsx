import React, { useState, useEffect, useRef } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import Loader from './components/Loader';
import Display from './components/Display';

const maxLevel = 100;

const generateRandomArray = (iterations: number) => {
  return Array.from({ length: iterations }, () => Math.floor(Math.random() * 9) + 1);
}

const onlyAllowNumbers = (str: string) => {
  return str.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}

function App() {

  const inputRef = useRef<HTMLInputElement>(null);

  const [level, setLevel] = useState(1);
  const [gameOn, setGameOn] = useState(0);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [resultMsg, setResultMsg] = useState('');
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const startGame = () => {
    setScore(0);
    setInput('');
    setGameOn(1);
    setSecondsLeft(10 + Math.floor(level * 0.1));
    setResultMsg(`Level ${level}`);
    setRandomNumbers(generateRandomArray(3+level));
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

        {!gameOn ? (
          <Start level={level} changeLevel={changeLevel} startGame={startGame} maxLevel={maxLevel} />
        )
        : (
          <section className="gamescreen">

            <Display randomNumbers={randomNumbers} gameOn={gameOn} secondsLeft={secondsLeft} score={score}/>

            {secondsLeft <= 0 ? (
              <article className="controls">
              <h1 id="resultmessage">{resultMsg}</h1>

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
                <div className="buttonwrapper">
                    <button className="button" id="retrybutton" disabled={score >= randomNumbers.length}>Retry</button>
                    <button className="button" id="resetbutton" onClick={startGame} disabled={score >= randomNumbers.length}>Reset</button>
                    <button className="button" id="nextbutton" onClick={() => changeLevel(level + 1)} disabled={score < randomNumbers.length}>Next</button>
                </div>
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
