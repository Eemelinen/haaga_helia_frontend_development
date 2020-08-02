import React, { useState } from 'react';
import './Todo.css';
import Todotable from './Todotable';
import Todolist from './Todolist';

function Todo() {

  const [ desc, setDesc ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const inputChanged = (e, setter) => {
    setter(e.target.value);
  }
  
  const addTodo = e => {
    e.preventDefault();
    const date = new Date().toDateString()
    setTodos([...todos, { desc, date }]);
  }

  const deleteTodo = (i) => setTodos(todos.filter((todo, index) => i !== index));

  return (
    <div className="App">
      <h1>Simple Todo</h1>

      <Todolist desc={desc} setDesc={setDesc} addTodo={addTodo} inputChanged={inputChanged}/>

      <Todotable todos={todos} deleteTodo={deleteTodo}/>

    </div>
  );
}

export default Todo;
