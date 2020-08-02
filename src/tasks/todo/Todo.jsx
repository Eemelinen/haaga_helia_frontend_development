import React, { useState, useEffect } from 'react';
import './Todo.css';

function Todo() {

  const [ desc, setDesc ] = useState('');
  const [ item, setItem ] = useState('');
  const [ todos, setTodos ] = useState([]);

  const inputChanged = (e, setter) => {
    setter(e.target.value);
  }
  
  const addTodo = e => {
    e.preventDefault();
    const date = new Date().toDateString()
    setTodos([...todos, { desc, date }]);
  }

  return (
    <div className="Todo">
      <h1>Simple Todo</h1>
      <form onSubmit={addTodo}>
        <input type='text' value={desc} onChange={e => inputChanged(e, setDesc)}></input>
        <input type='submit' value='add'></input>
      </form>
      <table>
        <tbody>

          <tr>
            <th>Date</th>
            <th>Description</th>
          </tr>

          {todos.map((todo, index) => (
            <tr key={index}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
            </tr>))}

        </tbody>
      </table>
    </div>
  );
}

export default Todo;
