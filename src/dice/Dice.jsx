import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Die from './Die';
import Button from 'react-bootstrap/Button';

function Dice({nDices=2}) {
  const [ state, setState] = useState({faces:getFaces(), rolling:false});
  
  function getFaces(){
    const ref = [];
    for(let i = 0; i < nDices; i++){
      ref.push(getRandom());
    }
    return ref;
  }
  function rollDice(){
    
    setState({...state, rolling:true});
    
    setTimeout(() => {
      setState({faces:getFaces(), rolling:false})
    }, 1000)
  }
  function getRandom(){
    return Math.floor(Math.random() * 6);
  }

  return (
    <div className="Dice shadow border text-center p-5">
      <h1 className="h1 mb-3">Roll Dice</h1>
      <div className="dice-wrap d-flex mb-5">
        { state.faces.map((face)=> <Die key={uuidv4()} face={face} rolling={state.rolling}/>)}
      </div>
      <Button variant="primary" onClick={rollDice} disabled={state.rolling}>{state.rolling ? 'rolling..' : "Roll Dice!"}</Button>
    </div>
  )
}

export default Dice