import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions,Difficulty } from './Services/API';

const totallQuestion = 10;

const App = () => {
	const [loading, setLoading] = useState(false);

	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswer, setUserAnswer] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(totallQuestion,Difficulty.EASY))

	const question = async () => {};

	const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

	const nextQuestion = () => {};

	return (
		<div className="App">
			<h1>REACT QUIZ APPLICATION</h1>
			<button className="start" onClick={question}>
				Start
			</button>
			<p className="Score"> Score:</p>
			<p>Loading Question... </p>
			{/* <QuestionCard
				questionNumber={number + 1}
				totalQuestions={totallQuestion}
				question={questions[number].question}
				answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
			/> */}
			<button className="next" onClick={nextQuestion}>
				Next
			</button>
		</div>
	);
};

export default App;
