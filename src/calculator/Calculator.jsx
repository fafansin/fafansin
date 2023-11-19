import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [ formula, setFormula ] = useState('0');
  const [ display, setDisplay ] = useState('0');

  const numbers = [1,2,3,4,5,6,7,8,9,0,'.']
  const operations = ['+', '-', "*", "/"]
  
    
  function onOperation(event){
    console.log(event.target.value);
  }

  function onNumber(event){
    console.log(event.target.value);
  }
  function onDecimal(event){
    console.log(event.target.value);
  }

  return(
    <div className="Calculator">
      <div className="display-wrap">
        <div id="formula">{ formula }</div>
        <div id="display">{ display }</div>
      </div>
      <div className="pads-wrap">
        <button className="pad wide" id="clear" onClick={onOperation} value="AC">AC</button>
        <button className="pad" id="divide" onClick={onOperation} value="/">/</button>
        <button className="pad" id="multiply" onClick={onOperation} value="*">x</button>

        <button className="pad" id="seven" onClick={onNumber} value="7">7</button>
        <button className="pad" id="eight" onClick={onNumber} value="8">8</button>
        <button className="pad" id="nine" onClick={onNumber} value="9">9</button>
        <button className="pad" id="subtract" onClick={onOperation} value="-">-</button>

        <button className="pad" id="four" onClick={onNumber} value="4">4</button>
        <button className="pad" id="five" onClick={onNumber} value="5">5</button>
        <button className="pad" id="six" onClick={onNumber} value="6">6</button>
        <button className="pad" id="add" onClick={onOperation} value="+">+</button>

        <button className="pad" id="one" onClick={onNumber} value="1">1</button>
        <button className="pad" id="two" onClick={onNumber} value="2">2</button>
        <button className="pad" id="three" onClick={onNumber} value="3">3</button>

        <button className="pad tall" id="equals" onClick={onOperation} value="=">=</button>
        
        <button className="pad wide" id="zero" onClick={onNumber} value="0">0</button>
        <button className="pad" id="decimal" onClick={onDecimal} value=".">.</button>
        
        
        
        
        
        
      </div>
    </div>
      
  )
}

export default Calculator