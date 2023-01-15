import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Start from './components/Start';


function App() {

  const [level, setLevel] = useState(1);

  const changeLevel = (value: string) => {
    setLevel(Number(value));
  }

  return (
    <div className="wrapper">
        <Header />
        <main>

        <Start level={level} changeLevel={changeLevel} />

        <section className="gamescreen">

            <article id="randomdisplay"></article>

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

            <article className="loadingscreen">
                <div className="loader">
                    <span id="counter"></span>
                </div>
                <span className="loadertext">Memorize the numbers!</span>
                <button className="button" id="skipbutton">Skip</button>
            </article>

        </section>

        </main>
        <Footer />
    </div>
  );
}

export default App;
