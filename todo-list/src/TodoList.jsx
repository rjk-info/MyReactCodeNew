import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  const [todos, setTodos] = useState([{ task: "simple-task", id: uuidv4(), isDone: false }]);
  const [newTodo, setNewTodo] = useState("");

  const addNewTask = () => {
    setTodos((prevTodos) => [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }]);
    setNewTodo("");
  };

  const updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const UpperCaseAll = () => {
    setTodos((todos) => todos.map((todo) => ({ ...todo, task: todo.task.toUpperCase() })));
  };

  const markAsDone = (id) => {
    setTodos((todos) => todos.map((todo) => todo.id === id ? { ...todo, isDone: true, task: todo.task.toUpperCase() } : todo));
  };

  return (
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
          <li key={todo.id}>
            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}</span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => markAsDone(todo.id)}>Mark as done</button>
          </li>
        ))}
      </ul>
      <button onClick={UpperCaseAll}>UpperCaseAll</button>
    </div>
  );
}