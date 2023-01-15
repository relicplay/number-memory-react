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

        </main>
        <Footer />
    </div>
  );
}

export default App;
