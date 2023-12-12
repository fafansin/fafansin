import { useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Die from './Die';
import Button from 'react-bootstrap/Button';

// import {} from '


function Dice({nDices=2}) {
  const [ faces, setFaces ] = useState([]);
  const [ rolling, setRolling ] = useState(false);
  const mounted = useRef();
  

  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
      // rollDice()
      rollDice();
    }
  });

  function rollDice(){
    const ref = [];
    for(let i = 0; i < nDices; i++){
      ref.push(getRandom());
    }
    setRolling(true);
    setFaces(ref);
    setTimeout(() => {setRolling(false)}, 1000)
  }
  function getRandom(){
    return Math.floor(Math.random() * 6);
    
  }
  return (
    <div className="Dice shadow border text-center p-5">
      <h1 className="h1 mb-3">Roll Dice</h1>
      <div className="dice-wrap d-flex mb-5">
        { faces.map((face)=> <Die key={uuidv4()} face={face} rolling={rolling}/>)}
      </div>
      <Button variant="primary" onClick={rollDice} disabled={rolling}>{rolling ? 'rolling..' : "Roll Dice!"}</Button>
    </div>
  )
}

export default Dice