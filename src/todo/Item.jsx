import { useState } from 'react';
import Button  from 'react-bootstrap/Button';
import Form  from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


function Item({id, todo, save, remove}) {
  const [ edit, setEdit ] = useState(false);
  const [ todoItem, setTodoItem ] = useState(todo);
  
  function handleChange(event){
    setTodoItem(event.target.value);
  }
  function handleEdit(){
    setEdit(!edit);
  }
  function handleSave(event){
    event.preventDefault();
    save(id, todoItem);
    setEdit(false);
  }

  function handleRemove(event){
    remove(id);
  }

  return (
    <div className="Item my-1 px-4 py-1">
      {!edit ? (
        <div className="displayForm d-flex justify-content-between align-items-center">
          <div>{todo}</div>
          <div className="d-flex">
            <Button variant="link" onClick={handleEdit}><FontAwesomeIcon icon={faPencil} /></Button>
            <Button variant="link" onClick={handleRemove}><FontAwesomeIcon icon={faTrash} /></Button>
          </div>
        </div>
      ) : (
        <Form className="editForm d-flex justify-content-start align-items-center gap-1" onSubmit={handleSave}>
          <Form.Control name="todo" id="todo" value={todoItem} onChange={handleChange}></Form.Control>
          <Button type="submit" variant="outline-light" className="bg-primary">Save</Button>
        </Form>
      )}
    </div>
  )
}

export default Item