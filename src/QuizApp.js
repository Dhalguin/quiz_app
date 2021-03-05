import React, { useState } from "react";
import questions from "./json/questions";
import "./css/style.css";

function QuizApp() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButton = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    let next = currentQuestion + 1;
    if (next < questions.length) {
      setCurrentQuestion(next);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className="container">
      <div className="carte">
        {showScore ? (
          <div className="text-center">
            <h4>
              You scored {score} out of {questions.length}
            </h4>
          </div>
        ) : (
          <div className="question-section row">
            <div className="question-text col-md-5">
              <span>
                <h4 className="d-inline-block">
                  Question {currentQuestion + 1}
                </h4>
                /{questions.length}
              </span>

              <h6 className="mt-5">
                {questions[currentQuestion].questionText}
              </h6>
            </div>
            <div className="question-options col-md-7 text-center">
              {questions[currentQuestion].answerOptions.map((item, index) => (
                <button
                  key={index}
                  className="col-md-9 mb-2"
                  onClick={() => handleAnswerButton(item.isCorrect)}
                >
                  {item.answerText}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default QuizApp;
