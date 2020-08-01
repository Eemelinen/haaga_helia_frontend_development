import React, { useState } from 'react';
import './App.css';

function App() {

  const [ firstname, setFirstname ] = useState('');
  const [ lastname, setLastname ] = useState('');

  return (
    <div className="App">

        <input type='text' name='firstname' onChange={(e) => {setFirstname(e.target.value)}}/>
        <input type='text' name='lastname' onChange={(e) => {setLastname(e.target.value)}}/>
        <button onClick={() => alert(`Hello ${firstname} ${lastname}!`)}>Submit</button>

    </div>
  );
}

export default App;
