import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import "./Guess.scss";

function Guess() {
  const min = 1;
  //
  const [ answers, setAnswers ] = useState([]);
  const [ display, setDisplay ] = useState('');
  const [ answer, setAnswer ] = useState(null);
  const [ max, setMax ] = useState(100);
  
  function onStart(event){
    event.preventDefault();
    setAnswer(getRandomNumber());
  }

  function onChange(event){
    setMax(event.target.value);
  }

  function onGuess(event){
    event.preventDefault();
    
    const entered = event.target.guess.value;
    console.log("This is the ", answer)
    let stat;  
    if(answer < entered ){
      stat = 'Try Lower';
    }else if(answer > entered){
      stat = 'Try Higher';
    }else{
      stat = `Congratulations! you guessed the number in ${answers.length + 1} attempts!`;
    }
    setDisplay(stat);
    setAnswers([...answers, `${entered} - ${stat}`]);
  }

  function getRandomNumber(){
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }

  return (
    <div className="guess shadow container">
      <Form onSubmit={onStart}>
        <Form.Label>Give me a High Number</Form.Label>
        <Form.Control type="number" name="maximum" value={max} step={1} min={min} onChange={onChange}/>
        <Button type="submit" variant="primary">Start</Button>
      </Form>
      
      <Form onSubmit={onGuess} className="my-5">
        <Form.Group>
          <Form.Label>{`Guess the number between ${min} to ${max}`}</Form.Label>
          <Form.Control type="text" name="guess" placeholder="Enter Name" />
          <Form.Text>{display}</Form.Text>
        </Form.Group>
      </Form>
      
      <div className="attemps">
        <p>Attempts: {answers.length}</p>
        <ol>
          { answers.map((item) => <li key={uuidv4()}>{item} </li>) }
        </ol>
      </div>
      
    </div>
      
  )
}

export default Guess