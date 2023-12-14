import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

function AddItem({handleAdd}) {
  const [ todo, setTodo ] = useState('');

  function handleSubmit(event){
    event.preventDefault();
    handleAdd(todo);
    setTodo("");
  }
  function handleChange(event){
    setTodo(event.target.value);
  }
  return (
    <Form onSubmit={handleSubmit} className="p-4">
      <h6>New Todo</h6>
      <Form.Group className="d-flex gap-2">
        <Form.Control type="text" onChange={handleChange} value={todo}></Form.Control>
        <Button type="submit" variant="outline-light">Add</Button>
      </Form.Group>
    </Form>
  )
}

export default AddItem