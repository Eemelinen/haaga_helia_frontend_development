import React, { useState } from 'react';
import './Todo.css';

function TodoDelete() {

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
    <div className="TodoDelete">
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
            <th>Action</th>
          </tr>

          {todos.map((todo, i) => (
            <tr key={i}>
              <td>{todo.date}</td>
              <td>{todo.desc}</td>
              <td><button onClick={() => deleteTodo(i)}>Delete</button></td>
            </tr>))}

        </tbody>
      </table>
    </div>
  );
}

export default TodoDelete;
