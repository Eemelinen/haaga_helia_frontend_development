import React, { useState, useEffect } from 'react';

function trivia() {

  const [ question, setQuestion ] = useState('');

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = () => {
    fetch('https://opentdb.com/api.php?amount=1')
      .then(data => data.json())
      .then(question => setQuestion(question.results[0].question))
  };

  return (
    <div className="App">
      <p>{question}</p>
      <button onClick={() => {fetchQuestion()}}>New question</button>
    </div>
  );
}

export default trivia;