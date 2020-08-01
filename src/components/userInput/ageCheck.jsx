import React, { useState } from 'react';

function ageCheck() {

  const [ name, setname ] = useState('');
  const [ age, setAge] = useState('');

  const ageCheck = () => age < 18;

  const appendToPage = () => ageCheck(age)
    ? 'You are too young.'
    : `Hello ${name}!`

  return (
    <div className="App">
      <p className='greeting'></p>
      <label>Name: </label>
      <input type='text' name='name' onChange={(e) => {setname(e.target.value)}}/>
      <label>age: </label>
      <input type='number' name='age' onChange={(e) => {setAge(e.target.value)}}/>
      <button onClick={() => console.log(appendToPage())}>Submit</button>
    </div>
  );
}

export default ageCheck;