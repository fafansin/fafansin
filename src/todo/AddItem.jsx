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
    <Form onSubmit={handleSubmit}>
      <Form.Control type="text" onChange={handleChange} value={todo}></Form.Control>
      <Button type="submit" variant="primary">Add</Button>
    </Form>
  )
}

export default AddItem