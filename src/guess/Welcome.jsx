import { useState } from 'react'
import { Button, Form } from 'react-bootstrap';

function Welcome({min=1, maximum=100, onStart}) {
  const [ max, setMax ] = useState(maximum);

  function onChange(event){
    event.preventDefault();
    setMax(event.target.value);
  }

  function onSubmit(event){
    event.preventDefault();
    onStart({rand:getRandomNumber(), max:max});

  }
  function getRandomNumber(){
    return Math.floor(Math.random() * (maximum-min + 1)) + min;
  }

  
  return (
    <div className="Welcome">
      <Form.Label>Give me a High Number</Form.Label>
      <Form.Control type="number" name="maximum" value={max} step={1} min={min} onChange={onChange}/>
      <Button variant="primary" onClick={onSubmit}>Start</Button>
    </div>
  )
}

export default Welcome