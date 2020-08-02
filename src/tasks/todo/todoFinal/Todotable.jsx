import React from 'react';

function Todotable(props) {

  const { todos, deleteTodo } = props;

  return (
    <div>
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
  )

}

export default Todotable;