import { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function Guess() {
  const min = 1;
  const max = 100;
  //
  const [ answers, setAnswers ] = useState([]);
  const [ display, setDisplay ] = useState('');
  const [ answer, setAnswer ] = useState(null);
  
  function onSubmit(event){
    event.preventDefault();
    console.log(event.target.user.value);
    const entered = event.target.user.value;
    if(answer === null){
      setDisplay('Press Start 1st');
      return;
    }

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

  function onStart(event){
    event.preventDefault();
    setAnswer(getRandomNumber());
  }

  function getRandomNumber(){
    return Math.floor(Math.random() * (max-min + 1)) + min;
  }

  return (
    <div className="guess">
      <Button variant="primary" onClick={onStart}>Let's Go!</Button>
      <Form onSubmit={onSubmit} className="my-5">
        <Form.Group>
          <Form.Label>{`Guess the number between ${min} to ${max}`}</Form.Label>
          <Form.Control type="text" name="user" placeholder="Enter Name" />
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