import { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [ formula, setFormula ] = useState('');
  const [ display, setDisplay ] = useState(0);
  
  const regex = /[0-9]|\./;

  const numbers = [1,2,3,4,5,6,7,8,9,0,'.'];
  const operations = ['+', '-', "*", "/"];
    
  function onPress(event){
    event.preventDefault();
    const value = event.target.value;
    
    const isNumber = numbers.find(item => item == value) != undefined;
    const isOperation = operations.find(item => item == value) != undefined;
    
    const isFirstChar = display == 0;
    const lastChar = formula[formula.length -1 ];
    //
    const idx = formula.indexOf("=");
    let solved = 0;
    if(idx >=0){
      solved = formula.substring(idx + 1);
    }

    switch(true){
      case value === '.':
        if(isFirstChar){
          setDisplay('0.');
        }else{
          //check mo kung meron na dating '.';
          if(!display.includes('.')){
            setDisplay(`${display}${value}`);
            setFormula(`${formula}${value}`);
          }
        }
      break;
      case value === '-':
        if(isFirstChar){
          setDisplay(value);
          setFormula(value);
        }else{
          if(lastChar !== '-'){
            let form = solved ? solved : formula;
            setDisplay(value)
            setFormula(`${form}${value}`)
          }
        }
      break;
      case isOperation:
        if(!isFirstChar){
          
          let form = solved ? solved : formula;
          let disp = solved ? solved : display;
          const lastChar = disp[disp.length -1];
          const secondToLast = form[form.length -2];
          if(numbers.find(item => item == lastChar) != undefined) { //kung number ang last char
            setDisplay(value);
            setFormula(`${form}${value}`);
          }else{
            setDisplay(value);
            if(secondToLast != undefined && operations.find(item => item == secondToLast) != undefined){
              setFormula(`${form.substring(0,form.length - 2)}${value}`);
            }else{
              setFormula(`${form.substring(0,form.length - 1)}${value}`);
            }
          }
        }
      break;
      case isNumber:
        if(isFirstChar || solved){
          setDisplay(value);
          setFormula(value);
        }else{
          const lastChar = formula[formula.length -1];
          if(numbers.find(item => item == lastChar) != undefined || lastChar == '-') { 
            setDisplay(`${display}${value}`);
          }else{
            setDisplay(value);
          }
          setFormula(`${formula}${value}`);
        }
      break;
      case value === '=':
        const regex = /[0-9]|\./;
        let temp = '';
        let all = [];
        
        for(let i =0; i < formula.length; i++){
          let curr = formula[i];
          let prev = formula[i-1]
          
          if(regex.test(curr)){
            temp += curr;
          }else{
            if(regex.test(prev)){ // Operator ka tas ang previous ay number
              all.push(parseFloat(temp));  
              all.push(curr);
              temp = '';
            }else{ //Operator ka tas previous mo operator din. malamang negative ka
              temp = curr;
            }
          }
        }
        all.push(parseFloat(temp));
        
        if(isNaN(all[all.length-1])){
          all.pop()
        }
        if(isNaN(all[all.length-1])){
          all.pop()
        }
        
        let total = all.reduce((prev, curr) => {
          if(typeof curr == 'number'){
            switch(prev.operation){
              case "+":
                return {total:prev.total + curr, operation:prev.operation}
                break;
              case '-':
                return {total:prev.total - curr, operation:prev.operation}
                break;
              case '/':
                console.log("DIVIDE")
                return {total:prev.total / curr, operation:prev.operation}
                break;
              case '*':
                console.log("MULTIPLY")
                return {total:prev.total * curr, operation:prev.operation}
                break;
            }
          }else{
            return {total:prev.total, operation:curr}
          }
        }, {total:0, operation:'+'})
        
        setDisplay(total.total);
        setFormula(`${formula}=${total.total}`);
      break;
      default:
        console.log('LONER SA DEFAULT');
      break;
    }
    
  }


  function onDecimal(event){
    console.log(event.target.value);
  }

  function onClear(event){
    event.preventDefault();
    setFormula('');
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
        <button className="pad" id="decimal" onClick={onPress} value=".">.</button>
        
      </div>
    </div>
      
  )
}

export default Calculator