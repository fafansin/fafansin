import { useState } from 'react';
import "./Guess.scss";
import Settings from './Settings.jsx';
import Game from './Game.jsx';
import Splash from './Splash.jsx';

function Guess() {
  const [ max, setMax ] = useState(null);
  const [ min, setMin ] = useState(null);
  const [ page, setPage ] = useState('settings');
  const [ attempts, setAttempts ] = useState(0);
  
  function handleStart(data){
    setMax(data.max);
    setMin(data.min);
    setPage('game');
  }

  function onAgain(){
    setPage('game');
  }

  function onSettings(){
    setPage('settings');
  }

  function onFinish(attempts){
    // re
    setAttempts(attempts);
    setPage('splash');
    console.log('Display the Splash');
  }

  return (
    <div className="guess container">
      {page === 'settings' ? <Settings onStart={handleStart} /> : page === 'game' ? <Game maximum={max} minimum={min} onFinish={onFinish} /> : <Splash onAgain={onAgain} onSettings={onSettings} total={attempts}/> }
    </div>
  )
}

export default Guess