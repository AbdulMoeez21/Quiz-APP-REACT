
import React, { useState } from "react";

 import {questions} from '../constants/Constants'

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [showExplanation, setShowExplanation] = useState(false);
  const [answerStatus, setAnswerStatus] = useState(null);

  function handleOptionClick(index) {
    setSelectedOptionIndex(index);
    setAnswerStatus(null);
  }

  function handlePreviousClick() {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedOptionIndex(-1);
      setShowExplanation(false);
      setAnswerStatus(null);
    }
  }

  function handleNextClick() {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOptionIndex(-1);
      setShowExplanation(false);
      setAnswerStatus(null);
    }
  }

  function handleSubmitClick() {
    const selectedOption = currentQuestion.options[selectedOptionIndex];
    const isCorrect =
      selectedOption !== undefined && selectedOption === currentQuestion.answer;
    setAnswerStatus(isCorrect);
    setShowExplanation(true);
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="m-10">
     <div className="flex items-center justify-center my-10 -ml-16">
    <p className="text-sm font-medium text-gray-500 ">
   Question {currentQuestionIndex + 1} of {questions.length}
</p>
    </div>
    <div className="flex flex-col items-center justify-center min-h-screen">
    

      <div className="w-full max-w-md px-4 py-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">{currentQuestion.question}</h1>
        <div className="flex flex-col space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`p-4 rounded-lg ${
                selectedOptionIndex === index
                  ? answerStatus === null
                    ? "bg-blue-200 text-gray-900"
                    : answerStatus
                    ? "bg-green-50 text-white"
                    : "bg-red-50-50 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
              onClick={() => handleOptionClick(index)}
              style={{
                backgroundColor:
                  answerStatus === false && currentQuestion.answer === option
                    ? "lightgreen"
                    : answerStatus === true && currentQuestion.answer === option
                    ? "lightgreen"
                    : answerStatus === false && selectedOptionIndex === index
                    ? "lightcoral"
                    : undefined,
                color:
                  answerStatus === false && selectedOptionIndex === index
                    ? "white"
                    : undefined,
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-8">
          <button
            className="p-4 rounded-lg bg-gray-700 hover:bg-gray-800 text-gray-100"
            onClick={handlePreviousClick}
          >
            Previous
          </button>
          <button
            className="p-4 rounded-lg bg-lime-800 hover:bg-lime-900 text-gray-900"
            onClick={handleSubmitClick}
          >
            Submit
          </button>

          <button
            className="p-4 rounded-lg bg-teal-800 hover:bg-teal-900 text-gray-900"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
        {showExplanation && (
          <div className="mt-8">
            <p className="font-bold">Explanation:</p>
            <p>{currentQuestion.explanation}</p>
            
          </div>
        )}
        
      </div>
      
    </div>
   
    </div>
  );
}

export default Quiz;

