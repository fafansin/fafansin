import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [ formula, setFormula ] = useState(0);
  const [ display, setDisplay ] = useState(0);
  

  const numbers = [1,2,3,4,5,6,7,8,9,0,'.']
  const operations = ['+', '-', "*", "/"]
  
    
  function onPress(event){
    event.preventDefault();
    const value = event.target.value
    const isFirst = formula === '';
    const prevNum = formula[formula.length-1];
    const prevNum2 = formula[formula.length-2];
    
    //
    const isNumber = numbers.findIndex((num) => num === parseInt(value)) >= 0;
    const isPrevNum = numbers.findIndex((num) => num === parseInt(prevNum)) >= 0;
    const isPrevNum2 = numbers.findIndex((num) => num === parseInt(prevNum2)) >= 0;
    
    if(isFirst){ // Is First Character
      setDisplay(value);
      setFormula(value);
    }else{
      if(isNumber){ // Number ka kasi
        if(isPrevNum){
          setDisplay(`${display}${value}`);
        }else{
          setDisplay(value);
        }
        setFormula(`${formula}${value}`);
      }else{ // Hindi ka Number
        setDisplay(value);
        if(isPrevNum){ //hindi ka number at before mo ay number
          setFormula(`${formula}${value}`);
        }else{ // hindi ka number at before mo ay hindi number
          if(value === '-' && isPrevNum2){ //hindi ka number, before mo eh hindi din number pero - ka
            setFormula(`${formula}${value}`);
          }else{ //hindi ka number, before mo hindi number at hindi ka -
            if(prevNum2 !== undefined && !isPrevNum2){
              setFormula(`${formula.slice(0, formula.length-2)}${value}`)
            }else{
              setFormula(`${formula.slice(0, formula.length-1)}${value}`)
            }
          }
        }
      }
    }
    
    
  }
  function onDecimal(event){
    console.log(event.target.value);
  }

  function onClear(event){
    event.preventDefault();
    setFormula(0);
    setDisplay(0);
  }

  return(
    <div className="Calculator">
      <div className="display-wrap">
        <div id="formula">{ formula }</div>
        <div id="display">{ display }</div>
      </div>
      <div className="pads-wrap">
        <button className="pad wide" id="clear" onClick={onClear} value="AC">AC</button>
        <button className="pad operation" id="divide" onClick={onPress} value="/">/</button>
        <button className="pad operation" id="multiply" onClick={onPress} value="*">x</button>

        <button className="pad" id="seven" onClick={onPress} value="7">7</button>
        <button className="pad" id="eight" onClick={onPress} value="8">8</button>
        <button className="pad" id="nine" onClick={onPress} value="9">9</button>
        <button className="pad operation" id="subtract" onClick={onPress} value="-">-</button>

        <button className="pad" id="four" onClick={onPress} value="4">4</button>
        <button className="pad" id="five" onClick={onPress} value="5">5</button>
        <button className="pad" id="six" onClick={onPress} value="6">6</button>
        <button className="pad operation" id="add" onClick={onPress} value="+">+</button>

        <button className="pad" id="one" onClick={onPress} value="1">1</button>
        <button className="pad" id="two" onClick={onPress} value="2">2</button>
        <button className="pad" id="three" onClick={onPress} value="3">3</button>

        <button className="pad tall" id="equals" onClick={onPress} value="=">=</button>
        
        <button className="pad wide" id="zero" onClick={onPress} value="0">0</button>
        <button className="pad" id="decimal" onClick={onDecimal} value=".">.</button>
        
        
        
        
        
        
      </div>
    </div>
      
  )
}

export default Calculator