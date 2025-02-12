// React web component (App.jsx)
import './App.css';
import MyLudo from './MyLudo.jsx';
import TodoApp from './TodoApp.jsx';

function App() {
  return (
    <div className="App">
      <TodoApp />
      <TodoApp />
      <TodoApp />
      <TodoApp />
    </div>
  );
}

export default App;
