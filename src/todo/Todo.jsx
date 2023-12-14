import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './AddItem';
import Item from './Item';

function Todo() {
  const [ todos, setTodos] = useState([
    {id:uuidv4(), todo:"Make Milk"},
    {id:uuidv4(), todo:"Bike around town"}
  ]);
  
  function add(todo){
    setTodos([...todos, {id:uuidv4(), todo:todo}])
  }

  function remove(id){
    setTodos(todos.filter(item => item.id !== id));
  }

  function save(id, todo){
    console.log(todos);
  }
  
  return (
    <div className="Todo">
      <h1 className="h1 text-center">Todo List</h1>
      <div className="card py-3 px-2 shadow" style={{width:"400px"}}>
        <div className="list">
          {todos.map((todo) => (
            <Item id={todo.id} todo={todo.todo} save={save} remove={remove}/>
          ))}
          
        </div>
        <AddItem handleAdd={add}/>
      </div>
    </div>
  )
}

export default Todo