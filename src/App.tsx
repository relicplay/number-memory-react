import React, { useState, useEffect } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';
import Loader from './components/Loader';


function App() {

  const [level, setLevel] = useState(1);
  const [gameStatus, setGameStatus] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);

  const changeLevel = (value: string) => {
    setLevel(Number(value));
  }

  const startGame = () => {
    setGameStatus(1);
    setSecondsLeft(10 + Math.floor(level * 0.1));
  }

  useEffect(() => {
    if (secondsLeft > 0) {
      const intervalId = setInterval(() => {
        setSecondsLeft(currentCount => {return currentCount - 1});
      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [secondsLeft]);


  return (
    <div className="wrapper">
        <Header />
        <main className={`${gameStatus > 0 && 'main-boxshadow'}`}>

        {gameStatus < 1 ? (
          <Start level={level} changeLevel={changeLevel} startGame={startGame} />
        )
        : (
          <section className="gamescreen">

            <article id="randomdisplay"></article>

            {gameStatus > 1 ? (
              <article className="controls">
              <h1 id="resultmessage"></h1>

              <input type="text"
              id="inputfield"
              placeholder="Enter correct number sequence..."
              autoComplete="off"
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
                    <button className="button" id="retrybutton">Retry</button>
                    <button className="button" id="resetbutton">Reset</button>
                    <button className="button" id="nextbutton">Next</button>
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
