import { useState } from 'react'
import { Button, Form, InputGroup, Col, Row } from 'react-bootstrap';

function Settings({minimum=1, maximum=100, onStart}) {
  const [ max, setMax ] = useState(maximum);
  const [ min, setMin ] = useState(minimum);
  const [ errors, setErrors ] =  useState({});

  function onSubmit(event){
    event.preventDefault();
    const errData = validation();
    if(errData){
      setErrors(errData);
      return
    }
    onStart({max:max, min:min});

  }
  
  function validation(){
    let ref = null;
    if(max <= min){
      ref = {...ref, max:true}
    }
    if(min <= 0){
      ref = {...ref, min:true}
    }
    return ref;
  }

  
  return (
      <div className="Settings container border shadow py-3">
        <h5 className="h2 text-center">Guessing Game</h5>
        <p className="text-center">Let's set you up!</p>
        <Form>
          <Row className='mb-3'>
            <Col>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Text id="minimum">MIN</InputGroup.Text>
                  <Form.Control type="number" name="minimum" aria-describedby="minimum" 
                    value={min} max={max} min={1} 
                    isInvalid={!!errors.min}
                    onChange={(event) => setMin(parseInt(event.target.value))}/>
                  <Form.Control.Feedback type="invalid">Put higher than 1</Form.Control.Feedback>
                </InputGroup>
                
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <InputGroup>
                  <InputGroup.Text id="maximum">MAX</InputGroup.Text>
                  <Form.Control type="number" name="maximum" aria-describedby="maximum" 
                    value={max} min={min} 
                    isInvalid={!!errors.max}
                    onChange={(event) => setMax(parseInt(event.target.value))}/>
                  <Form.Control.Feedback type="invalid">Put higher than Min</Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" onClick={onSubmit}>Start</Button>    
        </Form>
      </div>
  )
}

export default Settings