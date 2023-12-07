import { useState } from 'react';
import "./Guess.scss";
import Settings from './Settings.jsx';
import Game from './Game.jsx';
import Splash from './Splash.jsx';

function Guess() {
  const [ answer, setAnswer ] = useState(null);
  const [ max, setMax ] = useState(null);
  const [ min, setMin ] = useState(null);
  
  function handleStart(data){
    setAnswer(data.rand);
    setMax(data.max);
    setMin(data.min);
  }

  function onFinish(data){
    console.log('Display the Splash');
  }

  return (
    <div className="guess container">
      {!answer ? (<Settings onStart={handleStart} />) : (<Game answer={answer} maximum={max} minimum={min} onFinish={onFinish} />)}
    </div>
  )
}

export default Guess