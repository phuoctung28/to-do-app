import { useState } from 'react';
import { TodoApp } from './components/TodoApp';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
     <TodoApp />
    </div>
  );
}

export default App;
