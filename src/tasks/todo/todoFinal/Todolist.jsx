import React from 'react';

function Todolist(props) {

  const { desc, setDesc, addTodo, inputChanged } = props;

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type='text' value={desc} onChange={e => inputChanged(e, setDesc)}></input>
        <input type='submit' value='add'></input>
      </form>
    </div>
  );
}

export default Todolist;
