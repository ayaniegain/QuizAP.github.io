import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from "../Helpers/QuestionBank"
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChoose, setOptionChoose] = useState("")
    const { score, setScore, setGameState } = useContext(QuizContext)

    const nextQuestion = () => {
        if (Questions[currentQuestion].asnwer == optionChoose) {
            setScore(score + 1)

        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].asnwer == optionChoose) {
            setScore(score + 1)

        }
        setGameState("endScreen")

    }

    return <div className='Quiz'>
        <h1>{Questions[currentQuestion].prompt}</h1>
        <div className='options'>
            <button onClick={() => setOptionChoose("A")}>{Questions[currentQuestion].optionA}</button>
            <button onClick={() => setOptionChoose("B")}>{Questions[currentQuestion].optionB}</button>
            <button onClick={() => setOptionChoose("C")}>{Questions[currentQuestion].optionC}</button>
            <button onClick={() => setOptionChoose("D")}>{Questions[currentQuestion].optionD}</button>
        </div>
        {currentQuestion == Questions.length - 1 ? (<button onClick={finishQuiz }>finish quiz</button>) : (

            <button onClick={nextQuestion}>Next Question</button>
        )}
    </div>;
}

export default Quiz;
