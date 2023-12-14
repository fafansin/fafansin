import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddItem from './AddItem';
import Item from './Item';
import './Todo.scss';

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

  function save(id, action){
    setTodos(todos.map(todo => {
      if(todo.id === id){
        return {id:id, todo:action}
      }else{
        return todo;
      }
    }))
  }
  
  return (
    <div className="Todo card  bg-primary text-light shadow">
      <div className="header py-3 px-4">
        <h1 className="h1 m-0">Todo List</h1>
        <p className="border-bottom">A Simple react Todo List app.</p>
      </div>
      
      <div className="list">
        {todos.map((todo) => (
          <Item id={todo.id} todo={todo.todo} save={save} remove={remove}/>
        ))}
        
      </div>
      <AddItem handleAdd={add}/>
      
    </div>
  )
}

export default Todo