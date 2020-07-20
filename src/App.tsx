import React from 'react';

import QuestionCard from './components/QuestionCard'

const App = () => {

  const question = async () => {

  }

  const checkAnswe = (e: React.MouseEvent<HTMLButtonElement>) => {

  }


  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>REACT QUIZ APPLICATION</h1>
      <button className="start" onClick={question}>
        Start
      </button>
      <p className="Score"> Score:</p>
      <p>Loading Question... </p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>Next</button>
    </div>
  );
}

export default App;
