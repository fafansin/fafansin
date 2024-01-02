import {useState, useEffect, useRef} from 'react';
import { Card, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

function Game({minimum=1, maximum=100, onFinish}) {
  const [ answers, setAnswers ] = useState([]);
  const [ display, setDisplay ] = useState('');
  const [ entered, setEntered ] = useState('');
  const [ answer, setAnswer ] = useState(null);
  //
  const mounted = useRef();

  useEffect(() => {
    if(!mounted.current){
      mounted.current = true;
      setAnswer(Math.floor(Math.random() * (maximum-minimum + 1)) + minimum);
    }
  }, [answer, maximum, minimum]);
  
  function onChange(event){
    setEntered(event.target.value);
  }

  function onGuess(event){
    event.preventDefault();
    if(entered === ''){
      return
    }
    let stat;  
    if(answer < entered ){
      stat = 'Too High';
    }else if(answer > entered){
      stat = 'Too Low';
    }else{
      stat = 'Congrats!';
      onFinish(answers.length + 1);
    }
    setDisplay(stat);
    setAnswers([...answers, `${entered} - ${stat}`]);
    setEntered('');
  }

  return (
    <Card className="Game border shadow">
        <Card.Body>
          <p className="text-center">Guess the number between <br/><strong>{`${minimum} to ${maximum}`}</strong></p>
          <Form onSubmit={onGuess}>
            <Form.Control 
              type="number" 
              name="guess" 
              id="guess" 
              max={maximum} 
              step={1} 
              min={minimum} 
              onChange={onChange} 
              value={entered}
              placeholder={display}/>
          </Form>
          
          <div className={`attemps my-5 ${answers.length > 0 ? 'show' : 'hide'}` }>
            <p>Attempts: {answers.length}</p>
            <ul>
              { answers.map((item) => <li key={uuidv4()}>{item} </li>) }
            </ul>
          </div>
        </Card.Body>
      </Card>
  )
}

export default Game