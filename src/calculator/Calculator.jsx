import { useState } from 'react';
import './Calculator.scss';
import { Button } from 'react-bootstrap';

const Calculator = () => {
  const [ formula, setFormula ] = useState('');
  const [ display, setDisplay ] = useState(0);
  
  const regex = /[0-9]|\./;

  function onPress(event){
    event.preventDefault();
    const value = event.target.value;
    
    const isNumber = regex.test(value);
    const isOperation = !regex.test(value);
    
    const isFirstChar = parseInt(display) === 0;
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

          if(regex.test(lastChar)) { //kung number ang last char
            setDisplay(value);
            setFormula(`${form}${value}`);
          }else{
            setDisplay(value);
            if(secondToLast !== undefined && !regex.test(secondToLast)){
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
          if(regex.test(lastChar) || lastChar === '-') { 
            setDisplay(`${display}${value}`);
          }else{
            setDisplay(value);
          }
          setFormula(`${formula}${value}`);
        }
      break;
      default:
        console.log('LONER SA DEFAULT');
      break;
    }
    
  }


  function onEquals(event){
    event.preventDefault();
    if(formula.includes('=')){
      return
    }
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
      let ref;
      if(typeof curr === 'number'){
        switch(prev.operation){
          case "+":
            ref = {total:prev.total + curr, operation:prev.operation}
            break;
          case '-':
            ref = {total:prev.total - curr, operation:prev.operation}
            break;
          case '/':
            ref = {total:prev.total / curr, operation:prev.operation}
            break;
          case '*':
            ref = {total:prev.total * curr, operation:prev.operation}
            break;
          default:
            // do nothing
          break;
        }
      }else{
        ref = {total:prev.total, operation:curr}
      }
      return ref;
    }, {total:0, operation:'+'})
    
    setDisplay(total.total);
    setFormula(`${formula}=${total.total}`);
  

  }

  function onClear(event){
    event.preventDefault();
    setFormula('');
    setDisplay(0);
  }

  return(
    <>
      <h1 className="display-4 text-center">Calculator</h1>
      <div className="Calculator border shadow">
        <div className="display-wrap">
          <div id="formula">{ formula }</div>
          <div id="display">{ display }</div>
        </div>
        <div className="pads-wrap">
          <Button className="pad wide" variant="danger" id="clear" onClick={onClear} value="AC">AC</Button>
          <Button className="pad operation" variant="dark" id="divide" onClick={onPress} value="/">/</Button>
          <Button className="pad operation" variant="dark" id="multiply" onClick={onPress} value="*">x</Button>
          <Button className="pad" variant="secondary" id="seven" onClick={onPress} value="7">7</Button>
          <Button className="pad" variant="secondary" id="eight" onClick={onPress} value="8">8</Button>
          <Button className="pad" variant="secondary" id="nine" onClick={onPress} value="9">9</Button>
          <Button className="pad operation" variant="dark" id="subtract" onClick={onPress} value="-">-</Button>
          <Button className="pad" variant="secondary" id="four" onClick={onPress} value="4">4</Button>
          <Button className="pad" variant="secondary" id="five" onClick={onPress} value="5">5</Button>
          <Button className="pad" variant="secondary" id="six" onClick={onPress} value="6">6</Button>
          <Button className="pad operation" variant="dark" id="add" onClick={onPress} value="+">+</Button>
          <Button className="pad" variant="secondary" id="one" onClick={onPress} value="1">1</Button>
          <Button className="pad" variant="secondary" id="two" onClick={onPress} value="2">2</Button>
          <Button className="pad" variant="secondary" id="three" onClick={onPress} value="3">3</Button>
          <Button className="pad tall" id="equals" variant="primary" onClick={onEquals} value="=">=</Button>
          <Button className="pad wide" variant="secondary" id="zero" onClick={onPress} value="0">0</Button>
          <Button className="pad" variant="secondary" id="decimal" onClick={onPress} value=".">.</Button>
        </div>
      </div>
    </>
  )
}

export default Calculator