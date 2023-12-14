import { useState } from 'react';
import Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrash, faFloppyDisk } from '@fortawesome/free-solid-svg-icons'


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
    save(id, todoItem);
    setEdit(false);
  }

  function handleRemove(event){
    remove(id);
  }

  return (
    <div className="item my-3">
      {!edit ? (
        <div className="displayForm d-flex justify-content-between align-items-end border">
          <div>{todoItem}</div>
          <div d-flex gap-2>
            <Button className="mx-1" onClick={handleEdit}><FontAwesomeIcon icon={faPencil} /></Button>
            <Button onClick={handleRemove}><FontAwesomeIcon icon={faTrash} /></Button>
          </div>
        </div>
      ) : (
        <div className="editForm d-flex justify-content-between align-items-end border">
          <input type="text" name="todo" id="todo" value={todoItem} onChange={handleChange} />
          <Button onClick={handleSave}><FontAwesomeIcon icon={faFloppyDisk} flip /></Button>
        </div>
      )}
      
      
      
    </div>
  )
}

export default Item