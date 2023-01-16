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
  const [gameStatus, setgameStatus] = useState(-1);
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(onlyAllowNumbers(event.target.value));
  }

  const changeLevel = (value: number) => {
    setLevel(value);
  }

  const compareNumbers = (guessedNumber: number, actualNumber: number) => {
    if (guessedNumber != actualNumber) {setgameStatus(3);return;}
    score < input.length && setScore(input.length);
    input.length >= randomNumbers.length && setgameStatus(4);
  }

  useEffect(() => {
    input.length > 0 && compareNumbers(Number(inputRef.current?.value[input.length-1]), randomNumbers[input.length-1]);
  }, [input]);

  useEffect(() => {
    gameStatus > 0 && setgameStatus(1);
  }, [level]);

  useEffect(() => {
    //1=reset mode, 2=retry mode, 3=fail, 4=success:
    if (gameStatus == 1 || gameStatus == 2) {
      setScore(0);
      setInput('');
      setSecondsLeft(10 + Math.floor(level * 0.1));
      gameStatus == 1 && setRandomNumbers(generateRandomArray(3+level));
      setgameStatus(0);
    }
  }, [gameStatus]);


  return (
    <div className={`wrapper ${gameStatus == 3 && 'gameover'}`}>
        <Header />
        <main className={`${gameStatus > 0 && 'main-boxshadow'}`}>

        {gameStatus < 0 ? (
          <Start level={level} changeLevel={changeLevel} setgameStatus={setgameStatus} maxLevel={maxLevel} />
        )
        : (
          <section className="gamescreen">

            <Display randomNumbers={randomNumbers} gameStatus={gameStatus} secondsLeft={secondsLeft} score={score}/>

            {secondsLeft <= 0 ? (
              <article className="controls">
                <Controls level={level} gameStatus={gameStatus}/>

              <input type="text"
              id="inputfield"
              placeholder="Enter correct number sequence..."
              autoComplete="off"
              value={input}
              onChange={handleChange}
              maxLength={randomNumbers.length}
              ref={inputRef}
              disabled={gameStatus >= 3}
              autoFocus
              onPaste={(e)=>{
                e.preventDefault()
                return false;
              }}
              onCopy={(e)=>{
                e.preventDefault()
                return false;
              }}
              onCut={(e)=>{
                e.preventDefault()
                return false;
              }}
              onDrop={(e)=>{
                e.preventDefault()
                return false;
              }}
              onDrag={(e)=>{
                e.preventDefault()
                return false;
              }}
              />

                <Buttons score={score} changeLevel={changeLevel} gameStatus={gameStatus} setgameStatus={setgameStatus} level={level} maxLevel={maxLevel} randomNumbers={randomNumbers}/>

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
