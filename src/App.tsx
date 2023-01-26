import React, { useState, useRef } from 'react';
import './App.scss';
import { generateRandomArray, onlyAllowNumbers } from './scripts/script';
import { useInputEffect, useLevelEffect, useGameStatusEffect } from './scripts/myUseEffects';
//import { handleChange } from './scripts/myStates';

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

  
  //UseEffects:
  useInputEffect(input, inputRef, compareNumbers, randomNumbers);
  useLevelEffect(gameStatus, level, setgameStatus);
  useGameStatusEffect(gameStatus, level, setScore, setInput, setSecondsLeft, setRandomNumbers, setgameStatus, generateRandomArray);
  


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
                <Controls level={level} gameStatus={gameStatus} input={input} randomNumbers={randomNumbers} inputRef={inputRef} handleChange={handleChange}/>
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
