import React, { useState } from 'react';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';


function App() {

  const [level, setLevel] = useState(1);

  const changeLevel = (value: string) => {
    setLevel(Number(value));
  }

  return (
    <div className="wrapper">
        <Header />
        <main>

        <section className="startscreen">
            <button id="startbutton" className="button">Start</button>
            <div className="slidercontainer">
                <h1>Begin at Level:</h1>
                <input type="range" min="1" max="100" value={level} className="slider" id="levelslider" step="1" autoComplete="off" onChange={(e) => {changeLevel(e.target.value);}} />
                <h1 id="leveldisplay"></h1>
            </div>
        </section>

        </main>
        <Footer />
    </div>
  );
}

export default App;
