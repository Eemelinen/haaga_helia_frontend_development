import React, { useState } from 'react';

function App() {

  const [ name, setname ] = useState('');
  const [ age, setAge] = useState('');
  const [ ageResponse, setAgeResponse ] = useState('');

  const ageCheck = (arg) => arg < 18;

  const ageMessage = (arg) => ageCheck(arg)
    ? 'You are too young.'
    : `Hello ${name}!`

  return (
    <div className="App">
      <p className='greeting'>{ageResponse}</p>
      <label>Name: </label>
      <input type='text' name='name' onChange={(e) => {setname(e.target.value)}}/>
      <label>age: </label>
      <input type='number' name='age' onChange={(e) => {setAge(e.target.value)}}/>
      <button onClick={() => setAgeResponse(ageMessage(age))}>Submit</button>
    </div>
  );
}

export default App;
