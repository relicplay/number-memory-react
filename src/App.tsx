import React from 'react';
import './App.scss';

import Button from './components/Button';


function App() {
  return (
    <div className="wrapper">
        <header>
          <h1 className="headertitle">Memorize</h1>
          <h1 className="headertitle" id="headertitle-second">Number</h1>
          <h1 className="headertitle" id="headertitle-third">Sequence</h1>
        </header>
        <Button/>

        <main>

        <section className="startscreen">
            <button id="startbutton" className="button">Start</button>
            <div className="slidercontainer">
                <h1>Begin at Level:</h1>
                <input type="range" min="1" max="100" value="1" className="slider" id="levelslider" step="1" autoComplete="off" onChange={() => {console.log('value changed');}} />
                <h1 id="leveldisplay"></h1>
            </div>
        </section>

        </main>
        <footer>
        <p className="byline">
            Created by Fredrik Pihlgren, 2023.
        </p>
        </footer>
    </div>
  );
}

export default App;
