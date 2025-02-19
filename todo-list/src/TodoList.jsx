import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
  let [todos, setTodos] = useState([{task: "simple-task", id: uuidv4()}]) ;
  let [newTodo, setNewTodo] = useState("");

  let addNewTask = () => {
    setTodos((prevTodos) => {
      return [...prevTodos, {task:newTodo, id:uuidv4()}] ;
    });
    setNewTodo("");
  } ;

  let updateTodoValue = (event) => {
    setNewTodo(event.target.value) ;
  };

  let deleteTodo = (id) => {
    setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id)) ;
  }


let UpperCaseAll = () => {
  setTodos((todos) => todos.map((todo) => ({ ...todo, task: todo.task.toUpperCase() })));
};

let UpperCaseOne = (id) => {
  setTodos((todos) => todos.map((todo) => 
    todo.id === id ? { ...todo, task: todo.task.toUpperCase() } : todo
  ));
};

  return(
  <div>
    <input 
    placeholder="add a task" 
    onChange={updateTodoValue}
    value={newTodo}
    />
    <br />
    <button onClick={addNewTask}>Add Task</button>
    <br /><br /><br /><br /><br /><br />
    <hr />
    <h4>Tasks Todo</h4>
    <ul>
    {todos.map((todo) => (
        <li key={todo.id} >
        <span>{todo.task}</span>  
        <button  onClick={() => deleteTodo(todo.id)}>delete</button>
        <button  onClick={() => UpperCaseOne(todo.id)}>UpperCaseOne</button>
          </li>
    ))}


    </ul>
    <button onClick={UpperCaseAll}>UpperCaseAll</button>
     </div>
     );
}